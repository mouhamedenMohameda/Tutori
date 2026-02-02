import { getDataSource } from '@/config/data-source';
import { parseLearningProgress, serializeLearningProgress } from '@/lib/learning-progress-utils';
import { BacExercise, BacPartCompletion, AIPersonality, BacCourseCache, StoredBacExercise } from '@/entities';
import { v4 as uuidv4 } from 'uuid';
import { In } from 'typeorm';

/**
 * Get or create a Bac exercise record for a student
 */
export async function getOrCreateBacExercise(
  studentId: string,
  exerciseId: string = 'bac-2023-ex1'
) {
  if (!studentId || !exerciseId) throw new Error('studentId and exerciseId are required');
  const ds = await getDataSource();
  const repo = ds.getRepository(BacExercise);
  let exercise = await repo.findOne({ where: { studentId, exerciseId } });
  if (!exercise) {
    exercise = repo.create({
      id: uuidv4(),
      studentId,
      exerciseId,
      currentPartId: getFirstPartId(exerciseId),
      completedParts: [],
      totalScore: 0,
    });
    await repo.save(exercise);
    try {
      const { logExerciseAttemptStartedV2 } = await import('@/lib/analytics/event-integration-example');
      await logExerciseAttemptStartedV2(studentId, exerciseId, exercise.currentPartId, `req_${Date.now()}`, `sess_${Date.now()}`);
    } catch (err) {
      console.error('❌ Error logging exercise attempt started v2 (non-blocking):', err);
    }
  }
  return exercise;
}

/**
 * Change the current part for a student's exercise
 */
export async function changeCurrentPart(
  studentId: string,
  exerciseId: string,
  partId: string
): Promise<BacExercise> {
  if (!studentId || !exerciseId || !partId) throw new Error('studentId, exerciseId, and partId are required');
  const sequence = getPartSequence(exerciseId);
  if (!sequence?.length || !sequence.includes(partId)) throw new Error(`Invalid partId ${partId} for exercise ${exerciseId}`);
  const ds = await getDataSource();
  const repo = ds.getRepository(BacExercise);
  let exercise = await repo.findOne({ where: { studentId, exerciseId } });
  if (!exercise) {
    exercise = repo.create({ id: uuidv4(), studentId, exerciseId, currentPartId: partId, completedParts: [], totalScore: 0 });
    await repo.save(exercise);
  } else {
    exercise.currentPartId = partId;
    exercise.lastAccessedAt = new Date();
    await repo.save(exercise);
  }
  return exercise;
}

/**
 * Mark a part as completed
 */
export async function completePartForStudent(
  studentId: string,
  exerciseId: string,
  partId: string,
  score: number,
  timeSpent: number
) {
  if (!studentId || !exerciseId || !partId) throw new Error('studentId, exerciseId, and partId are required');
  if (score < 0 || score > 1) throw new Error('score must be between 0 and 1');
  if (timeSpent < 0) throw new Error('timeSpent must be non-negative');
  const sequence = getPartSequence(exerciseId);
  if (!sequence.includes(partId)) throw new Error(`Invalid partId ${partId} for exercise ${exerciseId}`);
  const ds = await getDataSource();
  const result = await ds.manager.transaction(async (manager) => {
    const repoEx = manager.getRepository(BacExercise);
    const repoPart = manager.getRepository(BacPartCompletion);
    let exercise = await repoEx.findOne({ where: { studentId, exerciseId } });
    if (!exercise) {
      exercise = repoEx.create({ id: uuidv4(), studentId, exerciseId, currentPartId: getFirstPartId(exerciseId), completedParts: [], totalScore: 0 });
      await repoEx.save(exercise);
    }
    const existingPart = await repoPart.findOne({ where: { studentId, exerciseId, partId } });
    if (existingPart) {
      existingPart.completed = true;
      existingPart.score = score;
      existingPart.timeSpent = timeSpent;
      existingPart.completedAt = new Date();
      existingPart.attempts = (existingPart.attempts || 0) + 1;
      await repoPart.save(existingPart);
    } else {
      const part = repoPart.create({ id: uuidv4(), studentId, exerciseId, partId, completed: true, score, timeSpent, attempts: 1, completedAt: new Date() });
      await repoPart.save(part);
    }
    const completedParts = exercise.completedParts.includes(partId) ? exercise.completedParts : [...exercise.completedParts, partId];
    const nextPartId = getNextPartId(exerciseId, partId);
    exercise.completedParts = completedParts;
    exercise.currentPartId = nextPartId || partId;
    exercise.totalScore = (exercise.totalScore || 0) + score;
    exercise.lastAccessedAt = new Date();
    await repoEx.save(exercise);
    return { nextPartId, completed: completedParts.length };
  });
  try {
    const completion = await ds.getRepository(BacPartCompletion).findOne({ where: { studentId, exerciseId, partId } });
    if (completion) {
      const { logExerciseAttemptCompletedV2 } = await import('@/lib/analytics/event-integration-example');
      await logExerciseAttemptCompletedV2(studentId, `attempt_${exerciseId}_${partId}_${studentId}`, exerciseId, [partId], score, 1.0, completion.attempts || 1, timeSpent, `req_${Date.now()}`, `sess_${Date.now()}`);
    }
  } catch (err) {
    console.error('❌ Error logging exercise attempt completed v2 (non-blocking):', err);
  }
  return result;
}

