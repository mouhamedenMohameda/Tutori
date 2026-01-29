import type { Response } from 'express'

/**
 * Error Sanitization Utility
 * 
 * CRITICAL SECURITY: This utility ensures that NO technical error details,
 * stack traces, function names, file paths, database schema, or internal
 * implementation details are EVER exposed to users.
 * 
 * All errors are sanitized to show only generic, user-friendly messages.
 * Full error details are logged server-side only for debugging.
 * 
 * IMPORTANT: This is critical for production security. Never expose:
 * - Stack traces
 * - Error messages with internal details
 * - Function names
 * - File paths
 * - Database table/column names
 * - API keys or secrets
 * - Technology stack details
 */

/**
 * Sanitized error response structure
 */
export interface SanitizedErrorResponse {
  error: string
  message?: string
  code?: string
  // NEVER include: stack, details, error.message, error.stack, etc.
}

/**
 * Error types that require different handling
 */
enum ErrorType {
  DATABASE = 'DATABASE',
  AUTHENTICATION = 'AUTHENTICATION',
  VALIDATION = 'VALIDATION',
  NETWORK = 'NETWORK',
  RATE_LIMIT = 'RATE_LIMIT',
  NOT_FOUND = 'NOT_FOUND',
  PERMISSION = 'PERMISSION',
  GENERIC = 'GENERIC'
}

/**
 * Detect error type without exposing details
 */
function detectErrorType(error: unknown): ErrorType {
  if (!(error instanceof Error)) {
    return ErrorType.GENERIC
  }

  const errorMessage = error.message.toLowerCase()
  const errorName = error.name.toLowerCase()
  const errorString = String(error).toLowerCase()

  // Database errors (Prisma, PostgreSQL, etc.)
  if (
    errorName.includes('prisma') ||
    errorName.includes('database') ||
    errorMessage.includes('database') ||
    errorMessage.includes('connection') ||
    errorMessage.includes('query') ||
    errorMessage.includes('relation') ||
    errorMessage.includes('table') ||
    errorMessage.includes('column') ||
    errorMessage.includes('constraint') ||
    errorString.includes('p1001') || // Prisma connection error
    errorString.includes('p2024') || // Prisma timeout
    errorString.includes('p2002') || // Prisma unique constraint
    errorString.includes('p2025')    // Prisma record not found
  ) {
    return ErrorType.DATABASE
  }

  // Authentication errors
  if (
    errorMessage.includes('unauthorized') ||
    errorMessage.includes('authentication') ||
    errorMessage.includes('token') ||
    errorMessage.includes('jwt') ||
    errorMessage.includes('session') ||
    errorMessage.includes('login') ||
    errorName.includes('unauthorized') ||
    errorName.includes('forbidden')
  ) {
    return ErrorType.AUTHENTICATION
  }

  // Validation errors
  if (
    errorMessage.includes('validation') ||
    errorMessage.includes('invalid') ||
    errorMessage.includes('required') ||
    errorMessage.includes('missing')
  ) {
    return ErrorType.VALIDATION
  }

  // Network errors
  if (
    errorMessage.includes('network') ||
    errorMessage.includes('fetch') ||
    errorMessage.includes('timeout') ||
    errorMessage.includes('connection') ||
    errorMessage.includes('econnrefused') ||
    errorMessage.includes('enotfound')
  ) {
    return ErrorType.NETWORK
  }

  // Rate limit errors
  if (
    errorMessage.includes('rate limit') ||
    errorMessage.includes('too many requests') ||
    errorMessage.includes('429')
  ) {
    return ErrorType.RATE_LIMIT
  }

  // Not found errors
  if (
    errorMessage.includes('not found') ||
    errorMessage.includes('404') ||
    errorMessage.includes('does not exist')
  ) {
    return ErrorType.NOT_FOUND
  }

  // Permission errors
  if (
    errorMessage.includes('permission') ||
    errorMessage.includes('forbidden') ||
    errorMessage.includes('access denied') ||
    errorName.includes('forbidden')
  ) {
    return ErrorType.PERMISSION
  }

  return ErrorType.GENERIC
}

/**
 * Get user-friendly error message in French
 * NEVER exposes technical details
 */
