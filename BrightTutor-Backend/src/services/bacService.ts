/**
 * BAC API: progress, part-progress, complete, tokens, stored exercises, course rate, chat, dev tools
 */
import { getDataSource } from '@/config/data-source'
import { BacPartCompletion, StoredBacExercise, StoredBacExercisePart } from '@/entities'
import { v4 as uuidv4 } from 'uuid'
import { Like } from 'typeorm'
import {
  getBacProgress,
  getAllBacProgress,
  getOrCreateBacExercise,
  changeCurrentPart,
  completePartForStudent,
  getBacPartProgress,
  saveBacPartProgress,
  clearBacPartProgress,
  getPartSequence,
  getStoredBacExercise,
  getStoredBacExercisesByChapter,
  rateBacCourse,
} from '@/lib/db/bac-queries'
import { getStudentTokens, calculateCostInMRU } from '@/lib/ai/token-tracker'
import { sendBacChatMessage } from '@/lib/ai/bac-chat'
import { formatMathInText } from '@/lib/ai/math-formatter'
import { evaluateComprehensionLevel, canProceedToNextPart } from '@/lib/ai/comprehension-evaluator'

export async function getProgress(studentId: string, exerciseId: string): Promise<{
  exerciseId: string
  currentPartId: string
  completedParts: string[]
  totalScore: number
  progressPercentage: number
  startedAt: Date | null
  lastAccessedAt: Date | null
  partCompletions: Array<{
    partId: string
    score: number
    timeSpent: number
    attempts: number
    completed: boolean
    completedAt: Date | null
  }>
}> {
  const progress = await getBacProgress(studentId, exerciseId)
  return {
    exerciseId,
    currentPartId: progress.exercise.currentPartId,
    completedParts: progress.exercise.completedParts,
    totalScore: progress.exercise.totalScore,
    progressPercentage: progress.progress.percentage,
    startedAt: progress.exercise.startedAt,
    lastAccessedAt: progress.exercise.lastAccessedAt,
    partCompletions: progress.partCompletions.map((pc: { partId: string; score: number; timeSpent: number; attempts: number; completed: boolean; completedAt: Date | null }) => ({
      partId: pc.partId,
      score: pc.score,
      timeSpent: pc.timeSpent,
      attempts: pc.attempts,
      completed: pc.completed,
      completedAt: pc.completedAt,
    })),
  }
}

export async function getProgressAll(
  studentId: string,
  exerciseIds: string[]
): Promise<Record<string, { exerciseId: string; currentPartId: string; completedParts: string[]; totalScore: number; progressPercentage: number; startedAt: Date | null; lastAccessedAt: Date | null; completedPartsCount: number }>> {
  const allProgress = await getAllBacProgress(studentId, exerciseIds)
  const formattedProgress: Record<string, { exerciseId: string; currentPartId: string; completedParts: string[]; totalScore: number; progressPercentage: number; startedAt: Date | null; lastAccessedAt: Date | null; completedPartsCount: number }> = {}
  for (const [exerciseId, progress] of Object.entries(allProgress)) {
    formattedProgress[exerciseId] = {
      exerciseId,
      currentPartId: progress.exercise.currentPartId,
      completedParts: progress.exercise.completedParts,
      totalScore: progress.exercise.totalScore,
      progressPercentage: progress.progress.percentage,
      startedAt: progress.exercise.startedAt,
      lastAccessedAt: progress.exercise.lastAccessedAt,
      completedPartsCount: progress.exercise.completedParts.length,
    }
  }
  return formattedProgress
}

export async function getTokens(studentId: string): Promise<{
  tokensUsed: number
  costMRU: number
  costFormatted: string
}> {
  const tokensUsed = await getStudentTokens(studentId)
  const costMRU = calculateCostInMRU(tokensUsed)
  return {
    tokensUsed,
    costMRU: Math.round(costMRU * 100) / 100,
    costFormatted: `${Math.round(costMRU * 100) / 100} MRU`,
  }
}

