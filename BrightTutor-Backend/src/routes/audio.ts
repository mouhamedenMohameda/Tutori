/**
 * Audio routes: speech-to-text, text-to-speech, GET /:filename
 */
import { Router } from 'express'
import multer from 'multer'
import {
  speechToTextHandler,
  textToSpeechHandler,
  getAudioHandler,
} from '@/controllers/audioController'

const router = Router()
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 },
})

router.post('/speech-to-text', upload.single('audio'), speechToTextHandler)
router.post('/text-to-speech', textToSpeechHandler)
router.get('/:filename', getAudioHandler)

export default router
