import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_FONCTIONS: CurriculumSection = {
          id: 'bac-d-2023-ex1',
          title: 'Exercice 1 - Fonctions (3 points)',
          description: 'Étude de fonctions: domaine de définition, dérivée, variations, limites, tableau de variations. Fonction simple f(x) = (x² - 1)/(x + 2)',
          concepts: [
            'Domaine de définition',
            'Dérivée d\'une fonction',
            'Tableau de variations',
            'Limites',
            'Asymptotes'
          ],
          objectives: [
            'Déterminer le domaine de définition',
            'Calculer la dérivée d\'une fonction',
            'Étudier les variations d\'une fonction',
            'Tracer un tableau de variations',
            'Calculer des limites simples'
          ],
          content: {
            enonce_complet: `On considère la fonction f définie sur ]-2; +∞[ par: f(x) = (x² - 1)/(x + 2)
1. a) Calculer la dérivée f'(x) de f. (0.75pt)
b) Étudier le signe de f'(x) et en déduire les variations de f. (0.75pt)
2. a) Calculer les limites de f en -2⁺ et en +∞. (0.75pt)
b) Dresser le tableau de variations de f. (0.75pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Commencer par rappeler la formule de dérivée d'un quotient
2. Guider l'étudiant pour calculer f'(x)
3. Aider à déterminer le signe de la dérivée
4. Expliquer comment construire le tableau de variations`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            {
              type: 'calcul',
              question: `**Partie 1a) Calculer la dérivée f'(x) de f**
              Fonction: f(x) = (x² - 1)/(x + 2)`,
              answer: `**SOLUTION COMPLÈTE - Partie 1a (0.75 point)**

**FORMULE DE DÉRIVÉE D'UN QUOTIENT:**
Si f(x) = u(x)/v(x), alors f'(x) = [u'(x)v(x) - u(x)v'(x)] / [v(x)]²

**APPLICATION:**
• u(x) = x² - 1  ⟹  u'(x) = 2x
• v(x) = x + 2   ⟹  v'(x) = 1

**CALCUL:**
f'(x) = [2x(x + 2) - (x² - 1)×1] / (x + 2)²
      = [2x² + 4x - x² + 1] / (x + 2)²
      = (x² + 4x + 1) / (x + 2)²

**RÉPONSE FINALE:**
**f'(x) = (x² + 4x + 1) / (x + 2)²**`,
              difficulty: 'Facile'
            },
            {
              type: 'demonstration',
              question: `**Partie 1b) Étudier le signe de f'(x) et en déduire les variations de f**
              f'(x) = (x² + 4x + 1) / (x + 2)²`,
              answer: `**SOLUTION COMPLÈTE - Partie 1b (0.75 point)**

**ÉTUDE DU SIGNE DE f'(x):**

**1. Signe du dénominateur:**
(x + 2)² > 0 pour tout x ∈ ]-2; +∞[
Donc le signe de f'(x) dépend uniquement du signe du numérateur: x² + 4x + 1

**2. Signe du numérateur x² + 4x + 1:**
Δ = 4² - 4×1×1 = 16 - 4 = 12 > 0
Racines: x₁ = (-4 - √12)/2 = -2 - √3 ≈ -3.73
         x₂ = (-4 + √12)/2 = -2 + √3 ≈ -0.27

**3. Tableau de signe:**
Comme x ∈ ]-2; +∞[, on a:
• Pour x ∈ ]-2; -2+√3[ : x² + 4x + 1 > 0  ⟹  f'(x) > 0  ⟹  f croissante
• Pour x = -2+√3 : f'(x) = 0
• Pour x ∈ ]-2+√3; +∞[ : x² + 4x + 1 > 0  ⟹  f'(x) > 0  ⟹  f croissante

**CONCLUSION:**
f'(x) ≥ 0 sur ]-2; +∞[, donc **f est croissante** sur ]-2; +∞[`,
              difficulty: 'Moyen'
            },
            {
              type: 'calcul',
              question: `**Partie 2a) Calculer les limites de f en -2⁺ et en +∞**
              f(x) = (x² - 1)/(x + 2)`,
              answer: `**SOLUTION COMPLÈTE - Partie 2a (0.75 point)**

**1. Limite en -2⁺:**
lim_{x→-2⁺} (x² - 1) = (-2)² - 1 = 4 - 1 = 3
lim_{x→-2⁺} (x + 2) = 0⁺
Donc: **lim_{x→-2⁺} f(x) = +∞**

**2. Limite en +∞:**
lim_{x→+∞} (x² - 1)/(x + 2) = lim_{x→+∞} x²/x = lim_{x→+∞} x = **+∞**

**RÉPONSE FINALE:**
• **lim_{x→-2⁺} f(x) = +∞** (asymptote verticale en x = -2)
• **lim_{x→+∞} f(x) = +∞**`,
              difficulty: 'Facile'
            },
            {
              type: 'demonstration',
              question: `**Partie 2b) Dresser le tableau de variations de f**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2b (0.75 point)**

**TABLEAU DE VARIATIONS:**

| x  | -2  |        -2+√3        | +∞ |
|---|---|---|---|---|
| f'(x) |   |  +  |  0  |  +  |
| f(x) | +∞ ↗ |     | f(-2+√3) | ↗ +∞ |

**DÉTAILS:**
• f'(x) > 0 sur ]-2; +∞[ (sauf en -2+√3 où f'(x) = 0)
• f est croissante sur ]-2; +∞[
• f(-2+√3) est le minimum relatif sur l'intervalle

**RÉPONSE FINALE:**
Tableau de variations dressé.`,
              difficulty: 'Facile'
            }
          ],
          difficulty: 'Moyen',
          estimatedTime: 25
        }
