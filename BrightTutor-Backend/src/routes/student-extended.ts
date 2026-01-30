/**
 * Student extended API: register, dashboard, curriculum, section-progress,
 * questions, lesson-plans, learning-progress, language-preference, quiz-subjects,
 * streak, track-session, treasure-opened, unlock-next-section, push-token, etc.
 * Ported from BrightTutor-AI-Platform src/app/api/student/
 */
import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
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
import { getJWTSecret } from '@/lib/security/secrets'
import { withCache, getDashboardCacheKey } from '@/lib/cache'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { validateId, validateSectionId, validateString, validateSchoolSelectionId } from '@/lib/security/validation'
import { containsSQLInjection, containsXSS, containsCommandInjection } from '@/lib/security/injection-prevention'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { getSkip, createPaginationResponse } from '@/lib/pagination'

const router = Router()
const JWT_SECRET = () => getJWTSecret()
const STANDARD_SUBJECT_TYPES = ['MATH', 'SCIENCE', 'PHYSICS']

function toRateLimitRequest(req: Request): { url: string; headers: { get: (name: string) => string | null } } {
  return {
    url: `${req.protocol}://${req.get('host') || 'localhost'}${req.originalUrl}`,
    headers: { get: (name: string) => req.get(name) ?? null },
  }
}

function getStudentIdFromToken(req: Request, res: Response): string | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authentication required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { role?: string; studentId?: string }
    if (decoded.role !== 'STUDENT' || !decoded.studentId) {
      res.status(403).json({ error: 'Student access only' })
      return null
    }
    return decoded.studentId
  } catch {
    res.status(401).json({ error: 'Invalid authentication token' })
    return null
  }
}

function requireStudentMatch(req: Request, res: Response, paramStudentId: string): string | null {
  const tokenStudentId = getStudentIdFromToken(req, res)
  if (!tokenStudentId) return null
  if (tokenStudentId !== paramStudentId) {
    res.status(403).json({ error: 'Unauthorized access' })
    return null
  }
  return tokenStudentId
}

async function getOrCreateStandardSubjects(
  schoolId: string,
  year: number
): Promise<{ mathId: string; scienceId: string; physicsId: string | null }> {
  const existingSubjects = await prisma.subject.findMany({
    where: {
      schoolId,
      OR: [
        { name: { in: ['Mathematics', 'Mathématiques', 'Math'] } },
        { name: { in: ['Science', 'Sciences'] } },
        ...(year >= 2 ? [{ name: { in: ['Physics', 'Physique'] } }] : []),
      ],
      isActive: true,
    },
  })
  const subjectMap = new Map<string, { id: string }>()
  for (const s of existingSubjects) {
    const n = s.name.toLowerCase()
    if (n.includes('math') || n.includes('mathématique')) subjectMap.set('math', s)
    else if (n.includes('science') || n.includes('sciences')) subjectMap.set('science', s)
    else if (n.includes('physic') || n.includes('physique')) subjectMap.set('physics', s)
  }
  let mathSubject = subjectMap.get('math')
  if (!mathSubject) {
    mathSubject = await prisma.subject.create({
      data: {
        schoolId,
        name: 'Mathématiques',
        description: 'Mathematics curriculum',
        language: 'French',
        subjectType: 'MATH',
        icon: '📐',
        isActive: true,
      },
    })
  }
  let scienceSubject = subjectMap.get('science')
  if (!scienceSubject) {
    scienceSubject = await prisma.subject.create({
      data: {
        schoolId,
        name: 'Sciences',
        description: 'Science curriculum',
        language: 'French',
        subjectType: 'SCIENCE',
        icon: '🔬',
        isActive: true,
      },
    })
  }
  let physicsSubject: { id: string } | null = year >= 2 ? subjectMap.get('physics') ?? null : null
  if (year >= 2 && !physicsSubject) {
    physicsSubject = await prisma.subject.create({
      data: {
        schoolId,
        name: 'Physique',
        description: 'Physics curriculum',
        language: 'French',
        subjectType: 'PHYSICS',
        icon: '⚛️',
        isActive: true,
      },
    })
  }
  return {
    mathId: mathSubject.id,
    scienceId: scienceSubject.id,
    physicsId: physicsSubject?.id ?? null,
  }
}

