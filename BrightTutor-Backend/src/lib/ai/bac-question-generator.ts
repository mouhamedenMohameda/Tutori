/**
 * BAC QUESTION GENERATOR - Génération dynamique avec validation
 * 
 * Génère les questions à partir du curriculum comme template
 * Valide mathématiquement chaque question générée
 */

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, type GenerativeModel } from '@google/generative-ai';
import { formatMathInText } from './math-formatter';

/** Détecte une erreur 429 (rate limit) de l'API Gemini */
function is429Error(err: unknown): boolean {
  if (err && typeof err === 'object') {
    const e = err as { status?: number; message?: string };
    if (e.status === 429) return true;
    const msg = String(e.message ?? '').toLowerCase();
    return msg.includes('429') || msg.includes('too many requests') || msg.includes('resource exhausted');
  }
  return false;
}

/** Appel generateContent avec retry sur 429 et backoff exponentiel (évite d'échouer sur la première question 1a) */
const MAX_429_RETRIES = 5;
const INITIAL_429_DELAY_MS = 1000;

async function generateContentWith429Retry(
  model: GenerativeModel,
  prompt: string,
  label: string
): Promise<Awaited<ReturnType<GenerativeModel['generateContent']>>> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= MAX_429_RETRIES; attempt++) {
    try {
      return await model.generateContent(prompt);
    } catch (err) {
      lastError = err;
      if (!is429Error(err) || attempt === MAX_429_RETRIES) throw err;
      const delayMs = INITIAL_429_DELAY_MS * Math.pow(2, attempt);
      console.warn(`❌ Erreur 429 (Rate Limit) lors de la génération pour ${label}. Tentative de retry avec backoff...`);
      if (attempt > 0) {
        console.log(`🔄 Retry après erreur 429 pour ${label}...`);
      }
      console.log(`⏳ Attente de ${delayMs}ms avant nouvelle tentative...`);
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  throw lastError;
}

export interface ExerciseTemplate {
  exerciseId: string;
  title: string;
  description: string;
  concepts: string[];
  objectives: string[];
  difficulty: string;
  partSequence: string[];
  enonceComplet?: string;
}

/**
 * Mappe les concepts aux parties pour créer des dépendances logiques
 * EXPORTÉ pour les tests
 */
export function mapConceptsToParts(
  concepts: string[],
  objectives: string[],
  partSequence: string[]
): Map<string, { concepts: string[]; objectives: string[]; dependsOn: string[] }> {
  const partMap = new Map<string, { concepts: string[]; objectives: string[]; dependsOn: string[] }>();
  
  // Grouper les concepts par type pour créer une progression logique
  const basicConcepts: string[] = [];
  const intermediateConcepts: string[] = [];
  const advancedConcepts: string[] = [];
  
  concepts.forEach(concept => {
    const lower = concept.toLowerCase();
    // Concepts de base (définitions, calculs simples)
    if (lower.includes('défini') || lower.includes('calculer') || lower.includes('coordonnées') || 
        lower.includes('probabilité') || lower.includes('événement') || lower.includes('loi')) {
      basicConcepts.push(concept);
    }
    // Concepts intermédiaires (applications, propriétés)
    else if (lower.includes('conditionnel') || lower.includes('indépendant') || lower.includes('espérance') ||
             lower.includes('variance') || lower.includes('produit scalaire') || lower.includes('dérivée')) {
      intermediateConcepts.push(concept);
    }
    // Concepts avancés (compositions, applications complexes)
    else {
      advancedConcepts.push(concept);
    }
  });
  
  // Distribuer les concepts sur les parties selon leur position dans la séquence
  partSequence.forEach((partId, index) => {
    const dependsOn: string[] = [];
    
    // Les premières parties (1a, 1b, 1c) dépendent de rien
    if (/^1[a-c]$/i.test(partId)) {
      dependsOn.push('base'); // Marqueur pour "définitions de base"
    } else {
      // Trouver les parties précédentes
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        dependsOn.push(partSequence[prevIndex]);
      }
      // Pour les parties 2+, dépendre aussi de la partie 1 si elle existe
      if (index > 0 && !partId.startsWith('1')) {
        const firstPart = partSequence.find(p => /^1[a-c]?$/i.test(p));
        if (firstPart) dependsOn.push(firstPart);
      }
    }
    
    // Distribuer les concepts selon la position
    let partConcepts: string[] = [];
    let partObjectives: string[] = [];
    
    if (index === 0 || /^1[a-c]$/i.test(partId)) {
      // Première partie: concepts de base
      partConcepts = basicConcepts.slice(0, Math.ceil(basicConcepts.length / 3));
      partObjectives = objectives.filter(obj => 
        obj.toLowerCase().includes('calculer') || 
        obj.toLowerCase().includes('définir') ||
        obj.toLowerCase().includes('identifier')
      ).slice(0, 2);
    } else if (index < partSequence.length / 2) {
      // Parties intermédiaires: concepts intermédiaires + quelques concepts de base
      partConcepts = [
        ...intermediateConcepts.slice(0, Math.ceil(intermediateConcepts.length / 2)),
        ...basicConcepts.slice(Math.ceil(basicConcepts.length / 3))
      ];
      partObjectives = objectives.filter(obj =>
        obj.toLowerCase().includes('montrer') ||
        obj.toLowerCase().includes('déterminer') ||
        obj.toLowerCase().includes('utiliser')
      ).slice(0, 2);
    } else {
      // Parties avancées: concepts avancés + concepts intermédiaires
      partConcepts = [
        ...advancedConcepts,
        ...intermediateConcepts.slice(Math.ceil(intermediateConcepts.length / 2))
      ];
      partObjectives = objectives.filter(obj =>
        obj.toLowerCase().includes('déduire') ||
        obj.toLowerCase().includes('appliquer') ||
        obj.toLowerCase().includes('composer')
      ).slice(0, 2);
    }
    
    // Si pas assez de concepts, prendre tous les concepts disponibles
    if (partConcepts.length === 0) {
      partConcepts = concepts;
    }
    if (partObjectives.length === 0) {
      partObjectives = objectives;
    }
    
    partMap.set(partId, {
      concepts: partConcepts.length > 0 ? partConcepts : concepts,
      objectives: partObjectives.length > 0 ? partObjectives : objectives,
      dependsOn
    });
  });
  
  return partMap;
}

// ExerciseTemplate is already exported above as interface

export interface GeneratedPart {
  partId: string;
  question: string;
  type: 'calcul' | 'demonstration' | 'geometrie';
  difficulty: string;
  validated: boolean;
  validationErrors?: string[];
  tokensUsed?: number;
}

/**
 * Génère une question pour une partie donnée basée sur le template
 */
/**
 * Extrait et construit une question explicite depuis l'énoncé complet
 */
function extractExplicitQuestionFromEnonce(
  enonceComplet: string,
  partId: string
): string | null {
  if (!enonceComplet) return null;
  
  // Normaliser le partId pour la recherche (1a, 1b, 2a, etc.)
  const normalizedPartId = partId.trim().toLowerCase();
  
  // Extraire la définition de base (fonction, polynôme, etc.) - généralement au début
  // Chercher jusqu'à la première ligne qui commence par un chiffre (première partie)
  const lines = enonceComplet.split('\n');
  let baseDefinition = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.match(/^(On considère|Soit)/i)) {
      // Prendre cette ligne et les suivantes jusqu'à la première partie
      baseDefinition = line;
      // Continuer à accumuler jusqu'à trouver un chiffre au début d'une ligne
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim().match(/^\d/)) break;
        if (lines[j].trim()) {
          baseDefinition += ' ' + lines[j].trim();
        }
      }
      break;
    }
  }
  
  if (!baseDefinition) return null;
  
  // Chercher la partie spécifique dans l'énoncé
  // Patterns possibles: "1. a)", "1a)", "1 a)", etc.
  const partPatterns = [
    // Pattern: "1. a) texte" ou "1 a) texte"
    new RegExp(`(?:^|\\n)\\s*${normalizedPartId.replace(/(\d+)([a-z])/, '$1\\.?\\s*$2')}\\s*[)\\)]\\s*([^\\n]+)`, 'i'),
    // Pattern: "1a) texte"
    new RegExp(`(?:^|\\n)\\s*${normalizedPartId}\\s*[)\\)]\\s*([^\\n]+)`, 'i'),
  ];
  
  let partText = '';
  for (const pattern of partPatterns) {
    const match = enonceComplet.match(pattern);
    if (match && match[1]) {
      partText = match[1].trim();
      // Nettoyer (enlever les points entre parenthèses comme "(0.75pt)")
      partText = partText.replace(/\s*\([^)]*\)\s*$/, '').trim();
      break;
    }
  }
  
  // Si on a trouvé la partie et la définition de base, construire la question explicite
  if (baseDefinition && partText) {
    // Convertir en LaTeX si nécessaire
    let formattedDefinition = baseDefinition;
    // Convertir f(x) = en $f(x) = $ si pas déjà en LaTeX
    if (!formattedDefinition.includes('$')) {
      // Extraire f(x) = ... ou P(z) = ...
      formattedDefinition = formattedDefinition
        .replace(/(f\(x\)\s*=\s*[^,\n]+)/gi, (match) => {
          // Vérifier si c'est déjà en LaTeX
          if (!match.includes('$')) {
            return `$$${match}$$`;
          }
          return match;
        })
        .replace(/(P\(z\)\s*=\s*[^,\n]+)/gi, (match) => {
          if (!match.includes('$')) {
            return `$$${match}$$`;
          }
          return match;
        });
    }
    
    // Construire la question explicite avec la définition complète
    const question = `**Partie ${partId}) ${partText}**\n\n${formattedDefinition}\n\n${partText}`;
    return question;
  }
  
  return null;
}

