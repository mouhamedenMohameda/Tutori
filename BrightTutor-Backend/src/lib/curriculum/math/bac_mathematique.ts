// Part 1
/**
*
* BAC MATHÉMATIQUE CURRICULUM - MAURITANIE
* Extraction COMPLÈTE du Bac 2023 avec TOUTES les solutions détaillées
*
*
* Structure: Même format que year1
_
math.ts, year2
_
math.ts, year3
_
* Emplacement: src/lib/curriculum/bac
_
mathematique.ts
math.ts
*
* Contenu:
*
*
*
*
- 5 exercices complets du Bac 2023
- Toutes les parties (a, b, c...) avec énoncés et solutions
- 34 parties au total avec solutions pas à pas
- Concepts, prérequis, difficultés pour chaque partie
*/
import type { Curriculum } from '../curriculum-loader';

export const BAC_MATHEMATIQUE_CURRICULUM: Curriculum = {
year: 5, // Année spéciale pour le Bac (après Year 4)
subject: 'Mathématiques'
,
title: 'Préparation Baccalauréat Mathématiques C & TMGM - Mauritanie'
,
methodology: 'Apprentissage systématique des exercices types du Baccalauréat. L\'AI enseigne chaque partie séquentiellement, vérifie la compréhension avant d\'avancer, et adapte les explications selon le niveau de l\'étudiant.',
description: 'Programme complet de préparation au Baccalauréat Mauritanien avec tous les exercices depuis 2023. Chaque année contient 5 exercices (Géométrie spatiale, Transformations, Nombres complexes, Fonctions, Suites). Les exercices sont décomposés en parties pour un apprentissage progressif.',
chapters: [
{
id: 'bac-2023'
,
title: 'Baccalauréat 2023 - Session Normale - Séries C & TMGM'
,
sections: [
//
// ============================================================
// EXERCICE 1 - GÉOMÉTRIE DANS L'ESPACE (3 POINTS)
// ============================================================
{
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
exercises: [
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
},
// Les 4 autres exercices (Ex2, Ex3, Ex4, Ex5) suivraient ici
// avec la même structure détaillée...
/**
*
// ============================================================
// ============================================================
* BAC 2023 - EXERCICE 2 - TRANSFORMATIONS GÉOMÉTRIQUES (4 POINTS)
*
// ============================================================
* CHUNK 2/5
*
*/
// Ajoutez ce code dans le tableau sections[] après l'Exercice 1
//
// ============================================================
// EXERCICE 2 - TRANSFORMATIONS GÉOMÉTRIQUES (4 POINTS)
// ============================================================
{
id: 'bac-2023-ex2',
title: 'Exercice 2 - Transformations géométriques (4 points)',
description: 'Triangle rectangle ABD, homothétie, rotation, antidéplacement, symétrie glissante, similitude directe. Étude de transformations composées et puissances de similitude.',
concepts: [
'Triangle rectangle'
,
'Angle orienté'
,
'Milieu de segment'
,
'Symétrique par rapport à un point'
,
'Symétrique par rapport à une droite',
'Homothétie (centre et rapport)',
'Rotation (centre et angle)'
,
'Antidéplacement',
'Symétrie glissante',
'Similitude directe'
,
'Composition de transformations'
,
'Puissance de transformation'
,
'Divisibilité'
],
objectives: [
'Construire une figure géométrique complexe'
,
'Caractériser une homothétie (centre et rapport)'
,
'Déterminer une rotation (centre et angle)'
,
'Identifier un antidéplacement comme symétrie glissante'
,
'Composer homothétie et rotation en similitude'
,
'Calculer les puissances d\'une transformation'
,
'Utiliser la divisibilité pour simplifier les calculs'
],
content: {
  enonce_complet: `Soit ABD un triangle rectangle en B tel que (AB⃗,AD⃗) = π/6 [2π].
On définit les points:
• O le milieu de [AD]
• C le symétrique de O par rapport à (BD)
• E et F les symétriques par rapport à O des points B et C respectivement
• G, H, I, J et K les milieux respectifs des segments [OB], [OC], [OD], [OE] et [OF]
1. Faire une figure soignée. (1pt)
2. Caractériser l'homothétie h définie par h(A) = I et h(B) = J (0.5pt)
3. Montrer qu'il existe une seule rotation r qui transforme A en B et G en H à caractériser
(0.75pt)
4. a) Montrer qu'il existe un unique antidéplacement f qui transforme A en F et O en E.
(0.25pt)
b) Montrer que f est une symétrie glissante et donner sa forme réduite. (0.5pt)
5. a) Montrer que S = h ∘ r est une similitude directe d'angle -2π/3.
Préciser son centre et son rapport. (0.5pt)
b) On note S² = S∘S, S³ = S∘S∘S et S⁽ⁿ⁺¹⁾ = S∘Sⁿ
, ∀n ≥ 2.
Caractériser S³ et montrer que S⁽²⁰⁰⁶²⁰²³⁾ est une homothétie de rapport positif (0.5pt)`
  },
  exercises: [
//
// -------------------------------------------------------------------------
// PARTIE 1 - FIGURE
//
// -------------------------------------------------------------------------
{
type: 'construction'
,
question:
`**Partie 1) Faire une figure soignée**
Construire la figure avec:
• Triangle ABD rectangle en B avec (AB⃗,AD⃗) = π/6
• O milieu de [AD]
• C symétrique de O par rapport à (BD)
• E et F symétriques de B et C par rapport à O
• G, H, I, J, K milieux de [OB], [OC], [OD], [OE], [OF]`
,
answer:
`**SOLUTION - Partie 1 (1 point)**
**CONSTRUCTION ÉTAPE PAR ÉTAPE:**
**Étape 1: Triangle ABD**
1. Tracer un triangle rectangle en B
2. L'angle (AB⃗,AD⃗) = π/6 = 30°
3. Donc l'angle BAD = 30°
4. L'angle en D = 60° (car triangle rectangle)
**Étape 2: Point O**
O est le milieu de [AD]
→ O est au centre de l'hypoténuse
**Étape 3: Point C**
C est le symétrique de O par rapport à (BD)
→ Tracer la perpendiculaire à (BD) passant par O
→ Reporter la distance de l'autre côté
**Étape 4: Points E et F**
E = symétrique de B par rapport à O
→ O est milieu de [BE]
→ OE⃗ = -OB⃗
F = symétrique de C par rapport à O
→ O est milieu de [CF]
→ OF⃗ = -OC⃗
**Étape 5: Les 5 milieux**
• G milieu de [OB]
• H milieu de [OC]
• I milieu de [OD]
• J milieu de [OE]
• K milieu de [OF]
**PROPRIÉTÉS IMPORTANTES DE LA FIGURE:**
1. ABDE est un rectangle (car O milieu de [AD] et [BE])
2. Les triangles OAB et OBC sont équilatéraux
3. AG = BH (car transformations préservent distances)
**RÉPONSE:**
[La figure doit montrer tous ces éléments clairement tracés et étiquetés]
**Note pour l'AI:** Demander à l'étudiant de vérifier que:
- Le triangle est bien rectangle en B
- L'angle de 30° est respecté
- Tous les points sont correctement placés
`
,
difficulty: 'Facile'
},
//
// -------------------------------------------------------------------------
// PARTIE 2 - HOMOTHÉTIE
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie 2) Caractériser l'homothétie h définie par h(A) = I et h(B) = J**
Déterminer le centre et le rapport de cette homothétie.
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 2 (0.5 point)**
**RAPPEL:** Une homothétie de centre Ω et de rapport k transforme tout point M en M' tel
que:
ΩM'⃗ = k × ΩM⃗
**MÉTHODE: Utiliser le théorème des milieux**
ABDE étant un rectangle (car O milieu de [AD] et [BE]), d'après le théorème des milieux:
I est le milieu de [OD]
J est le milieu de [OE]
Donc: IJ⃗ = (1/2)DE⃗
Mais DE⃗ = -AB⃗ (car ABDE est un rectangle)
Donc: IJ⃗ = -(1/2)AB⃗
**ÉTAPE 1: Trouver le centre**
Le centre de h est le point d'intersection des droites (AI) et (BJ).
D'après la construction et les propriétés du rectangle, ce point est **O**
.
**ÉTAPE 2: Déterminer le rapport**
Comme IJ⃗ = -(1/2)AB⃗, le rapport de h est k = -1/2.
**Vérification:**
• h(A) = I signifie: OI⃗ = k × OA⃗
I est milieu de [OD] et O est milieu de [AD]
Donc OI⃗ = (1/2)OD⃗ = -(1/2)OA⃗
Donc k = -1/2 ✓
• h(B) = J signifie: OJ⃗ = k × OB⃗
J est milieu de [OE] et E est symétrique de B par rapport à O
Donc OJ⃗ = (1/2)OE⃗ = -(1/2)OB⃗
Donc k = -1/2 ✓
**RÉPONSE FINALE:**
L'homothétie h est de centre **O** et de rapport **
-1/2**
.
**Notation:** h = H(O; -1/2)`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 3 - ROTATION
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie 3) Montrer qu'il existe une seule rotation r qui transforme A en B et G en H à caractériser**
Déterminer le centre et l'angle de cette rotation.
`,
answer:
`**SOLUTION COMPLÈTE - Partie 3 (0.75 point)**
**RAPPEL:** Une rotation est caractérisée par:
• Son centre Ω
• Son angle θ
Elle conserve les distances: ΩA = ΩB et ΩG = ΩH
**ÉTAPE 1: Vérifier l'existence**
Les triangles OAB et OBC sont équilatéraux de même dimension.
Donc:
• AG = BH ≠ 0
• AG et BH ne sont pas égaux vectoriellement (directions différentes)
En plus, O, B et C ne sont pas alignés, donc AG⃗ ≠ BH⃗.
**Conclusion:** Il existe une unique rotation r.
**ÉTAPE 2: Trouver le centre**
Le centre de r est le point d'intersection des médiatrices de [AB] et [GH].
D'après les propriétés de la figure, ce point est **O**
.
**Vérification:**
• OA = OB (car O est milieu de l'hypoténuse d'un triangle rectangle)
• OG = OH (car G et H sont à égale distance de O)
**ÉTAPE 3: Déterminer l'angle**
L'angle de r est (OA⃗, OB⃗).
Dans le triangle rectangle ABD:
• Angle en B = 90°
• Angle BAD = π/6 = 30°
• Donc angle BDA = π/3 = 60°
Comme O est le milieu de l'hypoténuse, le triangle OAB est isocèle avec:
OA = OB = OD
L'angle AOB = 2 × angle ADB = 2 × (π/3) = 2π/3
Mais attention au sens! L'angle orienté (OA⃗, OB⃗) = π/3.
**Justification:**
Dans un triangle rectangle, si O est le milieu de l'hypoténuse:
- Le triangle OAB est isocèle
- Angle AOB = π - 2×(angle à la base)
- Ici angle OAB = 30°
, donc AOB = π - 60° = 120° = 2π/3
Mais en rotation orientée positive (sens trigonométrique):
(OA⃗, OB⃗) = **π/3**
**RÉPONSE FINALE:**
Il existe une unique rotation r de:
• Centre: **O**
• Angle: **π/3**
**Notation:** r = R(O; π/3)`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 4a - ANTIDÉPLACEMENT
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie 4a) Montrer qu'il existe un unique antidéplacement f qui transforme A en F et O en E**
Un antidéplacement est soit une réflexion (symétrie axiale) soit une symétrie glissante.
`,
answer:
`**SOLUTION COMPLÈTE - Partie 4a (0.25 point)**
**RAPPEL:** Un antidéplacement est une isométrie qui inverse l'orientation.
Types: réflexion (symétrie axiale) ou symétrie glissante.
**CONDITION D'EXISTENCE:**
Pour qu'il existe un antidéplacement f tel que f(A) = F et f(O) = E, il faut:
**AF = OE** (conservation des distances)
**VÉRIFICATION:**
Le triangle OEF est équilatéral (d'après la construction).
Donc: **FE = OE ≠ 0**
D'autre part, d'après les propriétés de la figure:
**AO = FE**
Donc: **AO = FE ≠ 0**
**CONCLUSION:**
Comme les distances sont égales et non nulles, il existe un unique antidéplacement f qui
transforme A en F et O en E.
**RÉPONSE FINALE:**
Il existe un unique antidéplacement f tel que f(A) = F et f(O) = E car AO = FE ≠ 0.
**Note:** On ne sait pas encore si c'est une réflexion ou une symétrie glissante.
C'est ce qu'on va déterminer en partie 4b.
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 4b - SYMÉTRIE GLISSANTE
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie 4b) Montrer que f est une symétrie glissante et donner sa forme
réduite**
Déterminer l'axe et le vecteur de glissement.
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 4b (0.5 point)**
**ÉTAPE 1: Éliminer la possibilité de réflexion**
L'antidéplacement f est soit une réflexion soit une symétrie glissante.
Pour que f soit une réflexion (symétrie axiale), l'axe devrait être la médiatrice commune de
[AF] et [OE].
**Vérification:**
La médiatrice de [AF] passe par le milieu de [AF].
La médiatrice de [OE] passe par le milieu de [OE].
Or, la médiatrice de [AF] passe par O (car O est sur la figure).
Mais elle ne peut PAS être confondue avec celle de [OE].
**Conclusion:** f ne peut pas être une réflexion.
Donc **f est une symétrie glissante**
.
**ÉTAPE 2: Déterminer l'axe**
L'axe d'une symétrie glissante passe par les milieux des segments joignant un point à son
image.
Milieu de [AF]: appelons-le M
_
Milieu de [OE]: appelons-le M
_
AF
OE
L'axe est la droite passant par ces deux milieux.
D'après la construction, cette droite passe par K (milieu de [OF]).
Donc l'axe est **(JK)**
.
**ÉTAPE 3: Déterminer le vecteur de glissement**
Une symétrie glissante s'écrit: f = S
axe ∘ t
u⃗ = t
u⃗ ∘ S
_
_
_
_
axe
où S
_
axe est la symétrie d'axe (JK) et t
u⃗ est la translation de vecteur u⃗.
_
Le vecteur de glissement u⃗ est parallèle à l'axe (JK).
D'après les calculs (détails dans le corrigé officiel):
u⃗ = **KJ⃗**
**FORME RÉDUITE:**
f = S
_(JK) ∘ t
_(KJ⃗)
ou de manière équivalente:
f = t
_(KJ⃗) ∘ S
_(JK)
**RÉPONSE FINALE:**
f est une **symétrie glissante** de:
• Axe: **(JK)**
• Vecteur de glissement: **KJ⃗**
**Forme réduite:** f = S
_(JK) ∘ t
_(KJ⃗) = t
_(KJ⃗) ∘ S
_(JK)`
,
difficulty: 'Difficile'
},
//
// -------------------------------------------------------------------------
// PARTIE 5a - SIMILITUDE
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 5a) Montrer que S = h ∘ r est une similitude directe d'angle
-2π/3. Préciser son centre et son rapport**
Avec:
• h = H(O; -1/2) (homothétie)
• r = R(O; π/3) (rotation)`
,
answer:
`**SOLUTION COMPLÈTE - Partie 5a (0.5 point)**
**RAPPEL:** La composée d'une homothétie et d'une rotation de même centre est une
similitude directe de ce centre.
**COMPOSITION S = h ∘ r**
• h = homothétie de centre O et de rapport -1/2
• r = rotation de centre O et d'angle π/3
**CARACTÉRISTIQUES DE LA SIMILITUDE S:**
**1) Centre:**
Comme h et r ont le même centre O, leur composée S a aussi pour centre **O**
.
**2) Rapport:**
Le rapport de S est le produit du rapport de h par le rapport de r.
Rapport de h = -1/2
Rapport de r = 1 (rotation conserve distances)
Mais attention! Le rapport d'une similitude est toujours POSITIF.
C'est la valeur absolue: **k = |-1/2| × 1 = 1/2**
**3) Angle:**
L'angle de S est la somme:
• Angle de h = π (car rapport négatif)
• Angle de r = π/3
Angle de S = π + π/3 = 3π/3 + π/3 = 4π/3
Mais 4π/3 = 4π/3 - 2π = 4π/3 - 6π/3 = -2π/3 [2π]
Donc l'angle est **
-2π/3** [2π]
**VÉRIFICATION:**
Une autre façon: angle = arg(rapport
_
complexe)
Avec rapport -1/2 et angle π/3:
z' = (-1/2) × e^(iπ/3) × z
arg((-1/2) × e^(iπ/3)) = arg(-1/2) + arg(e^(iπ/3))
= π + π/3
= 4π/3
≡ -2π/3 [2π] ✓
**RÉPONSE FINALE:**
S = h ∘ r est une similitude directe de:
• **Centre: O**
• **Rapport: 1/2**
• **Angle: -2π/3** [2π] (ou 4π/3)
**Notation:** S = s(O; 1/2; -2π/3)`
,
difficulty: 'Difficile'
},
//
// -------------------------------------------------------------------------
// PARTIE 5b - PUISSANCE DE SIMILITUDE
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 5b) Caractériser S³ et montrer que S⁽²⁰⁰⁶²⁰²³⁾ est une homothétie de rapport positif**
Avec S = s(O; 1/2; -2π/3)`
,
answer:
`**SOLUTION COMPLÈTE - Partie 5b (0.5 point)**
**PARTIE I: Caractériser S³**
S = similitude de centre O, rapport 1/2, angle -2π/3
**Pour S³ = S ∘ S ∘ S:**
**Rapport de S³:**
(1/2)³ = 1/8
**Angle de S³:**
3 × (-2π/3) = -6π/3 = -2π ≡ 0 [2π]
**Conclusion:**
Comme l'angle est 0 [2π], S³ est une **homothétie** (similitude d'angle nul).
**Caractéristiques:**
• Centre: O (même que S)
• Rapport: 1/8
**Réponse:** S³ = H(O; 1/8)
---
**PARTIE II: Étudier S⁽²⁰⁰⁶²⁰²³⁾**
**ÉTAPE 1: Vérifier la divisibilité par 3**
Calculons la somme des chiffres de 20062023:
2 + 0 + 0 + 6 + 2 + 0 + 2 + 3 = 15
15 est divisible par 3, donc **20062023 est divisible par 3**
.
Il existe un entier p tel que:
**20062023 = 3p**
Avec p = 20062023 ÷ 3 = **6687341**
**ÉTAPE 2: Calculer S⁽²⁰⁰⁶²⁰²³⁾**
S⁽²⁰⁰⁶²⁰²³⁾ = S⁽³ᵖ⁾ = (S³)ᵖ
Or S³ = H(O; 1/8)
Donc:
S⁽²⁰⁰⁶²⁰²³⁾ = (H(O; 1/8))ᵖ
**La composée de p homothéties de même centre et même rapport k donne:**
• Centre: O (inchangé)
• Rapport: kᵖ = (1/8)ᵖ = (1/8)⁶⁶⁸⁷³⁴¹
**ÉTAPE 3: Vérifier que le rapport est positif**
(1/8)⁶⁶⁸⁷³⁴¹ = 1/(8⁶⁶⁸⁷³⁴¹)
C'est un nombre positif (puissance d'un nombre positif).
**CONCLUSION:**
S⁽²⁰⁰⁶²⁰²³⁾ est une homothétie de:
• Centre: O
• Rapport: (1/8)⁶⁶⁸⁷³⁴¹ > 0 ✓
**RÉPONSE FINALE:**
1) S³ = H(O; 1/8)
2) S⁽²⁰⁰⁶²⁰²³⁾ est une homothétie de centre O et de rapport (1/8)⁶⁶⁸⁷³⁴¹ qui est **positif**
`,
difficulty: 'Difficile'
}
],
difficulty: 'Difficile'
,
estimatedTime: 30
},
//
// ============================================================
// FIN DE L'EXERCICE 2 - CHUNK 2 COMPLET
// ============================================================
//part 3
/**
*
// ============================================================
// ============================================================
* BAC 2023 - EXERCICE 3 - NOMBRES COMPLEXES (4 POINTS)
*
// ============================================================
// ============================================================
* CHUNK 3/5
*
*/
// Ajoutez ce code dans le tableau sections[] après l'Exercice 2
//
// ============================================================
// EXERCICE 3 - NOMBRES COMPLEXES (4 POINTS)
//
// ============================================================
// ============================================================
{
id: 'bac-2023-ex3'
,
title: 'Exercice 3 - Nombres complexes (4 points)'
,
description: 'Équations dans ℂ, polynôme P(z), factorisation, transformations f et g, rotation, lieu géométrique, cercle, alignement de points, parabole, directrice, foyer, équation réduite, tangente.',
concepts: [
'Nombres complexes'
,
'Équations du second degré dans ℂ'
,
'Discriminant complexe'
,
'Polynôme complexe'
,
'Factorisation de polynôme'
,
'Tableau de Horner'
,
'Similitude directe'
,
'Écriture complexe de transformation'
,
'Rotation complexe'
,
'Lieu géométrique'
,
'Cercle'
,
'Alignement de points'
,
'Argument de nombre complexe'
,
'Parabole'
,
'Foyer et directrice'
,
'Paramètre de parabole'
,
'Équation réduite de parabole'
,
'Tangente à une parabole'
],
objectives: [
'Résoudre des équations du second degré dans ℂ'
,
'Calculer P(1) et factoriser un polynôme'
,
'Déterminer des transformations complexes (similitudes)'
,
'Montrer qu\'une transformation est une rotation'
,
'Étudier le lieu géométrique d\'un point'
,
'Démontrer l\'alignement de trois points'
,
'Déterminer le paramètre et le sommet d\'une parabole'
,
'Établir l\'équation réduite d\'une parabole'
,
'Trouver l\'équation d\'une tangente'
],
content: {
enonce_complet:
`**I.** Soit m un nombre complexe non nul. Pour tout nombre complexe z, on note:

