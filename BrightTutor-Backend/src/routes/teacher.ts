import { Router } from 'express'
import { loginHandler } from '@/controllers/teacherController'

const router = Router()

router.post('/login', loginHandler)

export default router
