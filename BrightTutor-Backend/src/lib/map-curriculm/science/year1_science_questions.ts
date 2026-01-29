/**
 * Year 1 Science - Questions for Each Section
 * All questions are verifiable and appropriate for app format:
 * - Multiple Choice
 * - True/False (Right or Wrong)
 * - Fill-in-Blank (Typing)
 * - Completion
 * 
 * NO drawings, NO file uploads, NO unverifiable questions
 */

export const YEAR1_SCIENCE_SECTION_QUESTIONS: {
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
  // CHAPTER 1: LES ÊTRES VIVANTS ET LEUR MILIEU
  'ch1-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un être vivant se nourrit, respire, se reproduit et bouge", answer: "vrai" },
      { question: "Tous les objets se nourrissent comme les êtres vivants", answer: "faux" },
      { question: "Un caillou est un être vivant", answer: "faux" },
      { question: "Une plante est un être vivant car elle respire et se reproduit", answer: "vrai" },
      { question: "Un ordinateur peut être considéré comme un être vivant", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien y a-t-il de critères principaux pour identifier un être vivant?',
        answer: '4',
        wrongAnswers: ['3', '5', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lequel est un être vivant?',
        answer: 'Une gazelle',
        wrongAnswers: ['Un ordinateur', 'Une voiture', 'Un caillou']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les 4 critères du vivant?',
        answer: 'Se nourrir, respirer, se reproduire, bouger',
        wrongAnswers: ['Se nourrir, respirer, grandir', 'Respirer, grandir, bouger', 'Se nourrir, grandir, se reproduire']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lesquels sont vivants: gazelle, pierre, acacia, sable?',
        answer: 'Gazelle et acacia',
        wrongAnswers: ['Tous', 'Aucun', 'Pierre et sable']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi un caillou n\'est-il pas vivant?',
        answer: 'Il ne respire pas, ne se nourrit pas et ne se reproduit pas',
        wrongAnswers: ['Il est trop petit', 'Il est solide', 'Il ne bouge pas']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un ordinateur se nourrit-il?',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les 4 critères du vivant sont: se nourrir, respirer, se reproduire et bouger',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une plante est un être vivant',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les objets peuvent être considérés comme des êtres vivants',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Les 4 critères du vivant sont: se nourrir, respirer, se reproduire et ?',
        answer: 'bouger',
        wrongAnswers: ['grandir', 'mourir', 'dormir']
      },
      {
        type: 'multiple_choice',
        question: 'Un caillou n\'est pas vivant car il ne _____ pas',
        answer: 'respire',
        wrongAnswers: ['existe', 'tombe', 'brille']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lesquels sont vivants: gazelle, pierre, acacia, sable?',
        answer: 'Gazelle et acacia',
        wrongAnswers: ['Tous', 'Aucun', 'Pierre et sable']
      },
      // Drag and Drop - Ordering (classifying living vs non-living)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces éléments en ordre alphabétique: (acacia), (gazelle), (hirondelle)',
        answer: ['acacia', 'gazelle', 'hirondelle'], // Alphabetical order
        wordBank: ['acacia', 'gazelle', 'hirondelle'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien y a-t-il de critères principaux pour identifier un être vivant? Glisse la réponse:',
        answer: '4',
        wordBank: ['3', '4', '5', '6'],
        mode: 'select'
      },
      // Drag and Drop - Selection (classification)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces éléments, lequel est un être vivant? Glisse la réponse:',
        answer: 'Une gazelle',
        wordBank: ['Une gazelle', 'Un ordinateur', 'Une voiture', 'Un caillou'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reasoning)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi un caillou n\'est-il pas vivant? Glisse la réponse:',
        answer: 'Il ne respire pas, ne se nourrit pas et ne se reproduit pas',
        wordBank: ['Il est trop petit', 'Il ne respire pas, ne se nourrit pas et ne se reproduit pas', 'Il est solide', 'Il ne bouge pas'],
        mode: 'select'
      }
    ]
  },

  'ch1-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une cellule végétale a une paroi épaisse en cellulose", answer: "vrai" },
      { question: "Les cellules animales ont des chloroplastes comme les cellules végétales", answer: "faux" },
      { question: "Les chloroplastes sont verts car ils contiennent de la chlorophylle", answer: "vrai" },
      { question: "Toutes les cellules ont exactement la même structure", answer: "faux" },
      { question: "Les cellules végétales ont une vacuole géante et des chloroplastes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la différence principale entre cellule animale et végétale?',
        answer: 'La cellule végétale a une paroi épaisse et des chloroplastes',
        wrongAnswers: ['La cellule animale a des chloroplastes', 'Elles sont identiques', 'La cellule végétale n\'a pas de membrane']
      },
      {
        type: 'multiple_choice',
        question: 'Que contiennent les chloroplastes?',
        answer: 'Chlorophylle',
        wrongAnswers: ['Eau', 'Sucres', 'Minéraux']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les chloroplastes sont-ils verts?',
        answer: 'Ils contiennent de la chlorophylle',
        wrongAnswers: ['Ils contiennent de l\'eau', 'Ils contiennent des minéraux', 'Ils sont colorés artificiellement']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle partie de la cellule végétale est épaisse et rigide?',
        answer: 'La paroi',
        wrongAnswers: ['La membrane', 'Le noyau', 'Le cytoplasme']
      },
      {
        type: 'multiple_choice',
        question: 'À quoi servent les chloroplastes dans la cellule végétale?',
        answer: 'À la photosynthèse',
        wrongAnswers: ['À la respiration', 'À la reproduction', 'À la digestion']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les cellules végétales ont des chloroplastes verts',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les cellules animales ont des chloroplastes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La cellule végétale a une paroi épaisse en cellulose',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les cellules ont exactement la même structure',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La cellule végétale a une _____ épaisse en cellulose',
        answer: 'paroi',
        wrongAnswers: ['membrane', 'enveloppe', 'couche']
      },
      {
        type: 'multiple_choice',
        question: 'Les chloroplastes servent à la:',
        answer: 'photosynthèse',
        wrongAnswers: ['respiration', 'digestion', 'reproduction']
      },
      {
        type: 'multiple_choice',
        question: 'Les chloroplastes sont verts car ils contiennent de la:',
        answer: 'chlorophylle',
        wrongAnswers: ['cellulose', 'sève', 'suc']
      },
      // Drag and Drop - Ordering (cell parts from outside to inside)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces parties de la cellule végétale de l\'extérieur vers l\'intérieur: (paroi), (membrane), (cytoplasme)',
        answer: ['paroi', 'membrane', 'cytoplasme'], // Outside to inside
        wordBank: ['paroi', 'membrane', 'cytoplasme'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Que contiennent les chloroplastes? Glisse la réponse:',
        answer: 'Chlorophylle',
        wordBank: ['Eau', 'Chlorophylle', 'Sucres', 'Minéraux'],
        mode: 'select'
      },
      // Drag and Drop - Selection (function)
      {
        type: 'drag_and_drop',
        question: 'À quoi servent les chloroplastes dans la cellule végétale? Glisse la réponse:',
        answer: 'À la photosynthèse',
        wordBank: ['À la respiration', 'À la photosynthèse', 'À la reproduction', 'À la digestion'],
        mode: 'select'
      },
      // Drag and Drop - Selection (difference)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la différence principale entre cellule animale et végétale? Glisse la réponse:',
        answer: 'La cellule végétale a une paroi épaisse et des chloroplastes',
        wordBank: ['La cellule animale a des chloroplastes', 'La cellule végétale a une paroi épaisse et des chloroplastes', 'Elles sont identiques', 'La cellule végétale n\'a pas de membrane'],
        mode: 'select'
      }
    ]
  },

  'ch1-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une clé de détermination sert à classer les êtres vivants selon leurs caractéristiques", answer: "vrai" },
      { question: "Toutes les plantes ont des racines", answer: "faux" },
      { question: "Une gazelle a des plumes comme les oiseaux", answer: "faux" },
      { question: "Un champignon n'a pas de racines et n'est pas vert", answer: "vrai" },
      { question: "Les plantes vertes font de la photosynthèse grâce à leurs chloroplastes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la première question dans une clé de détermination?',
        answer: 'A-t-il des racines?',
        wrongAnswers: ['A-t-il des plumes?', 'Est-il vert?', 'Bouge-t-il?']
      },
      {
        type: 'multiple_choice',
        question: 'Utilise la clé: Un acacia a des racines et est vert. C\'est un:',
        answer: 'Végétal',
        wrongAnswers: ['Animal', 'Champignon', 'Mammifère']
      },
      {
        type: 'multiple_choice',
        question: 'Quel être vivant a des racines et est vert?',
        answer: 'Un acacia',
        wrongAnswers: ['Une gazelle', 'Un champignon', 'Un oiseau']
      },
      {
        type: 'multiple_choice',
        question: 'Quel être vivant n\'a pas de racines et n\'est pas vert?',
        answer: 'Un champignon',
        wrongAnswers: ['Un acacia', 'Une gazelle', 'Un arbre']
      },
      {
        type: 'multiple_choice',
        question: 'Quel outil utilise-t-on pour classer les êtres vivants?',
        answer: 'Une clé de détermination',
        wrongAnswers: ['Un microscope', 'Un thermomètre', 'Une balance']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une gazelle a des plumes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une clé de détermination sert à classer les êtres vivants',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les plantes ont des racines',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un champignon n\'a pas de racines',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Pour classer un être vivant, on utilise une _____ de détermination',
        answer: 'clé',
        wrongAnswers: ['liste', 'tableau', 'carte']
      },
      {
        type: 'multiple_choice',
        question: 'Un champignon n\'a pas de racines et n\'est pas vert. C\'est un:',
        answer: 'champignon',
        wrongAnswers: ['végétal', 'animal', 'minéral']
      },
      {
        type: 'multiple_choice',
        question: 'Un acacia a des racines et est vert. C\'est un:',
        answer: 'végétal',
        wrongAnswers: ['animal', 'champignon', 'minéral']
      },
      // Drag and Drop - Ordering (classification steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes de classification dans l\'ordre: (Observer), (Utiliser la clé), (Identifier)',
        answer: ['Observer', 'Utiliser la clé', 'Identifier'], // Logical order
        wordBank: ['Observer', 'Utiliser la clé', 'Identifier'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la première question dans une clé de détermination? Glisse la réponse:',
        answer: 'A-t-il des racines?',
        wordBank: ['A-t-il des racines?', 'A-t-il des plumes?', 'Est-il vert?', 'Bouge-t-il?'],
        mode: 'select'
      },
      // Drag and Drop - Selection (classification)
      {
        type: 'drag_and_drop',
        question: 'Utilise la clé: Un acacia a des racines et est vert. C\'est un: Glisse la réponse:',
        answer: 'Végétal',
        wordBank: ['Animal', 'Végétal', 'Champignon', 'Mammifère'],
        mode: 'select'
      },
      // Drag and Drop - Selection (tool)
      {
        type: 'drag_and_drop',
        question: 'Quel outil utilise-t-on pour classer les êtres vivants? Glisse la réponse:',
        answer: 'Une clé de détermination',
        wordBank: ['Un microscope', 'Une clé de détermination', 'Un thermomètre', 'Une balance'],
        mode: 'select'
      }
    ]
  },

  'ch1-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un herbier sert à conserver des plantes séchées pour les étudier", answer: "vrai" },
      { question: "Toutes les plantes doivent être séchées pendant exactement 7 jours", answer: "faux" },
      { question: "On change le papier de séchage le jour 2 et 5 pour éviter la moisissure", answer: "vrai" },
      { question: "L'étiquette d'un herbier doit contenir plusieurs informations importantes", answer: "vrai" },
      { question: "On peut utiliser des journaux pour sécher les plantes dans un herbier", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de jours faut-il généralement pour sécher une plante dans un herbier?',
        answer: '7 jours',
        wrongAnswers: ['5 jours', '10 jours', '14 jours']
      },
      {
        type: 'multiple_choice',
        question: 'Quel matériel utilise-t-on pour faire un herbier?',
        answer: 'Journaux, planches, sangles',
        wrongAnswers: ['Plastique, colle, ciseaux', 'Verre, métal, bois', 'Tissu, fil, aiguille']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi change-t-on le papier de séchage le jour 2 et 5?',
        answer: 'Pour éviter la moisissure',
        wrongAnswers: ['Pour accélérer le séchage', 'Pour changer la couleur', 'Pour ajouter des couleurs']
      },
      {
        type: 'multiple_choice',
        question: 'Que faut-il noter sur l\'étiquette d\'un herbier?',
        answer: 'Nom vernaculaire, nom scientifique, famille, lieu, date, élève',
        wrongAnswers: ['Seulement le nom de la plante', 'Seulement la date', 'Le nom et la couleur']
      },
      {
        type: 'multiple_choice',
        question: 'Pour sécher une plante dans un herbier, on la place entre:',
        answer: 'Des journaux',
        wrongAnswers: ['Du plastique', 'Du verre', 'Du métal']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On change le papier de séchage le jour 2 et 5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les plantes doivent être séchées pendant exactement 7 jours',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un herbier sert à conserver des plantes séchées',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'étiquette doit contenir plusieurs informations importantes',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Pour sécher une plante dans un herbier, on la place entre des:',
        answer: 'journaux',
        wrongAnswers: ['livres', 'tissus', 'papiers']
      },
      {
        type: 'multiple_choice',
        question: 'L\'étiquette doit contenir: nom vernaculaire, nom scientifique, famille, lieu, date et:',
        answer: 'élève',
        wrongAnswers: ['professeur', 'école', 'classe']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de jours faut-il généralement pour sécher une plante dans un herbier?',
        answer: '7 jours',
        wrongAnswers: ['3 jours', '14 jours', '10 jours']
      },
      // Drag and Drop - Ordering (herbarium process steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes de création d\'herbier dans l\'ordre: (Collecter), (Sécher), (Coller)',
        answer: ['Collecter', 'Sécher', 'Coller'], // Logical order
        wordBank: ['Collecter', 'Sécher', 'Coller'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de jours faut-il généralement pour sécher une plante dans un herbier? Glisse la réponse:',
        answer: '7',
        wordBank: ['5', '7', '10', '14'],
        mode: 'select'
      },
      // Drag and Drop - Selection (material)
      {
        type: 'drag_and_drop',
        question: 'Pour sécher une plante dans un herbier, on la place entre: Glisse la réponse:',
        answer: 'Des journaux',
        wordBank: ['Du plastique', 'Des journaux', 'Du verre', 'Du métal'],
        mode: 'select'
      },
      // Drag and Drop - Selection (purpose)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi change-t-on le papier de séchage le jour 2 et 5? Glisse la réponse:',
        answer: 'Pour éviter la moisissure',
        wordBank: ['Pour accélérer le séchage', 'Pour éviter la moisissure', 'Pour changer la couleur', 'Pour ajouter des couleurs'],
        mode: 'select'
      }
    ]
  },

  'ch1-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Un caillou respire comme les êtres vivants", answer: "faux" },
      { question: "Une plante se reproduit et respire", answer: "vrai" },
      { question: "Tous les objets peuvent se nourrir comme les êtres vivants", answer: "faux" },
      { question: "Un animal bouge et se nourrit", answer: "vrai" },
      { question: "Le sable se reproduit comme les êtres vivants", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (review)
      {
        type: 'multiple_choice',
        question: 'Quel élément est vivant parmi: pierre, gazelle, sable, ordinateur?',
        answer: 'Gazelle',
        wrongAnswers: ['Pierre', 'Sable', 'Ordinateur']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi un caillou n\'est-il pas vivant?',
        answer: 'Il ne respire pas, ne se nourrit pas et ne se reproduit pas',
        wrongAnswers: ['Il est trop petit', 'Il est solide', 'Il ne bouge pas']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les 4 critères du vivant?',
        answer: 'Se nourrir, respirer, se reproduire, bouger',
        wrongAnswers: ['Respirer, grandir, bouger', 'Se nourrir, grandir, se reproduire', 'Respirer, grandir, se reproduire']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lesquels sont vivants: gazelle, ordinateur, acacia, voiture?',
        answer: 'Gazelle et acacia',
        wrongAnswers: ['Tous', 'Aucun', 'Ordinateur et voiture']
      },
      {
        type: 'multiple_choice',
        question: 'Un ordinateur se nourrit-il?',
        answer: 'Non, il n\'est pas vivant',
        wrongAnswers: ['Oui, il utilise l\'électricité', 'Oui, comme les plantes', 'Oui, comme les animaux']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un ordinateur se nourrit-il?',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une plante se reproduit et respire',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les objets peuvent se nourrir comme les êtres vivants',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le sable se reproduit comme les êtres vivants',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un être vivant doit se nourrir, respirer, se reproduire et:',
        answer: 'bouger',
        wrongAnswers: ['grandir', 'mourir', 'dormir']
      },
      {
        type: 'multiple_choice',
        question: 'Un caillou n\'est pas vivant car il ne _____ pas',
        answer: 'respire',
        wrongAnswers: ['existe', 'tombe', 'brille']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces éléments, lesquels sont vivants: gazelle, ordinateur, acacia, voiture?',
        answer: 'Gazelle et acacia',
        wrongAnswers: ['Tous', 'Aucun', 'Ordinateur et voiture']
      },
      // Drag and Drop - Ordering (classification: living vs non-living)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces éléments en ordre alphabétique: (acacia), (gazelle), (hirondelle)',
        answer: ['acacia', 'gazelle', 'hirondelle'], // Alphabetical order
        wordBank: ['acacia', 'gazelle', 'hirondelle'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel élément est vivant parmi: pierre, gazelle, sable, ordinateur? Glisse la réponse:',
        answer: 'Gazelle',
        wordBank: ['Pierre', 'Gazelle', 'Sable', 'Ordinateur'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reasoning)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi un caillou n\'est-il pas vivant? Glisse la réponse:',
        answer: 'Il ne respire pas, ne se nourrit pas et ne se reproduit pas',
        wordBank: ['Il est trop petit', 'Il ne respire pas, ne se nourrit pas et ne se reproduit pas', 'Il est solide', 'Il ne bouge pas'],
        mode: 'select'
      },
      // Drag and Drop - Selection (classification)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces éléments, lesquels sont vivants: gazelle, ordinateur, acacia, voiture? Glisse la réponse:',
        answer: 'Gazelle et acacia',
        wordBank: ['Tous', 'Aucun', 'Gazelle et acacia', 'Ordinateur et voiture'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 2: FONCTION DE LOCOMOTION CHEZ LES ANIMAUX
  'ch2-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un muscle se contracte sous l'effet d'un courant électrique", answer: "vrai" },
      { question: "Tous les muscles se contractent de la même manière", answer: "faux" },
      { question: "Le raccourcissement se calcule: (L₀ - L₁)/L₀ × 100%", answer: "vrai" },
      { question: "Le muscle ne revient jamais à sa longueur initiale après contraction", answer: "faux" },
      { question: "L'intensité du stimulus influence l'intensité de la contraction", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si L₀ = 5cm et L₁ = 4cm, quel est le raccourcissement?',
        answer: '20%',
        wrongAnswers: ['15%', '25%', '10%']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le raccourcissement si L₀ = 6cm et L₁ = 4,5cm:',
        answer: '25%',
        wrongAnswers: ['20%', '30%', '15%']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule du raccourcissement musculaire?',
        answer: '(L₀ - L₁)/L₀ × 100%',
        wrongAnswers: ['(L₀ + L₁)/L₀ × 100%', 'L₀ - L₁', 'L₁/L₀ × 100%']
      },
      {
        type: 'multiple_choice',
        question: 'Que se passe-t-il quand on applique un courant électrique à un muscle?',
        answer: 'Le muscle se raccourcit et devient plus épais',
        wrongAnswers: ['Le muscle s\'allonge', 'Le muscle reste immobile', 'Le muscle se relâche']
      },
      {
        type: 'multiple_choice',
        question: 'Si L₀ = 8cm et L₁ = 6cm, quel est le raccourcissement?',
        answer: '25%',
        wrongAnswers: ['20%', '30%', '15%']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un muscle se contracte sous l\'effet d\'un courant électrique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les muscles se contractent de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le muscle revient à sa longueur initiale après contraction',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'intensité du stimulus influence la contraction',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Raccourcissement = (L₀ - L₁) ÷ L₀ × ?%',
        answer: '100',
        wrongAnswers: ['10', '1000', '50']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le raccourcissement si L₀ = 6cm et L₁ = 4,5cm:',
        answer: '25%',
        wrongAnswers: ['20%', '30%', '15%']
      },
      {
        type: 'multiple_choice',
        question: 'Quand on applique un courant électrique, le muscle se _____ et devient plus épais',
        answer: 'raccourcit',
        wrongAnswers: ['allonge', 'relâche', 'contracte']
      },
      // Drag and Drop - Ordering (calculations from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces raccourcissements du plus petit au plus grand: (15%), (20%), (25%)',
        answer: ['15', '20', '25'], // 15% < 20% < 25%
        wordBank: ['15', '20', '25'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si L₀ = 5cm et L₁ = 4cm, quel est le raccourcissement? Glisse la réponse:',
        answer: '20%',
        wordBank: ['15%', '20%', '25%', '10%'],
        mode: 'select'
      },
      // Drag and Drop - Selection (formula)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la formule du raccourcissement musculaire? Glisse la réponse:',
        answer: '(L₀ - L₁)/L₀ × 100%',
        wordBank: ['(L₀ - L₁)/L₀ × 100%', '(L₀ + L₁)/L₀ × 100%', 'L₀ - L₁', 'L₁/L₀ × 100%'],
        mode: 'select'
      },
      // Drag and Drop - Selection (observation)
      {
        type: 'drag_and_drop',
        question: 'Que se passe-t-il quand on applique un courant électrique à un muscle? Glisse la réponse:',
        answer: 'Le muscle se raccourcit et devient plus épais',
        wordBank: ['Le muscle s\'allonge', 'Le muscle se raccourcit et devient plus épais', 'Le muscle reste immobile', 'Le muscle se relâche'],
        mode: 'select'
      }
    ]
  },

  'ch2-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un plantigrade marche sur toute la plante du pied", answer: "vrai" },
      { question: "Tous les animaux marchent de la même manière", answer: "faux" },
      { question: "Un digitigrade marche sur les doigts seulement", answer: "vrai" },
      { question: "Un unguligrade marche sur un sabot", answer: "vrai" },
      { question: "Une gazelle est unguligrade car elle a des sabots", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel type de patte a un cheval?',
        answer: 'Unguligrade',
        wrongAnswers: ['Plantigrade', 'Digitigrade', 'Carnivore']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type d\'animal est un homme?',
        answer: 'Plantigrade',
        wrongAnswers: ['Digitigrade', 'Unguligrade', 'Carnivore']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type d\'animal est une gazelle?',
        answer: 'Unguligrade',
        wrongAnswers: ['Plantigrade', 'Digitigrade', 'Herbivore']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la différence principale entre plantigrade et digitigrade?',
        answer: 'Plantigrade: toute la plante du pied | Digitigrade: doigts seulement',
        wrongAnswers: ['Plantigrade: sabot | Digitigrade: griffes', 'Ils sont identiques', 'Plantigrade: griffes | Digitigrade: sabot']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les gazelles ont-elles des sabots?',
        answer: 'Pour courir très vite dans le désert',
        wrongAnswers: ['Pour nager', 'Pour voler', 'Pour grimper']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une gazelle est unguligrade',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les animaux marchent de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un homme est plantigrade',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un digitigrade marche sur les doigts seulement',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un _____ marche sur toute la plante du pied',
        answer: 'plantigrade',
        wrongAnswers: ['digitigrade', 'unguligrade', 'bipède']
      },
      {
        type: 'multiple_choice',
        question: 'Une gazelle est _____ car elle a des sabots',
        answer: 'unguligrade',
        wrongAnswers: ['plantigrade', 'digitigrade', 'quadrupède']
      },
      {
        type: 'multiple_choice',
        question: 'Un digitigrade marche sur les _____ seulement',
        answer: 'doigts',
        wrongAnswers: ['sabots', 'plante du pied', 'talons']
      },
      // Drag and Drop - Ordering (classification steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces types de locomotion par vitesse croissante: (plantigrade), (digitigrade), (unguligrade)',
        answer: ['plantigrade', 'digitigrade', 'unguligrade'], // Generally slower to faster
        wordBank: ['plantigrade', 'digitigrade', 'unguligrade'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel type de patte a un cheval? Glisse la réponse:',
        answer: 'Unguligrade',
        wordBank: ['Plantigrade', 'Digitigrade', 'Unguligrade', 'Carnivore'],
        mode: 'select'
      },
      // Drag and Drop - Selection (classification)
      {
        type: 'drag_and_drop',
        question: 'Quel type d\'animal est un homme? Glisse la réponse:',
        answer: 'Plantigrade',
        wordBank: ['Plantigrade', 'Digitigrade', 'Unguligrade', 'Carnivore'],
        mode: 'select'
      },
      // Drag and Drop - Selection (adaptation)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi les gazelles ont-elles des sabots? Glisse la réponse:',
        answer: 'Pour courir très vite dans le désert',
        wordBank: ['Pour nager', 'Pour courir très vite dans le désert', 'Pour voler', 'Pour grimper'],
        mode: 'select'
      }
    ]
  },

  'ch2-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un oiseau a des plumes primaires, secondaires et tertiaires pour voler", answer: "vrai" },
      { question: "Tous les oiseaux ont exactement le même nombre de plumes", answer: "faux" },
      { question: "Le muscle pectoral fait descendre l'aile lors du vol", answer: "vrai" },
      { question: "Les plumes primaires servent à la propulsion", answer: "vrai" },
      { question: "L'os du bras de l'aile s'appelle humérus", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel muscle fait descendre l\'aile d\'un oiseau?',
        answer: 'Muscle pectoral',
        wrongAnswers: ['Muscle biceps', 'Muscle triceps', 'Muscle dorsal']
      },
      {
        type: 'multiple_choice',
        question: 'Quel os principal se trouve dans le bras de l\'aile d\'un oiseau?',
        answer: 'Humérus',
        wrongAnswers: ['Radius', 'Ulna', 'Fémur']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles plumes servent à la propulsion chez un oiseau?',
        answer: 'Plumes primaires',
        wrongAnswers: ['Plumes secondaires', 'Plumes tertiaires', 'Plumes caudales']
      },
      {
        type: 'multiple_choice',
        question: 'Comment l\'oiseau crée-t-il la portance?',
        answer: 'Par la forme de l\'aile et le mouvement des plumes',
        wrongAnswers: ['Par la queue seule', 'Par les pattes', 'Par le bec']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les os principaux de l\'aile d\'un oiseau?',
        answer: 'Humérus, radius, ulna',
        wrongAnswers: ['Fémur, tibia', 'Vertèbres, côtes', 'Crâne, mâchoire']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les plumes primaires servent à la propulsion',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les oiseaux ont exactement le même nombre de plumes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le muscle pectoral fait descendre l\'aile',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'os du bras de l\'aile s\'appelle humérus',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'os du bras de l\'aile s\'appelle:',
        answer: 'humérus',
        wrongAnswers: ['radius', 'ulna', 'fémur']
      },
      {
        type: 'multiple_choice',
        question: 'Les plumes _____ servent à la propulsion',
        answer: 'primaires',
        wrongAnswers: ['secondaires', 'rémiges', 'duvets']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ fait descendre l\'aile d\'un oiseau',
        answer: 'muscle pectoral',
        wrongAnswers: ['muscle dorsal', 'muscle brachial', 'muscle abdominal']
      },
      // Drag and Drop - Ordering (flight sequence: takeoff, flight, landing)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes du vol dans l\'ordre: (Battement), (Montée), (Atterrissage)',
        answer: ['Battement', 'Montée', 'Atterrissage'], // Logical flight sequence
        wordBank: ['Battement', 'Montée', 'Atterrissage'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel muscle fait descendre l\'aile d\'un oiseau? Glisse la réponse:',
        answer: 'Muscle pectoral',
        wordBank: ['Muscle biceps', 'Muscle pectoral', 'Muscle triceps', 'Muscle dorsal'],
        mode: 'select'
      },
      // Drag and Drop - Selection (anatomy)
      {
        type: 'drag_and_drop',
        question: 'Quel os principal se trouve dans le bras de l\'aile d\'un oiseau? Glisse la réponse:',
        answer: 'Humérus',
        wordBank: ['Radius', 'Humérus', 'Ulna', 'Fémur'],
        mode: 'select'
      },
      // Drag and Drop - Selection (function)
      {
        type: 'drag_and_drop',
        question: 'Quelles plumes servent à la propulsion chez un oiseau? Glisse la réponse:',
        answer: 'Plumes primaires',
        wordBank: ['Plumes primaires', 'Plumes secondaires', 'Plumes tertiaires', 'Plumes caudales'],
        mode: 'select'
      }
    ]
  },

  'ch2-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La nageoire caudale sert à la propulsion principale chez le poisson", answer: "vrai" },
      { question: "Toutes les nageoires ont exactement la même fonction", answer: "faux" },
      { question: "Les nageoires paires servent à la stabilisation et à la direction", answer: "vrai" },
      { question: "Un poisson nage par ondulation du corps", answer: "vrai" },
      { question: "Le rythme de nage lente est généralement de 2 battements par seconde", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle nageoire sert à la propulsion principale chez le poisson?',
        answer: 'Nageoire caudale',
        wrongAnswers: ['Nageoires paires', 'Nageoire dorsale', 'Nageoire anale']
      },
      {
        type: 'multiple_choice',
        question: 'À quoi servent les nageoires paires chez le poisson?',
        answer: 'À la stabilisation et à la direction',
        wrongAnswers: ['À la propulsion', 'À la respiration', 'À la digestion']
      },
      {
        type: 'multiple_choice',
        question: 'Comment un poisson nage-t-il?',
        answer: 'Par ondulation du corps',
        wrongAnswers: ['Par battement d\'ailes', 'Par ondulation des pattes', 'Par battement de la queue seule']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle nageoire fait généralement 25% de la surface du corps?',
        answer: 'Nageoire caudale',
        wrongAnswers: ['Nageoires paires', 'Nageoire dorsale', 'Nageoire anale']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rythme de nage lente chez le poisson?',
        answer: '2 battements par seconde',
        wrongAnswers: ['1 battement par seconde', '3 battements par seconde', '4 battements par seconde']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les nageoires paires servent à la stabilisation',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les nageoires ont exactement la même fonction',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un poisson nage par ondulation du corps',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La nageoire caudale sert à la propulsion principale',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un poisson nage par _____ du corps',
        answer: 'ondulation',
        wrongAnswers: ['contraction', 'rotation', 'vibration']
      },
      {
        type: 'multiple_choice',
        question: 'Le rythme de nage lente est de combien de battements par seconde?',
        answer: '2',
        wrongAnswers: ['1', '3', '4']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ sert à la propulsion principale chez le poisson',
        answer: 'nageoire caudale',
        wrongAnswers: ['nageoire dorsale', 'nageoire pectorale', 'nageoire ventrale']
      },
      // Drag and Drop - Ordering (fin functions: propulsion, stabilization, direction)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nageoires par importance pour la propulsion: (nageoire caudale), (nageoires paires), (nageoire dorsale)',
        answer: ['nageoire caudale', 'nageoires paires', 'nageoire dorsale'], // Most important to least for propulsion
        wordBank: ['nageoire caudale', 'nageoires paires', 'nageoire dorsale'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle nageoire sert à la propulsion principale chez le poisson? Glisse la réponse:',
        answer: 'Nageoire caudale',
        wordBank: ['Nageoires paires', 'Nageoire caudale', 'Nageoire dorsale', 'Nageoire anale'],
        mode: 'select'
      },
      // Drag and Drop - Selection (function)
      {
        type: 'drag_and_drop',
        question: 'À quoi servent les nageoires paires chez le poisson? Glisse la réponse:',
        answer: 'À la stabilisation et à la direction',
        wordBank: ['À la propulsion', 'À la stabilisation et à la direction', 'À la respiration', 'À la digestion'],
        mode: 'select'
      },
      // Drag and Drop - Selection (movement)
      {
        type: 'drag_and_drop',
        question: 'Comment un poisson nage-t-il? Glisse la réponse:',
        answer: 'Par ondulation du corps',
        wordBank: ['Par battement d\'ailes', 'Par ondulation du corps', 'Par ondulation des pattes', 'Par battement de la queue seule'],
        mode: 'select'
      }
    ]
  },

  'ch2-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un serpent a généralement 150-200 écailles ventrales", answer: "vrai" },
      { question: "Tous les serpents se déplacent de la même manière", answer: "faux" },
      { question: "Un serpent rampe par ondulation latérale", answer: "vrai" },
      { question: "Un lombric a généralement 100-150 anneaux", answer: "vrai" },
      { question: "Un lombric a 8 paires de crochets par segment pour se déplacer", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien d\'écailles ventrales a généralement un serpent?',
        answer: '150-200',
        wrongAnswers: ['100-150', '200-250', '50-100']
      },
      {
        type: 'multiple_choice',
        question: 'Comment un serpent rampe-t-il?',
        answer: 'Par ondulation latérale',
        wrongAnswers: ['Par battement de queue', 'Par contraction-extension', 'Par saut']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de segments a généralement un lombric?',
        answer: '100-150 anneaux',
        wrongAnswers: ['50-100 anneaux', '150-200 anneaux', '200-250 anneaux']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de paires de crochets a un lombric par segment?',
        answer: '8 paires',
        wrongAnswers: ['4 paires', '6 paires', '10 paires']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la différence principale entre le mouvement d\'un serpent et d\'un lombric?',
        answer: 'Serpent: ondulation latérale | Lombric: contraction-extension',
        wrongAnswers: ['Ils sont identiques', 'Serpent: contraction | Lombric: ondulation', 'Serpent: saut | Lombric: nage']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un serpent rampe par ondulation latérale',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les serpents se déplacent de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un lombric a généralement 100-150 anneaux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un lombric a 8 paires de crochets par segment',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un lombric a combien de paires de crochets par segment?',
        answer: '8',
        wrongAnswers: ['6', '10', '12']
      },
      {
        type: 'multiple_choice',
        question: 'Un serpent rampe par _____ latérale',
        answer: 'ondulation',
        wrongAnswers: ['contraction', 'rotation', 'vibration']
      },
      {
        type: 'multiple_choice',
        question: 'Un lombric a généralement combien d\'anneaux?',
        answer: '100-150',
        wrongAnswers: ['50-100', '150-200', '200-250']
      },
      // Drag and Drop - Ordering (number of scales/segments from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres du plus petit au plus grand: (100-150), (150-200), (8)',
        answer: ['8', '100-150', '150-200'], // 8 < 100-150 < 150-200
        wordBank: ['8', '100-150', '150-200'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien d\'écailles ventrales a généralement un serpent? Glisse la réponse:',
        answer: '150-200',
        wordBank: ['100-150', '150-200', '200-250', '50-100'],
        mode: 'select'
      },
      // Drag and Drop - Selection (movement)
      {
        type: 'drag_and_drop',
        question: 'Comment un serpent rampe-t-il? Glisse la réponse:',
        answer: 'Par ondulation latérale',
        wordBank: ['Par battement de queue', 'Par ondulation latérale', 'Par contraction-extension', 'Par saut'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la différence principale entre le mouvement d\'un serpent et d\'un lombric? Glisse la réponse:',
        answer: 'Serpent: ondulation latérale | Lombric: contraction-extension',
        wordBank: ['Ils sont identiques', 'Serpent: ondulation latérale | Lombric: contraction-extension', 'Serpent: contraction | Lombric: ondulation', 'Serpent: saut | Lombric: nage'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 3: LA NUTRITION DES PLANTES
  'ch3-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La photosynthèse nécessite de la lumière pour produire de l'amidon", answer: "vrai" },
      { question: "Une plante peut faire de la photosynthèse sans lumière", answer: "faux" },
      { question: "On teste l'amidon avec de l'eau iodée", answer: "vrai" },
      { question: "Une plante à l'obscurité devient jaune car elle ne peut plus produire de chlorophylle", answer: "vrai" },
      { question: "Le test à l'iode donne une couleur noire si l'amidon est présent", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment testes-tu la présence d\'amidon dans une plante?',
        answer: 'Avec de l\'eau iodée',
        wrongAnswers: ['Avec de l\'eau pure', 'Avec du sucre', 'Avec de la lumière']
      },
      {
        type: 'multiple_choice',
        question: 'Que prouve le test à l\'iode positif (couleur noire)?',
        answer: 'La présence d\'amidon',
        wrongAnswers: ['L\'absence d\'amidon', 'La présence de chlorophylle', 'L\'absence de chlorophylle']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi une plante à l\'obscurité devient-elle jaune?',
        answer: 'Parce qu\'elle ne peut plus faire de photosynthèse',
        wrongAnswers: ['Parce qu\'elle a trop d\'eau', 'Parce qu\'elle manque d\'eau', 'Parce qu\'elle est malade']
      },
      {
        type: 'multiple_choice',
        question: 'Que prouve l\'expérience de photosynthèse (plante en lumière vs obscurité)?',
        answer: 'La lumière est nécessaire pour la photosynthèse',
        wrongAnswers: ['La lumière n\'est pas nécessaire', 'Toutes les plantes ont besoin d\'obscurité', 'L\'obscurité aide la photosynthèse']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qui se passe après 6 jours: plant A en lumière, plant B en obscurité?',
        answer: 'Plant A reste vert, plant B devient jaune',
        wrongAnswers: ['Les deux deviennent jaunes', 'Plant A devient jaune, plant B reste vert', 'Les deux restent verts']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une plante à l\'obscurité peut faire de la photosynthèse',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le test à l\'iode donne une couleur noire si l\'amidon est présent',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les plantes peuvent faire de la photosynthèse sans lumière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La lumière est nécessaire pour la photosynthèse',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Si le test à l\'iode donne une couleur _____, l\'amidon est présent',
        answer: 'noire',
        wrongAnswers: ['bleue', 'rouge', 'jaune']
      },
      {
        type: 'multiple_choice',
        question: 'On teste l\'amidon avec de l\'eau:',
        answer: 'iodée',
        wrongAnswers: ['salée', 'sucrée', 'distillée']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ est nécessaire pour la photosynthèse',
        answer: 'lumière',
        wrongAnswers: ['eau', 'chaleur', 'vent']
      },
      // Drag and Drop - Ordering (experiment steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes d\'expérience dans l\'ordre: (Placer plante en lumière), (Tester avec iode), (Observer résultat)',
        answer: ['Placer plante en lumière', 'Tester avec iode', 'Observer résultat'], // Logical order
        wordBank: ['Placer plante en lumière', 'Tester avec iode', 'Observer résultat'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment testes-tu la présence d\'amidon dans une plante? Glisse la réponse:',
        answer: 'Avec de l\'eau iodée',
        wordBank: ['Avec de l\'eau pure', 'Avec de l\'eau iodée', 'Avec du sucre', 'Avec de la lumière'],
        mode: 'select'
      },
      // Drag and Drop - Selection (interpretation)
      {
        type: 'drag_and_drop',
        question: 'Que prouve le test à l\'iode positif (couleur noire)? Glisse la réponse:',
        answer: 'La présence d\'amidon',
        wordBank: ['L\'absence d\'amidon', 'La présence d\'amidon', 'La présence de chlorophylle', 'L\'absence de chlorophylle'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conclusion)
      {
        type: 'drag_and_drop',
        question: 'Que prouve l\'expérience de photosynthèse (plante en lumière vs obscurité)? Glisse la réponse:',
        answer: 'La lumière est nécessaire pour la photosynthèse',
        wordBank: ['La lumière n\'est pas nécessaire', 'La lumière est nécessaire pour la photosynthèse', 'Toutes les plantes ont besoin d\'obscurité', 'L\'obscurité aide la photosynthèse'],
        mode: 'select'
      }
    ]
  },

  'ch3-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La transpiration est la perte d'eau par les feuilles", answer: "vrai" },
      { question: "Toutes les plantes transpirent exactement la même quantité d'eau", answer: "faux" },
      { question: "Les stomates permettent la transpiration et les échanges gazeux", answer: "vrai" },
      { question: "On mesure la transpiration en pesant la plante avant et après", answer: "vrai" },
      { question: "Une plante avec feuilles perd généralement plus d'eau qu'une sans feuilles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment mesure-t-on la transpiration d\'une plante?',
        answer: 'En pesant la plante avant et après',
        wrongAnswers: ['En mesurant la hauteur', 'En comptant les feuilles', 'En mesurant la température']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la perte d\'eau si m₀ = 50g et m₁ = 48g:',
        answer: '2 g',
        wrongAnswers: ['1 g', '3 g', '4 g']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule pour calculer la perte d\'eau?',
        answer: 'Perte d\'eau = m₀ - m₁',
        wrongAnswers: ['Perte d\'eau = m₀ + m₁', 'Perte d\'eau = m₁ - m₀', 'Perte d\'eau = m₀ × m₁']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les stomates sont-ils importants?',
        answer: 'Ils permettent la transpiration et les échanges gazeux',
        wrongAnswers: ['Ils produisent de l\'amidon', 'Ils absorbent l\'eau', 'Ils transportent la sève']
      },
      {
        type: 'multiple_choice',
        question: 'Si m₀ = 60g et m₁ = 57g, calcule la perte d\'eau:',
        answer: '3 g',
        wrongAnswers: ['2 g', '4 g', '5 g']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les stomates permettent la transpiration',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les plantes transpirent exactement la même quantité d\'eau',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une plante avec feuilles perd généralement plus d\'eau qu\'une sans feuilles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La perte d\'eau = m₀ - m₁',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Perte d\'eau = m₀ - ?',
        answer: 'm₁',
        wrongAnswers: ['m₂', 'm₃', 'm₀']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la perte d\'eau si m₀ = 50g et m₁ = 48g:',
        answer: '2 g',
        wrongAnswers: ['1 g', '3 g', '4 g']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ est la perte d\'eau par les feuilles',
        answer: 'transpiration',
        wrongAnswers: ['respiration', 'photosynthèse', 'évaporation']
      },
      // Drag and Drop - Ordering (water loss from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces pertes d\'eau du plus petit au plus grand: (2 g), (3 g), (4 g)',
        answer: ['2', '3', '4'], // 2 < 3 < 4
        wordBank: ['2', '3', '4'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la perte d\'eau si m₀ = 50g et m₁ = 48g. Glisse la réponse:',
        answer: '2',
        wordBank: ['1', '2', '3', '4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (formula)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la formule pour calculer la perte d\'eau? Glisse la réponse:',
        answer: 'Perte d\'eau = m₀ - m₁',
        wordBank: ['Perte d\'eau = m₀ - m₁', 'Perte d\'eau = m₀ + m₁', 'Perte d\'eau = m₁ - m₀', 'Perte d\'eau = m₀ × m₁'],
        mode: 'select'
      },
      // Drag and Drop - Selection (function)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi les stomates sont-ils importants? Glisse la réponse:',
        answer: 'Ils permettent la transpiration et les échanges gazeux',
        wordBank: ['Ils produisent de l\'amidon', 'Ils permettent la transpiration et les échanges gazeux', 'Ils absorbent l\'eau', 'Ils transportent la sève'],
        mode: 'select'
      }
    ]
  },

  'ch3-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La racine absorbe l'eau et les sels minéraux du sol", answer: "vrai" },
      { question: "Toutes les parties de la plante ont exactement la même fonction", answer: "faux" },
      { question: "La tige transporte la sève vers toutes les parties de la plante", answer: "vrai" },
      { question: "Les feuilles font la photosynthèse grâce à la chlorophylle", answer: "vrai" },
      { question: "Les stomates se trouvent principalement sur la face inférieure des feuilles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la fonction principale des feuilles?',
        answer: 'Photosynthèse et respiration',
        wrongAnswers: ['Absorption d\'eau', 'Transport de la sève', 'Ancrage au sol']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle partie de la plante absorbe l\'eau et les sels minéraux?',
        answer: 'La racine',
        wrongAnswers: ['La tige', 'Les feuilles', 'Les fleurs']
      },
      {
        type: 'multiple_choice',
        question: 'Où se trouvent principalement les stomates?',
        answer: 'Sur la face inférieure des feuilles',
        wrongAnswers: ['Sur la tige', 'Sur les racines', 'Sur la face supérieure des feuilles']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle partie de la plante transporte la sève?',
        answer: 'La tige',
        wrongAnswers: ['La racine', 'Les feuilles', 'Les fleurs']
      },
      {
        type: 'multiple_choice',
        question: 'Que vois-tu au microscope ×400 dans une racine?',
        answer: 'Les poils absorbants colorés en rouge',
        wrongAnswers: ['Les chloroplastes verts', 'Les stomates', 'Les plumes']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La racine absorbe l\'eau et les sels minéraux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les parties de la plante ont exactement la même fonction',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les feuilles font la photosynthèse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les stomates se trouvent sur la face inférieure des feuilles',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La _____ transporte la sève',
        answer: 'tige',
        wrongAnswers: ['racine', 'feuille', 'fleur']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ absorbe l\'eau et les sels minéraux',
        answer: 'racine',
        wrongAnswers: ['tige', 'feuille', 'fleur']
      },
      {
        type: 'multiple_choice',
        question: 'Les poils absorbants sont observés au microscope ×?',
        answer: '400',
        wrongAnswers: ['100', '200', '800']
      },
      // Drag and Drop - Ordering (plant parts from bottom to top)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces parties de la plante de bas en haut: (racine), (tige), (feuille)',
        answer: ['racine', 'tige', 'feuille'], // Bottom to top
        wordBank: ['racine', 'tige', 'feuille'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle partie de la plante absorbe l\'eau et les sels minéraux? Glisse la réponse:',
        answer: 'La racine',
        wordBank: ['La racine', 'La tige', 'Les feuilles', 'Les fleurs'],
        mode: 'select'
      },
      // Drag and Drop - Selection (function)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la fonction principale des feuilles? Glisse la réponse:',
        answer: 'Photosynthèse et respiration',
        wordBank: ['Absorption d\'eau', 'Photosynthèse et respiration', 'Transport de la sève', 'Ancrage au sol'],
        mode: 'select'
      },
      // Drag and Drop - Selection (location)
      {
        type: 'drag_and_drop',
        question: 'Où se trouvent principalement les stomates? Glisse la réponse:',
        answer: 'Sur la face inférieure des feuilles',
        wordBank: ['Sur la tige', 'Sur la face inférieure des feuilles', 'Sur les racines', 'Sur la face supérieure des feuilles'],
        mode: 'select'
      }
    ]
  },

  'ch3-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le riz pluvial se sème généralement en juin-juillet", answer: "vrai" },
      { question: "Tous les types de riz ont exactement le même cycle de culture", answer: "faux" },
      { question: "Le cycle de culture du riz dure généralement 120 jours", answer: "vrai" },
      { question: "On irrigue traditionnellement le riz par marigot", answer: "vrai" },
      { question: "La récolte du riz se fait généralement en octobre-novembre", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de jours dure généralement le cycle de culture du riz?',
        answer: '120 jours',
        wrongAnswers: ['90 jours', '150 jours', '180 jours']
      },
      {
        type: 'multiple_choice',
        question: 'Quand sème-t-on généralement le riz pluvial?',
        answer: 'Juin-juillet',
        wrongAnswers: ['Mars-avril', 'Septembre-octobre', 'Décembre-janvier']
      },
      {
        type: 'multiple_choice',
        question: 'Quand se fait généralement la récolte du riz?',
        answer: 'Octobre-novembre',
        wrongAnswers: ['Juin-juillet', 'Mars-avril', 'Décembre-janvier']
      },
      {
        type: 'multiple_choice',
        question: 'Comment irrigue-t-on traditionnellement les rizières?',
        answer: 'Par marigot (canal traditionnel)',
        wrongAnswers: ['Par pluie seulement', 'Par irrigation goutte à goutte', 'Par arrosage manuel']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la caractéristique principale du riz pluvial?',
        answer: 'Il résiste mieux à la sécheresse',
        wrongAnswers: ['Il pousse dans l\'eau', 'Il ne nécessite pas d\'eau', 'Il pousse en hiver']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On irrigue le riz par marigot',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les types de riz ont exactement le même cycle de culture',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le riz pluvial résiste généralement à la sécheresse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cycle de culture du riz dure généralement 120 jours',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La récolte du riz se fait généralement en:',
        answer: 'octobre-novembre',
        wrongAnswers: ['juin-juillet', 'août-septembre', 'décembre-janvier']
      },
      {
        type: 'multiple_choice',
        question: 'Le riz pluvial se sème généralement en:',
        answer: 'juin-juillet',
        wrongAnswers: ['octobre-novembre', 'août-septembre', 'avril-mai']
      },
      {
        type: 'multiple_choice',
        question: 'Le cycle de culture du riz dure généralement combien de jours?',
        answer: '120 jours',
        wrongAnswers: ['90 jours', '150 jours', '180 jours']
      },
      // Drag and Drop - Ordering (rice cycle steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes de culture du riz dans l\'ordre: (Semis), (Croissance), (Récolte)',
        answer: ['Semis', 'Croissance', 'Récolte'], // Logical order
        wordBank: ['Semis', 'Croissance', 'Récolte'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de jours dure généralement le cycle de culture du riz? Glisse la réponse:',
        answer: '120',
        wordBank: ['90', '120', '150', '180'],
        mode: 'select'
      },
      // Drag and Drop - Selection (timing)
      {
        type: 'drag_and_drop',
        question: 'Quand sème-t-on généralement le riz pluvial? Glisse la réponse:',
        answer: 'Juin-juillet',
        wordBank: ['Mars-avril', 'Juin-juillet', 'Septembre-octobre', 'Décembre-janvier'],
        mode: 'select'
      },
      // Drag and Drop - Selection (irrigation)
      {
        type: 'drag_and_drop',
        question: 'Comment irrigue-t-on traditionnellement les rizières? Glisse la réponse:',
        answer: 'Par marigot (canal traditionnel)',
        wordBank: ['Par pluie seulement', 'Par marigot (canal traditionnel)', 'Par irrigation goutte à goutte', 'Par arrosage manuel'],
        mode: 'select'
      }
    ]
  },

  'ch3-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Une plante devient jaune à l'obscurité car elle ne peut plus faire de photosynthèse", answer: "vrai" },
      { question: "Toutes les plantes perdent exactement la même quantité d'eau", answer: "faux" },
      { question: "Une plante perd de l'eau principalement par les stomates des feuilles", answer: "vrai" },
      { question: "La racine absorbe l'eau avec ses poils absorbants", answer: "vrai" },
      { question: "Si on coupe les feuilles, la plante ne peut plus faire de photosynthèse", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (review)
      {
        type: 'multiple_choice',
        question: 'Pourquoi une plante devient-elle jaune à l\'obscurité?',
        answer: 'Parce qu\'elle ne peut plus faire de photosynthèse',
        wrongAnswers: ['Parce qu\'elle a trop d\'eau', 'Parce qu\'elle manque d\'eau', 'Parce qu\'elle est malade']
      },
      {
        type: 'multiple_choice',
        question: 'Que se passe-t-il si on coupe les feuilles d\'une plante?',
        answer: 'Elle ne peut plus faire de photosynthèse et meurt',
        wrongAnswers: ['Elle pousse plus vite', 'Elle produit plus d\'amidon', 'Elle absorbe plus d\'eau']
      },
      {
        type: 'multiple_choice',
        question: 'Comment la racine absorbe-t-elle l\'eau?',
        answer: 'Avec ses poils absorbants',
        wrongAnswers: ['Avec ses stomates', 'Avec ses feuilles', 'Avec sa tige']
      },
      {
        type: 'multiple_choice',
        question: 'Comment améliorer la culture du riz?',
        answer: 'Bien irriguer, désherber, surveiller les maladies',
        wrongAnswers: ['Ne pas arroser du tout', 'Couper toutes les feuilles', 'Mettre à l\'obscurité']
      },
      {
        type: 'multiple_choice',
        question: 'Par où une plante perd-elle principalement de l\'eau?',
        answer: 'Par les stomates des feuilles',
        wrongAnswers: ['Par les racines', 'Par la tige', 'Par les fleurs']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une plante perd de l\'eau par les stomates',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les plantes perdent exactement la même quantité d\'eau',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Si on coupe les feuilles, la plante ne peut plus faire de photosynthèse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La racine absorbe l\'eau avec ses poils absorbants',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (review)
      {
        type: 'multiple_choice',
        question: 'La racine absorbe l\'eau avec ses _____ absorbants',
        answer: 'poils',
        wrongAnswers: ['racines', 'vaisseaux', 'cellules']
      },
      {
        type: 'multiple_choice',
        question: 'Une plante perd de l\'eau principalement par les _____ des feuilles',
        answer: 'stomates',
        wrongAnswers: ['pores', 'vaisseaux', 'cellules']
      },
      {
        type: 'multiple_choice',
        question: 'Pour améliorer la culture, il faut bien:',
        answer: 'irriguer',
        wrongAnswers: ['fertiliser', 'semer', 'récolter']
      },
      // Drag and Drop - Ordering (plant nutrition processes)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces processus de nutrition dans l\'ordre: (Absorption eau), (Transport sève), (Photosynthèse)',
        answer: ['Absorption eau', 'Transport sève', 'Photosynthèse'], // Logical order
        wordBank: ['Absorption eau', 'Transport sève', 'Photosynthèse'], // Exactly 3 items for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi une plante devient-elle jaune à l\'obscurité? Glisse la réponse:',
        answer: 'Parce qu\'elle ne peut plus faire de photosynthèse',
        wordBank: ['Parce qu\'elle a trop d\'eau', 'Parce qu\'elle ne peut plus faire de photosynthèse', 'Parce qu\'elle manque d\'eau', 'Parce qu\'elle est malade'],
        mode: 'select'
      },
      // Drag and Drop - Selection (consequence)
      {
        type: 'drag_and_drop',
        question: 'Que se passe-t-il si on coupe les feuilles d\'une plante? Glisse la réponse:',
        answer: 'Elle ne peut plus faire de photosynthèse et meurt',
        wordBank: ['Elle pousse plus vite', 'Elle ne peut plus faire de photosynthèse et meurt', 'Elle produit plus d\'amidon', 'Elle absorbe plus d\'eau'],
        mode: 'select'
      },
      // Drag and Drop - Selection (application)
      {
        type: 'drag_and_drop',
        question: 'Comment améliorer la culture du riz? Glisse la réponse:',
        answer: 'Bien irriguer, désherber, surveiller les maladies',
        wordBank: ['Ne pas arroser du tout', 'Bien irriguer, désherber, surveiller les maladies', 'Couper toutes les feuilles', 'Mettre à l\'obscurité'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 4: LA NUTRITION CHEZ LES ANIMAUX
  'ch4-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une souris femelle a 5 paires de mamelles ventrales pour allaiter ses petits", answer: "vrai" },
      { question: "Tous les mammifères ont toujours le même nombre de mamelles", answer: "faux" },
      { question: "L'intestin d'une souris fait environ 4× la longueur du corps pour digérer correctement les aliments", answer: "vrai" },
      { question: "Une souris de 10cm a un intestin de 40cm car la longueur de l'intestin est proportionnelle à la taille du corps", answer: "vrai" },
      { question: "On identifie le sexe d'une souris par les mamelles chez la femelle ou les testicules chez le mâle", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de paires de mamelles a une souris femelle?',
        answer: '5 paires',
        wrongAnswers: ['3 paires', '7 paires', '10 paires']
      },
      {
        type: 'multiple_choice',
        question: 'Comment reconnais-tu une souris femelle?',
        answer: 'Par les 5 paires de mamelles ventrales',
        wrongAnswers: ['Par la taille', 'Par la couleur', 'Par la longueur de la queue']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la longueur de l\'intestin d\'une souris de 8cm',
        answer: '32 cm',
        wrongAnswers: ['24 cm', '40 cm', '16 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la longueur de l\'intestin d\'une souris de 12cm',
        answer: '48 cm',
        wrongAnswers: ['36 cm', '24 cm', '60 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi l\'intestin d\'une souris est-il si long?',
        answer: 'Pour digérer correctement les aliments',
        wrongAnswers: ['Pour stocker la nourriture', 'Pour filtrer le sang', 'Pour respirer']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une souris femelle a 5 paires de mamelles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les mammifères ont toujours le même nombre de mamelles',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'intestin d\'une souris fait environ 4× la longueur du corps',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On identifie le sexe par les mamelles ou les testicules',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Une souris femelle a combien de paires de mamelles?',
        answer: '5',
        wrongAnswers: ['3', '7', '4']
      },
      {
        type: 'multiple_choice',
        question: 'L\'intestin d\'une souris de 10cm fait combien de cm?',
        answer: '40 cm',
        wrongAnswers: ['30 cm', '50 cm', '20 cm']
      },
      {
        type: 'multiple_choice',
        question: 'L\'intestin d\'une souris fait environ combien de fois la longueur du corps?',
        answer: '4',
        wrongAnswers: ['3', '5', '6']
      },
      // Drag and Drop - Ordering (lengths from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces longueurs d\'intestin du plus petit au plus grand: 32 cm, 40 cm, 48 cm',
        answer: ['32 cm', '40 cm', '48 cm'], // 32 < 40 < 48
        wordBank: ['32 cm', '40 cm', '48 cm'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de paires de mamelles a une souris femelle? Glisse la réponse:',
        answer: '5 paires',
        wordBank: ['3 paires', '7 paires', '5 paires', '10 paires'],
        mode: 'select'
      },
      // Drag and Drop - Selection (calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule la longueur de l\'intestin d\'une souris de 8cm. Glisse le résultat:',
        answer: '32 cm',
        wordBank: ['24 cm', '40 cm', '32 cm', '16 cm'],
        mode: 'select'
      },
      // Drag and Drop - Selection (identification)
      {
        type: 'drag_and_drop',
        question: 'Comment reconnais-tu une souris femelle? Glisse la réponse:',
        answer: 'Par les 5 paires de mamelles ventrales',
        wordBank: ['Par la taille', 'Par la couleur', 'Par les 5 paires de mamelles ventrales', 'Par la longueur de la queue'],
        mode: 'select'
      }
    ]
  },

  'ch4-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une vache a des molaires plates pour broyer les végétaux qu'elle mange", answer: "vrai" },
      { question: "Tous les animaux ont toujours les mêmes types de dents", answer: "faux" },
      { question: "Un lion a de longues canines pour déchiqueter la viande", answer: "vrai" },
      { question: "Un herbivore a un long intestin pour digérer les végétaux difficiles à assimiler", answer: "vrai" },
      { question: "Un carnivore a un court intestin car la viande est plus facile à digérer que les végétaux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pourquoi une vache a-t-elle des molaires plates?',
        answer: 'Pour broyer les végétaux',
        wrongAnswers: ['Pour déchiqueter la viande', 'Pour mordre', 'Pour chasser']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les lions ont-ils de longues canines?',
        answer: 'Pour déchiqueter la viande',
        wrongAnswers: ['Pour broyer les végétaux', 'Pour nager', 'Pour voler']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle caractéristique distingue un herbivore d\'un carnivore?',
        answer: 'Long intestin et molaires plates',
        wrongAnswers: ['Court intestin et canines longues', 'Pas d\'intestin', 'Dentition identique']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les herbivores ont-ils un long intestin?',
        answer: 'Pour digérer les végétaux difficiles à assimiler',
        wrongAnswers: ['Pour stocker la nourriture', 'Pour filtrer le sang', 'Pour respirer']
      },
      {
        type: 'multiple_choice',
        question: 'Classe selon le régime: vache, lion, homme',
        answer: 'Vache: herbivore | Lion: carnivore | Homme: omnivore',
        wrongAnswers: ['Vache: carnivore | Lion: herbivore | Homme: herbivore', 'Tous herbivores', 'Tous carnivores']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une vache a des molaires plates pour broyer',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les animaux ont toujours les mêmes types de dents',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un herbivore a un long intestin pour digérer les végétaux difficiles à assimiler',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un omnivore a une dentition mixte',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Une vache a des molaires _____ pour broyer',
        answer: 'plates',
        wrongAnswers: ['pointues', 'courtes', 'longues']
      },
      {
        type: 'multiple_choice',
        question: 'Un herbivore a un _____ intestin',
        answer: 'long',
        wrongAnswers: ['court', 'moyen', 'petit']
      },
      {
        type: 'multiple_choice',
        question: 'Un lion a de longues _____ pour déchiqueter la viande',
        answer: 'canines',
        wrongAnswers: ['molaires', 'incisives', 'prémolaires']
      },
      // Drag and Drop - Ordering (by diet complexity)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces animaux par longueur d\'intestin: Herbivore, Carnivore, Omnivore',
        answer: ['Carnivore', 'Omnivore', 'Herbivore'], // Court, moyen, long
        wordBank: ['Carnivore', 'Omnivore', 'Herbivore'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi une vache a-t-elle des molaires plates? Glisse la réponse:',
        answer: 'Pour broyer les végétaux',
        wordBank: ['Pour déchiqueter la viande', 'Pour mordre', 'Pour broyer les végétaux', 'Pour chasser'],
        mode: 'select'
      },
      // Drag and Drop - Selection (lion characteristics)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi les lions ont-ils de longues canines? Glisse la réponse:',
        answer: 'Pour déchiqueter la viande',
        wordBank: ['Pour broyer les végétaux', 'Pour nager', 'Pour déchiqueter la viande', 'Pour voler'],
        mode: 'select'
      },
      // Drag and Drop - Selection (classification)
      {
        type: 'drag_and_drop',
        question: 'Classe selon le régime: vache, lion, homme. Glisse la réponse:',
        answer: 'Vache: herbivore | Lion: carnivore | Homme: omnivore',
        wordBank: ['Vache: carnivore | Lion: herbivore | Homme: herbivore', 'Tous herbivores', 'Vache: herbivore | Lion: carnivore | Homme: omnivore', 'Tous carnivores'],
        mode: 'select'
      }
    ]
  },

  'ch4-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'estomac d'un ruminant a 4 compartiments pour digérer les végétaux efficacement", answer: "vrai" },
      { question: "Tous les animaux ont toujours le même nombre de compartiments dans l'estomac", answer: "faux" },
      { question: "Le rumen fait la fermentation microbienne de la cellulose grâce aux bactéries présentes", answer: "vrai" },
      { question: "Le réticulum forme les boulettes qui seront ruminées plus tard", answer: "vrai" },
      { question: "L'omasum absorbe l'eau et les nutriments avant que la nourriture n'atteigne l'abomasum", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de compartiments a l\'estomac d\'un ruminant?',
        answer: '4 compartiments',
        wrongAnswers: ['2 compartiments', '6 compartiments', '1 compartiment']
      },
      {
        type: 'multiple_choice',
        question: 'Quel compartiment fait la fermentation microbienne de la cellulose?',
        answer: 'Le rumen',
        wrongAnswers: ['Le réticulum', 'L\'omasum', 'L\'abomasum']
      },
      {
        type: 'multiple_choice',
        question: 'Quel compartiment absorbe l\'eau?',
        answer: 'L\'omasum',
        wrongAnswers: ['Le rumen', 'Le réticulum', 'L\'abomasum']
      },
      {
        type: 'multiple_choice',
        question: 'Quel compartiment forme les boulettes?',
        answer: 'Le réticulum',
        wrongAnswers: ['Le rumen', 'L\'omasum', 'L\'abomasum']
      },
      {
        type: 'multiple_choice',
        question: 'Que font les bactéries dans le rumen?',
        answer: 'Elles décomposent la cellulose des végétaux',
        wrongAnswers: ['Elles absorbent l\'eau', 'Elles forment les boulettes', 'Elles digèrent les protéines']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'estomac d\'un ruminant a 4 compartiments',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les animaux ont toujours le même nombre de compartiments dans l\'estomac',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le rumen fait la fermentation microbienne',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'abomasum fait la digestion enzymatique',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'estomac d\'un ruminant a combien de compartiments?',
        answer: '4',
        wrongAnswers: ['2', '3', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ forme les boulettes',
        answer: 'réticulum',
        wrongAnswers: ['rumen', 'omasum', 'caillette']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ absorbe l\'eau',
        answer: 'omasum',
        wrongAnswers: ['rumen', 'réticulum', 'caillette']
      },
      // Drag and Drop - Ordering (digestion steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez les étapes de la rumination: Réticulum, Rumen, Omasum, Abomasum',
        answer: ['Rumen', 'Réticulum', 'Omasum', 'Abomasum'], // Order of digestion
        wordBank: ['Rumen', 'Réticulum', 'Omasum', 'Abomasum'], // Exactly 4 for 4 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de compartiments a l\'estomac d\'un ruminant? Glisse la réponse:',
        answer: '4 compartiments',
        wordBank: ['2 compartiments', '6 compartiments', '4 compartiments', '1 compartiment'],
        mode: 'select'
      },
      // Drag and Drop - Selection (compartment function)
      {
        type: 'drag_and_drop',
        question: 'Quel compartiment fait la fermentation microbienne? Glisse la réponse:',
        answer: 'Le rumen',
        wordBank: ['Le réticulum', 'L\'omasum', 'Le rumen', 'L\'abomasum'],
        mode: 'select'
      },
      // Drag and Drop - Selection (bacteria function)
      {
        type: 'drag_and_drop',
        question: 'Que font les bactéries dans le rumen? Glisse la réponse:',
        answer: 'Elles décomposent la cellulose des végétaux',
        wordBank: ['Elles absorbent l\'eau', 'Elles forment les boulettes', 'Elles décomposent la cellulose des végétaux', 'Elles digèrent les protéines'],
        mode: 'select'
      }
    ]
  },

  'ch4-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un poulailler de 3m × 2m × 2m peut contenir environ 20 poules pour leur bien-être", answer: "vrai" },
      { question: "Tous les poulaillers peuvent toujours contenir le même nombre de poules", answer: "faux" },
      { question: "Il faut 30 cm de perche par poule pour qu'elles puissent se percher confortablement", answer: "vrai" },
      { question: "Il faut 1 nid pour 4 poules pour permettre la ponte des œufs", answer: "vrai" },
      { question: "Une poule mange environ 50g de maïs le matin pour se nourrir correctement", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de poules peut-on élever dans un poulailler de 3m × 2m × 2m?',
        answer: 'Environ 20 poules',
        wrongAnswers: ['Environ 10 poules', 'Environ 40 poules', 'Environ 5 poules']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de centimètres de perche faut-il par poule?',
        answer: '30 cm',
        wrongAnswers: ['20 cm', '50 cm', '10 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de poules peuvent partager un nid?',
        answer: '4 poules',
        wrongAnswers: ['2 poules', '6 poules', '8 poules']
      },
      {
        type: 'multiple_choice',
        question: 'Quand vaccine-t-on les poules contre la variole?',
        answer: 'À 6 semaines',
        wrongAnswers: ['À 2 semaines', 'À 10 semaines', 'À la naissance']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de maïs une poule mange-t-elle le matin?',
        answer: '50 g',
        wrongAnswers: ['30 g', '100 g', '25 g']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un poulailler de 3m × 2m × 2m peut contenir environ 20 poules',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les poulaillers peuvent toujours contenir le même nombre de poules',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Il faut 30 cm de perche par poule',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On vaccine les poules à 6 semaines contre la variole',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Il faut combien de cm de perche par poule?',
        answer: '30 cm',
        wrongAnswers: ['20 cm', '40 cm', '25 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Il faut 1 nid pour combien de poules?',
        answer: '4 poules',
        wrongAnswers: ['3 poules', '5 poules', '6 poules']
      },
      {
        type: 'multiple_choice',
        question: 'Une poule mange environ combien de g de maïs le matin?',
        answer: '50 g',
        wrongAnswers: ['40 g', '60 g', '30 g']
      },
      // Drag and Drop - Ordering (dimensions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces dimensions du plus petit au plus grand: 2m, 2m, 3m',
        answer: ['2m', '2m', '3m'], // 2 = 2 < 3
        wordBank: ['2m', '2m', '3m'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de poules peut-on élever dans un poulailler de 3m × 2m × 2m? Glisse la réponse:',
        answer: 'Environ 20 poules',
        wordBank: ['Environ 10 poules', 'Environ 40 poules', 'Environ 20 poules', 'Environ 5 poules'],
        mode: 'select'
      },
      // Drag and Drop - Selection (perch length)
      {
        type: 'drag_and_drop',
        question: 'Combien de centimètres de perche faut-il par poule? Glisse la réponse:',
        answer: '30 cm',
        wordBank: ['20 cm', '50 cm', '30 cm', '10 cm'],
        mode: 'select'
      },
      // Drag and Drop - Selection (feeding amount)
      {
        type: 'drag_and_drop',
        question: 'Combien de maïs une poule mange-t-elle le matin? Glisse la réponse:',
        answer: '50 g',
        wordBank: ['30 g', '100 g', '50 g', '25 g'],
        mode: 'select'
      }
    ]
  },

  'ch4-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Les herbivores ont un long intestin pour digérer les végétaux difficiles à assimiler", answer: "vrai" },
      { question: "Tous les animaux ont toujours la même longueur d'intestin", answer: "faux" },
      { question: "Un carnivore se reconnaît par ses longues canines pour déchiqueter la viande", answer: "vrai" },
      { question: "Le rumen fait la fermentation de la cellulose grâce aux bactéries présentes dans l'estomac", answer: "vrai" },
      { question: "Pour améliorer l'élevage, il faut bien nourrir, vacciner et surveiller la santé des animaux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Que se passe-t-il si une vache ne rumine pas?',
        answer: 'Elle ne peut pas digérer correctement et tombe malade',
        wrongAnswers: ['Elle digère mieux', 'Elle grandit plus vite', 'Rien ne change']
      },
      {
        type: 'multiple_choice',
        question: 'Que se passe-t-il dans le rumen?',
        answer: 'Fermentation microbienne de la cellulose',
        wrongAnswers: ['Absorption de l\'eau', 'Formation des boulettes', 'Digestion enzymatique']
      },
      {
        type: 'multiple_choice',
        question: 'Comment améliorer l\'élevage de poules?',
        answer: 'Bien nourrir, vacciner, nettoyer, surveiller les maladies',
        wrongAnswers: ['Augmenter le nombre de poules', 'Réduire l\'espace', 'Ne pas les nourrir']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les herbivores ont-ils un long intestin?',
        answer: 'Pour digérer les végétaux difficiles à assimiler',
        wrongAnswers: ['Pour stocker la nourriture', 'Pour filtrer le sang', 'Pour respirer']
      },
      {
        type: 'multiple_choice',
        question: 'Comment reconnaît-on un carnivore?',
        answer: 'Par ses longues canines',
        wrongAnswers: ['Par ses molaires plates', 'Par sa taille', 'Par sa couleur']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les herbivores ont un long intestin pour digérer les végétaux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les animaux ont toujours la même longueur d\'intestin',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour améliorer l\'élevage, il faut bien nourrir et vacciner',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si une vache ne rumine pas, elle tombe malade',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Les herbivores ont un _____ intestin pour digérer les végétaux',
        answer: 'long',
        wrongAnswers: ['court', 'moyen', 'petit']
      },
      {
        type: 'multiple_choice',
        question: 'Le rumen fait la _____ de la cellulose',
        answer: 'fermentation',
        wrongAnswers: ['digestion', 'absorption', 'sécrétion']
      },
      {
        type: 'multiple_choice',
        question: 'Pour améliorer l\'élevage, il faut bien nourrir et:',
        answer: 'vacciner',
        wrongAnswers: ['abattre', 'vendre', 'isoler']
      },
      // Drag and Drop - Ordering (digestion steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces étapes: Nourrir, Vacciner, Surveiller',
        answer: ['Nourrir', 'Vacciner', 'Surveiller'], // Logical ordering
        wordBank: ['Nourrir', 'Vacciner', 'Surveiller'], // Exactly 3 for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Que se passe-t-il si une vache ne rumine pas? Glisse la réponse:',
        answer: 'Elle ne peut pas digérer correctement et tombe malade',
        wordBank: ['Elle digère mieux', 'Elle grandit plus vite', 'Elle ne peut pas digérer correctement et tombe malade', 'Rien ne change'],
        mode: 'select'
      },
      // Drag and Drop - Selection (rumen function)
      {
        type: 'drag_and_drop',
        question: 'Que se passe-t-il dans le rumen? Glisse la réponse:',
        answer: 'Fermentation microbienne de la cellulose',
        wordBank: ['Absorption de l\'eau', 'Formation des boulettes', 'Fermentation microbienne de la cellulose', 'Digestion enzymatique'],
        mode: 'select'
      },
      // Drag and Drop - Selection (improving breeding)
      {
        type: 'drag_and_drop',
        question: 'Comment améliorer l\'élevage de poules? Glisse la réponse:',
        answer: 'Bien nourrir, vacciner, nettoyer, surveiller les maladies',
        wordBank: ['Augmenter le nombre de poules', 'Réduire l\'espace', 'Bien nourrir, vacciner, nettoyer, surveiller les maladies', 'Ne pas les nourrir'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 5: L'ÉCOSYSTÈME
  'ch5-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le PNBA (Parc National du Banc d'Arguin) se trouve aux coordonnées 20°50′N 16°30′W sur la côte mauritanienne", answer: "vrai" },
      { question: "Tous les parcs nationaux ont toujours la même superficie", answer: "faux" },
      { question: "Le PNBA fait 12 000 km² et est l'un des plus grands parcs côtiers d'Afrique", answer: "vrai" },
      { question: "On trouve des flamants roses au PNBA car c'est un site d'importance internationale pour les oiseaux migrateurs", answer: "vrai" },
      { question: "Le parc de Diawling restaure le delta du Sénégal pour protéger la biodiversité", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelles sont les coordonnées du PNBA?',
        answer: '20°50′N 16°30′W',
        wrongAnswers: ['20°50′S 16°30′E', '25°50′N 16°30′W', '20°50′N 20°30′W']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la superficie du PNBA?',
        answer: '12 000 km²',
        wrongAnswers: ['6 000 km²', '24 000 km²', '3 000 km²']
      },
      {
        type: 'multiple_choice',
        question: 'Quel parc restaure le delta du Sénégal?',
        answer: 'Le parc de Diawling',
        wrongAnswers: ['Le PNBA', 'Le parc national de Mauritanie', 'Le parc de Nouakchott']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de site est le PNBA?',
        answer: 'Un site Ramsar',
        wrongAnswers: ['Un site UNESCO', 'Un parc national seulement', 'Une réserve privée']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces espèces, laquelle trouve-t-on au PNBA?',
        answer: 'Flamant rose',
        wrongAnswers: ['Lion', 'Éléphant', 'Girafe']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le PNBA se trouve aux coordonnées 20°50′N 16°30′W',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les parcs nationaux ont toujours la même superficie',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On trouve des flamants roses au PNBA',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le PNBA est un site Ramsar',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le PNBA fait combien de km²?',
        answer: '12 000 km²',
        wrongAnswers: ['10 000 km²', '15 000 km²', '8 000 km²']
      },
      {
        type: 'multiple_choice',
        question: 'Le parc de Diawling restaure le _____ du Sénégal',
        answer: 'delta',
        wrongAnswers: ['fleuve', 'lac', 'océan']
      },
      {
        type: 'multiple_choice',
        question: 'Le PNBA est un site:',
        answer: 'Ramsar',
        wrongAnswers: ['UNESCO', 'WWF', 'UICN']
      },
      // Drag and Drop - Ordering (by size)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces superficies du plus petit au plus grand: 3 000 km², 12 000 km², 24 000 km²',
        answer: ['3 000 km²', '12 000 km²', '24 000 km²'], // 3000 < 12000 < 24000
        wordBank: ['3 000 km²', '12 000 km²', '24 000 km²'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la superficie du PNBA? Glisse la réponse:',
        answer: '12 000 km²',
        wordBank: ['6 000 km²', '24 000 km²', '12 000 km²', '3 000 km²'],
        mode: 'select'
      },
      // Drag and Drop - Selection (coordinates)
      {
        type: 'drag_and_drop',
        question: 'Quelles sont les coordonnées du PNBA? Glisse la réponse:',
        answer: '20°50′N 16°30′W',
        wordBank: ['20°50′S 16°30′E', '25°50′N 16°30′W', '20°50′N 16°30′W', '20°50′N 20°30′W'],
        mode: 'select'
      },
      // Drag and Drop - Selection (species)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces espèces, laquelle trouve-t-on au PNBA? Glisse la réponse:',
        answer: 'Flamant rose',
        wordBank: ['Lion', 'Éléphant', 'Flamant rose', 'Girafe'],
        mode: 'select'
      }
    ]
  },

  'ch5-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La pluviométrie moyenne à Néma est 249 mm/an car cette région reçoit plus de précipitations que les zones désertiques", answer: "vrai" },
      { question: "Toutes les villes de Mauritanie ont toujours la même pluviométrie", answer: "faux" },
      { question: "La pluviométrie moyenne à Atar est 65 mm/an car c'est une zone désertique", answer: "vrai" },
      { question: "Néma est plus humide qu'Atar car elle reçoit plus de pluie par an", answer: "vrai" },
      { question: "La pluviométrie varie beaucoup d'une année à l'autre à cause des changements climatiques et de la mousson", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne des pluies à Néma: 136, 179, 445, 304, 200, 165, 172, 415, 227 mm',
        answer: '249 mm',
        wrongAnswers: ['200 mm', '300 mm', '350 mm']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la pluviométrie moyenne à Atar?',
        answer: '65 mm/an',
        wrongAnswers: ['100 mm/an', '249 mm/an', '300 mm/an']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle ville est plus humide: Néma ou Atar?',
        answer: 'Néma (249 mm/an)',
        wrongAnswers: ['Atar (65 mm/an)', 'Elles sont égales', 'Aucune différence']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi la pluviométrie varie-t-elle?',
        answer: 'À cause des changements climatiques et de la mousson',
        wrongAnswers: ['Parce que toutes les années sont identiques', 'Parce qu\'il pleut toujours la même quantité', 'Parce que le climat ne change jamais']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de climat a Atar?',
        answer: 'Climat désertique',
        wrongAnswers: ['Climat sahélien', 'Climat tropical', 'Climat méditerranéen']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La pluviométrie moyenne à Néma est 249 mm/an',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les villes de Mauritanie ont toujours la même pluviométrie',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Néma est plus humide qu\'Atar',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La pluviométrie varie beaucoup d\'une année à l\'autre',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La pluviométrie moyenne à Néma est combien de mm/an?',
        answer: '249 mm/an',
        wrongAnswers: ['200 mm/an', '300 mm/an', '150 mm/an']
      },
      {
        type: 'multiple_choice',
        question: 'La pluviométrie moyenne à Atar est combien de mm/an?',
        answer: '65 mm/an',
        wrongAnswers: ['50 mm/an', '80 mm/an', '100 mm/an']
      },
      {
        type: 'multiple_choice',
        question: 'Atar a un climat:',
        answer: 'désertique',
        wrongAnswers: ['tropical', 'méditerranéen', 'tempéré']
      },
      // Drag and Drop - Ordering (precipitation from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces pluviométries du plus petit au plus grand: 65 mm/an, 249 mm/an, 300 mm/an',
        answer: ['65 mm/an', '249 mm/an', '300 mm/an'], // 65 < 249 < 300
        wordBank: ['65 mm/an', '249 mm/an', '300 mm/an'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la pluviométrie moyenne à Atar? Glisse la réponse:',
        answer: '65 mm/an',
        wordBank: ['100 mm/an', '249 mm/an', '65 mm/an', '300 mm/an'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison)
      {
        type: 'drag_and_drop',
        question: 'Quelle ville est plus humide: Néma ou Atar? Glisse la réponse:',
        answer: 'Néma (249 mm/an)',
        wordBank: ['Atar (65 mm/an)', 'Elles sont égales', 'Néma (249 mm/an)', 'Aucune différence'],
        mode: 'select'
      },
      // Drag and Drop - Selection (climate type)
      {
        type: 'drag_and_drop',
        question: 'Quel type de climat a Atar? Glisse la réponse:',
        answer: 'Climat désertique',
        wordBank: ['Climat sahélien', 'Climat tropical', 'Climat désertique', 'Climat méditerranéen'],
        mode: 'select'
      }
    ]
  },

  'ch5-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le sable est plus perméable que l'argile car il a des espaces plus grands entre les particules", answer: "vrai" },
      { question: "Tous les sols ont toujours la même perméabilité", answer: "faux" },
      { question: "L'eau s'écoule plus vite dans le sable que dans l'argile car le sable est plus perméable", answer: "vrai" },
      { question: "Le sable a des espaces plus grands entre les particules, ce qui permet à l'eau de s'écouler plus facilement", answer: "vrai" },
      { question: "L'argile retient mieux l'eau que le sable car elle a des espaces plus petits entre les particules", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel sol laisse passer l\'eau plus facilement: sable ou argile?',
        answer: 'Sable',
        wrongAnswers: ['Argile', 'Ils sont identiques', 'Aucun des deux']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de temps d\'écoulement pour le sable?',
        answer: '32 secondes',
        wrongAnswers: ['90 secondes', '60 secondes', '10 secondes']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de temps d\'écoulement pour l\'argile?',
        answer: '90 secondes',
        wrongAnswers: ['32 secondes', '60 secondes', '10 secondes']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le sable est-il plus perméable?',
        answer: 'Parce qu\'il a des espaces plus grands entre les particules',
        wrongAnswers: ['Parce qu\'il est plus lourd', 'Parce qu\'il est plus léger', 'Parce qu\'il est plus compact']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi l\'argile retient-elle mieux l\'eau?',
        answer: 'Parce qu\'elle a des espaces plus petits entre les particules',
        wrongAnswers: ['Parce qu\'elle est plus lourde', 'Parce qu\'elle est plus perméable', 'Parce qu\'elle est plus légère']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le sable est plus perméable que l\'argile',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les sols ont toujours la même perméabilité',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'eau s\'écoule plus vite dans le sable que dans l\'argile',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On mesure la perméabilité en mesurant le temps d\'écoulement',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le sable a des espaces plus _____ entre les particules',
        answer: 'grands',
        wrongAnswers: ['petits', 'moyens', 'étroits']
      },
      {
        type: 'multiple_choice',
        question: 'Le temps d\'écoulement pour le sable est combien de secondes?',
        answer: '32 secondes',
        wrongAnswers: ['25 secondes', '40 secondes', '50 secondes']
      },
      {
        type: 'multiple_choice',
        question: 'Le temps d\'écoulement pour l\'argile est combien de secondes?',
        answer: '90 secondes',
        wrongAnswers: ['70 secondes', '110 secondes', '80 secondes']
      },
      // Drag and Drop - Ordering (permeability times from fastest to slowest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces temps d\'écoulement du plus rapide au plus lent: 32 secondes, 60 secondes, 90 secondes',
        answer: ['32 secondes', '60 secondes', '90 secondes'], // 32 < 60 < 90
        wordBank: ['32 secondes', '60 secondes', '90 secondes'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel sol laisse passer l\'eau plus facilement? Glisse la réponse:',
        answer: 'Sable',
        wordBank: ['Argile', 'Ils sont identiques', 'Sable', 'Aucun des deux'],
        mode: 'select'
      },
      // Drag and Drop - Selection (permeability time)
      {
        type: 'drag_and_drop',
        question: 'Combien de temps d\'écoulement pour le sable? Glisse la réponse:',
        answer: '32 secondes',
        wordBank: ['90 secondes', '60 secondes', '32 secondes', '10 secondes'],
        mode: 'select'
      },
      // Drag and Drop - Selection (explanation)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi le sable est-il plus perméable? Glisse la réponse:',
        answer: 'Parce qu\'il a des espaces plus grands entre les particules',
        wordBank: ['Parce qu\'il est plus lourd', 'Parce qu\'il est plus léger', 'Parce qu\'il a des espaces plus grands entre les particules', 'Parce qu\'il est plus compact'],
        mode: 'select'
      }
    ]
  },

  'ch5-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Dans une chaîne alimentaire, l'herbe est le producteur car elle produit sa propre nourriture par photosynthèse", answer: "vrai" },
      { question: "Toutes les chaînes alimentaires ont toujours les mêmes maillons", answer: "faux" },
      { question: "La gazelle mange l'herbe et est donc un consommateur primaire dans la chaîne alimentaire", answer: "vrai" },
      { question: "Le chacal mange la gazelle et est donc un consommateur secondaire dans la chaîne alimentaire", answer: "vrai" },
      { question: "90% d'énergie est perdue à chaque niveau de la chaîne alimentaire car une grande partie est utilisée pour les fonctions vitales", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans une chaîne alimentaire, qui est le producteur?',
        answer: 'L\'herbe',
        wrongAnswers: ['La gazelle', 'Le chacal', 'Les bactéries']
      },
      {
        type: 'multiple_choice',
        question: 'Qui mange la gazelle dans la chaîne alimentaire sahélienne?',
        answer: 'Le chacal',
        wrongAnswers: ['L\'herbe', 'Les bactéries', 'La gazelle elle-même']
      },
      {
        type: 'multiple_choice',
        question: 'Qui mange l\'herbe dans la chaîne alimentaire sahélienne?',
        answer: 'La gazelle',
        wrongAnswers: ['Le chacal', 'Les bactéries', 'L\'herbe elle-même']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi y a-t-il moins de prédateurs dans une chaîne alimentaire?',
        answer: 'Parce que 90% d\'énergie est perdue à chaque niveau',
        wrongAnswers: ['Parce qu\'ils se reproduisent moins', 'Parce qu\'ils sont plus grands', 'Parce qu\'ils sont plus rapides']
      },
      {
        type: 'multiple_choice',
        question: 'Qui décompose les déchets dans la chaîne alimentaire?',
        answer: 'Les bactéries',
        wrongAnswers: ['L\'herbe', 'La gazelle', 'Le chacal']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans une chaîne alimentaire, l\'herbe est le producteur',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les chaînes alimentaires ont toujours les mêmes maillons',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La gazelle mange l\'herbe',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '90% d\'énergie est perdue à chaque niveau',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Dans une chaîne alimentaire, l\'herbe est le:',
        answer: 'producteur',
        wrongAnswers: ['consommateur', 'décomposeur', 'prédateur']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ mange la gazelle',
        answer: 'chacal',
        wrongAnswers: ['lion', 'hyène', 'vautour']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ décomposent les déchets',
        answer: 'bactéries',
        wrongAnswers: ['champignons', 'vers', 'insectes']
      },
      // Drag and Drop - Ordering (food chain from producer to decomposer)
      {
        type: 'drag_and_drop',
        question: 'Rangez cette chaîne alimentaire: Chacal, Herbes, Gazelle, Bactéries',
        answer: ['Herbes', 'Gazelle', 'Chacal', 'Bactéries'], // Producer → Primary consumer → Secondary consumer → Decomposer
        wordBank: ['Herbes', 'Gazelle', 'Chacal', 'Bactéries'], // Exactly 4 for 4 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Dans une chaîne alimentaire, qui est le producteur? Glisse la réponse:',
        answer: 'L\'herbe',
        wordBank: ['La gazelle', 'Le chacal', 'L\'herbe', 'Les bactéries'],
        mode: 'select'
      },
      // Drag and Drop - Selection (predator)
      {
        type: 'drag_and_drop',
        question: 'Qui mange la gazelle dans la chaîne alimentaire sahélienne? Glisse la réponse:',
        answer: 'Le chacal',
        wordBank: ['L\'herbe', 'Les bactéries', 'Le chacal', 'La gazelle elle-même'],
        mode: 'select'
      },
      // Drag and Drop - Selection (energy loss)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi y a-t-il moins de prédateurs? Glisse la réponse:',
        answer: 'Parce que 90% d\'énergie est perdue à chaque niveau',
        wordBank: ['Parce qu\'ils se reproduisent moins', 'Parce qu\'ils sont plus grands', 'Parce que 90% d\'énergie est perdue à chaque niveau', 'Parce qu\'ils sont plus rapides'],
        mode: 'select'
      }
    ]
  },

  'ch5-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Un projet de mini-réserve commence par un diagnostic pour identifier les espèces et les conditions du milieu", answer: "vrai" },
      { question: "Tous les projets de mini-réserve ont toujours exactement la même taille", answer: "faux" },
      { question: "La mini-réserve fait 2 m² pour permettre une étude approfondie de la biodiversité", answer: "vrai" },
      { question: "On fait un relevé mensuel de biodiversité pour suivre l'évolution des espèces au fil du temps", answer: "vrai" },
      { question: "On communique les résultats par une affiche A3 et une présentation orale pour partager les découvertes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Quelles sont les étapes de création d\'une mini-réserve?',
        answer: 'Diagnostic → Aménagement → Suivi → Communication',
        wrongAnswers: ['Suivi → Diagnostic → Communication → Aménagement', 'Aménagement → Diagnostic → Suivi → Communication', 'Communication → Suivi → Diagnostic → Aménagement']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la première étape du projet de mini-réserve?',
        answer: 'Diagnostic',
        wrongAnswers: ['Aménagement', 'Suivi', 'Communication']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la taille d\'une mini-réserve?',
        answer: '2 m²',
        wrongAnswers: ['5 m²', '10 m²', '1 m²']
      },
      {
        type: 'multiple_choice',
        question: 'À quelle fréquence fait-on un relevé de biodiversité?',
        answer: 'Mensuel',
        wrongAnswers: ['Quotidien', 'Hebdomadaire', 'Annuel']
      },
      {
        type: 'multiple_choice',
        question: 'Comment communique-t-on les résultats du projet?',
        answer: 'Par une affiche A3 et une présentation orale',
        wrongAnswers: ['Par un livre', 'Par une vidéo seulement', 'Par une conférence internationale']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un projet de mini-réserve commence par un diagnostic',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les projets de mini-réserve ont toujours exactement la même taille',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On fait un relevé mensuel de biodiversité',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le suivi se fait chaque mois',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'La mini-réserve fait combien de m²?',
        answer: '2 m²',
        wrongAnswers: ['1 m²', '3 m²', '4 m²']
      },
      {
        type: 'multiple_choice',
        question: 'On fait un relevé _____ de biodiversité',
        answer: 'mensuel',
        wrongAnswers: ['hebdomadaire', 'annuel', 'quotidien']
      },
      {
        type: 'multiple_choice',
        question: 'La première étape du projet est le:',
        answer: 'diagnostic',
        wrongAnswers: ['planning', 'réalisation', 'évaluation']
      },
      // Drag and Drop - Ordering (project steps)
      {
        type: 'drag_and_drop',
        question: 'Rangez les étapes du projet: Aménagement, Diagnostic, Suivi, Communication',
        answer: ['Diagnostic', 'Aménagement', 'Suivi', 'Communication'], // Step 1, 2, 3, 4
        wordBank: ['Diagnostic', 'Aménagement', 'Suivi', 'Communication'], // Exactly 4 for 4 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la première étape du projet? Glisse la réponse:',
        answer: 'Diagnostic',
        wordBank: ['Aménagement', 'Suivi', 'Diagnostic', 'Communication'],
        mode: 'select'
      },
      // Drag and Drop - Selection (size)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la taille d\'une mini-réserve? Glisse la réponse:',
        answer: '2 m²',
        wordBank: ['5 m²', '10 m²', '2 m²', '1 m²'],
        mode: 'select'
      },
      // Drag and Drop - Selection (frequency)
      {
        type: 'drag_and_drop',
        question: 'À quelle fréquence fait-on un relevé de biodiversité? Glisse la réponse:',
        answer: 'Mensuel',
        wordBank: ['Quotidien', 'Hebdomadaire', 'Mensuel', 'Annuel'],
        mode: 'select'
      }
    ]
  }
};

export default YEAR1_SCIENCE_SECTION_QUESTIONS;