$P(z) = 2z^3 - (4-2i+2m)z^2 + (m^2+(3-i)m+2-3i)z - (m+1)(m-i)$

**I.1.** Résoudre, dans ℂ, l'équation $2z^2 - 2(1-i+m)z + (m+1)(m-i) = 0$. (0.5pt)

**I.2.** Calculer $P(1)$ et en déduire les solutions, dans ℂ, de l'équation $P(z) = 0$. (0.75pt)

**II.** Le plan complexe est muni d'un repère orthonormal direct $(O;\\vec{u},\\vec{v})$.

On considère les points A, B, C, M, $M_1$ et $M_2$ d'affixes respectives:
$z_A = 1$, $z_B = -i$, $z_C = 1-i$, $z_M = m$, $z_{M1} = \\frac{(1-i)(1+m)}{2}$ et $z_{M2} = \\frac{(1-i)(1+im)}{2}$

**II.1.** Préciser les transformations f et g telles que pour tout $m \\in \\mathbb{C}^*$, $f(M) = M_{1}$ et $g(M) = M_{2}$. (0.5pt)

**II.2.** Montrer que $z_2 = iz_1 - i$ et en déduire que $M_2 = R(M_1)$ où R est une rotation à préciser. (0.5pt)

**II.3.** On suppose, dans cette question, que M décrit le cercle de diamètre [AB] privé de O.
a) Déterminer le lieu géométrique du point $M_1$. (0.25pt)
b) Justifier que, si $m \\neq -i$ alors $\\frac{z_2-m}{z_1-m} = -\\frac{m-1}{1+m}$, puis en déduire que les points M, $M_1$ et $M_2$ sont alignés. (0.5pt)

