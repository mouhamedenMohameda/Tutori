/**
 * Event Schema v2.0 - Analytics, Audit, and Cost Tracking
 * 
 * Schema compatible avec la logique actuelle mais corrigé pour être exploitable:
 * - Corrélation correcte (utilisateur, session, conversation, tentative)
 * - Mesure coûts, latence, qualité, sécurité
 * - Évite champs ambigus
 * - Limite risques privacy
 */

import { randomBytes } from 'crypto';
import { createHash } from 'crypto';

// ==========================================
// ENVELOPPE COMMUNE (obligatoire)
// ==========================================

export interface EventEnvelope {
  eventVersion: '2.0';
  eventId: string;
  eventType: EventType;
  occurredAt: string; // ISO 8601
  receivedAt: string; // ISO 8601
  env: 'dev' | 'staging' | 'prod';
  app: {
    name: 'tutori';
    appVersion: string;
    platform: 'web' | 'ios' | 'android';
    build?: string;
  };
  actor: {
    userId: string;
    role: 'student' | 'teacher' | 'parent' | 'admin' | 'platform_admin';
    country?: string; // ISO 3166-1 alpha-2
    languagePref?: 'fr' | 'ar';
  };
  session: {
    sessionId: string;
    startedAt: string; // ISO 8601
  };
  context: {
    requestId: string;
    source: 'ui' | 'api' | 'mobile' | 'system';
    ipHash?: string; // SHA256
    deviceIdHash?: string; // SHA256
  };
  payload: EventPayload;
}

export type EventType =
  | 'auth.login'
  | 'session.start'
  | 'ai.turn.completed'
  | 'exercise.attempt.started'
  | 'exercise.part.viewed'
  | 'exercise.part.submitted'
  | 'exercise.attempt.completed'
  | 'ui.screen_viewed'
  | 'ui.feature_used';

export type EventPayload =
  | AuthLoginPayload
  | SessionStartPayload
  | AITurnCompletedPayload
  | ExerciseAttemptStartedPayload
  | ExercisePartViewedPayload
  | ExercisePartSubmittedPayload
  | ExerciseAttemptCompletedPayload
  | UIScreenViewedPayload
  | UIFeatureUsedPayload;

// ==========================================
// TYPES D'ÉVÉNEMENTS
// ==========================================

// A) Auth et Sessions

export interface AuthLoginPayload {
  method: 'password' | 'token' | 'oauth';
  result: 'success' | 'failure';
  latencyMs: number;
  failureReason?: string;
}

export interface SessionStartPayload {
  entryPoint: 'home' | 'login' | 'deep_link' | 'notification';
  utm?: {
    source?: string;
    campaign?: string;
    medium?: string;
  };
}

// B) IA: Conversations et LLM

export interface AITurnCompletedPayload {
  conversation: {
    conversationId: string;
    turnId: number;
  };
  routing: {
    provider: 'gemini' | 'openai';
    model: string; // 'gemini-2.0-flash', 'gpt-4o-mini', etc.
    fallbackUsed: boolean;
    fallbackProvider?: 'gemini' | 'openai' | null;
  };
  retrieval?: {
    mode: 'stuffing' | 'rag' | 'none';
    topK?: number;
    filters?: {
      grade?: string;
      subject?: string;
      chapter?: string;
    };
  };
  language: {
    languageDetected: 'fr' | 'ar' | 'en' | 'unknown';
    languageSelected: 'fr' | 'ar';
    policyEnforced: boolean;
  };
  usage: {
    tokensIn: number; // 0 si inconnu, jamais null
    tokensOut: number; // 0 si inconnu, jamais null
    latencyMs: number;
    costUsdEstimated: number;
  };
  cache?: {
    responseCacheHit: boolean;
    cacheKey?: string;
    ttlSeconds?: number;
  };
  safety?: {
    flagged: boolean;
    category?: 'violence' | 'harassment' | 'hate_speech' | 'inappropriate' | 'other';
    actionTaken?: 'refuse_and_redirect' | 'moderate' | 'allow';
  };
  content: {
    promptHash: string; // SHA256
    responseHash: string; // SHA256
    storeRawText: boolean;
    promptSnippet?: string; // Max 200 chars
    responseSnippet?: string; // Max 200 chars
  };
}

// C) Exercices BAC

