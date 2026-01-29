import { Router, Request, Response } from 'express'
import { prisma } from '@/lib/prisma'
import { getJWTSecret } from '@/lib/security/secrets'
import jwt from 'jsonwebtoken'
import { formatMathInText } from '@/lib/ai/math-formatter'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()

const APP_VERSION_CONFIG = {
  minimumVersion: '1.0.1',
  storeUrls: {
    android: 'https://play.google.com/store/apps/details?id=io.tutori.mobileapp',
    ios: 'https://apps.apple.com/mr/app/tutori/id6753122277',
  },
}

router.get('/app-version', (_req: Request, res: Response) => {
  try {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=300')
    res.json({
      success: true,
      minimumVersion: APP_VERSION_CONFIG.minimumVersion,
      storeUrls: APP_VERSION_CONFIG.storeUrls,
    })
  } catch (error) {
    console.error('Error in /api/app-version:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch version info',
      minimumVersion: '0.0.0',
      storeUrls: APP_VERSION_CONFIG.storeUrls,
    })
  }
})

function verifyStartupAuth(req: Request): boolean {
  const startupSecret = process.env.STARTUP_SECRET
  if (startupSecret) {
    const providedSecret = req.headers['x-startup-secret'] as string
    if (providedSecret === startupSecret) return true
  }
  const token =
    (req as any).cookies?.['platform-admin-token'] ||
    (req.headers.authorization?.startsWith('Bearer ')
      ? req.headers.authorization.slice(7)
      : null)
  if (token) {
    try {
      const decoded = jwt.verify(token, getJWTSecret()) as any
      if (decoded.role === 'PLATFORM_ADMIN') return true
    } catch {}
  }
  if (process.env.NODE_ENV === 'development') {
    const host = req.headers.host || ''
    if (host.includes('localhost') || host.includes('127.0.0.1')) return true
  }
  return false
}

async function runStartupCheck(): Promise<{
  success: boolean
  message: string
  fixes: string[]
  warnings: string[]
  stats: { totalSchools: number; statusBreakdown: Record<string, number> }
  timestamp: string
}> {
  let fixes: string[] = []
  let warnings: string[] = []
  try {
    await prisma.$queryRaw`SELECT wilaya FROM schools LIMIT 1`
  } catch (wilayaError: any) {
    if (wilayaError?.message?.includes('wilaya')) {
      try {
        await prisma.$executeRaw`ALTER TABLE schools ADD COLUMN IF NOT EXISTS wilaya VARCHAR(255)`
        fixes.push('Added missing wilaya column to schools table')
      } catch {}
    }
  }
  let schoolCount = 0
  let statusBreakdown: Record<string, number> = {}
  try {
    const schools = await prisma.school.findMany({
      select: { applicationStatus: true },
    })
    schoolCount = schools.length
    schools.forEach((s) => {
      statusBreakdown[s.applicationStatus] = (statusBreakdown[s.applicationStatus] || 0) + 1
    })
  } catch {}
  return {
    success: true,
    message: 'Database schema check completed',
    fixes,
    warnings,
    stats: { totalSchools: schoolCount, statusBreakdown },
    timestamp: new Date().toISOString(),
  }
}

router.get('/startup', async (req: Request, res: Response) => {
  if (!verifyStartupAuth(req)) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: 'Startup API requires authentication',
    })
  }
  try {
    await prisma.$connect()
  } catch {
    return res.status(500).json({
      success: false,
      error: 'Database connection failed',
      fixes: [],
      warnings: ['Database unavailable'],
      timestamp: new Date().toISOString(),
    })
  }
  try {
    const data = await runStartupCheck()
    res.json(data)
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: 'Startup check failed',
      details: process.env.NODE_ENV === 'development' ? error.message : 'System error',
      fixes: [],
      warnings: ['System startup check failed'],
      timestamp: new Date().toISOString(),
    })
  }
})

router.post('/startup', async (req: Request, res: Response) => {
  if (!verifyStartupAuth(req)) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: 'Startup API requires authentication',
    })
  }
  try {
    const data = await runStartupCheck()
    res.json({ ...data, message: 'Manual database migration completed', manual: true })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: 'Manual migration failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
})

router.post('/clear-cache', (_req: Request, res: Response) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.set('Pragma', 'no-cache')
  res.set('Expires', '0')
  res.json({ success: true, message: 'Cache cleared', timestamp: new Date().toISOString() })
})

router.post('/error-log', (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { errorId, errorType, timestamp } = body
    console.error('Client-side error logged:', { errorId, errorType, timestamp })
    res.json({ success: true })
  } catch {
    res.json({ success: true })
  }
})

router.post('/math/format', (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const { text } = body
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid text parameter' })
    }
    const formatted = formatMathInText(text)
    res.json({ formatted })
  } catch (error: any) {
    console.error('Error formatting math:', error)
    res.status(500).json({ error: 'Failed to format math', details: error?.message })
  }
})

router.post('/graph/plot', async (req: Request, res: Response) => {
  try {
    const { plotFunction, plotMultipleFunctions } = await import('@/lib/graph/plotter')
    const body = req.body || {}
    const { expression, expressions, config } = body
    if (!expression && !expressions) {
      return res.status(400).json({ error: 'Expression ou expressions requises' })
    }
    let result
    if (expressions && Array.isArray(expressions)) {
      result = await plotMultipleFunctions(expressions, config as any)
    } else if (expression) {
      result = await plotFunction(expression, config as any)
    } else {
      return res.status(400).json({ error: 'Format de requête invalide' })
    }
    res.json({
      success: true,
      imageUrl: result.dataUrl,
      base64: result.base64,
      mimeType: 'image/png',
    })
  } catch (error) {
    sendSanitizedError(res, error, 'graph/plot')
  }
})

router.get('/graph/plot', async (req: Request, res: Response) => {
  try {
    const { plotFunction } = await import('@/lib/graph/plotter')
    const expression = (req.query.expression as string) || 'x^2'
    const xMin = req.query.xMin ? parseFloat(req.query.xMin as string) : undefined
    const xMax = req.query.xMax ? parseFloat(req.query.xMax as string) : undefined
    const yMin = req.query.yMin ? parseFloat(req.query.yMin as string) : undefined
    const yMax = req.query.yMax ? parseFloat(req.query.yMax as string) : undefined
    const config = { xMin, xMax, yMin, yMax }
    const result = await plotFunction(expression, config)
    res.json({ success: true, imageUrl: result.dataUrl, base64: result.base64, mimeType: 'image/png' })
  } catch (error) {
    sendSanitizedError(res, error, 'graph/plot')
  }
})

export default router
