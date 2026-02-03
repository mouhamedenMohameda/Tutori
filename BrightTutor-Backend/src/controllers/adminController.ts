import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { getJWTSecret } from '@/lib/security/secrets'
import jwt from 'jsonwebtoken'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { validateId, validateString } from '@/lib/security/validation'
import { containsSQLInjection } from '@/lib/security/injection-prevention'
import {
  getClasses,
  createClass,
  getClassById,
  updateClass,
  deleteClassById,
  getDashboardStats,
  getPendingAssignmentsCount,
  getRecentActivity,
  getClassPerformance,
  getStudents,
  getStudentsSearch,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  getParentsSearch,
  getParentById,
  updateParent,
  deleteParent,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  migrateDatabase,
} from '@/services/adminService'

const JWT_SECRET = () => getJWTSecret()

export function requireSchoolAdmin(
  req: Request,
  res: Response
): { schoolId: string; userId?: string; role?: string } | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as {
      schoolId?: string
      userId?: string
      role?: string
    }
    const role = decoded.role
    if (
      role !== 'SCHOOL_ADMIN' &&
      role !== 'PLATFORM_ADMIN' &&
      role !== 'ADMIN' &&
      role !== 'SUPER_ADMIN'
    ) {
      res.status(403).json({ error: 'Access denied' })
      return null
    }
    return {
      schoolId: decoded.schoolId || (req.query.schoolId as string),
      userId: decoded.userId,
      role,
    }
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

export async function getClassesHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = (req.query.schoolId as string) || 'school_1'
    const result = await getClasses(schoolId)
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/classes')
  }
}

export async function postClassesHandler(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { className, grade, schoolId = 'school_1' } = body
    if (!className || !grade) {
      res.status(400).json({ error: 'Class name and grade are required' })
      return
    }
    const result = await createClass(schoolId, { className, grade })
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, class: result.class })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/classes')
  }
}

export async function getClassByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const result = await getClassById(req.params.id)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, class: result.class })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/classes/:id')
  }
}

export async function putClassByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = auth.schoolId || (req.query.schoolId as string) || 'school_1'
    const result = await updateClass(schoolId, req.params.id, req.body || {})
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/classes/:id')
  }
}

export async function deleteClassByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const classId = req.params.id
    const result = await deleteClassById(classId)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({
      success: true,
      message: `Class has been permanently deleted`,
      deletedClass: result.deletedClass,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/classes/:id')
  }
}

export async function getDashboardStatsHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = (req.query.schoolId as string) || auth.schoolId || 'school_1'
    const result = await getDashboardStats(schoolId)
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/dashboard/stats')
  }
}

export async function getRecentActivityHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = (req.query.schoolId as string) || auth.schoolId || 'school_1'
    const result = await getRecentActivity(schoolId)
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/dashboard/recent-activity')
  }
}

export async function getClassPerformanceHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = (req.query.schoolId as string) || auth.schoolId || 'school_1'
    const result = await getClassPerformance(schoolId)
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/dashboard/class-performance')
  }
}

/** GET /admin/dashboard — aggregate of stats, recent-activity, class-performance for mobile app */
export async function getDashboardHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = (req.query.schoolId as string) || auth.schoolId || 'school_1'
    const [statsResult, pendingCount, recentActivityResult, classPerformanceResult] = await Promise.all([
      getDashboardStats(schoolId),
      getPendingAssignmentsCount(schoolId),
      getRecentActivity(schoolId),
      getClassPerformance(schoolId),
    ])
    const recentStudents =
      (recentActivityResult as { recentStudents?: Array<{ id: string; name: string; lastActive: Date | string }> })
        .recentStudents ?? []
    const classes = (classPerformanceResult as { classes?: unknown }).classes ?? []
    // recentActivity: alias for mobile OverviewScreen (expects id, type, description, timestamp, user)
    const recentActivity = recentStudents.map((s) => ({
      id: s.id,
      type: 'student_login' as const,
      description: `${s.name} was active`,
      timestamp: typeof s.lastActive === 'string' ? s.lastActive : s.lastActive?.toISOString?.() ?? new Date().toISOString(),
      user: s.name,
    }))
    const stats = {
      ...(statsResult as { stats?: Record<string, unknown> }).stats,
      pendingAssignments: pendingCount,
    }
    res.json({
      success: true,
      stats,
      recentStudents,
      classes,
      recentActivity,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/dashboard')
  }
}

export async function getStudentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    let actualSchoolId = auth.schoolId
    const providedSchoolId = req.query.schoolId as string
    if (providedSchoolId) {
      const v = validateId(providedSchoolId)
      if (!v.valid) {
        res.status(400).json({ error: v.error ?? 'Invalid school ID' })
        return
      }
      if (
        auth.role !== 'SUPER_ADMIN' &&
        auth.role !== 'PLATFORM_ADMIN' &&
        providedSchoolId !== auth.schoolId
      ) {
        res.status(403).json({ error: "You can only access your own school's data" })
        return
      }
      actualSchoolId = providedSchoolId
    }
    if (!actualSchoolId) {
      res.status(400).json({ error: 'School ID is required' })
      return
    }
    const result = await getStudents(actualSchoolId)
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/students')
  }
}