export interface ExerciseAttemptStartedPayload {
  exercise: {
    exerciseId: string; // 'bac_math_2025_ex3', 'bac-d-2023-ex1', etc.
    source: 'bac' | 'practice' | 'assignment';
    subject: 'math' | 'physics' | 'science';
    chapter?: string;
  };
  attempt: {
    attemptId: string; // Unique pour cette tentative
    status: 'started';
    startedAt: string; // ISO 8601
  };
}

export interface ExercisePartViewedPayload {
  attempt: {
    attemptId: string;
  };
  part: {
    partId: PartIdCanonical;
    partKeyRaw: string; // Ce que l'utilisateur voit: '1a', 'I.1', '1d'
  };
}

export interface ExercisePartSubmittedPayload {
  attempt: {
    attemptId: string;
  };
  part: {
    partId: PartIdCanonical;
  };
  submission: {
    answerHash: string; // SHA256
    isCorrect: boolean;
    scoreDelta: number; // Changement de score pour cette partie
    attemptNumber: number; // Numéro de tentative pour cette partie
    timeSpentMs: number;
  };
}

export interface ExerciseAttemptCompletedPayload {
  attempt: {
    attemptId: string;
    status: 'completed' | 'abandoned';
    durationMs: number;
    attemptsTotal: number; // Nombre total de tentatives pour toutes les parties
  };
  result: {
    score: number; // 0.0 - 1.0
    maxScore: number;
    passed: boolean;
  };
  progress: {
    partsCompleted: PartIdCanonical[];
    partsTotal: number;
  };
}

// D) Engagement UI

export interface UIScreenViewedPayload {
  screen: 'home' | 'exercise' | 'chat' | 'profile' | 'progress' | 'community';
  exerciseId?: string;
  subject?: string;
}

export interface UIFeatureUsedPayload {
  feature: string; // 'hint_requested', 'audio_play', 'share', etc.
  context?: {
    exerciseId?: string;
    partId?: string;
  };
}

// ==========================================
// NORMALISATION DES PARTS
// ==========================================

export interface PartIdCanonical {
  section: number; // Int si possible
  subpart: string; // 'a', '1', 'd', etc.
  variant?: string; // 'roman_I', 'roman_IV', etc. si nécessaire
}

/**
 * Normalise une clé de partie brute (1a, I.1, 1d) en structure canonique
 */
export function normalizePartId(partKeyRaw: string): PartIdCanonical {
  // Nettoyer la clé
  const cleaned = partKeyRaw.trim().toLowerCase();
  
  // Pattern 1: Format simple "1a", "2b", "3c"
  const simplePattern = /^(\d+)([a-z])$/;
  const simpleMatch = cleaned.match(simplePattern);
  if (simpleMatch) {
    return {
      section: parseInt(simpleMatch[1], 10),
      subpart: simpleMatch[2]
    };
  }
  
  // Pattern 2: Format romain "I.1", "IV.a", "II.2"
  const romanPattern = /^([ivxlcdm]+)\.([a-z0-9]+)$/i;
  const romanMatch = cleaned.match(romanPattern);
  if (romanMatch) {
    const romanNum = romanMatch[1].toUpperCase();
    const section = romanToInt(romanNum);
    return {
      section,
      subpart: romanMatch[2],
      variant: `roman_${romanNum}`
    };
  }
  
  // Pattern 3: Format avec parenthèses "1a)", "2b)"
  const parenPattern = /^(\d+)([a-z])\)?$/;
  const parenMatch = cleaned.match(parenPattern);
  if (parenMatch) {
    return {
      section: parseInt(parenMatch[1], 10),
      subpart: parenMatch[2]
    };
  }
  
  // Pattern 4: Format numérique simple "1", "2", "3"
  const numPattern = /^(\d+)$/;
  const numMatch = cleaned.match(numPattern);
  if (numMatch) {
    return {
      section: parseInt(numMatch[1], 10),
      subpart: ''
    };
  }
  
  // Fallback: extraire le premier nombre comme section
  const fallbackNum = cleaned.match(/\d+/);
  const section = fallbackNum ? parseInt(fallbackNum[0], 10) : 1;
  const subpart = cleaned.replace(/\d+/g, '').replace(/[^a-z0-9]/g, '') || 'a';
  
  return {
    section,
    subpart: subpart || 'a',
    variant: cleaned !== `${section}${subpart}` ? 'custom' : undefined
  };
}

/**
 * Convertit un nombre romain en entier
 */