function mapGradeToClassroomYear(grade: string): string {
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

const generateSecurePassword = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let password = ''
  for (let i = 0; i < 6; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

async function generateUniqueUsername(name: string, schoolId: string): Promise<string> {
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

async function retryOperation<T>(
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

const dashboardRateLimiter = createRateLimiter(rateLimitConfigs.dashboard)

// ---------- POST /register ----------
router.post('/register', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { name, age, schoolId, grade } = body

    if (!name || !age || !schoolId || !grade) {
      return res.status(400).json({
        error: 'Missing required fields: name, age, schoolId, and grade are required',
      })
    }

    const nameValidation = validateString(name, { minLength: 1, maxLength: 100 })
    if (!nameValidation.valid) {
      return res.status(400).json({ error: nameValidation.error || 'Invalid name format' })
    }
    if (containsSQLInjection(name) || containsXSS(name) || containsCommandInjection(name)) {
      return res.status(400).json({ error: 'Invalid input detected' })
    }
    const schoolIdValidation = validateSchoolSelectionId(schoolId)
    if (!schoolIdValidation.valid) {
      return res.status(400).json({ error: schoolIdValidation.error || 'Invalid school ID format' })
    }
    const gradeValidation = validateString(grade, { minLength: 1, maxLength: 50 })
    if (!gradeValidation.valid) {
      return res.status(400).json({ error: gradeValidation.error || 'Invalid grade format' })
    }
    const ageNum = typeof age === 'string' ? parseInt(age, 10) : age
    if (isNaN(ageNum) || ageNum < 8 || ageNum > 28) {
      return res.status(400).json({ error: 'Age must be a number between 8 and 28' })
    }
    const safeName = nameValidation.sanitized || name

    const { parseSchoolsCSV, parseFrArSchoolsTxt } = await import('@/lib/schools-csv-importer')
    const csvSchools = parseSchoolsCSV()
    const frArSchools = parseFrArSchoolsTxt()
    const allSourceSchools = [...csvSchools, ...frArSchools]
    let selectedSchool =
      allSourceSchools.find((s) => s.id === schoolId) ||
      allSourceSchools.find((s) => s.name === schoolId)
    if (!selectedSchool) {
      const normalizedRequested = schoolId.trim().toLowerCase()
      selectedSchool = allSourceSchools.find(
        (s) => s.name.trim().toLowerCase() === normalizedRequested
      )
    }
    if (!selectedSchool) {
      return res.status(404).json({ error: 'School not found in available schools list' })
    }

    let school = await retryOperation(() =>
      prisma.school.findFirst({
        where: { schoolName: { equals: selectedSchool!.name, mode: 'insensitive' } },
        select: { id: true, schoolName: true, applicationStatus: true, subscriptionStatus: true },
      })
    )

    if (!school) {
      const adminEmail = `admin.${selectedSchool.name.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9.]/g, '')}@tutori.io`
      const defaultPassword = 'TempPassword123!'
      const hashedPassword = await bcrypt.hash(defaultPassword, 10)
      school = await retryOperation(() =>
        prisma.school.create({
          data: {
            schoolName: selectedSchool!.name,
            contactEmail: adminEmail,
            contactPhone: null,
            wilaya: 'ولاية نواكشوط الشمالية',
            address: selectedSchool!.city || 'Nouakchott',
            adminUserId: `admin_${Date.now()}_${selectedSchool!.id}`,
            adminName: `${selectedSchool!.name} Admin`,
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
          data: subjectsToAssign.map((subjectId) => ({
            classId: individualClass!.id,
            subjectId,
          })),
        })
      } catch {
        // continue without failing registration
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
            data: subjectsToAssign.map((subjectId) => ({
              classId: individualClass!.id,
              subjectId,
            })),
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
    return res.status(200).json({
      success: true,
      message: 'Registration successful!',
      student: {
        id: student.id,
        name: student.studentName,
        school: schoolName,
        class: className,
        credentials: { username, password },
      },
    })
  } catch (error: unknown) {
    const err = error as { message?: string; code?: string }
    if (
      err.message?.includes('unique') ||
      err.message?.includes('duplicate') ||
      err.code === 'P2002'
    ) {
      return res.status(409).json({
        error: "Un étudiant avec ces informations existe déjà. Veuillez contacter le support si c'est une erreur.",
        code: 'DUPLICATE_STUDENT',
      })
    }
    sendSanitizedError(res, error, 'student/register')
  }
})

// ---------- GET /dashboard/:studentId ----------
router.get('/dashboard/:studentId', async (req: Request, res: Response) => {
  try {
    try {
      const rateLimitResult = await dashboardRateLimiter(toRateLimitRequest(req) as any)
      if (!rateLimitResult.allowed) {
        const headers = getRateLimitHeaders(rateLimitResult)
        Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v))
        return res.status(429).json({
          error: 'Too many requests. Please slow down.',
          resetTime: rateLimitResult.resetTime,
          retryAfter: rateLimitResult.retryAfter,
        })
      }
    } catch {
      // fail open
    }
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return

    const cachedData = await withCache(
      getDashboardCacheKey(studentId),
      async () =>
        prisma.student.findUnique({
          where: { id: studentId },
          include: {
            school: { select: { schoolName: true, id: true } },
            class: {
              include: {
                teacherClasses: {
                  include: {
                    teacher: { select: { id: true, name: true } },
                  },
                },
                classSubjects: {
                  include: {
                    subject: { select: { id: true, name: true, subjectType: true } },
                  },
                },
              },
            },
          },
        }),
      { ttl: 300 }
    )

    const student = cachedData
    if (!student) {
      return res.status(404).json({ error: 'Student not found' })
    }

    type ClassSubjectItem = { subject: { id: string; name: string; subjectType: string | null } }
    let classSubjects: Array<{ subject: { id: string; name: string } }> = []
    const rawClassSubjects: ClassSubjectItem[] = (student as { class?: { classSubjects?: ClassSubjectItem[] } }).class?.classSubjects || []
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
      if (subjects.physicsId) {
        classSubjects.push({ subject: { id: subjects.physicsId, name: 'Physique' } })
      }
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
    return res.status(200).json({ success: true, student: studentProfile })
  } catch (error) {
    sendSanitizedError(res, error, 'student/dashboard')
  }
})

// ---------- GET /curriculum/:year/:subject ----------
router.get('/curriculum/:year/:subject', async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentication required' })
    }
    try {
      const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { role?: string }
      if (decoded.role !== 'STUDENT') {
        return res.status(403).json({ error: 'Unauthorized - Student access only' })
      }
    } catch {
      return res.status(401).json({ error: 'Invalid authentication token' })
    }
    const year = parseInt(req.params.year, 10)
    if (isNaN(year) || year < 1 || year > 4) {
      return res.status(400).json({
        success: false,
        error: 'Invalid year parameter. Must be 1, 2, 3, or 4',
      })
    }
    let normalizedSubject = req.params.subject.toLowerCase()
    if (normalizedSubject.includes('math') || normalizedSubject.includes('mathématiques')) {
      normalizedSubject = 'math'
    } else if (normalizedSubject.includes('science') || normalizedSubject.includes('sciences')) {
      normalizedSubject = 'science'
    } else if (normalizedSubject.includes('physic') || normalizedSubject.includes('physique')) {
      normalizedSubject = 'physics'
    }
    const curriculum = getCurriculum(year, normalizedSubject)
    if (!curriculum) {
      return res.status(404).json({
        success: false,
        error: `Curriculum not found for Year ${year}, Subject ${normalizedSubject}`,
      })
    }
    const generatedMap = generateMapFromCurriculum(curriculum, year)
    if (!generatedMap || generatedMap.chapters.length === 0) {
      return res.status(500).json({
        success: false,
        error: `Failed to generate map for ${curriculum.title}`,
      })
    }
    return res.status(200).json({ success: true, map: generatedMap })
  } catch (error) {
    sendSanitizedError(res, error, 'student/curriculum')
  }
})

