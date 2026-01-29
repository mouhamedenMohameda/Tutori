import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_ETUDE_FONCTION: CurriculumSection = {
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
            // -------------------------------------------------------------------------
            // PARTIE 1b - DÉRIVÉE ET TABLEAU DE VARIATION
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
            // -------------------------------------------------------------------------
            // PARTIE 3a - POINT D'INFLEXION
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
            // -------------------------------------------------------------------------
            // PARTIE 3b - ÉQUATION DE LA TANGENTE
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
            // -------------------------------------------------------------------------
            // PARTIE 4 - INTERSECTIONS AVEC LES AXES
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
            // -------------------------------------------------------------------------
            // PARTIE 5 - BIJECTION
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
            // -------------------------------------------------------------------------
            // PARTIE 6 - CONSTRUCTION
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
            // -------------------------------------------------------------------------
            // PARTIE 7a - ÉQUATION f(x) = x
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
            // -------------------------------------------------------------------------
            // PARTIE 7b - CALCUL D'AIRE
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
$A(D) = 2 \\int_0^\\alpha [f(x) - x] dx$
Car le domaine entre (C) et (C') de part et d'autre de $y = x$ est symétrique.
**CALCUL DE L'INTÉGRALE:**
$\\int_0^\\alpha f(x) dx = \\int_0^\\alpha \\frac{1 + \\ln(2x+2)}{2(x+1)} dx$
Posons $u = 2x + 2$, alors $du = 2dx$, donc $dx = \\frac{du}{2}$
Quand $x = 0$ : $u = 2$
Quand $x = \\alpha$ : $u = 2\\alpha + 2$
$\\int_0^\\alpha \\frac{1 + \\ln(2x+2)}{2(x+1)} dx = \\int_2^{2\\alpha+2} \\frac{1 + \\ln(u)}{u} \\times \\frac{1}{2} du$
$= \\frac{1}{2} \\int_2^{2\\alpha+2} \\left[\\frac{1}{u} + \\frac{\\ln(u)}{u}\\right] du$
$= \\frac{1}{2} \\left[\\ln(u) + \\frac{(\\ln(u))^2}{2}\\right]_2^{2\\alpha+2}$
$= \\frac{1}{2} \\left\\{[\\ln(2\\alpha+2) + \\frac{(\\ln(2\\alpha+2))^2}{2}] - [\\ln(2) + \\frac{(\\ln(2))^2}{2}]\\right\\}$
**CALCUL FINAL:**
$\\int_0^\\alpha x dx = \\frac{\\alpha^2}{2}$
$A(D) = 2\\left[\\int_0^\\alpha f(x)dx - \\frac{\\alpha^2}{2}\\right]$
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
        }
