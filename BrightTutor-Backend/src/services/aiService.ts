/**
 * AI API: student-context, generate-hint, translate-math-content, generate-quiz-questions,
 * tutor-chat, generate-quiz, quiz-results, whisper-transcribe
 */
import { prisma } from '@/lib/prisma'
import { generateEducationalResponse } from '@/lib/gemini'
import { SimpleTutorSystem } from '@/lib/simple-tutor-system'
import { IntelligentQuizGenerator } from '@/lib/quiz/IntelligentQuizGenerator'
import { StudentMemorySystem } from '@/lib/memory/StudentMemorySystem'
import { getNextSection, mapClassroomYearToCurriculumYear } from '@/lib/curriculum/curriculum-loader'

export function getStudentContext(_body: { studentId?: string; schoolId?: string }): {
  success: true
  message: string
  aiInstructions: string[]
  culturalContext: Record<string, unknown>
} {
  return {
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
}

export async function generateHint(body: {
  question: string
  questionType?: string
  subject?: string
  year?: string | number
  sectionTitle?: string
  languagePreference?: string
}): Promise<{ success: true; hint: string }> {
  const {
    question,
    subject,
    year,
    sectionTitle,
    languagePreference = 'fr',
  } = body
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
  const cleanedHint = hint.trim().replace(/```[\s\S]*?```/g, '').replace(/`/g, '')
  return { success: true, hint: cleanedHint }
}

export async function translateMathContent(body: {
  text: string
  languagePreference: string
  subject?: string
}): Promise<
  | { success: true; translatedText: string; language: 'fr' | 'ar'; originalText?: string }
  | { success: false; translatedText: string; language: string; error: string }
> {
  const { text, languagePreference, subject = 'math' } = body
  if (languagePreference === 'fr') {
    return { success: true, translatedText: text, language: 'fr' }
  }
  try {
    const translationPrompt = `You are a professional translator for educational content. Translate this ${subject} question/instruction to Arabic while PRESERVING all math terms and symbols. PRESERVE: Division euclidienne, PGCD, PPCM, numbers, symbols (÷, ×, +, =, √). Translate only explanatory text. Return ONLY the translated text.

INPUT TEXT TO TRANSLATE:
${text}

TRANSLATE NOW:`
    const translatedText = await generateEducationalResponse(translationPrompt)
    const cleaned = translatedText
      .trim()
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`/g, '')
      .replace(/^Translation:|^Output:|^Translated text:/i, '')
      .trim()
    return {
      success: true,
      translatedText: cleaned,
      language: 'ar',
      originalText: text,
    }
  } catch {
    return {
      success: false,
      translatedText: text,
      language: 'fr',
      error: 'Translation failed, using original text',
    }
  }
}

export async function generateQuizQuestions(body: { prompt?: string }): Promise<
  | { success: true; questions: unknown[] }
  | { success: false; status: number; error: string }
> {
  const { prompt } = body
  const aiPrompt = `You are an expert educational quiz generator. Create high-quality multiple choice questions.

${prompt ?? ''}

Generate exactly 5 multiple choice questions in this JSON format:
[
  { "id": "q1", "question": "Question text", "options": ["A", "B", "C", "D"], "correctAnswer": "A", "explanation": "Why this is correct" }
]

Return ONLY the JSON array, no other text.`
  const response = await generateEducationalResponse(aiPrompt)
  const jsonMatch = response.match(/\[[\s\S]*\]/)
  if (!jsonMatch) {
    return { success: false, status: 500, error: 'Invalid response format from AI' }
  }
  let questions: Array<{ id?: string; question?: string; options?: unknown[]; correctAnswer?: string; explanation?: string }>
  try {
    questions = JSON.parse(jsonMatch[0])
  } catch {
    return { success: false, status: 500, error: 'Failed to parse quiz questions' }
  }
  const valid = questions.filter(
    (q) => q.id && q.question && q.options && q.correctAnswer && q.explanation
  )
  if (valid.length === 0) {
    return { success: false, status: 500, error: 'No valid questions generated' }
  }
  return { success: true, questions: valid }
}

export async function buildTutorContext(
  studentId: string,
  message: string,
  options: { subject?: string; languagePreference?: string }
): Promise<
  | { student: { studentName: string; languagePreference?: string }; tutorContext: import('@/lib/simple-tutor-system').SimpleTutorContext }
  | null
