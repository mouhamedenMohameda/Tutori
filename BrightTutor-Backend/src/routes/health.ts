import { Router } from 'express'
import { healthHandler, healthCheckSimple } from '@/controllers/healthController'

const router = Router()

router.get('/health', healthHandler)
router.get('/health-check', healthCheckSimple)

export default router
