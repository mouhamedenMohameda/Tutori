/**
 * Routes restantes à porter depuis BrightTutor-AI-Platform/src/app/api/
 * Chaque handler retourne 501 avec originalPath pour faciliter le portage.
 */
import { Router, Request, Response } from 'express'

const router = Router()

function notImplemented(originalPath: string) {
  return (_req: Request, res: Response) => {
    res.status(501).json({
      error: 'Not implemented yet',
      originalPath: `BrightTutor-AI-Platform/src/app/api/${originalPath}/route.ts`,
    })
  }
}

router.post('/auth/register', notImplemented('auth/register'))

router.get('/admin/dashboard/stats', notImplemented('admin/dashboard/stats'))
router.get('/admin/dashboard/recent-activity', notImplemented('admin/dashboard/recent-activity'))
router.get('/admin/dashboard/class-performance', notImplemented('admin/dashboard/class-performance'))
router.get('/admin/students', notImplemented('admin/students'))
router.get('/admin/students/:id', notImplemented('admin/students/[id]'))
router.get('/admin/parents/search', notImplemented('admin/parents/search'))
router.get('/admin/parents/:id', notImplemented('admin/parents/[id]'))
router.get('/admin/teachers/:id', notImplemented('admin/teachers/[id]'))
router.post('/admin/migrate-database', notImplemented('admin/migrate-database'))

router.get('/school/classes', notImplemented('school/classes'))
router.post('/school/classes', notImplemented('school/classes'))
router.get('/school/students/search', notImplemented('school/students/search'))
router.post('/school/students', notImplemented('school/students'))
router.get('/school/parents', notImplemented('school/parents'))
router.post('/school/parents', notImplemented('school/parents'))
router.get('/school/parents/search', notImplemented('school/parents/search'))
router.post('/school/parents/assign-students', notImplemented('school/parents/assign-students'))
router.get('/school/subjects', notImplemented('school/subjects'))
router.post('/school/subjects', notImplemented('school/subjects'))
router.get('/school/assignments', notImplemented('school/assignments'))
router.post('/school/assignments', notImplemented('school/assignments'))

router.post('/student/register', notImplemented('student/register'))
router.get('/student/dashboard/:studentId', notImplemented('student/dashboard/[studentId]'))
router.get('/student/curriculum/:year/:subject', notImplemented('student/curriculum/[year]/[subject]'))
router.get('/student/chat-history/:studentId', notImplemented('student/chat-history/[studentId]'))
router.get('/student/ai-context/:studentId', notImplemented('student/ai-context/[studentId]'))
router.get('/student/section-progress/:studentId/:sectionId', notImplemented('student/section-progress/[studentId]/[sectionId]'))
router.get('/student/questions/:year/:subject/:sectionId', notImplemented('student/questions/[year]/[subject]/[sectionId]'))
router.get('/student/lesson-plans/:studentId', notImplemented('student/lesson-plans/[studentId]'))
router.get('/student/learning-progress/:studentId', notImplemented('student/learning-progress/[studentId]'))
router.get('/student/language-preference/:studentId', notImplemented('student/language-preference/[studentId]'))
router.put('/student/language-preference/:studentId', notImplemented('student/language-preference/[studentId]'))
router.get('/student/quiz-subjects/:studentId', notImplemented('student/quiz-subjects/[studentId]'))
router.post('/student/streak', notImplemented('student/streak'))
router.post('/student/track-session', notImplemented('student/track-session'))
router.post('/student/treasure-opened', notImplemented('student/treasure-opened'))
router.post('/student/unlock-next-section', notImplemented('student/unlock-next-section'))
router.post('/student/push-token', notImplemented('student/push-token'))
router.get('/student/v2/profile/:studentId', notImplemented('student/v2/profile/[studentId]'))
router.get('/student/v2/monthly-summary', notImplemented('student/v2/monthly-summary'))
router.get('/student/v2/memory/:studentId', notImplemented('student/v2/memory/[studentId]'))
router.get('/student/v2/chat-history/:studentId', notImplemented('student/v2/chat-history/[studentId]'))
router.get('/student/v2/assignments/:studentId', notImplemented('student/v2/assignments/[studentId]'))

router.get('/teacher/classes', notImplemented('teacher/classes'))
router.get('/teacher/available-classes', notImplemented('teacher/available-classes'))
router.get('/teacher/available-subjects', notImplemented('teacher/available-subjects'))
router.get('/teacher/curriculum', notImplemented('teacher/curriculum'))
router.get('/teacher/dashboard/stats', notImplemented('teacher/dashboard/stats'))
router.get('/teacher/students', notImplemented('teacher/students'))
router.get('/teacher/reports', notImplemented('teacher/reports'))
router.get('/teacher/profile', notImplemented('teacher/profile'))
router.get('/teacher/assignments', notImplemented('teacher/assignments'))
router.post('/teacher/assignments', notImplemented('teacher/assignments'))
router.delete('/teacher/assignments/remove-file', notImplemented('teacher/assignments/remove-file'))

router.get('/parent/profile', notImplemented('parent/profile'))
router.post('/parent/student-chat', notImplemented('parent/student-chat'))
router.post('/parent/generate-report', notImplemented('parent/generate-report'))