// ---------- GET /chat-history/:studentId ----------
router.get('/chat-history/:studentId', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const page = Math.max(1, parseInt(String(req.query.page), 10) || 1)
    const limit = Math.min(50, Math.max(1, parseInt(String(req.query.limit), 10) || 20))
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
    return res.status(200).json(createPaginationResponse(items, total, page, limit))
  } catch (error) {
    sendSanitizedError(res, error, 'student/chat-history')
  }
})

// ---------- GET /ai-context/:studentId ----------
router.get('/ai-context/:studentId', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
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
    if (!student) return res.status(404).json({ error: 'Student not found' })
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ]
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
    return res.status(200).json(studentContext)
  } catch (error) {
    sendSanitizedError(res, error, 'student/ai-context')
  }
})

// ---------- GET /section-progress/:studentId/:sectionId ----------
router.get('/section-progress/:studentId/:sectionId', async (req: Request, res: Response) => {
  try {
    const { studentId, sectionId } = req.params
    if (!requireStudentMatch(req, res, studentId)) return
    const aiPersonality = await prisma.aIPersonality.findUnique({
      where: { studentId },
    })
    if (!aiPersonality?.learningProgress) {
      return res.status(200).json({ status: 'not_started', progress: null })
    }
    try {
      const progress = JSON.parse(aiPersonality.learningProgress)
      const sectionProgress = progress.sectionProgress?.[sectionId]
      if (sectionProgress) {
        return res.status(200).json({
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
        })
      }
    } catch {
      // ignore parse errors
    }
    return res.status(200).json({ status: 'not_started', progress: null })
  } catch (error) {
    sendSanitizedError(res, error, 'student/section-progress')
  }
})

