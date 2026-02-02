import { validateSecurityEnv } from '@/lib/security/secrets'
import { checkDatabaseConnection } from '@/config/data-source'

export type HealthCheckResult = {
  status: 'ok' | 'degraded' | 'error'
  timestamp: string
  environment: string
  checks: {
    environment: { status: string; errors: string[] }
    database: { status: string; connected: boolean; error: string | null }
  }
}

export async function getHealth(): Promise<HealthCheckResult> {
  const health: HealthCheckResult = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'unknown',
    checks: {
      environment: { status: 'ok', errors: [] },
      database: { status: 'unknown', connected: false, error: null },
    },
  }

  const envValidation = validateSecurityEnv()
  if (!envValidation.valid) {
    health.status = 'degraded'
    health.checks.environment.status = 'failed'
    health.checks.environment.errors = envValidation.errors
  }

  try {
    const connected = await checkDatabaseConnection()
    health.checks.database.status = connected ? 'ok' : 'failed'
    health.checks.database.connected = connected
    if (!connected) {
      health.checks.database.error = 'Connection check returned false'
    }
  } catch (dbError: unknown) {
    health.status = 'degraded'
    health.checks.database.status = 'failed'
    health.checks.database.connected = false
    health.checks.database.error =
      dbError instanceof Error ? dbError.message : 'Database connection failed'
  }

  if (
    health.checks.environment.status === 'failed' ||
    health.checks.database.status === 'failed'
  ) {
    health.status = 'degraded'
  }

  return health
}
