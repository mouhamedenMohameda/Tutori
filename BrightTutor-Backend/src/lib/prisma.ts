// BrightTutor Prisma Client Configuration
// Singleton pattern for database connection

import { PrismaClient } from '@prisma/client'
// Conditionally import Node.js modules only when needed (not in Edge Runtime)
// Use dynamic imports to avoid bundling in Edge Runtime
let pathModule: typeof import('path') | null = null
let fsModule: typeof import('fs') | null = null

// Lazy load Node.js modules only in Node.js runtime
async function loadNodeModules() {
  if (typeof process.cwd === 'function' && !pathModule && process.env.NODE_ENV !== 'production') {
    try {
      pathModule = await import('path')
      fsModule = await import('fs')
    } catch (e) {
      // Edge Runtime - modules not available
    }
  }
}

/**
 * Add connection pooling parameters to DATABASE_URL for better performance under load
 * These parameters optimize PostgreSQL connections for 1000+ concurrent users
 */
function addConnectionPoolingParams(baseUrl: string): string {
  try {
    const url = new URL(baseUrl)
    
    // Get existing search params
    const params = new URLSearchParams(url.search)
    
    // Connection pool settings (only add if not already present)
    if (!params.has('connection_limit')) {
      // For 1000+ users: 20-50 connections per instance
      // Adjust based on your RDS instance size:
      // - db.t3.micro: 10-15
      // - db.t3.small: 15-20
      // - db.t3.medium: 20-30
      // - db.t3.large: 30-50
      params.set('connection_limit', process.env.DB_CONNECTION_LIMIT || '20')
    }
    
    if (!params.has('pool_timeout')) {
      // Timeout to get a connection from pool (seconds)
      params.set('pool_timeout', '20')
    }
    
    if (!params.has('connect_timeout')) {
      // Timeout to establish connection (seconds)
      params.set('connect_timeout', '10')
    }
    
    if (!params.has('statement_cache_size')) {
      // Cache prepared statements (0 = disabled, recommended for Prisma)
      params.set('statement_cache_size', '0')
    }
    
    // Prisma-specific optimizations
    if (!params.has('pgbouncer')) {
      // Use transaction pooling mode if using PgBouncer (optional)
      // params.set('pgbouncer', 'true')
    }
    
    // Reconstruct URL with new params
    url.search = params.toString()
    return url.toString()
  } catch (error) {
    // If URL parsing fails, return original URL
    console.warn('⚠️ Could not parse DATABASE_URL for connection pooling, using original URL')
    return baseUrl
  }
}

