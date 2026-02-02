import OpenAI from 'openai'
import { synthesizeSpeech } from '@/lib/voice'

function getOpenAI(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey || !apiKey.trim().startsWith('sk-')) {
    throw new Error('OPENAI_API_KEY is not configured')
  }
  return new OpenAI({ apiKey: apiKey.trim() })
}

export async function transcribe(buffer: Buffer, mimetype?: string): Promise<string> {
  const blob = new Blob([new Uint8Array(buffer)], { type: mimetype || 'audio/webm' })
  const openai = getOpenAI()
  const transcription = await openai.audio.transcriptions.create({
    file: blob as unknown as File,
    model: 'whisper-1',
    response_format: 'text',
  })
  return typeof transcription === 'string'
    ? transcription
    : (transcription as { text?: string }).text ?? ''
}

export async function synthesize(text: string): Promise<ArrayBuffer> {
  return synthesizeSpeech(typeof text === 'string' ? text : String(text))
}
