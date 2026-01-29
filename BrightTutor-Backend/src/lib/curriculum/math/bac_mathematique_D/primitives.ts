import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_PRIMITIVES: CurriculumSection = {
          id: 'bac-d-2023-ex6',
          title: 'Exercice 6 - Primitives (2 points)',
          description: 'Calcul de primitives: fonctions simples, constantes d\'intégration.',
          concepts: [
            'Primitive',
            'Intégrale',
            'Constante d\'intégration',
            'Fonctions usuelles'
          ],
          objectives: [
            'Reconnaître une primitive',
            'Calculer des primitives de fonctions simples',
            'Utiliser les formules de primitives usuelles'
          ],
          content: {
            enonce_complet: `Déterminer une primitive de chacune des fonctions suivantes:
1. f(x) = 3x² - 2x + 5 (1pt)
2. g(x) = e^(2x) (1pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Rappeler les formules de primitives usuelles
2. Expliquer la notion de constante d'intégration
3. Guider le calcul pour chaque fonction`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            {
              type: 'calcul',
              question: `**Partie 1) Déterminer une primitive de f(x) = 3x² - 2x + 5**`,
              answer: `**SOLUTION COMPLÈTE - Partie 1 (1 point)**

**FORMULES DE PRIMITIVES:**
• ∫x^n dx = x^(n+1)/(n+1) + C
• ∫x dx = x²/2 + C
• ∫a dx = ax + C

**CALCUL:**
∫(3x² - 2x + 5) dx = 3∫x² dx - 2∫x dx + 5∫dx
                    = 3(x³/3) - 2(x²/2) + 5x + C
                    = x³ - x² + 5x + C

**RÉPONSE FINALE:**
**Une primitive de f est: F(x) = x³ - x² + 5x + C, où C est une constante**`,
              difficulty: 'Facile'
            },
            {
              type: 'calcul',
              question: `**Partie 2) Déterminer une primitive de g(x) = e^(2x)**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2 (1 point)**

**FORMULE:**
∫e^(ax) dx = (1/a)e^(ax) + C

**APPLICATION:**
Ici, a = 2, donc:
∫e^(2x) dx = (1/2)e^(2x) + C

**RÉPONSE FINALE:**
**Une primitive de g est: G(x) = (1/2)e^(2x) + C, où C est une constante**`,
              difficulty: 'Facile'
            }
          ],
          difficulty: 'Facile',
          estimatedTime: 15
        }
