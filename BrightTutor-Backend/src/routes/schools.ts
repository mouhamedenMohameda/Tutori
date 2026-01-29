import { Router, Request, Response } from 'express'
import { parseSchoolsCSV, parseFrArSchoolsTxt } from '@/lib/schools-csv-importer'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()

router.get('/list', async (req: Request, res: Response) => {
  try {
      const search = (req.query.search as string) || ''
      const csvSchools = parseSchoolsCSV()
      const frArSchools = parseFrArSchoolsTxt()
      if (csvSchools.length === 0 && frArSchools.length === 0) {
        return res.json({
          success: true,
          schools: [],
          message: 'No schools found in CSV or FR/AR TXT files',
        })
      }
      const uniqueSchools = new Map<string, { id: string; name: string; city: string }>()
      const allSources = [...csvSchools, ...frArSchools]
      for (const school of allSources) {
        if (!school.name?.trim()) continue
        const normalizedName = school.name.trim().toLowerCase().replace(/\s+/g, ' ')
        if (!uniqueSchools.has(normalizedName)) {
          uniqueSchools.set(normalizedName, {
            id: school.id || `school_${uniqueSchools.size + 1}`,
            name: school.name.trim(),
            city: school.city || 'Nouakchott',
          })
        }
      }
      let schools = Array.from(uniqueSchools.values())
      if (search) {
        const searchLower = search.toLowerCase()
        schools = schools.filter(
          (s) =>
            s.name.toLowerCase().includes(searchLower) ||
            s.city.toLowerCase().includes(searchLower)
        )
      }
      schools.sort((a, b) => a.name.localeCompare(b.name))
      res.json({
        success: true,
        schools: schools.map((s) => ({
          id: s.id,
          name: s.name,
          city: s.city,
          address: s.city || '',
        })),
      })
  } catch (error) {
    console.error('Error fetching schools list:', error)
    sendSanitizedError(res, error, 'schools/list')
  }
})

router.post('/import-csv', async (req: Request, res: Response) => {
  try {
    const { importSchoolsFromCSV } = await import('@/lib/schools-csv-importer')
    const result = await importSchoolsFromCSV()
    res.json({
      success: true,
      message: 'Schools imported successfully',
      result: {
        created: result.created,
        skipped: result.skipped,
        errors: result.errors,
        total: result.created + result.skipped + result.errors,
      },
    })
  } catch (error: any) {
    console.error('Error importing schools from CSV:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to import schools',
      details: process.env.NODE_ENV === 'development' ? error?.message : undefined,
    })
  }
})

export default router
