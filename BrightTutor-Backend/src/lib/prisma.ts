/**
 * Prisma client with same connection setup as BrightTutor-AI-Platform:
 * DATABASE_URL from env (.env.local or .env, loaded by env-loader),
 * connection pooling params added automatically.
 */
import { PrismaClient } from '@prisma/client'

function addConnectionPoolingParams(baseUrl: string): string {
  try {
    const url = new URL(baseUrl)
    const params = new URLSearchParams(url.search)
    if (!params.has('connection_limit')) {
      params.set('connection_limit', process.env.DB_CONNECTION_LIMIT || '15')
    }
    if (!params.has('pool_timeout')) {
      params.set('pool_timeout', '15')
    }
    if (!params.has('connect_timeout')) {
      params.set('connect_timeout', '10')
    }
    if (!params.has('statement_cache_size')) {
      params.set('statement_cache_size', '0')
    }
    url.search = params.toString()
    return url.toString()
  } catch {
    return baseUrl
  }
}

const rawUrl = process.env.DATABASE_URL
if (rawUrl) {
  process.env.DATABASE_URL = addConnectionPoolingParams(rawUrl)
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export const checkDatabaseConnection = async (): Promise<boolean> => {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch {
    return false
  }
}
