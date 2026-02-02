import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { getPushTestInfo, sendPushTest } from '@/services/testService'
import { getDataSource } from '@/config/data-source'
import { Student } from '@/entities'

const JWT_SECRET = () => getJWTSecret()

export async function pushNotificationGetHandler(
  _req: Request,
  res: Response
): Promise<void> {
  try {
    const info = await getPushTestInfo()
    res.json({
      success: true,
      ...info,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'test/push-notification')
  }
}

export async function pushNotificationPostHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Authentication required' })
      return
    }
    let decoded: { role?: string; studentId?: string }
    try {
      decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as {
        role?: string
        studentId?: string
      }
      if (!['STUDENT', 'TEACHER', 'ADMIN', 'SCHOOL_ADMIN'].includes(decoded.role ?? '')) {
        res.status(403).json({ error: 'Unauthorized' })
        return
      }
    } catch {
      res.status(401).json({ error: 'Invalid token' })
      return
    }
    const body = req.body || {}
    let targetStudentId = body.studentId
    if (decoded.role === 'STUDENT') targetStudentId = decoded.studentId
    if (!targetStudentId) {
      res.status(400).json({ error: 'Student ID required' })
      return
    }
    if (decoded.role === 'STUDENT' && decoded.studentId !== targetStudentId) {
      res.status(403).json({
        error: 'Unauthorized - can only test your own notifications',
      })
      return
    }
    const ds = await getDataSource()
    const student = await ds.getRepository(Student).findOne({
      where: { id: targetStudentId },
      relations: ['pushTokens'],
    })
    const activePushTokens = student?.pushTokens ? (student.pushTokens as { isActive: boolean }[]).filter((t: { isActive: boolean }) => t.isActive) : []
    if (!student) {
      res.status(404).json({ error: 'Student not found' })
      return
    }
    const result = await sendPushTest(targetStudentId, body.message)
    if (!result.success && 'error' in result) {
      res.json({
        success: false,
        error: result.error,
        message: result.message,
      })
      return
    }
    const successResult = result as { success: true; sent: number; errors: number }
    res.json({
      success: successResult.success,
      message: 'Test notification sent',
      stats: {
        studentName: student.studentName,
        activeTokens: activePushTokens.length,
        sent: successResult.sent,
        errors: successResult.errors,
      },
      tokens: activePushTokens.map((t: { platform?: string; deviceId?: string; isActive?: boolean }) => ({
        platform: t.platform,
        deviceId: t.deviceId,
        isActive: t.isActive,
      })),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'test/push-notification')
  }
}
