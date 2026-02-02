/**
 * Cron routes: daily-notifications, inactive-reminders
 */
import { Router } from 'express'
import {
  dailyNotificationsHandler,
  inactiveRemindersHandler,
} from '@/controllers/cronController'

const router = Router()

router.post('/daily-notifications', dailyNotificationsHandler)
router.post('/inactive-reminders', inactiveRemindersHandler)

export default router