export async function getPartProgress(
  studentId: string,
  exerciseId: string,
  partId: string
): Promise<
  | { status: 'not_started'; context: null; recentMessages: null }
  | { status: 'in_progress'; context: unknown; recentMessages: Array<{ role: string; content: string }>; lastMessageAt: Date | null }
> {
  const progress = await getBacPartProgress(studentId, exerciseId, partId)
  if (!progress) {
    return { status: 'not_started', context: null, recentMessages: null }
  }
  let formattedMessages: Array<{ role: string; content: string }>
  try {
    formattedMessages = (progress.recentMessages as Array<{ role: string; content?: string }>).map((msg) => ({
      role: msg.role,
      content: formatMathInText(msg.content || '') as string,
    }))
  } catch {
    formattedMessages = progress.recentMessages as Array<{ role: string; content: string }>
  }
  return {
    status: 'in_progress',
    context: progress.context,
    recentMessages: formattedMessages,
    lastMessageAt: progress.lastMessageAt != null ? new Date(progress.lastMessageAt) : null,
  }
}

export async function savePartProgress(
  studentId: string,
  exerciseId: string,
  partId: string,
  body: { recentMessages?: unknown[]; messages?: unknown[]; context?: unknown; conversationStartedAt?: string }
): Promise<void> {
  await saveBacPartProgress(studentId, exerciseId, partId, {
    recentMessages: (body.recentMessages ?? body.messages ?? []) as Array<{ role: string; content: string }>,
    context: body.context
      ? ({ ...(body.context as Record<string, unknown>), conversationStartedAt: body.conversationStartedAt ?? new Date().toISOString() } as import('@/lib/db/bac-queries').BacPartContext)
      : undefined,
  })
}

export async function clearPartProgress(
  studentId: string,
  exerciseId: string,
  partId: string
): Promise<void> {
  await clearBacPartProgress(studentId, exerciseId, partId)
}

export async function completePart(
  studentId: string,
  body: { exerciseId: string; partId: string; score: number; timeSpent?: number }
): Promise<{ nextPartId: string | null; completed: number }> {
  const { exerciseId, partId, score, timeSpent = 0 } = body
  return completePartForStudent(studentId, exerciseId, partId, Number(score), Number(timeSpent))
}

export async function getCurrent(
  studentId: string,
  exerciseId: string,
  requestedPartId?: string
): Promise<{
  exerciseId: string
  currentPartId: string
  completedParts: string[]
  totalScore: number
  startedAt: Date | null
  lastAccessedAt: Date | null
}> {
  let exercise = await getOrCreateBacExercise(studentId, exerciseId)
  if (requestedPartId && requestedPartId !== exercise.currentPartId) {
    const sequence = getPartSequence(exerciseId)
    if (sequence.length && sequence.includes(requestedPartId)) {
      exercise = await changeCurrentPart(studentId, exerciseId, requestedPartId)
    }
  }
  return {
    exerciseId: exercise.exerciseId,
    currentPartId: exercise.currentPartId,
    completedParts: exercise.completedParts,
    totalScore: exercise.totalScore,
    startedAt: exercise.startedAt,
    lastAccessedAt: exercise.lastAccessedAt,
  }
}

export async function deleteStoredExercise(
  chapterId: string,
  exerciseId: string
): Promise<{ success: true } | { success: false; code: string }> {
  try {
    const ds = await getDataSource()
    const repo = ds.getRepository(StoredBacExercise)
    const existing = await repo.findOne({ where: { chapterId, exerciseId } })
    if (existing) await repo.remove(existing)
    return { success: true }
  } catch (error: unknown) {
    const err = error as { code?: string }
    return { success: false, code: err?.code ?? 'UNKNOWN' }
  }
}

