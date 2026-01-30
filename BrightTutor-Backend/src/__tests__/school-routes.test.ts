import request from 'supertest'
import { app } from '@/app'
import { generateToken } from '@/lib/auth'

const mockStudentFindMany = jest.fn()
const mockStudentCount = jest.fn()
const mockTeacherFindMany = jest.fn()
const mockTeacherCount = jest.fn()

jest.mock('@/lib/prisma', () => ({
  prisma: {
    school: { findFirst: jest.fn(), findUnique: jest.fn() },
    student: {
      findMany: (...args: unknown[]) => mockStudentFindMany(...args),
      findFirst: jest.fn(),
      create: jest.fn(),
      count: (...args: unknown[]) => mockStudentCount(...args),
    },
    teacher: {
      findMany: (...args: unknown[]) => mockTeacherFindMany(...args),
      count: (...args: unknown[]) => mockTeacherCount(...args),
    },
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
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('POST /api/school/login (validation)', () => {
    it('returns 400 when body is invalid (missing email)', async () => {
      const res = await request(app)
        .post('/api/school/login')
        .send({ password: 'pass' })
      expect(res.status).toBe(400)
      expect(res.body.error).toBeDefined()
    })

    it('returns 400 when email format is invalid', async () => {
      const res = await request(app)
        .post('/api/school/login')
        .send({ email: 'not-an-email', password: 'pass' })
      expect(res.status).toBe(400)
      expect(res.body.error).toMatch(/email|Invalid/i)
    })
  })

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

  describe('GET /api/school/students (with auth)', () => {
    it('returns 200 with students and pagination when token is valid', async () => {
      mockStudentFindMany.mockResolvedValue([])
      mockStudentCount.mockResolvedValue(0)
      const token = generateToken({
        schoolId: 'school-1',
        email: 'admin@school.com',
        role: 'SCHOOL_ADMIN',
      })
      const res = await request(app)
        .get('/api/school/students')
        .set('Authorization', `Bearer ${token}`)
      expect(res.status).toBe(200)
      expect(res.body.success).toBe(true)
      expect(res.body.students).toEqual([])
      expect(res.body.pagination).toMatchObject({
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 0,
        hasNext: false,
        hasPrev: false,
      })
    })
  })

  describe('GET /api/school/teachers (with auth)', () => {
    it('returns 200 with teachers and pagination when token is valid', async () => {
      mockTeacherFindMany.mockResolvedValue([])
      mockTeacherCount.mockResolvedValue(0)
      const token = generateToken({
        schoolId: 'school-1',
        email: 'admin@school.com',
        role: 'SCHOOL_ADMIN',
      })
      const res = await request(app)
        .get('/api/school/teachers')
        .set('Authorization', `Bearer ${token}`)
      expect(res.status).toBe(200)
      expect(res.body.success).toBe(true)
      expect(res.body.teachers).toEqual([])
      expect(res.body.pagination).toMatchObject({
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 0,
        hasNext: false,
        hasPrev: false,
      })
    })
  })
})
