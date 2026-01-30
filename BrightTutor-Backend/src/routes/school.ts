import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sanitizeEmail, sanitizePassword } from '@/lib/sanitize'
import { AuthSchemas } from '@/lib/security/schemas'
import { validateDatabaseInput } from '@/lib/security/validation'
import { containsSQLInjection } from '@/lib/security/injection-prevention'
import { generateToken } from '@/lib/auth'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { requireRole } from '@/lib/auth-middleware'
import { parsePaginationFromExpress, createPaginationResponse } from '@/lib/pagination'

const router = Router()

function generateSecurePassword(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('')
}

async function generateUniqueUsername(firstName: string, lastName: string, schoolId: string): Promise<string> {
  const cleanFirst = firstName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
  const cleanLast = lastName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
  const base = `${cleanFirst}.${cleanLast}`
  let username = base
  let counter = 1
  while (true) {
    const existing = await prisma.student.findFirst({ where: { username, schoolId } })
    if (!existing) return username
    username = `${base}${counter}`
    counter++
  }
}

async function generateUniqueParentUsername(firstName: string, lastName: string): Promise<string> {
  const cleanFirst = firstName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '').slice(0, 4)
  const cleanLast = lastName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '').slice(0, 4)
  const base = `p_${cleanFirst}_${cleanLast}`
  let username = base
  let counter = 1
  while (true) {
    const existing = await prisma.parent.findFirst({ where: { username } })
    if (!existing) return username
    username = `${base}${counter}`
    counter++
  }
}
const authRateLimiter = createRateLimiter(rateLimitConfigs.auth)

function requireSchoolAdmin(req: Request, res: Response): { schoolId: string } | null {
  const auth = requireRole(req, res, ['SCHOOL_ADMIN'])
  if (!auth?.schoolId) return null
  return { schoolId: auth.schoolId }
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
    const parsed = AuthSchemas.schoolLogin.safeParse(rawData)
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors
      const msg = Object.values(first)[0]?.[0] ?? parsed.error.message
      return res.status(400).json({ error: String(msg) })
    }
    let email = sanitizeEmail(parsed.data.email)
    const password = sanitizePassword(parsed.data.password)
    if (containsSQLInjection(email)) {
      return res.status(400).json({ error: 'Invalid input detected' })
    }
    try {
      email = validateDatabaseInput(email, 'email')
    } catch (err: any) {
      return res.status(400).json({ error: err?.message || 'Invalid email format' })
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

router.get('/students/search', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const q = (req.query.q as string) || ''
    if (!q.trim()) return res.json({ success: true, students: [] })
    const searchTerm = (q || '').toLowerCase().trim()
    const allStudents = await prisma.student.findMany({
      where: { schoolId: auth.schoolId },
      include: { class: { select: { className: true } } },
      orderBy: { createdAt: 'desc' },
    })
    const results = allStudents
      .map((student: any) => {
        const studentName = (student.studentName || '').toLowerCase()
        const firstName = studentName.split(' ')[0] || ''
        const lastName = studentName.split(' ').slice(1).join(' ') || ''
        const email = (student.parentEmail || '').toLowerCase()
        const username = (student.username || '').toLowerCase()
        let priority = 0
        if (firstName.startsWith(searchTerm)) priority = 1
        else if (lastName.startsWith(searchTerm)) priority = 2
        else if (studentName.includes(searchTerm)) priority = 3
        else if (email.startsWith(searchTerm)) priority = 4
        else if (username.startsWith(searchTerm)) priority = 5
        else if (email.includes(searchTerm)) priority = 6
        else if (username.includes(searchTerm)) priority = 7
        if (priority === 0) return null
        return {
          id: student.id,
          name: student.studentName,
          email: student.parentEmail || '',
          username: student.username,
          grade: student.grade,
          class: student.class?.className || 'No Class',
          status: student.isActive ? 'ACTIVE' : 'INACTIVE',
          priority,
        }
      })
      .filter(Boolean)
      .sort((a: any, b: any) => a.priority - b.priority)
      .slice(0, 20)
    res.json({ success: true, students: results, total: results.length })
  } catch (error) {
    sendSanitizedError(res, error, 'school/students/search')
  }
})

router.get('/students', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const { page, limit, skip } = parsePaginationFromExpress(req.query as Record<string, unknown>)
    const [students, total] = await Promise.all([
      prisma.student.findMany({
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
        take: limit,
        skip,
      }),
      prisma.student.count({ where: { schoolId: auth.schoolId } }),
    ])
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
    const result = createPaginationResponse(formattedStudents, total, page, limit)
    res.json({ success: true, students: result.data, pagination: result.pagination })
  } catch (error) {
    sendSanitizedError(res, error, 'school/students')
  }
})

