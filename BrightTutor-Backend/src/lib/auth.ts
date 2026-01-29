// BrightTutor Authentication Utilities
// JWT token management and password hashing

import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { JWTPayload, AdminRole } from '@/types'
import { getJWTSecret } from '@/lib/security/secrets'

// Use secure secret management (no fallbacks in production)
const getSecret = () => getJWTSecret()
const JWT_EXPIRES_IN = '7d'
const SALT_ROUNDS = 12

// ===================================
// COOKIE UTILITIES (Replace localStorage)
// ===================================

export const getCookieValue = (name: string): string | null => {
  if (typeof document === 'undefined') return null
  
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift()
    return cookieValue ? decodeURIComponent(cookieValue) : null
  }
  return null
}

export const setCookie = (name: string, value: string, days: number = 7) => {
  if (typeof document === 'undefined') return
  
  const expires = new Date()
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
  
  // ✅ FIX: Use samesite=lax instead of strict for production compatibility
  // samesite=lax allows cookies during top-level navigations and redirects (required for AWS Amplify)
  // Still prevents CSRF attacks, but more permissive than strict
  // secure flag: true if HTTPS, false for HTTP (browsers will enforce secure on HTTPS domains)
  const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:'
  const cookieParts = [
    `${name}=${encodeURIComponent(value)}`,
    `expires=${expires.toUTCString()}`,
    'path=/',
    ...(isSecure ? ['secure'] : []),
    'samesite=lax'
  ]
  document.cookie = cookieParts.join('; ')
}

export const removeCookie = (name: string) => {
  if (typeof document === 'undefined') return
  
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export const getAuthToken = (): string | null => {
  return getCookieValue('schoolToken') || 
         getCookieValue('teacherToken') || 
         getCookieValue('studentToken') || 
         getCookieValue('parentToken')
}

export const getSchoolId = (): string | null => {
  return getCookieValue('schoolId')
}

export const getSchoolName = (): string | null => {
  return getCookieValue('schoolName')
}

export const getUserId = (): string | null => {
  return getCookieValue('teacherId') || 
         getCookieValue('studentId') || 
         getCookieValue('parentId')
}

export const clearAllAuth = () => {
  removeCookie('schoolToken')
  removeCookie('teacherToken')
  removeCookie('studentToken')
  removeCookie('parentToken')
  removeCookie('schoolId')
  removeCookie('schoolName')
  removeCookie('teacherId')
  removeCookie('studentId')
  removeCookie('parentId')
}

// ===================================
// PASSWORD UTILITIES
// ===================================

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUNDS)
}

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword)
}

// ===================================
// JWT TOKEN UTILITIES
// ===================================

export const generateToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, getSecret(), {
    expiresIn: JWT_EXPIRES_IN,
    issuer: 'brightutor',
    audience: 'brightutor-users'
  })
}

export const verifyToken = (token: string): JWTPayload | null => {
  try {
    const decoded = jwt.verify(token, getSecret(), {
      issuer: 'brightutor',
      audience: 'brightutor-users'
    }) as JWTPayload
    
    return decoded
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}

export const extractUserFromRequest = (request: NextRequest): JWTPayload | null => {
  // First try Authorization header (for API calls)
  const authHeader = request.headers.get('Authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7)
    return verifyToken(token)
  }
  
  // Then try cookies (for browser requests)
  const token = request.cookies.get('authToken')?.value ||
               request.cookies.get('schoolToken')?.value ||
               request.cookies.get('teacherToken')?.value ||
               request.cookies.get('studentToken')?.value ||
               request.cookies.get('parentToken')?.value
               
  if (token) {
    return verifyToken(token)
  }
  
  return null
}

export const isAuthenticated = (request: NextRequest): boolean => {
  return extractUserFromRequest(request) !== null
}

export const hasRole = (request: NextRequest, requiredRole: AdminRole | 'PLATFORM_ADMIN'): boolean => {
  const user = extractUserFromRequest(request)
  return user?.role === requiredRole
}

// ===================================
// API UTILITIES (Database Calls)
// ===================================

export const makeAuthenticatedRequest = async (url: string, options: RequestInit = {}) => {
  const token = getAuthToken()
  
  if (!token) {
    throw new Error('No authentication token found')
  }
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...options.headers
  }
  
  return fetch(url, {
    ...options,
    headers
  })
}

// ===================================
// SESSION UTILITIES
// ===================================

export const createSession = (user: {
  id: string
  email: string
  fullName: string
  role: AdminRole
  schoolId: string
}) => {
  const payload: JWTPayload = {
    userId: user.id,
    schoolId: user.schoolId,
    role: user.role,
    email: user.email
  }
  
  const token = generateToken(payload)
  
  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      schoolId: user.schoolId
    },
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
  }
}

export const getSessionFromToken = (token: string) => {
  const payload = verifyToken(token)
  
  if (!payload) {
    return null
  }
  
  return {
    userId: payload.userId,
    schoolId: payload.schoolId,
    role: payload.role,
    email: payload.email
  }
}

export const requireAuth = (request: NextRequest, allowedRoles?: AdminRole[]): JWTPayload => {
  const user = extractUserFromRequest(request)
  
  if (!user) {
    throw new Error('Authentication required')
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role as AdminRole)) {
    throw new Error('Insufficient permissions')
  }
  
  return user
}

// ===================================
// AUTHORIZATION UTILITIES
// ===================================

export const hasPermission = (
  userRole: AdminRole,
  requiredRole: AdminRole
): boolean => {
  const roleHierarchy = {
    [AdminRole.TEACHER]: 1,
    [AdminRole.ADMIN]: 2,
    [AdminRole.SUPER_ADMIN]: 3,
    [AdminRole.PLATFORM_ADMIN]: 4
  }
  
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole]
}

export const canAccessSchool = (
  userSchoolId: string,
  targetSchoolId: string,
  userRole: AdminRole
): boolean => {
  // Super admins can access any school
  if (userRole === AdminRole.SUPER_ADMIN) return true
  
  // Other users can only access their own school
  return userSchoolId === targetSchoolId
}

export const canAccessStudent = (
  userSchoolId: string,
  studentSchoolId: string,
  userRole: AdminRole
): boolean => {
  return canAccessSchool(userSchoolId, studentSchoolId, userRole)
}

// ===================================
// MIDDLEWARE HELPERS
// ===================================

export const extractTokenFromHeader = (authHeader?: string): string | null => {
  if (!authHeader) return null
  
  const parts = authHeader.split(' ')
  if (parts.length !== 2 || parts[0] !== 'Bearer') return null
  
  return parts[1]
}

export const createAuthError = (message: string, statusCode: number = 401) => ({
  error: message,
  statusCode,
  timestamp: new Date().toISOString()
})

// ===================================
// VALIDATION UTILITIES
// ===================================

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): {
  isValid: boolean
  errors: string[]
} => {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// ===================================
// SECURITY UTILITIES
// ===================================

export const generateSecureToken = (length: number = 32): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  return result
}

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
}

// Rate limiting helper
export const createRateLimitKey = (ip: string, endpoint: string): string => {
  return `ratelimit:${ip}:${endpoint}`
} 