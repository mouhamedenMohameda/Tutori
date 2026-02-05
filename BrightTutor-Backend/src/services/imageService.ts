function generateMockText(): string {
  return 'Mock extracted text from homework image.\n\nExercise 1: Solve for x.\nExercise 2: Simplify the expression.'
}

export type AnalyzeImageResult = {
  extractedText: string
  confidence: number
  usingMockOCR: boolean
}

export async function analyzeImageFromUrl(
  imageUrl: string
): Promise<AnalyzeImageResult> {
  try {
    // Fetch image from URL
    const response = await fetch(imageUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`)
    }
    const contentType = response.headers.get('content-type') || 'image/jpeg'
    const buffer = Buffer.from(await response.arrayBuffer())
    return await analyzeImage(buffer, contentType)
  } catch (error) {
    console.error('Error fetching image from URL:', error)
    return {
      extractedText: generateMockText(),
      confidence: 0.8,
      usingMockOCR: true,
    }
  }
}

export async function analyzeImage(
  buffer: Buffer,
  mimetype?: string
): Promise<AnalyzeImageResult> {
  if (!mimetype?.startsWith('image/')) {
    return {
      extractedText: generateMockText(),
      confidence: 0.8,
      usingMockOCR: true,
    }
  }
  const base64 = buffer.toString('base64')
  const apiKey = process.env.GOOGLE_VISION_API_KEY
  if (apiKey) {
    const visionResponse = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requests: [
            {
              image: { content: base64 },
              features: [{ type: 'DOCUMENT_TEXT_DETECTION', maxResults: 1 }],
              imageContext: { languageHints: ['en', 'fr', 'ar'] },
            },
          ],
        }),
      }
    )
    if (visionResponse.ok) {
      const visionResult = await visionResponse.json()
      const text =
        visionResult.responses?.[0]?.fullTextAnnotation?.text ||
        visionResult.responses?.[0]?.textAnnotations?.[0]?.description ||
        ''
      if (text) {
        return {
          extractedText: text,
          confidence: 0.95,
          usingMockOCR: false,
        }
      }
    }
  }
  return {
    extractedText: generateMockText(),
    confidence: 0.8,
    usingMockOCR: true,
  }
}
