import { Router } from 'express'
import { registerSimpleHandler } from '@/controllers/registerController'

const router = Router()

router.post('/register-simple', registerSimpleHandler)

export default router
