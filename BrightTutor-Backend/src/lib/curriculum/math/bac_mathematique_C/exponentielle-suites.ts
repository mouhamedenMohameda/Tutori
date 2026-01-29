import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_EXPONENTIELLE_SUITES: CurriculumSection = {
          id: 'bac-2023-ex5'
          ,
          title: 'Exercice 5 - Fonction exponentielle et suites (4 points)'
          ,
          description: 'Fonction $f(x) = \\frac{1}{1+e^x}$, limites, dérivée, centre de symétrie, point d\'inflexion, tangente, suite définie par intégrale $I_n = \\int_0^1 \\frac{e^{-nx}}{1+e^x} dx$, convergence, encadrement, théorème des gendarmes.',
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
            resume_cours: {
              suites_definies_par_integrale: {
                definition: "Une suite définie par intégrale est de la forme I_n = ∫_a^b f_n(x) dx où f_n dépend de n",
                proprietes: {
                  linearite: "∫_a^b (f_n + g_n) dx = ∫_a^b f_n dx + ∫_a^b g_n dx",
                  positivite: "Si f_n(x) ≥ 0 pour tout x ∈ [a,b], alors I_n ≥ 0",
                  monotonie: "Si f_{n+1}(x) ≤ f_n(x) pour tout x, alors I_{n+1} ≤ I_n (suite décroissante)",
                  encadrement: "Si m ≤ f_n(x) ≤ M pour tout x, alors m(b-a) ≤ I_n ≤ M(b-a)"
                },
                etude_convergence: {
                  methode_1: "Montrer que la suite est monotone (croissante ou décroissante)",
                  methode_2: "Montrer que la suite est bornée (majorée si décroissante, minorée si croissante)",
                  methode_3: "Appliquer le théorème de convergence monotone",
                  methode_4: "Utiliser le théorème des gendarmes avec un encadrement"
                },
                theoreme_gendarmes: {
                  enonce: "Si v_n ≤ u_n ≤ w_n pour n assez grand et lim v_n = lim w_n = L, alors lim u_n = L",
                  application: "Pour trouver la limite d'une suite définie par intégrale, encadrer l'intégrande puis intégrer"
                },
                calcul_somme: {
                  methode: "Pour calculer I_n + I_{n+1}, utiliser la linéarité de l'intégrale et simplifier l'intégrande",
                  exemple: "Si I_n = ∫_0^1 e^(-nx)/(1+e^x) dx, alors I_n + I_{n+1} peut se simplifier en factorisant"
                },
                exemple_mauritanien: "Si I_n représente l'aire sous une courbe de croissance démographique à Nouakchott sur n années, alors I_n décroît si la croissance ralentit"
              },
              encadrement_integrale: {
                principe: "Pour encadrer I_n = ∫_a^b f_n(x) dx, encadrer d'abord f_n(x) sur [a,b]",
                etapes: {
                  etape_1: "Trouver des fonctions g et h telles que g(x) ≤ f_n(x) ≤ h(x) pour tout x ∈ [a,b]",
                  etape_2: "Intégrer ces inégalités: ∫_a^b g(x) dx ≤ I_n ≤ ∫_a^b h(x) dx",
                  etape_3: "Simplifier les intégrales obtenues"
                },
                exemple_mauritanien: "Pour estimer l'aire d'un terrain à Nouakchott, on peut l'encadrer entre deux rectangles de dimensions connues"
              }
            },
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
3. On considère la suite $(I_n)$ définie par:
$I_0 = \\int_0^1 f(x)dx$
et $\\forall n \\in \\mathbb{N}^*$,
$I_n = \\int_0^1 \\frac{e^{-nx}}{1+e^x} dx$
a) Calculer I₀ et montrer que (I ) est décroissante et convergente. (0.75pt)
b) Calculer I + I₊₁. (0.5pt)
c) Montrer que ∀n ∈ ℕ*
, (1-e^(-n-1))/(2(n+1)) ≤ I ≤ (1-e^(-n))/(2n)
puis en déduire lim
_{n→+∞} I et lim
_{n→+∞} (nI ) (0.5pt)`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            // -------------------------------------------------------------------------
            // PARTIE 1a - LIMITES
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
            // -------------------------------------------------------------------------
            // PARTIE 1b - DÉRIVÉE ET TABLEAU DE VARIATION
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
            // -------------------------------------------------------------------------
            // PARTIE 2a - CENTRE DE SYMÉTRIE
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
            // -------------------------------------------------------------------------
            // PARTIE 2b - POINT D'INFLEXION ET TANGENTE
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
            // -------------------------------------------------------------------------
            // PARTIE 2c - CONSTRUCTION
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
            // -------------------------------------------------------------------------
            // PARTIE 3a - CALCUL I₀ ET CONVERGENCE
            // -------------------------------------------------------------------------
            {
              type: 'calcul'
              ,
              question:
                `**Partie 3a) Calculer I₀ et montrer que (I_n) est décroissante et convergente**
