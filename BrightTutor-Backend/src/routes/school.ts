import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sanitizeEmail, sanitizePassword } from '@/lib/sanitize'
import { getJWTSecret } from '@/lib/security/secrets'
import { validateEmail, validateDatabaseInput } from '@/lib/security/validation'
import { containsSQLInjection } from '@/lib/security/injection-prevention'
import { generateToken } from '@/lib/auth'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const authRateLimiter = createRateLimiter(rateLimitConfigs.auth)
const JWT_SECRET = () => getJWTSecret()

function requireSchoolAdmin(req: Request, res: Response): { schoolId: string } | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as any
    if (decoded.role !== 'SCHOOL_ADMIN') {
      res.status(403).json({ error: 'Access denied' })
      return null
    }
    return { schoolId: decoded.schoolId }
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

router.post('/login', async (req: Request, res: Response) => {
  try {
    const rateLimitResult = await authRateLimiter(req)
    if (!rateLimitResult.allowed) {
      const headers = getRateLimitHeaders(rateLimitResult)
      Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v))
      return res.status(429).json({
        error: 'Too many login attempts. Please try again later.',
        resetTime: rateLimitResult.resetTime,
        retryAfter: rateLimitResult.retryAfter,
      })
    }

    const rawData = req.body || {}
    let email = sanitizeEmail(rawData.email)
    const password = sanitizePassword(rawData.password)

    const emailValidation = validateEmail(email)
    if (!emailValidation.valid) {
      return res.status(400).json({ error: emailValidation.error || 'Invalid email format' })
    }
    if (containsSQLInjection(email)) {
      return res.status(400).json({ error: 'Invalid input detected' })
    }
    try {
      email = validateDatabaseInput(email, 'email')
    } catch (err: any) {
      return res.status(400).json({ error: err?.message || 'Invalid email format' })
    }

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const school = await prisma.school.findFirst({
      where: {
        adminEmail: { equals: email, mode: 'insensitive' },
        applicationStatus: 'ACTIVE',
      },
      select: {
        id: true,
        schoolName: true,
        adminEmail: true,
        contactEmail: true,
        adminPassword: true,
        subscriptionPlan: true,
        maxStudents: true,
        maxTeachers: true,
        applicationStatus: true,
      },
    })

    if (!school) {
      return res.status(404).json({
        error: 'School not found or not approved. Please contact platform administrator.',
      })
    }

    const isPasswordValid = await bcrypt.compare(password, school.adminPassword)
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password. Please try again.' })
    }

    const token = generateToken({
      schoolId: school.id,
      email: school.adminEmail,
      role: 'SCHOOL_ADMIN',
    })

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      school: {
        id: school.id,
        schoolName: school.schoolName,
        adminEmail: school.adminEmail,
        contactEmail: school.contactEmail,
        subscriptionPlan: school.subscriptionPlan,
        maxStudents: school.maxStudents,
        maxTeachers: school.maxTeachers,
        status: school.applicationStatus,
      },
    })
  } catch (error: any) {
    console.error('School login error:', error)
    return res.status(500).json({ error: 'Login failed. Please try again.' })
  }
})

router.get('/teachers', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const teachers = await prisma.teacher.findMany({
      where: { schoolId: auth.schoolId },
      include: {
        teacherClasses: {
          include: {
            class: { select: { id: true, className: true, gradeLevel: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
    const formattedTeachers = teachers.map((teacher) => ({
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      username: teacher.email,
      password: '••••••••',
      subjects: JSON.parse(teacher.subjects || '[]'),
      classes: teacher.teacherClasses.map((tc) => tc.class.className),
      classIds: teacher.teacherClasses.map((tc) => tc.class.id),
      status: 'ACTIVE',
      createdAt: teacher.createdAt.toISOString(),
    }))
    res.json({ success: true, teachers: formattedTeachers })
  } catch (error) {
    sendSanitizedError(res, error, 'school/teachers')
  }
})

router.post('/teachers', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const body = req.body || {}
    const { name, email, subjects = [], classIds = [] } = body
    if (!name || !email || subjects.length === 0) {
      return res.status(400).json({
        error: 'Name, email, and at least one subject are required',
      })
    }
    const existingTeacher = await prisma.teacher.findFirst({
      where: { schoolId: auth.schoolId, email },
    })
    if (existingTeacher) {
      return res.status(400).json({ error: 'Teacher with this email already exists' })
    }
    const password = Math.random().toString(36).slice(-8)
    const hashedPassword = await bcrypt.hash(password, 10)
    const teacher = await prisma.teacher.create({
      data: {
        schoolId: auth.schoolId,
        name,
        email,
        password: hashedPassword,
        subjects: JSON.stringify(subjects),
      },
    })
    if (classIds.length > 0) {
      const validClassIds: string[] = []
      for (const classId of classIds) {
        if (classId && typeof classId === 'string' && classId.trim()) {
          const classExists = await prisma.class.findFirst({
            where: { id: classId.trim(), schoolId: auth.schoolId },
          })
          if (classExists) validClassIds.push(classId.trim())
        }
      }
      if (validClassIds.length > 0) {
        await prisma.teacherClass.createMany({
          data: validClassIds.map((classId) => ({
            teacherId: teacher.id,
            classId,
          })),
        })
      }
    }
    res.json({
      success: true,
      message: 'Teacher created successfully',
      teacher: {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        subjects,
        password,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'school/teachers')
  }
})

router.get('/students', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const students = await prisma.student.findMany({
      where: { schoolId: auth.schoolId },
      include: {
        class: { select: { id: true, className: true } },
        studentParents: {
          include: {
            parent: {
              select: {
                id: true,
                name: true,
                username: true,
                email: true,
                phone: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
    const formattedStudents = students.map((s: any) => ({
      id: s.id,
      studentName: s.studentName,
      studentId: s.studentId,
      username: s.username,
      grade: s.grade,
      className: s.class?.className,
      classId: s.classId,
      parents: s.studentParents?.map((sp: any) => sp.parent) || [],
      createdAt: s.createdAt.toISOString(),
    }))
    res.json({ success: true, students: formattedStudents })
  } catch (error) {
    sendSanitizedError(res, error, 'school/students')
  }
})

export default router
