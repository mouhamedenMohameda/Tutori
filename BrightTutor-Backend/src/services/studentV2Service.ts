/**
 * Student v2 API: profile, memory, chat-history, assignments, monthly-summary
 * Business logic for /student/v2/* endpoints.
 */
import { prisma } from '@/lib/prisma'
import { mapClassroomYearToCurriculumYear } from '@/lib/curriculum/curriculum-loader'
import { withCache, getProfileCacheKey } from '@/lib/cache'
import { getSkip, createPaginationResponse } from '@/lib/pagination'

const STANDARD_SUBJECT_TYPES = ['MATH', 'SCIENCE', 'PHYSICS']

export async function getOrCreateStandardSubjects(
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

export async function getDefaultSubjectsForStudent(student: {
  class?: { classroomYear: string | null } | null
  schoolId: string
}): Promise<Array<{ subject: { id: string; name: string } }>> {
  if (!student.class?.classroomYear) return []
  const year = mapClassroomYearToCurriculumYear(student.class.classroomYear)
  const subjects = await getOrCreateStandardSubjects(student.schoolId, year)
  const list: Array<{ subject: { id: string; name: string } }> = [
    { subject: { id: subjects.mathId, name: 'Mathématiques' } },
    { subject: { id: subjects.scienceId, name: 'Sciences' } },
  ]
  if (subjects.physicsId) {
    list.push({ subject: { id: subjects.physicsId, name: 'Physique' } })
  }
  return list
}

export async function getProfile(studentId: string): Promise<
  | { success: true; student: Record<string, unknown> }
  | { success: false; status: number; error: string }
> {
  const cacheKey = getProfileCacheKey(studentId)
  const student = await withCache(
    cacheKey,
    async () => {
      return prisma.student.findUnique({
        where: { id: studentId },
        include: {
          school: { select: { schoolName: true } },
          class: {
            include: {
              classSubjects: {
                include: {
                  subject: { select: { id: true, name: true, subjectType: true } },
                },
              },
            },
          },
          aiPersonality: { select: { learningProgress: true } },
        },
      })
    },
    { ttl: 600 }
  )

  if (!student) {
    return { success: false, status: 404, error: 'Student not found' }
  }
  if (!student.isActive) {
    return { success: false, status: 403, error: 'Student account is not active' }
  }

  let classSubjects: Array<{ subject: { id: string; name: string } }> = []
  if (student.class?.classSubjects?.length) {
    classSubjects = student.class.classSubjects
      .filter(
        (cs) => cs.subject.subjectType && STANDARD_SUBJECT_TYPES.includes(cs.subject.subjectType)
      )
      .map((cs) => ({ subject: { id: cs.subject.id, name: cs.subject.name } }))
  }
  if (classSubjects.length === 0) {
    classSubjects = await getDefaultSubjectsForStudent(student)
  }

  return {
    success: true,
    student: {
      id: student.id,
      studentName: student.studentName,
      username: student.username,
      grade: student.grade,
      age: student.age,
      parentName: student.parentName,
      parentEmail: student.parentEmail,
      parentPhone: student.parentPhone,
      learningStyle: student.learningStyle,
      school: { schoolName: student.school?.schoolName ?? 'Unknown' },
      class: {
        className: student.class?.className ?? 'Not assigned',
        classroomYear: student.class?.classroomYear,
        classSubjects,
      },
      aiPersonality: student.aiPersonality
        ? { learningProgress: student.aiPersonality.learningProgress }
        : null,
    },
  }
}

export async function getMemory(studentId: string): Promise<{
  success: true
  memory: Record<string, unknown> | null
  message?: string
}> {
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  })
  if (!aiPersonality) {
    return {
      success: true,
      memory: null,
      message: 'No memory found - new student',
    }
  }
  const memory = {
    keyTopics: JSON.parse(aiPersonality.keyTopics || '[]'),
    strugglingAreas: JSON.parse(aiPersonality.strugglingAreas || '[]'),
    achievements: JSON.parse(aiPersonality.achievements || '[]'),
    motivationTriggers: JSON.parse(aiPersonality.motivationTriggers || '[]'),
    learningProgress: JSON.parse(aiPersonality.learningProgress || '{}'),
    communicationStyle: aiPersonality.communicationStyle,
    preferredExplanationStyle: aiPersonality.preferredExplanationStyle,
    responseToEncouragement: aiPersonality.responseToEncouragement,
    attentionSpan: aiPersonality.attentionSpan,
    lastInteraction: aiPersonality.lastInteraction,
  }
  return { success: true, memory }
}

export async function saveMemory(
  studentId: string,
  memoryData: Record<string, unknown>
): Promise<{ success: true; message: string; memory: unknown }> {
  const upsertData = {
    studentId,
    keyTopics: JSON.stringify(memoryData.keyTopics ?? []),
    strugglingAreas: JSON.stringify(memoryData.strugglingAreas ?? []),
    achievements: JSON.stringify(memoryData.achievements ?? []),
    motivationTriggers: JSON.stringify(memoryData.motivationTriggers ?? []),
    learningProgress: JSON.stringify(memoryData.learningProgress ?? {}),
    communicationStyle: (memoryData.communicationStyle as string) ?? null,
    preferredExplanationStyle: (memoryData.preferredExplanationStyle as string) ?? null,
    responseToEncouragement: (memoryData.responseToEncouragement as string) ?? null,
    attentionSpan:
      memoryData.attentionSpan != null ? parseInt(String(memoryData.attentionSpan), 10) : null,
    lastInteraction: new Date(),
    updatedAt: new Date(),
  }

  const savedMemory = await prisma.aIPersonality.upsert({
    where: { studentId },
    update: upsertData,
    create: upsertData as Parameters<typeof prisma.aIPersonality.upsert>[0]['create'],
  })
  return {
    success: true,
    message: 'Memory saved successfully',
    memory: savedMemory,
  }
}

