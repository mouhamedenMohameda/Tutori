// Zod Validation Schemas for API Endpoints
// Comprehensive input validation to prevent injection attacks

import { z } from 'zod'

/**
 * Common validation schemas
 */
export const CommonSchemas = {
  // ID validation (CUID or UUID)
  id: z.string().min(10).max(100).regex(/^[a-zA-Z0-9_-]+$/),
  
  // Student ID
  studentId: z.string().min(10).max(100).regex(/^[a-zA-Z0-9_-]+$/),
  
  // School ID
  schoolId: z.string().min(10).max(100).regex(/^[a-zA-Z0-9_-]+$/),
  
  // Teacher ID
  teacherId: z.string().min(10).max(100).regex(/^[a-zA-Z0-9_-]+$/),
  
  // Parent ID
  parentId: z.string().min(10).max(100).regex(/^[a-zA-Z0-9_-]+$/),
  
  // Assignment ID
  assignmentId: z.string().min(10).max(100).regex(/^[a-zA-Z0-9_-]+$/),
  
  // Email validation
  email: z.string().email().max(254).toLowerCase().trim(),
  
  // Username validation
  username: z.string().min(3).max(50).regex(/^[a-zA-Z0-9._-]+$/),
  
  // Password validation
  password: z.string().min(8).max(100),
  
  // Search query
  searchQuery: z.string().min(1).max(200).trim(),
  
  // Filename validation
  filename: z.string().min(1).max(255).regex(/^[a-zA-Z0-9._-]+$/),
  
  // Safe string (general text)
  safeString: z.string().min(1).max(1000).trim(),
  
  // Long text (descriptions, etc.)
  longText: z.string().min(1).max(5000).trim(),
  
  // Year validation (1-4)
  year: z.union([z.literal('1'), z.literal('2'), z.literal('3'), z.literal('4')]),
  
  // Subject validation
  subject: z.string().min(1).max(50).regex(/^[a-zA-Z0-9\s-]+$/),
  
  // Section ID
  sectionId: z.string().min(1).max(100).regex(/^[a-zA-Z0-9_-]+$/),
  
  // Classroom year
  classroomYear: z.enum(['PREMIER_COLLEGE', 'DEUXIEME_COLLEGE', 'TROISIEME_COLLEGE', 'QUATRIEME_COLLEGE']),
  
  // Grade level
  grade: z.string().min(1).max(50).regex(/^[a-zA-Z0-9\s-]+$/),
  
  // Age validation
  age: z.number().int().min(8).max(28),
  
  // Phone number
  phone: z.string().max(20).regex(/^[0-9+\s()-]+$/).optional(),
}

/**
 * Authentication schemas
 */
export const AuthSchemas = {
  login: z.object({
    email: CommonSchemas.email.optional(),
    username: CommonSchemas.username.optional(),
    password: CommonSchemas.password,
  }).refine(data => data.email || data.username, {
    message: 'Either email or username is required',
  }),
  
  register: z.object({
    schoolName: CommonSchemas.safeString,
    contactEmail: CommonSchemas.email.optional(),
    adminName: CommonSchemas.safeString,
    adminEmail: CommonSchemas.email,
    password: z.string().min(6).max(100),
    subscriptionPlan: z.enum(['TRIAL', 'BASIC_50', 'STANDARD_100', 'PREMIUM_500']).optional(),
    wilaya: z.string().max(100).optional(),
    address: z.string().max(200).optional(),
    contactPhone: CommonSchemas.phone.optional(),
  }),
  schoolLogin: z.object({
    email: CommonSchemas.email,
    password: z.string().min(1).max(100),
  }),
  studentLogin: z.object({
    username: z.string().min(1).max(100).optional(),
    email: z.string().email().max(254).optional(),
    password: z.string().min(1).max(100),
  }).refine((d) => d.email ?? d.username, { message: 'Username or email is required' }),
  
  studentRegister: z.object({
    name: CommonSchemas.safeString,
    age: CommonSchemas.age,
    schoolId: CommonSchemas.schoolId,
    grade: CommonSchemas.grade,
  }),
}

/**
 * Student API schemas
 */