/**
 * Get student's progress for an exercise
 */
export async function getBacProgress(studentId: string, exerciseId: string) {
  if (!studentId || !exerciseId) throw new Error('studentId and exerciseId are required');
  const exercise = await getOrCreateBacExercise(studentId, exerciseId);
  const ds = await getDataSource();
  const partCompletions = await ds.getRepository(BacPartCompletion).find({
    where: { studentId, exerciseId },
    order: { createdAt: 'ASC' },
  });
  const sequence = getPartSequence(exerciseId);
  const total = sequence.length > 0 ? sequence.length : 1;
  const completed = exercise.completedParts.length;
  const percentage = Math.round((completed / total) * 100);
  return { exercise, partCompletions, progress: { completed, percentage } };
}

/**
 * Get student's progress for multiple exercises
 */
export async function getAllBacProgress(studentId: string, exerciseIds: string[]) {
  if (!studentId || !exerciseIds?.length) throw new Error('studentId and exerciseIds array are required');
  const ds = await getDataSource();
  const repoEx = ds.getRepository(BacExercise);
  const repoPart = ds.getRepository(BacPartCompletion);
  const existingExercises = await repoEx.find({ where: { studentId, exerciseId: In(exerciseIds) } });
  const exerciseMap = new Map<string, BacExercise>();
  for (const ex of existingExercises) exerciseMap.set(ex.exerciseId, ex);
  const missingIds = exerciseIds.filter(id => !exerciseMap.has(id));
  for (const exerciseId of missingIds) {
    const ex = repoEx.create({ id: uuidv4(), studentId, exerciseId, currentPartId: getFirstPartId(exerciseId), completedParts: [], totalScore: 0 });
    await repoEx.save(ex);
    exerciseMap.set(ex.exerciseId, ex);
  }
  const allPartCompletions = await repoPart.find({ where: { studentId, exerciseId: In(exerciseIds) }, order: { createdAt: 'ASC' } });
  const partByExercise = new Map<string, BacPartCompletion[]>();
  for (const c of allPartCompletions) {
    if (!partByExercise.has(c.exerciseId)) partByExercise.set(c.exerciseId, []);
    partByExercise.get(c.exerciseId)!.push(c);
  }
  const result: Record<string, { exercise: BacExercise; partCompletions: BacPartCompletion[]; progress: { completed: number; percentage: number } }> = {};
  for (const exerciseId of exerciseIds) {
    const exercise = exerciseMap.get(exerciseId);
    if (exercise) {
      const partCompletions = partByExercise.get(exerciseId) || [];
      const seq = getPartSequence(exerciseId);
      const total = seq.length > 0 ? seq.length : 1;
      const completed = exercise.completedParts.length;
      result[exerciseId] = { exercise, partCompletions, progress: { completed, percentage: Math.round((completed / total) * 100) } };
    }
  }
  return result;
}

