import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_ARITHMETIQUE: CurriculumSection = {
          id: 'bac-2023-ex11'
          ,
          title: 'Exercice 11 - Arithmétique (3 points)'
          ,
          description: 'Équations diophantiennes: solution particulière, ensemble des solutions, congruence modulo 11, petit théorème de Fermat, division euclidienne, nombres premiers.',
          concepts: [
            'Équation diophantienne'
            ,
            'Solution particulière'
            ,
            'Ensemble des solutions'
            ,
            'Congruence modulo'
            ,
            'Petit théorème de Fermat'
            ,
            'Division euclidienne'
            ,
            'Multiple'
            ,
            'Nombre premier'
            ,
            'PGCD'
          ],
          objectives: [
            'Justifier qu\'un couple est solution d\'une équation diophantienne'
            ,
            'Déterminer l\'ensemble des solutions d\'une équation diophantienne'
            ,
            'Utiliser les propriétés de congruence'
            ,
            'Utiliser le petit théorème de Fermat'
            ,
            'Montrer qu\'une équation n\'a pas de solution'
          ],
          content: {
            enonce_complet: `1. On considère l'équation (E): 62x – 5y = 2025 où x et y sont des entiers.
a) Justifier que le couple (35,29) est solution de l'équation (E) puis en déduire l'ensemble de solutions de cette équation. (1pt)
b) Montrer que si (x;y) est une solution de (E) alors x est un multiple de 5. (0.5pt)

2. Soit (F) l'équation : 62x¹⁰ - 5y¹⁰ = 2025, où x et y sont des entiers.
a) Montrer que pour tout entier a, on a : a¹⁰ ≡ 1[11] ou a¹⁰ ≡ 0[11]. (0.5pt)
b) Montrer que si (x;y) est une solution de (F) alors x ∧ 11 = 1 ou y ∧ 11 = 1. (0.5pt)
c) Supposons que (x;y) est une solution de (F). Déterminer le reste de la division euclidienne du nombre 62x¹⁰-5y¹⁰ par 11. En déduire que (F) n'a pas de solution. (0.5pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Rappeler la méthode pour résoudre une équation diophantienne
2. Expliquer comment utiliser une solution particulière
3. Introduire les propriétés de congruence modulo
4. Utiliser le petit théorème de Fermat
5. Guider dans la démonstration par l'absurde`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            // -------------------------------------------------------------------------
            // PARTIE 1a - VÉRIFICATION D'UNE SOLUTION PARTICULIÈRE (Sous-notion: Solution particulière)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 1a) Vérifier que le couple (35,29) est solution de l'équation (E)**
Équation (E): 62x – 5y = 2025 où x et y sont des entiers.
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1a (0.2 point)**

**MÉTHODE:** Remplacer x et y dans l'équation et vérifier que l'égalité est vraie.

**CALCUL:**
On remplace x = 35 et y = 29 dans l'équation (E):
62 × 35 – 5 × 29 = 2170 – 145 = **2025** ✓

**CONCLUSION:**
Le couple (35,29) vérifie bien l'équation (E), donc c'est une **solution particulière**.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 1b - MÉTHODE POUR TROUVER L'ENSEMBLE DES SOLUTIONS (Sous-notion: Méthode)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 1b) Expliquer la méthode pour déterminer l'ensemble des solutions**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1b (0.2 point)**

**MÉTHODE GÉNÉRALE:**
Pour résoudre une équation diophantienne ax + by = c:
1. Trouver une solution particulière (x₀, y₀)
2. Soustraire les deux équations pour obtenir a(x - x₀) = b(y₀ - y)
3. Utiliser le théorème de Gauss si a et b sont premiers entre eux
4. Exprimer x et y en fonction d'un paramètre entier k

**APPLICATION:**
Soit (x,y) une solution de (E). On a:
62x – 5y = 2025

Comme (35,29) est solution, on a aussi:
62 × 35 – 5 × 29 = 2025

En soustrayant les deux équations:
62(x – 35) – 5(y – 29) = 0
62(x – 35) = 5(y – 29)
`
              ,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 1c - THÉORÈME DE GAUSS - APPLICATION (Sous-notion: Théorème de Gauss)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 1c) Appliquer le théorème de Gauss pour déterminer x**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1c (0.2 point)**

**THÉORÈME DE GAUSS:**
Si a et b sont premiers entre eux et si a divise bc, alors a divise c.

**APPLICATION:**
On a: 62(x – 35) = 5(y – 29)

**VÉRIFICATION:**
PGCD(62, 5) = 1 (car 62 = 2 × 31 et 5 est premier, donc ils sont premiers entre eux)

**CONCLUSION:**
Comme 62 et 5 sont premiers entre eux, d'après le théorème de Gauss:
5 divise (x – 35)

**RÉSULTAT:**
Il existe un entier k tel que:
x – 35 = 5k
x = 35 + 5k
`
              ,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 1d - CALCUL DE y EN FONCTION DE k (Sous-notion: Calcul)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 1d) Déterminer y en fonction de k**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1d (0.2 point)**

**CALCUL:**
En remplaçant x = 35 + 5k dans l'équation (E):
62(35 + 5k) – 5y = 2025
2170 + 310k – 5y = 2025
5y = 2170 + 310k – 2025
5y = 145 + 310k
y = 29 + 62k

**RÉSULTAT:**
y = **29 + 62k**
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 1e - VÉRIFICATION DE L'ENSEMBLE DES SOLUTIONS (Sous-notion: Vérification)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 1e) Vérifier et conclure sur l'ensemble des solutions**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1e (0.2 point)**

**VÉRIFICATION:**
Vérifions que (35 + 5k, 29 + 62k) est bien solution pour tout k ∈ ℤ:
62(35 + 5k) – 5(29 + 62k) = 2170 + 310k – 145 – 310k = 2025 ✓

**CONCLUSION:**
Tous les couples de la forme (35 + 5k, 29 + 62k) sont solutions.

**RÉPONSE FINALE:**
L'ensemble des solutions de (E) est:
**S = {(35 + 5k, 29 + 62k) | k ∈ ℤ}**
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 2a - MULTIPLE DE 5 - DÉMONSTRATION (Sous-notion: Multiple)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 2a) Montrer que si (x;y) est une solution de (E) alors x est un multiple de 5**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 2a (0.5 point)**

