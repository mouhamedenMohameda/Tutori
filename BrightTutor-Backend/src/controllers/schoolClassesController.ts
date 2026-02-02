import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import {
  getClasses,
  createClass,
  updateClass,
  deleteClass,
} from '@/services/schoolClassesService'

const JWT_SECRET = () => getJWTSecret()

function getSchoolIdFromToken(req: Request, res: Response, allowTeacher = false): string | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as {
      schoolId?: string
      role?: string
    }
    if (allowTeacher && decoded.role === 'TEACHER') return decoded.schoolId ?? null
    if (decoded.role === 'SCHOOL_ADMIN') return decoded.schoolId ?? null
    res.status(403).json({ error: 'Access denied' })
    return null
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

export async function getClassesHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = getSchoolIdFromToken(req, res, true)
    if (!schoolId) return
    const result = await getClasses(schoolId)
    res.json({ success: true, classes: result.classes })
  } catch (error) {
    sendSanitizedError(res, error, 'school/classes')
  }
}

export async function postClassesHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = getSchoolIdFromToken(req, res, false)
    if (!schoolId) return
    const { className, gradeLevel, description, classroomYear } = req.body || {}
    if (!className || !gradeLevel) {
      res.status(400).json({ error: 'Class name and grade level are required' })
      return
    }
    const result = await createClass(schoolId, {
      className,
      gradeLevel,
      description,
      classroomYear,
    })
    if ('error' in result) {
      res.status((result as { status: number }).status).json({
        error: result.error,
      })
      return
    }
    res.json({
      success: true,
      message: result.message,
      class: result.class,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'school/classes')
  }
}

export async function putClassesHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = getSchoolIdFromToken(req, res, false)
    if (!schoolId) return
    const { classId, className, gradeLevel, description, classroomYear } = req.body || {}
    if (!classId) {
      res.status(400).json({ error: 'Class ID is required' })
      return
    }
    const result = await updateClass(schoolId, {
      classId,
      className,
      gradeLevel,
      description,
      classroomYear,
    })
    if ('error' in result) {
      res.status((result as { status: number }).status).json({
        error: result.error,
      })
      return
    }
    res.json({
      success: true,
      message: 'Classroom updated successfully',
      class: result.class,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'school/classes')
  }
}

export async function deleteClassesHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = getSchoolIdFromToken(req, res, false)
    if (!schoolId) return
    const classId = (req.query.classId as string) || (req.body?.classId as string)
    if (!classId) {
      res.status(400).json({ error: 'Class ID is required' })
      return
    }
    const result = await deleteClass(schoolId, classId)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({
        error: result.error,
      })
      return
    }
    res.json({ success: true, message: 'Class deleted successfully' })
  } catch (error) {
    sendSanitizedError(res, error, 'school/classes')
  }
}