/**
 * Helper: Get part sequence for an exercise
 * Export this for use in API routes
 */
export function getPartSequence(exerciseId: string): string[] {
  const sequences: Record<string, string[]> = {
    // Bac C exercises
    'bac-2023-ex1': ['1a', '1b', '1c', '2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b'],
    'bac-2023-ex2': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], // Transformations (13 modules)
    'bac-2023-ex3': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], // Nombres complexes (13 modules)
    'bac-2023-ex4': ['1a', '1b', '3a', '3b', '4', '5', '6', '7a', '7b'],
    'bac-2023-ex5': ['1a', '1b', '2a', '2b', '2c', '3a', '3b', '3c'],
    'bac-2023-ex6': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // Suites (10 modules)
    'bac-2023-ex7': ['1a', '1b', '2a', '2b', '2c', '3a', '3b', '3c', '3d'], // Dénombrement
    'bac-2023-ex8': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'], // Probabilités (19 modules)
    'bac-2023-limites-derivees-primitives': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], // Limites, continuité, dérivées et primitives (11 modules)
    'bac-2023-ex11': ['1a', '1b', '1c', '1d', '1e', '2a', '3a', '3b', '3c', '4a', '4b', '5a', '5b'], // Arithmétique
    'bac-2023-ex12': ['1a', '1b', '2a', '2b', '3a', '3b', '4'], // Matrices
    'bac-2023-ex13': ['1a', '1b', '2a', '2b', '3a', '3b', '4a', '4b'], // Coniques
    'bac-2023-equations-differentielles': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], // Équations différentielles (12 modules)
    'bac-2023-systemes-lineaires': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], // Systèmes linéaires (11 modules)
    'bac-2023-logarithmes': ['1', '2', '3', '4', '5', '6'], // Logarithmes et exponentielles (6 modules)
    'bac-2023-calcul-integral': ['1', '2', '3', '4', '5', '6', '7', '8'], // Calcul intégral (8 modules)
    // Bac D exercises (moins de parties que Bac C)
    'bac-d-2023-ex1': ['1a', '1b', '2a', '2b'], // Fonctions
    'bac-d-2023-ex2': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'], // Probabilités (19 modules)
    'bac-d-2023-ex3': ['1', '2'], // Statistiques
    'bac-d-2023-ex4': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // Suites (10 modules, même contenu que Bac C, exercices plus faciles)
    'bac-d-2023-limites-derivees-primitives': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'], // Limites, continuité, dérivées et primitives (11 modules, même contenu que Bac C, exercices plus faciles)
    'bac-d-2023-ex7': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], // Nombres complexes (12 modules, sans transformations)
    'bac-d-2023-ex8': ['1a', '1b', '2a', '2b', '3'], // Fonctions exponentielles
    'bac-d-2023-ex9': ['1', '2', '3', '4', '5', '6'], // Logarithmes et exponentielles (6 modules)
    'bac-d-2023-calcul-integral': ['1', '2', '3', '4', '5', '6', '7', '8'], // Calcul intégral (8 modules, même contenu que Bac C, exercices plus faciles)
    
    // Physique BAC
    'bac-physique-dynamique': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // Dynamique - Mouvement des projectiles (10 parties)
  };
  return sequences[exerciseId] || [];
}

/**
 * Helper: Get first part ID for an exercise
 */
