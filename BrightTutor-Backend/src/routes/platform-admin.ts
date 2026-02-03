/**
 * Platform-admin routes: auth, analytics, schools (manage, cleanup, update-status, details, student-count), stats, student-created-schools
 */
import { Router } from 'express'
import {
  auth,
  dashboard,
  analytics,
  analyticsDebug,
  schoolsList,
  schoolsManage,
  schoolsCleanup,
  schoolsUpdateStatusPut,
  schoolsUpdateStatusPost,
  schoolDetails,
  schoolStudentCount,
  stats,
  studentCreatedSchools,
} from '@/controllers/platformAdminController'

const router = Router()

// POST /platform-admin/auth
router.post('/auth', auth)

// GET /platform-admin/dashboard — aggregate for mobile app
router.get('/dashboard', dashboard)

// GET /platform-admin/analytics
router.get('/analytics', analytics)

// GET /platform-admin/analytics/debug
router.get('/analytics/debug', analyticsDebug)

// GET /platform-admin/schools
router.get('/schools', schoolsList)

// POST /platform-admin/schools/manage
router.post('/schools/manage', schoolsManage)

// POST /platform-admin/schools/cleanup
router.post('/schools/cleanup', schoolsCleanup)

// PUT /platform-admin/schools/update-status
router.put('/schools/update-status', schoolsUpdateStatusPut)

// POST /platform-admin/schools/update-status (alias for mobile app)
router.post('/schools/update-status', schoolsUpdateStatusPost)

// GET /platform-admin/schools/:schoolId/details
router.get('/schools/:schoolId/details', schoolDetails)

// GET /platform-admin/schools/:schoolId/student-count
router.get('/schools/:schoolId/student-count', schoolStudentCount)

// GET /platform-admin/stats
router.get('/stats', stats)

// GET /platform-admin/student-created-schools
router.get('/student-created-schools', studentCreatedSchools)

export default router