function getUserFriendlyMessage(errorType: ErrorType): string {
  switch (errorType) {
    case ErrorType.DATABASE:
      return 'Le service est temporairement indisponible. Veuillez réessayer dans quelques instants.'
    
    case ErrorType.AUTHENTICATION:
      return 'Votre session a expiré. Veuillez vous reconnecter.'
    
    case ErrorType.VALIDATION:
      return 'Les données fournies sont invalides. Veuillez vérifier et réessayer.'
    
    case ErrorType.NETWORK:
      return 'Problème de connexion. Vérifiez votre connexion internet et réessayez.'
    
    case ErrorType.RATE_LIMIT:
      return 'Trop de requêtes. Veuillez patienter quelques instants avant de réessayer.'
    
    case ErrorType.NOT_FOUND:
      return 'La ressource demandée est introuvable.'
    
    case ErrorType.PERMISSION:
      return 'Vous n\'avez pas l\'autorisation d\'effectuer cette action.'
    
    case ErrorType.GENERIC:
    default:
      return 'Une erreur s\'est produite. Veuillez réessayer.'
  }
}

/**
 * Get error code for client-side handling (without exposing details)
 */
function getErrorCode(errorType: ErrorType): string {
  switch (errorType) {
    case ErrorType.DATABASE:
      return 'SERVICE_UNAVAILABLE'
    case ErrorType.AUTHENTICATION:
      return 'AUTH_REQUIRED'
    case ErrorType.VALIDATION:
      return 'VALIDATION_ERROR'
    case ErrorType.NETWORK:
      return 'NETWORK_ERROR'
    case ErrorType.RATE_LIMIT:
      return 'RATE_LIMIT_EXCEEDED'
    case ErrorType.NOT_FOUND:
      return 'NOT_FOUND'
    case ErrorType.PERMISSION:
      return 'PERMISSION_DENIED'
    case ErrorType.GENERIC:
    default:
      return 'INTERNAL_ERROR'
  }
}

/**
 * Log full error details server-side only
 * This helps with debugging without exposing information to users
 */
function logErrorForDebugging(error: unknown, context?: string): void {
  const timestamp = new Date().toISOString()
  const contextStr = context ? ` [${context}]` : ''
  
  if (error instanceof Error) {
    console.error(`❌ ERROR${contextStr} [${timestamp}]:`, {
      name: error.name,
      message: error.message,
      stack: error.stack,
      // Include any additional error properties
      ...(error as any).code && { code: (error as any).code },
      ...(error as any).statusCode && { statusCode: (error as any).statusCode }
    })
  } else {
    console.error(`❌ ERROR${contextStr} [${timestamp}]:`, error)
  }
}

/**
 * Sanitize error and return safe response for users
 * 
 * @param error - The error object (can be Error, string, or any)
 * @param context - Optional context for logging (e.g., "API route name")
 * @param statusCode - Optional HTTP status code (default: 500)
 * @returns Sanitized error response that's safe to send to users
 * 
 * CRITICAL: This function NEVER exposes:
 * - Stack traces
 * - Error messages with internal details
 * - Function names
 * - File paths
 * - Database schema information
 * - Any technical implementation details
 */
export function sanitizeError(
  error: unknown,
  context?: string,
  statusCode: number = 500
): { response: SanitizedErrorResponse; statusCode: number } {
  // Log full error details server-side for debugging
  logErrorForDebugging(error, context)

  // Detect error type without exposing details
  const errorType = detectErrorType(error)

  // Get user-friendly message (never exposes technical details)
  const userMessage = getUserFriendlyMessage(errorType)
  const errorCode = getErrorCode(errorType)

  // Determine appropriate status code
  let httpStatus = statusCode
  if (statusCode === 500) {
    switch (errorType) {
      case ErrorType.AUTHENTICATION:
        httpStatus = 401
        break
      case ErrorType.PERMISSION:
        httpStatus = 403
        break
      case ErrorType.NOT_FOUND:
        httpStatus = 404
        break
      case ErrorType.VALIDATION:
        httpStatus = 400
        break
      case ErrorType.RATE_LIMIT:
        httpStatus = 429
        break
      case ErrorType.DATABASE:
      case ErrorType.NETWORK:
        httpStatus = 503
        break
      default:
        httpStatus = 500
    }
  }

  // Return sanitized response (NO technical details)
  return {
    response: {
      error: userMessage,
      code: errorCode
    },
    statusCode: httpStatus
  }
}

/**
 * Send sanitized error via Express response
 * Use in API routes: sendSanitizedError(res, error, 'route-name')
 */
export function sendSanitizedError(
  res: Response,
  error: unknown,
  context?: string,
  statusCode?: number
): void {
  const { response, statusCode: httpStatus } = sanitizeError(error, context, statusCode)
  res.status(httpStatus).json(response)
}

/**
 * Check if an error is a database connection error
 * (Used for special handling, but still sanitized)
 */
export function isDatabaseError(error: unknown): boolean {
  return detectErrorType(error) === ErrorType.DATABASE
}

/**
 * Check if an error is an authentication error
 */
export function isAuthenticationError(error: unknown): boolean {
  return detectErrorType(error) === ErrorType.AUTHENTICATION
}
