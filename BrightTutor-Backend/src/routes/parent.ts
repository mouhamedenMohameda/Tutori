import { Router } from 'express'
import {
  profileHandler,
  studentChatHandler,
  generateReportHandler,
  loginHandler,
} from '@/controllers/parentController'

const router = Router()

router.get('/profile', profileHandler)
router.post('/student-chat', studentChatHandler)
router.post('/generate-report', generateReportHandler)
router.post('/login', loginHandler)

export default router
