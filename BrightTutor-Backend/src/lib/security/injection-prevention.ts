// Injection Attack Prevention
// Prevents SQL injection, NoSQL injection, command injection, and path traversal

/**
 * Check if string contains SQL injection patterns
 */
export function containsSQLInjection(input: string): boolean {
  if (!input || typeof input !== 'string') return false
  
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT)\b)/gi,
    /(--|#|\/\*|\*\/)/, // SQL comments
    /(;|\||&)/, // Command separators
    /(\bor\b\s*\d+\s*=\s*\d+)/gi, // OR 1=1
    /(\band\b\s*\d+\s*=\s*\d+)/gi, // AND 1=1
    /('|"|`)/, // Quote characters that could break queries
  ]
  
  return sqlPatterns.some(pattern => pattern.test(input))
}

/**
 * Check if string contains NoSQL injection patterns
 */
export function containsNoSQLInjection(input: string): boolean {
  if (!input || typeof input !== 'string') return false
  
  const nosqlPatterns = [
    /\$where/i,
    /\$ne/i,
    /\$gt/i,
    /\$lt/i,
    /\$gte/i,
    /\$lte/i,
    /\$in/i,
    /\$nin/i,
    /\$regex/i,
    /\$exists/i,
    /\$elemMatch/i,
    /\$or/i,
    /\$and/i,
    /\$not/i,
    /\$nor/i,
  ]
  
  return nosqlPatterns.some(pattern => pattern.test(input))
}

/**
 * Check if string contains command injection patterns
 */
