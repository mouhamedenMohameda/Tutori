/**
 * Cache utilities for Tutori
 * Supports Redis for production and in-memory cache for development
 */

// In-memory cache fallback (for development without Redis)
const memoryCache = new Map<string, { data: any; expires: number }>();

interface CacheOptions {
  ttl?: number; // Time to live in seconds
}

/**
 * Get cache key for student dashboard
 */
export function getDashboardCacheKey(studentId: string): string {
  return `dashboard:${studentId}`;
}

/**
 * Get cache key for student profile
 */
export function getProfileCacheKey(studentId: string): string {
  return `profile:${studentId}`;
}

/**
 * Get cache key for student assignments
 */
export function getAssignmentsCacheKey(studentId: string, page: number, limit: number): string {
  return `assignments:${studentId}:${page}:${limit}`;
}

/**
 * Get value from cache
 */
export async function getCache<T>(key: string): Promise<T | null> {
  // Try Redis first if available
  if (process.env.REDIS_URL) {
    try {
      const redis = await getRedisClient();
      if (redis) {
        const value = await redis.get(key);
        if (value) {
          return JSON.parse(value) as T;
        }
      }
    } catch (error) {
      console.warn('⚠️ Redis get error, falling back to memory cache:', error);
    }
  }

  // Fallback to memory cache
  const cached = memoryCache.get(key);
  if (cached && cached.expires > Date.now()) {
    return cached.data as T;
  }

  // Remove expired entry
  if (cached) {
    memoryCache.delete(key);
  }

  return null;
}

/**
 * Set value in cache
 */
export async function setCache(key: string, value: any, options: CacheOptions = {}): Promise<void> {
  const ttl = options.ttl || 300; // Default 5 minutes

  // Try Redis first if available
  if (process.env.REDIS_URL) {
    try {
      const redis = await getRedisClient();
      if (redis) {
        await redis.setex(key, ttl, JSON.stringify(value));
        return;
      }
    } catch (error) {
      console.warn('⚠️ Redis set error, falling back to memory cache:', error);
    }
  }

  // Fallback to memory cache
  memoryCache.set(key, {
    data: value,
    expires: Date.now() + ttl * 1000,
  });

  // Clean up expired entries periodically (every 5 minutes)
  if (memoryCache.size > 1000) {
    const now = Date.now();
    for (const [k, v] of memoryCache.entries()) {
      if (v.expires <= now) {
        memoryCache.delete(k);
      }
    }
  }
}

/**
 * Delete value from cache
 */
export async function deleteCache(key: string): Promise<void> {
  // Try Redis first if available
  if (process.env.REDIS_URL) {
    try {
      const redis = await getRedisClient();
      if (redis) {
        await redis.del(key);
        return;
      }
    } catch (error) {
      console.warn('⚠️ Redis delete error, falling back to memory cache:', error);
    }
  }

  // Fallback to memory cache
  memoryCache.delete(key);
}

/**
 * Delete cache by pattern (for invalidation)
 */
export async function deleteCachePattern(pattern: string): Promise<void> {
  // Try Redis first if available
  if (process.env.REDIS_URL) {
    try {
      const redis = await getRedisClient();
      if (redis) {
        const keys = await redis.keys(pattern);
        if (keys.length > 0) {
          await redis.del(...keys);
        }
        return;
      }
    } catch (error) {
      console.warn('⚠️ Redis delete pattern error, falling back to memory cache:', error);
    }
  }

  // Fallback to memory cache
  const regex = new RegExp(pattern.replace('*', '.*'));
  for (const key of memoryCache.keys()) {
    if (regex.test(key)) {
      memoryCache.delete(key);
    }
  }
}

/**
 * Get Redis client (lazy initialization)
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
      // Dynamic import to avoid requiring Redis in development
      const Redis = (await import('ioredis')).default;
      redisClient = new Redis(process.env.REDIS_URL || 'redis://localhost:6379', {
        maxRetriesPerRequest: 3,
        retryStrategy: (times: number) => {
          const delay = Math.min(times * 50, 2000);
          return delay;
        },
      });

      redisClient.on('error', (error: Error) => {
        console.error('❌ Redis error:', error);
        redisClient = null;
        redisClientPromise = null;
      });

      redisClient.on('connect', () => {
        console.log('✅ Redis connected');
      });

      return redisClient;
    } catch (error) {
      console.warn('⚠️ Redis not available, using memory cache:', error);
      redisClient = null;
      redisClientPromise = null;
      return null;
    }
  })();

  return redisClientPromise;
}

/**
 * Cache wrapper for async functions
 */
export async function withCache<T>(
  key: string,
  fn: () => Promise<T>,
  options: CacheOptions = {}
): Promise<T> {
  // Try to get from cache
  const cached = await getCache<T>(key);
  if (cached !== null) {
    return cached;
  }

  // Execute function and cache result
  const result = await fn();
  await setCache(key, result, options);

  return result;
}

/**
 * Invalidate student-related cache
 */
export async function invalidateStudentCache(studentId: string): Promise<void> {
  await Promise.all([
    deleteCachePattern(`dashboard:${studentId}*`),
    deleteCachePattern(`profile:${studentId}*`),
    deleteCachePattern(`assignments:${studentId}*`),
  ]);
}
