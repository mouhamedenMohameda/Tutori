/**
 * Cron routes: daily-notifications, inactive-reminders
 */
import { Router, Request, Response } from 'express'
import { prisma } from '@/lib/prisma'
import { sendDailyReminderNotification } from '@/lib/push-notifications'
import { sendInactiveReminderNotification } from '@/lib/push-notifications'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const CRON_SECRET = process.env.CRON_SECRET || 'your-cron-secret-change-in-production'

function requireCronSecret(req: Request, res: Response): boolean {
  const authHeader = req.headers.authorization
  if (authHeader && authHeader !== `Bearer ${CRON_SECRET}`) {
    res.status(401).json({ error: 'Unauthorized' })
    return false
  }
  return true
}

// POST /cron/daily-notifications
router.post('/daily-notifications', async (req: Request, res: Response) => {
  try {
    if (!requireCronSecret(req, res)) return
    const activeTokenRecords = await prisma.studentPushToken.findMany({
      where: { isActive: true },
      select: { studentId: true },
      distinct: ['studentId'],
    })
    const studentIdsWithTokens = activeTokenRecords.map((t: { studentId: string }) => t.studentId)
    if (studentIdsWithTokens.length === 0) {
      return res.json({ success: true, message: 'No students with active push tokens', sent: 0, errors: 0 })
    }
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const now = new Date()
    const allStudentsWithTokens = await prisma.student.findMany({
      where: { isActive: true, id: { in: studentIdsWithTokens } },
      include: {
        pushTokens: { where: { isActive: true } },
        quizSessions: {
          where: { startTime: { gte: today, lte: now }, status: 'completed' },
          take: 1,
        },
        conversations: {
          where: { timestamp: { gte: today, lte: now } },
          take: 1,
        },
      },
    })
    const inactiveStudents = allStudentsWithTokens.filter((s: any) => {
      const hasQuiz = (s.quizSessions?.length || 0) > 0
      const hasChat = (s.conversations?.length || 0) > 0
      return !hasQuiz && !hasChat
    })
    if (inactiveStudents.length === 0) {
      return res.json({
        success: true,
        message: 'All students with push tokens were active today - no notifications needed',
        sent: 0,
        errors: 0,
        skipped: allStudentsWithTokens.length,
      })
    }
    let totalSent = 0
    let totalErrors = 0
    const results: Array<{ studentId: string; success: boolean; error?: string }> = []
    for (const student of inactiveStudents) {
      try {
        const result = await sendDailyReminderNotification(student.id, student.studentName)
        totalSent += result.sent
        totalErrors += result.errors
        results.push({
          studentId: student.id,
          success: result.success,
          error: result.errors > 0 ? 'Some devices failed' : undefined,
        })
        await new Promise((r) => setTimeout(r, 100))
      } catch (err: any) {
        totalErrors++
        results.push({ studentId: student.id, success: false, error: err?.message })
      }
    }
    res.json({
      success: true,
      message: 'Daily notifications sent (only to inactive students)',
      stats: {
        totalStudentsWithTokens: allStudentsWithTokens.length,
        inactiveStudents: inactiveStudents.length,
        activeStudentsSkipped: allStudentsWithTokens.length - inactiveStudents.length,
        totalSent,
        totalErrors,
        successRate: totalSent + totalErrors > 0 ? ((totalSent / (totalSent + totalErrors)) * 100).toFixed(2) + '%' : '0%',
      },
      results: results.slice(0, 10),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'cron/daily-notifications')
  }
})

// POST /cron/inactive-reminders
router.post('/inactive-reminders', async (req: Request, res: Response) => {
  try {
    if (!requireCronSecret(req, res)) return
    const activeTokenRecords = await prisma.studentPushToken.findMany({
      where: { isActive: true },
      select: { studentId: true },
      distinct: ['studentId'],
    })
    const studentIdsWithTokens = activeTokenRecords.map((t: { studentId: string }) => t.studentId)
    if (studentIdsWithTokens.length === 0) {
      return res.json({ success: true, message: 'No students with active push tokens', sent: 0, errors: 0 })
    }
    const tenHoursAgo = new Date(Date.now() - 10 * 60 * 60 * 1000)
    const inactiveStudents = await prisma.student.findMany({
      where: {
        isActive: true,
        id: { in: studentIdsWithTokens },
        OR: [{ lastLogin: null }, { lastLogin: { lt: tenHoursAgo } }],
      },
      include: { pushTokens: { where: { isActive: true } } },
    })
    const studentsToNotify = inactiveStudents.filter((s: any) => (s.pushTokens?.length || 0) > 0)
    if (studentsToNotify.length === 0) {
      return res.json({ success: true, message: 'No students to notify', sent: 0, errors: 0 })
    }
    let totalSent = 0
    let totalErrors = 0
    const results: Array<{ studentId: string; studentName: string; success: boolean; error?: string }> = []
    for (const student of studentsToNotify) {
      try {
        const result = await sendInactiveReminderNotification(student.id, student.studentName)
        totalSent += result.sent
        totalErrors += result.errors
        results.push({
          studentId: student.id,
          studentName: student.studentName,
          success: result.success,
          error: result.errors > 0 ? 'Some devices failed' : undefined,
        })
        await new Promise((r) => setTimeout(r, 100))
      } catch (err: any) {
        totalErrors++
        results.push({
          studentId: student.id,
          studentName: student.studentName,
          success: false,
          error: err?.message,
        })
      }
    }
    res.json({
      success: true,
      message: '10-hour inactive reminders sent',
      stats: {
        totalStudentsWithTokens: studentsToNotify.length,
        totalSent,
        totalErrors,
        successRate: totalSent + totalErrors > 0 ? ((totalSent / (totalSent + totalErrors)) * 100).toFixed(2) + '%' : '0%',
      },
      results: results.slice(0, 20),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'cron/inactive-reminders')
  }
})

export default router
