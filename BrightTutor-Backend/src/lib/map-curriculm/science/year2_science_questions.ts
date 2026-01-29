/**
 * Year 2 Science - Questions for Each Section
 * All questions are verifiable and appropriate for app format:
 * - Multiple Choice
 * - True/False (Right or Wrong)
 * - Fill-in-Blank (Typing)
 * - Completion
 *
 * NO drawings, NO file uploads, NO unverifiable questions
 */

export const YEAR2_SCIENCE_SECTION_QUESTIONS: {
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
  // CHAPTER 1: LA MATIÈRE ET SES PROPRIÉTÉS
  'ch1-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La matière occupe un espace et a une masse selon les propriétés fondamentales de la matière", answer: "vrai" },
      { question: "Tous les objets ont toujours exactement les mêmes propriétés", answer: "faux" },
      { question: "Il existe trois états principaux de la matière: solide, liquide et gazeux", answer: "vrai" },
      { question: "Un solide a une forme et un volume fixes car ses particules sont très proches et organisées", answer: "vrai" },
      { question: "Un liquide a un volume fixe mais pas de forme fixe car ses particules peuvent glisser les unes sur les autres", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien y a-t-il d\'états principaux de la matière?',
        answer: '3',
        wrongAnswers: ['2', '4', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lesquels sont des solides: eau, roche, air, sable?',
        answer: 'Roche et sable',
        wrongAnswers: ['Eau et air', 'Tous', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Quel état de la matière a une forme et un volume fixes?',
        answer: 'Solide',
        wrongAnswers: ['Liquide', 'Gaz', 'Plasma']
      },
      {
        type: 'multiple_choice',
        question: 'Quel état de la matière n\'a ni forme ni volume fixes?',
        answer: 'Gaz',
        wrongAnswers: ['Solide', 'Liquide', 'Tous les états']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lequel est un gaz: eau, roche, air, sable?',
        answer: 'Air',
        wrongAnswers: ['Eau', 'Roche', 'Sable']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La matière occupe un espace et a une masse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les objets ont toujours exactement les mêmes propriétés',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un solide a une forme et un volume fixes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un gaz n\'a ni forme ni volume fixes',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Il existe combien d\'états principaux de la matière?',
        answer: 'trois',
        wrongAnswers: ['deux', 'quatre', 'cinq']
      },
      {
        type: 'multiple_choice',
        question: 'Un _____ a une forme et un volume fixes',
        answer: 'solide',
        wrongAnswers: ['liquide', 'gaz', 'plasma']
      },
      {
        type: 'multiple_choice',
        question: 'Un liquide a un volume fixe mais pas de _____ fixe',
        answer: 'forme',
        wrongAnswers: ['masse', 'température', 'densité']
      },
      // Drag and Drop - Ordering (states by particle movement)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces états par ordre de mouvement des particules: Gaz, Liquide, Solide',
        answer: ['Solide', 'Liquide', 'Gaz'], // Least movement to most movement
        wordBank: ['Solide', 'Liquide', 'Gaz'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien y a-t-il d\'états principaux de la matière? Glisse la réponse:',
        answer: '3',
        wordBank: ['2', '4', '3', '5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (solid state)
      {
        type: 'drag_and_drop',
        question: 'Quel état de la matière a une forme et un volume fixes? Glisse la réponse:',
        answer: 'Solide',
        wordBank: ['Liquide', 'Gaz', 'Solide', 'Plasma'],
        mode: 'select'
      },
      // Drag and Drop - Selection (gas state)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces éléments, lequel est un gaz? Glisse la réponse:',
        answer: 'Air',
        wordBank: ['Eau', 'Roche', 'Sable', 'Air'],
        mode: 'select'
      }
    ]
  },

  'ch1-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les propriétés physiques incluent la couleur, la texture, la transparence et la dureté", answer: "vrai" },
      { question: "Tous les matériaux ont toujours exactement les mêmes propriétés physiques", answer: "faux" },
      { question: "Un matériau transparent laisse passer la lumière car il permet à la lumière de le traverser", answer: "vrai" },
      { question: "Un matériau opaque ne laisse pas passer la lumière car il bloque complètement la lumière", answer: "vrai" },
      { question: "La dureté mesure la résistance à la déformation et permet de comparer différents matériaux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces matériaux, lesquels sont transparents: verre, bois, eau, métal?',
        answer: 'Verre et eau',
        wrongAnswers: ['Bois et métal', 'Tous', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces matériaux, lesquels sont opaques: verre, bois, eau, métal?',
        answer: 'Bois et métal',
        wrongAnswers: ['Verre et eau', 'Tous', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété mesure la résistance à la déformation?',
        answer: 'La dureté',
        wrongAnswers: ['La transparence', 'La couleur', 'La texture']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété permet de voir à travers un matériau?',
        answer: 'La transparence',
        wrongAnswers: ['La dureté', 'La couleur', 'La texture']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces propriétés, lesquelles sont des propriétés physiques: couleur, texture, transparence, dureté?',
        answer: 'Toutes',
        wrongAnswers: ['Seulement couleur et texture', 'Seulement transparence', 'Aucune']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les propriétés physiques incluent la couleur et la texture',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les matériaux ont toujours exactement les mêmes propriétés physiques',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un matériau transparent laisse passer la lumière',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La dureté mesure la résistance à la déformation',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un matériau qui ne laisse pas passer la lumière est:',
        answer: 'opaque',
        wrongAnswers: ['transparent', 'translucide', 'réfléchissant']
      },
      {
        type: 'multiple_choice',
        question: 'Un matériau qui laisse passer la lumière est:',
        answer: 'transparent',
        wrongAnswers: ['opaque', 'translucide', 'réfléchissant']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ mesure la résistance à la déformation',
        answer: 'dureté',
        wrongAnswers: ['masse', 'densité', 'température']
      },
      // Drag and Drop - Ordering (by transparency)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces matériaux: Opaque, Transparent, Translucide',
        answer: ['Opaque', 'Translucide', 'Transparent'], // Logical ordering
        wordBank: ['Opaque', 'Translucide', 'Transparent'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces matériaux, lesquels sont transparents? Glisse la réponse:',
        answer: 'Verre et eau',
        wordBank: ['Bois et métal', 'Tous', 'Verre et eau', 'Aucun'],
        mode: 'select'
      },
      // Drag and Drop - Selection (opaque materials)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces matériaux, lesquels sont opaques? Glisse la réponse:',
        answer: 'Bois et métal',
        wordBank: ['Verre et eau', 'Tous', 'Bois et métal', 'Aucun'],
        mode: 'select'
      },
      // Drag and Drop - Selection (property)
      {
        type: 'drag_and_drop',
        question: 'Quelle propriété mesure la résistance à la déformation? Glisse la réponse:',
        answer: 'La dureté',
        wordBank: ['La transparence', 'La couleur', 'La texture', 'La dureté'],
        mode: 'select'
      }
    ]
  },

  'ch1-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La fusion est le passage de solide à liquide lorsque la température augmente", answer: "vrai" },
      { question: "Tous les changements d'état nécessitent toujours une augmentation de température", answer: "faux" },
      { question: "La solidification est le passage de liquide à solide lorsque la température diminue", answer: "vrai" },
      { question: "La vaporisation est le passage de liquide à gazeux et peut se produire par ébullition ou évaporation", answer: "vrai" },
      { question: "La condensation est le passage de gazeux à liquide lorsque la température diminue", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel changement d\'état se produit quand la glace fond?',
        answer: 'Fusion',
        wrongAnswers: ['Solidification', 'Vaporisation', 'Condensation']
      },
      {
        type: 'multiple_choice',
        question: 'Quel changement d\'état se produit quand l\'eau bout?',
        answer: 'Vaporisation',
        wrongAnswers: ['Fusion', 'Solidification', 'Condensation']
      },
      {
        type: 'multiple_choice',
        question: 'Quel changement d\'état se produit quand l\'eau gèle?',
        answer: 'Solidification',
        wrongAnswers: ['Fusion', 'Vaporisation', 'Condensation']
      },
      {
        type: 'multiple_choice',
        question: 'Quel changement d\'état se produit quand la vapeur d\'eau se transforme en eau liquide?',
        answer: 'Condensation',
        wrongAnswers: ['Fusion', 'Solidification', 'Vaporisation']
      },
      {
        type: 'multiple_choice',
        question: 'Identifie le changement d\'état: eau qui bout',
        answer: 'Vaporisation',
        wrongAnswers: ['Fusion', 'Solidification', 'Condensation']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La fusion est le passage de solide à liquide',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les changements d\'état nécessitent toujours une augmentation de température',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La glace qui fond est un exemple de fusion',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La condensation est le passage de gazeux à liquide',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le passage de solide à liquide s\'appelle:',
        answer: 'fusion',
        wrongAnswers: ['vaporisation', 'solidification', 'condensation']
      },
      {
        type: 'multiple_choice',
        question: 'Le passage de liquide à gazeux s\'appelle:',
        answer: 'vaporisation',
        wrongAnswers: ['fusion', 'solidification', 'condensation']
      },
      {
        type: 'multiple_choice',
        question: 'Le passage de liquide à solide s\'appelle:',
        answer: 'solidification',
        wrongAnswers: ['fusion', 'vaporisation', 'condensation']
      },
      // Drag and Drop - Ordering (state changes by temperature)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces changements d\'état: Solidification, Fusion, Vaporisation',
        answer: ['Solidification', 'Fusion', 'Vaporisation'], // Decreasing temp, increasing temp
        wordBank: ['Solidification', 'Fusion', 'Vaporisation'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel changement d\'état se produit quand la glace fond? Glisse la réponse:',
        answer: 'Fusion',
        wordBank: ['Solidification', 'Vaporisation', 'Fusion', 'Condensation'],
        mode: 'select'
      },
      // Drag and Drop - Selection (boiling)
      {
        type: 'drag_and_drop',
        question: 'Quel changement d\'état se produit quand l\'eau bout? Glisse la réponse:',
        answer: 'Vaporisation',
        wordBank: ['Fusion', 'Solidification', 'Condensation', 'Vaporisation'],
        mode: 'select'
      },
      // Drag and Drop - Selection (freezing)
      {
        type: 'drag_and_drop',
        question: 'Quel changement d\'état se produit quand l\'eau gèle? Glisse la réponse:',
        answer: 'Solidification',
        wordBank: ['Fusion', 'Vaporisation', 'Condensation', 'Solidification'],
        mode: 'select'
      }
    ]
  },

  'ch1-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un mélange est une combinaison de deux ou plusieurs substances qui conservent leurs propriétés individuelles", answer: "vrai" },
      { question: "Tous les mélanges sont toujours identiques et homogènes", answer: "faux" },
      { question: "Une solution est un mélange homogène où les particules sont uniformément réparties", answer: "vrai" },
      { question: "Le sel est soluble dans l'eau car il se dissout complètement pour former une solution", answer: "vrai" },
      { question: "Le sable est insoluble dans l'eau car il ne se dissout pas et reste visible dans le mélange", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces mélanges, lesquels sont des solutions: eau + sel, eau + sable, eau + sucre?',
        answer: 'Eau + sel et eau + sucre',
        wrongAnswers: ['Eau + sable seulement', 'Tous', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de mélange est l\'eau salée?',
        answer: 'Une solution',
        wrongAnswers: ['Un mélange hétérogène', 'Un composé', 'Un élément']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de mélange est l\'eau + sable?',
        answer: 'Un mélange hétérogène',
        wrongAnswers: ['Une solution', 'Un composé', 'Un élément']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle substance est soluble dans l\'eau?',
        answer: 'Le sel',
        wrongAnswers: ['Le sable', 'L\'huile', 'Le fer']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle substance est insoluble dans l\'eau?',
        answer: 'Le sable',
        wrongAnswers: ['Le sel', 'Le sucre', 'Le sel et le sucre']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un mélange est une combinaison de deux ou plusieurs substances',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les mélanges sont toujours identiques et homogènes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une solution est un mélange homogène',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le sel est soluble dans l\'eau',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Une solution est un mélange:',
        answer: 'homogène',
        wrongAnswers: ['hétérogène', 'pur', 'complexe']
      },
      {
        type: 'multiple_choice',
        question: 'Le sel est _____ dans l\'eau',
        answer: 'soluble',
        wrongAnswers: ['insoluble', 'miscible', 'immiscible']
      },
      {
        type: 'multiple_choice',
        question: 'Le sable est _____ dans l\'eau',
        answer: 'insoluble',
        wrongAnswers: ['soluble', 'miscible', 'dissous']
      },
      // Drag and Drop - Ordering (by solubility)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces substances par solubilité: Sable, Sel, Sucre',
        answer: ['Sable', 'Sel', 'Sucre'], // Insoluble, soluble, soluble
        wordBank: ['Sable', 'Sel', 'Sucre'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel type de mélange est l\'eau salée? Glisse la réponse:',
        answer: 'Une solution',
        wordBank: ['Un mélange hétérogène', 'Un composé', 'Une solution', 'Un élément'],
        mode: 'select'
      },
      // Drag and Drop - Selection (soluble substance)
      {
        type: 'drag_and_drop',
        question: 'Quelle substance est soluble dans l\'eau? Glisse la réponse:',
        answer: 'Le sel',
        wordBank: ['Le sable', 'L\'huile', 'Le fer', 'Le sel'],
        mode: 'select'
      },
      // Drag and Drop - Selection (insoluble substance)
      {
        type: 'drag_and_drop',
        question: 'Quelle substance est insoluble dans l\'eau? Glisse la réponse:',
        answer: 'Le sable',
        wordBank: ['Le sel', 'Le sucre', 'Le sable', 'Le sel et le sucre'],
        mode: 'select'
      }
    ]
  },

  'ch1-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut séparer un mélange par filtration car cette méthode permet de retenir les particules solides", answer: "vrai" },
      { question: "Toutes les méthodes de séparation fonctionnent toujours de la même manière pour tous les mélanges", answer: "faux" },
      { question: "On peut séparer le sel de l'eau par évaporation car l'eau s'évapore en laissant le sel", answer: "vrai" },
      { question: "La décantation permet de séparer les liquides de densités différentes en laissant reposer le mélange", answer: "vrai" },
      { question: "Pour séparer un mélange complexe, on peut utiliser plusieurs méthodes de séparation successivement", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Tu as un mélange de sable, sel et eau. Quelle méthode utilises-tu d\'abord pour séparer le sable?',
        answer: 'Filtration',
        wrongAnswers: ['Évaporation', 'Décantation', 'Distillation']
      },
      {
        type: 'multiple_choice',
        question: 'Tu as un mélange de sable, sel et eau. Quelle méthode utilises-tu ensuite pour séparer le sel de l\'eau?',
        answer: 'Évaporation',
        wrongAnswers: ['Filtration', 'Décantation', 'Distillation']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle méthode permet de séparer les solides des liquides?',
        answer: 'Filtration',
        wrongAnswers: ['Évaporation', 'Décantation', 'Distillation']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle méthode permet de séparer le sel de l\'eau?',
        answer: 'Évaporation',
        wrongAnswers: ['Filtration', 'Décantation', 'Distillation']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle méthode permet de séparer les liquides de densités différentes?',
        answer: 'Décantation',
        wrongAnswers: ['Filtration', 'Évaporation', 'Distillation']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut séparer un mélange par filtration',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les méthodes de séparation fonctionnent toujours de la même manière pour tous les mélanges',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La filtration sépare les solides des liquides',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut séparer le sel de l\'eau par évaporation',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'On peut séparer le sable de l\'eau par:',
        answer: 'filtration',
        wrongAnswers: ['évaporation', 'décantation', 'distillation']
      },
      {
        type: 'multiple_choice',
        question: 'On peut séparer le sel de l\'eau par:',
        answer: 'évaporation',
        wrongAnswers: ['filtration', 'décantation', 'distillation']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ permet de séparer les liquides',
        answer: 'décantation',
        wrongAnswers: ['filtration', 'évaporation', 'distillation']
      },
      // Drag and Drop - Ordering (separation steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez les étapes de séparation: Évaporation, Filtration',
        answer: ['Filtration', 'Évaporation'], // Step 1, Step 2
        wordBank: ['Filtration', 'Évaporation'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle méthode permet de séparer les solides des liquides? Glisse la réponse:',
        answer: 'Filtration',
        wordBank: ['Évaporation', 'Décantation', 'Filtration', 'Distillation'],
        mode: 'select'
      },
      // Drag and Drop - Selection (evaporation)
      {
        type: 'drag_and_drop',
        question: 'Quelle méthode permet de séparer le sel de l\'eau? Glisse la réponse:',
        answer: 'Évaporation',
        wordBank: ['Filtration', 'Décantation', 'Distillation', 'Évaporation'],
        mode: 'select'
      },
      // Drag and Drop - Selection (separation problem)
      {
        type: 'drag_and_drop',
        question: 'Tu as un mélange de sable, sel et eau. Quelle méthode utilises-tu d\'abord? Glisse la réponse:',
        answer: 'Filtration',
        wordBank: ['Évaporation', 'Décantation', 'Filtration', 'Distillation'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 2: L'ÉNERGIE ET SES SOURCES
  'ch2-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'énergie est la capacité à produire un travail ou à causer un changement", answer: "vrai" },
      { question: "Il n'existe qu'une seule forme d'énergie dans la nature", answer: "faux" },
      { question: "Il existe plusieurs formes d'énergie comme mécanique, thermique, électrique et lumineuse", answer: "vrai" },
      { question: "L'énergie mécanique est l'énergie du mouvement et peut être cinétique ou potentielle", answer: "vrai" },
      { question: "L'énergie thermique est l'énergie de la chaleur et provient de l'agitation des particules", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle forme d\'énergie produit le vent?',
        answer: 'Énergie mécanique',
        wrongAnswers: ['Énergie thermique', 'Énergie électrique', 'Énergie lumineuse']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle forme d\'énergie produit le soleil?',
        answer: 'Énergie thermique et lumineuse',
        wrongAnswers: ['Énergie mécanique seulement', 'Énergie électrique seulement', 'Énergie mécanique et électrique']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle forme d\'énergie produit une batterie?',
        answer: 'Énergie électrique',
        wrongAnswers: ['Énergie mécanique', 'Énergie thermique', 'Énergie lumineuse']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'énergie du mouvement?',
        answer: 'Énergie mécanique',
        wrongAnswers: ['Énergie thermique', 'Énergie électrique', 'Énergie lumineuse']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'énergie de la chaleur?',
        answer: 'Énergie thermique',
        wrongAnswers: ['Énergie mécanique', 'Énergie électrique', 'Énergie lumineuse']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'énergie est la capacité à produire un travail',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Il n\'existe qu\'une seule forme d\'énergie dans la nature',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le vent produit de l\'énergie mécanique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'énergie mécanique est l\'énergie du mouvement',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'énergie du mouvement s\'appelle énergie:',
        answer: 'mécanique',
        wrongAnswers: ['thermique', 'chimique', 'lumineuse']
      },
      {
        type: 'multiple_choice',
        question: 'L\'énergie de la chaleur s\'appelle énergie:',
        answer: 'thermique',
        wrongAnswers: ['mécanique', 'chimique', 'lumineuse']
      },
      {
        type: 'multiple_choice',
        question: 'Il existe plusieurs _____ d\'énergie',
        answer: 'formes',
        wrongAnswers: ['sources', 'types', 'quantités']
      },
      // Drag and Drop - Ordering (energy types)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces formes d\'énergie: Électrique, Mécanique, Thermique',
        answer: ['Mécanique', 'Thermique', 'Électrique'], // Logical ordering
        wordBank: ['Mécanique', 'Thermique', 'Électrique'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle forme d\'énergie produit le vent? Glisse la réponse:',
        answer: 'Énergie mécanique',
        wordBank: ['Énergie thermique', 'Énergie électrique', 'Énergie mécanique', 'Énergie lumineuse'],
        mode: 'select'
      },
      // Drag and Drop - Selection (sun energy)
      {
        type: 'drag_and_drop',
        question: 'Quelle forme d\'énergie produit le soleil? Glisse la réponse:',
        answer: 'Énergie thermique et lumineuse',
        wordBank: ['Énergie mécanique seulement', 'Énergie électrique seulement', 'Énergie thermique et lumineuse', 'Énergie mécanique et électrique'],
        mode: 'select'
      },
      // Drag and Drop - Selection (battery energy)
      {
        type: 'drag_and_drop',
        question: 'Quelle forme d\'énergie produit une batterie? Glisse la réponse:',
        answer: 'Énergie électrique',
        wordBank: ['Énergie mécanique', 'Énergie thermique', 'Énergie lumineuse', 'Énergie électrique'],
        mode: 'select'
      }
    ]
  },

  'ch2-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les énergies renouvelables se renouvellent naturellement et ne s'épuisent pas", answer: "vrai" },
      { question: "Toutes les sources d'énergie sont toujours renouvelables", answer: "faux" },
      { question: "Le soleil est une source d'énergie renouvelable car il brille continuellement", answer: "vrai" },
      { question: "Le vent est une source d'énergie renouvelable car il se renouvelle naturellement", answer: "vrai" },
      { question: "L'eau est une source d'énergie renouvelable car elle se renouvelle par le cycle de l'eau", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces sources, lesquelles sont renouvelables: soleil, charbon, vent, pétrole, eau?',
        answer: 'Soleil, vent et eau',
        wrongAnswers: ['Charbon et pétrole', 'Toutes', 'Aucune']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces sources, lesquelles sont non renouvelables: soleil, charbon, vent, pétrole, eau?',
        answer: 'Charbon et pétrole',
        wrongAnswers: ['Soleil, vent et eau', 'Toutes', 'Aucune']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le soleil est-il une énergie renouvelable?',
        answer: 'Car il brille continuellement',
        wrongAnswers: ['Car il s\'épuise', 'Car il pollue', 'Car il est rare']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle source d\'énergie utilisent les panneaux solaires?',
        answer: 'Le soleil',
        wrongAnswers: ['Le vent', 'Le charbon', 'Le pétrole']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle source d\'énergie utilisent les éoliennes?',
        answer: 'Le vent',
        wrongAnswers: ['Le soleil', 'Le charbon', 'Le pétrole']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les énergies renouvelables se renouvellent naturellement',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les sources d\'énergie sont toujours renouvelables',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les panneaux solaires utilisent une énergie renouvelable',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le vent est une source d\'énergie renouvelable',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le soleil est une source d\'énergie:',
        answer: 'renouvelable',
        wrongAnswers: ['fossile', 'nucléaire', 'chimique']
      },
      {
        type: 'multiple_choice',
        question: 'Le vent est une source d\'énergie:',
        answer: 'renouvelable',
        wrongAnswers: ['fossile', 'nucléaire', 'chimique']
      },
      {
        type: 'multiple_choice',
        question: 'L\'eau est une source d\'énergie:',
        answer: 'renouvelable',
        wrongAnswers: ['fossile', 'nucléaire', 'chimique']
      },
      // Drag and Drop - Ordering (by renewability)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces sources: Non renouvelable, Renouvelable',
        answer: ['Non renouvelable', 'Renouvelable'], // Logical ordering
        wordBank: ['Non renouvelable', 'Renouvelable'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces sources, lesquelles sont renouvelables? Glisse la réponse:',
        answer: 'Soleil, vent et eau',
        wordBank: ['Charbon et pétrole', 'Toutes', 'Soleil, vent et eau', 'Aucune'],
        mode: 'select'
      },
      // Drag and Drop - Selection (solar panels)
      {
        type: 'drag_and_drop',
        question: 'Quelle source d\'énergie utilisent les panneaux solaires? Glisse la réponse:',
        answer: 'Le soleil',
        wordBank: ['Le vent', 'Le charbon', 'Le pétrole', 'Le soleil'],
        mode: 'select'
      },
      // Drag and Drop - Selection (wind turbines)
      {
        type: 'drag_and_drop',
        question: 'Quelle source d\'énergie utilisent les éoliennes? Glisse la réponse:',
        answer: 'Le vent',
        wordBank: ['Le soleil', 'Le charbon', 'Le pétrole', 'Le vent'],
        mode: 'select'
      }
    ]
  },

  'ch2-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les énergies non renouvelables s'épuisent car elles ne se renouvellent pas assez rapidement", answer: "vrai" },
      { question: "Toutes les énergies fossiles sont toujours renouvelables", answer: "faux" },
      { question: "Le charbon est une énergie fossile formée à partir de végétaux anciens", answer: "vrai" },
      { question: "Le pétrole est une énergie fossile formée à partir d'organismes marins anciens", answer: "vrai" },
      { question: "Les énergies fossiles polluent l'environnement lors de leur combustion", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces sources, lesquelles sont non renouvelables: charbon, soleil, pétrole, vent?',
        answer: 'Charbon et pétrole',
        wrongAnswers: ['Soleil et vent', 'Toutes', 'Aucune']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les énergies non renouvelables s\'épuisent-elles?',
        answer: 'Car elles ne se renouvellent pas assez rapidement',
        wrongAnswers: ['Car elles se renouvellent trop vite', 'Car elles ne polluent pas', 'Car elles sont gratuites']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle énergie fossile est formée à partir de végétaux anciens?',
        answer: 'Le charbon',
        wrongAnswers: ['Le pétrole', 'Le gaz naturel', 'Le soleil']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle énergie fossile est formée à partir d\'organismes marins anciens?',
        answer: 'Le pétrole',
        wrongAnswers: ['Le charbon', 'Le gaz naturel', 'Le vent']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les énergies fossiles polluent-elles?',
        answer: 'Lors de leur combustion, elles libèrent des gaz polluants',
        wrongAnswers: ['Car elles sont renouvelables', 'Car elles sont gratuites', 'Car elles sont propres']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les énergies non renouvelables s\'épuisent',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les énergies fossiles sont toujours renouvelables',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le charbon s\'épuise avec le temps',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les énergies fossiles polluent',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le charbon est une énergie:',
        answer: 'fossile',
        wrongAnswers: ['renouvelable', 'nucléaire', 'solaire']
      },
      {
        type: 'multiple_choice',
        question: 'Le pétrole est une énergie:',
        answer: 'fossile',
        wrongAnswers: ['renouvelable', 'nucléaire', 'solaire']
      },
      {
        type: 'multiple_choice',
        question: 'Les énergies non renouvelables s\'_____',
        answer: 'épuisent',
        wrongAnswers: ['renouvellent', 'multiplient', 'augmentent']
      },
      // Drag and Drop - Ordering (by depletion rate)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces énergies: Renouvelable, Non renouvelable',
        answer: ['Non renouvelable', 'Renouvelable'], // Logical ordering
        wordBank: ['Non renouvelable', 'Renouvelable'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces sources, lesquelles sont non renouvelables? Glisse la réponse:',
        answer: 'Charbon et pétrole',
        wordBank: ['Soleil et vent', 'Toutes', 'Charbon et pétrole', 'Aucune'],
        mode: 'select'
      },
      // Drag and Drop - Selection (coal formation)
      {
        type: 'drag_and_drop',
        question: 'Quelle énergie fossile est formée à partir de végétaux anciens? Glisse la réponse:',
        answer: 'Le charbon',
        wordBank: ['Le pétrole', 'Le gaz naturel', 'Le soleil', 'Le charbon'],
        mode: 'select'
      },
      // Drag and Drop - Selection (pollution)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi les énergies fossiles polluent-elles? Glisse la réponse:',
        answer: 'Lors de leur combustion, elles libèrent des gaz polluants',
        wordBank: ['Car elles sont renouvelables', 'Car elles sont gratuites', 'Lors de leur combustion, elles libèrent des gaz polluants', 'Car elles sont propres'],
        mode: 'select'
      }
    ]
  },

  'ch2-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Économiser l'énergie réduit les coûts car on consomme moins d'électricité ou de carburant", answer: "vrai" },
      { question: "Toutes les méthodes d'économie d'énergie coûtent toujours plus cher", answer: "faux" },
      { question: "Éteindre les lumières économise l'énergie car cela réduit la consommation d'électricité", answer: "vrai" },
      { question: "L'efficacité énergétique permet d'obtenir le même résultat avec moins d'énergie en utilisant des appareils plus performants", answer: "vrai" },
      { question: "Fermer les robinets et utiliser l'énergie solaire sont des façons d'économiser l'énergie", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pourquoi économiser l\'énergie réduit-il les coûts?',
        answer: 'Car on consomme moins d\'électricité ou de carburant',
        wrongAnswers: ['Car on consomme plus', 'Car l\'énergie devient gratuite', 'Car on utilise plus d\'appareils']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces méthodes, laquelle économise l\'énergie: éteindre les lumières, laisser les lumières allumées, utiliser plus d\'appareils?',
        answer: 'Éteindre les lumières',
        wrongAnswers: ['Laisser les lumières allumées', 'Utiliser plus d\'appareils', 'Aucune méthode']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est une façon d\'économiser l\'énergie à la maison?',
        answer: 'Éteindre les lumières',
        wrongAnswers: ['Laisser tous les appareils allumés', 'Utiliser plus d\'eau', 'Laisser les fenêtres ouvertes en hiver']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type d\'ampoule est plus économe?',
        answer: 'Les ampoules LED',
        wrongAnswers: ['Les ampoules classiques', 'Les ampoules halogènes', 'Toutes les ampoules']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'efficacité énergétique?',
        answer: 'Obtenir le même résultat avec moins d\'énergie',
        wrongAnswers: ['Utiliser plus d\'énergie', 'Obtenir moins de résultats', 'Ne pas utiliser d\'énergie']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Économiser l\'énergie réduit les coûts',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les méthodes d\'économie d\'énergie coûtent toujours plus cher',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les ampoules LED sont plus économes que les ampoules classiques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'efficacité énergétique permet d\'obtenir le même résultat avec moins d\'énergie',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Éteindre les lumières _____ l\'énergie',
        answer: 'économise',
        wrongAnswers: ['gaspille', 'consomme', 'détruit']
      },
      {
        type: 'multiple_choice',
        question: 'L\'efficacité énergétique permet d\'obtenir le même résultat avec _____ d\'énergie',
        answer: 'moins',
        wrongAnswers: ['plus', 'autant', 'beaucoup']
      },
      {
        type: 'multiple_choice',
        question: 'Les ampoules _____ sont plus économes',
        answer: 'LED',
        wrongAnswers: ['incandescentes', 'halogènes', 'fluorescentes']
      },
      // Drag and Drop - Ordering (energy saving methods)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces méthodes: Utiliser l\'énergie solaire, Éteindre les lumières, Fermer les robinets',
        answer: ['Éteindre les lumières', 'Fermer les robinets', 'Utiliser l\'énergie solaire'], // Logical ordering
        wordBank: ['Éteindre les lumières', 'Fermer les robinets', 'Utiliser l\'énergie solaire'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est une façon d\'économiser l\'énergie à la maison? Glisse la réponse:',
        answer: 'Éteindre les lumières',
        wordBank: ['Laisser tous les appareils allumés', 'Utiliser plus d\'eau', 'Éteindre les lumières', 'Laisser les fenêtres ouvertes en hiver'],
        mode: 'select'
      },
      // Drag and Drop - Selection (LED bulbs)
      {
        type: 'drag_and_drop',
        question: 'Quel type d\'ampoule est plus économe? Glisse la réponse:',
        answer: 'Les ampoules LED',
        wordBank: ['Les ampoules classiques', 'Les ampoules halogènes', 'Les ampoules LED', 'Toutes les ampoules'],
        mode: 'select'
      },
      // Drag and Drop - Selection (efficiency)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce que l\'efficacité énergétique? Glisse la réponse:',
        answer: 'Obtenir le même résultat avec moins d\'énergie',
        wordBank: ['Utiliser plus d\'énergie', 'Obtenir moins de résultats', 'Obtenir le même résultat avec moins d\'énergie', 'Ne pas utiliser d\'énergie'],
        mode: 'select'
      }
    ]
  },

  'ch2-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les énergies renouvelables sont importantes pour l'avenir car elles sont inépuisables et moins polluantes", answer: "vrai" },
      { question: "Toutes les sources d'énergie doivent toujours être utilisées seules sans combinaison", answer: "faux" },
      { question: "On peut combiner plusieurs sources d'énergie pour répondre aux besoins énergétiques", answer: "vrai" },
      { question: "Les énergies renouvelables sont inépuisables et propres contrairement aux énergies fossiles", answer: "vrai" },
      { question: "Pour un avenir durable, il est important de développer les énergies renouvelables", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Quels sont les avantages des énergies renouvelables?',
        answer: 'Inépuisables et propres',
        wrongAnswers: ['Polluantes et s\'épuisent', 'Coûteuses seulement', 'Difficiles à utiliser']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les inconvénients des énergies non renouvelables?',
        answer: 'Polluantes et s\'épuisent',
        wrongAnswers: ['Inépuisables et propres', 'Gratuites', 'Faciles à utiliser']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les énergies renouvelables sont-elles importantes pour l\'avenir?',
        answer: 'Car elles sont inépuisables et moins polluantes',
        wrongAnswers: ['Car elles s\'épuisent', 'Car elles polluent beaucoup', 'Car elles sont difficiles à utiliser']
      },
      {
        type: 'multiple_choice',
        question: 'Peut-on combiner plusieurs sources d\'énergie?',
        answer: 'Oui, pour répondre aux besoins énergétiques',
        wrongAnswers: ['Non, jamais', 'Seulement les énergies fossiles', 'Seulement les énergies renouvelables']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la meilleure solution pour l\'avenir énergétique?',
        answer: 'Développer les énergies renouvelables',
        wrongAnswers: ['Utiliser seulement les énergies fossiles', 'Ne pas utiliser d\'énergie', 'Utiliser plus d\'énergies polluantes']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les énergies renouvelables sont importantes pour l\'avenir',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les sources d\'énergie doivent toujours être utilisées seules sans combinaison',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut combiner plusieurs sources d\'énergie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les énergies renouvelables sont inépuisables et propres',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Les énergies renouvelables sont _____ et _____',
        answer: 'inépuisables, propres',
        wrongAnswers: ['épuisables, polluantes', 'limitées, sales', 'rares, dangereuses']
      },
      {
        type: 'multiple_choice',
        question: 'Les énergies non renouvelables sont _____ et s\'_____',
        answer: 'polluantes, épuisent',
        wrongAnswers: ['propres, renouvellent', 'sûres, multiplient', 'bonnes, augmentent']
      },
      {
        type: 'multiple_choice',
        question: 'On peut _____ plusieurs sources d\'énergie',
        answer: 'combiner',
        wrongAnswers: ['séparer', 'diviser', 'multiplier']
      },
      // Drag and Drop - Ordering (by importance for future)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces énergies: Non renouvelables, Renouvelables',
        answer: ['Non renouvelables', 'Renouvelables'], // Logical ordering for future
        wordBank: ['Non renouvelables', 'Renouvelables'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quels sont les avantages des énergies renouvelables? Glisse la réponse:',
        answer: 'Inépuisables et propres',
        wordBank: ['Polluantes et s\'épuisent', 'Coûteuses seulement', 'Inépuisables et propres', 'Difficiles à utiliser'],
        mode: 'select'
      },
      // Drag and Drop - Selection (disadvantages)
      {
        type: 'drag_and_drop',
        question: 'Quels sont les inconvénients des énergies non renouvelables? Glisse la réponse:',
        answer: 'Polluantes et s\'épuisent',
        wordBank: ['Inépuisables et propres', 'Gratuites', 'Polluantes et s\'épuisent', 'Faciles à utiliser'],
        mode: 'select'
      },
      // Drag and Drop - Selection (future importance)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi les énergies renouvelables sont-elles importantes pour l\'avenir? Glisse la réponse:',
        answer: 'Car elles sont inépuisables et moins polluantes',
        wordBank: ['Car elles s\'épuisent', 'Car elles polluent beaucoup', 'Car elles sont inépuisables et moins polluantes', 'Car elles sont difficiles à utiliser'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 3: LA LUMIÈRE ET L'OMBRE
  'ch3-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La lumière est une forme d'énergie qui permet de voir les objets", answer: "vrai" },
      { question: "Toutes les sources de lumière produisent toujours leur propre lumière", answer: "faux" },
      { question: "Le soleil est une source naturelle de lumière car il produit sa propre lumière", answer: "vrai" },
      { question: "La lumière se propage en ligne droite dans un milieu homogène selon les lois de l'optique", answer: "vrai" },
      { question: "La vitesse de la lumière est très rapide, environ 300 000 km/s dans le vide", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces sources, lesquelles sont des sources primaires de lumière: soleil, ampoule, lune, bougie?',
        answer: 'Soleil, ampoule et bougie',
        wrongAnswers: ['Lune seulement', 'Toutes', 'Aucune']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces sources, laquelle est une source secondaire de lumière?',
        answer: 'La lune',
        wrongAnswers: ['Le soleil', 'L\'ampoule', 'La bougie']
      },
      {
        type: 'multiple_choice',
        question: 'Comment se propage la lumière?',
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
        question: 'Pourquoi la lune brille-t-elle?',
        answer: 'Car elle réfléchit la lumière du soleil',
        wrongAnswers: ['Car elle produit sa propre lumière', 'Car elle émet de la chaleur', 'Car elle est chaude']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La lumière est une forme d\'énergie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les sources de lumière produisent toujours leur propre lumière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La lune produit sa propre lumière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La lumière se propage en ligne droite',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le soleil est une source _____ de lumière',
        answer: 'naturelle',
        wrongAnswers: ['artificielle', 'secondaire', 'tertiaire']
      },
      {
        type: 'multiple_choice',
        question: 'La lumière se propage en ligne:',
        answer: 'droite',
        wrongAnswers: ['courbe', 'zigzag', 'spirale']
      },
      {
        type: 'multiple_choice',
        question: 'La lune est une source _____ de lumière',
        answer: 'secondaire',
        wrongAnswers: ['naturelle', 'artificielle', 'principale']
      },
      // Drag and Drop - Ordering (by light production)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces sources: Secondaire, Primaire',
        answer: ['Primaire', 'Secondaire'], // Logical ordering
        wordBank: ['Primaire', 'Secondaire'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces sources, lesquelles sont des sources primaires? Glisse la réponse:',
        answer: 'Soleil, ampoule et bougie',
        wordBank: ['Lune seulement', 'Toutes', 'Soleil, ampoule et bougie', 'Aucune'],
        mode: 'select'
      },
      // Drag and Drop - Selection (moon)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi la lune brille-t-elle? Glisse la réponse:',
        answer: 'Car elle réfléchit la lumière du soleil',
        wordBank: ['Car elle produit sa propre lumière', 'Car elle émet de la chaleur', 'Car elle réfléchit la lumière du soleil', 'Car elle est chaude'],
        mode: 'select'
      },
      // Drag and Drop - Selection (propagation)
      {
        type: 'drag_and_drop',
        question: 'Comment se propage la lumière? Glisse la réponse:',
        answer: 'En ligne droite',
        wordBank: ['En cercle', 'En zigzag', 'En spirale', 'En ligne droite'],
        mode: 'select'
      }
    ]
  },

  'ch3-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une ombre se forme quand un objet bloque la lumière car la lumière ne peut pas traverser l'objet opaque", answer: "vrai" },
      { question: "Toutes les ombres ont toujours exactement la même taille", answer: "faux" },
      { question: "L'ombre a généralement la forme de l'objet car elle représente la silhouette de l'objet qui bloque la lumière", answer: "vrai" },
      { question: "La taille de l'ombre dépend de la distance entre la source de lumière et l'objet, ainsi qu'entre l'objet et l'écran", answer: "vrai" },
      { question: "Les ombres sont plus longues quand le soleil est bas sur l'horizon, comme le matin et le soir", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pourquoi une ombre se forme-t-elle?',
        answer: 'Car un objet bloque la lumière',
        wrongAnswers: ['Car la lumière traverse l\'objet', 'Car l\'objet émet de la lumière', 'Car l\'objet est transparent']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle forme a généralement une ombre?',
        answer: 'La forme de l\'objet',
        wrongAnswers: ['Toujours ronde', 'Toujours carrée', 'Pas de forme définie']
      },
      {
        type: 'multiple_choice',
        question: 'Quand les ombres sont-elles plus longues?',
        answer: 'Le matin et le soir',
        wrongAnswers: ['À midi', 'La nuit', 'Toujours de la même longueur']
      },
      {
        type: 'multiple_choice',
        question: 'Explique pourquoi tu vois ton ombre au soleil',
        answer: 'Ton corps bloque la lumière du soleil, créant une zone sombre derrière toi',
        wrongAnswers: ['Car tu émet de la lumière', 'Car le soleil traverse ton corps', 'Car tu es transparent']
      },
      {
        type: 'multiple_choice',
        question: 'De quoi dépend la taille de l\'ombre?',
        answer: 'De la distance entre la source de lumière et l\'objet',
        wrongAnswers: ['De la couleur de l\'objet', 'De la température', 'De la forme seulement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une ombre se forme quand un objet bloque la lumière',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les ombres ont toujours exactement la même taille',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'ombre a généralement la forme de l\'objet',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La taille de l\'ombre dépend de la distance',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Une ombre se forme quand un objet _____ la lumière',
        answer: 'bloque',
        wrongAnswers: ['laisse passer', 'réfléchit', 'absorbe']
      },
      {
        type: 'multiple_choice',
        question: 'L\'ombre a généralement la _____ de l\'objet',
        answer: 'forme',
        wrongAnswers: ['couleur', 'taille', 'texture']
      },
      {
        type: 'multiple_choice',
        question: 'Les ombres sont plus longues le _____ et le _____',
        answer: 'matin, soir',
        wrongAnswers: ['midi, après-midi', 'nuit, jour', 'soir, nuit']
      },
      // Drag and Drop - Ordering (shadow lengths)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces moments par longueur d\'ombre: Midi, Matin, Soir',
        answer: ['Midi', 'Matin', 'Soir'], // Shortest, longer, longer (both morning and evening are long)
        wordBank: ['Midi', 'Matin', 'Soir'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi une ombre se forme-t-elle? Glisse la réponse:',
        answer: 'Car un objet bloque la lumière',
        wordBank: ['Car la lumière traverse l\'objet', 'Car l\'objet émet de la lumière', 'Car un objet bloque la lumière', 'Car l\'objet est transparent'],
        mode: 'select'
      },
      // Drag and Drop - Selection (shadow formation)
      {
        type: 'drag_and_drop',
        question: 'Explique pourquoi tu vois ton ombre au soleil. Glisse la réponse:',
        answer: 'Ton corps bloque la lumière du soleil, créant une zone sombre derrière toi',
        wordBank: ['Car tu émet de la lumière', 'Car le soleil traverse ton corps', 'Ton corps bloque la lumière du soleil, créant une zone sombre derrière toi', 'Car tu es transparent'],
        mode: 'select'
      },
      // Drag and Drop - Selection (shadow size)
      {
        type: 'drag_and_drop',
        question: 'De quoi dépend la taille de l\'ombre? Glisse la réponse:',
        answer: 'De la distance entre la source de lumière et l\'objet',
        wordBank: ['De la couleur de l\'objet', 'De la température', 'De la distance entre la source de lumière et l\'objet', 'De la forme seulement'],
        mode: 'select'
      }
    ]
  },

  'ch3-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La réflexion est le rebond de la lumière sur une surface selon les lois de l'optique", answer: "vrai" },
      { question: "Toutes les surfaces réfléchissent toujours la lumière de la même manière", answer: "faux" },
      { question: "Un miroir réfléchit bien la lumière car il a une surface lisse et polie", answer: "vrai" },
      { question: "L'angle d'incidence égale l'angle de réflexion selon la loi de la réflexion", answer: "vrai" },
      { question: "Les surfaces lisses comme un miroir ou l'eau calme produisent une réflexion spéculaire, tandis que les surfaces rugueuses produisent une réflexion diffuse", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces surfaces, lesquelles produisent une réflexion spéculaire: miroir, papier, eau calme, sable?',
        answer: 'Miroir et eau calme',
        wrongAnswers: ['Papier et sable', 'Toutes', 'Aucune']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces surfaces, lesquelles produisent une réflexion diffuse: miroir, papier, eau calme, sable?',
        answer: 'Papier et sable',
        wrongAnswers: ['Miroir et eau calme', 'Toutes', 'Aucune']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi voit-on son reflet dans un miroir?',
        answer: 'Grâce à la réflexion de la lumière',
        wrongAnswers: ['Car le miroir émet de la lumière', 'Car le miroir absorbe la lumière', 'Car le miroir est transparent']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle loi décrit la réflexion de la lumière?',
        answer: 'L\'angle d\'incidence égale l\'angle de réflexion',
        wrongAnswers: ['L\'angle d\'incidence est double de l\'angle de réflexion', 'L\'angle d\'incidence est la moitié de l\'angle de réflexion', 'Il n\'y a pas de loi']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle surface réfléchit le mieux la lumière?',
        answer: 'Un miroir',
        wrongAnswers: ['Du papier', 'Du sable', 'Du bois']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La réflexion est le rebond de la lumière sur une surface',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les surfaces réfléchissent toujours la lumière de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On voit son reflet dans un miroir grâce à la réflexion',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'angle d\'incidence égale l\'angle de réflexion',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La _____ est le rebond de la lumière sur une surface',
        answer: 'réflexion',
        wrongAnswers: ['réfraction', 'absorption', 'dispersion']
      },
      {
        type: 'multiple_choice',
        question: 'Un _____ réfléchit bien la lumière',
        answer: 'miroir',
        wrongAnswers: ['prisme', 'lentille', 'filtre']
      },
      {
        type: 'multiple_choice',
        question: 'L\'angle d\'incidence égale l\'angle de:',
        answer: 'réflexion',
        wrongAnswers: ['réfraction', 'déviation', 'inclinaison']
      },
      // Drag and Drop - Ordering (by reflectivity)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces surfaces par qualité de réflexion: Sable, Miroir, Papier',
        answer: ['Sable', 'Papier', 'Miroir'], // Least reflective to most reflective
        wordBank: ['Sable', 'Papier', 'Miroir'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces surfaces, lesquelles produisent une réflexion spéculaire? Glisse la réponse:',
        answer: 'Miroir et eau calme',
        wordBank: ['Papier et sable', 'Toutes', 'Miroir et eau calme', 'Aucune'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reflection explanation)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi voit-on son reflet dans un miroir? Glisse la réponse:',
        answer: 'Grâce à la réflexion de la lumière',
        wordBank: ['Car le miroir émet de la lumière', 'Car le miroir absorbe la lumière', 'Grâce à la réflexion de la lumière', 'Car le miroir est transparent'],
        mode: 'select'
      },
      // Drag and Drop - Selection (law of reflection)
      {
        type: 'drag_and_drop',
        question: 'Quelle loi décrit la réflexion de la lumière? Glisse la réponse:',
        answer: 'L\'angle d\'incidence égale l\'angle de réflexion',
        wordBank: ['L\'angle d\'incidence est double de l\'angle de réflexion', 'L\'angle d\'incidence est la moitié de l\'angle de réflexion', 'L\'angle d\'incidence égale l\'angle de réflexion', 'Il n\'y a pas de loi'],
        mode: 'select'
      }
    ]
  },

  'ch3-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La lumière blanche contient toutes les couleurs du spectre visible", answer: "vrai" },
      { question: "Toutes les lumières contiennent toujours exactement les mêmes couleurs", answer: "faux" },
      { question: "Le spectre contient 7 couleurs principales: rouge, orange, jaune, vert, bleu, indigo et violet", answer: "vrai" },
      { question: "Un arc-en-ciel se forme par dispersion de la lumière blanche du soleil par les gouttelettes d'eau dans l'atmosphère", answer: "vrai" },
      { question: "Quand la lumière blanche traverse un prisme, elle se décompose en différentes couleurs", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de couleurs principales contient le spectre?',
        answer: '7 couleurs',
        wrongAnswers: ['5 couleurs', '10 couleurs', '3 couleurs']
      },
      {
        type: 'multiple_choice',
        question: 'Comment se forme un arc-en-ciel?',
        answer: 'Par dispersion de la lumière blanche par les gouttelettes d\'eau',
        wrongAnswers: ['Par émission de lumière colorée', 'Par réflexion seulement', 'Par absorption de la lumière']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la première couleur du spectre?',
        answer: 'Rouge',
        wrongAnswers: ['Violet', 'Vert', 'Bleu']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la dernière couleur du spectre?',
        answer: 'Violet',
        wrongAnswers: ['Rouge', 'Vert', 'Bleu']
      },
      {
        type: 'multiple_choice',
        question: 'Que contient la lumière blanche?',
        answer: 'Toutes les couleurs du spectre',
        wrongAnswers: ['Seulement le rouge et le bleu', 'Seulement le vert', 'Aucune couleur']
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
        question: 'Un arc-en-ciel contient toutes les couleurs du spectre',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un arc-en-ciel se forme par dispersion de la lumière',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le spectre contient combien de couleurs principales?',
        answer: '7',
        wrongAnswers: ['5', '6', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Un arc-en-ciel se forme par _____ de la lumière',
        answer: 'dispersion',
        wrongAnswers: ['réflexion', 'réfraction', 'absorption']
      },
      {
        type: 'multiple_choice',
        question: 'La lumière blanche contient toutes les _____ du spectre',
        answer: 'couleurs',
        wrongAnswers: ['fréquences', 'intensités', 'directions']
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
        question: 'Combien de couleurs principales contient le spectre? Glisse la réponse:',
        answer: '7 couleurs',
        wordBank: ['5 couleurs', '10 couleurs', '7 couleurs', '3 couleurs'],
        mode: 'select'
      },
      // Drag and Drop - Selection (rainbow formation)
      {
        type: 'drag_and_drop',
        question: 'Comment se forme un arc-en-ciel? Glisse la réponse:',
        answer: 'Par dispersion de la lumière blanche par les gouttelettes d\'eau',
        wordBank: ['Par émission de lumière colorée', 'Par réflexion seulement', 'Par dispersion de la lumière blanche par les gouttelettes d\'eau', 'Par absorption de la lumière'],
        mode: 'select'
      },
      // Drag and Drop - Selection (white light)
      {
        type: 'drag_and_drop',
        question: 'Que contient la lumière blanche? Glisse la réponse:',
        answer: 'Toutes les couleurs du spectre',
        wordBank: ['Seulement le rouge et le bleu', 'Seulement le vert', 'Toutes les couleurs du spectre', 'Aucune couleur'],
        mode: 'select'
      }
    ]
  },

  'ch3-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les ombres sont plus longues le matin et le soir car le soleil est plus bas sur l'horizon", answer: "vrai" },
      { question: "Toutes les ombres ont toujours exactement la même longueur à tout moment de la journée", answer: "faux" },
      { question: "On peut expliquer les phénomènes lumineux avec les connaissances apprises sur la propagation, la réflexion et la dispersion de la lumière", answer: "vrai" },
      { question: "À midi, les ombres sont plus courtes car le soleil est haut dans le ciel", answer: "vrai" },
      { question: "La compréhension de la lumière permet d'expliquer de nombreux phénomènes naturels comme les ombres, les reflets et les arcs-en-ciel", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Pourquoi les ombres sont-elles plus longues le matin qu\'à midi?',
        answer: 'Le soleil est plus bas sur l\'horizon, créant des ombres plus longues',
        wrongAnswers: ['Le soleil est plus haut', 'Il n\'y a pas de différence', 'La température est différente']
      },
      {
        type: 'multiple_choice',
        question: 'Quand les ombres sont-elles les plus courtes?',
        answer: 'À midi',
        wrongAnswers: ['Le matin', 'Le soir', 'La nuit']
      },
      {
        type: 'multiple_choice',
        question: 'Quand les ombres sont-elles les plus longues?',
        answer: 'Le matin et le soir',
        wrongAnswers: ['À midi', 'La nuit', 'Toujours de la même longueur']
      },
      {
        type: 'multiple_choice',
        question: 'Quels phénomènes peut-on expliquer avec les connaissances sur la lumière?',
        answer: 'Les ombres, les reflets et les arcs-en-ciel',
        wrongAnswers: ['Seulement les ombres', 'Seulement les reflets', 'Aucun phénomène']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les ombres changent-elles de longueur pendant la journée?',
        answer: 'Car la position du soleil change dans le ciel',
        wrongAnswers: ['Car la température change', 'Car la couleur change', 'Car la forme change']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les ombres sont plus longues le matin et le soir',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les ombres ont toujours exactement la même longueur à tout moment de la journée',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut expliquer les phénomènes lumineux avec les connaissances apprises',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'À midi, les ombres sont plus courtes',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Les ombres sont plus longues le _____ et le _____',
        answer: 'matin, soir',
        wrongAnswers: ['midi, après-midi', 'nuit, jour', 'soir, nuit']
      },
      {
        type: 'multiple_choice',
        question: 'Les ombres sont plus courtes à:',
        answer: 'midi',
        wrongAnswers: ['matin', 'soir', 'nuit']
      },
      {
        type: 'multiple_choice',
        question: 'On peut expliquer les phénomènes _____ avec les connaissances apprises',
        answer: 'lumineux',
        wrongAnswers: ['sonores', 'mécaniques', 'thermiques']
      },
      // Drag and Drop - Ordering (shadow lengths by time of day)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces moments par longueur d\'ombre: Midi, Matin, Soir',
        answer: ['Midi', 'Matin', 'Soir'], // Shortest, longer, longer
        wordBank: ['Midi', 'Matin', 'Soir'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi les ombres sont-elles plus longues le matin qu\'à midi? Glisse la réponse:',
        answer: 'Le soleil est plus bas sur l\'horizon, créant des ombres plus longues',
        wordBank: ['Le soleil est plus haut', 'Il n\'y a pas de différence', 'Le soleil est plus bas sur l\'horizon, créant des ombres plus longues', 'La température est différente'],
        mode: 'select'
      },
      // Drag and Drop - Selection (shortest shadows)
      {
        type: 'drag_and_drop',
        question: 'Quand les ombres sont-elles les plus courtes? Glisse la réponse:',
        answer: 'À midi',
        wordBank: ['Le matin', 'Le soir', 'La nuit', 'À midi'],
        mode: 'select'
      },
      // Drag and Drop - Selection (phenomena)
      {
        type: 'drag_and_drop',
        question: 'Quels phénomènes peut-on expliquer avec les connaissances sur la lumière? Glisse la réponse:',
        answer: 'Les ombres, les reflets et les arcs-en-ciel',
        wordBank: ['Seulement les ombres', 'Seulement les reflets', 'Les ombres, les reflets et les arcs-en-ciel', 'Aucun phénomène'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 4: LE SON ET L'AUDITION
  'ch4-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le son est une vibration qui se propage dans un milieu matériel comme l'air, l'eau ou les solides", answer: "vrai" },
      { question: "Tous les sons se propagent toujours à la même vitesse dans tous les milieux", answer: "faux" },
      { question: "Le son a besoin d'un milieu pour se propager car il nécessite des particules pour transmettre les vibrations", answer: "vrai" },
      { question: "Le son ne se propage pas dans le vide car il n'y a pas de particules pour transmettre les vibrations", answer: "vrai" },
      { question: "La vitesse du son dans l'air est d'environ 340 m/s à température ambiante", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lesquels sont des sources de son: cloche, étoile, tambour, lumière?',
        answer: 'Cloche et tambour',
        wrongAnswers: ['Étoile et lumière', 'Tous', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est approximativement la vitesse du son dans l\'air?',
        answer: '340 m/s',
        wrongAnswers: ['300 000 km/s', '100 m/s', '1000 m/s']
      },
      {
        type: 'multiple_choice',
        question: 'Le son se propage-t-il dans le vide?',
        answer: 'Non, car il n\'y a pas de particules',
        wrongAnswers: ['Oui, très rapidement', 'Oui, mais lentement', 'Parfois']
      },
      {
        type: 'multiple_choice',
        question: 'Le son se propage-t-il plus vite que la lumière?',
        answer: 'Non, la lumière est beaucoup plus rapide',
        wrongAnswers: ['Oui, le son est plus rapide', 'Ils sont égaux', 'Cela dépend']
      },
      {
        type: 'multiple_choice',
        question: 'De quoi le son a-t-il besoin pour se propager?',
        answer: 'D\'un milieu matériel',
        wrongAnswers: ['De rien', 'De lumière', 'De chaleur seulement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le son est une vibration qui se propage',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les sons se propagent toujours à la même vitesse dans tous les milieux',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le son se propage plus vite que la lumière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le son ne se propage pas dans le vide',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le son est une _____ qui se propage',
        answer: 'vibration',
        wrongAnswers: ['onde', 'particule', 'force']
      },
      {
        type: 'multiple_choice',
        question: 'La vitesse du son dans l\'air est d\'environ:',
        answer: '340 m/s',
        wrongAnswers: ['100 m/s', '500 m/s', '1000 m/s']
      },
      {
        type: 'multiple_choice',
        question: 'Le son a besoin d\'un _____ pour se propager',
        answer: 'milieu',
        wrongAnswers: ['vide', 'espace', 'rien']
      },
      // Drag and Drop - Ordering (by speed)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces vitesses du plus lent au plus rapide: 340 m/s, 300 000 km/s',
        answer: ['340 m/s', '300 000 km/s'], // Sound < Light
        wordBank: ['340 m/s', '300 000 km/s'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces éléments, lesquels sont des sources de son? Glisse la réponse:',
        answer: 'Cloche et tambour',
        wordBank: ['Étoile et lumière', 'Tous', 'Cloche et tambour', 'Aucun'],
        mode: 'select'
      },
      // Drag and Drop - Selection (sound speed)
      {
        type: 'drag_and_drop',
        question: 'Quelle est approximativement la vitesse du son dans l\'air? Glisse la réponse:',
        answer: '340 m/s',
        wordBank: ['300 000 km/s', '100 m/s', '340 m/s', '1000 m/s'],
        mode: 'select'
      },
      // Drag and Drop - Selection (propagation)
      {
        type: 'drag_and_drop',
        question: 'De quoi le son a-t-il besoin pour se propager? Glisse la réponse:',
        answer: 'D\'un milieu matériel',
        wordBank: ['De rien', 'De lumière', 'De chaleur seulement', 'D\'un milieu matériel'],
        mode: 'select'
      }
    ]
  },

  'ch4-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le volume mesure l'intensité du son et détermine si un son est fort ou faible", answer: "vrai" },
      { question: "Tous les sons ont toujours exactement le même volume et la même hauteur", answer: "faux" },
      { question: "La hauteur mesure la fréquence du son et détermine si un son est aigu ou grave", answer: "vrai" },
      { question: "Le timbre permet de reconnaître un son car il caractérise la qualité particulière de chaque source sonore", answer: "vrai" },
      { question: "Un son aigu a une fréquence élevée, tandis qu'un son grave a une fréquence basse", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Que mesure le volume d\'un son?',
        answer: 'L\'intensité du son',
        wrongAnswers: ['La fréquence du son', 'La vitesse du son', 'La couleur du son']
      },
      {
        type: 'multiple_choice',
        question: 'Que mesure la hauteur d\'un son?',
        answer: 'La fréquence du son',
        wrongAnswers: ['L\'intensité du son', 'La vitesse du son', 'La durée du son']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle caractéristique permet de reconnaître un son?',
        answer: 'Le timbre',
        wrongAnswers: ['Le volume seulement', 'La hauteur seulement', 'La vitesse']
      },
      {
        type: 'multiple_choice',
        question: 'Un son aigu a-t-il une fréquence élevée ou basse?',
        answer: 'Fréquence élevée',
        wrongAnswers: ['Fréquence basse', 'Pas de fréquence', 'Fréquence moyenne']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces sons, lequel a le volume le plus fort: cri d\'enfant, voix grave d\'homme, chuchotement?',
        answer: 'Cri d\'enfant',
        wrongAnswers: ['Voix grave d\'homme', 'Chuchotement', 'Ils sont tous égaux']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le volume mesure l\'intensité du son',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les sons ont toujours exactement le même volume et la même hauteur',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un son aigu a une fréquence élevée',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le timbre permet de reconnaître un son',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le volume mesure l\'_____ du son',
        answer: 'intensité',
        wrongAnswers: ['hauteur', 'timbre', 'vitesse']
      },
      {
        type: 'multiple_choice',
        question: 'La hauteur mesure la _____ du son',
        answer: 'fréquence',
        wrongAnswers: ['intensité', 'amplitude', 'vitesse']
      },
      {
        type: 'multiple_choice',
        question: 'Un son aigu a une fréquence:',
        answer: 'élevée',
        wrongAnswers: ['basse', 'moyenne', 'nulle']
      },
      // Drag and Drop - Ordering (by frequency)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces sons par fréquence: Grave, Moyen, Aigu',
        answer: ['Grave', 'Moyen', 'Aigu'], // Low, medium, high frequency
        wordBank: ['Grave', 'Moyen', 'Aigu'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Que mesure le volume d\'un son? Glisse la réponse:',
        answer: 'L\'intensité du son',
        wordBank: ['La fréquence du son', 'La vitesse du son', 'L\'intensité du son', 'La couleur du son'],
        mode: 'select'
      },
      // Drag and Drop - Selection (pitch)
      {
        type: 'drag_and_drop',
        question: 'Que mesure la hauteur d\'un son? Glisse la réponse:',
        answer: 'La fréquence du son',
        wordBank: ['L\'intensité du son', 'La vitesse du son', 'La durée du son', 'La fréquence du son'],
        mode: 'select'
      },
      // Drag and Drop - Selection (timbre)
      {
        type: 'drag_and_drop',
        question: 'Quelle caractéristique permet de reconnaître un son? Glisse la réponse:',
        answer: 'Le timbre',
        wordBank: ['Le volume seulement', 'La hauteur seulement', 'La vitesse', 'Le timbre'],
        mode: 'select'
      }
    ]
  },

  'ch4-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le son se propage plus vite dans l'eau que dans l'air car l'eau est plus dense", answer: "vrai" },
      { question: "Tous les milieux ont toujours exactement la même vitesse de propagation du son", answer: "faux" },
      { question: "Le son se propage plus vite dans les solides que dans les liquides car les particules sont plus proches dans les solides", answer: "vrai" },
      { question: "Un écho est le retour du son après réflexion sur une surface, permettant d'entendre le son une deuxième fois", answer: "vrai" },
      { question: "La vitesse du son augmente généralement avec la densité du milieu", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans quel milieu le son se propage-t-il le plus vite: air, eau, acier?',
        answer: 'Acier',
        wrongAnswers: ['Air', 'Eau', 'Ils sont tous égaux']
      },
      {
        type: 'multiple_choice',
        question: 'Dans quel milieu le son se propage-t-il le plus lentement: air, eau, acier?',
        answer: 'Air',
        wrongAnswers: ['Eau', 'Acier', 'Ils sont tous égaux']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un écho?',
        answer: 'Le retour du son après réflexion',
        wrongAnswers: ['Le son original', 'Un son différent', 'L\'absence de son']
      },
      {
        type: 'multiple_choice',
        question: 'Où peut-on entendre un écho?',
        answer: 'Dans une grotte ou un espace clos',
        wrongAnswers: ['Dans le vide', 'Dans l\'eau seulement', 'Jamais']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le son se propage-t-il plus vite dans les solides?',
        answer: 'Car les particules sont plus proches',
        wrongAnswers: ['Car les solides sont plus chauds', 'Car les solides sont plus légers', 'Car les solides sont plus transparents']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le son se propage plus vite dans l\'eau que dans l\'air',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les milieux ont toujours exactement la même vitesse de propagation du son',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut entendre un écho dans une grotte',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un écho est le retour du son après réflexion',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le son se propage plus vite dans les _____ que dans les liquides',
        answer: 'solides',
        wrongAnswers: ['gaz', 'vides', 'fluides']
      },
      {
        type: 'multiple_choice',
        question: 'Un écho est le retour du son après:',
        answer: 'réflexion',
        wrongAnswers: ['réfraction', 'absorption', 'dispersion']
      },
      {
        type: 'multiple_choice',
        question: 'Le son se propage le plus vite dans l\'_____',
        answer: 'acier',
        wrongAnswers: ['air', 'eau', 'vide']
      },
      // Drag and Drop - Ordering (by sound speed)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces milieux par vitesse de propagation du son: Air, Eau, Acier',
        answer: ['Air', 'Eau', 'Acier'], // Slowest to fastest
        wordBank: ['Air', 'Eau', 'Acier'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Dans quel milieu le son se propage-t-il le plus vite? Glisse la réponse:',
        answer: 'Acier',
        wordBank: ['Air', 'Eau', 'Acier', 'Ils sont tous égaux'],
        mode: 'select'
      },
      // Drag and Drop - Selection (echo)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'un écho? Glisse la réponse:',
        answer: 'Le retour du son après réflexion',
        wordBank: ['Le son original', 'Un son différent', 'L\'absence de son', 'Le retour du son après réflexion'],
        mode: 'select'
      },
      // Drag and Drop - Selection (propagation speed)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi le son se propage-t-il plus vite dans les solides? Glisse la réponse:',
        answer: 'Car les particules sont plus proches',
        wordBank: ['Car les solides sont plus chauds', 'Car les solides sont plus légers', 'Car les particules sont plus proches', 'Car les solides sont plus transparents'],
        mode: 'select'
      }
    ]
  },

  'ch4-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'oreille a trois parties principales: l'oreille externe, l'oreille moyenne et l'oreille interne", answer: "vrai" },
      { question: "Toutes les parties de l'oreille ont toujours exactement la même fonction", answer: "faux" },
      { question: "Le tympan vibre avec le son car il reçoit les vibrations sonores et les transmet à l'oreille interne", answer: "vrai" },
      { question: "Il faut protéger ses oreilles des sons trop forts car ils peuvent endommager l'ouïe de manière permanente", answer: "vrai" },
      { question: "Le processus d'audition commence par la collection du son par le pavillon et se termine par la transformation en signal nerveux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de parties principales a l\'oreille?',
        answer: '3 parties',
        wrongAnswers: ['2 parties', '4 parties', '5 parties']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle partie de l\'oreille vibre avec le son?',
        answer: 'Le tympan',
        wrongAnswers: ['Le pavillon', 'L\'oreille interne', 'Le conduit auditif']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi faut-il protéger ses oreilles des sons trop forts?',
        answer: 'Car ils peuvent endommager l\'ouïe',
        wrongAnswers: ['Car ils sont agréables', 'Car ils améliorent l\'ouïe', 'Car ils n\'ont pas d\'effet']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la première étape du processus d\'audition?',
        answer: 'Collection par le pavillon',
        wrongAnswers: ['Vibration du tympan', 'Transformation en signal nerveux', 'Amplification du son']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la dernière étape du processus d\'audition?',
        answer: 'Transformation en signal nerveux',
        wrongAnswers: ['Collection par le pavillon', 'Vibration du tympan', 'Amplification du son']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'oreille a trois parties principales',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les parties de l\'oreille ont toujours exactement la même fonction',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les sons très forts peuvent endommager l\'ouïe',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le tympan vibre avec le son',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'oreille a combien de parties principales?',
        answer: 'trois',
        wrongAnswers: ['deux', 'quatre', 'cinq']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ vibre avec le son',
        answer: 'tympan',
        wrongAnswers: ['cochlée', 'marteau', 'enclume']
      },
      {
        type: 'multiple_choice',
        question: 'Il faut protéger ses oreilles des sons trop:',
        answer: 'forts',
        wrongAnswers: ['faibles', 'aigus', 'graves']
      },
      // Drag and Drop - Ordering (hearing process steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez les étapes du processus d\'audition: Transformation en signal nerveux, Collection par le pavillon, Vibration du tympan',
        answer: ['Collection par le pavillon', 'Vibration du tympan', 'Transformation en signal nerveux'], // Step 1, 2, 3
        wordBank: ['Collection par le pavillon', 'Vibration du tympan', 'Transformation en signal nerveux'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de parties principales a l\'oreille? Glisse la réponse:',
        answer: '3 parties',
        wordBank: ['2 parties', '4 parties', '3 parties', '5 parties'],
        mode: 'select'
      },
      // Drag and Drop - Selection (eardrum)
      {
        type: 'drag_and_drop',
        question: 'Quelle partie de l\'oreille vibre avec le son? Glisse la réponse:',
        answer: 'Le tympan',
        wordBank: ['Le pavillon', 'L\'oreille interne', 'Le conduit auditif', 'Le tympan'],
        mode: 'select'
      },
      // Drag and Drop - Selection (protection)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi faut-il protéger ses oreilles des sons trop forts? Glisse la réponse:',
        answer: 'Car ils peuvent endommager l\'ouïe',
        wordBank: ['Car ils sont agréables', 'Car ils améliorent l\'ouïe', 'Car ils n\'ont pas d\'effet', 'Car ils peuvent endommager l\'ouïe'],
        mode: 'select'
      }
    ]
  },

  'ch4-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut expliquer les phénomènes sonores avec les connaissances apprises sur la propagation, les propriétés et la perception du son", answer: "vrai" },
      { question: "Tous les phénomènes sonores sont toujours identiques et s'expliquent de la même manière", answer: "faux" },
      { question: "La lumière va plus vite que le son, c'est pourquoi on voit l'éclair avant d'entendre le tonnerre", answer: "vrai" },
      { question: "La compréhension du son permet d'expliquer de nombreux phénomènes naturels comme les échos, la propagation et la perception", answer: "vrai" },
      { question: "Pour expliquer pourquoi on entend le tonnerre après l'éclair, on utilise la différence de vitesse entre la lumière et le son", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Pourquoi entend-on le tonnerre après avoir vu l\'éclair?',
        answer: 'La lumière va plus vite que le son, donc on voit l\'éclair avant d\'entendre le tonnerre',
        wrongAnswers: ['Le son va plus vite que la lumière', 'Ils arrivent en même temps', 'L\'éclair produit le son']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la vitesse de la lumière comparée à celle du son?',
        answer: 'La lumière est beaucoup plus rapide',
        wrongAnswers: ['Le son est plus rapide', 'Ils sont égaux', 'Cela dépend']
      },
      {
        type: 'multiple_choice',
        question: 'Quels phénomènes peut-on expliquer avec les connaissances sur le son?',
        answer: 'Les échos, la propagation et la perception',
        wrongAnswers: ['Seulement les échos', 'Seulement la propagation', 'Aucun phénomène']
      },
      {
        type: 'multiple_choice',
        question: 'Si on voit un éclair et qu\'on entend le tonnerre 3 secondes après, que peut-on dire?',
        answer: 'L\'orage est à environ 1 km',
        wrongAnswers: ['L\'orage est très loin', 'L\'orage est très proche', 'On ne peut pas savoir']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi utilise-t-on la différence de vitesse entre la lumière et le son?',
        answer: 'Pour expliquer pourquoi on voit l\'éclair avant d\'entendre le tonnerre',
        wrongAnswers: ['Pour expliquer la couleur', 'Pour expliquer la température', 'Pour expliquer la forme']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut expliquer les phénomènes sonores avec les connaissances apprises',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les phénomènes sonores sont toujours identiques et s\'expliquent de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La lumière va plus vite que le son',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On voit l\'éclair avant d\'entendre le tonnerre',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La _____ va plus vite que le son',
        answer: 'lumière',
        wrongAnswers: ['vibration', 'onde', 'particule']
      },
      {
        type: 'multiple_choice',
        question: 'On voit l\'éclair avant d\'entendre le:',
        answer: 'tonnerre',
        wrongAnswers: ['vent', 'pluie', 'vent']
      },
      {
        type: 'multiple_choice',
        question: 'On peut expliquer les phénomènes _____ avec les connaissances apprises',
        answer: 'sonores',
        wrongAnswers: ['lumineux', 'mécaniques', 'thermiques']
      },
      // Drag and Drop - Ordering (by speed)
      {
        type: 'drag_and_drop',
        question: 'Rangez par vitesse: Son, Lumière',
        answer: ['Son', 'Lumière'], // Sound < Light
        wordBank: ['Son', 'Lumière'], // Exactly 2 for 2 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi entend-on le tonnerre après avoir vu l\'éclair? Glisse la réponse:',
        answer: 'La lumière va plus vite que le son, donc on voit l\'éclair avant d\'entendre le tonnerre',
        wordBank: ['Le son va plus vite que la lumière', 'Ils arrivent en même temps', 'La lumière va plus vite que le son, donc on voit l\'éclair avant d\'entendre le tonnerre', 'L\'éclair produit le son'],
        mode: 'select'
      },
      // Drag and Drop - Selection (speed comparison)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la vitesse de la lumière comparée à celle du son? Glisse la réponse:',
        answer: 'La lumière est beaucoup plus rapide',
        wordBank: ['Le son est plus rapide', 'Ils sont égaux', 'La lumière est beaucoup plus rapide', 'Cela dépend'],
        mode: 'select'
      },
      // Drag and Drop - Selection (phenomena)
      {
        type: 'drag_and_drop',
        question: 'Quels phénomènes peut-on expliquer avec les connaissances sur le son? Glisse la réponse:',
        answer: 'Les échos, la propagation et la perception',
        wordBank: ['Seulement les échos', 'Seulement la propagation', 'Les échos, la propagation et la perception', 'Aucun phénomène'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 5: LES MACHINES SIMPLES
  'ch5-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une machine simple aide à faire un travail plus facilement en réduisant l'effort nécessaire ou en changeant la direction de la force", answer: "vrai" },
      { question: "Toutes les machines simples fonctionnent toujours exactement de la même manière", answer: "faux" },
      { question: "Il existe plusieurs types de machines simples comme les leviers, les poulies, les plans inclinés et les vis", answer: "vrai" },
      { question: "Un levier est une machine simple qui utilise un point d'appui pour multiplier la force", answer: "vrai" },
      { question: "Une poulie est une machine simple qui permet de soulever des charges plus facilement", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces objets, lesquels sont des machines simples: ciseaux, escalier, poulie, vis?',
        answer: 'Tous',
        wrongAnswers: ['Seulement les ciseaux', 'Seulement la poulie', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces objets, lequel est un levier?',
        answer: 'Les ciseaux',
        wrongAnswers: ['L\'escalier', 'La poulie', 'La vis']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces objets, lequel est un plan incliné?',
        answer: 'L\'escalier',
        wrongAnswers: ['Les ciseaux', 'La poulie', 'La vis']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal des machines simples?',
        answer: 'Réduire l\'effort nécessaire',
        wrongAnswers: ['Augmenter l\'effort', 'Changer la couleur', 'Créer de la chaleur']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de types principaux de machines simples existe-t-il?',
        answer: 'Plusieurs types',
        wrongAnswers: ['Un seul type', 'Deux types seulement', 'Aucun type']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une machine simple aide à faire un travail plus facilement',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les machines simples fonctionnent toujours exactement de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les machines simples réduisent l\'effort nécessaire',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Il existe plusieurs types de machines simples',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Une machine simple aide à faire un travail plus:',
        answer: 'facilement',
        wrongAnswers: ['difficilement', 'rapidement', 'lentement']
      },
      {
        type: 'multiple_choice',
        question: 'Il existe plusieurs _____ de machines simples',
        answer: 'types',
        wrongAnswers: ['formes', 'tailles', 'couleurs']
      },
      {
        type: 'multiple_choice',
        question: 'Un _____ est une machine simple',
        answer: 'levier',
        wrongAnswers: ['moteur', 'engrenage', 'piston']
      },
      // Drag and Drop - Ordering (by complexity)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces machines simples: Poulie, Levier, Plan incliné',
        answer: ['Levier', 'Plan incliné', 'Poulie'], // Simple to more complex (but all are simple machines)
        wordBank: ['Levier', 'Plan incliné', 'Poulie'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces objets, lesquels sont des machines simples? Glisse la réponse:',
        answer: 'Tous',
        wordBank: ['Seulement les ciseaux', 'Seulement la poulie', 'Aucun', 'Tous'],
        mode: 'select'
      },
      // Drag and Drop - Selection (lever)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces objets, lequel est un levier? Glisse la réponse:',
        answer: 'Les ciseaux',
        wordBank: ['L\'escalier', 'La poulie', 'La vis', 'Les ciseaux'],
        mode: 'select'
      },
      // Drag and Drop - Selection (role)
      {
        type: 'drag_and_drop',
        question: 'Quel est le rôle principal des machines simples? Glisse la réponse:',
        answer: 'Réduire l\'effort nécessaire',
        wordBank: ['Augmenter l\'effort', 'Changer la couleur', 'Créer de la chaleur', 'Réduire l\'effort nécessaire'],
        mode: 'select'
      }
    ]
  },

  'ch5-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un levier a un point d'appui, une force et une résistance, formant les trois composantes essentielles", answer: "vrai" },
      { question: "Tous les leviers ont toujours exactement la même structure et fonctionnent de la même manière", answer: "faux" },
      { question: "Il existe trois types de leviers selon la position du point d'appui par rapport à la force et la résistance", answer: "vrai" },
      { question: "L'avantage mécanique d'un levier se calcule par la formule: Bras de force ÷ Bras de résistance", answer: "vrai" },
      { question: "Plus l'avantage mécanique est grand, moins on a besoin de force pour soulever une charge", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de composantes essentielles a un levier?',
        answer: '3 composantes: point d\'appui, force et résistance',
        wrongAnswers: ['2 composantes', '4 composantes', '1 composante']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de types de leviers existe-t-il?',
        answer: '3 types',
        wrongAnswers: ['2 types', '4 types', '5 types']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de levier est une balançoire?',
        answer: '1ère classe',
        wrongAnswers: ['2ème classe', '3ème classe', '4ème classe']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de levier est une brouette?',
        answer: '2ème classe',
        wrongAnswers: ['1ère classe', '3ème classe', '4ème classe']
      },
      {
        type: 'multiple_choice',
        question: 'Un levier a un bras de force de 2 m et un bras de résistance de 0.5 m. Quel est son avantage mécanique?',
        answer: '4',
        wrongAnswers: ['2', '0.5', '1.5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un levier a un point d\'appui, une force et une résistance',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les leviers ont toujours exactement la même structure',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Il existe trois types de leviers',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'avantage mécanique = Bras de force ÷ Bras de résistance',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un levier a un point d\'_____, une force et une résistance',
        answer: 'appui',
        wrongAnswers: ['rotation', 'pivot', 'fixation']
      },
      {
        type: 'multiple_choice',
        question: 'Il existe combien de types de leviers?',
        answer: 'trois',
        wrongAnswers: ['deux', 'quatre', 'cinq']
      },
      {
        type: 'multiple_choice',
        question: 'L\'avantage mécanique = Bras de force _____ Bras de résistance',
        answer: '÷',
        wrongAnswers: ['×', '+', '-']
      },
      // Drag and Drop - Ordering (lever types by class)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces leviers par classe: Brouette (2ème), Balançoire (1ère), Pince (3ème)',
        answer: ['Balançoire (1ère)', 'Brouette (2ème)', 'Pince (3ème)'], // 1st, 2nd, 3rd class
        wordBank: ['Balançoire (1ère)', 'Brouette (2ème)', 'Pince (3ème)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de composantes essentielles a un levier? Glisse la réponse:',
        answer: '3 composantes: point d\'appui, force et résistance',
        wordBank: ['2 composantes', '4 composantes', '3 composantes: point d\'appui, force et résistance', '1 composante'],
        mode: 'select'
      },
      // Drag and Drop - Selection (lever types)
      {
        type: 'drag_and_drop',
        question: 'Quel type de levier est une balançoire? Glisse la réponse:',
        answer: '1ère classe',
        wordBank: ['2ème classe', '3ème classe', '4ème classe', '1ère classe'],
        mode: 'select'
      },
      // Drag and Drop - Selection (mechanical advantage calculation)
      {
        type: 'drag_and_drop',
        question: 'Un levier a un bras de force de 2 m et un bras de résistance de 0.5 m. Quel est son avantage mécanique? Glisse la réponse:',
        answer: '4',
        wordBank: ['2', '0.5', '1.5', '4'],
        mode: 'select'
      }
    ]
  },

  'ch5-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une poulie change la direction de la force, permettant de soulever une charge en tirant vers le bas au lieu de vers le haut", answer: "vrai" },
      { question: "Toutes les poulies ont toujours exactement le même avantage mécanique", answer: "faux" },
      { question: "Une poulie mobile réduit la force nécessaire en partageant la charge entre plusieurs câbles", answer: "vrai" },
      { question: "L'avantage mécanique d'une poulie mobile est généralement 2, ce qui signifie qu'on a besoin de moitié moins de force", answer: "vrai" },
      { question: "Plus on ajoute de poulies mobiles dans un système, plus l'avantage mécanique augmente", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces poulies, laquelle change seulement la direction de la force: poulie de puits, système de levage?',
        answer: 'Poulie de puits (fixe)',
        wrongAnswers: ['Système de levage', 'Les deux', 'Aucune']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces poulies, laquelle réduit la force nécessaire: poulie de puits, système de levage?',
        answer: 'Système de levage (mobile)',
        wrongAnswers: ['Poulie de puits', 'Les deux', 'Aucune']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est l\'avantage mécanique d\'une poulie mobile?',
        answer: '2',
        wrongAnswers: ['1', '3', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Un système a 2 poulies mobiles. Quel est son avantage mécanique?',
        answer: '4',
        wrongAnswers: ['2', '3', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Que fait une poulie fixe?',
        answer: 'Change la direction de la force',
        wrongAnswers: ['Réduit la force nécessaire', 'Augmente la force', 'Crée de la chaleur']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une poulie change la direction de la force',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les poulies ont toujours exactement le même avantage mécanique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'avantage d\'une poulie mobile est 2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une poulie mobile réduit la force nécessaire',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Une poulie _____ la direction de la force',
        answer: 'change',
        wrongAnswers: ['garde', 'augmente', 'diminue']
      },
      {
        type: 'multiple_choice',
        question: 'L\'avantage d\'une poulie mobile est:',
        answer: '2',
        wrongAnswers: ['1', '3', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Une poulie mobile _____ la force nécessaire',
        answer: 'réduit',
        wrongAnswers: ['augmente', 'garde', 'multiplie']
      },
      // Drag and Drop - Ordering (by mechanical advantage)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces systèmes par avantage mécanique: Poulie fixe (1), 2 poulies mobiles (4), 1 poulie mobile (2)',
        answer: ['Poulie fixe (1)', '1 poulie mobile (2)', '2 poulies mobiles (4)'], // 1, 2, 4
        wordBank: ['Poulie fixe (1)', '1 poulie mobile (2)', '2 poulies mobiles (4)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est l\'avantage mécanique d\'une poulie mobile? Glisse la réponse:',
        answer: '2',
        wordBank: ['1', '3', '4', '2'],
        mode: 'select'
      },
      // Drag and Drop - Selection (pulley system)
      {
        type: 'drag_and_drop',
        question: 'Un système a 2 poulies mobiles. Quel est son avantage mécanique? Glisse la réponse:',
        answer: '4',
        wordBank: ['2', '3', '5', '4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (fixed pulley)
      {
        type: 'drag_and_drop',
        question: 'Que fait une poulie fixe? Glisse la réponse:',
        answer: 'Change la direction de la force',
        wordBank: ['Réduit la force nécessaire', 'Augmente la force', 'Crée de la chaleur', 'Change la direction de la force'],
        mode: 'select'
      }
    ]
  },

  'ch5-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un plan incliné réduit la force nécessaire en répartissant l'effort sur une plus grande distance", answer: "vrai" },
      { question: "Tous les plans inclinés ont toujours exactement le même avantage mécanique", answer: "faux" },
      { question: "Une vis est un plan incliné enroulé autour d'un axe, ce qui lui donne un très grand avantage mécanique", answer: "vrai" },
      { question: "L'avantage mécanique du plan incliné se calcule par la formule: Longueur ÷ Hauteur", answer: "vrai" },
      { question: "Plus un plan incliné est long par rapport à sa hauteur, plus son avantage mécanique est grand", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une vis?',
        answer: 'Un plan incliné enroulé',
        wrongAnswers: ['Un levier', 'Une poulie', 'Un type de roue']
      },
      {
        type: 'multiple_choice',
        question: 'Une rampe fait 6 m de long et 2 m de haut. Quel est son avantage mécanique?',
        answer: '3',
        wrongAnswers: ['2', '4', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Que fait un plan incliné?',
        answer: 'Réduit la force nécessaire',
        wrongAnswers: ['Augmente la force nécessaire', 'Change la couleur', 'Crée de la chaleur']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule de l\'avantage mécanique d\'un plan incliné?',
        answer: 'Longueur ÷ Hauteur',
        wrongAnswers: ['Hauteur ÷ Longueur', 'Longueur × Hauteur', 'Longueur + Hauteur']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle machine simple a généralement un très grand avantage mécanique?',
        answer: 'Une vis',
        wrongAnswers: ['Un levier simple', 'Une poulie fixe', 'Un plan incliné court']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un plan incliné réduit la force nécessaire',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les plans inclinés ont toujours exactement le même avantage mécanique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une vis a un très grand avantage mécanique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'avantage du plan incliné = Longueur ÷ Hauteur',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un plan incliné _____ la force nécessaire',
        answer: 'réduit',
        wrongAnswers: ['augmente', 'garde', 'multiplie']
      },
      {
        type: 'multiple_choice',
        question: 'Une vis est un plan incliné:',
        answer: 'enroulé',
        wrongAnswers: ['droit', 'courbe', 'plié']
      },
      {
        type: 'multiple_choice',
        question: 'L\'avantage du plan incliné = Longueur _____ Hauteur',
        answer: '÷',
        wrongAnswers: ['×', '+', '-']
      },
      // Drag and Drop - Ordering (by mechanical advantage)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces machines par avantage mécanique: Plan incliné (3), Levier simple (1), Vis (très grand)',
        answer: ['Levier simple (1)', 'Plan incliné (3)', 'Vis (très grand)'], // 1, 3, very large
        wordBank: ['Levier simple (1)', 'Plan incliné (3)', 'Vis (très grand)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Une rampe fait 6 m de long et 2 m de haut. Quel est son avantage mécanique? Glisse la réponse:',
        answer: '3',
        wordBank: ['2', '4', '6', '3'],
        mode: 'select'
      },
      // Drag and Drop - Selection (screw)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'une vis? Glisse la réponse:',
        answer: 'Un plan incliné enroulé',
        wordBank: ['Un levier', 'Une poulie', 'Un type de roue', 'Un plan incliné enroulé'],
        mode: 'select'
      },
      // Drag and Drop - Selection (inclined plane formula)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la formule de l\'avantage mécanique d\'un plan incliné? Glisse la réponse:',
        answer: 'Longueur ÷ Hauteur',
        wordBank: ['Hauteur ÷ Longueur', 'Longueur × Hauteur', 'Longueur + Hauteur', 'Longueur ÷ Hauteur'],
        mode: 'select'
      }
    ]
  },

  'ch5-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut choisir la meilleure machine simple pour une tâche en fonction des besoins spécifiques comme la force à appliquer, la distance à parcourir ou la direction souhaitée", answer: "vrai" },
      { question: "Toutes les machines simples conviennent toujours à toutes les tâches de la même manière", answer: "faux" },
      { question: "Pour couper une feuille de papier, on utilise généralement un levier comme les ciseaux car ils permettent de concentrer la force", answer: "vrai" },
      { question: "La compréhension des machines simples permet de choisir l'outil le plus efficace pour chaque situation", answer: "vrai" },
      { question: "Chaque machine simple a ses avantages et ses utilisations spécifiques selon le type de travail à effectuer", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Pour couper une feuille de papier, quelle machine simple utilises-tu?',
        answer: 'Les ciseaux (levier)',
        wrongAnswers: ['Une poulie', 'Un plan incliné', 'Une vis']
      },
      {
        type: 'multiple_choice',
        question: 'Pour soulever une charge lourde, quelle machine simple serait la plus efficace?',
        answer: 'Un système de poulies',
        wrongAnswers: ['Un levier simple', 'Un plan incliné très court', 'Aucune machine']
      },
      {
        type: 'multiple_choice',
        question: 'Pour visser une vis dans du bois, quelle machine simple utilises-tu?',
        answer: 'Une vis (plan incliné enroulé)',
        wrongAnswers: ['Un levier', 'Une poulie', 'Un plan incliné droit']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi peut-on choisir la meilleure machine pour une tâche?',
        answer: 'Car chaque machine a des avantages spécifiques',
        wrongAnswers: ['Car toutes sont identiques', 'Car cela n\'a pas d\'importance', 'Car on ne peut pas choisir']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle machine simple utiliserais-tu pour déplacer une charge vers le haut en tirant vers le bas?',
        answer: 'Une poulie',
        wrongAnswers: ['Un levier simple', 'Un plan incliné', 'Une vis']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut choisir la meilleure machine pour une tâche',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les machines simples conviennent toujours à toutes les tâches',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les ciseaux sont un levier de 1ère classe',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Chaque machine simple a ses avantages spécifiques',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'On peut choisir la meilleure _____ pour une tâche',
        answer: 'machine',
        wrongAnswers: ['outil', 'matériau', 'méthode']
      },
      {
        type: 'multiple_choice',
        question: 'Pour couper une feuille de papier, on utilise les _____ (levier)',
        answer: 'ciseaux',
        wrongAnswers: ['couteau', 'règle', 'gomme']
      },
      {
        type: 'multiple_choice',
        question: 'Chaque machine simple a ses _____ spécifiques',
        answer: 'avantages',
        wrongAnswers: ['inconvénients', 'désavantages', 'limites']
      },
      // Drag and Drop - Ordering (by application)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces tâches par machine appropriée: Couper (Ciseaux), Soulever (Poulie), Visser (Vis)',
        answer: ['Couper (Ciseaux)', 'Visser (Vis)', 'Soulever (Poulie)'], // Logical order
        wordBank: ['Couper (Ciseaux)', 'Visser (Vis)', 'Soulever (Poulie)'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pour couper une feuille de papier, quelle machine simple utilises-tu? Glisse la réponse:',
        answer: 'Les ciseaux (levier)',
        wordBank: ['Une poulie', 'Un plan incliné', 'Une vis', 'Les ciseaux (levier)'],
        mode: 'select'
      },
      // Drag and Drop - Selection (lifting)
      {
        type: 'drag_and_drop',
        question: 'Pour soulever une charge lourde, quelle machine simple serait la plus efficace? Glisse la réponse:',
        answer: 'Un système de poulies',
        wordBank: ['Un levier simple', 'Un plan incliné très court', 'Aucune machine', 'Un système de poulies'],
        mode: 'select'
      },
      // Drag and Drop - Selection (why choose)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi peut-on choisir la meilleure machine pour une tâche? Glisse la réponse:',
        answer: 'Car chaque machine a des avantages spécifiques',
        wordBank: ['Car toutes sont identiques', 'Car cela n\'a pas d\'importance', 'Car on ne peut pas choisir', 'Car chaque machine a des avantages spécifiques'],
        mode: 'select'
      }
    ]
  }
};

export default YEAR2_SCIENCE_SECTION_QUESTIONS;

