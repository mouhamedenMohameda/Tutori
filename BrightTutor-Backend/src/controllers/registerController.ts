import { Request, Response } from 'express'
import {
  validateEmail,
  validateString,
  validateDatabaseInput,
} from '@/lib/security/validation'
import {
  containsSQLInjection,
  containsCommandInjection,
} from '@/lib/security/injection-prevention'
import { securityLogger } from '@/lib/security/logging'
import { createRateLimiter, getRateLimitHeaders } from '@/lib/rate-limit'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { registerSimple } from '@/services/registerService'

const registrationRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 3,
  keyGenerator: (req: unknown) =>
    `registration:${(req as { ip?: string }).ip || 'unknown'}:${(req as { path?: string }).path || ''}`,
})

export async function registerSimpleHandler(req: Request, res: Response): Promise<void> {
  try {
    const rateLimitResult = await registrationRateLimiter(req)
    if (!rateLimitResult.allowed) {
      Object.entries(getRateLimitHeaders(rateLimitResult)).forEach(([k, v]) =>
        res.setHeader(k, v)
      )
      res.status(429).json({
        error: 'Too many registration attempts. Please try again later.',
      })
      return
    }
    const body = req.body || {}
    const { schoolName, adminName, adminEmail, password, wilaya, address } = body

    if (!schoolName || !adminName || !adminEmail || !password) {
      res.status(400).json({ error: 'Missing required fields' })
      return
    }

    const emailValidation = validateEmail(adminEmail)
    if (!emailValidation.valid) {
      res.status(400).json({
        error: emailValidation.error || 'Invalid email format',
      })
      return
    }

    if (
      containsSQLInjection(schoolName) ||
      containsSQLInjection(adminName) ||
      containsSQLInjection(adminEmail)
    ) {
      securityLogger.logInjectionAttempt(
        'SQL',
        `${schoolName}|${adminName}|${adminEmail}`,
        undefined,
        req.ip as string
      )
      res.status(400).json({ error: 'Invalid input detected' })
      return
    }

    if (containsCommandInjection(schoolName) || containsCommandInjection(adminName)) {
      res.status(400).json({ error: 'Invalid input detected' })
      return
    }

    const schoolNameValidation = validateString(schoolName, {
      minLength: 1,
      maxLength: 200,
    })
    if (!schoolNameValidation.valid) {
      res.status(400).json({
        error: schoolNameValidation.error || 'Invalid school name',
      })
      return
    }

    const adminNameValidation = validateString(adminName, {
      minLength: 1,
      maxLength: 100,
    })
    if (!adminNameValidation.valid) {
      res.status(400).json({
        error: adminNameValidation.error || 'Invalid admin name',
      })
      return
    }

    if (password.length < 8 || password.length > 100) {
      res.status(400).json({
        error: 'Password must be between 8 and 100 characters',
      })
      return
    }

    let safeSchoolName: string
    let safeAdminName: string
    let safeAdminEmail: string
    try {
      safeSchoolName = validateDatabaseInput(
        schoolNameValidation.sanitized || schoolName,
        'schoolName'
      )
      safeAdminName = validateDatabaseInput(
        adminNameValidation.sanitized || adminName,
        'adminName'
      )
      safeAdminEmail = validateDatabaseInput(
        adminEmail.toLowerCase().trim(),
        'adminEmail'
      )
    } catch (validationError: unknown) {
      res.status(400).json({
        error:
          validationError instanceof Error ? validationError.message : 'Input validation failed',
      })
      return
    }

    const safeWilaya =
      wilaya && typeof wilaya === 'string'
        ? validateString(wilaya, { maxLength: 100 }).sanitized ?? wilaya
        : undefined
    const safeAddress =
      address && typeof address === 'string'
        ? validateString(address, { maxLength: 200 }).sanitized ?? address
        : undefined

    const result = await registerSimple({
      schoolName: safeSchoolName,
      adminName: safeAdminName,
      adminEmail: safeAdminEmail,
      password,
      wilaya: safeWilaya,
      address: safeAddress,
    })
    res.json(result)
  } catch (error) {
    console.error('Simple registration failed:', error)
    sendSanitizedError(res, error, 'register-simple')
  }
}
