/**
 * BAC API controller: progress, part-progress, complete, tokens, stored exercises, course rate, chat, dev tools
 */
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import {
  getProgress,
  getProgressAll,
  getTokens,
  getPartProgress,
  savePartProgress,
  clearPartProgress,
  completePart,
  getCurrent,
  getCourse as getCourseService,
  generateCourse as generateCourseService,
  startExerciseForStudent,
  deleteStoredExercise,
  getRandomStoredExercise,
  getStoredExercisesByChapter,
  rateCourse,
  getStoredExercise,
  processChat,
  saveExerciseDev,
  checkExerciseExists,
  regenerateQuestion,
  generateNewExerciseDev,
  generateQuestions,
  getTestPage,
} from '@/services/bacService'

const JWT_SECRET = () => getJWTSecret()

function getAuthenticatedStudentId(req: Request): string | null {
  const authHeader = req.headers.authorization
  if (authHeader?.startsWith('Bearer ')) {
    try {
      const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { role?: string; studentId?: string }
      if (decoded.role === 'STUDENT' && decoded.studentId) return decoded.studentId
    } catch {
      return null
    }
  }
  const token = (req as unknown as { cookies?: { studentToken?: string; studentId?: string } }).cookies?.studentToken
  const studentId = (req as unknown as { cookies?: { studentId?: string } }).cookies?.studentId
  if (token && studentId) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET()) as { role?: string; studentId?: string }
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

function requireStudentMatchParam(req: Request, res: Response, paramStudentId: string): string | null {
  const studentId = requireStudent(req, res)
  if (!studentId) return null
  if (studentId !== paramStudentId) {
    res.status(403).json({ error: 'Forbidden' })
    return null
  }
  return studentId
}

const bacChatRateLimiter = createRateLimiter(rateLimitConfigs.bacChat)

function toRateLimitRequest(req: Request): { url: string; headers: { get: (name: string) => string | null } } {
  return {
    url: `${req.protocol}://${req.get('host') || ''}${req.originalUrl}`,
    headers: { get: (name: string) => req.get(name) ?? null },
  }
}

export async function progress(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const exerciseId = (req.query.exerciseId as string) || 'bac-2023-ex1'
    const data = await getProgress(studentId, exerciseId)
    res.json(data)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/progress')
  }
}

export async function progressAll(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const exerciseIdsParam = req.query.exerciseIds as string
    if (!exerciseIdsParam) {
      res.status(400).json({ error: 'exerciseIds query parameter is required (comma-separated)' })
      return
    }
    const exerciseIds = exerciseIdsParam
      .split(',')
      .map((id) => id.trim())
      .filter((id) => id.length > 0)
    if (exerciseIds.length === 0) {
      res.status(400).json({ error: 'At least one exerciseId is required' })
      return
    }
    const progressData = await getProgressAll(studentId, exerciseIds)
    res.json({ success: true, progress: progressData })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/progress-all')
  }
}

export async function tokens(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudentMatchParam(req, res, req.params.studentId)) return
    const data = await getTokens(req.params.studentId)
    res.json({ success: true, ...data })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/tokens')
  }
}

export async function partProgressGet(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudentMatchParam(req, res, req.params.studentId)) return
    const { studentId, exerciseId, partId } = req.params
    const result = await getPartProgress(studentId, exerciseId, partId)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/part-progress')
  }
}

export async function partProgressPost(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudentMatchParam(req, res, req.params.studentId)) return
    const { studentId, exerciseId, partId } = req.params
    await savePartProgress(studentId, exerciseId, partId, req.body || {})
    res.json({ success: true, message: 'Progress saved' })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/part-progress')
  }
}

export async function partProgressDelete(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudentMatchParam(req, res, req.params.studentId)) return
    const { studentId, exerciseId, partId } = req.params
    await clearPartProgress(studentId, exerciseId, partId)
    res.json({ success: true })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/part-progress')
  }
}

export async function complete(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { exerciseId, partId, score, timeSpent = 0 } = body
    if (!exerciseId || !partId || score === undefined) {
      res.status(400).json({ error: 'Missing required fields: exerciseId, partId, and score are required' })
      return
    }
    if (score < 0 || score > 1) {
      res.status(400).json({ error: 'Score must be between 0 and 1' })
      return
    }
    if (timeSpent < 0) {
      res.status(400).json({ error: 'timeSpent must be non-negative' })
      return
    }
    const result = await completePart(studentId, { exerciseId, partId, score, timeSpent })
    res.json({
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
}

export async function current(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const exerciseId = (req.query.exerciseId as string) || 'bac-2023-ex1'
    const requestedPartId = req.query.partId as string | undefined
    const data = await getCurrent(studentId, exerciseId, requestedPartId)
    res.json({ success: true, ...data })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/current')
  }
}

// Alias for mobile app compatibility
export async function currentState(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const exerciseId = (req.query.exerciseId as string) || 'bac-2023-ex1'
    const requestedPartId = req.query.partId as string | undefined
    const data = await getCurrent(studentId, exerciseId, requestedPartId)
    res.json({ success: true, ...data })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/current-state')
  }
}

