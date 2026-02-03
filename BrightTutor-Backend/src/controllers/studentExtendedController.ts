/**
 * Student extended API controller: register, dashboard, curriculum, section-progress,
 * questions, lesson-plans, learning-progress, language-preference, quiz-subjects,
 * streak, track-session, treasure-opened, unlock-next-section, push-token
 */
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { validateId, validateSectionId, validateString, validateSchoolSelectionId } from '@/lib/security/validation'
import { containsSQLInjection, containsXSS, containsCommandInjection } from '@/lib/security/injection-prevention'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import {
  register as registerService,
  resolveSchoolFromBody,
  getDashboard,
  getCurriculumByYearSubject,
  getChatHistory,
  getAiContext,
  getSectionProgress,
  saveSectionProgress,
  clearSectionProgress,
  getQuestions,
  getLessonPlans,
  getLearningProgress,
  getLanguagePreference,
  updateLanguagePreference,
  getQuizSubjects,
  getStreak,
  postStreak,
  trackSession,
  treasureOpened,
  unlockNextSection,
  registerPushToken,
  unregisterPushToken,
} from '@/services/studentExtendedService'

const JWT_SECRET = () => getJWTSecret()

/** GET /student/profile-photo/:studentId — returns photoUrl or 404 when no photo stored */
export async function profilePhotoGet(req: Request, res: Response): Promise<void> {
  try {
    const studentId = req.params.studentId
    if (!studentId) {
      res.status(400).json({ error: 'Student ID required' })
      return
    }
    const idValidation = validateId(studentId)
    if (!idValidation.valid) {
      res.status(400).json({ error: idValidation.error ?? 'Invalid student ID' })
      return
    }
    res.status(200).json({ success: true, photoUrl: null })
  } catch (error) {
    sendSanitizedError(res, error, 'student/profile-photo')
  }
}

function toRateLimitRequest(req: Request): { url: string; headers: { get: (name: string) => string | null } } {
  return {
    url: `${req.protocol}://${req.get('host') || 'localhost'}${req.originalUrl}`,
    headers: { get: (name: string) => req.get(name) ?? null },
  }
}

export function getStudentIdFromToken(req: Request, res: Response): string | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authentication required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { role?: string; studentId?: string }
    if (decoded.role !== 'STUDENT' || !decoded.studentId) {
      res.status(403).json({ error: 'Student access only' })
      return null
    }
    return decoded.studentId
  } catch {
    res.status(401).json({ error: 'Invalid authentication token' })
    return null
  }
}

function requireStudentMatch(req: Request, res: Response, paramStudentId: string): string | null {
  const tokenStudentId = getStudentIdFromToken(req, res)
  if (!tokenStudentId) return null
  if (tokenStudentId !== paramStudentId) {
    res.status(403).json({ error: 'Unauthorized access' })
    return null
  }
  return tokenStudentId
}

