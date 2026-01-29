import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_MATRICES: CurriculumSection = {
          id: 'bac-2023-ex12'
          ,
          title: 'Exercice 12 - Matrices (3 points)'
          ,
          description: 'Matrices: opérations (addition, soustraction, multiplication par un scalaire, multiplication de matrices), déterminant (ordre 2 et 3), inverse d\'une matrice carrée (méthode des cofacteurs et théorème de Cayley-Hamilton), résolution de systèmes d\'équations linéaires.',
          concepts: [
            'Matrice'
            ,
            'Addition de matrices'
            ,
            'Soustraction de matrices'
            ,
            'Multiplication par un scalaire'
            ,
            'Multiplication de matrices'
            ,
            'Déterminant'
            ,
            'Matrice inverse'
            ,
            'Matrice des cofacteurs'
            ,
            'Théorème de Cayley-Hamilton'
            ,
            'Système d\'équations linéaires'
            ,
            'Résolution matricielle'
          ],
          objectives: [
            'Effectuer des opérations sur les matrices'
            ,
            'Calculer le déterminant d\'une matrice carrée (ordre 2 et 3)'
            ,
            'Déterminer l\'inverse d\'une matrice carrée'
            ,
            'Utiliser la méthode des cofacteurs pour calculer l\'inverse'
            ,
            'Utiliser le théorème de Cayley-Hamilton pour calculer l\'inverse'
            ,
            'Résoudre un système d\'équations linéaires par méthode matricielle'
          ],
          content: {
            enonce_complet: `1. Soit les matrices A = [[1, -1, -2], [2, 0, 4], [3, 3, 1]] et B = [[1, 2, 3], [6, 3, -2], [-1, -1, 1]].
a) Calculer A + B et 2A. (0.5pt)
b) Calculer le produit A × B. (0.5pt)

2. Soit la matrice A = [[1, -1, -2], [2, 0, 4], [3, 3, 1]].
a) Calculer le déterminant de A. (0.5pt)
b) Montrer que A est inversible et calculer A⁻¹ en utilisant la méthode des cofacteurs. (1pt)

3. Soit la matrice A = [[0, 1, -1], [-3, 4, -3], [-1, 1, 0]].
a) Vérifier que A² - 3A + 2I₃ = O (matrice nulle). (0.5pt)
b) En déduire l'inverse de A. (0.5pt)

4. Résoudre le système d'équations suivant en utilisant la méthode matricielle:
x - y - 2z = 1
2x - 4z = -1
3x + 3y + z = 2 (1pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Rappeler les règles de calcul matriciel
2. Expliquer le calcul du déterminant (ordre 2 et 3)
3. Présenter la méthode des cofacteurs pour l'inverse
4. Introduire le théorème de Cayley-Hamilton
5. Guider dans la résolution de systèmes par méthode matricielle`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            // -------------------------------------------------------------------------
            // PARTIE 1a - OPÉRATIONS SUR LES MATRICES
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 1a) Calculer A + B et 2A**
Soit A = [[1, -1, -2], [2, 0, 4], [3, 3, 1]] et B = [[1, 2, 3], [6, 3, -2], [-1, -1, 1]].
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1a (0.5 point)**

**RAPPEL:** Pour additionner deux matrices, on additionne les éléments correspondants. Pour multiplier une matrice par un scalaire, on multiplie chaque élément par ce scalaire.

**ÉTAPE 1: Calcul de A + B**
A + B = [[1, -1, -2], [2, 0, 4], [3, 3, 1]] + [[1, 2, 3], [6, 3, -2], [-1, -1, 1]]

On additionne élément par élément:
- Ligne 1: [1+1, -1+2, -2+3] = [2, 1, 1]
- Ligne 2: [2+6, 0+3, 4+(-2)] = [8, 3, 2]
- Ligne 3: [3+(-1), 3+(-1), 1+1] = [2, 2, 2]

**A + B = [[2, 1, 1], [8, 3, 2], [2, 2, 2]]**

**ÉTAPE 2: Calcul de 2A**
2A = 2 × [[1, -1, -2], [2, 0, 4], [3, 3, 1]]

On multiplie chaque élément par 2:
- Ligne 1: [2×1, 2×(-1), 2×(-2)] = [2, -2, -4]
- Ligne 2: [2×2, 2×0, 2×4] = [4, 0, 8]
- Ligne 3: [2×3, 2×3, 2×1] = [6, 6, 2]

**2A = [[2, -2, -4], [4, 0, 8], [6, 6, 2]]**
`
              ,
              difficulty: 'Facile'
            },
            // -------------------------------------------------------------------------
            // PARTIE 1b - MULTIPLICATION DE MATRICES
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 1b) Calculer le produit A × B**
A = [[1, -1, -2], [2, 0, 4], [3, 3, 1]] et B = [[1, 2, 3], [6, 3, -2], [-1, -1, 1]].
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1b (0.5 point)**

**RAPPEL:** Pour multiplier deux matrices, le nombre de colonnes de la première doit être égal au nombre de lignes de la deuxième. Le produit (m, k) × (k, p) donne une matrice (m, p).

Ici: A est (3, 3) et B est (3, 3), donc A × B est (3, 3).

**MÉTHODE:** L'élément (i, j) du produit est la somme des produits des éléments de la ligne i de A par les éléments de la colonne j de B.

**CALCUL DE A × B:**

**Ligne 1 de A × B:**
- Colonne 1: 1×1 + (-1)×6 + (-2)×(-1) = 1 - 6 + 2 = **-3**
- Colonne 2: 1×2 + (-1)×3 + (-2)×(-1) = 2 - 3 + 2 = **1**
- Colonne 3: 1×3 + (-1)×(-2) + (-2)×1 = 3 + 2 - 2 = **3**

**Ligne 2 de A × B:**
- Colonne 1: 2×1 + 0×6 + 4×(-1) = 2 + 0 - 4 = **-2**
- Colonne 2: 2×2 + 0×3 + 4×(-1) = 4 + 0 - 4 = **0**
- Colonne 3: 2×3 + 0×(-2) + 4×1 = 6 + 0 + 4 = **10**

**Ligne 3 de A × B:**
- Colonne 1: 3×1 + 3×6 + 1×(-1) = 3 + 18 - 1 = **20**
- Colonne 2: 3×2 + 3×3 + 1×(-1) = 6 + 9 - 1 = **14**
- Colonne 3: 3×3 + 3×(-2) + 1×1 = 9 - 6 + 1 = **4**

**RÉPONSE FINALE:**
**A × B = [[-3, 1, 3], [-2, 0, 10], [20, 14, 4]]**
`
              ,
              difficulty: 'Moyen'
            },
            // -------------------------------------------------------------------------
            // PARTIE 2a - DÉTERMINANT D'ORDRE 3
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 2a) Calculer le déterminant de A**
A = [[1, -1, -2], [2, 0, 4], [3, 3, 1]].
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 2a (0.5 point)**

