/**
 * Exemple d'intégration du schéma v2 dans le code existant
 * 
 * Ce fichier montre comment migrer progressivement depuis v1 vers v2
 * sans casser la production (double écriture)
 */

import { 
  createAITurnCompletedEvent,
  createExerciseAttemptStartedEvent,
  createExercisePartSubmittedEvent,
  createExerciseAttemptCompletedEvent,
  migrateAIConversationToV2,
  migrateBacExerciseToV2,
  migrateBacCompletionToV2,
  normalizePartId,
  calculateCostUSD,
  hashText,
  createEventContextFromRequest
} from './event-schema-v2';
import { getEventLogger } from './event-logger-v2';
import { prisma } from '@/lib/prisma';

// ==========================================
// EXEMPLE 1: Intégration dans bac-chat.ts
// ==========================================

/**
 * Exemple: Loguer un événement ai.turn.completed après un appel IA
 * 
 * À intégrer dans sendBacChatMessage() après l'appel Gemini
 */
export async function logAITurnCompletedV2(
  studentId: string,
  studentMessage: string,
  aiResponse: string,
  tokensUsed: number,
  latencyMs: number,
  requestId: string,
  sessionId: string,
  conversationId?: string,
  cacheHit?: boolean
) {
  try {
    // 1. Créer le context
    const context = createEventContextFromRequest({
      userId: studentId,
      role: 'student',
      requestId,
      languagePref: 'fr'
    }, sessionId);
    
    // 2. Estimer tokens in/out (approximation si non disponible)
    const tokensIn = Math.ceil(studentMessage.length / 4) + 2500; // Prompt base + message
    const tokensOut = Math.ceil(aiResponse.length / 4);
    
    // 3. Créer l'événement
    const event = createAITurnCompletedEvent(context, {
      conversation: {
        conversationId: conversationId || `conv_${Date.now()}`,
        turnId: 1 // TODO: Incrémenter depuis historique
      },
      routing: {
        provider: 'gemini',
        model: 'gemini-2.0-flash',
        fallbackUsed: false,
        fallbackProvider: null
      },
      retrieval: {
        mode: 'stuffing',
        topK: 0
      },
      language: {
        languageDetected: 'fr',
        languageSelected: 'fr',
        policyEnforced: true
      },
      usage: {
        tokensIn,
        tokensOut,
        latencyMs,
        costUsdEstimated: calculateCostUSD(tokensIn, tokensOut)
      },
      cache: {
        responseCacheHit: cacheHit || false
      },
      content: {
        promptHash: hashText(studentMessage),
        responseHash: hashText(aiResponse),
        storeRawText: false,
        promptSnippet: studentMessage.substring(0, 200),
        responseSnippet: aiResponse.substring(0, 200)
      }
    });
    
    // 4. Logger l'événement
    const logger = getEventLogger();
    await logger.log(event);
    
    // 5. CONTINUER à écrire v1 (double écriture pendant migration)
    // TODO: Supprimer après 2 semaines
    await prisma.aIConversation.create({
      data: {
        studentId,
        messageType: 'TEXT',
        studentMessage,
        aiResponse,
        timestamp: new Date()
      }
    });
    
  } catch (error) {
    console.error('❌ Error logging AI turn event v2:', error);
    // Ne pas bloquer le flux principal
  }
}

// ==========================================
// EXEMPLE 2: Intégration dans bac-queries.ts
// ==========================================

/**
 * Exemple: Loguer un événement exercise.attempt.started
 * 
 * À intégrer dans getOrCreateBacExercise() ou similaire
 */