export async function generatePartQuestion(
  template: ExerciseTemplate,
  partId: string,
  previousParts?: GeneratedPart[]
): Promise<GeneratedPart> {
  // Mapper les concepts aux parties pour créer des dépendances
  const conceptMap = mapConceptsToParts(template.concepts, template.objectives, template.partSequence);
  const partInfo = conceptMap.get(partId);
  const partConcepts = partInfo?.concepts || template.concepts;
  const partObjectives = partInfo?.objectives || template.objectives;
  const dependsOnParts = partInfo?.dependsOn || [];
  // 🔥 DÉSACTIVÉ: Ne plus extraire depuis l'énoncé - toujours générer avec l'IA pour avoir de la variété
  // L'extraction retournait toujours la même question, donc on force la génération par l'IA
  // if (template.enonceComplet) {
  //   const explicitQuestion = extractExplicitQuestionFromEnonce(template.enonceComplet, partId);
  //   if (explicitQuestion) {
  //     console.log(`✅ Question explicite extraite directement de l'énoncé complet pour ${partId}`);
  //     const formattedQuestion = formatMathInText(explicitQuestion);
  //     const validation = validateQuestion(formattedQuestion, partId, template);
  //     return {
  //       partId,
  //       question: formattedQuestion,
  //       type: detectQuestionType(formattedQuestion),
  //       difficulty: template.difficulty,
  //       validated: validation.isValid,
  //       validationErrors: validation.errors
  //     };
  //   }
  // }
  
  // Détecter si c'est une première partie (1a, 1b, 1c)
  const isFirstPart = /^1[a-c]$/i.test(partId);
  
  // Détecter si c'est un exercice d'étude de fonction
  const isFunctionStudy = template.concepts.some(c => 
    c.toLowerCase().includes('fonction') || 
    c.toLowerCase().includes('dérivée') ||
    c.toLowerCase().includes('variation') ||
    c.toLowerCase().includes('limite')
  ) || template.title.toLowerCase().includes('fonction') || 
     template.description.toLowerCase().includes('fonction');
  
  // Détecter si c'est un exercice "exponentielle et suites"
  const isExponentielleSuites = template.title.toLowerCase().includes('exponentielle') && 
                                (template.title.toLowerCase().includes('suites') || 
                                 template.description.toLowerCase().includes('suites') ||
                                 template.concepts.some(c => c.toLowerCase().includes('suite')));
  
  // Add variation instruction if this is a new generation (exerciseId contains timestamp)
  const isNewGeneration = template.exerciseId.includes('-gen-') || template.exerciseId.match(/-\d{10,}$/);

  // Construire le contexte des parties précédentes avec leurs résultats/éléments clés
  // ⚠️ CRITIQUE: Ce contexte est essentiel pour maintenir les dépendances entre parties
  const previousContext = previousParts && previousParts.length > 0
    ? previousParts
        .filter(p => dependsOnParts.includes(p.partId) || dependsOnParts.includes('base'))
        .map(p => {
          const prevPartInfo = conceptMap.get(p.partId);
          const prevConcepts = prevPartInfo?.concepts || [];
          
          // Extraire les éléments clés de chaque partie précédente (variables, résultats, définitions)
          const question = p.question;
          // Identifier les variables définies (ex: $z_0$, $P(z)$, $f(x)$, $h$, $r$, etc.)
          const variables = question.match(/\$([a-z_0-9]+\(?[a-z_0-9]*\)?)\$/gi) || [];
          // Identifier les résultats/équations importantes
          const equations = question.match(/\$[^$]*=[^$]*\$/g) || [];
          // Identifier les transformations définies (h, r, f, S, etc.)
          const transformations = question.match(/\b([hrfs]|homothétie|rotation|symétrie|similitude)\s*[=:]/gi) || [];
          // Identifier les valeurs numériques calculées (angles, rapports, centres, probabilités, etc.)
          const numericalValues = question.match(/(?:angle|rapport|centre|k|θ|π\/\d+|\d+\/2|-\d+\/\d+|P\([A-Z]\)\s*=\s*\d|E\(X\)|Var\(X\))/gi) || [];
          // Identifier les probabilités calculées
          const probabilities = question.match(/P\([^)]+\)\s*=\s*[\d.]+/gi) || [];
          // Identifier les lois définies
          const laws = question.match(/(?:X|Y|Z)\s*~\s*(?:B|N|Pois|Exp|Geo|Bern)\([^)]+\)/gi) || [];
          
          return `**Partie ${p.partId} - Concepts: ${prevConcepts.join(', ')}**\n${question}\n\n**Éléments établis (À UTILISER OBLIGATOIREMENT DANS LA PARTIE ${partId}):**\n${variables.length > 0 ? `- Variables définies: ${[...new Set(variables)].join(', ')}\n` : ''}${transformations.length > 0 ? `- Transformations: ${[...new Set(transformations)].join(', ')}\n` : ''}${probabilities.length > 0 ? `- Probabilités calculées: ${[...new Set(probabilities)].join(', ')}\n` : ''}${laws.length > 0 ? `- Lois définies: ${[...new Set(laws)].join(', ')}\n` : ''}${numericalValues.length > 0 ? `- Valeurs numériques: ${[...new Set(numericalValues)].join(', ')}\n` : ''}${equations.length > 0 ? `- Équations importantes: ${equations.join(', ')}` : ''}`;
        }).join('\n\n---\n\n')
    : '';

  // Utiliser la même méthode que pour le cours
  const { validateGeminiApiKey } = await import('./gemini-utils');
  const apiKey = validateGeminiApiKey();
  const genAI = new GoogleGenerativeAI(apiKey);
  
  // Augmenter la température pour toutes les nouvelles générations afin d'encourager plus de variété
  // Température encore plus élevée pour "exponentielle et suites" pour forcer la variation
  const baseTemperature = 0.8;
  let temperature = baseTemperature;
  if (isFirstPart && isNewGeneration) {
    temperature = 0.95;
  }
  if (isExponentielleSuites && isFirstPart) {
    // Température maximale pour forcer la variation des fonctions exponentielles
    temperature = 1.0;
  }
  
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    generationConfig: {
      maxOutputTokens: 2000,
      temperature: temperature, // Température plus élevée pour les fonctions afin de varier davantage
      topP: 0.95,
      topK: 40,
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
  
  // Instruction générale de variation pour TOUS les chapitres lors d'une nouvelle génération
  const generalVariationInstruction = (isNewGeneration && isFirstPart)
    ? `\n\n🔥🔥🔥 **CRITIQUE - NOUVELLE GÉNÉRATION - VARIATION OBLIGATOIRE POUR TOUS LES CHAPITRES:**\n
Cette question fait partie d'une NOUVELLE génération d'exercice. 

🚨 **RÈGLE ABSOLUE - TU DOIS CHANGER COMPLÈTEMENT LES ÉLÉMENTS CONCRETS:**

1. **NE PAS utiliser les mêmes valeurs/exemples de l'énoncé de référence:**
   - Change TOUTES les valeurs numériques (coefficients, angles, probabilités, points, etc.)
   - Change les exemples et cas particuliers
   - Varie les configurations et structures mathématiques
   - Utilise des formulations différentes
   
2. **CHANGER la structure ET les valeurs:**
   - Ne te contente PAS de changer juste quelques nombres
   - CHANGE la structure mathématique quand c'est possible (ex: quotient → polynôme, triangle rectangle en B → triangle rectangle en A, etc.)
   - Varie le type d'objets mathématiques utilisés
   
3. **EXEMPLES DE VARIATIONS PAR TYPE D'EXERCICE:**
   
   **FONCTIONS:**
   - Référence: f(x) = (x² - 1)/(x + 2)
   - ✅ BON: f(x) = x³ - 2x² + x - 1 (structure différente)
   - ✅ BON: f(x) = √(x² - 9) (type différent)
   - ❌ MAUVAIS: f(x) = (x² - 2)/(x + 3) (même structure)
   
   **FONCTIONS EXPONENTIELLES (CRITIQUE - VARIATION OBLIGATOIRE):**
   - Référence: f(x) = 3 / (2 + e^(-2x))
   - ✅ BON: f(x) = 5 / (1 + e^(3x)) (coefficients ET exposant différents)
   - ✅ BON: f(x) = 2e^x / (e^x + 1) (structure différente: numérateur avec e^x)
   - ✅ BON: f(x) = 4 / (3 - e^(-x)) (signe différent dans le dénominateur)
   - ✅ BON: f(x) = e^(2x) / (e^(2x) + 3) (structure complètement différente)
   - ✅ BON: f(x) = 1 / (1 + 2e^(-x)) (coefficients différents)
   - ❌ MAUVAIS: f(x) = 4 / (2 + e^(-2x)) (juste le coefficient du numérateur changé)
   - ❌ MAUVAIS: f(x) = 3 / (3 + e^(-2x)) (juste le coefficient du dénominateur changé)
   - ❌ MAUVAIS: f(x) = 3 / (2 + e^(-3x)) (juste l'exposant changé)
   
   **RÈGLE SPÉCIALE POUR EXPONENTIELLES:**
   - CHANGE au moins 2 éléments parmi: coefficient numérateur, coefficient dénominateur, exposant, signe, structure
   - Varie la structure: quotient avec constante, quotient avec e^x au numérateur, forme 1/(1+ae^(bx)), etc.
   - Utilise des exposants différents: -x, -2x, -3x, x, 2x, 3x, etc.
   - Change les signes: + devient -, - devient +
   - Ne JAMAIS utiliser f(x) = 3 / (2 + e^(-2x)) ou des variantes trop proches!
   
   **GÉOMÉTRIE:**
   - Référence: triangle rectangle en B avec angle π/6
   - ✅ BON: triangle rectangle en A avec angle π/4
   - ✅ BON: triangle isocèle avec angle π/3
   - ❌ MAUVAIS: triangle rectangle en B avec angle π/5 (même configuration)
   
   **PROBABILITÉS:**
   - Référence: urne avec 5 boules blanches et 3 noires
   - ✅ BON: urne avec 4 boules blanches et 5 noires
   - ✅ BON: dé à 6 faces avec probabilités différentes
   - ❌ MAUVAIS: urne avec 6 boules blanches et 4 noires (trop similaire)
   
   **NOMBRES COMPLEXES:**
   - Référence: P(z) = z³ - (8+i)z² + 21z - 8 + 19i
   - ✅ BON: P(z) = z³ - (5+2i)z² + 12z - 3 + 7i (coefficients différents)
   - ✅ BON: P(z) = z⁴ - 3z² + 2z - 1 (degré différent)
   - ❌ MAUVAIS: P(z) = z³ - (9+i)z² + 22z - 9 + 20i (trop similaire)
   
   **SUITES:**
   - Référence: u₀ = 5, u_{n+1} = 2u_n - 3
   - ✅ BON: u₀ = 3, u_{n+1} = 3u_n - 2
   - ✅ BON: u₁ = 1, u_{n+1} = (u_n + 4)/2
   - ❌ MAUVAIS: u₀ = 6, u_{n+1} = 2u_n - 4 (trop similaire)
   
4. **GARDE OBLIGATOIREMENT:**
   - ✅ Les MÊMES concepts et notions à réviser
   - ✅ Le MÊME nombre de parties
   - ✅ La MÊME structure pédagogique
   - ✅ Le MÊME contexte général (domaine mathématique)
   - ✅ Les MÊMES objectifs d'apprentissage
   
5. **CHANGE OBLIGATOIREMENT:**
   - ❌ Les valeurs numériques concrètes
   - ❌ Les exemples et cas particuliers
   - ❌ Les configurations géométriques (quand applicable)
   - ❌ Les structures mathématiques (quand possible)
   - ❌ Les formulations et approches

**IMPORTANT:** Si tu génères un exercice trop similaire à la référence (même structure avec juste quelques nombres changés), la question sera rejetée. Sois CRÉATIF et VARIE vraiment les éléments concrets tout en gardant les concepts!\n\n`
    : '';
  
  const variationInstruction = isNewGeneration 
    ? `\n\n🎲 **GÉNÉRATION DE VARIANTE - IMPORTANT:**\nCette question fait partie d'une NOUVELLE génération d'exercice. Tu DOIS créer une question DIFFÉRENTE des versions précédentes:\n- Utilise des valeurs numériques DIFFÉRENTES\n- Varie les formulations et les approches\n- Change les exemples et les cas particuliers\n- Garde les mêmes concepts mais avec des variantes créatives\n- Évite de répéter exactement les mêmes questions\n\n`
    : '';
  
  // Instruction spéciale pour "exponentielle et suites" - FORCER la variation même sans nouvelle génération
  const exponentielleSuitesVariation = (isExponentielleSuites && isFirstPart)
    ? `\n\n🔥🔥🔥 **CRITIQUE - VARIATION OBLIGATOIRE POUR EXPONENTIELLE ET SUITES:**\n
Cette question fait partie du chapitre "Fonction exponentielle et suites". 

🚨 **RÈGLE ABSOLUE - TU DOIS CHANGER COMPLÈTEMENT LA FONCTION:**

**FONCTIONS INTERDITES (NE JAMAIS UTILISER):**
❌ f(x) = 3 / (2 + e^(-2x)) - INTERDIT (trop utilisé)
❌ f(x) = 1 / (1 + e^x) - INTERDIT (énoncé de référence)
❌ f(x) = 2 / (1 + e^(-x)) - INTERDIT (trop similaire)
❌ f(x) = 4 / (3 + e^(-2x)) - INTERDIT (juste coefficients changés)

**FONCTIONS AUTORISÉES (VARIE VRAIMENT):**
✅ f(x) = 5 / (1 + e^(3x)) - BON (coefficients ET exposant différents)
✅ f(x) = 2e^x / (e^x + 1) - BON (structure différente: e^x au numérateur)
✅ f(x) = 4 / (3 - e^(-x)) - BON (signe différent dans dénominateur)
✅ f(x) = e^(2x) / (e^(2x) + 3) - BON (structure complètement différente)
✅ f(x) = 1 / (1 + 2e^(-x)) - BON (coefficient différent dans e^(-x))
✅ f(x) = 6 / (4 + 3e^(-x)) - BON (coefficients différents)
✅ f(x) = (e^x - 1) / (e^x + 1) - BON (structure différente: différence au numérateur)
✅ f(x) = 2 / (1 + e^(2x)) - BON (exposant positif)
✅ f(x) = 3e^(-x) / (1 + e^(-x)) - BON (e^(-x) au numérateur)

**RÈGLES DE VARIATION:**
1. CHANGE au moins 2 éléments parmi: coefficient numérateur, coefficient dénominateur, exposant, signe, structure
2. Varie la structure: quotient avec constante, quotient avec e^x au numérateur, forme 1/(1+ae^(bx)), différence, etc.
3. Utilise des exposants différents: -x, -2x, -3x, x, 2x, 3x, etc.
4. Change les signes: + devient -, - devient +
5. Ne JAMAIS utiliser f(x) = 3 / (2 + e^(-2x)) ou des variantes trop proches!

**EXEMPLE CONCRET:**
- ❌ MAUVAIS: f(x) = 4 / (2 + e^(-2x)) (juste le 3 changé en 4)
- ✅ BON: f(x) = 5 / (1 + e^(3x)) (coefficients ET exposant différents)
- ✅ BON: f(x) = 2e^x / (e^x + 1) (structure complètement différente)

**IMPORTANT:** Si tu génères f(x) = 3 / (2 + e^(-2x)) ou une variante trop proche, la question sera rejetée. Sois CRÉATIF!\n\n`
    : '';

  // Détecter si c'est un exercice de géométrie dans l'espace
  const isGeometrie = template.title.toLowerCase().includes('géométrie') || 
                      template.title.toLowerCase().includes('geometrie') ||
                      template.concepts.some(c => 
                        c.toLowerCase().includes('géométrie') || 
                        c.toLowerCase().includes('geometrie') ||
                        c.toLowerCase().includes('espace') ||
                        c.toLowerCase().includes('plan') ||
                        c.toLowerCase().includes('vecteur') ||
                        c.toLowerCase().includes('produit scalaire') ||
                        c.toLowerCase().includes('équation cartésienne')
                      );
  
  const geometrieInstructions = isGeometrie ? `\n\n📐 **INSTRUCTIONS SPÉCIALES POUR GÉOMÉTRIE DANS L'ESPACE (CRITIQUE - OBLIGATOIRE):**
🚨 **RÈGLE ABSOLUE:** Toutes les questions de géométrie dans l'espace DOIVENT être COMPLÈTEMENT DÉTAILLÉES avec TOUS les éléments nécessaires.

**POUR "DÉTERMINER UNE ÉQUATION CARTÉSIENNE D'UN PLAN" (INTERDIT D'ÊTRE GÉNÉRAL):**
❌ **MAUVAIS (INTERDIT):** "Déterminer une équation cartésienne d'un plan"
✅ **BON (OBLIGATOIRE):** "Soient les points $A(2; -1; 4)$, $B(5; 2; 1)$ et $C(4; 1; -1)$ de l'espace muni d'un repère orthonormé $(O, \\vec{i}, \\vec{j}, \\vec{k})$. Déterminer une équation cartésienne du plan $(ABC)$."

**STRUCTURE OBLIGATOIRE POUR TOUTES LES QUESTIONS DE GÉOMÉTRIE:**
1. **DONNÉES EXPLICITES (OBLIGATOIRE):**
   - TOUJOURS donner les coordonnées COMPLÈTES de TOUS les points utilisés: $A(x_A; y_A; z_A)$, $B(x_B; y_B; z_B)$, etc.
   - TOUJOURS mentionner le repère: "de l'espace muni d'un repère orthonormé $(O, \\vec{i}, \\vec{j}, \\vec{k})$"
   - Si des vecteurs sont utilisés, donner leurs coordonnées: $\\vec{u}(a; b; c)$
   - Si un plan a une équation, la donner explicitement: "le plan $\\mathcal{P}$ d'équation $ax + by + cz + d = 0$"

2. **EXEMPLES CONCRETS PAR TYPE DE QUESTION:**

   **Équation cartésienne d'un plan:**
   ✅ "Soient les points $A(1; 2; 3)$, $B(4; 1; 0)$ et $C(2; 3; 1)$ de l'espace muni d'un repère orthonormé. Déterminer une équation cartésienne du plan $(ABC)$."
   ✅ "Dans l'espace muni d'un repère orthonormé, on considère le plan $\\mathcal{P}$ passant par le point $A(2; -1; 4)$ et de vecteur normal $\\vec{n}(3; -2; 1)$. Déterminer une équation cartésienne du plan $\\mathcal{P}$."
   ✅ "Soient les points $A(1; 0; 2)$, $B(3; 1; -1)$ et $C(0; 2; 1)$ de l'espace. Le plan $(ABC)$ a pour équation cartésienne $ax + by + cz + d = 0$. Déterminer les coefficients $a$, $b$, $c$ et $d$."

   **Distance d'un point à un plan:**
   ✅ "Dans l'espace muni d'un repère orthonormé, on considère le plan $\\mathcal{P}$ d'équation $2x - 3y + z - 5 = 0$ et le point $A(1; 2; -1)$. Calculer la distance du point $A$ au plan $\\mathcal{P}$."
   ✅ "Soient les points $A(2; -1; 4)$, $B(5; 2; 1)$, $C(4; 1; -1)$ et $D(3; 2; -1)$ de l'espace. Le plan $(ABC)$ a pour équation cartésienne $-3x - 2y - z + 12 = 0$. Calculer la distance du point $D$ au plan $(ABC)$."

   **Produit scalaire et orthogonalité:**
   ✅ "Soient les points $A(2; -1; 4)$, $B(5; 2; 1)$, $C(4; 1; -1)$ et $D(3; 2; -1)$ de l'espace muni d'un repère orthonormé. Calculer les produits scalaires $\\overrightarrow{AB} \\cdot \\overrightarrow{BC}$ et $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$."
   ✅ "Dans l'espace muni d'un repère orthonormé, on considère les vecteurs $\\vec{u}(2; -1; 3)$ et $\\vec{v}(1; 4; -2)$. Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont-ils orthogonaux ?"

   **Projection orthogonale:**
   ✅ "Soient les points $A(2; -1; 4)$, $B(5; 2; 1)$, $C(4; 1; -1)$ et $D(3; 2; -1)$ de l'espace. On admet que $\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = 0$ et $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 3$. Montrer que $C$ est le projeté orthogonal de $B$ sur la droite $(CD)$."

3. **CE QUI EST INTERDIT (NE JAMAIS FAIRE):**
   ❌ "Déterminer une équation cartésienne d'un plan" (sans points ni données)
   ❌ "Calculer la distance d'un point à un plan" (sans donner le point ni l'équation du plan)
   ❌ "Montrer que deux vecteurs sont orthogonaux" (sans donner les vecteurs)
   ❌ Utiliser des variables non définies ($A$, $B$, $\\vec{u}$, etc. sans coordonnées)

4. **CE QUI EST OBLIGATOIRE:**
   ✅ TOUJOURS commencer par "Soient les points ..." ou "Dans l'espace muni d'un repère orthonormé, on considère ..."
   ✅ TOUJOURS donner les coordonnées COMPLÈTES de TOUS les points: $A(x; y; z)$
   ✅ TOUJOURS mentionner le repère orthonormé
   ✅ TOUJOURS donner les équations complètes si elles sont utilisées
   ✅ TOUJOURS donner les coordonnées des vecteurs si utilisés

**IMPORTANT:** Si tu génères une question de géométrie dans l'espace sans TOUTES les données nécessaires (points avec coordonnées, repère, équations, etc.), la question sera REJETÉE. Sois COMPLET et EXPLICITE!\n\n` : '';

  // Détecter si c'est un exercice de logarithmes/exponentielles
  const isLogExp = template.concepts.some(c => 
    c.toLowerCase().includes('logarithme') || 
    c.toLowerCase().includes('exponentielle') ||
    template.title.toLowerCase().includes('logarithme') ||
    template.title.toLowerCase().includes('exponentielle')
  );
  
  const logExpInstructions = isLogExp ? `\n\n📐 **INSTRUCTIONS SPÉCIALES POUR LOGARITHMES/EXPONENTIELLES:**
- **Pour les logarithmes népériens (ln):**
  * Domaine OBLIGATOIRE: $(0, +\\infty)$ - NE JAMAIS OUBLIER
  * Commence par: "Soit $f$ la fonction définie sur $(0, +\\infty)$ par $f(x) = \\ln(x)$" ou similaire
  * Pour les équations: Donne l'équation complète (ex: "$\\ln(x) = 2$" ou "$\\ln(x^2 + 1) = 3$")
  * Pour les limites: Spécifie toujours la valeur (ex: "$\\lim_{x \\to 0^+} \\ln(x) = -\\infty$")
  * Pour les dérivées: Donne la fonction complète avant (ex: "Soit $f(x) = \\ln(2x + 1)$, calculer $f'(x)$")
  
- **Pour les exponentielles (exp ou e^x):**
  * Domaine: $\\mathbb{R}$ (toujours)
  * Commence par: "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = e^x$" ou "$f(x) = e^{2x + 1}$"
  * Pour les équations: Donne l'équation complète (ex: "$e^x = 5$" ou "$e^{2x} = 3$")
  * Pour les limites: Spécifie (ex: "$\\lim_{x \\to +\\infty} e^x = +\\infty$")
  * Pour les dérivées: Donne la fonction complète avant
  
- **Pour les puissances a^b:**
  * Domaine dépend de la base: si $a > 0$, alors $a^b$ est défini pour tout $b \\in \\mathbb{R}$
  * Commence par: "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 2^x$" ou "$f(x) = 3^{x+1}$"
  
- **IMPORTANT:**
  * TOUJOURS inclure le domaine de définition (CRITIQUE pour ln: $x > 0$)
  * TOUJOURS donner l'expression complète de la fonction
  * Pour les équations, donner l'équation complète avec toutes les valeurs
  * Pour les limites, spécifier vers quelle valeur $x$ tend
  * Pour les dérivées, donner la fonction complète avant de demander la dérivée
  * Ne jamais utiliser de variables non définies\n` : '';

  const prompt = `Tu es un expert en mathématiques qui crée des exercices de BAC pour des étudiants mauritaniens.

🚨 **RÈGLE ABSOLUE - LIS CECI EN PREMIER:**
La question que tu génères DOIT être **100% AUTONOME et EXPLICITE**. Un étudiant qui lit SEULEMENT ta question (sans contexte, sans parties précédentes, sans énoncé) DOIT pouvoir la comprendre et la résoudre.

${geometrieInstructions}
${logExpInstructions}
${exponentielleSuitesVariation}
${generalVariationInstruction}
${variationInstruction}

${isFirstPart ? `🔥 **ATTENTION: C'EST UNE PREMIÈRE PARTIE (${partId}) - RÈGLES ULTRA-STRICTES APPLIQUÉES:**
- Tu DOIS définir TOUS les éléments de base de l'exercice
- Tu DOIS être ULTRA-EXPLICITE - ne laisse RIEN à deviner
- Tu DOIS donner TOUTES les définitions, valeurs numériques, domaines, conditions
- Un étudiant qui lit ta question SEULE doit pouvoir la résoudre SANS contexte
- Les parties suivantes dépendront de ce que tu définis ici, donc sois TRÈS PRÉCIS
- Commence TOUJOURS par "Soit ..." ou "On considère ..." avec la définition COMPLÈTE
- Donne TOUTES les valeurs numériques nécessaires explicitement
- Formule la question de manière CLAIRE avec un verbe d'action (Calculer, Montrer, Déterminer, etc.)

**EXEMPLE DE STRUCTURE OBLIGATOIRE POUR ${partId}:**
1. **DÉFINITION COMPLÈTE** (ligne 1): "Soit ... défini(e) sur ... par ..." avec TOUTES les informations
2. **DONNÉES NUMÉRIQUES** (si nécessaire): Toutes les valeurs, probabilités, paramètres
3. **QUESTION CLARE** (ligne 2): "Calculer/Montrer/Déterminer ..." avec référence aux éléments définis

**SI TU NE SUIS PAS CES RÈGLES, TA QUESTION SERA REJETÉE.**\n\n` : ''}

**CE QUI EST INTERDIT:**
❌ "Calculer $f'(x)$" sans définir $f$
❌ "Montrer que $z_0$ est solution" sans définir le polynôme
❌ Utiliser des variables non définies
❌ Faire référence à des éléments non mentionnés

**CE QUI EST OBLIGATOIRE:**
✅ Commencer par "Soit $f$ la fonction définie sur $D$ par $f(x) = ...$"
✅ Donner TOUTES les définitions nécessaires
✅ Mentionner TOUS les domaines de définition
✅ Inclure TOUTES les valeurs numériques

**CONTEXTE DE L'EXERCICE:**
- Titre: ${template.title}
- Description: ${template.description}
- Difficulté générale: ${template.difficulty}

**CONCEPTS SPÉCIFIQUES POUR CETTE PARTIE (${partId}):**
${partConcepts.map((c, i) => `${i + 1}. ${c}`).join('\n')}

**OBJECTIFS PÉDAGOGIQUES POUR CETTE PARTIE:**
${partObjectives.map((o, i) => `${i + 1}. ${o}`).join('\n')}

**CONCEPTS DE L'EXERCICE COMPLET (RÉFÉRENCE):**
${template.concepts.join(', ')}

**OBJECTIFS DE L'EXERCICE COMPLET (RÉFÉRENCE):**
${template.objectives.join(', ')}

🎯 **GÉNÉRATION DYNAMIQUE - VARIANTES CRÉATIVES AVEC DÉPENDANCES:**
Tu dois créer une **NOUVELLE VARIANTE** de question pour cette partie, pas une copie exacte. Voici les règles:

1. **CONSERVE LES CONCEPTS ET NOTIONS:**
   - Utilise PRINCIPALEMENT les concepts spécifiques listés pour cette partie (${partId})
   - Tu peux aussi faire référence aux autres concepts de l'exercice si nécessaire
   - Respecte les objectifs pédagogiques spécifiques à cette partie
   - Maintiens le niveau de difficulté
   - ⚠️ IMPORTANT: Chaque partie doit couvrir ses concepts spécifiques tout en s'appuyant sur les parties précédentes

2. **CRÉE DES VARIANTES COHÉRENTES:**
   - Change les valeurs numériques (angles, coefficients, points, probabilités, etc.) MAIS maintiens la cohérence avec les parties précédentes
   - Varie les formulations tout en gardant le même type de question
   - Utilise des configurations géométriques différentes mais équivalentes
   - Modifie les expressions algébriques et change la structure quand c'est possible (pas juste les coefficients)
   - ⚠️ IMPORTANT: Si tu changes une valeur dans une partie, les parties suivantes doivent utiliser cette nouvelle valeur
   ${isNewGeneration && isFirstPart ? `\n   - 🔥 **POUR NOUVELLE GÉNÉRATION:** Change COMPLÈTEMENT les éléments concrets (structure, valeurs, exemples) tout en gardant les concepts. Ne te contente pas de changer quelques nombres!` : ''}

3. **EXEMPLES DE VARIANTES AVEC DÉPENDANCES:**
   - Si Partie 1 utilise "angle π/6", tu peux créer une variante avec "angle π/4" MAIS toutes les parties suivantes doivent utiliser π/4
   - Si Partie 2 définit "homothétie h(A) = I avec rapport k = -1/2", tu peux varier en "h(B) = J avec rapport k = -1/3" MAIS les parties suivantes doivent utiliser cette nouvelle définition
   - Les transformations définies dans les parties précédentes DOIVENT être utilisées dans les parties suivantes

4. **COHÉRENCE MATHÉMATIQUE ET DÉPENDANCES:**
   - Les variantes doivent être mathématiquement valides
   - Garde la même structure logique de l'exercice
   - Assure-toi que la question reste résolvable au niveau BAC
   - ⚠️ CRITIQUE: Les parties doivent s'enchaîner logiquement - chaque partie peut dépendre des précédentes

${template.enonceComplet ? `\n\n**ÉNONCÉ COMPLET DE RÉFÉRENCE (POUR COMPRENDRE LA STRUCTURE, PAS POUR COPIER):**\n${template.enonceComplet}\n\n**INSTRUCTIONS:**
1. L'énoncé ci-dessus est une RÉFÉRENCE pour comprendre la structure et les concepts
2. Tu DOIS créer une VARIANTE, pas une copie exacte
3. Pour la Partie ${partId}, crée une question qui:
   - Aborde les MÊMES concepts et notions
   - Utilise des valeurs/paramètres/structures DIFFÉRENTS
   - Garde la même structure pédagogique
   - Reste cohérente avec l'exercice global
4. Exemple: Si l'énoncé de référence utilise "angle π/6", tu peux utiliser "angle π/4" ou "angle π/3"
5. Exemple: Si l'énoncé utilise "triangle rectangle en B", tu peux utiliser "triangle rectangle en A" ou une autre configuration équivalente${isNewGeneration && isFirstPart ? `\n\n🔥 **ATTENTION SPÉCIALE - NOUVELLE GÉNÉRATION:**
Pour TOUS les types d'exercices, tu DOIS:
- CHANGER COMPLÈTEMENT les éléments concrets (fonctions, polynômes, triangles, urnes, suites, etc.), pas juste les coefficients/nombres
- Utiliser des structures/types DIFFÉRENTS quand c'est possible
- Ne PAS utiliser la même structure avec juste des nombres différents
- Exemples:
  * Fonctions: f(x) = (x² - 1)/(x + 2) → f(x) = x³ - 2x + 1 OU f(x) = √(x² - 4)
  * Géométrie: triangle rectangle en B avec angle π/6 → triangle rectangle en A avec angle π/4
  * Probabilités: urne 5 blanches/3 noires → urne 4 blanches/5 noires OU dé à 6 faces
  * Nombres complexes: P(z) = z³ - (8+i)z² + ... → P(z) = z⁴ - 3z² + ... (degré différent)
  * Suites: u₀ = 5, u_{n+1} = 2u_n - 3 → u₀ = 3, u_{n+1} = 3u_n - 2
- MAIS garde les mêmes notions et concepts à réviser` : ''}` : ''}