$I_0 = \\int_0^1 f(x)dx = \\int_0^1 \\frac{1}{1+e^x} dx$
$I_n = \\int_0^1 \\frac{e^{-nx}}{1+e^x} dx$
`
              ,
              answer:
                `**SOLUTION COMPLÈTE - Partie 3a (0.75 point)**
**PARTIE I: Calculer $I_0$**
$I_0 = \\int_0^1 \\frac{1}{1+e^x} dx$
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
$I_0 = [x - \\ln(1+e^x)]_0^1$
¹
= [1 - ln(1+e)] - [0 - ln(1+1)]
= 1 - ln(1+e) + ln(2)
= **ln(2) - ln(1+e) + 1**
= **ln[2/(1+e)] + 1**
Ou: **I₀ = ln[2e/(1+e)]** ≈ 0.379
---
**PARTIE II: Montrer que $(I_n)$ est décroissante**
Pour tout $n \\in \\mathbb{N}^*$ et tout $x \\in [0;1]$:
$e^{-(n+1)x} \\leq e^{-nx} \\leq 1$
Donc:
$\\frac{e^{-(n+1)x}}{1+e^x} \\leq \\frac{e^{-nx}}{1+e^x}$
Par intégration sur $[0;1]$:
$\\int_0^1 \\frac{e^{-(n+1)x}}{1+e^x} dx \\leq \\int_0^1 \\frac{e^{-nx}}{1+e^x} dx$
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

**Exemple Mauritanien :** Si I_n représente l'aire sous la courbe de croissance démographique de Nouakchott sur n années, alors I_n décroît car la croissance ralentit avec le temps (e^(-nx) diminue quand n augmente). La convergence vers 0 signifie que l'aire totale tend vers zéro, ce qui modélise une stabilisation démographique.`
              ,
              difficulty: 'Moyen'
            },
            // -------------------------------------------------------------------------
            // PARTIE 3b - CALCUL I + I₊₁
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
$I_n + I_{n+1} = \\int_0^1 \\frac{e^{-nx}}{1+e^x} dx + \\int_0^1 \\frac{e^{-(n+1)x}}{1+e^x} dx$
$= \\int_0^1 \\frac{e^{-nx} + e^{-(n+1)x}}{1+e^x} dx$
$= \\int_0^1 \\frac{e^{-nx}[1 + e^{-x}]}{1+e^x} dx$
**Simplifions [1 + e^(-x)]/(1+e^x):**
[1 + e^(-x)]/(1+e^x) = [1 + 1/eˣ]/(1+e^x)
= [(eˣ + 1)/eˣ]/(1+e^x)
= (eˣ + 1)/[eˣ(1+e^x)]
= (1+e^x)/[eˣ(1+e^x)]
= 1/eˣ
= **e^(-x)**
**Donc:**
$I_n + I_{n+1} = \\int_0^1 e^{-nx} \\times e^{-x} dx$
$= \\int_0^1 e^{-(n+1)x} dx$
$= \\left[\\frac{e^{-(n+1)x}}{-(n+1)}\\right]_0^1$
$= \\left[-\\frac{e^{-(n+1)x}}{n+1}\\right]_0^1$
$= -\\frac{e^{-(n+1)}}{n+1} - \\left(-\\frac{e^0}{n+1}\\right)$
$= -\\frac{e^{-(n+1)}}{n+1} + \\frac{1}{n+1}$
$= \\frac{1 - e^{-(n+1)}}{n+1}$
**RÉPONSE FINALE:**
$I_n + I_{n+1} = \\frac{1 - e^{-(n+1)}}{n+1}$

**Exemple Mauritanien :** Cette somme représente l'aire totale sous deux courbes consécutives. Dans le contexte mauritanien, cela pourrait modéliser la somme des investissements sur deux années consécutives à Nouakchott, où chaque année l'investissement décroît exponentiellement.`
              ,
              difficulty: 'Moyen'
            },
            // -------------------------------------------------------------------------
            // PARTIE 3c - ENCADREMENT ET LIMITES
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
_{n→+∞} (nI ) = 1/2** (Théorème des gendarmes)

**Exemple Mauritanien :** Ces limites modélisent le comportement à long terme d'un phénomène à Nouakchott. Si I_n représente l'aire sous une courbe de croissance démographique, alors lim I_n = 0 signifie que l'aire totale tend vers zéro (croissance qui s'arrête), et lim (nI_n) = 1/2 représente la vitesse à laquelle cette aire décroît, ce qui est crucial pour la planification urbaine à long terme.`
              ,
              difficulty: 'Difficile'
            }
          ],
          difficulty: 'Difficile',
          estimatedTime: 30
        }
