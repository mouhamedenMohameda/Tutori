/**
 * AI API routes: tutor-chat, generate-hint, student-context, translate-math-content,
 * generate-quiz, generate-quiz-questions, quiz-results, whisper-transcribe
 * Ported from BrightTutor-AI-Platform src/app/api/ai/
 */
import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
import { SimpleTutorSystem } from '@/lib/simple-tutor-system'
import { generateEducationalResponse } from '@/lib/gemini'
import { IntelligentQuizGenerator } from '@/lib/quiz/IntelligentQuizGenerator'
import { StudentMemorySystem } from '@/lib/memory/StudentMemorySystem'
import { getNextSection, mapClassroomYearToCurriculumYear } from '@/lib/curriculum/curriculum-loader'
import { validateId, validateString } from '@/lib/security/validation'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()
const JWT_SECRET = () => getJWTSecret()

const upload = multer({ storage: multer.memoryStorage() })

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

function requireStudent(req: Request, res: Response): string | null {
  const studentId = getAuthenticatedStudentId(req)
  if (!studentId) {
    res.status(401).json({ error: 'Unauthorized' })
    return null
  }
  return studentId
}

// POST /ai/student-context
router.post('/student-context', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { studentId, schoolId } = body
    if (!studentId || !schoolId) {
      return res.status(400).json({ error: 'Student ID and School ID are required' })
    }
    const studentContext = {
      success: true,
      message: 'AI student context instructions ready',
      aiInstructions: [
        'Personalize responses based on student age and grade level',
        'Use culturally appropriate examples from Mauritanian context',
        'Adapt difficulty based on student learning profile',
        'Reference student interests to make learning engaging',
        'Provide encouragement based on progress history',
        'Use appropriate language mix (Arabic names, French academic terms, English for tech)',
        'Consider Islamic educational values and cultural sensitivities',
        'Incorporate local geography, history, and cultural references when relevant',
        'Always be encouraging and patient with students',
        'Break down complex topics into simple, understandable steps',
        'Ask follow-up questions to check understanding',
        'Celebrate student achievements and progress',
      ],
      culturalContext: {
        language: 'Arabic/French bilingual education system',
        region: 'Mauritania, West Africa',
        educationalContext: 'Islamic values integrated with modern curriculum',
        culturalSensitivities: ['Religious considerations', 'Family values', 'Respect for teachers'],
        commonSubjects: [
          'Mathematics',
          'Arabic Language',
          'French Language',
          'Islamic Studies',
          'Science',
          'History',
        ],
      },
    }
    return res.json(studentContext)
  } catch (error) {
    sendSanitizedError(res, error, 'ai/student-context')
  }
})

// POST /ai/generate-hint
router.post('/generate-hint', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const {
      question,
      questionType,
      subject,
      year,
      sectionTitle,
      languagePreference = 'fr',
    } = body
    if (!question) {
      return res.status(400).json({ error: 'Question is required' })
    }
    const targetLanguage = languagePreference === 'ar' ? 'Arabic' : 'French'
    const languageInstructions =
      languagePreference === 'ar'
        ? `⚠️ CRITICAL LANGUAGE RULES FOR ARABIC:
- Write in Arabic (right-to-left)
- PRESERVE all math terminology in French
- PRESERVE all symbols: ÷, ×, +, =, √, etc.
- Mix Arabic and French naturally`
        : `- Write in French`
    const hintPrompt = `You are an expert educational tutor. Generate a short, helpful hint for this question.

SUBJECT: ${subject || 'math'}
YEAR LEVEL: Year ${year || '1'}
SECTION TOPIC: ${sectionTitle || 'General concepts'}
TARGET LANGUAGE: ${targetLanguage}

QUESTION:
${question}

INSTRUCTIONS:
Generate a simple, direct educational hint that:
1. Explains the CORE CONCEPT needed
2. Gives ONE simple example with DIFFERENT numbers (NOT the actual answer)
3. Provides ONE short tip
4. Is 3-4 sentences MAXIMUM
5. ${languageInstructions}
6. Does NOT give away the answer

Generate the hint now (3-4 sentences maximum):`
    const hint = await generateEducationalResponse(hintPrompt)
    let cleanedHint = hint.trim().replace(/```[\s\S]*?```/g, '').replace(/`/g, '')
    return res.json({ success: true, hint: cleanedHint })
  } catch (error) {
    sendSanitizedError(res, error, 'ai/generate-hint')
  }
})

// POST /ai/translate-math-content
router.post('/translate-math-content', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { text, languagePreference, subject = 'math' } = body
    if (!text || !languagePreference) {
      return res.status(400).json({ error: 'Text and languagePreference are required' })
    }
    if (languagePreference === 'fr') {
      return res.json({
        success: true,
        translatedText: text,
        language: 'fr',
      })
    }
    const translationPrompt = `You are a professional translator for educational content. Translate this ${subject} question/instruction to Arabic while PRESERVING all math terms and symbols. PRESERVE: Division euclidienne, PGCD, PPCM, numbers, symbols (÷, ×, +, =, √). Translate only explanatory text. Return ONLY the translated text.

INPUT TEXT TO TRANSLATE:
${text}

TRANSLATE NOW:`
    const translatedText = await generateEducationalResponse(translationPrompt)
    let cleaned = translatedText
      .trim()
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`/g, '')
      .replace(/^Translation:|^Output:|^Translated text:/i, '')
      .trim()
    return res.json({
      success: true,
      translatedText: cleaned,
      language: 'ar',
      originalText: text,
    })
  } catch (error) {
    const body = req.body || {}
    return res.json({
      success: false,
      translatedText: body.text || '',
      language: 'fr',
      error: 'Translation failed, using original text',
    })
  }
})

