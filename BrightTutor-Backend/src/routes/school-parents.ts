/**
 * School parents: GET, POST, PUT, DELETE, GET /search, POST /assign-students
 */
import { Router } from 'express'
import {
  searchHandler,
  assignStudentsHandler,
  getParentsHandler,
  postParentsHandler,
  putParentsHandler,
  deleteParentsHandler,
} from '@/controllers/schoolParentsController'

const router = Router()

router.get('/search', searchHandler)
router.post('/assign-students', assignStudentsHandler)
router.get('/', getParentsHandler)
router.post('/', postParentsHandler)
router.put('/', putParentsHandler)
router.delete('/', deleteParentsHandler)

export default router
