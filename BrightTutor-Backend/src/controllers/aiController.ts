/**
 * AI API controller: student-context, generate-hint, translate-math-content,
 * generate-quiz-questions, tutor-chat, generate-quiz, quiz-results, whisper-transcribe
 */
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { validateId, validateString } from '@/lib/security/validation'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { SimpleTutorSystem } from '@/lib/simple-tutor-system'
import {
  getStudentContext,
  generateHint as generateHintService,
  translateMathContent,
  generateQuizQuestions,
  buildTutorContext,
  getTutorChatStream,
  getTutorChatResponse,
  generateQuiz,
  submitQuizResults,
  whisperTranscribe,
} from '@/services/aiService'

const JWT_SECRET = () => getJWTSecret()

function getAuthenticatedStudentId(req: Request): string | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) return null
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as {
      role?: string
      studentId?: string
    }
    if (decoded.role === 'STUDENT' && decoded.studentId) return decoded.studentId
  } catch {
    return null
  }
  return null
}

export async function studentContext(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { studentId, schoolId } = body
    if (!studentId || !schoolId) {
      res.status(400).json({ error: 'Student ID and School ID are required' })
      return
    }
    const result = getStudentContext(body)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'ai/student-context')
  }
}

export async function generateHint(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    if (!body.question) {
      res.status(400).json({ error: 'Question is required' })
      return
    }
    const result = await generateHintService(body)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'ai/generate-hint')
  }
}

export async function translateMathContentHandler(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { text, languagePreference } = body
    if (!text || !languagePreference) {
      res.status(400).json({ error: 'Text and languagePreference are required' })
      return
    }
    const result = await translateMathContent(body)
    if (result.success) {
      res.json(result)
    } else {
      res.json({
        success: false,
        translatedText: (result as { translatedText: string }).translatedText,
        language: (result as { language: string }).language,
        error: result.error,
      })
    }
  } catch (error) {
    const body = req.body || {}
    res.json({
      success: false,
      translatedText: body.text || '',
      language: 'fr',
      error: 'Translation failed, using original text',
    })
  }
}

export async function generateQuizQuestionsHandler(req: Request, res: Response): Promise<void> {
  try {
    const result = await generateQuizQuestions(req.body || {})
    if (!result.success) {
      res.status((result as { status: number }).status).json({ error: result.error })
      return
    }
    res.json(result.questions)
  } catch (error) {
    sendSanitizedError(res, error, 'ai/generate-quiz-questions')
  }
}

export async function tutorChat(req: Request, res: Response): Promise<void> {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]
    if (!token) {
      res.status(401).json({ error: 'No token provided' })
      return
    }
    const body = req.body || {}
    const studentId = body.studentId
    const { message, subject, languagePreference } = body
    if (!studentId || typeof studentId !== 'string') {
      res.status(400).json({ error: 'Student ID is required and must be a string' })
      return
    }
    const idValidation = validateId(studentId)
    if (!idValidation.valid) {
      res.status(400).json({ error: idValidation.error || 'Invalid student ID format' })
      return
    }
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required and must be a string' })
      return
    }
    const msgValidation = validateString(message, { minLength: 1, maxLength: 2000 })
    if (!msgValidation.valid) {
      res.status(400).json({ error: msgValidation.error || 'Message validation failed' })
      return
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET()) as { role?: string; studentId?: string }
      if (decoded.role !== 'STUDENT' || decoded.studentId !== studentId) {
        res.status(403).json({ error: 'Unauthorized - Invalid token for this student' })
        return
      }
    } catch {
      res.status(401).json({ error: 'Invalid authentication token' })
      return
    }

    const built = await buildTutorContext(studentId, message, { subject, languagePreference })
    if (!built) {
      res.status(404).json({ error: 'Student not found' })
      return
    }
    const { student, tutorContext } = built

    const useStreaming = process.env.ENABLE_STREAMING === 'true'
    if (useStreaming) {
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Cache-Control', 'no-cache')
      res.setHeader('Connection', 'keep-alive')
      res.flushHeaders?.()
      const metadata = {
        type: 'metadata',
        success: true,
        studentName: student.studentName,
        topic: subject || 'general',
        isDemo: false,
        streaming: true,
      }
      res.write(`data: ${JSON.stringify(metadata)}\n\n`)
      let fullResponse = ''
      try {
        const stream = getTutorChatStream(message, tutorContext)
        for await (const chunk of stream) {
          fullResponse += chunk
          res.write(`data: ${JSON.stringify({ type: 'chunk', content: chunk })}\n\n`)
        }
        const responseLower = fullResponse.toLowerCase()
        const errorPatterns = [
          'rencontré un petit problème technique',
          'désolé',
          'erreur technique',
          'contacte ton professeur',
          'peux-tu reformuler',
        ]
        if (errorPatterns.some((p) => responseLower.includes(p))) {
          try {
            fullResponse = await SimpleTutorSystem.generateResponse(message, tutorContext)
          } catch {
            fullResponse = "Salut ! Je suis là pour t'aider. Peux-tu reformuler ta question ?"
          }
        }
        res.write(`data: ${JSON.stringify({ type: 'done', fullResponse })}\n\n`)
      } catch {
        res.write(
          `data: ${JSON.stringify({ type: 'error', error: 'Stream interrupted. Please try again.' })}\n\n`
        )
      }
      res.end()
      return
    }

    const aiResponse = await getTutorChatResponse(message, tutorContext)
    res.json({
      success: true,
      response: aiResponse,
      studentName: student.studentName,
      topic: subject || 'general',
      isDemo: false,
    })
  } catch (error) {
    res.json({
      success: true,
      response:
        "J'ai rencontré un petit problème technique, mais je suis là ! On continue où on s'était arrêté. Qu'est-ce que tu voulais me dire ? 😊",
      error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined,
    })
  }
}

export async function generateQuizHandler(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { subject, studentId } = body
    if (!studentId || !subject) {
      res.status(400).json({
        error: 'Missing required parameters: studentId and subject',
      })
      return
    }
    const result = await generateQuiz(body)
    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'ai/generate-quiz')
  }
}

export async function quizResults(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { studentId, subject } = body
    if (!studentId || !subject) {
      res.status(400).json({ error: 'studentId and subject required' })
      return
    }
    await submitQuizResults(body)
    res.json({ success: true })
  } catch (error) {
    sendSanitizedError(res, error, 'ai/quiz-results')
  }
}

export async function whisperTranscribeHandler(req: Request, res: Response): Promise<void> {
  try {
    const file = (req as unknown as { file?: { buffer: Buffer; mimetype?: string } }).file
    const studentId =
      (req.body && (req.body as { studentId?: string }).studentId) ||
      (req as unknown as { body?: { studentId?: string } }).body?.studentId
    if (!file || !file.buffer) {
      res.status(400).json({ error: 'No audio file provided' })
      return
    }
    if (!studentId) {
      res.status(400).json({ error: 'Student ID required' })
      return
    }
    const result = await whisperTranscribe(file, studentId)
    if (!result.success) {
      res.status(500).json({
        success: false,
        error: result.error,
        details: result.details,
      })
      return
    }
    res.json(result)
  } catch (error) {
    const err = error as { message?: string }
    res.status(500).json({
      success: false,
      error: 'Failed to transcribe audio',
      details: err?.message || String(error),
    })
  }
}
