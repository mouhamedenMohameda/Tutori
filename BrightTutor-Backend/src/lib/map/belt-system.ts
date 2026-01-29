/**
 * Belt System Configuration
 * 9-belt progression system for chapter completion rewards
 * Used across all subjects (Math, Science, Physics)
 * Each subject tracks belts separately
 */

export interface BeltInfo {
  color: string
  name: string
  emoji: string
  nameFr: string
}

/**
 * Belt progression from White to Black
 * Universal for all subjects - each subject tracks separately
 */
export const BELT_PROGRESSION = {
  ch1: { 
    color: '#FFFFFF', 
    name: 'White Belt', 
    emoji: '⚪', 
    nameFr: 'Ceinture Blanche' 
  },
  ch2: { 
    color: '#FFEB3B', 
    name: 'Yellow Belt', 
    emoji: '🟡', 
    nameFr: 'Ceinture Jaune' 
  },
  ch3: { 
    color: '#FF9800', 
    name: 'Orange Belt', 
    emoji: '🟠', 
    nameFr: 'Ceinture Orange' 
  },
  ch4: { 
    color: '#4CAF50', 
    name: 'Green Belt', 
    emoji: '🟢', 
    nameFr: 'Ceinture Verte' 
  },
  ch5: { 
    color: '#2196F3', 
    name: 'Blue Belt', 
    emoji: '🔵', 
    nameFr: 'Ceinture Bleue' 
  },
  ch6: { 
    color: '#9C27B0', 
    name: 'Purple Belt', 
    emoji: '🟣', 
    nameFr: 'Ceinture Violette' 
  },
  ch7: { 
    color: '#F44336', 
    name: 'Red Belt', 
    emoji: '🔴', 
    nameFr: 'Ceinture Rouge' 
  },
  ch8: { 
    color: '#8B4513', 
    name: 'Brown Belt', 
    emoji: '🟤', 
    nameFr: 'Ceinture Marron' 
  },
  ch9: { 
    color: '#000000', 
    name: 'Black Belt', 
    emoji: '⚫', 
    nameFr: 'Ceinture Noire' 
  }
} as const

/**
 * Get belt information for a specific chapter
 * @param chapterId - Chapter ID (e.g., 'ch1', 'ch2', ..., 'ch9')
 * @returns Belt information object
 * @throws Error if chapterId is invalid
 */
export function getBeltForChapter(chapterId: string): BeltInfo {
  const belt = BELT_PROGRESSION[chapterId as keyof typeof BELT_PROGRESSION]
  
  if (!belt) {
    throw new Error(`Invalid chapter ID: ${chapterId}. Must be ch1-ch9.`)
  }
  
  return belt
}

/**
 * Get belt information by chapter number (1-9, cycles if needed)
 * @param chapterNumber - Chapter number (1-9, will cycle if > 9)
 * @returns Belt information object
 */
export function getBeltForChapterNumber(chapterNumber: number): BeltInfo {
  if (chapterNumber < 1) {
    throw new Error(`Invalid chapter number: ${chapterNumber}. Must be >= 1.`)
  }
  
  // Cycle through the 9 belts: chapter 1-9 = belt 1-9, chapter 10-18 = belt 1-9 again, etc.
  const beltNumber = ((chapterNumber - 1) % 9) + 1
  const chapterId = `ch${beltNumber}` as keyof typeof BELT_PROGRESSION
  return BELT_PROGRESSION[chapterId]
}

/**
 * Get belt information by chapter index (supports any number of chapters)
 * Cycles through the 9 belts when there are more than 9 chapters
 * @param chapterIndex - Chapter index (0, 1, 2, ...)
 * @returns Belt information object
 */
export function getBeltForChapterIndex(chapterIndex: number): BeltInfo {
  if (chapterIndex < 0) {
    throw new Error(`Invalid chapter index: ${chapterIndex}. Must be >= 0.`)
  }
  
  // Cycle through the 9 belts: index 0-8 = belt 1-9, index 9-17 = belt 1-9 again, etc.
  const beltIndex = (chapterIndex % 9) + 1
  return getBeltForChapterNumber(beltIndex)
}

/**
 * Get all belt IDs in order
 * @returns Array of chapter IDs ['ch1', 'ch2', ..., 'ch9']
 */
export function getAllBeltIds(): string[] {
  return Object.keys(BELT_PROGRESSION)
}

/**
 * Get total number of belts
 */
export const TOTAL_BELTS = Object.keys(BELT_PROGRESSION).length

