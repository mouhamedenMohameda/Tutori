/**
 * BAC API routes: progress, part-progress, complete, tokens, stored exercises, course rate
 * Ported from BrightTutor-AI-Platform src/app/api/bac/
 */
import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
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
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const JWT_SECRET = () => getJWTSecret()

function getAuthenticatedStudentId(req: Request): string | null {
  const authHeader = req.headers.authorization
  if (authHeader?.startsWith('Bearer ')) {
    try {
      const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as {
        role?: string
        studentId?: string
      }
      if (decoded.role === 'STUDENT' && decoded.studentId) return decoded.studentId
    } catch {
      return null
    }
  }
  const token = (req as any).cookies?.studentToken
  const studentId = (req as any).cookies?.studentId
  if (token && studentId) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET()) as {
        role?: string
        studentId?: string
      }
      if (decoded.role === 'STUDENT' && decoded.studentId === studentId) return studentId
    } catch {
      return null
    }
  }
  return null
}

function requireStudent(req: Request, res: Response): string | null {
  const studentId = getAuthenticatedStudentId(req)
  if (!studentId) {
    res.status(401).json({ error: 'Unauthorized' })
    return null
  }
  return studentId
}

function requireStudentMatchParam(
  req: Request,
  res: Response,
  paramStudentId: string
): string | null {
  const studentId = requireStudent(req, res)
  if (!studentId) return null
  if (studentId !== paramStudentId) {
    res.status(403).json({ error: 'Forbidden' })
    return null
  }
  return studentId
}

// GET /bac/progress?exerciseId=...
router.get('/progress', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const exerciseId = (req.query.exerciseId as string) || 'bac-2023-ex1'
    const progress = await getBacProgress(studentId, exerciseId)
    return res.json({
      exerciseId,
      currentPartId: progress.exercise.currentPartId,
      completedParts: progress.exercise.completedParts,
      totalScore: progress.exercise.totalScore,
      progressPercentage: progress.progress.percentage,
      startedAt: progress.exercise.startedAt,
      lastAccessedAt: progress.exercise.lastAccessedAt,
      partCompletions: progress.partCompletions.map((pc: any) => ({
        partId: pc.partId,
        score: pc.score,
        timeSpent: pc.timeSpent,
        attempts: pc.attempts,
        completed: pc.completed,
        completedAt: pc.completedAt,
      })),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/progress')
  }
})

// GET /bac/progress-all?exerciseIds=bac-2023-ex1,bac-2023-ex2,...
router.get('/progress-all', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const exerciseIdsParam = req.query.exerciseIds as string
    if (!exerciseIdsParam) {
      return res.status(400).json({
        error: 'exerciseIds query parameter is required (comma-separated)',
      })
    }
    const exerciseIds = exerciseIdsParam
      .split(',')
      .map((id) => id.trim())
      .filter((id) => id.length > 0)
    if (exerciseIds.length === 0) {
      return res.status(400).json({ error: 'At least one exerciseId is required' })
    }
    const allProgress = await getAllBacProgress(studentId, exerciseIds)
    const formattedProgress: Record<
      string,
      {
        exerciseId: string
        currentPartId: string
        completedParts: string[]
        totalScore: number
        progressPercentage: number
        startedAt: Date | null
        lastAccessedAt: Date | null
        completedPartsCount: number
      }
    > = {}
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
    return res.json({ success: true, progress: formattedProgress })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/progress-all')
  }
})