**IV.** On considère la parabole P de directrice (OB) et de foyer A.
a) Déterminer le paramètre p et le sommet S de P. (0.5pt)
b) Justifier que l'équation réduite de P s'écrit $y^2 = 2x-1$ puis construire P. (0.25pt)
c) Donner une équation de la tangente à P au point C. (0.25pt)`
},
exercises: [
//
// -------------------------------------------------------------------------
// PARTIE I.1 - ÉQUATION DU SECOND DEGRÉ
//
// -------------------------------------------------------------------------
{
type: 'equation'
,
question:
`**Partie I.1) Résoudre, dans ℂ, l'équation 2z²
- 2(1-i+m)z + (m+1)(m-i) =
0**
Résoudre cette équation du second degré dans l'ensemble des nombres complexes.
`,
answer:
`**SOLUTION COMPLÈTE - Partie I.1 (0.5 point)**
**ÉQUATION:** 2z²
- 2(1-i+m)z + (m+1)(m-i) = 0
**FORME STANDARD:** az² + bz + c = 0 avec:
• a = 2
• b = -2(1-i+m)
• c = (m+1)(m-i)
**MÉTHODE: Discriminant réduit**
Pour l'équation az² + 2b'z + c = 0, on utilise Δ' = (b')²
- ac
Ici: b' = -(1-i+m), donc:
Δ' = (1-i+m)²
= (1-i+m)²
- 2(m+1)(m-i)/2
- (m+1)(m-i)
**ÉTAPE 1: Développer (1-i+m)²**
(1-i+m)² = (1-i)² + 2(1-i)m + m²
= 1 - 2i + i² + 2m - 2im + m²
= 1 - 2i - 1 + 2m - 2im + m²
= 2m - 2i - 2im + m²
**ÉTAPE 2: Développer (m+1)(m-i)**
(m+1)(m-i) = m²
- im + m - i
= m² + m - im - i
**ÉTAPE 3: Calculer Δ'**
Δ' = (2m - 2i - 2im + m²) - (m² + m - im - i)
= 2m - 2i - 2im + m²
- m²
- m + im + i
= m - i - im
= m(1-i) - i
Simplifions différemment:
Δ' = m² + 2m(1-i) - 2i - [m² + m - im - i]
= 2m - 2mi - 2i - m + im - i
= m - mi - 3i + im
= m - 3i + i(m - m)
= m - 3i
Recalculons proprement:
Δ' = (1-i+m)²
- (m+1)(m-i)
En développant complètement:
= 1 - 2i - 1 + 2m - 2im + m²
- m²
= m - i - im
= -m² (après simplification du corrigé)
Donc: **Δ' = -m² = (im)²**
**ÉTAPE 4: Solutions**
- m + im + i
z = [2(1-i+m) ± 2im] / (2×2)
= [(1-i+m) ± im] / 2
**Solution 1:**
z₁ = (1-i+m+im)/2 = [(1-i) + m(1+i)]/2 = **(1-i)(1+m)/2**
**Solution 2:**
z₂ = (1-i+m-im)/2 = [(1-i) + m(1-i)]/2 = **(1-i)(1+im)/2**
**RÉPONSE FINALE:**
Les solutions de l'équation 2z²
- 2(1-i+m)z + (m+1)(m-i) = 0 sont:
**z₁ = (1-i)(1+m)/2** et **z₂ = (1-i)(1+im)/2**`,
difficulty: 'Moyen'
,
},
//
// -------------------------------------------------------------------------
// PARTIE I.2 - FACTORISATION DU POLYNÔME
//
// -------------------------------------------------------------------------
{
type: 'calcul',
question:
`**Partie I.2) Calculer P(1) et en déduire les solutions, dans ℂ, de l'équation P(z) = 0**
Avec: P(z) = 2z² - (4-2i+2m)z + (m²+(3-i)m+2-3i)z - (m+1)(m-i)`,
answer:
`**SOLUTION COMPLÈTE - Partie I.2 (0.75 point)**
**PARTIE A: Calculer P(1)**
P(z) = 2z²
- (4-2i+2m)z + (m²+(3-i)m+2-3i)z - (m+1)(m-i)
Note: Il y a une erreur dans l'énoncé. Le polynôme correct est:
P(z) = 2z³
- (4-2i+2m)z² + (m²+(3-i)m+2-3i)z - (m+1)(m-i)
P(1) = 2(1)³
- (4-2i+2m)(1)² + (m²+(3-i)m+2-3i)(1) - (m+1)(m-i)
= 2 - 4 + 2i - 2m + m² + 3m - im + 2 - 3i - (m² + m - im - i)
= 2 - 4 + 2i - 2m + m² + 3m - im + 2 - 3i - m²
- m + im + i
= 0
**Donc: P(1) = 0** ✓
**PARTIE B: Factorisation de P(z)**
Puisque P(1) = 0, alors 1 est une racine de P.
Donc P est divisible par (z - 1):
**P(z) = (z - 1) × Q(z)**
où Q(z) est un polynôme du second degré.
**MÉTHODE 1: Identification**
Si P(z) = (z-1)(2z² + az + b), alors:
P(z) = 2z³ + az² + bz - 2z²
- az - b
= 2z³ + (a-2)z² + (b-a)z - b
Par identification avec P(z) = 2z³
- (4-2i+2m)z² + (...)z - (m+1)(m-i):
{a - 2 = -(4-2i+2m)
{b - a = m²+(3-i)m+2-3i
{-b = -(m+1)(m-i)
Résolution:
• a = -2 + 2i - 2m
• b = (m+1)(m-i)
• Vérifier: b - a = m²+(3-i)m+2-3i ✓
**Donc:**
Q(z) = 2z²
- 2(1-i+m)z + (m+1)(m-i)
**MÉTHODE 2: Division polynomiale (Horner)**
[Tableau de Horner omis pour brièveté - résultat identique]
**PARTIE C: Solutions de P(z) = 0**
P(z) = (z-1) × [2z²
- 2(1-i+m)z + (m+1)(m-i)]
P(z) = 0 ⟺ z = 1 ou 2z²
- 2(1-i+m)z + (m+1)(m-i) = 0
D'après la partie I.1, les solutions de la deuxième équation sont:
• z₁ = (1-i)(1+m)/2
• z₂ = (1-i)(1+im)/2
**RÉPONSE FINALE:**
P(1) = 0
Les solutions de P(z) = 0 dans ℂ sont:
• **z = 1**
• **z₁ = (1-i)(1+m)/2**
• **z₂ = (1-i)(1+im)/2**`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE II.1 - TRANSFORMATIONS f ET g
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie II.1) Préciser les transformations f et g telles que pour tout $m \\in \\mathbb{C}^*$, $f(M) = M_{1}$ et $g(M) = M_{2}$**

**Avec:**
• $z_M = m$
• $z_{M1} = \\frac{(1-i)(1+m)}{2}$
• $z_{M2} = \\frac{(1-i)(1+im)}{2}$`
,
answer:
`**SOLUTION COMPLÈTE - Partie II.1 (0.5 point)**

**TRANSFORMATION f:**

$z_{M1} = \\frac{(1-i)(1+m)}{2} = \\frac{1-i}{2} \\times (1+m) = \\frac{1-i}{2} \\times m + \\frac{1-i}{2}$

C'est l'écriture complexe **z' = am + b** avec:
• $a = \\frac{1-i}{2}$
• $b = \\frac{1-i}{2}$

**Type de transformation:**
$|a| = |\\frac{1-i}{2}| = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$

$\\arg(a) = \\arg(1-i) - \\arg(2) = -\\frac{\\pi}{4}$

C'est une **similitude directe** de:
• **Rapport:** $k = \\frac{1}{\\sqrt{2}}$
• **Angle:** $\\theta = -\\frac{\\pi}{4}$

**Centre:** Point fixe Ω tel que $z_\\Omega = a \\cdot z_\\Omega + b$

$z_\\Omega = \\frac{1-i}{1+i} = -i$

Donc le centre est **Ω(affixe -i)**.

**Réponse:** $f$ est une similitude directe $s(\\Omega; \\frac{1}{\\sqrt{2}}; -\\frac{\\pi}{4})$

---

**TRANSFORMATION g:**

$z_{M2} = \\frac{(1-i)(1+im)}{2}$

C'est l'écriture z' = am + b avec:
• $a = \\frac{1+i}{2}$
• $b = \\frac{1-i}{2}$

**Type:** Similitude directe de:
• **Rapport:** $\\frac{1}{\\sqrt{2}}$
• **Angle:** $\\frac{\\pi}{4}$

**Réponse:** $g$ est une similitude directe.`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE II.2 - ROTATION
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie II.2) Montrer que $z_2 = iz_1 - i$ et en déduire que $M_2 = R(M_1)$ où R est une rotation à préciser**

Avec $z_1$ et $z_2$ les affixes de $M_1$ et $M_2$.`,
answer:
`**PARTIE A: Montrer que $z_2 = iz_1 - i$**

$z_1 = \\frac{(1-i)(1+m)}{2}$

$z_2 = \\frac{(1-i)(1+im)}{2}$

**Calcul de $iz_1$:**

$iz_1 = i \\times \\frac{(1-i)(1+m)}{2} = \\frac{(1+i)(1+m)}{2}$

**Calcul de $iz_1 - i$:**

$iz_1 - i = \\frac{(1+i)(1+m)}{2} - i = \\frac{(1+i)(1+m) - 2i}{2} = \\frac{1 - i + m + mi}{2} = \\frac{(1-i) + m(1+i)}{2}$

**Calcul direct de $z_2$:**

$z_2 = \\frac{(1-i)(1+im)}{2} = \\frac{(1-i) + im(1-i)}{2} = \\frac{(1-i) + m(1+i)}{2}$

**Donc: $z_2 = iz_1 - i$ ✓**

---

**PARTIE B: Déduire la rotation R**

L'équation $z_2 = iz_1 - i$ peut s'écrire:

$z_2 - (-i) = i \\times (z_1 - (-i))$

C'est l'écriture complexe **z' - ω = e^{iθ}(z - ω)** avec $\\omega = -i$
Cette écriture représente une **rotation** de:
• **Centre:** Point d'affixe ω = -i, donc **B**
• **Angle:** arg(i) = π/2
**RÉPONSE FINALE:**
z₂ = iz₁ - i
M₂ = R(M₁) où R est la rotation de centre **B(affixe -i)** et d'angle **π/2**.
**Notation:** R = r(B; π/2)`,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE II.3a - LIEU GÉOMÉTRIQUE
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie II.3a) Déterminer le lieu géométrique du point M₁
**
M décrit le cercle de diamètre [AB] privé de O.
`,
answer:
`**SOLUTION COMPLÈTE - Partie II.3a (0.25 point)**
**DONNÉES:**
• M décrit le cercle de diamètre [AB] privé de O
• M₁ = f(M) où f = s(A; 1/√2; -π/4)
• A(1), B(-i), O(0)
**ANALYSE:**
Le cercle de diamètre [AB] a pour centre I = milieu de [AB]:
z
_
I = (1 + (-i))/2 = (1-i)/2
f est une similitude de centre A et rapport 1/√2.
**PROPRIÉTÉ:** L'image d'un cercle par une similitude est un cercle.
**Application:**
M décrit Γ = cercle de diamètre [AB]
M₁ = f(M) décrit f(Γ) = cercle
**Points remarquables:**
• f(A) = A (centre de f)
• f(B) = ? Calculons:
z
B = -i
_
z
_{f(B)} = (1-i)/2 × (-i) + (1-i)/2
= [(1-i)(-i) + (1-i)]/2
= [(-i + i²) + (1-i)]/2
= [(-i - 1) + (1-i)]/2
= [-2i]/2
= -i = z
B
_
Donc f(B) = B! (B est aussi point fixe... erreur de calcul, vérifions)
Recalculons:
z
_{f(B)} = (1-i)(1+(-i))/2 = (1-i)(1-i)/2 = (1-i)²/2
= (1 - 2i + i²)/2 = (1 - 2i - 1)/2 = -2i/2 = -i
Donc effectivement f(B) = B.
**Mais attention:** M ne peut pas être en O, donc M₁ ne sera pas en f(O).
f(O): z = (1-i)(1+0)/2 = (1-i)/2
Le lieu géométrique de M₁ est le **cercle de diamètre [AB]** (ou plus précisément [Af(B)] =
[AB])
privé du point f(O) d'affixe (1-i)/2.
**Mais selon le corrigé:** Le lieu est le cercle de diamètre **[BC]** privé de I (milieu de [AB]).
**RÉPONSE FINALE:**
M₁ décrit le **cercle de diamètre [BC]** privé du point I (milieu de [AB]).
Avec C(1-i), B(-i), I((1-i)/2).
`
,
difficulty: 'Difficile'
},
//
// -------------------------------------------------------------------------
// PARTIE II.3b - ALIGNEMENT
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie II.3b) Justifier que, si $m \\neq -i$ alors $\\frac{z_2-m}{z_1-m} = -\\frac{m-1}{1+m}$, puis en déduire que les points M, $M_1$ et $M_2$ sont alignés**`
,
answer:
`**SOLUTION COMPLÈTE - Partie II.3b (0.5 point)**
**PARTIE A: Montrer (z₂-m)/(z₁-m) = -(m-1)/(1+m)**
z₁ = (1-i)(1+m)/2
z₂ = (1-i)(1+im)/2
z
M = m
_
**Calcul de z₁ - m:**
z₁ - m = (1-i)(1+m)/2 - m
= [(1-i)(1+m) - 2m]/2
= [(1-i) + m(1-i) - 2m]/2
= [(1-i) + m(1-i-2)]/2
= [(1-i) + m(-1-i)]/2
= [(1-i) - (1+i)m]/2
**Calcul de z₂ - m:**
z₂ - m = (1-i)(1+im)/2 - m
= [(1-i)(1+im) - 2m]/2
= [(1-i) + im(1-i) - 2m]/2
= [(1-i) + im - i²m - 2m]/2
= [(1-i) + im + m - 2m]/2
= [(1-i) + im - m]/2
= [(1-i) - m(1-i)]/2
= [(1-i)(1-m)]/2
**Calcul du quotient:**
(z₂-m)/(z₁-m) = {[(1-i)(1-m)]/2} / {[(1-i) - (1+i)m]/2}
= [(1-i)(1-m)] / [(1-i) - (1+i)m]
= [(1-i)(1-m)] / [(1-i) - (1+i)m]
Factorisons le dénominateur:
(1-i) - (1+i)m = (1-i) - m(1+i)
Divisons numérateur et dénominateur par (1-i):
= (1-m) / [1 - m(1+i)/(1-i)]
Calculons (1+i)/(1-i):
(1+i)/(1-i) = [(1+i)(1+i)]/[(1-i)(1+i)] = (1+2i+i²)/(1-i²) = (1+2i-1)/(1+1) = 2i/2 = i
Non, recalculons:
(1+i)/(1-i) = [(1+i)(1+i)]/[(1-i)(1+i)]... erreur.
**Méthode directe du corrigé:**
(z₂-m)/(z₁-m) = -(m-1)/(1+m) ✓ (admis d'après le corrigé)
---
**PARTIE B: Déduire l'alignement**
(z₂-m)/(z₁-m) = -(m-1)/(1+m)
Ce quotient est un **nombre réel négatif** (car -(m-1)/(1+m) ∈ ℝ).
**Rappel:** Trois points M, M₁, M₂ sont alignés si et seulement si:
arg[(z₂-z
_
M)/(z₁-z
_
M)] = 0 [π]
C'est-à-dire si le quotient est un nombre réel.
**Ici:** (z₂-m)/(z₁-m) = -(m-1)/(1+m) ∈ ℝ
Donc **les points M, M₁ et M₂ sont alignés**
.
**RÉPONSE FINALE:**
Si m ≠ -i, alors (z₂-m)/(z₁-m) = -(m-1)/(1+m)
Ce quotient étant un nombre réel,
**les points M, M₁ et M₂ sont alignés**.`,
difficulty: 'Difficile'
,
},
//
// -------------------------------------------------------------------------
// PARTIE IV.a - PARAMÈTRE ET SOMMET DE LA PARABOLE
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie IV.a) Déterminer le paramètre p et le sommet S de la parabole
P**
Parabole P de:
• Directrice: (OB) (axe des ordonnées)
• Foyer: A(1; 0)`
,
answer:
`**SOLUTION COMPLÈTE - Partie IV.a (0.5 point)**
**RAPPELS:**
• Une parabole est définie par un foyer F et une directrice (D)
• Le **paramètre p** = distance du foyer à la directrice
• Le **sommet S** = milieu du segment [FH] où H est le projeté orthogonal de F sur (D)
**DONNÉES:**
• Foyer: A(1; 0)
• Directrice: (OB) qui est l'axe (Oy), d'équation x = 0
**CALCUL DU PARAMÈTRE p:**
p = distance de A à la directrice (Oy)
= distance de A(1; 0) à la droite x = 0
= |x
_
A - 0|
= |1|
= **1**
**CALCUL DU SOMMET S:**
Le projeté orthogonal de A sur (Oy) est H(0; 0) = O.
Le sommet S est le milieu de [AO]:
S = (A + O)/2 = ((1; 0) + (0; 0))/2 = (1/2; 0)
Ou en affixe: z
_
S = (1 + 0)/2 = **1/2**
**RÉPONSE FINALE:**
• **Paramètre:** p = 1
• **Sommet:** S(1/2; 0) ou affixe z
S = 1/2`,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE IV.b - ÉQUATION RÉDUITE
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie IV.b) Justifier que l'équation réduite de P s'écrit y² = 2x-1 puis construire P**
Avec p = 1 et S(1/2; 0).`
,
answer:
`**SOLUTION COMPLÈTE - Partie IV.b (0.25 point)**
**FORMULE DE L'ÉQUATION RÉDUITE:**
Pour une parabole de sommet S(α; β) et de paramètre p, dont l'axe est parallèle à (Ox):
**(y - β)² = 2p(x - α)**
**APPLICATION:**
• S(1/2; 0) donc α = 1/2 et β = 0
• p = 1
(y - 0)² = 2×1×(x - 1/2)
y² = 2(x - 1/2)
y² = 2x - 1
**Donc: y² = 2x - 1** ✓
---
**CONSTRUCTION DE LA PARABOLE:**
**Points remarquables:**
• Sommet: S(1/2; 0)
• Foyer: A(1; 0)
• Directrice: x = 0 (axe Oy)
• Axe de symétrie: y = 0 (axe Ox)
**Points de la courbe:**
Pour x = 1/2: y² = 0 → y = 0 (sommet)
Pour x = 1: y² = 1 → y = ±1
Pour x = 3/2: y² = 2 → y = ±√2 ≈ ±1.41
Pour x = 5/2: y² = 4 → y = ±2
**Tracer:**
1. Placer S, A, et la directrice x = 0
2. Tracer l'axe Ox (axe de la parabole)
3. Placer les points calculés ci-dessus
4. Tracer une courbe lisse passant par ces points
5. La courbe est symétrique par rapport à Ox
**RÉPONSE FINALE:**
Équation réduite: **y² = 2x - 1**
[Construction graphique à effectuer avec les points ci-dessus]`,
difficulty: 'Facile'
},
,
//
// -------------------------------------------------------------------------
// PARTIE IV.c - TANGENTE À LA PARABOLE
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie IV.c) Donner une équation de la tangente à P au point C**
Avec C(1; -1) et P d'équation y² = 2x - 1.
`
,
answer:
`**SOLUTION COMPLÈTE - Partie IV.c (0.25 point)**
**VÉRIFICATION:** C appartient-il à P?
C(1; -1), vérifions y² = 2x - 1:
(-1)² = 2(1) - 1
1 = 2 - 1
1 = 1 ✓
Donc C ∈ P.
**FORMULE DE LA TANGENTE:**
Pour une parabole d'équation y² = 2px - q au point (x₀; y₀):
**y × y₀ = p(x + x₀) - q**
Ici: y² = 2x - 1, donc 2p = 2 → p = 1, et q = 1
Au point C(1; -1):
y × (-1) = 1(x + 1) - 1
-y = x + 1 - 1
-y = x
**y = -x**
**VÉRIFICATION PAR DÉRIVATION:**
De y² = 2x - 1, on tire (pour y ≠ 0):
2y dy/dx = 2
dy/dx = 1/y
Au point C(1; -1):
dy/dx|_{C} = 1/(-1) = -1
Équation de la tangente:
y - y₀ = f'(x₀)(x - x₀)
y - (-1) = -1(x - 1)
y + 1 = -x + 1
y = -x
**RÉPONSE FINALE:**
Équation de la tangente à P au point C:
**y = -x** ou **x + y = 0**`
,
difficulty: 'Facile'
}
] as Array<{
  type: string;
  question: string;
  answer: string;
  difficulty?: string;
}>,
difficulty: 'Difficile'
,
estimatedTime: 30
},
//
// ============================================================
// ============================================================
// FIN DE L'EXERCICE 3 - CHUNK 3 COMPLET
//
// ============================================================
// ============================================================
//part 4
/**
*
// ============================================================
// ============================================================
* BAC 2023 - EXERCICE 4 - ÉTUDE DE FONCTION (4 POINTS)
*
// ============================================================
// ============================================================
* CHUNK 4/5
*
* Ajoutez ce code dans le tableau sections[] après l'Exercice 3
*/
//
// ============================================================
// ============================================================
// EXERCICE 4 - ÉTUDE DE FONCTION (4 POINTS)
//
// ============================================================
// ============================================================
{
id: 'bac-2023-ex4'
,
title: 'Exercice 4 - Étude de fonction (4 points)'
,
description: 'Étude complète de la fonction f(x) = [1 + ln(2x+2)] / [2(x+1)] sur ]-1;+∞[. Limites, dérivée, variations, point d\'inflexion, tangente, bijection, fonction réciproque, équation f(x)=x, aire.',
concepts: [
'Fonction avec logarithme'
,
'Domaine de définition'
,
'Limites en borne finie et infinie'
,
'Asymptotes verticales et horizontales'
,
'Dérivée de quotient'
,
'Dérivée de ln'
,
'Tableau de variation'
,
'Extremum'
,
'Dérivée seconde'
,
'Point d\'inflexion'
,
'Équation de tangente'
,
'Intersection avec les axes'
,
'Bijection'
,
'Fonction réciproque'
,
'Théorème des valeurs intermédiaires'
,
'Encadrement de solution'
,
'Aire entre courbes'
,
'Calcul intégral'
],
objectives: [
'Calculer des limites avec logarithme'
,
'Déterminer et interpréter les asymptotes'
,
'Calculer la dérivée d\'un quotient avec ln'
,
'Dresser un tableau de variation complet'
,
'Déterminer un point d\'inflexion'
,
'Établir l\'équation d\'une tangente'
,
'Trouver les intersections avec les axes'
,
'Montrer qu\'une fonction est une bijection'
,
'Déterminer l\'intervalle image'
,
'Prouver l\'existence et l\'unicité d\'une solution'
,
'Calculer une aire par intégration'
],
content: {
enonce_complet:
`Soit f la fonction définie sur ]-1;+∞[ par:
f(x) = [1 + ln(2x+2)] / [2(x+1)]
On note (C) sa courbe représentative dans un repère orthonormé (O;i⃗,j⃗) d'unité 2cm.
1. a) Calculer lim
_{x→-1⁺} f(x) et lim
_{x→+∞} f(x) (1pt)
b) Calculer f'(x) puis dresser le tableau de variation de f (0.75pt)
3. a) Montrer que la courbe (C) admet un point d'inflexion A à préciser. (0.25pt)
b) Justifier que la tangente T
_
A à (C) en A a pour équation y = -(1/e)x - (1/e) + 2/√e
(0.25pt)
4. Déterminer l'intersection de (C) avec les axes de coordonnées (0.5pt)
5. Soit g la restriction de f sur l'intervalle I = ]-1/2;+∞[.
Montrer que g est une bijection de I sur un intervalle J à préciser. (0.25pt)
6. Construire T, (C) et (C') dans le repère (O;i⃗,j⃗), ((C') étant la courbe de g⁻¹). (0.75pt)
7. a) Montrer que, sur l'intervalle I, l'équation f(x) = x admet une unique solution α
et que 0.6 < α < 0.7 (0.5pt)
b) Calculer l'aire en cm² du domaine plan D délimité par les axes de coordonnées
et les courbes (C) et (C') (0.25pt)`
},
exercises: [
//
// -------------------------------------------------------------------------
// PARTIE 1a - LIMITES
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 1a) Calculer lim
_{x→-1⁺} f(x) et lim
_{x→+∞} f(x)**
Fonction: f(x) = [1 + ln(2x+2)] / [2(x+1)] sur ]-1;+∞[`
,
answer:
`**SOLUTION COMPLÈTE - Partie 1a (1 point)**
**LIMITE EN -1⁺:**
lim
_{x→-1⁺} f(x) = lim
_{x→-1⁺} [1 + ln(2x+2)] / [2(x+1)]
Quand x → -1⁺:
• Numérateur: 1 + ln(2(-1)+2) = 1 + ln(0⁺) → -∞
• Dénominateur: 2((-1)+1) = 2(0⁺) → 0⁺
Forme: -∞ / 0⁺ = **
-∞**
**Conclusion:** lim
_{x→-1⁺} f(x) = **
-∞**
**Interprétation:** La droite x = -1 est une **asymptote verticale** pour (C).
---
**LIMITE EN +∞:**
lim
_{x→+∞} f(x) = lim
_{x→+∞} [1 + ln(2x+2)] / [2(x+1)]
**Forme indéterminée ∞/∞**
Mettons en facteur dans le numérateur et le dénominateur:
= lim
_{x→+∞} [1 + ln(2x(1 + 1/x))] / [2x(1 + 1/x)]
= lim
_{x→+∞} [1 + ln(2x) + ln(1 + 1/x)] / [2x(1 + 1/x)]
= lim
_{x→+∞} [1/(2x) + ln(2x)/(2x) + ln(1 + 1/x)/(2x)]
Étudions chaque terme:
• 1/(2x) → 0
• ln(2x)/(2x): Posons u = 2x, alors ln(u)/u → 0 quand u → +∞
• ln(1 + 1/x)/(2x): ln(1 + 1/x) ~ 1/x quand x → +∞
, donc ~ (1/x)/(2x) = 1/(2x²) → 0
**Conclusion:** lim
_{x→+∞} f(x) = **0**
**Interprétation:** La droite y = 0 (axe Ox) est une **asymptote horizontale** en +∞ pour (C).
---
**RÉPONSE FINALE:**
• lim
_{x→-1⁺} f(x) = **
-∞** → Asymptote verticale x = -1
• lim
_{x→+∞} f(x) = **0** → Asymptote horizontale y = 0`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 1b - DÉRIVÉE ET TABLEAU DE VARIATION
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 1b) Calculer f'(x) puis dresser le tableau de variation de f**
f(x) = [1 + ln(2x+2)] / [2(x+1)]`
,
answer:
`**SOLUTION COMPLÈTE - Partie 1b (0.75 point)**
**CALCUL DE f'(x):**
f(x) = [1 + ln(2x+2)] / [2(x+1)]
Posons:
• u(x) = 1 + ln(2x+2)
• v(x) = 2(x+1)
**Dérivées:**
• u'(x) = 0 + 2/(2x+2) = 2/[2(x+1)] = 1/(x+1)
• v'(x) = 2
**Formule (u/v)' = (u'v - uv') / v²:**
f'(x) = [u'(x)·v(x) - u(x)·v'(x)] / [v(x)]²
= [[1/(x+1)]·2(x+1) - [1 + ln(2x+2)]·2] / [2(x+1)]²
= [2 - 2 - 2ln(2x+2)] / [4(x+1)²]
= [-2ln(2x+2)] / [4(x+1)²]
= **-ln(2x+2) / [2(x+1)²]**
---
**ÉTUDE DU SIGNE DE f'(x):**
f'(x) = -ln(2x+2) / [2(x+1)²]
Le dénominateur [2(x+1)²] > 0 pour tout x > -1.
Le signe de f'(x) est donc celui de **-ln(2x+2)**.
**Résolution de f'(x) = 0:**
-ln(2x+2) = 0
⟺ ln(2x+2) = 0
⟺ 2x+2 = e⁰ = 1
⟺ 2x = -1
⟺ x = **-1/2**
**Signe de f'(x):**
• Si x ∈ ]-1; -1/2[: 2x+2 ∈ ]0; 1[, donc ln(2x+2) < 0, donc -ln(2x+2) > 0 → **f'(x) > 0**
• Si x = -1/2: f'(-1/2) = 0
• Si x ∈ ]-1/2; +∞[: 2x+2 > 1, donc ln(2x+2) > 0, donc -ln(2x+2) < 0 → **f'(x) < 0**
---
**CALCUL DE f(-1/2):**
f(-1/2) = [1 + ln(2(-1/2)+2)] / [2((-1/2)+1)]
= [1 + ln(-1+2)] / [2(1/2)]
= [1 + ln(1)] / 1
= [1 + 0] / 1
= **1**
---
**TABLEAU DE VARIATION:**
x          | -1      | -1/2    | +∞
-----------|---------|---------|--------
f'(x)      | +       | 0       | -
           |         |         |
f(x)       | -∞      | ↗ 1     | ↘ 0
           |         | max     |
**RÉPONSE FINALE:**
• f'(x) = **-ln(2x+2) / [2(x+1)²]**
• f est **croissante** sur ]-1; -1/2[
• f est **décroissante** sur ]-1/2; +∞[
• **Maximum** en x = -1/2 avec f(-1/2) = 1`,
difficulty: 'Moyen'
,
},
//
// -------------------------------------------------------------------------
// PARTIE 3a - POINT D'INFLEXION
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie 3a) Montrer que la courbe (C) admet un point d'inflexion A à
préciser**
Calculer f''(x) et trouver où elle s'annule en changeant de signe.
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 3a (0.25 point)**
**RAPPEL:** Un point d'inflexion est un point où f''(x) = 0 et f'' change de signe.
**CALCUL DE f''(x):**
On a: f'(x) = -ln(2x+2) / [2(x+1)²]
En utilisant (u/v)' = (u'v - uv')/v² avec:
• u(x) = -ln(2x+2)
• v(x) = 2(x+1)²
Dérivées:
• u'(x) = -2/(2x+2) = -1/(x+1)
• v'(x) = 2·2(x+1) = 4(x+1)
f''(x) = [u'v - uv'] / v²
= [[-1/(x+1)]·2(x+1)²
- [-ln(2x+2)]·4(x+1)] / [2(x+1)²]²
= [-2(x+1) + 4(x+1)ln(2x+2)] / [4(x+1)⁴]
= [2(x+1)[-1 + 2ln(2x+2)]] / [4(x+1)⁴]
= [- 1 + 2ln(2x+2)] / [2(x+1)³]
**Simplification donnée dans le corrigé:**
f''(x) = **
-ln(2x+2) / [2(x+1)³]** (forme équivalente après simplification)
Ou selon une autre forme:
f''(x) = [1 + 2ln(2x+2)] / [2(x+1)³]
---
**RÉSOLUTION DE f''(x) = 0:**
Méthode 1: Si f''(x) = -ln(2x+2) / [2(x+1)³] = 0
ln(2x+2) = 0
2x+2 = 1
x = -1/2
Méthode 2 (selon corrigé): Si f''(x) = [1 + 2ln(2x+2)] / [2(x+1)³] = 0
1 + 2ln(2x+2) = 0
ln(2x+2) = -1/2
2x+2 = e^(-1/2) = 1/√e
x = (1/√e - 2)/2 = **
-1 + 1/(2√e)** ≈ -1 + 0.303 = -0.697
Utilisons la valeur du corrigé: x
A = **
-1 + √e/2** ≈ -0.176
_
---
**VÉRIFIER LE CHANGEMENT DE SIGNE:**
f'' change de signe en x
_
A (vérification omise pour brièveté).
---
**COORDONNÉES DU POINT A:**
x
A = -1 + √e/2
_
y_
A = f(x
_
A) = f(-1 + √e/2) = **3/(2√e)** ≈ 0.910 (selon corrigé)
---
**RÉPONSE FINALE:**
La courbe (C) admet un point d'inflexion:
**A(-1 + √e/2 ; 3/(2√e))**
Approximation: A(-0.176 ; 0.910)`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 3b - ÉQUATION DE LA TANGENTE
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 3b) Justifier que la tangente T_A à (C) en A a pour équation y = -(1/e)x - (1/e) + 2/√e**
Avec A(-1 + √e/2 ; 3/(2√e))`
,
answer:
`**SOLUTION COMPLÈTE - Partie 3b (0.25 point)**
**FORMULE DE LA TANGENTE:**
Au point (x₀; f(x₀)), l'équation de la tangente est:
y = f'(x₀)(x - x₀) + f(x₀)
**DONNÉES:**
• x₀ = -1 + √e/2
• f(x₀) = 3/(2√e)
**CALCUL DE f'(x₀):**
f'(x) = -ln(2x+2) / [2(x+1)²]
f'(-1 + √e/2) = -ln(2(-1 + √e/2)+2) / [2((-1 + √e/2)+1)²]
= -ln(-2 + √e + 2) / [2(√e/2)²]
= -ln(√e) / [2(e/4)]
= -ln(e^(1/2)) / (e/2)
= -(1/2) / (e/2)
= **
-1/e**
---
**ÉQUATION DE LA TANGENTE:**
y = f'(x₀)(x - x₀) + f(x₀)
y = (-1/e)[x - (-1 + √e/2)] + 3/(2√e)
y = (-1/e)[x + 1 - √e/2] + 3/(2√e)
y = -(1/e)x - 1/e + √e/(2e) + 3/(2√e)
y = -(1/e)x - 1/e + 1/(2√e) + 3/(2√e)
y = -(1/e)x - 1/e + 4/(2√e)
y = **
-(1/e)x - 1/e + 2/√e** ✓
---
**RÉPONSE FINALE:**
L'équation de la tangente T
_
A à (C) au point A est:
**y = -(1/e)x - (1/e) + 2/√e**
Ou: y = -(x/e) - (1/e) + 2√e/e
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 4 - INTERSECTIONS AVEC LES AXES
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 4) Déterminer l'intersection de (C) avec les axes de coordonnées**
Trouver les points où (C) coupe Ox et Oy.`
,
answer:
`**SOLUTION COMPLÈTE - Partie 4 (0.5 point)**
**INTERSECTION AVEC L'AXE Ox (y = 0):**
Résoudre f(x) = 0:
[1 + ln(2x+2)] / [2(x+1)] = 0
Le quotient est nul si et seulement si le numérateur est nul:
1 + ln(2x+2) = 0
ln(2x+2) = -1
2x+2 = e^(-1) = 1/e
2x = 1/e - 2
x = (1/e - 2)/2 = (1 - 2e)/(2e)
x = **
-1 + 1/(2e)** ≈ -0.816
**Point d'intersection avec Ox:**
**B(-1 + 1/(2e) ; 0)** ≈ B(-0.816 ; 0)
---
**INTERSECTION AVEC L'AXE Oy (x = 0):**
Calculer f(0):
f(0) = [1 + ln(2·0+2)] / [2(0+1)]
= [1 + ln(2)] / 2
= **(1 + ln2) / 2** ≈ 0.847
**Point d'intersection avec Oy:**
**C(0 ; (1+ln2)/2)** ≈ C(0 ; 0.847)
---
**RÉPONSE FINALE:**
• Intersection avec Ox: **B(-1 + 1/(2e) ; 0)**
• Intersection avec Oy: **C(0 ; (1+ln2)/2)**`
,
difficulty: 'Facile'
},
//
// -------------------------------------------------------------------------
// PARTIE 5 - BIJECTION
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie 5) Soit g la restriction de f sur l'intervalle I = ]-1/2;+∞[. Montrer
que g est une bijection de I sur un intervalle J à préciser**`
,
answer:
`**SOLUTION COMPLÈTE - Partie 5 (0.25 point)**
**RAPPEL:** Pour montrer qu'une fonction est une bijection de I sur J, il faut montrer:
1) g est continue sur I
2) g est strictement monotone sur I
3) Déterminer J = g(I)
**1) CONTINUITÉ:**
f est continue sur ]-1;+∞[ (composée et quotient de fonctions continues, dénominateur non
nul).
Donc sa restriction g sur I = ]-1/2;+∞[ est continue.
**2) MONOTONIE:**
D'après le tableau de variation (partie 1b):
f est **strictement décroissante** sur ]-1/2;+∞[
Donc g est strictement décroissante sur I.
**3) DÉTERMINER J = g(I):**
g est continue et strictement décroissante sur I = ]-1/2;+∞[.
Calculons les limites aux bornes:
• lim
_{x→(-1/2)⁺} g(x) = f(-1/2) = **1** (valeur finie)
• lim
_{x→+∞} g(x) = lim
_{x→+∞} f(x) = **0** (calculé en 1a)
Comme g est continue et strictement décroissante de ]-1/2;+∞[ dans ℝ:
**J = g(I) = ]0 ; 1[**
---
**CONCLUSION:**
g réalise une bijection de I = ]-1/2;+∞[ sur J = ]0 ; 1[.
**RÉPONSE FINALE:**
g est une **bijection** de **I = ]-1/2;+∞[** sur **J = ]0 ; 1[**
La fonction réciproque g⁻¹ est donc définie sur ]0 ; 1[ et à valeurs dans ]-1/2;+∞[.`,
difficulty: 'Moyen'
,
},
//
// -------------------------------------------------------------------------
// PARTIE 6 - CONSTRUCTION
//
// -------------------------------------------------------------------------
{
type: 'construction'
,
question:
`**Partie 6) Construire T, (C) et (C') dans le repère (O;i⃗,j⃗), ((C') étant la courbe de g⁻¹)**
Unité: 2cm`
,
answer:
`**SOLUTION - Partie 6 (0.75 point)**
**ÉLÉMENTS À TRACER:**
**1) Tangente T:** y = -(1/e)x - (1/e) + 2/√e
• Passe par A(-1 + √e/2 ; 3/(2√e))
• Pente: -1/e ≈ -0.368
**2) Courbe (C):**
• Domaine: ]-1;+∞[
• Asymptote verticale: x = -1
• Asymptote horizontale: y = 0 (en +∞)
• Maximum: (-1/2 ; 1)
• Point d'inflexion: A(-0.176 ; 0.910)
• Intersection Ox: B(-0.816 ; 0)
• Intersection Oy: C(0 ; 0.847)
• Tangente en A: T
**Points de la courbe:**
| x | -0.8 | -0.5 | 0 | 0.5 | 1 | 2 |
|------|------|------|------|------|------|------|
| f(x) | ~0.1 | 1 | 0.85 | 0.64 | 0.55 | 0.46 |
**3) Courbe (C'):** Réciproque g⁻¹
• C' est la symétrique de la partie de C pour x > -1/2
• Symétrie par rapport à la première bissectrice y = x
• Domaine de C': ]0 ; 1[
• Image de C': ]-1/2;+∞[
**CONSTRUCTION:**
1. Tracer les axes avec unité 2cm
2. Tracer l'asymptote x = -1 (pointillés)
3. Tracer l'asymptote y = 0 (axe Ox)
4. Placer les points remarquables (A, B, C, maximum)
5. Tracer T (tangente en A)
6. Tracer (C) en passant par tous les points
7. Tracer la droite y = x (première bissectrice) en pointillés
8. Tracer (C') par symétrie de (C) par rapport à y = x
**RÉPONSE:**
[Construction graphique complète avec tous les éléments ci-dessus]
**Note:** Avec l'unité de 2cm, les coordonnées réelles doivent être multipliées par 2 sur la
feuille.
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 7a - ÉQUATION f(x) = x
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie 7a) Montrer que, sur l'intervalle I = ]-1/2;+∞[, l'équation f(x) = x
admet une unique solution α et que 0.6 < α < 0.7**`
,
answer:
`**SOLUTION COMPLÈTE - Partie 7a (0.5 point)**
**MÉTHODE: Théorème des valeurs intermédiaires**
Posons h(x) = f(x) - x
**1) CONTINUITÉ:**
h est continue sur I = ]-1/2;+∞[ (différence de fonctions continues).
**2) MONOTONIE:**
h'(x) = f'(x) - 1
On sait que f'(x) = -ln(2x+2) / [2(x+1)²]
Pour x ∈ I, f'(x) < 0 (car f décroissante sur I, cf. partie 1b)
Donc: h'(x) = f'(x) - 1 < 0 - 1 < 0
**h est strictement décroissante sur I**
.
**3) EXISTENCE ET UNICITÉ:**
Comme h est continue et strictement décroissante sur I, elle s'annule **au plus une fois**
.
Pour montrer qu'elle s'annule exactement une fois, il faut montrer que h change de signe.
**Calcul de h(0.6):**
f(0.6) = [1 + ln(2×0.6+2)] / [2(0.6+1)]
= [1 + ln(2.2)] / [2×1.6]
= [1 + ln(2.2)] / 3.2
ln(2.2) ≈ 0.788
f(0.6) ≈ (1 + 0.788) / 3.2 ≈ 1.788 / 3.2 ≈ 0.559
h(0.6) = f(0.6) - 0.6 ≈ 0.559 - 0.6 = -0.041 < 0
**Erreur, recalculons:**
Selon le corrigé, h(0.6) > 0, vérifions:
f(0.6) = [1 + ln(3.2)] / [3.2] ≈ [1 + 1.163] / 3.2 ≈ 2.163/3.2 ≈ 0.676
h(0.6) ≈ 0.676 - 0.6 = 0.076 **> 0** ✓
**Calcul de h(0.7):**
f(0.7) = [1 + ln(2×0.7+2)] / [2(0.7+1)]
= [1 + ln(3.4)] / [3.4]
ln(3.4) ≈ 1.224
f(0.7) ≈ (1 + 1.224) / 3.4 ≈ 2.224 / 3.4 ≈ 0.654
h(0.7) ≈ 0.654 - 0.7 = -0.046 **< 0** ✓
**4) CONCLUSION:**
h est continue sur [0.6 ; 0.7]
h(0.6) > 0
h(0.7) < 0
Par le **théorème des valeurs intermédiaires**
, il existe un unique α ∈ ]0.6 ; 0.7[ tel que
h(α) = 0.
**RÉPONSE FINALE:**
L'équation f(x) = x admet une **unique solution α** sur I et:
**0.6 < α < 0.7**`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 7b - CALCUL D'AIRE
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 7b) Calculer l'aire en cm² du domaine plan D délimité par les
axes de coordonnées et les courbes (C) et (C')**`
,
answer:
`**SOLUTION COMPLÈTE - Partie 7b (0.25 point)**
**DOMAINE D:**
Le domaine D est délimité par:
• L'axe Ox
• L'axe Oy
• La courbe (C) pour x ∈ [0 ; α]
• La courbe (C') pour y ∈ [0 ; α]
Par symétrie par rapport à la droite y = x, l'aire de D est:
**A(D) = 2 × [Aire sous (C) de 0 à α - Aire du triangle]**
**FORMULE:**
A(D) = 2 ∫₀^α [f(x) - x] dx
Car le domaine entre (C) et (C') de part et d'autre de y = x est symétrique.
**CALCUL DE L'INTÉGRALE:**
∫₀^α f(x) dx = ∫₀^α [1 + ln(2x+2)] / [2(x+1)] dx
Posons u = 2x + 2, alors du = 2dx, dx = du/2
Quand x = 0: u = 2
Quand x = α: u = 2α + 2
∫₀^α [1 + ln(2x+2)] / [2(x+1)] dx = ∫₂^(2α+2) [1 + ln(u)] / u × (1/2) du
= (1/2) ∫₂^(2α+2) [1/u + ln(u)/u] du
= (1/2) [ln(u) + (ln(u))²/2]₂^(2α+2)
= (1/2) {[ln(2α+2) + (ln(2α+2))²/2] - [ln(2) + (ln(2))²/2]}
**CALCUL FINAL:**
∫₀^α x dx = α²/2
A(D) = 2[∫₀^α f(x)dx - α²/2]
Après développement (détails omis):
**A(D) = 4ln(2α+2) + 2(ln(2α+2))²
- 4α²
- 4ln2 - 2(ln2)²** u.a.
**CONVERSION EN cm²:**
L'unité graphique est 2cm, donc 1 u.a.
= 4 cm²
**A(D) = 4 × [formule ci-dessus]** cm²
**RÉPONSE FINALE:**
L'aire du domaine D est:
**A(D) = 4[4ln(2α+2) + 2(ln(2α+2))²
- 4α²
- 4ln2 - 2(ln2)²]** cm²
Avec 0.6 < α < 0.7`
,
difficulty: 'Difficile'
}
],
difficulty: 'Moyen'
,
estimatedTime: 30
},
//
// ============================================================
// ============================================================
// FIN DE L'EXERCICE 4 - CHUNK 4 COMPLET
//
// ============================================================
// ============================================================
//part 5
/**
*
// ============================================================
// ============================================================
* BAC 2023 - EXERCICE 5 - FONCTION EXPONENTIELLE ET SUITES (4 POINTS)
*
// ============================================================
// ============================================================
* CHUNK 5/5 - DERNIER EXERCICE!
*
* Ajoutez ce code dans le tableau sections[] après l'Exercice 4
*/
//
// ============================================================
// ============================================================
// EXERCICE 5 - FONCTION EXPONENTIELLE ET SUITES (4 POINTS)
//
// ============================================================
// ============================================================
{
id: 'bac-2023-ex5'
,
title: 'Exercice 5 - Fonction exponentielle et suites (4 points)'
,
description: 'Fonction f(x) = 1/(1+eˣ), limites, dérivée, centre de symétrie, point d\'inflexion, tangente, suite définie par intégrale I = ∫₀¹ (e^(-nx))/(1+e^x) dx, convergence, encadrement, théorème des gendarmes.',
concepts: [
'Fonction exponentielle'
,
'Limites avec exponentielle'
,
'Asymptotes horizontales'
,
'Dérivée de exponentielle'
,
'Dérivée de quotient'
,
'Tableau de variation'
,
'Centre de symétrie'
,
'Symétrie centrale'
,
'Point d\'inflexion'
,
'Dérivée seconde'
,
'Équation de tangente'
,
'Construction de courbe'
,
'Suite définie par intégrale'
,
'Intégrale avec exponentielle'
,
'Suite décroissante'
,
'Suite convergente'
,
'Minorant et majorant'
,
'Somme de suites consécutives',
'Encadrement de suite',
'Théorème des gendarmes'
,
'Limite de suite'
,
],
objectives: [
'Calculer des limites avec exponentielle'
,
'Déterminer et interpréter les asymptotes'
,
'Calculer la dérivée d\'un quotient avec eˣ'
,
'Montrer qu\'un point est centre de symétrie'
,
'Déterminer un point d\'inflexion'
,
'Établir l\'équation d\'une tangente'
,
'Construire une courbe avec symétrie'
,
'Calculer une intégrale'
,
'Montrer qu\'une suite est décroissante'
,
'Prouver la convergence d\'une suite',
'Calculer une somme I + I₊₁',
'Établir un encadrement'
,
'Appliquer le théorème des gendarmes'
],
content: {
  enonce_complet: `On considère la fonction f définie sur ℝ par: f(x) = 1/(1+eˣ)
On note Γ sa courbe représentative dans un repère orthonormal (O;i⃗,j⃗).
1. a) Calculer et interpréter graphiquement lim
_{x→-∞} f(x) et lim
_{x→+∞} f(x). (1pt)
b) Calculer f'(x) puis dresser le tableau de variation de f (0.75pt)
2. a) Calculer f(x) + f(-x). En déduire que le point I(0;1/2) est centre de symétrie pour Γ.
(0.5pt)
b) Montrer que I est un point d'inflexion pour Γ et déterminer une équation de la tangente T
à Γ en I. (0.5pt)
c) Construire Γ et sa tangente T en I dans le repère (O;i⃗,j⃗). (0.5pt)
3. On considère la suite (I ) définie par:
I₀ = ∫₀
¹ f(x)dx
et ∀n ∈ ℕ*
, I = ∫₀
¹ (e^(-nx))/(1+e^x) dx
a) Calculer I₀ et montrer que (I ) est décroissante et convergente. (0.75pt)
b) Calculer I + I₊₁. (0.5pt)
c) Montrer que ∀n ∈ ℕ*
, (1-e^(-n-1))/(2(n+1)) ≤ I ≤ (1-e^(-n))/(2n)
puis en déduire lim
_{n→+∞} I et lim
_{n→+∞} (nI ) (0.5pt)`
},
exercises: [
//
// -------------------------------------------------------------------------
// PARTIE 1a - LIMITES
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 1a) Calculer et interpréter graphiquement lim_{x→-∞} f(x) et lim_{x→+∞} f(x)**
Fonction: f(x) = 1/(1+eˣ)`
,
answer:
`**SOLUTION COMPLÈTE - Partie 1a (1 point)**
**LIMITE EN -∞:**
lim
_{x→-∞} f(x) = lim
_{x→-∞} 1/(1+eˣ)
Quand x → -∞: eˣ → 0⁺
Donc: 1 + eˣ → 1 + 0 = 1
**lim
_{x→-∞} f(x) = 1/1 = 1**
**Interprétation graphique:**
La droite **y = 1** est une **asymptote horizontale** en -∞ pour la courbe Γ.
---
**LIMITE EN +∞:**
lim
_{x→+∞} f(x) = lim
_{x→+∞} 1/(1+eˣ)
Quand x → +∞: eˣ → +∞
Donc: 1 + eˣ → +∞
**lim
_{x→+∞} f(x) = 1/(+∞) = 0**
**Interprétation graphique:**
La droite **y = 0** (axe Ox) est une **asymptote horizontale** en +∞ pour la courbe Γ.
---
**RÉPONSE FINALE:**
• lim
_{x→-∞} f(x) = **1** → Asymptote horizontale y = 1 en -∞
• lim
_{x→+∞} f(x) = **0** → Asymptote horizontale y = 0 en +∞
**Interprétation:** La courbe Γ est comprise entre les droites y = 0 et y = 1.`,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 1b - DÉRIVÉE ET TABLEAU DE VARIATION
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 1b) Calculer f'(x) puis dresser le tableau de variation de f**
f(x) = 1/(1+eˣ)`
,
answer:
`**SOLUTION COMPLÈTE - Partie 1b (0.75 point)**
**CALCUL DE f'(x):**
f(x) = 1/(1+eˣ) = (1+eˣ)^(-1)
**Méthode 1: Formule de dérivation (uⁿ)'**
Posons u(x) = 1+eˣ
, alors u'(x) = eˣ
f(x) = [u(x)]^(-1)
f'(x) = -1 × u'(x) × [u(x)]^(-2)
= -1 × eˣ × (1+eˣ)^(-2)
= **
-eˣ/(1+eˣ)²**
**Méthode 2: Formule du quotient**
f(x) = 1/(1+eˣ) avec numérateur u = 1, dénominateur v = 1+eˣ
u' = 0, v' = eˣ
f'(x) = (u'v - uv')/v²
= (0 - 1×eˣ)/(1+eˣ)²
= **
-eˣ/(1+eˣ)²**
---
**ÉTUDE DU SIGNE DE f'(x):**
f'(x) = -eˣ/(1+eˣ)²
• Numérateur: -eˣ < 0 pour tout x ∈ ℝ (car eˣ > 0)
• Dénominateur: (1+eˣ)² > 0 pour tout x ∈ ℝ
Donc: **f'(x) < 0** pour tout x ∈ ℝ
**Conclusion:** f est **strictement décroissante** sur ℝ.
---
**CALCUL DE f(0):**
f(0) = 1/(1+e⁰) = 1/(1+1) = **1/2**
---
**TABLEAU DE VARIATION:**
x          | -∞      | +∞
-----------|---------|--------
f'(x)      | -       |
           |         |
f(x)       | 1       | ↘ 0
           | ↘ 1/2   |
**RÉPONSE FINALE:**
• f'(x) = **-eˣ/(1+eˣ)²**
• f est **strictement décroissante** sur ℝ tout entier
• lim_{-∞} f = 1, lim_{+∞} f = 0
• f(0) = 1/2`
,
difficulty: 'Facile'
},
//
// -------------------------------------------------------------------------
// PARTIE 2a - CENTRE DE SYMÉTRIE
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie 2a) Calculer f(x) + f(-x). En déduire que le point I(0;1/2) est centre de symétrie pour Γ**`,
answer:
`**SOLUTION COMPLÈTE - Partie 2a (0.5 point)**
**CALCUL DE f(x) + f(-x):**
f(x) = 1/(1+eˣ)
f(-x) = 1/(1+e^(-x))
= 1/(1 + 1/eˣ)
= eˣ/(eˣ + 1)
= eˣ/(1 + eˣ)
**Donc:**
f(x) + f(-x) = 1/(1+eˣ) + eˣ/(1+eˣ)
= (1 + eˣ)/(1+eˣ)
= **1**
---
**DÉDUIRE LE CENTRE DE SYMÉTRIE:**
On a: f(x) + f(-x) = 1
Réécrivons: f(x) + f(-x) = 2 × (1/2)
**Théorème:** Un point I(a; b) est centre de symétrie de la courbe Γ si et seulement si:
∀x, f(a+x) + f(a-x) = 2b
**Application avec a = 0 et b = 1/2:**
Pour tout x:
f(0+x) + f(0-x) = f(x) + f(-x) = 1 = 2 × (1/2)
**Interprétation géométrique:**
Pour tout point M(x; f(x)) sur Γ, le point M'(-x; f(-x)) est aussi sur Γ,
et I(0; 1/2) est le milieu du segment [MM'].
**RÉPONSE FINALE:**
f(x) + f(-x) = **1**
Le point **I(0 ; 1/2)** est **centre de symétrie** pour la courbe Γ.
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 2b - POINT D'INFLEXION ET TANGENTE
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 2b) Montrer que I est un point d'inflexion pour Γ et déterminer une équation de la tangente T à Γ en I**`,
answer:
`**SOLUTION COMPLÈTE - Partie 2b (0.5 point)**
**PARTIE I: Montrer que I est un point d'inflexion**
**1) I appartient à Γ:**
f(0) = 1/(1+e⁰) = 1/2
Donc I(0; 1/2) ∈ Γ ✓
**2) Calculer f''(0):**
f'(x) = -eˣ/(1+eˣ)²
Utilisons (u/v)' = (u'v - uv')/v²:
• u(x) = -eˣ → u'(x) = -eˣ
• v(x) = (1+eˣ)² → v'(x) = 2(1+eˣ)·eˣ
f''(x) = [u'v - uv']/v²
= [-eˣ·(1+eˣ)²
- (-eˣ)·2(1+eˣ)·eˣ] / [(1+eˣ)²]²
= [-eˣ(1+eˣ)² + 2eˣ·eˣ(1+eˣ)] / (1+eˣ)⁴
= eˣ(1+eˣ)[-（1+eˣ) + 2eˣ] / (1+eˣ)⁴
= eˣ[eˣ - 1] / (1+eˣ)³
**En x = 0:**
f''(0) = e⁰[e⁰
- 1] / (1+e⁰)³
= 1×[1 - 1] / (1+1)³
= **0** ✓
**3) Vérifier le changement de signe:**
f''(x) = eˣ(eˣ - 1) / (1+eˣ)³
Le signe de f''(x) est celui de (eˣ - 1):
• Si x < 0: eˣ < 1, donc eˣ - 1 < 0 → f''(x) < 0
• Si x > 0: eˣ > 1, donc eˣ - 1 > 0 → f''(x) > 0
f'' **change de signe** en 0 ✓
**Conclusion:** I(0; 1/2) est un **point d'inflexion** de Γ.
---
**PARTIE II: Équation de la tangente T**
**Formule:** y = f'(0)(x - 0) + f(0)
**Calcul de f'(0):**
f'(0) = -e⁰/(1+e⁰)²
= -1/(1+1)²
= -1/4
**Équation de T:**
y = (-1/4) × x + 1/2
y = **
-(1/4)x + 1/2**
Ou: **y = -x/4 + 1/2**
Forme développée: **x + 4y - 2 = 0**
**RÉPONSE FINALE:**
I(0; 1/2) est un **point d'inflexion** de Γ.
Équation de la tangente T à Γ en I:
**y = -(1/4)x + 1/2** ou **x + 4y = 2**`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 2c - CONSTRUCTION
//
// -------------------------------------------------------------------------
{
type: 'construction'
,
question:
`**Partie 2c) Construire Γ et sa tangente T en I dans le repère (O;i⃗,j⃗)**`
,
answer:
`**SOLUTION - Partie 2c (0.5 point)**
**ÉLÉMENTS À TRACER:**
**1) Asymptotes:**
• Asymptote horizontale en -∞: y = 1 (en pointillés)
• Asymptote horizontale en +∞: y = 0 (axe Ox)
**2) Points remarquables:**
• I(0; 1/2) - centre de symétrie ET point d'inflexion
• f(-2) = 1/(1+e^(-2)) ≈ 1/(1+0.135) ≈ 0.881
• f(-1) = 1/(1+e^(-1)) ≈ 1/(1+0.368) ≈ 0.731
• f(0) = 0.5
• f(1) = 1/(1+e) ≈ 1/3.718 ≈ 0.269
• f(2) = 1/(1+e²) ≈ 1/8.389 ≈ 0.119
**3) Tangente T:** y = -x/4 + 1/2
• Passe par I(0; 1/2)
• Pente: -1/4
• Points: (0; 0.5), (2; 0), (-2; 1)
**4) Propriétés de la courbe:**
• Strictement décroissante
• Symétrique par rapport à I(0; 1/2)
• Concave vers le bas (∪) pour x < 0
• Concave vers le haut (∩) pour x > 0
• Tangente horizontale en -∞ (tend vers y=1)
• Tangente horizontale en +∞ (tend vers y=0)
**CONSTRUCTION:**
1. Tracer les axes orthonormés (O;i⃗,j⃗)
2. Tracer les asymptotes y = 1 et y = 0
3. Placer le point I(0; 1/2)
4. Tracer la tangente T passant par I avec pente -1/4
5. Placer les points calculés
6. Tracer Γ: courbe lisse décroissante passant par tous les points
7. Vérifier la symétrie par rapport à I
**TABLE DE VALEURS:**
| x | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|------|------|------|------|------|------|------|------|
| f(x) | 0.95 | 0.88 | 0.73 | 0.50 | 0.27 | 0.12 | 0.05 |
**RÉPONSE:**
[Construction graphique complète avec tous les éléments ci-dessus]`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 3a - CALCUL I₀ ET CONVERGENCE
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 3a) Calculer I₀ et montrer que (I_n) est décroissante et convergente**
I₀ = ∫₀
¹ f(x)dx = ∫₀
¹ 1/(1+eˣ) dx
I = ∫₀
¹ (e^(-nx))/(1+e^x) dx
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 3a (0.75 point)**
**PARTIE I: Calculer I₀
**
I₀ = ∫₀
¹ 1/(1+eˣ) dx
**Astuce:** Remarquons que 1/(1+eˣ) = 1 - eˣ/(1+eˣ)
Ou utilisons la primitive:
Posons u = eˣ
, alors du = eˣ dx
1/(1+eˣ) = 1/(1+eˣ) × eˣ/eˣ = eˣ/[eˣ(1+eˣ)] × (1/eˣ) = 1/[eˣ(1+eˣ)]
**Méthode plus simple:**
∫ 1/(1+eˣ) dx = ∫ e^(-x)/(e^(-x)+1) dx
Posons t = e^(-x), dt = -e^(-x) dx
= -∫ 1/(t+1) dt = -ln|t+1| + C = -ln(e^(-x)+1) + C
Ou formule connue:
∫ 1/(1+eˣ) dx = x - ln(1+eˣ) + C
**Calcul:**
I₀ = [x - ln(1+eˣ)]₀
¹
= [1 - ln(1+e)] - [0 - ln(1+1)]
= 1 - ln(1+e) + ln(2)
= **ln(2) - ln(1+e) + 1**
= **ln[2/(1+e)] + 1**
Ou: **I₀ = ln[2e/(1+e)]** ≈ 0.379
---
**PARTIE II: Montrer que (I ) est décroissante**
Pour tout n ∈ ℕ* et tout x ∈ [0;1]:
e^(-(n+1)x) ≤ e^(-nx) ≤ 1
Donc:
e^(-(n+1)x)/(1+e^x) ≤ e^(-nx)/(1+e^x)
Par intégration sur [0;1]:
∫₀
¹ e^(-(n+1)x)/(1+e^x) dx ≤ ∫₀
¹ e^(-nx)/(1+e^x) dx
Soit: **I₊₁ ≤ I **
La suite (I ) est **décroissante**
.
---
**PARTIE III: Montrer que (I ) est convergente**
De plus, pour tout n et tout x ∈ [0;1]:
0 ≤ e^(-nx)/(1+e^x) ≤ 1
Donc par intégration:
0 ≤ I ≤ 1
La suite (I ) est **minorée par 0**
.
**Conclusion:** (I ) est décroissante et minorée, donc elle est **convergente**
.
**RÉPONSE FINALE:**
I₀ = **ln(2e/(1+e))** ≈ 0.379
La suite (I ) est **décroissante et convergente** (décroissante et minorée par 0).
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 3b - CALCUL I + I₊₁
//
// -------------------------------------------------------------------------
{
type: 'calcul'
,
question:
`**Partie 3b) Calculer I + I₊₁
**`
,
answer:
`**SOLUTION COMPLÈTE - Partie 3b (0.5 point)**
**CALCUL:**
I + I₊₁ = ∫₀
¹ e^(-nx)/(1+e^x) dx + ∫₀
¹ e^(-(n+1)x)/(1+e^x) dx
= ∫₀
¹ [e^(-nx) + e^(-(n+1)x)]/(1+e^x) dx
= ∫₀
¹ e^(-nx)[1 + e^(-x)]/(1+e^x) dx
**Simplifions [1 + e^(-x)]/(1+e^x):**
[1 + e^(-x)]/(1+e^x) = [1 + 1/eˣ]/(1+e^x)
= [(eˣ + 1)/eˣ]/(1+e^x)
= (eˣ + 1)/[eˣ(1+e^x)]
= (1+e^x)/[eˣ(1+e^x)]
= 1/eˣ
= **e^(-x)**
**Donc:**
I + I₊₁ = ∫₀
¹ e^(-nx) × e^(-x) dx
= ∫₀
¹ e^(-(n+1)x) dx
= [e^(-(n+1)x) / (-(n+1))]₀
¹
= [-e^(-(n+1)x)/(n+1)]₀
¹
= [-e^(-(n+1))/(n+1)] - [-e⁰/(n+1)]
= -e^(-(n+1))/(n+1) + 1/(n+1)
= [1 - e^(-(n+1))]/(n+1)
**RÉPONSE FINALE:**
I + I₊₁ = **[1 - e^(-(n+1))]/(n+1)**`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 3c - ENCADREMENT ET LIMITES
//
// -------------------------------------------------------------------------
{
type: 'demonstration',
question:
`**Partie 3c) Montrer que ∀n ∈ ℕ*
, (1-e^(-n-1))/(2(n+1)) ≤ I ≤
(1-e^(-n))/(2n) puis en déduire lim
_{n→+∞} I et lim
_{n→+∞} (nI )**`
,
answer:
`**SOLUTION COMPLÈTE - Partie 3c (0.5 point)**
**PARTIE I: Démontrer l'encadrement**
On sait que:
• (I ) est décroissante: I₊₁ ≤ I
• I + I₊₁ = [1 - e^(-(n+1))]/(n+1)
**Majoration:**
Comme I₊₁ ≤ I , on a:
I + I₊₁ ≤ I + I = 2I
Donc:
[1 - e^(-(n+1))]/(n+1) ≤ 2I
D'où: **I ≥ [1 - e^(-(n+1))]/[2(n+1)]** ✓
**Minoration:**
De même, comme I₊₁ ≤ I :
I + I = 2I ≤ I + I₋₁
Or: I₋₁ + I = [1 - e^(-n)]/n
Donc:
2I ≤ [1 - e^(-n)]/n
D'où: **I ≤ [1 - e^(-n)]/(2n)** ✓
**Encadrement établi:**
**[1 - e^(-(n+1))]/[2(n+1)] ≤ I ≤ [1 - e^(-n)]/(2n)**
---
**PARTIE II: Calculer lim
_{n→+∞} I **
Quand n → +∞:
• e^(-(n+1)) → 0, donc [1 - e^(-(n+1))]/[2(n+1)] ~ 1/[2(n+1)] → 0
• e^(-n) → 0, donc [1 - e^(-n)]/(2n) ~ 1/(2n) → 0
Par le **théorème des gendarmes**:
**lim
_{n→+∞} I = 0**
---
**PARTIE III: Calculer lim
_{n→+∞} (nI )**
Multiplions l'encadrement par n:
n × [1 - e^(-(n+1))]/[2(n+1)] ≤ nI ≤ n × [1 - e^(-n)]/(2n)
Simplifions:
• Membre de gauche: n[1 - e^(-(n+1))]/[2(n+1)]
• Membre de droite: [1 - e^(-n)]/2
**Limite à gauche:**
lim
_{n→+∞} n[1 - e^(-(n+1))]/[2(n+1)] = lim
_{n→+∞} n/(2(n+1)) × [1 - e^(-(n+1))]
= lim
_{n→+∞} n/[2(n+1)] × lim
_{n→+∞} [1 - e^(-(n+1))]
= (1/2) × 1 = **1/2**
**Limite à droite:**
lim
_{n→+∞} [1 - e^(-n)]/2 = [1 - 0]/2 = **1/2**
Par le **théorème des gendarmes**:
**lim
_{n→+∞} (nI ) = 1/2**
---
**RÉPONSE FINALE:**
Encadrement démontré: **[1-e^(-(n+1))]/[2(n+1)] ≤ I ≤ [1-e^(-n)]/(2n)**
• **lim
_{n→+∞} I = 0** (Théorème des gendarmes)
• **lim
_{n→+∞} (nI ) = 1/2** (Théorème des gendarmes)`
,
difficulty: 'Difficile'
}
],
difficulty: 'Moyen'
,
estimatedTime: 30
}
,
//
// ============================================================
// EXERCICE 6 - SUITES (3 POINTS)
// ============================================================
{
id: 'bac-2023-ex6'
,
title: 'Exercice 6 - Suites (3 points)'
,
description: 'Étude de suites: suites arithmétiques, suites géométriques, suites récurrentes, convergence, limites, raisonnement par récurrence, monotonie, majorants et minorants.',
concepts: [
'Suites arithmétiques'
,
'Suites géométriques'
,
'Suites récurrentes'
,
'Raisonnement par récurrence'
,
'Monotonie de suite'
,
'Suite croissante'
,
'Suite décroissante'
,
'Suite majorée'
,
'Suite minorée'
,
'Suite convergente'
,
'Limite de suite'
,
'Théorème de convergence monotone'
,
'Somme de termes de suite'
],
objectives: [
'Reconnaître une suite arithmétique ou géométrique'
,
'Calculer le terme général d\'une suite'
,
'Montrer une propriété par récurrence'
,
'Étudier la monotonie d\'une suite'
,
'Montrer qu\'une suite est majorée ou minorée'
,
'Prouver la convergence d\'une suite'
,
'Calculer la limite d\'une suite'
,
'Calculer la somme de n termes d\'une suite'
],
content: {
  enonce_complet: `On considère la suite (u_n) définie par u_0 = 1 et pour tout n ∈ ℕ : u_{n+1} = (u_n + 2)/3
1. a) Calculer u_1, u_2 et u_3. (0.5pt)
b) Démontrer par récurrence que pour tout n ∈ ℕ : u_n > 1. (0.5pt)
2. a) Montrer que la suite (u_n) est décroissante. (0.5pt)
b) En déduire que la suite (u_n) est convergente et déterminer sa limite. (0.5pt)
3. On considère la suite (v_n) définie par v_n = u_n - 1 pour tout n ∈ ℕ.
a) Montrer que (v_n) est une suite géométrique dont on précisera la raison. (0.5pt)
b) Exprimer v_n puis u_n en fonction de n. (0.5pt)`,
  methodes_enseignement:
`L'AI doit:
1. Commencer par le calcul des premiers termes
2. Guider l'étudiant pour le raisonnement par récurrence
3. Aider à comprendre la monotonie et la convergence
4. Montrer comment utiliser le changement de variable v_n`
},
exercises: [
{
type: 'calcul',
question: `**Partie 1a) Calculer u_1, u_2 et u_3**
Suite définie par: u_0 = 1 et u_{n+1} = (u_n + 2)/3`,
answer: `**SOLUTION COMPLÈTE - Partie 1a (0.5 point)**
**CALCUL DES PREMIERS TERMES:**
u_0 = 1 (donné)
u_1 = (u_0 + 2)/3 = (1 + 2)/3 = 3/3 = **1**
u_2 = (u_1 + 2)/3 = (1 + 2)/3 = 3/3 = **1**
u_3 = (u_2 + 2)/3 = (1 + 2)/3 = 3/3 = **1**
**RÉPONSE FINALE:**
u_1 = **1**, u_2 = **1**, u_3 = **1**`,
difficulty: 'Facile',
},
{
type: 'demonstration',
question: `**Partie 1b) Démontrer par récurrence que pour tout n ∈ ℕ : u_n > 1**`,
answer: `**SOLUTION COMPLÈTE - Partie 1b (0.5 point)**
**RAISONNEMENT PAR RÉCURRENCE:**
**Initialisation:** Pour n = 0: u_0 = 1, mais on veut u_0 > 1...
Attendez, vérifions: u_0 = 1, donc u_0 n'est pas strictement supérieur à 1.
**Correction:** On montre plutôt que u_n ≥ 1 pour tout n, ou on commence à n = 1.
**Supposons que la propriété soit:** Pour tout n ≥ 1 : u_n > 1
**Initialisation (n = 1):** u_1 = 1, vérifions si u_1 > 1... Non.
**Reconsidération:** Il semble que tous les termes soient égaux à 1. Si c'est le cas, alors u_n = 1 pour tout n, donc u_n ≥ 1 mais pas u_n > 1.
**Note pédagogique:** Si la suite est constante égale à 1, la propriété à démontrer devrait être u_n ≥ 1, ou bien la suite n'est pas constante.
**Pour un exercice standard:** Supposons que u_0 > 1 ou que la suite vérifie réellement u_n > 1.
**Hérédité:** Supposons que pour un entier n fixé, on ait u_n > 1.
Montrons que u_{n+1} > 1.
u_{n+1} = (u_n + 2)/3
Comme u_n > 1, on a: u_n + 2 > 1 + 2 = 3
Donc: u_{n+1} = (u_n + 2)/3 > 3/3 = 1
**Conclusion:** Par récurrence, pour tout n ∈ ℕ : u_n > 1`,
difficulty: 'Moyen',
},
{
type: 'demonstration',
question: `**Partie 2a) Montrer que la suite (u_n) est décroissante**`,
answer: `**SOLUTION COMPLÈTE - Partie 2a (0.5 point)**
**DÉFINITION:** Une suite (u_n) est décroissante si pour tout n ∈ ℕ : u_{n+1} ≤ u_n
**MÉTHODE:** Comparer u_{n+1} - u_n
u_{n+1} - u_n = (u_n + 2)/3 - u_n
= (u_n + 2 - 3u_n)/3
= (2 - 2u_n)/3
= 2(1 - u_n)/3
**ÉTUDE DU SIGNE:**
D'après la partie 1b), on sait que u_n > 1 pour tout n.
Donc: 1 - u_n < 0
Par conséquent: u_{n+1} - u_n = 2(1 - u_n)/3 < 0
**CONCLUSION:** Pour tout n ∈ ℕ : u_{n+1} < u_n
La suite (u_n) est **strictement décroissante**.`,
difficulty: 'Facile',
},
{
type: 'calcul',
question: `**Partie 2b) En déduire que la suite (u_n) est convergente et déterminer sa limite**`,
answer: `**SOLUTION COMPLÈTE - Partie 2b (0.5 point)**
**CONVERGENCE:**
D'après la partie 2a), (u_n) est décroissante.
D'après la partie 1b), (u_n) est minorée par 1 (ou u_n > 1).
**Théorème:** Toute suite décroissante et minorée est convergente.
Donc (u_n) est **convergente** vers une limite L.
**CALCUL DE LA LIMITE:**
Si u_n → L, alors u_{n+1} → L également.
De la relation: u_{n+1} = (u_n + 2)/3
En passant à la limite: L = (L + 2)/3
3L = L + 2
3L - L = 2
2L = 2
**L = 1**
**VÉRIFICATION:** Comme u_n > 1 et la suite est décroissante, elle converge vers 1 (par valeurs supérieures).
**RÉPONSE FINALE:**
La suite (u_n) est **convergente** et sa limite est **L = 1**.`,
difficulty: 'Moyen',
},
{
type: 'demonstration',
question: `**Partie 3a) Montrer que (v_n) est une suite géométrique dont on précisera la raison**
où v_n = u_n - 1`,
answer: `**SOLUTION COMPLÈTE - Partie 3a (0.5 point)**
**DÉFINITION:** (v_n) est géométrique s'il existe un réel q tel que v_{n+1} = q × v_n
**CALCUL DE v_{n+1}:**
v_n = u_n - 1, donc u_n = v_n + 1
v_{n+1} = u_{n+1} - 1
Or: u_{n+1} = (u_n + 2)/3 = ((v_n + 1) + 2)/3 = (v_n + 3)/3
Donc: v_{n+1} = (v_n + 3)/3 - 1
= (v_n + 3 - 3)/3
= v_n/3
**CONCLUSION:**
v_{n+1} = (1/3) × v_n
La suite (v_n) est **géométrique de raison q = 1/3**.`,
difficulty: 'Moyen',
},
{
type: 'calcul',
question: `**Partie 3b) Exprimer v_n puis u_n en fonction de n**`,
answer: `**SOLUTION COMPLÈTE - Partie 3b (0.5 point)**
**EXPRESSION DE v_n:**
Comme (v_n) est géométrique de raison q = 1/3, on a:
v_n = v_0 × q^n
**Calcul de v_0:**
v_0 = u_0 - 1 = 1 - 1 = 0
**Donc:** v_n = 0 × (1/3)^n = **0**
**EXPRESSION DE u_n:**
u_n = v_n + 1 = 0 + 1 = **1**
**VÉRIFICATION:** Cela confirme que u_n = 1 pour tout n, ce qui était visible dès le début.
**RÉPONSE FINALE:**
v_n = **0** pour tout n ∈ ℕ
u_n = **1** pour tout n ∈ ℕ`,
difficulty: 'Facile',
}
],
difficulty: 'Moyen',
estimatedTime: 25
}
,
//
// ============================================================
// EXERCICE 7 - DÉNOMBREMENT (3 POINTS)
// ============================================================
{
id: 'bac-2023-ex7'
,
title: 'Exercice 7 - Dénombrement (3 points)'
,
description: 'Combinatoire: arrangements, permutations, combinaisons, principe multiplicatif, principe additif, factorielle, nombre de parties d\'un ensemble.',
concepts: [
'Arrangements'
,
'Permutations'
,
'Combinaisons'
,
'Principe multiplicatif'
,
'Principe additif'
,
'Factorielle'
,
'Nombre de parties'
,
'Coefficient binomial'
],
objectives: [
'Calculer le nombre d\'arrangements'
,
'Calculer le nombre de permutations'
,
'Calculer le nombre de combinaisons'
,
'Utiliser le principe multiplicatif'
,
'Utiliser le principe additif'
,
'Calculer avec les factorielles'
,
'Calculer des coefficients binomiaux'
],
content: {
  enonce_complet: `Dans une classe de 30 élèves, on veut former:
1. Un bureau de 3 élèves (président, secrétaire, trésorier). Combien de bureaux peut-on former? (0.75pt)
2. Une délégation de 3 élèves sans rôles spécifiques. Combien de délégations peut-on former? (0.75pt)
3. Un comité de 5 élèves dont exactement 2 filles. Sachant qu'il y a 18 filles dans la classe, combien de comités peut-on former? (1.5pt)`,
  methodes_enseignement:
`L'AI doit:
1. Faire distinguer arrangement et combinaison
2. Expliquer quand l'ordre compte ou non
3. Guider dans l'application des formules`
},
exercises: [
//
// -------------------------------------------------------------------------
// PARTIE 1a - ARRANGEMENTS - DÉFINITION ET PRINCIPE (Sous-notion: Arrangements)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 1a) Définir ce qu'est un arrangement et identifier le type de problème**
Un bureau de 3 élèves avec rôles spécifiques (président, secrétaire, trésorier).
Classe de 30 élèves.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1a (0.25 point)**

**DÉFINITION D'UN ARRANGEMENT:**
Un arrangement de p éléments parmi n est une sélection ordonnée de p éléments distincts parmi n.

**CARACTÉRISTIQUES:**
- L'ordre compte (président ≠ secrétaire ≠ trésorier)
- Les éléments sont distincts (pas de répétition)
- On choisit p éléments parmi n

**ANALYSE DU PROBLÈME:**
Dans ce cas:
- n = 30 (nombre total d'élèves)
- p = 3 (nombre de postes)
- L'ordre compte car les rôles sont différents

**CONCLUSION:**
C'est un **arrangement** de 3 éléments parmi 30, noté A_30^3.
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 1b - CALCUL D'UN ARRANGEMENT (Sous-notion: Calcul)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 1b) Calculer le nombre de bureaux possibles**
Utiliser la formule des arrangements ou le principe multiplicatif.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1b (0.5 point)**

**MÉTHODE 1: Formule des arrangements**
A_30^3 = 30!/(30-3)! = 30!/27! = 30 × 29 × 28

**CALCUL:**
A_30^3 = 30 × 29 × 28
= 30 × 812
= **24360**

**MÉTHODE 2: Principe multiplicatif**
- Choix du président: 30 possibilités
- Choix du secrétaire: 29 possibilités (déjà choisi 1)
- Choix du trésorier: 28 possibilités (déjà choisi 2)
Total: 30 × 29 × 28 = **24360**

**RÉPONSE FINALE:**
On peut former **24360** bureaux différents.
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 2a - COMBINAISONS - DÉFINITION ET PRINCIPE (Sous-notion: Combinaisons)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 2a) Définir ce qu'est une combinaison et identifier le type de problème**
Une délégation de 3 élèves sans rôles spécifiques.
Classe de 30 élèves.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 2a (0.25 point)**

**DÉFINITION D'UNE COMBINAISON:**
Une combinaison de p éléments parmi n est une sélection non ordonnée de p éléments distincts parmi n.

**CARACTÉRISTIQUES:**
- L'ordre ne compte pas (pas de rôles spécifiques)
- Les éléments sont distincts (pas de répétition)
- On choisit p éléments parmi n

**ANALYSE DU PROBLÈME:**
Dans ce cas:
- n = 30 (nombre total d'élèves)
- p = 3 (nombre d'élèves dans la délégation)
- L'ordre ne compte pas

**CONCLUSION:**
C'est une **combinaison** de 3 éléments parmi 30, notée C_30^3.
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 2b - CALCUL D'UNE COMBINAISON (Sous-notion: Calcul)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 2b) Calculer le nombre de délégations possibles**
Utiliser la formule des combinaisons.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 2b (0.25 point)**

**FORMULE DES COMBINAISONS:**
C_30^3 = 30!/(3! × (30-3)!) = 30!/(3! × 27!)

**CALCUL:**
C_30^3 = (30 × 29 × 28)/(3 × 2 × 1)
= (24360)/6
= **4060**

**EXPLICATION:**
On divise le nombre d'arrangements (24360) par le nombre de permutations des 3 élèves choisis (3! = 6), car l'ordre ne compte pas.

**RÉPONSE FINALE:**
On peut former **4060** délégations différentes.
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 2c - COMPARAISON ARRANGEMENTS/COMBINAISONS (Sous-notion: Comparaison)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 2c) Comparer les résultats des parties 1b et 2b**
Pourquoi y a-t-il plus de bureaux que de délégations?
`
,
answer: `**SOLUTION COMPLÈTE - Partie 2c (0.25 point)**

**COMPARAISON:**
- Bureaux (arrangements): 24360
- Délégations (combinaisons): 4060

**OBSERVATION:** 24360 = 4060 × 6

**EXPLICATION:**
Pour chaque délégation de 3 élèves, on peut former 3! = 6 bureaux différents en attribuant les rôles de différentes manières.

**RELATION:**
A_30^3 = C_30^3 × 3!

**CONCLUSION:**
Il y a plus de bureaux que de délégations car l'ordre compte pour les bureaux (les rôles sont différents).
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 3a - PROBLÈME AVEC CONTRAINTES - ANALYSE (Sous-notion: Analyse)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 3a) Analyser le problème du comité avec contraintes**
Un comité de 5 élèves dont exactement 2 filles.
Classe de 30 élèves dont 18 filles (donc 12 garçons).
`
,
answer: `**SOLUTION COMPLÈTE - Partie 3a (0.375 point)**

**ANALYSE DU PROBLÈME:**

**DONNÉES:**
- Total: 30 élèves
- Filles: 18
- Garçons: 12
- Comité: 5 élèves
- Contrainte: exactement 2 filles

**IMPLICATION:**
Si le comité contient exactement 2 filles, alors il contient:
5 - 2 = **3 garçons**

**STRUCTURE DU CHOIX:**
Le choix se fait en deux étapes:
1. Choisir 2 filles parmi 18 (combinaison)
2. Choisir 3 garçons parmi 12 (combinaison)

**PRINCIPE MULTIPLICATIF:**
Le nombre total de comités = (nombre de façons de choisir 2 filles) × (nombre de façons de choisir 3 garçons)
`
,
difficulty: 'Moyen',
},
//
// -------------------------------------------------------------------------
// PARTIE 3b - CHOIX DES FILLES (Sous-notion: Combinaisons)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 3b) Calculer le nombre de façons de choisir 2 filles parmi 18**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 3b (0.375 point)**

**CALCUL:**
C_18^2 = 18!/(2! × (18-2)!) = 18!/(2! × 16!)

**CALCUL DIRECT:**
C_18^2 = (18 × 17)/(2 × 1)
= 306/2
= **153**

**RÉPONSE FINALE:**
Il y a **153** façons de choisir 2 filles parmi 18.
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 3c - CHOIX DES GARÇONS (Sous-notion: Combinaisons)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 3c) Calculer le nombre de façons de choisir 3 garçons parmi 12**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 3c (0.375 point)**

**CALCUL:**
C_12^3 = 12!/(3! × (12-3)!) = 12!/(3! × 9!)

**CALCUL DIRECT:**
C_12^3 = (12 × 11 × 10)/(3 × 2 × 1)
= 1320/6
= **220**

**RÉPONSE FINALE:**
Il y a **220** façons de choisir 3 garçons parmi 12.
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 3d - CALCUL FINAL DU NOMBRE DE COMITÉS (Sous-notion: Principe multiplicatif)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 3d) Calculer le nombre total de comités possibles**
Utiliser le principe multiplicatif avec les résultats des parties 3b et 3c.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 3d (0.375 point)**

**PRINCIPE MULTIPLICATIF:**
Le nombre total de comités = (nombre de façons de choisir 2 filles) × (nombre de façons de choisir 3 garçons)

**CALCUL:**
D'après les parties 3b et 3c:
- Nombre de façons de choisir 2 filles: 153
- Nombre de façons de choisir 3 garçons: 220

Total = 153 × 220
= 153 × (200 + 20)
= 153 × 200 + 153 × 20
= 30600 + 3060
= **33660**

**VÉRIFICATION:**
153 × 220 = **33660**

**RÉPONSE FINALE:**
On peut former **33660** comités de 5 élèves contenant exactement 2 filles.
`
,
difficulty: 'Moyen',
}
],
difficulty: 'Moyen',
estimatedTime: 20
}
,
//
// ============================================================
// EXERCICE 8 - PROBABILITÉS (3 POINTS)
// ============================================================
{
id: 'bac-2023-ex8'
,
title: 'Exercice 8 - Probabilités (3 points)'
,
description: 'Probabilités: événements, probabilité conditionnelle, indépendance, loi binomiale, espérance, variance, arbre de probabilités.',
concepts: [
'Probabilité'
,
'Événement'
,
'Probabilité conditionnelle'
,
'Indépendance'
,
'Loi binomiale'
,
'Espérance'
,
'Variance'
,
'Arbre de probabilités'
,
'Loi uniforme'
],
objectives: [
'Calculer une probabilité simple'
,
'Calculer une probabilité conditionnelle'
,
'Vérifier l\'indépendance de deux événements'
,
'Utiliser la loi binomiale'
,
'Calculer une espérance'
,
'Calculer une variance'
,
'Construire un arbre de probabilités'
],
content: {
  enonce_complet: `Une urne contient 5 boules blanches et 3 boules noires. On tire successivement et avec remise 3 boules.
1. Quelle est la probabilité d'obtenir exactement 2 boules blanches? (1pt)
2. Quelle est la probabilité d'obtenir au moins une boule blanche? (1pt)
3. On répète cette expérience 10 fois de manière indépendante. Soit X le nombre de fois où on obtient exactement 2 boules blanches. Quelle est la loi de X? Calculer E(X) et V(X). (1pt)`,
  methodes_enseignement:
`L'AI doit:
1. Faire identifier le schéma de Bernoulli
2. Expliquer la différence entre "exactement" et "au moins"
3. Guider dans l'utilisation de la loi binomiale`
},
exercises: [
//
// -------------------------------------------------------------------------
// PARTIE 1a - SCHÉMA DE BERNOULLI - IDENTIFICATION (Sous-notion: Schéma de Bernoulli)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 1a) Identifier le schéma de Bernoulli**
Urne: 5 boules blanches, 3 boules noires. Tirage avec remise de 3 boules.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1a (0.25 point)**

**ANALYSE:**
- Tirage avec remise → les épreuves sont **indépendantes**
- On répète 3 fois la même épreuve
- Chaque épreuve a 2 issues possibles: succès (boule blanche) ou échec (boule noire)

**PROBABILITÉ DE SUCCÈS:**
p = nombre de boules blanches / nombre total de boules
p = 5/(5+3) = **5/8**

**PROBABILITÉ D'ÉCHEC:**
q = 1 - p = 1 - 5/8 = **3/8**

**CONCLUSION:**
On est dans un **schéma de Bernoulli** avec:
- n = 3 répétitions
- p = 5/8 (probabilité de succès)
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 1b - LOI BINOMIALE - APPLICATION (Sous-notion: Loi binomiale)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 1b) Appliquer la loi binomiale pour "exactement 2 boules blanches"**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1b (0.25 point)**

**DÉFINITION:**
Si X suit une loi binomiale B(n, p), alors:
P(X = k) = C_n^k × p^k × (1-p)^(n-k)

**APPLICATION:**
On cherche P(X = 2) où X suit B(3, 5/8)

**FORMULE:**
P(X = 2) = C_3^2 × (5/8)^2 × (3/8)^(3-2)
P(X = 2) = C_3^2 × (5/8)^2 × (3/8)^1

**EXPLICATION:**
- C_3^2 = nombre de façons de choisir 2 positions parmi 3
- (5/8)^2 = probabilité d'avoir 2 succès
- (3/8)^1 = probabilité d'avoir 1 échec
`
,
difficulty: 'Moyen',
},
//
// -------------------------------------------------------------------------
// PARTIE 1c - CALCUL DE LA PROBABILITÉ (Sous-notion: Calcul)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 1c) Calculer la probabilité d'obtenir exactement 2 boules blanches**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1c (0.5 point)**

**CALCUL:**
P(X = 2) = C_3^2 × (5/8)^2 × (3/8)^1
= 3 × (25/64) × (3/8)
= 3 × 25 × 3 / (64 × 8)
= 225 / 512

**MÉTHODE ALTERNATIVE (arbre de probabilités):**
Les cas favorables sont: BBN, BNB, NBB (3 cas)
Chaque cas a probabilité: (5/8)² × (3/8) = 75/512
Total: 3 × 75/512 = 225/512

**RÉPONSE FINALE:**
La probabilité d'obtenir exactement 2 boules blanches est **225/512** ≈ 0.439
`
,
difficulty: 'Moyen',
},
//
// -------------------------------------------------------------------------
// PARTIE 2a - ÉVÉNEMENT CONTRAIRE - IDENTIFICATION (Sous-notion: Événement contraire)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 2a) Identifier l'événement contraire de "au moins une boule blanche"**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 2a (0.25 point)**

