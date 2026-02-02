/**
 * Test routes: POST /push-notification
 */
import { Router } from 'express'
import { pushNotificationGetHandler, pushNotificationPostHandler } from '@/controllers/testController'

const router = Router()

router.get('/push-notification', pushNotificationGetHandler)
router.post('/push-notification', pushNotificationPostHandler)

export default router
