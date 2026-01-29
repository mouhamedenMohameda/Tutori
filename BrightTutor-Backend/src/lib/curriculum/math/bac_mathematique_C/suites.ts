import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_SUITES: CurriculumSection = {
          id: 'bac-2023-ex6'
          ,
          title: 'Exercice 6 - Suites (3 points)'
          ,
          description: 'Suites complètes: définition et vocabulaire, suites arithmétiques, suites géométriques, suites récurrentes, raisonnement par récurrence, monotonie et bornes, convergence et limites, suites adjacentes, méthodes Bac, exercices corrigés. Modules progressifs couvrant tout le programme.',
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
                  types: {
                    explicite: "u_n = f(n) où f est une fonction",
                    recurrente: "u_{n+1} = f(u_n) avec u_0 donné"
                  },
                  exemple_mauritanien: "La population de Nouakchott chaque année forme une suite: P_0, P_1, P_2, ..."
                },
                raisonnement_recurrence: {
                  definition: "Méthode de démonstration en trois étapes",
                  etapes: {
                    initialisation: "Vérifier que la propriété est vraie pour n = 0 (ou n = 1)",
                    heredite: "Supposer la propriété vraie pour un entier n fixé (hypothèse de récurrence), puis montrer qu'elle est vraie pour n+1",
                    conclusion: "Par le principe de récurrence, la propriété est vraie pour tout n ∈ ℕ"
                  },
                  exemple_mauritanien: "Pour montrer que la dette d'un État double chaque année, on vérifie d'abord pour l'année 0, puis on suppose que c'est vrai pour l'année n et on montre que c'est vrai pour l'année n+1"
                },
                monotonie_suite: {
                  definition: "Étude du sens de variation d'une suite",
                  croissante: "u_{n+1} ≥ u_n pour tout n (strictement si >)",
                  decroissante: "u_{n+1} ≤ u_n pour tout n (strictement si <)",
                  methode_etude: {
                    difference: "Calculer u_{n+1} - u_n et étudier son signe",
                    rapport: "Pour suite à termes positifs, calculer u_{n+1}/u_n et comparer à 1"
                  },
                  exemple_mauritanien: "Si le nombre d'étudiants à l'université de Nouakchott augmente chaque année, la suite est croissante"
                },
                suite_majoree_minoree: {
                  definition: {
                    majoree: "Il existe M ∈ ℝ tel que u_n ≤ M pour tout n",
                    minoree: "Il existe m ∈ ℝ tel que u_n ≥ m pour tout n",
                    bornee: "La suite est à la fois majorée et minorée"
                  },
                  exemple_mauritanien: "Le nombre de places dans une salle de classe est majoré par la capacité maximale (ex: 50 places)"
                },
                convergence_suite: {
                  definition: "Une suite (u_n) converge vers L ∈ ℝ si lim_{n→+∞} u_n = L",
                  proprietes_convergence: {
                    croissante_majoree: "Toute suite croissante et majorée converge",
                    decroissante_minoree: "Toute suite décroissante et minorée converge",
                    monotone_bornee: "Toute suite monotone et bornée converge",
                    critere_distance: "Si, à partir d'un certain rang, |u_n - l| ≤ α_n et si lim_{n→+∞} α_n = 0, alors lim_{n→+∞} u_n = l",
                    theoreme_gendarmes: "Si, à partir d'un certain rang, u_n ≤ v_n ≤ w_n et si lim_{n→+∞} u_n = lim_{n→+∞} w_n = l, alors lim_{n→+∞} v_n = l (Théorème des gendarmes)"
                  },
                  calcul_limite_recurrente: {
                    methode: "Si u_n → L et u_{n+1} = f(u_n), alors L vérifie L = f(L) (point fixe)",
                    resolution: "Résoudre l'équation L = f(L) pour trouver la limite"
                  },
                  suites_adjacentes: {
                    definition: "Deux suites (u_n) et (v_n) sont adjacentes si et seulement si: l'une est croissante, l'autre est décroissante, et elles convergent vers la même limite",
                    proprietes: {
                      encadrement: "Si (u_n) croissante et (v_n) décroissante sont adjacentes avec lim u_n = lim v_n = l, alors pour tout n ∈ ℕ: u_0 ≤ u_1 ≤ ... ≤ u_n ≤ l ≤ v_n ≤ ... ≤ v_1 ≤ v_0",
                      equivalences: "Si (u_n) et (v_n) sont adjacentes, alors: (u_n) et (v_n) ont même limite ⇔ lim_{n→+∞} (u_n - v_n) = 0 ⇔ lim_{n→+∞} u_n/v_n = 1"
                    },
                    exemple_mauritanien: "Pour estimer la population maximale de Nouakchott, on peut utiliser deux suites adjacentes qui encadrent la valeur réelle"
                  },
                  exemple_mauritanien: "Si la population de Nouakchott suit une croissance limitée, elle converge vers une capacité maximale"
                },
                raisonnement_recurrence_detaille: {
                  principe: "On considère une propriété P(n) qui dépend d'un entier naturel n. Soit n_0 un entier naturel. Si P(n_0) est vraie, et si pour tout entier n ≥ n_0, P(n) implique P(n+1), alors P(n) est vraie pour tout entier naturel n ≥ n_0",
                  etapes_demonstration: {
                    initialisation: "On montre que P(n_0) est vraie",
                    heredite: "On montre que P(n) vraie ⇒ P(n+1) vraie (pour tout n ≥ n_0)",
                    conclusion: "Pour tout entier n ≥ n_0, P(n) est vraie"
                  },
                  exemple_mauritanien: "Pour prouver qu'une propriété démographique est vraie chaque année à Nouakchott, on vérifie d'abord pour l'année 0, puis on montre que si c'est vrai pour l'année n, alors c'est vrai pour l'année n+1"
                },
                suite_arithmetique: {
                  definition: "u_{n+1} = u_n + r où r est la raison",
                  terme_general: "u_n = u_0 + n×r",
                  somme: "S_n = ∑_{i=0}^{n} u_i = (n+1)(u_0 + u_n)/2",
                  exemple_mauritanien: "Un élève économise 500 ouguiyas chaque mois: suite arithmétique de raison 500"
                },
                suite_geometrique: {
                  definition: "u_{n+1} = q×u_n où q est la raison",
                  terme_general: "u_n = u_0 × q^n",
                  remarques: {
                    forme_explicite: "Toute suite définie par u_n = a×q^n (où a, q ∈ ℝ) est une suite géométrique de raison q et de premier terme a",
                    reconnaissance: "Si le rapport u_{n+1}/u_n est constant pour tout n (avec u_n ≠ 0), alors la suite est géométrique de raison q = u_{n+1}/u_n"
                  },
                  somme: {
                    q_different_1: "S_n = ∑_{i=0}^{n} u_i = u_0 × (1 - q^(n+1))/(1 - q)",
                    q_egal_1: "S_n = ∑_{i=0}^{n} u_i = (n+1) × u_0"
                  },
                  convergence: {
                    q_absolu_inferieur_1: "Si |q| < 1, alors lim_{n→+∞} u_n = 0",
                    q_superieur_1: "Si q > 1 et u_0 > 0, alors lim_{n→+∞} u_n = +∞"
                  },
                  exemple_mauritanien: "Un investissement de 1000 ouguiyas à 10% par an: suite géométrique de raison 1.1"
                },
                transformation_suite_recurrente: {
                  methode: "Pour u_{n+1} = a×u_n + b avec a ≠ 1, poser v_n = u_n - α où α = b/(1-a) est le point fixe",
                  resultat: "La suite (v_n) est géométrique de raison a",
                  application: "En déduire v_n = v_0 × a^n, puis u_n = v_n + α"
                }
              },
              methodes: {
                demontrer_recurrence: {
                  etape_1: "Initialisation: Vérifier pour n = 0",
                  etape_2: "Hérédité: Supposer vrai pour n, montrer pour n+1",
                  etape_3: "Conclusion: Par récurrence, vrai pour tout n"
                },
                etudier_monotonie: {
                  methode_difference: "Calculer u_{n+1} - u_n et déterminer son signe",
                  methode_rapport: "Pour termes positifs, calculer u_{n+1}/u_n et comparer à 1"
                },
                prouver_convergence: {
                  etape_1: "Montrer que la suite est monotone (croissante ou décroissante)",
                  etape_2: "Montrer que la suite est bornée (majorée si décroissante, minorée si croissante)",
                  etape_3: "Appliquer le théorème de convergence monotone",
                  etape_4: "Calculer la limite en résolvant L = f(L)"
                }
              },
              applications_pratiques: {
                croissance_demographique: {
                  modele: "P_n = P_0 × (1 + t)^n où t est le taux de croissance",
                  exemple_mauritanien: "Nouakchott: P_n = 1000000 × (1.03)^n avec 3% de croissance annuelle"
                },
                interet_compose: {
                  modele: "C_n = C_0 × (1 + r)^n",
                  exemple_mauritanien: "Investissement de 5000 ouguiyas à 5%: C_n = 5000 × (1.05)^n"
                },
                convergence_population: {
                  modele: "P_{n+1} = a×P_n + b avec |a| < 1",
                  limite: "La population converge vers L = b/(1-a)",
                  exemple_mauritanien: "Si la croissance démographique ralentit, la population converge vers une capacité maximale"
                }
              }
            },
            enonce_complet: `On considère la suite (u_n) définie par u_0 = 1 et pour tout n ∈ ℕ : u_{n+1} = (u_n + 2)/3
1. a) Calculer u_1, u_2 et u_3. (0.5pt)
b) Démontrer par récurrence que pour tout n ∈ ℕ : u_n > 1. (0.5pt)
2. a) Montrer que la suite (u_n) est décroissante. (0.5pt)
b) En déduire que la suite (u_n) est convergente et déterminer sa limite. (0.5pt)
3. On considère la suite (v_n) définie par v_n = u_n - 1 pour tout n ∈ ℕ.
a) Montrer que (v_n) est une suite géométrique dont on précisera la raison. (0.5pt)
b) Exprimer v_n puis u_n en fonction de n. (0.5pt)
4. a) Calculer la somme S_n = u_0 + u_1 + ... + u_n pour tout n ∈ ℕ. (0.5pt)
b) En déduire la limite de S_n quand n tend vers +∞. (0.5pt)
5. Application: On modélise la population d'une ville par cette suite. Interpréter les résultats obtenus. (0.5pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté au niveau Bac C: EXERCICES TRÈS DIFFICILES (plus difficiles que Bac D)
5. Insister sur les techniques de calcul (termes généraux, sommes, limites)
6. Faire pratiquer les méthodes standards (récurrence, monotonie, convergence)
7. Illustrer avec des exemples concrets et progressifs
8. Intégrer les techniques des exercices corrigés dans les questions générées
9. Utiliser le plan d'étude standard pour les suites (premiers termes, nature, monotonie, bornes, convergence)
10. Générer des exercices de niveau DIFFICILE/TRÈS DIFFICILE (pas faciles comme Bac D)
11. **Contextualisation Mauritanienne :** Utiliser des exemples de croissance démographique (Nouakchott), d'investissements en ouguiyas, de populations qui convergent vers une capacité maximale
12. **Erreurs Courantes :** Oubli de l'initialisation dans la récurrence, confusion entre majorée et minorée, erreur dans le calcul du point fixe, confusion entre arithmétique et géométrique
13. **Astuces :** Pour trouver le point fixe, résoudre α = f(α). Pour la monotonie, toujours calculer u_{n+1} - u_n. Pour reconnaître une suite géométrique, vérifier que u_{n+1}/u_n est constant`,
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
              question: `**Partie 1a) Calculer u_1, u_2 et u_3**
Suite définie par: u_0 = 1 et u_{n+1} = (u_n + 2)/3`,
              answer: `**SOLUTION COMPLÈTE - Partie 1a (0.5 point)**

**CALCUL DES PREMIERS TERMES:**
u_0 = 1 (donné)
u_1 = (u_0 + 2)/3 = (1 + 2)/3 = 3/3 = **1**
u_2 = (u_1 + 2)/3 = (1 + 2)/3 = 3/3 = **1**
u_3 = (u_2 + 2)/3 = (1 + 2)/3 = 3/3 = **1**

**RÉPONSE FINALE:**
u_1 = **1**, u_2 = **1**, u_3 = **1**

**OBSERVATION:** La suite semble constante égale à 1.

**Exemple Mauritanien :** Si cette suite représente le nombre d'étudiants dans une classe à Nouakchott (en milliers), alors u_n = 1 signifie qu'il y a toujours 1000 étudiants, ce qui indique une stabilité démographique dans cette classe.`,
              difficulty: 'Facile',
            },
            {
              type: 'demonstration',
              question: `**Partie 1b) Démontrer par récurrence que pour tout n ∈ ℕ : u_n > 1**`,
              answer: `**SOLUTION COMPLÈTE - Partie 1b (0.5 point)**

**RAISONNEMENT PAR RÉCURRENCE:**

**PROPRIÉTÉ À DÉMONTRER:** Pour tout n ∈ ℕ : u_n ≥ 1
(Note: Comme u_0 = 1, on démontre u_n ≥ 1 plutôt que u_n > 1)

**ÉTAPE 1 - INITIALISATION (n = 0):**
u_0 = 1, donc u_0 ≥ 1 ✓
La propriété est vraie au rang 0.

**ÉTAPE 2 - HÉRÉDITÉ:**
Supposons que pour un entier n fixé, on ait u_n ≥ 1 (hypothèse de récurrence).
Montrons que u_{n+1} ≥ 1.

u_{n+1} = (u_n + 2)/3

Comme u_n ≥ 1 (hypothèse de récurrence), on a:
u_n + 2 ≥ 1 + 2 = 3

Donc: u_{n+1} = (u_n + 2)/3 ≥ 3/3 = 1

La propriété est donc vraie au rang n+1.

**ÉTAPE 3 - CONCLUSION:**
Par le principe de récurrence, pour tout n ∈ ℕ : u_n ≥ 1.

**Exemple Mauritanien :** Ce raisonnement par récurrence est similaire à prouver qu'une population à Nouakchott reste toujours supérieure ou égale à un seuil minimum. Si la population initiale est de 1 million d'habitants et que chaque année elle reste au moins égale à ce niveau, alors par récurrence, elle restera toujours ≥ 1 million.`,
              difficulty: 'Moyen',
            },
            {
              type: 'demonstration',
              question: `**Partie 2a) Montrer que la suite (u_n) est décroissante**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2a (0.5 point)**
**DÉFINITION:** Une suite (u_n) est décroissante si pour tout n ∈ ℕ : u_{n+1} ≤ u_n
**MÉTHODE:** Comparer u_{n+1} - u_n
u_{n+1} - u_n = (u_n + 2)/3 - u_n
= (u_n + 2 - 3u_n)/3
= (2 - 2u_n)/3
= 2(1 - u_n)/3
**ÉTUDE DU SIGNE:**
D'après la partie 1b), on sait que u_n > 1 pour tout n.
Donc: 1 - u_n < 0
Par conséquent: u_{n+1} - u_n = 2(1 - u_n)/3 < 0
**CONCLUSION:** Pour tout n ∈ ℕ : u_{n+1} ≤ u_n
La suite (u_n) est **décroissante** (et même constante puisque tous les termes valent 1).

**Exemple Mauritanien :** Si cette suite représente le taux de chômage à Nouakchott (en pourcentage), alors une suite décroissante signifie que le chômage diminue ou reste stable, ce qui est positif pour l'économie mauritanienne.`,
              difficulty: 'Facile',
            },
            {
              type: 'calcul',
              question: `**Partie 2b) En déduire que la suite (u_n) est convergente et déterminer sa limite**`,
              answer: `**SOLUTION COMPLÈTE - Partie 2b (0.5 point)**
**CONVERGENCE:**
D'après la partie 2a), (u_n) est décroissante.
D'après la partie 1b), (u_n) est minorée par 1 (ou u_n > 1).
**Théorème:** Toute suite décroissante et minorée est convergente.
Donc (u_n) est **convergente** vers une limite L.
**CALCUL DE LA LIMITE:**
Si u_n → L, alors u_{n+1} → L également.
De la relation: u_{n+1} = (u_n + 2)/3
En passant à la limite: L = (L + 2)/3
3L = L + 2
3L - L = 2
2L = 2
**L = 1**
**VÉRIFICATION:** Comme u_n > 1 et la suite est décroissante, elle converge vers 1 (par valeurs supérieures).
**RÉPONSE FINALE:**
La suite (u_n) est **convergente** et sa limite est **L = 1**.

**Exemple Mauritanien :** Cette convergence vers 1 peut représenter une population qui se stabilise à 1 million d'habitants à Nouakchott, après une période de croissance ou de décroissance. C'est un exemple de capacité de charge démographique.`,
              difficulty: 'Moyen',
            },
            {
              type: 'demonstration',
              question: `**Partie 3a) Montrer que (v_n) est une suite géométrique dont on précisera la raison**
où v_n = u_n - 1`,
              answer: `**SOLUTION COMPLÈTE - Partie 3a (0.5 point)**
**DÉFINITION:** (v_n) est géométrique s'il existe un réel q tel que v_{n+1} = q × v_n
**CALCUL DE v_{n+1}:**
v_n = u_n - 1, donc u_n = v_n + 1
v_{n+1} = u_{n+1} - 1
Or: u_{n+1} = (u_n + 2)/3 = ((v_n + 1) + 2)/3 = (v_n + 3)/3
Donc: v_{n+1} = (v_n + 3)/3 - 1
= (v_n + 3 - 3)/3
= v_n/3
**CONCLUSION:**
v_{n+1} = (1/3) × v_n
La suite (v_n) est **géométrique de raison q = 1/3**.`,
              difficulty: 'Moyen',
            },
            {
              type: 'calcul',
              question: `**Partie 3b) Exprimer v_n puis u_n en fonction de n**`,
              answer: `**SOLUTION COMPLÈTE - Partie 3b (0.5 point)**
**EXPRESSION DE v_n:**
Comme (v_n) est géométrique de raison q = 1/3, on a:
v_n = v_0 × q^n
**Calcul de v_0:**
v_0 = u_0 - 1 = 1 - 1 = 0
**Donc:** v_n = 0 × (1/3)^n = **0**
**EXPRESSION DE u_n:**
u_n = v_n + 1 = 0 + 1 = **1**
**VÉRIFICATION:** Cela confirme que u_n = 1 pour tout n, ce qui était visible dès le début.
**RÉPONSE FINALE:**
v_n = **0** pour tout n ∈ ℕ
u_n = **1** pour tout n ∈ ℕ

**Exemple Mauritanien :** Cette suite constante modélise une situation d'équilibre à Nouakchott. Par exemple, si u_n représente le nombre d'écoles (en milliers) et que ce nombre reste stable à 1 (soit 1000 écoles), alors v_n = u_n - 1 = 0 représente l'écart par rapport à cet équilibre, qui reste toujours nul.`,
              difficulty: 'Facile',
            },
            {
              type: 'calcul',
              question: `**Partie 4a) Calculer la somme S_n = u_0 + u_1 + ... + u_n pour tout n ∈ ℕ**`,
              answer: `**SOLUTION COMPLÈTE - Partie 4a (0.5 point)**
**CALCUL DE S_n:**
D'après la partie 3b, on sait que u_n = 1 pour tout n ∈ ℕ.

**SOMME:**
S_n = u_0 + u_1 + ... + u_n
S_n = 1 + 1 + ... + 1 (n+1 termes)
S_n = **(n+1) × 1 = n+1**

**VÉRIFICATION:**
- Pour n = 0: S_0 = u_0 = 1 = 0+1 ✓
- Pour n = 1: S_1 = u_0 + u_1 = 1 + 1 = 2 = 1+1 ✓
- Pour n = 2: S_2 = u_0 + u_1 + u_2 = 1 + 1 + 1 = 3 = 2+1 ✓

**RÉPONSE FINALE:**
Pour tout n ∈ ℕ: **S_n = n+1**

**Exemple Mauritanien :** Si u_n représente le nombre d'étudiants (en milliers) à Nouakchott chaque année, alors S_n représente le total cumulé sur n+1 années. Comme le nombre reste constant à 1, le total cumulé augmente linéairement.`,
              difficulty: 'Facile',
            },
            {
              type: 'calcul',
              question: `**Partie 4b) En déduire la limite de S_n quand n tend vers +∞**`,
              answer: `**SOLUTION COMPLÈTE - Partie 4b (0.5 point)**
**CALCUL DE LA LIMITE:**
D'après la partie 4a, on a: S_n = n+1

**LIMITE:**
lim_{n→+∞} S_n = lim_{n→+∞} (n+1) = **+∞**

**INTERPRÉTATION:**
Comme la suite (u_n) est constante égale à 1, la somme S_n = n+1 croît indéfiniment quand n augmente.

**RÉPONSE FINALE:**
**lim_{n→+∞} S_n = +∞**

**Exemple Mauritanien :** Si on cumule le nombre d'étudiants sur toutes les années à Nouakchott, ce total tend vers l'infini car chaque année apporte 1000 étudiants supplémentaires.`,
              difficulty: 'Facile',
            },
            {
              type: 'demonstration',
              question: `**Partie 5a) Application: Interpréter les résultats obtenus dans le contexte d'une modélisation démographique**`,
              answer: `**SOLUTION COMPLÈTE - Partie 5a (0.25 point)**
**INTERPRÉTATION:**
Si on modélise la population d'une ville par la suite (u_n) où u_n représente le nombre d'habitants (en milliers) à l'année n:

**RÉSULTATS:**
- u_n = 1 pour tout n: La population reste constante à 1000 habitants chaque année
- La suite est décroissante (en fait constante): Pas de croissance démographique
- La limite est L = 1: La population se stabilise à 1000 habitants
- S_n = n+1: Le total cumulé sur n+1 années est (n+1) milliers

**CONCLUSION:**
Cette modélisation représente une ville avec une population stable, sans croissance ni décroissance.`,
              difficulty: 'Moyen',
            },
            {
              type: 'demonstration',
              question: `**Partie 5b) Application: Proposer une modification de la relation de récurrence pour obtenir une croissance démographique**`,
              answer: `**SOLUTION COMPLÈTE - Partie 5b (0.25 point)**
**MODIFICATION:**
Pour obtenir une croissance démographique, on pourrait modifier la relation de récurrence.

**EXEMPLE:**
Si on prend u_{n+1} = (u_n + 3)/3 au lieu de (u_n + 2)/3:
- Le point fixe serait L = 3/2 = 1.5
- La suite convergerait vers 1500 habitants
- On aurait une croissance vers une capacité maximale

**INTERPRÉTATION:**
La relation u_{n+1} = (u_n + 2)/3 représente un modèle où la population se stabilise rapidement à sa valeur initiale, sans croissance. Pour modéliser une croissance, il faudrait augmenter le terme constant dans la relation de récurrence.

**RÉPONSE FINALE:**
Pour obtenir une croissance démographique, on pourrait utiliser u_{n+1} = (u_n + k)/3 avec k > 2, ce qui donnerait une limite supérieure à la valeur initiale.`,
              difficulty: 'Moyen',
            }
          ],
          difficulty: 'Moyen',
          estimatedTime: 30
        }
