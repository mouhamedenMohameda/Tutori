import { Request, Response } from 'express'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { analyzeImage, analyzeImageFromUrl } from '@/services/imageService'

export async function analyzeHandler(req: Request, res: Response): Promise<void> {
  try {
    const file = (req as Request & { file?: { buffer: Buffer; mimetype?: string } }).file
    const { imageUrl } = req.body || {}
    
    // Support both file upload and imageUrl
    if (imageUrl && typeof imageUrl === 'string') {
      // Fetch image from URL and analyze
      const result = await analyzeImageFromUrl(imageUrl)
      res.json({
        success: true,
        extractedText: result.extractedText,
        confidence: result.confidence,
        usingMockOCR: result.usingMockOCR,
      })
      return
    }
    
    if (!file || !file.buffer) {
      res.status(400).json({ success: false, error: 'No image file or imageUrl provided' })
      return
    }
    if (!file.mimetype?.startsWith('image/')) {
      res.status(400).json({ success: false, error: 'Only image files are allowed' })
      return
    }
    const result = await analyzeImage(file.buffer, file.mimetype)
    res.json({
      success: true,
      extractedText: result.extractedText,
      confidence: result.confidence,
      usingMockOCR: result.usingMockOCR,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'image/analyze')
  }
}