export async function logExerciseAttemptStartedV2(
  studentId: string,
  exerciseId: string,
  currentPartId: string,
  requestId: string,
  sessionId: string
) {
  try {
    const context = createEventContextFromRequest({
      userId: studentId,
      role: 'student',
      requestId
    }, sessionId);
    
    const attemptId = `attempt_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const isBacD = exerciseId.startsWith('bac-d-');
    const subject = exerciseId.includes('physique') ? 'physics' : 'math';
    
    const event = createExerciseAttemptStartedEvent(context, {
      exercise: {
        exerciseId,
        source: 'bac',
        subject: subject as 'math' | 'physics' | 'science'
      },
      attempt: {
        attemptId,
        status: 'started',
        startedAt: new Date().toISOString()
      }
    });
    
    const logger = getEventLogger();
    await logger.log(event);
    
    // Retourner attemptId pour corrélation avec events suivants
    return attemptId;
    
  } catch (error) {
    console.error('❌ Error logging exercise attempt started v2:', error);
    return null;
  }
}

/**
 * Exemple: Loguer un événement exercise.part.submitted
 */
export async function logExercisePartSubmittedV2(
  studentId: string,
  attemptId: string,
  partIdRaw: string,
  answer: string,
  isCorrect: boolean,
  attemptNumber: number,
  timeSpentSeconds: number,
  requestId: string,
  sessionId: string
) {
  try {
    const context = createEventContextFromRequest({
      userId: studentId,
      role: 'student',
      requestId
    }, sessionId);
    
    const partIdCanonical = normalizePartId(partIdRaw);
    
    const event = createExercisePartSubmittedEvent(context, {
      attempt: { attemptId },
      part: {
        partId: partIdCanonical
      },
      submission: {
        answerHash: hashText(answer),
        isCorrect,
        scoreDelta: isCorrect ? 0.25 : 0, // Exemple: 0.25 points par partie
        attemptNumber,
        timeSpentMs: timeSpentSeconds * 1000
      }
    });
    
    const logger = getEventLogger();
    await logger.log(event);
    
  } catch (error) {
    console.error('❌ Error logging exercise part submitted v2:', error);
  }
}

/**
 * Exemple: Loguer un événement exercise.attempt.completed
 */
export async function logExerciseAttemptCompletedV2(
  studentId: string,
  attemptId: string,
  exerciseId: string,
  partsCompleted: string[],
  totalScore: number,
  maxScore: number,
  attemptsTotal: number,
  durationSeconds: number,
  requestId: string,
  sessionId: string
) {
  try {
    const context = createEventContextFromRequest({
      userId: studentId,
      role: 'student',
      requestId
    }, sessionId);
    
    const partsCompletedCanonical = partsCompleted.map(normalizePartId);
    
    const event = createExerciseAttemptCompletedEvent(context, {
      attempt: {
        attemptId,
        status: 'completed',
        durationMs: durationSeconds * 1000,
        attemptsTotal
      },
      result: {
        score: totalScore,
        maxScore,
        passed: totalScore >= maxScore * 0.5
      },
      progress: {
        partsCompleted: partsCompletedCanonical,
        partsTotal: partsCompletedCanonical.length // TODO: Récupérer depuis exercice
      }
    });
    
    const logger = getEventLogger();
    await logger.log(event);
    
  } catch (error) {
    console.error('❌ Error logging exercise attempt completed v2:', error);
  }
}

// ==========================================
// EXEMPLE 3: Migration batch depuis v1
// ==========================================

/**
 * Script de migration: Convertit les événements v1 existants en v2
 * 
 * Usage: npm run migrate:events-v2
 */
export async function migrateExistingEventsToV2(days: number = 7) {
  console.log(`🔄 Migrating events from last ${days} days to v2...`);
  
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  const logger = getEventLogger();
  let migrated = 0;
  let errors = 0;
  
  // 1. Migrer AIConversations
  const conversations = await prisma.aIConversation.findMany({
    where: {
      timestamp: {
        gte: cutoffDate
      }
    },
    include: {
      student: {
        select: {
          id: true,
          languagePreference: true
        }
      }
    },
    take: 1000 // Limiter pour test
  });
  
  for (const conv of conversations) {
    try {
      const context = createEventContextFromRequest({
        userId: conv.studentId,
        role: 'student',
        requestId: `migrate_${conv.id}`,
        languagePref: (conv.student.languagePreference as 'fr' | 'ar') || 'fr'
      }, `session_${conv.studentId}_${Date.now()}`);
      
      // Estimer tokens depuis longueur (approximation)
      const tokensIn = Math.ceil(conv.studentMessage.length / 4) + 2500;
      const tokensOut = Math.ceil(conv.aiResponse.length / 4);
      
      const event = migrateAIConversationToV2(
        {
          studentId: conv.studentId,
          studentMessage: conv.studentMessage,
          aiResponse: conv.aiResponse,
          conversationTopic: conv.conversationTopic || undefined,
          subjectArea: conv.subjectArea || undefined,
          timestamp: conv.timestamp
        },
        context,
        {
          tokensIn,
          tokensOut,
          latencyMs: 2000, // Estimation
          provider: 'gemini',
          model: 'gemini-2.0-flash',
          fallbackUsed: false,
          languageDetected: 'fr',
          cacheHit: false
        }
      );
      
      await logger.log(event);
      migrated++;
      
    } catch (error) {
      console.error(`❌ Error migrating conversation ${conv.id}:`, error);
      errors++;
    }
  }
  
  // 2. Migrer BacExercises
  const bacExercises = await prisma.bacExercise.findMany({
    where: {
      lastAccessedAt: {
        gte: cutoffDate
      }
    },
    include: {
      student: {
        select: {
          id: true
        }
      }
    },
    take: 500
  });
  
  for (const ex of bacExercises) {
    try {
      const context = createEventContextFromRequest({
        userId: ex.studentId,
        role: 'student',
        requestId: `migrate_${ex.id}`
      }, `session_${ex.studentId}_${Date.now()}`);
      
      const event = migrateBacExerciseToV2(
        {
          studentId: ex.studentId,
          exerciseId: ex.exerciseId,
          currentPartId: ex.currentPartId,
          startedAt: ex.startedAt
        },
        context
      );
      
      await logger.log(event);
      migrated++;
      
    } catch (error) {
      console.error(`❌ Error migrating exercise ${ex.id}:`, error);
      errors++;
    }
  }
  
  // 3. Flush final
  await logger.flush();
  
  console.log(`✅ Migration complete: ${migrated} events migrated, ${errors} errors`);
  return { migrated, errors };
}
