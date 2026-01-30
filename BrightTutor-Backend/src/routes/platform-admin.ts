/**
 * Platform-admin routes: auth, analytics, schools (manage, cleanup, update-status, details, student-count), stats, student-created-schools
 */
import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const JWT_SECRET = () => getJWTSecret()

const PLATFORM_ADMIN_CREDENTIALS = {
  username: 'platform_admin_2025',
  password: 'SecureBright@2025!Mauritania',
}

const analyticsCache = new Map<string, { data: any; expires: number }>()
const CACHE_TTL = 15 * 60 * 1000

// POST /platform-admin/auth
router.post('/auth', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { username, password } = body
    if (username !== PLATFORM_ADMIN_CREDENTIALS.username || password !== PLATFORM_ADMIN_CREDENTIALS.password) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)
    const token = jwt.sign(
      { role: 'PLATFORM_ADMIN', username, loginTime: new Date().toISOString(), exp: Math.floor(expiresAt.getTime() / 1000) },
      JWT_SECRET()
    )
    res.cookie('platform-admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60,
      path: '/',
    })
    res.json({ success: true, message: 'Authentication successful', token, expiresAt: expiresAt.toISOString() })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/auth')
  }
})

// GET /platform-admin/analytics
router.get('/analytics', async (req: Request, res: Response) => {
  try {
    const period = (req.query.period as string) || 'today'
    const detailed = req.query.detailed === 'true'
    const cacheKey = `analytics:${period}:${detailed}`
    const cached = analyticsCache.get(cacheKey)
    if (cached && cached.expires > Date.now()) {
      return res.json({ success: true, data: cached.data, cached: true })
    }
    const now = new Date()
    const today = new Date(now)
    today.setHours(0, 0, 0, 0)
    let startDate: Date
    const endDate = new Date(now)
    switch (period) {
      case '7days':
        startDate = new Date(today)
        startDate.setDate(startDate.getDate() - 6)
        break
      case '30days':
        startDate = new Date(today)
        startDate.setDate(startDate.getDate() - 29)
        break
      default:
        startDate = today
    }
    const totalStudents = await prisma.student.count({ where: { isActive: true } })
    let activeCount = 0
    let screenTimeData: any = { _sum: { chatTime: 0, mapTime: 0, rankingsTime: 0, communityTime: 0, profileTime: 0 } }
    try {
      const activeIds = await prisma.studentSession.findMany({
        where: { date: { gte: startDate, lte: endDate } },
        select: { studentId: true },
        distinct: ['studentId'],
      })
      activeCount = activeIds.length
      const agg = await prisma.studentSession.aggregate({
        where: { date: { gte: startDate, lte: endDate } },
        _sum: { chatTime: true, mapTime: true, rankingsTime: true, communityTime: true, profileTime: true },
      })
      screenTimeData = { _sum: { chatTime: agg._sum.chatTime ?? 0, mapTime: agg._sum.mapTime ?? 0, rankingsTime: agg._sum.rankingsTime ?? 0, communityTime: agg._sum.communityTime ?? 0, profileTime: agg._sum.profileTime ?? 0 } }
    } catch (_) {
      // table may not exist
    }
    const activePercentage = totalStudents > 0 ? Math.round((activeCount / totalStudents) * 100) : 0
    const totalScreen = (screenTimeData._sum.chatTime || 0) + (screenTimeData._sum.mapTime || 0) + (screenTimeData._sum.rankingsTime || 0) + (screenTimeData._sum.communityTime || 0) + (screenTimeData._sum.profileTime || 0)
    const usageBreakdown = {
      chat: totalScreen > 0 ? Math.round(((screenTimeData._sum.chatTime || 0) / totalScreen) * 100) : 0,
      map: totalScreen > 0 ? Math.round(((screenTimeData._sum.mapTime || 0) / totalScreen) * 100) : 0,
      rankings: totalScreen > 0 ? Math.round(((screenTimeData._sum.rankingsTime || 0) / totalScreen) * 100) : 0,
      community: totalScreen > 0 ? Math.round(((screenTimeData._sum.communityTime || 0) / totalScreen) * 100) : 0,
      profile: totalScreen > 0 ? Math.round(((screenTimeData._sum.profileTime || 0) / totalScreen) * 100) : 0,
    }
    let activeUsers: any[] = []
    if (detailed && period === 'today') {
      try {
        const sessions = await prisma.studentSession.findMany({
          where: { date: { gte: today, lte: endDate } },
          include: { student: { select: { id: true, studentName: true, lastLogin: true } } },
          orderBy: { sessionStart: 'desc' },
        })
        const byStudent = new Map<string, any>()
        for (const s of sessions) {
          const existing = byStudent.get(s.studentId)
          if (existing) {
            existing.totalTimeToday += s.totalDuration || 0
            if (s.sessionStart > existing.lastActive) existing.lastActive = s.sessionStart
          } else {
            byStudent.set(s.studentId, {
              studentId: s.studentId,
              studentName: (s as any).student?.studentName,
              lastActive: s.sessionStart,
              totalTimeToday: s.totalDuration || 0,
              screenTime: { chat: s.chatTime || 0, map: s.mapTime || 0, rankings: s.rankingsTime || 0, community: s.communityTime || 0, profile: s.profileTime || 0 },
              primaryActivity: 'chat',
            })
          }
        }
        activeUsers = Array.from(byStudent.values()).map((u) => ({ ...u, lastActive: u.lastActive.toISOString(), totalTimeToday: Math.floor(u.totalTimeToday / 60) })).sort((a, b) => b.totalTimeToday - a.totalTimeToday)
      } catch (_) {}
    }
    const result = { period, totalStudents, activeCount, activePercentage, usageBreakdown, ...(detailed && period === 'today' ? { activeUsers } : {}) }
    analyticsCache.set(cacheKey, { data: result, expires: Date.now() + CACHE_TTL })
    res.json({ success: true, data: result, cached: false })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/analytics')
  }
})