// POST /ai/generate-quiz-questions
router.post('/generate-quiz-questions', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { prompt } = body
    const aiPrompt = `You are an expert educational quiz generator. Create high-quality multiple choice questions.

${prompt}

Generate exactly 5 multiple choice questions in this JSON format:
[
  { "id": "q1", "question": "Question text", "options": ["A", "B", "C", "D"], "correctAnswer": "A", "explanation": "Why this is correct" }
]

Return ONLY the JSON array, no other text.`
    const response = await generateEducationalResponse(aiPrompt)
    const jsonMatch = response.match(/\[[\s\S]*\]/)
    if (!jsonMatch) {
      return res.status(500).json({ error: 'Invalid response format from AI' })
    }
    let questions: any[]
    try {
      questions = JSON.parse(jsonMatch[0])
    } catch {
      return res.status(500).json({ error: 'Failed to parse quiz questions' })
    }
    const valid = questions.filter(
      (q: any) => q.id && q.question && q.options && q.correctAnswer && q.explanation
    )
    if (valid.length === 0) {
      return res.status(500).json({ error: 'No valid questions generated' })
    }
    return res.json(valid)
  } catch (error) {
    sendSanitizedError(res, error, 'ai/generate-quiz-questions')
  }
})

// POST /ai/tutor-chat
router.post('/tutor-chat', async (req: Request, res: Response) => {
  let studentId: string | undefined
  try {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ error: 'No token provided' })
    }
    const body = req.body || {}
    studentId = body.studentId
    const { message, subject, languagePreference, context } = body
    if (!studentId || typeof studentId !== 'string') {
      return res.status(400).json({ error: 'Student ID is required and must be a string' })
    }
    const idValidation = validateId(studentId)
    if (!idValidation.valid) {
      return res.status(400).json({ error: idValidation.error || 'Invalid student ID format' })
    }
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required and must be a string' })
    }
    const msgValidation = validateString(message, { minLength: 1, maxLength: 2000 })
    if (!msgValidation.valid) {
      return res.status(400).json({ error: msgValidation.error || 'Message validation failed' })
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET()) as any
      if (decoded.role !== 'STUDENT' || decoded.studentId !== studentId) {
        return res.status(403).json({ error: 'Unauthorized - Invalid token for this student' })
      }
    } catch {
      return res.status(401).json({ error: 'Invalid authentication token' })
    }
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: { class: true, aiPersonality: true },
    })
    if (!student) {
      return res.status(404).json({ error: 'Student not found' })
    }
    const finalLanguagePreference =
      languagePreference || (student as any).languagePreference || 'fr'
    const tutorContext = await SimpleTutorSystem.createContext(studentId)
    if (!tutorContext) {
      return res.status(500).json({ error: 'Failed to create tutor context' })
    }
    tutorContext.languagePreference = finalLanguagePreference as 'fr' | 'ar'
    if (subject) {
      tutorContext.selectedSubject = subject
      const updatedContext = await SimpleTutorSystem.createContext(studentId)
      if (updatedContext?.learningProgress) {
        tutorContext.learningProgress = updatedContext.learningProgress
      }
    }
    const recentConversations = await prisma.aIConversation.findMany({
      where: { studentId },
      orderBy: { timestamp: 'desc' },
      take: 10,
    })
    tutorContext.conversationHistory = []
    recentConversations.reverse().forEach((conv: any) => {
      if (conv.studentMessage) {
        tutorContext.conversationHistory!.push({
          role: 'user' as const,
          content: conv.studentMessage,
          timestamp: conv.timestamp,
        })
      }
      if (conv.aiResponse) {
        tutorContext.conversationHistory!.push({
          role: 'assistant' as const,
          content: conv.aiResponse,
          timestamp: conv.timestamp,
        })
      }
    })
    tutorContext.conversationHistory.push({
      role: 'user' as const,
      content: message,
      timestamp: new Date(),
    })
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
        const stream = SimpleTutorSystem.generateResponseWithSectionsStream(message, tutorContext)
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
      } catch (streamErr) {
        res.write(
          `data: ${JSON.stringify({ type: 'error', error: 'Stream interrupted. Please try again.' })}\n\n`
        )
      }
      return res.end()
    }
    let aiResponse: string
    try {
      aiResponse = await SimpleTutorSystem.generateResponseWithSections(message, tutorContext)
    } catch (err) {
      const msgLang =
        message.toLowerCase().includes('english') || message.toLowerCase().includes('pls')
          ? 'English'
          : 'French'
      aiResponse =
        msgLang === 'English'
          ? "I had a small technical issue, but I'm ready to help now! What would you like to learn?"
          : "J'ai eu un petit problème technique, mais je suis prêt maintenant ! Que veux-tu apprendre ?"
    }
    return res.json({
      success: true,
      response: aiResponse,
      studentName: student.studentName,
      topic: subject || 'general',
      isDemo: false,
    })
  } catch (error) {
    return res.json({
      success: true,
      response:
        "J'ai rencontré un petit problème technique, mais je suis là ! On continue où on s'était arrêté. Qu'est-ce que tu voulais me dire ? 😊",
      error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined,
    })
  }
})

