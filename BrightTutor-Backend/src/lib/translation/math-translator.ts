/**
 * Math Content Translator
 * 
 * Provides translation functionality for math/science/physics content
 * with aggressive caching and graceful fallbacks.
 * 
 * Designed for reliability and scalability across all subjects.
 */

interface TranslationCache {
  [key: string]: {
    translated: string
    timestamp: number
    language: 'fr' | 'ar'
  }
}

// In-memory cache (can be extended to localStorage or database later)
const translationCache: TranslationCache = {}
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours

/**
 * Generate cache key from text and language
 */
function getCacheKey(text: string, language: 'fr' | 'ar'): string {
  return `${language}:${text.substring(0, 100)}:${text.length}`
}

/**
 * Translate math content with caching and fallback
 * 
 * @param text - Text to translate
 * @param languagePreference - Target language ('fr' or 'ar')
 * @param subject - Subject name (for better translation context)
 * @returns Translated text (or original if translation fails)
 */
export async function translateMathContent(
  text: string,
  languagePreference: 'fr' | 'ar',
  subject: string = 'math'
): Promise<string> {
  // Return original if empty or already French
  if (!text || languagePreference === 'fr') {
    return text
  }

  // Check cache first
  const cacheKey = getCacheKey(text, languagePreference)
  const cached = translationCache[cacheKey]
  
  if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
    console.log('📦 Using cached translation')
    return cached.translated
  }

  try {
    // Call translation API with timeout protection
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
    
    const response = await fetch('/api/ai/translate-math-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        languagePreference,
        subject
      }),
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`Translation API returned ${response.status}`)
    }

    const data = await response.json()
    
    if (data.success && data.translatedText && data.translatedText.trim()) {
      // Cache the translation
      translationCache[cacheKey] = {
        translated: data.translatedText,
        timestamp: Date.now(),
        language: languagePreference
      }
      
      return data.translatedText
    } else {
      // Fallback to original
      console.warn('⚠️ Translation returned empty or failed, using original text')
      return text
    }
  } catch (error: any) {
    // Handle abort errors gracefully
    if (error.name === 'AbortError') {
      console.warn('⚠️ Translation timeout, using original text')
    } else {
      console.error('❌ Translation error:', error)
    }
    // CRITICAL: Always fallback to original on error
    return text
  }
}

/**
 * Translate an array of texts (for options, word banks, etc.)
 * 
 * @param texts - Array of texts to translate
 * @param languagePreference - Target language
 * @param subject - Subject name
 * @returns Array of translated texts
 */
export async function translateMathContentArray(
  texts: string[],
  languagePreference: 'fr' | 'ar',
  subject: string = 'math'
): Promise<string[]> {
  if (languagePreference === 'fr' || !texts || texts.length === 0) {
    return texts
  }

  // Translate in parallel (but with rate limiting in mind)
  const translations = await Promise.all(
    texts.map(text => translateMathContent(text, languagePreference, subject))
  )

  return translations
}

/**
 * Clear translation cache (useful for testing or forced refresh)
 */
export function clearTranslationCache(): void {
  Object.keys(translationCache).forEach(key => {
    delete translationCache[key]
  })
}

/**
 * Get cache statistics (useful for debugging)
 */
export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: Object.keys(translationCache).length,
    keys: Object.keys(translationCache)
  }
}