// ---------- POST /section-progress/:studentId/:sectionId ----------
router.post('/section-progress/:studentId/:sectionId', async (req: Request, res: Response) => {
  try {
    const { studentId, sectionId } = req.params
    if (!requireStudentMatch(req, res, studentId)) return
    const body = req.body || {}
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
      startedAt: allProgress.sectionProgress[sectionId]?.startedAt || new Date().toISOString(),
      lastUpdatedAt: new Date().toISOString(),
    }
    await prisma.aIPersonality.upsert({
      where: { studentId },
      create: {
        studentId,
        learningProgress: serializeLearningProgress(allProgress),
      },
      update: {
        learningProgress: serializeLearningProgress(allProgress),
        updatedAt: new Date(),
      },
    })
    return res.status(200).json({ success: true, message: 'Progress saved' })
  } catch (error) {
    sendSanitizedError(res, error, 'student/section-progress')
  }
})

// ---------- DELETE /section-progress/:studentId/:sectionId ----------
router.delete('/section-progress/:studentId/:sectionId', async (req: Request, res: Response) => {
  try {
    const { studentId, sectionId } = req.params
    if (!requireStudentMatch(req, res, studentId)) return
    const aiPersonality = await prisma.aIPersonality.findUnique({
      where: { studentId },
    })
    const allProgress = parseLearningProgress(aiPersonality?.learningProgress ?? '{}')
    if (allProgress.sectionProgress?.[sectionId]) {
      delete allProgress.sectionProgress[sectionId]
      await prisma.aIPersonality.update({
        where: { studentId },
        data: {
          learningProgress: serializeLearningProgress(allProgress),
          updatedAt: new Date(),
        },
      })
    }
    return res.status(200).json({ success: true, message: 'Section progress cleared' })
  } catch (error) {
    sendSanitizedError(res, error, 'student/section-progress')
  }
})

// ---------- GET /questions/:year/:subject/:sectionId ----------
router.get('/questions/:year/:subject/:sectionId', async (req: Request, res: Response) => {
  try {
    if (!getStudentIdFromToken(req, res)) return
    const { year, subject, sectionId } = req.params
    const sectionIdValidation = validateSectionId(sectionId)
    if (!sectionIdValidation.valid) {
      return res.status(400).json({ error: sectionIdValidation.error || 'Invalid section ID format' })
    }
    const yearNum = parseInt(year, 10)
    if (isNaN(yearNum) || yearNum < 1 || yearNum > 4) {
      return res.status(400).json({ error: 'Invalid year. Must be 1-4.' })
    }
    let normalizedSubject = subject.toLowerCase()
    if (normalizedSubject.includes('math') || normalizedSubject.includes('mathématiques')) {
      normalizedSubject = 'math'
    } else if (normalizedSubject.includes('science') || normalizedSubject.includes('sciences')) {
      normalizedSubject = 'science'
    } else if (normalizedSubject.includes('physic') || normalizedSubject.includes('physique')) {
      normalizedSubject = 'physics'
    }
    const sectionQuestions = getSectionQuestions(yearNum, normalizedSubject, sectionId)
    if (!sectionQuestions) {
      return res.status(404).json({
        success: false,
        error: `Questions not found for year ${year}, subject ${normalizedSubject}, section ${sectionId}`,
      })
    }
    return res.status(200).json({
      success: true,
      exercises: sectionQuestions.exercises,
      questions: sectionQuestions.exercises,
      count: sectionQuestions.exercises.length,
      sectionId,
      year: yearNum,
      subject: normalizedSubject,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'student/questions')
  }
})

// ---------- GET /lesson-plans/:studentId ----------
router.get('/lesson-plans/:studentId', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: {
        class: { select: { id: true, className: true } },
        school: { select: { id: true, schoolName: true } },
      },
    })
    if (!student) return res.status(404).json({ error: 'Student not found' })
    const className = (student as { class?: { className: string } }).class?.className || ''
    const lessonPlans = await prisma.assignment.findMany({
      where: {
        status: 'published',
        assignedClasses: { contains: className },
      },
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
    return res.status(200).json({ success: true, lessonPlans: formatted })
  } catch (error) {
    sendSanitizedError(res, error, 'student/lesson-plans')
  }
})

