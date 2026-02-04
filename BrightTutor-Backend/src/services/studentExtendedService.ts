/**
 * Student extended API: register, dashboard, curriculum, section-progress,
 * questions, lesson-plans, learning-progress, language-preference, quiz-subjects,
 * streak, track-session, treasure-opened, unlock-next-section, push-token
 */
import bcrypt from 'bcryptjs'
import { randomUUID } from 'crypto'
import { prisma } from '@/lib/prisma'
import { getCurriculum, getNextSection, mapClassroomYearToCurriculumYear } from '@/lib/curriculum/curriculum-loader'
import { generateMapFromCurriculum } from '@/lib/map/map-generator'
import { getSectionQuestions } from '@/lib/map-curriculm/question-loader'
import {
  parseLearningProgress,
  serializeLearningProgress,
  ensureSubjectProgress,
  normalizeSubjectKey,
} from '@/lib/learning-progress-utils'
import { withCache, getDashboardCacheKey } from '@/lib/cache'
import { getSkip, createPaginationResponse } from '@/lib/pagination'
import { getOrCreateStandardSubjects } from '@/services/studentV2Service'

const STANDARD_SUBJECT_TYPES = ['MATH', 'SCIENCE', 'PHYSICS']

export function mapGradeToClassroomYear(grade: string): string {
  const gradeMap: Record<string, string> = {
    premier: 'PREMIER_COLLEGE',
    deuxieme: 'DEUXIEME_COLLEGE',
    troisieme: 'TROISIEME_COLLEGE',
    quatrieme: 'QUATRIEME_COLLEGE',
    bac: 'Year5',
  }
  const normalizedGrade = grade.toLowerCase().trim()
  for (const [key, value] of Object.entries(gradeMap)) {
    if (normalizedGrade.includes(key)) return value
  }
  return 'PREMIER_COLLEGE'
}

export function generateSecurePassword(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let password = ''
  for (let i = 0; i < 6; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

export async function generateUniqueUsername(name: string, schoolId: string): Promise<string> {
  const nameParts = name.trim().split(/\s+/)
  const firstName = nameParts[0] || 'student'
  const lastName = nameParts.slice(1).join('') || 'user'
  const cleanFirstName = firstName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
  const cleanLastName = lastName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
  const base = `${cleanFirstName}.${cleanLastName}`
  let username = base
  let counter = 1
  while (true) {
    const existingStudent = await prisma.student.findFirst({
      where: { username, schoolId },
    })
    if (!existingStudent) break
    username = `${base}${counter}`
    counter++
  }
  return username
}

export async function retryOperation<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: Error | null = null
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error: unknown) {
      lastError = error as Error
      const err = error as { code?: string; message?: string; name?: string }
      const isConnectionError =
        err.code === 'P1001' ||
        err.code === 'P2024' ||
        err.name === 'PrismaClientInitializationError' ||
        err.message?.includes("Can't reach database server") ||
        err.message?.includes('connection pool') ||
        err.message?.includes('Connection reset')
      if (isConnectionError && attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, delay * attempt))
        continue
      }
      throw error
    }
  }
  throw lastError || new Error('Operation failed after retries')
}

export async function register(body: {
  name: string
  age: number
  schoolId: string
  grade: string
  selectedSchool?: { id: string; name: string; city?: string }
}): Promise<
  | { success: true; student: { id: string; name: string; school: string; class: string; credentials: { username: string; password: string } } }
  | { success: false; status: number; error: string; code?: string }
