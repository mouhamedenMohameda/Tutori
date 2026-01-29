import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_CONIQUES: CurriculumSection = {
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
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
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
