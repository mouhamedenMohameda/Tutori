import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
import jwt from 'jsonwebtoken'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { validateId, validateString } from '@/lib/security/validation'
import { containsSQLInjection } from '@/lib/security/injection-prevention'

const router = Router()
const JWT_SECRET = () => getJWTSecret()

function requireSchoolAdmin(req: Request, res: Response): { schoolId: string; userId?: string; role?: string } | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { schoolId?: string; userId?: string; role?: string }
    const role = decoded.role
    if (role !== 'SCHOOL_ADMIN' && role !== 'PLATFORM_ADMIN' && role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
      res.status(403).json({ error: 'Access denied' })
      return null
    }
    return { schoolId: decoded.schoolId || (req.query.schoolId as string), userId: decoded.userId, role }
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

// ---------- GET /admin/dashboard/stats ----------
router.get('/dashboard/stats', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = (req.query.schoolId as string) || auth.schoolId || 'school_1'
    const [totalStudents, totalClasses, totalTeachers, totalParents] = await Promise.all([
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
    const engagementData: Record<string, { questionsCount: number; topics: Set<string>; lastActive: Date }> = {}
    for (const conv of recentConversations) {
      const sid = conv.studentId
      if (!engagementData[sid]) {
        engagementData[sid] = { questionsCount: 0, topics: new Set(), lastActive: conv.timestamp }
      }
      engagementData[sid].questionsCount++
      if (conv.subjectArea) engagementData[sid].topics.add(conv.subjectArea)
    }
    const studentEngagements = Object.values(engagementData)
    const avgEngagement =
      studentEngagements.length > 0
        ? Math.round(
            studentEngagements.reduce(
              (sum, s) => sum + Math.min(100, s.questionsCount * 10 + s.topics.size * 20),
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
    res.json({
      success: true,
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
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/dashboard/stats')
  }
})

// ---------- GET /admin/dashboard/recent-activity ----------
router.get('/dashboard/recent-activity', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = (req.query.schoolId as string) || auth.schoolId || 'school_1'
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
        const uniqueTopics = new Set(weeklyConversations.map((c) => c.subjectArea).filter(Boolean))
        const engagement = Math.min(100, weeklyConversations.length * 8 + uniqueTopics.size * 15)
        let streak = 0
        const today = new Date()
        for (let i = 0; i < 30; i++) {
          const checkDate = new Date(today)
          checkDate.setDate(checkDate.getDate() - i)
          checkDate.setHours(0, 0, 0, 0)
          const nextDay = new Date(checkDate)
          nextDay.setDate(nextDay.getDate() + 1)
          const hasActivity = await prisma.aIConversation.findFirst({
            where: { studentId: student.id, timestamp: { gte: checkDate, lt: nextDay } },
          })
          if (hasActivity) streak++
          else break
        }
        return {
          id: student.id,
          name: student.studentName,
          class: (student as { class?: { className: string } }).class?.className ?? 'No Class',
          lastActive: (student as { conversations: { timestamp: Date }[] }).conversations[0]?.timestamp ?? student.createdAt,
          engagement: Math.round(engagement),
          streak,
        }
      })
    )
    recentStudents.sort((a, b) => new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime())
    res.json({ success: true, recentStudents: recentStudents.slice(0, 5) })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/dashboard/recent-activity')
  }
})

// ---------- GET /admin/dashboard/class-performance ----------
router.get('/dashboard/class-performance', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = (req.query.schoolId as string) || auth.schoolId || 'school_1'
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
      const students = (classItem as { students: { conversations: { subjectArea: string | null }[] }[] }).students
      const studentCount = students.length
      let totalEngagement = 0
      let activeStudents = 0
      for (const student of students) {
        const weeklyConversations = (student as { conversations: { subjectArea: string | null }[] }).conversations
        if (weeklyConversations.length > 0) {
          activeStudents++
          const uniqueTopics = new Set(weeklyConversations.map((c) => c.subjectArea).filter(Boolean))
          totalEngagement += Math.min(100, weeklyConversations.length * 8 + uniqueTopics.size * 15)
        }
      }
      const teacherName =
        (classItem as { teacherClasses: { teacher: { name: string } }[] }).teacherClasses.length > 0
          ? (classItem as { teacherClasses: { teacher: { name: string } }[] }).teacherClasses[0].teacher.name
          : 'No Teacher Assigned'
      return {
        id: classItem.id,
        name: classItem.className,
        students: studentCount,
        avgEngagement: activeStudents > 0 ? Math.round(totalEngagement / activeStudents) : 0,
        teacher: teacherName,
        activeStudentCount: activeStudents,
      }
    })
    const filtered = classPerformance.filter((c) => c.students > 0 || classPerformance.length < 3)
    res.json({ success: true, classes: filtered.slice(0, 5) })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/dashboard/class-performance')
  }
})