function romanToInt(roman: string): number {
  const map: Record<string, number> = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };
  
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = map[roman[i]];
    const next = map[roman[i + 1]];
    
    if (next && current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  
  return result;
}

// ==========================================
// HELPERS DE CRÉATION D'ÉVÉNEMENTS
// ==========================================

export interface EventContext {
  userId: string;
  role: 'student' | 'teacher' | 'parent' | 'admin' | 'platform_admin';
  sessionId: string;
  sessionStartedAt: Date;
  requestId: string;
  country?: string;
  languagePref?: 'fr' | 'ar';
  ipHash?: string;
  deviceIdHash?: string;
  source?: 'ui' | 'api' | 'mobile' | 'system';
}

/**
 * Crée l'enveloppe de base pour un événement
 */
function createEventEnvelope(
  eventType: EventType,
  payload: EventPayload,
  context: EventContext,
  appVersion: string = '1.8.3',
  platform: 'web' | 'ios' | 'android' = 'web'
): EventEnvelope {
  const now = new Date();
  const eventId = `evt_${randomBytes(8).toString('hex')}`;
  
  return {
    eventVersion: '2.0',
    eventId,
    eventType,
    occurredAt: now.toISOString(),
    receivedAt: now.toISOString(),
    env: (process.env.NODE_ENV === 'production' ? 'prod' : 
          (process.env.NODE_ENV as string) === 'staging' ? 'staging' : 'dev') as 'dev' | 'staging' | 'prod',
    app: {
      name: 'tutori',
      appVersion,
      platform,
      build: process.env.BUILD_ID
    },
    actor: {
      userId: context.userId,
      role: context.role,
      country: context.country || 'MR',
      languagePref: context.languagePref || 'fr'
    },
    session: {
      sessionId: context.sessionId,
      startedAt: context.sessionStartedAt.toISOString()
    },
    context: {
      requestId: context.requestId,
      source: context.source || 'api',
      ipHash: context.ipHash,
      deviceIdHash: context.deviceIdHash
    },
    payload
  };
}

/**
 * Hash SHA256 d'un texte (pour privacy)
 */
/**
 * Crée un EventContext à partir d'une requête
 */
export function createEventContextFromRequest(
  params: {
    userId: string;
    role: 'student' | 'teacher' | 'parent' | 'admin' | 'platform_admin';
    requestId: string;
    languagePref?: 'fr' | 'ar';
    country?: string;
    ipHash?: string;
    deviceIdHash?: string;
    source?: 'ui' | 'api' | 'mobile' | 'system';
  },
  sessionId: string
): EventContext {
  return {
    userId: params.userId,
    role: params.role,
    sessionId,
    sessionStartedAt: new Date(), // Will be updated from actual session if available
    requestId: params.requestId,
    country: params.country,
    languagePref: params.languagePref,
    ipHash: params.ipHash,
    deviceIdHash: params.deviceIdHash,
    source: params.source || 'api'
  };
}

export function hashText(text: string): string {
  return createHash('sha256').update(text).digest('hex');
}

/**
 * Calcule le coût estimé en USD pour Gemini 2.0 Flash
 */
export function calculateCostUSD(tokensIn: number, tokensOut: number): number {
  const COST_INPUT_PER_1M = 0.10; // $0.10 per 1M input tokens
  const COST_OUTPUT_PER_1M = 0.40; // $0.40 per 1M output tokens
  
  const inputCost = (tokensIn / 1_000_000) * COST_INPUT_PER_1M;
  const outputCost = (tokensOut / 1_000_000) * COST_OUTPUT_PER_1M;
  
  return inputCost + outputCost;
}

/**
 * Calcule le coût estimé en USD pour GPT-4o-mini
 */
export function calculateCostUSDGPT4Mini(tokensIn: number, tokensOut: number): number {
  const COST_INPUT_PER_1M = 0.15; // $0.15 per 1M input tokens
  const COST_OUTPUT_PER_1M = 0.60; // $0.60 per 1M output tokens
  
  const inputCost = (tokensIn / 1_000_000) * COST_INPUT_PER_1M;
  const outputCost = (tokensOut / 1_000_000) * COST_OUTPUT_PER_1M;
  
  return inputCost + outputCost;
}

// ==========================================
// FACTORY FUNCTIONS POUR CHAQUE TYPE D'ÉVÉNEMENT
// ==========================================

export function createAuthLoginEvent(
  context: EventContext,
  payload: AuthLoginPayload
): EventEnvelope {
  return createEventEnvelope('auth.login', payload, context);
}