// GET /bac/tokens with query params (for mobile app)
export async function tokensQuery(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const data = await getTokens(studentId)
    res.json({ success: true, ...data })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/tokens')
  }
}

// GET /bac/part-progress with query params (for mobile app)
export async function partProgressGetQuery(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const exerciseId = req.query.exerciseId as string
    const partId = req.query.partId as string
    if (!exerciseId || !partId) {
      res.status(400).json({ error: 'exerciseId and partId required' })
      return
    }
    const data = await getPartProgress(studentId, exerciseId, partId)
    res.json({ success: true, ...data })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/part-progress')
  }
}

// GET /bac/course - get existing course for an exercise
export async function getCourse(req: Request, res: Response): Promise<void> {
  try {
    const exerciseId = req.query.exerciseId as string
    if (!exerciseId) {
      res.status(400).json({ error: 'exerciseId required' })
      return
    }
    const course = await getCourseService(exerciseId)
    if (!course) {
      res.status(404).json({ error: 'Course not found' })
      return
    }
    res.json(course)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/course')
  }
}

// POST /bac/course - generate a new course for an exercise
export async function generateCourse(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const { exerciseId } = req.body || {}
    if (!exerciseId) {
      res.status(400).json({ error: 'exerciseId required' })
      return
    }
    const course = await generateCourseService(exerciseId, studentId)
    res.json(course)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/course')
  }
}

// POST /bac/start-exercise - start or resume an exercise
export async function startExercise(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const { exerciseId } = req.body || {}
    if (!exerciseId) {
      res.status(400).json({ error: 'exerciseId required' })
      return
    }
    const result = await startExerciseForStudent(studentId, exerciseId)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/start-exercise')
  }
}

// GET /bac/check-exercise-exists (for mobile app)
export async function checkExerciseExistsGet(req: Request, res: Response): Promise<void> {
  try {
    const exerciseId = req.query.exerciseId as string
    if (!exerciseId) {
      res.status(400).json({ error: 'exerciseId required' })
      return
    }
    // Parse exerciseId to get chapterId and baseExerciseId
    // Format: bac-{type}-{year}-ex{number} e.g., bac-c-2023-ex1
    const parts = exerciseId.split('-')
    if (parts.length < 4) {
      res.json({ exists: false })
      return
    }
    const chapterId = `${parts[0]}-${parts[1]}-${parts[2]}` // e.g., bac-c-2023
    const baseExerciseId = parts.slice(3).join('-') // e.g., ex1
    const result = await checkExerciseExists({ chapterId, baseExerciseId })
    res.json({ exists: result.exists || false })
  } catch (error) {
    res.json({ exists: false })
  }
}

export async function storedExerciseDelete(req: Request, res: Response): Promise<void> {
  try {
    if (!requireStudent(req, res)) return
    const chapterId = req.query.chapterId as string
    const exerciseId = req.query.exerciseId as string
    if (!chapterId || !exerciseId) {
      res.status(400).json({ error: 'chapterId and exerciseId required' })
      return
    }
    const result = await deleteStoredExercise(chapterId, exerciseId)
    if (!result.success && result.code === 'P2025') {
      res.status(404).json({ error: 'Exercise not found' })
      return
    }
    if (!result.success) throw new Error('Delete failed')
    res.json({ success: true })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/stored-exercise')
  }
}

export async function getRandomStoredExerciseHandler(req: Request, res: Response): Promise<void> {
  try {
    const chapterId = req.query.chapterId as string
    const baseExerciseId = req.query.baseExerciseId as string | undefined
    if (!chapterId) {
      res.status(400).json({ error: 'Missing required parameter: chapterId' })
      return
    }
    const result = await getRandomStoredExercise(chapterId, baseExerciseId)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/get-random-stored-exercise')
  }
}

export async function storedExercisesByChapter(req: Request, res: Response): Promise<void> {
  try {
    const chapterId = req.query.chapterId as string
    if (!chapterId) {
      res.status(400).json({ error: 'chapterId required' })
      return
    }
    const result = await getStoredExercisesByChapter(chapterId)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/stored-exercises-by-chapter')
  }
}

