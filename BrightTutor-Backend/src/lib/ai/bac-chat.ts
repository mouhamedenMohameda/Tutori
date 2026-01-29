import { generateEducationalResponse } from '@/lib/gemini';
import { getBacTutorSystemPrompt, getStuckStudentPrompt, getVerificationPrompt } from './bac-tutor-prompt';
import { getCurriculum } from '@/lib/curriculum/curriculum-loader';
import { BAC_MATHEMATIQUE_D_CURRICULUM } from '@/lib/curriculum/math/bac_mathematique_D';
import { formatMathInText } from './math-formatter';
import { getPartSequence } from '@/lib/db/bac-queries';

export interface BacChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/**
 * Find a specific part in an exercise by matching part ID
 * Handles different formats: "1a", "I.1", "IV.a", etc.
 * @internal - exported for testing only
 */
export function findPartInExercise(
  exercises: Array<{ question: string; answer?: string; difficulty?: string }>,
  partId: string
): { question: string; answer?: string; difficulty?: string } | null {
  if (!exercises || exercises.length === 0) {
    return null;
  }

  // Normalize partId for matching (handle variations)
  const normalizedPartId = partId.trim().toLowerCase();
  
  // Try multiple matching strategies
  for (const exercise of exercises) {
    // Skip undefined/null exercises
    if (!exercise) continue;
    
    const question = exercise.question || '';
    const questionLower = question.toLowerCase();
    
    // Strategy 1: Look for "Partie {partId}" or "partie {partId}"
    // Handles: "Partie 1a)", "**Partie 1a)", "PARTIE I.1)", etc.
    const partiePattern = new RegExp(`partie\\s+${normalizedPartId.replace(/\./g, '\\.')}[\\):]?`, 'i');
    if (partiePattern.test(questionLower)) {
      return exercise;
    }
    
    // Strategy 2: Look for part ID at start of question after formatting
    // Handles: "**Partie 1a)", "Partie I.1)"
    if (questionLower.includes(`partie ${normalizedPartId}`)) {
      return exercise;
    }
    
    // Strategy 3: Exact substring match (fallback)
    if (questionLower.includes(normalizedPartId)) {
      // Additional check: make sure it's actually referencing the part, not just a number
      // This prevents matching "1a" inside "1. a) ..."
      const partPattern = new RegExp(`\\b${normalizedPartId.replace(/\./g, '\\.')}\\b`);
      if (partPattern.test(questionLower)) {
        return exercise;
      }
    }
  }
  
  return null;
}

/**
 * Build context from previous parts of the exercise
 * This ensures the AI remembers definitions, functions, and variables from earlier parts
 */
function buildPreviousPartsContext(
  exercises: Array<{ question: string; answer?: string; difficulty?: string }>,
  exerciseId: string,
  currentPartId: string
): string {
  try {
    // Get the sequence of parts for this exercise
    const sequence = getPartSequence(exerciseId);
    if (!sequence || sequence.length === 0) {
      return '';
    }

    // Find the index of the current part
    const currentIndex = sequence.indexOf(currentPartId);
    if (currentIndex <= 0) {
      // No previous parts
      return '';
    }

    // Get all previous parts (before current)
    const previousPartIds = sequence.slice(0, currentIndex);
    
    // Build context string with questions from previous parts
    const previousPartsQuestions: string[] = [];
    
    for (const prevPartId of previousPartIds) {
      const prevPart = findPartInExercise(exercises, prevPartId);
      if (prevPart && prevPart.question) {
        // Clean and format the question
        let question = prevPart.question.trim();
        // Remove markdown formatting
        if (question.startsWith('**') && question.endsWith('**')) {
          question = question.slice(2, -2).trim();
        }
        // Format math in LaTeX
        question = formatMathInText(question);
        
        previousPartsQuestions.push(`**Partie ${prevPartId}:**\n${question}`);
      }
    }

    if (previousPartsQuestions.length === 0) {
      return '';
    }

    return previousPartsQuestions.join('\n\n');
  } catch (error) {
    console.error('Error building previous parts context:', error);
    return ''; // Return empty string on error to not break the prompt
  }
}

/**
 * Send a message to the BAC AI tutor and get a response
 * 
 * @param exerciseId - The exercise ID (e.g., "bac-2023-ex1")
 * @param partId - The part ID (e.g., "1a", "I.1", "IV.a")
 * @param messages - Conversation history
 * @param studentAttempts - Number of attempts the student has made on this part
 * @returns The AI tutor's response
 * @throws {Error} if curriculum data not found or API call fails
 */
