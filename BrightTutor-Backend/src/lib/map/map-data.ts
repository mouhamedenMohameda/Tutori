/**
 * Year 1 Math Map Configuration
 * 9 Chapters mapped to 9 Mauritanian Cities
 */

export interface ChapterMapConfig {
  id: string
  chapterNumber: number
  title: string
  city: string
  icon: string
  position: { x: number; y: number } // Percentage positions for vertical scroll (legacy) or pixels (new)
  sections: string[]
  questionCount?: number // Optional: number of questions available for this chapter
  exerciseCount?: number // Optional: number of exercises available for this chapter
  // Belt fields (added in Phase 1)
  beltColor?: string
  beltName?: string
  beltEmoji?: string
  beltNameFr?: string
}

/**
 * LEGACY: This static map is kept for reference only.
 * Active system uses generateMapFromCurriculum() in map-generator.ts
 * 
 * @deprecated Use map-generator.ts for actual map generation
 * This file is maintained for backward compatibility and documentation purposes only
 */
export const YEAR1_MATH_MAP = {
  chapters: [
    {
      id: 'ch1',
      chapterNumber: 1,
      title: 'LES NOMBRES ENTIERS',
      city: 'Nouakchott',
      icon: '🏛️', // Capital building
      position: { x: 50, y: 5 }, // Top of map (start)
      sections: ['ch1-s1', 'ch1-s2', 'ch1-s3', 'ch1-s4', 'ch1-s5']
    },
    {
      id: 'ch2',
      chapterNumber: 2,
      title: 'GÉOMÉTRIE DE BASE',
      city: 'Rosso',
      icon: '📐', // Geometry
      position: { x: 50, y: 15 },
      sections: ['ch2-s1', 'ch2-s2', 'ch2-s3', 'ch2-s4', 'ch2-s5']
    },
    {
      id: 'ch3',
      chapterNumber: 3,
      title: 'MESURE ET GRANDEURS',
      city: 'Kaédi',
      icon: '📏', // Measurement
      position: { x: 50, y: 25 },
      sections: ['ch3-s1', 'ch3-s2', 'ch3-s3', 'ch3-s4', 'ch3-s5']
    },
    {
      id: 'ch4',
      chapterNumber: 4,
      title: 'LES FRACTIONS',
      city: 'Boutilimit',
      icon: '🍰', // Fractions (cake slices)
      position: { x: 50, y: 35 },
      sections: ['ch4-s1', 'ch4-s2', 'ch4-s3', 'ch4-s4', 'ch4-s5']
    },
    {
      id: 'ch5',
      chapterNumber: 5,
      title: 'LES DÉCIMAUX',
      city: 'Aleg',
      icon: '🔢', // Numbers
      position: { x: 50, y: 45 },
      sections: ['ch5-s1', 'ch5-s2', 'ch5-s3', 'ch5-s4', 'ch5-s5']
    },
    {
      id: 'ch6',
      chapterNumber: 6,
      title: 'PROPORTIONS ET POURCENTAGES',
      city: 'Atar',
      icon: '📊', // Charts/percentages
      position: { x: 50, y: 55 },
      sections: ['ch6-s1', 'ch6-s2', 'ch6-s3', 'ch6-s4', 'ch6-s5']
    },
    {
      id: 'ch7',
      chapterNumber: 7,
      title: 'STATISTIQUES ET GRAPHIQUES',
      city: 'Chinguetti',
      icon: '📈', // Graphs
      position: { x: 50, y: 65 },
      sections: ['ch7-s1', 'ch7-s2', 'ch7-s3', 'ch7-s4', 'ch7-s5']
    },
    {
      id: 'ch8',
      chapterNumber: 8,
      title: 'PROBLÈMES ET RÉSOLUTION',
      city: 'Zouérat',
      icon: '🧩', // Problem solving (puzzle)
      position: { x: 50, y: 75 },
      sections: ['ch8-s1', 'ch8-s2', 'ch8-s3', 'ch8-s4', 'ch8-s5']
    },
    {
      id: 'ch9',
      chapterNumber: 9,
      title: 'RÉVISION GÉNÉRALE',
      city: 'Nouadhibou',
      icon: '🎓', // Graduation (finish!)
      position: { x: 50, y: 85 }, // Bottom of map (finish)
      sections: ['ch9-s1', 'ch9-s2', 'ch9-s3', 'ch9-s4', 'ch9-s5']
    }
  ]
} as const