> {
  const { name: safeName, age: ageNum, schoolId, grade, selectedSchool } = body
  if (!selectedSchool) {
    return { success: false, status: 404, error: 'School not found in available schools list' }
  }
  let school = await retryOperation(() =>
    prisma.school.findFirst({
      where: { schoolName: { equals: selectedSchool.name, mode: 'insensitive' } },
      select: { id: true, schoolName: true, applicationStatus: true, subscriptionStatus: true },
    })
  )
  if (!school) {
    const adminEmail = `admin.${selectedSchool.name.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9.]/g, '')}@tutori.io`
    const defaultPassword = 'TempPassword123!'
    const hashedPassword = await bcrypt.hash(defaultPassword, 10)
    // Generate a proper UUID for adminUserId
    const adminUserId = randomUUID()
    school = await retryOperation(() =>
      prisma.school.create({
        data: {
          schoolName: selectedSchool.name,
          contactEmail: adminEmail,
          contactPhone: null,
          wilaya: 'ولاية نواكشوط الشمالية',
          address: selectedSchool.city || 'Nouakchott',
          adminUserId,
          adminName: `${selectedSchool.name} Admin`,
          adminEmail,
          adminPassword: hashedPassword,
          subscriptionPlan: 'BASIC_50',
          subscriptionStatus: 'ACTIVE',
          applicationStatus: 'ACTIVE',
          maxStudents: 9999,
          maxTeachers: 10,
          approvedDate: new Date(),
          approvedBy: 'system_auto_approval',
        },
        select: { id: true, schoolName: true, applicationStatus: true, subscriptionStatus: true },
      })
    )
  }
  if (school && (school.applicationStatus !== 'ACTIVE' || school.subscriptionStatus !== 'ACTIVE')) {
    school = await retryOperation(() =>
      prisma.school.update({
        where: { id: school!.id },
        data: { applicationStatus: 'ACTIVE', subscriptionStatus: 'ACTIVE' },
        select: { id: true, schoolName: true, applicationStatus: true, subscriptionStatus: true },
      })
    )
  }
  const classroomYear = mapGradeToClassroomYear(grade)
  const actualSchoolId = school!.id
  const username = await generateUniqueUsername(safeName, actualSchoolId)
  const password = generateSecurePassword()
  const hashedPassword = await bcrypt.hash(password, 10)
  let uniqueStudentId = safeName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
  let counter = 1
  while (true) {
    const existingId = await retryOperation(() =>
      prisma.student.findFirst({
        where: { studentId: uniqueStudentId, schoolId: actualSchoolId },
      })
    )
    if (!existingId) break
    uniqueStudentId = `${safeName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}${counter}`
    counter++
  }
  let individualClass = await retryOperation(() =>
    prisma.class.findFirst({
      where: {
        schoolId: actualSchoolId,
        className: { contains: 'Individual Students', mode: 'insensitive' },
        classroomYear,
      },
    })
  )
  if (!individualClass) {
    individualClass = await retryOperation(() =>
      prisma.class.create({
        data: {
          schoolId: actualSchoolId,
          gradeLevel: grade,
          className: `Individual Students - ${grade}`,
          classroomYear,
          academicYear: new Date().getFullYear().toString(),
          description: 'Students who registered individually',
        },
      })
    )
    try {
      const year = mapClassroomYearToCurriculumYear(classroomYear)
      const subjects = await getOrCreateStandardSubjects(actualSchoolId, year)
      const subjectsToAssign = [subjects.mathId]
      if (year !== 5) {
        subjectsToAssign.push(subjects.scienceId)
        if (subjects.physicsId) subjectsToAssign.push(subjects.physicsId)
      }
      await prisma.classSubject.createMany({
        data: subjectsToAssign.map((subjectId) => ({ classId: individualClass!.id, subjectId })),
      })
    } catch {
      // continue
    }
  } else {
    const existingSubjects = await prisma.classSubject.findMany({
      where: { classId: individualClass.id },
    })
    if (existingSubjects.length === 0) {
      try {
        const year = mapClassroomYearToCurriculumYear(classroomYear)
        const subjects = await getOrCreateStandardSubjects(actualSchoolId, year)
        const subjectsToAssign = [subjects.mathId]
        if (year !== 5) {
          subjectsToAssign.push(subjects.scienceId)
          if (subjects.physicsId) subjectsToAssign.push(subjects.physicsId)
        }
        await prisma.classSubject.createMany({
          data: subjectsToAssign.map((subjectId) => ({ classId: individualClass!.id, subjectId })),
        })
      } catch {
        // continue
      }
    }
  }
  const student = await retryOperation(() =>
    prisma.student.create({
      data: {
        schoolId: actualSchoolId,
        classId: individualClass!.id,
        studentName: safeName,
        studentId: uniqueStudentId,
        username,
        password: hashedPassword,
        age: ageNum,
        grade,
        learningStyle: 'MIXED',
        interests: JSON.stringify(['general']),
        isSelfRegistered: true,
        isActive: true,
      },
      include: {
        school: { select: { schoolName: true } },
        class: { select: { className: true } },
      },
    })
  )
  const schoolName = student.school?.schoolName ?? ''
  const className = student.class?.className ?? 'Individual Students'
  return {
    success: true,
    student: {
      id: student.id,
      name: student.studentName,
      school: schoolName,
      class: className,
      credentials: { username, password },
    },
  }
}

export async function resolveSchoolFromBody(schoolId: string): Promise<{ id: string; name: string; city?: string } | null> {
  const { parseSchoolsCSV, parseFrArSchoolsTxt } = await import('@/lib/schools-csv-importer')
  const csvSchools = parseSchoolsCSV()
  const frArSchools = parseFrArSchoolsTxt()
  const allSourceSchools = [...csvSchools, ...frArSchools]
  let selected =
    allSourceSchools.find((s) => s.id === schoolId) ||
    allSourceSchools.find((s) => s.name === schoolId)
  if (!selected) {
    const normalized = schoolId.trim().toLowerCase()
    selected = allSourceSchools.find((s) => s.name.trim().toLowerCase() === normalized)
  }
  return selected ?? null
}

