// Shared utilities for safely handling AIPersonality.learningProgress
// Goal: never lose map progress even if multiple systems update this field.
// Structure we standardize on:
// {
//   math?:    { currentChapter, currentSection, completedTopics[], nextSection?, treasuresOpened? }
//   science?: { ...same shape... }
//   physics?: { ...same shape... }
//   sectionProgress?: { [sectionId]: {...mid-section progress...} }
//   memory?: any // optional: space for non-map subject memory
//   ... // other non-conflicting keys are allowed
// }

export type SubjectKey = 'math' | 'science' | 'physics'

export interface SubjectProgress {
  currentChapter: string
  currentSection: string
  completedTopics: string[]
  nextSection?: string
  treasuresOpened?: string[]
  // Allow additional fields without restricting shape
  [key: string]: any
}

export interface LearningProgressRoot {
  math?: SubjectProgress
  science?: SubjectProgress
  physics?: SubjectProgress
  sectionProgress?: Record<string, any>
  bacProgress?: Record<string, Record<string, any>> // { [exerciseId]: { [partId]: {...} } }
  memory?: any
  // Allow forward-compatible keys
  [key: string]: any
}

/**
 * Parse and normalize learningProgress from DB into a stable object.
 * Handles:
 * - undefined / empty
 * - stringified JSON
 * - legacy flat format: { currentSection, currentChapter, completedTopics, nextSection, sectionProgress? }
 * - legacy memory-only subjectProgress (StudentMemorySystem) → moved under root.memory
 */
export function parseLearningProgress(raw: unknown): LearningProgressRoot {
  if (!raw) return {}

  let obj: any = raw

  if (typeof raw === 'string') {
    try {
      obj = JSON.parse(raw)
    } catch {
      return {}
    }
  }

  if (!obj || typeof obj !== 'object') {
    return {}
  }

  // If it already looks like the new structure, return as-is
  if (obj.math || obj.science || obj.physics || obj.sectionProgress) {
    return obj as LearningProgressRoot
  }

  // Legacy flat format used by older systems and SimpleTutorSystem:
  // { currentSection, currentChapter, completedTopics, nextSection, sectionProgress? }
  if (obj.currentSection || obj.currentChapter || obj.completedTopics || obj.nextSection) {
    const completedTopics = Array.isArray(obj.completedTopics) ? obj.completedTopics : []
    const sectionProgress =
      obj.sectionProgress && typeof obj.sectionProgress === 'object' ? obj.sectionProgress : {}

    const root: LearningProgressRoot = {
      math: {
        currentChapter: obj.currentChapter || 'ch1',
        currentSection: obj.currentSection || 'ch1-s1',
        completedTopics,
        nextSection: obj.nextSection || 'ch1-s2'
      },
      sectionProgress
    }

    return root
  }

  // Legacy memory-only format from StudentMemorySystem:
  // { math: { currentTopic, completedChunks, ... }, science: {...}, ... } with no currentSection/currentChapter
  const keys = Object.keys(obj)
  const looksLikeMemoryOnly =
    keys.length > 0 &&
    keys.every((k) => {
      const v = obj[k]
      return (
        v &&
        typeof v === 'object' &&
        !('currentSection' in v) &&
        !('currentChapter' in v) &&
        !('completedTopics' in v)
      )
    })

  if (looksLikeMemoryOnly) {
    const root: LearningProgressRoot = {
      memory: obj
    }
    return root
  }

  // Fallback: return as-is, but typed as root
  return obj as LearningProgressRoot
}

/**
 * Ensure subject block exists and return it.
 */
export function ensureSubjectProgress(
  root: LearningProgressRoot,
  subject: SubjectKey
): SubjectProgress {
  if (!root[subject]) {
    root[subject] = {
      currentChapter: 'ch1',
      currentSection: 'ch1-s1',
      completedTopics: [],
      nextSection: 'ch1-s2'
    }
  }
  return root[subject] as SubjectProgress
}

/**
 * Serialize learning progress back to JSON string for storage.
 * Centralized here so we can tweak behavior later if needed.
 */
export function serializeLearningProgress(root: LearningProgressRoot): string {
  return JSON.stringify(root)
}

/**
 * Normalize arbitrary subject names (Mathematics, mathématiques, chat, etc.)
 * into stable keys used by learningProgress.
 */
export function normalizeSubjectKey(rawSubject: string): SubjectKey {
  const lower = rawSubject.toLowerCase()
  if (lower.includes('science')) return 'science'
  if (lower.includes('physic') || lower.includes('physique')) return 'physics'
  // Default + "chat" alias to math
  return 'math'
}