// ---------- GET /learning-progress/:studentId ----------
router.get('/learning-progress/:studentId', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const subjectParam = String(req.query.subject || '')
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
      return res.status(200).json({
        completedTopics: [],
        currentSection: null,
        currentChapter: null,
        subject: normalizedSubject || null,
      })
    }
    const progress = JSON.parse(aiPersonality.learningProgress)
    if (normalizedSubject && progress[normalizedSubject]) {
      const subjectProgress = progress[normalizedSubject]
      return res.status(200).json({
        completedTopics: subjectProgress.completedTopics || [],
        currentSection: subjectProgress.currentSection || null,
        currentChapter: subjectProgress.currentChapter || null,
        subject: normalizedSubject,
      })
    }
    if (progress.currentSection) {
      return res.status(200).json({
        completedTopics: progress.completedTopics || [],
        currentSection: progress.currentSection || null,
        currentChapter: progress.currentChapter || null,
        subject: null,
      })
    }
    return res.status(200).json({
      completedTopics: [],
      currentSection: null,
      currentChapter: null,
      subject: normalizedSubject || null,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'student/learning-progress')
  }
})

// ---------- GET /language-preference/:studentId ----------
router.get('/language-preference/:studentId', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      select: { id: true, languagePreference: true },
    })
    if (!student) return res.status(404).json({ error: 'Student not found' })
    return res.status(200).json({
      success: true,
      data: { languagePreference: (student as { languagePreference?: string }).languagePreference || 'fr' },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'student/language-preference')
  }
})

// ---------- PUT /language-preference/:studentId ----------
router.put('/language-preference/:studentId', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const { languagePreference } = req.body || {}
    if (!languagePreference || !['fr', 'ar'].includes(languagePreference)) {
      return res.status(400).json({ error: 'Invalid language preference. Must be "fr" or "ar"' })
    }
    const updated = await prisma.student.update({
      where: { id: studentId },
      data: { languagePreference },
      select: { id: true, studentName: true, languagePreference: true },
    })
    return res.status(200).json({ success: true, student: updated })
  } catch (error) {
    sendSanitizedError(res, error, 'student/language-preference')
  }
})

// ---------- GET /quiz-subjects/:studentId ----------
router.get('/quiz-subjects/:studentId', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
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
    if (!student) return res.status(404).json({ error: 'Student not found' })
    type QuizSubjectItem = { subject: { id: string; name: string; subjectType: string | null } }
    const classSubjects: QuizSubjectItem[] = (student as { class?: { classSubjects?: QuizSubjectItem[] } }).class?.classSubjects || []
    let subjects = classSubjects
      .filter((cs) => {
        const st = cs.subject.subjectType
        const name = (cs.subject.name || '').toLowerCase()
        if (st && STANDARD_SUBJECT_TYPES.includes(st)) return true
        return (
          name.includes('math') ||
          name.includes('science') ||
          name.includes('physic')
        )
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
    return res.status(200).json({ success: true, subjects })
  } catch (error) {
    sendSanitizedError(res, error, 'student/quiz-subjects')
  }
})

