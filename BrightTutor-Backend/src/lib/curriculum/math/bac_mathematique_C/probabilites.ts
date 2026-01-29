import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_PROBABILITES: CurriculumSection = {
          id: 'bac-2023-ex8',
          title: 'Exercice 8 - Probabilités (3 points)',
          description: 'Probabilités complètes: vocabulaire, dénombrement (produit cartésien, p-listes, arrangements, permutations, combinaisons), triangle de Pascal, binôme de Newton, opérations sur événements, probabilités conditionnelles, indépendance, variables aléatoires, loi binomiale, espérance, variance, écart-type. 18 modules progressifs.',
          concepts: [
            'Expérience aléatoire',
            'Univers Ω',
            'Issue, événement, événement élémentaire',
            'Événement impossible ∅, certain Ω',
            'Produit cartésien d\'ensembles finis',
            'p-liste (p-uplets avec répétition)',
            'Arrangements A_n^p',
            'Permutations et factorielle n!',
            'Combinaisons C_n^p',
            'Propriétés des combinaisons',
            'Triangle de Pascal',
            'Binôme de Newton',
            'Opérations sur événements (∩, ∪, complémentaire)',
            'Probabilité et équiprobabilité',
            'Propriétés de base des probabilités',
            'Probabilité conditionnelle P(B|A)',
            'Indépendance de deux événements',
            'Variable aléatoire',
            'Loi de probabilité d\'une variable aléatoire',
            'Fonction de répartition F',
            'Espérance E(X), variance V(X), écart-type σ(X)',
            'Schéma de Bernoulli et loi binomiale'
          ],
          objectives: [
            'Maîtriser le vocabulaire des probabilités (univers, issue, événement)',
            'Calculer le cardinal d\'un produit cartésien',
            'Distinguer p-listes, arrangements et combinaisons',
            'Calculer des arrangements A_n^p',
            'Calculer des permutations et utiliser la factorielle',
            'Calculer des combinaisons C_n^p',
            'Utiliser les propriétés des combinaisons (symétrie, Pascal)',
            'Construire et utiliser le triangle de Pascal',
            'Développer (a+b)^n avec le binôme de Newton',
            'Manipuler les opérations sur événements (intersection, réunion, complémentaire)',
            'Calculer des probabilités en situation d\'équiprobabilité',
            'Appliquer les propriétés de base des probabilités',
            'Calculer des probabilités conditionnelles',
            'Vérifier l\'indépendance de deux événements',
            'Définir et utiliser une variable aléatoire',
            'Construire la loi de probabilité d\'une variable aléatoire',
            'Calculer et tracer une fonction de répartition',
            'Calculer l\'espérance, la variance et l\'écart-type',
            'Identifier et utiliser un schéma de Bernoulli',
            'Appliquer la loi binomiale B(n,p)'
          ],
          content: {
            enonce_complet: `**EXERCICE TYPE BAC - PROBABILITÉS COMPLÈTES**

On considère une urne contenant 5 boules blanches (B) et 3 boules noires (N). On effectue plusieurs expériences aléatoires avec cette urne.

**PARTIE I - VOCABULAIRE ET DÉNOMBREMENT (Modules 0-8)**
1. Définir l'univers Ω et les événements élémentaires.
2. Calculer le nombre de façons de tirer 2 boules avec remise (produit cartésien).
3. Calculer le nombre de codes à 3 chiffres possibles avec les boules (p-listes).
4. Calculer le nombre de façons d'élire un bureau de 3 personnes parmi 8 (arrangements).
5. Calculer le nombre de façons de classer 5 boules (permutations).
6. Calculer le nombre de façons de choisir 3 boules parmi 8 (combinaisons).
7. Utiliser les propriétés des combinaisons pour simplifier des calculs.
8. Construire le triangle de Pascal jusqu'à n=5.
9. Développer (1+1)^5 avec le binôme de Newton.

**PARTIE II - PROBABILITÉS DE BASE (Modules 9-13)**
10. Définir les opérations sur événements (intersection, réunion, complémentaire).
11. Calculer des probabilités en situation d'équiprobabilité.
12. Appliquer les propriétés de base des probabilités.
13. Calculer des probabilités conditionnelles.
14. Vérifier l'indépendance de deux événements.

**PARTIE III - VARIABLES ALÉATOIRES (Modules 14-18)**
15. Définir une variable aléatoire X = nombre de boules blanches tirées.
16. Construire la loi de probabilité de X.
17. Calculer et tracer la fonction de répartition F.
18. Calculer l'espérance E(X), la variance V(X) et l'écart-type σ(X).
19. Identifier un schéma de Bernoulli et appliquer la loi binomiale.`,
            methodes_enseignement:
              `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté selon le niveau de l'étudiant`,
            modules: {
              module_0: {
                titre: 'Vocabulaire minimal du chapitre',
                objectif: 'Fixer le langage avant de calculer',
                contenu: {
                  notions: [
                    'Expérience aléatoire',
                    'Univers Ω',
                    'Issue, événement, événement élémentaire',
                    'Événement impossible ∅, certain Ω'
                  ],
                  illustration: 'Exemple simple au dé: Ω = {1, 2, 3, 4, 5, 6}',
                  exemples: 'Lancer d\'un dé non truqué'
                }
              },
              module_1: {
                titre: 'Produit cartésien d\'ensembles finis',
                notion: 'Couples (x,y) et comptage par produit',
                contenu: {
                  definition: 'E × F = {(x,y) | x ∈ E, y ∈ F}',
                  theoreme: 'Si card(E) = n et card(F) = p, alors card(E × F) = np',
                  exemples: ['Codes', 'Choix successifs', 'Arbre de choix'],
                  piege: 'Confondre "deux choix successifs" et "choisir 2 éléments sans ordre"'
                }
              },
              module_2: {
                titre: 'p-liste (p-uplets avec répétition possible)',
                notion: 'Choisir p éléments parmi n, avec répétition et ordre',
                contenu: {
                  definition: 'Une p-liste est un p-uplet avec répétition autorisée',
                  resultat: 'card(E^p) = n^p',
                  exemples: [
                    'Numéro de téléphone à 8 chiffres',
                    'Former un nombre à 3 chiffres avec 3 lancers'
                  ],
                  piege: 'Oublier que la répétition est autorisée'
                }
              },
              module_3: {
                titre: 'Arrangements A_n^p (sans répétition, ordre important)',
                notion: 'Choisir p éléments distincts parmi n, ordre important',
                contenu: {
                  definition: 'Arrangement de p éléments parmi n',
                  formule: 'A_n^p = n(n-1)⋯(n-p+1)',
                  lien_factorielle: 'A_n^p = n!/(n-p)!',
                  exemples: [
                    'Élection d\'un bureau (président, vice-président, secrétaire, trésorier)',
                    'Tirage successif sans remise (ordre important)'
                  ],
                  piege: 'Utiliser C_n^p alors que les postes sont différents'
                }
              },
              module_4: {
                titre: 'Permutations et factorielle',
                notion: 'Ordonner n éléments',
                contenu: {
                  definition: 'n! = n(n-1)⋯2·1, et 0! = 1',
                  theoreme: 'Le nombre de permutations de n éléments est n!',
                  exemple: 'Classement de 10 cyclistes sans ex æquo',
                  piege: 'Confondre permutation (tout le monde) et arrangement (une partie)'
                }
              },
              module_5: {
                titre: 'Combinaisons C_n^p (ordre non important)',
                notion: 'Choisir p éléments parmi n, ordre non important',
                contenu: {
                  definition: 'Combinaison de p éléments parmi n',
                  formule: 'C_n^p = n!/((n-p)!p!)',
                  lien: 'C_n^p = A_n^p/p!',
                  exemples: [
                    'Groupe de 3 élèves parmi 20',
                    'Tirage simultané de boules (ordre non important)'
                  ],
                  piege: 'Choisir une combinaison alors que la situation est successive'
                }
              },
              module_6: {
                titre: 'Propriétés des combinaisons',
                notion: 'Raccourcis de calcul',
                contenu: {
                  proprietes: [
                    'C_n^0 = 1, C_n^n = 1',
                    'C_n^1 = n',
                    'Symétrie: C_n^p = C_n^(n-p)',
                    'Relation de Pascal: C_n^p = C_(n-1)^(p-1) + C_(n-1)^p'
                  ],
                  piege: 'Mauvais indices, mauvais n et p'
                }
              },
              module_7: {
                titre: 'Triangle de Pascal',
                notion: 'Tableau de calcul rapide des C_n^p',
                contenu: {
                  lecture: 'Ligne n, colonne p',
                  construction: 'Règle "somme des deux au-dessus"',
                  utilisation: 'Calculer des coefficients binomiaux',
                  illustration: 'Triangle de Pascal jusqu\'à n = 8 minimum'
                }
              },
              module_8: {
                titre: 'Binôme de Newton',
                notion: 'Développement de (a+b)^n',
                contenu: {
                  formule: '(a+b)^n = Σ(p=0 à n) C_n^p a^(n-p) b^p',
                  interpretation: 'Les coefficients sont ceux du triangle de Pascal',
                  consequence: 'Nombre de parties d\'un ensemble à n éléments = 2^n',
                  piege: 'Inverser les puissances a^(n-p) et b^p'
                }
              },
              module_9: {
                titre: 'Opérations sur événements',
                notion: 'Représenter les événements et calculer',
                contenu: {
                  operations: [
                    'Intersection A ∩ B',
                    'Réunion A ∪ B',
                    'Incompatibilité: A ∩ B = ∅',
                    'Complémentaire Ā'
                  ],
                  identites: [
                    'A ∩ Ā = ∅',
                    'A ∪ Ā = Ω'
                  ],
                  illustration: 'Diagramme de Venn simple'
                }
              },
              module_10: {
                titre: 'Notion de probabilité, équiprobabilité',
                notion: 'Définir P(A) et calculer par dénombrement',
                contenu: {
                  proprietes: '0 ≤ P(A) ≤ 1',
                  hypothese: 'Hypothèse d\'équiprobabilité',
                  formule_cle: 'P(A) = card(A)/card(Ω)',
                  exemple: 'Dé non truqué, événements "pair", "multiple de 3", "strictement >2"',
                  piege: 'Appliquer la formule sans vérifier l\'équiprobabilité'
                }
              },
              module_11: {
                titre: 'Propriétés de base des probabilités',
                notion: 'Règles de calcul',
                contenu: {
                  proprietes: [
                    'P(Ω) = 1, P(∅) = 0',
                    'P(Ā) = 1 - P(A)',
                    'Formule générale: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
                    'Si A et B incompatibles: P(A ∪ B) = P(A) + P(B)'
                  ],
                  piege: 'Oublier le -P(A ∩ B)'
                }
              },
              module_12: {
                titre: 'Probabilité conditionnelle',
                notion: 'Probabilité "sachant que"',
                contenu: {
                  definition: 'P(B|A) = P(A ∩ B)/P(A) si P(A) ≠ 0',
                  calcul: 'Calcul par tableaux (hommes, femmes, âge)',
                  exemple: 'Tableau 500 personnes, calcul de P(B|A) et P(B̄|Ā)',
                  piege: 'Confondre P(A|B) et P(B|A)'
                }
              },
              module_13: {
                titre: 'Indépendance de deux événements',
                notion: '"L\'un ne change rien à l\'autre"',
                contenu: {
                  definition_conditionnelle: 'A indépendant de B si P(A|B) = P(A)',
                  theoreme_equivalent: 'P(A ∩ B) = P(A)P(B)',
                  piege: 'Croire que "disjoint" implique "indépendant", c\'est faux sauf cas triviaux'
                }
              },
              module_14: {
                titre: 'Variable aléatoire',
                notion: 'Transformer une issue en nombre',
                contenu: {
                  definition: 'X: Ω → ℝ',
                  ensemble_valeurs: 'X(Ω)',
                  exemple: '3 pièces, X = nombre de piles',
                  illustration: 'Schéma flèches entre issues et valeurs de X'
                }
              },
              module_15: {
                titre: 'Loi de probabilité d\'une variable aléatoire',
                notion: 'Associer chaque valeur x_i à P(X = x_i)',
                contenu: {
                  definition: 'Définition de la loi f',
                  construction: 'Construction d\'un tableau de loi',
                  exemple: '3 pièces, valeurs 0,1,2,3 avec probabilités 1/8, 3/8, 3/8, 1/8',
                  piege: 'Oublier que la somme des probabilités vaut 1'
                }
              },
              module_16: {
                titre: 'Fonction de répartition F',
                notion: 'F(x) = P(X < x) ou P(X ≤ x) selon convention',
                contenu: {
                  definition: 'Définition de F',
                  calcul: 'Calcul sur un exemple discret',
                  representation: 'Représentation graphique en escalier',
                  piege: 'Mauvaise gestion des bornes, < versus ≤'
                }
              },
              module_17: {
                titre: 'Espérance, variance, écart-type',
                notion: 'Mesurer "moyenne" et "dispersion"',
                contenu: {
                  esperance: 'E(X) = Σ x_i p_i',
                  variance: 'V(X) = Σ (x_i - m)² p_i avec m = E(X)',
                  ecart_type: 'σ(X) = √V(X)',
                  formule_koenig: 'V(X) = E(X²) - [E(X)]²',
                  exemple_complet: 'Reprendre la variable des 3 pièces, calculer E, V, σ, et tracer F',
                  piege: 'Confondre E(X²) et [E(X)]²'
                }
              },
              module_18: {
                titre: 'Schéma de Bernoulli et loi binomiale',
                notion: 'Répéter une épreuve à 2 issues, indépendamment',
                contenu: {
                  parametres: 'Succès probabilité p, échec probabilité q = 1-p',
                  variable: 'X = nombre de succès sur n essais',
                  loi_binomiale: 'P(X = k) = C_n^k p^k q^(n-k)',
                  resultats: 'E(X) = np, V(X) = npq',
                  exemples: [
                    'QCM: 1 bonne réponse parmi 3, donc p = 1/3. Puis 4 questions, calcul P(X=3) et P(X=4)',
                    'Tir au but ou tir sur cible, p = 0,7, n = 3, loi de Y, puis E(Y), V(Y), σ(Y)'
                  ],
                  piege: 'Oublier q = 1-p, ou se tromper sur C_n^k'
                }
              }
            }
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" est VIDE - l'IA génère les questions à partir du template ci-dessus
          // Template utilisé par l'IA:
          // - concepts: liste des 22 concepts de probabilités
          // - objectives: liste des 20 objectifs pédagogiques
          // - content.modules: 19 modules détaillés (module_0 à module_18) avec titre, notion, contenu
          // - content.enonce_complet: énoncé type Bac (référence pour l'IA)
          // - content.methodes_enseignement: instructions pour l'IA
          // L'IA génère des VARIANTES créatives à chaque ouverture, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          // Chaque partie (1-19) correspond à un module (module_0 à module_18)
          exercises: [],
          difficulty: 'Difficile',
          estimatedTime: 45
        }
