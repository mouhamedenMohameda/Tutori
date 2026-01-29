/**
 * Extracteur de concepts/méthodes
 * 
 * Extrait le concept ou la méthode sous-jacente d'une question,
 * indépendamment des valeurs spécifiques ou de la formulation
 * 
 * Exemples:
 * - "2x+3=7" et "5x-2=13" → concept: "equation_premier_degre", méthode: "isoler_variable"
 * - "Comment calculer la vitesse?" et "Quelle formule pour v?" → concept: "vitesse", méthode: "v=d/t"
 */

export interface ExtractedConcept {
  concept: string; // Ex: "equation_premier_degre", "vitesse", "photosynthese"
  method?: string; // Ex: "isoler_variable", "v=d/t", "formule_quadratique"
  normalizedPattern?: string; // Ex: "ax+b=c", "v=d/t"
  subject: string; // "math", "physics", "science"
  confidence: number; // 0-1
}

/**
 * Normalise une équation en remplaçant les nombres par des placeholders
 * "2x+3=7" → "ax+b=c" (équation premier degré)
 * "x²-5x+6=0" → "ax²+bx+c=0" (équation second degré)
 */
function normalizeEquation(equation: string): { pattern: string; type: string } | null {
  const cleaned = equation.replace(/\s+/g, '').toLowerCase();
  
  // Pattern: équation premier degré ax+b=c
  const firstDegreePattern = /([+-]?\d*[a-z])\s*([+-]\d+)\s*=\s*(\d+)/;
  const firstMatch = cleaned.match(firstDegreePattern);
  if (firstMatch) {
    return { pattern: 'ax+b=c', type: 'equation_premier_degre' };
  }
  
  // Pattern: équation second degré ax²+bx+c=0
  const secondDegreePattern = /([+-]?\d*[a-z]\^?2?)\s*([+-]\d*[a-z]?)\s*([+-]\d+)\s*=\s*0/;
  const secondMatch = cleaned.match(secondDegreePattern);
  if (secondMatch) {
    return { pattern: 'ax²+bx+c=0', type: 'equation_second_degre' };
  }
  
  // Pattern: système d'équations
  if (cleaned.includes('{') || cleaned.match(/[a-z]\s*=\s*\d+\s*[a-z]\s*=\s*\d+/)) {
    return { pattern: 'systeme_equations', type: 'systeme_equations' };
  }
  
  return null;
}

/**
 * Extrait le concept d'une question via patterns et mots-clés
 */
