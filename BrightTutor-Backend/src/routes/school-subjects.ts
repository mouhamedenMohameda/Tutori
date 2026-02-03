/**
 * School subjects: GET (POST disabled - subjects auto-assigned with classes)
 */
import { Router } from 'express'
import {
  getSubjectsHandler,
  getSubjectByIdHandler,
  postSubjectsDisabledHandler,
} from '@/controllers/schoolSubjectsController'

const router = Router()

router.get('/', getSubjectsHandler)
router.get('/:subjectId', getSubjectByIdHandler)
router.post('/', postSubjectsDisabledHandler)

export default router
