/**
 * Platform-admin: auth, analytics, schools (manage, cleanup, update-status, details, student-count), stats, student-created-schools
 */
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

const PLATFORM_ADMIN_CREDENTIALS = {
  username: 'platform_admin_2025',
  password: 'SecureBright@2025!Mauritania',
}

const analyticsCache = new Map<string, { data: unknown; expires: number }>()
const CACHE_TTL = 15 * 60 * 1000

export function getPlatformAdminCredentials(): { username: string; password: string } {
  return PLATFORM_ADMIN_CREDENTIALS
}

export function authenticatePlatformAdmin(username: string, password: string): boolean {
  return (
    username === PLATFORM_ADMIN_CREDENTIALS.username &&
    password === PLATFORM_ADMIN_CREDENTIALS.password
  )
}

export async function getAnalytics(period: string, detailed: boolean): Promise<{
  success: true
  data: unknown
  cached: boolean
}> {
  const cacheKey = `analytics:${period}:${detailed}`
  const cached = analyticsCache.get(cacheKey)
  if (cached && cached.expires > Date.now()) {
    return { success: true, data: cached.data, cached: true }
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
  let screenTimeData: {
    _sum: { chatTime: number; mapTime: number; rankingsTime: number; communityTime: number; profileTime: number }
  } = {
    _sum: { chatTime: 0, mapTime: 0, rankingsTime: 0, communityTime: 0, profileTime: 0 },
  }
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
    screenTimeData = {
      _sum: {
        chatTime: agg._sum.chatTime ?? 0,
        mapTime: agg._sum.mapTime ?? 0,
        rankingsTime: agg._sum.rankingsTime ?? 0,
        communityTime: agg._sum.communityTime ?? 0,
        profileTime: agg._sum.profileTime ?? 0,
      },
    }
  } catch {
    // table may not exist
  }
  const activePercentage = totalStudents > 0 ? Math.round((activeCount / totalStudents) * 100) : 0
  const totalScreen =
    (screenTimeData._sum.chatTime || 0) +
    (screenTimeData._sum.mapTime || 0) +
    (screenTimeData._sum.rankingsTime || 0) +
    (screenTimeData._sum.communityTime || 0) +
    (screenTimeData._sum.profileTime || 0)
  const usageBreakdown = {
    chat: totalScreen > 0 ? Math.round(((screenTimeData._sum.chatTime || 0) / totalScreen) * 100) : 0,
    map: totalScreen > 0 ? Math.round(((screenTimeData._sum.mapTime || 0) / totalScreen) * 100) : 0,
    rankings: totalScreen > 0 ? Math.round(((screenTimeData._sum.rankingsTime || 0) / totalScreen) * 100) : 0,
    community: totalScreen > 0 ? Math.round(((screenTimeData._sum.communityTime || 0) / totalScreen) * 100) : 0,
    profile: totalScreen > 0 ? Math.round(((screenTimeData._sum.profileTime || 0) / totalScreen) * 100) : 0,
  }
  let activeUsers: unknown[] = []
  if (detailed && period === 'today') {
    try {
      const sessions = await prisma.studentSession.findMany({
        where: { date: { gte: today, lte: endDate } },
        include: { student: { select: { id: true, studentName: true, lastLogin: true } } },
        orderBy: { sessionStart: 'desc' },
      })
      const byStudent = new Map<
        string,
        {
          studentId: string
          studentName?: string
          lastActive: Date
          totalTimeToday: number
          screenTime: { chat: number; map: number; rankings: number; community: number; profile: number }
          primaryActivity: string
        }
      >()
      for (const s of sessions) {
        const existing = byStudent.get(s.studentId)
        const student = (s as { student?: { studentName?: string } }).student
        if (existing) {
          existing.totalTimeToday += s.totalDuration || 0
          if (s.sessionStart > existing.lastActive) existing.lastActive = s.sessionStart
        } else {
          byStudent.set(s.studentId, {
            studentId: s.studentId,
            studentName: student?.studentName,
            lastActive: s.sessionStart,
            totalTimeToday: s.totalDuration || 0,
            screenTime: {
              chat: s.chatTime || 0,
              map: s.mapTime || 0,
              rankings: s.rankingsTime || 0,
              community: s.communityTime || 0,
              profile: s.profileTime || 0,
            },
            primaryActivity: 'chat',
          })
        }
      }
      activeUsers = Array.from(byStudent.values())
        .map((u) => ({
          ...u,
          lastActive: u.lastActive.toISOString(),
          totalTimeToday: Math.floor(u.totalTimeToday / 60),
        }))
        .sort((a, b) => b.totalTimeToday - a.totalTimeToday)
    } catch {
      // ignore
    }
  }
  const result: Record<string, unknown> = {
    period,
    totalStudents,
    activeCount,
    activePercentage,
    usageBreakdown,
  }
  if (detailed && period === 'today') {
    result.activeUsers = activeUsers
  }
  analyticsCache.set(cacheKey, { data: result, expires: Date.now() + CACHE_TTL })
  return { success: true, data: result, cached: false }
}