// GET /bac/tokens/:studentId
router.get('/tokens/:studentId', async (req: Request, res: Response) => {
  try {
    if (!requireStudentMatchParam(req, res, req.params.studentId)) return
    const studentId = req.params.studentId
    const tokensUsed = await getStudentTokens(studentId)
    const costMRU = calculateCostInMRU(tokensUsed)
    return res.json({
      success: true,
      tokensUsed,
      costMRU: Math.round(costMRU * 100) / 100,
      costFormatted: `${Math.round(costMRU * 100) / 100} MRU`,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/tokens')
  }
})

// GET /bac/part-progress/:studentId/:exerciseId/:partId
router.get(
  '/part-progress/:studentId/:exerciseId/:partId',
  async (req: Request, res: Response) => {
    try {
      if (!requireStudentMatchParam(req, res, req.params.studentId)) return
      const { studentId, exerciseId, partId } = req.params
      const progress = await getBacPartProgress(studentId, exerciseId, partId)
      if (!progress) {
        return res.json({
          status: 'not_started',
          context: null,
          recentMessages: null,
        })
      }
      let formattedMessages = progress.recentMessages
      try {
        const { formatMathInText } = await import('@/lib/ai/math-formatter')
        formattedMessages = progress.recentMessages.map((msg: any) => ({
          ...msg,
          content: formatMathInText(msg.content || ''),
        }))
      } catch {
        // keep original messages if formatter fails
      }
      return res.json({
        status: 'in_progress',
        context: progress.context,
        recentMessages: formattedMessages,
        lastMessageAt: progress.lastMessageAt,
      })
    } catch (error) {
      sendSanitizedError(res, error, 'bac/part-progress')
    }
  }
)

// POST /bac/part-progress/:studentId/:exerciseId/:partId
router.post(
  '/part-progress/:studentId/:exerciseId/:partId',
  async (req: Request, res: Response) => {
    try {
      if (!requireStudentMatchParam(req, res, req.params.studentId)) return
      const { studentId, exerciseId, partId } = req.params
      const body = req.body || {}
      await saveBacPartProgress(studentId, exerciseId, partId, {
        recentMessages: body.recentMessages ?? body.messages ?? [],
        context: body.context
          ? { ...body.context, conversationStartedAt: body.conversationStartedAt ?? new Date().toISOString() }
          : undefined,
      })
      return res.json({ success: true, message: 'Progress saved' })
    } catch (error) {
      sendSanitizedError(res, error, 'bac/part-progress')
    }
  }
)

// DELETE /bac/part-progress/:studentId/:exerciseId/:partId
router.delete(
  '/part-progress/:studentId/:exerciseId/:partId',
  async (req: Request, res: Response) => {
    try {
      if (!requireStudentMatchParam(req, res, req.params.studentId)) return
      const { studentId, exerciseId, partId } = req.params
      await clearBacPartProgress(studentId, exerciseId, partId)
      return res.json({ success: true })
    } catch (error) {
      sendSanitizedError(res, error, 'bac/part-progress')
    }
  }
)

// POST /bac/complete
router.post('/complete', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { exerciseId, partId, score, timeSpent = 0 } = body
    if (!exerciseId || !partId || score === undefined) {
      return res.status(400).json({
        error: 'Missing required fields: exerciseId, partId, and score are required',
      })
    }
    if (score < 0 || score > 1) {
      return res.status(400).json({ error: 'Score must be between 0 and 1' })
    }
    if (timeSpent < 0) {
      return res.status(400).json({ error: 'timeSpent must be non-negative' })
    }
    const result = await completePartForStudent(
      studentId,
      exerciseId,
      partId,
      Number(score),
      Number(timeSpent)
    )
    return res.json({
      success: true,
      nextPartId: result.nextPartId,
      totalCompleted: result.completed,
      message: result.nextPartId
        ? `Bravo! Tu passes maintenant à la partie ${result.nextPartId}`
        : 'Exercice terminé!',
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/complete')
  }
})

// GET /bac/current - minimal: exercise state + optional part change
router.get('/current', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const exerciseId = (req.query.exerciseId as string) || 'bac-2023-ex1'
    const requestedPartId = req.query.partId as string | undefined
    let exercise = await getOrCreateBacExercise(studentId, exerciseId)
    if (requestedPartId && requestedPartId !== exercise.currentPartId) {
      const sequence = getPartSequence(exerciseId)
      if (sequence.length && sequence.includes(requestedPartId)) {
        exercise = await changeCurrentPart(studentId, exerciseId, requestedPartId)
      }
    }
    return res.json({
      success: true,
      exerciseId: exercise.exerciseId,
      currentPartId: exercise.currentPartId,
      completedParts: exercise.completedParts,
      totalScore: exercise.totalScore,
      startedAt: exercise.startedAt,
      lastAccessedAt: exercise.lastAccessedAt,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/current')
  }
})

// DELETE /bac/stored-exercise?chapterId=...&exerciseId=...
router.delete('/stored-exercise', async (req: Request, res: Response) => {
  try {
    if (!requireStudent(req, res)) return
    const chapterId = req.query.chapterId as string
    const exerciseId = req.query.exerciseId as string
    if (!chapterId || !exerciseId) {
      return res.status(400).json({ error: 'chapterId and exerciseId required' })
    }
    await prisma.storedBacExercise.delete({
      where: {
        chapterId_exerciseId: { chapterId, exerciseId },
      },
    })
    return res.json({ success: true })
  } catch (error: any) {
    if (error?.code === 'P2025') {
      return res.status(404).json({ error: 'Exercise not found' })
    }
    sendSanitizedError(res, error, 'bac/stored-exercise')
  }
})

// GET /bac/get-random-stored-exercise?chapterId=...&baseExerciseId=...
router.get('/get-random-stored-exercise', async (req: Request, res: Response) => {
  try {
    const chapterId = req.query.chapterId as string
    const baseExerciseId = req.query.baseExerciseId as string | undefined
    if (!chapterId) {
      return res.status(400).json({ error: 'Missing required parameter: chapterId' })
    }
    let list: Array<{ id: string; exerciseId: string; title: string; description: string; subject: string; difficulty: string; partSequence: string[] }>
    list = await prisma.storedBacExercise.findMany({
      where: { chapterId, isActive: true },
      select: {
        id: true,
        exerciseId: true,
        title: true,
        description: true,
        subject: true,
        difficulty: true,
        partSequence: true,
      },
      orderBy: { exerciseId: 'asc' },
    })
    if (baseExerciseId) {
      list = list.filter(
        (ex) =>
          ex.exerciseId === baseExerciseId ||
          ex.exerciseId.startsWith(baseExerciseId + '-')
      )
    }
    if (list.length === 0) {
      return res.json({
        success: true,
        exercise: null,
        message: baseExerciseId
          ? `No stored exercises found for ${baseExerciseId} in chapter ${chapterId}`
          : `No stored exercises found for chapter ${chapterId}`,
      })
    }
    const idx = Math.floor(Math.random() * list.length)
    const selected = list[idx]
    return res.json({
      success: true,
      exercise: {
        exerciseId: selected.exerciseId,
        title: selected.title,
        chapterId,
      },
      totalAvailable: list.length,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/get-random-stored-exercise')
  }
})

// GET /bac/stored-exercises-by-chapter?chapterId=...
router.get('/stored-exercises-by-chapter', async (req: Request, res: Response) => {
  try {
    const chapterId = req.query.chapterId as string
    if (!chapterId) {
      return res.status(400).json({ error: 'chapterId required' })
    }
    const rows = await getStoredBacExercisesByChapter(chapterId)
    function toBase(id: string): string {
      const m = id.match(/^(.+?)(-\d{10,})?$/)
      return m ? m[1] : id
    }
    const byBase: Record<string, Array<{ exerciseId: string; title: string }>> = {}
    for (const row of rows) {
      const base = toBase(row.exerciseId)
      if (!byBase[base]) byBase[base] = []
      byBase[base].push({ exerciseId: row.exerciseId, title: row.title })
    }
    return res.json({ success: true, byBase })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/stored-exercises-by-chapter')
  }
})

// POST /bac/course/rate
router.post('/course/rate', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { courseId, rating } = body
    if (!courseId || typeof courseId !== 'string') {
      return res.status(400).json({ error: 'courseId is required and must be a string' })
    }
    if (
      typeof rating !== 'number' ||
      rating < 1 ||
      rating > 5 ||
      !Number.isInteger(rating)
    ) {
      return res.status(400).json({
        error: 'rating must be an integer between 1 and 5',
      })
    }
    const updated = await rateBacCourse(courseId, studentId, rating)
    if (!updated) {
      return res.status(404).json({ error: 'Course not found' })
    }
    return res.json({
      success: true,
      exerciseId: updated.exerciseId,
      averageRating: updated.averageRating,
      totalRatings: updated.totalRatings,
      message: 'Course rated successfully',
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/course/rate')
  }
})

// GET /bac/stored-exercise?chapterId=...&exerciseId=...
router.get('/stored-exercise', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const chapterId = req.query.chapterId as string
    const exerciseId = req.query.exerciseId as string
    if (!chapterId || !exerciseId) {
      return res.status(400).json({ error: 'chapterId and exerciseId required' })
    }
    const exercise = await getStoredBacExercise(chapterId, exerciseId)
    if (!exercise) {
      return res.status(404).json({ error: 'Exercise not found' })
    }
    return res.json({ success: true, exercise })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/stored-exercise')
  }
})

// POST /bac/chat
const bacChatRateLimiter = createRateLimiter(rateLimitConfigs.bacChat)

router.post('/chat', async (req: Request, res: Response) => {
  try {
    try {
      const rateLimitReq = {
        url: `${req.protocol}://${req.get('host') || ''}${req.originalUrl}`,
        headers: { get: (name: string) => req.get(name) ?? null },
      }
      const rateLimitResult = await bacChatRateLimiter(rateLimitReq as any)
      if (!rateLimitResult.allowed) {
        Object.entries(getRateLimitHeaders(rateLimitResult)).forEach(([k, v]) =>
          res.setHeader(k, v)
        )
        return res.status(429).json({
          error: 'Too many chat requests. Please try again later.',
          resetTime: rateLimitResult.resetTime,
          retryAfter: rateLimitResult.retryAfter,
        })
      }
    } catch {
      /* fail open */
    }
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { exerciseId, partId, message, conversationHistory = [] } = body
    if (!exerciseId || !partId || !message || message.trim().length === 0) {
      return res.status(400).json({
        error: 'Missing required fields: exerciseId, partId, and message (non-empty)',
      })
    }
    const [exercise, partCompletion, partProgress] = await Promise.all([
      getOrCreateBacExercise(studentId, exerciseId),
      prisma.bacPartCompletion.findUnique({
        where: {
          studentId_exerciseId_partId: { studentId, exerciseId, partId },
        },
      }),
      getBacPartProgress(studentId, exerciseId, partId),
    ])
    const recentHistory = (conversationHistory as any[]).slice(-5).map((msg: any) => ({
      ...msg,
      content: formatMathInText(msg.content || ''),
    }))
    const partAttempts = exercise.completedParts.includes(partId)
      ? 0
      : partCompletion?.attempts ?? 0
    const messages = [
      ...recentHistory,
      { role: 'user' as const, content: formatMathInText(message) },
    ]
    let currentPartQuestion: string | null =
      (body.partQuestion as string) || partProgress?.context?.partQuestion || null
    if (!currentPartQuestion) {
      const chapterId = exerciseId.startsWith('bac-d-') ? 'bac-d-2023' : 'bac-2023'
      const stored = await getStoredBacExercise(chapterId, exerciseId)
      const part = stored?.parts?.find((p: any) => p.partId === partId)
      if (part?.question) currentPartQuestion = part.question
    }
    if (!currentPartQuestion) {
      return res.status(400).json({
        error: 'partQuestion required (or fetch /bac/current first to get current part data)',
      })
    }
    const sequence = getPartSequence(exerciseId)
    const currentPartIndex = sequence.indexOf(partId)
    const previousPartsIds = sequence.slice(0, currentPartIndex)
    const previousPartsContexts = await Promise.all(
      previousPartsIds.map(async (prevPartId) => {
        const prev = await getBacPartProgress(studentId, exerciseId, prevPartId)
        return prev?.context?.partQuestion
          ? `**Partie ${prevPartId}:** ${prev.context.partQuestion}`
          : null
      })
    )
    const previousPartsContext = previousPartsContexts.filter(Boolean).join('\n\n')
    const [aiResult] = await Promise.all([
      sendBacChatMessage(
        exerciseId,
        partId,
        messages,
        partAttempts,
        previousPartsContext,
        currentPartQuestion,
        studentId
      ),
      !exercise.completedParts.includes(partId)
        ? prisma.bacPartCompletion.upsert({
            where: {
              studentId_exerciseId_partId: { studentId, exerciseId, partId },
            },
            update: { attempts: { increment: 1 } },
            create: {
              studentId,
              exerciseId,
              partId,
              attempts: 1,
              completed: false,
            },
          }).catch(() => {})
        : Promise.resolve(),
    ])
    let comprehensionLevel: any = null
    let canProceed = false
    const userCount = messages.filter((m: any) => m.role === 'user').length
    if (userCount >= 2 && currentPartQuestion) {
      try {
        const evaluationPromise = evaluateComprehensionLevel({
          partId,
          partQuestion: currentPartQuestion,
          messages: [
            ...messages,
            { role: 'assistant', content: aiResult.response },
          ].map((m) => ({ role: m.role, content: m.content })),
          previousPartsContext: previousPartsContext || undefined,
        })
        const evaluation = await Promise.race([
          evaluationPromise,
          new Promise((r) => setTimeout(() => r(null), 2000)),
        ]) as any
        if (evaluation?.score !== undefined) {
          comprehensionLevel = evaluation
          canProceed = canProceedToNextPart(evaluation)
          saveBacPartProgress(studentId, exerciseId, partId, {
            context: {
              exerciseId,
              partId,
              partQuestion: currentPartQuestion,
              comprehensionLevel: evaluation,
              conversationStartedAt: new Date().toISOString(),
            },
            recentMessages: [
              ...messages,
              { role: 'assistant' as const, content: aiResult.response },
            ].slice(-5).map((m) => ({ role: m.role, content: m.content })),
          }).catch(() => {})
        }
      } catch {
        /* non-blocking */
      }
    }
    return res.json({
      message: aiResult.response,
      partId,
      attempts: partAttempts + 1,
      tokensUsed: aiResult.tokensUsed,
      comprehensionLevel: comprehensionLevel ?? undefined,
      canProceed,
    })
  } catch (error: any) {
    if (
      error?.message?.includes('GEMINI_API_KEY') ||
      error?.message?.includes('API key')
    ) {
      return res.status(503).json({
        error: 'AI service is not properly configured. Please contact support.',
      })
    }
    sendSanitizedError(res, error, 'bac/chat')
  }
})

// POST /bac/save-exercise (dev only)
router.post('/save-exercise', async (req: Request, res: Response) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Not available in production' })
  }
  try {
    const body = req.body || {}
    const {
      chapterId,
      exerciseId,
      title,
      description,
      subject,
      difficulty,
      concepts,
      objectives,
      enonceComplet,
      parts,
    } = body
    if (!chapterId || !parts || !Array.isArray(parts) || parts.length === 0) {
      return res.status(400).json({ error: 'Missing required fields: chapterId, parts' })
    }
    const baseExerciseId =
      (exerciseId as string)?.replace(/-\d{10,}$/, '').replace(/-gen-\d+$/, '') ||
      `bac-exercise-${chapterId}`
    let newExerciseId = `${baseExerciseId}-${Date.now()}`
    let existing = await prisma.storedBacExercise.findUnique({
      where: {
        chapterId_exerciseId: { chapterId, exerciseId: newExerciseId },
      },
    })
    if (existing) {
      newExerciseId = `${baseExerciseId}-${Date.now()}-${Math.floor(Math.random() * 10000)}`
    }
    const partSequence = getPartSequence(baseExerciseId) || parts.map((p: any) => p.partId)
    const stored = await prisma.storedBacExercise.create({
      data: {
        chapterId,
        exerciseId: newExerciseId,
        title: title || `Exercice ${newExerciseId}`,
        description: description || '',
        subject: subject || 'Mathématiques',
        difficulty: difficulty || 'Moyen',
        concepts: concepts || [],
        objectives: objectives || [],
        partSequence,
        enonceComplet: enonceComplet ?? null,
        generatedBy: 'dev-tool',
        isActive: true,
        parts: {
          create: parts.map((part: any, index: number) => ({
            partId: part.partId,
            question: part.question || '',
            type: part.type || 'calcul',
            difficulty: part.difficulty || difficulty || 'Moyen',
            validated: part.validated !== undefined ? part.validated : true,
            orderIndex: index,
          })),
        },
      },
      include: { parts: true },
    })
    return res.json({
      success: true,
      exercise: {
        id: stored.id,
        exerciseId: stored.exerciseId,
        chapterId: stored.chapterId,
        partsCount: stored.parts.length,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/save-exercise')
  }
})

// POST /bac/check-exercise-exists (dev only)
router.post('/check-exercise-exists', async (req: Request, res: Response) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Not available in production' })
  }
  try {
    const body = req.body || {}
    const { chapterId, baseExerciseId } = body
    if (!chapterId || !baseExerciseId) {
      return res.status(400).json({ error: 'Missing required fields: chapterId, baseExerciseId' })
    }
    const list = await prisma.storedBacExercise.findMany({
      where: {
        chapterId,
        exerciseId: { startsWith: baseExerciseId },
        isActive: true,
      },
      select: { exerciseId: true },
    })
    return res.json({
      exists: list.length > 0,
      existingExercises: list.map((e) => e.exerciseId),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/check-exercise-exists')
  }
})

// POST /bac/regenerate-question
router.post('/regenerate-question', async (req: Request, res: Response) => {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { exerciseId, partId } = body
    if (!exerciseId || !partId) {
      return res.status(400).json({ error: 'Missing exerciseId or partId' })
    }
    const { getCurriculum } = await import('@/lib/curriculum/curriculum-loader')
    const { BAC_MATHEMATIQUE_D_CURRICULUM } = await import(
      '@/lib/curriculum/math/bac_mathematique_D'
    )
    const isBacD = (exerciseId as string).startsWith('bac-d-')
    const curriculum = isBacD
      ? BAC_MATHEMATIQUE_D_CURRICULUM
      : await getCurriculum(5, 'Mathématiques')
    if (!curriculum) {
      return res.status(404).json({ error: 'Curriculum not found' })
    }
    const chapterId = isBacD ? 'bac-d-2023' : 'bac-2023'
    const chapter = curriculum.chapters.find((ch: any) => ch.id === chapterId)
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }
    const exerciseData = chapter.sections.find((sec: any) => sec.id === exerciseId)
    if (!exerciseData) {
      return res.status(404).json({ error: 'Exercise not found' })
    }
    const sequence = getPartSequence(exerciseId)
    const currentPartIndex = sequence.indexOf(partId)
    const previousPartsIds = sequence.slice(0, currentPartIndex)
    const { getAllCachedQuestions } = await import('@/lib/cache/question-cache')
    const { generatePartQuestion } = await import('@/lib/ai/bac-question-generator')
    const allCached = getAllCachedQuestions(exerciseId)
    const previousParts = previousPartsIds
      .map((prevPartId) => {
        const cached = allCached.find((c: any) => c.partId === prevPartId)
        if (cached?.question && !cached.question.includes('en cours') && !cached.question.includes('Erreur')) {
          return {
            partId: cached.partId,
            question: cached.question,
            type: 'calcul' as const,
            difficulty: exerciseData.difficulty || 'Moyen',
            validated: cached.validated,
          }
        }
        return null
      })
      .filter(Boolean) as any[]
    const template = {
      exerciseId,
      title: exerciseData.title,
      description: exerciseData.description,
      concepts: exerciseData.concepts || [],
      objectives: exerciseData.objectives || [],
      difficulty: exerciseData.difficulty || 'Moyen',
      partSequence: sequence,
      enonceComplet: exerciseData.content?.enonce_complet,
    }
    const generated = await generatePartQuestion(template, partId, previousParts)
    const { setCachedQuestion } = await import('@/lib/cache/question-cache')
    setCachedQuestion(exerciseId, partId, generated.question, generated.validated)
    return res.json({
      success: true,
      partId,
      question: generated.question,
      validated: generated.validated,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/regenerate-question')
  }
})

// POST /bac/generate-new-exercise (dev only) - returns generated parts, does not save
router.post('/generate-new-exercise', async (req: Request, res: Response) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Not available in production' })
  }
  try {
    const body = req.body || {}
    const { chapterId, exerciseId } = body
    if (!chapterId || !exerciseId) {
      return res.status(400).json({ error: 'Missing required fields: chapterId, exerciseId' })
    }
    const baseExerciseId = (exerciseId as string).replace(/-\d{10,}$/, '')
    const { getCurriculum } = await import('@/lib/curriculum/curriculum-loader')
    const { BAC_MATHEMATIQUE_D_CURRICULUM } = await import(
      '@/lib/curriculum/math/bac_mathematique_D'
    )
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
    if (!curriculum) {
      return res.status(404).json({ error: 'Curriculum not found' })
    }
    const chapter = curriculum.chapters.find((ch: any) => ch.id === chapterId)
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }
    const exerciseData = chapter.sections.find((sec: any) => sec.id === baseExerciseId)
    if (!exerciseData) {
      return res.status(404).json({
        error: `Exercise not found: ${baseExerciseId}`,
        debug: { chapterId, exerciseId, baseExerciseId },
      })
    }
    const partSequence = getPartSequence(baseExerciseId)
    if (!partSequence?.length) {
      return res.status(400).json({ error: `No part sequence for ${baseExerciseId}` })
    }
    const newExerciseId = `${baseExerciseId}-gen-${Date.now()}`
    const { generatePartQuestion } = await import('@/lib/ai/bac-question-generator')
    const generatedParts: any[] = []
    for (const partId of partSequence) {
      const prevParts = generatedParts.map((p) => ({
        partId: p.partId,
        question: p.question,
        type: 'calcul' as const,
        difficulty: exerciseData.difficulty || 'Moyen',
        validated: p.validated,
      }))
      const part = await generatePartQuestion(
        {
          exerciseId: newExerciseId,
          title: exerciseData.title,
          description: exerciseData.description,
          concepts: exerciseData.concepts || [],
          objectives: exerciseData.objectives || [],
          difficulty: exerciseData.difficulty || 'Moyen',
          partSequence,
          enonceComplet: exerciseData.content?.enonce_complet,
        },
        partId,
        prevParts
      )
      generatedParts.push({ partId, question: part.question, type: part.type || 'calcul', difficulty: part.difficulty || 'Moyen', validated: part.validated })
    }
    return res.json({
      success: true,
      exerciseId: newExerciseId,
      title: exerciseData.title,
      description: exerciseData.description,
      parts: generatedParts,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/generate-new-exercise')
  }
})

// POST /bac/generate-questions - body: { exerciseId }, streams SSE or returns JSON
router.post('/generate-questions', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const exerciseId = (body.exerciseId as string) || 'bac-2023-ex1'
    const isBacD = exerciseId.startsWith('bac-d-')
    const { getCurriculum } = await import('@/lib/curriculum/curriculum-loader')
    const { BAC_MATHEMATIQUE_D_CURRICULUM } = await import(
      '@/lib/curriculum/math/bac_mathematique_D'
    )
    const curriculum = isBacD
      ? BAC_MATHEMATIQUE_D_CURRICULUM
      : await getCurriculum(5, 'Mathématiques')
    if (!curriculum) {
      return res.status(404).json({ error: 'Curriculum not found' })
    }
    const chapterId = isBacD ? 'bac-d-2023' : 'bac-2023'
    const chapter = curriculum.chapters.find((ch: any) => ch.id === chapterId)
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }
    const exerciseData = chapter.sections.find((sec: any) => sec.id === exerciseId)
    if (!exerciseData) {
      return res.status(404).json({ error: 'Exercise not found' })
    }
    const sequence = getPartSequence(exerciseId)
    const { generatePartQuestion } = await import('@/lib/ai/bac-question-generator')
    const template = {
      exerciseId,
      title: exerciseData.title,
      description: exerciseData.description,
      concepts: exerciseData.concepts || [],
      objectives: exerciseData.objectives || [],
      difficulty: exerciseData.difficulty || 'Moyen',
      partSequence: sequence,
      enonceComplet: exerciseData.content?.enonce_complet,
    }
    const generatedParts: any[] = []
    for (const partId of sequence) {
      const prevParts = generatedParts.map((p) => ({
        partId: p.partId,
        question: p.question,
        type: 'calcul' as const,
        difficulty: exerciseData.difficulty || 'Moyen',
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
    return res.json({
      success: true,
      exerciseId,
      total: generatedParts.length,
      parts: generatedParts,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/generate-questions')
  }
})

// GET /bac/test-page - stub for compatibility
router.get('/test-page', (_req: Request, res: Response) => {
  res.json({ success: true, message: 'BAC test page endpoint' })
})

export default router
