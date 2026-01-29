import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_EXPONENTIELLES: CurriculumSection = {
          id: 'bac-d-2023-ex8',
          title: 'Exercice 8 - Fonctions exponentielles (4 points)',
          description: 'Étude de fonctions exponentielles: limites, dérivées, variations, asymptotes, équations, applications pratiques',
          concepts: [
            'Fonction exponentielle',
            'Limites avec exponentielle',
            'Dérivée de exponentielle',
            'Asymptotes horizontales',
            'Équations exponentielles',
            'Applications pratiques'
          ],
          objectives: [
            'Calculer des limites avec exponentielles',
            'Dériver des fonctions exponentielles',
            'Étudier les variations',
            'Déterminer les asymptotes',
            'Résoudre des équations exponentielles',
            'Appliquer aux problèmes pratiques'
          ],
          content: {
            enonce_complet: `On considère la fonction f définie sur ℝ par:
f(x) = (x² - x - 1)e^(-x) + 1

1. a) Calculer les limites de f en -∞ et en +∞. (1pt)
b) En déduire les asymptotes de la courbe représentative (C) de f. (0.5pt)

2. a) Calculer f'(x) pour tout x ∈ ℝ. (1pt)
b) Étudier le signe de f'(x) et dresser le tableau de variations de f. (0.75pt)

3. Montrer que f vérifie l'équation différentielle: y'' + 2y' + y = 2e^(-x) + 1. (0.75pt)

4. Calculer l'aire du domaine délimité par la courbe (C), l'asymptote horizontale et les droites x = 0 et x = 1. (1pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Guider pour calculer les limites avec exponentielles
2. Expliquer le comportement de e^(-x) en ±∞
3. Aider à calculer la dérivée avec la règle du produit
4. Expliquer comment étudier les variations
5. Guider pour vérifier une équation différentielle
6. Aider à calculer une aire avec intégrales`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            {
              type: 'calcul',
              question: `**Partie 1a) Calculer les limites de f en -∞ et en +∞**
Fonction: f(x) = (x² - x - 1)e^(-x) + 1`,
              answer: `**SOLUTION COMPLÈTE - Partie 1a (1 point)**

**LIMITE EN +∞:**
Quand x → +∞:
• e^(-x) = 1/e^x → 0 (car e^x → +∞)
• (x² - x - 1)e^(-x) → (polynôme qui tend vers +∞) × 0
• Forme indéterminée: factorisons
• (x² - x - 1)e^(-x) = (x² - x - 1)/e^x
• Comme e^x croît plus vite que tout polynôme: (x² - x - 1)/e^x → 0
• Donc f(x) → 0 + 1 = **1**

**LIMITE EN -∞:**
Quand x → -∞:
• e^(-x) = e^|x| → +∞ (car -x → +∞)
• x² - x - 1 → +∞ (polynôme de degré 2)
• (x² - x - 1)e^(-x) → +∞ × +∞ = **+∞**
• Donc f(x) → +∞ + 1 = **+∞**

**RÉPONSE FINALE:**
• lim_{x→+∞} f(x) = **1**
• lim_{x→-∞} f(x) = **+∞**`,
              difficulty: 'Moyen'
            },
            {
              type: 'demonstration',
              question: `**Partie 1b) En déduire les asymptotes de (C)**`,
              answer: `**SOLUTION COMPLÈTE - Partie 1b (0.5 point)**

**ANALYSE DES LIMITES:**
• En +∞: lim_{x→+∞} f(x) = 1
  → La droite **y = 1** est une asymptote horizontale en +∞

• En -∞: lim_{x→-∞} f(x) = +∞
  → Pas d'asymptote horizontale en -∞

**RECHERCHE D'UNE ASYMPTOTE OBLIQUE EN -∞:**
Pour x → -∞, cherchons une asymptote de la forme y = ax + b:
• a = lim_{x→-∞} f(x)/x = lim_{x→-∞} [(x² - x - 1)e^(-x) + 1]/x
  = lim_{x→-∞} [(x² - x - 1)e^(-x)]/x + lim_{x→-∞} 1/x
  = lim_{x→-∞} (x - 1 - 1/x)e^(-x) + 0
  = +∞ × +∞ = +∞
  → Pas d'asymptote oblique (la limite n'est pas finie)

**RÉPONSE FINALE:**
La courbe (C) admet une **asymptote horizontale d'équation y = 1** en +∞.`,
              difficulty: 'Moyen'
            },
            {
              type: 'calcul',
              question: `**Partie 2a) Calculer f'(x) pour tout x ∈ ℝ**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2a (1 point)**

**FONCTION:** f(x) = (x² - x - 1)e^(-x) + 1

**MÉTHODE:** Utiliser la règle du produit pour (x² - x - 1)e^(-x)

**POSONS:**
• u(x) = x² - x - 1  →  u'(x) = 2x - 1
• v(x) = e^(-x)      →  v'(x) = -e^(-x)

**FORMULE DU PRODUIT:** (uv)' = u'v + uv'

**CALCUL:**
f'(x) = [(x² - x - 1)e^(-x)]' + [1]'
      = [u'(x)v(x) + u(x)v'(x)] + 0
      = (2x - 1)e^(-x) + (x² - x - 1)(-e^(-x))
      = (2x - 1)e^(-x) - (x² - x - 1)e^(-x)
      = e^(-x)[(2x - 1) - (x² - x - 1)]
      = e^(-x)[2x - 1 - x² + x + 1]
      = e^(-x)[-x² + 3x]
      = e^(-x)(-x² + 3x)
      = **e^(-x)(3x - x²)**

**RÉPONSE FINALE:**
**f'(x) = e^(-x)(3x - x²)**`,
              difficulty: 'Facile'
            },
            {
              type: 'demonstration',
              question: `**Partie 2b) Étudier le signe de f'(x) et dresser le tableau de variations**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2b (0.75 point)**

**DÉRIVÉE:** f'(x) = e^(-x)(3x - x²) = e^(-x)x(3 - x)

**ÉTUDE DU SIGNE:**
• e^(-x) > 0 pour tout x ∈ ℝ
• Le signe de f'(x) dépend donc de x(3 - x)

**RÉSOLUTION DE f'(x) = 0:**
x(3 - x) = 0
⟺ x = 0 OU 3 - x = 0
⟺ x = 0 OU x = 3

**SIGNE DE x(3 - x):**
• Si x < 0: x < 0 et (3 - x) > 0 → x(3 - x) < 0 → **f'(x) < 0**
• Si x = 0: f'(0) = 0
• Si 0 < x < 3: x > 0 et (3 - x) > 0 → x(3 - x) > 0 → **f'(x) > 0**
• Si x = 3: f'(3) = 0
• Si x > 3: x > 0 et (3 - x) < 0 → x(3 - x) < 0 → **f'(x) < 0**

**VALEURS REMARQUABLES:**
• f(0) = (0² - 0 - 1)e^0 + 1 = -1 + 1 = 0
• f(3) = (9 - 3 - 1)e^(-3) + 1 = 5e^(-3) + 1

**TABLEAU DE VARIATIONS:**
{"type": "variation_table", "function": "f(x) = (x² - x - 1)e^(-x) + 1", "x": ["-∞", "0", "3", "+∞"], "sign_fprime": ["-", "0", "+", "0", "-"], "variation": ["↘", "↗", "↘"], "f_values": ["+∞", "0", "5e^(-3) + 1", "1"]}

**CONCLUSION:**
• f est décroissante sur ]-∞, 0] et [3, +∞[
• f est croissante sur [0, 3]
• f admet un minimum en x = 0 (f(0) = 0)
• f admet un maximum en x = 3 (f(3) = 5e^(-3) + 1)`,
              difficulty: 'Moyen'
            },
            {
              type: 'demonstration',
              question: `**Partie 3) Montrer que f vérifie y'' + 2y' + y = 2e^(-x) + 1**`,
              answer: `**SOLUTION COMPLÈTE - Partie 3 (0.75 point)**

**MÉTHODE:** Calculer f''(x), puis vérifier que f'' + 2f' + f = 2e^(-x) + 1

**ÉTAPE 1: Calculer f''(x)**
On a f'(x) = e^(-x)(3x - x²)

Posons u(x) = 3x - x² et v(x) = e^(-x)
• u'(x) = 3 - 2x
• v'(x) = -e^(-x)

f''(x) = [e^(-x)(3x - x²)]'
       = u'(x)v(x) + u(x)v'(x)
       = (3 - 2x)e^(-x) + (3x - x²)(-e^(-x))
       = e^(-x)[3 - 2x - 3x + x²]
       = e^(-x)[x² - 5x + 3]

**ÉTAPE 2: Vérifier l'équation**
f''(x) + 2f'(x) + f(x) = e^(-x)[x² - 5x + 3] + 2e^(-x)(3x - x²) + [(x² - x - 1)e^(-x) + 1]
                        = e^(-x)[x² - 5x + 3 + 6x - 2x² + x² - x - 1] + 1
                        = e^(-x)[(x² - 2x² + x²) + (-5x + 6x - x) + (3 - 1)] + 1
                        = e^(-x)[0x² + 0x + 2] + 1
                        = 2e^(-x) + 1 ✓

**CONCLUSION:**
f vérifie bien l'équation différentielle y'' + 2y' + y = 2e^(-x) + 1.`,
              difficulty: 'Difficile'
            },
            {
              type: 'calcul',
              question: `**Partie 4) Calculer l'aire du domaine délimité par (C), y = 1, x = 0 et x = 1**`,
              answer: `**SOLUTION COMPLÈTE - Partie 4 (1 point)**

**DOMAINE:** D = {(x, y) | 0 ≤ x ≤ 1, 1 ≤ y ≤ f(x)}

**AIRE:** A = ∫₀¹ [f(x) - 1] dx
        = ∫₀¹ [(x² - x - 1)e^(-x) + 1 - 1] dx
        = ∫₀¹ (x² - x - 1)e^(-x) dx

**MÉTHODE:** Intégration par parties (ou utiliser que f vérifie l'équation différentielle)

**UTILISONS L'ÉQUATION DIFFÉRENTIELLE:**
Comme f'' + 2f' + f = 2e^(-x) + 1, on peut trouver une primitive.

**CALCUL DIRECT:**
A = ∫₀¹ (x² - x - 1)e^(-x) dx

En utilisant une primitive de (x² - x - 1)e^(-x):
Une primitive est: F(x) = -(x² + x)e^(-x)

Vérification: F'(x) = -(2x + 1)e^(-x) + (x² + x)e^(-x) = e^(-x)(-2x - 1 + x² + x) = e^(-x)(x² - x - 1) ✓

**CALCUL:**
A = [F(x)]₀¹ = F(1) - F(0)
  = [-(1² + 1)e^(-1)] - [-(0² + 0)e^0]
  = -2e^(-1) - 0
  = **-2/e**

**AIRE POSITIVE:**
Comme f(x) < 1 sur [0, 1] (d'après le tableau), l'aire est:
A = |∫₀¹ [f(x) - 1] dx| = **2/e** unités d'aire

**RÉPONSE FINALE:**
L'aire du domaine est **2/e** unités d'aire.`,
              difficulty: 'Difficile'
            }
          ],
          difficulty: 'Moyen',
          estimatedTime: 35
        }