/**
 * Section state types for the new Duolingo-style map
 * - locked: Section is locked, previous section not completed
 * - available: Previous section completed, ready to start
 * - current: Currently active section (student is working on it)
 * - completed: Section completed successfully
 */
export type SectionState = 'locked' | 'available' | 'current' | 'completed'

/**
 * Get the previous section ID in the sequence
 * @param sectionId - Current section ID (e.g., 'ch1-s2')
 * @param chapters - Array of chapter configurations
 * @returns Previous section ID or null if this is the first section
 */
export function getPreviousSection(
  sectionId: string,
  chapters: ChapterMapConfig[]
): string | null {
  // Find the chapter containing this section
  for (const chapter of chapters) {
    const sectionIndex = chapter.sections.indexOf(sectionId)
    
    if (sectionIndex > 0) {
      // Previous section in same chapter
      return chapter.sections[sectionIndex - 1]
    } else if (sectionIndex === 0) {
      // First section in chapter - check if previous chapter is completed
      const chapterIndex = chapters.findIndex(ch => ch.id === chapter.id)
      if (chapterIndex > 0) {
        // Get last section of previous chapter
        const previousChapter = chapters[chapterIndex - 1]
        if (previousChapter.sections.length > 0) {
          return previousChapter.sections[previousChapter.sections.length - 1]
        }
      }
    }
  }
  
  // This is the first section overall (ch1-s1)
  return null
}

/**
 * Get the state of a section based on progress
 * @param sectionId - Section ID to check (e.g., 'ch1-s1')
 * @param currentSection - Currently active section ID
 * @param completedTopics - Array of completed section IDs (subject-specific)
 * @param chapters - Array of chapter configurations (for determining previous section)
 * @returns Section state: 'locked' | 'available' | 'current' | 'completed'
 */
export function getSectionState(
  sectionId: string,
  currentSection: string | null,
  completedTopics: string[],
  chapters: ChapterMapConfig[] = []
): SectionState {
  // Check if section is completed
  if (completedTopics.includes(sectionId)) {
    return 'completed'
  }
  
  // Check if this is the current section
  if (currentSection === sectionId) {
    return 'current'
  }
  
  // Check if previous section is completed (makes this section available)
  if (chapters.length > 0) {
    const previousSection = getPreviousSection(sectionId, chapters)
    
    if (previousSection === null) {
      // This is the first section (ch1-s1) - always available
      return 'available'
    }
    
    if (completedTopics.includes(previousSection)) {
      // Previous section completed - this section is available
      return 'available'
    }
  }
  
  // Previous section not completed - section is locked
  return 'locked'
}

export function getCamelPosition(
  currentSection: string | null,
  chapters: ChapterMapConfig[]
): { x: number; y: number } | null {
  if (!currentSection) {
    // Default to first section of first chapter
    return { x: 50, y: 5 }
  }

  // Find which chapter contains this section
  for (const chapter of chapters) {
    if (chapter.sections.includes(currentSection)) {
      // Find section index within chapter (0-4)
      const sectionIndex = chapter.sections.indexOf(currentSection)
      // Calculate position offset for sections within chapter
      // Each section adds ~1.5% vertical offset
      const yOffset = sectionIndex * 1.5
      return {
        x: chapter.position.x,
        y: Math.max(5, Math.min(95, chapter.position.y + yOffset))
      }
    }
  }

  return { x: 50, y: 5 } // Default position
}

/**
 * NEW WINDING PATH POSITION CALCULATION (Phase 1)
 * Pixel-based coordinates for Duolingo-style winding path layout
 */