**HYPOTHÈSE:** (x,y) est une solution de (E): 62x – 5y = 2025

**ÉTAPE 1: Réécrire l'équation**
62x – 5y = 2025
62x = 2025 + 5y
62x = 5(405 + y)

**ÉTAPE 2: Utiliser le théorème de Gauss**
Comme 62 et 5 sont premiers entre eux (PGCD(62,5) = 1), d'après le théorème de Gauss:
**5 divise x**

**CONCLUSION:**
Si (x;y) est une solution de (E), alors **x est un multiple de 5**.

**VÉRIFICATION:** Dans la partie 1e, on a trouvé x = 35 + 5k, qui est bien un multiple de 5. ✓
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3a - PETIT THÉORÈME DE FERMAT - RAPPEL (Sous-notion: Petit théorème de Fermat)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 3a) Rappeler le petit théorème de Fermat**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 3a (0.167 point)**

**PETIT THÉORÈME DE FERMAT:**
Si p est un nombre premier et a est un entier qui n'est pas divisible par p, alors:
a^(p-1) ≡ 1[p]

**APPLICATION:**
Pour p = 11 (premier):
Si 11 ne divise pas a, alors a^(11-1) = a¹⁰ ≡ 1[11]
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3b - CONGRUENCE MODULO 11 - CAS 1 (Sous-notion: Congruence)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 3b) Étudier le cas où 11 divise a**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 3b (0.167 point)**

**CAS 1: 11 divise a**
Si 11 divise a, alors a = 11k pour un certain entier k.

**CALCUL:**
a¹⁰ = (11k)¹⁰ = 11¹⁰ × k¹⁰

**CONCLUSION:**
a¹⁰ est un multiple de 11, donc **a¹⁰ ≡ 0[11]**
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3c - CONGRUENCE MODULO 11 - CAS 2 (Sous-notion: Congruence)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 3c) Étudier le cas où 11 ne divise pas a**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 3c (0.167 point)**

**CAS 2: 11 ne divise pas a**
Si 11 ne divise pas a, alors a et 11 sont premiers entre eux.

**APPLICATION DU PETIT THÉORÈME DE FERMAT:**
D'après la partie 3a, avec p = 11:
a^(11-1) = a¹⁰ ≡ 1[11]

**CONCLUSION:**
**a¹⁰ ≡ 1[11]**

**RÉPONSE FINALE:**
Pour tout entier a:
- Si 11 divise a: **a¹⁰ ≡ 0[11]**
- Si 11 ne divise pas a: **a¹⁰ ≡ 1[11]**

