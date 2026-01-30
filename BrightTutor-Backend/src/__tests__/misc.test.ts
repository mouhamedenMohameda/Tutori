import request from 'supertest'
import { app } from '@/app'

describe('Misc routes', () => {
  describe('GET /api/app-version', () => {
    it('returns 200 with minimumVersion and storeUrls', async () => {
      const res = await request(app).get('/api/app-version')
      expect(res.status).toBe(200)
      expect(res.body.success).toBe(true)
      expect(res.body).toHaveProperty('minimumVersion')
      expect(res.body.storeUrls).toHaveProperty('android')
      expect(res.body.storeUrls).toHaveProperty('ios')
    })

    it('sets Cache-Control header', async () => {
      const res = await request(app).get('/api/app-version')
      expect(res.headers['cache-control']).toMatch(/max-age=300/)
    })
  })
})
