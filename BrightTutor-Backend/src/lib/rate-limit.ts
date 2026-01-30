// Enhanced rate limiting utility with Redis support
// Falls back to memory store if Redis is not available

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

/** Any request-like (Web Request, Express Request, or adapter) for rate limiting */
export type RateLimitRequest = unknown

export interface RateLimitConfig {
  windowMs: number
  maxRequests: number
  keyGenerator?: (request: RateLimitRequest) => string
}

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetTime: number
  retryAfter?: number // Seconds until retry is allowed
}

/**
 * Get Redis client for rate limiting (lazy initialization)
 */
let redisClient: any = null;
let redisClientPromise: Promise<any> | null = null;

async function getRedisClient(): Promise<any> {
  if (redisClient) {
    return redisClient;
  }

  if (!process.env.REDIS_URL) {
    return null;
  }

  if (redisClientPromise) {
    return redisClientPromise;
  }

  redisClientPromise = (async () => {
    try {
      const Redis = (await import('ioredis')).default as unknown as new (url: string, opts?: object) => import('ioredis').Redis;
      redisClient = new Redis(process.env.REDIS_URL || 'redis://localhost:6379', {
        maxRetriesPerRequest: 3,
        retryStrategy: (times: number) => {
          const delay = Math.min(times * 50, 2000);
          return delay;
        },
      });

      redisClient.on('error', (error: Error) => {
        console.error('❌ Redis rate limit error:', error);
        redisClient = null;
        redisClientPromise = null;
      });

      return redisClient;
    } catch (error) {
      console.warn('⚠️ Redis not available for rate limiting, using memory store:', error);
      redisClient = null;
      redisClientPromise = null;
      return null;
    }
  })();

  return redisClientPromise;
}

/**
 * Rate limit using Redis (sliding window algorithm)
 */
async function rateLimitRedis(
  key: string,
  windowMs: number,
  maxRequests: number
): Promise<RateLimitResult> {
  const redis = await getRedisClient();
  if (!redis) {
    // Fallback to memory
    return rateLimitMemory(key, windowMs, maxRequests);
  }

  try {
    const now = Date.now();
    const windowStart = now - windowMs;
    const redisKey = `ratelimit:${key}`;

    // Use Redis sorted set for sliding window
    const requestId = `${now}-${Math.random()}`;

    // Add current request
    await redis.zadd(redisKey, now, requestId);

    // Remove old entries (outside window)
    await redis.zremrangebyscore(redisKey, 0, windowStart);

    // Count requests in window
    const count = await redis.zcard(redisKey);

    // Set expiration on the key
    await redis.expire(redisKey, Math.ceil(windowMs / 1000));

    const allowed = count <= maxRequests;
    const remaining = Math.max(0, maxRequests - count);
    const resetTime = now + windowMs;
    const retryAfter = allowed ? undefined : Math.ceil((resetTime - now) / 1000);

    return {
      allowed,
      remaining,
      resetTime,
      retryAfter,
    };
  } catch (error) {
    console.warn('⚠️ Redis rate limit error, falling back to memory:', error);
    return rateLimitMemory(key, windowMs, maxRequests);
  }
}

/**
 * Rate limit using memory store (fallback)
 */
