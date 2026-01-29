/**
 * Year 4 Math Curriculum - Mauritanie
 * Chapters 1-3: Nombres réels, Ordre et intervalles, Racines carrées
 */

export const YEAR4_MATH_CURRICULUM = {
  year: 4,
  subject: 'Mathématiques',
  title: 'Manuel de Mathématiques 4e AS (Quatrième Année Secondaire) - Mauritanie',
  methodology: 'Approche par découverte guidée: Activités préparatoires → Définitions → Propriétés → Exercices progressifs',
  
  chapters: [
    {
      id: 'ch1',
      title: 'NOMBRES RÉELS ET OPÉRATIONS',
      sections: [
        {
          id: 'ch1-s1',
          title: 'Ensembles ℕ, ℤ, 𝔻 - Les bases',
          description: 'Comprendre les premiers ensembles de nombres',
          concepts: ['Nombres naturels', 'Entiers relatifs', 'Décimaux', 'Inclusions'],
          objectives: [
            'Connaître les ensembles ℕ, ℤ, 𝔻',
            'Comprendre les inclusions ℕ⊂ℤ⊂𝔻',
            'Classer des nombres dans les bons ensembles',
            'Utiliser les notations mathématiques'
          ],
          content: {
            ensembles: {
              N: {
                nom: 'Nombres naturels (entiers positifs)',
                notation: 'ℕ = {0, 1, 2, 3, 4, ...}',
                caracteristiques: [
                  'Commencent à 0',
                  'Utilisés pour compter',
                  'Pas de négatifs, pas de fractions'
                ],
                exemples: '0, 7, 42, 1000, 25836'
              },
              Z: {
                nom: 'Entiers relatifs',
                notation: 'ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}',
                caracteristiques: [
                  'Entiers positifs et négatifs',
                  'Incluent le zéro',
                  'ℕ ⊂ ℤ (ℕ est inclus dans ℤ)'
                ],
                exemples: '-25, -1, 0, 3, 15, 100'
              },
              D: {
                nom: 'Nombres décimaux',
                notation: '𝔻 = {a/10ⁿ | a ∈ ℤ, n ∈ ℕ}',
                caracteristiques: [
                  'Nombres avec un nombre fini de décimales',
                  'Peuvent s\'écrire comme fraction décimale',
                  'ℤ ⊂ 𝔻'
                ],
                exemples: '0,5 = 5/10, 3,14 = 314/100, -2,7 = -27/10'
              }
            },
            schema_inclusions: {
              representation: 'ℕ ⊂ ℤ ⊂ 𝔻',
              explications: [
                'Tout naturel est un entier',
                'Tout entier est un décimal',
                'Mais l\'inverse n\'est pas vrai'
              ]
            },
            mauritanianContext: [
              'Comptage au marché (ℕ)',
              'Températures positives/négatives (ℤ)',
              'Prix en ouguiyas avec centimes (𝔻)',
              'Mesures précises (𝔻)'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces nombres: 5, -3, 2,5 dans ℕ, ℤ, 𝔻',
              answer: 'ℕ: 5 | ℤ: 5,-3 | 𝔻: 5,-3,2,5',
              difficulty: 'beginner'
            },
            {
              type: 'identification',
              question: 'Vrai ou faux: -7 ∈ ℕ?',
              answer: 'Faux, -7 ∈ ℤ mais -7 ∉ ℕ (les naturels sont positifs)',
              difficulty: 'beginner'
            },
            {
              type: 'application',
              question: 'Un commerçant perd 350 MRU. Quel ensemble représente cette situation?',
              answer: 'ℤ (car -350, les entiers relatifs incluent les négatifs)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch1-s2',
          title: 'Ensembles ℚ et ℝ - Rationnels et Réels',
          description: 'Découvrir les nombres rationnels et irrationnels',
          concepts: ['Rationnels', 'Irrationnels', 'Réels', 'Droite numérique'],
          objectives: [
            'Comprendre les nombres rationnels ℚ',
            'Découvrir les nombres irrationnels',
            'Connaître l\'ensemble ℝ des réels',
            'Situer les nombres sur la droite réelle'
          ],
          content: {
            introduction_geometrique: {
              diagonale_carre: {
                enonce: 'Carré de côté 1cm',
                calcul: 'Diagonale = √2 cm',
                observation: '√2 ne peut pas s\'écrire sous forme de fraction',
                conclusion: '√2 est un nombre irrationnel'
              }
            },
            ensembles: {
              Q: {
                nom: 'Nombres rationnels',
                notation: 'ℚ = {a/b | a ∈ ℤ, b ∈ ℤ*}',
                caracteristiques: [
                  'Quotients de deux entiers',
                  'Développement décimal fini ou périodique',
                  '𝔻 ⊂ ℚ'
                ],
                exemples: [
                  '2/3 = 0,666...',
                  '-5/7 = -0,714285714285...',
                  '0,333... = 1/3'
                ]
              },
              irrationnels: {
                definition: 'Nombres réels qui ne sont PAS rationnels',
                caracteristique: 'Développement décimal infini non périodique',
                exemples: {
                  racine_2: '√2 ≈ 1,41421356...',
                  pi: 'π ≈ 3,14159265...',
                  racine_3: '√3 ≈ 1,73205080...'
                }
              },
              R: {
                nom: 'Nombres réels',
                notation: 'ℝ = ℚ ∪ (nombres irrationnels)',
                caracteristiques: [
                  'Tous les points de la droite graduée',
                  'Rationnels + Irrationnels',
                  'ℚ ⊂ ℝ'
                ],
                exemples: '√2, π, -3, 4/5, 2,71828... (e)'
              }
            },
            schema_complet: 'ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ',
            mauritanianContext: [
              'Mesures précises (irrationnels en géométrie)',
              'Calculs financiers complexes',
              'Distances géographiques exactes',
              'Problèmes scientifiques'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Lesquels sont rationnels: √16, √3, 0,333..., π, 22/7?',
              answer: 'Rationnels: √16=4, 0,333...=1/3, 22/7. Irrationnels: √3, π',
              difficulty: 'intermediate'
            },
            {
              type: 'justification',
              question: 'Pourquoi √2 est-il irrationnel?',
              answer: 'Son développement décimal est infini et non périodique. Il ne peut s\'écrire a/b',
              difficulty: 'advanced'
            },
            {
              type: 'identification',
              question: 'Dans quel(s) ensemble(s) est 2,5?',
              answer: '2,5 ∈ 𝔻, 2,5 ∈ ℚ, 2,5 ∈ ℝ (mais 2,5 ∉ ℕ et 2,5 ∉ ℤ)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch1-s3',
          title: 'Opérations sur les nombres réels',
          description: 'Maîtriser addition, multiplication et leurs propriétés',
          concepts: ['Addition', 'Multiplication', 'Opposé', 'Inverse', 'Règles des signes'],
          objectives: [
            'Effectuer des opérations sur les réels',
            'Connaître les propriétés (commutativité, associativité)',
            'Utiliser les règles des signes',
            'Résoudre des expressions complexes'
          ],
          content: {
            addition: {
              definition: 'a + b avec a, b ∈ ℝ',
              proprietes: {
                commutativite: 'a + b = b + a',
                associativite: '(a + b) + c = a + (b + c)',
                element_neutre: 'a + 0 = a',
                oppose: 'a + (-a) = 0'
              },
              regles_signes: {
                meme_signe: 'On additionne et on garde le signe',
                signes_contraires: 'On soustrait et on prend le signe du plus grand'
              }
            },
            multiplication: {
              definition: 'a × b avec a, b ∈ ℝ',
              proprietes: {
                commutativite: 'a × b = b × a',
                associativite: '(a × b) × c = a × (b × c)',
                element_neutre: 'a × 1 = a',
                inverse: 'a × (1/a) = 1 (si a ≠ 0)',
                distributivite: 'a × (b + c) = a × b + a × c'
              },
              regles_signes: {
                meme_signe: 'Le produit est positif',
                signes_contraires: 'Le produit est négatif'
              }
            },
            propriete_produit_nul: 'Si a × b = 0, alors a = 0 ou b = 0',
            mauritanianContext: [
              'Calculs financiers (bénéfices/pertes)',
              'Températures (positives/négatives)',
              'Commerce au marché',
              'Problèmes de gestion'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule: (-5) + (+12) - (-7)',
              answer: '(-5) + (+12) + (+7) = +14',
              difficulty: 'beginner'
            },
            {
              type: 'produit',
              question: 'Calcule: (-3) × (+4) × (-2)',
              answer: '(-3) × (+4) = -12, (-12) × (-2) = +24',
              difficulty: 'intermediate'
            },
            {
              type: 'mixte',
              question: 'Simplifie: 2(3 + 5) - 4 × 2',
              answer: '2 × 8 - 8 = 16 - 8 = 8',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch1-s4',
          title: 'Puissances et leurs propriétés',
          description: 'Comprendre et calculer les puissances',
          concepts: ['Puissance', 'Exposant', 'Propriétés des puissances', 'Notation scientifique'],
          objectives: [
            'Calculer des puissances',
            'Connaître les propriétés des puissances',
            'Utiliser les exposants négatifs',
            'Simplifier des expressions avec puissances'
          ],
          content: {
            definition: {
              exposant_positif: 'aⁿ = a × a × ... × a (n fois)',
              exposant_negatif: 'a⁻ⁿ = 1/aⁿ (a ≠ 0)',
              exposant_nul: 'a⁰ = 1 (a ≠ 0)'
            },
            proprietes: {
              produit: {
                formule: 'aᵐ × aⁿ = aᵐ⁺ⁿ',
                exemple: '2³ × 2⁵ = 2⁸ = 256'
              },
              quotient: {
                formule: 'aᵐ / aⁿ = aᵐ⁻ⁿ (a ≠ 0)',
                exemple: '2⁵ / 2³ = 2² = 4'
              },
              puissance_de_puissance: {
                formule: '(aᵐ)ⁿ = aᵐˣⁿ',
                exemple: '(2³)² = 2⁶ = 64'
              },
              produit_puissance: {
                formule: '(ab)ⁿ = aⁿ × bⁿ',
                exemple: '(2×3)² = 2² × 3² = 36'
              },
              quotient_puissance: {
                formule: '(a/b)ⁿ = aⁿ/bⁿ (b ≠ 0)',
                exemple: '(2/3)² = 4/9'
              }
            },
            exemples: {
              ex1: '(-3)³ = (-3) × (-3) × (-3) = -27',
              ex2: '(2√3)⁵ = 2⁵ × (√3)⁵ = 32 × 9√3 = 288√3'
            },
            mauritanianContext: [
              'Calculs de surfaces (carrés)',
              'Volumes (cubes)',
              'Croissance démographique',
              'Intérêts composés'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule: 2⁵ × 2³',
              answer: '2⁵ × 2³ = 2⁸ = 256',
              difficulty: 'beginner'
            },
            {
              type: 'simplification',
              question: 'Simplifie: (3²)³',
              answer: '(3²)³ = 3⁶ = 729',
              difficulty: 'intermediate'
            },
            {
              type: 'negatif',
              question: 'Calcule: 2⁻³',
              answer: '2⁻³ = 1/2³ = 1/8',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch1-s5',
          title: 'Racines carrées - Introduction',
          description: 'Découvrir les racines carrées et leurs propriétés',
          concepts: ['Racine carrée', 'Carré parfait', 'Propriétés de base'],
          objectives: [
            'Comprendre la notion de racine carrée',
            'Calculer des racines de carrés parfaits',
            'Connaître les propriétés fondamentales',
            'Simplifier des expressions simples'
          ],
          content: {
            definition: {
              racine: '√a est le nombre positif dont le carré est a',
              relation: '(√a)² = a et √(a²) = |a|',
              domaine: 'a ≥ 0'
            },
            carres_parfaits: {
              liste: [
                '√1 = 1', '√4 = 2', '√9 = 3', '√16 = 4', '√25 = 5',
                '√36 = 6', '√49 = 7', '√64 = 8', '√81 = 9', '√100 = 10',
                '√121 = 11', '√144 = 12', '√169 = 13', '√196 = 14', '√225 = 15'
              ]
            },
            proprietes: {
              produit: {
                formule: '√(a×b) = √a × √b (a,b ≥ 0)',
                exemple: '√(4×9) = √4 × √9 = 2 × 3 = 6'
              },
              quotient: {
                formule: '√(a/b) = √a / √b (a ≥ 0, b > 0)',
                exemple: '√(9/4) = √9 / √4 = 3/2'
              }
            },
            erreur_frequente: {
              faux: '√(a+b) = √a + √b',
              contre_exemple: '√(16+9) = √25 = 5 ≠ √16 + √9 = 4 + 3 = 7'
            },
            mauritanianContext: [
              'Calculs de diagonales (Pythagore)',
              'Aires de carrés',
              'Mesures en construction',
              'Problèmes géométriques'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule: √81 + √49',
              answer: '9 + 7 = 16',
              difficulty: 'beginner'
            },
            {
              type: 'produit',
              question: 'Calcule: √4 × √25',
              answer: '2 × 5 = 10 ou √(4×25) = √100 = 10',
              difficulty: 'beginner'
            },
            {
              type: 'verification',
              question: 'Vérifie: √(16+9) = √16 + √9?',
              answer: 'Non, √25 = 5 mais √16 + √9 = 7, donc 5 ≠ 7',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch2',
      title: 'ORDRE, INTERVALLES ET VALEUR ABSOLUE',
      sections: [
        {
          id: 'ch2-s1',
          title: 'Relation d\'ordre dans ℝ',
          description: 'Comprendre et utiliser l\'ordre dans les réels',
          concepts: ['Relation d\'ordre', 'Inégalités', 'Comparaison', 'Propriétés'],
          objectives: [
            'Comprendre la relation d\'ordre',
            'Comparer des nombres réels',
            'Connaître les propriétés de l\'ordre',
            'Utiliser les symboles <, ≤, >, ≥'
          ],
          content: {
            definition: {
              ordre: 'Pour deux réels a et b, on a soit a < b, soit a = b, soit a > b',
              symboles: {
                inferieur_strict: '< (strictement inférieur)',
                inferieur_large: '≤ (inférieur ou égal)',
                superieur_strict: '> (strictement supérieur)',
                superieur_large: '≥ (supérieur ou égal)'
              }
            },
            proprietes: {
              transitivite: {
                enonce: 'Si a < b et b < c, alors a < c',
                exemple: 'Si 2 < 5 et 5 < 8, alors 2 < 8'
              },
              addition: {
                enonce: 'Si a < b, alors a + c < b + c',
                exemple: '6 > 5 ⟹ 6 + 7 > 5 + 7 ⟹ 13 > 12'
              },
              multiplication_positif: {
                enonce: 'Si a < b et c > 0, alors ac < bc',
                exemple: '3 < 5, donc 3×2 < 5×2 ⟹ 6 < 10'
              },
              multiplication_negatif: {
                enonce: 'Si a < b et c < 0, alors ac > bc',
                exemple: '6 > 5, mais 6×(-4) < 5×(-4) ⟹ -24 < -20',
                attention: 'INVERSER LE SENS!'
              }
            },
            mauritanianContext: [
              'Comparaison de prix',
              'Températures (positives/négatives)',
              'Altitudes',
              'Bilans financiers'
            ]
          },
          exercises: [
            {
              type: 'comparison',
              question: 'Compare: -5 et -2',
              answer: '-5 < -2',
              difficulty: 'beginner'
            },
            {
              type: 'propriete',
              question: 'Si x < 3, que peut-on dire de x - 5?',
              answer: 'x - 5 < 3 - 5, donc x - 5 < -2',
              difficulty: 'intermediate'
            },
            {
              type: 'multiplication',
              question: 'Si -2x > 6, que vaut x?',
              answer: 'Diviser par -2 inverse: x < -3',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch2-s2',
          title: 'Intervalles de ℝ - Types et notations',
          description: 'Représenter et manipuler les intervalles',
          concepts: ['Intervalle', 'Borne', 'Ouvert', 'Fermé', 'Semi-ouvert'],
          objectives: [
            'Connaître les types d\'intervalles',
            'Utiliser les notations d\'intervalles',
            'Représenter sur la droite numérique',
            'Passer de l\'inégalité à l\'intervalle'
          ],
          content: {
            types: {
              ferme: {
                notation: '[a, b]',
                definition: '{x ∈ ℝ | a ≤ x ≤ b}',
                exemple: '[2, 5] contient 2, 3, 4, 5 et tous les réels entre eux'
              },
              ouvert: {
                notation: ']a, b[',
                definition: '{x ∈ ℝ | a < x < b}',
                exemple: ']2, 5[ contient 3, 4 mais PAS 2 ni 5'
              },
              semi_ouvert_gauche: {
                notation: ']a, b]',
                definition: '{x ∈ ℝ | a < x ≤ b}',
                exemple: ']2, 5] contient 5 mais pas 2'
              },
              semi_ouvert_droite: {
                notation: '[a, b[',
                definition: '{x ∈ ℝ | a ≤ x < b}',
                exemple: '[2, 5[ contient 2 mais pas 5'
              },
              infini: {
                positif: '[a, +∞[ = {x | x ≥ a}',
                negatif: ']-∞, b] = {x | x ≤ b}',
                tout: ']-∞, +∞[ = ℝ'
              }
            },
            mauritanianContext: [
              'Fourchettes de prix',
              'Plages de températures',
              'Intervalles de temps',
              'Tranches d\'âge'
            ]
          },
          exercises: [
            {
              type: 'notation',
              question: 'Écris en intervalle: -2 ≤ x < 5',
              answer: '[-2, 5[',
              difficulty: 'beginner'
            },
            {
              type: 'interpretation',
              question: 'Que signifie ]3, +∞[?',
              answer: 'Tous les x strictement supérieurs à 3',
              difficulty: 'beginner'
            },
            {
              type: 'representation',
              question: 'Quelle inégalité pour [−1, 4]?',
              answer: '−1 ≤ x ≤ 4',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s3',
          title: 'Amplitude et centre d\'un intervalle',
          description: 'Calculer amplitude et centre',
          concepts: ['Amplitude', 'Centre', 'Milieu', 'Longueur'],
          objectives: [
            'Calculer l\'amplitude d\'un intervalle',
            'Trouver le centre d\'un intervalle',
            'Résoudre des problèmes pratiques',
            'Utiliser dans des contextes réels'
          ],
          content: {
            amplitude: {
              definition: 'Longueur de l\'intervalle',
              formule: 'Amplitude de [a,b] = b - a',
              exemple: 'Amplitude de [3, 7] = 7 - 3 = 4',
              remarque: 'Toujours positive'
            },
            centre: {
              definition: 'Milieu de l\'intervalle',
              formule: 'Centre de [a,b] = (a+b)/2',
              exemple: 'Centre de [3, 7] = (3+7)/2 = 5',
              interpretation: 'Point équidistant des bornes'
            },
            intersection_union: {
              intersection: 'I₁ ∩ I₂ = éléments communs',
              union: 'I₁ ∪ I₂ = tous les éléments'
            },
            mauritanianContext: [
              'Prix moyens au marché',
              'Températures moyennes',
              'Plages horaires',
              'Distances moyennes'
            ]
          },
          exercises: [
            {
              type: 'amplitude',
              question: 'Calcule l\'amplitude de [-3, 7]',
              answer: '7 - (-3) = 10',
              difficulty: 'beginner'
            },
            {
              type: 'centre',
              question: 'Calcule le centre de [2, 8]',
              answer: '(2+8)/2 = 5',
              difficulty: 'beginner'
            },
            {
              type: 'intersection',
              question: 'Détermine [1, 6] ∩ [4, 9]',
              answer: '[4, 6]',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s4',
          title: 'Valeur absolue - Définition et propriétés',
          description: 'Comprendre et utiliser la valeur absolue',
          concepts: ['Valeur absolue', 'Distance', 'Module', 'Propriétés'],
          objectives: [
            'Comprendre la notion de valeur absolue',
            'Calculer des valeurs absolues',
            'Connaître les propriétés de |x|',
            'Utiliser pour calculer des distances'
          ],
          content: {
            definition: {
              geometrique: '|x| est la distance de x à 0',
              algebrique: '|x| = x si x ≥ 0, |x| = -x si x < 0',
              propriete: '|x| = max(x, -x)'
            },
            exemples: {
              ex1: '|5| = 5 (car 5 > 0)',
              ex2: '|-5| = 5 (car -5 < 0)',
              ex3: '|0| = 0',
              ex4: '|√2| = √2'
            },
            proprietes: {
              non_negativite: '|x| ≥ 0 pour tout x',
              nul_ssi: '|x| = 0 ⟺ x = 0',
              symetrie: '|x| = |-x|',
              produit: '|a × b| = |a| × |b|',
              quotient: '|a/b| = |a|/|b| (b ≠ 0)',
              triangle: '|a + b| ≤ |a| + |b|'
            },
            distance: {
              formule: '|a - b| = distance entre a et b',
              exemples: {
                ex1: '|5 - 2| = 3',
                ex2: '|2 - 5| = 3',
                ex3: '|-3 - 4| = 7'
              }
            },
            mauritanianContext: [
              'Écarts de température',
              'Marges d\'erreur',
              'Distances',
              'Tolérances en construction'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule: |7| + |-3| - |0|',
              answer: '7 + 3 - 0 = 10',
              difficulty: 'beginner'
            },
            {
              type: 'distance',
              question: 'Calcule la distance entre -5 et 2',
              answer: '|-5 - 2| = |-7| = 7',
              difficulty: 'intermediate'
            },
            {
              type: 'propriete',
              question: 'Simplifie: |3| × |-4|',
              answer: '3 × 4 = 12',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s5',
          title: 'Équations et inéquations avec valeur absolue',
          description: 'Résoudre des équations et inéquations',
          concepts: ['Équations |x|=a', 'Inéquations |x|≤a', 'Résolution'],
          objectives: [
            'Résoudre |x| = a',
            'Résoudre |x| ≤ a et |x| ≥ a',
            'Résoudre |ax+b| = c',
            'Interpréter les solutions'
          ],
          content: {
            equations: {
              type1: {
                forme: '|x| = a',
                condition: 'a ≥ 0',
                solutions: 'x = a ou x = -a',
                exemple: '|x| = 5 ⟹ x = 5 ou x = -5'
              },
              type2: {
                forme: '|ax + b| = c',
                methode: 'ax + b = c ou ax + b = -c',
                exemple: {
                  equation: '|2x - 1| = 5',
                  cas1: '2x - 1 = 5 ⟹ x = 3',
                  cas2: '2x - 1 = -5 ⟹ x = -2',
                  solutions: 'S = {-2, 3}'
                }
              }
            },
            inequations: {
              type1: {
                forme: '|x| ≤ a (a ≥ 0)',
                equivalence: '-a ≤ x ≤ a',
                intervalle: '[-a, a]',
                exemple: '|x| ≤ 2 ⟹ x ∈ [-2, 2]'
              },
              type2: {
                forme: '|x| ≥ a (a ≥ 0)',
                equivalence: 'x ≤ -a ou x ≥ a',
                intervalles: ']-∞, -a] ∪ [a, +∞[',
                exemple: '|x| ≥ 3 ⟹ x ∈ ]-∞, -3] ∪ [3, +∞['
              }
            },
            mauritanianContext: [
              'Tolérances de mesure',
              'Marges d\'erreur acceptables',
              'Écarts de prix',
              'Contrôle qualité'
            ]
          },
          exercises: [
            {
              type: 'equation',
              question: 'Résous: |x - 3| = 5',
              answer: 'x - 3 = 5 ou x - 3 = -5, donc x = 8 ou x = -2',
              difficulty: 'intermediate'
            },
            {
              type: 'inequation',
              question: 'Résous: |2x + 1| ≤ 7',
              answer: '-7 ≤ 2x + 1 ≤ 7, donc x ∈ [-4, 3]',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'Résous: |x| ≥ 4',
              answer: 'x ≤ -4 ou x ≥ 4, donc x ∈ ]-∞, -4] ∪ [4, +∞[',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch3',
      title: 'RACINES CARRÉES',
      sections: [
        {
          id: 'ch3-s1',
          title: 'Définition et carrés parfaits',
          description: 'Comprendre les racines carrées',
          concepts: ['Racine carrée', 'Carré parfait', 'Conditions d\'existence'],
          objectives: [
            'Comprendre la notion de racine carrée',
            'Identifier les carrés parfaits',
            'Connaître les propriétés fondamentales',
            'Vérifier les conditions d\'existence'
          ],
          content: {
            definition: {
              racine_carree: '√a est le nombre positif dont le carré est a',
              condition: 'a ≥ 0 (a doit être positif ou nul)',
              notation: '√a se lit "racine carrée de a"',
              relation: '(√a)² = a et √(a²) = |a|'
            },
            carres_parfaits: {
              petits: [
                '√1 = 1', '√4 = 2', '√9 = 3', '√16 = 4', '√25 = 5',
                '√36 = 6', '√49 = 7', '√64 = 8', '√81 = 9', '√100 = 10'
              ],
              grands: [
                '√121 = 11', '√144 = 12', '√169 = 13', '√196 = 14', '√225 = 15'
              ]
            },
            proprietes: {
              produit: '√(a×b) = √a × √b (a,b ≥ 0)',
              quotient: '√(a/b) = √a / √b (a ≥ 0, b > 0)',
              puissance: '√(a²) = |a|'
            },
            mauritanianContext: [
              'Calculs de diagonales',
              'Aires de carrés',
              'Mesures en construction',
              'Problèmes géométriques'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule: √81 + √49',
              answer: '9 + 7 = 16',
              difficulty: 'beginner'
            },
            {
              type: 'produit',
              question: 'Calcule: √6 × √15',
              answer: '√(6×15) = √90',
              difficulty: 'intermediate'
            },
            {
              type: 'verification',
              question: 'Vérifie: √(16+9) = √16 + √9?',
              answer: '√25 = 5, mais √16 + √9 = 7. Non, 5 ≠ 7',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch3-s2',
          title: 'Simplification de radicaux',
          description: 'Simplifier des expressions avec √',
          concepts: ['Simplification', 'Forme a√b', 'Décomposition', 'Facteurs'],
          objectives: [
            'Simplifier des racines carrées',
            'Écrire sous forme a√b',
            'Décomposer en facteurs premiers',
            'Identifier les carrés parfaits dans un nombre'
          ],
          content: {
            methode: {
              principe: 'Chercher le plus grand carré parfait qui divise le nombre',
              etapes: [
                'Décomposer en facteurs premiers',
                'Regrouper par paires',
                'Sortir les paires',
                'Laisser les facteurs uniques sous √'
              ]
            },
            exemples: {
              ex1: {
                radical: '√132',
                decomposition: '132 = 4 × 33 = 2² × 33',
                simplification: '√132 = 2√33'
              },
              ex2: {
                radical: '√275',
                decomposition: '275 = 25 × 11 = 5² × 11',
                simplification: '√275 = 5√11'
              },
              ex3: {
                radical: '√200',
                decomposition: '200 = 100 × 2 = 10² × 2',
                simplification: '√200 = 10√2'
              }
            },
            verification: 'Élever au carré pour vérifier: (2√33)² = 4 × 33 = 132 ✓',
            mauritanianContext: [
              'Simplification de calculs',
              'Mesures exactes',
              'Problèmes de construction',
              'Géométrie pratique'
            ]
          },
          exercises: [
            {
              type: 'simplification',
              question: 'Simplifie: √72',
              answer: '√72 = √(36×2) = 6√2',
              difficulty: 'beginner'
            },
            {
              type: 'complexe',
              question: 'Simplifie: √180',
              answer: '√180 = √(36×5) = 6√5',
              difficulty: 'intermediate'
            },
            {
              type: 'verification',
              question: 'Vérifie que 5√11 = √275',
              answer: '(5√11)² = 25 × 11 = 275 ✓',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s3',
          title: 'Addition et soustraction de radicaux',
          description: 'Additionner des radicaux semblables',
          concepts: ['Radicaux semblables', 'Addition', 'Soustraction', 'Simplification préalable'],
          objectives: [
            'Reconnaître des radicaux semblables',
            'Additionner des radicaux semblables',
            'Simplifier avant d\'additionner',
            'Résoudre des expressions complexes'
          ],
          content: {
            regle: 'On ne peut additionner que des radicaux semblables',
            definition: 'Même partie sous le radical',
            formule: 'k√a + m√a = (k+m)√a',
            exemples: {
              ex1: '3√5 + 2√5 = 5√5',
              ex2: '7√2 - 4√2 = 3√2',
              ex3: '5√3 + 2√3 - √3 = 6√3'
            },
            contre_exemples: {
              impossible: '√2 + √3 ne se simplifie pas',
              raison: 'Radicaux différents'
            },
            astuce: {
              methode: 'Simplifier d\'abord!',
              exemple: {
                expression: '√12 + √27',
                simplification: '2√3 + 3√3',
                resultat: '5√3'
              }
            },
            mauritanianContext: [
              'Calculs géométriques',
              'Mesures combinées',
              'Problèmes de construction',
              'Applications pratiques'
            ]
          },
          exercises: [
            {
              type: 'addition',
              question: 'Simplifie: 4√7 + 3√7 - √7',
              answer: '(4+3-1)√7 = 6√7',
              difficulty: 'beginner'
            },
            {
              type: 'avec_simplification',
              question: 'Simplifie: √18 + √8',
              answer: '3√2 + 2√2 = 5√2',
              difficulty: 'intermediate'
            },
            {
              type: 'mixte',
              question: 'Simplifie: √50 + √32 - √2',
              answer: '5√2 + 4√2 - √2 = 8√2',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch3-s4',
          title: 'Multiplication et division de radicaux',
          description: 'Opérations de multiplication et division',
          concepts: ['Multiplication', 'Division', 'Simplification', 'Produit de radicaux'],
          objectives: [
            'Multiplier des radicaux',
            'Diviser des radicaux',
            'Simplifier des produits',
            'Effectuer des calculs complexes'
          ],
          content: {
            multiplication: {
              regle: '√a × √b = √(a×b)',
              exemples: {
                ex1: '√2 × √3 = √6',
                ex2: '√5 × √5 = √25 = 5',
                ex3: '2√3 × 3√2 = 6√6',
                ex4: '√8 × √2 = √16 = 4'
              },
              avec_coefficients: {
                regle: 'a√b × c√d = ac√(bd)',
                exemple: '3√2 × 5√3 = 15√6'
              }
            },
            division: {
              regle: '√a / √b = √(a/b) (b ≠ 0)',
              exemples: {
                ex1: '√18 / √2 = √9 = 3',
                ex2: '√50 / √2 = √25 = 5'
              }
            },
            mauritanianContext: [
              'Calculs d\'aires',
              'Problèmes de proportions',
              'Mesures géométriques',
              'Applications pratiques'
            ]
          },
          exercises: [
            {
              type: 'multiplication',
              question: 'Calcule: √6 × √24',
              answer: '√(6×24) = √144 = 12',
              difficulty: 'intermediate'
            },
            {
              type: 'avec_coefficient',
              question: 'Calcule: 2√5 × 3√2',
              answer: '6√10',
              difficulty: 'intermediate'
            },
            {
              type: 'division',
              question: 'Calcule: √72 / √8',
              answer: '√(72/8) = √9 = 3',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s5',
          title: 'Rationalisation du dénominateur',
          description: 'Supprimer les radicaux du dénominateur',
          concepts: ['Rationalisation', 'Fraction', 'Simplification', 'Multiplication astucieuse'],
          objectives: [
            'Comprendre la rationalisation',
            'Rationaliser a/√b',
            'Simplifier des fractions',
            'Effectuer des calculs complexes'
          ],
          content: {
            principe: 'Supprimer les radicaux du dénominateur',
            methode: 'Multiplier par √b/√b',
            exemples: {
              simple: {
                initial: '1/√2',
                multiplication: '(1/√2) × (√2/√2)',
                resultat: '√2/2'
              },
              avec_coefficient: {
                initial: '3/√5',
                multiplication: '(3/√5) × (√5/√5)',
                resultat: '3√5/5'
              },
              complexe: {
                initial: '6/(2√3)',
                simplification: '3/√3',
                rationalisation: '(3/√3) × (√3/√3) = 3√3/3',
                resultat: '√3'
              }
            },
            mauritanianContext: [
              'Calculs précis',
              'Fractions en géométrie',
              'Mesures exactes',
              'Problèmes scientifiques'
            ]
          },
          exercises: [
            {
              type: 'simple',
              question: 'Rationalise: 5/√2',
              answer: '(5/√2) × (√2/√2) = 5√2/2',
              difficulty: 'intermediate'
            },
            {
              type: 'avec_calcul',
              question: 'Rationalise: 12/√3',
              answer: '(12/√3) × (√3/√3) = 12√3/3 = 4√3',
              difficulty: 'intermediate'
            },
            {
              type: 'complexe',
              question: 'Rationalise et simplifie: 8/(2√2)',
              answer: '4/√2 = (4√2)/2 = 2√2',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch4',
      title: 'CALCUL LITTÉRAL',
      sections: [
        {
          id: 'ch4-s1',
          title: 'Monômes et polynômes',
          description: 'Comprendre les expressions algébriques',
          concepts: ['Monôme', 'Polynôme', 'Degré', 'Coefficient', 'Terme'],
          objectives: [
            'Identifier monômes et polynômes',
            'Déterminer le degré',
            'Reconnaître les coefficients',
            'Réduire des expressions simples'
          ],
          content: {
            definition: {
              monome: 'Expression du type a×xⁿ où a est un nombre et n un entier naturel',
              exemples: ['3x²', '-5x', '7', '2x³'],
              polynome: 'Somme de monômes',
              exemples_poly: ['3x² + 2x - 5', 'x³ - 4x + 1']
            },
            vocabulaire: {
              degre: 'Plus grand exposant du polynôme',
              coefficient: 'Nombre devant la variable',
              terme_constant: 'Terme sans variable',
              exemples: {
                expression: '5x³ - 2x² + 7x - 3',
                degre: '3',
                coefficients: '5, -2, 7',
                terme_constant: '-3'
              }
            },
            reduction: {
              principe: 'Regrouper les termes de même degré',
              exemple: {
                initial: '3x² + 5x - 2x² + 7',
                regroupement: '(3x² - 2x²) + 5x + 7',
                resultat: 'x² + 5x + 7'
              }
            },
            mauritanianContext: [
              'Calcul de périmètres variables',
              'Aires de terrains',
              'Coûts en fonction de quantités',
              'Problèmes commerciaux'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Quel est le degré de 4x³ - 2x + 5?',
              answer: 'Degré 3 (plus grand exposant)',
              difficulty: 'beginner'
            },
            {
              type: 'reduction',
              question: 'Réduis: 5x² + 3x - 2x² + 4x',
              answer: '3x² + 7x',
              difficulty: 'beginner'
            },
            {
              type: 'complexe',
              question: 'Réduis: 2x² + 5 - x² + 3x - 2',
              answer: 'x² + 3x + 3',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch4-s2',
          title: 'Développement d\'expressions',
          description: 'Développer avec la distributivité',
          concepts: ['Distributivité', 'Développement', 'Parenthèses', 'Simplification'],
          objectives: [
            'Utiliser la distributivité simple',
            'Développer des produits',
            'Supprimer les parenthèses',
            'Réduire après développement'
          ],
          content: {
            distributivite_simple: {
              formule: 'k(a + b) = ka + kb',
              exemples: {
                ex1: '3(x + 5) = 3x + 15',
                ex2: '-2(x - 4) = -2x + 8',
                ex3: 'x(x + 7) = x² + 7x'
              }
            },
            distributivite_double: {
              formule: '(a + b)(c + d) = ac + ad + bc + bd',
              methode: 'Chaque terme du premier multiplie chaque terme du second',
              exemples: {
                ex1: '(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6',
                ex2: '(2x + 1)(x + 4) = 2x² + 8x + x + 4 = 2x² + 9x + 4'
              }
            },
            suppression_parentheses: {
              regle_plus: 'a + (b + c) = a + b + c',
              regle_moins: 'a - (b + c) = a - b - c',
              exemples: {
                ex1: 'x + (3 - y) = x + 3 - y',
                ex2: 'x - (3 + y) = x - 3 - y'
              }
            },
            mauritanianContext: [
              'Calcul d\'aires rectangulaires',
              'Coûts totaux (plusieurs articles)',
              'Périmètres de figures',
              'Problèmes de tarification'
            ]
          },
          exercises: [
            {
              type: 'simple',
              question: 'Développe: 5(2x + 3)',
              answer: '10x + 15',
              difficulty: 'beginner'
            },
            {
              type: 'double',
              question: 'Développe: (x + 4)(x + 2)',
              answer: 'x² + 2x + 4x + 8 = x² + 6x + 8',
              difficulty: 'intermediate'
            },
            {
              type: 'mixte',
              question: 'Développe et réduis: 2(x + 3) + 3(x - 1)',
              answer: '2x + 6 + 3x - 3 = 5x + 3',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s3',
          title: 'Identités remarquables',
          description: 'Maîtriser les trois identités remarquables',
          concepts: ['Carré d\'une somme', 'Carré d\'une différence', 'Différence de carrés'],
          objectives: [
            'Connaître les trois identités',
            'Développer avec les identités',
            'Reconnaître les formes',
            'Appliquer rapidement'
          ],
          content: {
            identite1: {
              nom: 'Carré d\'une somme',
              formule: '(a + b)² = a² + 2ab + b²',
              memorisation: 'Premier carré + double produit + second carré',
              exemples: {
                ex1: '(x + 3)² = x² + 6x + 9',
                ex2: '(2x + 5)² = 4x² + 20x + 25'
              }
            },
            identite2: {
              nom: 'Carré d\'une différence',
              formule: '(a - b)² = a² - 2ab + b²',
              memorisation: 'Premier carré - double produit + second carré',
              exemples: {
                ex1: '(x - 4)² = x² - 8x + 16',
                ex2: '(3x - 2)² = 9x² - 12x + 4'
              }
            },
            identite3: {
              nom: 'Différence de deux carrés',
              formule: '(a + b)(a - b) = a² - b²',
              memorisation: 'Produit somme-différence',
              exemples: {
                ex1: '(x + 5)(x - 5) = x² - 25',
                ex2: '(2x + 3)(2x - 3) = 4x² - 9'
              }
            },
            erreur_frequente: {
              faux: '(x + 3)² = x² + 9',
              correct: '(x + 3)² = x² + 6x + 9',
              explication: 'Ne pas oublier le terme 2ab'
            },
            mauritanianContext: [
              'Aires de terrains carrés',
              'Agrandissement de parcelles',
              'Calculs rapides',
              'Optimisation'
            ]
          },
          exercises: [
            {
              type: 'carre_somme',
              question: 'Développe: (x + 7)²',
              answer: 'x² + 14x + 49',
              difficulty: 'beginner'
            },
            {
              type: 'carre_diff',
              question: 'Développe: (3x - 4)²',
              answer: '9x² - 24x + 16',
              difficulty: 'intermediate'
            },
            {
              type: 'diff_carres',
              question: 'Développe: (x + 9)(x - 9)',
              answer: 'x² - 81',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch4-s4',
          title: 'Factorisation - Facteur commun',
          description: 'Transformer des sommes en produits',
          concepts: ['Factorisation', 'Facteur commun', 'Mise en évidence'],
          objectives: [
            'Identifier un facteur commun',
            'Factoriser par mise en évidence',
            'Vérifier la factorisation',
            'Utiliser pour simplifier'
          ],
          content: {
            principe: 'ab + ac = a(b + c)',
            methode: [
              'Identifier le PGCD des coefficients',
              'Identifier la plus petite puissance des variables',
              'Mettre en évidence',
              'Écrire le reste entre parenthèses'
            ],
            exemples: {
              ex1: {
                expression: '3x + 6',
                facteur: '3',
                factorisation: '3(x + 2)',
                verification: '3×x + 3×2 = 3x + 6 ✓'
              },
              ex2: {
                expression: '5x² + 10x',
                facteur: '5x',
                factorisation: '5x(x + 2)',
                verification: '5x×x + 5x×2 = 5x² + 10x ✓'
              },
              ex3: {
                expression: '2x² - 6x + 4',
                facteur: '2',
                factorisation: '2(x² - 3x + 2)'
              }
            },
            mauritanianContext: [
              'Simplification de calculs',
              'Résolution d\'équations',
              'Problèmes d\'optimisation',
              'Calculs commerciaux'
            ]
          },
          exercises: [
            {
              type: 'simple',
              question: 'Factorise: 4x + 12',
              answer: '4(x + 3)',
              difficulty: 'beginner'
            },
            {
              type: 'avec_variable',
              question: 'Factorise: 3x² + 6x',
              answer: '3x(x + 2)',
              difficulty: 'intermediate'
            },
            {
              type: 'complet',
              question: 'Factorise: 5x² - 15x + 10',
              answer: '5(x² - 3x + 2)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s5',
          title: 'Factorisation avec identités remarquables',
          description: 'Factoriser en utilisant les identités',
          concepts: ['Identités inverses', 'Reconnaissance de formes', 'Factorisation mixte'],
          objectives: [
            'Reconnaître a² + 2ab + b²',
            'Factoriser avec les identités',
            'Combiner facteur commun et identités',
            'Résoudre des équations par factorisation'
          ],
          content: {
            reconnaissance: {
              forme1: {
                expression: 'a² + 2ab + b²',
                factorisation: '(a + b)²',
                exemple: 'x² + 6x + 9 = (x + 3)²'
              },
              forme2: {
                expression: 'a² - 2ab + b²',
                factorisation: '(a - b)²',
                exemple: 'x² - 10x + 25 = (x - 5)²'
              },
              forme3: {
                expression: 'a² - b²',
                factorisation: '(a + b)(a - b)',
                exemple: 'x² - 16 = (x + 4)(x - 4)'
              }
            },
            exemples_detailles: {
              ex1: {
                expression: 'x² + 10x + 25',
                reconnaissance: 'x² + 2(x)(5) + 5²',
                factorisation: '(x + 5)²'
              },
              ex2: {
                expression: '4x² - 9',
                reconnaissance: '(2x)² - 3²',
                factorisation: '(2x + 3)(2x - 3)'
              }
            },
            factorisation_mixte: {
              principe: 'Facteur commun puis identités',
              exemple: {
                expression: '2x² - 8',
                etape1: '2(x² - 4)',
                etape2: '2(x + 2)(x - 2)'
              }
            },
            mauritanianContext: [
              'Simplification de calculs',
              'Résolution d\'équations',
              'Aires factorisées',
              'Problèmes d\'optimisation'
            ]
          },
          exercises: [
            {
              type: 'carre_parfait',
              question: 'Factorise: x² + 8x + 16',
              answer: '(x + 4)²',
              difficulty: 'intermediate'
            },
            {
              type: 'diff_carres',
              question: 'Factorise: x² - 49',
              answer: '(x + 7)(x - 7)',
              difficulty: 'beginner'
            },
            {
              type: 'mixte',
              question: 'Factorise: 3x² - 27',
              answer: '3(x² - 9) = 3(x + 3)(x - 3)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch5',
      title: 'ÉQUATIONS ET INÉQUATIONS',
      sections: [
        {
          id: 'ch5-s1',
          title: 'Équations du premier degré',
          description: 'Résoudre ax + b = 0',
          concepts: ['Équation', 'Inconnue', 'Solution', 'Vérification'],
          objectives: [
            'Comprendre la notion d\'équation',
            'Résoudre ax + b = 0',
            'Vérifier les solutions',
            'Mettre en équation des problèmes'
          ],
          content: {
            definition: {
              equation: 'Égalité contenant une inconnue',
              inconnue: 'Variable dont on cherche la valeur',
              solution: 'Valeur qui rend l\'égalité vraie'
            },
            methode: {
              etapes: [
                'Développer et réduire',
                'Regrouper les termes en x d\'un côté',
                'Isoler x',
                'Vérifier'
              ]
            },
            types: {
              type1: {
                forme: 'x + a = b',
                solution: 'x = b - a',
                exemple: 'x + 5 = 12 ⟹ x = 7'
              },
              type2: {
                forme: 'ax = b',
                solution: 'x = b/a (a ≠ 0)',
                exemple: '3x = 15 ⟹ x = 5'
              },
              type3: {
                forme: 'ax + b = c',
                solution: 'x = (c - b)/a',
                exemple: {
                  equation: '2x + 3 = 11',
                  etapes: ['2x = 8', 'x = 4']
                }
              }
            },
            mauritanianContext: [
              'Problèmes de prix',
              'Calculs d\'âges',
              'Distances et temps',
              'Partages équitables'
            ]
          },
          exercises: [
            {
              type: 'simple',
              question: 'Résous: x + 8 = 15',
              answer: 'x = 7',
              difficulty: 'beginner'
            },
            {
              type: 'avec_coef',
              question: 'Résous: 4x - 3 = 17',
              answer: '4x = 20, x = 5',
              difficulty: 'beginner'
            },
            {
              type: 'developpement',
              question: 'Résous: 2(x + 3) = x + 10',
              answer: '2x + 6 = x + 10, x = 4',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch5-s2',
          title: 'Équations produit nul',
          description: 'Résoudre AB = 0',
          concepts: ['Produit nul', 'Factorisation', 'Solutions multiples'],
          objectives: [
            'Utiliser la propriété AB = 0',
            'Résoudre par factorisation',
            'Trouver plusieurs solutions',
            'Vérifier chaque solution'
          ],
          content: {
            propriete: 'Si A × B = 0, alors A = 0 ou B = 0',
            methode: [
              'Factoriser l\'équation',
              'Écrire sous forme produit = 0',
              'Résoudre chaque facteur = 0',
              'Vérifier les solutions'
            ],
            exemples: {
              ex1: {
                equation: 'x(x - 3) = 0',
                resolution: 'x = 0 ou x - 3 = 0',
                solutions: 'x = 0 ou x = 3'
              },
              ex2: {
                equation: '(2x + 1)(x - 5) = 0',
                resolution: '2x + 1 = 0 ou x - 5 = 0',
                solutions: 'x = -1/2 ou x = 5'
              },
              ex3: {
                equation: 'x² - 9 = 0',
                factorisation: '(x + 3)(x - 3) = 0',
                solutions: 'x = -3 ou x = 3'
              }
            },
            mauritanianContext: [
              'Problèmes à plusieurs solutions',
              'Intersections de courbes',
              'Situations multiples',
              'Optimisation'
            ]
          },
          exercises: [
            {
              type: 'simple',
              question: 'Résous: x(x + 2) = 0',
              answer: 'x = 0 ou x = -2',
              difficulty: 'beginner'
            },
            {
              type: 'avec_factorisation',
              question: 'Résous: x² - 25 = 0',
              answer: '(x+5)(x-5) = 0, donc x = -5 ou x = 5',
              difficulty: 'intermediate'
            },
            {
              type: 'complexe',
              question: 'Résous: (3x - 6)(2x + 4) = 0',
              answer: '3x - 6 = 0 ou 2x + 4 = 0, donc x = 2 ou x = -2',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch5-s3',
          title: 'Équations du second degré',
          description: 'Résoudre ax² + bx + c = 0',
          concepts: ['Second degré', 'Discriminant', 'Formule quadratique', 'Solutions'],
          objectives: [
            'Reconnaître une équation du 2nd degré',
            'Calculer le discriminant Δ',
            'Utiliser la formule des solutions',
            'Interpréter le nombre de solutions'
          ],
          content: {
            forme: 'ax² + bx + c = 0 (a ≠ 0)',
            discriminant: {
              formule: 'Δ = b² - 4ac',
              interpretation: {
                delta_positif: 'Δ > 0: deux solutions',
                delta_nul: 'Δ = 0: une solution double',
                delta_negatif: 'Δ < 0: pas de solution dans ℝ'
              }
            },
            solutions: {
              si_delta_positif: 'x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a)',
              si_delta_nul: 'x = -b/(2a)',
              si_delta_negatif: 'Pas de solution réelle'
            },
            exemple_complet: {
              equation: 'x² - 5x + 6 = 0',
              a: '1', b: '-5', c: '6',
              delta: '(-5)² - 4×1×6 = 25 - 24 = 1',
              solutions: 'x₁ = (5-1)/2 = 2, x₂ = (5+1)/2 = 3'
            },
            mauritanianContext: [
              'Problèmes d\'aires',
              'Trajectoires',
              'Optimisation',
              'Applications physiques'
            ]
          },
          exercises: [
            {
              type: 'avec_factorisation',
              question: 'Résous: x² - 7x + 12 = 0',
              answer: 'Δ = 49-48 = 1, x = (7±1)/2, donc x = 3 ou x = 4',
              difficulty: 'intermediate'
            },
            {
              type: 'delta_nul',
              question: 'Résous: x² - 6x + 9 = 0',
              answer: 'Δ = 0, x = 6/2 = 3 (solution double)',
              difficulty: 'intermediate'
            },
            {
              type: 'delta_negatif',
              question: 'Résous: x² + x + 1 = 0',
              answer: 'Δ = 1-4 = -3 < 0, pas de solution dans ℝ',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        },
        {
          id: 'ch5-s4',
          title: 'Inéquations du premier degré',
          description: 'Résoudre ax + b < 0 et variations',
          concepts: ['Inéquation', 'Sens de l\'inégalité', 'Ensemble solution'],
          objectives: [
            'Résoudre des inéquations',
            'Représenter sur la droite',
            'Gérer le changement de sens',
            'Écrire la solution en intervalle'
          ],
          content: {
            methode: {
              etapes: [
                'Développer et réduire',
                'Regrouper les termes',
                'Isoler x',
                'ATTENTION au changement de sens si division par négatif'
              ]
            },
            regles: {
              addition: 'On peut ajouter sans changer le sens',
              mult_positif: 'Multiplier par positif conserve le sens',
              mult_negatif: 'Multiplier par négatif INVERSE le sens'
            },
            exemples: {
              ex1: {
                inequation: '3x + 5 < 14',
                resolution: '3x < 9, x < 3',
                solution: ']-∞, 3['
              },
              ex2: {
                inequation: '-2x + 7 ≥ 3',
                resolution: '-2x ≥ -4, x ≤ 2',
                solution: ']-∞, 2]',
                attention: 'Division par -2 inverse le sens!'
              }
            },
            mauritanianContext: [
              'Budgets (dépenses ≤ recettes)',
              'Contraintes de poids',
              'Temps limités',
              'Quantités minimales/maximales'
            ]
          },
          exercises: [
            {
              type: 'simple',
              question: 'Résous: x - 4 > 7',
              answer: 'x > 11, S = ]11, +∞[',
              difficulty: 'beginner'
            },
            {
              type: 'avec_negatif',
              question: 'Résous: -3x ≤ 12',
              answer: 'x ≥ -4, S = [-4, +∞[',
              difficulty: 'intermediate'
            },
            {
              type: 'complexe',
              question: 'Résous: 2(x - 1) < 3x + 5',
              answer: '2x - 2 < 3x + 5, -x < 7, x > -7',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch5-s5',
          title: 'Inéquations produit et quotient',
          description: 'Résoudre (ax+b)(cx+d) ≥ 0',
          concepts: ['Tableau de signes', 'Produit', 'Quotient', 'Ensemble solution'],
          objectives: [
            'Construire un tableau de signes',
            'Résoudre des inéquations produit',
            'Résoudre des inéquations quotient',
            'Interpréter graphiquement'
          ],
          content: {
            methode_produit: {
              etapes: [
                'Trouver les racines (facteurs = 0)',
                'Construire le tableau de signes',
                'Identifier les zones selon le signe voulu',
                'Écrire la solution'
              ]
            },
            exemple_produit: {
              inequation: '(x - 2)(x + 3) ≥ 0',
              racines: 'x = 2 et x = -3',
              tableau: 'x < -3: (+), -3 < x < 2: (-), x > 2: (+)',
              solution: 'x ∈ ]-∞, -3] ∪ [2, +∞['
            },
            methode_quotient: {
              attention: 'Le dénominateur ne peut pas être 0!',
              exemple: {
                inequation: '(x + 1)/(x - 3) > 0',
                racines: 'x = -1 (numérateur), x = 3 (interdit)',
                solution: 'x ∈ ]-∞, -1[ ∪ ]3, +∞['
              }
            },
            mauritanianContext: [
              'Problèmes de bénéfices',
              'Optimisation de production',
              'Contraintes multiples',
              'Analyse de situations'
            ]
          },
          exercises: [
            {
              type: 'produit',
              question: 'Résous: (x - 1)(x + 4) ≤ 0',
              answer: 'x ∈ [-4, 1]',
              difficulty: 'intermediate'
            },
            {
              type: 'quotient',
              question: 'Résous: (x + 2)/(x - 1) > 0',
              answer: 'x ∈ ]-∞, -2[ ∪ ]1, +∞[',
              difficulty: 'advanced'
            },
            {
              type: 'tableau',
              question: 'Résous: (2x - 4)(x + 5) ≥ 0',
              answer: 'x ∈ ]-∞, -5] ∪ [2, +∞[',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        }
      ]
    },
    {
      id: 'ch6',
      title: 'VECTEURS DU PLAN',
      sections: [
        {
          id: 'ch6-s1',
          title: 'Notion de vecteur',
          description: 'Comprendre le concept de vecteur',
          concepts: ['Vecteur', 'Direction', 'Sens', 'Norme', 'Égalité'],
          objectives: [
            'Comprendre la notion de vecteur',
            'Distinguer vecteur et segment',
            'Reconnaître des vecteurs égaux',
            'Calculer la norme'
          ],
          content: {
            definition: {
              vecteur: 'Objet caractérisé par direction, sens et longueur',
              notation: 'AB⃗ ou u⃗',
              caracteristiques: {
                origine: 'Point A',
                extremite: 'Point B',
                direction: 'Droite (AB)',
                sens: 'De A vers B',
                norme: '||AB⃗|| = distance AB'
              }
            },
            egalite: {
              definition: 'Même direction, même sens, même norme',
              consequence: 'AB⃗ = CD⃗ ⟺ ABDC est un parallélogramme'
            },
            vecteur_oppose: {
              definition: '-AB⃗ = BA⃗',
              caracteristiques: 'Même direction, sens opposé, même norme'
            },
            vecteur_nul: {
              notation: '0⃗ ou AA⃗',
              propriete: 'Norme = 0'
            },
            mauritanianContext: [
              'Déplacements de véhicules',
              'Forces appliquées',
              'Mouvements dans l\'espace',
              'Navigation'
            ]
          },
          exercises: [
            {
              type: 'reconnaissance',
              question: 'Parallélogramme ABCD. Cite deux vecteurs égaux',
              answer: 'AB⃗ = DC⃗ et AD⃗ = BC⃗',
              difficulty: 'beginner'
            },
            {
              type: 'oppose',
              question: 'Si AB⃗ = u⃗, exprime BA⃗',
              answer: 'BA⃗ = -u⃗',
              difficulty: 'beginner'
            },
            {
              type: 'egalite',
              question: 'ABCD parallélogramme. Prouve AB⃗ = DC⃗',
              answer: 'Même longueur, même direction, même sens (côtés opposés)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch6-s2',
          title: 'Addition de vecteurs',
          description: 'Additionner des vecteurs',
          concepts: ['Addition vectorielle', 'Relation de Chasles', 'Parallélogramme'],
          objectives: [
            'Additionner graphiquement',
            'Utiliser la relation de Chasles',
            'Appliquer la règle du parallélogramme',
            'Connaître les propriétés'
          ],
          content: {
            relation_chasles: {
              formule: 'AB⃗ + BC⃗ = AC⃗',
              generalisation: 'AB⃗ + BC⃗ + CD⃗ = AD⃗',
              exemple: 'AB⃗ + BC⃗ + CA⃗ = AA⃗ = 0⃗'
            },
            regle_parallelogramme: {
              enonce: 'Si ABCD parallélogramme, alors AB⃗ + AD⃗ = AC⃗',
              construction: 'La diagonale est la somme des côtés'
            },
            proprietes: {
              commutativite: 'u⃗ + v⃗ = v⃗ + u⃗',
              associativite: '(u⃗ + v⃗) + w⃗ = u⃗ + (v⃗ + w⃗)',
              element_neutre: 'u⃗ + 0⃗ = u⃗',
              oppose: 'u⃗ + (-u⃗) = 0⃗'
            },
            mauritanianContext: [
              'Déplacements successifs',
              'Trajets avec étapes',
              'Forces combinées',
              'Navigation'
            ]
          },
          exercises: [
            {
              type: 'chasles',
              question: 'Simplifie: AB⃗ + BC⃗ + CA⃗',
              answer: 'AA⃗ = 0⃗',
              difficulty: 'beginner'
            },
            {
              type: 'parallelogramme',
              question: 'ABCD parallélogramme. Exprime AC⃗',
              answer: 'AC⃗ = AB⃗ + AD⃗',
              difficulty: 'intermediate'
            },
            {
              type: 'simplification',
              question: 'Simplifie: AB⃗ + BD⃗ - AD⃗',
              answer: 'AB⃗ + BD⃗ - AD⃗ = AD⃗ - AD⃗ = 0⃗',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch6-s3',
          title: 'Multiplication par un scalaire',
          description: 'Multiplier un vecteur par un nombre',
          concepts: ['Multiplication scalaire', 'Colinéarité', 'Vecteur colinéaire'],
          objectives: [
            'Multiplier un vecteur par un nombre',
            'Comprendre la colinéarité',
            'Utiliser k×u⃗',
            'Appliquer aux problèmes'
          ],
          content: {
            definition: {
              notation: 'k × u⃗ où k ∈ ℝ',
              caracteristiques: {
                direction: 'Même direction que u⃗',
                sens: 'Même sens si k > 0, opposé si k < 0',
                norme: '||ku⃗|| = |k| × ||u⃗||'
              }
            },
            colinearite: {
              definition: 'u⃗ et v⃗ colinéaires ⟺ ∃k tel que v⃗ = ku⃗',
              consequence: 'Même direction',
              application: 'AB⃗ et CD⃗ colinéaires ⟺ (AB) ∥ (CD)'
            },
            proprietes: {
              distributivite: 'k(u⃗ + v⃗) = ku⃗ + kv⃗',
              associativite: 'k(mu⃗) = (km)u⃗'
            },
            mauritanianContext: [
              'Agrandissements/réductions',
              'Proportions',
              'Vitesses multiples',
              'Forces proportionnelles'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Si ||u⃗|| = 3, calcule ||5u⃗||',
              answer: '||5u⃗|| = 5 × 3 = 15',
              difficulty: 'beginner'
            },
            {
              type: 'colinearite',
              question: 'u⃗(4,6) et v⃗(2,3) sont-ils colinéaires?',
              answer: 'Oui, v⃗ = (1/2)u⃗',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'I milieu de [AB]. Exprime AI⃗ avec AB⃗',
              answer: 'AI⃗ = (1/2)AB⃗',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch6-s4',
          title: 'Vecteurs dans un repère',
          description: 'Utiliser les coordonnées',
          concepts: ['Coordonnées', 'Repère', 'Composantes', 'Calculs'],
          objectives: [
            'Lire les coordonnées d\'un vecteur',
            'Calculer AB⃗ = (xB-xA, yB-yA)',
            'Effectuer des opérations',
            'Vérifier la colinéarité'
          ],
          content: {
            coordonnees: {
              definition: 'Dans un repère (O,i⃗,j⃗), u⃗ = (x, y)',
              calcul: 'AB⃗ = (xB - xA, yB - yA)'
            },
            operations: {
              addition: 'u⃗(x₁,y₁) + v⃗(x₂,y₂) = (x₁+x₂, y₁+y₂)',
              multiplication: 'k×u⃗(x,y) = (kx, ky)'
            },
            norme: {
              formule: '||AB⃗|| = √[(xB-xA)² + (yB-yA)²]',
              exemple: 'A(1,2), B(4,6): ||AB⃗|| = √[9+16] = 5'
            },
            colinearite: {
              critere: 'u⃗(x,y) et v⃗(x\',y\') colinéaires ⟺ xy\' - yx\' = 0',
              exemple: 'u⃗(3,2) et v⃗(6,4): 3×4 - 2×6 = 0 ✓'
            },
            mauritanianContext: [
              'Positions GPS',
              'Cartes et plans',
              'Déplacements calculés',
              'Coordonnées géographiques'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'A(2,3) et B(5,7). Calcule AB⃗',
              answer: 'AB⃗ = (5-2, 7-3) = (3,4)',
              difficulty: 'beginner'
            },
            {
              type: 'norme',
              question: 'Calcule ||AB⃗|| avec A(1,1) et B(4,5)',
              answer: '||AB⃗|| = √[(3)² + (4)²] = √25 = 5',
              difficulty: 'intermediate'
            },
            {
              type: 'colinearite',
              question: 'u⃗(2,3) et v⃗(4,6) colinéaires?',
              answer: '2×6 - 3×4 = 0, oui colinéaires',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch6-s5',
          title: 'Applications géométriques des vecteurs',
          description: 'Résoudre des problèmes avec vecteurs',
          concepts: ['Milieu', 'Parallélogramme', 'Alignement', 'Démonstrations'],
          objectives: [
            'Utiliser les vecteurs pour démontrer',
            'Prouver qu\'un quadrilatère est un parallélogramme',
            'Démontrer l\'alignement de points',
            'Résoudre des problèmes géométriques'
          ],
          content: {
            milieu: {
              propriete: 'I milieu de [AB] ⟺ AI⃗ = IB⃗',
              formule_coordonnees: 'I((xA+xB)/2, (yA+yB)/2)'
            },
            parallelogramme: {
              critere1: 'ABCD parallélogramme ⟺ AB⃗ = DC⃗',
              critere2: 'ABCD parallélogramme ⟺ AC⃗ = AB⃗ + AD⃗'
            },
            alignement: {
              critere: 'A, B, C alignés ⟺ AB⃗ et AC⃗ colinéaires',
              methode: 'Vérifier xy\' - yx\' = 0'
            },
            exemples: {
              ex1: {
                probleme: 'Montrer que ABCD est un parallélogramme',
                methode: 'Calculer AB⃗ et DC⃗, vérifier l\'égalité'
              },
              ex2: {
                probleme: 'A(1,2), B(3,5), C(5,8) alignés?',
                resolution: 'AB⃗(2,3), AC⃗(4,6): 2×6-3×4=0 ✓'
              }
            },
            mauritanianContext: [
              'Vérification de parallélisme',
              'Constructions géométriques',
              'Plans et cartes',
              'Architecture'
            ]
          },
          exercises: [
            {
              type: 'milieu',
              question: 'A(2,3) et B(6,7). Trouve le milieu I',
              answer: 'I((2+6)/2, (3+7)/2) = I(4,5)',
              difficulty: 'beginner'
            },
            {
              type: 'alignement',
              question: 'A(1,1), B(2,3), C(3,5) alignés?',
              answer: 'AB⃗(1,2), AC⃗(2,4): 1×4-2×2=0, oui alignés',
              difficulty: 'intermediate'
            },
            {
              type: 'parallelogramme',
              question: 'A(0,0), B(3,1), C(5,4), D(2,3). ABCD parallélogramme?',
              answer: 'AB⃗(3,1), DC⃗(3,1): AB⃗ = DC⃗, oui',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch7',
      title: 'REPÈRES DU PLAN',
      sections: [
        {
          id: 'ch7-s1',
          title: 'Repère orthonormé',
          description: 'Comprendre les repères et coordonnées',
          concepts: ['Repère', 'Axes', 'Coordonnées', 'Origine'],
          objectives: [
            'Comprendre la notion de repère',
            'Placer des points dans un repère',
            'Lire les coordonnées',
            'Utiliser la notation (x, y)'
          ],
          content: {
            definition: {
              repere: 'Système de deux axes perpendiculaires',
              origine: 'Point O intersection des axes',
              axes: {
                abscisses: 'Axe horizontal (Ox)',
                ordonnees: 'Axe vertical (Oy)'
              },
              notation: 'Point A(x, y) où x = abscisse, y = ordonnée'
            },
            repere_orthonorme: {
              definition: 'Repère avec axes perpendiculaires et même unité',
              notation: '(O, i⃗, j⃗)',
              vecteurs_unitaires: 'i⃗ et j⃗ ont pour norme 1'
            },
            placement_points: {
              methode: [
                'Partir de l\'origine O',
                'Se déplacer de x unités sur l\'axe horizontal',
                'Puis de y unités sur l\'axe vertical',
                'Marquer le point'
              ],
              exemples: {
                A: 'A(3, 2): 3 à droite, 2 en haut',
                B: 'B(-2, 4): 2 à gauche, 4 en haut',
                C: 'C(0, -3): sur l\'axe vertical, 3 en bas'
              }
            },
            mauritanianContext: [
              'Cartes et GPS',
              'Plans de ville',
              'Positions géographiques',
              'Navigation maritime'
            ]
          },
          exercises: [
            {
              type: 'placement',
              question: 'Place le point A(4, 3) dans un repère',
              answer: '4 unités à droite, 3 unités en haut depuis O',
              difficulty: 'beginner'
            },
            {
              type: 'lecture',
              question: 'Lis les coordonnées du point situé en (-2, 5)',
              answer: 'x = -2, y = 5',
              difficulty: 'beginner'
            },
            {
              type: 'identification',
              question: 'Où est le point (0, -4)?',
              answer: 'Sur l\'axe des ordonnées, 4 unités sous l\'origine',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch7-s2',
          title: 'Distance entre deux points',
          description: 'Calculer la distance dans un repère',
          concepts: ['Distance', 'Formule', 'Pythagore', 'Norme'],
          objectives: [
            'Comprendre la formule de distance',
            'Calculer AB dans un repère',
            'Utiliser le théorème de Pythagore',
            'Résoudre des problèmes de distance'
          ],
          content: {
            formule: {
              distance: 'AB = √[(xB - xA)² + (yB - yA)²]',
              justification: 'Théorème de Pythagore dans le triangle rectangle',
              notation: 'd(A,B) ou ||AB⃗||'
            },
            methode: {
              etapes: [
                'Calculer xB - xA',
                'Calculer yB - yA',
                'Élever au carré',
                'Additionner',
                'Prendre la racine carrée'
              ]
            },
            exemples: {
              ex1: {
                points: 'A(1, 2) et B(4, 6)',
                calcul: 'AB = √[(4-1)² + (6-2)²] = √[9 + 16] = √25',
                resultat: 'AB = 5'
              },
              ex2: {
                points: 'C(2, 3) et D(5, 7)',
                calcul: 'CD = √[(5-2)² + (7-3)²] = √[9 + 16]',
                resultat: 'CD = 5'
              }
            },
            cas_particuliers: {
              meme_abscisse: 'A(a, y₁) et B(a, y₂) ⟹ AB = |y₂ - y₁|',
              meme_ordonnee: 'A(x₁, b) et B(x₂, b) ⟹ AB = |x₂ - x₁|'
            },
            mauritanianContext: [
              'Calcul de distances sur carte',
              'Problèmes de navigation',
              'Mesures de terrains',
              'Planification urbaine'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'A(2, 3) et B(5, 7). Calcule AB',
              answer: 'AB = √[(3)² + (4)²] = √25 = 5',
              difficulty: 'beginner'
            },
            {
              type: 'avec_negatifs',
              question: 'C(-1, 2) et D(3, -1). Calcule CD',
              answer: 'CD = √[(4)² + (-3)²] = √25 = 5',
              difficulty: 'intermediate'
            },
            {
              type: 'verification',
              question: 'E(0, 0) et F(3, 4). Vérifie EF = 5',
              answer: 'EF = √[9 + 16] = √25 = 5 ✓',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch7-s3',
          title: 'Milieu d\'un segment',
          description: 'Calculer les coordonnées du milieu',
          concepts: ['Milieu', 'Coordonnées', 'Moyenne', 'Formule'],
          objectives: [
            'Comprendre la notion de milieu',
            'Calculer les coordonnées du milieu',
            'Utiliser la formule du milieu',
            'Résoudre des problèmes géométriques'
          ],
          content: {
            formule: {
              milieu: 'I milieu de [AB] ⟹ I((xA + xB)/2, (yA + yB)/2)',
              interpretation: 'Moyenne des abscisses, moyenne des ordonnées',
              propriete: 'I est équidistant de A et B'
            },
            methode: {
              etapes: [
                'Additionner les abscisses et diviser par 2',
                'Additionner les ordonnées et diviser par 2',
                'Écrire I(xI, yI)'
              ]
            },
            exemples: {
              ex1: {
                points: 'A(2, 3) et B(6, 7)',
                calcul: 'I((2+6)/2, (3+7)/2) = I(4, 5)',
                verification: 'AI = BI'
              },
              ex2: {
                points: 'C(-1, 4) et D(5, -2)',
                calcul: 'M((-1+5)/2, (4-2)/2) = M(2, 1)'
              }
            },
            probleme_inverse: {
              situation: 'Connaître I et A, trouver B',
              methode: 'B(2xI - xA, 2yI - yA)'
            },
            mauritanianContext: [
              'Point central entre deux villes',
              'Centre d\'un terrain',
              'Équidistance',
              'Partage équitable'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'A(1, 2) et B(5, 6). Trouve le milieu I',
              answer: 'I((1+5)/2, (2+6)/2) = I(3, 4)',
              difficulty: 'beginner'
            },
            {
              type: 'avec_negatifs',
              question: 'C(-3, 2) et D(5, -4). Trouve M',
              answer: 'M((−3+5)/2, (2−4)/2) = M(1, −1)',
              difficulty: 'intermediate'
            },
            {
              type: 'inverse',
              question: 'I(3, 5) milieu de [AB], A(1, 2). Trouve B',
              answer: 'B(2×3−1, 2×5−2) = B(5, 8)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch7-s4',
          title: 'Équation d\'un cercle',
          description: 'Reconnaître et utiliser l\'équation d\'un cercle',
          concepts: ['Cercle', 'Centre', 'Rayon', 'Équation'],
          objectives: [
            'Connaître l\'équation d\'un cercle',
            'Identifier centre et rayon',
            'Vérifier si un point appartient au cercle',
            'Résoudre des problèmes'
          ],
          content: {
            equation: {
              forme: '(x - a)² + (y - b)² = r²',
              interpretation: {
                centre: 'C(a, b)',
                rayon: 'r',
                signification: 'Ensemble des points M à distance r de C'
              }
            },
            cas_particuliers: {
              centre_origine: 'x² + y² = r² (centre O)',
              exemple: 'x² + y² = 25 ⟹ centre O(0,0), rayon 5'
            },
            appartenance: {
              methode: 'Remplacer x et y par les coordonnées du point',
              exemple: {
                cercle: '(x-2)² + (y-3)² = 16',
                point: 'A(5, 7)',
                verification: '(5-2)² + (7-3)² = 9 + 16 = 25 ≠ 16',
                conclusion: 'A n\'appartient pas au cercle'
              }
            },
            mauritanianContext: [
              'Zones de couverture',
              'Cercles d\'irrigation',
              'Rayons d\'action',
              'Problèmes de position'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Cercle x² + y² = 9. Centre et rayon?',
              answer: 'Centre O(0, 0), rayon 3',
              difficulty: 'beginner'
            },
            {
              type: 'general',
              question: '(x-1)² + (y+2)² = 25. Centre et rayon?',
              answer: 'Centre C(1, -2), rayon 5',
              difficulty: 'intermediate'
            },
            {
              type: 'appartenance',
              question: 'A(3, 4) appartient à x² + y² = 25?',
              answer: '3² + 4² = 9 + 16 = 25 ✓ Oui',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch7-s5',
          title: 'Applications du repère',
          description: 'Résoudre des problèmes complexes',
          concepts: ['Problèmes géométriques', 'Démonstrations', 'Propriétés'],
          objectives: [
            'Démontrer des propriétés géométriques',
            'Prouver des alignements',
            'Calculer des aires avec coordonnées',
            'Résoudre des problèmes complexes'
          ],
          content: {
            nature_triangle: {
              isocele: 'AB = AC (calculer les distances)',
              rectangle: 'Vecteurs perpendiculaires',
              equilateral: 'AB = BC = CA'
            },
            aire_triangle: {
              formule: 'Aire = ½|xA(yB-yC) + xB(yC-yA) + xC(yA-yB)|',
              remarque: 'Formule du déterminant'
            },
            demonstrations: {
              alignement: 'Vecteurs colinéaires',
              parallelisme: 'Vecteurs égaux ou colinéaires',
              perpendicularite: 'Produit scalaire nul (niveau avancé)'
            },
            mauritanianContext: [
              'Vérification de plans',
              'Calculs d\'aires de terrains',
              'Problèmes d\'urbanisme',
              'Architecture'
            ]
          },
          exercises: [
            {
              type: 'nature',
              question: 'A(0,0), B(3,0), C(0,4). Nature du triangle ABC?',
              answer: 'AB = 3, AC = 4, BC = 5. Triangle rectangle (3-4-5)',
              difficulty: 'intermediate'
            },
            {
              type: 'demonstration',
              question: 'A(1,1), B(3,2), C(5,3) alignés?',
              answer: 'AB⃗(2,1), AC⃗(4,2): colinéaires, oui alignés',
              difficulty: 'intermediate'
            },
            {
              type: 'probleme',
              question: 'ABCD avec A(0,0), B(4,0), C(4,3), D(0,3). Nature?',
              answer: 'AB⃗ = DC⃗ et AD⃗ = BC⃗, c\'est un rectangle',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        }
      ]
    },
    {
      id: 'ch8',
      title: 'ÉQUATIONS DE DROITES',
      sections: [
        {
          id: 'ch8-s1',
          title: 'Vecteur directeur d\'une droite',
          description: 'Comprendre les vecteurs directeurs',
          concepts: ['Vecteur directeur', 'Direction', 'Droite', 'Colinéarité'],
          objectives: [
            'Définir un vecteur directeur',
            'Identifier des vecteurs directeurs',
            'Utiliser pour caractériser une droite',
            'Résoudre des problèmes'
          ],
          content: {
            definition: {
              vecteur_directeur: 'Vecteur non nul ayant même direction que la droite',
              propriete: 'Toute droite a une infinité de vecteurs directeurs',
              caracterisation: 'Deux points de la droite définissent un vecteur directeur'
            },
            exemples: {
              ex1: 'Droite passant par A(1,2) et B(3,5): u⃗ = AB⃗ = (2,3)',
              ex2: 'Aussi v⃗ = (4,6) = 2u⃗ est vecteur directeur',
              ex3: 'Tout vecteur colinéaire à u⃗ convient'
            },
            propriete: {
              droites_paralleles: 'Même vecteur directeur ou vecteurs colinéaires',
              droites_perpendiculaires: 'Vecteurs directeurs orthogonaux'
            },
            mauritanianContext: [
              'Tracé de routes parallèles',
              'Directions de déplacement',
              'Planification urbaine',
              'Axes de construction'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'A(2,1) et B(5,4). Trouve un vecteur directeur',
              answer: 'u⃗ = AB⃗ = (3,3) ou (1,1) simplifié',
              difficulty: 'beginner'
            },
            {
              type: 'colinearite',
              question: 'u⃗(2,3) et v⃗(4,6) directeurs de même droite?',
              answer: 'Oui, v⃗ = 2u⃗, ils sont colinéaires',
              difficulty: 'intermediate'
            },
            {
              type: 'perpendiculaire',
              question: 'Droite de vecteur (3,2). Vecteur perpendiculaire?',
              answer: '(-2,3) ou (2,-3)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch8-s2',
          title: 'Équation cartésienne d\'une droite',
          description: 'Forme ax + by + c = 0',
          concepts: ['Équation cartésienne', 'Coefficients', 'Vecteur directeur'],
          objectives: [
            'Connaître la forme ax + by + c = 0',
            'Déterminer l\'équation d\'une droite',
            'Identifier le vecteur directeur',
            'Vérifier si un point appartient'
          ],
          content: {
            forme_generale: {
              equation: 'ax + by + c = 0',
              condition: '(a, b) ≠ (0, 0)',
              vecteur_directeur: 'u⃗ = (-b, a)'
            },
            determination: {
              avec_point_et_vecteur: {
                donnees: 'Point A(x₀,y₀) et vecteur u⃗(α,β)',
                methode: 'β(x - x₀) - α(y - y₀) = 0',
                exemple: {
                  point: 'A(1, -1)',
                  vecteur: 'u⃗(-1, 3)',
                  calcul: '3(x - 1) - (-1)(y + 1) = 0',
                  resultat: '3x + y - 2 = 0'
                }
              },
              avec_deux_points: {
                methode: 'Calculer AB⃗ puis utiliser comme vecteur directeur',
                exemple: {
                  points: 'A(1,2) et B(3,5)',
                  vecteur: 'AB⃗(2,3)',
                  equation: '3(x-1) - 2(y-2) = 0 ⟹ 3x - 2y + 1 = 0'
                }
              }
            },
            appartenance: {
              methode: 'Remplacer x et y, vérifier l\'égalité',
              exemple: 'Droite 2x + 3y - 6 = 0, point A(3,0): 2×3 + 3×0 - 6 = 0 ✓'
            },
            mauritanianContext: [
              'Tracé de routes',
              'Plans de construction',
              'Limites de terrains',
              'Axes de transport'
            ]
          },
          exercises: [
            {
              type: 'vecteur',
              question: 'Droite 3x - 2y + 5 = 0. Vecteur directeur?',
              answer: 'u⃗ = (2, 3) car -b = 2, a = 3',
              difficulty: 'beginner'
            },
            {
              type: 'determination',
              question: 'Équation passant par A(2,3) avec u⃗(1,2)',
              answer: '2(x-2) - 1(y-3) = 0 ⟹ 2x - y - 1 = 0',
              difficulty: 'intermediate'
            },
            {
              type: 'appartenance',
              question: 'B(1,4) sur 2x + y - 6 = 0?',
              answer: '2×1 + 4 - 6 = 0 ✓ Oui',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch8-s3',
          title: 'Équation réduite y = mx + p',
          description: 'Forme réduite et coefficient directeur',
          concepts: ['Équation réduite', 'Pente', 'Ordonnée à l\'origine', 'Coefficient directeur'],
          objectives: [
            'Connaître la forme y = mx + p',
            'Identifier m (pente) et p (ordonnée)',
            'Passer de la forme cartésienne à réduite',
            'Tracer une droite'
          ],
          content: {
            forme_reduite: {
              equation: 'y = mx + p',
              coefficient_directeur: 'm = pente de la droite',
              ordonnee_origine: 'p = valeur de y quand x = 0',
              vecteur_directeur: 'u⃗ = (1, m)'
            },
            passage_formes: {
              cartesienne_vers_reduite: {
                exemple: '4x + 2y + 3 = 0',
                etapes: [
                  '2y = -4x - 3',
                  'y = -2x - 3/2'
                ],
                resultat: 'm = -2, p = -3/2'
              }
            },
            sens_variation: {
              m_positif: 'm > 0 ⟹ droite montante',
              m_negatif: 'm < 0 ⟹ droite descendante',
              m_nul: 'm = 0 ⟹ droite horizontale'
            },
            cas_particuliers: {
              horizontale: 'y = k (pente nulle)',
              verticale: 'x = k (pas de forme réduite)'
            },
            mauritanianContext: [
              'Tarifs progressifs',
              'Consommation d\'essence',
              'Prix en fonction de quantité',
              'Graphiques économiques'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'y = 3x + 2. Donne m et p',
              answer: 'm = 3, p = 2',
              difficulty: 'beginner'
            },
            {
              type: 'conversion',
              question: 'Transforme 2x + y - 4 = 0 en forme réduite',
              answer: 'y = -2x + 4',
              difficulty: 'intermediate'
            },
            {
              type: 'determination',
              question: 'Droite passant par (0,3) avec m = 2',
              answer: 'y = 2x + 3',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch8-s4',
          title: 'Droites parallèles et perpendiculaires',
          description: 'Étudier les positions relatives',
          concepts: ['Parallélisme', 'Perpendicularité', 'Vecteurs', 'Coefficients'],
          objectives: [
            'Reconnaître des droites parallèles',
            'Reconnaître des droites perpendiculaires',
            'Utiliser les conditions sur m',
            'Résoudre des problèmes'
          ],
          content: {
            parallelisme: {
              condition_vecteurs: 'Vecteurs directeurs colinéaires',
              condition_coefficients: 'ab\' - a\'b = 0',
              forme_reduite: 'Même coefficient directeur: m = m\'',
              exemple: 'y = 2x + 3 et y = 2x - 1 sont parallèles'
            },
            perpendicularite: {
              condition_vecteurs: 'Vecteurs directeurs orthogonaux: aa\' + bb\' = 0',
              forme_reduite: 'mm\' = -1',
              exemple: 'y = 2x + 1 et y = -½x + 3 sont perpendiculaires'
            },
            exemples: {
              ex1: {
                droites: 'd₁: 2x - 3y + 5 = 0, d₂: 4x - 6y + 7 = 0',
                vecteurs: 'u⃗₁(3,2), u⃗₂(6,4)',
                verification: '3×4 - 2×6 = 0',
                conclusion: 'Parallèles'
              },
              ex2: {
                droites: 'd₁: x + 2y - 4 = 0, d₂: 2x - y + 1 = 0',
                vecteurs: 'u⃗₁(-2,1), u⃗₂(1,2)',
                verification: '(-2)×1 + 1×2 = 0',
                conclusion: 'Perpendiculaires'
              }
            },
            mauritanianContext: [
              'Routes parallèles',
              'Rues perpendiculaires',
              'Plans de ville',
              'Constructions'
            ]
          },
          exercises: [
            {
              type: 'parallelisme',
              question: 'y = 3x + 2 et y = 3x - 5 parallèles?',
              answer: 'Oui, même coefficient m = 3',
              difficulty: 'beginner'
            },
            {
              type: 'perpendicularite',
              question: 'y = 2x + 1 et y = -½x + 3 perpendiculaires?',
              answer: 'Oui, 2 × (-½) = -1 ✓',
              difficulty: 'intermediate'
            },
            {
              type: 'determination',
              question: 'Droite perpendiculaire à y = 3x + 1 passant par O',
              answer: 'y = -⅓x (m = -1/3)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch9',
      title: 'SYSTÈMES D\'ÉQUATIONS',
      sections: [
        {
          id: 'ch9-s1',
          title: 'Notion de système linéaire',
          description: 'Comprendre les systèmes à deux inconnues',
          concepts: ['Système', 'Équations simultanées', 'Solution', 'Couple'],
          objectives: [
            'Comprendre la notion de système',
            'Identifier les inconnues',
            'Vérifier une solution',
            'Interpréter géométriquement'
          ],
          content: {
            definition: {
              systeme: 'Ensemble de deux équations à deux inconnues',
              notation: '{ax + by = c; a\'x + b\'y = c\'',
              solution: 'Couple (x, y) vérifiant les deux équations'
            },
            interpretation_geometrique: {
              chaque_equation: 'Représente une droite',
              solution: 'Point d\'intersection des deux droites',
              cas: {
                une_solution: 'Droites sécantes',
                aucune_solution: 'Droites parallèles',
                infinite_solutions: 'Droites confondues'
              }
            },
            verification: {
              methode: 'Remplacer x et y dans les deux équations',
              exemple: {
                systeme: '{x + 2y = 20; 2x - y = 10}',
                couple: '(8, 6)',
                verification1: '8 + 2×6 = 20 ✓',
                verification2: '2×8 - 6 = 10 ✓'
              }
            },
            mauritanianContext: [
              'Problèmes d\'achat (cahiers + stylos)',
              'Mélanges (prix combinés)',
              'Partages équitables',
              'Commerce'
            ]
          },
          exercises: [
            {
              type: 'verification',
              question: '(3,2) solution de {x + y = 5; x - y = 1}?',
              answer: '3 + 2 = 5 ✓ et 3 - 2 = 1 ✓ Oui',
              difficulty: 'beginner'
            },
            {
              type: 'interpretation',
              question: 'Système sans solution. Que dire des droites?',
              answer: 'Les droites sont parallèles (ne se coupent pas)',
              difficulty: 'intermediate'
            },
            {
              type: 'identification',
              question: 'Combien de solutions pour deux droites sécantes?',
              answer: 'Une seule solution (le point d\'intersection)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch9-s2',
          title: 'Résolution par substitution',
          description: 'Méthode de substitution',
          concepts: ['Substitution', 'Isolation', 'Remplacement', 'Résolution'],
          objectives: [
            'Comprendre la méthode de substitution',
            'Isoler une variable',
            'Substituer dans l\'autre équation',
            'Trouver les deux inconnues'
          ],
          content: {
            methode: {
              etapes: [
                'Isoler une variable dans une équation (ex: x = ...)',
                'Substituer dans l\'autre équation',
                'Résoudre pour trouver la première inconnue',
                'Remplacer pour trouver la seconde',
                'Vérifier la solution'
              ]
            },
            exemple_complet: {
              systeme: '{x + 2y = 20; 2x - y = 10}',
              etape1: 'De la 1re: x = 20 - 2y',
              etape2: 'Dans la 2e: 2(20 - 2y) - y = 10',
              etape3: '40 - 4y - y = 10 ⟹ -5y = -30 ⟹ y = 6',
              etape4: 'x = 20 - 2×6 = 8',
              solution: '(8, 6)'
            },
            quand_utiliser: 'Quand une variable est facile à isoler',
            mauritanianContext: [
              'Problèmes de prix',
              'Mélanges de produits',
              'Achats multiples',
              'Répartitions'
            ]
          },
          exercises: [
            {
              type: 'simple',
              question: 'Résous: {x = 2y; x + y = 6}',
              answer: '2y + y = 6, 3y = 6, y = 2, x = 4. Solution: (4,2)',
              difficulty: 'beginner'
            },
            {
              type: 'standard',
              question: 'Résous: {x + y = 10; 2x - y = 5}',
              answer: 'x = 10 - y, 2(10-y) - y = 5, y = 5, x = 5. Solution: (5,5)',
              difficulty: 'intermediate'
            },
            {
              type: 'complexe',
              question: 'Résous: {2x + 3y = 13; x - y = 1}',
              answer: 'x = y + 1, 2(y+1) + 3y = 13, y = 11/5, x = 16/5',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch9-s3',
          title: 'Résolution par combinaison',
          description: 'Méthode par addition/soustraction',
          concepts: ['Combinaison', 'Élimination', 'Addition', 'Multiplication'],
          objectives: [
            'Comprendre la méthode de combinaison',
            'Éliminer une variable',
            'Multiplier pour égaliser les coefficients',
            'Résoudre efficacement'
          ],
          content: {
            methode: {
              principe: 'Additionner ou soustraire pour éliminer une variable',
              etapes: [
                'Multiplier pour égaliser les coefficients d\'une variable',
                'Additionner ou soustraire les équations',
                'Résoudre l\'équation à une inconnue',
                'Substituer pour trouver l\'autre',
                'Vérifier'
              ]
            },
            exemple_complet: {
              systeme: '{x + 2y = 20; 2x - y = 10}',
              multiplication: 'Multiplier la 2e par 2: {x + 2y = 20; 4x - 2y = 20}',
              addition: '5x = 40 ⟹ x = 8',
              substitution: '8 + 2y = 20 ⟹ y = 6',
              solution: '(8, 6)'
            },
            astuce: 'Choisir la variable la plus facile à éliminer',
            mauritanianContext: [
              'Problèmes commerciaux',
              'Mélanges de produits',
              'Budgets',
              'Optimisation'
            ]
          },
          exercises: [
            {
              type: 'direct',
              question: 'Résous: {x + y = 8; x - y = 2}',
              answer: 'Addition: 2x = 10, x = 5, y = 3',
              difficulty: 'beginner'
            },
            {
              type: 'avec_multiplication',
              question: 'Résous: {2x + y = 9; x + 3y = 8}',
              answer: 'Mult 1re par 3: 6x + 3y = 27, soustraire: 5x = 19, x = 19/5',
              difficulty: 'intermediate'
            },
            {
              type: 'choix_methode',
              question: 'Résous: {3x + 2y = 12; x - y = 1}',
              answer: 'x = y + 1, 3(y+1) + 2y = 12, y = 9/5, x = 14/5',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch9-s4',
          title: 'Résolution graphique',
          description: 'Résoudre par tracé de droites',
          concepts: ['Méthode graphique', 'Intersection', 'Tracé', 'Lecture'],
          objectives: [
            'Tracer deux droites dans un repère',
            'Identifier le point d\'intersection',
            'Lire les coordonnées de la solution',
            'Vérifier graphiquement'
          ],
          content: {
            methode: {
              etapes: [
                'Tracer la première droite',
                'Tracer la seconde droite',
                'Identifier le point d\'intersection',
                'Lire les coordonnées',
                'Vérifier algébriquement'
              ]
            },
            tracé_droite: {
              methode1: 'Trouver deux points puis tracer',
              methode2: 'Utiliser m et p pour y = mx + p',
              exemple: {
                equation: 'y = 2x + 1',
                points: 'x=0 ⟹ y=1, x=1 ⟹ y=3',
                trace: 'Relier (0,1) et (1,3)'
              }
            },
            precision: {
              avantage: 'Visualisation claire',
              inconvenient: 'Précision limitée',
              conseil: 'Utiliser papier millimétré'
            },
            mauritanianContext: [
              'Plans et cartes',
              'Visualisation de données',
              'Croisements de routes',
              'Intersections'
            ]
          },
          exercises: [
            {
              type: 'lecture',
              question: 'Deux droites se coupent en (3, 4). Solution du système?',
              answer: 'x = 3, y = 4',
              difficulty: 'beginner'
            },
            {
              type: 'trace',
              question: 'Trace y = x + 1 et y = -x + 5. Intersection?',
              answer: 'Point (2, 3)',
              difficulty: 'intermediate'
            },
            {
              type: 'verification',
              question: 'Vérifie graphiquement: {x + y = 6; x - y = 2}',
              answer: 'Intersection en (4, 2)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch9-s5',
          title: 'Problèmes contextualisés',
          description: 'Résoudre des problèmes concrets',
          concepts: ['Mise en équation', 'Modélisation', 'Interprétation', 'Application'],
          objectives: [
            'Mettre un problème en système',
            'Choisir les inconnues',
            'Résoudre le système',
            'Interpréter la solution'
          ],
          content: {
            methode_probleme: {
              etapes: [
                'Lire et comprendre l\'énoncé',
                'Choisir les inconnues (x = ... , y = ...)',
                'Traduire en équations',
                'Résoudre le système',
                'Vérifier et interpréter'
              ]
            },
            exemples_mauritaniens: {
              ex1: {
                enonce: '2 cahiers + 3 stylos = 600 MRU, 1 cahier + 2 stylos = 350 MRU',
                inconnues: 'x = prix cahier, y = prix stylo',
                systeme: '{2x + 3y = 600; x + 2y = 350}',
                resolution: 'x = 150 MRU, y = 100 MRU'
              },
              ex2: {
                enonce: 'Périmètre rectangle = 24cm, longueur = largeur + 4cm',
                inconnues: 'L = longueur, l = largeur',
                systeme: '{2L + 2l = 24; L = l + 4}',
                solution: 'L = 8cm, l = 4cm'
              }
            },
            verification: 'Toujours vérifier dans le contexte du problème',
            mauritanianContext: [
              'Achats au marché',
              'Problèmes de géométrie',
              'Partages de ressources',
              'Commerce et artisanat'
            ]
          },
          exercises: [
            {
              type: 'prix',
              question: '3 mangues + 2 oranges = 150 MRU, 2 mangues + 3 oranges = 140 MRU. Prix?',
              answer: 'Système: {3x + 2y = 150; 2x + 3y = 140}. Mangue: 34 MRU, Orange: 24 MRU',
              difficulty: 'intermediate'
            },
            {
              type: 'geometrie',
              question: 'Rectangle: périmètre 30cm, L = 2l. Dimensions?',
              answer: '{2L + 2l = 30; L = 2l}. L = 10cm, l = 5cm',
              difficulty: 'intermediate'
            },
            {
              type: 'ages',
              question: 'Somme âges = 45 ans, différence = 15 ans. Âges?',
              answer: '{x + y = 45; x - y = 15}. 30 ans et 15 ans',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        }
      ]
    },
    {
      id: 'ch10',
      title: 'PROJECTION ET THÉORÈME DE THALÈS',
      sections: [
        {
          id: 'ch10-s1',
          title: 'Projection orthogonale',
          description: 'Comprendre la projection d\'un point sur une droite',
          concepts: ['Projection', 'Orthogonale', 'Perpendiculaire', 'Projeté'],
          objectives: [
            'Définir la projection orthogonale',
            'Construire le projeté d\'un point',
            'Calculer des distances',
            'Utiliser dans des problèmes'
          ],
          content: {
            definition: {
              projection: 'Projeté orthogonal de M sur droite D est le point H tel que (MH) ⊥ D',
              notation: 'H = proj_D(M)',
              propriete: 'MH est la plus courte distance de M à D'
            },
            construction: {
              methode: [
                'Tracer la droite D',
                'Du point M, tracer la perpendiculaire à D',
                'Marquer l\'intersection H',
                'H est le projeté de M'
              ]
            },
            proprietes: {
              conservation_alignement: 'Points alignés → projetés alignés',
              conservation_milieu: 'Projeté du milieu = milieu des projetés',
              distance: 'MH = distance de M à D'
            },
            mauritanianContext: [
              'Ombres au sol',
              'Distance d\'un point à une route',
              'Constructions perpendiculaires',
              'Architecture'
            ]
          },
          exercises: [
            {
              type: 'construction',
              question: 'Construis le projeté de A sur la droite D',
              answer: 'Tracer perpendiculaire de A à D, marquer H',
              difficulty: 'beginner'
            },
            {
              type: 'distance',
              question: 'Quelle est la distance minimale de M à D?',
              answer: 'La distance MH où H est le projeté orthogonal',
              difficulty: 'intermediate'
            },
            {
              type: 'propriete',
              question: 'I milieu de [AB]. Où est le projeté de I?',
              answer: 'Au milieu des projetés de A et B',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch10-s2',
          title: 'Théorème de Thalès - Configuration',
          description: 'Comprendre la configuration de Thalès',
          concepts: ['Thalès', 'Parallélisme', 'Proportionnalité', 'Configuration'],
          objectives: [
            'Reconnaître une configuration de Thalès',
            'Identifier les rapports égaux',
            'Vérifier les conditions',
            'Appliquer le théorème'
          ],
          content: {
            theoreme: {
              enonce: 'Si (MN) ∥ (BC) alors OA/OM = OB/ON = AB/MN',
              configuration: 'Deux droites sécantes + parallèle',
              conditions: [
                'Deux droites d et d\' sécantes',
                'Points alignés sur d et d\'',
                'Droites parallèles'
              ]
            },
            schemas: {
              configuration_papillon: 'Points de part et d\'autre du sommet',
              configuration_triangle: 'MN coupe deux côtés du triangle'
            },
            exemples: {
              ex1: {
                donnees: 'OA = 6, OM = 4, OB = 9, (MN) ∥ (AB)',
                calcul: 'OM/OA = 4/6 = 2/3',
                conclusion: 'ON/OB = 2/3 donc ON = 6'
              }
            },
            mauritanianContext: [
              'Calculs d\'échelles',
              'Plans et maquettes',
              'Agrandissements',
              'Mesures indirectes'
            ]
          },
          exercises: [
            {
              type: 'reconnaissance',
              question: '(DE) ∥ (BC). Quels rapports sont égaux?',
              answer: 'AD/AB = AE/AC = DE/BC',
              difficulty: 'beginner'
            },
            {
              type: 'calcul',
              question: 'OA = 8, OM = 6, OB = 12, (MN) ∥ (AB). Calcule ON',
              answer: 'OM/OA = 6/8 = 3/4, donc ON = 3/4 × 12 = 9',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'AD = 5, AB = 8, AE = 6, (DE) ∥ (BC). Calcule AC',
              answer: 'AD/AB = AE/AC, 5/8 = 6/AC, AC = 48/5 = 9,6',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch10-s3',
          title: 'Applications du théorème de Thalès',
          description: 'Calculer des longueurs avec Thalès',
          concepts: ['Proportionnalité', 'Calculs', 'Longueurs inconnues'],
          objectives: [
            'Calculer des longueurs avec Thalès',
            'Résoudre des problèmes pratiques',
            'Utiliser les rapports de proportionnalité',
            'Vérifier les hypothèses'
          ],
          content: {
            methode_calcul: {
              etapes: [
                'Vérifier que les conditions sont remplies',
                'Identifier les longueurs connues',
                'Écrire les rapports égaux',
                'Résoudre l\'équation',
                'Vérifier la cohérence'
              ]
            },
            exemples_pratiques: {
              ex1: {
                contexte: 'Mesurer la hauteur d\'un arbre avec son ombre',
                donnees: 'Bâton 1,5m fait ombre 2m, arbre fait ombre 8m',
                calcul: '1,5/2 = h/8',
                resultat: 'h = 6m'
              },
              ex2: {
                contexte: 'Triangle ABC, I et J milieux',
                propriete: '(IJ) ∥ (BC) et IJ = BC/2',
                application: 'Théorème de la droite des milieux'
              }
            },
            mauritanianContext: [
              'Mesures de hauteurs (arbres, bâtiments)',
              'Calculs d\'échelles',
              'Problèmes de plans',
              'Topographie'
            ]
          },
          exercises: [
            {
              type: 'hauteur',
              question: 'Piquet 2m fait ombre 3m, palmier fait ombre 12m. Hauteur?',
              answer: '2/3 = h/12, h = 8m',
              difficulty: 'intermediate'
            },
            {
              type: 'triangle',
              question: 'AB = 10, DE = 6, AD = 4, (DE) ∥ (BC). Calcule DB',
              answer: 'AD/AB = 4/10 = 2/5, DB = AB - AD = 6',
              difficulty: 'intermediate'
            },
            {
              type: 'verification',
              question: 'OA = 6, OM = 4, OB = 8, ON = 5. (MN) ∥ (AB)?',
              answer: 'OM/OA = 4/6 = 2/3, ON/OB = 5/8 ≠ 2/3, donc NON',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch10-s4',
          title: 'Réciproque du théorème de Thalès',
          description: 'Prouver le parallélisme',
          concepts: ['Réciproque', 'Parallélisme', 'Démonstration', 'Égalité de rapports'],
          objectives: [
            'Connaître la réciproque',
            'Prouver que des droites sont parallèles',
            'Vérifier les conditions',
            'Utiliser dans des démonstrations'
          ],
          content: {
            reciproque: {
              enonce: 'Si OA/OM = OB/ON et A,M,O alignés et B,N,O alignés, alors (MN) ∥ (AB)',
              conditions: [
                'Points alignés',
                'Rapports égaux',
                'Même ordre sur les droites'
              ]
            },
            methode_demonstration: {
              etapes: [
                'Vérifier l\'alignement',
                'Calculer les deux rapports',
                'Vérifier l\'égalité',
                'Conclure au parallélisme'
              ]
            },
            exemples: {
              ex1: {
                donnees: 'OA = 6, OM = 4, OB = 9, ON = 6',
                verification: 'OM/OA = 4/6 = 2/3, ON/OB = 6/9 = 2/3',
                conclusion: 'Rapports égaux donc (MN) ∥ (AB)'
              }
            },
            attention: 'Vérifier TOUTES les conditions avant de conclure',
            mauritanianContext: [
              'Vérification de parallélisme en construction',
              'Contrôle de plans',
              'Géométrie appliquée',
              'Architecture'
            ]
          },
          exercises: [
            {
              type: 'demonstration',
              question: 'OA = 8, OM = 6, OB = 12, ON = 9. (MN) ∥ (AB)?',
              answer: 'OM/OA = 6/8 = 3/4, ON/OB = 9/12 = 3/4, donc OUI',
              difficulty: 'intermediate'
            },
            {
              type: 'contre_exemple',
              question: 'OA = 5, OM = 3, OB = 7, ON = 4. (MN) ∥ (AB)?',
              answer: '3/5 ≠ 4/7, donc NON',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'Prouve que I et J milieux ⟹ (IJ) ∥ (BC)',
              answer: 'AI/AB = 1/2, AJ/AC = 1/2, rapports égaux donc parallèle',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch10-s5',
          title: 'Problèmes avec Thalès',
          description: 'Résoudre des problèmes complexes',
          concepts: ['Applications', 'Problèmes concrets', 'Mesures indirectes'],
          objectives: [
            'Résoudre des problèmes variés',
            'Choisir la bonne méthode',
            'Interpréter les résultats',
            'Appliquer dans des contextes réels'
          ],
          content: {
            types_problemes: {
              type1: 'Calcul de hauteurs inaccessibles',
              type2: 'Agrandissement/réduction de figures',
              type3: 'Démonstrations géométriques',
              type4: 'Plans et maquettes'
            },
            strategie: {
              etapes: [
                'Identifier la configuration',
                'Repérer les parallèles',
                'Lister les données',
                'Écrire les rapports',
                'Résoudre'
              ]
            },
            exemples_mauritaniens: {
              ex1: {
                contexte: 'Calculer largeur d\'une rivière',
                methode: 'Utiliser des mesures accessibles + Thalès',
                description: 'Placer des piquets, mesurer, calculer'
              }
            },
            mauritanianContext: [
              'Mesures de terrains',
              'Hauteurs de constructions',
              'Largeurs de fleuves',
              'Topographie locale'
            ]
          },
          exercises: [
            {
              type: 'hauteur',
              question: 'Minaret: ombre 15m. Bâton 2m fait ombre 3m. Hauteur minaret?',
              answer: '2/3 = h/15, h = 10m',
              difficulty: 'intermediate'
            },
            {
              type: 'reduction',
              question: 'Triangle ABC agrandi avec rapport 2/3. Si BC = 12, calcule B\'C\'',
              answer: 'B\'C\'/BC = 2/3, B\'C\' = 8',
              difficulty: 'intermediate'
            },
            {
              type: 'complexe',
              question: 'I et J milieux, BC = 10. Calcule IJ',
              answer: 'IJ = BC/2 = 5 (droite des milieux)',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        }
      ]
    },
    {
      id: 'ch11',
      title: 'TRANSFORMATIONS DU PLAN',
      sections: [
        {
          id: 'ch11-s1',
          title: 'Symétrie axiale',
          description: 'Comprendre et utiliser la symétrie axiale',
          concepts: ['Symétrie axiale', 'Axe', 'Image', 'Conservation'],
          objectives: [
            'Définir la symétrie axiale',
            'Construire l\'image d\'un point',
            'Connaître les propriétés',
            'Identifier les axes de symétrie'
          ],
          content: {
            definition: {
              symetrie: 'S_Δ(M) = M\' tel que Δ est médiatrice de [MM\']',
              axe: 'Droite Δ (axe de symétrie)',
              propriete: 'Δ perpendiculaire à [MM\'] en son milieu'
            },
            construction: {
              methode: [
                'Tracer la perpendiculaire à Δ passant par M',
                'Mesurer la distance de M à Δ',
                'Reporter cette distance de l\'autre côté',
                'Marquer M\''
              ]
            },
            proprietes_conservation: {
              distances: 'AB = A\'B\' (conservation des longueurs)',
              angles: 'Les angles sont conservés',
              alignement: 'Points alignés → images alignées',
              parallelisme: 'Droites parallèles → images parallèles'
            },
            mauritanianContext: [
              'Motifs décoratifs symétriques',
              'Architecture (mosquées)',
              'Artisanat mauritanien',
              'Tissages traditionnels'
            ]
          },
          exercises: [
            {
              type: 'construction',
              question: 'Construis le symétrique de A par rapport à l\'axe D',
              answer: 'Perpendiculaire à D, même distance de l\'autre côté',
              difficulty: 'beginner'
            },
            {
              type: 'propriete',
              question: 'Si AB = 5, quelle est A\'B\' (symétrie)?',
              answer: 'A\'B\' = 5 (conservation des distances)',
              difficulty: 'beginner'
            },
            {
              type: 'axes',
              question: 'Combien d\'axes de symétrie pour un carré?',
              answer: '4 axes (2 diagonales + 2 médiatrices)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch11-s2',
          title: 'Symétrie centrale',
          description: 'Comprendre et utiliser la symétrie centrale',
          concepts: ['Symétrie centrale', 'Centre', 'Milieu', 'Image'],
          objectives: [
            'Définir la symétrie centrale',
            'Construire l\'image d\'un point',
            'Connaître les propriétés',
            'Identifier les centres de symétrie'
          ],
          content: {
            definition: {
              symetrie: 'S_O(M) = M\' tel que O est milieu de [MM\']',
              centre: 'Point O (centre de symétrie)',
              propriete: 'OM⃗ = -OM\'⃗'
            },
            construction: {
              methode: [
                'Tracer la droite (OM)',
                'Mesurer OM',
                'Reporter cette distance de l\'autre côté de O',
                'Marquer M\''
              ]
            },
            proprietes: {
              conservation: 'Mêmes propriétés que symétrie axiale',
              parallelisme: 'Image d\'une droite = droite parallèle',
              point_invariant: 'S_O(O) = O'
            },
            figures_symetriques: {
              parallelogramme: 'Centre = intersection des diagonales',
              cercle: 'Centre du cercle',
              losange: 'Intersection des diagonales'
            },
            mauritanianContext: [
              'Motifs centraux',
              'Rosaces',
              'Décorations circulaires',
              'Art islamique'
            ]
          },
          exercises: [
            {
              type: 'construction',
              question: 'Construis le symétrique de A par rapport à O',
              answer: 'Prolonger (OA), reporter OA de l\'autre côté',
              difficulty: 'beginner'
            },
            {
              type: 'milieu',
              question: 'O milieu de [BB\']. Quelle transformation?',
              answer: 'Symétrie centrale de centre O',
              difficulty: 'beginner'
            },
            {
              type: 'figure',
              question: 'Centre de symétrie d\'un parallélogramme?',
              answer: 'Intersection des diagonales',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch11-s3',
          title: 'Translation',
          description: 'Comprendre et utiliser les translations',
          concepts: ['Translation', 'Vecteur', 'Déplacement', 'Conservation'],
          objectives: [
            'Définir une translation',
            'Construire l\'image par translation',
            'Connaître les propriétés',
            'Composer des translations'
          ],
          content: {
            definition: {
              translation: 't_u⃗(M) = M\' tel que MM\'⃗ = u⃗',
              vecteur: 'u⃗ = vecteur de translation',
              propriete: 'Tous les points se déplacent de la même façon'
            },
            construction: {
              methode: [
                'À partir de M',
                'Reporter le vecteur u⃗',
                'Marquer M\' à l\'extrémité'
              ]
            },
            proprietes: {
              conservation: 'Distances, angles, parallélisme conservés',
              composition: 't_v⃗ ∘ t_u⃗ = t_{u⃗+v⃗}',
              inverse: 't_{-u⃗} est la translation inverse'
            },
            coordonnees: {
              formule: 'Si u⃗(a,b) et M(x,y), alors M\'(x+a, y+b)',
              exemple: 'u⃗(2,3), M(1,4) ⟹ M\'(3,7)'
            },
            mauritanianContext: [
              'Déplacements d\'objets',
              'Pavages',
              'Frises décoratives',
              'Motifs répétitifs'
            ]
          },
          exercises: [
            {
              type: 'construction',
              question: 'Construis l\'image de A par t_u⃗',
              answer: 'Reporter u⃗ à partir de A',
              difficulty: 'beginner'
            },
            {
              type: 'coordonnees',
              question: 'u⃗(3,-2), M(2,5). Trouve M\'',
              answer: 'M\'(2+3, 5-2) = M\'(5,3)',
              difficulty: 'intermediate'
            },
            {
              type: 'composition',
              question: 't_u⃗ puis t_v⃗ avec u⃗(1,2), v⃗(3,1). Vecteur résultant?',
              answer: 'u⃗ + v⃗ = (4,3)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch11-s4',
          title: 'Rotation',
          description: 'Comprendre les rotations',
          concepts: ['Rotation', 'Centre', 'Angle', 'Image'],
          objectives: [
            'Définir une rotation',
            'Identifier centre et angle',
            'Construire l\'image',
            'Connaître les propriétés'
          ],
          content: {
            definition: {
              rotation: 'R(O,θ)(M) = M\' tel que OM = OM\' et (OM⃗,OM\'⃗) = θ',
              centre: 'Point O fixe',
              angle: 'θ (angle de rotation)',
              sens: 'Positif = sens trigonométrique (anti-horaire)'
            },
            construction: {
              methode: [
                'Tracer le cercle de centre O et rayon OM',
                'Reporter l\'angle θ à partir de (OM)',
                'Marquer M\' sur le cercle'
              ]
            },
            proprietes: {
              conservation: 'Distances et angles conservés',
              point_fixe: 'R(O,θ)(O) = O',
              composition: 'R(O,θ₁) ∘ R(O,θ₂) = R(O,θ₁+θ₂)'
            },
            cas_particuliers: {
              rotation_90: 'Quart de tour',
              rotation_180: 'Demi-tour = symétrie centrale',
              rotation_360: 'Tour complet = identité'
            },
            mauritanianContext: [
              'Motifs circulaires',
              'Rosaces islamiques',
              'Décorations',
              'Mouvements circulaires'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'R(O,90°) d\'un carré. Quelle image?',
              answer: 'Carré tourné d\'un quart de tour',
              difficulty: 'beginner'
            },
            {
              type: 'composition',
              question: 'R(O,60°) puis R(O,30°). Angle total?',
              answer: '60° + 30° = 90°',
              difficulty: 'intermediate'
            },
            {
              type: 'equivalence',
              question: 'R(O,180°) équivaut à quelle transformation?',
              answer: 'Symétrie centrale de centre O',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch11-s5',
          title: 'Homothétie',
          description: 'Comprendre les homothéties',
          concepts: ['Homothétie', 'Centre', 'Rapport', 'Agrandissement', 'Réduction'],
          objectives: [
            'Définir une homothétie',
            'Identifier centre et rapport',
            'Construire l\'image',
            'Comprendre les effets sur les mesures'
          ],
          content: {
            definition: {
              homothetie: 'h(O,k)(M) = M\' tel que OM\'⃗ = k×OM⃗',
              centre: 'Point O fixe',
              rapport: 'k ∈ ℝ*',
              interpretation: {
                k_plus_grand_1: 'Agrandissement',
                k_entre_0_et_1: 'Réduction',
                k_negatif: 'Changement de sens'
              }
            },
            effets: {
              longueurs: 'Multipliées par |k|',
              aires: 'Multipliées par k²',
              angles: 'Conservés',
              parallelisme: 'Conservé'
            },
            exemples: {
              ex1: {
                transformation: 'h(O,2)',
                carre_4cm: 'Image = carré 8cm',
                aire: 'Aire × 4 (16 → 64)'
              },
              ex2: {
                transformation: 'h(O,1/2)',
                triangle: 'Réduction de moitié',
                effet: 'Côtés divisés par 2, aire divisée par 4'
              }
            },
            mauritanianContext: [
              'Plans et maquettes',
              'Agrandissement de photos',
              'Échelles de cartes',
              'Reproduction de motifs'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'h(O,3) d\'un segment de 4cm. Longueur image?',
              answer: '4 × 3 = 12cm',
              difficulty: 'beginner'
            },
            {
              type: 'aire',
              question: 'h(O,2) d\'un carré d\'aire 9cm². Aire de l\'image?',
              answer: '9 × 2² = 9 × 4 = 36cm²',
              difficulty: 'intermediate'
            },
            {
              type: 'coordonnees',
              question: 'h(O,2) avec M(3,4). Coordonnées de M\'?',
              answer: 'M\'(2×3, 2×4) = M\'(6,8)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch12',
      title: 'TRIGONOMÉTRIE',
      sections: [
        {
          id: 'ch12-s1',
          title: 'Définitions de sinus, cosinus, tangente',
          description: 'Découvrir les rapports trigonométriques',
          concepts: ['Sinus', 'Cosinus', 'Tangente', 'Triangle rectangle'],
          objectives: [
            'Définir sin, cos, tan d\'un angle aigu',
            'Identifier côté opposé/adjacent/hypoténuse',
            'Calculer les rapports',
            'Utiliser la calculatrice'
          ],
          content: {
            definitions: {
              contexte: 'Dans un triangle rectangle ABC avec angle aigu Â',
              cosinus: {
                definition: 'cos Â = côté adjacent / hypoténuse',
                notation: 'cos Â = AB/AC'
              },
              sinus: {
                definition: 'sin Â = côté opposé / hypoténuse',
                notation: 'sin Â = BC/AC'
              },
              tangente: {
                definition: 'tan Â = côté opposé / côté adjacent',
                notation: 'tan Â = BC/AB'
              }
            },
            exemples: {
              ex1: {
                triangle: 'ABC rectangle en B, AB = 3, BC = 4, AC = 5',
                cos_A: 'cos Â = 3/5 = 0,6',
                sin_A: 'sin Â = 4/5 = 0,8',
                tan_A: 'tan Â = 4/3 ≈ 1,33'
              }
            },
            calculatrice: {
              mode: 'Mettre en mode DEGRÉ',
              exemples: ['cos 60° = 0,5', 'sin 30° = 0,5', 'tan 45° = 1']
            },
            mauritanianContext: [
              'Calculs de hauteurs',
              'Mesures d\'angles',
              'Navigation',
              'Construction'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Triangle rectangle: adjacent = 3, hypoténuse = 5. Calcule cos',
              answer: 'cos = 3/5 = 0,6',
              difficulty: 'beginner'
            },
            {
              type: 'identification',
              question: 'Opposé = 7, adjacent = 24. Calcule tan',
              answer: 'tan = 7/24',
              difficulty: 'beginner'
            },
            {
              type: 'avec_pythagore',
              question: 'AB = 5, AC = 13 (hypoténuse). Calcule sin Ĉ',
              answer: 'BC = 12, sin Ĉ = 5/13',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch12-s2',
          title: 'Relation fondamentale et angles complémentaires',
          description: 'Relations entre sin, cos, tan',
          concepts: ['Relation fondamentale', 'Angles complémentaires', 'Propriétés'],
          objectives: [
            'Connaître cos²α + sin²α = 1',
            'Utiliser tan α = sin α / cos α',
            'Appliquer aux angles complémentaires',
            'Résoudre des problèmes'
          ],
          content: {
            relation_fondamentale: {
              formule: 'cos²α + sin²α = 1',
              justification: 'Théorème de Pythagore',
              utilite: 'Calculer un rapport connaissant l\'autre',
              exemple: 'Si cos α = 3/5, alors sin²α = 1 - 9/25 = 16/25, sin α = 4/5'
            },
            relation_tangente: {
              formule: 'tan α = sin α / cos α',
              exemple: 'sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3'
            },
            angles_complementaires: {
              propriete: 'Si Â + B̂ = 90°, alors sin Â = cos B̂ et cos Â = sin B̂',
              exemple: 'sin 30° = cos 60° = 1/2'
            },
            mauritanianContext: [
              'Vérification de calculs',
              'Relations géométriques',
              'Problèmes de triangles',
              'Applications pratiques'
            ]
          },
          exercises: [
            {
              type: 'relation',
              question: 'Si cos α = 5/13, calcule sin α',
              answer: 'sin²α = 1 - 25/169 = 144/169, sin α = 12/13',
              difficulty: 'intermediate'
            },
            {
              type: 'tangente',
              question: 'sin α = 3/5, cos α = 4/5. Calcule tan α',
              answer: 'tan α = (3/5)/(4/5) = 3/4',
              difficulty: 'intermediate'
            },
            {
              type: 'complementaire',
              question: 'Si sin 25° = 0,42, que vaut cos 65°?',
              answer: 'cos 65° = sin 25° = 0,42',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch12-s3',
          title: 'Valeurs remarquables',
          description: 'Connaître les valeurs de 30°, 45°, 60°',
          concepts: ['Angles remarquables', 'Valeurs exactes', 'Tableau'],
          objectives: [
            'Connaître les valeurs de 30°, 45°, 60°',
            'Mémoriser le tableau',
            'Utiliser sans calculatrice',
            'Appliquer dans des calculs'
          ],
          content: {
            tableau: {
              angles: ['30°', '45°', '60°'],
              sinus: ['1/2', '√2/2', '√3/2'],
              cosinus: ['√3/2', '√2/2', '1/2'],
              tangente: ['√3/3', '1', '√3']
            },
            demonstrations: {
              triangle_30_60: {
                figure: 'Triangle équilatéral coupé en deux',
                resultats: 'sin 30° = 1/2, cos 30° = √3/2'
              },
              triangle_45: {
                figure: 'Triangle rectangle isocèle',
                resultats: 'sin 45° = cos 45° = √2/2'
              }
            },
            memorisation: {
              astuce_45: 'Pour 45°, sin = cos = √2/2, tan = 1',
              astuce_30_60: 'sin 30° = cos 60° = 1/2'
            },
            mauritanianContext: [
              'Calculs sans calculatrice',
              'Angles standards en construction',
              'Problèmes géométriques',
              'Applications pratiques'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule: cos 60° + sin 30°',
              answer: '1/2 + 1/2 = 1',
              difficulty: 'beginner'
            },
            {
              type: 'exact',
              question: 'Donne la valeur exacte de tan 60°',
              answer: '√3',
              difficulty: 'beginner'
            },
            {
              type: 'application',
              question: 'Triangle équilatéral côté 6. Calcule la hauteur',
              answer: 'h = 6 × sin 60° = 6 × √3/2 = 3√3',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch12-s4',
          title: 'Résolution de triangles rectangles - Longueurs',
          description: 'Calculer des longueurs avec trigonométrie',
          concepts: ['Calcul de longueurs', 'Choix de formule', 'Applications'],
          objectives: [
            'Calculer des longueurs inconnues',
            'Choisir le bon rapport (sin, cos, tan)',
            'Résoudre des triangles',
            'Appliquer à des problèmes concrets'
          ],
          content: {
            strategie: {
              etapes: [
                'Faire un schéma clair',
                'Identifier l\'angle de référence',
                'Repérer opposé/adjacent/hypoténuse',
                'Choisir sin, cos ou tan',
                'Résoudre'
              ]
            },
            exemples: {
              ex1: {
                donnees: 'Triangle ABC rectangle en B, Â = 35°, AC = 10cm',
                question: 'Calcule AB',
                choix: 'AB adjacent, AC hypoténuse ⟹ cos',
                calcul: 'cos 35° = AB/10',
                resultat: 'AB = 10 × cos 35° ≈ 8,19cm'
              },
              ex2: {
                donnees: 'Angle 50°, adjacent = 6cm',
                question: 'Calcule opposé',
                calcul: 'tan 50° = opposé/6',
                resultat: 'opposé = 6 × tan 50° ≈ 7,15cm'
              }
            },
            mauritanianContext: [
              'Hauteurs de bâtiments',
              'Distances inaccessibles',
              'Pentes de terrains',
              'Navigation'
            ]
          },
          exercises: [
            {
              type: 'avec_cos',
              question: 'Angle 40°, hypoténuse 15cm. Calcule adjacent',
              answer: 'adjacent = 15 × cos 40° ≈ 11,49cm',
              difficulty: 'intermediate'
            },
            {
              type: 'avec_sin',
              question: 'Angle 60°, hypoténuse 8cm. Calcule opposé',
              answer: 'opposé = 8 × sin 60° = 8 × √3/2 = 4√3 cm',
              difficulty: 'intermediate'
            },
            {
              type: 'avec_tan',
              question: 'Angle 35°, adjacent 20m. Hauteur?',
              answer: 'h = 20 × tan 35° ≈ 14m',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch12-s5',
          title: 'Résolution de triangles rectangles - Angles',
          description: 'Calculer des angles avec trigonométrie',
          concepts: ['Calcul d\'angles', 'Fonctions inverses', 'Arc cos/sin/tan'],
          objectives: [
            'Calculer des mesures d\'angles',
            'Utiliser les fonctions inverses',
            'Résoudre des problèmes pratiques',
            'Interpréter les résultats'
          ],
          content: {
            fonctions_inverses: {
              arccos: 'cos⁻¹ ou arccos pour trouver l\'angle',
              arcsin: 'sin⁻¹ ou arcsin pour trouver l\'angle',
              arctan: 'tan⁻¹ ou arctan pour trouver l\'angle'
            },
            methode: {
              etapes: [
                'Calculer le rapport (opposé/hypoténuse, etc.)',
                'Utiliser la fonction inverse',
                'Lire l\'angle sur la calculatrice',
                'Vérifier la cohérence'
              ]
            },
            exemples: {
              ex1: {
                donnees: 'Opposé = 8cm, hypoténuse = 10cm',
                calcul: 'sin θ = 8/10 = 0,8',
                angle: 'θ = sin⁻¹(0,8) ≈ 53,1°'
              },
              ex2: {
                donnees: 'Adjacent = 12, opposé = 7',
                calcul: 'tan θ = 7/12',
                angle: 'θ = tan⁻¹(7/12) ≈ 30,3°'
              }
            },
            problemes_concrets: {
              rampe: {
                enonce: 'Rampe 8m monte de 1,5m. Angle?',
                calcul: 'sin θ = 1,5/8',
                resultat: 'θ ≈ 10,8°'
              }
            },
            mauritanianContext: [
              'Inclinaisons de toits',
              'Pentes de routes',
              'Angles de construction',
              'Mesures topographiques'
            ]
          },
          exercises: [
            {
              type: 'avec_sin',
              question: 'Opposé = 5, hypoténuse = 8. Trouve l\'angle',
              answer: 'sin θ = 5/8, θ = sin⁻¹(0,625) ≈ 38,7°',
              difficulty: 'intermediate'
            },
            {
              type: 'avec_tan',
              question: 'Opposé = 10, adjacent = 15. Angle?',
              answer: 'tan θ = 10/15 = 2/3, θ ≈ 33,7°',
              difficulty: 'intermediate'
            },
            {
              type: 'probleme',
              question: 'Avion monte 500m sur 2000m. Angle d\'inclinaison?',
              answer: 'sin θ = 500/2000 = 1/4, θ ≈ 14,5°',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        }
      ]
    },
    {
      id: 'ch13',
      title: 'FONCTIONS AFFINES',
      sections: [
        {
          id: 'ch13-s1',
          title: 'Notion de fonction',
          description: 'Comprendre le concept de fonction',
          concepts: ['Fonction', 'Variable', 'Image', 'Antécédent', 'Notation'],
          objectives: [
            'Comprendre la notion de fonction',
            'Utiliser la notation f(x)',
            'Calculer des images',
            'Trouver des antécédents'
          ],
          content: {
            definition: {
              fonction: 'Processus qui associe à chaque nombre x un nombre unique f(x)',
              notation: 'f: x ↦ f(x) ou y = f(x)',
              vocabulaire: {
                variable: 'x (nombre de départ)',
                image: 'f(x) (nombre d\'arrivée)',
                antecedent: 'Si f(a) = b, alors a est antécédent de b'
              }
            },
            exemples: {
              ex1: {
                fonction: 'f(x) = 2x + 3',
                calculs: {
                  f_2: 'f(2) = 2×2 + 3 = 7',
                  f_0: 'f(0) = 3',
                  f_moins_1: 'f(-1) = 2×(-1) + 3 = 1'
                }
              },
              ex2: {
                fonction: 'g(x) = x²',
                calculs: 'g(3) = 9, g(-3) = 9, g(0) = 0'
              }
            },
            tableau_valeurs: {
              utilite: 'Organiser les calculs',
              exemple: {
                x: [-2, -1, 0, 1, 2],
                fx: [-1, 1, 3, 5, 7]
              }
            },
            mauritanianContext: [
              'Prix en fonction de quantité',
              'Distance en fonction du temps',
              'Coût en fonction d\'articles',
              'Tarifications variables'
            ]
          },
          exercises: [
            {
              type: 'calcul_image',
              question: 'f(x) = 3x - 5. Calcule f(4)',
              answer: 'f(4) = 3×4 - 5 = 12 - 5 = 7',
              difficulty: 'beginner'
            },
            {
              type: 'antecedent',
              question: 'f(x) = 2x + 1. Trouve x tel que f(x) = 9',
              answer: '2x + 1 = 9, 2x = 8, x = 4',
              difficulty: 'intermediate'
            },
            {
              type: 'tableau',
              question: 'f(x) = x - 2. Complète pour x = -1, 0, 1, 2',
              answer: 'f(-1) = -3, f(0) = -2, f(1) = -1, f(2) = 0',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch13-s2',
          title: 'Fonction affine - Définition',
          description: 'Comprendre les fonctions affines',
          concepts: ['Fonction affine', 'Forme f(x) = ax + b', 'Coefficients'],
          objectives: [
            'Définir une fonction affine',
            'Identifier a et b',
            'Reconnaître les cas particuliers',
            'Calculer avec des fonctions affines'
          ],
          content: {
            definition: {
              fonction_affine: 'f(x) = ax + b où a et b sont des réels',
              coefficient_a: 'a = coefficient directeur',
              coefficient_b: 'b = ordonnée à l\'origine'
            },
            cas_particuliers: {
              fonction_lineaire: {
                forme: 'f(x) = ax (quand b = 0)',
                exemple: 'f(x) = 3x'
              },
              fonction_constante: {
                forme: 'f(x) = b (quand a = 0)',
                exemple: 'f(x) = 5'
              }
            },
            exemples: {
              ex1: 'f(x) = 2x + 3 (affine: a = 2, b = 3)',
              ex2: 'g(x) = -x + 1 (affine: a = -1, b = 1)',
              ex3: 'h(x) = 5x (linéaire: a = 5, b = 0)',
              ex4: 'k(x) = 7 (constante: a = 0, b = 7)'
            },
            mauritanianContext: [
              'Tarif taxi: P(x) = 0,5x + 0,8 (0,8 MRU + 0,5 MRU/km)',
              'Conversion de températures',
              'Prix progressifs',
              'Coûts variables'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'f(x) = 4x - 7. Donne a et b',
              answer: 'a = 4, b = -7',
              difficulty: 'beginner'
            },
            {
              type: 'reconnaissance',
              question: 'g(x) = 3x est-elle affine? Linéaire?',
              answer: 'Affine ET linéaire (b = 0)',
              difficulty: 'beginner'
            },
            {
              type: 'probleme',
              question: 'Taxi: 1 MRU prise + 0,6 MRU/km. Écris la fonction P(x)',
              answer: 'P(x) = 0,6x + 1',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch13-s3',
          title: 'Représentation graphique',
          description: 'Tracer le graphe d\'une fonction affine',
          concepts: ['Graphe', 'Droite', 'Tracé', 'Points caractéristiques'],
          objectives: [
            'Savoir que le graphe est une droite',
            'Tracer avec deux points',
            'Utiliser a et b pour tracer',
            'Lire graphiquement des valeurs'
          ],
          content: {
            propriete: {
              graphe: 'Le graphe de f(x) = ax + b est une DROITE',
              consequence: 'Deux points suffisent pour tracer'
            },
            methode_trace: {
              methode1: {
                nom: 'Avec b et un autre point',
                etapes: [
                  'Placer (0, b) sur l\'axe des ordonnées',
                  'Calculer f(1) = a + b, placer (1, a+b)',
                  'Tracer la droite'
                ]
              },
              methode2: {
                nom: 'Avec deux points quelconques',
                exemple: 'Calculer f(0) et f(2), tracer'
              }
            },
            lecture_graphique: {
              image: 'Tracer verticale depuis x, lire y',
              antecedent: 'Tracer horizontale depuis y, lire x'
            },
            mauritanianContext: [
              'Graphiques de prix',
              'Évolution de quantités',
              'Visualisation de données',
              'Courbes économiques'
            ]
          },
          exercises: [
            {
              type: 'trace',
              question: 'Trace f(x) = 2x + 1',
              answer: 'Points (0,1) et (1,3), tracer la droite',
              difficulty: 'beginner'
            },
            {
              type: 'lecture',
              question: 'Sur le graphe de f, f(3) = 7. Lis f(0)',
              answer: 'Lire l\'ordonnée à l\'origine sur le graphe',
              difficulty: 'intermediate'
            },
            {
              type: 'determination',
              question: 'Graphe passe par (0,2) et (1,5). Trouve f(x)',
              answer: 'b = 2, a = 5-2 = 3, donc f(x) = 3x + 2',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch13-s4',
          title: 'Sens de variation',
          description: 'Étudier si la fonction est croissante ou décroissante',
          concepts: ['Croissance', 'Décroissance', 'Signe de a', 'Variation'],
          objectives: [
            'Déterminer le sens de variation',
            'Utiliser le signe de a',
            'Comparer des images',
            'Résoudre des inéquations'
          ],
          content: {
            propriete: {
              a_positif: 'Si a > 0, f est croissante',
              a_negatif: 'Si a < 0, f est décroissante',
              a_nul: 'Si a = 0, f est constante'
            },
            definitions: {
              croissante: 'Si x₁ < x₂, alors f(x₁) < f(x₂)',
              decroissante: 'Si x₁ < x₂, alors f(x₁) > f(x₂)',
              interpretation: 'La droite monte/descend'
            },
            exemples: {
              ex1: {
                fonction: 'f(x) = 3x + 2',
                a: 'a = 3 > 0',
                conclusion: 'f est croissante'
              },
              ex2: {
                fonction: 'g(x) = -2x + 5',
                a: 'a = -2 < 0',
                conclusion: 'g est décroissante'
              }
            },
            mauritanianContext: [
              'Évolution de prix',
              'Croissance/décroissance',
              'Tendances économiques',
              'Variations de température'
            ]
          },
          exercises: [
            {
              type: 'determination',
              question: 'f(x) = 5x - 3. Sens de variation?',
              answer: 'a = 5 > 0, donc croissante',
              difficulty: 'beginner'
            },
            {
              type: 'comparaison',
              question: 'f(x) = -3x + 2. Compare f(1) et f(2)',
              answer: 'f décroissante, donc f(1) > f(2)',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'Pour quelle valeur de a, f(x) = ax + 3 est décroissante?',
              answer: 'a < 0',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch13-s5',
          title: 'Détermination d\'une fonction affine',
          description: 'Trouver f(x) = ax + b',
          concepts: ['Détermination', 'Système', 'Deux points', 'Coefficients'],
          objectives: [
            'Déterminer a et b connaissant deux points',
            'Utiliser un système d\'équations',
            'Déterminer avec conditions données',
            'Résoudre des problèmes'
          ],
          content: {
            methode: {
              avec_deux_points: {
                donnees: 'f(x₁) = y₁ et f(x₂) = y₂',
                systeme: '{ax₁ + b = y₁; ax₂ + b = y₂}',
                resolution: 'Résoudre pour a et b'
              }
            },
            exemple_complet: {
              enonce: 'f(2) = 5 et f(3) = 7',
              systeme: '{2a + b = 5; 3a + b = 7}',
              resolution: [
                'Soustraire: a = 2',
                'Remplacer: 2×2 + b = 5 ⟹ b = 1'
              ],
              fonction: 'f(x) = 2x + 1'
            },
            formule_directe: {
              coefficient: 'a = (f(x₂) - f(x₁))/(x₂ - x₁)',
              ordonnee: 'b = f(x₁) - a×x₁'
            },
            mauritanianContext: [
              'Modélisation de tarifs',
              'Analyse de données',
              'Prévisions',
              'Études économiques'
            ]
          },
          exercises: [
            {
              type: 'deux_points',
              question: 'f(1) = 4 et f(3) = 10. Détermine f(x)',
              answer: 'a = (10-4)/(3-1) = 3, b = 4-3 = 1, f(x) = 3x + 1',
              difficulty: 'intermediate'
            },
            {
              type: 'avec_graphe',
              question: 'Graphe passe par (0,5) et (2,9). Trouve f(x)',
              answer: 'b = 5, a = (9-5)/2 = 2, f(x) = 2x + 5',
              difficulty: 'intermediate'
            },
            {
              type: 'probleme',
              question: 'Taxi: 2km = 2 MRU, 5km = 3,5 MRU. Fonction P(x)?',
              answer: 'a = (3,5-2)/(5-2) = 0,5, b = 2-0,5×2 = 1, P(x) = 0,5x + 1',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        }
      ]
    },
    {
      id: 'ch14',
      title: 'PROBABILITÉS',
      sections: [
        {
          id: 'ch14-s1',
          title: 'Expérience aléatoire et issues',
          description: 'Comprendre les notions de base',
          concepts: ['Expérience aléatoire', 'Issue', 'Univers', 'Événement'],
          objectives: [
            'Définir une expérience aléatoire',
            'Identifier les issues',
            'Comprendre l\'univers',
            'Reconnaître les événements'
          ],
          content: {
            definitions: {
              experience: 'Expérience dont le résultat est imprévisible',
              issue: 'Résultat possible de l\'expérience',
              univers: 'Ensemble de toutes les issues possibles (noté Ω)',
              evenement: 'Ensemble d\'issues (partie de Ω)'
            },
            exemples: {
              de: {
                experience: 'Lancer un dé à 6 faces',
                univers: 'Ω = {1, 2, 3, 4, 5, 6}',
                evenements: {
                  A: 'Obtenir un nombre pair = {2, 4, 6}',
                  B: 'Obtenir un nombre > 4 = {5, 6}'
                }
              },
              piece: {
                experience: 'Lancer une pièce',
                univers: 'Ω = {Pile, Face}',
                evenement: 'Obtenir Pile = {Pile}'
              }
            },
            mauritanianContext: [
              'Jeux traditionnels',
              'Tirages au sort',
              'Loteries',
              'Prévisions météo'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Dé à 6 faces. Donne l\'univers',
              answer: 'Ω = {1, 2, 3, 4, 5, 6}',
              difficulty: 'beginner'
            },
            {
              type: 'evenement',
              question: 'Dé: événement "obtenir multiple de 3"',
              answer: 'A = {3, 6}',
              difficulty: 'beginner'
            },
            {
              type: 'urne',
              question: 'Urne: 2 boules rouges, 3 bleues. Univers?',
              answer: 'Ω = {R, R, B, B, B} ou {Rouge, Bleue}',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch14-s2',
          title: 'Probabilité d\'un événement',
          description: 'Calculer des probabilités',
          concepts: ['Probabilité', 'Équiprobabilité', 'Formule', 'P(A)'],
          objectives: [
            'Définir la probabilité',
            'Calculer P(A)',
            'Comprendre l\'équiprobabilité',
            'Utiliser la formule fondamentale'
          ],
          content: {
            definition: {
              probabilite: 'Mesure de la chance qu\'un événement se réalise',
              notation: 'P(A) = probabilité de l\'événement A',
              valeurs: '0 ≤ P(A) ≤ 1'
            },
            equiprobabilite: {
              definition: 'Toutes les issues ont la même probabilité',
              formule: 'P(A) = nombre d\'issues favorables / nombre total d\'issues',
              notation: 'P(A) = card(A) / card(Ω)'
            },
            exemples: {
              de: {
                experience: 'Dé à 6 faces',
                P_3: 'P(obtenir 3) = 1/6',
                P_pair: 'P(pair) = 3/6 = 1/2',
                P_sup_4: 'P(> 4) = 2/6 = 1/3'
              },
              urne: {
                contenu: '3 rouges, 2 bleues, 5 vertes (total 10)',
                P_rouge: 'P(rouge) = 3/10',
                P_bleue: 'P(bleue) = 2/10 = 1/5',
                P_verte: 'P(verte) = 5/10 = 1/2'
              }
            },
            proprietes: {
              certain: 'P(Ω) = 1',
              impossible: 'P(∅) = 0',
              complementaire: 'P(non A) = 1 - P(A)'
            },
            mauritanianContext: [
              'Jeux de hasard',
              'Prévisions',
              'Sondages',
              'Statistiques'
            ]
          },
          exercises: [
            {
              type: 'de',
              question: 'Dé: P(obtenir 5)?',
              answer: '1/6',
              difficulty: 'beginner'
            },
            {
              type: 'urne',
              question: 'Urne: 4 rouges, 6 bleues. P(rouge)?',
              answer: '4/10 = 2/5',
              difficulty: 'beginner'
            },
            {
              type: 'complementaire',
              question: 'P(A) = 2/5. Calcule P(non A)',
              answer: 'P(non A) = 1 - 2/5 = 3/5',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch14-s3',
          title: 'Événements et opérations',
          description: 'Union, intersection, événements contraires',
          concepts: ['Union', 'Intersection', 'Événement contraire', 'Incompatibles'],
          objectives: [
            'Comprendre A ∪ B et A ∩ B',
            'Calculer P(A ∪ B)',
            'Utiliser P(A̅) = 1 - P(A)',
            'Reconnaître événements incompatibles'
          ],
          content: {
            operations: {
              union: {
                notation: 'A ∪ B',
                definition: 'A ou B (au moins un des deux)',
                formule: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)'
              },
              intersection: {
                notation: 'A ∩ B',
                definition: 'A et B (les deux en même temps)',
                cas_particulier: 'Si A et B incompatibles: P(A ∩ B) = 0'
              },
              contraire: {
                notation: 'A̅ ou non A',
                definition: 'Tous les cas où A ne se réalise pas',
                formule: 'P(A̅) = 1 - P(A)'
              }
            },
            evenements_incompatibles: {
              definition: 'Ne peuvent pas se réaliser ensemble',
              exemple: 'Dé: obtenir 2 ET obtenir 5 (impossible)',
              formule: 'P(A ∪ B) = P(A) + P(B)'
            },
            exemples: {
              de: {
                A: 'Obtenir pair = {2,4,6}, P(A) = 1/2',
                B: 'Obtenir > 3 = {4,5,6}, P(B) = 1/2',
                intersection: 'A ∩ B = {4,6}, P(A ∩ B) = 2/6 = 1/3',
                union: 'P(A ∪ B) = 1/2 + 1/2 - 1/3 = 2/3'
              }
            },
            mauritanianContext: [
              'Analyse de risques',
              'Prévisions combinées',
              'Statistiques',
              'Décisions'
            ]
          },
          exercises: [
            {
              type: 'contraire',
              question: 'P(A) = 3/7. Calcule P(non A)',
              answer: 'P(non A) = 1 - 3/7 = 4/7',
              difficulty: 'beginner'
            },
            {
              type: 'union',
              question: 'P(A) = 1/4, P(B) = 1/3, incompatibles. P(A ∪ B)?',
              answer: 'P(A ∪ B) = 1/4 + 1/3 = 7/12',
              difficulty: 'intermediate'
            },
            {
              type: 'intersection',
              question: 'Dé: P(pair ET > 3)?',
              answer: 'Pair ET > 3 = {4,6}, P = 2/6 = 1/3',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch14-s4',
          title: 'Arbres de probabilités',
          description: 'Utiliser les diagrammes en arbre',
          concepts: ['Arbre', 'Chemins', 'Produit', 'Expériences successives'],
          objectives: [
            'Construire un arbre de probabilités',
            'Calculer avec les chemins',
            'Résoudre des expériences successives',
            'Utiliser la règle du produit'
          ],
          content: {
            principe: {
              arbre: 'Représentation graphique des issues successives',
              branches: 'Chaque branche = une possibilité',
              probabilites: 'Écrire les probabilités sur les branches'
            },
            regle_produit: {
              formule: 'P(chemin) = produit des probabilités sur le chemin',
              exemple: 'P(Rouge puis Bleue) = P(Rouge) × P(Bleue)'
            },
            exemple_complet: {
              situation: 'Tirer 2 boules avec remise: 3R, 2B',
              premiere: 'P(R) = 3/5, P(B) = 2/5',
              deuxieme: 'Mêmes probabilités (avec remise)',
              chemins: {
                RR: 'P(R,R) = 3/5 × 3/5 = 9/25',
                RB: 'P(R,B) = 3/5 × 2/5 = 6/25',
                BR: 'P(B,R) = 2/5 × 3/5 = 6/25',
                BB: 'P(B,B) = 2/5 × 2/5 = 4/25'
              }
            },
            mauritanianContext: [
              'Jeux successifs',
              'Tirages multiples',
              'Décisions en chaîne',
              'Prévisions'
            ]
          },
          exercises: [
            {
              type: 'arbre_simple',
              question: 'Urne: 1/3 rouge, 2/3 bleu. Tire 2 fois avec remise. P(RR)?',
              answer: 'P(RR) = 1/3 × 1/3 = 1/9',
              difficulty: 'intermediate'
            },
            {
              type: 'chemin',
              question: 'P(A) = 1/2, puis P(B|A) = 1/4. P(A puis B)?',
              answer: '1/2 × 1/4 = 1/8',
              difficulty: 'intermediate'
            },
            {
              type: 'total',
              question: 'Arbre: P(RB) = 1/6, P(BR) = 1/6. P(une R et une B)?',
              answer: 'P(RB) + P(BR) = 1/6 + 1/6 = 1/3',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        },
        {
          id: 'ch14-s5',
          title: 'Problèmes de probabilités',
          description: 'Résoudre des problèmes variés',
          concepts: ['Applications', 'Problèmes concrets', 'Modélisation'],
          objectives: [
            'Modéliser des situations aléatoires',
            'Calculer des probabilités complexes',
            'Interpréter les résultats',
            'Résoudre des problèmes contextualisés'
          ],
          content: {
            types_problemes: {
              type1: 'Tirages de boules (avec/sans remise)',
              type2: 'Jeux de cartes',
              type3: 'Situations quotidiennes',
              type4: 'Sondages et statistiques'
            },
            strategie: {
              etapes: [
                'Identifier l\'univers',
                'Lister les issues favorables',
                'Compter',
                'Appliquer la formule',
                'Interpréter'
              ]
            },
            exemples_mauritaniens: {
              baklava: {
                enonce: 'Sachet avec 7 baklavas: B,A,K,L,A,V,A',
                issues: 'Ω = {B, A, K, L, V}',
                P_A: 'P(A) = 3/7 (trois A)',
                P_non_A: 'P(non A) = 4/7'
              },
              piece: {
                enonce: 'Pièce ouguiya: face arabe (Ar) ou français (Fr)',
                P_Ar: 'P(Ar) = 1/2',
                P_Fr: 'P(Fr) = 1/2'
              }
            },
            mauritanianContext: [
              'Jeux locaux',
              'Tirages scolaires',
              'Loteries',
              'Événements aléatoires'
            ]
          },
          exercises: [
            {
              type: 'jeu',
              question: 'Jeu de cartes: 4 as sur 52. P(tirer un as)?',
              answer: '4/52 = 1/13',
              difficulty: 'beginner'
            },
            {
              type: 'urne',
              question: 'Urne: 5 boules numérotées 1-5. P(nombre premier)?',
              answer: 'Premiers: {2,3,5}, P = 3/5',
              difficulty: 'intermediate'
            },
            {
              type: 'probleme',
              question: 'Sac: 10 jetons dont 4 gagnants. P(gagner)?',
              answer: '4/10 = 2/5',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch15',
      title: 'STATISTIQUES',
      sections: [
        {
          id: 'ch15-s1',
          title: 'Données statistiques',
          description: 'Organiser et présenter des données',
          concepts: ['Population', 'Caractère', 'Effectif', 'Fréquence'],
          objectives: [
            'Comprendre les notions de base',
            'Organiser des données en tableau',
            'Calculer des effectifs',
            'Calculer des fréquences'
          ],
          content: {
            definitions: {
              population: 'Ensemble des individus étudiés',
              caractere: 'Propriété étudiée (quantitative ou qualitative)',
              effectif: 'Nombre d\'individus ayant une valeur',
              frequence: 'Proportion = effectif / total'
            },
            tableau: {
              structure: 'Valeur | Effectif | Fréquence',
              exemple: {
                notes: [12, 14, 12, 15, 14, 12, 16],
                tableau: {
                  '12': '3 | 3/7',
                  '14': '2 | 2/7',
                  '15': '1 | 1/7',
                  '16': '1 | 1/7'
                },
                total: '7 | 1'
              }
            },
            types_caracteres: {
              quantitatif: 'Nombres mesurables (âge, taille)',
              qualitatif: 'Catégories (couleur, préférence)'
            },
            mauritanianContext: [
              'Notes scolaires',
              'Enquêtes dans les classes',
              'Statistiques de population',
              'Données locales'
            ]
          },
          exercises: [
            {
              type: 'tableau',
              question: 'Notes: 10,12,10,15,12,10. Complète le tableau',
              answer: '10: effectif 3, fréquence 1/2 | 12: effectif 2, fréquence 1/3 | 15: effectif 1, fréquence 1/6',
              difficulty: 'beginner'
            },
            {
              type: 'frequence',
              question: '25 élèves, 10 ont 14. Fréquence?',
              answer: '10/25 = 2/5 = 0,4 = 40%',
              difficulty: 'beginner'
            },
            {
              type: 'effectif',
              question: 'Fréquence 3/10, total 50. Effectif?',
              answer: '3/10 × 50 = 15',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch15-s2',
          title: 'Moyenne, médiane, étendue',
          description: 'Calculer les indicateurs statistiques',
          concepts: ['Moyenne', 'Médiane', 'Étendue', 'Indicateurs'],
          objectives: [
            'Calculer la moyenne',
            'Trouver la médiane',
            'Calculer l\'étendue',
            'Interpréter ces indicateurs'
          ],
          content: {
            moyenne: {
              definition: 'Somme des valeurs / nombre de valeurs',
              formule: 'x̄ = (x₁ + x₂ + ... + xₙ) / n',
              avec_effectifs: 'x̄ = Σ(valeur × effectif) / total',
              exemple: {
                notes: [10, 12, 14, 12],
                calcul: '(10 + 12 + 14 + 12) / 4 = 48/4',
                moyenne: '12'
              }
            },
            mediane: {
              definition: 'Valeur qui partage la série en deux parties égales',
              methode: [
                'Ranger les valeurs par ordre croissant',
                'Si n impair: valeur du milieu',
                'Si n pair: moyenne des deux valeurs centrales'
              ],
              exemple: {
                serie: [10, 12, 14, 15, 18],
                mediane: '14 (valeur centrale)'
              }
            },
            etendue: {
              definition: 'Différence entre max et min',
              formule: 'E = max - min',
              exemple: 'Série: 8, 12, 15, 10 ⟹ E = 15 - 8 = 7'
            },
            mauritanianContext: [
              'Moyennes de classe',
              'Températures',
              'Prix moyens au marché',
              'Statistiques scolaires'
            ]
          },
          exercises: [
            {
              type: 'moyenne',
              question: 'Notes: 12, 15, 14, 13. Moyenne?',
              answer: '(12+15+14+13)/4 = 54/4 = 13,5',
              difficulty: 'beginner'
            },
            {
              type: 'mediane',
              question: 'Série: 8, 10, 12, 15, 20. Médiane?',
              answer: '12 (valeur centrale)',
              difficulty: 'beginner'
            },
            {
              type: 'etendue',
              question: 'Températures: 25°, 30°, 28°, 35°. Étendue?',
              answer: '35 - 25 = 10°',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch15-s3',
          title: 'Diagrammes et graphiques',
          description: 'Représenter des données graphiquement',
          concepts: ['Diagramme en bâtons', 'Histogramme', 'Diagramme circulaire', 'Représentation'],
          objectives: [
            'Construire un diagramme en bâtons',
            'Tracer un histogramme',
            'Lire un diagramme circulaire',
            'Choisir la bonne représentation'
          ],
          content: {
            diagramme_batons: {
              utilisation: 'Caractères qualitatifs ou valeurs isolées',
              construction: [
                'Axe horizontal: valeurs',
                'Axe vertical: effectifs ou fréquences',
                'Tracer des bâtons de hauteur correspondante'
              ]
            },
            histogramme: {
              utilisation: 'Données regroupées par classes',
              construction: 'Rectangles juxtaposés (aire proportionnelle)'
            },
            diagramme_circulaire: {
              utilisation: 'Voir les proportions d\'un tout',
              methode: 'Angle = fréquence × 360°',
              exemple: {
                frequence: '1/4',
                angle: '1/4 × 360° = 90°'
              }
            },
            mauritanianContext: [
              'Résultats scolaires',
              'Statistiques de marché',
              'Données démographiques',
              'Enquêtes'
            ]
          },
          exercises: [
            {
              type: 'lecture',
              question: 'Diagramme: bâton de 12 pour note 15. Interprétation?',
              answer: '12 élèves ont eu 15',
              difficulty: 'beginner'
            },
            {
              type: 'circulaire',
              question: 'Fréquence 1/3. Angle dans diagramme circulaire?',
              answer: '1/3 × 360° = 120°',
              difficulty: 'intermediate'
            },
            {
              type: 'choix',
              question: 'Quel diagramme pour des couleurs préférées?',
              answer: 'Diagramme en bâtons ou circulaire',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch15-s4',
          title: 'Interprétation de statistiques',
          description: 'Analyser et interpréter des données',
          concepts: ['Analyse', 'Interprétation', 'Comparaison', 'Conclusion'],
          objectives: [
            'Interpréter une moyenne',
            'Comparer des séries',
            'Analyser des graphiques',
            'Tirer des conclusions'
          ],
          content: {
            interpretation_moyenne: {
              definition: 'Valeur "typique" de la série',
              limites: 'Sensible aux valeurs extrêmes',
              exemple: 'Notes: 10, 10, 11, 20 ⟹ moyenne 12,75 (pas représentative)'
            },
            interpretation_mediane: {
              avantage: 'Pas influencée par les extrêmes',
              usage: 'Mieux pour séries avec valeurs aberrantes'
            },
            comparaison: {
              methode: 'Comparer moyennes, médianes, étendues',
              exemple: {
                classe_A: 'Moyenne 13, étendue 5',
                classe_B: 'Moyenne 13, étendue 10',
                conclusion: 'Classe A plus homogène'
              }
            },
            mauritanianContext: [
              'Comparaison de classes',
              'Analyse de performances',
              'Études de marché',
              'Décisions basées sur données'
            ]
          },
          exercises: [
            {
              type: 'interpretation',
              question: 'Moyenne 15, médiane 13. Que peut-on dire?',
              answer: 'Valeurs élevées tirent la moyenne vers le haut',
              difficulty: 'intermediate'
            },
            {
              type: 'comparaison',
              question: 'Classe A: moyenne 14, étendue 3. Classe B: moyenne 14, étendue 8. Laquelle est plus homogène?',
              answer: 'Classe A (étendue plus petite)',
              difficulty: 'intermediate'
            },
            {
              type: 'analyse',
              question: 'Série: 10,10,11,11,20. Moyenne vs médiane?',
              answer: 'Moyenne ≈ 12,4, médiane = 11 (médiane plus représentative)',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch16',
      title: 'PYRAMIDES',
      sections: [
        {
          id: 'ch16-s1',
          title: 'Définition et vocabulaire',
          description: 'Comprendre la structure d\'une pyramide',
          concepts: ['Pyramide', 'Base', 'Sommet', 'Arêtes', 'Faces', 'Hauteur'],
          objectives: [
            'Définir une pyramide',
            'Identifier les éléments',
            'Connaître le vocabulaire',
            'Distinguer pyramide régulière'
          ],
          content: {
            definition: {
              pyramide: 'Solide avec base polygonale + faces latérales triangulaires ayant sommet commun',
              elements: {
                base: 'Polygone (triangle, carré, pentagone...)',
                sommet: 'Point S commun aux faces latérales',
                arete_laterale: 'Segment joignant sommet à un sommet de la base',
                face_laterale: 'Triangle',
                hauteur: 'Segment perpendiculaire du sommet au plan de base'
              }
            },
            pyramide_reguliere: {
              definition: 'Base = polygone régulier, hauteur passe par centre de base',
              propriete: 'Faces latérales = triangles isocèles superposables',
              apotheme: 'Hauteur d\'une face latérale'
            },
            notation: {
              exemple: 'Pyramide SABCD (S = sommet, ABCD = base)',
              hauteur: 'SH où H centre de la base'
            },
            mauritanianContext: [
              'Pyramides historiques (Égypte)',
              'Constructions traditionnelles',
              'Architecture locale',
              'Objets décoratifs'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Pyramide à base carrée. Combien de faces?',
              answer: '5 faces (1 base + 4 faces latérales)',
              difficulty: 'beginner'
            },
            {
              type: 'vocabulaire',
              question: 'Qu\'est-ce que l\'apothème d\'une pyramide?',
              answer: 'Hauteur d\'une face latérale',
              difficulty: 'beginner'
            },
            {
              type: 'aretes',
              question: 'Pyramide à base pentagonale. Nombre d\'arêtes?',
              answer: '10 arêtes (5 base + 5 latérales)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch16-s2',
          title: 'Patron d\'une pyramide',
          description: 'Construire et utiliser les patrons',
          concepts: ['Patron', 'Développement', 'Construction', 'Pliage'],
          objectives: [
            'Comprendre la notion de patron',
            'Construire un patron',
            'Reconnaître différents patrons',
            'Fabriquer une pyramide'
          ],
          content: {
            definition: {
              patron: 'Dessin qui, par pliage, reconstitue la pyramide',
              propriete: 'Pas de vide ni superposition',
              variete: 'Plusieurs patrons possibles pour une même pyramide'
            },
            construction: {
              methode: [
                'Dessiner la base',
                'Ajouter les faces latérales (triangles) autour',
                'Découper',
                'Plier et coller'
              ]
            },
            exemple: {
              base_carree: {
                base: 'Carré au centre',
                faces: '4 triangles isocèles autour',
                instruction: 'Découper, plier sur les arêtes, coller'
              }
            },
            activite_pratique: {
              materiel: 'Carton, ciseaux, colle',
              realisation: 'Construire 3 pyramides identiques',
              objectif: 'Montrer que 3 pyramides = 1 cube'
            },
            mauritanianContext: [
              'Fabrication d\'objets décoratifs',
              'Boîtes artisanales',
              'Emballages',
              'Artisanat scolaire'
            ]
          },
          exercises: [
            {
              type: 'reconnaissance',
              question: 'Un patron a 1 carré et 4 triangles. Quelle pyramide?',
              answer: 'Pyramide à base carrée',
              difficulty: 'beginner'
            },
            {
              type: 'construction',
              question: 'Décris le patron d\'une pyramide à base triangulaire',
              answer: '1 triangle (base) + 3 triangles (faces latérales)',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'Pourquoi plusieurs patrons possibles?',
              answer: 'On peut découper selon différentes arêtes latérales',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch16-s3',
          title: 'Surface et aire d\'une pyramide',
          description: 'Calculer les aires',
          concepts: ['Aire latérale', 'Aire totale', 'Aire de base', 'Calculs'],
          objectives: [
            'Calculer l\'aire latérale',
            'Calculer l\'aire totale',
            'Utiliser les formules',
            'Résoudre des problèmes'
          ],
          content: {
            formules: {
              aire_base: 'Dépend du polygone (carré: c², triangle: bh/2)',
              aire_laterale: 'Somme des aires des faces latérales',
              aire_totale: 'Aire latérale + Aire base',
              pyramide_reguliere: 'Aire latérale = (périmètre base × apothème) / 2'
            },
            methode: {
              etapes: [
                'Calculer l\'aire de la base',
                'Calculer l\'aire de chaque face latérale',
                'Additionner toutes les aires'
              ]
            },
            exemples: {
              ex1: {
                pyramide: 'Base carrée 6cm, apothème 5cm',
                aire_base: '6² = 36 cm²',
                perimetre: '4 × 6 = 24 cm',
                aire_laterale: '(24 × 5) / 2 = 60 cm²',
                aire_totale: '36 + 60 = 96 cm²'
              }
            },
            mauritanianContext: [
              'Calcul de matériaux',
              'Peinture de surfaces',
              'Coût de revêtement',
              'Emballages'
            ]
          },
          exercises: [
            {
              type: 'base_carree',
              question: 'Base carrée 8cm, apothème 6cm. Aire latérale?',
              answer: 'Périmètre = 32, aire lat = (32×6)/2 = 96 cm²',
              difficulty: 'intermediate'
            },
            {
              type: 'totale',
              question: 'Aire base 25cm², aire latérale 60cm². Aire totale?',
              answer: '25 + 60 = 85 cm²',
              difficulty: 'beginner'
            },
            {
              type: 'calcul_complet',
              question: 'Pyramide régulière: base carrée 10cm, arête latérale 13cm. Aire totale?',
              answer: 'Base = 100, apothème = 12, lat = (40×12)/2 = 240, total = 340 cm²',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch16-s4',
          title: 'Volume d\'une pyramide',
          description: 'Calculer le volume',
          concepts: ['Volume', 'Formule V = ⅓Bh', 'Base', 'Hauteur'],
          objectives: [
            'Connaître la formule du volume',
            'Calculer le volume',
            'Comprendre le coefficient ⅓',
            'Résoudre des problèmes'
          ],
          content: {
            formule: {
              volume: 'V = ⅓ × B × h',
              B: 'Aire de la base',
              h: 'Hauteur de la pyramide',
              interpretation: 'Volume = tiers du prisme de même base et hauteur'
            },
            demonstration_intuitive: {
              experience: '3 pyramides identiques remplissent un cube',
              cube: 'V_cube = a³',
              pyramide: 'V_pyramide = a³/3 = ⅓a² × a'
            },
            exemples: {
              ex1: {
                donnees: 'Base carrée 4cm, hauteur 5cm',
                aire_base: 'B = 4² = 16 cm²',
                calcul: 'V = ⅓ × 16 × 5',
                resultat: 'V = 80/3 ≈ 26,67 cm³'
              },
              ex2: {
                donnees: 'Base rectangulaire 6cm × 8cm, h = 9cm',
                aire_base: 'B = 48 cm²',
                volume: 'V = ⅓ × 48 × 9 = 144 cm³'
              }
            },
            mauritanianContext: [
              'Capacité de réservoirs',
              'Volumes de silos',
              'Stockage',
              'Constructions'
            ]
          },
          exercises: [
            {
              type: 'simple',
              question: 'Base 20cm², hauteur 12cm. Volume?',
              answer: 'V = ⅓ × 20 × 12 = 80 cm³',
              difficulty: 'beginner'
            },
            {
              type: 'base_carree',
              question: 'Base carrée 6cm, hauteur 10cm. Volume?',
              answer: 'B = 36, V = ⅓ × 36 × 10 = 120 cm³',
              difficulty: 'intermediate'
            },
            {
              type: 'probleme',
              question: 'Pyramide V = 200cm³, base 60cm². Hauteur?',
              answer: '200 = ⅓ × 60 × h, h = 10cm',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch16-s5',
          title: 'Section plane d\'une pyramide',
          description: 'Étudier les sections parallèles',
          concepts: ['Section plane', 'Réduction', 'Rapport', 'Pyramide réduite'],
          objectives: [
            'Comprendre la section par plan parallèle',
            'Calculer les dimensions de la section',
            'Utiliser les rapports de réduction',
            'Calculer volume de la pyramide tronquée'
          ],
          content: {
            propriete: {
              section: 'Section parallèle à la base = polygone semblable à la base',
              reduction: 'C\'est une réduction de la base',
              rapport: 'Si SA\'/SA = k, alors longueurs × k, aires × k², volumes × k³'
            },
            exemples: {
              ex1: {
                pyramide: 'SABCD base carrée 6cm, SA = 12cm',
                plan: 'Parallèle à mi-hauteur SA\' = 6cm',
                rapport: 'k = 6/12 = 1/2',
                section: 'Carré de côté 3cm (6 × 1/2)',
                aire_section: '9 cm² (36 × (1/2)²)',
                volume_petit: 'V/8 (V × (1/2)³)'
              }
            },
            tronc_pyramide: {
              definition: 'Portion entre base et section',
              volume: 'V_tronc = V_grand - V_petit'
            },
            mauritanianContext: [
              'Constructions à plusieurs niveaux',
              'Réservoirs tronqués',
              'Architecture',
              'Calculs de matériaux'
            ]
          },
          exercises: [
            {
              type: 'section',
              question: 'SA\'/SA = 1/3, base carrée 9cm. Côté de la section?',
              answer: '9 × 1/3 = 3cm',
              difficulty: 'intermediate'
            },
            {
              type: 'volume',
              question: 'V = 270cm³, k = 1/3. Volume pyramide réduite?',
              answer: 'V\' = 270 × (1/3)³ = 270/27 = 10 cm³',
              difficulty: 'intermediate'
            },
            {
              type: 'tronc',
              question: 'V_grand = 64cm³, V_petit = 8cm³. Volume tronc?',
              answer: '64 - 8 = 56 cm³',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        }
      ]
    },
    {
      id: 'ch17',
      title: 'CÔNE DE RÉVOLUTION',
      sections: [
        {
          id: 'ch17-s1',
          title: 'Définition et génération',
          description: 'Comprendre le cône de révolution',
          concepts: ['Cône', 'Révolution', 'Génératrice', 'Base', 'Sommet'],
          objectives: [
            'Définir un cône de révolution',
            'Comprendre la génération par rotation',
            'Identifier les éléments',
            'Calculer la génératrice'
          ],
          content: {
            definition: {
              cone: 'Solide obtenu en faisant tourner un triangle rectangle autour d\'un côté de l\'angle droit',
              elements: {
                base: 'Disque de rayon r',
                sommet: 'Point S',
                hauteur: 'SO perpendiculaire à la base',
                generatrice: 'Distance du sommet à un point du cercle de base'
              }
            },
            relation_fondamentale: {
              formule: 'g² = r² + h²',
              justification: 'Théorème de Pythagore',
              exemple: 'r = 3cm, h = 4cm ⟹ g = √(9+16) = 5cm'
            },
            representation: {
              perspective: 'Base = ovale (ellipse), hauteur verticale',
              traits: 'Génératrices visibles en traits pleins'
            },
            mauritanianContext: [
              'Chapeaux traditionnels coniques',
              'Entonnoirs',
              'Cônes de circulation',
              'Toits coniques'
            ]
          },
          exercises: [
            {
              type: 'generatrice',
              question: 'r = 6cm, h = 8cm. Calcule g',
              answer: 'g = √(36+64) = √100 = 10cm',
              difficulty: 'beginner'
            },
            {
              type: 'hauteur',
              question: 'r = 5cm, g = 13cm. Calcule h',
              answer: 'h² = 13² - 5² = 169 - 25 = 144, h = 12cm',
              difficulty: 'intermediate'
            },
            {
              type: 'rayon',
              question: 'g = 10cm, h = 8cm. Calcule r',
              answer: 'r² = 10² - 8² = 100 - 64 = 36, r = 6cm',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch17-s2',
          title: 'Patron d\'un cône',
          description: 'Construire le patron',
          concepts: ['Patron', 'Secteur angulaire', 'Disque', 'Arc'],
          objectives: [
            'Comprendre le patron d\'un cône',
            'Calculer l\'angle du secteur',
            'Construire le patron',
            'Calculer la longueur d\'arc'
          ],
          content: {
            composants: {
              disque: 'Base de rayon r',
              secteur: 'Surface latérale = secteur de rayon g'
            },
            angle_secteur: {
              formule: 'α (degrés) = 360° × r/g',
              en_radians: 'α (rad) = 2πr/g',
              exemple: {
                donnees: 'r = 6cm, g = 10cm',
                calcul: 'α = 360° × 6/10 = 216°'
              }
            },
            longueur_arc: {
              formule: 'L = 2πr',
              relation: 'Arc du secteur = périmètre de la base'
            },
            mauritanianContext: [
              'Fabrication de chapeaux',
              'Cornets de glace',
              'Emballages coniques',
              'Objets artisanaux'
            ]
          },
          exercises: [
            {
              type: 'angle',
              question: 'r = 3cm, g = 12cm. Angle du secteur?',
              answer: 'α = 360° × 3/12 = 90°',
              difficulty: 'intermediate'
            },
            {
              type: 'arc',
              question: 'r = 5cm. Longueur de l\'arc?',
              answer: 'L = 2π × 5 = 10π cm',
              difficulty: 'beginner'
            },
            {
              type: 'construction',
              question: 'r = 4cm, h = 3cm. Angle du patron?',
              answer: 'g = 5cm, α = 360° × 4/5 = 288°',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch17-s3',
          title: 'Aire et volume du cône',
          description: 'Calculer aire et volume',
          concepts: ['Aire latérale', 'Aire totale', 'Volume', 'Formules'],
          objectives: [
            'Calculer l\'aire latérale πrg',
            'Calculer l\'aire totale',
            'Calculer le volume ⅓πr²h',
            'Résoudre des problèmes'
          ],
          content: {
            formules: {
              aire_base: 'πr²',
              aire_laterale: 'πrg',
              aire_totale: 'πr² + πrg = πr(r + g)',
              volume: 'V = ⅓πr²h'
            },
            methode_calcul: {
              etapes: [
                'Identifier r et h',
                'Calculer g si nécessaire (g² = r² + h²)',
                'Appliquer les formules',
                'Simplifier'
              ]
            },
            exemples: {
              ex1: {
                donnees: 'r = 3cm, h = 4cm',
                generatrice: 'g = 5cm',
                aire_totale: 'π×3×(3+5) = 24π cm²',
                volume: 'V = ⅓ × π × 9 × 4 = 12π cm³'
              }
            },
            mauritanianContext: [
              'Capacité de réservoirs coniques',
              'Silos à grains',
              'Bassins',
              'Constructions'
            ]
          },
          exercises: [
            {
              type: 'volume',
              question: 'r = 6cm, h = 8cm. Volume?',
              answer: 'V = ⅓ × π × 36 × 8 = 96π cm³',
              difficulty: 'intermediate'
            },
            {
              type: 'aire',
              question: 'r = 5cm, g = 13cm. Aire latérale?',
              answer: 'A = π × 5 × 13 = 65π cm²',
              difficulty: 'intermediate'
            },
            {
              type: 'probleme',
              question: 'Bassin conique h = 6m, r = 3m. Volume d\'eau?',
              answer: 'V = ⅓ × π × 9 × 6 = 18π ≈ 56,5 m³',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        },
        {
          id: 'ch17-s4',
          title: 'Section d\'un cône',
          description: 'Étudier les sections parallèles',
          concepts: ['Section plane', 'Réduction', 'Cône tronqué', 'Rapports'],
          objectives: [
            'Comprendre la section parallèle',
            'Calculer les dimensions',
            'Utiliser les rapports k',
            'Calculer le volume tronqué'
          ],
          content: {
            propriete: {
              section: 'Section parallèle = disque (réduction)',
              rapport: 'Si SO\'/SO = k, alors r\' = kr, aire × k², volume × k³'
            },
            exemples: {
              ex1: {
                grand_cone: 'r = 24cm, h = 72cm',
                section: 'À h\' = 36cm (mi-hauteur)',
                rapport: 'k = 36/72 = 1/2',
                rayon_section: 'r\' = 24 × 1/2 = 12cm',
                volume_petit: 'V\' = V × (1/2)³ = V/8'
              }
            },
            cone_tronque: {
              definition: 'Portion entre base et section',
              volume: 'V_tronc = V_grand - V_petit',
              application: 'Seaux, bassins, réservoirs'
            },
            mauritanianContext: [
              'Réservoirs d\'eau coniques',
              'Silos avec niveaux',
              'Bassins',
              'Constructions pratiques'
            ]
          },
          exercises: [
            {
              type: 'reduction',
              question: 'r = 12, k = 2/3. Rayon de la section?',
              answer: 'r\' = 12 × 2/3 = 8cm',
              difficulty: 'intermediate'
            },
            {
              type: 'volume_section',
              question: 'V = 270cm³, k = 1/3. Volume du petit cône?',
              answer: 'V\' = 270 × (1/3)³ = 10 cm³',
              difficulty: 'intermediate'
            },
            {
              type: 'tronc',
              question: 'Bassin h = 6m, eau à h = 4m, V_total = 18π. Volume d\'eau à ajouter?',
              answer: 'k = 2/3, V_eau = 18π × (2/3)³ = 16π/3, à ajouter: 38π/3 m³',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        },
        {
          id: 'ch17-s5',
          title: 'Problèmes avec pyramides et cônes',
          description: 'Applications concrètes',
          concepts: ['Applications', 'Problèmes mixtes', 'Solides composés'],
          objectives: [
            'Résoudre des problèmes complexes',
            'Combiner pyramides et cônes',
            'Calculer volumes composés',
            'Appliquer à des situations réelles'
          ],
          content: {
            solides_composes: {
              silo: 'Cylindre + cône',
              decoration: 'Cube + pyramides',
              reservoir: 'Cône tronqué'
            },
            strategie: {
              etapes: [
                'Identifier les solides',
                'Calculer chaque volume séparément',
                'Additionner ou soustraire',
                'Vérifier les unités'
              ]
            },
            exemples_mauritaniens: {
              ex1: {
                contexte: 'Silo: cylindre Ø 6m h = 8m + cône h = 6m',
                calcul_cylindre: 'V_cyl = π × 3² × 8 = 72π m³',
                calcul_cone: 'V_cone = ⅓ × π × 3² × 6 = 18π m³',
                total: 'V_total = 90π m³'
              },
              ex2: {
                contexte: 'Menuisier: cube 5cm + 6 pyramides h = 9cm',
                volume_cube: '5³ = 125 cm³',
                volume_pyramides: '6 × ⅓ × 25 × 9 = 450 cm³',
                total: '575 cm³'
              }
            },
            mauritanianContext: [
              'Silos à grains',
              'Réservoirs d\'eau',
              'Étoiles décoratives (Ibrahima)',
              'Constructions mixtes'
            ]
          },
          exercises: [
            {
              type: 'compose',
              question: 'Cylindre r = 4, h = 10 + cône r = 4, h = 3. Volume total?',
              answer: 'V_cyl = 160π, V_cone = 16π, total = 176π cm³',
              difficulty: 'intermediate'
            },
            {
              type: 'masse',
              question: 'Étoile: V = 575cm³, densité 0,8g/cm³. Masse?',
              answer: 'Masse = 575 × 0,8 = 460g',
              difficulty: 'intermediate'
            },
            {
              type: 'bennes',
              question: 'Silo 90π m³, benne 13,8 m³. Nombre de bennes?',
              answer: '90π / 13,8 ≈ 20 bennes',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        }
      ]
    },
    {
      id: 'ch18',
      title: 'RÉVISION ET SYNTHÈSE',
      sections: [
        {
          id: 'ch18-s1',
          title: 'Révision Algèbre',
          description: 'Réviser tous les chapitres d\'algèbre',
          concepts: ['Nombres réels', 'Calcul littéral', 'Équations', 'Fonctions'],
          objectives: [
            'Réviser les nombres réels',
            'Réviser le calcul littéral',
            'Réviser les équations',
            'Réviser les fonctions affines'
          ],
          content: {
            chapitres_revises: {
              ch1: 'Nombres réels: ℕ⊂ℤ⊂𝔻⊂ℚ⊂ℝ',
              ch2: 'Intervalles et valeur absolue',
              ch3: 'Racines carrées et simplifications',
              ch4: 'Calcul littéral et identités',
              ch5: 'Équations et inéquations',
              ch13: 'Fonctions affines f(x) = ax + b'
            },
            formules_cles: {
              puissances: 'aᵐ × aⁿ = aᵐ⁺ⁿ',
              racines: '√(a×b) = √a × √b',
              identites: '(a+b)² = a² + 2ab + b²',
              second_degre: 'Δ = b² - 4ac',
              fonction: 'a = (f(x₂)-f(x₁))/(x₂-x₁)'
            },
            mauritanianContext: [
              'Synthèse des méthodes',
              'Préparation examens',
              'Problèmes mixtes',
              'Applications intégrées'
            ]
          },
          exercises: [
            {
              type: 'mixte_1',
              question: 'Simplifie: √50 + (x+3)²',
              answer: '5√2 + x² + 6x + 9',
              difficulty: 'intermediate'
            },
            {
              type: 'mixte_2',
              question: 'Résous: |2x-1| = 5 et donne intervalle',
              answer: 'x = 3 ou x = -2',
              difficulty: 'intermediate'
            },
            {
              type: 'mixte_3',
              question: 'f(x) = ax + 3, f(2) = 7. Trouve a puis f(5)',
              answer: 'a = 2, f(x) = 2x + 3, f(5) = 13',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        },
        {
          id: 'ch18-s2',
          title: 'Révision Géométrie',
          description: 'Réviser tous les chapitres de géométrie',
          concepts: ['Vecteurs', 'Repères', 'Droites', 'Transformations', 'Thalès'],
          objectives: [
            'Réviser les vecteurs',
            'Réviser les repères',
            'Réviser les transformations',
            'Réviser Thalès et trigonométrie'
          ],
          content: {
            chapitres_revises: {
              ch6: 'Vecteurs: addition, multiplication scalaire',
              ch7: 'Repères: distance, milieu, cercle',
              ch8: 'Droites: équations, parallélisme',
              ch10: 'Thalès et projection',
              ch11: 'Transformations: symétries, translation, rotation, homothétie',
              ch12: 'Trigonométrie: sin, cos, tan'
            },
            formules_cles: {
              distance: 'AB = √[(xB-xA)² + (yB-yA)²]',
              milieu: 'I((xA+xB)/2, (yA+yB)/2)',
              colinearite: 'xy\' - yx\' = 0',
              thales: 'OA/OM = OB/ON',
              trigo: 'cos²α + sin²α = 1'
            },
            mauritanianContext: [
              'Géométrie appliquée',
              'Constructions',
              'Mesures pratiques',
              'Applications intégrées'
            ]
          },
          exercises: [
            {
              type: 'vecteurs',
              question: 'A(1,2), B(4,6). Calcule ||AB⃗||',
              answer: '||AB⃗|| = √[9+16] = 5',
              difficulty: 'intermediate'
            },
            {
              type: 'droite',
              question: 'Droite passant par (0,3) avec m = -2. Équation?',
              answer: 'y = -2x + 3',
              difficulty: 'intermediate'
            },
            {
              type: 'thales',
              question: 'OA = 10, OM = 6, OB = 15. Calcule ON si (MN) ∥ (AB)',
              answer: 'ON = 15 × 6/10 = 9',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        },
        {
          id: 'ch18-s3',
          title: 'Révision Probabilités et Statistiques',
          description: 'Réviser prob et stats',
          concepts: ['Probabilités', 'Statistiques', 'Moyenne', 'Arbres'],
          objectives: [
            'Réviser les probabilités',
            'Réviser les statistiques',
            'Synthétiser les méthodes',
            'Résoudre des problèmes variés'
          ],
          content: {
            probabilites: {
              formule: 'P(A) = card(A) / card(Ω)',
              complementaire: 'P(non A) = 1 - P(A)',
              union: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
              arbre: 'P(chemin) = produit des probabilités'
            },
            statistiques: {
              moyenne: 'x̄ = Σx / n',
              mediane: 'Valeur centrale',
              etendue: 'max - min',
              frequence: 'effectif / total'
            },
            mauritanianContext: [
              'Jeux et probabilités',
              'Données scolaires',
              'Enquêtes',
              'Prévisions'
            ]
          },
          exercises: [
            {
              type: 'proba',
              question: 'Dé: P(pair OU > 4)?',
              answer: '{2,4,5,6}, P = 4/6 = 2/3',
              difficulty: 'intermediate'
            },
            {
              type: 'stats',
              question: 'Notes: 10,12,14,12,17. Moyenne et médiane?',
              answer: 'Moyenne = 13, médiane = 12',
              difficulty: 'intermediate'
            },
            {
              type: 'arbre',
              question: 'Urne: 2/5 rouge, tire 2 fois avec remise. P(RB)?',
              answer: 'P(RB) = 2/5 × 3/5 = 6/25',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 40
        },
        {
          id: 'ch18-s4',
          title: 'Révision Géométrie dans l\'espace',
          description: 'Réviser pyramides et cônes',
          concepts: ['Pyramide', 'Cône', 'Volumes', 'Aires', 'Sections'],
          objectives: [
            'Réviser les pyramides',
            'Réviser les cônes',
            'Synthétiser les formules',
            'Résoudre des problèmes complexes'
          ],
          content: {
            pyramide: {
              volume: 'V = ⅓Bh',
              aire_totale: 'Base + latérale',
              section: 'Réduction avec k³ pour volume'
            },
            cone: {
              generatrice: 'g² = r² + h²',
              aire_laterale: 'πrg',
              volume: 'V = ⅓πr²h',
              patron: 'Angle α = 360° × r/g'
            },
            formules_synthese: {
              volumes: 'Pyramide = ⅓Bh, Cône = ⅓πr²h',
              sections: 'Longueurs × k, aires × k², volumes × k³'
            },
            mauritanianContext: [
              'Constructions 3D',
              'Réservoirs',
              'Silos',
              'Architecture'
            ]
          },
          exercises: [
            {
              type: 'pyramide',
              question: 'Base carrée 8cm, h = 12cm. Volume?',
              answer: 'V = ⅓ × 64 × 12 = 256 cm³',
              difficulty: 'intermediate'
            },
            {
              type: 'cone',
              question: 'r = 5cm, h = 12cm. Aire totale?',
              answer: 'g = 13, A = π×5×(5+13) = 90π cm²',
              difficulty: 'intermediate'
            },
            {
              type: 'compose',
              question: 'Cylindre + cône: r = 3, h_cyl = 10, h_cone = 4. Volume total?',
              answer: 'V = π×9×10 + ⅓×π×9×4 = 90π + 12π = 102π cm³',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 45
        },
        {
          id: 'ch18-s5',
          title: 'Préparation examens et synthèse finale',
          description: 'Problèmes de synthèse complets',
          concepts: ['Synthèse', 'Problèmes complexes', 'Méthodes intégrées', 'BEPC'],
          objectives: [
            'Résoudre des problèmes de synthèse',
            'Combiner plusieurs chapitres',
            'Préparer les examens',
            'Maîtriser toutes les méthodes'
          ],
          content: {
            types_problemes: {
              type1: 'Géométrie + algèbre',
              type2: 'Équations + géométrie analytique',
              type3: 'Fonctions + systèmes',
              type4: 'Solides + calculs'
            },
            competences_cles: {
              calcul: 'Maîtrise des opérations',
              raisonnement: 'Démonstrations rigoureuses',
              modelisation: 'Mise en équation',
              interpretation: 'Lecture de résultats'
            },
            conseils_examens: {
              avant: 'Lire tout le sujet',
              pendant: 'Faire un schéma',
              verification: 'Toujours vérifier',
              presentation: 'Soigner la rédaction'
            },
            mauritanianContext: [
              'Préparation BEPC',
              'Problèmes nationaux',
              'Contextes mauritaniens',
              'Excellence académique'
            ]
          },
          exercises: [
            {
              type: 'synthese_1',
              question: 'Triangle ABC: A(0,0), B(6,0), C(3,4). Nature et aire?',
              answer: 'AB = 6, AC = 5, BC = 5, isocèle. Aire = 12',
              difficulty: 'advanced'
            },
            {
              type: 'synthese_2',
              question: 'Système {2x+y=10; x-y=2} puis distance entre solution et O',
              answer: 'Solution (4,2), distance = √20 = 2√5',
              difficulty: 'advanced'
            },
            {
              type: 'synthese_3',
              question: 'Cône r = 6, h = 8. Si rempli aux 3/4 hauteur, volume eau?',
              answer: 'k = 3/4, V_total = 96π, V_eau = 96π × (3/4)³ ≈ 50,9π cm³',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 50
        }
      ]
    }
  ]
};

export default YEAR4_MATH_CURRICULUM;

