import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_STATISTIQUES: CurriculumSection = {
          id: 'bac-d-2023-ex3',
          title: 'Exercice 3 - Statistiques (2 points)',
          description: 'Statistiques descriptives: moyenne, médiane, écart-type, diagramme en boîte.',
          concepts: [
            'Moyenne',
            'Médiane',
            'Écart-type',
            'Variance',
            'Diagramme en boîte'
          ],
          objectives: [
            'Calculer la moyenne d\'une série statistique',
            'Déterminer la médiane',
            'Calculer l\'écart-type',
            'Interpréter un diagramme en boîte'
          ],
          content: {
            enonce_complet: `On considère la série statistique suivante: 12, 15, 18, 20, 22, 25, 28, 30
1. Calculer la moyenne et la médiane de cette série. (1pt)
2. Calculer l'écart-type. (1pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Rappeler les formules de moyenne et médiane
2. Expliquer comment calculer l'écart-type
3. Guider l'étudiant étape par étape`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            {
              type: 'calcul',
              question: `**Partie 1) Calculer la moyenne et la médiane**
              Série: 12, 15, 18, 20, 22, 25, 28, 30`,
              answer: `**SOLUTION COMPLÈTE - Partie 1 (1 point)**

**1. MOYENNE:**
x̄ = (12 + 15 + 18 + 20 + 22 + 25 + 28 + 30) / 8
  = 170 / 8
  = 21.25

**2. MÉDIANE:**
La série est déjà ordonnée. Il y a 8 valeurs (nombre pair).
La médiane est la moyenne des 4ème et 5ème valeurs:
• 4ème valeur: 20
• 5ème valeur: 22
Médiane = (20 + 22) / 2 = 21

**RÉPONSE FINALE:**
• **Moyenne: 21.25**
• **Médiane: 21**`,
              difficulty: 'Facile'
            },
            {
              type: 'calcul',
              question: `**Partie 2) Calculer l'écart-type**
              Utiliser la formule: σ = √[Σ(x_i - x̄)² / n]`,
              answer: `**SOLUTION COMPLÈTE - Partie 2 (1 point)**

**FORMULE:**
σ = √[Σ(x_i - x̄)² / n]

où x̄ = 21.25 et n = 8

**CALCUL DES ÉCARTS AU CARRÉ:**
(12 - 21.25)² = (-9.25)² = 85.5625
(15 - 21.25)² = (-6.25)² = 39.0625
(18 - 21.25)² = (-3.25)² = 10.5625
(20 - 21.25)² = (-1.25)² = 1.5625
(22 - 21.25)² = (0.75)² = 0.5625
(25 - 21.25)² = (3.75)² = 14.0625
(28 - 21.25)² = (6.75)² = 45.5625
(30 - 21.25)² = (8.75)² = 76.5625

**SOMME:**
Σ(x_i - x̄)² = 85.5625 + 39.0625 + 10.5625 + 1.5625 + 0.5625 + 14.0625 + 45.5625 + 76.5625
            = 273.5

**ÉCART-TYPE:**
σ = √(273.5 / 8) = √34.1875 ≈ 5.85

**RÉPONSE FINALE:**
**Écart-type: σ ≈ 5.85**`,
              difficulty: 'Moyen'
            }
          ],
          difficulty: 'Facile',
          estimatedTime: 15
        }
