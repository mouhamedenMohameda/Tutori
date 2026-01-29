/**
 * Year 3 Science - Questions for Each Section
 * All questions are verifiable and appropriate for app format:
 * - Multiple Choice
 * - True/False (Right or Wrong)
 * - Fill-in-Blank (Typing)
 * - Completion
 *
 * NO drawings, NO file uploads, NO unverifiable questions
 */

export const YEAR3_SCIENCE_SECTION_QUESTIONS: {
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
  // CHAPTER 1: ALIMENTS ET DIGESTION
  // Section 1: Aliments et nutriments
  'ch1-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un aliment simple contient un seul nutriment", answer: "vrai" },
      { question: "Les protides servent à la construction des tissus", answer: "vrai" },
      { question: "Les glucides fournissent de l'énergie", answer: "vrai" },
      { question: "Les lipides ne sont pas nécessaires pour l'organisme", answer: "faux" },
      { question: "Les dattes sont riches en glucides", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Classe ces aliments: sel, lait, pain. Lequel est un aliment simple?',
        answer: 'Sel (minéral)',
        wrongAnswers: ['Lait (composé)', 'Pain (composé)', 'Aucun']
      },
      {
        type: 'multiple_choice',
        question: 'Quel nutriment est principal dans les dattes?',
        answer: 'Glucides (75g/100g)',
        wrongAnswers: ['Protides (5g/100g)', 'Lipides (0,4g/100g)', 'Vitamines']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le thon est-il important pour l\'organisme?',
        answer: 'Riche en protides (25g/100g) pour construction des tissus',
        wrongAnswers: ['Riche en glucides', 'Riche en vitamines uniquement', 'Riche en minéraux uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal des protides?',
        answer: 'Construction des tissus',
        wrongAnswers: ['Fournir de l\'énergie uniquement', 'Protéger les organes', 'Hydrater le corps']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Un aliment simple contient un seul nutriment',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les lipides ne sont pas nécessaires pour l\'organisme',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les glucides fournissent de l\'énergie',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un aliment _____ contient un seul nutriment',
        answer: 'simple',
        wrongAnswers: ['complexe', 'composé', 'mixte']
      },
      {
        type: 'multiple_choice',
        question: 'Les protides servent à la _____ des tissus',
        answer: 'construction',
        wrongAnswers: ['destruction', 'transformation', 'digestion']
      },
      {
        type: 'multiple_choice',
        question: 'Les dattes sont riches en _____ (75g/100g)',
        answer: 'glucides',
        wrongAnswers: ['protides', 'lipides', 'vitamines']
      },
      // Drag and Drop - Selection (choosing nutrient role)
      {
        type: 'drag_and_drop',
        question: 'Les glucides servent principalement à: Glisse la réponse',
        answer: 'Fournir de l\'énergie',
        wordBank: ['Fournir de l\'énergie', 'Construire les tissus', 'Protéger les organes', 'Hydrater'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Le trajet des aliments dans le tube digestif
  'ch1-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le trajet des aliments: Bouche → Œsophage → Estomac → Intestin grêle → Gros intestin", answer: "vrai" },
      { question: "L'intestin grêle absorbe les nutriments", answer: "vrai" },
      { question: "L'estomac a une capacité d'environ 2L", answer: "vrai" },
      { question: "L'œsophage digère les aliments", answer: "faux" },
      { question: "Les aliments passent par l'œsophage après la bouche", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le trajet des aliments dans le tube digestif?',
        answer: 'Bouche → Œsophage → Estomac → Intestin grêle → Gros intestin',
        wrongAnswers: ['Bouche → Estomac → Intestin grêle', 'Œsophage → Estomac → Bouche', 'Bouche → Gros intestin → Estomac']
      },
      {
        type: 'multiple_choice',
        question: 'Quel organe absorbe les nutriments?',
        answer: 'Intestin grêle (grâce aux villosités)',
        wrongAnswers: ['Estomac', 'Œsophage', 'Gros intestin']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de temps les aliments restent-ils généralement dans l\'estomac?',
        answer: '2-4 heures',
        wrongAnswers: ['10-15 minutes', '30 minutes', '6-8 heures']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la capacité approximative de l\'estomac?',
        answer: 'Environ 2L',
        wrongAnswers: ['Environ 1L', 'Environ 5L', 'Environ 500mL']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'L\'œsophage digère les aliments',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'intestin grêle absorbe les nutriments',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les aliments passent par l\'œsophage après la bouche',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le trajet des aliments: Bouche → _____ → Estomac → Intestin grêle → Gros intestin',
        answer: 'Œsophage',
        wrongAnswers: ['Pharynx', 'Trachée', 'Larynx']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ absorbe les nutriments grâce aux villosités',
        answer: 'intestin grêle',
        wrongAnswers: ['estomac', 'gros intestin', 'œsophage']
      },
      {
        type: 'multiple_choice',
        question: 'Les aliments restent dans l\'estomac environ combien d\'heures?',
        answer: '2-4 heures',
        wrongAnswers: ['1-2 heures', '4-6 heures', '6-8 heures']
      },
      // Drag and Drop - Ordering (digestive tract order)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces organes dans l\'ordre du trajet des aliments: Gros intestin, Estomac, Bouche, Œsophage, Intestin grêle',
        answer: ['Bouche', 'Œsophage', 'Estomac', 'Intestin grêle', 'Gros intestin'],
        wordBank: ['Bouche', 'Œsophage', 'Estomac', 'Intestin grêle', 'Gros intestin'],
        mode: 'order'
      }
    ]
  },

  // Section 3: Digestion mécanique et chimique
  'ch1-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La mastication est une digestion mécanique", answer: "vrai" },
      { question: "L'amylase salivaire transforme l'amidon en sucre", answer: "vrai" },
      { question: "La pepsine digère les protéines dans l'estomac", answer: "vrai" },
      { question: "La mastication est une digestion chimique", answer: "faux" },
      { question: "La digestion chimique nécessite des enzymes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La mastication est une digestion:',
        answer: 'Mécanique (fragmentation physique)',
        wrongAnswers: ['Chimique (transformation par enzymes)', 'Les deux', 'Ni mécanique ni chimique']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle enzyme digère l\'amidon dans la bouche?',
        answer: 'Amylase salivaire',
        wrongAnswers: ['Pepsine', 'Trypsine', 'Lipase']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le pain devient-il sucré en bouche?',
        answer: 'L\'amylase salivaire transforme l\'amidon en sucres',
        wrongAnswers: ['À cause de la mastication', 'Parce que le pain contient du sucre', 'Par la chaleur de la bouche']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle enzyme digère les protéines dans l\'estomac?',
        answer: 'Pepsine',
        wrongAnswers: ['Amylase', 'Lipase', 'Trypsine']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'La mastication est une digestion mécanique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La mastication est une digestion chimique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La digestion chimique nécessite des enzymes',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La mastication est une digestion _____ (fragmentation physique)',
        answer: 'mécanique',
        wrongAnswers: ['chimique', 'enzymatique', 'biologique']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ salivaire transforme l\'amidon en sucre',
        answer: 'amylase',
        wrongAnswers: ['pepsine', 'lipase', 'protéase']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ digère les protéines dans l\'estomac',
        answer: 'pepsine',
        wrongAnswers: ['amylase', 'lipase', 'trypsine']
      },
      // Drag and Drop - Selection (choosing enzyme)
      {
        type: 'drag_and_drop',
        question: 'Quelle enzyme digère l\'amidon dans la bouche? Glisse la réponse',
        answer: 'Amylase salivaire',
        wordBank: ['Amylase salivaire', 'Pepsine', 'Lipase', 'Trypsine'],
        mode: 'select'
      }
    ]
  },

  // Section 4: Absorption des nutriments
  'ch1-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les villosités augmentent la surface d'absorption", answer: "vrai" },
      { question: "Le glucose passe dans la veine porte", answer: "vrai" },
      { question: "Les lipides passent dans la lymphe", answer: "vrai" },
      { question: "Tous les nutriments passent dans le sang", answer: "faux" },
      { question: "Les villosités permettent une meilleure absorption", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal des villosités?',
        answer: 'Augmenter la surface d\'absorption (200-300 m²)',
        wrongAnswers: ['Digérer les aliments', 'Produire des enzymes', 'Stocker les nutriments']
      },
      {
        type: 'multiple_choice',
        question: 'Où passe le glucose après absorption dans l\'intestin grêle?',
        answer: 'Veine porte → Foie',
        wrongAnswers: ['Lymphe → Cœur', 'Artère → Estomac', 'Veine → Poumons']
      },
      {
        type: 'multiple_choice',
        question: 'Où passent les lipides après absorption?',
        answer: 'Lymphe',
        wrongAnswers: ['Sang directement', 'Veine porte', 'Artères']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de surface d\'absorption les villosités créent-elles environ?',
        answer: '200-300 m²',
        wrongAnswers: ['50-100 m²', '500-600 m²', '10-20 m²']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Tous les nutriments passent dans le sang',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les villosités augmentent la surface d\'absorption',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les lipides passent dans la lymphe',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Les _____ augmentent la surface d\'absorption (200-300 m²)',
        answer: 'villosités',
        wrongAnswers: ['microvillosités', 'cils', 'papilles']
      },
      {
        type: 'multiple_choice',
        question: 'Le glucose passe dans la _____ porte → Foie',
        answer: 'veine',
        wrongAnswers: ['artère', 'capillaire', 'lymphatique']
      },
      {
        type: 'multiple_choice',
        question: 'Les lipides passent dans la:',
        answer: 'lymphe',
        wrongAnswers: ['veine', 'artère', 'sang']
      },
      // Drag and Drop - Selection (choosing nutrient pathway)
      {
        type: 'drag_and_drop',
        question: 'Où passent les lipides après absorption? Glisse la réponse',
        answer: 'Lymphe',
        wordBank: ['Sang', 'Lymphe', 'Veine porte', 'Artères'],
        mode: 'select'
      }
    ]
  },

  // Section 5: Élimination des déchets
  'ch1-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les déchets non digérés forment les fèces", answer: "vrai" },
      { question: "Le gros intestin absorbe l'eau", answer: "vrai" },
      { question: "L'élimination se fait par l'anus", answer: "vrai" },
      { question: "Le gros intestin digère les aliments", answer: "faux" },
      { question: "L'eau est absorbée dans le gros intestin", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal du gros intestin?',
        answer: 'Absorption d\'eau et formation des fèces',
        wrongAnswers: ['Digérer les aliments', 'Absorber les nutriments', 'Produire des enzymes']
      },
      {
        type: 'multiple_choice',
        question: 'Comment sont éliminés les déchets du système digestif?',
        answer: 'Par l\'anus sous forme de fèces',
        wrongAnswers: ['Par les reins', 'Par les poumons', 'Par la peau']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qui forme les fèces?',
        answer: 'Les déchets non digérés',
        wrongAnswers: ['Les nutriments absorbés', 'Les enzymes', 'Les sucs digestifs']
      },
      {
        type: 'multiple_choice',
        question: 'Le gros intestin digère-t-il les aliments?',
        answer: 'Non, il absorbe l\'eau',
        wrongAnswers: ['Oui, comme l\'estomac', 'Oui, comme l\'intestin grêle', 'Non, il ne fait rien']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Le gros intestin digère les aliments',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'élimination se fait par l\'anus',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le gros intestin absorbe l\'eau',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Les déchets non digérés forment les:',
        answer: 'fèces',
        wrongAnswers: ['urine', 'sueur', 'gaz']
      },
      {
        type: 'multiple_choice',
        question: 'Le gros intestin absorbe l\'_____',
        answer: 'eau',
        wrongAnswers: ['nutriments', 'protéines', 'glucides']
      },
      {
        type: 'multiple_choice',
        question: 'L\'élimination se fait par l\'_____',
        answer: 'anus',
        wrongAnswers: ['urètre', 'vagin', 'bouche']
      },
      // Drag and Drop - Selection (choosing elimination route)
      {
        type: 'drag_and_drop',
        question: 'L\'élimination des fèces se fait par: Glisse la réponse',
        answer: 'L\'anus',
        wordBank: ['L\'anus', 'Les reins', 'Les poumons', 'La peau'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 2: CIRCULATION SANGUINE
  // Section 1: Composition et rôle du sang
  'ch2-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le sang transporte les nutriments", answer: "vrai" },
      { question: "Le sang transporte l'oxygène", answer: "vrai" },
      { question: "Le sang est composé de plasma et cellules", answer: "vrai" },
      { question: "Le sang ne transporte que l'oxygène", answer: "faux" },
      { question: "Le plasma est la partie liquide du sang", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quels sont les composants principaux du sang?',
        answer: 'Plasma, globules rouges, globules blancs, plaquettes',
        wrongAnswers: ['Plasma et globules rouges seulement', 'Globules rouges et blancs seulement', 'Plasma et eau seulement']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal du sang?',
        answer: 'Transport (nutriments, oxygène, déchets)',
        wrongAnswers: ['Digestion des aliments', 'Respiration uniquement', 'Production d\'énergie']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que le plasma?',
        answer: 'La partie liquide du sang',
        wrongAnswers: ['Les globules rouges', 'Les plaquettes', 'Les globules blancs']
      },
      {
        type: 'multiple_choice',
        question: 'Le sang transporte:',
        answer: 'Les nutriments, l\'oxygène et les déchets',
        wrongAnswers: ['Seulement l\'oxygène', 'Seulement les nutriments', 'Rien']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Le plasma est la partie liquide du sang',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le sang ne transporte que l\'oxygène',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le sang transporte les nutriments',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le sang transporte les _____, l\'oxygène et les déchets',
        answer: 'nutriments',
        wrongAnswers: ['hormones', 'enzymes', 'anticorps']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ est la partie liquide du sang',
        answer: 'plasma',
        wrongAnswers: ['sérum', 'lymphe', 'suc']
      },
      {
        type: 'multiple_choice',
        question: 'Le sang est composé de plasma et de:',
        answer: 'cellules',
        wrongAnswers: ['plaquettes', 'globules', 'éléments']
      },
      // Drag and Drop - Selection (choosing blood component)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la partie liquide du sang? Glisse la réponse',
        answer: 'Plasma',
        wordBank: ['Plasma', 'Globules rouges', 'Globules blancs', 'Plaquettes'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Le cœur
  'ch2-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le cœur a 4 cavités: 2 oreillettes et 2 ventricules", answer: "vrai" },
      { question: "Le cœur pompe le sang dans tout le corps", answer: "vrai" },
      { question: "Le rythme cardiaque normal est environ 70 battements/min", answer: "vrai" },
      { question: "Le cœur a seulement 2 cavités", answer: "faux" },
      { question: "Le cœur fonctionne comme une pompe", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de cavités a le cœur?',
        answer: '4 cavités (2 oreillettes, 2 ventricules)',
        wrongAnswers: ['2 cavités', '3 cavités', '5 cavités']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal du cœur?',
        answer: 'Pomper le sang dans tout le corps',
        wrongAnswers: ['Produire le sang', 'Filtrer le sang', 'Stocker le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rythme cardiaque normal?',
        answer: 'Environ 70 battements par minute',
        wrongAnswers: ['Environ 100 battements par minute', 'Environ 50 battements par minute', 'Environ 120 battements par minute']
      },
      {
        type: 'multiple_choice',
        question: 'Le cœur fonctionne comme:',
        answer: 'Une pompe',
        wrongAnswers: ['Un filtre', 'Un réservoir', 'Un tube']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Le cœur a 4 cavités: 2 oreillettes et 2 ventricules',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cœur a seulement 2 cavités',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le cœur fonctionne comme une pompe',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le cœur a combien de cavités: 2 oreillettes et 2 ventricules?',
        answer: '4',
        wrongAnswers: ['2', '3', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Le cœur _____ le sang dans tout le corps',
        answer: 'pompe',
        wrongAnswers: ['filtre', 'stocke', 'transforme']
      },
      {
        type: 'multiple_choice',
        question: 'Le rythme cardiaque normal est environ combien de battements par minute?',
        answer: '70',
        wrongAnswers: ['50', '90', '100']
      },
      // Drag and Drop - Selection (choosing heart structure)
      {
        type: 'drag_and_drop',
        question: 'Combien de cavités a le cœur? Glisse la réponse',
        answer: '4',
        wordBank: ['2', '3', '4', '5'],
        mode: 'select'
      }
    ]
  },

  // Section 3: Les vaisseaux sanguins
  'ch2-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les artères transportent le sang du cœur vers les organes", answer: "vrai" },
      { question: "Les veines transportent le sang des organes vers le cœur", answer: "vrai" },
      { question: "Les capillaires permettent les échanges", answer: "vrai" },
      { question: "Les artères transportent le sang des organes vers le cœur", answer: "faux" },
      { question: "Les capillaires ont des parois très fines", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans quel sens les artères transportent-elles le sang?',
        answer: 'Du cœur vers les organes',
        wrongAnswers: ['Des organes vers le cœur', 'Dans les deux sens', 'Elles ne transportent pas le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Dans quel sens les veines transportent-elles le sang?',
        answer: 'Des organes vers le cœur',
        wrongAnswers: ['Du cœur vers les organes', 'Dans les deux sens', 'Elles ne transportent pas le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal des capillaires?',
        answer: 'Permettre les échanges (nutriments, oxygène, déchets)',
        wrongAnswers: ['Pomper le sang', 'Filtrer le sang', 'Stocker le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les capillaires peuvent-ils permettre les échanges?',
        answer: 'Ils ont des parois très fines',
        wrongAnswers: ['Ils sont très larges', 'Ils sont très longs', 'Ils ont des parois épaisses']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Les artères transportent le sang des organes vers le cœur',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les capillaires permettent les échanges',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les capillaires ont des parois très fines',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Les artères transportent le sang du _____ vers les organes',
        answer: 'cœur',
        wrongAnswers: ['poumons', 'foie', 'cerveau']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ transportent le sang des organes vers le cœur',
        answer: 'veines',
        wrongAnswers: ['artères', 'capillaires', 'lymphatiques']
      },
      {
        type: 'multiple_choice',
        question: 'Les capillaires permettent les _____ (nutriments, oxygène, déchets)',
        answer: 'échanges',
        wrongAnswers: ['transports', 'filtrations', 'absorptions']
      },
      // Drag and Drop - Selection (choosing vessel type)
      {
        type: 'drag_and_drop',
        question: 'Quels vaisseaux transportent le sang du cœur vers les organes? Glisse la réponse',
        answer: 'Les artères',
        wordBank: ['Les artères', 'Les veines', 'Les capillaires', 'Les valves'],
        mode: 'select'
      }
    ]
  },

  // Section 4: Les circulations (grande et petite)
  'ch2-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La grande circulation va du cœur vers tout le corps", answer: "vrai" },
      { question: "La petite circulation va du cœur vers les poumons", answer: "vrai" },
      { question: "Le sang se charge en oxygène dans les poumons", answer: "vrai" },
      { question: "La petite circulation va vers tout le corps", answer: "faux" },
      { question: "Il existe deux circulations dans le corps", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la grande circulation?',
        answer: 'Cœur → Organes → Cœur (transport oxygène et nutriments)',
        wrongAnswers: ['Cœur → Poumons → Cœur', 'Organes → Poumons → Cœur', 'Cœur → Cœur']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la petite circulation?',
        answer: 'Cœur → Poumons → Cœur (échange gaz)',
        wrongAnswers: ['Cœur → Organes → Cœur', 'Organes → Poumons → Organes', 'Poumons → Cœur → Poumons']
      },
      {
        type: 'multiple_choice',
        question: 'Où le sang se charge-t-il en oxygène?',
        answer: 'Dans les poumons',
        wrongAnswers: ['Dans le cœur', 'Dans les organes', 'Dans les artères']
      },
      {
        type: 'multiple_choice',
        question: 'Combien y a-t-il de circulations dans le corps?',
        answer: '2 (grande et petite circulation)',
        wrongAnswers: ['1', '3', '4']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'La petite circulation va vers tout le corps',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Il existe deux circulations dans le corps',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le sang se charge en oxygène dans les poumons',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La grande circulation va du _____ vers tout le corps',
        answer: 'cœur',
        wrongAnswers: ['poumons', 'foie', 'cerveau']
      },
      {
        type: 'multiple_choice',
        question: 'La petite circulation va du cœur vers les:',
        answer: 'poumons',
        wrongAnswers: ['organes', 'muscles', 'cerveau']
      },
      {
        type: 'multiple_choice',
        question: 'Le sang se charge en oxygène dans les:',
        answer: 'poumons',
        wrongAnswers: ['cœur', 'artères', 'veines']
      },
      // Drag and Drop - Ordering (circulation pathway)
      {
        type: 'drag_and_drop',
        question: 'Rangez le trajet de la grande circulation: Cœur, Organes, Cœur',
        answer: ['Cœur', 'Organes', 'Cœur'],
        wordBank: ['Cœur', 'Organes', 'Cœur'],
        mode: 'order'
      }
    ]
  },

  // Section 5: Pouls et tension artérielle
  'ch2-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le pouls mesure les battements cardiaques", answer: "vrai" },
      { question: "La tension artérielle mesure la pression du sang", answer: "vrai" },
      { question: "L'hypertension est dangereuse pour la santé", answer: "vrai" },
      { question: "Le pouls mesure la pression du sang", answer: "faux" },
      { question: "Un pouls normal est environ 70 battements/min", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que le pouls?',
        answer: 'Battements cardiaques perceptibles dans les artères',
        wrongAnswers: ['La pression du sang', 'Le volume du sang', 'La vitesse du sang']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la tension artérielle?',
        answer: 'Pression du sang dans les artères',
        wrongAnswers: ['Les battements cardiaques', 'Le volume du sang', 'La vitesse du sang']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi l\'hypertension est-elle dangereuse?',
        answer: 'Peut endommager les vaisseaux et organes',
        wrongAnswers: ['Améliore la circulation', 'N\'est pas dangereuse', 'Guérit automatiquement']
      },
      {
        type: 'multiple_choice',
        question: 'Le pouls mesure:',
        answer: 'Les battements cardiaques',
        wrongAnswers: ['La pression du sang', 'Le volume du sang', 'La température']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Le pouls mesure la pression du sang',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un pouls normal est environ 70 battements/min',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'hypertension est dangereuse pour la santé',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le pouls mesure les _____ cardiaques',
        answer: 'battements',
        wrongAnswers: ['rythmes', 'contractions', 'pulsations']
      },
      {
        type: 'multiple_choice',
        question: 'La tension artérielle mesure la _____ du sang',
        answer: 'pression',
        wrongAnswers: ['vitesse', 'volume', 'température']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ est dangereuse pour la santé',
        answer: 'hypertension',
        wrongAnswers: ['hypotension', 'tachycardie', 'bradycardie']
      },
      // Drag and Drop - Selection (choosing what pulse measures)
      {
        type: 'drag_and_drop',
        question: 'Le pouls mesure: Glisse la réponse',
        answer: 'Les battements cardiaques',
        wordBank: ['Les battements cardiaques', 'La pression du sang', 'Le volume du sang', 'La température'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 3: RESPIRATION
  // Section 1: Rôle et organes de la respiration
  'ch3-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La respiration apporte l'oxygène au corps", answer: "vrai" },
      { question: "La respiration élimine le dioxyde de carbone", answer: "vrai" },
      { question: "Les poumons sont les organes de la respiration", answer: "vrai" },
      { question: "La respiration n'élimine que l'oxygène", answer: "faux" },
      { question: "Les poumons permettent les échanges gazeux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal de la respiration?',
        answer: 'Apporter oxygène et éliminer dioxyde de carbone',
        wrongAnswers: ['Apporter seulement l\'oxygène', 'Éliminer seulement le dioxyde de carbone', 'Digérer les aliments']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les organes principaux de la respiration?',
        answer: 'Les poumons',
        wrongAnswers: ['Le cœur', 'Le foie', 'Les reins']
      },
      {
        type: 'multiple_choice',
        question: 'Quels gaz sont échangés lors de la respiration?',
        answer: 'Oxygène (entrant) et dioxyde de carbone (sortant)',
        wrongAnswers: ['Oxygène et azote', 'Dioxyde de carbone uniquement', 'Oxygène et hydrogène']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi la respiration est-elle essentielle?',
        answer: 'Elle apporte l\'oxygène nécessaire aux cellules',
        wrongAnswers: ['Elle digère les aliments', 'Elle pompe le sang', 'Elle filtre les déchets']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'La respiration n\'élimine que l\'oxygène',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les poumons permettent les échanges gazeux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les poumons sont les organes de la respiration',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La respiration apporte l\'_____ au corps',
        answer: 'oxygène',
        wrongAnswers: ['azote', 'hydrogène', 'carbone']
      },
      {
        type: 'multiple_choice',
        question: 'La respiration élimine le _____ de carbone',
        answer: 'dioxyde',
        wrongAnswers: ['monoxyde', 'trioxyde', 'oxyde']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ sont les organes de la respiration',
        answer: 'poumons',
        wrongAnswers: ['reins', 'foie', 'cœur']
      },
      // Drag and Drop - Selection (choosing respiratory organ)
      {
        type: 'drag_and_drop',
        question: 'Quels sont les organes de la respiration? Glisse la réponse',
        answer: 'Les poumons',
        wordBank: ['Les poumons', 'Le cœur', 'Le foie', 'Les reins'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Mouvements respiratoires
  'ch3-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'inspiration fait entrer l'air dans les poumons", answer: "vrai" },
      { question: "L'expiration fait sortir l'air des poumons", answer: "vrai" },
      { question: "Le diaphragme participe à la respiration", answer: "vrai" },
      { question: "L'inspiration fait sortir l'air", answer: "faux" },
      { question: "Le diaphragme se contracte lors de l'inspiration", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'inspiration?',
        answer: 'Entrée d\'air dans les poumons',
        wrongAnswers: ['Sortie d\'air des poumons', 'Arrêt de la respiration', 'Échange de gaz']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'expiration?',
        answer: 'Sortie d\'air des poumons',
        wrongAnswers: ['Entrée d\'air dans les poumons', 'Arrêt de la respiration', 'Échange de gaz']
      },
      {
        type: 'multiple_choice',
        question: 'Quel muscle participe principalement à la respiration?',
        answer: 'Le diaphragme',
        wrongAnswers: ['Le cœur', 'Les poumons', 'Le foie']
      },
      {
        type: 'multiple_choice',
        question: 'Que fait le diaphragme lors de l\'inspiration?',
        answer: 'Il se contracte (descend)',
        wrongAnswers: ['Il se relâche (monte)', 'Il reste immobile', 'Il se divise']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'L\'inspiration fait sortir l\'air',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le diaphragme se contracte lors de l\'inspiration',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'expiration fait sortir l\'air des poumons',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'_____ fait entrer l\'air dans les poumons',
        answer: 'inspiration',
        wrongAnswers: ['expiration', 'respiration', 'ventilation']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ fait sortir l\'air des poumons',
        answer: 'expiration',
        wrongAnswers: ['inspiration', 'respiration', 'ventilation']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ participe à la respiration',
        answer: 'diaphragme',
        wrongAnswers: ['cœur', 'foie', 'estomac']
      },
      // Drag and Drop - Ordering (breathing cycle)
      {
        type: 'drag_and_drop',
        question: 'Rangez les phases de la respiration: Expiration, Inspiration',
        answer: ['Inspiration', 'Expiration'],
        wordBank: ['Inspiration', 'Expiration'],
        mode: 'order'
      }
    ]
  },

  // Section 3: Échanges gazeux dans les alvéoles
  'ch3-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les alvéoles pulmonaires permettent les échanges gazeux", answer: "vrai" },
      { question: "L'oxygène passe dans le sang dans les alvéoles", answer: "vrai" },
      { question: "Le dioxyde de carbone sort du sang dans les alvéoles", answer: "vrai" },
      { question: "Les alvéoles sont de grandes cavités dans les poumons", answer: "faux" },
      { question: "Les alvéoles ont une surface d'échange très grande", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal des alvéoles pulmonaires?',
        answer: 'Permettre les échanges gazeux (O₂ et CO₂)',
        wrongAnswers: ['Pomper le sang', 'Filtrer l\'air', 'Stocker l\'oxygène']
      },
      {
        type: 'multiple_choice',
        question: 'Où l\'oxygène passe-t-il dans le sang?',
        answer: 'Dans les alvéoles pulmonaires',
        wrongAnswers: ['Dans la trachée', 'Dans le cœur', 'Dans les bronches']
      },
      {
        type: 'multiple_choice',
        question: 'Où le dioxyde de carbone sort-il du sang?',
        answer: 'Dans les alvéoles pulmonaires',
        wrongAnswers: ['Dans la trachée', 'Dans le cœur', 'Dans les bronches']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi les alvéoles sont-elles efficaces pour les échanges?',
        answer: 'Elles ont une surface d\'échange très grande',
        wrongAnswers: ['Elles sont très grandes', 'Elles sont très épaisses', 'Elles sont très petites']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Les alvéoles sont de grandes cavités dans les poumons',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les alvéoles ont une surface d\'échange très grande',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'oxygène passe dans le sang dans les alvéoles',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Les _____ pulmonaires permettent les échanges gazeux',
        answer: 'alvéoles',
        wrongAnswers: ['bronches', 'bronchioles', 'trachée']
      },
      {
        type: 'multiple_choice',
        question: 'L\'oxygène passe dans le _____ dans les alvéoles',
        answer: 'sang',
        wrongAnswers: ['lymphe', 'plasma', 'sérum']
      },
      {
        type: 'multiple_choice',
        question: 'Le dioxyde de carbone _____ du sang dans les alvéoles',
        answer: 'sort',
        wrongAnswers: ['entre', 'reste', 'circule']
      },
      // Drag and Drop - Selection (choosing where oxygen enters blood)
      {
        type: 'drag_and_drop',
        question: 'Où l\'oxygène passe-t-il dans le sang? Glisse la réponse',
        answer: 'Dans les alvéoles pulmonaires',
        wordBank: ['Dans les alvéoles pulmonaires', 'Dans la trachée', 'Dans le cœur', 'Dans les bronches'],
        mode: 'select'
      }
    ]
  },

  // Section 4: Hygiène et santé respiratoire
  'ch3-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le tabac est nocif pour les poumons", answer: "vrai" },
      { question: "L'activité physique améliore la respiration", answer: "vrai" },
      { question: "La pollution de l'air nuit à la respiration", answer: "vrai" },
      { question: "Le tabac améliore la respiration", answer: "faux" },
      { question: "Fumer est bénéfique pour les poumons", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pourquoi le tabac est-il dangereux pour la santé?',
        answer: 'Il endommage les poumons et peut causer des maladies',
        wrongAnswers: ['Il améliore la respiration', 'Il est bénéfique pour les poumons', 'Il n\'a aucun effet']
      },
      {
        type: 'multiple_choice',
        question: 'Comment améliorer sa capacité respiratoire?',
        answer: 'Activité physique régulière',
        wrongAnswers: ['Fumer du tabac', 'Rester sédentaire', 'Éviter l\'exercice']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est l\'effet de la pollution de l\'air sur la respiration?',
        answer: 'Elle peut endommager les poumons',
        wrongAnswers: ['Elle améliore la respiration', 'Elle n\'a aucun effet', 'Elle guérit les maladies']
      },
      {
        type: 'multiple_choice',
        question: 'Le tabac est-il nocif pour les poumons?',
        answer: 'Oui, il endommage gravement les poumons',
        wrongAnswers: ['Non, il est bénéfique', 'Non, il n\'a aucun effet', 'Oui, mais seulement à faible dose']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Fumer est bénéfique pour les poumons',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'activité physique améliore la respiration',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le tabac est nocif pour les poumons',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Le _____ est nocif pour les poumons',
        answer: 'tabac',
        wrongAnswers: ['sport', 'oxygène', 'exercice']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ physique améliore la respiration',
        answer: 'activité',
        wrongAnswers: ['inactivité', 'repos', 'sommeil']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ de l\'air nuit à la respiration',
        answer: 'pollution',
        wrongAnswers: ['pureté', 'fraîcheur', 'qualité']
      },
      // Drag and Drop - Selection (choosing healthy habit)
      {
        type: 'drag_and_drop',
        question: 'Comment améliorer sa respiration? Glisse la réponse',
        answer: 'Activité physique régulière',
        wordBank: ['Activité physique régulière', 'Fumer du tabac', 'Rester sédentaire', 'Éviter l\'exercice'],
        mode: 'select'
      }
    ]
  },

  // Section 5: Fréquence et régulation respiratoire
  'ch3-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La fréquence respiratoire normale est 15-20 cycles/min", answer: "vrai" },
      { question: "L'apnée est l'arrêt de la respiration", answer: "vrai" },
      { question: "L'hyperventilation augmente la fréquence respiratoire", answer: "vrai" },
      { question: "La fréquence respiratoire normale est 50-60 cycles/min", answer: "faux" },
      { question: "La respiration s'adapte à l'effort physique", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la fréquence respiratoire normale chez l\'adulte?',
        answer: '15-20 cycles par minute',
        wrongAnswers: ['5-10 cycles par minute', '50-60 cycles par minute', '100-120 cycles par minute']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'apnée?',
        answer: 'Arrêt temporaire de la respiration',
        wrongAnswers: ['Accélération de la respiration', 'Respiration normale', 'Hyperventilation']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'hyperventilation?',
        answer: 'Augmentation de la fréquence respiratoire',
        wrongAnswers: ['Arrêt de la respiration', 'Respiration normale', 'Diminution de la respiration']
      },
      {
        type: 'multiple_choice',
        question: 'Que se passe-t-il avec la respiration pendant l\'effort physique?',
        answer: 'Elle s\'accélère pour apporter plus d\'oxygène',
        wrongAnswers: ['Elle ralentit', 'Elle s\'arrête', 'Elle reste identique']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'La fréquence respiratoire normale est 50-60 cycles/min',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La respiration s\'adapte à l\'effort physique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'apnée est l\'arrêt de la respiration',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La fréquence respiratoire normale est combien de cycles par minute?',
        answer: '15-20',
        wrongAnswers: ['10-15', '20-25', '25-30']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ est l\'arrêt temporaire de la respiration',
        answer: 'apnée',
        wrongAnswers: ['hyperventilation', 'dyspnée', 'tachypnée']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ augmente la fréquence respiratoire',
        answer: 'hyperventilation',
        wrongAnswers: ['apnée', 'hypoventilation', 'dyspnée']
      },
      // Drag and Drop - Selection (choosing normal frequency)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la fréquence respiratoire normale? Glisse la réponse',
        answer: '15-20 cycles/min',
        wordBank: ['5-10 cycles/min', '15-20 cycles/min', '50-60 cycles/min', '100 cycles/min'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 4: EXCRÉTION
  // Section 1: Définition et rôle de l'excrétion
  'ch4-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'excrétion élimine les déchets de l'organisme", answer: "vrai" },
      { question: "Les reins filtrent le sang", answer: "vrai" },
      { question: "L'urine contient les déchets éliminés", answer: "vrai" },
      { question: "L'excrétion n'élimine que l'urine", answer: "faux" },
      { question: "Les reins produisent l'urine", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'excrétion?',
        answer: 'Élimination des déchets de l\'organisme',
        wrongAnswers: ['Production de déchets', 'Stockage des déchets', 'Transport des déchets']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal des reins?',
        answer: 'Filtrer le sang et produire l\'urine',
        wrongAnswers: ['Pomper le sang', 'Produire les globules rouges', 'Digérer les aliments']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'urine?',
        answer: 'Liquide contenant les déchets éliminés par les reins',
        wrongAnswers: ['Liquide digestif', 'Liquide respiratoire', 'Sang filtré']
      },
      {
        type: 'multiple_choice',
        question: 'Les reins filtrent-ils le sang?',
        answer: 'Oui, ils filtrent le sang pour éliminer les déchets',
        wrongAnswers: ['Non, ils ne font rien', 'Non, ils produisent le sang', 'Non, ils stockent le sang']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'L\'excrétion n\'élimine que l\'urine',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les reins filtrent le sang',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'urine contient les déchets éliminés',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'_____ élimine les déchets de l\'organisme',
        answer: 'excrétion',
        wrongAnswers: ['digestion', 'respiration', 'circulation']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ filtrent le sang',
        answer: 'reins',
        wrongAnswers: ['poumons', 'foie', 'cœur']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ contient les déchets éliminés',
        answer: 'urine',
        wrongAnswers: ['sang', 'sueur', 'salive']
      },
      // Drag and Drop - Selection (choosing excretion organ)
      {
        type: 'drag_and_drop',
        question: 'Quels organes filtrent le sang pour l\'excrétion? Glisse la réponse',
        answer: 'Les reins',
        wordBank: ['Les reins', 'Le cœur', 'Le foie', 'Les poumons'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Structure du système urinaire
  'ch4-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les reins sont au nombre de 2", answer: "vrai" },
      { question: "Les uretères transportent l'urine vers la vessie", answer: "vrai" },
      { question: "La vessie stocke l'urine", answer: "vrai" },
      { question: "Nous avons seulement 1 rein", answer: "faux" },
      { question: "L'urètre évacue l'urine hors du corps", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de reins avons-nous normalement?',
        answer: '2 reins',
        wrongAnswers: ['1 rein', '3 reins', '4 reins']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle des uretères?',
        answer: 'Transportent l\'urine des reins vers la vessie',
        wrongAnswers: ['Stockent l\'urine', 'Filtrent le sang', 'Produisent l\'urine']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle de la vessie?',
        answer: 'Stocker l\'urine avant élimination',
        wrongAnswers: ['Filtrer le sang', 'Produire l\'urine', 'Pomper le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Par quel conduit l\'urine est-elle évacuée hors du corps?',
        answer: 'L\'urètre',
        wrongAnswers: ['Les uretères', 'Les reins', 'La vessie']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Nous avons seulement 1 rein',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La vessie stocke l\'urine',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'urètre évacue l\'urine hors du corps',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Nous avons combien de reins?',
        answer: '2',
        wrongAnswers: ['1', '3', '4']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ transportent l\'urine vers la vessie',
        answer: 'uretères',
        wrongAnswers: ['urètres', 'veines', 'artères']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ stocke l\'urine',
        answer: 'vessie',
        wrongAnswers: ['rein', 'urètre', 'uretère']
      },
      // Drag and Drop - Ordering (urinary system pathway)
      {
        type: 'drag_and_drop',
        question: 'Rangez le trajet de l\'urine: Vessie, Reins, Urètre, Uretères',
        answer: ['Reins', 'Uretères', 'Vessie', 'Urètre'],
        wordBank: ['Reins', 'Uretères', 'Vessie', 'Urètre'],
        mode: 'order'
      }
    ]
  },

  // Section 3: Autres organes excréteurs
  'ch4-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La transpiration élimine l'eau et les sels", answer: "vrai" },
      { question: "La peau participe à l'excrétion", answer: "vrai" },
      { question: "Les poumons éliminent le dioxyde de carbone", answer: "vrai" },
      { question: "Seuls les reins participent à l'excrétion", answer: "faux" },
      { question: "La transpiration aide à réguler la température", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal de la transpiration?',
        answer: 'Éliminer eau et sels par la peau',
        wrongAnswers: ['Digérer les aliments', 'Pomper le sang', 'Produire de l\'énergie']
      },
      {
        type: 'multiple_choice',
        question: 'Comment la peau participe-t-elle à l\'excrétion?',
        answer: 'Par la transpiration',
        wrongAnswers: ['Par la respiration', 'Par la digestion', 'Par la circulation']
      },
      {
        type: 'multiple_choice',
        question: 'Quel déchet les poumons éliminent-ils?',
        answer: 'Le dioxyde de carbone',
        wrongAnswers: ['L\'urée', 'L\'eau', 'Les sels']
      },
      {
        type: 'multiple_choice',
        question: 'Quels organes participent à l\'excrétion?',
        answer: 'Les reins, la peau (transpiration), et les poumons',
        wrongAnswers: ['Seulement les reins', 'Seulement la peau', 'Seulement les poumons']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Seuls les reins participent à l\'excrétion',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La transpiration aide à réguler la température',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les poumons éliminent le dioxyde de carbone',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La _____ élimine l\'eau et les sels par la peau',
        answer: 'transpiration',
        wrongAnswers: ['respiration', 'digestion', 'circulation']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ participe à l\'excrétion',
        answer: 'peau',
        wrongAnswers: ['bouche', 'nez', 'oreilles']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ éliminent le dioxyde de carbone',
        answer: 'poumons',
        wrongAnswers: ['reins', 'foie', 'cœur']
      },
      // Drag and Drop - Selection (choosing excretory organ)
      {
        type: 'drag_and_drop',
        question: 'Quel organe élimine le dioxyde de carbone? Glisse la réponse',
        answer: 'Les poumons',
        wordBank: ['Les reins', 'Les poumons', 'La peau', 'Le cœur'],
        mode: 'select'
      }
    ]
  },

  // Section 4: Hygiène et santé rénale
  'ch4-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Boire suffisamment d'eau est important pour les reins", answer: "vrai" },
      { question: "L'insuffisance rénale est une maladie grave", answer: "vrai" },
      { question: "L'urine normale est jaune clair", answer: "vrai" },
      { question: "Boire peu d'eau améliore la fonction rénale", answer: "faux" },
      { question: "La couleur de l'urine peut indiquer un problème de santé", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Pourquoi faut-il boire suffisamment d\'eau?',
        answer: 'Pour aider les reins à fonctionner correctement',
        wrongAnswers: ['Pour améliorer la digestion', 'Pour augmenter la tension', 'Pour ralentir le métabolisme']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'insuffisance rénale?',
        answer: 'Maladie où les reins ne fonctionnent plus correctement',
        wrongAnswers: ['Augmentation de la fonction rénale', 'Amélioration de la fonction rénale', 'Ralentissement temporaire']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la couleur normale de l\'urine?',
        answer: 'Jaune clair',
        wrongAnswers: ['Rouge', 'Noir', 'Blanc opaque']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle quantité d\'eau est recommandée par jour pour un bon fonctionnement des reins?',
        answer: 'Environ 1,5 à 2 litres',
        wrongAnswers: ['Environ 500 mL', 'Environ 5 litres', 'Aucune eau nécessaire']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Boire peu d\'eau améliore la fonction rénale',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La couleur de l\'urine peut indiquer un problème de santé',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'insuffisance rénale est une maladie grave',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Il faut boire suffisamment d\'_____ pour les reins',
        answer: 'eau',
        wrongAnswers: ['soda', 'jus', 'lait']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ rénale est une maladie grave',
        answer: 'insuffisance',
        wrongAnswers: ['hypertension', 'infection', 'inflammation']
      },
      {
        type: 'multiple_choice',
        question: 'L\'urine normale est _____ clair',
        answer: 'jaune',
        wrongAnswers: ['rouge', 'vert', 'bleu']
      },
      // Drag and Drop - Selection (choosing healthy habit)
      {
        type: 'drag_and_drop',
        question: 'Pour aider les reins, il faut: Glisse la réponse',
        answer: 'Boire suffisamment d\'eau',
        wordBank: ['Boire suffisamment d\'eau', 'Boire très peu d\'eau', 'Ne pas boire d\'eau', 'Boire uniquement des boissons sucrées'],
        mode: 'select'
      }
    ]
  },

  // Section 5: Urée et régulation
  'ch4-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'urée est un déchet azoté", answer: "vrai" },
      { question: "Les reins régulent aussi l'eau dans le corps", answer: "vrai" },
      { question: "La dialyse remplace les reins défaillants", answer: "vrai" },
      { question: "L'urée est un nutriment", answer: "faux" },
      { question: "Les reins ne régulent que l'eau", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'urée?',
        answer: 'Déchet azoté éliminé par les reins',
        wrongAnswers: ['Nutriment essentiel', 'Hormone', 'Enzyme']
      },
      {
        type: 'multiple_choice',
        question: 'Quel autre rôle important ont les reins?',
        answer: 'Réguler la quantité d\'eau dans le corps',
        wrongAnswers: ['Produire l\'oxygène', 'Digérer les aliments', 'Pomper le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la dialyse?',
        answer: 'Traitement qui remplace les reins défaillants',
        wrongAnswers: ['Exercice physique', 'Régime alimentaire', 'Médicament']
      },
      {
        type: 'multiple_choice',
        question: 'D\'où provient l\'urée?',
        answer: 'De la dégradation des protéines dans l\'organisme',
        wrongAnswers: ['Des glucides', 'Des lipides', 'De l\'eau']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'L\'urée est un nutriment',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les reins ne régulent que l\'eau',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La dialyse remplace les reins défaillants',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'_____ est un déchet azoté',
        answer: 'urée',
        wrongAnswers: ['glucose', 'protéine', 'lipide']
      },
      {
        type: 'multiple_choice',
        question: 'Les reins régulent aussi l\'_____ dans le corps',
        answer: 'eau',
        wrongAnswers: ['sang', 'oxygène', 'nutriments']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ remplace les reins défaillants',
        answer: 'dialyse',
        wrongAnswers: ['transfusion', 'transplantation', 'injection']
      },
      // Drag and Drop - Selection (choosing what urea is)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce que l\'urée? Glisse la réponse',
        answer: 'Un déchet azoté',
        wordBank: ['Un déchet azoté', 'Un nutriment', 'Une hormone', 'Une enzyme'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 5: REPRODUCTION
  // Section 1: Types de reproduction
  'ch5-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La reproduction permet la perpétuation de l'espèce", answer: "vrai" },
      { question: "Il existe reproduction sexuée et asexuée", answer: "vrai" },
      { question: "La reproduction humaine est sexuée", answer: "vrai" },
      { question: "La reproduction asexuée nécessite deux parents", answer: "faux" },
      { question: "Tous les êtres vivants se reproduisent de la même manière", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal de la reproduction?',
        answer: 'Permettre la perpétuation de l\'espèce',
        wrongAnswers: ['Produire de l\'énergie', 'Digérer les aliments', 'Respirer']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les deux types principaux de reproduction?',
        answer: 'Sexuée et asexuée',
        wrongAnswers: ['Rapide et lente', 'Simple et complexe', 'Animale et végétale']
      },
      {
        type: 'multiple_choice',
        question: 'Quel type de reproduction caractérise l\'espèce humaine?',
        answer: 'Reproduction sexuée',
        wrongAnswers: ['Reproduction asexuée', 'Reproduction végétative', 'Reproduction par division']
      },
      {
        type: 'multiple_choice',
        question: 'La reproduction asexuée nécessite:',
        answer: 'Un seul parent',
        wrongAnswers: ['Deux parents', 'Trois parents', 'Aucun parent']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'La reproduction asexuée nécessite deux parents',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Tous les êtres vivants se reproduisent de la même manière',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La reproduction humaine est sexuée',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La reproduction permet la _____ de l\'espèce',
        answer: 'perpétuation',
        wrongAnswers: ['destruction', 'transformation', 'modification']
      },
      {
        type: 'multiple_choice',
        question: 'Il existe reproduction _____ et asexuée',
        answer: 'sexuée',
        wrongAnswers: ['naturelle', 'artificielle', 'spontanée']
      },
      {
        type: 'multiple_choice',
        question: 'La reproduction humaine est:',
        answer: 'sexuée',
        wrongAnswers: ['asexuée', 'naturelle', 'artificielle']
      },
      // Drag and Drop - Selection (choosing reproduction type)
      {
        type: 'drag_and_drop',
        question: 'Quel type de reproduction chez l\'humain? Glisse la réponse',
        answer: 'Reproduction sexuée',
        wordBank: ['Reproduction sexuée', 'Reproduction asexuée', 'Reproduction végétative', 'Reproduction par division'],
        mode: 'select'
      }
    ]
  },

  // Section 2: Gamètes et fécondation
  'ch5-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'homme produit des spermatozoïdes", answer: "vrai" },
      { question: "La femme produit des ovules", answer: "vrai" },
      { question: "La fécondation unit spermatozoïde et ovule", answer: "vrai" },
      { question: "L'homme produit des ovules", answer: "faux" },
      { question: "La fécondation forme un zygote", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle cellule sexuelle produit l\'homme?',
        answer: 'Les spermatozoïdes',
        wrongAnswers: ['Les ovules', 'Les globules rouges', 'Les cellules nerveuses']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle cellule sexuelle produit la femme?',
        answer: 'L\'ovule',
        wrongAnswers: ['Les spermatozoïdes', 'Les globules blancs', 'Les cellules musculaires']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la fécondation?',
        answer: 'Union du spermatozoïde et de l\'ovule',
        wrongAnswers: ['Division des cellules', 'Production de gamètes', 'Formation des organes']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qui se forme après la fécondation?',
        answer: 'Un zygote (cellule œuf)',
        wrongAnswers: ['Un spermatozoïde', 'Un ovule', 'Une cellule normale']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'L\'homme produit des ovules',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La fécondation forme un zygote',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La femme produit des ovules',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'homme produit des:',
        answer: 'spermatozoïdes',
        wrongAnswers: ['ovules', 'œufs', 'embryons']
      },
      {
        type: 'multiple_choice',
        question: 'La femme produit des:',
        answer: 'ovules',
        wrongAnswers: ['spermatozoïdes', 'embryons', 'fœtus']
      },
      {
        type: 'multiple_choice',
        question: 'La fécondation unit _____ et ovule',
        answer: 'spermatozoïde',
        wrongAnswers: ['ovule', 'embryon', 'zygote']
      },
      // Drag and Drop - Selection (choosing male gamete)
      {
        type: 'drag_and_drop',
        question: 'Quelle cellule sexuelle produit l\'homme? Glisse la réponse',
        answer: 'Les spermatozoïdes',
        wordBank: ['Les spermatozoïdes', 'Les ovules', 'Les globules rouges', 'Les cellules nerveuses'],
        mode: 'select'
      }
    ]
  },

  // Section 3: Grossesse et développement
  'ch5-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La grossesse dure environ 9 mois", answer: "vrai" },
      { question: "Le fœtus se développe dans l'utérus", answer: "vrai" },
      { question: "Le placenta nourrit le fœtus", answer: "vrai" },
      { question: "La grossesse dure environ 6 mois", answer: "faux" },
      { question: "Le placenta relie la mère au fœtus", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de temps dure généralement une grossesse humaine?',
        answer: 'Environ 9 mois (38-40 semaines)',
        wrongAnswers: ['Environ 6 mois', 'Environ 12 mois', 'Environ 3 mois']
      },
      {
        type: 'multiple_choice',
        question: 'Où se développe le fœtus pendant la grossesse?',
        answer: 'Dans l\'utérus',
        wrongAnswers: ['Dans l\'estomac', 'Dans les poumons', 'Dans le cœur']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal du placenta?',
        answer: 'Nourrir et oxygéner le fœtus',
        wrongAnswers: ['Digérer les aliments', 'Pomper le sang', 'Respirer pour le fœtus']
      },
      {
        type: 'multiple_choice',
        question: 'Le placenta relie:',
        answer: 'La mère au fœtus',
        wrongAnswers: ['Le père à la mère', 'Le fœtus aux poumons', 'Le cœur aux reins']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'La grossesse dure environ 6 mois',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le placenta relie la mère au fœtus',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le fœtus se développe dans l\'utérus',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La grossesse dure environ combien de mois?',
        answer: '9',
        wrongAnswers: ['6', '7', '10']
      },
      {
        type: 'multiple_choice',
        question: 'Le fœtus se développe dans l\'_____',
        answer: 'utérus',
        wrongAnswers: ['vagin', 'ovaires', 'trompes']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ nourrit et oxygène le fœtus',
        answer: 'placenta',
        wrongAnswers: ['cordon', 'amnios', 'chorion']
      },
      // Drag and Drop - Selection (choosing pregnancy duration)
      {
        type: 'drag_and_drop',
        question: 'Combien de temps dure une grossesse? Glisse la réponse',
        answer: 'Environ 9 mois',
        wordBank: ['Environ 6 mois', 'Environ 9 mois', 'Environ 12 mois', 'Environ 3 mois'],
        mode: 'select'
      }
    ]
  },

  // Section 4: Accouchement et naissance
  'ch5-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'accouchement expulse le bébé", answer: "vrai" },
      { question: "Le nouveau-né respire dès la naissance", answer: "vrai" },
      { question: "L'allaitement nourrit le bébé", answer: "vrai" },
      { question: "Le bébé respire dans l'utérus", answer: "faux" },
      { question: "L'accouchement marque la fin de la grossesse", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'accouchement?',
        answer: 'Expulsion du bébé à la fin de la grossesse',
        wrongAnswers: ['Début de la grossesse', 'Développement du fœtus', 'Formation du placenta']
      },
      {
        type: 'multiple_choice',
        question: 'Quand le bébé commence-t-il à respirer?',
        answer: 'Dès la naissance',
        wrongAnswers: ['Avant la naissance', 'Après plusieurs jours', 'Pendant la grossesse']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle principal de l\'allaitement?',
        answer: 'Nourrir le bébé avec le lait maternel',
        wrongAnswers: ['Respirer pour le bébé', 'Protéger le bébé du froid', 'Transporter le bébé']
      },
      {
        type: 'multiple_choice',
        question: 'L\'accouchement marque:',
        answer: 'La fin de la grossesse',
        wrongAnswers: ['Le début de la grossesse', 'Le milieu de la grossesse', 'Une étape du développement']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Le bébé respire dans l\'utérus',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'accouchement marque la fin de la grossesse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le nouveau-né respire dès la naissance',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'L\'_____ expulse le bébé à la fin de la grossesse',
        answer: 'accouchement',
        wrongAnswers: ['fécondation', 'grossesse', 'gestation']
      },
      {
        type: 'multiple_choice',
        question: 'Le nouveau-né respire _____ la naissance',
        answer: 'dès',
        wrongAnswers: ['avant', 'après', 'pendant']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ nourrit le bébé avec le lait maternel',
        answer: 'allaitement',
        wrongAnswers: ['sevrage', 'alimentation', 'nutrition']
      },
      // Drag and Drop - Selection (choosing when baby breathes)
      {
        type: 'drag_and_drop',
        question: 'Quand le bébé commence-t-il à respirer? Glisse la réponse',
        answer: 'Dès la naissance',
        wordBank: ['Avant la naissance', 'Dès la naissance', 'Après plusieurs jours', 'Pendant la grossesse'],
        mode: 'select'
      }
    ]
  },

  // Section 5: Puberté
  'ch5-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La puberté marque le début de la maturité sexuelle", answer: "vrai" },
      { question: "Les règles apparaissent à la puberté chez la fille", answer: "vrai" },
      { question: "La puberté survient vers 10-14 ans", answer: "vrai" },
      { question: "La puberté survient avant 5 ans", answer: "faux" },
      { question: "La puberté concerne les garçons et les filles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la puberté?',
        answer: 'Période où apparaît la maturité sexuelle',
        wrongAnswers: ['Fin de la croissance', 'Début de la vieillesse', 'Période de maladie']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que les règles (menstruations)?',
        answer: 'Écoulement sanguin mensuel chez la femme',
        wrongAnswers: ['Production de spermatozoïdes', 'Formation des ovules uniquement', 'Maladie gynécologique']
      },
      {
        type: 'multiple_choice',
        question: 'À quel âge survient généralement la puberté?',
        answer: 'Vers 10-14 ans',
        wrongAnswers: ['Vers 5-8 ans', 'Vers 18-20 ans', 'Vers 25-30 ans']
      },
      {
        type: 'multiple_choice',
        question: 'La puberté concerne:',
        answer: 'Les garçons et les filles',
        wrongAnswers: ['Seulement les garçons', 'Seulement les filles', 'Seulement les adultes']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'La puberté survient avant 5 ans',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La puberté concerne les garçons et les filles',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les règles apparaissent à la puberté chez la fille',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'La puberté marque le début de la _____ sexuelle',
        answer: 'maturité',
        wrongAnswers: ['immaturité', 'infantilisme', 'adolescence']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ apparaissent à la puberté chez la fille',
        answer: 'règles',
        wrongAnswers: ['spermatozoïdes', 'ovules', 'hormones']
      },
      {
        type: 'multiple_choice',
        question: 'La puberté survient vers combien d\'ans?',
        answer: '10-14',
        wrongAnswers: ['5-8', '15-18', '18-21']
      },
      // Drag and Drop - Selection (choosing puberty age)
      {
        type: 'drag_and_drop',
        question: 'À quel âge survient généralement la puberté? Glisse la réponse',
        answer: 'Vers 10-14 ans',
        wordBank: ['Vers 5-8 ans', 'Vers 10-14 ans', 'Vers 18-20 ans', 'Vers 25 ans'],
        mode: 'select'
      }
    ]
  }
};

export default YEAR3_SCIENCE_SECTION_QUESTIONS;