export async function getRandomStoredExercise(
  chapterId: string,
  baseExerciseId?: string
): Promise<{
  success: true
  exercise: { exerciseId: string; title: string; chapterId: string } | null
  totalAvailable: number
  message?: string
}> {
  const ds = await getDataSource()
  const list = await ds.getRepository(StoredBacExercise).find({
    where: { chapterId, isActive: true },
    select: ['id', 'exerciseId', 'title', 'description', 'subject', 'difficulty', 'partSequence'],
    order: { exerciseId: 'ASC' },
  })
  let filtered = list
  if (baseExerciseId) {
    filtered = list.filter(
      (ex: StoredBacExercise) =>
        ex.exerciseId === baseExerciseId || ex.exerciseId.startsWith(baseExerciseId + '-')
    )
  }
  if (filtered.length === 0) {
    return {
      success: true,
      exercise: null,
      totalAvailable: 0,
      message: baseExerciseId
        ? `No stored exercises found for ${baseExerciseId} in chapter ${chapterId}`
        : `No stored exercises found for chapter ${chapterId}`,
    }
  }
  const idx = Math.floor(Math.random() * filtered.length)
  const selected = filtered[idx]
  return {
    success: true,
    exercise: { exerciseId: selected.exerciseId, title: selected.title, chapterId },
    totalAvailable: filtered.length,
  }
}

function toBase(id: string): string {
  const m = id.match(/^(.+?)(-\d{10,})?$/)
  return m ? m[1] : id
}

export async function getStoredExercisesByChapter(chapterId: string): Promise<{
  success: true
  byBase: Record<string, Array<{ exerciseId: string; title: string }>>
}> {
  const rows = await getStoredBacExercisesByChapter(chapterId)
  const byBase: Record<string, Array<{ exerciseId: string; title: string }>> = {}
  for (const row of rows) {
    const base = toBase(row.exerciseId)
    if (!byBase[base]) byBase[base] = []
    byBase[base].push({ exerciseId: row.exerciseId, title: row.title })
  }
  return { success: true, byBase }
}

export async function rateCourse(
  studentId: string,
  courseId: string,
  rating: number
): Promise<
  | { success: true; exerciseId: string; averageRating: number; totalRatings: number }
  | { success: false; status: number }
> {
  const updated = await rateBacCourse(courseId, studentId, rating)
  if (!updated) return { success: false, status: 404 }
  return {
    success: true,
    exerciseId: updated.exerciseId,
    averageRating: updated.averageRating,
    totalRatings: updated.totalRatings,
  }
}

export async function getStoredExercise(
  chapterId: string,
  exerciseId: string
): Promise<unknown | null> {
  return getStoredBacExercise(chapterId, exerciseId)
}

export async function processChat(body: {
  studentId: string
  exerciseId: string
  partId: string
  message: string
  conversationHistory?: Array<{ role: string; content?: string }>
  partQuestion?: string
}): Promise<
  | { success: true; message: string; partId: string; attempts: number; tokensUsed: number; comprehensionLevel?: unknown; canProceed: boolean }
  | { success: false; status: number; error: string }