export async function getDashboard(studentId: string): Promise<
  | { success: true; student: Record<string, unknown> }
  | { success: false; status: number; error: string }
> {
  const cachedData = await withCache(
    getDashboardCacheKey(studentId),
    async () =>
      prisma.student.findUnique({
        where: { id: studentId },
        include: {
          school: { select: { schoolName: true, id: true } },
          class: {
            include: {
              teacherClasses: { include: { teacher: { select: { id: true, name: true } } } },
              classSubjects: { include: { subject: { select: { id: true, name: true, subjectType: true } } } },
            },
          },
        },
      }),
    { ttl: 300 }
  )
  const student = cachedData
  if (!student) return { success: false, status: 404, error: 'Student not found' }
  type ClassSubjectItem = { subject: { id: string; name: string; subjectType: string | null } }
  const rawClassSubjects: ClassSubjectItem[] = (student as { class?: { classSubjects?: ClassSubjectItem[] } }).class?.classSubjects || []
  let classSubjects: Array<{ subject: { id: string; name: string } }> = []
  if (rawClassSubjects.length > 0) {
    classSubjects = rawClassSubjects
      .filter((cs) => {
        const st = cs.subject.subjectType
        const name = (cs.subject.name || '').toLowerCase()
        if (st && STANDARD_SUBJECT_TYPES.includes(st)) return true
        const isMath = name.includes('math') || name.includes('mathématique')
        const isScience = name.includes('science') || name.includes('sciences')
        const isPhysics = name.includes('physic') || name.includes('physique')
        const isFrench = name.includes('french') || name.includes('français')
        const isIslamic = name.includes('islamic') || name.includes('islamique')
        const isArabic = name.includes('arabic') || name.includes('arabe')
        if (isFrench || isIslamic || isArabic) return false
        return isMath || isScience || isPhysics
      })
      .map((cs) => ({ subject: { id: cs.subject.id, name: cs.subject.name } }))
  }
  if (classSubjects.length === 0 && (student as { class?: { classroomYear: string | null } }).class?.classroomYear) {
    const year = mapClassroomYearToCurriculumYear((student as { class: { classroomYear: string } }).class.classroomYear)
    const subjects = await getOrCreateStandardSubjects(student.schoolId, year)
    classSubjects = [
      { subject: { id: subjects.mathId, name: 'Mathématiques' } },
      { subject: { id: subjects.scienceId, name: 'Sciences' } },
    ]
    if (subjects.physicsId) classSubjects.push({ subject: { id: subjects.physicsId, name: 'Physique' } })
  }
  const studentProfile = {
    id: student.id,
    studentName: student.studentName,
    username: student.username,
    grade: student.grade,
    age: student.age,
    parentName: student.parentName,
    parentEmail: student.parentEmail,
    parentPhone: student.parentPhone,
    learningStyle: student.learningStyle,
    school: { schoolName: (student as { school: { schoolName: string } }).school.schoolName },
    class: {
      className: (student as { class?: { className: string } }).class?.className || 'Not assigned',
      description: (student as { class?: { description: string | null } }).class?.description,
      classroomYear: (student as { class?: { classroomYear: string | null } }).class?.classroomYear,
      classSubjects,
    },
  }
  return { success: true, student: studentProfile }
}

export async function getCurriculumByYearSubject(
  year: number,
  subject: string
): Promise<{ success: true; map: unknown } | { success: false; status: number; error: string }> {
  let normalizedSubject = subject.toLowerCase()
  if (normalizedSubject.includes('math') || normalizedSubject.includes('mathématiques')) normalizedSubject = 'math'
  else if (normalizedSubject.includes('science') || normalizedSubject.includes('sciences')) normalizedSubject = 'science'
  else if (normalizedSubject.includes('physic') || normalizedSubject.includes('physique')) normalizedSubject = 'physics'
  const curriculum = getCurriculum(year, normalizedSubject)
  if (!curriculum) {
    return { success: false, status: 404, error: `Curriculum not found for Year ${year}, Subject ${normalizedSubject}` }
  }
  const generatedMap = generateMapFromCurriculum(curriculum, year)
  if (!generatedMap || generatedMap.chapters.length === 0) {
    return { success: false, status: 500, error: `Failed to generate map for ${curriculum.title}` }
  }
  return { success: true, map: generatedMap }
}

