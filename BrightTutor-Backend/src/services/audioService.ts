import OpenAI from 'openai'
import path from 'path'
import fs from 'fs'
import {
  validateFilename,
  validateFilePath,
} from '@/lib/security/injection-prevention'

function getOpenAI(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey || !apiKey.trim().startsWith('sk-')) {
    throw new Error('OPENAI_API_KEY is not configured')
  }
  return new OpenAI({ apiKey: apiKey.trim() })
}

export function removeEmojis(text: string): string {
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

export async function speechToText(
  buffer: Buffer,
  mimetype?: string
): Promise<string> {
  const blob = new Blob([new Uint8Array(buffer)], { type: mimetype || 'audio/m4a' })
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

export async function textToSpeech(
  text: string,
  language?: string
): Promise<Buffer> {
  let cleanText = removeEmojis(text)
  if (language === 'ar' || language === 'arabic') {
    cleanText = cleanText.replace(/([ا-ي])/g, '$1 ').replace(/\s+/g, ' ').trim()
  } else if (language === 'fr' || language === 'french') {
    cleanText = cleanText.replace(/\s+/g, ' ').trim()
  } else if (language === 'en' || language === 'english') {
    cleanText = cleanText.replace(/([.!?])\s*/g, '$1 ').replace(/\s+/g, ' ').trim()
  }
  if (cleanText.length === 0) {
    throw new Error('No text content after removing emojis')
  }
  const openai = getOpenAI()
  const mp3 = await openai.audio.speech.create({
    model: 'tts-1',
    voice: 'nova',
    input: cleanText,
    response_format: 'mp3',
    speed: 1,
  })
  return Buffer.from(await mp3.arrayBuffer())
}

export function getAudioFile(filename: string): {
  buffer: Buffer
  contentType: string
} | null {
  const filenameValidation = validateFilename(filename)
  if (!filenameValidation.valid || !filenameValidation.sanitized) return null
  const allowedDir = path.join(process.cwd(), 'public', 'uploads', 'audio')
  const pathValidation = validateFilePath(
    filenameValidation.sanitized,
    allowedDir
  )
  if (!pathValidation.valid || !pathValidation.safePath) return null
  if (!fs.existsSync(pathValidation.safePath)) return null
  const fileBuffer = fs.readFileSync(pathValidation.safePath)
  const ext = filenameValidation.sanitized.split('.').pop()?.toLowerCase()
  const allowedExt = ['m4a', 'mp3', 'wav', 'aac']
  const contentTypeMap: Record<string, string> = {
    m4a: 'audio/m4a',
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    aac: 'audio/aac',
  }
  if (!ext || !allowedExt.includes(ext)) return null
  return {
    buffer: fileBuffer,
    contentType: contentTypeMap[ext] || 'audio/m4a',
  }
}
