import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_EQUATIONS_DIFFERENTIELLES: CurriculumSection = {
  id: 'bac-2023-equations-differentielles',
  title: 'Équations différentielles',
  description: 'Équations différentielles complètes: vocabulaire, équation du 1er ordre y\'+ay=0, équations de référence du 2e ordre, équation homogène, changement de fonction, conditions initiales, second membre, solution particulière, équivalence f-g, allure des solutions, modélisation (chute avec frottement, oscillateur amorti). 12 modules progressifs.',
  concepts: [
    'Équation différentielle',
    'Ordre d\'une équation différentielle',
    'Équation différentielle linéaire',
    'Équation différentielle homogène',
    'Second membre',
    'Solution d\'une équation différentielle',
    'Famille de solutions',
    'Constante(s) arbitraire(s)',
    'Condition initiale',
    'Équation y\' + ay = 0',
    'Équation y\'\' = 0',
    'Équation y\'\' - ω²y = 0',
    'Équation y\'\' + ω²y = 0',
    'Équation caractéristique',
    'Discriminant Δ',
    'Racines réelles distinctes',
    'Racine double',
    'Racines complexes',
    'Changement de fonction',
    'Solution particulière',
    'Méthode de la forme devinée',
    'Résonance',
    'Allure des solutions',
    'Modélisation physique',
    'Chute avec frottement',
    'Oscillateur amorti'
  ],
  objectives: [
    'Maîtriser le vocabulaire des équations différentielles (ordre, linéaire, homogène, second membre)',
    'Résoudre l\'équation y\' + ay = 0 et utiliser les conditions initiales',
    'Connaître par cœur les équations de référence du 2e ordre',
    'Résoudre une équation homogène du 2e ordre par l\'équation caractéristique',
    'Comprendre le changement de fonction (réduction)',
    'Résoudre un problème de Cauchy avec conditions initiales',
    'Appliquer le principe clé pour les équations avec second membre',
    'Trouver une solution particulière par la méthode de la forme devinée',
    'Prouver l\'équivalence f-g dans les exercices',
    'Analyser l\'allure qualitative des solutions',
    'Modéliser une chute avec frottement',
    'Modéliser un oscillateur amorti masse-ressort'
  ],
  content: {
    enonce_complet: `**EXERCICE TYPE BAC - ÉQUATIONS DIFFÉRENTIELLES COMPLÈTES**

On considère plusieurs équations différentielles et problèmes de modélisation.

**PARTIE I - VOCABULAIRE ET ÉQUATIONS DE BASE (Modules 0-2)**
1. Définir les termes: équation différentielle, ordre, linéaire, homogène, second membre, solution, condition initiale.
2. Résoudre l'équation y' + ay = 0 et utiliser les conditions initiales.
3. Connaître et reconnaître les équations de référence du 2e ordre.

**PARTIE II - ÉQUATION HOMOGÈNE DU 2E ORDRE (Modules 3-5)**
4. Résoudre une équation homogène du 2e ordre par l'équation caractéristique (3 cas: Δ>0, Δ=0, Δ<0).
5. Comprendre le changement de fonction (réduction).
6. Résoudre un problème de Cauchy avec conditions initiales.

**PARTIE III - ÉQUATIONS AVEC SECOND MEMBRE (Modules 6-8)**
7. Appliquer le principe clé pour les équations avec second membre.
8. Trouver une solution particulière par la méthode de la forme devinée.
9. Prouver l'équivalence f-g dans les exercices.

**PARTIE IV - ALLURE ET MODÉLISATION (Modules 9-11)**
10. Analyser l'allure qualitative des solutions.
11. Modéliser une chute avec frottement F = -kv.
12. Modéliser un oscillateur amorti masse-ressort.`,
    methodes_enseignement:
      `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté selon le niveau de l'étudiant
5. Insister sur les recettes et automatismes attendus au bac`,
    modules: {
      module_0: {
        titre: 'Vocabulaire et objectifs',
        objectif: 'Fixer le langage avant de résoudre',
        contenu: {
          notions: [
            'Équation différentielle',
            'Ordre',
            'Linéaire',
            'Homogène',
            'Second membre',
            'Solution',
            'Famille de solutions',
            'Constante(s) arbitraire(s)',
            'Condition initiale'
          ],
          role_condition_initiale: 'Rôle: "choisir une seule courbe parmi la famille"',
          illustration: 'Exemples simples pour illustrer chaque notion'
        }
      },
      module_1: {
        titre: 'Équation du 1er ordre: y\' + ay = 0 (a réel)',
        notion: 'Résolution de l\'équation différentielle linéaire du premier ordre',
        contenu: {
          resultat_connaitre: 'Solutions: y(x) = Ae^(-ax)',
          avec_condition_initiale: 'Avec y(x₀) = y₀: solution unique y(x) = y₀ e^(-a(x-x₀))',
          recette: [
            'Reconnaître la forme y\' + ay = 0',
            'Écrire directement la solution générale',
            'Utiliser la condition initiale pour trouver A'
          ],
          piege: 'Signe de l\'exponentielle, confusion entre e^(ax) et e^(-ax)'
        }
      },
      module_2: {
        titre: 'Équations de référence du 2e ordre (à connaître par cœur)',
        notion: 'Trois équations fondamentales du second ordre',
        contenu: {
          equations_reference: [
            'y\'\' = 0 ⇒ y = Ax + B',
            'y\'\' - ω²y = 0 ⇒ y = Ae^(ωx) + Be^(-ωx) (ω ≠ 0)',
            'y\'\' + ω²y = 0 ⇒ y = A cos(ωx) + B sin(ωx) (ω ≠ 0)'
          ],
          objectif: 'Savoir reconnaître l\'allure: droite, exponentielle, oscillations',
          piege: 'Confondre les trois formes et leurs allures'
        }
      },
      module_3: {
        titre: 'Équation homogène du 2e ordre: y\'\' + ay\' + by = 0',
        notion: 'Méthode standard par équation caractéristique',
        contenu: {
          methode: [
            'Équation caractéristique: r² + ar + b = 0',
            'Discriminant: Δ = a² - 4b'
          ],
          trois_cas: [
            'Δ > 0, deux racines réelles r₁ ≠ r₂: y = Ae^(r₁x) + Be^(r₂x)',
            'Δ = 0, racine double r: y = (Ax + B)e^(rx)',
            'Δ < 0, racines complexes r = α ± iβ (β > 0): y = e^(αx)(A cos(βx) + B sin(βx))'
          ],
          piege: 'Mal calculer Δ, oublier le facteur x dans le cas double'
        }
      },
      module_4: {
        titre: 'Idée "changement de fonction" (la réduction vue dans le cours)',
        notion: 'Transformation pour simplifier l\'équation',
        contenu: {
          transformation: [
            'Poser Z = ye^(αx)',
            'Choisir α = -a/2 pour supprimer le terme en Z\'',
            'Obtenir une équation de référence sur Z: Z\'\' = (a²-4b)/4 Z'
          ],
          but: 'Comprendre pourquoi on retombe sur les 3 équations de référence',
          illustration: 'Détailler la transformation étape par étape'
        }
      },
      module_5: {
        titre: 'Conditions initiales (existence et unicité)',
        notion: 'Problème de Cauchy pour y\'\' + ay\' + by = 0',
        contenu: {
          theoreme: 'Il existe une unique solution si on impose y(x₀) = y₀ et y\'(x₀) = y₁',
          recette: [
            'Écrire la forme générale (selon Δ)',
            'Calculer y\'',
            'Appliquer les deux conditions, résoudre le système pour A, B'
          ],
          piege: 'Dériver cos et sin avec β, oublier le β'
        }
      },
      module_6: {
        titre: 'Équations avec second membre: principe clé',
        notion: 'L(y) = s(x) où L est linéaire',
        contenu: {
          principe: 'Si g est une solution particulière de (E), alors y solution de (E) ⟺ y-g solution de (E₀) où (E₀) est l\'équation homogène associée L(y) = 0',
          recette_type_bac: [
            'Résoudre (E₀)',
            'Trouver une particulière g (forme imposée)',
            'Écrire y = g + h, avec h solution de (E₀)'
          ],
          illustration: 'Exemples concrets d\'application'
        }
      },
      module_7: {
        titre: 'Trouver une particulière g (méthode "forme devinée")',
        notion: 'Méthode pour déterminer une solution particulière',
        contenu: {
          formes_essayer: [
            'Polynôme: essayer g polynôme de même degré',
            'Exponentielle e^(λx): essayer g = Ae^(λx) ou g = (Ax+B)e^(λx) si résonance',
            'sin x, cos x: essayer g = λ sin x + μ cos x',
            'Combinaisons: somme des essais'
          ],
          piege_majeur: 'Résonance avec la solution homogène, il faut multiplier par x (voire x²)',
          exemples: 'Traiter les seconds membres vus dans les pages du cours'
        }
      },
      module_8: {
        titre: 'Exercices "équivalence f-g" (exactement comme dans les exemples)',
        notion: 'Automatisme attendu au bac',
        contenu: {
          logique: [
            'On choisit g simple, on vérifie L(g) = s(x)',
            'Puis on prouve: f solution de (E) ⇔ f-g solution de (E₀)'
          ],
          objectif: 'C\'est un automatisme attendu au bac',
          illustration: 'Exemples détaillés de preuves d\'équivalence'
        }
      },
      module_9: {
        titre: 'Allure des solutions et lecture qualitative',
        notion: 'Interprétation graphique des solutions',
        contenu: {
          allures: [
            'Exponentielles: croissance, décroissance selon le signe',
            'Cas oscillatoire: e^(αx) cos(βx) amorti si α < 0, explosif si α > 0'
          ],
          exercice_type: 'Associer courbe et équation: fournir une checklist',
          piege: 'Confondre les différents types d\'allures'
        }
      },
      module_10: {
        titre: 'Modélisation: chute avec frottement F = -kv',
        notion: 'Application physique des équations différentielles',
        contenu: {
          donnees: 'm masse, g pesanteur, k > 0',
          ecriture_dynamique: 'mv\' = mg - kv',
          equation: 'v\' + (k/m)v = g',
          resolution: [
            'Solution générale: v(t) = mg/k + Ce^(-kt/m)',
            'Avec v(0) = 0: v(t) = (mg/k)(1 - e^(-kt/m))'
          ],
          interpretation: 'Vitesse limite mg/k',
          piege: 'Oublier que la vitesse limite est une solution constante'
        }
      },
      module_11: {
        titre: 'Modélisation: oscillateur amorti masse-ressort',
        notion: 'Système mécanique oscillant',
        contenu: {
          forces: [
            'Ressort: force -kx',
            'Frottement fluide: -fx\''
          ],
          equation: 'mx\'\' + fx\' + kx = 0',
          analyse: [
            'C\'est x\'\' + ax\' + bx = 0 avec a = f/m, b = k/m',
            'Selon Δ = a² - 4b: sur-amorti, critique, sous-amorti'
          ],
          piege: 'Confusion entre variable t et x, et entre position x et vitesse x\''
        }
      }
    }
  },
  // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
  // Le tableau "exercises" est VIDE - l'IA génère les questions à partir du template ci-dessus
  // Template utilisé par l'IA:
  // - concepts: liste des 26 concepts d'équations différentielles
  // - objectives: liste des 12 objectifs pédagogiques
  // - content.modules: 12 modules détaillés (module_0 à module_11) avec titre, notion, contenu
  // - content.enonce_complet: énoncé type Bac (référence pour l'IA)
  // - content.methodes_enseignement: instructions pour l'IA
  // L'IA génère des VARIANTES créatives à chaque ouverture, en conservant les mêmes concepts
  // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
  // Chaque partie (1-12) correspond à un module (module_0 à module_11)
  exercises: [],
  difficulty: 'Difficile',
  estimatedTime: 35
};
