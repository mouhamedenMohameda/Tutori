import { Router } from 'express'
import { registerHandler, loginGetHandler, loginPostHandler } from '@/controllers/authController'

const router = Router()

router.post('/register', registerHandler)
router.get('/login', loginGetHandler)
router.post('/login', loginPostHandler)

export default router