export async function getChatHistory(studentId: string, page: number, limit: number): Promise<{ data: unknown[]; pagination: unknown }> {
  const skip = getSkip(page, limit)
  const [items, total] = await Promise.all([
    prisma.aIConversation.findMany({
      where: { studentId },
      orderBy: { timestamp: 'desc' },
      skip,
      take: limit,
      select: {
        id: true,
        messageType: true,
        studentMessage: true,
        aiResponse: true,
        conversationTopic: true,
        subjectArea: true,
        timestamp: true,
      },
    }),
    prisma.aIConversation.count({ where: { studentId } }),
  ])
  return createPaginationResponse(items, total, page, limit) as { data: unknown[]; pagination: unknown }
}

export async function getAiContext(studentId: string): Promise<
  | { success: true; context: Record<string, unknown> }
  | { success: false; status: number; error: string }
> {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    select: {
      id: true,
      studentName: true,
      grade: true,
      age: true,
      interests: true,
      learningStyle: true,
      school: { select: { schoolName: true } },
    },
  })
  if (!student) return { success: false, status: 404, error: 'Student not found' }
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const studentContext = {
    student: {
      id: student.id,
      name: student.studentName,
      grade: student.grade || 'Not assigned',
      age: student.age || 12,
      interests: JSON.parse(student.interests || '["learning", "school"]'),
      learningStyle: student.learningStyle || 'Mixed learner',
      schoolName: (student as { school: { schoolName: string } }).school.schoolName,
    },
    teachers: [],
    subjects: [],
    pendingAssignments: [],
    personality: {
      communicationStyle: 'Encouraging and supportive',
      motivationTriggers: ['Achievement recognition', 'Visual examples', 'Progress celebration'],
      preferredExplanationStyle: 'Step-by-step with examples',
      attentionSpan: 15,
      responseToEncouragement: 'Positive - gets excited about learning',
    },
    recentTopics: ['mathematics', 'reading', 'science'],
    conversationHistory: [],
    currentMonth: months[new Date().getMonth()],
    culturalContext: {
      country: 'Mauritania',
      language: 'Arabic/French',
      dateFormat: 'DD/MM/YYYY',
      timeZone: 'GMT+0',
      culturalValues: ['Islamic values', 'Respect for elders', 'Community spirit', 'Love of learning'],
    },
  }
  return { success: true, context: studentContext }
}

export async function getSectionProgress(
  studentId: string,
  sectionId: string
): Promise<{ status: string; progress: unknown }> {
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  })
  if (!aiPersonality?.learningProgress) {
    return { status: 'not_started', progress: null }
  }
  try {
    const progress = JSON.parse(aiPersonality.learningProgress)
    const sectionProgress = progress.sectionProgress?.[sectionId]
    if (sectionProgress) {
      return {
        status: sectionProgress.status || 'in_progress',
        progress: {
          currentQuestionIndex: sectionProgress.currentQuestionIndex || 0,
          answeredQuestions: sectionProgress.answeredQuestions || [],
          correctlyAnsweredQuestions: sectionProgress.correctlyAnsweredQuestions || [],
          wrongQuestions: sectionProgress.wrongQuestions || [],
          heartsRemaining: sectionProgress.heartsRemaining || 3,
          progressPercent: sectionProgress.progressPercent || 0,
          retryMode: sectionProgress.retryMode || false,
          retryQueue: sectionProgress.retryQueue || [],
          startedAt: sectionProgress.startedAt,
          lastUpdatedAt: sectionProgress.lastUpdatedAt,
        },
      }
    }
  } catch {
    // ignore
  }
  return { status: 'not_started', progress: null }
}

export async function saveSectionProgress(
  studentId: string,
  sectionId: string,
  body: Record<string, unknown>
): Promise<void> {
  const {
    currentQuestionIndex,
    answeredQuestions,
    correctlyAnsweredQuestions,
    wrongQuestions,
    heartsRemaining,
    progressPercent,
    retryMode,
    retryQueue,
    status = 'in_progress',
  } = body
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  })
  const allProgress = parseLearningProgress(aiPersonality?.learningProgress ?? '{}')
  if (!allProgress.sectionProgress) allProgress.sectionProgress = {}
  const existing = allProgress.sectionProgress[sectionId] as Record<string, unknown> | undefined
  allProgress.sectionProgress[sectionId] = {
    status,
    currentQuestionIndex: currentQuestionIndex ?? 0,
    answeredQuestions: answeredQuestions ?? [],
    correctlyAnsweredQuestions: correctlyAnsweredQuestions ?? [],
    wrongQuestions: wrongQuestions ?? [],
    heartsRemaining: heartsRemaining ?? 3,
    progressPercent: progressPercent ?? 0,
    retryMode: retryMode ?? false,
    retryQueue: retryQueue ?? [],
    startedAt: existing?.startedAt || new Date().toISOString(),
    lastUpdatedAt: new Date().toISOString(),
  }
  await prisma.aIPersonality.upsert({
    where: { studentId },
    create: { studentId, learningProgress: serializeLearningProgress(allProgress) },
    update: { learningProgress: serializeLearningProgress(allProgress), updatedAt: new Date() },
  })
}

