import request from 'supertest'
import { app } from '@/app'
import { generateToken } from '@/lib/auth'

const mockFindUnique = jest.fn()

jest.mock('@/lib/prisma', () => ({
  prisma: {
    parent: {
      findUnique: (...args: unknown[]) => mockFindUnique(...args),
    },
  },
}))

describe('Parent routes (protected)', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /api/parent/profile', () => {
    it('returns 401 when no Authorization header', async () => {
      const res = await request(app).get('/api/parent/profile')
      expect(res.status).toBe(401)
      expect(res.body.error).toMatch(/Authorization|token/i)
    })

    it('returns 401 when Bearer token is invalid', async () => {
      const res = await request(app)
        .get('/api/parent/profile')
        .set('Authorization', 'Bearer invalid-token')
      expect(res.status).toBe(401)
      expect(res.body.error).toMatch(/Invalid token|Authorization/i)
    })

    it('returns 200 with profile when token is valid', async () => {
      mockFindUnique.mockResolvedValue({
        id: 'parent-1',
        name: 'Parent Name',
        email: 'parent@test.com',
        school: { id: 's1', schoolName: 'School' },
        studentParents: [],
      })
      const token = generateToken({
        parentId: 'parent-1',
        schoolId: 'school-1',
        email: 'parent@test.com',
        role: 'PARENT',
      })
      const res = await request(app)
        .get('/api/parent/profile')
        .set('Authorization', `Bearer ${token}`)
      expect(res.status).toBe(200)
      expect(res.body.success).toBe(true)
      expect(res.body.parent).toBeDefined()
      expect(res.body.parent.children).toEqual([])
    })
  })
})
