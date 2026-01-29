import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_SUITES: CurriculumSection = {
          id: 'bac-d-2023-ex4',
          title: 'Exercice 4 - Suites (3 points)',
          description: 'Suites complètes: définition et vocabulaire, suites arithmétiques, suites géométriques, suites récurrentes, raisonnement par récurrence, monotonie et bornes, convergence et limites, suites adjacentes, méthodes Bac, exercices corrigés. Modules progressifs couvrant tout le programme (même contenu que Bac C, exercices plus faciles).',
          concepts: [
            'Suite numérique', 'Définition de suite', 'Terme général', 'Premier terme', 'Indice',
            'Suite arithmétique', 'Raison arithmétique', 'Terme général arithmétique', 'Somme arithmétique',
            'Suite géométrique', 'Raison géométrique', 'Terme général géométrique', 'Somme géométrique',
            'Suite récurrente', 'Relation de récurrence', 'Suite arithmético-géométrique', 'Point fixe',
            'Raisonnement par récurrence', 'Initialisation', 'Hérédité', 'Principe de récurrence',
            'Monotonie', 'Suite croissante', 'Suite décroissante', 'Méthode de la différence', 'Méthode du rapport',
            'Suite majorée', 'Suite minorée', 'Suite bornée', 'Majorant', 'Minorant',
            'Convergence', 'Limite de suite', 'Suite convergente', 'Suite divergente',
            'Théorème de convergence monotone', 'Théorème des gendarmes', 'Critère de distance',
            'Suites adjacentes', 'Encadrement', 'Convergence commune',
            'Transformation de suite', 'Changement de variable', 'Suite auxiliaire',
            'Calcul de limite', 'Point fixe', 'Équation L = f(L)',
            'Somme de termes', 'Série', 'Convergence de série'
          ],
          objectives: [
            'Maîtriser les définitions et le vocabulaire des suites',
            'Reconnaître et manipuler les suites arithmétiques',
            'Reconnaître et manipuler les suites géométriques',
            'Résoudre les suites récurrentes (transformation en suite géométrique)',
            'Maîtriser le raisonnement par récurrence (initialisation, hérédité)',
            'Étudier la monotonie d\'une suite (méthode différence/rapport)',
            'Déterminer si une suite est majorée, minorée ou bornée',
            'Prouver la convergence d\'une suite (théorème de convergence monotone)',
            'Calculer la limite d\'une suite (point fixe, théorème des gendarmes)',
            'Utiliser les suites adjacentes pour encadrer une limite',
            'Calculer les sommes de termes (arithmétiques et géométriques)',
            'Appliquer les méthodes Bac pour résoudre les exercices types'
          ],
          content: {
            resume_cours: {
              definitions: {
                suite_numerique: {
                  definition: "Une suite numérique est une application de ℕ (ou d'une partie de ℕ) dans ℝ",
                  notation: "On note (u_n)_{n∈ℕ} ou simplement (u_n)",
                  terme_general: "u_n est le terme de rang n",
                  premier_terme: "u_0 ou u_1 est le premier terme",
                  exemple_mauritanien: "La population de Nouakchott chaque année forme une suite: P_0 en 2020, P_1 en 2021, P_2 en 2022, etc."
                },
                suite_arithmetique: {
                  definition: "Une suite (u_n) est arithmétique s'il existe un réel r tel que pour tout n ∈ ℕ: u_{n+1} = u_n + r",
                  raison: "Le réel r est appelé raison de la suite arithmétique",
                  terme_general: "u_n = u_0 + n×r ou u_n = u_p + (n-p)×r",
                  somme: "S_n = ∑_{i=0}^{n} u_i = (n+1)(u_0 + u_n)/2",
                  monotonie: {
                    r_positif: "Si r > 0, la suite est strictement croissante",
                    r_negatif: "Si r < 0, la suite est strictement décroissante",
                    r_nul: "Si r = 0, la suite est constante"
                  },
                  exemple_mauritanien: "Si un élève économise 500 ouguiyas chaque mois, sa suite d'économies est arithmétique de raison r = 500"
                },
                suite_geometrique: {
                  definition: "Une suite (u_n) est géométrique s'il existe un réel q tel que pour tout n ∈ ℕ: u_{n+1} = q × u_n",
                  raison: "Le réel q est appelé raison de la suite géométrique",
                  terme_general: "u_n = u_0 × q^n ou u_n = u_p × q^(n-p)",
                  remarques: {
                    forme_explicite: "Toute suite définie par u_n = a×q^n (où a, q ∈ ℝ) est une suite géométrique de raison q et de premier terme a",
                    reconnaissance: "Si le rapport u_{n+1}/u_n est constant pour tout n (avec u_n ≠ 0), alors la suite est géométrique de raison q = u_{n+1}/u_n"
                  },
                  somme: {
                    q_different_1: "Si q ≠ 1: S_n = ∑_{i=0}^{n} u_i = u_0 × (1 - q^(n+1))/(1 - q)",
                    q_egal_1: "Si q = 1: S_n = ∑_{i=0}^{n} u_i = (n+1) × u_0"
                  },
                  convergence: {
                    q_absolu_inferieur_1: "Si |q| < 1, alors lim_{n→+∞} u_n = 0",
                    q_superieur_1: "Si q > 1, alors lim_{n→+∞} u_n = +∞ (si u_0 > 0) ou -∞ (si u_0 < 0)",
                    q_egal_1: "Si q = 1, la suite est constante",
                    q_inferieur_moins_1: "Si q < -1, la suite diverge (alternée)"
                  },
                  exemple_mauritanien: "Si un investissement de 1000 ouguiyas augmente de 10% chaque année, la suite des valeurs est géométrique de raison q = 1.1"
                },
                suite_recurrente: {
                  definition: "Une suite récurrente est définie par son premier terme et une relation u_{n+1} = f(u_n)",
                  types: {
                    lineaire_ordre_1: "u_{n+1} = a×u_n + b (suite arithmético-géométrique)",
                    lineaire_ordre_2: "u_{n+2} = a×u_{n+1} + b×u_n",
                    non_lineaire: "u_{n+1} = f(u_n) où f est une fonction non linéaire"
                  },
                  methode_resolution: {
                    etape_1: "Calculer les premiers termes pour comprendre le comportement",
                    etape_2: "Chercher un changement de variable pour transformer en suite géométrique",
                    etape_3: "Si u_{n+1} = a×u_n + b, poser v_n = u_n - α où α est le point fixe (α = b/(1-a) si a≠1)",
                    etape_4: "Montrer que (v_n) est géométrique, puis exprimer u_n en fonction de n"
                  },
                  exemple_mauritanien: "La croissance démographique de Nouakchott peut être modélisée par P_{n+1} = 1.03×P_n + 5000, où 1.03 est le taux de croissance et 5000 le nombre de nouveaux arrivants par an"
                },
                limite_suite: {
                  definition: "Une suite (u_n) converge vers L ∈ ℝ si lim_{n→+∞} u_n = L",
                  divergence: "Une suite diverge si elle n'a pas de limite finie",
                  calcul_limite: {
                    methode_1: "Si u_n = f(n) où f est une fonction, utiliser les limites de fonctions",
                    methode_2: "Pour les suites géométriques: utiliser les propriétés de convergence",
                    methode_3: "Pour les suites récurrentes: si u_n → L, alors L vérifie L = f(L) (point fixe)"
                  },
                  convergence: {
                    proprietes: {
                      croissante_majoree: "Toute suite croissante et majorée converge",
                      decroissante_minoree: "Toute suite décroissante et minorée converge",
                      monotone_bornee: "Toute suite monotone et bornée converge",
                      critere_distance: "Si, à partir d'un certain rang, |u_n - l| ≤ α_n et si lim_{n→+∞} α_n = 0, alors lim_{n→+∞} u_n = l",
                      theoreme_gendarmes: "Si, à partir d'un certain rang, u_n ≤ v_n ≤ w_n et si lim_{n→+∞} u_n = lim_{n→+∞} w_n = l, alors lim_{n→+∞} v_n = l (Théorème des gendarmes)"
                    }
                  },
                  suites_adjacentes: {
                    definition: "Deux suites (u_n) et (v_n) sont adjacentes si et seulement si: l'une est croissante, l'autre est décroissante, et elles convergent vers la même limite",
                    proprietes: {
                      encadrement: "Si (u_n) croissante et (v_n) décroissante sont adjacentes avec lim u_n = lim v_n = l, alors pour tout n ∈ ℕ: u_0 ≤ u_1 ≤ ... ≤ u_n ≤ l ≤ v_n ≤ ... ≤ v_1 ≤ v_0",
                      equivalences: "Si (u_n) et (v_n) sont adjacentes, alors: (u_n) et (v_n) ont même limite ⇔ lim_{n→+∞} (u_n - v_n) = 0 ⇔ lim_{n→+∞} u_n/v_n = 1"
                    },
                    exemple_mauritanien: "Pour estimer la population maximale de Nouakchott, on peut utiliser deux suites adjacentes: une suite croissante qui sous-estime et une suite décroissante qui surestime, et leur limite commune donne la capacité maximale"
                  },
                  exemple_mauritanien: "Si la population de Nouakchott suit P_n = 1000000 × (1.02)^n, alors lim_{n→+∞} P_n = +∞ car 1.02 > 1"
                },
                raisonnement_recurrence: {
                  principe: "On considère une propriété P(n) qui dépend d'un entier naturel n. Soit n_0 un entier naturel. Si P(n_0) est vraie, et si pour tout entier n ≥ n_0, P(n) implique P(n+1), alors P(n) est vraie pour tout entier naturel n ≥ n_0",
                  etapes: {
                    etape_1: "L'initialisation: On montre que P(n_0) est vraie",
                    etape_2: "L'hérédité: On montre que P(n) vraie ⇒ P(n+1) vraie (pour tout n ≥ n_0)",
                    etape_3: "Conclusion: Pour tout entier n ≥ n_0, P(n) est vraie"
                  },
                  exemple_mauritanien: "Pour prouver qu'une dette double chaque année à Nouakchott, on vérifie d'abord pour l'année 0 (initialisation), puis on suppose que c'est vrai pour l'année n et on montre que c'est vrai pour l'année n+1 (hérédité)"
                }
              },
              methodes: {
                reconnaitre_suite_arithmetique: {
                  condition: "u_{n+1} - u_n est constant (indépendant de n)",
                  verification: "Calculer u_1 - u_0, u_2 - u_1, u_3 - u_2. Si tous égaux, alors suite arithmétique"
                },
                reconnaitre_suite_geometrique: {
                  condition: "u_{n+1}/u_n est constant (pour u_n ≠ 0)",
                  verification: "Calculer u_1/u_0, u_2/u_1, u_3/u_2. Si tous égaux, alors suite géométrique"
                },
                transformer_suite_recurrente: {
                  cas_lineaire: "Pour u_{n+1} = a×u_n + b avec a ≠ 1, poser v_n = u_n - b/(1-a)",
                  resultat: "La suite (v_n) est géométrique de raison a",
                  application: "En déduire v_n, puis u_n = v_n + b/(1-a)"
                },
                calculer_somme: {
                  arithmetique: "S_n = (nombre de termes) × (premier terme + dernier terme)/2",
                  geometrique: "S_n = premier terme × (1 - raison^(nombre de termes))/(1 - raison) si raison ≠ 1"
                }
              },
              applications_pratiques: {
                croissance_demographique: {
                  modele: "P_n = P_0 × (1 + t)^n où t est le taux de croissance annuel",
                  exemple_mauritanien: "Si Nouakchott a 1 million d'habitants en 2020 et croît de 3% par an, alors P_n = 1000000 × (1.03)^n"
                },
                interet_compose: {
                  modele: "C_n = C_0 × (1 + r)^n où r est le taux d'intérêt",
                  exemple_mauritanien: "Un investissement de 5000 ouguiyas à 5% par an devient C_n = 5000 × (1.05)^n après n années"
                },
                amortissement: {
                  modele: "V_n = V_0 × (1 - d)^n où d est le taux de dépréciation",
                  exemple_mauritanien: "Une voiture qui vaut 500000 ouguiyas et perd 15% de sa valeur chaque année: V_n = 500000 × (0.85)^n"
                }
              }
            },
            enonce_complet: `On considère la suite (u_n) définie par u_0 = 5 et pour tout n ∈ ℕ: u_{n+1} = 2u_n - 3
1. Calculer u_1, u_2 et u_3. (0.75pt)
2. Montrer que la suite (v_n) définie par v_n = u_n - 3 est une suite géométrique. (0.75pt)
3. En déduire l'expression de u_n en fonction de n. (0.75pt)
4. Calculer la limite de (u_n) quand n tend vers +∞. (0.75pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté au profil littéraire: EXERCICES PLUS FACILES que Bac C
5. Insister sur les techniques de calcul (termes généraux, sommes, limites)
6. Faire pratiquer les méthodes standards (récurrence, monotonie, convergence)
7. Illustrer avec des exemples concrets et progressifs
8. Intégrer les techniques des exercices corrigés dans les questions générées
9. Utiliser le plan d'étude standard pour les suites (premiers termes, nature, monotonie, bornes, convergence)
10. Générer des exercices de niveau MOYEN/FACILE (pas très difficiles comme Bac C)
11. **Contextualisation Mauritanienne :** Utiliser des exemples de croissance démographique (Nouakchott), d'investissements en ouguiyas, ou d'économies mensuelles
12. **Erreurs Courantes :** Confusion entre suite arithmétique et géométrique, erreur dans le calcul de la raison, oubli du premier terme dans la formule, oubli de l'initialisation dans la récurrence
13. **Astuces :** Pour reconnaître une suite géométrique, vérifier que le rapport u_{n+1}/u_n est constant. Pour trouver le point fixe, résoudre α = f(α). Pour la monotonie, toujours calculer u_{n+1} - u_n`,
            modules: {
              module_1: {
                titre: 'Définition et vocabulaire des suites',
                notion: 'Fondamentaux des suites numériques',
                contenu: {
                  definition: {
                    enonce: 'Une suite numérique est une application de ℕ (ou d\'une partie de ℕ) dans ℝ',
                    notation: 'On note (u_n)_{n∈ℕ} ou simplement (u_n)',
                    terme_general: 'u_n est le terme de rang n',
                    premier_terme: 'u_0 ou u_1 est le premier terme',
                    types: {
                      explicite: 'u_n = f(n) où f est une fonction',
                      recurrente: 'u_{n+1} = f(u_n) avec u_0 donné'
                    }
                  },
                  vocabulaire: [
                    'Indice: n ∈ ℕ',
                    'Terme général: u_n',
                    'Premier terme: u_0 ou u_1',
                    'Suite définie explicitement: u_n = f(n)',
                    'Suite définie par récurrence: u_{n+1} = f(u_n)'
                  ],
                  exemple_mauritanien: 'La population de Nouakchott chaque année forme une suite: P_0, P_1, P_2, ...'
                }
              },
              module_2: {
                titre: 'Suites arithmétiques',
                notion: 'Suites à progression constante',
                contenu: {
                  definition: {
                    enonce: 'Une suite (u_n) est arithmétique s\'il existe un réel r tel que pour tout n ∈ ℕ: u_{n+1} = u_n + r',
                    raison: 'Le réel r est appelé raison de la suite arithmétique'
                  },
                  terme_general: {
                    formule: 'u_n = u_0 + n×r ou u_n = u_p + (n-p)×r',
                    interpretation: 'Chaque terme s\'obtient en ajoutant la raison au terme précédent'
                  },
                  somme: {
                    formule: 'S_n = ∑_{i=0}^{n} u_i = (n+1)(u_0 + u_n)/2',
                    interpretation: 'Nombre de termes × (premier terme + dernier terme) / 2'
                  },
                  monotonie: {
                    r_positif: 'Si r > 0, la suite est strictement croissante',
                    r_negatif: 'Si r < 0, la suite est strictement décroissante',
                    r_nul: 'Si r = 0, la suite est constante'
                  },
                  exemple_mauritanien: 'Si un élève économise 500 ouguiyas chaque mois, sa suite d\'économies est arithmétique de raison r = 500'
                }
              },
              module_3: {
                titre: 'Suites géométriques',
                notion: 'Suites à progression multiplicative',
                contenu: {
                  definition: {
                    enonce: 'Une suite (u_n) est géométrique s\'il existe un réel q tel que pour tout n ∈ ℕ: u_{n+1} = q × u_n',
                    raison: 'Le réel q est appelé raison de la suite géométrique',
                    reconnaissance: 'Si le rapport u_{n+1}/u_n est constant pour tout n (avec u_n ≠ 0), alors la suite est géométrique'
                  },
                  terme_general: {
                    formule: 'u_n = u_0 × q^n ou u_n = u_p × q^(n-p)',
                    interpretation: 'Chaque terme s\'obtient en multipliant le terme précédent par la raison'
                  },
                  somme: {
                    q_different_1: 'Si q ≠ 1: S_n = ∑_{i=0}^{n} u_i = u_0 × (1 - q^(n+1))/(1 - q)',
                    q_egal_1: 'Si q = 1: S_n = ∑_{i=0}^{n} u_i = (n+1) × u_0'
                  },
                  convergence: {
                    q_absolu_inferieur_1: 'Si |q| < 1, alors lim_{n→+∞} u_n = 0',
                    q_superieur_1: 'Si q > 1 et u_0 > 0, alors lim_{n→+∞} u_n = +∞',
                    q_egal_1: 'Si q = 1, la suite est constante',
                    q_inferieur_moins_1: 'Si q < -1, la suite diverge (alternée)'
                  },
                  exemple_mauritanien: 'Un investissement de 1000 ouguiyas à 10% par an: suite géométrique de raison q = 1.1'
                }
              },
              module_4: {
                titre: 'Suites récurrentes',
                notion: 'Transformation en suite géométrique',
                contenu: {
                  definition: {
                    enonce: 'Une suite récurrente est définie par son premier terme et une relation u_{n+1} = f(u_n)',
                    types: {
                      lineaire_ordre_1: 'u_{n+1} = a×u_n + b (suite arithmético-géométrique)',
                      lineaire_ordre_2: 'u_{n+2} = a×u_{n+1} + b×u_n',
                      non_lineaire: 'u_{n+1} = f(u_n) où f est une fonction non linéaire'
                    }
                  },
                  methode_resolution: {
                    etape_1: 'Calculer les premiers termes pour comprendre le comportement',
                    etape_2: 'Chercher un changement de variable pour transformer en suite géométrique',
                    etape_3: 'Si u_{n+1} = a×u_n + b, poser v_n = u_n - α où α est le point fixe (α = b/(1-a) si a≠1)',
                    etape_4: 'Montrer que (v_n) est géométrique, puis exprimer u_n en fonction de n'
                  },
                  point_fixe: {
                    definition: 'Le point fixe α vérifie α = f(α)',
                    calcul: 'Pour u_{n+1} = a×u_n + b, le point fixe est α = b/(1-a) si a≠1',
                    utilisation: 'La transformation v_n = u_n - α permet d\'obtenir une suite géométrique'
                  },
                  exemple_mauritanien: 'La croissance démographique de Nouakchott peut être modélisée par P_{n+1} = 1.03×P_n + 5000, où 1.03 est le taux de croissance et 5000 le nombre de nouveaux arrivants par an'
                }
              },
              module_5: {
                titre: 'Raisonnement par récurrence',
                notion: 'Méthode de démonstration pour les suites',
                contenu: {
                  principe: {
                    enonce: 'On considère une propriété P(n) qui dépend d\'un entier naturel n. Soit n_0 un entier naturel. Si P(n_0) est vraie, et si pour tout entier n ≥ n_0, P(n) implique P(n+1), alors P(n) est vraie pour tout entier naturel n ≥ n_0'
                  },
                  etapes: {
                    initialisation: 'On montre que P(n_0) est vraie',
                    heredite: 'On montre que P(n) vraie ⇒ P(n+1) vraie (pour tout n ≥ n_0)',
                    conclusion: 'Pour tout entier n ≥ n_0, P(n) est vraie'
                  },
                  erreurs_courantes: [
                    'Oublier l\'initialisation',
                    'Mal formuler l\'hypothèse de récurrence',
                    'Ne pas utiliser l\'hypothèse de récurrence dans l\'hérédité'
                  ],
                  exemple_mauritanien: 'Pour prouver qu\'une propriété démographique est vraie chaque année à Nouakchott, on vérifie d\'abord pour l\'année 0, puis on montre que si c\'est vrai pour l\'année n, alors c\'est vrai pour l\'année n+1'
                }
              },
              module_6: {
                titre: 'Monotonie et bornes',
                notion: 'Étude des variations et limites des suites',
                contenu: {
                  monotonie: {
                    definition: 'Étude du sens de variation d\'une suite',
                    croissante: 'u_{n+1} ≥ u_n pour tout n (strictement si >)',
                    decroissante: 'u_{n+1} ≤ u_n pour tout n (strictement si <)',
                    methodes: {
                      difference: 'Calculer u_{n+1} - u_n et étudier son signe',
                      rapport: 'Pour suite à termes positifs, calculer u_{n+1}/u_n et comparer à 1'
                    }
                  },
                  bornes: {
                    majoree: 'Il existe M ∈ ℝ tel que u_n ≤ M pour tout n',
                    minoree: 'Il existe m ∈ ℝ tel que u_n ≥ m pour tout n',
                    bornee: 'La suite est à la fois majorée et minorée'
                  },
                  exemple_mauritanien: 'Si le nombre d\'étudiants à l\'université de Nouakchott augmente chaque année, la suite est croissante. Le nombre de places dans une salle de classe est majoré par la capacité maximale (ex: 50 places)'
                }
              },
              module_7: {
                titre: 'Convergence et limites',
                notion: 'Théorèmes de convergence et calcul de limites',
                contenu: {
                  definition: {
                    enonce: 'Une suite (u_n) converge vers L ∈ ℝ si lim_{n→+∞} u_n = L',
                    divergence: 'Une suite diverge si elle n\'a pas de limite finie'
                  },
                  theoremes: {
                    convergence_monotone: 'Toute suite croissante et majorée converge. Toute suite décroissante et minorée converge',
                    theoreme_gendarmes: 'Si, à partir d\'un certain rang, u_n ≤ v_n ≤ w_n et si lim_{n→+∞} u_n = lim_{n→+∞} w_n = l, alors lim_{n→+∞} v_n = l',
                    critere_distance: 'Si, à partir d\'un certain rang, |u_n - l| ≤ α_n et si lim_{n→+∞} α_n = 0, alors lim_{n→+∞} u_n = l'
                  },
                  calcul_limite: {
                    methode_1: 'Si u_n = f(n) où f est une fonction, utiliser les limites de fonctions',
                    methode_2: 'Pour les suites géométriques: utiliser les propriétés de convergence',
                    methode_3: 'Pour les suites récurrentes: si u_n → L, alors L vérifie L = f(L) (point fixe)'
                  },
                  exemple_mauritanien: 'Si la population de Nouakchott suit une croissance limitée, elle converge vers une capacité maximale'
                }
              },
              module_8: {
                titre: 'Suites adjacentes',
                notion: 'Encadrement et convergence commune',
                contenu: {
                  definition: {
                    enonce: 'Deux suites (u_n) et (v_n) sont adjacentes si et seulement si: l\'une est croissante, l\'autre est décroissante, et elles convergent vers la même limite'
                  },
                  proprietes: {
                    encadrement: 'Si (u_n) croissante et (v_n) décroissante sont adjacentes avec lim u_n = lim v_n = l, alors pour tout n ∈ ℕ: u_0 ≤ u_1 ≤ ... ≤ u_n ≤ l ≤ v_n ≤ ... ≤ v_1 ≤ v_0',
                    equivalences: 'Si (u_n) et (v_n) sont adjacentes, alors: (u_n) et (v_n) ont même limite ⇔ lim_{n→+∞} (u_n - v_n) = 0 ⇔ lim_{n→+∞} u_n/v_n = 1'
                  },
                  application: {
                    methode: 'Utiliser deux suites adjacentes pour encadrer une valeur inconnue',
                    avantage: 'Permet d\'obtenir des approximations de plus en plus précises'
                  },
                  exemple_mauritanien: 'Pour estimer la population maximale de Nouakchott, on peut utiliser deux suites adjacentes: une suite croissante qui sous-estime et une suite décroissante qui surestime, et leur limite commune donne la capacité maximale'
                }
              },
              module_9: {
                titre: 'Méthodes Bac (plan d\'attaque)',
                notion: 'Stratégies pour résoudre les exercices types',
                contenu: {
                  plan_etude_standard: {
                    etape_1: 'Calculer les premiers termes pour comprendre le comportement',
                    etape_2: 'Déterminer la nature de la suite (arithmétique, géométrique, récurrente)',
                    etape_3: 'Étudier la monotonie (calculer u_{n+1} - u_n)',
                    etape_4: 'Déterminer si la suite est bornée (majorée/minorée)',
                    etape_5: 'Prouver la convergence si possible (théorème de convergence monotone)',
                    etape_6: 'Calculer la limite (point fixe pour les suites récurrentes)',
                    etape_7: 'Exprimer le terme général si possible',
                    etape_8: 'Calculer des sommes si demandé'
                  },
                  techniques_cles: {
                    transformation: 'Pour u_{n+1} = a×u_n + b, poser v_n = u_n - b/(1-a)',
                    recurrence: 'Toujours vérifier l\'initialisation avant l\'hérédité',
                    monotonie: 'Préférer la méthode de la différence (plus universelle)',
                    convergence: 'Vérifier d\'abord la monotonie, puis les bornes'
                  }
                }
              },
              module_10: {
                titre: 'Exercices corrigés (type bac)',
                notion: 'Application complète des méthodes',
                contenu: {
                  exercice_1_suite_recurrente: {
                    enonce: 'Étudier (u_n) définie par u_0 = 1 et u_{n+1} = (u_n + 2)/3',
                    correction: {
                      premiers_termes: 'u_0 = 1, u_1 = 1, u_2 = 1 (suite constante)',
                      recurrence: 'Par récurrence: u_n ≥ 1 pour tout n',
                      monotonie: 'u_{n+1} - u_n = 2(1 - u_n)/3 ≤ 0, donc décroissante',
                      convergence: 'Décroissante et minorée par 1, donc convergente',
                      limite: 'L = (L + 2)/3 ⇒ L = 1',
                      transformation: 'v_n = u_n - 1 est géométrique de raison 1/3',
                      terme_general: 'v_n = 0, donc u_n = 1 pour tout n'
                    }
                  },
                  exercice_2_suite_arithmetico_geometrique: {
                    enonce: 'Étudier (u_n) définie par u_0 = 5 et u_{n+1} = 2u_n - 3',
                    correction: {
                      premiers_termes: 'u_0 = 5, u_1 = 7, u_2 = 11, u_3 = 19',
                      transformation: 'v_n = u_n - 3 est géométrique de raison 2',
                      terme_general: 'v_n = 2 × 2^n = 2^(n+1), donc u_n = 2^(n+1) + 3',
                      limite: 'lim_{n→+∞} u_n = +∞ (car 2 > 1)'
                    }
                  },
                  exercice_3_convergence: {
                    enonce: 'Montrer que (u_n) définie par u_0 = 2 et u_{n+1} = √(u_n + 1) converge',
                    correction: {
                      recurrence: 'Par récurrence: u_n > 0 pour tout n',
                      monotonie: 'u_{n+1}² - u_n² = u_n + 1 - u_n². Étude du signe selon u_n',
                      bornes: 'u_n est majorée (par exemple par 2)',
                      convergence: 'Croissante et majorée, donc convergente',
                      limite: 'L = √(L + 1) ⇒ L² = L + 1 ⇒ L = (1+√5)/2'
                    }
                  }
                }
              }
            }
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            {
              type: 'calcul',
              question: `**Partie 1) Calculer u_1, u_2 et u_3**
              Suite: u_0 = 5 et u_{n+1} = 2u_n - 3`,
              answer: `**SOLUTION COMPLÈTE - Partie 1 (0.75 point)**

**CALCUL DES PREMIERS TERMES:**
• u_0 = 5
• u_1 = 2u_0 - 3 = 2×5 - 3 = 10 - 3 = **7**
• u_2 = 2u_1 - 3 = 2×7 - 3 = 14 - 3 = **11**
• u_3 = 2u_2 - 3 = 2×11 - 3 = 22 - 3 = **19**

**RÉPONSE FINALE:**
u_1 = 7, u_2 = 11, u_3 = 19

**Exemple Mauritanien :** Imagine que u_n représente le nombre d'étudiants dans une école à Nouakchott chaque année. Si on commence avec 5 étudiants (u_0 = 5) et que chaque année le nombre double puis on retire 3 étudiants qui partent, alors après 1 an on a 7 étudiants, après 2 ans on en a 11, et après 3 ans on en a 19.`,
              difficulty: 'Facile'
            },
            {
              type: 'demonstration',
              question: `**Partie 2) Montrer que v_n = u_n - 3 est une suite géométrique**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2 (0.75 point)**

**DÉMONSTRATION:**

**1. Expression de v_{n+1}:**
v_{n+1} = u_{n+1} - 3

**2. Utiliser la relation de récurrence:**
Comme u_{n+1} = 2u_n - 3:
v_{n+1} = (2u_n - 3) - 3 = 2u_n - 6 = 2(u_n - 3) = 2v_n

**3. CONCLUSION:**
v_{n+1} = 2v_n pour tout n ∈ ℕ
Donc **(v_n) est une suite géométrique de raison q = 2**

**VALEUR INITIALE:**
v_0 = u_0 - 3 = 5 - 3 = 2

**Exemple Mauritanien :** Cette transformation est similaire à ajuster un prix en ouguiyas. Si u_n représente le prix d'un produit et qu'on soustrait 3 ouguiyas (le coût fixe), alors v_n = u_n - 3 représente le profit. Le fait que (v_n) soit géométrique signifie que le profit double chaque année, ce qui est typique d'une croissance exponentielle.`,
              difficulty: 'Moyen'
            },
            {
              type: 'demonstration',
              question: `**Partie 3) Exprimer u_n en fonction de n**`,
              answer: `**SOLUTION COMPLÈTE - Partie 3 (0.75 point)**

**TERME GÉNÉRAL DE (v_n):**
Comme (v_n) est géométrique de raison q = 2 et de premier terme v_0 = 2:
v_n = v_0 × q^n = 2 × 2^n = 2^(n+1)

**EXPRESSION DE u_n:**
Comme v_n = u_n - 3, on a:
u_n = v_n + 3 = 2^(n+1) + 3

**RÉPONSE FINALE:**
**u_n = 2^(n+1) + 3** pour tout n ∈ ℕ

**Exemple Mauritanien :** Si cette suite modélise la croissance d'un investissement à Nouakchott, alors après n années, l'investissement vaut 2^(n+1) + 3 ouguiyas. Par exemple, après 5 ans: u_5 = 2^6 + 3 = 64 + 3 = 67 ouguiyas. Cette croissance exponentielle est caractéristique des investissements à intérêts composés.`,
              difficulty: 'Moyen'
            },
            {
              type: 'demonstration',
              question: `**Partie 4) Calculer la limite de (u_n)**`,
              answer: `**SOLUTION COMPLÈTE - Partie 4 (0.75 point)**

**LIMITE:**
u_n = 2^(n+1) + 3

Quand n → +∞:
• 2^(n+1) → +∞ (car 2 > 1)
• Donc u_n = 2^(n+1) + 3 → +∞

**RÉPONSE FINALE:**
**lim_{n→+∞} u_n = +∞**

**Exemple Mauritanien :** Cette limite signifie que si on continue indéfiniment, la valeur tend vers l'infini. Dans le contexte mauritanien, cela pourrait représenter une croissance démographique non contrôlée à Nouakchott, où la population continuerait à croître indéfiniment si aucune mesure n'est prise.`,
              difficulty: 'Facile'
            },
            // EXERCICES D'ENTRAÎNEMENT - SUITES BAC D
            {
              type: 'calcul',
              question: `**EXERCICE D'ENTRAÎNEMENT 1 - Suites**

On considère la suite (u_n) définie par u_0 = 3 et pour tout n ∈ ℕ: u_{n+1} = 3u_n - 2

1. Calculer u_1, u_2 et u_3.
2. Montrer que la suite (v_n) définie par v_n = u_n - 1 est une suite géométrique.
3. En déduire l'expression de u_n en fonction de n.
4. Calculer la limite de (u_n) quand n tend vers +∞.`,
              answer: `**RÉPONSES RAPIDES:**
1. u_1 = 7, u_2 = 19, u_3 = 55.
2. v_n = u_n - 1 est géométrique de raison 3, v_0 = 2.
3. v_n = 2 × 3^n, donc u_n = 2 × 3^n + 1.
4. lim_{n→+∞} u_n = +∞ (car 3 > 1).`,
              difficulty: 'Moyen'
            },
            {
              type: 'calcul',
              question: `**EXERCICE D'ENTRAÎNEMENT 2 - Suites**

On considère la suite (u_n) définie par u_0 = 4 et pour tout n ∈ ℕ: u_{n+1} = (1/2)u_n + 2

1. Calculer u_1, u_2 et u_3.
2. Montrer que la suite (v_n) définie par v_n = u_n - 4 est une suite géométrique.
3. En déduire l'expression de u_n en fonction de n.
4. Calculer la limite de (u_n) quand n tend vers +∞.`,
              answer: `**RÉPONSES RAPIDES:**
1. u_1 = 4, u_2 = 4, u_3 = 4 (suite constante).
2. v_n = u_n - 4 est géométrique de raison 1/2, v_0 = 0.
3. v_n = 0, donc u_n = 4 pour tout n.
4. lim_{n→+∞} u_n = 4 (suite constante).`,
              difficulty: 'Moyen'
            },
            {
              type: 'demonstration',
              question: `**EXERCICE D'ENTRAÎNEMENT 3 - Suites**

On considère la suite (u_n) définie par u_0 = 2 et pour tout n ∈ ℕ: u_{n+1} = 4u_n - 6

1. Calculer u_1, u_2 et u_3.
2. Montrer que la suite (v_n) définie par v_n = u_n - 2 est une suite géométrique.
3. En déduire l'expression de u_n en fonction de n.
4. Calculer la limite de (u_n) quand n tend vers +∞.`,
              answer: `**RÉPONSES RAPIDES:**
1. u_1 = 2, u_2 = 2, u_3 = 2 (suite constante).
2. v_n = u_n - 2 est géométrique de raison 4, v_0 = 0.
3. v_n = 0, donc u_n = 2 pour tout n.
4. lim_{n→+∞} u_n = 2 (suite constante).`,
              difficulty: 'Moyen'
            }
          ],
          difficulty: 'Moyen',
          estimatedTime: 25
        }
