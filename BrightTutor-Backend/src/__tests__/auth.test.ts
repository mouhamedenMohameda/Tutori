import request from 'supertest'
import { app } from '@/app'

const mockFindFirst = jest.fn()
const mockCreate = jest.fn()

jest.mock('@/lib/prisma', () => ({
  prisma: {
    school: {
      findFirst: (...args: unknown[]) => mockFindFirst(...args),
      create: (...args: unknown[]) => mockCreate(...args),
    },
  },
}))

jest.mock('bcryptjs', () => ({
  hash: jest.fn((password: string) => Promise.resolve(`hashed_${password}`)),
}))

jest.mock('@/lib/security/validation', () => ({
  validateEmail: jest.fn((email: string) => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { valid: false, error: 'Invalid email format' }
    }
    return { valid: true }
  }),
}))

jest.mock('@/lib/security/injection-prevention', () => ({
  containsSQLInjection: jest.fn(() => false),
}))

describe('Auth routes', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /api/auth/login', () => {
    it('returns 400 with redirect message', async () => {
      const res = await request(app).get('/api/auth/login')
      expect(res.status).toBe(400)
      expect(res.body.error).toContain('login page')
      expect(res.body.redirect).toBe('/auth/login')
    })
  })

  describe('POST /api/auth/login', () => {
    it('returns 400 with redirect message', async () => {
      const res = await request(app).post('/api/auth/login').send({})
      expect(res.status).toBe(400)
      expect(res.body.error).toContain('login page')
    })
  })

  describe('POST /api/auth/register', () => {
    it('returns 400 when required fields are missing', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ schoolName: 'Test School' })
      expect(res.status).toBe(400)
      expect(res.body.error).toMatch(/required/i)
    })

    it('returns 400 when password is too short', async () => {
      const { validateEmail } = require('@/lib/security/validation')
      ;(validateEmail as jest.Mock).mockReturnValue({ valid: true })
      mockFindFirst.mockResolvedValue(null)

      const res = await request(app)
        .post('/api/auth/register')
        .send({
          schoolName: 'Test School',
          adminName: 'Admin',
          adminEmail: 'admin@school.com',
          password: '12345',
        })
      expect(res.status).toBe(400)
      expect(res.body.error).toMatch(/6 characters/)
    })

    it('returns 409 when school with same name or email exists', async () => {
      const { validateEmail } = require('@/lib/security/validation')
      ;(validateEmail as jest.Mock).mockReturnValue({ valid: true })
      mockFindFirst.mockResolvedValue({ id: '1', schoolName: 'Existing' })

      const res = await request(app)
        .post('/api/auth/register')
        .send({
          schoolName: 'Test School',
          adminName: 'Admin',
          adminEmail: 'admin@school.com',
          password: 'password123',
        })
      expect(res.status).toBe(409)
      expect(res.body.error).toMatch(/already exists/)
    })

    it('returns 201 with school and nextSteps on success', async () => {
      const { validateEmail } = require('@/lib/security/validation')
      ;(validateEmail as jest.Mock).mockReturnValue({ valid: true })
      mockFindFirst.mockResolvedValue(null)
      mockCreate.mockResolvedValue({
        id: 'school-1',
        schoolName: 'New School',
        adminEmail: 'admin@school.com',
        subscriptionPlan: 'BASIC_50',
        applicationStatus: 'PENDING',
      })

      const res = await request(app)
        .post('/api/auth/register')
        .send({
          schoolName: 'New School',
          adminName: 'Admin',
          adminEmail: 'admin@school.com',
          password: 'password123',
        })

      expect(res.status).toBe(200)
      expect(res.body.success).toBe(true)
      expect(res.body.school).toMatchObject({
        schoolName: 'New School',
        adminEmail: 'admin@school.com',
        status: 'PENDING',
      })
      expect(res.body.nextSteps).toBeInstanceOf(Array)
    })
  })
})
