/**
 * Student extended API: register, dashboard, curriculum, section-progress,
 * questions, lesson-plans, learning-progress, language-preference, quiz-subjects,
 * streak, track-session, treasure-opened, unlock-next-section, push-token
 * Ported from BrightTutor-AI-Platform src/app/api/student/
 */
import { Router } from 'express'
import {
  register,
  dashboard,
  curriculum,
  chatHistory,
  aiContext,
  sectionProgressGet,
  sectionProgressPost,
  sectionProgressDelete,
  questions,
  lessonPlans,
  learningProgress,
  languagePreferenceGet,
  languagePreferencePut,
  quizSubjects,
  streakGet,
  streakPost,
  trackSessionHandler,
  treasureOpenedHandler,
  unlockNextSectionHandler,
  pushTokenPost,
  pushTokenDelete,
} from '@/controllers/studentExtendedController'

const router = Router()

// POST /register (student self-registration)
router.post('/register', register)

// GET /dashboard/:studentId
router.get('/dashboard/:studentId', dashboard)

// GET /curriculum/:year/:subject
router.get('/curriculum/:year/:subject', curriculum)

// GET /chat-history/:studentId
router.get('/chat-history/:studentId', chatHistory)

// GET /ai-context/:studentId
router.get('/ai-context/:studentId', aiContext)

// GET /section-progress/:studentId/:sectionId
router.get('/section-progress/:studentId/:sectionId', sectionProgressGet)

// POST /section-progress/:studentId/:sectionId
router.post('/section-progress/:studentId/:sectionId', sectionProgressPost)

// DELETE /section-progress/:studentId/:sectionId
router.delete('/section-progress/:studentId/:sectionId', sectionProgressDelete)

// GET /questions/:year/:subject/:sectionId
router.get('/questions/:year/:subject/:sectionId', questions)

// GET /lesson-plans/:studentId
router.get('/lesson-plans/:studentId', lessonPlans)

// GET /learning-progress/:studentId
router.get('/learning-progress/:studentId', learningProgress)

// GET /language-preference/:studentId
router.get('/language-preference/:studentId', languagePreferenceGet)

// PUT /language-preference/:studentId
router.put('/language-preference/:studentId', languagePreferencePut)

// GET /quiz-subjects/:studentId
router.get('/quiz-subjects/:studentId', quizSubjects)

// GET /streak
router.get('/streak', streakGet)

// POST /streak
router.post('/streak', streakPost)

// POST /track-session
router.post('/track-session', trackSessionHandler)

// POST /treasure-opened
router.post('/treasure-opened', treasureOpenedHandler)

// POST /unlock-next-section
router.post('/unlock-next-section', unlockNextSectionHandler)

// POST /push-token
router.post('/push-token', pushTokenPost)

// DELETE /push-token
router.delete('/push-token', pushTokenDelete)

export default router
