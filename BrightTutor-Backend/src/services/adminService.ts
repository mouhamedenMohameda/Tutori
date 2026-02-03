import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function getClasses(schoolId: string) {
  const classes = await prisma.class.findMany({
    where: { schoolId },
    include: {
      students: true,
      teacherClasses: { include: { teacher: true } },
    },
    orderBy: { createdAt: 'desc' },
  })
  return {
    classes: classes.map((c) => ({
      id: c.id,
      name: c.className,
      grade: c.gradeLevel,
      studentCount: c.students.length,
      teachers: c.teacherClasses.map((tc) => tc.teacher.name),
      academicYear: c.academicYear,
      createdAt: c.createdAt,
    })),
  }
}

export async function createClass(
  schoolId: string,
  data: { className: string; grade: string }
) {
  const existingClass = await prisma.class.findFirst({
    where: { schoolId, className: data.className },
  })
  if (existingClass) {
    return { error: 'A class with this name already exists', status: 400 as const }
  }
  const newClass = await prisma.class.create({
    data: {
      schoolId,
      gradeLevel: data.grade,
      className: data.className,
      academicYear: new Date().getFullYear().toString(),
    },
    include: { school: true },
  })
  return {
    class: {
      id: newClass.id,
      name: newClass.className,
      grade: newClass.gradeLevel,
      academicYear: newClass.academicYear,
      createdAt: newClass.createdAt,
    },
  }
}

export async function getClassById(id: string) {
  const classRecord = await prisma.class.findUnique({
    where: { id },
    include: { students: true, school: true },
  })
  if (!classRecord) return { error: 'Class not found', status: 404 as const }
  return { class: classRecord }
}

export async function updateClass(
  schoolId: string,
  classId: string,
  data: { className?: string; gradeLevel?: string; academicYear?: string }
) {
  const existing = await prisma.class.findFirst({
    where: { id: classId, schoolId },
  })
  if (!existing) return { error: 'Class not found', status: 404 as const }
  const updated = await prisma.class.update({
    where: { id: classId },
    data: {
      ...(data.className != null && { className: data.className }),
      ...(data.gradeLevel != null && { gradeLevel: data.gradeLevel }),
      ...(data.academicYear != null && { academicYear: data.academicYear }),
    },
    include: { school: true },
  })
  return {
    class: {
      id: updated.id,
      name: updated.className,
      grade: updated.gradeLevel,
      academicYear: updated.academicYear,
      createdAt: updated.createdAt,
    },
  }
}

export async function deleteClassById(classId: string) {
  const classRecord = await prisma.class.findUnique({
    where: { id: classId },
    include: {
      students: true,
      teacherClasses: { include: { teacher: true } },
    },
  })
  if (!classRecord) return { error: 'Class not found', status: 404 as const }
  await prisma.$transaction(async (tx) => {
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
  return {
    deletedClass: {
      id: classRecord.id,
      name: classRecord.className,
      grade: classRecord.gradeLevel,
      studentCount: classRecord.students.length,
      teacherCount: classRecord.teacherClasses.length,
    },
  }
}

export async function getDashboardStats(schoolId: string) {
  const [totalStudents, totalClasses, totalTeachers, totalParents] =
    await Promise.all([
      prisma.student.count({ where: { schoolId, isActive: true } }),
      prisma.class.count({ where: { schoolId } }),
      prisma.teacher.count({ where: { schoolId } }),
      prisma.parent.count({ where: { schoolId } }),
    ])
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const activeStudents = await prisma.student.count({
    where: {
      schoolId,
      isActive: true,
      conversations: { some: { timestamp: { gte: sevenDaysAgo } } },
    },
  })
  const recentConversations = await prisma.aIConversation.findMany({
    where: { student: { schoolId }, timestamp: { gte: sevenDaysAgo } },
    include: { student: true },
  })
  const engagementData: Record<
    string,
    { questionsCount: number; topics: Set<string>; lastActive: Date }
  > = {}
  for (const conv of recentConversations) {
    const sid = conv.studentId
    if (!engagementData[sid]) {
      engagementData[sid] = {
        questionsCount: 0,
        topics: new Set(),
        lastActive: conv.timestamp,
      }
    }
    engagementData[sid].questionsCount++
    if (conv.subjectArea) engagementData[sid].topics.add(conv.subjectArea)
  }
  const studentEngagements = Object.values(engagementData)
  const avgEngagement =
    studentEngagements.length > 0
      ? Math.round(
          studentEngagements.reduce(
            (sum, s) =>
              sum + Math.min(100, s.questionsCount * 10 + s.topics.size * 20),
            0
          ) / studentEngagements.length
        )
      : 0
  const monthStart = new Date()
  monthStart.setDate(1)
  monthStart.setHours(0, 0, 0, 0)
  const monthlyQuestions = await prisma.aIConversation.count({
    where: { student: { schoolId }, timestamp: { gte: monthStart } },
  })
  const monthlyStats = await prisma.aIConversation.groupBy({
    by: ['studentId'],
    where: { student: { schoolId }, timestamp: { gte: monthStart } },
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } },
    take: 3,
  })
  const topPerformers = await Promise.all(
    monthlyStats.map(async (stat) => {
      const s = await prisma.student.findUnique({
        where: { id: stat.studentId },
        select: { studentName: true },
      })
      return s?.studentName ?? 'Unknown Student'
    })
  )
  return {
    stats: {
      totalStudents,
      totalClasses,
      totalTeachers,
      totalParents,
      activeStudents,
      avgEngagement,
      monthlyQuestions,
      topPerformers: topPerformers.filter((n) => n !== 'Unknown Student'),
    },
  }
}