> {
  const { studentId, exerciseId, partId, message, conversationHistory = [], partQuestion: bodyPartQuestion } = body
  const ds = await getDataSource()
  const [exercise, partCompletion, partProgress] = await Promise.all([
    getOrCreateBacExercise(studentId, exerciseId),
    ds.getRepository(BacPartCompletion).findOne({
      where: { studentId, exerciseId, partId },
    }),
    getBacPartProgress(studentId, exerciseId, partId),
  ])
  const recentHistory = (conversationHistory as Array<{ role: string; content?: string }>).slice(-5).map((msg) => ({
    ...msg,
    content: formatMathInText(msg.content || ''),
  }))
  const partAttempts = exercise.completedParts.includes(partId)
    ? 0
    : partCompletion?.attempts ?? 0
  const messages: Array<{ role: 'user' | 'assistant'; content: string }> = [
    ...recentHistory.map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })),
    { role: 'user', content: formatMathInText(message) },
  ]
  let currentPartQuestion: string | null =
    (bodyPartQuestion as string) || (partProgress?.context as { partQuestion?: string } | undefined)?.partQuestion || null
  if (!currentPartQuestion) {
    const chapterId = exerciseId.startsWith('bac-d-') ? 'bac-d-2023' : 'bac-2023'
    const stored = await getStoredBacExercise(chapterId, exerciseId)
    const parts = stored?.parts
    const part = parts?.find((p: { partId: string; question?: string }) => p.partId === partId)
    if (part?.question) currentPartQuestion = part.question
  }
  if (!currentPartQuestion) {
    return { success: false, status: 400, error: 'partQuestion required (or fetch /bac/current first to get current part data)' }
  }
  const sequence = getPartSequence(exerciseId)
  const currentPartIndex = sequence.indexOf(partId)
  const previousPartsIds = sequence.slice(0, currentPartIndex)
  const previousPartsContexts = await Promise.all(
    previousPartsIds.map(async (prevPartId) => {
      const prev = await getBacPartProgress(studentId, exerciseId, prevPartId)
      const ctx = prev?.context as { partQuestion?: string } | undefined
      return ctx?.partQuestion ? `**Partie ${prevPartId}:** ${ctx.partQuestion}` : null
    })
  )
  const previousPartsContext = previousPartsContexts.filter(Boolean).join('\n\n')
  const [aiResult] = await Promise.all([
    sendBacChatMessage(
      exerciseId,
      partId,
      messages as import('@/lib/ai/bac-chat').BacChatMessage[],
      partAttempts,
      previousPartsContext,
      currentPartQuestion,
      studentId
    ),
    !exercise.completedParts.includes(partId)
      ? (async () => {
          const repo = ds.getRepository(BacPartCompletion)
          const existing = await repo.findOne({ where: { studentId, exerciseId, partId } })
          if (existing) {
            existing.attempts = (existing.attempts || 0) + 1
            await repo.save(existing)
          } else {
            await repo.save(repo.create({ id: uuidv4(), studentId, exerciseId, partId, attempts: 1, completed: false }))
          }
        })().catch(() => {})
      : Promise.resolve(),
  ])
  let comprehensionLevel: unknown = null
  let canProceed = false
  const userCount = messages.filter((m) => m.role === 'user').length
  if (userCount >= 2 && currentPartQuestion) {
    try {
      const evaluationPromise = evaluateComprehensionLevel({
        partId,
        partQuestion: currentPartQuestion,
        messages: [...messages, { role: 'assistant' as const, content: aiResult.response }].map((m) => ({ role: m.role, content: m.content })) as Array<{ role: 'user' | 'assistant'; content: string }>,
        previousPartsContext: previousPartsContext || undefined,
      })
      const evaluation = (await Promise.race([
        evaluationPromise,
        new Promise((r) => setTimeout(() => r(null), 2000)),
      ])) as import('@/lib/ai/comprehension-evaluator').ComprehensionLevel | null
      if (evaluation?.score !== undefined) {
        comprehensionLevel = evaluation
        canProceed = canProceedToNextPart(evaluation)
        const recentMsgs = [...messages, { role: 'assistant' as const, content: aiResult.response }]
          .slice(-5)
          .map((m) => ({ role: m.role, content: m.content }))
        const progressToSave = {
          context: {
            exerciseId,
            partId,
            partQuestion: currentPartQuestion,
            comprehensionLevel: evaluation as import('@/lib/ai/comprehension-evaluator').ComprehensionLevel,
            conversationStartedAt: new Date().toISOString(),
          } as import('@/lib/db/bac-queries').BacPartContext,
          recentMessages: recentMsgs,
        }
        saveBacPartProgress(studentId, exerciseId, partId, progressToSave as Parameters<typeof saveBacPartProgress>[3]).catch(() => {})
      }
    } catch {
      /* non-blocking */
    }
  }
  return {
    success: true,
    message: aiResult.response,
    partId,
    attempts: partAttempts + 1,
    tokensUsed: aiResult.tokensUsed,
    comprehensionLevel: comprehensionLevel ?? undefined,
    canProceed,
  }
}

