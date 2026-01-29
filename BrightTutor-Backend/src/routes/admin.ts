import { Router, Request, Response } from 'express'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
import jwt from 'jsonwebtoken'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const JWT_SECRET = () => getJWTSecret()

function requireSchoolAdmin(req: Request, res: Response): { schoolId: string } | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as any
    if (decoded.role !== 'SCHOOL_ADMIN' && decoded.role !== 'PLATFORM_ADMIN') {
      res.status(403).json({ error: 'Access denied' })
      return null
    }
    return { schoolId: decoded.schoolId || req.query.schoolId as string }
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

router.get('/classes', async (req: Request, res: Response) => {
  try {
    const schoolId = (req.query.schoolId as string) || 'school_1'
    const classes = await prisma.class.findMany({
      where: { schoolId },
      include: {
        students: true,
        teacherClasses: { include: { teacher: true } },
      },
      orderBy: { createdAt: 'desc' },
    })
    res.json({
      success: true,
      classes: classes.map((c: any) => ({
        id: c.id,
        name: c.className,
        grade: c.gradeLevel,
        studentCount: c.students.length,
        teachers: c.teacherClasses.map((tc: any) => tc.teacher.name),
        academicYear: c.academicYear,
        createdAt: c.createdAt,
      })),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/classes')
  }
})

router.post('/classes', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { className, grade, schoolId = 'school_1' } = body
    if (!className || !grade) {
      return res.status(400).json({ error: 'Class name and grade are required' })
    }
    const existingClass = await prisma.class.findFirst({
      where: { schoolId, className },
    })
    if (existingClass) {
      return res.status(400).json({ error: 'A class with this name already exists' })
    }
    const newClass = await prisma.class.create({
      data: {
        schoolId,
        gradeLevel: grade,
        className,
        academicYear: new Date().getFullYear().toString(),
      },
      include: { school: true },
    })
    res.json({
      success: true,
      class: {
        id: newClass.id,
        name: newClass.className,
        grade: newClass.gradeLevel,
        academicYear: newClass.academicYear,
        createdAt: newClass.createdAt,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/classes')
  }
})

router.get('/classes/:id', async (req: Request, res: Response) => {
  try {
    const classRecord = await prisma.class.findUnique({
      where: { id: req.params.id },
      include: { students: true, school: true },
    })
    if (!classRecord) {
      return res.status(404).json({ error: 'Class not found' })
    }
    res.json({ success: true, class: classRecord })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/classes/:id')
  }
})

router.delete('/classes/:id', async (req: Request, res: Response) => {
  try {
    const classId = req.params.id
    const classRecord = await prisma.class.findUnique({
      where: { id: classId },
      include: {
        students: true,
        teacherClasses: { include: { teacher: true } },
      },
    })
    if (!classRecord) {
      return res.status(404).json({ error: 'Class not found' })
    }
    await prisma.$transaction(async (tx: any) => {
      let defaultClass = await tx.class.findFirst({
        where: {
          schoolId: classRecord.schoolId,
          gradeLevel: classRecord.gradeLevel,
          className: `${classRecord.gradeLevel} - Unassigned`,
        },
      })
      if (!defaultClass) {
        defaultClass = await tx.class.create({
          data: {
            schoolId: classRecord.schoolId,
            gradeLevel: classRecord.gradeLevel,
            className: `${classRecord.gradeLevel} - Unassigned`,
            academicYear: new Date().getFullYear().toString(),
          },
        })
      }
      await tx.student.updateMany({
        where: { classId },
        data: { classId: defaultClass.id },
      })
      await tx.teacherClass.deleteMany({ where: { classId } })
      await tx.curriculumMonthly.deleteMany({ where: { classId } })
      await tx.class.delete({ where: { id: classId } })
    })
    res.json({
      success: true,
      message: `Class "${classRecord.className}" has been permanently deleted`,
      deletedClass: {
        id: classRecord.id,
        name: classRecord.className,
        grade: classRecord.gradeLevel,
        studentCount: classRecord.students.length,
        teacherCount: classRecord.teacherClasses.length,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/classes/:id')
  }
})

export default router