export const StudentSchemas = {
  getDashboard: z.object({
    studentId: CommonSchemas.studentId,
  }),
  
  getProfile: z.object({
    studentId: CommonSchemas.studentId,
  }),
  
  updateLanguagePreference: z.object({
    studentId: CommonSchemas.studentId,
    languagePreference: z.enum(['fr', 'ar', 'en']),
  }),
  
  getCurriculum: z.object({
    year: CommonSchemas.year,
    subject: CommonSchemas.subject,
  }),
  
  getQuestions: z.object({
    year: CommonSchemas.year,
    subject: CommonSchemas.subject,
    sectionId: CommonSchemas.sectionId,
  }),
  
  chat: z.object({
    studentId: CommonSchemas.studentId,
    message: z.string().min(1).max(2000).trim(),
    subject: CommonSchemas.subject.optional(),
  }),
}

/**
 * Teacher API schemas
 */
export const TeacherSchemas = {
  createAssignment: z.object({
    title: CommonSchemas.safeString,
    description: CommonSchemas.longText,
    subject: CommonSchemas.subject,
    classId: CommonSchemas.id,
    dueDate: z.string().datetime(),
    dueTime: z.string().regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/),
    priority: z.enum(['low', 'medium', 'high']),
    points: z.number().int().min(0).max(1000).optional(),
  }),
  
  removeFile: z.object({
    assignmentId: CommonSchemas.assignmentId,
  }),
}

/**
 * School API schemas
 */
export const SchoolSchemas = {
  searchStudents: z.object({
    q: CommonSchemas.searchQuery,
  }),
  
  createStudent: z.object({
    studentName: CommonSchemas.safeString,
    studentId: z.string().min(1).max(50).regex(/^[a-zA-Z0-9_-]+$/),
    age: CommonSchemas.age,
    grade: CommonSchemas.grade,
    classId: CommonSchemas.id.optional(),
    parentName: CommonSchemas.safeString.optional(),
    parentEmail: CommonSchemas.email.optional(),
    parentPhone: CommonSchemas.phone,
  }),
}

/**
 * Community API schemas
 */
export const CommunitySchemas = {
  sendMessage: z.object({
    message: z.string().min(1).max(1000).trim(),
    messageType: z.enum(['TEXT', 'IMAGE', 'VOICE']).default('TEXT'),
    replyToMessageId: CommonSchemas.id.optional(),
  }),
  
  searchStudents: z.object({
    q: CommonSchemas.searchQuery.optional(),
  }),
}

/**
 * File upload schemas
 */
export const FileUploadSchemas = {
  uploadImage: z.object({
    studentId: CommonSchemas.studentId,
    image: z.instanceof(File).refine(
      file => file.size <= 5 * 1024 * 1024, // 5MB
      'Image must be smaller than 5MB'
    ).refine(
      file => file.type.startsWith('image/'),
      'Only image files are allowed'
    ),
  }),
  
  uploadAssignment: z.object({
    file: z.instanceof(File).refine(
      file => file.size <= 10 * 1024 * 1024, // 10MB
      'File must be smaller than 10MB'
    ).refine(
      file => ['application/pdf', 'image/jpeg', 'image/png'].includes(file.type),
      'Only PDF and image files are allowed'
    ),
  }),
}

/**
 * Helper function to validate request body
 */
export function validateRequestBody<T>(schema: z.ZodSchema<T>, data: unknown): {
  success: boolean
  data?: T
  error?: string
  errors?: z.ZodError
} {
  try {
    const validated = schema.parse(data)
    return {
      success: true,
      data: validated
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', '),
        errors: error
      }
    }
    return {
      success: false,
      error: 'Validation failed'
    }
  }
}

/**
 * Helper function to validate query parameters
 */
export function validateQueryParams<T>(schema: z.ZodSchema<T>, params: Record<string, string | string[] | undefined>): {
  success: boolean
  data?: T
  error?: string
} {
  try {
    // Convert query params to object with proper types
    const queryObj: Record<string, any> = {}
    for (const [key, value] of Object.entries(params)) {
      queryObj[key] = Array.isArray(value) ? value[0] : value
    }
    
    const validated = schema.parse(queryObj)
    return {
      success: true,
      data: validated
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
      }
    }
    return {
      success: false,
      error: 'Validation failed'
    }
  }
}

/**
 * Helper function to validate route parameters
 */
export function validateRouteParams<T>(schema: z.ZodSchema<T>, params: Record<string, string | string[] | undefined>): {
  success: boolean
  data?: T
  error?: string
} {
  try {
    // Convert route params to object
    const routeObj: Record<string, any> = {}
    for (const [key, value] of Object.entries(params)) {
      routeObj[key] = Array.isArray(value) ? value[0] : value
    }
    
    const validated = schema.parse(routeObj)
    return {
      success: true,
      data: validated
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
      }
    }
    return {
      success: false,
      error: 'Validation failed'
    }
  }
}

