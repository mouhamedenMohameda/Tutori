import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import OpenAI from 'openai';
import { validateGeminiApiKey } from './ai/gemini-utils';

// Lazy initialization - only create client when needed
let genAI: GoogleGenerativeAI | null = null;

const getGenAI = (): GoogleGenerativeAI => {
  if (!genAI) {
    const apiKey = validateGeminiApiKey();
    genAI = new GoogleGenerativeAI(apiKey);
  }
  return genAI;
};

// Get Gemini 2.0 Flash model (UPDATED: Modern configuration)
export const getGeminiModel = () => {
  return getGenAI().getGenerativeModel({ 
    model: "gemini-2.0-flash",
    generationConfig: {
      maxOutputTokens: 800,        // ✅ INCREASED FOR COMPLETE QUIZ RESPONSES
      temperature: 0.8,           // ✅ MORE NATURAL RESPONSES
      topP: 0.9,                  // ✅ BETTER CREATIVITY
      topK: 50                    // ✅ MORE VARIETY
    },
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, 
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      }
    ]
  });
};

// Internal function that returns both response and tokens
const _generateEducationalResponseWithTokens = async (prompt: string): Promise<{ response: string; tokensUsed: number }> => {
  try {
    console.log('🤖 Calling Gemini API...');
    const model = getGeminiModel();
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    
    // Estimate tokens: prompt + response
    const { estimateTokens } = await import('./ai/token-tracker');
    const promptTokens = estimateTokens(prompt);
    const responseTokens = estimateTokens(response);
    const totalTokens = promptTokens + responseTokens;
    
    console.log('✅ Gemini API success, response length:', response.length, `(${totalTokens} tokens estimated)`);
    return { response, tokensUsed: totalTokens };
  } catch (error: any) {
    console.error('❌ Gemini API Error Details:', {
      message: error.message,
      status: error.status,
      code: error.code,
      details: error.details,
      errorType: error.constructor.name,
      promptLength: prompt.length
    });
    
    // Check for API key errors
    if (error.message?.includes('API key not valid') || error.message?.includes('API_KEY_INVALID')) {
      console.error('🔥 GEMINI_API_KEY is invalid or not configured. Please check your .env.local file.');
      throw new Error(
        'GEMINI_API_KEY is invalid. Please set a valid API key in your .env.local file.\n' +
        'Get your API key from: https://makersuite.google.com/app/apikey'
      );
    }
    
    // Check for common Gemini errors
    if (error.message?.includes('500') || error.message?.includes('Internal error')) {
      console.error('🔥 Gemini 500 Internal Error - API may be overloaded or having issues');
    }
    if (error.message?.includes('RECITATION')) {
      console.error('🔥 Gemini blocked response due to potential copyright content');
    }
    if (error.message?.includes('SAFETY')) {
      console.error('🔥 Gemini blocked response due to safety filters');
    }
    
    // Re-throw the error instead of returning fallback
    // This allows the route handler to provide a better error message
    throw error;
  }
};

// Public function for backward compatibility (returns string)
export const generateEducationalResponse = async (prompt: string): Promise<string> => {
  const result = await _generateEducationalResponseWithTokens(prompt);
  return result.response;
};

// New function that returns response and tokens
export const generateEducationalResponseWithTokens = _generateEducationalResponseWithTokens;

/**
 * Generate streaming educational response
 * Returns an async generator that yields text chunks
 */
export const generateEducationalResponseStream = async function* (prompt: string) {
  try {
    console.log('🤖 Calling Gemini API (streaming)...');
    const model = getGeminiModel();
    const result = await model.generateContentStream(prompt);
    
    let fullResponse = '';
    
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      if (chunkText) {
        fullResponse += chunkText;
        yield chunkText;
      }
    }
    
    console.log('✅ Gemini streaming complete, total length:', fullResponse.length);
  } catch (error: any) {
    console.error('❌ Gemini Streaming API Error:', {
      message: error.message,
      status: error.status,
      code: error.code,
      details: error.details,
      errorType: error.constructor.name,
      promptLength: prompt.length
    });
    
    // Check for API key errors
    if (error.message?.includes('API key not valid') || error.message?.includes('API_KEY_INVALID')) {
      console.error('🔥 GEMINI_API_KEY is invalid or not configured. Please check your .env.local file.');
      throw new Error(
        'GEMINI_API_KEY is invalid. Please set a valid API key in your .env.local file.\n' +
        'Get your API key from: https://makersuite.google.com/app/apikey'
      );
    }
    
    // Check for common Gemini errors
    if (error.message?.includes('500') || error.message?.includes('Internal error')) {
      console.error('🔥 Gemini 500 Internal Error - API may be overloaded or having issues');
    }
    if (error.message?.includes('RECITATION')) {
      console.error('🔥 Gemini blocked response due to potential copyright content');
    }
    if (error.message?.includes('SAFETY')) {
      console.error('🔥 Gemini blocked response due to safety filters');
    }
    
    throw error;
  }
};

// Helper function to detect emotional state
export const analyzeEmotionalState = async (message: string) => {
  const prompt = `
Analyze the emotional state of this student message and respond with JSON only:
"${message}"

Return exactly this format:
{
  "emotion": "frustrated|excited|confused|engaged|struggling",
  "intensity": 0.1-1.0,
  "needsHelp": true|false,
  "responseStrategy": "direct_help|socratic_questioning|encouragement|challenge"
}`;

  try {
    const model = getGeminiModel();
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // 🔥 FIX: Clean up markdown code blocks and extract JSON
    let jsonText = responseText.trim();
    
    // Remove markdown code blocks if present
    if (jsonText.startsWith('```json')) {
      jsonText = jsonText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (jsonText.startsWith('```')) {
      jsonText = jsonText.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }
    
    // Clean up any extra whitespace
    jsonText = jsonText.trim();
    
    console.log('🧠 Emotional Analysis: Raw response:', jsonText);
    
    return JSON.parse(jsonText);
  } catch (error) {
    console.error('Emotion analysis error:', error);
    return {
      emotion: "neutral",
      intensity: 0.5,
      needsHelp: false,
      responseStrategy: "encouragement"
    };
  }
};

// Fallback to OpenAI if Gemini fails
export const generateResponseWithFallback = async (prompt: string) => {
  try {
    // Try Gemini first
    return await generateEducationalResponse(prompt);
  } catch (geminiError) {
    console.warn('Gemini failed, falling back to OpenAI:', geminiError);
    
    // Fallback to existing OpenAI (keep as backup)
    try {
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300,        // ✅ SHORTER RESPONSES
        temperature: 0.7,
      });
      return completion.choices[0].message?.content || "Sorry, I couldn't generate a response.";
    } catch (openaiError) {
      console.error('Both AI services failed:', openaiError);
      return "I'm temporarily having trouble responding. Please try again in a moment!";
    }
  }
};

// ========================================
// NEW: MODERN EDUCATIONAL RESPONSE GENERATOR
// Uses the new prompt system for consistent, concise responses
// ========================================

export const generateModernEducationalResponse = async (student: any, curriculum: any, conversationHistory: any[], message: string, selectedSubject?: string) => {
  try {
    // Simple fallback since we're using SimpleTutorSystem now
    const model = getGeminiModel();
    const result = await model.generateContent([
      { text: `You are a helpful AI tutor. Respond naturally to: ${message}` }
    ]);
    
    return result.response.text();
  } catch (error) {
    console.error('Educational response error:', error);
    // Fallback to existing method
    return await generateEducationalResponse(message);
  }
}; 