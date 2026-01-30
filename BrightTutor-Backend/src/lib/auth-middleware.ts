import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendError } from '@/lib/security/error-sanitizer'

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
 * Returns decoded payload or null (and sends 401/403 with consistent shape).
 */
export function requireRole(
  req: Request,
  res: Response,
  allowedRoles: string[]
): JwtPayload | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    sendError(res, 401, 'Authorization required', 'AUTH_REQUIRED')
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), getSecret()) as JwtPayload
    if (!allowedRoles.includes(decoded.role)) {
      sendError(res, 403, 'Access denied', 'PERMISSION_DENIED')
      return null
    }
    return decoded
  } catch {
    sendError(res, 401, 'Invalid token', 'AUTH_INVALID')
    return null
  }
}
