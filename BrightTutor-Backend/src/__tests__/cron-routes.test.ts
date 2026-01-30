import request from 'supertest'
import { app } from '@/app'

const mockFindMany = jest.fn()

jest.mock('@/lib/prisma', () => ({
  prisma: {
    studentPushToken: { findMany: (...args: unknown[]) => mockFindMany(...args) },
    student: { findMany: jest.fn() },
  },
}))

describe('Cron routes', () => {
  const validCronSecret = process.env.CRON_SECRET || 'test-cron-secret-for-tests'

  beforeEach(() => {
    jest.clearAllMocks()
    mockFindMany.mockResolvedValue([])
  })

  describe('POST /api/cron/daily-notifications', () => {
    it('returns 401 when Authorization header is missing', async () => {
      const res = await request(app).post('/api/cron/daily-notifications')
      expect(res.status).toBe(401)
      expect(res.body.error).toMatch(/Unauthorized/i)
      expect(res.body.code).toBe('AUTH_REQUIRED')
    })

    it('returns 401 when Authorization Bearer is wrong', async () => {
      const res = await request(app)
        .post('/api/cron/daily-notifications')
        .set('Authorization', 'Bearer wrong-secret')
      expect(res.status).toBe(401)
      expect(res.body.error).toMatch(/Unauthorized/i)
    })

    it('returns 200 with success when Bearer matches CRON_SECRET', async () => {
      const res = await request(app)
        .post('/api/cron/daily-notifications')
        .set('Authorization', `Bearer ${validCronSecret}`)
      expect(res.status).toBe(200)
      expect(res.body.success).toBe(true)
      expect(res.body.message).toBeDefined()
    })
  })

  describe('POST /api/cron/inactive-reminders', () => {
    it('returns 401 when Authorization header is missing', async () => {
      const res = await request(app).post('/api/cron/inactive-reminders')
      expect(res.status).toBe(401)
      expect(res.body.error).toMatch(/Unauthorized/i)
    })

    it('returns 401 when Authorization Bearer is wrong', async () => {
      const res = await request(app)
        .post('/api/cron/inactive-reminders')
        .set('Authorization', 'Bearer wrong-secret')
      expect(res.status).toBe(401)
      expect(res.body.error).toMatch(/Unauthorized/i)
    })

    it('returns 200 with success when Bearer matches CRON_SECRET', async () => {
      const res = await request(app)
        .post('/api/cron/inactive-reminders')
        .set('Authorization', `Bearer ${validCronSecret}`)
      expect(res.status).toBe(200)
      expect(res.body.success).toBe(true)
    })
  })
})