const dashboardRateLimiter = createRateLimiter(rateLimitConfigs.dashboard)

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { name, age, schoolId, grade } = body
    if (!name || !age || !schoolId || !grade) {
      res.status(400).json({ error: 'Missing required fields: name, age, schoolId, and grade are required' })
      return
    }
    const nameValidation = validateString(name, { minLength: 1, maxLength: 100 })
    if (!nameValidation.valid) {
      res.status(400).json({ error: nameValidation.error || 'Invalid name format' })
      return
    }
    if (containsSQLInjection(name) || containsXSS(name) || containsCommandInjection(name)) {
      res.status(400).json({ error: 'Invalid input detected' })
      return
    }
    const schoolIdValidation = validateSchoolSelectionId(schoolId)
    if (!schoolIdValidation.valid) {
      res.status(400).json({ error: schoolIdValidation.error || 'Invalid school ID format' })
      return
    }
    const gradeValidation = validateString(grade, { minLength: 1, maxLength: 50 })
    if (!gradeValidation.valid) {
      res.status(400).json({ error: gradeValidation.error || 'Invalid grade format' })
      return
    }
    const ageNum = typeof age === 'string' ? parseInt(age, 10) : age
    if (isNaN(ageNum) || ageNum < 8 || ageNum > 28) {
      res.status(400).json({ error: 'Age must be a number between 8 and 28' })
      return
    }
    const safeName = nameValidation.sanitized || name
    const selectedSchool = await resolveSchoolFromBody(schoolId)
    if (!selectedSchool) {
      res.status(404).json({ error: 'School not found in available schools list' })
      return
    }
    const result = await registerService({
      name: safeName,
      age: ageNum,
      schoolId,
      grade,
      selectedSchool,
    })
    if (!result.success) {
      if ((result as { code?: string }).code === 'P2002') {
        res.status(409).json({
          error: "Un étudiant avec ces informations existe déjà. Veuillez contacter le support si c'est une erreur.",
          code: 'DUPLICATE_STUDENT',
        })
        return
      }
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.status(200).json({ success: true, message: 'Registration successful!', student: result.student })
  } catch (error: unknown) {
    const err = error as { message?: string; code?: string }
    if (err.message?.includes('unique') || err.message?.includes('duplicate') || err.code === 'P2002') {
      res.status(409).json({
        error: "Un étudiant avec ces informations existe déjà. Veuillez contacter le support si c'est une erreur.",
        code: 'DUPLICATE_STUDENT',
      })
      return
    }
    sendSanitizedError(res, error, 'student/register')
  }
}

export async function dashboard(req: Request, res: Response): Promise<void> {
  try {
    try {
      const rateLimitResult = await dashboardRateLimiter(toRateLimitRequest(req) as Parameters<typeof dashboardRateLimiter>[0])
      if (!rateLimitResult.allowed) {
        Object.entries(getRateLimitHeaders(rateLimitResult)).forEach(([k, v]) => res.setHeader(k, v))
        res.status(429).json({
          error: 'Too many requests. Please slow down.',
          resetTime: rateLimitResult.resetTime,
          retryAfter: rateLimitResult.retryAfter,
        })
        return
      }
    } catch {
      /* fail open */
    }
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const result = await getDashboard(studentId)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.status(200).json({ success: true, student: result.student })
  } catch (error) {
    sendSanitizedError(res, error, 'student/dashboard')
  }
}

export async function curriculum(req: Request, res: Response): Promise<void> {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Authentication required' })
      return
    }
    try {
      const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as { role?: string }
      if (decoded.role !== 'STUDENT') {
        res.status(403).json({ error: 'Unauthorized - Student access only' })
        return
      }
    } catch {
      res.status(401).json({ error: 'Invalid authentication token' })
      return
    }
    const year = parseInt(req.params.year, 10)
    if (isNaN(year) || year < 1 || year > 4) {
      res.status(400).json({ success: false, error: 'Invalid year parameter. Must be 1, 2, 3, or 4' })
      return
    }
    const subject = req.params.subject
    const result = await getCurriculumByYearSubject(year, subject)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ success: false, error: result.error })
      return
    }
    res.status(200).json({ success: true, map: result.map })
  } catch (error) {
    sendSanitizedError(res, error, 'student/curriculum')
  }
}

export async function chatHistory(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const page = Math.max(1, parseInt(String(req.query.page), 10) || 1)
    const limit = Math.min(50, Math.max(1, parseInt(String(req.query.limit), 10) || 20))
    const result = await getChatHistory(studentId, page, limit)
    res.status(200).json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/chat-history')
  }
}

export async function aiContext(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const result = await getAiContext(studentId)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.status(200).json(result.context)
  } catch (error) {
    sendSanitizedError(res, error, 'student/ai-context')
  }
}

export async function sectionProgressGet(req: Request, res: Response): Promise<void> {
  try {
    const { studentId, sectionId } = req.params
    if (!requireStudentMatch(req, res, studentId)) return
    const result = await getSectionProgress(studentId, sectionId)
    res.status(200).json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/section-progress')
  }
}

export async function sectionProgressPost(req: Request, res: Response): Promise<void> {
  try {
    const { studentId, sectionId } = req.params
    if (!requireStudentMatch(req, res, studentId)) return
    await saveSectionProgress(studentId, sectionId, req.body || {})
    res.status(200).json({ success: true, message: 'Progress saved' })
  } catch (error) {
    sendSanitizedError(res, error, 'student/section-progress')
  }
}