export async function saveExerciseDev(body: {
  chapterId: string
  exerciseId?: string
  title?: string
  description?: string
  subject?: string
  difficulty?: string
  concepts?: unknown[]
  objectives?: unknown[]
  enonceComplet?: string
  parts: Array<{ partId: string; question?: string; type?: string; difficulty?: string; validated?: boolean }>
}): Promise<{ success: true; exercise: { id: string; exerciseId: string; chapterId: string; partsCount: number } }> {
  const { chapterId, parts, exerciseId: bodyExerciseId, title, description, subject, difficulty, concepts, objectives, enonceComplet } = body
  const baseExerciseId =
    (bodyExerciseId as string)?.replace(/-\d{10,}$/, '').replace(/-gen-\d+$/, '') || `bac-exercise-${chapterId}`
  let newExerciseId = `${baseExerciseId}-${Date.now()}`
  const ds = await getDataSource()
  const repo = ds.getRepository(StoredBacExercise)
  let existing = await repo.findOne({ where: { chapterId, exerciseId: newExerciseId } })
  if (existing) {
    newExerciseId = `${baseExerciseId}-${Date.now()}-${Math.floor(Math.random() * 10000)}`
  }
  const partSequence = getPartSequence(baseExerciseId) || parts.map((p) => p.partId)
  const stored = repo.create({
    id: uuidv4(),
    chapterId,
    exerciseId: newExerciseId,
    title: title || `Exercice ${newExerciseId}`,
    description: description || '',
    subject: subject || 'Mathématiques',
    difficulty: difficulty || 'Moyen',
    concepts: (concepts || []) as string[],
    objectives: (objectives || []) as string[],
    partSequence,
    enonceComplet: enonceComplet ?? null,
    generatedBy: 'dev-tool',
    isActive: true,
  })
  await repo.save(stored)
  const partRepo = ds.getRepository(StoredBacExercisePart)
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index]
    await partRepo.save(
      partRepo.create({
        id: uuidv4(),
        exerciseId: stored.id,
        partId: part.partId,
        question: part.question || '',
        type: part.type || 'calcul',
        difficulty: part.difficulty || difficulty || 'Moyen',
        validated: part.validated !== undefined ? part.validated : true,
        orderIndex: index,
      })
    )
  }
  return {
    success: true,
    exercise: {
      id: stored.id,
      exerciseId: stored.exerciseId,
      chapterId: stored.chapterId,
      partsCount: parts.length,
    },
  }
}

export async function checkExerciseExists(body: {
  chapterId: string
  baseExerciseId: string
}): Promise<{ exists: boolean; existingExercises: string[] }> {
  const { chapterId, baseExerciseId } = body
  const ds = await getDataSource()
  const list = await ds.getRepository(StoredBacExercise).find({
    where: { chapterId, exerciseId: Like(`${baseExerciseId}%`), isActive: true },
    select: ['exerciseId'],
  })
  return { exists: list.length > 0, existingExercises: list.map((e: StoredBacExercise) => e.exerciseId) }
}

export async function regenerateQuestion(body: {
  exerciseId: string
  partId: string
}): Promise<
  | { success: true; partId: string; question: string; validated: boolean }
  | { success: false; status: number; error: string }
