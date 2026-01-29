// Platform Admin Secret Management
// Provides secure secret validation for hidden platform-admin route

import crypto from 'crypto'

/**
 * Get platform admin secret from environment variable
 * Generates a secure random secret if not set (for development only)
 */
export function getPlatformAdminSecret(): string {
  const secret = process.env.PLATFORM_ADMIN_SECRET
  
  if (!secret) {
    const error = 'PLATFORM_ADMIN_SECRET environment variable is not set! This is required for platform admin access.'
    console.error('🚨 SECURITY ERROR:', error)
    
    // In production, throw error to prevent insecure operation
    if (process.env.NODE_ENV === 'production') {
      throw new Error(error)
    }
    
    // In development, generate a temporary secret and log it
    console.warn('⚠️ WARNING: Using temporary platform admin secret. Set PLATFORM_ADMIN_SECRET in .env.local!')
    const tempSecret = generateSecureSecret(32)
    console.log('🔑 Generated temporary secret (development only):', tempSecret)
    console.log('🔑 Access URL: /platform-admin/' + tempSecret)
    
    return tempSecret
  }
  
  // Validate secret strength
  if (secret.length < 16) {
    console.warn('⚠️ WARNING: PLATFORM_ADMIN_SECRET is too short. Should be at least 16 characters.')
  }
  
  // Check for common weak secrets
  const weakSecrets = [
    'admin',
    'secret',
    'password',
    '123456',
    'platform-admin',
    'admin-secret'
  ]
  
  if (weakSecrets.some(weak => secret.toLowerCase().includes(weak.toLowerCase()))) {
    console.error('🚨 SECURITY ERROR: PLATFORM_ADMIN_SECRET appears to be a weak secret!')
    if (process.env.NODE_ENV === 'production') {
      throw new Error('PLATFORM_ADMIN_SECRET must be a strong, random secret in production!')
    }
  }
  
  return secret
}

/**
 * Generate a cryptographically secure random secret
 * @param length - Length of the secret in bytes (default: 32)
 * @returns Base64 encoded secret
 */
export function generateSecureSecret(length: number = 32): string {
  return crypto.randomBytes(length).toString('base64')
}

/**
 * Validate if provided secret matches the platform admin secret
 * Uses constant-time comparison to prevent timing attacks
 */
export function validatePlatformAdminSecret(providedSecret: string): boolean {
  if (!providedSecret || typeof providedSecret !== 'string') {
    return false
  }
  
  const expectedSecret = getPlatformAdminSecret()
  
  // Ensure both buffers are the same length for constant-time comparison
  // This prevents timing attacks
  const providedBuffer = Buffer.from(providedSecret)
  const expectedBuffer = Buffer.from(expectedSecret)
  
  // If lengths don't match, they're definitely not equal
  if (providedBuffer.length !== expectedBuffer.length) {
    // Still do a comparison to maintain constant time
    crypto.timingSafeEqual(
      Buffer.alloc(expectedBuffer.length),
      expectedBuffer
    )
    return false
  }
  
  // Use constant-time comparison to prevent timing attacks
  return crypto.timingSafeEqual(providedBuffer, expectedBuffer)
}

/**
 * Sanitize secret input to prevent injection
 */
export function sanitizeSecretInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return ''
  }
  
  // Remove any potentially dangerous characters
  // Only allow alphanumeric, hyphens, underscores, and base64 characters
  return input
    .replace(/[^a-zA-Z0-9_\-+/=]/g, '')
    .trim()
    .slice(0, 100) // Limit length
}

