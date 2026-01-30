// Universal Authentication Utilities (backend-safe: no DOM)
// On server, cookie/window APIs are stubbed (no document/window in Node).

const getCookieValue = (_name: string): string | null => null
const setCookieValue = (_name: string, _value: string, _days?: number) => {}
const removeCookieValue = (_name: string) => {}

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

// Redirect to login if not authenticated (backend: no redirect, just return false)
export const requireAuth = (requiredRole?: 'SCHOOL_ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT') => {
  if (!checkAuth(requiredRole)) return false
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