export async function clearSectionProgress(studentId: string, sectionId: string): Promise<void> {
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  })
  const allProgress = parseLearningProgress(aiPersonality?.learningProgress ?? '{}')
  if (allProgress.sectionProgress?.[sectionId]) {
    delete allProgress.sectionProgress[sectionId]
    await prisma.aIPersonality.update({
      where: { studentId },
      data: { learningProgress: serializeLearningProgress(allProgress), updatedAt: new Date() },
    })
  }
}

export async function getQuestions(
  year: number,
  subject: string,
  sectionId: string
): Promise<
  | { success: true; exercises: unknown[]; sectionId: string; year: number; subject: string }
  | { success: false; status: number; error: string }
> {
  let normalizedSubject = subject.toLowerCase()
  if (normalizedSubject.includes('math') || normalizedSubject.includes('mathématiques')) normalizedSubject = 'math'
  else if (normalizedSubject.includes('science') || normalizedSubject.includes('sciences')) normalizedSubject = 'science'
  else if (normalizedSubject.includes('physic') || normalizedSubject.includes('physique')) normalizedSubject = 'physics'
  const sectionQuestions = getSectionQuestions(year, normalizedSubject, sectionId)
  if (!sectionQuestions) {
    return { success: false, status: 404, error: `Questions not found for year ${year}, subject ${normalizedSubject}, section ${sectionId}` }
  }
  return {
    success: true,
    exercises: sectionQuestions.exercises,
    sectionId,
    year,
    subject: normalizedSubject,
  }
}

export async function getLessonPlans(studentId: string): Promise<
  | { success: true; lessonPlans: unknown[] }
  | { success: false; status: number; error: string }
> {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    include: {
      class: { select: { id: true, className: true } },
      school: { select: { id: true, schoolName: true } },
    },
  })
  if (!student) return { success: false, status: 404, error: 'Student not found' }
  const className = (student as { class?: { className: string } }).class?.className || ''
  const lessonPlans = await prisma.assignment.findMany({
    where: { status: 'published', assignedClasses: { contains: className } },
    include: { teacher: { select: { name: true } } },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })
  const formatted = lessonPlans.map((plan) => ({
    id: plan.id,
    title: plan.title,
    description: plan.description,
    subject: plan.subject,
    dueDate: plan.dueDate,
    teacherName: (plan as { teacher: { name: string } }).teacher.name,
  }))
  return { success: true, lessonPlans: formatted }
}

export async function getLearningProgress(
  studentId: string,
  subjectParam?: string
): Promise<{
  completedTopics: string[]
  currentSection: string | null
  currentChapter: string | null
  subject: string | null
}> {
  let normalizedSubject: string | null = null
  if (subjectParam) {
    normalizedSubject = subjectParam.toLowerCase()
    if (normalizedSubject.includes('math') || normalizedSubject === 'chat') normalizedSubject = 'math'
    else if (normalizedSubject.includes('science')) normalizedSubject = 'science'
    else if (normalizedSubject.includes('physic')) normalizedSubject = 'physics'
  }
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  })
  if (!aiPersonality?.learningProgress) {
    return { completedTopics: [], currentSection: null, currentChapter: null, subject: normalizedSubject || null }
  }
  const progress = JSON.parse(aiPersonality.learningProgress)
  if (normalizedSubject && progress[normalizedSubject]) {
    const subjectProgress = progress[normalizedSubject]
    return {
      completedTopics: subjectProgress.completedTopics || [],
      currentSection: subjectProgress.currentSection || null,
      currentChapter: subjectProgress.currentChapter || null,
      subject: normalizedSubject,
    }
  }
  if (progress.currentSection) {
    return {
      completedTopics: progress.completedTopics || [],
      currentSection: progress.currentSection || null,
      currentChapter: progress.currentChapter || null,
      subject: null,
    }
  }
  return { completedTopics: [], currentSection: null, currentChapter: null, subject: normalizedSubject || null }
}

export async function getLanguagePreference(studentId: string): Promise<
  | { success: true; languagePreference: string }
  | { success: false; status: number; error: string }