/**
 * Calculate position for section node in winding path layout
 * Creates a snake-like pattern: center → right → right → left → center
 * 
 * @param chapterIndex - Index of chapter (0-8)
 * @param sectionIndex - Index of section within chapter (0-4)
 * @param containerWidth - Width of container in pixels (default 400px for desktop)
 * @param sectionSpacing - Vertical spacing between sections in pixels (default 120px)
 * @returns Position in pixels relative to container { x, y }
 * 
 * @example
 * // Desktop: 400px container
 * getSectionPosition(0, 0, 400) // { x: 200, y: 100 } - Chapter 1, Section 1 (center)
 * getSectionPosition(0, 1, 400) // { x: 240, y: 220 } - Chapter 1, Section 2 (right)
 * 
 * // Mobile: 300px container
 * getSectionPosition(0, 0, 300) // { x: 150, y: 100 } - Centered for mobile
 */
export function getSectionPosition(
  chapterIndex: number,
  sectionIndex: number,
  containerWidth: number = 400,
  sectionSpacing: number = 120
): { x: number; y: number } {
  const centerX = containerWidth / 2
  const startY = 100 // Start below chapter card (100px from top)
  
  // Calculate Y position (vertical spacing)
  const y = startY + (sectionIndex * sectionSpacing)
  
  // Calculate X offset for winding effect
  let xOffset = 0
  
  // Winding pattern:
  // Section 0 (index 0): center (xOffset = 0)
  // Section 1 (index 1): right (xOffset = +40)
  // Section 2 (index 2): right (xOffset = +40)
  // Section 3 (index 3): left (xOffset = -40)
  // Section 4 (index 4): center (xOffset = 0)
  
  if (sectionIndex === 1 || sectionIndex === 2) {
    xOffset = 40 // Move right
  } else if (sectionIndex === 3) {
    xOffset = -40 // Move left
  }
  // sectionIndex === 0 or 4: xOffset = 0 (center)
  
  // Scale offset based on container width for responsive design
  const scaleFactor = containerWidth / 400 // Scale relative to 400px base
  const scaledOffset = xOffset * scaleFactor
  
  return {
    x: centerX + scaledOffset,
    y
  }
}

/**
 * Get position for treasure chest (appears after last section in chapter)
 * @param chapterIndex - Index of chapter (0-8)
 * @param containerWidth - Width of container in pixels (default 400px)
 * @param sectionSpacing - Vertical spacing between sections (default 120px)
 * @param treasureOffset - Distance below last section in pixels (default 140px)
 * @returns Position in pixels relative to container { x, y }
 * 
 * @example
 * getTreasurePosition(0, 400) // { x: 200, y: 680 } - Below section 5 of chapter 1
 */
export function getTreasurePosition(
  chapterIndex: number,
  containerWidth: number = 400,
  sectionSpacing: number = 120,
  treasureOffset: number = 140
): { x: number; y: number } {
  const lastSectionIndex = 4 // Last section in chapter (0-4 = section 5)
  const lastSectionPos = getSectionPosition(chapterIndex, lastSectionIndex, containerWidth, sectionSpacing)
  
  return {
    x: containerWidth / 2, // Center treasure chest
    y: lastSectionPos.y + treasureOffset // Below last section
  }
}

/**
 * Get position for chapter card (appears above sections)
 * @param chapterIndex - Index of chapter (0-8)
 * @param containerWidth - Width of container in pixels (default 400px)
 * @param cardHeight - Height of chapter card in pixels (default 60px)
 * @returns Position in pixels relative to container { x, y }
 * 
 * @example
 * getChapterCardPosition(0, 400) // { x: 200, y: 30 } - Top of chapter 1
 */
export function getChapterCardPosition(
  chapterIndex: number,
  containerWidth: number = 400,
  cardHeight: number = 60
): { x: number; y: number } {
  return {
    x: containerWidth / 2, // Center chapter card
    y: cardHeight / 2 // Top of container (centered vertically in card)
  }
}