${previousContext ? `**PARTIES PRÉCÉDENTES (CRITIQUE - DÉPENDANCES OBLIGATOIRES):**\n${previousContext}\n\n🚨 **RÈGLE ABSOLUE DE COHÉRENCE ET DÉPENDANCE:**
1. **UTILISER LES RÉSULTATS PRÉCÉDENTS (OBLIGATOIRE):**
   - Tu DOIS utiliser TOUS les éléments établis dans les parties précédentes listées ci-dessus
   - Si une partie précédente a défini une fonction $f$, une transformation $h$, un polynôme $P$, un événement $A$, une variable aléatoire $X$, etc., tu DOIS l'utiliser dans ta question
   - Si une partie précédente a calculé une valeur (ex: $z_0 = -i$, $k = -1/2$, $P(A) = 0.6$, $E(X) = 3$), tu DOIS référencer cette valeur exacte
   - Si une partie précédente a établi une propriété (ex: "h est une homothétie de centre O et rapport k", "$A$ et $B$ sont indépendants"), tu DOIS t'en servir
   - ⚠️ CRITIQUE: Ne redéfinis PAS les éléments déjà définis dans les parties précédentes - utilise-les directement

2. **MAINTENIR LA COHÉRENCE MATHÉMATIQUE:**
   - Les variantes doivent rester compatibles avec les parties précédentes
   - Si la Partie 1 a défini un triangle avec un angle π/6, et que tu crées une variante avec π/4, assure-toi que les parties suivantes utilisent π/4 aussi
   - Les transformations définies dans les parties précédentes doivent être utilisées dans les parties suivantes

3. **EXEMPLES DE DÉPENDANCES PAR DOMAINE:**

   **PROBABILITÉS:**
   - Si Partie 1a définit: "$\\Omega$ l'univers, $A$ et $B$ avec $P(A) = 0.6$, $P(B) = 0.4$, $P(A \\cap B) = 0.2$" → Partie 1b peut calculer $P(A | B)$ en utilisant ces valeurs
   - Si Partie 1b calcule: "$P(A | B) = 0.5$" → Partie 1c peut utiliser cette probabilité conditionnelle pour vérifier l'indépendance
   - Si Partie 1c établit: "$A$ et $B$ sont indépendants" → Partie 2a peut utiliser cette propriété pour calculer $P(A \\cup B)$
   - Si Partie 2a définit: "$X \\sim B(10, 0.3)$" → Partie 2b peut calculer $E(X) = 3$ et $\\text{Var}(X) = 2.1$
   - Si Partie 2b calcule: "$E(X) = 3$" → Partie 2c peut utiliser cette espérance pour calculer $E(2X + 1)$

   **GÉOMÉTRIE:**
   - Si Partie 1 définit: "triangle rectangle en B avec angle π/6" → Partie 2 peut utiliser ce triangle
   - Si Partie 2 définit: "homothétie h de centre O et rapport k = -1/2" → Partie 3 peut utiliser h dans une composition
   - Si Partie 3 calcule: "rotation r d'angle θ" → Partie 4 peut composer h ∘ r
   - Si Partie 4 établit: "S = h ∘ r est une similitude" → Partie 5 peut calculer S², S³, etc.

   **FONCTIONS:**
   - Si Partie 1 définit: "$f(x) = \\frac{x^2 + 3x - 1}{x - 2}$" → Partie 2 peut calculer $f'(x)$
   - Si Partie 2 calcule: "$f'(x) = \\frac{x^2 - 4x + 5}{(x-2)^2}$" → Partie 3 peut dresser le tableau de variation
   - Si Partie 3 établit: "$f$ est croissante sur $]-\\infty, 2[$" → Partie 4 peut calculer les limites
   ${isNewGeneration && isFirstPart ? `\n   - 🔥 **VARIATION OBLIGATOIRE POUR NOUVELLE GÉNÉRATION:** Pour TOUS les types d'exercices, change COMPLÈTEMENT les éléments concrets (fonctions, polynômes, triangles, urnes, suites, etc.) tout en gardant les concepts. Ne répète pas la même structure avec juste des nombres différents!` : ''}

4. **VARIANTES AVEC DÉPENDANCES:**
   - Tu peux créer des variantes (changer les valeurs) MAIS tu DOIS maintenir la cohérence
   - Si tu changes l'angle de π/6 à π/4 dans une partie, les parties suivantes doivent utiliser π/4
   - Si tu changes le rapport d'homothétie de -1/2 à -1/3, les parties suivantes doivent utiliser -1/3
   - Les dépendances mathématiques doivent être respectées

5. **STRUCTURE DE TA QUESTION AVEC DÉPENDANCES:**
   - Commence par rappeler les définitions/résultats des parties précédentes si nécessaire
   - Exemple probabilités: "Soit $\\Omega$ l'univers et $A$, $B$ les événements définis dans la partie précédente avec $P(A) = 0.6$ et $P(B) = 0.4$..."
   - Exemple géométrie: "Soit $h$ l'homothétie définie dans la partie précédente de centre $O$ et de rapport $k = -1/2$..."
   - Exemple fonctions: "En utilisant la fonction $f$ définie dans la partie précédente par $f(x) = ...$..."
   - Exemple variables aléatoires: "Soit $X$ la variable aléatoire définie dans la partie précédente qui suit $X \\sim B(10, 0.3)$..."
   - Utilise ces éléments pour construire ta question qui DOIT s'appuyer sur eux
   - Assure-toi que ta question s'appuie logiquement sur les parties précédentes
   - ⚠️ IMPORTANT: Ta question doit être une CONTINUATION logique des parties précédentes, pas une question isolée
   - Pour les probabilités: Si la partie précédente a calculé $P(A)$, utilise cette valeur dans ta question
   - Pour les fonctions: Si la partie précédente a calculé $f'(x)$, utilise cette dérivée dans ta question
   - Pour les variables aléatoires: Si la partie précédente a calculé $E(X)$, utilise cette espérance dans ta question

**IMPORTANT:** Les variantes créatives sont autorisées, mais elles doivent créer un exercice COHÉRENT où chaque partie s'appuie sur les précédentes.\n\n` : ''}

**MISSION CRITIQUE:**
Génère **UNE SEULE QUESTION EXPLICITE ET COMPLÈTE** pour la **Partie ${partId}** de cet exercice. 

🎨 **IMPORTANT - VARIANTE CRÉATIVE:**
- Crée une NOUVELLE variante, pas une copie exacte
- Change les valeurs numériques, configurations, structures mathématiques, ou formulations
- Garde les mêmes concepts et notions à réviser
- Assure la cohérence mathématique et pédagogique
${isNewGeneration && isFirstPart ? `\n- 🔥 **POUR NOUVELLE GÉNÉRATION:** Change COMPLÈTEMENT les éléments concrets (structure, valeurs, exemples) pour TOUS les types d'exercices. Ne te contente pas de changer quelques nombres - varie vraiment la structure mathématique quand c'est possible!` : ''}

🚨 **RÈGLE ABSOLUE:** La question DOIT être **AUTONOME et COMPLÈTE**. Un étudiant qui lit SEULEMENT cette question doit pouvoir la comprendre et la résoudre SANS avoir besoin d'informations supplémentaires.

**RÈGLES CRITIQUES:**
1. **QUESTION EXPLICITE ET COMPLÈTE (OBLIGATOIRE - PAS D'EXCEPTION):**
   - La question DOIT contenir TOUS les éléments nécessaires : données, variables, formules, conditions, domaines de définition
   - Ne laisse AUCUN élément implicite - tout doit être EXPLICITEMENT mentionné
   - Si une fonction est utilisée, donne sa définition COMPLÈTE avec le domaine : "Soit $f$ la fonction définie sur $D_f$ par $f(x) = ...$"
   - Si un polynôme est utilisé, donne son expression COMPLÈTE : "Soit $P$ le polynôme défini sur $\\mathbb{C}$ par $P(z) = ...$"
   - Si des conditions sont nécessaires, mentionne-les explicitement : "où $x \\in \\mathbb{R}$", "avec $z \\in \\mathbb{C}$", etc.
   - Si des valeurs numériques sont nécessaires, donne-les explicitement
   - Format: "**Partie ${partId}) [Type de question]**\n\n[Énoncé COMPLET et EXPLICITE avec TOUTES les définitions]"
   - La question doit être autonome et compréhensible sans contexte supplémentaire
   - ❌ MAUVAIS: "Calculer la dérivée de $f$" (où est la définition de $f$?)
   - ✅ BON: "Soit $f$ la fonction définie sur $\\mathbb{R} \\setminus \\{2\\}$ par $f(x) = \\frac{x^2 + 3x - 1}{x - 2}$. Calculer la dérivée $f'(x)$."

2. **UNE SEULE QUESTION PAR PARTIE:**
   - Génère UNIQUEMENT une question, pas plusieurs
   - Ne génère PAS de sous-questions (pas de a), b), c) dans cette partie)