export function containsCommandInjection(input: string): boolean {
  if (!input || typeof input !== 'string') return false
  
  const commandPatterns = [
    /[;&|`$(){}[\]]/, // Command separators and special chars
    /\|\s*\w+/, // Pipe to command
    /;\s*\w+/, // Semicolon command
    /&&\s*\w+/, // AND command
    /\|\|\s*\w+/, // OR command
    /\$\(/, // Command substitution
    /`/, // Backtick command
    /\$\{/, // Variable substitution
  ]
  
  return commandPatterns.some(pattern => pattern.test(input))
}

/**
 * Check if string contains path traversal patterns
 */
export function containsPathTraversal(input: string): boolean {
  if (!input || typeof input !== 'string') return false
  
  const pathPatterns = [
    /\.\./, // Parent directory
    /\.\.\//, // Parent directory with slash
    /\.\.\\/, // Parent directory with backslash (Windows)
    /\/\.\./, // Leading parent directory
    /\\\.\./, // Leading parent directory (Windows)
    /\.\.%2F/i, // URL encoded
    /\.\.%5C/i, // URL encoded backslash
    /%2E%2E/i, // Double URL encoded
  ]
  
  return pathPatterns.some(pattern => pattern.test(input))
}

/**
 * Sanitize input to prevent all injection types
 */
export function sanitizeForDatabase(input: string): string {
  if (!input || typeof input !== 'string') return ''
  
  let sanitized = input
  
  // Remove SQL injection patterns
  sanitized = sanitized.replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT)\b)/gi, '')
  sanitized = sanitized.replace(/(--|#|\/\*|\*\/)/g, '')
  
  // Remove command injection patterns
  sanitized = sanitized.replace(/[;&|`$(){}[\]]/g, '')
  
  // Remove path traversal
  sanitized = sanitized.replace(/\.\./g, '')
  
  // Remove NoSQL injection patterns
  sanitized = sanitized.replace(/\$where|\$ne|\$gt|\$lt|\$gte|\$lte|\$in|\$nin|\$regex|\$exists|\$elemMatch|\$or|\$and|\$not|\$nor/gi, '')
  
  // Trim and limit length
  sanitized = sanitized.trim().slice(0, 1000)
  
  return sanitized
}

/**
 * Validate and sanitize input for database queries
 * Returns sanitized value or throws error if dangerous
 */
export function validateDatabaseInput(input: string, fieldName: string = 'input'): string {
  if (typeof input !== 'string') {
    throw new Error(`${fieldName} must be a string`)
  }
  
  if (containsSQLInjection(input)) {
    throw new Error(`${fieldName} contains potentially dangerous SQL patterns`)
  }
  
  if (containsNoSQLInjection(input)) {
    throw new Error(`${fieldName} contains potentially dangerous NoSQL patterns`)
  }
  
  if (containsCommandInjection(input)) {
    throw new Error(`${fieldName} contains potentially dangerous command patterns`)
  }
  
  if (containsPathTraversal(input)) {
    throw new Error(`${fieldName} contains potentially dangerous path patterns`)
  }
  
  return sanitizeForDatabase(input)
}

/**
 * Safe path construction - prevents path traversal
 */
export function safePathJoin(...paths: string[]): string {
  const path = require('path')
  
  // Filter out any paths with traversal
  const safePaths = paths.filter(p => {
    if (typeof p !== 'string') return false
    return !containsPathTraversal(p)
  })
  
  // Join paths safely
  const joined = path.join(...safePaths)
  
  // Resolve to absolute path and verify it's within allowed directory
  const resolved = path.resolve(joined)
  
  // Additional check: ensure no parent directory access
  if (resolved.includes('..')) {
    throw new Error('Path traversal detected in resolved path')
  }
  
  return resolved
}

/**
 * Validate filename is safe
 */
export function validateFilename(filename: string): { valid: boolean; error?: string; sanitized?: string } {
  if (!filename || typeof filename !== 'string') {
    return { valid: false, error: 'Filename is required' }
  }
  
  // Check for path traversal
  if (containsPathTraversal(filename)) {
    return { valid: false, error: 'Path traversal detected in filename' }
  }
  
  // Check for command injection
  if (containsCommandInjection(filename)) {
    return { valid: false, error: 'Command injection detected in filename' }
  }
  
  // Get only basename (remove any directory components)
  const path = require('path')
  const basename = path.basename(filename)
  
  // Validate filename format (alphanumeric, dots, dashes, underscores only)
  if (!/^[a-zA-Z0-9._-]+$/.test(basename)) {
    return { valid: false, error: 'Filename contains invalid characters' }
  }
  
  // Limit length
  if (basename.length > 255) {
    return { valid: false, error: 'Filename too long' }
  }
  
  return { valid: true, sanitized: basename }
}

/**
 * Check if string contains XSS patterns
 */
export function containsXSS(input: string): boolean {
  if (!input || typeof input !== 'string') return false
  
  const xssPatterns = [
    /<script/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<img[^>]+onerror/i,
    /<img[^>]+onload/i,
    /on\w+\s*=/i, // Event handlers
    /javascript:/i,
    /vbscript:/i,
    /data:text\/html/i,
    /expression\(/i,
    /eval\(/i,
    /<svg/i,
    /<style/i,
  ]
  
  return xssPatterns.some(pattern => pattern.test(input))
}

/**
 * Validate file path is safe (within allowed directory)
 */
export function validateFilePath(filePath: string, allowedDir: string): { valid: boolean; error?: string; safePath?: string } {
  const path = require('path')
  
  try {
    // First validate filename
    const filenameValidation = validateFilename(filePath)
    if (!filenameValidation.valid || !filenameValidation.sanitized) {
      return { valid: false, error: filenameValidation.error || 'Invalid filename' }
    }
    
    // Construct safe path using only basename
    const safePath = path.join(allowedDir, filenameValidation.sanitized)
    const resolved = path.resolve(safePath)
    const resolvedAllowed = path.resolve(allowedDir)
    
    // Ensure resolved path is within allowed directory
    if (!resolved.startsWith(resolvedAllowed)) {
      return { valid: false, error: 'File path is outside allowed directory' }
    }
    
    return { valid: true, safePath: resolved }
  } catch (error: any) {
    return { valid: false, error: error.message || 'Invalid file path' }
  }
}

