import { Router } from 'express'
import healthRouter from '@/routes/health'
import authRouter from '@/routes/auth'
import studentRouter from '@/routes/student'
import studentExtendedRouter from '@/routes/student-extended'
import studentV2Router from '@/routes/student-v2'
import schoolRouter from '@/routes/school'
import schoolClassesRouter from '@/routes/school-classes'
import schoolSubjectsRouter from '@/routes/school-subjects'
import schoolParentsRouter from '@/routes/school-parents'
import schoolAssignmentsRouter from '@/routes/school-assignments'
import teacherRouter from '@/routes/teacher'
import teacherExtendedRouter from '@/routes/teacher-extended'
import parentRouter from '@/routes/parent'
import miscRouter from '@/routes/misc'
import schoolsRouter from '@/routes/schools'
import registerRouter from '@/routes/register'
import adminRouter from '@/routes/admin'
import bacRouter from '@/routes/bac'
import aiRouter from '@/routes/ai'
import audioRouter from '@/routes/audio'
import voiceRouter from '@/routes/voice'
import certificateRouter from '@/routes/certificate'
import communityRouter from '@/routes/community'
import cronRouter from '@/routes/cron'
import platformAdminRouter from '@/routes/platform-admin'
import imageRouter from '@/routes/image'
import uploadRouter from '@/routes/upload'
import testRouter from '@/routes/test'
import restRouter from '@/routes/rest'

const apiRouter = Router()

apiRouter.use(healthRouter)
apiRouter.use(miscRouter)
apiRouter.use('/auth', authRouter)
apiRouter.use('/student', studentRouter)
apiRouter.use('/student', studentExtendedRouter)
apiRouter.use('/student/v2', studentV2Router)
schoolRouter.use('/classes', schoolClassesRouter)
schoolRouter.use('/subjects', schoolSubjectsRouter)
schoolRouter.use('/parents', schoolParentsRouter)
schoolRouter.use('/assignments', schoolAssignmentsRouter)
apiRouter.use('/school', schoolRouter)
apiRouter.use('/teacher', teacherRouter)
apiRouter.use('/teacher', teacherExtendedRouter)
apiRouter.use('/parent', parentRouter)
apiRouter.use('/schools', schoolsRouter)
apiRouter.use(registerRouter)
apiRouter.use('/admin', adminRouter)
apiRouter.use('/bac', bacRouter)
apiRouter.use('/ai', aiRouter)
apiRouter.use('/audio', audioRouter)
apiRouter.use('/voice', voiceRouter)
apiRouter.use('/certificate', certificateRouter)
apiRouter.use('/community', communityRouter)
apiRouter.use('/cron', cronRouter)
apiRouter.use('/platform-admin', platformAdminRouter)
apiRouter.use('/image', imageRouter)
apiRouter.use(uploadRouter)
apiRouter.use('/test', testRouter)
apiRouter.use(restRouter)

export { apiRouter }