3. **RELATIONS AVEC LES PARTIES PRÉCÉDENTES (DÉPENDANCES OBLIGATOIRES):**
   ${previousContext ? `🚨 **RÈGLE CRITIQUE:** Tu DOIS utiliser les éléments établis dans les parties précédentes.
   
   **OBLIGATOIRE:**
   - Utilise TOUTES les transformations définies (ex: $h$, $r$, $f$, $S$) dans les parties précédentes
   - Utilise TOUTES les valeurs numériques calculées (angles, rapports, centres, etc.)
   - Utilise TOUTES les variables définies (ex: $P(z)$, $z_0$, points géométriques, etc.)
   - Si une partie précédente a défini une homothétie $h$ de centre $O$ et rapport $k = -1/2$, tu DOIS utiliser cette définition
   - Si une partie précédente a calculé un angle $θ = π/4$, tu DOIS utiliser cette valeur
   - Si une partie précédente a établi une propriété, tu DOIS t'en servir
   
   **STRUCTURE DE TA QUESTION:**
   - Commence par rappeler les définitions/résultats des parties précédentes si nécessaire
   - Exemple: "Soit $h$ l'homothétie définie dans la partie précédente de centre $O$ et de rapport $k = -1/2$..."
   - Exemple: "En utilisant la rotation $r$ déterminée dans la partie précédente d'angle $θ = π/4$..."
   - Utilise ces éléments pour construire ta question
   - Assure-toi que ta question s'appuie logiquement sur les parties précédentes
   
   **VARIANTES AVEC DÉPENDANCES:**
   - Tu peux créer des variantes MAIS tu DOIS maintenir la cohérence avec les parties précédentes
   - Si une partie précédente a utilisé un angle $π/6$, tu peux créer une variante avec $π/4$ MAIS toutes les parties suivantes doivent utiliser $π/4$
   - Les transformations définies dans les parties précédentes DOIVENT être utilisées dans les parties suivantes
   - Les dépendances mathématiques doivent être respectées` : `🚨 **PARTIE INITIALE (1a, 1b, ou 1c) - RÈGLES ULTRA-STRICTES:**
   
   **TU ES LA PREMIÈRE PARTIE - TOUT DOIT ÊTRE EXPLICITE:**
   - C'est la première partie de l'exercice, donc tu DOIS définir TOUS les éléments de base
   - Établis les variables, fonctions, transformations, polynômes, événements, ou expériences qui seront utilisés dans les parties suivantes
   - Donne TOUTES les définitions nécessaires explicitement et COMPLÈTEMENT
   - ⚠️ CRITIQUE: Les éléments que tu définis ici seront utilisés dans les parties suivantes, donc sois TRÈS PRÉCIS
   
   **STRUCTURE OBLIGATOIRE POUR LES PREMIÈRES PARTIES:**
   1. **DÉFINITION COMPLÈTE (OBLIGATOIRE EN PREMIER):**
      - Commence TOUJOURS par "Soit ..." ou "On considère ..."
      - Donne TOUTE la définition: domaine, expression, conditions, valeurs numériques
      - Exemple probabilités: "Soit $\\Omega$ l'univers d'une expérience aléatoire. On considère deux événements $A$ et $B$ de $\\Omega$ tels que $P(A) = 0.6$, $P(B) = 0.4$ et $P(A \\cap B) = 0.2$."
      - Exemple fonctions: "Soit $f$ la fonction définie sur $\\mathbb{R} \\setminus \\{2\\}$ par $f(x) = \\frac{x^2 + 3x - 1}{x - 2}$."
      - Exemple polynômes: "Soit $P$ le polynôme défini sur $\\mathbb{C}$ par $P(z) = z^3 - (8+i)z^2 + 21z - 8 + 19i$."
   
   2. **CONTEXTE ET DONNÉES (OBLIGATOIRE):**
      - Donne TOUTES les valeurs numériques nécessaires
      - Mentionne TOUS les domaines de définition
      - Précise TOUTES les conditions ou hypothèses
      - Pour les probabilités: donne les probabilités, les événements, l'univers
      - Pour les fonctions: donne le domaine, l'expression, les conditions
      - Pour les polynômes: donne l'expression complète, le domaine
   
   3. **QUESTION CLARE (OBLIGATOIRE):**
      - Formule la question de manière CLAIRE et EXPLICITE
      - Utilise un verbe d'action: "Calculer", "Montrer", "Déterminer", "Vérifier"
      - Répète les éléments clés de la définition dans la question si nécessaire
      - Exemple: "Calculer $P(A \\cup B)$ en utilisant la formule $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."
   
   **EXEMPLES CONCRETS POUR PROBABILITÉS (PARTIES 1a, 1b, 1c):**
   
   ✅ **BON EXEMPLE - Partie 1a:**
   \`\`\`
   **Partie 1a) Calcul de probabilité**
   
   Soit $\\Omega$ l'univers d'une expérience aléatoire. On considère un événement $A$ de $\\Omega$ tel que $P(A) = 0.6$.
   
   Calculer la probabilité de l'événement complémentaire $\\overline{A}$ en utilisant la formule $P(\\overline{A}) = 1 - P(A)$.
   \`\`\`
   
   ✅ **BON EXEMPLE - Partie 1b:**
   \`\`\`
   **Partie 1b) Calcul de probabilité conditionnelle**
   
   Soit $\\Omega$ l'univers d'une expérience aléatoire. On considère deux événements $A$ et $B$ de $\\Omega$ tels que $P(A) = 0.6$, $P(B) = 0.4$ et $P(A \\cap B) = 0.2$.
   
   Calculer la probabilité conditionnelle $P(A | B)$ en utilisant la formule $P(A | B) = \\frac{P(A \\cap B)}{P(B)}$.
   \`\`\`
   
   ✅ **BON EXEMPLE - Partie 1c:**
   \`\`\`
   **Partie 1c) Loi binomiale, espérance et variance**
   
   Soit $X$ une variable aléatoire qui suit une loi binomiale de paramètres $n = 10$ et $p = 0.3$, notée $X \\sim B(10, 0.3)$.
   
   Calculer l'espérance $E(X)$ et la variance $\\text{Var}(X)$ de la variable aléatoire $X$ en utilisant les formules $E(X) = np$ et $\\text{Var}(X) = np(1-p)$.
   \`\`\`
   
   ❌ **MAUVAIS EXEMPLE (À ÉVITER ABSOLUMENT):**
   \`\`\`
   **Partie 1a) Calcul de probabilité**
   
   Calculer $P(\\overline{A})$.
   \`\`\`
   (Manque la définition de $A$ et de $\\Omega$)
   
   **RAPPEL FINAL POUR LES PREMIÈRES PARTIES:**
   - Tu es la FONDATION de l'exercice
   - Tout ce que tu définis sera utilisé après
   - Sois ULTRA-EXPLICITE et COMPLET
   - Ne laisse RIEN à deviner
   - Un étudiant doit pouvoir résoudre ta question SANS contexte supplémentaire`}