// GET /platform-admin/analytics/debug
router.get('/analytics/debug', async (req: Request, res: Response) => {
  try {
    const diagnostics: any = { timestamp: new Date().toISOString(), checks: {} }
    try {
      const tableCheck = await prisma.$queryRaw`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'student_sessions') as exists` as any[]
      diagnostics.checks.tableExists = tableCheck[0]?.exists === true
    } catch (e: any) {
      diagnostics.checks.tableExists = false
      diagnostics.checks.tableError = e?.message
    }
    if (diagnostics.checks.tableExists) {
      try {
        diagnostics.checks.sessionCount = await prisma.studentSession.count()
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        diagnostics.checks.sessionsToday = await prisma.studentSession.count({ where: { date: { gte: today } } })
        diagnostics.checks.recentSessions = await prisma.studentSession.findMany({
          take: 5,
          orderBy: { createdAt: 'desc' },
          select: { id: true, studentId: true, date: true, totalDuration: true, chatTime: true, mapTime: true, createdAt: true },
        })
      } catch (e: any) {
        diagnostics.checks.sessionCountError = e?.message
      }
    }
    try {
      diagnostics.checks.totalStudents = await prisma.student.count({ where: { isActive: true } })
    } catch (e: any) {
      diagnostics.checks.totalStudentsError = e?.message
    }
    diagnostics.checks.trackingEndpoint = { endpoint: '/api/student/track-session', status: 'Check backend logs' }
    res.json({ success: true, diagnostics })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/analytics/debug')
  }
})

// GET /platform-admin/schools
router.get('/schools', async (req: Request, res: Response) => {
  try {
    const schools = await prisma.school.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        schoolName: true,
        contactEmail: true,
        contactPhone: true,
        wilaya: true,
        address: true,
        adminName: true,
        adminEmail: true,
        subscriptionPlan: true,
        pricingMRU: true,
        applicationStatus: true,
        createdAt: true,
        maxStudents: true,
        maxTeachers: true,
        approvedBy: true,
      },
    })
    res.json({ success: true, schools, total: schools.length })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools')
  }
})