// POST /ai/generate-quiz
router.post('/generate-quiz', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { subject, studentId, numberOfQuestions, languagePreference } = body
    if (!studentId || !subject) {
      return res.status(400).json({
        error: 'Missing required parameters: studentId and subject',
      })
    }
    let finalLanguagePreference = languagePreference
    if (!finalLanguagePreference) {
      const student = await prisma.student.findUnique({
        where: { id: studentId },
        select: { languagePreference: true },
      })
      finalLanguagePreference = (student as any)?.languagePreference || 'fr'
    }
    const contextualQuiz = await IntelligentQuizGenerator.generateContextualQuiz(
      studentId,
      subject,
      finalLanguagePreference as 'fr' | 'ar'
    )
    const quizSession = await prisma.quizSession.create({
      data: {
        studentId,
        subject,
        questions: JSON.stringify(contextualQuiz.questions),
        status: 'in_progress',
        startTime: new Date(),
      },
    })
    await IntelligentQuizGenerator.trackQuizQuestions(
      studentId,
      subject,
      contextualQuiz.questions
    )
    return res.json({
      success: true,
      questions: contextualQuiz.questions,
      source: contextualQuiz.source,
      basedOnTeaching: contextualQuiz.basedOnTeaching,
      quizSessionId: quizSession.id,
      message: `Quiz generated from ${contextualQuiz.source}`,
    })
  } catch (error) {
    sendSanitizedError(res, error, 'ai/generate-quiz')
  }
})

function analyzeQuizPerformance(score: number, _results: any[]): string {
  if (score >= 90) return 'excellent'
  if (score >= 70) return 'good'
  if (score >= 50) return 'needs_improvement'
  return 'struggling'
}

function generateAIResponseFromQuizResults(
  score: number,
  _performance: string,
  _subject: string,
  totalQuestions: number
): string {
  const correctAnswers = Math.round((score / 100) * totalQuestions)
  if (correctAnswers >= 3) {
    return `Excellent ! Tu as eu ${correctAnswers} sur ${totalQuestions}. Bravo, tu peux passer à la prochaine section ! 🎉`
  }
  return `Tu as eu ${correctAnswers} sur ${totalQuestions}, tu dois encore t'entraîner un peu avant de continuer. On va reprendre cette section ensemble ! 💪`
}

