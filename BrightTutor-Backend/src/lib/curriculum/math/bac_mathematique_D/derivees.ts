import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_DERIVEES: CurriculumSection = {
          id: 'bac-d-2023-ex5',
          title: 'Exercice 5 - Dérivées (2 points)',
          description: 'Calcul de dérivées: fonctions simples, dérivées usuelles, équation de tangente.',
          concepts: [
            'Dérivée',
            'Fonctions usuelles',
            'Tangente à une courbe',
            'Équation de droite'
          ],
          objectives: [
            'Calculer des dérivées de fonctions simples',
            'Déterminer l\'équation d\'une tangente',
            'Utiliser les formules de dérivées usuelles'
          ],
          content: {
            enonce_complet: `On considère la fonction f définie sur ℝ par: f(x) = x³ - 3x + 2
1. Calculer f'(x). (0.5pt)
2. Déterminer l'équation de la tangente à la courbe de f au point d'abscisse 1. (1.5pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Rappeler les formules de dérivées usuelles
2. Expliquer la formule de l'équation de tangente
3. Guider le calcul étape par étape`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            {
              type: 'calcul',
              question: `**Partie 1) Calculer f'(x)**
              f(x) = x³ - 3x + 2`,
              answer: `**SOLUTION COMPLÈTE - Partie 1 (0.5 point)**

**DÉRIVÉE:**
f(x) = x³ - 3x + 2

**FORMULES UTILISÉES:**
• (x^n)' = nx^(n-1)
• (ax)' = a
• (constante)' = 0

**CALCUL:**
f'(x) = 3x² - 3 + 0 = 3x² - 3 = 3(x² - 1)

**RÉPONSE FINALE:**
**f'(x) = 3x² - 3**`,
              difficulty: 'Facile'
            },
            {
              type: 'calcul',
              question: `**Partie 2) Déterminer l'équation de la tangente au point d'abscisse 1**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2 (1.5 point)**

**FORMULE DE LA TANGENTE:**
La tangente à la courbe de f au point d'abscisse a a pour équation:
y = f'(a)(x - a) + f(a)

**APPLICATION:**
a = 1

**1. Calcul de f(1):**
f(1) = 1³ - 3×1 + 2 = 1 - 3 + 2 = 0

**2. Calcul de f'(1):**
f'(1) = 3×1² - 3 = 3 - 3 = 0

**3. ÉQUATION DE LA TANGENTE:**
y = f'(1)(x - 1) + f(1)
y = 0×(x - 1) + 0
y = 0

**RÉPONSE FINALE:**
**L'équation de la tangente au point d'abscisse 1 est: y = 0**
(La tangente est horizontale car f'(1) = 0)`,
              difficulty: 'Moyen'
            }
          ],
          difficulty: 'Facile',
          estimatedTime: 15
        }
