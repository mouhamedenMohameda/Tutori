// Curriculum Mapping System for BrightTutor AI
// Maps classroom years and subject types to curriculum content

export interface CurriculumContent {
  year: string;
  subject: string;
  content: string;
  topics: string[];
  learningObjectives: string[];
}

export interface ClassroomCurriculum {
  classroomYear: string;
  availableSubjects: SubjectType[];
  curriculumFiles: string[];
}

// French classroom year mapping
export const CLASSROOM_YEARS = {
  PREMIER_COLLEGE: 'Premier Collège (Year 1)',
  DEUXIEME_COLLEGE: 'Deuxième Collège (Year 2)', 
  TROISIEME_COLLEGE: 'Troisième Collège (Year 3)',
  QUATRIEME_COLLEGE: 'Quatrième Collège (Year 4)'
} as const;

export type ClassroomYear = keyof typeof CLASSROOM_YEARS;

// Subject type mapping
export const SUBJECT_TYPES = {
  MATH: 'Mathematics (Mathématiques)',
  SCIENCE: 'Science (Sciences)',
  PHYSICS: 'Physics (Physique)'
} as const;

export type SubjectType = keyof typeof SUBJECT_TYPES;

// Curriculum mapping configuration
export const CURRICULUM_MAPPING: Record<ClassroomYear, ClassroomCurriculum> = {
  PREMIER_COLLEGE: {
    classroomYear: CLASSROOM_YEARS.PREMIER_COLLEGE,
    availableSubjects: ['MATH', 'SCIENCE'] as SubjectType[],
    curriculumFiles: ['year1-math.md', 'year1-science.md']
  },
  DEUXIEME_COLLEGE: {
    classroomYear: CLASSROOM_YEARS.DEUXIEME_COLLEGE,
    availableSubjects: ['MATH', 'SCIENCE', 'PHYSICS'] as SubjectType[],
    curriculumFiles: ['year2-math.md', 'year2-science.md', 'year2-physics.md']
  },
  TROISIEME_COLLEGE: {
    classroomYear: CLASSROOM_YEARS.TROISIEME_COLLEGE,
    availableSubjects: ['MATH', 'SCIENCE', 'PHYSICS'] as SubjectType[],
    curriculumFiles: ['year3-math.md', 'year3-science.md', 'year3-physics.md']
  },
  QUATRIEME_COLLEGE: {
    classroomYear: CLASSROOM_YEARS.QUATRIEME_COLLEGE,
    availableSubjects: ['MATH', 'SCIENCE', 'PHYSICS'] as SubjectType[],
    curriculumFiles: ['year4-math.md', 'year4-science.md', 'year4-physics.md']
  }
};

// Get available subjects for a classroom year
export function getAvailableSubjects(classroomYear: ClassroomYear): SubjectType[] {
  return CURRICULUM_MAPPING[classroomYear]?.availableSubjects || [];
}

// Get curriculum files for a classroom year
export function getCurriculumFiles(classroomYear: ClassroomYear): string[] {
  return CURRICULUM_MAPPING[classroomYear]?.curriculumFiles || [];
}

// Get curriculum file for specific year and subject
export function getCurriculumFile(classroomYear: ClassroomYear, subjectType: SubjectType): string | null {
  const availableSubjects = getAvailableSubjects(classroomYear);
  if (!availableSubjects.includes(subjectType)) {
    return null;
  }
  
  const yearNumber = classroomYear.replace('_COLLEGE', '').toLowerCase();
  return `year${yearNumber.charAt(0)}-${subjectType.toLowerCase()}.md`;
}

// Validate classroom year and subject combination
export function isValidCurriculumCombination(classroomYear: ClassroomYear, subjectType: SubjectType): boolean {
  const availableSubjects = getAvailableSubjects(classroomYear);
  return availableSubjects.includes(subjectType);
}

// Get curriculum summary for AI context
export function getCurriculumSummary(classroomYear: ClassroomYear, subjectType: SubjectType): string {
  if (!isValidCurriculumCombination(classroomYear, subjectType)) {
    return `Invalid combination: ${classroomYear} does not offer ${subjectType}`;
  }
  
  const yearName = CLASSROOM_YEARS[classroomYear];
  const subjectName = SUBJECT_TYPES[subjectType];
  
  return `Student is in ${yearName} studying ${subjectName}. This level covers the Mauritanian national curriculum for ${yearName} ${subjectName.toLowerCase()}.`;
}

// Get all curriculum information for a classroom
export function getClassroomCurriculumInfo(classroomYear: ClassroomYear): ClassroomCurriculum | null {
  return CURRICULUM_MAPPING[classroomYear] || null;
}

// Export curriculum mapping for external use
export function exportCurriculumMapping(): Record<string, any> {
  return {
    classroomYears: CLASSROOM_YEARS,
    subjectTypes: SUBJECT_TYPES,
    curriculumMapping: CURRICULUM_MAPPING,
    totalClassrooms: Object.keys(CLASSROOM_YEARS).length,
    totalSubjects: Object.keys(SUBJECT_TYPES).length
  };
}
