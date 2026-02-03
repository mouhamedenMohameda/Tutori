import { Router } from 'express'
import {
  loginHandler,
  getTeachersHandler,
  getTeachersSearchHandler,
  postTeachersHandler,
  getStudentsSearchHandler,
  getStudentsHandler,
  postStudentsHandler,
  getDashboardHandler,
  getStatsHandler,
} from '@/controllers/schoolController'

const router = Router()

router.post('/login', loginHandler)
router.get('/dashboard', getDashboardHandler)
router.get('/stats', getStatsHandler)
router.get('/teachers', getTeachersHandler)
router.get('/teachers/search', getTeachersSearchHandler)
router.post('/teachers', postTeachersHandler)
router.get('/students/search', getStudentsSearchHandler)
router.get('/students', getStudentsHandler)
router.post('/students', postStudentsHandler)

export default router