4. **Formatage mathématique OBLIGATOIRE:**
   - TOUTES les formules en LaTeX: $...$ (inline) ou $$...$$ (display)
   - Variables: $z_0$, $P(z)$, $f(x)$, etc.
   - Opérations: $z_0 = -i$, $P(z) = z^3 - (8+i)z^2 + 21z - 8 + 19i$
   - Fractions: $\\frac{a}{b}$
   - Puissances: $z^3$, $x^2$
   - Modules: $|z|$, $|z - 4 - 3i|$
   - Arguments: $\\arg(z)$

5. **Structure de la question (EXPLICITE):**
   - Format: "**Partie ${partId}) [Type de question]**\n[Énoncé COMPLET]"
   - Type: calcul, démonstration, ou géométrie selon le contexte
   - La question DOIT inclure :
     * Toutes les données nécessaires (fonctions, polynômes, valeurs numériques)
     * La tâche à accomplir (calculer, montrer, déterminer, etc.)
     * Toutes les conditions ou hypothèses
   - Niveau adapté au BAC D

6. **Cohérence et qualité:**
   - Question mathématiquement valide
   - Notations correctes et cohérentes
   - Utilise le contexte mauritanien si pertinent
   - S'intègre naturellement dans la progression de l'exercice

**EXEMPLES DE FORMAT ATTENDU (QUESTIONS EXPLICITES ET COMPLÈTES):**

