import { Router } from 'express'
import {
  getClassesHandler,
  postClassesHandler,
  getClassByIdHandler,
  putClassByIdHandler,
  deleteClassByIdHandler,
  getDashboardHandler,
  getDashboardStatsHandler,
  getRecentActivityHandler,
  getClassPerformanceHandler,
  getStudentsHandler,
  getStudentsSearchHandler,
  getStudentByIdHandler,
  postStudentsHandler,
  putStudentByIdHandler,
  deleteStudentByIdHandler,
  getParentsSearchHandler,
  getParentByIdHandler,
  putParentByIdHandler,
  deleteParentByIdHandler,
  getTeacherByIdHandler,
  putTeacherByIdHandler,
  deleteTeacherByIdHandler,
  migrateDatabaseHandler,
} from '@/controllers/adminController'

const router = Router()

router.get('/classes', getClassesHandler)
router.post('/classes', postClassesHandler)
router.get('/classes/:id', getClassByIdHandler)
router.put('/classes/:id', putClassByIdHandler)
router.delete('/classes/:id', deleteClassByIdHandler)
router.get('/dashboard', getDashboardHandler)
router.get('/dashboard/stats', getDashboardStatsHandler)
router.get('/dashboard/recent-activity', getRecentActivityHandler)
router.get('/dashboard/class-performance', getClassPerformanceHandler)
router.get('/students', getStudentsHandler)
router.get('/students/search', getStudentsSearchHandler)
router.get('/students/:id', getStudentByIdHandler)
router.post('/students', postStudentsHandler)
router.put('/students/:id', putStudentByIdHandler)
router.delete('/students/:id', deleteStudentByIdHandler)
router.get('/parents/search', getParentsSearchHandler)
router.get('/parents/:id', getParentByIdHandler)
router.put('/parents/:id', putParentByIdHandler)
router.delete('/parents/:id', deleteParentByIdHandler)
router.get('/teachers/:id', getTeacherByIdHandler)
router.put('/teachers/:id', putTeacherByIdHandler)
router.delete('/teachers/:id', deleteTeacherByIdHandler)
router.post('/migrate-database', migrateDatabaseHandler)

export default router
