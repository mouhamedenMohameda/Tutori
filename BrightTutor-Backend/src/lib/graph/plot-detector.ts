/**
 * Service de détection et d'extraction des demandes de tracé de courbes
 * Détecte les phrases comme "tracer la fonction x^2", "dessine la courbe de sin(x)", etc.
 */

export interface PlotRequest {
  expression: string
  detected: boolean
  confidence: number
  originalMessage: string
}

/**
 * Patterns pour détecter les demandes de tracé de courbes
 */
const PLOT_PATTERNS = [
  // Français - patterns améliorés pour mieux capturer les expressions
  /trace(?:r|z)?\s+(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(?:de\s+)?(.+?)(?:\s*$|\.|,|!|\?|$)/i,
  /trace(?:r|z)?\s+(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(.+)/i, // Pattern plus simple pour capturer tout ce qui suit
  /dessine(?:r)?\s+(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(?:de\s+)?(.+?)(?:\s*$|\.|,|!|\?|$)/i,
  /dessine(?:r)?\s+(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(.+)/i,
  /représente(?:r)?\s+(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(?:de\s+)?(.+?)(?:\s*$|\.|,|!|\?|$)/i,
  /représente(?:r)?\s+(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(.+)/i,
  /affiche(?:r)?\s+(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(?:de\s+)?(.+?)(?:\s*$|\.|,|!|\?|$)/i,
  /affiche(?:r)?\s+(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(.+)/i,
  /montre(?:r)?\s+(?:moi\s+)?(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(?:de\s+)?(.+?)(?:\s*$|\.|,|!|\?|$)/i,
  /montre(?:r)?\s+(?:moi\s+)?(?:la\s+)?(?:fonction|courbe|graphe|graphique)\s+(.+)/i,
  /(?:fonction|courbe|graphe|graphique)\s+(?:de\s+)?(.+?)\s+(?:s'il\s+te\s+plaît|stp|please)/i,
  
  // Patterns simplifiés pour capturer directement les expressions après "trace"
  /trace\s+(.+)/i,
  /dessine\s+(.+)/i,
  
  // Arabe (transliteration)
  /ارسم\s+(?:الدالة|المنحنى|الرسم)\s+(?:لـ\s+)?(.+?)(?:\s|$|\.|,|!|\?)/i,
  
  // Anglais
  /plot\s+(?:the\s+)?(?:function|curve|graph)\s+(?:of\s+)?(.+?)(?:\s|$|\.|,|!|\?)/i,
  /plot\s+(.+)/i, // Pattern simplifié
  /draw\s+(?:the\s+)?(?:function|curve|graph)\s+(?:of\s+)?(.+?)(?:\s|$|\.|,|!|\?)/i,
  /draw\s+(.+)/i,
  /show\s+(?:me\s+)?(?:the\s+)?(?:function|curve|graph)\s+(?:of\s+)?(.+?)(?:\s|$|\.|,|!|\?)/i,
  /graph\s+(?:the\s+)?(?:function|curve)\s+(?:of\s+)?(.+?)(?:\s|$|\.|,|!|\?)/i,
]

/**
 * Patterns pour extraire les expressions mathématiques
 */
const EXPRESSION_PATTERNS = [
  // Expressions simples : x^2, sin(x), etc.
  /([a-zA-Z]\s*\^?\s*\d+|sin\s*\([^)]+\)|cos\s*\([^)]+\)|tan\s*\([^)]+\)|ln\s*\([^)]+\)|log\s*\([^)]+\)|exp\s*\([^)]+\)|sqrt\s*\([^)]+\)|abs\s*\([^)]+\))/i,
  
  // Expressions avec opérateurs : x^2 + 2*x, etc.
  /([a-zA-Z]\s*\^?\s*\d+\s*[+\-*/]\s*[^,\s.]+)/i,
  
  // Expressions entre guillemets ou backticks
  /["'`]([^"'`]+)["'`]/,
  
  // Expressions après "=" ou ":"
  /(?:=|:)\s*([a-zA-Z0-9\s+\-*/^()]+?)(?:\s|$|\.|,|!|\?)/,
]

/**
 * Nettoie et normalise une expression mathématique extraite
 */
function cleanExpression(expression: string): string {
  let cleaned = expression.trim()
  
  // Ne pas nettoyer si c'est déjà une expression mathématique pure (commence par x, sin, cos, etc.)
  const isPureMathExpression = /^[a-zA-Z0-9\s+\-*/^().,]+$/.test(cleaned) && 
    /[a-zA-Z]/.test(cleaned) // Contient au moins une lettre
  
  if (isPureMathExpression && cleaned.length <= 50) {
    // C'est probablement déjà une expression mathématique pure, ne pas trop nettoyer
    cleaned = cleaned.replace(/\s+/g, ' ').trim()
    // Supprimer seulement les ponctuations en fin
    cleaned = cleaned.replace(/[.,;:!?]+$/, '')
    return cleaned
  }
  
  // Supprimer les mots parasites seulement au début
  cleaned = cleaned.replace(/^(?:la|le|de|du|des|fonction|courbe|graphe|graphique|f\(x\)|y\s*=\s*)\s+/gi, '')
  
  // Supprimer les ponctuations en fin
  cleaned = cleaned.replace(/[.,;:!?]+$/, '')
  
  // Normaliser les espaces
  cleaned = cleaned.replace(/\s+/g, ' ').trim()
  
  return cleaned
}

/**
 * Extrait une expression mathématique d'un texte
 */
function extractMathExpression(text: string): string | null {
  // Essayer d'abord les patterns d'expressions mathématiques
  for (const pattern of EXPRESSION_PATTERNS) {
    const match = text.match(pattern)
    if (match && match[1]) {
      const expression = cleanExpression(match[1])
      if (expression && expression.length > 0) {
        return expression
      }
    }
  }
  
  // Si aucun pattern ne correspond, chercher des expressions mathématiques communes
  // Chercher des patterns comme "x^2", "sin(x)", "x + 1", etc.
  const mathPattern = /([a-zA-Z]\s*\^?\s*\d+|sin\s*\([^)]+\)|cos\s*\([^)]+\)|tan\s*\([^)]+\)|ln\s*\([^)]+\)|log\s*\([^)]+\)|exp\s*\([^)]+\)|sqrt\s*\([^)]+\)|abs\s*\([^)]+\)|[a-zA-Z]\s*[+\-*/]\s*[a-zA-Z0-9]+)/i
  const mathMatch = text.match(mathPattern)
  if (mathMatch && mathMatch[1]) {
    return cleanExpression(mathMatch[1])
  }
  
  return null
}

/**
 * Détecte si un message contient une demande de tracé de courbe
 * et extrait l'expression mathématique
 */
export function detectPlotRequest(message: string): PlotRequest {
  const lowerMessage = message.toLowerCase()
  
  // Vérifier si le message contient des mots-clés de tracé
  const hasPlotKeywords = PLOT_PATTERNS.some(pattern => pattern.test(message))
  
  if (!hasPlotKeywords) {
    return {
      expression: '',
      detected: false,
      confidence: 0,
      originalMessage: message,
    }
  }
  
  // Essayer d'extraire l'expression avec les patterns de tracé
  let extractedExpression: string | null = null
  let bestMatch: string | null = null
  
  for (const pattern of PLOT_PATTERNS) {
    const match = message.match(pattern)
    if (match && match[1]) {
      const rawExpression = match[1].trim()
      // Garder la meilleure correspondance (la plus longue généralement)
      if (!bestMatch || rawExpression.length > bestMatch.length) {
        bestMatch = rawExpression
      }
    }
  }
  
  // Nettoyer l'expression extraite
  if (bestMatch) {
    extractedExpression = cleanExpression(bestMatch)
    console.log(`🔍 Plot detection - Raw: "${bestMatch}", Cleaned: "${extractedExpression}"`)
  }
  
  // Si aucun pattern ne fonctionne, essayer d'extraire une expression mathématique générale
  if (!extractedExpression || extractedExpression.length === 0) {
    extractedExpression = extractMathExpression(message)
    console.log(`🔍 Plot detection - Extracted from text: "${extractedExpression}"`)
  }
  
  if (extractedExpression && extractedExpression.length > 0) {
    console.log(`✅ Plot detected: "${extractedExpression}"`)
    return {
      expression: extractedExpression,
      detected: true,
      confidence: 0.9,
      originalMessage: message,
    }
  }
  
  // Détection avec faible confiance si on a les mots-clés mais pas d'expression claire
  console.log(`⚠️ Plot keywords detected but no expression found in: "${message}"`)
  return {
    expression: '',
    detected: true,
    confidence: 0.3,
    originalMessage: message,
  }
}

/**
 * Améliore l'extraction en utilisant le contexte de la conversation
 */
export function enhancePlotDetection(
  message: string,
  conversationHistory: Array<{ role: string; content: string }> = []
): PlotRequest {
  const basicDetection = detectPlotRequest(message)
  
  if (basicDetection.detected && basicDetection.expression) {
    return basicDetection
  }
  
  // Si pas d'expression trouvée, chercher dans l'historique récent
  if (basicDetection.detected && !basicDetection.expression) {
    // Chercher dans les 3 derniers messages
    const recentMessages = conversationHistory.slice(-3)
    for (const msg of recentMessages) {
      if (msg.role === 'user') {
        const expression = extractMathExpression(msg.content)
        if (expression) {
          return {
            expression,
            detected: true,
            confidence: 0.6,
            originalMessage: message,
          }
        }
      }
    }
  }
  
  return basicDetection
}

