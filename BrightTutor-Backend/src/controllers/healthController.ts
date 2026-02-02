import { Request, Response } from 'express'
import { getHealth } from '@/services/healthService'

export async function healthHandler(_req: Request, res: Response): Promise<void> {
  try {
    const health = await getHealth()
    const isProduction = process.env.NODE_ENV === 'production'

    if (health.status === 'ok') {
      res.status(200).json(health)
      return
    }

    const response = isProduction
      ? {
          status: health.status,
          timestamp: health.timestamp,
          message:
            'Service is experiencing issues. Please contact support if problems persist.',
        }
      : health
    res.status(503).json(response)
  } catch (error: unknown) {
    console.error('Health check failed:', error)
    res.status(500).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      message: 'Health check failed',
      error:
        process.env.NODE_ENV === 'production'
          ? undefined
          : error instanceof Error
            ? error.message
            : undefined,
    })
  }
}

export function healthCheckSimple(_req: Request, res: Response): void {
  res.json({ ok: true, timestamp: new Date().toISOString() })
}
