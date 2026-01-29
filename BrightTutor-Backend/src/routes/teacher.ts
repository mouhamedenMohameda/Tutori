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
    const username = rawData.username

    if (!email && !username) {
      return res.status(400).json({ error: 'Email or username is required' })
    }
    if (!password) {
      return res.status(400).json({ error: 'Password is required' })
    }

    const teacher = await prisma.teacher.findFirst({
      where: {
        email: email || username,
        school: { applicationStatus: 'ACTIVE' },
      },
      include: {
        school: { select: { id: true, schoolName: true, applicationStatus: true } },
        teacherClasses: {
          include: {
            class: { select: { id: true, className: true, gradeLevel: true } },
          },
        },
      },
    })

    if (!teacher) {
      return res.status(404).json({
        error: 'Teacher not found. Please contact your school administrator.',
      })
    }

    const isPasswordValid = await bcrypt.compare(password, teacher.password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password. Please try again.' })
    }

    const assignedClasses = teacher.teacherClasses.map((tc) => tc.class.className)
    const subjects = JSON.parse(teacher.subjects || '[]')

    const token = generateToken({
      teacherId: teacher.id,
      email: teacher.email,
      schoolId: teacher.schoolId,
      role: 'TEACHER',
    })

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      teacher: {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        subjects,
        classes: assignedClasses,
        schoolId: teacher.schoolId,
        schoolName: teacher.school.schoolName,
      },
    })
  } catch (error: any) {
    console.error('Teacher login error:', error)
    return res.status(500).json({ error: 'Login failed. Please try again.' })
  }
})

export default router
