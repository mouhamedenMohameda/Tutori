import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'

export interface JwtPayload {
  schoolId?: string
  teacherId?: string
  parentId?: string
  studentId?: string
  email?: string
  role: string
  [key: string]: unknown
}

const getSecret = () => getJWTSecret()

/**
 * Centralized auth: require Bearer token and one of the allowed roles.
 * Returns decoded payload or null (and sends 401/403).
 */
export function requireRole(
  req: Request,
  res: Response,
  allowedRoles: string[]
): JwtPayload | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), getSecret()) as JwtPayload
    if (!allowedRoles.includes(decoded.role)) {
      res.status(403).json({ error: 'Access denied' })
      return null
    }
    return decoded
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}