> {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    select: { id: true, languagePreference: true },
  })
  if (!student) return { success: false, status: 404, error: 'Student not found' }
  return {
    success: true,
    languagePreference: (student as { languagePreference?: string }).languagePreference || 'fr',
  }
}

export async function updateLanguagePreference(
  studentId: string,
  languagePreference: string
): Promise<{ success: true; student: unknown } | { success: false; status: number; error: string }> {
  const updated = await prisma.student.update({
    where: { id: studentId },
    data: { languagePreference },
    select: { id: true, studentName: true, languagePreference: true },
  })
  return { success: true, student: updated }
}

export async function getQuizSubjects(studentId: string): Promise<
  | { success: true; subjects: Array<{ id: string; name: string }> }
  | { success: false; status: number; error: string }
> {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    include: {
      class: {
        include: {
          classSubjects: { include: { subject: true } },
        },
      },
    },
  })
  if (!student) return { success: false, status: 404, error: 'Student not found' }
  type QuizSubjectItem = { subject: { id: string; name: string; subjectType: string | null } }
  const classSubjects: QuizSubjectItem[] = (student as { class?: { classSubjects?: QuizSubjectItem[] } }).class?.classSubjects || []
  let subjects = classSubjects
    .filter((cs) => {
      const st = cs.subject.subjectType
      const name = (cs.subject.name || '').toLowerCase()
      if (st && STANDARD_SUBJECT_TYPES.includes(st)) return true
      return name.includes('math') || name.includes('science') || name.includes('physic')
    })
    .map((cs) => ({ id: cs.subject.id, name: cs.subject.name }))
  if (subjects.length === 0 && (student as { class?: { classroomYear: string | null } }).class?.classroomYear) {
    const year = mapClassroomYearToCurriculumYear((student as { class: { classroomYear: string } }).class.classroomYear)
    const std = await getOrCreateStandardSubjects(student.schoolId, year)
    subjects = [
      { id: std.mathId, name: 'Mathématiques' },
      { id: std.scienceId, name: 'Sciences' },
    ]
    if (std.physicsId) subjects.push({ id: std.physicsId, name: 'Physique' })
  }
  return { success: true, subjects }
}

export async function getStreak(studentId: string): Promise<{
  streak: number
  completedSections: number
  sectionsCompletedIn7Days: number
  hasCompleted7In7Days: boolean
}> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  let streak = 0
  for (let i = 0; i < 30; i++) {
    const checkDate = new Date(today)
    checkDate.setDate(checkDate.getDate() - i)
    const nextDay = new Date(checkDate)
    nextDay.setDate(nextDay.getDate() + 1)
    const hasActivity = await prisma.quizSession.findFirst({
      where: {
        studentId,
        startTime: { gte: checkDate, lt: nextDay },
        status: 'completed',
      },
    })
    if (hasActivity) streak++
    else break
  }
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  })
  let completedSections: string[] = []
  if (aiPersonality?.learningProgress) {
    try {
      const progress = JSON.parse(aiPersonality.learningProgress)
      completedSections = progress.completedTopics || []
    } catch {
      // ignore
    }
  }
  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const recentSessions = await prisma.quizSession.findMany({
    where: { studentId, startTime: { gte: sevenDaysAgo }, status: 'completed' },
  })
  const sectionsCompletedIn7Days = new Set(
    recentSessions
      .map((s) => {
        try {
          const questions = JSON.parse(s.questions || '[]')
          return (questions[0] as { sectionId?: string })?.sectionId
        } catch {
          return null
        }
      })
      .filter(Boolean)
  ).size
  return {
    streak,
    completedSections: completedSections.length,
    sectionsCompletedIn7Days,
    hasCompleted7In7Days: sectionsCompletedIn7Days >= 7,
  }
}