// ---------- GET /streak ----------
router.get('/streak', async (req: Request, res: Response) => {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const studentIdParam = String(req.query.studentId || '')
    if (!studentIdParam || studentIdParam !== studentId) {
      return res.status(403).json({ error: 'Unauthorized access' })
    }
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
      where: {
        studentId,
        startTime: { gte: sevenDaysAgo },
        status: 'completed',
      },
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
    return res.status(200).json({
      streak,
      completedSections: completedSections.length,
      sectionsCompletedIn7Days,
      hasCompleted7In7Days: sectionsCompletedIn7Days >= 7,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'student/streak')
  }
})

// ---------- POST /streak ----------
router.post('/streak', async (req: Request, res: Response) => {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, sectionId, subject, isFirstTime } = body
    if (bodyStudentId !== studentId) return res.status(403).json({ error: 'Unauthorized access' })
    if (!bodyStudentId || !sectionId) {
      return res.status(400).json({ error: 'Student ID and section ID required' })
    }
    if (!isFirstTime) {
      return res.status(200).json({ success: true, message: 'Section already completed, streak not updated' })
    }
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const existingToday = await prisma.quizSession.findFirst({
      where: {
        studentId,
        startTime: {
          gte: today,
          lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
        },
        status: 'completed',
      },
    })
    if (!existingToday) {
      await prisma.quizSession.create({
        data: {
          studentId,
          subject: body.subject || 'math',
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
        where: {
          studentId,
          startTime: { gte: checkDate, lt: nextDay },
          status: 'completed',
        },
      })
      if (hasActivity) streak++
      else break
    }
    return res.status(200).json({ success: true, streak })
  } catch (error) {
    sendSanitizedError(res, error, 'student/streak')
  }
})

// ---------- POST /track-session ----------
router.post('/track-session', async (req: Request, res: Response) => {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, sessionStart, sessionEnd, screenTime } = body
    if (bodyStudentId !== studentId) return res.status(403).json({ error: 'Unauthorized access' })
    if (!bodyStudentId || !validateId(bodyStudentId).valid) {
      return res.status(400).json({ success: false, error: 'Invalid student ID' })
    }
    if (!sessionStart) {
      return res.status(400).json({ success: false, error: 'sessionStart is required' })
    }
    if (!screenTime || typeof screenTime !== 'object') {
      return res.status(400).json({ success: false, error: 'screenTime object is required' })
    }
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      select: { id: true },
    })
    if (!student) return res.status(404).json({ success: false, error: 'Student not found' })
    const startDate = new Date(sessionStart)
    const endDate = sessionEnd ? new Date(sessionEnd) : new Date()
    if (isNaN(startDate.getTime())) {
      return res.status(400).json({ success: false, error: 'Invalid sessionStart date' })
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
        where: {
          studentId,
          date: dateOnly,
          sessionEnd: null,
        },
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
        return res.status(200).json({
          success: true,
          message: 'Session tracking will be available after database migration',
        })
      }
      throw err
    }
    return res.status(200).json({ success: true, message: 'Session tracked successfully' })
  } catch (error) {
    sendSanitizedError(res, error, 'student/track-session')
  }
})

// ---------- POST /treasure-opened ----------
router.post('/treasure-opened', async (req: Request, res: Response) => {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, chapterId, subject } = body
    if (bodyStudentId !== studentId) {
      return res.status(403).json({ success: false, error: 'Unauthorized - Cannot modify another student\'s data' })
    }
    if (!bodyStudentId || !chapterId || !subject) {
      return res.status(400).json({ success: false, error: 'Missing required fields: studentId, chapterId, subject' })
    }
    let normalizedSubject = String(subject).toLowerCase()
    if (normalizedSubject.includes('math') || normalizedSubject === 'chat') normalizedSubject = 'math'
    else if (normalizedSubject.includes('science')) normalizedSubject = 'science'
    else if (normalizedSubject.includes('physic')) normalizedSubject = 'physics'
    const aiPersonality = await prisma.aIPersonality.findUnique({
      where: { studentId },
    })
    if (!aiPersonality) return res.status(404).json({ success: false, error: 'Student not found' })
    let allProgress: Record<string, unknown> = {}
    try {
      allProgress = aiPersonality.learningProgress
        ? (JSON.parse(aiPersonality.learningProgress) as Record<string, unknown>)
        : {}
      if (!allProgress || typeof allProgress !== 'object') allProgress = {}
    } catch {
      allProgress = {}
    }
    const subjectProgress = (allProgress[normalizedSubject] as { treasuresOpened?: string[] }) || {}
    const treasuresOpened = Array.isArray(subjectProgress.treasuresOpened)
      ? [...subjectProgress.treasuresOpened]
      : []
    if (!treasuresOpened.includes(chapterId)) treasuresOpened.push(chapterId)
    ;(allProgress as Record<string, unknown>)[normalizedSubject] = {
      ...subjectProgress,
      treasuresOpened,
    }
    await prisma.aIPersonality.upsert({
      where: { studentId },
      create: {
        studentId,
        learningProgress: JSON.stringify(allProgress),
        updatedAt: new Date(),
      },
      update: {
        learningProgress: JSON.stringify(allProgress),
        updatedAt: new Date(),
      },
    })
    return res.status(200).json({ success: true, treasuresOpened })
  } catch (error) {
    sendSanitizedError(res, error, 'student/treasure-opened')
  }
})