export async function getStudentsSearchHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = auth.schoolId || (req.query.schoolId as string) || 'school_1'
    const q = (req.query.q as string) || ''
    const result = await getStudentsSearch(schoolId, q)
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/students/search')
  }
}

export async function getStudentByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const result = await getStudentById(req.params.id)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/students/:id')
  }
}

export async function postStudentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const actualSchoolId = auth.schoolId || (req.body?.schoolId as string)
    if (!actualSchoolId) {
      res.status(400).json({ error: 'School ID is required' })
      return
    }
    const { name, age, grade, parentId } = req.body || {}
    if (!name || !age || !grade) {
      res.status(400).json({ error: 'Name, age, and grade are required' })
      return
    }
    if (
      containsSQLInjection(name) ||
      containsSQLInjection(grade as string) ||
      (parentId && containsSQLInjection(parentId))
    ) {
      res.status(400).json({ error: 'Invalid input detected' })
      return
    }
    const nameValidation = validateString(name, { minLength: 1, maxLength: 100 })
    if (!nameValidation.valid) {
      res.status(400).json({ error: nameValidation.error ?? 'Invalid name format' })
      return
    }
    const gradeValidation = validateString(grade, { minLength: 1, maxLength: 50 })
    if (!gradeValidation.valid) {
      res.status(400).json({ error: gradeValidation.error ?? 'Invalid grade format' })
      return
    }
    const ageNum = typeof age === 'string' ? parseInt(age, 10) : age
    if (isNaN(ageNum) || ageNum < 8 || ageNum > 28) {
      res.status(400).json({ error: 'Age must be a number between 8 and 28' })
      return
    }
    if (parentId) {
      const pv = validateId(parentId)
      if (!pv.valid) {
        res.status(400).json({ error: pv.error ?? 'Invalid parent ID' })
        return
      }
      const ds = await (await import('@/config/data-source')).getDataSource()
      const parentExists = await ds.getRepository((await import('@/entities')).Parent).findOne({
        where: { id: parentId, schoolId: actualSchoolId },
      })
      if (!parentExists) {
        res.status(400).json({ error: 'Selected parent not found' })
        return
      }
    }
    const result = await createStudent(actualSchoolId, {
      name: nameValidation.sanitized ?? name,
      age: ageNum,
      grade: gradeValidation.sanitized ?? grade,
      parentId,
    })
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/students')
  }
}

export async function getParentsSearchHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = (req.query.schoolId as string) || auth.schoolId || 'school_1'
    const query = (req.query.q as string) || ''
    const result = await getParentsSearch(schoolId, query)
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/parents/search')
  }
}

export async function getParentByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const result = await getParentById(req.params.id)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/parents/:id')
  }
}

export async function getTeacherByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const result = await getTeacherById(req.params.id)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/teachers/:id')
  }
}

export async function putStudentByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = auth.schoolId || (req.query.schoolId as string) || 'school_1'
    const result = await updateStudent(schoolId, req.params.id, req.body || {})
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/students/:id')
  }
}

export async function deleteStudentByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = auth.schoolId || (req.query.schoolId as string) || 'school_1'
    const result = await deleteStudent(schoolId, req.params.id)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/students/:id')
  }
}

export async function putParentByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = auth.schoolId || (req.query.schoolId as string) || 'school_1'
    const result = await updateParent(schoolId, req.params.id, req.body || {})
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/parents/:id')
  }
}

export async function deleteParentByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = auth.schoolId || (req.query.schoolId as string) || 'school_1'
    const result = await deleteParent(schoolId, req.params.id)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/parents/:id')
  }
}

export async function putTeacherByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = auth.schoolId || (req.query.schoolId as string) || 'school_1'
    const result = await updateTeacher(schoolId, req.params.id, req.body || {})
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/teachers/:id')
  }
}

export async function deleteTeacherByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireSchoolAdmin(req, res)
    if (!auth) return
    const schoolId = auth.schoolId || (req.query.schoolId as string) || 'school_1'
    const result = await deleteTeacher(schoolId, req.params.id)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/teachers/:id')
  }
}

export async function migrateDatabaseHandler(req: Request, res: Response): Promise<void> {
  try {
    const authHeader = req.headers.authorization
    const adminSecret = process.env.ADMIN_SECRET
    if (adminSecret && authHeader !== `Bearer ${adminSecret}`) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    const result = await migrateDatabase()
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'admin/migrate-database')
  }
}
