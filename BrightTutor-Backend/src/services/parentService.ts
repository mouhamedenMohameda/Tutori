import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { generateToken } from '@/lib/auth'
import { generateEducationalResponse } from '@/lib/gemini'

export async function getProfile(parentId: string) {
  const parent = await prisma.parent.findUnique({
    where: { id: parentId },
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
  if (!parent) return { error: 'Parent not found', status: 404 as const }
  const children = (parent.studentParents || [])
    .map((sp) => {
      if (!sp?.student) return null
      const s = sp.student
      return {
        id: s.id,
        name: s.studentName || 'Unknown Student',
        grade: s.grade || (s as { class?: { gradeLevel: string } }).class?.gradeLevel || 'Unknown Grade',
        class: (s as { class?: { className: string } }).class?.className || 'No class assigned',
        age: s.age,
        dateOfBirth: s.dateOfBirth,
        teacher: 'Loading...',
      }
    })
    .filter(Boolean)
  return {
    parent: {
      id: parent.id,
      name: parent.name,
      email: parent.email,
      children,
      schoolId: parent.schoolId,
      schoolName: (parent as { school?: { schoolName: string } }).school?.schoolName,
    },
  }
}

export async function getDashboard(parentId: string) {
  const parent = await prisma.parent.findUnique({
    where: { id: parentId },
    include: {
      school: { select: { schoolName: true } },
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
  if (!parent) return { error: 'Parent not found', status: 404 as const }
  const children = (parent.studentParents || []).map((sp) => {
    const s = sp.student
    return {
      id: s.id,
      name: s.studentName,
      grade: s.grade,
      class: (s as { class?: { className: string } }).class?.className ?? null,
    }
  })
  return {
    parent: { id: parent.id, name: parent.name, schoolName: (parent as { school?: { schoolName: string } }).school?.schoolName },
    children,
    recentActivity: [],
  }
}

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

export async function studentChat(
  parentId: string,
  studentId: string,
  parentQuestion: string,
  chatHistory?: { role: string; content: string }[]
) {
  const link = await prisma.studentParent.findFirst({
    where: { studentId, parentId },
  })
  if (!link) return { error: 'You can only ask about your own children', status: 403 as const }
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
  if (!student) return { error: 'Student not found', status: 404 as const }
  const subjectNames = (student.class as { classSubjects?: { subject: { name: string } }[] })?.classSubjects?.map((cs) => cs.subject.name) || []
  const assignments = await prisma.assignment.findMany({
    where: {
      subject: { in: subjectNames },
      createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    },
    include: { teacher: { select: { name: true } } },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })
  const convs = student.conversations || []
  const totalMessages = convs.length
  const studentMessages = convs.filter((c) => c.studentMessage)
  const subjectsDiscussed = extractSubjectFromMessages(convs.map((c) => c.studentMessage))
  const daysWithActivity = new Set(convs.map((c) => new Date(c.timestamp).toDateString())).size
  const recentActivity = convs.slice(0, 10).map((c) => ({
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
- School: ${(student as { school?: { schoolName: string } }).school?.schoolName}
- Class: ${(student as { class?: { className: string } }).class?.className || 'Not assigned'}
- Learning Style: ${student.learningStyle || 'Not specified'}

ENROLLED SUBJECTS:
${(student.class as { classSubjects?: { subject: { name: string; language: string } }[] })?.classSubjects?.map((cs) => `- ${cs.subject.name} (taught in ${cs.subject.language})`).join('\n') || '- No subjects assigned'}

TEACHERS:
${(student.class as { teacherClasses?: { teacher: { name: string } }[] })?.teacherClasses?.map((tc) => `- ${tc.teacher.name}`).join('\n') || '- No teachers assigned'}

PARENTS:
${(student.studentParents || []).map((sp) => sp.parent.name).join(', ') || 'No parents assigned'}

RECENT ACTIVITY (Last 30 Days):
- Total AI Chat Sessions: ${totalMessages} messages
- Student Questions Asked: ${studentMessages.length}
- Days with Activity: ${daysWithActivity} out of 30
- Subjects Discussed: ${subjectsDiscussed.join(', ') || 'General academic topics'}

RECENT ASSIGNMENTS:
${assignments.length > 0 ? assignments.map((a) => `- ${a.title} (${a.subject} by ${a.teacher?.name})`).join('\n') : '- No recent assignments recorded'}

RECENT ACTIVITY DETAILS:
${recentActivity.length > 0 ? recentActivity.map((a) => `- ${a.date}: ${a.type} - ${a.preview}`).join('\n') : '- No recent activity recorded'}

PARENT'S QUESTION: "${parentQuestion}"

PREVIOUS CONVERSATION CONTEXT:
${chatHistory?.length ? chatHistory.slice(-4).map((m) => `${m.role}: ${m.content}`).join('\n') : 'This is the first question in this conversation'}

INSTRUCTIONS:
- Answer the parent's question using ONLY the actual data provided above
- Be helpful and conversational, like talking to a concerned parent
- If the data doesn't contain information to answer the question, politely explain what data you DO have
- Keep responses concise but informative (under 300 words)
- Reference specific data points when possible
- Be encouraging when appropriate based on actual performance data

Respond to the parent's question now:`
  const aiResponse = await generateEducationalResponse(prompt)
  return {
    response: aiResponse,
    timestamp: new Date().toISOString(),
    studentName: student.studentName,
    conversationContext: { totalMessages, subjectsDiscussed, recentActivity: recentActivity.length },
  }
}

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

export async function generateReport(
  parentId: string,
  studentId: string,
  language: string
) {
  const link = await prisma.studentParent.findFirst({
    where: { studentId, parentId },
  })
  if (!link) return { error: 'You can only generate reports for your own children', status: 403 as const }
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
  if (!student) return { error: 'Student not found', status: 404 as const }
  const subjectNames = (student.class as { classSubjects?: { subject: { name: string } }[] })?.classSubjects?.map((cs) => cs.subject.name) || []
  const recentAssignments = await prisma.assignment.findMany({
    where: {
      subject: { in: subjectNames },
      createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    },
    include: { teacher: { select: { name: true } } },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })
  const convs = student.conversations || []
  const totalChatMessages = convs.length
  const studentMessages = convs.filter((m) => m.studentMessage)
  const subjectsDiscussed = extractSubjectsFromMessages(convs.map((m) => m.studentMessage))
  const learningTopics = convs.map((m) => m.conversationTopic).filter((t): t is string => !!t && t !== 'General').slice(0, 5)
  const daysWithActivity = new Set(convs.map((m) => new Date(m.timestamp).toDateString())).size
  const averageMessagesPerDay = daysWithActivity > 0 ? Math.round(totalChatMessages / daysWithActivity) : 0
  const recentLearningProgress = (student.aiPersonality as { learningProgress?: string } | null)?.learningProgress
    ? JSON.parse((student.aiPersonality as { learningProgress: string }).learningProgress)
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
- School: ${(student as { school?: { schoolName: string } }).school?.schoolName}
- Class: ${(student as { class?: { className: string } }).class?.className || 'Not assigned'}
- Parents: ${(student.studentParents || []).map((sp) => sp.parent.name).join(', ') || 'None assigned'}

SUBJECTS ENROLLED:
${(student.class as { classSubjects?: { subject: { name: string; language: string } }[] })?.classSubjects?.map((cs) => `- ${cs.subject.name} (taught in ${cs.subject.language})`).join('\n') || '- No subjects assigned'}

TEACHERS:
${(student.class as { teacherClasses?: { teacher: { name: string } }[] })?.teacherClasses?.map((tc) => `- ${tc.teacher.name}`).join('\n') || '- No teachers assigned'}

ACTUAL ACTIVITY DATA (Last 30 Days):
- Total AI Chat Messages: ${totalChatMessages}
- Student Questions: ${studentMessages.length}
- Days with Activity: ${daysWithActivity} out of 30
- Average Messages per Active Day: ${averageMessagesPerDay}
- Subjects Discussed: ${subjectsDiscussed.join(', ') || 'No specific subjects discussed'}
- Recent Learning Topics: ${learningTopics.join(', ') || 'No specific topics tracked'}
${recentLearningProgress ? `- Current Learning Progress: ${recentLearningProgress.currentChapter} - ${recentLearningProgress.currentSection}` : '- No learning progress tracked'}

RECENT ASSIGNMENTS:
${recentAssignments.length > 0 ? recentAssignments.map((a) => `- ${a.title} (${a.subject}, assigned by ${a.teacher?.name})`).join('\n') : '- No recent assignments recorded'}

CRITICAL INSTRUCTIONS - USE THE ACTUAL DATA ABOVE:

${totalChatMessages === 0 ? `NO ACTIVITY DETECTED: This student has ${totalChatMessages} chat messages and ${daysWithActivity} days with activity. The report MUST acknowledge this lack of engagement specifically.` : `ACTIVE STUDENT: This student has ${totalChatMessages} chat messages over ${daysWithActivity} days, discussing: ${subjectsDiscussed.join(', ') || 'general topics'}. Use this actual data.`}

REQUIREMENTS:
1. Sound like a real teacher who knows this student personally
2. Reference specific subjects they're actually enrolled in: ${(student.class as { classSubjects?: { subject: { name: string } }[] })?.classSubjects?.map((cs) => cs.subject.name).join(', ') || 'No subjects assigned'}
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
    reportContent = reportContent
      .replace(/^```html\n?/i, '')
      .replace(/\n?```$/i, '')
      .replace(/^```\n?/, '')
      .replace(/\n?```$/, '')
      .trim()
  }
  return {
    report: reportContent,
    studentName: student.studentName,
    generatedAt: new Date().toISOString(),
    metadata: { totalChatMessages, daysWithActivity },
  }
}

export async function parentLogin(email: string, password: string) {
  const normalizedEmail = email ? email.toLowerCase().trim() : ''
  if (!normalizedEmail || !password) {
    return { error: 'Email and password are required', status: 400 as const }
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
    return {
      error: 'Invalid email or password. Please check your credentials or contact your school administrator.',
      status: 401 as const,
    }
  }
  const isPasswordValid = await bcrypt.compare(password, parent.password)
  if (!isPasswordValid) {
    return {
      error: 'Invalid email or password. Please check your credentials or contact your school administrator.',
      status: 401 as const,
    }
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
  return {
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
  }
}
