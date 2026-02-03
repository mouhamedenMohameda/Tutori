import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { generateToken } from '@/lib/auth'
import { parsePaginationFromExpress, createPaginationResponse } from '@/lib/pagination'

function generateSecurePassword(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from({ length: 6 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('')
}

export async function generateUniqueUsername(
  firstName: string,
  lastName: string,
  schoolId: string
): Promise<string> {
  const cleanFirst = firstName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
  const cleanLast = lastName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
  const base = `${cleanFirst}.${cleanLast}`
  let username = base
  let counter = 1
  for (;;) {
    const existing = await prisma.student.findFirst({ where: { username, schoolId } })
    if (!existing) return username
    username = `${base}${counter}`
    counter++
  }
}

export async function generateUniqueParentUsername(
  firstName: string,
  lastName: string
): Promise<string> {
  const cleanFirst = firstName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '').slice(0, 4)
  const cleanLast = lastName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '').slice(0, 4)
  const base = `p_${cleanFirst}_${cleanLast}`
  let username = base
  let counter = 1
  for (;;) {
    const existing = await prisma.parent.findFirst({ where: { username } })
    if (!existing) return username
    username = `${base}${counter}`
    counter++
  }
}

export type SchoolLoginInput = { email: string; password: string }
export type SchoolLoginSuccess = {
  success: true
  message: string
  token: string
  school: Record<string, unknown>
}
export type SchoolLoginError = { success: false; status: 404 | 401 | 500; error: string }