export async function getPendingAssignmentsCount(schoolId: string): Promise<number> {
  const count = await prisma.assignmentProgress.count({
    where: {
      assignment: { schoolId },
      status: { not: 'completed' },
    },
  })
  return count
}

export async function getRecentActivity(schoolId: string) {
  const oneDayAgo = new Date()
  oneDayAgo.setDate(oneDayAgo.getDate() - 1)
  const studentsWithActivity = await prisma.student.findMany({
    where: {
      schoolId,
      isActive: true,
      conversations: { some: { timestamp: { gte: oneDayAgo } } },
    },
    include: {
      class: { select: { className: true } },
      conversations: {
        where: { timestamp: { gte: oneDayAgo } },
        orderBy: { timestamp: 'desc' },
        take: 1,
      },
    },
    take: 10,
  })
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const recentStudents = await Promise.all(
    studentsWithActivity.map(async (student) => {
      const weeklyConversations = await prisma.aIConversation.findMany({
        where: { studentId: student.id, timestamp: { gte: sevenDaysAgo } },
      })
      const uniqueTopics = new Set(
        weeklyConversations.map((c) => c.subjectArea).filter(Boolean)
      )
      const engagement = Math.min(
        100,
        weeklyConversations.length * 8 + uniqueTopics.size * 15
      )
      let streak = 0
      const today = new Date()
      for (let i = 0; i < 30; i++) {
        const checkDate = new Date(today)
        checkDate.setDate(checkDate.getDate() - i)
        checkDate.setHours(0, 0, 0, 0)
        const nextDay = new Date(checkDate)
        nextDay.setDate(nextDay.getDate() + 1)
        const hasActivity = await prisma.aIConversation.findFirst({
          where: {
            studentId: student.id,
            timestamp: { gte: checkDate, lt: nextDay },
          },
        })
        if (hasActivity) streak++
        else break
      }
      return {
        id: student.id,
        name: student.studentName,
        class: student.class?.className ?? 'No Class',
        lastActive:
          student.conversations[0]?.timestamp ?? student.createdAt,
        engagement: Math.round(engagement),
        streak,
      }
    })
  )
  recentStudents.sort(
    (a, b) => new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime()
  )
  return { recentStudents: recentStudents.slice(0, 5) }
}

