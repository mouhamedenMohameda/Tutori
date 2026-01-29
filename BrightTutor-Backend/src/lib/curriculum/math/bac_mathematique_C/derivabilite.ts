import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_DERIVABILITE: CurriculumSection = {
          id: 'bac-2023-ex9'
          ,
          title: 'Exercice 9 - Dérivabilité (3 points)'
          ,
          description: 'Dérivabilité en un point, continuité, nombre dérivé, tangente, dérivée à gauche, dérivée à droite, fonctions dérivables sur un intervalle.',
          concepts: [
            'Dérivabilité'
            ,
            'Nombre dérivé'
            ,
            'Continuité'
            ,
            'Dérivée à gauche'
            ,
            'Dérivée à droite'
            ,
            'Tangente'
            ,
            'Fonction dérivable'
            ,
            'Théorème des accroissements finis'
          ],
          objectives: [
            'Étudier la dérivabilité en un point'
            ,
            'Calculer un nombre dérivé'
            ,
            'Vérifier la continuité'
            ,
            'Calculer une dérivée à gauche et à droite'
            ,
            'Déterminer l\'équation d\'une tangente'
            ,
            'Étudier la dérivabilité sur un intervalle'
          ],
          content: {
            enonce_complet: `Soit f la fonction définie sur ℝ par:
f(x) = {
  x² si x ≤ 0
  2x - 1 si x > 0
}
1. a) Étudier la continuité de f en 0. (0.5pt)
b) Étudier la dérivabilité de f en 0. (0.75pt)
2. a) Calculer f'(x) pour tout x ∈ ℝ. (0.5pt)
b) La fonction f est-elle dérivable sur ℝ? Justifier. (0.5pt)
3. Déterminer l'équation de la tangente à la courbe de f au point d'abscisse 1. (0.75pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Faire comprendre la différence entre continuité et dérivabilité
2. Expliquer les dérivées à gauche et à droite
3. Guider dans le calcul des limites`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            // -------------------------------------------------------------------------
            // PARTIE 1a - CONTINUITÉ - DÉFINITION (Sous-notion: Continuité)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 1a) Rappeler la définition de la continuité en un point**
f(x) = {
  x² si x ≤ 0
  2x - 1 si x > 0
}
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 1a (0.167 point)**

**DÉFINITION:**
Une fonction f est continue en un point a si:
lim_{x→a} f(x) = f(a)

**POUR UNE FONCTION PAR MORCEAUX:**
Il faut vérifier que:
- lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = f(a)

**APPLICATION:**
Pour étudier la continuité de f en 0, on doit calculer:
- f(0)
- lim_{x→0⁻} f(x)
- lim_{x→0⁺} f(x)
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 1b - CONTINUITÉ - CALCUL DES LIMITES (Sous-notion: Limites)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 1b) Calculer f(0) et les limites à gauche et à droite en 0**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 1b (0.25 point)**

**CALCUL DE f(0):**
f(0) = 0² = **0** (car 0 ≤ 0, donc on utilise x²)

**LIMITE À GAUCHE:**
lim_{x→0⁻} f(x) = lim_{x→0⁻} x² = 0² = **0**
(car pour x < 0, on a x ≤ 0, donc f(x) = x²)

**LIMITE À DROITE:**
lim_{x→0⁺} f(x) = lim_{x→0⁺} (2x - 1) = 2×0 - 1 = **-1**
(car pour x > 0, on a f(x) = 2x - 1)

**RÉSULTATS:**
- f(0) = 0
- lim_{x→0⁻} f(x) = 0
- lim_{x→0⁺} f(x) = -1
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 1c - CONTINUITÉ - CONCLUSION (Sous-notion: Conclusion)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 1c) Conclure sur la continuité de f en 0**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 1c (0.083 point)**

**COMPARAISON:**
lim_{x→0⁻} f(x) = 0 ≠ -1 = lim_{x→0⁺} f(x)

**CONCLUSION:**
Les limites à gauche et à droite sont différentes, donc **la limite de f en 0 n'existe pas**.

Par conséquent, **f n'est pas continue en 0**.

**REMARQUE:**
Même si f(0) = 0 = lim_{x→0⁻} f(x), la limite à droite est différente, donc f n'est pas continue.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 2a - DÉRIVABILITÉ - DÉRIVÉE À GAUCHE (Sous-notion: Dérivée à gauche)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 2a) Calculer la dérivée à gauche de f en 0**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 2a (0.25 point)**

**DÉFINITION:**
La dérivée à gauche en 0 est: f'_g(0) = lim_{h→0⁻} [f(0+h) - f(0)]/h

**CALCUL:**
f'_g(0) = lim_{h→0⁻} [f(h) - f(0)]/h
= lim_{h→0⁻} [f(h) - 0]/h
= lim_{h→0⁻} f(h)/h

**POUR h < 0:**
Comme h < 0, on a h ≤ 0, donc f(h) = h²
f'_g(0) = lim_{h→0⁻} h²/h
= lim_{h→0⁻} h
= **0**