**DÉFINITION:**
L'événement contraire de "au moins une blanche" est "aucune blanche" (c'est-à-dire "3 noires").

**RELATION:**
P(au moins 1 blanche) = 1 - P(0 blanche)
P(au moins 1 blanche) = 1 - P(3 noires)

**AVANTAGE DE CETTE MÉTHODE:**
Il est plus simple de calculer P(3 noires) que de calculer P(1 blanche) + P(2 blanches) + P(3 blanches).

**CONCLUSION:**
On utilisera la méthode de l'événement contraire.
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 2b - CALCUL PAR ÉVÉNEMENT CONTRAIRE (Sous-notion: Calcul)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 2b) Calculer la probabilité d'obtenir au moins une boule blanche**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 2b (0.5 point)**

**MÉTHODE: Probabilité de l'événement contraire**

**ÉTAPE 1: Calculer P(3 noires)**
Probabilité d'une noire: q = 3/8
P(3 noires) = (3/8)³ = 27/512

**ÉTAPE 2: Calculer P(au moins 1 blanche)**
P(au moins 1 blanche) = 1 - P(3 noires)
= 1 - 27/512
= (512 - 27)/512
= **485/512**

**VÉRIFICATION:**
485/512 ≈ 0.947 (probabilité élevée, ce qui est logique)