export async function getClassPerformance(schoolId: string) {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  const classes = await prisma.class.findMany({
    where: { schoolId },
    include: {
      students: {
        where: { isActive: true },
        include: {
          conversations: { where: { timestamp: { gte: sevenDaysAgo } } },
        },
      },
      teacherClasses: { include: { teacher: { select: { name: true } } } },
    },
    orderBy: { className: 'asc' },
  })
  const classPerformance = classes.map((classItem) => {
    const students = classItem.students
    const studentCount = students.length
    let totalEngagement = 0
    let activeStudents = 0
    for (const student of students) {
      const weeklyConversations = student.conversations
      if (weeklyConversations.length > 0) {
        activeStudents++
        const uniqueTopics = new Set(
          weeklyConversations.map((c) => c.subjectArea).filter(Boolean)
        )
        totalEngagement += Math.min(
          100,
          weeklyConversations.length * 8 + uniqueTopics.size * 15
        )
      }
    }
    const teacherName =
      classItem.teacherClasses.length > 0
        ? classItem.teacherClasses[0].teacher.name
        : 'No Teacher Assigned'
    return {
      id: classItem.id,
      name: classItem.className,
      students: studentCount,
      avgEngagement:
        activeStudents > 0 ? Math.round(totalEngagement / activeStudents) : 0,
      teacher: teacherName,
      activeStudentCount: activeStudents,
    }
  })
  const filtered = classPerformance.filter(
    (c) => c.students > 0 || classPerformance.length < 3
  )
  return { classes: filtered.slice(0, 5) }
}

export async function getStudentsSearch(schoolId: string, q: string) {
  if (!q.trim()) return { students: [] }
  const searchTerm = q.trim().toLowerCase()
  const students = await prisma.student.findMany({
    where: {
      schoolId,
      OR: [
        { studentName: { contains: searchTerm, mode: 'insensitive' } },
        { username: { contains: searchTerm, mode: 'insensitive' } },
        { studentId: { contains: searchTerm, mode: 'insensitive' } },
      ],
    },
    include: {
      class: true,
      studentParents: { include: { parent: { select: { name: true, username: true } } } },
    },
    orderBy: { studentName: 'asc' },
    take: 50,
  })
  return {
    students: students.map((s) => ({
      id: s.id,
      name: s.studentName,
      studentId: s.studentId,
      class: s.class?.className ?? 'No Class Assigned',
      grade: s.class?.gradeLevel ?? 'Unknown Grade',
      parents: s.studentParents?.map((sp) => ({
        name: sp.parent.name,
        username: sp.parent.username,
      })) ?? [],
      createdAt: s.createdAt,
    })),
  }
}

export async function getStudents(actualSchoolId: string) {
  const students = await prisma.student.findMany({
    where: { schoolId: actualSchoolId },
    include: {
      class: true,
      studentParents: { include: { parent: { select: { name: true, username: true } } } },
    },
    orderBy: { createdAt: 'desc' },
  })
  return {
    students: students.map((s) => ({
      id: s.id,
      name: s.studentName,
      studentId: s.studentId,
      class: s.class?.className ?? 'No Class Assigned',
      grade: s.class?.gradeLevel ?? 'Unknown Grade',
      parents: s.studentParents?.map((sp) => ({
        name: sp.parent.name,
        username: sp.parent.username,
      })) ?? [],
      createdAt: s.createdAt,
    })),
  }
}

export async function getStudentById(id: string) {
  const student = await prisma.student.findUnique({
    where: { id },
    include: {
      class: true,
      school: true,
      studentParents: { include: { parent: true } },
    },
  })
  if (!student) return { error: 'Student not found', status: 404 as const }
  return {
    student: {
      id: student.id,
      name: student.studentName,
      studentId: student.studentId,
      class: student.class?.className,
      grade: student.class?.gradeLevel,
      school: student.school?.schoolName,
      parents: student.studentParents?.map((sp) => ({
        name: sp.parent.name,
        username: sp.parent.username,
      })) ?? [],
      createdAt: student.createdAt,
    },
  }
}