function getFirstPartId(exerciseId: string): string {
  const partMap: Record<string, string> = {
    // Bac C exercises
    'bac-2023-ex1': '1a',
    'bac-2023-ex2': '1',
    'bac-2023-ex3': '1', // Nombres complexes
    'bac-2023-ex4': '1a',
    'bac-2023-ex5': '1a',
    'bac-2023-ex6': '1', // Suites
    'bac-2023-ex7': '1a', // Dénombrement
    'bac-2023-ex8': '1', // Probabilités
    'bac-2023-limites-derivees-primitives': '1', // Limites, continuité, dérivées et primitives
    'bac-2023-ex11': '1a', // Arithmétique
    'bac-2023-ex12': '1a', // Matrices
    'bac-2023-ex13': '1a', // Coniques
    'bac-2023-equations-differentielles': '1', // Équations différentielles
    'bac-2023-systemes-lineaires': '1', // Systèmes linéaires
    'bac-2023-logarithmes': '1', // Logarithmes et exponentielles
    'bac-2023-calcul-integral': '1', // Calcul intégral
    // Bac D exercises
    'bac-d-2023-ex1': '1a',
    'bac-d-2023-ex2': '1', // Probabilités
    'bac-d-2023-ex3': '1',
    'bac-d-2023-ex4': '1', // Suites
    'bac-d-2023-limites-derivees-primitives': '1', // Limites, continuité, dérivées et primitives
    'bac-d-2023-ex7': '1', // Nombres complexes
    'bac-d-2023-ex8': '1a',
    'bac-d-2023-ex9': '1', // Logarithmes et exponentielles
    'bac-d-2023-calcul-integral': '1', // Calcul intégral
    
    // Physique BAC
    'bac-physique-dynamique': '1', // Dynamique - première partie
  };
  return partMap[exerciseId] || '1a';
}

/**
 * Helper: Get next part ID in sequence
 */
function getNextPartId(exerciseId: string, currentPartId: string): string | null {
  // Use the shared getPartSequence function
  const sequence = getPartSequence(exerciseId);
  
  if (!sequence || sequence.length === 0) return null;

  const currentIndex = sequence.indexOf(currentPartId);
  if (currentIndex === -1 || currentIndex === sequence.length - 1) {
    return null; // Already at last part or part not found
  }

  return sequence[currentIndex + 1];
}

/**
 * Helper: Calculate progress percentage
 * Uses the sequences to get accurate total count
 */
function calculateProgress(exerciseId: string, completedParts: string[]): number {
  // Use the shared getPartSequence function
  const sequence = getPartSequence(exerciseId);
  const total = sequence.length > 0 ? sequence.length : 1;
  return Math.round((completedParts.length / total) * 100);
}

/**
 * Interface for BAC part context (always preserved)
 */
export interface BacPartContext {
  exerciseId: string;
  partId: string;
  exerciseTitle?: string;
  partQuestion?: string;
  concepts?: string[];
  difficulty?: string;
  conversationStartedAt: string;
  comprehensionLevel?: {
    level: 'beginner' | 'intermediate' | 'advanced' | 'mastered';
    score: number; // 0-100
    lastEvaluatedAt: string;
    reasoning?: string; // Explication de l'IA sur le niveau
  };
  [key: string]: any; // Allow additional fields
}

/**
 * Interface for BAC part progress (context + recent messages only)
 */
export interface BacPartProgress {
  context: BacPartContext;
  recentMessages: Array<{ role: string; content: string }>; // Only last 5 messages
  lastMessageAt?: string;
}

/**
 * Save intermediate progress for a BAC part (context + recent messages only)
 * This is stored in AIPersonality.learningProgress.bacProgress[exerciseId][partId]
 * Preserves all other learning progress data (math, science, sectionProgress, etc.)
 * Only keeps the last 5 messages, but always preserves the full context
 * 
 * @throws {Error} if database operation fails
 */
