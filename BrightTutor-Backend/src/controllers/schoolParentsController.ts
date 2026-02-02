import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import {
  searchParents,
  assignStudents,
  getParents,
  createParent,
  updateParent,
  deleteParent,
} from '@/services/schoolParentsService'

const JWT_SECRET = () => getJWTSecret()

function requireSchoolAdmin(req: Request, res: Response): string | null {
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

export async function searchHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const q = (req.query.q as string) || ''
    const result = await searchParents(schoolId, q)
    res.json({ success: true, parents: result.parents, total: result.total })
  } catch (error) {
    sendSanitizedError(res, error, 'school/parents/search')
  }
}

export async function assignStudentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const { parentId, studentIds } = req.body || {}
    if (!parentId || !Array.isArray(studentIds)) {
      res.status(400).json({
        error: 'Missing required fields: parentId and studentIds (array)',
      })
      return
    }
    const result = await assignStudents(schoolId, parentId, studentIds)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({
        error: result.error,
      })
      return
    }
    res.json({
      success: true,
      message: result.message,
      assignments: result.assignments,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'school/parents/assign-students')
  }
}

export async function getParentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const result = await getParents(schoolId)
    res.json({ success: true, parents: result.parents })
  } catch (error) {
    sendSanitizedError(res, error, 'school/parents')
  }
}

export async function postParentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const { name, email, phone, childrenIds } = req.body || {}
    if (!name || !email || !phone) {
      res.status(400).json({
        error: 'Missing required fields: name, email, phone',
      })
      return
    }
    const result = await createParent(schoolId, {
      name,
      email,
      phone,
      childrenIds,
    })
    if ('error' in result) {
      res.status((result as { status: number }).status).json({
        error: result.error,
      })
      return
    }
    res.json({ success: true, parent: result.parent })
  } catch (error) {
    const err = error as { code?: string }
    if (err?.code === 'P2002') {
      res.status(409).json({
        error: 'A parent with this email or username already exists.',
      })
      return
    }
    sendSanitizedError(res, error, 'school/parents')
  }
}

export async function putParentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const { parentId, studentIds, ...dataToUpdate } = req.body || {}
    if (!parentId) {
      res.status(400).json({ error: 'Parent ID is required' })
      return
    }
    const result = await updateParent(schoolId, {
      parentId,
      studentIds,
      name: dataToUpdate.name,
      email: dataToUpdate.email,
      phone: dataToUpdate.phone,
    })
    res.json({
      success: true,
      message: 'Parent updated successfully',
      parent: result.parent,
    })
  } catch (error) {
    const err = error as { code?: string }
    if (err?.code === 'P2025') {
      res.status(404).json({ error: 'Parent not found' })
      return
    }
    sendSanitizedError(res, error, 'school/parents')
  }
}

export async function deleteParentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const parentId = (req.query.parentId as string) || (req.body?.parentId as string)
    if (!parentId) {
      res.status(400).json({ error: 'Parent ID is required' })
      return
    }
    await deleteParent(schoolId, parentId)
    res.json({ success: true, message: 'Parent deleted successfully' })
  } catch (error) {
    const err = error as { code?: string }
    if (err?.code === 'P2025') {
      res.status(404).json({ error: 'Parent not found' })
      return
    }
    sendSanitizedError(res, error, 'school/parents')
  }
}
