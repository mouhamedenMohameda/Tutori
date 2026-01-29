import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_PRIMITIVES: CurriculumSection = {
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
2. Calculer l'intégrale $I = \\int_0^1 x \\cdot e^x dx$ en utilisant une intégration par parties. (1pt)
3. Calculer l'intégrale $J = \\int_1^2 \\frac{2x+1}{x^2+x} dx$. (0.5pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Rappeler les primitives usuelles
2. Expliquer la méthode d'intégration par parties
3. Guider dans le choix du changement de variable`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
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
            // -------------------------------------------------------------------------
            // PARTIE 2a - INTÉGRATION PAR PARTIES - CHOIX DE u ET v' (Sous-notion: Choix)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 2a) Choisir u et v' pour l'intégration par parties**
Pour $I = \\int_0^1 x \\cdot e^x dx$.
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
I = $\\int_0^1 x \\cdot e^x dx$
= $[x \\cdot e^x]_0^1 - \\int_0^1 1 \\cdot e^x dx$
= $[x \\cdot e^x]_0^1 - \\int_0^1 e^x dx$

**CALCUL DES TERMES:**
- $[x \\cdot e^x]_0^1 = 1 \\cdot e^1 - 0 \\cdot e^0 = e - 0 = e$
- $\\int_0^1 e^x dx = [e^x]_0^1 = e^1 - e^0 = e - 1$

**RÉSULTAT:**
I = e - (e - 1) = e - e + 1 = **1**

**RÉPONSE FINALE:**
I = **1**
`
              ,
              difficulty: 'Moyen',
            },
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

Donc $(x-1)e^x$ est une primitive de $x \\cdot e^x$.
$I = [(x-1)e^x]_0^1 = (1-1)e^1 - (0-1)e^0 = 0 - (-1) = 1$ ✓

**CONCLUSION:**
Le résultat I = 1 est correct.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3a - CHANGEMENT DE VARIABLE - IDENTIFICATION (Sous-notion: Changement de variable)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 3a) Identifier le changement de variable approprié**
Pour $J = \\int_1^2 \\frac{2x+1}{x^2+x} dx$.
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
$J = \\int_1^2 \\frac{2x+1}{x^2+x} dx$
$= \\int_2^6 \\frac{du}{u}$
$= [\\ln|u|]_2^6$
$= \\ln(6) - \\ln(2)$
$= \\ln(6/2)$
$= \\ln(3)$

**VÉRIFICATION:**
$\\frac{d}{dx}[\\ln(x^2+x)] = \\frac{2x+1}{x^2+x}$ ✓

**RÉPONSE FINALE:**
$J = \\int_1^2 \\frac{2x+1}{x^2+x} dx = \\ln(3)$
`
              ,
              difficulty: 'Moyen',
            }
          ],
          difficulty: 'Moyen',
          estimatedTime: 25
        }
