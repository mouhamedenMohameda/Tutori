import request from 'supertest'
import { app } from '@/app'
import { generateToken } from '@/lib/auth'

const mockFindMany = jest.fn()

jest.mock('@/lib/prisma', () => ({
  prisma: {
    teacherClass: {
      findMany: (...args: unknown[]) => mockFindMany(...args),
    },
  },
}))

describe('Teacher routes (protected)', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /api/teacher/classes', () => {
    it('returns 401 when no Authorization header', async () => {
      const res = await request(app).get('/api/teacher/classes')
      expect(res.status).toBe(401)
      expect(res.body.error).toMatch(/Unauthorized|Authorization/i)
    })

    it('returns 401 when Bearer token is invalid', async () => {
      const res = await request(app)
        .get('/api/teacher/classes')
        .set('Authorization', 'Bearer invalid-token')
      expect(res.status).toBe(401)
      expect(res.body.error).toMatch(/Invalid token|Unauthorized/i)
    })

    it('returns 200 with classes when token is valid', async () => {
      mockFindMany.mockResolvedValue([])
      const token = generateToken({
        teacherId: 'teacher-1',
        schoolId: 'school-1',
        email: 'teacher@school.com',
        role: 'TEACHER',
      })
      const res = await request(app)
        .get('/api/teacher/classes')
        .set('Authorization', `Bearer ${token}`)
      expect(res.status).toBe(200)
      expect(res.body).toBeDefined()
    })
  })
})