**RAPPEL:** Pour calculer le déterminant d'une matrice d'ordre 3, on développe selon une ligne ou une colonne avec des signes alternés.

**MÉTHODE:** On développe selon la première ligne (signes: +, -, +)

**FORMULE:** det(A) = a₁₁ × C₁₁ - a₁₂ × C₁₂ + a₁₃ × C₁₃

où Cᵢⱼ est le déterminant de la sous-matrice obtenue en supprimant la ligne i et la colonne j.

**CALCUL:**

det(A) = 1 × |[0, 4], [3, 1]| - (-1) × |[2, 4], [3, 1]| + (-2) × |[2, 0], [3, 3]|

**Calcul des mineurs:**
- |[0, 4], [3, 1]| = 0×1 - 4×3 = 0 - 12 = **-12**
- |[2, 4], [3, 1]| = 2×1 - 4×3 = 2 - 12 = **-10**
- |[2, 0], [3, 3]| = 2×3 - 0×3 = 6 - 0 = **6**

**DÉVELOPPEMENT:**
det(A) = 1 × (-12) - (-1) × (-10) + (-2) × 6
det(A) = -12 - 10 - 12
det(A) = **-34**

**RÉPONSE FINALE:**
**det(A) = -34**
`
              ,
              difficulty: 'Moyen'
            },
            // -------------------------------------------------------------------------
            // PARTIE 2b - INVERSE PAR MÉTHODE DES COFACTEURS
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 2b) Montrer que A est inversible et calculer A⁻¹ en utilisant la méthode des cofacteurs**
A = [[1, -1, -2], [2, 0, 4], [3, 3, 1]].
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 2b (1 point)**

**ÉTAPE 1: Vérifier que A est inversible**
D'après la partie 2a, det(A) = -34 ≠ 0.

**THÉORÈME:** Une matrice carrée est inversible si et seulement si son déterminant est non nul.

**CONCLUSION:** det(A) = -34 ≠ 0, donc **A est inversible**.

**ÉTAPE 2: Calculer la matrice des cofacteurs Com(A)**

**RAPPEL:** Le cofacteur Cᵢⱼ = (-1)^(i+j) × Mᵢⱼ, où Mᵢⱼ est le mineur (déterminant de la sous-matrice).

**CALCUL DES COFACTEURS:**

**Ligne 1:**
- C₁₁ = (-1)^(1+1) × |[0, 4], [3, 1]| = 1 × (-12) = **-12**
- C₁₂ = (-1)^(1+2) × |[2, 4], [3, 1]| = -1 × (-10) = **10**
- C₁₃ = (-1)^(1+3) × |[2, 0], [3, 3]| = 1 × 6 = **6**

**Ligne 2:**
- C₂₁ = (-1)^(2+1) × |[-1, -2], [3, 1]| = -1 × (-1×1 - (-2)×3) = -1 × (-1 + 6) = **-5**
- C₂₂ = (-1)^(2+2) × |[1, -2], [3, 1]| = 1 × (1×1 - (-2)×3) = 1 × (1 + 6) = **7**
- C₂₃ = (-1)^(2+3) × |[1, -1], [3, 3]| = -1 × (1×3 - (-1)×3) = -1 × (3 + 3) = **-6**

**Ligne 3:**
- C₃₁ = (-1)^(3+1) × |[-1, -2], [0, 4]| = 1 × (-1×4 - (-2)×0) = 1 × (-4) = **-4**
- C₃₂ = (-1)^(3+2) × |[1, -2], [2, 4]| = -1 × (1×4 - (-2)×2) = -1 × (4 + 4) = **-8**
- C₃₃ = (-1)^(3+3) × |[1, -1], [2, 0]| = 1 × (1×0 - (-1)×2) = 1 × (0 + 2) = **2**

**MATRICE DES COFACTEURS:**
**Com(A) = [[-12, 10, 6], [-5, 7, -6], [-4, -8, 2]]**

**ÉTAPE 3: Calculer la transposée de Com(A)**

**RAPPEL:** La transposée s'obtient en échangeant les lignes et les colonnes.

**t(Com(A)) = [[-12, -5, -4], [10, 7, -8], [6, -6, 2]]**

**ÉTAPE 4: Calculer A⁻¹**

**FORMULE:** A⁻¹ = (1 / det(A)) × t(Com(A))

A⁻¹ = (1 / (-34)) × [[-12, -5, -4], [10, 7, -8], [6, -6, 2]]

A⁻¹ = **(-1/34) × [[-12, -5, -4], [10, 7, -8], [6, -6, 2]]**

**RÉPONSE FINALE:**
**A⁻¹ = [[12/34, 5/34, 4/34], [-10/34, -7/34, 8/34], [-6/34, 6/34, -2/34]]**

On peut simplifier: **A⁻¹ = [[6/17, 5/34, 2/17], [-5/17, -7/34, 4/17], [-3/17, 3/17, -1/17]]**
`
              ,
              difficulty: 'Difficile'
            },
            // -------------------------------------------------------------------------
            // PARTIE 3a - VÉRIFICATION CAYLEY-HAMILTON
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 3a) Vérifier que A² - 3A + 2I₃ = O (matrice nulle)**
A = [[0, 1, -1], [-3, 4, -3], [-1, 1, 0]].
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 3a (0.5 point)**