// ---------- GET /admin/students ----------
router.get('/students', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    let actualSchoolId = auth.schoolId
    const providedSchoolId = req.query.schoolId as string
    if (providedSchoolId) {
      const v = validateId(providedSchoolId)
      if (!v.valid) return res.status(400).json({ error: v.error ?? 'Invalid school ID' })
      if (auth.role !== 'SUPER_ADMIN' && auth.role !== 'PLATFORM_ADMIN' && providedSchoolId !== auth.schoolId) {
        return res.status(403).json({ error: "You can only access your own school's data" })
      }
      actualSchoolId = providedSchoolId
    }
    if (!actualSchoolId) return res.status(400).json({ error: 'School ID is required' })
    const students = await prisma.student.findMany({
      where: { schoolId: actualSchoolId },
      include: {
        class: true,
        studentParents: { include: { parent: { select: { name: true, username: true } } } },
      },
      orderBy: { createdAt: 'desc' },
    })
    res.json({
      success: true,
      students: students.map((s) => ({
        id: s.id,
        name: s.studentName,
        studentId: s.studentId,
        class: (s as { class?: { className: string } }).class?.className ?? 'No Class Assigned',
        grade: (s as { class?: { gradeLevel: string } }).class?.gradeLevel ?? 'Unknown Grade',
        parents: (s as { studentParents: { parent: { name: string; username: string } }[] }).studentParents.map((sp) => ({
          name: sp.parent.name,
          username: sp.parent.username,
        })),
        createdAt: s.createdAt,
      })),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/students')
  }
})

// ---------- GET /admin/students/:id ----------
router.get('/students/:id', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const student = await prisma.student.findUnique({
      where: { id: req.params.id },
      include: {
        class: true,
        school: true,
        studentParents: { include: { parent: true } },
      },
    })
    if (!student) return res.status(404).json({ error: 'Student not found' })
    res.json({
      success: true,
      student: {
        id: student.id,
        name: student.studentName,
        studentId: student.studentId,
        class: (student as { class?: { className: string } }).class?.className,
        grade: (student as { class?: { gradeLevel: string } }).class?.gradeLevel,
        school: (student as { school?: { schoolName: string } }).school?.schoolName,
        parents: (student as { studentParents: { parent: { name: string; username: string } }[] }).studentParents.map((sp) => ({
          name: sp.parent.name,
          username: sp.parent.username,
        })),
        createdAt: student.createdAt,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/students/:id')
  }
})

// ---------- POST /admin/students ----------
function generateStudentCredentials(name: string, age: number) {
  const firstPart = name.toLowerCase().replace(/\s+/g, '').slice(0, 4)
  const randomNum = Math.floor(Math.random() * 100)
    .toString()
    .padStart(2, '0')
  const username = `${firstPart}${age}${randomNum}`
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const password = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  return { username, password }
}

async function ensureUniqueAdminStudentUsername(base: string, schoolId: string): Promise<string> {
  let username = base
  let n = 1
  while (true) {
    const exists = await prisma.student.findFirst({ where: { username, schoolId } })
    if (!exists) return username
    username = `${base}${n}`
    n++
  }
}

router.post('/students', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const actualSchoolId = auth.schoolId || (req.body?.schoolId as string)
    if (!actualSchoolId) return res.status(400).json({ error: 'School ID is required' })
    const { name, age, grade, parentId } = req.body || {}
    if (!name || !age || !grade) return res.status(400).json({ error: 'Name, age, and grade are required' })
    if (containsSQLInjection(name) || containsSQLInjection(grade as string) || (parentId && containsSQLInjection(parentId))) {
      return res.status(400).json({ error: 'Invalid input detected' })
    }
    const nameValidation = validateString(name, { minLength: 1, maxLength: 100 })
    if (!nameValidation.valid) return res.status(400).json({ error: nameValidation.error ?? 'Invalid name format' })
    const gradeValidation = validateString(grade, { minLength: 1, maxLength: 50 })
    if (!gradeValidation.valid) return res.status(400).json({ error: gradeValidation.error ?? 'Invalid grade format' })
    const ageNum = typeof age === 'string' ? parseInt(age, 10) : age
    if (isNaN(ageNum) || ageNum < 8 || ageNum > 28) return res.status(400).json({ error: 'Age must be a number between 8 and 28' })
    if (parentId) {
      const pv = validateId(parentId)
      if (!pv.valid) return res.status(400).json({ error: pv.error ?? 'Invalid parent ID' })
      const parentExists = await prisma.parent.findFirst({ where: { id: parentId, schoolId: actualSchoolId } })
      if (!parentExists) return res.status(400).json({ error: 'Selected parent not found' })
    }
    const safeName = nameValidation.sanitized ?? name
    const safeGrade = gradeValidation.sanitized ?? grade
    const credentials = generateStudentCredentials(safeName, ageNum)
    const username = await ensureUniqueAdminStudentUsername(credentials.username, actualSchoolId)
    const hashedPassword = await bcrypt.hash(credentials.password, 10)
    const studentCount = await prisma.student.count({ where: { schoolId: actualSchoolId } })
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
        age: ageNum,
        grade: safeGrade,
        learningStyle: 'MIXED',
        interests: JSON.stringify(['general']),
        isActive: true,
      },
      include: { class: true, school: true },
    })
    if (parentId) {
      await prisma.studentParent.create({ data: { studentId: student.id, parentId } })
    }
    const parentInfo = parentId
      ? await prisma.parent.findUnique({ where: { id: parentId }, select: { name: true, username: true } })
      : null
    res.json({
      success: true,
      student: {
        id: student.id,
        name: student.studentName,
        studentId: student.studentId,
        age: ageNum,
        grade: safeGrade,
        class: (student as { class?: { className: string } }).class?.className ?? 'No Class Assigned',
        parent: parentInfo,
        credentials: { username: credentials.username, password: credentials.password },
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/students')
  }
})