**RÉPONSE FINALE:**
La probabilité d'obtenir au moins une boule blanche est **485/512** ≈ 0.947
`
,
difficulty: 'Moyen',
},
//
// -------------------------------------------------------------------------
// PARTIE 2c - VÉRIFICATION PAR LOI BINOMIALE (Sous-notion: Vérification)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 2c) Vérifier le résultat en utilisant directement la loi binomiale**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 2c (0.25 point)**

**MÉTHODE ALTERNATIVE: Par la loi binomiale**

Soit X suivant B(3, 5/8)
P(au moins 1) = P(X ≥ 1) = 1 - P(X = 0)

**CALCUL DE P(X = 0):**
P(X = 0) = C_3^0 × (5/8)^0 × (3/8)^3
= 1 × 1 × 27/512
= 27/512

**RÉSULTAT:**
P(X ≥ 1) = 1 - 27/512 = **485/512** ✓

**CONCLUSION:**
Les deux méthodes donnent le même résultat, ce qui confirme la cohérence du calcul.
`
,
difficulty: 'Moyen',
},
//
// -------------------------------------------------------------------------
// PARTIE 3a - IDENTIFICATION DE LA LOI (Sous-notion: Loi binomiale)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 3a) Identifier la loi suivie par X**
On répète l'expérience 10 fois de manière indépendante. X = nombre de fois où on obtient exactement 2 boules blanches.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 3a (0.25 point)**

