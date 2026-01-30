import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
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

const router = Router()

const registrationRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 3,
  keyGenerator: (req: unknown) => `registration:${(req as { ip?: string; path?: string }).ip || 'unknown'}:${(req as { path?: string }).path || ''}`,
})

router.post('/register-simple', async (req: Request, res: Response) => {
  try {
    const rateLimitResult = await registrationRateLimiter(req)
    if (!rateLimitResult.allowed) {
      Object.entries(getRateLimitHeaders(rateLimitResult)).forEach(([k, v]) =>
        res.setHeader(k, v)
      )
      return res.status(429).json({
        error: 'Too many registration attempts. Please try again later.',
      })
    }
    const body = req.body || {}
    const {
      schoolName,
      adminName,
      adminEmail,
      password,
      wilaya,
      address,
    } = body

    if (!schoolName || !adminName || !adminEmail || !password) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const emailValidation = validateEmail(adminEmail)
    if (!emailValidation.valid) {
      return res.status(400).json({
        error: emailValidation.error || 'Invalid email format',
      })
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
      return res.status(400).json({ error: 'Invalid input detected' })
    }

    if (containsCommandInjection(schoolName) || containsCommandInjection(adminName)) {
      return res.status(400).json({ error: 'Invalid input detected' })
    }

    const schoolNameValidation = validateString(schoolName, {
      minLength: 1,
      maxLength: 200,
    })
    if (!schoolNameValidation.valid) {
      return res.status(400).json({
        error: schoolNameValidation.error || 'Invalid school name',
      })
    }

    const adminNameValidation = validateString(adminName, {
      minLength: 1,
      maxLength: 100,
    })
    if (!adminNameValidation.valid) {
      return res.status(400).json({
        error: adminNameValidation.error || 'Invalid admin name',
      })
    }

    if (password.length < 8 || password.length > 100) {
      return res.status(400).json({
        error: 'Password must be between 8 and 100 characters',
      })
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
    } catch (validationError: any) {
      return res.status(400).json({
        error: validationError?.message || 'Input validation failed',
      })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const newSchool = await prisma.school.create({
      data: {
        schoolName: safeSchoolName,
        contactEmail: safeAdminEmail,
        adminUserId: `admin_${Date.now()}`,
        adminName: safeAdminName,
        adminEmail: safeAdminEmail,
        adminPassword: hashedPassword,
        subscriptionPlan: 'BASIC_50',
        applicationStatus: 'PENDING',
        wilaya: wilaya
          ? validateString(wilaya, { maxLength: 100 }).sanitized
          : null,
        address: address
          ? validateString(address, { maxLength: 200 }).sanitized
          : null,
      },
    })

    res.json({
      success: true,
      message: 'School registration successful!',
      school: {
        id: newSchool.id,
        schoolName: newSchool.schoolName,
        adminEmail: newSchool.adminEmail,
        status: newSchool.applicationStatus,
      },
    })
  } catch (error) {
    console.error('Simple registration failed:', error)
    sendSanitizedError(res, error, 'register-simple')
  }
})

export default router
