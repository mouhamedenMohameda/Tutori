import { Router } from 'express'
import healthRouter from '@/routes/health'
import authRouter from '@/routes/auth'
import studentRouter from '@/routes/student'
import schoolRouter from '@/routes/school'
import teacherRouter from '@/routes/teacher'
import parentRouter from '@/routes/parent'
import miscRouter from '@/routes/misc'
import schoolsRouter from '@/routes/schools'
import registerRouter from '@/routes/register'
import adminRouter from '@/routes/admin'
import restRouter from '@/routes/rest'

const apiRouter = Router()

apiRouter.use(healthRouter)
apiRouter.use(miscRouter)
apiRouter.use('/auth', authRouter)
apiRouter.use('/student', studentRouter)
apiRouter.use('/school', schoolRouter)
apiRouter.use('/teacher', teacherRouter)
apiRouter.use('/parent', parentRouter)
apiRouter.use('/schools', schoolsRouter)
apiRouter.use(registerRouter)
apiRouter.use('/admin', adminRouter)
apiRouter.use(restRouter)

export { apiRouter }