function generateStudentCredentials(name: string, age: number) {
  const firstPart = name.toLowerCase().replace(/\s+/g, '').slice(0, 4)
  const randomNum = Math.floor(Math.random() * 100).toString().padStart(2, '0')
  const username = `${firstPart}${age}${randomNum}`
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const password = Array.from({ length: 6 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('')
  return { username, password }
}

async function ensureUniqueAdminStudentUsername(
  base: string,
  schoolId: string
): Promise<string> {
  let username = base
  let n = 1
  for (;;) {
    const exists = await prisma.student.findFirst({
      where: { username, schoolId },
    })
    if (!exists) return username
    username = `${base}${n}`
    n++
  }
}

export async function createStudent(
  actualSchoolId: string,
  data: { name: string; age: number; grade: string; parentId?: string }
) {
  const safeName = data.name
  const safeGrade = data.grade
  const credentials = generateStudentCredentials(safeName, data.age)
  const username = await ensureUniqueAdminStudentUsername(
    credentials.username,
    actualSchoolId
  )
  const hashedPassword = await bcrypt.hash(credentials.password, 10)
  const studentCount = await prisma.student.count({
    where: { schoolId: actualSchoolId },
  })
  const studentId = `STU${(studentCount + 1).toString().padStart(4, '0')}`
  let classRecord = await prisma.class.findFirst({
    where: { schoolId: actualSchoolId, gradeLevel: safeGrade },
  })
  if (!classRecord) {
    classRecord = await prisma.class.create({
      data: {
        schoolId: actualSchoolId,
        gradeLevel: safeGrade,
        className: `${safeGrade} - Default Class`,
        academicYear: new Date().getFullYear().toString(),
      },
    })
  }
  const student = await prisma.student.create({
    data: {
      schoolId: actualSchoolId,
      classId: classRecord.id,
      studentName: safeName,
      studentId,
      username,
      password: hashedPassword,
      age: data.age,
      grade: safeGrade,
      learningStyle: 'MIXED',
      interests: JSON.stringify(['general']),
      isActive: true,
    },
    include: { class: true, school: true },
  })
  if (data.parentId) {
    await prisma.studentParent.create({
      data: { studentId: student.id, parentId: data.parentId },
    })
  }
  const parentInfo = data.parentId
    ? await prisma.parent.findUnique({
        where: { id: data.parentId },
        select: { name: true, username: true },
      })
    : null
  return {
    student: {
      id: student.id,
      name: student.studentName,
      studentId: student.studentId,
      age: data.age,
      grade: safeGrade,
      class: student.class?.className ?? 'No Class Assigned',
      parent: parentInfo,
      credentials: { username: credentials.username, password: credentials.password },
    },
  }
}

export async function updateStudent(
  schoolId: string,
  studentId: string,
  data: { name?: string; grade?: string; classId?: string | null }
) {
  const existing = await prisma.student.findFirst({
    where: { id: studentId, schoolId },
  })
  if (!existing) return { error: 'Student not found', status: 404 as const }
  const updated = await prisma.student.update({
    where: { id: studentId },
    data: {
      ...(data.name != null && { studentName: data.name }),
      ...(data.grade != null && { grade: data.grade }),
      ...(data.classId !== undefined && { classId: data.classId }),
    },
    include: { class: true },
  })
  return {
    student: {
      id: updated.id,
      name: updated.studentName,
      studentId: updated.studentId,
      grade: updated.grade,
      class: updated.class?.className ?? null,
    },
  }
}

export async function deleteStudent(schoolId: string, studentId: string) {
  const existing = await prisma.student.findFirst({
    where: { id: studentId, schoolId },
  })
  if (!existing) return { error: 'Student not found', status: 404 as const }
  await prisma.student.delete({ where: { id: studentId } })
  return { success: true, deletedId: studentId }
}

export async function getParentsSearch(schoolId: string, q: string) {
  if (!q.trim()) return { parents: [] }
  const parents = await prisma.parent.findMany({
    where: { schoolId, name: { contains: q, mode: 'insensitive' } },
    select: {
      id: true,
      name: true,
      username: true,
      studentParents: { include: { student: { select: { studentName: true } } } },
    },
    take: 5,
    orderBy: { name: 'asc' },
  })
  return {
    parents: parents.map((p) => ({
      id: p.id,
      name: p.name,
      username: p.username,
      childrenCount: p.studentParents.length,
      children: p.studentParents.map((sp) => sp.student.studentName),
    })),
  }
}

export async function getParentById(id: string) {
  const parent = await prisma.parent.findUnique({
    where: { id },
    include: {
      studentParents: { include: { student: true } },
      school: true,
    },
  })
  if (!parent) return { error: 'Parent not found', status: 404 as const }
  return {
    parent: {
      id: parent.id,
      name: parent.name,
      username: parent.username,
      email: parent.email,
      phone: parent.phone,
      school: parent.school?.schoolName,
      children: parent.studentParents.map((sp) => ({
        name: sp.student.studentName,
        grade: sp.student.grade,
      })),
    },
  }
}

export async function updateParent(
  schoolId: string,
  parentId: string,
  data: { name?: string; email?: string; phone?: string }
) {
  const existing = await prisma.parent.findFirst({
    where: { id: parentId, schoolId },
  })
  if (!existing) return { error: 'Parent not found', status: 404 as const }
  const updated = await prisma.parent.update({
    where: { id: parentId },
    data: {
      ...(data.name != null && { name: data.name }),
      ...(data.email != null && { email: data.email }),
      ...(data.phone != null && { phone: data.phone }),
    },
    include: { school: true },
  })
  return {
    parent: {
      id: updated.id,
      name: updated.name,
      username: updated.username,
      email: updated.email,
      phone: updated.phone,
    },
  }
}

export async function deleteParent(schoolId: string, parentId: string) {
  const existing = await prisma.parent.findFirst({
    where: { id: parentId, schoolId },
  })
  if (!existing) return { error: 'Parent not found', status: 404 as const }
  await prisma.studentParent.deleteMany({ where: { parentId } })
  await prisma.parent.delete({ where: { id: parentId } })
  return { success: true, deletedId: parentId }
}

export async function getTeacherById(id: string) {
  const teacher = await prisma.teacher.findUnique({
    where: { id },
    include: {
      teacherClasses: { include: { class: true } },
      school: true,
    },
  })
  if (!teacher) return { error: 'Teacher not found', status: 404 as const }
  return {
    teacher: {
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      school: teacher.school?.schoolName,
      classes: teacher.teacherClasses.map((tc) => tc.class.className),
    },
  }
}

export async function updateTeacher(
  schoolId: string,
  teacherId: string,
  data: { name?: string; email?: string; subjects?: string[]; classIds?: string[] }
) {
  const existing = await prisma.teacher.findFirst({
    where: { id: teacherId, schoolId },
  })
  if (!existing) return { error: 'Teacher not found', status: 404 as const }
  if (data.name != null || data.email != null || data.subjects != null) {
    await prisma.teacher.update({
      where: { id: teacherId },
      data: {
        ...(data.name != null && { name: data.name }),
        ...(data.email != null && { email: data.email }),
        ...(data.subjects != null && { subjects: JSON.stringify(data.subjects) }),
      },
    })
  }
  if (data.classIds !== undefined) {
    await prisma.teacherClass.deleteMany({ where: { teacherId } })
    const validClassIds = data.classIds.filter(
      (id): id is string => typeof id === 'string' && id.trim() !== ''
    )
    const valid = await prisma.class.findMany({
      where: { id: { in: validClassIds }, schoolId },
      select: { id: true },
    })
    if (valid.length > 0) {
      await prisma.teacherClass.createMany({
        data: valid.map((c) => ({ teacherId, classId: c.id })),
      })
    }
  }
  return getTeacherById(teacherId)
}

export async function deleteTeacher(schoolId: string, teacherId: string) {
  const existing = await prisma.teacher.findFirst({
    where: { id: teacherId, schoolId },
  })
  if (!existing) return { error: 'Teacher not found', status: 404 as const }
  await prisma.teacherClass.deleteMany({ where: { teacherId } })
  await prisma.teacher.delete({ where: { id: teacherId } })
  return { success: true, deletedId: teacherId }
}

export async function migrateDatabase() {
  const result = (await prisma.$queryRaw`
    SELECT column_name FROM information_schema.columns
    WHERE table_name = 'ai_personalities' AND column_name = 'conversation_state'
  `) as { column_name: string }[]
  if (Array.isArray(result) && result.length === 0) {
    await prisma.$executeRaw`
      ALTER TABLE ai_personalities ADD COLUMN conversation_state TEXT
    `
    await prisma.$executeRaw`
      UPDATE ai_personalities SET conversation_state = '{}' WHERE conversation_state IS NULL
    `
    return { message: 'Added conversation_state column to ai_personalities table' }
  }
  return { message: 'conversation_state column already exists' }
}
