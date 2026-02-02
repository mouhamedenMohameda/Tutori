/**
 * Voice routes: transcribe, synthesize
 */
import { Router } from 'express'
import multer from 'multer'
import { transcribeHandler, synthesizeHandler } from '@/controllers/voiceController'

const router = Router()
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 },
})

router.post('/transcribe', upload.single('audio'), transcribeHandler)
router.post('/synthesize', synthesizeHandler)

export default router