// POST /platform-admin/schools/manage — reset_password, change_email
router.post('/schools/manage', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { schoolId, action, newPassword, newEmail } = body
    if (!schoolId || !action) return res.status(400).json({ error: 'Action and schoolId required' })
    const school = await prisma.school.findUnique({ where: { id: schoolId } })
    if (!school) return res.status(404).json({ error: 'School not found' })
    if (action === 'reset_password') {
      if (!newPassword) return res.status(400).json({ error: 'New password required' })
      const hashed = await bcrypt.hash(newPassword, 12)
      await prisma.school.update({ where: { id: schoolId }, data: { adminPassword: hashed } })
      return res.json({ success: true, message: 'Password reset successfully', newCredentials: { email: school.adminEmail, password: newPassword, schoolName: school.schoolName } })
    }
    if (action === 'change_email') {
      if (!newEmail) return res.status(400).json({ error: 'New email required' })
      const existing = await prisma.school.findFirst({ where: { adminEmail: newEmail, NOT: { id: schoolId } } })
      if (existing) return res.status(400).json({ error: 'Email already exists' })
      await prisma.school.update({ where: { id: schoolId }, data: { adminEmail: newEmail } })
      return res.json({ success: true, message: 'Email changed successfully', newCredentials: { email: newEmail, password: 'unchanged', schoolName: school.schoolName } })
    }
    res.status(400).json({ error: 'Invalid action' })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/manage')
  }
})

// POST /platform-admin/schools/cleanup
router.post('/schools/cleanup', async (req: Request, res: Response) => {
  try {
    const patterns = ['test', 'Test', 'Final Test School', 'Demo', 'Sample', 'Example']
    const deleteResult = await prisma.school.deleteMany({
      where: { OR: patterns.map((p) => ({ schoolName: { contains: p } })) },
    })
    res.json({ success: true, message: `Deleted ${deleteResult.count} test schools`, deletedCount: deleteResult.count })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/cleanup')
  }
})

async function handleSchoolsUpdateStatus(req: Request, res: Response) {
  const body = req.body || {}
  const { schoolId, status } = body
  if (!schoolId || !status) return res.status(400).json({ error: 'School ID and status are required' })
  const valid = ['PENDING', 'ACTIVE', 'REJECTED', 'SUSPENDED', 'EXPIRED', 'DELETED']
  if (!valid.includes(status)) return res.status(400).json({ error: 'Invalid status' })
  if (status === 'DELETED') {
    const school = await prisma.school.findUnique({ where: { id: schoolId } })
    if (!school) return res.status(404).json({ error: 'School not found' })
    await prisma.school.delete({ where: { id: schoolId } })
    return res.json({ success: true, message: 'School deleted successfully', school: { id: school.id, schoolName: school.schoolName, applicationStatus: 'DELETED' } })
  }
  const updated = await prisma.school.update({
    where: { id: schoolId },
    data: {
      applicationStatus: status,
      approvedDate: status === 'ACTIVE' ? new Date() : undefined,
      approvedBy: status === 'ACTIVE' ? 'platform-admin' : undefined,
      subscriptionStatus: status === 'ACTIVE' ? 'ACTIVE' : status,
      subscriptionStart: status === 'ACTIVE' ? new Date() : undefined,
      subscriptionEnd: status === 'ACTIVE' ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) : undefined,
    },
  })
  res.json({ success: true, message: `School ${status.toLowerCase()} successfully`, school: { id: updated.id, schoolName: updated.schoolName, applicationStatus: updated.applicationStatus, subscriptionStatus: updated.subscriptionStatus } })
}

// PUT /platform-admin/schools/update-status
router.put('/schools/update-status', async (req: Request, res: Response) => {
  try {
    await handleSchoolsUpdateStatus(req, res)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/update-status')
  }
})

// POST /platform-admin/schools/update-status (alias for mobile app)
router.post('/schools/update-status', async (req: Request, res: Response) => {
  try {
    await handleSchoolsUpdateStatus(req, res)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/update-status')
  }
})

