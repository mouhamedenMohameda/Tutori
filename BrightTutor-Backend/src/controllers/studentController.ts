import { Request, Response } from 'express'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sanitizeUsername, sanitizeEmail, sanitizePassword } from '@/lib/sanitize'
import { AuthSchemas } from '@/lib/security/schemas'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { studentLogin } from '@/services/studentService'

const authRateLimiter = createRateLimiter(rateLimitConfigs.auth)

export async function loginHandler(req: Request, res: Response): Promise<void> {
  try {
    try {
      const rateLimitResult = await authRateLimiter(req)
      if (!rateLimitResult.allowed) {
        const headers = getRateLimitHeaders(rateLimitResult)
        Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v))
        res.status(429).json({
          error: 'Too many login attempts. Please try again later.',
          resetTime: rateLimitResult.resetTime,
          retryAfter: rateLimitResult.retryAfter,
        })
        return
      }
    } catch {
      // fail open
    }

    const rawData = req.body || {}
    const parsed = AuthSchemas.studentLogin.safeParse(rawData)
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors
      const msg = Object.values(first)[0]?.[0] ?? parsed.error.message
      res.status(400).json({ error: String(msg) })
      return
    }
    const username = sanitizeUsername(
      parsed.data.username ?? parsed.data.email ?? ''
    )
    const email = sanitizeEmail(parsed.data.email ?? '')
    const password = sanitizePassword(parsed.data.password)

    const result = await studentLogin({ username, email, password })

    if (!result.success) {
      res.status(result.status).json({
        error: result.error,
        ...(result.code && { code: result.code }),
      })
      return
    }

    res.status(200).json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/login')
  }
}
