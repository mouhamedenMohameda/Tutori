/**
 * Voice routes: transcribe, synthesize
 */
import { Router, Request, Response } from 'express'
import multer from 'multer'
import OpenAI from 'openai'
import { synthesizeSpeech } from '@/lib/voice'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 25 * 1024 * 1024 } })

function getOpenAI(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey || !apiKey.trim().startsWith('sk-')) {
    throw new Error('OPENAI_API_KEY is not configured')
  }
  return new OpenAI({ apiKey: apiKey.trim() })
}

// POST /voice/transcribe — formData with 'audio' file
router.post('/transcribe', upload.single('audio'), async (req: Request, res: Response) => {
  try {
    const file = (req as any).file
    if (!file || !file.buffer) {
      return res.status(400).json({ success: false, error: 'No audio file provided' })
    }
    const blob = new Blob([file.buffer], { type: file.mimetype || 'audio/webm' })
    const openai = getOpenAI()
    const transcription = await openai.audio.transcriptions.create({
      file: blob as any,
      model: 'whisper-1',
      response_format: 'text',
    })
    const text = typeof transcription === 'string' ? transcription : (transcription as any).text
    res.json({ success: true, transcription: text, confidence: 1.0 })
  } catch (error) {
    sendSanitizedError(res, error, 'voice/transcribe')
  }
})

// POST /voice/synthesize — JSON { text }
router.post('/synthesize', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { text } = body
    if (!text) {
      return res.status(400).json({ error: 'No text provided' })
    }
    const audioBuffer = await synthesizeSpeech(typeof text === 'string' ? text : String(text))
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': String(audioBuffer.byteLength),
    })
    res.send(Buffer.from(audioBuffer))
  } catch (error) {
    sendSanitizedError(res, error, 'voice/synthesize')
  }
})

export default router