> {
  const { exerciseId, partId } = body
  const { getCurriculum } = await import('@/lib/curriculum/curriculum-loader')
  const { BAC_MATHEMATIQUE_D_CURRICULUM } = await import('@/lib/curriculum/math/bac_mathematique_D')
  const isBacD = (exerciseId as string).startsWith('bac-d-')
  const curriculum = isBacD ? BAC_MATHEMATIQUE_D_CURRICULUM : await getCurriculum(5, 'Mathématiques')
  if (!curriculum) return { success: false, status: 404, error: 'Curriculum not found' }
  const chapterId = isBacD ? 'bac-d-2023' : 'bac-2023'
  const chapter = curriculum.chapters.find((ch: { id: string }) => ch.id === chapterId)
  if (!chapter) return { success: false, status: 404, error: 'Chapter not found' }
  const exerciseData = chapter.sections.find((sec: { id: string }) => sec.id === exerciseId)
  if (!exerciseData) return { success: false, status: 404, error: 'Exercise not found' }
  const sequence = getPartSequence(exerciseId)
  const currentPartIndex = sequence.indexOf(partId)
  const previousPartsIds = sequence.slice(0, currentPartIndex)
  const { getAllCachedQuestions } = await import('@/lib/cache/question-cache')
  const { generatePartQuestion } = await import('@/lib/ai/bac-question-generator')
  const allCached = getAllCachedQuestions(exerciseId)
  const previousParts = previousPartsIds
    .map((prevPartId) => {
      const cached = allCached.find((c: { partId: string }) => c.partId === prevPartId)
      if (
        cached?.question &&
        !cached.question.includes('en cours') &&
        !cached.question.includes('Erreur')
      ) {
        return {
          partId: cached.partId,
          question: cached.question,
          type: 'calcul' as const,
          difficulty: (exerciseData as { difficulty?: string }).difficulty || 'Moyen',
          validated: cached.validated,
        }
      }
      return null
    })
    .filter(Boolean) as Array<{ partId: string; question: string; type: 'calcul'; difficulty: string; validated: boolean }>
  const template = {
    exerciseId,
    title: (exerciseData as { title?: string }).title ?? '',
    description: (exerciseData as { description?: string }).description ?? '',
    concepts: ((exerciseData as { concepts?: unknown[] }).concepts || []) as string[],
    objectives: ((exerciseData as { objectives?: unknown[] }).objectives || []) as string[],
    difficulty: (exerciseData as { difficulty?: string }).difficulty || 'Moyen',
    partSequence: sequence,
    enonceComplet: (exerciseData as { content?: { enonce_complet?: string } }).content?.enonce_complet,
  }
  const generated = await generatePartQuestion(template as import('@/lib/ai/bac-question-generator').ExerciseTemplate, partId, previousParts)
  const { setCachedQuestion } = await import('@/lib/cache/question-cache')
  setCachedQuestion(exerciseId, partId, generated.question, generated.validated)
  return { success: true, partId, question: generated.question, validated: generated.validated }
}

export async function generateNewExerciseDev(body: {
  chapterId: string
  exerciseId: string
}): Promise<
  | { success: true; exerciseId: string; title: string; description: string; parts: unknown[] }
  | { success: false; status: number; error: string; debug?: unknown }
> {
  const { chapterId, exerciseId } = body
  const baseExerciseId = (exerciseId as string).replace(/-\d{10,}$/, '')
  const { getCurriculum } = await import('@/lib/curriculum/curriculum-loader')
  const { BAC_MATHEMATIQUE_D_CURRICULUM } = await import('@/lib/curriculum/math/bac_mathematique_D')
  const isBacD = baseExerciseId.includes('bac-d-')
  const isPhysics = baseExerciseId.includes('physique')
  const isScience = baseExerciseId.includes('science')
  const curriculum = isBacD
    ? BAC_MATHEMATIQUE_D_CURRICULUM
    : isPhysics
      ? await getCurriculum(5, 'Physique')
      : isScience
        ? await getCurriculum(5, 'Sciences')
        : await getCurriculum(5, 'Mathématiques')
  if (!curriculum) return { success: false, status: 404, error: 'Curriculum not found' }
  const chapter = curriculum.chapters.find((ch: { id: string }) => ch.id === chapterId)
  if (!chapter) return { success: false, status: 404, error: 'Chapter not found' }
  const exerciseData = chapter.sections.find((sec: { id: string }) => sec.id === baseExerciseId)
  if (!exerciseData) {
    return {
      success: false,
      status: 404,
      error: `Exercise not found: ${baseExerciseId}`,
      debug: { chapterId, exerciseId, baseExerciseId },
    }
  }
  const partSequence = getPartSequence(baseExerciseId)
  if (!partSequence?.length) return { success: false, status: 400, error: `No part sequence for ${baseExerciseId}` }
  const newExerciseId = `${baseExerciseId}-gen-${Date.now()}`
  const { generatePartQuestion } = await import('@/lib/ai/bac-question-generator')
  const generatedParts: Array<{ partId: string; question: string; type: string; difficulty: string; validated: boolean }> = []
  for (const partId of partSequence) {
    const prevParts = generatedParts.map((p) => ({
      partId: p.partId,
      question: p.question,
      type: 'calcul' as const,
      difficulty: (exerciseData as { difficulty?: string }).difficulty || 'Moyen',
      validated: p.validated,
    }))
    const part = await generatePartQuestion(
      {
        exerciseId: newExerciseId,
        title: (exerciseData as { title?: string }).title ?? '',
        description: (exerciseData as { description?: string }).description ?? '',
        concepts: ((exerciseData as { concepts?: unknown[] }).concepts || []) as string[],
        objectives: ((exerciseData as { objectives?: unknown[] }).objectives || []) as string[],
        difficulty: (exerciseData as { difficulty?: string }).difficulty || 'Moyen',
        partSequence,
        enonceComplet: (exerciseData as { content?: { enonce_complet?: string } }).content?.enonce_complet,
      } as import('@/lib/ai/bac-question-generator').ExerciseTemplate,
      partId,
      prevParts
    )
    generatedParts.push({
      partId,
      question: part.question,
      type: part.type || 'calcul',
      difficulty: part.difficulty || 'Moyen',
      validated: part.validated,
    })
  }
  return {
    success: true,
    exerciseId: newExerciseId,
    title: (exerciseData as { title?: string }).title ?? '',
    description: (exerciseData as { description?: string }).description ?? '',
    parts: generatedParts,
  }
}

