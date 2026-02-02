import { Request, Response } from 'express'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import { getSchoolsList, importSchoolsFromCSV } from '@/services/schoolsService'

export async function listHandler(req: Request, res: Response): Promise<void> {
  try {
    const search = (req.query.search as string) || ''
    const { schools, message } = getSchoolsList(search)
    res.json({
      success: true,
      schools,
      ...(message && { message }),
    })
  } catch (error) {
    console.error('Error fetching schools list:', error)
    sendSanitizedError(res, error, 'schools/list')
  }
}

export async function importCsvHandler(_req: Request, res: Response): Promise<void> {
  try {
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
  } catch (error: unknown) {
    console.error('Error importing schools from CSV:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to import schools',
      details:
        process.env.NODE_ENV === 'development' && error instanceof Error
          ? error.message
          : undefined,
    })
  }
}
