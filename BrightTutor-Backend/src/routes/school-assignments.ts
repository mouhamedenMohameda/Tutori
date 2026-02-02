/**
 * School assignments: GET (list all assignments for school)
 */
import { Router } from 'express'
import { getAssignmentsHandler } from '@/controllers/schoolAssignmentsController'

const router = Router()

router.get('/', getAssignmentsHandler)

export default router
