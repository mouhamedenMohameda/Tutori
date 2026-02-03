import { prisma } from '@/lib/prisma'
import { validateClassroomYear } from '@/lib/security/validation'

type LeaderboardSubject = 'math' | 'science' | 'physics'

function normalizeSubject(subject: string | null): LeaderboardSubject {
  if (!subject) return 'math'
  const s = subject.toLowerCase()
  if (s.includes('math') || s.includes('mathématiques') || s === 'chat') return 'math'
  if (s.includes('science') || s.includes('sciences')) return 'science'
  if (s.includes('physic') || s.includes('physique')) return 'physics'
  return 'math'
}

function parseSectionId(
  id: string | null | undefined
): { chapter: number; section: number } {
  if (!id) return { chapter: 0, section: 0 }
  const match = id.match(/ch(\d+)-s(\d+)/i)
  if (!match) {
    const chapterOnly = id.match(/ch(\d+)/i)
    if (chapterOnly)
      return {
        chapter: parseInt(chapterOnly[1], 10) || 0,
        section: 0,
      }
    return { chapter: 0, section: 0 }
  }
  return {
    chapter: parseInt(match[1], 10) || 0,
    section: parseInt(match[2], 10) || 0,
  }
}

function computeProgressPosition(progress: {
  completedTopics: string[]
  currentSection: string | null
  currentChapter: string | null
}): { chapterNumber: number; sectionNumber: number } {
  let bestChapter = 0
  let bestSection = 0
  if (Array.isArray(progress.completedTopics)) {
    for (const topicId of progress.completedTopics) {
      const { chapter, section } = parseSectionId(topicId)
      if (
        chapter > bestChapter ||
        (chapter === bestChapter && section > bestSection)
      ) {
        bestChapter = chapter
        bestSection = section
      }
    }
  }
  const fromCurrent = parseSectionId(progress.currentSection || undefined)
  if (
    fromCurrent.chapter > bestChapter ||
    (fromCurrent.chapter === bestChapter && fromCurrent.section > bestSection)
  ) {
    bestChapter = fromCurrent.chapter
    bestSection = fromCurrent.section
  }
  if (progress.currentChapter && !bestChapter) {
    const ch = parseSectionId(progress.currentChapter).chapter
    if (ch > bestChapter) {
      bestChapter = ch
      bestSection = 0
    }
  }
  return { chapterNumber: bestChapter, sectionNumber: bestSection }
}

export async function getLeaderboard(
  classroomYearRaw: string,
  subjectParam: string | null,
  page: number,
  limit: number
) {
  const yearValidation = validateClassroomYear(classroomYearRaw)
  if (!yearValidation.valid) {
    return {
      error: yearValidation.error || 'Invalid classroom year parameter',
      status: 400 as const,
    }
  }
  const classroomYear = yearValidation.sanitizedYear || classroomYearRaw
  const normalizedSubject = normalizeSubject(subjectParam)
  const skip = (page - 1) * limit

  let students = await prisma.student.findMany({
    where: {
      isActive: true,
      class: { classroomYear },
    },
    select: {
      id: true,
      studentName: true,
      username: true,
      grade: true,
      classId: true,
      class: { select: { id: true, classroomYear: true, className: true } },
      aiPersonality: { select: { learningProgress: true } },
    },
    skip,
    take: limit,
  })

  if (students.length === 0) {
    students = await prisma.student.findMany({
      where: { isActive: true, classId: { not: null } },
      select: {
        id: true,
        studentName: true,
        username: true,
        grade: true,
        classId: true,
        class: { select: { id: true, classroomYear: true, className: true } },
        aiPersonality: { select: { learningProgress: true } },
      },
    })
  }

  const entries = students.map((student) => {
    const safeName = (student.studentName || '').trim() || 'Élève'
    let completedTopics: string[] = []
    let currentSection: string | null = null
    let currentChapter: string | null = null
    const lpRaw = (student as { aiPersonality?: { learningProgress: unknown } }).aiPersonality?.learningProgress ?? '{}'
    try {
      const parsed = typeof lpRaw === 'string' ? JSON.parse(lpRaw) : lpRaw
      if (parsed[normalizedSubject]) {
        const sp = parsed[normalizedSubject]
        completedTopics = Array.isArray(sp.completedTopics) ? sp.completedTopics : []
        currentSection = typeof sp.currentSection === 'string' ? sp.currentSection : null
        currentChapter = typeof sp.currentChapter === 'string' ? sp.currentChapter : null
      } else if (parsed.currentSection) {
        completedTopics = Array.isArray(parsed.completedTopics) ? parsed.completedTopics : []
        currentSection = typeof parsed.currentSection === 'string' ? parsed.currentSection : null
        currentChapter = typeof parsed.currentChapter === 'string' ? parsed.currentChapter : null
      }
    } catch {
      // keep defaults
    }
    const position = computeProgressPosition({
      completedTopics,
      currentSection,
      currentChapter,
    })
    return {
      studentId: student.id,
      name: safeName,
      classroomYear,
      grade: student.grade,
      chapterNumber: position.chapterNumber,
      sectionNumber: position.sectionNumber,
    }
  })

  const withProgress = entries.filter((e) => e.chapterNumber > 0 || e.sectionNumber > 0)
  const withoutProgress = entries.filter((e) => e.chapterNumber === 0 && e.sectionNumber === 0)
  withProgress.sort((a, b) => {
    if (b.chapterNumber !== a.chapterNumber) return b.chapterNumber - a.chapterNumber
    if (b.sectionNumber !== a.sectionNumber) return b.sectionNumber - a.sectionNumber
    return a.name.localeCompare(b.name)
  })
  withoutProgress.sort((a, b) => a.name.localeCompare(b.name))
  const sortedEntries = [...withProgress, ...withoutProgress]
  const topEntries = sortedEntries.slice(0, 10)

  return {
    data: { classroomYear, subject: normalizedSubject, entries: topEntries },
  }
}