> {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
    include: { class: true, aiPersonality: true },
  })
  if (!student) return null
  const finalLanguagePreference =
    options.languagePreference ?? (student as { languagePreference?: string }).languagePreference ?? 'fr'
  const tutorContext = await SimpleTutorSystem.createContext(studentId)
  if (!tutorContext) return null
  tutorContext.languagePreference = finalLanguagePreference as 'fr' | 'ar'
  if (options.subject) {
    tutorContext.selectedSubject = options.subject
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
  recentConversations.reverse().forEach((conv: { studentMessage?: string; aiResponse?: string; timestamp: Date }) => {
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
  return {
    student: { studentName: student.studentName, languagePreference: finalLanguagePreference },
    tutorContext,
  }
}

export function getTutorChatStream(
  message: string,
  tutorContext: import('@/lib/simple-tutor-system').SimpleTutorContext
): AsyncGenerator<string> {
  return SimpleTutorSystem.generateResponseWithSectionsStream(message, tutorContext)
}

export async function getTutorChatResponse(
  message: string,
  tutorContext: import('@/lib/simple-tutor-system').SimpleTutorContext
): Promise<string> {
  try {
    return await SimpleTutorSystem.generateResponseWithSections(message, tutorContext)
  } catch {
    const msgLang =
      message.toLowerCase().includes('english') || message.toLowerCase().includes('pls')
        ? 'English'
        : 'French'
    return msgLang === 'English'
      ? "I had a small technical issue, but I'm ready to help now! What would you like to learn?"
      : "J'ai eu un petit problème technique, mais je suis prêt maintenant ! Que veux-tu apprendre ?"
  }
}

export async function generateQuiz(body: {
  studentId: string
  subject: string
  numberOfQuestions?: number
  languagePreference?: string
}): Promise<{
  success: true
  questions: unknown[]
  source: string
  basedOnTeaching: boolean
  quizSessionId: string
  message: string
}> {
  const { studentId, subject, languagePreference } = body
  let finalLanguagePreference = languagePreference
  if (!finalLanguagePreference) {
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      select: { languagePreference: true },
    })
    finalLanguagePreference = (student as { languagePreference?: string } | null)?.languagePreference || 'fr'
  }
  const contextualQuiz = await IntelligentQuizGenerator.generateContextualQuiz(
    studentId,
    subject,
    (finalLanguagePreference as 'fr' | 'ar') || 'fr'
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
  return {
    success: true,
    questions: contextualQuiz.questions,
    source: contextualQuiz.source,
    basedOnTeaching: contextualQuiz.basedOnTeaching,
    quizSessionId: quizSession.id,
    message: `Quiz generated from ${contextualQuiz.source}`,
  }
}

function analyzeQuizPerformance(score: number, _results: unknown[]): string {
  if (score >= 90) return 'excellent'
  if (score >= 70) return 'good'
  if (score >= 50) return 'needs_improvement'
  return 'struggling'
}

function generateAIResponseFromQuizResults(
  _score: number,
  _performance: string,
  _subject: string,
  totalQuestions: number,
  correctAnswers: number
): string {
  if (correctAnswers >= 3) {
    return `Excellent ! Tu as eu ${correctAnswers} sur ${totalQuestions}. Bravo, tu peux passer à la prochaine section ! 🎉`
  }
  return `Tu as eu ${correctAnswers} sur ${totalQuestions}, tu dois encore t'entraîner un peu avant de continuer. On va reprendre cette section ensemble ! 💪`
}

async function handleSectionProgression(studentId: string, subject: string): Promise<void> {
  try {
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: { aiPersonality: true, class: true },
    })
    if (!student?.aiPersonality) return
    const normalizedSubject =
      subject.toLowerCase() === 'mathematics' ? 'math' : subject.toLowerCase()
    const learningProgress = student.aiPersonality.learningProgress
    let allProgress: Record<string, unknown> = {}
    if (typeof learningProgress === 'string') {
      try {
        const parsed = JSON.parse(learningProgress) as Record<string, unknown>
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
    const subjectProgress = (allProgress[normalizedSubject] as Record<string, unknown>) || {}
    if (!allProgress[normalizedSubject]) {
      allProgress[normalizedSubject] = {
        currentChapter: 'ch1',
        currentSection: 'ch1-s1',
        completedTopics: [],
        nextSection: 'ch1-s2',
      }
    }
    const currentSection = (subjectProgress.currentSection as string) || 'ch1-s1'
    const currentChapter = (subjectProgress.currentChapter as string) || 'ch1'
    const studentYear = student.class?.classroomYear || 'Year1'
    const year = mapClassroomYearToCurriculumYear(studentYear)
    const nextSection = getNextSection(year, subject, currentChapter, currentSection)
    if (nextSection) {
      const completedTopics = [...((subjectProgress.completedTopics as string[]) || []), currentSection]
      allProgress[normalizedSubject] = {
        ...subjectProgress,
        currentChapter: nextSection.chapter,
        currentSection: nextSection.section,
        completedTopics: completedTopics.filter((s, i, arr) => arr.indexOf(s) === i),
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
  results: Array<{ isCorrect?: boolean; question?: string }>,
  correctAnswers: number,
  totalQuestions: number
): Promise<void> {
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
      totalQuestions,
      correctAnswers
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

export async function submitQuizResults(body: {
  studentId: string
  subject: string
  score?: number
  totalQuestions?: number
  correctAnswers?: number
  results?: Array<{ isCorrect?: boolean; question?: string }>
}): Promise<void> {
  const { studentId, subject, score = 0, totalQuestions = 0, correctAnswers = 0, results = [] } = body
  await prisma.quizSession.updateMany({
    where: { studentId, subject, status: 'in_progress' },
    data: {
      answers: JSON.stringify(results),
      score: correctAnswers,
      totalQuestions,
      percentage: score,
      status: 'completed',
      endTime: new Date(),
    },
  })
  await sendResultsToAI(studentId, subject, score, results, correctAnswers, totalQuestions)
}

export async function whisperTranscribe(
  file: { buffer: Buffer; mimetype?: string },
  studentId: string
): Promise<{ success: true; transcription: string; studentId: string } | { success: false; error: string; details?: string }> {
  try {
    const OpenAI = (await import('openai')).default
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const blob = new Blob([new Uint8Array(file.buffer)], { type: file.mimetype || 'audio/wav' })
    const transcription = await openai.audio.transcriptions.create({
      file: blob as unknown as File,
      model: 'whisper-1',
      language: 'en',
      response_format: 'text',
    })
    const text =
      typeof transcription === 'string' ? transcription : (transcription as { text?: string }).text ?? ''
    return { success: true, transcription: text, studentId }
  } catch (error: unknown) {
    const err = error as { message?: string }
    return {
      success: false,
      error: 'Failed to transcribe audio',
      details: err?.message || String(error),
    }
  }
}
