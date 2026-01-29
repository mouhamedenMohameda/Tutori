// Universal Authentication Utilities
// Replaces localStorage with secure cookies across all pages

// Cookie management
const getCookieValue = (name: string): string | null => {
  if (typeof document === 'undefined') return null
  
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift()
    return cookieValue ? decodeURIComponent(cookieValue) : null
  }
  return null
}

const setCookieValue = (name: string, value: string, days: number = 7) => {
  if (typeof document === 'undefined') return
  
  const expires = new Date()
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
  
  // Only use 'secure' flag in HTTPS (production), not in HTTP (localhost development)
  // Cookies with 'secure' flag don't work on localhost HTTP
  const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:'
  const secureFlag = isHttps ? 'secure;' : ''
  
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; ${secureFlag} samesite=lax`
  console.log(`🍪 Cookie set: ${name} (https: ${isHttps}, secure: ${isHttps})`)
}

const removeCookieValue = (name: string) => {
  if (typeof document === 'undefined') return
  
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

// Universal token getter - works for all user types
export const getAuthToken = (): string | null => {
  return getCookieValue('schoolToken') || 
         getCookieValue('teacherToken') || 
         getCookieValue('studentToken') || 
         getCookieValue('parentToken')
}

// Role-specific getters
export const getSchoolToken = (): string | null => getCookieValue('schoolToken')
export const getTeacherToken = (): string | null => getCookieValue('teacherToken')
export const getStudentToken = (): string | null => getCookieValue('studentToken')
export const getParentToken = (): string | null => getCookieValue('parentToken')

// User info getters
export const getSchoolId = (): string | null => getCookieValue('schoolId')
export const getSchoolName = (): string | null => getCookieValue('schoolName')
export const getTeacherId = (): string | null => getCookieValue('teacherId')
export const getStudentId = (): string | null => getCookieValue('studentId')
export const getParentId = (): string | null => getCookieValue('parentId')

// Universal auth data getter
export const getAuthData = () => {
  const token = getAuthToken()
  let role = null
  let userId = null
  
  if (getSchoolToken()) {
    role = 'school'
    userId = getSchoolId()
  } else if (getTeacherToken()) {
    role = 'teacher'
    userId = getTeacherId()
  } else if (getStudentToken()) {
    role = 'student'
    userId = getStudentId()
  } else if (getParentToken()) {
    role = 'parent'
    userId = getParentId()
  }
  
  return {
    isAuthenticated: !!token,
    token,
    role,
    userId,
    schoolId: getSchoolId(),
    schoolName: getSchoolName()
  }
}

// Authentication setters (for login pages)
export const setAuthData = (data: {
  token: string
  role: 'SCHOOL_ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT'
  schoolId?: string
  schoolName?: string
  userId?: string
}) => {
  // 🔥 CRITICAL FIX: Clear all tokens first to prevent conflicts
  clearAuth()
  
  // Set the appropriate token
  if (data.role === 'SCHOOL_ADMIN') {
    setCookieValue('schoolToken', data.token)
  } else if (data.role === 'TEACHER') {
    setCookieValue('teacherToken', data.token)
    if (data.userId) setCookieValue('teacherId', data.userId)
  } else if (data.role === 'STUDENT') {
    setCookieValue('studentToken', data.token)
    if (data.userId) setCookieValue('studentId', data.userId)
    console.log('✅ Student auth cookies set:', { hasToken: !!data.token, userId: data.userId })
  } else if (data.role === 'PARENT') {
    setCookieValue('parentToken', data.token)
    if (data.userId) setCookieValue('parentId', data.userId)
  }
  
  // Set common data
  if (data.schoolId) setCookieValue('schoolId', data.schoolId)
  if (data.schoolName) setCookieValue('schoolName', data.schoolName)
}

// Logout utility
export const clearAuth = () => {
  removeCookieValue('schoolToken')
  removeCookieValue('teacherToken')
  removeCookieValue('studentToken')
  removeCookieValue('parentToken')
  removeCookieValue('schoolId')
  removeCookieValue('schoolName')
  removeCookieValue('teacherId')
  removeCookieValue('studentId')
  removeCookieValue('parentId')
}

// Auth check utility
export const checkAuth = (requiredRole?: 'SCHOOL_ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT'): boolean => {
  const token = getAuthToken()
  
  if (!token) return false
  
  if (requiredRole) {
    switch (requiredRole) {
      case 'SCHOOL_ADMIN':
        return !!getSchoolToken()
      case 'TEACHER':
        return !!getTeacherToken()
      case 'STUDENT':
        return !!getStudentToken()
      case 'PARENT':
        return !!getParentToken()
    }
  }
  
  return true
}

// Redirect to login if not authenticated
export const requireAuth = (requiredRole?: 'SCHOOL_ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT') => {
  if (!checkAuth(requiredRole)) {
    const loginUrls = {
      'SCHOOL_ADMIN': '/school/login',
      'TEACHER': '/auth/login',
      'STUDENT': '/auth/login',
      'PARENT': '/auth/login'
    }
    
    window.location.href = requiredRole ? loginUrls[requiredRole] : '/auth/login'
    return false
  }
  return true
}

// Make authenticated API requests
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