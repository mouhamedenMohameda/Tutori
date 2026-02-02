import { Router } from 'express'
import { loginHandler } from '@/controllers/studentController'

const router = Router()

router.post('/login', loginHandler)

export default router
