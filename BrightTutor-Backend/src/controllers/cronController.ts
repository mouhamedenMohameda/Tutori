import { Request, Response } from 'express'
import { sendSanitizedError, sendError } from '@/lib/security/error-sanitizer'
import { runDailyNotifications, runInactiveReminders } from '@/services/cronService'

const CRON_SECRET = process.env.CRON_SECRET || 'your-cron-secret-change-in-production'

export function requireCronSecret(req: Request, res: Response): boolean {
  const authHeader = req.headers.authorization
  if (!authHeader || authHeader !== `Bearer ${CRON_SECRET}`) {
    sendError(res, 401, 'Unauthorized', 'AUTH_REQUIRED')
    return false
  }
  return true
}

export async function dailyNotificationsHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (!requireCronSecret(req, res)) return
    const result = await runDailyNotifications()
    res.json({
      success: true,
      message: result.message,
      sent: result.sent,
      errors: result.errors,
      stats: result.stats,
      results: result.results,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'cron/daily-notifications')
  }
}

export async function inactiveRemindersHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (!requireCronSecret(req, res)) return
    const result = await runInactiveReminders()
    res.json({
      success: true,
      message: result.message,
      sent: result.sent,
      errors: result.errors,
      stats: result.stats,
      results: result.results,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'cron/inactive-reminders')
  }
}
