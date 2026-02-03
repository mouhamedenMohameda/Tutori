/**
 * Platform-admin controller: auth, analytics, schools, stats, student-created-schools
 */
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import {
  authenticatePlatformAdmin,
  getAnalytics,
  getAnalyticsDebug,
  getSchoolsList,
  manageSchool,
  cleanupTestSchools,
  updateSchoolStatus,
  getSchoolDetails,
  getSchoolStudentCount,
  getStats,
  getStudentCreatedSchools,
} from '@/services/platformAdminService'

/** GET /platform-admin/dashboard — aggregate of stats + analytics for mobile app */
export async function dashboard(req: Request, res: Response): Promise<void> {
  try {
    const [statsResult, analyticsResult] = await Promise.all([
      getStats(),
      getAnalytics((req.query.period as string) || 'today', req.query.detailed === 'true'),
    ])
    res.json({
      success: true,
      stats: statsResult.stats,
      analytics: (analyticsResult as { data?: unknown }).data ?? {},
    })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/dashboard')
  }
}

const JWT_SECRET = () => getJWTSecret()

export async function auth(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { username, password } = body
    if (!authenticatePlatformAdmin(username, password)) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)
    const token = jwt.sign(
      {
        role: 'PLATFORM_ADMIN',
        username,
        loginTime: new Date().toISOString(),
        exp: Math.floor(expiresAt.getTime() / 1000),
      },
      JWT_SECRET()
    )
    res.cookie('platform-admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60,
      path: '/',
    })
    res.json({
      success: true,
      message: 'Authentication successful',
      token,
      expiresAt: expiresAt.toISOString(),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/auth')
  }
}

export async function analytics(req: Request, res: Response): Promise<void> {
  try {
    const period = (req.query.period as string) || 'today'
    const detailed = req.query.detailed === 'true'
    const result = await getAnalytics(period, detailed)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/analytics')
  }
}

export async function analyticsDebug(_req: Request, res: Response): Promise<void> {
  try {
    const result = await getAnalyticsDebug()
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/analytics/debug')
  }
}

export async function schoolsList(_req: Request, res: Response): Promise<void> {
  try {
    const result = await getSchoolsList()
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools')
  }
}

export async function schoolsManage(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { schoolId, action } = body
    if (!schoolId || !action) {
      res.status(400).json({ error: 'Action and schoolId required' })
      return
    }
    const result = await manageSchool(body)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/manage')
  }
}

export async function schoolsCleanup(_req: Request, res: Response): Promise<void> {
  try {
    const result = await cleanupTestSchools()
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/cleanup')
  }
}

async function handleSchoolsUpdateStatus(req: Request, res: Response): Promise<void> {
  const body = req.body || {}
  const { schoolId, status } = body
  if (!schoolId || !status) {
    res.status(400).json({ error: 'School ID and status are required' })
    return
  }
  const result = await updateSchoolStatus(schoolId, status)
  if (!result.success) {
    res.status((result as { status: number }).status).json({ error: result.error })
    return
  }
  res.json(result)
}

export async function schoolsUpdateStatusPut(req: Request, res: Response): Promise<void> {
  try {
    await handleSchoolsUpdateStatus(req, res)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/update-status')
  }
}

export async function schoolsUpdateStatusPost(req: Request, res: Response): Promise<void> {
  try {
    await handleSchoolsUpdateStatus(req, res)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/update-status')
  }
}

export async function schoolDetails(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = req.params.schoolId
    const result = await getSchoolDetails(schoolId)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ success: false, error: result.error })
      return
    }
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/details')
  }
}

export async function schoolStudentCount(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = req.params.schoolId
    const result = await getSchoolStudentCount(schoolId)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/schools/student-count')
  }
}

export async function stats(_req: Request, res: Response): Promise<void> {
  try {
    const result = await getStats()
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/stats')
  }
}

export async function studentCreatedSchools(_req: Request, res: Response): Promise<void> {
  try {
    const result = await getStudentCreatedSchools()
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'platform-admin/student-created-schools')
  }
}