**EXEMPLE 1 - Calcul de dérivée:**
\`\`\`
**Partie 1a) Calcul de la dérivée**

Soit $f$ la fonction définie sur $\\mathbb{R} \\setminus \\{2\\}$ par :
$$f(x) = \\frac{x^2 + 3x - 1}{x - 2}$$

Calculer la dérivée $f'(x)$ de la fonction $f$ pour tout $x \\in \\mathbb{R} \\setminus \\{2\\}$.
\`\`\`

**EXEMPLE 2 - Solution d'équation:**
\`\`\`
**Partie 1a) Montrer qu'un nombre complexe est solution**

Soit $P$ le polynôme défini sur $\\mathbb{C}$ par :
$$P(z) = z^3 - (8+i)z^2 + (21-8i)z - 12 + 20i$$

Montrer que le nombre complexe $z_0 = -i$ est une solution de l'équation $P(z) = 0$.
\`\`\`

**EXEMPLE 3 - Calcul de limites:**
\`\`\`
**Partie 2a) Calcul de limites**

Soit $f$ la fonction définie sur $\\mathbb{R} \\setminus \\{1\\}$ par :
$$f(x) = \\frac{x^2 - 3x + 2}{x - 1}$$

Calculer les limites suivantes :
- $\\lim_{x \\to 1} f(x)$
- $\\lim_{x \\to +\\infty} f(x)$
- $\\lim_{x \\to -\\infty} f(x)$
\`\`\`

**CE QUI EST INTERDIT (NE PAS FAIRE):**
❌ "Calculer $f'(x)$" sans définir $f$
❌ "Montrer que $z_0$ est solution" sans définir le polynôme
❌ "Déterminer les limites" sans donner la fonction
❌ Utiliser des variables non définies
❌ Laisser des éléments implicites

**CE QUI EST REQUIS (OBLIGATOIRE):**
✅ Toujours commencer par "Soit ... défini(e) sur ... par ..."
✅ Donner TOUTES les définitions nécessaires
✅ Mentionner TOUS les domaines de définition
✅ Inclure TOUTES les valeurs numériques nécessaires
✅ La question doit être compréhensible SEULE, sans contexte

**CHECKLIST AVANT DE GÉNÉRER (VÉRIFIE CHAQUE POINT - OBLIGATOIRE):**
☐ La question commence-t-elle par une définition complète? (Soit ... défini(e) sur ... par ...)
☐ Toutes les fonctions/polynômes sont-ils définis avec leur expression complète?
☐ Tous les domaines de définition sont-ils mentionnés?
☐ Toutes les valeurs numériques nécessaires sont-elles données?
☐ La question peut-elle être comprise SANS contexte supplémentaire?
☐ Y a-t-il une action claire (calculer, montrer, déterminer, etc.)?

**STRUCTURE OBLIGATOIRE DE TA RÉPONSE:**
Ta réponse DOIT suivre EXACTEMENT ce format (sans exception):

\`\`\`
**Partie ${partId}) [Type de question]**

[LIGNE 1 - DÉFINITION OBLIGATOIRE]
Soit $f$ la fonction définie sur [DOMAINE COMPLET] par :
$$f(x) = [EXPRESSION COMPLÈTE]$$

OU

Soit $P$ le polynôme défini sur $\\mathbb{C}$ par :
$$P(z) = [EXPRESSION COMPLÈTE]$$

[LIGNE 2 - TÂCHE À ACCOMPLIR]
[Calculer/Montrer/Déterminer/etc.] [ce qui est demandé].
\`\`\`

**RÈGLE ABSOLUE:** Si tu mentionnes $f$, $P$, ou toute autre fonction/polynôme, tu DOIS commencer par "Soit ... défini(e) sur ... par ..." avec l'expression COMPLÈTE.

**IMPORTANT:** 
- Génère UNIQUEMENT la question pour la Partie ${partId}
- La question DOIT être EXPLICITE et COMPLÈTE - ne laisse RIEN à deviner
- Inclus TOUTES les définitions, formules, domaines et données nécessaires
- Si tu n'inclus pas toutes les informations, la question sera rejetée
- Commence TOUJOURS par "Soit ... défini(e) sur ... par ..." si tu utilises une fonction/polynôme
- Si l'énoncé complet contient une définition, tu DOIS l'inclure dans ta question`;

  try {
    const result = await generateContentWith429Retry(model, prompt, partId);
    let question = result.response.text().trim();
    
    // Estimate tokens used
    const { estimateTokens } = await import('./token-tracker');
    const promptTokens = estimateTokens(prompt);
    const responseTokens = estimateTokens(question);
    const tokensUsed = promptTokens + responseTokens;

    // Nettoyage
    question = question.replace(/^```[\s\S]*?```/gm, '').trim();
    
    // S'assurer qu'on ne garde qu'une seule question
    if (question.includes('**Partie')) {
      // Extraire uniquement la première question trouvée pour cette partie
      const partiePattern = new RegExp(`\\*\\*Partie\\s+${partId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^)]*\\)[^*]*`, 'i');
      const match = question.match(partiePattern);
      if (match) {
        question = match[0];
        // Nettoyer pour enlever les sous-questions ou parties suivantes
        const nextPartieIndex = question.indexOf('**Partie', match[0].length);
        if (nextPartieIndex > 0) {
          question = question.substring(0, nextPartieIndex);
        }
      } else if (question.startsWith('**Partie')) {
        // OK, commence déjà par Partie
        // S'assurer qu'on ne garde que jusqu'à la prochaine partie
        const nextPartieIndex = question.indexOf('**Partie', 20);
        if (nextPartieIndex > 0) {
          question = question.substring(0, nextPartieIndex);
        }
      } else {
        question = question.substring(question.indexOf('**Partie'));
      }
    }

    // Formatage mathématique
    question = formatMathInText(question);
    
    // 🔥 CRITICAL: Vérifier que la question est explicite et forcer l'inclusion de la définition si manquante
    const isFirstPart = /^1[a-c]$/i.test(partId);
    const needsDefinition = /(?:calculer|montrer|déterminer|résoudre|placer|exprimer|dresser|étudier|déduire)/i.test(question);
    const hasDefinition = /(?:Soit|On considère).*?(?:par|:|\$[^$]*=)/i.test(question);
    const mentionsFunction = /(?:fonction|polynôme|\$f\(|\$P\(|f\(x\)|P\(z\)|probabilité|événement|variable aléatoire|loi)/i.test(question);
    
    // Pour les premières parties, être encore plus strict
    const shouldEnrich = isFirstPart 
      ? (!hasDefinition || !needsDefinition || question.length < 150)
      : ((needsDefinition || mentionsFunction) && !hasDefinition);
    
    if (shouldEnrich && template.enonceComplet) {
      console.warn(`⚠️ Question pour ${partId} ${isFirstPart ? '(PREMIÈRE PARTIE)' : ''} n'est pas assez explicite, enrichissement automatique...`);
      
      // Extraire la définition de la fonction/polynôme de l'énoncé complet
      // L'énoncé commence généralement par "On considère la fonction f définie sur ... par: f(x) = ..."
      const enonceText = template.enonceComplet;
      
      // Chercher la définition au début de l'énoncé (première ligne généralement)
      const firstLineMatch = enonceText.match(/^(On considère|Soit).*?(?=\n|$)/i);
      if (firstLineMatch) {
        let definitionText = firstLineMatch[0].trim();
        
        // Chercher le domaine et l'expression
        // Pattern: "On considère la fonction f définie sur ]-2; +∞[ par: f(x) = (x² - 1)/(x + 2)"
        const domainMatch = definitionText.match(/(?:sur|dans)\s*([^par:]+?)(?:\s*par|:)/i);
        const expressionMatch = definitionText.match(/(?:par|:)\s*(f\(x\)|P\(z\))\s*=\s*([^\.\n]+)/i);
        
        if (expressionMatch) {
          const varName = expressionMatch[1]; // f(x) ou P(z)
          let expression = expressionMatch[2].trim();
          const domain = domainMatch ? domainMatch[1].trim() : (varName.includes('P') ? '\\mathbb{C}' : '\\mathbb{R}');
          
          // Nettoyer l'expression (enlever les espaces superflus)
          expression = expression.replace(/\s+/g, ' ').trim();
          
          // Convertir en LaTeX si nécessaire
          if (!expression.includes('$')) {
            // Convertir les fractions simples
            expression = expression.replace(/(\w+)\/(\w+)/g, '\\frac{$1}{$2}');
            // Convertir les puissances
            expression = expression.replace(/(\w+)\^(\d+)/g, '$1^{$2}');
          }
          
          // Formater la définition complète
          const isFunction = varName.includes('f');
          const formattedDefinition = isFunction
            ? `Soit $f$ la fonction définie sur $${domain}$ par :\n$$f(x) = ${expression}$$`
            : `Soit $P$ le polynôme défini sur $\\mathbb{C}$ par :\n$$P(z) = ${expression}$$`;
          
          // Extraire le titre de la question
          const titleMatch = question.match(/\*\*Partie\s+[^)]+\)\s*([^*\n]+)/i);
          const title = titleMatch ? titleMatch[1].trim() : question.split('\n')[0].replace(/\*\*Partie\s+[^)]+\)\s*/i, '').trim();
          
          // Reconstruire la question avec la définition en premier
          const questionBody = question.replace(/\*\*Partie\s+[^)]+\)\s*/i, '').trim();
          question = `**Partie ${partId}) ${title}**\n\n${formattedDefinition}\n\n${questionBody}`;
          console.log(`✅ Question enrichie avec définition de l'énoncé complet pour ${partId}`);
        } else {
          console.warn(`⚠️ Impossible d'extraire l'expression de la définition pour ${partId}`);
        }
      } else {
        console.warn(`⚠️ Impossible de trouver la définition dans l'énoncé complet pour ${partId}`);
      }
    }

    // Validation
    let validation = validateQuestion(question, partId, template);
    
    // 🔥 CRITICAL: Si la question n'est pas explicite, essayer de la régénérer (jusqu'à 3 tentatives)
    const MAX_RETRIES = 3;
    let retryCount = 0;
    
    // Vérifier aussi si la fonction est trop répétitive pour "exponentielle et suites"
    const isExponentielleSuitesCheck = template.title.toLowerCase().includes('exponentielle') && 
                                       (template.title.toLowerCase().includes('suites') || 
                                        template.description.toLowerCase().includes('suites') ||
                                        template.concepts.some(c => c.toLowerCase().includes('suite')));
    
    if (isExponentielleSuitesCheck && isFirstPart) {
      // Vérifier si la question contient la fonction interdite
      const forbiddenPatterns = [
        /3\s*\/\s*\(\s*2\s*\+\s*e\^\(-2x\)\)/i,
        /3\s*\/\s*\(\s*2\s*[+\-]\s*e\^\(-2x\)\)/i,
        /3\s*\/\s*\(\s*2\s*\+\s*exp\(-2x\)\)/i,
      ];
      
      const hasForbiddenFunction = forbiddenPatterns.some(pattern => pattern.test(question));
      if (hasForbiddenFunction) {
        validation.isValid = false;
        validation.errors.push('Fonction trop répétitive: f(x) = 3 / (2 + e^(-2x)) est interdite. Utilise une fonction différente.');
        console.warn(`⚠️ Fonction interdite détectée pour ${partId}: f(x) = 3 / (2 + e^(-2x))`);
      }
    }
    
    while ((!validation.isValid && (validation.errors.some(e => e.includes('explicite')) || validation.errors.some(e => e.includes('répétitive')))) && retryCount < MAX_RETRIES) {
      retryCount++;
      const errorType = validation.errors.some(e => e.includes('répétitive')) ? 'trop répétitive' : 'pas assez explicite';
      console.warn(`⚠️ Question pour ${partId} est ${errorType}, tentative de régénération ${retryCount}/${MAX_RETRIES}...`);
      
      // Détecter si c'est un exercice de logarithmes/exponentielles
      const isLogExp = template.concepts.some(c => 
        c.toLowerCase().includes('logarithme') || 
        c.toLowerCase().includes('exponentielle') ||
        template.title.toLowerCase().includes('logarithme') ||
        template.title.toLowerCase().includes('exponentielle')
      );
      
      // Essayer une régénération avec un prompt encore plus strict
      try {
        let retryPrompt = `${prompt}\n\n🚨 RÉGÉNÉRATION ${retryCount}/${MAX_RETRIES}: La question précédente n'était pas assez explicite.`;
        
        if (isLogExp) {
          // Instructions spéciales pour logarithmes/exponentielles
          retryPrompt += `\n\n📐 **INSTRUCTIONS SPÉCIALES POUR LOGARITHMES/EXPONENTIELLES:**
- Pour les logarithmes: Commence par "Soit $f$ la fonction définie sur $(0, +\\infty)$ par $f(x) = \\ln(x)$" ou similaire
- Pour les exponentielles: Commence par "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = e^x$" ou similaire
- Inclus TOUJOURS le domaine de définition (important pour ln: $x > 0$)
- Inclus TOUJOURS l'expression complète de la fonction
- Pour les équations: Donne l'équation complète (ex: "$\\ln(x) = 2$" ou "$e^x = 5$")
- Pour les limites: Spécifie la valeur vers laquelle $x$ tend (ex: "$\\lim_{x \\to 0^+} \\ln(x)$")
- Pour les dérivées: Donne la fonction complète avant de demander la dérivée`;
        }
        
        if (isExponentielleSuites) {
          // Instructions spéciales pour "exponentielle et suites" - FORCER la variation
          retryPrompt += `\n\n🔥🔥🔥 **CRITIQUE - VARIATION OBLIGATOIRE POUR EXPONENTIELLE ET SUITES:**
Cette question fait partie du chapitre "Fonction exponentielle et suites". 

🚨 **FONCTIONS INTERDITES (NE JAMAIS UTILISER):**
❌ f(x) = 3 / (2 + e^(-2x)) - INTERDIT (trop utilisé)
❌ f(x) = 1 / (1 + e^x) - INTERDIT (énoncé de référence)
❌ f(x) = 2 / (1 + e^(-x)) - INTERDIT (trop similaire)
❌ f(x) = 4 / (3 + e^(-2x)) - INTERDIT (juste coefficients changés)

**FONCTIONS AUTORISÉES (VARIE VRAIMENT):**
✅ f(x) = 5 / (1 + e^(3x)) - BON (coefficients ET exposant différents)
✅ f(x) = 2e^x / (e^x + 1) - BON (structure différente: e^x au numérateur)
✅ f(x) = 4 / (3 - e^(-x)) - BON (signe différent dans dénominateur)
✅ f(x) = e^(2x) / (e^(2x) + 3) - BON (structure complètement différente)
✅ f(x) = 1 / (1 + 2e^(-x)) - BON (coefficient différent dans e^(-x))
✅ f(x) = 6 / (4 + 3e^(-x)) - BON (coefficients différents)
✅ f(x) = (e^x - 1) / (e^x + 1) - BON (structure différente: différence au numérateur)
✅ f(x) = 2 / (1 + e^(2x)) - BON (exposant positif)

**RÈGLES:**
1. CHANGE au moins 2 éléments parmi: coefficient numérateur, coefficient dénominateur, exposant, signe, structure
2. Varie la structure: quotient avec constante, quotient avec e^x au numérateur, forme 1/(1+ae^(bx)), différence, etc.
3. Utilise des exposants différents: -x, -2x, -3x, x, 2x, 3x, etc.
4. Change les signes: + devient -, - devient +
5. Ne JAMAIS utiliser f(x) = 3 / (2 + e^(-2x)) ou des variantes trop proches!

**IMPORTANT:** Si tu génères f(x) = 3 / (2 + e^(-2x)) ou une variante trop proche, la question sera rejetée. Sois CRÉATIF!`;
        }
        
        retryPrompt += `\n\nGénère une NOUVELLE question qui COMMENCE OBLIGATOIREMENT par "Soit ... défini(e) sur ... par ..." avec TOUTE la définition complète.`;
        
        const retryResult = await generateContentWith429Retry(model, retryPrompt, `${partId} régénération ${retryCount}`);
        let retryQuestion = retryResult.response.text().trim();
        retryQuestion = retryQuestion.replace(/^```[\s\S]*?```/gm, '').trim();
        retryQuestion = formatMathInText(retryQuestion);
        
        // Vérifier si la nouvelle question est meilleure
        const retryHasDefinition = /(?:Soit|On considère).*?(?:par|:|\$[^$]*=)/i.test(retryQuestion);
        
        // Vérifier aussi si la nouvelle question contient la fonction interdite
        let hasForbiddenFunction = false;
        if (isExponentielleSuitesCheck && isFirstPart) {
          const forbiddenPatterns = [
            /3\s*\/\s*\(\s*2\s*\+\s*e\^\(-2x\)\)/i,
            /3\s*\/\s*\(\s*2\s*[+\-]\s*e\^\(-2x\)\)/i,
            /3\s*\/\s*\(\s*2\s*\+\s*exp\(-2x\)\)/i,
          ];
          hasForbiddenFunction = forbiddenPatterns.some(pattern => pattern.test(retryQuestion));
        }
        
        if (retryHasDefinition && !hasForbiddenFunction) {
          question = retryQuestion;
          console.log(`✅ Question régénérée avec succès pour ${partId} (tentative ${retryCount})`);
          // Re-valider la nouvelle question
          validation = validateQuestion(question, partId, template);
          
          // Si la validation passe maintenant, sortir de la boucle
          if (validation.isValid) {
            break;
          }
        } else {
          if (hasForbiddenFunction) {
            console.warn(`⚠️ La régénération ${retryCount} contient encore la fonction interdite pour ${partId}`);
          } else {
            console.warn(`⚠️ La régénération ${retryCount} n'a pas amélioré la question pour ${partId}`);
          }
        }
      } catch (retryError) {
        console.error(`❌ Erreur lors de la régénération ${retryCount} pour ${partId}:`, retryError);
        // Continuer avec la question précédente si c'est la dernière tentative
        if (retryCount >= MAX_RETRIES) {
          break;
        }
      }
    }
    
    // Si après toutes les tentatives la question n'est toujours pas valide, on l'accepte quand même
    // mais on la marque comme non validée pour permettre au système de continuer
    if (!validation.isValid && retryCount >= MAX_RETRIES) {
      console.warn(`⚠️ Question pour ${partId} non validée après ${MAX_RETRIES} tentatives, mais acceptée pour permettre la progression`);
      console.warn(`   Erreurs de validation: ${validation.errors.join('; ')}`);
      // On garde la dernière question générée même si elle n'est pas parfaitement validée
      // Mais on s'assure qu'elle a au moins une structure minimale
      const questionText = question.trim();
      const contentWithoutTitle = questionText.replace(/^\*\*Partie\s+\d+[a-z]?\)[^*]+\*\*\s*/i, '').trim();
      
      // Vérifier si la question est vraiment incomplète (juste un titre ou moins de 100 caractères de contenu)
      if (!question || questionText.length < 150 || contentWithoutTitle.length < 100) {
        console.warn(`⚠️ Question trop courte pour ${partId}: total=${questionText.length}, content=${contentWithoutTitle.length}, création d'un fallback`);
        
        // Question de fallback spécifique selon le type d'exercice
        const isGeometrie = template.title.toLowerCase().includes('géométrie') || 
                           template.title.toLowerCase().includes('geometrie') ||
                           template.concepts.some(c => c.toLowerCase().includes('géométrie') || c.toLowerCase().includes('geometrie'));
        
        const isLogExp = template.concepts.some(c => 
          c.toLowerCase().includes('logarithme') || 
          c.toLowerCase().includes('exponentielle')
        );
        
        if (isGeometrie) {
          // Fallback spécifique pour géométrie dans l'espace
          if (partId.match(/^1[a-e]$/)) {
            const partNum = partId.charAt(1);
            if (partNum === 'a') {
              question = `**Partie 1a) Calcul de produits scalaires et vérification d'orthogonalité**

Soient les points $A(2; -1; 4)$, $B(5; 2; 1)$, $C(4; 1; -1)$ et $D(3; 2; -1)$ de l'espace muni d'un repère orthonormé $(O, \\vec{i}, \\vec{j}, \\vec{k})$.

1. Calculer les coordonnées des vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{BC}$ et $\\overrightarrow{CD}$.
2. Calculer les produits scalaires $\\overrightarrow{AB} \\cdot \\overrightarrow{BC}$ et $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$.
3. Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{BC}$ sont-ils orthogonaux ?`;
            } else if (partNum === 'b') {
              question = `**Partie 1b) Projection orthogonale et orthogonalité**

Soient les points $A(2; -1; 4)$, $B(5; 2; 1)$, $C(4; 1; -1)$ et $D(3; 2; -1)$ de l'espace muni d'un repère orthonormé.

On admet que $\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = 0$ et $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = 3$.

Montrer que $C$ est le projeté orthogonal de $B$ sur la droite $(CD)$.`;
            } else {
              question = `**Partie ${partId}) Calculs vectoriels dans l'espace**

Soient les points $A(1; 0; 2)$, $B(3; 1; -1)$ et $C(0; 2; 1)$ de l'espace muni d'un repère orthonormé $(O, \\vec{i}, \\vec{j}, \\vec{k})$.

1. Calculer les coordonnées des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.
2. Calculer le produit scalaire $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.
3. En déduire la nature du triangle $ABC$.`;
            }
          } else {
            question = `**Partie ${partId}) Exercice de géométrie dans l'espace**

Soient les points $A(1; 0; 2)$, $B(3; 1; -1)$ et $C(0; 2; 1)$ de l'espace muni d'un repère orthonormé.

Calculer les éléments demandés en utilisant les méthodes du cours de géométrie dans l'espace.`;
          }
        } else if (isLogExp && partId === '6') {
          question = `**Partie 6) Exercice corrigé type bac**

Soit $f$ la fonction définie sur $(0, +\\infty)$ par :
$$f(x) = x - 1 + \\ln\\left(\\frac{x-2}{x+2}\\right)$$

1. Déterminer le domaine de définition de $f$.
2. Calculer les limites de $f$ aux bornes de son domaine.
3. Étudier les variations de $f$ et dresser son tableau de variation.
4. Déterminer les asymptotes éventuelles de la courbe représentative de $f$.`;
        } else {
          // Question de fallback générique
          question = `**Partie ${partId}) Question**

Soit $f$ la fonction définie sur son domaine par une expression appropriée.

Calculer les éléments demandés en utilisant les méthodes du cours.`;
        }
        console.log(`⚠️ Question de fallback créée pour ${partId}`);
      }
    }

    return {
      partId,
      question,
      type: detectQuestionType(question),
      difficulty: template.difficulty,
      validated: validation.isValid,
      validationErrors: validation.errors,
      tokensUsed
    };
  } catch (error) {
    // Log full technical error for debugging
    console.error(`❌ Error generating question for part ${partId}:`, error);
    
    // Import error formatter
    const { getQuestionGenerationError } = await import('@/lib/utils/error-messages');
    const userMessage = getQuestionGenerationError(error);
    
    // Throw with user-friendly message, but keep technical details in logs
    throw new Error(userMessage);
  }
}

