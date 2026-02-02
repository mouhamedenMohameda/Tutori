import { Request, Response } from 'express'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import {
  speechToText,
  textToSpeech,
  getAudioFile,
} from '@/services/audioService'

export async function speechToTextHandler(req: Request, res: Response): Promise<void> {
  try {
    const file = (req as Request & { file?: { buffer: Buffer; mimetype?: string; size?: number } }).file
    if (!file || !file.buffer) {
      res.status(400).json({ error: 'No audio file provided' })
      return
    }
    if (file.size === 0) {
      res.status(400).json({ error: 'Audio file is empty' })
      return
    }
    const text = await speechToText(file.buffer, file.mimetype)
    res.json({ success: true, transcription: text, language: 'auto-detected' })
  } catch (error: unknown) {
    const err = error as { message?: string; status?: number }
    if (
      err?.message?.includes('OPENAI_API_KEY') ||
      err?.status === 401
    ) {
      res.status(500).json({
        success: false,
        error: 'OpenAI API key is not configured correctly',
      })
      return
    }
    sendSanitizedError(res, error, 'audio/speech-to-text')
  }
}

export async function textToSpeechHandler(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { text, language } = body
    if (!text || typeof text !== 'string') {
      res.status(400).json({ error: 'Text is required and must be a string' })
      return
    }
    const buffer = await textToSpeech(text, language)
    res.set({
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=3600',
    })
    res.send(buffer)
  } catch (error) {
    sendSanitizedError(res, error, 'audio/text-to-speech')
  }
}

export async function getAudioHandler(req: Request, res: Response): Promise<void> {
  try {
    const filename = req.params.filename
    if (!filename || typeof filename !== 'string') {
      res.status(400).json({ error: 'Filename is required' })
      return
    }
    const result = getAudioFile(filename)
    if (!result) {
      res.status(404).json({ error: 'Audio file not found' })
      return
    }
    res.set({
      'Content-Type': result.contentType,
      'Content-Length': String(result.buffer.length),
      'Cache-Control': 'public, max-age=31536000, immutable',
    })
    res.send(result.buffer)
  } catch (error) {
    sendSanitizedError(res, error, 'audio/[filename]')
  }
}
