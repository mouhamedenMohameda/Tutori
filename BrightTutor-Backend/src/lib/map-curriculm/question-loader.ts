/**
 * Question Loader - Loads questions from map curriculm folder
 * Maps year + subject to the appropriate question file
 */

import { YEAR1_MATH_SECTION_QUESTIONS } from './math/year1_math_questions';
import { YEAR1_SCIENCE_SECTION_QUESTIONS } from './science/year1_science_questions';
import { YEAR2_MATH_SECTION_QUESTIONS } from './math/year2_math_questions';
import { YEAR2_SCIENCE_SECTION_QUESTIONS } from './science/year2_science_questions';
import { YEAR2_PHYSICS_SECTION_QUESTIONS } from './physics/year2_physics_questions';
import { YEAR3_MATH_SECTION_QUESTIONS } from './math/year3_maths_questions';
import { YEAR3_SCIENCE_SECTION_QUESTIONS } from './science/year3_science_questions';
import { YEAR3_PHYSICS_SECTION_QUESTIONS } from './physics/year3_physics_questions';
import { YEAR4_MATH_SECTION_QUESTIONS } from './math/year4_math_questions';
import { YEAR4_SCIENCE_SECTION_QUESTIONS } from './science/year4_science_questions';
import { YEAR4_PHYSICS_SECTION_QUESTIONS } from './physics/year4_physics_questions';

export interface SectionQuestions {
  questions: Array<{
    question: string;
    answer: string;
  }>;
  exercises: Array<{
    type: string;
    question: string;
    answer: string | string[]; // Can be string or array for drag_and_drop ordering
    wrongAnswers?: string[]; // Optional: for multiple choice questions
    wordBank?: string[]; // Optional: for drag_and_drop exercises
    mode?: 'order' | 'select' | 'construct'; // Optional: for drag_and_drop exercises
  }>;
}

// Question registry mapping year_subject to question data
const QUESTION_REGISTRY: { [key: string]: { [sectionId: string]: SectionQuestions } } = {
  'year1_math': YEAR1_MATH_SECTION_QUESTIONS,
  'year1_science': YEAR1_SCIENCE_SECTION_QUESTIONS,
  'year2_math': YEAR2_MATH_SECTION_QUESTIONS,
  'year2_science': YEAR2_SCIENCE_SECTION_QUESTIONS,
  'year2_physics': YEAR2_PHYSICS_SECTION_QUESTIONS,
  'year3_math': YEAR3_MATH_SECTION_QUESTIONS,
  'year3_science': YEAR3_SCIENCE_SECTION_QUESTIONS,
  'year3_physics': YEAR3_PHYSICS_SECTION_QUESTIONS,
  'year4_math': YEAR4_MATH_SECTION_QUESTIONS,
  'year4_science': YEAR4_SCIENCE_SECTION_QUESTIONS,
  'year4_physics': YEAR4_PHYSICS_SECTION_QUESTIONS,
};

/**
 * Get questions for a specific section
 */
export function getSectionQuestions(
  year: number,
  subject: string,
  sectionId: string
): SectionQuestions | null {
  // Normalize subject name to match registry keys
  let subjectKey = subject.toLowerCase();
  
  // Map database subject names to curriculum keys
  if (subjectKey.includes('math') || subjectKey.includes('mathématiques')) {
    subjectKey = 'math';
  } else if (subjectKey.includes('science') || subjectKey.includes('sciences')) {
    subjectKey = 'science';
  } else if (subjectKey.includes('physic') || subjectKey.includes('physique')) {
    subjectKey = 'physics';
  }
  
  const key = `year${year}_${subjectKey}`;
  console.log(`🔍 Loading questions: ${key} for section ${sectionId}`);
  console.log(`🔍 getSectionQuestions called with: year=${year} (type: ${typeof year}), subject="${subject}", subjectKey="${subjectKey}", sectionId="${sectionId}"`);
  
  const questionData = QUESTION_REGISTRY[key];
  if (!questionData) {
    console.error(`❌ Questions not found: ${key}`);
    console.error(`❌ Debug: year=${year}, subjectKey="${subjectKey}", key="${key}"`);
    console.log(`📚 Available question sets:`, Object.keys(QUESTION_REGISTRY));
    return null;
  }
  
  console.log(`✅ Found question data for ${key}, checking section ${sectionId}`);
  console.log(`🔍 Available sections in ${key}:`, Object.keys(questionData).slice(0, 10)); // Show first 10 sections
  
  const sectionQuestions = questionData[sectionId];
  if (!sectionQuestions) {
    console.warn(`⚠️ No questions found for section ${sectionId} in ${key}`);
    console.warn(`⚠️ Section ${sectionId} not found. Available sections:`, Object.keys(questionData));
    return null;
  }
  
  console.log(`✅ Questions loaded: ${sectionQuestions.questions.length} questions, ${sectionQuestions.exercises.length} exercises`);
  return sectionQuestions;
}

/**
 * Get all sections with questions for a year and subject
 */
export function getAllSectionsWithQuestions(
  year: number,
  subject: string
): { [sectionId: string]: SectionQuestions } | null {
  // Normalize subject name
  let subjectKey = subject.toLowerCase();
  
  if (subjectKey.includes('math') || subjectKey.includes('mathématiques')) {
    subjectKey = 'math';
  } else if (subjectKey.includes('science') || subjectKey.includes('sciences')) {
    subjectKey = 'science';
  } else if (subjectKey.includes('physic') || subjectKey.includes('physique')) {
    subjectKey = 'physics';
  }
  
  const key = `year${year}_${subjectKey}`;
  const questionData = QUESTION_REGISTRY[key];
  
  if (!questionData) {
    console.error(`❌ Questions not found: ${key}`);
    return null;
  }
  
  return questionData;
}

/**
 * Check if questions exist for a section
 */
export function hasSectionQuestions(
  year: number,
  subject: string,
  sectionId: string
): boolean {
  const questions = getSectionQuestions(year, subject, sectionId);
  return questions !== null;
}

/**
 * Get question count for a section
 */
export function getSectionQuestionCount(
  year: number,
  subject: string,
  sectionId: string
): { questions: number; exercises: number } {
  const sectionQuestions = getSectionQuestions(year, subject, sectionId);
  
  if (!sectionQuestions) {
    return { questions: 0, exercises: 0 };
  }
  
  return {
    questions: sectionQuestions.questions.length,
    exercises: sectionQuestions.exercises.length
  };
}

export default {
  getSectionQuestions,
  getAllSectionsWithQuestions,
  hasSectionQuestions,
  getSectionQuestionCount
};