export async function generateQuestions(body: {
  exerciseId?: string
}): Promise<
  | { success: true; exerciseId: string; total: number; parts: unknown[] }
  | { success: false; status: number; error: string }
> {
  const exerciseId = (body.exerciseId as string) || 'bac-2023-ex1'
  const isBacD = exerciseId.startsWith('bac-d-')
  const { getCurriculum } = await import('@/lib/curriculum/curriculum-loader')
  const { BAC_MATHEMATIQUE_D_CURRICULUM } = await import('@/lib/curriculum/math/bac_mathematique_D')
  const curriculum = isBacD ? BAC_MATHEMATIQUE_D_CURRICULUM : await getCurriculum(5, 'Mathématiques')
  if (!curriculum) return { success: false, status: 404, error: 'Curriculum not found' }
  const chapterId = isBacD ? 'bac-d-2023' : 'bac-2023'
  const chapter = curriculum.chapters.find((ch: { id: string }) => ch.id === chapterId)
  if (!chapter) return { success: false, status: 404, error: 'Chapter not found' }
  const exerciseData = chapter.sections.find((sec: { id: string }) => sec.id === exerciseId)
  if (!exerciseData) return { success: false, status: 404, error: 'Exercise not found' }
  const sequence = getPartSequence(exerciseId)
  const { generatePartQuestion } = await import('@/lib/ai/bac-question-generator')
  const template = {
    exerciseId,
    title: (exerciseData as { title?: string }).title ?? '',
    description: (exerciseData as { description?: string }).description ?? '',
    concepts: ((exerciseData as { concepts?: unknown[] }).concepts || []) as string[],
    objectives: ((exerciseData as { objectives?: unknown[] }).objectives || []) as string[],
    difficulty: (exerciseData as { difficulty?: string }).difficulty || 'Moyen',
    partSequence: sequence,
    enonceComplet: (exerciseData as { content?: { enonce_complet?: string } }).content?.enonce_complet,
  } as import('@/lib/ai/bac-question-generator').ExerciseTemplate
  const generatedParts: Array<{ partId: string; question: string; type: string; difficulty: string; validated: boolean }> = []
  for (const partId of sequence) {
    const prevParts = generatedParts.map((p) => ({
      partId: p.partId,
      question: p.question,
      type: 'calcul' as const,
      difficulty: (exerciseData as { difficulty?: string }).difficulty || 'Moyen',
      validated: p.validated,
    }))
    const part = await generatePartQuestion(template, partId, prevParts)
    generatedParts.push({
      partId,
      question: part.question,
      type: part.type || 'calcul',
      difficulty: part.difficulty || 'Moyen',
      validated: part.validated,
    })
  }
  return { success: true, exerciseId, total: generatedParts.length, parts: generatedParts }
}

export function getTestPage(): { success: true; message: string } {
  return { success: true, message: 'BAC test page endpoint' }
}
