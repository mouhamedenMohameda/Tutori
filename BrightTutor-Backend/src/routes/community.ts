/**
 * Community routes: leaderboard (implemented), others return 503 (disabled)
 */
import { Router } from 'express'
import {
  leaderboardHandler,
  disabledHandler,
} from '@/controllers/communityController'

const router = Router()

router.get('/leaderboard/:classroomYear', leaderboardHandler)
router.post('/mark-as-read/:studentId', disabledHandler)
router.get('/members/:classroomYear', disabledHandler)
router.get('/messages', disabledHandler)
router.get('/messages/:classroomYear', disabledHandler)
router.post('/messages', disabledHandler)
router.post('/search-students', disabledHandler)
router.get('/student-classroom-year/:studentId', disabledHandler)
router.get('/unread-count/:studentId', disabledHandler)

export default router
