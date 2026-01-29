/**
 * Map Generator - Dynamically generates map structure from curriculum + questions
 * Handles variable chapter and section counts
 * Phase 1: Integrated belt system for chapter completion rewards
 */

import { Curriculum, CurriculumChapter } from '@/lib/curriculum/curriculum-loader'
import { getAllSectionsWithQuestions, getSectionQuestionCount } from '@/lib/map-curriculm/question-loader'
import { getBeltForChapterIndex, type BeltInfo } from '@/lib/map/belt-system'

// Mauritanian cities for mapping chapters
const MAURITANIAN_CITIES = [
  'Nouakchott',    // Capital
  'Rosso',
  'Kaédi',
  'Boutilimit',
  'Aleg',
  'Atar',
  'Chinguetti',
  'Zouérat',
  'Nouadhibou',
  'Kiffa',
  'Selibaby',
  'Aïoun',
  'Tidjikja',
  'Akjoujt',
  'Néma',
  'Fderik',
  'Guérou',
  'Timbedra',
  'Oualata',
  'Tichitt'
]

// Icons for different subjects
const SUBJECT_ICONS: { [key: string]: string[] } = {
  math: ['🔢', '📐', '📊', '📈', '🧮', '📏', '🔺', '📉', '🎯', '🔷', '📋', '📑', '📝', '📌', '📍', '🔍', '💡', '⭐'],
  science: ['🔬', '🌱', '🌍', '⚗️', '🧪', '🔭', '🌡️', '💧', '🔥', '⚡', '🌿', '🦠', '🧬', '🔋', '🌊', '☀️', '🌙', '⭐'],
  physics: ['⚛️', '🔋', '💡', '⚡', '🌊', '🌍', '🔭', '📡', '📶', '📊', '📈', '🔬', '🧲', '🧪', '🌡️', '💨', '🔥', '⭐']
}

export interface ChapterMapConfig {
  id: string
  chapterNumber: number
  title: string
  city: string
  icon: string
  position: { x: number; y: number } // Percentage positions (legacy) or pixels (new)
  sections: string[]
  questionCount?: number
  exerciseCount?: number
  // Belt fields (Phase 1: Belt system integration)
  beltColor: string
  beltName: string
  beltEmoji: string
  beltNameFr: string
}

export interface GeneratedMap {
  chapters: ChapterMapConfig[]
  totalChapters: number
  totalSections: number
  totalQuestions: number
  totalExercises: number
}

/**
 * Generate map structure from curriculum and questions
 */
export function generateMapFromCurriculum(
  curriculum: Curriculum,
  year: number
): GeneratedMap {
  if (!curriculum || !curriculum.chapters || curriculum.chapters.length === 0) {
    console.error('❌ Invalid curriculum provided to map generator')
    return {
      chapters: [],
      totalChapters: 0,
      totalSections: 0,
      totalQuestions: 0,
      totalExercises: 0
    }
  }

  // Normalize subject for icon selection
  const subjectKey = curriculum.subject.toLowerCase()
  let iconCategory = 'math' // default
  if (subjectKey.includes('science') || subjectKey.includes('sciences')) {
    iconCategory = 'science'
  } else if (subjectKey.includes('physic') || subjectKey.includes('physique')) {
    iconCategory = 'physics'
  }

  const icons = SUBJECT_ICONS[iconCategory] || SUBJECT_ICONS.math
  const chapters: ChapterMapConfig[] = []
  let totalSections = 0
  let totalQuestions = 0
  let totalExercises = 0

  // Get all questions for this year/subject
  const allQuestions = getAllSectionsWithQuestions(year, curriculum.subject)

  // Generate map for each chapter
  curriculum.chapters.forEach((chapter, index) => {
    const chapterNumber = index + 1
    const city = MAURITANIAN_CITIES[index % MAURITANIAN_CITIES.length] || `City ${chapterNumber}`
    const icon = icons[index % icons.length] || '📚'

    // Calculate vertical position (distributed evenly)
    const totalChapters = curriculum.chapters.length
    const yPosition = totalChapters > 1 
      ? 5 + (index / (totalChapters - 1)) * 85 // 5% to 90%
      : 50 // Center if only one chapter

    // Extract section IDs from chapter
    const sectionIds = chapter.sections.map(section => section.id)
    totalSections += sectionIds.length

    // Count questions and exercises for this chapter
    let chapterQuestions = 0
    let chapterExercises = 0

    if (allQuestions) {
      sectionIds.forEach(sectionId => {
        const questionCount = getSectionQuestionCount(year, curriculum.subject, sectionId)
        chapterQuestions += questionCount.questions
        chapterExercises += questionCount.exercises
      })
    }

    totalQuestions += chapterQuestions
    totalExercises += chapterExercises

    // Phase 1: Get belt information for this chapter
    const beltInfo = getBeltForChapterIndex(index)

    chapters.push({
      id: chapter.id,
      chapterNumber,
      title: chapter.title,
      city,
      icon,
      position: { x: 50, y: yPosition }, // Center horizontally, distribute vertically
      sections: sectionIds,
      questionCount: chapterQuestions,
      exerciseCount: chapterExercises,
      // Phase 1: Belt system integration
      beltColor: beltInfo.color,
      beltName: beltInfo.name,
      beltEmoji: beltInfo.emoji,
      beltNameFr: beltInfo.nameFr
    })
  })

  console.log(`✅ Generated map: ${chapters.length} chapters, ${totalSections} sections, ${totalQuestions} questions, ${totalExercises} exercises`)

  return {
    chapters,
    totalChapters: chapters.length,
    totalSections,
    totalQuestions,
    totalExercises
  }
}

/**
 * Get camel position for current section
 */
export function getCamelPosition(
  currentSection: string | null,
  chapters: ChapterMapConfig[]
): { x: number; y: number } | null {
  if (!currentSection || !chapters || chapters.length === 0) {
    return null
  }

  // Find the chapter containing the current section
  for (const chapter of chapters) {
    if (chapter.sections.includes(currentSection)) {
      // Position camel at the chapter's position
      return {
        x: chapter.position.x,
        y: chapter.position.y
      }
    }
  }

  // Default to first chapter if section not found
  if (chapters.length > 0) {
    return {
      x: chapters[0].position.x,
      y: chapters[0].position.y
    }
  }

  return null
}

export default {
  generateMapFromCurriculum,
  getCamelPosition
}