const MAX_MESSAGES_PER_YEAR = 50

export async function getMembers(classroomYearRaw: string) {
  const v = validateClassroomYear(classroomYearRaw)
  if (!v.valid) return { error: v.error, status: 400 as const }
  const classroomYear = v.sanitizedYear!
  const students = await prisma.student.findMany({
    where: { isActive: true, class: { classroomYear } },
    select: { id: true, studentName: true, username: true, grade: true },
  })
  return {
    classroomYear,
    members: students.map((s) => ({
      id: s.id,
      studentName: s.studentName,
      username: s.username,
      grade: s.grade,
    })),
    totalMembers: students.length,
  }
}

export async function searchStudents() {
  const students = await prisma.student.findMany({
    where: { isActive: true },
    select: {
      id: true,
      studentName: true,
      username: true,
      grade: true,
      classId: true,
      class: { select: { classroomYear: true, className: true } },
    },
  })
  return {
    students: students.map((s) => ({
      id: s.id,
      studentName: s.studentName,
      username: s.username,
      grade: s.grade,
      classroomYear: s.class?.classroomYear ?? null,
      classLabel: s.class?.className ?? 'Sans classe',
    })),
    totalStudents: students.length,
  }
}

export async function getMessages(classroomYearRaw: string) {
  const v = validateClassroomYear(classroomYearRaw)
  if (!v.valid) return { error: v.error, status: 400 as const }
  const classroomYear = v.sanitizedYear!
  const messages = await prisma.communityMessage.findMany({
    where: { classroomYear },
    orderBy: { timestamp: 'asc' },
    include: { student: { select: { studentName: true, username: true } } },
  })
  const list = messages.map((m) => ({
    id: m.id,
    studentId: m.studentId,
    studentName: m.student.studentName,
    username: m.student.username,
    message: m.message,
    messageType: m.messageType,
    timestamp: m.timestamp.toISOString(),
  }))
  return { classroomYear, messages: list, totalMessages: list.length }
}

export async function sendMessage(body: {
  studentId: string
  classroomYear: string
  message: string
  messageType?: string
  replyToMessageId?: string | null
}) {
  const v = validateClassroomYear(body.classroomYear)
  if (!v.valid) return { error: v.error, status: 400 as const }
  const classroomYear = v.sanitizedYear!
  const student = await prisma.student.findUnique({
    where: { id: body.studentId },
    select: { id: true, studentName: true, username: true },
  })
  if (!student) return { error: 'Student not found', status: 404 as const }
  const created = await prisma.communityMessage.create({
    data: {
      studentId: body.studentId,
      classroomYear,
      message: body.message,
      messageType: (body.messageType || 'TEXT').toUpperCase(),
      replyToMessageId: body.replyToMessageId ?? null,
    },
    include: { student: { select: { studentName: true, username: true } } },
  })
  const count = await prisma.communityMessage.count({ where: { classroomYear } })
  if (count > MAX_MESSAGES_PER_YEAR) {
    const toDelete = await prisma.communityMessage.findMany({
      where: { classroomYear },
      orderBy: { timestamp: 'asc' },
      take: count - MAX_MESSAGES_PER_YEAR,
      select: { id: true },
    })
    await prisma.communityMessage.deleteMany({
      where: { id: { in: toDelete.map((d) => d.id) } },
    })
  }
  return {
    id: created.id,
    studentId: created.studentId,
    studentName: created.student.studentName,
    username: created.student.username,
    classroomYear: created.classroomYear,
    message: created.message,
    messageType: created.messageType,
    timestamp: created.timestamp.toISOString(),
    replyToMessageId: created.replyToMessageId,
  }
}

export async function deleteMessage(messageId: string, studentId: string) {
  const msg = await prisma.communityMessage.findFirst({
    where: { id: messageId, studentId },
  })
  if (!msg) return { error: 'Message not found or not yours', status: 404 as const }
  await prisma.communityMessage.delete({ where: { id: messageId } })
  return { success: true }
}

export async function getUnreadCount(studentId: string) {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    select: { classId: true, lastViewedCommunityAt: true },
  })
  if (!student) return { error: 'Student not found', status: 404 as const }
  if (!student.classId) return { unreadCount: 0 }
  const cls = await prisma.class.findUnique({
    where: { id: student.classId },
    select: { classroomYear: true },
  })
  if (!cls?.classroomYear) return { unreadCount: 0 }
  const since = student.lastViewedCommunityAt ?? new Date(0)
  const unreadCount = await prisma.communityMessage.count({
    where: {
      classroomYear: cls.classroomYear,
      timestamp: { gt: since },
      studentId: { not: studentId },
    },
  })
  return { unreadCount }
}

export async function markAsRead(studentId: string) {
  const student = await prisma.student.update({
    where: { id: studentId },
    data: { lastViewedCommunityAt: new Date() },
    select: { id: true, lastViewedCommunityAt: true },
  })
  return {
    studentId: student.id,
    lastViewedCommunityAt: student.lastViewedCommunityAt!.toISOString(),
  }
}

export async function getStudentClassroomYear(studentId: string) {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    select: { id: true, studentName: true, class: { select: { classroomYear: true } } },
  })
  if (!student) return { error: 'Student not found', status: 404 as const }
  const classroomYear = student.class?.classroomYear ?? ''
  return { studentId: student.id, studentName: student.studentName, classroomYear }
}
