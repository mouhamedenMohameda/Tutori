/**
 * Community routes: leaderboard, members, messages, search-students, unread-count, mark-as-read, student-classroom-year
 */
import { Router } from 'express'
import {
  leaderboardHandler,
  membersHandler,
  searchStudentsHandler,
  getMessagesHandler,
  postMessagesHandler,
  deleteMessageHandler,
  unreadCountHandler,
  markAsReadHandler,
  studentClassroomYearHandler,
} from '@/controllers/communityController'

const router = Router()

router.get('/leaderboard/:classroomYear', leaderboardHandler)
router.get('/members/:classroomYear', membersHandler)
router.get('/search-students', searchStudentsHandler)
router.get('/messages/:classroomYear', getMessagesHandler)
router.post('/messages', postMessagesHandler)
router.delete('/messages', deleteMessageHandler)
router.get('/unread-count/:studentId', unreadCountHandler)
router.post('/mark-as-read/:studentId', markAsReadHandler)
router.get('/student-classroom-year/:studentId', studentClassroomYearHandler)

export default router
