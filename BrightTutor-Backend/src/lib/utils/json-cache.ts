/**
 * JSON Cache Helper - Optimizes repeated JSON.parse/stringify operations
 * 
 * This helper caches parsed JSON objects to avoid repeated parsing of the same strings.
 * Useful for fields that are frequently accessed but rarely change (like learningProgress, keyTopics, etc.)
 */

interface CacheEntry<T> {
  value: T;
  timestamp: number;
}

// In-memory cache with TTL (Time To Live)
// Key format: "studentId:fieldName" or "global:fieldName"
const cache = new Map<string, CacheEntry<any>>();
const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes default TTL

/**
 * Parse JSON string with caching
 * @param jsonString - The JSON string to parse
 * @param cacheKey - Unique cache key for this data
 * @param ttl - Time to live in milliseconds (default: 5 minutes)
 * @returns Parsed object or null if invalid
 */
export function parseWithCache<T = any>(
  jsonString: string | null | undefined,
  cacheKey: string,
  ttl: number = DEFAULT_TTL
): T | null {
  // Handle null/undefined/empty strings
  if (!jsonString || jsonString.trim() === '') {
    return null;
  }

  // Check cache first
  const cached = cache.get(cacheKey);
  const now = Date.now();

  if (cached && (now - cached.timestamp) < ttl) {
    // Cache hit - return cached value
    return cached.value as T;
  }

  // Cache miss - parse JSON
  try {
    const parsed = JSON.parse(jsonString) as T;
    
    // Store in cache
    cache.set(cacheKey, {
      value: parsed,
      timestamp: now
    });

    return parsed;
  } catch (error) {
    // Silently return null for invalid JSON (expected behavior)
    // Only log in development mode to avoid noise in production
    if (process.env.NODE_ENV === 'development') {
      console.debug(`JSON parse error for key "${cacheKey}":`, error);
    }
    return null;
  }
}

/**
 * Stringify object with caching (for cases where we stringify the same object multiple times)
 * Note: This is less common but can be useful for frequently stringified objects
 */
export function stringifyWithCache(
  obj: any,
  cacheKey: string,
  ttl: number = DEFAULT_TTL
): string {
  // Check cache first
  const cached = cache.get(cacheKey);
  const now = Date.now();

  if (cached && (now - cached.timestamp) < ttl) {
    // Check if object reference is the same (shallow comparison)
    // For deep comparison, we'd need a more sophisticated approach
    const cachedString = JSON.stringify(cached.value);
    const currentString = JSON.stringify(obj);
    
    if (cachedString === currentString) {
      return cachedString;
    }
  }

  // Cache miss or object changed - stringify
  try {
    const stringified = JSON.stringify(obj);
    
    // Store in cache
    cache.set(cacheKey, {
      value: obj,
      timestamp: now
    });

    return stringified;
  } catch (error) {
    console.error(`❌ JSON stringify error for key "${cacheKey}":`, error);
    return '{}';
  }
}

/**
 * Invalidate cache entry
 */
export function invalidateCache(cacheKey: string): void {
  cache.delete(cacheKey);
}

/**
 * Invalidate all cache entries for a specific prefix (e.g., all entries for a student)
 */
export function invalidateCachePrefix(prefix: string): void {
  const keysToDelete: string[] = [];
  
  // Use Array.from to iterate over Map keys (TypeScript compatibility)
  Array.from(cache.keys()).forEach(key => {
    if (key.startsWith(prefix)) {
      keysToDelete.push(key);
    }
  });
  
  keysToDelete.forEach(key => cache.delete(key));
}

/**
 * Clear all cache entries
 */
export function clearCache(): void {
  cache.clear();
}

/**
 * Get cache statistics (useful for monitoring)
 */
export function getCacheStats(): {
  size: number;
  keys: string[];
} {
  return {
    size: cache.size,
    keys: Array.from(cache.keys()) // Already using Array.from, this is correct
  };
}

