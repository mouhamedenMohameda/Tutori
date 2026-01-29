// File Upload Security
// Validates and secures file uploads

interface FileValidationResult {
  valid: boolean
  error?: string
  sanitizedFilename?: string
}

/**
 * Allowed MIME types for file uploads
 */
const ALLOWED_MIME_TYPES = {
  image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  pdf: ['application/pdf'],
  audio: ['audio/mpeg', 'audio/wav', 'audio/ogg'],
}

/**
 * Maximum file sizes (in bytes)
 */
const MAX_FILE_SIZES = {
  image: 5 * 1024 * 1024, // 5MB
  pdf: 10 * 1024 * 1024, // 10MB
  audio: 10 * 1024 * 1024, // 10MB
}

/**
 * Validate uploaded file
 */
export function validateFileUpload(
  file: File,
  allowedTypes: 'image' | 'pdf' | 'audio' | 'all' = 'all'
): FileValidationResult {
  // Check file size
  const maxSize = allowedTypes === 'all' 
    ? Math.max(...Object.values(MAX_FILE_SIZES))
    : MAX_FILE_SIZES[allowedTypes]
  
  if (file.size > maxSize) {
    return {
      valid: false,
      error: `File size exceeds maximum allowed size of ${maxSize / 1024 / 1024}MB`
    }
  }
  
  // Check MIME type
  if (allowedTypes !== 'all') {
    const allowedMimeTypes = ALLOWED_MIME_TYPES[allowedTypes]
    if (!allowedMimeTypes.includes(file.type)) {
      return {
        valid: false,
        error: `File type not allowed. Allowed types: ${allowedMimeTypes.join(', ')}`
      }
    }
  }
  
  // Validate filename
  const filenameValidation = validateFilename(file.name)
  if (!filenameValidation.valid) {
    return {
      valid: false,
      error: filenameValidation.error || 'Invalid filename'
    }
  }
  
  return {
    valid: true,
    sanitizedFilename: filenameValidation.sanitized
  }
}

/**
 * Validate filename (import from injection-prevention)
 */
function validateFilename(filename: string): { valid: boolean; sanitized?: string; error?: string } {
  const path = require('path')
  
  // Check for path traversal
  if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    return {
      valid: false,
      error: 'Filename contains invalid characters'
    }
  }
  
  // Extract basename
  const basename = path.basename(filename)
  
  // Validate safe filename pattern
  if (!/^[a-zA-Z0-9._-]+$/.test(basename)) {
    return {
      valid: false,
      error: 'Filename contains invalid characters'
    }
  }
  
  // Check length
  if (basename.length > 255) {
    return {
      valid: false,
      error: 'Filename is too long'
    }
  }
  
  return {
    valid: true,
    sanitized: basename
  }
}

/**
 * Generate safe filename with timestamp
 */
export function generateSafeFilename(originalFilename: string): string {
  const path = require('path')
  const timestamp = Date.now()
  const ext = path.extname(originalFilename)
  const basename = path.basename(originalFilename, ext)
  
  // Sanitize basename
  const sanitized = basename.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 50)
  
  return `${timestamp}_${sanitized}${ext}`
}

/**
 * Validate image file
 */
export function validateImageFile(file: File): FileValidationResult {
  return validateFileUpload(file, 'image')
}

/**
 * Validate PDF file
 */
export function validatePDFFile(file: File): FileValidationResult {
  return validateFileUpload(file, 'pdf')
}

/**
 * Validate audio file
 */
export function validateAudioFile(file: File): FileValidationResult {
  return validateFileUpload(file, 'audio')
}