export async function saveBacPartProgress(
  studentId: string,
  exerciseId: string,
  partId: string,
  progress: Partial<BacPartProgress>
): Promise<void> {
  if (!studentId || !exerciseId || !partId) {
    throw new Error('studentId, exerciseId, and partId are required');
  }

  const ds = await getDataSource();
  const aiPersonality = await ds.getRepository(AIPersonality).findOne({ where: { studentId } });
  const allProgress = parseLearningProgress(aiPersonality?.learningProgress ?? '{}');

  // Initialize bacProgress if it doesn't exist
  if (!allProgress.bacProgress) {
    allProgress.bacProgress = {};
  }

  // Initialize exercise progress if it doesn't exist
  if (!allProgress.bacProgress[exerciseId]) {
    allProgress.bacProgress[exerciseId] = {};
  }

  // Get existing progress for this part
  const existingPartProgress: BacPartProgress | null = allProgress.bacProgress[exerciseId][partId] || null;

  // Build new progress object
  // Always preserve existing context, but update with new context if provided
  const mergedContext: BacPartContext = progress.context 
    ? {
        ...(existingPartProgress?.context || {
          exerciseId,
          partId,
          conversationStartedAt: new Date().toISOString(),
        }),
        ...progress.context,
        exerciseId, // Always ensure these match
        partId,
      }
    : (existingPartProgress?.context || {
        exerciseId,
        partId,
        conversationStartedAt: new Date().toISOString(),
      });

  // Merge messages: if new messages provided, use them (they should already be the full list)
  // Otherwise keep existing messages
  // Always keep only last 5 messages
  const mergedMessages = progress.recentMessages 
    ? progress.recentMessages.slice(-5) // Only keep last 5 messages
    : (existingPartProgress?.recentMessages || []);

  const newProgress: BacPartProgress = {
    context: mergedContext,
    recentMessages: mergedMessages,
    lastMessageAt: new Date().toISOString(),
  };

  allProgress.bacProgress[exerciseId][partId] = newProgress;
  const repo = ds.getRepository(AIPersonality);
  const existing = await repo.findOne({ where: { studentId } });
  if (existing) {
    existing.learningProgress = serializeLearningProgress(allProgress);
    existing.updatedAt = new Date();
    await repo.save(existing);
  } else {
    await repo.save(repo.create({ id: uuidv4(), studentId, learningProgress: serializeLearningProgress(allProgress) }));
  }
}

/**
 * Get intermediate progress for a BAC part (context + recent messages)
 * Returns null if no progress found for this part
 * 
 * @throws {Error} if database operation fails
 */
export async function getBacPartProgress(
  studentId: string,
  exerciseId: string,
  partId: string
): Promise<BacPartProgress | null> {
  if (!studentId || !exerciseId || !partId) {
    throw new Error('studentId, exerciseId, and partId are required');
  }

  const ds = await getDataSource();
  const aiPersonality = await ds.getRepository(AIPersonality).findOne({ where: { studentId } });
  if (!aiPersonality) return null;
  const allProgress = parseLearningProgress(aiPersonality.learningProgress ?? '{}');

  // Check if bacProgress exists and has data for this exercise/part
  if (
    allProgress.bacProgress &&
    typeof allProgress.bacProgress === 'object' &&
    allProgress.bacProgress[exerciseId] &&
    allProgress.bacProgress[exerciseId][partId]
  ) {
    const savedProgress = allProgress.bacProgress[exerciseId][partId] as any;
    
    // Ensure it has the new structure (backward compatibility)
    if (savedProgress.context && savedProgress.recentMessages) {
      return savedProgress as BacPartProgress;
    }
    
    // Legacy format: convert old format to new format
    if (savedProgress.messages) {
      return {
        context: {
          exerciseId,
          partId,
          conversationStartedAt: savedProgress.conversationStartedAt || new Date().toISOString(),
          ...(savedProgress.exerciseTitle && { exerciseTitle: savedProgress.exerciseTitle }),
          ...(savedProgress.partQuestion && { partQuestion: savedProgress.partQuestion }),
        },
        recentMessages: savedProgress.messages.slice(-5), // Only keep last 5
        lastMessageAt: savedProgress.lastMessageAt,
      };
    }
  }

  return null;
}

/**
 * Clear intermediate progress for a BAC part (called when part is completed)
 * Preserves all other learning progress data
 * 
 * @throws {Error} if database operation fails
 */