function rateLimitMemory(
  key: string,
  windowMs: number,
  maxRequests: number
): RateLimitResult {
  const now = Date.now();
  let entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetTime) {
    // Reset or create new entry
    entry = {
      count: 0,
      resetTime: now + windowMs
    };
  }

  // Check if limit exceeded
  if (entry.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
      retryAfter: Math.ceil((entry.resetTime - now) / 1000),
    };
  }

  // Increment count
  entry.count++;
  rateLimitStore.set(key, entry);

  return {
    allowed: true,
    remaining: maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Create rate limiter with Redis support
 * Returns async function for Redis compatibility
 */
export function createRateLimiter(config: RateLimitConfig) {
  return async function rateLimit(request: RateLimitRequest): Promise<RateLimitResult> {
    const key = config.keyGenerator ? config.keyGenerator(request) : 'default';

    // Use Redis if available, otherwise fallback to memory
    if (process.env.REDIS_URL) {
      return await rateLimitRedis(key, config.windowMs, config.maxRequests);
    } else {
      return rateLimitMemory(key, config.windowMs, config.maxRequests);
    }
  };
}

// Predefined rate limit configurations
export const rateLimitConfigs = {
  // Authentication endpoints - strict limits
  auth: {
    windowMs: 15 * 60 * 1000,
    maxRequests: 5,
    keyGenerator: (request: RateLimitRequest) => {
      const r = request as { url?: string; headers?: { get(n: string): string | null }; ip?: string; path?: string; originalUrl?: string };
      const urlStr = r.url ?? r.originalUrl ?? '';
      const path = urlStr ? new URL(urlStr, 'http://x').pathname : (r.path ?? '');
      const ip = r.headers?.get?.('x-forwarded-for')?.split(',')[0]?.trim() ?? r.headers?.get?.('x-real-ip') ?? r.ip ?? 'unknown';
      return `auth:${ip}:${path}`;
    }
  },
  
  aiGeneration: {
    windowMs: 60 * 60 * 1000,
    maxRequests: 20,
    keyGenerator: (request: RateLimitRequest) => {
      const r = request as RateLimitRequest & { url?: string; originalUrl?: string; path?: string };
      const path = r.url ? new URL(r.url, 'http://x').pathname : (r.originalUrl ?? r.path ?? '');
      const authHeader = (r as { headers?: { get(n: string): string | null } }).headers?.get?.('authorization');
      const ip = (r as { headers?: { get(n: string): string | null }; ip?: string }).headers?.get?.('x-forwarded-for')?.split(',')[0]?.trim() ?? (r as { ip?: string }).ip ?? 'unknown';
      return `ai:${authHeader ? 'user' : 'anonymous'}:${ip}:${path}`;
    }
  },
  bacChat: {
    windowMs: 60 * 60 * 1000,
    maxRequests: 30,
    keyGenerator: (request: RateLimitRequest) => {
      const r = request as RateLimitRequest & { headers?: { get(n: string): string | null }; ip?: string };
      const authHeader = r.headers?.get?.('authorization');
      const ip = r.headers?.get?.('x-forwarded-for')?.split(',')[0]?.trim() ?? r.ip ?? 'unknown';
      return `bac:chat:${authHeader ? 'student' : 'anonymous'}:${ip}`;
    }
  },
  general: {
    windowMs: 60 * 60 * 1000,
    maxRequests: 1000,
    keyGenerator: (request: RateLimitRequest) => {
      const r = request as RateLimitRequest & { url?: string; originalUrl?: string; path?: string; headers?: { get(n: string): string | null }; ip?: string };
      const path = r.url ? new URL(r.url, 'http://x').pathname : (r.originalUrl ?? r.path ?? '');
      const ip = r.headers?.get?.('x-forwarded-for')?.split(',')[0]?.trim() ?? r.ip ?? 'unknown';
      return `general:${ip}:${path}`;
    }
  },
  dashboard: {
    windowMs: 60 * 1000,
    maxRequests: 60,
    keyGenerator: (request: RateLimitRequest) => {
      const r = request as RateLimitRequest & { headers?: { get(n: string): string | null }; ip?: string };
      const authHeader = r.headers?.get?.('authorization');
      const ip = r.headers?.get?.('x-forwarded-for')?.split(',')[0]?.trim() ?? r.ip ?? 'unknown';
      return `dashboard:${authHeader ? 'user' : 'anonymous'}:${ip}`;
    }
  }
}

/**
 * Helper to get rate limit headers for response
 */
export function getRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': result.remaining.toString(),
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': new Date(result.resetTime).toISOString(),
    ...(result.retryAfter ? { 'Retry-After': result.retryAfter.toString() } : {}),
  };
}

// Clean up old entries periodically (every 5 minutes)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    const keysToDelete: string[] = [];
    
    rateLimitStore.forEach((entry, key) => {
      if (now > entry.resetTime) {
        keysToDelete.push(key);
      }
    });
    
    keysToDelete.forEach(key => {
      rateLimitStore.delete(key);
    });
  }, 5 * 60 * 1000);
} 