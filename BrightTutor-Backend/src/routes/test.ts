/**
 * Test routes: POST /push-notification
 */
import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { sendNotificationToStudent } from '@/lib/push-notifications'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const JWT_SECRET = () => getJWTSecret()

// GET /test/push-notification — usage info
router.get('/push-notification', async (_req: Request, res: Response) => {
  try {
    const activeTokensCount = await prisma.studentPushToken.count({ where: { isActive: true } })
    const studentsWithTokens = await prisma.studentPushToken.findMany({
      where: { isActive: true },
      select: { studentId: true },
      distinct: ['studentId'],
    })
    const activeStudentsCount = await prisma.student.count({
      where: { isActive: true, id: { in: studentsWithTokens.map((t: { studentId: string }) => t.studentId) } },
    })
    res.json({
      success: true,
      message: 'Push notification test endpoint is active',
      endpoint: 'POST /api/test/push-notification',
      usage: { method: 'POST', headers: { Authorization: 'Bearer <JWT_TOKEN>', 'Content-Type': 'application/json' }, body: { studentId: 'string (required)', message: 'string (optional)' } },
      stats: { activePushTokens: activeTokensCount, activeStudentsWithTokens: activeStudentsCount },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'test/push-notification')
  }
})

// POST /test/push-notification — body: { studentId?, message? }
router.post('/push-notification', async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'Authentication required' })
    let decoded: any
    try {
      decoded = jwt.verify(authHeader.slice(7), JWT_SECRET())
      if (!['STUDENT', 'TEACHER', 'ADMIN', 'SCHOOL_ADMIN'].includes(decoded.role)) {
        return res.status(403).json({ error: 'Unauthorized' })
      }
    } catch {
      return res.status(401).json({ error: 'Invalid token' })
    }
    const body = req.body || {}
    let targetStudentId = body.studentId
    if (decoded.role === 'STUDENT') targetStudentId = decoded.studentId
    if (!targetStudentId) return res.status(400).json({ error: 'Student ID required' })
    if (decoded.role === 'STUDENT' && decoded.studentId !== targetStudentId) {
      return res.status(403).json({ error: 'Unauthorized - can only test your own notifications' })
    }
    const student = await prisma.student.findUnique({
      where: { id: targetStudentId },
      include: { pushTokens: { where: { isActive: true } } },
    })
    if (!student) return res.status(404).json({ error: 'Student not found' })
    if (student.pushTokens.length === 0) {
      return res.json({
        success: false,
        error: 'No active push tokens found for this student',
        message: 'Make sure the student has logged in to the mobile app and granted notification permissions',
      })
    }
    const testMessage = body.message || `Hi ${student.studentName}! This is a test notification from Tutori! 🧪`
    const result = await sendNotificationToStudent(targetStudentId, 'Tutori Test Notification', testMessage, { type: 'test', timestamp: new Date().toISOString() })
    res.json({
      success: result.success,
      message: 'Test notification sent',
      stats: { studentName: student.studentName, activeTokens: student.pushTokens.length, sent: result.sent, errors: result.errors },
      tokens: student.pushTokens.map((t) => ({ platform: t.platform, deviceId: t.deviceId, isActive: t.isActive })),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'test/push-notification')
  }
})

export default router