export async function courseRate(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { courseId, rating } = body
    if (!courseId || typeof courseId !== 'string') {
      res.status(400).json({ error: 'courseId is required and must be a string' })
      return
    }
    if (typeof rating !== 'number' || rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      res.status(400).json({ error: 'rating must be an integer between 1 and 5' })
      return
    }
    const result = await rateCourse(studentId, courseId, rating)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: 'Course not found' })
      return
    }
    res.json({
      success: true,
      exerciseId: result.exerciseId,
      averageRating: result.averageRating,
      totalRatings: result.totalRatings,
      message: 'Course rated successfully',
    })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/course/rate')
  }
}

export async function storedExerciseGet(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const chapterId = req.query.chapterId as string
    const exerciseId = req.query.exerciseId as string
    if (!chapterId || !exerciseId) {
      res.status(400).json({ error: 'chapterId and exerciseId required' })
      return
    }
    const exercise = await getStoredExercise(chapterId, exerciseId)
    if (!exercise) {
      res.status(404).json({ error: 'Exercise not found' })
      return
    }
    res.json({ success: true, exercise })
  } catch (error) {
    sendSanitizedError(res, error, 'bac/stored-exercise')
  }
}

export async function chat(req: Request, res: Response): Promise<void> {
  try {
    try {
      const rateLimitResult = await bacChatRateLimiter(toRateLimitRequest(req) as Parameters<typeof bacChatRateLimiter>[0])
      if (!rateLimitResult.allowed) {
        Object.entries(getRateLimitHeaders(rateLimitResult)).forEach(([k, v]) => res.setHeader(k, v))
        res.status(429).json({
          error: 'Too many chat requests. Please try again later.',
          resetTime: rateLimitResult.resetTime,
          retryAfter: rateLimitResult.retryAfter,
        })
        return
      }
    } catch {
      /* fail open */
    }
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { exerciseId, partId, message, conversationHistory = [] } = body
    if (!exerciseId || !partId || !message || (message as string).trim().length === 0) {
      res.status(400).json({
        error: 'Missing required fields: exerciseId, partId, and message (non-empty)',
      })
      return
    }
    const result = await processChat({
      studentId,
      exerciseId,
      partId,
      message,
      conversationHistory,
      partQuestion: body.partQuestion,
    })
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json({
      message: result.message,
      partId: result.partId,
      attempts: result.attempts,
      tokensUsed: result.tokensUsed,
      comprehensionLevel: result.comprehensionLevel,
      canProceed: result.canProceed,
    })
  } catch (error: unknown) {
    const err = error as { message?: string }
    if (
      err?.message?.includes('GEMINI_API_KEY') ||
      err?.message?.includes('API key')
    ) {
      res.status(503).json({
        error: 'AI service is not properly configured. Please contact support.',
      })
      return
    }
    sendSanitizedError(res, error, 'bac/chat')
  }
}

export async function saveExercise(req: Request, res: Response): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    res.status(403).json({ error: 'Not available in production' })
    return
  }
  try {
    const body = req.body || {}
    const { chapterId, parts } = body
    if (!chapterId || !parts || !Array.isArray(parts) || parts.length === 0) {
      res.status(400).json({ error: 'Missing required fields: chapterId, parts' })
      return
    }
    const result = await saveExerciseDev(body)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/save-exercise')
  }
}

export async function checkExerciseExistsHandler(req: Request, res: Response): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    res.status(403).json({ error: 'Not available in production' })
    return
  }
  try {
    const body = req.body || {}
    const { chapterId, baseExerciseId } = body
    if (!chapterId || !baseExerciseId) {
      res.status(400).json({ error: 'Missing required fields: chapterId, baseExerciseId' })
      return
    }
    const result = await checkExerciseExists(body)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/check-exercise-exists')
  }
}

export async function regenerateQuestionHandler(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudent(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { exerciseId, partId } = body
    if (!exerciseId || !partId) {
      res.status(400).json({ error: 'Missing exerciseId or partId' })
      return
    }
    const result = await regenerateQuestion(body)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/regenerate-question')
  }
}

export async function generateNewExercise(req: Request, res: Response): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    res.status(403).json({ error: 'Not available in production' })
    return
  }
  try {
    const body = req.body || {}
    const { chapterId, exerciseId } = body
    if (!chapterId || !exerciseId) {
      res.status(400).json({ error: 'Missing required fields: chapterId, exerciseId' })
      return
    }
    const result = await generateNewExerciseDev(body)
    if (!result.success) {
      res.status((result as { status: number }).status).json({
        error: result.error,
        ...(result.debug ? { debug: result.debug } : {}),
      })
      return
    }
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/generate-new-exercise')
  }
}

export async function generateQuestionsHandler(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const result = await generateQuestions(body)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'bac/generate-questions')
  }
}

export function testPage(_req: Request, res: Response): void {
  res.json(getTestPage())
}