function extractConceptFromText(text: string, subject?: string): ExtractedConcept | null {
  const lowerText = text.toLowerCase();
  
  // Détecter le sujet si non fourni
  const detectedSubject = subject || detectSubject(text);
  
  // Patterns pour concepts mathématiques
  if (detectedSubject === 'math') {
    // Équations
    if (lowerText.match(/résoud|solve|équation|equation|trouv.*x|isol.*x/)) {
      const eqMatch = text.match(/([0-9a-z+\-=\s^²³]+)/i);
      if (eqMatch) {
        const normalized = normalizeEquation(eqMatch[1]);
        if (normalized) {
          return {
            concept: normalized.type,
            method: 'isoler_variable',
            normalizedPattern: normalized.pattern,
            subject: 'math',
            confidence: 0.9
          };
        }
      }
      return {
        concept: 'equation',
        method: 'isoler_variable',
        subject: 'math',
        confidence: 0.7
      };
    }
    
    // Dérivées
    if (lowerText.match(/dériv|deriv|dérivée|dériver/)) {
      return {
        concept: 'derivee',
        method: 'regle_derivee',
        subject: 'math',
        confidence: 0.9
      };
    }
    
    // Intégrales
    if (lowerText.match(/intégr|integr|primitive/)) {
      return {
        concept: 'integrale',
        method: 'calcul_primitive',
        subject: 'math',
        confidence: 0.9
      };
    }
    
    // Probabilités
    if (lowerText.match(/probabil|probabilite|chance|p\(/)) {
      return {
        concept: 'probabilite',
        method: 'calcul_probabilite',
        subject: 'math',
        confidence: 0.9
      };
    }
  }
  
  // Patterns pour physique
  if (detectedSubject === 'physics') {
    // Vitesse
    if (lowerText.match(/vitesse|v\s*=|v\s*=\s*d\/t|calcul.*vitesse/)) {
      return {
        concept: 'vitesse',
        method: 'v=d/t',
        normalizedPattern: 'v=d/t',
        subject: 'physics',
        confidence: 0.9
      };
    }
    
    // Accélération
    if (lowerText.match(/accélér|acceleration|a\s*=|a\s*=\s*v\/t/)) {
      return {
        concept: 'acceleration',
        method: 'a=Δv/Δt',
        normalizedPattern: 'a=Δv/Δt',
        subject: 'physics',
        confidence: 0.9
      };
    }
    
    // Force
    if (lowerText.match(/force|f\s*=|f\s*=\s*m\s*\*\s*a|newton/)) {
      return {
        concept: 'force',
        method: 'f=ma',
        normalizedPattern: 'f=ma',
        subject: 'physics',
        confidence: 0.9
      };
    }
  }
  
  // Patterns pour sciences
  if (detectedSubject === 'science') {
    // Photosynthèse
    if (lowerText.match(/photosynth|photosynthese|chlorophylle/)) {
      return {
        concept: 'photosynthese',
        method: 'processus_biologique',
        subject: 'science',
        confidence: 0.9
      };
    }
    
    // Digestion
    if (lowerText.match(/digest|digestion|nutriments|enzymes/)) {
      return {
        concept: 'digestion',
        method: 'processus_biologique',
        subject: 'science',
        confidence: 0.9
      };
    }
  }
  
  return null;
}

/**
 * Détecte le sujet d'une question
 */
function detectSubject(text: string): string {
  const lowerText = text.toLowerCase();
  
  // Mots-clés mathématiques
  if (lowerText.match(/\b(équation|equation|dériv|deriv|intégr|integr|probabil|calcul|math|algèbre|algebre|x\s*=|y\s*=)\b/)) {
    return 'math';
  }
  
  // Mots-clés physique
  if (lowerText.match(/\b(vitesse|accélér|acceleration|force|newton|énergie|energie|mouvement|physique|v\s*=|a\s*=|f\s*=)\b/)) {
    return 'physics';
  }
  
  // Mots-clés sciences
  if (lowerText.match(/\b(cellule|organe|photosynth|photosynthese|digest|respiration|circulation|science|biologie)\b/)) {
    return 'science';
  }
  
  return 'general';
}

/**
 * Extrait le concept principal d'une question
 * Utilise une combinaison de patterns et d'IA si nécessaire
 */
export async function extractConcept(
  question: string,
  context?: {
    exerciseId?: string;
    partId?: string;
    subject?: string;
  }
): Promise<ExtractedConcept | null> {
  // 1. Essayer d'extraire via patterns (rapide, gratuit)
  const patternResult = extractConceptFromText(question, context?.subject);
  if (patternResult && patternResult.confidence > 0.7) {
    return patternResult;
  }
  
  // 2. Si pas de pattern clair, utiliser IA pour extraire le concept
  // (seulement si nécessaire, car coûteux)
  const USE_AI_EXTRACTION = process.env.AI_CONCEPT_EXTRACTION === 'true';
  
  if (USE_AI_EXTRACTION) {
    try {
      const { generateEducationalResponse } = await import('@/lib/gemini');
      
      const extractionPrompt = `Extrait le concept principal et la méthode de cette question en format JSON:
Question: "${question}"

Réponds UNIQUEMENT avec un JSON valide:
{
  "concept": "nom_du_concept",
  "method": "nom_de_la_methode",
  "subject": "math|physics|science",
  "normalizedPattern": "pattern_normalise_si_equation"
}

Exemples:
- "Comment résoudre 2x+3=7?" → {"concept": "equation_premier_degre", "method": "isoler_variable", "subject": "math", "normalizedPattern": "ax+b=c"}
- "Quelle formule pour calculer la vitesse?" → {"concept": "vitesse", "method": "v=d/t", "subject": "physics", "normalizedPattern": "v=d/t"}`;
      
      const aiResponse = await generateEducationalResponse(extractionPrompt);
      
      // Parser la réponse JSON
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const extracted = JSON.parse(jsonMatch[0]);
        return {
          concept: extracted.concept,
          method: extracted.method,
          normalizedPattern: extracted.normalizedPattern,
          subject: extracted.subject || 'general',
          confidence: 0.8
        };
      }
    } catch (error) {
      console.error('❌ Error in AI concept extraction:', error);
    }
  }
  
  // 3. Fallback: retourner concept général
  return {
    concept: 'general',
    subject: context?.subject || detectSubject(question),
    confidence: 0.5
  };
}

/**
 * Génère une clé de cache basée sur le concept plutôt que la question exacte
 */
export function getConceptCacheKey(concept: ExtractedConcept, context?: {
  exerciseId?: string;
  partId?: string;
}): string {
  const parts = [
    'concept:cache',
    concept.subject,
    concept.concept,
    concept.method || '',
    concept.normalizedPattern || '',
    context?.exerciseId || '',
    context?.partId || ''
  ];
  
  return parts.filter(Boolean).join(':');
}
