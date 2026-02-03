import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { validateId } from '@/lib/security/validation'
import {
  getLeaderboard,
  getMembers,
  searchStudents,
  getMessages,
  sendMessage,
  deleteMessage,
  getUnreadCount,
  markAsRead,
  getStudentClassroomYear,
} from '@/services/communityService'

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

export async function membersHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireStudent(req, res)
    if (!auth) return
    const classroomYear = decodeURIComponent(req.params.classroomYear)
    const result = await getMembers(classroomYear)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'community/members')
  }
}

export async function searchStudentsHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireStudent(req, res)
    if (!auth) return
    const result = await searchStudents()
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'community/search-students')
  }
}

export async function getMessagesHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireStudent(req, res)
    if (!auth) return
    const classroomYear = decodeURIComponent(req.params.classroomYear)
    const result = await getMessages(classroomYear)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'community/messages')
  }
}

export async function postMessagesHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireStudent(req, res)
    if (!auth) return
    const body = req.body || {}
    const { studentId, classroomYear, message, messageType, replyToMessageId } = body
    if (auth.studentId !== studentId) {
      res.status(403).json({ error: 'Forbidden' })
      return
    }
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'message is required' })
      return
    }
    const result = await sendMessage({
      studentId,
      classroomYear: classroomYear || '',
      message,
      messageType,
      replyToMessageId,
    })
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'community/messages')
  }
}

export async function deleteMessageHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireStudent(req, res)
    if (!auth) return
    const body = req.body || {}
    const { messageId, studentId } = body
    if (!messageId || auth.studentId !== studentId) {
      res.status(400).json({ error: 'messageId and studentId required' })
      return
    }
    const result = await deleteMessage(messageId, studentId)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'community/messages-delete')
  }
}

export async function unreadCountHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireStudent(req, res)
    if (!auth) return
    const studentId = req.params.studentId
    if (auth.studentId !== studentId) {
      res.status(403).json({ error: 'Forbidden' })
      return
    }
    const result = await getUnreadCount(studentId)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'community/unread-count')
  }
}

export async function markAsReadHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireStudent(req, res)
    if (!auth) return
    const studentId = req.params.studentId
    if (auth.studentId !== studentId) {
      res.status(403).json({ error: 'Forbidden' })
      return
    }
    const result = await markAsRead(studentId)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'community/mark-as-read')
  }
}

export async function studentClassroomYearHandler(req: Request, res: Response): Promise<void> {
  try {
    const auth = requireStudent(req, res)
    if (!auth) return
    const studentId = req.params.studentId
    if (auth.studentId !== studentId) {
      res.status(403).json({ error: 'Forbidden' })
      return
    }
    const v = validateId(studentId)
    if (!v.valid) {
      res.status(400).json({ error: v.error ?? 'Invalid student ID' })
      return
    }
    const result = await getStudentClassroomYear(studentId)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, ...result })
  } catch (error) {
    sendSanitizedError(res, error, 'community/student-classroom-year')
  }
}

export function disabledHandler(_req: Request, res: Response): void {
  res.status(503).json({
    success: false,
    error: 'Community feature is currently disabled',
  })
}