// POST /school/students — create student (and optionally parent)
router.post('/students', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const body = req.body || {}
    const {
      firstName,
      lastName,
      dateOfBirth,
      grade,
      classId,
      parentOption,
      parentId,
      parentName,
      parentEmail,
      parentPhone,
    } = body

    if (!firstName || !lastName || !grade) {
      return res.status(400).json({ error: 'Missing required fields: firstName, lastName, grade' })
    }

    const studentFullName = `${firstName} ${lastName}`.trim()
    const existingStudent = await prisma.student.findFirst({
      where: { studentName: studentFullName, schoolId: auth.schoolId },
    })
    if (existingStudent) {
      return res.status(400).json({ error: 'Student with this name already exists' })
    }

    const username = await generateUniqueUsername(firstName, lastName, auth.schoolId)
    const password = generateSecurePassword()
    const hashedPassword = await bcrypt.hash(password, 10)

    const studentIdBase = `${firstName.toLowerCase()}${lastName.toLowerCase()}`.replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
    let uniqueStudentId = studentIdBase
    let counter = 1
    while (true) {
      const existingId = await prisma.student.findFirst({
        where: { studentId: uniqueStudentId, schoolId: auth.schoolId },
      })
      if (!existingId) break
      uniqueStudentId = `${studentIdBase}${counter}`
      counter++
    }

    let finalParentId: string | null = null
    let finalParentName = ''
    let finalParentEmail = ''
    let finalParentPhone = ''
    let parentForResponse: { id: string; name: string; username: string; email: string; phone: string | null } | null = null
    let parentPlaintextPassword: string | null = null

    if (parentOption === 'new' && parentName && parentEmail) {
      const normalizedEmail = (parentEmail as string).toLowerCase().trim()
      const existingParent = await prisma.parent.findFirst({
        where: { email: { equals: normalizedEmail, mode: 'insensitive' }, schoolId: auth.schoolId },
      })
      if (existingParent) {
        return res.status(400).json({ error: 'Parent with this email already exists' })
      }
      const parentFirst = (parentName as string).split(' ')[0] || 'parent'
      const parentLast = (parentName as string).split(' ').slice(1).join(' ') || 'user'
      const parentUsername = await generateUniqueParentUsername(parentFirst, parentLast)
      parentPlaintextPassword = generateSecurePassword()
      const parentHashed = await bcrypt.hash(parentPlaintextPassword, 10)
      const newParent = await prisma.parent.create({
        data: {
          name: parentName,
          email: normalizedEmail,
          phone: (parentPhone as string) || null,
          username: parentUsername,
          password: parentHashed,
          schoolId: auth.schoolId,
        },
      })
      finalParentId = newParent.id
      parentForResponse = { id: newParent.id, name: newParent.name, username: newParent.username, email: newParent.email, phone: newParent.phone }
      finalParentName = newParent.name
      finalParentEmail = newParent.email
      finalParentPhone = newParent.phone || ''
    } else if (parentOption === 'existing' && parentId) {
      const parent = await prisma.parent.findFirst({ where: { id: parentId, schoolId: auth.schoolId } })
      if (!parent) return res.status(404).json({ error: 'Selected parent not found' })
      finalParentId = parent.id
      parentForResponse = { id: parent.id, name: parent.name, username: parent.username, email: parent.email, phone: parent.phone }
      finalParentName = parent.name
      finalParentEmail = parent.email
      finalParentPhone = parent.phone || ''
    }

    let finalClassId: string | null = null
    if (classId && typeof classId === 'string' && classId.trim().length > 0) {
      const classExists = await prisma.class.findFirst({
        where: { id: classId.trim(), schoolId: auth.schoolId },
      })
      if (classExists) finalClassId = classId.trim()
    }

    let calculatedAge: number | undefined
    if (dateOfBirth) {
      const today = new Date()
      const birth = new Date(dateOfBirth)
      calculatedAge = today.getFullYear() - birth.getFullYear()
      const monthDiff = today.getMonth() - birth.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) calculatedAge--
    }

    const student = await prisma.student.create({
      data: {
        studentName: studentFullName,
        studentId: uniqueStudentId,
        username,
        password: hashedPassword,
        age: calculatedAge,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        grade,
        schoolId: auth.schoolId,
        classId: finalClassId,
        parentName: finalParentName,
        parentEmail: finalParentEmail,
        parentPhone: finalParentPhone,
        isActive: true,
      },
      include: { class: true },
    })

    if (finalParentId) {
      const existingRel = await prisma.studentParent.findFirst({
        where: { studentId: student.id, parentId: finalParentId },
      })
      if (!existingRel) {
        await prisma.studentParent.create({
          data: { studentId: student.id, parentId: finalParentId },
        })
      }
    }

    res.json({
      success: true,
      newParentCreated: parentPlaintextPassword !== null,
      student: {
        id: student.id,
        firstName: student.studentName.split(' ')[0] || '',
        lastName: student.studentName.split(' ').slice(1).join(' ') || '',
        email: finalParentEmail,
        username: student.username,
        password,
        dateOfBirth: student.dateOfBirth ? student.dateOfBirth.toISOString().split('T')[0] : '',
        grade: student.grade,
        class: (student as { class?: { className: string } }).class?.className || '',
        classId: student.classId,
        parentId: finalParentId,
        parentName: finalParentName,
        parentEmail: finalParentEmail,
        parentPhone: finalParentPhone,
        parentUsername: parentForResponse?.username || '',
        parentPassword: parentPlaintextPassword ?? '••••••••',
        status: student.isActive ? 'ACTIVE' : 'INACTIVE',
        enrollmentDate: student.createdAt.toISOString(),
      },
      parentCredentials: parentPlaintextPassword
        ? {
            name: parentForResponse?.name || '',
            email: parentForResponse?.email || '',
            username: parentForResponse?.username || '',
            password: parentPlaintextPassword,
            phone: parentForResponse?.phone || '',
            loginNote: 'Parent should login with EMAIL and PASSWORD (not username)',
          }
        : null,
    })
  } catch (error: any) {
    if (error?.message?.includes('Unique constraint failed')) {
      return res.status(409).json({
        error: 'A student with similar details already exists.',
        details: 'Please check the name and try again.',
      })
    }
    sendSanitizedError(res, error, 'school/students')
  }
})

export default router
