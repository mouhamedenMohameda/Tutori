/**
 * Year 3 Math Curriculum - Mauritanie
 * Chapters 1-3: Arithmétique, Nombres Réels, Développement
 */

export const YEAR3_MATH_CURRICULUM = {
    year: 3,
    subject: 'Mathématiques',
    title: 'Manuel de Mathématiques 3e AS (Troisième Année Secondaire) - Mauritanie',
    methodology: 'Approche pédagogique mauritanienne: Activités → Je retiens → Je sais faire → Je m\'exerce',
    
    chapters: [
      {
        id: 'ch1',
        title: 'ARITHMÉTIQUE',
        sections: [
          {
            id: 'ch1-s1',
            title: 'Division euclidienne',
            description: 'Comprendre et maîtriser la division euclidienne avec quotient et reste',
            concepts: ['Division euclidienne', 'Quotient', 'Reste', 'Dividende', 'Diviseur'],
            objectives: [
              'Effectuer des divisions euclidiennes',
              'Identifier quotient et reste',
              'Appliquer la relation a = bq + r',
              'Résoudre des problèmes contextualisés'
            ],
            content: {
              definition: {
                formal: 'Pour tous entiers a et b (b ≠ 0), il existe deux entiers uniques q et r tels que: a = bq + r avec 0 ≤ r < |b|',
                vocabulary: {
                  dividende: 'a (nombre à diviser)',
                  diviseur: 'b (nombre par lequel on divise)',
                  quotient: 'q (résultat entier de la division)',
                  reste: 'r (ce qui reste après la division)'
                }
              },
              examples: {
                example1: {
                  operation: '89 ÷ 7',
                  quotient: 12,
                  reste: 5,
                  verification: '89 = 7×12 + 5',
                  explanation: '7 dans 89 va 12 fois avec reste 5'
                },
                example2: {
                  operation: '157 ÷ 9',
                  quotient: 17,
                  reste: 4,
                  verification: '157 = 9×17 + 4',
                  explanation: '9 dans 157 va 17 fois avec reste 4'
                },
                example3: {
                  operation: '2024 ÷ 16',
                  quotient: 126,
                  reste: 8,
                  verification: '2024 = 16×126 + 8',
                  explanation: 'Division de l\'année en cours'
                }
              },
              mauritanianContext: [
                'Partage équitable de ressources familiales',
                'Distribution de marchandises au marché',
                'Calculs de portions alimentaires',
                'Problèmes de transport collectif'
              ]
            },
            activities: [
              {
                type: 'contextual',
                title: 'Disposition de jetons (Ahmed)',
                context: 'Ahmed a 12 jetons numérotés 1 à 12',
                question: 'Peut-il les disposer en rangées parallèles?',
                solution: '12 = 3×4 (3 rangées de 4) ou 12 = 2×6 (2 rangées de 6) ou 12 = 4×3 (4 rangées de 3)',
                learning: 'Introduction aux diviseurs et à la factorisation'
              }
            ],
            exercises: [
              {
                type: 'calculation',
                question: 'Effectue la division euclidienne: 247 ÷ 15',
                answer: 'q = 16, r = 7. Vérification: 247 = 15×16 + 7',
                difficulty: 'beginner'
              },
              {
                type: 'problem',
                question: 'Un commerçant a 385 oranges à emballer par caisses de 24. Combien de caisses complètes? Combien d\'oranges restantes?',
                answer: '385 ÷ 24 = 16 reste 1. Il aura 16 caisses complètes et 1 orange restante',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          },
          {
            id: 'ch1-s2',
            title: 'PGCD et algorithme d\'Euclide',
            description: 'Calculer le Plus Grand Commun Diviseur par différentes méthodes',
            concepts: ['PGCD', 'Algorithme d\'Euclide', 'Divisions successives', 'Diviseurs communs'],
            objectives: [
              'Comprendre la notion de PGCD',
              'Appliquer l\'algorithme d\'Euclide',
              'Utiliser le PGCD pour simplifier des fractions',
              'Résoudre des problèmes de partage équitable'
            ],
            content: {
              definition: {
                pgcd: 'Le PGCD de deux entiers a et b est le plus grand entier qui divise à la fois a et b',
                notation: 'PGCD(a,b) ou (a∧b)',
                proprietes: [
                  'PGCD(a,b) = PGCD(b,a) (commutativité)',
                  'PGCD(a,0) = |a|',
                  'PGCD(a,b) divise a et b',
                  'Tout diviseur commun de a et b divise PGCD(a,b)'
                ]
              },
              methods: {
                method1: {
                  name: 'Méthode des diviseurs',
                  description: 'Lister tous les diviseurs de chaque nombre',
                  example: {
                    numbers: 'PGCD(24, 18)',
                    divisors_24: [1,2,3,4,6,8,12,24],
                    divisors_18: [1,2,3,6,9,18],
                    common_divisors: [1,2,3,6],
                    pgcd: 6
                  }
                },
                method2: {
                  name: 'Algorithme d\'Euclide',
                  description: 'Divisions euclidiennes successives jusqu\'à reste nul',
                  steps: [
                    'Diviser le plus grand par le plus petit',
                    'Remplacer le plus grand par le plus petit',
                    'Remplacer le plus petit par le reste',
                    'Continuer jusqu\'à reste = 0',
                    'Le dernier diviseur non nul est le PGCD'
                  ],
                  example: {
                    numbers: 'PGCD(156, 52)',
                    step1: '156 = 52×3 + 0',
                    conclusion: 'PGCD(156,52) = 52'
                  }
                },
                method3: {
                  name: 'Décomposition en facteurs premiers',
                  description: 'Prendre les facteurs communs avec les plus petits exposants',
                  example: {
                    numbers: 'PGCD(72, 96)',
                    decomposition_72: '72 = 2³ × 3²',
                    decomposition_96: '96 = 2⁵ × 3',
                    pgcd_calculation: 'PGCD = 2³ × 3 = 24'
                  }
                }
              },
              mauritanianContext: [
                'Partage équitable de terrains familiaux',
                'Découpage de tissus au marché',
                'Distribution de portions alimentaires',
                'Organisation de groupes d\'élèves'
              ]
            },
            activities: [
              {
                type: 'problem',
                title: 'Partage de terrain (Fatma et Ahmed)',
                context: 'Fatma possède un terrain de 156m × 52m',
                question: 'Quelle est la plus grande dimension de carrés identiques pour couvrir tout le terrain?',
                solution: 'PGCD(156, 52) = 52m. Le terrain peut être divisé en carrés de 52m de côté',
                learning: 'Application concrète du PGCD au partage de surfaces'
              }
            ],
            exercises: [
              {
                type: 'calculation',
                question: 'Calcule PGCD(84, 126) par l\'algorithme d\'Euclide',
                answer: '126 = 84×1 + 42, 84 = 42×2 + 0. PGCD(84,126) = 42',
                difficulty: 'intermediate'
              },
              {
                type: 'application',
                question: 'Un commerçant a 180 dattes et 135 figues. Il veut faire des sachets identiques avec le maximum de fruits dans chaque. Combien de fruits par sachet?',
                answer: 'PGCD(180,135) = 45. Chaque sachet contiendra 45 fruits',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch1-s3',
            title: 'PPCM (Plus Petit Commun Multiple)',
            description: 'Calculer le PPCM et résoudre des problèmes de périodicité',
            concepts: ['PPCM', 'Multiples communs', 'Périodicité', 'Relation PGCD-PPCM'],
            objectives: [
              'Comprendre la notion de PPCM',
              'Calculer le PPCM par différentes méthodes',
              'Utiliser la relation PGCD×PPCM = a×b',
              'Résoudre des problèmes de synchronisation'
            ],
            content: {
              definition: {
                ppcm: 'Le PPCM de deux entiers a et b est le plus petit entier positif qui est multiple de a et de b',
                notation: 'PPCM(a,b) ou [a,b]',
                proprietes: [
                  'PPCM(a,b) = PPCM(b,a) (commutativité)',
                  'PPCM(a,1) = a',
                  'a et b divisent PPCM(a,b)',
                  'PPCM(a,b) × PGCD(a,b) = a × b'
                ]
              },
              methods: {
                method1: {
                  name: 'Méthode des multiples',
                  description: 'Lister les multiples jusqu\'à trouver le premier commun',
                  example: {
                    numbers: 'PPCM(8, 12)',
                    multiples_8: [8,16,24,32,40,48],
                    multiples_12: [12,24,36,48],
                    ppcm: 24
                  }
                },
                method2: {
                  name: 'Par décomposition',
                  description: 'Prendre tous les facteurs avec les plus grands exposants',
                  example: {
                    numbers: 'PPCM(72, 96)',
                    decomposition_72: '72 = 2³ × 3²',
                    decomposition_96: '96 = 2⁵ × 3',
                    ppcm_calculation: 'PPCM = 2⁵ × 3² = 288'
                  }
                },
                method3: {
                  name: 'Par relation avec PGCD',
                  description: 'PPCM(a,b) = (a × b) / PGCD(a,b)',
                  example: {
                    numbers: 'PPCM(15, 25)',
                    pgcd: 'PGCD(15,25) = 5',
                    calculation: 'PPCM = (15 × 25) / 5 = 75'
                  }
                }
              },
              mauritanianContext: [
                'Synchronisation des bus de transport',
                'Planification de marchés périodiques',
                'Organisation de rotations agricoles',
                'Calendrier de réunions familiales'
              ]
            },
            activities: [
              {
                type: 'problem',
                title: 'Bus de Nouakchott',
                context: 'Deux bus partent du même arrêt. Le premier revient toutes les 15 minutes, le second toutes les 25 minutes',
                question: 'Après combien de temps se retrouveront-ils ensemble à l\'arrêt?',
                solution: 'PPCM(15, 25) = 75 minutes. Ils se retrouveront après 75 minutes (1h15)',
                learning: 'Application du PPCM aux problèmes de périodicité'
              }
            ],
            exercises: [
              {
                type: 'calculation',
                question: 'Calcule PPCM(18, 24) par la méthode des multiples',
                answer: 'Multiples de 18: 18,36,54,72... Multiples de 24: 24,48,72... PPCM = 72',
                difficulty: 'beginner'
              },
              {
                type: 'application',
                question: 'Deux marchés ont lieu l\'un tous les 12 jours, l\'autre tous les 18 jours. S\'ils ont lieu ensemble aujourd\'hui, dans combien de jours auront-ils lieu à nouveau ensemble?',
                answer: 'PPCM(12,18) = 36 jours',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          },
          {
            id: 'ch1-s4',
            title: 'Nombres premiers et décomposition',
            description: 'Identifier les nombres premiers et décomposer en facteurs premiers',
            concepts: ['Nombre premier', 'Crible d\'Ératosthène', 'Décomposition', 'Facteurs premiers'],
            objectives: [
              'Reconnaître un nombre premier',
              'Utiliser le crible d\'Ératosthène',
              'Décomposer un nombre en facteurs premiers',
              'Appliquer la décomposition au calcul du PGCD et PPCM'
            ],
            content: {
              definition: {
                nombre_premier: 'Un nombre premier est un entier naturel supérieur à 1 qui n\'admet que deux diviseurs: 1 et lui-même',
                exemples: 'Premiers nombres premiers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...',
                remarques: [
                  '1 n\'est pas premier (un seul diviseur)',
                  '2 est le seul nombre premier pair',
                  'Il existe une infinité de nombres premiers'
                ]
              },
              methods: {
                crible_eratosthene: {
                  name: 'Crible d\'Ératosthène',
                  description: 'Méthode pour trouver tous les nombres premiers jusqu\'à n',
                  steps: [
                    'Écrire tous les entiers de 2 à n',
                    'Garder 2, barrer tous ses multiples',
                    'Prendre le nombre suivant non barré',
                    'Garder ce nombre, barrer tous ses multiples',
                    'Répéter jusqu\'à avoir dépassé √n',
                    'Les nombres non barrés sont premiers'
                  ],
                  example: 'Nombres premiers jusqu\'à 30: 2,3,5,7,11,13,17,19,23,29'
                },
                decomposition: {
                  name: 'Décomposition en facteurs premiers',
                  description: 'Écrire un nombre comme produit de nombres premiers',
                  method: 'Diviser successivement par les nombres premiers dans l\'ordre',
                  example: {
                    number: 360,
                    steps: [
                      '360 ÷ 2 = 180',
                      '180 ÷ 2 = 90',
                      '90 ÷ 2 = 45',
                      '45 ÷ 3 = 15',
                      '15 ÷ 3 = 5',
                      '5 ÷ 5 = 1'
                    ],
                    result: '360 = 2³ × 3² × 5'
                  }
                }
              },
              applications: {
                pgcd: 'PGCD = produit des facteurs communs avec plus petits exposants',
                ppcm: 'PPCM = produit de tous les facteurs avec plus grands exposants',
                example: {
                  numbers: '72 et 96',
                  decompositions: '72 = 2³ × 3², 96 = 2⁵ × 3',
                  pgcd: 'PGCD = 2³ × 3 = 24',
                  ppcm: 'PPCM = 2⁵ × 3² = 288'
                }
              },
              mauritanianContext: [
                'Cryptographie et codes secrets',
                'Organisation optimale de groupes',
                'Calculs de partages équitables',
                'Problèmes d\'optimisation'
              ]
            },
            exercises: [
              {
                type: 'identification',
                question: 'Parmi ces nombres, lesquels sont premiers: 13, 15, 17, 21, 23?',
                answer: '13, 17, 23 sont premiers. 15 = 3×5, 21 = 3×7 ne sont pas premiers',
                difficulty: 'beginner'
              },
              {
                type: 'decomposition',
                question: 'Décompose 252 en facteurs premiers',
                answer: '252 = 2² × 3² × 7',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          }
        ]
      },
      {
        id: 'ch2',
        title: 'NOMBRES RÉELS ET RADICAUX',
        sections: [
          {
            id: 'ch2-s1',
            title: 'Ensemble des nombres réels',
            description: 'Comprendre la structure des ensembles de nombres',
            concepts: ['Nombres réels', 'Ensembles ℕ, ℤ, 𝔻, ℚ, ℝ', 'Irrationnels', 'Inclusions'],
            objectives: [
              'Connaître les différents ensembles de nombres',
              'Comprendre les inclusions entre ensembles',
              'Identifier des nombres rationnels et irrationnels',
              'Situer un nombre sur la droite réelle'
            ],
            content: {
              ensembles: {
                N: {
                  nom: 'Nombres naturels',
                  definition: 'ℕ = {0, 1, 2, 3, 4, ...}',
                  caracteristique: 'Entiers positifs ou nuls',
                  exemples: '0, 7, 42, 1000'
                },
                Z: {
                  nom: 'Nombres entiers relatifs',
                  definition: 'ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}',
                  caracteristique: 'Entiers positifs et négatifs',
                  exemples: '-5, -1, 0, 3, 15'
                },
                D: {
                  nom: 'Nombres décimaux',
                  definition: '𝔻 = {a/10ⁿ | a ∈ ℤ, n ∈ ℕ}',
                  caracteristique: 'Nombres avec un nombre fini de décimales',
                  exemples: '0,5 = 5/10, 3,14 = 314/100, -2,7'
                },
                Q: {
                  nom: 'Nombres rationnels',
                  definition: 'ℚ = {a/b | a ∈ ℤ, b ∈ ℤ*}',
                  caracteristique: 'Quotients d\'entiers',
                  exemples: '2/3, -5/7, 0,333... = 1/3'
                },
                R: {
                  nom: 'Nombres réels',
                  definition: 'ℝ = ℚ ∪ (nombres irrationnels)',
                  caracteristique: 'Tous les points de la droite graduée',
                  exemples: '√2, π, -3, 4/5'
                }
              },
              inclusions: {
                schema: 'ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ',
                explications: [
                  'Tout naturel est un entier',
                  'Tout entier est un décimal',
                  'Tout décimal est un rationnel',
                  'Tout rationnel est un réel'
                ]
              },
              irrationnels: {
                definition: 'Nombres réels qui ne sont pas rationnels',
                caracteristiques: 'Développement décimal infini non périodique',
                exemples: {
                  sqrt2: {
                    valeur: '√2 ≈ 1,41421356...',
                    justification: 'Racine carrée de 2, ne peut s\'écrire a/b'
                  },
                  pi: {
                    valeur: 'π ≈ 3,14159265...',
                    justification: 'Rapport circonférence/diamètre'
                  },
                  sqrt3: {
                    valeur: '√3 ≈ 1,73205080...',
                    justification: 'Racine carrée de 3'
                  }
                }
              },
              mauritanianContext: [
                'Mesures précises au marché (poids, longueurs)',
                'Calculs financiers avec ouguiyas',
                'Distances géographiques en Mauritanie',
                'Mesures scientifiques et techniques'
              ]
            },
            exercises: [
              {
                type: 'classification',
                question: 'Classe ces nombres dans les ensembles ℕ, ℤ, 𝔻, ℚ, ℝ: 5, -3, 2/7, √5, 3,14',
                answer: 'ℕ: 5 | ℤ: 5, -3 | 𝔻: 5, -3, 3,14 | ℚ: 5, -3, 2/7, 3,14 | ℝ: tous',
                difficulty: 'beginner'
              },
              {
                type: 'identification',
                question: 'Parmi √16, √3, 0,333..., π, lesquels sont rationnels?',
                answer: '√16 = 4 (rationnel), 0,333... = 1/3 (rationnel). √3 et π sont irrationnels',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          },
          {
            id: 'ch2-s2',
            title: 'Racines carrées',
            description: 'Comprendre et calculer avec les racines carrées',
            concepts: ['Racine carrée', 'Notation √', 'Propriétés', 'Simplification'],
            objectives: [
              'Calculer des racines carrées simples',
              'Utiliser les propriétés des racines',
              'Simplifier des expressions avec radicaux',
              'Résoudre des équations de type x² = a'
            ],
            content: {
              definition: {
                racine_carree: 'La racine carrée d\'un nombre positif a est le nombre positif dont le carré est a',
                notation: '√a où a ≥ 0',
                relation: '(√a)² = a et √(a²) = |a|',
                exemples: {
                  sqrt4: '√4 = 2 car 2² = 4',
                  sqrt9: '√9 = 3 car 3² = 9',
                  sqrt16: '√16 = 4 car 4² = 16',
                  sqrt25: '√25 = 5 car 5² = 25'
                }
              },
              proprietes: {
                produit: {
                  regle: '√(a×b) = √a × √b',
                  exemples: [
                    '√(4×9) = √4 × √9 = 2 × 3 = 6',
                    '√50 = √(25×2) = √25 × √2 = 5√2'
                  ]
                },
                quotient: {
                  regle: '√(a/b) = √a / √b (b ≠ 0)',
                  exemples: [
                    '√(9/4) = √9 / √4 = 3/2',
                    '√(1/2) = √1 / √2 = 1/√2'
                  ]
                },
                puissance: {
                  regle: '√(aⁿ) = (√a)ⁿ si n est pair',
                  exemples: [
                    '√(3²) = 3',
                    '√(5⁴) = (√5)⁴ = 25'
                  ]
                }
              },
              simplification: {
                methode: 'Décomposer en facteurs carrés parfaits',
                exemples: {
                  sqrt48: {
                    decomposition: '√48 = √(16×3) = √16 × √3',
                    resultat: '4√3'
                  },
                  sqrt75: {
                    decomposition: '√75 = √(25×3) = √25 × √3',
                    resultat: '5√3'
                  },
                  sqrt200: {
                    decomposition: '√200 = √(100×2) = √100 × √2',
                    resultat: '10√2'
                  }
                }
              },
              mauritanianContext: [
                'Calculs de diagonales de terrains',
                'Mesures de distances en géométrie',
                'Problèmes de construction',
                'Calculs de surfaces agricoles'
              ]
            },
            exercises: [
              {
                type: 'calculation',
                question: 'Calcule: √36, √81, √144',
                answer: '√36 = 6, √81 = 9, √144 = 12',
                difficulty: 'beginner'
              },
              {
                type: 'simplification',
                question: 'Simplifie: √32',
                answer: '√32 = √(16×2) = 4√2',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch2-s3',
            title: 'Opérations sur les radicaux',
            description: 'Maîtriser les calculs avec les racines carrées',
            concepts: ['Addition de radicaux', 'Multiplication de radicaux', 'Division', 'Rationalisation'],
            objectives: [
              'Additionner des radicaux semblables',
              'Multiplier des radicaux',
              'Rationaliser des dénominateurs',
              'Simplifier des expressions complexes'
            ],
            content: {
              addition: {
                regle: 'On ne peut additionner que des radicaux semblables',
                definition: 'a√c + b√c = (a+b)√c',
                exemples: {
                  ex1: '3√2 + 5√2 = 8√2',
                  ex2: '7√3 - 2√3 = 5√3',
                  ex3: '2√5 + 3√5 - √5 = 4√5'
                },
                contre_exemples: {
                  impossible: '√2 + √3 ne peut pas se simplifier',
                  raison: 'Les radicaux ne sont pas semblables'
                }
              },
              multiplication: {
                regle: '√a × √b = √(a×b)',
                exemples: {
                  ex1: '√2 × √3 = √6',
                  ex2: '√5 × √5 = √25 = 5',
                  ex3: '2√3 × 3√2 = 6√6',
                  ex4: '√8 × √2 = √16 = 4'
                },
                distributivite: {
                  regle: 'a(√b + √c) = a√b + a√c',
                  exemple: '3(√2 + √5) = 3√2 + 3√5'
                }
              },
              rationalisation: {
                definition: 'Supprimer les radicaux du dénominateur',
                methode: 'Multiplier numérateur et dénominateur par le radical approprié',
                exemples: {
                  simple: {
                    initial: '1/√2',
                    etapes: '1/√2 × √2/√2 = √2/2',
                    explication: 'Multiplier par √2/√2'
                  },
                  avec_coefficient: {
                    initial: '3/√5',
                    etapes: '3/√5 × √5/√5 = 3√5/5',
                    explication: 'Multiplier par √5/√5'
                  },
                  complexe: {
                    initial: '6/(2√3)',
                    etapes: '6/(2√3) × √3/√3 = 6√3/6 = √3',
                    explication: 'Simplification après rationalisation'
                  }
                }
              },
              mauritanianContext: [
                'Calculs précis de mesures',
                'Problèmes de construction géométrique',
                'Calculs de diagonales et distances',
                'Applications scientifiques'
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
                type: 'multiplication',
                question: 'Calcule: √6 × √15',
                answer: '√6 × √15 = √90 = √(9×10) = 3√10',
                difficulty: 'intermediate'
              },
              {
                type: 'rationalisation',
                question: 'Rationalise: 5/√3',
                answer: '5/√3 × √3/√3 = 5√3/3',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 45
          },
          {
            id: 'ch2-s4',
            title: 'Équations avec radicaux',
            description: 'Résoudre des équations contenant des racines carrées',
            concepts: ['Équation radicale', 'Élévation au carré', 'Vérification', 'Solutions étrangères'],
            objectives: [
              'Résoudre des équations de type √x = a',
              'Résoudre des équations de type √(ax+b) = c',
              'Vérifier les solutions obtenues',
              'Éliminer les solutions étrangères'
            ],
            content: {
              types_equations: {
                type1: {
                  forme: '√x = a',
                  methode: 'Élever au carré: x = a²',
                  condition: 'a ≥ 0',
                  exemple: {
                    equation: '√x = 5',
                    resolution: 'x = 5² = 25',
                    verification: '√25 = 5 ✓'
                  }
                },
                type2: {
                  forme: '√(ax+b) = c',
                  methode: 'Élever au carré puis résoudre',
                  condition: 'c ≥ 0',
                  exemple: {
                    equation: '√(2x+3) = 5',
                    etapes: [
                      '2x+3 = 25',
                      '2x = 22',
                      'x = 11'
                    ],
                    verification: '√(2×11+3) = √25 = 5 ✓'
                  }
                },
                type3: {
                  forme: '√x + a = b',
                  methode: 'Isoler le radical puis élever au carré',
                  exemple: {
                    equation: '√x + 3 = 7',
                    etapes: [
                      '√x = 4',
                      'x = 16'
                    ],
                    verification: '√16 + 3 = 4 + 3 = 7 ✓'
                  }
                }
              },
              precautions: {
                elevation_carre: 'L\'élévation au carré peut introduire des solutions étrangères',
                verification: 'TOUJOURS vérifier les solutions dans l\'équation originale',
                exemple_solution_etrangere: {
                  equation: '√x = -3',
                  resolution_incorrecte: 'x = 9',
                  verification: '√9 = 3 ≠ -3',
                  conclusion: 'Pas de solution car √x ≥ 0 toujours'
                }
              },
              mauritanianContext: [
                'Problèmes de géométrie appliquée',
                'Calculs de distances et mesures',
                'Applications physiques',
                'Problèmes de construction'
              ]
            },
            exercises: [
              {
                type: 'simple',
                question: 'Résous: √x = 7',
                answer: 'x = 49. Vérification: √49 = 7 ✓',
                difficulty: 'beginner'
              },
              {
                type: 'avec_transformation',
                question: 'Résous: √(3x-5) = 4',
                answer: '3x-5 = 16, donc 3x = 21, x = 7. Vérification: √(21-5) = √16 = 4 ✓',
                difficulty: 'intermediate'
              },
              {
                type: 'avec_solution_etrangere',
                question: 'Résous: √(x+5) = x-1',
                answer: 'x+5 = (x-1)², x+5 = x²-2x+1, x²-3x-4 = 0, x = 4 ou x = -1. Vérification: x=4 ✓, x=-1 est solution étrangère',
                difficulty: 'advanced'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          }
        ]
      },
      {
        id: 'ch3',
        title: 'DÉVELOPPEMENT, FACTORISATION ET IDENTITÉS REMARQUABLES',
        sections: [
          {
            id: 'ch3-s1',
            title: 'Distributivité simple et double',
            description: 'Maîtriser le développement d\'expressions algébriques',
            concepts: ['Distributivité', 'Développement', 'Réduction', 'Termes semblables'],
            objectives: [
              'Appliquer la distributivité simple k(a+b)',
              'Appliquer la distributivité double (a+b)(c+d)',
              'Réduire des expressions développées',
              'Résoudre des problèmes contextualisés'
            ],
            content: {
              distributivite_simple: {
                regle: 'k(a+b) = ka + kb et k(a-b) = ka - kb',
                exemples: {
                  ex1: '3(x+5) = 3x + 15',
                  ex2: '-2(x-4) = -2x + 8',
                  ex3: '5(2x+3) = 10x + 15',
                  ex4: 'x(x+7) = x² + 7x'
                },
                avec_soustractions: {
                  ex1: '4(x-3) = 4x - 12',
                  ex2: '-3(2x-5) = -6x + 15',
                  attention: 'Le signe devant la parenthèse change tous les signes à l\'intérieur'
                }
              },
              distributivite_double: {
                regle: '(a+b)(c+d) = ac + ad + bc + bd',
                methode: 'Chaque terme du premier facteur multiplie chaque terme du second',
                exemples: {
                  ex1: {
                    expression: '(x+2)(x+3)',
                    developpement: 'x×x + x×3 + 2×x + 2×3',
                    resultat: 'x² + 3x + 2x + 6 = x² + 5x + 6'
                  },
                  ex2: {
                    expression: '(2x+1)(x+4)',
                    developpement: '2x×x + 2x×4 + 1×x + 1×4',
                    resultat: '2x² + 8x + x + 4 = 2x² + 9x + 4'
                  },
                  ex3: {
                    expression: '(x-3)(x+5)',
                    developpement: 'x×x + x×5 - 3×x - 3×5',
                    resultat: 'x² + 5x - 3x - 15 = x² + 2x - 15'
                  }
                }
              },
              reduction: {
                definition: 'Regrouper les termes semblables',
                methode: 'Additionner les coefficients des termes de même degré',
                exemples: {
                  ex1: '3x + 5x - 2x = 6x',
                  ex2: '2x² + 3x + x² - x = 3x² + 2x',
                  ex3: '5a - 2b + 3a + 4b = 8a + 2b'
                }
              },
              mauritanianContext: [
                'Calcul de périmètres de terrains',
                'Calcul d\'aires de parcelles agricoles',
                'Problèmes de coûts et prix',
                'Calculs de quantités en commerce'
              ]
            },
            activities: [
              {
                type: 'contextual',
                title: 'Périmètre d\'un terrain rectangulaire',
                context: 'Un terrain a pour longueur (2x+5) mètres et largeur (x+3) mètres',
                question: 'Exprime son périmètre en fonction de x',
                solution: 'P = 2[(2x+5) + (x+3)] = 2(3x+8) = 6x+16 mètres',
                learning: 'Application de la distributivité à un problème géométrique'
              }
            ],
            exercises: [
              {
                type: 'distributivite_simple',
                question: 'Développe: 5(2x-3)',
                answer: '5×2x - 5×3 = 10x - 15',
                difficulty: 'beginner'
              },
              {
                type: 'distributivite_double',
                question: 'Développe et réduis: (x+4)(x+7)',
                answer: 'x² + 7x + 4x + 28 = x² + 11x + 28',
                difficulty: 'intermediate'
              },
              {
                type: 'mixte',
                question: 'Développe et réduis: 3(x+2) + 2(x-5)',
                answer: '3x + 6 + 2x - 10 = 5x - 4',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch3-s2',
            title: 'Identités remarquables - Carrés',
            description: 'Maîtriser les formules du carré d\'une somme et d\'une différence',
            concepts: ['Carré d\'une somme', 'Carré d\'une différence', 'Identités remarquables', 'Développement rapide'],
            objectives: [
              'Connaître les formules (a+b)² et (a-b)²',
              'Développer rapidement avec les identités',
              'Reconnaître les situations d\'application',
              'Résoudre des problèmes géométriques'
            ],
            content: {
              identite1: {
                nom: 'Carré d\'une somme',
                formule: '(a+b)² = a² + 2ab + b²',
                memorisation: 'Carré du premier + double produit + carré du second',
                exemples: {
                  ex1: {
                    expression: '(x+3)²',
                    application: 'a=x, b=3',
                    developpement: 'x² + 2×x×3 + 3²',
                    resultat: 'x² + 6x + 9'
                  },
                  ex2: {
                    expression: '(2x+5)²',
                    application: 'a=2x, b=5',
                    developpement: '(2x)² + 2×2x×5 + 5²',
                    resultat: '4x² + 20x + 25'
                  },
                  ex3: {
                    expression: '(x+1)²',
                    resultat: 'x² + 2x + 1'
                  }
                }
              },
              identite2: {
                nom: 'Carré d\'une différence',
                formule: '(a-b)² = a² - 2ab + b²',
                memorisation: 'Carré du premier - double produit + carré du second',
                exemples: {
                  ex1: {
                    expression: '(x-4)²',
                    application: 'a=x, b=4',
                    developpement: 'x² - 2×x×4 + 4²',
                    resultat: 'x² - 8x + 16'
                  },
                  ex2: {
                    expression: '(3x-2)²',
                    application: 'a=3x, b=2',
                    developpement: '(3x)² - 2×3x×2 + 2²',
                    resultat: '9x² - 12x + 4'
                  },
                  ex3: {
                    expression: '(x-7)²',
                    resultat: 'x² - 14x + 49'
                  }
                }
              },
              erreurs_frequentes: {
                erreur1: {
                  faux: '(x+3)² = x² + 9',
                  correct: '(x+3)² = x² + 6x + 9',
                  explication: 'Ne pas oublier le double produit 2ab'
                },
                erreur2: {
                  faux: '(x-2)² = x² - 4',
                  correct: '(x-2)² = x² - 4x + 4',
                  explication: 'Le terme du milieu est -2ab, pas 0'
                }
              },
              applications: {
                geometrie: 'Calcul d\'aires de carrés',
                exemple: {
                  contexte: 'Un carré de côté (x+5) cm',
                  calcul_aire: 'A = (x+5)² = x² + 10x + 25 cm²',
                  interpretation: 'L\'aire contient: un carré x², un rectangle 10x, et un carré 25'
                }
              },
              mauritanianContext: [
                'Calcul d\'aires de terrains carrés',
                'Problèmes de construction',
                'Agrandissement de parcelles',
                'Calculs de surfaces agricoles'
              ]
            },
            exercises: [
              {
                type: 'developpement',
                question: 'Développe: (x+6)²',
                answer: 'x² + 2×6x + 36 = x² + 12x + 36',
                difficulty: 'beginner'
              },
              {
                type: 'developpement',
                question: 'Développe: (2x-3)²',
                answer: '4x² - 12x + 9',
                difficulty: 'intermediate'
              },
              {
                type: 'application',
                question: 'Un carré a pour côté (x+4) cm. Exprime son aire',
                answer: 'A = (x+4)² = x² + 8x + 16 cm²',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch3-s3',
            title: 'Identité remarquable - Différence de carrés',
            description: 'Maîtriser la formule de la différence de deux carrés',
            concepts: ['Différence de carrés', 'Produit remarquable', 'Factorisation', 'Simplification'],
            objectives: [
              'Connaître la formule (a+b)(a-b) = a²-b²',
              'Développer avec cette identité',
              'Factoriser avec cette identité',
              'Appliquer dans des calculs numériques'
            ],
            content: {
              identite: {
                nom: 'Différence de deux carrés',
                formule: '(a+b)(a-b) = a² - b²',
                memorisation: 'Produit d\'une somme et d\'une différence = différence des carrés',
                symetrie: 'Aussi: a² - b² = (a+b)(a-b)',
                exemples_developpement: {
                  ex1: {
                    expression: '(x+5)(x-5)',
                    application: 'a=x, b=5',
                    developpement: 'x² - 5²',
                    resultat: 'x² - 25'
                  },
                  ex2: {
                    expression: '(2x+3)(2x-3)',
                    application: 'a=2x, b=3',
                    developpement: '(2x)² - 3²',
                    resultat: '4x² - 9'
                  },
                  ex3: {
                    expression: '(x+7)(x-7)',
                    resultat: 'x² - 49'
                  }
                }
              },
              factorisation: {
                principe: 'Reconnaître une différence de carrés pour factoriser',
                exemples: {
                  ex1: {
                    expression: 'x² - 16',
                    reconnaissance: 'x² - 4²',
                    factorisation: '(x+4)(x-4)'
                  },
                  ex2: {
                    expression: '9x² - 25',
                    reconnaissance: '(3x)² - 5²',
                    factorisation: '(3x+5)(3x-5)'
                  },
                  ex3: {
                    expression: 'x² - 1',
                    reconnaissance: 'x² - 1²',
                    factorisation: '(x+1)(x-1)'
                  }
                }
              },
              calcul_mental: {
                technique: 'Utiliser (a+b)(a-b) = a²-b² pour calculer rapidement',
                exemples: {
                  ex1: {
                    calcul: '103 × 97',
                    transformation: '(100+3)(100-3)',
                    application: '100² - 3² = 10000 - 9',
                    resultat: '9991'
                  },
                  ex2: {
                    calcul: '52 × 48',
                    transformation: '(50+2)(50-2)',
                    application: '50² - 2² = 2500 - 4',
                    resultat: '2496'
                  }
                }
              },
              mauritanianContext: [
                'Calculs rapides au marché',
                'Problèmes de surfaces',
                'Optimisation de calculs',
                'Applications commerciales'
              ]
            },
            exercises: [
              {
                type: 'developpement',
                question: 'Développe: (x+8)(x-8)',
                answer: 'x² - 64',
                difficulty: 'beginner'
              },
              {
                type: 'factorisation',
                question: 'Factorise: x² - 36',
                answer: '(x+6)(x-6)',
                difficulty: 'intermediate'
              },
              {
                type: 'calcul_mental',
                question: 'Calcule rapidement: 105 × 95',
                answer: '(100+5)(100-5) = 10000 - 25 = 9975',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          },
          {
            id: 'ch3-s4',
            title: 'Factorisation',
            description: 'Maîtriser les techniques de factorisation',
            concepts: ['Factorisation', 'Facteur commun', 'Identités remarquables', 'Factorisation mixte'],
            objectives: [
              'Identifier un facteur commun',
              'Factoriser avec les identités remarquables',
              'Combiner plusieurs techniques',
              'Simplifier des expressions'
            ],
            content: {
              facteur_commun: {
                principe: 'Identifier le plus grand facteur commun et le mettre en évidence',
                methode: 'ab + ac = a(b+c)',
                exemples: {
                  ex1: {
                    expression: '3x + 6',
                    facteur: '3',
                    factorisation: '3(x+2)'
                  },
                  ex2: {
                    expression: '5x² + 10x',
                    facteur: '5x',
                    factorisation: '5x(x+2)'
                  },
                  ex3: {
                    expression: '2x² - 6x + 4',
                    facteur: '2',
                    factorisation: '2(x² - 3x + 2)'
                  }
                }
              },
              avec_identites: {
                technique1: {
                  nom: 'Reconnaître a² + 2ab + b²',
                  exemple: {
                    expression: 'x² + 6x + 9',
                    reconnaissance: 'x² + 2×x×3 + 3²',
                    factorisation: '(x+3)²'
                  }
                },
                technique2: {
                  nom: 'Reconnaître a² - 2ab + b²',
                  exemple: {
                    expression: 'x² - 10x + 25',
                    reconnaissance: 'x² - 2×x×5 + 5²',
                    factorisation: '(x-5)²'
                  }
                },
                technique3: {
                  nom: 'Reconnaître a² - b²',
                  exemple: {
                    expression: '4x² - 49',
                    reconnaissance: '(2x)² - 7²',
                    factorisation: '(2x+7)(2x-7)'
                  }
                }
              },
              factorisation_mixte: {
                principe: 'Combiner facteur commun et identités',
                exemples: {
                  ex1: {
                    expression: '2x² - 8',
                    etape1: 'Facteur commun: 2(x² - 4)',
                    etape2: 'Différence de carrés: 2(x+2)(x-2)',
                    resultat: '2(x+2)(x-2)'
                  },
                  ex2: {
                    expression: '3x² + 12x + 12',
                    etape1: 'Facteur commun: 3(x² + 4x + 4)',
                    etape2: 'Carré: 3(x+2)²',
                    resultat: '3(x+2)²'
                  }
                }
              },
              mauritanianContext: [
                'Simplification de calculs',
                'Résolution d\'équations',
                'Problèmes d\'optimisation',
                'Applications géométriques'
              ]
            },
            exercises: [
              {
                type: 'facteur_commun',
                question: 'Factorise: 7x + 14',
                answer: '7(x+2)',
                difficulty: 'beginner'
              },
              {
                type: 'identite',
                question: 'Factorise: x² + 8x + 16',
                answer: '(x+4)²',
                difficulty: 'intermediate'
              },
              {
                type: 'mixte',
                question: 'Factorise: 5x² - 20',
                answer: '5(x² - 4) = 5(x+2)(x-2)',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 45
          },
          {
            id: 'ch3-s5',
            title: 'Applications et problèmes',
            description: 'Appliquer développement et factorisation à des problèmes concrets',
            concepts: ['Problèmes algébriques', 'Équations', 'Géométrie', 'Optimisation'],
            objectives: [
              'Choisir entre développement et factorisation',
              'Résoudre des équations par factorisation',
              'Appliquer à des problèmes géométriques',
              'Résoudre des problèmes contextualisés mauritaniens'
            ],
            content: {
              choix_strategie: {
                pour_developper: [
                  'Calculer une valeur numérique',
                  'Simplifier avant de dériver',
                  'Obtenir une forme polynomiale'
                ],
                pour_factoriser: [
                  'Résoudre une équation (chercher les racines)',
                  'Simplifier une fraction algébrique',
                  'Trouver des diviseurs communs'
                ]
              },
              equations_produit_nul: {
                principe: 'Si AB = 0 alors A = 0 ou B = 0',
                methode: [
                  'Factoriser l\'équation',
                  'Utiliser la règle du produit nul',
                  'Résoudre chaque équation simple'
                ],
                exemples: {
                  ex1: {
                    equation: 'x² - 5x = 0',
                    factorisation: 'x(x-5) = 0',
                    solutions: 'x = 0 ou x = 5'
                  },
                  ex2: {
                    equation: 'x² - 9 = 0',
                    factorisation: '(x+3)(x-3) = 0',
                    solutions: 'x = -3 ou x = 3'
                  },
                  ex3: {
                    equation: 'x² + 6x + 9 = 0',
                    factorisation: '(x+3)² = 0',
                    solution: 'x = -3 (solution double)'
                  }
                }
              },
              problemes_geometriques: {
                exemple1: {
                  enonce: 'Un terrain carré de côté x mètres est agrandi de 5m de chaque côté. L\'aire augmente de 165 m². Trouve x',
                  mise_en_equation: '(x+5)² - x² = 165',
                  developpement: 'x² + 10x + 25 - x² = 165',
                  simplification: '10x + 25 = 165',
                  resolution: '10x = 140, x = 14m'
                },
                exemple2: {
                  enonce: 'L\'aire d\'un rectangle de longueur (x+3) et largeur (x-2) est 24 m². Trouve x',
                  mise_en_equation: '(x+3)(x-2) = 24',
                  developpement: 'x² + x - 6 = 24',
                  simplification: 'x² + x - 30 = 0',
                  factorisation: '(x+6)(x-5) = 0',
                  solutions: 'x = -6 (impossible) ou x = 5m'
                }
              },
              mauritanianContext: [
                'Problèmes de terrains agricoles',
                'Calculs de surfaces de parcelles',
                'Optimisation d\'espaces commerciaux',
                'Construction et aménagement'
              ]
            },
            exercises: [
              {
                type: 'equation',
                question: 'Résous par factorisation: x² - 7x = 0',
                answer: 'x(x-7) = 0, donc x = 0 ou x = 7',
                difficulty: 'intermediate'
              },
              {
                type: 'probleme',
                question: 'Un carré de côté x cm voit son côté augmenter de 3 cm. Son aire augmente de 39 cm². Trouve x',
                answer: '(x+3)² - x² = 39, donc 6x + 9 = 39, donc x = 5 cm',
                difficulty: 'advanced'
              }
            ],
            difficulty: 'advanced',
            estimatedTime: 45
          }
        ]
      },
      {
        id: 'ch4',
        title: 'CALCUL LITTÉRAL',
        sections: [
          {
            id: 'ch4-s1',
            title: 'Expressions littérales et réduction',
            description: 'Comprendre et manipuler les expressions algébriques',
            concepts: ['Expression littérale', 'Variable', 'Réduction', 'Termes semblables', 'Suppression de parenthèses'],
            objectives: [
              'Comprendre la notion d\'expression littérale',
              'Supprimer des parenthèses correctement',
              'Réduire des expressions en regroupant les termes',
              'Résoudre des problèmes concrets'
            ],
            content: {
              definition: {
                expression_litterale: 'Une expression littérale est une expression dans laquelle un ou plusieurs nombres sont désignés par des lettres',
                exemples: [
                  '2x + 3',
                  '5a - 2b + c',
                  'x² + 4x - 1',
                  '(a+b)×h/2'
                ]
              },
              suppression_parentheses: {
                regles: {
                  regle1: {
                    formule: 'a + (b + c) = a + b + c',
                    exemple: 'x + (3 + y) = x + 3 + y',
                    explication: 'Signe + devant: on garde les signes'
                  },
                  regle2: {
                    formule: 'a + (b - c) = a + b - c',
                    exemple: 'x + (5 - y) = x + 5 - y',
                    explication: 'Signe + devant: on garde les signes'
                  },
                  regle3: {
                    formule: 'a - (b + c) = a - b - c',
                    exemple: 'x - (3 + y) = x - 3 - y',
                    explication: 'Signe - devant: on change tous les signes'
                  },
                  regle4: {
                    formule: 'a - (b - c) = a - b + c',
                    exemple: 'x - (5 - y) = x - 5 + y',
                    explication: 'Signe - devant: on change tous les signes'
                  }
                }
              },
              reduction: {
                principe: 'Regrouper les termes semblables (même partie littérale)',
                methode: [
                  'Identifier les termes semblables',
                  'Additionner ou soustraire leurs coefficients',
                  'Conserver la partie littérale'
                ],
                exemples: {
                  ex1: {
                    initial: '3x + 5x - 2x',
                    reduction: '(3+5-2)x = 6x',
                    explication: 'Termes en x'
                  },
                  ex2: {
                    initial: '2x² + 3x + x² - x',
                    reduction: '3x² + 2x',
                    explication: 'Regrouper x² ensemble, puis x ensemble'
                  },
                  ex3: {
                    initial: '5a - 2b + 3a + 4b',
                    reduction: '8a + 2b',
                    explication: 'Termes en a puis termes en b'
                  }
                }
              },
              jeu_mathematique: {
                titre: 'Le nombre mystérieux',
                enonce: 'Pense à un nombre, ajoute 10, multiplie par 2, ajoute ton âge, ôte le double de ton âge, divise par 2, ôte le nombre pensé',
                resultat: 'Tu obtiens toujours 10',
                demonstration: {
                  x: 'nombre pensé',
                  a: 'ton âge',
                  etape1: 'x (nombre pensé)',
                  etape2: 'x + 10',
                  etape3: '2(x + 10) = 2x + 20',
                  etape4: '2x + 20 + a',
                  etape5: '2x + 20 + a - 2a = 2x + 20 - a',
                  etape6: '(2x + 20 - a)/2 = x + 10 - a/2',
                  correction: 'La formulation exacte donne toujours 10'
                }
              },
              mauritanianContext: [
                'Calcul de périmètres de terrains',
                'Calcul de coûts variables',
                'Problèmes de gestion familiale',
                'Situations commerciales'
              ]
            },
            exercises: [
              {
                type: 'suppression',
                question: 'Supprime les parenthèses: x - (2 + 3x)',
                answer: 'x - 2 - 3x = -2x - 2',
                difficulty: 'beginner'
              },
              {
                type: 'reduction',
                question: 'Réduis: 4x + 2 - x + 5',
                answer: '3x + 7',
                difficulty: 'beginner'
              },
              {
                type: 'complexe',
                question: 'Réduis: 3(x+2) - 2(x-1)',
                answer: '3x + 6 - 2x + 2 = x + 8',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          },
          {
            id: 'ch4-s2',
            title: 'Développement et identités remarquables',
            description: 'Maîtriser le développement avec les identités',
            concepts: ['Distributivité', 'Identités remarquables', 'Carré', 'Différence de carrés'],
            objectives: [
              'Utiliser la distributivité simple et double',
              'Connaître les trois identités remarquables',
              'Développer rapidement avec les identités',
              'Choisir la méthode appropriée'
            ],
            content: {
              distributivite: {
                simple: {
                  formule: 'k(a+b) = ka + kb',
                  exemples: [
                    '3(x+5) = 3x + 15',
                    '-2(x-4) = -2x + 8',
                    'x(x+7) = x² + 7x'
                  ]
                },
                double: {
                  formule: '(a+b)(c+d) = ac + ad + bc + bd',
                  methode: 'Chaque terme du premier multiplie chaque terme du second',
                  exemples: [
                    '(x+2)(x+3) = x² + 3x + 2x + 6 = x² + 5x + 6',
                    '(2x+1)(x+4) = 2x² + 8x + x + 4 = 2x² + 9x + 4',
                    '(x-3)(x+5) = x² + 5x - 3x - 15 = x² + 2x - 15'
                  ]
                }
              },
              identites_remarquables: {
                identite1: {
                  nom: 'Carré d\'une somme',
                  formule: '(a+b)² = a² + 2ab + b²',
                  memorisation: 'Premier carré + double produit + second carré',
                  exemples: [
                    {
                      expression: '(x+3)²',
                      application: 'a=x, b=3',
                      developpement: 'x² + 2(x)(3) + 3²',
                      resultat: 'x² + 6x + 9'
                    },
                    {
                      expression: '(2x+5)²',
                      application: 'a=2x, b=5',
                      developpement: '(2x)² + 2(2x)(5) + 5²',
                      resultat: '4x² + 20x + 25'
                    }
                  ]
                },
                identite2: {
                  nom: 'Carré d\'une différence',
                  formule: '(a-b)² = a² - 2ab + b²',
                  memorisation: 'Premier carré - double produit + second carré',
                  exemples: [
                    {
                      expression: '(x-4)²',
                      application: 'a=x, b=4',
                      developpement: 'x² - 2(x)(4) + 4²',
                      resultat: 'x² - 8x + 16'
                    },
                    {
                      expression: '(3x-2)²',
                      application: 'a=3x, b=2',
                      developpement: '(3x)² - 2(3x)(2) + 2²',
                      resultat: '9x² - 12x + 4'
                    }
                  ]
                },
                identite3: {
                  nom: 'Différence de deux carrés',
                  formule: '(a+b)(a-b) = a² - b²',
                  memorisation: 'Produit somme-différence = différence des carrés',
                  exemples: [
                    {
                      expression: '(x+5)(x-5)',
                      application: 'a=x, b=5',
                      developpement: 'x² - 5²',
                      resultat: 'x² - 25'
                    },
                    {
                      expression: '(2x+3)(2x-3)',
                      application: 'a=2x, b=3',
                      developpement: '(2x)² - 3²',
                      resultat: '4x² - 9'
                    }
                  ]
                }
              },
              erreurs_frequentes: [
                {
                  erreur: '(x+3)² = x² + 9',
                  correction: '(x+3)² = x² + 6x + 9',
                  explication: 'Ne pas oublier le terme 2ab'
                },
                {
                  erreur: '(x-2)² = x² - 4',
                  correction: '(x-2)² = x² - 4x + 4',
                  explication: 'Le terme du milieu est -2ab'
                }
              ],
              mauritanianContext: [
                'Calculs d\'aires de terrains carrés',
                'Agrandissement de parcelles',
                'Problèmes de construction',
                'Optimisation de surfaces'
              ]
            },
            exercises: [
              {
                type: 'developpement',
                question: 'Développe: (x+7)²',
                answer: 'x² + 14x + 49',
                difficulty: 'beginner'
              },
              {
                type: 'developpement',
                question: 'Développe: (3x-4)²',
                answer: '9x² - 24x + 16',
                difficulty: 'intermediate'
              },
              {
                type: 'difference',
                question: 'Développe: (x+9)(x-9)',
                answer: 'x² - 81',
                difficulty: 'beginner'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch4-s3',
            title: 'Factorisation',
            description: 'Transformer des sommes en produits',
            concepts: ['Factorisation', 'Facteur commun', 'Mise en évidence', 'Identités inverses'],
            objectives: [
              'Identifier un facteur commun',
              'Factoriser avec les identités remarquables',
              'Combiner plusieurs techniques',
              'Résoudre des équations par factorisation'
            ],
            content: {
              facteur_commun: {
                principe: 'ab + ac = a(b+c)',
                methode: [
                  'Identifier le PGCD des coefficients',
                  'Identifier la plus petite puissance des lettres',
                  'Mettre le facteur commun en évidence',
                  'Écrire ce qui reste entre parenthèses'
                ],
                exemples: {
                  ex1: {
                    expression: '3x + 6',
                    facteur: '3',
                    factorisation: '3(x+2)',
                    verification: '3×x + 3×2 = 3x + 6 ✓'
                  },
                  ex2: {
                    expression: '5x² + 10x',
                    facteur: '5x',
                    factorisation: '5x(x+2)',
                    verification: '5x×x + 5x×2 = 5x² + 10x ✓'
                  },
                  ex3: {
                    expression: '2x² - 6x + 4',
                    facteur: '2',
                    factorisation: '2(x² - 3x + 2)',
                    explication: 'Factoriser partiellement'
                  }
                }
              },
              avec_identites: {
                reconnaissance_a2_plus_2ab_plus_b2: {
                  forme: 'a² + 2ab + b²',
                  factorisation: '(a+b)²',
                  exemples: [
                    {
                      expression: 'x² + 6x + 9',
                      reconnaissance: 'x² + 2(x)(3) + 3²',
                      factorisation: '(x+3)²'
                    },
                    {
                      expression: '4x² + 12x + 9',
                      reconnaissance: '(2x)² + 2(2x)(3) + 3²',
                      factorisation: '(2x+3)²'
                    }
                  ]
                },
                reconnaissance_a2_moins_2ab_plus_b2: {
                  forme: 'a² - 2ab + b²',
                  factorisation: '(a-b)²',
                  exemples: [
                    {
                      expression: 'x² - 10x + 25',
                      reconnaissance: 'x² - 2(x)(5) + 5²',
                      factorisation: '(x-5)²'
                    },
                    {
                      expression: '9x² - 12x + 4',
                      reconnaissance: '(3x)² - 2(3x)(2) + 2²',
                      factorisation: '(3x-2)²'
                    }
                  ]
                },
                reconnaissance_a2_moins_b2: {
                  forme: 'a² - b²',
                  factorisation: '(a+b)(a-b)',
                  exemples: [
                    {
                      expression: 'x² - 16',
                      reconnaissance: 'x² - 4²',
                      factorisation: '(x+4)(x-4)'
                    },
                    {
                      expression: '4x² - 49',
                      reconnaissance: '(2x)² - 7²',
                      factorisation: '(2x+7)(2x-7)'
                    }
                  ]
                }
              },
              factorisation_mixte: {
                principe: 'Combiner facteur commun et identités',
                exemples: {
                  ex1: {
                    expression: '2x² - 8',
                    etape1: 'Facteur commun: 2(x² - 4)',
                    etape2: 'Différence de carrés: 2(x+2)(x-2)',
                    resultat: '2(x+2)(x-2)'
                  },
                  ex2: {
                    expression: '3x² + 12x + 12',
                    etape1: 'Facteur commun: 3(x² + 4x + 4)',
                    etape2: 'Carré: 3(x+2)²',
                    resultat: '3(x+2)²'
                  }
                }
              },
              mauritanianContext: [
                'Simplification de calculs complexes',
                'Résolution d\'équations',
                'Problèmes d\'optimisation',
                'Calculs d\'aires factorisées'
              ]
            },
            exercises: [
              {
                type: 'facteur_commun',
                question: 'Factorise: 4x + 12',
                answer: '4(x+3)',
                difficulty: 'beginner'
              },
              {
                type: 'identite',
                question: 'Factorise: x² + 10x + 25',
                answer: '(x+5)²',
                difficulty: 'intermediate'
              },
              {
                type: 'mixte',
                question: 'Factorise: 3x² - 27',
                answer: '3(x² - 9) = 3(x+3)(x-3)',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 45
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
            description: 'Résoudre des équations linéaires',
            concepts: ['Équation', 'Inconnue', 'Solution', 'Équivalence', 'Vérification'],
            objectives: [
              'Comprendre la notion d\'équation',
              'Résoudre des équations de type ax+b=c',
              'Vérifier les solutions obtenues',
              'Mettre en équation des problèmes concrets'
            ],
            content: {
              definition: {
                equation: 'Une équation est une égalité dans laquelle intervient une lettre dont la valeur est inconnue',
                inconnue: 'La lettre dont on cherche la valeur (généralement x)',
                solution: 'Valeur de l\'inconnue qui rend l\'égalité vraie',
                notation: 'S = {solution} ou S = ensemble des solutions'
              },
              types_equations: {
                type1: {
                  forme: 'x + a = b',
                  methode: 'Soustraire a des deux côtés',
                  solution: 'x = b - a',
                  exemple: {
                    equation: 'x + 5 = 12',
                    resolution: 'x = 12 - 5 = 7',
                    verification: '7 + 5 = 12 ✓'
                  }
                },
                type2: {
                  forme: 'ax = b',
                  methode: 'Diviser par a (a ≠ 0)',
                  solution: 'x = b/a',
                  exemple: {
                    equation: '3x = 15',
                    resolution: 'x = 15/3 = 5',
                    verification: '3×5 = 15 ✓'
                  }
                },
                type3: {
                  forme: 'ax + b = c',
                  methode: 'Regrouper puis diviser',
                  solution: 'x = (c-b)/a',
                  exemple: {
                    equation: '2x + 3 = 11',
                    etapes: [
                      '2x = 11 - 3',
                      '2x = 8',
                      'x = 4'
                    ],
                    verification: '2×4 + 3 = 11 ✓'
                  }
                }
              },
              proprietes: {
                addition: {
                  enonce: 'Si a = b, alors a + c = b + c',
                  application: 'On peut ajouter le même nombre aux deux membres'
                },
                multiplication: {
                  enonce: 'Si a = b, alors a × c = b × c',
                  application: 'On peut multiplier les deux membres par le même nombre non nul'
                }
              },
              procedure_generale: {
                etapes: [
                  'Développer et réduire chaque membre',
                  'Regrouper tous les termes en x d\'un côté',
                  'Regrouper les constantes de l\'autre côté',
                  'Diviser par le coefficient de x',
                  'Vérifier la solution'
                ],
                exemple_complet: {
                  equation: '3(x+2) = 2x + 10',
                  etape1: '3x + 6 = 2x + 10',
                  etape2: '3x - 2x = 10 - 6',
                  etape3: 'x = 4',
                  verification: '3(4+2) = 18, 2×4 + 10 = 18 ✓'
                }
              },
              problemes_contextes: {
                exemple1: {
                  enonce: 'Triangle ABC de périmètre 19cm. AB=5cm, AC=7cm. Trouve BC',
                  mise_en_equation: 'Soit x = BC. Alors 5 + 7 + x = 19',
                  resolution: 'x = 19 - 12 = 7cm',
                  reponse: 'BC = 7cm'
                },
                exemple2: {
                  enonce: 'Sidi a: Français 12 (coef 4), Anglais 11,5 (coef 3), Maths x (coef 5). Moyenne = 13',
                  mise_en_equation: '(12×4 + 11,5×3 + 5x)/12 = 13',
                  resolution: [
                    '48 + 34,5 + 5x = 156',
                    '5x = 156 - 82,5',
                    '5x = 73,5',
                    'x = 14,7'
                  ],
                  reponse: 'Note en maths: 14,7'
                }
              },
              mauritanianContext: [
                'Problèmes de géométrie avec mesures',
                'Calculs de moyennes scolaires',
                'Problèmes d\'âges familiaux',
                'Situations commerciales'
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
                type: 'avec_coefficient',
                question: 'Résous: 4x - 3 = 17',
                answer: '4x = 20, x = 5',
                difficulty: 'intermediate'
              },
              {
                type: 'avec_parentheses',
                question: 'Résous: 2(x+3) = x + 10',
                answer: '2x + 6 = x + 10, x = 4',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch5-s2',
            title: 'Inéquations du premier degré',
            description: 'Résoudre des inéquations linéaires',
            concepts: ['Inéquation', 'Sens de l\'inégalité', 'Ensemble solution', 'Intervalle'],
            objectives: [
              'Comprendre la notion d\'inéquation',
              'Résoudre des inéquations',
              'Représenter les solutions sur une droite',
              'Gérer le changement de sens'
            ],
            content: {
              definition: {
                inequation: 'Une inéquation est une inégalité dans laquelle intervient une inconnue',
                symboles: ['<', '>', '≤', '≥'],
                solution: 'Ensemble de toutes les valeurs vérifiant l\'inégalité'
              },
              regles_fondamentales: {
                regle1: {
                  enonce: 'On peut ajouter/soustraire le même nombre aux deux membres SANS changer le sens',
                  exemple: 'x + 3 < 7 ⟹ x < 4',
                  application: 'Soustraire 3 ne change pas <'
                },
                regle2: {
                  enonce: 'On peut multiplier/diviser par un nombre POSITIF SANS changer le sens',
                  exemple: '2x < 8 ⟹ x < 4',
                  application: 'Diviser par 2 (positif) ne change pas <'
                },
                regle3: {
                  enonce: 'Si on multiplie/divise par un nombre NÉGATIF, on INVERSE le sens',
                  exemple: '-2x < 8 ⟹ x > -4',
                  application: 'Diviser par -2 inverse < en >',
                  attention: 'TRÈS IMPORTANT! Ne pas oublier d\'inverser!'
                }
              },
              representation_graphique: {
                x_plus_petit_a: {
                  notation: 'x < a',
                  graphique: 'Demi-droite ouverte vers la gauche',
                  intervalle: ']-∞, a[',
                  exemple: 'x < 3: tous les nombres strictement inférieurs à 3'
                },
                x_plus_petit_egal_a: {
                  notation: 'x ≤ a',
                  graphique: 'Demi-droite fermée vers la gauche',
                  intervalle: ']-∞, a]',
                  exemple: 'x ≤ 3: tous les nombres inférieurs ou égaux à 3'
                },
                x_plus_grand_a: {
                  notation: 'x > a',
                  graphique: 'Demi-droite ouverte vers la droite',
                  intervalle: ']a, +∞[',
                  exemple: 'x > 2: tous les nombres strictement supérieurs à 2'
                },
                x_plus_grand_egal_a: {
                  notation: 'x ≥ a',
                  graphique: 'Demi-droite fermée vers la droite',
                  intervalle: '[a, +∞[',
                  exemple: 'x ≥ 2: tous les nombres supérieurs ou égaux à 2'
                }
              },
              exemples_complets: {
                exemple1: {
                  inequation: '3x + 5 < 14',
                  etapes: [
                    '3x < 14 - 5',
                    '3x < 9',
                    'x < 3'
                  ],
                  solution: 'S = ]-∞, 3[',
                  graphique: 'Demi-droite ouverte à gauche de 3'
                },
                exemple2: {
                  inequation: '-2x + 7 ≥ 3',
                  etapes: [
                    '-2x ≥ 3 - 7',
                    '-2x ≥ -4',
                    'x ≤ 2 (inverser le sens!)'
                  ],
                  solution: 'S = ]-∞, 2]',
                  graphique: 'Demi-droite fermée à gauche de 2'
                }
              },
              mauritanianContext: [
                'Problèmes de budgets (dépenses ≤ recettes)',
                'Contraintes de poids (masse ≤ capacité)',
                'Temps disponibles (durée ≤ temps max)',
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
                type: 'avec_changement_sens',
                question: 'Résous: -3x ≤ 12',
                answer: 'x ≥ -4, S = [-4, +∞[',
                difficulty: 'intermediate'
              },
              {
                type: 'complexe',
                question: 'Résous: 2(x-1) < 3x + 5',
                answer: '2x - 2 < 3x + 5, -x < 7, x > -7',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          }
        ]
      },
      {
        id: 'ch6',
        title: 'ANGLES AU CENTRE ET ANGLES INSCRITS',
        sections: [
          {
            id: 'ch6-s1',
            title: 'Angle au centre d\'un cercle',
            description: 'Comprendre et mesurer les angles au centre',
            concepts: ['Angle au centre', 'Arc de cercle', 'Longueur d\'arc', 'Secteur angulaire'],
            objectives: [
              'Définir un angle au centre',
              'Mesurer des angles au centre',
              'Calculer des longueurs d\'arcs',
              'Résoudre des problèmes géométriques'
            ],
            content: {
              definition: {
                angle_au_centre: 'Un angle au centre d\'un cercle est un angle saillant dont le sommet est le centre de ce cercle',
                notation: 'L\'angle AOB̂ avec O centre du cercle',
                caracteristiques: [
                  'Sommet au centre du cercle',
                  'Les deux côtés sont des rayons',
                  'Intercepte un arc de cercle'
                ]
              },
              construction: {
                procedure: [
                  'Tracer un cercle de centre O',
                  'Placer deux points A et B sur le cercle',
                  'Tracer les rayons [OA) et [OB)',
                  'Angle AOB̂ est l\'angle au centre'
                ],
                verification: 'OA = OB = rayon du cercle'
              },
              longueur_arc: {
                formule: 'Longueur d\'arc = (θ/360°) × 2πr',
                explication: {
                  theta: 'Mesure de l\'angle au centre en degrés',
                  r: 'Rayon du cercle',
                  perimetre_complet: '2πr correspond à 360°'
                },
                exemples: {
                  exemple1: {
                    donnees: 'Cercle de rayon 6cm, angle au centre 60°',
                    calcul: 'L = (60/360) × 2π × 6',
                    simplification: 'L = (1/6) × 12π = 2π cm',
                    approximation: 'L ≈ 6,28 cm'
                  },
                  exemple2: {
                    donnees: 'Cercle de rayon 10cm, angle 90°',
                    calcul: 'L = (90/360) × 2π × 10',
                    simplification: 'L = (1/4) × 20π = 5π cm',
                    approximation: 'L ≈ 15,7 cm'
                  }
                }
              },
              secteur_circulaire: {
                definition: 'Portion de disque délimitée par deux rayons et un arc',
                aire: {
                  formule: 'Aire = (θ/360°) × πr²',
                  exemple: {
                    donnees: 'Rayon 8cm, angle 45°',
                    calcul: 'A = (45/360) × π × 64',
                    simplification: 'A = (1/8) × 64π = 8π cm²',
                    approximation: 'A ≈ 25,13 cm²'
                  }
                }
              },
              mauritanianContext: [
                'Calculs de portions de terres circulaires',
                'Systèmes d\'irrigation pivotants',
                'Construction de structures rondes',
                'Problèmes d\'architecture traditionnelle'
              ]
            },
            exercises: [
              {
                type: 'longueur_arc',
                question: 'Cercle de rayon 12cm, angle au centre 30°. Calcule la longueur de l\'arc',
                answer: 'L = (30/360) × 2π × 12 = 2π cm ≈ 6,28 cm',
                difficulty: 'intermediate'
              },
              {
                type: 'aire_secteur',
                question: 'Rayon 5cm, angle 72°. Calcule l\'aire du secteur',
                answer: 'A = (72/360) × π × 25 = 5π cm² ≈ 15,7 cm²',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          },
          {
            id: 'ch6-s2',
            title: 'Angle inscrit dans un cercle',
            description: 'Comprendre la relation entre angle inscrit et angle au centre',
            concepts: ['Angle inscrit', 'Arc intercepté', 'Théorème de l\'angle inscrit', 'Relation fondamentale'],
            objectives: [
              'Définir un angle inscrit',
              'Connaître le théorème fondamental',
              'Calculer des mesures d\'angles',
              'Appliquer dans des problèmes'
            ],
            content: {
              definition: {
                angle_inscrit: 'Un angle inscrit dans un cercle est un angle dont le sommet est sur le cercle et dont les côtés coupent le cercle',
                notation: 'Angle AM̂B avec M sur le cercle, A et B aussi sur le cercle',
                caracteristiques: [
                  'Sommet sur le cercle',
                  'Les deux côtés sont des cordes',
                  'Intercepte le même arc qu\'un angle au centre'
                ]
              },
              theoreme_fondamental: {
                enonce: 'La mesure de l\'angle inscrit est égale à la moitié de la mesure de l\'angle au centre interceptant le même arc',
                formule: 'angle inscrit = (1/2) × angle au centre',
                notation: 'AM̂B = (1/2) × AÔB',
                demonstration_intuitive: {
                  contexte: 'Cercle avec angle au centre AÔB = 60°',
                  angle_inscrit: 'Angle AM̂B interceptant le même arc AB',
                  resultat: 'AM̂B = 60°/2 = 30°',
                  verification_experimentale: 'Mesurer avec rapporteur'
                }
              },
              proprietes_importantes: {
                propriete1: {
                  enonce: 'Tous les angles inscrits interceptant le même arc sont égaux',
                  exemple: 'Si M, N, P sont sur le cercle, alors AM̂B = AN̂B = AP̂B',
                  application: 'Utile pour trouver des angles égaux'
                },
                propriete2: {
                  enonce: 'Un angle inscrit dans un demi-cercle est droit (90°)',
                  justification: 'Angle au centre = 180°, donc angle inscrit = 90°',
                  exemple: 'Si [AB] est un diamètre et M sur le cercle, alors AM̂B = 90°'
                },
                propriete3: {
                  enonce: 'Si un angle inscrit est droit, alors la corde sous-tend un diamètre',
                  reciproque: 'Réciproque de la propriété 2'
                }
              },
              exemples_detailles: {
                exemple1: {
                  situation: 'Cercle de centre O, angle au centre AÔB = 80°',
                  question: 'Calcule l\'angle inscrit AM̂B interceptant le même arc',
                  resolution: 'AM̂B = 80°/2 = 40°',
                  explication: 'Application directe du théorème'
                },
                exemple2: {
                  situation: 'Angle inscrit = 35°',
                  question: 'Calcule l\'angle au centre correspondant',
                  resolution: 'Angle au centre = 2 × 35° = 70°',
                  explication: 'Formule inverse'
                },
                exemple3: {
                  situation: 'Triangle ABC inscrit dans un cercle, [AB] diamètre',
                  question: 'Quelle est la mesure de l\'angle AĈB?',
                  resolution: 'AĈB = 90° (angle inscrit dans un demi-cercle)',
                  consequence: 'Le triangle ABC est rectangle en C'
                }
              },
              mauritanianContext: [
                'Constructions géométriques traditionnelles',
                'Architecture circulaire',
                'Problèmes de positionnement',
                'Calculs de visibilité et d\'angles'
              ]
            },
            exercises: [
              {
                type: 'calcul_direct',
                question: 'Angle au centre = 120°. Calcule l\'angle inscrit interceptant le même arc',
                answer: 'Angle inscrit = 120°/2 = 60°',
                difficulty: 'beginner'
              },
              {
                type: 'calcul_inverse',
                question: 'Angle inscrit = 42°. Calcule l\'angle au centre correspondant',
                answer: 'Angle au centre = 2 × 42° = 84°',
                difficulty: 'beginner'
              },
              {
                type: 'demi_cercle',
                question: 'Triangle inscrit avec un côté diamètre. Prouve qu\'il est rectangle',
                answer: 'L\'angle opposé au diamètre est inscrit dans un demi-cercle, donc = 90°',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch6-s3',
            title: 'Applications et problèmes',
            description: 'Résoudre des problèmes complexes avec angles au centre et inscrits',
            concepts: ['Problèmes géométriques', 'Démonstrations', 'Calculs combinés', 'Propriétés des cercles'],
            objectives: [
              'Combiner plusieurs propriétés',
              'Résoudre des problèmes complexes',
              'Faire des démonstrations',
              'Appliquer à des situations concrètes'
            ],
            content: {
              strategies_resolution: {
                strategie1: {
                  nom: 'Identification des angles',
                  methode: [
                    'Identifier les angles au centre',
                    'Identifier les angles inscrits',
                    'Repérer les arcs interceptés',
                    'Appliquer la relation angle inscrit = angle au centre / 2'
                  ]
                },
                strategie2: {
                  nom: 'Utilisation des propriétés du cercle',
                  proprietes_utiles: [
                    'Rayons égaux',
                    'Triangles isocèles avec deux rayons',
                    'Angles inscrits interceptant le même arc',
                    'Angle inscrit dans un demi-cercle = 90°'
                  ]
                },
                strategie3: {
                  nom: 'Décomposition du problème',
                  methode: [
                    'Décomposer en sous-problèmes',
                    'Résoudre chaque partie',
                    'Assembler les résultats',
                    'Vérifier la cohérence'
                  ]
                }
              },
              problemes_types: {
                probleme1: {
                  enonce: 'Dans un cercle de centre O, l\'angle au centre AÔB = 140°. Points M et N sur le cercle interceptant le même arc AB. Calcule AM̂B et AN̂B',
                  analyse: 'Deux angles inscrits interceptant le même arc',
                  resolution: [
                    'AM̂B = 140°/2 = 70°',
                    'AN̂B = 140°/2 = 70°',
                    'Les deux angles sont égaux (propriété)'
                  ],
                  conclusion: 'AM̂B = AN̂B = 70°'
                },
                probleme2: {
                  enonce: 'Triangle ABC inscrit dans un cercle. AĈB = 35°, BĈA = 45°. Calcule AB̂C et les angles au centre correspondants',
                  analyse: 'Utiliser la somme des angles d\'un triangle',
                  resolution: [
                    'Somme des angles = 180°',
                    'AB̂C = 180° - 35° - 45° = 100°',
                    'Angle au centre pour arc BC: 2 × 35° = 70°',
                    'Angle au centre pour arc AC: 2 × 45° = 90°',
                    'Angle au centre pour arc AB: 2 × 100° = 200°'
                  ],
                  verification: '70° + 90° + 200° = 360° ✓'
                },
                probleme3: {
                  enonce: 'Un quadrilatère ABCD est inscrit dans un cercle. Angle au centre AÔB = 80°, BÔC = 100°, CÔD = 90°. Calcule tous les angles du quadrilatère',
                  resolution: [
                    'Angle au centre DÔA = 360° - 80° - 100° - 90° = 90°',
                    'Angle inscrit BÂD = 100°/2 = 50°',
                    'Angle inscrit AB̂C = 90°/2 = 45°',
                    'Angle inscrit BĈD = 80°/2 = 40°',
                    'Angle inscrit CD̂A = 100°/2 = 50°'
                  ],
                  propriete_utilisee: 'Quadrilatère inscriptible'
                }
              },
              demonstrations: {
                demo1: {
                  proposition: 'Si deux angles inscrits interceptent le même arc, ils sont égaux',
                  preuve: [
                    'Soit l\'angle au centre correspondant = θ',
                    'Premier angle inscrit = θ/2',
                    'Deuxième angle inscrit = θ/2',
                    'Donc les deux angles inscrits sont égaux'
                  ]
                },
                demo2: {
                  proposition: 'Un triangle inscrit dont un côté est le diamètre est rectangle',
                  preuve: [
                    'Le diamètre sous-tend un arc de 180°',
                    'L\'angle inscrit correspondant = 180°/2 = 90°',
                    'Donc le triangle est rectangle'
                  ]
                }
              },
              mauritanianContext: [
                'Constructions architecturales circulaires',
                'Systèmes de positionnement',
                'Problèmes d\'ingénierie',
                'Applications en astronomie traditionnelle'
              ]
            },
            exercises: [
              {
                type: 'probleme_complet',
                question: 'Cercle de centre O. Angle AÔB = 100°, angle BÔC = 130°. M sur le cercle. Calcule AM̂B et BM̂C',
                answer: 'AM̂B = 50°, BM̂C = 65°',
                difficulty: 'intermediate'
              },
              {
                type: 'demonstration',
                question: 'Prouve que dans un cercle, si un angle inscrit mesure 90°, alors la corde correspondante est un diamètre',
                answer: 'Si angle inscrit = 90°, alors angle au centre = 180°, donc la corde est un diamètre',
                difficulty: 'advanced'
              },
              {
                type: 'probleme_contextuel',
                question: 'Un terrain circulaire est divisé en trois secteurs avec angles au centre 120°, 150° et 90°. Calcule les angles que formeraient trois points situés sur le bord',
                answer: 'Angles inscrits: 60°, 75°, 45°',
                difficulty: 'advanced'
              }
            ],
            difficulty: 'advanced',
            estimatedTime: 45
          }
        ]
      },
      {
        id: 'ch7',
        title: 'DROITES PARTICULIÈRES DANS UN TRIANGLE',
        sections: [
          {
            id: 'ch7-s1',
            title: 'Droite des milieux',
            description: 'Comprendre et utiliser le théorème de la droite des milieux',
            concepts: ['Droite des milieux', 'Parallélisme', 'Milieu', 'Longueur', 'Théorème'],
            objectives: [
              'Connaître le théorème de la droite des milieux',
              'Construire des droites des milieux',
              'Appliquer le théorème dans des calculs',
              'Démontrer des propriétés géométriques'
            ],
            content: {
              definition: {
                droite_des_milieux: 'Dans un triangle, la droite passant par les milieux de deux côtés est parallèle au troisième côté et mesure sa moitié',
                notation: 'Si I milieu de [AB] et J milieu de [AC], alors (IJ) ∥ (BC) et IJ = BC/2'
              },
              theoreme: {
                hypotheses: [
                  'Triangle ABC',
                  'I milieu de [AB]',
                  'J milieu de [AC]'
                ],
                conclusions: [
                  '(IJ) est parallèle à (BC)',
                  'IJ = BC/2'
                ],
                reciproque: {
                  enonce: 'Si une droite passe par le milieu d\'un côté et est parallèle à un autre côté, elle coupe le troisième côté en son milieu',
                  application: 'Permet de trouver des milieux'
                }
              },
              demonstration: {
                methode_parallélogramme: {
                  etapes: [
                    'Construire D tel que ABCD soit un parallélogramme',
                    'Montrer que J est aussi milieu de [CD]',
                    'En déduire que (IJ) est parallèle à (BC)',
                    'Utiliser les propriétés du parallélogramme pour montrer IJ = BC/2'
                  ]
                }
              },
              applications: {
                calcul_longueurs: {
                  situation: 'Triangle ABC, I milieu de [AB], J milieu de [AC], BC = 8cm',
                  question: 'Calcule IJ',
                  solution: 'IJ = BC/2 = 8/2 = 4cm'
                },
                reciproque_application: {
                  situation: 'Triangle ABC, I milieu de [AB], (IJ) ∥ (BC)',
                  question: 'Que peut-on dire de J?',
                  solution: 'J est le milieu de [AC]'
                },
                triple_droites: {
                  situation: 'Triangle ABC avec les trois droites des milieux',
                  resultat: 'Le triangle formé par les milieux a un périmètre égal à la moitié du périmètre du triangle ABC'
                }
              },
              mauritanianContext: [
                'Division équitable de terrains triangulaires',
                'Construction de structures',
                'Tracés géométriques',
                'Problèmes d\'arpentage'
              ]
            },
            exercises: [
              {
                type: 'calcul_direct',
                question: 'Triangle ABC, I et J milieux de [AB] et [AC]. BC = 12cm. Calcule IJ',
                answer: 'IJ = 12/2 = 6cm',
                difficulty: 'beginner'
              },
              {
                type: 'reciproque',
                question: 'Triangle ABC, I milieu de [AB], (IJ) ∥ (BC), AC = 10cm. Calcule AJ',
                answer: 'Par réciproque, J est milieu de [AC], donc AJ = 10/2 = 5cm',
                difficulty: 'intermediate'
              },
              {
                type: 'perimetre',
                question: 'Triangle ABC de périmètre 30cm. Calcule le périmètre du triangle formé par les milieux',
                answer: 'Périmètre milieux = 30/2 = 15cm',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          },
          {
            id: 'ch7-s2',
            title: 'Médiatrices d\'un triangle',
            description: 'Étudier les médiatrices et le cercle circonscrit',
            concepts: ['Médiatrice', 'Point équidistant', 'Cercle circonscrit', 'Concourant'],
            objectives: [
              'Définir et construire une médiatrice',
              'Connaître les propriétés des médiatrices',
              'Construire le cercle circonscrit',
              'Résoudre des problèmes géométriques'
            ],
            content: {
              definition: {
                mediatrice: 'La médiatrice d\'un segment est la droite qui coupe ce segment en son milieu et lui est perpendiculaire',
                notation: 'Médiatrice de [AB] notée (d)',
                construction: [
                  'Méthode au compas: tracer deux arcs de même rayon centré en A et B',
                  'Méthode à l\'équerre: perpendiculaire au milieu'
                ]
              },
              proprietes: {
                propriete_fondamentale: {
                  enonce: 'Tout point de la médiatrice est équidistant des extrémités du segment',
                  formulation: 'Si M ∈ médiatrice de [AB], alors MA = MB',
                  reciproque: 'Si MA = MB, alors M appartient à la médiatrice de [AB]'
                },
                dans_triangle: {
                  enonce: 'Les trois médiatrices d\'un triangle sont concourantes',
                  point_concours: 'Centre du cercle circonscrit',
                  notation: 'Point O équidistant des trois sommets: OA = OB = OC'
                }
              },
              cercle_circonscrit: {
                definition: 'Cercle passant par les trois sommets du triangle',
                centre: 'Intersection des médiatrices',
                rayon: 'Distance du centre à un sommet quelconque',
                construction: {
                  etapes: [
                    'Construire les médiatrices de deux côtés',
                    'Trouver leur intersection O',
                    'Mesurer OA (rayon)',
                    'Tracer le cercle de centre O et rayon OA'
                  ],
                  verification: 'Le cercle passe par les trois sommets A, B, C'
                }
              },
              cas_particuliers: {
                triangle_rectangle: {
                  propriete: 'Le centre du cercle circonscrit est le milieu de l\'hypoténuse',
                  rayon: 'Rayon = hypoténuse/2'
                },
                triangle_isocele: {
                  propriete: 'La médiatrice de la base est aussi hauteur, médiane et bissectrice'
                }
              },
              mauritanianContext: [
                'Localisation de puits équidistants de villages',
                'Constructions circulaires',
                'Problèmes d\'équidistance',
                'Architecture traditionnelle'
              ]
            },
            exercises: [
              {
                type: 'construction',
                question: 'Construis les médiatrices du triangle ABC et le cercle circonscrit',
                answer: 'Tracer deux médiatrices, trouver O, tracer cercle de centre O passant par A, B, C',
                difficulty: 'intermediate'
              },
              {
                type: 'calcul',
                question: 'Triangle rectangle avec hypoténuse 10cm. Quel est le rayon du cercle circonscrit?',
                answer: 'Rayon = 10/2 = 5cm (centre au milieu de l\'hypoténuse)',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch7-s3',
            title: 'Médianes et centre de gravité',
            description: 'Étudier les médianes et leurs propriétés',
            concepts: ['Médiane', 'Centre de gravité', 'Concourant', 'Propriété des 2/3'],
            objectives: [
              'Définir et construire une médiane',
              'Connaître les propriétés des médianes',
              'Trouver le centre de gravité',
              'Utiliser la propriété des 2/3'
            ],
            content: {
              definition: {
                mediane: 'Dans un triangle, une médiane est une droite qui passe par un sommet et par le milieu du côté opposé',
                notation: 'Médiane issue de A dans le triangle ABC',
                nombre: 'Chaque triangle possède trois médianes'
              },
              proprietes: {
                concours: {
                  enonce: 'Les trois médianes d\'un triangle sont concourantes',
                  point: 'Centre de gravité (aussi appelé barycentre)',
                  notation: 'Point G'
                },
                propriete_2_3: {
                  enonce: 'Le centre de gravité est situé aux 2/3 de chaque médiane à partir du sommet',
                  formulation: 'Si M est milieu de [BC], alors AG = (2/3)AM et GM = (1/3)AM',
                  consequences: 'AG = 2 × GM'
                }
              },
              construction: {
                methode: [
                  'Construire les milieux de deux côtés',
                  'Tracer les médianes correspondantes',
                  'Le point d\'intersection est le centre de gravité'
                ],
                verification: 'Construire la troisième médiane pour vérifier'
              },
              propriete_physique: {
                equilibre: 'Le triangle est en équilibre sur son centre de gravité',
                application: 'Point où on peut faire tenir le triangle sur la pointe d\'un crayon'
              },
              calculs: {
                exemple1: {
                  situation: 'Médiane de longueur 12cm',
                  question: 'Calcule AG et GM',
                  solution: 'AG = (2/3) × 12 = 8cm, GM = (1/3) × 12 = 4cm'
                },
                exemple2: {
                  situation: 'AG = 6cm',
                  question: 'Calcule GM et AM',
                  solution: 'GM = 6/2 = 3cm (car AG = 2×GM), AM = AG + GM = 9cm'
                }
              },
              mauritanianContext: [
                'Équilibre de structures',
                'Problèmes de construction',
                'Centre de masse',
                'Applications pratiques en ingénierie'
              ]
            },
            exercises: [
              {
                type: 'construction',
                question: 'Construis les trois médianes et trouve le centre de gravité G',
                answer: 'Construire milieux, tracer médianes, identifier G au point de concours',
                difficulty: 'beginner'
              },
              {
                type: 'calcul',
                question: 'AM = 15cm (médiane). Calcule AG et GM',
                answer: 'AG = (2/3) × 15 = 10cm, GM = (1/3) × 15 = 5cm',
                difficulty: 'intermediate'
              },
              {
                type: 'reciproque',
                question: 'GM = 4cm. Calcule AG et AM',
                answer: 'AG = 2 × 4 = 8cm, AM = AG + GM = 12cm',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          }
        ]
      },
      {
        id: 'ch8',
        title: 'THÉORÈME DE PYTHAGORE',
        sections: [
          {
            id: 'ch8-s1',
            title: 'Théorème de Pythagore',
            description: 'Comprendre et appliquer le théorème de Pythagore',
            concepts: ['Triangle rectangle', 'Hypoténuse', 'Théorème de Pythagore', 'Calcul de longueur'],
            objectives: [
              'Connaître le théorème de Pythagore',
              'Calculer la longueur d\'un côté',
              'Vérifier qu\'un triangle est rectangle',
              'Résoudre des problèmes concrets'
            ],
            content: {
              theoreme: {
                enonce: 'Si un triangle est rectangle, alors le carré de la longueur de l\'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés',
                formule: 'a² + b² = c²',
                vocabulaire: {
                  hypotenuse: 'Le côté le plus long, opposé à l\'angle droit',
                  cotes_adjacent: 'Les deux côtés qui forment l\'angle droit'
                },
                notation: 'Dans triangle ABC rectangle en A: BC² = AB² + AC²'
              },
              verification_experimentale: {
                methode_carres: {
                  description: 'Construction de carrés sur les trois côtés',
                  exemple: {
                    triangle: 'ABC rectangle avec AB=3cm, AC=4cm, BC=5cm',
                    carres: [
                      'Carré sur AB: aire = 9 cm²',
                      'Carré sur AC: aire = 16 cm²',
                      'Carré sur BC: aire = 25 cm²'
                    ],
                    verification: '9 + 16 = 25 ✓'
                  }
                }
              },
              applications: {
                calcul_hypotenuse: {
                  situation: 'Triangle rectangle, côtés de l\'angle droit connus',
                  methode: 'c = √(a² + b²)',
                  exemple: {
                    donnees: 'AB = 6cm, AC = 8cm',
                    calcul: 'BC² = 6² + 8² = 36 + 64 = 100',
                    resultat: 'BC = √100 = 10cm'
                  }
                },
                calcul_cote: {
                  situation: 'Hypoténuse et un côté connus',
                  methode: 'a = √(c² - b²)',
                  exemple: {
                    donnees: 'BC = 13cm, AB = 5cm',
                    calcul: 'AC² = 13² - 5² = 169 - 25 = 144',
                    resultat: 'AC = √144 = 12cm'
                  }
                }
              },
              triplets_pythagoriciens: {
                definition: 'Trois entiers qui vérifient le théorème',
                exemples_courants: [
                  '(3, 4, 5)',
                  '(5, 12, 13)',
                  '(8, 15, 17)',
                  '(7, 24, 25)',
                  '(6, 8, 10) = 2×(3,4,5)'
                ],
                utilite: 'Construction rapide sans calculs'
              },
              mauritanianContext: [
                'Calculs de distances dans le désert',
                'Construction de bâtiments (vérifier les angles droits)',
                'Mesures de terrains',
                'Problèmes de navigation'
              ]
            },
            exercises: [
              {
                type: 'calcul_hypotenuse',
                question: 'Triangle rectangle avec côtés 9cm et 12cm. Calcule l\'hypoténuse',
                answer: 'c² = 9² + 12² = 81 + 144 = 225, donc c = 15cm',
                difficulty: 'beginner'
              },
              {
                type: 'calcul_cote',
                question: 'Triangle rectangle, hypoténuse 17cm, un côté 8cm. Calcule l\'autre côté',
                answer: 'a² = 17² - 8² = 289 - 64 = 225, donc a = 15cm',
                difficulty: 'intermediate'
              },
              {
                type: 'probleme',
                question: 'Une échelle de 5m est posée contre un mur à 3m de hauteur. À quelle distance du mur est le pied de l\'échelle?',
                answer: 'd² = 5² - 3² = 25 - 9 = 16, donc d = 4m',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch8-s2',
            title: 'Réciproque du théorème de Pythagore',
            description: 'Utiliser la réciproque pour prouver qu\'un triangle est rectangle',
            concepts: ['Réciproque', 'Vérification', 'Triangle rectangle', 'Démonstration'],
            objectives: [
              'Connaître la réciproque du théorème',
              'Vérifier qu\'un triangle est rectangle',
              'Démontrer des propriétés',
              'Résoudre des problèmes de preuve'
            ],
            content: {
              reciproque: {
                enonce: 'Si dans un triangle, le carré d\'un côté est égal à la somme des carrés des deux autres côtés, alors le triangle est rectangle',
                condition: 'Le côté dont le carré est égal à la somme est l\'hypoténuse',
                notation: 'Si BC² = AB² + AC², alors triangle ABC est rectangle en A'
              },
              methode_verification: {
                etapes: [
                  'Identifier le côté le plus long (hypoténuse potentielle)',
                  'Calculer le carré du côté le plus long',
                  'Calculer la somme des carrés des deux autres côtés',
                  'Comparer les résultats',
                  'Conclure'
                ],
                exemple_detaille: {
                  triangle: 'ABC avec AB=7cm, AC=24cm, BC=25cm',
                  etape1: 'Côté le plus long: BC=25cm',
                  etape2: 'BC² = 25² = 625',
                  etape3: 'AB² + AC² = 7² + 24² = 49 + 576 = 625',
                  etape4: 'BC² = AB² + AC²',
                  conclusion: 'Le triangle ABC est rectangle en A'
                }
              },
              contre_exemple: {
                triangle: 'DEF avec DE=5cm, EF=6cm, DF=8cm',
                verification: 'DF² = 64, DE² + EF² = 25 + 36 = 61',
                conclusion: '64 ≠ 61, donc le triangle n\'est PAS rectangle'
              },
              applications_pratiques: {
                construction: {
                  situation: 'Vérifier si un angle est droit dans une construction',
                  methode: 'Mesurer les trois côtés et appliquer la réciproque'
                },
                arpentage: {
                  situation: 'Délimiter des terrains avec angles droits',
                  methode_3_4_5: 'Utiliser un triplet pythagoricien pour tracer un angle droit'
                }
              },
              mauritanianContext: [
                'Vérification d\'angles droits en construction',
                'Délimitation de terrains agricoles',
                'Contrôle qualité en menuiserie',
                'Tracés géométriques sur terrain'
              ]
            },
            exercises: [
              {
                type: 'verification',
                question: 'Triangle avec côtés 5cm, 12cm, 13cm. Est-il rectangle?',
                answer: '13² = 169, 5² + 12² = 25 + 144 = 169. Oui, rectangle avec hypoténuse 13cm',
                difficulty: 'beginner'
              },
              {
                type: 'verification_negative',
                question: 'Triangle avec côtés 4cm, 5cm, 7cm. Est-il rectangle?',
                answer: '7² = 49, 4² + 5² = 16 + 25 = 41. Non, 49 ≠ 41',
                difficulty: 'beginner'
              },
              {
                type: 'application',
                question: 'Pour tracer un angle droit, un maçon utilise une corde avec des nœuds tous les mètres. Comment peut-il faire?',
                answer: 'Former un triangle avec côtés 3m, 4m, 5m. L\'angle opposé au côté 5m sera droit',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          }
        ]
      },
      {
        id: 'ch9',
        title: 'TRIGONOMÉTRIE - ANGLES AIGUS',
        sections: [
          {
            id: 'ch9-s1',
            title: 'Cosinus, sinus et tangente',
            description: 'Définir les rapports trigonométriques dans un triangle rectangle',
            concepts: ['Cosinus', 'Sinus', 'Tangente', 'Triangle rectangle', 'Rapports'],
            objectives: [
              'Définir cosinus, sinus et tangente',
              'Calculer des rapports trigonométriques',
              'Utiliser la calculatrice',
              'Résoudre des triangles rectangles'
            ],
            content: {
              definitions: {
                dans_triangle_rectangle: 'Dans un triangle rectangle, pour un angle aigu θ',
                cosinus: {
                  definition: 'cos θ = côté adjacent / hypoténuse',
                  memotechnique: 'Adjacent sur Hypoténuse',
                  notation: 'cos Â = AB/BC (B̂ angle droit)'
                },
                sinus: {
                  definition: 'sin θ = côté opposé / hypoténuse',
                  memotechnique: 'Opposé sur Hypoténuse',
                  notation: 'sin Â = AC/BC'
                },
                tangente: {
                  definition: 'tan θ = côté opposé / côté adjacent',
                  memotechnique: 'Opposé sur Adjacent',
                  notation: 'tan Â = AC/AB',
                  relation: 'tan θ = sin θ / cos θ'
                }
              },
              relations_fondamentales: {
                pythagore_trigonometrique: {
                  formule: 'cos²θ + sin²θ = 1',
                  demonstration: 'Découle du théorème de Pythagore',
                  utilite: 'Calculer un rapport connaissant l\'autre'
                },
                tangente: {
                  formule: 'tan θ = sin θ / cos θ',
                  utilite: 'Lien entre les trois rapports'
                }
              },
              angles_complementaires: {
                propriete: 'Si Â + B̂ = 90°, alors sin Â = cos B̂ et cos Â = sin B̂',
                exemple: 'sin 30° = cos 60° = 1/2'
              },
              valeurs_remarquables: {
                tableau: {
                  angles: ['30°', '45°', '60°'],
                  sinus: ['1/2', '√2/2', '√3/2'],
                  cosinus: ['√3/2', '√2/2', '1/2'],
                  tangente: ['√3/3', '1', '√3']
                },
                memorisation: {
                  methode: 'Tableau avec fractions et radicaux',
                  astuce_45: 'Pour 45°, tous égaux: sin=cos=√2/2, tan=1'
                }
              },
              utilisation_calculatrice: {
                mode: 'Vérifier que la calculatrice est en mode DEGRÉ',
                exemples: [
                  'cos 60° = 0,5',
                  'sin 30° = 0,5',
                  'tan 45° = 1'
                ],
                fonction_inverse: {
                  notation: 'cos⁻¹, sin⁻¹, tan⁻¹',
                  utilite: 'Trouver un angle connaissant un rapport'
                }
              },
              mauritanianContext: [
                'Calculs de hauteurs de bâtiments',
                'Mesures de distances inaccessibles',
                'Calculs d\'inclinaisons',
                'Problèmes de navigation'
              ]
            },
            exercises: [
              {
                type: 'calcul_rapport',
                question: 'Triangle rectangle, AB=3cm, BC=5cm (hypoténuse). Calcule cos B̂',
                answer: 'cos B̂ = AB/BC = 3/5 = 0,6',
                difficulty: 'beginner'
              },
              {
                type: 'avec_valeurs',
                question: 'Calcule cos 60° + sin 30°',
                answer: 'cos 60° = 1/2, sin 30° = 1/2, donc 1/2 + 1/2 = 1',
                difficulty: 'intermediate'
              },
              {
                type: 'relation',
                question: 'Si cos θ = 3/5, calcule sin θ',
                answer: 'sin²θ = 1 - cos²θ = 1 - 9/25 = 16/25, donc sin θ = 4/5',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 45
          },
          {
            id: 'ch9-s2',
            title: 'Résolution de triangles rectangles',
            description: 'Résoudre des problèmes avec la trigonométrie',
            concepts: ['Résolution', 'Calcul de longueurs', 'Calcul d\'angles', 'Applications'],
            objectives: [
              'Calculer des longueurs avec la trigonométrie',
              'Calculer des mesures d\'angles',
              'Résoudre des problèmes concrets',
              'Choisir la bonne formule'
            ],
            content: {
              types_problemes: {
                type1_longueur: {
                  situation: 'Angle et une longueur connus, calculer une autre longueur',
                  methode: 'Choisir le rapport trigonométrique approprié',
                  exemple: {
                    donnees: 'Triangle ABC rectangle en B, Â = 35°, AC = 10cm',
                    question: 'Calcule AB',
                    resolution: [
                      'Identifier: AB adjacent à Â, AC hypoténuse',
                      'Utiliser: cos 35° = AB/10',
                      'Calcul: AB = 10 × cos 35° ≈ 8,19cm'
                    ]
                  }
                },
                type2_angle: {
                  situation: 'Deux longueurs connues, calculer un angle',
                  methode: 'Calculer le rapport puis utiliser la fonction inverse',
                  exemple: {
                    donnees: 'Triangle rectangle, opposé = 7cm, adjacent = 12cm',
                    question: 'Calcule l\'angle',
                    resolution: [
                      'tan θ = 7/12 ≈ 0,583',
                      'θ = tan⁻¹(0,583) ≈ 30,3°'
                    ]
                  }
                }
              },
              strategie_resolution: {
                etapes: [
                  'Faire un schéma clair',
                  'Identifier l\'angle de référence',
                  'Repérer opposé, adjacent, hypoténuse par rapport à cet angle',
                  'Choisir le bon rapport (cos, sin ou tan)',
                  'Résoudre l\'équation',
                  'Vérifier la cohérence du résultat'
                ]
              },
              problemes_concrets: {
                hauteur_batiment: {
                  enonce: 'Depuis un point à 20m d\'un bâtiment, l\'angle de visée du sommet est 65°. Calcule la hauteur',
                  schema: 'Triangle rectangle avec angle 65° et base 20m',
                  resolution: [
                    'tan 65° = h/20',
                    'h = 20 × tan 65° ≈ 42,9m'
                  ]
                },
                rampe_acces: {
                  enonce: 'Une rampe de 8m permet de monter de 1,5m. Calcule l\'inclinaison',
                  schema: 'Triangle rectangle, hypoténuse 8m, opposé 1,5m',
                  resolution: [
                    'sin θ = 1,5/8 = 0,1875',
                    'θ = sin⁻¹(0,1875) ≈ 10,8°'
                  ]
                }
              },
              mauritanianContext: [
                'Calcul de hauteurs de constructions',
                'Mesures de distances dans le désert',
                'Inclinaisons de rampes d\'accès',
                'Calculs pour systèmes d\'irrigation'
              ]
            },
            exercises: [
              {
                type: 'calcul_longueur',
                question: 'Triangle rectangle, angle 40°, hypoténuse 15cm. Calcule le côté adjacent',
                answer: 'cos 40° = adjacent/15, adjacent = 15 × cos 40° ≈ 11,49cm',
                difficulty: 'intermediate'
              },
              {
                type: 'calcul_angle',
                question: 'Triangle rectangle, opposé = 8cm, hypoténuse = 10cm. Calcule l\'angle',
                answer: 'sin θ = 8/10 = 0,8, θ = sin⁻¹(0,8) ≈ 53,1°',
                difficulty: 'intermediate'
              },
              {
                type: 'probleme',
                question: 'Un avion décolle avec un angle de 12° et parcourt 2000m. À quelle altitude est-il?',
                answer: 'sin 12° = h/2000, h = 2000 × sin 12° ≈ 416m',
                difficulty: 'advanced'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 45
          }
        ]
      },
      {
        id: 'ch10',
        title: 'VECTEURS ET TRANSLATION',
        sections: [
          {
            id: 'ch10-s1',
            title: 'Notion de vecteur',
            description: 'Comprendre le concept de vecteur et ses caractéristiques',
            concepts: ['Vecteur', 'Direction', 'Sens', 'Norme', 'Égalité de vecteurs'],
            objectives: [
              'Comprendre la notion de vecteur',
              'Distinguer vecteur et segment',
              'Reconnaître des vecteurs égaux',
              'Calculer la norme d\'un vecteur'
            ],
            content: {
              introduction: {
                contexte_mauritanien: 'Déplacement d\'un taxi de la station A vers le client B',
                observation: 'Le déplacement a une direction, un sens et une longueur',
                definition_intuitive: 'Un vecteur représente un déplacement orienté'
              },
              definition_formelle: {
                vecteur_AB: {
                  notation: 'Vecteur AB⃗',
                  caracteristiques: {
                    origine: 'Point A (point de départ)',
                    extremite: 'Point B (point d\'arrivée)',
                    direction: 'Droite (AB)',
                    sens: 'De A vers B',
                    norme: 'Distance AB (longueur du vecteur)'
                  }
                },
                representation: 'Flèche allant de A vers B',
                notation_alternative: 'u⃗, v⃗, w⃗ pour des vecteurs sans points spécifiques'
              },
              egalite_vecteurs: {
                definition: 'Deux vecteurs sont égaux s\'ils ont même direction, même sens et même norme',
                consequence_geometrique: 'AB⃗ = CD⃗ ⟺ ABDC est un parallélogramme',
                proprietes: [
                  'AB⃗ = DC⃗ (côtés opposés d\'un parallélogramme)',
                  'Si AB⃗ = CD⃗, alors AB = CD et (AB) ∥ (CD)'
                ],
                exemple: {
                  situation: 'Parallélogramme ABCD',
                  egalites: 'AB⃗ = DC⃗ et AD⃗ = BC⃗',
                  verification: 'Même longueur, même direction, même sens'
                }
              },
              vecteur_oppose: {
                definition: 'Le vecteur opposé de AB⃗ est BA⃗',
                notation: '-AB⃗ = BA⃗',
                caracteristiques: 'Même direction, même norme, sens opposé'
              },
              vecteur_nul: {
                definition: 'Vecteur dont l\'origine et l\'extrémité sont confondues',
                notation: '0⃗ ou AA⃗',
                propriete: 'Norme = 0, pas de direction définie'
              },
              norme: {
                definition: 'La norme d\'un vecteur AB⃗ est la distance AB',
                notation: '||AB⃗|| = AB',
                calcul_dans_repere: {
                  formule: 'Si A(xₐ,yₐ) et B(xᵦ,yᵦ), alors ||AB⃗|| = √[(xᵦ-xₐ)² + (yᵦ-yₐ)²]',
                  exemple: 'A(1,2) et B(4,6): ||AB⃗|| = √[(4-1)² + (6-2)²] = √[9+16] = 5'
                }
              },
              mauritanianContext: [
                'Déplacements de véhicules',
                'Mouvements dans l\'espace',
                'Forces appliquées',
                'Translations d\'objets'
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
                type: 'norme',
                question: 'A(2,1) et B(5,5). Calcule ||AB⃗||',
                answer: '||AB⃗|| = √[(5-2)² + (5-1)²] = √[9+16] = √25 = 5',
                difficulty: 'intermediate'
              },
              {
                type: 'oppose',
                question: 'Si AB⃗ = u⃗, exprime BA⃗ en fonction de u⃗',
                answer: 'BA⃗ = -u⃗',
                difficulty: 'beginner'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 35
          },
          {
            id: 'ch10-s2',
            title: 'Addition de vecteurs',
            description: 'Comprendre et effectuer l\'addition de vecteurs',
            concepts: ['Addition vectorielle', 'Relation de Chasles', 'Règle du parallélogramme', 'Propriétés'],
            objectives: [
              'Additionner des vecteurs graphiquement',
              'Utiliser la relation de Chasles',
              'Appliquer la règle du parallélogramme',
              'Connaître les propriétés de l\'addition'
            ],
            content: {
              definition: {
                graphique: 'Placer le deuxième vecteur à l\'extrémité du premier',
                resultat: 'Le vecteur somme va du début du premier à la fin du second',
                exemple_visuel: 'u⃗ puis v⃗ → la somme u⃗ + v⃗ va du début de u⃗ à la fin de v⃗'
              },
              relation_chasles: {
                enonce: 'Pour trois points A, B, C quelconques: AB⃗ + BC⃗ = AC⃗',
                generalisation: 'AB⃗ + BC⃗ + CD⃗ + ... = AD⃗',
                applications: {
                  simplification: 'Simplifier des sommes de vecteurs',
                  exemple: 'AB⃗ + BC⃗ + CD⃗ + DA⃗ = AA⃗ = 0⃗'
                },
                demonstration: {
                  geometrique: 'Enchaînement de déplacements',
                  intuition: 'Aller de A à B puis de B à C revient à aller directement de A à C'
                }
              },
              regle_parallelogramme: {
                enonce: 'Si ABCD est un parallélogramme, alors AB⃗ + AD⃗ = AC⃗',
                construction: {
                  etapes: [
                    'Partir d\'un point O',
                    'Construire OA⃗ = u⃗',
                    'Construire OB⃗ = v⃗',
                    'Compléter le parallélogramme OACB',
                    'OC⃗ = u⃗ + v⃗'
                  ]
                },
                symetrie: 'u⃗ + v⃗ = v⃗ + u⃗ (commutativité)'
              },
              proprietes: {
                commutativite: {
                  formule: 'u⃗ + v⃗ = v⃗ + u⃗',
                  interpretation: 'L\'ordre n\'importe pas'
                },
                associativite: {
                  formule: '(u⃗ + v⃗) + w⃗ = u⃗ + (v⃗ + w⃗)',
                  consequence: 'On peut grouper comme on veut'
                },
                element_neutre: {
                  formule: 'u⃗ + 0⃗ = u⃗',
                  interpretation: 'Ajouter le vecteur nul ne change rien'
                },
                oppose: {
                  formule: 'u⃗ + (-u⃗) = 0⃗',
                  interpretation: 'Un vecteur et son opposé s\'annulent'
                }
              },
              addition_dans_repere: {
                formule: 'Si u⃗(x₁,y₁) et v⃗(x₂,y₂), alors u⃗ + v⃗ = (x₁+x₂, y₁+y₂)',
                exemple: 'u⃗(3,-2) + v⃗(1,5) = (4,3)',
                verification: 'On additionne les composantes séparément'
              },
              mauritanianContext: [
                'Déplacements successifs',
                'Composition de forces',
                'Trajets avec étapes',
                'Navigation avec changements de direction'
              ]
            },
            exercises: [
              {
                type: 'chasles',
                question: 'Simplifie: AB⃗ + BC⃗ + CA⃗',
                answer: 'AB⃗ + BC⃗ + CA⃗ = AA⃗ = 0⃗',
                difficulty: 'beginner'
              },
              {
                type: 'parallelogramme',
                question: 'ABCD parallélogramme. Exprime AC⃗ avec deux vecteurs',
                answer: 'AC⃗ = AB⃗ + AD⃗',
                difficulty: 'intermediate'
              },
              {
                type: 'coordonnees',
                question: 'u⃗(2,3) et v⃗(-1,4). Calcule u⃗ + v⃗',
                answer: 'u⃗ + v⃗ = (2-1, 3+4) = (1,7)',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch10-s3',
            title: 'Multiplication d\'un vecteur par un nombre',
            description: 'Comprendre et effectuer la multiplication scalaire',
            concepts: ['Multiplication scalaire', 'Colinéarité', 'Vecteurs colinéaires', 'Propriétés'],
            objectives: [
              'Multiplier un vecteur par un nombre',
              'Reconnaître des vecteurs colinéaires',
              'Utiliser la colinéarité pour prouver le parallélisme',
              'Appliquer dans des problèmes'
            ],
            content: {
              definition: {
                notation: 'k × u⃗ ou ku⃗ où k est un nombre réel',
                caracteristiques: {
                  direction: 'Même direction que u⃗',
                  sens: 'Même sens si k > 0, opposé si k < 0',
                  norme: '||ku⃗|| = |k| × ||u⃗||'
                },
                cas_particuliers: {
                  k_positif: '2u⃗ a même sens que u⃗, norme doublée',
                  k_negatif: '-3u⃗ a sens opposé à u⃗, norme triplée',
                  k_nul: '0 × u⃗ = 0⃗'
                }
              },
              construction_graphique: {
                methode: [
                  'Tracer u⃗',
                  'Prolonger dans la même direction',
                  'Reporter k fois la longueur de u⃗',
                  'Ajuster le sens selon le signe de k'
                ],
                exemple: '3u⃗ : reporter 3 fois u⃗ dans le même sens'
              },
              colinearite: {
                definition: 'Deux vecteurs sont colinéaires s\'il existe k tel que u⃗ = kv⃗',
                consequence_geometrique: 'u⃗ et v⃗ colinéaires ⟺ même direction',
                application_parallelisme: 'AB⃗ et CD⃗ colinéaires ⟺ (AB) ∥ (CD) ou (AB) et (CD) confondues',
                critere_coordonnees: {
                  formule: 'u⃗(x,y) et v⃗(x\',y\') colinéaires ⟺ xy\' - yx\' = 0',
                  exemple: {
                    vecteurs: 'u⃗(3,2) et v⃗(6,4)',
                    calcul: '3×4 - 2×6 = 12 - 12 = 0',
                    conclusion: 'Les vecteurs sont colinéaires (v⃗ = 2u⃗)'
                  }
                }
              },
              proprietes: {
                distributivite_scalaire: {
                  formule: 'k(u⃗ + v⃗) = ku⃗ + kv⃗',
                  interpretation: 'On peut distribuer'
                },
                distributivite_vecteur: {
                  formule: '(k + m)u⃗ = ku⃗ + mu⃗',
                  interpretation: 'On peut factoriser'
                },
                associativite: {
                  formule: 'k(mu⃗) = (km)u⃗',
                  consequence: 'L\'ordre des multiplications n\'importe pas'
                }
              },
              applications: {
                milieu: {
                  propriete: 'Si I milieu de [AB], alors OI⃗ = (1/2)(OA⃗ + OB⃗)',
                  utilite: 'Calculer les coordonnées du milieu'
                },
                barycentre: {
                  propriete: 'Point défini par combinaison de vecteurs',
                  exemple_simple: 'Centre de gravité d\'un triangle'
                },
                parallelisme: {
                  critere: 'Prouver (AB) ∥ (CD) en montrant AB⃗ = kCD⃗',
                  exemple: 'Droite des milieux: IJ⃗ = (1/2)BC⃗'
                }
              },
              mauritanianContext: [
                'Calculs de proportions',
                'Agrandissements/réductions',
                'Vitesses multiples',
                'Forces proportionnelles'
              ]
            },
            exercises: [
              {
                type: 'calcul_simple',
                question: 'u⃗(2,3). Calcule 3u⃗',
                answer: '3u⃗ = (3×2, 3×3) = (6,9)',
                difficulty: 'beginner'
              },
              {
                type: 'colinearite',
                question: 'u⃗(4,6) et v⃗(2,3) sont-ils colinéaires?',
                answer: '4×3 - 6×2 = 12 - 12 = 0. Oui, colinéaires (u⃗ = 2v⃗)',
                difficulty: 'intermediate'
              },
              {
                type: 'application',
                question: 'I milieu de [AB]. Exprime AI⃗ en fonction de AB⃗',
                answer: 'AI⃗ = (1/2)AB⃗',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          },
          {
            id: 'ch10-s4',
            title: 'Translation',
            description: 'Comprendre et utiliser la translation',
            concepts: ['Translation', 'Image par translation', 'Propriétés', 'Vecteur de translation'],
            objectives: [
              'Définir une translation',
              'Construire l\'image par translation',
              'Connaître les propriétés de conservation',
              'Résoudre des problèmes avec translations'
            ],
            content: {
              definition: {
                translation: 'La translation de vecteur u⃗ transforme tout point M en un point M\' tel que MM\'⃗ = u⃗',
                notation: 'T_u⃗(M) = M\'',
                caracteristique: 'Tous les points se déplacent dans la même direction, le même sens, de la même longueur'
              },
              construction: {
                point: {
                  methode: [
                    'Partir du point M',
                    'Tracer le vecteur u⃗ à partir de M',
                    'L\'extrémité est M\''
                  ],
                  verification: 'MM\'⃗ = u⃗'
                },
                figure: {
                  methode: 'Translater chaque sommet puis relier',
                  exemple: {
                    triangle: 'Triangle ABC translaté par u⃗',
                    construction: 'A\', B\', C\' tels que AA\'⃗ = BB\'⃗ = CC\'⃗ = u⃗',
                    resultat: 'Triangle A\'B\'C\''
                  }
                }
              },
              proprietes_conservation: {
                distances: {
                  propriete: 'AB = A\'B\' (conservation des longueurs)',
                  consequence: 'Les figures gardent leur taille'
                },
                angles: {
                  propriete: 'Les angles sont conservés',
                  consequence: 'Les formes sont identiques'
                },
                parallelisme: {
                  propriete: 'Si (AB) ∥ (CD), alors (A\'B\') ∥ (C\'D\')',
                  consequence: 'Les parallèles restent parallèles'
                },
                aires: {
                  propriete: 'Les aires sont conservées',
                  exemple: 'Aire(ABC) = Aire(A\'B\'C\')'
                }
              },
              composition_translations: {
                propriete: 'La composée de deux translations est une translation',
                formule: 'T_v⃗ ∘ T_u⃗ = T_{u⃗+v⃗}',
                interpretation: 'Deux translations successives = une seule translation par la somme des vecteurs'
              },
              translation_inverse: {
                propriete: 'La translation inverse de T_u⃗ est T_{-u⃗}',
                consequence: 'T_{-u⃗} ∘ T_u⃗ = Identité'
              },
              dans_repere: {
                formule: 'Si u⃗(a,b) et M(x,y), alors M\'(x+a, y+b)',
                exemple: {
                  vecteur: 'u⃗(3,-2)',
                  point: 'M(1,5)',
                  image: 'M\'(1+3, 5-2) = M\'(4,3)'
                }
              },
              mauritanianContext: [
                'Déplacements d\'objets',
                'Pavages et frises',
                'Motifs répétitifs',
                'Translations de structures'
              ]
            },
            exercises: [
              {
                type: 'construction',
                question: 'Construis l\'image du point A par la translation de vecteur u⃗',
                answer: 'À partir de A, reporter u⃗ pour obtenir A\' tel que AA\'⃗ = u⃗',
                difficulty: 'beginner'
              },
              {
                type: 'coordonnees',
                question: 'Translation de vecteur u⃗(2,3). Image de M(1,4)?',
                answer: 'M\'(1+2, 4+3) = M\'(3,7)',
                difficulty: 'intermediate'
              },
              {
                type: 'composition',
                question: 'Translation par u⃗(1,2) puis par v⃗(3,-1). Vecteur de la translation résultante?',
                answer: 'u⃗ + v⃗ = (1+3, 2-1) = (4,1)',
                difficulty: 'intermediate'
              }
            ],
            difficulty: 'intermediate',
            estimatedTime: 40
          }
        ]
      }
    ]
  };

export default YEAR3_MATH_CURRICULUM;