export async function clearBacPartProgress(
  studentId: string,
  exerciseId: string,
  partId: string
): Promise<void> {
  if (!studentId || !exerciseId || !partId) {
    throw new Error('studentId, exerciseId, and partId are required');
  }

  const ds = await getDataSource();
  const aiPersonality = await ds.getRepository(AIPersonality).findOne({ where: { studentId } });
  if (!aiPersonality) return;
  const allProgress = parseLearningProgress(aiPersonality.learningProgress ?? '{}');

  // Only clear if bacProgress exists and has data for this exercise/part
  if (
    allProgress.bacProgress &&
    typeof allProgress.bacProgress === 'object' &&
    allProgress.bacProgress[exerciseId] &&
    allProgress.bacProgress[exerciseId][partId]
  ) {
    // Delete the part progress
    delete allProgress.bacProgress[exerciseId][partId];

    // If exercise has no more parts, clean up the exercise entry
    if (Object.keys(allProgress.bacProgress[exerciseId]).length === 0) {
      delete allProgress.bacProgress[exerciseId];
    }

    aiPersonality.learningProgress = serializeLearningProgress(allProgress);
    aiPersonality.updatedAt = new Date();
    await ds.getRepository(AIPersonality).save(aiPersonality);
  }
}

// ===================================
// BAC COURSE CACHE FUNCTIONS
// ===================================

/**
 * Get the best course for an exercise from cache (highest rating)
 * Returns null if no course exists
 */
export async function getBacCourse(exerciseId: string): Promise<{
  id: string;
  exerciseId: string;
  courseContent: string;
  averageRating: number;
  totalRatings: number;
} | null> {
  try {
    const ds = await getDataSource();
    const repo = ds.getRepository(BacCourseCache);
    const courses = await repo.find({
      where: { exerciseId },
      order: { averageRating: 'DESC', totalRatings: 'DESC', createdAt: 'DESC' },
      take: 1,
    });
    if (!courses.length) return null;
    const c = courses[0];
    return { id: c.id, exerciseId: c.exerciseId, courseContent: c.courseContent, averageRating: c.averageRating, totalRatings: c.totalRatings };
  } catch (error) {
    console.error('Error getting BAC course from cache:', error);
    return null;
  }
}

/**
 * Save a new course to cache
 * Always saves a new course (allows multiple courses per exercise)
 */
export async function saveBacCourse(exerciseId: string, courseContent: string): Promise<string> {
  try {
    const ds = await getDataSource();
    const repo = ds.getRepository(BacCourseCache);
    const course = repo.create({ id: uuidv4(), exerciseId, courseContent, averageRating: 0, totalRatings: 0, ratings: '[]' });
    await repo.save(course);
    return course.id;
  } catch (error) {
    console.error('Error saving BAC course to cache:', error);
    throw error;
  }
}

/**
 * Rate a course (1-5 stars) by course ID
 * Updates the average rating and total ratings count
 * If this course becomes the best, deletes all other courses with lower ratings
 * Returns the updated course or null if not found
 */
export async function rateBacCourse(
  courseId: string,
  studentId: string,
  rating: number
): Promise<{ id: string; exerciseId: string; averageRating: number; totalRatings: number } | null> {
  try {
    if (rating < 1 || rating > 5 || !Number.isInteger(rating)) throw new Error('Rating must be an integer between 1 and 5');
    const ds = await getDataSource();
    const repo = ds.getRepository(BacCourseCache);
    const course = await repo.findOne({ where: { id: courseId } });
    if (!course) return null;
    const exerciseId = course.exerciseId;
    const ratings: Array<{ studentId: string; rating: number; createdAt: string }> = course.ratings ? JSON.parse(course.ratings) : [];
    const idx = ratings.findIndex(r => r.studentId === studentId);
    if (idx >= 0) ratings[idx] = { studentId, rating, createdAt: new Date().toISOString() };
    else ratings.push({ studentId, rating, createdAt: new Date().toISOString() });
    const totalRatings = ratings.length;
    const averageRating = totalRatings > 0 ? ratings.reduce((s, r) => s + r.rating, 0) / totalRatings : 0;
    course.averageRating = averageRating;
    course.totalRatings = totalRatings;
    course.ratings = JSON.stringify(ratings);
    await repo.save(course);
    const allCourses = await repo.find({ where: { exerciseId } });
    const otherCourses = allCourses.filter(c => c.id !== courseId);
    const bestRating = otherCourses.length > 0 ? Math.max(...otherCourses.map(c => c.averageRating), 0) : 0;
    if (averageRating >= bestRating) {
      const toDelete = otherCourses.filter(c => c.averageRating < averageRating);
      for (const c of toDelete) await repo.remove(c);
    } else if (bestRating > averageRating) {
      await repo.remove(course);
      return null;
    }
    return { id: course.id, exerciseId: course.exerciseId, averageRating: course.averageRating, totalRatings: course.totalRatings };
  } catch (error) {
    console.error('Error rating BAC course:', error);
    throw error;
  }
}

