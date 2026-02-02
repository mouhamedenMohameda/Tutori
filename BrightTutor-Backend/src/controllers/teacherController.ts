import { Request, Response } from 'express'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sanitizeEmail, sanitizePassword } from '@/lib/sanitize'
import { teacherLogin } from '@/services/teacherService'

const authRateLimiter = createRateLimiter(rateLimitConfigs.auth)

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
    const username = rawData.username

    if (!email && !username) {
      res.status(400).json({ error: 'Email or username is required' })
      return
    }
    if (!password) {
      res.status(400).json({ error: 'Password is required' })
      return
    }

    const result = await teacherLogin({
      email: email || username,
      password,
      username,
    })

    if (!result.success) {
      res.status(result.status).json({ error: result.error })
      return
    }

    res.status(200).json(result)
  } catch (error: unknown) {
    console.error('Teacher login error:', error)
    res.status(500).json({ error: 'Login failed. Please try again.' })
  }
}
