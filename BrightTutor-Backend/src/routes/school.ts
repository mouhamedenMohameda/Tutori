import { Router } from 'express'
import {
  loginHandler,
  getTeachersHandler,
  postTeachersHandler,
  getStudentsSearchHandler,
  getStudentsHandler,
  postStudentsHandler,
} from '@/controllers/schoolController'

const router = Router()

router.post('/login', loginHandler)
router.get('/teachers', getTeachersHandler)
router.post('/teachers', postTeachersHandler)
router.get('/students/search', getStudentsSearchHandler)
router.get('/students', getStudentsHandler)
router.post('/students', postStudentsHandler)

export default router
