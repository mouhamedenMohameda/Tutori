/**
 * Image route: POST /analyze (OCR via Google Vision or mock)
 */
import { Router } from 'express'
import multer from 'multer'
import { analyzeHandler } from '@/controllers/imageController'

const router = Router()
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
})

router.post('/analyze', upload.single('image'), analyzeHandler)

export default router
