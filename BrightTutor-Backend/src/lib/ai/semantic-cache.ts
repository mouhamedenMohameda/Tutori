/**
 * Cache sémantique pour réponses IA
 * 
 * Utilise des embeddings pour trouver des questions similaires sémantiquement
 * même si elles sont formulées différemment
 */

import { getCache, setCache } from '@/lib/cache';
import { prisma } from '@/lib/prisma';

export interface CachedAIResponse {
  response: string;
  tokensUsed: number;
  cachedAt: number;
  cacheKey: string;
}

export interface SemanticCacheEntry {
  id: string;
  prompt: string;
  promptEmbedding: number[]; // Vector embedding
  response: string;
  tokensUsed: number;
  exerciseId?: string;
  partId?: string;
  language?: string;
  cachedAt: number;
  hitCount: number; // Nombre de fois que cette réponse a été utilisée
}

/**
 * Calcule l'embedding d'un texte (utilise OpenAI ou Gemini)
 */
async function getTextEmbedding(text: string): Promise<number[]> {
  // Option 1: OpenAI embeddings (recommandé pour qualité)
  if (process.env.OPENAI_API_KEY) {
    const OpenAI = (await import('openai')).default;
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small', // Petit, rapide, bon rapport qualité/prix
      input: text.substring(0, 8000) // Limite de tokens
    });
    
    return response.data[0].embedding;
  }
  
  // Option 2: Gemini embeddings (si OpenAI pas disponible)
  // TODO: Implémenter avec Gemini si nécessaire
  throw new Error('No embedding provider available. Set OPENAI_API_KEY or implement Gemini embeddings.');
}

/**
 * Calcule la similarité cosinus entre deux vecteurs
 */
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) return 0;
  
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Cherche une réponse similaire dans le cache sémantique
 * 
 * @param prompt Question de l'étudiant
 * @param options Options de contexte (exerciseId, partId, etc.)
 * @param similarityThreshold Seuil de similarité (0.85 = 85% similaire)
 * @returns {entry: SemanticCacheEntry, similarity: number} si trouvée, null sinon
 */
export async function findSimilarCachedResponse(
  prompt: string,
  options: {
    exerciseId?: string;
    partId?: string;
    language?: string;
  } = {},
  similarityThreshold: number = 0.85 // 85% de similarité minimum
): Promise<{ entry: SemanticCacheEntry; similarity: number } | null> {
  try {
    // 1. Calculer l'embedding de la nouvelle question
    const queryEmbedding = await getTextEmbedding(prompt);
    
    // 2. Chercher dans le cache (pour l'instant: memory cache, plus tard: pgvector)
    // TODO: Implémenter recherche pgvector quand disponible
    // Pour l'instant, on utilise un cache simple avec embeddings stockés
    
    // 3. Chercher dans les entrées en cache pour cet exercice/partie
    const cacheKeyPrefix = `semantic:ai:response:${options.exerciseId || 'general'}:${options.partId || ''}:${options.language || 'fr'}`;
    
    // Pour l'instant, on stocke les embeddings dans Redis/memory cache
    // Format: semantic:ai:response:exerciseId:partId:lang:entryId
    // On itère sur les entrées (limité à 100 pour performance)
    
    // Solution temporaire: stocker les dernières 100 entrées par exercice
    const entriesKey = `${cacheKeyPrefix}:entries`;
    const entries = await getCache<string[]>(entriesKey) || [];
    
    let bestMatch: SemanticCacheEntry | null = null;
    let bestSimilarity = 0;
    
    // Comparer avec chaque entrée en cache
    for (const entryId of entries.slice(0, 100)) { // Limite à 100 pour performance
      const entry = await getCache<SemanticCacheEntry>(entryId);
      if (!entry || !entry.promptEmbedding) continue;
      
      // Filtrer par contexte (même exercice/partie/langue)
      if (options.exerciseId && entry.exerciseId !== options.exerciseId) continue;
      if (options.partId && entry.partId !== options.partId) continue;
      if (options.language && entry.language !== options.language) continue;
      
      // Calculer similarité
      const similarity = cosineSimilarity(queryEmbedding, entry.promptEmbedding);
      
      if (similarity > bestSimilarity && similarity >= similarityThreshold) {
        bestSimilarity = similarity;
        bestMatch = entry;
      }
    }
    
    if (bestMatch) {
      // Incrémenter hit count
      bestMatch.hitCount++;
      await setCache(bestMatch.id, bestMatch, { ttl: 86400 * 7 }); // 7 jours
      
      console.log(`✅ Semantic cache HIT (similarity: ${(bestSimilarity * 100).toFixed(1)}%): ${prompt.substring(0, 50)}...`);
      return { entry: bestMatch, similarity: bestSimilarity };
    }
    
    return null;
  } catch (error) {
    console.error('❌ Error in semantic cache lookup:', error);
    return null; // Fail gracefully, continue with AI call
  }
}

/**
 * Stocke une réponse dans le cache sémantique
 */
