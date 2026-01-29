import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_LIMITES_DERIVEES_PRIMITIVES: CurriculumSection = {
  id: 'bac-d-2023-limites-derivees-primitives',
  title: 'Limites, continuité, dérivées et primitives',
  description: 'Limites, continuité, dérivées et primitives complètes: rappels sur limites, calcul de limites, asymptotes, limites composées, continuité, localisation de solutions, dérivabilité, calcul de dérivées, primitives usuelles, intégration. Modules progressifs couvrant tout le programme (même contenu que Bac C, exercices plus faciles).',
  concepts: [
    // Limites
    'Limite d\'une fonction',
    'Limite à gauche',
    'Limite à droite',
    'Limite en un point',
    'Limite en l\'infini',
    'Formes indéterminées',
    'Limites usuelles',
    'Asymptote horizontale',
    'Asymptote verticale',
    'Asymptote oblique',
    'Branches paraboliques',
    'Position relative',
    'Limite d\'une composée',
    // Continuité
    'Continuité en un point',
    'Prolongement par continuité',
    'Fonctions continues',
    'Théorème des valeurs intermédiaires',
    'Unicité de solution',
    'Dichotomie',
    // Dérivabilité
    'Dérivabilité en un point',
    'Nombre dérivé',
    'Fonction dérivée',
    'Dérivées usuelles',
    'Règles de dérivation',
    'Dérivée d\'une somme',
    'Dérivée d\'un produit',
    'Dérivée d\'un quotient',
    'Dérivée d\'une composée',
    'Dérivée d\'une fonction réciproque',
    'Tangente à une courbe',
    'Équation de tangente',
    'Variations d\'une fonction',
    'Extremum local',
    // Primitives
    'Primitive d\'une fonction',
    'Primitives usuelles',
    'Primitive d\'une somme',
    'Primitive d\'un produit par constante',
    'Primitive d\'une composée',
    'Intégration par parties',
    'Changement de variable',
    'Intégrale définie',
    'Aire sous une courbe'
  ],
  objectives: [
    'Maîtriser le calcul des limites (règles algébriques, formes indéterminées)',
    'Identifier et construire les asymptotes (horizontales, verticales, obliques)',
    'Comprendre la continuité et le prolongement par continuité',
    'Utiliser le théorème des valeurs intermédiaires pour localiser des solutions',
    'Calculer des dérivées (règles usuelles, composées, réciproques)',
    'Étudier les variations d\'une fonction à partir de sa dérivée',
    'Déterminer des primitives (formules usuelles, techniques d\'intégration)',
    'Calculer des intégrales définies'
  ],
  content: {
    enonce_complet: `**EXERCICE TYPE BAC - LIMITES, CONTINUITÉ, DÉRIVÉES ET PRIMITIVES COMPLETS**

On considère une fonction f et plusieurs problèmes d'analyse (adapté pour profil littéraire - exercices plus faciles que Bac C).

**PARTIE I - LIMITES (Modules 1-4)**
1. Rappels: limites usuelles et lecture géométrique.
2. Opérations sur limites + formes indéterminées.
3. Asymptotes obliques + position relative.
4. Limites composées + limites à gauche/droite.

**PARTIE II - CONTINUITÉ (Modules 5-6)**
5. Continuité, prolongement, localisation de solution.
6. Étude de fonctions: domaine, parité, périodicité.

**PARTIE III - DÉRIVABILITÉ (Modules 7-9)**
7. Symétries (axe/centre) et transformations.
8. Dérivée et variations (le cœur du chapitre).
9. Fonction réciproque.

**PARTIE IV - PRIMITIVES (Modules 10-11)**
10. Primitives usuelles: définition, formules de base.
11. Calcul de primitives: techniques d'intégration, intégrales définies.`,
    methodes_enseignement:
      `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté au profil littéraire: EXERCICES PLUS FACILES que Bac C
5. Utiliser des exemples numériques simples et concrets
6. Éviter les calculs trop complexes
7. Insister sur les techniques de calcul de base issues des exercices corrigés
8. Illustrer géométriquement chaque notion
9. Générer des exercices de niveau MOYEN/FACILE (pas très difficiles comme Bac C)
10. Utiliser les techniques des exercices corrigés mais avec des fonctions plus simples
11. Intégrer les idées des exercices corrigés mais adaptées au niveau littéraire`,
    modules: {
      module_1: {
        titre: 'Rappels: limites usuelles et lecture géométrique',
        notion: 'Fondamentaux sur les limites avec traduction géométrique',
        contenu: {
          limites_usuelles: {
            quand_x_tend_plus_infini: [
              'x, x², √x → +∞',
              '1/x, 1/x², 1/x³, 1/√x → 0'
            ],
            quand_x_tend_0: [
              'x → 0, x² → 0, √x → 0 (si x ≥ 0), sin x → 0'
            ],
            a_connaitre_sans_reflechir: 'Ces limites doivent être connues par cœur'
          },
          traduction_limite_egale_l: 'lim_{x→a} f(x) = ℓ ⇔ f(x) = ℓ + φ(x) avec φ(x) → 0',
          asymptotes_paralleles_axes: [
            'lim_{x→±∞} f(x) = ℓ ⇒ asymptote horizontale y = ℓ',
            'lim_{x→a} f(x) = ±∞ ⇒ asymptote verticale x = a'
          ],
          doute_utile: 'Est-ce vraiment une limite finie, ou juste une valeur approchée numérique? Toujours justifier.',
          techniques_exercices: [
            'Encadrement: |f(x)| ≤ M pour majorer (ex: |cos x| ≤ 1)',
            'Changement de variable simple',
            'Factorisation basique',
            'Utiliser les limites usuelles directement'
          ],
          illustration: 'Exemples simples: fonctions avec cos, sin, fractions rationnelles simples'
        }
      },
      module_2: {
        titre: 'Opérations sur limites + formes indéterminées',
        notion: 'Règles algébriques et techniques de résolution',
        contenu: {
          regles: [
            'Somme / produit / quotient: ok si tu évites les cas "?"',
            'Formes indéterminées classiques: +∞-∞, 0/0, ∞/∞, 0·∞'
          ],
          techniques_standard: [
            'Factoriser (polynômes, racines)',
            'Mettre au même dénominateur (différences de fractions)',
            'Rationaliser avec le conjugué (racines)',
            'Diviser par le terme dominant (à l\'infini)',
            'Identités trig (ex: cos x - 1, sin x / x)'
          ],
          methodes_exercices: [
            'Division euclidienne simple pour fractions rationnelles',
            'Factorisation basique',
            'Utiliser les équivalents simples'
          ],
          illustration: 'Exemples simples: fractions rationnelles de degré 2, fonctions avec racines simples'
        }
      },
      module_3: {
        titre: 'Asymptotes obliques + position relative',
        notion: 'Comportement asymptotique complet',
        contenu: {
          asymptote_oblique: [
            'Si lim_{x→±∞} (f(x) - (ax+b)) = 0, alors y = ax+b est asymptote',
            'Méthode rapide: a = lim f(x)/x (si existe), b = lim (f(x) - ax)'
          ],
          position_relative: [
            'Étudier le signe de f(x) - (ax+b) pour savoir si la courbe est au-dessus / en dessous',
            'Exemple simple: f(x) = (ax²+bx+c)/(x+d)'
          ],
          direction_asymptotique: [
            'Si f(x) → ±∞ et f(x)/x → ±∞ ⇒ direction (Oy)',
            'Si f(x) → ±∞ et f(x)/x → 0 ⇒ direction (Ox)',
            'Si f(x)/x → a (fini) et f(x)-ax → b (fini) ⇒ asymptote oblique y = ax+b'
          ],
          methode_unique: [
            '1. Calculer lim f(x)',
            '2. Calculer lim f(x)/x',
            '3. Conclure: horizontale / oblique / direction parabolique'
          ],
          illustration: 'Exemples simples: fractions rationnelles de degré 2, fonctions polynomiales'
        }
      },
      module_4: {
        titre: 'Limites composées + limites à gauche/droite',
        notion: 'Composition et limites unilatérales',
        contenu: {
          composition: [
            'Si f(x) → b quand x → a, et g(y) → ℓ quand y → b, alors g(f(x)) → ℓ',
            'Attention: vérifier que g est définie au voisinage de b'
          ],
          limites_unilaterales: [
            'lim_{x→a⁻} f(x) et lim_{x→a⁺} f(x) doivent coïncider pour avoir lim_{x→a} f(x)',
            'Exemple simple: fonctions définies par morceaux'
          ],
          techniques_exercices: [
            'Changement de variable simple',
            'Utiliser sin u/u → 1',
            'Vérifier continuité de la fonction composée'
          ],
          illustration: 'Exemples simples: fonctions composées avec sin, cos, fonctions par morceaux'
        }
      },
      module_5: {
        titre: 'Continuité, prolongement, localisation de solution',
        notion: 'Continuité et théorème des valeurs intermédiaires',
        contenu: {
          continuite_en_a: [
            'f continue en a ⇔ f(a) existe et lim_{x→a} f(x) = f(a)',
            'Vérifier les deux conditions: existence de f(a) ET égalité avec la limite'
          ],
          prolongement_par_continuite: [
            'Si f définie sur I∖{a} et lim_{x→a} f(x) = ℓ (finie), on peut définir f(a)=ℓ pour rendre f continue',
            'Exemple: f(x) = sin x/x en 0, prolonger par f(0) = 1'
          ],
          theoreme_valeurs_intermediaires: [
            'Si f continue sur [u,v] et f(u)f(v) < 0, alors il existe c ∈ (u,v) tel que f(c) = 0',
            'Question qui pique: "As-tu vérifié la continuité sur l\'intervalle avant d\'utiliser le TVI?" Si non, tu es hors-jeu'
          ],
          unicite: 'Si en plus f est strictement monotone sur [u,v], alors la solution est unique',
          dichotomie: [
            'Outil pratique pour approximer c',
            'On coupe l\'intervalle en deux, on garde la moitié où il y a changement de signe, on recommence'
          ],
          fonctions_continues: [
            'Polynômes, rationnelles (si dénominateur ≠ 0), √(ax+b) (si ax+b ≥ 0)',
            'sin, cos, etc., et leurs sommes/produits/quotients'
          ],
          illustration: 'Exemples simples: fonctions avec point de discontinuité, utilisation du TVI avec fonctions simples'
        }
      },
      module_6: {
        titre: 'Étude de fonctions: domaine, parité, périodicité',
        notion: 'Première étape de l\'étude complète d\'une fonction',
        contenu: {
          domaine_Df: [
            'Ensemble des x pour lesquels f(x) existe',
            'Questions réflexes: Dénominateur ≠ 0? Racine: expression ≥ 0? Log: argument > 0?',
            'Trigo: souvent D_f = ℝ, sauf compositions'
          ],
          parite: [
            'Paire: f(-x) = f(x) (symétrie par rapport à Oy)',
            'Impaire: f(-x) = -f(x) (symétrie centrale en O)',
            'Doute utile: "Le domaine est-il symétrique?" Si non, la question de parité n\'a pas de sens'
          ],
          periodicite: [
            'f(x+T) = f(x), T > 0',
            'Souvent: sin, cos période 2π, tan période π',
            'Permet de réduire l\'étude à un intervalle de longueur T'
          ],
          techniques_exercices: [
            'f(x) = (ax²+bx+c)/(x²+dx+e): domaine ℝ∖{racines du dénominateur}',
            'f(x) = cos(ax)cos(bx): parité et périodicité',
            'f(x) = x√((x-1)/(x+1)): domaine avec conditions sur racine et quotient'
          ],
          illustration: 'Exemples simples: fonctions rationnelles, trigonométriques, avec racines'
        }
      },
      module_7: {
        titre: 'Symétries (axe/centre) et transformations',
        notion: 'Symétries et transformations de fonctions',
        contenu: {
          axe_symetrie_x_egale_a: [
            'Méthode 1: montrer f(2a-x) = f(x)',
            'Méthode 2: changer de repère X = x-a, vérifier "paire" en X'
          ],
          centre_symetrie_omega_ab: [
            'Méthode 1: f(2a-x) = 2b - f(x)',
            'Méthode 2: repère X = x-a, Y = y-b, vérifier "impaire"'
          ],
          plan_etude_standard: [
            '1. Domaine',
            '2. Symétries / périodicité',
            '3. Limites aux bornes (et asymptotes)',
            '4. Dérivée, signe, tableau de variations',
            '5. Points remarquables (zéros, ordonnée à l\'origine)',
            '6. Tracé (propre, cohérent)'
          ],
          illustration: 'Exemples simples: fonctions paires/impaires, avec axes/centres de symétrie'
        }
      },
      module_8: {
        titre: 'Dérivée et variations (le cœur du chapitre)',
        notion: 'Utilisation de la dérivée pour étudier les variations',
        contenu: {
          signe_de_f_prime: [
            'f\' > 0 ⇒ f croissante',
            'f\' < 0 ⇒ f décroissante',
            'Changement de signe ⇒ extremum (si continuité ok)'
          ],
          techniques_exercices: [
            'f(x) = (ax²+bx+c)/(x+d): division euclidienne, calcul de f\'',
            'f(x) = x√((x-1)/(x+1)): dérivée avec chaîne et quotient (simplifié)',
            'f(x) = cos(ax)cos(bx): dérivée avec produit et chaîne (simplifié)',
            'Discuter nombre de solutions via tableau de variations'
          ],
          methodes_etude: [
            'Division euclidienne pour fractions rationnelles',
            'Factorisation pour simplifier les calculs',
            'Tableau de signes de f\'',
            'Extremums locaux aux changements de signe'
          ],
          illustration: 'Exemples simples: fractions rationnelles de degré 2, fonctions avec racines simples, trigonométriques simples'
        }
      },
      module_9: {
        titre: 'Fonction réciproque',
        notion: 'Existence, graphique et dérivée de la réciproque',
        contenu: {
          existence: [
            'Si f continue et strictement monotone sur un intervalle I, alors elle est bijective de I vers f(I) ⇒ f⁻¹ existe',
            'Exemple: f(x) = sin x sur [-π/2, π/2] → f⁻¹ = arcsin sur [-1, 1]'
          ],
          graphique: [
            'La courbe de f⁻¹ est la symétrique de celle de f par rapport à y = x',
            'Construction: échanger x et y, puis tracer la symétrie'
          ],
          derivee: [
            '(f⁻¹)\'(y) = 1/f\'(x) avec y = f(x)',
            'Exemple: (arcsin x)\' = 1/√(1-x²)',
            'Justifier via formule de la réciproque'
          ],
          techniques_exercices: [
            'f(x) = (ax+b)/(cx+d): trouver f⁻¹(y) (fonction homographique)',
            'f(x) = sin x sur [-π/2, π/2]: f⁻¹ = arcsin',
            'Utiliser la symétrie pour tracer la courbe de f⁻¹'
          ],
          illustration: 'Exemples simples: fonctions homographiques, trigonométriques, exponentielles/logarithmes'
        }
      },
      module_10: {
        titre: 'Primitives usuelles: définition et formules',
        notion: 'Fondamentaux sur les primitives',
        contenu: {
          definition: 'F est une primitive de f sur un intervalle I si F\' = f sur I',
          propriete: 'Si F est une primitive de f, alors toutes les primitives de f sont de la forme F + C où C est une constante',
          primitives_usuelles: [
            '∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)',
            '∫1/x dx = ln|x| + C',
            '∫eˣ dx = eˣ + C',
            '∫e^(ax) dx = (1/a)e^(ax) + C',
            '∫sin x dx = -cos x + C',
            '∫cos x dx = sin x + C',
            '∫1/(1+x²) dx = arctan x + C'
          ],
          proprietes: [
            '∫(f+g) dx = ∫f dx + ∫g dx',
            '∫kf dx = k∫f dx (k constante)'
          ],
          illustration: 'Exemples simples: primitives de polynômes, fractions simples, exponentielles simples'
        }
      },
      module_11: {
        titre: 'Calcul de primitives: techniques d\'intégration',
        notion: 'Méthodes avancées pour trouver des primitives',
        contenu: {
          integration_par_parties: '∫u\'v dx = uv - ∫uv\' dx',
          changement_variable: 'Si u = g(x), alors ∫f(g(x))g\'(x) dx = ∫f(u) du',
          primitives_composees: 'Si F est une primitive de f, alors ∫f(ax+b) dx = (1/a)F(ax+b) + C',
          integrales_definies: [
            '∫[a,b] f(x) dx = F(b) - F(a) où F est une primitive de f',
            'Aire sous la courbe de f entre a et b'
          ],
          illustration: 'Exemples simples: intégration par parties avec fonctions simples, changement de variable simple'
        }
      }
    }
  },
  // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
  // Le tableau "exercises" est VIDE - l'IA génère les questions à partir du template ci-dessus
  // Template utilisé par l'IA:
  // - concepts: liste des 40+ concepts (limites, continuité, dérivées, primitives)
  // - objectives: liste des 8 objectifs pédagogiques
  // - content.modules: 11 modules détaillés (module_1 à module_11) avec titre, notion, contenu
  // - content.enonce_complet: énoncé type Bac (référence pour l'IA)
  // - content.methodes_enseignement: instructions pour l'IA (IMPORTANT: exercices PLUS FACILES que Bac C)
  // L'IA génère des VARIANTES créatives à chaque ouverture, en conservant les mêmes concepts
  // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
  // Chaque partie (1-11) correspond à un module (module_1 à module_11)
  // DIFFÉRENCE AVEC BAC C: Même contenu (11 modules), mais exercices de niveau MOYEN/FACILE (pas très difficiles)
  // Les techniques des exercices corrigés sont intégrées mais appliquées à des fonctions plus simples
  exercises: [],
  difficulty: 'Moyen',
  estimatedTime: 35
};
