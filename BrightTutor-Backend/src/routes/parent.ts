import { Router } from 'express'
import {
  profileHandler,
  profilePhotoHandler,
  dashboardHandler,
  studentChatHandler,
  generateReportHandler,
  loginHandler,
} from '@/controllers/parentController'

const router = Router()

router.get('/profile', profileHandler)
router.get('/dashboard', dashboardHandler)
router.get('/profile-photo/:parentId', profilePhotoHandler)
router.post('/student-chat', studentChatHandler)
router.post('/generate-report', generateReportHandler)
router.post('/login', loginHandler)

export default router
