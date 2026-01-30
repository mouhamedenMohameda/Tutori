import request from 'supertest'
import { app } from '@/app'

describe('App', () => {
  describe('GET /', () => {
    it('returns API name and status', async () => {
      const res = await request(app).get('/')
      expect(res.status).toBe(200)
      expect(res.body).toMatchObject({ name: 'BrightTutor API', status: 'ok', version: '1.0.0' })
    })
  })
})
