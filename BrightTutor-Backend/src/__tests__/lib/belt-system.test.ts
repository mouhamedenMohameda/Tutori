import {
  BELT_PROGRESSION,
  getBeltForChapter,
  getBeltForChapterNumber,
  getBeltForChapterIndex,
  getAllBeltIds,
  TOTAL_BELTS,
} from '@/lib/map/belt-system'

describe('Belt system', () => {
  describe('BELT_PROGRESSION', () => {
    it('has 9 belts ch1 to ch9', () => {
      expect(Object.keys(BELT_PROGRESSION)).toHaveLength(9)
      expect(BELT_PROGRESSION).toHaveProperty('ch1')
      expect(BELT_PROGRESSION).toHaveProperty('ch9')
    })

    it('each belt has color, name, emoji, nameFr', () => {
      for (const key of Object.keys(BELT_PROGRESSION) as (keyof typeof BELT_PROGRESSION)[]) {
        const belt = BELT_PROGRESSION[key]
        expect(belt).toHaveProperty('color')
        expect(belt).toHaveProperty('name')
        expect(belt).toHaveProperty('emoji')
        expect(belt).toHaveProperty('nameFr')
      }
    })
  })

  describe('getBeltForChapter', () => {
    it('returns belt for ch1', () => {
      const belt = getBeltForChapter('ch1')
      expect(belt.name).toBe('White Belt')
      expect(belt.emoji).toBe('⚪')
    })

    it('returns belt for ch9', () => {
      const belt = getBeltForChapter('ch9')
      expect(belt.name).toBe('Black Belt')
    })

    it('throws for invalid chapter id', () => {
      expect(() => getBeltForChapter('ch0')).toThrow('Invalid chapter ID')
      expect(() => getBeltForChapter('ch10')).toThrow('Invalid chapter ID')
      expect(() => getBeltForChapter('invalid')).toThrow('Invalid chapter ID')
    })
  })

  describe('getBeltForChapterNumber', () => {
    it('returns correct belt for 1-9', () => {
      expect(getBeltForChapterNumber(1).name).toBe('White Belt')
      expect(getBeltForChapterNumber(9).name).toBe('Black Belt')
    })

    it('cycles for chapter > 9', () => {
      expect(getBeltForChapterNumber(10).name).toBe('White Belt')
      expect(getBeltForChapterNumber(18).name).toBe('Black Belt')
      expect(getBeltForChapterNumber(19).name).toBe('White Belt')
    })

    it('throws for chapterNumber < 1', () => {
      expect(() => getBeltForChapterNumber(0)).toThrow('Invalid chapter number')
      expect(() => getBeltForChapterNumber(-1)).toThrow('Invalid chapter number')
    })
  })

  describe('getBeltForChapterIndex', () => {
    it('index 0 returns first belt', () => {
      expect(getBeltForChapterIndex(0).name).toBe('White Belt')
    })

    it('index 8 returns last belt', () => {
      expect(getBeltForChapterIndex(8).name).toBe('Black Belt')
    })

    it('cycles for index >= 9', () => {
      expect(getBeltForChapterIndex(9).name).toBe('White Belt')
    })

    it('throws for negative index', () => {
      expect(() => getBeltForChapterIndex(-1)).toThrow('Invalid chapter index')
    })
  })

  describe('getAllBeltIds', () => {
    it('returns ch1 to ch9 in order', () => {
      const ids = getAllBeltIds()
      expect(ids).toHaveLength(9)
      expect(ids[0]).toBe('ch1')
      expect(ids[8]).toBe('ch9')
    })
  })

  describe('TOTAL_BELTS', () => {
    it('is 9', () => {
      expect(TOTAL_BELTS).toBe(9)
    })
  })
})
