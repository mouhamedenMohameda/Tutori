import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_NOMBRES_COMPLEXES: CurriculumSection = {
          id: 'bac-d-2023-ex7',
  title: 'Nombres complexes',
  description: 'Nombres complexes complets: carte mentale, plan complexe et affixe, opérations, conjugué, module et distance, coordonnées polaires, argument, forme exponentielle, puissances (Moivre), racines, équations du second degré, géométrie complexe. 12 modules progressifs (adapté pour profil littéraire, sans transformations).',
          concepts: [
            'Nombres complexes',
    'Plan complexe',
    'Affixe d\'un point',
    'Partie réelle ℜ(z)',
    'Partie imaginaire ℑ(z)',
    'Addition de complexes',
    'Multiplication de complexes',
    'Opposé et inverse',
    'Conjugué z̄',
    'Module |z|',
    'Distance dans le plan complexe',
    'Coordonnées polaires',
            'Forme trigonométrique',
    'Argument arg(z)',
    'Argument principal Arg(z)',
    'Forme exponentielle',
    'Formule d\'Euler',
    'Puissances de complexes',
    'Formule de Moivre',
    'Racines carrées',
    'Racines n-ièmes',
    'Racines de l\'unité',
            'Équations du second degré dans ℂ',
    'Discriminant complexe',
    'Racines conjuguées',
    'Lieux géométriques',
    'Cercle dans le plan complexe',
    'Droite dans le plan complexe',
    'Cercle d\'Apollonius',
    'Médiatrice',
    'Angle orienté constant'
          ],
          objectives: [
    'Maîtriser les conversions entre formes (algébrique, trigonométrique, exponentielle)',
    'Calculer le module et l\'argument d\'un nombre complexe',
    'Résoudre des équations dans ℂ',
    'Appliquer la géométrie dans le plan complexe',
    'Calculer les racines n-ièmes d\'un complexe',
    'Identifier et construire des lieux géométriques'
          ],
          content: {
    enonce_complet: `**EXERCICE TYPE BAC - NOMBRES COMPLEXES COMPLETS**

On considère plusieurs problèmes sur les nombres complexes (adapté pour profil littéraire).

**PARTIE I - FONDAMENTAUX (Modules 0-4)**
1. Carte mentale et objectifs: conversions, module, argument, équations, géométrie, racines.
2. Plan complexe et affixe: repère, point M(x,y), affixe z = x + iy.
3. Opérations sur ℂ: addition, multiplication, opposé, inverse.
4. Conjugué: définition, propriétés, interprétation géométrique.
5. Module et distance: |z|, distance AB, inégalités.

**PARTIE II - FORMES ET CALCULS (Modules 5-8)**
6. Coordonnées polaires et forme trigonométrique.
7. Argument: définition et calcul fiable.
8. Forme exponentielle et formule d'Euler.
9. Puissances: Moivre et calculs rapides.

**PARTIE III - RACINES ET ÉQUATIONS (Modules 9-10)**
10. Racines (carrées puis n-ièmes).
11. Équations du second degré dans ℂ.

**PARTIE IV - GÉOMÉTRIE (Module 11)**
12. Géométrie complexe: lieux et quotients.`,
            methodes_enseignement:
              `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté selon le niveau de l'étudiant (profil littéraire)
5. Insister sur les conversions entre formes
6. Faire pratiquer les calculs de module et argument
7. Illustrer géométriquement chaque notion
8. Utiliser des exemples plus simples et progressifs`,
    modules: {
      module_0: {
        titre: 'Carte mentale et objectifs',
        objectif: 'Fixer les objectifs finaux avant de commencer',
        contenu: {
          ce_quon_doit_savoir_faire: [
            'Conversions entre formes',
            'Module et argument',
            'Équations dans ℂ',
            'Géométrie dans le plan complexe',
            'Racines n-ièmes'
          ],
          illustration: 'Vue d\'ensemble du chapitre'
        }
      },
      module_1: {
        titre: 'Plan complexe et affixe',
        notion: 'Correspondance entre points du plan et nombres complexes',
        contenu: {
          repere: 'Repère, point M(x,y), affixe z = x + iy',
          interpretation: [
            'x = ℜ(z) (partie réelle)',
            'y = ℑ(z) (partie imaginaire)'
          ],
          illustration: 'Représentation graphique dans le plan complexe'
        }
      },
      module_2: {
        titre: 'Opérations sur ℂ',
        notion: 'Addition, multiplication et leurs propriétés',
        contenu: {
          operations: [
            'Addition',
            'Multiplication',
            'Opposé',
            'Inverse'
          ],
                  proprietes: [
            'Commutativité',
            'Distributivité'
          ],
          produit: 'Produit en forme algébrique',
          illustration: 'Exemples de calculs'
        }
      },
      module_3: {
        titre: 'Conjugué',
        notion: 'Nombre complexe conjugué et ses propriétés',
        contenu: {
          definition: 'Définition z̄ = x - iy',
                  proprietes: [
            'Somme: z₁ + z₂ = z̄₁ + z̄₂',
            'Produit: z₁z₂ = z̄₁z̄₂',
            'Quotient: (z₁/z₂) = z̄₁/z̄₂',
            'Lien avec réel/imaginaire pur'
          ],
          interpretation_geometrique: 'Symétrie par rapport à l\'axe réel',
          illustration: 'Représentation graphique du conjugué'
        }
      },
      module_4: {
        titre: 'Module et distance',
        notion: 'Distance d\'un nombre complexe à l\'origine',
        contenu: {
          definition: '|z| = √(x² + y²)',
          distance: 'Distance AB = |z_A - z_B|',
          inegalites: [
            'Triangle: |z + w| ≤ |z| + |w|',
            '|zw| = |z||w|',
            '|z/w| = |z|/|w|'
          ],
          piege: '|z + w| ≠ |z| + |w| en général',
          illustration: 'Interprétation géométrique du module'
        }
      },
      module_5: {
        titre: 'Coordonnées polaires et forme trigonométrique',
        notion: 'Écriture d\'un complexe en fonction de son module et argument',
        contenu: {
          forme_trigonometrique: 'z ≠ 0, z = r(cos θ + i sin θ)',
          lien: [
            'x = r cos θ',
            'y = r sin θ'
          ],
          reconnaitre: [
            'Quadrant',
            'Angles usuels'
          ],
          illustration: 'Passage de la forme algébrique à la forme trigonométrique'
        }
      },
      module_6: {
        titre: 'Argument: définition et calcul fiable',
        notion: 'Angle orienté du nombre complexe',
        contenu: {
          definitions: [
            'arg(z) (argument)',
            'Arg(z) (argument principal)'
          ],
          cas_particuliers: [
            'Réel > 0',
            'Réel < 0',
            'Imaginaire pur'
          ],
          methode_robuste: 'Signe de x, y + triangle',
          illustration: 'Calcul de l\'argument selon le quadrant'
        }
      },
      module_7: {
        titre: 'Forme exponentielle et formule d\'Euler',
        notion: 'Écriture compacte utilisant l\'exponentielle complexe',
        contenu: {
          formule_euler: 'e^(iθ) = cos θ + i sin θ',
          ecriture: 'z = re^(iθ)',
          produits_quotients: [
            'Modules se multiplient/divisent',
            'Arguments s\'additionnent/soustraient'
          ],
          illustration: 'Avantages de la forme exponentielle'
        }
      },
      module_8: {
        titre: 'Puissances: Moivre + calculs rapides',
        notion: 'Calcul des puissances de nombres complexes',
        contenu: {
          formule_moivre: '(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)',
          forme_exponentielle: '(re^(iθ))ⁿ = rⁿ e^(inθ)',
          applications: [
            '(1+i)ⁿ',
            'Simplifications',
            'Périodicités'
          ],
          illustration: 'Exemples de calculs de puissances'
        }
      },
      module_9: {
        titre: 'Racines (carrées puis n-ièmes)',
        notion: 'Résolution de zⁿ = a',
        contenu: {
          racines_carrees: 'Résoudre z² = a',
          racines_unite: 'Racines n-ièmes de l\'unité',
          racines_n_iemes: 'Racines n-ièmes d\'un complexe Z = Re^(iφ): z_k = R^(1/n) e^(i(φ+2kπ)/n), k = 0, …, n-1',
          interpretation: 'Polygone régulier sur un cercle',
          illustration: 'Représentation géométrique des racines'
        }
      },
      module_10: {
        titre: 'Équations du second degré dans ℂ',
        notion: 'Résolution d\'équations quadratiques complexes',
        contenu: {
          discriminant: 'Discriminant, racines complexes',
          coefficients_reels: 'Si coefficients réels: racines conjuguées',
          methode_complete: 'Méthode complète + vérification',
          illustration: 'Exemples de résolution'
        }
      },
      module_11: {
        titre: 'Géométrie complexe: lieux et quotients',
        notion: 'Traduction de conditions géométriques en équations complexes',
        contenu: {
          traductions_essentielles: [
            '|z - a| = R: cercle',
            'ℜ(z) = c: droite verticale',
            'ℑ(z) = c: droite horizontale',
            '|(z-a)/(z-b)| = k: rapport de distances (cercle d\'Apollonius / médiatrice si k = 1)',
            'arg((z-a)/(z-b)) = θ: angle orienté constant (arc/cercle)'
          ],
          exemples: 'Au moins 2 exemples "lieu" corrigés',
          illustration: 'Construction géométrique des lieux'
        }
      },
            }
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
  // Le tableau "exercises" est VIDE - l'IA génère les questions à partir du template ci-dessus
  // Template utilisé par l'IA:
  // - concepts: liste des 34 concepts de nombres complexes
  // - objectives: liste des 7 objectifs pédagogiques
  // - content.modules: 12 modules détaillés (module_0 à module_11) avec titre, notion, contenu
  // - content.enonce_complet: énoncé type Bac (référence pour l'IA)
  // - content.methodes_enseignement: instructions pour l'IA
  // L'IA génère des VARIANTES créatives à chaque ouverture, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
  // Chaque partie (1-12) correspond à un module (module_0 à module_11)
  exercises: [],
  difficulty: 'Moyen',
  estimatedTime: 35
};