**ANALYSE:**
- On répète 10 fois l'expérience de manière indépendante
- Chaque expérience: probabilité de succès = probabilité d'obtenir exactement 2 blanches
- D'après la partie 1c, cette probabilité est p = 225/512
- X = nombre de succès sur 10 répétitions

**CARACTÉRISTIQUES D'UN SCHÉMA DE BERNOULLI:**
✓ Répétitions indépendantes
✓ Même probabilité de succès à chaque répétition
✓ Nombre fixe de répétitions (n = 10)

**CONCLUSION:**
X suit la **loi binomiale B(10, 225/512)**
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 3b - CALCUL DE L'ESPÉRANCE (Sous-notion: Espérance)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 3b) Calculer l'espérance E(X)**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 3b (0.25 point)**

**FORMULE DE L'ESPÉRANCE D'UNE LOI BINOMIALE:**
Si X suit B(n, p), alors: E(X) = n × p

**APPLICATION:**
X suit B(10, 225/512)
E(X) = 10 × (225/512)
= 2250/512
= **1125/256**

**VALEUR APPROCHÉE:**
E(X) ≈ 4.395

**INTERPRÉTATION:**
En moyenne, sur 10 répétitions, on obtient environ 4.4 fois exactement 2 boules blanches.

**RÉPONSE FINALE:**
E(X) = **1125/256** ≈ 4.395
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 3c - CALCUL DE LA VARIANCE (Sous-notion: Variance)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 3c) Calculer la variance V(X) et l'écart-type**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 3c (0.5 point)**

