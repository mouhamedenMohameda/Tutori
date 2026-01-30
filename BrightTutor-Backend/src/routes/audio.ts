/**
 * Audio routes: speech-to-text, text-to-speech, GET /:filename
 */
import { Router, Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import OpenAI from 'openai'
import { validateFilename, validateFilePath } from '@/lib/security/injection-prevention'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 25 * 1024 * 1024 } }) // 25MB

function getOpenAI(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey || !apiKey.trim().startsWith('sk-')) {
    throw new Error('OPENAI_API_KEY is not configured')
  }
  return new OpenAI({ apiKey: apiKey.trim() })
}

function removeEmojis(text: string): string {
  return text
    .split('')
    .filter((char) => {
      const code = char.codePointAt(0)
      if (!code) return true
      return !(
        (code >= 0x1f600 && code <= 0x1f64f) ||
        (code >= 0x1f300 && code <= 0x1f5ff) ||
        (code >= 0x1f680 && code <= 0x1f6ff) ||
        (code >= 0x2600 && code <= 0x26ff) ||
        (code >= 0x2700 && code <= 0x27bf) ||
        (code >= 0x1f900 && code <= 0x1f9ff) ||
        (code >= 0xfe00 && code <= 0xfe0f) ||
        (code >= 0x200b && code <= 0x200d)
      )
    })
    .join('')
    .replace(/\s+/g, ' ')
    .trim()
}

// POST /audio/speech-to-text
router.post('/speech-to-text', upload.single('audio'), async (req: Request, res: Response) => {
  try {
    const file = (req as any).file
    if (!file || !file.buffer) {
      return res.status(400).json({ error: 'No audio file provided' })
    }
    if (file.size === 0) {
      return res.status(400).json({ error: 'Audio file is empty' })
    }
    const openai = getOpenAI()
    const blob = new Blob([file.buffer], { type: file.mimetype || 'audio/m4a' })
    const transcription = await openai.audio.transcriptions.create({
      file: blob as any,
      model: 'whisper-1',
      response_format: 'text',
    })
    const text = typeof transcription === 'string' ? transcription : (transcription as any).text
    res.json({ success: true, transcription: text, language: 'auto-detected' })
  } catch (error: any) {
    if (error?.message?.includes('OPENAI_API_KEY') || error?.status === 401) {
      return res.status(500).json({
        success: false,
        error: 'OpenAI API key is not configured correctly',
      })
    }
    sendSanitizedError(res, error, 'audio/speech-to-text')
  }
})

// POST /audio/text-to-speech
router.post('/text-to-speech', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { text, language } = body
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required and must be a string' })
    }
    let cleanText = removeEmojis(text)
    if (language === 'ar' || language === 'arabic') {
      cleanText = cleanText.replace(/([ا-ي])/g, '$1 ').replace(/\s+/g, ' ').trim()
    } else if (language === 'fr' || language === 'french') {
      cleanText = cleanText.replace(/\s+/g, ' ').trim()
    } else if (language === 'en' || language === 'english') {
      cleanText = cleanText.replace(/([.!?])\s*/g, '$1 ').replace(/\s+/g, ' ').trim()
    }
    if (cleanText.length === 0) {
      return res.status(400).json({ error: 'No text content after removing emojis' })
    }
    const openai = getOpenAI()
    const mp3 = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'nova',
      input: cleanText,
      response_format: 'mp3',
      speed: 1,
    })
    const buffer = Buffer.from(await mp3.arrayBuffer())
    res.set({ 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=3600' })
    res.send(buffer)
  } catch (error: any) {
    sendSanitizedError(res, error, 'audio/text-to-speech')
  }
})

// GET /audio/:filename
router.get('/:filename', async (req: Request, res: Response) => {
  try {
    const filename = req.params.filename
    if (!filename || typeof filename !== 'string') {
      return res.status(400).json({ error: 'Filename is required' })
    }
    const filenameValidation = validateFilename(filename)
    if (!filenameValidation.valid || !filenameValidation.sanitized) {
      return res.status(400).json({ error: 'Invalid filename' })
    }
    const allowedDir = path.join(process.cwd(), 'public', 'uploads', 'audio')
    const pathValidation = validateFilePath(filenameValidation.sanitized, allowedDir)
    if (!pathValidation.valid || !pathValidation.safePath) {
      return res.status(400).json({ error: 'Invalid file path' })
    }
    if (!fs.existsSync(pathValidation.safePath)) {
      return res.status(404).json({ error: 'Audio file not found' })
    }
    const fileBuffer = fs.readFileSync(pathValidation.safePath)
    const ext = filenameValidation.sanitized.split('.').pop()?.toLowerCase()
    const allowedExt = ['m4a', 'mp3', 'wav', 'aac']
    const contentTypeMap: Record<string, string> = {
      m4a: 'audio/m4a',
      mp3: 'audio/mpeg',
      wav: 'audio/wav',
      aac: 'audio/aac',
    }
    if (!ext || !allowedExt.includes(ext)) {
      return res.status(400).json({ error: 'Invalid file type. Only audio files are allowed.' })
    }
    res.set({
      'Content-Type': contentTypeMap[ext] || 'audio/m4a',
      'Content-Length': String(fileBuffer.length),
      'Cache-Control': 'public, max-age=31536000, immutable',
    })
    res.send(fileBuffer)
  } catch (error) {
    sendSanitizedError(res, error, 'audio/[filename]')
  }
})

export default router
