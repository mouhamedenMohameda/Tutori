import { Router, Request, Response } from 'express'
import { validateSecurityEnv } from '@/lib/security/secrets'
import { prisma } from '@/lib/prisma'

const router = Router()

router.get('/health', async (_req: Request, res: Response) => {
  const health = {
    status: 'ok' as string,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'unknown',
    checks: {
      environment: { status: 'ok' as string, errors: [] as string[] },
      database: { status: 'unknown' as string, connected: false, error: null as string | null },
    },
  }

  try {
    const envValidation = validateSecurityEnv()
    if (!envValidation.valid) {
      health.status = 'degraded'
      health.checks.environment.status = 'failed'
      health.checks.environment.errors = envValidation.errors
    }

    try {
      await prisma.$queryRaw`SELECT 1`
      health.checks.database.status = 'ok'
      health.checks.database.connected = true
    } catch (dbError: any) {
      health.status = 'degraded'
      health.checks.database.status = 'failed'
      health.checks.database.connected = false
      health.checks.database.error = dbError?.message || 'Database connection failed'
    }

    if (
      health.checks.environment.status === 'failed' ||
      health.checks.database.status === 'failed'
    ) {
      health.status = 'degraded'
    }

    const isProduction = process.env.NODE_ENV === 'production'
    if (health.status === 'ok') {
      return res.status(200).json(health)
    }
    const response = isProduction
      ? {
          status: health.status,
          timestamp: health.timestamp,
          message: 'Service is experiencing issues. Please contact support if problems persist.',
        }
      : health
    return res.status(503).json(response)
  } catch (error: any) {
    console.error('Health check failed:', error)
    return res.status(500).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      message: 'Health check failed',
      error: process.env.NODE_ENV === 'production' ? undefined : error?.message,
    })
  }
})

router.get('/health-check', (_req: Request, res: Response) => {
  res.json({ ok: true, timestamp: new Date().toISOString() })
})

export default router
