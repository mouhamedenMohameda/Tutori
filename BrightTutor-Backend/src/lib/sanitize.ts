// Safe input sanitization utility
// This prevents XSS and injection attacks

import { containsSQLInjection, containsNoSQLInjection, containsCommandInjection, containsPathTraversal } from './security/injection-prevention'

export function sanitizeString(input: string): string {
  if (!input || typeof input !== 'string') {
    return ''
  }
  
  // Remove potentially dangerous characters
  let sanitized = input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .replace(/file:/gi, '') // Remove file: protocol
    .trim()
  
  // ✅ SECURITY: Remove SQL injection patterns
  if (containsSQLInjection(sanitized)) {
    sanitized = sanitized.replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT)\b)/gi, '')
  }
  
  // ✅ SECURITY: Remove NoSQL injection patterns
  if (containsNoSQLInjection(sanitized)) {
    sanitized = sanitized.replace(/\$where|\$ne|\$gt|\$lt|\$gte|\$lte|\$in|\$nin|\$regex|\$exists|\$elemMatch|\$or|\$and|\$not|\$nor/gi, '')
  }
  
  // ✅ SECURITY: Remove command injection patterns
  if (containsCommandInjection(sanitized)) {
    sanitized = sanitized.replace(/[;&|`$(){}[\]]/g, '')
  }
  
  // ✅ SECURITY: Remove path traversal patterns
  if (containsPathTraversal(sanitized)) {
    sanitized = sanitized.replace(/\.\./g, '')
  }
  
  return sanitized.slice(0, 1000) // Limit length to prevent DoS
}

export function sanitizeEmail(email: string): string {
  if (!email || typeof email !== 'string') {
    return ''
  }
  
  // Basic email validation and sanitization - be more lenient for login
  let sanitized = email.toLowerCase().trim()
  
  // ✅ SECURITY: Remove injection patterns from email
  sanitized = sanitized
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/[;&|`$(){}[\]]/g, '') // Remove command injection chars
    .replace(/\.\./g, '') // Remove path traversal
  
  // Don't return empty string for login - just clean it
  return sanitized.slice(0, 254) // RFC 5321 max email length
}

export function sanitizeUsername(username: string): string {
  if (!username || typeof username !== 'string') {
    return ''
  }
  
  // ✅ SECURITY: Remove injection patterns first
  let sanitized = username
    .replace(/[;&|`$(){}[\]]/g, '') // Remove command injection chars
    .replace(/\.\./g, '') // Remove path traversal
    .replace(/[<>]/g, '') // Remove HTML tags
  
  // Allow only alphanumeric characters, dots, and underscores
  sanitized = sanitized.replace(/[^a-zA-Z0-9._-]/g, '')
  
  return sanitized.trim().slice(0, 50) // Limit length
}

export function sanitizePassword(password: string): string {
  if (!password || typeof password !== 'string') {
    return ''
  }
  
  // Don't enforce minimum length for login - just clean it
  return password.trim().slice(0, 100) // Limit length
}

export function sanitizeTextArea(input: string): string {
  if (!input || typeof input !== 'string') {
    return ''
  }
  
  // Allow line breaks but sanitize HTML and injection patterns
  let sanitized = input
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .trim()
  
  // ✅ SECURITY: Remove SQL injection patterns
  if (containsSQLInjection(sanitized)) {
    sanitized = sanitized.replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT)\b)/gi, '')
  }
  
  // ✅ SECURITY: Remove command injection patterns (but keep line breaks)
  sanitized = sanitized.replace(/[;&|`$(){}[\]]/g, '')
  
  // ✅ SECURITY: Remove path traversal
  sanitized = sanitized.replace(/\.\./g, '')
  
  return sanitized.slice(0, 5000) // Limit length
} 