export async function storeSemanticCacheEntry(
  prompt: string,
  response: string,
  tokensUsed: number,
  options: {
    exerciseId?: string;
    partId?: string;
    language?: string;
  } = {}
): Promise<void> {
  try {
    // 1. Calculer embedding
    const embedding = await getTextEmbedding(prompt);
    
    // 2. Créer l'entrée
    const entryId = `semantic:ai:response:${options.exerciseId || 'general'}:${options.partId || ''}:${options.language || 'fr'}:${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    const entry: SemanticCacheEntry = {
      id: entryId,
      prompt,
      promptEmbedding: embedding,
      response,
      tokensUsed,
      exerciseId: options.exerciseId,
      partId: options.partId,
      language: options.language || 'fr',
      cachedAt: Date.now(),
      hitCount: 0
    };
    
    // 3. Stocker l'entrée
    await setCache(entryId, entry, { ttl: 86400 * 7 }); // 7 jours
    
    // 4. Ajouter à la liste des entrées pour cet exercice
    const cacheKeyPrefix = `semantic:ai:response:${options.exerciseId || 'general'}:${options.partId || ''}:${options.language || 'fr'}`;
    const entriesKey = `${cacheKeyPrefix}:entries`;
    const entries = await getCache<string[]>(entriesKey) || [];
    entries.push(entryId);
    
    // Garder seulement les 100 dernières entrées
    if (entries.length > 100) {
      // Supprimer les plus anciennes
      const toRemove = entries.slice(0, entries.length - 100);
      for (const oldId of toRemove) {
        // Optionnel: supprimer l'entrée elle-même
      }
      entries.splice(0, entries.length - 100);
    }
    
    await setCache(entriesKey, entries, { ttl: 86400 * 7 });
    
    console.log(`💾 Semantic cache entry stored: ${entryId.substring(0, 50)}...`);
  } catch (error) {
    console.error('❌ Error storing semantic cache entry (non-blocking):', error);
    // Non-blocking: continue même si le cache échoue
  }
}

/**
 * Wrapper pour appeler l'IA avec cache sémantique + cache conceptuel
 */
export async function getAIResponseWithSemanticCache(
  prompt: string,
  aiCallFn: () => Promise<{ response: string; tokensUsed: number }>,
  options: {
    exerciseId?: string;
    partId?: string;
    language?: string;
    subject?: string;
  } = {},
  similarityThreshold: number = 0.85
): Promise<{ response: string; tokensUsed: number; cacheHit: boolean; similarity?: number; cacheType?: 'exact' | 'semantic' | 'concept' }> {
  // 1. Chercher cache exact (rapide)
  const exactCacheKey = `ai:response:${options.exerciseId || 'general'}:${options.partId || ''}:${prompt.substring(0, 50)}`;
  const exactCached = await getCache<CachedAIResponse>(exactCacheKey);
  if (exactCached) {
    return {
      response: exactCached.response,
      tokensUsed: exactCached.tokensUsed,
      cacheHit: true,
      cacheType: 'exact'
    };
  }
  
  // 2. Extraire concept et chercher cache conceptuel
  const { extractConcept, getConceptCacheKey } = await import('./concept-extractor');
  const concept = await extractConcept(prompt, {
    exerciseId: options.exerciseId,
    partId: options.partId,
    subject: options.subject
  });
  
  if (concept && concept.confidence > 0.7) {
    const conceptKey = getConceptCacheKey(concept, {
      exerciseId: options.exerciseId,
      partId: options.partId
    });
    
    const conceptCached = await getCache<CachedAIResponse>(conceptKey);
    if (conceptCached) {
      console.log(`✅ Concept cache HIT: ${concept.concept} (${concept.method})`);
      return {
        response: conceptCached.response,
        tokensUsed: conceptCached.tokensUsed,
        cacheHit: true,
        cacheType: 'concept'
      };
    }
  }
  
  // 3. Chercher réponse sémantique similaire (embeddings)
  const cached = await findSimilarCachedResponse(prompt, options, similarityThreshold);
  
  if (cached) {
    return {
      response: cached.entry.response,
      tokensUsed: cached.entry.tokensUsed,
      cacheHit: true,
      similarity: cached.similarity,
      cacheType: 'semantic'
    };
  }
  
  // 4. Appeler IA
  const result = await aiCallFn();
  
  // 5. Stocker dans tous les caches (non-blocking)
  Promise.all([
    // Cache exact
    setCache(exactCacheKey, {
      response: result.response,
      tokensUsed: result.tokensUsed,
      cachedAt: Date.now(),
      cacheKey: exactCacheKey
    }, { ttl: 86400 }),
    
    // Cache conceptuel (si concept extrait)
    concept && concept.confidence > 0.7
      ? setCache(getConceptCacheKey(concept, { exerciseId: options.exerciseId, partId: options.partId }), {
          response: result.response,
          tokensUsed: result.tokensUsed,
          cachedAt: Date.now(),
          cacheKey: getConceptCacheKey(concept, { exerciseId: options.exerciseId, partId: options.partId })
        }, { ttl: 86400 * 7 }) // 7 jours pour concepts
      : Promise.resolve(),
    
    // Cache sémantique
    storeSemanticCacheEntry(prompt, result.response, result.tokensUsed, options)
  ]).catch(err => {
    console.error('❌ Error storing in caches (non-blocking):', err);
  });
  
  return {
    ...result,
    cacheHit: false
  };
}
