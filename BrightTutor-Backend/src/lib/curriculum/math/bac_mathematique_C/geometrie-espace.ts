import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_GEOMETRIE_ESPACE: CurriculumSection = {
          id: 'bac-2023-ex1'
          ,
          title: 'Exercice 1 - Géométrie dans l\'espace (3 points)'
          ,
          description: 'Géométrie vectorielle dans l\'espace: produits scalaires, projection orthogonale, équation de plan, volume du tétraèdre, distance point-plan, aire d\'un triangle. Points A(1;-2;3), B(4;1;0), C(3;0;-2) et D(2;1;-2)',
          concepts: [
            'Vecteurs dans l\'espace'
            ,
            'Produit scalaire de vecteurs'
            ,
            'Orthogonalité de vecteurs'
            ,
            'Projection orthogonale'
            ,
            'Équation cartésienne d\'un plan'
            ,
            'Produit vectoriel'
            ,
            'Volume du tétraèdre'
            ,
            'Distance d\'un point à un plan'
            ,
            'Aire d\'un triangle'
            ,
            'Triangle rectangle'
          ],
          objectives: [
            'Calculer les coordonnées de vecteurs dans l\'espace'
            ,
            'Calculer des produits scalaires et identifier l\'orthogonalité'
            ,
            'Justifier qu\'un point est une projection orthogonale'
            ,
            'Calculer le volume d\'un tétraèdre par la formule V = (1/3)sh'
            ,
            'Déterminer l\'équation cartésienne d\'un plan (2 méthodes)'
            ,
            'Calculer la distance d\'un point à un plan'
            ,
            'Calculer une aire par méthode indirecte (volume)'
          ],
          content: {
            enonce_complet: `Dans l'espace, muni d'un repère orthonormé direct (O;i⃗,j⃗,k⃗), on considère les points:
• A(1;-2;3)
• B(4;1;0)
• C(3;0;-2)
• D(2;1;-2)

1. a) Calculer les produits scalaires suivants: AB⃗·BC⃗, AB⃗·CD⃗ et BC⃗·CD⃗. (0.75pt)
b) Justifier que B est le projeté orthogonal de A sur le plan (BCD). (0.5pt)
c) En déduire le volume du tétraèdre ABCD. (0.5pt)

2. a) Donner une équation cartésienne du plan (ACD). (0.5pt)
b) Calculer la distance du point B par rapport au plan (ACD) et en déduire l'aire du triangle ACD. (0.75pt)`,
            // Les solutions complètes sont dans les exercices ci-dessous
            methodes_enseignement:
              `L'AI doit:
1. Commencer par la partie 1a (produits scalaires)
2. Vérifier que l'étudiant comprend avant de passer à 1b
3. Pour chaque partie, d'abord demander si l'étudiant sait faire
4. Si NON: expliquer les concepts prérequis avec exemples simples
5. Si OUI: laisser essayer et corriger
6. Ne jamais donner la réponse directement, guider par questions
`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            // -------------------------------------------------------------------------
            // PARTIE 1a - CALCUL DES COORDONNÉES DE VECTEURS (Sous-notion: Coordonnées)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 1a) Calculer les coordonnées des vecteurs AB⃗, BC⃗ et CD⃗**
Points donnés:
• A(1;-2;3)
• B(4;1;0)
• C(3;0;-2)
• D(2;1;-2)
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1a (0.25 point)**

**RAPPEL:** Les coordonnées d'un vecteur AB⃗ sont calculées par: AB⃗ = B - A

**CALCUL DES VECTEURS:**

**1. Vecteur AB⃗:**
AB⃗ = B - A = (4-1 ; 1-(-2) ; 0-3) = **(3 ; 3 ; -3)**

**2. Vecteur BC⃗:**
BC⃗ = C - B = (3-4 ; 0-1 ; -2-0) = **(-1 ; -1 ; -2)**

**3. Vecteur CD⃗:**
CD⃗ = D - C = (2-3 ; 1-0 ; -2-(-2)) = **(-1 ; 1 ; 0)**

**RÉPONSE FINALE:**
• AB⃗ = (3 ; 3 ; -3)
• BC⃗ = (-1 ; -1 ; -2)
• CD⃗ = (-1 ; 1 ; 0)
`,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 1b - CALCUL DE PRODUITS SCALAIRES (Sous-notion: Produit scalaire)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 1b) Calculer les produits scalaires: AB⃗·BC⃗, AB⃗·CD⃗ et BC⃗·CD⃗**
Utiliser les vecteurs calculés en 1a.
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1b (0.5 point)**

**RAPPEL:** Le produit scalaire de deux vecteurs u⃗(x₁;y₁;z₁) et v⃗(x₂;y₂;z₂) est:
u⃗·v⃗ = x₁x₂ + y₁y₂ + z₁z₂

**CALCULS:**

**1. AB⃗·BC⃗:**
AB⃗ = (3 ; 3 ; -3) et BC⃗ = (-1 ; -1 ; -2)
AB⃗·BC⃗ = 3×(-1) + 3×(-1) + (-3)×(-2)
= -3 - 3 + 6
= **0**

**2. AB⃗·CD⃗:**
AB⃗ = (3 ; 3 ; -3) et CD⃗ = (-1 ; 1 ; 0)
AB⃗·CD⃗ = 3×(-1) + 3×1 + (-3)×0
= -3 + 3 + 0
= **0**

**3. BC⃗·CD⃗:**
BC⃗ = (-1 ; -1 ; -2) et CD⃗ = (-1 ; 1 ; 0)
BC⃗·CD⃗ = (-1)×(-1) + (-1)×1 + (-2)×0
= 1 - 1 + 0
= **0**

**RÉPONSE FINALE:**
• AB⃗·BC⃗ = 0
• AB⃗·CD⃗ = 0
• BC⃗·CD⃗ = 0
`,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 1c - INTERPRÉTATION GÉOMÉTRIQUE - ORTHOGONALITÉ (Sous-notion: Vecteurs perpendiculaires)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration'
              ,
              question:
                `**Partie 1c) Interpréter géométriquement les résultats des produits scalaires**
Que signifie le fait que les produits scalaires sont nuls?
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 1c (0.25 point)**

**THÉORÈME:** Deux vecteurs sont orthogonaux (perpendiculaires) si et seulement si leur produit scalaire est nul.

**INTERPRÉTATION DES RÉSULTATS:**

D'après la partie 1b, on a:
• AB⃗·BC⃗ = 0 ⟹ **AB⃗ ⊥ BC⃗** (AB⃗ est perpendiculaire à BC⃗)
• AB⃗·CD⃗ = 0 ⟹ **AB⃗ ⊥ CD⃗** (AB⃗ est perpendiculaire à CD⃗)
• BC⃗·CD⃗ = 0 ⟹ **BC⃗ ⊥ CD⃗** (BC⃗ est perpendiculaire à CD⃗)

**CONCLUSION:**
Les trois vecteurs sont **orthogonaux deux à deux**.

**IMPLICATION GÉOMÉTRIQUE:**
Le triangle BCD est rectangle en C, car BC⃗ ⊥ CD⃗.
`,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 2a - PROJECTION ORTHOGONALE - DÉFINITION (Sous-notion: Projection)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question:
                `**Partie 2a) Rappeler la définition d'une projection orthogonale**
Qu'est-ce qu'une projection orthogonale d'un point sur un plan?
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 2a (0.25 point)**

**DÉFINITION:**
Le projeté orthogonal d'un point A sur un plan P est le point H du plan P tel que le vecteur AH⃗ est perpendiculaire au plan P.

**CONDITIONS:**
Pour que B soit le projeté orthogonal de A sur le plan (BCD), il faut:
1. **B appartient au plan (BCD)** ✓ (évident, B est un sommet du plan)
2. **Le vecteur AB⃗ est perpendiculaire au plan (BCD)**

**MÉTHODE POUR MONTRER QU'UN VECTEUR EST PERPENDICULAIRE À UN PLAN:**
Un vecteur est perpendiculaire à un plan s'il est perpendiculaire à **deux vecteurs non colinéaires** de ce plan.
`,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 2b - JUSTIFICATION DE LA PROJECTION (Sous-notion: Démonstration)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question:
                `**Partie 2b) Justifier que B est le projeté orthogonal de A sur le plan (BCD)**
En utilisant les résultats des parties précédentes.
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 2b (0.25 point)**

**DÉMONSTRATION:**

**ÉTAPE 1: Vérifier que B ∈ (BCD)**
B est un sommet du plan (BCD), donc B ∈ (BCD) ✓

**ÉTAPE 2: Montrer que AB⃗ ⊥ (BCD)**
D'après la partie 1b, on a:
• AB⃗·BC⃗ = 0 ⟹ AB⃗ ⊥ BC⃗
• AB⃗·CD⃗ = 0 ⟹ AB⃗ ⊥ CD⃗

Les vecteurs BC⃗ et CD⃗ sont deux vecteurs du plan (BCD).

**ÉTAPE 3: Vérifier que BC⃗ et CD⃗ ne sont pas colinéaires**
BC⃗ = (-1 ; -1 ; -2) et CD⃗ = (-1 ; 1 ; 0)
Si colinéaires: BC⃗ = k·CD⃗
-1 = -k ⟹ k = 1
-1 = k ⟹ k = -1 ❌ Contradiction!
Donc BC⃗ et CD⃗ ne sont **PAS colinéaires**.

**CONCLUSION:**
Le vecteur AB⃗ est orthogonal à deux vecteurs non colinéaires du plan (BCD).
Donc **AB⃗ est orthogonal au plan (BCD)**.
Comme B ∈ (BCD), alors **B est le projeté orthogonal de A sur le plan (BCD)**.
`,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3a - CALCUL DE L'AIRE D'UN TRIANGLE RECTANGLE (Sous-notion: Aire)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 3a) Calculer l'aire du triangle BCD**
Le triangle BCD est rectangle en C (d'après 1c).
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 3a (0.25 point)**

**RAPPEL:** Pour un triangle rectangle, l'aire est: Aire = (1/2) × côté1 × côté2

**DONNÉES:**
D'après la partie 1c, on sait que BC⃗ ⊥ CD⃗, donc le triangle BCD est **rectangle en C**.

**CALCUL DES LONGUEURS:**

**1. Longueur BC:**
BC = ||BC⃗|| = √[(-1)² + (-1)² + (-2)²]
= √(1 + 1 + 4)
= **√6**

**2. Longueur CD:**
CD = ||CD⃗|| = √[(-1)² + 1² + 0²]
= √(1 + 1 + 0)
= **√2**

**CALCUL DE L'AIRE:**
Aire(BCD) = (1/2) × BC × CD
= (1/2) × √6 × √2
= (1/2) × √12
= (1/2) × 2√3
= **√3**

**RÉPONSE FINALE:**
L'aire du triangle BCD est **s = √3 unités²**
`,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3b - CALCUL DU VOLUME DU TÉTRAÈDRE (Sous-notion: Volume)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 3b) Calculer le volume du tétraèdre ABCD**
Utiliser l'aire de BCD calculée en 3a et la hauteur issue de A.
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 3b (0.25 point)**

**FORMULE DU VOLUME D'UN TÉTRAÈDRE:**
V = (1/3) × s × h
où:
• s = aire d'une base
• h = hauteur correspondante (perpendiculaire à la base)

**CHOIX DE LA BASE:**
Prenons BCD comme base et A comme sommet.

**DONNÉES:**
• Aire de BCD: s = √3 (calculée en 3a)
• Hauteur: h = distance de A au plan (BCD)

**CALCUL DE LA HAUTEUR:**
D'après la partie 2b, B est le projeté orthogonal de A sur (BCD).
Donc: h = AB

**Calcul de AB:**
AB = ||AB⃗|| = √(3² + 3² + (-3)²)
= √(9 + 9 + 9)
= √27
= **3√3**

**CALCUL DU VOLUME:**
V = (1/3) × s × h
= (1/3) × √3 × 3√3
= (1/3) × 3 × (√3)²
= (1/3) × 3 × 3
= **3**

**RÉPONSE FINALE:**
Le volume du tétraèdre ABCD est **V = 3 unités cubiques**
`,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 4a - ÉQUATION CARTÉSIENNE DU PLAN - MÉTHODE VECTORIELLE (Sous-notion: Produit vectoriel)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 4a) Déterminer l'équation cartésienne du plan (ACD) par la méthode du produit vectoriel**
Points: A(1;-2;3), C(3;0;-2), D(2;1;-2)
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 4a (0.25 point)**

**MÉTHODE:** Utiliser le produit vectoriel pour trouver un vecteur normal au plan.

**ÉTAPE 1: Calculer les vecteurs directeurs du plan**
AC⃗ = C - A = (3-1 ; 0-(-2) ; -2-3) = **(2 ; 2 ; -5)**
CD⃗ = D - C = (2-3 ; 1-0 ; -2-(-2)) = **(-1 ; 1 ; 0)**

**ÉTAPE 2: Calculer le produit vectoriel (vecteur normal)**
AC⃗ ∧ CD⃗ = | i⃗ j⃗ k⃗ |
| 2 2 -5 |
| -1 1 0 |
= i⃗(2×0 - (-5)×1) - j⃗(2×0 - (-5)×(-1)) + k⃗(2×1 - 2×(-1))
= i⃗(0 + 5) - j⃗(0 - 5) + k⃗(2 + 2)
= **5i⃗ + 5j⃗ + 4k⃗**

Donc: **n⃗ = (5 ; 5 ; 4)** est un vecteur normal au plan (ACD).

**ÉTAPE 3: Écrire l'équation du plan**
Un point M(x;y;z) appartient au plan (ACD) si AM⃗ · n⃗ = 0
AM⃗ = (x-1 ; y+2 ; z-3)
5(x-1) + 5(y+2) + 4(z-3) = 0
5x - 5 + 5y + 10 + 4z - 12 = 0

**RÉPONSE FINALE:**
**5x + 5y + 4z - 7 = 0**
`,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 4b - ÉQUATION CARTÉSIENNE DU PLAN - MÉTHODE PAR SYSTÈME (Sous-notion: Système d'équations)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 4b) Vérifier l'équation du plan (ACD) par la méthode du système d'équations**
Points: A(1;-2;3), C(3;0;-2), D(2;1;-2)
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 4b (0.25 point)**

**MÉTHODE:** Une équation cartésienne de plan est: ax + by + cz + d = 0
Le plan passe par A, C, D, donc ces points vérifient l'équation.

**SYSTÈME D'ÉQUATIONS:**
Pour A(1;-2;3): a - 2b + 3c + d = 0 ... (1)
Pour C(3;0;-2): 3a + 0b - 2c + d = 0 ... (2)
Pour D(2;1;-2): 2a + b - 2c + d = 0 ... (3)

**RÉSOLUTION:**
De (2): d = -3a + 2c

Remplacer dans (1): a - 2b + 3c + (-3a + 2c) = 0
-2a - 2b + 5c = 0
b = -a + (5/2)c ... (4)

Remplacer d et b dans (3):
2a + (-a + (5/2)c) - 2c + (-3a + 2c) = 0
-2a + (5/2)c = 0
c = (4/5)a

De (4): b = -a + (5/2)×(4/5)a = -a + 2a = a
De (2): d = -3a + 2×(4/5)a = -3a + (8/5)a = (-7/5)a

Prenons a = 5:
• a = 5, b = 5, c = 4, d = -7

**RÉPONSE FINALE:**
**5x + 5y + 4z - 7 = 0** ✓ (même résultat qu'en 4a)
`,
              difficulty: 'Difficile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 5a - DISTANCE D'UN POINT À UN PLAN (Sous-notion: Distance)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 5a) Calculer la distance du point B au plan (ACD)**