async function handleSectionProgression(studentId: string, subject: string) {
  try {
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: { aiPersonality: true, class: true },
    })
    if (!student?.aiPersonality) return
    const normalizedSubject =
      subject.toLowerCase() === 'mathematics' ? 'math' : subject.toLowerCase()
    const learningProgress = student.aiPersonality.learningProgress
    let allProgress: any = {}
    if (typeof learningProgress === 'string') {
      try {
        const parsed = JSON.parse(learningProgress)
        if (parsed.math || parsed.science || parsed.physics) {
          allProgress = parsed
        } else if (parsed.currentSection) {
          allProgress = {
            math: {
              currentChapter: parsed.currentChapter || 'ch1',
              currentSection: parsed.currentSection || 'ch1-s1',
              completedTopics: parsed.completedTopics || [],
              nextSection: parsed.nextSection || 'ch1-s2',
            },
            sectionProgress: parsed.sectionProgress || {},
          }
        }
      } catch {
        return
      }
    }
    if (!allProgress[normalizedSubject]) {
      allProgress[normalizedSubject] = {
        currentChapter: 'ch1',
        currentSection: 'ch1-s1',
        completedTopics: [],
        nextSection: 'ch1-s2',
      }
    }
    const subjectProgress = allProgress[normalizedSubject]
    const currentSection = subjectProgress.currentSection || 'ch1-s1'
    const currentChapter = subjectProgress.currentChapter || 'ch1'
    const studentYear = student.class?.classroomYear || 'Year1'
    const year = mapClassroomYearToCurriculumYear(studentYear)
    const nextSection = getNextSection(year, subject, currentChapter, currentSection)
    if (nextSection) {
      allProgress[normalizedSubject] = {
        ...subjectProgress,
        currentChapter: nextSection.chapter,
        currentSection: nextSection.section,
        completedTopics: [
          ...(subjectProgress.completedTopics || []),
          currentSection,
        ].filter((s: string, i: number, arr: string[]) => arr.indexOf(s) === i),
        nextSection: nextSection.section,
      }
      if (!allProgress.sectionProgress) allProgress.sectionProgress = {}
      await prisma.aIPersonality.update({
        where: { studentId },
        data: {
          learningProgress: JSON.stringify(allProgress),
          updatedAt: new Date(),
        },
      })
    }
  } catch (err) {
    console.error('Error handling section progression:', err)
  }
}

async function sendResultsToAI(
  studentId: string,
  subject: string,
  score: number,
  results: any[],
  correctAnswers: number,
  totalQuestions: number
) {
  try {
    const performance = analyzeQuizPerformance(score, results)
    const scoreOutOf4 = Math.round((score / 100) * 4)
    if (scoreOutOf4 >= 3) {
      await handleSectionProgression(studentId, subject)
    }
    await StudentMemorySystem.updateSubjectMemory(studentId, subject, {
      lastQuizScore: score,
      lastQuizDate: new Date().toISOString(),
      quizPerformance: performance,
      strengths: results.filter((r) => r.isCorrect).map((r) => r.question),
      weaknesses: results.filter((r) => !r.isCorrect).map((r) => r.question),
    })
    const aiMessage = generateAIResponseFromQuizResults(
      score,
      performance,
      subject,
      totalQuestions
    )
    await prisma.aIConversation.create({
      data: {
        studentId,
        subjectArea: subject,
        studentMessage: `[QUIZ_RESULT] J'ai terminé le quiz ${subject} avec un score de ${score}% (${correctAnswers}/${totalQuestions} bonnes réponses)`,
        aiResponse: aiMessage,
        timestamp: new Date(),
        messageType: 'TEXT',
      },
    })
  } catch (err) {
    console.error('Error sending quiz results to AI:', err)
  }
}

// POST /ai/quiz-results
router.post('/quiz-results', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { studentId, subject, score, totalQuestions, correctAnswers, results } = body
    if (!studentId || !subject) {
      return res.status(400).json({ error: 'studentId and subject required' })
    }
    await prisma.quizSession.updateMany({
      where: { studentId, subject, status: 'in_progress' },
      data: {
        answers: JSON.stringify(results || []),
        score: correctAnswers ?? 0,
        totalQuestions: totalQuestions ?? 0,
        percentage: score ?? 0,
        status: 'completed',
        endTime: new Date(),
      },
    })
    await sendResultsToAI(
      studentId,
      subject,
      score ?? 0,
      results || [],
      correctAnswers ?? 0,
      totalQuestions ?? 0
    )
    return res.json({ success: true })
  } catch (error) {
    sendSanitizedError(res, error, 'ai/quiz-results')
  }
})

// POST /ai/whisper-transcribe (multipart: audio file + studentId)
router.post('/whisper-transcribe', upload.single('audio'), async (req: Request, res: Response) => {
  try {
    const file = (req as any).file
    const studentId = (req.body && (req.body as any).studentId) || (req as any).body?.studentId
    if (!file || !file.buffer) {
      return res.status(400).json({ error: 'No audio file provided' })
    }
    if (!studentId) {
      return res.status(400).json({ error: 'Student ID required' })
    }
    const OpenAI = (await import('openai')).default
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const blob = new Blob([file.buffer], { type: file.mimetype || 'audio/wav' })
    const transcription = await openai.audio.transcriptions.create({
      file: blob as any,
      model: 'whisper-1',
      language: 'en',
      response_format: 'text',
    })
    return res.json({
      success: true,
      transcription: typeof transcription === 'string' ? transcription : (transcription as any).text,
      studentId,
    })
  } catch (error: any) {
    console.error('Whisper transcription error:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to transcribe audio',
      details: error?.message || String(error),
    })
  }
})

export default router
