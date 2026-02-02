import { Request, Response } from 'express'
import { getJWTSecret } from '@/lib/security/secrets'
import jwt from 'jsonwebtoken'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import {
  APP_VERSION_CONFIG,
  runStartupCheck,
  checkDatabaseConnection,
  formatMath,
  plotGraph,
  plotGraphMultiple,
} from '@/services/miscService'

export function verifyStartupAuth(req: Request): boolean {
  const startupSecret = process.env.STARTUP_SECRET
  if (startupSecret) {
    const providedSecret = req.headers['x-startup-secret'] as string
    if (providedSecret === startupSecret) return true
  }
  const token =
    (req as Request & { cookies?: Record<string, string> }).cookies?.['platform-admin-token'] ||
    (req.headers.authorization?.startsWith('Bearer ')
      ? req.headers.authorization.slice(7)
      : null)
  if (token) {
    try {
      const decoded = jwt.verify(token, getJWTSecret()) as { role?: string }
      if (decoded.role === 'PLATFORM_ADMIN') return true
    } catch {
      // ignore
    }
  }
  if (process.env.NODE_ENV === 'development') {
    const host = req.headers.host || ''
    if (host.includes('localhost') || host.includes('127.0.0.1')) return true
  }
  return false
}

export async function appVersionHandler(_req: Request, res: Response): Promise<void> {
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
}

export async function startupGetHandler(req: Request, res: Response): Promise<void> {
  if (!verifyStartupAuth(req)) {
    res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: 'Startup API requires authentication',
    })
    return
  }
  const connected = await checkDatabaseConnection()
  if (!connected) {
    res.status(500).json({
      success: false,
      error: 'Database connection failed',
      fixes: [],
      warnings: ['Database unavailable'],
      timestamp: new Date().toISOString(),
    })
    return
  }
  try {
    const data = await runStartupCheck()
    res.json(data)
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      error: 'Startup check failed',
      details:
        process.env.NODE_ENV === 'development' && error instanceof Error
          ? error.message
          : 'System error',
      fixes: [],
      warnings: ['System startup check failed'],
      timestamp: new Date().toISOString(),
    })
  }
}

export async function startupPostHandler(req: Request, res: Response): Promise<void> {
  if (!verifyStartupAuth(req)) {
    res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: 'Startup API requires authentication',
    })
    return
  }
  try {
    const data = await runStartupCheck()
    res.json({ ...data, message: 'Manual database migration completed', manual: true })
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      error: 'Manual migration failed',
      details:
        process.env.NODE_ENV === 'development' && error instanceof Error
          ? error.message
          : undefined,
    })
  }
}

export function clearCacheHandler(_req: Request, res: Response): void {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.set('Pragma', 'no-cache')
  res.set('Expires', '0')
  res.json({ success: true, message: 'Cache cleared', timestamp: new Date().toISOString() })
}

export function errorLogHandler(req: Request, res: Response): void {
  try {
    const body = req.body || {}
    const { errorId, errorType, timestamp } = body
    console.error('Client-side error logged:', { errorId, errorType, timestamp })
    res.json({ success: true })
  } catch {
    res.json({ success: true })
  }
}

export function mathFormatHandler(req: Request, res: Response): void {
  try {
    const body = req.body || {}
    const { text } = body
    if (!text || typeof text !== 'string') {
      res.status(400).json({ error: 'Missing or invalid text parameter' })
      return
    }
    const formatted = formatMath(text)
    res.json({ formatted })
  } catch (error: unknown) {
    console.error('Error formatting math:', error)
    res.status(500).json({
      error: 'Failed to format math',
      details: error instanceof Error ? error.message : undefined,
    })
  }
}

export async function graphPlotPostHandler(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body || {}
    const { expression, expressions, config } = body
    if (!expression && !expressions) {
      res.status(400).json({ error: 'Expression ou expressions requises' })
      return
    }
    let result
    if (expressions && Array.isArray(expressions)) {
      result = await plotGraphMultiple(expressions, config as Record<string, unknown>)
    } else if (expression) {
      result = await plotGraph(expression, config as Record<string, unknown>)
    } else {
      res.status(400).json({ error: 'Format de requête invalide' })
      return
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
}

export async function graphPlotGetHandler(req: Request, res: Response): Promise<void> {
  try {
    const expression = (req.query.expression as string) || 'x^2'
    const xMin = req.query.xMin ? parseFloat(req.query.xMin as string) : undefined
    const xMax = req.query.xMax ? parseFloat(req.query.xMax as string) : undefined
    const yMin = req.query.yMin ? parseFloat(req.query.yMin as string) : undefined
    const yMax = req.query.yMax ? parseFloat(req.query.yMax as string) : undefined
    const config = { xMin, xMax, yMin, yMax }
    const result = await plotGraph(expression, config)
    res.json({
      success: true,
      imageUrl: result.dataUrl,
      base64: result.base64,
      mimeType: 'image/png',
    })
  } catch (error) {
    sendSanitizedError(res, error, 'graph/plot')
  }
}
