import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { getSubjects } from '@/services/schoolSubjectsService'

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

export async function getSubjectsHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = getSchoolIdFromToken(req, res, true)
    if (!schoolId) return
    const result = await getSubjects(schoolId)
    res.json({ success: true, subjects: result.subjects })
  } catch (error) {
    sendSanitizedError(res, error, 'school/subjects')
  }
}

export async function getSubjectByIdHandler(req: Request, res: Response): Promise<void> {
  try {
    const schoolId = getSchoolIdFromToken(req, res, true)
    if (!schoolId) return
    const subjectId = req.params.subjectId
    if (!subjectId) {
      res.status(400).json({ error: 'Subject ID is required' })
      return
    }
    const subject = await prisma.subject.findFirst({
      where: { id: subjectId, schoolId },
    })
    if (!subject) {
      res.status(404).json({ error: 'Subject not found' })
      return
    }
    res.json({
      success: true,
      subject: {
        id: subject.id,
        name: subject.name,
        description: subject.description ?? '',
        subjectType: subject.subjectType ?? '',
        language: subject.language ?? 'French',
        createdAt: subject.createdAt.toISOString(),
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'school/subjects/:id')
  }
}

export function postSubjectsDisabledHandler(_req: Request, res: Response): void {
  res.status(403).json({
    error:
      'Subject creation is disabled. Subjects are automatically assigned when you create classrooms based on the classroom year.',
  })
}
