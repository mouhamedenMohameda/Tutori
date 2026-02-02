import { Router } from 'express'
import {
  getClassesHandler,
  postClassesHandler,
  getClassByIdHandler,
  deleteClassByIdHandler,
  getDashboardStatsHandler,
  getRecentActivityHandler,
  getClassPerformanceHandler,
  getStudentsHandler,
  getStudentByIdHandler,
  postStudentsHandler,
  getParentsSearchHandler,
  getParentByIdHandler,
  getTeacherByIdHandler,
  migrateDatabaseHandler,
} from '@/controllers/adminController'

const router = Router()

router.get('/classes', getClassesHandler)
router.post('/classes', postClassesHandler)
router.get('/classes/:id', getClassByIdHandler)
router.delete('/classes/:id', deleteClassByIdHandler)
router.get('/dashboard/stats', getDashboardStatsHandler)
router.get('/dashboard/recent-activity', getRecentActivityHandler)
router.get('/dashboard/class-performance', getClassPerformanceHandler)
router.get('/students', getStudentsHandler)
router.get('/students/:id', getStudentByIdHandler)
router.post('/students', postStudentsHandler)
router.get('/parents/search', getParentsSearchHandler)
router.get('/parents/:id', getParentByIdHandler)
router.get('/teachers/:id', getTeacherByIdHandler)
router.post('/migrate-database', migrateDatabaseHandler)

export default router
