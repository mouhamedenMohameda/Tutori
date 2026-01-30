import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sanitizeUsername, sanitizeEmail, sanitizePassword } from '@/lib/sanitize'
import { generateToken } from '@/lib/auth'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const authRateLimiter = createRateLimiter(rateLimitConfigs.auth)

router.post('/login', async (req: Request, res: Response) => {
  try {
    try {
      const rateLimitResult = await authRateLimiter(req)
      if (!rateLimitResult.allowed) {
        const headers = getRateLimitHeaders(rateLimitResult)
        Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v))
        return res.status(429).json({
          error: 'Too many login attempts. Please try again later.',
          resetTime: rateLimitResult.resetTime,
          retryAfter: rateLimitResult.retryAfter,
        })
      }
    } catch {
      // fail open
    }

    const rawData = req.body || {}
    const username = sanitizeUsername(rawData.username || rawData.email)
    const email = sanitizeEmail(rawData.email)
    const password = sanitizePassword(rawData.password)

    if (!username && !email) {
      return res.status(400).json({ error: 'Username or email is required' })
    }
    if (!password) {
      return res.status(400).json({ error: 'Password is required' })
    }

    const student = await prisma.student.findFirst({
      where: {
        OR: [{ username: username || email }, { studentId: username || email }],
        isActive: true,
      },
      include: {
        school: {
          select: {
            id: true,
            schoolName: true,
            applicationStatus: true,
            subscriptionStatus: true,
          },
        },
        class: {
          select: {
            id: true,
            className: true,
            gradeLevel: true,
            classroomYear: true,
            classSubjects: {
              include: {
                subject: { select: { id: true, name: true } },
              },
            },
          },
        },
      },
    })

    if (!student) {
      const inactiveStudent = await prisma.student.findFirst({
        where: {
          OR: [{ username: username || email }, { studentId: username || email }],
          isActive: false,
        },
        include: { school: { select: { schoolName: true, applicationStatus: true } } },
      })
      if (inactiveStudent && !inactiveStudent.isActive) {
        return res.status(403).json({
          error:
            'Your student account is inactive. Please contact your school administrator or platform support.',
        })
      }
      if (inactiveStudent?.school?.applicationStatus !== 'ACTIVE') {
        return res.status(403).json({
          error: 'Your school account is not active. Please contact your school administrator.',
        })
      }
      return res.status(404).json({
        error:
          'Student account not found. Please check your username and password, or contact your school administrator.',
      })
    }

    const isPasswordValid = await bcrypt.compare(password, student.password || '')
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password. Please try again.' })
    }

    await prisma.student
      .update({ where: { id: student.id }, data: { lastLogin: new Date() } })
      .catch(() => {})

    let token: string
    try {
      const jwtSecret = getJWTSecret()
      if (!jwtSecret || jwtSecret.length === 0) {
        return res.status(503).json({
          error: 'Authentication service configuration error. Please contact support.',
          code: 'JWT_CONFIG_ERROR',
        })
      }
      token = generateToken({
        studentId: student.id,
        username: student.username ?? undefined,
        schoolId: student.schoolId,
        role: 'STUDENT',
      })
    } catch {
      return res.status(503).json({
        error: 'Authentication service is currently unavailable. Please contact support.',
        code: 'JWT_CONFIG_ERROR',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      student: {
        id: student.id,
        username: student.username,
        studentName: student.studentName,
        studentId: student.studentId,
        grade: student.grade,
        className: student.class?.className,
        classroomYear: student.class?.classroomYear,
        schoolId: student.schoolId,
        schoolName: student.school!.schoolName,
        subjects: student.class?.classSubjects?.map((cs) => cs.subject) || [],
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'student/login')
  }
})

export default router