export async function sectionProgressDelete(req: Request, res: Response): Promise<void> {
  try {
    const { studentId, sectionId } = req.params
    if (!requireStudentMatch(req, res, studentId)) return
    await clearSectionProgress(studentId, sectionId)
    res.status(200).json({ success: true, message: 'Section progress cleared' })
  } catch (error) {
    sendSanitizedError(res, error, 'student/section-progress')
  }
}

export async function questions(req: Request, res: Response): Promise<void> {
  try {
    if (!getStudentIdFromToken(req, res)) return
    const { year, subject, sectionId } = req.params
    const sectionIdValidation = validateSectionId(sectionId)
    if (!sectionIdValidation.valid) {
      res.status(400).json({ error: sectionIdValidation.error || 'Invalid section ID format' })
      return
    }
    const yearNum = parseInt(year, 10)
    if (isNaN(yearNum) || yearNum < 1 || yearNum > 4) {
      res.status(400).json({ error: 'Invalid year. Must be 1-4.' })
      return
    }
    const result = await getQuestions(yearNum, subject, sectionId)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ success: false, error: result.error })
      return
    }
    res.status(200).json({
      success: true,
      exercises: result.exercises,
      questions: result.exercises,
      count: (result.exercises as unknown[]).length,
      sectionId: result.sectionId,
      year: result.year,
      subject: result.subject,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'student/questions')
  }
}

export async function lessonPlans(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const result = await getLessonPlans(studentId)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.status(200).json({ success: true, lessonPlans: result.lessonPlans })
  } catch (error) {
    sendSanitizedError(res, error, 'student/lesson-plans')
  }
}

export async function learningProgress(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const subjectParam = String(req.query.subject || '')
    const result = await getLearningProgress(studentId, subjectParam || undefined)
    res.status(200).json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/learning-progress')
  }
}

export async function languagePreferenceGet(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const result = await getLanguagePreference(studentId)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.status(200).json({ success: true, data: { languagePreference: result.languagePreference } })
  } catch (error) {
    sendSanitizedError(res, error, 'student/language-preference')
  }
}

export async function languagePreferencePut(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const { languagePreference } = req.body || {}
    if (!languagePreference || !['fr', 'ar'].includes(languagePreference)) {
      res.status(400).json({ error: 'Invalid language preference. Must be "fr" or "ar"' })
      return
    }
    const result = await updateLanguagePreference(studentId, languagePreference)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.status(200).json({ success: true, student: result.student })
  } catch (error) {
    sendSanitizedError(res, error, 'student/language-preference')
  }
}

export async function quizSubjects(req: Request, res: Response): Promise<void> {
  try {
    const studentId = requireStudentMatch(req, res, req.params.studentId)
    if (!studentId) return
    const result = await getQuizSubjects(studentId)
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.status(200).json({ success: true, subjects: result.subjects })
  } catch (error) {
    sendSanitizedError(res, error, 'student/quiz-subjects')
  }
}

export async function streakGet(req: Request, res: Response): Promise<void> {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const studentIdParam = String(req.query.studentId || '')
    if (!studentIdParam || studentIdParam !== studentId) {
      res.status(403).json({ error: 'Unauthorized access' })
      return
    }
    const result = await getStreak(studentId)
    res.status(200).json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/streak')
  }
}

export async function streakPost(req: Request, res: Response): Promise<void> {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, sectionId, subject, isFirstTime } = body
    if (bodyStudentId !== studentId) {
      res.status(403).json({ error: 'Unauthorized access' })
      return
    }
    if (!bodyStudentId || !sectionId) {
      res.status(400).json({ error: 'Student ID and section ID required' })
      return
    }
    const result = await postStreak(studentId, { sectionId, subject, isFirstTime })
    res.status(200).json({ success: true, streak: result.streak })
  } catch (error) {
    sendSanitizedError(res, error, 'student/streak')
  }
}

