import { Router } from 'express'
import {
  appVersionHandler,
  startupGetHandler,
  startupPostHandler,
  clearCacheHandler,
  errorLogHandler,
  mathFormatHandler,
  graphPlotPostHandler,
  graphPlotGetHandler,
} from '@/controllers/miscController'

const router = Router()

router.get('/app-version', appVersionHandler)
router.get('/startup', startupGetHandler)
router.post('/startup', startupPostHandler)
router.post('/clear-cache', clearCacheHandler)
router.post('/error-log', errorLogHandler)
router.post('/math/format', mathFormatHandler)
router.post('/graph/plot', graphPlotPostHandler)
router.get('/graph/plot', graphPlotGetHandler)

export default router