// Helper to get DATABASE_URL from .env.local explicitly (bypasses system env vars)
// Only works in Node.js runtime, not Edge Runtime
function getLocalDatabaseUrl(): string | undefined {
  if (process.env.NODE_ENV === 'production') {
    return process.env.DATABASE_URL
  }
  
  // In production or Edge Runtime, use process.env directly
  if (typeof process.cwd !== 'function' || !pathModule || !fsModule) {
    return process.env.DATABASE_URL
  }
  
  try {
    const envLocalPath = pathModule.resolve(process.cwd(), '.env.local')
    const envContent = fsModule.readFileSync(envLocalPath, 'utf-8')
    // Match DATABASE_URL=value (with optional spaces and quotes)
    const match = envContent.match(/^DATABASE_URL\s*=\s*(.+)$/m)
    if (match) {
      // Remove quotes if present and trim whitespace
      const value = match[1].trim().replace(/^["']|["']$/g, '')
      if (value) {
        return value
      }
    }
  } catch (error) {
    // .env.local doesn't exist or can't be read, fall back to process.env
  }
  
  return process.env.DATABASE_URL
}

// Explicitly load .env.local with override to ensure it takes precedence over system env vars
// This is critical for local development when system DATABASE_URL might be set
// IMPORTANT: Only use .env.local (not .env) to avoid Supabase connection issues
// NOTE: Skip dotenv in Edge Runtime (process.env available directly)
let databaseUrl: string | undefined
// In production, AWS Amplify provides env vars directly - no need for dotenv
// In development, we'll load .env.local manually without dotenv to avoid Edge Runtime issues
if (process.env.NODE_ENV !== 'production' && typeof process.cwd === 'function') {
  // Try to load .env.local manually (only in Node.js runtime, not Edge)
  // We'll do this synchronously at module load, but only if we're in Node.js
  try {
    // This will only work in Node.js runtime, not Edge
    const path = require('path')
    const fs = require('fs')
    pathModule = path
    fsModule = fs
    
    const envLocalPath = path.resolve(process.cwd(), '.env.local')
    if (fs.existsSync(envLocalPath)) {
      const envContent = fs.readFileSync(envLocalPath, 'utf-8')
      // Parse .env.local manually
      envContent.split('\n').forEach((line: string) => {
        const match = line.match(/^([^=:#]+)=(.*)$/)
        if (match) {
          const key = match[1].trim()
          let value = match[2].trim()
          // Remove quotes
          if ((value.startsWith('"') && value.endsWith('"')) || 
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1)
          }
          if (!process.env[key]) {
            process.env[key] = value
          }
        }
      })
      console.log('✅ Loaded .env.local file')
    } else {
      console.log('ℹ️ .env.local not found, using environment DATABASE_URL')
    }
  } catch (error) {
    // Edge Runtime or modules not available - use process.env directly
    console.log('ℹ️ Edge Runtime or modules unavailable, using environment DATABASE_URL')
  }
  
  // Get DATABASE_URL from .env.local explicitly (bypasses .env and system env vars)
  const localDbUrl = getLocalDatabaseUrl()
  if (localDbUrl) {
    // Validate it's not Supabase
    if (localDbUrl.includes('supabase.co')) {
      console.error('❌ ERROR: .env.local contains Supabase connection. Please use AWS DATABASE_URL instead.')
      throw new Error('Supabase connection detected in .env.local. Please use AWS DATABASE_URL.')
    }
    databaseUrl = localDbUrl
    // Add connection pooling parameters
    const optimizedUrl = addConnectionPoolingParams(localDbUrl)
    process.env.DATABASE_URL = optimizedUrl // Override any .env value
    console.log('✅ Using DATABASE_URL from .env.local (AWS) with connection pooling')
  } else {
    // Fallback to process.env.DATABASE_URL (check if it's from .env or environment)
    const envDbUrl = process.env.DATABASE_URL
    if (envDbUrl) {
      // Check if it's Supabase - if so, warn but allow (might be from AWS env var)
      if (envDbUrl.includes('supabase.co')) {
        console.error('❌ ERROR: DATABASE_URL points to Supabase. Please create .env.local with AWS connection.')
        console.error('   Supabase connection detected. Create .env.local file with your AWS DATABASE_URL.')
        throw new Error('Supabase connection detected. Please configure AWS DATABASE_URL in .env.local')
      }
      databaseUrl = envDbUrl
      // Add connection pooling parameters
      const optimizedUrl = addConnectionPoolingParams(envDbUrl)
      process.env.DATABASE_URL = optimizedUrl
      console.log('ℹ️ Using DATABASE_URL from environment variables with connection pooling')
    } else {
      console.warn('⚠️ No DATABASE_URL found. Please create .env.local with your AWS DATABASE_URL')
    }
  }
} else {
  // Production: use environment variable (AWS Amplify sets this)
  const prodDbUrl = process.env.DATABASE_URL
  if (prodDbUrl) {
    databaseUrl = addConnectionPoolingParams(prodDbUrl)
    process.env.DATABASE_URL = databaseUrl
    console.log('✅ Using production DATABASE_URL with connection pooling')
  } else {
    databaseUrl = prodDbUrl
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create PrismaClient - it will use process.env.DATABASE_URL which we've set above
// Connection pooling parameters are automatically added to DATABASE_URL:
// - connection_limit: Max connections in pool (default: 20, adjust based on RDS instance)
// - pool_timeout: Timeout to get connection from pool (default: 20s)
// - connect_timeout: Timeout to establish connection (default: 10s)
// - statement_cache_size: 0 (Prisma manages its own statement cache)
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error', 'warn'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Multi-tenant helper functions
export const createSchoolContext = (schoolId: string) => {
  return {
    where: {
      schoolId
    }
  }
}

// Safe query wrapper with error handling
export const safeQuery = async <T>(
  operation: () => Promise<T>
): Promise<{ data?: T; error?: string }> => {
  try {
    const data = await operation()
    return { data }
  } catch (error) {
    console.error('Database query error:', error)
    return { error: 'Database operation failed' }
  }
}

// Connection health check
export const checkDatabaseConnection = async (): Promise<boolean> => {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}

export default prisma 