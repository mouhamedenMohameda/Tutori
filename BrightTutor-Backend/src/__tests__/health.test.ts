import request from 'supertest'
import { app } from '@/app'

jest.mock('@/services/healthService', () => ({
  getHealth: jest.fn(),
}))

const { getHealth } = require('@/services/healthService')

describe('Health routes', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(getHealth as jest.Mock).mockResolvedValue({
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: 'test',
      checks: {
        environment: { status: 'ok', errors: [] },
        database: { status: 'ok', connected: true, error: null },
      },
    })
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
      ;(getHealth as jest.Mock).mockResolvedValue({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: 'test',
        checks: {
          environment: { status: 'ok', errors: [] },
          database: { status: 'ok', connected: true, error: null },
        },
      })
      const res = await request(app).get('/api/health')
      expect(res.status).toBe(200)
      expect(res.body.status).toBe('ok')
      expect(res.body.checks.database.status).toBe('ok')
      expect(res.body.checks.database.connected).toBe(true)
    })

    it('returns degraded when DB fails', async () => {
      ;(getHealth as jest.Mock).mockResolvedValue({
        status: 'degraded',
        timestamp: new Date().toISOString(),
        environment: 'test',
        checks: {
          environment: { status: 'ok', errors: [] },
          database: {
            status: 'failed',
            connected: false,
            error: 'Connection refused',
          },
        },
      })
      const res = await request(app).get('/api/health')
      expect(res.status).toBe(503)
      expect(res.body.status).toBe('degraded')
      expect(res.body.checks.database.status).toBe('failed')
      expect(res.body.checks.database.connected).toBe(false)
    })

    it('returns degraded when validateSecurityEnv fails', async () => {
      ;(getHealth as jest.Mock).mockResolvedValue({
        status: 'degraded',
        timestamp: new Date().toISOString(),
        environment: 'test',
        checks: {
          environment: {
            status: 'failed',
            errors: ['JWT_SECRET is not set'],
          },
          database: { status: 'ok', connected: true, error: null },
        },
      })
      const res = await request(app).get('/api/health')
      expect(res.body.status).toBe('degraded')
      expect(res.body.checks.environment.status).toBe('failed')
    })
  })
})
