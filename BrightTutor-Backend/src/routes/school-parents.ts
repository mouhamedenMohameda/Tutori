/**
 * School parents: GET, POST, PUT, DELETE, GET /search, POST /assign-students
 * Ported from BrightTutor-AI-Platform src/app/api/school/parents/
 */
import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const JWT_SECRET = () => getJWTSecret()

function requireSchoolAdmin(req: Request, res: Response): string | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { schoolId?: string; role?: string }
    if (decoded.role !== 'SCHOOL_ADMIN') {
      res.status(403).json({ error: 'Forbidden' })
      return null
    }
    return decoded.schoolId ?? null
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

function generateSecurePassword(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let password = ''
  for (let i = 0; i < 6; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

async function generateUniqueUsername(firstName: string, lastName: string, schoolId: string): Promise<string> {
  const base = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`
  let username = base
  let counter = 1
  for (;;) {
    const existing = await prisma.parent.findFirst({ where: { username, schoolId } })
    if (!existing) break
    username = `${base}${counter}`
    counter++
  }
  return username
}

// GET /parents/search - must be before GET /
router.get('/search', async (req: Request, res: Response) => {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const q = (req.query.q as string) || ''
    if (!q.trim()) return res.json({ success: true, parents: [] })
    const searchTerm = q.toLowerCase().trim()
    const allParents = await prisma.parent.findMany({
      where: { schoolId },
      include: {
        studentParents: {
          include: {
            student: { select: { studentName: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
    const results = allParents
      .map((parent: any) => {
        const parentName = parent.name.toLowerCase()
        const firstName = parentName.split(' ')[0] || ''
        const lastName = parentName.split(' ').slice(1).join(' ') || ''
        const email = (parent.email || '').toLowerCase()
        let priority = 0
        if (firstName.startsWith(searchTerm)) priority = 1
        else if (lastName.startsWith(searchTerm)) priority = 2
        else if (parentName.includes(searchTerm)) priority = 3
        else if (email.startsWith(searchTerm)) priority = 4
        else if (email.includes(searchTerm)) priority = 5
        if (priority === 0) return null
        const children = (parent.studentParents || []).map((sp: any) => sp.student?.studentName)
        return {
          id: parent.id,
          name: parent.name,
          email: parent.email || '',
          phone: parent.phone || '',
          children,
          childrenCount: children.length,
          priority,
        }
      })
      .filter(Boolean)
      .sort((a: any, b: any) => a.priority - b.priority)
      .slice(0, 20)
    res.json({ success: true, parents: results, total: results.length })
  } catch (error) {
    sendSanitizedError(res, error, 'school/parents/search')
  }
})

router.post('/assign-students', async (req: Request, res: Response) => {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const { parentId, studentIds } = req.body || {}
    if (!parentId || !Array.isArray(studentIds)) {
      return res.status(400).json({ error: 'Missing required fields: parentId and studentIds (array)' })
    }
    const parent = await prisma.parent.findFirst({
      where: { id: parentId, schoolId },
    })
    if (!parent) return res.status(404).json({ error: 'Parent not found' })
    const students = await prisma.student.findMany({
      where: { id: { in: studentIds }, schoolId },
    })
    if (students.length !== studentIds.length) {
      return res.status(404).json({ error: 'Some students not found' })
    }
    await prisma.studentParent.deleteMany({ where: { parentId } })
    await prisma.studentParent.createMany({
      data: studentIds.map((studentId: string) => ({ parentId, studentId })),
      skipDuplicates: true,
    })
    await prisma.student.updateMany({
      where: { id: { in: studentIds } },
      data: { parentName: parent.name, parentEmail: parent.email, parentPhone: parent.phone },
    })
    res.json({
      success: true,
      message: `Successfully assigned ${studentIds.length} students to ${parent.name}`,
      assignments: { parentId: parent.id, parentName: parent.name, studentIds, studentNames: students.map((s) => s.studentName) },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'school/parents/assign-students')
  }
})

router.get('/', async (req: Request, res: Response) => {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const parents = await prisma.parent.findMany({
      where: { schoolId },
      include: {
        studentParents: {
          include: {
            student: {
              select: {
                id: true,
                studentName: true,
                parentEmail: true,
                grade: true,
                class: { select: { className: true } },
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
    const formatted = parents.map((parent: any) => {
      const students = (parent.studentParents || []).map((sp: any) => sp.student).filter(Boolean)
      const first = students[0]
      return {
        id: parent.id,
        name: parent.name,
        email: parent.email || first?.parentEmail || '',
        phone: parent.phone || first?.parentPhone || '',
        username: parent.username,
        password: '••••••••',
        status: 'ACTIVE',
        children: students.map((s: any) => s.id),
        childrenCount: students.length,
        createdAt: parent.createdAt.toISOString(),
      }
    })
    res.json({ success: true, parents: formatted })
  } catch (error) {
    sendSanitizedError(res, error, 'school/parents')
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const { name, email, phone, childrenIds } = req.body || {}
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields: name, email, phone' })
    }
    const existing = await prisma.parent.findFirst({
      where: { name, schoolId },
    })
    if (existing) return res.status(400).json({ error: 'Parent with this name already exists' })
    const nameParts = name.split(' ')
    const firstName = nameParts[0] || 'parent'
    const lastName = nameParts[1] || 'user'
    const username = await generateUniqueUsername(firstName, lastName, schoolId)
    const password = generateSecurePassword()
    const hashedPassword = await bcrypt.hash(password, 10)
    const normalizedEmail = (email || '').toLowerCase().trim()
    const parent = await prisma.parent.create({
      data: {
        name,
        email: normalizedEmail,
        phone: phone || null,
        username,
        password: hashedPassword,
        schoolId,
      },
    })
    let assignedStudents: string[] = []
    if (childrenIds && Array.isArray(childrenIds) && childrenIds.length > 0) {
      const students = await prisma.student.findMany({
        where: { id: { in: childrenIds }, schoolId },
      })
      if (students.length === childrenIds.length) {
        await prisma.studentParent.createMany({
          data: childrenIds.map((studentId: string) => ({ parentId: parent.id, studentId })),
          skipDuplicates: true,
        })
        await prisma.student.updateMany({
          where: { id: { in: childrenIds } },
          data: { parentName: parent.name, parentEmail: parent.email, parentPhone: parent.phone },
        })
        assignedStudents = students.map((s) => s.studentName)
      }
    }
    res.json({
      success: true,
      parent: {
        id: parent.id,
        name: parent.name,
        email: parent.email,
        phone: parent.phone,
        username: parent.username,
        password,
        status: 'ACTIVE',
        children: assignedStudents,
        childrenCount: assignedStudents.length,
        createdAt: parent.createdAt.toISOString(),
      },
    })
  } catch (error) {
    if ((error as any)?.code === 'P2002') {
      return res.status(409).json({ error: 'A parent with this email or username already exists.' })
    }
    sendSanitizedError(res, error, 'school/parents')
  }
})

router.put('/', async (req: Request, res: Response) => {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const { parentId, studentIds, ...dataToUpdate } = req.body || {}
    if (!parentId) return res.status(400).json({ error: 'Parent ID is required' })
    const updateData: Record<string, unknown> = {}
    if (dataToUpdate.name != null) updateData.name = dataToUpdate.name
    if (dataToUpdate.email != null) updateData.email = dataToUpdate.email
    if (dataToUpdate.phone !== undefined) updateData.phone = dataToUpdate.phone
    const updatedParent = await prisma.parent.update({
      where: { id: parentId, schoolId },
      data: updateData as any,
    })
    if (studentIds !== undefined && Array.isArray(studentIds)) {
      const cleanIds = studentIds
        .map((item: any) => (typeof item === 'object' && item?.id ? item.id : typeof item === 'string' ? item : null))
        .filter(Boolean)
      await prisma.studentParent.deleteMany({ where: { parentId } })
      await prisma.student.updateMany({
        where: { studentParents: { some: { parentId } } },
        data: { parentName: null, parentEmail: null, parentPhone: null },
      })
      if (cleanIds.length > 0) {
        const students = await prisma.student.findMany({
          where: { id: { in: cleanIds }, schoolId },
        })
        if (students.length === cleanIds.length) {
          await prisma.studentParent.createMany({
            data: cleanIds.map((studentId: string) => ({ parentId, studentId })),
            skipDuplicates: true,
          })
          await prisma.student.updateMany({
            where: { id: { in: cleanIds } },
            data: { parentName: updatedParent.name, parentEmail: updatedParent.email, parentPhone: updatedParent.phone },
          })
        }
      }
    }
    res.json({ success: true, message: 'Parent updated successfully', parent: updatedParent })
  } catch (error) {
    if ((error as any)?.code === 'P2025') return res.status(404).json({ error: 'Parent not found' })
    sendSanitizedError(res, error, 'school/parents')
  }
})

router.delete('/', async (req: Request, res: Response) => {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const parentId = (req.query.parentId as string) || (req.body?.parentId as string)
    if (!parentId) return res.status(400).json({ error: 'Parent ID is required' })
    const linked = await prisma.student.findMany({
      where: { studentParents: { some: { parentId } } },
    })
    if (linked.length > 0) {
      await prisma.student.updateMany({
        where: { id: { in: linked.map((s) => s.id) } },
        data: { parentName: null, parentEmail: null, parentPhone: null },
      })
    }
    await prisma.studentParent.deleteMany({ where: { parentId } })
    await prisma.parent.delete({
      where: { id: parentId, schoolId },
    })
    res.json({ success: true, message: 'Parent deleted successfully' })
  } catch (error) {
    if ((error as any)?.code === 'P2025') return res.status(404).json({ error: 'Parent not found' })
    sendSanitizedError(res, error, 'school/parents')
  }
})

export default router
