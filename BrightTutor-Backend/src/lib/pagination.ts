/**
 * Pagination utilities for API endpoints
 * Provides consistent pagination across all endpoints
 */

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginationResult<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

/**
 * Parse pagination parameters from request
 * @param request NextRequest object
 * @returns PaginationParams with defaults applied
 */
export function parsePaginationParams(request: Request): PaginationParams {
  const { searchParams } = new URL(request.url);
  
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
  const limit = Math.min(
    100, // Max limit
    Math.max(1, parseInt(searchParams.get('limit') || '20', 10) || 20)
  );

  return { page, limit };
}

/**
 * Calculate skip value for Prisma queries
 */
export function getSkip(page: number, limit: number): number {
  return (page - 1) * limit;
}

/**
 * Calculate total pages
 */
export function getTotalPages(total: number, limit: number): number {
  return Math.ceil(total / limit);
}

/**
 * Create pagination response
 */
export function createPaginationResponse<T>(
  data: T[],
  total: number,
  page: number,
  limit: number
): PaginationResult<T> {
  const totalPages = getTotalPages(total, limit);

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };
}

/**
 * Default pagination limits by endpoint type
 */
export const DEFAULT_LIMITS = {
  assignments: 20,
  chatHistory: 50,
  leaderboard: 20,
  students: 20,
  reports: 20,
} as const;
