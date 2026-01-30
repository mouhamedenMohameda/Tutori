/**
 * School subjects: GET (POST/PUT/DELETE disabled - subjects auto-assigned with classes)
 * Ported from BrightTutor-AI-Platform src/app/api/school/subjects/route.ts
 */
import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const JWT_SECRET = () => getJWTSecret()

function getSchoolIdFromToken(req: Request, res: Response, allowTeacher = false): string | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { schoolId?: string; role?: string }
    if (allowTeacher && decoded.role === 'TEACHER') return decoded.schoolId ?? null
    if (decoded.role === 'SCHOOL_ADMIN') return decoded.schoolId ?? null
    res.status(403).json({ error: 'Access denied' })
    return null
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

router.get('/', async (req: Request, res: Response) => {
  try {
    const schoolId = getSchoolIdFromToken(req, res, true)
    if (!schoolId) return
    const subjects = await prisma.subject.findMany({
      where: { schoolId, isActive: true },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        name: true,
        description: true,
        subjectType: true,
        language: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    res.json({
      success: true,
      subjects: subjects.map((s) => ({
        id: s.id,
        name: s.name,
        description: s.description ?? '',
        subjectType: s.subjectType ?? '',
        language: s.language ?? 'French',
        createdAt: s.createdAt.toISOString(),
      })),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'school/subjects')
  }
})

router.post('/', (_req: Request, res: Response) => {
  res.status(403).json({
    error:
      'Subject creation is disabled. Subjects are automatically assigned when you create classrooms based on the classroom year.',
  })
})

export default router
