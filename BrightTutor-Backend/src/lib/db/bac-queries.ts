import { prisma } from '@/lib/prisma';
import { parseLearningProgress, serializeLearningProgress, LearningProgressRoot } from '@/lib/learning-progress-utils';

// Type assertion to ensure TypeScript recognizes BAC models
// The models exist in Prisma Client, but TypeScript cache may need refresh
// Using 'as any' is safe here because we know the models exist at runtime
const prismaClient = prisma as any;

/**
 * Get or create a Bac exercise record for a student
 * @throws {Error} if database operation fails
 */
export async function getOrCreateBacExercise(
  studentId: string,
  exerciseId: string = 'bac-2023-ex1' // Default to Exercise 1
) {
  if (!studentId || !exerciseId) {
    throw new Error('studentId and exerciseId are required');
  }

  let exercise = await prismaClient.bacExercise.findUnique({
    where: {
      studentId_exerciseId: {
        studentId,
        exerciseId,
      },
    },
  });

  if (!exercise) {
    // Create new exercise starting at first part
    exercise = await prismaClient.bacExercise.create({
      data: {
        studentId,
        exerciseId,
        currentPartId: getFirstPartId(exerciseId),
        completedParts: [],
        totalScore: 0,
      },
    });
    
    // Log v2 event: exercise.attempt.started (only for new exercises)
    try {
      const { logExerciseAttemptStartedV2 } = await import('@/lib/analytics/event-integration-example');
      const requestId = `req_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      const sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      await logExerciseAttemptStartedV2(
        studentId,
        exerciseId,
        exercise.currentPartId,
        requestId,
        sessionId
      );
    } catch (err) {
      console.error('❌ Error logging exercise attempt started v2 (non-blocking):', err);
    }
  }

  return exercise;
}

/**
 * Change the current part for a student's exercise (allows going back to previous parts)
 * This does NOT mark the part as completed, it just changes which part the student is viewing
 * @throws {Error} if database operation fails or partId is invalid
 */
export async function changeCurrentPart(
  studentId: string,
  exerciseId: string,
  partId: string
): Promise<any> {
  if (!studentId || !exerciseId || !partId) {
    throw new Error('studentId, exerciseId, and partId are required');
  }

  // Validate partId exists in exercise sequence
  const sequence = getPartSequence(exerciseId);
  if (!sequence || sequence.length === 0 || !sequence.includes(partId)) {
    throw new Error(`Invalid partId ${partId} for exercise ${exerciseId}`);
  }

  // Use upsert to avoid separate getOrCreate + update (saves one DB query and connection)
  // This is more efficient than getOrCreateBacExercise + update
  return await prismaClient.bacExercise.upsert({
    where: {
      studentId_exerciseId: {
        studentId,
        exerciseId,
      },
    },
    update: {
      currentPartId: partId,
      lastAccessedAt: new Date(),
    },
    create: {
      studentId,
      exerciseId,
      currentPartId: partId, // Use the requested partId (already validated)
      completedParts: [],
      totalScore: 0,
    },
  });
}

/**
 * Mark a part as completed
 * Uses transaction to ensure data consistency
 * @throws {Error} if database operation fails or invalid parameters
 */
export async function completePartForStudent(
  studentId: string,
  exerciseId: string,
  partId: string,
  score: number,
  timeSpent: number
) {
  // Validate inputs
  if (!studentId || !exerciseId || !partId) {
    throw new Error('studentId, exerciseId, and partId are required');
  }
  if (score < 0 || score > 1) {
    throw new Error('score must be between 0 and 1');
  }
  if (timeSpent < 0) {
    throw new Error('timeSpent must be non-negative');
  }
  // Validate partId is in the sequence
  const sequence = getPartSequence(exerciseId);
  if (!sequence.includes(partId)) {
    throw new Error(`Invalid partId ${partId} for exercise ${exerciseId}`);
  }
  // Use transaction to ensure atomicity of both operations
  return await prisma.$transaction(async (tx) => {
    // 1. Get or create exercise record first (within transaction)
    let exercise = await (tx as any).bacExercise.findUnique({
      where: {
        studentId_exerciseId: {
          studentId,
          exerciseId,
        },
      },
    });

    if (!exercise) {
      exercise = await (tx as any).bacExercise.create({
        data: {
          studentId,
          exerciseId,
          currentPartId: getFirstPartId(exerciseId),
          completedParts: [],
          totalScore: 0,
        },
      });
    }

    // 2. Update or create part completion
    await (tx as any).bacPartCompletion.upsert({
      where: {
        studentId_exerciseId_partId: {
          studentId,
          exerciseId,
          partId,
        },
      },
      update: {
        completed: true,
        score,
        timeSpent,
        completedAt: new Date(),
        attempts: {
          increment: 1,
        },
      },
      create: {
        studentId,
        exerciseId,
        partId,
        completed: true,
        score,
        timeSpent,
        attempts: 1,
        completedAt: new Date(),
      },
    });

    // 3. Update BacExercise record
    // Add to completed parts if not already there
    const completedParts = exercise.completedParts.includes(partId)
      ? exercise.completedParts
      : [...exercise.completedParts, partId];

    // Calculate next part
    const nextPartId = getNextPartId(exerciseId, partId);

    await (tx as any).bacExercise.update({
      where: {
        studentId_exerciseId: {
          studentId,
          exerciseId,
        },
      },
      data: {
        completedParts,
        currentPartId: nextPartId || partId, // Stay on last part if finished
        totalScore: {
          increment: score,
        },
        lastAccessedAt: new Date(),
      },
    });

    return { nextPartId, completed: completedParts.length };
  }).then(async (result) => {
    // Log v2 event: exercise.attempt.completed (after transaction)
    try {
      const { logExerciseAttemptCompletedV2 } = await import('@/lib/analytics/event-integration-example');
      const requestId = `req_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      const sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      const attemptId = `attempt_${exerciseId}_${partId}_${studentId}`;
      
      // Get completion data for logging
      const completion = await prismaClient.bacPartCompletion.findUnique({
        where: {
          studentId_exerciseId_partId: {
            studentId,
            exerciseId,
            partId,
          },
        },
      });
      
      if (completion) {
        await logExerciseAttemptCompletedV2(
          studentId,
          attemptId,
          exerciseId,
          [partId],
          score,
          1.0, // maxScore
          completion.attempts || 1,
          timeSpent,
          requestId,
          sessionId
        );
      }
    } catch (err) {
      console.error('❌ Error logging exercise attempt completed v2 (non-blocking):', err);
    }
    
    return result;
  });
}