export function createSessionStartEvent(
  context: EventContext,
  payload: SessionStartPayload
): EventEnvelope {
  return createEventEnvelope('session.start', payload, context);
}

export function createAITurnCompletedEvent(
  context: EventContext,
  payload: AITurnCompletedPayload
): EventEnvelope {
  return createEventEnvelope('ai.turn.completed', payload, context);
}

export function createExerciseAttemptStartedEvent(
  context: EventContext,
  payload: ExerciseAttemptStartedPayload
): EventEnvelope {
  return createEventEnvelope('exercise.attempt.started', payload, context);
}

export function createExercisePartViewedEvent(
  context: EventContext,
  payload: ExercisePartViewedPayload
): EventEnvelope {
  return createEventEnvelope('exercise.part.viewed', payload, context);
}

export function createExercisePartSubmittedEvent(
  context: EventContext,
  payload: ExercisePartSubmittedPayload
): EventEnvelope {
  return createEventEnvelope('exercise.part.submitted', payload, context);
}

export function createExerciseAttemptCompletedEvent(
  context: EventContext,
  payload: ExerciseAttemptCompletedPayload
): EventEnvelope {
  return createEventEnvelope('exercise.attempt.completed', payload, context);
}

export function createUIScreenViewedEvent(
  context: EventContext,
  payload: UIScreenViewedPayload
): EventEnvelope {
  return createEventEnvelope('ui.screen_viewed', payload, context);
}

export function createUIFeatureUsedEvent(
  context: EventContext,
  payload: UIFeatureUsedPayload
): EventEnvelope {
  return createEventEnvelope('ui.feature_used', payload, context);
}

// ==========================================
// VALIDATION
// ==========================================

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Valide un événement selon les règles v2
 */
export function validateEvent(event: EventEnvelope): ValidationError[] {
  const errors: ValidationError[] = [];
  
  // Règles minimales obligatoires
  if (!event.eventId) {
    errors.push({ field: 'eventId', message: 'eventId is required' });
  }
  
  if (!event.actor.userId) {
    errors.push({ field: 'actor.userId', message: 'userId is required' });
  }
  
  if (!event.session.sessionId) {
    errors.push({ field: 'session.sessionId', message: 'sessionId is required' });
  }
  
  if (!event.occurredAt) {
    errors.push({ field: 'occurredAt', message: 'occurredAt is required' });
  }
  
  if (!event.context.requestId) {
    errors.push({ field: 'context.requestId', message: 'requestId is required' });
  }
  
  // Validations spécifiques par type
  if (event.eventType === 'ai.turn.completed') {
    const payload = event.payload as AITurnCompletedPayload;
    
    if (payload.usage.tokensIn === null || payload.usage.tokensIn === undefined) {
      errors.push({ field: 'payload.usage.tokensIn', message: 'tokensIn must be 0 if unknown, never null' });
    }
    
    if (payload.usage.tokensOut === null || payload.usage.tokensOut === undefined) {
      errors.push({ field: 'payload.usage.tokensOut', message: 'tokensOut must be 0 if unknown, never null' });
    }
    
    if (payload.language.languageSelected !== event.actor.languagePref && !payload.language.policyEnforced) {
      errors.push({ field: 'payload.language', message: 'languageSelected must match user preference unless policyEnforced=true' });
    }
    
    if (payload.safety?.flagged === true && !payload.safety.category) {
      errors.push({ field: 'payload.safety.category', message: 'safety.category is required when flagged=true' });
    }
  }
  
  if (event.eventType.startsWith('exercise.')) {
    const payload = event.payload as ExerciseAttemptStartedPayload | ExercisePartViewedPayload | ExercisePartSubmittedPayload | ExerciseAttemptCompletedPayload;
    
    if ('attempt' in payload && !payload.attempt.attemptId) {
      errors.push({ field: 'payload.attempt.attemptId', message: 'attemptId is required for exercise events' });
    }
  }
  
  return errors;
}

// ==========================================
// MIGRATION DEPUIS V1
// ==========================================

/**
 * Convertit un événement v1 (AIConversation) en événement v2 (ai.turn.completed)
 */
