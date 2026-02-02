import { Router } from 'express'
import { listHandler, importCsvHandler } from '@/controllers/schoolsController'

const router = Router()

router.get('/list', listHandler)
router.post('/import-csv', importCsvHandler)

export default router
