import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { getLeaderboard } from '@/services/communityService'

const JWT_SECRET = () => getJWTSecret()

function requireStudent(req: Request, res: Response): { studentId: string } | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authentication required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as {
      role?: string
      studentId?: string
    }
    if (decoded.role !== 'STUDENT' || !decoded.studentId) {
      res.status(403).json({ error: 'Unauthorized - student access only' })
      return null
    }
    return { studentId: decoded.studentId }
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

export async function leaderboardHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const auth = requireStudent(req, res)
    if (!auth) return
    const classroomYearRaw = decodeURIComponent(req.params.classroomYear)
    const subjectParam = (req.query.subject as string) || null
    const page = Math.max(1, parseInt(String(req.query.page || '1'), 10) || 1)
    const limit = Math.min(
      100,
      Math.max(1, parseInt(String(req.query.limit || '20'), 10) || 20)
    )
    const result = await getLeaderboard(
      classroomYearRaw,
      subjectParam,
      page,
      limit
    )
    if ('error' in result) {
      res.status((result as { status: number }).status).json({
        error: result.error,
      })
      return
    }
    res.json({ success: true, data: result.data })
  } catch (error) {
    sendSanitizedError(res, error, 'community/leaderboard')
  }
}

export function disabledHandler(_req: Request, res: Response): void {
  res.status(503).json({
    success: false,
    error: 'Community feature is currently disabled',
  })
}
