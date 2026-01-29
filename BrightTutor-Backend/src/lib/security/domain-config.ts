// Domain-Specific Security Configuration
// Handles security settings for different domains (localhost vs tutori.io)

/**
 * Get allowed origins based on environment
 */
export function getAllowedOrigins(): string[] {
  const allowedOrigins: string[] = []
  
  // Always allow same origin
  allowedOrigins.push('same-origin')
  
  // Development origins
  if (process.env.NODE_ENV === 'development') {
    allowedOrigins.push(
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:3001',
      'http://127.0.0.1:3001'
    )
  }
  
  // Production origins
  const productionDomains = [
    'https://tutori.io',
    'https://www.tutori.io',
    'https://app.tutori.io',
    'https://brighttutor.onrender.com', // Legacy domain
  ]
  
  // Add custom domain from environment if set
  if (process.env.ALLOWED_ORIGINS) {
    const customOrigins = process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
    allowedOrigins.push(...customOrigins)
  } else {
    // Default production domains
    allowedOrigins.push(...productionDomains)
  }
  
  return allowedOrigins
}

/**
 * Check if origin is allowed
 */
export function isOriginAllowed(origin: string | null): boolean {
  if (!origin) {
    // Same-origin requests (no Origin header)
    return true
  }
  
  const allowedOrigins = getAllowedOrigins()
  
  // Check exact match
  if (allowedOrigins.includes(origin)) {
    return true
  }
  
  // Check if it's a subdomain of tutori.io
  if (origin.endsWith('.tutori.io') || origin === 'tutori.io') {
    return origin.startsWith('https://')
  }
  
  return false
}

/**
 * Get CORS configuration
 */
export function getCORSConfig() {
  const allowedOrigins = getAllowedOrigins()
  
  return {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      if (!origin || isOriginAllowed(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token', 'X-Startup-Secret'],
    exposedHeaders: ['X-Total-Count', 'X-RateLimit-Remaining'],
    maxAge: 86400, // 24 hours
  }
}

/**
 * Get security headers based on domain
 */
export function getSecurityHeaders(origin?: string | null): Record<string, string> {
  const isProduction = process.env.NODE_ENV === 'production'
  const isTutoriDomain = origin?.includes('tutori.io') || process.env.NEXT_PUBLIC_DOMAIN?.includes('tutori.io')
  
  const headers: Record<string, string> = {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'microphone=*, camera=*',
    'X-Permitted-Cross-Domain-Policies': 'none',
  }
  
  // HSTS only for production tutori.io domain
  if (isProduction && isTutoriDomain) {
    headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload'
  }
  
  // Content Security Policy
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.openai.com https://generativelanguage.googleapis.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ]
  
  // Allow tutori.io domains in CSP
  if (isTutoriDomain) {
    cspDirectives.push("connect-src 'self' https://*.tutori.io https://api.openai.com https://generativelanguage.googleapis.com")
  }
  
  headers['Content-Security-Policy'] = cspDirectives.join('; ')
  
  return headers
}

/**
 * Validate request origin
 */
export function validateRequestOrigin(request: Request): { valid: boolean; error?: string } {
  const origin = request.headers.get('origin')
  const host = request.headers.get('host')
  
  // Same-origin requests are always valid
  if (!origin) {
    return { valid: true }
  }
  
  // Check if origin is allowed
  if (!isOriginAllowed(origin)) {
    return {
      valid: false,
      error: 'Origin not allowed'
    }
  }
  
  // Additional check: ensure host matches origin in production
  if (process.env.NODE_ENV === 'production') {
    const originHost = new URL(origin).hostname
    const requestHost = host?.split(':')[0] // Remove port if present
    
    // Allow if host matches or is a subdomain
    if (requestHost && originHost !== requestHost && !originHost.endsWith(`.${requestHost}`)) {
      return {
        valid: false,
        error: 'Host-Origin mismatch'
      }
    }
  }
  
  return { valid: true }
}

