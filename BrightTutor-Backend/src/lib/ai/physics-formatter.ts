/**
 * Physics Formatter - Post-process AI responses to fix physics notation formatting
 * 
 * This function corrects common physics notation formatting errors in AI-generated responses
 * It should be called on ALL physics AI responses before displaying them
 */

import { formatDynamique } from './formatters/physics/dynamique-formatter';

/**
 * Format physics notation in text
 * Applies physics-specific formatters (dynamique, etc.)
 */
export function formatPhysicsInText(text: string): string {
  if (!text || typeof text !== "string") return text
  
  let result = text
  
  // Apply dynamique formatter (mouvement des projectiles)
  try {
    result = formatDynamique(result)
  } catch (e) {
    console.warn('⚠️ dynamique-formatter.ts not found, skipping dynamique formatting')
  }
  
  // Future formatters can be added here:
  // - formatElectromagnetisme
  // - formatThermodynamique
  // - formatMecanique
  // etc.
  
  return result
}
