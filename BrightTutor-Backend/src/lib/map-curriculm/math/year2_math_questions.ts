/**
 * Year 2 Math - Questions for Each Section
 * All questions are verifiable and appropriate for app format:
 * - Multiple Choice
 * - True/False (Right or Wrong)
 * - Fill-in-Blank (Typing)
 * - Completion
 *
 * NO drawings, NO file uploads, NO unverifiable questions
 */

export const YEAR2_MATH_SECTION_QUESTIONS: {
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
  // CHAPTER 1: LES ENTIERS RELATIFS
  'ch1-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un nombre positif représente une altitude au-dessus du niveau de la mer", answer: "vrai" },
      { question: "Le niveau de la mer correspond toujours à 0", answer: "vrai" },
      { question: "Tous les nombres négatifs sont inférieurs à tous les nombres positifs", answer: "vrai" },
      { question: "-20m signifie 20m au-dessus du niveau de la mer", answer: "faux" },
      { question: "+38 représente une altitude de 38m au-dessus du niveau de la mer", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un puits de 25m de profondeur s\'écrit:',
        answer: '-25m',
        wrongAnswers: ['+25m', '25m', '0m']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle altitude représente +125m?',
        answer: '125m au-dessus du niveau de la mer',
        wrongAnswers: ['125m en dessous du niveau de la mer', 'Au niveau de la mer', '125m de profondeur']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces altitudes, lesquelles sont positives: +15m, -8m, +32m, -12m?',
        answer: '+15m et +32m',
        wrongAnswers: ['-8m et -12m', 'Toutes', 'Aucune']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la profondeur représentée par -45m?',
        answer: '45m en dessous du niveau de la mer',
        wrongAnswers: ['45m au-dessus du niveau de la mer', 'Au niveau de la mer', '45m de hauteur']
      },
      {
        type: 'multiple_choice',
        question: 'Le niveau de la mer correspond à:',
        answer: '0',
        wrongAnswers: ['+1', '-1', '1']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '-20m signifie 20m au-dessus du niveau de la mer',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un nombre positif est au-dessus du niveau de la mer',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le niveau de la mer correspond à 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les nombres négatifs sont inférieurs à tous les nombres positifs',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un puits de 25m de profondeur s\'écrit:',
        answer: '-25m',
        wrongAnswers: ['+25m', '25m', '0m']
      },
      {
        type: 'multiple_choice',
        question: 'Une altitude de 125m au-dessus du niveau de la mer s\'écrit:',
        answer: '+125m',
        wrongAnswers: ['-125m', '125m', '0m']
      },
      {
        type: 'multiple_choice',
        question: 'Le niveau de la mer correspond à:',
        answer: '0',
        wrongAnswers: ['+1', '-1', '1']
      },
      // Drag and Drop - Ordering (altitudes from lowest to highest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces altitudes du plus bas au plus haut: (-25m), (-15m), (+10m)',
        answer: ['-25', '-15', '+10'], // -25 < -15 < +10
        wordBank: ['-25', '-15', '+10'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un puits de 25m de profondeur s\'écrit: Glisse la réponse:',
        answer: '-25m',
        wordBank: ['+25m', '-25m', '25m', '0m'],
        mode: 'select'
      },
      // Drag and Drop - Selection (classification)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces altitudes, lesquelles sont positives: +15m, -8m, +32m, -12m? Glisse la réponse:',
        answer: '+15m et +32m',
        wordBank: ['-8m et -12m', '+15m et +32m', 'Toutes', 'Aucune'],
        mode: 'select'
      },
      // Drag and Drop - Selection (interpretation)
      {
        type: 'drag_and_drop',
        question: 'Quelle altitude représente +125m? Glisse la réponse:',
        answer: '125m au-dessus du niveau de la mer',
        wordBank: ['125m au-dessus du niveau de la mer', '125m en dessous du niveau de la mer', 'Au niveau de la mer', '125m de profondeur'],
        mode: 'select'
      }
    ]
  },

  'ch1-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les nombres positifs se placent à droite de l'origine O sur la droite numérique", answer: "vrai" },
      { question: "L'origine O correspond toujours au nombre 0", answer: "vrai" },
      { question: "Tous les points sur la droite numérique sont à égale distance de O", answer: "faux" },
      { question: "Le point à 5 unités à gauche de O représente -5", answer: "vrai" },
      { question: "Les nombres négatifs se placent à gauche de l'origine O", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel nombre correspond au point à 6 unités à gauche de O?',
        answer: '-6',
        wrongAnswers: ['+6', '6', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Quel nombre correspond au point à 8 unités à droite de O?',
        answer: '+8',
        wrongAnswers: ['-8', '8', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Où se placent les nombres positifs sur la droite numérique?',
        answer: 'À droite de l\'origine O',
        wrongAnswers: ['À gauche de l\'origine O', 'Sur l\'origine O', 'Au-dessus de l\'origine O']
      },
      {
        type: 'multiple_choice',
        question: 'Le point A(+4) est situé:',
        answer: 'À droite de O',
        wrongAnswers: ['À gauche de O', 'Sur O', 'Au-dessus de O']
      },
      {
        type: 'multiple_choice',
        question: 'Le point B(-7) est situé:',
        answer: 'À gauche de O',
        wrongAnswers: ['À droite de O', 'Sur O', 'Au-dessus de O']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le point A(+4) est à droite de O',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les points sur la droite numérique sont à égale distance de O',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'origine O correspond au nombre 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les nombres négatifs se placent à gauche de l\'origine O',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le point à 3 unités à droite de O représente:',
        answer: '+3',
        wrongAnswers: ['-3', '3', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Le point à 6 unités à gauche de O représente:',
        answer: '-6',
        wrongAnswers: ['+6', '6', '0']
      },
      {
        type: 'multiple_choice',
        question: 'L\'origine O correspond au nombre:',
        answer: '0',
        wrongAnswers: ['+1', '-1', '1']
      },
      // Drag and Drop - Ordering (numbers from left to right on number line)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres de gauche à droite sur la droite numérique: (-5), (0), (+3)',
        answer: ['-5', '0', '+3'], // Left to right: -5 < 0 < +3
        wordBank: ['-5', '0', '+3'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel nombre correspond au point à 6 unités à gauche de O? Glisse la réponse:',
        answer: '-6',
        wordBank: ['+6', '-6', '6', '0'],
        mode: 'select'
      },
      // Drag and Drop - Selection (position)
      {
        type: 'drag_and_drop',
        question: 'Où se placent les nombres positifs sur la droite numérique? Glisse la réponse:',
        answer: 'À droite de l\'origine O',
        wordBank: ['À gauche de l\'origine O', 'À droite de l\'origine O', 'Sur l\'origine O', 'Au-dessus de l\'origine O'],
        mode: 'select'
      },
      // Drag and Drop - Selection (location)
      {
        type: 'drag_and_drop',
        question: 'Le point A(+4) est situé: Glisse la réponse:',
        answer: 'À droite de O',
        wordBank: ['À gauche de O', 'À droite de O', 'Sur O', 'Au-dessus de O'],
        mode: 'select'
      }
    ]
  },

  'ch1-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Tout entier positif est plus grand qu'un entier négatif", answer: "vrai" },
      { question: "Tous les nombres négatifs sont plus grands que tous les nombres positifs", answer: "faux" },
      { question: "+5 > -8 car tout positif est supérieur à tout négatif", answer: "vrai" },
      { question: "-4 > -9 car -4 est plus proche de 0 que -9", answer: "vrai" },
      { question: "Pour comparer deux nombres négatifs, le plus grand est celui le plus proche de 0", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Compare: +12 et -15. Quel est le plus grand?',
        answer: '+12',
        wrongAnswers: ['-15', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Range dans l\'ordre croissant: -8, +3, -2, +7',
        answer: '-8 < -2 < +3 < +7',
        wrongAnswers: ['+3 < +7 < -8 < -2', '-2 < -8 < +3 < +7', '+7 < +3 < -2 < -8']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le plus grand entre -5 et -3?',
        answer: '-3',
        wrongAnswers: ['-5', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le plus petit entre +15 et -20?',
        answer: '-20',
        wrongAnswers: ['+15', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Range dans l\'ordre décroissant: -5, +2, -8, +10',
        answer: '+10 > +2 > -5 > -8',
        wrongAnswers: ['-8 > -5 > +2 > +10', '+2 > +10 > -5 > -8', '-5 > -8 > +2 > +10']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '-5 < -3',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les nombres négatifs sont plus grands que tous les nombres positifs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '+5 > -8',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour comparer deux nombres négatifs, le plus grand est celui le plus proche de 0',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Compare: +12 et -15. Quel est le plus grand?',
        answer: '+12',
        wrongAnswers: ['-15', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Range dans l\'ordre croissant: -8, +3, -2, +7',
        answer: '-8 < -2 < +3 < +7',
        wrongAnswers: ['-8 < +3 < -2 < +7', '+7 < +3 < -2 < -8', '-2 < -8 < +3 < +7']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le plus grand entre -5 et -3?',
        answer: '-3',
        wrongAnswers: ['-5', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      // Drag and Drop - Ordering (numbers from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres du plus petit au plus grand: (-8), (-2), (+3)',
        answer: ['-8', '-2', '+3'], // -8 < -2 < +3
        wordBank: ['-8', '-2', '+3'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Compare: +12 et -15. Quel est le plus grand? Glisse la réponse:',
        answer: '+12',
        wordBank: ['-15', '+12', 'Ils sont égaux', 'On ne peut pas comparer'],
        mode: 'select'
      },
      // Drag and Drop - Selection (ordering)
      {
        type: 'drag_and_drop',
        question: 'Range dans l\'ordre croissant: -8, +3, -2, +7. Glisse la réponse:',
        answer: '-8 < -2 < +3 < +7',
        wordBank: ['-8 < -2 < +3 < +7', '+3 < +7 < -8 < -2', '-2 < -8 < +3 < +7', '+7 < +3 < -2 < -8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison)
      {
        type: 'drag_and_drop',
        question: 'Quel est le plus grand entre -5 et -3? Glisse la réponse:',
        answer: '-3',
        wordBank: ['-5', '-3', 'Ils sont égaux', 'On ne peut pas comparer'],
        mode: 'select'
      }
    ]
  },

  'ch1-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Pour additionner deux nombres de même signe, on additionne les distances à zéro et on garde le signe", answer: "vrai" },
      { question: "Pour additionner deux nombres de signes différents, on soustrait les distances à zéro et on garde le signe du plus grand", answer: "vrai" },
      { question: "Toutes les additions de nombres relatifs donnent toujours un résultat positif", answer: "faux" },
      { question: "(+37) + (+14) = +51", answer: "vrai" },
      { question: "(+98) + (-64) = +34", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: (+25) + (+17)',
        answer: '+42',
        wrongAnswers: ['+8', '-42', '+32']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+45) + (-30)',
        answer: '+15',
        wrongAnswers: ['+75', '-15', '-75']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-20) + (-15)',
        answer: '-35',
        wrongAnswers: ['-5', '+35', '+5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-125) + (+75)',
        answer: '-50',
        wrongAnswers: ['-200', '+200', '+50']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+150) + (-200)',
        answer: '-50',
        wrongAnswers: ['+350', '-350', '+50']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Pour additionner deux nombres de même signe, on additionne les distances à zéro',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les additions de nombres relatifs donnent toujours un résultat positif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '(+37) + (+14) = +51',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour additionner deux nombres de signes différents, on soustrait les distances à zéro',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: (+25) + (+17) = ?',
        answer: '+42',
        wrongAnswers: ['+8', '-42', '+32']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+45) + (-30) = ?',
        answer: '+15',
        wrongAnswers: ['+75', '-15', '-75']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-20) + (-15) = ?',
        answer: '-35',
        wrongAnswers: ['-5', '+35', '+5']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (-35), (+15), (+42)',
        answer: ['-35', '+15', '+42'], // -35 < +15 < +42
        wordBank: ['-35', '+15', '+42'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (+25) + (+17). Glisse le résultat:',
        answer: '+42',
        wordBank: ['+8', '+42', '-42', '+32'],
        mode: 'select'
      },
      // Drag and Drop - Selection (addition with different signs)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (+45) + (-30). Glisse le résultat:',
        answer: '+15',
        wordBank: ['+75', '+15', '-15', '-75'],
        mode: 'select'
      },
      // Drag and Drop - Selection (addition with same negative signs)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (-20) + (-15). Glisse le résultat:',
        answer: '-35',
        wordBank: ['-5', '-35', '+35', '+5'],
        mode: 'select'
      }
    ]
  },

  'ch1-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Soustraire un nombre négatif revient à additionner son opposé", answer: "vrai" },
      { question: "Toutes les soustractions de nombres relatifs donnent toujours un résultat négatif", answer: "faux" },
      { question: "38 - (-20) = 58 car soustraire -20 revient à additionner +20", answer: "vrai" },
      { question: "La différence d'altitude se calcule par soustraction", answer: "vrai" },
      { question: "35 - (-5) = 40", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: 38 - (-20)',
        answer: '58',
        wrongAnswers: ['18', '-18', '-58']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 35 - (-5)',
        answer: '40',
        wrongAnswers: ['30', '-30', '-40']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 25 - (-15)',
        answer: '40',
        wrongAnswers: ['10', '-10', '-40']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la différence d\'altitude entre +38m et -20m:',
        answer: '58m',
        wrongAnswers: ['18m', '-18m', '-58m']
      },
      {
        type: 'multiple_choice',
        question: 'Température: -5°C le matin, +35°C l\'après-midi. Quelle est l\'augmentation?',
        answer: '40°C',
        wrongAnswers: ['30°C', '-30°C', '-40°C']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Soustraire un nombre négatif revient à additionner son opposé',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les soustractions de nombres relatifs donnent toujours un résultat négatif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '38 - (-20) = 58',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La différence d\'altitude se calcule par soustraction',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 38 - (-20) = ?',
        answer: '58',
        wrongAnswers: ['18', '-58', '-18']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 35 - (-5) = ?',
        answer: '40',
        wrongAnswers: ['30', '-40', '-30']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la différence d\'altitude entre +38m et -20m:',
        answer: '58 m',
        wrongAnswers: ['18 m', '-58 m', '38 m']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (18), (40), (58)',
        answer: ['18', '40', '58'], // 18 < 40 < 58
        wordBank: ['18', '40', '58'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 38 - (-20). Glisse le résultat:',
        answer: '58',
        wordBank: ['18', '58', '-18', '-58'],
        mode: 'select'
      },
      // Drag and Drop - Selection (temperature calculation)
      {
        type: 'drag_and_drop',
        question: 'Température: -5°C le matin, +35°C l\'après-midi. Quelle est l\'augmentation? Glisse la réponse:',
        answer: '40',
        wordBank: ['30', '40', '-30', '-40'],
        mode: 'select'
      },
      // Drag and Drop - Selection (altitude difference)
      {
        type: 'drag_and_drop',
        question: 'Calcule la différence d\'altitude entre +38m et -20m. Glisse la réponse:',
        answer: '58',
        wordBank: ['18', '58', '-18', '-58'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 2: LES DÉCIMAUX RELATIFS 1
  'ch2-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un bilan positif s'écrit avec le signe + et indique un bénéfice", answer: "vrai" },
      { question: "Tous les bilans financiers sont toujours positifs", answer: "faux" },
      { question: "+31,8 MRU signifie un bénéfice de 31,8 milliers d'ouguiyas", answer: "vrai" },
      { question: "-1,7 MRU signifie une perte de 1,7 milliers d'ouguiyas", answer: "vrai" },
      { question: "Un solde de 0 MRU signifie équilibre entre recettes et dépenses", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Bilan: recettes 73,8 MRU, dépenses 42,0 MRU. Quel est le solde?',
        answer: '+31,8 MRU',
        wrongAnswers: ['-31,8 MRU', '+115,8 MRU', '-115,8 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Bilan: recettes 97,2 MRU, dépenses 99,9 MRU. Quel est le solde?',
        answer: '-1,7 MRU',
        wrongAnswers: ['+1,7 MRU', '+197,1 MRU', '-197,1 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Bilan: recettes 125,5 MRU, dépenses 95,3 MRU. Quel est le solde?',
        answer: '+30,2 MRU',
        wrongAnswers: ['-30,2 MRU', '+220,8 MRU', '-220,8 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Que signifie un solde de +50,5 MRU?',
        answer: 'Un bénéfice de 50,5 milliers d\'ouguiyas',
        wrongAnswers: ['Une perte de 50,5 milliers d\'ouguiyas', 'Un équilibre', 'Une dépense de 50,5 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Que signifie un solde de -25,3 MRU?',
        answer: 'Une perte de 25,3 milliers d\'ouguiyas',
        wrongAnswers: ['Un bénéfice de 25,3 milliers d\'ouguiyas', 'Un équilibre', 'Une recette de 25,3 MRU']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un solde de 0 MRU signifie équilibre',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les bilans financiers sont toujours positifs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un bilan positif s\'écrit avec le signe +',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '-1,7 MRU signifie une perte',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Bilan: recettes 73,8 MRU, dépenses 42,0 MRU. Le solde est:',
        answer: '+31,8 MRU',
        wrongAnswers: ['-31,8 MRU', '+115,8 MRU', '-115,8 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Bilan: recettes 97,2 MRU, dépenses 99,9 MRU. Le solde est:',
        answer: '-1,7 MRU',
        wrongAnswers: ['+1,7 MRU', '+197,1 MRU', '-197,1 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Un solde de 0 MRU signifie:',
        answer: 'équilibre',
        wrongAnswers: ['bénéfice', 'déficit', 'perte']
      },
      // Drag and Drop - Ordering (balances from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces soldes du plus petit au plus grand: (-1,7), (0), (+31,8)',
        answer: ['-1,7', '0', '+31,8'], // -1,7 < 0 < +31,8
        wordBank: ['-1,7', '0', '+31,8'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Bilan: recettes 73,8 MRU, dépenses 42,0 MRU. Quel est le solde? Glisse la réponse:',
        answer: '+31,8 MRU',
        wordBank: ['-31,8 MRU', '+31,8 MRU', '+115,8 MRU', '-115,8 MRU'],
        mode: 'select'
      },
      // Drag and Drop - Selection (interpretation)
      {
        type: 'drag_and_drop',
        question: 'Que signifie un solde de +50,5 MRU? Glisse la réponse:',
        answer: 'Un bénéfice de 50,5 milliers d\'ouguiyas',
        wordBank: ['Une perte de 50,5 milliers d\'ouguiyas', 'Un bénéfice de 50,5 milliers d\'ouguiyas', 'Un équilibre', 'Une dépense de 50,5 MRU'],
        mode: 'select'
      },
      // Drag and Drop - Selection (calculation)
      {
        type: 'drag_and_drop',
        question: 'Bilan: recettes 125,5 MRU, dépenses 95,3 MRU. Quel est le solde? Glisse la réponse:',
        answer: '+30,2 MRU',
        wordBank: ['-30,2 MRU', '+30,2 MRU', '+220,8 MRU', '-220,8 MRU'],
        mode: 'select'
      }
    ]
  },

  'ch2-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les décimaux relatifs peuvent être positifs ou négatifs", answer: "vrai" },
      { question: "Tous les nombres décimaux sont toujours positifs", answer: "faux" },
      { question: "+2,5 est un décimal relatif positif", answer: "vrai" },
      { question: "-3,7 est un décimal relatif négatif", answer: "vrai" },
      { question: "On peut comparer les décimaux relatifs comme les entiers relatifs", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces nombres, lesquels sont positifs: +2,5; -3,7; +0,8; -1,2?',
        answer: '+2,5 et +0,8',
        wrongAnswers: ['-3,7 et -1,2', 'Tous', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Compare: +0,5 et -0,5. Quel est le plus grand?',
        answer: '+0,5',
        wrongAnswers: ['-0,5', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Range dans l\'ordre croissant: -3,7; +0,8; -1,2; +2,5',
        answer: '-3,7 < -1,2 < +0,8 < +2,5',
        wrongAnswers: ['+2,5 < +0,8 < -1,2 < -3,7', '-1,2 < -3,7 < +0,8 < +2,5', '+0,8 < +2,5 < -3,7 < -1,2']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le plus petit entre -2,5 et -1,5?',
        answer: '-2,5',
        wrongAnswers: ['-1,5', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Un décimal relatif négatif s\'écrit avec quel signe?',
        answer: 'Le signe -',
        wrongAnswers: ['Le signe +', 'Sans signe', 'Le signe ×']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '+0,5 > -0,5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les nombres décimaux sont toujours positifs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '+2,5 est un décimal relatif positif',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut comparer les décimaux relatifs comme les entiers relatifs',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un décimal relatif négatif s\'écrit avec le signe:',
        answer: '-',
        wrongAnswers: ['+', '×', '÷']
      },
      {
        type: 'multiple_choice',
        question: 'Compare: +0,5 et -0,5. Le plus grand est:',
        answer: '+0,5',
        wrongAnswers: ['-0,5', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Range dans l\'ordre croissant: -3,7; +0,8; -1,2; +2,5',
        answer: '-3,7 < -1,2 < +0,8 < +2,5',
        wrongAnswers: ['-3,7 < +0,8 < -1,2 < +2,5', '+2,5 < +0,8 < -1,2 < -3,7', '-1,2 < -3,7 < +0,8 < +2,5']
      },
      // Drag and Drop - Ordering (decimals from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres décimaux du plus petit au plus grand: (-3,7), (-1,2), (+0,8)',
        answer: ['-3,7', '-1,2', '+0,8'], // -3,7 < -1,2 < +0,8
        wordBank: ['-3,7', '-1,2', '+0,8'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Compare: +0,5 et -0,5. Quel est le plus grand? Glisse la réponse:',
        answer: '+0,5',
        wordBank: ['-0,5', '+0,5', 'Ils sont égaux', 'On ne peut pas comparer'],
        mode: 'select'
      },
      // Drag and Drop - Selection (classification)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces nombres, lesquels sont positifs: +2,5; -3,7; +0,8; -1,2? Glisse la réponse:',
        answer: '+2,5 et +0,8',
        wordBank: ['-3,7 et -1,2', '+2,5 et +0,8', 'Tous', 'Aucun'],
        mode: 'select'
      },
      // Drag and Drop - Selection (ordering)
      {
        type: 'drag_and_drop',
        question: 'Range dans l\'ordre croissant: -3,7; +0,8; -1,2; +2,5. Glisse la réponse:',
        answer: '-3,7 < -1,2 < +0,8 < +2,5',
        wordBank: ['-3,7 < -1,2 < +0,8 < +2,5', '+2,5 < +0,8 < -1,2 < -3,7', '-1,2 < -3,7 < +0,8 < +2,5', '+0,8 < +2,5 < -3,7 < -1,2'],
        mode: 'select'
      }
    ]
  },

  'ch2-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut additionner des décimaux relatifs en utilisant les mêmes règles que pour les entiers relatifs", answer: "vrai" },
      { question: "Toutes les additions de décimaux relatifs donnent toujours un résultat positif", answer: "faux" },
      { question: "(+2,5) + (+1,3) = +3,8", answer: "vrai" },
      { question: "(+4,2) + (-2,1) = +2,1", answer: "vrai" },
      { question: "Pour additionner deux décimaux de même signe, on additionne les valeurs absolues", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: (+2,5) + (+1,3)',
        answer: '+3,8',
        wrongAnswers: ['+1,2', '-3,8', '+3,2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+4,2) + (-2,1)',
        answer: '+2,1',
        wrongAnswers: ['+6,3', '-2,1', '-6,3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-3,5) + (-1,2)',
        answer: '-4,7',
        wrongAnswers: ['-2,3', '+4,7', '+2,3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-12,5) + (+7,3)',
        answer: '-5,2',
        wrongAnswers: ['-19,8', '+19,8', '+5,2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+15,8) + (-20,5)',
        answer: '-4,7',
        wrongAnswers: ['+36,3', '-36,3', '+4,7']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut additionner des décimaux relatifs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les additions de décimaux relatifs donnent toujours un résultat positif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '(+2,5) + (+1,3) = +3,8',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour additionner deux décimaux de même signe, on additionne les valeurs absolues',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: (+2,5) + (+1,3) = ?',
        answer: '+3,8',
        wrongAnswers: ['+1,2', '-3,8', '+3,2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+4,2) + (-2,1) = ?',
        answer: '+2,1',
        wrongAnswers: ['+6,3', '-2,1', '-6,3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-3,5) + (-1,2) = ?',
        answer: '-4,7',
        wrongAnswers: ['-2,3', '+4,7', '+2,3']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (-4,7), (+2,1), (+3,8)',
        answer: ['-4,7', '+2,1', '+3,8'], // -4,7 < +2,1 < +3,8
        wordBank: ['-4,7', '+2,1', '+3,8'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (+2,5) + (+1,3). Glisse le résultat:',
        answer: '+3,8',
        wordBank: ['+1,2', '+3,8', '-3,8', '+3,2'],
        mode: 'select'
      },
      // Drag and Drop - Selection (addition with different signs)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (+4,2) + (-2,1). Glisse le résultat:',
        answer: '+2,1',
        wordBank: ['+6,3', '+2,1', '-2,1', '-6,3'],
        mode: 'select'
      },
      // Drag and Drop - Selection (addition with same negative signs)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (-3,5) + (-1,2). Glisse le résultat:',
        answer: '-4,7',
        wordBank: ['-2,3', '-4,7', '+4,7', '+2,3'],
        mode: 'select'
      }
    ]
  },

  'ch2-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut soustraire des décimaux relatifs en utilisant les mêmes règles que pour les entiers relatifs", answer: "vrai" },
      { question: "Toutes les soustractions de décimaux relatifs donnent toujours un résultat négatif", answer: "faux" },
      { question: "(+5,3) - (+2,1) = +3,2", answer: "vrai" },
      { question: "(+4,2) - (-1,5) = +5,7 car soustraire un négatif revient à additionner", answer: "vrai" },
      { question: "Soustraire un décimal négatif revient à additionner son opposé positif", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: (+5,3) - (+2,1)',
        answer: '+3,2',
        wrongAnswers: ['+7,4', '-3,2', '-7,4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+4,2) - (-1,5)',
        answer: '+5,7',
        wrongAnswers: ['+2,7', '-5,7', '-2,7']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-3,8) - (-1,2)',
        answer: '-2,6',
        wrongAnswers: ['-5,0', '+2,6', '+5,0']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-12,5) - (-7,3)',
        answer: '-5,2',
        wrongAnswers: ['-19,8', '+5,2', '+19,8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+15,8) - (+20,5)',
        answer: '-4,7',
        wrongAnswers: ['+36,3', '-36,3', '+4,7']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut soustraire des décimaux relatifs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les soustractions de décimaux relatifs donnent toujours un résultat négatif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '(+5,3) - (+2,1) = +3,2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Soustraire un décimal négatif revient à additionner son opposé positif',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: (+5,3) - (+2,1) = ?',
        answer: '+3,2',
        wrongAnswers: ['+7,4', '-3,2', '+3,4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+4,2) - (-1,5) = ?',
        answer: '+5,7',
        wrongAnswers: ['+2,7', '-5,7', '-2,7']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (-3,8) - (-1,2) = ?',
        answer: '-2,6',
        wrongAnswers: ['-5,0', '+2,6', '-4,0']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (-2,6), (+3,2), (+5,7)',
        answer: ['-2,6', '+3,2', '+5,7'], // -2,6 < +3,2 < +5,7
        wordBank: ['-2,6', '+3,2', '+5,7'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (+5,3) - (+2,1). Glisse le résultat:',
        answer: '+3,2',
        wordBank: ['+7,4', '+3,2', '-3,2', '-7,4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (subtraction with negative)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (+4,2) - (-1,5). Glisse le résultat:',
        answer: '+5,7',
        wordBank: ['+2,7', '+5,7', '-5,7', '-2,7'],
        mode: 'select'
      },
      // Drag and Drop - Selection (subtraction with same negative signs)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (-3,8) - (-1,2). Glisse le résultat:',
        answer: '-2,6',
        wordBank: ['-5,0', '-2,6', '+2,6', '+5,0'],
        mode: 'select'
      }
    ]
  },

  'ch2-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les décimaux relatifs s'utilisent dans les bilans financiers pour représenter bénéfices et pertes", answer: "vrai" },
      { question: "Tous les bilans financiers sont toujours positifs", answer: "faux" },
      { question: "Un solde positif indique un bénéfice", answer: "vrai" },
      { question: "Un solde négatif indique une perte", answer: "vrai" },
      { question: "Pour calculer le total d'un bilan, on additionne tous les soldes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Bilan hebdomadaire: +31,8; -1,7; 0; +1,47; +44,8; -2,0. Quel est le total?',
        answer: '+74,33 MRU',
        wrongAnswers: ['+80,17 MRU', '+68,50 MRU', '-74,33 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+31,8) + (-1,7) + (+1,47)',
        answer: '+31,57',
        wrongAnswers: ['+34,97', '-31,57', '+29,37']
      },
      {
        type: 'multiple_choice',
        question: 'Que signifie un solde positif dans un bilan financier?',
        answer: 'Un bénéfice',
        wrongAnswers: ['Une perte', 'Un équilibre', 'Une dépense']
      },
      {
        type: 'multiple_choice',
        question: 'Que signifie un solde négatif dans un bilan financier?',
        answer: 'Une perte',
        wrongAnswers: ['Un bénéfice', 'Un équilibre', 'Une recette']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+25,5) + (-15,2) + (+8,7)',
        answer: '+19,0',
        wrongAnswers: ['+49,4', '-19,0', '+18,0']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un solde positif indique un bénéfice',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les bilans financiers sont toujours positifs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un solde négatif indique une perte',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour calculer le total d\'un bilan, on additionne tous les soldes',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Bilan hebdomadaire: +31,8; -1,7; 0; +1,47; +44,8; -2,0. Le total est:',
        answer: '+74,33 MRU',
        wrongAnswers: ['-74,33 MRU', '+80,77 MRU', '-80,77 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (+31,8) + (-1,7) + (+1,47) = ?',
        answer: '+31,57',
        wrongAnswers: ['+34,97', '-31,57', '+29,17']
      },
      {
        type: 'multiple_choice',
        question: 'Un solde positif indique un:',
        answer: 'bénéfice',
        wrongAnswers: ['déficit', 'équilibre', 'perte']
      },
      // Drag and Drop - Ordering (balances from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces soldes du plus petit au plus grand: (-2,0), (0), (+31,8)',
        answer: ['-2,0', '0', '+31,8'], // -2,0 < 0 < +31,8
        wordBank: ['-2,0', '0', '+31,8'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Bilan hebdomadaire: +31,8; -1,7; 0; +1,47; +44,8; -2,0. Quel est le total? Glisse la réponse:',
        answer: '+74,33 MRU',
        wordBank: ['+80,17 MRU', '+74,33 MRU', '+68,50 MRU', '-74,33 MRU'],
        mode: 'select'
      },
      // Drag and Drop - Selection (calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (+31,8) + (-1,7) + (+1,47). Glisse le résultat:',
        answer: '+31,57',
        wordBank: ['+34,97', '+31,57', '-31,57', '+29,37'],
        mode: 'select'
      },
      // Drag and Drop - Selection (interpretation)
      {
        type: 'drag_and_drop',
        question: 'Que signifie un solde positif dans un bilan financier? Glisse la réponse:',
        answer: 'Un bénéfice',
        wordBank: ['Une perte', 'Un bénéfice', 'Un équilibre', 'Une dépense'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 3: LES PUISSANCES
  'ch3-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "5² = 25 signifie que 5 multiplié par lui-même donne 25", answer: "vrai" },
      { question: "Toutes les puissances de nombres positifs sont toujours négatives", answer: "faux" },
      { question: "4³ = 64 signifie que 4 × 4 × 4 = 64", answer: "vrai" },
      { question: "2⁵ = 32 signifie que 2 multiplié 5 fois par lui-même donne 32", answer: "vrai" },
      { question: "Dans 5², le nombre 2 est appelé l'exposant", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule 4²',
        answer: '16',
        wrongAnswers: ['8', '12', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 3³',
        answer: '27',
        wrongAnswers: ['9', '12', '81']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 2⁴',
        answer: '16',
        wrongAnswers: ['8', '12', '32']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 5²',
        answer: '25',
        wrongAnswers: ['10', '15', '50']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 6²',
        answer: '36',
        wrongAnswers: ['12', '18', '72']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '7² = 49',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les puissances de nombres positifs sont toujours négatives',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Dans 5², le nombre 2 est appelé l\'exposant',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '3³ = 27',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule 4² = ?',
        answer: '16',
        wrongAnswers: ['8', '12', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 3³ = ?',
        answer: '27',
        wrongAnswers: ['9', '81', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 2⁴ = ?',
        answer: '16',
        wrongAnswers: ['8', '32', '4']
      },
      // Drag and Drop - Ordering (powers from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces puissances du plus petit au plus grand: 2², 3², 4²',
        answer: ['4', '9', '16'], // 2²=4, 3²=9, 4²=16
        wordBank: ['4', '9', '16'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule 4². Glisse le résultat:',
        answer: '16',
        wordBank: ['8', '12', '16', '20'],
        mode: 'select'
      },
      // Drag and Drop - Selection (power calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule 3³. Glisse le résultat:',
        answer: '27',
        wordBank: ['9', '12', '27', '81'],
        mode: 'select'
      },
      // Drag and Drop - Selection (power calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule 5². Glisse le résultat:',
        answer: '25',
        wordBank: ['10', '15', '25', '50'],
        mode: 'select'
      }
    ]
  },

  'ch3-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "5⁻² = 1/25 = 0,04 signifie qu'une puissance négative est l'inverse de la puissance positive", answer: "vrai" },
      { question: "Toutes les puissances négatives donnent toujours un résultat négatif", answer: "faux" },
      { question: "2⁻³ = 1/8 = 0,125 signifie que 2⁻³ est l'inverse de 2³", answer: "vrai" },
      { question: "a⁻ⁿ = 1/aⁿ pour a ≠ 0 est la règle des puissances négatives", answer: "vrai" },
      { question: "Une puissance négative transforme un nombre en son inverse", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule 2⁻³',
        answer: '1/8 ou 0,125',
        wrongAnswers: ['-8', '8', '-1/8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 4⁻²',
        answer: '1/16 ou 0,0625',
        wrongAnswers: ['-16', '16', '-1/16']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 3⁻²',
        answer: '1/9',
        wrongAnswers: ['-9', '9', '-1/9']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 5⁻²',
        answer: '1/25 ou 0,04',
        wrongAnswers: ['-25', '25', '-1/25']
      },
      {
        type: 'multiple_choice',
        question: 'Que signifie a⁻ⁿ pour a ≠ 0?',
        answer: '1/aⁿ',
        wrongAnswers: ['-aⁿ', 'aⁿ', '1/(-aⁿ)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Toutes les puissances négatives donnent toujours un résultat négatif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '2⁻³ = 1/8',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une puissance négative transforme un nombre en son inverse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '5⁻² = 1/25',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule 2⁻³ = ?',
        answer: '1/8',
        wrongAnswers: ['1/6', '1/9', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 4⁻² = ?',
        answer: '1/16',
        wrongAnswers: ['1/8', '1/4', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 3⁻² = ?',
        answer: '1/9',
        wrongAnswers: ['1/6', '1/3', '9']
      },
      // Drag and Drop - Ordering (negative powers from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: 1/25, 1/16, 1/9',
        answer: ['1/25', '1/16', '1/9'], // 0,04 < 0,0625 < 0,111...
        wordBank: ['1/25', '1/16', '1/9'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule 2⁻³. Glisse le résultat:',
        answer: '1/8',
        wordBank: ['-8', '8', '1/8', '-1/8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (negative power calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule 4⁻². Glisse le résultat:',
        answer: '1/16',
        wordBank: ['-16', '16', '1/16', '-1/16'],
        mode: 'select'
      },
      // Drag and Drop - Selection (rule)
      {
        type: 'drag_and_drop',
        question: 'Que signifie a⁻ⁿ pour a ≠ 0? Glisse la réponse:',
        answer: '1/aⁿ',
        wordBank: ['-aⁿ', 'aⁿ', '1/aⁿ', '1/(-aⁿ)'],
        mode: 'select'
      }
    ]
  },

  'ch3-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "5² × 5³ = 5⁵ = 3125 car on additionne les exposants lors de la multiplication", answer: "vrai" },
      { question: "Toutes les multiplications de puissances de même base donnent toujours un résultat plus grand", answer: "faux" },
      { question: "5⁵ ÷ 5² = 5³ = 125 car on soustrait les exposants lors de la division", answer: "vrai" },
      { question: "(5²)³ = 5⁶ = 15625 car on multiplie les exposants lors de l'élévation à une puissance", answer: "vrai" },
      { question: "Pour multiplier des puissances de même base, on additionne les exposants", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule 2³ × 2⁴',
        answer: '2⁷ = 128',
        wrongAnswers: ['2¹² = 4096', '2⁶ = 64', '2⁵ = 32']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule (3²)³',
        answer: '3⁶ = 729',
        wrongAnswers: ['3⁵ = 243', '3⁸ = 6561', '3⁴ = 81']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 4² × 4³',
        answer: '4⁵ = 1024',
        wrongAnswers: ['4⁶ = 4096', '4⁴ = 256', '4⁷ = 16384']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 5⁵ ÷ 5²',
        answer: '5³ = 125',
        wrongAnswers: ['5⁷ = 78125', '5² = 25', '5⁴ = 625']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule (2³)²',
        answer: '2⁶ = 64',
        wrongAnswers: ['2⁵ = 32', '2⁹ = 512', '2⁴ = 16']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Pour multiplier des puissances de même base, on additionne les exposants',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les multiplications de puissances de même base donnent toujours un résultat plus grand',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '5² × 5³ = 5⁵',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour diviser des puissances de même base, on soustrait les exposants',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule 2³ × 2⁴ = ?',
        answer: '2⁷',
        wrongAnswers: ['2¹²', '4⁷', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule (3²)³ = ?',
        answer: '3⁶',
        wrongAnswers: ['3⁵', '9³', '3²']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 5⁵ ÷ 5² = ?',
        answer: '5³',
        wrongAnswers: ['5⁷', '5²', '5']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: 64, 125, 128',
        answer: ['64', '125', '128'], // 64 < 125 < 128
        wordBank: ['64', '125', '128'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule 2³ × 2⁴. Glisse le résultat:',
        answer: '2⁷ = 128',
        wordBank: ['2¹² = 4096', '2⁷ = 128', '2⁶ = 64', '2⁵ = 32'],
        mode: 'select'
      },
      // Drag and Drop - Selection (power of a power)
      {
        type: 'drag_and_drop',
        question: 'Calcule (3²)³. Glisse le résultat:',
        answer: '3⁶ = 729',
        wordBank: ['3⁵ = 243', '3⁶ = 729', '3⁸ = 6561', '3⁴ = 81'],
        mode: 'select'
      },
      // Drag and Drop - Selection (division of powers)
      {
        type: 'drag_and_drop',
        question: 'Calcule 5⁵ ÷ 5². Glisse le résultat:',
        answer: '5³ = 125',
        wordBank: ['5⁷ = 78125', '5³ = 125', '5² = 25', '5⁴ = 625'],
        mode: 'select'
      }
    ]
  },

  'ch3-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "661 870 000 000 = 6,6187 × 10¹¹ est la notation scientifique de ce grand nombre", answer: "vrai" },
      { question: "Tous les nombres peuvent être écrits en notation scientifique avec un exposant positif", answer: "faux" },
      { question: "0,0003022 = 3,022 × 10⁻⁴ est la notation scientifique de ce petit nombre", answer: "vrai" },
      { question: "La notation scientifique utilise une puissance de 10 pour simplifier l'écriture des nombres", answer: "vrai" },
      { question: "En notation scientifique, le nombre avant la puissance de 10 est entre 1 et 10", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Écris 45 000 000 en notation scientifique',
        answer: '4,5 × 10⁷',
        wrongAnswers: ['45 × 10⁶', '4,5 × 10⁶', '45 × 10⁷']
      },
      {
        type: 'multiple_choice',
        question: 'Écris 0,0000078 en notation scientifique',
        answer: '7,8 × 10⁻⁶',
        wrongAnswers: ['78 × 10⁻⁷', '7,8 × 10⁻⁷', '0,78 × 10⁻⁵']
      },
      {
        type: 'multiple_choice',
        question: 'Écris 123 000 000 en notation scientifique',
        answer: '1,23 × 10⁸',
        wrongAnswers: ['12,3 × 10⁷', '1,23 × 10⁷', '123 × 10⁶']
      },
      {
        type: 'multiple_choice',
        question: 'Écris 0,000045 en notation scientifique',
        answer: '4,5 × 10⁻⁵',
        wrongAnswers: ['45 × 10⁻⁶', '4,5 × 10⁻⁶', '0,45 × 10⁻⁴']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la notation scientifique de 6 180 000 000?',
        answer: '6,18 × 10⁹',
        wrongAnswers: ['61,8 × 10⁸', '6,18 × 10⁸', '618 × 10⁷']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La notation scientifique utilise une puissance de 10',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les nombres peuvent être écrits en notation scientifique avec un exposant positif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'En notation scientifique, le nombre avant la puissance de 10 est entre 1 et 10',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '8009900 × 10⁸ = 8,0099 × 10¹⁴',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Écris 45 000 000 en notation scientifique:',
        answer: '4,5 × 10⁷',
        wrongAnswers: ['4,5 × 10⁶', '45 × 10⁶', '4,5 × 10⁸']
      },
      {
        type: 'multiple_choice',
        question: 'Écris 0,0000078 en notation scientifique:',
        answer: '7,8 × 10⁻⁶',
        wrongAnswers: ['7,8 × 10⁻⁵', '78 × 10⁻⁷', '7,8 × 10⁻⁷']
      },
      {
        type: 'multiple_choice',
        question: 'Écris 123 000 000 en notation scientifique:',
        answer: '1,23 × 10⁸',
        wrongAnswers: ['1,23 × 10⁷', '12,3 × 10⁷', '1,23 × 10⁹']
      },
      // Drag and Drop - Ordering (scientific notation from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres du plus petit au plus grand: 4,5 × 10⁷, 1,23 × 10⁸, 6,18 × 10⁹',
        answer: ['4,5 × 10⁷', '1,23 × 10⁸', '6,18 × 10⁹'], // 45M < 123M < 6.18B
        wordBank: ['4,5 × 10⁷', '1,23 × 10⁸', '6,18 × 10⁹'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Écris 45 000 000 en notation scientifique. Glisse la réponse:',
        answer: '4,5 × 10⁷',
        wordBank: ['45 × 10⁶', '4,5 × 10⁷', '4,5 × 10⁶', '45 × 10⁷'],
        mode: 'select'
      },
      // Drag and Drop - Selection (small number)
      {
        type: 'drag_and_drop',
        question: 'Écris 0,0000078 en notation scientifique. Glisse la réponse:',
        answer: '7,8 × 10⁻⁶',
        wordBank: ['78 × 10⁻⁷', '7,8 × 10⁻⁶', '7,8 × 10⁻⁷', '0,78 × 10⁻⁵'],
        mode: 'select'
      },
      // Drag and Drop - Selection (large number)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la notation scientifique de 6 180 000 000? Glisse la réponse:',
        answer: '6,18 × 10⁹',
        wordBank: ['61,8 × 10⁸', '6,18 × 10⁹', '6,18 × 10⁸', '618 × 10⁷'],
        mode: 'select'
      }
    ]
  },

  'ch3-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les puissances s'utilisent dans les calculs scientifiques pour simplifier les grands nombres", answer: "vrai" },
      { question: "Toutes les opérations avec des puissances nécessitent toujours une calculatrice", answer: "faux" },
      { question: "La notation scientifique simplifie les grands nombres en utilisant des puissances de 10", answer: "vrai" },
      { question: "On peut appliquer les propriétés des puissances pour simplifier les calculs", answer: "vrai" },
      { question: "Les propriétés des puissances permettent de combiner plusieurs opérations", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Calcule: (2³ × 2⁴) ÷ 2²',
        answer: '2⁵ = 32',
        wrongAnswers: ['2⁶ = 64', '2⁴ = 16', '2⁷ = 128']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (3²)³',
        answer: '3⁶ = 729',
        wrongAnswers: ['3⁵ = 243', '3⁸ = 6561', '3⁴ = 81']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 4² × 4³ ÷ 4²',
        answer: '4³ = 64',
        wrongAnswers: ['4⁴ = 256', '4² = 16', '4⁵ = 1024']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (5²)²',
        answer: '5⁴ = 625',
        wrongAnswers: ['5³ = 125', '5⁵ = 3125', '5² = 25']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 6³ × 6² ÷ 6²',
        answer: '6³ = 216',
        wrongAnswers: ['6⁴ = 1296', '6² = 36', '6⁵ = 7776']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les puissances s\'utilisent dans les calculs scientifiques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les opérations avec des puissances nécessitent toujours une calculatrice',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut appliquer les propriétés des puissances',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les propriétés des puissances permettent de combiner plusieurs opérations',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Calcule: (2³ × 2⁴) ÷ 2² = ?',
        answer: '2⁵',
        wrongAnswers: ['2⁷', '2³', '2⁹']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (3²)³ = ?',
        answer: '3⁶',
        wrongAnswers: ['3⁵', '9³', '3²']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 4² × 4³ ÷ 4² = ?',
        answer: '4³',
        wrongAnswers: ['4⁷', '4²', '4']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: 32, 64, 216',
        answer: ['32', '64', '216'], // 32 < 64 < 216
        wordBank: ['32', '64', '216'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (2³ × 2⁴) ÷ 2². Glisse le résultat:',
        answer: '2⁵ = 32',
        wordBank: ['2⁶ = 64', '2⁵ = 32', '2⁴ = 16', '2⁷ = 128'],
        mode: 'select'
      },
      // Drag and Drop - Selection (power of a power)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (3²)³. Glisse le résultat:',
        answer: '3⁶ = 729',
        wordBank: ['3⁵ = 243', '3⁶ = 729', '3⁸ = 6561', '3⁴ = 81'],
        mode: 'select'
      },
      // Drag and Drop - Selection (combined operations)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 4² × 4³ ÷ 4². Glisse le résultat:',
        answer: '4³ = 64',
        wordBank: ['4⁴ = 256', '4³ = 64', '4² = 16', '4⁵ = 1024'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 4: RACINES CARRÉES
  'ch4-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "√25 = 5 signifie que 5 multiplié par lui-même donne 25", answer: "vrai" },
      { question: "Toutes les racines carrées donnent toujours un résultat négatif", answer: "faux" },
      { question: "√36 = 6 signifie que 6 × 6 = 36", answer: "vrai" },
      { question: "√16 = 4 signifie que 4 × 4 = 16", answer: "vrai" },
      { question: "La racine carrée est l'opération inverse du carré", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule √49',
        answer: '7',
        wrongAnswers: ['14', '9', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √81',
        answer: '9',
        wrongAnswers: ['18', '8', '10']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √100',
        answer: '10',
        wrongAnswers: ['20', '50', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √64',
        answer: '8',
        wrongAnswers: ['16', '32', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √144',
        answer: '12',
        wrongAnswers: ['24', '72', '14']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '√100 = 10',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les racines carrées donnent toujours un résultat négatif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La racine carrée est l\'opération inverse du carré',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√49 = 7',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule √49 = ?',
        answer: '7',
        wrongAnswers: ['6', '8', '49']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √81 = ?',
        answer: '9',
        wrongAnswers: ['8', '10', '81']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √100 = ?',
        answer: '10',
        wrongAnswers: ['9', '11', '100']
      },
      // Drag and Drop - Ordering (square roots from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces racines carrées du plus petit au plus grand: √49, √81, √100',
        answer: ['7', '9', '10'], // √49=7, √81=9, √100=10
        wordBank: ['7', '9', '10'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule √49. Glisse le résultat:',
        answer: '7',
        wordBank: ['14', '7', '9', '8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (square root calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule √81. Glisse le résultat:',
        answer: '9',
        wordBank: ['18', '8', '9', '10'],
        mode: 'select'
      },
      // Drag and Drop - Selection (square root calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule √100. Glisse le résultat:',
        answer: '10',
        wordBank: ['20', '50', '5', '10'],
        mode: 'select'
      }
    ]
  },

  'ch4-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "√(a × b) = √a × √b est la propriété de la racine carrée d'un produit", answer: "vrai" },
      { question: "Toutes les racines carrées de produits peuvent être calculées directement", answer: "faux" },
      { question: "√(a ÷ b) = √a ÷ √b pour b ≠ 0 est la propriété de la racine carrée d'un quotient", answer: "vrai" },
      { question: "√(a²) = |a| signifie que la racine carrée d'un carré donne la valeur absolue", answer: "vrai" },
      { question: "Les propriétés des racines carrées permettent de simplifier les calculs", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule √(4 × 9)',
        answer: '√36 = 6',
        wrongAnswers: ['√13 = 3,6', '√5 = 2,24', '6 = 36']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √(16 ÷ 4)',
        answer: '√4 = 2',
        wrongAnswers: ['√12 = 3,46', '√20 = 4,47', '2 = 4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √(25 × 4)',
        answer: '√100 = 10',
        wrongAnswers: ['√29 = 5,39', '√21 = 4,58', '10 = 100']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √(36 ÷ 9)',
        answer: '√4 = 2',
        wrongAnswers: ['√27 = 5,20', '√45 = 6,71', '2 = 4']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la propriété de √(a × b)?',
        answer: '√a × √b',
        wrongAnswers: ['√a + √b', 'a × b', '√(a + b)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Toutes les racines carrées de produits peuvent être calculées directement',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '√(a × b) = √a × √b',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les propriétés des racines carrées permettent de simplifier les calculs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√(a²) = |a|',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule √(4 × 9) = ?',
        answer: '6',
        wrongAnswers: ['5', '7', '36']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √(16 ÷ 4) = ?',
        answer: '2',
        wrongAnswers: ['1', '3', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule √(25 × 4) = ?',
        answer: '10',
        wrongAnswers: ['9', '11', '100']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: √4, √16, √36',
        answer: ['2', '4', '6'], // √4=2, √16=4, √36=6
        wordBank: ['2', '4', '6'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule √(4 × 9). Glisse le résultat:',
        answer: '6',
        wordBank: ['13', '3,6', '6', '5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (division property)
      {
        type: 'drag_and_drop',
        question: 'Calcule √(16 ÷ 4). Glisse le résultat:',
        answer: '2',
        wordBank: ['12', '3,46', '2', '20'],
        mode: 'select'
      },
      // Drag and Drop - Selection (property)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la propriété de √(a × b)? Glisse la réponse:',
        answer: '√a × √b',
        wordBank: ['√a + √b', '√a × √b', 'a × b', '√(a + b)'],
        mode: 'select'
      }
    ]
  },

  'ch4-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut simplifier √(a²b) = a√b en extrayant le facteur carré parfait", answer: "vrai" },
      { question: "Toutes les racines carrées peuvent être simplifiées de la même manière", answer: "faux" },
      { question: "√50 = 5√2 car on extrait le facteur carré parfait 25", answer: "vrai" },
      { question: "√72 = 6√2 car on extrait le facteur carré parfait 36", answer: "vrai" },
      { question: "Simplifier une racine carrée permet de la rendre plus simple à utiliser", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie √50',
        answer: '5√2',
        wrongAnswers: ['10√5', '5√5', '2√25']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √72',
        answer: '6√2',
        wrongAnswers: ['12√6', '8√9', '3√8']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √18',
        answer: '3√2',
        wrongAnswers: ['6√3', '9√2', '2√9']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √32',
        answer: '4√2',
        wrongAnswers: ['8√4', '16√2', '2√16']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √75',
        answer: '5√3',
        wrongAnswers: ['15√5', '25√3', '3√25']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Toutes les racines carrées peuvent être simplifiées de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '√50 = 5√2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Simplifier une racine carrée permet de la rendre plus simple à utiliser',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√72 = 6√2',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Simplifie √50 = ?',
        answer: '5√2',
        wrongAnswers: ['10√5', '25√2', '5√5']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √72 = ?',
        answer: '6√2',
        wrongAnswers: ['12√2', '3√8', '8√9']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie √18 = ?',
        answer: '3√2',
        wrongAnswers: ['6√3', '9√2', '2√9']
      },
      // Drag and Drop - Ordering (simplified roots from smallest to largest coefficient)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces racines simplifiées du plus petit au plus grand coefficient: 3√2, 5√2, 6√2',
        answer: ['3√2', '5√2', '6√2'], // 3√2 < 5√2 < 6√2
        wordBank: ['3√2', '5√2', '6√2'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Simplifie √50. Glisse le résultat:',
        answer: '5√2',
        wordBank: ['10√5', '5√2', '5√5', '2√25'],
        mode: 'select'
      },
      // Drag and Drop - Selection (simplification)
      {
        type: 'drag_and_drop',
        question: 'Simplifie √72. Glisse le résultat:',
        answer: '6√2',
        wordBank: ['12√6', '6√2', '8√9', '3√8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (simplification)
      {
        type: 'drag_and_drop',
        question: 'Simplifie √18. Glisse le résultat:',
        answer: '3√2',
        wordBank: ['6√3', '9√2', '3√2', '2√9'],
        mode: 'select'
      }
    ]
  },

  'ch4-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut additionner des racines carrées similaires en additionnant les coefficients", answer: "vrai" },
      { question: "On peut toujours additionner deux racines carrées directement", answer: "faux" },
      { question: "3√2 + 2√2 = 5√2 car on additionne les coefficients des racines similaires", answer: "vrai" },
      { question: "On ne peut pas additionner √2 + √3 directement car elles ne sont pas similaires", answer: "vrai" },
      { question: "Pour additionner des racines carrées, elles doivent avoir la même radicande", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: 3√2 + 2√2',
        answer: '5√2',
        wrongAnswers: ['6√2', '√5', '5√4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 5√3 - 2√3',
        answer: '3√3',
        wrongAnswers: ['7√3', '√3', '3√6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 4√5 + 3√5',
        answer: '7√5',
        wrongAnswers: ['12√5', '√7', '7√10']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 6√7 - 2√7',
        answer: '4√7',
        wrongAnswers: ['8√7', '√4', '4√14']
      },
      {
        type: 'multiple_choice',
        question: 'Peut-on simplifier √2 + √3?',
        answer: 'Non, on ne peut pas additionner directement',
        wrongAnswers: ['Oui, c\'est égal à √5', 'Oui, c\'est égal à 2√5', 'Oui, c\'est égal à 5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut toujours additionner deux racines carrées directement',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '3√2 + 2√2 = 5√2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour additionner des racines carrées, elles doivent avoir la même radicande',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '√2 + √3 = √5',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 3√2 + 2√2 = ?',
        answer: '5√2',
        wrongAnswers: ['6√2', '5√4', '√5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 5√3 - 2√3 = ?',
        answer: '3√3',
        wrongAnswers: ['7√3', '3√6', '√3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 4√5 + 3√5 = ?',
        answer: '7√5',
        wrongAnswers: ['12√5', '7√10', '√7']
      },
      // Drag and Drop - Ordering (results from smallest to largest coefficient)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: 3√3, 5√2, 7√5',
        answer: ['3√3', '5√2', '7√5'], // Simplified: approximately 3√3 < 5√2 < 7√5
        wordBank: ['3√3', '5√2', '7√5'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 3√2 + 2√2. Glisse le résultat:',
        answer: '5√2',
        wordBank: ['6√2', '5√2', '√5', '5√4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (subtraction)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 5√3 - 2√3. Glisse le résultat:',
        answer: '3√3',
        wordBank: ['7√3', '3√3', '√3', '3√6'],
        mode: 'select'
      },
      // Drag and Drop - Selection (addition)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 4√5 + 3√5. Glisse le résultat:',
        answer: '7√5',
        wordBank: ['12√5', '7√5', '√7', '7√10'],
        mode: 'select'
      }
    ]
  },

  'ch4-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les racines carrées s'utilisent en géométrie pour calculer des longueurs", answer: "vrai" },
      { question: "Tous les calculs géométriques nécessitent toujours des racines carrées", answer: "faux" },
      { question: "√(a² + b²) calcule l'hypoténuse d'un triangle rectangle selon le théorème de Pythagore", answer: "vrai" },
      { question: "On peut résoudre des équations avec des racines carrées en utilisant les propriétés", answer: "vrai" },
      { question: "Le théorème de Pythagore permet de calculer l'hypoténuse à partir des deux autres côtés", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 3 et 4. Calcule l\'hypoténuse',
        answer: '√(3² + 4²) = √25 = 5',
        wrongAnswers: ['√(3 + 4) = √7', '3 + 4 = 7', '√(3² - 4²) = √7']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 6 et 8. Calcule l\'hypoténuse',
        answer: '√(6² + 8²) = √100 = 10',
        wrongAnswers: ['√(6 + 8) = √14', '6 + 8 = 14', '√(8² - 6²) = √28']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 5 et 12. Calcule l\'hypoténuse',
        answer: '√(5² + 12²) = √169 = 13',
        wrongAnswers: ['√(5 + 12) = √17', '5 + 12 = 17', '√(12² - 5²) = √119']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 9 et 12. Calcule l\'hypoténuse',
        answer: '√(9² + 12²) = √225 = 15',
        wrongAnswers: ['√(9 + 12) = √21', '9 + 12 = 21', '√(12² - 9²) = √63']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle formule calcule l\'hypoténuse d\'un triangle rectangle?',
        answer: '√(a² + b²)',
        wrongAnswers: ['a + b', 'a² + b²', '√(a + b)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les racines carrées s\'utilisent en géométrie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les calculs géométriques nécessitent toujours des racines carrées',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '√(a² + b²) calcule l\'hypoténuse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le théorème de Pythagore permet de calculer l\'hypoténuse à partir des deux autres côtés',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 3 et 4. L\'hypoténuse est:',
        answer: '5',
        wrongAnswers: ['6', '7', '25']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 6 et 8. L\'hypoténuse est:',
        answer: '10',
        wrongAnswers: ['12', '14', '100']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 5 et 12. L\'hypoténuse est:',
        answer: '13',
        wrongAnswers: ['15', '17', '169']
      },
      // Drag and Drop - Ordering (hypotenuses from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces hypoténuses du plus petit au plus grand: 5, 10, 13',
        answer: ['5', '10', '13'], // 5 < 10 < 13
        wordBank: ['5', '10', '13'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle: côtés 3 et 4. Calcule l\'hypoténuse. Glisse le résultat:',
        answer: '5',
        wordBank: ['7', '5', '√7', '12'],
        mode: 'select'
      },
      // Drag and Drop - Selection (Pythagorean theorem)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle: côtés 6 et 8. Calcule l\'hypoténuse. Glisse le résultat:',
        answer: '10',
        wordBank: ['14', '10', '√14', '48'],
        mode: 'select'
      },
      // Drag and Drop - Selection (formula)
      {
        type: 'drag_and_drop',
        question: 'Quelle formule calcule l\'hypoténuse d\'un triangle rectangle? Glisse la réponse:',
        answer: '√(a² + b²)',
        wordBank: ['a + b', 'a² + b²', '√(a² + b²)', '√(a + b)'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 5: FRACTIONS
  'ch5-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "1/2 + 1/3 = 5/6 car on met les fractions au même dénominateur avant d'additionner", answer: "vrai" },
      { question: "On peut additionner des fractions avec des dénominateurs différents sans les mettre au même dénominateur", answer: "faux" },
      { question: "3/4 - 1/4 = 1/2 car on soustrait les numérateurs et on garde le même dénominateur", answer: "vrai" },
      { question: "Pour additionner des fractions, on met au même dénominateur puis on additionne les numérateurs", answer: "vrai" },
      { question: "Lorsqu'on soustrait des fractions de même dénominateur, on soustrait les numérateurs et on garde le dénominateur", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: 1/2 + 1/4',
        answer: '3/4',
        wrongAnswers: ['2/6', '2/4', '1/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 3/5 - 1/5',
        answer: '2/5',
        wrongAnswers: ['2/10', '4/5', '1/5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 2/3 + 1/6',
        answer: '5/6',
        wrongAnswers: ['3/9', '3/6', '1/2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 5/6 - 1/3',
        answer: '1/2',
        wrongAnswers: ['4/3', '4/9', '2/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 3/4 + 1/8',
        answer: '7/8',
        wrongAnswers: ['4/12', '4/8', '1/2']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Pour additionner des fractions, on met au même dénominateur',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut additionner des fractions avec des dénominateurs différents sans les mettre au même dénominateur',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Lorsqu\'on soustrait des fractions de même dénominateur, on soustrait les numérateurs et on garde le dénominateur',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1/2 + 1/4 = 3/4',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 1/2 + 1/4 = ?',
        answer: '3/4',
        wrongAnswers: ['2/6', '1/3', '2/4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 3/5 - 1/5 = ?',
        answer: '2/5',
        wrongAnswers: ['2/10', '4/5', '1/5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 2/3 + 1/6 = ?',
        answer: '5/6',
        wrongAnswers: ['3/9', '4/6', '1/2']
      },
      // Drag and Drop - Ordering (fractions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces fractions du plus petit au plus grand: 1/2, 2/3, 3/4',
        answer: ['1/2', '2/3', '3/4'], // 1/2 = 0.5, 2/3 ≈ 0.67, 3/4 = 0.75
        wordBank: ['1/2', '2/3', '3/4'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 1/2 + 1/4. Glisse le résultat:',
        answer: '3/4',
        wordBank: ['2/6', '2/4', '3/4', '1/3'],
        mode: 'select'
      },
      // Drag and Drop - Selection (subtraction)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 3/5 - 1/5. Glisse le résultat:',
        answer: '2/5',
        wordBank: ['2/10', '4/5', '2/5', '1/5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (addition with different denominators)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 2/3 + 1/6. Glisse le résultat:',
        answer: '5/6',
        wordBank: ['3/9', '3/6', '5/6', '1/2'],
        mode: 'select'
      }
    ]
  },

  'ch5-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "2/3 × 4/5 = 8/15 car on multiplie numérateurs et dénominateurs", answer: "vrai" },
      { question: "Toutes les multiplications de fractions donnent toujours un résultat plus grand", answer: "faux" },
      { question: "3/4 ÷ 1/2 = 3/2 car diviser par une fraction revient à multiplier par son inverse", answer: "vrai" },
      { question: "Pour multiplier des fractions, on multiplie numérateurs et dénominateurs séparément", answer: "vrai" },
      { question: "Pour diviser des fractions, on multiplie par l'inverse de la fraction diviseur", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: 2/3 × 3/4',
        answer: '6/12 = 1/2',
        wrongAnswers: ['5/7', '6/7', '3/4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 4/5 ÷ 2/3',
        answer: '12/10 = 6/5',
        wrongAnswers: ['6/15', '8/15', '2/2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 1/2 × 2/3',
        answer: '2/6 = 1/3',
        wrongAnswers: ['3/5', '2/5', '1/2']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 3/5 ÷ 1/2',
        answer: '6/5',
        wrongAnswers: ['4/10', '3/10', '2/5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 5/6 × 3/4',
        answer: '15/24 = 5/8',
        wrongAnswers: ['8/10', '15/20', '2/3']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Pour multiplier des fractions, on multiplie numérateurs et dénominateurs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les multiplications de fractions donnent toujours un résultat plus grand',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour diviser des fractions, on multiplie par l\'inverse de la fraction diviseur',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '2/3 × 4/5 = 8/15',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 2/3 × 3/4 = ?',
        answer: '1/2',
        wrongAnswers: ['3/4', '5/7', '2/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 4/5 ÷ 2/3 = ?',
        answer: '6/5',
        wrongAnswers: ['8/15', '2/2', '4/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 1/2 × 2/3 = ?',
        answer: '1/3',
        wrongAnswers: ['2/5', '3/4', '3/6']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: 1/3, 1/2, 6/5',
        answer: ['1/3', '1/2', '6/5'], // 1/3 ≈ 0.33, 1/2 = 0.5, 6/5 = 1.2
        wordBank: ['1/3', '1/2', '6/5'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 2/3 × 3/4. Glisse le résultat:',
        answer: '1/2',
        wordBank: ['5/7', '6/7', '1/2', '3/4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (division)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 4/5 ÷ 2/3. Glisse le résultat:',
        answer: '6/5',
        wordBank: ['6/15', '8/15', '6/5', '2/2'],
        mode: 'select'
      },
      // Drag and Drop - Selection (multiplication)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 1/2 × 2/3. Glisse le résultat:',
        answer: '1/3',
        wordBank: ['3/5', '2/5', '1/2', '1/3'],
        mode: 'select'
      }
    ]
  },

  'ch5-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut simplifier une fraction en divisant numérateur et dénominateur par leur PGCD", answer: "vrai" },
      { question: "Toutes les fractions peuvent être simplifiées de la même manière", answer: "faux" },
      { question: "8/12 = 2/3 car on divise numérateur et dénominateur par 4", answer: "vrai" },
      { question: "15/20 = 3/4 car on divise numérateur et dénominateur par 5", answer: "vrai" },
      { question: "Simplifier une fraction permet de la rendre irréductible", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie 8/12',
        answer: '2/3',
        wrongAnswers: ['1/2', '3/4', '8/12']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie 15/20',
        answer: '3/4',
        wrongAnswers: ['5/10', '1/2', '15/20']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie 18/24',
        answer: '3/4',
        wrongAnswers: ['6/8', '9/12', '1/2']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie 12/16',
        answer: '3/4',
        wrongAnswers: ['6/8', '2/3', '1/2']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie 20/25',
        answer: '4/5',
        wrongAnswers: ['10/15', '5/6', '2/3']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Toutes les fractions peuvent être simplifiées de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '8/12 = 2/3',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Simplifier une fraction permet de la rendre irréductible',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '15/20 = 3/4',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Simplifie 8/12 = ?',
        answer: '2/3',
        wrongAnswers: ['1/2', '3/4', '8/12']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie 15/20 = ?',
        answer: '3/4',
        wrongAnswers: ['5/6', '1/2', '15/20']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie 18/24 = ?',
        answer: '3/4',
        wrongAnswers: ['6/8', '9/12', '18/24']
      },
      // Drag and Drop - Ordering (simplified fractions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces fractions simplifiées du plus petit au plus grand: 2/3, 3/4, 4/5',
        answer: ['2/3', '3/4', '4/5'], // 2/3 ≈ 0.67, 3/4 = 0.75, 4/5 = 0.8
        wordBank: ['2/3', '3/4', '4/5'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Simplifie 8/12. Glisse le résultat:',
        answer: '2/3',
        wordBank: ['1/2', '3/4', '2/3', '8/12'],
        mode: 'select'
      },
      // Drag and Drop - Selection (simplification)
      {
        type: 'drag_and_drop',
        question: 'Simplifie 15/20. Glisse le résultat:',
        answer: '3/4',
        wordBank: ['5/10', '1/2', '15/20', '3/4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (simplification)
      {
        type: 'drag_and_drop',
        question: 'Simplifie 18/24. Glisse le résultat:',
        answer: '3/4',
        wordBank: ['6/8', '9/12', '3/4', '1/2'],
        mode: 'select'
      }
    ]
  },

  'ch5-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les fractions s'utilisent pour partager équitablement des quantités", answer: "vrai" },
      { question: "Tous les partages équitables nécessitent toujours des fractions simples", answer: "faux" },
      { question: "1/2 d'un budget de 600 MRU = 300 MRU car 600 × 1/2 = 300", answer: "vrai" },
      { question: "1/3 d'un budget de 600 MRU = 200 MRU car 600 × 1/3 = 200", answer: "vrai" },
      { question: "Pour calculer une fraction d'un nombre, on multiplie le nombre par la fraction", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: 1/2 d\'un budget de 600 MRU',
        answer: '300 MRU',
        wrongAnswers: ['200 MRU', '1200 MRU', '150 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 1/3 d\'un budget de 600 MRU',
        answer: '200 MRU',
        wrongAnswers: ['300 MRU', '1800 MRU', '100 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 3/4 d\'un budget de 400 MRU',
        answer: '300 MRU',
        wrongAnswers: ['100 MRU', '533 MRU', '150 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Budget 600 MRU: 1/2 pour nourriture, 1/3 pour vêtements. Quelle est la part de nourriture?',
        answer: '300 MRU',
        wrongAnswers: ['200 MRU', '400 MRU', '100 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Budget 600 MRU: 1/2 pour nourriture, 1/3 pour vêtements. Quelle est la part de vêtements?',
        answer: '200 MRU',
        wrongAnswers: ['300 MRU', '400 MRU', '100 MRU']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les fractions s\'utilisent pour partager équitablement',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les partages équitables nécessitent toujours des fractions simples',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer une fraction d\'un nombre, on multiplie le nombre par la fraction',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1/2 d\'un budget de 600 MRU = 300 MRU',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 1/2 d\'un budget de 600 MRU = ?',
        answer: '300 MRU',
        wrongAnswers: ['200 MRU', '400 MRU', '600 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 1/3 d\'un budget de 600 MRU = ?',
        answer: '200 MRU',
        wrongAnswers: ['300 MRU', '100 MRU', '600 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 3/4 d\'un budget de 400 MRU = ?',
        answer: '300 MRU',
        wrongAnswers: ['200 MRU', '400 MRU', '100 MRU']
      },
      // Drag and Drop - Ordering (amounts from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces montants du plus petit au plus grand: 200 MRU, 300 MRU, 400 MRU',
        answer: ['200', '300', '400'], // 200 < 300 < 400
        wordBank: ['200', '300', '400'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 1/2 d\'un budget de 600 MRU. Glisse le résultat:',
        answer: '300 MRU',
        wordBank: ['200 MRU', '300 MRU', '1200 MRU', '150 MRU'],
        mode: 'select'
      },
      // Drag and Drop - Selection (fraction of a number)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 1/3 d\'un budget de 600 MRU. Glisse le résultat:',
        answer: '200 MRU',
        wordBank: ['300 MRU', '200 MRU', '1800 MRU', '100 MRU'],
        mode: 'select'
      },
      // Drag and Drop - Selection (real-world application)
      {
        type: 'drag_and_drop',
        question: 'Budget 600 MRU: 1/2 pour nourriture, 1/3 pour vêtements. Quelle est la part de nourriture? Glisse la réponse:',
        answer: '300 MRU',
        wordBank: ['200 MRU', '300 MRU', '400 MRU', '100 MRU'],
        mode: 'select'
      }
    ]
  },

  'ch5-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les fractions permettent de représenter des parties d'un tout de manière précise", answer: "vrai" },
      { question: "Toutes les fractions peuvent être converties en décimaux exacts", answer: "faux" },
      { question: "On peut convertir une fraction en décimal en divisant le numérateur par le dénominateur", answer: "vrai" },
      { question: "1/4 = 0,25 car 1 ÷ 4 = 0,25", answer: "vrai" },
      { question: "La conversion fraction-décimal permet de comparer facilement les fractions", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Convertis 1/4 en décimal',
        answer: '0,25',
        wrongAnswers: ['0,4', '0,125', '0,5']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 3/5 en décimal',
        answer: '0,6',
        wrongAnswers: ['0,5', '0,8', '0,3']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 1/2 en décimal',
        answer: '0,5',
        wrongAnswers: ['0,2', '0,25', '0,1']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 3/4 en décimal',
        answer: '0,75',
        wrongAnswers: ['0,5', '0,25', '0,3']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 2/5 en décimal',
        answer: '0,4',
        wrongAnswers: ['0,2', '0,5', '0,25']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut convertir une fraction en décimal',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les fractions peuvent être converties en décimaux exacts',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La conversion fraction-décimal permet de comparer facilement les fractions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1/2 = 0,5',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Convertis 1/4 en décimal:',
        answer: '0,25',
        wrongAnswers: ['0,2', '0,4', '0,5']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 3/5 en décimal:',
        answer: '0,6',
        wrongAnswers: ['0,5', '0,7', '0,3']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 1/2 en décimal:',
        answer: '0,5',
        wrongAnswers: ['0,2', '0,4', '0,6']
      },
      // Drag and Drop - Ordering (decimals from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces décimaux du plus petit au plus grand: 0,25, 0,5, 0,75',
        answer: ['0,25', '0,5', '0,75'], // 0.25 < 0.5 < 0.75
        wordBank: ['0,25', '0,5', '0,75'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Convertis 1/4 en décimal. Glisse le résultat:',
        answer: '0,25',
        wordBank: ['0,4', '0,125', '0,25', '0,5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: 'Convertis 3/5 en décimal. Glisse le résultat:',
        answer: '0,6',
        wordBank: ['0,5', '0,8', '0,6', '0,3'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: 'Convertis 1/2 en décimal. Glisse le résultat:',
        answer: '0,5',
        wordBank: ['0,2', '0,25', '0,1', '0,5'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 6: CALCUL LITTÉRAL
  'ch6-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'aire d'un trapèze = (a + b) × h / 2 où a et b sont les bases et h la hauteur", answer: "vrai" },
      { question: "Toutes les formules géométriques utilisent toujours des lettres identiques", answer: "faux" },
      { question: "Si a=3, b=5, h=2, alors aire = 8 car (3 + 5) × 2 / 2 = 8", answer: "vrai" },
      { question: "Le calcul littéral utilise des lettres pour représenter des nombres variables", answer: "vrai" },
      { question: "Les formules littérales permettent de calculer avec n'importe quelle valeur", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un trapèze avec a=3, b=5, h=2',
        answer: '8',
        wrongAnswers: ['16', '10', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un trapèze avec a=2, b=4, h=3',
        answer: '9',
        wrongAnswers: ['18', '6', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule de l\'aire d\'un rectangle?',
        answer: 'Aire = L × l',
        wrongAnswers: ['Aire = L + l', 'Aire = L²', 'Aire = 2(L + l)']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule de l\'aire d\'un triangle?',
        answer: 'Aire = (b × h) / 2',
        wrongAnswers: ['Aire = b × h', 'Aire = b + h', 'Aire = b²']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un rectangle avec L=5 et l=3',
        answer: '15',
        wrongAnswers: ['8', '16', '10']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le calcul littéral utilise des lettres pour représenter des nombres',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les formules géométriques utilisent toujours des lettres identiques',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les formules littérales permettent de calculer avec n\'importe quelle valeur',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si a=2, b=4, h=3, alors aire = 9',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un trapèze avec a=3, b=5, h=2:',
        answer: '8',
        wrongAnswers: ['6', '10', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un trapèze avec a=2, b=4, h=3:',
        answer: '9',
        wrongAnswers: ['6', '12', '18']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un rectangle avec L=5 et l=3:',
        answer: '15',
        wrongAnswers: ['8', '16', '20']
      },
      // Drag and Drop - Ordering (areas from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces aires du plus petit au plus grand: 8, 9, 15',
        answer: ['8', '9', '15'], // 8 < 9 < 15
        wordBank: ['8', '9', '15'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un trapèze avec a=3, b=5, h=2. Glisse le résultat:',
        answer: '8',
        wordBank: ['16', '10', '8', '6'],
        mode: 'select'
      },
      // Drag and Drop - Selection (formula)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la formule de l\'aire d\'un rectangle? Glisse la réponse:',
        answer: 'Aire = L × l',
        wordBank: ['Aire = L + l', 'Aire = L²', 'Aire = L × l', 'Aire = 2(L + l)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un rectangle avec L=5 et l=3. Glisse le résultat:',
        answer: '15',
        wordBank: ['8', '16', '10', '15'],
        mode: 'select'
      }
    ]
  },

  'ch6-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "3x + 2x + 5x = 10x car on additionne les coefficients des termes en x", answer: "vrai" },
      { question: "On peut toujours additionner tous les termes d'une expression littérale ensemble", answer: "faux" },
      { question: "4a + 3b + 2a + 5b = 6a + 8b car on regroupe les termes en a et les termes en b", answer: "vrai" },
      { question: "On réduit une expression en regroupant les termes semblables (même lettre)", answer: "vrai" },
      { question: "Pour réduire une expression, on additionne les coefficients des termes de même nature", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Réduis: 3x + 2x + 5x + x',
        answer: '11x',
        wrongAnswers: ['10x', '11x²', 'x']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie: 4a + 3b + 2a + 5b',
        answer: '6a + 8b',
        wrongAnswers: ['6ab + 8', '10a + 8b', '6a² + 8b²']
      },
      {
        type: 'multiple_choice',
        question: 'Réduis: 2x + 3x',
        answer: '5x',
        wrongAnswers: ['6x', '5x²', 'x']
      },
      {
        type: 'multiple_choice',
        question: 'Réduis: 5a + 2b + 3a + 4b',
        answer: '8a + 6b',
        wrongAnswers: ['15ab', '8a² + 6b²', '10a + 8b']
      },
      {
        type: 'multiple_choice',
        question: 'Réduis: 7x + 2x - 3x',
        answer: '6x',
        wrongAnswers: ['12x', '4x', '2x']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On réduit une expression en regroupant les termes semblables',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut toujours additionner tous les termes d\'une expression littérale ensemble',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour réduire une expression, on additionne les coefficients des termes de même nature',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '2x + 3x = 5x',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Réduis: 3x + 2x + 5x + x = ?',
        answer: '11x',
        wrongAnswers: ['10x', '12x', '11x²']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie: 4a + 3b + 2a + 5b = ?',
        answer: '6a + 8b',
        wrongAnswers: ['6a + 8ab', '8a + 6b', '10ab']
      },
      {
        type: 'multiple_choice',
        question: 'Réduis: 2x + 3x = ?',
        answer: '5x',
        wrongAnswers: ['6x', '5x²', 'x']
      },
      // Drag and Drop - Ordering (coefficients from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces expressions du plus petit au plus grand coefficient: 5x, 6x, 11x',
        answer: ['5x', '6x', '11x'], // 5 < 6 < 11
        wordBank: ['5x', '6x', '11x'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Réduis: 3x + 2x + 5x + x. Glisse le résultat:',
        answer: '11x',
        wordBank: ['10x', '11x', '11x²', 'x'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reduction)
      {
        type: 'drag_and_drop',
        question: 'Simplifie: 4a + 3b + 2a + 5b. Glisse le résultat:',
        answer: '6a + 8b',
        wordBank: ['6ab + 8', '10a + 8b', '6a + 8b', '6a² + 8b²'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reduction)
      {
        type: 'drag_and_drop',
        question: 'Réduis: 2x + 3x. Glisse le résultat:',
        answer: '5x',
        wordBank: ['6x', '5x', '5x²', 'x'],
        mode: 'select'
      }
    ]
  },

  'ch6-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "(x + 4)² = x² + 8x + 16 est une identité remarquable (a + b)² = a² + 2ab + b²", answer: "vrai" },
      { question: "Toutes les expressions au carré peuvent être développées de la même manière", answer: "faux" },
      { question: "x² - 16 = (x + 4)(x - 4) est une factorisation avec identité remarquable (a² - b²)", answer: "vrai" },
      { question: "3(x + 2) = 3x + 6 car on distribue le 3 sur chaque terme", answer: "vrai" },
      { question: "Développer une expression signifie la transformer en somme de termes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Développe: (x + 4)²',
        answer: 'x² + 8x + 16',
        wrongAnswers: ['x² + 16', 'x² + 4x + 16', 'x² + 8x + 8']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² - 16',
        answer: '(x + 4)(x - 4)',
        wrongAnswers: ['(x - 4)²', '(x + 4)²', 'x(x - 16)']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: 3(x + 2)',
        answer: '3x + 6',
        wrongAnswers: ['3x + 2', 'x + 6', '3x² + 6']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: (x + 3)²',
        answer: 'x² + 6x + 9',
        wrongAnswers: ['x² + 9', 'x² + 3x + 9', 'x² + 6x + 6']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² - 25',
        answer: '(x + 5)(x - 5)',
        wrongAnswers: ['(x - 5)²', '(x + 5)²', 'x(x - 25)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Toutes les expressions au carré peuvent être développées de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '(x + 4)² = x² + 8x + 16',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Développer une expression signifie la transformer en somme de termes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '3(x + 2) = 3x + 6',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Développe: (x + 4)² = ?',
        answer: 'x² + 8x + 16',
        wrongAnswers: ['x² + 16', 'x² + 4x + 16', 'x² + 8x + 4']
      },
      {
        type: 'multiple_choice',
        question: 'Factorise: x² - 16 = ?',
        answer: '(x + 4)(x - 4)',
        wrongAnswers: ['(x + 8)(x - 2)', '(x - 4)²', '(x + 2)(x - 8)']
      },
      {
        type: 'multiple_choice',
        question: 'Développe: 3(x + 2) = ?',
        answer: '3x + 6',
        wrongAnswers: ['3x + 2', 'x + 6', '3x + 5']
      },
      // Drag and Drop - Ordering (expressions by number of terms)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces expressions du plus petit au plus grand nombre de termes: 3x + 6, x² - 16, x² + 8x + 16',
        answer: ['3x + 6', 'x² - 16', 'x² + 8x + 16'], // 2 terms, 2 terms (ordered), 3 terms
        wordBank: ['3x + 6', 'x² - 16', 'x² + 8x + 16'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Développe: (x + 4)². Glisse le résultat:',
        answer: 'x² + 8x + 16',
        wordBank: ['x² + 16', 'x² + 4x + 16', 'x² + 8x + 16', 'x² + 8x + 8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (factorization)
      {
        type: 'drag_and_drop',
        question: 'Factorise: x² - 16. Glisse le résultat:',
        answer: '(x + 4)(x - 4)',
        wordBank: ['(x - 4)²', '(x + 4)²', '(x + 4)(x - 4)', 'x(x - 16)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (expansion)
      {
        type: 'drag_and_drop',
        question: 'Développe: 3(x + 2). Glisse le résultat:',
        answer: '3x + 6',
        wordBank: ['3x + 2', 'x + 6', '3x² + 6', '3x + 6'],
        mode: 'select'
      }
    ]
  },

  'ch6-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le calcul littéral permet de résoudre des problèmes généraux en remplaçant les lettres par des valeurs", answer: "vrai" },
      { question: "On ne peut substituer des valeurs que dans certaines expressions littérales", answer: "faux" },
      { question: "On peut substituer des valeurs dans une expression en remplaçant chaque lettre par sa valeur", answer: "vrai" },
      { question: "Si x=5, alors 2x + 3 = 13 car 2(5) + 3 = 10 + 3 = 13", answer: "vrai" },
      { question: "La substitution permet de calculer la valeur numérique d'une expression littérale", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule 2x + 3 si x = 5',
        answer: '13',
        wrongAnswers: ['16', '10', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule x² - 1 si x = 4',
        answer: '15',
        wrongAnswers: ['17', '16', '3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 3x + 2 si x = 3',
        answer: '11',
        wrongAnswers: ['9', '15', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule (x + 2)² si x = 3',
        answer: '25',
        wrongAnswers: ['13', '9', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 5x - 7 si x = 4',
        answer: '13',
        wrongAnswers: ['27', '12', '20']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut substituer des valeurs dans une expression',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On ne peut substituer des valeurs que dans certaines expressions littérales',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La substitution permet de calculer la valeur numérique d\'une expression littérale',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si x=5, alors 2x + 3 = 13',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule 2x + 3 si x = 5:',
        answer: '13',
        wrongAnswers: ['10', '15', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule x² - 1 si x = 4:',
        answer: '15',
        wrongAnswers: ['16', '17', '14']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule 3x + 2 si x = 3:',
        answer: '11',
        wrongAnswers: ['9', '12', '10']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: 11, 13, 15',
        answer: ['11', '13', '15'], // 11 < 13 < 15
        wordBank: ['11', '13', '15'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule 2x + 3 si x = 5. Glisse le résultat:',
        answer: '13',
        wordBank: ['16', '10', '13', '8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (substitution)
      {
        type: 'drag_and_drop',
        question: 'Calcule x² - 1 si x = 4. Glisse le résultat:',
        answer: '15',
        wordBank: ['17', '16', '3', '15'],
        mode: 'select'
      },
      // Drag and Drop - Selection (substitution)
      {
        type: 'drag_and_drop',
        question: 'Calcule 3x + 2 si x = 3. Glisse le résultat:',
        answer: '11',
        wordBank: ['9', '15', '8', '11'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 7: ÉQUATIONS
  'ch7-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "2x + 3 = 11 a pour solution x = 4 car 2(4) + 3 = 11", answer: "vrai" },
      { question: "Toutes les équations ont toujours exactement une solution", answer: "faux" },
      { question: "x - 5 = 8 a pour solution x = 13 car 13 - 5 = 8", answer: "vrai" },
      { question: "Une équation a une ou plusieurs solutions selon sa forme", answer: "vrai" },
      { question: "Pour résoudre une équation, on cherche la valeur de l'inconnue qui vérifie l'égalité", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: 2x + 3 = 11',
        answer: 'x = 4',
        wrongAnswers: ['x = 7', 'x = 5', 'x = 3']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x - 5 = 8',
        answer: 'x = 13',
        wrongAnswers: ['x = 3', 'x = 10', 'x = 15']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 3x = 15',
        answer: 'x = 5',
        wrongAnswers: ['x = 12', 'x = 18', 'x = 3']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x + 7 = 12',
        answer: 'x = 5',
        wrongAnswers: ['x = 19', 'x = 4', 'x = 6']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 4x = 20',
        answer: 'x = 5',
        wrongAnswers: ['x = 16', 'x = 24', 'x = 4']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une équation a une ou plusieurs solutions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les équations ont toujours exactement une solution',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour résoudre une équation, on cherche la valeur de l\'inconnue qui vérifie l\'égalité',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '2x + 3 = 11 a pour solution x = 4',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Résous: 2x + 3 = 11, alors x = ?',
        answer: '4',
        wrongAnswers: ['5', '3', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x - 5 = 8, alors x = ?',
        answer: '13',
        wrongAnswers: ['12', '14', '3']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 3x = 15, alors x = ?',
        answer: '5',
        wrongAnswers: ['4', '6', '12']
      },
      // Drag and Drop - Ordering (solutions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces solutions du plus petit au plus grand: 4, 5, 13',
        answer: ['4', '5', '13'], // 4 < 5 < 13
        wordBank: ['4', '5', '13'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Résous: 2x + 3 = 11. Glisse la solution:',
        answer: 'x = 4',
        wordBank: ['x = 7', 'x = 5', 'x = 4', 'x = 3'],
        mode: 'select'
      },
      // Drag and Drop - Selection (equation solving)
      {
        type: 'drag_and_drop',
        question: 'Résous: x - 5 = 8. Glisse la solution:',
        answer: 'x = 13',
        wordBank: ['x = 3', 'x = 10', 'x = 13', 'x = 15'],
        mode: 'select'
      },
      // Drag and Drop - Selection (equation solving)
      {
        type: 'drag_and_drop',
        question: 'Résous: 3x = 15. Glisse la solution:',
        answer: 'x = 5',
        wordBank: ['x = 12', 'x = 18', 'x = 5', 'x = 3'],
        mode: 'select'
      }
    ]
  },

  'ch7-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "3x + 2 = 2x + 7 a pour solution x = 5 car on transpose les termes pour isoler x", answer: "vrai" },
      { question: "Toutes les équations avec des termes des deux côtés ont toujours une solution unique", answer: "faux" },
      { question: "On peut transposer les termes dans une équation en changeant leur signe", answer: "vrai" },
      { question: "5x - 3 = 2x + 6 a pour solution x = 3 car 5(3) - 3 = 2(3) + 6", answer: "vrai" },
      { question: "Pour résoudre une équation avec termes des deux côtés, on regroupe les x d'un côté et les constantes de l'autre", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: 3x + 2 = 2x + 7',
        answer: 'x = 5',
        wrongAnswers: ['x = 7', 'x = 3', 'x = 9']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 5x - 3 = 2x + 6',
        answer: 'x = 3',
        wrongAnswers: ['x = 1', 'x = 5', 'x = 9']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 4x + 5 = 3x + 10',
        answer: 'x = 5',
        wrongAnswers: ['x = 3', 'x = 7', 'x = 15']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 6x - 4 = 2x + 12',
        answer: 'x = 4',
        wrongAnswers: ['x = 2', 'x = 8', 'x = 16']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 7x + 3 = 4x + 15',
        answer: 'x = 4',
        wrongAnswers: ['x = 2', 'x = 6', 'x = 12']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut transposer les termes dans une équation',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les équations avec des termes des deux côtés ont toujours une solution unique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour résoudre une équation avec termes des deux côtés, on regroupe les x d\'un côté et les constantes de l\'autre',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '3x + 2 = 2x + 7 a pour solution x = 5',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Résous: 3x + 2 = 2x + 7, alors x = ?',
        answer: '5',
        wrongAnswers: ['4', '6', '9']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 5x - 3 = 2x + 6, alors x = ?',
        answer: '3',
        wrongAnswers: ['2', '4', '9']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: 4x + 5 = 3x + 10, alors x = ?',
        answer: '5',
        wrongAnswers: ['4', '6', '15']
      },
      // Drag and Drop - Ordering (solutions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces solutions du plus petit au plus grand: 3, 4, 5',
        answer: ['3', '4', '5'], // 3 < 4 < 5
        wordBank: ['3', '4', '5'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Résous: 3x + 2 = 2x + 7. Glisse la solution:',
        answer: 'x = 5',
        wordBank: ['x = 7', 'x = 3', 'x = 5', 'x = 9'],
        mode: 'select'
      },
      // Drag and Drop - Selection (equation solving)
      {
        type: 'drag_and_drop',
        question: 'Résous: 5x - 3 = 2x + 6. Glisse la solution:',
        answer: 'x = 3',
        wordBank: ['x = 1', 'x = 5', 'x = 3', 'x = 9'],
        mode: 'select'
      },
      // Drag and Drop - Selection (equation solving)
      {
        type: 'drag_and_drop',
        question: 'Résous: 4x + 5 = 3x + 10. Glisse la solution:',
        answer: 'x = 5',
        wordBank: ['x = 3', 'x = 7', 'x = 5', 'x = 15'],
        mode: 'select'
      }
    ]
  },

  'ch7-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "x² = 16 a pour solutions x = 4 et x = -4 car 4² = 16 et (-4)² = 16", answer: "vrai" },
      { question: "Toutes les équations du second degré ont toujours exactement deux solutions", answer: "faux" },
      { question: "x² - 9 = 0 a pour solutions x = 3 et x = -3 car (x - 3)(x + 3) = 0", answer: "vrai" },
      { question: "Une équation du second degré peut avoir deux solutions distinctes", answer: "vrai" },
      { question: "Pour résoudre x² = a, on trouve x = √a et x = -√a", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Résous: x² = 16',
        answer: 'x = 4 ou x = -4',
        wrongAnswers: ['x = 4', 'x = -4', 'x = 8']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x² - 9 = 0',
        answer: 'x = 3 ou x = -3',
        wrongAnswers: ['x = 3', 'x = -3', 'x = 9']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x² = 25',
        answer: 'x = 5 ou x = -5',
        wrongAnswers: ['x = 5', 'x = -5', 'x = 10']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x² - 36 = 0',
        answer: 'x = 6 ou x = -6',
        wrongAnswers: ['x = 6', 'x = -6', 'x = 18']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x² = 49',
        answer: 'x = 7 ou x = -7',
        wrongAnswers: ['x = 7', 'x = -7', 'x = 14']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une équation du second degré peut avoir deux solutions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les équations du second degré ont toujours exactement deux solutions',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour résoudre x² = a, on trouve x = √a et x = -√a',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x² = 16 a pour solutions x = 4 et x = -4',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Résous: x² = 16, alors x = ?',
        answer: '4 ou -4',
        wrongAnswers: ['4 seulement', '-4 seulement', '8 ou -8']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x² - 9 = 0, alors x = ?',
        answer: '3 ou -3',
        wrongAnswers: ['3 seulement', '-3 seulement', '9 ou -9']
      },
      {
        type: 'multiple_choice',
        question: 'Résous: x² = 25, alors x = ?',
        answer: '5 ou -5',
        wrongAnswers: ['5 seulement', '-5 seulement', '10 ou -10']
      },
      // Drag and Drop - Ordering (solutions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces solutions du plus petit au plus grand: -4, -3, 3',
        answer: ['-4', '-3', '3'], // -4 < -3 < 3
        wordBank: ['-4', '-3', '3'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Résous: x² = 16. Glisse la solution:',
        answer: 'x = 4 ou x = -4',
        wordBank: ['x = 4', 'x = -4', 'x = 4 ou x = -4', 'x = 8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (quadratic equation)
      {
        type: 'drag_and_drop',
        question: 'Résous: x² - 9 = 0. Glisse la solution:',
        answer: 'x = 3 ou x = -3',
        wordBank: ['x = 3', 'x = -3', 'x = 3 ou x = -3', 'x = 9'],
        mode: 'select'
      },
      // Drag and Drop - Selection (quadratic equation)
      {
        type: 'drag_and_drop',
        question: 'Résous: x² = 25. Glisse la solution:',
        answer: 'x = 5 ou x = -5',
        wordBank: ['x = 5', 'x = -5', 'x = 5 ou x = -5', 'x = 10'],
        mode: 'select'
      }
    ]
  },

  'ch7-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les équations permettent de résoudre des problèmes concrets en traduisant des situations en langage mathématique", answer: "vrai" },
      { question: "Tous les problèmes peuvent être résolus avec une seule équation", answer: "faux" },
      { question: "On peut vérifier une solution en la substituant dans l'équation originale", answer: "vrai" },
      { question: "Un problème peut être traduit en équation en identifiant l'inconnue et les relations", answer: "vrai" },
      { question: "Pour résoudre un problème, on traduit d'abord la situation en équation, puis on résout", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Un nombre plus 5 égale 12. Quel est ce nombre?',
        answer: '7',
        wrongAnswers: ['17', '10', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Le double d\'un nombre moins 3 égale 11. Quel est ce nombre?',
        answer: '7',
        wrongAnswers: ['8', '14', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Un nombre multiplié par 3 plus 4 égale 19. Quel est ce nombre?',
        answer: '5',
        wrongAnswers: ['15', '7', '3']
      },
      {
        type: 'multiple_choice',
        question: 'La somme d\'un nombre et de 8 égale 15. Quel est ce nombre?',
        answer: '7',
        wrongAnswers: ['23', '12', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Un tiers d\'un nombre égale 5. Quel est ce nombre?',
        answer: '15',
        wrongAnswers: ['5', '10', '20']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les équations permettent de résoudre des problèmes concrets',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes peuvent être résolus avec une seule équation',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour résoudre un problème, on traduit d\'abord la situation en équation, puis on résout',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut vérifier une solution en la substituant',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Un nombre plus 5 égale 12. Ce nombre est:',
        answer: '7',
        wrongAnswers: ['17', '10', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Le double d\'un nombre moins 3 égale 11. Ce nombre est:',
        answer: '7',
        wrongAnswers: ['8', '14', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Un nombre multiplié par 3 plus 4 égale 19. Ce nombre est:',
        answer: '5',
        wrongAnswers: ['6', '4', '15']
      },
      // Drag and Drop - Ordering (solutions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces solutions du plus petit au plus grand: 5, 7, 15',
        answer: ['5', '7', '15'], // 5 < 7 < 15
        wordBank: ['5', '7', '15'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un nombre plus 5 égale 12. Quel est ce nombre? Glisse la réponse:',
        answer: '7',
        wordBank: ['17', '10', '7', '5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (word problem)
      {
        type: 'drag_and_drop',
        question: 'Le double d\'un nombre moins 3 égale 11. Quel est ce nombre? Glisse la réponse:',
        answer: '7',
        wordBank: ['8', '14', '7', '4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (word problem)
      {
        type: 'drag_and_drop',
        question: 'Un nombre multiplié par 3 plus 4 égale 19. Quel est ce nombre? Glisse la réponse:',
        answer: '5',
        wordBank: ['15', '7', '5', '3'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 8: REPÉRAGE
  'ch8-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Sur une droite graduée, chaque point a une abscisse unique qui indique sa position", answer: "vrai" },
      { question: "Tous les points sur une droite graduée ont toujours une abscisse positive", answer: "faux" },
      { question: "L'abscisse de l'origine O est 0 car c'est le point de référence", answer: "vrai" },
      { question: "Le point A(5) est à 5 unités de l'origine car son abscisse est 5", answer: "vrai" },
      { question: "Les points à droite de l'origine ont des abscisses positives, ceux à gauche ont des abscisses négatives", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'abscisse du point à 7 unités à droite de O?',
        answer: '7',
        wrongAnswers: ['-7', '0', '14']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'abscisse du point à 4 unités à gauche de O?',
        answer: '-4',
        wrongAnswers: ['4', '0', '-8']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'abscisse du point à 9 unités à droite de O?',
        answer: '9',
        wrongAnswers: ['-9', '0', '18']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'abscisse du point à 6 unités à gauche de O?',
        answer: '-6',
        wrongAnswers: ['6', '0', '-12']
      },
      {
        type: 'multiple_choice',
        question: 'Le point A(8) est situé:',
        answer: 'À 8 unités à droite de O',
        wrongAnswers: ['À 8 unités à gauche de O', 'À l\'origine O', 'À 4 unités de O']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Sur une droite graduée, chaque point a une abscisse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les points sur une droite graduée ont toujours une abscisse positive',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les points à droite de l\'origine ont des abscisses positives, ceux à gauche ont des abscisses négatives',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le point B(-3) est à gauche de O',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'abscisse du point à 7 unités à droite de O?',
        answer: '7',
        wrongAnswers: ['-7', '0', '14']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'abscisse du point à 4 unités à gauche de O?',
        answer: '-4',
        wrongAnswers: ['4', '0', '-8']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'abscisse du point à 9 unités à droite de O?',
        answer: '9',
        wrongAnswers: ['-9', '0', '18']
      },
      // Drag and Drop - Ordering (abscissas from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces abscisses du plus petit au plus grand: -4, 0, 7',
        answer: ['-4', '0', '7'], // -4 < 0 < 7
        wordBank: ['-4', '0', '7'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'abscisse du point à 7 unités à droite de O? Glisse la réponse:',
        answer: '7',
        wordBank: ['-7', '0', '7', '14'],
        mode: 'select'
      },
      // Drag and Drop - Selection (position)
      {
        type: 'drag_and_drop',
        question: 'Le point A(8) est situé: Glisse la réponse:',
        answer: 'À 8 unités à droite de O',
        wordBank: ['À 8 unités à gauche de O', 'À 8 unités à droite de O', 'À l\'origine O', 'À 4 unités de O'],
        mode: 'select'
      },
      // Drag and Drop - Selection (negative abscissa)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'abscisse du point à 4 unités à gauche de O? Glisse la réponse:',
        answer: '-4',
        wordBank: ['4', '0', '-4', '-8'],
        mode: 'select'
      }
    ]
  },

  'ch8-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "AB̅ = |xB - xA| est la formule pour calculer la distance entre deux points sur une droite graduée", answer: "vrai" },
      { question: "La distance entre deux points peut toujours être calculée sans valeur absolue", answer: "faux" },
      { question: "Si A(2) et B(8), alors AB̅ = 6 car |8 - 2| = 6", answer: "vrai" },
      { question: "La relation de Chasles: AB̅ + BC̅ = AC̅ permet de calculer la distance totale", answer: "vrai" },
      { question: "Pour calculer une distance, on utilise la valeur absolue pour obtenir un résultat positif", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule AB̅ si A(2) et B(8)',
        answer: '6',
        wrongAnswers: ['10', '4', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule AC̅ si AB̅=2 et BC̅=6',
        answer: '8',
        wrongAnswers: ['4', '12', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule AB̅ si A(3) et B(10)',
        answer: '7',
        wrongAnswers: ['13', '5', '21']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule AB̅ si A(-2) et B(5)',
        answer: '7',
        wrongAnswers: ['3', '10', '14']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule AC̅ si AB̅=3 et BC̅=5',
        answer: '8',
        wrongAnswers: ['2', '15', '64']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La relation de Chasles: AB̅ + BC̅ = AC̅',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La distance entre deux points peut toujours être calculée sans valeur absolue',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer une distance, on utilise la valeur absolue pour obtenir un résultat positif',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si A(2) et B(8), alors AB̅ = 6',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule AB̅ si A(2) et B(8):',
        answer: '6',
        wrongAnswers: ['10', '4', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule AC̅ si AB̅=2 et BC̅=6:',
        answer: '8',
        wrongAnswers: ['4', '12', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule AB̅ si A(3) et B(10):',
        answer: '7',
        wrongAnswers: ['13', '5', '17']
      },
      // Drag and Drop - Ordering (distances from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces distances du plus petit au plus grand: 6, 7, 8',
        answer: ['6', '7', '8'], // 6 < 7 < 8
        wordBank: ['6', '7', '8'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule AB̅ si A(2) et B(8). Glisse le résultat:',
        answer: '6',
        wordBank: ['10', '4', '6', '16'],
        mode: 'select'
      },
      // Drag and Drop - Selection (distance calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule AC̅ si AB̅=2 et BC̅=6. Glisse le résultat:',
        answer: '8',
        wordBank: ['4', '12', '8', '16'],
        mode: 'select'
      },
      // Drag and Drop - Selection (distance with negative abscissa)
      {
        type: 'drag_and_drop',
        question: 'Calcule AB̅ si A(-2) et B(5). Glisse le résultat:',
        answer: '7',
        wordBank: ['3', '10', '7', '14'],
        mode: 'select'
      }
    ]
  },

  'ch8-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le milieu M de [AB] a pour abscisse xM = (xA + xB)/2 car il est équidistant des deux extrémités", answer: "vrai" },
      { question: "Le milieu d'un segment peut être calculé uniquement avec les coordonnées des extrémités", answer: "faux" },
      { question: "Si A(2) et B(8), alors xM = 5 car (2 + 8)/2 = 5", answer: "vrai" },
      { question: "AM = MB pour le milieu M car le milieu est le point équidistant des deux extrémités", answer: "vrai" },
      { question: "Pour trouver le milieu, on calcule la moyenne des abscisses des deux extrémités", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(1) et B(7)',
        answer: 'xM = 4',
        wrongAnswers: ['xM = 3', 'xM = 5', 'xM = 8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(-3) et B(7)',
        answer: 'xM = 2',
        wrongAnswers: ['xM = 0', 'xM = 4', 'xM = 5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(2) et B(10)',
        answer: 'xM = 6',
        wrongAnswers: ['xM = 4', 'xM = 8', 'xM = 5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(-5) et B(3)',
        answer: 'xM = -1',
        wrongAnswers: ['xM = -2', 'xM = 0', 'xM = 1']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(4) et B(12)',
        answer: 'xM = 8',
        wrongAnswers: ['xM = 6', 'xM = 10', 'xM = 16']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le milieu d\'un segment peut être calculé uniquement avec les coordonnées des extrémités',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'AM = MB pour le milieu M',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour trouver le milieu, on calcule la moyenne des abscisses des deux extrémités',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si A(2) et B(8), alors xM = 5',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(1) et B(7): xM = ?',
        answer: '4',
        wrongAnswers: ['3', '5', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(-3) et B(7): xM = ?',
        answer: '2',
        wrongAnswers: ['1', '3', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(2) et B(10): xM = ?',
        answer: '6',
        wrongAnswers: ['5', '7', '12']
      },
      // Drag and Drop - Ordering (midpoints from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces milieux du plus petit au plus grand: -1, 2, 4',
        answer: ['-1', '2', '4'], // -1 < 2 < 4
        wordBank: ['-1', '2', '4'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule le milieu de A(1) et B(7). Glisse le résultat:',
        answer: 'xM = 4',
        wordBank: ['xM = 3', 'xM = 5', 'xM = 4', 'xM = 8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (midpoint calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule le milieu de A(-3) et B(7). Glisse le résultat:',
        answer: 'xM = 2',
        wordBank: ['xM = 0', 'xM = 4', 'xM = 2', 'xM = 5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (midpoint calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule le milieu de A(2) et B(10). Glisse le résultat:',
        answer: 'xM = 6',
        wordBank: ['xM = 4', 'xM = 8', 'xM = 6', 'xM = 5'],
        mode: 'select'
      }
    ]
  },

  'ch8-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Le repérage permet de calculer des distances entre des points sur une droite graduée", answer: "vrai" },
      { question: "Tous les problèmes de géométrie nécessitent toujours un repérage", answer: "faux" },
      { question: "On peut trouver le milieu d'un segment en utilisant la formule du milieu", answer: "vrai" },
      { question: "La relation de Chasles est toujours vraie et permet de calculer des distances composées", answer: "vrai" },
      { question: "Le repérage permet de résoudre des problèmes géométriques avec des calculs numériques", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'A(10), B(30), C(50). Calcule AB̅',
        answer: 'AB̅ = 20',
        wrongAnswers: ['AB̅ = 10', 'AB̅ = 40', 'AB̅ = 30']
      },
      {
        type: 'multiple_choice',
        question: 'A(10), B(30), C(50). Calcule BC̅',
        answer: 'BC̅ = 20',
        wrongAnswers: ['BC̅ = 10', 'BC̅ = 40', 'BC̅ = 30']
      },
      {
        type: 'multiple_choice',
        question: 'A(10), B(30), C(50). Calcule AC̅',
        answer: 'AC̅ = 40',
        wrongAnswers: ['AC̅ = 20', 'AC̅ = 30', 'AC̅ = 60']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(10) et B(30)',
        answer: 'xM = 20',
        wrongAnswers: ['xM = 15', 'xM = 25', 'xM = 40']
      },
      {
        type: 'multiple_choice',
        question: 'A(5), B(15), C(25). Vérifie la relation de Chasles. Quelle est la valeur de AB̅ + BC̅?',
        answer: '20',
        wrongAnswers: ['10', '30', '40']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le repérage permet de calculer des distances',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes de géométrie nécessitent toujours un repérage',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La relation de Chasles est toujours vraie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut trouver le milieu d\'un segment',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'A(10), B(30), C(50). Calcule AB̅:',
        answer: '20',
        wrongAnswers: ['10', '30', '40']
      },
      {
        type: 'multiple_choice',
        question: 'A(10), B(30), C(50). Calcule AC̅:',
        answer: '40',
        wrongAnswers: ['20', '30', '50']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le milieu de A(10) et B(30): xM = ?',
        answer: '20',
        wrongAnswers: ['15', '25', '30']
      },
      // Drag and Drop - Ordering (distances from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces distances du plus petit au plus grand: 10, 20, 40',
        answer: ['10', '20', '40'], // 10 < 20 < 40
        wordBank: ['10', '20', '40'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'A(10), B(30), C(50). Calcule AB̅. Glisse le résultat:',
        answer: 'AB̅ = 20',
        wordBank: ['AB̅ = 10', 'AB̅ = 40', 'AB̅ = 20', 'AB̅ = 30'],
        mode: 'select'
      },
      // Drag and Drop - Selection (distance calculation)
      {
        type: 'drag_and_drop',
        question: 'A(10), B(30), C(50). Calcule AC̅. Glisse le résultat:',
        answer: 'AC̅ = 40',
        wordBank: ['AC̅ = 20', 'AC̅ = 30', 'AC̅ = 40', 'AC̅ = 60'],
        mode: 'select'
      },
      // Drag and Drop - Selection (midpoint)
      {
        type: 'drag_and_drop',
        question: 'Calcule le milieu de A(10) et B(30). Glisse le résultat:',
        answer: 'xM = 20',
        wordBank: ['xM = 15', 'xM = 25', 'xM = 40', 'xM = 20'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 9: LES ANGLES
  'ch9-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un angle aigu mesure moins de 90° car il est plus petit qu'un angle droit", answer: "vrai" },
      { question: "Tous les angles mesurent toujours moins de 180°", answer: "faux" },
      { question: "Un angle droit mesure exactement 90°", answer: "vrai" },
      { question: "Un angle obtus mesure entre 90° et 180° car il est plus grand qu'un angle droit mais plus petit qu'un angle plat", answer: "vrai" },
      { question: "On peut classifier les angles selon leur mesure en degrés", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel type d\'angle mesure 45°?',
        answer: 'Angle aigu',
        wrongAnswers: ['Angle droit', 'Angle obtus', 'Angle plat']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type d\'angle mesure 90°?',
        answer: 'Angle droit',
        wrongAnswers: ['Angle aigu', 'Angle obtus', 'Angle plat']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type d\'angle mesure 120°?',
        answer: 'Angle obtus',
        wrongAnswers: ['Angle aigu', 'Angle droit', 'Angle plat']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type d\'angle mesure 60°?',
        answer: 'Angle aigu',
        wrongAnswers: ['Angle droit', 'Angle obtus', 'Angle plat']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type d\'angle mesure 100°?',
        answer: 'Angle obtus',
        wrongAnswers: ['Angle aigu', 'Angle droit', 'Angle plat']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un angle aigu mesure moins de 90°',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les angles mesurent toujours moins de 180°',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut classifier les angles selon leur mesure en degrés',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un angle de 100° est obtus',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un angle de 45° est un angle:',
        answer: 'aigu',
        wrongAnswers: ['droit', 'obtus', 'plat']
      },
      {
        type: 'multiple_choice',
        question: 'Un angle de 90° est un angle:',
        answer: 'droit',
        wrongAnswers: ['aigu', 'obtus', 'plat']
      },
      {
        type: 'multiple_choice',
        question: 'Un angle de 120° est un angle:',
        answer: 'obtus',
        wrongAnswers: ['aigu', 'droit', 'plat']
      },
      // Drag and Drop - Ordering (angles from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces angles du plus petit au plus grand: 45°, 90°, 120°',
        answer: ['45°', '90°', '120°'], // 45 < 90 < 120
        wordBank: ['45°', '90°', '120°'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel type d\'angle mesure 45°? Glisse la réponse:',
        answer: 'Angle aigu',
        wordBank: ['Angle droit', 'Angle aigu', 'Angle obtus', 'Angle plat'],
        mode: 'select'
      },
      // Drag and Drop - Selection (angle classification)
      {
        type: 'drag_and_drop',
        question: 'Quel type d\'angle mesure 90°? Glisse la réponse:',
        answer: 'Angle droit',
        wordBank: ['Angle aigu', 'Angle droit', 'Angle obtus', 'Angle plat'],
        mode: 'select'
      },
      // Drag and Drop - Selection (angle classification)
      {
        type: 'drag_and_drop',
        question: 'Quel type d\'angle mesure 120°? Glisse la réponse:',
        answer: 'Angle obtus',
        wordBank: ['Angle aigu', 'Angle droit', 'Angle obtus', 'Angle plat'],
        mode: 'select'
      }
    ]
  },

  'ch9-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Deux angles complémentaires ont une somme de 90° car ils forment ensemble un angle droit", answer: "vrai" },
      { question: "Tous les angles ont toujours un complémentaire", answer: "faux" },
      { question: "Deux angles supplémentaires ont une somme de 180° car ils forment ensemble un angle plat", answer: "vrai" },
      { question: "Si un angle mesure 30°, son complémentaire mesure 60° car 30° + 60° = 90°", answer: "vrai" },
      { question: "Pour trouver le complémentaire d'un angle, on soustrait sa mesure de 90°", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Trouve le complémentaire de 30°',
        answer: '60°',
        wrongAnswers: ['30°', '90°', '120°']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le supplémentaire de 120°',
        answer: '60°',
        wrongAnswers: ['120°', '180°', '240°']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le complémentaire de 45°',
        answer: '45°',
        wrongAnswers: ['90°', '135°', '180°']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le supplémentaire de 80°',
        answer: '100°',
        wrongAnswers: ['80°', '180°', '260°']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le complémentaire de 20°',
        answer: '70°',
        wrongAnswers: ['20°', '90°', '160°']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Deux angles complémentaires ont une somme de 90°',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les angles ont toujours un complémentaire',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour trouver le complémentaire d\'un angle, on soustrait sa mesure de 90°',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si un angle mesure 30°, son complémentaire mesure 60°',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Trouve le complémentaire de 30°:',
        answer: '60°',
        wrongAnswers: ['30°', '90°', '150°']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le supplémentaire de 120°:',
        answer: '60°',
        wrongAnswers: ['120°', '180°', '240°']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le complémentaire de 45°:',
        answer: '45°',
        wrongAnswers: ['90°', '135°', '30°']
      },
      // Drag and Drop - Ordering (angles from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces angles du plus petit au plus grand: 45°, 60°, 70°',
        answer: ['45°', '60°', '70°'], // 45 < 60 < 70
        wordBank: ['45°', '60°', '70°'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Trouve le complémentaire de 30°. Glisse la réponse:',
        answer: '60°',
        wordBank: ['30°', '90°', '60°', '120°'],
        mode: 'select'
      },
      // Drag and Drop - Selection (supplementary angle)
      {
        type: 'drag_and_drop',
        question: 'Trouve le supplémentaire de 120°. Glisse la réponse:',
        answer: '60°',
        wordBank: ['120°', '180°', '60°', '240°'],
        mode: 'select'
      },
      // Drag and Drop - Selection (complementary angle)
      {
        type: 'drag_and_drop',
        question: 'Trouve le complémentaire de 45°. Glisse la réponse:',
        answer: '45°',
        wordBank: ['90°', '135°', '45°', '180°'],
        mode: 'select'
      }
    ]
  },

  'ch9-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Des angles opposés par le sommet sont égaux car ils se font face à l'intersection de deux droites", answer: "vrai" },
      { question: "Tous les angles formés par deux droites sont toujours égaux", answer: "faux" },
      { question: "Des angles alternes-internes sont égaux si les droites sont parallèles selon une propriété géométrique", answer: "vrai" },
      { question: "Des angles correspondants sont égaux si les droites sont parallèles selon une propriété géométrique", answer: "vrai" },
      { question: "Les propriétés des angles permettent de calculer des angles manquants dans des figures géométriques", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si deux angles opposés par le sommet, l\'un mesure 50°, que vaut l\'autre?',
        answer: '50°',
        wrongAnswers: ['130°', '100°', '40°']
      },
      {
        type: 'multiple_choice',
        question: 'Si deux angles opposés par le sommet, l\'un mesure 70°, que vaut l\'autre?',
        answer: '70°',
        wrongAnswers: ['110°', '140°', '35°']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété s\'applique si deux droites sont parallèles?',
        answer: 'Les angles alternes-internes sont égaux',
        wrongAnswers: ['Tous les angles sont égaux', 'Les angles sont toujours complémentaires', 'Les angles sont toujours supplémentaires']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété s\'applique si deux droites sont parallèles?',
        answer: 'Les angles correspondants sont égaux',
        wrongAnswers: ['Tous les angles sont égaux', 'Les angles sont toujours complémentaires', 'Les angles sont toujours supplémentaires']
      },
      {
        type: 'multiple_choice',
        question: 'Si deux angles opposés par le sommet, l\'un mesure 80°, que vaut l\'autre?',
        answer: '80°',
        wrongAnswers: ['100°', '160°', '40°']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Des angles opposés par le sommet sont égaux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les angles formés par deux droites sont toujours égaux',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les propriétés des angles permettent de calculer des angles manquants dans des figures géométriques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si deux droites sont parallèles, les angles alternes-internes sont égaux',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Si deux angles opposés par le sommet, l\'un mesure 50°, l\'autre mesure:',
        answer: '50°',
        wrongAnswers: ['130°', '40°', '100°']
      },
      {
        type: 'multiple_choice',
        question: 'Si deux angles opposés par le sommet, l\'un mesure 70°, l\'autre mesure:',
        answer: '70°',
        wrongAnswers: ['110°', '60°', '140°']
      },
      {
        type: 'multiple_choice',
        question: 'Si deux angles opposés par le sommet, l\'un mesure 80°, l\'autre mesure:',
        answer: '80°',
        wrongAnswers: ['100°', '70°', '160°']
      },
      // Drag and Drop - Ordering (angles from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces angles du plus petit au plus grand: 50°, 70°, 80°',
        answer: ['50°', '70°', '80°'], // 50 < 70 < 80
        wordBank: ['50°', '70°', '80°'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si deux angles opposés par le sommet, l\'un mesure 50°, que vaut l\'autre? Glisse la réponse:',
        answer: '50°',
        wordBank: ['130°', '100°', '50°', '40°'],
        mode: 'select'
      },
      // Drag and Drop - Selection (angle property)
      {
        type: 'drag_and_drop',
        question: 'Quelle propriété s\'applique si deux droites sont parallèles? Glisse la réponse:',
        answer: 'Les angles alternes-internes sont égaux',
        wordBank: ['Tous les angles sont égaux', 'Les angles alternes-internes sont égaux', 'Les angles sont toujours complémentaires', 'Les angles sont toujours supplémentaires'],
        mode: 'select'
      },
      // Drag and Drop - Selection (opposite angles)
      {
        type: 'drag_and_drop',
        question: 'Si deux angles opposés par le sommet, l\'un mesure 70°, que vaut l\'autre? Glisse la réponse:',
        answer: '70°',
        wordBank: ['110°', '140°', '35°', '70°'],
        mode: 'select'
      }
    ]
  },

  'ch9-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "La somme des angles d'un triangle est toujours 180° selon une propriété géométrique fondamentale", answer: "vrai" },
      { question: "Tous les triangles ont toujours exactement les mêmes angles", answer: "faux" },
      { question: "La somme des angles d'un quadrilatère est toujours 360° selon une propriété géométrique", answer: "vrai" },
      { question: "On peut calculer un angle manquant dans une figure en utilisant les propriétés des sommes d'angles", answer: "vrai" },
      { question: "Pour trouver un angle manquant, on soustrait la somme des angles connus de la somme totale", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Triangle: angles 60° et 80°. Trouve le troisième angle',
        answer: '40°',
        wrongAnswers: ['20°', '100°', '140°']
      },
      {
        type: 'multiple_choice',
        question: 'Quadrilatère: angles 90°, 90°, 70°. Trouve le quatrième angle',
        answer: '110°',
        wrongAnswers: ['90°', '100°', '120°']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle: angles 50° et 70°. Trouve le troisième angle',
        answer: '60°',
        wrongAnswers: ['40°', '80°', '120°']
      },
      {
        type: 'multiple_choice',
        question: 'Quadrilatère: angles 80°, 100°, 90°. Trouve le quatrième angle',
        answer: '90°',
        wrongAnswers: ['80°', '100°', '110°']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle: angles 45° et 60°. Trouve le troisième angle',
        answer: '75°',
        wrongAnswers: ['45°', '60°', '105°']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La somme des angles d\'un triangle est 180°',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les triangles ont toujours exactement les mêmes angles',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour trouver un angle manquant, on soustrait la somme des angles connus de la somme totale',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut calculer un angle manquant dans une figure',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Triangle: angles 60° et 80°. Le troisième angle est:',
        answer: '40°',
        wrongAnswers: ['20°', '60°', '140°']
      },
      {
        type: 'multiple_choice',
        question: 'Quadrilatère: angles 90°, 90°, 70°. Le quatrième angle est:',
        answer: '110°',
        wrongAnswers: ['90°', '100°', '120°']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle: angles 50° et 70°. Le troisième angle est:',
        answer: '60°',
        wrongAnswers: ['50°', '70°', '120°']
      },
      // Drag and Drop - Ordering (angles from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces angles du plus petit au plus grand: 40°, 60°, 110°',
        answer: ['40°', '60°', '110°'], // 40 < 60 < 110
        wordBank: ['40°', '60°', '110°'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Triangle: angles 60° et 80°. Trouve le troisième angle. Glisse la réponse:',
        answer: '40°',
        wordBank: ['20°', '100°', '40°', '140°'],
        mode: 'select'
      },
      // Drag and Drop - Selection (quadrilateral angle)
      {
        type: 'drag_and_drop',
        question: 'Quadrilatère: angles 90°, 90°, 70°. Trouve le quatrième angle. Glisse la réponse:',
        answer: '110°',
        wordBank: ['90°', '100°', '110°', '120°'],
        mode: 'select'
      },
      // Drag and Drop - Selection (triangle angle)
      {
        type: 'drag_and_drop',
        question: 'Triangle: angles 50° et 70°. Trouve le troisième angle. Glisse la réponse:',
        answer: '60°',
        wordBank: ['40°', '80°', '60°', '120°'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 10: TRIANGLES
  'ch10-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un triangle équilatéral a 3 côtés égaux et 3 angles égaux de 60°", answer: "vrai" },
      { question: "Tous les triangles ont toujours des côtés de longueurs différentes", answer: "faux" },
      { question: "Un triangle isocèle a 2 côtés égaux et 2 angles égaux à la base", answer: "vrai" },
      { question: "Un triangle rectangle a un angle droit de 90° et l'hypoténuse comme côté le plus long", answer: "vrai" },
      { question: "On peut classifier les triangles selon leurs côtés (équilatéral, isocèle, scalène) ou leurs angles (rectangle, aigu, obtus)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Classe ce triangle: 3 côtés de 5 cm',
        answer: 'Équilatéral',
        wrongAnswers: ['Isocèle', 'Scalène', 'Rectangle']
      },
      {
        type: 'multiple_choice',
        question: 'Classe ce triangle: 2 côtés de 4 cm, 1 côté de 6 cm',
        answer: 'Isocèle',
        wrongAnswers: ['Équilatéral', 'Scalène', 'Rectangle']
      },
      {
        type: 'multiple_choice',
        question: 'Classe ce triangle: 3 côtés de 3 cm, 4 cm, 5 cm',
        answer: 'Scalène',
        wrongAnswers: ['Équilatéral', 'Isocèle', 'Rectangle']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de triangle a un angle de 90°?',
        answer: 'Triangle rectangle',
        wrongAnswers: ['Triangle équilatéral', 'Triangle isocèle', 'Triangle scalène']
      },
      {
        type: 'multiple_choice',
        question: 'Classe ce triangle: 2 côtés de 6 cm, 1 côté de 8 cm',
        answer: 'Isocèle',
        wrongAnswers: ['Équilatéral', 'Scalène', 'Rectangle']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un triangle équilatéral a 3 côtés égaux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les triangles ont toujours des côtés de longueurs différentes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut classifier les triangles selon leurs côtés ou leurs angles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un triangle avec un angle de 90° est rectangle',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Classe ce triangle: 3 côtés de 5 cm. C\'est un triangle:',
        answer: 'équilatéral',
        wrongAnswers: ['isocèle', 'rectangle', 'scalène']
      },
      {
        type: 'multiple_choice',
        question: 'Classe ce triangle: 2 côtés de 4 cm, 1 côté de 6 cm. C\'est un triangle:',
        answer: 'isocèle',
        wrongAnswers: ['équilatéral', 'rectangle', 'scalène']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de triangle a un angle de 90°?',
        answer: 'Triangle rectangle',
        wrongAnswers: ['Triangle équilatéral', 'Triangle isocèle', 'Triangle scalène']
      },
      // Drag and Drop - Ordering (triangle types by number of equal sides)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces triangles du plus de côtés égaux au moins: Équilatéral, Isocèle, Scalène',
        answer: ['Équilatéral', 'Isocèle', 'Scalène'], // 3 equal, 2 equal, 0 equal
        wordBank: ['Équilatéral', 'Isocèle', 'Scalène'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Classe ce triangle: 3 côtés de 5 cm. Glisse la réponse:',
        answer: 'Équilatéral',
        wordBank: ['Isocèle', 'Scalène', 'Équilatéral', 'Rectangle'],
        mode: 'select'
      },
      // Drag and Drop - Selection (triangle classification)
      {
        type: 'drag_and_drop',
        question: 'Classe ce triangle: 2 côtés de 4 cm, 1 côté de 6 cm. Glisse la réponse:',
        answer: 'Isocèle',
        wordBank: ['Équilatéral', 'Scalène', 'Isocèle', 'Rectangle'],
        mode: 'select'
      },
      // Drag and Drop - Selection (triangle type)
      {
        type: 'drag_and_drop',
        question: 'Quel type de triangle a un angle de 90°? Glisse la réponse:',
        answer: 'Triangle rectangle',
        wordBank: ['Triangle équilatéral', 'Triangle isocèle', 'Triangle rectangle', 'Triangle scalène'],
        mode: 'select'
      }
    ]
  },

  'ch10-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le théorème de Pythagore: a² + b² = c² dans un triangle rectangle où c est l'hypoténuse", answer: "vrai" },
      { question: "Le théorème de Pythagore s'applique à tous les types de triangles", answer: "faux" },
      { question: "Si a=3, b=4, alors c=5 car 3² + 4² = 9 + 16 = 25 = 5²", answer: "vrai" },
      { question: "L'hypoténuse est le côté opposé à l'angle droit et c'est le côté le plus long", answer: "vrai" },
      { question: "Pour calculer l'hypoténuse, on utilise la racine carrée de la somme des carrés des deux autres côtés", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 3 et 4. Calcule l\'hypoténuse',
        answer: '5',
        wrongAnswers: ['7', '12', '25']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: hypoténuse 10, côté 6. Calcule l\'autre côté',
        answer: '8',
        wrongAnswers: ['4', '16', '64']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 5 et 12. Calcule l\'hypoténuse',
        answer: '13',
        wrongAnswers: ['17', '7', '169']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: hypoténuse 15, côté 9. Calcule l\'autre côté',
        answer: '12',
        wrongAnswers: ['6', '24', '144']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 6 et 8. Calcule l\'hypoténuse',
        answer: '10',
        wrongAnswers: ['14', '48', '100']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le théorème de Pythagore: a² + b² = c² dans un triangle rectangle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le théorème de Pythagore s\'applique à tous les types de triangles',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer l\'hypoténuse, on utilise la racine carrée de la somme des carrés des deux autres côtés',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'hypoténuse est le côté opposé à l\'angle droit',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 3 et 4. L\'hypoténuse est:',
        answer: '5',
        wrongAnswers: ['6', '7', '25']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: hypoténuse 10, côté 6. L\'autre côté est:',
        answer: '8',
        wrongAnswers: ['4', '12', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 5 et 12. L\'hypoténuse est:',
        answer: '13',
        wrongAnswers: ['15', '17', '169']
      },
      // Drag and Drop - Ordering (hypotenuses from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces hypoténuses du plus petit au plus grand: 5, 10, 13',
        answer: ['5', '10', '13'], // 5 < 10 < 13
        wordBank: ['5', '10', '13'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle: côtés 3 et 4. Calcule l\'hypoténuse. Glisse le résultat:',
        answer: '5',
        wordBank: ['7', '12', '5', '25'],
        mode: 'select'
      },
      // Drag and Drop - Selection (Pythagorean theorem)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle: hypoténuse 10, côté 6. Calcule l\'autre côté. Glisse le résultat:',
        answer: '8',
        wordBank: ['4', '16', '8', '64'],
        mode: 'select'
      },
      // Drag and Drop - Selection (Pythagorean theorem)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle: côtés 5 et 12. Calcule l\'hypoténuse. Glisse le résultat:',
        answer: '13',
        wordBank: ['17', '7', '13', '169'],
        mode: 'select'
      }
    ]
  },

  'ch10-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'aire d'un triangle = (base × hauteur) / 2 car un triangle est la moitié d'un rectangle", answer: "vrai" },
      { question: "Toutes les formules d'aire de triangle utilisent toujours les mêmes unités", answer: "faux" },
      { question: "Si base=6, hauteur=4, alors aire=12 car (6 × 4) / 2 = 24 / 2 = 12", answer: "vrai" },
      { question: "Le périmètre d'un triangle = somme des 3 côtés car c'est la longueur totale du contour", answer: "vrai" },
      { question: "Pour calculer l'aire, on multiplie la base par la hauteur puis on divise par 2", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un triangle: base=6, hauteur=4',
        answer: '12',
        wrongAnswers: ['24', '10', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre: côtés 5, 7, 8',
        answer: '20',
        wrongAnswers: ['15', '25', '40']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un triangle: base=8, hauteur=3',
        answer: '12',
        wrongAnswers: ['24', '11', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre: côtés 4, 6, 9',
        answer: '19',
        wrongAnswers: ['15', '24', '10']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un triangle: base=10, hauteur=5',
        answer: '25',
        wrongAnswers: ['50', '15', '30']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'aire d\'un triangle = (base × hauteur) / 2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les formules d\'aire de triangle utilisent toujours les mêmes unités',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer l\'aire, on multiplie la base par la hauteur puis on divise par 2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le périmètre d\'un triangle = somme des 3 côtés',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un triangle: base=6, hauteur=4:',
        answer: '12',
        wrongAnswers: ['10', '14', '24']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre: côtés 5, 7, 8:',
        answer: '20',
        wrongAnswers: ['15', '25', '280']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un triangle: base=8, hauteur=3:',
        answer: '12',
        wrongAnswers: ['11', '13', '24']
      },
      // Drag and Drop - Ordering (areas/perimeters from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: 12, 19, 25',
        answer: ['12', '19', '25'], // 12 < 19 < 25
        wordBank: ['12', '19', '25'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un triangle: base=6, hauteur=4. Glisse le résultat:',
        answer: '12',
        wordBank: ['24', '10', '12', '20'],
        mode: 'select'
      },
      // Drag and Drop - Selection (perimeter)
      {
        type: 'drag_and_drop',
        question: 'Calcule le périmètre: côtés 5, 7, 8. Glisse le résultat:',
        answer: '20',
        wordBank: ['15', '25', '20', '40'],
        mode: 'select'
      },
      // Drag and Drop - Selection (area)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un triangle: base=8, hauteur=3. Glisse le résultat:',
        answer: '12',
        wordBank: ['24', '11', '12', '5'],
        mode: 'select'
      }
    ]
  },

  'ch10-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les triangles sont utilisés en construction car ils sont des structures stables et rigides", answer: "vrai" },
      { question: "Tous les problèmes de géométrie nécessitent toujours l'utilisation de triangles", answer: "faux" },
      { question: "On peut calculer des hauteurs avec le théorème de Pythagore dans certains triangles", answer: "vrai" },
      { question: "Les propriétés des triangles sont importantes en géométrie et permettent de résoudre de nombreux problèmes", answer: "vrai" },
      { question: "Le théorème de Pythagore permet de calculer des longueurs manquantes dans des triangles rectangles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 6 et 8. Calcule l\'hypoténuse',
        answer: '10',
        wrongAnswers: ['14', '48', '100']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: hypoténuse 13, côté 5. Calcule l\'autre côté',
        answer: '12',
        wrongAnswers: ['8', '18', '144']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un triangle: base=10, hauteur=6',
        answer: '30',
        wrongAnswers: ['60', '16', '40']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre: côtés 7, 9, 11',
        answer: '27',
        wrongAnswers: ['17', '33', '63']
      },
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 9 et 12. Calcule l\'hypoténuse',
        answer: '15',
        wrongAnswers: ['21', '108', '225']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les triangles sont utilisés en construction',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes de géométrie nécessitent toujours l\'utilisation de triangles',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le théorème de Pythagore permet de calculer des longueurs manquantes dans des triangles rectangles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut calculer des hauteurs avec Pythagore',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Triangle rectangle: côtés 6 et 8. L\'hypoténuse est:',
        answer: '10',
        wrongAnswers: ['12', '14', '100']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un triangle: base=10, hauteur=6:',
        answer: '30',
        wrongAnswers: ['16', '60', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre: côtés 7, 9, 11:',
        answer: '27',
        wrongAnswers: ['17', '37', '693']
      },
      // Drag and Drop - Ordering (values from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: 10, 15, 30',
        answer: ['10', '15', '30'], // 10 < 15 < 30
        wordBank: ['10', '15', '30'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle: côtés 6 et 8. Calcule l\'hypoténuse. Glisse le résultat:',
        answer: '10',
        wordBank: ['14', '48', '10', '100'],
        mode: 'select'
      },
      // Drag and Drop - Selection (area calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un triangle: base=10, hauteur=6. Glisse le résultat:',
        answer: '30',
        wordBank: ['60', '16', '30', '40'],
        mode: 'select'
      },
      // Drag and Drop - Selection (Pythagorean theorem)
      {
        type: 'drag_and_drop',
        question: 'Triangle rectangle: côtés 9 et 12. Calcule l\'hypoténuse. Glisse le résultat:',
        answer: '15',
        wordBank: ['21', '108', '15', '225'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 11: QUADRILATÈRES
  'ch11-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un carré a 4 côtés égaux et 4 angles droits, c'est un quadrilatère régulier", answer: "vrai" },
      { question: "Tous les quadrilatères ont toujours 4 côtés égaux", answer: "faux" },
      { question: "Un rectangle a 4 angles droits et des côtés opposés égaux deux à deux", answer: "vrai" },
      { question: "Un losange a 4 côtés égaux mais pas nécessairement 4 angles droits", answer: "vrai" },
      { question: "On peut classifier les quadrilatères selon leurs côtés et leurs angles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Classe ce quadrilatère: 4 côtés égaux, 4 angles droits',
        answer: 'Carré',
        wrongAnswers: ['Rectangle', 'Losange', 'Parallélogramme']
      },
      {
        type: 'multiple_choice',
        question: 'Classe ce quadrilatère: 4 angles droits, côtés opposés égaux',
        answer: 'Rectangle',
        wrongAnswers: ['Carré', 'Losange', 'Trapèze']
      },
      {
        type: 'multiple_choice',
        question: 'Classe ce quadrilatère: 4 côtés égaux, angles opposés égaux',
        answer: 'Losange',
        wrongAnswers: ['Carré', 'Rectangle', 'Parallélogramme']
      },
      {
        type: 'multiple_choice',
        question: 'Quel quadrilatère a 4 côtés égaux et 4 angles droits?',
        answer: 'Carré',
        wrongAnswers: ['Rectangle', 'Losange', 'Parallélogramme']
      },
      {
        type: 'multiple_choice',
        question: 'Quel quadrilatère a 4 angles droits mais pas nécessairement 4 côtés égaux?',
        answer: 'Rectangle',
        wrongAnswers: ['Carré', 'Losange', 'Trapèze']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un carré a 4 côtés égaux et 4 angles droits',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les quadrilatères ont toujours 4 côtés égaux',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut classifier les quadrilatères selon leurs côtés et leurs angles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un losange a 4 côtés égaux',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Classe ce quadrilatère: 4 côtés égaux, 4 angles droits. C\'est un:',
        answer: 'carré',
        wrongAnswers: ['rectangle', 'losange', 'parallélogramme']
      },
      {
        type: 'multiple_choice',
        question: 'Classe ce quadrilatère: 4 angles droits, côtés opposés égaux. C\'est un:',
        answer: 'rectangle',
        wrongAnswers: ['carré', 'losange', 'parallélogramme']
      },
      {
        type: 'multiple_choice',
        question: 'Classe ce quadrilatère: 4 côtés égaux, angles opposés égaux. C\'est un:',
        answer: 'losange',
        wrongAnswers: ['carré', 'rectangle', 'parallélogramme']
      },
      // Drag and Drop - Ordering (quadrilaterals by number of equal sides)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces quadrilatères du plus de côtés égaux au moins: Carré, Rectangle, Trapèze',
        answer: ['Carré', 'Rectangle', 'Trapèze'], // 4 equal, 2 pairs equal, 0 equal
        wordBank: ['Carré', 'Rectangle', 'Trapèze'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Classe ce quadrilatère: 4 côtés égaux, 4 angles droits. Glisse la réponse:',
        answer: 'Carré',
        wordBank: ['Rectangle', 'Losange', 'Carré', 'Parallélogramme'],
        mode: 'select'
      },
      // Drag and Drop - Selection (quadrilateral classification)
      {
        type: 'drag_and_drop',
        question: 'Classe ce quadrilatère: 4 angles droits, côtés opposés égaux. Glisse la réponse:',
        answer: 'Rectangle',
        wordBank: ['Carré', 'Losange', 'Rectangle', 'Trapèze'],
        mode: 'select'
      },
      // Drag and Drop - Selection (quadrilateral type)
      {
        type: 'drag_and_drop',
        question: 'Quel quadrilatère a 4 côtés égaux et 4 angles droits? Glisse la réponse:',
        answer: 'Carré',
        wordBank: ['Rectangle', 'Losange', 'Carré', 'Parallélogramme'],
        mode: 'select'
      }
    ]
  },

  'ch11-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'aire d'un carré = côté² car un carré est un rectangle particulier avec longueur = largeur", answer: "vrai" },
      { question: "Toutes les formules d'aire de quadrilatères utilisent toujours les mêmes unités", answer: "faux" },
      { question: "L'aire d'un rectangle = longueur × largeur car c'est le produit des deux dimensions", answer: "vrai" },
      { question: "Le périmètre d'un carré = 4 × côté car un carré a 4 côtés égaux", answer: "vrai" },
      { question: "Pour calculer l'aire d'un carré, on multiplie le côté par lui-même", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un carré de côté 5',
        answer: '25',
        wrongAnswers: ['20', '10', '30']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un rectangle: L=8, l=5',
        answer: '40',
        wrongAnswers: ['13', '26', '80']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre d\'un carré de côté 6',
        answer: '24',
        wrongAnswers: ['12', '36', '18']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un carré de côté 7',
        answer: '49',
        wrongAnswers: ['14', '28', '21']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un rectangle: L=10, l=6',
        answer: '60',
        wrongAnswers: ['16', '32', '100']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'aire d\'un carré = côté²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les formules d\'aire de quadrilatères utilisent toujours les mêmes unités',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer l\'aire d\'un carré, on multiplie le côté par lui-même',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le périmètre d\'un carré = 4 × côté',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un carré de côté 5:',
        answer: '25',
        wrongAnswers: ['10', '20', '30']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un rectangle: L=8, l=5:',
        answer: '40',
        wrongAnswers: ['13', '26', '35']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre d\'un carré de côté 6:',
        answer: '24',
        wrongAnswers: ['12', '18', '36']
      },
      // Drag and Drop - Ordering (areas/perimeters from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: 24, 25, 40',
        answer: ['24', '25', '40'], // 24 < 25 < 40
        wordBank: ['24', '25', '40'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un carré de côté 5. Glisse le résultat:',
        answer: '25',
        wordBank: ['20', '10', '25', '30'],
        mode: 'select'
      },
      // Drag and Drop - Selection (rectangle area)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un rectangle: L=8, l=5. Glisse le résultat:',
        answer: '40',
        wordBank: ['13', '26', '40', '80'],
        mode: 'select'
      },
      // Drag and Drop - Selection (square perimeter)
      {
        type: 'drag_and_drop',
        question: 'Calcule le périmètre d\'un carré de côté 6. Glisse le résultat:',
        answer: '24',
        wordBank: ['12', '36', '18', '24'],
        mode: 'select'
      }
    ]
  },

  'ch11-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un parallélogramme a ses côtés opposés parallèles et égaux deux à deux", answer: "vrai" },
      { question: "Tous les quadrilatères ont toujours des côtés parallèles", answer: "faux" },
      { question: "L'aire d'un parallélogramme = base × hauteur car c'est similaire à un rectangle", answer: "vrai" },
      { question: "Un trapèze a exactement 2 côtés parallèles appelés bases", answer: "vrai" },
      { question: "L'aire d'un trapèze = (petite base + grande base) × hauteur / 2", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un parallélogramme: base=6, hauteur=4',
        answer: '24',
        wrongAnswers: ['10', '48', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un trapèze: bases 3 et 5, hauteur 4',
        answer: '16',
        wrongAnswers: ['12', '32', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un parallélogramme: base=8, hauteur=5',
        answer: '40',
        wrongAnswers: ['13', '80', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un trapèze: bases 4 et 8, hauteur 5',
        answer: '30',
        wrongAnswers: ['20', '60', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un parallélogramme: base=10, hauteur=7',
        answer: '70',
        wrongAnswers: ['17', '140', '35']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un parallélogramme a ses côtés opposés parallèles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les quadrilatères ont toujours des côtés parallèles',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'aire d\'un trapèze = (petite base + grande base) × hauteur / 2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un trapèze a toujours 2 côtés parallèles',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un parallélogramme: base=6, hauteur=4:',
        answer: '24',
        wrongAnswers: ['10', '20', '28']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un trapèze: bases 3 et 5, hauteur 4:',
        answer: '16',
        wrongAnswers: ['12', '20', '32']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un parallélogramme: base=8, hauteur=5:',
        answer: '40',
        wrongAnswers: ['13', '26', '35']
      },
      // Drag and Drop - Ordering (areas from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces aires du plus petit au plus grand: 16, 24, 40',
        answer: ['16', '24', '40'], // 16 < 24 < 40
        wordBank: ['16', '24', '40'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un parallélogramme: base=6, hauteur=4. Glisse le résultat:',
        answer: '24',
        wordBank: ['10', '48', '12', '24'],
        mode: 'select'
      },
      // Drag and Drop - Selection (trapezoid area)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un trapèze: bases 3 et 5, hauteur 4. Glisse le résultat:',
        answer: '16',
        wordBank: ['12', '32', '8', '16'],
        mode: 'select'
      },
      // Drag and Drop - Selection (parallelogram area)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un parallélogramme: base=8, hauteur=5. Glisse le résultat:',
        answer: '40',
        wordBank: ['13', '80', '20', '40'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 12: CERCLES
  'ch12-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le périmètre d'un cercle = 2πr où r est le rayon et π ≈ 3,14", answer: "vrai" },
      { question: "Tous les cercles ont toujours le même périmètre", answer: "faux" },
      { question: "L'aire d'un cercle = πr² où r est le rayon et π ≈ 3,14", answer: "vrai" },
      { question: "Si r=5, alors périmètre ≈ 31,4 car 2 × 3,14 × 5 = 31,4", answer: "vrai" },
      { question: "Pour calculer l'aire d'un cercle, on multiplie π par le carré du rayon", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre d\'un cercle de rayon 5 (π≈3,14)',
        answer: '31,4',
        wrongAnswers: ['15,7', '78,5', '10']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un cercle de rayon 4 (π≈3,14)',
        answer: '50,24',
        wrongAnswers: ['25,12', '12,56', '16']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre d\'un cercle de rayon 6 (π≈3,14)',
        answer: '37,68',
        wrongAnswers: ['18,84', '113,04', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un cercle de rayon 5 (π≈3,14)',
        answer: '78,5',
        wrongAnswers: ['31,4', '15,7', '25']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre d\'un cercle de rayon 7 (π≈3,14)',
        answer: '43,96',
        wrongAnswers: ['21,98', '153,86', '14']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le périmètre d\'un cercle = 2πr',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les cercles ont toujours le même périmètre',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer l\'aire d\'un cercle, on multiplie π par le carré du rayon',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'aire d\'un cercle = πr²',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre d\'un cercle de rayon 5 (π≈3,14):',
        answer: '31,4',
        wrongAnswers: ['15,7', '25', '78,5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'aire d\'un cercle de rayon 4 (π≈3,14):',
        answer: '50,24',
        wrongAnswers: ['12,56', '25,12', '100,48']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre d\'un cercle de rayon 6 (π≈3,14):',
        answer: '37,68',
        wrongAnswers: ['18,84', '28,26', '113,04']
      },
      // Drag and Drop - Ordering (perimeters/areas from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: 31,4, 37,68, 50,24',
        answer: ['31,4', '37,68', '50,24'], // 31.4 < 37.68 < 50.24
        wordBank: ['31,4', '37,68', '50,24'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule le périmètre d\'un cercle de rayon 5 (π≈3,14). Glisse le résultat:',
        answer: '31,4',
        wordBank: ['15,7', '78,5', '31,4', '10'],
        mode: 'select'
      },
      // Drag and Drop - Selection (circle area)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'aire d\'un cercle de rayon 4 (π≈3,14). Glisse le résultat:',
        answer: '50,24',
        wordBank: ['25,12', '12,56', '50,24', '16'],
        mode: 'select'
      },
      // Drag and Drop - Selection (circle perimeter)
      {
        type: 'drag_and_drop',
        question: 'Calcule le périmètre d\'un cercle de rayon 6 (π≈3,14). Glisse le résultat:',
        answer: '37,68',
        wordBank: ['18,84', '113,04', '37,68', '12'],
        mode: 'select'
      }
    ]
  },

  'ch12-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un arc de cercle est une partie de la circonférence délimitée par deux points", answer: "vrai" },
      { question: "Tous les arcs de cercle ont toujours la même longueur", answer: "faux" },
      { question: "Un secteur est une partie du disque délimitée par deux rayons et un arc", answer: "vrai" },
      { question: "La longueur d'un arc = (angle/360) × 2πr car on calcule une fraction de la circonférence totale", answer: "vrai" },
      { question: "Pour calculer la longueur d'un arc, on multiplie la circonférence par la fraction de l'angle sur 360°", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la longueur d\'un arc de 90° dans un cercle de rayon 4 (π≈3,14)',
        answer: '6,28',
        wrongAnswers: ['3,14', '12,56', '25,12']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la longueur d\'un arc de 180° dans un cercle de rayon 5 (π≈3,14)',
        answer: '15,7',
        wrongAnswers: ['7,85', '31,4', '78,5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la longueur d\'un arc de 60° dans un cercle de rayon 6 (π≈3,14)',
        answer: '6,28',
        wrongAnswers: ['3,14', '12,56', '18,84']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la longueur d\'un arc de 120° dans un cercle de rayon 3 (π≈3,14)',
        answer: '6,28',
        wrongAnswers: ['3,14', '9,42', '18,84']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle fraction du cercle représente un arc de 90°?',
        answer: '1/4',
        wrongAnswers: ['1/2', '1/3', '1/6']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un arc de cercle est une partie de la circonférence',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les arcs de cercle ont toujours la même longueur',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer la longueur d\'un arc, on multiplie la circonférence par la fraction de l\'angle sur 360°',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un arc de 180° représente la moitié du cercle',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule la longueur d\'un arc de 90° dans un cercle de rayon 4 (π≈3,14):',
        answer: '6,28',
        wrongAnswers: ['3,14', '12,56', '25,12']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la longueur d\'un arc de 180° dans un cercle de rayon 5 (π≈3,14):',
        answer: '15,7',
        wrongAnswers: ['7,85', '31,4', '78,5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la longueur d\'un arc de 60° dans un cercle de rayon 6 (π≈3,14):',
        answer: '6,28',
        wrongAnswers: ['3,14', '12,56', '18,84']
      },
      // Drag and Drop - Ordering (arc lengths from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces longueurs d\'arcs du plus petit au plus grand: 3,14, 6,28, 15,7',
        answer: ['3,14', '6,28', '15,7'], // 3.14 < 6.28 < 15.7
        wordBank: ['3,14', '6,28', '15,7'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la longueur d\'un arc de 90° dans un cercle de rayon 4 (π≈3,14). Glisse le résultat:',
        answer: '6,28',
        wordBank: ['3,14', '12,56', '6,28', '25,12'],
        mode: 'select'
      },
      // Drag and Drop - Selection (arc length)
      {
        type: 'drag_and_drop',
        question: 'Calcule la longueur d\'un arc de 180° dans un cercle de rayon 5 (π≈3,14). Glisse le résultat:',
        answer: '15,7',
        wordBank: ['7,85', '31,4', '15,7', '78,5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (arc fraction)
      {
        type: 'drag_and_drop',
        question: 'Quelle fraction du cercle représente un arc de 90°? Glisse la réponse:',
        answer: '1/4',
        wordBank: ['1/2', '1/3', '1/4', '1/6'],
        mode: 'select'
      }
    ]
  },

  'ch12-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un angle au centre intercepte un arc et son sommet est au centre du cercle", answer: "vrai" },
      { question: "Tous les angles dans un cercle sont toujours égaux", answer: "faux" },
      { question: "Un angle inscrit mesure la moitié de l'angle au centre interceptant le même arc selon une propriété géométrique", answer: "vrai" },
      { question: "Les propriétés des cercles sont importantes en géométrie et permettent de résoudre de nombreux problèmes", answer: "vrai" },
      { question: "Pour calculer un angle inscrit, on divise l'angle au centre correspondant par 2", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Angle au centre 60°. Que vaut l\'angle inscrit interceptant le même arc?',
        answer: '30°',
        wrongAnswers: ['60°', '120°', '15°']
      },
      {
        type: 'multiple_choice',
        question: 'Angle au centre 80°. Que vaut l\'angle inscrit interceptant le même arc?',
        answer: '40°',
        wrongAnswers: ['80°', '160°', '20°']
      },
      {
        type: 'multiple_choice',
        question: 'Angle au centre 100°. Que vaut l\'angle inscrit interceptant le même arc?',
        answer: '50°',
        wrongAnswers: ['100°', '200°', '25°']
      },
      {
        type: 'multiple_choice',
        question: 'Angle inscrit 25°. Que vaut l\'angle au centre interceptant le même arc?',
        answer: '50°',
        wrongAnswers: ['25°', '12,5°', '100°']
      },
      {
        type: 'multiple_choice',
        question: 'Angle inscrit 35°. Que vaut l\'angle au centre interceptant le même arc?',
        answer: '70°',
        wrongAnswers: ['35°', '17,5°', '140°']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un angle au centre intercepte un arc',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les angles dans un cercle sont toujours égaux',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer un angle inscrit, on divise l\'angle au centre correspondant par 2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un angle inscrit mesure la moitié de l\'angle au centre',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Angle au centre 60°. L\'angle inscrit interceptant le même arc est:',
        answer: '30°',
        wrongAnswers: ['60°', '120°', '15°']
      },
      {
        type: 'multiple_choice',
        question: 'Angle au centre 80°. L\'angle inscrit interceptant le même arc est:',
        answer: '40°',
        wrongAnswers: ['80°', '160°', '20°']
      },
      {
        type: 'multiple_choice',
        question: 'Angle inscrit 25°. L\'angle au centre interceptant le même arc est:',
        answer: '50°',
        wrongAnswers: ['25°', '100°', '12,5°']
      },
      // Drag and Drop - Ordering (angles from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces angles du plus petit au plus grand: 30°, 40°, 50°',
        answer: ['30°', '40°', '50°'], // 30 < 40 < 50
        wordBank: ['30°', '40°', '50°'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Angle au centre 60°. Que vaut l\'angle inscrit interceptant le même arc? Glisse la réponse:',
        answer: '30°',
        wordBank: ['60°', '120°', '30°', '15°'],
        mode: 'select'
      },
      // Drag and Drop - Selection (inscribed angle)
      {
        type: 'drag_and_drop',
        question: 'Angle au centre 80°. Que vaut l\'angle inscrit interceptant le même arc? Glisse la réponse:',
        answer: '40°',
        wordBank: ['80°', '160°', '40°', '20°'],
        mode: 'select'
      },
      // Drag and Drop - Selection (center angle)
      {
        type: 'drag_and_drop',
        question: 'Angle inscrit 25°. Que vaut l\'angle au centre interceptant le même arc? Glisse la réponse:',
        answer: '50°',
        wordBank: ['25°', '12,5°', '50°', '100°'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 13: SYMÉTRIE AXIALE
  'ch13-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La symétrie axiale conserve les distances car c'est une isométrie", answer: "vrai" },
      { question: "Toutes les transformations géométriques conservent toujours les distances", answer: "faux" },
      { question: "La symétrie axiale conserve les angles car les formes restent identiques", answer: "vrai" },
      { question: "L'axe de symétrie est perpendiculaire au segment joignant un point et son image et passe par son milieu", answer: "vrai" },
      { question: "Dans une symétrie axiale, un point et son image sont à égale distance de l'axe", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle propriété est conservée dans une symétrie axiale?',
        answer: 'Les distances et les angles',
        wrongAnswers: ['Seulement les distances', 'Seulement les angles', 'Rien n\'est conservé']
      },
      {
        type: 'multiple_choice',
        question: 'L\'axe de symétrie est-il perpendiculaire au segment joignant un point et son image?',
        answer: 'Oui, et il passe par le milieu',
        wrongAnswers: ['Non', 'Oui, mais ne passe pas par le milieu', 'Parallèle au segment']
      },
      {
        type: 'multiple_choice',
        question: 'Dans une symétrie axiale, un point et son image sont:',
        answer: 'À égale distance de l\'axe',
        wrongAnswers: ['À des distances différentes', 'Sur l\'axe', 'Sur la même droite']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle transformation conserve les distances et les angles?',
        answer: 'La symétrie axiale',
        wrongAnswers: ['La translation', 'L\'homothétie', 'Aucune transformation']
      },
      {
        type: 'multiple_choice',
        question: 'L\'axe de symétrie passe-t-il par le milieu du segment joignant un point et son image?',
        answer: 'Oui',
        wrongAnswers: ['Non', 'Parfois', 'Jamais']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La symétrie axiale conserve les distances',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les transformations géométriques conservent toujours les distances',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Dans une symétrie axiale, un point et son image sont à égale distance de l\'axe',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'axe de symétrie passe par le milieu du segment',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La symétrie axiale conserve les:',
        answer: 'distances et les angles',
        wrongAnswers: ['couleurs et les formes', 'positions et les tailles', 'directions et les orientations']
      },
      {
        type: 'multiple_choice',
        question: 'L\'axe de symétrie est _____ au segment joignant un point et son image',
        answer: 'perpendiculaire',
        wrongAnswers: ['parallèle', 'oblique', 'confondu']
      },
      {
        type: 'multiple_choice',
        question: 'Dans une symétrie axiale, un point et son image sont à _____ distance de l\'axe',
        answer: 'égale',
        wrongAnswers: ['différente', 'double', 'moitié']
      },
      // Drag and Drop - Ordering (properties by importance)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces propriétés: Angles, Distances, Milieu',
        answer: ['Distances', 'Angles', 'Milieu'], // Logical ordering
        wordBank: ['Distances', 'Angles', 'Milieu'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle propriété est conservée dans une symétrie axiale? Glisse la réponse:',
        answer: 'Les distances et les angles',
        wordBank: ['Seulement les distances', 'Seulement les angles', 'Les distances et les angles', 'Rien n\'est conservé'],
        mode: 'select'
      },
      // Drag and Drop - Selection (axis property)
      {
        type: 'drag_and_drop',
        question: 'L\'axe de symétrie est-il perpendiculaire au segment joignant un point et son image? Glisse la réponse:',
        answer: 'Oui, et il passe par le milieu',
        wordBank: ['Non', 'Oui, mais ne passe pas par le milieu', 'Oui, et il passe par le milieu', 'Parallèle au segment'],
        mode: 'select'
      },
      // Drag and Drop - Selection (distance property)
      {
        type: 'drag_and_drop',
        question: 'Dans une symétrie axiale, un point et son image sont: Glisse la réponse:',
        answer: 'À égale distance de l\'axe',
        wordBank: ['À des distances différentes', 'Sur l\'axe', 'À égale distance de l\'axe', 'Sur la même droite'],
        mode: 'select'
      }
    ]
  },

  'ch13-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Pour construire le symétrique d'un point, on trace la perpendiculaire à l'axe passant par ce point", answer: "vrai" },
      { question: "On peut construire plusieurs symétriques d'un même point par rapport à un axe", answer: "faux" },
      { question: "On reporte la distance de part et d'autre de l'axe pour trouver le symétrique", answer: "vrai" },
      { question: "Le symétrique d'un point est unique car il n'y a qu'une seule perpendiculaire à l'axe passant par ce point", answer: "vrai" },
      { question: "La construction du symétrique nécessite de tracer une perpendiculaire puis de reporter la distance", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pour construire le symétrique d\'un point, quelle est la première étape?',
        answer: 'Tracer la perpendiculaire à l\'axe passant par le point',
        wrongAnswers: ['Tracer une parallèle à l\'axe', 'Mesurer la distance', 'Tracer un cercle']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de symétriques peut-on construire pour un point donné?',
        answer: 'Un seul',
        wrongAnswers: ['Deux', 'Plusieurs', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la deuxième étape pour construire le symétrique?',
        answer: 'Reporter la distance de l\'autre côté de l\'axe',
        wrongAnswers: ['Tracer un cercle', 'Mesurer l\'angle', 'Tracer une parallèle']
      },
      {
        type: 'multiple_choice',
        question: 'Le segment joignant un point et son symétrique est-il perpendiculaire à l\'axe?',
        answer: 'Oui, toujours',
        wrongAnswers: ['Non', 'Parfois', 'Jamais']
      },
      {
        type: 'multiple_choice',
        question: 'L\'axe de symétrie passe-t-il par le milieu du segment joignant un point et son symétrique?',
        answer: 'Oui',
        wrongAnswers: ['Non', 'Parfois', 'Jamais']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Pour construire le symétrique, on trace la perpendiculaire',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut construire plusieurs symétriques d\'un même point par rapport à un axe',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La construction du symétrique nécessite de tracer une perpendiculaire puis de reporter la distance',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le symétrique d\'un point est unique',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Pour construire le symétrique d\'un point, on trace la _____ à l\'axe',
        answer: 'perpendiculaire',
        wrongAnswers: ['parallèle', 'médiatrice', 'bissectrice']
      },
      {
        type: 'multiple_choice',
        question: 'On reporte la _____ de part et d\'autre de l\'axe',
        answer: 'distance',
        wrongAnswers: ['longueur', 'angle', 'direction']
      },
      {
        type: 'multiple_choice',
        question: 'Le symétrique d\'un point est:',
        answer: 'unique',
        wrongAnswers: ['double', 'multiple', 'indéfini']
      },
      // Drag and Drop - Ordering (construction steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez les étapes de construction: Reporter la distance, Tracer la perpendiculaire',
        answer: ['Tracer la perpendiculaire', 'Reporter la distance'], // Step 1, Step 2
        wordBank: ['Tracer la perpendiculaire', 'Reporter la distance'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pour construire le symétrique d\'un point, quelle est la première étape? Glisse la réponse:',
        answer: 'Tracer la perpendiculaire à l\'axe passant par le point',
        wordBank: ['Tracer une parallèle à l\'axe', 'Mesurer la distance', 'Tracer la perpendiculaire à l\'axe passant par le point', 'Tracer un cercle'],
        mode: 'select'
      },
      // Drag and Drop - Selection (uniqueness)
      {
        type: 'drag_and_drop',
        question: 'Combien de symétriques peut-on construire pour un point donné? Glisse la réponse:',
        answer: 'Un seul',
        wordBank: ['Deux', 'Plusieurs', 'Un seul', 'Aucun'],
        mode: 'select'
      },
      // Drag and Drop - Selection (construction step)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la deuxième étape pour construire le symétrique? Glisse la réponse:',
        answer: 'Reporter la distance de l\'autre côté de l\'axe',
        wordBank: ['Tracer un cercle', 'Mesurer l\'angle', 'Reporter la distance de l\'autre côté de l\'axe', 'Tracer une parallèle'],
        mode: 'select'
      }
    ]
  },

  'ch13-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un carré a 4 axes de symétrie: 2 médianes et 2 diagonales", answer: "vrai" },
      { question: "Toutes les figures géométriques ont toujours le même nombre d'axes de symétrie", answer: "faux" },
      { question: "Un rectangle a 2 axes de symétrie qui sont les médianes perpendiculaires", answer: "vrai" },
      { question: "Un triangle isocèle a 1 axe de symétrie qui est la médiatrice de la base", answer: "vrai" },
      { question: "Le nombre d'axes de symétrie dépend de la forme de la figure géométrique", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien d\'axes de symétrie a un carré?',
        answer: '4 axes',
        wrongAnswers: ['2 axes', '6 axes', '8 axes']
      },
      {
        type: 'multiple_choice',
        question: 'Combien d\'axes de symétrie a un rectangle?',
        answer: '2 axes',
        wrongAnswers: ['1 axe', '4 axes', '6 axes']
      },
      {
        type: 'multiple_choice',
        question: 'Combien d\'axes de symétrie a un triangle isocèle?',
        answer: '1 axe',
        wrongAnswers: ['2 axes', '3 axes', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Combien d\'axes de symétrie a un triangle équilatéral?',
        answer: '3 axes',
        wrongAnswers: ['1 axe', '2 axes', '6 axes']
      },
      {
        type: 'multiple_choice',
        question: 'Combien d\'axes de symétrie a un losange?',
        answer: '2 axes',
        wrongAnswers: ['1 axe', '4 axes', 'Aucun']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un carré a 4 axes de symétrie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les figures géométriques ont toujours le même nombre d\'axes de symétrie',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le nombre d\'axes de symétrie dépend de la forme de la figure géométrique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un cercle a une infinité d\'axes de symétrie',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un carré a combien d\'axes de symétrie?',
        answer: '4',
        wrongAnswers: ['2', '6', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Un rectangle a combien d\'axes de symétrie?',
        answer: '2',
        wrongAnswers: ['1', '4', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle isocèle a combien d\'axe(s) de symétrie?',
        answer: '1',
        wrongAnswers: ['2', '3', '0']
      },
      // Drag and Drop - Ordering (number of axes from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces figures du moins au plus d\'axes de symétrie: Triangle isocèle (1), Rectangle (2), Carré (4)',
        answer: ['1', '2', '4'], // 1 < 2 < 4
        wordBank: ['1', '2', '4'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien d\'axes de symétrie a un carré? Glisse la réponse:',
        answer: '4 axes',
        wordBank: ['2 axes', '6 axes', '4 axes', '8 axes'],
        mode: 'select'
      },
      // Drag and Drop - Selection (rectangle axes)
      {
        type: 'drag_and_drop',
        question: 'Combien d\'axes de symétrie a un rectangle? Glisse la réponse:',
        answer: '2 axes',
        wordBank: ['1 axe', '4 axes', '2 axes', '6 axes'],
        mode: 'select'
      },
      // Drag and Drop - Selection (isosceles triangle)
      {
        type: 'drag_and_drop',
        question: 'Combien d\'axes de symétrie a un triangle isocèle? Glisse la réponse:',
        answer: '1 axe',
        wordBank: ['2 axes', '3 axes', '1 axe', 'Aucun'],
        mode: 'select'
      }
    ]
  },

  'ch13-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "La symétrie axiale est utilisée dans les motifs décoratifs car elle crée des formes équilibrées", answer: "vrai" },
      { question: "Tous les motifs décoratifs nécessitent toujours une symétrie axiale", answer: "faux" },
      { question: "On peut créer des figures symétriques en construisant le symétrique de chaque point", answer: "vrai" },
      { question: "Les propriétés de conservation sont importantes car elles préservent les caractéristiques des figures", answer: "vrai" },
      { question: "La symétrie axiale permet de créer des motifs réguliers et esthétiques", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Comment créer un motif symétrique?',
        answer: 'Construire le symétrique de chaque point par rapport à l\'axe',
        wrongAnswers: ['Tracer des lignes parallèles', 'Mesurer des angles', 'Calculer des distances']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété est importante dans la symétrie axiale?',
        answer: 'La conservation des distances et des angles',
        wrongAnswers: ['Le changement de taille', 'La rotation', 'La translation']
      },
      {
        type: 'multiple_choice',
        question: 'Où la symétrie axiale est-elle souvent utilisée?',
        answer: 'Dans les motifs décoratifs et l\'architecture',
        wrongAnswers: ['Uniquement en mathématiques', 'Seulement en géométrie', 'Jamais dans la pratique']
      },
      {
        type: 'multiple_choice',
        question: 'Pour créer une figure symétrique, que faut-il faire?',
        answer: 'Construire le symétrique de chaque élément par rapport à l\'axe',
        wrongAnswers: ['Copier la figure', 'Déplacer la figure', 'Agrandir la figure']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'utilité de la symétrie axiale?',
        answer: 'Créer des motifs équilibrés et esthétiques',
        wrongAnswers: ['Calculer des aires', 'Mesurer des angles', 'Tracer des cercles']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La symétrie axiale est utilisée dans les motifs décoratifs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les motifs décoratifs nécessitent toujours une symétrie axiale',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La symétrie axiale permet de créer des motifs réguliers et esthétiques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut créer des figures symétriques',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Pour créer un motif symétrique, on construit le _____ de chaque point',
        answer: 'symétrique',
        wrongAnswers: ['double', 'copie', 'image']
      },
      {
        type: 'multiple_choice',
        question: 'La symétrie axiale est utilisée dans les _____ décoratifs',
        answer: 'motifs',
        wrongAnswers: ['dessins', 'formes', 'couleurs']
      },
      {
        type: 'multiple_choice',
        question: 'Les propriétés de _____ sont importantes en symétrie axiale',
        answer: 'conservation',
        wrongAnswers: ['transformation', 'rotation', 'translation']
      },
      // Drag and Drop - Ordering (concepts by importance)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces concepts: Conservation, Motifs, Symétrie',
        answer: ['Symétrie', 'Conservation', 'Motifs'], // Logical ordering
        wordBank: ['Symétrie', 'Conservation', 'Motifs'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment créer un motif symétrique? Glisse la réponse:',
        answer: 'Construire le symétrique de chaque point par rapport à l\'axe',
        wordBank: ['Tracer des lignes parallèles', 'Mesurer des angles', 'Construire le symétrique de chaque point par rapport à l\'axe', 'Calculer des distances'],
        mode: 'select'
      },
      // Drag and Drop - Selection (property)
      {
        type: 'drag_and_drop',
        question: 'Quelle propriété est importante dans la symétrie axiale? Glisse la réponse:',
        answer: 'La conservation des distances et des angles',
        wordBank: ['Le changement de taille', 'La rotation', 'La conservation des distances et des angles', 'La translation'],
        mode: 'select'
      },
      // Drag and Drop - Selection (application)
      {
        type: 'drag_and_drop',
        question: 'Où la symétrie axiale est-elle souvent utilisée? Glisse la réponse:',
        answer: 'Dans les motifs décoratifs et l\'architecture',
        wordBank: ['Uniquement en mathématiques', 'Seulement en géométrie', 'Dans les motifs décoratifs et l\'architecture', 'Jamais dans la pratique'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 14: DROITES ET CERCLES
  'ch14-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une droite peut être extérieure, tangente ou sécante à un cercle selon la distance entre le centre et la droite", answer: "vrai" },
      { question: "Toutes les droites ont toujours la même position par rapport à un cercle", answer: "faux" },
      { question: "Une droite tangente touche le cercle en un seul point et est perpendiculaire au rayon en ce point", answer: "vrai" },
      { question: "Une droite sécante coupe le cercle en deux points distincts", answer: "vrai" },
      { question: "La position d'une droite par rapport à un cercle dépend de la distance entre le centre du cercle et la droite", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si distance centre-droite > rayon, la droite est:',
        answer: 'Extérieure',
        wrongAnswers: ['Tangente', 'Sécante', 'Intérieure']
      },
      {
        type: 'multiple_choice',
        question: 'Si distance centre-droite = rayon, la droite est:',
        answer: 'Tangente',
        wrongAnswers: ['Extérieure', 'Sécante', 'Intérieure']
      },
      {
        type: 'multiple_choice',
        question: 'Si distance centre-droite < rayon, la droite est:',
        answer: 'Sécante',
        wrongAnswers: ['Extérieure', 'Tangente', 'Parallèle']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de points d\'intersection a une droite tangente avec un cercle?',
        answer: '1 point',
        wrongAnswers: ['0 point', '2 points', 'Infini']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de points d\'intersection a une droite sécante avec un cercle?',
        answer: '2 points',
        wrongAnswers: ['0 point', '1 point', 'Infini']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une droite peut être extérieure, tangente ou sécante à un cercle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les droites ont toujours la même position par rapport à un cercle',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La position d\'une droite par rapport à un cercle dépend de la distance entre le centre du cercle et la droite',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une droite sécante coupe le cercle en 2 points',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Si distance centre-droite > rayon, la droite est:',
        answer: 'extérieure',
        wrongAnswers: ['tangente', 'sécante', 'intérieure']
      },
      {
        type: 'multiple_choice',
        question: 'Si distance centre-droite = rayon, la droite est:',
        answer: 'tangente',
        wrongAnswers: ['extérieure', 'sécante', 'parallèle']
      },
      {
        type: 'multiple_choice',
        question: 'Si distance centre-droite < rayon, la droite est:',
        answer: 'sécante',
        wrongAnswers: ['extérieure', 'tangente', 'parallèle']
      },
      // Drag and Drop - Ordering (positions by distance)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces positions par distance croissante: Extérieure, Tangente, Sécante',
        answer: ['Sécante', 'Tangente', 'Extérieure'], // d < r, d = r, d > r
        wordBank: ['Sécante', 'Tangente', 'Extérieure'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si distance centre-droite > rayon, la droite est: Glisse la réponse:',
        answer: 'Extérieure',
        wordBank: ['Tangente', 'Sécante', 'Extérieure', 'Intérieure'],
        mode: 'select'
      },
      // Drag and Drop - Selection (tangent)
      {
        type: 'drag_and_drop',
        question: 'Si distance centre-droite = rayon, la droite est: Glisse la réponse:',
        answer: 'Tangente',
        wordBank: ['Extérieure', 'Sécante', 'Tangente', 'Intérieure'],
        mode: 'select'
      },
      // Drag and Drop - Selection (secant)
      {
        type: 'drag_and_drop',
        question: 'Combien de points d\'intersection a une droite sécante avec un cercle? Glisse la réponse:',
        answer: '2 points',
        wordBank: ['0 point', '1 point', '2 points', 'Infini'],
        mode: 'select'
      }
    ]
  },

  'ch14-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La tangente est perpendiculaire au rayon au point de contact selon une propriété géométrique fondamentale", answer: "vrai" },
      { question: "Toutes les droites passant par un point extérieur sont tangentes au cercle", answer: "faux" },
      { question: "On peut construire une tangente à un cercle en traçant la perpendiculaire au rayon au point de contact", answer: "vrai" },
      { question: "Il y a exactement deux tangentes à un cercle depuis un point extérieur", answer: "vrai" },
      { question: "Pour construire une tangente, on trace d'abord le rayon puis la perpendiculaire à ce rayon", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La tangente est-elle perpendiculaire au rayon au point de contact?',
        answer: 'Oui, toujours',
        wrongAnswers: ['Non', 'Parfois', 'Jamais']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de tangentes peut-on tracer à un cercle depuis un point extérieur?',
        answer: '2 tangentes',
        wrongAnswers: ['1 tangente', '3 tangentes', 'Infini']
      },
      {
        type: 'multiple_choice',
        question: 'Pour construire une tangente, quelle est la première étape?',
        answer: 'Tracer le rayon au point de contact',
        wrongAnswers: ['Tracer un cercle', 'Mesurer la distance', 'Tracer une parallèle']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la deuxième étape pour construire une tangente?',
        answer: 'Tracer la perpendiculaire au rayon',
        wrongAnswers: ['Tracer un cercle', 'Mesurer l\'angle', 'Tracer une parallèle']
      },
      {
        type: 'multiple_choice',
        question: 'La tangente et le rayon forment quel angle au point de contact?',
        answer: 'Un angle droit (90°)',
        wrongAnswers: ['Un angle aigu', 'Un angle obtus', 'Un angle plat']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La tangente est perpendiculaire au rayon au point de contact',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les droites passant par un point extérieur sont tangentes au cercle',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour construire une tangente, on trace d\'abord le rayon puis la perpendiculaire à ce rayon',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Il y a deux tangentes à un cercle depuis un point extérieur',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La tangente est _____ au rayon au point de contact',
        answer: 'perpendiculaire',
        wrongAnswers: ['parallèle', 'oblique', 'confondu']
      },
      {
        type: 'multiple_choice',
        question: 'Il y a combien de tangentes à un cercle depuis un point extérieur?',
        answer: 'deux',
        wrongAnswers: ['une', 'trois', 'quatre']
      },
      {
        type: 'multiple_choice',
        question: 'Pour construire une tangente, on trace d\'abord le _____ puis la perpendiculaire',
        answer: 'rayon',
        wrongAnswers: ['diamètre', 'corde', 'arc']
      },
      // Drag and Drop - Ordering (construction steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez les étapes: Tracer la perpendiculaire, Tracer le rayon',
        answer: ['Tracer le rayon', 'Tracer la perpendiculaire'], // Step 1, Step 2
        wordBank: ['Tracer le rayon', 'Tracer la perpendiculaire'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'La tangente est-elle perpendiculaire au rayon au point de contact? Glisse la réponse:',
        answer: 'Oui, toujours',
        wordBank: ['Non', 'Parfois', 'Oui, toujours', 'Jamais'],
        mode: 'select'
      },
      // Drag and Drop - Selection (number of tangents)
      {
        type: 'drag_and_drop',
        question: 'Combien de tangentes peut-on tracer à un cercle depuis un point extérieur? Glisse la réponse:',
        answer: '2 tangentes',
        wordBank: ['1 tangente', '3 tangentes', '2 tangentes', 'Infini'],
        mode: 'select'
      },
      // Drag and Drop - Selection (construction step)
      {
        type: 'drag_and_drop',
        question: 'Pour construire une tangente, quelle est la première étape? Glisse la réponse:',
        answer: 'Tracer le rayon au point de contact',
        wordBank: ['Tracer un cercle', 'Mesurer la distance', 'Tracer le rayon au point de contact', 'Tracer une parallèle'],
        mode: 'select'
      }
    ]
  },

  'ch14-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Deux cercles peuvent être extérieurs, tangents ou sécants selon la distance entre leurs centres", answer: "vrai" },
      { question: "Tous les cercles ont toujours la même position relative", answer: "faux" },
      { question: "Deux cercles tangents ont exactement un point commun", answer: "vrai" },
      { question: "Deux cercles sécants ont deux points communs distincts", answer: "vrai" },
      { question: "La position relative de deux cercles dépend de la distance entre leurs centres et de la somme de leurs rayons", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si distance centres > r1 + r2, les cercles sont:',
        answer: 'Extérieurs',
        wrongAnswers: ['Tangents', 'Sécants', 'Concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Si distance centres = r1 + r2, les cercles sont:',
        answer: 'Tangents extérieurement',
        wrongAnswers: ['Extérieurs', 'Sécants', 'Concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Si distance centres < r1 + r2 et > |r1 - r2|, les cercles sont:',
        answer: 'Sécants',
        wrongAnswers: ['Extérieurs', 'Tangents', 'Concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de points communs ont deux cercles tangents?',
        answer: '1 point',
        wrongAnswers: ['0 point', '2 points', 'Infini']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de points communs ont deux cercles sécants?',
        answer: '2 points',
        wrongAnswers: ['0 point', '1 point', 'Infini']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Deux cercles peuvent être extérieurs, tangents ou sécants',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les cercles ont toujours la même position relative',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La position relative de deux cercles dépend de la distance entre leurs centres et de la somme de leurs rayons',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Deux cercles sécants ont deux points communs',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Si distance centres > r1 + r2, les cercles sont:',
        answer: 'extérieurs',
        wrongAnswers: ['tangents extérieurement', 'sécants', 'concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Si distance centres = r1 + r2, les cercles sont:',
        answer: 'tangents extérieurement',
        wrongAnswers: ['extérieurs', 'sécants', 'concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Deux cercles sécants ont combien de points communs?',
        answer: 'deux',
        wrongAnswers: ['un', 'trois', 'aucun']
      },
      // Drag and Drop - Ordering (positions by distance)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces positions par distance croissante: Extérieurs, Tangents, Sécants',
        answer: ['Sécants', 'Tangents', 'Extérieurs'], // d < r1+r2, d = r1+r2, d > r1+r2
        wordBank: ['Sécants', 'Tangents', 'Extérieurs'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si distance centres > r1 + r2, les cercles sont: Glisse la réponse:',
        answer: 'Extérieurs',
        wordBank: ['Tangents', 'Sécants', 'Extérieurs', 'Concentriques'],
        mode: 'select'
      },
      // Drag and Drop - Selection (tangent circles)
      {
        type: 'drag_and_drop',
        question: 'Si distance centres = r1 + r2, les cercles sont: Glisse la réponse:',
        answer: 'Tangents extérieurement',
        wordBank: ['Extérieurs', 'Sécants', 'Tangents extérieurement', 'Concentriques'],
        mode: 'select'
      },
      // Drag and Drop - Selection (number of common points)
      {
        type: 'drag_and_drop',
        question: 'Combien de points communs ont deux cercles sécants? Glisse la réponse:',
        answer: '2 points',
        wordBank: ['0 point', '1 point', '2 points', 'Infini'],
        mode: 'select'
      }
    ]
  },

  'ch14-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les positions relatives sont importantes en géométrie car elles permettent de comprendre les relations entre figures", answer: "vrai" },
      { question: "Tous les problèmes géométriques nécessitent toujours le calcul de positions relatives", answer: "faux" },
      { question: "On peut calculer les distances entre centres de cercles pour déterminer leur position relative", answer: "vrai" },
      { question: "Les propriétés des cercles sont utilisées en construction et en architecture", answer: "vrai" },
      { question: "Pour déterminer la position relative de deux cercles, on compare la distance entre centres avec la somme des rayons", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Deux cercles de rayons 3 et 4, distance centres 7. Quelle position?',
        answer: 'Tangents extérieurement',
        wrongAnswers: ['Extérieurs', 'Sécants', 'Concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Deux cercles de rayons 5 et 6, distance centres 12. Quelle position?',
        answer: 'Tangents extérieurement',
        wrongAnswers: ['Extérieurs', 'Sécants', 'Concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Deux cercles de rayons 4 et 5, distance centres 10. Quelle position?',
        answer: 'Extérieurs',
        wrongAnswers: ['Tangents', 'Sécants', 'Concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Deux cercles de rayons 3 et 4, distance centres 5. Quelle position?',
        answer: 'Sécants',
        wrongAnswers: ['Extérieurs', 'Tangents', 'Concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Pour déterminer la position relative, on compare:',
        answer: 'La distance entre centres avec la somme des rayons',
        wrongAnswers: ['Les rayons seulement', 'Les aires', 'Les périmètres']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les positions relatives sont importantes en géométrie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes géométriques nécessitent toujours le calcul de positions relatives',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour déterminer la position relative de deux cercles, on compare la distance entre centres avec la somme des rayons',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut calculer les distances entre centres',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Deux cercles de rayons 3 et 4, distance centres 7. Position:',
        answer: 'Tangents extérieurement',
        wrongAnswers: ['Extérieurs', 'Sécants', 'Concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Deux cercles de rayons 5 et 6, distance centres 12. Position:',
        answer: 'Tangents extérieurement',
        wrongAnswers: ['Extérieurs', 'Sécants', 'Concentriques']
      },
      {
        type: 'multiple_choice',
        question: 'Pour déterminer la position relative, on compare la distance entre centres avec la _____ des rayons',
        answer: 'somme',
        wrongAnswers: ['différence', 'produit', 'quotient']
      },
      // Drag and Drop - Ordering (positions by distance)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces positions: Extérieurs, Sécants, Tangents',
        answer: ['Sécants', 'Tangents', 'Extérieurs'], // Logical ordering
        wordBank: ['Sécants', 'Tangents', 'Extérieurs'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Deux cercles de rayons 3 et 4, distance centres 7. Quelle position? Glisse la réponse:',
        answer: 'Tangents extérieurement',
        wordBank: ['Extérieurs', 'Sécants', 'Tangents extérieurement', 'Concentriques'],
        mode: 'select'
      },
      // Drag and Drop - Selection (position calculation)
      {
        type: 'drag_and_drop',
        question: 'Deux cercles de rayons 5 et 6, distance centres 12. Quelle position? Glisse la réponse:',
        answer: 'Tangents extérieurement',
        wordBank: ['Extérieurs', 'Sécants', 'Tangents extérieurement', 'Concentriques'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison method)
      {
        type: 'drag_and_drop',
        question: 'Pour déterminer la position relative, on compare: Glisse la réponse:',
        answer: 'La distance entre centres avec la somme des rayons',
        wordBank: ['Les rayons seulement', 'Les aires', 'La distance entre centres avec la somme des rayons', 'Les périmètres'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 15: STATISTIQUES
  'ch15-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La moyenne = somme des valeurs / nombre de valeurs et représente la valeur typique d'un ensemble de données", answer: "vrai" },
      { question: "Toutes les mesures de tendance centrale donnent toujours la même valeur", answer: "faux" },
      { question: "La médiane est la valeur centrale quand les données sont ordonnées", answer: "vrai" },
      { question: "Le mode est la valeur la plus fréquente dans un ensemble de données", answer: "vrai" },
      { question: "La moyenne, la médiane et le mode sont des mesures de tendance centrale", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 10, 12, 14, 16',
        answer: '13',
        wrongAnswers: ['12', '14', '52']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve la médiane de: 5, 7, 9, 11, 13',
        answer: '9',
        wrongAnswers: ['7', '11', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le mode de: 2, 3, 3, 4, 5, 3',
        answer: '3',
        wrongAnswers: ['2', '4', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 15, 18, 20, 22, 25',
        answer: '20',
        wrongAnswers: ['18', '22', '100']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve la médiane de: 8, 10, 12, 14, 16, 18',
        answer: '13',
        wrongAnswers: ['12', '14', '11']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La moyenne = somme des valeurs / nombre de valeurs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les mesures de tendance centrale donnent toujours la même valeur',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La moyenne, la médiane et le mode sont des mesures de tendance centrale',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le mode est la valeur la plus fréquente',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 10, 12, 14, 16:',
        answer: '13',
        wrongAnswers: ['12', '14', '52']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve la médiane de: 5, 7, 9, 11, 13:',
        answer: '9',
        wrongAnswers: ['7', '11', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le mode de: 2, 3, 3, 4, 5, 3:',
        answer: '3',
        wrongAnswers: ['2', '4', '5']
      },
      // Drag and Drop - Ordering (values from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: 3, 9, 13',
        answer: ['3', '9', '13'], // 3 < 9 < 13
        wordBank: ['3', '9', '13'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la moyenne de: 10, 12, 14, 16. Glisse le résultat:',
        answer: '13',
        wordBank: ['12', '14', '13', '52'],
        mode: 'select'
      },
      // Drag and Drop - Selection (median)
      {
        type: 'drag_and_drop',
        question: 'Trouve la médiane de: 5, 7, 9, 11, 13. Glisse le résultat:',
        answer: '9',
        wordBank: ['7', '11', '9', '8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (mode)
      {
        type: 'drag_and_drop',
        question: 'Trouve le mode de: 2, 3, 3, 4, 5, 3. Glisse le résultat:',
        answer: '3',
        wordBank: ['2', '4', '5', '3'],
        mode: 'select'
      }
    ]
  },

  'ch15-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un diagramme en barres représente des données sous forme de rectangles de hauteurs proportionnelles", answer: "vrai" },
      { question: "Tous les types de diagrammes représentent les données de la même manière", answer: "faux" },
      { question: "Un diagramme circulaire montre les proportions en utilisant des secteurs angulaires", answer: "vrai" },
      { question: "Un histogramme représente des données continues regroupées en classes", answer: "vrai" },
      { question: "Les graphiques permettent de visualiser et d'analyser des données statistiques", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un diagramme, la barre la plus haute représente:',
        answer: 'La valeur la plus grande',
        wrongAnswers: ['La valeur la plus petite', 'La moyenne', 'La médiane']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de diagramme montre les proportions en pourcentages?',
        answer: 'Diagramme circulaire',
        wrongAnswers: ['Diagramme en barres', 'Histogramme', 'Courbe']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de diagramme représente des données continues?',
        answer: 'Histogramme',
        wrongAnswers: ['Diagramme en barres', 'Diagramme circulaire', 'Nuage de points']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un diagramme en barres, que représentent les hauteurs des barres?',
        answer: 'Les valeurs des données',
        wrongAnswers: ['Les fréquences relatives', 'Les pourcentages', 'Les classes']
      },
      {
        type: 'multiple_choice',
        question: 'Un diagramme circulaire est adapté pour représenter:',
        answer: 'Des proportions et pourcentages',
        wrongAnswers: ['Des données continues', 'Des séries temporelles', 'Des corrélations']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un diagramme en barres représente des données',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les types de diagrammes représentent les données de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les graphiques permettent de visualiser et d\'analyser des données statistiques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un diagramme circulaire montre les pourcentages',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Dans un diagramme, la barre la plus haute représente la _____ la plus grande',
        answer: 'valeur',
        wrongAnswers: ['fréquence', 'catégorie', 'moyenne']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de diagramme montre les proportions?',
        answer: 'Diagramme circulaire',
        wrongAnswers: ['Diagramme en barres', 'Histogramme', 'Graphique linéaire']
      },
      {
        type: 'multiple_choice',
        question: 'Un histogramme représente des données:',
        answer: 'continues',
        wrongAnswers: ['discrètes', 'qualitatives', 'catégorielles']
      },
      // Drag and Drop - Ordering (diagram types by complexity)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces diagrammes: Diagramme circulaire, Diagramme en barres, Histogramme',
        answer: ['Diagramme en barres', 'Diagramme circulaire', 'Histogramme'], // Logical ordering
        wordBank: ['Diagramme en barres', 'Diagramme circulaire', 'Histogramme'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Dans un diagramme, la barre la plus haute représente: Glisse la réponse:',
        answer: 'La valeur la plus grande',
        wordBank: ['La valeur la plus petite', 'La moyenne', 'La valeur la plus grande', 'La médiane'],
        mode: 'select'
      },
      // Drag and Drop - Selection (diagram type)
      {
        type: 'drag_and_drop',
        question: 'Quel type de diagramme montre les proportions en pourcentages? Glisse la réponse:',
        answer: 'Diagramme circulaire',
        wordBank: ['Diagramme en barres', 'Histogramme', 'Diagramme circulaire', 'Courbe'],
        mode: 'select'
      },
      // Drag and Drop - Selection (histogram)
      {
        type: 'drag_and_drop',
        question: 'Quel type de diagramme représente des données continues? Glisse la réponse:',
        answer: 'Histogramme',
        wordBank: ['Diagramme en barres', 'Diagramme circulaire', 'Histogramme', 'Nuage de points'],
        mode: 'select'
      }
    ]
  },

  'ch15-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'étendue = valeur max - valeur min et mesure l'écart entre les valeurs extrêmes", answer: "vrai" },
      { question: "Toutes les mesures de dispersion donnent toujours la même valeur", answer: "faux" },
      { question: "La variance mesure la dispersion des données autour de la moyenne", answer: "vrai" },
      { question: "L'écart-type est la racine carrée de la variance et a la même unité que les données", answer: "vrai" },
      { question: "Pour calculer l'étendue, on soustrait la valeur minimale de la valeur maximale", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule l\'étendue de: 5, 8, 12, 15, 20',
        answer: '15',
        wrongAnswers: ['12', '20', '25']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'étendue de: 10, 12, 14, 16, 18',
        answer: '8',
        wrongAnswers: ['6', '10', '14']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'étendue de: 3, 5, 8, 12, 15',
        answer: '12',
        wrongAnswers: ['8', '15', '20']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle mesure donne l\'écart entre la valeur max et min?',
        answer: 'L\'étendue',
        wrongAnswers: ['La moyenne', 'La médiane', 'L\'écart-type']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle mesure est la racine carrée de la variance?',
        answer: 'L\'écart-type',
        wrongAnswers: ['L\'étendue', 'La moyenne', 'La médiane']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'étendue = valeur max - valeur min',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les mesures de dispersion donnent toujours la même valeur',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer l\'étendue, on soustrait la valeur minimale de la valeur maximale',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'écart-type mesure la dispersion',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule l\'étendue de: 5, 8, 12, 15, 20:',
        answer: '15',
        wrongAnswers: ['20', '5', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'étendue de: 10, 12, 14, 16, 18:',
        answer: '8',
        wrongAnswers: ['18', '10', '14']
      },
      {
        type: 'multiple_choice',
        question: 'L\'étendue = valeur _____ - valeur _____',
        answer: 'max, min',
        wrongAnswers: ['min, max', 'moyenne, médiane', 'médiane, mode']
      },
      // Drag and Drop - Ordering (ranges from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étendues du plus petit au plus grand: 8, 12, 15',
        answer: ['8', '12', '15'], // 8 < 12 < 15
        wordBank: ['8', '12', '15'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'étendue de: 5, 8, 12, 15, 20. Glisse le résultat:',
        answer: '15',
        wordBank: ['12', '20', '15', '25'],
        mode: 'select'
      },
      // Drag and Drop - Selection (range calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'étendue de: 10, 12, 14, 16, 18. Glisse le résultat:',
        answer: '8',
        wordBank: ['6', '10', '8', '14'],
        mode: 'select'
      },
      // Drag and Drop - Selection (measure identification)
      {
        type: 'drag_and_drop',
        question: 'Quelle mesure donne l\'écart entre la valeur max et min? Glisse la réponse:',
        answer: 'L\'étendue',
        wordBank: ['La moyenne', 'La médiane', 'L\'étendue', 'L\'écart-type'],
        mode: 'select'
      }
    ]
  },

  'ch15-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les statistiques permettent d'analyser des données en calculant des mesures et en créant des graphiques", answer: "vrai" },
      { question: "Tous les problèmes statistiques nécessitent toujours les mêmes calculs", answer: "faux" },
      { question: "On peut comparer des groupes avec les statistiques en utilisant la moyenne, la médiane et le mode", answer: "vrai" },
      { question: "Les graphiques aident à visualiser les données et à identifier des tendances", answer: "vrai" },
      { question: "L'analyse statistique permet de tirer des conclusions à partir des données", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Quelles mesures permettent de comparer des groupes?',
        answer: 'Moyenne, médiane, mode',
        wrongAnswers: ['Seulement la moyenne', 'Seulement la médiane', 'Les graphiques seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Que permettent de faire les graphiques?',
        answer: 'Visualiser et analyser les données',
        wrongAnswers: ['Calculer les probabilités', 'Résoudre des équations', 'Tracer des cercles']
      },
      {
        type: 'multiple_choice',
        question: 'Analyse: moyenne 15, médiane 14, mode 12. Que peux-tu dire?',
        answer: 'Distribution légèrement asymétrique vers la droite',
        wrongAnswers: ['Distribution symétrique', 'Distribution uniforme', 'Pas de tendance']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'utilité principale des statistiques?',
        answer: 'Analyser et interpréter des données',
        wrongAnswers: ['Calculer des probabilités', 'Résoudre des équations', 'Tracer des graphiques']
      },
      {
        type: 'multiple_choice',
        question: 'Comment peut-on visualiser des données statistiques?',
        answer: 'Avec des graphiques et diagrammes',
        wrongAnswers: ['Avec des équations', 'Avec des formules', 'Avec des calculs seulement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les statistiques permettent d\'analyser des données',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes statistiques nécessitent toujours les mêmes calculs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'analyse statistique permet de tirer des conclusions à partir des données',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les graphiques aident à visualiser les données',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Les statistiques permettent d\'_____ des données',
        answer: 'analyser',
        wrongAnswers: ['ignorer', 'supprimer', 'créer']
      },
      {
        type: 'multiple_choice',
        question: 'On peut comparer des groupes avec les:',
        answer: 'statistiques',
        wrongAnswers: ['graphiques', 'calculs', 'mesures']
      },
      {
        type: 'multiple_choice',
        question: 'Les graphiques aident à _____ les données',
        answer: 'visualiser',
        wrongAnswers: ['calculer', 'mesurer', 'compter']
      },
      // Drag and Drop - Ordering (analysis steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes: Analyser, Visualiser, Comparer',
        answer: ['Visualiser', 'Analyser', 'Comparer'], // Logical ordering
        wordBank: ['Visualiser', 'Analyser', 'Comparer'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelles mesures permettent de comparer des groupes? Glisse la réponse:',
        answer: 'Moyenne, médiane, mode',
        wordBank: ['Seulement la moyenne', 'Seulement la médiane', 'Moyenne, médiane, mode', 'Les graphiques seulement'],
        mode: 'select'
      },
      // Drag and Drop - Selection (visualization)
      {
        type: 'drag_and_drop',
        question: 'Comment peut-on visualiser des données statistiques? Glisse la réponse:',
        answer: 'Avec des graphiques et diagrammes',
        wordBank: ['Avec des équations', 'Avec des formules', 'Avec des graphiques et diagrammes', 'Avec des calculs seulement'],
        mode: 'select'
      },
      // Drag and Drop - Selection (utility)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'utilité principale des statistiques? Glisse la réponse:',
        answer: 'Analyser et interpréter des données',
        wordBank: ['Calculer des probabilités', 'Résoudre des équations', 'Analyser et interpréter des données', 'Tracer des graphiques'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 16: PROBABILITÉS
  'ch16-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La probabilité = nombre de cas favorables / nombre de cas possibles selon la définition classique", answer: "vrai" },
      { question: "Toutes les probabilités sont toujours égales à 1", answer: "faux" },
      { question: "P(obtenir 6 avec un dé) = 1/6 car il y a 1 cas favorable sur 6 cas possibles", answer: "vrai" },
      { question: "La probabilité est toujours comprise entre 0 (impossible) et 1 (certain)", answer: "vrai" },
      { question: "Pour calculer une probabilité, on divise le nombre de cas favorables par le nombre total de cas possibles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir un nombre pair avec un dé)',
        answer: '1/2',
        wrongAnswers: ['1/3', '1/6', '2/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 1 ou 2 avec un dé)',
        answer: '1/3',
        wrongAnswers: ['1/6', '1/2', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir un nombre impair avec un dé)',
        answer: '1/2',
        wrongAnswers: ['1/3', '1/6', '2/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 3 ou 4 avec un dé)',
        answer: '1/3',
        wrongAnswers: ['1/6', '1/2', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir un nombre supérieur à 4 avec un dé)',
        answer: '1/3',
        wrongAnswers: ['1/6', '1/2', '2/3']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La probabilité = nombre de cas favorables / nombre de cas possibles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les probabilités sont toujours égales à 1',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer une probabilité, on divise le nombre de cas favorables par le nombre total de cas possibles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'P(événement certain) = 1',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir un nombre pair avec un dé):',
        answer: '1/2',
        wrongAnswers: ['1/3', '2/3', '1/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 1 ou 2 avec un dé):',
        answer: '1/3',
        wrongAnswers: ['1/2', '2/3', '1/6']
      },
      {
        type: 'multiple_choice',
        question: 'La probabilité est toujours entre:',
        answer: '0 et 1',
        wrongAnswers: ['-1 et 1', '0 et 2', '1 et 2']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: 1/6, 1/3, 1/2',
        answer: ['1/6', '1/3', '1/2'], // 1/6 < 1/3 < 1/2
        wordBank: ['1/6', '1/3', '1/2'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule P(obtenir un nombre pair avec un dé). Glisse le résultat:',
        answer: '1/2',
        wordBank: ['1/3', '1/6', '1/2', '2/3'],
        mode: 'select'
      },
      // Drag and Drop - Selection (probability calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule P(obtenir 1 ou 2 avec un dé). Glisse le résultat:',
        answer: '1/3',
        wordBank: ['1/6', '1/2', '1/3', '3/6'],
        mode: 'select'
      },
      // Drag and Drop - Selection (probability range)
      {
        type: 'drag_and_drop',
        question: 'La probabilité est toujours entre: Glisse la réponse:',
        answer: '0 et 1',
        wordBank: ['0 et 1', '-1 et 1', '0 et 2', '1 et 6'],
        mode: 'select'
      }
    ]
  },

  'ch16-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "P(A ou B) = P(A) + P(B) si A et B incompatibles car ils ne peuvent pas se produire simultanément", answer: "vrai" },
      { question: "Toutes les probabilités d'événements peuvent toujours être additionnées directement", answer: "faux" },
      { question: "P(A et B) = P(A) × P(B) si A et B indépendants car le résultat de l'un n'influence pas l'autre", answer: "vrai" },
      { question: "P(non A) = 1 - P(A) car un événement et son contraire forment un événement certain", answer: "vrai" },
      { question: "Pour calculer P(A ou B), on additionne si les événements sont incompatibles, sinon on soustrait l'intersection", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 6 et 6) avec deux dés',
        answer: '1/36',
        wrongAnswers: ['1/12', '1/6', '2/36']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 1 ou 2) avec un dé',
        answer: '1/3',
        wrongAnswers: ['1/6', '1/2', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 3 et 4) avec deux dés',
        answer: '2/36 = 1/18',
        wrongAnswers: ['1/36', '1/12', '1/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(non pair) avec un dé',
        answer: '1/2',
        wrongAnswers: ['1/3', '1/6', '2/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 5 et 6) avec deux dés',
        answer: '2/36 = 1/18',
        wrongAnswers: ['1/36', '1/12', '1/6']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'P(A ou B) = P(A) + P(B) si A et B incompatibles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les probabilités d\'événements peuvent toujours être additionnées directement',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer P(A ou B), on additionne si les événements sont incompatibles, sinon on soustrait l\'intersection',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'P(non A) = 1 - P(A)',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 6 et 6) avec deux dés:',
        answer: '1/36',
        wrongAnswers: ['1/6', '1/12', '1/18']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 1 ou 2) avec un dé:',
        answer: '1/3',
        wrongAnswers: ['1/2', '2/3', '1/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(non pair) avec un dé:',
        answer: '1/2',
        wrongAnswers: ['1/3', '2/3', '1/6']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: 1/36, 1/18, 1/3',
        answer: ['1/36', '1/18', '1/3'], // 1/36 < 1/18 < 1/3
        wordBank: ['1/36', '1/18', '1/3'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule P(obtenir 6 et 6) avec deux dés. Glisse le résultat:',
        answer: '1/36',
        wordBank: ['1/12', '1/6', '1/36', '2/36'],
        mode: 'select'
      },
      // Drag and Drop - Selection (probability addition)
      {
        type: 'drag_and_drop',
        question: 'Calcule P(obtenir 1 ou 2) avec un dé. Glisse le résultat:',
        answer: '1/3',
        wordBank: ['1/6', '1/2', '1/3', '3/6'],
        mode: 'select'
      },
      // Drag and Drop - Selection (complement probability)
      {
        type: 'drag_and_drop',
        question: 'Calcule P(non pair) avec un dé. Glisse le résultat:',
        answer: '1/2',
        wordBank: ['1/3', '1/6', '2/3', '1/2'],
        mode: 'select'
      }
    ]
  },

  'ch16-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut construire un arbre de probabilités pour visualiser tous les cas possibles d'une expérience", answer: "vrai" },
      { question: "Toutes les probabilités peuvent toujours être calculées sans arbre ou tableau", answer: "faux" },
      { question: "Un tableau à double entrée aide à calculer les probabilités en organisant tous les cas possibles", answer: "vrai" },
      { question: "On peut énumérer tous les cas possibles pour calculer une probabilité selon la méthode exhaustive", answer: "vrai" },
      { question: "L'arbre de probabilités et le tableau à double entrée sont des outils pour calculer des probabilités composées", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'On lance deux pièces. Calcule P(obtenir 2 Piles)',
        answer: '1/4',
        wrongAnswers: ['1/2', '1/3', '2/4']
      },
      {
        type: 'multiple_choice',
        question: 'On lance deux pièces. Calcule P(obtenir 1 Pile et 1 Face)',
        answer: '1/2',
        wrongAnswers: ['1/4', '1/3', '3/4']
      },
      {
        type: 'multiple_choice',
        question: 'On lance deux pièces. Calcule P(obtenir 2 Faces)',
        answer: '1/4',
        wrongAnswers: ['1/2', '1/3', '2/4']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de cas possibles y a-t-il en lançant deux pièces?',
        answer: '4 cas',
        wrongAnswers: ['2 cas', '3 cas', '6 cas']
      },
      {
        type: 'multiple_choice',
        question: 'Quel outil aide à visualiser tous les cas possibles?',
        answer: 'Un arbre de probabilités',
        wrongAnswers: ['Une équation', 'Une formule', 'Un graphique']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut construire un arbre de probabilités',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les probabilités peuvent toujours être calculées sans arbre ou tableau',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'arbre de probabilités et le tableau à double entrée sont des outils pour calculer des probabilités composées',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut énumérer tous les cas possibles',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'On lance deux pièces. Calcule P(obtenir 2 Piles):',
        answer: '1/4',
        wrongAnswers: ['1/2', '1/3', '3/4']
      },
      {
        type: 'multiple_choice',
        question: 'On lance deux pièces. Calcule P(obtenir 1 Pile et 1 Face):',
        answer: '1/2',
        wrongAnswers: ['1/4', '1/3', '3/4']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de cas possibles y a-t-il en lançant deux pièces?',
        answer: '4 cas',
        wrongAnswers: ['2 cas', '3 cas', '6 cas']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: 1/4, 1/3, 1/2',
        answer: ['1/4', '1/3', '1/2'], // 1/4 < 1/3 < 1/2
        wordBank: ['1/4', '1/3', '1/2'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'On lance deux pièces. Calcule P(obtenir 2 Piles). Glisse le résultat:',
        answer: '1/4',
        wordBank: ['1/2', '1/3', '1/4', '2/4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (two coins)
      {
        type: 'drag_and_drop',
        question: 'On lance deux pièces. Calcule P(obtenir 1 Pile et 1 Face). Glisse le résultat:',
        answer: '1/2',
        wordBank: ['1/4', '1/3', '3/4', '1/2'],
        mode: 'select'
      },
      // Drag and Drop - Selection (number of cases)
      {
        type: 'drag_and_drop',
        question: 'Combien de cas possibles y a-t-il en lançant deux pièces? Glisse la réponse:',
        answer: '4 cas',
        wordBank: ['2 cas', '3 cas', '4 cas', '6 cas'],
        mode: 'select'
      }
    ]
  },

  'ch16-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les probabilités permettent de prévoir des événements en calculant leurs chances de réalisation", answer: "vrai" },
      { question: "Tous les événements peuvent toujours être prévus avec certitude grâce aux probabilités", answer: "faux" },
      { question: "On peut calculer des probabilités composées en utilisant des arbres ou des tableaux", answer: "vrai" },
      { question: "Les probabilités s'utilisent dans les jeux pour calculer les chances de gagner", answer: "vrai" },
      { question: "Pour calculer une probabilité composée, on multiplie les probabilités si les événements sont indépendants", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Jeu: lancer deux dés. Calcule P(somme = 7)',
        answer: '1/6',
        wrongAnswers: ['1/12', '1/36', '5/36']
      },
      {
        type: 'multiple_choice',
        question: 'Jeu: lancer deux dés. Calcule P(somme = 6)',
        answer: '5/36',
        wrongAnswers: ['1/6', '1/12', '1/36']
      },
      {
        type: 'multiple_choice',
        question: 'Jeu: lancer deux dés. Calcule P(somme = 12)',
        answer: '1/36',
        wrongAnswers: ['1/12', '1/6', '2/36']
      },
      {
        type: 'multiple_choice',
        question: 'Jeu: lancer deux dés. Calcule P(somme = 2)',
        answer: '1/36',
        wrongAnswers: ['1/12', '1/6', '2/36']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle somme a la probabilité la plus élevée avec deux dés?',
        answer: 'Somme = 7',
        wrongAnswers: ['Somme = 6', 'Somme = 12', 'Somme = 2']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les probabilités permettent de prévoir des événements',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les événements peuvent toujours être prévus avec certitude grâce aux probabilités',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer une probabilité composée, on multiplie les probabilités si les événements sont indépendants',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les probabilités s\'utilisent dans les jeux',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Jeu: lancer deux dés. Calcule P(somme = 7):',
        answer: '1/6',
        wrongAnswers: ['1/12', '1/36', '5/36']
      },
      {
        type: 'multiple_choice',
        question: 'Jeu: lancer deux dés. Calcule P(somme = 6):',
        answer: '5/36',
        wrongAnswers: ['1/6', '1/36', '1/12']
      },
      {
        type: 'multiple_choice',
        question: 'Jeu: lancer deux dés. Calcule P(somme = 12):',
        answer: '1/36',
        wrongAnswers: ['1/6', '1/12', '5/36']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: 1/36, 5/36, 1/6',
        answer: ['1/36', '5/36', '1/6'], // 1/36 < 5/36 < 1/6
        wordBank: ['1/36', '5/36', '1/6'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Jeu: lancer deux dés. Calcule P(somme = 7). Glisse le résultat:',
        answer: '1/6',
        wordBank: ['1/12', '1/36', '1/6', '5/36'],
        mode: 'select'
      },
      // Drag and Drop - Selection (dice sum)
      {
        type: 'drag_and_drop',
        question: 'Jeu: lancer deux dés. Calcule P(somme = 6). Glisse le résultat:',
        answer: '5/36',
        wordBank: ['1/6', '1/12', '1/36', '5/36'],
        mode: 'select'
      },
      // Drag and Drop - Selection (most likely sum)
      {
        type: 'drag_and_drop',
        question: 'Quelle somme a la probabilité la plus élevée avec deux dés? Glisse la réponse:',
        answer: 'Somme = 7',
        wordBank: ['Somme = 6', 'Somme = 12', 'Somme = 2', 'Somme = 7'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 17: PROBABILITÉS (suite)
  'ch17-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un événement certain a une probabilité de 1 car il se produit toujours", answer: "vrai" },
      { question: "Tous les événements ont toujours une probabilité comprise strictement entre 0 et 1", answer: "faux" },
      { question: "Un événement impossible a une probabilité de 0 car il ne peut jamais se produire", answer: "vrai" },
      { question: "P(A) + P(non A) = 1 car un événement et son contraire forment un événement certain", answer: "vrai" },
      { question: "Pour tout événement A, la probabilité de son contraire est 1 - P(A)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir un nombre entre 1 et 6 avec un dé)',
        answer: '1 (événement certain)',
        wrongAnswers: ['0', '1/6', '6/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 7 avec un dé)',
        answer: '0 (événement impossible)',
        wrongAnswers: ['1', '1/6', '6/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir pair ou impair) avec un dé',
        answer: '1',
        wrongAnswers: ['0', '1/2', '1/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(non impair) avec un dé (pair)',
        answer: '1/2',
        wrongAnswers: ['1/6', '1', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la probabilité d\'un événement impossible?',
        answer: '0',
        wrongAnswers: ['1', '1/2', 'Entre 0 et 1']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un événement certain a une probabilité de 1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les événements ont toujours une probabilité comprise strictement entre 0 et 1',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour tout événement A, la probabilité de son contraire est 1 - P(A)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'P(A) + P(non A) = 1',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir un nombre entre 1 et 6 avec un dé):',
        answer: '1',
        wrongAnswers: ['1/6', '6/6', '0']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 7 avec un dé):',
        answer: '0',
        wrongAnswers: ['1', '1/6', '1/7']
      },
      {
        type: 'multiple_choice',
        question: 'P(pair) + P(impair) = ?',
        answer: '1',
        wrongAnswers: ['0', '1/2', '2']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: 0, 1/2, 1',
        answer: ['0', '1/2', '1'], // 0 < 1/2 < 1
        wordBank: ['0', '1/2', '1'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule P(obtenir un nombre entre 1 et 6 avec un dé). Glisse le résultat:',
        answer: '1 (événement certain)',
        wordBank: ['0', '1/6', '1 (événement certain)', '6/6'],
        mode: 'select'
      },
      // Drag and Drop - Selection (impossible event)
      {
        type: 'drag_and_drop',
        question: 'Calcule P(obtenir 7 avec un dé). Glisse le résultat:',
        answer: '0 (événement impossible)',
        wordBank: ['1', '1/6', '6/6', '0 (événement impossible)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (complement)
      {
        type: 'drag_and_drop',
        question: 'P(pair) + P(impair) = ? Glisse la réponse:',
        answer: '1',
        wordBank: ['0', '1/2', '1', '1/6'],
        mode: 'select'
      }
    ]
  },

  'ch17-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "P(A et B) = P(A) × P(B) si A et B indépendants car le résultat de l'un n'influence pas l'autre", answer: "vrai" },
      { question: "Toutes les probabilités d'événements peuvent toujours être multipliées directement", answer: "faux" },
      { question: "P(A ou B) = P(A) + P(B) si A et B incompatibles car ils ne peuvent pas se produire en même temps", answer: "vrai" },
      { question: "P(A ou B) = P(A) + P(B) - P(A et B) si A et B compatibles pour éviter de compter deux fois l'intersection", answer: "vrai" },
      { question: "Pour calculer P(A ou B), on utilise la formule appropriée selon que les événements sont compatibles ou incompatibles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 1 et 2) avec deux dés',
        answer: '1/36',
        wrongAnswers: ['1/12', '1/6', '2/36']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir pair ou impair) avec un dé',
        answer: '1',
        wrongAnswers: ['1/2', '1/6', '6/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 3 et 4) avec deux dés',
        answer: '2/36 = 1/18',
        wrongAnswers: ['1/36', '1/12', '1/6']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 2 ou 4) avec un dé',
        answer: '1/3',
        wrongAnswers: ['1/6', '1/2', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle formule utilise-t-on pour P(A et B) si A et B sont indépendants?',
        answer: 'P(A) × P(B)',
        wrongAnswers: ['P(A) + P(B)', 'P(A) - P(B)', 'P(A) / P(B)']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'P(A et B) = P(A) × P(B) si A et B indépendants',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les probabilités d\'événements peuvent toujours être multipliées directement',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer P(A ou B), on utilise la formule appropriée selon que les événements sont compatibles ou incompatibles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'P(A ou B) = P(A) + P(B) si A et B incompatibles',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir 1 et 2) avec deux dés:',
        answer: '1/36',
        wrongAnswers: ['1/6', '1/12', '1/18']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule P(obtenir pair ou impair) avec un dé:',
        answer: '1',
        wrongAnswers: ['1/2', '1/3', '0']
      },
      {
        type: 'multiple_choice',
        question: 'P(A et B) = P(A) _____ P(B) si A et B indépendants',
        answer: '×',
        wrongAnswers: ['+', '-', '÷']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: 1/36, 1/18, 1/3',
        answer: ['1/36', '1/18', '1/3'], // 1/36 < 1/18 < 1/3
        wordBank: ['1/36', '1/18', '1/3'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule P(obtenir 1 et 2) avec deux dés. Glisse le résultat:',
        answer: '1/36',
        wordBank: ['1/12', '1/6', '1/36', '2/36'],
        mode: 'select'
      },
      // Drag and Drop - Selection (compatible events)
      {
        type: 'drag_and_drop',
        question: 'Calcule P(obtenir pair ou impair) avec un dé. Glisse le résultat:',
        answer: '1',
        wordBank: ['1/2', '1/6', '6/6', '1'],
        mode: 'select'
      },
      // Drag and Drop - Selection (formula)
      {
        type: 'drag_and_drop',
        question: 'Quelle formule utilise-t-on pour P(A et B) si A et B sont indépendants? Glisse la réponse:',
        answer: 'P(A) × P(B)',
        wordBank: ['P(A) + P(B)', 'P(A) - P(B)', 'P(A) × P(B)', 'P(A) / P(B)'],
        mode: 'select'
      }
    ]
  },

  'ch17-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut calculer des probabilités d'événements composés en utilisant des arbres ou des tableaux", answer: "vrai" },
      { question: "Toutes les probabilités d'événements composés nécessitent toujours les mêmes calculs", answer: "faux" },
      { question: "Un arbre de probabilités aide à visualiser tous les cas possibles d'une expérience composée", answer: "vrai" },
      { question: "On peut utiliser un tableau à double entrée pour organiser tous les résultats possibles", answer: "vrai" },
      { question: "Pour calculer une probabilité d'événement composé, on multiplie les probabilités de chaque étape le long du chemin", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'On lance trois pièces. Calcule P(exactement 2 Piles)',
        answer: '3/8',
        wrongAnswers: ['1/8', '1/2', '2/8']
      },
      {
        type: 'multiple_choice',
        question: 'On lance trois pièces. Calcule P(exactement 3 Piles)',
        answer: '1/8',
        wrongAnswers: ['3/8', '1/2', '2/8']
      },
      {
        type: 'multiple_choice',
        question: 'On lance trois pièces. Calcule P(exactement 1 Pile)',
        answer: '3/8',
        wrongAnswers: ['1/8', '1/2', '2/8']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de cas possibles y a-t-il en lançant trois pièces?',
        answer: '8 cas',
        wrongAnswers: ['4 cas', '6 cas', '12 cas']
      },
      {
        type: 'multiple_choice',
        question: 'Quel outil aide à calculer des probabilités d\'événements composés?',
        answer: 'Un arbre de probabilités',
        wrongAnswers: ['Une équation', 'Une formule simple', 'Un graphique']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut calculer des probabilités d\'événements composés',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les probabilités d\'événements composés nécessitent toujours les mêmes calculs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer une probabilité d\'événement composé, on multiplie les probabilités de chaque étape le long du chemin',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un arbre de probabilités aide à visualiser',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'On lance trois pièces. Calcule P(exactement 2 Piles):',
        answer: '3/8',
        wrongAnswers: ['1/4', '1/2', '1/8']
      },
      {
        type: 'multiple_choice',
        question: 'On lance trois pièces. Calcule P(exactement 3 Piles):',
        answer: '1/8',
        wrongAnswers: ['1/4', '1/2', '3/8']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de cas possibles y a-t-il en lançant trois pièces?',
        answer: '8 cas',
        wrongAnswers: ['4 cas', '6 cas', '12 cas']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: 1/8, 3/8, 1/2',
        answer: ['1/8', '3/8', '1/2'], // 1/8 < 3/8 < 1/2
        wordBank: ['1/8', '3/8', '1/2'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'On lance trois pièces. Calcule P(exactement 2 Piles). Glisse le résultat:',
        answer: '3/8',
        wordBank: ['1/8', '1/2', '2/8', '3/8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (three coins)
      {
        type: 'drag_and_drop',
        question: 'On lance trois pièces. Calcule P(exactement 3 Piles). Glisse le résultat:',
        answer: '1/8',
        wordBank: ['3/8', '1/2', '2/8', '1/8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (number of cases)
      {
        type: 'drag_and_drop',
        question: 'Combien de cas possibles y a-t-il en lançant trois pièces? Glisse la réponse:',
        answer: '8 cas',
        wordBank: ['4 cas', '6 cas', '12 cas', '8 cas'],
        mode: 'select'
      }
    ]
  },

  'ch17-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les probabilités permettent de résoudre des problèmes en calculant les chances d'événements", answer: "vrai" },
      { question: "Tous les problèmes peuvent toujours être résolus uniquement avec des probabilités", answer: "faux" },
      { question: "On peut calculer des probabilités dans des jeux pour déterminer les chances de gagner", answer: "vrai" },
      { question: "Les probabilités s'appliquent à de nombreuses situations de la vie quotidienne", answer: "vrai" },
      { question: "Pour résoudre un problème de probabilité, on identifie les cas favorables et les cas possibles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Jeu de dés: lancer deux dés. Calcule P(somme = 7)',
        answer: '1/6',
        wrongAnswers: ['1/12', '1/36', '5/36']
      },
      {
        type: 'multiple_choice',
        question: 'Jeu de dés: lancer deux dés. Calcule P(somme = 6)',
        answer: '5/36',
        wrongAnswers: ['1/6', '1/12', '1/36']
      },
      {
        type: 'multiple_choice',
        question: 'Jeu de dés: lancer deux dés. Calcule P(somme = 12)',
        answer: '1/36',
        wrongAnswers: ['1/12', '1/6', '2/36']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un jeu, on tire une carte d\'un jeu de 52 cartes. Calcule P(obtenir un As)',
        answer: '1/13',
        wrongAnswers: ['1/52', '4/52', '1/4']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un jeu, on tire une carte d\'un jeu de 52 cartes. Calcule P(obtenir un cœur)',
        answer: '1/4',
        wrongAnswers: ['1/13', '13/52', '1/52']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les probabilités permettent de résoudre des problèmes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes peuvent toujours être résolus uniquement avec des probabilités',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour résoudre un problème de probabilité, on identifie les cas favorables et les cas possibles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les probabilités s\'appliquent à de nombreuses situations',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Jeu de dés: lancer deux dés. Calcule P(somme = 7):',
        answer: '1/6',
        wrongAnswers: ['1/12', '1/36', '5/36']
      },
      {
        type: 'multiple_choice',
        question: 'Jeu de dés: lancer deux dés. Calcule P(somme = 6):',
        answer: '5/36',
        wrongAnswers: ['1/6', '1/36', '1/12']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un jeu de 52 cartes, P(obtenir un As) = ?',
        answer: '1/13',
        wrongAnswers: ['1/4', '1/52', '4/52']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: 1/36, 5/36, 1/6',
        answer: ['1/36', '5/36', '1/6'], // 1/36 < 5/36 < 1/6
        wordBank: ['1/36', '5/36', '1/6'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Jeu de dés: lancer deux dés. Calcule P(somme = 7). Glisse le résultat:',
        answer: '1/6',
        wordBank: ['1/12', '1/36', '1/6', '5/36'],
        mode: 'select'
      },
      // Drag and Drop - Selection (dice sum)
      {
        type: 'drag_and_drop',
        question: 'Jeu de dés: lancer deux dés. Calcule P(somme = 6). Glisse le résultat:',
        answer: '5/36',
        wordBank: ['1/6', '1/12', '1/36', '5/36'],
        mode: 'select'
      },
      // Drag and Drop - Selection (card probability)
      {
        type: 'drag_and_drop',
        question: 'Dans un jeu de 52 cartes, P(obtenir un As). Glisse le résultat:',
        answer: '1/13',
        wordBank: ['1/52', '4/52', '1/13', '1/4'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 18: FONCTIONS
  'ch18-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une fonction associe à chaque x un unique f(x) selon la définition mathématique", answer: "vrai" },
      { question: "Toutes les relations entre deux nombres sont toujours des fonctions", answer: "faux" },
      { question: "Si f(x) = 2x + 3, alors f(3) = 9 car 2(3) + 3 = 9", answer: "vrai" },
      { question: "x est la variable indépendante, f(x) est l'image de x par la fonction", answer: "vrai" },
      { question: "Pour calculer f(a), on remplace x par a dans l'expression de la fonction", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule f(4) avec f(x) = x² - 1',
        answer: '15',
        wrongAnswers: ['7', '16', '3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule f(5) avec f(x) = 2x + 3',
        answer: '13',
        wrongAnswers: ['10', '16', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve x tel que f(x) = 8 avec f(x) = 2x + 3',
        answer: 'x = 2,5',
        wrongAnswers: ['x = 4', 'x = 5', 'x = 11']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule f(3) avec f(x) = x² + 2',
        answer: '11',
        wrongAnswers: ['9', '5', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve x tel que f(x) = 10 avec f(x) = 3x + 1',
        answer: 'x = 3',
        wrongAnswers: ['x = 2', 'x = 4', 'x = 11']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une fonction associe à chaque x un unique f(x)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les relations entre deux nombres sont toujours des fonctions',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer f(a), on remplace x par a dans l\'expression de la fonction',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'x est la variable, f(x) est l\'image',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule f(4) avec f(x) = x² - 1:',
        answer: '15',
        wrongAnswers: ['16', '14', '17']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule f(5) avec f(x) = 2x + 3:',
        answer: '13',
        wrongAnswers: ['10', '15', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve x tel que f(x) = 8 avec f(x) = 2x + 3: x = ?',
        answer: '2,5',
        wrongAnswers: ['2', '3', '4']
      },
      // Drag and Drop - Ordering (function values from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: 11, 13, 15',
        answer: ['11', '13', '15'], // 11 < 13 < 15
        wordBank: ['11', '13', '15'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule f(4) avec f(x) = x² - 1. Glisse le résultat:',
        answer: '15',
        wordBank: ['7', '16', '3', '15'],
        mode: 'select'
      },
      // Drag and Drop - Selection (function calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule f(5) avec f(x) = 2x + 3. Glisse le résultat:',
        answer: '13',
        wordBank: ['10', '16', '8', '13'],
        mode: 'select'
      },
      // Drag and Drop - Selection (finding x)
      {
        type: 'drag_and_drop',
        question: 'Trouve x tel que f(x) = 8 avec f(x) = 2x + 3. Glisse la solution:',
        answer: 'x = 2,5',
        wordBank: ['x = 4', 'x = 5', 'x = 2,5', 'x = 11'],
        mode: 'select'
      }
    ]
  },

  'ch18-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une fonction linéaire a la forme f(x) = ax + b où a et b sont des nombres réels", answer: "vrai" },
      { question: "Toutes les fonctions ont toujours la forme f(x) = ax + b", answer: "faux" },
      { question: "a est le coefficient directeur et représente la pente de la droite", answer: "vrai" },
      { question: "b est l'ordonnée à l'origine et représente le point où la droite coupe l'axe des ordonnées", answer: "vrai" },
      { question: "Pour identifier a et b dans f(x) = ax + b, on compare avec la forme générale", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans f(x) = 3x + 2, identifie a et b',
        answer: 'a = 3, b = 2',
        wrongAnswers: ['a = 2, b = 3', 'a = 5, b = 0', 'a = 0, b = 5']
      },
      {
        type: 'multiple_choice',
        question: 'Dans f(x) = 5x - 4, identifie a et b',
        answer: 'a = 5, b = -4',
        wrongAnswers: ['a = -4, b = 5', 'a = 1, b = -4', 'a = 5, b = 4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule f(0) avec f(x) = 3x + 2',
        answer: '2',
        wrongAnswers: ['0', '3', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule f(0) avec f(x) = 5x - 4',
        answer: '-4',
        wrongAnswers: ['0', '1', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Dans f(x) = -2x + 7, identifie a et b',
        answer: 'a = -2, b = 7',
        wrongAnswers: ['a = 7, b = -2', 'a = 2, b = 7', 'a = -2, b = -7']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une fonction linéaire a la forme f(x) = ax + b',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les fonctions ont toujours la forme f(x) = ax + b',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour identifier a et b dans f(x) = ax + b, on compare avec la forme générale',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'f(x) = 5x est une fonction linéaire avec b=0',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Dans f(x) = 3x + 2, a = ? et b = ?',
        answer: '3, 2',
        wrongAnswers: ['2, 3', '3, -2', '2, -3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule f(0) avec f(x) = 3x + 2:',
        answer: '2',
        wrongAnswers: ['0', '3', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Dans f(x) = 5x - 4, a = ? et b = ?',
        answer: '5, -4',
        wrongAnswers: ['-4, 5', '5, 4', '-5, -4']
      },
      // Drag and Drop - Ordering (coefficients from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces coefficients a du plus petit au plus grand: -2, 3, 5',
        answer: ['-2', '3', '5'], // -2 < 3 < 5
        wordBank: ['-2', '3', '5'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Dans f(x) = 3x + 2, identifie a et b. Glisse la réponse:',
        answer: 'a = 3, b = 2',
        wordBank: ['a = 2, b = 3', 'a = 5, b = 0', 'a = 3, b = 2', 'a = 0, b = 5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (identifying coefficients)
      {
        type: 'drag_and_drop',
        question: 'Dans f(x) = 5x - 4, identifie a et b. Glisse la réponse:',
        answer: 'a = 5, b = -4',
        wordBank: ['a = -4, b = 5', 'a = 1, b = -4', 'a = 5, b = -4', 'a = 5, b = 4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (f(0) calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule f(0) avec f(x) = 3x + 2. Glisse le résultat:',
        answer: '2',
        wordBank: ['0', '3', '5', '2'],
        mode: 'select'
      }
    ]
  },

  'ch18-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut représenter une fonction dans un repère en traçant les points (x, f(x))", answer: "vrai" },
      { question: "Toutes les fonctions ont toujours des courbes identiques", answer: "faux" },
      { question: "La courbe d'une fonction linéaire est une droite car f(x) = ax + b est une équation de droite", answer: "vrai" },
      { question: "On peut tracer la courbe à partir de points en calculant plusieurs valeurs de f(x) pour différentes valeurs de x", answer: "vrai" },
      { question: "Pour tracer une fonction linéaire, il suffit de calculer deux points car deux points déterminent une droite", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pour f(x) = 2x + 1, calcule f(0), f(1), f(2)',
        answer: 'f(0)=1, f(1)=3, f(2)=5',
        wrongAnswers: ['f(0)=0, f(1)=2, f(2)=4', 'f(0)=2, f(1)=4, f(2)=6', 'f(0)=1, f(1)=2, f(2)=3']
      },
      {
        type: 'multiple_choice',
        question: 'Pour f(x) = 3x - 2, calcule f(0), f(1), f(2)',
        answer: 'f(0)=-2, f(1)=1, f(2)=4',
        wrongAnswers: ['f(0)=0, f(1)=3, f(2)=6', 'f(0)=-2, f(1)=0, f(2)=2', 'f(0)=2, f(1)=5, f(2)=8']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de points suffisent pour tracer une fonction linéaire?',
        answer: '2 points',
        wrongAnswers: ['1 point', '3 points', '4 points']
      },
      {
        type: 'multiple_choice',
        question: 'La courbe de f(x) = 3x passe-t-elle par l\'origine?',
        answer: 'Oui, car f(0) = 0',
        wrongAnswers: ['Non', 'Parfois', 'Jamais']
      },
      {
        type: 'multiple_choice',
        question: 'Pour f(x) = 4x + 3, calcule f(0)',
        answer: '3',
        wrongAnswers: ['0', '4', '7']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut représenter une fonction dans un repère',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les fonctions ont toujours des courbes identiques',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour tracer une fonction linéaire, il suffit de calculer deux points car deux points déterminent une droite',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La courbe de f(x) = 3x passe par l\'origine',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pour f(x) = 2x + 1, calcule f(0):',
        answer: '1',
        wrongAnswers: ['0', '2', '3']
      },
      {
        type: 'multiple_choice',
        question: 'Pour f(x) = 2x + 1, calcule f(1):',
        answer: '3',
        wrongAnswers: ['1', '2', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Pour f(x) = 2x + 1, calcule f(2):',
        answer: '5',
        wrongAnswers: ['2', '3', '4']
      },
      // Drag and Drop - Ordering (function values from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: 1, 3, 5',
        answer: ['1', '3', '5'], // 1 < 3 < 5
        wordBank: ['1', '3', '5'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pour f(x) = 2x + 1, calcule f(0). Glisse le résultat:',
        answer: '1',
        wordBank: ['0', '2', '3', '1'],
        mode: 'select'
      },
      // Drag and Drop - Selection (function values)
      {
        type: 'drag_and_drop',
        question: 'Pour f(x) = 2x + 1, calcule f(1). Glisse le résultat:',
        answer: '3',
        wordBank: ['1', '2', '4', '3'],
        mode: 'select'
      },
      // Drag and Drop - Selection (number of points)
      {
        type: 'drag_and_drop',
        question: 'Combien de points suffisent pour tracer une fonction linéaire? Glisse la réponse:',
        answer: '2 points',
        wordBank: ['1 point', '3 points', '2 points', '4 points'],
        mode: 'select'
      }
    ]
  },

  'ch18-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les fonctions permettent de modéliser des situations réelles en mathématiques", answer: "vrai" },
      { question: "Tous les problèmes peuvent toujours être résolus uniquement avec des fonctions", answer: "faux" },
      { question: "On peut résoudre des problèmes avec des fonctions en traduisant la situation en expression mathématique", answer: "vrai" },
      { question: "Les fonctions sont importantes en mathématiques car elles décrivent des relations entre grandeurs", answer: "vrai" },
      { question: "Pour modéliser une situation avec une fonction, on identifie la variable et la relation entre les grandeurs", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'f(x) = 3x - 1. Calcule f(0)',
        answer: '-1',
        wrongAnswers: ['0', '2', '3']
      },
      {
        type: 'multiple_choice',
        question: 'f(x) = 3x - 1. Calcule f(2)',
        answer: '5',
        wrongAnswers: ['4', '6', '7']
      },
      {
        type: 'multiple_choice',
        question: 'f(x) = 4x + 2. Calcule f(3)',
        answer: '14',
        wrongAnswers: ['12', '10', '16']
      },
      {
        type: 'multiple_choice',
        question: 'f(x) = 2x - 5. Trouve x tel que f(x) = 3',
        answer: 'x = 4',
        wrongAnswers: ['x = 2', 'x = 3', 'x = 8']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'utilité principale des fonctions?',
        answer: 'Modéliser des situations et résoudre des problèmes',
        wrongAnswers: ['Calculer des probabilités', 'Tracer des graphiques seulement', 'Résoudre des équations seulement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les fonctions permettent de modéliser des situations',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes peuvent toujours être résolus uniquement avec des fonctions',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour modéliser une situation avec une fonction, on identifie la variable et la relation entre les grandeurs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les fonctions sont importantes en mathématiques',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'f(x) = 3x - 1. Calcule f(0):',
        answer: '-1',
        wrongAnswers: ['0', '1', '-3']
      },
      {
        type: 'multiple_choice',
        question: 'f(x) = 3x - 1. Calcule f(2):',
        answer: '5',
        wrongAnswers: ['2', '6', '4']
      },
      {
        type: 'multiple_choice',
        question: 'f(x) = 2x - 5. Trouve x tel que f(x) = 3: x = ?',
        answer: '4',
        wrongAnswers: ['3', '5', '6']
      },
      // Drag and Drop - Ordering (function values from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: -1, 5, 14',
        answer: ['-1', '5', '14'], // -1 < 5 < 14
        wordBank: ['-1', '5', '14'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'f(x) = 3x - 1. Calcule f(0). Glisse le résultat:',
        answer: '-1',
        wordBank: ['0', '2', '3', '-1'],
        mode: 'select'
      },
      // Drag and Drop - Selection (function calculation)
      {
        type: 'drag_and_drop',
        question: 'f(x) = 3x - 1. Calcule f(2). Glisse le résultat:',
        answer: '5',
        wordBank: ['4', '6', '7', '5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (finding x)
      {
        type: 'drag_and_drop',
        question: 'f(x) = 2x - 5. Trouve x tel que f(x) = 3. Glisse la solution:',
        answer: 'x = 4',
        wordBank: ['x = 2', 'x = 3', 'x = 8', 'x = 4'],
        mode: 'select'
      }
    ]
  }
};

export default YEAR2_MATH_SECTION_QUESTIONS;

