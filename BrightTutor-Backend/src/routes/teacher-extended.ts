/**
 * Teacher routes: classes, available-classes, available-subjects, curriculum,
 * dashboard/stats, students, reports, profile, assignments, assignments/remove-file,
 * lesson-plans/upload
 */
import { Router, Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { prisma } from '@/lib/prisma'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { validateId } from '@/lib/security/validation'
import { requireRole } from '@/lib/auth-middleware'

const router = Router()

const uploadDirLessonPlans = path.join(process.cwd(), 'public', 'uploads', 'lesson-plans')
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}
ensureDir(uploadDirLessonPlans)
const storageLessonPlans = multer.diskStorage({
  destination: (_req, _file, cb) => {
    ensureDir(uploadDirLessonPlans)
    cb(null, uploadDirLessonPlans)
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${(file.originalname || 'lesson_plan').replace(/[^a-zA-Z0-9.-]/g, '_')}`)
  },
})
const uploadLessonPlan = multer({
  storage: storageLessonPlans,
  limits: { fileSize: 25 * 1024 * 1024 },
}).single('file')

interface TeacherPayload {
  teacherId: string
  schoolId: string
  email: string
  role: string
}

function requireTeacher(req: Request, res: Response): TeacherPayload | null {
  const auth = requireRole(req, res, ['TEACHER'])
  if (!auth) return null
  return auth as TeacherPayload
}

// GET /teacher/classes — with performance
router.get('/classes', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    const teacherClasses = await prisma.teacherClass.findMany({
      where: { teacherId: decoded.teacherId },
      include: {
        class: {
          include: {
            students: {
              where: { isActive: true },
              include: {
                conversations: { where: { timestamp: { gte: sevenDaysAgo } } },
              },
            },
          },
        },
      },
    })
    const classPerformance = teacherClasses.map((tc: any) => {
      const classItem = tc.class
      const students = classItem.students || []
      const studentCount = students.length
      if (studentCount === 0) {
        return {
          id: classItem.id,
          className: classItem.className,
          name: classItem.className,
          students: 0,
          avgEngagement: 0,
          subject: tc.subject || 'General',
          grade: classItem.gradeLevel,
        }
      }
      let totalEngagement = 0
      let activeStudents = 0
      students.forEach((s: any) => {
        const convs = s.conversations || []
        if (convs.length > 0) {
          activeStudents++
          const topics = new Set(convs.map((c: any) => c.subjectArea).filter(Boolean))
          totalEngagement += Math.min(100, convs.length * 8 + topics.size * 15)
        }
      })
      return {
        id: classItem.id,
        className: classItem.className,
        name: classItem.className,
        students: studentCount,
        avgEngagement: activeStudents > 0 ? Math.round(totalEngagement / activeStudents) : 0,
        subject: tc.subject || 'General',
        grade: classItem.gradeLevel,
      }
    })
    res.json({ success: true, classes: classPerformance })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/classes')
  }
})

// GET /teacher/available-classes
router.get('/available-classes', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const teacherClasses = await prisma.teacherClass.findMany({
      where: { teacherId: decoded.teacherId },
      include: {
        class: { select: { id: true, className: true, gradeLevel: true, academicYear: true } },
      },
    })
    const classes = teacherClasses.map((tc: any) => ({
      id: tc.class.id,
      name: tc.class.className,
      grade: tc.class.gradeLevel,
      year: tc.class.academicYear,
    }))
    res.json({ success: true, classes })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/available-classes')
  }
})

// GET /teacher/available-subjects
router.get('/available-subjects', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const teacher = await prisma.teacher.findUnique({
      where: { id: decoded.teacherId },
      select: { subjects: true, schoolId: true },
    })
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' })
    const subjectNames = JSON.parse(teacher.subjects || '[]') as string[]
    if (subjectNames.length === 0) {
      return res.json({ success: true, subjects: [] })
    }
    const subjects = await prisma.subject.findMany({
      where: { name: { in: subjectNames }, schoolId: teacher.schoolId, isActive: true },
      select: { id: true, name: true, description: true },
    })
    res.json({
      success: true,
      subjects: subjects.map((s) => ({ id: s.id, name: s.name, description: s.description })),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/available-subjects')
  }
})

// GET /teacher/curriculum
router.get('/curriculum', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const classId = req.query.classId as string | undefined
    if (classId) {
      const teacherClass = await prisma.teacherClass.findFirst({
        where: { teacherId: decoded.teacherId, classId },
      })
      if (!teacherClass) {
        return res.status(403).json({ error: 'Unauthorized access to this class' })
      }
      const curriculum = await prisma.curriculumMonthly.findMany({
        where: { classId },
        include: {
          class: { select: { className: true, gradeLevel: true } },
          uploader: { select: { fullName: true } },
        },
        orderBy: [{ year: 'desc' }, { month: 'desc' }],
      })
      return res.json({
        success: true,
        curriculum: curriculum.map((item: any) => ({
          id: item.id,
          month: item.month,
          year: item.year,
          subjects: JSON.parse(item.subjects || '[]'),
          learningObjectives: item.learningObjectives,
          className: item.class.className,
          grade: item.class.gradeLevel,
          uploadedBy: item.uploader?.fullName,
          uploadedAt: item.uploadedAt,
        })),
      })
    }
    const teacherClasses = await prisma.teacherClass.findMany({
      where: { teacherId: decoded.teacherId },
      include: {
        class: {
          include: {
            curriculum: {
              include: { uploader: { select: { fullName: true } } },
              orderBy: [{ year: 'desc' }, { month: 'desc' }],
            },
          },
        },
      },
    })
    const allCurriculum = teacherClasses.flatMap((tc: any) =>
      (tc.class.curriculum || []).map((item: any) => ({
        id: item.id,
        month: item.month,
        year: item.year,
        subjects: JSON.parse(item.subjects || '[]'),
        learningObjectives: item.learningObjectives,
        className: tc.class.className,
        grade: tc.class.gradeLevel,
        uploadedBy: item.uploader?.fullName,
        uploadedAt: item.uploadedAt,
      }))
    )
    res.json({ success: true, curriculum: allCurriculum })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/curriculum')
  }
})

// GET /teacher/dashboard/stats
router.get('/dashboard/stats', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const teacherClasses = await prisma.teacherClass.findMany({
      where: { teacherId: decoded.teacherId },
      include: { class: { include: { students: { where: { isActive: true } } } } },
    })
    const allStudentIds = teacherClasses.flatMap((tc: any) => (tc.class.students || []).map((s: any) => s.id))
    const totalClasses = teacherClasses.length
    const totalStudents = allStudentIds.length
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const activeStudents = await prisma.student.count({
      where: {
        id: { in: allStudentIds },
        conversations: { some: { timestamp: { gte: sevenDaysAgo } } },
      },
    })
    const recentConvs = await prisma.aIConversation.findMany({
      where: { studentId: { in: allStudentIds }, timestamp: { gte: sevenDaysAgo } },
    })
    const engagementData: Record<string, { questionsCount: number; topics: Set<string> }> = {}
    for (const c of recentConvs) {
      if (!engagementData[c.studentId]) {
        engagementData[c.studentId] = { questionsCount: 0, topics: new Set() }
      }
      engagementData[c.studentId].questionsCount++
      if (c.subjectArea) engagementData[c.studentId].topics.add(c.subjectArea)
    }
    const studentEngagements = Object.values(engagementData)
    const avgEngagement =
      studentEngagements.length > 0
        ? Math.round(
            studentEngagements.reduce(
              (sum, s) => sum + Math.min(100, s.questionsCount * 10 + s.topics.size * 20),
              0
            ) / studentEngagements.length
          )
        : 0
    const monthStart = new Date()
    monthStart.setDate(1)
    monthStart.setHours(0, 0, 0, 0)
    const monthlyQuestions = await prisma.aIConversation.count({
      where: { studentId: { in: allStudentIds }, timestamp: { gte: monthStart } },
    })
    const monthlyStats = await prisma.aIConversation.groupBy({
      by: ['studentId'],
      where: { studentId: { in: allStudentIds }, timestamp: { gte: monthStart } },
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
      take: 3,
    })
    const topPerformers = await Promise.all(
      monthlyStats.map(async (s) => {
        const st = await prisma.student.findUnique({
          where: { id: s.studentId },
          select: { studentName: true },
        })
        return st?.studentName ?? 'Unknown Student'
      })
    )
    res.json({
      success: true,
      stats: {
        totalStudents,
        totalClasses,
        activeStudents,
        avgEngagement,
        monthlyQuestions,
        topPerformers: topPerformers.filter((n) => n !== 'Unknown Student'),
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/dashboard/stats')
  }
})

// GET /teacher/students
router.get('/students', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const teacherClasses = await prisma.teacherClass.findMany({
      where: { teacherId: decoded.teacherId },
      select: { classId: true },
    })
    const classIds = teacherClasses.map((tc) => tc.classId)
    const students = await prisma.student.findMany({
      where: { classId: { in: classIds }, isActive: true },
      include: {
        class: { select: { id: true, className: true } },
        studentParents: { include: { parent: { select: { id: true, name: true, username: true } } } },
      },
      orderBy: { studentName: 'asc' },
    })
    const formatted = students.map((s: any) => {
      const parent = s.studentParents?.[0]?.parent
      return {
        id: s.id,
        firstName: s.studentName.split(' ')[0] || '',
        lastName: s.studentName.split(' ').slice(1).join(' ') || '',
        name: s.studentName,
        email: s.parentEmail || '',
        username: s.username || '',
        dateOfBirth: s.dateOfBirth ? s.dateOfBirth.toISOString().split('T')[0] : '',
        age: s.age,
        grade: s.grade,
        class: s.class?.className || '',
        classId: s.classId,
        parentId: parent?.id || '',
        parentName: parent?.name || s.parentName || '',
        status: s.isActive ? 'active' : 'inactive',
        enrollmentDate: s.createdAt.toISOString(),
      }
    })
    res.json({ success: true, students: formatted })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/students')
  }
})

// GET /teacher/reports
router.get('/reports', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const classId = req.query.classId as string | undefined
    const studentId = req.query.studentId as string | undefined
    const teacherClasses = await prisma.teacherClass.findMany({
      where: { teacherId: decoded.teacherId },
      select: { classId: true },
    })
    const classIds = teacherClasses.map((tc) => tc.classId)
    if (classIds.length === 0) return res.json({ success: true, reports: [] })
    const reportWhere: any = {
      student: { classId: classId ? classId : { in: classIds } },
    }
    if (studentId) reportWhere.studentId = studentId
    const reports = await prisma.monthlyReport.findMany({
      where: reportWhere,
      include: {
        student: {
          include: { class: { select: { className: true, gradeLevel: true } } },
        },
      },
      orderBy: [{ year: 'desc' }, { month: 'desc' }],
    })
    res.json({
      success: true,
      reports: reports.map((r: any) => ({
        id: r.id,
        studentId: r.studentId,
        studentName: r.student.studentName,
        className: r.student.class?.className || 'No Class Assigned',
        grade: r.student.class?.gradeLevel || 'Unknown Grade',
        month: r.month,
        year: r.year,
        strengths: JSON.parse(r.strengths || '[]'),
        struggles: JSON.parse(r.struggles || '[]'),
        topicsCovered: JSON.parse(r.topicsCovered || '[]'),
        questionsAsked: r.questionsAsked,
        engagementScore: r.engagementScore,
        aiGeneratedSummary: r.aiGeneratedSummary,
        generatedAt: r.generatedAt,
      })),
    })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/reports')
  }
})

// GET /teacher/profile
router.get('/profile', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const teacher = await prisma.teacher.findUnique({
      where: { id: decoded.teacherId },
      include: {
        school: { select: { id: true, schoolName: true } },
        teacherClasses: {
          include: { class: { select: { id: true, className: true, gradeLevel: true } } },
        },
      },
    })
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' })
    const assignedClasses = (teacher as any).teacherClasses.map((tc: any) => tc.class.className)
    const subjectIds = JSON.parse(teacher.subjects || '[]') as string[]
    let validatedSubjects: string[] = []
    if (subjectIds.length > 0) {
      const isCuid = subjectIds.every((id: string) => id.startsWith('c') && id.length >= 25)
      const subjects = await prisma.subject.findMany({
        where: isCuid
          ? { id: { in: subjectIds }, schoolId: teacher.schoolId, isActive: true }
          : { name: { in: subjectIds }, schoolId: teacher.schoolId, isActive: true },
        select: { name: true },
      })
      validatedSubjects = subjects.map((s) => s.name)
    }
    res.json({
      success: true,
      teacher: {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        subjects: validatedSubjects,
        classes: assignedClasses,
        schoolId: teacher.schoolId,
        schoolName: (teacher as any).school?.schoolName,
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/profile')
  }
})

// GET /teacher/assignments
router.get('/assignments', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const assignments = await prisma.assignment.findMany({
      where: { teacherId: decoded.teacherId },
      include: {
        class: { select: { className: true, gradeLevel: true } },
        assignmentProgress: {
          select: {
            id: true,
            status: true,
            student: { select: { studentName: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
    const formatted = assignments.map((a: any) => ({
      id: a.id,
      title: a.title,
      description: a.description,
      subject: a.subject,
      dueDate: a.dueDate.toISOString().split('T')[0],
      dueTime: a.dueTime,
      priority: a.priority,
      points: a.points,
      status: a.status,
      assignedClasses: JSON.parse(a.assignedClasses || '[]'),
      fileName: a.fileName || '',
      fileSize: a.fileSize || 0,
      fileType: a.fileType || '',
      teachingInstructions: a.teachingInstructions || '',
      submissionCount: (a.assignmentProgress || []).filter((p: any) => p.status === 'completed').length,
      totalStudents: (a.assignmentProgress || []).length,
      createdAt: a.createdAt.toISOString(),
      updatedAt: a.updatedAt.toISOString(),
    }))
    res.json({ success: true, assignments: formatted })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/assignments')
  }
})

// POST /teacher/assignments — JSON only (no file upload)
router.post('/assignments', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const body = req.body || {}
    const {
      title,
      description,
      subject,
      dueDate,
      dueTime = '23:59',
      priority = 'medium',
      points = 100,
      assignedClasses = [],
    } = body
    if (!title || !subject || !dueDate || !Array.isArray(assignedClasses) || assignedClasses.length === 0) {
      return res.status(400).json({ error: 'Title, subject, due date, and at least one class are required' })
    }
    const teacher = await prisma.teacher.findUnique({
      where: { id: decoded.teacherId },
      select: { schoolId: true },
    })
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' })
    const teacherClasses = await prisma.teacherClass.findMany({
      where: { teacherId: decoded.teacherId },
      include: { class: { select: { id: true, className: true } } },
    })
    const classMap = new Map(teacherClasses.map((tc: any) => [tc.class.className, tc.class.id]))
    const assignedClassIds: string[] = []
    for (const className of assignedClasses) {
      const classId = classMap.get(className)
      if (classId) assignedClassIds.push(classId)
      else return res.status(403).json({ error: `Classroom '${className}' not found or not assigned to you` })
    }
    const firstClassId = assignedClassIds[0]
    const assignment = await prisma.assignment.create({
      data: {
        teacherId: decoded.teacherId,
        schoolId: teacher.schoolId,
        classId: firstClassId,
        title,
        description: description || '',
        subject,
        dueDate: new Date(`${dueDate}T${dueTime}`),
        dueTime,
        priority,
        points: typeof points === 'number' ? points : 100,
        status: 'published',
        assignedClasses: JSON.stringify(assignedClasses),
      },
    })
    const students = await prisma.student.findMany({
      where: { classId: { in: assignedClassIds }, isActive: true },
      select: { id: true },
    })
    if (students.length > 0) {
      await prisma.assignmentProgress.createMany({
        data: students.map((s) => ({
          assignmentId: assignment.id,
          studentId: s.id,
          status: 'not_started',
          timeSpent: 0,
          questionsAsked: 0,
          completionPercent: 0,
        })),
      })
    }
    res.json({
      success: true,
      message: 'Assignment created successfully',
      assignment: {
        id: assignment.id,
        title: assignment.title,
        subject: assignment.subject,
        dueDate: assignment.dueDate.toISOString(),
      },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/assignments')
  }
})

// POST /teacher/assignments/remove-file
router.post('/assignments/remove-file', async (req: Request, res: Response) => {
  try {
    const decoded = requireTeacher(req, res)
    if (!decoded) return
    const { assignmentId } = req.body || {}
    const idValidation = validateId(assignmentId)
    if (!assignmentId || !idValidation.valid) {
      return res.status(400).json({ error: idValidation.error || 'Invalid assignment ID' })
    }
    const assignment = await prisma.assignment.findFirst({
      where: { id: assignmentId, teacherId: decoded.teacherId },
    })
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' })
    await prisma.assignment.update({
      where: { id: assignmentId },
      data: {
        fileName: null,
        fileSize: null,
        fileType: null,
        teachingInstructions: assignment.description || null,
      },
    })
    res.json({
      success: true,
      message: 'File removed successfully',
      assignment: { id: assignment.id, title: assignment.title },
    })
  } catch (error) {
    sendSanitizedError(res, error, 'teacher/assignments/remove-file')
  }
})

// POST /teacher/lesson-plans/upload — formData: file, title, subject, gradeLevel, teacherId (optional, from JWT)
router.post('/lesson-plans/upload', (req: Request, res: Response) => {
  uploadLessonPlan(req, res, async (err) => {
    if (err) {
      return sendSanitizedError(res, err, 'teacher/lesson-plans/upload')
    }
    try {
      const decoded = requireTeacher(req, res)
      if (!decoded) return
      const file = (req as any).file
      const title = (req.body?.title || '').trim()
      const subject = (req.body?.subject || '').trim()
      const gradeLevel = (req.body?.gradeLevel || '').trim()
      if (!title || !subject) {
        return res.status(400).json({ error: 'Title and subject are required' })
      }
      const teacher = await prisma.teacher.findUnique({
        where: { id: decoded.teacherId },
        select: { schoolId: true },
      })
      if (!teacher) return res.status(404).json({ error: 'Teacher not found' })
      const teacherClasses = await prisma.teacherClass.findMany({
        where: { teacherId: decoded.teacherId },
        include: { class: { select: { id: true, className: true, gradeLevel: true } } },
      })
      const classesToUse = gradeLevel
        ? teacherClasses.filter((tc: any) => tc.class.gradeLevel === gradeLevel || tc.class.className.includes(gradeLevel))
        : teacherClasses
      const classList = classesToUse.length > 0 ? classesToUse : teacherClasses
      const firstClass = classList[0]
      if (!firstClass) {
        return res.status(400).json({ error: 'No class assigned to this teacher' })
      }
      const assignedClassNames = classList.map((tc: any) => tc.class.className)
      const dueDate = new Date()
      dueDate.setFullYear(dueDate.getFullYear() + 1)
      const assignment = await prisma.assignment.create({
        data: {
          teacherId: decoded.teacherId,
          schoolId: teacher.schoolId,
          classId: firstClass.class.id,
          title,
          description: `Lesson plan: ${subject} - ${gradeLevel || 'All'}`,
          subject,
          dueDate,
          dueTime: '23:59',
          priority: 'medium',
          points: 100,
          status: 'published',
          assignedClasses: JSON.stringify(assignedClassNames),
          fileName: file ? file.originalname || file.filename : null,
          fileSize: file ? file.size : null,
          fileType: file ? (file.mimetype || 'application/pdf') : null,
        },
      })
      const students = await prisma.student.findMany({
        where: { classId: { in: classList.map((tc: any) => tc.class.id) }, isActive: true },
        select: { id: true },
      })
      if (students.length > 0) {
        await prisma.assignmentProgress.createMany({
          data: students.map((s) => ({
            assignmentId: assignment.id,
            studentId: s.id,
            status: 'not_started',
            timeSpent: 0,
            questionsAsked: 0,
            completionPercent: 0,
          })),
        })
      }
      res.json({
        success: true,
        message: 'Lesson plan uploaded successfully',
        assignment: {
          id: assignment.id,
          title: assignment.title,
          subject: assignment.subject,
          dueDate: assignment.dueDate.toISOString(),
        },
      })
    } catch (error) {
      sendSanitizedError(res, error, 'teacher/lesson-plans/upload')
    }
  })
})

export default router
