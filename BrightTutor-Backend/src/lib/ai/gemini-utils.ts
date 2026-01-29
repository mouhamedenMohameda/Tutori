/**
 * Shared utilities for Gemini API configuration
 */

/**
 * Validates and returns the Gemini API key
 * Throws a descriptive error if the key is missing or invalid
 */
export function validateGeminiApiKey(): string {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error(
      'GEMINI_API_KEY is not configured. Please set GEMINI_API_KEY in your .env.local file.\n' +
      'Get your API key from: https://makersuite.google.com/app/apikey'
    );
  }
  
  // Trim whitespace and remove quotes if present
  const trimmedKey = apiKey.trim().replace(/^["']|["']$/g, '');
  
  if (!trimmedKey || trimmedKey.length === 0) {
    throw new Error(
      'GEMINI_API_KEY is empty. Please set a valid API key in your .env.local file.\n' +
      'Get your API key from: https://makersuite.google.com/app/apikey'
    );
  }
  
  // Check if it's a placeholder value (exact match or contains placeholder text)
  const placeholderPatterns = [
    'your_gemini_api_key_here',
    'your-api-key-here',
    'your_gemini_api_key',
    'placeholder',
    'example',
    'test'
  ];
  
  const lowerKey = trimmedKey.toLowerCase();
  
  // Check for exact placeholder matches
  if (placeholderPatterns.some(pattern => lowerKey === pattern || lowerKey === `"${pattern}"` || lowerKey === `'${pattern}'`)) {
    throw new Error(
      'GEMINI_API_KEY is set to a placeholder value. Please set a valid API key in your .env.local file.\n' +
      'Get your API key from: https://makersuite.google.com/app/apikey'
    );
  }
  
  // Check if it contains placeholder text (but allow if it's part of a valid key)
  // Valid Google API keys typically start with "AIzaSy" and are 39+ characters
  const isValidFormat = trimmedKey.startsWith('AIzaSy') && trimmedKey.length >= 39;
  
  if (!isValidFormat && placeholderPatterns.some(pattern => lowerKey.includes(pattern))) {
    throw new Error(
      'GEMINI_API_KEY appears to be a placeholder. Please set a valid API key in your .env.local file.\n' +
      'Get your API key from: https://makersuite.google.com/app/apikey\n' +
      'Valid API keys typically start with "AIzaSy" and are 39+ characters long.'
    );
  }
  
  // Warn if format doesn't look like a valid Google API key (but don't block - might be valid)
  if (!isValidFormat && trimmedKey.length < 20) {
    console.warn('⚠️ GEMINI_API_KEY format looks unusual. Valid keys typically start with "AIzaSy" and are 39+ characters.');
  }
  
  return trimmedKey;
}
