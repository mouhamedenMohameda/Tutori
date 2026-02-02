import { Request, Response } from 'express'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { transcribe, synthesize } from '@/services/voiceService'

export async function transcribeHandler(req: Request, res: Response): Promise<void> {
  try {
    const file = (req as Request & { file?: { buffer: Buffer; mimetype?: string } }).file
    if (!file || !file.buffer) {
      res.status(400).json({ success: false, error: 'No audio file provided' })
      return
    }
    const text = await transcribe(file.buffer, file.mimetype)
    res.json({ success: true, transcription: text, confidence: 1.0 })
  } catch (error) {
    sendSanitizedError(res, error, 'voice/transcribe')
  }
}

export async function synthesizeHandler(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { text } = body
    if (!text) {
      res.status(400).json({ error: 'No text provided' })
      return
    }
    const audioBuffer = await synthesize(typeof text === 'string' ? text : String(text))
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': String(audioBuffer.byteLength),
    })
    res.send(Buffer.from(audioBuffer))
  } catch (error) {
    sendSanitizedError(res, error, 'voice/synthesize')
  }
}
