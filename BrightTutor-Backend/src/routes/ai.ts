/**
 * AI API routes: tutor-chat, generate-hint, student-context, translate-math-content,
 * generate-quiz, generate-quiz-questions, quiz-results, whisper-transcribe
 * Ported from BrightTutor-AI-Platform src/app/api/ai/
 */
import { Router } from 'express'
import multer from 'multer'
import {
  studentContext,
  studentContextGet,
  generateHint,
  translateMathContentHandler,
  generateQuizQuestionsHandler,
  tutorChat,
  generateQuizHandler,
  quizResults,
  whisperTranscribeHandler,
} from '@/controllers/aiController'

const router = Router()
const upload = multer({ storage: multer.memoryStorage() })

// POST /ai/student-context
router.post('/student-context', studentContext)
// GET /ai/student-context/:studentId — alias for mobile app
router.get('/student-context/:studentId', studentContextGet)

// POST /ai/generate-hint
router.post('/generate-hint', generateHint)

// POST /ai/translate-math-content
router.post('/translate-math-content', translateMathContentHandler)

// POST /ai/generate-quiz-questions
router.post('/generate-quiz-questions', generateQuizQuestionsHandler)

// POST /ai/tutor-chat
router.post('/tutor-chat', tutorChat)

// POST /ai/generate-quiz
router.post('/generate-quiz', generateQuizHandler)

// POST /ai/quiz-results
router.post('/quiz-results', quizResults)

// POST /ai/whisper-transcribe (multipart: audio file + studentId)
router.post('/whisper-transcribe', upload.single('audio'), whisperTranscribeHandler)

export default router