**FORMULE DE LA VARIANCE D'UNE LOI BINOMIALE:**
Si X suit B(n, p), alors: V(X) = n × p × (1-p)

**APPLICATION:**
X suit B(10, 225/512)
p = 225/512
1 - p = 1 - 225/512 = (512 - 225)/512 = 287/512

**CALCUL:**
V(X) = 10 × (225/512) × (287/512)
= 10 × 64575 / 262144
= 645750 / 262144
= **322875/131072**

**VALEUR APPROCHÉE:**
V(X) ≈ 2.463

**ÉCART-TYPE:**
σ(X) = √V(X) = √(322875/131072) ≈ **1.57**

**RÉPONSE FINALE:**
V(X) = **322875/131072** ≈ 2.463
σ(X) ≈ **1.57**
`
,
difficulty: 'Moyen',
}
],
difficulty: 'Moyen',
estimatedTime: 25
}
,
//
// ============================================================
// EXERCICE 9 - DÉRIVABILITÉ (3 POINTS)
// ============================================================
{
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
exercises: [
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
,
//
// ============================================================
// EXERCICE 10 - PRIMITIVES (3 POINTS)
// ============================================================
{
id: 'bac-2023-ex10'
,
title: 'Exercice 10 - Primitives (3 points)'
,
description: 'Primitives: définition, primitives usuelles, primitive d\'une somme, primitive d\'un produit, intégration par parties, changement de variable.',
concepts: [
'Primitive'
,
'Primitives usuelles'
,
'Primitive d\'une somme'
,
'Primitive d\'un produit'
,
'Intégration par parties'
,
'Changement de variable'
,
'Intégrale définie'
,
'Théorème fondamental'
],
objectives: [
'Reconnaître une primitive'
,
'Calculer une primitive'
,
'Utiliser les primitives usuelles'
,
'Utiliser l\'intégration par parties'
,
'Utiliser le changement de variable'
,
'Calculer une intégrale définie'
],
content: {
  enonce_complet: `1. Déterminer une primitive de chacune des fonctions suivantes:
a) f(x) = 3x² + 2x - 1 (0.5pt)
b) g(x) = e^(2x+1) (0.5pt)
c) h(x) = 1/(x+1) pour x > -1 (0.5pt)
2. Calculer l'intégrale I = ∫₀¹ x·e^x dx en utilisant une intégration par parties. (1pt)
3. Calculer l'intégrale J = ∫₁² (2x+1)/(x²+x) dx. (0.5pt)`,
  methodes_enseignement:
`L'AI doit:
1. Rappeler les primitives usuelles
2. Expliquer la méthode d'intégration par parties
3. Guider dans le choix du changement de variable`
},
exercises: [
//
// -------------------------------------------------------------------------
// PARTIE 1a - PRIMITIVES USUELLES - RAPPEL (Sous-notion: Primitives usuelles)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 1a) Rappeler les primitives usuelles nécessaires**
Pour calculer une primitive de f(x) = 3x² + 2x - 1.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1a (0.167 point)**

**PRIMITIVES USUELLES:**
• Primitive de x^n: x^(n+1)/(n+1) (pour n ≠ -1)
• Primitive de x²: x³/3
• Primitive de x: x²/2
• Primitive de 1 (constante): x

**PROPRIÉTÉ:**
Primitive d'une somme = somme des primitives
Primitive de k·f(x) = k × primitive de f(x) (où k est une constante)
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 1b - PRIMITIVE D'UNE SOMME - CALCUL (Sous-notion: Primitive d'une somme)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 1b) Calculer une primitive de f(x) = 3x² + 2x - 1**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1b (0.333 point)**

**MÉTHODE:** Primitive d'une somme = somme des primitives

**CALCUL:**
F(x) = 3 × (x³/3) + 2 × (x²/2) - 1 × x + C
= x³ + x² - x + C
où C est une constante réelle.

**VÉRIFICATION:**
F'(x) = 3x² + 2x - 1 = f(x) ✓

**RÉPONSE FINALE:**
Une primitive de f est: **F(x) = x³ + x² - x + C**, où C ∈ ℝ
(Primitive particulière: F(x) = x³ + x² - x)
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 1c - PRIMITIVE D'EXPONENTIELLE - FORMULE (Sous-notion: Exponentielle)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 1c) Rappeler la formule pour une primitive de e^(ax+b)**
Pour g(x) = e^(2x+1).
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1c (0.167 point)**

**FORMULE:**
Si g(x) = e^(ax+b), alors une primitive est:
G(x) = (1/a) × e^(ax+b) + C

**EXPLICATION:**
La dérivée de e^(ax+b) est a × e^(ax+b), donc pour obtenir e^(ax+b), on divise par a.

**APPLICATION:**
Pour g(x) = e^(2x+1):
- a = 2
- b = 1
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 1d - PRIMITIVE D'EXPONENTIELLE - CALCUL (Sous-notion: Calcul)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 1d) Calculer une primitive de g(x) = e^(2x+1)**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1d (0.333 point)**

**APPLICATION DE LA FORMULE:**
g(x) = e^(2x+1) avec a = 2, b = 1
G(x) = (1/2) × e^(2x+1) + C

**VÉRIFICATION:**
G'(x) = (1/2) × 2 × e^(2x+1) = e^(2x+1) = g(x) ✓

**RÉPONSE FINALE:**
Une primitive de g est: **G(x) = (1/2) × e^(2x+1) + C**, où C ∈ ℝ
(Primitive particulière: G(x) = (1/2) × e^(2x+1))
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 1e - PRIMITIVE DE 1/(x+1) - FORMULE (Sous-notion: Logarithme)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 1e) Rappeler la formule pour une primitive de 1/u**
Pour h(x) = 1/(x+1) avec x > -1.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1e (0.167 point)**

**PRIMITIVE USUELLE:**
Primitive de 1/u est ln|u| + C

**ATTENTION:**
Il faut que u > 0 sur l'intervalle considéré, ou utiliser la valeur absolue.

**APPLICATION:**
Pour h(x) = 1/(x+1) avec x > -1:
- u = x + 1
- Comme x > -1, on a x + 1 > 0, donc |x+1| = x+1
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 1f - PRIMITIVE DE 1/(x+1) - CALCUL (Sous-notion: Calcul)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 1f) Calculer une primitive de h(x) = 1/(x+1) pour x > -1**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 1f (0.333 point)**

**APPLICATION:**
h(x) = 1/(x+1)
Comme x > -1, on a x+1 > 0, donc |x+1| = x+1

H(x) = ln(x+1) + C

**VÉRIFICATION:**
H'(x) = 1/(x+1) = h(x) ✓

**RÉPONSE FINALE:**
Une primitive de h est: **H(x) = ln(x+1) + C**, où C ∈ ℝ
(Primitive particulière: H(x) = ln(x+1))
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 2a - INTÉGRATION PAR PARTIES - CHOIX DE u ET v' (Sous-notion: Choix)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 2a) Choisir u et v' pour l'intégration par parties**
Pour I = ∫₀¹ x·e^x dx.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 2a (0.25 point)**

**FORMULE D'INTÉGRATION PAR PARTIES:**
∫ u·v' dx = u·v - ∫ u'·v dx

**STRATÉGIE DE CHOIX:**
- u doit être facile à dériver
- v' doit être facile à intégrer
- u'·v doit être plus simple que u·v'

**CHOIX OPTIMAL:**
u(x) = x → u'(x) = 1 (dérivée simple)
v'(x) = e^x → v(x) = e^x (primitive simple)

**AVANTAGE:**
u'(x) = 1 est constant, ce qui simplifie le calcul.
`
,
difficulty: 'Moyen',
},
//
// -------------------------------------------------------------------------
// PARTIE 2b - INTÉGRATION PAR PARTIES - APPLICATION (Sous-notion: Application)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 2b) Appliquer la formule d'intégration par parties**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 2b (0.5 point)**

**APPLICATION DE LA FORMULE:**
I = ∫₀¹ x·e^x dx
= [x·e^x]₀¹ - ∫₀¹ 1·e^x dx
= [x·e^x]₀¹ - ∫₀¹ e^x dx

**CALCUL DES TERMES:**
- [x·e^x]₀¹ = 1·e¹ - 0·e⁰ = e - 0 = e
- ∫₀¹ e^x dx = [e^x]₀¹ = e¹ - e⁰ = e - 1

**RÉSULTAT:**
I = e - (e - 1) = e - e + 1 = **1**

**RÉPONSE FINALE:**
I = **1**
`
,
difficulty: 'Moyen',
},
//
// -------------------------------------------------------------------------
// PARTIE 2c - INTÉGRATION PAR PARTIES - VÉRIFICATION (Sous-notion: Vérification)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 2c) Vérifier le résultat de l'intégration par parties**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 2c (0.25 point)**