export async function sendBacChatMessage(
  exerciseId: string,
  partId: string,
  messages: BacChatMessage[],
  studentAttempts: number = 0,
  previousPartsContext?: string,
  currentPartQuestion?: string | null,
  studentId?: string, // Optional: for token tracking
  eventContext?: { // Optional: for v2 event logging
    requestId: string;
    sessionId: string;
    conversationId?: string;
    turnId?: number;
  }
): Promise<{ response: string; tokensUsed: number; latencyMs?: number }> {
  // Validate inputs
  if (!exerciseId || !partId) {
    throw new Error('exerciseId and partId are required');
  }

  // Detect Bac type from exerciseId (bac-d-2023-ex1 vs bac-2023-ex1)
  const isBacD = exerciseId.startsWith('bac-d-');

  // Get curriculum data for BAC (Year 5 = BAC)
  // For Bac D, we use the D curriculum, for Bac C the C curriculum
  const curriculum = isBacD 
    ? BAC_MATHEMATIQUE_D_CURRICULUM
    : getCurriculum(5, 'Mathématiques');
  
  if (!curriculum) {
    throw new Error(`BAC Mathematics curriculum not found (type: ${isBacD ? 'D' : 'C'}). Please ensure curriculum is loaded.`);
  }

  // Find the correct chapter based on Bac type
  const chapterId = isBacD ? 'bac-d-2023' : 'bac-2023';
  const chapter = curriculum.chapters.find(ch => ch.id === chapterId);
  if (!chapter) {
    throw new Error(`Chapter "${chapterId}" not found in curriculum. Available chapters: ${curriculum.chapters.map(ch => ch.id).join(', ')}`);
  }

  // Find the specific exercise section
  const exercise = chapter.sections.find(sec => sec.id === exerciseId);
  if (!exercise) {
    throw new Error(`Exercise ${exerciseId} not found in curriculum. Available exercises: ${chapter.sections.map(s => s.id).join(', ')}`);
  }

  // Utiliser la question générée dynamiquement (toujours générée par l'AI)
  let partQuestion = currentPartQuestion || '';
  
  if (partQuestion) {
    console.log(`✅ Using generated question for part ${partId}`);
  } else {
    // Les questions sont maintenant toujours générées dynamiquement par l'AI
    // Le curriculum ne contient plus les questions exactes, seulement les concepts
    console.error(`❌ No generated question provided for part ${partId}. Questions must be generated dynamically.`);
    throw new Error(`Question for part ${partId} must be generated dynamically. Please ensure question generation is working.`);
  }

  // Vérifier que la question correspond bien à la partie demandée
  const questionPartId = partQuestion.match(/partie\s+([^\):]+)/i)?.[1]?.trim().toLowerCase();
  const requestedPartId = partId.trim().toLowerCase();
  
  if (questionPartId && questionPartId !== requestedPartId) {
    console.warn(`⚠️ Question partId mismatch! Question says "${questionPartId}" but requested "${requestedPartId}"`);
  }

  // Extract part content - utiliser la question générée dynamiquement
  const partContent = {
    question: partQuestion,
    concepts: exercise.concepts || [],
    difficulty: exercise.difficulty || 'Moyen',
    exerciseTitle: exercise.title,
  };
  
  console.log(`📝 Final question for part ${partId} (${partQuestion.length} chars):`, partQuestion.substring(0, 200) + (partQuestion.length > 200 ? '...' : ''));

  // Utiliser le contexte passé en paramètre ou construire depuis les exercices
  const previousPartsContextToUse = previousPartsContext || buildPreviousPartsContext(
    exercise.exercises || [],
    exerciseId,
    partId
  );

  // Build system prompt with previous parts context
  const systemPrompt = getBacTutorSystemPrompt(
    exerciseId, 
    partId, 
    partContent,
    previousPartsContextToUse
  );

  // Add stuck student guidance if needed
  const additionalContext = studentAttempts > 0 
    ? `\n\n${getStuckStudentPrompt(studentAttempts)}`
    : '';

  // Build the full prompt for Gemini
  // Gemini uses a single prompt string, not separate system/user messages
  let fullPrompt = systemPrompt + additionalContext;
  
  // Add conversation history (excluding system messages)
  // The messages array should include the full conversation including the current message
  const conversationHistory = messages
    .filter(msg => msg.role !== 'system')
    .map(msg => {
      const roleLabel = msg.role === 'assistant' ? 'AI Tutor' : 'Student';
      return `${roleLabel}: ${msg.content}`;
    })
    .join('\n\n');

  if (conversationHistory) {
    fullPrompt += `\n\n## CONVERSATION HISTORY\n\n${conversationHistory}\n\n---\n\nContinue the conversation above. Respond as the AI Tutor to the Student's latest message.`;
  } else {
    // If no conversation history, this is the first message - instruct AI to start the conversation
    fullPrompt += `\n\nThis is the beginning of the conversation. Start by greeting the student and following your first message instructions above.`;
  }

  // Call Gemini AI (with cache if enabled)
  try {
    console.log(`🤖 Sending BAC chat message for ${exerciseId}, part ${partId}, attempt ${studentAttempts}`);
    const startTime = Date.now();
    
    // Check if caching is enabled via feature flag
    // Set AI_RESPONSE_CACHE_ENABLED=true to enable, false to disable
    // Works in dev (memory cache) and prod (Redis)
    const CACHE_ENABLED = process.env.AI_RESPONSE_CACHE_ENABLED !== 'false'; // Default: enabled
    
    let rawResponse: string;
    let tokensUsed: number;
    let cacheHit = false;
    
    if (CACHE_ENABLED) {
      // Utiliser cache sémantique (détecte questions similaires)
      const USE_SEMANTIC_CACHE = process.env.SEMANTIC_CACHE_ENABLED !== 'false'; // Default: enabled
      
      if (USE_SEMANTIC_CACHE) {
        const { getAIResponseWithUniversalCache } = await import('./universal-cache-strategy');
        const { generateEducationalResponseWithTokens } = await import('@/lib/gemini');
        
        // Extraire la dernière question de l'étudiant (pas tout le prompt système)
        const lastUserMessage = messages.filter(m => m.role === 'user').pop()?.content || '';
        
        // Extraire toutes les questions précédentes pour détecter questions dérivées
        const previousQuestions = messages
          .filter(m => m.role === 'user')
          .map(m => m.content)
          .slice(0, -1); // Toutes sauf la dernière
        
        const result = await getAIResponseWithUniversalCache(
          lastUserMessage || fullPrompt,
          () => generateEducationalResponseWithTokens(fullPrompt),
          {
            exerciseId,
            partId,
            language: 'fr',
            subject: 'math', // BAC = mathématiques
            previousQuestions // Pour détecter questions dérivées
          }
        );
        
        rawResponse = result.response;
        tokensUsed = result.tokensUsed;
        cacheHit = result.cacheHit;
        
        if (cacheHit) {
          console.log(`✅ AI response from ${result.cacheType} cache (confidence: ${((result.confidence || 0) * 100).toFixed(1)}%, saved tokens: ${tokensUsed})`);
          if (result.matchedQuestion && result.matchedQuestion !== lastUserMessage) {
            console.log(`   Matched with: "${result.matchedQuestion.substring(0, 60)}..."`);
          }
        }
      } else {
        // Fallback: cache exact (ancien système)
        const { getAIResponseWithCache } = await import('./ai-response-cache');
        const { generateEducationalResponseWithTokens } = await import('@/lib/gemini');
        
        const result = await getAIResponseWithCache(
          fullPrompt,
          () => generateEducationalResponseWithTokens(fullPrompt),
          {
            exerciseId,
            partId,
            studentId,
            language: 'fr'
          },
          86400
        );
        
        rawResponse = result.response;
        tokensUsed = result.tokensUsed;
        cacheHit = result.cacheHit;
      }
    } else {
      const { generateEducationalResponseWithTokens } = await import('@/lib/gemini');
      const result = await generateEducationalResponseWithTokens(fullPrompt);
      rawResponse = result.response;
      tokensUsed = result.tokensUsed;
    }
    
    const latencyMs = Date.now() - startTime;
    
    // Store cacheHit for v2 event logging
    const cacheHitForEvent = cacheHit;
    
    // Track tokens if studentId is provided (v1 - keep for backward compatibility)
    console.log(`🔍 Token tracking check: studentId=${studentId}, tokensUsed=${tokensUsed}`);
    if (studentId && tokensUsed > 0) {
      console.log(`💰 Tracking ${tokensUsed} tokens for student ${studentId}`);
      const { trackTokens } = await import('./token-tracker');
      try {
        await trackTokens(studentId, tokensUsed);
        console.log(`✅ Token tracking completed for student ${studentId}`);
      } catch (err) {
        console.error('❌ Error tracking tokens (non-blocking):', err);
        console.error('   Error details:', err instanceof Error ? err.message : String(err));
      }
    } else {
      console.warn(`⚠️ Not tracking tokens: studentId=${studentId || 'undefined'}, tokensUsed=${tokensUsed || 0}`);
    }
    
    let response = rawResponse;
    console.log(`📥 Raw AI response received (length: ${response.length}, ${tokensUsed} tokens)`);
    console.log(`📄 Sample of raw response:`, response.substring(0, 200));
    
    // DEBUG: Check for variation tables in response
    const hasAsciiTable = /\|[^|]*\|[^|]*\|/.test(response) && (response.includes('tableau') || response.includes('variation') || response.includes('f\'(x)') || response.includes('f′'));
    const hasJsonTable = /\{\s*"type"\s*:\s*"variation_table"/.test(response);
    console.log(`🔍 DEBUG Variation Tables:`);
    console.log(`  - Contains ASCII table (pipes): ${hasAsciiTable}`);
    console.log(`  - Contains JSON table: ${hasJsonTable}`);
    if (hasAsciiTable) {
      const asciiMatch = response.match(/\|[^|\n]{0,50}\|[^|\n]{0,50}\|[^|\n]{0,50}\|/);
      console.log(`  - ASCII table sample:`, asciiMatch ? asciiMatch[0].substring(0, 150) : 'not found');
    }
    if (hasJsonTable) {
      const jsonMatch = response.match(/\{\s*"type"\s*:\s*"variation_table"[\s\S]{0,300}/);
      console.log(`  - JSON table sample:`, jsonMatch ? jsonMatch[0] : 'not found');
    }
    
    // Post-process response to fix any math formatting issues
    // This applies ALL formatters (complexes, functions, geometry, transformations, suites) for both BAC C and BAC D
    // formatMathInText applies the same formatting logic regardless of BAC type
    const responseBeforeFormat = response;
    response = formatMathInText(response);
    
    // Remove any prefixes like "AI Tutor:", "Assistant:", "Tutor:", etc. from the beginning
    // This ensures clean messages without role labels
    response = response.trim();
    const prefixPatterns = [
      /^(AI\s*Tutor|Assistant|Tutor|Prof|Enseignant|IA|AI)[\s:]*[\-–—]?\s*/i,
      /^(Réponse|Message|Moi|Je)[\s:]*[\-–—]?\s*/i,
      /^\*\*AI\s*:\*\*\s*/i,  // Matches **AI:** format
      /^\*\*Assistant\s*:\*\*\s*/i,  // Matches **Assistant:** format
      /^AI\s*:\s*/i,  // Matches "AI:" at start
    ];
    
    for (const pattern of prefixPatterns) {
      if (pattern.test(response)) {
        response = response.replace(pattern, '').trim();
        console.log(`✅ Removed prefix "${pattern.source}" from AI response`);
        break; // Stop after first match
      }
    }
    
    if (responseBeforeFormat !== response) {
      console.log(`✅ Math formatter modified the response`);
    } else {
      console.log(`ℹ️ Math formatter did not modify the response`);
    }
    
    console.log(`✅ BAC chat response formatted (length: ${response.length})`);
    
    // Log v2 event if context provided
    if (studentId && eventContext) {
      try {
        const { logAITurnCompletedV2 } = await import('@/lib/analytics/event-integration-example');
        const lastUserMessage = messages.filter(m => m.role === 'user').pop()?.content || '';
        await logAITurnCompletedV2(
          studentId,
          lastUserMessage,
          response,
          tokensUsed,
          latencyMs,
          eventContext.requestId,
          eventContext.sessionId,
          eventContext.conversationId,
          cacheHitForEvent
        );
      } catch (err) {
        console.error('❌ Error logging v2 event (non-blocking):', err);
      }
    }
    
    return { response, tokensUsed, latencyMs };
  } catch (error) {
    // 🔥 CRITICAL: Log full error details for debugging
    console.error('❌ Error calling AI for BAC chat:', error);
    console.error('   Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('   Error message:', error instanceof Error ? error.message : String(error));
    if (error instanceof Error && (error as any).stack) {
      console.error('   Stack trace:', (error as any).stack);
    }
    
    // Check for specific error types
    if (error instanceof Error) {
      if (error.message.includes('GEMINI_API_KEY')) {
        throw new Error('Configuration manquante: clé API non configurée');
      }
      if (error.message.includes('500') || error.message.includes('Internal error')) {
        throw new Error('Le service IA est temporairement indisponible. Veuillez réessayer dans quelques instants.');
      }
      if (error.message.includes('429') || error.message.includes('quota') || error.message.includes('rate limit')) {
        throw new Error('Trop de requêtes. Veuillez patienter quelques instants avant de réessayer.');
      }
      if (error.message.includes('timeout') || error.message.includes('TIMEOUT')) {
        throw new Error('La réponse prend trop de temps. Veuillez réessayer.');
      }
    }
    
    // Generic error message
    throw new Error(`Échec de génération de la réponse: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
  }
}

/**
 * Helper function to get verification prompt for a part
 */
export function getPartVerificationPrompt(partId: string): string {
  return getVerificationPrompt(partId);
}
