/**
 * Year 3 Math - Questions for Each Section
 * All questions are verifiable and appropriate for app format:
 * - Multiple Choice
 * - True/False (Right or Wrong)
 * - Fill-in-Blank (Typing)
 * - Completion
 *
 * NO drawings, NO file uploads, NO unverifiable questions
 */

export const YEAR3_MATH_SECTION_QUESTIONS: {
  [sectionId: string]: {
    questions: Array<{
      question: string;
      answer: string;
    }>;
    exercises: Array<{
      type: string;
      question: string;
      answer: string | string[]; // Can be string or array for drag_and_drop (order mode)
      wrongAnswers?: string[]; // Optional: for multiple choice questions
      wordBank?: string[]; // Optional: for drag_and_drop exercises
      mode?: 'order' | 'select' | 'construct'; // Optional: for drag_and_drop exercises
    }>;
  };
} = {
  // CHAPTER 1: ARITHMÉTIQUE
  // Section 1: Division euclidienne
  'ch1-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "89 ÷ 7 = 12 reste 5", answer: "vrai" },
      { question: "Dans une division euclidienne, le reste est toujours supérieur au diviseur", answer: "faux" },
      { question: "247 ÷ 15 = 16 reste 7", answer: "vrai" },
      { question: "Dans une division euclidienne, le reste est toujours inférieur au diviseur", answer: "vrai" },
      { question: "385 ÷ 24 = 15 reste 5", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Effectue la division euclidienne: 247 ÷ 15. Quel est le quotient?',
        answer: '16',
        wrongAnswers: ['17', '15', '18']
      },
      {
        type: 'multiple_choice',
        question: 'Effectue la division euclidienne: 247 ÷ 15. Quel est le reste?',
        answer: '7',
        wrongAnswers: ['6', '8', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Un commerçant a 385 oranges à emballer par caisses de 24. Combien de caisses complètes peut-il remplir?',
        answer: '16 caisses',
        wrongAnswers: ['15 caisses', '17 caisses', '18 caisses']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: 89 = 7×12 + 5. Quel est le résultat?',
        answer: '89 = 84 + 5 = 89 ✓',
        wrongAnswers: ['89 = 84 + 4 = 88', '89 = 84 + 6 = 90', '89 = 85 + 5 = 90']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Dans une division euclidienne, le reste est toujours inférieur au diviseur',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '247 ÷ 15 = 16 reste 7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '89 ÷ 7 = 13 reste 5',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Effectue la division euclidienne: 247 ÷ 15 = ? reste ?',
        answer: '16 reste 7',
        wrongAnswers: ['15 reste 7', '16 reste 8', '17 reste 2']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: 247 = 15×? + 7',
        answer: '16',
        wrongAnswers: ['15', '17', '14']
      },
      {
        type: 'multiple_choice',
        question: '385 ÷ 24 = ? reste ?',
        answer: '16 reste 1',
        wrongAnswers: ['15 reste 1', '16 reste 0', '17 reste 1']
      },
      // Drag and Drop - Construction (building division equation)
      {
        type: 'drag_and_drop',
        question: 'Construis la division euclidienne: 247 = 15×___ + ___',
        answer: ['16', '7'],
        wordBank: ['15', '16', '7', '8', '17', '6'],
        mode: 'construct'
      }
    ]
  },

  // Section 2: PGCD et algorithme d'Euclide
  'ch1-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "PGCD(24, 18) = 6", answer: "vrai" },
      { question: "PGCD(156, 52) = 52", answer: "vrai" },
      { question: "L'algorithme d'Euclide permet de calculer le PGCD", answer: "vrai" },
      { question: "PGCD(72, 96) = 18", answer: "faux" },
      { question: "PGCD(a,b) divise toujours a et b", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule PGCD(84, 126) par l\'algorithme d\'Euclide. Quel est le résultat?',
        answer: '42',
        wrongAnswers: ['21', '84', '126']
      },
      {
        type: 'multiple_choice',
        question: 'Un commerçant a 180 dattes et 135 figues. Il veut faire des sachets identiques avec le maximum de fruits dans chaque. Combien de fruits par sachet?',
        answer: '45 fruits par sachet',
        wrongAnswers: ['30 fruits par sachet', '60 fruits par sachet', '90 fruits par sachet']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le PGCD(72, 96)?',
        answer: '24',
        wrongAnswers: ['12', '36', '48']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le PGCD(156, 52)?',
        answer: '52',
        wrongAnswers: ['26', '78', '104']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'PGCD(24, 18) = 6',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'algorithme d\'Euclide permet de calculer le PGCD',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'PGCD(72, 96) = 18',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule PGCD(84, 126) par l\'algorithme d\'Euclide: 126 = 84×1 + 42, 84 = 42×2 + 0. PGCD = ?',
        answer: '42',
        wrongAnswers: ['84', '126', '21']
      },
      {
        type: 'multiple_choice',
        question: 'PGCD(180, 135) = ?',
        answer: '45',
        wrongAnswers: ['90', '135', '15']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le PGCD(72, 96)?',
        answer: '24',
        wrongAnswers: ['12', '48', '72']
      },
      // Drag and Drop - Ordering (steps of Euclid's algorithm)
      {
        type: 'drag_and_drop',
        question: 'Rangez les étapes de l\'algorithme d\'Euclide pour PGCD(84, 126):',
        answer: ['126 = 84×1 + 42', '84 = 42×2 + 0', 'PGCD = 42'],
        wordBank: ['126 = 84×1 + 42', '84 = 42×2 + 0', 'PGCD = 42'],
        mode: 'order'
      }
    ]
  },

  // Section 3: PPCM (Plus Petit Commun Multiple)
  'ch1-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "PPCM(8, 12) = 24", answer: "vrai" },
      { question: "PPCM(15, 25) = 75", answer: "vrai" },
      { question: "PPCM(a,b) × PGCD(a,b) = a × b", answer: "vrai" },
      { question: "PPCM(18, 24) = 36", answer: "faux" },
      { question: "Le PPCM de deux nombres est toujours supérieur ou égal à chacun d'eux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule PPCM(18, 24). Quel est le résultat?',
        answer: '72',
        wrongAnswers: ['36', '48', '96']
      },
      {
        type: 'multiple_choice',
        question: 'Deux bus partent en même temps d\'une station. L\'un fait le trajet toutes les 15 minutes, l\'autre toutes les 25 minutes. Après combien de minutes se retrouveront-ils à la station?',
        answer: '75 minutes',
        wrongAnswers: ['50 minutes', '60 minutes', '100 minutes']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le PPCM(12, 18)?',
        answer: '36',
        wrongAnswers: ['12', '18', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: PPCM(12,18) × PGCD(12,18) = 12 × 18. Quel est le résultat?',
        answer: '36 × 6 = 216 ✓',
        wrongAnswers: ['36 × 6 = 216 ✗', '12 × 18 = 216 ✗', '6 × 36 = 216 ✗']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'PPCM(8, 12) = 24',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'PPCM(a,b) × PGCD(a,b) = a × b',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'PPCM(18, 24) = 36',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule PPCM(18, 24) = ?',
        answer: '72',
        wrongAnswers: ['36', '432', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Deux bus: l\'un toutes les 15 min, l\'autre toutes les 25 min. Quand se retrouvent-ils? PPCM(15,25) = ? minutes',
        answer: '75',
        wrongAnswers: ['150', '375', '40']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: PPCM(12,18) × PGCD(12,18) = 12 × 18 → ? × 6 = 216',
        answer: '36',
        wrongAnswers: ['6', '216', '12']
      },
      // Drag and Drop - Ordering (finding PPCM steps)
      {
        type: 'drag_and_drop',
        question: 'Trouve le PPCM(8, 12) en rangeant les multiples:',
        answer: ['Multiples de 8: 8, 16, 24', 'Multiples de 12: 12, 24', 'PPCM = 24'],
        wordBank: ['Multiples de 8: 8, 16, 24', 'Multiples de 12: 12, 24', 'PPCM = 24'],
        mode: 'order'
      }
    ]
  },

  // Section 4: Nombres premiers
  'ch1-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "2, 3, 5, 7, 11, 13 sont des nombres premiers", answer: "vrai" },
      { question: "1 est un nombre premier", answer: "faux" },
      { question: "252 = 2² × 3² × 7", answer: "vrai" },
      { question: "Tous les nombres impairs sont premiers", answer: "faux" },
      { question: "360 = 2³ × 3² × 5", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces nombres, lesquels sont premiers: 13, 15, 17, 21, 23?',
        answer: '13, 17, 23 sont premiers',
        wrongAnswers: ['15, 21 sont premiers', 'Tous sont premiers', 'Aucun n\'est premier']
      },
      {
        type: 'multiple_choice',
        question: 'Décompose 252 en facteurs premiers. Quelle est la décomposition correcte?',
        answer: '252 = 2² × 3² × 7',
        wrongAnswers: ['252 = 2³ × 3² × 7', '252 = 2² × 3 × 7', '252 = 2 × 3² × 7²']
      },
      {
        type: 'multiple_choice',
        question: 'Décompose 360 en facteurs premiers. Quelle est la décomposition correcte?',
        answer: '360 = 2³ × 3² × 5',
        wrongAnswers: ['360 = 2² × 3² × 5', '360 = 2³ × 3 × 5', '360 = 2 × 3² × 5²']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces nombres, lequel est premier: 21, 23, 25, 27?',
        answer: '23',
        wrongAnswers: ['21', '25', '27']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '1 est un nombre premier',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '2, 3, 5, 7, 11, 13 sont des nombres premiers',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les nombres impairs sont premiers',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Décompose 252 en facteurs premiers: 252 = ?',
        answer: '2² × 3² × 7',
        wrongAnswers: ['2² × 3 × 7', '2³ × 3² × 7', '2 × 3² × 7']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces nombres, lesquels sont premiers: 13, 15, 17, 21, 23?',
        answer: '13, 17, 23',
        wrongAnswers: ['15, 21', 'Tous sont premiers', 'Aucun n\'est premier']
      },
      {
        type: 'multiple_choice',
        question: 'Décompose 360 en facteurs premiers: 360 = ?',
        answer: '2³ × 3² × 5',
        wrongAnswers: ['2² × 3² × 5', '2³ × 3 × 5', '2² × 3³ × 5']
      },
      // Drag and Drop - Selection (choosing prime numbers)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces nombres, sélectionne le plus petit nombre premier: 13, 15, 17, 21, 23',
        answer: '13',
        wordBank: ['13', '15', '17', '21', '23'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 2: NOMBRES RÉELS ET RADICAUX
  // Section 1: Ensembles de nombres
  'ch2-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ", answer: "vrai" },
      { question: "√2 est un nombre irrationnel", answer: "vrai" },
      { question: "Tout nombre rationnel est décimal", answer: "faux" },
      { question: "π est un nombre irrationnel", answer: "vrai" },
      { question: "√16 est un nombre irrationnel", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel ensemble contient tous les autres parmi ℕ, ℤ, ℚ, ℝ?',
        answer: 'ℝ',
        wrongAnswers: ['ℕ', 'ℤ', 'ℚ']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces nombres, lesquels sont rationnels: √16, √3, 0,333..., π?',
        answer: '√16 = 4 et 0,333... = 1/3',
        wrongAnswers: ['√3 et π', 'Tous', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Le nombre √2 appartient à quel ensemble?',
        answer: 'ℝ mais pas ℚ (irrationnel)',
        wrongAnswers: ['ℚ seulement', 'ℤ seulement', 'ℕ seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Le nombre 5 appartient à quels ensembles?',
        answer: 'ℕ, ℤ, 𝔻, ℚ, ℝ',
        wrongAnswers: ['ℕ seulement', 'ℕ et ℤ seulement', 'ℚ et ℝ seulement']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Tout nombre décimal est rationnel',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tout nombre rationnel est décimal',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '√2 est un nombre irrationnel',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Classe ces nombres: 5, -3, 2/7, √5, 3,14. Le nombre √5 appartient à:',
        answer: 'ℝ mais pas ℚ',
        wrongAnswers: ['ℚ', 'ℤ', 'ℕ']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi √16, √3, 0,333..., π, lesquels sont rationnels?',
        answer: '√16 = 4 et 0,333... = 1/3',
        wrongAnswers: ['√16 et √3', '0,333... et π', 'Tous']
      },
      {
        type: 'multiple_choice',
        question: 'La relation entre les ensembles est: ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ?',
        answer: 'ℝ',
        wrongAnswers: ['ℚ', 'ℤ', 'ℕ']
      },
      // Drag and Drop - Ordering (sets from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces ensembles du plus petit au plus grand: ℕ, ℤ, ℚ, ℝ',
        answer: ['ℕ', 'ℤ', 'ℚ', 'ℝ'],
        wordBank: ['ℕ', 'ℤ', 'ℚ', 'ℝ'],
        mode: 'order'
      }
    ]
  },

  // Section 2: Simplification de radicaux
  'ch2-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "√36 = 6", answer: "vrai" },
      { question: "√81 = 9", answer: "vrai" },
      { question: "√(a×b) = √a × √b", answer: "vrai" },
      { question: "√50 = 5√2", answer: "vrai" },
      { question: "√32 = 8", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule √36. Quel est le résultat?',
        answer: '6',
        wrongAnswers: ['36', '18', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √32. Quelle est la forme simplifiée?',
        answer: '4√2',
        wrongAnswers: ['8√2', '2√8', '16√2']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √75. Quelle est la forme simplifiée?',
        answer: '5√3',
        wrongAnswers: ['3√5', '15√5', '25√3']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √50. Quelle est la forme simplifiée?',
        answer: '5√2',
        wrongAnswers: ['10√5', '2√25', '25√2']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '√36 = 6',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√(a×b) = √a × √b',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√32 = 8',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule √81 = ?',
        answer: '9',
        wrongAnswers: ['81', '3', '27']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √32 = ?',
        answer: '4√2',
        wrongAnswers: ['2√8', '8√2', '16√2']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √75 = ?',
        answer: '5√3',
        wrongAnswers: ['3√5', '15√5', '25√3']
      },
      // Drag and Drop - Construction (building simplified radical)
      {
        type: 'drag_and_drop',
        question: 'Simplifie √32: √32 = √(16×2) = ___ × √2',
        answer: '4',
        wordBank: ['2', '4', '8', '16'],
        mode: 'select'
      }
    ]
  },

  // Section 3: Opérations avec radicaux
  'ch2-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "3√2 + 5√2 = 8√2", answer: "vrai" },
      { question: "√2 × √3 = √6", answer: "vrai" },
      { question: "On peut additionner √2 + √3 directement", answer: "faux" },
      { question: "On ne peut pas additionner √2 + √3 directement", answer: "vrai" },
      { question: "4√7 + 3√7 = 7√14", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie: 4√7 + 3√7 - √7. Quel est le résultat?',
        answer: '6√7',
        wrongAnswers: ['8√7', '7√7', '6√21']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: √6 × √15. Quel est le résultat simplifié?',
        answer: '3√10',
        wrongAnswers: ['√90', '9√10', '√21']
      },
      {
        type: 'multiple_choice',
        question: 'Rationalise: 5/√3. Quel est le résultat?',
        answer: '5√3/3',
        wrongAnswers: ['5√3', '3√5/5', '15/√3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 3√2 + 5√2. Quel est le résultat?',
        answer: '8√2',
        wrongAnswers: ['8√4', '15√2', '2√8']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '3√2 + 5√2 = 8√2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√2 × √3 = √6',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut additionner √2 + √3 directement',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie: 4√7 + 3√7 - √7 = ?',
        answer: '6√7',
        wrongAnswers: ['7√7', '8√7', '5√7']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: √6 × √15 = ? (forme simplifiée)',
        answer: '3√10',
        wrongAnswers: ['√90', '9√10', '3√90']
      },
      {
        type: 'multiple_choice',
        question: 'Rationalise: 5/√3 = ?',
        answer: '5√3/3',
        wrongAnswers: ['5√3', '15/√3', '5/3']
      },
      // Drag and Drop - Construction (building radical addition)
      {
        type: 'drag_and_drop',
        question: 'Simplifie: 4√7 + 3√7 - √7 = ___ × √7',
        answer: '6',
        wordBank: ['4', '6', '7', '8'],
        mode: 'select'
      }
    ]
  },

  // Section 4: Équations avec radicaux
  'ch2-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "√x = 5 a pour solution x = 25", answer: "vrai" },
      { question: "√(2x+3) = 5 a pour solution x = 11", answer: "vrai" },
      { question: "Il faut toujours vérifier les solutions d'une équation avec radicaux", answer: "vrai" },
      { question: "√x = -5 a pour solution x = 25", answer: "faux" },
      { question: "Pour résoudre √x = a, on élève au carré les deux membres", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: √x = 7. Quelle est la solution?',
        answer: 'x = 49',
        wrongAnswers: ['x = 7', 'x = 14', 'x = 0']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: √(3x-5) = 4. Quelle est la solution?',
        answer: 'x = 7',
        wrongAnswers: ['x = 4', 'x = 3', 'x = 21']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: x=7 est solution de √(3x-5) = 4. Quel est le résultat?',
        answer: '√(21-5) = √16 = 4 ✓',
        wrongAnswers: ['√(21-5) = √16 = 4 ✗', '√(7-5) = √2 ≠ 4', '√(21-5) = √21 ≠ 4']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: √x = 9. Quelle est la solution?',
        answer: 'x = 81',
        wrongAnswers: ['x = 9', 'x = 18', 'x = 3']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '√x = 5 a pour solution x = 25',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Il faut toujours vérifier les solutions d\'une équation avec radicaux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√x = -5 a pour solution x = 25',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: √x = 7. Donc x = ?',
        answer: '49',
        wrongAnswers: ['7', '14', '√7']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: √(3x-5) = 4. Donc 3x-5 = ?, donc x = ?',
        answer: '16, 7',
        wrongAnswers: ['16, 21', '4, 3', '12, 17/3']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: x=7 est solution de √(3x-5) = 4. √(3×7-5) = √? = 4',
        answer: '16',
        wrongAnswers: ['21', '12', '4']
      },
      // Drag and Drop - Construction (building equation solution)
      {
        type: 'drag_and_drop',
        question: 'Résous: √x = 7. Donc x = 7² = ___',
        answer: '49',
        wordBank: ['7', '14', '49', '9'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 3: DÉVELOPPEMENT, FACTORISATION ET IDENTITÉS REMARQUABLES
  // Section 1: Développement
  'ch3-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "3(x+5) = 3x + 15", answer: "vrai" },
      { question: "(x+2)(x+3) = x² + 5x + 6", answer: "vrai" },
      { question: "La distributivité double: (a+b)(c+d) = ac + ad + bc + bd", answer: "vrai" },
      { question: "5(2x-3) = 10x - 3", answer: "faux" },
      { question: "(x+4)(x+7) = x² + 11x + 28", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: 5(2x-3). Quel est le résultat?',
        answer: '10x - 15',
        wrongAnswers: ['10x - 3', '7x - 15', '10x + 15']
      },
      {
        type: 'multiple_choice',
        question: 'Développe et réduis: (x+4)(x+7). Quel est le résultat?',
        answer: 'x² + 11x + 28',
        wrongAnswers: ['x² + 11x + 11', 'x² + 28x + 11', 'x² + 3x + 28']
      },
      {
        type: 'multiple_choice',
        question: 'Développe et réduis: 3(x+2) + 2(x-5). Quel est le résultat?',
        answer: '5x - 4',
        wrongAnswers: ['5x + 4', '5x - 16', 'x - 4']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: 7(3x-4). Quel est le résultat?',
        answer: '21x - 28',
        wrongAnswers: ['21x - 4', '10x - 28', '21x + 28']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '3(x+5) = 3x + 15',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La distributivité double: (a+b)(c+d) = ac + ad + bc + bd',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '5(2x-3) = 10x - 3',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: 5(2x-3) = ?',
        answer: '10x - 15',
        wrongAnswers: ['10x + 15', '7x - 8', '5x - 3']
      },
      {
        type: 'multiple_choice',
        question: 'Développe et réduis: (x+4)(x+7) = ?',
        answer: 'x² + 11x + 28',
        wrongAnswers: ['x² + 3x + 28', 'x² + 11x + 11', '2x + 11']
      },
      {
        type: 'multiple_choice',
        question: 'Développe et réduis: 3(x+2) + 2(x-5) = ?',
        answer: '5x - 4',
        wrongAnswers: ['5x + 4', '5x - 16', '6x - 4']
      },
      // Drag and Drop - Construction (building expanded expression)
      {
        type: 'drag_and_drop',
        question: 'Développe: 5(2x-3) = 10x ___ 15',
        answer: '-',
        wordBank: ['+', '-', '×', '÷'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Identités remarquables (a+b)² et (a-b)²
  'ch3-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "(x+3)² = x² + 6x + 9", answer: "vrai" },
      { question: "(x-4)² = x² - 8x + 16", answer: "vrai" },
      { question: "(a+b)² = a² + 2ab + b²", answer: "vrai" },
      { question: "(x+6)² = x² + 12x + 36", answer: "vrai" },
      { question: "(x-3)² = x² - 9", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: (x+6)². Quel est le résultat?',
        answer: 'x² + 12x + 36',
        wrongAnswers: ['x² + 36', 'x² + 6x + 36', 'x² + 12x + 6']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (2x-3)². Quel est le résultat?',
        answer: '4x² - 12x + 9',
        wrongAnswers: ['4x² - 9', '4x² + 12x + 9', '2x² - 12x + 9']
      },
      {
        type: 'multiple_choice',
        question: 'Un carré a un côté de (x+4) cm. Quelle est son aire exprimée en fonction de x?',
        answer: 'A = x² + 8x + 16 cm²',
        wrongAnswers: ['A = x² + 16 cm²', 'A = x² + 8x cm²', 'A = x² + 4x + 16 cm²']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (x+5)². Quel est le résultat?',
        answer: 'x² + 10x + 25',
        wrongAnswers: ['x² + 25', 'x² + 5x + 25', 'x² + 10x + 5']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '(x+3)² = x² + 6x + 9',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(a+b)² = a² + 2ab + b²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(x-3)² = x² - 9',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: (x+6)² = ?',
        answer: 'x² + 12x + 36',
        wrongAnswers: ['x² + 6x + 36', 'x² + 12x + 6', 'x² + 36']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (2x-3)² = ?',
        answer: '4x² - 12x + 9',
        wrongAnswers: ['4x² - 6x + 9', '2x² - 12x + 9', '4x² + 12x + 9']
      },
      {
        type: 'multiple_choice',
        question: 'Un carré de côté (x+4) cm a une aire A = ? cm²',
        answer: 'x² + 8x + 16',
        wrongAnswers: ['x² + 4x + 16', 'x² + 8x + 4', 'x² + 16']
      },
      // Drag and Drop - Construction (building identity expansion)
      {
        type: 'drag_and_drop',
        question: 'Développe: (x+6)² = x² + ___x + 36',
        answer: '12',
        wordBank: ['6', '12', '18', '36'],
        mode: 'select'
      }
    ]
  },

  // Section 3: Identité remarquable (a+b)(a-b) = a² - b²
  'ch3-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "(x+5)(x-5) = x² - 25", answer: "vrai" },
      { question: "x² - 16 = (x+4)(x-4)", answer: "vrai" },
      { question: "(a+b)(a-b) = a² - b²", answer: "vrai" },
      { question: "(x+8)(x-8) = x² - 8", answer: "faux" },
      { question: "x² - 36 = (x+6)(x+6)", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: (x+8)(x-8). Quel est le résultat?',
        answer: 'x² - 64',
        wrongAnswers: ['x² - 8', 'x² + 64', 'x² - 16x + 64']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² - 36. Quelle est la factorisation correcte?',
        answer: '(x+6)(x-6)',
        wrongAnswers: ['(x+6)(x+6)', '(x-6)(x-6)', '(x+12)(x-12)']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule rapidement: 105 × 95 en utilisant l\'identité remarquable. Quel est le résultat?',
        answer: '9975',
        wrongAnswers: ['10000', '9900', '10025']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² - 49. Quelle est la factorisation correcte?',
        answer: '(x+7)(x-7)',
        wrongAnswers: ['(x+7)(x+7)', '(x-7)(x-7)', '(x+14)(x-14)']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '(x+5)(x-5) = x² - 25',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(a+b)(a-b) = a² - b²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x² - 36 = (x+6)(x+6)',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: (x+8)(x-8) = ?',
        answer: 'x² - 64',
        wrongAnswers: ['x² + 64', 'x² - 16', 'x² - 8']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² - 36 = ?',
        answer: '(x+6)(x-6)',
        wrongAnswers: ['(x+36)(x-36)', '(x+3)(x-3)', '(x+12)(x-12)']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule rapidement: 105 × 95 = (100+5)(100-5) = 10000 - ? = 9975',
        answer: '25',
        wrongAnswers: ['5', '50', '100']
      },
      // Drag and Drop - Construction (building difference of squares)
      {
        type: 'drag_and_drop',
        question: 'Factorise: x² - 49 = (x+7)(x___)',
        answer: '-7',
        wordBank: ['+7', '-7', '×7', '÷7'],
        mode: 'select'
      }
    ]
  },

  // Section 4: Factorisation
  'ch3-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "7x + 14 = 7(x+2)", answer: "vrai" },
      { question: "x² + 8x + 16 = (x+4)²", answer: "vrai" },
      { question: "5x² - 20 = 5(x+2)(x-2)", answer: "vrai" },
      { question: "4x + 12 = 4(x+3)", answer: "vrai" },
      { question: "3x² - 27 = 3x(x-9)", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Factorise: 7x + 14. Quelle est la factorisation correcte?',
        answer: '7(x+2)',
        wrongAnswers: ['7(x-2)', 'x(7+14)', '7x(x+2)']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² + 10x + 25. Quelle est la factorisation correcte?',
        answer: '(x+5)²',
        wrongAnswers: ['(x+10)²', '(x+5)(x-5)', '(x+25)²']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: 3x² - 27. Quelle est la factorisation correcte?',
        answer: '3(x+3)(x-3)',
        wrongAnswers: ['3x(x-9)', '3(x²-9)', '(3x+3)(x-3)']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: 4x + 12. Quelle est la factorisation correcte?',
        answer: '4(x+3)',
        wrongAnswers: ['4(x-3)', 'x(4+12)', '4x(x+3)']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'x² + 8x + 16 = (x+4)²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '5x² - 20 = 5(x+2)(x-2)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '3x² - 27 = 3x(x-9)',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Factorise: 7x + 14 = ?',
        answer: '7(x+2)',
        wrongAnswers: ['7(x+14)', 'x(7+14)', '7x(1+2)']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² + 10x + 25 = ?',
        answer: '(x+5)²',
        wrongAnswers: ['(x+10)(x+25)', '(x+2)(x+5)', '(x+5)(x-5)']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: 3x² - 27 = ?',
        answer: '3(x+3)(x-3)',
        wrongAnswers: ['3(x²-9)', '3(x+9)(x-9)', '(3x+3)(x-3)']
      },
      // Drag and Drop - Construction (building factorization)
      {
        type: 'drag_and_drop',
        question: 'Factorise: 7x + 14 = 7(x + ___)',
        answer: '2',
        wordBank: ['1', '2', '7', '14'],
        mode: 'select'
      }
    ]
  },

  // Section 5: Résolution d'équations par factorisation
  'ch3-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "x² - 7x = 0 a pour solutions x = 0 et x = 7", answer: "vrai" },
      { question: "x² - 9 = 0 a pour solutions x = 3 et x = -3", answer: "vrai" },
      { question: "On peut résoudre des équations par factorisation", answer: "vrai" },
      { question: "x² - 4 = 0 a pour solution unique x = 2", answer: "faux" },
      { question: "Si un produit est nul, alors au moins un des facteurs est nul", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous par factorisation: x² - 7x = 0. Quelles sont les solutions?',
        answer: 'x = 0 ou x = 7',
        wrongAnswers: ['x = 0 seulement', 'x = 7 seulement', 'x = 0 ou x = -7']
      },
      {
        type: 'multiple_choice',
        question: 'Résous par factorisation: x² - 9 = 0. Quelles sont les solutions?',
        answer: 'x = 3 ou x = -3',
        wrongAnswers: ['x = 3 seulement', 'x = -3 seulement', 'x = 9 ou x = -9']
      },
      {
        type: 'multiple_choice',
        question: 'Un carré a un côté de x cm. Si on augmente le côté de 3 cm, l\'aire augmente de 39 cm². Quelle est la valeur de x?',
        answer: 'x = 5 cm',
        wrongAnswers: ['x = 3 cm', 'x = 6 cm', 'x = 4 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Résous par factorisation: x² - 4x = 0. Quelles sont les solutions?',
        answer: 'x = 0 ou x = 4',
        wrongAnswers: ['x = 0 seulement', 'x = 4 seulement', 'x = 2 ou x = -2']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'On peut résoudre des équations par factorisation',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x² - 4 = 0 a pour solution unique x = 2',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Si un produit est nul, alors au moins un des facteurs est nul',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous par factorisation: x² - 7x = 0. x(?) = 0, donc x = 0 ou x = ?',
        answer: 'x-7, 7',
        wrongAnswers: ['x+7, -7', '7-x, 7', 'x-7, -7']
      },
      {
        type: 'multiple_choice',
        question: 'Résous par factorisation: x² - 9 = 0. (x+3)(x-3) = 0, donc x = ? ou x = ?',
        answer: '3, -3',
        wrongAnswers: ['-3, 3', '9, -9', '0, 9']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: x=5 est solution de (x+3)² - x² = 39. (5+3)² - 5² = 64 - ? = 39',
        answer: '25',
        wrongAnswers: ['5', '64', '39']
      },
      // Drag and Drop - Construction (building equation solution)
      {
        type: 'drag_and_drop',
        question: 'Résous: x² - 7x = 0. Factorise: x(x-7) = 0. Donc x = 0 ou x = ___',
        answer: '7',
        wordBank: ['0', '7', '-7', '1'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 4: CALCUL LITTÉRAL
  // Section 1: Simplification d'expressions littérales
  'ch4-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "x - (2 + 3x) = -2x - 2", answer: "vrai" },
      { question: "4x + 2 - x + 5 = 3x + 7", answer: "vrai" },
      { question: "3(x+2) - 2(x-1) = x + 8", answer: "vrai" },
      { question: "x - (2 + 3x) = x - 2 + 3x", answer: "faux" },
      { question: "5x - 3x = 2x", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Supprime les parenthèses et réduis: x - (2 + 3x). Quel est le résultat?',
        answer: '-2x - 2',
        wrongAnswers: ['4x - 2', 'x - 2 + 3x', '-2x + 2']
      },
      {
        type: 'multiple_choice',
        question: 'Réduis: 4x + 2 - x + 5. Quel est le résultat?',
        answer: '3x + 7',
        wrongAnswers: ['3x + 3', '5x + 7', '3x - 3']
      },
      {
        type: 'multiple_choice',
        question: 'Réduis: 3(x+2) - 2(x-1). Quel est le résultat?',
        answer: 'x + 8',
        wrongAnswers: ['x + 4', '5x + 4', 'x - 4']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie: 7x - 4x + 3 - 1. Quel est le résultat?',
        answer: '3x + 2',
        wrongAnswers: ['3x + 4', '11x + 2', '3x - 2']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '4x + 2 - x + 5 = 3x + 7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x - (2 + 3x) = x - 2 + 3x',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '5x - 3x = 2x',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Supprime les parenthèses et réduis: x - (2 + 3x) = ?',
        answer: '-2x - 2',
        wrongAnswers: ['4x - 2', '-2x + 2', '2x - 2']
      },
      {
        type: 'multiple_choice',
        question: 'Réduis: 4x + 2 - x + 5 = ?',
        answer: '3x + 7',
        wrongAnswers: ['3x - 7', '5x + 7', '3x + 3']
      },
      {
        type: 'multiple_choice',
        question: 'Réduis: 3(x+2) - 2(x-1) = ?',
        answer: 'x + 8',
        wrongAnswers: ['x - 8', '5x + 4', 'x + 4']
      },
      // Drag and Drop - Ordering (steps of simplification)
      {
        type: 'drag_and_drop',
        question: 'Rangez les étapes pour simplifier: x - (2 + 3x)',
        answer: ['x - 2 - 3x', '-2x - 2'],
        wordBank: ['x - 2 - 3x', '-2x - 2'],
        mode: 'order'
      }
    ]
  },

  // Section 2: Développement et identités remarquables
  'ch4-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "(x+7)² = x² + 14x + 49", answer: "vrai" },
      { question: "(3x-4)² = 9x² - 24x + 16", answer: "vrai" },
      { question: "(x+9)(x-9) = x² - 81", answer: "vrai" },
      { question: "(x+7)² = x² + 49", answer: "faux" },
      { question: "(2x+5)² = 4x² + 20x + 25", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: (x+7)². Quel est le résultat?',
        answer: 'x² + 14x + 49',
        wrongAnswers: ['x² + 49', 'x² + 7x + 49', 'x² + 14x + 7']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (3x-4)². Quel est le résultat?',
        answer: '9x² - 24x + 16',
        wrongAnswers: ['9x² - 16', '9x² + 24x + 16', '3x² - 24x + 16']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (x+9)(x-9). Quel est le résultat?',
        answer: 'x² - 81',
        wrongAnswers: ['x² - 9', 'x² + 81', 'x² - 18x + 81']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (2x+5)². Quel est le résultat?',
        answer: '4x² + 20x + 25',
        wrongAnswers: ['4x² + 25', '4x² + 10x + 25', '2x² + 20x + 25']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '(x+7)² = x² + 14x + 49',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(x+7)² = x² + 49',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '(x+9)(x-9) = x² - 81',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: (x+7)² = ?',
        answer: 'x² + 14x + 49',
        wrongAnswers: ['x² + 7x + 49', 'x² + 14x + 7', 'x² + 49']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (3x-4)² = ?',
        answer: '9x² - 24x + 16',
        wrongAnswers: ['9x² - 12x + 16', '3x² - 24x + 16', '9x² + 24x + 16']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (x+9)(x-9) = ?',
        answer: 'x² - 81',
        wrongAnswers: ['x² + 81', 'x² - 18', 'x² - 9']
      },
      // Drag and Drop - Construction (building identity expansion)
      {
        type: 'drag_and_drop',
        question: 'Développe: (x+7)² = x² + ___x + 49',
        answer: '14',
        wordBank: ['7', '14', '21', '49'],
        mode: 'select'
      }
    ]
  },

  // Section 3: Factorisation d'expressions littérales
  'ch4-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "4x + 12 = 4(x+3)", answer: "vrai" },
      { question: "x² + 10x + 25 = (x+5)²", answer: "vrai" },
      { question: "3x² - 27 = 3(x+3)(x-3)", answer: "vrai" },
      { question: "6x + 18 = 6(x+3)", answer: "vrai" },
      { question: "x² + 10x + 25 = (x+10)²", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Factorise: 4x + 12. Quelle est la factorisation correcte?',
        answer: '4(x+3)',
        wrongAnswers: ['4(x-3)', 'x(4+12)', '4x(x+3)']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² + 10x + 25. Quelle est la factorisation correcte?',
        answer: '(x+5)²',
        wrongAnswers: ['(x+10)²', '(x+5)(x-5)', '(x+25)²']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: 3x² - 27. Quelle est la factorisation correcte?',
        answer: '3(x+3)(x-3)',
        wrongAnswers: ['3x(x-9)', '3(x²-9)', '(3x+3)(x-3)']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: 6x + 18. Quelle est la factorisation correcte?',
        answer: '6(x+3)',
        wrongAnswers: ['6(x-3)', 'x(6+18)', '6x(x+3)']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'x² + 10x + 25 = (x+5)²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x² + 10x + 25 = (x+10)²',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '4x + 12 = 4(x+3)',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Factorise: 4x + 12 = ?',
        answer: '4(x+3)',
        wrongAnswers: ['4(x-3)', 'x(4+12)', '4x(x+3)']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² + 10x + 25 = ?',
        answer: '(x+5)²',
        wrongAnswers: ['(x+10)²', '(x+5)(x-5)', '(x+25)²']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: 3x² - 27 = ?',
        answer: '3(x+3)(x-3)',
        wrongAnswers: ['3x(x-9)', '3(x²-9)', '(3x+3)(x-3)']
      },
      // Drag and Drop - Construction (building factorization)
      {
        type: 'drag_and_drop',
        question: 'Factorise: 4x + 12 = 4(x + ___)',
        answer: '3',
        wordBank: ['3', '4', '12', '16'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 5: ÉQUATIONS ET INÉQUATIONS
  // CHAPTER 5: ÉQUATIONS ET INÉQUATIONS
  // Section 1: Résolution d'équations du premier degré
  'ch5-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "x + 8 = 15 a pour solution x = 7", answer: "vrai" },
      { question: "4x - 3 = 17 a pour solution x = 5", answer: "vrai" },
      { question: "2(x+3) = x + 10 a pour solution x = 4", answer: "vrai" },
      { question: "3x + 5 = 20 a pour solution x = 5", answer: "vrai" },
      { question: "x + 8 = 15 a pour solution x = 23", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: x + 8 = 15. Quelle est la solution?',
        answer: 'x = 7',
        wrongAnswers: ['x = 23', 'x = 8', 'x = 15']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 4x - 3 = 17. Quelle est la solution?',
        answer: 'x = 5',
        wrongAnswers: ['x = 4', 'x = 20', 'x = 14']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 2(x+3) = x + 10. Quelle est la solution?',
        answer: 'x = 4',
        wrongAnswers: ['x = 3', 'x = 7', 'x = 16']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 3x + 5 = 20. Quelle est la solution?',
        answer: 'x = 5',
        wrongAnswers: ['x = 15', 'x = 25', 'x = 6']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'x + 8 = 15 a pour solution x = 7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '4x - 3 = 17 a pour solution x = 5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x + 8 = 15 a pour solution x = 23',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: x + 8 = 15. Donc x = ?',
        answer: '7',
        wrongAnswers: ['23', '8', '15']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 4x - 3 = 17. Donc 4x = ?, donc x = ?',
        answer: '20, 5',
        wrongAnswers: ['14, 3.5', '20, 4', '17, 5']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 2(x+3) = x + 10. Développe: 2x + 6 = x + 10. Donc x = ?',
        answer: '4',
        wrongAnswers: ['10', '16', '2']
      },
      // Drag and Drop - Construction (building equation solution)
      {
        type: 'drag_and_drop',
        question: 'Résous: x + 8 = 15. Donc x = 15 ___ 8 = ___',
        answer: ['-', '7'],
        wordBank: ['+', '-', '7', '23', '8'],
        mode: 'construct'
      }
    ]
  },

  // Section 2: Résolution d'inéquations du premier degré
  'ch5-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "x - 4 > 7 a pour solution x > 11", answer: "vrai" },
      { question: "-3x ≤ 12 a pour solution x ≥ -4", answer: "vrai" },
      { question: "Quand on multiplie par un nombre négatif, on inverse le sens de l'inégalité", answer: "vrai" },
      { question: "x - 4 > 7 a pour solution x > 3", answer: "faux" },
      { question: "2x > 10 a pour solution x > 5", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: x - 4 > 7. Quelle est la solution?',
        answer: 'x > 11',
        wrongAnswers: ['x > 3', 'x < 11', 'x ≥ 11']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: -3x ≤ 12. Quelle est la solution?',
        answer: 'x ≥ -4',
        wrongAnswers: ['x ≤ -4', 'x ≥ 4', 'x ≤ 4']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 2(x-1) < 3x + 5. Quelle est la solution?',
        answer: 'x > -7',
        wrongAnswers: ['x < -7', 'x > 7', 'x < 7']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 2x > 10. Quelle est la solution?',
        answer: 'x > 5',
        wrongAnswers: ['x > 10', 'x < 5', 'x ≥ 5']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Quand on multiplie par un nombre négatif, on inverse le sens de l\'inégalité',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x - 4 > 7 a pour solution x > 3',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '2x > 10 a pour solution x > 5',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Résous: x - 4 > 7. Donc x > ?',
        answer: '11',
        wrongAnswers: ['3', '7', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: -3x ≤ 12. En divisant par -3 (et inversant le sens), on obtient x ≥ ?',
        answer: '-4',
        wrongAnswers: ['4', '-12', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 2x > 10. Donc x > ?',
        answer: '5',
        wrongAnswers: ['10', '20', '2']
      },
      // Drag and Drop - Selection (choosing correct inequality)
      {
        type: 'drag_and_drop',
        question: 'Résous: x - 4 > 7. Donc x ___ 11',
        answer: '>',
        wordBank: ['>', '<', '≥', '≤'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 6: GÉOMÉTRIE - ANGLES ET CERCLE
  // Section 1: Angles au centre et arcs de cercle
  'ch6-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un angle au centre a son sommet au centre du cercle", answer: "vrai" },
      { question: "La longueur d'un arc = (θ/360°) × 2πr", answer: "vrai" },
      { question: "L'aire d'un secteur = (θ/360°) × πr²", answer: "vrai" },
      { question: "Un angle au centre de 180° intercepte un demi-cercle", answer: "vrai" },
      { question: "La longueur d'un arc ne dépend pas de l'angle au centre", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un cercle a un rayon de 12 cm. Un angle au centre mesure 30°. Quelle est la longueur de l\'arc intercepté?',
        answer: '2π cm (≈ 6,28 cm)',
        wrongAnswers: ['π cm', '4π cm', '6π cm']
      },
      {
        type: 'multiple_choice',
        question: 'Un secteur de cercle a un rayon de 5 cm et un angle au centre de 72°. Quelle est son aire?',
        answer: '5π cm² (≈ 15,7 cm²)',
        wrongAnswers: ['10π cm²', '2π cm²', '72π cm²']
      },
      {
        type: 'multiple_choice',
        question: 'Un angle au centre de 90° intercepte quelle fraction du cercle?',
        answer: '1/4 du cercle (quart de cercle)',
        wrongAnswers: ['1/2 du cercle', '1/3 du cercle', 'Tout le cercle']
      },
      {
        type: 'multiple_choice',
        question: 'Un angle au centre de 180° intercepte:',
        answer: 'Un demi-cercle',
        wrongAnswers: ['Un quart de cercle', 'Un tiers de cercle', 'Tout le cercle']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Un angle au centre a son sommet au centre du cercle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un angle au centre de 180° intercepte un demi-cercle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La longueur d\'un arc ne dépend pas de l\'angle au centre',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Cercle de rayon 12 cm, angle au centre 30°. La longueur de l\'arc L = (30/360) × 2π × 12 = ? cm',
        answer: '2π',
        wrongAnswers: ['π', '4π', '6π']
      },
      {
        type: 'multiple_choice',
        question: 'Secteur de rayon 5 cm, angle 72°. L\'aire A = (72/360) × π × 25 = ? cm²',
        answer: '5π',
        wrongAnswers: ['10π', '25π', 'π']
      },
      {
        type: 'multiple_choice',
        question: 'Un angle au centre de 90° intercepte combien du cercle?',
        answer: '1/4',
        wrongAnswers: ['1/2', '1/3', '1/8']
      },
      // Drag and Drop - Selection (choosing formula)
      {
        type: 'drag_and_drop',
        question: 'Quelle formule calcule la longueur d\'un arc? L = (θ/360°) × ___',
        answer: '2πr',
        wordBank: ['2πr', 'πr²', '2πr²', 'πr'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Angles inscrits dans un cercle
  'ch6-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'angle inscrit = (1/2) × angle au centre interceptant le même arc", answer: "vrai" },
      { question: "Un angle inscrit dans un demi-cercle est droit", answer: "vrai" },
      { question: "Si angle au centre = 120°, alors angle inscrit = 60°", answer: "vrai" },
      { question: "Un angle inscrit peut être supérieur à l'angle au centre interceptant le même arc", answer: "faux" },
      { question: "Tous les angles inscrits interceptant le même arc sont égaux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un angle au centre mesure 120°. Quel est l\'angle inscrit interceptant le même arc?',
        answer: '60°',
        wrongAnswers: ['120°', '30°', '240°']
      },
      {
        type: 'multiple_choice',
        question: 'Un angle inscrit mesure 42°. Quel est l\'angle au centre interceptant le même arc?',
        answer: '84°',
        wrongAnswers: ['42°', '21°', '168°']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle est inscrit dans un cercle avec un côté comme diamètre. Que peut-on dire du triangle?',
        answer: 'Il est rectangle',
        wrongAnswers: ['Il est équilatéral', 'Il est isocèle', 'Il est quelconque']
      },
      {
        type: 'multiple_choice',
        question: 'Un angle au centre mesure 90°. Quel est l\'angle inscrit interceptant le même arc?',
        answer: '45°',
        wrongAnswers: ['90°', '180°', '30°']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Un angle inscrit dans un demi-cercle est droit',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un angle inscrit peut être supérieur à l\'angle au centre interceptant le même arc',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Tous les angles inscrits interceptant le même arc sont égaux',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Angle au centre = 120°. L\'angle inscrit interceptant le même arc = ?°',
        answer: '60',
        wrongAnswers: ['120', '30', '240']
      },
      {
        type: 'multiple_choice',
        question: 'Angle inscrit = 42°. L\'angle au centre interceptant le même arc = ?°',
        answer: '84',
        wrongAnswers: ['42', '21', '126']
      },
      {
        type: 'multiple_choice',
        question: 'Un angle inscrit dans un demi-cercle mesure ?°',
        answer: '90',
        wrongAnswers: ['180', '45', '60']
      },
      // Drag and Drop - Construction (building angle relationship)
      {
        type: 'drag_and_drop',
        question: 'Angle au centre = 120°. Angle inscrit = 120° ÷ ___ = 60°',
        answer: '2',
        wordBank: ['2', '3', '4', '120'],
        mode: 'select'
      }
    ]
  },

  // Section 3: Application des propriétés des angles inscrits
  'ch6-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Tous les angles inscrits interceptant le même arc sont égaux", answer: "vrai" },
      { question: "On peut combiner plusieurs propriétés pour résoudre des problèmes", answer: "vrai" },
      { question: "Si deux angles inscrits interceptent le même arc, ils sont toujours égaux", answer: "vrai" },
      { question: "Un angle inscrit peut être égal à l'angle au centre interceptant le même arc", answer: "faux" },
      { question: "La somme des angles d'un triangle inscrit dans un cercle est toujours 180°", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un cercle de centre O, angle AÔB = 100° et angle BÔC = 130°. M est un point sur le cercle. Quelle est la mesure de l\'angle AM̂B?',
        answer: '50°',
        wrongAnswers: ['100°', '25°', '200°']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un cercle, si l\'angle au centre mesure 120°, quel est l\'angle inscrit interceptant le même arc?',
        answer: '60°',
        wrongAnswers: ['120°', '30°', '240°']
      },
      {
        type: 'multiple_choice',
        question: 'Tous les angles inscrits interceptant le même arc sont:',
        answer: 'Égaux',
        wrongAnswers: ['Différents', 'Complémentaires', 'Supplémentaires']
      },
      {
        type: 'multiple_choice',
        question: 'Un angle inscrit mesure toujours:',
        answer: 'La moitié de l\'angle au centre interceptant le même arc',
        wrongAnswers: ['Égal à l\'angle au centre', 'Le double de l\'angle au centre', 'Indépendant de l\'angle au centre']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Tous les angles inscrits interceptant le même arc sont égaux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un angle inscrit peut être égal à l\'angle au centre interceptant le même arc',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut combiner plusieurs propriétés pour résoudre des problèmes',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Cercle de centre O. Angle AÔB = 100°. M sur le cercle. AM̂B = ?°',
        answer: '50',
        wrongAnswers: ['100', '25', '200']
      },
      {
        type: 'multiple_choice',
        question: 'Si angle au centre = 120°, alors angle inscrit interceptant le même arc = ?°',
        answer: '60',
        wrongAnswers: ['120', '30', '240']
      },
      {
        type: 'multiple_choice',
        question: 'Tous les angles inscrits interceptant le même arc sont:',
        answer: 'égaux',
        wrongAnswers: ['différents', 'complémentaires', 'supplémentaires']
      },
      // Drag and Drop - Selection (choosing angle relationship)
      {
        type: 'drag_and_drop',
        question: 'Angle au centre = 100°. Angle inscrit = 100° ÷ ___ = 50°',
        answer: '2',
        wordBank: ['2', '4', '100', '50'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 7: DROITES PARTICULIÈRES DANS UN TRIANGLE
  // Section 1: Droite des milieux
  'ch7-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La droite des milieux est parallèle au troisième côté", answer: "vrai" },
      { question: "La droite des milieux mesure la moitié du troisième côté", answer: "vrai" },
      { question: "Si BC = 12cm, alors IJ = 6cm (I et J milieux)", answer: "vrai" },
      { question: "La droite des milieux mesure le double du troisième côté", answer: "faux" },
      { question: "Dans un triangle, les droites des milieux sont perpendiculaires", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un triangle ABC, I et J sont les milieux de [AB] et [AC]. Si BC = 12 cm, quelle est la longueur de IJ?',
        answer: '6 cm',
        wrongAnswers: ['12 cm', '3 cm', '24 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un triangle ABC, I est le milieu de [AB]. Si (IJ) est parallèle à (BC) et AC = 10 cm, quelle est la longueur de AJ?',
        answer: '5 cm',
        wrongAnswers: ['10 cm', '2,5 cm', '20 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle ABC a un périmètre de 30 cm. Quel est le périmètre du triangle formé par les milieux des côtés?',
        answer: '15 cm',
        wrongAnswers: ['30 cm', '7,5 cm', '60 cm']
      },
      {
        type: 'multiple_choice',
        question: 'La droite des milieux dans un triangle est:',
        answer: 'Parallèle au troisième côté et mesure la moitié de ce côté',
        wrongAnswers: ['Perpendiculaire au troisième côté', 'Mesure le double du troisième côté', 'Indépendante du troisième côté']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'La droite des milieux mesure la moitié du troisième côté',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La droite des milieux mesure le double du troisième côté',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La droite des milieux est parallèle au troisième côté',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Triangle ABC, I et J milieux de [AB] et [AC]. BC = 12 cm. IJ = ? cm',
        answer: '6',
        wrongAnswers: ['12', '3', '24']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle ABC de périmètre 30 cm. Périmètre du triangle formé par les milieux = ? cm',
        answer: '15',
        wrongAnswers: ['30', '7.5', '60']
      },
      {
        type: 'multiple_choice',
        question: 'Si BC = 16 cm, alors IJ (avec I et J milieux) = ? cm',
        answer: '8',
        wrongAnswers: ['16', '4', '32']
      },
      // Drag and Drop - Construction (building midline length)
      {
        type: 'drag_and_drop',
        question: 'Si BC = 12 cm, alors IJ = 12 ÷ ___ = 6 cm',
        answer: '2',
        wordBank: ['2', '3', '4', '12'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Médiatrices et cercle circonscrit
  'ch7-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les médiatrices d'un triangle sont concourantes", answer: "vrai" },
      { question: "Le point de concours des médiatrices est le centre du cercle circonscrit", answer: "vrai" },
      { question: "Dans un triangle rectangle, le centre du cercle circonscrit est le milieu de l'hypoténuse", answer: "vrai" },
      { question: "Le cercle circonscrit passe par les trois sommets du triangle", answer: "vrai" },
      { question: "Les médiatrices d'un triangle sont toujours perpendiculaires entre elles", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un triangle rectangle, l\'hypoténuse mesure 10 cm. Quel est le rayon du cercle circonscrit?',
        answer: '5 cm',
        wrongAnswers: ['10 cm', '2,5 cm', '20 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Le point de concours des médiatrices d\'un triangle est:',
        answer: 'Le centre du cercle circonscrit',
        wrongAnswers: ['Le centre de gravité', 'Le centre du cercle inscrit', 'L\'orthocentre']
      },
      {
        type: 'multiple_choice',
        question: 'Pour construire le cercle circonscrit, on trace:',
        answer: 'Deux médiatrices, on trouve leur intersection O, puis on trace le cercle de centre O',
        wrongAnswers: ['Deux médianes', 'Deux hauteurs', 'Deux bissectrices']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un triangle rectangle, le centre du cercle circonscrit se trouve:',
        answer: 'Au milieu de l\'hypoténuse',
        wrongAnswers: ['Au sommet de l\'angle droit', 'Au centre du triangle', 'À l\'extérieur du triangle']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Les médiatrices d\'un triangle sont concourantes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cercle circonscrit passe par les trois sommets du triangle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les médiatrices d\'un triangle sont toujours perpendiculaires entre elles',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle avec hypoténuse 10 cm. Rayon du cercle circonscrit = ? cm',
        answer: '5',
        wrongAnswers: ['10', '2.5', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Le point de concours des médiatrices est le centre du _____ circonscrit',
        answer: 'cercle',
        wrongAnswers: ['triangle', 'carré', 'rectangle']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un triangle rectangle, le centre du cercle circonscrit est au _____ de l\'hypoténuse',
        answer: 'milieu',
        wrongAnswers: ['sommet', 'côté', 'extérieur']
      },
      // Drag and Drop - Selection (choosing circle center property)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle, hypoténuse = 10 cm. Rayon du cercle circonscrit = 10 ÷ ___ = 5 cm',
        answer: '2',
        wordBank: ['2', '3', '4', '10'],
        mode: 'select'
      }
    ]
  },

  // Section 3: Médianes et centre de gravité
  'ch7-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les médianes d'un triangle sont concourantes au centre de gravité", answer: "vrai" },
      { question: "AG = (2/3)AM si G est le centre de gravité", answer: "vrai" },
      { question: "Si AM = 15cm, alors AG = 10cm et GM = 5cm", answer: "vrai" },
      { question: "Le centre de gravité est toujours à l'intérieur du triangle", answer: "vrai" },
      { question: "AG = AM si G est le centre de gravité", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un triangle, si une médiane AM mesure 15 cm, que vaut AG (G est le centre de gravité)?',
        answer: '10 cm',
        wrongAnswers: ['5 cm', '15 cm', '7,5 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un triangle, si une médiane AM mesure 15 cm, que vaut GM (G est le centre de gravité)?',
        answer: '5 cm',
        wrongAnswers: ['10 cm', '15 cm', '7,5 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Si GM = 4 cm, que vaut AG (G est le centre de gravité)?',
        answer: '8 cm',
        wrongAnswers: ['4 cm', '12 cm', '2 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Le centre de gravité d\'un triangle est:',
        answer: 'Le point de concours des médianes',
        wrongAnswers: ['Le point de concours des médiatrices', 'Le point de concours des hauteurs', 'Le point de concours des bissectrices']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'AG = (2/3)AM si G est le centre de gravité',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'AG = AM si G est le centre de gravité',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le centre de gravité est toujours à l\'intérieur du triangle',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'AM = 15 cm (médiane). AG = (2/3) × 15 = ? cm',
        answer: '10',
        wrongAnswers: ['5', '15', '22.5']
      },
      {
        type: 'multiple_choice',
        question: 'AM = 15 cm (médiane). GM = (1/3) × 15 = ? cm',
        answer: '5',
        wrongAnswers: ['10', '15', '45']
      },
      {
        type: 'multiple_choice',
        question: 'Si GM = 4 cm, alors AM = ? cm',
        answer: '12',
        wrongAnswers: ['4', '8', '16']
      },
      // Drag and Drop - Construction (building centroid relationship)
      {
        type: 'drag_and_drop',
        question: 'Si AM = 15 cm, alors AG = (2/3) × 15 = ___ cm',
        answer: '10',
        wordBank: ['5', '10', '15', '20'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 8: THÉORÈME DE PYTHAGORE
  // Section 1: Calcul avec le théorème de Pythagore
  'ch8-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Dans un triangle rectangle, a² + b² = c²", answer: "vrai" },
      { question: "3² + 4² = 5²", answer: "vrai" },
      { question: "Si côtés 9cm et 12cm, alors hypoténuse = 15cm", answer: "vrai" },
      { question: "Dans un triangle rectangle, c² = a² + b² (c est l'hypoténuse)", answer: "vrai" },
      { question: "Dans un triangle rectangle, a² = b² + c² (a est un côté)", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un triangle rectangle a deux côtés de 9 cm et 12 cm. Quelle est la longueur de l\'hypoténuse?',
        answer: '15 cm',
        wrongAnswers: ['21 cm', '18 cm', '13 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle rectangle a une hypoténuse de 17 cm et un côté de 8 cm. Quelle est la longueur de l\'autre côté?',
        answer: '15 cm',
        wrongAnswers: ['9 cm', '25 cm', '13 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Une échelle de 5 m est posée contre un mur. Si elle atteint une hauteur de 3 m, à quelle distance du mur est-elle posée?',
        answer: '4 m',
        wrongAnswers: ['2 m', '8 m', '3,5 m']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un triangle rectangle, si les deux côtés de l\'angle droit mesurent 5 cm et 12 cm, quelle est l\'hypoténuse?',
        answer: '13 cm',
        wrongAnswers: ['17 cm', '7 cm', '25 cm']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '3² + 4² = 5²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans un triangle rectangle, a² = b² + c² (a est un côté)',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Dans un triangle rectangle, c² = a² + b² (c est l\'hypoténuse)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle avec côtés 9 cm et 12 cm. Hypotenuse c² = 9² + 12² = ?, donc c = ? cm',
        answer: '225, 15',
        wrongAnswers: ['225, 225', '21, 15', '144, 12']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle, hypoténuse 17 cm, un côté 8 cm. L\'autre côté a² = 17² - 8² = ?, donc a = ? cm',
        answer: '225, 15',
        wrongAnswers: ['289, 17', '64, 8', '153, 12.4']
      },
      {
        type: 'multiple_choice',
        question: 'Échelle de 5 m contre un mur à 3 m. Distance d² = 5² - 3² = ?, donc d = ? m',
        answer: '16, 4',
        wrongAnswers: ['16, 16', '25, 5', '9, 3']
      },
      // Drag and Drop - Construction (building Pythagorean equation)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle: côtés 9 cm et 12 cm. c² = 9² ___ 12² = 225',
        answer: '+',
        wordBank: ['+', '-', '×', '÷'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Réciproque du théorème de Pythagore
  'ch8-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Si BC² = AB² + AC², alors le triangle est rectangle en A", answer: "vrai" },
      { question: "Un triangle avec côtés 5cm, 12cm, 13cm est rectangle", answer: "vrai" },
      { question: "Un triangle avec côtés 4cm, 5cm, 7cm n'est pas rectangle", answer: "vrai" },
      { question: "Si les côtés vérifient a² + b² = c², le triangle est rectangle", answer: "vrai" },
      { question: "Tous les triangles vérifient le théorème de Pythagore", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un triangle a des côtés de 5 cm, 12 cm et 13 cm. Est-il rectangle?',
        answer: 'Oui, car 13² = 169 et 5² + 12² = 169',
        wrongAnswers: ['Non, car les côtés ne vérifient pas a² + b² = c²', 'Oui, car tous les triangles sont rectangles', 'Non, car 13² ≠ 5² + 12²']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle a des côtés de 4 cm, 5 cm et 7 cm. Est-il rectangle?',
        answer: 'Non, car 7² = 49 et 4² + 5² = 41 (49 ≠ 41)',
        wrongAnswers: ['Oui, car 7² = 4² + 5²', 'Oui, car tous les triangles sont rectangles', 'Non, car 7² < 4² + 5²']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi utilise-t-on un triangle 3-4-5 pour tracer un angle droit?',
        answer: 'Car 3² + 4² = 5², donc c\'est un triangle rectangle (triplet pythagoricien)',
        wrongAnswers: ['Car c\'est un triangle équilatéral', 'Car 3 + 4 = 5', 'Car c\'est le seul triangle possible']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle a des côtés de 6 cm, 8 cm et 10 cm. Est-il rectangle?',
        answer: 'Oui, car 10² = 100 et 6² + 8² = 100',
        wrongAnswers: ['Non, car 10² ≠ 6² + 8²', 'Oui, car tous les triangles sont rectangles', 'Non, car 6² + 8² > 10²']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Si BC² = AB² + AC², alors le triangle est rectangle en A',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les triangles vérifient le théorème de Pythagore',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un triangle avec côtés 5cm, 12cm, 13cm est rectangle',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Triangle avec côtés 5 cm, 12 cm, 13 cm. 13² = ?, 5² + 12² = ?. Donc le triangle est:',
        answer: '169, 169, rectangle',
        wrongAnswers: ['169, 144, pas rectangle', '25, 169, rectangle', '169, 25, pas rectangle']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle avec côtés 4 cm, 5 cm, 7 cm. 7² = ?, 4² + 5² = ?. Donc le triangle n\'est:',
        answer: '49, 41, pas',
        wrongAnswers: ['49, 49, rectangle', '16, 25, rectangle', '49, 16, pas']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle 3-4-5 est rectangle car 3² + 4² = 5². C\'est un _____ pythagoricien',
        answer: 'triplet',
        wrongAnswers: ['doublet', 'quadruplet', 'nombre']
      },
      // Drag and Drop - Selection (verifying Pythagorean relationship)
      {
        type: 'drag_and_drop',
        question: 'Triangle 3-4-5: 3² + 4² = ___²',
        answer: '5',
        wordBank: ['3', '4', '5', '7'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 9: TRIGONOMÉTRIE - ANGLES AIGUS
  // Section 1: Définitions des rapports trigonométriques
  'ch9-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "cos θ = côté adjacent / hypoténuse", answer: "vrai" },
      { question: "sin θ = côté opposé / hypoténuse", answer: "vrai" },
      { question: "tan θ = côté opposé / côté adjacent", answer: "vrai" },
      { question: "cos²θ + sin²θ = 1", answer: "vrai" },
      { question: "sin θ = côté adjacent / hypoténuse", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un triangle rectangle, AB = 3 cm et BC = 5 cm (hypoténuse). Quelle est la valeur de cos B̂?',
        answer: '3/5 = 0,6',
        wrongAnswers: ['5/3', '4/5', '3/4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule cos 60° + sin 30°. Quel est le résultat?',
        answer: '1',
        wrongAnswers: ['0', '1/2', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Si cos θ = 3/5, quelle est la valeur de sin θ?',
        answer: '4/5',
        wrongAnswers: ['3/5', '5/3', '1/5']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un triangle rectangle, le cosinus d\'un angle est:',
        answer: 'côté adjacent / hypoténuse',
        wrongAnswers: ['côté opposé / hypoténuse', 'côté opposé / côté adjacent', 'hypoténuse / côté adjacent']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'cos²θ + sin²θ = 1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'sin θ = côté adjacent / hypoténuse',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'tan θ = côté opposé / côté adjacent',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle, AB = 3 cm, BC = 5 cm (hypoténuse). cos B̂ = ?',
        answer: '3/5',
        wrongAnswers: ['4/5', '5/3', '3/4']
      },
      {
        type: 'multiple_choice',
        question: 'cos 60° + sin 30° = ? + ? = 1',
        answer: '1/2, 1/2',
        wrongAnswers: ['√3/2, 1/2', '1/2, √3/2', '1, 0']
      },
      {
        type: 'multiple_choice',
        question: 'Si cos θ = 3/5, alors sin²θ = 1 - (3/5)² = ?, donc sin θ = ?',
        answer: '16/25, 4/5',
        wrongAnswers: ['9/25, 3/5', '16/25, -4/5', '1, 1']
      },
      // Drag and Drop - Selection (choosing trigonometric ratio)
      {
        type: 'drag_and_drop',
        question: 'cos θ = côté adjacent ___ hypoténuse',
        answer: '/',
        wordBank: ['+', '-', '×', '/'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Applications de la trigonométrie
  'ch9-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut calculer des longueurs avec la trigonométrie", answer: "vrai" },
      { question: "On peut calculer des angles avec la trigonométrie", answer: "vrai" },
      { question: "tan 45° = 1", answer: "vrai" },
      { question: "La trigonométrie ne s'applique qu'aux triangles rectangles", answer: "vrai" },
      { question: "sin 90° = 0", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un triangle rectangle, un angle mesure 40° et l\'hypoténuse mesure 15 cm. Quelle est la longueur du côté adjacent?',
        answer: '15 × cos 40° ≈ 11,49 cm',
        wrongAnswers: ['15 × sin 40°', '15 / cos 40°', '15 × tan 40°']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un triangle rectangle, le côté opposé mesure 8 cm et l\'hypoténuse mesure 10 cm. Quelle est la mesure de l\'angle?',
        answer: 'sin⁻¹(0,8) ≈ 53,1°',
        wrongAnswers: ['cos⁻¹(0,8)', 'tan⁻¹(0,8)', '45°']
      },
      {
        type: 'multiple_choice',
        question: 'Un avion décolle avec un angle de 12° et parcourt 2000 m. Quelle est son altitude?',
        answer: '2000 × sin 12° ≈ 416 m',
        wrongAnswers: ['2000 × cos 12°', '2000 / sin 12°', '2000 × tan 12°']
      },
      {
        type: 'multiple_choice',
        question: 'Que vaut tan 45°?',
        answer: '1',
        wrongAnswers: ['0', '√2', '1/2']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'On peut calculer des longueurs avec la trigonométrie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'sin 90° = 0',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'tan 45° = 1',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle, angle 40°, hypoténuse 15 cm. Côté adjacent = 15 × ? ≈ 11,49 cm',
        answer: 'cos 40°',
        wrongAnswers: ['sin 40°', 'tan 40°', 'cos 50°']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle, opposé = 8 cm, hypoténuse = 10 cm. Angle θ = sin⁻¹(?) ≈ 53,1°',
        answer: '0,8',
        wrongAnswers: ['0.6', '1.25', '0.5']
      },
      {
        type: 'multiple_choice',
        question: 'Avion décolle avec angle 12°, parcourt 2000 m. Altitude h = 2000 × ? ≈ 416 m',
        answer: 'sin 12°',
        wrongAnswers: ['cos 12°', 'tan 12°', 'sin 78°']
      },
      // Drag and Drop - Construction (building trigonometric calculation)
      {
        type: 'drag_and_drop',
        question: 'tan 45° = ___',
        answer: '1',
        wordBank: ['0', '1', '√2', '1/2'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 10: VECTEURS ET TRANSLATION
  // Section 1: Vecteurs - définitions et propriétés
  'ch10-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un vecteur a une direction, un sens et une norme", answer: "vrai" },
      { question: "Dans un parallélogramme, AB⃗ = DC⃗", answer: "vrai" },
      { question: "BA⃗ = -AB⃗", answer: "vrai" },
      { question: "Un vecteur peut avoir une norme nulle", answer: "vrai" },
      { question: "AB⃗ = BA⃗", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un parallélogramme ABCD, quels vecteurs sont égaux?',
        answer: 'AB⃗ = DC⃗ et AD⃗ = BC⃗',
        wrongAnswers: ['AB⃗ = BA⃗', 'AB⃗ = CD⃗', 'Aucun vecteur n\'est égal']
      },
      {
        type: 'multiple_choice',
        question: 'Les points A(2,1) et B(5,5) sont donnés. Quelle est la norme du vecteur AB⃗?',
        answer: '5',
        wrongAnswers: ['3', '4', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Si AB⃗ = u⃗, comment exprime-t-on BA⃗?',
        answer: 'BA⃗ = -u⃗',
        wrongAnswers: ['BA⃗ = u⃗', 'BA⃗ = 2u⃗', 'BA⃗ = 0⃗']
      },
      {
        type: 'multiple_choice',
        question: 'Un vecteur est caractérisé par:',
        answer: 'Une direction, un sens et une norme',
        wrongAnswers: ['Uniquement une direction', 'Uniquement une norme', 'Uniquement un sens']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'BA⃗ = -AB⃗',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'AB⃗ = BA⃗',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Dans un parallélogramme, AB⃗ = DC⃗',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parallélogramme ABCD. AB⃗ = ? et AD⃗ = ?',
        answer: 'DC⃗, BC⃗',
        wrongAnswers: ['CD⃗, CB⃗', 'BA⃗, DA⃗', 'AC⃗, BD⃗']
      },
      {
        type: 'multiple_choice',
        question: 'A(2,1) et B(5,5). ||AB⃗|| = √[(5-2)² + (5-1)²] = ?',
        answer: '5',
        wrongAnswers: ['4', '√13', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Si AB⃗ = u⃗, alors BA⃗ = ?',
        answer: '-u⃗',
        wrongAnswers: ['u⃗', '2u⃗', '0⃗']
      },
      // Drag and Drop - Selection (choosing vector relationship)
      {
        type: 'drag_and_drop',
        question: 'Si AB⃗ = u⃗, alors BA⃗ = ___u⃗',
        answer: '-',
        wordBank: ['+', '-', '×', '÷'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Addition de vecteurs
  'ch10-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "AB⃗ + BC⃗ = AC⃗ (relation de Chasles)", answer: "vrai" },
      { question: "u⃗ + v⃗ = v⃗ + u⃗ (commutativité)", answer: "vrai" },
      { question: "u⃗(2,3) + v⃗(-1,4) = (1,7)", answer: "vrai" },
      { question: "u⃗ + (-u⃗) = 0⃗", answer: "vrai" },
      { question: "AB⃗ + BA⃗ = AB⃗", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie: AB⃗ + BC⃗ + CA⃗. Quel est le résultat?',
        answer: 'AA⃗ = 0⃗',
        wrongAnswers: ['AB⃗', 'AC⃗', 'CA⃗']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un parallélogramme ABCD, comment exprime-t-on AC⃗?',
        answer: 'AC⃗ = AB⃗ + AD⃗',
        wrongAnswers: ['AC⃗ = AB⃗ - AD⃗', 'AC⃗ = AB⃗ × AD⃗', 'AC⃗ = AD⃗ - AB⃗']
      },
      {
        type: 'multiple_choice',
        question: 'Si u⃗(2,3) et v⃗(-1,4), quelle est la valeur de u⃗ + v⃗?',
        answer: '(1,7)',
        wrongAnswers: ['(3,7)', '(1,1)', '(3,1)']
      },
      {
        type: 'multiple_choice',
        question: 'La relation de Chasles s\'écrit:',
        answer: 'AB⃗ + BC⃗ = AC⃗',
        wrongAnswers: ['AB⃗ + BC⃗ = BA⃗', 'AB⃗ + BC⃗ = CB⃗', 'AB⃗ + BC⃗ = 0⃗']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'u⃗ + v⃗ = v⃗ + u⃗ (commutativité)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'AB⃗ + BA⃗ = AB⃗',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'u⃗ + (-u⃗) = 0⃗',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Simplifie: AB⃗ + BC⃗ + CA⃗ = ?',
        answer: 'AA⃗ = 0⃗',
        wrongAnswers: ['AC⃗', 'BA⃗', 'AB⃗']
      },
      {
        type: 'multiple_choice',
        question: 'Parallélogramme ABCD. AC⃗ = AB⃗ + ?',
        answer: 'AD⃗',
        wrongAnswers: ['DC⃗', 'BC⃗', 'BD⃗']
      },
      {
        type: 'multiple_choice',
        question: 'u⃗(2,3) + v⃗(-1,4) = (?, ?)',
        answer: '1, 7',
        wrongAnswers: ['(3, 7)', '(1, -1)', '(3, -1)']
      },
      // Drag and Drop - Construction (building vector addition)
      {
        type: 'drag_and_drop',
        question: 'u⃗(2,3) + v⃗(-1,4) = (2+(-1), 3+4) = (___, ___)',
        answer: ['1', '7'],
        wordBank: ['1', '7', '3', '4'],
        mode: 'construct'
      }
    ]
  },

  // Section 3: Multiplication d'un vecteur par un scalaire
  'ch10-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "3u⃗ a même direction que u⃗ mais norme triplée", answer: "vrai" },
      { question: "Deux vecteurs sont colinéaires s'ils ont même direction", answer: "vrai" },
      { question: "u⃗(4,6) et v⃗(2,3) sont colinéaires", answer: "vrai" },
      { question: "(-2)u⃗ a la même direction que u⃗ mais sens opposé", answer: "vrai" },
      { question: "u⃗(1,2) et v⃗(3,4) sont toujours colinéaires", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si u⃗(2,3), quelle est la valeur de 3u⃗?',
        answer: '(6,9)',
        wrongAnswers: ['(5,6)', '(2,9)', '(6,3)']
      },
      {
        type: 'multiple_choice',
        question: 'Les vecteurs u⃗(4,6) et v⃗(2,3) sont-ils colinéaires?',
        answer: 'Oui, car 4×3 - 6×2 = 0',
        wrongAnswers: ['Non, car ils ont des directions différentes', 'Oui, car 4+6 = 2+3', 'Non, car 4×3 - 6×2 ≠ 0']
      },
      {
        type: 'multiple_choice',
        question: 'Si I est le milieu de [AB], comment exprime-t-on AI⃗ en fonction de AB⃗?',
        answer: 'AI⃗ = (1/2)AB⃗',
        wrongAnswers: ['AI⃗ = 2AB⃗', 'AI⃗ = AB⃗', 'AI⃗ = -AB⃗']
      },
      {
        type: 'multiple_choice',
        question: 'Si u⃗(3,5), quelle est la valeur de (-2)u⃗?',
        answer: '(-6,-10)',
        wrongAnswers: ['(6,10)', '(-6,10)', '(6,-10)']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: '3u⃗ a même direction que u⃗ mais norme triplée',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'u⃗(1,2) et v⃗(3,4) sont toujours colinéaires',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Deux vecteurs sont colinéaires s\'ils ont même direction',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'u⃗(2,3). 3u⃗ = (?, ?)',
        answer: '6, 9',
        wrongAnswers: ['(5, 6)', '(2, 9)', '(6, 3)']
      },
      {
        type: 'multiple_choice',
        question: 'I milieu de [AB]. AI⃗ = (?)AB⃗',
        answer: '1/2',
        wrongAnswers: ['2', '1', '-1/2']
      },
      {
        type: 'multiple_choice',
        question: 'u⃗(4,6) et v⃗(2,3) sont colinéaires car 4×3 - 6×2 = ?',
        answer: '0',
        wrongAnswers: ['12', '24', '6']
      },
      // Drag and Drop - Selection (choosing scalar multiplication)
      {
        type: 'drag_and_drop',
        question: 'I milieu de [AB]. AI⃗ = ___ × AB⃗',
        answer: '1/2',
        wordBank: ['1/2', '2', '1', '0'],
        mode: 'select'
      }
    ]
  },

  // Section 4: Translation
  'ch10-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une translation conserve les distances", answer: "vrai" },
      { question: "Une translation conserve les angles", answer: "vrai" },
      { question: "Si u⃗(2,3) et M(1,4), alors M'(3,7)", answer: "vrai" },
      { question: "Une translation conserve les aires", answer: "vrai" },
      { question: "Une translation peut changer la taille des figures", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Par une translation de vecteur u⃗(2,3), quelle est l\'image du point M(1,4)?',
        answer: 'M\'(3,7)',
        wrongAnswers: ['M\'(1,7)', 'M\'(3,4)', 'M\'(-1,1)']
      },
      {
        type: 'multiple_choice',
        question: 'Une translation conserve:',
        answer: 'Les distances, les angles et les aires',
        wrongAnswers: ['Seulement les distances', 'Seulement les angles', 'Rien']
      },
      {
        type: 'multiple_choice',
        question: 'On effectue une translation par u⃗(1,2) puis par v⃗(3,-1). Quel est le vecteur résultant?',
        answer: '(4,1)',
        wrongAnswers: ['(2,1)', '(4,-1)', '(-2,3)']
      },
      {
        type: 'multiple_choice',
        question: 'Pour construire l\'image d\'un point par translation, on:',
        answer: 'Reporte le vecteur à partir du point pour obtenir l\'image',
        wrongAnswers: ['Multiplie les coordonnées par le vecteur', 'Divise les coordonnées par le vecteur', 'Soustrait les coordonnées du vecteur']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Une translation conserve les distances',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une translation peut changer la taille des figures',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une translation conserve les angles',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Translation de vecteur u⃗(2,3). Image de M(1,4): M\'(?, ?)',
        answer: '3, 7',
        wrongAnswers: ['(3, 1)', '(5, 7)', '(3, 4)']
      },
      {
        type: 'multiple_choice',
        question: 'Translation par u⃗(1,2) puis par v⃗(3,-1). Vecteur résultant: (?, ?)',
        answer: '4, 1',
        wrongAnswers: ['(4, 3)', '(2, 1)', '(4, -1)']
      },
      {
        type: 'multiple_choice',
        question: 'Une translation conserve les _____, les _____ et les _____',
        answer: 'distances, angles, aires',
        wrongAnswers: ['formes, tailles, positions', 'directions, sens, longueurs', 'couleurs, textures, volumes']
      },
      // Drag and Drop - Construction (building translation coordinates)
      {
        type: 'drag_and_drop',
        question: 'Translation u⃗(2,3). M(1,4) → M\'(1+2, 4+3) = M\'(___, ___)',
        answer: ['3', '7'],
        wordBank: ['3', '7', '1', '4'],
        mode: 'construct'
      }
    ]
  }
};

export default YEAR3_MATH_SECTION_QUESTIONS;


