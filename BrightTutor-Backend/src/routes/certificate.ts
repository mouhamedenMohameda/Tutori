/**
 * Certificate routes: generate, test
 */
import { Router } from 'express'
import { generateHandler, testHandler } from '@/controllers/certificateController'

const router = Router()

router.post('/generate', generateHandler)
router.get('/test', testHandler)

export default router
