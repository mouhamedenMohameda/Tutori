import { Request, Response } from 'express'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sanitizeEmail, sanitizePassword } from '@/lib/sanitize'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { requireRole } from '@/lib/auth-middleware'
import {
  getProfile,
  studentChat,
  generateReport,
  parentLogin,
} from '@/services/parentService'

const authRateLimiter = createRateLimiter(rateLimitConfigs.auth)
const aiRateLimiter = createRateLimiter(rateLimitConfigs.aiGeneration)

interface ParentPayload {
  parentId: string
  schoolId: string
  email: string
  role: string
}

function requireParent(req: Request, res: Response): ParentPayload | null {
  const auth = requireRole(req, res, ['PARENT'])
  if (!auth) return null
  return auth as ParentPayload
}

export async function profileHandler(req: Request, res: Response): Promise<void> {
  try {
    const decoded = requireParent(req, res)
    if (!decoded) return
    const result = await getProfile(decoded.parentId)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({ success: true, parent: result.parent })
  } catch (error) {
    sendSanitizedError(res, error, 'parent/profile')
  }
}

export async function studentChatHandler(req: Request, res: Response): Promise<void> {
  try {
    const decoded = requireParent(req, res)
    if (!decoded) return
    const body = req.body || {}
    const { studentId, parentQuestion, chatHistory } = body
    if (!studentId || !parentQuestion) {
      res.status(400).json({ error: 'Student ID and question are required' })
      return
    }
    const result = await studentChat(
      decoded.parentId,
      studentId,
      parentQuestion,
      chatHistory
    )
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({
      success: true,
      response: result.response,
      timestamp: result.timestamp,
      studentName: result.studentName,
      conversationContext: result.conversationContext,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'parent/student-chat')
  }
}

export async function generateReportHandler(req: Request, res: Response): Promise<void> {
  try {
    const decoded = requireParent(req, res)
    if (!decoded) return
    const rateLimitResult = await aiRateLimiter(req)
    if (!rateLimitResult.allowed) {
      res.setHeader('X-RateLimit-Reset', String(rateLimitResult.resetTime))
      res.status(429).json({
        error: 'Too many report generation attempts. Please try again later.',
        resetTime: rateLimitResult.resetTime,
      })
      return
    }
    const body = req.body || {}
    const { studentId, language = 'en' } = body
    if (!studentId) {
      res.status(400).json({ error: 'Student ID is required' })
      return
    }
    const result = await generateReport(decoded.parentId, studentId, language)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({
      success: true,
      report: result.report,
      studentName: result.studentName,
      generatedAt: result.generatedAt,
      metadata: result.metadata,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'parent/generate-report')
  }
}

export async function loginHandler(req: Request, res: Response): Promise<void> {
  try {
    const rateLimitResult = await authRateLimiter(req)
    if (!rateLimitResult.allowed) {
      const headers = getRateLimitHeaders(rateLimitResult)
      Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v))
      res.status(429).json({
        error: 'Too many login attempts. Please try again later.',
        resetTime: rateLimitResult.resetTime,
      })
      return
    }
    const rawData = req.body || {}
    const email = sanitizeEmail(rawData.email)
    const password = sanitizePassword(rawData.password)
    const normalizedEmail = email ? email.toLowerCase().trim() : ''
    if (!normalizedEmail || !password) {
      res.status(400).json({ error: 'Email and password are required' })
      return
    }
    const result = await parentLogin(normalizedEmail, password)
    if ('error' in result) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token: result.token,
      parent: result.parent,
    })
  } catch (error: unknown) {
    console.error('Parent login error:', error)
    res.status(500).json({ error: 'Login failed. Please try again.' })
  }
}
