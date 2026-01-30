/**
 * Image route: POST /analyze (OCR via Google Vision or mock)
 */
import { Router, Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } }) // 10MB

function generateMockText(): string {
  return 'Mock extracted text from homework image.\n\nExercise 1: Solve for x.\nExercise 2: Simplify the expression.'
}

// POST /image/analyze
router.post('/analyze', upload.single('image'), async (req: Request, res: Response) => {
  try {
    const file = (req as any).file
    if (!file || !file.buffer) {
      return res.status(400).json({ success: false, error: 'No image file provided' })
    }
    if (!file.mimetype?.startsWith('image/')) {
      return res.status(400).json({ success: false, error: 'Only image files are allowed' })
    }
    const base64 = file.buffer.toString('base64')
    const apiKey = process.env.GOOGLE_VISION_API_KEY
    if (apiKey) {
      const visionResponse = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            requests: [{
              image: { content: base64 },
              features: [{ type: 'DOCUMENT_TEXT_DETECTION', maxResults: 1 }],
              imageContext: { languageHints: ['en', 'fr', 'ar'] },
            }],
          }),
        }
      )
      if (visionResponse.ok) {
        const visionResult = await visionResponse.json()
        const text = visionResult.responses?.[0]?.fullTextAnnotation?.text || visionResult.responses?.[0]?.textAnnotations?.[0]?.description || ''
        if (text) {
          return res.json({ success: true, extractedText: text, confidence: 0.95, usingMockOCR: false })
        }
      }
    }
    const mockText = generateMockText()
    res.json({ success: true, extractedText: mockText, confidence: 0.8, usingMockOCR: true })
  } catch (error) {
    sendSanitizedError(res, error, 'image/analyze')
  }
})

export default router
