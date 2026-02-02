/**
 * School classes: GET, POST, PUT, DELETE
 */
import { Router } from 'express'
import {
  getClassesHandler,
  postClassesHandler,
  putClassesHandler,
  deleteClassesHandler,
} from '@/controllers/schoolClassesController'

const router = Router()

router.get('/', getClassesHandler)
router.post('/', postClassesHandler)
router.put('/', putClassesHandler)
router.delete('/', deleteClassesHandler)

export default router
