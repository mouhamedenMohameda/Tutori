import {
  validateEmail,
  validateId,
  validateSectionId,
  validateClassroomYear,
} from '@/lib/security/validation'

describe('Security validation', () => {
  describe('validateEmail', () => {
    it('accepts valid email', () => {
      expect(validateEmail('user@example.com')).toEqual({ valid: true })
      expect(validateEmail('admin@school.org')).toEqual({ valid: true })
    })

    it('rejects empty or invalid', () => {
      expect(validateEmail('')).toMatchObject({ valid: false })
      expect(validateEmail('notanemail')).toMatchObject({ valid: false })
      expect(validateEmail('missing@domain')).toMatchObject({ valid: false })
    })
  })

  describe('validateId', () => {
    it('accepts CUID-like id', () => {
      const result = validateId('c' + 'a'.repeat(24))
      expect(result.valid).toBe(true)
      expect(result.sanitizedId).toBeDefined()
    })

    it('accepts short section-like id', () => {
      expect(validateId('ch1-s1')).toMatchObject({ valid: true })
      expect(validateId('ch2_s3')).toMatchObject({ valid: true })
    })

    it('rejects empty or too short', () => {
      expect(validateId('')).toMatchObject({ valid: false })
      expect(validateId('ab')).toMatchObject({ valid: false })
    })

    it('rejects SQL keywords', () => {
      expect(validateId('SELECT * FROM users')).toMatchObject({ valid: false })
    })
  })

  describe('validateSectionId', () => {
    it('accepts valid section id', () => {
      expect(validateSectionId('ch1-s1')).toMatchObject({ valid: true })
    })

    it('rejects empty', () => {
      expect(validateSectionId('')).toMatchObject({ valid: false })
    })
  })

  describe('validateClassroomYear', () => {
    it('accepts valid years', () => {
      expect(validateClassroomYear('PREMIER_COLLEGE')).toMatchObject({ valid: true })
      expect(validateClassroomYear('QUATRIEME_COLLEGE')).toMatchObject({ valid: true })
    })

    it('rejects invalid year', () => {
      expect(validateClassroomYear('INVALID')).toMatchObject({ valid: false })
      expect(validateClassroomYear('')).toMatchObject({ valid: false })
    })
  })
})
