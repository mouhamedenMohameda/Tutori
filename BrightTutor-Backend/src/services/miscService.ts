import { AppDataSource, checkDatabaseConnection as dbCheck } from '@/config/data-source'
import { School } from '@/entities'
import { formatMathInText } from '@/lib/ai/math-formatter'

export const APP_VERSION_CONFIG = {
  minimumVersion: '1.0.1',
  storeUrls: {
    android: 'https://play.google.com/store/apps/details?id=io.tutori.mobileapp',
    ios: 'https://apps.apple.com/mr/app/tutori/id6753122277',
  },
}

export type StartupCheckResult = {
  success: boolean
  message: string
  fixes: string[]
  warnings: string[]
  stats: { totalSchools: number; statusBreakdown: Record<string, number> }
  timestamp: string
}

export async function checkDatabaseConnection(): Promise<boolean> {
  return dbCheck()
}

export async function runStartupCheck(): Promise<StartupCheckResult> {
  const fixes: string[] = []
  const warnings: string[] = []
  const ds = AppDataSource.isInitialized ? AppDataSource : await AppDataSource.initialize()
  try {
    await ds.query('SELECT wilaya FROM schools LIMIT 1')
  } catch (wilayaError: unknown) {
    const msg = wilayaError instanceof Error ? wilayaError.message : ''
    if (msg.includes('wilaya')) {
      try {
        await ds.query('ALTER TABLE schools ADD COLUMN IF NOT EXISTS wilaya VARCHAR(255)')
        fixes.push('Added missing wilaya column to schools table')
      } catch {
        // ignore
      }
    }
  }
  let schoolCount = 0
  const statusBreakdown: Record<string, number> = {}
  try {
    const schools = await ds.getRepository(School).find({ select: ['applicationStatus'] })
    schoolCount = schools.length
    schools.forEach((s) => {
      statusBreakdown[s.applicationStatus] = (statusBreakdown[s.applicationStatus] || 0) + 1
    })
  } catch {
    // ignore
  }
  return {
    success: true,
    message: 'Database schema check completed',
    fixes,
    warnings,
    stats: { totalSchools: schoolCount, statusBreakdown },
    timestamp: new Date().toISOString(),
  }
}

export function formatMath(text: string): string {
  return formatMathInText(text)
}

export async function plotGraph(
  expression: string,
  config?: { xMin?: number; xMax?: number; yMin?: number; yMax?: number }
): Promise<{ dataUrl: string; base64: string }> {
  const { plotFunction } = await import('@/lib/graph/plotter')
  return plotFunction(expression, config ?? {})
}

export async function plotGraphMultiple(
  expressions: string[] | Array<{ expression: string; color?: string; label?: string }>,
  config?: Record<string, unknown>
): Promise<{ dataUrl: string; base64: string }> {
  const { plotMultipleFunctions } = await import('@/lib/graph/plotter')
  const normalized =
    expressions.length > 0 && typeof expressions[0] === 'string'
      ? (expressions as string[]).map((expr) => ({ expression: expr }))
      : expressions
  return plotMultipleFunctions(
    normalized as Array<{ expression: string; color?: string; label?: string }>,
    (config as import('@/lib/graph/plotter').PlotConfig) ?? {}
  )
}
