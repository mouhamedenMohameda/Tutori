// CSRF Protection
// Prevents Cross-Site Request Forgery attacks

import crypto from 'crypto'

/**
 * Generate CSRF token
 */
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

/**
 * Validate CSRF token
 */
export function validateCSRFToken(token: string, sessionToken: string): boolean {
  if (!token || !sessionToken) {
    return false
  }
  
  // Use constant-time comparison to prevent timing attacks
  return crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(sessionToken)
  )
}

/**
 * Get CSRF token from request
 */
export function getCSRFTokenFromRequest(request: Request): string | null {
  // Try header first
  const headerToken = request.headers.get('X-CSRF-Token')
  if (headerToken) {
    return headerToken
  }
  
  // Try form data
  // Note: This would need to be called after parsing form data
  return null
}

/**
 * CSRF protection middleware
 * For state-changing operations (POST, PUT, DELETE, PATCH)
 */
export async function requireCSRF(
  request: Request,
  sessionToken: string | null
): Promise<{ success: boolean; error?: string }> {
  // Only protect state-changing methods
  const method = request.method
  if (!['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
    return { success: true }
  }
  
  // Skip CSRF for API routes that use Bearer tokens (they're protected by auth)
  const authHeader = request.headers.get('Authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return { success: true }
  }
  
  // Require CSRF token for cookie-based auth
  if (!sessionToken) {
    return {
      success: false,
      error: 'CSRF token required'
    }
  }
  
  const token = getCSRFTokenFromRequest(request)
  if (!token) {
    return {
      success: false,
      error: 'CSRF token missing'
    }
  }
  
  if (!validateCSRFToken(token, sessionToken)) {
    return {
      success: false,
      error: 'Invalid CSRF token'
    }
  }
  
  return { success: true }
}