/**
 * Valide mathématiquement une question générée
 */
function validateQuestion(
  question: string,
  partId: string,
  template: ExerciseTemplate
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // 1. Vérifier le formatage LaTeX
  const hasMathDelimiters = /\$[^$]+\$/.test(question) || /\$\$[^$]+\$\$/.test(question);
  const hasMathContent = /[a-z]_[0-9]|[a-z]\^[0-9]|P\(|f\(|z[₀₁₂₃₄₅₆₇₈₉0-9]|\\frac|\\sqrt|\\sum|\\int/.test(question);
  if (hasMathContent && !hasMathDelimiters) {
    errors.push('Formules mathématiques non formatées en LaTeX');
  }

  // 2. Vérifier les nombres complexes (formatage correct)
  // Pattern plus précis : détecte seulement les vrais nombres complexes (3i, 2+5i, -i, etc.)
  // Pas juste la lettre "i" dans des mots français (déduire, déterminé, etc.)
  const complexPattern = /(?:\d+\s*[+\-]\s*)?\d+\s*i\b|\d+\s*[+\-]\s*\d+\s*i\b|^[+\-]?\s*i\b/i;
  const questionWithoutLaTeX = question.replace(/\$[^$]+\$/g, '');
  // Vérifier que c'est vraiment un nombre complexe (précédé d'un nombre ou opérateur)
  const hasComplexOutsideLaTeX = complexPattern.test(questionWithoutLaTeX) && 
    /(?:^|[^a-zéèêëàâäùûüôöîïç])\s*\d+\s*[+\-]?\s*i\b/i.test(questionWithoutLaTeX);
  if (hasComplexOutsideLaTeX) {
    errors.push('Nombres complexes trouvés hors LaTeX: formatage incorrect');
  }

  // 3. Vérifier la structure
  if (!question.includes(`Partie ${partId}`) && !question.includes(`partie ${partId}`)) {
    errors.push(`La question ne mentionne pas la Partie ${partId}`);
  }

  // 4. Vérifier que la question est EXPLICITE (contient des définitions complètes) - VALIDATION STRICTE
  // Vérifier la présence de définitions explicites (fonctions, polynômes, etc.)
  const hasExplicitDefinition = /(?:Soit|On considère|On définit|Soit.*définie|défini.*par|définie.*par)/i.test(question);
  const hasMathematicalExpression = /\$[^$]*=[^$]*\$/g.test(question);
  
  // Vérifier qu'il y a une définition complète avec "par" ou "="
  const hasCompleteDefinition = /(?:Soit|On considère).*?(?:par|:|\$[^$]*=)/i.test(question);
  
  // Vérifier si c'est une première partie (1a, 1b, 1c)
  const isFirstPart = /^1[a-c]$/i.test(partId);
  
  // Validation ULTRA-STRICTE pour les premières parties
  if (isFirstPart) {
    // Les premières parties DOIVENT commencer par une définition
    if (!hasExplicitDefinition) {
      errors.push(`Question non explicite (Partie ${partId}): DOIT commencer par "Soit ..." ou "On considère ..." avec une définition complète`);
    }
    
    // Les premières parties DOIVENT avoir une définition complète avec expression
    if (!hasCompleteDefinition) {
      errors.push(`Question non explicite (Partie ${partId}): DOIT contenir une définition complète avec "par" ou "=" (ex: "Soit f définie sur ... par f(x) = ...")`);
    }
    
    // Les premières parties DOIVENT avoir des valeurs numériques ou expressions explicites
    const hasValues = /\d+\.?\d*|P\([A-Z]\)\s*=\s*\d|\\Omega|\\mathbb\{[CRNZ]\}/.test(question);
    if (!hasValues && !hasMathematicalExpression) {
      errors.push(`Question non explicite (Partie ${partId}): DOIT contenir des valeurs numériques ou expressions mathématiques explicites`);
    }
    
    // Les premières parties DOIVENT être suffisamment longues (minimum 100 caractères sans LaTeX)
    const cleanQuestion = question.replace(/\$[^$]+\$/g, '').replace(/\*\*/g, '').trim();
    if (cleanQuestion.length < 100) {
      errors.push(`Question trop courte (Partie ${partId}): DOIT être explicite et détaillée (minimum 100 caractères, actuellement ${cleanQuestion.length})`);
    }
  }
  
  // Si la question mentionne une fonction/polynôme mais ne le définit pas explicitement
  if ((question.includes('fonction') || question.includes('polynôme') || question.includes('$f(') || question.includes('$P(') || question.includes('$f$') || question.includes('$P$')) && !hasExplicitDefinition) {
    errors.push('Question non explicite: mentionne une fonction/polynôme sans le définir clairement avec "Soit ... défini(e) par"');
  }
  
  // Vérifier qu'il y a une expression mathématique explicite avec définition
  if ((question.includes('calculer') || question.includes('déterminer') || question.includes('montrer') || question.includes('résoudre')) && !hasMathematicalExpression) {
    errors.push('Question non explicite: manque d\'expressions mathématiques définies (formules, équations)');
  }
  
  // Vérifier qu'il y a une définition complète
  if ((question.includes('calculer') || question.includes('déterminer') || question.includes('montrer')) && !hasCompleteDefinition) {
    errors.push('Question non explicite: manque de définition complète (doit commencer par "Soit ... défini(e) par ...")');
  }
  
  // Vérifier qu'il n'y a pas de références à des éléments non définis
  const undefinedReferences = question.match(/\b(f|P|g|h|u|v|z_0|a|b|c)\b(?!\s*[=\(])/gi);
  if (undefinedReferences && !hasExplicitDefinition) {
    const uniqueRefs = [...new Set(undefinedReferences)];
    if (uniqueRefs.length > 0 && !question.match(/Soit.*\b(?:f|P|g|h|u|v|z_0|a|b|c)\b.*défini/i)) {
      errors.push(`Question non explicite: utilise ${uniqueRefs.join(', ')} sans les définir explicitement`);
    }
  }

  // 5. Vérifier la cohérence avec les concepts
  const hasRelevantConcept = template.concepts.some(concept => {
    const keywords = concept.toLowerCase().split(/\s+/).slice(0, 2);
    return keywords.some(kw => question.toLowerCase().includes(kw));
  });
  if (!hasRelevantConcept && template.concepts.length > 0) {
    errors.push('Question non alignée avec les concepts de l\'exercice');
  }
  
  // 5.3. Validation SPÉCIALE pour géométrie dans l'espace - REJETER les questions trop générales
  const isGeometrie = template.title.toLowerCase().includes('géométrie') || 
                      template.title.toLowerCase().includes('geometrie') ||
                      template.concepts.some(c => 
                        c.toLowerCase().includes('géométrie') || 
                        c.toLowerCase().includes('geometrie') ||
                        c.toLowerCase().includes('espace') ||
                        c.toLowerCase().includes('plan') ||
                        c.toLowerCase().includes('vecteur') ||
                        c.toLowerCase().includes('produit scalaire') ||
                        c.toLowerCase().includes('équation cartésienne')
                      );
  
  if (isGeometrie) {
    // Vérifier que la question contient des coordonnées de points (format: A(x; y; z) ou A(x, y, z))
    const hasPointCoordinates = /[A-Z]\([^)]*[0-9][^)]*\)/.test(question) || 
                                /point\s+[A-Z]\s*\([^)]*[0-9]/.test(question.toLowerCase());
    
    // Vérifier que la question mentionne le repère orthonormé
    const hasRepere = /repère\s+orthonormé|orthonormé|repère/i.test(question);
    
    // Vérifier si c'est une question sur les équations cartésiennes de plan
    const isPlanEquation = /équation\s+cartésienne.*plan|plan.*équation\s+cartésienne/i.test(question);
    
    // Si c'est une question sur équation cartésienne, elle DOIT avoir des points avec coordonnées
    if (isPlanEquation && !hasPointCoordinates) {
      errors.push('Question de géométrie non explicite: "Déterminer une équation cartésienne d\'un plan" sans points ni données. DOIT inclure des points avec coordonnées complètes (ex: A(1; 2; 3), B(4; 1; 0), C(2; 3; 1))');
    }
    
    // Toutes les questions de géométrie doivent avoir au moins des coordonnées ou un repère mentionné
    if (!hasPointCoordinates && !hasRepere && (question.includes('plan') || question.includes('vecteur') || question.includes('distance') || question.includes('projection'))) {
      errors.push('Question de géométrie non explicite: manque de coordonnées de points ou de mention du repère orthonormé. DOIT inclure des données complètes (points avec coordonnées, repère, équations)');
    }
    
    // Vérifier que les questions ne sont pas trop courtes/générales
    const questionLower = question.toLowerCase();
    const isTooGeneral = (
      questionLower.match(/déterminer\s+une\s+équation\s+cartésienne\s+d['']?un\s+plan/i) ||
      questionLower.match(/calculer\s+la\s+distance\s+d['']?un\s+point\s+au\s+plan/i) ||
      questionLower.match(/montrer\s+que\s+deux\s+vecteurs\s+sont\s+orthogonaux/i)
    ) && !hasPointCoordinates;
    
    if (isTooGeneral) {
      errors.push('Question de géométrie trop générale: manque de données spécifiques (points avec coordonnées, vecteurs, équations). DOIT être complètement détaillée avec TOUS les éléments nécessaires');
    }
  }
  
  // 5.5. Vérifier la variation pour "exponentielle et suites" - rejeter les fonctions trop répétitives
  const isExponentielleSuites = template.title.toLowerCase().includes('exponentielle') && 
                                (template.title.toLowerCase().includes('suites') || 
                                 template.description.toLowerCase().includes('suites') ||
                                 template.concepts.some(c => c.toLowerCase().includes('suite')));
  
  if (isExponentielleSuites) {
    // Détecter les fonctions interdites (trop répétitives)
    const forbiddenPatterns = [
      /3\s*\/\s*\(\s*2\s*\+\s*e\^\(-2x\)\)/i,  // f(x) = 3 / (2 + e^(-2x))
      /3\s*\/\s*\(\s*2\s*[+\-]\s*e\^\(-2x\)\)/i, // Variantes avec espaces
      /3\s*\/\s*\(\s*2\s*\+\s*exp\(-2x\)\)/i,   // Avec exp()
    ];
    
    const hasForbiddenFunction = forbiddenPatterns.some(pattern => pattern.test(question));
    if (hasForbiddenFunction) {
      errors.push('Fonction trop répétitive détectée: f(x) = 3 / (2 + e^(-2x)) est interdite. Utilise une fonction différente avec une structure variée.');
    }
    
    // Vérifier aussi si c'est trop similaire à l'énoncé de référence f(x) = 1/(1+e^x)
    const referencePattern = /1\s*\/\s*\(\s*1\s*\+\s*e\^x\)/i;
    if (referencePattern.test(question) && !template.exerciseId.includes('-gen-') && !template.exerciseId.match(/-\d{10,}$/)) {
      errors.push('Fonction identique à l\'énoncé de référence détectée. Utilise une variante avec des coefficients et structure différents.');
    }
  }

  // 6. Vérifier les erreurs de formatage courantes
  if (/iestunesolutionde|estunesolutionde/i.test(question)) {
    errors.push('Formatage incorrect: "-i est une solution" doit être "$-i$ est une solution"');
  }

  // 7. Vérifier qu'il n'y a qu'UNE SEULE question (pas de sous-questions multiples)
  const questionCount = (question.match(/\*\*Partie\s+[^)]+\)/gi) || []).length;
  if (questionCount > 1) {
    errors.push(`Plusieurs questions détectées (${questionCount}). Une seule question par partie est requise.`);
  }
  
  // Vérifier aussi les sous-questions (a), b), c), etc.)
  const subQuestionPattern = /[a-z]\)\s+[A-Z]|[a-z]\)\s+[Mm]ontrer|[a-z]\)\s+[Cc]alculer|[a-z]\)\s+[Dd]éterminer/i;
  if (subQuestionPattern.test(question) && !question.includes(`Partie ${partId}`)) {
    errors.push('Sous-questions détectées. Une seule question par partie est requise.');
  }

  // 8. Vérifier que la question n'est pas vide et est suffisamment détaillée
  const cleanQuestion = question.replace(/\*\*/g, '').replace(/\$[^$]+\$/g, '').trim();
  if (cleanQuestion.length < 50) {
    errors.push('Question trop courte - doit être explicite et détaillée (minimum 50 caractères)');
  }
  
  // Vérifier qu'il y a une action claire (calculer, montrer, déterminer, etc.)
  // Inclure aussi "justifier", "déduire", "démontrer", "établir", etc.
  const hasAction = /(?:calculer|montrer|déterminer|résoudre|placer|exprimer|dresser|étudier|vérifier|démontrer|justifier|déduire|établir|prouver|démontrer|vérifier|construire|tracer|représenter)/i.test(question);
  if (!hasAction) {
    errors.push('Question non explicite: manque d\'action claire (calculer, montrer, déterminer, justifier, déduire, etc.)');
  }

  // 9. Vérifier la cohérence mathématique basique
  const hasEquation = /=\s*[0-9]|=\s*[+\-]?[a-z]|P\(z\)\s*=|f\(x\)\s*=/.test(question);
  const hasOperation = /[+\-×*÷\/]|\\frac|\\sqrt/.test(question);
  if (!hasEquation && !hasOperation && template.concepts.some(c => c.includes('calcul') || c.includes('équation'))) {
    errors.push('Question manque d\'éléments mathématiques (équations, opérations)');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Valide une correction générée par l'IA
 */
export async function validateCorrection(
  question: string,
  correction: string,
  partId: string
): Promise<{ isValid: boolean; errors: string[] }> {
  const errors: string[] = [];

  // 1. Vérifier que la correction répond à la question
  const questionKeywords = question.match(/\b(montrer|calculer|déterminer|résoudre|placer|exprimer|dresser|étudier)\b/i);
  if (questionKeywords) {
    const action = questionKeywords[0].toLowerCase();
    const hasAction = correction.toLowerCase().includes(action) || 
                     (action === 'montrer' && correction.includes('donc')) ||
                     (action === 'calculer' && /\d+/.test(correction)) ||
                     (action === 'déterminer' && correction.includes('='));
    if (!hasAction) {
      errors.push(`La correction ne semble pas ${action} comme demandé`);
    }
  }

  // 2. Vérifier le formatage mathématique
  const hasMathInCorrection = /\$[^$]+\$/.test(correction);
  if (!hasMathInCorrection && /[a-z]_[0-9]|[a-z]\^[0-9]|P\(|f\(/.test(correction)) {
    errors.push('Correction: formules mathématiques non formatées en LaTeX');
  }

  // 3. Vérifier la structure (doit avoir des étapes)
  const hasSteps = correction.includes('**') || correction.includes('ÉTAPE') || correction.includes('CALCUL');
  if (!hasSteps && correction.length > 100) {
    errors.push('Correction manque de structure (étapes, calculs)');
  }

  // 4. Vérifier qu'il y a une conclusion
  const hasConclusion = /CONCLUSION|RÉPONSE FINALE|donc|✓/.test(correction);
  if (!hasConclusion) {
    errors.push('Correction manque de conclusion/réponse finale');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Détecte le type de question
 */
function detectQuestionType(question: string): 'calcul' | 'demonstration' | 'geometrie' {
  const lower = question.toLowerCase();
  if (lower.includes('montrer') || lower.includes('démontrer') || lower.includes('justifier')) {
    return 'demonstration';
  }
  if (lower.includes('placer') || lower.includes('plan complexe') || lower.includes('affixe') || lower.includes('géométrie')) {
    return 'geometrie';
  }
  return 'calcul';
}

/**
 * Génère toutes les questions d'un exercice
 */
export async function generateExerciseQuestions(
  template: ExerciseTemplate
): Promise<GeneratedPart[]> {
  const parts: GeneratedPart[] = [];
  
  for (const partId of template.partSequence) {
    const part = await generatePartQuestion(template, partId, parts);
    parts.push(part);
    
    // Si validation échoue, on continue mais on log
    if (!part.validated) {
      console.warn(`⚠️ Part ${partId} validation failed:`, part.validationErrors);
    }
  }
  
  return parts;
}
