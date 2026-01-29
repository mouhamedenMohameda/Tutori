import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_D_LOGARITHMES: CurriculumSection = {
          id: 'bac-d-2023-ex9',
          title: 'Logarithmes et exponentielles',
          description: 'Logarithmes et exponentielles complets: ln (définition, variation, limites, propriétés, dérivées), exp (définition, propriétés, limites, dérivées), puissances a^b, comparaisons de croissance, méthodes Bac, exercices corrigés. 6 modules progressifs.',
          concepts: [
            'Logarithme népérien ln', 'Définition de ln', 'Primitive de 1/x', 'Domaine de ln', 'Variation de ln',
            'Signe de ln', 'Limites usuelles de ln', 'Propriétés algébriques de ln', 'Dérivée de ln', 'Primitive avec ln',
            'Équation ln(x) = m', 'Nombre e', 'Exponentielle exp', 'Fonction réciproque', 'Propriétés de exp',
            'Limites de exp', 'Dérivée de exp', 'Primitive de exp', 'Puissance a^b', 'Exponentielle de base a',
            'Logarithme décimal', 'Comparaisons de croissance', 'Méthodes Bac', 'Plan d\'attaque', 'Équations avec ln',
            'Équations avec exp', 'Étude de fonction avec ln/exp', 'Asymptotes', 'Position relative'
          ],
          objectives: [
            'Maîtriser la définition et les propriétés fondamentales de ln',
            'Calculer des limites avec logarithmes (formes usuelles)',
            'Utiliser les propriétés algébriques de ln (avec conditions)',
            'Dériver et intégrer des fonctions avec ln',
            'Maîtriser la définition et les propriétés de exp',
            'Calculer des limites avec exponentielles',
            'Dériver et intégrer des fonctions avec exp',
            'Comprendre les puissances a^b et exponentielles de base a',
            'Comparer les croissances (exp, puissances, ln)',
            'Appliquer les méthodes Bac pour résoudre équations et inéquations',
            'Étudier complètement une fonction avec ln/exp'
          ],
          content: {
            enonce_complet: `**EXERCICE TYPE BAC - LOGARITHMES ET EXPONENTIELLES COMPLETS**

On considère plusieurs problèmes sur les logarithmes et exponentielles.

**PARTIE I - LOGARITHME NÉPÉRIEN (Module 1)**
1. Définition, variation, signe, limites usuelles.
2. Propriétés algébriques (avec conditions).
3. Dérivées et primitives.
4. Équations type ln(x) = m.

**PARTIE II - EXPONENTIELLE (Module 2)**
5. Définition (réciproque de ln), propriétés.
6. Limites et croissance.
7. Dérivées et primitives.

**PARTIE III - PUISSANCES (Module 3)**
8. Définition a^b = exp(b ln(a)).
9. Règles de calcul.
10. Fonction x ↦ a^x, logarithme décimal.

**PARTIE IV - COMPARAISONS ET MÉTHODES (Modules 4-5)**
11. Comparaisons de croissance (exp, puissances, ln).
12. Méthodes Bac: plan d'attaque pour équations et études de fonctions.

**PARTIE V - EXERCICES CORRIGÉS (Module 6)**
13. Exercices type bac avec corrections complètes.`,
            methodes_enseignement:
              `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté au profil littéraire: EXERCICES PLUS FACILES que Bac C
5. Insister sur les conditions (domaine, signe) pour ln et exp
6. Faire pratiquer les techniques de calcul (limites, dérivées, primitives)
7. Illustrer avec des exemples concrets et progressifs
8. Intégrer les techniques des exercices corrigés dans les questions générées
9. Utiliser le plan d'étude standard pour les fonctions (domaine, limites, dérivée, variations, asymptotes)`,
            modules: {
              module_1: {
                titre: 'Logarithme népérien ln',
                notion: 'Fondamentaux du logarithme népérien',
                contenu: {
                  definition: {
                    enonce: 'ln est la primitive de 1/x sur (0, +∞) telle que ln(1) = 0',
                    domaine: 'x > 0',
                    continuite: 'ln est continue et dérivable sur (0, +∞)'
                  },
                  variation_et_signe: {
                    croissance: 'ln est strictement croissante sur (0, +∞)',
                    signe: [
                      'si 0 < x < 1 alors ln(x) < 0',
                      'si x = 1 alors ln(x) = 0',
                      'si x > 1 alors ln(x) > 0'
                    ]
                  },
                  limites_usuelles: [
                    'quand x → 0⁺, ln(x) → −∞',
                    'quand x → +∞, ln(x) → +∞',
                    'quand x → +∞, ln(x)/x → 0',
                    'quand x → 1, ln(x)/(x−1) → 1',
                    'quand h → 0, ln(1+h)/h → 1'
                  ],
                  proprietes_algebriques: {
                    conditions: 'Toujours vérifier: a>0, b>0',
                    formules: [
                      'ln(ab) = ln(a) + ln(b)',
                      'ln(a/b) = ln(a) − ln(b)',
                      'ln(1/b) = −ln(b)',
                      'ln(a^p) = p ln(a) (p entier)',
                      'ln(√a) = (1/2) ln(a)'
                    ]
                  },
                  derivees_primitives: {
                    derivee: '(ln x)\' = 1/x',
                    derivee_composee: '(ln(u(x)))\' = u\'(x) / u(x) (si u(x)>0)',
                    primitive_cle: '∫ u\'/u = ln|u| + C (on se demande toujours: u peut être négatif ?)'
                  },
                  equation_type: {
                    enonce: 'ln(x) = m a une unique solution sur (0,+∞): x = e^m',
                    nombre_e: 'e ≈ 2,718281828…'
                  }
                }
              },
              module_2: {
                titre: 'Exponentielle exp',
                notion: 'Fondamentaux de l\'exponentielle',
                contenu: {
                  definition: {
                    enonce: 'exp est la fonction réciproque de ln',
                    domaine: 'R',
                    signe: 'exp(x) > 0 pour tout x',
                    valeurs_remarquables: [
                      'exp(0)=1',
                      'exp(1)=e',
                      'exp(−1)=1/e'
                    ],
                    relations: [
                      'ln(exp(x)) = x',
                      'exp(ln(x)) = x (pour x>0)'
                    ]
                  },
                  proprietes: [
                    'exp(a+b) = exp(a)·exp(b)',
                    'exp(a−b) = exp(a)/exp(b)',
                    'exp(na) = (exp(a))^n (n entier)'
                  ],
                  limites_croissance: {
                    croissance: 'exp est strictement croissante sur R',
                    limites: [
                      'x→+∞ : exp(x)→+∞',
                      'x→−∞ : exp(x)→0',
                      'x→+∞ : exp(x)/x → +∞',
                      'h→0 : (e^h − 1)/h → 1'
                    ],
                    approche_locale: 'e^x ≈ 1 + x (près de 0)'
                  },
                  derivees_primitives: {
                    derivee: '(exp x)\' = exp x',
                    derivee_composee: '(e^{u(x)})\' = u\'(x)·e^{u(x)}',
                    primitive: '∫ e^{u(x)}u\'(x) dx = e^{u(x)} + C'
                  }
                }
              },
              module_3: {
                titre: 'Puissances a^b et exponentielle de base a',
                notion: 'Généralisation des puissances',
                contenu: {
                  definition_fondamentale: {
                    enonce: 'Pour a>0, on définit: a^b = exp(b ln(a))'
                  },
                  regles_calcul: {
                    conditions: 'a>0',
                    formules: [
                      'a^b · a^c = a^{b+c}',
                      'a^{−b} = 1/a^b',
                      '(a^b)^c = a^{bc}',
                      'ln(a^b) = b ln(a)'
                    ]
                  },
                  fonction_x_a_puissance_x: {
                    definition: 'a^x = exp(x ln a)',
                    derivee: '(a^x)\' = ln(a)·a^x',
                    variations: [
                      'si a>1 : a^x croît',
                      'si 0<a<1 : a^x décroît'
                    ]
                  },
                  logarithme_decimal: {
                    definition: 'Log(x) = ln(x)/ln(10)',
                    derivee: '(Log x)\' = 1/(x ln 10)'
                  }
                }
              },
              module_4: {
                titre: 'Comparaisons de croissance (ultra utile en limites)',
                notion: 'Hiérarchie des croissances à l\'infini',
                contenu: {
                  quand_x_tend_plus_infini: [
                    'exp(x) domine toute puissance: x^n·e^{−x} → 0',
                    'ln(x) est très lent: ln(x)/x^α → 0 (α>0)',
                    'exp(x)/x^n → +∞'
                  ],
                  illustration: 'Ordre de croissance: ln(x) << x^n << exp(x)'
                }
              },
              module_5: {
                titre: 'Méthodes Bac (plan d\'attaque)',
                notion: 'Stratégies pour résoudre les exercices type bac',
                contenu: {
                  pour_equation_inequation_avec_ln: {
                    domaine: 'Imposer argument > 0',
                    regles: [
                      'ln(A)=0 ⇔ A=1',
                      'ln(A)<0 ⇔ 0<A<1',
                      'ln(A)>0 ⇔ A>1'
                    ],
                    rappel: 'Ne jamais oublier: ln est croissante'
                  },
                  pour_equation_en_exp: {
                    methode: [
                      'Poser souvent t = e^x (donc t>0)',
                      'Résoudre le polynôme en t',
                      'Revenir à x = ln(t)'
                    ]
                  },
                  pour_etude_de_fonction: {
                    plan: [
                      'Domaine',
                      'Limites (bornes +∞/−∞ + points interdits)',
                      'Asymptotes (verticale/horizontale/oblique)',
                      'Dérivée, signe, variations',
                      'Position relative (étudier f(x) − (asymptote))'
                    ]
                  }
                }
              },
              module_6: {
                titre: 'Exercices corrigés (type bac)',
                notion: 'Application complète des méthodes',
                contenu: {
                  exercice_1_ln_et_signe: {
                    enonce: 'Résoudre: ln(x² + x + 1) = 0 et ln(x² + x + 1) < 0',
                    correction: {
                      domaine: 'x² + x + 1 > 0 pour tout x (discriminant Δ = 1−4 = −3 < 0)',
                      equation: 'ln(A)=0 ⇔ A=1 donc x² + x + 1 = 1 ⇔ x(x+1)=0 ⇒ x=0 ou x=−1',
                      inequation: 'ln(A)<0 ⇔ 0 < A < 1 donc x² + x + 1 < 1 ⇔ x(x+1) < 0 ⇒ x ∈ (−1, 0)'
                    }
                  },
                  exercice_2_equations_en_exp: {
                    enonce: 'Résoudre: (e^x − 1)(e^x − 2)=0, e^{−x²−12x−35} = 1, e^{2x} + e^x − 42 = 0',
                    correction: {
                      premiere: 'e^x=1 ⇒ x=0 ; ou e^x=2 ⇒ x=ln 2',
                      deuxieme: 'e^A=1 ⇔ A=0 donc −x²−12x−35=0 ⇔ (x+5)(x+7)=0 ⇒ x=−5 ou x=−7',
                      troisieme: 'Poser t=e^x>0 : t² + t − 42=0 ⇒ (t−6)(t+7)=0 donc t=6 ⇒ x=ln 6'
                    }
                  },
                  exercice_3_derivees: {
                    enonce: 'f(x)=ln(x²−1), g(x)=ln(cos x), h(x)=e^{x²+2x+1}, k(x)=e^{sin x}',
                    correction: {
                      f: 'Domaine: x²−1>0 ⇒ x<−1 ou x>1 ; f\'(x)= (2x)/(x²−1)',
                      g: 'Domaine: cos x > 0 ; g\'(x)= (−sin x)/(cos x) = −tan x',
                      h: 'h\'(x)= (2x+2)e^{x²+2x+1}',
                      k: 'k\'(x)= (cos x)e^{sin x}'
                    }
                  },
                  exercice_4_primitives: {
                    enonce: 'Trouver une primitive: tan x sur (−π/2, π/2), 1/(1+e^x) sur R, 1/3^x sur R',
                    correction: {
                      tan: 'tan x = sin x / cos x ⇒ ∫ tan x dx = −ln(cos x) + C',
                      fraction: '1/(1+e^x) = 1 − e^x/(1+e^x) ; primitive: x − ln(1+e^x) + C',
                      puissance: '1/3^x = 3^{−x} = e^{−x ln 3} ; primitive: −(1/ln 3)·3^{−x} + C'
                    }
                  },
                  exercice_5_etude_complete: {
                    enonce: 'Étudier f(x)= x − 1 + ln((x−2)/(x+2))',
                    correction: {
                      domaine: '(x−2)/(x+2) > 0 ⇒ x < −2 ou x > 2',
                      limites: [
                        'x→2⁺ : (x−2)/(x+2)→0⁺ ⇒ ln→−∞ ⇒ f→−∞',
                        'x→−2⁻ : (x−2)/(x+2)→+∞ ⇒ ln→+∞ ⇒ f→+∞',
                        'x→±∞ : ln((x−2)/(x+2)) = ln(1 − 4/(x+2)) → 0 donc f(x) ~ x−1'
                      ],
                      asymptotes: [
                        'Verticales: x=−2 et x=2',
                        'Oblique: y = x−1 (en +∞ et −∞)'
                      ],
                      derivee: 'f\'(x) = 1 + 4/(x²−4) = x²/(x²−4)',
                      variations: 'Sur le domaine, x²>0 et x²−4>0 donc f\'>0. f est strictement croissante sur (−∞,−2) et sur (2,+∞)',
                      position_relative: [
                        'pour x>2 : (x−2)/(x+2) < 1 ⇒ ln<0 ⇒ courbe en dessous',
                        'pour x<−2 : ratio > 1 ⇒ ln>0 ⇒ courbe au dessus'
                      ]
                    }
                  },
                  exercice_6_etude_rapide: {
                    enonce: 'Étudier g(x)=(x+1)² e^{−x}',
                    correction: {
                      domaine: 'R ; g(x)≥0',
                      limites: 'x→+∞ : g→0 ; x→−∞ : g→+∞',
                      derivee: 'g\' = e^{−x}(x+1)(1 − x)',
                      signe: 'décroît sur (−∞, −1), croît sur (−1, 1), décroît sur (1, +∞)',
                      extrema: 'minimum en x=−1 : g(−1)=0 ; maximum en x=1 : g(1)=4/e'
                    }
                  }
                }
              }
            }
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" est VIDE - l'IA génère les questions à partir du template ci-dessus
          // Template utilisé par l'IA:
          // - concepts: liste des concepts de logarithmes et exponentielles
          // - objectives: liste des objectifs pédagogiques
          // - content.modules: 6 modules détaillés (module_1 à module_6) avec titre, notion, contenu
          // - content.enonce_complet: énoncé type Bac (référence pour l'IA)
          // - content.methodes_enseignement: instructions pour l'IA
          // L'IA génère des VARIANTES créatives à chaque ouverture, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          // Chaque partie (1-6) correspond à un module (module_1 à module_6)
          // Niveau adapté au Bac D (littéraire) : exercices plus faciles que Bac C
          exercises: [],
          difficulty: 'Moyen',
          estimatedTime: 40
        }
