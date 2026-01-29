/**
 * Stratégie de cache universelle
 * 
 * Gère TOUS les cas de questions similaires :
 * 1. Questions identiques (exact match)
 * 2. Questions avec mêmes concepts/méthodes (concept cache)
 * 3. Questions sémantiquement similaires (embedding cache)
 * 4. Variations linguistiques (typos, orthographe, formulations)
 * 5. Questions dérivées/progressives (même besoin d'explication)
 * 6. Questions inversées (même réponse, formulation différente)
 * 7. Questions avec niveaux de détail différents (même concept)
 * 8. Questions avec contexte différent mais même concept
 */

import { getCache, setCache } from '@/lib/cache';
import { extractConcept, getConceptCacheKey, type ExtractedConcept } from './concept-extractor';
import { findSimilarCachedResponse, storeSemanticCacheEntry, type SemanticCacheEntry } from './semantic-cache';

export interface UniversalCacheResult {
  response: string;
  tokensUsed: number;
  cacheHit: boolean;
  cacheType: 'exact' | 'concept' | 'semantic' | 'normalized' | 'derived' | null;
  confidence: number;
  matchedQuestion?: string; // Question originale qui a matché
}

/**
 * Normalise une question pour gérer les variations
 * - Supprime accents, normalise espaces
 * - Gère typos courants
 * - Normalise ponctuation
 */