export async function getAnalyticsDebug(): Promise<{ success: true; diagnostics: unknown }> {
  const diagnostics: Record<string, unknown> = { timestamp: new Date().toISOString(), checks: {} }
  const checks = diagnostics.checks as Record<string, unknown>
  try {
    const tableCheck = (await prisma.$queryRaw`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'student_sessions') as exists`) as { exists: boolean }[]
    checks.tableExists = tableCheck[0]?.exists === true
  } catch (e: unknown) {
    checks.tableExists = false
    checks.tableError = (e as Error).message
  }
  if (checks.tableExists) {
    try {
      checks.sessionCount = await prisma.studentSession.count()
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      checks.sessionsToday = await prisma.studentSession.count({
        where: { date: { gte: today } },
      })
      checks.recentSessions = await prisma.studentSession.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          studentId: true,
          date: true,
          totalDuration: true,
          chatTime: true,
          mapTime: true,
          createdAt: true,
        },
      })
    } catch (e: unknown) {
      checks.sessionCountError = (e as Error).message
    }
  }
  try {
    checks.totalStudents = await prisma.student.count({ where: { isActive: true } })
  } catch (e: unknown) {
    checks.totalStudentsError = (e as Error).message
  }
  checks.trackingEndpoint = { endpoint: '/api/student/track-session', status: 'Check backend logs' }
  return { success: true, diagnostics }
}

export async function getSchoolsList(): Promise<{
  success: true
  schools: unknown[]
  total: number
}> {
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
  return { success: true, schools, total: schools.length }
}

export async function manageSchool(body: {
  schoolId: string
  action: string
  newPassword?: string
  newEmail?: string
}): Promise<
  | { success: true; message: string; newCredentials: { email: string; password: string; schoolName: string } }
  | { success: false; status: number; error: string }
> {
  const { schoolId, action, newPassword, newEmail } = body
  const school = await prisma.school.findUnique({ where: { id: schoolId } })
  if (!school) return { success: false, status: 404, error: 'School not found' }
  if (action === 'reset_password') {
    if (!newPassword) return { success: false, status: 400, error: 'New password required' }
    const hashed = await bcrypt.hash(newPassword, 12)
    await prisma.school.update({ where: { id: schoolId }, data: { adminPassword: hashed } })
    return {
      success: true,
      message: 'Password reset successfully',
      newCredentials: { email: school.adminEmail, password: newPassword, schoolName: school.schoolName },
    }
  }
  if (action === 'change_email') {
    if (!newEmail) return { success: false, status: 400, error: 'New email required' }
    const existing = await prisma.school.findFirst({
      where: { adminEmail: newEmail, NOT: { id: schoolId } },
    })
    if (existing) return { success: false, status: 400, error: 'Email already exists' }
    await prisma.school.update({ where: { id: schoolId }, data: { adminEmail: newEmail } })
    return {
      success: true,
      message: 'Email changed successfully',
      newCredentials: { email: newEmail, password: 'unchanged', schoolName: school.schoolName },
    }
  }
  return { success: false, status: 400, error: 'Invalid action' }
}

export async function cleanupTestSchools(): Promise<{
  success: true
  message: string
  deletedCount: number
}> {
  const patterns = ['test', 'Test', 'Final Test School', 'Demo', 'Sample', 'Example']
  const deleteResult = await prisma.school.deleteMany({
    where: { OR: patterns.map((p) => ({ schoolName: { contains: p } })) },
  })
  return {
    success: true,
    message: `Deleted ${deleteResult.count} test schools`,
    deletedCount: deleteResult.count,
  }
}

export async function updateSchoolStatus(
  schoolId: string,
  status: string
): Promise<
  | { success: true; message: string; school: unknown }
  | { success: false; status: number; error: string }
