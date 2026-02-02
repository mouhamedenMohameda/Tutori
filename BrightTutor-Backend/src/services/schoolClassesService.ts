import { v4 as uuidv4 } from 'uuid'
import { In } from 'typeorm'
import { AppDataSource } from '@/config/data-source'
import { Subject, Class, ClassSubject, Student } from '@/entities'
import { mapClassroomYearToCurriculumYear } from '@/lib/curriculum/curriculum-loader'

const STANDARD_SUBJECT_TYPES = ['MATH', 'SCIENCE', 'PHYSICS']

export function detectClassroomYearFromName(
  className: string,
  gradeLevel: string | null
): string | null {
  const name = (className || '').toLowerCase()
  const grade = (gradeLevel || '').toLowerCase()
  const combined = `${name} ${grade}`.toLowerCase()
  if (/year 1|1a|1as|premier|1ère|1ere/.test(combined) || name.includes('1a') || grade.includes('1a'))
    return 'PREMIER_COLLEGE'
  if (/year 2|2a|2as|deuxieme|deuxième|2ème|2eme/.test(combined) || name.includes('2a') || grade.includes('2a'))
    return 'DEUXIEME_COLLEGE'
  if (/year 3|3a|3as|troisieme|troisième|3ème|3eme/.test(combined) || name.includes('3a') || grade.includes('3a'))
    return 'TROISIEME_COLLEGE'
  if (/year 4|4a|4as|quatrieme|quatrième|4ème|4eme/.test(combined) || name.includes('4a') || grade.includes('4a'))
    return 'QUATRIEME_COLLEGE'
  return null
}

export async function getOrCreateStandardSubjects(
  schoolId: string,
  year: number
): Promise<{ mathId: string; scienceId: string; physicsId: string | null }> {
  const subjectRepo = AppDataSource.getRepository(Subject)
  let mathSubject = await subjectRepo.findOne({
    where: {
      schoolId,
      name: In(['Mathematics', 'Mathématiques', 'Math']),
      isActive: true,
    },
  })
  if (!mathSubject) {
    mathSubject = await subjectRepo.save({
      id: uuidv4(),
      schoolId,
      name: 'Mathématiques',
      description: 'Mathematics curriculum',
      language: 'French',
      subjectType: 'MATH',
      icon: '📐',
      isActive: true,
    })
  }
  let scienceSubject = await subjectRepo.findOne({
    where: { schoolId, name: In(['Science', 'Sciences']), isActive: true },
  })
  if (!scienceSubject) {
    scienceSubject = await subjectRepo.save({
      id: uuidv4(),
      schoolId,
      name: 'Sciences',
      description: 'Science curriculum',
      language: 'French',
      subjectType: 'SCIENCE',
      icon: '🔬',
      isActive: true,
    })
  }
  let physicsSubject: { id: string } | null = null
  if (year >= 2) {
    const found = await subjectRepo.findOne({
      where: { schoolId, name: In(['Physics', 'Physique']), isActive: true },
    })
    if (found) physicsSubject = found
    else {
      physicsSubject = await subjectRepo.save({
        id: uuidv4(),
        schoolId,
        name: 'Physique',
        description: 'Physics curriculum',
        language: 'French',
        subjectType: 'PHYSICS',
        icon: '⚛️',
        isActive: true,
      })
    }
  }
  return {
    mathId: mathSubject.id,
    scienceId: scienceSubject.id,
    physicsId: physicsSubject?.id ?? null,
  }
}

export async function getClasses(schoolId: string) {
  const classRepo = AppDataSource.getRepository(Class)
  const studentRepo = AppDataSource.getRepository(Student)
  const classes = await classRepo.find({
    where: { schoolId },
    relations: ['classSubjects', 'classSubjects.subject', 'students', 'teacherClasses'],
    order: { createdAt: 'DESC' },
  })
  const formattedClasses = await Promise.all(
    classes.map(async (c) => {
      const standardSubjects = (c.classSubjects || []).filter(
        (cs) => cs.subject?.subjectType && STANDARD_SUBJECT_TYPES.includes(cs.subject.subjectType)
      )
      const studentCount = (c.students ?? []).length
      const teacherCount = (c.teacherClasses ?? []).length
      return {
        id: c.id,
        name: c.className,
        className: c.className,
        gradeLevel: c.gradeLevel,
        description: c.description,
        classroomYear: c.classroomYear,
        academicYear: c.academicYear,
        subjects: standardSubjects.map((cs) => cs.subject!.name),
        subjectIds: standardSubjects.map((cs) => cs.subject!.id),
        studentCount,
        teacherCount,
        createdDate: c.createdAt?.toISOString?.(),
        createdAt: c.createdAt?.toISOString?.(),
      }
    })
  )
  return { classes: formattedClasses }
}