// ---------- POST /unlock-next-section ----------
router.post('/unlock-next-section', async (req: Request, res: Response) => {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, subject, currentSectionId } = body
    if (bodyStudentId !== studentId) return res.status(403).json({ error: 'Unauthorized access' })
    if (!bodyStudentId || !subject || !currentSectionId) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
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
      return res.status(404).json({
        error: 'No next section found',
        details: { year: studentYear, subject: subjectKey, chapterId: fullChapterId, sectionId: fullSectionId },
      })
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
    return res.status(200).json({
      success: true,
      nextSection: nextSection.section,
      nextChapter: nextSection.chapter,
      completedTopics,
      subject: subjectKey,
      message: `Section ${currentSectionId} completed in ${subjectKey}. Section ${nextSection.section} unlocked.`,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'student/unlock-next-section')
  }
})

// ---------- POST /push-token ----------
router.post('/push-token', async (req: Request, res: Response) => {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, expoPushToken, platform, deviceId } = body
    if (bodyStudentId !== studentId) return res.status(403).json({ error: 'Unauthorized access' })
    if (!bodyStudentId || !expoPushToken) {
      return res.status(400).json({ error: 'Student ID and Expo push token required' })
    }
    if (
      !expoPushToken.startsWith('ExponentPushToken[') &&
      !expoPushToken.startsWith('ExpoPushToken[')
    ) {
      return res.status(400).json({ error: 'Invalid Expo push token format' })
    }
    const student = await prisma.student.findUnique({
      where: { id: studentId },
    })
    if (!student) return res.status(404).json({ error: 'Student not found' })
    const finalDeviceId = deviceId || 'default'
    const existingToken = await prisma.studentPushToken.findFirst({
      where: { studentId, deviceId: finalDeviceId },
    })
    let pushToken
    if (existingToken) {
      pushToken = await prisma.studentPushToken.update({
        where: { id: existingToken.id },
        data: {
          expoPushToken,
          platform: platform || 'unknown',
          isActive: true,
          updatedAt: new Date(),
        },
      })
    } else {
      pushToken = await prisma.studentPushToken.create({
        data: {
          studentId,
          expoPushToken,
          platform: platform || 'unknown',
          deviceId: finalDeviceId,
          isActive: true,
        },
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Push token registered successfully',
      data: {
        id: pushToken.id,
        studentId: pushToken.studentId,
        platform: pushToken.platform,
        isActive: pushToken.isActive,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'student/push-token')
  }
})

// ---------- DELETE /push-token ----------
router.delete('/push-token', async (req: Request, res: Response) => {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const studentIdParam = String(req.query.studentId || '')
    const deviceId = String(req.query.deviceId || 'default')
    if (!studentIdParam || studentIdParam !== studentId) {
      return res.status(403).json({ error: 'Unauthorized access' })
    }
    await prisma.studentPushToken.updateMany({
      where: { studentId, deviceId },
      data: { isActive: false, updatedAt: new Date() },
    })
    return res.status(200).json({ success: true, message: 'Push token unregistered successfully' })
  } catch (error) {
    sendSanitizedError(res, error, 'student/push-token')
  }
})

export default router
