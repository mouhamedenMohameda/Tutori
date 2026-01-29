// Comprehensive Input Validation Utilities
// Prevents injection attacks, type confusion, and malicious input

import { z } from 'zod'

/**
 * Common validation patterns
 */
export const ValidationPatterns = {
  // CUID format (Prisma default IDs)
  CUID: /^c[a-z0-9]{24,}$/,
  
  // UUID format
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  
  // Safe alphanumeric with limited special chars
  SAFE_STRING: /^[a-zA-Z0-9\s\-_.,!?@#$%&*()]+$/,
  
  // Username format
  USERNAME: /^[a-zA-Z0-9._-]+$/,
  
  // No SQL keywords
  NO_SQL_KEYWORDS: /\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT)\b/gi,
  
  // No path traversal
  NO_PATH_TRAVERSAL: /\.\./,
  
  // No command injection
  NO_COMMAND_INJECTION: /[;&|`$(){}[\]]/,
  
  // Safe filename
  SAFE_FILENAME: /^[a-zA-Z0-9._-]+$/,
}

/**
 * Validate ID format (CUID or UUID)
 * For database IDs (CUID format), requires minimum 10 characters
 */
export function validateId(id: string): { valid: boolean; error?: string; sanitizedId?: string } {
  if (!id || typeof id !== 'string') {
    return { valid: false, error: 'ID must be a non-empty string' }
  }
  
  // Trim whitespace
  const trimmed = id.trim()
  
  if (trimmed.length < 1) {
    return { valid: false, error: 'ID cannot be empty' }
  }
  
  // For database IDs (CUID), require minimum 10 characters
  // But allow shorter IDs for:
  // - School selection (e.g., "frar_1", "csv_123") - uses underscores
  // - Section IDs (e.g., "ch1-s1", "ch2-s3") - uses dashes for curriculum sections
  // Check if it looks like a CUID (starts with 'c' and has 24+ chars) or is a short selection/section ID
  const isCUID = trimmed.startsWith('c') && trimmed.length >= 25
  // ✅ FIX: Allow dashes (-) in addition to underscores (_) for section IDs like "ch1-s1"
  // This allows curriculum section IDs while maintaining security (dashes are not in command injection pattern)
  const isShortSelectionId = trimmed.length >= 3 && trimmed.length < 10 && /^[a-z0-9_-]+$/i.test(trimmed)
  
  if (!isCUID && !isShortSelectionId && trimmed.length < 10) {
    return { valid: false, error: 'ID has invalid length' }
  }
  
  if (trimmed.length > 100) {
    return { valid: false, error: 'ID is too long (maximum 100 characters)' }
  }
  
  // Check for SQL injection attempts
  if (ValidationPatterns.NO_SQL_KEYWORDS.test(trimmed)) {
    return { valid: false, error: 'ID contains invalid characters' }
  }
  
  // Check for path traversal
  if (ValidationPatterns.NO_PATH_TRAVERSAL.test(trimmed)) {
    return { valid: false, error: 'ID contains invalid characters' }
  }
  
  // Check for command injection
  if (ValidationPatterns.NO_COMMAND_INJECTION.test(trimmed)) {
    return { valid: false, error: 'ID contains invalid characters' }
  }
  
  return { valid: true, sanitizedId: trimmed }
}

/**
 * Validate section ID (curriculum section IDs like "ch1-s1", "ch2-s3")
 * ✅ NON-AGGRESSIVE: Section IDs are predefined curriculum IDs, not user input
 * Only checks for basic security issues (SQL injection, path traversal)
 * Allows any reasonable format with letters, numbers, dashes, underscores
 */
export function validateSectionId(id: string): { valid: boolean; error?: string; sanitizedId?: string } {
  if (!id || typeof id !== 'string') {
    return { valid: false, error: 'Section ID must be a non-empty string' }
  }
  
  const trimmed = id.trim()
  
  if (trimmed.length < 1) {
    return { valid: false, error: 'Section ID cannot be empty' }
  }
  
  if (trimmed.length > 100) {
    return { valid: false, error: 'Section ID is too long (maximum 100 characters)' }
  }
  
  // Only check for obvious security issues - allow any reasonable format
  if (ValidationPatterns.NO_SQL_KEYWORDS.test(trimmed)) {
    return { valid: false, error: 'Section ID contains invalid characters' }
  }
  
  if (ValidationPatterns.NO_PATH_TRAVERSAL.test(trimmed)) {
    return { valid: false, error: 'Section ID contains invalid characters' }
  }
  
  return { valid: true, sanitizedId: trimmed }
}

/**
 * Validate classroom year (e.g., "PREMIER_COLLEGE", "DEUXIEME_COLLEGE")
 * ✅ NON-AGGRESSIVE: Classroom years are predefined values, not user input
 * Only checks that it's one of the valid classroom year constants
 */
export function validateClassroomYear(classroomYear: string): { valid: boolean; error?: string; sanitizedYear?: string } {
  if (!classroomYear || typeof classroomYear !== 'string') {
    return { valid: false, error: 'Classroom year must be a non-empty string' }
  }
  
  const trimmed = classroomYear.trim()
  
  // Valid classroom year constants
  const validYears = ['PREMIER_COLLEGE', 'DEUXIEME_COLLEGE', 'TROISIEME_COLLEGE', 'QUATRIEME_COLLEGE']
  
  if (!validYears.includes(trimmed)) {
    return { 
      valid: false, 
      error: `Invalid classroom year. Must be one of: ${validYears.join(', ')}` 
    }
  }
  
  return { valid: true, sanitizedYear: trimmed }
}

/**
 * Validate school selection ID (allows shorter IDs like "frar_1", "csv_123")
 * Used for school selection during registration
 */
export function validateSchoolSelectionId(id: string): { valid: boolean; error?: string; sanitizedId?: string } {
  if (!id || typeof id !== 'string') {
    return { valid: false, error: 'School ID must be a non-empty string' }
  }
  
  const trimmed = id.trim()
  
  if (trimmed.length < 1) {
    return { valid: false, error: 'School ID cannot be empty' }
  }
  
  // Allow shorter IDs for school selection (no minimum length requirement)
  // IDs come from predefined list (CSV or FR/AR TXT), not user input, so this is safe
  // Security checks (SQL injection, path traversal, command injection) still apply below
  
  if (trimmed.length > 100) {
    return { valid: false, error: 'School ID is too long (maximum 100 characters)' }
  }
  
  // Check for SQL injection attempts
  if (ValidationPatterns.NO_SQL_KEYWORDS.test(trimmed)) {
    return { valid: false, error: 'School ID contains invalid characters' }
  }
  
  // Check for path traversal
  if (ValidationPatterns.NO_PATH_TRAVERSAL.test(trimmed)) {
    return { valid: false, error: 'School ID contains invalid characters' }
  }
  
  // Check for command injection
  if (ValidationPatterns.NO_COMMAND_INJECTION.test(trimmed)) {
    return { valid: false, error: 'School ID contains invalid characters' }
  }
  
  return { valid: true, sanitizedId: trimmed }
}

/**
 * Validate email format and prevent injection
 */
export function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email must be a non-empty string' }
  }
  
  if (email.length > 254) {
    return { valid: false, error: 'Email is too long' }
  }
  
  // Basic email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' }
  }
  
  // Check for SQL injection
  if (ValidationPatterns.NO_SQL_KEYWORDS.test(email)) {
    return { valid: false, error: 'Email contains invalid characters' }
  }
  
  return { valid: true }
}

/**
 * Validate username format
 */
export function validateUsername(username: string): { valid: boolean; error?: string } {
  if (!username || typeof username !== 'string') {
    return { valid: false, error: 'Username must be a non-empty string' }
  }
  
  if (username.length < 3 || username.length > 50) {
    return { valid: false, error: 'Username must be between 3 and 50 characters' }
  }
  
  if (!ValidationPatterns.USERNAME.test(username)) {
    return { valid: false, error: 'Username contains invalid characters' }
  }
  
  return { valid: true }
}

/**
 * Validate search query (sanitize for database)
 */
export function validateSearchQuery(query: string): { valid: boolean; sanitized?: string; error?: string } {
  if (!query || typeof query !== 'string') {
    return { valid: false, error: 'Search query must be a non-empty string' }
  }
  
  if (query.length > 200) {
    return { valid: false, error: 'Search query is too long (max 200 characters)' }
  }
  
  // Remove SQL keywords
  let sanitized = query.replace(ValidationPatterns.NO_SQL_KEYWORDS, '')
  
  // Remove path traversal
  sanitized = sanitized.replace(ValidationPatterns.NO_PATH_TRAVERSAL, '')
  
  // Remove command injection characters
  sanitized = sanitized.replace(ValidationPatterns.NO_COMMAND_INJECTION, '')
  
  // Trim and limit length
  sanitized = sanitized.trim().slice(0, 200)
  
  if (sanitized.length === 0) {
    return { valid: false, error: 'Search query is empty after sanitization' }
  }
  
  return { valid: true, sanitized }
}

/**
 * Validate filename (prevent path traversal)
 */
export function validateFilename(filename: string): { valid: boolean; sanitized?: string; error?: string } {
  if (!filename || typeof filename !== 'string') {
    return { valid: false, error: 'Filename must be a non-empty string' }
  }
  
  if (filename.length > 255) {
    return { valid: false, error: 'Filename is too long' }
  }
  
  // Check for path traversal
  if (ValidationPatterns.NO_PATH_TRAVERSAL.test(filename)) {
    return { valid: false, error: 'Filename contains invalid characters' }
  }
  
  // Check for command injection
  if (ValidationPatterns.NO_COMMAND_INJECTION.test(filename)) {
    return { valid: false, error: 'Filename contains invalid characters' }
  }
  
  // Extract only the filename part (prevent directory traversal)
  const path = require('path')
  const basename = path.basename(filename)
  
  // Validate safe filename pattern
  if (!ValidationPatterns.SAFE_FILENAME.test(basename)) {
    return { valid: false, error: 'Filename contains invalid characters' }
  }
  
  return { valid: true, sanitized: basename }
}

/**
 * Validate string input with length limits
 */
export function validateString(
  input: string, 
  options: { minLength?: number; maxLength?: number; allowSpecialChars?: boolean } = {}
): { valid: boolean; sanitized?: string; error?: string } {
  if (typeof input !== 'string') {
    return { valid: false, error: 'Input must be a string' }
  }
  
  const { minLength = 0, maxLength = 1000, allowSpecialChars = true } = options
  
  if (input.length < minLength) {
    return { valid: false, error: `Input must be at least ${minLength} characters` }
  }
  
  if (input.length > maxLength) {
    return { valid: false, error: `Input must be at most ${maxLength} characters` }
  }
  
  // Remove SQL keywords
  let sanitized = input.replace(ValidationPatterns.NO_SQL_KEYWORDS, '')
  
  // Remove path traversal
  sanitized = sanitized.replace(ValidationPatterns.NO_PATH_TRAVERSAL, '')
  
  // Remove command injection if not allowed
  if (!allowSpecialChars) {
    sanitized = sanitized.replace(ValidationPatterns.NO_COMMAND_INJECTION, '')
  }
  
  return { valid: true, sanitized }
}

/**
 * Validate number input
 */
export function validateNumber(
  input: any,
  options: { min?: number; max?: number; integer?: boolean } = {}
): { valid: boolean; value?: number; error?: string } {
  const { min, max, integer = false } = options
  
  // Convert to number
  const num = typeof input === 'string' ? parseFloat(input) : Number(input)
  
  if (isNaN(num)) {
    return { valid: false, error: 'Input must be a valid number' }
  }
  
  if (integer && !Number.isInteger(num)) {
    return { valid: false, error: 'Input must be an integer' }
  }
  
  if (min !== undefined && num < min) {
    return { valid: false, error: `Number must be at least ${min}` }
  }
  
  if (max !== undefined && num > max) {
    return { valid: false, error: `Number must be at most ${max}` }
  }
  
  return { valid: true, value: num }
}

/**
 * Zod schemas for common validations
 */
export const CommonSchemas = {
  id: z.string().min(10).max(100).regex(/^[a-zA-Z0-9_-]+$/),
  cuid: z.string().regex(/^c[a-z0-9]{24,}$/),
  uuid: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
  email: z.string().email().max(254),
  username: z.string().min(3).max(50).regex(/^[a-zA-Z0-9._-]+$/),
  password: z.string().min(8).max(100),
  searchQuery: z.string().min(1).max(200),
  filename: z.string().min(1).max(255).regex(/^[a-zA-Z0-9._-]+$/),
  safeString: z.string().min(1).max(1000),
}

/**
 * Validate and sanitize database input (wrapper for sanitizeString)
 */
export function validateDatabaseInput(input: string, fieldName: string): string {
  if (typeof input !== 'string') {
    throw new Error(`${fieldName} must be a string`)
  }
  
  const { sanitizeString } = require('../sanitize')
  const sanitized = sanitizeString(input)
  
  if (!sanitized || sanitized.length === 0) {
    throw new Error(`${fieldName} cannot be empty after sanitization`)
  }
  
  return sanitized
}

