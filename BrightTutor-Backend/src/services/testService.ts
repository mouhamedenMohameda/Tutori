import { In } from 'typeorm'
import { AppDataSource } from '@/config/data-source'
import { StudentPushToken, Student } from '@/entities'
import { sendNotificationToStudent } from '@/lib/push-notifications'

export type PushTestStats = {
  activePushTokens: number
  activeStudentsWithTokens: number
}

export async function getPushTestInfo(): Promise<{
  message: string
  endpoint: string
  usage: { method: string; headers: Record<string, string>; body: Record<string, string> }
  stats: PushTestStats
}> {
  const tokenRepo = AppDataSource.getRepository(StudentPushToken)
  const studentRepo = AppDataSource.getRepository(Student)
  const activeTokensCount = await tokenRepo.count({ where: { isActive: true } })
  const activeTokens = await tokenRepo.find({
    where: { isActive: true },
    select: ['studentId'],
  })
  const uniqueStudentIds = [...new Set(activeTokens.map((t) => t.studentId))]
  const activeStudentsCount =
    uniqueStudentIds.length > 0
      ? await studentRepo.count({
          where: { isActive: true, id: In(uniqueStudentIds) },
        })
      : 0
  return {
    message: 'Push notification test endpoint is active',
    endpoint: 'POST /api/test/push-notification',
    usage: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer <JWT_TOKEN>',
        'Content-Type': 'application/json',
      },
      body: { studentId: 'string (required)', message: 'string (optional)' },
    },
    stats: {
      activePushTokens: activeTokensCount,
      activeStudentsWithTokens: activeStudentsCount,
    },
  }
}

export type SendPushTestResult =
  | { success: true; sent: number; errors: number }
  | { success: false; error: string; message: string }

export async function sendPushTest(
  targetStudentId: string,
  message: string
): Promise<SendPushTestResult> {
  const studentRepo = AppDataSource.getRepository(Student)
  const student = await studentRepo.findOne({
    where: { id: targetStudentId },
    relations: ['pushTokens'],
  })
  if (!student) {
    return { success: false, error: 'Student not found', message: '' }
  }
  const activeTokens = (student.pushTokens ?? []).filter((t) => t.isActive)
  if (activeTokens.length === 0) {
    return {
      success: false,
      error: 'No active push tokens found for this student',
      message:
        'Make sure the student has logged in to the mobile app and granted notification permissions',
    }
  }
  const testMessage =
    message || `Hi ${student.studentName}! This is a test notification from Tutori! 🧪`
  const result = await sendNotificationToStudent(
    targetStudentId,
    'Tutori Test Notification',
    testMessage,
    { type: 'test', timestamp: new Date().toISOString() }
  )
  return {
    success: true as const,
    sent: result.sent ?? 0,
    errors: result.errors ?? 0,
  }
}