Équation du plan (ACD): 5x + 5y + 4z - 7 = 0
Point B(4;1;0)
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 5a (0.375 point)**

**FORMULE DE LA DISTANCE D'UN POINT À UN PLAN:**
Pour un plan d'équation ax + by + cz + d = 0 et un point P(x₀;y₀;z₀):
d(P; plan) = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)

**APPLICATION:**
Plan (ACD): 5x + 5y + 4z - 7 = 0
Donc: a = 5, b = 5, c = 4, d = -7
Point B(4;1;0)

**CALCUL:**
d(B;(ACD)) = |5×4 + 5×1 + 4×0 - 7| / √(5² + 5² + 4²)
= |20 + 5 + 0 - 7| / √(25 + 25 + 16)
= |18| / √66
= 18/√66

**RATIONALISATION:**
d(B;(ACD)) = 18√66/66 = **3√66/11**

**RÉPONSE FINALE:**
**d(B;(ACD)) = 3√66/11** ≈ 2.46 unités
`
              ,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 5b - AIRE DU TRIANGLE PAR MÉTHODE INDIRECTE (Sous-notion: Calcul indirect)
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 5b) En déduire l'aire du triangle ACD**
Utiliser le volume du tétraèdre calculé en 3b et la distance calculée en 5a.
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 5b (0.375 point)**

**MÉTHODE:** Calcul indirect par le volume du tétraèdre.

**RAPPEL:** Le volume d'un tétraèdre peut être calculé avec n'importe quelle face comme base.

**CALCUL DU VOLUME AVEC ACD COMME BASE:**
V = (1/3) × s' × h'
où:
• s' = aire du triangle ACD (ce qu'on cherche!)
• h' = hauteur issue de B = d(B;(ACD)) = 3√66/11 (calculée en 5a)

**DONNÉE:** D'après la partie 3b, on sait que V = 3

**CALCUL DE L'AIRE:**
3 = (1/3) × s' × (3√66/11)
3 = s' × (3√66)/(3×11)
3 = s' × (√66/11)
s' = 3 × (11/√66)
s' = 33/√66

**RATIONALISATION:**
s' = 33√66/66 = √66/2 = **√(33/2)**

**VÉRIFICATION:**
s' = √66/2 = √(66/4) = √(33/2) ✓

**RÉPONSE FINALE:**
L'aire du triangle ACD est **s' = √(33/2)** ≈ 4.06 unités²
`
              ,
              difficulty: 'Difficile',
            }
          ],
          difficulty: 'Moyen'
          ,
          estimatedTime: 25
        }