**ÉTAPE 1: Calculer A²**

A² = A × A = [[0, 1, -1], [-3, 4, -3], [-1, 1, 0]] × [[0, 1, -1], [-3, 4, -3], [-1, 1, 0]]

**Ligne 1 de A²:**
- Colonne 1: 0×0 + 1×(-3) + (-1)×(-1) = 0 - 3 + 1 = **-2**
- Colonne 2: 0×1 + 1×4 + (-1)×1 = 0 + 4 - 1 = **3**
- Colonne 3: 0×(-1) + 1×(-3) + (-1)×0 = 0 - 3 + 0 = **-3**

**Ligne 2 de A²:**
- Colonne 1: (-3)×0 + 4×(-3) + (-3)×(-1) = 0 - 12 + 3 = **-9**
- Colonne 2: (-3)×1 + 4×4 + (-3)×1 = -3 + 16 - 3 = **10**
- Colonne 3: (-3)×(-1) + 4×(-3) + (-3)×0 = 3 - 12 + 0 = **-9**

**Ligne 3 de A²:**
- Colonne 1: (-1)×0 + 1×(-3) + 0×(-1) = 0 - 3 + 0 = **-3**
- Colonne 2: (-1)×1 + 1×4 + 0×1 = -1 + 4 + 0 = **3**
- Colonne 3: (-1)×(-1) + 1×(-3) + 0×0 = 1 - 3 + 0 = **-2**

