import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_CALCUL_INTEGRAL: CurriculumSection = {
          id: 'bac-d-2023-calcul-integral',
          title: 'Calcul intégral',
          description: 'Calcul intégral complet: notion d\'intégrale, primitives, interprétation géométrique (aire), propriétés, fonctions paires/impaires/périodiques, techniques de calcul (changement de variable, intégration par parties), approximation, volumes de révolution. 8 modules progressifs (même contenu que Bac C, exercices plus faciles).',
          concepts: [
            'Intégrale définie', 'Notation ∫[a→b] f(x) dx', 'Primitive', 'Théorème fondamental',
            'Aire sous une courbe', 'Aire algébrique', 'Aire entre deux courbes',
            'Linéarité de l\'intégrale', 'Relation de Chasles', 'Inversion des bornes',
            'Comparaison d\'intégrales', 'Inégalité de la moyenne', 'Valeur moyenne',
            'Fonction paire', 'Fonction impaire', 'Fonction périodique',
            'Intégration par changement de variable', 'Intégration par parties',
            'Méthode des rectangles', 'Approximation d\'intégrale',
            'Volume de révolution', 'Rotation autour de l\'axe des abscisses'
          ],
          objectives: [
            'Maîtriser la définition de l\'intégrale et son lien avec les primitives',
            'Calculer des intégrales en utilisant les primitives usuelles',
            'Interpréter géométriquement une intégrale (aire sous une courbe)',
            'Calculer l\'aire entre deux courbes',
            'Utiliser les propriétés de l\'intégrale (linéarité, Chasles, comparaison)',
            'Exploiter les symétries (fonctions paires, impaires, périodiques)',
            'Maîtriser les techniques de calcul (changement de variable, intégration par parties)',
            'Approcher une intégrale par la méthode des rectangles',
            'Calculer des volumes de révolution'
          ],
          content: {
            enonce_complet: `**EXERCICE TYPE BAC - CALCUL INTÉGRAL COMPLET**

On considère plusieurs problèmes sur le calcul intégral (adapté pour profil littéraire - exercices plus faciles que Bac C).

**PARTIE I - FONDAMENTAUX (Modules 1-2)**
1. Notion d'intégrale: définition, lien avec les primitives.
2. Primitives et dérivation inverse: formules de base.

**PARTIE II - INTERPRÉTATION GÉOMÉTRIQUE (Module 3)**
3. Aire sous une courbe, aire entre deux courbes.

**PARTIE III - PROPRIÉTÉS ET SYMÉTRIES (Modules 4-5)**
4. Propriétés de l'intégrale: linéarité, Chasles, comparaison, valeur moyenne.
5. Fonctions paires, impaires, périodiques: exploitation des symétries.

**PARTIE IV - TECHNIQUES DE CALCUL (Modules 6-7)**
6. Techniques de calcul: primitive directe, changement de variable, intégration par parties.
7. Approximation d'une intégrale: méthode des rectangles.

**PARTIE V - APPLICATIONS (Module 8)**
8. Volumes de révolution: calcul de volumes par rotation.`,
            methodes_enseignement:
              `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté au profil littéraire: EXERCICES PLUS FACILES que Bac C
5. Utiliser des exemples numériques simples et concrets
6. Éviter les calculs trop complexes
7. Insister sur les techniques de calcul de base
8. Illustrer géométriquement chaque notion
9. Générer des exercices de niveau MOYEN/FACILE (pas très difficiles comme Bac C)
10. **Contextualisation Mauritanienne :** Utiliser des exemples concrets (calcul d'aires, volumes) adaptés au contexte mauritanien
11. **Erreurs Courantes :** Oublier les constantes d'intégration, confondre aire algébrique et aire réelle, erreur dans le changement de bornes, mal choisir u et v' dans l'intégration par parties
12. **Astuces :** Toujours vérifier une primitive en la dérivant. Pour l'intégration par parties, choisir u qui se simplifie. Pour les symétries, vérifier d'abord si la fonction est paire/impaire.`,
            modules: {
              module_1: {
                titre: 'Notion d\'intégrale',
                notion: 'Définition et lien avec les primitives',
                contenu: {
                  definition: {
                    enonce: 'Soit f continue sur [a,b]. L\'intégrale de a à b de f se note: ∫[a→b] f(x) dx',
                    idee_cle: 'C\'est un nombre réel. Ce n\'est pas une fonction.'
                  },
                  lien_avec_primitives: {
                    theoreme_fondamental: 'Si F est une primitive de f sur [a,b], alors: ∫[a→b] f(x) dx = F(b) − F(a)',
                    doute_utile: 'Si tu changes de primitive, est-ce que ça change l\'intégrale ? Non, car deux primitives diffèrent d\'une constante, qui s\'annule dans F(b) − F(a).'
                  },
                  notation_pratique: {
                    formule: '∫[a→b] f(x) dx = [F(x)]_a^b',
                    interpretation: 'Notation compacte pour F(b) − F(a)'
                  }
                }
              },
              module_2: {
                titre: 'Primitives et dérivation inverse',
                notion: 'Formules de base des primitives',
                contenu: {
                  definition: {
                    enonce: 'F est une primitive de f sur un intervalle I si: F\'(x) = f(x) sur I'
                  },
                  primitives_de_base: [
                    '∫ x^n dx = x^(n+1)/(n+1) + C si n ≠ −1',
                    '∫ 1/x dx = ln|x| + C',
                    '∫ e^x dx = e^x + C',
                    '∫ cos x dx = sin x + C',
                    '∫ sin x dx = −cos x + C',
                    '∫ 1/(1+x^2) dx = arctan x + C'
                  ],
                  controle: 'Dérive ta primitive. Si tu ne retombes pas sur f, tu as faux.'
                }
              },
              module_3: {
                titre: 'Interprétation géométrique, aire et signe',
                notion: 'Aire sous une courbe et entre deux courbes',
                contenu: {
                  aire_sous_courbe: {
                    cas_positif: 'Si f(x) ≥ 0 sur [a,b], alors l\'aire entre la courbe et l\'axe des abscisses vaut: A = ∫[a→b] f(x) dx',
                    cas_general: 'Si f change de signe, l\'intégrale donne une aire algébrique. Pour une aire "réelle", tu dois parfois intégrer |f(x)|.'
                  },
                  aire_entre_deux_courbes: {
                    formule: 'Si f(x) ≥ g(x) sur [a,b], alors l\'aire entre les courbes vaut: A = ∫[a→b] (f(x) − g(x)) dx',
                    doute_utile: 'Qui est au-dessus ? Tu le vérifies avec un test simple, par exemple en évaluant f(x) − g(x).'
                  }
                }
              },
              module_4: {
                titre: 'Propriétés de l\'intégrale',
                notion: 'Linéarité, Chasles, comparaison, valeur moyenne',
                contenu: {
                  linearite: {
                    formule: 'Soient f,g continues sur [a,b], et α,β réels: ∫ (αf + βg) = α∫ f + β∫ g'
                  },
                  relation_chasles: {
                    formule: 'Si a ≤ c ≤ b: ∫[a→b] f = ∫[a→c] f + ∫[c→b] f'
                  },
                  inversion_bornes: {
                    formule: '∫[b→a] f = − ∫[a→b] f'
                  },
                  comparaison: {
                    formule: 'Si f(x) ≤ g(x) sur [a,b], alors: ∫[a→b] f ≤ ∫[a→b] g'
                  },
                  valeur_absolue: {
                    formule: '|∫[a→b] f| ≤ ∫[a→b] |f|'
                  },
                  inequalite_moyenne: {
                    formule: 'Si m ≤ f(x) ≤ M sur [a,b], alors: m(b−a) ≤ ∫[a→b] f ≤ M(b−a)'
                  },
                  valeur_moyenne: {
                    formule: 'f_moy = (1/(b−a)) ∫[a→b] f(x) dx'
                  }
                }
              },
              module_5: {
                titre: 'Fonctions paires, impaires, périodiques',
                notion: 'Exploitation des symétries pour simplifier les calculs',
                contenu: {
                  fonction_paire: {
                    definition: 'f est paire si f(-x) = f(x)',
                    propriete: 'Sur [-a,a]: ∫[-a→a] f(x) dx = 2 ∫[0→a] f(x) dx'
                  },
                  fonction_impaire: {
                    definition: 'f est impaire si f(-x) = -f(x)',
                    propriete: 'Sur [-a,a]: ∫[-a→a] f(x) dx = 0'
                  },
                  fonction_periodique: {
                    definition: 'f est de période T si f(x+T) = f(x)',
                    propriete: '∫[a→a+T] f = ∫[0→T] f'
                  },
                  reflexe: 'Avant de calculer, demande-toi si une symétrie peut te donner le résultat en 2 lignes.'
                }
              },
              module_6: {
                titre: 'Techniques de calcul',
                notion: 'Primitive directe, changement de variable, intégration par parties',
                contenu: {
                  primitive_directe: {
                    methode: 'Tu reconnais une forme standard, tu écris F, puis F(b)−F(a).'
                  },
                  changement_variable: {
                    objectif: 'Transformer l\'intégrale en une forme connue.',
                    schema: [
                      'Pose u = φ(x)',
                      'Calcule du = φ\'(x) dx',
                      'Change les bornes ou reviens en x à la fin',
                      'Simplifie'
                    ],
                    doute_utile: 'Tu as bien remplacé tout dx ? Si tu laisses un dx "orphelin", tu as faux.'
                  },
                  integration_parties: {
                    formule: '∫ u v\' = u v − ∫ u\' v',
                    methode: [
                      'Choisis u à dériver (il doit devenir plus simple)',
                      'Choisis v\' à intégrer (il doit rester intégrable)'
                    ],
                    piege: 'Si ton intégrale finale devient plus dure que l\'originale, tu as mal choisi u.'
                  }
                }
              },
              module_7: {
                titre: 'Approximation d\'une intégrale, méthode des rectangles',
                notion: 'Encadrement d\'une intégrale par des sommes de rectangles',
                contenu: {
                  decoupage: {
                    definition: 'Sur [a,b] découpé en n intervalles de largeur h = (b−a)/n'
                  },
                  encadrement: {
                    fonction_croissante: 'Si f est croissante: h Σ_{k=0→n−1} f(a+kh) ≤ ∫[a→b] f ≤ h Σ_{k=1→n} f(a+kh)',
                    fonction_decroissante: 'Si f est décroissante, les inégalités s\'inversent.'
                  }
                }
              },
              module_8: {
                titre: 'Volumes de révolution',
                notion: 'Calcul de volumes par rotation autour d\'un axe',
                contenu: {
                  rotation_axe_abscisses: {
                    formule: 'Si tu tournes autour de l\'axe des abscisses, et si f(x) ≥ 0: V = π ∫[a→b] (f(x))^2 dx'
                  },
                  question_importante: 'Axe des abscisses ou axe des ordonnées ? Le volume change.'
                }
              }
            }
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" est VIDE - l'IA génère les questions à partir du template ci-dessus
          // Template utilisé par l'IA:
          // - concepts: liste des concepts de calcul intégral
          // - objectives: liste des objectifs pédagogiques
          // - content.modules: 8 modules détaillés (module_1 à module_8) avec titre, notion, contenu
          // - content.enonce_complet: énoncé type Bac (référence pour l'IA)
          // - content.methodes_enseignement: instructions pour l'IA
          // L'IA génère des VARIANTES créatives à chaque ouverture, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          // Chaque partie (1-8) correspond à un module (module_1 à module_8)
          // Niveau adapté au Bac D (littéraire) : exercices PLUS FACILES que Bac C
          exercises: [],
          difficulty: 'Moyen',
          estimatedTime: 35
        }
