/**
 * School classes: GET, POST, PUT, DELETE
 * Ported from BrightTutor-AI-Platform src/app/api/school/classes/route.ts
 */
import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { mapClassroomYearToCurriculumYear } from '@/lib/curriculum/curriculum-loader'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const JWT_SECRET = () => getJWTSecret()
const STANDARD_SUBJECT_TYPES = ['MATH', 'SCIENCE', 'PHYSICS']

function getSchoolIdFromToken(req: Request, res: Response, allowTeacher = false): string | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { schoolId?: string; role?: string }
    if (allowTeacher && decoded.role === 'TEACHER') return decoded.schoolId ?? null
    if (decoded.role === 'SCHOOL_ADMIN') return decoded.schoolId ?? null
    res.status(403).json({ error: 'Access denied' })
    return null
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

function detectClassroomYearFromName(className: string, gradeLevel: string | null): string | null {
  const name = (className || '').toLowerCase()
  const grade = (gradeLevel || '').toLowerCase()
  const combined = `${name} ${grade}`.toLowerCase()
  if (/year 1|1a|1as|premier|1ère|1ere/.test(combined) || name.includes('1a') || grade.includes('1a')) return 'PREMIER_COLLEGE'
  if (/year 2|2a|2as|deuxieme|deuxième|2ème|2eme/.test(combined) || name.includes('2a') || grade.includes('2a')) return 'DEUXIEME_COLLEGE'
  if (/year 3|3a|3as|troisieme|troisième|3ème|3eme/.test(combined) || name.includes('3a') || grade.includes('3a')) return 'TROISIEME_COLLEGE'
  if (/year 4|4a|4as|quatrieme|quatrième|4ème|4eme/.test(combined) || name.includes('4a') || grade.includes('4a')) return 'QUATRIEME_COLLEGE'
  return null
}

async function getOrCreateStandardSubjects(
  schoolId: string,
  year: number
): Promise<{ mathId: string; scienceId: string; physicsId: string | null }> {
  let mathSubject = await prisma.subject.findFirst({
    where: { schoolId, name: { in: ['Mathematics', 'Mathématiques', 'Math'] }, isActive: true },
  })
  if (!mathSubject) {
    mathSubject = await prisma.subject.create({
      data: {
        schoolId,
        name: 'Mathématiques',
        description: 'Mathematics curriculum',
        language: 'French',
        subjectType: 'MATH',
        icon: '📐',
        isActive: true,
      },
    })
  }
  let scienceSubject = await prisma.subject.findFirst({
    where: { schoolId, name: { in: ['Science', 'Sciences'] }, isActive: true },
  })
  if (!scienceSubject) {
    scienceSubject = await prisma.subject.create({
      data: {
        schoolId,
        name: 'Sciences',
        description: 'Science curriculum',
        language: 'French',
        subjectType: 'SCIENCE',
        icon: '🔬',
        isActive: true,
      },
    })
  }
  let physicsSubject: { id: string } | null = null
  if (year >= 2) {
    physicsSubject = await prisma.subject.findFirst({
      where: { schoolId, name: { in: ['Physics', 'Physique'] }, isActive: true },
    })
    if (!physicsSubject) {
      physicsSubject = await prisma.subject.create({
        data: {
          schoolId,
          name: 'Physique',
          description: 'Physics curriculum',
          language: 'French',
          subjectType: 'PHYSICS',
          icon: '⚛️',
          isActive: true,
        },
      })
    }
  }
  return {
    mathId: mathSubject.id,
    scienceId: scienceSubject.id,
    physicsId: physicsSubject?.id ?? null,
  }
}

