/**
 * Year 2 Physics - Questions for Each Section
 * All questions are verifiable and appropriate for app format
 */

export const YEAR2_PHYSICS_SECTION_QUESTIONS: {
  [sectionId: string]: {
    questions: Array<{ question: string; answer: string }>;
    exercises: Array<{ type: string; question: string; answer: string | string[]; wrongAnswers?: string[]; wordBank?: string[]; mode?: 'order' | 'select' | 'construct' }>;
  };
} = {
  // CHAPTER 1: LES DIFFÉRENTS ÉTATS DE LA MATIÈRE
  'ch1-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un solide compact a une forme propre car ses particules sont fortement liées et ordonnées", answer: "vrai" },
      { question: "Tous les solides ont toujours exactement la même structure et propriétés", answer: "faux" },
      { question: "Un solide divisé prend la forme du récipient car il est composé de petits grains qui se déplacent", answer: "vrai" },
      { question: "Un liquide a un volume propre mais pas de forme propre car ses particules peuvent glisser les unes sur les autres", answer: "vrai" },
      { question: "Un gaz est compressible car ses particules sont très espacées et peuvent être rapprochées", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lesquels sont des solides: bois, eau, air, sable?',
        answer: 'Bois et sable',
        wrongAnswers: ['Eau et air', 'Tous', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la différence principale entre un solide compact et un solide divisé?',
        answer: 'Le solide compact a une forme propre, le solide divisé prend la forme du récipient',
        wrongAnswers: ['Ils sont identiques', 'Le solide divisé est plus dur', 'Le solide compact est plus mou']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la caractéristique principale d\'un liquide?',
        answer: 'Volume propre mais pas de forme propre',
        wrongAnswers: ['Forme propre mais pas de volume propre', 'Ni forme ni volume propres', 'Forme et volume propres']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi un gaz est-il compressible?',
        answer: 'Car ses particules sont très espacées',
        wrongAnswers: ['Car ses particules sont très serrées', 'Car il n\'a pas de particules', 'Car il est solide']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lequel est un gaz: bois, eau, air, sable?',
        answer: 'Air',
        wrongAnswers: ['Bois', 'Eau', 'Sable']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un solide compact a une forme propre',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les solides ont toujours exactement la même structure',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le sable est un solide divisé',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un gaz est compressible',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un solide compact a une _____ propre',
        answer: 'forme',
        wrongAnswers: ['masse', 'température', 'densité']
      },
      {
        type: 'multiple_choice',
        question: 'Un liquide a un volume propre mais pas de _____ propre',
        answer: 'forme',
        wrongAnswers: ['masse', 'température', 'densité']
      },
      {
        type: 'multiple_choice',
        question: 'Un gaz est:',
        answer: 'compressible',
        wrongAnswers: ['incompressible', 'solide', 'liquide']
      },
      // Drag and Drop - Ordering (by state)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces états par densité des particules: Gaz, Liquide, Solide',
        answer: ['Gaz', 'Liquide', 'Solide'], // Least dense to most dense
        wordBank: ['Gaz', 'Liquide', 'Solide'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces éléments, lesquels sont des solides? Glisse la réponse:',
        answer: 'Bois et sable',
        wordBank: ['Eau et air', 'Tous', 'Aucun', 'Bois et sable'],
        mode: 'select'
      },
      // Drag and Drop - Selection (liquid characteristic)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la caractéristique principale d\'un liquide? Glisse la réponse:',
        answer: 'Volume propre mais pas de forme propre',
        wordBank: ['Forme propre mais pas de volume propre', 'Ni forme ni volume propres', 'Forme et volume propres', 'Volume propre mais pas de forme propre'],
        mode: 'select'
      },
      // Drag and Drop - Selection (gas compressibility)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi un gaz est-il compressible? Glisse la réponse:',
        answer: 'Car ses particules sont très espacées',
        wordBank: ['Car ses particules sont très serrées', 'Car il n\'a pas de particules', 'Car il est solide', 'Car ses particules sont très espacées'],
        mode: 'select'
      }
    ]
  },
  'ch1-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La vaporisation est le passage de l'état liquide à l'état gazeux, qui peut se produire par évaporation ou ébullition", answer: "vrai" },
      { question: "Tous les changements d'état se produisent toujours à la même température pour toutes les substances", answer: "faux" },
      { question: "La condensation est le passage de l'état gazeux à l'état liquide, inverse de la vaporisation", answer: "vrai" },
      { question: "La fusion est le passage de l'état solide à l'état liquide, comme quand la glace fond en eau", answer: "vrai" },
      { question: "La solidification est le passage de l'état liquide à l'état solide, inverse de la fusion", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Eau qui bout: quel changement d\'état se produit?',
        answer: 'Vaporisation (ébullition à 100°C)',
        wrongAnswers: ['Fusion', 'Condensation', 'Solidification']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est l\'inverse de la fusion?',
        answer: 'La solidification',
        wrongAnswers: ['La vaporisation', 'La condensation', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est l\'inverse de la vaporisation?',
        answer: 'La condensation',
        wrongAnswers: ['La fusion', 'La solidification', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Quel changement d\'état se produit quand la glace fond?',
        answer: 'Fusion',
        wrongAnswers: ['Vaporisation', 'Condensation', 'Solidification']
      },
      {
        type: 'multiple_choice',
        question: 'Quel changement d\'état se produit quand la vapeur d\'eau se transforme en eau liquide?',
        answer: 'Condensation',
        wrongAnswers: ['Vaporisation', 'Fusion', 'Solidification']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La vaporisation est le passage liquide → gazeux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les changements d\'état se produisent toujours à la même température',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'inverse de la fusion est la solidification',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La condensation est le passage gazeux → liquide',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La _____ est le passage liquide → gazeux',
        answer: 'vaporisation',
        wrongAnswers: ['fusion', 'solidification', 'condensation']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ est le passage solide → liquide',
        answer: 'fusion',
        wrongAnswers: ['vaporisation', 'solidification', 'condensation']
      },
      {
        type: 'multiple_choice',
        question: 'L\'eau bout à:',
        answer: '100 °C',
        wrongAnswers: ['0 °C', '37 °C', '50 °C']
      },
      // Drag and Drop - Ordering (state changes by temperature)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces changements d\'état: Fusion, Solidification, Vaporisation',
        answer: ['Solidification', 'Fusion', 'Vaporisation'], // Lower to higher temperature
        wordBank: ['Solidification', 'Fusion', 'Vaporisation'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Eau qui bout: quel changement d\'état se produit? Glisse la réponse:',
        answer: 'Vaporisation (ébullition à 100°C)',
        wordBank: ['Fusion', 'Condensation', 'Solidification', 'Vaporisation (ébullition à 100°C)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (inverse of fusion)
      {
        type: 'drag_and_drop',
        question: 'Quel est l\'inverse de la fusion? Glisse la réponse:',
        answer: 'La solidification',
        wordBank: ['La vaporisation', 'La condensation', 'Aucun', 'La solidification'],
        mode: 'select'
      },
      // Drag and Drop - Selection (condensation)
      {
        type: 'drag_and_drop',
        question: 'Quel changement d\'état se produit quand la vapeur d\'eau se transforme en eau liquide? Glisse la réponse:',
        answer: 'Condensation',
        wordBank: ['Vaporisation', 'Fusion', 'Solidification', 'Condensation'],
        mode: 'select'
      }
    ]
  },
  'ch1-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La masse se conserve lors des changements d'état car aucune particule n'est créée ni détruite, seulement réorganisée", answer: "vrai" },
      { question: "Toutes les propriétés de la matière se conservent toujours de la même manière lors des changements d'état", answer: "faux" },
      { question: "Le volume peut varier lors des changements d'état car l'arrangement des particules change selon l'état", answer: "vrai" },
      { question: "25g de glace donnent 25g d'eau car la masse se conserve lors de la fusion", answer: "vrai" },
      { question: "Le volume de la glace est supérieur au volume de l'eau car les particules sont plus espacées dans la glace", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: '25g de glace fondent. Quelle est la masse d\'eau obtenue?',
        answer: '25g (conservation de la masse)',
        wrongAnswers: ['50g', '12,5g', '0g']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété se conserve lors des changements d\'état?',
        answer: 'La masse',
        wrongAnswers: ['Le volume', 'La forme', 'La température']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi la masse se conserve-t-elle lors des changements d\'état?',
        answer: 'Car aucune particule n\'est créée ni détruite',
        wrongAnswers: ['Car les particules disparaissent', 'Car le volume change', 'Car la température change']
      },
      {
        type: 'multiple_choice',
        question: 'Le volume de la glace est-il supérieur ou inférieur au volume de l\'eau?',
        answer: 'Supérieur',
        wrongAnswers: ['Inférieur', 'Égal', 'Cela dépend']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le volume peut-il varier lors des changements d\'état?',
        answer: 'Car l\'arrangement des particules change',
        wrongAnswers: ['Car la masse change', 'Car les particules disparaissent', 'Car la température reste constante']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La masse se conserve lors des changements d\'état',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les propriétés se conservent toujours de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le volume de la glace est supérieur au volume de l\'eau',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '25g de glace donnent 25g d\'eau',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La _____ se conserve lors des changements d\'état',
        answer: 'masse',
        wrongAnswers: ['volume', 'température', 'densité']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ peut varier lors des changements d\'état',
        answer: 'volume',
        wrongAnswers: ['masse', 'température', 'densité']
      },
      {
        type: 'multiple_choice',
        question: '25g de glace donnent combien de g d\'eau?',
        answer: '25 g',
        wrongAnswers: ['50 g', '12,5 g', '100 g']
      },
      // Drag and Drop - Ordering (by density/volume)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces états par volume pour une même masse: Eau liquide, Glace, Vapeur',
        answer: ['Glace', 'Eau liquide', 'Vapeur'], // Greatest to smallest volume for same mass
        wordBank: ['Glace', 'Eau liquide', 'Vapeur'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: '25g de glace fondent. Quelle est la masse d\'eau obtenue? Glisse la réponse:',
        answer: '25g (conservation de la masse)',
        wordBank: ['50g', '12,5g', '0g', '25g (conservation de la masse)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conservation)
      {
        type: 'drag_and_drop',
        question: 'Quelle propriété se conserve lors des changements d\'état? Glisse la réponse:',
        answer: 'La masse',
        wordBank: ['Le volume', 'La forme', 'La température', 'La masse'],
        mode: 'select'
      },
      // Drag and Drop - Selection (why mass conserves)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi la masse se conserve-t-elle lors des changements d\'état? Glisse la réponse:',
        answer: 'Car aucune particule n\'est créée ni détruite',
        wordBank: ['Car les particules disparaissent', 'Car le volume change', 'Car la température change', 'Car aucune particule n\'est créée ni détruite'],
        mode: 'select'
      }
    ]
  },
  'ch1-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "1 kg = 1000 g car le kilogramme est égal à mille grammes selon le système métrique", answer: "vrai" },
      { question: "Toutes les conversions entre unités utilisent toujours exactement le même facteur", answer: "faux" },
      { question: "1 L = 1000 mL car le litre est égal à mille millilitres selon le système métrique", answer: "vrai" },
      { question: "1 L d'eau = 1 kg (à température ambiante) car la densité de l'eau est d'environ 1 kg/L", answer: "vrai" },
      { question: "La conversion entre litres et kilogrammes dépend de la substance, car chaque substance a sa propre densité", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Convertis: 2500 g en kg',
        answer: '2,5 kg',
        wrongAnswers: ['25 kg', '0,25 kg', '250 kg']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de mL dans 2,5 L?',
        answer: '2500 mL',
        wrongAnswers: ['25 mL', '250 mL', '25000 mL']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la masse de 3 L d\'eau (à température ambiante)?',
        answer: '3 kg',
        wrongAnswers: ['300 g', '30 kg', '0,3 kg']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de grammes dans 1,5 kg?',
        answer: '1500 g',
        wrongAnswers: ['15 g', '150 g', '15000 g']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de millilitres dans 0,5 L?',
        answer: '500 mL',
        wrongAnswers: ['50 mL', '5 mL', '5000 mL']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '1 kg = 1000 g',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les conversions utilisent toujours exactement le même facteur',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '1 L d\'eau = 1 kg (à température ambiante)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 L = 1000 mL',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: '1 kg = combien de g?',
        answer: '1000 g',
        wrongAnswers: ['100 g', '10 g', '10000 g']
      },
      {
        type: 'multiple_choice',
        question: '1 L = combien de mL?',
        answer: '1000 mL',
        wrongAnswers: ['100 mL', '10 mL', '10000 mL']
      },
      {
        type: 'multiple_choice',
        question: '1 L d\'eau = combien de kg (à température ambiante)?',
        answer: '1 kg',
        wrongAnswers: ['0,5 kg', '2 kg', '10 kg']
      },
      // Drag and Drop - Ordering (by conversion factor)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces conversions: 2,5 kg, 1500 g, 1 kg',
        answer: ['1 kg', '1500 g', '2,5 kg'], // 1000g, 1500g, 2500g
        wordBank: ['1 kg', '1500 g', '2,5 kg'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Convertis: 2500 g en kg. Glisse la réponse:',
        answer: '2,5 kg',
        wordBank: ['25 kg', '0,25 kg', '250 kg', '2,5 kg'],
        mode: 'select'
      },
      // Drag and Drop - Selection (volume conversion)
      {
        type: 'drag_and_drop',
        question: 'Combien de mL dans 2,5 L? Glisse la réponse:',
        answer: '2500 mL',
        wordBank: ['25 mL', '250 mL', '25000 mL', '2500 mL'],
        mode: 'select'
      },
      // Drag and Drop - Selection (water mass)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la masse de 3 L d\'eau (à température ambiante)? Glisse la réponse:',
        answer: '3 kg',
        wordBank: ['300 g', '30 kg', '0,3 kg', '3 kg'],
        mode: 'select'
      }
    ]
  },
  'ch1-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'eau bout à 100°C à pression atmosphérique normale, ce qui correspond à la température d'ébullition", answer: "vrai" },
      { question: "Toutes les substances ont toujours exactement les mêmes températures de changement d'état", answer: "faux" },
      { question: "La glace fond à 0°C à pression atmosphérique normale, ce qui correspond à la température de fusion de l'eau", answer: "vrai" },
      { question: "La température du corps humain est normalement de 37°C, ce qui est la température optimale pour les fonctions biologiques", answer: "vrai" },
      { question: "Les températures de changement d'état dépendent de la pression, par exemple l'eau bout à une température plus basse en altitude", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'À quelle température l\'eau bout-elle (à pression normale)?',
        answer: '100°C',
        wrongAnswers: ['0°C', '37°C', '50°C']
      },
      {
        type: 'multiple_choice',
        question: 'À quelle température la glace fond-elle (à pression normale)?',
        answer: '0°C',
        wrongAnswers: ['100°C', '37°C', '50°C']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la température normale du corps humain?',
        answer: '37°C',
        wrongAnswers: ['0°C', '100°C', '50°C']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle température correspond à la fusion de la glace?',
        answer: '0°C',
        wrongAnswers: ['100°C', '37°C', '50°C']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle température correspond à l\'ébullition de l\'eau?',
        answer: '100°C',
        wrongAnswers: ['0°C', '37°C', '50°C']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'eau bout à 100°C',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les substances ont toujours exactement les mêmes températures de changement d\'état',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La température du corps humain est 37°C',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La glace fond à 0°C',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'eau bout à:',
        answer: '100 °C',
        wrongAnswers: ['0 °C', '37 °C', '50 °C']
      },
      {
        type: 'multiple_choice',
        question: 'La glace fond à:',
        answer: '0 °C',
        wrongAnswers: ['100 °C', '37 °C', '-10 °C']
      },
      {
        type: 'multiple_choice',
        question: 'La température du corps humain est:',
        answer: '37 °C',
        wrongAnswers: ['0 °C', '100 °C', '25 °C']
      },
      // Drag and Drop - Ordering (by temperature)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces températures: Fusion de la glace (0°C), Température du corps (37°C), Ébullition de l\'eau (100°C)',
        answer: ['Fusion de la glace (0°C)', 'Température du corps (37°C)', 'Ébullition de l\'eau (100°C)'], // Lowest to highest
        wordBank: ['Fusion de la glace (0°C)', 'Température du corps (37°C)', 'Ébullition de l\'eau (100°C)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'À quelle température l\'eau bout-elle (à pression normale)? Glisse la réponse:',
        answer: '100°C',
        wordBank: ['0°C', '37°C', '50°C', '100°C'],
        mode: 'select'
      },
      // Drag and Drop - Selection (melting point)
      {
        type: 'drag_and_drop',
        question: 'À quelle température la glace fond-elle (à pression normale)? Glisse la réponse:',
        answer: '0°C',
        wordBank: ['100°C', '37°C', '50°C', '0°C'],
        mode: 'select'
      },
      // Drag and Drop - Selection (body temperature)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la température normale du corps humain? Glisse la réponse:',
        answer: '37°C',
        wordBank: ['0°C', '100°C', '50°C', '37°C'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 2: MÉLANGES ET CORPS PURS
  'ch2-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un mélange homogène est uniforme car ses composants sont bien mélangés et non distinguables à l'œil nu", answer: "vrai" },
      { question: "Tous les mélanges sont toujours identiques et ont exactement les mêmes propriétés", answer: "faux" },
      { question: "Un mélange hétérogène a des parties visibles car ses composants ne sont pas uniformément répartis", answer: "vrai" },
      { question: "Un corps pur est constitué d'une seule espèce chimique, sans aucun mélange d'autres substances", answer: "vrai" },
      { question: "La distinction entre mélange homogène, mélange hétérogène et corps pur permet de classer les différents types de matière", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces exemples, lequel est un mélange homogène: eau salée, eau + huile, eau pure?',
        answer: 'Eau salée',
        wrongAnswers: ['Eau + huile', 'Eau pure', 'Tous']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces exemples, lequel est un mélange hétérogène: eau salée, eau + huile, eau pure?',
        answer: 'Eau + huile',
        wrongAnswers: ['Eau salée', 'Eau pure', 'Tous']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces exemples, lequel est un corps pur: eau salée, eau + huile, eau pure?',
        answer: 'Eau pure',
        wrongAnswers: ['Eau salée', 'Eau + huile', 'Tous']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la caractéristique principale d\'un mélange homogène?',
        answer: 'Il est uniforme',
        wrongAnswers: ['Il a des parties visibles', 'Il est toujours solide', 'Il est toujours liquide']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la caractéristique principale d\'un corps pur?',
        answer: 'Il est constitué d\'une seule espèce',
        wrongAnswers: ['Il contient plusieurs espèces', 'Il est toujours liquide', 'Il est toujours gazeux']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un mélange homogène est uniforme',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les mélanges sont toujours identiques',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un corps pur est constitué d\'une seule espèce',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un mélange hétérogène a des parties visibles',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un mélange _____ est uniforme',
        answer: 'homogène',
        wrongAnswers: ['hétérogène', 'pur', 'complexe']
      },
      {
        type: 'multiple_choice',
        question: 'Un mélange _____ a des parties visibles',
        answer: 'hétérogène',
        wrongAnswers: ['homogène', 'pur', 'simple']
      },
      {
        type: 'multiple_choice',
        question: 'Un _____ pur est constitué d\'une seule espèce',
        answer: 'corps',
        wrongAnswers: ['mélange', 'solvant', 'soluté']
      },
      // Drag and Drop - Ordering (by purity)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces exemples par pureté: Eau pure (corps pur), Eau salée (homogène), Eau + huile (hétérogène)',
        answer: ['Eau + huile (hétérogène)', 'Eau salée (homogène)', 'Eau pure (corps pur)'], // Least pure to most pure
        wordBank: ['Eau + huile (hétérogène)', 'Eau salée (homogène)', 'Eau pure (corps pur)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces exemples, lequel est un mélange homogène? Glisse la réponse:',
        answer: 'Eau salée',
        wordBank: ['Eau + huile', 'Eau pure', 'Tous', 'Eau salée'],
        mode: 'select'
      },
      // Drag and Drop - Selection (heterogeneous)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces exemples, lequel est un mélange hétérogène? Glisse la réponse:',
        answer: 'Eau + huile',
        wordBank: ['Eau salée', 'Eau pure', 'Tous', 'Eau + huile'],
        mode: 'select'
      },
      // Drag and Drop - Selection (pure substance)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la caractéristique principale d\'un corps pur? Glisse la réponse:',
        answer: 'Il est constitué d\'une seule espèce',
        wordBank: ['Il contient plusieurs espèces', 'Il est toujours liquide', 'Il est toujours gazeux', 'Il est constitué d\'une seule espèce'],
        mode: 'select'
      }
    ]
  },
  'ch2-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La filtration sépare les solides des liquides en utilisant un filtre qui retient les particules solides", answer: "vrai" },
      { question: "Toutes les méthodes de séparation fonctionnent toujours exactement de la même manière pour tous les mélanges", answer: "faux" },
      { question: "La décantation sépare les liquides non miscibles en laissant les liquides se séparer naturellement par densité", answer: "vrai" },
      { question: "Chaque méthode de séparation est adaptée à un type spécifique de mélange selon les propriétés des composants", answer: "vrai" },
      { question: "La filtration est particulièrement efficace pour séparer les solides insolubles des liquides", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment sépares-tu le sable de l\'eau?',
        answer: 'Par filtration',
        wrongAnswers: ['Par décantation', 'Par évaporation', 'Par distillation']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle méthode sépare les solides des liquides?',
        answer: 'La filtration',
        wrongAnswers: ['La décantation', 'L\'évaporation', 'La distillation']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle méthode sépare les liquides non miscibles comme l\'eau et l\'huile?',
        answer: 'La décantation',
        wrongAnswers: ['La filtration', 'L\'évaporation', 'La distillation']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi utilise-t-on la filtration pour séparer le sable de l\'eau?',
        answer: 'Car le filtre retient les particules solides',
        wrongAnswers: ['Car le filtre dissout le sable', 'Car le filtre évapore l\'eau', 'Car le filtre change la couleur']
      },
      {
        type: 'multiple_choice',
        question: 'Comment fonctionne la décantation?',
        answer: 'Les liquides se séparent naturellement par densité',
        wrongAnswers: ['Les liquides se mélangent mieux', 'Les liquides s\'évaporent', 'Les liquides se dissolvent']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La filtration sépare les solides des liquides',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les méthodes de séparation fonctionnent toujours exactement de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La décantation sépare les liquides non miscibles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La filtration est efficace pour séparer les solides insolubles des liquides',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La _____ sépare les solides des liquides',
        answer: 'filtration',
        wrongAnswers: ['décantation', 'distillation', 'évaporation']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ sépare les liquides non miscibles',
        answer: 'décantation',
        wrongAnswers: ['filtration', 'distillation', 'évaporation']
      },
      {
        type: 'multiple_choice',
        question: 'On sépare le sable de l\'eau par:',
        answer: 'filtration',
        wrongAnswers: ['décantation', 'distillation', 'évaporation']
      },
      // Drag and Drop - Ordering (by separation method)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces méthodes de séparation: Filtration, Décantation, Évaporation',
        answer: ['Décantation', 'Filtration', 'Évaporation'], // By simplicity or order of use
        wordBank: ['Décantation', 'Filtration', 'Évaporation'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment sépares-tu le sable de l\'eau? Glisse la réponse:',
        answer: 'Par filtration',
        wordBank: ['Par décantation', 'Par évaporation', 'Par distillation', 'Par filtration'],
        mode: 'select'
      },
      // Drag and Drop - Selection (filtration)
      {
        type: 'drag_and_drop',
        question: 'Quelle méthode sépare les solides des liquides? Glisse la réponse:',
        answer: 'La filtration',
        wordBank: ['La décantation', 'L\'évaporation', 'La distillation', 'La filtration'],
        mode: 'select'
      },
      // Drag and Drop - Selection (decantation)
      {
        type: 'drag_and_drop',
        question: 'Quelle méthode sépare les liquides non miscibles? Glisse la réponse:',
        answer: 'La décantation',
        wordBank: ['La filtration', 'L\'évaporation', 'La distillation', 'La décantation'],
        mode: 'select'
      }
    ]
  },
  'ch2-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'évaporation sépare le solvant du soluté en faisant évaporer le solvant et laissant le soluté solide", answer: "vrai" },
      { question: "Toutes les méthodes de séparation nécessitent toujours exactement les mêmes conditions et temps", answer: "faux" },
      { question: "La distillation sépare les liquides miscibles en utilisant leurs différentes températures d'ébullition", answer: "vrai" },
      { question: "L'évaporation est particulièrement utile pour récupérer des solides dissous dans des liquides comme le sel dans l'eau salée", answer: "vrai" },
      { question: "La distillation permet de séparer des liquides qui ont des températures d'ébullition différentes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment récupères-tu le sel de l\'eau salée?',
        answer: 'Par évaporation',
        wrongAnswers: ['Par filtration', 'Par décantation', 'Par mélange']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle méthode sépare le solvant du soluté en faisant évaporer le solvant?',
        answer: 'L\'évaporation',
        wrongAnswers: ['La filtration', 'La décantation', 'La distillation']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle méthode sépare les liquides miscibles en utilisant leurs températures d\'ébullition différentes?',
        answer: 'La distillation',
        wrongAnswers: ['La filtration', 'La décantation', 'L\'évaporation']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi utilise-t-on l\'évaporation pour récupérer le sel de l\'eau salée?',
        answer: 'Car l\'eau s\'évapore et le sel reste',
        wrongAnswers: ['Car le sel s\'évapore', 'Car l\'eau se dissout', 'Car le sel se dissout']
      },
      {
        type: 'multiple_choice',
        question: 'Comment fonctionne la distillation?',
        answer: 'En utilisant les différentes températures d\'ébullition',
        wrongAnswers: ['En filtrant les liquides', 'En décantant les liquides', 'En mélangeant les liquides']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'évaporation sépare le solvant du soluté',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les méthodes de séparation nécessitent toujours exactement les mêmes conditions',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La distillation sépare les liquides miscibles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'évaporation permet de récupérer le sel de l\'eau salée',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'_____ sépare le solvant du soluté',
        answer: 'évaporation',
        wrongAnswers: ['filtration', 'décantation', 'distillation']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ sépare les liquides miscibles',
        answer: 'distillation',
        wrongAnswers: ['filtration', 'décantation', 'évaporation']
      },
      {
        type: 'multiple_choice',
        question: 'On récupère le sel de l\'eau salée par:',
        answer: 'évaporation',
        wrongAnswers: ['filtration', 'décantation', 'distillation']
      },
      // Drag and Drop - Ordering (by complexity)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces méthodes par complexité: Évaporation, Filtration, Distillation',
        answer: ['Filtration', 'Évaporation', 'Distillation'], // Simplest to most complex
        wordBank: ['Filtration', 'Évaporation', 'Distillation'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment récupères-tu le sel de l\'eau salée? Glisse la réponse:',
        answer: 'Par évaporation',
        wordBank: ['Par filtration', 'Par décantation', 'Par mélange', 'Par évaporation'],
        mode: 'select'
      },
      // Drag and Drop - Selection (evaporation)
      {
        type: 'drag_and_drop',
        question: 'Quelle méthode sépare le solvant du soluté en faisant évaporer le solvant? Glisse la réponse:',
        answer: 'L\'évaporation',
        wordBank: ['La filtration', 'La décantation', 'La distillation', 'L\'évaporation'],
        mode: 'select'
      },
      // Drag and Drop - Selection (distillation)
      {
        type: 'drag_and_drop',
        question: 'Comment fonctionne la distillation? Glisse la réponse:',
        answer: 'En utilisant les différentes températures d\'ébullition',
        wordBank: ['En filtrant les liquides', 'En décantant les liquides', 'En mélangeant les liquides', 'En utilisant les différentes températures d\'ébullition'],
        mode: 'select'
      }
    ]
  },
  'ch2-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La solubilité dépend de la température car généralement plus la température est élevée, plus une substance peut se dissoudre dans un solvant", answer: "vrai" },
      { question: "Toutes les substances se dissolvent toujours exactement de la même manière à toutes les températures", answer: "faux" },
      { question: "L'agitation augmente la vitesse de dissolution en améliorant le contact entre le soluté et le solvant", answer: "vrai" },
      { question: "Le sel se dissout généralement mieux dans l'eau chaude que dans l'eau froide car la solubilité augmente avec la température", answer: "vrai" },
      { question: "Plusieurs facteurs influencent la dissolution: la température, l'agitation, la surface de contact et la nature des substances", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le sel se dissout-il mieux dans l\'eau chaude ou dans l\'eau froide?',
        answer: 'Dans l\'eau chaude',
        wrongAnswers: ['Dans l\'eau froide', 'De la même manière', 'Cela dépend']
      },
      {
        type: 'multiple_choice',
        question: 'Quel facteur influence la solubilité?',
        answer: 'La température',
        wrongAnswers: ['La couleur', 'La forme seulement', 'La taille seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qui augmente la vitesse de dissolution?',
        answer: 'L\'agitation',
        wrongAnswers: ['Le refroidissement', 'Le gel', 'L\'absence de mouvement']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le sel se dissout-il mieux dans l\'eau chaude?',
        answer: 'Car la solubilité augmente avec la température',
        wrongAnswers: ['Car l\'eau chaude est plus lourde', 'Car l\'eau chaude est plus claire', 'Car l\'eau chaude est plus salée']
      },
      {
        type: 'multiple_choice',
        question: 'Comment l\'agitation augmente-t-elle la vitesse de dissolution?',
        answer: 'En améliorant le contact entre le soluté et le solvant',
        wrongAnswers: ['En réduisant le contact', 'En changeant la couleur', 'En changeant la température']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La solubilité dépend de la température',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les substances se dissolvent toujours exactement de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le sel se dissout mieux dans l\'eau chaude',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'agitation augmente la vitesse de dissolution',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La solubilité dépend de la:',
        answer: 'température',
        wrongAnswers: ['pression', 'couleur', 'masse']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ augmente la vitesse de dissolution',
        answer: 'agitation',
        wrongAnswers: ['chauffage', 'refroidissement', 'filtration']
      },
      {
        type: 'multiple_choice',
        question: 'Le sel se dissout mieux dans l\'eau:',
        answer: 'chaude',
        wrongAnswers: ['froide', 'tiède', 'glacée']
      },
      // Drag and Drop - Ordering (by solubility)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces conditions par vitesse de dissolution: Eau froide, Eau tiède, Eau chaude',
        answer: ['Eau froide', 'Eau tiède', 'Eau chaude'], // Slowest to fastest
        wordBank: ['Eau froide', 'Eau tiède', 'Eau chaude'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Le sel se dissout-il mieux dans l\'eau chaude ou dans l\'eau froide? Glisse la réponse:',
        answer: 'Dans l\'eau chaude',
        wordBank: ['Dans l\'eau froide', 'De la même manière', 'Cela dépend', 'Dans l\'eau chaude'],
        mode: 'select'
      },
      // Drag and Drop - Selection (factor)
      {
        type: 'drag_and_drop',
        question: 'Quel facteur influence la solubilité? Glisse la réponse:',
        answer: 'La température',
        wordBank: ['La couleur', 'La forme seulement', 'La taille seulement', 'La température'],
        mode: 'select'
      },
      // Drag and Drop - Selection (agitation)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qui augmente la vitesse de dissolution? Glisse la réponse:',
        answer: 'L\'agitation',
        wordBank: ['Le refroidissement', 'Le gel', 'L\'absence de mouvement', 'L\'agitation'],
        mode: 'select'
      }
    ]
  },
  'ch2-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut identifier un corps pur par ses propriétés constantes comme la température de fusion et d'ébullition, qui sont caractéristiques de chaque substance", answer: "vrai" },
      { question: "Tous les corps purs ont toujours exactement les mêmes propriétés, quelle que soit la substance", answer: "faux" },
      { question: "Un corps pur a des propriétés physiques constantes qui permettent de l'identifier et de le distinguer des mélanges", answer: "vrai" },
      { question: "La température de fusion et d'ébullition sont des propriétés caractéristiques qui permettent d'identifier un corps pur", answer: "vrai" },
      { question: "La compréhension des propriétés des corps purs permet de les identifier et de les distinguer des mélanges", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Comment reconnais-tu un corps pur?',
        answer: 'Par ses propriétés constantes (température fusion, ébullition)',
        wrongAnswers: ['Par sa couleur variable', 'Par son volume changeant', 'Par sa forme irrégulière']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles propriétés permettent d\'identifier un corps pur?',
        answer: 'Température de fusion et d\'ébullition constantes',
        wrongAnswers: ['Propriétés variables', 'Couleur changeante', 'Volume irrégulier']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la différence principale entre un corps pur et un mélange?',
        answer: 'Un corps pur a des propriétés constantes, un mélange a des propriétés variables',
        wrongAnswers: ['Ils sont identiques', 'Un mélange a des propriétés constantes', 'Il n\'y a pas de différence']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi peut-on identifier un corps pur par ses températures de fusion et d\'ébullition?',
        answer: 'Car elles sont constantes et caractéristiques',
        wrongAnswers: ['Car elles sont variables', 'Car elles sont aléatoires', 'Car elles sont impossibles à mesurer']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle caractéristique permet de distinguer un corps pur d\'un mélange?',
        answer: 'Les propriétés constantes',
        wrongAnswers: ['La couleur', 'L\'odeur', 'La forme']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut identifier un corps pur par ses propriétés',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les corps purs ont toujours exactement les mêmes propriétés',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un corps pur a des propriétés physiques constantes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La température de fusion permet d\'identifier un corps pur',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'On peut identifier un corps pur par ses _____ constantes',
        answer: 'propriétés',
        wrongAnswers: ['couleurs', 'formes', 'tailles']
      },
      {
        type: 'multiple_choice',
        question: 'La température de _____ permet d\'identifier un corps pur',
        answer: 'fusion',
        wrongAnswers: ['ébullition', 'solidification', 'vaporisation']
      },
      {
        type: 'multiple_choice',
        question: 'Un corps pur a des propriétés:',
        answer: 'constantes',
        wrongAnswers: ['variables', 'aléatoires', 'changeantes']
      },
      // Drag and Drop - Ordering (by purity identification)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces méthodes d\'identification: Température d\'ébullition, Température de fusion, Propriétés constantes',
        answer: ['Température de fusion', 'Température d\'ébullition', 'Propriétés constantes'], // Logical order
        wordBank: ['Température de fusion', 'Température d\'ébullition', 'Propriétés constantes'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment reconnais-tu un corps pur? Glisse la réponse:',
        answer: 'Par ses propriétés constantes (température fusion, ébullition)',
        wordBank: ['Par sa couleur variable', 'Par son volume changeant', 'Par sa forme irrégulière', 'Par ses propriétés constantes (température fusion, ébullition)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (properties)
      {
        type: 'drag_and_drop',
        question: 'Quelles propriétés permettent d\'identifier un corps pur? Glisse la réponse:',
        answer: 'Température de fusion et d\'ébullition constantes',
        wordBank: ['Propriétés variables', 'Couleur changeante', 'Volume irrégulier', 'Température de fusion et d\'ébullition constantes'],
        mode: 'select'
      },
      // Drag and Drop - Selection (difference)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la différence principale entre un corps pur et un mélange? Glisse la réponse:',
        answer: 'Un corps pur a des propriétés constantes, un mélange a des propriétés variables',
        wordBank: ['Ils sont identiques', 'Un mélange a des propriétés constantes', 'Il n\'y a pas de différence', 'Un corps pur a des propriétés constantes, un mélange a des propriétés variables'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 3: LES CIRCUITS ÉLECTRIQUES
  'ch3-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un circuit électrique nécessite un générateur, un récepteur et des fils pour permettre la circulation du courant électrique", answer: "vrai" },
      { question: "Tous les circuits électriques fonctionnent toujours exactement de la même manière sans aucun composant spécifique", answer: "faux" },
      { question: "Un circuit fermé permet au courant de circuler car il forme une boucle complète permettant le passage des électrons", answer: "vrai" },
      { question: "Un circuit ouvert empêche le courant de circuler car la boucle est interrompue et les électrons ne peuvent pas passer", answer: "vrai" },
      { question: "Les trois éléments essentiels d'un circuit électrique sont le générateur qui fournit l'énergie, le récepteur qui utilise l'énergie, et les fils qui relient les composants", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Cite les 3 éléments essentiels d\'un circuit électrique',
        answer: 'Générateur, récepteur, fils de connexion',
        wrongAnswers: ['Batterie, ampoule, interrupteur', 'Fil, générateur, récepteur', 'Générateur, fil seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du générateur dans un circuit électrique?',
        answer: 'Fournir le courant électrique',
        wrongAnswers: ['Utiliser le courant', 'Interrompre le courant', 'Mesurer le courant']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un circuit fermé?',
        answer: 'Un circuit où le courant peut circuler',
        wrongAnswers: ['Un circuit où le courant ne peut pas circuler', 'Un circuit sans générateur', 'Un circuit sans récepteur']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un circuit ouvert?',
        answer: 'Un circuit où le courant ne peut pas circuler',
        wrongAnswers: ['Un circuit où le courant peut circuler', 'Un circuit fermé', 'Un circuit sans générateur']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du récepteur dans un circuit électrique?',
        answer: 'Utiliser le courant électrique',
        wrongAnswers: ['Fournir le courant', 'Interrompre le courant', 'Créer le courant']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un circuit électrique nécessite un générateur, un récepteur et des fils',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les circuits électriques fonctionnent toujours exactement de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un circuit fermé permet au courant de circuler',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un circuit ouvert empêche le courant de circuler',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un circuit _____ permet au courant de circuler',
        answer: 'fermé',
        wrongAnswers: ['ouvert', 'cassé', 'déconnecté']
      },
      {
        type: 'multiple_choice',
        question: 'Un circuit _____ empêche le courant de circuler',
        answer: 'ouvert',
        wrongAnswers: ['fermé', 'complet', 'connecté']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ fournit le courant électrique',
        answer: 'générateur',
        wrongAnswers: ['récepteur', 'interrupteur', 'fil']
      },
      // Drag and Drop - Ordering (circuit components)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces éléments par rôle: Récepteur, Générateur, Fils',
        answer: ['Générateur', 'Fils', 'Récepteur'], // Source, connection, user
        wordBank: ['Générateur', 'Fils', 'Récepteur'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Cite les 3 éléments essentiels d\'un circuit électrique. Glisse la réponse:',
        answer: 'Générateur, récepteur, fils de connexion',
        wordBank: ['Batterie, ampoule, interrupteur', 'Fil, générateur, récepteur', 'Générateur, fil seulement', 'Générateur, récepteur, fils de connexion'],
        mode: 'select'
      },
      // Drag and Drop - Selection (generator role)
      {
        type: 'drag_and_drop',
        question: 'Quel est le rôle du générateur dans un circuit électrique? Glisse la réponse:',
        answer: 'Fournir le courant électrique',
        wordBank: ['Utiliser le courant', 'Interrompre le courant', 'Mesurer le courant', 'Fournir le courant électrique'],
        mode: 'select'
      },
      // Drag and Drop - Selection (closed circuit)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'un circuit fermé? Glisse la réponse:',
        answer: 'Un circuit où le courant peut circuler',
        wordBank: ['Un circuit où le courant ne peut pas circuler', 'Un circuit sans générateur', 'Un circuit sans récepteur', 'Un circuit où le courant peut circuler'],
        mode: 'select'
      }
    ]
  },
  'ch3-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le cuivre est un conducteur car il permet facilement le passage du courant électrique grâce à ses électrons libres", answer: "vrai" },
      { question: "Tous les métaux sont toujours exactement des isolants électriques", answer: "faux" },
      { question: "Le plastique est un isolant car il empêche le passage du courant électrique car ses électrons ne sont pas libres", answer: "vrai" },
      { question: "Les conducteurs comme les métaux permettent au courant de circuler, tandis que les isolants comme le plastique empêchent sa circulation", answer: "vrai" },
      { question: "La distinction entre conducteurs et isolants est essentielle pour comprendre comment fonctionnent les circuits électriques", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le cuivre est conducteur ou isolant?',
        answer: 'Conducteur (métal)',
        wrongAnswers: ['Isolant', 'Semi-conducteur', 'Ni l\'un ni l\'autre']
      },
      {
        type: 'multiple_choice',
        question: 'Le plastique est conducteur ou isolant?',
        answer: 'Isolant',
        wrongAnswers: ['Conducteur', 'Semi-conducteur', 'Ni l\'un ni l\'autre']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le cuivre est-il un conducteur?',
        answer: 'Car il permet le passage du courant électrique',
        wrongAnswers: ['Car il empêche le passage du courant', 'Car il est transparent', 'Car il est léger']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le plastique est-il un isolant?',
        answer: 'Car il empêche le passage du courant électrique',
        wrongAnswers: ['Car il permet le passage du courant', 'Car il est transparent', 'Car il est lourd']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces matériaux, lequel est un conducteur: cuivre, plastique, verre, bois?',
        answer: 'Cuivre',
        wrongAnswers: ['Plastique', 'Verre', 'Bois']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le cuivre est un conducteur',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les métaux sont toujours exactement des isolants',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le plastique est un isolant',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les conducteurs permettent au courant de circuler',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le cuivre est un:',
        answer: 'conducteur',
        wrongAnswers: ['isolant', 'semi-conducteur', 'résistant']
      },
      {
        type: 'multiple_choice',
        question: 'Le plastique est un:',
        answer: 'isolant',
        wrongAnswers: ['conducteur', 'semi-conducteur', 'résistant']
      },
      {
        type: 'multiple_choice',
        question: 'Un _____ permet le passage du courant électrique',
        answer: 'conducteur',
        wrongAnswers: ['isolant', 'résistant', 'interrupteur']
      },
      // Drag and Drop - Ordering (by conductivity)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces matériaux par conductivité: Bois (isolant), Cuivre (conducteur), Plastique (isolant)',
        answer: ['Bois (isolant)', 'Plastique (isolant)', 'Cuivre (conducteur)'], // Least to most conductive
        wordBank: ['Bois (isolant)', 'Plastique (isolant)', 'Cuivre (conducteur)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Le cuivre est conducteur ou isolant? Glisse la réponse:',
        answer: 'Conducteur (métal)',
        wordBank: ['Isolant', 'Semi-conducteur', 'Ni l\'un ni l\'autre', 'Conducteur (métal)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (plastic)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi le plastique est-il un isolant? Glisse la réponse:',
        answer: 'Car il empêche le passage du courant électrique',
        wordBank: ['Car il permet le passage du courant', 'Car il est transparent', 'Car il est lourd', 'Car il empêche le passage du courant électrique'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conductor)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces matériaux, lequel est un conducteur? Glisse la réponse:',
        answer: 'Cuivre',
        wordBank: ['Plastique', 'Verre', 'Bois', 'Cuivre'],
        mode: 'select'
      }
    ]
  },
  'ch3-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Dans un circuit en série, l'intensité est la même partout car il n'y a qu'un seul chemin pour le courant", answer: "vrai" },
      { question: "Dans tous les circuits, l'intensité est toujours exactement différente à chaque point", answer: "faux" },
      { question: "Si un dipôle grille en série, tous s'arrêtent car le circuit est interrompu et le courant ne peut plus circuler", answer: "vrai" },
      { question: "Dans un montage en série, les dipôles sont branchés les uns à la suite des autres sur le même fil, formant un seul chemin pour le courant", answer: "vrai" },
      { question: "L'unicité de l'intensité dans un circuit série est une propriété importante qui permet de comprendre le comportement du courant électrique", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Circuit série: I₁ = 250 mA. Quelle est I₂?',
        answer: '250 mA (unicité)',
        wrongAnswers: ['500 mA', '125 mA', '0 mA']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un circuit en série, comment est l\'intensité?',
        answer: 'La même partout',
        wrongAnswers: ['Différente partout', 'Variable', 'Nulle']
      },
      {
        type: 'multiple_choice',
        question: 'Si un dipôle grille dans un circuit en série, que se passe-t-il?',
        answer: 'Tous les dipôles s\'arrêtent',
        wrongAnswers: ['Les autres continuent de fonctionner', 'Rien ne change', 'Le courant augmente']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi l\'intensité est-elle la même partout dans un circuit série?',
        answer: 'Car il n\'y a qu\'un seul chemin pour le courant',
        wrongAnswers: ['Car il y a plusieurs chemins', 'Car le courant se divise', 'Car il n\'y a pas de courant']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de chemins existe-t-il pour le courant dans un circuit en série?',
        answer: 'Un seul chemin',
        wrongAnswers: ['Deux chemins', 'Plusieurs chemins', 'Aucun chemin']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans un circuit en série, l\'intensité est la même partout',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans tous les circuits, l\'intensité est toujours exactement différente à chaque point',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Si un dipôle grille en série, tous s\'arrêtent',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans un montage en série, il n\'y a qu\'un seul chemin pour le courant',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un circuit en série, l\'intensité est la _____ partout',
        answer: 'même',
        wrongAnswers: ['différente', 'variable', 'nulle']
      },
      {
        type: 'multiple_choice',
        question: 'Si un dipôle grille en série, tous:',
        answer: 's\'arrêtent',
        wrongAnswers: ['continuent', 's\'allument', 's\'intensifient']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un circuit série, il n\'y a qu\'un seul _____ pour le courant',
        answer: 'chemin',
        wrongAnswers: ['dipôle', 'générateur', 'interrupteur']
      },
      // Drag and Drop - Ordering (series circuit properties)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces propriétés d\'un circuit série: Un seul chemin, Même intensité, Si un dipôle grille tous s\'arrêtent',
        answer: ['Un seul chemin', 'Même intensité', 'Si un dipôle grille tous s\'arrêtent'], // Logical order
        wordBank: ['Un seul chemin', 'Même intensité', 'Si un dipôle grille tous s\'arrêtent'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Circuit série: I₁ = 250 mA. Quelle est I₂? Glisse la réponse:',
        answer: '250 mA (unicité)',
        wordBank: ['500 mA', '125 mA', '0 mA', '250 mA (unicité)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (series intensity)
      {
        type: 'drag_and_drop',
        question: 'Dans un circuit en série, comment est l\'intensité? Glisse la réponse:',
        answer: 'La même partout',
        wordBank: ['Différente partout', 'Variable', 'Nulle', 'La même partout'],
        mode: 'select'
      },
      // Drag and Drop - Selection (if component fails)
      {
        type: 'drag_and_drop',
        question: 'Si un dipôle grille dans un circuit en série, que se passe-t-il? Glisse la réponse:',
        answer: 'Tous les dipôles s\'arrêtent',
        wordBank: ['Les autres continuent de fonctionner', 'Rien ne change', 'Le courant augmente', 'Tous les dipôles s\'arrêtent'],
        mode: 'select'
      }
    ]
  },
  'ch3-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Dans un circuit en parallèle, la tension est la même aux bornes de chaque dipôle car ils sont branchés directement aux bornes du générateur", answer: "vrai" },
      { question: "Dans tous les circuits, la tension est toujours exactement différente à chaque dipôle", answer: "faux" },
      { question: "L'intensité totale dans un circuit parallèle est égale à la somme des intensités dans les branches selon la loi des nœuds", answer: "vrai" },
      { question: "Dans un montage en parallèle, les dipôles sont branchés sur des branches séparées, permettant au courant de se diviser", answer: "vrai" },
      { question: "Si un dipôle grille dans un circuit parallèle, les autres continuent de fonctionner car ils ont leur propre chemin pour le courant", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un circuit en parallèle, comment est la tension aux bornes de chaque dipôle?',
        answer: 'La même pour tous',
        wrongAnswers: ['Différente pour chacun', 'Variable', 'Nulle']
      },
      {
        type: 'multiple_choice',
        question: 'I_principale = 300 mA, I₁ = 180 mA. Quelle est I₂?',
        answer: '120 mA',
        wrongAnswers: ['480 mA', '60 mA', '300 mA']
      },
      {
        type: 'multiple_choice',
        question: 'Comment calcule-t-on l\'intensité totale dans un circuit parallèle?',
        answer: 'Somme des intensités dans les branches',
        wrongAnswers: ['Différence des intensités', 'Moyenne des intensités', 'Produit des intensités']
      },
      {
        type: 'multiple_choice',
        question: 'Si un dipôle grille dans un circuit parallèle, que se passe-t-il?',
        answer: 'Les autres continuent de fonctionner',
        wrongAnswers: ['Tous s\'arrêtent', 'Rien ne change', 'Le courant augmente']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de chemins existe-t-il pour le courant dans un circuit en parallèle?',
        answer: 'Plusieurs chemins (branches)',
        wrongAnswers: ['Un seul chemin', 'Deux chemins seulement', 'Aucun chemin']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans un circuit en parallèle, la tension est la même aux bornes de chaque dipôle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans tous les circuits, la tension est toujours exactement différente à chaque dipôle',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'intensité totale = somme des intensités dans les branches',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si un dipôle grille dans un circuit parallèle, les autres continuent de fonctionner',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Dans un circuit en parallèle, la tension est la _____ aux bornes de chaque dipôle',
        answer: 'même',
        wrongAnswers: ['différente', 'variable', 'nulle']
      },
      {
        type: 'multiple_choice',
        question: 'L\'intensité totale = _____ des intensités dans les branches',
        answer: 'somme',
        wrongAnswers: ['différence', 'produit', 'quotient']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un circuit parallèle, il y a plusieurs _____ pour le courant',
        answer: 'chemins',
        wrongAnswers: ['dipôles', 'générateurs', 'interrupteurs']
      },
      // Drag and Drop - Ordering (parallel circuit calculation)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces intensités: I_principale (300 mA), I₁ (180 mA), I₂ (120 mA)',
        answer: ['I₂ (120 mA)', 'I₁ (180 mA)', 'I_principale (300 mA)'], // Smallest to largest
        wordBank: ['I₂ (120 mA)', 'I₁ (180 mA)', 'I_principale (300 mA)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'I_principale = 300 mA, I₁ = 180 mA. Quelle est I₂? Glisse la réponse:',
        answer: '120 mA',
        wordBank: ['480 mA', '60 mA', '300 mA', '120 mA'],
        mode: 'select'
      },
      // Drag and Drop - Selection (parallel tension)
      {
        type: 'drag_and_drop',
        question: 'Dans un circuit en parallèle, comment est la tension aux bornes de chaque dipôle? Glisse la réponse:',
        answer: 'La même pour tous',
        wordBank: ['Différente pour chacun', 'Variable', 'Nulle', 'La même pour tous'],
        mode: 'select'
      },
      // Drag and Drop - Selection (if component fails)
      {
        type: 'drag_and_drop',
        question: 'Si un dipôle grille dans un circuit parallèle, que se passe-t-il? Glisse la réponse:',
        answer: 'Les autres continuent de fonctionner',
        wordBank: ['Tous s\'arrêtent', 'Rien ne change', 'Le courant augmente', 'Les autres continuent de fonctionner'],
        mode: 'select'
      }
    ]
  },
  'ch3-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut combiner série et parallèle dans un même circuit pour créer un circuit mixte qui combine les avantages des deux montages", answer: "vrai" },
      { question: "Tous les circuits sont toujours soit uniquement en série soit uniquement en parallèle, jamais les deux", answer: "faux" },
      { question: "Un circuit mixte combine les montages série et parallèle, permettant de réaliser des circuits plus complexes", answer: "vrai" },
      { question: "Dans un circuit mixte, certaines parties fonctionnent comme un montage série et d'autres comme un montage parallèle", answer: "vrai" },
      { question: "La compréhension des circuits série et parallèle permet de comprendre et d'analyser des circuits mixtes plus complexes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Décris un circuit mixte',
        answer: 'Combinaison de montages série et parallèle',
        wrongAnswers: ['Seulement série', 'Seulement parallèle', 'Aucun montage']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un circuit mixte?',
        answer: 'Un circuit qui combine série et parallèle',
        wrongAnswers: ['Un circuit seulement série', 'Un circuit seulement parallèle', 'Un circuit sans connexions']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi utilise-t-on des circuits mixtes?',
        answer: 'Pour combiner les avantages des deux montages',
        wrongAnswers: ['Pour simplifier les circuits', 'Pour réduire le courant', 'Pour augmenter la tension seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Comment fonctionne un circuit mixte?',
        answer: 'Certaines parties en série, d\'autres en parallèle',
        wrongAnswers: ['Tout en série', 'Tout en parallèle', 'Ni l\'un ni l\'autre']
      },
      {
        type: 'multiple_choice',
        question: 'Peut-on combiner série et parallèle dans un même circuit?',
        answer: 'Oui, c\'est un circuit mixte',
        wrongAnswers: ['Non, jamais', 'Seulement parfois', 'Cela dépend']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut combiner série et parallèle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les circuits sont toujours soit uniquement série soit uniquement parallèle',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un circuit mixte combine série et parallèle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans un circuit mixte, certaines parties fonctionnent en série et d\'autres en parallèle',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'On peut _____ série et parallèle',
        answer: 'combiner',
        wrongAnswers: ['séparer', 'diviser', 'multiplier']
      },
      {
        type: 'multiple_choice',
        question: 'Un circuit _____ combine série et parallèle',
        answer: 'mixte',
        wrongAnswers: ['simple', 'complexe', 'double']
      },
      {
        type: 'multiple_choice',
        question: 'Un circuit mixte est une _____ de montages série et parallèle',
        answer: 'combinaison',
        wrongAnswers: ['séparation', 'division', 'multiplication']
      },
      // Drag and Drop - Ordering (circuit types by complexity)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces types de circuits par complexité: Parallèle, Série, Mixte',
        answer: ['Série', 'Parallèle', 'Mixte'], // Simplest to most complex
        wordBank: ['Série', 'Parallèle', 'Mixte'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Décris un circuit mixte. Glisse la réponse:',
        answer: 'Combinaison de montages série et parallèle',
        wordBank: ['Seulement série', 'Seulement parallèle', 'Aucun montage', 'Combinaison de montages série et parallèle'],
        mode: 'select'
      },
      // Drag and Drop - Selection (mixed circuit)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'un circuit mixte? Glisse la réponse:',
        answer: 'Un circuit qui combine série et parallèle',
        wordBank: ['Un circuit seulement série', 'Un circuit seulement parallèle', 'Un circuit sans connexions', 'Un circuit qui combine série et parallèle'],
        mode: 'select'
      },
      // Drag and Drop - Selection (why use mixed)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi utilise-t-on des circuits mixtes? Glisse la réponse:',
        answer: 'Pour combiner les avantages des deux montages',
        wordBank: ['Pour simplifier les circuits', 'Pour réduire le courant', 'Pour augmenter la tension seulement', 'Pour combiner les avantages des deux montages'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 4: L'INTENSITÉ DU COURANT ÉLECTRIQUE
  'ch4-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'intensité se mesure en ampères (A), qui est l'unité de base du Système International pour le courant électrique", answer: "vrai" },
      { question: "Toutes les grandeurs électriques se mesurent toujours exactement avec les mêmes unités", answer: "faux" },
      { question: "1 A = 1000 mA car l'ampère est mille fois plus grand que le milliampère", answer: "vrai" },
      { question: "L'ampèremètre se branche en série car il doit mesurer le courant qui passe dans le circuit", answer: "vrai" },
      { question: "L'intensité représente la quantité de courant qui circule dans un circuit électrique à chaque seconde", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'unité de l\'intensité?',
        answer: 'Ampère (A)',
        wrongAnswers: ['Volt (V)', 'Ohm (Ω)', 'Watt (W)']
      },
      {
        type: 'multiple_choice',
        question: 'Combien vaut 1 A en milliampères?',
        answer: '1000 mA',
        wrongAnswers: ['10 mA', '100 mA', '10000 mA']
      },
      {
        type: 'multiple_choice',
        question: 'Comment se branche l\'ampèremètre dans un circuit?',
        answer: 'En série',
        wrongAnswers: ['En parallèle', 'En dérivation', 'N\'importe comment']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 3,5 A en mA',
        answer: '3500 mA',
        wrongAnswers: ['35 mA', '350 mA', '35000 mA']
      },
      {
        type: 'multiple_choice',
        question: 'Que mesure l\'intensité?',
        answer: 'La quantité de courant qui circule',
        wrongAnswers: ['La tension', 'La résistance', 'La puissance']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'intensité se mesure en ampères (A)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les grandeurs électriques se mesurent toujours exactement avec les mêmes unités',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'ampèremètre se branche en série',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 A = 1000 mA',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'intensité se mesure en:',
        answer: 'ampères (A)',
        wrongAnswers: ['volts (V)', 'ohms (Ω)', 'watts (W)']
      },
      {
        type: 'multiple_choice',
        question: '1 A = combien de mA?',
        answer: '1000 mA',
        wrongAnswers: ['100 mA', '10 mA', '10000 mA']
      },
      {
        type: 'multiple_choice',
        question: 'L\'ampèremètre se branche en:',
        answer: 'série',
        wrongAnswers: ['dérivation', 'parallèle', 'séparé']
      },
      // Drag and Drop - Ordering (by magnitude)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs d\'intensité: 3500 mA, 1 A, 500 mA',
        answer: ['500 mA', '1 A', '3500 mA'], // Smallest to largest
        wordBank: ['500 mA', '1 A', '3500 mA'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'unité de l\'intensité? Glisse la réponse:',
        answer: 'Ampère (A)',
        wordBank: ['Volt (V)', 'Ohm (Ω)', 'Watt (W)', 'Ampère (A)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: 'Convertis 3,5 A en mA. Glisse la réponse:',
        answer: '3500 mA',
        wordBank: ['35 mA', '350 mA', '35000 mA', '3500 mA'],
        mode: 'select'
      },
      // Drag and Drop - Selection (ammeter connection)
      {
        type: 'drag_and_drop',
        question: 'Comment se branche l\'ampèremètre dans un circuit? Glisse la réponse:',
        answer: 'En série',
        wordBank: ['En parallèle', 'En dérivation', 'N\'importe comment', 'En série'],
        mode: 'select'
      }
    ]
  },
  'ch4-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Dans un circuit série, l'intensité est constante car il n'y a qu'un seul chemin pour le courant, donc toute la charge électrique passe au même endroit", answer: "vrai" },
      { question: "Dans tous les circuits, l'intensité varie toujours de manière aléatoire à chaque point", answer: "faux" },
      { question: "La loi des nœuds énonce que I_totale = I₁ + I₂ + I₃, ce qui signifie que l'intensité totale entrant dans un nœud est égale à la somme des intensités qui en sortent", answer: "vrai" },
      { question: "La loi des nœuds s'applique dans les circuits parallèles où le courant se divise en plusieurs branches", answer: "vrai" },
      { question: "Comprendre la loi des nœuds permet de calculer les intensités dans les différentes branches d'un circuit parallèle", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un circuit série, comment est l\'intensité?',
        answer: 'Constante partout',
        wrongAnswers: ['Variable partout', 'Nulle partout', 'Maximale partout']
      },
      {
        type: 'multiple_choice',
        question: 'I_principale = 300 mA, I₁ = 180 mA. Quelle est I₂?',
        answer: '120 mA',
        wrongAnswers: ['480 mA', '60 mA', '300 mA']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule de la loi des nœuds?',
        answer: 'I_totale = I₁ + I₂ + I₃',
        wrongAnswers: ['I_totale = I₁ - I₂', 'I_totale = I₁ × I₂', 'I_totale = I₁ ÷ I₂']
      },
      {
        type: 'multiple_choice',
        question: 'Dans quel type de circuit s\'applique la loi des nœuds?',
        answer: 'Circuit parallèle',
        wrongAnswers: ['Circuit série', 'Circuit ouvert', 'Circuit fermé']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi l\'intensité est-elle constante dans un circuit série?',
        answer: 'Car il n\'y a qu\'un seul chemin pour le courant',
        wrongAnswers: ['Car il y a plusieurs chemins', 'Car le courant se divise', 'Car il n\'y a pas de courant']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans un circuit série, l\'intensité est constante',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans tous les circuits, l\'intensité varie toujours de manière aléatoire',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La loi des nœuds: I_totale = I₁ + I₂ + I₃',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La loi des nœuds s\'applique dans les circuits parallèles',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans un circuit série, l\'intensité est:',
        answer: 'constante',
        wrongAnswers: ['variable', 'nulle', 'maximale']
      },
      {
        type: 'multiple_choice',
        question: 'La loi des nœuds: I_totale = I₁ _____ I₂ _____ I₃',
        answer: '+, +',
        wrongAnswers: ['-, -', '×, ×', '÷, ÷']
      },
      {
        type: 'multiple_choice',
        question: 'I_principale = 300 mA, I₁ = 180 mA. I₂ = ?',
        answer: '120 mA',
        wrongAnswers: ['480 mA', '60 mA', '300 mA']
      },
      // Drag and Drop - Ordering (intensity values)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces intensités: I₂ (120 mA), I₁ (180 mA), I_principale (300 mA)',
        answer: ['I₂ (120 mA)', 'I₁ (180 mA)', 'I_principale (300 mA)'], // Smallest to largest
        wordBank: ['I₂ (120 mA)', 'I₁ (180 mA)', 'I_principale (300 mA)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'I_principale = 300 mA, I₁ = 180 mA. Quelle est I₂? Glisse la réponse:',
        answer: '120 mA',
        wordBank: ['480 mA', '60 mA', '300 mA', '120 mA'],
        mode: 'select'
      },
      // Drag and Drop - Selection (series intensity)
      {
        type: 'drag_and_drop',
        question: 'Dans un circuit série, comment est l\'intensité? Glisse la réponse:',
        answer: 'Constante partout',
        wordBank: ['Variable partout', 'Nulle partout', 'Maximale partout', 'Constante partout'],
        mode: 'select'
      },
      // Drag and Drop - Selection (node law formula)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la formule de la loi des nœuds? Glisse la réponse:',
        answer: 'I_totale = I₁ + I₂ + I₃',
        wordBank: ['I_totale = I₁ - I₂', 'I_totale = I₁ × I₂', 'I_totale = I₁ ÷ I₂', 'I_totale = I₁ + I₂ + I₃'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 5: LA TENSION ÉLECTRIQUE (labeled as ch4 in curriculum but is actually ch5)
  'ch5-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La tension se mesure en volts (V), qui est l'unité de base du Système International pour la différence de potentiel électrique", answer: "vrai" },
      { question: "Toutes les grandeurs électriques se mesurent toujours exactement avec les mêmes unités et les mêmes appareils", answer: "faux" },
      { question: "1 V = 1000 mV car le volt est mille fois plus grand que le millivolt", answer: "vrai" },
      { question: "Le voltmètre se branche en dérivation (en parallèle) car il doit mesurer la tension aux bornes d'un dipôle sans modifier le circuit", answer: "vrai" },
      { question: "La tension représente la différence de potentiel électrique entre deux points d'un circuit, comme la force qui pousse les électrons", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'unité de la tension?',
        answer: 'Volt (V)',
        wrongAnswers: ['Ampère (A)', 'Ohm (Ω)', 'Watt (W)']
      },
      {
        type: 'multiple_choice',
        question: 'Combien vaut 1 V en millivolts?',
        answer: '1000 mV',
        wrongAnswers: ['10 mV', '100 mV', '10000 mV']
      },
      {
        type: 'multiple_choice',
        question: 'Comment se branche le voltmètre dans un circuit?',
        answer: 'En dérivation (parallèle)',
        wrongAnswers: ['En série', 'En ouvert', 'N\'importe comment']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 4,5 V en mV',
        answer: '4500 mV',
        wrongAnswers: ['45 mV', '450 mV', '45000 mV']
      },
      {
        type: 'multiple_choice',
        question: 'Que mesure la tension?',
        answer: 'La différence de potentiel électrique',
        wrongAnswers: ['Le courant', 'La résistance', 'La puissance']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La tension se mesure en volts (V)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les grandeurs électriques se mesurent toujours exactement avec les mêmes unités',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le voltmètre se branche en dérivation',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 V = 1000 mV',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La tension se mesure en:',
        answer: 'volts (V)',
        wrongAnswers: ['ampères (A)', 'ohms (Ω)', 'watts (W)']
      },
      {
        type: 'multiple_choice',
        question: '1 V = combien de mV?',
        answer: '1000 mV',
        wrongAnswers: ['100 mV', '10 mV', '10000 mV']
      },
      {
        type: 'multiple_choice',
        question: 'Le voltmètre se branche en:',
        answer: 'dérivation',
        wrongAnswers: ['série', 'parallèle', 'séparé']
      },
      // Drag and Drop - Ordering (by magnitude)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs de tension: 4500 mV, 1 V, 500 mV',
        answer: ['500 mV', '1 V', '4500 mV'], // Smallest to largest
        wordBank: ['500 mV', '1 V', '4500 mV'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'unité de la tension? Glisse la réponse:',
        answer: 'Volt (V)',
        wordBank: ['Ampère (A)', 'Ohm (Ω)', 'Watt (W)', 'Volt (V)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: 'Convertis 4,5 V en mV. Glisse la réponse:',
        answer: '4500 mV',
        wordBank: ['45 mV', '450 mV', '45000 mV', '4500 mV'],
        mode: 'select'
      },
      // Drag and Drop - Selection (voltmeter connection)
      {
        type: 'drag_and_drop',
        question: 'Comment se branche le voltmètre dans un circuit? Glisse la réponse:',
        answer: 'En dérivation (parallèle)',
        wordBank: ['En série', 'En ouvert', 'N\'importe comment', 'En dérivation (parallèle)'],
        mode: 'select'
      }
    ]
  },
  'ch5-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Dans un circuit série, la tension totale est égale à la somme des tensions car chaque dipôle consomme une partie de la tension du générateur", answer: "vrai" },
      { question: "Dans tous les circuits, la tension est toujours exactement la même partout sans aucune variation", answer: "faux" },
      { question: "Dans un circuit parallèle, la tension est la même partout car tous les dipôles sont branchés directement aux bornes du générateur", answer: "vrai" },
      { question: "La loi des mailles permet de calculer les tensions dans un circuit série en utilisant la conservation de l'énergie électrique", answer: "vrai" },
      { question: "Comprendre la répartition de la tension permet d'analyser le comportement des circuits série et parallèle", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Circuit série: U₁ = 3V, U₂ = 2V. Quelle est U_totale?',
        answer: '5V',
        wrongAnswers: ['1V', '6V', '1,5V']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un circuit série, comment calcule-t-on la tension totale?',
        answer: 'Somme des tensions',
        wrongAnswers: ['Différence des tensions', 'Moyenne des tensions', 'Produit des tensions']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un circuit parallèle, comment est la tension?',
        answer: 'La même partout',
        wrongAnswers: ['Différente partout', 'Variable', 'Nulle']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi la tension totale dans un circuit série est-elle égale à la somme des tensions?',
        answer: 'Car chaque dipôle consomme une partie de la tension',
        wrongAnswers: ['Car la tension se multiplie', 'Car la tension se divise', 'Car la tension reste constante']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi la tension est-elle la même partout dans un circuit parallèle?',
        answer: 'Car tous les dipôles sont branchés directement aux bornes du générateur',
        wrongAnswers: ['Car la tension se divise', 'Car la tension se multiplie', 'Car il n\'y a pas de tension']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans un circuit série, la tension totale = somme des tensions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans tous les circuits, la tension est toujours exactement la même partout',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Dans un circuit parallèle, la tension est la même partout',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La loi des mailles permet de calculer les tensions dans un circuit série',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Dans un circuit série, la tension totale = _____ des tensions',
        answer: 'somme',
        wrongAnswers: ['différence', 'produit', 'quotient']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un circuit parallèle, la tension est la _____ partout',
        answer: 'même',
        wrongAnswers: ['différente', 'variable', 'nulle']
      },
      {
        type: 'multiple_choice',
        question: 'Circuit série: U₁ = 3V, U₂ = 2V. U_totale = ?',
        answer: '5 V',
        wrongAnswers: ['1 V', '6 V', '3 V']
      },
      // Drag and Drop - Ordering (tension values)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces tensions: U₂ (2V), U_totale (5V), U₁ (3V)',
        answer: ['U₂ (2V)', 'U₁ (3V)', 'U_totale (5V)'], // Smallest to largest
        wordBank: ['U₂ (2V)', 'U₁ (3V)', 'U_totale (5V)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Circuit série: U₁ = 3V, U₂ = 2V. Quelle est U_totale? Glisse la réponse:',
        answer: '5V',
        wordBank: ['1V', '6V', '1,5V', '5V'],
        mode: 'select'
      },
      // Drag and Drop - Selection (series tension)
      {
        type: 'drag_and_drop',
        question: 'Dans un circuit série, comment calcule-t-on la tension totale? Glisse la réponse:',
        answer: 'Somme des tensions',
        wordBank: ['Différence des tensions', 'Moyenne des tensions', 'Produit des tensions', 'Somme des tensions'],
        mode: 'select'
      },
      // Drag and Drop - Selection (parallel tension)
      {
        type: 'drag_and_drop',
        question: 'Dans un circuit parallèle, comment est la tension? Glisse la réponse:',
        answer: 'La même partout',
        wordBank: ['Différente partout', 'Variable', 'Nulle', 'La même partout'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 6: LA LUMIÈRE
  'ch6-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La lumière se propage en ligne droite dans un milieu homogène selon le principe de propagation rectiligne de la lumière", answer: "vrai" },
      { question: "La lumière se propage toujours exactement de la même manière dans tous les milieux sans aucune variation", answer: "faux" },
      { question: "La vitesse de la lumière est très rapide, environ 300 000 km/s dans le vide, ce qui est la vitesse maximale possible dans l'univers", answer: "vrai" },
      { question: "La propagation rectiligne de la lumière permet d'expliquer la formation des ombres et le fonctionnement des instruments d'optique", answer: "vrai" },
      { question: "La compréhension de la propagation de la lumière est essentielle pour comprendre les phénomènes optiques comme la réflexion, la réfraction et la formation des images", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment la lumière se propage-t-elle?',
        answer: 'En ligne droite',
        wrongAnswers: ['En cercle', 'En zigzag', 'En spirale']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est approximativement la vitesse de la lumière dans le vide?',
        answer: '300 000 km/s',
        wrongAnswers: ['340 m/s', '100 000 km/s', '1 000 km/s']
      },
      {
        type: 'multiple_choice',
        question: 'Dans quel milieu la lumière se propage-t-elle le plus rapidement?',
        answer: 'Dans le vide',
        wrongAnswers: ['Dans l\'air', 'Dans l\'eau', 'Dans le verre']
      },
      {
        type: 'multiple_choice',
        question: 'Quel principe décrit la propagation rectiligne de la lumière?',
        answer: 'La lumière se propage en ligne droite',
        wrongAnswers: ['La lumière se propage en cercle', 'La lumière se propage en zigzag', 'La lumière ne se propage pas']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi la propagation rectiligne de la lumière est-elle importante?',
        answer: 'Elle permet d\'expliquer la formation des ombres',
        wrongAnswers: ['Elle ne sert à rien', 'Elle explique la couleur', 'Elle explique la chaleur']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La lumière se propage en ligne droite',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La lumière se propage toujours exactement de la même manière dans tous les milieux',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La vitesse de la lumière est très rapide',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La propagation rectiligne permet d\'expliquer la formation des ombres',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La lumière se propage en ligne:',
        answer: 'droite',
        wrongAnswers: ['courbe', 'zigzag', 'spirale']
      },
      {
        type: 'multiple_choice',
        question: 'La vitesse de la lumière est environ combien de km/s dans le vide?',
        answer: '300 000 km/s',
        wrongAnswers: ['30 000 km/s', '3 000 000 km/s', '300 km/s']
      },
      {
        type: 'multiple_choice',
        question: 'La propagation _____ permet d\'expliquer la formation des ombres',
        answer: 'rectiligne',
        wrongAnswers: ['curviligne', 'circulaire', 'ondulatoire']
      },
      // Drag and Drop - Ordering (by speed)
      {
        type: 'drag_and_drop',
        question: 'Rangez par vitesse: Son (340 m/s), Lumière (300 000 km/s)',
        answer: ['Son (340 m/s)', 'Lumière (300 000 km/s)'], // Sound < Light
        wordBank: ['Son (340 m/s)', 'Lumière (300 000 km/s)'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment la lumière se propage-t-elle? Glisse la réponse:',
        answer: 'En ligne droite',
        wordBank: ['En cercle', 'En zigzag', 'En spirale', 'En ligne droite'],
        mode: 'select'
      },
      // Drag and Drop - Selection (speed of light)
      {
        type: 'drag_and_drop',
        question: 'Quelle est approximativement la vitesse de la lumière dans le vide? Glisse la réponse:',
        answer: '300 000 km/s',
        wordBank: ['340 m/s', '100 000 km/s', '1 000 km/s', '300 000 km/s'],
        mode: 'select'
      },
      // Drag and Drop - Selection (propagation importance)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi la propagation rectiligne de la lumière est-elle importante? Glisse la réponse:',
        answer: 'Elle permet d\'expliquer la formation des ombres',
        wordBank: ['Elle ne sert à rien', 'Elle explique la couleur', 'Elle explique la chaleur', 'Elle permet d\'expliquer la formation des ombres'],
        mode: 'select'
      }
    ]
  },
  'ch6-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La réflexion suit la loi: angle d'incidence = angle de réflexion, ce qui signifie que l'angle entre le rayon incident et la normale est égal à l'angle entre le rayon réfléchi et la normale", answer: "vrai" },
      { question: "Tous les angles de réflexion sont toujours exactement différents des angles d'incidence", answer: "faux" },
      { question: "Un miroir plan donne une image virtuelle car l'image ne peut pas être projetée sur un écran mais seulement vue dans le miroir", answer: "vrai" },
      { question: "La loi de la réflexion s'applique à toutes les surfaces réfléchissantes, pas seulement aux miroirs", answer: "vrai" },
      { question: "Comprendre la réflexion de la lumière permet d'expliquer pourquoi on voit son reflet dans un miroir et comment fonctionnent les instruments d'optique", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la loi de la réflexion?',
        answer: 'Angle d\'incidence = angle de réflexion',
        wrongAnswers: ['Angle d\'incidence = 2 × angle de réflexion', 'Angle d\'incidence = angle de réflexion ÷ 2', 'Il n\'y a pas de loi']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type d\'image donne un miroir plan?',
        answer: 'Une image virtuelle',
        wrongAnswers: ['Une image réelle', 'Pas d\'image', 'Une image inversée seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi l\'image dans un miroir plan est-elle virtuelle?',
        answer: 'Car elle ne peut pas être projetée sur un écran',
        wrongAnswers: ['Car elle peut être projetée', 'Car elle est toujours réelle', 'Car elle n\'existe pas']
      },
      {
        type: 'multiple_choice',
        question: 'À quoi s\'applique la loi de la réflexion?',
        answer: 'À toutes les surfaces réfléchissantes',
        wrongAnswers: ['Seulement aux miroirs', 'Seulement à l\'eau', 'Seulement au verre']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi voit-on son reflet dans un miroir?',
        answer: 'Grâce à la réflexion de la lumière',
        wrongAnswers: ['Car le miroir émet de la lumière', 'Car le miroir absorbe la lumière', 'Car le miroir est transparent']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La réflexion suit la loi: angle d\'incidence = angle de réflexion',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les angles de réflexion sont toujours exactement différents des angles d\'incidence',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un miroir plan donne une image virtuelle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La loi de la réflexion s\'applique à toutes les surfaces réfléchissantes',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La loi de la réflexion: angle d\'_____ = angle de réflexion',
        answer: 'incidence',
        wrongAnswers: ['réflexion', 'réfraction', 'déviation']
      },
      {
        type: 'multiple_choice',
        question: 'Un miroir plan donne une image:',
        answer: 'virtuelle',
        wrongAnswers: ['réelle', 'inversée', 'agrandie']
      },
      {
        type: 'multiple_choice',
        question: 'Angle d\'incidence _____ angle de réflexion',
        answer: '=',
        wrongAnswers: ['>', '<', '≠']
      },
      // Drag and Drop - Ordering (reflection properties)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes de la réflexion: Rayon réfléchi, Rayon incident, Surface réfléchissante',
        answer: ['Rayon incident', 'Surface réfléchissante', 'Rayon réfléchi'], // Logical order
        wordBank: ['Rayon incident', 'Surface réfléchissante', 'Rayon réfléchi'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la loi de la réflexion? Glisse la réponse:',
        answer: 'Angle d\'incidence = angle de réflexion',
        wordBank: ['Angle d\'incidence = 2 × angle de réflexion', 'Angle d\'incidence = angle de réflexion ÷ 2', 'Il n\'y a pas de loi', 'Angle d\'incidence = angle de réflexion'],
        mode: 'select'
      },
      // Drag and Drop - Selection (virtual image)
      {
        type: 'drag_and_drop',
        question: 'Quel type d\'image donne un miroir plan? Glisse la réponse:',
        answer: 'Une image virtuelle',
        wordBank: ['Une image réelle', 'Pas d\'image', 'Une image inversée seulement', 'Une image virtuelle'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reflection explanation)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi voit-on son reflet dans un miroir? Glisse la réponse:',
        answer: 'Grâce à la réflexion de la lumière',
        wordBank: ['Car le miroir émet de la lumière', 'Car le miroir absorbe la lumière', 'Car le miroir est transparent', 'Grâce à la réflexion de la lumière'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 7: L'OMBRE ET LA CHAMBRE NOIRE
  'ch7-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une ombre se forme quand un objet opaque bloque la lumière, empêchant les rayons lumineux d'atteindre une surface", answer: "vrai" },
      { question: "Toutes les ombres ont toujours exactement la même forme quelle que soit la position de la source de lumière", answer: "faux" },
      { question: "L'ombre a généralement la forme de l'objet car elle représente la silhouette de l'objet qui bloque la lumière", answer: "vrai" },
      { question: "La taille et la forme de l'ombre dépendent de la position de la source de lumière, de l'objet et de l'écran", answer: "vrai" },
      { question: "Comprendre la formation des ombres permet d'expliquer la chambre noire et le fonctionnement des appareils photo primitifs", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment se forme une ombre?',
        answer: 'Quand un objet opaque bloque la lumière',
        wrongAnswers: ['Quand un objet transparent laisse passer la lumière', 'Quand la lumière traverse l\'objet', 'Quand l\'objet émet de la lumière']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle forme a généralement une ombre?',
        answer: 'La forme de l\'objet',
        wrongAnswers: ['Toujours ronde', 'Toujours carrée', 'Pas de forme définie']
      },
      {
        type: 'multiple_choice',
        question: 'De quoi dépend la taille et la forme de l\'ombre?',
        answer: 'De la position de la source de lumière, de l\'objet et de l\'écran',
        wrongAnswers: ['Seulement de la couleur de l\'objet', 'Seulement de la température', 'Seulement de la forme']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi l\'ombre a-t-elle la forme de l\'objet?',
        answer: 'Car elle représente la silhouette de l\'objet qui bloque la lumière',
        wrongAnswers: ['Car l\'ombre change de forme', 'Car l\'ombre est toujours ronde', 'Car l\'ombre n\'a pas de forme']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type d\'objet bloque la lumière pour former une ombre?',
        answer: 'Un objet opaque',
        wrongAnswers: ['Un objet transparent', 'Un objet translucide', 'Un objet lumineux']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une ombre se forme quand un objet bloque la lumière',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les ombres ont toujours exactement la même forme',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'ombre a généralement la forme de l\'objet',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La taille de l\'ombre dépend de la position de la source de lumière',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Une ombre se forme quand un objet _____ bloque la lumière',
        answer: 'opaque',
        wrongAnswers: ['transparent', 'translucide', 'réfléchissant']
      },
      {
        type: 'multiple_choice',
        question: 'L\'ombre a généralement la _____ de l\'objet',
        answer: 'forme',
        wrongAnswers: ['couleur', 'taille', 'texture']
      },
      {
        type: 'multiple_choice',
        question: 'La taille de l\'ombre dépend de la position de la _____ de lumière',
        answer: 'source',
        wrongAnswers: ['récepteur', 'objet', 'miroir']
      },
      // Drag and Drop - Ordering (shadow formation)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes de formation d\'ombre: Source de lumière, Objet opaque, Ombre sur l\'écran',
        answer: ['Source de lumière', 'Objet opaque', 'Ombre sur l\'écran'], // Logical order
        wordBank: ['Source de lumière', 'Objet opaque', 'Ombre sur l\'écran'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment se forme une ombre? Glisse la réponse:',
        answer: 'Quand un objet opaque bloque la lumière',
        wordBank: ['Quand un objet transparent laisse passer la lumière', 'Quand la lumière traverse l\'objet', 'Quand l\'objet émet de la lumière', 'Quand un objet opaque bloque la lumière'],
        mode: 'select'
      },
      // Drag and Drop - Selection (shadow shape)
      {
        type: 'drag_and_drop',
        question: 'Quelle forme a généralement une ombre? Glisse la réponse:',
        answer: 'La forme de l\'objet',
        wordBank: ['Toujours ronde', 'Toujours carrée', 'Pas de forme définie', 'La forme de l\'objet'],
        mode: 'select'
      },
      // Drag and Drop - Selection (shadow size)
      {
        type: 'drag_and_drop',
        question: 'De quoi dépend la taille et la forme de l\'ombre? Glisse la réponse:',
        answer: 'De la position de la source de lumière, de l\'objet et de l\'écran',
        wordBank: ['Seulement de la couleur de l\'objet', 'Seulement de la température', 'Seulement de la forme', 'De la position de la source de lumière, de l\'objet et de l\'écran'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 8: LA LUMIÈRE ET SES PROPRIÉTÉS
  'ch8-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La lumière blanche contient toutes les couleurs du spectre visible, ce qui permet de voir un arc-en-ciel quand elle est décomposée", answer: "vrai" },
      { question: "Toutes les lumières contiennent toujours exactement les mêmes couleurs sans aucune variation", answer: "faux" },
      { question: "Un prisme décompose la lumière blanche en séparant les différentes couleurs selon leur longueur d'onde par le phénomène de dispersion", answer: "vrai" },
      { question: "Le spectre visible contient 7 couleurs principales: rouge, orange, jaune, vert, bleu, indigo et violet, qui sont les couleurs de l'arc-en-ciel", answer: "vrai" },
      { question: "Comprendre la décomposition de la lumière blanche permet d'expliquer la formation des arcs-en-ciel et le fonctionnement des prismes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Que contient la lumière blanche?',
        answer: 'Toutes les couleurs du spectre',
        wrongAnswers: ['Seulement le rouge et le bleu', 'Seulement le vert', 'Aucune couleur']
      },
      {
        type: 'multiple_choice',
        question: 'Que fait un prisme avec la lumière blanche?',
        answer: 'Il la décompose en différentes couleurs',
        wrongAnswers: ['Il la rend plus blanche', 'Il l\'absorbe', 'Il la réfléchit seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de couleurs principales contient le spectre visible?',
        answer: '7 couleurs',
        wrongAnswers: ['5 couleurs', '10 couleurs', '3 couleurs']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les couleurs du spectre dans l\'ordre?',
        answer: 'Rouge, orange, jaune, vert, bleu, indigo, violet',
        wrongAnswers: ['Violet, bleu, vert, jaune, orange, rouge', 'Bleu, vert, rouge seulement', 'Toutes mélangées']
      },
      {
        type: 'multiple_choice',
        question: 'Comment un prisme décompose-t-il la lumière blanche?',
        answer: 'Par dispersion selon la longueur d\'onde',
        wrongAnswers: ['Par absorption', 'Par réflexion seulement', 'Par émission']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La lumière blanche contient toutes les couleurs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les lumières contiennent toujours exactement les mêmes couleurs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un prisme décompose la lumière blanche',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le spectre contient 7 couleurs principales',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La lumière blanche contient toutes les _____ du spectre',
        answer: 'couleurs',
        wrongAnswers: ['fréquences', 'intensités', 'directions']
      },
      {
        type: 'multiple_choice',
        question: 'Un _____ décompose la lumière blanche',
        answer: 'prisme',
        wrongAnswers: ['miroir', 'lentille', 'filtre']
      },
      {
        type: 'multiple_choice',
        question: 'Le spectre contient combien de couleurs principales?',
        answer: '7',
        wrongAnswers: ['5', '6', '8']
      },
      // Drag and Drop - Ordering (spectrum colors)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces couleurs du spectre: Jaune, Rouge, Vert',
        answer: ['Rouge', 'Jaune', 'Vert'], // Red, Yellow, Green (spectrum order)
        wordBank: ['Rouge', 'Jaune', 'Vert'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Que contient la lumière blanche? Glisse la réponse:',
        answer: 'Toutes les couleurs du spectre',
        wordBank: ['Seulement le rouge et le bleu', 'Seulement le vert', 'Aucune couleur', 'Toutes les couleurs du spectre'],
        mode: 'select'
      },
      // Drag and Drop - Selection (prism)
      {
        type: 'drag_and_drop',
        question: 'Que fait un prisme avec la lumière blanche? Glisse la réponse:',
        answer: 'Il la décompose en différentes couleurs',
        wordBank: ['Il la rend plus blanche', 'Il l\'absorbe', 'Il la réfléchit seulement', 'Il la décompose en différentes couleurs'],
        mode: 'select'
      },
      // Drag and Drop - Selection (spectrum colors)
      {
        type: 'drag_and_drop',
        question: 'Quelles sont les couleurs du spectre dans l\'ordre? Glisse la réponse:',
        answer: 'Rouge, orange, jaune, vert, bleu, indigo, violet',
        wordBank: ['Violet, bleu, vert, jaune, orange, rouge', 'Bleu, vert, rouge seulement', 'Toutes mélangées', 'Rouge, orange, jaune, vert, bleu, indigo, violet'],
        mode: 'select'
      }
    ]
  },
  'ch8-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un arc-en-ciel se forme par dispersion de la lumière du soleil dans les gouttes d'eau, qui agissent comme des prismes miniatures", answer: "vrai" },
      { question: "Tous les arcs-en-ciel se forment toujours exactement de la même manière dans toutes les conditions", answer: "faux" },
      { question: "Les gouttes d'eau dans l'atmosphère décomposent la lumière blanche du soleil en différentes couleurs par le phénomène de dispersion", answer: "vrai" },
      { question: "Pour voir un arc-en-ciel, il faut que le soleil soit derrière l'observateur et qu'il y ait des gouttes d'eau devant lui", answer: "vrai" },
      { question: "L'arc-en-ciel contient toutes les couleurs du spectre visible, créant un magnifique dégradé de couleurs dans le ciel", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment se forme un arc-en-ciel?',
        answer: 'Par dispersion de la lumière du soleil dans les gouttes d\'eau',
        wrongAnswers: ['Par émission de lumière colorée', 'Par réflexion seulement', 'Par absorption de la lumière']
      },
      {
        type: 'multiple_choice',
        question: 'Que font les gouttes d\'eau dans la formation d\'un arc-en-ciel?',
        answer: 'Elles agissent comme des prismes qui décomposent la lumière',
        wrongAnswers: ['Elles émettent de la lumière', 'Elles absorbent la lumière', 'Elles réfléchissent seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Où doit se trouver le soleil pour voir un arc-en-ciel?',
        answer: 'Derrière l\'observateur',
        wrongAnswers: ['Devant l\'observateur', 'Au-dessus de l\'observateur', 'N\'importe où']
      },
      {
        type: 'multiple_choice',
        question: 'Quel phénomène permet la formation d\'un arc-en-ciel?',
        answer: 'La dispersion de la lumière',
        wrongAnswers: ['L\'absorption de la lumière', 'L\'émission de lumière', 'La réflexion seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Que contient un arc-en-ciel?',
        answer: 'Toutes les couleurs du spectre visible',
        wrongAnswers: ['Seulement le rouge et le bleu', 'Seulement le vert', 'Aucune couleur']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un arc-en-ciel se forme par dispersion de la lumière',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les arcs-en-ciel se forment toujours exactement de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les gouttes d\'eau décomposent la lumière blanche du soleil',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour voir un arc-en-ciel, il faut que le soleil soit derrière l\'observateur',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un arc-en-ciel se forme par _____ de la lumière du soleil dans les gouttes d\'eau',
        answer: 'dispersion',
        wrongAnswers: ['réflexion', 'réfraction', 'absorption']
      },
      {
        type: 'multiple_choice',
        question: 'Les gouttes d\'eau agissent comme des _____ miniatures',
        answer: 'prismes',
        wrongAnswers: ['miroirs', 'lentilles', 'filtres']
      },
      {
        type: 'multiple_choice',
        question: 'Pour voir un arc-en-ciel, le soleil doit être _____ l\'observateur',
        answer: 'derrière',
        wrongAnswers: ['devant', 'au-dessus', 'à côté']
      },
      // Drag and Drop - Ordering (rainbow formation)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes de formation d\'arc-en-ciel: Gouttes d\'eau, Lumière du soleil, Arc-en-ciel visible',
        answer: ['Lumière du soleil', 'Gouttes d\'eau', 'Arc-en-ciel visible'], // Logical order
        wordBank: ['Lumière du soleil', 'Gouttes d\'eau', 'Arc-en-ciel visible'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment se forme un arc-en-ciel? Glisse la réponse:',
        answer: 'Par dispersion de la lumière du soleil dans les gouttes d\'eau',
        wordBank: ['Par émission de lumière colorée', 'Par réflexion seulement', 'Par absorption de la lumière', 'Par dispersion de la lumière du soleil dans les gouttes d\'eau'],
        mode: 'select'
      },
      // Drag and Drop - Selection (water drops)
      {
        type: 'drag_and_drop',
        question: 'Que font les gouttes d\'eau dans la formation d\'un arc-en-ciel? Glisse la réponse:',
        answer: 'Elles agissent comme des prismes qui décomposent la lumière',
        wordBank: ['Elles émettent de la lumière', 'Elles absorbent la lumière', 'Elles réfléchissent seulement', 'Elles agissent comme des prismes qui décomposent la lumière'],
        mode: 'select'
      },
      // Drag and Drop - Selection (sun position)
      {
        type: 'drag_and_drop',
        question: 'Où doit se trouver le soleil pour voir un arc-en-ciel? Glisse la réponse:',
        answer: 'Derrière l\'observateur',
        wordBank: ['Devant l\'observateur', 'Au-dessus de l\'observateur', 'N\'importe où', 'Derrière l\'observateur'],
        mode: 'select'
      }
    ]
  },
  'ch8-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une chambre noire produit une image inversée car la propagation rectiligne de la lumière fait que les rayons du haut de l'objet arrivent en bas de l'image et vice versa", answer: "vrai" },
      { question: "Toutes les images dans une chambre noire sont toujours exactement droites et jamais inversées", answer: "faux" },
      { question: "La chambre noire utilise le principe de propagation rectiligne de la lumière pour former une image de l'objet extérieur sur un écran à l'intérieur", answer: "vrai" },
      { question: "Le principe de la chambre noire est à la base du fonctionnement des appareils photo et des caméras modernes", answer: "vrai" },
      { question: "Comprendre la chambre noire permet d'expliquer comment fonctionnent les instruments d'optique et comment les images sont formées", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pourquoi l\'image est inversée dans une chambre noire?',
        answer: 'Propagation rectiligne: rayons haut → bas et vice versa',
        wrongAnswers: ['Car la chambre est noire', 'Car l\'image est toujours droite', 'Car il n\'y a pas de lumière']
      },
      {
        type: 'multiple_choice',
        question: 'Quel principe utilise la chambre noire?',
        answer: 'La propagation rectiligne de la lumière',
        wrongAnswers: ['L\'absorption de la lumière', 'L\'émission de lumière', 'La réflexion seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Que produit une chambre noire?',
        answer: 'Une image inversée de l\'objet extérieur',
        wrongAnswers: ['Une image droite', 'Pas d\'image', 'Une image colorée seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Quel instrument utilise le principe de la chambre noire?',
        answer: 'Les appareils photo',
        wrongAnswers: ['Les miroirs seulement', 'Les prismes seulement', 'Les lampes']
      },
      {
        type: 'multiple_choice',
        question: 'Comment les rayons lumineux se comportent-ils dans une chambre noire?',
        answer: 'Ils se propagent en ligne droite et croisent',
        wrongAnswers: ['Ils se propagent en cercle', 'Ils s\'arrêtent', 'Ils rebondissent partout']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une chambre noire produit une image inversée',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les images dans une chambre noire sont toujours exactement droites',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La chambre noire utilise la propagation rectiligne de la lumière',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le principe de la chambre noire est utilisé dans les appareils photo',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Une chambre noire produit une image:',
        answer: 'inversée',
        wrongAnswers: ['droite', 'agrandie', 'réduite']
      },
      {
        type: 'multiple_choice',
        question: 'La chambre noire utilise la propagation _____ de la lumière',
        answer: 'rectiligne',
        wrongAnswers: ['curviligne', 'circulaire', 'ondulatoire']
      },
      {
        type: 'multiple_choice',
        question: 'Dans une chambre noire, les rayons du haut arrivent en:',
        answer: 'bas',
        wrongAnswers: ['haut', 'milieu', 'côté']
      },
      // Drag and Drop - Ordering (camera obscura process)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes dans une chambre noire: Image inversée sur l\'écran, Rayons lumineux traversent le trou, Objet extérieur',
        answer: ['Objet extérieur', 'Rayons lumineux traversent le trou', 'Image inversée sur l\'écran'], // Logical order
        wordBank: ['Objet extérieur', 'Rayons lumineux traversent le trou', 'Image inversée sur l\'écran'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi l\'image est inversée dans une chambre noire? Glisse la réponse:',
        answer: 'Propagation rectiligne: rayons haut → bas et vice versa',
        wordBank: ['Car la chambre est noire', 'Car l\'image est toujours droite', 'Car il n\'y a pas de lumière', 'Propagation rectiligne: rayons haut → bas et vice versa'],
        mode: 'select'
      },
      // Drag and Drop - Selection (principle)
      {
        type: 'drag_and_drop',
        question: 'Quel principe utilise la chambre noire? Glisse la réponse:',
        answer: 'La propagation rectiligne de la lumière',
        wordBank: ['L\'absorption de la lumière', 'L\'émission de lumière', 'La réflexion seulement', 'La propagation rectiligne de la lumière'],
        mode: 'select'
      },
      // Drag and Drop - Selection (application)
      {
        type: 'drag_and_drop',
        question: 'Quel instrument utilise le principe de la chambre noire? Glisse la réponse:',
        answer: 'Les appareils photo',
        wordBank: ['Les miroirs seulement', 'Les prismes seulement', 'Les lampes', 'Les appareils photo'],
        mode: 'select'
      }
    ]
  },
  'ch8-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une éclipse solaire se produit quand la Lune passe entre le Soleil et la Terre, bloquant la lumière du soleil et projetant son ombre sur la Terre", answer: "vrai" },
      { question: "Toutes les éclipses se produisent toujours exactement de la même manière sans aucune différence entre elles", answer: "faux" },
      { question: "Une éclipse lunaire se produit quand la Terre passe entre le Soleil et la Lune, projetant son ombre sur la Lune et la faisant disparaître temporairement", answer: "vrai" },
      { question: "L'alignement pour une éclipse solaire est Soleil - Lune - Terre, tandis que pour une éclipse lunaire c'est Soleil - Terre - Lune", answer: "vrai" },
      { question: "Comprendre les éclipses permet d'expliquer les phénomènes astronomiques et le mouvement des corps célestes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est l\'alignement pour une éclipse solaire?',
        answer: 'Soleil - Lune - Terre',
        wrongAnswers: ['Soleil - Terre - Lune', 'Lune - Soleil - Terre', 'Terre - Lune - Soleil']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est l\'alignement pour une éclipse lunaire?',
        answer: 'Soleil - Terre - Lune',
        wrongAnswers: ['Soleil - Lune - Terre', 'Lune - Soleil - Terre', 'Terre - Lune - Soleil']
      },
      {
        type: 'multiple_choice',
        question: 'Que cache la Lune lors d\'une éclipse solaire?',
        answer: 'Le Soleil',
        wrongAnswers: ['La Terre', 'Elle-même', 'Rien']
      },
      {
        type: 'multiple_choice',
        question: 'Que cache la Terre lors d\'une éclipse lunaire?',
        answer: 'Le Soleil pour la Lune',
        wrongAnswers: ['La Lune', 'Elle-même', 'Rien']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la différence principale entre une éclipse solaire et une éclipse lunaire?',
        answer: 'Solaire: Lune cache Soleil. Lunaire: Terre cache Soleil pour Lune',
        wrongAnswers: ['Elles sont identiques', 'Solaire: Terre cache Lune', 'Lunaire: Soleil cache Terre']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une éclipse solaire se produit quand la Lune cache le Soleil',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les éclipses se produisent toujours exactement de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une éclipse lunaire se produit quand la Terre cache le Soleil pour la Lune',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'alignement pour une éclipse solaire est Soleil - Lune - Terre',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Une éclipse solaire se produit quand la _____ cache le Soleil',
        answer: 'Lune',
        wrongAnswers: ['Terre', 'Mars', 'Vénus']
      },
      {
        type: 'multiple_choice',
        question: 'Une éclipse lunaire se produit quand la _____ cache le Soleil pour la Lune',
        answer: 'Terre',
        wrongAnswers: ['Lune', 'Mars', 'Vénus']
      },
      {
        type: 'multiple_choice',
        question: 'Alignement pour éclipse solaire: Soleil - _____ - Terre',
        answer: 'Lune',
        wrongAnswers: ['Terre', 'Mars', 'Vénus']
      },
      // Drag and Drop - Ordering (eclipse alignment)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces corps pour une éclipse solaire: Lune, Soleil, Terre',
        answer: ['Soleil', 'Lune', 'Terre'], // Sun - Moon - Earth
        wordBank: ['Soleil', 'Lune', 'Terre'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est l\'alignement pour une éclipse solaire? Glisse la réponse:',
        answer: 'Soleil - Lune - Terre',
        wordBank: ['Soleil - Terre - Lune', 'Lune - Soleil - Terre', 'Terre - Lune - Soleil', 'Soleil - Lune - Terre'],
        mode: 'select'
      },
      // Drag and Drop - Selection (lunar eclipse)
      {
        type: 'drag_and_drop',
        question: 'Quel est l\'alignement pour une éclipse lunaire? Glisse la réponse:',
        answer: 'Soleil - Terre - Lune',
        wordBank: ['Soleil - Lune - Terre', 'Lune - Soleil - Terre', 'Terre - Lune - Soleil', 'Soleil - Terre - Lune'],
        mode: 'select'
      },
      // Drag and Drop - Selection (difference)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la différence principale entre une éclipse solaire et une éclipse lunaire? Glisse la réponse:',
        answer: 'Solaire: Lune cache Soleil. Lunaire: Terre cache Soleil pour Lune',
        wordBank: ['Elles sont identiques', 'Solaire: Terre cache Lune', 'Lunaire: Soleil cache Terre', 'Solaire: Lune cache Soleil. Lunaire: Terre cache Soleil pour Lune'],
        mode: 'select'
      }
    ]
  }
};

export default YEAR2_PHYSICS_SECTION_QUESTIONS;

