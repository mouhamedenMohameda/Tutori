/**
 * Curriculum Loader - Loads curriculum from .ts files
 * Clean, production-ready system for Mauritanian curriculum
 */

import { YEAR1_MATH_CURRICULUM } from './math/year1_math';
import { YEAR1_SCIENCE_CURRICULUM } from './science/year1_science';
import { YEAR2_MATH_CURRICULUM } from './math/year2_math';
import { YEAR2_SCIENCE_CURRICULUM } from './science/year2_science';
import { YEAR2_PHYSICS_CURRICULUM } from './physics/year2_physics';
import { YEAR3_MATH_CURRICULUM } from './math/year3_maths';
import { YEAR3_SCIENCE_CURRICULUM } from './science/year3_science';
import { YEAR3_PHYSICS_CURRICULUM } from './physics/year3_physics';
import { YEAR4_MATH_CURRICULUM } from './math/year4_math';
import { YEAR4_SCIENCE_CURRICULUM } from './science/year4_science';
import { YEAR4_PHYSICS_CURRICULUM } from './physics/year4_physics';
import { BAC_MATHEMATIQUE_CURRICULUM } from './math/bac_mathematique_C';
import { BAC_MATHEMATIQUE_D_CURRICULUM } from './math/bac_mathematique_D';
import { BAC_PHYSIQUE_CURRICULUM } from './physics/bac_physique_C';

export interface CurriculumSection {
  id: string;
  title: string;
  description: string;
  concepts: string[];
  objectives: string[];
  content: any;
  questions?: string[];
  exercises: Array<{
    type: string;
    question: string;
    answer: string;
    difficulty?: string;
  }>;
  difficulty: string;
  estimatedTime: number;
}

export interface CurriculumChapter {
  id: string;
  title: string;
  sections: CurriculumSection[];
}

export interface Curriculum {
  year: number;
  subject: string;
  title: string;
  methodology?: string;
  description?: string;
  chapters: CurriculumChapter[];
}

// Curriculum registry
const CURRICULUM_REGISTRY: { [key: string]: Curriculum } = {
  'year1_math': YEAR1_MATH_CURRICULUM,
  'year1_science': YEAR1_SCIENCE_CURRICULUM,
  'year2_math': YEAR2_MATH_CURRICULUM,
  'year2_science': YEAR2_SCIENCE_CURRICULUM,
  'year2_physics': YEAR2_PHYSICS_CURRICULUM,
  'year3_math': YEAR3_MATH_CURRICULUM,
  'year3_science': YEAR3_SCIENCE_CURRICULUM,
  'year3_physics': YEAR3_PHYSICS_CURRICULUM,
  'year4_math': YEAR4_MATH_CURRICULUM,
  'year4_science': YEAR4_SCIENCE_CURRICULUM,
  'year4_physics': YEAR4_PHYSICS_CURRICULUM,
  'year5_math': BAC_MATHEMATIQUE_CURRICULUM, // BAC C = Year 5
  'year5_math_d': BAC_MATHEMATIQUE_D_CURRICULUM, // BAC D = Year 5 (Littéraire)
  'year5_physics': BAC_PHYSIQUE_CURRICULUM, // BAC Physique = Year 5
};

/**
 * Map classroom year string to curriculum year number
 * Handles both French Mauritanian system and numeric formats
 */
export function mapClassroomYearToCurriculumYear(classroomYear: string): number {
  // Handle French Mauritanian system
  const frenchMappings: { [key: string]: number } = {
    'PREMIER_COLLEGE': 1,
    'DEUXIEME_COLLEGE': 2, 
    'TROISIEME_COLLEGE': 3,
    'QUATRIEME_COLLEGE': 4
  };
  
  // Handle numeric formats (Year1, Year2, Year5, etc.)
  if (classroomYear.startsWith('Year')) {
    const year = parseInt(classroomYear.replace(/\D/g, ''));
    if (!isNaN(year) && year >= 1 && year <= 5) {
      console.log(`🎯 Mapped numeric classroom year: ${classroomYear} → Year ${year}`);
      return year;
    }
  }
  
  // Handle BAC explicitly
  if (classroomYear === 'BAC' || classroomYear === 'bac' || classroomYear.toLowerCase() === 'baccalaureat') {
    console.log(`🎯 Mapped BAC classroom year: ${classroomYear} → Year 5`);
    return 5;
  }
  
  // Handle French terms
  if (frenchMappings[classroomYear]) {
    console.log(`🎯 Mapped French classroom year: ${classroomYear} → Year ${frenchMappings[classroomYear]}`);
    return frenchMappings[classroomYear];
  }
  
  // Fallback to Year 1 with warning
  console.warn(`⚠️ Unknown classroom year format: "${classroomYear}", defaulting to Year 1`);
  console.log(`📚 Available formats: Year1, Year2, Year3, Year4, Year5, BAC, PREMIER_COLLEGE, DEUXIEME_COLLEGE, TROISIEME_COLLEGE, QUATRIEME_COLLEGE`);
  return 1;
}

/**
 * Get curriculum for specific year and subject
 */
export function getCurriculum(year: number, subject: string): Curriculum | null {
  // Normalize subject name to match registry keys
  let subjectKey = subject.toLowerCase();
  
  // Map database subject names to curriculum keys
  if (subjectKey.includes('math')) {
    subjectKey = 'math';
  } else if (subjectKey.includes('science') || subjectKey.includes('sciences')) {
    subjectKey = 'science';
  } else if (subjectKey.includes('physic') || subjectKey.includes('physique')) {
    subjectKey = 'physics';
  }
  
  const key = `year${year}_${subjectKey}`;
  console.log(`🔍 Loading curriculum: ${key} (from subject: "${subject}")`);
  
  const curriculum = CURRICULUM_REGISTRY[key];
  if (!curriculum) {
    console.error(`❌ Curriculum not found: ${key}`);
    console.log(`📚 Available curricula:`, Object.keys(CURRICULUM_REGISTRY));
  } else {
    console.log(`✅ Curriculum loaded: ${curriculum.title}`);
  }
  
  return curriculum || null;
}

