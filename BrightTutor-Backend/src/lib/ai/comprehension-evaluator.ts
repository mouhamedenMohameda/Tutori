/**
 * Évalue le niveau de compréhension d'un étudiant pour une question donnée
 * en analysant ses interactions avec l'IA
 */

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

export interface ComprehensionLevel {
  level: 'beginner' | 'intermediate' | 'advanced' | 'mastered';
  score: number; // 0-100
  lastEvaluatedAt: string;
  reasoning?: string;
}

export interface ConversationContext {
  partId: string;
  partQuestion: string;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  previousPartsContext?: string; // Contexte des questions précédentes
}

/**
 * Évalue le niveau de compréhension basé sur les interactions
 */
export async function evaluateComprehensionLevel(
  context: ConversationContext
): Promise<ComprehensionLevel> {
  const { validateGeminiApiKey } = await import('./gemini-utils');
  const apiKey = validateGeminiApiKey();

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    generationConfig: {
      maxOutputTokens: 500,
      temperature: 0.3, // Plus bas pour une évaluation plus cohérente
      topP: 0.8,
    },
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  });

  const conversationSummary = context.messages
    .slice(-10) // Derniers 10 messages
    .map(msg => `${msg.role === 'user' ? 'Étudiant' : 'IA'}: ${msg.content}`)
    .join('\n\n');

  const prompt = `Tu es un expert en pédagogie qui évalue le niveau de compréhension d'un étudiant.

**QUESTION ACTUELLE:**
${context.partQuestion}

${context.previousPartsContext ? `**CONTEXTE DES QUESTIONS PRÉCÉDENTES:**\n${context.previousPartsContext}\n\n` : ''}

**INTERACTIONS RÉCENTES:**
${conversationSummary}

**MISSION:**
Évalue le niveau de compréhension de l'étudiant pour cette question en analysant:
1. La qualité de ses questions
2. Sa capacité à comprendre les explications
3. Sa progression dans la résolution
4. Les erreurs qu'il fait et comment il les corrige

**NIVEAUX:**
- **beginner** (0-30): L'étudiant ne comprend pas les concepts de base, pose des questions très basiques, a besoin d'explications détaillées
- **intermediate** (31-60): L'étudiant comprend partiellement, peut suivre les explications mais a encore des difficultés
- **advanced** (61-85): L'étudiant comprend bien, pose des questions pertinentes, progresse vers la solution
- **mastered** (86-100): L'étudiant maîtrise le concept, peut résoudre seul ou avec des indices minimes

**RÉPONSE ATTENDUE (JSON uniquement):**
{
  "level": "beginner|intermediate|advanced|mastered",
  "score": 0-100,
  "reasoning": "Explication courte (2-3 phrases) du niveau évalué"
}

Réponds UNIQUEMENT avec le JSON, sans texte supplémentaire.`;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();
    
    // Extraire le JSON de la réponse
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }

    const evaluation = JSON.parse(jsonMatch[0]) as {
      level: string;
      score: number;
      reasoning: string;
    };

    // Valider et normaliser
    const validLevels = ['beginner', 'intermediate', 'advanced', 'mastered'];
    const level = validLevels.includes(evaluation.level) 
      ? evaluation.level as ComprehensionLevel['level']
      : 'intermediate';
    
    const score = Math.max(0, Math.min(100, Math.round(evaluation.score)));

    return {
      level,
      score,
      lastEvaluatedAt: new Date().toISOString(),
      reasoning: evaluation.reasoning || `Niveau ${level} (${score}/100)`,
    };
  } catch (error) {
    console.error('Error evaluating comprehension:', error);
    // Retourner un niveau par défaut en cas d'erreur
    return {
      level: 'intermediate',
      score: 50,
      lastEvaluatedAt: new Date().toISOString(),
      reasoning: 'Évaluation non disponible',
    };
  }
}

/**
 * Détermine si l'étudiant peut passer à la question suivante
 * Basé sur le niveau de compréhension
 * Seuil: 60% de compréhension requis
 */
export function canProceedToNextPart(comprehensionLevel?: ComprehensionLevel): boolean {
  if (!comprehensionLevel) {
    return false; // Pas d'évaluation = ne peut pas passer
  }

  // Peut passer si score >= 60% (compréhension suffisante)
  return comprehensionLevel.score >= 60;
}
