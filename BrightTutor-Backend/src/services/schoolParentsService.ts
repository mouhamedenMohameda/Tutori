import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

function generateSecurePassword(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let password = ''
  for (let i = 0; i < 6; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

export async function generateUniqueParentUsername(
  firstName: string,
  lastName: string,
  schoolId: string
): Promise<string> {
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

export async function searchParents(schoolId: string, q: string) {
  if (!q.trim()) return { parents: [] }
  const searchTerm = q.toLowerCase().trim()
  const allParents = await prisma.parent.findMany({
    where: { schoolId },
    include: {
      studentParents: {
        include: { student: { select: { studentName: true } } },
      },
    },
    orderBy: { createdAt: 'desc' },
  })
  const results = allParents
    .map((parent) => {
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
      const children = (parent.studentParents || []).map(
        (sp) => sp.student?.studentName
      )
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
    .filter(Boolean) as Array<{ priority: number } & Record<string, unknown>>
  results.sort((a, b) => a.priority - b.priority)
  return { parents: results.slice(0, 20), total: results.length }
}

export async function assignStudents(
  schoolId: string,
  parentId: string,
  studentIds: string[]
) {
  const parent = await prisma.parent.findFirst({
    where: { id: parentId, schoolId },
  })
  if (!parent) return { error: 'Parent not found', status: 404 as const }
  const students = await prisma.student.findMany({
    where: { id: { in: studentIds }, schoolId },
  })
  if (students.length !== studentIds.length) {
    return { error: 'Some students not found', status: 404 as const }
  }
  await prisma.studentParent.deleteMany({ where: { parentId } })
  await prisma.studentParent.createMany({
    data: studentIds.map((studentId) => ({ parentId, studentId })),
    skipDuplicates: true,
  })
  await prisma.student.updateMany({
    where: { id: { in: studentIds } },
    data: {
      parentName: parent.name,
      parentEmail: parent.email,
      parentPhone: parent.phone,
    },
  })
  return {
    message: `Successfully assigned ${studentIds.length} students to ${parent.name}`,
    assignments: {
      parentId: parent.id,
      parentName: parent.name,
      studentIds,
      studentNames: students.map((s) => s.studentName),
    },
  }
}

export async function getParents(schoolId: string) {
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
  const formatted = parents.map((parent) => {
    const students = (parent.studentParents || [])
      .map((sp) => sp.student)
      .filter(Boolean)
    const first = students[0] as { parentEmail?: string; parentPhone?: string } | undefined
    return {
      id: parent.id,
      name: parent.name,
      email: parent.email || first?.parentEmail || '',
      phone: parent.phone || first?.parentPhone || '',
      username: parent.username,
      password: '••••••••',
      status: 'ACTIVE',
      children: students.map((s: { id: string }) => s.id),
      childrenCount: students.length,
      createdAt: parent.createdAt.toISOString(),
    }
  })
  return { parents: formatted }
}

export async function createParent(
  schoolId: string,
  data: { name: string; email: string; phone: string; childrenIds?: string[] }
) {
  const existing = await prisma.parent.findFirst({
    where: { name: data.name, schoolId },
  })
  if (existing) {
    return { error: 'Parent with this name already exists', status: 400 as const }
  }
  const nameParts = data.name.split(' ')
  const firstName = nameParts[0] || 'parent'
  const lastName = nameParts[1] || 'user'
  const username = await generateUniqueParentUsername(
    firstName,
    lastName,
    schoolId
  )
  const password = generateSecurePassword()
  const hashedPassword = await bcrypt.hash(password, 10)
  const normalizedEmail = (data.email || '').toLowerCase().trim()
  const parent = await prisma.parent.create({
    data: {
      name: data.name,
      email: normalizedEmail,
      phone: data.phone || null,
      username,
      password: hashedPassword,
      schoolId,
    },
  })
  let assignedStudents: string[] = []
  if (
    data.childrenIds &&
    Array.isArray(data.childrenIds) &&
    data.childrenIds.length > 0
  ) {
    const students = await prisma.student.findMany({
      where: { id: { in: data.childrenIds }, schoolId },
    })
    if (students.length === data.childrenIds.length) {
      await prisma.studentParent.createMany({
        data: data.childrenIds.map((studentId) => ({
          parentId: parent.id,
          studentId,
        })),
        skipDuplicates: true,
      })
      await prisma.student.updateMany({
        where: { id: { in: data.childrenIds } },
        data: {
          parentName: parent.name,
          parentEmail: parent.email,
          parentPhone: parent.phone,
        },
      })
      assignedStudents = students.map((s) => s.studentName)
    }
  }
  return {
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
  }
}

export async function updateParent(
  schoolId: string,
  data: {
    parentId: string
    name?: string
    email?: string
    phone?: string
    studentIds?: string[]
  }
) {
  const updateData: Record<string, unknown> = {}
  if (data.name != null) updateData.name = data.name
  if (data.email != null) updateData.email = data.email
  if (data.phone !== undefined) updateData.phone = data.phone
  const updatedParent = await prisma.parent.update({
    where: { id: data.parentId, schoolId },
    data: updateData as Parameters<typeof prisma.parent.update>[0]['data'],
  })
  if (data.studentIds !== undefined && Array.isArray(data.studentIds)) {
    const cleanIds = data.studentIds
      .map((item: unknown) =>
        typeof item === 'object' && item !== null && 'id' in item
          ? (item as { id: string }).id
          : typeof item === 'string'
            ? item
            : null
      )
      .filter(Boolean) as string[]
    await prisma.studentParent.deleteMany({ where: { parentId: data.parentId } })
    await prisma.student.updateMany({
      where: { studentParents: { some: { parentId: data.parentId } } },
      data: { parentName: null, parentEmail: null, parentPhone: null },
    })
    if (cleanIds.length > 0) {
      const students = await prisma.student.findMany({
        where: { id: { in: cleanIds }, schoolId },
      })
      if (students.length === cleanIds.length) {
        await prisma.studentParent.createMany({
          data: cleanIds.map((studentId) => ({
            parentId: data.parentId,
            studentId,
          })),
          skipDuplicates: true,
        })
        await prisma.student.updateMany({
          where: { id: { in: cleanIds } },
          data: {
            parentName: updatedParent.name,
            parentEmail: updatedParent.email,
            parentPhone: updatedParent.phone,
          },
        })
      }
    }
  }
  return { parent: updatedParent }
}

export async function deleteParent(schoolId: string, parentId: string) {
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
  return { success: true }
}