export async function schoolLogin(
  input: SchoolLoginInput
): Promise<SchoolLoginSuccess | SchoolLoginError> {
  const school = await prisma.school.findFirst({
    where: {
      adminEmail: { equals: input.email, mode: 'insensitive' },
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
    return {
      success: false,
      status: 404,
      error: 'School not found or not approved. Please contact platform administrator.',
    }
  }
  const isPasswordValid = await bcrypt.compare(input.password, school.adminPassword)
  if (!isPasswordValid) {
    return { success: false, status: 401, error: 'Invalid password. Please try again.' }
  }
  const token = generateToken({
    schoolId: school.id,
    email: school.adminEmail,
    role: 'SCHOOL_ADMIN',
  })
  return {
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
  }
}

export async function getTeachers(schoolId: string, query: Record<string, unknown>) {
  const { page, limit, skip } = parsePaginationFromExpress(query)
  const q = typeof query.q === 'string' ? query.q.trim() : ''
  const where = q
    ? { schoolId, OR: [{ name: { contains: q, mode: 'insensitive' as const } }, { email: { contains: q, mode: 'insensitive' as const } }] }
    : { schoolId }
  const [teachers, total] = await Promise.all([
    prisma.teacher.findMany({
      where,
      include: {
        teacherClasses: {
          include: { class: { select: { id: true, className: true, gradeLevel: true } } },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip,
    }),
    prisma.teacher.count({ where }),
  ])
  const formattedTeachers = teachers.map((t) => ({
    id: t.id,
    name: t.name,
    email: t.email,
    username: t.email,
    password: '••••••••',
    subjects: JSON.parse(t.subjects || '[]'),
    classes: t.teacherClasses.map((tc) => tc.class.className),
    classIds: t.teacherClasses.map((tc) => tc.class.id),
    status: 'ACTIVE',
    createdAt: t.createdAt.toISOString(),
  }))
  const result = createPaginationResponse(formattedTeachers, total, page, limit)
  return { teachers: result.data, pagination: result.pagination }
}

export async function createTeacher(
  schoolId: string,
  data: { name: string; email: string; subjects: string[]; classIds?: string[] }
) {
  const existingTeacher = await prisma.teacher.findFirst({
    where: { schoolId, email: data.email },
  })
  if (existingTeacher) {
    return { error: 'Teacher with this email already exists', status: 400 as const }
  }
  const password = Math.random().toString(36).slice(-8)
  const hashedPassword = await bcrypt.hash(password, 10)
  const teacher = await prisma.teacher.create({
    data: {
      schoolId,
      name: data.name,
      email: data.email,
      password: hashedPassword,
      subjects: JSON.stringify(data.subjects),
    },
  })
  const classIds = data.classIds ?? []
  if (classIds.length > 0) {
    const validClassIds: string[] = []
    for (const classId of classIds) {
      if (classId && typeof classId === 'string' && classId.trim()) {
        const classExists = await prisma.class.findFirst({
          where: { id: classId.trim(), schoolId },
        })
        if (classExists) validClassIds.push(classId.trim())
      }
    }
    if (validClassIds.length > 0) {
      await prisma.teacherClass.createMany({
        data: validClassIds.map((classId) => ({ teacherId: teacher.id, classId })),
      })
    }
  }
  return {
    teacher: {
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      subjects: data.subjects,
      password,
    },
  }
}

export async function searchStudents(schoolId: string, q: string) {
  if (!q.trim()) return { students: [] }
  const searchTerm = q.toLowerCase().trim()
  const allStudents = await prisma.student.findMany({
    where: { schoolId },
    include: { class: { select: { className: true } } },
    orderBy: { createdAt: 'desc' },
  })
  const results = allStudents
    .map((student) => {
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
    .filter(Boolean) as Array<{ priority: number } & Record<string, unknown>>
  results.sort((a, b) => a.priority - b.priority)
  return { students: results.slice(0, 20), total: results.length }
}

export async function getStudents(schoolId: string, query: Record<string, unknown>) {
  const { page, limit, skip } = parsePaginationFromExpress(query)
  const [students, total] = await Promise.all([
    prisma.student.findMany({
      where: { schoolId },
      include: {
        class: { select: { id: true, className: true } },
        studentParents: {
          include: {
            parent: {
              select: { id: true, name: true, username: true, email: true, phone: true },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip,
    }),
    prisma.student.count({ where: { schoolId } }),
  ])
  const formattedStudents = students.map((s) => ({
    id: s.id,
    studentName: s.studentName,
    studentId: s.studentId,
    username: s.username,
    grade: s.grade,
    className: s.class?.className,
    classId: s.classId,
    parents: s.studentParents?.map((sp) => sp.parent) || [],
    createdAt: s.createdAt.toISOString(),
  }))
  const result = createPaginationResponse(formattedStudents, total, page, limit)
  return { students: result.data, pagination: result.pagination }
}

export type CreateStudentInput = {
  firstName: string
  lastName: string
  dateOfBirth?: string
  grade: string
  classId?: string
  parentOption?: string
  parentId?: string
  parentName?: string
  parentEmail?: string
  parentPhone?: string
}

export async function createStudent(schoolId: string, body: CreateStudentInput) {
  const studentFullName = `${body.firstName} ${body.lastName}`.trim()
  const existingStudent = await prisma.student.findFirst({
    where: { studentName: studentFullName, schoolId },
  })
  if (existingStudent) {
    return { error: 'Student with this name already exists', status: 400 as const }
  }
  const username = await generateUniqueUsername(body.firstName, body.lastName, schoolId)
  const password = generateSecurePassword()
  const hashedPassword = await bcrypt.hash(password, 10)
  const studentIdBase = `${body.firstName.toLowerCase()}${body.lastName.toLowerCase()}`
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '')
  let uniqueStudentId = studentIdBase
  let counter = 1
  for (;;) {
    const existingId = await prisma.student.findFirst({
      where: { studentId: uniqueStudentId, schoolId },
    })
    if (!existingId) break
    uniqueStudentId = `${studentIdBase}${counter}`
    counter++
  }
  let finalParentId: string | null = null
  let finalParentName = ''
  let finalParentEmail = ''
  let finalParentPhone = ''
  let parentForResponse: {
    id: string
    name: string
    username: string
    email: string
    phone: string | null
  } | null = null
  let parentPlaintextPassword: string | null = null

  if (body.parentOption === 'new' && body.parentName && body.parentEmail) {
    const normalizedEmail = (body.parentEmail as string).toLowerCase().trim()
    const existingParent = await prisma.parent.findFirst({
      where: { email: { equals: normalizedEmail, mode: 'insensitive' }, schoolId },
    })
    if (existingParent) {
      return { error: 'Parent with this email already exists', status: 400 as const }
    }
    const parentFirst = (body.parentName as string).split(' ')[0] || 'parent'
    const parentLast = (body.parentName as string).split(' ').slice(1).join(' ') || 'user'
    const parentUsername = await generateUniqueParentUsername(parentFirst, parentLast)
    parentPlaintextPassword = generateSecurePassword()
    const parentHashed = await bcrypt.hash(parentPlaintextPassword, 10)
    const newParent = await prisma.parent.create({
      data: {
        name: body.parentName,
        email: normalizedEmail,
        phone: (body.parentPhone as string) || null,
        username: parentUsername,
        password: parentHashed,
        schoolId,
      },
    })
    finalParentId = newParent.id
    parentForResponse = {
      id: newParent.id,
      name: newParent.name,
      username: newParent.username,
      email: newParent.email,
      phone: newParent.phone,
    }
    finalParentName = newParent.name
    finalParentEmail = newParent.email
    finalParentPhone = newParent.phone || ''
  } else if (body.parentOption === 'existing' && body.parentId) {
    const parent = await prisma.parent.findFirst({
      where: { id: body.parentId, schoolId },
    })
    if (!parent) return { error: 'Selected parent not found', status: 404 as const }
    finalParentId = parent.id
    parentForResponse = {
      id: parent.id,
      name: parent.name,
      username: parent.username,
      email: parent.email,
      phone: parent.phone,
    }
    finalParentName = parent.name
    finalParentEmail = parent.email
    finalParentPhone = parent.phone || ''
  }

  let finalClassId: string | null = null
  if (body.classId && typeof body.classId === 'string' && body.classId.trim().length > 0) {
    const classExists = await prisma.class.findFirst({
      where: { id: body.classId.trim(), schoolId },
    })
    if (classExists) finalClassId = body.classId.trim()
  }

  let calculatedAge: number | undefined
  if (body.dateOfBirth) {
    const today = new Date()
    const birth = new Date(body.dateOfBirth)
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
      dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : null,
      grade: body.grade,
      schoolId,
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

  const studentWithClass = student as typeof student & { class?: { className: string } }
  return {
    success: true,
    newParentCreated: parentPlaintextPassword !== null,
    student: {
      id: student.id,
      firstName: student.studentName.split(' ')[0] || '',
      lastName: student.studentName.split(' ').slice(1).join(' ') || '',
      email: finalParentEmail,
      username: student.username,
      password,
      dateOfBirth: student.dateOfBirth
        ? student.dateOfBirth.toISOString().split('T')[0]
        : '',
      grade: student.grade,
      class: studentWithClass.class?.className || '',
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
  }
}
