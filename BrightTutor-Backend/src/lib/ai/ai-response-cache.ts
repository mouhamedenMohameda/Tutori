/**
 * Cache pour réponses IA
 * 
 * Réduit les coûts en mettant en cache les réponses IA pour questions similaires
 * Clé de cache normalisée: hash(prompt normalisé + contexte)
 */

import { getCache, setCache, deleteCache } from '@/lib/cache';
import { hashText } from '@/lib/analytics/event-schema-v2';

export interface CachedAIResponse {
  response: string;
  tokensUsed: number;
  cachedAt: number;
  cacheKey: string;
}

export interface CacheKeyOptions {
  exerciseId?: string;
  partId?: string;
  studentId?: string;
  curriculumVersion?: string;
  language?: 'fr' | 'ar';
}

/**
 * Normalise un prompt pour créer une clé de cache stable
 */
function normalizePrompt(prompt: string): string {
  // Supprimer les variations qui ne changent pas la réponse
  return prompt
    .toLowerCase()
    .replace(/\s+/g, ' ') // Normaliser espaces
    .replace(/[^\w\s]/g, '') // Supprimer ponctuation
    .trim();
}

/**
 * Génère une clé de cache pour une réponse IA
 */
export function getAIResponseCacheKey(
  prompt: string,
  options: CacheKeyOptions = {}
): string {
  const normalizedPrompt = normalizePrompt(prompt);
  const promptHash = hashText(normalizedPrompt);
  
  const parts = [
    'ai:response',
    options.exerciseId || 'general',
    options.partId || '',
    options.curriculumVersion || 'v1',
    options.language || 'fr',
    promptHash.substring(0, 16) // 16 premiers chars du hash
  ];
  
  return parts.filter(Boolean).join(':');
}

/**
 * Récupère une réponse IA depuis le cache
 */
export async function getCachedAIResponse(
  prompt: string,
  options: CacheKeyOptions = {}
): Promise<CachedAIResponse | null> {
  const cacheKey = getAIResponseCacheKey(prompt, options);
  const cached = await getCache<CachedAIResponse>(cacheKey);
  
  if (cached) {
    console.log(`✅ AI response cache HIT: ${cacheKey.substring(0, 50)}...`);
    return cached;
  }
  
  return null;
}

/**
 * Met en cache une réponse IA
 */
export async function setCachedAIResponse(
  prompt: string,
  response: string,
  tokensUsed: number,
  options: CacheKeyOptions = {},
  ttlSeconds: number = 86400 // 24h par défaut
): Promise<void> {
  const cacheKey = getAIResponseCacheKey(prompt, options);
  
  const cached: CachedAIResponse = {
    response,
    tokensUsed,
    cachedAt: Date.now(),
    cacheKey
  };
  
  await setCache(cacheKey, cached, { ttl: ttlSeconds });
  console.log(`💾 AI response cached: ${cacheKey.substring(0, 50)}... (TTL: ${ttlSeconds}s)`);
}

/**
 * Invalide le cache pour un exercice (quand curriculum change)
 */
export async function invalidateExerciseCache(
  exerciseId: string,
  curriculumVersion?: string
): Promise<void> {
  // Pattern matching pour supprimer toutes les clés d'un exercice
  // Note: Redis supporte les patterns, memory cache nécessite itération
  const pattern = `ai:response:${exerciseId}:*`;
  
  // Pour l'instant, on log juste (implémentation complète nécessite Redis SCAN)
  console.log(`🗑️  Cache invalidation requested for: ${pattern}`);
  
  // TODO: Implémenter invalidation par pattern si Redis disponible
  // Si memory cache: itérer et supprimer manuellement
}

/**
 * Wrapper pour appeler l'IA avec cache automatique
 */
export async function getAIResponseWithCache<T>(
  prompt: string,
  aiCallFn: () => Promise<{ response: string; tokensUsed: number }>,
  options: CacheKeyOptions = {},
  ttlSeconds: number = 86400
): Promise<{ response: string; tokensUsed: number; cacheHit: boolean }> {
  // 1. Vérifier cache
  const cached = await getCachedAIResponse(prompt, options);
  if (cached) {
    return {
      response: cached.response,
      tokensUsed: cached.tokensUsed,
      cacheHit: true
    };
  }
  
  // 2. Appeler IA
  const result = await aiCallFn();
  
  // 3. Mettre en cache (non-blocking)
  setCachedAIResponse(prompt, result.response, result.tokensUsed, options, ttlSeconds)
    .catch(err => {
      console.error('❌ Error caching AI response (non-blocking):', err);
    });
  
  return {
    ...result,
    cacheHit: false
  };
}