router.get('/bac/current', notImplemented('bac/current'))
router.post('/bac/chat', notImplemented('bac/chat'))
router.post('/bac/complete', notImplemented('bac/complete'))
router.get('/bac/progress', notImplemented('bac/progress'))
router.get('/bac/progress-all', notImplemented('bac/progress-all'))
router.get('/bac/tokens/:studentId', notImplemented('bac/tokens/[studentId]'))
router.get('/bac/part-progress/:studentId/:exerciseId/:partId', notImplemented('bac/part-progress/[studentId]/[exerciseId]/[partId]'))
router.put('/bac/part-progress/:studentId/:exerciseId/:partId', notImplemented('bac/part-progress/[studentId]/[exerciseId]/[partId]'))
router.post('/bac/generate-new-exercise', notImplemented('bac/generate-new-exercise'))
router.post('/bac/generate-questions', notImplemented('bac/generate-questions'))
router.get('/bac/get-random-stored-exercise', notImplemented('bac/get-random-stored-exercise'))
router.post('/bac/check-exercise-exists', notImplemented('bac/check-exercise-exists'))
router.post('/bac/save-exercise', notImplemented('bac/save-exercise'))
router.post('/bac/regenerate-question', notImplemented('bac/regenerate-question'))
router.get('/bac/stored-exercise', notImplemented('bac/stored-exercise'))
router.get('/bac/stored-exercises-by-chapter', notImplemented('bac/stored-exercises-by-chapter'))
router.post('/bac/course/rate', notImplemented('bac/course/rate'))
router.get('/bac/test-page', notImplemented('bac/test-page'))

router.post('/ai/generate-hint', notImplemented('ai/generate-hint'))
router.post('/ai/generate-quiz', notImplemented('ai/generate-quiz'))
router.post('/ai/generate-quiz-questions', notImplemented('ai/generate-quiz-questions'))
router.post('/ai/quiz-results', notImplemented('ai/quiz-results'))
router.post('/ai/student-context', notImplemented('ai/student-context'))
router.post('/ai/translate-math-content', notImplemented('ai/translate-math-content'))
router.post('/ai/tutor-chat', notImplemented('ai/tutor-chat'))
router.post('/ai/whisper-transcribe', notImplemented('ai/whisper-transcribe'))

router.post('/audio/speech-to-text', notImplemented('audio/speech-to-text'))
router.post('/audio/text-to-speech', notImplemented('audio/text-to-speech'))
router.get('/audio/:filename', notImplemented('audio/[filename]'))

router.post('/voice/transcribe', notImplemented('voice/transcribe'))
router.post('/voice/synthesize', notImplemented('voice/synthesize'))

router.post('/certificate/generate', notImplemented('certificate/generate'))
router.get('/certificate/test', notImplemented('certificate/test'))

router.get('/community/leaderboard/:classroomYear', notImplemented('community/leaderboard/[classroomYear]'))
router.get('/community/mark-as-read/:studentId', notImplemented('community/mark-as-read/[studentId]'))
router.get('/community/members/:classroomYear', notImplemented('community/members/[classroomYear]'))
router.get('/community/messages', notImplemented('community/messages'))
router.get('/community/messages/:classroomYear', notImplemented('community/messages/[classroomYear]'))
router.post('/community/messages', notImplemented('community/messages'))
router.post('/community/search-students', notImplemented('community/search-students'))
router.get('/community/student-classroom-year/:studentId', notImplemented('community/student-classroom-year/[studentId]'))
router.get('/community/unread-count/:studentId', notImplemented('community/unread-count/[studentId]'))

router.post('/cron/daily-notifications', notImplemented('cron/daily-notifications'))
router.post('/cron/inactive-reminders', notImplemented('cron/inactive-reminders'))

router.post('/platform-admin/auth', notImplemented('platform-admin/auth'))
router.get('/platform-admin/analytics', notImplemented('platform-admin/analytics'))
router.get('/platform-admin/analytics/debug', notImplemented('platform-admin/analytics/debug'))
router.get('/platform-admin/schools', notImplemented('platform-admin/schools'))
router.post('/platform-admin/schools/manage', notImplemented('platform-admin/schools/manage'))
router.post('/platform-admin/schools/cleanup', notImplemented('platform-admin/schools/cleanup'))
router.put('/platform-admin/schools/update-status', notImplemented('platform-admin/schools/update-status'))
router.get('/platform-admin/schools/:schoolId/details', notImplemented('platform-admin/schools/[schoolId]/details'))
router.get('/platform-admin/schools/:schoolId/student-count', notImplemented('platform-admin/schools/[schoolId]/student-count'))
router.get('/platform-admin/stats', notImplemented('platform-admin/stats'))
router.get('/platform-admin/student-created-schools', notImplemented('platform-admin/student-created-schools'))

router.post('/image/analyze', notImplemented('image/analyze'))
router.post('/upload-image', notImplemented('upload-image'))
router.post('/upload-audio', notImplemented('upload-audio'))
router.post('/test/push-notification', notImplemented('test/push-notification'))

export default router
