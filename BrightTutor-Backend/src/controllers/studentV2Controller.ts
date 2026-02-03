/**
 * Student v2 API controller: profile, memory, chat-history, assignments, monthly-summary
 */
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import {
  getProfile,
  getKnowledgeBase,
  getMemory,
  saveMemory,
  getChatHistory,
  getAssignments,
  getMonthlySummary,
} from '@/services/studentV2Service'
import { buildTutorContext, getTutorChatResponse } from '@/services/aiService'

const JWT_SECRET = () => getJWTSecret()

function toRateLimitRequest(req: Request): { url: string; headers: { get: (name: string) => string | null } } {
  return {
    url: `${req.protocol}://${req.get('host') || 'localhost'}${req.originalUrl}`,
    headers: { get: (name: string) => req.get(name) ?? null },
  }
}

export function getStudentIdFromToken(req: Request, res: Response): string | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authentication required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { role?: string; studentId?: string }
    if (decoded.role !== 'STUDENT' || !decoded.studentId) {
      res.status(403).json({ error: 'Student access only' })
      return null
    }
    return decoded.studentId
  } catch {
    res.status(401).json({ error: 'Invalid authentication token' })
    return null
  }
}

function requireStudentMatch(req: Request, res: Response, paramStudentId: string): string | null {
  const tokenStudentId = getStudentIdFromToken(req, res)
  if (!tokenStudentId) return null
  if (tokenStudentId !== paramStudentId) {
    res.status(403).json({ error: 'Unauthorized access' })
    return null
  }
  return tokenStudentId
}

const profileRateLimiter = createRateLimiter(rateLimitConfigs.dashboard)

export async function profile(req: Request, res: Response): Promise<void> {
  try {
    try {
      const rateLimitResult = await profileRateLimiter(toRateLimitRequest(req) as Parameters<typeof profileRateLimiter>[0])
      if (!rateLimitResult.allowed) {
        Object.entries(getRateLimitHeaders(rateLimitResult)).forEach(([k, v]) => res.setHeader(k, v))
        res.status(429).json({
          error: 'Too many requests. Please slow down.',
          resetTime: rateLimitResult.resetTime,
          retryAfter: rateLimitResult.retryAfter,
        })
        return
      }
    } catch {
      /* fail open */
    }

    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return

    const result = await getProfile(studentId)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ success: false, error: result.error })
      return
    }
    res.json({ success: true, student: result.student })
  } catch (error) {
    sendSanitizedError(res, error, 'student/v2/profile')
  }
}

export async function memoryGet(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudentMatch(req, res, req.params.studentId)) return
    const result = await getMemory(req.params.studentId)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/v2/memory')
  }
}

export async function memoryPost(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudentMatch(req, res, req.params.studentId)) return
    const memoryData = (req.body || {}) as Record<string, unknown>
    const result = await saveMemory(req.params.studentId, memoryData)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/v2/memory')
  }
}

export async function knowledgeBaseGet(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudentMatch(req, res, req.params.studentId)) return
    const result = await getKnowledgeBase(req.params.studentId)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/v2/knowledge-base')
  }
}

export async function chatHistory(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudentMatch(req, res, req.params.studentId)) return
    const page = Math.max(1, parseInt(String(req.query.page), 10) || 1)
    const limit = Math.min(100, Math.max(1, parseInt(String(req.query.limit), 10) || 50))
    const result = await getChatHistory(req.params.studentId, page, limit)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/v2/chat-history')
  }
}

export async function chatPost(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const studentId = body.studentId
    const message = body.message
    if (!studentId || !message || typeof message !== 'string') {
      res.status(400).json({ error: 'studentId and message are required' })
      return
    }
    if (!requireStudentMatch(req, res, studentId)) return
    const built = await buildTutorContext(studentId, message, {
      subject: body.subject,
      languagePreference: body.languagePreference || 'fr',
    })
    if (!built) {
      res.status(404).json({ error: 'Student not found' })
      return
    }
    const aiResponse = await getTutorChatResponse(message, built.tutorContext)
    res.json({
      success: true,
      response: aiResponse,
      studentName: built.student.studentName,
      topic: body.subject || 'general',
    })
  } catch (error) {
    sendSanitizedError(res, error, 'student/v2/chat')
  }
}

export async function assignments(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudentMatch(req, res, req.params.studentId)) return
    const page = Math.max(1, parseInt(String(req.query.page), 10) || 1)
    const limit = Math.min(100, Math.max(1, parseInt(String(req.query.limit), 10) || 20))
    const result = await getAssignments(req.params.studentId, page, limit)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ success: false, error: result.error })
      return
    }
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/v2/assignments')
  }
}

export async function monthlySummary(req: Request, res: Response): Promise<void> {
  try {
    const tokenStudentId = getStudentIdFromToken(req, res)
    if (!tokenStudentId) return
    const body = (req.body || {}) as { studentId?: string }
    const studentId = body.studentId ?? tokenStudentId
    if (studentId !== tokenStudentId) {
      res.status(403).json({ error: 'Unauthorized access' })
      return
    }
    const result = await getMonthlySummary(studentId)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/v2/monthly-summary')
  }
}