**RÉPONSE FINALE:**
f'_g(0) = **0**
`
              ,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 2b - DÉRIVABILITÉ - DÉRIVÉE À DROITE (Sous-notion: Dérivée à droite)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 2b) Calculer la dérivée à droite de f en 0**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 2b (0.25 point)**

**DÉFINITION:**
La dérivée à droite en 0 est: f'_d(0) = lim_{h→0⁺} [f(0+h) - f(0)]/h

**CALCUL:**
f'_d(0) = lim_{h→0⁺} [f(h) - f(0)]/h
= lim_{h→0⁺} [f(h) - 0]/h
= lim_{h→0⁺} f(h)/h

**POUR h > 0:**
Comme h > 0, on a f(h) = 2h - 1
f'_d(0) = lim_{h→0⁺} (2h - 1)/h
= lim_{h→0⁺} (2 - 1/h)
= 2 - lim_{h→0⁺} (1/h)
= 2 - (+∞)
= **-∞**

**RÉPONSE FINALE:**
f'_d(0) = **-∞** (n'existe pas)
`
              ,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 2c - DÉRIVABILITÉ - CONCLUSION (Sous-notion: Conclusion)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 2c) Conclure sur la dérivabilité de f en 0**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 2c (0.25 point)**

**THÉORÈME:**
Une fonction est dérivable en un point si et seulement si:
- Elle est continue en ce point
- Les dérivées à gauche et à droite existent et sont égales

**RÉSULTATS:**
- D'après la partie 1c: f n'est pas continue en 0
- D'après les parties 2a et 2b: f'_g(0) = 0 et f'_d(0) = -∞

**CONCLUSION:**
1. f n'est pas continue en 0 → f n'est pas dérivable en 0
2. f'_g(0) = 0 ≠ -∞ = f'_d(0) → les dérivées sont différentes

**RÉPONSE FINALE:**
**f n'est pas dérivable en 0**.
`
              ,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3a - DÉRIVÉE POUR x < 0 (Sous-notion: Dérivée)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 3a) Calculer f'(x) pour x < 0**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 3a (0.25 point)**

**POUR x < 0:**
f(x) = x²

**DÉRIVÉE:**
f'(x) = 2x

**VÉRIFICATION:**
La dérivée de x² est bien 2x.

**RÉPONSE FINALE:**
Pour x < 0: **f'(x) = 2x**
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3b - DÉRIVÉE POUR x > 0 (Sous-notion: Dérivée)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 3b) Calculer f'(x) pour x > 0**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 3b (0.25 point)**

**POUR x > 0:**
f(x) = 2x - 1

**DÉRIVÉE:**
f'(x) = 2

**VÉRIFICATION:**
La dérivée de 2x - 1 est bien 2.

**RÉPONSE FINALE:**
Pour x > 0: **f'(x) = 2**
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 4a - DÉRIVABILITÉ SUR ℝ (Sous-notion: Dérivabilité sur un intervalle)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 4a) La fonction f est-elle dérivable sur ℝ? Justifier.**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 4a (0.5 point)**

**DÉFINITION:**
Une fonction est dérivable sur ℝ si elle est dérivable en tout point de ℝ.

**RÉSULTAT DE LA PARTIE 2c:**
f n'est pas dérivable en 0.

**CONCLUSION:**
Comme f n'est pas dérivable en au moins un point de ℝ (le point 0), alors **f n'est pas dérivable sur ℝ**.

**REMARQUE:**
- f est dérivable sur ]-∞; 0[ (f'(x) = 2x)
- f est dérivable sur ]0; +∞[ (f'(x) = 2)
- Mais f n'est pas dérivable sur ℝ tout entier car elle n'est pas dérivable en 0.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 5a - TANGENTE - POINT DE TANGENCE (Sous-notion: Point de tangence)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 5a) Déterminer le point de tangence**
Point d'abscisse 1.
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 5a (0.25 point)**

**ABSCISSE:**
x₀ = 1

**ORDONNÉE:**
Comme 1 > 0, on utilise f(x) = 2x - 1
f(1) = 2×1 - 1 = **1**

**POINT DE TANGENCE:**
A(1; 1)

**RÉPONSE FINALE:**
Le point de tangence est **A(1; 1)**
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 5b - TANGENTE - NOMBRE DÉRIVÉ (Sous-notion: Nombre dérivé)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 5b) Calculer le nombre dérivé f'(1)**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 5b (0.25 point)**

**CALCUL:**
Comme 1 > 0, d'après la partie 3b, on a f'(x) = 2 pour x > 0.

**RÉSULTAT:**
f'(1) = **2**

**INTERPRÉTATION:**
Le nombre dérivé f'(1) = 2 est la pente de la tangente à la courbe de f au point d'abscisse 1.

**RÉPONSE FINALE:**
f'(1) = **2**
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 5c - TANGENTE - ÉQUATION (Sous-notion: Équation de tangente)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 5c) Déterminer l'équation de la tangente**
Utiliser les résultats des parties 5a et 5b.
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 5c (0.25 point)**

**FORMULE DE L'ÉQUATION DE LA TANGENTE:**
y = f'(x₀)(x - x₀) + f(x₀)

**APPLICATION:**
D'après les parties 5a et 5b:
- x₀ = 1
- f(1) = 1
- f'(1) = 2

**CALCUL:**
y = 2(x - 1) + 1
y = 2x - 2 + 1
y = **2x - 1**

**VÉRIFICATION:**
La tangente a la même équation que f(x) pour x > 0, ce qui est normal car f est affine sur ]0; +∞[.

**RÉPONSE FINALE:**
L'équation de la tangente à la courbe de f au point d'abscisse 1 est:
**y = 2x - 1**
`
              ,
              difficulty: 'Facile',
            }
          ],
          difficulty: 'Moyen',
          estimatedTime: 25
        }
