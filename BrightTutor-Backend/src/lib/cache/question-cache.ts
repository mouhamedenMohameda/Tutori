/**
 * Cache en mémoire pour les questions générées
 * ⚠️ NOTE: Le cache est désactivé pour la lecture - les questions sont toujours régénérées
 * Les questions sont sauvegardées pour référence mais jamais rechargées
 */

interface CachedQuestion {
  partId: string;
  question: string;
  validated: boolean;
  timestamp: number;
}

interface ExerciseCache {
  [exerciseId: string]: {
    [partId: string]: CachedQuestion;
  };
}

const questionCache: ExerciseCache = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes (non utilisé car cache désactivé)

export function getCachedQuestion(exerciseId: string, partId: string): CachedQuestion | null {
  // 🔥 DÉSACTIVÉ: Ne JAMAIS utiliser le cache - toujours générer de nouvelles questions
  // Les questions sont sauvegardées pour référence mais jamais rechargées
  return null;
}

export function setCachedQuestion(
  exerciseId: string,
  partId: string,
  question: string,
  validated: boolean
): void {
  if (!questionCache[exerciseId]) {
    questionCache[exerciseId] = {};
  }
  
  questionCache[exerciseId][partId] = {
    partId,
    question,
    validated,
    timestamp: Date.now()
  };
}

export function getAllCachedQuestions(exerciseId: string): CachedQuestion[] {
  const exercise = questionCache[exerciseId];
  if (!exercise) return [];
  
  return Object.values(exercise).filter(
    q => Date.now() - q.timestamp <= CACHE_TTL
  );
}

export function clearCache(exerciseId: string): void {
  delete questionCache[exerciseId];
}
