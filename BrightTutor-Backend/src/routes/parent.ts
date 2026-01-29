import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sanitizeEmail, sanitizePassword } from '@/lib/sanitize'
import { generateToken } from '@/lib/auth'

const router = Router()
const authRateLimiter = createRateLimiter(rateLimitConfigs.auth)

router.post('/login', async (req: Request, res: Response) => {
  try {
    const rateLimitResult = await authRateLimiter(req)
    if (!rateLimitResult.allowed) {
      const headers = getRateLimitHeaders(rateLimitResult)
      Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v))
      return res.status(429).json({
        error: 'Too many login attempts. Please try again later.',
        resetTime: rateLimitResult.resetTime,
      })
    }

    const rawData = req.body || {}
    const email = sanitizeEmail(rawData.email)
    const password = sanitizePassword(rawData.password)
    const normalizedEmail = email ? email.toLowerCase().trim() : ''

    if (!normalizedEmail || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const parent = await prisma.parent.findFirst({
      where: { email: { equals: normalizedEmail, mode: 'insensitive' } },
      include: {
        school: { select: { id: true, schoolName: true } },
        studentParents: {
          include: {
            student: {
              select: {
                id: true,
                studentName: true,
                grade: true,
                class: { select: { className: true } },
              },
            },
          },
        },
      },
    })

    if (!parent) {
      return res.status(401).json({
        error:
          'Invalid email or password. Please check your credentials or contact your school administrator.',
      })
    }

    const isPasswordValid = await bcrypt.compare(password, parent.password)
    if (!isPasswordValid) {
      return res.status(401).json({
        error:
          'Invalid email or password. Please check your credentials or contact your school administrator.',
      })
    }

    const children = parent.studentParents.map((sp) => ({
      id: sp.student.id,
      name: sp.student.studentName,
      grade: sp.student.grade,
      class: sp.student.class?.className || 'No Class',
    }))

    const token = generateToken({
      parentId: parent.id,
      email: parent.email,
      schoolId: parent.schoolId,
      role: 'PARENT',
    })

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      parent: {
        id: parent.id,
        name: parent.name,
        email: parent.email,
        phone: parent.phone,
        children,
        schoolId: parent.schoolId,
        schoolName: parent.school?.schoolName || 'Unknown School',
      },
    })
  } catch (error: any) {
    console.error('Parent login error:', error)
    return res.status(500).json({ error: 'Login failed. Please try again.' })
  }
})

export default router
