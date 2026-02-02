import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { getAssignments } from '@/services/schoolAssignmentsService'

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
      res.status(403).json({ error: 'Access denied' })
      return null
    }
    return decoded.schoolId ?? null
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

export async function getAssignmentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const result = await getAssignments(schoolId)
    res.json({ success: true, assignments: result.assignments })
  } catch (error) {
    sendSanitizedError(res, error, 'school/assignments')
  }
}