// ---------- GET /admin/parents/search ----------
router.get('/parents/search', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = (req.query.schoolId as string) || auth.schoolId || 'school_1'
    const query = (req.query.q as string) || ''
    if (!query.trim()) return res.json({ success: true, parents: [] })
    const parents = await prisma.parent.findMany({
      where: { schoolId, name: { contains: query, mode: 'insensitive' } },
      select: {
        id: true,
        name: true,
        username: true,
        studentParents: { include: { student: { select: { studentName: true } } } },
      },
      take: 5,
      orderBy: { name: 'asc' },
    })
    res.json({
      success: true,
      parents: parents.map((p) => ({
        id: p.id,
        name: p.name,
        username: p.username,
        childrenCount: (p as { studentParents: unknown[] }).studentParents.length,
        children: (p as { studentParents: { student: { studentName: string } }[] }).studentParents.map((sp) => sp.student.studentName),
      })),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/parents/search')
  }
})

// ---------- GET /admin/parents/:id ----------
router.get('/parents/:id', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const parent = await prisma.parent.findUnique({
      where: { id: req.params.id },
      include: { studentParents: { include: { student: true } }, school: true },
    })
    if (!parent) return res.status(404).json({ error: 'Parent not found' })
    res.json({
      success: true,
      parent: {
        id: parent.id,
        name: parent.name,
        username: parent.username,
        email: parent.email,
        phone: parent.phone,
        school: (parent as { school?: { schoolName: string } }).school?.schoolName,
        children: (parent as { studentParents: { student: { studentName: string; grade: string | null } }[] }).studentParents.map((sp) => ({
          name: sp.student.studentName,
          grade: sp.student.grade,
        })),
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/parents/:id')
  }
})

// ---------- GET /admin/teachers/:id ----------
router.get('/teachers/:id', async (req: Request, res: Response) => {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const teacher = await prisma.teacher.findUnique({
      where: { id: req.params.id },
      include: { teacherClasses: { include: { class: true } }, school: true },
    })
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' })
    res.json({
      success: true,
      teacher: {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        school: (teacher as { school?: { schoolName: string } }).school?.schoolName,
        classes: (teacher as { teacherClasses: { class: { className: string } }[] }).teacherClasses.map((tc) => tc.class.className),
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/teachers/:id')
  }
})

// ---------- POST /admin/migrate-database ----------
router.post('/migrate-database', async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization
    const adminSecret = process.env.ADMIN_SECRET
    if (adminSecret && authHeader !== `Bearer ${adminSecret}`) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
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
      return res.json({ success: true, message: 'Added conversation_state column to ai_personalities table' })
    }
    res.json({ success: true, message: 'conversation_state column already exists' })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/migrate-database')
  }
})

export default router
