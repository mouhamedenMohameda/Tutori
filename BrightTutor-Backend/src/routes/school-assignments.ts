/**
 * School assignments: GET (list all assignments for school)
 * Ported from BrightTutor-AI-Platform src/app/api/school/assignments/route.ts
 */
import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const JWT_SECRET = () => getJWTSecret()

function requireSchoolAdmin(req: Request, res: Response): string | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { schoolId?: string; role?: string }
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

router.get('/', async (req: Request, res: Response) => {
  try {
    const schoolId = requireSchoolAdmin(req, res)
    if (!schoolId) return
    const assignments = await prisma.assignment.findMany({
      where: { schoolId },
      include: {
        teacher: { select: { name: true } },
        class: { select: { className: true } },
      },
      orderBy: { createdAt: 'desc' },
    })
    const formatted = assignments.map((a: any) => ({
      id: a.id,
      title: a.title,
      description: a.description,
      subject: a.subject,
      dueDate: a.dueDate?.toISOString?.(),
      dueTime: a.dueTime,
      priority: a.priority,
      points: a.points,
      status: a.status,
      assignedClasses: typeof a.assignedClasses === 'string' ? JSON.parse(a.assignedClasses || '[]') : (a.assignedClasses || []),
      teacherName: a.teacher?.name,
      className: a.class?.className,
      fileName: a.fileName || '',
      fileSize: a.fileSize || 0,
      fileType: a.fileType || '',
      teachingInstructions: a.teachingInstructions || '',
      createdAt: a.createdAt?.toISOString?.(),
      updatedAt: a.updatedAt?.toISOString?.(),
    }))
    res.json({ success: true, assignments: formatted })
  } catch (error) {
    sendSanitizedError(res, error, 'school/assignments')
  }
})

export default router