// ═══════════════════════════════════════════════════════════════
// STORED BAC EXERCISES - Pre-generated exercises from database
// ═══════════════════════════════════════════════════════════════

/**
 * Get a stored BAC exercise by chapter and exercise ID
 * Returns the exercise with all its parts ordered by orderIndex
 */
export async function getStoredBacExercise(
  chapterId: string,
  exerciseId: string
): Promise<{
  id: string;
  chapterId: string;
  exerciseId: string;
  title: string;
  description: string;
  subject: string;
  difficulty: string;
  concepts: string[];
  objectives: string[];
  partSequence: string[];
  enonceComplet: string | null;
  parts: Array<{ id: string; partId: string; question: string; type: string; difficulty: string; validated: boolean; orderIndex: number }>;
} | null> {
  try {
    const ds = await getDataSource();
    const repo = ds.getRepository(StoredBacExercise);
    const stored = await repo.findOne({
      where: { chapterId, exerciseId },
      relations: ['parts'],
      order: { parts: { orderIndex: 'ASC' } } as unknown as { parts: { orderIndex: 'ASC' } },
    });
    if (!stored) return null;
    const parts = (stored.parts || []).slice().sort((a: { orderIndex: number }, b: { orderIndex: number }) => a.orderIndex - b.orderIndex);
    return {
      id: stored.id,
      chapterId: stored.chapterId,
      exerciseId: stored.exerciseId,
      title: stored.title,
      description: stored.description,
      subject: stored.subject,
      difficulty: stored.difficulty,
      concepts: stored.concepts || [],
      objectives: stored.objectives || [],
      partSequence: stored.partSequence || [],
      enonceComplet: stored.enonceComplet,
      parts: parts.map((p: { id: string; partId: string; question: string; type: string; difficulty: string; validated: boolean; orderIndex: number }) => ({
        id: p.id,
        partId: p.partId,
        question: p.question,
        type: p.type,
        difficulty: p.difficulty,
        validated: p.validated,
        orderIndex: p.orderIndex,
      })),
    };
  } catch (error) {
    console.error('Error getting stored BAC exercise:', error);
    throw error;
  }
}

/**
 * Check if a stored exercise exists for a chapter and exercise ID
 */
export async function hasStoredBacExercise(chapterId: string, exerciseId: string): Promise<boolean> {
  try {
    const ds = await getDataSource();
    const one = await ds.getRepository(StoredBacExercise).findOne({ where: { chapterId, exerciseId, isActive: true }, select: ['id'] });
    return one !== null;
  } catch (error) {
    console.error('Error checking stored BAC exercise:', error);
    return false;
  }
}

/**
 * Get all stored exercises for a chapter
 */
export async function getStoredBacExercisesByChapter(chapterId: string): Promise<Array<{
  id: string;
  exerciseId: string;
  title: string;
  description: string;
  subject: string;
  difficulty: string;
  partSequence: string[];
}>> {
  try {
    const ds = await getDataSource();
    const list = await ds.getRepository(StoredBacExercise).find({
      where: { chapterId, isActive: true },
      select: ['id', 'exerciseId', 'title', 'description', 'subject', 'difficulty', 'partSequence'],
      order: { exerciseId: 'ASC' },
    });
    return list;
  } catch (error) {
    console.error('Error getting stored BAC exercises by chapter:', error);
    throw error;
  }
}