> {
  const valid = ['PENDING', 'ACTIVE', 'REJECTED', 'SUSPENDED', 'EXPIRED', 'DELETED']
  if (!valid.includes(status)) return { success: false, status: 400, error: 'Invalid status' }
  if (status === 'DELETED') {
    const school = await prisma.school.findUnique({ where: { id: schoolId } })
    if (!school) return { success: false, status: 404, error: 'School not found' }
    await prisma.school.delete({ where: { id: schoolId } })
    return {
      success: true,
      message: 'School deleted successfully',
      school: { id: school.id, schoolName: school.schoolName, applicationStatus: 'DELETED' },
    }
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
  return {
    success: true,
    message: `School ${status.toLowerCase()} successfully`,
    school: {
      id: updated.id,
      schoolName: updated.schoolName,
      applicationStatus: updated.applicationStatus,
      subscriptionStatus: updated.subscriptionStatus,
    },
  }
}

function getSubjectNames(ids: unknown, subjectMap: Map<string, string>): string[] {
  if (!ids) return []
  const arr =
    typeof ids === 'string'
      ? (() => {
          try {
            return JSON.parse(ids) as string[]
          } catch {
            return []
          }
        })()
      : Array.isArray(ids)
        ? ids
        : []
  return arr.map((id: string) => subjectMap.get(id)).filter(Boolean) as string[]
}

export async function getSchoolDetails(schoolId: string): Promise<
  | { success: true; school: unknown }
  | { success: false; status: number; error: string }
> {
  const subjects = await prisma.subject.findMany({ select: { id: true, name: true } })
  const subjectMap = new Map(subjects.map((s) => [s.id, s.name]))
  const schoolDetails = await prisma.school.findUnique({
    where: { id: schoolId },
    include: {
      students: {
        include: {
          class: { select: { id: true, className: true, gradeLevel: true } },
          studentParents: { include: { parent: { select: { id: true, name: true, email: true, phone: true } } } },
        },
        orderBy: { studentName: 'asc' },
      },
      teachers: {
        include: {
          teacherClasses: {
            include: {
              class: {
                select: {
                  id: true,
                  className: true,
                  gradeLevel: true,
                  students: { select: { id: true } },
                },
              },
            },
          },
        },
        orderBy: { name: 'asc' },
      },
      parents: {
        include: {
          studentParents: {
            include: {
              student: {
                select: {
                  id: true,
                  studentName: true,
                  grade: true,
                  class: { select: { className: true, gradeLevel: true } },
                },
              },
            },
          },
        },
        orderBy: { name: 'asc' },
      },
      classes: {
        include: {
          students: { select: { id: true, studentName: true, grade: true } },
          teacherClasses: { include: { teacher: { select: { id: true, name: true, email: true } } } },
        },
        orderBy: { className: 'asc' },
      },
    },
  })
  if (!schoolDetails) return { success: false, status: 404, error: 'School not found' }
  const studentsCount = schoolDetails.students.length
  const selfRegistered = schoolDetails.students.filter((s) => s.isSelfRegistered).length
  const schoolAdmins = [
    {
      id: schoolDetails.id,
      name: schoolDetails.adminName,
      email: schoolDetails.adminEmail,
      role: 'School Owner',
      phone: schoolDetails.contactPhone,
      wilaya: schoolDetails.wilaya,
      address: schoolDetails.address,
      createdAt: schoolDetails.createdAt,
    },
  ]
  const studentUtilization =
    schoolDetails.maxStudents > 0 ? Math.round((studentsCount / schoolDetails.maxStudents) * 100) : 0
  const teacherUtilization =
    schoolDetails.maxTeachers > 0
      ? Math.round((schoolDetails.teachers.length / schoolDetails.maxTeachers) * 100)
      : 0
  const daysSinceCreation = Math.floor(
    (Date.now() - new Date(schoolDetails.createdAt).getTime()) / (1000 * 60 * 60 * 24)
  )
  const school = {
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
    counts: {
      students: studentsCount,
      selfRegisteredStudents: selfRegistered,
      schoolRegisteredStudents: studentsCount - selfRegistered,
      teachers: schoolDetails.teachers.length,
      parents: schoolDetails.parents.length,
      classes: schoolDetails.classes.length,
      admins: schoolAdmins.length,
    },
    usage: {
      studentUtilization,
      teacherUtilization,
      daysSinceCreation,
      studentsUsed: studentsCount,
      studentsLimit: schoolDetails.maxStudents,
      teachersUsed: schoolDetails.teachers.length,
      teachersLimit: schoolDetails.maxTeachers,
    },
    students: schoolDetails.students.map((s) => ({
      id: s.id,
      name: s.studentName,
      grade: s.grade,
      dateOfBirth: s.dateOfBirth,
      contactEmail: s.parentEmail,
      accessCode: s.studentId,
      createdAt: s.createdAt,
      isSelfRegistered: s.isSelfRegistered || false,
      class: s.class
        ? { id: s.class.id, name: s.class.className, grade: s.class.gradeLevel }
        : null,
      parents:
        (s as { studentParents?: Array<{ parent: { id: string; name: string; email: string; phone: string } }> }).studentParents?.map((sp) => ({
          id: sp.parent.id,
          name: sp.parent.name,
          email: sp.parent.email,
          phone: sp.parent.phone,
        })) || [],
    })),
    teachers: schoolDetails.teachers.map((t) => ({
      id: t.id,
      name: t.name,
      email: t.email,
      subject: getSubjectNames(t.subjects, subjectMap),
      createdAt: t.createdAt,
      classes:
        (t as { teacherClasses?: Array<{ class: { id: string; className: string; gradeLevel: string; students?: unknown[] } }> }).teacherClasses?.map((tc) => ({
          id: tc.class.id,
          name: tc.class.className,
          grade: tc.class.gradeLevel,
          studentCount: tc.class.students?.length || 0,
        })) || [],
    })),
    parents: schoolDetails.parents.map((p) => ({
      id: p.id,
      name: p.name,
      email: p.email,
      phone: p.phone,
      createdAt: p.createdAt,
      children:
        (p as {
          studentParents?: Array<{
            student: {
              id: string
              studentName: string
              grade: string | null
              class: { className: string; gradeLevel: string } | null
            }
          }>
        }).studentParents?.map((sp) => ({
          id: sp.student.id,
          name: sp.student.studentName,
          grade: sp.student.grade,
          class: sp.student.class
            ? { name: sp.student.class.className, grade: sp.student.class.gradeLevel }
            : null,
        })) || [],
    })),
    classes: schoolDetails.classes.map((c) => ({
      id: c.id,
      name: c.className,
      grade: c.gradeLevel,
      subject: c.description,
      createdAt: c.createdAt,
      studentCount: c.students.length,
      students: c.students.map((s) => ({ id: s.id, name: s.studentName, grade: s.grade })),
      teachers:
        (c as { teacherClasses?: Array<{ teacher: { id: string; name: string; email: string } }> }).teacherClasses?.map((tc) => ({
          id: tc.teacher.id,
          name: tc.teacher.name,
          email: tc.teacher.email,
        })) || [],
    })),
    admins: schoolAdmins,
  }
  return { success: true, school }
}

export async function getSchoolStudentCount(schoolId: string): Promise<{
  success: true
  count: number
}> {
  const count = await prisma.student.count({ where: { schoolId, isActive: true } })
  return { success: true, count }
}

export async function getStats(): Promise<{
  success: true
  stats: { approvedSchools: number; totalStudents: number }
}> {
  const approvedSchools = await prisma.school.findMany({
    where: {
      applicationStatus: 'ACTIVE',
      OR: [{ approvedBy: null }, { approvedBy: { not: 'system_auto_approval' } }],
    },
    select: { id: true },
  })
  const totalStudents = await prisma.student.count({ where: { isActive: true } })
  return {
    success: true,
    stats: { approvedSchools: approvedSchools.length, totalStudents },
  }
}

export async function getStudentCreatedSchools(): Promise<{
  success: true
  schools: unknown[]
  total: number
}> {
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
  const schoolsWithData = dbSchools
    .map((s) => ({
      id: s.id,
      schoolName: s.schoolName,
      city: s.address || 'Nouakchott',
      createdAt: s.createdAt,
      studentCount: countMap.get(s.id) || 0,
      existsInDb: true,
    }))
    .sort((a, b) =>
      b.studentCount !== a.studentCount
        ? b.studentCount - a.studentCount
        : a.schoolName.localeCompare(b.schoolName)
    )
  return { success: true, schools: schoolsWithData, total: schoolsWithData.length }
}
