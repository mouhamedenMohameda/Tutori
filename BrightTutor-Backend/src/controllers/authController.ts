import { Request, Response } from 'express'
import { AuthSchemas } from '@/lib/security/schemas'
import { containsSQLInjection } from '@/lib/security/injection-prevention'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { registerSchool } from '@/services/authService'

export async function registerHandler(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body ?? {}
    const parsed = AuthSchemas.register.safeParse(body)
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors
      const msg = Object.values(first)[0]?.[0] ?? parsed.error.message
      res.status(400).json({ error: String(msg) })
      return
    }

    const data = parsed.data
    if (containsSQLInjection(data.adminEmail) || containsSQLInjection(data.schoolName)) {
      res.status(400).json({ error: 'Invalid input detected' })
      return
    }

    const result = await registerSchool({
      schoolName: data.schoolName,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone,
      wilaya: data.wilaya,
      address: data.address,
      adminName: data.adminName,
      adminEmail: data.adminEmail,
      password: data.password,
      subscriptionPlan: data.subscriptionPlan,
    })

    if (!result.success && result.conflict) {
      res.status(409).json({ error: result.error })
      return
    }

    res.json(result)
  } catch (error) {
    sendSanitizedError(res, error, 'auth/register')
  }
}

export function loginGetHandler(_req: Request, res: Response): void {
  res.status(400).json({
    error: 'Please use the login page to select your account type',
    redirect: '/auth/login',
  })
}

export function loginPostHandler(_req: Request, res: Response): void {
  res.status(400).json({
    error: 'Please use the login page to select your account type',
    redirect: '/auth/login',
  })
}
