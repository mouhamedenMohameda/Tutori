/**
 * Year 4 Math - Questions for Each Section
 * All questions are verifiable and appropriate for app format:
 * - Multiple Choice
 * - True/False (Right or Wrong)
 * - Fill-in-Blank (Typing)
 * - Completion
 *
 * NO drawings, NO file uploads, NO unverifiable questions
 */

export const YEAR4_MATH_SECTION_QUESTIONS: {
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
  // CHAPTER 1: NOMBRES RÉELS ET OPÉRATIONS
  'ch1-s1': {
    questions: [
      { question: "ℕ ⊂ ℤ ⊂ 𝔻", answer: "vrai" },
      { question: "-7 ∈ ℤ mais -7 ∉ ℕ", answer: "vrai" },
      { question: "0,5 ∈ 𝔻", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans quel ensemble de nombres se trouve -7?',
        answer: 'Entiers relatifs (ℤ)',
        wrongAnswers: ['Nombres naturels (ℕ)', 'Nombres décimaux (𝔻)', 'Nombres rationnels (ℚ)']
      },
      {
        type: 'multiple_choice',
        question: 'Quel nombre appartient à ℕ, ℤ et 𝔻?',
        answer: '15',
        wrongAnswers: ['-5', '3.14', '0.7']
      },
      {
        type: 'multiple_choice',
        question: 'Lequel de ces nombres est un décimal?',
        answer: '4.25',
        wrongAnswers: ['√2', 'π', '-7']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Tout nombre naturel est aussi un entier relatif',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '-5 appartient à l\'ensemble des nombres naturels',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les nombres décimaux incluent les entiers relatifs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les nombres entiers sont des nombres naturels',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Complète: ℕ ⊂ ? ⊂ 𝔻',
        answer: 'ℤ',
        wrongAnswers: ['ℚ', 'ℝ', 'ℕ']
      },
      {
        type: 'multiple_choice',
        question: 'Le nombre _____ appartient à ℤ mais pas à ℕ',
        answer: '-7',
        wrongAnswers: ['7', '0', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Le nombre 3.5 appartient à l\'ensemble des nombres:',
        answer: 'décimaux',
        wrongAnswers: ['entiers', 'naturels', 'irrationnels']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel nombre appartient à ℕ? Glisse la réponse:',
        answer: '12',
        wordBank: ['-3', '12', '3.7', '0.5'],
        mode: 'select'
      },
      // Drag and Drop - Ordering (numbers from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres du plus petit au plus grand: -5, 3, 0, -2',
        answer: ['-5', '-2', '0', '3'],
        wordBank: ['-5', '-2', '0', '3'],
        mode: 'order'
      }
    ]
  },

  'ch1-s2': {
    questions: [
      { question: "ℚ ⊂ ℝ", answer: "vrai" },
      { question: "√2 est irrationnel", answer: "vrai" },
      { question: "π est irrationnel", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Lequel de ces nombres est irrationnel?',
        answer: '√3',
        wrongAnswers: ['4', '0.5', '2/3']
      },
      {
        type: 'multiple_choice',
        question: 'Quel nombre est rationnel?',
        answer: '0.333...',
        wrongAnswers: ['π', '√5', 'e']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi √2 est-il irrationnel?',
        answer: 'Son développement décimal est infini et non périodique',
        wrongAnswers: ['Il est négatif', 'Il est trop grand', 'Il est pair']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Tout nombre rationnel est aussi un nombre réel',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'π peut s\'écrire comme une fraction de deux entiers',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '√16 est un nombre rationnel',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les nombres réels sont rationnels',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Complète: ℚ ⊂ ?',
        answer: 'ℝ',
        wrongAnswers: ['ℤ', 'ℕ', '𝔻']
      },
      {
        type: 'multiple_choice',
        question: 'Le nombre π est un nombre:',
        answer: 'irrationnel',
        wrongAnswers: ['rationnel', 'entier', 'décimal']
      },
      {
        type: 'multiple_choice',
        question: '√16 = ?',
        answer: '4',
        wrongAnswers: ['2', '8', '16']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel nombre est irrationnel? Glisse la réponse:',
        answer: '√7',
        wordBank: ['4', '1/2', '√7', '0.25'],
        mode: 'select'
      },
      // Drag and Drop - Ordering (from rational to irrational)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres: rationnels d\'abord, puis irrationnels: √9, π, 0.5, √2',
        answer: ['√9', '0.5', 'π', '√2'],
        wordBank: ['√9', '0.5', 'π', '√2'],
        mode: 'order'
      }
    ]
  },

  'ch1-s3': {
    questions: [
      { question: "a + b = b + a (commutativité)", answer: "vrai" },
      { question: "(-3) × (+4) = -12", answer: "vrai" },
      { question: "Si a × b = 0, alors a = 0 ou b = 0", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de (-5) + (+12) - (-7)?',
        answer: '14',
        wrongAnswers: ['0', '-10', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de (-3) × (+4) × (-2)?',
        answer: '24',
        wrongAnswers: ['-24', '12', '-12']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété illustre l\'égalité a + b = b + a?',
        answer: 'La commutativité',
        wrongAnswers: ['L\'associativité', 'La distributivité', 'L\'élément neutre']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'addition est commutative: a + b = b + a',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le produit de trois nombres négatifs est toujours négatif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Si le produit de deux nombres est zéro, alors au moins l\'un d\'eux est zéro',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(-2) + (+5) = (+5) + (-2) grâce à la distributivité',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: (-8) + (+15) - (-5) = ?',
        answer: '12',
        wrongAnswers: ['-12', '22', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-4) × (+6) × (-3) = ?',
        answer: '72',
        wrongAnswers: ['-72', '18', '-18']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie: 3(4 + 7) - 5 × 2 = ?',
        answer: '23',
        wrongAnswers: ['33', '13', '43']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le résultat de (-6) + (+9)? Glisse la réponse:',
        answer: '3',
        wordBank: ['-15', '-3', '3', '15'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building expression)
      {
        type: 'drag_and_drop',
        question: 'Construis l\'expression: _____ × _____ = -24',
        answer: ['-4', '6'],
        wordBank: ['-4', '6', '-6', '4'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s4': {
    questions: [
      { question: "aᵐ × aⁿ = aᵐ⁺ⁿ", answer: "vrai" },
      { question: "a⁰ = 1 (si a ≠ 0)", answer: "vrai" },
      { question: "(aᵐ)ⁿ = aᵐˣⁿ", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de 2³ × 2⁵?',
        answer: '256',
        wrongAnswers: ['64', '128', '512']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de 2⁵ / 2³?',
        answer: '4',
        wrongAnswers: ['2', '8', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de (3²)³?',
        answer: '729',
        wrongAnswers: ['81', '243', '6561']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Pour multiplier deux puissances de même base, on additionne les exposants',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tout nombre élevé à la puissance zéro est égal à zéro',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '5⁰ = 1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(2³)² = 2⁵',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: 3⁴ × 3² = 3?',
        answer: '6',
        wrongAnswers: ['8', '2', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 5⁶ / 5² = 5?',
        answer: '4',
        wrongAnswers: ['8', '3', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (4²)³ = 4?',
        answer: '6',
        wrongAnswers: ['5', '8', '12']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le résultat de 2³ × 2⁴? Glisse la réponse:',
        answer: '128',
        wordBank: ['64', '128', '256', '32'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building power expression)
      {
        type: 'drag_and_drop',
        question: 'Construis: 7_____ = 7⁵ / 7²',
        answer: ['3'],
        wordBank: ['5', '2', '3', '7'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s5': {
    questions: [
      { question: "La notation scientifique: a × 10ⁿ avec 1 ≤ a < 10", answer: "vrai" },
      { question: "4500000 = 4,5 × 10⁶", answer: "vrai" },
      { question: "0,0003 = 3 × 10⁻⁴", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la notation scientifique de 4500000?',
        answer: '4,5 × 10⁶',
        wrongAnswers: ['45 × 10⁵', '0,45 × 10⁷', '450 × 10⁴']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la notation scientifique de 0,0003?',
        answer: '3 × 10⁻⁴',
        wrongAnswers: ['3 × 10⁴', '0,3 × 10⁻³', '30 × 10⁻⁵']
      },
      {
        type: 'multiple_choice',
        question: 'Quel nombre est écrit en notation scientifique?',
        answer: '2,5 × 10³',
        wrongAnswers: ['25 × 10²', '0,25 × 10⁴', '250 × 10¹']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'En notation scientifique, le nombre avant le 10 doit être entre 1 et 10',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '0,0005 = 5 × 10⁻⁴',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La notation scientifique facilite uniquement les calculs avec de petits nombres',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '1200000 = 1,2 × 10⁶',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Écris en notation scientifique: 7800000 = ? × 10⁶',
        answer: '7.8',
        wrongAnswers: ['78', '0.78', '780']
      },
      {
        type: 'multiple_choice',
        question: 'Écris en notation scientifique: 0,00045 = 4,5 × 10?',
        answer: '-4',
        wrongAnswers: ['4', '-5', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis: 5,3 × 10⁴ = ?',
        answer: '53000',
        wrongAnswers: ['5300', '530', '530000']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la notation scientifique de 6200000? Glisse la réponse:',
        answer: '6,2 × 10⁶',
        wordBank: ['62 × 10⁵', '6,2 × 10⁶', '0,62 × 10⁷', '620 × 10⁴'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building scientific notation)
      {
        type: 'drag_and_drop',
        question: 'Construis la notation: 0,0008 = _____ × 10_____',
        answer: ['8', '-4'],
        wordBank: ['8', '-4', '0.8', '-3'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 2: ORDRE, INTERVALLES ET VALEUR ABSOLUE
  'ch2-s1': {
    questions: [
      { question: "Si a < b et b < c, alors a < c (transitivité)", answer: "vrai" },
      { question: "Si a < b et c > 0, alors ac < bc", answer: "vrai" },
      { question: "Si a < b et c < 0, alors ac > bc", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si -5 < -2, quelle est la relation correcte?',
        answer: '-5 < -2',
        wrongAnswers: ['-5 > -2', '-5 = -2', '-2 < -5']
      },
      {
        type: 'multiple_choice',
        question: 'Si x < 8, que peut-on dire de x - 3?',
        answer: 'x - 3 < 5',
        wrongAnswers: ['x - 3 > 5', 'x - 3 = 5', 'x - 3 < 8']
      },
      {
        type: 'multiple_choice',
        question: 'Si -3x > 12, quelle est la valeur de x?',
        answer: 'x < -4',
        wrongAnswers: ['x > -4', 'x = -4', 'x < 4']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Si a < b et b < c, alors a < c (propriété de transitivité)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si on multiplie les deux membres d\'une inégalité par un nombre positif, l\'inégalité change de sens',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Si on multiplie les deux membres d\'une inégalité par un nombre négatif, l\'inégalité change de sens',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si -8 < -3, alors -16 < -6',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si -7 < -2, complète: -7 ? -2',
        answer: '<',
        wrongAnswers: ['>', '=', '≥']
      },
      {
        type: 'multiple_choice',
        question: 'Si x < 5, alors x - 2 < ?',
        answer: '3',
        wrongAnswers: ['5', '7', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Si -4x > 20, alors x ? -5',
        answer: '<',
        wrongAnswers: ['>', '=', '≥']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si -6 < -1, quelle est la relation? Glisse la réponse:',
        answer: '-6 < -1',
        wordBank: ['-6 > -1', '-6 < -1', '-6 = -1', '-1 < -6'],
        mode: 'select'
      },
      // Drag and Drop - Ordering (from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres du plus petit au plus grand: -8, -3, -10, -1',
        answer: ['-10', '-8', '-3', '-1'],
        wordBank: ['-10', '-8', '-3', '-1'],
        mode: 'order'
      }
    ]
  },

  'ch2-s2': {
    questions: [
      { question: "[a, b] est un intervalle fermé", answer: "vrai" },
      { question: "]a, b[ est un intervalle ouvert", answer: "vrai" },
      { question: "]a, b] est un intervalle semi-ouvert", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel intervalle représente x tel que 3 ≤ x ≤ 7?',
        answer: '[3, 7]',
        wrongAnswers: [']3, 7[', ']3, 7]', '[3, 7[']
      },
      {
        type: 'multiple_choice',
        question: 'Quel intervalle représente x tel que 2 < x < 6?',
        answer: ']2, 6[',
        wrongAnswers: ['[2, 6]', ']2, 6]', '[2, 6[']
      },
      {
        type: 'multiple_choice',
        question: 'Quel intervalle représente x tel que 1 < x ≤ 5?',
        answer: ']1, 5]',
        wrongAnswers: ['[1, 5]', ']1, 5[', '[1, 5[']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'intervalle [4, 8] contient les bornes 4 et 8',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'intervalle ]4, 8[ contient les bornes 4 et 8',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'intervalle [2, 6] est un intervalle fermé',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'intervalle ]3, 7] contient le nombre 3',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'intervalle x tel que 2 ≤ x ≤ 5 s\'écrit [2, ?]',
        answer: '5',
        wrongAnswers: ['2', '4', '6']
      },
      {
        type: 'multiple_choice',
        question: 'L\'intervalle ]3, 7[ est un intervalle:',
        answer: 'ouvert',
        wrongAnswers: ['fermé', 'semi-ouvert', 'borné']
      },
      {
        type: 'multiple_choice',
        question: 'L\'intervalle [1, 4] contient combien de bornes?',
        answer: '2',
        wrongAnswers: ['1', '3', '4']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel intervalle représente x tel que 3 < x ≤ 9? Glisse la réponse:',
        answer: ']3, 9]',
        wordBank: ['[3, 9]', ']3, 9[', ']3, 9]', '[3, 9['],
        mode: 'select'
      },
      // Drag and Drop - Ordering (intervals from smallest range)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces intervalles du plus petit au plus grand (par longueur): [2, 5], [1, 8], [3, 4], [0, 10]',
        answer: ['[3, 4]', '[2, 5]', '[1, 8]', '[0, 10]'],
        wordBank: ['[3, 4]', '[2, 5]', '[1, 8]', '[0, 10]'],
        mode: 'order'
      }
    ]
  },

  'ch2-s3': {
    questions: [
      { question: "|x| = x si x ≥ 0", answer: "vrai" },
      { question: "|x| = -x si x < 0", answer: "vrai" },
      { question: "|x| ≥ 0 toujours", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de |8|?',
        answer: '8',
        wrongAnswers: ['-8', '0', '±8']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de |-9|?',
        answer: '9',
        wrongAnswers: ['-9', '0', '±9']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de |x| = 6?',
        answer: 'x = 6 ou x = -6',
        wrongAnswers: ['x = 6 seulement', 'x = -6 seulement', 'x = 0']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La valeur absolue d\'un nombre positif est égale à ce nombre',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La valeur absolue d\'un nombre négatif est égale à ce nombre',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La valeur absolue est toujours positive ou nulle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '|x| peut être négative',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: |12| = ?',
        answer: '12',
        wrongAnswers: ['-12', '0', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: |-15| = ?',
        answer: '15',
        wrongAnswers: ['-15', '0', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: |x| = 8. Les solutions sont x = ? ou x = ?',
        answer: '8, -8',
        wrongAnswers: ['8, 8', '-8, -8', '0, 8']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la valeur de |-12|? Glisse la réponse:',
        answer: '12',
        wordBank: ['-12', '12', '0', '±12'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building absolute value equation)
      {
        type: 'drag_and_drop',
        question: 'Construis les solutions de |x| = 10: x = _____ ou x = _____',
        answer: ['10', '-10'],
        wordBank: ['10', '-10', '0', '±10'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s4': {
    questions: [
      { question: "|a × b| = |a| × |b|", answer: "vrai" },
      { question: "|a + b| ≤ |a| + |b|", answer: "vrai" },
      { question: "|a - b| = |b - a|", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de |(-4) × 5|?',
        answer: '20',
        wrongAnswers: ['-20', '9', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété illustre |a × b| = |a| × |b|?',
        answer: 'La valeur absolue du produit est le produit des valeurs absolues',
        wrongAnswers: ['La valeur absolue du produit est la somme des valeurs absolues', 'La valeur absolue est commutative', 'La valeur absolue est associative']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: |7 + (-4)| ≤ |7| + |-4|. Quelle est la valeur de |7 + (-4)|?',
        answer: '3',
        wrongAnswers: ['11', '1', '7']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '|a × b| = |a| × |b| pour tous les nombres a et b',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '|a + b| est toujours égal à |a| + |b|',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '|a - b| = |b - a| pour tous les nombres a et b',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '|a + b| peut être supérieur à |a| + |b|',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: |(-5) × 6| = ?',
        answer: '30',
        wrongAnswers: ['-30', '11', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: |8 + (-3)| ≤ |8| + |-3|. Calcule: |8 + (-3)| = ?',
        answer: '5',
        wrongAnswers: ['11', '3', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: |10 - 15| = ?',
        answer: '5',
        wrongAnswers: ['-5', '25', '1']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la valeur de |(-6) × 4|? Glisse la réponse:',
        answer: '24',
        wordBank: ['-24', '24', '10', '2'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building absolute value property)
      {
        type: 'drag_and_drop',
        question: 'Construis: |(-3) × 7| = |_____| × |_____|',
        answer: ['-3', '7'],
        wordBank: ['-3', '7', '3', '-7'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s5': {
    questions: [
      { question: "|x| < a équivaut à -a < x < a", answer: "vrai" },
      { question: "|x| > a équivaut à x < -a ou x > a", answer: "vrai" },
      { question: "|x - 3| < 2 équivaut à 1 < x < 5", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de |x| < 5?',
        answer: '-5 < x < 5',
        wrongAnswers: ['x < -5 ou x > 5', 'x = 5 ou x = -5', 'x > 5']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de |x| > 4?',
        answer: 'x < -4 ou x > 4',
        wrongAnswers: ['-4 < x < 4', 'x = 4 ou x = -4', 'x > 4 seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de |x - 3| < 2?',
        answer: '1 < x < 5',
        wrongAnswers: ['x < 1 ou x > 5', 'x = 1 ou x = 5', 'x > 5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '|x| < 6 équivaut à -6 < x < 6',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '|x| > 5 équivaut à -5 < x < 5',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les solutions de |x - 4| < 3 sont 1 < x < 7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '|x| peut être négative',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: |x| < 7. Solution: ? < x < ?',
        answer: '-7, 7',
        wrongAnswers: ['-7, -7', '7, 7', '0, 7']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: |x| > 6. Solution: x < ? ou x > ?',
        answer: '-6, 6',
        wrongAnswers: ['-6, -6', '6, 6', '0, 6']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: |x - 5| < 3. Solution: ? < x < ?',
        answer: '2, 8',
        wrongAnswers: ['-2, 8', '2, 5', '5, 8']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelles sont les solutions de |x| < 8? Glisse la réponse:',
        answer: '-8 < x < 8',
        wordBank: ['x < -8 ou x > 8', '-8 < x < 8', 'x = 8 ou x = -8', 'x > 8'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building inequality solution)
      {
        type: 'drag_and_drop',
        question: 'Construis les solutions de |x - 6| < 4: _____ < x < _____',
        answer: ['2', '10'],
        wordBank: ['2', '10', '6', '4'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 3: RACINES CARRÉES
  'ch3-s1': {
    questions: [
      { question: "√a est défini si a ≥ 0", answer: "vrai" },
      { question: "√36 = 6", answer: "vrai" },
      { question: "(√a)² = a", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de √64?',
        answer: '8',
        wrongAnswers: ['32', '4', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de √121?',
        answer: '11',
        wrongAnswers: ['12', '10', '22']
      },
      {
        type: 'multiple_choice',
        question: 'La racine carrée de a est définie si...',
        answer: 'a ≥ 0',
        wrongAnswers: ['a > 0', 'a < 0', 'a ≤ 0']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La racine carrée de 49 est égale à 7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La racine carrée d\'un nombre négatif est définie',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '(√9)² = 9',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√(-16) = -4',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: √100 = ?',
        answer: '10',
        wrongAnswers: ['50', '5', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: √169 = ?',
        answer: '13',
        wrongAnswers: ['84.5', '12', '14']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: (√15)² = ?',
        answer: '15',
        wrongAnswers: ['225', '30', '7.5']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la valeur de √81? Glisse la réponse:',
        answer: '9',
        wordBank: ['8', '9', '10', '81'],
        mode: 'select'
      },
      // Drag and Drop - Ordering (from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces racines carrées du plus petit au plus grand: √100, √25, √144, √64',
        answer: ['√25', '√64', '√100', '√144'],
        wordBank: ['√25', '√64', '√100', '√144'],
        mode: 'order'
      }
    ]
  },

  'ch3-s2': {
    questions: [
      { question: "√(a × b) = √a × √b", answer: "vrai" },
      { question: "√(a/b) = √a / √b (b ≠ 0)", answer: "vrai" },
      { question: "√50 = 5√2", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la forme simplifiée de √32?',
        answer: '4√2',
        wrongAnswers: ['8√2', '2√8', '16√2']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la forme simplifiée de √75?',
        answer: '5√3',
        wrongAnswers: ['3√5', '25√3', '15√5']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de √2 × √8?',
        answer: '4',
        wrongAnswers: ['√16 seulement', '2√8', '16']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '√(a × b) = √a × √b pour tous les nombres positifs a et b',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√(9 × 16) = √9 × √16 = 3 × 4 = 12',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√50 peut s\'écrire 5√2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√(a/b) = √a / √b est toujours vrai même si b = 0',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie: √48 = ?√3',
        answer: '4',
        wrongAnswers: ['2', '8', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie: √98 = ?√2',
        answer: '7',
        wrongAnswers: ['49', '14', '98']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: √3 × √12 = ?',
        answer: '6',
        wrongAnswers: ['15', '36', '√15']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la forme simplifiée de √72? Glisse la réponse:',
        answer: '6√2',
        wordBank: ['8√2', '6√2', '3√8', '12√2'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building simplified radical)
      {
        type: 'drag_and_drop',
        question: 'Construis la forme simplifiée de √200: _____√_____',
        answer: ['10', '2'],
        wordBank: ['10', '2', '5', '4'],
        mode: 'construct'
      }
    ]
  },

  'ch3-s3': {
    questions: [
      { question: "On peut additionner seulement des radicaux semblables", answer: "vrai" },
      { question: "3√2 + 5√2 = 8√2", answer: "vrai" },
      { question: "√2 + √3 ne peut pas se simplifier", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de 3√5 + 4√5 - √5?',
        answer: '6√5',
        wrongAnswers: ['8√5', '7√5', '√5']
      },
      {
        type: 'multiple_choice',
        question: 'Peut-on simplifier √2 + √3?',
        answer: 'Non, car les radicaux ne sont pas semblables',
        wrongAnswers: ['Oui, cela donne √5', 'Oui, cela donne 2√2', 'Oui, cela donne 2√3']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de √6 × √15?',
        answer: '3√10',
        wrongAnswers: ['√21', '9√10', '√90 seulement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut additionner seulement des radicaux semblables',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '3√7 + 5√7 = 8√14',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '√2 + √8 = 3√2 (car √8 = 2√2)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut toujours additionner deux racines carrées',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie: 5√3 + 2√3 - √3 = ?√3',
        answer: '6',
        wrongAnswers: ['8', '4', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: √2 × √18 = ?',
        answer: '6',
        wrongAnswers: ['20', '36', '√20']
      },
      {
        type: 'multiple_choice',
        question: 'Rationalise: 6/√2 = ?√2',
        answer: '3',
        wrongAnswers: ['6', '12', '18']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la valeur de 4√6 + 3√6? Glisse la réponse:',
        answer: '7√6',
        wordBank: ['12√6', '7√6', '√24', '7√12'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building radical sum)
      {
        type: 'drag_and_drop',
        question: 'Construis: √3 + √12 = _____√3',
        answer: ['3'],
        wordBank: ['1', '2', '3', '4'],
        mode: 'construct'
      }
    ]
  },

  'ch3-s4': {
    questions: [
      { question: "√x = a a pour solution x = a² (si a ≥ 0)", answer: "vrai" },
      { question: "Il faut toujours vérifier les solutions", answer: "vrai" },
      { question: "√(2x+3) = 5 a pour solution x = 11", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la solution de √x = 8?',
        answer: 'x = 64',
        wrongAnswers: ['x = 8', 'x = 16', 'x = 4']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la solution de √(2x+3) = 5?',
        answer: 'x = 11',
        wrongAnswers: ['x = 13', 'x = 5', 'x = 7']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi faut-il toujours vérifier les solutions d\'une équation avec racine carrée?',
        answer: 'Parce que l\'élévation au carré peut introduire des solutions extérieures',
        wrongAnswers: ['Parce que les racines sont toujours positives', 'Parce que c\'est la règle', 'Parce que les solutions peuvent être négatives']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Si √x = 6, alors x = 36',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'équation √x = -5 a une solution',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Il faut toujours vérifier les solutions d\'une équation avec racine carrée',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√(x+2) = 4 a pour solution x = 14',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: √x = 9. Solution: x = ?',
        answer: '81',
        wrongAnswers: ['9', '3', '18']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: √(3x-2) = 5. Solution: x = ?',
        answer: '9',
        wrongAnswers: ['7', '25', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: √(x+1) = 6. Solution: x = ?',
        answer: '35',
        wrongAnswers: ['5', '37', '7']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la solution de √x = 10? Glisse la réponse:',
        answer: 'x = 100',
        wordBank: ['x = 10', 'x = 100', 'x = 20', 'x = 5'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building equation solution)
      {
        type: 'drag_and_drop',
        question: 'Construis la solution de √(2x+1) = 7: x = _____',
        answer: ['24'],
        wordBank: ['24', '12', '7', '14'],
        mode: 'construct'
      }
    ]
  },

  'ch3-s5': {
    questions: [
      { question: "√(a²) = |a|", answer: "vrai" },
      { question: "√(x²) = x si x ≥ 0", answer: "vrai" },
      { question: "√(x²) = -x si x < 0", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de √((-8)²)?',
        answer: '8',
        wrongAnswers: ['-8', '64', '±8']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur de √(x²) si x = -6?',
        answer: '6',
        wrongAnswers: ['-6', '36', '±6']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la propriété correcte pour √(a²)?',
        answer: '√(a²) = |a|',
        wrongAnswers: ['√(a²) = a', '√(a²) = -a', '√(a²) = a²']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '√(a²) est toujours positif ou nul',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√(x²) = x pour tous les nombres x',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Si x = -7, alors √(x²) = 7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√((-3)²) = -3',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: √((-12)²) = ?',
        answer: '12',
        wrongAnswers: ['-12', '144', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie: √(x²) si x = -9. Réponse: ?',
        answer: '9',
        wrongAnswers: ['-9', '81', '0']
      },
      {
        type: 'multiple_choice',
        question: '√(a²) = ? pour tous les nombres a',
        answer: '|a|',
        wrongAnswers: ['a', '-a', 'a²']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la valeur de √((-10)²)? Glisse la réponse:',
        answer: '10',
        wordBank: ['-10', '10', '100', '±10'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building absolute value property)
      {
        type: 'drag_and_drop',
        question: 'Construis: √(a²) = |_____|',
        answer: ['a'],
        wordBank: ['a', '-a', 'a²', '|a|'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 4: DÉVELOPPEMENT ET FACTORISATION
  'ch4-s1': {
    questions: [
      { question: "k(a+b) = ka + kb (distributivité)", answer: "vrai" },
      { question: "(a+b)(c+d) = ac + ad + bc + bd", answer: "vrai" },
      { question: "3(x+5) = 3x + 15", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le développement de 5(2x-3)?',
        answer: '10x - 15',
        wrongAnswers: ['10x + 15', '7x - 8', '2x - 15']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le développement de (x+4)(x+7)?',
        answer: 'x² + 11x + 28',
        wrongAnswers: ['x² + 28x + 11', 'x² + 3x + 28', '2x² + 11x + 28']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété illustre k(a+b) = ka + kb?',
        answer: 'La distributivité',
        wrongAnswers: ['L\'associativité', 'La commutativité', 'L\'identité']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le développement de 3(x+5) est 3x + 15',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour développer (a+b)(c+d), on multiplie chaque terme du premier par chaque terme du second',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '4(x+3) = 4x + 7',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La distributivité permet de développer des expressions entre parenthèses',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: 6(3x-2) = ?x - ?',
        answer: '18, 12',
        wrongAnswers: ['18, 2', '6, 12', '9, 12']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (x+5)(x+8) = x² + ?x + ?',
        answer: '13, 40',
        wrongAnswers: ['13, 13', '40, 40', '5, 8']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: 4(x+3) + 2(x-1) = ?x + ?',
        answer: '6, 10',
        wrongAnswers: ['6, 2', '4, 10', '2, 10']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le développement de 7(2x-5)? Glisse la réponse:',
        answer: '14x - 35',
        wordBank: ['14x + 35', '14x - 35', '9x - 35', '14x - 5'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building expanded expression)
      {
        type: 'drag_and_drop',
        question: 'Construis le développement de (x+3)(x+4): x² + _____x + _____',
        answer: ['7', '12'],
        wordBank: ['7', '12', '1', '3'],
        mode: 'construct'
      }
    ]
  },

  'ch4-s2': {
    questions: [
      { question: "(a+b)² = a² + 2ab + b²", answer: "vrai" },
      { question: "(a-b)² = a² - 2ab + b²", answer: "vrai" },
      { question: "(x+3)² = x² + 6x + 9", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le développement de (x+6)²?',
        answer: 'x² + 12x + 36',
        wrongAnswers: ['x² + 36x + 12', 'x² + 6x + 36', '2x² + 12x + 36']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le développement de (2x-3)²?',
        answer: '4x² - 12x + 9',
        wrongAnswers: ['4x² + 12x + 9', '2x² - 12x + 9', '4x² - 6x + 9']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle identité remarquable correspond à (a+b)²?',
        answer: 'a² + 2ab + b²',
        wrongAnswers: ['a² - 2ab + b²', 'a² - b²', 'a² + b²']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le développement de (x+3)² est x² + 6x + 9',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour développer (a-b)², on calcule a² - 2ab + b²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(x+5)² = x² + 10x + 25',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(a+b)² = a² + b²',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Développe: (x+7)² = x² + ?x + ?',
        answer: '14, 49',
        wrongAnswers: ['7, 49', '14, 7', '7, 7']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (3x-2)² = ?x² - ?x + ?',
        answer: '9, 12, 4',
        wrongAnswers: ['9, 6, 4', '3, 12, 4', '9, 12, 2']
      },
      {
        type: 'multiple_choice',
        question: 'L\'aire d\'un carré de côté (x+4) cm est x² + ?x + ? cm²',
        answer: '8, 16',
        wrongAnswers: ['4, 16', '8, 4', '4, 4']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le développement de (x+8)²? Glisse la réponse:',
        answer: 'x² + 16x + 64',
        wordBank: ['x² + 64x + 16', 'x² + 16x + 64', 'x² + 8x + 64', '2x² + 16x + 64'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building square expansion)
      {
        type: 'drag_and_drop',
        question: 'Construis le développement de (x+9)²: x² + _____x + _____',
        answer: ['18', '81'],
        wordBank: ['18', '81', '9', '162'],
        mode: 'construct'
      }
    ]
  },

  'ch4-s3': {
    questions: [
      { question: "(a+b)(a-b) = a² - b²", answer: "vrai" },
      { question: "x² - 16 = (x+4)(x-4)", answer: "vrai" },
      { question: "(x+5)(x-5) = x² - 25", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le développement de (x+8)(x-8)?',
        answer: 'x² - 64',
        wrongAnswers: ['x² + 64', 'x² - 8x + 64', '2x² - 64']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la factorisation de x² - 36?',
        answer: '(x+6)(x-6)',
        wrongAnswers: ['(x+36)(x-1)', '(x-6)²', '(x+18)(x-2)']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle identité remarquable correspond à (a+b)(a-b)?',
        answer: 'a² - b²',
        wrongAnswers: ['a² + 2ab + b²', 'a² - 2ab + b²', 'a² + b²']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le produit (a+b)(a-b) donne toujours a² - b²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x² - 25 peut se factoriser en (x+5)(x-5)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(x+7)(x-7) = x² + 49',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'identité a² - b² permet de factoriser la différence de deux carrés',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: (x+9)(x-9) = x² - ?',
        answer: '81',
        wrongAnswers: ['18', '9', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² - 49 = (x+?)(x-?)',
        answer: '7, 7',
        wrongAnswers: ['49, 49', '7, -7', '1, 49']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule rapidement: 103 × 97 = (100+3)(100-3) = 10000 - ? = ?',
        answer: '9, 9991',
        wrongAnswers: ['9, 10009', '6, 9994', '3, 9997']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le développement de (x+10)(x-10)? Glisse la réponse:',
        answer: 'x² - 100',
        wordBank: ['x² + 100', 'x² - 100', 'x² - 20x + 100', '2x² - 100'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building difference of squares)
      {
        type: 'drag_and_drop',
        question: 'Construis la factorisation de x² - 81: (x+_____)(x-_____)',
        answer: ['9', '9'],
        wordBank: ['9', '9', '81', '1'],
        mode: 'construct'
      }
    ]
  },

  'ch4-s4': {
    questions: [
      { question: "7x + 14 = 7(x+2) (facteur commun)", answer: "vrai" },
      { question: "x² + 8x + 16 = (x+4)²", answer: "vrai" },
      { question: "5x² - 20 = 5(x+2)(x-2)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la factorisation de 7x + 14?',
        answer: '7(x+2)',
        wrongAnswers: ['7(x+14)', '(x+2)(7)', 'x(7+14)']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la factorisation de x² + 10x + 25?',
        answer: '(x+5)²',
        wrongAnswers: ['(x+25)(x+1)', '(x+10)²', 'x(x+10)']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la factorisation de 3x² - 27?',
        answer: '3(x+3)(x-3)',
        wrongAnswers: ['3(x-9)', 'x(3x-27)', '(3x+9)(x-3)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La factorisation de 8x + 16 est 8(x+2)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x² + 6x + 9 peut se factoriser en (x+3)²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toute expression peut être factorisée',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le facteur commun permet de simplifier des expressions',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Factorise: 9x + 18 = ?(x+?)',
        answer: '9, 2',
        wrongAnswers: ['9, 18', '3, 6', '18, 1']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² + 12x + 36 = (x+?)²',
        answer: '6',
        wrongAnswers: ['12', '36', '3']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: 4x² - 16 = 4(x+?)(x-?)',
        answer: '2, 2',
        wrongAnswers: ['4, 4', '2, -2', '1, 16']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la factorisation de 12x + 24? Glisse la réponse:',
        answer: '12(x+2)',
        wordBank: ['12(x+24)', '12(x+2)', '(x+2)(12)', 'x(12+24)'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building factorization)
      {
        type: 'drag_and_drop',
        question: 'Construis la factorisation de x² + 14x + 49: (x+_____)²',
        answer: ['7'],
        wordBank: ['7', '14', '49', '1'],
        mode: 'construct'
      }
    ]
  },

  'ch4-s5': {
    questions: [
      { question: "x² - 7x = 0 a pour solutions x = 0 et x = 7", answer: "vrai" },
      { question: "On peut résoudre par factorisation", answer: "vrai" },
      { question: "Si AB = 0 alors A = 0 ou B = 0", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de x² - 7x = 0?',
        answer: 'x = 0 ou x = 7',
        wrongAnswers: ['x = 0 seulement', 'x = 7 seulement', 'x = 0 ou x = -7']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété permet de résoudre x(x-5) = 0?',
        answer: 'Si AB = 0 alors A = 0 ou B = 0',
        wrongAnswers: ['La distributivité', 'Les identités remarquables', 'Le facteur commun']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de x² - 9 = 0?',
        answer: 'x = 3 ou x = -3',
        wrongAnswers: ['x = 9 ou x = -9', 'x = 3 seulement', 'x = 0 ou x = 9']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'équation x² - 7x = 0 a deux solutions: x = 0 et x = 7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si AB = 0, alors nécessairement A = 0 et B = 0',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut résoudre certaines équations du second degré par factorisation',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'équation x² - 16 = 0 a une seule solution',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: x² - 8x = 0. Solutions: x = ? ou x = ?',
        answer: '0, 8',
        wrongAnswers: ['0, -8', '8, 8', '4, 4']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x(x-6) = 0. Solutions: x = ? ou x = ?',
        answer: '0, 6',
        wrongAnswers: ['0, -6', '6, 6', '3, 3']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x² - 25 = 0. Solutions: x = ? ou x = ?',
        answer: '5, -5',
        wrongAnswers: ['5, 5', '-5, -5', '25, -25']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelles sont les solutions de x² - 5x = 0? Glisse les solutions:',
        answer: 'x = 0 ou x = 5',
        wordBank: ['x = 0 ou x = 5', 'x = 0 seulement', 'x = 5 seulement', 'x = 0 ou x = -5'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building equation solution)
      {
        type: 'drag_and_drop',
        question: 'Construis les solutions de x(x-9) = 0: x = _____ ou x = _____',
        answer: ['0', '9'],
        wordBank: ['0', '9', '1', '-9'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 5: ÉQUATIONS ET INÉQUATIONS
  'ch5-s1': {
    questions: [
      { question: "x + 8 = 15 a pour solution x = 7", answer: "vrai" },
      { question: "4x - 3 = 17 a pour solution x = 5", answer: "vrai" },
      { question: "On peut ajouter le même nombre aux deux membres", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la solution de x + 8 = 15?',
        answer: 'x = 7',
        wrongAnswers: ['x = 23', 'x = -7', 'x = 15']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la solution de 4x - 3 = 17?',
        answer: 'x = 5',
        wrongAnswers: ['x = 14', 'x = 4', 'x = 20']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle opération permet de résoudre x + 5 = 12?',
        answer: 'Soustraire 5 des deux membres',
        wrongAnswers: ['Ajouter 5 aux deux membres', 'Multiplier par 5', 'Diviser par 5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Pour résoudre une équation, on peut ajouter le même nombre aux deux membres',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'équation 3x + 6 = 18 a pour solution x = 4',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut multiplier les deux membres d\'une équation par 0',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'équation 2(x+3) = x + 10 a pour solution x = 4',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: x + 12 = 20. Solution: x = ?',
        answer: '8',
        wrongAnswers: ['32', '12', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 5x - 4 = 16. Solution: x = ?',
        answer: '4',
        wrongAnswers: ['12', '20', '3']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 3(x+2) = x + 14. Solution: x = ?',
        answer: '4',
        wrongAnswers: ['8', '2', '6']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la solution de x + 10 = 18? Glisse la réponse:',
        answer: 'x = 8',
        wordBank: ['x = 28', 'x = 8', 'x = -8', 'x = 10'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building equation solution)
      {
        type: 'drag_and_drop',
        question: 'Construis la solution de 6x - 5 = 19: x = _____',
        answer: ['4'],
        wordBank: ['4', '14', '24', '3'],
        mode: 'construct'
      }
    ]
  },

  'ch5-s2': {
    questions: [
      { question: "x - 4 > 7 a pour solution x > 11", answer: "vrai" },
      { question: "-3x ≤ 12 a pour solution x ≥ -4", answer: "vrai" },
      { question: "Multiplier par négatif inverse le sens", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de x - 4 > 7?',
        answer: 'x > 11',
        wrongAnswers: ['x > 3', 'x < 11', 'x = 11']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de -3x ≤ 12?',
        answer: 'x ≥ -4',
        wrongAnswers: ['x ≤ -4', 'x ≥ 4', 'x ≤ 4']
      },
      {
        type: 'multiple_choice',
        question: 'Que se passe-t-il quand on multiplie les deux membres d\'une inégalité par un nombre négatif?',
        answer: 'Le sens de l\'inégalité change',
        wrongAnswers: ['Le sens reste le même', 'On ne peut pas multiplier', 'L\'inégalité devient une égalité']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les solutions de x - 5 > 8 sont x > 13',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Quand on multiplie par un nombre négatif, le sens de l\'inégalité change',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les solutions de -2x < 10 sont x < -5',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut ajouter le même nombre aux deux membres d\'une inégalité sans changer le sens',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: x - 6 > 9. Solution: x > ?',
        answer: '15',
        wrongAnswers: ['3', '9', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: -4x ≤ 20. Solution: x ? -5',
        answer: '≥',
        wrongAnswers: ['≤', '<', '>']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 3(x-2) < 2x + 7. Solution: x < ?',
        answer: '13',
        wrongAnswers: ['1', '7', '5']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelles sont les solutions de x - 7 > 5? Glisse la réponse:',
        answer: 'x > 12',
        wordBank: ['x > 12', 'x > 2', 'x < 12', 'x = 12'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building inequality solution)
      {
        type: 'drag_and_drop',
        question: 'Construis les solutions de -5x ≥ 15: x _____ _____',
        answer: ['≤', '-3'],
        wordBank: ['≤', '-3', '≥', '3'],
        mode: 'construct'
      }
    ]
  },

  'ch5-s3': {
    questions: [
      { question: "Une équation produit nul: si AB = 0 alors A = 0 ou B = 0", answer: "vrai" },
      { question: "x² - 9 = 0 a pour solutions x = 3 et x = -3", answer: "vrai" },
      { question: "On factorise puis on applique la règle", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de x(x-5) = 0?',
        answer: 'x = 0 ou x = 5',
        wrongAnswers: ['x = 0 seulement', 'x = 5 seulement', 'x = 0 ou x = -5']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de x² - 9 = 0?',
        answer: 'x = 3 ou x = -3',
        wrongAnswers: ['x = 9 ou x = -9', 'x = 3 seulement', 'x = 0 ou x = 9']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété permet de résoudre (x+2)(x-7) = 0?',
        answer: 'Si AB = 0 alors A = 0 ou B = 0',
        wrongAnswers: ['La distributivité', 'Les identités remarquables', 'Le facteur commun']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'équation (x+3)(x-4) = 0 a deux solutions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si AB = 0, alors nécessairement A = 0 et B = 0 en même temps',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'équation x² - 25 = 0 a pour solutions x = 5 et x = -5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut résoudre certaines équations du second degré par factorisation',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: (x+4)(x-6) = 0. Solutions: x = ? ou x = ?',
        answer: '-4, 6',
        wrongAnswers: ['4, -6', '4, 6', '-4, -6']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x² - 49 = 0. Solutions: x = ? ou x = ?',
        answer: '7, -7',
        wrongAnswers: ['7, 7', '-7, -7', '49, -49']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x(x+8) = 0. Solutions: x = ? ou x = ?',
        answer: '0, -8',
        wrongAnswers: ['0, 8', '8, -8', '0, 0']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelles sont les solutions de (x+5)(x-3) = 0? Glisse les solutions:',
        answer: 'x = -5 ou x = 3',
        wordBank: ['x = 5 ou x = -3', 'x = -5 ou x = 3', 'x = 5 ou x = 3', 'x = -5 ou x = -3'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building equation solutions)
      {
        type: 'drag_and_drop',
        question: 'Construis les solutions de x² - 16 = 0: x = _____ ou x = _____',
        answer: ['4', '-4'],
        wordBank: ['4', '-4', '16', '-16'],
        mode: 'construct'
      }
    ]
  },

  'ch5-s4': {
    questions: [
      { question: "Une équation du second degré a la forme ax² + bx + c = 0", answer: "vrai" },
      { question: "Le discriminant Δ = b² - 4ac", answer: "vrai" },
      { question: "Si Δ > 0, il y a deux solutions", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur du discriminant Δ pour x² - 5x + 6 = 0?',
        answer: 'Δ = 1',
        wrongAnswers: ['Δ = -1', 'Δ = 25', 'Δ = 0']
      },
      {
        type: 'multiple_choice',
        question: 'Si Δ > 0, combien de solutions a l\'équation?',
        answer: '2 solutions distinctes',
        wrongAnswers: ['1 solution', '0 solution', '3 solutions']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les solutions de x² - 5x + 6 = 0?',
        answer: 'x = 2 ou x = 3',
        wrongAnswers: ['x = -2 ou x = -3', 'x = 1 ou x = 6', 'x = 0 ou x = 5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le discriminant Δ = b² - 4ac permet de déterminer le nombre de solutions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si Δ < 0, l\'équation a deux solutions complexes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si Δ = 0, l\'équation a une solution double',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les équations du second degré ont toujours deux solutions',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule Δ pour x² - 7x + 10 = 0. Δ = ?',
        answer: '9',
        wrongAnswers: ['49', '3', '-9']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x² - 8x + 15 = 0. Solutions: x = ? ou x = ?',
        answer: '3, 5',
        wrongAnswers: ['-3, -5', '3, -5', '1, 15']
      },
      {
        type: 'multiple_choice',
        question: 'Si Δ = 4 pour x² + bx + c = 0, il y a combien de solutions distinctes?',
        answer: '2',
        wrongAnswers: ['1', '0', '3']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelles sont les solutions de x² - 6x + 8 = 0? Glisse les solutions:',
        answer: 'x = 2 ou x = 4',
        wordBank: ['x = -2 ou x = -4', 'x = 2 ou x = 4', 'x = 1 ou x = 8', 'x = 0 ou x = 6'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building discriminant value)
      {
        type: 'drag_and_drop',
        question: 'Construis Δ pour x² - 4x + 3 = 0: Δ = _____',
        answer: ['4'],
        wordBank: ['4', '16', '-4', '0'],
        mode: 'construct'
      }
    ]
  },

  'ch5-s5': {
    questions: [
      { question: "Un système d'équations a plusieurs équations", answer: "vrai" },
      { question: "On peut résoudre par substitution", answer: "vrai" },
      { question: "On peut résoudre par combinaison", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la solution du système x + y = 5, x - y = 1?',
        answer: 'x = 3, y = 2',
        wrongAnswers: ['x = 2, y = 3', 'x = 4, y = 1', 'x = 1, y = 4']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle méthode consiste à remplacer une variable par son expression?',
        answer: 'La méthode par substitution',
        wrongAnswers: ['La méthode par combinaison', 'La méthode par factorisation', 'La méthode par addition']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la solution du système 2x + 3y = 7, x - y = 1?',
        answer: 'x = 2, y = 1',
        wrongAnswers: ['x = 1, y = 2', 'x = 3, y = 0', 'x = 4, y = -1']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un système d\'équations linéaires peut avoir une solution unique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut toujours résoudre un système par substitution',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un système peut avoir une infinité de solutions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un système de deux équations à deux inconnues a toujours une solution',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous le système x + y = 8, x - y = 2. Solution: x = ?, y = ?',
        answer: '5, 3',
        wrongAnswers: ['3, 5', '4, 4', '6, 2']
      },
      {
        type: 'multiple_choice',
        question: 'Résous le système 3x + 2y = 11, x - y = 1. Solution: x = ?, y = ?',
        answer: '3, 1',
        wrongAnswers: ['1, 3', '2, 2', '4, 0']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: x=2, y=3 dans x + y = 5. Calcule: 2 + 3 = ?',
        answer: '5',
        wrongAnswers: ['6', '4', '1']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la solution du système x + y = 6, x - y = 2? Glisse les valeurs:',
        answer: 'x = 4, y = 2',
        wordBank: ['x = 4, y = 2', 'x = 3, y = 3', 'x = 2, y = 4', 'x = 5, y = 1'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building system solution)
      {
        type: 'drag_and_drop',
        question: 'Construis la solution de x + y = 7, x - y = 1: x = _____, y = _____',
        answer: ['4', '3'],
        wordBank: ['4', '3', '7', '1'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 6: FONCTIONS
  'ch6-s1': {
    questions: [
      { question: "Une fonction associe à chaque x un unique y", answer: "vrai" },
      { question: "f(x) = 2x + 3 est une fonction affine", answer: "vrai" },
      { question: "L'image de 5 par f(x) = 2x + 3 est 13", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f(5) si f(x) = 2x + 3',
        answer: 'f(5) = 13',
        wrongAnswers: ['f(5) = 10', 'f(5) = 8', 'f(5) = 15']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve x tel que f(x) = 7 si f(x) = 2x + 3',
        answer: 'x = 2',
        wrongAnswers: ['x = 4', 'x = 5', 'x = 3']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété caractérise une fonction?',
        answer: 'À chaque x correspond un unique y',
        wrongAnswers: ['À chaque x correspondent plusieurs y', 'À chaque y correspond un unique x', 'Tous les x ont la même image']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une fonction associe à chaque x un unique y',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si f(2) = 5 et f(2) = 7, alors f est une fonction',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'image de 4 par f(x) = 3x + 1 est 13',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut calculer f(a) pour toute valeur a',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f(7) si f(x) = 3x + 2. f(7) = ?',
        answer: '23',
        wrongAnswers: ['21', '25', '27']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve x tel que f(x) = 14 si f(x) = 4x - 2. x = ?',
        answer: '4',
        wrongAnswers: ['3', '5', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Si f(x) = 5x + 3, calcule f(3) - f(1) = ?',
        answer: '10',
        wrongAnswers: ['8', '12', '15']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule f(6) si f(x) = 2x + 5. Glisse la réponse:',
        answer: 'f(6) = 17',
        wordBank: ['f(6) = 12', 'f(6) = 17', 'f(6) = 22', 'f(6) = 30'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building function evaluation)
      {
        type: 'drag_and_drop',
        question: 'Construis f(4) si f(x) = 3x + 7: f(4) = _____',
        answer: ['19'],
        wordBank: ['19', '12', '28', '11'],
        mode: 'construct'
      }
    ]
  },

  'ch6-s2': {
    questions: [
      { question: "f(x) = ax + b est une fonction affine", answer: "vrai" },
      { question: "a est le coefficient directeur", answer: "vrai" },
      { question: "b est l'ordonnée à l'origine", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans f(x) = 3x - 2, quel est le coefficient directeur?',
        answer: 'a = 3',
        wrongAnswers: ['a = -2', 'a = 1', 'a = 5']
      },
      {
        type: 'multiple_choice',
        question: 'Dans f(x) = 5x + 7, quelle est l\'ordonnée à l\'origine?',
        answer: 'b = 7',
        wrongAnswers: ['b = 5', 'b = 0', 'b = -7']
      },
      {
        type: 'multiple_choice',
        question: 'Quel point appartient toujours à la courbe de f(x) = ax + b?',
        answer: '(0, b)',
        wrongAnswers: ['(1, a)', '(b, 0)', '(a, b)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans une fonction affine f(x) = ax + b, a est le coefficient directeur',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'ordonnée à l\'origine est toujours positive',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La fonction f(x) = 2x + 1 passe par le point (0, 1)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si a > 0, la fonction affine est décroissante',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans f(x) = 4x - 5, le coefficient directeur est ? et l\'ordonnée à l\'origine est ?',
        answer: '4, -5',
        wrongAnswers: ['-5, 4', '4, 5', '-4, -5']
      },
      {
        type: 'multiple_choice',
        question: 'La fonction f(x) = 3x + 2 passe par le point (0, ?)',
        answer: '2',
        wrongAnswers: ['0', '3', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Si f(x) = ax + 3 et f(2) = 11, alors a = ?',
        answer: '4',
        wrongAnswers: ['2', '8', '14']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le coefficient directeur de f(x) = -2x + 5? Glisse la réponse:',
        answer: 'a = -2',
        wordBank: ['a = -2', 'a = 5', 'a = 2', 'a = -5'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building affine function)
      {
        type: 'drag_and_drop',
        question: 'Construis l\'ordonnée à l\'origine de f(x) = 6x - 8: b = _____',
        answer: ['-8'],
        wordBank: ['-8', '6', '8', '-6'],
        mode: 'construct'
      }
    ]
  },

  'ch6-s3': {
    questions: [
      { question: "f(x) = x² est une fonction carrée", answer: "vrai" },
      { question: "f(x) = x² est décroissante sur ]-∞, 0]", answer: "vrai" },
      { question: "f(x) = x² est croissante sur [0, +∞[", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f(-4) si f(x) = x²',
        answer: 'f(-4) = 16',
        wrongAnswers: ['f(-4) = -16', 'f(-4) = 8', 'f(-4) = -8']
      },
      {
        type: 'multiple_choice',
        question: 'Sur quel intervalle f(x) = x² est-elle décroissante?',
        answer: ']-∞, 0]',
        wrongAnswers: ['[0, +∞[', ']-∞, +∞[', 'Aucun intervalle']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le minimum de f(x) = x²?',
        answer: '0 (atteint en x = 0)',
        wrongAnswers: ['-1 (atteint en x = -1)', '1 (atteint en x = 1)', 'Aucun minimum']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La fonction f(x) = x² est décroissante sur ]-∞, 0]',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La fonction f(x) = x² atteint son minimum en x = 1',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour tout x, f(x) = x² ≥ 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La fonction f(x) = x² est toujours croissante',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f(-5) si f(x) = x². f(-5) = ?',
        answer: '25',
        wrongAnswers: ['-25', '5', '10']
      },
      {
        type: 'multiple_choice',
        question: 'La fonction f(x) = x² atteint son minimum en x = ?',
        answer: '0',
        wrongAnswers: ['1', '-1', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Sur quel intervalle f(x) = x² est-elle croissante? [?, +∞[',
        answer: '0',
        wrongAnswers: ['1', '-∞', '2']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule f(6) si f(x) = x². Glisse la réponse:',
        answer: 'f(6) = 36',
        wordBank: ['f(6) = 36', 'f(6) = 12', 'f(6) = 18', 'f(6) = 6'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building square function)
      {
        type: 'drag_and_drop',
        question: 'Construis le minimum de f(x) = x²: minimum = _____ en x = _____',
        answer: ['0', '0'],
        wordBank: ['0', '0', '1', '-1'],
        mode: 'construct'
      }
    ]
  },

  'ch6-s4': {
    questions: [
      { question: "f(x) = 1/x est définie si x ≠ 0", answer: "vrai" },
      { question: "f(x) = 1/x est décroissante sur ]0, +∞[", answer: "vrai" },
      { question: "La courbe de 1/x est une hyperbole", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le domaine de définition de f(x) = 1/x?',
        answer: 'ℝ* (tous réels sauf 0)',
        wrongAnswers: ['ℝ (tous réels)', ']0, +∞[', ']-∞, 0[']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule f(4) si f(x) = 1/x',
        answer: 'f(4) = 0,25',
        wrongAnswers: ['f(4) = 4', 'f(4) = -4', 'f(4) = 0']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi f(x) = 1/x n\'est-elle pas définie en x = 0?',
        answer: 'Division par zéro est impossible',
        wrongAnswers: ['x = 0 n\'existe pas', 'La fonction est trop complexe', 'C\'est une convention']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La fonction f(x) = 1/x est définie pour x = 0',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La fonction f(x) = 1/x est décroissante sur ]0, +∞[',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour tout x ≠ 0, f(x) = 1/x ≠ 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La courbe de f(x) = 1/x est une droite',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f(5) si f(x) = 1/x. f(5) = ?',
        answer: '0,2',
        wrongAnswers: ['5', '1/5', '0.5']
      },
      {
        type: 'multiple_choice',
        question: 'Le domaine de f(x) = 1/x est ℝ* = ℝ \\ {?}',
        answer: '0',
        wrongAnswers: ['1', '-1', '∞']
      },
      {
        type: 'multiple_choice',
        question: 'Si f(x) = 1/x, alors f(1/2) = ?',
        answer: '2',
        wrongAnswers: ['1/2', '1', '4']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le domaine de f(x) = 1/x? Glisse la réponse:',
        answer: 'ℝ* (tous réels sauf 0)',
        wordBank: ['ℝ* (tous réels sauf 0)', 'ℝ (tous réels)', ']0, +∞[', ']-∞, 0['],
        mode: 'select'
      },
      // Drag and Drop - Construction (building inverse function)
      {
        type: 'drag_and_drop',
        question: 'Construis f(2) si f(x) = 1/x: f(2) = _____',
        answer: ['0,5'],
        wordBank: ['0,5', '2', '0,2', '5'],
        mode: 'construct'
      }
    ]
  },

  'ch6-s5': {
    questions: [
      { question: "La dérivée mesure le taux de variation", answer: "vrai" },
      { question: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h", answer: "vrai" },
      { question: "Si f'(x) > 0, f est croissante", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f\'(x) si f(x) = x²',
        answer: 'f\'(x) = 2x',
        wrongAnswers: ['f\'(x) = x', 'f\'(x) = x²', 'f\'(x) = 2']
      },
      {
        type: 'multiple_choice',
        question: 'Si f\'(x) = 2x, où f est-elle croissante?',
        answer: 'Sur [0, +∞[',
        wrongAnswers: ['Sur ]-∞, 0]', 'Sur ]-∞, +∞[', 'Aucun intervalle']
      },
      {
        type: 'multiple_choice',
        question: 'Que représente f\'(x)?',
        answer: 'Le taux de variation ou la pente de la tangente',
        wrongAnswers: ['La valeur de f(x)', 'L\'aire sous la courbe', 'Le maximum de f']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Si f\'(x) > 0, alors f est croissante en x',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si f\'(x) = 0, alors f a toujours un extremum en x',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La dérivée de f(x) = 3x + 2 est f\'(x) = 3',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toute fonction dérivable est continue',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f\'(x) si f(x) = 4x + 5. f\'(x) = ?',
        answer: '4',
        wrongAnswers: ['5', '9', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Si f\'(x) = 3x², calcule f\'(2). f\'(2) = ?',
        answer: '12',
        wrongAnswers: ['6', '18', '24']
      },
      {
        type: 'multiple_choice',
        question: 'Si f\'(x) > 0 sur un intervalle, alors f est _____ sur cet intervalle',
        answer: 'croissante',
        wrongAnswers: ['décroissante', 'constante', 'nulle']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule f\'(x) si f(x) = x³. Glisse la réponse:',
        answer: 'f\'(x) = 3x²',
        wordBank: ['f\'(x) = 3x²', 'f\'(x) = x²', 'f\'(x) = 3x', 'f\'(x) = x³'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building derivative)
      {
        type: 'drag_and_drop',
        question: 'Construis f\'(x) si f(x) = 5x + 3: f\'(x) = _____',
        answer: ['5'],
        wordBank: ['5', '3', '8', '15'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 7: GÉOMÉTRIE ANALYTIQUE
  'ch7-s1': {
    questions: [
      { question: "Un repère orthonormé a des axes perpendiculaires", answer: "vrai" },
      { question: "Un point a des coordonnées (x, y)", answer: "vrai" },
      { question: "L'origine a pour coordonnées (0, 0)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelles sont les coordonnées de l\'origine?',
        answer: '(0, 0)',
        wrongAnswers: ['(1, 1)', '(0, 1)', '(1, 0)']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la distance entre A(1,2) et B(4,6)',
        answer: 'AB = 5',
        wrongAnswers: ['AB = 4', 'AB = 7', 'AB = 3']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le milieu de [AB] si A(1,2) et B(5,8)',
        answer: 'M(3, 5)',
        wrongAnswers: ['M(4, 6)', 'M(2, 4)', 'M(6, 10)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans un repère orthonormé, les axes sont perpendiculaires',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'origine a pour coordonnées (1, 1)',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un point dans le plan a deux coordonnées (x, y)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La distance entre deux points peut être négative',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les coordonnées de l\'origine sont (?, ?)',
        answer: '0, 0',
        wrongAnswers: ['1, 1', '0, 1', '1, 0']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la distance entre A(2,3) et B(6,7). AB = ?',
        answer: '4√2',
        wrongAnswers: ['4', '8', '√32']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le milieu de [AB] si A(3,4) et B(9,10). M(?, ?)',
        answer: '6, 7',
        wrongAnswers: ['(3, 4)', '(9, 10)', '(12, 14)']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelles sont les coordonnées de l\'origine? Glisse la réponse:',
        answer: '(0, 0)',
        wordBank: ['(0, 0)', '(1, 1)', '(0, 1)', '(1, 0)'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building coordinates)
      {
        type: 'drag_and_drop',
        question: 'Construis le milieu de [AB] si A(2,4) et B(8,12): M(_____, _____)',
        answer: ['5', '8'],
        wordBank: ['5', '8', '4', '6'],
        mode: 'construct'
      }
    ]
  },

  'ch7-s2': {
    questions: [
      { question: "L'équation d'une droite est y = ax + b", answer: "vrai" },
      { question: "a est le coefficient directeur", answer: "vrai" },
      { question: "Deux droites parallèles ont même coefficient directeur", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Trouve l\'équation de la droite passant par (0,2) et (2,6)',
        answer: 'y = 2x + 2',
        wrongAnswers: ['y = 3x + 2', 'y = 2x + 4', 'y = x + 2']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le coefficient directeur de y = 3x - 1?',
        answer: 'a = 3',
        wrongAnswers: ['a = -1', 'a = 1', 'a = 4']
      },
      {
        type: 'multiple_choice',
        question: 'Les droites y = 2x + 1 et y = 2x - 3 sont-elles parallèles?',
        answer: 'Oui (même coefficient 2)',
        wrongAnswers: ['Non, elles sont perpendiculaires', 'Non, elles se coupent', 'On ne peut pas savoir']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Deux droites parallèles ont le même coefficient directeur',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'équation d\'une droite est toujours de la forme y = ax + b',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le coefficient directeur mesure la pente de la droite',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si a = 0, la droite est parallèle à l\'axe des abscisses',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Trouve l\'équation de la droite passant par (0,3) avec coefficient directeur 4: y = ?x + ?',
        answer: '4, 3',
        wrongAnswers: ['3, 4', '4, 0', '0, 3']
      },
      {
        type: 'multiple_choice',
        question: 'Le coefficient directeur de y = -2x + 5 est:',
        answer: '-2',
        wrongAnswers: ['2', '5', '-5']
      },
      {
        type: 'multiple_choice',
        question: 'Si deux droites ont le même coefficient directeur, elles sont:',
        answer: 'parallèles',
        wrongAnswers: ['perpendiculaires', 'sécantes', 'confondues']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le coefficient directeur de y = 5x - 3? Glisse la réponse:',
        answer: 'a = 5',
        wordBank: ['a = 5', 'a = -3', 'a = 3', 'a = -5'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building line equation)
      {
        type: 'drag_and_drop',
        question: 'Construis l\'équation de la droite passant par (0,4) avec coefficient 3: y = _____x + _____',
        answer: ['3', '4'],
        wordBank: ['3', '4', '1', '7'],
        mode: 'construct'
      }
    ]
  },

  'ch7-s3': {
    questions: [
      { question: "Deux droites perpendiculaires: a × a' = -1", answer: "vrai" },
      { question: "Le cercle a pour équation (x-a)² + (y-b)² = r²", answer: "vrai" },
      { question: "Le centre du cercle est (a, b)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si une droite a pour coefficient 2, quel coefficient pour une perpendiculaire?',
        answer: 'a\' = -1/2',
        wrongAnswers: ['a\' = 2', 'a\' = -2', 'a\' = 1/2']
      },
      {
        type: 'multiple_choice',
        question: 'Équation du cercle de centre (0,0) et rayon 5?',
        answer: 'x² + y² = 25',
        wrongAnswers: ['x² + y² = 5', 'x² + y² = 10', '(x-5)² + (y-5)² = 25']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le centre du cercle (x-3)² + (y+2)² = 16?',
        answer: '(3, -2)',
        wrongAnswers: ['(-3, 2)', '(3, 2)', '(-3, -2)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Deux droites perpendiculaires vérifient a × a\' = -1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cercle (x-2)² + (y+3)² = 9 a pour centre (2, 3)',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un cercle de rayon 4 a pour équation (x-a)² + (y-b)² = 16',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si deux droites sont perpendiculaires, leurs coefficients sont égaux',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si une droite a pour coefficient 3, le coefficient d\'une perpendiculaire est:',
        answer: '-1/3',
        wrongAnswers: ['1/3', '-3', '3']
      },
      {
        type: 'multiple_choice',
        question: 'Le centre du cercle (x-4)² + (y-5)² = 36 est (?, ?)',
        answer: '4, 5',
        wrongAnswers: ['(-4, -5)', '(0, 0)', '(4, -5)']
      },
      {
        type: 'multiple_choice',
        question: 'Le rayon du cercle x² + y² = 49 est:',
        answer: '7',
        wrongAnswers: ['49', '14', '√49']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Équation du cercle de centre (0,0) et rayon 6? Glisse la réponse:',
        answer: 'x² + y² = 36',
        wordBank: ['x² + y² = 36', 'x² + y² = 6', 'x² + y² = 12', '(x-6)² + y² = 36'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building circle equation)
      {
        type: 'drag_and_drop',
        question: 'Construis le centre du cercle (x-5)² + (y+3)² = 16: centre (_____, _____)',
        answer: ['5', '-3'],
        wordBank: ['5', '-3', '3', '-5'],
        mode: 'construct'
      }
    ]
  },

  'ch7-s4': {
    questions: [
      { question: "La distance point-droite se calcule avec une formule", answer: "vrai" },
      { question: "L'aire d'un triangle se calcule avec le déterminant", answer: "vrai" },
      { question: "Le déterminant mesure l'aire orientée", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Aire du triangle A(0,0), B(3,0), C(0,4)?',
        answer: 'A = 6',
        wrongAnswers: ['A = 12', 'A = 7', 'A = 5']
      },
      {
        type: 'multiple_choice',
        question: 'Distance du point (2,3) à la droite y = x?',
        answer: 'd = 1/√2',
        wrongAnswers: ['d = 1', 'd = 0', 'd = √2']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété est vraie pour toute distance point-droite?',
        answer: 'La distance est toujours positive ou nulle',
        wrongAnswers: ['La distance peut être négative', 'La distance dépend de l\'ordre des points', 'La distance est toujours 1']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La distance d\'un point à une droite est toujours positive',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'aire d\'un triangle peut être calculée avec le déterminant',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si un point appartient à une droite, la distance est négative',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le déterminant mesure une aire orientée',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Aire du triangle A(0,0), B(5,0), C(0,6). A = ?',
        answer: '15',
        wrongAnswers: ['30', '11', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Si un point appartient à une droite, la distance point-droite est:',
        answer: '0',
        wrongAnswers: ['1', '∞', 'indéfinie']
      },
      {
        type: 'multiple_choice',
        question: 'Aire du triangle avec déterminant: A = (1/2) × |?|',
        answer: 'déterminant',
        wrongAnswers: ['vecteur', 'norme', 'produit']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Aire du triangle A(0,0), B(4,0), C(0,3)? Glisse la réponse:',
        answer: 'A = 6',
        wordBank: ['A = 6', 'A = 12', 'A = 7', 'A = 5'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building triangle area)
      {
        type: 'drag_and_drop',
        question: 'Construis l\'aire du triangle rectangle A(0,0), B(6,0), C(0,8): A = _____',
        answer: ['24'],
        wordBank: ['24', '14', '48', '12'],
        mode: 'construct'
      }
    ]
  },

  'ch7-s5': {
    questions: [
      { question: "Les vecteurs ont des coordonnées", answer: "vrai" },
      { question: "u⃗(x,y) + v⃗(x',y') = (x+x', y+y')", answer: "vrai" },
      { question: "||u⃗|| = √(x² + y²)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule u⃗(2,3) + v⃗(-1,4)',
        answer: '(1, 7)',
        wrongAnswers: ['(1, -1)', '(3, 7)', '(2, 12)']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ||u⃗|| si u⃗(3,4)',
        answer: '||u⃗|| = 5',
        wrongAnswers: ['||u⃗|| = 7', '||u⃗|| = 12', '||u⃗|| = 25']
      },
      {
        type: 'multiple_choice',
        question: 'u⃗(4,6) et v⃗(2,3) sont-ils colinéaires?',
        answer: 'Oui (4×3 - 6×2 = 0)',
        wrongAnswers: ['Non, ils sont perpendiculaires', 'Non, ils ne sont pas colinéaires', 'On ne peut pas savoir']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La norme d\'un vecteur est toujours positive ou nulle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'u⃗(2,3) + v⃗(1,4) = (3, 12)',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Si ||u⃗|| = 0, alors u⃗ est le vecteur nul',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Deux vecteurs colinéaires ont la même direction',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule u⃗(3,5) + v⃗(2,1) = (?, ?)',
        answer: '5, 6',
        wrongAnswers: ['(1, 4)', '(6, 5)', '(3, 2)']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ||u⃗|| si u⃗(6,8). ||u⃗|| = ?',
        answer: '10',
        wrongAnswers: ['14', '48', '√14']
      },
      {
        type: 'multiple_choice',
        question: 'u⃗(5,10) et v⃗(1,2) sont:',
        answer: 'colinéaires',
        wrongAnswers: ['non colinéaires', 'orthogonaux', 'égaux']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule ||u⃗|| si u⃗(5,12). Glisse la réponse:',
        answer: '||u⃗|| = 13',
        wordBank: ['||u⃗|| = 13', '||u⃗|| = 17', '||u⃗|| = 7', '||u⃗|| = 25'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building vector sum)
      {
        type: 'drag_and_drop',
        question: 'Construis u⃗(4,3) + v⃗(2,5) = (_____, _____)',
        answer: ['6', '8'],
        wordBank: ['6', '8', '2', '15'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 8: TRIGONOMÉTRIE
  'ch8-s1': {
    questions: [
      { question: "cos θ = côté adjacent / hypoténuse", answer: "vrai" },
      { question: "sin θ = côté opposé / hypoténuse", answer: "vrai" },
      { question: "tan θ = sin θ / cos θ", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côté adjacent = 3cm, hypoténuse = 5cm. Calcule cos B̂',
        answer: 'cos B̂ = 3/5 = 0,6',
        wrongAnswers: ['cos B̂ = 5/3', 'cos B̂ = 4/5', 'cos B̂ = 1/2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule cos 60° + sin 30°',
        answer: '1',
        wrongAnswers: ['0', '1/2', '√3/2']
      },
      {
        type: 'multiple_choice',
        question: 'Si cos θ = 3/5, calcule sin θ (utilise cos²θ + sin²θ = 1)',
        answer: 'sin θ = 4/5',
        wrongAnswers: ['sin θ = 3/5', 'sin θ = 5/3', 'sin θ = 1/5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans un triangle rectangle, cos θ = côté adjacent / hypoténuse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'cos 60° = sin 30°',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour tout angle θ, cos²θ + sin²θ = 2',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'tan θ = sin θ / cos θ est toujours défini',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côté opposé = 4cm, hypoténuse = 5cm. sin θ = ?',
        answer: '4/5',
        wrongAnswers: ['3/5', '5/4', '4/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule cos 45°. cos 45° = ?',
        answer: '√2/2',
        wrongAnswers: ['1/2', '√3/2', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Si cos θ = 12/13, alors sin θ = ? (utilise cos²θ + sin²θ = 1)',
        answer: '5/13',
        wrongAnswers: ['1/13', '13/5', '12/13']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle: côté adjacent = 4cm, hypoténuse = 5cm. Glisse cos θ:',
        answer: 'cos θ = 4/5',
        wordBank: ['cos θ = 4/5', 'cos θ = 5/4', 'cos θ = 3/5', 'cos θ = 1'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building trigonometric ratio)
      {
        type: 'drag_and_drop',
        question: 'Construis: cos 60° = _____',
        answer: ['1/2'],
        wordBank: ['1/2', '√3/2', '1', '0'],
        mode: 'construct'
      }
    ]
  },

  'ch8-s2': {
    questions: [
      { question: "cos²θ + sin²θ = 1", answer: "vrai" },
      { question: "cos(-θ) = cos θ", answer: "vrai" },
      { question: "sin(-θ) = -sin θ", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Vérifie: cos²30° + sin²30° = ?',
        answer: '1',
        wrongAnswers: ['0', '1/2', '√3/2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule cos(-60°)',
        answer: 'cos(-60°) = 1/2',
        wrongAnswers: ['cos(-60°) = -1/2', 'cos(-60°) = √3/2', 'cos(-60°) = -√3/2']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété caractérise le cosinus?',
        answer: 'Le cosinus est pair: cos(-θ) = cos θ',
        wrongAnswers: ['Le cosinus est impair', 'Le cosinus n\'a pas de parité', 'cos(-θ) = -cos θ']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'identité fondamentale: cos²θ + sin²θ = 1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cosinus est pair: cos(-θ) = cos θ',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le sinus est pair: sin(-θ) = sin θ',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'cos²45° + sin²45° = 2',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule cos²60° + sin²60°. La réponse est:',
        answer: '1',
        wrongAnswers: ['0', '2', '1/2']
      },
      {
        type: 'multiple_choice',
        question: 'Si cos θ = 4/5, alors sin θ = ? (utilise cos²θ + sin²θ = 1)',
        answer: '3/5',
        wrongAnswers: ['1/5', '5/4', '4/5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule sin(-30°). sin(-30°) = ?',
        answer: '-1/2',
        wrongAnswers: ['1/2', '-√3/2', '0']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule cos(-45°). Glisse la réponse:',
        answer: 'cos(-45°) = √2/2',
        wordBank: ['cos(-45°) = √2/2', 'cos(-45°) = -√2/2', 'cos(-45°) = 1', 'cos(-45°) = 0'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building trigonometric identity)
      {
        type: 'drag_and_drop',
        question: 'Construis: cos²θ + sin²θ = _____',
        answer: ['1'],
        wordBank: ['1', '0', '2', 'θ'],
        mode: 'construct'
      }
    ]
  },

  'ch8-s3': {
    questions: [
      { question: "On peut résoudre des triangles avec la trigonométrie", answer: "vrai" },
      { question: "La loi des sinus: a/sin A = b/sin B", answer: "vrai" },
      { question: "La loi des cosinus: a² = b² + c² - 2bc cos A", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Triangle: a = 5, A = 30°, B = 45°. Calcule b (utilise la loi des sinus)',
        answer: 'b ≈ 7,07',
        wrongAnswers: ['b = 5', 'b ≈ 3,54', 'b ≈ 10']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle: a = 5, b = 6, C = 60°. Calcule c (utilise la loi des cosinus)',
        answer: 'c ≈ 5,57',
        wrongAnswers: ['c = 7', 'c ≈ 6', 'c ≈ 4']
      },
      {
        type: 'multiple_choice',
        question: 'Quand utiliser la loi des cosinus?',
        answer: 'Quand on connaît 2 côtés et l\'angle entre eux',
        wrongAnswers: ['Quand on connaît 1 côté et 1 angle', 'Quand on connaît 3 angles', 'Jamais']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La loi des sinus: a/sin A = b/sin B = c/sin C',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La loi des cosinus permet de calculer un côté connaissant deux côtés et l\'angle entre eux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut toujours utiliser la loi des sinus pour résoudre un triangle',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La loi des cosinus: a² = b² + c² - 2bc cos A',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Triangle: a = 6, A = 30°, B = 45°. Calcule b (loi des sinus). b ≈ ?',
        answer: '8,49',
        wrongAnswers: ['4,24', '12,73', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle: a = 7, b = 8, C = 60°. Calcule c (loi des cosinus). c ≈ ?',
        answer: '7,81',
        wrongAnswers: ['15', '1', '56']
      },
      {
        type: 'multiple_choice',
        question: 'La loi des sinus s\'écrit: a/sin A = ?',
        answer: 'b/sin B',
        wrongAnswers: ['c/sin C', 'sin B/b', 'a/sin B']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quand utiliser la loi des cosinus? Glisse la réponse:',
        answer: 'Quand on connaît 2 côtés et l\'angle entre eux',
        wordBank: ['Quand on connaît 2 côtés et l\'angle entre eux', 'Quand on connaît 1 côté et 1 angle', 'Quand on connaît 3 angles', 'Toujours'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building law of cosines)
      {
        type: 'drag_and_drop',
        question: 'Construis la loi des cosinus: a² = _____',
        answer: ['b²', '+', 'c²', '-', '2bc', 'cos', 'A'],
        wordBank: ['b²', '+', 'c²', '-', '2bc', 'cos', 'A', 'a²', 'sin', 'B'],
        mode: 'construct'
      }
    ]
  },

  'ch8-s4': {
    questions: [
      { question: "Les formules d'addition: cos(a+b) = cos a cos b - sin a sin b", answer: "vrai" },
      { question: "sin(a+b) = sin a cos b + cos a sin b", answer: "vrai" },
      { question: "cos(2a) = cos²a - sin²a", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule cos(30° + 60°)',
        answer: 'cos 90° = 0',
        wrongAnswers: ['cos 90° = 1', 'cos 90° = 1/2', 'cos 90° = √3/2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule cos(2 × 30°) = cos 60°',
        answer: 'cos 60° = 1/2',
        wrongAnswers: ['cos 60° = √3/2', 'cos 60° = 0', 'cos 60° = 1']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle formule utilise-t-on pour cos(2a)?',
        answer: 'cos(2a) = cos²a - sin²a',
        wrongAnswers: ['cos(2a) = 2cos a', 'cos(2a) = cos²a + sin²a', 'cos(2a) = sin²a - cos²a']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'cos(a+b) = cos a cos b - sin a sin b',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'sin(a+b) = sin a cos b + cos a sin b',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'cos(2a) = 2cos²a - 1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'sin(2a) = 2sin a',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule cos(45° + 45°). cos 90° = ?',
        answer: '0',
        wrongAnswers: ['1', '√2/2', '-1']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule cos(2 × 45°). cos 90° = ?',
        answer: '0',
        wrongAnswers: ['1', '√2/2', '-1']
      },
      {
        type: 'multiple_choice',
        question: 'cos(2a) peut aussi s\'écrire: cos(2a) = 2? - 1',
        answer: 'cos²a',
        wrongAnswers: ['sin²a', 'cosa', 'sina']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule cos(30° + 60°). Glisse la réponse:',
        answer: 'cos 90° = 0',
        wordBank: ['cos 90° = 0', 'cos 90° = 1', 'cos 90° = 1/2', 'cos 90° = √3/2'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building addition formula)
      {
        type: 'drag_and_drop',
        question: 'Construis: cos(a+b) = _____',
        answer: ['cos', 'a', 'cos', 'b', '-', 'sin', 'a', 'sin', 'b'],
        wordBank: ['cos', 'a', 'cos', 'b', '-', 'sin', 'a', 'sin', 'b', '+', 'tan'],
        mode: 'construct'
      }
    ]
  },

  'ch8-s5': {
    questions: [
      { question: "Les équations trigonométriques ont plusieurs solutions", answer: "vrai" },
      { question: "cos x = 1/2 a pour solutions x = ±π/3 + 2kπ", answer: "vrai" },
      { question: "Il faut considérer la périodicité", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: cos x = 1/2 (en radians)',
        answer: 'x = ±π/3 + 2kπ',
        wrongAnswers: ['x = π/3 seulement', 'x = ±π/6 + 2kπ', 'x = π/2 + 2kπ']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: sin x = √2/2 (en radians)',
        answer: 'x = π/4 + 2kπ ou x = 3π/4 + 2kπ',
        wrongAnswers: ['x = π/4 seulement', 'x = π/2 + 2kπ', 'x = ±π/4 + 2kπ']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les équations trigonométriques ont-elles plusieurs solutions?',
        answer: 'Les fonctions trigonométriques sont périodiques',
        wrongAnswers: ['Parce qu\'il y a plusieurs variables', 'Parce que les calculatrices sont imprecises', 'Parce que c\'est une convention']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'équation cos x = 1/2 a une seule solution',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'équation cos x = 1 a pour solution x = 2kπ',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les équations trigonométriques ont une infinité de solutions',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La périodicité des fonctions trigonométriques explique les solutions multiples',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: cos x = -1/2. Une solution est x = ? (en radians)',
        answer: '2π/3',
        wrongAnswers: ['π/3', 'π/2', 'π']
      },
      {
        type: 'multiple_choice',
        question: 'L\'équation cos x = 1 a pour solution x = ? + 2kπ',
        answer: '0',
        wrongAnswers: ['π', 'π/2', '2π']
      },
      {
        type: 'multiple_choice',
        question: 'La période de cos x et sin x est:',
        answer: '2π',
        wrongAnswers: ['π', 'π/2', '4π']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Résous: cos x = 1/2. Glisse une solution:',
        answer: 'x = π/3',
        wordBank: ['x = π/3', 'x = π/6', 'x = π/2', 'x = π'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building trigonometric equation solution)
      {
        type: 'drag_and_drop',
        question: 'Construis une solution de cos x = 1/2: x = _____ + 2kπ',
        answer: ['π/3'],
        wordBank: ['π/3', 'π/6', 'π/2', 'π'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 9: SUITES NUMÉRIQUES
  'ch9-s1': {
    questions: [
      { question: "Une suite est une liste ordonnée de nombres", answer: "vrai" },
      { question: "uₙ est le terme de rang n", answer: "vrai" },
      { question: "Une suite peut être définie par récurrence", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si uₙ = 2n + 1, calcule u₃',
        answer: 'u₃ = 7',
        wrongAnswers: ['u₃ = 5', 'u₃ = 9', 'u₃ = 8']
      },
      {
        type: 'multiple_choice',
        question: 'Si u₀ = 3 et uₙ₊₁ = 2uₙ, calcule u₂',
        answer: 'u₂ = 12',
        wrongAnswers: ['u₂ = 6', 'u₂ = 9', 'u₂ = 15']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une suite définie par récurrence?',
        answer: 'Une suite où chaque terme dépend du précédent',
        wrongAnswers: ['Une suite où tous les termes sont identiques', 'Une suite infinie', 'Une suite décroissante']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une suite est une fonction de ℕ dans ℝ',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'u₀ est toujours le premier terme d\'une suite',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une suite peut être définie par récurrence',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les suites sont infinies',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si uₙ = 3n - 1, calcule u₅. u₅ = ?',
        answer: '14',
        wrongAnswers: ['15', '12', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Si u₁ = 2 et uₙ₊₁ = uₙ + 3, calcule u₃. u₃ = ?',
        answer: '8',
        wrongAnswers: ['5', '11', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Le terme de rang n d\'une suite se note:',
        answer: 'uₙ',
        wrongAnswers: ['uₙ₊₁', 'u₁', 'u₀']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si uₙ = 4n + 1, calcule u₄. Glisse la réponse:',
        answer: 'u₄ = 17',
        wordBank: ['u₄ = 17', 'u₄ = 16', 'u₄ = 18', 'u₄ = 15'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building sequence term)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si uₙ = 5n - 2, alors u₃ = _____',
        answer: ['13'],
        wordBank: ['13', '11', '15', '10'],
        mode: 'construct'
      }
    ]
  },

  'ch9-s2': {
    questions: [
      { question: "Une suite arithmétique: uₙ₊₁ = uₙ + r", answer: "vrai" },
      { question: "uₙ = u₀ + nr pour une suite arithmétique", answer: "vrai" },
      { question: "r est la raison de la suite", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Suite arithmétique: u₀ = 5, r = 3. Calcule u₄',
        answer: 'u₄ = 17',
        wrongAnswers: ['u₄ = 12', 'u₄ = 14', 'u₄ = 20']
      },
      {
        type: 'multiple_choice',
        question: 'Si u₀ = 2, u₃ = 11, quelle est la raison?',
        answer: 'r = 3',
        wrongAnswers: ['r = 2', 'r = 4', 'r = 9/3']
      },
      {
        type: 'multiple_choice',
        question: 'Somme des 5 premiers termes si u₀ = 1, r = 2?',
        answer: 'S = 25',
        wrongAnswers: ['S = 15', 'S = 30', 'S = 20']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans une suite arithmétique, uₙ₊₁ = uₙ + r',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour une suite arithmétique, uₙ = u₀ + nr',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si r > 0, la suite arithmétique est décroissante',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La raison d\'une suite arithmétique peut être négative',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Suite arithmétique: u₀ = 7, r = 4. Calcule u₃. u₃ = ?',
        answer: '19',
        wrongAnswers: ['11', '15', '23']
      },
      {
        type: 'multiple_choice',
        question: 'Si u₁ = 3, u₄ = 12, la raison r = ?',
        answer: '3',
        wrongAnswers: ['4', '9', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Dans une suite arithmétique, la différence entre deux termes consécutifs est la:',
        answer: 'raison',
        wrongAnswers: ['somme', 'produit', 'quotient']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Suite arithmétique: u₀ = 6, r = 2. Calcule u₅. Glisse la réponse:',
        answer: 'u₅ = 16',
        wordBank: ['u₅ = 16', 'u₅ = 14', 'u₅ = 18', 'u₅ = 12'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building arithmetic sequence)
      {
        type: 'drag_and_drop',
        question: 'Construis: Suite arithmétique u₀ = 4, r = 3, alors u₂ = _____',
        answer: ['10'],
        wordBank: ['10', '7', '13', '9'],
        mode: 'construct'
      }
    ]
  },

  'ch9-s3': {
    questions: [
      { question: "Une suite géométrique: uₙ₊₁ = uₙ × q", answer: "vrai" },
      { question: "uₙ = u₀ × qⁿ pour une suite géométrique", answer: "vrai" },
      { question: "q est la raison de la suite", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Suite géométrique: u₀ = 2, q = 3. Calcule u₄',
        answer: 'u₄ = 162',
        wrongAnswers: ['u₄ = 54', 'u₄ = 486', 'u₄ = 24']
      },
      {
        type: 'multiple_choice',
        question: 'Si u₀ = 5, u₃ = 40, quelle est la raison?',
        answer: 'q = 2',
        wrongAnswers: ['q = 3', 'q = 4', 'q = 8']
      },
      {
        type: 'multiple_choice',
        question: 'Somme des 4 premiers termes si u₀ = 1, q = 2?',
        answer: 'S = 15',
        wrongAnswers: ['S = 7', 'S = 14', 'S = 16']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans une suite géométrique, uₙ₊₁ = uₙ × q',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour une suite géométrique, uₙ = u₀ × qⁿ',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si q > 1, la suite géométrique est décroissante',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La raison q d\'une suite géométrique peut être négative',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Suite géométrique: u₀ = 3, q = 2. Calcule u₄. u₄ = ?',
        answer: '48',
        wrongAnswers: ['24', '12', '96']
      },
      {
        type: 'multiple_choice',
        question: 'Si u₁ = 4, u₄ = 32, la raison q = ?',
        answer: '2',
        wrongAnswers: ['4', '8', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Dans une suite géométrique, le rapport entre deux termes consécutifs est la:',
        answer: 'raison',
        wrongAnswers: ['différence', 'somme', 'produit']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Suite géométrique: u₀ = 5, q = 3. Calcule u₃. Glisse la réponse:',
        answer: 'u₃ = 135',
        wordBank: ['u₃ = 135', 'u₃ = 45', 'u₃ = 405', 'u₃ = 15'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building geometric sequence)
      {
        type: 'drag_and_drop',
        question: 'Construis: Suite géométrique u₀ = 2, q = 4, alors u₂ = _____',
        answer: ['32'],
        wordBank: ['32', '8', '16', '64'],
        mode: 'construct'
      }
    ]
  },

  'ch9-s4': {
    questions: [
      { question: "Une suite est croissante si uₙ₊₁ > uₙ", answer: "vrai" },
      { question: "Une suite est décroissante si uₙ₊₁ < uₙ", answer: "vrai" },
      { question: "Une suite peut être monotone", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'uₙ = 2n + 1 est-elle croissante?',
        answer: 'Oui (uₙ₊₁ - uₙ = 2 > 0)',
        wrongAnswers: ['Non, elle est décroissante', 'Non, elle est constante', 'On ne peut pas savoir']
      },
      {
        type: 'multiple_choice',
        question: 'uₙ = 1/n est-elle décroissante?',
        answer: 'Oui (1/(n+1) < 1/n)',
        wrongAnswers: ['Non, elle est croissante', 'Non, elle est constante', 'On ne peut pas savoir']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une suite monotone?',
        answer: 'Une suite qui est soit croissante, soit décroissante',
        wrongAnswers: ['Une suite constante', 'Une suite périodique', 'Une suite divergente']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Toute suite arithmétique avec r > 0 est croissante',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une suite croissante vérifie uₙ₊₁ > uₙ',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La suite uₙ = (-1)ⁿ est monotone',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une suite constante est à la fois croissante et décroissante',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si uₙ₊₁ > uₙ pour tout n, alors la suite est:',
        answer: 'croissante',
        wrongAnswers: ['décroissante', 'constante', 'monotone']
      },
      {
        type: 'multiple_choice',
        question: 'Si uₙ₊₁ < uₙ pour tout n, alors la suite est:',
        answer: 'décroissante',
        wrongAnswers: ['croissante', 'constante', 'monotone']
      },
      {
        type: 'multiple_choice',
        question: 'Une suite arithmétique avec r < 0 est:',
        answer: 'décroissante',
        wrongAnswers: ['croissante', 'constante', 'monotone']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'uₙ = 3n - 5 est-elle croissante? Glisse la réponse:',
        answer: 'Oui, croissante',
        wordBank: ['Oui, croissante', 'Non, décroissante', 'Non, constante', 'On ne peut pas savoir'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building monotony characterization)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si uₙ₊₁ - uₙ > 0, alors la suite est _____',
        answer: ['croissante'],
        wordBank: ['croissante', 'décroissante', 'constante', 'monotone'],
        mode: 'construct'
      }
    ]
  },

  'ch9-s5': {
    questions: [
      { question: "Une suite converge si elle a une limite finie", answer: "vrai" },
      { question: "lim(n→∞) 1/n = 0", answer: "vrai" },
      { question: "Une suite peut diverger vers +∞", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la limite de uₙ = 1/n?',
        answer: 'lim = 0',
        wrongAnswers: ['lim = 1', 'lim = +∞', 'N\'existe pas']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la limite de uₙ = 2n + 1?',
        answer: 'lim = +∞',
        wrongAnswers: ['lim = 0', 'lim = 2', 'N\'existe pas']
      },
      {
        type: 'multiple_choice',
        question: 'uₙ = (n+1)/n converge-t-elle?',
        answer: 'Oui, vers 1',
        wrongAnswers: ['Non, elle diverge', 'Oui, vers 0', 'Oui, vers +∞']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une suite qui converge a une limite finie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La suite uₙ = n² converge vers +∞',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'lim(n→∞) 1/n = 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toute suite bornée converge',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'lim(n→∞) 1/n = ?',
        answer: '0',
        wrongAnswers: ['1', '∞', '-∞']
      },
      {
        type: 'multiple_choice',
        question: 'lim(n→∞) n = ?',
        answer: '+∞',
        wrongAnswers: ['0', '1', '-∞']
      },
      {
        type: 'multiple_choice',
        question: 'Si lim(n→∞) uₙ = L (fini), alors la suite:',
        answer: 'converge',
        wrongAnswers: ['diverge', 'oscille', 'tend vers ∞']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la limite de uₙ = 1/n²? Glisse la réponse:',
        answer: 'lim = 0',
        wordBank: ['lim = 0', 'lim = 1', 'lim = +∞', 'N\'existe pas'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building limit)
      {
        type: 'drag_and_drop',
        question: 'Construis: lim(n→∞) (n+2)/n = _____',
        answer: ['1'],
        wordBank: ['1', '0', '+∞', '2'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 10: LIMITES ET CONTINUITÉ
  'ch10-s1': {
    questions: [
      { question: "lim(x→a) f(x) = L signifie f(x) tend vers L", answer: "vrai" },
      { question: "La limite peut exister même si f(a) n'existe pas", answer: "vrai" },
      { question: "lim(x→0) sin x / x = 1", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: lim(x→2) (x² - 4)/(x - 2)',
        answer: 'lim = 4',
        wrongAnswers: ['lim = 0', 'lim = 2', 'N\'existe pas']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: lim(x→0) sin x / x',
        answer: 'lim = 1',
        wrongAnswers: ['lim = 0', 'lim = +∞', 'N\'existe pas']
      },
      {
        type: 'multiple_choice',
        question: 'Que signifie lim(x→a) f(x) = L?',
        answer: 'f(x) tend vers L quand x tend vers a',
        wrongAnswers: ['f(x) = L pour tout x', 'f(a) = L', 'La fonction est constante']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La limite peut exister même si f(a) n\'existe pas',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'lim(x→0) sin x / x = 0',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Si lim(x→a) f(x) existe, alors f est continue en a',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'lim(x→0) sin x / x = 1',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: lim(x→3) (x² - 9)/(x - 3). lim = ?',
        answer: '6',
        wrongAnswers: ['0', '3', '9']
      },
      {
        type: 'multiple_choice',
        question: 'lim(x→0) sin x / x = ?',
        answer: '1',
        wrongAnswers: ['0', '∞', 'indéfini']
      },
      {
        type: 'multiple_choice',
        question: 'Si lim(x→a) f(x) = L et f(a) = L, alors f est _____ en a',
        answer: 'continue',
        wrongAnswers: ['discontinue', 'dérivable', 'croissante']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: lim(x→1) (x² - 1)/(x - 1). Glisse la réponse:',
        answer: 'lim = 2',
        wordBank: ['lim = 2', 'lim = 0', 'lim = 1', 'N\'existe pas'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building limit)
      {
        type: 'drag_and_drop',
        question: 'Construis: lim(x→0) sin x / x = _____',
        answer: ['1'],
        wordBank: ['1', '0', '+∞', 'sin'],
        mode: 'construct'
      }
    ]
  },

  'ch10-s2': {
    questions: [
      { question: "lim(x→+∞) 1/x = 0", answer: "vrai" },
      { question: "lim(x→+∞) x² = +∞", answer: "vrai" },
      { question: "Les formes indéterminées nécessitent des techniques spéciales", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: lim(x→+∞) 1/x',
        answer: '0',
        wrongAnswers: ['1', '+∞', 'N\'existe pas']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: lim(x→+∞) x²',
        answer: '+∞',
        wrongAnswers: ['0', '1', 'N\'existe pas']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la forme indéterminée ∞ - ∞?',
        answer: 'Forme indéterminée (nécessite transformation)',
        wrongAnswers: ['0', '+∞', '-∞']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'lim(x→+∞) 1/x = 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'lim(x→+∞) x² = 0',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les formes indéterminées nécessitent des techniques spéciales',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'lim(x→+∞) x = 0',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'lim(x→+∞) 1/x² = ?',
        answer: '0',
        wrongAnswers: ['1', '∞', '-∞']
      },
      {
        type: 'multiple_choice',
        question: 'lim(x→+∞) x³ = ?',
        answer: '+∞',
        wrongAnswers: ['0', '1', '-∞']
      },
      {
        type: 'multiple_choice',
        question: 'Les formes indéterminées communes sont: 0/0, ∞/∞, ?',
        answer: '∞ - ∞',
        wrongAnswers: ['0 × ∞', '1^∞', '∞/0']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: lim(x→+∞) 1/x³. Glisse la réponse:',
        answer: '0',
        wordBank: ['0', '1', '+∞', 'N\'existe pas'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building infinite limit)
      {
        type: 'drag_and_drop',
        question: 'Construis: lim(x→+∞) x⁴ = _____',
        answer: ['+∞'],
        wordBank: ['+∞', '0', '1', '-∞'],
        mode: 'construct'
      }
    ]
  },

  'ch10-s3': {
    questions: [
      { question: "Une fonction est continue si lim(x→a) f(x) = f(a)", answer: "vrai" },
      { question: "Les fonctions polynomiales sont continues", answer: "vrai" },
      { question: "Une discontinuité est un saut", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'f(x) = x² est-elle continue en x = 2?',
        answer: 'Oui (lim = f(2) = 4)',
        wrongAnswers: ['Non, discontinue', 'On ne peut pas savoir', 'Seulement à droite']
      },
      {
        type: 'multiple_choice',
        question: 'Où f(x) = 1/x est-elle discontinue?',
        answer: 'En x = 0',
        wrongAnswers: ['En x = 1', 'Nulle part', 'En tout point']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle condition définit la continuité en un point?',
        answer: 'lim(x→a) f(x) = f(a)',
        wrongAnswers: ['f(a) existe', 'La limite existe', 'f est dérivable']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Toute fonction continue est dérivable',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les fonctions polynomiales sont continues',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une discontinuité est toujours un saut',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une fonction est continue si lim(x→a) f(x) = f(a)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'f(x) = x³ est-elle continue en x = 1?',
        answer: 'Oui',
        wrongAnswers: ['Non', 'Parfois', 'Indéfini']
      },
      {
        type: 'multiple_choice',
        question: 'Où f(x) = 1/(x-3) est-elle discontinue? En x = ?',
        answer: '3',
        wrongAnswers: ['0', '1', '-3']
      },
      {
        type: 'multiple_choice',
        question: 'Pour qu\'une fonction soit continue en a, il faut que lim(x→a) f(x) = ?',
        answer: 'f(a)',
        wrongAnswers: ['0', '∞', 'a']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Où f(x) = 1/(x-5) est-elle discontinue? Glisse la réponse:',
        answer: 'En x = 5',
        wordBank: ['En x = 5', 'En x = 0', 'Nulle part', 'En tout point'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building continuity condition)
      {
        type: 'drag_and_drop',
        question: 'Construis: Une fonction est continue en a si lim(x→a) f(x) = _____',
        answer: ['f(a)'],
        wordBank: ['f(a)', '0', '1', 'a'],
        mode: 'construct'
      }
    ]
  },

  'ch10-s4': {
    questions: [
      { question: "Le théorème des valeurs intermédiaires s'applique aux fonctions continues", answer: "vrai" },
      { question: "Si f continue et f(a) < 0 < f(b), il existe c tel que f(c) = 0", answer: "vrai" },
      { question: "Ce théorème permet de trouver des racines", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Que dit le théorème des valeurs intermédiaires?',
        answer: 'Fonction continue prend toutes valeurs entre f(a) et f(b)',
        wrongAnswers: ['Toute fonction a une racine', 'Les fonctions continues sont dérivables', 'Toute limite existe']
      },
      {
        type: 'multiple_choice',
        question: 'Si f(0) = -1 et f(2) = 3, que peut-on dire?',
        answer: 'Il existe c tel que f(c) = 0',
        wrongAnswers: ['f est décroissante', 'f n\'a pas de racine', 'On ne peut rien dire']
      },
      {
        type: 'multiple_choice',
        question: 'Le théorème des valeurs intermédiaires s\'applique à:',
        answer: 'Les fonctions continues',
        wrongAnswers: ['Toutes les fonctions', 'Les fonctions dérivables uniquement', 'Les fonctions constantes uniquement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le théorème des valeurs intermédiaires s\'applique aux fonctions continues',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si f(a) < 0 < f(b) et f continue, il existe c tel que f(c) = 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le théorème garantit toujours une solution unique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Ce théorème permet de trouver des racines',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si f(-1) = 2 et f(1) = -2 et f continue, il existe c tel que f(c) = ?',
        answer: '0',
        wrongAnswers: ['1', '-1', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Le théorème des valeurs intermédiaires s\'applique aux fonctions:',
        answer: 'continues',
        wrongAnswers: ['dérivables', 'croissantes', 'décroissantes']
      },
      {
        type: 'multiple_choice',
        question: 'Si f(a) = 3 et f(b) = 7 et f continue, alors f prend toutes valeurs entre ? et ?',
        answer: '3, 7',
        wrongAnswers: ['0, 3', '7, 10', '0, 7']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si f(1) = -3 et f(3) = 5 et f continue, que peut-on dire? Glisse la réponse:',
        answer: 'Il existe c tel que f(c) = 0',
        wordBank: ['Il existe c tel que f(c) = 0', 'f n\'a pas de racine', 'f est décroissante', 'On ne peut rien dire'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building intermediate value theorem)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si f continue et f(a) < 0 < f(b), alors il existe c tel que f(c) = _____',
        answer: ['0'],
        wordBank: ['0', '1', 'a', 'b'],
        mode: 'construct'
      }
    ]
  },

  'ch10-s5': {
    questions: [
      { question: "Les asymptotes sont des droites limites", answer: "vrai" },
      { question: "f(x) = 1/x a une asymptote verticale en x = 0", answer: "vrai" },
      { question: "f(x) = 1/x a une asymptote horizontale y = 0", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'asymptote verticale de f(x) = 1/(x-2)?',
        answer: 'x = 2',
        wrongAnswers: ['x = 0', 'y = 2', 'y = 0']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'asymptote horizontale de f(x) = 1/x?',
        answer: 'y = 0',
        wrongAnswers: ['y = 1', 'x = 0', 'y = x']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une asymptote?',
        answer: 'Une droite limite que la courbe approche sans jamais l\'atteindre',
        wrongAnswers: ['Une droite qui coupe la courbe', 'Une droite parallèle aux axes', 'Une droite passant par l\'origine']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'f(x) = 1/x a une asymptote verticale en x = 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'f(x) = 1/x a une asymptote horizontale y = 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une fonction peut avoir plusieurs asymptotes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les fonctions ont des asymptotes',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'asymptote verticale de f(x) = 1/(x+3)? x = ?',
        answer: '-3',
        wrongAnswers: ['3', '0', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'asymptote horizontale de f(x) = 1/x²? y = ?',
        answer: '0',
        wrongAnswers: ['1', '∞', '-∞']
      },
      {
        type: 'multiple_choice',
        question: 'Les asymptotes sont des droites _____ que la courbe approche',
        answer: 'limites',
        wrongAnswers: ['tangentes', 'sécantes', 'parallèles']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'asymptote verticale de f(x) = 1/(x-4)? Glisse la réponse:',
        answer: 'x = 4',
        wordBank: ['x = 4', 'x = 0', 'y = 4', 'y = 0'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building asymptote)
      {
        type: 'drag_and_drop',
        question: 'Construis: f(x) = 1/x a une asymptote horizontale y = _____',
        answer: ['0'],
        wordBank: ['0', '1', 'x', '∞'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 11: DÉRIVATION
  'ch11-s1': {
    questions: [
      { question: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h", answer: "vrai" },
      { question: "La dérivée mesure le taux de variation", answer: "vrai" },
      { question: "f'(x) est la pente de la tangente", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f\'(x) si f(x) = x²',
        answer: 'f\'(x) = 2x',
        wrongAnswers: ['f\'(x) = x', 'f\'(x) = x²', 'f\'(x) = 2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule f\'(x) si f(x) = 3x + 2',
        answer: 'f\'(x) = 3',
        wrongAnswers: ['f\'(x) = 3x', 'f\'(x) = 5', 'f\'(x) = 2']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la pente de la tangente à f(x) = x² en x = 3?',
        answer: 'f\'(3) = 6',
        wrongAnswers: ['f\'(3) = 3', 'f\'(3) = 9', 'f\'(3) = 0']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La dérivée mesure le taux de variation',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'f\'(x) est la pente de la tangente à la courbe en x',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toute fonction a une dérivée',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f\'(x) si f(x) = 5x + 3. f\'(x) = ?',
        answer: '5',
        wrongAnswers: ['3', '8', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule f\'(4) si f(x) = x². f\'(4) = ?',
        answer: '8',
        wrongAnswers: ['4', '16', '2']
      },
      {
        type: 'multiple_choice',
        question: 'La dérivée mesure le _____ de variation',
        answer: 'taux',
        wrongAnswers: ['sens', 'direction', 'amplitude']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule f\'(x) si f(x) = 4x. Glisse la réponse:',
        answer: 'f\'(x) = 4',
        wordBank: ['f\'(x) = 4', 'f\'(x) = 4x', 'f\'(x) = 0', 'f\'(x) = 1'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building derivative)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si f(x) = 6x + 5, alors f\'(x) = _____',
        answer: ['6'],
        wordBank: ['6', '5', '11', '0'],
        mode: 'construct'
      }
    ]
  },

  'ch11-s2': {
    questions: [
      { question: "(u + v)' = u' + v'", answer: "vrai" },
      { question: "(uv)' = u'v + uv'", answer: "vrai" },
      { question: "(u/v)' = (u'v - uv')/v²", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la dérivée de f(x) = x² + 3x',
        answer: 'f\'(x) = 2x + 3',
        wrongAnswers: ['f\'(x) = 5x', 'f\'(x) = x² + 3', 'f\'(x) = 2x']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la dérivée de f(x) = x(x+1)',
        answer: 'f\'(x) = 2x + 1',
        wrongAnswers: ['f\'(x) = 1', 'f\'(x) = x + 1', 'f\'(x) = x²']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la dérivée de f(x) = x/(x+1)',
        answer: 'f\'(x) = 1/(x+1)²',
        wrongAnswers: ['f\'(x) = 1/(x+1)', 'f\'(x) = 1/x', 'f\'(x) = x/(x+1)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '(u + v)\' = u\' + v\'',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(uv)\' = u\'v\'',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '(u/v)\' = (u\'v - uv\')/v²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(uv)\' = u\'v + uv\'',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la dérivée de f(x) = x³ + 2x. f\'(x) = ?',
        answer: '3x² + 2',
        wrongAnswers: ['3x²', 'x² + 2', '3x + 2']
      },
      {
        type: 'multiple_choice',
        question: 'La dérivée d\'un produit: (uv)\' = ?',
        answer: 'u\'v + uv\'',
        wrongAnswers: ['u\'v\'', 'uv', 'u\' + v\'']
      },
      {
        type: 'multiple_choice',
        question: 'La dérivée d\'un quotient: (u/v)\' = ?',
        answer: '(u\'v - uv\')/v²',
        wrongAnswers: ['(u\'v + uv\')/v²', 'u\'/v\'', '(u\' - v\')/v²']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la dérivée de f(x) = 2x² + 5x. Glisse la réponse:',
        answer: 'f\'(x) = 4x + 5',
        wordBank: ['f\'(x) = 4x + 5', 'f\'(x) = 2x + 5', 'f\'(x) = 4x', 'f\'(x) = 7x'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building derivative rules)
      {
        type: 'drag_and_drop',
        question: 'Construis: (u + v)\' = _____',
        answer: ['u\'', '+', 'v\''],
        wordBank: ['u\'', '+', 'v\'', '-', '×', 'uv\''],
        mode: 'construct'
      }
    ]
  },

  'ch11-s3': {
    questions: [
      { question: "(xⁿ)' = nxⁿ⁻¹", answer: "vrai" },
      { question: "(sin x)' = cos x", answer: "vrai" },
      { question: "(cos x)' = -sin x", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la dérivée de f(x) = x⁵',
        answer: 'f\'(x) = 5x⁴',
        wrongAnswers: ['f\'(x) = x⁴', 'f\'(x) = 5x⁵', 'f\'(x) = 5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la dérivée de f(x) = sin x',
        answer: 'f\'(x) = cos x',
        wrongAnswers: ['f\'(x) = -sin x', 'f\'(x) = -cos x', 'f\'(x) = sin x']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la dérivée de f(x) = cos x',
        answer: 'f\'(x) = -sin x',
        wrongAnswers: ['f\'(x) = sin x', 'f\'(x) = cos x', 'f\'(x) = -cos x']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '(xⁿ)\' = nxⁿ⁻¹',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(sin x)\' = cos x',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(cos x)\' = sin x',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '(cos x)\' = -sin x',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la dérivée de f(x) = x⁶. f\'(x) = ?',
        answer: '6x⁵',
        wrongAnswers: ['6x⁶', 'x⁵', '5x⁶']
      },
      {
        type: 'multiple_choice',
        question: 'La dérivée de sin x est:',
        answer: 'cos x',
        wrongAnswers: ['-cos x', 'sin x', '-sin x']
      },
      {
        type: 'multiple_choice',
        question: 'La dérivée de cos x est:',
        answer: '-sin x',
        wrongAnswers: ['sin x', 'cos x', '-cos x']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la dérivée de f(x) = x⁴. Glisse la réponse:',
        answer: 'f\'(x) = 4x³',
        wordBank: ['f\'(x) = 4x³', 'f\'(x) = x³', 'f\'(x) = 4x⁴', 'f\'(x) = 4'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building power rule derivative)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si f(x) = x³, alors f\'(x) = _____',
        answer: ['3x²'],
        wordBank: ['3x²', 'x²', '3x', 'x³'],
        mode: 'construct'
      }
    ]
  },

  'ch11-s4': {
    questions: [
      { question: "Si f'(x) > 0, f est croissante", answer: "vrai" },
      { question: "Si f'(x) < 0, f est décroissante", answer: "vrai" },
      { question: "Si f'(x) = 0, possible extremum", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si f\'(x) = 2x, où f est-elle croissante?',
        answer: 'Sur [0, +∞[',
        wrongAnswers: ['Sur ]-∞, 0]', 'Sur ]-∞, +∞[', 'Nulle part']
      },
      {
        type: 'multiple_choice',
        question: 'Si f\'(x) = 0 en x = 2, que peut-on dire?',
        answer: 'Possible extremum en x = 2',
        wrongAnswers: ['f a toujours un extremum', 'f n\'a jamais d\'extremum', 'On ne peut rien dire']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'indique f\'(x) > 0?',
        answer: 'f est croissante',
        wrongAnswers: ['f est décroissante', 'f a un extremum', 'f est constante']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Si f\'(x) > 0, alors f est croissante',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si f\'(x) < 0, alors f est décroissante',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si f\'(x) = 0, alors f a toujours un extremum',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un extremum correspond à f\'(x) = 0 (condition nécessaire)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si f\'(x) > 0, alors f est:',
        answer: 'croissante',
        wrongAnswers: ['décroissante', 'constante', 'convexe']
      },
      {
        type: 'multiple_choice',
        question: 'Si f\'(x) < 0, alors f est:',
        answer: 'décroissante',
        wrongAnswers: ['croissante', 'constante', 'concave']
      },
      {
        type: 'multiple_choice',
        question: 'Si f\'(x) = 0 en x = a, alors il y a un possible _____ en a',
        answer: 'extremum',
        wrongAnswers: ['point d\'inflexion', 'asymptote', 'discontinuité']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si f\'(x) = -2x, où f est-elle décroissante? Glisse la réponse:',
        answer: 'Sur [0, +∞[',
        wordBank: ['Sur [0, +∞[', 'Sur ]-∞, 0]', 'Sur ]-∞, +∞[', 'Nulle part'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building monotony)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si f\'(x) > 0, alors f est _____',
        answer: ['croissante'],
        wordBank: ['croissante', 'décroissante', 'constante', 'discontinue'],
        mode: 'construct'
      }
    ]
  },

  'ch11-s5': {
    questions: [
      { question: "f''(x) est la dérivée seconde", answer: "vrai" },
      { question: "Si f''(x) > 0, f est convexe", answer: "vrai" },
      { question: "Un point d'inflexion vérifie f''(x) = 0", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f\'\'(x) si f(x) = x³',
        answer: 'f\'\'(x) = 6x',
        wrongAnswers: ['f\'\'(x) = 3x²', 'f\'\'(x) = 6', 'f\'\'(x) = x³']
      },
      {
        type: 'multiple_choice',
        question: 'Si f\'\'(x) > 0, que peut-on dire?',
        answer: 'f est convexe',
        wrongAnswers: ['f est concave', 'f est décroissante', 'f a un extremum']
      },
      {
        type: 'multiple_choice',
        question: 'Où f(x) = x³ a-t-elle un point d\'inflexion?',
        answer: 'En x = 0 (f\'\'(0) = 0)',
        wrongAnswers: ['En x = 1', 'N\'a pas de point d\'inflexion', 'En x = -1']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'f\'\'(x) est la dérivée seconde de f',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si f\'\'(x) > 0, alors f est convexe',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un point d\'inflexion vérifie toujours f\'\'(x) = 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si f\'\'(x) < 0, alors f est convexe',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f\'\'(x) si f(x) = x⁴. f\'\'(x) = ?',
        answer: '12x²',
        wrongAnswers: ['4x³', '24x', 'x²']
      },
      {
        type: 'multiple_choice',
        question: 'Si f\'\'(x) > 0, alors f est:',
        answer: 'convexe',
        wrongAnswers: ['concave', 'croissante', 'décroissante']
      },
      {
        type: 'multiple_choice',
        question: 'Un point d\'inflexion vérifie f\'\'(x) = ?',
        answer: '0',
        wrongAnswers: ['1', '∞', 'f\'(x)']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si f\'\'(x) < 0, alors f est _____',
        answer: 'concave',
        wordBank: ['concave', 'convexe', 'croissante', 'décroissante'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building second derivative)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si f(x) = x², alors f\'\'(x) = _____',
        answer: ['2'],
        wordBank: ['2', '2x', 'x²', '0'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 12: INTÉGRATION
  'ch12-s1': {
    questions: [
      { question: "L'intégrale mesure l'aire sous la courbe", answer: "vrai" },
      { question: "∫f(x)dx est une primitive de f", answer: "vrai" },
      { question: "F'(x) = f(x) si F est primitive de f", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Trouve une primitive de f(x) = 2x',
        answer: 'F(x) = x² + C',
        wrongAnswers: ['F(x) = x + C', 'F(x) = 2x² + C', 'F(x) = x²']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve une primitive de f(x) = x³',
        answer: 'F(x) = x⁴/4 + C',
        wrongAnswers: ['F(x) = x⁴ + C', 'F(x) = 3x² + C', 'F(x) = x³/3 + C']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une primitive de f?',
        answer: 'Une fonction F telle que F\'(x) = f(x)',
        wrongAnswers: ['Une fonction F telle que F(x) = f(x)', 'L\'inverse de f', 'La dérivée de f']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'intégrale mesure l\'aire sous la courbe',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'F(x) = x² est primitive de f(x) = 2x',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toute fonction a une primitive unique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'F\'(x) = f(x) si F est primitive de f',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Trouve une primitive de f(x) = 4x. F(x) = ?',
        answer: '2x² + C',
        wrongAnswers: ['4x² + C', 'x² + C', '4x + C']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve une primitive de f(x) = x². F(x) = ?',
        answer: 'x³/3 + C',
        wrongAnswers: ['x³ + C', '2x + C', 'x²/2 + C']
      },
      {
        type: 'multiple_choice',
        question: 'Si F est primitive de f, alors F\'(x) = ?',
        answer: 'f(x)',
        wrongAnswers: ['F(x)', 'f\'(x)', '0']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Trouve une primitive de f(x) = 3x². Glisse la réponse:',
        answer: 'F(x) = x³ + C',
        wordBank: ['F(x) = x³ + C', 'F(x) = 3x + C', 'F(x) = x² + C', 'F(x) = 3x³ + C'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building primitive)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si f(x) = 5x, alors F(x) = _____ + C',
        answer: ['5x²/2'],
        wordBank: ['5x²/2', '5x', '5x²', 'x'],
        mode: 'construct'
      }
    ]
  },

  'ch12-s2': {
    questions: [
      { question: "∫[a,b] f(x)dx = F(b) - F(a)", answer: "vrai" },
      { question: "F est une primitive de f", answer: "vrai" },
      { question: "C'est le théorème fondamental", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule ∫[0,2] 2x dx',
        answer: '4',
        wrongAnswers: ['2', '8', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ∫[1,3] x² dx',
        answer: '26/3',
        wrongAnswers: ['8', '10', '9']
      },
      {
        type: 'multiple_choice',
        question: 'Que représente ∫[a,b] f(x)dx?',
        answer: 'Aire sous la courbe entre a et b',
        wrongAnswers: ['Longueur de la courbe', 'Volume du solide', 'Pente de la tangente']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '∫[a,b] f(x)dx = F(b) - F(a) où F est primitive de f',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le théorème fondamental permet de calculer des intégrales',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '∫[a,a] f(x)dx = f(a)',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'intégrale d\'une fonction positive est toujours positive',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule ∫[0,3] 3x dx. Réponse: ?',
        answer: '27/2',
        wrongAnswers: ['9', '27', '13.5']
      },
      {
        type: 'multiple_choice',
        question: '∫[a,a] f(x)dx = ?',
        answer: '0',
        wrongAnswers: ['f(a)', '1', '∞']
      },
      {
        type: 'multiple_choice',
        question: 'Selon le théorème fondamental: ∫[a,b] f(x)dx = ?',
        answer: 'F(b) - F(a)',
        wrongAnswers: ['F(a) - F(b)', 'F(b) + F(a)', 'F\'(b) - F\'(a)']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule ∫[0,1] x dx. Glisse la réponse:',
        answer: '1/2',
        wordBank: ['1/2', '1', '0', '2'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building definite integral)
      {
        type: 'drag_and_drop',
        question: 'Construis: ∫[0,2] 4x dx = _____',
        answer: ['8'],
        wordBank: ['8', '4', '16', '2'],
        mode: 'construct'
      }
    ]
  },

  'ch12-s3': {
    questions: [
      { question: "∫(u + v)dx = ∫u dx + ∫v dx", answer: "vrai" },
      { question: "∫kf(x)dx = k∫f(x)dx", answer: "vrai" },
      { question: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule ∫(x² + 3x) dx',
        answer: 'x³/3 + 3x²/2 + C',
        wrongAnswers: ['x³ + 3x² + C', '2x + 3 + C', 'x²/2 + 3x + C']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ∫5x² dx',
        answer: '5x³/3 + C',
        wrongAnswers: ['5x³ + C', '10x + C', '5x² + C']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ∫x⁴ dx',
        answer: 'x⁵/5 + C',
        wrongAnswers: ['x⁵ + C', '4x³ + C', 'x⁴ + C']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '∫(u + v)dx = ∫u dx + ∫v dx',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '∫kf(x)dx = k∫f(x)dx',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C pour tout n',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule ∫(2x + 5) dx. Réponse: ?',
        answer: 'x² + 5x + C',
        wrongAnswers: ['2x² + 5x + C', 'x² + 5 + C', '2x + 5 + C']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ∫3x³ dx. Réponse: ?',
        answer: '3x⁴/4 + C',
        wrongAnswers: ['x⁴ + C', '3x⁴ + C', 'x³ + C']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ∫x⁶ dx. Réponse: ?',
        answer: 'x⁷/7 + C',
        wrongAnswers: ['6x⁵ + C', 'x⁶ + C', 'x⁷ + C']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule ∫(x³ + 2x) dx. Glisse la réponse:',
        answer: 'x⁴/4 + x² + C',
        wordBank: ['x⁴/4 + x² + C', 'x⁴ + 2x² + C', '3x² + 2 + C', 'x³ + 2x + C'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building integral)
      {
        type: 'drag_and_drop',
        question: 'Construis: ∫x⁵ dx = _____ + C',
        answer: ['x⁶/6'],
        wordBank: ['x⁶/6', 'x⁶', '5x⁴', 'x⁵'],
        mode: 'construct'
      }
    ]
  },

  'ch12-s4': {
    questions: [
      { question: "L'intégration par parties: ∫u dv = uv - ∫v du", answer: "vrai" },
      { question: "Le changement de variable simplifie certaines intégrales", answer: "vrai" },
      { question: "Il faut choisir u et dv judicieusement", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule d\'intégration par parties?',
        answer: '∫u dv = uv - ∫v du',
        wrongAnswers: ['∫u dv = u + v', '∫u dv = uv', '∫u dv = u/v']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ∫2x(x²+1)³ dx par changement u = x²+1',
        answer: '(x²+1)⁴/4 + C',
        wrongAnswers: ['(x²+1)⁴ + C', '2(x²+1)³ + C', 'x²(x²+1)³ + C']
      },
      {
        type: 'multiple_choice',
        question: 'Quand utiliser l\'intégration par parties?',
        answer: 'Pour intégrer un produit de fonctions',
        wrongAnswers: ['Pour toute intégrale', 'Pour les fractions uniquement', 'Pour les fonctions polynomiales uniquement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'intégration par parties est utile pour ∫x eˣ dx',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le changement de variable simplifie certaines intégrales',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'intégration par parties: ∫u dv = uv + ∫v du',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Il faut choisir u et dv judicieusement',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'intégration par parties: ∫u dv = ?',
        answer: 'uv - ∫v du',
        wrongAnswers: ['uv + ∫v du', 'u\'v - uv\'', 'uv']
      },
      {
        type: 'multiple_choice',
        question: 'Pour utiliser le changement de variable, on pose:',
        answer: 'u = ...',
        wrongAnswers: ['v = ...', 'x = ...', 'f = ...']
      },
      {
        type: 'multiple_choice',
        question: 'L\'intégration par parties est utile pour intégrer un _____ de fonctions',
        answer: 'produit',
        wrongAnswers: ['quotient', 'somme', 'composée']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la formule d\'intégration par parties? Glisse la réponse:',
        answer: '∫u dv = uv - ∫v du',
        wordBank: ['∫u dv = uv - ∫v du', '∫u dv = u + v', '∫u dv = uv', '∫u dv = u/v'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building integration by parts)
      {
        type: 'drag_and_drop',
        question: 'Construis: ∫u dv = _____ - ∫v du',
        answer: ['uv'],
        wordBank: ['uv', 'u', 'v', 'u+v'],
        mode: 'construct'
      }
    ]
  },

  'ch12-s5': {
    questions: [
      { question: "L'aire entre deux courbes = ∫[a,b] (f - g)dx", answer: "vrai" },
      { question: "Le volume de révolution = π∫[a,b] f²(x)dx", answer: "vrai" },
      { question: "L'intégrale a des applications géométriques", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Aire entre y = x² et y = x sur [0,1]?',
        answer: '1/6',
        wrongAnswers: ['1/2', '1/3', '1/12']
      },
      {
        type: 'multiple_choice',
        question: 'Volume de révolution de y = x sur [0,2] autour de l\'axe x?',
        answer: '8π/3',
        wrongAnswers: ['4π/3', '16π/3', '2π']
      },
      {
        type: 'multiple_choice',
        question: 'Que calcule π∫[a,b] f²(x)dx?',
        answer: 'Volume de révolution',
        wrongAnswers: ['Aire sous la courbe', 'Longueur de la courbe', 'Pente de la tangente']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'aire entre deux courbes = ∫[a,b] (f - g)dx',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le volume de révolution = π∫[a,b] f²(x)dx',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'intégrale a uniquement des applications algébriques',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'intégrale a des applications géométriques',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'aire entre y = x et y = x² sur [0,1] est ∫[0,1] (? - ?) dx',
        answer: 'x, x²',
        wrongAnswers: ['x², x', 'x, 0', '1, x']
      },
      {
        type: 'multiple_choice',
        question: 'Le volume de révolution autour de l\'axe x est π∫[a,b] ? dx',
        answer: 'f²(x)',
        wrongAnswers: ['f(x)', '2πf(x)', 'f\'(x)']
      },
      {
        type: 'multiple_choice',
        question: 'Pour calculer l\'aire entre deux courbes, on utilise:',
        answer: 'l\'intégrale',
        wrongAnswers: ['la dérivée', 'la limite', 'la somme']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Que calcule π∫[a,b] f²(x)dx? Glisse la réponse:',
        answer: 'Volume de révolution',
        wordBank: ['Volume de révolution', 'Aire sous la courbe', 'Longueur de la courbe', 'Pente'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building volume formula)
      {
        type: 'drag_and_drop',
        question: 'Construis: Volume de révolution = π∫[a,b] _____ dx',
        answer: ['f²(x)'],
        wordBank: ['f²(x)', 'f(x)', 'f\'(x)', 'f(x)²'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 13: PROBABILITÉS
  'ch13-s1': {
    questions: [
      { question: "Une probabilité est entre 0 et 1", answer: "vrai" },
      { question: "P(Ω) = 1", answer: "vrai" },
      { question: "P(A) + P(Ā) = 1", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si P(A) = 0,3, calcule P(Ā)',
        answer: 'P(Ā) = 0,7',
        wrongAnswers: ['P(Ā) = 0,3', 'P(Ā) = 1,3', 'P(Ā) = -0,3']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la probabilité d\'un événement certain?',
        answer: 'P = 1',
        wrongAnswers: ['P = 0', 'P = 0,5', 'P peut être n\'importe quelle valeur']
      },
      {
        type: 'multiple_choice',
        question: 'Dans quelle plage se trouve toujours une probabilité?',
        answer: 'Entre 0 et 1',
        wrongAnswers: ['Entre -1 et 1', 'Entre 0 et 10', 'Entre 0 et 100']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La probabilité d\'un événement impossible est 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une probabilité peut être négative',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'P(Ω) = 1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'P(A) + P(Ā) = 2',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si P(A) = 0,6, alors P(Ā) = ?',
        answer: '0,4',
        wrongAnswers: ['0,6', '1', '0']
      },
      {
        type: 'multiple_choice',
        question: 'La probabilité d\'un événement certain est:',
        answer: '1',
        wrongAnswers: ['0', '0.5', '∞']
      },
      {
        type: 'multiple_choice',
        question: 'Une probabilité est toujours entre ? et ?',
        answer: '0, 1',
        wrongAnswers: ['-1, 1', '0, ∞', '1, 2']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si P(A) = 0,8, calcule P(Ā). Glisse la réponse:',
        answer: 'P(Ā) = 0,2',
        wordBank: ['P(Ā) = 0,2', 'P(Ā) = 0,8', 'P(Ā) = 1,8', 'P(Ā) = -0,2'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building probability)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si P(A) = 0,4, alors P(Ā) = _____',
        answer: ['0,6'],
        wordBank: ['0,6', '0,4', '1,4', '-0,4'],
        mode: 'construct'
      }
    ]
  },

  'ch13-s2': {
    questions: [
      { question: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)", answer: "vrai" },
      { question: "Si A et B incompatibles, P(A ∪ B) = P(A) + P(B)", answer: "vrai" },
      { question: "P(A ∩ B) = P(A) × P(B) si A et B indépendants", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si P(A) = 0,4, P(B) = 0,3, P(A∩B) = 0,1, calcule P(A∪B)',
        answer: 'P(A∪B) = 0,6',
        wrongAnswers: ['P(A∪B) = 0,7', 'P(A∪B) = 0,8', 'P(A∪B) = 0,5']
      },
      {
        type: 'multiple_choice',
        question: 'Si A et B indépendants, P(A) = 0,5, P(B) = 0,6, calcule P(A∩B)',
        answer: 'P(A∩B) = 0,3',
        wrongAnswers: ['P(A∩B) = 0,11', 'P(A∩B) = 1,1', 'P(A∩B) = 0,5']
      },
      {
        type: 'multiple_choice',
        question: 'Si A et B incompatibles, P(A) = 0,3, P(B) = 0,4, calcule P(A∪B)',
        answer: 'P(A∪B) = 0,7',
        wrongAnswers: ['P(A∪B) = 0,12', 'P(A∪B) = 1,2', 'P(A∪B) = 0,1']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si A et B incompatibles, P(A ∩ B) = 1',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'P(A ∩ B) = P(A) × P(B) si A et B indépendants',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si A et B incompatibles, P(A ∪ B) = P(A) + P(B)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si P(A) = 0,5, P(B) = 0,4, P(A∩B) = 0,2, alors P(A∪B) = ?',
        answer: '0,7',
        wrongAnswers: ['0,9', '0,2', '0,5']
      },
      {
        type: 'multiple_choice',
        question: 'Si A et B indépendants, P(A) = 0,6, P(B) = 0,7, alors P(A∩B) = ?',
        answer: '0,42',
        wrongAnswers: ['1.3', '0.13', '0.1']
      },
      {
        type: 'multiple_choice',
        question: 'Si A et B incompatibles, alors P(A ∩ B) = ?',
        answer: '0',
        wrongAnswers: ['1', 'P(A) + P(B)', 'P(A) × P(B)']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si P(A) = 0,3, P(B) = 0,5, P(A∩B) = 0,2, calcule P(A∪B). Glisse la réponse:',
        answer: 'P(A∪B) = 0,6',
        wordBank: ['P(A∪B) = 0,6', 'P(A∪B) = 0,8', 'P(A∪B) = 1', 'P(A∪B) = 0,1'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building union probability)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si P(A) = 0,4, P(B) = 0,6, P(A∩B) = 0,1, alors P(A∪B) = _____',
        answer: ['0,9'],
        wordBank: ['0,9', '1', '0,24', '0,1'],
        mode: 'construct'
      }
    ]
  },

  'ch13-s3': {
    questions: [
      { question: "P(B|A) = P(A∩B)/P(A) si P(A) ≠ 0", answer: "vrai" },
      { question: "C'est la probabilité conditionnelle", answer: "vrai" },
      { question: "P(A∩B) = P(A) × P(B|A)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si P(A) = 0,5, P(A∩B) = 0,2, calcule P(B|A)',
        answer: 'P(B|A) = 0,4',
        wrongAnswers: ['P(B|A) = 0,1', 'P(B|A) = 0,7', 'P(B|A) = 2,5']
      },
      {
        type: 'multiple_choice',
        question: 'Si P(A) = 0,6, P(B|A) = 0,5, calcule P(A∩B)',
        answer: 'P(A∩B) = 0,3',
        wrongAnswers: ['P(A∩B) = 0,11', 'P(A∩B) = 1,1', 'P(A∩B) = 0,5']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que P(B|A)?',
        answer: 'La probabilité conditionnelle de B sachant A',
        wrongAnswers: ['La probabilité de A et B', 'La probabilité de A ou B', 'La probabilité de A']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'P(B|A) = P(A∩B)/P(A) si P(A) ≠ 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La probabilité conditionnelle mesure la dépendance',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'P(A∩B) = P(A) × P(B|A)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si A et B indépendants, alors P(B|A) = P(B)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si P(A) = 0,8, P(A∩B) = 0,4, alors P(B|A) = ?',
        answer: '0,5',
        wrongAnswers: ['0.4', '0.8', '1.2']
      },
      {
        type: 'multiple_choice',
        question: 'Si P(A) = 0,7, P(B|A) = 0,6, alors P(A∩B) = ?',
        answer: '0,42',
        wrongAnswers: ['1.3', '0.13', '0.1']
      },
      {
        type: 'multiple_choice',
        question: 'La probabilité conditionnelle P(B|A) se lit: probabilité de B _____ A',
        answer: 'sachant',
        wrongAnswers: ['ou', 'et', 'sans']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si P(A) = 0,4, P(A∩B) = 0,12, calcule P(B|A). Glisse la réponse:',
        answer: 'P(B|A) = 0,3',
        wordBank: ['P(B|A) = 0,3', 'P(B|A) = 0,52', 'P(B|A) = 0,28', 'P(B|A) = 1,2'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building conditional probability)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si P(A) = 0,5, P(B|A) = 0,8, alors P(A∩B) = _____',
        answer: ['0,4'],
        wordBank: ['0,4', '1,3', '0,13', '0,5'],
        mode: 'construct'
      }
    ]
  },

  'ch13-s4': {
    questions: [
      { question: "Une variable aléatoire associe un nombre à chaque issue", answer: "vrai" },
      { question: "E(X) est l'espérance", answer: "vrai" },
      { question: "E(X) = Σ xᵢ P(X = xᵢ)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'X prend valeurs 1,2,3 avec probabilités 0,2, 0,5, 0,3. Calcule E(X)',
        answer: 'E(X) = 2,1',
        wrongAnswers: ['E(X) = 2', 'E(X) = 2,5', 'E(X) = 1,9']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que E(X)?',
        answer: 'L\'espérance mathématique (moyenne pondérée)',
        wrongAnswers: ['La variance', 'La médiane', 'La probabilité maximale']
      },
      {
        type: 'multiple_choice',
        question: 'Comment calcule-t-on E(X)?',
        answer: 'E(X) = Σ xᵢ P(X = xᵢ)',
        wrongAnswers: ['E(X) = Σ xᵢ', 'E(X) = Σ P(X = xᵢ)', 'E(X) = x₁ × x₂']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une variable aléatoire associe un nombre à chaque issue',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'E(X) est la variance',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'espérance est la moyenne pondérée',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'E(X) = Σ xᵢ P(X = xᵢ)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'X prend valeurs 2,4,6 avec probabilités 0,3, 0,4, 0,3. E(X) = ?',
        answer: '4',
        wrongAnswers: ['3', '5', '6']
      },
      {
        type: 'multiple_choice',
        question: 'L\'espérance E(X) est aussi appelée _____ pondérée',
        answer: 'moyenne',
        wrongAnswers: ['médiane', 'variance', 'écart-type']
      },
      {
        type: 'multiple_choice',
        question: 'E(X) = Σ ? × ?',
        answer: 'xᵢ, P(X = xᵢ)',
        wrongAnswers: ['P(X = xᵢ), xᵢ', 'xᵢ, xᵢ', 'P(X = xᵢ), P(X = xᵢ)']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'X prend valeurs 3,5,7 avec probabilités 0,2, 0,5, 0,3. Calcule E(X). Glisse la réponse:',
        answer: 'E(X) = 5,2',
        wordBank: ['E(X) = 5,2', 'E(X) = 5', 'E(X) = 5,5', 'E(X) = 4,8'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building expectation)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si X prend valeurs 4,6 avec probabilités 0,6, 0,4, alors E(X) = _____',
        answer: ['4,8'],
        wordBank: ['4,8', '5', '10', '2,4'],
        mode: 'construct'
      }
    ]
  },

  'ch13-s5': {
    questions: [
      { question: "La loi binomiale modélise n répétitions indépendantes", answer: "vrai" },
      { question: "P(X = k) = C(n,k) pᵏ (1-p)ⁿ⁻ᵏ", answer: "vrai" },
      { question: "E(X) = np pour une binomiale", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une loi binomiale?',
        answer: 'Une loi qui modélise n répétitions indépendantes',
        wrongAnswers: ['Une loi qui modélise n répétitions dépendantes', 'Une loi continue', 'Une loi uniforme']
      },
      {
        type: 'multiple_choice',
        question: 'Si X ~ B(20, 0,4), calcule E(X)',
        answer: 'E(X) = 8',
        wrongAnswers: ['E(X) = 4', 'E(X) = 12', 'E(X) = 20']
      },
      {
        type: 'multiple_choice',
        question: 'Pour une loi binomiale B(n, p), quelle est l\'espérance?',
        answer: 'E(X) = np',
        wrongAnswers: ['E(X) = n', 'E(X) = p', 'E(X) = np(1-p)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La loi binomiale nécessite indépendance',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'P(X = k) = C(n,k) pᵏ (1-p)ⁿ⁻ᵏ pour une binomiale',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'E(X) = np pour une binomiale B(n, p)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La loi binomiale peut avoir plus de n répétitions',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si X ~ B(10, 0,5), alors E(X) = ?',
        answer: '5',
        wrongAnswers: ['10', '0.5', '15']
      },
      {
        type: 'multiple_choice',
        question: 'Pour une loi binomiale B(n, p), E(X) = ?',
        answer: 'np',
        wrongAnswers: ['n + p', 'n/p', 'p/n']
      },
      {
        type: 'multiple_choice',
        question: 'La loi binomiale modélise n répétitions:',
        answer: 'indépendantes',
        wrongAnswers: ['dépendantes', 'identiques', 'aléatoires']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si X ~ B(15, 0,6), calcule E(X). Glisse la réponse:',
        answer: 'E(X) = 9',
        wordBank: ['E(X) = 9', 'E(X) = 6', 'E(X) = 15', 'E(X) = 12'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building binomial expectation)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si X ~ B(12, 0,5), alors E(X) = _____',
        answer: ['6'],
        wordBank: ['6', '12', '0,5', '24'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 14: STATISTIQUES
  'ch14-s1': {
    questions: [
      { question: "La moyenne x̄ = (Σxᵢ)/n", answer: "vrai" },
      { question: "La médiane partage la série en deux", answer: "vrai" },
      { question: "Le mode est la valeur la plus fréquente", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne: 5, 7, 9, 11, 13',
        answer: 'x̄ = 9',
        wrongAnswers: ['x̄ = 8', 'x̄ = 10', 'x̄ = 11']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la médiane: 3, 5, 7, 9, 11',
        answer: 'Médiane = 7',
        wrongAnswers: ['Médiane = 5', 'Médiane = 9', 'Médiane = 6']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le mode: 2, 3, 3, 4, 3, 5?',
        answer: 'Mode = 3',
        wrongAnswers: ['Mode = 2', 'Mode = 4', 'Pas de mode']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La moyenne x̄ = (Σxᵢ)/n',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La médiane est toujours égale à la moyenne',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le mode est la valeur la plus fréquente',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La médiane partage toujours la série en deux parties égales',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne: 6, 8, 10, 12, 14. x̄ = ?',
        answer: '10',
        wrongAnswers: ['8', '12', '9']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la médiane: 4, 6, 8, 10, 12. Médiane = ?',
        answer: '8',
        wrongAnswers: ['6', '10', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le mode: 3, 4, 4, 5, 4, 6? Mode = ?',
        answer: '4',
        wrongAnswers: ['3', '5', '6']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la moyenne: 7, 9, 11, 13, 15. Glisse la réponse:',
        answer: 'x̄ = 11',
        wordBank: ['x̄ = 11', 'x̄ = 10', 'x̄ = 12', 'x̄ = 9'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building mean)
      {
        type: 'drag_and_drop',
        question: 'Construis: Pour calculer la moyenne, on fait (Σxᵢ) / _____',
        answer: ['n'],
        wordBank: ['n', '2', 'x̄', 'Σ'],
        mode: 'construct'
      }
    ]
  },

  'ch14-s2': {
    questions: [
      { question: "La variance mesure la dispersion", answer: "vrai" },
      { question: "V = (Σ(xᵢ - x̄)²)/n", answer: "vrai" },
      { question: "L'écart-type σ = √V", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la variance: 2, 4, 6, 8 (moyenne = 5)',
        answer: 'V = 5',
        wrongAnswers: ['V = 4', 'V = 6', 'V = 10']
      },
      {
        type: 'multiple_choice',
        question: 'Si V = 9, quel est l\'écart-type?',
        answer: 'σ = 3',
        wrongAnswers: ['σ = 81', 'σ = 4,5', 'σ = 2']
      },
      {
        type: 'multiple_choice',
        question: 'Que mesure la variance?',
        answer: 'La dispersion des données',
        wrongAnswers: ['La moyenne des données', 'Le centre des données', 'La médiane']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Plus l\'écart-type est grand, plus la dispersion est grande',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La variance est toujours négative',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'écart-type σ = √V',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'V = (Σ(xᵢ - x̄)²)/n',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule l\'écart-type si V = 16. σ = ?',
        answer: '4',
        wrongAnswers: ['16', '8', '2']
      },
      {
        type: 'multiple_choice',
        question: 'La variance V = (Σ(xᵢ - x̄)²) / ?',
        answer: 'n',
        wrongAnswers: ['n-1', 'x̄', 'σ']
      },
      {
        type: 'multiple_choice',
        question: 'Si σ = 5, alors V = ?',
        answer: '25',
        wrongAnswers: ['5', '10', '125']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si V = 25, quel est l\'écart-type? Glisse la réponse:',
        answer: 'σ = 5',
        wordBank: ['σ = 5', 'σ = 625', 'σ = 12,5', 'σ = 2'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building standard deviation)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si σ = 6, alors V = _____',
        answer: ['36'],
        wordBank: ['36', '6', '12', '3'],
        mode: 'construct'
      }
    ]
  },

  'ch14-s3': {
    questions: [
      { question: "Un diagramme en bâtons représente les fréquences", answer: "vrai" },
      { question: "Un histogramme représente des classes", answer: "vrai" },
      { question: "Un diagramme circulaire montre les proportions", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel graphique pour des données discrètes?',
        answer: 'Diagramme en bâtons',
        wrongAnswers: ['Histogramme', 'Diagramme circulaire', 'Nuage de points']
      },
      {
        type: 'multiple_choice',
        question: 'Quel graphique pour des classes?',
        answer: 'Histogramme',
        wrongAnswers: ['Diagramme en bâtons', 'Diagramme circulaire', 'Courbe']
      },
      {
        type: 'multiple_choice',
        question: 'Quel graphique pour des proportions?',
        answer: 'Diagramme circulaire',
        wrongAnswers: ['Histogramme', 'Diagramme en bâtons', 'Nuage de points']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un diagramme en bâtons représente les fréquences',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un histogramme représente des classes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un diagramme circulaire montre les pourcentages',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On utilise toujours le même type de graphique',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un _____ représente les fréquences pour des données discrètes',
        answer: 'diagramme en bâtons',
        wrongAnswers: ['histogramme', 'nuage de points', 'courbe']
      },
      {
        type: 'multiple_choice',
        question: 'Un _____ représente des classes',
        answer: 'histogramme',
        wrongAnswers: ['diagramme en bâtons', 'nuage de points', 'courbe']
      },
      {
        type: 'multiple_choice',
        question: 'Un diagramme _____ montre les proportions',
        answer: 'circulaire',
        wrongAnswers: ['en bâtons', 'en histogramme', 'en nuage de points']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel graphique pour des données discrètes? Glisse la réponse:',
        answer: 'Diagramme en bâtons',
        wordBank: ['Diagramme en bâtons', 'Histogramme', 'Diagramme circulaire', 'Nuage de points'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building graph type)
      {
        type: 'drag_and_drop',
        question: 'Construis: Pour des classes, on utilise un _____',
        answer: ['histogramme'],
        wordBank: ['histogramme', 'diagramme en bâtons', 'diagramme circulaire', 'nuage de points'],
        mode: 'construct'
      }
    ]
  },

  'ch14-s4': {
    questions: [
      { question: "Les quartiles divisent la série en 4", answer: "vrai" },
      { question: "Q₂ est la médiane", answer: "vrai" },
      { question: "L'écart interquartile = Q₃ - Q₁", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que Q₁?',
        answer: 'Premier quartile (25% des valeurs)',
        wrongAnswers: ['Troisième quartile', 'La médiane', 'Le mode']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que Q₃?',
        answer: 'Troisième quartile (75% des valeurs)',
        wrongAnswers: ['Premier quartile', 'La médiane', 'Le mode']
      },
      {
        type: 'multiple_choice',
        question: 'Si Q₁ = 10 et Q₃ = 20, quel est l\'écart interquartile?',
        answer: 'Q₃ - Q₁ = 10',
        wrongAnswers: ['Q₃ - Q₁ = 30', 'Q₃ - Q₁ = 15', 'Q₃ - Q₁ = 5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les quartiles divisent la série en 4 parties égales',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Q₂ est la médiane',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'écart interquartile = Q₃ - Q₁',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Q₁ est toujours supérieur à Q₃',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le premier quartile Q₁ sépare les ?% inférieures des 75% supérieures',
        answer: '25',
        wrongAnswers: ['50', '75', '100']
      },
      {
        type: 'multiple_choice',
        question: 'Le troisième quartile Q₃ sépare les ?% inférieures des 25% supérieures',
        answer: '75',
        wrongAnswers: ['25', '50', '100']
      },
      {
        type: 'multiple_choice',
        question: 'Si Q₁ = 15 et Q₃ = 25, alors l\'écart interquartile = ?',
        answer: '10',
        wrongAnswers: ['40', '20', '5']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si Q₁ = 12 et Q₃ = 22, quel est l\'écart interquartile? Glisse la réponse:',
        answer: 'Q₃ - Q₁ = 10',
        wordBank: ['Q₃ - Q₁ = 10', 'Q₃ - Q₁ = 34', 'Q₃ - Q₁ = 17', 'Q₃ - Q₁ = 5'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building interquartile range)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si Q₁ = 8 et Q₃ = 18, alors écart interquartile = _____',
        answer: ['10'],
        wordBank: ['10', '26', '13', '5'],
        mode: 'construct'
      }
    ]
  },

  'ch14-s5': {
    questions: [
      { question: "Une série statistique peut être univariée ou bivariée", answer: "vrai" },
      { question: "La corrélation mesure la liaison", answer: "vrai" },
      { question: "Le coefficient de corrélation est entre -1 et 1", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une corrélation positive?',
        answer: 'Quand les deux variables varient dans le même sens',
        wrongAnswers: ['Quand les deux variables varient en sens contraire', 'Quand il n\'y a pas de lien', 'Quand une variable est constante']
      },
      {
        type: 'multiple_choice',
        question: 'Si r = 0, que peut-on dire?',
        answer: 'Pas de corrélation linéaire',
        wrongAnswers: ['Corrélation parfaite positive', 'Corrélation parfaite négative', 'Corrélation forte']
      },
      {
        type: 'multiple_choice',
        question: 'Dans quelle plage se trouve le coefficient de corrélation?',
        answer: 'Entre -1 et 1',
        wrongAnswers: ['Entre 0 et 1', 'Entre -1 et 0', 'Entre 0 et 100']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'r = 1 signifie corrélation parfaite positive',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le coefficient de corrélation peut être supérieur à 1',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La corrélation mesure la liaison entre deux variables',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si r = -1, il y a corrélation parfaite négative',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le coefficient de corrélation est toujours entre ? et ?',
        answer: '-1, 1',
        wrongAnswers: ['0, 1', '-1, 0', '0, ∞']
      },
      {
        type: 'multiple_choice',
        question: 'Si r = 1, il y a corrélation parfaite:',
        answer: 'positive',
        wrongAnswers: ['négative', 'nulle', 'faible']
      },
      {
        type: 'multiple_choice',
        question: 'Si r = 0, il n\'y a pas de corrélation:',
        answer: 'linéaire',
        wrongAnswers: ['positive', 'négative', 'parfaite']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'une corrélation positive? Glisse la réponse:',
        answer: 'Quand les deux variables varient dans le même sens',
        wordBank: ['Quand les deux variables varient dans le même sens', 'Quand les deux variables varient en sens contraire', 'Quand il n\'y a pas de lien', 'Quand une variable est constante'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building correlation)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si r = -1, il y a corrélation parfaite _____',
        answer: ['négative'],
        wordBank: ['négative', 'positive', 'nulle', 'forte'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 15: NOMBRES COMPLEXES
  'ch15-s1': {
    questions: [
      { question: "Un nombre complexe s'écrit z = a + bi", answer: "vrai" },
      { question: "i² = -1", answer: "vrai" },
      { question: "a est la partie réelle, b la partie imaginaire", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la partie réelle de z = 3 + 4i?',
        answer: 'Partie réelle: 3',
        wrongAnswers: ['Partie réelle: 4', 'Partie réelle: 7', 'Partie réelle: 1']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (2 + 3i) + (1 - i)',
        answer: '3 + 2i',
        wrongAnswers: ['3 + 4i', '1 + 2i', '3 - 2i']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: i²',
        answer: 'i² = -1',
        wrongAnswers: ['i² = 1', 'i² = i', 'i² = 0']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un nombre complexe s\'écrit z = a + bi',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'i² = 1',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'a est la partie réelle, b la partie imaginaire',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'i² = -1',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans z = 5 + 6i, la partie réelle est ? et la partie imaginaire est ?',
        answer: '5, 6',
        wrongAnswers: ['6, 5', '5i, 6', '5, 6i']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (4 + 5i) + (2 - 3i) = ?',
        answer: '6 + 2i',
        wrongAnswers: ['6 - 2i', '2 + 8i', '6 + 8i']
      },
      {
        type: 'multiple_choice',
        question: 'i² = ?',
        answer: '-1',
        wrongAnswers: ['1', 'i', '0']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (3 + 4i) + (2 - i). Glisse la réponse:',
        answer: '5 + 3i',
        wordBank: ['5 + 3i', '5 + 5i', '1 + 3i', '5 - 3i'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building complex number)
      {
        type: 'drag_and_drop',
        question: 'Construis: (5 + 2i) + (3 - i) = _____',
        answer: ['8', '+', 'i'],
        wordBank: ['8', '+', 'i', '-', '2', '3'],
        mode: 'construct'
      }
    ]
  },

  'ch15-s2': {
    questions: [
      { question: "(a+bi)(c+di) = ac - bd + (ad+bc)i", answer: "vrai" },
      { question: "Le conjugué de z = a+bi est z̄ = a-bi", answer: "vrai" },
      { question: "z × z̄ = a² + b²", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: (2+3i)(1-i)',
        answer: '5 + i',
        wrongAnswers: ['5 - i', '2 + 3i', '1 + 2i']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le conjugué de z = 3+4i?',
        answer: 'z̄ = 3-4i',
        wrongAnswers: ['z̄ = 3+4i', 'z̄ = -3+4i', 'z̄ = -3-4i']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule |z| si z = 3+4i',
        answer: '|z| = 5',
        wrongAnswers: ['|z| = 7', '|z| = 12', '|z| = 25']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le conjugué de z = a+bi est z̄ = a-bi',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'z × z̄ = a² + b²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '(a+bi)(c+di) = ac + bd + (ad+bc)i',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '(a+bi)(c+di) = ac - bd + (ad+bc)i',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le conjugué de z = 5+6i est z̄ = ?',
        answer: '5-6i',
        wrongAnswers: ['-5+6i', '5+6i', '-5-6i']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule |z| si z = 5+12i. |z| = ?',
        answer: '13',
        wrongAnswers: ['17', '7', '√17']
      },
      {
        type: 'multiple_choice',
        question: 'Si z = 4+3i, alors z × z̄ = ?',
        answer: '25',
        wrongAnswers: ['7', '1', '49']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (3+2i)(1-i). Glisse la réponse:',
        answer: '5 - i',
        wordBank: ['5 - i', '5 + i', '3 - 2i', '1 + 2i'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building complex product)
      {
        type: 'drag_and_drop',
        question: 'Construis: Le conjugué de z = 4+5i est z̄ = _____',
        answer: ['4-5i'],
        wordBank: ['4-5i', '4+5i', '-4+5i', '-4-5i'],
        mode: 'construct'
      }
    ]
  },

  'ch15-s3': {
    questions: [
      { question: "|z| = √(a² + b²) est le module", answer: "vrai" },
      { question: "arg(z) est l'argument", answer: "vrai" },
      { question: "z = |z|(cos θ + i sin θ) est la forme trigonométrique", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule |z| si z = 1 + i',
        answer: '|z| = √2',
        wrongAnswers: ['|z| = 1', '|z| = 2', '|z| = √3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule arg(z) si z = 1 + i',
        answer: 'arg(z) = π/4',
        wrongAnswers: ['arg(z) = π/2', 'arg(z) = π', 'arg(z) = 0']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la forme trigonométrique de z = 1 + i?',
        answer: 'z = √2(cos π/4 + i sin π/4)',
        wrongAnswers: ['z = √2(cos π/2 + i sin π/2)', 'z = 1(cos π/4 + i sin π/4)', 'z = √2(cos 0 + i sin 0)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '|z| = √(a² + b²) est le module',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'arg(z) est l\'argument du complexe',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'z = |z|(cos θ + i sin θ) est la forme algébrique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'z = |z|(cos θ + i sin θ) est la forme trigonométrique',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule |z| si z = 3 + 4i. |z| = ?',
        answer: '5',
        wrongAnswers: ['7', '√7', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Si z = 1 + i, alors arg(z) = ?',
        answer: 'π/4',
        wrongAnswers: ['π/2', 'π', '3π/4']
      },
      {
        type: 'multiple_choice',
        question: 'Le module |z| = √(? + ?)',
        answer: 'a², b²',
        wrongAnswers: ['a, b', 'a², b', 'a, b²']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule |z| si z = 6 + 8i. Glisse la réponse:',
        answer: '|z| = 10',
        wordBank: ['|z| = 10', '|z| = 14', '|z| = 48', '|z| = 100'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building module)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si z = 4+3i, alors |z| = _____',
        answer: ['5'],
        wordBank: ['5', '7', '12', '25'],
        mode: 'construct'
      }
    ]
  },

  'ch15-s4': {
    questions: [
      { question: "zⁿ = |z|ⁿ(cos nθ + i sin nθ) (formule de Moivre)", answer: "vrai" },
      { question: "Les racines n-ièmes sont équidistantes sur le cercle", answer: "vrai" },
      { question: "Il y a n racines n-ièmes distinctes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule (1+i)²',
        answer: '(1+i)² = 2i',
        wrongAnswers: ['(1+i)² = 2', '(1+i)² = 1+2i', '(1+i)² = i']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de racines carrées a un complexe?',
        answer: '2 racines carrées',
        wrongAnswers: ['1 racine carrée', '3 racines carrées', 'Aucune racine']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la formule de Moivre?',
        answer: 'zⁿ = |z|ⁿ(cos nθ + i sin nθ)',
        wrongAnswers: ['zⁿ = |z|ⁿ', 'zⁿ = n|z|(cos θ + i sin θ)', 'zⁿ = |z|(cos nθ + i sin nθ)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les racines n-ièmes sont équidistantes sur le cercle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Il y a n racines n-ièmes distinctes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un complexe a toujours une seule racine carrée',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les racines n-ièmes forment un polygone régulier',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule (1+i)². Réponse: ?',
        answer: '2i',
        wrongAnswers: ['1+2i', '2', 'i']
      },
      {
        type: 'multiple_choice',
        question: 'Un complexe a combien de racines carrées?',
        answer: '2',
        wrongAnswers: ['1', '3', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Selon la formule de Moivre: zⁿ = |z|ⁿ(cos ? + i sin ?)',
        answer: 'nθ, nθ',
        wrongAnswers: ['θ, θ', 'n, n', 'θ, nθ']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de racines cubiques a un complexe? Glisse la réponse:',
        answer: '3 racines cubiques',
        wordBank: ['3 racines cubiques', '1 racine cubique', '2 racines cubiques', 'Aucune racine'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building Moivre formula)
      {
        type: 'drag_and_drop',
        question: 'Construis: Selon Moivre, zⁿ = |z|ⁿ(cos _____ + i sin _____)',
        answer: ['nθ', 'nθ'],
        wordBank: ['nθ', 'nθ', 'θ', 'n'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 16: GÉOMÉTRIE DANS L'ESPACE
  'ch16-s1': {
    questions: [
      { question: "Un point dans l'espace a 3 coordonnées (x, y, z)", answer: "vrai" },
      { question: "La distance AB = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]", answer: "vrai" },
      { question: "Le milieu de [AB] a pour coordonnées ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la distance entre A(1,2,3) et B(4,6,7)',
        answer: 'AB = √41',
        wrongAnswers: ['AB = 5', 'AB = 7', 'AB = 41']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le milieu de [AB] si A(0,0,0) et B(2,4,6)',
        answer: 'M(1, 2, 3)',
        wrongAnswers: ['M(2, 4, 6)', 'M(0, 0, 0)', 'M(1, 1, 1)']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de coordonnées a un point dans l\'espace?',
        answer: '3 coordonnées (x, y, z)',
        wrongAnswers: ['1 coordonnée', '2 coordonnées', '4 coordonnées']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'espace a 3 dimensions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un point dans l\'espace a 2 coordonnées',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La distance AB = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le milieu de [AB] a pour coordonnées ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un point dans l\'espace a combien de coordonnées?',
        answer: '3',
        wrongAnswers: ['2', '4', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la distance entre A(2,3,4) et B(5,7,10). AB ≈ ?',
        answer: '√61',
        wrongAnswers: ['√41', '√81', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le milieu de [AB] si A(3,4,5) et B(7,8,11). M(?, ?, ?)',
        answer: '5, 6, 8',
        wrongAnswers: ['(4, 5, 7)', '(6, 7, 9)', '(3, 4, 5)']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la distance entre A(0,0,0) et B(3,4,12). Glisse la réponse:',
        answer: 'AB = 13',
        wordBank: ['AB = 13', 'AB = 5', 'AB = 12', 'AB = 19'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building 3D distance)
      {
        type: 'drag_and_drop',
        question: 'Construis: Un point dans l\'espace a _____ coordonnées',
        answer: ['3'],
        wordBank: ['3', '2', '1', '4'],
        mode: 'construct'
      }
    ]
  },

  'ch16-s2': {
    questions: [
      { question: "Un vecteur dans l'espace a 3 composantes", answer: "vrai" },
      { question: "u⃗(x,y,z) + v⃗(x',y',z') = (x+x', y+y', z+z')", answer: "vrai" },
      { question: "||u⃗|| = √(x² + y² + z²)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule u⃗(1,2,3) + v⃗(4,5,6)',
        answer: '(5, 7, 9)',
        wrongAnswers: ['(5, 5, 5)', '(3, 3, 3)', '(6, 8, 10)']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ||u⃗|| si u⃗(3,4,12)',
        answer: '||u⃗|| = 13',
        wrongAnswers: ['||u⃗|| = 7', '||u⃗|| = 19', '||u⃗|| = 25']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule u⃗·v⃗ si u⃗(1,2,3) et v⃗(4,5,6)',
        answer: 'u⃗·v⃗ = 32',
        wrongAnswers: ['u⃗·v⃗ = 15', 'u⃗·v⃗ = 27', 'u⃗·v⃗ = 45']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un vecteur dans l\'espace a 3 composantes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '||u⃗|| = √(x² + y² + z²)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'u⃗(x,y,z) + v⃗(x\',y\',z\') = (x+x\', y+y\', z+z\')',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un vecteur dans l\'espace a 2 composantes',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule u⃗(2,3,4) + v⃗(5,6,7) = (?, ?, ?)',
        answer: '7, 9, 11',
        wrongAnswers: ['(3, 3, 3)', '(7, 9, 10)', '(5, 6, 7)']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule ||u⃗|| si u⃗(6,8,10). ||u⃗|| = ?',
        answer: '10√2',
        wrongAnswers: ['24', '√200', '20']
      },
      {
        type: 'multiple_choice',
        question: 'La norme ||u⃗|| = √(? + ? + ?)',
        answer: 'x², y², z²',
        wrongAnswers: ['x, y, z', 'x², y, z²', 'x, y², z']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule ||u⃗|| si u⃗(5,12,0). Glisse la réponse:',
        answer: '||u⃗|| = 13',
        wordBank: ['||u⃗|| = 13', '||u⃗|| = 17', '||u⃗|| = 12', '||u⃗|| = 25'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building vector norm)
      {
        type: 'drag_and_drop',
        question: 'Construis: ||u⃗|| = √(x² + _____ + z²)',
        answer: ['y²'],
        wordBank: ['y²', 'y', '2y', 'y² + x²'],
        mode: 'construct'
      }
    ]
  },

  'ch16-s3': {
    questions: [
      { question: "Un plan a une équation ax + by + cz + d = 0", answer: "vrai" },
      { question: "n⃗(a,b,c) est un vecteur normal au plan", answer: "vrai" },
      { question: "Deux plans parallèles ont des normaux colinéaires", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'équation du plan passant par (0,0,0) avec n⃗(1,2,3)?',
        answer: 'x + 2y + 3z = 0',
        wrongAnswers: ['x + 2y + 3z = 1', 'x + y + z = 0', '2x + y + 3z = 0']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est un vecteur normal au plan 2x - y + z = 5?',
        answer: 'n⃗(2, -1, 1)',
        wrongAnswers: ['n⃗(2, 1, -1)', 'n⃗(1, -2, 1)', 'n⃗(2, 1, 1)']
      },
      {
        type: 'multiple_choice',
        question: 'Les plans x+y+z=1 et 2x+2y+2z=3 sont-ils parallèles?',
        answer: 'Oui (normaux colinéaires)',
        wrongAnswers: ['Non', 'Ils sont perpendiculaires', 'On ne peut pas dire']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un plan a une équation ax + by + cz + d = 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'n⃗(a,b,c) est un vecteur normal au plan',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Deux plans parallèles ont des normaux identiques',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Deux plans parallèles ont des normaux colinéaires',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un vecteur normal au plan 3x + 4y - z = 7 est n⃗(?, ?, ?)',
        answer: '3, 4, -1',
        wrongAnswers: ['(3, 4, 1)', '(1, 1, 1)', '(0, 0, 0)']
      },
      {
        type: 'multiple_choice',
        question: 'L\'équation d\'un plan est de la forme ? + ? + ? + d = 0',
        answer: 'ax, by, cz',
        wrongAnswers: ['x, y, z', 'a, b, c', 'x², y², z²']
      },
      {
        type: 'multiple_choice',
        question: 'Si deux plans ont des normaux colinéaires, ils sont:',
        answer: 'parallèles',
        wrongAnswers: ['perpendiculaires', 'sécants', 'confondus']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est un vecteur normal au plan x + 3y - 2z = 4? Glisse la réponse:',
        answer: 'n⃗(1, 3, -2)',
        wordBank: ['n⃗(1, 3, -2)', 'n⃗(1, -3, 2)', 'n⃗(1, 3, 2)', 'n⃗(-1, 3, -2)'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building plane equation)
      {
        type: 'drag_and_drop',
        question: 'Construis: Un plan a une équation _____ + by + cz + d = 0',
        answer: ['ax'],
        wordBank: ['ax', 'x', 'a', 'xa'],
        mode: 'construct'
      }
    ]
  },

  'ch16-s4': {
    questions: [
      { question: "Une droite dans l'espace a une représentation paramétrique", answer: "vrai" },
      { question: "x = x₀ + at, y = y₀ + bt, z = z₀ + ct", answer: "vrai" },
      { question: "u⃗(a,b,c) est un vecteur directeur", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Équation paramétrique de la droite passant par (1,2,3) avec u⃗(2,1,-1)?',
        answer: 'x = 1+2t, y = 2+t, z = 3-t',
        wrongAnswers: ['x = 2+t, y = 1+2t, z = -1+3t', 'x = 1+t, y = 2+t, z = 3+t', 'x = 1+2, y = 2+1, z = 3-1']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est un vecteur directeur de x = 2t, y = 1+t, z = 3-t?',
        answer: 'u⃗(2, 1, -1)',
        wrongAnswers: ['u⃗(2, 0, 0)', 'u⃗(1, 1, 1)', 'u⃗(0, 1, 3)']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un vecteur directeur d\'une droite?',
        answer: 'Un vecteur parallèle à la droite',
        wrongAnswers: ['Un vecteur perpendiculaire à la droite', 'Un point de la droite', 'Le milieu de la droite']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une droite a une infinité de vecteurs directeurs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x = x₀ + at, y = y₀ + bt, z = z₀ + ct est une représentation paramétrique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une droite dans l\'espace a une seule équation',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'u⃗(a,b,c) est un vecteur directeur de la droite',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Équation paramétrique: x = x₀ + ?t, y = y₀ + ?t, z = z₀ + ?t',
        answer: 'a, b, c',
        wrongAnswers: ['x, y, z', '1, 1, 1', '0, 0, 0']
      },
      {
        type: 'multiple_choice',
        question: 'Un vecteur _____ est parallèle à la droite',
        answer: 'directeur',
        wrongAnswers: ['normal', 'perpendiculaire', 'nul']
      },
      {
        type: 'multiple_choice',
        question: 'Une droite dans l\'espace a une représentation:',
        answer: 'paramétrique',
        wrongAnswers: ['cartésienne', 'polaire', 'vectorielle']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est un vecteur directeur de x = t, y = 2+t, z = 5-2t? Glisse la réponse:',
        answer: 'u⃗(1, 1, -2)',
        wordBank: ['u⃗(1, 1, -2)', 'u⃗(0, 2, 5)', 'u⃗(1, 2, -2)', 'u⃗(1, 1, 2)'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building parametric equation)
      {
        type: 'drag_and_drop',
        question: 'Construis: x = x₀ + _____t, y = y₀ + bt, z = z₀ + ct',
        answer: ['a'],
        wordBank: ['a', 'x', 'ax', 'xa'],
        mode: 'construct'
      }
    ]
  },

  'ch16-s5': {
    questions: [
      { question: "Le volume d'un parallélépipède = |det(u⃗, v⃗, w⃗)|", answer: "vrai" },
      { question: "Le produit vectoriel donne un vecteur perpendiculaire", answer: "vrai" },
      { question: "u⃗ ∧ v⃗ est perpendiculaire à u⃗ et v⃗", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Volume du parallélépipède avec u⃗(1,0,0), v⃗(0,1,0), w⃗(0,0,1)?',
        answer: 'V = 1',
        wrongAnswers: ['V = 0', 'V = 3', 'V = 1/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule u⃗ ∧ v⃗ si u⃗(1,0,0) et v⃗(0,1,0)',
        answer: 'u⃗ ∧ v⃗ = (0,0,1)',
        wrongAnswers: ['u⃗ ∧ v⃗ = (1,1,0)', 'u⃗ ∧ v⃗ = (0,0,0)', 'u⃗ ∧ v⃗ = (1,0,0)']
      },
      {
        type: 'multiple_choice',
        question: 'Que donne le produit vectoriel?',
        answer: 'Un vecteur perpendiculaire aux deux vecteurs',
        wrongAnswers: ['Un nombre', 'Un plan', 'Un point']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le produit vectoriel est anti-commutatif',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'u⃗ ∧ v⃗ = v⃗ ∧ u⃗',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'u⃗ ∧ v⃗ est perpendiculaire à u⃗ et v⃗',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le volume d\'un parallélépipède = |det(u⃗, v⃗, w⃗)|',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le volume d\'un parallélépipède = |?(u⃗, v⃗, w⃗)|',
        answer: 'det',
        wrongAnswers: ['norme', 'produit', 'somme']
      },
      {
        type: 'multiple_choice',
        question: 'Le produit vectoriel u⃗ ∧ v⃗ est _____ à u⃗ et v⃗',
        answer: 'perpendiculaire',
        wrongAnswers: ['parallèle', 'colinéaire', 'opposé']
      },
      {
        type: 'multiple_choice',
        question: 'Le produit vectoriel est _____-commutatif',
        answer: 'anti',
        wrongAnswers: ['non', 'semi', 'bi']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Que donne le produit vectoriel? Glisse la réponse:',
        answer: 'Un vecteur perpendiculaire aux deux vecteurs',
        wordBank: ['Un vecteur perpendiculaire aux deux vecteurs', 'Un nombre', 'Un plan', 'Un point'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building cross product)
      {
        type: 'drag_and_drop',
        question: 'Construis: u⃗ ∧ v⃗ est _____ à u⃗ et v⃗',
        answer: ['perpendiculaire'],
        wordBank: ['perpendiculaire', 'parallèle', 'égal', 'opposé'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 17: TRANSFORMATIONS GÉOMÉTRIQUES
  'ch17-s1': {
    questions: [
      { question: "Une translation déplace tous les points de la même distance", answer: "vrai" },
      { question: "T_u⃗(M) = M' tel que MM'⃗ = u⃗", answer: "vrai" },
      { question: "Une translation conserve les distances", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Image de M(1,2) par translation de vecteur u⃗(3,4)?',
        answer: 'M\'(4, 6)',
        wrongAnswers: ['M\'(3, 4)', 'M\'(5, 7)', 'M\'(4, 4)']
      },
      {
        type: 'multiple_choice',
        question: 'Que conserve une translation?',
        answer: 'Distances, angles, formes',
        wrongAnswers: ['Seulement les distances', 'Seulement les angles', 'Rien']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une translation?',
        answer: 'Transformation qui déplace tous les points du même vecteur',
        wrongAnswers: ['Transformation qui tourne autour d\'un point', 'Transformation qui reflète', 'Transformation qui agrandit']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une translation est une isométrie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une translation conserve les distances',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une translation modifie les angles',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'T_u⃗(M) = M\' tel que MM\'⃗ = u⃗',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Image de M(2,3) par translation de vecteur u⃗(1,2). M\' = (?, ?)',
        answer: '3, 5',
        wrongAnswers: ['(1, 2)', '(2, 3)', '(4, 6)']
      },
      {
        type: 'multiple_choice',
        question: 'Une translation _____ les distances',
        answer: 'conserve',
        wrongAnswers: ['modifie', 'double', 'divise']
      },
      {
        type: 'multiple_choice',
        question: 'Une translation est une:',
        answer: 'isométrie',
        wrongAnswers: ['homothétie', 'rotation', 'symétrie']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Image de M(3,4) par translation de vecteur u⃗(2,1). Glisse la réponse:',
        answer: 'M\'(5, 5)',
        wordBank: ['M\'(5, 5)', 'M\'(6, 5)', 'M\'(5, 6)', 'M\'(3, 4)'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building translation)
      {
        type: 'drag_and_drop',
        question: 'Construis: Une translation _____ les distances',
        answer: ['conserve'],
        wordBank: ['conserve', 'modifie', 'double', 'divise'],
        mode: 'construct'
      }
    ]
  },

  'ch17-s2': {
    questions: [
      { question: "Une rotation tourne autour d'un point", answer: "vrai" },
      { question: "Une rotation conserve les distances", answer: "vrai" },
      { question: "L'angle de rotation est mesuré en degrés ou radians", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Image de M(1,0) par rotation de centre O et angle 90°?',
        answer: 'M\'(0, 1)',
        wrongAnswers: ['M\'(0, -1)', 'M\'(-1, 0)', 'M\'(1, 0)']
      },
      {
        type: 'multiple_choice',
        question: 'Quel angle pour tourner (1,0) vers (0,1)?',
        answer: '90° (ou π/2 radians)',
        wrongAnswers: ['180°', '45°', '270°']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une rotation?',
        answer: 'Transformation qui tourne autour d\'un point',
        wrongAnswers: ['Transformation qui déplace', 'Transformation qui reflète', 'Transformation qui agrandit']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une rotation est une isométrie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une rotation conserve les distances',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'angle de rotation peut être mesuré en degrés ou radians',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une rotation modifie les distances',
        answer: 'faux'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Une rotation tourne autour d\'un:',
        answer: 'point',
        wrongAnswers: ['axe', 'plan', 'vecteur']
      },
      {
        type: 'multiple_choice',
        question: '90° = ? radians',
        answer: 'π/2',
        wrongAnswers: ['π', '2π', 'π/4']
      },
      {
        type: 'multiple_choice',
        question: 'Une rotation _____ les distances',
        answer: 'conserve',
        wrongAnswers: ['modifie', 'double', 'divise']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Image de M(0,1) par rotation de centre O et angle 90°. Glisse la réponse:',
        answer: 'M\'(-1, 0)',
        wordBank: ['M\'(-1, 0)', 'M\'(1, 0)', 'M\'(0, -1)', 'M\'(0, 1)'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building rotation)
      {
        type: 'drag_and_drop',
        question: 'Construis: Une rotation tourne autour d\'un _____',
        answer: ['point'],
        wordBank: ['point', 'droite', 'plan', 'vecteur'],
        mode: 'construct'
      }
    ]
  },

  'ch17-s3': {
    questions: [
      { question: "Une symétrie axiale reflète par rapport à une droite", answer: "vrai" },
      { question: "Une symétrie centrale reflète par rapport à un point", answer: "vrai" },
      { question: "Les symétries sont des isométries", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une symétrie axiale?',
        answer: 'Transformation qui reflète par rapport à une droite',
        wrongAnswers: ['Transformation qui reflète par rapport à un point', 'Transformation qui tourne', 'Transformation qui déplace']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une symétrie centrale?',
        answer: 'Transformation qui reflète par rapport à un point',
        wrongAnswers: ['Transformation qui reflète par rapport à une droite', 'Transformation qui tourne', 'Transformation qui agrandit']
      },
      {
        type: 'multiple_choice',
        question: 'Que sont les symétries?',
        answer: 'Des isométries',
        wrongAnswers: ['Des agrandissements', 'Des translations', 'Des rotations uniquement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les symétries conservent les distances',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une symétrie axiale reflète par rapport à un point',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les symétries sont des isométries',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une symétrie centrale reflète par rapport à un point',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Une symétrie axiale reflète par rapport à une:',
        answer: 'droite',
        wrongAnswers: ['point', 'plan', 'courbe']
      },
      {
        type: 'multiple_choice',
        question: 'Une symétrie centrale reflète par rapport à un:',
        answer: 'point',
        wrongAnswers: ['droite', 'plan', 'axe']
      },
      {
        type: 'multiple_choice',
        question: 'Les symétries sont des:',
        answer: 'isométries',
        wrongAnswers: ['homothéties', 'rotations', 'translations']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'une symétrie axiale? Glisse la réponse:',
        answer: 'Transformation qui reflète par rapport à une droite',
        wordBank: ['Transformation qui reflète par rapport à une droite', 'Transformation qui reflète par rapport à un point', 'Transformation qui tourne', 'Transformation qui déplace'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building symmetry)
      {
        type: 'drag_and_drop',
        question: 'Construis: Une symétrie axiale reflète par rapport à une _____',
        answer: ['droite'],
        wordBank: ['droite', 'point', 'plan', 'vecteur'],
        mode: 'construct'
      }
    ]
  },

  'ch17-s4': {
    questions: [
      { question: "Une section parallèle d'un cône est un disque", answer: "vrai" },
      { question: "Si k = SO'/SO, alors r' = kr", answer: "vrai" },
      { question: "Le volume d'une section est multiplié par k³", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'r = 12, k = 2/3. Rayon de la section?',
        answer: 'r\' = 8cm',
        wrongAnswers: ['r\' = 6cm', 'r\' = 9cm', 'r\' = 18cm']
      },
      {
        type: 'multiple_choice',
        question: 'V = 270cm³, k = 1/3. Volume du petit cône?',
        answer: 'V\' = 10 cm³',
        wrongAnswers: ['V\' = 90 cm³', 'V\' = 30 cm³', 'V\' = 810 cm³']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une section parallèle d\'un cône?',
        answer: 'Un disque',
        wrongAnswers: ['Un rectangle', 'Un triangle', 'Un carré']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un cône tronqué est la portion entre base et section',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si k = SO\'/SO, alors r\' = kr',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le volume d\'une section est multiplié par k²',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le volume d\'une section est multiplié par k³',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si r = 10 et k = 1/2, alors r\' = ?',
        answer: '5',
        wrongAnswers: ['20', '2.5', '15']
      },
      {
        type: 'multiple_choice',
        question: 'Si V = 64 et k = 1/2, alors V\' = ?',
        answer: '8',
        wrongAnswers: ['32', '16', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Le volume est multiplié par k?',
        answer: '³',
        wrongAnswers: ['²', '¹', '⁴']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'r = 15, k = 2/5. Rayon de la section? Glisse la réponse:',
        answer: 'r\' = 6cm',
        wordBank: ['r\' = 6cm', 'r\' = 10cm', 'r\' = 9cm', 'r\' = 12cm'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building section)
      {
        type: 'drag_and_drop',
        question: 'Construis: Si k = SO\'/SO, alors r\' = _____',
        answer: ['kr'],
        wordBank: ['kr', 'r', 'r/k', 'k+r'],
        mode: 'construct'
      }
    ]
  },

  'ch17-s5': {
    questions: [
      { question: "Un solide composé combine plusieurs solides", answer: "vrai" },
      { question: "Pour un solide composé, on additionne les volumes", answer: "vrai" },
      { question: "Un silo peut être cylindre + cône", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Cylindre r = 4, h = 10 + cône r = 4, h = 3. Volume total?',
        answer: 'V = 176π cm³',
        wrongAnswers: ['V = 160π cm³', 'V = 16π cm³', 'V = 192π cm³']
      },
      {
        type: 'multiple_choice',
        question: 'V = 575cm³, densité 0,8g/cm³. Masse?',
        answer: 'Masse = 460g',
        wrongAnswers: ['Masse = 4600g', 'Masse = 46g', 'Masse = 575g']
      },
      {
        type: 'multiple_choice',
        question: 'Comment calcule-t-on le volume d\'un solide composé?',
        answer: 'On additionne les volumes des solides',
        wrongAnswers: ['On multiplie les volumes', 'On soustrait les volumes', 'On prend la moyenne']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un solide composé combine plusieurs solides',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour un solide composé, on multiplie les volumes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un silo peut être cylindre + cône',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour un solide composé, on additionne les volumes',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pour calculer le volume d\'un solide composé, on _____ les volumes',
        answer: 'additionne',
        wrongAnswers: ['multiplie', 'soustrait', 'divise']
      },
      {
        type: 'multiple_choice',
        question: 'Si V = 100 et densité = 0,5, alors masse = ?',
        answer: '50',
        wrongAnswers: ['200', '100', '25']
      },
      {
        type: 'multiple_choice',
        question: 'Un silo peut être _____ + _____',
        answer: 'cylindre, cône',
        wrongAnswers: ['sphère, cube', 'pyramide, prisme', 'cône, pyramide']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'V = 800cm³, densité 0,6g/cm³. Masse? Glisse la réponse:',
        answer: 'Masse = 480g',
        wordBank: ['Masse = 480g', 'Masse = 4800g', 'Masse = 48g', 'Masse = 800g'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building composite solid)
      {
        type: 'drag_and_drop',
        question: 'Construis: Pour un solide composé, on _____ les volumes',
        answer: ['additionne'],
        wordBank: ['additionne', 'multiplie', 'soustrait', 'divise'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 18: RÉVISION ET SYNTHÈSE
  'ch18-s1': {
    questions: [
      { question: "La révision algèbre couvre nombres réels, équations, fonctions", answer: "vrai" },
      { question: "ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ", answer: "vrai" },
      { question: "Les identités remarquables sont importantes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie: √50 + (x+3)²',
        answer: '5√2 + x² + 6x + 9',
        wrongAnswers: ['5√2 + x² + 9', '5√2 + x² + 3x + 9', '√50 + x² + 9']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: |2x-1| = 5',
        answer: 'x = 3 ou x = -2',
        wrongAnswers: ['x = 3', 'x = -2', 'x = 2 ou x = -3']
      },
      {
        type: 'multiple_choice',
        question: 'f(x) = ax + 3, f(2) = 7. Trouve a puis f(5)',
        answer: 'a = 2, f(5) = 13',
        wrongAnswers: ['a = 4, f(5) = 23', 'a = 2, f(5) = 10', 'a = 3, f(5) = 18']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les identités remarquables sont importantes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La révision algèbre couvre uniquement les équations',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La révision algèbre couvre nombres réels, équations, fonctions',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie: (x+5)² = ?',
        answer: 'x² + 10x + 25',
        wrongAnswers: ['x² + 5x + 25', 'x² + 10x + 5', 'x² + 25']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: |3x-2| = 7. x = ? ou x = ?',
        answer: '3, -5/3',
        wrongAnswers: ['3, 5/3', '-3, 5/3', '3, -3']
      },
      {
        type: 'multiple_choice',
        question: 'f(x) = 3x + 4, alors f(2) = ?',
        answer: '10',
        wrongAnswers: ['7', '13', '6']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Résous: |x-3| = 5. Glisse la réponse:',
        answer: 'x = 8 ou x = -2',
        wordBank: ['x = 8 ou x = -2', 'x = 8', 'x = -2', 'x = 2 ou x = -8'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building algebra review)
      {
        type: 'drag_and_drop',
        question: 'Construis: (a+b)² = _____',
        answer: ['a²', '+', '2ab', '+', 'b²'],
        wordBank: ['a²', '+', '2ab', '+', 'b²', '-', 'ab'],
        mode: 'construct'
      }
    ]
  },

  'ch18-s2': {
    questions: [
      { question: "La révision géométrie couvre vecteurs, repères, transformations", answer: "vrai" },
      { question: "AB = √[(xB-xA)² + (yB-yA)²]", answer: "vrai" },
      { question: "Le théorème de Thalès s'applique aux projections", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'A(1,2), B(4,6). Calcule ||AB⃗||',
        answer: '||AB⃗|| = 5',
        wrongAnswers: ['||AB⃗|| = 7', '||AB⃗|| = 3', '||AB⃗|| = 25', '||AB⃗|| = √13']
      },
      {
        type: 'multiple_choice',
        question: 'Droite passant par (0,3) avec m = -2. Équation?',
        answer: 'y = -2x + 3',
        wrongAnswers: ['y = 2x + 3', 'y = -2x - 3', 'y = 2x - 3']
      },
      {
        type: 'multiple_choice',
        question: 'OA = 10, OM = 6, OB = 15. Calcule ON si (MN) ∥ (AB)',
        answer: 'ON = 9',
        wrongAnswers: ['ON = 10', 'ON = 6', 'ON = 15']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'AB = √[(xB-xA)² + (yB-yA)²]',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le théorème de Thalès s\'applique aux projections',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La révision géométrie couvre uniquement les vecteurs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La révision géométrie couvre vecteurs, repères, transformations',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'A(2,3), B(5,7). ||AB⃗|| = ?',
        answer: '5',
        wrongAnswers: ['4', '√13', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Droite passant par (1,2) avec m = 3. Équation: y = ?',
        answer: '3x - 1',
        wrongAnswers: ['3x + 1', '3x + 2', 'x - 1']
      },
      {
        type: 'multiple_choice',
        question: 'AB = √[(xB-xA)² + (? - ?)²]',
        answer: 'yB, yA',
        wrongAnswers: ['yA, yB', 'xB, xA', 'xA, xB']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'A(3,4), B(7,8). Calcule ||AB⃗||. Glisse la réponse:',
        answer: '||AB⃗|| = 5√2',
        wordBank: ['||AB⃗|| = 5√2', '||AB⃗|| = 4', '||AB⃗|| = 5', '||AB⃗|| = 10'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building distance formula)
      {
        type: 'drag_and_drop',
        question: 'Construis: AB = √[(xB-xA)² + (_____ - _____)²]',
        answer: ['yB', 'yA'],
        wordBank: ['yB', 'yA', 'xB', 'xA'],
        mode: 'construct'
      }
    ]
  },

  'ch18-s3': {
    questions: [
      { question: "P(A) = card(A) / card(Ω)", answer: "vrai" },
      { question: "La moyenne x̄ = Σx / n", answer: "vrai" },
      { question: "P(non A) = 1 - P(A)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dé: P(pair OU > 4)?',
        answer: 'P = 2/3',
        wrongAnswers: ['P = 1/2', 'P = 1/3', 'P = 5/6']
      },
      {
        type: 'multiple_choice',
        question: 'Notes: 10,12,14,12,17. Moyenne et médiane?',
        answer: 'Moyenne = 13, médiane = 12',
        wrongAnswers: ['Moyenne = 12, médiane = 13', 'Moyenne = 14, médiane = 12', 'Moyenne = 13, médiane = 14']
      },
      {
        type: 'multiple_choice',
        question: 'Urne: 2/5 rouge, tire 2 fois avec remise. P(RB)?',
        answer: 'P(RB) = 6/25',
        wrongAnswers: ['P(RB) = 2/5', 'P(RB) = 3/5', 'P(RB) = 6/5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'P(A) = card(A) / card(Ω)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La moyenne x̄ = Σx / n',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'P(non A) = 1 + P(A)',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'P(non A) = 1 - P(A)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si P(A) = 0,4, alors P(non A) = ?',
        answer: '0,6',
        wrongAnswers: ['0,4', '1', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Notes: 5, 8, 10, 12, 15. Moyenne = ?',
        answer: '10',
        wrongAnswers: ['8', '12', '9']
      },
      {
        type: 'multiple_choice',
        question: 'La moyenne x̄ = Σx / ?',
        answer: 'n',
        wrongAnswers: ['n-1', 'x', 'Σx']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Notes: 8, 10, 12, 14, 16. Moyenne? Glisse la réponse:',
        answer: 'Moyenne = 12',
        wordBank: ['Moyenne = 12', 'Moyenne = 10', 'Moyenne = 14', 'Moyenne = 16'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building probability)
      {
        type: 'drag_and_drop',
        question: 'Construis: P(non A) = 1 - _____',
        answer: ['P(A)'],
        wordBank: ['P(A)', 'P(B)', '1', '0'],
        mode: 'construct'
      }
    ]
  },

  'ch18-s4': {
    questions: [
      { question: "V_pyramide = ⅓Bh", answer: "vrai" },
      { question: "V_cône = ⅓πr²h", answer: "vrai" },
      { question: "Les sections suivent: longueurs × k, aires × k², volumes × k³", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Base carrée 8cm, h = 12cm. Volume de la pyramide?',
        answer: 'V = 256 cm³',
        wrongAnswers: ['V = 768 cm³', 'V = 192 cm³', 'V = 128 cm³']
      },
      {
        type: 'multiple_choice',
        question: 'Cône: r = 5cm, h = 12cm. Volume?',
        answer: 'V = 100π cm³',
        wrongAnswers: ['V = 300π cm³', 'V = 50π cm³', 'V = 200π cm³']
      },
      {
        type: 'multiple_choice',
        question: 'Cylindre + cône: r = 3, h_cyl = 10, h_cone = 4. Volume total?',
        answer: 'V = 102π cm³',
        wrongAnswers: ['V = 90π cm³', 'V = 12π cm³', 'V = 114π cm³']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'V_pyramide = ⅓Bh',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'V_cône = ⅓πr²h',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les volumes sont multipliés par k² dans une section',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les volumes sont multipliés par k³ dans une section',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'V_pyramide = ⅓ × ? × ?',
        answer: 'B, h',
        wrongAnswers: ['r, h', 'B, r', 'h, B']
      },
      {
        type: 'multiple_choice',
        question: 'V_cône = ⅓ × π × ? × ?',
        answer: 'r², h',
        wrongAnswers: ['r, h', 'r², r', 'h, r²']
      },
      {
        type: 'multiple_choice',
        question: 'Dans une section, les volumes sont multipliés par k?',
        answer: '³',
        wrongAnswers: ['²', '¹', '⁴']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pyramide: base 6cm × 6cm, h = 9cm. Volume? Glisse la réponse:',
        answer: 'V = 108 cm³',
        wordBank: ['V = 108 cm³', 'V = 324 cm³', 'V = 54 cm³', 'V = 216 cm³'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building volume formula)
      {
        type: 'drag_and_drop',
        question: 'Construis: V_pyramide = ⅓ × _____ × h',
        answer: ['B'],
        wordBank: ['B', 'b', 'r²', 'π'],
        mode: 'construct'
      }
    ]
  },

  'ch18-s5': {
    questions: [
      { question: "Les problèmes de synthèse combinent plusieurs chapitres", answer: "vrai" },
      { question: "Il faut toujours vérifier les résultats", answer: "vrai" },
      { question: "La rédaction est importante en examen", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Triangle ABC: A(0,0), B(6,0), C(3,4). Nature et aire?',
        answer: 'Isocèle, aire = 12',
        wrongAnswers: ['Équilatéral, aire = 12', 'Isocèle, aire = 6', 'Rectangle, aire = 12']
      },
      {
        type: 'multiple_choice',
        question: 'Système {2x+y=10; x-y=2}. Solution?',
        answer: 'Solution (4,2)',
        wrongAnswers: ['Solution (3,2)', 'Solution (4,1)', 'Solution (2,4)']
      },
      {
        type: 'multiple_choice',
        question: 'Cône r = 6, h = 8. Si rempli aux 3/4 hauteur, volume eau?',
        answer: 'V_eau ≈ 50,9π cm³',
        wrongAnswers: ['V_eau = 72π cm³', 'V_eau = 96π cm³', 'V_eau = 24π cm³']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les problèmes de synthèse combinent plusieurs chapitres',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Il faut toujours vérifier les résultats',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La rédaction n\'est pas importante en examen',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La rédaction est importante en examen',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les problèmes de synthèse combinent plusieurs:',
        answer: 'chapitres',
        wrongAnswers: ['concepts', 'formules', 'méthodes']
      },
      {
        type: 'multiple_choice',
        question: 'Il faut toujours _____ les résultats',
        answer: 'vérifier',
        wrongAnswers: ['simplifier', 'calculer', 'approximer']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ est importante en examen',
        answer: 'rédaction',
        wrongAnswers: ['vitesse', 'calcul', 'mémoire']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Système {x+y=5; x-y=1}. Solution? Glisse la réponse:',
        answer: 'Solution (3,2)',
        wordBank: ['Solution (3,2)', 'Solution (2,3)', 'Solution (4,1)', 'Solution (1,4)'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building synthesis)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les problèmes de synthèse combinent plusieurs _____',
        answer: ['chapitres'],
        wordBank: ['chapitres', 'formules', 'variables', 'résultats'],
        mode: 'construct'
      }
    ]
  }
};

export default YEAR4_MATH_SECTION_QUESTIONS;