export async function postStreak(
  studentId: string,
  body: { sectionId: string; subject?: string; isFirstTime?: boolean }
): Promise<{ success: true; streak: number }> {
  const { sectionId, subject = 'math', isFirstTime } = body
  if (!isFirstTime) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    let streak = 0
    for (let i = 0; i < 30; i++) {
      const checkDate = new Date(today)
      checkDate.setDate(checkDate.getDate() - i)
      const nextDay = new Date(checkDate)
      nextDay.setDate(nextDay.getDate() + 1)
      const hasActivity = await prisma.quizSession.findFirst({
        where: { studentId, startTime: { gte: checkDate, lt: nextDay }, status: 'completed' },
      })
      if (hasActivity) streak++
      else break
    }
    return { success: true, streak }
  }
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const existingToday = await prisma.quizSession.findFirst({
    where: {
      studentId,
      startTime: { gte: today, lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) },
      status: 'completed',
    },
  })
  if (!existingToday) {
    await prisma.quizSession.create({
      data: {
        studentId,
        subject: subject || 'math',
        questions: JSON.stringify([{ sectionId }]),
        status: 'completed',
        startTime: today,
        endTime: new Date(),
      },
    })
  }
  let streak = 0
  for (let i = 0; i < 30; i++) {
    const checkDate = new Date(today)
    checkDate.setDate(checkDate.getDate() - i)
    const nextDay = new Date(checkDate)
    nextDay.setDate(nextDay.getDate() + 1)
    const hasActivity = await prisma.quizSession.findFirst({
      where: { studentId, startTime: { gte: checkDate, lt: nextDay }, status: 'completed' },
    })
    if (hasActivity) streak++
    else break
  }
  return { success: true, streak }
}

export async function trackSession(
  studentId: string,
  body: {
    sessionStart: string
    sessionEnd?: string
    screenTime: { chat?: number; map?: number; rankings?: number; community?: number; profile?: number }
  }
): Promise<{ success: true; message: string } | { success: false; status: number; error: string }> {
  const { sessionStart, sessionEnd, screenTime } = body
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    select: { id: true },
  })
  if (!student) return { success: false, status: 404, error: 'Student not found' }
  const startDate = new Date(sessionStart)
  const endDate = sessionEnd ? new Date(sessionEnd) : new Date()
  if (isNaN(startDate.getTime())) {
    return { success: false, status: 400, error: 'Invalid sessionStart date' }
  }
  const totalDuration = Math.max(0, Math.floor((endDate.getTime() - startDate.getTime()) / 1000))
  const chatTime = Math.max(0, Math.floor(screenTime.chat || 0))
  const mapTime = Math.max(0, Math.floor(screenTime.map || 0))
  const rankingsTime = Math.max(0, Math.floor(screenTime.rankings || 0))
  const communityTime = Math.max(0, Math.floor(screenTime.community || 0))
  const profileTime = Math.max(0, Math.floor(screenTime.profile || 0))
  const dateOnly = new Date(startDate)
  dateOnly.setHours(0, 0, 0, 0)
  try {
    const existingSession = await prisma.studentSession.findFirst({
      where: { studentId, date: dateOnly, sessionEnd: null },
    })
    if (existingSession) {
      await prisma.studentSession.update({
        where: { id: existingSession.id },
        data: {
          sessionEnd: endDate,
          totalDuration: existingSession.totalDuration + totalDuration,
          chatTime: existingSession.chatTime + chatTime,
          mapTime: existingSession.mapTime + mapTime,
          rankingsTime: existingSession.rankingsTime + rankingsTime,
          communityTime: existingSession.communityTime + communityTime,
          profileTime: existingSession.profileTime + profileTime,
          updatedAt: new Date(),
        },
      })
    } else {
      await prisma.studentSession.create({
        data: {
          studentId,
          date: dateOnly,
          sessionStart: startDate,
          sessionEnd: endDate,
          totalDuration,
          chatTime,
          mapTime,
          rankingsTime,
          communityTime,
          profileTime,
        },
      })
    }
  } catch (err: unknown) {
    const e = err as { message?: string }
    if (e.message?.includes('does not exist') || e.message?.includes('Unknown table')) {
      return { success: true, message: 'Session tracking will be available after database migration' }
    }
    throw err
  }
  return { success: true, message: 'Session tracked successfully' }
}

export async function treasureOpened(
  studentId: string,
  body: { chapterId: string; subject: string }
): Promise<
  | { success: true; treasuresOpened: string[] }
  | { success: false; status: number; error: string }
> {
  const { chapterId, subject } = body
  let normalizedSubject = String(subject).toLowerCase()
  if (normalizedSubject.includes('math') || normalizedSubject === 'chat') normalizedSubject = 'math'
  else if (normalizedSubject.includes('science')) normalizedSubject = 'science'
  else if (normalizedSubject.includes('physic')) normalizedSubject = 'physics'
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  })
  if (!aiPersonality) return { success: false, status: 404, error: 'Student not found' }
  let allProgress: Record<string, unknown> = {}
  try {
    allProgress = aiPersonality.learningProgress ? (JSON.parse(aiPersonality.learningProgress) as Record<string, unknown>) : {}
    if (!allProgress || typeof allProgress !== 'object') allProgress = {}
  } catch {
    allProgress = {}
  }
  const subjectProgress = (allProgress[normalizedSubject] as { treasuresOpened?: string[] }) || {}
  const treasuresOpened = Array.isArray(subjectProgress.treasuresOpened) ? [...subjectProgress.treasuresOpened] : []
  if (!treasuresOpened.includes(chapterId)) treasuresOpened.push(chapterId)
  ;(allProgress as Record<string, unknown>)[normalizedSubject] = { ...subjectProgress, treasuresOpened }
  await prisma.aIPersonality.upsert({
    where: { studentId },
    create: { studentId, learningProgress: JSON.stringify(allProgress), updatedAt: new Date() },
    update: { learningProgress: JSON.stringify(allProgress), updatedAt: new Date() },
  })
  return { success: true, treasuresOpened }
}

