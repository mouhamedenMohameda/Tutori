/**
 * Year 2 Math Curriculum - Mauritanie
 * Complete curriculum content from the official textbook
 */

export const YEAR2_MATH_CURRICULUM = {
  year: 2,
  subject: 'Mathématiques',
  title: 'Manuel de Mathématiques 2e AS (Deuxième Année Secondaire) - Mauritanie',
  methodology: 'Approche pédagogique basée sur la résolution de problèmes concrets mauritaniens avec contextualisation locale systématique.',
  
  chapters: [
    {
      id: 'ch1',
      title: 'LES ENTIERS RELATIFS',
      sections: [
        {
          id: 'ch1-s1',
          title: 'Activité: Températures de Nouadhibou',
          description: 'Découvrir les entiers relatifs à partir des altitudes de Nouadhibou',
          concepts: ['Entier relatif', 'Altitude', 'Niveau de la mer', 'Signe positif', 'Signe négatif'],
          objectives: [
            'Identifier les entiers relatifs dans un contexte mauritanien',
            'Distinguer les valeurs positives et négatives',
            'Associer des situations concrètes aux nombres relatifs'
          ],
          content: {
            context: {
              location: 'Wilaya de Nouadhibou',
              reference: 'Niveau de la mer (ligne horizontale en pointillé)',
              examples: [
                'Kerchet Maouloud: 38m au-dessus → +38',
                'Chemin de fer: 6m au-dessus → +6',
                'Banc du Lézard: 20m au-dessous → -20'
              ]
            },
            definition: {
              positive: 'Nombres au-dessus du niveau de la mer (signe +)',
              negative: 'Nombres au-dessous du niveau de la mer (signe -)',
              zero: 'Niveau de la mer = 0'
            },
            mauritanianContext: [
              'Altitudes du Sahara mauritanien',
              'Profondeurs des puits',
              'Températures extrêmes du désert',
              'Commerce de Nouadhibou'
            ]
          },
          questions: [
            "Quelles sont les altitudes indiquées?",
            "Comment différencies-tu les valeurs positives et négatives?",
            "Donne d'autres exemples d'utilisation des nombres relatifs",
            "Que représente le niveau de la mer?",
            "Peux-tu citer d'autres lieux de Nouadhibou?"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Classe ces altitudes: +15m, -8m, +32m, -12m',
              answer: 'Positives: +15m, +32m | Négatives: -8m, -12m'
            },
            {
              type: 'context',
              question: 'Un puits de 25m de profondeur, comment l\'écris-tu?',
              answer: '-25m (au-dessous du niveau de la mer)'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 25
        },
        {
          id: 'ch1-s2',
          title: 'Graduation d\'une droite',
          description: 'Représenter les entiers relatifs sur une droite graduée',
          concepts: ['Droite graduée', 'Origine', 'Unité', 'Sens positif', 'Sens négatif'],
          objectives: [
            'Construire une droite graduée',
            'Placer des entiers relatifs',
            'Comprendre l\'orientation de la droite'
          ],
          content: {
            construction: {
              step1: 'Tracer une droite Δ',
              step2: 'Choisir deux points distincts: O (origine) et I (unité)',
              step3: 'Graduer régulièrement dans les deux sens',
              step4: 'Marquer les entiers positifs à droite, négatifs à gauche'
            },
            placement: {
              example: 'Placer A(+3), B(-2), C(-6), D(+7), E(-9), F(+8), G(+10)',
              method: 'Compter les unités depuis l\'origine O'
            },
            mauritanianContext: [
              'Thermomètres du désert',
              'Altimètres des avions',
              'Profondeurs des mines',
              'Températures des réfrigérateurs'
            ]
          },
          questions: [
            "Comment construit-on une droite graduée?",
            "Où place-t-on les nombres positifs?",
            "Comment place-t-on -5 sur la droite?",
            "Que représente le point O?",
            "Donne un exemple d'utilisation de la droite graduée"
          ],
          exercises: [
            {
              type: 'construction',
              question: 'Place les points A(+4), B(-3), C(+1), D(-7)',
              answer: 'A à droite de O, B à gauche de O, C à droite de O, D à gauche de O'
            },
            {
              type: 'reading',
              question: 'Quel nombre correspond au point à 6 unités à gauche de O?',
              answer: '-6'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch1-s3',
          title: 'Comparaison des entiers relatifs',
          description: 'Comparer deux entiers relatifs en utilisant la droite graduée',
          concepts: ['Comparaison', 'Ordre', 'Position relative', 'Distance à zéro'],
          objectives: [
            'Comparer des entiers relatifs',
            'Utiliser la droite graduée pour comparer',
            'Comprendre les règles de comparaison'
          ],
          content: {
            rules: {
              rule1: 'Tout entier positif > tout entier négatif',
              rule2: 'Deux positifs: plus petit = plus petite distance à zéro',
              rule3: 'Deux négatifs: plus petit = plus grande distance à zéro',
              rule4: 'Sur la droite: tout nombre à droite est plus grand'
            },
            examples: {
              positive_vs_negative: '+5 > -8 (règle 1)',
              two_positives: '+3 < +7 (distances 3 et 7)',
              two_negatives: '-4 > -9 (distances 4 et 9)'
            },
            mauritanianContext: [
              'Comparaison des températures',
              'Classement des altitudes',
              'Rang des élèves',
              'Prix des marchandises'
            ]
          },
          questions: [
            "Comment compare-t-on deux entiers relatifs?",
            "Quelle est la règle pour les nombres positifs?",
            "Pourquoi -4 > -9?",
            "Comment utilise-t-on la droite graduée?",
            "Donne un exemple de comparaison en Mauritanie"
          ],
          exercises: [
            {
              type: 'comparison',
              question: 'Compare: +12 et -15',
              answer: '+12 > -15 (positif > négatif)'
            },
            {
              type: 'ordering',
              question: 'Range dans l\'ordre croissant: -8, +3, -2, +7',
              answer: '-8 < -2 < +3 < +7'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch1-s4',
          title: 'Addition des entiers relatifs',
          description: 'Apprendre les règles d\'addition des entiers relatifs',
          concepts: ['Addition', 'Même signe', 'Signes contraires', 'Distance à zéro'],
          objectives: [
            'Additionner des entiers de même signe',
            'Additionner des entiers de signes contraires',
            'Appliquer les règles d\'addition'
          ],
          content: {
            rules: {
              same_sign: {
                rule: 'Additionner les distances à zéro, garder le signe commun',
                example: '(+37) + (+14) = +51',
                method: '37 + 14 = 51, signe +'
              },
              opposite_signs: {
                rule: 'Soustraire les distances à zéro, prendre le signe de la plus grande',
                example: '(+98) + (-64) = +34',
                method: '98 - 64 = 34, signe de 98 (plus grande distance)'
              }
            },
            properties: {
              commutativity: 'a + b = b + a',
              associativity: '(a + b) + c = a + (b + c)',
              neutral: 'a + 0 = a',
              opposite: 'a + (-a) = 0'
            },
            mauritanianContext: [
              'Bilans financiers des entreprises',
              'Calculs de températures',
              'Variations d\'altitude',
              'Comptes bancaires'
            ]
          },
          questions: [
            "Comment additionne-t-on des nombres de même signe?",
            "Que fait-on avec des signes contraires?",
            "Calcule (+25) + (+17)",
            "Calcule (+45) + (-30)",
            "Donne un exemple d'addition en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule: (+37) + (+14)',
              answer: '+51 (même signe: 37 + 14 = 51)'
            },
            {
              type: 'calculation',
              question: 'Calcule: (+98) + (-64)',
              answer: '+34 (signes contraires: 98 - 64 = 34, signe +)'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch1-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les entiers relatifs',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec des entiers relatifs',
            'Vérifier les calculs',
            'Utiliser les contextes mauritaniens'
          ],
          content: {
            problems: [
              {
                type: 'altitude',
                context: 'Nouadhibou - altitudes diverses',
                question: 'Calcule la différence d\'altitude entre Kerchet Maouloud (+38m) et Banc du Lézard (-20m)',
                solution: '38 - (-20) = 38 + 20 = 58m'
              },
              {
                type: 'temperature',
                context: 'Températures du désert',
                question: 'Température matinale: -5°C, après-midi: +35°C. Quelle est l\'augmentation?',
                solution: '35 - (-5) = 35 + 5 = 40°C'
              }
            ],
            mauritanianContext: [
              'Problèmes d\'altitude du Sahara',
              'Calculs de températures extrêmes',
              'Bilans financiers locaux',
              'Variations climatiques'
            ]
          },
          questions: [
            "Résous ce problème d'altitude en Nouadhibou",
            "Calcule la variation de température",
            "Vérifie ton calcul",
            "Donne un autre exemple",
            "Comment appliques-tu les règles?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Un puits de 15m de profondeur et une colline de 25m de hauteur. Quelle est la différence?',
              answer: '25 - (-15) = 25 + 15 = 40m'
            },
            {
              type: 'verification',
              question: 'Vérifie: (+45) + (-30) = +15',
              answer: '45 - 30 = 15, signe de 45 (plus grande distance) = +15 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch2',
      title: 'LES DÉCIMAUX RELATIFS 1',
      sections: [
        {
          id: 'ch2-s1',
          title: 'Bilan financier d\'une entreprise mauritanienne',
          description: 'Découvrir les décimaux relatifs à partir d\'un bilan comptable',
          concepts: ['Décimal relatif', 'Bilan financier', 'Recettes', 'Dépenses', 'MRU'],
          objectives: [
            'Identifier les décimaux relatifs dans un contexte financier',
            'Calculer des bilans positifs et négatifs',
            'Utiliser la monnaie mauritanienne (MRU)'
          ],
          content: {
            context: {
              company: 'Société de la place de Nouakchott',
              currency: 'Milliers d\'ouguiyas (MRU)',
              period: 'Semaine complète'
            },
            data: {
              saturday: { income: '73,8 MRU', expenses: '42,0 MRU', balance: '+31,8 MRU' },
              sunday: { income: '97,2 MRU', expenses: '99,9 MRU', balance: '-1,7 MRU' },
              monday: { income: '39,0 MRU', expenses: '39,0 MRU', balance: '0 MRU' },
              tuesday: { income: '8,89 MRU', expenses: '7,42 MRU', balance: '+1,47 MRU' },
              wednesday: { income: '120,0 MRU', expenses: '75,2 MRU', balance: '+44,8 MRU' },
              thursday: { income: '85,85 MRU', expenses: '87,85 MRU', balance: '-2,0 MRU' },
              friday: { income: '72,85 MRU', expenses: '72,86 MRU', balance: '-0,01 MRU' }
            },
            calculation: {
              method: 'Bilan = Recettes - Dépenses',
              positive: 'Bénéfice (signe +)',
              negative: 'Perte (signe -)',
              zero: 'Équilibre'
            },
            mauritanianContext: [
              'Entreprises de Nouakchott',
              'Commerce local',
              'Monnaie ouguiya',
              'Bilans comptables'
            ]
          },
          questions: [
            "Comment calcule-t-on le bilan?",
            "Que signifie un bilan positif?",
            "Que signifie un bilan négatif?",
            "Calcule le bilan du mardi",
            "Donne un exemple d'entreprise en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule le bilan: recettes 150,5 MRU, dépenses 120,3 MRU',
              answer: '150,5 - 120,3 = +30,2 MRU (bénéfice)'
            },
            {
              type: 'interpretation',
              question: 'Un bilan de -15,7 MRU, que signifie-t-il?',
              answer: 'Perte de 15,7 milliers d\'ouguiyas'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch2-s2',
          title: 'Graduation avec subdivisions',
          description: 'Représenter les décimaux relatifs sur une droite graduée avec subdivisions',
          concepts: ['Subdivision', 'Dixième', 'Placement', 'Précision'],
          objectives: [
            'Subdiviser l\'unité en dixièmes',
            'Placer des décimaux sur la droite',
            'Comprendre la précision des décimaux'
          ],
          content: {
            construction: {
              step1: 'Droite graduée avec unité 1',
              step2: 'Subdiviser en 10 parties égales (dixièmes)',
              step3: 'Marquer les subdivisions: 0,1; 0,2; 0,3; ...; 0,9',
              step4: 'Continuer dans les deux sens'
            },
            placement: {
              example: 'Placer A(+3,8), B(-2,1), C(-6)',
              method: '3 unités + 8 dixièmes pour +3,8',
              precision: 'Chaque subdivision = 0,1 unité'
            },
            mauritanianContext: [
              'Thermomètres précis',
              'Mesures de température',
              'Altimètres détaillés',
              'Instruments de mesure'
            ]
          },
          questions: [
            "Comment subdivise-t-on l'unité?",
            "Que représente chaque subdivision?",
            "Comment places-tu +3,8?",
            "Où places-tu -2,1?",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'placement',
              question: 'Place +2,5 et -1,7 sur la droite graduée',
              answer: '+2,5: 2 unités + 5 dixièmes à droite | -1,7: 1 unité + 7 dixièmes à gauche'
            },
            {
              type: 'reading',
              question: 'Quel nombre correspond à 4 unités + 3 dixièmes à droite?',
              answer: '+4,3'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch2-s3',
          title: 'Déplacements sur la droite',
          description: 'Comprendre les déplacements et calculs avec des décimaux',
          concepts: ['Déplacement', 'Addition', 'Position finale', 'Calcul direct'],
          objectives: [
            'Effectuer des déplacements sur la droite',
            'Calculer des positions finales',
            'Vérifier les calculs'
          ],
          content: {
            example: {
              start: 'Point O (origine)',
              first_move: '+1,8 (vers la droite)',
              second_move: '+4 (vers la droite)',
              final_position: '+5,8',
              verification: '1,8 + 4 = 5,8'
            },
            method: {
              step1: 'Partir de l\'origine O',
              step2: 'Effectuer le premier déplacement',
              step3: 'Effectuer le second déplacement',
              step4: 'Calculer la position finale'
            },
            mauritanianContext: [
              'Déplacements dans le désert',
              'Calculs de distances',
              'Navigation',
              'Mesures de terrain'
            ]
          },
          questions: [
            "Comment calcule-t-on la position finale?",
            "Que donne +1,8 + 4?",
            "Vérifie le calcul",
            "Peux-tu faire un autre exemple?",
            "Donne un exemple de déplacement en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Départ O, déplacement +2,5, puis +3,2. Position finale?',
              answer: '0 + 2,5 + 3,2 = +5,7'
            },
            {
              type: 'verification',
              question: 'Vérifie: +1,8 + 4 = +5,8',
              answer: '1,8 + 4 = 5,8 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch2-s4',
          title: 'Addition des décimaux relatifs',
          description: 'Appliquer les règles d\'addition aux décimaux relatifs',
          concepts: ['Addition décimale', 'Alignement', 'Même signe', 'Signes contraires'],
          objectives: [
            'Additionner des décimaux de même signe',
            'Additionner des décimaux de signes contraires',
            'Aligner correctement les décimales'
          ],
          content: {
            rules: {
              same_sign: {
                rule: 'Additionner les distances à zéro, garder le signe commun',
                example: '(+17,38) + (+9,14) = +26,52',
                method: 'Aligner les décimales et additionner'
              },
              opposite_signs: {
                rule: 'Soustraire les distances à zéro, prendre le signe de la plus grande',
                example: '(+26,18) + (-59,104) = -32,924',
                method: '59,104 - 26,18 = 32,924, signe -'
              }
            },
            alignment: {
              method: 'Aligner les virgules',
              example: '17,38\n+ 9,14\n-------\n 26,52'
            },
            mauritanianContext: [
              'Calculs financiers précis',
              'Bilans comptables',
              'Mesures scientifiques',
              'Calculs commerciaux'
            ]
          },
          questions: [
            "Comment additionne-t-on des décimaux?",
            "Pourquoi faut-il aligner les virgules?",
            "Calcule (+15,7) + (+8,3)",
            "Calcule (+25,4) + (-18,9)",
            "Donne un exemple d'addition en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule: (+17,38) + (+9,14)',
              answer: '+26,52 (même signe, aligner et additionner)'
            },
            {
              type: 'calculation',
              question: 'Calcule: (+26,18) + (-59,104)',
              answer: '-32,924 (signes contraires: 59,104 - 26,18 = 32,924, signe -)'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les décimaux relatifs',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec des décimaux',
            'Vérifier les calculs',
            'Utiliser les contextes mauritaniens'
          ],
          content: {
            problems: [
              {
                type: 'financial',
                context: 'Entreprise de Nouakchott',
                question: 'Bilan hebdomadaire: lundi +15,7 MRU, mardi -8,3 MRU, mercredi +22,1 MRU. Bilan total?',
                solution: '15,7 + (-8,3) + 22,1 = 15,7 - 8,3 + 22,1 = +29,5 MRU'
              },
              {
                type: 'temperature',
                context: 'Températures du désert',
                question: 'Température matinale: -2,5°C, augmentation: +8,7°C. Température finale?',
                solution: '-2,5 + 8,7 = +6,2°C'
              }
            ],
            mauritanianContext: [
              'Bilans d\'entreprises locales',
              'Calculs de températures',
              'Mesures précises',
              'Comptabilité mauritanienne'
            ]
          },
          questions: [
            "Résous ce problème de bilan financier",
            "Calcule la température finale",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment appliques-tu les règles?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Un commerçant: achat -150,5 MRU, vente +180,3 MRU. Bénéfice?',
              answer: '-150,5 + 180,3 = +29,8 MRU (bénéfice)'
            },
            {
              type: 'verification',
              question: 'Vérifie: (+15,7) + (-8,3) = +7,4',
              answer: '15,7 - 8,3 = 7,4 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch3',
      title: 'LES DÉCIMAUX RELATIFS 2 (PUISSANCES)',
      sections: [
        {
          id: 'ch3-s1',
          title: 'Exposant entier positif',
          description: 'Découvrir les puissances avec des exemples concrets',
          concepts: ['Puissance', 'Exposant', 'Base', 'Cube', 'Carré'],
          objectives: [
            'Comprendre la notion de puissance',
            'Calculer des puissances simples',
            'Utiliser des exemples concrets'
          ],
          content: {
            examples: {
              square: {
                context: 'Carré de côté 5cm',
                area: '5 × 5 = 25 cm² = 5²',
                definition: '5² = 5 × 5 (2 fois)'
              },
              cube: {
                context: 'Cube de côté 5cm',
                volume: '5 × 5 × 5 = 125 cm³ = 5³',
                definition: '5³ = 5 × 5 × 5 (3 fois)'
              }
            },
            calculations: {
              example1: '7 × 7 × 7 = 7³ = 343',
              example2: '(-4) × (-4) × (-4) × (-4) × (-4) × (-4) = (-4)⁶ = 4096',
              example3: '(0,2) × (0,2) × ... × (0,2) [7 fois] = (0,2)⁷ = 0,0000128'
            },
            mauritanianContext: [
              'Calculs d\'aires et volumes',
              'Mesures de terrain',
              'Calculs d\'ingénierie',
              'Problèmes de construction'
            ]
          },
          questions: [
            "Qu'est-ce qu'une puissance?",
            "Comment calcule-t-on 5²?",
            "Que signifie 7³?",
            "Calcule 3⁴",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule 4² et 4³',
              answer: '4² = 16, 4³ = 64'
            },
            {
              type: 'definition',
              question: 'Que signifie 2⁵?',
              answer: '2 × 2 × 2 × 2 × 2 = 32'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch3-s2',
          title: 'Exposant entier négatif',
          description: 'Comprendre les puissances avec exposant négatif',
          concepts: ['Exposant négatif', 'Inverse', 'Fraction', 'Calculatrice'],
          objectives: [
            'Comprendre les puissances négatives',
            'Calculer avec des exposants négatifs',
            'Utiliser la calculatrice'
          ],
          content: {
            definition: {
              rule: 'a⁻ⁿ = 1/aⁿ (pour a ≠ 0)',
              explanation: 'Puissance négative = inverse de la puissance positive'
            },
            examples: {
              example1: '5⁻² = 1/5² = 1/25 = 0,04',
              example2: '(-3)⁻⁴ = 1/(-3)⁴ = 1/81 ≈ 0,0123',
              example3: '2⁻³ = 1/2³ = 1/8 = 0,125'
            },
            calculator: {
              method: 'Utiliser la calculatrice pour vérifier',
              verification: '5⁻² = 0,04'
            },
            mauritanianContext: [
              'Calculs scientifiques',
              'Mesures très petites',
              'Calculs d\'ingénierie',
              'Problèmes de physique'
            ]
          },
          questions: [
            "Que signifie 5⁻²?",
            "Comment calcule-t-on une puissance négative?",
            "Calcule 3⁻²",
            "Vérifie avec la calculatrice",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule 2⁻³',
              answer: '2⁻³ = 1/2³ = 1/8 = 0,125'
            },
            {
              type: 'verification',
              question: 'Vérifie: 4⁻² = 0,0625',
              answer: '4⁻² = 1/4² = 1/16 = 0,0625 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch3-s3',
          title: 'Propriétés des puissances',
          description: 'Apprendre les propriétés fondamentales des puissances',
          concepts: ['Propriétés', 'Produit', 'Quotient', 'Puissance de puissance'],
          objectives: [
            'Connaître les propriétés des puissances',
            'Appliquer les propriétés dans les calculs',
            'Simplifier des expressions'
          ],
          content: {
            properties: {
              product: {
                rule: 'aᵐ × aⁿ = a^(m+n)',
                example: '5² × 5³ = 5^(2+3) = 5⁵ = 3125',
                verification: '25 × 125 = 3125 ✓'
              },
              quotient: {
                rule: 'aᵐ ÷ aⁿ = a^(m-n) (a ≠ 0)',
                example: '5⁵ ÷ 5² = 5^(5-2) = 5³ = 125'
              },
              power_of_power: {
                rule: '(aᵐ)ⁿ = a^(m×n)',
                example: '(5²)³ = 5^(2×3) = 5⁶ = 15625',
                verification: '25³ = 15625 ✓'
              }
            },
            special_cases: {
              power_one: 'a¹ = a',
              power_zero: 'a⁰ = 1 (pour a ≠ 0)',
              undefined: '0⁰ est indéfini'
            },
            mauritanianContext: [
              'Calculs d\'ingénierie',
              'Problèmes scientifiques',
              'Calculs de croissance',
              'Modèles mathématiques'
            ]
          },
          questions: [
            "Quelle est la propriété du produit de puissances?",
            "Comment calcule-t-on (aᵐ)ⁿ?",
            "Que vaut a⁰?",
            "Calcule 3² × 3³",
            "Donne un exemple d'application en Mauritanie"
          ],
          exercises: [
            {
              type: 'property',
              question: 'Calcule 2³ × 2⁴',
              answer: '2³ × 2⁴ = 2^(3+4) = 2⁷ = 128'
            },
            {
              type: 'verification',
              question: 'Vérifie: (3²)³ = 3⁶',
              answer: '(3²)³ = 9³ = 729, 3⁶ = 729 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch3-s4',
          title: 'Notation scientifique',
          description: 'Écrire les nombres en notation scientifique',
          concepts: ['Notation scientifique', 'Puissance de 10', 'Mantisse', 'Exposant'],
          objectives: [
            'Comprendre la notation scientifique',
            'Écrire des nombres en notation scientifique',
            'Reconnaître la notation scientifique'
          ],
          content: {
            definition: {
              rule: 'a × 10ⁿ où 1 ≤ |a| < 10 et n ∈ Z',
              explanation: 'Nombre décimal non nul écrit avec une puissance de 10'
            },
            examples: {
              large: '661 870 000 000 = 6,6187 × 10¹¹',
              small: '0,0003022 = 3,022 × 10⁻⁴',
              very_large: '8009900 × 10⁸ = 8,0099 × 10¹⁴'
            },
            method: {
              step1: 'Déplacer la virgule pour avoir 1 ≤ |a| < 10',
              step2: 'Compter le nombre de déplacements',
              step3: 'Écrire a × 10ⁿ avec n = nombre de déplacements'
            },
            mauritanianContext: [
              'Distances astronomiques',
              'Populations',
              'Masses atomiques',
              'Calculs scientifiques'
            ]
          },
          questions: [
            "Qu'est-ce que la notation scientifique?",
            "Comment écris-tu 6 618 700 000 000?",
            "Comment écris-tu 0,0003022?",
            "Quelle est la règle pour la mantisse?",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'conversion',
              question: 'Écris 45 000 000 en notation scientifique',
              answer: '4,5 × 10⁷'
            },
            {
              type: 'conversion',
              question: 'Écris 0,0000078 en notation scientifique',
              answer: '7,8 × 10⁻⁶'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch3-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les puissances',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec des puissances',
            'Utiliser la notation scientifique',
            'Vérifier les calculs'
          ],
          content: {
            problems: [
              {
                type: 'area',
                context: 'Champ carré en Mauritanie',
                question: 'Un champ carré de 50m de côté. Quelle est son aire en m² et en hectares?',
                solution: 'Aire = 50² = 2500 m² = 0,25 hectares'
              },
              {
                type: 'volume',
                context: 'Réservoir cubique',
                question: 'Un réservoir cubique de 3m d\'arête. Quel est son volume en m³ et en litres?',
                solution: 'Volume = 3³ = 27 m³ = 27 000 litres'
              }
            ],
            mauritanianContext: [
              'Calculs d\'aires de champs',
              'Volumes de réservoirs',
              'Distances astronomiques',
              'Populations de villes'
            ]
          },
          questions: [
            "Résous ce problème d'aire de champ",
            "Calcule le volume du réservoir",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu les puissances?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Un carré de 8m de côté. Calcule son aire et son périmètre',
              answer: 'Aire = 8² = 64 m², Périmètre = 4 × 8 = 32 m'
            },
            {
              type: 'verification',
              question: 'Vérifie: 5³ = 125',
              answer: '5 × 5 × 5 = 25 × 5 = 125 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch4',
      title: 'NOMBRES RATIONNELS 1',
      sections: [
        {
          id: 'ch4-s1',
          title: 'Partage d\'héritage mauritanien',
          description: 'Découvrir les fractions à partir d\'un partage de champ',
          concepts: ['Fraction', 'Partage', 'Héritage', 'Superficie', 'Hectare'],
          objectives: [
            'Comprendre la notion de fraction',
            'Calculer des fractions simples',
            'Utiliser un contexte mauritanien'
          ],
          content: {
            context: {
              family: 'Trois frères Ali, Ahmed et Brahim',
              property: 'Champ rectangulaire de 30 hectares',
              distribution: {
                rice: '15 hectares → 15/30 = 1/2',
                vegetables: '10 hectares → 10/30 = 1/3',
                fruits: '5 hectares → 5/30 = 1/6'
              }
            },
            verification: {
              total: '1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1',
              explanation: 'La somme des fractions = 1 (champ complet)'
            },
            mauritanianContext: [
              'Partage de terres familiales',
              'Agriculture sahélienne',
              'Héritage traditionnel',
              'Calculs de superficies'
            ]
          },
          questions: [
            "Comment partage-t-on le champ?",
            "Que représente 1/2 du champ?",
            "Vérifie que la somme fait 1",
            "Calcule 1/3 de 30 hectares",
            "Donne un autre exemple de partage en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule 1/3 de 30 hectares',
              answer: '30 × 1/3 = 10 hectares'
            },
            {
              type: 'verification',
              question: 'Vérifie: 1/2 + 1/3 + 1/6 = 1',
              answer: '3/6 + 2/6 + 1/6 = 6/6 = 1 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch4-s2',
          title: 'Découpage de gâteau',
          description: 'Comprendre les fractions à partir d\'un problème concret',
          concepts: ['Fraction', 'Partage équitable', 'PGCD', 'Simplification'],
          objectives: [
            'Résoudre un problème de partage',
            'Utiliser le PGCD',
            'Simplifier des fractions'
          ],
          content: {
            problem: {
              context: 'Anniversaire - gâteau rectangulaire',
              dimensions: '126 cm de long et 90 cm de large',
              goal: 'Parts identiques pour le maximum de personnes'
            },
            solution: {
              step1: 'Décomposer en facteurs premiers',
              step2: '126 = 2 × 3² × 7',
              step3: '90 = 2 × 3² × 5',
              step4: 'PGCD(126, 90) = 2 × 3² = 18',
              step5: 'Maximum de personnes: 18 × 2 = 36',
              step6: 'Dimensions de chaque part: (126/18) × (90/18) = 7 cm × 5 cm'
            },
            fraction: {
              irreducible: '7/5',
              explanation: 'Fraction simplifiée au maximum'
            },
            mauritanianContext: [
              'Célébrations familiales',
              'Partage de nourriture',
              'Calculs de portions',
              'Traditions mauritaniennes'
            ]
          },
          questions: [
            "Comment trouve-t-on le PGCD?",
            "Combien de personnes maximum?",
            "Quelles sont les dimensions d'une part?",
            "Simplifie la fraction 126/90",
            "Donne un autre exemple de partage en Mauritanie"
          ],
          exercises: [
            {
              type: 'pgcd',
              question: 'Calcule PGCD(48, 36)',
              answer: '48 = 2⁴ × 3, 36 = 2² × 3², PGCD = 2² × 3 = 12'
            },
            {
              type: 'simplification',
              question: 'Simplifie 126/90',
              answer: '126/90 = (2 × 3² × 7)/(2 × 3² × 5) = 7/5'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s3',
          title: 'Définition des nombres rationnels',
          description: 'Comprendre la définition formelle des nombres rationnels',
          concepts: ['Nombre rationnel', 'Quotient', 'Entier relatif', 'Dénominateur non nul'],
          objectives: [
            'Comprendre la définition des rationnels',
            'Identifier des nombres rationnels',
            'Distinguer rationnels et non-rationnels'
          ],
          content: {
            definition: {
              formal: 'Un nombre rationnel est le quotient d\'un entier relatif par un entier relatif non nul',
              notation: 'a/b avec a ∈ Z, b ∈ Z et b ≠ 0',
              examples: ['3/4', '-5/7', '2/1 = 2', '0/3 = 0']
            },
            equality: {
              rule: 'a/b = c/d ⇔ ad = bc (produits en croix)',
              example: '3/4 = 6/8 car 3 × 8 = 4 × 6 = 24'
            },
            special_cases: {
              integer: 'Tout entier est rationnel (a/1)',
              zero: '0 est rationnel (0/b)',
              undefined: 'a/0 est indéfini'
            },
            mauritanianContext: [
              'Calculs de proportions',
              'Partages équitables',
              'Rapports commerciaux',
              'Calculs de pourcentages'
            ]
          },
          questions: [
            "Qu'est-ce qu'un nombre rationnel?",
            "Peux-tu donner des exemples?",
            "Comment vérifie-t-on l'égalité de deux fractions?",
            "Tout entier est-il rationnel?",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Quels sont les nombres rationnels: 3/4, 5/0, -2/7, 0/3?',
              answer: 'Rationnels: 3/4, -2/7, 0/3 | Non-rationnel: 5/0 (indéfini)'
            },
            {
              type: 'equality',
              question: 'Vérifie: 2/3 = 4/6',
              answer: '2 × 6 = 12, 3 × 4 = 12, donc 2/3 = 4/6 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch4-s4',
          title: 'Comparaison des fractions',
          description: 'Apprendre à comparer des fractions',
          concepts: ['Comparaison', 'Dénominateur commun', 'Produits en croix', 'Ordre'],
          objectives: [
            'Comparer des fractions de même dénominateur',
            'Comparer des fractions de dénominateurs différents',
            'Utiliser les méthodes de comparaison'
          ],
          content: {
            rules: {
              same_denominator: {
                rule: 'Si deux fractions ont le même dénominateur positif, on les range dans le même ordre que leurs numérateurs',
                example: '3/7 < 5/7 car 3 < 5'
              },
              different_denominators: {
                rule: 'On réduit au même dénominateur positif, puis on applique la règle 1',
                example: '3/5 vs 4/7 → 21/35 vs 20/35 → 21/35 > 20/35'
              }
            },
            methods: {
              method1: 'Réduction au même dénominateur',
              method2: 'Produits en croix (a/b vs c/d: comparer ad vs bc)',
              method3: 'Conversion en décimaux'
            },
            mauritanianContext: [
              'Comparaison de prix',
              'Classement de performances',
              'Évaluation de proportions',
              'Calculs commerciaux'
            ]
          },
          questions: [
            "Comment compare-t-on des fractions de même dénominateur?",
            "Que fait-on avec des dénominateurs différents?",
            "Compare 3/5 et 4/7",
            "Utilise la méthode des produits en croix",
            "Donne un exemple de comparaison en Mauritanie"
          ],
          exercises: [
            {
              type: 'comparison',
              question: 'Compare 2/3 et 3/4',
              answer: '2/3 = 8/12, 3/4 = 9/12, donc 2/3 < 3/4'
            },
            {
              type: 'cross_product',
              question: 'Compare 5/6 et 7/8 avec les produits en croix',
              answer: '5 × 8 = 40, 6 × 7 = 42, donc 5/6 < 7/8'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch4-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les nombres rationnels',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec des fractions',
            'Vérifier les calculs',
            'Utiliser les contextes mauritaniens'
          ],
          content: {
            problems: [
              {
                type: 'sharing',
                context: 'Partage de terrain familial',
                question: 'Un terrain de 24 hectares est partagé entre 3 frères: 1/3, 1/4, et le reste. Calcule la part de chacun',
                solution: '1er frère: 24 × 1/3 = 8 ha, 2ème frère: 24 × 1/4 = 6 ha, 3ème frère: 24 - 8 - 6 = 10 ha'
              },
              {
                type: 'comparison',
                context: 'Prix au marché',
                question: 'Au marché de Nouakchott: riz 150 MRU/kg, mil 120 MRU/kg. Quel est le plus cher?',
                solution: 'Comparer 150/1 et 120/1: 150 > 120, donc le riz est plus cher'
              }
            ],
            mauritanianContext: [
              'Partage de terres familiales',
              'Comparaison de prix au marché',
              'Calculs de proportions',
              'Problèmes d\'héritage'
            ]
          },
          questions: [
            "Résous ce problème de partage de terrain",
            "Compare les prix au marché",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment appliques-tu les règles des fractions?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Un champ de 36 hectares: 1/2 pour le riz, 1/3 pour le mil, le reste pour les légumes. Calcule chaque part',
              answer: 'Riz: 18 ha, Mil: 12 ha, Légumes: 6 ha'
            },
            {
              type: 'verification',
              question: 'Vérifie: 1/2 + 1/3 + 1/6 = 1',
              answer: '3/6 + 2/6 + 1/6 = 6/6 = 1 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch5',
      title: 'NOMBRES RATIONNELS 2',
      sections: [
        {
          id: 'ch5-s1',
          title: 'Addition des fractions',
          description: 'Apprendre à additionner des fractions',
          concepts: ['Addition de fractions', 'Dénominateur commun', 'PPCM', 'Réduction'],
          objectives: [
            'Additionner des fractions de même dénominateur',
            'Additionner des fractions de dénominateurs différents',
            'Utiliser le PPCM'
          ],
          content: {
            same_denominator: {
              rule: 'On additionne les numérateurs et on garde le dénominateur commun',
              example: '2/8 + 3/8 = 5/8',
              context: 'Ali cultive 2/8 en tomates et 3/8 en carottes'
            },
            different_denominators: {
              rule: 'On réduit au même dénominateur, puis on additionne',
              example: '3/8 + 4/15',
              steps: [
                'PPCM(8,15) = 120',
                '3/8 = 45/120, 4/15 = 32/120',
                '45/120 + 32/120 = 77/120'
              ]
            },
            method: {
              step1: 'Trouver le PPCM des dénominateurs',
              step2: 'Réduire chaque fraction au même dénominateur',
              step3: 'Additionner les numérateurs',
              step4: 'Simplifier si possible'
            },
            mauritanianContext: [
              'Calculs de superficies cultivées',
              'Partage de récoltes',
              'Calculs de proportions',
              'Agriculture sahélienne'
            ]
          },
          questions: [
            "Comment additionne-t-on des fractions de même dénominateur?",
            "Que fait-on avec des dénominateurs différents?",
            "Calcule 3/8 + 4/15",
            "Trouve le PPCM de 8 et 15",
            "Donne un exemple d'addition en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule 2/5 + 3/5',
              answer: '2/5 + 3/5 = 5/5 = 1'
            },
            {
              type: 'calculation',
              question: 'Calcule 1/3 + 1/4',
              answer: '1/3 + 1/4 = 4/12 + 3/12 = 7/12'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch5-s2',
          title: 'Multiplication des fractions',
          description: 'Apprendre à multiplier des fractions',
          concepts: ['Multiplication de fractions', 'Produit', 'Simplification', 'Règle générale'],
          objectives: [
            'Multiplier des fractions',
            'Comprendre la règle de multiplication',
            'Utiliser des exemples visuels'
          ],
          content: {
            rule: {
              general: '(a/b) × (c/d) = (a×c)/(b×d)',
              explanation: 'On multiplie les numérateurs entre eux et les dénominateurs entre eux'
            },
            visual_example: {
              context: 'Rectangle de dimensions 4/5 et 2/3',
              method: 'Grand rectangle: 15 petits carreaux (5×3)',
              result: 'Rectangle hachuré: 8 carreaux (4×2)',
              fraction: '8/15 = (4×2)/(5×3)'
            },
            examples: {
              example1: '2/3 × 3/4 = 6/12 = 1/2',
              example2: '5/6 × 2/7 = 10/42 = 5/21',
              example3: '3/8 × 4/9 = 12/72 = 1/6'
            },
            simplification: {
              method: 'Simplifier avant ou après la multiplication',
              example: '3/4 × 2/6 = 6/24 = 1/4 ou 3/4 × 1/3 = 3/12 = 1/4'
            },
            mauritanianContext: [
              'Calculs d\'aires de champs',
              'Proportions de récoltes',
              'Calculs de volumes',
              'Problèmes de construction'
            ]
          },
          questions: [
            "Quelle est la règle de multiplication des fractions?",
            "Comment multiplies-tu 2/3 × 3/4?",
            "Peux-tu simplifier avant de multiplier?",
            "Calcule 5/6 × 2/7",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule 3/4 × 2/5',
              answer: '3/4 × 2/5 = 6/20 = 3/10'
            },
            {
              type: 'simplification',
              question: 'Calcule 4/7 × 3/8',
              answer: '4/7 × 3/8 = 12/56 = 3/14'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch5-s3',
          title: 'Division des fractions',
          description: 'Apprendre à diviser des fractions',
          concepts: ['Division de fractions', 'Inverse', 'Produit en croix', 'Règle'],
          objectives: [
            'Diviser des fractions',
            'Comprendre la règle de division',
            'Utiliser l\'inverse'
          ],
          content: {
            rule: {
              general: '(a/b) ÷ (c/d) = (a/b) × (d/c) = (a×d)/(b×c)',
              explanation: 'Diviser par une fraction = multiplier par son inverse'
            },
            inverse: {
              definition: 'L\'inverse de c/d est d/c',
              example: 'L\'inverse de 3/4 est 4/3',
              verification: '3/4 × 4/3 = 12/12 = 1'
            },
            examples: {
              example1: '2/3 ÷ 1/4 = 2/3 × 4/1 = 8/3',
              example2: '5/6 ÷ 2/3 = 5/6 × 3/2 = 15/12 = 5/4',
              example3: '7/8 ÷ 4/5 = 7/8 × 5/4 = 35/32'
            },
            method: {
              step1: 'Identifier la fraction diviseur',
              step2: 'Calculer son inverse',
              step3: 'Multiplier par l\'inverse',
              step4: 'Simplifier si possible'
            },
            mauritanianContext: [
              'Calculs de rendements',
              'Proportions de mélanges',
              'Calculs de vitesses',
              'Problèmes de partage'
            ]
          },
          questions: [
            "Comment divise-t-on des fractions?",
            "Qu'est-ce que l'inverse d'une fraction?",
            "Calcule 2/3 ÷ 1/4",
            "Vérifie que 3/4 × 4/3 = 1",
            "Donne un exemple de division en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule 3/4 ÷ 1/2',
              answer: '3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2'
            },
            {
              type: 'inverse',
              question: 'Quel est l\'inverse de 5/7?',
              answer: '7/5'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch5-s4',
          title: 'Propriétés des opérations',
          description: 'Comprendre les propriétés des opérations sur les fractions',
          concepts: ['Commutativité', 'Associativité', 'Distributivité', 'Élément neutre'],
          objectives: [
            'Connaître les propriétés des opérations',
            'Appliquer les propriétés dans les calculs',
            'Simplifier des expressions'
          ],
          content: {
            addition: {
              commutativity: 'a/b + c/d = c/d + a/b',
              associativity: '(a/b + c/d) + e/f = a/b + (c/d + e/f)',
              neutral: 'a/b + 0 = a/b',
              opposite: 'a/b + (-a/b) = 0'
            },
            multiplication: {
              commutativity: 'a/b × c/d = c/d × a/b',
              associativity: '(a/b × c/d) × e/f = a/b × (c/d × e/f)',
              neutral: 'a/b × 1 = a/b',
              inverse: 'a/b × b/a = 1 (si a ≠ 0)'
            },
            distributivity: {
              rule: 'a/b × (c/d + e/f) = a/b × c/d + a/b × e/f',
              example: '2/3 × (1/4 + 1/6) = 2/3 × 1/4 + 2/3 × 1/6'
            },
            mauritanianContext: [
              'Calculs de budgets familiaux',
              'Distributions de ressources',
              'Calculs de proportions',
              'Problèmes de partage'
            ]
          },
          questions: [
            "Quelles sont les propriétés de l'addition?",
            "Quelles sont les propriétés de la multiplication?",
            "Qu'est-ce que la distributivité?",
            "Calcule 2/3 × (1/4 + 1/6)",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'property',
              question: 'Vérifie: 2/3 + 1/4 = 1/4 + 2/3',
              answer: '2/3 + 1/4 = 8/12 + 3/12 = 11/12, 1/4 + 2/3 = 3/12 + 8/12 = 11/12 ✓'
            },
            {
              type: 'distributivity',
              question: 'Calcule 3/4 × (1/2 + 1/3)',
              answer: '3/4 × (1/2 + 1/3) = 3/4 × 5/6 = 15/24 = 5/8'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch5-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les opérations avec les fractions',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec des fractions',
            'Utiliser les propriétés des opérations',
            'Vérifier les calculs'
          ],
          content: {
            problems: [
              {
                type: 'sharing',
                context: 'Partage de récolte familiale',
                question: 'Une récolte de 120 kg: 1/3 pour la famille, 1/4 pour la vente, le reste pour les semences. Calcule chaque part',
                solution: 'Famille: 120 × 1/3 = 40 kg, Vente: 120 × 1/4 = 30 kg, Semences: 120 - 40 - 30 = 50 kg'
              },
              {
                type: 'calculation',
                context: 'Calcul de superficie',
                question: 'Un champ de 2/3 d\'hectare est divisé en 4 parts égales. Quelle est la superficie de chaque part?',
                solution: '2/3 ÷ 4 = 2/3 × 1/4 = 2/12 = 1/6 hectare'
              }
            ],
            mauritanianContext: [
              'Partage de récoltes familiales',
              'Calculs de superficies de champs',
              'Distributions de ressources',
              'Problèmes agricoles'
            ]
          },
          questions: [
            "Résous ce problème de partage de récolte",
            "Calcule la superficie de chaque part",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu les propriétés des opérations?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Un budget de 600 MRU: 1/2 pour la nourriture, 1/3 pour les vêtements, le reste pour l\'épargne. Calcule chaque part',
              answer: 'Nourriture: 300 MRU, Vêtements: 200 MRU, Épargne: 100 MRU'
            },
            {
              type: 'verification',
              question: 'Vérifie: 1/2 + 1/3 + 1/6 = 1',
              answer: '3/6 + 2/6 + 1/6 = 6/6 = 1 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch6',
      title: 'CALCUL LITTÉRAL',
      sections: [
        {
          id: 'ch6-s1',
          title: 'Expression de l\'aire d\'un trapèze',
          description: 'Découvrir le calcul littéral à partir d\'un problème géométrique',
          concepts: ['Calcul littéral', 'Expression algébrique', 'Variable', 'Formule'],
          objectives: [
            'Comprendre la notion de calcul littéral',
            'Utiliser des lettres pour représenter des nombres',
            'Calculer avec des expressions littérales'
          ],
          content: {
            formula: {
              trapèze: 'Aire = (a + b) × h / 2',
              variables: 'a = petite base, b = grande base, h = hauteur',
              example: 'Si a = 1,2 cm, b = 1,3 cm, h = 1 cm',
              calculation: 'Aire = (1,2 + 1,3) × 1 / 2 = 1,25 cm²'
            },
            table: {
              data: [
                { a: '1,2', b: '1,3', h: '1', aire: '1,25' },
                { a: '1,5', b: '1,8', h: '1', aire: '1,65' },
                { a: '1,8', b: '2', h: '1', aire: '1,9' },
                { a: '2', b: '3', h: '1,5', aire: '3,75' },
                { a: '3', b: '3,5', h: '1,2', aire: '3,9' }
              ]
            },
            mauritanianContext: [
              'Calculs d\'aires de champs',
              'Mesures de terrain',
              'Problèmes de construction',
              'Géométrie pratique'
            ]
          },
          questions: [
            "Qu'est-ce que le calcul littéral?",
            "Que représentent les lettres a, b, h?",
            "Comment calcule-t-on l'aire d'un trapèze?",
            "Calcule l'aire si a=2, b=4, h=3",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule l\'aire d\'un trapèze avec a=3, b=5, h=2',
              answer: 'Aire = (3 + 5) × 2 / 2 = 8 cm²'
            },
            {
              type: 'formula',
              question: 'Écris la formule de l\'aire d\'un rectangle',
              answer: 'Aire = L × l (longueur × largeur)'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch6-s2',
          title: 'Réduction d\'expressions',
          description: 'Apprendre à simplifier des expressions littérales',
          concepts: ['Réduction', 'Termes semblables', 'Simplification', 'Coefficient'],
          objectives: [
            'Identifier les termes semblables',
            'Réduire des expressions littérales',
            'Simplifier des calculs'
          ],
          content: {
            example: {
              problem: 'Périmètre du polygone ABEFGHDC',
              given: 'AB = 3x, BE = 5x, EF = 5x, FG = 3x, GH = 5x, HD = 5x, DC = 3x, CA = 5x',
              expression: 'P = AB + BE + EF + FG + GH + HD + DC + CA',
              substitution: 'P = 3x + 5x + 5x + 3x + 5x + 5x + 3x + 5x',
              reduction: 'P = (3+5+5+3+5+5+3+5)x = 33x'
            },
            method: {
              step1: 'Identifier les termes semblables',
              step2: 'Grouper les coefficients',
              step3: 'Additionner les coefficients',
              step4: 'Écrire le résultat simplifié'
            },
            mauritanianContext: [
              'Calculs de périmètres de champs',
              'Mesures de clôtures',
              'Problèmes de construction',
              'Géométrie agricole'
            ]
          },
          questions: [
            "Comment réduit-on une expression?",
            "Qu'est-ce qu'un terme semblable?",
            "Réduis: 2x + 3x + 5x",
            "Simplifie: 4a + 2a + 7a",
            "Donne un exemple de réduction en Mauritanie"
          ],
          exercises: [
            {
              type: 'reduction',
              question: 'Réduis: 3x + 2x + 5x + x',
              answer: '3x + 2x + 5x + x = (3+2+5+1)x = 11x'
            },
            {
              type: 'simplification',
              question: 'Simplifie: 4a + 3b + 2a + 5b',
              answer: '4a + 3b + 2a + 5b = 6a + 8b'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch6-s3',
          title: 'Développement et factorisation',
          description: 'Apprendre les techniques de développement et factorisation',
          concepts: ['Développement', 'Factorisation', 'Distributivité', 'Identités remarquables'],
          objectives: [
            'Développer des expressions',
            'Factoriser des expressions',
            'Utiliser les identités remarquables'
          ],
          content: {
            distributivity: {
              simple: {
                rule: 'a(x + y) = ax + ay et a(x - y) = ax - ay',
                example: '3(x + 2) = 3x + 6'
              },
              double: {
                rule: '(a + b)(x + y) = ax + ay + bx + by',
                example: '(2 + 3)(x + 1) = 2x + 2 + 3x + 3 = 5x + 5'
              }
            },
            identities: {
              square_sum: '(a + b)² = a² + 2ab + b²',
              square_diff: '(a - b)² = a² - 2ab + b²',
              difference: '(a + b)(a - b) = a² - b²'
            },
            examples: {
              develop: '(x + 3)² = x² + 6x + 9',
              factor: 'x² + 6x + 9 = (x + 3)²',
              verify: 'x² - 4 = (x + 2)(x - 2)'
            },
            mauritanianContext: [
              'Calculs d\'aires de champs',
              'Problèmes de construction',
              'Géométrie pratique',
              'Calculs d\'ingénierie'
            ]
          },
          questions: [
            "Comment développe-t-on (x + 2)²?",
            "Qu'est-ce que la distributivité?",
            "Factorise x² - 9",
            "Développe (a + 3)(a - 3)",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'development',
              question: 'Développe: (x + 4)²',
              answer: '(x + 4)² = x² + 8x + 16'
            },
            {
              type: 'factorization',
              question: 'Factorise: x² - 16',
              answer: 'x² - 16 = (x + 4)(x - 4)'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch6-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur le calcul littéral',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec le calcul littéral',
            'Vérifier les calculs',
            'Utiliser les contextes mauritaniens'
          ],
          content: {
            problems: [
              {
                type: 'perimeter',
                context: 'Clôture d\'un champ rectangulaire',
                question: 'Un champ rectangulaire a pour longueur 2x + 3 et largeur x + 1. Exprime son périmètre',
                solution: 'P = 2(2x + 3) + 2(x + 1) = 4x + 6 + 2x + 2 = 6x + 8'
              },
              {
                type: 'area',
                context: 'Aire d\'un champ carré',
                question: 'Un champ carré a pour côté x + 2. Exprime son aire',
                solution: 'Aire = (x + 2)² = x² + 4x + 4'
              }
            ],
            mauritanianContext: [
              'Calculs de périmètres de champs',
              'Aires de terrains agricoles',
              'Problèmes de construction',
              'Géométrie pratique'
            ]
          },
          questions: [
            "Résous ce problème de clôture",
            "Calcule l'aire du champ carré",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu le calcul littéral?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Un rectangle a pour longueur 3x + 2 et largeur x + 1. Calcule son périmètre',
              answer: 'P = 2(3x + 2) + 2(x + 1) = 6x + 4 + 2x + 2 = 8x + 6'
            },
            {
              type: 'verification',
              question: 'Vérifie: (x + 3)² = x² + 6x + 9',
              answer: '(x + 3)² = (x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch7',
      title: 'ÉQUATIONS DU PREMIER DEGRÉ',
      sections: [
        {
          id: 'ch7-s1',
          title: 'Balance avec masses',
          description: 'Découvrir les équations à partir d\'un problème de balance',
          concepts: ['Équation', 'Balance', 'Masse', 'Inconnue', 'Égalité'],
          objectives: [
            'Comprendre la notion d\'équation',
            'Mettre en équation un problème',
            'Résoudre des équations simples'
          ],
          content: {
            problem: {
              context: 'Balance avec masses',
              plateau1: '2 kg',
              plateau2: '500 g + 8×100 g + objet A',
              question: 'Quelle est la masse de l\'objet A?'
            },
            solution: {
              step1: 'Conversion: 2 kg = 2000 g, 500 g, 8×100 g = 800 g',
              step2: 'Équation: 2000 = 500 + 800 + x',
              step3: 'Simplification: 2000 = 1300 + x',
              step4: 'Résolution: x = 2000 - 1300 = 700 g'
            },
            method: {
              step1: 'Identifier l\'inconnue',
              step2: 'Mettre en équation',
              step3: 'Résoudre l\'équation',
              step4: 'Vérifier la solution'
            },
            mauritanianContext: [
              'Pesées au marché',
              'Calculs de masses',
              'Problèmes de commerce',
              'Mesures traditionnelles'
            ]
          },
          questions: [
            "Qu'est-ce qu'une équation?",
            "Comment mets-tu ce problème en équation?",
            "Résous l'équation 2000 = 1300 + x",
            "Vérifie ta solution",
            "Donne un exemple d'équation en Mauritanie"
          ],
          exercises: [
            {
              type: 'equation',
              question: 'Résous: x + 15 = 25',
              answer: 'x = 25 - 15 = 10'
            },
            {
              type: 'verification',
              question: 'Vérifie: 10 + 15 = 25',
              answer: '10 + 15 = 25 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch7-s2',
          title: 'Problème d\'âges',
          description: 'Résoudre un problème d\'âges avec mise en équation',
          concepts: ['Problème d\'âges', 'Mise en équation', 'Résolution', 'Vérification'],
          objectives: [
            'Mettre en équation un problème d\'âges',
            'Résoudre l\'équation',
            'Vérifier la solution'
          ],
          content: {
            problem: {
              context: 'Famille mauritanienne',
              statement: 'L\'âge de Khadi dépasse de 3 ans le double de l\'âge de son frère El Hadj. La différence d\'âge est de 10 ans.',
              question: 'Quels sont les âges de Khadi et El Hadj?'
            },
            solution: {
              step1: 'Choix de l\'inconnue: Soit x l\'âge d\'El Hadj',
              step2: 'Âge de Khadi: 2x + 3',
              step3: 'Différence: (2x + 3) - x = 10',
              step4: 'Équation: x + 3 = 10',
              step5: 'Résolution: x = 10 - 3 = 7 ans',
              step6: 'Vérification: El Hadj: 7 ans, Khadi: 2×7 + 3 = 17 ans, Différence: 17 - 7 = 10 ans ✓'
            },
            method: {
              step1: 'Lire attentivement le problème',
              step2: 'Identifier l\'inconnue',
              step3: 'Exprimer les autres quantités en fonction de l\'inconnue',
              step4: 'Mettre en équation',
              step5: 'Résoudre',
              step6: 'Vérifier'
            },
            mauritanianContext: [
              'Problèmes familiaux',
              'Calculs d\'âges',
              'Relations familiales',
              'Traditions mauritaniennes'
            ]
          },
          questions: [
            "Comment mets-tu ce problème en équation?",
            "Quelle est l'inconnue?",
            "Résous l'équation x + 3 = 10",
            "Vérifie ta solution",
            "Donne un autre exemple de problème d'âges"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Ahmed a 5 ans de plus que son frère. La somme de leurs âges est 25 ans. Trouve leurs âges',
              answer: 'Soit x l\'âge du frère: x + (x + 5) = 25, 2x + 5 = 25, x = 10. Frère: 10 ans, Ahmed: 15 ans'
            },
            {
              type: 'verification',
              question: 'Vérifie: 10 + 15 = 25 et 15 - 10 = 5',
              answer: '10 + 15 = 25 ✓ et 15 - 10 = 5 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch7-s3',
          title: 'Types d\'équations',
          description: 'Apprendre les différents types d\'équations du premier degré',
          concepts: ['Types d\'équations', 'Résolution', 'Méthodes', 'Solutions'],
          objectives: [
            'Identifier les types d\'équations',
            'Résoudre chaque type',
            'Utiliser les méthodes appropriées'
          ],
          content: {
            types: {
              type1: {
                form: 'x + a = b',
                solution: 'x = b - a',
                example: 'x + 5 = 12 → x = 12 - 5 = 7'
              },
              type2: {
                form: 'ax = b',
                solution: 'x = b/a (a ≠ 0)',
                example: '3x = 15 → x = 15/3 = 5'
              },
              type3: {
                form: 'ax + b = c',
                solution: 'x = (c - b)/a (a ≠ 0)',
                example: '2x + 3 = 11 → x = (11 - 3)/2 = 4'
              }
            },
            properties: {
              addition: 'Si a = b, alors a + c = b + c',
              multiplication: 'Si a = b, alors a × c = b × c'
            },
            mauritanianContext: [
              'Problèmes de commerce',
              'Calculs de prix',
              'Problèmes de partage',
              'Calculs financiers'
            ]
          },
          questions: [
            "Quels sont les types d'équations?",
            "Comment résous-tu x + 3 = 8?",
            "Résous 4x = 20",
            "Résous 2x + 5 = 13",
            "Donne un exemple de chaque type en Mauritanie"
          ],
          exercises: [
            {
              type: 'type1',
              question: 'Résous: x + 7 = 15',
              answer: 'x = 15 - 7 = 8'
            },
            {
              type: 'type2',
              question: 'Résous: 5x = 25',
              answer: 'x = 25/5 = 5'
            },
            {
              type: 'type3',
              question: 'Résous: 3x + 4 = 16',
              answer: 'x = (16 - 4)/3 = 4'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch7-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les équations',
          concepts: ['Application', 'Problèmes concrets', 'Résolution', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec des équations',
            'Vérifier les solutions',
            'Utiliser les contextes mauritaniens'
          ],
          content: {
            problems: [
              {
                type: 'commerce',
                context: 'Commerce de Nouakchott',
                question: 'Un commerçant achète des dattes à 150 MRU/kg et les revend avec 20% de bénéfice. Le prix de vente est 180 MRU/kg. Combien a-t-il acheté de kg?',
                solution: 'Soit x le nombre de kg: 150x + 0,2×150x = 180x, 150x + 30x = 180x, 180x = 180x. Tous les x conviennent.'
              },
              {
                type: 'partage',
                context: 'Partage de terrain familial',
                question: 'Un terrain de 24 hectares est partagé entre 3 frères. Le premier a 1/3, le second a 1/4, et le troisième a le reste. Calcule la part de chacun',
                solution: '1er: 24×1/3 = 8 ha, 2ème: 24×1/4 = 6 ha, 3ème: 24 - 8 - 6 = 10 ha'
              }
            ],
            mauritanianContext: [
              'Problèmes de commerce local',
              'Partage de terres familiales',
              'Calculs financiers',
              'Problèmes de partage'
            ]
          },
          questions: [
            "Résous ce problème de commerce",
            "Calcule le partage du terrain",
            "Vérifie tes solutions",
            "Donne un autre exemple",
            "Comment utilises-tu les équations?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Un champ de 30 hectares: 2/5 pour le riz, 1/3 pour le mil, le reste pour les légumes. Calcule chaque part',
              answer: 'Riz: 12 ha, Mil: 10 ha, Légumes: 8 ha'
            },
            {
              type: 'verification',
              question: 'Vérifie: 12 + 10 + 8 = 30',
              answer: '12 + 10 + 8 = 30 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch8',
      title: 'REPÉRAGE SUR UN AXE',
      sections: [
        {
          id: 'ch8-s1',
          title: 'Mesure algébrique',
          description: 'Comprendre la notion de mesure algébrique sur un axe',
          concepts: ['Mesure algébrique', 'Axe', 'Abscisse', 'Distance', 'Signe'],
          objectives: [
            'Comprendre la mesure algébrique',
            'Calculer des mesures algébriques',
            'Interpréter les signes'
          ],
          content: {
            definition: {
              rule: 'Pour deux points A et B d\'abscisses xA et xB: AB̅ = xB - xA',
              explanation: 'La mesure algébrique est la différence des abscisses',
              signe: 'Positif si B est à droite de A, négatif si B est à gauche de A'
            },
            examples: {
              table: [
                { xA: '8', xB: '-2', xA_xB: '10', xB_xA: '-10', AB: '10' },
                { xA: '-2', xB: '-2', xA_xB: '0', xB_xA: '0', AB: '0' },
                { xA: '2,5', xB: '1,5', xA_xB: '1', xB_xA: '-1', AB: '1' },
                { xA: '3,5', xB: '-2,5', xA_xB: '6', xB_xA: '-6', AB: '6' }
              ]
            },
            properties: {
              distance: 'AB = |AB̅| (valeur absolue)',
              signe: 'AB̅ = -BA̅',
              zero: 'AA̅ = 0'
            },
            mauritanianContext: [
              'Mesures de distances',
              'Calculs de déplacements',
              'Navigation',
              'Problèmes de géométrie'
            ]
          },
          questions: [
            "Qu'est-ce que la mesure algébrique?",
            "Comment calcule-t-on AB̅?",
            "Que signifie un signe négatif?",
            "Calcule AB̅ si A(3) et B(7)",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule AB̅ si A(2) et B(5)',
              answer: 'AB̅ = 5 - 2 = 3'
            },
            {
              type: 'calculation',
              question: 'Calcule AB̅ si A(4) et B(1)',
              answer: 'AB̅ = 1 - 4 = -3'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch8-s2',
          title: 'Relation de Chasles',
          description: 'Comprendre et utiliser la relation de Chasles',
          concepts: ['Relation de Chasles', 'Addition', 'Démonstration', 'Application'],
          objectives: [
            'Comprendre la relation de Chasles',
            'L\'utiliser dans les calculs',
            'Vérifier la démonstration'
          ],
          content: {
            relation: {
              statement: 'Pour trois points A, B, C sur un axe: AB̅ + BC̅ = AC̅',
              demonstration: 'AB̅ = xB - xA, BC̅ = xC - xB, AB̅ + BC̅ = (xB - xA) + (xC - xB) = xC - xA = AC̅'
            },
            examples: {
              example1: 'A(2), B(5), C(8): AB̅ = 3, BC̅ = 3, AC̅ = 6, vérification: 3 + 3 = 6 ✓',
              example2: 'A(-1), B(3), C(7): AB̅ = 4, BC̅ = 4, AC̅ = 8, vérification: 4 + 4 = 8 ✓'
            },
            applications: {
              calculation: 'Calculer AC̅ quand on connaît AB̅ et BC̅',
              verification: 'Vérifier des calculs de mesures algébriques',
              simplification: 'Simplifier des expressions avec des mesures algébriques'
            },
            mauritanianContext: [
              'Calculs de distances',
              'Navigation',
              'Problèmes de géométrie',
              'Mesures de terrain'
            ]
          },
          questions: [
            "Qu'est-ce que la relation de Chasles?",
            "Comment la démontres-tu?",
            "Vérifie avec A(1), B(4), C(7)",
            "Calcule AC̅ si AB̅ = 3 et BC̅ = 5",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'verification',
              question: 'Vérifie la relation de Chasles avec A(2), B(5), C(9)',
              answer: 'AB̅ = 3, BC̅ = 4, AC̅ = 7, vérification: 3 + 4 = 7 ✓'
            },
            {
              type: 'calculation',
              question: 'Calcule AC̅ si AB̅ = 2 et BC̅ = 6',
              answer: 'AC̅ = AB̅ + BC̅ = 2 + 6 = 8'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch8-s3',
          title: 'Milieu d\'un segment',
          description: 'Calculer les coordonnées du milieu d\'un segment',
          concepts: ['Milieu', 'Segment', 'Coordonnées', 'Formule'],
          objectives: [
            'Comprendre la notion de milieu',
            'Calculer les coordonnées du milieu',
            'Utiliser la formule'
          ],
          content: {
            definition: {
              milieu: 'Point M tel que AM = MB',
              formule: 'xM = (xA + xB)/2',
              explanation: 'L\'abscisse du milieu est la moyenne des abscisses des extrémités'
            },
            examples: {
              example1: 'A(2), B(8): xM = (2 + 8)/2 = 5',
              example2: 'A(-3), B(7): xM = (-3 + 7)/2 = 2',
              example3: 'A(1,5), B(4,5): xM = (1,5 + 4,5)/2 = 3'
            },
            verification: {
              method: 'Vérifier que AM = MB',
              example: 'A(2), B(8), M(5): AM = 5-2 = 3, MB = 8-5 = 3 ✓'
            },
            mauritanianContext: [
              'Calculs de distances',
              'Problèmes de géométrie',
              'Mesures de terrain',
              'Navigation'
            ]
          },
          questions: [
            "Qu'est-ce que le milieu d'un segment?",
            "Quelle est la formule pour calculer xM?",
            "Calcule le milieu de A(3) et B(9)",
            "Vérifie que AM = MB",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule le milieu de A(1) et B(7)',
              answer: 'xM = (1 + 7)/2 = 4'
            },
            {
              type: 'verification',
              question: 'Vérifie que M(4) est le milieu de A(1) et B(7)',
              answer: 'AM = 4-1 = 3, MB = 7-4 = 3, donc AM = MB ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch8-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur le repérage',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes de repérage',
            'Utiliser les formules',
            'Vérifier les calculs'
          ],
          content: {
            problems: [
              {
                type: 'distance',
                context: 'Distance entre deux villes',
                question: 'Sur une route, Nouakchott est à l\'abscisse 0, Nouadhibou à l\'abscisse 400. Quelle est la distance?',
                solution: 'Distance = |400 - 0| = 400 km'
              },
              {
                type: 'milieu',
                context: 'Ville située au milieu',
                question: 'Entre Nouakchott (0) et Nouadhibou (400), quelle est l\'abscisse de la ville située au milieu?',
                solution: 'xM = (0 + 400)/2 = 200 km'
              }
            ],
            mauritanianContext: [
              'Distances entre villes mauritaniennes',
              'Calculs de navigation',
              'Problèmes de géométrie',
              'Mesures de terrain'
            ]
          },
          questions: [
            "Résous ce problème de distance",
            "Calcule l'abscisse du milieu",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu le repérage?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'A(10), B(30), C(50). Calcule AB̅, BC̅, AC̅ et vérifie la relation de Chasles',
              answer: 'AB̅ = 20, BC̅ = 20, AC̅ = 40, vérification: 20 + 20 = 40 ✓'
            },
            {
              type: 'verification',
              question: 'Vérifie que M(20) est le milieu de A(10) et B(30)',
              answer: 'AM = 10, MB = 10, donc AM = MB ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch9',
      title: 'LES ANGLES',
      sections: [
        {
          id: 'ch9-s1',
          title: 'Construction et mesure',
          description: 'Apprendre à construire et mesurer des angles',
          concepts: ['Angle', 'Construction', 'Mesure', 'Rapporteur', 'Degrés'],
          objectives: [
            'Construire des angles',
            'Mesurer des angles',
            'Utiliser le rapporteur'
          ],
          content: {
            construction: {
              method: 'Utiliser le rapporteur',
              steps: [
                'Placer le centre du rapporteur sur le sommet',
                'Aligner le zéro avec un côté',
                'Lire la mesure sur l\'autre côté'
              ]
            },
            types: {
              aigu: 'Angle < 90°',
              droit: 'Angle = 90°',
              obtus: 'Angle > 90° et < 180°',
              plat: 'Angle = 180°'
            },
            examples: {
              example1: 'Angle de 45° (aigu)',
              example2: 'Angle de 90° (droit)',
              example3: 'Angle de 120° (obtus)',
              example4: 'Angle de 180° (plat)'
            },
            mauritanianContext: [
              'Construction de bâtiments',
              'Mesures d\'angles de terrain',
              'Problèmes de géométrie',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Comment construis-tu un angle?",
            "Comment mesures-tu un angle?",
            "Quels sont les types d'angles?",
            "Construis un angle de 60°",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'construction',
              question: 'Construis un angle de 30°',
              answer: 'Utiliser le rapporteur: placer le centre sur le sommet, aligner le zéro avec un côté, marquer 30°'
            },
            {
              type: 'measurement',
              question: 'Mesure cet angle',
              answer: 'Placer le rapporteur, lire la mesure sur l\'échelle'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch9-s2',
          title: 'Angles complémentaires et supplémentaires',
          description: 'Comprendre les relations entre les angles',
          concepts: ['Angles complémentaires', 'Angles supplémentaires', 'Somme', 'Relations'],
          objectives: [
            'Identifier les angles complémentaires',
            'Identifier les angles supplémentaires',
            'Calculer des angles manquants'
          ],
          content: {
            complementaires: {
              definition: 'Deux angles dont la somme est 90°',
              example: 'Angle A = 38°, Angle B = 52°, A + B = 38° + 52° = 90°',
              notation: 'A et B sont complémentaires'
            },
            supplementaires: {
              definition: 'Deux angles dont la somme est 180°',
              example: 'Angle C = 120°, Angle D = 60°, C + D = 120° + 60° = 180°',
              notation: 'C et D sont supplémentaires'
            },
            calculs: {
              complementaire: 'Si A = 35°, son complémentaire = 90° - 35° = 55°',
              supplementaire: 'Si B = 110°, son supplémentaire = 180° - 110° = 70°'
            },
            mauritanianContext: [
              'Problèmes de géométrie',
              'Construction de bâtiments',
              'Calculs d\'angles',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Qu'est-ce qu'un angle complémentaire?",
            "Qu'est-ce qu'un angle supplémentaire?",
            "Calcule le complémentaire de 25°",
            "Calcule le supplémentaire de 100°",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'complementaire',
              question: 'Calcule le complémentaire de 40°',
              answer: '90° - 40° = 50°'
            },
            {
              type: 'supplementaire',
              question: 'Calcule le supplémentaire de 75°',
              answer: '180° - 75° = 105°'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch9-s3',
          title: 'Angles opposés par le sommet',
          description: 'Comprendre les angles opposés par le sommet',
          concepts: ['Angles opposés', 'Sommet', 'Égalité', 'Démonstration'],
          objectives: [
            'Identifier les angles opposés par le sommet',
            'Comprendre qu\'ils sont égaux',
            'Utiliser cette propriété'
          ],
          content: {
            definition: {
              angles_opposes: 'Deux angles formés par deux droites sécantes, situés de part et d\'autre du point d\'intersection',
              propriete: 'Les angles opposés par le sommet sont égaux'
            },
            construction: {
              step1: 'Tracer deux droites sécantes en O',
              step2: 'Identifier les angles opposés par le sommet',
              step3: 'Mesurer les angles',
              step4: 'Vérifier qu\'ils sont égaux'
            },
            demonstration: {
              method: 'Utiliser les angles supplémentaires',
              example: 'Si A et B sont supplémentaires, et B et C sont supplémentaires, alors A = C'
            },
            mauritanianContext: [
              'Problèmes de géométrie',
              'Construction de bâtiments',
              'Calculs d\'angles',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Qu'est-ce qu'un angle opposé par le sommet?",
            "Quelle est leur propriété?",
            "Construis deux droites sécantes et identifie les angles opposés",
            "Vérifie qu'ils sont égaux",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Dans deux droites sécantes, identifie les angles opposés par le sommet',
              answer: 'Les angles situés de part et d\'autre du point d\'intersection'
            },
            {
              type: 'verification',
              question: 'Vérifie que les angles opposés par le sommet sont égaux',
              answer: 'Mesurer avec le rapporteur et constater l\'égalité'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch9-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les angles',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec des angles',
            'Utiliser les propriétés',
            'Vérifier les calculs'
          ],
          content: {
            problems: [
              {
                type: 'complementaires',
                context: 'Construction d\'un bâtiment',
                question: 'Dans un angle droit, on trace une bissectrice. Quels sont les angles formés?',
                solution: 'La bissectrice divise l\'angle droit en deux angles de 45° chacun'
              },
              {
                type: 'supplementaires',
                context: 'Problème de géométrie',
                question: 'Deux angles sont supplémentaires. L\'un mesure 3x et l\'autre 2x. Trouve leurs mesures',
                solution: '3x + 2x = 180°, 5x = 180°, x = 36°. Les angles mesurent 108° et 72°'
              }
            ],
            mauritanianContext: [
              'Construction de bâtiments',
              'Problèmes de géométrie',
              'Calculs d\'angles',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Résous ce problème de bissectrice",
            "Calcule les mesures des angles",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu les propriétés des angles?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Deux angles sont complémentaires. L\'un mesure 2x et l\'autre 3x. Trouve leurs mesures',
              answer: '2x + 3x = 90°, 5x = 90°, x = 18°. Les angles mesurent 36° et 54°'
            },
            {
              type: 'verification',
              question: 'Vérifie: 36° + 54° = 90°',
              answer: '36° + 54° = 90° ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch10',
      title: 'POLYGONES',
      sections: [
        {
          id: 'ch10-s1',
          title: 'Identification des polygones',
          description: 'Apprendre à identifier et classer les polygones',
          concepts: ['Polygone', 'Côtés', 'Sommets', 'Classification'],
          objectives: [
            'Identifier les polygones',
            'Classer les polygones',
            'Comprendre les critères'
          ],
          content: {
            definition: {
              polygone: 'Figure plane fermée composée uniquement de segments',
              criteres: [
                'Figure plane fermée',
                'Composée uniquement de segments',
                'Chaque segment a exactement deux extrémités communes'
              ]
            },
            classification: {
              triangle: '3 côtés',
              quadrilatere: '4 côtés',
              pentagone: '5 côtés',
              hexagone: '6 côtés',
              heptagone: '7 côtés',
              octogone: '8 côtés'
            },
            examples: {
              polygones: ['Triangle', 'Carré', 'Rectangle', 'Pentagone', 'Hexagone'],
              non_polygones: ['Cercle', 'Courbe', 'Figure ouverte']
            },
            mauritanianContext: [
              'Formes de bâtiments',
              'Motifs décoratifs',
              'Problèmes de géométrie',
              'Construction'
            ]
          },
          questions: [
            "Qu'est-ce qu'un polygone?",
            "Quels sont les critères d'un polygone?",
            "Classe ces figures: triangle, carré, cercle",
            "Combien de côtés a un hexagone?",
            "Donne un exemple de polygone en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Quelles sont les figures polygones: triangle, carré, cercle, rectangle?',
              answer: 'Polygones: triangle, carré, rectangle | Non-polygone: cercle'
            },
            {
              type: 'classification',
              question: 'Classe par nombre de côtés: triangle, carré, pentagone',
              answer: 'Triangle: 3 côtés, Carré: 4 côtés, Pentagone: 5 côtés'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch10-s2',
          title: 'Calcul d\'aire de trapèze',
          description: 'Apprendre à calculer l\'aire d\'un trapèze',
          concepts: ['Trapèze', 'Aire', 'Bases', 'Hauteur', 'Formule'],
          objectives: [
            'Comprendre la formule de l\'aire du trapèze',
            'Calculer des aires',
            'Utiliser la méthode par quadrillage'
          ],
          content: {
            definition: {
              trapeze: 'Quadrilatère convexe ayant deux côtés opposés parallèles appelés bases',
              bases: 'B = grande base, b = petite base',
              hauteur: 'h = distance entre les deux bases'
            },
            formule: {
              aire: 'A = (B + b) × h / 2',
              explanation: 'Aire = demi-somme des bases × hauteur'
            },
            methode_quadrillage: {
              step1: 'Placer le trapèze sur un quadrillage 1cm × 1cm',
              step2: 'Compter les carreaux entiers',
              step3: 'Estimer les carreaux partiels',
              step4: 'Vérifier avec la formule'
            },
            exemple: {
              donnees: 'B = 20cm, b = 12cm, h = 10cm',
              calcul: 'A = (20 + 12) × 10 / 2 = 32 × 5 = 160 cm²'
            },
            mauritanianContext: [
              'Calculs d\'aires de champs',
              'Mesures de terrain',
              'Problèmes agricoles',
              'Construction'
            ]
          },
          questions: [
            "Qu'est-ce qu'un trapèze?",
            "Quelle est la formule de son aire?",
            "Calcule l'aire d'un trapèze avec B=15, b=9, h=6",
            "Comment utilises-tu le quadrillage?",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule l\'aire d\'un trapèze avec B=10, b=6, h=4',
              answer: 'A = (10 + 6) × 4 / 2 = 16 × 2 = 32 cm²'
            },
            {
              type: 'verification',
              question: 'Vérifie avec le quadrillage',
              answer: 'Compter les carreaux et comparer avec le calcul'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch10-s3',
          title: 'Construction d\'hexagone régulier',
          description: 'Apprendre à construire un hexagone régulier',
          concepts: ['Hexagone régulier', 'Construction', 'Cercle', 'Compas', 'Angles'],
          objectives: [
            'Construire un hexagone régulier',
            'Utiliser le compas',
            'Vérifier les angles'
          ],
          content: {
            procedure: {
              step1: 'Cercle de centre O, rayon 3cm',
              step2: 'Marquer avec le compas: OA = AB = BC = CD = DE = EF = 3cm',
              step3: 'Vérifier: angles au centre = 60° chacun',
              step4: 'Tracer les côtés de l\'hexagone'
            },
            proprietes: {
              cotes: 'Tous les côtés ont la même longueur',
              angles: 'Tous les angles ont la même mesure (120°)',
              angles_centre: 'Angles au centre = 60° chacun',
              somme_angles: 'Somme des angles = (6-2) × 180° = 720°'
            },
            verification: {
              angles_centre: '360° ÷ 6 = 60°',
              angles_sommets: '720° ÷ 6 = 120°',
              cotes: 'Mesurer avec la règle'
            },
            mauritanianContext: [
              'Motifs décoratifs',
              'Construction de bâtiments',
              'Problèmes de géométrie',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Comment construis-tu un hexagone régulier?",
            "Quelles sont ses propriétés?",
            "Vérifie que les angles au centre font 60°",
            "Calcule la somme des angles",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'construction',
              question: 'Construis un hexagone régulier de côté 4cm',
              answer: 'Cercle de rayon 4cm, marquer 6 points avec le compas, tracer les côtés'
            },
            {
              type: 'verification',
              question: 'Vérifie que la somme des angles fait 720°',
              answer: 'Somme = (6-2) × 180° = 4 × 180° = 720° ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch10-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les polygones',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec des polygones',
            'Utiliser les formules',
            'Vérifier les calculs'
          ],
          content: {
            problems: [
              {
                type: 'aire',
                context: 'Champ en forme de trapèze',
                question: 'Un champ trapézoïdal a pour bases 80m et 60m, et pour hauteur 50m. Calcule son aire en hectares',
                solution: 'A = (80 + 60) × 50 / 2 = 140 × 25 = 3500 m² = 0,35 hectares'
              },
              {
                type: 'construction',
                context: 'Motif décoratif',
                question: 'Construis un motif avec un hexagone régulier de côté 5cm',
                solution: 'Cercle de rayon 5cm, marquer 6 points, tracer l\'hexagone'
              }
            ],
            mauritanianContext: [
              'Calculs d\'aires de champs',
              'Motifs décoratifs',
              'Construction de bâtiments',
              'Problèmes de géométrie'
            ]
          },
          questions: [
            "Résous ce problème d'aire de champ",
            "Construis le motif décoratif",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu les polygones?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Un trapèze a pour bases 12cm et 8cm, et pour hauteur 6cm. Calcule son aire',
              answer: 'A = (12 + 8) × 6 / 2 = 20 × 3 = 60 cm²'
            },
            {
              type: 'verification',
              question: 'Vérifie avec le quadrillage',
              answer: 'Compter les carreaux et comparer avec 60 cm²'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch11',
      title: 'PROJECTION ORTHOGONALE',
      sections: [
        {
          id: 'ch11-s1',
          title: 'Projection d\'un point sur une droite',
          description: 'Comprendre la notion de projection orthogonale',
          concepts: ['Projection orthogonale', 'Droite', 'Perpendiculaire', 'Distance minimale'],
          objectives: [
            'Comprendre la projection orthogonale',
            'Construire la projection d\'un point',
            'Utiliser les propriétés'
          ],
          content: {
            definition: {
              projection: 'La projection orthogonale de A sur (d) est le point H tel que (AH) ⊥ (d)',
              method: 'Tracer la perpendiculaire de A à (d), H est l\'intersection'
            },
            construction: {
              step1: 'Droite horizontale (d)',
              step2: 'Point A situé au-dessus de (d)',
              step3: 'Construction de la perpendiculaire de A à (d)',
              step4: 'Point H: intersection de cette perpendiculaire avec (d)'
            },
            properties: {
              unicite: 'Pour tout point M et toute droite (d), il existe une unique projection',
              distance_minimale: 'MH ≤ MP pour tout P ∈ (d)',
              conservation_parallelisme: 'Si (AB) ∥ (CD), alors leurs projections aussi'
            },
            mauritanianContext: [
              'Calculs de distances dans l\'espace',
              'Représentation en perspective cavalière',
              'Travaux pratiques de géométrie',
              'Construction de bâtiments'
            ]
          },
          questions: [
            "Qu'est-ce qu'une projection orthogonale?",
            "Comment construis-tu la projection d'un point?",
            "Quelles sont les propriétés de la projection?",
            "Construis la projection de A sur (d)",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'construction',
              question: 'Construis la projection orthogonale du point M sur la droite (d)',
              answer: 'Tracer la perpendiculaire de M à (d), marquer le point d\'intersection H'
            },
            {
              type: 'verification',
              question: 'Vérifie que (MH) est perpendiculaire à (d)',
              answer: 'Utiliser l\'équerre pour vérifier l\'angle droit'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch11-s2',
          title: 'Projection d\'un segment',
          description: 'Apprendre à projeter un segment sur une droite',
          concepts: ['Projection de segment', 'Conservation', 'Réduction', 'Longueur'],
          objectives: [
            'Projeter un segment sur une droite',
            'Comprendre les propriétés',
            'Calculer les longueurs'
          ],
          content: {
            method: {
              step1: 'Segment [AB] quelconque',
              step2: 'Droite (d) de référence',
              step3: 'Projection A\' de A sur (d)',
              step4: 'Projection B\' de B sur (d)',
              step5: 'Segment [A\'B\']: projection de [AB]'
            },
            properties: {
              conservation: 'Conservation des longueurs si (AB) ∥ (d)',
              reduction: 'Réduction sinon',
              parallelisme: 'Si (AB) ∥ (d), alors A\'B\' = AB'
            },
            examples: {
              parallel: 'Si (AB) ∥ (d), alors A\'B\' = AB',
              not_parallel: 'Si (AB) ∥ (d), alors A\'B\' < AB'
            },
            mauritanianContext: [
              'Calculs de distances',
              'Problèmes de géométrie',
              'Construction de bâtiments',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Comment projettes-tu un segment?",
            "Quand la longueur est-elle conservée?",
            "Calcule la longueur de la projection",
            "Vérifie tes calculs",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'projection',
              question: 'Projette le segment [AB] sur la droite (d)',
              answer: 'Projeter A en A\' et B en B\', tracer [A\'B\']'
            },
            {
              type: 'calculation',
              question: 'Si AB = 5cm et (AB) ∥ (d), quelle est la longueur de A\'B\'?',
              answer: 'A\'B\' = AB = 5cm (conservation car parallèle)'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch11-s3',
          title: 'Applications pratiques',
          description: 'Utiliser la projection dans des problèmes concrets',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec la projection',
            'Utiliser les propriétés',
            'Vérifier les calculs'
          ],
          content: {
            problems: [
              {
                type: 'distance',
                context: 'Calcul de hauteur de bâtiment',
                question: 'Un bâtiment de 20m de hauteur projette une ombre de 15m. Calcule la distance du sommet à l\'extrémité de l\'ombre',
                solution: 'Utiliser le théorème de Pythagore: distance = √(20² + 15²) = √625 = 25m'
              },
              {
                type: 'construction',
                context: 'Plan de construction',
                question: 'Sur un plan, projette les murs d\'une maison sur la ligne de fondation',
                solution: 'Projeter chaque coin de la maison perpendiculairement sur la ligne'
              }
            ],
            mauritanianContext: [
              'Construction de bâtiments',
              'Calculs de distances',
              'Plans architecturaux',
              'Problèmes de géométrie'
            ]
          },
          questions: [
            "Résous ce problème de hauteur de bâtiment",
            "Construis le plan demandé",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu la projection?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Un arbre de 12m projette une ombre de 9m. Calcule la distance du sommet à l\'extrémité de l\'ombre',
              answer: 'Distance = √(12² + 9²) = √225 = 15m'
            },
            {
              type: 'verification',
              question: 'Vérifie: 12² + 9² = 144 + 81 = 225 = 15²',
              answer: '12² + 9² = 144 + 81 = 225 = 15² ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch12',
      title: 'SYMÉTRIE CENTRALE',
      sections: [
        {
          id: 'ch12-s1',
          title: 'Construction du symétrique',
          description: 'Apprendre à construire le symétrique d\'un point',
          concepts: ['Symétrie centrale', 'Centre de symétrie', 'Milieu', 'Construction'],
          objectives: [
            'Comprendre la symétrie centrale',
            'Construire le symétrique d\'un point',
            'Utiliser les propriétés'
          ],
          content: {
            definition: {
              symetrie: 'La symétrie centrale de centre O est la transformation qui à tout point M associe le point M\' tel que O soit le milieu du segment [MM\']',
              notation: 'M\' est le symétrique de M par rapport à O'
            },
            construction: {
              step1: 'Point O (centre de symétrie)',
              step2: 'Point M quelconque',
              step3: 'Construction de M\' tel que O soit milieu de [MM\']',
              step4: 'Vérification: OM = OM\''
            },
            properties: {
              milieu: 'O est le milieu de [MM\']',
              distance: 'OM = OM\'',
              unicite: 'Pour tout point M, il existe un unique symétrique M\''
            },
            mauritanianContext: [
              'Motifs décoratifs',
              'Construction de bâtiments',
              'Problèmes de géométrie',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Qu'est-ce que la symétrie centrale?",
            "Comment construis-tu le symétrique d'un point?",
            "Vérifie que O est le milieu de [MM\']",
            "Construis le symétrique de A par rapport à O",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'construction',
              question: 'Construis le symétrique du point A par rapport au point O',
              answer: 'Tracer la droite (AO), prolonger au-delà de O, reporter OA\' = OA'
            },
            {
              type: 'verification',
              question: 'Vérifie que O est le milieu de [AA\']',
              answer: 'Mesurer OA et OA\', vérifier l\'égalité'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch12-s2',
          title: 'Symétrie de figures simples',
          description: 'Apprendre à construire le symétrique de figures',
          concepts: ['Symétrie de figures', 'Conservation', 'Propriétés', 'Construction'],
          objectives: [
            'Construire le symétrique de figures',
            'Comprendre les propriétés de conservation',
            'Vérifier les constructions'
          ],
          content: {
            figures: {
              segment: 'Segment [AB] → [A\'B\'] avec A\' symétrique de A, B\' symétrique de B',
              triangle: 'Triangle ABC → A\'B\'C\'',
              propriete: 'Conservation des longueurs et des angles'
            },
            properties: {
              conservation_distances: 'AB = A\'B\'',
              conservation_angles: '∠ABC = ∠A\'B\'C\'',
              conservation_parallelisme: 'Si (AB) ∥ (CD), alors (A\'B\') ∥ (C\'D\')',
              conservation_aires: 'Aire(figure) = Aire(image)'
            },
            method: {
              step1: 'Construire le symétrique de chaque sommet',
              step2: 'Relier les points symétriques',
              step3: 'Vérifier les propriétés de conservation'
            },
            mauritanianContext: [
              'Motifs décoratifs',
              'Construction de bâtiments',
              'Problèmes de géométrie',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Comment construis-tu le symétrique d'une figure?",
            "Quelles propriétés sont conservées?",
            "Construis le symétrique du triangle ABC",
            "Vérifie que AB = A\'B\'",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'construction',
              question: 'Construis le symétrique du segment [AB] par rapport à O',
              answer: 'Construire A\' et B\' symétriques, tracer [A\'B\']'
            },
            {
              type: 'verification',
              question: 'Vérifie que AB = A\'B\'',
              answer: 'Mesurer AB et A\'B\', vérifier l\'égalité'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch12-s3',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur la symétrie centrale',
          concepts: ['Application', 'Problèmes concrets', 'Construction', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec la symétrie centrale',
            'Utiliser les propriétés',
            'Vérifier les constructions'
          ],
          content: {
            problems: [
              {
                type: 'motif',
                context: 'Motif décoratif',
                question: 'Crée un motif décoratif en utilisant la symétrie centrale',
                solution: 'Dessiner une figure simple, construire son symétrique par rapport à un point'
              },
              {
                type: 'construction',
                context: 'Plan de construction',
                question: 'Sur un plan, construis le symétrique d\'une pièce par rapport au centre',
                solution: 'Construire le symétrique de chaque coin de la pièce'
              }
            ],
            mauritanianContext: [
              'Motifs décoratifs traditionnels',
              'Construction de bâtiments',
              'Plans architecturaux',
              'Problèmes de géométrie'
            ]
          },
          questions: [
            "Crée un motif décoratif",
            "Construis le symétrique de la pièce",
            "Vérifie tes constructions",
            "Donne un autre exemple",
            "Comment utilises-tu la symétrie centrale?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Construis le symétrique du carré ABCD par rapport à son centre O',
              answer: 'Construire A\', B\', C\', D\' symétriques, tracer le carré A\'B\'C\'D\''
            },
            {
              type: 'verification',
              question: 'Vérifie que les deux carrés sont identiques',
              answer: 'Vérifier que tous les côtés et angles sont égaux'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch13',
      title: 'SYMÉTRIE AXIALE',
      sections: [
        {
          id: 'ch13-s1',
          title: 'Pliage et symétrie',
          description: 'Découvrir la symétrie axiale par le pliage',
          concepts: ['Symétrie axiale', 'Axe de symétrie', 'Pliage', 'Médiatrice'],
          objectives: [
            'Comprendre la symétrie axiale',
            'Utiliser le pliage pour découvrir',
            'Identifier l\'axe de symétrie'
          ],
          content: {
            experience: {
              step1: 'Feuille pliée selon une droite (d)',
              step2: 'Point piqué à travers les deux épaisseurs',
              step3: 'Dépliage: observation des points symétriques',
              step4: 'Conclusion: (d) est médiatrice de [MM\']'
            },
            definition: {
              symetrie: 'La symétrie axiale d\'axe (d) est la transformation qui à tout point M associe le point M\' tel que (d) soit la médiatrice de [MM\']',
              axe: 'La droite (d) est l\'axe de symétrie'
            },
            properties: {
              mediatrice: '(d) est la médiatrice de [MM\']',
              perpendicularite: '(MM\') ⊥ (d)',
              distance: 'Distance de M à (d) = distance de M\' à (d)'
            },
            mauritanianContext: [
              'Motifs décoratifs traditionnels',
              'Construction de bâtiments',
              'Problèmes de géométrie',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Qu'est-ce que la symétrie axiale?",
            "Comment découvres-tu la symétrie par pliage?",
            "Qu'est-ce que l'axe de symétrie?",
            "Fais l'expérience de pliage",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'experience',
              question: 'Fais l\'expérience de pliage avec une feuille',
              answer: 'Plier selon une droite, piquer un point, déplier et observer'
            },
            {
              type: 'identification',
              question: 'Identifie l\'axe de symétrie dans cette figure',
              answer: 'La droite qui divise la figure en deux parties identiques'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch13-s2',
          title: 'Construction papier-calque',
          description: 'Apprendre à construire le symétrique avec papier-calque',
          concepts: ['Construction', 'Papier-calque', 'Perpendiculaire', 'Distance'],
          objectives: [
            'Construire le symétrique avec papier-calque',
            'Utiliser la méthode opératoire',
            'Vérifier la construction'
          ],
          content: {
            method: {
              step1: 'Tracer la droite (d) et le point M',
              step2: 'Tracer la perpendiculaire de M à (d)',
              step3: 'Reporter la distance de M à (d)',
              step4: 'Marquer M\' symétrique'
            },
            verification: {
              perpendicularite: 'Vérifier que (MM\') ⊥ (d)',
              distance: 'Vérifier que les distances sont égales',
              milieu: 'Vérifier que (d) passe par le milieu de [MM\']'
            },
            properties: {
              conservation_distances: 'AB = A\'B\'',
              conservation_angles: '∠ABC = ∠A\'B\'C\'',
              conservation_aires: 'Aire(figure) = Aire(image)',
              points_invariants: 'Les points de l\'axe restent fixes'
            },
            mauritanianContext: [
              'Construction de bâtiments',
              'Motifs décoratifs',
              'Problèmes de géométrie',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Comment construis-tu le symétrique avec papier-calque?",
            "Quelles propriétés sont conservées?",
            "Construis le symétrique de A par rapport à (d)",
            "Vérifie que (AA\') ⊥ (d)",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'construction',
              question: 'Construis le symétrique du point A par rapport à la droite (d)',
              answer: 'Tracer la perpendiculaire de A à (d), reporter la distance'
            },
            {
              type: 'verification',
              question: 'Vérifie que (AA\') est perpendiculaire à (d)',
              answer: 'Utiliser l\'équerre pour vérifier l\'angle droit'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch13-s3',
          title: 'Axes de symétrie des figures courantes',
          description: 'Identifier les axes de symétrie des figures usuelles',
          concepts: ['Axe de symétrie', 'Figures usuelles', 'Identification', 'Nombre d\'axes'],
          objectives: [
            'Identifier les axes de symétrie',
            'Compter le nombre d\'axes',
            'Utiliser les propriétés'
          ],
          content: {
            figures: {
              segment: 'Médiatrice (1 axe)',
              triangle_isocèle: 'Médiane issue du sommet principal (1 axe)',
              rectangle: 'Médiatrices des côtés (2 axes)',
              carre: 'Médiatrices et diagonales (4 axes)',
              cercle: 'Tous les diamètres (∞ axes)'
            },
            method: {
              step1: 'Identifier les droites qui divisent la figure en deux parties identiques',
              step2: 'Vérifier que chaque partie est l\'image de l\'autre par symétrie',
              step3: 'Compter le nombre d\'axes'
            },
            proprietes: {
              conservation: 'Chaque axe conserve la figure',
              perpendicularite: 'Les axes passent par le centre de la figure',
              nombre: 'Le nombre d\'axes dépend de la régularité de la figure'
            },
            mauritanianContext: [
              'Motifs décoratifs traditionnels',
              'Construction de bâtiments',
              'Problèmes de géométrie',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Combien d'axes de symétrie a un carré?",
            "Identifie les axes de symétrie de ce rectangle",
            "Quels sont les axes d'un triangle isocèle?",
            "Dessine une figure avec 2 axes de symétrie",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie tous les axes de symétrie de ce carré',
              answer: '2 médiatrices des côtés + 2 diagonales = 4 axes'
            },
            {
              type: 'construction',
              question: 'Dessine un rectangle et trace ses axes de symétrie',
              answer: 'Tracer les 2 médiatrices des côtés'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch13-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur la symétrie axiale',
          concepts: ['Application', 'Problèmes concrets', 'Construction', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec la symétrie axiale',
            'Utiliser les propriétés',
            'Vérifier les constructions'
          ],
          content: {
            problems: [
              {
                type: 'motif',
                context: 'Motif décoratif traditionnel',
                question: 'Crée un motif décoratif en utilisant la symétrie axiale',
                solution: 'Dessiner une figure simple, construire son symétrique par rapport à un axe'
              },
              {
                type: 'construction',
                context: 'Plan de construction',
                question: 'Sur un plan, construis le symétrique d\'une façade par rapport à l\'axe central',
                solution: 'Construire le symétrique de chaque point de la façade'
              }
            ],
            mauritanianContext: [
              'Motifs décoratifs traditionnels mauritaniens',
              'Construction de bâtiments',
              'Plans architecturaux',
              'Problèmes de géométrie'
            ]
          },
          questions: [
            "Crée un motif décoratif traditionnel",
            "Construis le symétrique de la façade",
            "Vérifie tes constructions",
            "Donne un autre exemple",
            "Comment utilises-tu la symétrie axiale?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Construis le symétrique du triangle ABC par rapport à la droite (d)',
              answer: 'Construire A\', B\', C\' symétriques, tracer le triangle A\'B\'C\''
            },
            {
              type: 'verification',
              question: 'Vérifie que les deux triangles sont identiques',
              answer: 'Vérifier que tous les côtés et angles sont égaux'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch14',
      title: 'DROITES ET CERCLES',
      sections: [
        {
          id: 'ch14-s1',
          title: 'Position relative droite/cercle',
          description: 'Comprendre les différentes positions d\'une droite par rapport à un cercle',
          concepts: ['Position relative', 'Droite extérieure', 'Droite tangente', 'Droite sécante'],
          objectives: [
            'Identifier les positions relatives',
            'Comprendre les conditions',
            'Utiliser les propriétés'
          ],
          content: {
            positions: {
              exterieure: {
                condition: 'Distance du centre à la droite > rayon',
                propriete: 'Aucun point commun',
                exemple: 'Droite à l\'extérieur du cercle'
              },
              tangente: {
                condition: 'Distance du centre à la droite = rayon',
                propriete: 'Un seul point commun',
                exemple: 'Droite qui touche le cercle en un point'
              },
              secante: {
                condition: 'Distance du centre à la droite < rayon',
                propriete: 'Deux points communs',
                exemple: 'Droite qui coupe le cercle en deux points'
              }
            },
            method: {
              step1: 'Calculer la distance du centre O à la droite (d)',
              step2: 'Comparer avec le rayon r',
              step3: 'Conclure selon les conditions'
            },
            mauritanianContext: [
              'Problèmes de géométrie',
              'Construction de bâtiments',
              'Calculs de distances',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Quelles sont les positions d'une droite par rapport à un cercle?",
            "Comment détermines-tu la position?",
            "Que signifie 'droite tangente'?",
            "Donne un exemple de chaque position",
            "Comment utilises-tu cela en Mauritanie?"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie la position de cette droite par rapport au cercle',
              answer: 'Calculer la distance et comparer avec le rayon'
            },
            {
              type: 'construction',
              question: 'Trace une droite tangente au cercle',
              answer: 'Droite à distance égale au rayon du centre'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch14-s2',
          title: 'Construction de tangentes',
          description: 'Apprendre à construire des tangentes à un cercle',
          concepts: ['Tangente', 'Construction', 'Perpendicularité', 'Propriétés'],
          objectives: [
            'Construire des tangentes',
            'Comprendre les propriétés',
            'Vérifier les constructions'
          ],
          content: {
            procedure: {
              step1: 'Cercle de centre O, rayon r',
              step2: 'Point A extérieur au cercle',
              step3: 'Construction: Cercle de diamètre [OA]',
              step4: 'Intersections avec le cercle initial',
              step5: 'Tangentes (AT₁) et (AT₂)'
            },
            properties: {
              perpendicularite: 'Tangente ⟂ rayon au point de contact',
              unicite: 'Par un point extérieur, deux tangentes possibles',
              egalite: 'AT₁ = AT₂ (longueurs égales)'
            },
            verification: {
              angle_droit: 'Vérifier que (AT) ⊥ (OT)',
              distance: 'Vérifier que AT = distance de A au cercle'
            },
            mauritanianContext: [
              'Construction de bâtiments',
              'Problèmes de géométrie',
              'Calculs de distances',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Comment construis-tu une tangente?",
            "Quelles sont les propriétés de la tangente?",
            "Construis les tangentes du point A au cercle",
            "Vérifie que (AT) ⊥ (OT)",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'construction',
              question: 'Construis les tangentes du point P au cercle de centre O',
              answer: 'Cercle de diamètre [OP], intersections T₁ et T₂, tangentes (PT₁) et (PT₂)'
            },
            {
              type: 'verification',
              question: 'Vérifie que les deux tangentes sont égales',
              answer: 'Mesurer PT₁ et PT₂, vérifier l\'égalité'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch14-s3',
          title: 'Puissance d\'un point',
          description: 'Comprendre la notion de puissance d\'un point par rapport à un cercle',
          concepts: ['Puissance', 'Point extérieur', 'Point intérieur', 'Tangente-sécante'],
          objectives: [
            'Comprendre la puissance d\'un point',
            'Utiliser les formules',
            'Résoudre des problèmes'
          ],
          content: {
            definition: {
              exterieur: 'Si P est extérieur: PT² = PA × PB (tangente-sécante)',
              interieur: 'Si P est intérieur: PA × PB = PC × PD',
              general: 'Puissance = PA × PB (indépendante de la sécante)'
            },
            applications: {
              calcul_distance: 'Calculer la distance d\'un point au cercle',
              verification: 'Vérifier des propriétés géométriques',
              resolution: 'Résoudre des problèmes de construction'
            },
            exemples: {
              exterieur: 'Point P extérieur, tangente PT, sécante PAB: PT² = PA × PB',
              interieur: 'Point P intérieur, sécantes PAB et PCD: PA × PB = PC × PD'
            },
            mauritanianContext: [
              'Problèmes de géométrie',
              'Construction de bâtiments',
              'Calculs de distances',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Qu'est-ce que la puissance d'un point?",
            "Comment calcules-tu la puissance?",
            "Calcule la puissance du point P",
            "Vérifie avec la formule",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Point P extérieur, tangente PT = 6cm, sécante PAB avec PA = 3cm, PB = 12cm. Vérifie PT² = PA × PB',
              answer: 'PT² = 36, PA × PB = 3 × 12 = 36 ✓'
            },
            {
              type: 'problem',
              question: 'Point P intérieur, sécantes PAB et PCD. Si PA = 4, PB = 9, PC = 6, calcule PD',
              answer: 'PA × PB = PC × PD, 4 × 9 = 6 × PD, PD = 6'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch14-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur droites et cercles',
          concepts: ['Application', 'Problèmes concrets', 'Construction', 'Vérification'],
          objectives: [
            'Résoudre des problèmes avec droites et cercles',
            'Utiliser les propriétés',
            'Vérifier les constructions'
          ],
          content: {
            problems: [
              {
                type: 'construction',
                context: 'Plan de construction',
                question: 'Sur un plan, trace un cercle et construis les tangentes d\'un point extérieur',
                solution: 'Utiliser la méthode de construction avec cercle de diamètre [OP]'
              },
              {
                type: 'calcul',
                context: 'Problème de distance',
                question: 'Un point P est à 10cm du centre d\'un cercle de rayon 6cm. Calcule la longueur de la tangente',
                solution: 'PT² = OP² - r² = 100 - 36 = 64, PT = 8cm'
              }
            ],
            mauritanianContext: [
              'Construction de bâtiments',
              'Problèmes de géométrie',
              'Calculs de distances',
              'Travaux pratiques'
            ]
          },
          questions: [
            "Résous ce problème de construction",
            "Calcule la longueur de la tangente",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu droites et cercles?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Cercle de rayon 5cm, point P à 13cm du centre. Calcule la longueur de la tangente',
              answer: 'PT² = 13² - 5² = 169 - 25 = 144, PT = 12cm'
            },
            {
              type: 'verification',
              question: 'Vérifie: 12² + 5² = 144 + 25 = 169 = 13²',
              answer: '12² + 5² = 144 + 25 = 169 = 13² ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch15',
      title: 'PROPORTIONNALITÉ',
      sections: [
        {
          id: 'ch15-s1',
          title: 'Prix au marché',
          description: 'Découvrir la proportionnalité à partir des prix au marché',
          concepts: ['Proportionnalité', 'Coefficient', 'Tableau', 'Quotient constant'],
          objectives: [
            'Comprendre la notion de proportionnalité',
            'Identifier les grandeurs proportionnelles',
            'Calculer le coefficient'
          ],
          content: {
            context: {
              marche: 'Marché de Nouakchott',
              produit: 'Prix des dattes',
              tableau: {
                quantite: [1, 2, 3, 4, 5],
                prix: [150, 300, 450, 600, 750]
              }
            },
            analyse: {
              quotient_constant: '150/1 = 300/2 = 450/3 = 600/4 = 750/5 = 150 MRU/kg',
              coefficient: '150 MRU/kg (prix unitaire)',
              representation: 'Droite passant par l\'origine'
            },
            definition: {
              proportionnalite: 'Deux grandeurs sont proportionnelles si leurs valeurs correspondent par multiplication par un même nombre appelé coefficient de proportionnalité',
              condition: 'y = kx où k est le coefficient de proportionnalité'
            },
            mauritanianContext: [
              'Prix au marché de Nouakchott',
              'Calculs commerciaux',
              'Problèmes de proportionnalité',
              'Économie locale'
            ]
          },
          questions: [
            "Qu'est-ce que la proportionnalité?",
            "Comment reconnais-tu des grandeurs proportionnelles?",
            "Calcule le coefficient de proportionnalité",
            "Vérifie que 150/1 = 300/2",
            "Donne un autre exemple en Mauritanie"
          ],
          exercises: [
            {
              type: 'verification',
              question: 'Vérifie que ces grandeurs sont proportionnelles: 2→6, 3→9, 4→12',
              answer: '6/2 = 9/3 = 12/4 = 3 ✓ (coefficient = 3)'
            },
            {
              type: 'calculation',
              question: 'Calcule le prix de 7 kg de dattes à 150 MRU/kg',
              answer: 'Prix = 7 × 150 = 1050 MRU'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch15-s2',
          title: 'Recettes de cuisine',
          description: 'Utiliser la proportionnalité dans les recettes de cuisine',
          concepts: ['Recette', 'Proportion', 'Coefficient', 'Calcul'],
          objectives: [
            'Adapter une recette',
            'Calculer les quantités',
            'Utiliser la proportionnalité'
          ],
          content: {
            probleme: {
              contexte: 'Recette de cuisine mauritanienne',
              pour_4: 'Pour 4 personnes: 200g de riz, 300g de viande',
              pour_6: 'Pour 6 personnes: combien?',
              coefficient: '6/4 = 1,5'
            },
            solution: {
              riz: '200 × 1,5 = 300g',
              viande: '300 × 1,5 = 450g',
              verification: 'Vérifier que les proportions sont respectées'
            },
            method: {
              step1: 'Calculer le coefficient de proportionnalité',
              step2: 'Multiplier chaque ingrédient par ce coefficient',
              step3: 'Vérifier la cohérence des résultats'
            },
            mauritanianContext: [
              'Recettes de cuisine traditionnelle',
              'Calculs de portions',
              'Problèmes de proportionnalité',
              'Cuisine familiale'
            ]
          },
          questions: [
            "Comment adaptes-tu une recette?",
            "Calcule le coefficient 6/4",
            "Calcule les quantités pour 6 personnes",
            "Vérifie tes calculs",
            "Donne un autre exemple de recette"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Recette pour 3 personnes: 150g de farine, 100g de sucre. Pour 9 personnes?',
              answer: 'Coefficient = 9/3 = 3. Farine: 150×3 = 450g, Sucre: 100×3 = 300g'
            },
            {
              type: 'verification',
              question: 'Vérifie: 450/150 = 300/100 = 3',
              answer: '450/150 = 3, 300/100 = 3 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch15-s3',
          title: 'Méthodes de résolution',
          description: 'Apprendre les différentes méthodes pour résoudre des problèmes de proportionnalité',
          concepts: ['Coefficient', 'Règle de trois', 'Produit en croix', 'Représentation graphique'],
          objectives: [
            'Utiliser le coefficient de proportionnalité',
            'Appliquer la règle de trois',
            'Utiliser les produits en croix'
          ],
          content: {
            methodes: {
              coefficient: {
                description: 'Calculer k = y/x, puis y = kx',
                exemple: 'k = 150/1 = 150, y = 150x'
              },
              regle_trois: {
                description: 'a → b, c → ?',
                formule: '? = (c × b) / a',
                exemple: '1 → 150, 7 → (7 × 150) / 1 = 1050'
              },
              produit_croix: {
                description: 'a/b = c/d',
                formule: 'ad = bc',
                exemple: '1/150 = 7/x, 1×x = 150×7, x = 1050'
              },
              graphique: {
                description: 'Représentation par une droite passant par l\'origine',
                utilisation: 'Lecture graphique des valeurs'
              }
            },
            choix_methode: {
              simple: 'Coefficient pour calculs répétitifs',
              ponctuel: 'Règle de trois pour un calcul unique',
              verification: 'Produit en croix pour vérifier'
            },
            mauritanianContext: [
              'Calculs commerciaux',
              'Problèmes de proportionnalité',
              'Économie locale',
              'Calculs pratiques'
            ]
          },
          questions: [
            "Quelles sont les méthodes de résolution?",
            "Quand utilises-tu la règle de trois?",
            "Calcule avec le coefficient de proportionnalité",
            "Vérifie avec le produit en croix",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'coefficient',
              question: 'Avec k = 150, calcule le prix de 8 kg',
              answer: 'Prix = 8 × 150 = 1200 MRU'
            },
            {
              type: 'regle_trois',
              question: '1 kg → 150 MRU, 5 kg → ?',
              answer: '? = (5 × 150) / 1 = 750 MRU'
            },
            {
              type: 'produit_croix',
              question: 'Vérifie: 1/150 = 3/450',
              answer: '1 × 450 = 150 × 3, 450 = 450 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch15-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur la proportionnalité',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes de proportionnalité',
            'Utiliser les méthodes appropriées',
            'Vérifier les calculs'
          ],
          content: {
            problems: [
              {
                type: 'commerce',
                context: 'Commerce de Nouakchott',
                question: 'Un commerçant vend des légumes. 2 kg coûtent 400 MRU. Combien coûtent 7 kg?',
                solution: 'Coefficient = 400/2 = 200 MRU/kg. Prix = 7 × 200 = 1400 MRU'
              },
              {
                type: 'vitesse',
                context: 'Transport en Mauritanie',
                question: 'Un véhicule parcourt 300 km en 4 heures. Quelle distance parcourt-il en 6 heures?',
                solution: 'Vitesse = 300/4 = 75 km/h. Distance = 6 × 75 = 450 km'
              }
            ],
            mauritanianContext: [
              'Commerce local de Nouakchott',
              'Transport en Mauritanie',
              'Calculs de proportionnalité',
              'Problèmes pratiques'
            ]
          },
          questions: [
            "Résous ce problème de commerce",
            "Calcule la distance parcourue",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu la proportionnalité?"
          ],
          exercises: [
            {
              type: 'problem',
              question: '3 mètres de tissu coûtent 900 MRU. Combien coûtent 5 mètres?',
              answer: 'Coefficient = 900/3 = 300 MRU/m. Prix = 5 × 300 = 1500 MRU'
            },
            {
              type: 'verification',
              question: 'Vérifie: 3/900 = 5/1500',
              answer: '3 × 1500 = 900 × 5, 4500 = 4500 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch16',
      title: 'STATISTIQUE',
      sections: [
        {
          id: 'ch16-s1',
          title: 'Recensement familial',
          description: 'Découvrir les statistiques à partir d\'un recensement familial',
          concepts: ['Statistique', 'Population', 'Effectif', 'Fréquence'],
          objectives: [
            'Comprendre les notions de base',
            'Calculer des fréquences',
            'Interpréter des données'
          ],
          content: {
            contexte: {
              village: 'Village de 50 familles en Mauritanie',
              donnees: {
                '3_enfants': '15 familles',
                '4_enfants': '20 familles',
                '5_enfants': '10 familles',
                '6_enfants': '5 familles'
              }
            },
            tableau: {
              nb_enfants: [3, 4, 5, 6],
              frequence: [15, 20, 10, 5],
              frequence_relative: [0.3, 0.4, 0.2, 0.1],
              total: 50
            },
            calculs: {
              effectif_total: '15×3 + 20×4 + 10×5 + 5×6 = 45 + 80 + 50 + 30 = 205 enfants',
              moyenne: '205/50 = 4,1 enfants par famille'
            },
            vocabulaire: {
              population: 'Ensemble étudié (50 familles)',
              individu: 'Élément de la population (une famille)',
              caractere: 'Propriété étudiée (nombre d\'enfants)',
              modalites: 'Valeurs possibles (3, 4, 5, 6)'
            },
            mauritanianContext: [
              'Recensement de villages mauritaniens',
              'Statistiques démographiques',
              'Problèmes de population',
              'Données locales'
            ]
          },
          questions: [
            "Qu'est-ce qu'une population en statistique?",
            "Calcule la fréquence relative de 4 enfants",
            "Calcule la moyenne d'enfants par famille",
            "Interprète ces données",
            "Donne un autre exemple en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule la fréquence relative de 5 enfants',
              answer: '10/50 = 0,2 = 20%'
            },
            {
              type: 'verification',
              question: 'Vérifie que la somme des fréquences relatives fait 1',
              answer: '0,3 + 0,4 + 0,2 + 0,1 = 1 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch16-s2',
          title: 'Indicateurs de position',
          description: 'Apprendre à calculer les indicateurs de position',
          concepts: ['Mode', 'Médiane', 'Moyenne', 'Indicateurs'],
          objectives: [
            'Calculer le mode',
            'Calculer la médiane',
            'Calculer la moyenne'
          ],
          content: {
            mode: {
              definition: 'Valeur la plus fréquente',
              calcul: 'Identifier la modalité avec la plus grande fréquence',
              exemple: '4 enfants (fréquence = 20)'
            },
            mediane: {
              definition: 'Valeur centrale quand les données sont ordonnées',
              calcul: 'Ranger les données, prendre la valeur du milieu',
              exemple: 'Avec 50 familles, médiane = valeur de la 25ème famille'
            },
            moyenne: {
              definition: 'Σ(xi × ni) / N',
              calcul: 'Somme des (valeur × effectif) / effectif total',
              exemple: '205/50 = 4,1 enfants par famille'
            },
            comparaison: {
              mode: '4 enfants (le plus fréquent)',
              mediane: '4 enfants (valeur centrale)',
              moyenne: '4,1 enfants (moyenne arithmétique)'
            },
            mauritanianContext: [
              'Statistiques démographiques',
              'Analyse de données locales',
              'Problèmes de population',
              'Calculs statistiques'
            ]
          },
          questions: [
            "Qu'est-ce que le mode?",
            "Comment calcules-tu la médiane?",
            "Calcule la moyenne",
            "Compare ces trois indicateurs",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'mode',
              question: 'Trouve le mode: 3, 4, 4, 5, 4, 6, 4',
              answer: 'Mode = 4 (apparaît 4 fois)'
            },
            {
              type: 'moyenne',
              question: 'Calcule la moyenne: 2, 3, 4, 5, 6',
              answer: 'Moyenne = (2+3+4+5+6)/5 = 20/5 = 4'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch16-s3',
          title: 'Représentations graphiques',
          description: 'Apprendre à représenter des données statistiques',
          concepts: ['Diagramme en bâtons', 'Histogramme', 'Diagramme circulaire', 'Représentation'],
          objectives: [
            'Construire un diagramme en bâtons',
            'Interpréter les graphiques',
            'Choisir la représentation appropriée'
          ],
          content: {
            diagramme_batons: {
              description: 'Bâtons de hauteur proportionnelle à la fréquence',
              utilisation: 'Données discrètes (nombre d\'enfants)',
              construction: 'Axe horizontal: modalités, axe vertical: fréquences'
            },
            histogramme: {
              description: 'Rectangles de largeur et hauteur proportionnelles',
              utilisation: 'Données continues (classes d\'âges)',
              construction: 'Classes en abscisse, fréquences en ordonnée'
            },
            diagramme_circulaire: {
              description: 'Secteurs angulaires proportionnels aux fréquences',
              utilisation: 'Pourcentages, parts d\'un tout',
              construction: 'Angle = (fréquence × 360°) / total'
            },
            choix: {
              discret: 'Diagramme en bâtons',
              continu: 'Histogramme',
              pourcentages: 'Diagramme circulaire'
            },
            mauritanianContext: [
              'Représentation de données démographiques',
              'Graphiques statistiques',
              'Analyse de données locales',
              'Présentation de résultats'
            ]
          },
          questions: [
            "Quand utilises-tu un diagramme en bâtons?",
            "Comment construis-tu un histogramme?",
            "Calcule l'angle pour 4 enfants dans un diagramme circulaire",
            "Choisis la représentation appropriée",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'angle',
              question: 'Calcule l\'angle pour 20 familles sur 50 dans un diagramme circulaire',
              answer: 'Angle = (20 × 360°) / 50 = 144°'
            },
            {
              type: 'construction',
              question: 'Construis un diagramme en bâtons pour les données du recensement',
              answer: 'Axe horizontal: 3, 4, 5, 6 enfants. Axe vertical: 15, 20, 10, 5 familles'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch16-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les statistiques',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Représentation'],
          objectives: [
            'Résoudre des problèmes statistiques',
            'Interpréter des données',
            'Construire des graphiques'
          ],
          content: {
            problems: [
              {
                type: 'analyse',
                context: 'Analyse de données scolaires',
                question: 'Dans une classe de 30 élèves, les notes sont: 10, 12, 14, 16, 18. Calcule la moyenne et trouve le mode',
                solution: 'Moyenne = (10+12+14+16+18)/5 = 14. Mode = pas de mode (toutes les valeurs sont uniques)'
              },
              {
                type: 'representation',
                context: 'Graphique de données',
                question: 'Représente les données suivantes: A=40%, B=30%, C=20%, D=10%',
                solution: 'Diagramme circulaire avec angles: A=144°, B=108°, C=72°, D=36°'
              }
            ],
            mauritanianContext: [
              'Analyse de données scolaires',
              'Statistiques démographiques',
              'Problèmes de population',
              'Représentation de données'
            ]
          },
          questions: [
            "Résous ce problème d'analyse",
            "Construis le diagramme circulaire",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu les statistiques?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Données: 5, 7, 7, 9, 9, 9, 11. Calcule la moyenne et trouve le mode',
              answer: 'Moyenne = (5+7+7+9+9+9+11)/7 = 8. Mode = 9 (apparaît 3 fois)'
            },
            {
              type: 'verification',
              question: 'Vérifie: (5+7+7+9+9+9+11) = 56, 56/7 = 8',
              answer: '5+7+7+9+9+9+11 = 56, 56/7 = 8 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch17',
      title: 'PROBABILITÉS',
      sections: [
        {
          id: 'ch17-s1',
          title: 'Expériences aléatoires',
          description: 'Comprendre les expériences aléatoires et leurs résultats',
          concepts: ['Expérience aléatoire', 'Résultat', 'Événement', 'Équiprobabilité'],
          objectives: [
            'Comprendre les expériences aléatoires',
            'Identifier les résultats possibles',
            'Définir les événements'
          ],
          content: {
            definition: {
              experience: 'Expérience dont le résultat dépend du hasard',
              resultat: 'Chaque issue possible de l\'expérience',
              evenement: 'Ensemble de résultats possibles'
            },
            exemples: {
              lancer_piece: {
                resultats: 'Pile, Face',
                evenements: 'Obtenir Pile, Obtenir Face, Obtenir Pile ou Face'
              },
              lancer_de: {
                resultats: '1, 2, 3, 4, 5, 6',
                evenements: 'Obtenir un nombre pair, Obtenir 6, Obtenir un nombre > 4'
              },
              tirage_carte: {
                resultats: 'As, Roi, Dame, Valet, 10, 9, 8, 7, 6, 5, 4, 3, 2',
                evenements: 'Obtenir un As, Obtenir une figure, Obtenir un nombre'
              }
            },
            equiprobabilite: {
              definition: 'Tous les résultats ont la même chance d\'apparaître',
              condition: 'Expérience bien équilibrée',
              exemple: 'Dé non pipé, pièce équilibrée'
            },
            mauritanianContext: [
              'Jeux traditionnels mauritaniens',
              'Problèmes de probabilité',
              'Calculs de chances',
              'Situations aléatoires'
            ]
          },
          questions: [
            "Qu'est-ce qu'une expérience aléatoire?",
            "Donne des exemples d'expériences aléatoires",
            "Qu'est-ce que l'équiprobabilité?",
            "Définis un événement",
            "Donne un exemple en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie les résultats possibles du lancer d\'un dé',
              answer: '1, 2, 3, 4, 5, 6'
            },
            {
              type: 'evenement',
              question: 'Définis l\'événement "obtenir un nombre pair"',
              answer: 'Événement = {2, 4, 6}'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch17-s2',
          title: 'Calcul de probabilités',
          description: 'Apprendre à calculer des probabilités',
          concepts: ['Probabilité', 'Formule', 'Calcul', 'Vérification'],
          objectives: [
            'Calculer des probabilités',
            'Utiliser la formule P(A) = nombre de cas favorables / nombre de cas possibles',
            'Vérifier les calculs'
          ],
          content: {
            formule: {
              definition: 'P(A) = nombre de cas favorables / nombre de cas possibles',
              condition: 'Équiprobabilité des résultats',
              exemple: 'P(obtenir 6) = 1/6'
            },
            methodes: {
              enumeration: 'Compter tous les cas possibles et favorables',
              arbre: 'Utiliser un arbre de probabilités',
              tableau: 'Organiser les résultats dans un tableau'
            },
            exemples: {
              piece: 'P(Pile) = 1/2 = 0,5 = 50%',
              de: 'P(nombre pair) = 3/6 = 1/2 = 0,5 = 50%',
              cartes: 'P(As) = 4/52 = 1/13 ≈ 0,077 = 7,7%'
            },
            proprietes: {
              minimum: '0 ≤ P(A) ≤ 1',
              certain: 'P(événement certain) = 1',
              impossible: 'P(événement impossible) = 0',
              complementaire: 'P(A) + P(Ā) = 1'
            },
            mauritanianContext: [
              'Calculs de probabilité',
              'Jeux traditionnels',
              'Problèmes de chance',
              'Situations aléatoires'
            ]
          },
          questions: [
            "Quelle est la formule de probabilité?",
            "Calcule P(obtenir 6) avec un dé",
            "Calcule P(obtenir Pile) avec une pièce",
            "Vérifie que 0 ≤ P(A) ≤ 1",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule P(obtenir un nombre > 4) avec un dé',
              answer: 'P(obtenir > 4) = P(5 ou 6) = 2/6 = 1/3'
            },
            {
              type: 'verification',
              question: 'Vérifie que P(pair) + P(impair) = 1',
              answer: 'P(pair) = 3/6, P(impair) = 3/6, 3/6 + 3/6 = 6/6 = 1 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch17-s3',
          title: 'Probabilités composées',
          description: 'Apprendre à calculer des probabilités d\'événements composés',
          concepts: ['Probabilité composée', 'Événements indépendants', 'Événements incompatibles', 'Calcul'],
          objectives: [
            'Calculer des probabilités d\'événements composés',
            'Distinguer événements indépendants et incompatibles',
            'Utiliser les formules appropriées'
          ],
          content: {
            evenements_independants: {
              definition: 'Deux événements sont indépendants si la réalisation de l\'un n\'influence pas l\'autre',
              formule: 'P(A et B) = P(A) × P(B)',
              exemple: 'Lancer deux dés: P(6 et 6) = P(6) × P(6) = (1/6) × (1/6) = 1/36'
            },
            evenements_incompatibles: {
              definition: 'Deux événements sont incompatibles s\'ils ne peuvent pas se réaliser en même temps',
              formule: 'P(A ou B) = P(A) + P(B)',
              exemple: 'Obtenir 1 ou 2: P(1 ou 2) = P(1) + P(2) = 1/6 + 1/6 = 2/6 = 1/3'
            },
            evenements_compatibles: {
              definition: 'Deux événements sont compatibles s\'ils peuvent se réaliser en même temps',
              formule: 'P(A ou B) = P(A) + P(B) - P(A et B)',
              exemple: 'Obtenir un nombre pair ou un multiple de 3'
            },
            methodes: {
              arbre: 'Construire un arbre de probabilités',
              tableau: 'Utiliser un tableau à double entrée',
              enumeration: 'Compter tous les cas possibles'
            },
            mauritanianContext: [
              'Jeux de dés traditionnels',
              'Calculs de probabilité',
              'Problèmes de chance',
              'Situations aléatoires'
            ]
          },
          questions: [
            "Qu'est-ce qu'un événement composé?",
            "Comment calcules-tu P(A et B) pour des événements indépendants?",
            "Calcule P(obtenir 6 et 6) avec deux dés",
            "Vérifie avec la formule",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule P(obtenir 1 et 2) avec deux dés',
              answer: 'P(1 et 2) = P(1) × P(2) = (1/6) × (1/6) = 1/36'
            },
            {
              type: 'verification',
              question: 'Vérifie que P(pair ou impair) = 1',
              answer: 'P(pair ou impair) = P(pair) + P(impair) = 3/6 + 3/6 = 6/6 = 1 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch17-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les probabilités',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Vérification'],
          objectives: [
            'Résoudre des problèmes de probabilité',
            'Utiliser les formules appropriées',
            'Vérifier les calculs'
          ],
          content: {
            problems: [
              {
                type: 'jeu',
                context: 'Jeu de dés traditionnel',
                question: 'Dans un jeu mauritanien, on lance deux dés. Calcule la probabilité d\'obtenir une somme de 7',
                solution: 'Sommes possibles: 2,3,4,5,6,7,8,9,10,11,12. P(7) = 6/36 = 1/6'
              },
              {
                type: 'tirage',
                context: 'Tirage de cartes',
                question: 'On tire une carte d\'un jeu de 52 cartes. Calcule la probabilité d\'obtenir un As ou un Roi',
                solution: 'P(As ou Roi) = P(As) + P(Roi) = 4/52 + 4/52 = 8/52 = 2/13'
              }
            ],
            mauritanianContext: [
              'Jeux traditionnels mauritaniens',
              'Calculs de probabilité',
              'Problèmes de chance',
              'Situations aléatoires'
            ]
          },
          questions: [
            "Résous ce problème de jeu de dés",
            "Calcule la probabilité de tirage de cartes",
            "Vérifie tes calculs",
            "Donne un autre exemple",
            "Comment utilises-tu les probabilités?"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'On lance trois pièces. Calcule la probabilité d\'obtenir exactement 2 Piles',
              answer: 'P(2 Piles) = 3/8 (PPP, PPF, PFP, PFF, FPP, FPF, FFP, FFF)'
            },
            {
              type: 'verification',
              question: 'Vérifie que la somme de toutes les probabilités fait 1',
              answer: 'P(0) + P(1) + P(2) + P(3) = 1/8 + 3/8 + 3/8 + 1/8 = 8/8 = 1 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch18',
      title: 'FONCTIONS',
      sections: [
        {
          id: 'ch18-s1',
          title: 'Notion de fonction',
          description: 'Comprendre la notion de fonction et sa représentation',
          concepts: ['Fonction', 'Variable', 'Image', 'Antécédent', 'Représentation'],
          objectives: [
            'Comprendre la notion de fonction',
            'Identifier variable et image',
            'Utiliser la notation f(x)'
          ],
          content: {
            definition: {
              fonction: 'Une fonction f associe à chaque nombre x un unique nombre f(x)',
              notation: 'f : x → f(x) ou y = f(x)',
              vocabulaire: 'x est la variable, f(x) est l\'image de x'
            },
            exemples: {
              lineaire: 'f(x) = 2x + 3',
              quadratique: 'f(x) = x²',
              constante: 'f(x) = 5',
              inverse: 'f(x) = 1/x'
            },
            representation: {
              tableau: 'Tableau de valeurs (x, f(x))',
              graphique: 'Courbe représentative dans un repère',
              formule: 'Expression algébrique f(x) = ...'
            },
            calcul: {
              image: 'Pour calculer f(3) avec f(x) = 2x + 3: f(3) = 2×3 + 3 = 9',
              antecedent: 'Pour trouver x tel que f(x) = 7: 2x + 3 = 7, donc x = 2'
            },
            mauritanianContext: [
              'Calculs de coûts',
              'Problèmes de fonctions',
              'Représentations graphiques',
              'Applications pratiques'
            ]
          },
          questions: [
            "Qu'est-ce qu'une fonction?",
            "Comment calcules-tu f(3) avec f(x) = 2x + 3?",
            "Trouve l'antécédent de 7",
            "Représente la fonction dans un tableau",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule f(4) avec f(x) = x² - 1',
              answer: 'f(4) = 4² - 1 = 16 - 1 = 15'
            },
            {
              type: 'antecedent',
              question: 'Trouve x tel que f(x) = 8 avec f(x) = 2x + 3',
              answer: '2x + 3 = 8, 2x = 5, x = 2,5'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch18-s2',
          title: 'Fonctions linéaires',
          description: 'Apprendre à reconnaître et utiliser les fonctions linéaires',
          concepts: ['Fonction linéaire', 'Coefficient directeur', 'Ordonnée à l\'origine', 'Représentation'],
          objectives: [
            'Reconnaître une fonction linéaire',
            'Identifier le coefficient directeur et l\'ordonnée à l\'origine',
            'Représenter graphiquement'
          ],
          content: {
            definition: {
              lineaire: 'Fonction de la forme f(x) = ax + b',
              coefficient: 'a est le coefficient directeur (pente)',
              ordonnee: 'b est l\'ordonnée à l\'origine'
            },
            proprietes: {
              droite: 'La représentation graphique est une droite',
              pente: 'Le coefficient directeur donne la pente de la droite',
              intersection: 'L\'ordonnée à l\'origine donne le point d\'intersection avec l\'axe des y'
            },
            exemples: {
              f1: 'f(x) = 2x + 3 (a = 2, b = 3)',
              f2: 'f(x) = -x + 1 (a = -1, b = 1)',
              f3: 'f(x) = 3x (a = 3, b = 0)'
            },
            representation: {
              tableau: 'Calculer quelques points (x, f(x))',
              graphique: 'Placer les points et tracer la droite',
              verification: 'Vérifier que la droite passe par les points calculés'
            },
            mauritanianContext: [
              'Calculs de coûts linéaires',
              'Problèmes de fonctions',
              'Représentations graphiques',
              'Applications pratiques'
            ]
          },
          questions: [
            "Qu'est-ce qu'une fonction linéaire?",
            "Identifie le coefficient directeur de f(x) = 3x - 2",
            "Calcule f(0) pour trouver l'ordonnée à l'origine",
            "Représente f(x) = 2x + 1",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie a et b dans f(x) = -2x + 5',
              answer: 'a = -2 (coefficient directeur), b = 5 (ordonnée à l\'origine)'
            },
            {
              type: 'calculation',
              question: 'Calcule f(0) et f(1) pour f(x) = 3x - 1',
              answer: 'f(0) = 3×0 - 1 = -1, f(1) = 3×1 - 1 = 2'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch18-s3',
          title: 'Fonctions affines',
          description: 'Apprendre à reconnaître et utiliser les fonctions affines',
          concepts: ['Fonction affine', 'Variation', 'Sens de variation', 'Représentation'],
          objectives: [
            'Reconnaître une fonction affine',
            'Déterminer le sens de variation',
            'Représenter graphiquement'
          ],
          content: {
            definition: {
              affine: 'Fonction de la forme f(x) = ax + b avec a ≠ 0',
              difference: 'Différente de la fonction linéaire car b peut être non nul'
            },
            variation: {
              croissante: 'Si a > 0, la fonction est croissante',
              decroissante: 'Si a < 0, la fonction est décroissante',
              constante: 'Si a = 0, la fonction est constante'
            },
            exemples: {
              croissante: 'f(x) = 2x + 3 (a = 2 > 0, croissante)',
              decroissante: 'f(x) = -x + 1 (a = -1 < 0, décroissante)',
              constante: 'f(x) = 5 (a = 0, constante)'
            },
            representation: {
              tableau: 'Calculer des points pour différentes valeurs de x',
              graphique: 'Placer les points et tracer la droite',
              analyse: 'Analyser le sens de variation'
            },
            mauritanianContext: [
              'Calculs de coûts variables',
              'Problèmes de fonctions',
              'Représentations graphiques',
              'Applications pratiques'
            ]
          },
          questions: [
            "Qu'est-ce qu'une fonction affine?",
            "Comment détermines-tu le sens de variation?",
            "Analyse la variation de f(x) = -2x + 5",
            "Représente f(x) = x + 3",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'variation',
              question: 'Détermine le sens de variation de f(x) = 3x - 2',
              answer: 'a = 3 > 0, donc la fonction est croissante'
            },
            {
              type: 'representation',
              question: 'Calcule f(-1), f(0), f(1) pour f(x) = -x + 2',
              answer: 'f(-1) = -(-1) + 2 = 3, f(0) = 2, f(1) = -1 + 2 = 1'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch18-s4',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les fonctions',
          concepts: ['Application', 'Problèmes concrets', 'Calculs', 'Représentation'],
          objectives: [
            'Résoudre des problèmes avec des fonctions',
            'Utiliser les propriétés',
            'Représenter graphiquement'
          ],
          content: {
            problems: [
              {
                type: 'cout',
                context: 'Calcul de coût de production',
                question: 'Le coût de production C(x) d\'un produit est donné par C(x) = 2x + 100. Calcule le coût pour 50 unités et représente la fonction',
                solution: 'C(50) = 2×50 + 100 = 200. Représentation: droite de pente 2 passant par (0,100)'
              },
              {
                type: 'distance',
                context: 'Calcul de distance parcourue',
                question: 'Un véhicule parcourt une distance d(t) = 60t + 10 en fonction du temps t. Calcule la distance après 2 heures',
                solution: 'd(2) = 60×2 + 10 = 130 km'
              }
            ],
            mauritanianContext: [
              'Calculs de coûts de production',
              'Problèmes de transport',
              'Fonctions économiques',
              'Applications pratiques'
            ]
          },
          questions: [
            "Résous ce problème de coût de production",
            "Calcule la distance parcourue",
            "Représente la fonction graphiquement",
            "Vérifie tes calculs",
            "Donne un autre exemple d'utilisation"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Fonction f(x) = 3x - 1. Calcule f(2) et f(-1)',
              answer: 'f(2) = 3×2 - 1 = 5, f(-1) = 3×(-1) - 1 = -4'
            },
            {
              type: 'verification',
              question: 'Vérifie que f(0) = -1 pour f(x) = 3x - 1',
              answer: 'f(0) = 3×0 - 1 = 0 - 1 = -1 ✓'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    }
  ]
};

export default YEAR2_MATH_CURRICULUM;