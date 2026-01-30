import request from 'supertest'
import { app } from '@/app'

const mockFindFirst = jest.fn()

jest.mock('@/lib/prisma', () => ({
  prisma: {
    student: {
      findFirst: (...args: unknown[]) => mockFindFirst(...args),
    },
  },
}))

jest.mock('@/lib/rate-limit', () => ({
  createRateLimiter: () => () => ({ allowed: true, resetTime: 0, retryAfter: 0 }),
  rateLimitConfigs: {},
  getRateLimitHeaders: () => ({}),
}))

describe('Student routes', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('POST /api/student/login', () => {
    it('returns 400 when username and email are missing', async () => {
      const res = await request(app)
        .post('/api/student/login')
        .send({ password: 'pass' })
      expect(res.status).toBe(400)
      expect(res.body.error).toMatch(/Username or email/i)
    })

    it('returns 400 when password is missing', async () => {
      const res = await request(app)
        .post('/api/student/login')
        .send({ username: 'student1' })
      expect(res.status).toBe(400)
      expect(res.body.error).toMatch(/Password is required/i)
    })

    it('returns 403 when student not found (no active nor inactive)', async () => {
      mockFindFirst.mockResolvedValue(null)
      const res = await request(app)
        .post('/api/student/login')
        .send({ username: 'unknown', password: 'pass' })
      expect(res.status).toBe(403)
      expect(res.body.error).toMatch(/not found|inactive|account/i)
    })
  })
})