export async function createClass(
  schoolId: string,
  data: {
    className: string
    gradeLevel: string
    description?: string
    classroomYear?: string
  }
) {
  let finalClassroomYear = data.classroomYear
  if (!finalClassroomYear) {
    const detected = detectClassroomYearFromName(data.className, data.gradeLevel)
    if (detected) finalClassroomYear = detected
    else {
      return {
        error:
          'Classroom year is required. Please select a year or use a class name that includes the year (e.g. Year 2, 2AS).',
        status: 400 as const,
      }
    }
  }
  const validYears = [
    'PREMIER_COLLEGE',
    'DEUXIEME_COLLEGE',
    'TROISIEME_COLLEGE',
    'QUATRIEME_COLLEGE',
  ]
  if (!validYears.includes(finalClassroomYear)) {
    return {
      error: `Invalid classroom year. Must be one of: ${validYears.join(', ')}`,
      status: 400 as const,
    }
  }
  const classRepo = AppDataSource.getRepository(Class)
  const existing = await classRepo.findOne({
    where: { schoolId, className: data.className },
  })
  if (existing) {
    return { error: 'Class with this name already exists', status: 400 as const }
  }
  const currentYear = new Date().getFullYear()
  const academicYear = `${currentYear}-${currentYear + 1}`
  const classItem = await classRepo.save({
    id: uuidv4(),
    schoolId,
    className: data.className,
    gradeLevel: data.gradeLevel,
    description: data.description || null,
    classroomYear: finalClassroomYear,
    academicYear,
  })
  const year = mapClassroomYearToCurriculumYear(finalClassroomYear)
  const subjects = await getOrCreateStandardSubjects(schoolId, year)
  const subjectIds = [subjects.mathId, subjects.scienceId]
  if (subjects.physicsId) subjectIds.push(subjects.physicsId)
  const csRepo = AppDataSource.getRepository(ClassSubject)
  for (const subjectId of subjectIds) {
    await csRepo.save({ id: uuidv4(), classId: classItem.id, subjectId })
  }
  return {
    class: {
      id: classItem.id,
      className: classItem.className,
      gradeLevel: classItem.gradeLevel,
      classroomYear: classItem.classroomYear,
      subjectsCount: subjectIds.length,
    },
    message: `Classroom created with ${year >= 2 ? 3 : 2} subjects auto-assigned`,
  }
}

export async function updateClass(
  schoolId: string,
  data: {
    classId: string
    className?: string
    gradeLevel?: string
    description?: string
    classroomYear?: string
  }
) {
  const classRepo = AppDataSource.getRepository(Class)
  const currentClass = await classRepo.findOne({
    where: { id: data.classId, schoolId },
  })
  if (!currentClass) return { error: 'Classroom not found', status: 404 as const }
  let finalClassroomYear: string | null =
    data.classroomYear ?? currentClass.classroomYear
  if (data.classroomYear !== undefined && data.classroomYear !== null) {
    const validYears = [
      'PREMIER_COLLEGE',
      'DEUXIEME_COLLEGE',
      'TROISIEME_COLLEGE',
      'QUATRIEME_COLLEGE',
    ]
    const yearToCheck = String(data.classroomYear)
    if (!validYears.includes(yearToCheck)) {
      return {
        error: `Invalid classroom year. Must be one of: ${validYears.join(', ')}`,
        status: 400 as const,
      }
    }
  }
  const updateData: Partial<Class> = {}
  if (data.className != null) updateData.className = data.className
  if (data.gradeLevel != null) updateData.gradeLevel = data.gradeLevel
  if (data.description !== undefined) updateData.description = data.description || null
  if (finalClassroomYear != null) updateData.classroomYear = finalClassroomYear
  await classRepo.update(data.classId, updateData)
  if (finalClassroomYear && finalClassroomYear !== currentClass.classroomYear) {
    const csRepo = AppDataSource.getRepository(ClassSubject)
    await csRepo.delete({ classId: data.classId })
    const year = mapClassroomYearToCurriculumYear(finalClassroomYear)
    const subjects = await getOrCreateStandardSubjects(schoolId, year)
    const subjectIds = [subjects.mathId, subjects.scienceId]
    if (subjects.physicsId) subjectIds.push(subjects.physicsId)
    for (const subjectId of subjectIds) {
      await csRepo.save({ id: uuidv4(), classId: data.classId, subjectId })
    }
  }
  const updated = await classRepo.findOne({
    where: { id: data.classId },
    relations: ['classSubjects', 'classSubjects.subject'],
  })
  return { class: updated }
}

export async function deleteClass(schoolId: string, classId: string) {
  const studentRepo = AppDataSource.getRepository(Student)
  const studentCount = await studentRepo.count({
    where: { classId, isActive: true },
  })
  if (studentCount > 0) {
    return {
      error:
        'Cannot delete class with active students. Please move or remove students first.',
      status: 400 as const,
    }
  }
  const classRepo = AppDataSource.getRepository(Class)
  await classRepo.delete({ id: classId, schoolId })
  return { success: true }
}