Donc: **a¹⁰ ≡ 1[11] ou a¹⁰ ≡ 0[11]**
`
              ,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 4a - PGCD AVEC 11 - DÉMONSTRATION PAR L'ABSURDE (Sous-notion: Démonstration par l'absurde)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 4a) Montrer par l'absurde que x ∧ 11 = 1 ou y ∧ 11 = 1**
Notation: x ∧ 11 = 1 signifie que x et 11 sont premiers entre eux (PGCD(x,11) = 1)
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 4a (0.25 point)**

**HYPOTHÈSE:** (x,y) est une solution de (F): 62x¹⁰ - 5y¹⁰ = 2025

**DÉMONSTRATION PAR L'ABSURDE:**
Supposons que x ∧ 11 ≠ 1 ET y ∧ 11 ≠ 1.

**IMPLICATION:**
Comme 11 est premier:
- Si x ∧ 11 ≠ 1, alors PGCD(x,11) = 11, donc **11 divise x**
- Si y ∧ 11 ≠ 1, alors PGCD(y,11) = 11, donc **11 divise y**

**ÉTAPE 1: Conséquence sur les puissances**
Si 11 divise x, alors d'après la partie 3b: x¹⁰ ≡ 0[11]
Si 11 divise y, alors d'après la partie 3b: y¹⁰ ≡ 0[11]

**ÉTAPE 2: Calculer le reste modulo 11**
62x¹⁰ - 5y¹⁰ ≡ 62 × 0 - 5 × 0 ≡ 0[11]
`
              ,
              difficulty: 'Difficile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 4b - PGCD AVEC 11 - CONTRADICTION (Sous-notion: Contradiction)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 4b) Conclure en trouvant une contradiction**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 4b (0.25 point)**

**CALCUL DE 2025 MODULO 11:**
2025 = 11 × 184 + 1
Donc: **2025 ≡ 1[11]**

**CONTRADICTION:**
D'après la partie 4a, si 11 divise x et y, alors:
62x¹⁰ - 5y¹⁰ ≡ 0[11]

Mais (x,y) est solution de (F), donc:
62x¹⁰ - 5y¹⁰ = 2025 ≡ 1[11]

**CONCLUSION:**
On a: 62x¹⁰ - 5y¹⁰ ≡ 0[11] ET 62x¹⁰ - 5y¹⁰ ≡ 1[11]
C'est impossible! Donc notre hypothèse est fausse.

**RÉPONSE FINALE:**
Si (x;y) est une solution de (F), alors **x ∧ 11 = 1 ou y ∧ 11 = 1**
(au moins l'un des deux est premier avec 11)
`
              ,
              difficulty: 'Difficile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 5a - CALCUL DES RESTES MODULO 11 (Sous-notion: Calcul de restes)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 5a) Calculer les restes possibles de 62x¹⁰-5y¹⁰ modulo 11**
En utilisant les résultats des parties précédentes.
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 5a (0.25 point)**

**HYPOTHÈSE:** (x,y) est une solution de (F): 62x¹⁰ - 5y¹⁰ = 2025

**D'APRÈS LA PARTIE 4b:** x ∧ 11 = 1 ou y ∧ 11 = 1

**CAS 1: x ∧ 11 = 1 (x premier avec 11)**
D'après la partie 3c: x¹⁰ ≡ 1[11]

**SOUS-CAS 1a: y ∧ 11 = 1**
Alors: y¹⁰ ≡ 1[11]
62x¹⁰ - 5y¹⁰ ≡ 62 × 1 - 5 × 1 ≡ 57[11]
57 = 11 × 5 + 2, donc **57 ≡ 2[11]**

**SOUS-CAS 1b: 11 divise y**
Alors: y¹⁰ ≡ 0[11]
62x¹⁰ - 5y¹⁰ ≡ 62 × 1 - 5 × 0 ≡ 62[11]
62 = 11 × 5 + 7, donc **62 ≡ 7[11]**

**CAS 2: y ∧ 11 = 1 (y premier avec 11, mais x non)**
Alors: y¹⁰ ≡ 1[11] et x¹⁰ ≡ 0[11] (car 11 divise x)
62x¹⁰ - 5y¹⁰ ≡ 62 × 0 - 5 × 1 ≡ -5[11]
-5 ≡ 6[11] (car -5 + 11 = 6)

**RÉSUMÉ DES RESTES POSSIBLES:**
2, 7 ou 6 modulo 11
`
              ,
              difficulty: 'Difficile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 5b - CONTRADICTION ET CONCLUSION (Sous-notion: Contradiction)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 5b) En déduire que (F) n'a pas de solution**
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 5b (0.25 point)**

**CALCUL DE 2025 MODULO 11:**
2025 = 11 × 184 + 1
Donc: **2025 ≡ 1[11]**

**COMPARAISON:**
D'après la partie 5a, dans tous les cas possibles, on a:
62x¹⁰ - 5y¹⁰ ≡ 2[11] ou 7[11] ou 6[11]

Mais si (x,y) est solution de (F), alors:
62x¹⁰ - 5y¹⁰ = 2025 ≡ 1[11]

**CONTRADICTION:**
Il est impossible que 62x¹⁰ - 5y¹⁰ = 2025 car:
- Les restes possibles sont: 2, 7 ou 6
- Le reste de 2025 est: 1
- 1 ≠ 2, 1 ≠ 7, 1 ≠ 6

**CONCLUSION:**
L'équation (F): **62x¹⁰ - 5y¹⁰ = 2025 n'a pas de solution** dans ℤ².
`
              ,
              difficulty: 'Difficile',
            }
          ],
          difficulty: 'Difficile',
          estimatedTime: 30
        }
