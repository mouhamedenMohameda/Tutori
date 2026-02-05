/**
 * Image route: POST /analyze (OCR via Google Vision or mock)
 * Supports both file upload and imageUrl in JSON body
 */
import { Router } from 'express'
import multer from 'multer'
import { analyzeHandler } from '@/controllers/imageController'

const router = Router()
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
})

// Use optional file upload - allows both file upload and JSON body with imageUrl
router.post('/analyze', upload.single('image'), analyzeHandler)

export default router