**A² = [[-2, 3, -3], [-9, 10, -9], [-3, 3, -2]]**

**ÉTAPE 2: Calculer 3A**

3A = 3 × [[0, 1, -1], [-3, 4, -3], [-1, 1, 0]] = [[0, 3, -3], [-9, 12, -9], [-3, 3, 0]]

**ÉTAPE 3: Calculer 2I₃**

2I₃ = 2 × [[1, 0, 0], [0, 1, 0], [0, 0, 1]] = [[2, 0, 0], [0, 2, 0], [0, 0, 2]]

**ÉTAPE 4: Calculer A² - 3A + 2I₃**

A² - 3A + 2I₃ = [[-2, 3, -3], [-9, 10, -9], [-3, 3, -2]] - [[0, 3, -3], [-9, 12, -9], [-3, 3, 0]] + [[2, 0, 0], [0, 2, 0], [0, 0, 2]]

= [[-2-0+2, 3-3+0, -3-(-3)+0], [-9-(-9)+0, 10-12+2, -9-(-9)+0], [-3-(-3)+0, 3-3+0, -2-0+2]]

= [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

**RÉPONSE FINALE:**
**A² - 3A + 2I₃ = O** (matrice nulle) ✓
`
              ,
              difficulty: 'Moyen'
            },
            // -------------------------------------------------------------------------
            // PARTIE 3b - INVERSE PAR CAYLEY-HAMILTON
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 3b) En déduire l'inverse de A**
A = [[0, 1, -1], [-3, 4, -3], [-1, 1, 0]].
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 3b (0.5 point)**

**HYPOTHÈSE:** D'après la partie 3a, on a: A² - 3A + 2I₃ = O

**ÉTAPE 1: Réarranger l'équation**

A² - 3A + 2I₃ = O
A² - 3A = -2I₃

En factorisant A à gauche:
A(A - 3I₃) = -2I₃

**ÉTAPE 2: Isoler A⁻¹**

En multipliant par -1/2:
A × (-1/2)(A - 3I₃) = I₃

Par définition de l'inverse: A × A⁻¹ = I₃

**CONCLUSION:**
**A⁻¹ = (-1/2)(A - 3I₃)**

**ÉTAPE 3: Calculer A - 3I₃**

A - 3I₃ = [[0, 1, -1], [-3, 4, -3], [-1, 1, 0]] - 3 × [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

= [[0, 1, -1], [-3, 4, -3], [-1, 1, 0]] - [[3, 0, 0], [0, 3, 0], [0, 0, 3]]

= [[-3, 1, -1], [-3, 1, -3], [-1, 1, -3]]

**ÉTAPE 4: Calculer A⁻¹**

A⁻¹ = (-1/2) × [[-3, 1, -1], [-3, 1, -3], [-1, 1, -3]]

A⁻¹ = **[[3/2, -1/2, 1/2], [3/2, -1/2, 3/2], [1/2, -1/2, 3/2]]**

**VÉRIFICATION:** On peut vérifier que A × A⁻¹ = I₃ (calcul non détaillé ici).

**RÉPONSE FINALE:**
**A⁻¹ = [[3/2, -1/2, 1/2], [3/2, -1/2, 3/2], [1/2, -1/2, 3/2]]**
`
              ,
              difficulty: 'Difficile'
            },
            // -------------------------------------------------------------------------
            // PARTIE 4 - RÉSOLUTION D'UN SYSTÈME PAR MÉTHODE MATRICIELLE
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 4) Résoudre le système d'équations suivant en utilisant la méthode matricielle:**
x - y - 2z = 1
2x - 4z = -1
3x + 3y + z = 2
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 4 (1 point)**