export function normalizeQuestion(question: string): string {
  return question
    .toLowerCase()
    // Normaliser accents
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Normaliser espaces
    .replace(/\s+/g, ' ')
    // Normaliser ponctuation
    .replace(/[.,!?;:]/g, '')
    // Normaliser apostrophes
    .replace(/[''`]/g, "'")
    // Supprimer mots vides (optionnel, peut être trop agressif)
    // .replace(/\b(comment|peux|tu|me|expliquer|donner|quelle|quelle|est|la|de|du|des|le|les|un|une)\b/g, '')
    .trim();
}

/**
 * Détecte si une question est une variation dérivée d'une autre
 * Ex: "Je ne comprends pas" → dérivé de la question précédente
 */
export function isDerivedQuestion(question: string, previousQuestions: string[]): boolean {
  const lowerQ = question.toLowerCase();
  
  // Patterns de questions dérivées
  const derivedPatterns = [
    /^(je ne comprends? pas|je comprends? pas|pas compris|incompris)/i,
    /^(peux.*expliquer|explique.*autrement|autre.*exemple|donne.*exemple)/i,
    /^(c'est quoi|c'est|qu'est.*que|définis|définition)/i,
    /^(comment.*faire|comment.*résoudre|comment.*calculer)/i,
    /^(quelle.*formule|quelle.*méthode|quelle.*technique)/i
  ];
  
  // Si la question match un pattern dérivé ET qu'il y a des questions précédentes
  if (previousQuestions.length > 0) {
    const isDerivedPattern = derivedPatterns.some(pattern => pattern.test(question));
    if (isDerivedPattern) {
      return true;
    }
    
    // Vérifier si c'est une question très courte (probablement dérivée)
    if (question.length < 30 && !question.match(/\d/)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Détecte si deux questions sont inversées (même réponse, formulation opposée)
 */
export function areInvertedQuestions(q1: string, q2: string): boolean {
  const lowerQ1 = q1.toLowerCase();
  const lowerQ2 = q2.toLowerCase();
  
  // Patterns pour détecter les questions inversées
  const hasFormule = /quelle.*formule/i.test(lowerQ1) || /quelle.*formule/i.test(lowerQ2);
  const hasCalculer = /comment.*calculer/i.test(lowerQ1) || /comment.*calculer/i.test(lowerQ2);
  
  // Extraire le concept commun (vitesse, force, etc.)
  const extractConcept = (q: string): string | null => {
    const concepts = ['vitesse', 'force', 'acceleration', 'energie', 'photosynthese', 'digestion'];
    for (const concept of concepts) {
      if (q.toLowerCase().includes(concept)) {
        return concept;
      }
    }
    return null;
  };
  
  const concept1 = extractConcept(q1);
  const concept2 = extractConcept(q2);
  
  // Si même concept et patterns inversés
  if (concept1 && concept2 && concept1 === concept2) {
    // Pattern: "Quelle formule" vs "Comment calculer"
    const q1HasFormule = /quelle.*formule|formule/i.test(lowerQ1);
    const q2HasFormule = /quelle.*formule|formule/i.test(lowerQ2);
    const q1HasCalculer = /comment.*calculer|calculer/i.test(lowerQ1);
    const q2HasCalculer = /comment.*calculer|calculer/i.test(lowerQ2);
    
    if ((q1HasFormule && q2HasCalculer) || (q2HasFormule && q1HasCalculer)) {
      return true;
    }
    
    // Pattern: "Qu'est-ce que" vs "Explique"
    if ((/qu'est.*que/i.test(lowerQ1) && /explique/i.test(lowerQ2)) ||
        (/explique/i.test(lowerQ1) && /qu'est.*que/i.test(lowerQ2)) ||
        (/definis/i.test(lowerQ1) && /c'est.*quoi/i.test(lowerQ2)) ||
        (/c'est.*quoi/i.test(lowerQ1) && /definis/i.test(lowerQ2))) {
      return true;
    }
  }
  
  return false;
}

/**
 * Cherche dans le cache normalisé (gère typos, orthographe)
 */
async function findNormalizedCache(
  question: string,
  options: {
    exerciseId?: string;
    partId?: string;
    language?: string;
  }
): Promise<{ response: string; tokensUsed: number; matchedQuestion: string } | null> {
  const normalized = normalizeQuestion(question);
  const cacheKey = `normalized:cache:${options.exerciseId || 'general'}:${options.partId || ''}:${normalized.substring(0, 100)}`;
  
  const cached = await getCache<{ response: string; tokensUsed: number; originalQuestion: string }>(cacheKey);
  if (cached) {
    return {
      response: cached.response,
      tokensUsed: cached.tokensUsed,
      matchedQuestion: cached.originalQuestion
    };
  }
  
  return null;
}

/**
 * Cherche dans le cache des questions dérivées
 * Si la question actuelle est dérivée, cherche la question parente
 */
async function findDerivedCache(
  question: string,
  previousQuestions: string[],
  options: {
    exerciseId?: string;
    partId?: string;
    language?: string;
  }
): Promise<{ response: string; tokensUsed: number; matchedQuestion: string } | null> {
  if (!isDerivedQuestion(question, previousQuestions)) {
    return null;
  }
  
  // Chercher dans les questions précédentes (dans la même session)
  // Si une question précédente a une réponse en cache, réutiliser
  for (const prevQ of previousQuestions.slice(-5).reverse()) { // Dernières 5 questions
    const prevNormalized = normalizeQuestion(prevQ);
    const cacheKey = `normalized:cache:${options.exerciseId || 'general'}:${options.partId || ''}:${prevNormalized.substring(0, 100)}`;
    
    const cached = await getCache<{ response: string; tokensUsed: number; originalQuestion: string }>(cacheKey);
    if (cached) {
      console.log(`✅ Derived cache HIT: "${question}" → matched with "${cached.originalQuestion}"`);
      return {
        response: cached.response,
        tokensUsed: cached.tokensUsed,
        matchedQuestion: cached.originalQuestion
      };
    }
  }
  
  return null;
}

/**
 * Stratégie de cache universelle - essaie tous les niveaux
 */
export async function getAIResponseWithUniversalCache(
  question: string,
  aiCallFn: () => Promise<{ response: string; tokensUsed: number }>,
  options: {
    exerciseId?: string;
    partId?: string;
    language?: string;
    subject?: string;
    previousQuestions?: string[]; // Questions précédentes dans la session
  } = {}
): Promise<UniversalCacheResult> {
  const previousQuestions = options.previousQuestions || [];
  
  // NIVEAU 1: Cache exact (rapide)
  const exactKey = `exact:cache:${options.exerciseId || 'general'}:${options.partId || ''}:${question}`;
  const exactCached = await getCache<{ response: string; tokensUsed: number }>(exactKey);
  if (exactCached) {
    return {
      response: exactCached.response,
      tokensUsed: exactCached.tokensUsed,
      cacheHit: true,
      cacheType: 'exact',
      confidence: 1.0,
      matchedQuestion: question
    };
  }
  
  // NIVEAU 2: Cache normalisé (typos, orthographe, accents)
  const normalizedCached = await findNormalizedCache(question, options);
  if (normalizedCached) {
    return {
      response: normalizedCached.response,
      tokensUsed: normalizedCached.tokensUsed,
      cacheHit: true,
      cacheType: 'normalized',
      confidence: 0.95,
      matchedQuestion: normalizedCached.matchedQuestion
    };
  }
  
  // NIVEAU 3: Cache conceptuel (même concept/méthode, valeurs différentes)
  const concept = await extractConcept(question, {
    exerciseId: options.exerciseId,
    partId: options.partId,
    subject: options.subject
  });
  
  if (concept && concept.confidence > 0.7) {
    const conceptKey = getConceptCacheKey(concept, {
      exerciseId: options.exerciseId,
      partId: options.partId
    });
    
    const conceptCached = await getCache<{ response: string; tokensUsed: number; originalQuestion: string }>(conceptKey);
    if (conceptCached) {
      console.log(`✅ Concept cache HIT: ${concept.concept} (${concept.method})`);
      return {
        response: conceptCached.response,
        tokensUsed: conceptCached.tokensUsed,
        cacheHit: true,
        cacheType: 'concept',
        confidence: concept.confidence,
        matchedQuestion: conceptCached.originalQuestion || question
      };
    }
  }
  
  // NIVEAU 4: Cache questions dérivées (même besoin d'explication)
  // Seulement si c'est vraiment une question dérivée
  if (isDerivedQuestion(question, previousQuestions)) {
    const derivedCached = await findDerivedCache(question, previousQuestions, options);
    if (derivedCached) {
      return {
        response: derivedCached.response,
        tokensUsed: derivedCached.tokensUsed,
        cacheHit: true,
        cacheType: 'derived',
        confidence: 0.85,
        matchedQuestion: derivedCached.matchedQuestion
      };
    }
  }
  
  // NIVEAU 5: Cache sémantique (embeddings - questions similaires)
  const { findSimilarCachedResponse } = await import('./semantic-cache');
  const semanticCached = await findSimilarCachedResponse(question, options, 0.85);
  if (semanticCached) {
    return {
      response: semanticCached.entry.response,
      tokensUsed: semanticCached.entry.tokensUsed,
      cacheHit: true,
      cacheType: 'semantic',
      confidence: semanticCached.similarity,
      matchedQuestion: semanticCached.entry.prompt
    };
  }
  
  // Aucun cache trouvé → Appeler IA
  const result = await aiCallFn();
  
  // Stocker dans TOUS les caches (non-blocking)
  const normalized = normalizeQuestion(question);
  
  // Vérifier que result est valide avant de stocker
  if (!result || !result.response) {
    console.error('❌ Invalid result from AI call:', result);
    return {
      response: 'Erreur lors de l\'appel IA',
      tokensUsed: 0,
      cacheHit: false,
      cacheType: null,
      confidence: 0
    };
  }
  
  Promise.all([
    // Cache exact
    setCache(exactKey, {
      response: result.response,
      tokensUsed: result.tokensUsed
    }, { ttl: 86400 }),
    
    // Cache normalisé
    setCache(`normalized:cache:${options.exerciseId || 'general'}:${options.partId || ''}:${normalized.substring(0, 100)}`, {
      response: result.response,
      tokensUsed: result.tokensUsed,
      originalQuestion: question
    }, { ttl: 86400 }),
    
    // Cache conceptuel
    concept && concept.confidence > 0.7
      ? setCache(getConceptCacheKey(concept, { exerciseId: options.exerciseId, partId: options.partId }), {
          response: result.response,
          tokensUsed: result.tokensUsed,
          originalQuestion: question
        }, { ttl: 86400 * 7 })
      : Promise.resolve(),
    
    // Cache sémantique
    (async () => {
      const { storeSemanticCacheEntry } = await import('./semantic-cache');
      await storeSemanticCacheEntry(question, result.response, result.tokensUsed, options);
    })()
  ]).catch(err => {
    console.error('❌ Error storing in universal cache (non-blocking):', err);
  });
  
  return {
    response: result.response,
    tokensUsed: result.tokensUsed,
    cacheHit: false,
    cacheType: null,
    confidence: 0
  };
}