router.get('/', async (req: Request, res: Response) => {
  try {
    const schoolId = getSchoolIdFromToken(req, res, true)
    if (!schoolId) return
    const classes = await prisma.class.findMany({
      where: { schoolId },
      include: {
        classSubjects: { include: { subject: true } },
        _count: { select: { students: true, teacherClasses: true } },
      },
      orderBy: { createdAt: 'desc' },
    })
    const formattedClasses = classes.map((c: any) => {
      const standardSubjects = (c.classSubjects || []).filter(
        (cs: any) => cs.subject?.subjectType && STANDARD_SUBJECT_TYPES.includes(cs.subject.subjectType)
      )
      return {
        id: c.id,
        name: c.className,
        className: c.className,
        gradeLevel: c.gradeLevel,
        description: c.description,
        classroomYear: c.classroomYear,
        academicYear: c.academicYear,
        subjects: standardSubjects.map((cs: any) => cs.subject.name),
        subjectIds: standardSubjects.map((cs: any) => cs.subject.id),
        studentCount: c._count?.students ?? 0,
        teacherCount: c._count?.teacherClasses ?? 0,
        createdDate: c.createdAt?.toISOString?.(),
        createdAt: c.createdAt?.toISOString?.(),
      }
    })
    res.json({ success: true, classes: formattedClasses })
  } catch (error) {
    sendSanitizedError(res, error, 'school/classes')
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const schoolId = getSchoolIdFromToken(req, res, false)
    if (!schoolId) return
    const { className, gradeLevel, description, classroomYear } = req.body || {}
    if (!className || !gradeLevel) {
      return res.status(400).json({ error: 'Class name and grade level are required' })
    }
    let finalClassroomYear = classroomYear
    if (!finalClassroomYear) {
      const detected = detectClassroomYearFromName(className, gradeLevel)
      if (detected) finalClassroomYear = detected
      else {
        return res.status(400).json({
          error: 'Classroom year is required. Please select a year or use a class name that includes the year (e.g. Year 2, 2AS).',
        })
      }
    }
    const validYears = ['PREMIER_COLLEGE', 'DEUXIEME_COLLEGE', 'TROISIEME_COLLEGE', 'QUATRIEME_COLLEGE']
    if (!validYears.includes(finalClassroomYear)) {
      return res.status(400).json({ error: `Invalid classroom year. Must be one of: ${validYears.join(', ')}` })
    }
    const existing = await prisma.class.findFirst({
      where: { schoolId, className },
    })
    if (existing) return res.status(400).json({ error: 'Class with this name already exists' })
    const currentYear = new Date().getFullYear()
    const academicYear = `${currentYear}-${currentYear + 1}`
    const classItem = await prisma.class.create({
      data: {
        schoolId,
        className,
        gradeLevel,
        description: description || null,
        classroomYear: finalClassroomYear,
        academicYear,
      },
    })
    const year = mapClassroomYearToCurriculumYear(finalClassroomYear)
    const subjects = await getOrCreateStandardSubjects(schoolId, year)
    const subjectIds = [subjects.mathId, subjects.scienceId]
    if (subjects.physicsId) subjectIds.push(subjects.physicsId)
    await prisma.classSubject.createMany({
      data: subjectIds.map((subjectId) => ({ classId: classItem.id, subjectId })),
    })
    res.json({
      success: true,
      message: `Classroom created with ${year >= 2 ? 3 : 2} subjects auto-assigned`,
      class: {
        id: classItem.id,
        className: classItem.className,
        gradeLevel: classItem.gradeLevel,
        classroomYear: classItem.classroomYear,
        subjectsCount: subjectIds.length,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'school/classes')
  }
})

router.put('/', async (req: Request, res: Response) => {
  try {
    const schoolId = getSchoolIdFromToken(req, res, false)
    if (!schoolId) return
    const { classId, className, gradeLevel, description, classroomYear } = req.body || {}
    if (!classId) return res.status(400).json({ error: 'Class ID is required' })
    const currentClass = await prisma.class.findFirst({
      where: { id: classId, schoolId },
    })
    if (!currentClass) return res.status(404).json({ error: 'Classroom not found' })
    let finalClassroomYear = classroomYear ?? currentClass.classroomYear
    if (classroomYear !== undefined && classroomYear !== null) {
      const validYears = ['PREMIER_COLLEGE', 'DEUXIEME_COLLEGE', 'TROISIEME_COLLEGE', 'QUATRIEME_COLLEGE']
      if (!validYears.includes(finalClassroomYear)) {
        return res.status(400).json({ error: `Invalid classroom year. Must be one of: ${validYears.join(', ')}` })
      }
    }
    const updateData: Record<string, unknown> = {}
    if (className != null) updateData.className = className
    if (gradeLevel != null) updateData.gradeLevel = gradeLevel
    if (description !== undefined) updateData.description = description || null
    if (finalClassroomYear != null) updateData.classroomYear = finalClassroomYear
    await prisma.class.update({
      where: { id: classId },
      data: updateData as any,
    })
    if (finalClassroomYear && finalClassroomYear !== currentClass.classroomYear) {
      await prisma.classSubject.deleteMany({ where: { classId } })
      const year = mapClassroomYearToCurriculumYear(finalClassroomYear)
      const subjects = await getOrCreateStandardSubjects(schoolId, year)
      const subjectIds = [subjects.mathId, subjects.scienceId]
      if (subjects.physicsId) subjectIds.push(subjects.physicsId)
      await prisma.classSubject.createMany({
        data: subjectIds.map((subjectId) => ({ classId, subjectId })),
      })
    }
    const updated = await prisma.class.findUnique({
      where: { id: classId },
      include: { classSubjects: { include: { subject: true } } },
    })
    res.json({ success: true, message: 'Classroom updated successfully', class: updated })
  } catch (error) {
    sendSanitizedError(res, error, 'school/classes')
  }
})

router.delete('/', async (req: Request, res: Response) => {
  try {
    const schoolId = getSchoolIdFromToken(req, res, false)
    if (!schoolId) return
    const classId = (req.query.classId as string) || (req.body?.classId as string)
    if (!classId) return res.status(400).json({ error: 'Class ID is required' })
    const studentCount = await prisma.student.count({
      where: { classId, isActive: true },
    })
    if (studentCount > 0) {
      return res.status(400).json({
        error: 'Cannot delete class with active students. Please move or remove students first.',
      })
    }
    await prisma.class.delete({
      where: { id: classId, schoolId },
    })
    res.json({ success: true, message: 'Class deleted successfully' })
  } catch (error) {
    sendSanitizedError(res, error, 'school/classes')
  }
})

export default router
