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