export function migrateAIConversationToV2(
  v1Data: {
    studentId: string;
    studentMessage: string;
    aiResponse: string;
    conversationTopic?: string;
    subjectArea?: string;
    timestamp: Date;
  },
  context: EventContext,
  aiMetadata: {
    tokensIn: number;
    tokensOut: number;
    latencyMs: number;
    provider: 'gemini' | 'openai';
    model: string;
    fallbackUsed?: boolean;
    languageDetected?: 'fr' | 'ar' | 'en';
    cacheHit?: boolean;
  }
): EventEnvelope {
  const conversationId = `conv_${randomBytes(6).toString('hex')}`;
  const turnId = 1; // À déterminer depuis l'historique si disponible
  
  const costUsd = aiMetadata.provider === 'gemini' 
    ? calculateCostUSD(aiMetadata.tokensIn, aiMetadata.tokensOut)
    : calculateCostUSDGPT4Mini(aiMetadata.tokensIn, aiMetadata.tokensOut);
  
  const payload: AITurnCompletedPayload = {
    conversation: {
      conversationId,
      turnId
    },
    routing: {
      provider: aiMetadata.provider,
      model: aiMetadata.model,
      fallbackUsed: aiMetadata.fallbackUsed || false,
      fallbackProvider: aiMetadata.fallbackUsed ? (aiMetadata.provider === 'gemini' ? 'openai' : 'gemini') : null
    },
    retrieval: {
      mode: 'stuffing', // v1 utilise stuffing
      topK: 0
    },
    language: {
      languageDetected: aiMetadata.languageDetected || 'fr',
      languageSelected: context.languagePref || 'fr',
      policyEnforced: true
    },
    usage: {
      tokensIn: aiMetadata.tokensIn || 0,
      tokensOut: aiMetadata.tokensOut || 0,
      latencyMs: aiMetadata.latencyMs,
      costUsdEstimated: costUsd
    },
    cache: {
      responseCacheHit: aiMetadata.cacheHit || false
    },
    content: {
      promptHash: hashText(v1Data.studentMessage),
      responseHash: hashText(v1Data.aiResponse),
      storeRawText: false,
      promptSnippet: v1Data.studentMessage.substring(0, 200),
      responseSnippet: v1Data.aiResponse.substring(0, 200)
    }
  };
  
  return createAITurnCompletedEvent(context, payload);
}

/**
 * Convertit un événement v1 (BacExercise) en événement v2 (exercise.attempt.started)
 */
export function migrateBacExerciseToV2(
  v1Data: {
    studentId: string;
    exerciseId: string;
    currentPartId: string;
    startedAt: Date;
  },
  context: EventContext
): EventEnvelope {
  const attemptId = `attempt_${randomBytes(6).toString('hex')}`;
  
  // Détecter le type d'exercice depuis l'ID
  const isBacD = v1Data.exerciseId.startsWith('bac-d-');
  const subject = v1Data.exerciseId.includes('physique') ? 'physics' : 'math';
  
  const payload: ExerciseAttemptStartedPayload = {
    exercise: {
      exerciseId: v1Data.exerciseId,
      source: 'bac',
      subject: subject as 'math' | 'physics' | 'science'
    },
    attempt: {
      attemptId,
      status: 'started',
      startedAt: v1Data.startedAt.toISOString()
    }
  };
  
  return createExerciseAttemptStartedEvent(context, payload);
}

/**
 * Convertit un événement v1 (BacPartCompletion) en événement v2 (exercise.attempt.completed)
 */
export function migrateBacCompletionToV2(
  v1Data: {
    studentId: string;
    exerciseId: string;
    partId: string;
    attempts: number;
    timeSpent: number; // seconds
    score: number;
    completed: boolean;
    completedAt: Date | null;
  },
  context: EventContext,
  attemptId: string // Doit être corrélé avec l'attempt.started
): EventEnvelope {
  const partIdCanonical = normalizePartId(v1Data.partId);
  
  const payload: ExerciseAttemptCompletedPayload = {
    attempt: {
      attemptId,
      status: v1Data.completed ? 'completed' : 'abandoned',
      durationMs: v1Data.timeSpent * 1000, // Convert seconds to ms
      attemptsTotal: v1Data.attempts
    },
    result: {
      score: v1Data.score,
      maxScore: 1.0,
      passed: v1Data.completed && v1Data.score >= 0.5
    },
    progress: {
      partsCompleted: v1Data.completed ? [partIdCanonical] : [],
      partsTotal: 1 // À déterminer depuis l'exercice si disponible
    }
  };
  
  return createExerciseAttemptCompletedEvent(context, payload);
}
