import request from 'supertest'
import { app } from '@/app'

jest.mock('@/lib/prisma', () => ({
  prisma: {
    school: { findFirst: jest.fn(), findUnique: jest.fn() },
    student: { findMany: jest.fn(), findFirst: jest.fn(), create: jest.fn(), count: jest.fn() },
    teacher: { findMany: jest.fn() },
    class: { findMany: jest.fn() },
    subject: { findMany: jest.fn() },
    parent: { findMany: jest.fn() },
    assignment: { findMany: jest.fn() },
  },
}))

jest.mock('@/lib/rate-limit', () => ({
  createRateLimiter: () => () => ({ allowed: true, resetTime: 0, retryAfter: 0 }),
  rateLimitConfigs: {},
  getRateLimitHeaders: () => ({}),
}))

describe('School routes', () => {
  describe('GET /api/school/teachers (no auth)', () => {
    it('returns 401 when no Authorization header', async () => {
      const res = await request(app).get('/api/school/teachers')
      expect(res.status).toBe(401)
      expect(res.body.error).toMatch(/Authorization/i)
    })
  })

  describe('GET /api/school/students (no auth)', () => {
    it('returns 401 when no Authorization header', async () => {
      const res = await request(app).get('/api/school/students')
      expect(res.status).toBe(401)
    })
  })
})
