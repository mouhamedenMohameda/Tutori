import request from 'supertest'
import { app } from '@/app'

jest.mock('@/lib/prisma', () => ({
  prisma: {
    $queryRaw: jest.fn(),
  },
}))

jest.mock('@/lib/security/secrets', () => ({
  validateSecurityEnv: jest.fn().mockReturnValue({ valid: true, errors: [] }),
}))

const { prisma } = require('@/lib/prisma')
const { validateSecurityEnv } = require('@/lib/security/secrets')

describe('Health routes', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(validateSecurityEnv as jest.Mock).mockReturnValue({ valid: true, errors: [] })
  })

  describe('GET /api/health-check', () => {
    it('returns 200 with ok and timestamp', async () => {
      const res = await request(app).get('/api/health-check')
      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('ok', true)
      expect(res.body).toHaveProperty('timestamp')
    })
  })

  describe('GET /api/health', () => {
    it('returns 200 and status ok when DB and env are valid', async () => {
      ;(prisma.$queryRaw as jest.Mock).mockResolvedValue(undefined)
      const res = await request(app).get('/api/health')
      expect(res.status).toBe(200)
      expect(res.body.status).toBe('ok')
      expect(res.body.checks.database.status).toBe('ok')
      expect(res.body.checks.database.connected).toBe(true)
    })

    it('returns degraded when DB fails', async () => {
      ;(prisma.$queryRaw as jest.Mock).mockRejectedValue(new Error('Connection refused'))
      const res = await request(app).get('/api/health')
      expect(res.status).toBe(503)
      expect(res.body.status).toBe('degraded')
      expect(res.body.checks.database.status).toBe('failed')
      expect(res.body.checks.database.connected).toBe(false)
    })

    it('returns degraded when validateSecurityEnv fails', async () => {
      ;(validateSecurityEnv as jest.Mock).mockReturnValue({
        valid: false,
        errors: ['JWT_SECRET is not set'],
      })
      ;(prisma.$queryRaw as jest.Mock).mockResolvedValue(undefined)
      const res = await request(app).get('/api/health')
      expect(res.body.status).toBe('degraded')
      expect(res.body.checks.environment.status).toBe('failed')
    })
  })
})