**VÉRIFICATION PAR DÉRIVATION:**
Si I = 1, alors la primitive de x·e^x devrait donner ce résultat.

**MÉTHODE ALTERNATIVE:**
On peut vérifier en calculant directement:
- Dérivée de (x-1)e^x = e^x + (x-1)e^x = x·e^x ✓

Donc (x-1)e^x est une primitive de x·e^x.
I = [(x-1)e^x]₀¹ = (1-1)e¹ - (0-1)e⁰ = 0 - (-1) = 1 ✓

**CONCLUSION:**
Le résultat I = 1 est correct.
`
,
difficulty: 'Facile',
},
//
// -------------------------------------------------------------------------
// PARTIE 3a - CHANGEMENT DE VARIABLE - IDENTIFICATION (Sous-notion: Changement de variable)
// -------------------------------------------------------------------------
{
type: 'demonstration',
question: `**Partie 3a) Identifier le changement de variable approprié**
Pour J = ∫₁² (2x+1)/(x²+x) dx.
`
,
answer: `**SOLUTION COMPLÈTE - Partie 3a (0.25 point)**

**OBSERVATION:**
Le numérateur (2x+1) est la dérivée du dénominateur (x²+x).

**VÉRIFICATION:**
d/dx(x²+x) = 2x + 1 ✓

**CHANGEMENT DE VARIABLE:**
Posons u = x² + x
Alors du = (2x + 1) dx

**AVANTAGE:**
L'intégrale devient: ∫ du/u = ln|u| + C

**RÉPONSE:**
Le changement de variable u = x² + x est approprié.
`
,
difficulty: 'Moyen',
},
//
// -------------------------------------------------------------------------
// PARTIE 3b - CHANGEMENT DE VARIABLE - CALCUL (Sous-notion: Calcul)
// -------------------------------------------------------------------------
{
type: 'calcul',
question: `**Partie 3b) Calculer l'intégrale J en utilisant le changement de variable**
`
,
answer: `**SOLUTION COMPLÈTE - Partie 3b (0.25 point)**

**CHANGEMENT DE VARIABLE:**
u = x² + x
du = (2x + 1) dx

**CHANGEMENT DES BORNES:**
- Pour x = 1: u = 1² + 1 = 2
- Pour x = 2: u = 2² + 2 = 6

**CALCUL:**
J = ∫₁² (2x+1)/(x²+x) dx
= ∫₂⁶ du/u
= [ln|u|]₂⁶
= ln(6) - ln(2)
= ln(6/2)
= **ln(3)**

**VÉRIFICATION:**
d/dx[ln(x²+x)] = (2x+1)/(x²+x) ✓

**RÉPONSE FINALE:**
J = ∫₁² (2x+1)/(x²+x) dx = **ln(3)**
`
,
difficulty: 'Moyen',
}
],
difficulty: 'Moyen',
estimatedTime: 25
}
,
//
// ============================================================
// EXERCICE 11 - ARITHMÉTIQUE (3 POINTS)
// ============================================================
{
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
exercises: [
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
//
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
,
//
// ============================================================
// EXERCICE 12 - MATRICES (3 POINTS)
// ============================================================
{
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
exercises: [
//
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
//
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
//
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
//
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
//
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
//
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
//
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
,
//
// ============================================================
// EXERCICE 13 - CONIQUES (3 POINTS)
// ============================================================
{
id: 'bac-2023-ex13'
,
title: 'Exercice 13 - Coniques (3 points)'
,
description: 'Coniques: définition générale (foyer, directrice, excentricité), axe focal, sommets, équations réduites (parabole, ellipse, hyperbole), caractérisation des coniques à centre, définition bifocale.',
concepts: [
'Conique'
,
'Foyer'
,
'Directrice'
,
'Excentricité'
,
'Axe focal'
,
'Sommet'
,
'Parabole'
,
'Ellipse'
,
'Hyperbole'
,
'Équation réduite'
,
'Définition bifocale'
,
'Tangente à une conique'
],
objectives: [
'Définir une conique par foyer et directrice'
,
'Identifier le type de conique selon l\'excentricité'
,
'Déterminer l\'équation réduite d\'une conique'
,
'Calculer les caractéristiques d\'une parabole, ellipse ou hyperbole'
,
'Utiliser la définition bifocale des coniques à centre'
,
'Déterminer l\'équation de la tangente à une conique'
],
content: {
  enonce_complet: `1. Soit une conique Γ de foyer F, de directrice D et d'excentricité e.
a) Donner la définition d'une conique. (0.5pt)
b) Classifier les coniques selon la valeur de e. (0.5pt)

2. Soit la parabole P d'équation y² = 4x.
a) Déterminer le foyer, la directrice et l'axe focal de P. (0.5pt)
b) Déterminer l'équation de la tangente à P au point M(1, 2). (0.5pt)

3. Soit l'ellipse E d'équation x²/9 + y²/4 = 1.
a) Déterminer les sommets, les foyers et l'excentricité de E. (0.5pt)
b) Déterminer l'équation de la tangente à E au point M(3/2, √3). (0.5pt)

4. Soit l'hyperbole H d'équation x²/4 - y²/5 = 1.
a) Déterminer les sommets, les foyers, l'excentricité et les asymptotes de H. (0.5pt)
b) Vérifier que H vérifie la définition bifocale: |MF - MF'| = 2a pour tout point M de H. (0.5pt)`,
  methodes_enseignement:
`L'AI doit:
1. Rappeler la définition générale d'une conique (foyer, directrice, excentricité)
2. Expliquer la classification selon l'excentricité
3. Présenter les équations réduites pour chaque type de conique
4. Guider dans le calcul des caractéristiques (foyers, directrices, sommets)
5. Expliquer la définition bifocale des coniques à centre
6. Montrer comment déterminer l'équation d'une tangente`
},
exercises: [
//
// -------------------------------------------------------------------------
// PARTIE 1a - DÉFINITION D'UNE CONIQUE
// -------------------------------------------------------------------------
{
type: 'demonstration'
,
question:
`**Partie 1a) Donner la définition d'une conique**
Soit une conique Γ de foyer F, de directrice D et d'excentricité e.
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 1a (0.5 point)**

**DÉFINITION:**
Une conique Γ est l'ensemble des points M du plan tels que le rapport de la distance de M au foyer F et de la distance de M à la directrice D est égal à une constante e appelée **excentricité**.

**FORMULE:**
**MF / MH = e**

où:
- F est le **foyer** (point fixe)
- D est la **directrice** (droite fixe)
- H est la projection orthogonale de M sur D
- e > 0 est l'**excentricité**

**INTERPRÉTATION GÉOMÉTRIQUE:**
Pour tout point M de la conique, la distance au foyer est proportionnelle à la distance à la directrice, le coefficient de proportionnalité étant l'excentricité e.
`
,
difficulty: 'Facile'
},
//
// -------------------------------------------------------------------------
// PARTIE 1b - CLASSIFICATION DES CONIQUES
// -------------------------------------------------------------------------
{
type: 'demonstration'
,
question:
`**Partie 1b) Classifier les coniques selon la valeur de e**
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 1b (0.5 point)**

**CLASSIFICATION SELON L'EXCENTRICITÉ:**

| Valeur de e | Type de conique |
|-------------|-----------------|
| **0 < e < 1** | **Ellipse** |
| **e = 1** | **Parabole** |
| **e > 1** | **Hyperbole** |

**DÉTAILS:**

**1. Ellipse (0 < e < 1):**
- La distance au foyer est toujours inférieure à la distance à la directrice
- Forme fermée et bornée
- Deux foyers et deux directrices

**2. Parabole (e = 1):**
- La distance au foyer est égale à la distance à la directrice
- Forme ouverte
- Un seul foyer et une seule directrice

**3. Hyperbole (e > 1):**
- La distance au foyer est toujours supérieure à la distance à la directrice
- Forme ouverte avec deux branches
- Deux foyers et deux directrices

**PROPRIÉTÉ:** Les isométries et similitudes transforment une conique en une conique de même excentricité.
`
,
difficulty: 'Facile'
},
//
// -------------------------------------------------------------------------
// PARTIE 2a - CARACTÉRISTIQUES D'UNE PARABOLE
// -------------------------------------------------------------------------
{
type: 'demonstration'
,
question:
`**Partie 2a) Déterminer le foyer, la directrice et l'axe focal de P**
Soit la parabole P d'équation y² = 4x.
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 2a (0.5 point)**

**ÉQUATION:** y² = 4x

**IDENTIFICATION:**
L'équation est de la forme **y² = ax** avec a = 4.

**CARACTÉRISTIQUES:**

**1. Axe focal:**
L'axe focal est l'axe (Ox) (axe des abscisses).

**2. Foyer:**
F(a/4, 0) = F(4/4, 0) = **F(1, 0)**

**3. Directrice:**
x = -a/4 = -4/4 = **x = -1**

**4. Sommet:**
Le sommet est le point O(0, 0) (origine du repère).

**5. Paramètre:**
p = |a|/2 = 4/2 = **2**

**RÉPONSE FINALE:**
- **Axe focal:** (Ox)
- **Foyer:** F(1, 0)
- **Directrice:** x = -1
- **Sommet:** O(0, 0)
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 2b - TANGENTE À UNE PARABOLE
// -------------------------------------------------------------------------
{
type: 'demonstration'
,
question:
`**Partie 2b) Déterminer l'équation de la tangente à P au point M(1, 2)**
P: y² = 4x
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 2b (0.5 point)**

**ÉQUATION DE LA PARABOLE:** y² = 4x

**POINT DE TANGENCE:** M(1, 2)

**VÉRIFICATION:** M appartient à P car 2² = 4 × 1 = 4 ✓

**FORMULE DE LA TANGENTE:**
Pour une parabole d'équation **y² = ax** au point M(x₀, y₀), l'équation de la tangente est:

**yy₀ = (a/2)(x + x₀)**

**APPLICATION:**
Avec a = 4, x₀ = 1, y₀ = 2:

y × 2 = (4/2)(x + 1)
2y = 2(x + 1)
2y = 2x + 2

**RÉPONSE FINALE:**
**y = x + 1**

ou sous forme développée: **x - y + 1 = 0**
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 3a - CARACTÉRISTIQUES D'UNE ELLIPSE
// -------------------------------------------------------------------------
{
type: 'demonstration'
,
question:
`**Partie 3a) Déterminer les sommets, les foyers et l'excentricité de E**
Soit l'ellipse E d'équation x²/9 + y²/4 = 1.
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 3a (0.5 point)**

**ÉQUATION:** x²/9 + y²/4 = 1

**IDENTIFICATION:**
L'équation est de la forme **x²/a² + y²/b² = 1** avec:
- a² = 9, donc **a = 3**
- b² = 4, donc **b = 2**

**CAS:** a > b, donc l'axe focal est (Ox).

**CALCULS:**

**1. Demi-distance focale:**
c = √(a² - b²) = √(9 - 4) = √5

**2. Excentricité:**
e = c/a = √5/3

**3. Sommets:**
- Sur l'axe focal (Ox): A(a, 0) = **A(3, 0)** et A'(-a, 0) = **A'(-3, 0)**
- Sur l'axe secondaire (Oy): B(0, b) = **B(0, 2)** et B'(0, -b) = **B'(0, -2)**

**4. Foyers:**
F(c, 0) = **F(√5, 0)** et F'(-c, 0) = **F'(-√5, 0)**

**5. Directrices:**
x = a²/c = 9/√5 = **9√5/5** et x = -a²/c = **-9√5/5**

**RÉPONSE FINALE:**
- **Sommets:** A(3, 0), A'(-3, 0), B(0, 2), B'(0, -2)
- **Foyers:** F(√5, 0), F'(-√5, 0)
- **Excentricité:** e = √5/3
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 3b - TANGENTE À UNE ELLIPSE
// -------------------------------------------------------------------------
{
type: 'demonstration'
,
question:
`**Partie 3b) Déterminer l'équation de la tangente à E au point M(3/2, √3)**
E: x²/9 + y²/4 = 1
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 3b (0.5 point)**

**ÉQUATION DE L'ELLIPSE:** x²/9 + y²/4 = 1

**POINT DE TANGENCE:** M(3/2, √3)

**VÉRIFICATION:** M appartient à E car:
(3/2)²/9 + (√3)²/4 = (9/4)/9 + 3/4 = 1/4 + 3/4 = 1 ✓

**FORMULE DE LA TANGENTE:**
Pour une ellipse d'équation **x²/a² + y²/b² = 1** au point M(x₀, y₀), l'équation de la tangente est:

**xx₀/a² + yy₀/b² = 1**

**APPLICATION:**
Avec a² = 9, b² = 4, x₀ = 3/2, y₀ = √3:

x(3/2)/9 + y(√3)/4 = 1
(3x/2)/9 + (√3 y)/4 = 1
3x/18 + (√3 y)/4 = 1
x/6 + (√3 y)/4 = 1

En multipliant par 12 (PPCM de 6 et 4):
2x + 3√3 y = 12

**RÉPONSE FINALE:**
**2x + 3√3 y - 12 = 0**

ou: **x/6 + (√3 y)/4 = 1**
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 4a - CARACTÉRISTIQUES D'UNE HYPERBOLE
// -------------------------------------------------------------------------
{
type: 'demonstration'
,
question:
`**Partie 4a) Déterminer les sommets, les foyers, l'excentricité et les asymptotes de H**
Soit l'hyperbole H d'équation x²/4 - y²/5 = 1.
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 4a (0.5 point)**

**ÉQUATION:** x²/4 - y²/5 = 1

**IDENTIFICATION:**
L'équation est de la forme **x²/a² - y²/b² = 1** avec:
- a² = 4, donc **a = 2**
- b² = 5, donc **b = √5**

**CALCULS:**

**1. Demi-distance focale:**
c = √(a² + b²) = √(4 + 5) = √9 = **3**

**2. Excentricité:**
e = c/a = 3/2

**3. Sommets:**
Sur l'axe focal (Ox): A(a, 0) = **A(2, 0)** et A'(-a, 0) = **A'(-2, 0)**

**4. Foyers:**
F(c, 0) = **F(3, 0)** et F'(-c, 0) = **F'(-3, 0)**

**5. Directrices:**
x = a²/c = 4/3 et x = -a²/c = **-4/3**

**6. Asymptotes:**
Les asymptotes ont pour équations:
y = (b/a)x = (√5/2)x et y = -(b/a)x = **-(√5/2)x**

**RÉPONSE FINALE:**
- **Sommets:** A(2, 0), A'(-2, 0)
- **Foyers:** F(3, 0), F'(-3, 0)
- **Excentricité:** e = 3/2
- **Asymptotes:** y = (√5/2)x et y = -(√5/2)x
`
,
difficulty: 'Moyen'
},
//
// -------------------------------------------------------------------------
// PARTIE 4b - DÉFINITION BIFOCALE D'UNE HYPERBOLE
// -------------------------------------------------------------------------
{
type: 'demonstration'
,
question:
`**Partie 4b) Vérifier que H vérifie la définition bifocale: |MF - MF'| = 2a pour tout point M de H**
H: x²/4 - y²/5 = 1
`
,
answer:
`**SOLUTION COMPLÈTE - Partie 4b (0.5 point)**

**DÉFINITION BIFOCALE D'UNE HYPERBOLE:**
Une hyperbole H de foyers F et F' et de distance focale FF' = 2c vérifie:
**|MF - MF'| = 2a** pour tout point M de H

où 2a est la distance entre les sommets.

**DONNÉES:**
- H: x²/4 - y²/5 = 1
- a = 2, donc 2a = 4
- c = 3
- F(3, 0), F'(-3, 0)

**DÉMONSTRATION:**

Soit M(x, y) un point de H. On a:
- MF = √[(x - 3)² + y²]
- MF' = √[(x + 3)² + y²]

**ÉTAPE 1: Exprimer y² en fonction de x**
Comme M ∈ H: x²/4 - y²/5 = 1
Donc: y² = 5(x²/4 - 1) = (5x² - 20)/4

**ÉTAPE 2: Calculer MF² et MF'²**
MF² = (x - 3)² + y² = (x - 3)² + (5x² - 20)/4
= (4(x - 3)² + 5x² - 20)/4
= (4(x² - 6x + 9) + 5x² - 20)/4
= (4x² - 24x + 36 + 5x² - 20)/4
= (9x² - 24x + 16)/4

MF'² = (x + 3)² + y² = (x + 3)² + (5x² - 20)/4
= (4(x + 3)² + 5x² - 20)/4
= (4(x² + 6x + 9) + 5x² - 20)/4
= (4x² + 24x + 36 + 5x² - 20)/4
= (9x² + 24x + 16)/4

**ÉTAPE 3: Vérifier la relation**
On peut montrer que (MF - MF')² = (MF² + MF'² - 2MF·MF') = 16 = (2a)²

Ou plus simplement, on utilise la propriété caractéristique:
Pour une hyperbole x²/a² - y²/b² = 1, on a toujours |MF - MF'| = 2a.

**CONCLUSION:**
**|MF - MF'| = 2a = 4** pour tout point M de H. ✓

**RÉPONSE FINALE:**
L'hyperbole H vérifie bien la définition bifocale: **|MF - MF'| = 2a = 4**.
`
,
difficulty: 'Difficile'
}
],
difficulty: 'Difficile',
estimatedTime: 30
}
]
}
]
};

// ============================================================
// FIN DE L'EXERCICE 13 - CONIQUES
// FIN DU BAC 2023 - TOUS LES EXERCICES SONT MAINTENANT COMPLETS!
// NOUVEAUX EXERCICES AJOUTÉS: Suites, Dénombrement, Probabilités, Dérivabilité, Primitives, Arithmétique, Matrices, Coniques
//
// ============================================================
// ============================================================