**ÉTAPE 1: Écrire le système sous forme matricielle**

Le système s'écrit: **A × X = B**

où:
- A = [[1, -1, -2], [2, 0, -4], [3, 3, 1]] (matrice des coefficients)
- X = [[x], [y], [z]] (matrice des inconnues)
- B = [[1], [-1], [2]] (matrice des constantes)

**ÉTAPE 2: Vérifier que A est inversible**

On calcule det(A):
det(A) = 1 × |[0, -4], [3, 1]| - (-1) × |[2, -4], [3, 1]| + (-2) × |[2, 0], [3, 3]|

= 1 × (0×1 - (-4)×3) + 1 × (2×1 - (-4)×3) - 2 × (2×3 - 0×3)
= 1 × (0 + 12) + 1 × (2 + 12) - 2 × 6
= 12 + 14 - 12
= **14 ≠ 0**

Donc **A est inversible**.

**ÉTAPE 3: Calculer A⁻¹**

En utilisant la méthode des cofacteurs (similaire à la partie 2b), on trouve:

A⁻¹ = (1/14) × [[12, -5, 4], [-14, 7, 0], [-6, -6, 2]]

**ÉTAPE 4: Résoudre le système**

Si A est inversible, alors: **X = A⁻¹ × B**

X = (1/14) × [[12, -5, 4], [-14, 7, 0], [-6, -6, 2]] × [[1], [-1], [2]]

**Calcul du produit:**

**Ligne 1:** (1/14) × (12×1 + (-5)×(-1) + 4×2) = (1/14) × (12 + 5 + 8) = (1/14) × 25 = **25/14**

**Ligne 2:** (1/14) × ((-14)×1 + 7×(-1) + 0×2) = (1/14) × (-14 - 7 + 0) = (1/14) × (-21) = **-21/14 = -3/2**

**Ligne 3:** (1/14) × ((-6)×1 + (-6)×(-1) + 2×2) = (1/14) × (-6 + 6 + 4) = (1/14) × 4 = **4/14 = 2/7**

**RÉPONSE FINALE:**
**X = [[25/14], [-3/2], [2/7]]**

**SOLUTION DU SYSTÈME:**
**S = {(25/14, -3/2, 2/7)}**

**VÉRIFICATION:** On peut substituer ces valeurs dans les équations originales pour vérifier.
`
              ,
              difficulty: 'Difficile'
            }
          ],
          difficulty: 'Difficile',
          estimatedTime: 35
        }
