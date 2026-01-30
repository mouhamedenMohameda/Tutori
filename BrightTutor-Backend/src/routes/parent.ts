import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
import { createRateLimiter, rateLimitConfigs, getRateLimitHeaders } from '@/lib/rate-limit'
import { sanitizeEmail, sanitizePassword } from '@/lib/sanitize'
import { generateToken } from '@/lib/auth'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { generateEducationalResponse } from '@/lib/gemini'

const router = Router()
const authRateLimiter = createRateLimiter(rateLimitConfigs.auth)
const aiRateLimiter = createRateLimiter(rateLimitConfigs.aiGeneration)
const JWT_SECRET = () => getJWTSecret()

interface ParentPayload {
  parentId: string
  schoolId: string
  email: string
  role: string
}

function requireParent(req: Request, res: Response): ParentPayload | null {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authorization token required' })
    return null
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as ParentPayload
    if (decoded.role !== 'PARENT') {
      res.status(403).json({ error: 'Access denied' })
      return null
    }
    return decoded
  } catch {
    res.status(401).json({ error: 'Invalid token' })
    return null
  }
}

// GET /parent/profile
router.get('/profile', async (req: Request, res: Response) => {
  try {
    const decoded = requireParent(req, res)
    if (!decoded) return
    const parent = await prisma.parent.findUnique({
      where: { id: decoded.parentId },
      include: {
        school: { select: { id: true, schoolName: true } },
        studentParents: {
          include: {
            student: {
              select: {
                id: true,
                studentName: true,
                grade: true,
                age: true,
                dateOfBirth: true,
                class: { select: { className: true, gradeLevel: true } },
              },
            },
          },
        },
      },
    })
    if (!parent) return res.status(404).json({ error: 'Parent not found' })
    const children = (parent as any).studentParents?.map((sp: any) => {
      if (!sp?.student) return null
      return {
        id: sp.student.id,
        name: sp.student.studentName || 'Unknown Student',
        grade: sp.student.grade || sp.student.class?.gradeLevel || 'Unknown Grade',
        class: sp.student.class?.className || 'No class assigned',
        age: sp.student.age,
        dateOfBirth: sp.student.dateOfBirth,
        teacher: 'Loading...',
      }
    })?.filter(Boolean) || []
    res.json({
      success: true,
      parent: {
        id: parent.id,
        name: parent.name,
        email: parent.email,
        children,
        schoolId: parent.schoolId,
        schoolName: (parent as any).school?.schoolName,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'parent/profile')
  }
})

// POST /parent/student-chat — parent asks about their child's progress (parent must own student)
router.post('/student-chat', async (req: Request, res: Response) => {
  try {
    const decoded = requireParent(req, res)
    if (!decoded) return
    const body = req.body || {}
    const { studentId, parentQuestion, chatHistory } = body
    if (!studentId || !parentQuestion) {
      return res.status(400).json({ error: 'Student ID and question are required' })
    }
    const link = await prisma.studentParent.findFirst({
      where: { studentId, parentId: decoded.parentId },
    })
    if (!link) return res.status(403).json({ error: 'You can only ask about your own children' })
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: {
        school: { select: { schoolName: true } },
        class: {
          include: {
            classSubjects: { include: { subject: { select: { name: true, language: true } } } },
            teacherClasses: { include: { teacher: { select: { name: true } } } },
          },
        },
        studentParents: { include: { parent: { select: { name: true } } } },
        conversations: {
          where: { timestamp: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } },
          select: { studentMessage: true, aiResponse: true, timestamp: true, conversationTopic: true, subjectArea: true },
          orderBy: { timestamp: 'desc' },
          take: 50,
        },
      },
    })
    if (!student) return res.status(404).json({ error: 'Student not found' })
    const subjectNames = (student as any).class?.classSubjects?.map((cs: any) => cs.subject.name) || []
    const assignments = await prisma.assignment.findMany({
      where: {
        subject: { in: subjectNames },
        createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
      include: { teacher: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })
    const convs = (student as any).conversations || []
    const totalMessages = convs.length
    const studentMessages = convs.filter((c: any) => c.studentMessage)
    const subjectsDiscussed = extractSubjectFromMessages(convs.map((c: any) => c.studentMessage))
    const daysWithActivity = new Set(convs.map((c: any) => new Date(c.timestamp).toDateString())).size
    const recentActivity = convs.slice(0, 10).map((c: any) => ({
      date: new Date(c.timestamp).toLocaleDateString(),
      type: 'Question and Answer',
      preview: (c.studentMessage || '').substring(0, 50) + ((c.studentMessage || '').length > 50 ? '...' : ''),
    }))
    const prompt = `You are an AI assistant helping a parent understand their child's school progress. You can ONLY use the actual data provided about this specific student.

🚨 CRITICAL SECURITY RULES:
- ONLY use the student data provided below
- DO NOT make up information or use general knowledge
- DO NOT provide educational advice beyond what the data shows
- If asked about something not in the data, say "I don't have that specific information about ${student.studentName}"
- Stay focused on factual data about this student only
- Be conversational but strictly factual

STUDENT'S ACTUAL DATA:
- Name: ${student.studentName}
- Age: ${student.age || 'Not specified'} years old
- Grade: ${student.grade}
- School: ${(student as any).school?.schoolName}
- Class: ${(student as any).class?.className || 'Not assigned'}
- Learning Style: ${student.learningStyle || 'Not specified'}

ENROLLED SUBJECTS:
${(student as any).class?.classSubjects?.map((cs: any) => `- ${cs.subject.name} (taught in ${cs.subject.language})`).join('\n') || '- No subjects assigned'}

TEACHERS:
${(student as any).class?.teacherClasses?.map((tc: any) => `- ${tc.teacher.name}`).join('\n') || '- No teachers assigned'}

PARENTS:
${(student as any).studentParents?.map((sp: any) => sp.parent.name).join(', ') || 'No parents assigned'}

RECENT ACTIVITY (Last 30 Days):
- Total AI Chat Sessions: ${totalMessages} messages
- Student Questions Asked: ${studentMessages.length}
- Days with Activity: ${daysWithActivity} out of 30
- Subjects Discussed: ${subjectsDiscussed.join(', ') || 'General academic topics'}

RECENT ASSIGNMENTS:
${assignments.length > 0 ? assignments.map((a: any) => `- ${a.title} (${a.subject} by ${a.teacher.name})`).join('\n') : '- No recent assignments recorded'}

RECENT ACTIVITY DETAILS:
${recentActivity.length > 0 ? recentActivity.map((a: any) => `- ${a.date}: ${a.type} - ${a.preview}`).join('\n') : '- No recent activity recorded'}

PARENT'S QUESTION: "${parentQuestion}"

PREVIOUS CONVERSATION CONTEXT:
${chatHistory?.length ? chatHistory.slice(-4).map((m: any) => `${m.role}: ${m.content}`).join('\n') : 'This is the first question in this conversation'}

INSTRUCTIONS:
- Answer the parent's question using ONLY the actual data provided above
- Be helpful and conversational, like talking to a concerned parent
- If the data doesn't contain information to answer the question, politely explain what data you DO have
- Keep responses concise but informative (under 300 words)
- Reference specific data points when possible
- Be encouraging when appropriate based on actual performance data

Respond to the parent's question now:`
    const aiResponse = await generateEducationalResponse(prompt)
    res.json({
      success: true,
      response: aiResponse,
      timestamp: new Date().toISOString(),
      studentName: student.studentName,
      conversationContext: { totalMessages, subjectsDiscussed, recentActivity: recentActivity.length },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'parent/student-chat')
  }
})

function extractSubjectFromMessages(messages: string[]): string[] {
  const subjects = ['Mathematics', 'Mathématiques', 'Math', 'Science', 'Sciences', 'Physics', 'Physique']
  const mentioned = new Set<string>()
  messages.forEach((message) => {
    const lower = (message || '').toLowerCase()
    subjects.forEach((s) => {
      if (lower.includes(s.toLowerCase())) mentioned.add(s)
    })
  })
  return Array.from(mentioned)
}

// POST /parent/generate-report — generate progress report for a child (parent must own student)
router.post('/generate-report', async (req: Request, res: Response) => {
  try {
    const decoded = requireParent(req, res)
    if (!decoded) return
    const rateLimitResult = await aiRateLimiter(req)
    if (!rateLimitResult.allowed) {
      res.setHeader('X-RateLimit-Reset', String(rateLimitResult.resetTime))
      return res.status(429).json({
        error: 'Too many report generation attempts. Please try again later.',
        resetTime: rateLimitResult.resetTime,
      })
    }
    const body = req.body || {}
    const { studentId, language = 'en' } = body
    if (!studentId) return res.status(400).json({ error: 'Student ID is required' })
    const link = await prisma.studentParent.findFirst({
      where: { studentId, parentId: decoded.parentId },
    })
    if (!link) return res.status(403).json({ error: 'You can only generate reports for your own children' })
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: {
        school: { select: { schoolName: true } },
        class: {
          include: {
            classSubjects: { include: { subject: { select: { name: true, language: true } } } },
            teacherClasses: { include: { teacher: { select: { name: true } } } },
          },
        },
        studentParents: { include: { parent: { select: { name: true } } } },
        conversations: {
          where: { timestamp: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } },
          select: { studentMessage: true, aiResponse: true, timestamp: true, conversationTopic: true, subjectArea: true },
          orderBy: { timestamp: 'desc' },
          take: 100,
        },
        aiPersonality: { select: { learningProgress: true, keyTopics: true } },
      },
    })
    if (!student) return res.status(404).json({ error: 'Student not found' })
    const subjectNames = (student as any).class?.classSubjects?.map((cs: any) => cs.subject.name) || []
    const recentAssignments = await prisma.assignment.findMany({
      where: {
        subject: { in: subjectNames },
        createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
      include: { teacher: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })
    const convs = (student as any).conversations || []
    const totalChatMessages = convs.length
    const studentMessages = convs.filter((m: any) => m.studentMessage)
    const subjectsDiscussed = extractSubjectsFromMessages(convs.map((m: any) => m.studentMessage))
    const learningTopics = convs.map((m: any) => m.conversationTopic).filter((t: string) => t && t !== 'General').slice(0, 5)
    const daysWithActivity = new Set(convs.map((m: any) => new Date(m.timestamp).toDateString())).size
    const averageMessagesPerDay = daysWithActivity > 0 ? Math.round(totalChatMessages / daysWithActivity) : 0
    const recentLearningProgress = (student as any).aiPersonality?.learningProgress
      ? JSON.parse((student as any).aiPersonality.learningProgress)
      : null
    const languageInstructions: Record<string, string> = {
      en: 'Generate the report in English.',
      fr: 'Generate the report in French. Use "Progrès Récent:", "Points Forts:", "Domaines à Améliorer:", "Conseils aux Parents:" as section headers.',
      ar: 'Generate the report in Arabic. Use "التقدم الأخير:", "نقاط القوة:", "مجالات للتحسين:", "نصائح للآباء:" as section headers.',
    }
    const prompt = `You are an expert educational analyst creating a personalized progress report for ${student.studentName}.

LANGUAGE REQUIREMENT: ${languageInstructions[language] || languageInstructions.en}

STUDENT PROFILE:
- Name: ${student.studentName}
- Age: ${student.age || 'Not specified'} years old
- Grade: ${student.grade}
- School: ${(student as any).school?.schoolName}
- Class: ${(student as any).class?.className || 'Not assigned'}
- Parents: ${(student as any).studentParents?.map((sp: any) => sp.parent.name).join(', ') || 'None assigned'}

SUBJECTS ENROLLED:
${(student as any).class?.classSubjects?.map((cs: any) => `- ${cs.subject.name} (taught in ${cs.subject.language})`).join('\n') || '- No subjects assigned'}

TEACHERS:
${(student as any).class?.teacherClasses?.map((tc: any) => `- ${tc.teacher.name}`).join('\n') || '- No teachers assigned'}

ACTUAL ACTIVITY DATA (Last 30 Days):
- Total AI Chat Messages: ${totalChatMessages}
- Student Questions: ${studentMessages.length}
- Days with Activity: ${daysWithActivity} out of 30
- Average Messages per Active Day: ${averageMessagesPerDay}
- Subjects Discussed: ${subjectsDiscussed.join(', ') || 'No specific subjects discussed'}
- Recent Learning Topics: ${learningTopics.join(', ') || 'No specific topics tracked'}
${recentLearningProgress ? `- Current Learning Progress: ${recentLearningProgress.currentChapter} - ${recentLearningProgress.currentSection}` : '- No learning progress tracked'}

RECENT ASSIGNMENTS:
${recentAssignments.length > 0 ? recentAssignments.map((a: any) => `- ${a.title} (${a.subject}, assigned by ${a.teacher.name})`).join('\n') : '- No recent assignments recorded'}

CRITICAL INSTRUCTIONS - USE THE ACTUAL DATA ABOVE:

${totalChatMessages === 0 ? `NO ACTIVITY DETECTED: This student has ${totalChatMessages} chat messages and ${daysWithActivity} days with activity. The report MUST acknowledge this lack of engagement specifically.` : `ACTIVE STUDENT: This student has ${totalChatMessages} chat messages over ${daysWithActivity} days, discussing: ${subjectsDiscussed.join(', ') || 'general topics'}. Use this actual data.`}

REQUIREMENTS:
1. Sound like a real teacher who knows this student personally
2. Reference specific subjects they're actually enrolled in: ${(student as any).class?.classSubjects?.map((cs: any) => cs.subject.name).join(', ') || 'No subjects assigned'}
3. ${totalChatMessages === 0 ? 'Acknowledge the lack of AI platform engagement specifically' : 'Mention actual recent activities and engagement patterns based on the data above'}
4. Include 2-3 specific strengths based on their profile and data
5. Identify 1-2 areas needing attention (realistic, based on actual data)
6. Provide 2-3 specific, actionable tips for parents
7. Be encouraging but honest about actual engagement levels
8. Keep total length under 600 characters for easy reading

FORMAT REQUIREMENTS:
- Use HTML <strong> tags for section headers, NOT markdown stars
- DO NOT include code blocks or markdown formatting
- Return clean HTML content only

FORMAT:
<strong>Recent Progress:</strong> [Based on actual activity data]
<strong>Strengths:</strong> [2-3 specific observations]
<strong>Areas to Focus:</strong> [1-2 specific areas]
<strong>Parent Tips:</strong> [2-3 brief, actionable suggestions]

Return the content directly without any code block formatting. Make it feel personal and data-driven, not generic.`
    let reportContent = await generateEducationalResponse(prompt)
    if (reportContent) {
      reportContent = reportContent.replace(/^```html\n?/i, '').replace(/\n?```$/i, '').replace(/^```\n?/, '').replace(/\n?```$/, '').trim()
    }
    res.json({
      success: true,
      report: reportContent,
      studentName: student.studentName,
      generatedAt: new Date().toISOString(),
      metadata: { totalChatMessages, daysWithActivity },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'parent/generate-report')
  }
})

function extractSubjectsFromMessages(messages: string[]): string[] {
  const commonSubjects = ['Mathematics', 'Math', 'Arabic', 'French', 'English', 'Science', 'Islamic Studies', 'History', 'Geography', 'Art', 'Music']
  const mentioned = new Set<string>()
  messages.forEach((message) => {
    const lower = (message || '').toLowerCase()
    commonSubjects.forEach((s) => {
      if (lower.includes(s.toLowerCase())) mentioned.add(s)
    })
  })
  return Array.from(mentioned)
}

router.post('/login', async (req: Request, res: Response) => {
  try {
    const rateLimitResult = await authRateLimiter(req)
    if (!rateLimitResult.allowed) {
      const headers = getRateLimitHeaders(rateLimitResult)
      Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v))
      return res.status(429).json({
        error: 'Too many login attempts. Please try again later.',
        resetTime: rateLimitResult.resetTime,
      })
    }

    const rawData = req.body || {}
    const email = sanitizeEmail(rawData.email)
    const password = sanitizePassword(rawData.password)
    const normalizedEmail = email ? email.toLowerCase().trim() : ''

    if (!normalizedEmail || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const parent = await prisma.parent.findFirst({
      where: { email: { equals: normalizedEmail, mode: 'insensitive' } },
      include: {
        school: { select: { id: true, schoolName: true } },
        studentParents: {
          include: {
            student: {
              select: {
                id: true,
                studentName: true,
                grade: true,
                class: { select: { className: true } },
              },
            },
          },
        },
      },
    })

    if (!parent) {
      return res.status(401).json({
        error:
          'Invalid email or password. Please check your credentials or contact your school administrator.',
      })
    }

    const isPasswordValid = await bcrypt.compare(password, parent.password)
    if (!isPasswordValid) {
      return res.status(401).json({
        error:
          'Invalid email or password. Please check your credentials or contact your school administrator.',
      })
    }

    const children = parent.studentParents.map((sp) => ({
      id: sp.student.id,
      name: sp.student.studentName,
      grade: sp.student.grade,
      class: sp.student.class?.className || 'No Class',
    }))

    const token = generateToken({
      parentId: parent.id,
      email: parent.email,
      schoolId: parent.schoolId,
      role: 'PARENT',
    })

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      parent: {
        id: parent.id,
        name: parent.name,
        email: parent.email,
        phone: parent.phone,
        children,
        schoolId: parent.schoolId,
        schoolName: parent.school?.schoolName || 'Unknown School',
      },
    })
  } catch (error: any) {
    console.error('Parent login error:', error)
    return res.status(500).json({ error: 'Login failed. Please try again.' })
  }
})

export default router
