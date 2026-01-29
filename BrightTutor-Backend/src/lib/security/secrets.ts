import crypto from 'crypto'

declare global {
  var __jwtTemporarySecret: string | undefined
}

export function generateSecureSecret(length: number = 32): string {
  return crypto.randomBytes(length).toString('base64')
}

export function getJWTSecret(): string {
  const secret = process.env.JWT_SECRET

  if (!secret) {
    const error = 'JWT_SECRET environment variable is not set!'
    console.error('SECURITY ERROR:', error)
    const isProductionLike =
      process.env.NODE_ENV === 'production' ||
      process.env.AWS_EXECUTION_ENV !== undefined ||
      process.env.VERCEL !== undefined

    if (isProductionLike) {
      throw new Error(error)
    }
    if (!globalThis.__jwtTemporarySecret) {
      console.warn('WARNING: Using temporary JWT secret. Set JWT_SECRET in .env for production!')
      globalThis.__jwtTemporarySecret = generateSecureSecret(32)
    }
    return globalThis.__jwtTemporarySecret
  }

  if (secret.length < 32) {
    console.warn('WARNING: JWT_SECRET is too short. Should be at least 32 characters.')
  }

  const weakSecrets = [
    'your-jwt-secret-change-in-production',
    'your-super-secure-jwt-secret',
    'fallback-secret-key',
    'secret',
    'password',
    '123456',
  ]
  const secretLower = secret.toLowerCase().trim()
  if (weakSecrets.some((weak) => secretLower === weak.toLowerCase().trim())) {
    console.error('SECURITY ERROR: JWT_SECRET is a weak/default secret!')
    if (process.env.NODE_ENV === 'production') {
      throw new Error('JWT_SECRET must be changed from default value in production!')
    }
  }

  return secret
}

export function validateSecurityEnv(): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  if (!process.env.JWT_SECRET) {
    errors.push('JWT_SECRET is not set')
  } else if (process.env.JWT_SECRET.length < 32) {
    errors.push('JWT_SECRET is too short (minimum 32 characters)')
  }
  if (!process.env.DATABASE_URL) {
    errors.push('DATABASE_URL is not set')
  }
  return { valid: errors.length === 0, errors }
}
