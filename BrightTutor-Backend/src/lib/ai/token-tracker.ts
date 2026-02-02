/**
 * Token tracking utilities for AI API calls
 * Tracks token usage per student for BAC dashboard
 */

import { getDataSource } from '@/config/data-source';
import { Student } from '@/entities';

/**
 * Estimate tokens from text (rough approximation)
 * Gemini uses ~4 characters per token on average
 */
export function estimateTokens(text: string): number {
  if (!text) return 0;
  return Math.ceil(text.length / 4);
}

/**
 * Track tokens used by a student
 */
export async function trackTokens(studentId: string, tokensUsed: number): Promise<void> {
  if (!studentId || tokensUsed <= 0) return;
  try {
    const ds = await getDataSource();
    const repo = ds.getRepository(Student);
    const student = await repo.findOne({ where: { id: studentId }, select: ['id', 'totalTokensUsed'] });
    if (!student) return;
    const current = (student as { totalTokensUsed?: number }).totalTokensUsed ?? 0;
    await repo.update(studentId, { totalTokensUsed: current + tokensUsed });
  } catch (error: unknown) {
    console.error(`❌ Error tracking tokens for student ${studentId}:`, error);
  }
}

/**
 * Get total tokens used by a student
 */
export async function getStudentTokens(studentId: string): Promise<number> {
  try {
    const ds = await getDataSource();
    const repo = ds.getRepository(Student);
    const student = await repo.findOne({ where: { id: studentId }, select: ['totalTokensUsed'] });
    return (student as { totalTokensUsed?: number } | null)?.totalTokensUsed ?? 0;
  } catch {
    return 0;
  }
}

/**
 * Calculate cost in Ouguiya (MRU) based on tokens
 * Gemini 2.0 Flash pricing (approximate):
 * - Input: ~$0.075 per 1M tokens
 * - Output: ~$0.30 per 1M tokens
 * Average: ~$0.1875 per 1M tokens = ~$0.0000001875 per token
 * 1 USD ≈ 40 MRU (approximate)
 * Cost per token ≈ 0.0000001875 * 40 = 0.0000075 MRU per token
 */
export function calculateCostInMRU(tokens: number): number {
  // Cost per token in MRU (approximate)
  const COST_PER_TOKEN_MRU = 0.0000075;
  return tokens * COST_PER_TOKEN_MRU;
}