/**
 * Get student's progress for an exercise
 * @throws {Error} if database operation fails
 */
export async function getBacProgress(studentId: string, exerciseId: string) {
  if (!studentId || !exerciseId) {
    throw new Error('studentId and exerciseId are required');
  }

  const exercise = await getOrCreateBacExercise(studentId, exerciseId);
  
  const partCompletions = await prismaClient.bacPartCompletion.findMany({
    where: {
      studentId,
      exerciseId,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  const sequence = getPartSequence(exerciseId);
  const total = sequence.length > 0 ? sequence.length : 1;
  const completed = exercise.completedParts.length;
  const percentage = Math.round((completed / total) * 100);

  return {
    exercise,
    partCompletions,
    progress: {
      completed,
      percentage,
    },
  };
}

/**
 * Get student's progress for multiple exercises in a single batch query
 * Optimized to reduce N+1 query problems
 * @throws {Error} if database operation fails
 */
export async function getAllBacProgress(studentId: string, exerciseIds: string[]) {
  if (!studentId || !exerciseIds || exerciseIds.length === 0) {
    throw new Error('studentId and exerciseIds array are required');
  }

  // 🔥 OPTIMIZED: Fetch all exercises in a single query instead of multiple queries
  const existingExercises = await prismaClient.bacExercise.findMany({
    where: {
      studentId,
      exerciseId: { in: exerciseIds },
    },
  });

  // Create a map of existing exercises for quick lookup
  const exerciseMap = new Map<string, any>();
  for (const exercise of existingExercises) {
    exerciseMap.set(exercise.exerciseId, exercise);
  }

  // Find missing exercises and create them in batch
  const missingExerciseIds = exerciseIds.filter(id => !exerciseMap.has(id));
  if (missingExerciseIds.length > 0) {
    // Create missing exercises in parallel (but limit concurrency)
    const newExercises = await Promise.all(
      missingExerciseIds.map(exerciseId => 
        prismaClient.bacExercise.create({
          data: {
            studentId,
            exerciseId,
            currentPartId: getFirstPartId(exerciseId),
            completedParts: [],
            totalScore: 0,
          },
        })
      )
    );
    
    // Add new exercises to the map
    for (const exercise of newExercises) {
      exerciseMap.set(exercise.exerciseId, exercise);
    }
  }

  // Fetch all part completions in a single query (already optimized)
  const allPartCompletions = await prismaClient.bacPartCompletion.findMany({
    where: {
      studentId,
      exerciseId: { in: exerciseIds },
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  // Group part completions by exerciseId
  const partCompletionsByExercise = new Map<string, any[]>();
  for (const completion of allPartCompletions) {
    const exerciseId = completion.exerciseId;
    if (!partCompletionsByExercise.has(exerciseId)) {
      partCompletionsByExercise.set(exerciseId, []);
    }
    partCompletionsByExercise.get(exerciseId)!.push(completion);
  }

  // Build result map
  const result: Record<string, {
    exercise: any;
    partCompletions: any[];
    progress: {
      completed: number;
      percentage: number;
    };
  }> = {};

  // Use the exerciseIds order to maintain consistency
  for (const exerciseId of exerciseIds) {
    const exercise = exerciseMap.get(exerciseId);
    if (exercise) {
      const partCompletions = partCompletionsByExercise.get(exerciseId) || [];
      const sequence = getPartSequence(exerciseId);
      const total = sequence.length > 0 ? sequence.length : 1;
      const completed = exercise.completedParts.length;
      const percentage = Math.round((completed / total) * 100);
      
      result[exerciseId] = {
        exercise,
        partCompletions,
        progress: {
          completed,
          percentage,
        },
      };
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

  // Get existing AI personality to preserve all data
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  });

  // Parse existing learning progress (preserves math, science, sectionProgress, etc.)
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

  // Save to database (preserves all other progress)
  await prisma.aIPersonality.upsert({
    where: { studentId },
    create: {
      studentId,
      learningProgress: serializeLearningProgress(allProgress),
    },
    update: {
      learningProgress: serializeLearningProgress(allProgress),
      updatedAt: new Date(),
    },
  });
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

  // Get AI personality
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  });

  if (!aiPersonality) {
    return null;
  }

  // Parse learning progress
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

  // Get existing AI personality
  const aiPersonality = await prisma.aIPersonality.findUnique({
    where: { studentId },
  });

  if (!aiPersonality) {
    return; // Nothing to clear
  }

  // Parse existing learning progress
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

    // Save to database
    await prisma.aIPersonality.update({
      where: { studentId },
      data: {
        learningProgress: serializeLearningProgress(allProgress),
        updatedAt: new Date(),
      },
    });
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
    // Get all courses for this exercise and find the best one (highest rating)
    const courses = await (prismaClient as any).bacCourseCache.findMany({
      where: { exerciseId },
      orderBy: [
        { averageRating: 'desc' }, // Best rated first
        { totalRatings: 'desc' }, // If same rating, prefer more ratings
        { createdAt: 'desc' }, // Most recent if same
      ],
      take: 1, // Only get the best one
    });

    if (!courses || courses.length === 0) {
      return null;
    }

    const course = courses[0];
    return {
      id: course.id,
      exerciseId: course.exerciseId,
      courseContent: course.courseContent,
      averageRating: course.averageRating,
      totalRatings: course.totalRatings,
    };
  } catch (error) {
    console.error('Error getting BAC course from cache:', error);
    return null;
  }
}

/**
 * Save a new course to cache
 * Always saves a new course (allows multiple courses per exercise)
 */
export async function saveBacCourse(
  exerciseId: string,
  courseContent: string
): Promise<string> {
  try {
    // Always save a new course (no check for existing courses)
    const newCourse = await (prismaClient as any).bacCourseCache.create({
      data: {
        exerciseId,
        courseContent,
        averageRating: 0,
        totalRatings: 0,
        ratings: '[]',
      },
    });

    console.log(`Saved new course for ${exerciseId} (ID: ${newCourse.id})`);
    return newCourse.id;
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
  rating: number // 1-5
): Promise<{
  id: string;
  exerciseId: string;
  averageRating: number;
  totalRatings: number;
} | null> {
  try {
    // Validate rating
    if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      throw new Error('Rating must be an integer between 1 and 5');
    }

    // Get the course to rate
    const course = await (prismaClient as any).bacCourseCache.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      console.log(`Course not found with ID ${courseId}, cannot rate`);
      return null;
    }

    const exerciseId = course.exerciseId;

    // Parse existing ratings
    const ratings: Array<{ studentId: string; rating: number; createdAt: string }> = 
      course.ratings ? JSON.parse(course.ratings) : [];

    // Check if student already rated this course
    const existingRatingIndex = ratings.findIndex(r => r.studentId === studentId);

    if (existingRatingIndex >= 0) {
      // Update existing rating
      ratings[existingRatingIndex] = {
        studentId,
        rating,
        createdAt: new Date().toISOString(),
      };
    } else {
      // Add new rating
      ratings.push({
        studentId,
        rating,
        createdAt: new Date().toISOString(),
      });
    }

    // Calculate new average
    const totalRatings = ratings.length;
    const sumRatings = ratings.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;

    // Update course
    const updatedCourse = await (prismaClient as any).bacCourseCache.update({
      where: { id: courseId },
      data: {
        averageRating,
        totalRatings,
        ratings: JSON.stringify(ratings),
      },
    });

    console.log(`Course ${courseId} (${exerciseId}) rated: ${rating} stars. New average: ${averageRating.toFixed(2)}`);

    // Now check if this course is the best for this exercise
    // Get all courses for this exercise (including the one we just rated)
    const allCourses = await (prismaClient as any).bacCourseCache.findMany({
      where: { exerciseId },
    });

    // Find the best rating among OTHER courses (excluding the one we just rated)
    const otherCourses = allCourses.filter((c: any) => c.id !== courseId);
    const bestRating = otherCourses.length > 0 
      ? Math.max(...otherCourses.map((c: any) => c.averageRating), 0)
      : 0;

    // Compare: if this course's rating is better than or equal to the best existing course
    if (averageRating >= bestRating) {
      // This course is now the best (or tied) - delete all courses with lower ratings
      const coursesToDelete = otherCourses.filter((c: any) => 
        c.averageRating < averageRating
      );

      if (coursesToDelete.length > 0) {
        console.log(`✅ Course ${courseId} is now best (${averageRating.toFixed(2)}). Deleting ${coursesToDelete.length} courses with lower ratings for ${exerciseId}`);
        
        // Delete all courses with lower ratings
        for (const courseToDelete of coursesToDelete) {
          await (prismaClient as any).bacCourseCache.delete({
            where: { id: courseToDelete.id },
          });
        }
      }
    } else if (bestRating > averageRating) {
      // This course has a lower rating than existing courses - delete it
      console.log(`❌ Course ${courseId} has rating ${averageRating.toFixed(2)} which is lower than best (${bestRating.toFixed(2)}), deleting it`);
      await (prismaClient as any).bacCourseCache.delete({
        where: { id: courseId },
      });
      
      // Return null to indicate the course was deleted
      return null;
    }

    return {
      id: updatedCourse.id,
      exerciseId: updatedCourse.exerciseId,
      averageRating: updatedCourse.averageRating,
      totalRatings: updatedCourse.totalRatings,
    };
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
  parts: Array<{
    id: string;
    partId: string;
    question: string;
    type: string;
    difficulty: string;
    validated: boolean;
    orderIndex: number;
  }>;
} | null> {
  try {
    const storedExercise = await prismaClient.storedBacExercise.findUnique({
      where: {
        chapterId_exerciseId: {
          chapterId,
          exerciseId,
        },
      },
      include: {
        parts: {
          orderBy: {
            orderIndex: 'asc',
          },
        },
      },
    });

    if (!storedExercise) {
      return null;
    }

    return {
      id: storedExercise.id,
      chapterId: storedExercise.chapterId,
      exerciseId: storedExercise.exerciseId,
      title: storedExercise.title,
      description: storedExercise.description,
      subject: storedExercise.subject,
      difficulty: storedExercise.difficulty,
      concepts: storedExercise.concepts || [],
      objectives: storedExercise.objectives || [],
      partSequence: storedExercise.partSequence || [],
      enonceComplet: storedExercise.enonceComplet,
      parts: storedExercise.parts.map((part: any) => ({
        id: part.id,
        partId: part.partId,
        question: part.question,
        type: part.type,
        difficulty: part.difficulty,
        validated: part.validated,
        orderIndex: part.orderIndex,
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
export async function hasStoredBacExercise(
  chapterId: string,
  exerciseId: string
): Promise<boolean> {
  try {
    // 🔥 OPTIMIZATION: Use findFirst instead of count - much faster
    const exercise = await prismaClient.storedBacExercise.findFirst({
      where: {
        chapterId,
        exerciseId,
        isActive: true,
      },
      select: {
        id: true, // Only select id to minimize data transfer
      },
    });
    return exercise !== null;
  } catch (error) {
    console.error('Error checking stored BAC exercise:', error);
    return false;
  }
}

/**
 * Get all stored exercises for a chapter
 */
export async function getStoredBacExercisesByChapter(
  chapterId: string
): Promise<Array<{
  id: string;
  exerciseId: string;
  title: string;
  description: string;
  subject: string;
  difficulty: string;
  partSequence: string[];
}>> {
  try {
    const exercises = await prismaClient.storedBacExercise.findMany({
      where: {
        chapterId,
        isActive: true,
      },
      select: {
        id: true,
        exerciseId: true,
        title: true,
        description: true,
        subject: true,
        difficulty: true,
        partSequence: true,
      },
      orderBy: {
        exerciseId: 'asc',
      },
    });

    return exercises;
  } catch (error) {
    console.error('Error getting stored BAC exercises by chapter:', error);
    throw error;
  }
}
