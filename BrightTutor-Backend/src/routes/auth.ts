import { Router, Request, Response } from 'express'

const router = Router()

router.get('/login', (_req: Request, res: Response) => {
  res.status(400).json({
    error: 'Please use the login page to select your account type',
    redirect: '/auth/login',
  })
})

router.post('/login', (_req: Request, res: Response) => {
  res.status(400).json({
    error: 'Please use the login page to select your account type',
    redirect: '/auth/login',
  })
})

export default router
