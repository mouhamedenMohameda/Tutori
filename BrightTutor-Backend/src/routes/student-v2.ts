/**
 * Student v2 API: profile, memory, chat-history, assignments, monthly-summary
 * Ported from BrightTutor-AI-Platform src/app/api/student/v2/
 */
import { Router } from 'express'
import {
  profile,
  memoryGet,
  memoryPost,
  chatHistory,
  assignments,
  monthlySummary,
} from '@/controllers/studentV2Controller'

const router = Router()

// GET /v2/profile/:studentId
router.get('/profile/:studentId', profile)

// GET /v2/memory/:studentId
router.get('/memory/:studentId', memoryGet)

// POST /v2/memory/:studentId
router.post('/memory/:studentId', memoryPost)

// GET /v2/chat-history/:studentId
router.get('/chat-history/:studentId', chatHistory)

// GET /v2/assignments/:studentId
router.get('/assignments/:studentId', assignments)

// POST /v2/monthly-summary
router.post('/monthly-summary', monthlySummary)

export default router