/**
 * Get specific chapter from curriculum
 */
export function getChapter(year: number, subject: string, chapterId: string): CurriculumChapter | null {
  const curriculum = getCurriculum(year, subject);
  if (!curriculum) {
    console.error(`❌ No curriculum found for year ${year}, subject ${subject}`);
    return null;
  }
  
  const chapter = curriculum.chapters.find(ch => ch.id === chapterId);
  if (!chapter) {
    console.error(`❌ Chapter not found: ${chapterId}. Available chapters:`, curriculum.chapters.map(ch => ch.id));
    return null;
  }
  
  return chapter;
}

/**
 * Get specific section from curriculum
 */
export function getSection(year: number, subject: string, chapterId: string, sectionId: string): CurriculumSection | null {
  const curriculum = getCurriculum(year, subject);
  if (!curriculum) {
    console.error(`❌ No curriculum found for year ${year}, subject ${subject}`);
    return null;
  }
  
  const chapter = curriculum.chapters.find(ch => ch.id === chapterId);
  if (!chapter) {
    console.error(`❌ Chapter not found: ${chapterId}. Available chapters:`, curriculum.chapters.map(ch => ch.id));
    return null;
  }
  
  const section = chapter.sections.find(sec => sec.id === sectionId);
  if (!section) {
    console.error(`❌ Section not found: ${sectionId}. Available sections:`, chapter.sections.map(s => s.id));
    return null;
  }
  
  console.log(`✅ Section loaded: ${chapter.title} → ${section.title}`);
  return section;
}

/**
 * Get next section for progression
 */
export function getNextSection(year: number, subject: string, chapterId: string, sectionId: string): { chapter: string; section: string } | null {
  const curriculum = getCurriculum(year, subject);
  if (!curriculum) return null;
  
  const chapterIndex = curriculum.chapters.findIndex(ch => ch.id === chapterId);
  if (chapterIndex === -1) return null;
  
  const currentChapter = curriculum.chapters[chapterIndex];
  const sectionIndex = currentChapter.sections.findIndex(sec => sec.id === sectionId);
  
  // Next section in same chapter
  if (sectionIndex < currentChapter.sections.length - 1) {
    return {
      chapter: chapterId,
      section: currentChapter.sections[sectionIndex + 1].id
    };
  }
  
  // Next chapter
  if (chapterIndex < curriculum.chapters.length - 1) {
    const nextChapter = curriculum.chapters[chapterIndex + 1];
    return {
      chapter: nextChapter.id,
      section: nextChapter.sections[0].id
    };
  }
  
  // No more sections
  return null;
}

/**
 * Get random question from section (avoid repetition)
 */
export function getRandomQuestion(section: CurriculumSection, usedQuestions: string[] = []): string {
  if (!section.questions || section.questions.length === 0) {
    // Fallback to exercises if no questions
    if (section.exercises && section.exercises.length > 0) {
      return section.exercises[0].question;
    }
    return '';
  }
  
  const availableQuestions = section.questions.filter(q => !usedQuestions.includes(q));
  
  if (availableQuestions.length === 0) {
    // Reset if all questions used
    return section.questions[Math.floor(Math.random() * section.questions.length)];
  }
  
  return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
}

/**
 * Get random exercise from section
 */
export function getRandomExercise(section: CurriculumSection, usedExercises: string[] = []): { type: string; question: string; answer: string } | null {
  const availableExercises = section.exercises.filter(ex => !usedExercises.includes(ex.question));
  
  if (availableExercises.length === 0) {
    return section.exercises[Math.floor(Math.random() * section.exercises.length)];
  }
  
  return availableExercises[Math.floor(Math.random() * availableExercises.length)];
}

/**
 * Get all available curricula
 */
export function getAllCurricula(): Curriculum[] {
  return Object.values(CURRICULUM_REGISTRY);
}

/**
 * Get available years for a subject
 */
export function getAvailableYears(subject: string): number[] {
  const subjectKey = subject.toLowerCase().replace('s', '');
  const years: number[] = [];
  
  Object.keys(CURRICULUM_REGISTRY).forEach(key => {
    if (key.includes(subjectKey)) {
      const year = parseInt(key.replace(`year`, '').replace(`_${subjectKey}`, ''));
      if (!isNaN(year)) {
        years.push(year);
      }
    }
  });
  
  return years.sort();
}

/**
 * Get available subjects for a year
 */
export function getAvailableSubjects(year: number): string[] {
  const subjects: string[] = [];
  
  Object.keys(CURRICULUM_REGISTRY).forEach(key => {
    if (key.startsWith(`year${year}_`)) {
      const subject = key.replace(`year${year}_`, '');
      if (subject === 'math') {
        subjects.push('Mathematics');
      } else if (subject === 'science') {
        subjects.push('Science');
      } else if (subject === 'physics') {
        subjects.push('Physics');
      }
    }
  });
  
  return subjects;
}

export default {
  getCurriculum,
  getChapter,
  getSection,
  getNextSection,
  getRandomQuestion,
  getRandomExercise,
  getAllCurricula,
  getAvailableYears,
  getAvailableSubjects,
  mapClassroomYearToCurriculumYear
};
