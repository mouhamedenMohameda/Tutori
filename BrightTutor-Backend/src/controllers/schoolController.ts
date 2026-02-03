import { Request, Response } from 'express'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sanitizeEmail, sanitizePassword } from '@/lib/sanitize'
import { AuthSchemas } from '@/lib/security/schemas'
import { validateDatabaseInput } from '@/lib/security/validation'
import { containsSQLInjection } from '@/lib/security/injection-prevention'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { requireRole } from '@/lib/auth-middleware'
import {
  schoolLogin,
  getTeachers,
  createTeacher,
  searchStudents,
  getStudents,
  createStudent,
} from '@/services/schoolService'
import {
  getDashboardStats,
  getRecentActivity,
  getClassPerformance,
  getPendingAssignmentsCount,
} from '@/services/adminService'

const authRateLimiter = createRateLimiter(rateLimitConfigs.auth)

function requireSchoolAdmin(req: Request, res: Response): { schoolId: string } | null {
  const auth = requireRole(req, res, ['SCHOOL_ADMIN'])
  if (!auth?.schoolId) return null
  return { schoolId: auth.schoolId }
}

export async function loginHandler(req: Request, res: Response): Promise<void> {
  try {
    const rateLimitResult = await authRateLimiter(req)
    if (!rateLimitResult.allowed) {
      const headers = getRateLimitHeaders(rateLimitResult)
      Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v))
      res.status(429).json({
        error: 'Too many login attempts. Please try again later.',
        resetTime: rateLimitResult.resetTime,
        retryAfter: rateLimitResult.retryAfter,
      })
      return
    }
    const rawData = req.body || {}
    const parsed = AuthSchemas.schoolLogin.safeParse(rawData)
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors
      const msg = Object.values(first)[0]?.[0] ?? parsed.error.message
      res.status(400).json({ error: String(msg) })
      return
    }
    let email = sanitizeEmail(parsed.data.email)
    const password = sanitizePassword(parsed.data.password)
    if (containsSQLInjection(email)) {
      res.status(400).json({ error: 'Invalid input detected' })
      return
    }
    try {
      email = validateDatabaseInput(email, 'email')
    } catch (err: unknown) {
      res.status(400).json({
        error: err instanceof Error ? err.message : 'Invalid email format',
      })
      return
    }
    const result = await schoolLogin({ email, password })
    if (!result.success) {
      res.status(result.status).json({ error: result.error })
      return
    }
    res.status(200).json(result)
  } catch (error: unknown) {
    console.error('School login error:', error)
    res.status(500).json({ error: 'Login failed. Please try again.' })
  }
}

export async function getTeachersHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const result = await getTeachers(auth.schoolId, req.query as Record<string, unknown>)
    res.json({ success: true, teachers: result.teachers, pagination: result.pagination })
  } catch (error) {
    sendSanitizedError(res, error, 'school/teachers')
  }
}

export async function getTeachersSearchHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const q = (req.query.q as string) || ''
    const result = await getTeachers(auth.schoolId, { q, page: 1, limit: 50 })
    res.json({ success: true, teachers: result.teachers, pagination: result.pagination })
  } catch (error) {
    sendSanitizedError(res, error, 'school/teachers/search')
  }
}

export async function getDashboardHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = auth.schoolId
    const [statsResult, pendingCount, recentActivityResult, classPerformanceResult] = await Promise.all([
      getDashboardStats(schoolId),
      getPendingAssignmentsCount(schoolId),
      getRecentActivity(schoolId),
      getClassPerformance(schoolId),
    ])
    const recentStudents = (recentActivityResult as { recentStudents?: Array<{ id: string; name: string; lastActive: Date | string }> }).recentStudents ?? []
    const classes = (classPerformanceResult as { classes?: unknown }).classes ?? []
    const stats = {
      ...(statsResult as { stats?: Record<string, unknown> }).stats,
      pendingAssignments: pendingCount,
    }
    const recentActivity = recentStudents.map((s) => ({
      id: s.id,
      type: 'student_login' as const,
      description: `${s.name} was active`,
      timestamp: typeof s.lastActive === 'string' ? s.lastActive : (s.lastActive as Date)?.toISOString?.() ?? new Date().toISOString(),
      user: s.name,
    }))
    res.json({ success: true, stats, recentStudents, classes, recentActivity })
  } catch (error) {
    sendSanitizedError(res, error, 'school/dashboard')
  }
}

export async function getStatsHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const result = await getDashboardStats(auth.schoolId)
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'school/stats')
  }
}

export async function postTeachersHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const body = req.body || {}
    const { name, email, subjects = [], classIds = [] } = body
    if (!name || !email || subjects.length === 0) {
      res.status(400).json({
        error: 'Name, email, and at least one subject are required',
      })
      return
    }
    const result = await createTeacher(auth.schoolId, {
      name,
      email,
      subjects,
      classIds,
    })
    if ('error' in result) {
      res.status((result as { status: number }).status).json({
        error: result.error,
      })
      return
    }
    res.json({
      success: true,
      message: 'Teacher created successfully',
      teacher: result.teacher,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'school/teachers')
  }
}

export async function getStudentsSearchHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const q = (req.query.q as string) || ''
    const result = await searchStudents(auth.schoolId, q)
    res.json({ success: true, students: result.students, total: result.total })
  } catch (error) {
    sendSanitizedError(res, error, 'school/students/search')
  }
}

export async function getStudentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const result = await getStudents(auth.schoolId, req.query as Record<string, unknown>)
    res.json({ success: true, students: result.students, pagination: result.pagination })
  } catch (error) {
    sendSanitizedError(res, error, 'school/students')
  }
}

export async function postStudentsHandler(req: Request, res: Response): Promise<void> {
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
      res.status(400).json({
        error: 'Missing required fields: firstName, lastName, grade',
      })
      return
    }
    const result = await createStudent(auth.schoolId, {
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
    })
    if ('error' in result) {
      res.status((result as { status: number }).status).json({
        error: result.error,
      })
      return
    }
    res.json(result)
  } catch (error: unknown) {
    if (
      error &&
      typeof error === 'object' &&
      'message' in error &&
      typeof (error as { message: string }).message === 'string' &&
      (error as { message: string }).message.includes('Unique constraint failed')
    ) {
      res.status(409).json({
        error: 'A student with similar details already exists.',
        details: 'Please check the name and try again.',
      })
      return
    }
    sendSanitizedError(res, error, 'school/students')
  }
}
