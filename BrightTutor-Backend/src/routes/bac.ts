/**
 * BAC API routes: progress, part-progress, complete, tokens, stored exercises, course rate, chat, dev tools
 * Ported from BrightTutor-AI-Platform src/app/api/bac/
 */
import { Router } from 'express'
import {
  progress,
  progressAll,
  tokens,
  partProgressGet,
  partProgressPost,
  partProgressDelete,
  complete,
  current,
  storedExerciseDelete,
  getRandomStoredExerciseHandler,
  storedExercisesByChapter,
  courseRate,
  storedExerciseGet,
  chat,
  saveExercise,
  checkExerciseExistsHandler,
  regenerateQuestionHandler,
  generateNewExercise,
  generateQuestionsHandler,
  testPage,
} from '@/controllers/bacController'

const router = Router()

// GET /bac/progress
router.get('/progress', progress)

// GET /bac/progress-all
router.get('/progress-all', progressAll)

// GET /bac/tokens/:studentId
router.get('/tokens/:studentId', tokens)

// GET /bac/part-progress/:studentId/:exerciseId/:partId
router.get('/part-progress/:studentId/:exerciseId/:partId', partProgressGet)

// POST /bac/part-progress/:studentId/:exerciseId/:partId
router.post('/part-progress/:studentId/:exerciseId/:partId', partProgressPost)

// DELETE /bac/part-progress/:studentId/:exerciseId/:partId
router.delete('/part-progress/:studentId/:exerciseId/:partId', partProgressDelete)

// POST /bac/complete
router.post('/complete', complete)

// GET /bac/current
router.get('/current', current)

// DELETE /bac/stored-exercise
router.delete('/stored-exercise', storedExerciseDelete)

// GET /bac/get-random-stored-exercise
router.get('/get-random-stored-exercise', getRandomStoredExerciseHandler)

// GET /bac/stored-exercises-by-chapter
router.get('/stored-exercises-by-chapter', storedExercisesByChapter)

// POST /bac/course/rate
router.post('/course/rate', courseRate)

// GET /bac/stored-exercise
router.get('/stored-exercise', storedExerciseGet)

// POST /bac/chat
router.post('/chat', chat)

// POST /bac/save-exercise (dev only)
router.post('/save-exercise', saveExercise)

// POST /bac/check-exercise-exists (dev only)
router.post('/check-exercise-exists', checkExerciseExistsHandler)

// POST /bac/regenerate-question
router.post('/regenerate-question', regenerateQuestionHandler)

// POST /bac/generate-new-exercise (dev only)
router.post('/generate-new-exercise', generateNewExercise)

// POST /bac/generate-questions
router.post('/generate-questions', generateQuestionsHandler)

// GET /bac/test-page
router.get('/test-page', testPage)

export default router
