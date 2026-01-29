/**
 * Token tracking utilities for AI API calls
 * Tracks token usage per student for BAC dashboard
 */

import { prisma } from '@/lib/prisma';

/**
 * Estimate tokens from text (rough approximation)
 * Gemini uses ~4 characters per token on average
 */
export function estimateTokens(text: string): number {
  if (!text) return 0;
  // Rough estimation: ~4 characters per token
  return Math.ceil(text.length / 4);
}

/**
 * Track tokens used by a student
 * Updates the totalTokensUsed field in the Student model
 */
export async function trackTokens(studentId: string, tokensUsed: number): Promise<void> {
  console.log(`🔍 trackTokens called: studentId=${studentId}, tokensUsed=${tokensUsed}`);
  
  if (!studentId || tokensUsed <= 0) {
    console.warn(`⚠️ Skipping token tracking: studentId=${studentId}, tokensUsed=${tokensUsed}`);
    return;
  }
  
  try {
    console.log(`📝 Updating tokens for student ${studentId}...`);
    const result = await prisma.student.update({
      where: { id: studentId },
      data: {
        totalTokensUsed: {
          increment: tokensUsed
        }
      },
      select: { totalTokensUsed: true }
    });
    console.log(`✅ Tracked ${tokensUsed} tokens for student ${studentId}. New total: ${result.totalTokensUsed}`);
  } catch (error: any) {
    console.error(`❌ Error tracking tokens for student ${studentId}:`, error);
    console.error(`❌ Error details:`, {
      message: error.message,
      code: error.code,
      meta: error.meta
    });
    // Don't throw - token tracking should not break the main flow
  }
}

/**
 * Get total tokens used by a student
 */
export async function getStudentTokens(studentId: string): Promise<number> {
  try {
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      select: { totalTokensUsed: true }
    });
    return student?.totalTokensUsed || 0;
  } catch (error) {
    console.error(`❌ Error getting tokens for student ${studentId}:`, error);
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