export async function getChatHistory(
  studentId: string,
  page: number,
  limit: number
): Promise<{ success: true; conversations: unknown[]; pagination: unknown }> {
  const skip = getSkip(page, limit)
  const [conversations, totalCount] = await Promise.all([
    prisma.aIConversation.findMany({
      where: { studentId },
      orderBy: { timestamp: 'desc' },
      skip,
      take: limit,
    }),
    prisma.aIConversation.count({ where: { studentId } }),
  ])
  const paginationResponse = createPaginationResponse(
    conversations.reverse(),
    totalCount,
    page,
    limit
  )
  return {
    success: true,
    conversations: paginationResponse.data,
    pagination: paginationResponse.pagination,
  }
}

export async function getAssignments(
  studentId: string,
  page: number,
  limit: number
): Promise<
  | { success: true; assignments: unknown[]; pagination: unknown; lessonPlans: unknown[]; aiContext: unknown; student: { name: string; class: string; school: string | undefined } }
  | { success: false; status: number; error: string }
> {
  const skip = getSkip(page, limit)
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    include: {
      school: { select: { schoolName: true } },
      class: { select: { id: true, className: true } },
    },
  })

  if (!student?.class) {
    return { success: false, status: 404, error: 'Student or class not found' }
  }

  const whereClause = {
    AND: [
      {
        OR: [
          { classId: student.class.id },
          { assignedClasses: { contains: student.class.id } },
          { assignedClasses: { contains: student.class.className } },
          { schoolId: student.schoolId },
        ],
      },
      {
        status: 'published',
        dueDate: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
    ],
  }

  const [allAssignments, totalAssignments] = await Promise.all([
    prisma.assignment.findMany({
      where: whereClause,
      include: { teacher: { select: { name: true, subjects: true } } },
      orderBy: [{ dueDate: 'asc' }, { priority: 'desc' }],
      distinct: ['id'],
      skip,
      take: limit,
    }),
    prisma.assignment.count({ where: whereClause }),
  ])

  const lessonPlans = await prisma.assignment.findMany({
    where: {
      schoolId: student.schoolId,
      status: 'published',
      assignedClasses: { contains: student.class.className },
      id: { notIn: allAssignments.map((a) => a.id) },
    },
    include: { teacher: { select: { name: true, subjects: true } } },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })

  const formattedAssignments = allAssignments.map((a) => ({
    id: a.id,
    title: a.title,
    description: a.description,
    subject: a.subject,
    teacherName: a.teacher.name,
    dueDate: a.dueDate,
    dueTime: a.dueTime,
    priority: a.priority,
    points: a.points,
    teachingInstructions: a.teachingInstructions,
    fileName: a.fileName,
    fileSize: a.fileSize,
    fileType: a.fileType,
    isOverdue: new Date(a.dueDate) < new Date(),
    daysUntilDue: Math.ceil(
      (new Date(a.dueDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    ),
    dueDateFormatted: new Date(a.dueDate).toLocaleDateString('en-GB'),
  }))

  const formattedLessonPlans = lessonPlans.map((p) => ({
    id: p.id,
    title: p.title,
    subject: p.subject,
    teacherName: p.teacher.name,
    month: new Date(p.createdAt).getMonth() + 1,
    year: new Date(p.createdAt).getFullYear(),
    topics: [] as string[],
    teachingInstructions: p.teachingInstructions,
    contentText: p.description ? p.description.substring(0, 500) + '...' : null,
  }))

  const aiContext = {
    totalActiveAssignments: formattedAssignments.length,
    overdueAssignments: formattedAssignments.filter((a: { isOverdue: boolean }) => a.isOverdue).length,
    upcomingDeadlines: formattedAssignments.filter(
      (a: { daysUntilDue: number; isOverdue: boolean }) => a.daysUntilDue <= 3 && !a.isOverdue
    ).length,
    subjectBreakdown: formattedAssignments.reduce(
      (acc: Record<string, number>, a: { subject: string }) => {
        acc[a.subject] = (acc[a.subject] || 0) + 1
        return acc
      },
      {}
    ),
    nextDeadline: formattedAssignments[0] ?? null,
  }

  const paginationResponse = createPaginationResponse(
    formattedAssignments,
    totalAssignments,
    page,
    limit
  )

  return {
    success: true,
    assignments: paginationResponse.data,
    pagination: paginationResponse.pagination,
    lessonPlans: formattedLessonPlans,
    aiContext,
    student: {
      name: student.studentName,
      class: student.class.className,
      school: student.school?.schoolName,
    },
  }
}

export async function getMonthlySummary(studentId: string): Promise<{
  success: true
  report: {
    studentName: string
    month: number
    year: number
    summary: string
    metrics: { questionsAsked: number; subjectsEngaged: number; engagementScore: number }
  }
}> {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    select: { studentName: true },
  })
  const now = new Date()
  const testSummary = {
    studentName: student?.studentName ?? 'Student',
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    summary:
      'This month, the student showed engagement with the AI tutor, asking questions across subjects and demonstrating curiosity in learning.',
    metrics: {
      questionsAsked: 25,
      subjectsEngaged: 3,
      engagementScore: 85,
    },
  }
  return { success: true, report: testSummary }
}