export async function unlockNextSection(
  studentId: string,
  body: { subject: string; currentSectionId: string }
): Promise<
  | { success: true; nextSection: string; nextChapter: string; completedTopics: string[]; subject: string; message: string }
  | { success: false; status: number; error: string; details?: unknown }
> {
  const { subject, currentSectionId } = body
  const [chapterId, sectionId] = String(currentSectionId).split('-s')
  const fullChapterId = chapterId
  const fullSectionId = currentSectionId
  let normalizedSubjectRaw = String(subject).toLowerCase()
  if (normalizedSubjectRaw === 'chat') normalizedSubjectRaw = 'math'
  const subjectKey = normalizeSubjectKey(normalizedSubjectRaw)
  let studentYear = 1
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    include: { class: { select: { classroomYear: true } } },
  })
  if (student?.class?.classroomYear) {
    studentYear = mapClassroomYearToCurriculumYear(student.class.classroomYear)
  }
  const nextSection = getNextSection(studentYear, subjectKey, fullChapterId, fullSectionId)
  if (!nextSection) {
    return {
      success: false,
      status: 404,
      error: 'No next section found',
      details: { year: studentYear, subject: subjectKey, chapterId: fullChapterId, sectionId: fullSectionId },
    }
  }
  let completedTopics: string[] = []
  await prisma.$transaction(async (tx) => {
    const existing = await tx.aIPersonality.findUnique({
      where: { studentId },
    })
    const allProgress = parseLearningProgress(existing?.learningProgress ?? '{}')
    const subjectProgress = ensureSubjectProgress(allProgress, subjectKey as 'math' | 'science' | 'physics')
    completedTopics = subjectProgress.completedTopics || []
    if (!completedTopics.includes(currentSectionId)) completedTopics.push(currentSectionId)
    allProgress[subjectKey] = {
      ...subjectProgress,
      currentChapter: nextSection.chapter,
      currentSection: nextSection.section,
      completedTopics,
      nextSection: nextSection.section,
    }
    await tx.aIPersonality.upsert({
      where: { studentId },
      create: { studentId, learningProgress: serializeLearningProgress(allProgress) },
      update: { learningProgress: serializeLearningProgress(allProgress), updatedAt: new Date() },
    })
  })
  return {
    success: true,
    nextSection: nextSection.section,
    nextChapter: nextSection.chapter,
    completedTopics,
    subject: subjectKey,
    message: `Section ${currentSectionId} completed in ${subjectKey}. Section ${nextSection.section} unlocked.`,
  }
}

export async function registerPushToken(
  studentId: string,
  body: { expoPushToken: string; platform?: string; deviceId?: string }
): Promise<
  | { success: true; data: { id: string; studentId: string; platform: string; isActive: boolean } }
  | { success: false; status: number; error: string }
> {
  const { expoPushToken, platform = 'unknown', deviceId = 'default' } = body
  const student = await prisma.student.findUnique({
    where: { id: studentId },
  })
  if (!student) return { success: false, status: 404, error: 'Student not found' }
  const finalDeviceId = deviceId || 'default'
  const existingToken = await prisma.studentPushToken.findFirst({
    where: { studentId, deviceId: finalDeviceId },
  })
  let pushToken
  if (existingToken) {
    pushToken = await prisma.studentPushToken.update({
      where: { id: existingToken.id },
      data: { expoPushToken, platform, isActive: true, updatedAt: new Date() },
    })
  } else {
    pushToken = await prisma.studentPushToken.create({
      data: { studentId, expoPushToken, platform, deviceId: finalDeviceId, isActive: true },
    })
  }
  return {
    success: true,
    data: {
      id: pushToken.id,
      studentId: pushToken.studentId,
      platform: pushToken.platform,
      isActive: pushToken.isActive,
    },
  }
}

export async function unregisterPushToken(studentId: string, deviceId: string): Promise<void> {
  await prisma.studentPushToken.updateMany({
    where: { studentId, deviceId },
    data: { isActive: false, updatedAt: new Date() },
  })
}
