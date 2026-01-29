/**
 * Answer Normalization Utility
 * Normalizes answers for comparison to be case-insensitive and format-tolerant
 */

/**
 * Normalize an answer string for comparison
 * - Converts to lowercase (case-insensitive)
 * - Normalizes whitespace (removes extra spaces)
 * - Handles different separators (spaces, commas, comma+space) - normalizes to single space
 * - Trims the answer
 */
export function normalizeAnswer(answer: string | number | boolean): string {
  if (typeof answer === 'boolean') {
    return answer ? 'true' : 'false'
  }
  
  // Convert to string and trim
  let normalized = String(answer).trim()
  
  // Convert to lowercase (case-insensitive)
  normalized = normalized.toLowerCase()
  
  // Normalize separators: replace commas (with or without spaces) with single space
  // This handles: "1,2,3", "1, 2, 3", "1 , 2 , 3", "1,2, 3", "1 ,2,3" all become "1 2 3"
  normalized = normalized.replace(/\s*,\s*/g, ' ') // Replace comma (with optional spaces before/after) with space
  
  // Normalize multiple spaces to single space
  normalized = normalized.replace(/\s+/g, ' ')
  
  // Trim again after normalization
  normalized = normalized.trim()
  
  return normalized
}

/**
 * Compare two answers with normalization
 * Handles:
 * - Case differences (uppercase/lowercase)
 * - Whitespace differences (extra spaces)
 * - Separator differences (comma, comma+space, space)
 * - Numeric comparison (if both are numbers)
 */
export function compareAnswers(studentAnswer: string | number | boolean, correctAnswer: string | number | boolean): boolean {
  // Normalize both answers
  const normalizedStudent = normalizeAnswer(studentAnswer)
  const normalizedCorrect = normalizeAnswer(correctAnswer)
  
  // Direct string comparison after normalization
  if (normalizedStudent === normalizedCorrect) {
    return true
  }
  
  // Numeric comparison (if both are valid numbers)
  const studentNum = Number(normalizedStudent)
  const correctNum = Number(normalizedCorrect)
  
  if (!isNaN(studentNum) && !isNaN(correctNum)) {
    // Compare as numbers (handles "5" === "5.0", etc.)
    return studentNum === correctNum
  }
  
  // If not numbers and not equal after normalization, they're different
  return false
}

/**
 * Normalize a list of numbers/strings (for ordered answers like "1, 2, 3" or "1 2 3")
 * Handles different separators and formats
 */
export function normalizeListAnswer(answer: string): string {
  return normalizeAnswer(answer)
}