export async function trackSessionHandler(req: Request, res: Response): Promise<void> {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, sessionStart, sessionEnd, screenTime } = body
    if (bodyStudentId !== studentId) {
      res.status(403).json({ success: false, error: 'Unauthorized access' })
      return
    }
    if (!bodyStudentId || !validateId(bodyStudentId).valid) {
      res.status(400).json({ success: false, error: 'Invalid student ID' })
      return
    }
    if (!sessionStart) {
      res.status(400).json({ success: false, error: 'sessionStart is required' })
      return
    }
    if (!screenTime || typeof screenTime !== 'object') {
      res.status(400).json({ success: false, error: 'screenTime object is required' })
      return
    }
    const result = await trackSession(studentId, { sessionStart, sessionEnd, screenTime })
    if (!result.success) {
      res.status((result as { status: number }).status).json({ success: false, error: result.error })
      return
    }
    res.status(200).json({ success: true, message: result.message })
  } catch (error) {
    sendSanitizedError(res, error, 'student/track-session')
  }
}

export async function treasureOpenedHandler(req: Request, res: Response): Promise<void> {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, chapterId, subject } = body
    if (bodyStudentId !== studentId) {
      res.status(403).json({ success: false, error: "Unauthorized - Cannot modify another student's data" })
      return
    }
    if (!bodyStudentId || !chapterId || !subject) {
      res.status(400).json({ success: false, error: 'Missing required fields: studentId, chapterId, subject' })
      return
    }
    const result = await treasureOpened(studentId, { chapterId, subject })
    if (!result.success) {
      res.status((result as { status: number }).status).json({ success: false, error: result.error })
      return
    }
    res.status(200).json({ success: true, treasuresOpened: result.treasuresOpened })
  } catch (error) {
    sendSanitizedError(res, error, 'student/treasure-opened')
  }
}

export async function unlockNextSectionHandler(req: Request, res: Response): Promise<void> {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, subject, currentSectionId } = body
    if (bodyStudentId !== studentId) {
      res.status(403).json({ error: 'Unauthorized access' })
      return
    }
    if (!bodyStudentId || !subject || !currentSectionId) {
      res.status(400).json({ error: 'Missing required fields' })
      return
    }
    const result = await unlockNextSection(studentId, { subject, currentSectionId })
    if (!result.success) {
      res.status((result as { status: number }).status).json({
        error: result.error,
        ...(result.details ? { details: result.details } : {}),
      })
      return
    }
    res.status(200).json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'student/unlock-next-section')
  }
}

export async function pushTokenPost(req: Request, res: Response): Promise<void> {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const body = req.body || {}
    const { studentId: bodyStudentId, expoPushToken, platform, deviceId } = body
    if (bodyStudentId !== studentId) {
      res.status(403).json({ error: 'Unauthorized access' })
      return
    }
    if (!bodyStudentId || !expoPushToken) {
      res.status(400).json({ error: 'Student ID and Expo push token required' })
      return
    }
    if (!expoPushToken.startsWith('ExponentPushToken[') && !expoPushToken.startsWith('ExpoPushToken[')) {
      res.status(400).json({ error: 'Invalid Expo push token format' })
      return
    }
    const result = await registerPushToken(studentId, { expoPushToken, platform, deviceId })
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.status(200).json({ success: true, message: 'Push token registered successfully', data: result.data })
  } catch (error) {
    sendSanitizedError(res, error, 'student/push-token')
  }
}

export async function pushTokenDelete(req: Request, res: Response): Promise<void> {
  try {
    const studentId = getStudentIdFromToken(req, res)
    if (!studentId) return
    const studentIdParam = String(req.query.studentId || '')
    const deviceId = String(req.query.deviceId || 'default')
    if (!studentIdParam || studentIdParam !== studentId) {
      res.status(403).json({ error: 'Unauthorized access' })
      return
    }
    await unregisterPushToken(studentId, deviceId)
    res.status(200).json({ success: true, message: 'Push token unregistered successfully' })
  } catch (error) {
    sendSanitizedError(res, error, 'student/push-token')
  }
}