// GET /platform-admin/schools/:schoolId/details
router.get('/schools/:schoolId/details', async (req: Request, res: Response) => {
  try {
    const schoolId = req.params.schoolId
    const subjects = await prisma.subject.findMany({ select: { id: true, name: true } })
    const subjectMap = new Map(subjects.map((s) => [s.id, s.name]))
    const getSubjectNames = (ids: any) => {
      if (!ids) return []
      const arr = typeof ids === 'string' ? (() => { try { return JSON.parse(ids) } catch { return [] } })() : (Array.isArray(ids) ? ids : [])
      return arr.map((id: string) => subjectMap.get(id)).filter(Boolean)
    }
    const schoolDetails = await prisma.school.findUnique({
      where: { id: schoolId },
      include: {
        students: {
          include: { class: { select: { id: true, className: true, gradeLevel: true } }, studentParents: { include: { parent: { select: { id: true, name: true, email: true, phone: true } } } } },
          orderBy: { studentName: 'asc' },
        },
        teachers: {
          include: { teacherClasses: { include: { class: { select: { id: true, className: true, gradeLevel: true, students: { select: { id: true } } } } } } },
          orderBy: { name: 'asc' },
        },
        parents: {
          include: { studentParents: { include: { student: { select: { id: true, studentName: true, grade: true, class: { select: { className: true, gradeLevel: true } } } } } } },
          orderBy: { name: 'asc' },
        },
        classes: {
          include: { students: { select: { id: true, studentName: true, grade: true } }, teacherClasses: { include: { teacher: { select: { id: true, name: true, email: true } } } } },
          orderBy: { className: 'asc' },
        },
      },
    })
    if (!schoolDetails) return res.status(404).json({ success: false, error: 'School not found' })
    const studentsCount = schoolDetails.students.length
    const selfRegistered = schoolDetails.students.filter((s) => s.isSelfRegistered).length
    const schoolAdmins = [{ id: schoolDetails.id, name: schoolDetails.adminName, email: schoolDetails.adminEmail, role: 'School Owner', phone: schoolDetails.contactPhone, wilaya: schoolDetails.wilaya, address: schoolDetails.address, createdAt: schoolDetails.createdAt }]
    const studentUtilization = schoolDetails.maxStudents > 0 ? Math.round((studentsCount / schoolDetails.maxStudents) * 100) : 0
    const teacherUtilization = schoolDetails.maxTeachers > 0 ? Math.round((schoolDetails.teachers.length / schoolDetails.maxTeachers) * 100) : 0
    const daysSinceCreation = Math.floor((Date.now() - new Date(schoolDetails.createdAt).getTime()) / (1000 * 60 * 60 * 24))
    res.json({
      success: true,
      school: {
        id: schoolDetails.id,
        schoolName: schoolDetails.schoolName,
        contactEmail: schoolDetails.contactEmail,
        contactPhone: schoolDetails.contactPhone,
        wilaya: schoolDetails.wilaya,
        address: schoolDetails.address,
        applicationStatus: schoolDetails.applicationStatus,
        subscriptionPlan: schoolDetails.subscriptionPlan,
        pricingMRU: schoolDetails.pricingMRU,
        maxStudents: schoolDetails.maxStudents,
        maxTeachers: schoolDetails.maxTeachers,
        createdAt: schoolDetails.createdAt,
        adminName: schoolDetails.adminName,
        adminEmail: schoolDetails.adminEmail,
        adminPassword: schoolDetails.adminPassword,
        counts: { students: studentsCount, selfRegisteredStudents: selfRegistered, schoolRegisteredStudents: studentsCount - selfRegistered, teachers: schoolDetails.teachers.length, parents: schoolDetails.parents.length, classes: schoolDetails.classes.length, admins: schoolAdmins.length },
        usage: { studentUtilization, teacherUtilization, daysSinceCreation, studentsUsed: studentsCount, studentsLimit: schoolDetails.maxStudents, teachersUsed: schoolDetails.teachers.length, teachersLimit: schoolDetails.maxTeachers },
        students: schoolDetails.students.map((s) => ({
          id: s.id,
          name: s.studentName,
          grade: s.grade,
          dateOfBirth: s.dateOfBirth,
          contactEmail: s.parentEmail,
          accessCode: s.studentId,
          createdAt: s.createdAt,
          isSelfRegistered: s.isSelfRegistered || false,
          class: s.class ? { id: s.class.id, name: s.class.className, grade: s.class.gradeLevel } : null,
          parents: (s as any).studentParents?.map((sp: any) => ({ id: sp.parent.id, name: sp.parent.name, email: sp.parent.email, phone: sp.parent.phone })) || [],
        })),
        teachers: schoolDetails.teachers.map((t) => ({
          id: t.id,
          name: t.name,
          email: t.email,
          subject: getSubjectNames(t.subjects),
          createdAt: t.createdAt,
          classes: (t as any).teacherClasses?.map((tc: any) => ({ id: tc.class.id, name: tc.class.className, grade: tc.class.gradeLevel, studentCount: tc.class.students?.length || 0 })) || [],
        })),
        parents: schoolDetails.parents.map((p) => ({
          id: p.id,
          name: p.name,
          email: p.email,
          phone: p.phone,
          createdAt: p.createdAt,
          children: (p as any).studentParents?.map((sp: any) => ({ id: sp.student.id, name: sp.student.studentName, grade: sp.student.grade, class: sp.student.class ? { name: sp.student.class.className, grade: sp.student.class.gradeLevel } : null })) || [],
        })),
        classes: schoolDetails.classes.map((c) => ({
          id: c.id,
          name: c.className,
          grade: c.gradeLevel,
          subject: c.description,
          createdAt: c.createdAt,
          studentCount: c.students.length,
          students: c.students.map((s) => ({ id: s.id, name: s.studentName, grade: s.grade })),
          teachers: (c as any).teacherClasses?.map((tc: any) => ({ id: tc.teacher.id, name: tc.teacher.name, email: tc.teacher.email })) || [],
        })),
        admins: schoolAdmins,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/details')
  }
})

// GET /platform-admin/schools/:schoolId/student-count
router.get('/schools/:schoolId/student-count', async (req: Request, res: Response) => {
  try {
    const schoolId = req.params.schoolId
    const count = await prisma.student.count({ where: { schoolId, isActive: true } })
    res.json({ success: true, count })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/student-count')
  }
})

// GET /platform-admin/stats
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const approvedSchools = await prisma.school.findMany({
      where: { applicationStatus: 'ACTIVE', OR: [{ approvedBy: null }, { approvedBy: { not: 'system_auto_approval' } }] },
      select: { id: true },
    })
    const totalStudents = await prisma.student.count({ where: { isActive: true } })
    res.json({ success: true, stats: { approvedSchools: approvedSchools.length, totalStudents } })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/stats')
  }
})

// GET /platform-admin/student-created-schools
router.get('/student-created-schools', async (req: Request, res: Response) => {
  try {
    const dbSchools = await prisma.school.findMany({
      where: { approvedBy: 'system_auto_approval' },
      select: { id: true, schoolName: true, address: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    })
    const ids = dbSchools.map((s) => s.id)
    const counts = await prisma.student.groupBy({
      by: ['schoolId'],
      where: { schoolId: { in: ids }, isActive: true },
      _count: { id: true },
    })
    const countMap = new Map(counts.map((c) => [c.schoolId, c._count.id]))
    const schoolsWithData = dbSchools.map((s) => ({
      id: s.id,
      schoolName: s.schoolName,
      city: s.address || 'Nouakchott',
      createdAt: s.createdAt,
      studentCount: countMap.get(s.id) || 0,
      existsInDb: true,
    }))
    schoolsWithData.sort((a, b) => (b.studentCount !== a.studentCount ? b.studentCount - a.studentCount : a.schoolName.localeCompare(b.schoolName)))
    res.json({ success: true, schools: schoolsWithData, total: schoolsWithData.length })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/student-created-schools')
  }
})

export default router
