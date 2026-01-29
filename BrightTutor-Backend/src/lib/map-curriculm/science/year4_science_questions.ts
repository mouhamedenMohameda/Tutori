/**
 * Year 4 Science - Questions for Each Section
 * All questions are verifiable and appropriate for app format:
 * - Multiple Choice
 * - True/False (Right or Wrong)
 * - Fill-in-Blank (Typing)
 * - Completion
 *
 * NO drawings, NO file uploads, NO unverifiable questions
 */

export const YEAR4_SCIENCE_SECTION_QUESTIONS: {
  [sectionId: string]: {
    questions: Array<{
      question: string;
      answer: string;
    }>;
    exercises: Array<{
      type: string;
      question: string;
      answer: string | string[];
      wrongAnswers?: string[];
      wordBank?: string[];
      mode?: 'order' | 'select' | 'construct';
    }>;
  };
} = {
  // CHAPTER 1: ORGANISATION GÉNÉRALE DE LA CELLULE
  'ch1-s1': {
    questions: [
      { question: "Le grossissement total = oculaire × objectif", answer: "vrai" },
      { question: "Robert Hooke a découvert les cellules en 1665", answer: "vrai" },
      { question: "La vis micrométrique sert au réglage fin", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule le grossissement: oculaire x10, objectif x40',
        answer: 'Grossissement total = x400',
        wrongAnswers: ['Grossissement total = x50', 'Grossissement total = x100', 'Grossissement total = x4000']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle vis utiliser pour réglage fin?',
        answer: 'Vis micrométrique',
        wrongAnswers: ['Vis macroscopique', 'Vis grossière', 'Vis principale']
      },
      {
        type: 'multiple_choice',
        question: 'Qui a découvert les cellules en 1665?',
        answer: 'Robert Hooke',
        wrongAnswers: ['Louis Pasteur', 'Charles Darwin', 'Antonie van Leeuwenhoek']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On commence toujours avec le faible grossissement',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le grossissement total = oculaire × objectif',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On commence toujours avec le fort grossissement',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Robert Hooke a découvert les cellules en 1665',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule le grossissement: oculaire x15, objectif x20. Grossissement total = x?',
        answer: '300',
        wrongAnswers: ['35', '150', '600']
      },
      {
        type: 'multiple_choice',
        question: 'La vis _____ sert au réglage fin',
        answer: 'micrométrique',
        wrongAnswers: ['macroscopique', 'grossière', 'principale']
      },
      {
        type: 'multiple_choice',
        question: 'Le grossissement total = ? × objectif',
        answer: 'oculaire',
        wrongAnswers: ['objectif', '2', '10']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule le grossissement: oculaire x10, objectif x50. Glisse la réponse:',
        answer: 'Grossissement total = x500',
        wordBank: ['Grossissement total = x500', 'Grossissement total = x60', 'Grossissement total = x5000', 'Grossissement total = x50'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building magnification)
      {
        type: 'drag_and_drop',
        question: 'Construis: Grossissement total = oculaire × _____',
        answer: ['objectif'],
        wordBank: ['objectif', 'oculaire', '2', '10'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s2': {
    questions: [
      { question: "Une cellule animale a: membrane, cytoplasme, noyau", answer: "vrai" },
      { question: "Le bleu de méthylène colore le noyau intensément", answer: "vrai" },
      { question: "Le noyau contient l'ADN", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelles sont les 3 parties principales d\'une cellule animale?',
        answer: 'Membrane plasmique, cytoplasme, noyau',
        wrongAnswers: ['Paroi, cytoplasme, noyau', 'Membrane, vacuole, noyau', 'Membrane, chloroplastes, noyau']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi utiliser le bleu de méthylène?',
        answer: 'Pour rendre visibles les structures (colore cytoplasme et noyau)',
        wrongAnswers: ['Pour tuer les bactéries', 'Pour agrandir les cellules', 'Pour les déshydrater']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle partie est la plus foncée après coloration?',
        answer: 'Le noyau',
        wrongAnswers: ['Le cytoplasme', 'La membrane', 'La vacuole']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une cellule animale a: membrane, cytoplasme, noyau',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le bleu de méthylène colore le noyau intensément',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le noyau contient uniquement des protéines',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le noyau contient l\'ADN',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les 3 parties principales d\'une cellule animale sont: membrane plasmique, ?, noyau',
        answer: 'cytoplasme',
        wrongAnswers: ['paroi', 'vacuole', 'chloroplastes']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ contient l\'ADN',
        answer: 'noyau',
        wrongAnswers: ['cytoplasme', 'membrane', 'vacuole']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ de méthylène colore le noyau intensément',
        answer: 'bleu',
        wrongAnswers: ['rouge', 'vert', 'jaune']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle partie d\'une cellule animale contient l\'ADN? Glisse la réponse:',
        answer: 'Le noyau',
        wordBank: ['Le noyau', 'Le cytoplasme', 'La membrane', 'La vacuole'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building cell structure)
      {
        type: 'drag_and_drop',
        question: 'Construis: Une cellule animale a: membrane, _____, noyau',
        answer: ['cytoplasme'],
        wordBank: ['cytoplasme', 'paroi', 'vacuole', 'chloroplastes'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s3': {
    questions: [
      { question: "Les cellules végétales ont une paroi cellulosique", answer: "vrai" },
      { question: "Les cellules végétales ont une grande vacuole", answer: "vrai" },
      { question: "Les chloroplastes sont présents dans les cellules vertes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle structure est spécifique aux cellules végétales?',
        answer: 'Paroi cellulosique, grande vacuole, chloroplastes',
        wrongAnswers: ['Membrane plasmique, cytoplasme, noyau', 'Centrioles, lysosomes', 'Chloroplastes uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle de la grande vacuole?',
        answer: 'Stockage et turgescence',
        wrongAnswers: ['Production d\'énergie', 'Protection contre les bactéries', 'Reproduction']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la différence principale entre cellule animale et végétale?',
        answer: 'Végétale: paroi rigide, grande vacuole, chloroplastes',
        wrongAnswers: ['Animale: paroi rigide', 'Aucune différence', 'Végétale: sans noyau']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les cellules végétales ont une paroi cellulosique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les cellules végétales ont des chloroplastes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les cellules végétales ont une grande vacuole',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les chloroplastes sont présents dans les cellules vertes',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les cellules végétales ont une paroi:',
        answer: 'cellulosique',
        wrongAnswers: ['membraneuse', 'rigide', 'souple']
      },
      {
        type: 'multiple_choice',
        question: 'La grande vacuole permet le stockage et la:',
        answer: 'turgescence',
        wrongAnswers: ['photosynthèse', 'respiration', 'division']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ sont présents dans les cellules vertes',
        answer: 'chloroplastes',
        wrongAnswers: ['mitochondries', 'ribosomes', 'lysosomes']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle structure est spécifique aux cellules végétales? Glisse la réponse:',
        answer: 'Paroi cellulosique',
        wordBank: ['Paroi cellulosique', 'Membrane plasmique', 'Centrioles', 'Lysosomes'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building plant cell)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les cellules végétales ont une paroi _____',
        answer: ['cellulosique'],
        wordBank: ['cellulosique', 'membraneuse', 'rigide', 'souple'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s4': {
    questions: [
      { question: "La membrane plasmique est semi-perméable", answer: "vrai" },
      { question: "Le cytoplasme contient les organites", answer: "vrai" },
      { question: "Le noyau contrôle les activités cellulaires", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la propriété de la membrane plasmique?',
        answer: 'Semi-perméable (sélective)',
        wrongAnswers: ['Totalement perméable', 'Imperméable', 'Rigide']
      },
      {
        type: 'multiple_choice',
        question: 'Que contient le cytoplasme?',
        answer: 'Organites, eau, nutriments',
        wrongAnswers: ['Seulement de l\'eau', 'Seulement des organites', 'Uniquement des protéines']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du noyau?',
        answer: 'Contient l\'ADN et contrôle les activités cellulaires',
        wrongAnswers: ['Produit de l\'énergie', 'Stocke les nutriments', 'Protège la cellule']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La membrane plasmique est semi-perméable',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cytoplasme contient les organites',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le noyau produit uniquement des protéines',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le noyau contrôle les activités cellulaires',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La membrane plasmique est _____-perméable',
        answer: 'semi',
        wrongAnswers: ['totalement', 'non', 'partiellement']
      },
      {
        type: 'multiple_choice',
        question: 'Le cytoplasme contient les:',
        answer: 'organites',
        wrongAnswers: ['gènes', 'hormones', 'enzymes']
      },
      {
        type: 'multiple_choice',
        question: 'Le noyau _____ les activités cellulaires',
        answer: 'contrôle',
        wrongAnswers: ['produit', 'digère', 'pompe']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la propriété de la membrane plasmique? Glisse la réponse:',
        answer: 'Semi-perméable',
        wordBank: ['Semi-perméable', 'Totalement perméable', 'Imperméable', 'Rigide'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building membrane property)
      {
        type: 'drag_and_drop',
        question: 'Construis: La membrane plasmique est _____-perméable',
        answer: ['semi'],
        wordBank: ['semi', 'totalement', 'non', 'partiellement'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s5': {
    questions: [
      { question: "Les organites sont des structures spécialisées dans la cellule", answer: "vrai" },
      { question: "Les mitochondries produisent l'énergie", answer: "vrai" },
      { question: "Le réticulum endoplasmique transporte les substances", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un organite?',
        answer: 'Structure spécialisée dans la cellule',
        wrongAnswers: ['Structure externe à la cellule', 'Type de cellule', 'Substance chimique']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle des mitochondries?',
        answer: 'Produire l\'énergie (respiration cellulaire)',
        wrongAnswers: ['Stockage des protéines', 'Transport des substances', 'Protection de la cellule']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du réticulum endoplasmique?',
        answer: 'Transporter les substances',
        wrongAnswers: ['Produire l\'énergie', 'Stockage des déchets', 'Protection de la cellule']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Tous les organites sont visibles au microscope optique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les organites sont des structures spécialisées dans la cellule',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les mitochondries produisent l\'énergie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le réticulum endoplasmique transporte les substances',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les _____ sont des structures spécialisées dans la cellule',
        answer: 'organites',
        wrongAnswers: ['tissus', 'organes', 'systèmes']
      },
      {
        type: 'multiple_choice',
        question: 'Les mitochondries produisent _____ (respiration cellulaire)',
        answer: 'l\'énergie',
        wrongAnswers: ['les protéines', 'les déchets', 'l\'eau']
      },
      {
        type: 'multiple_choice',
        question: 'Le réticulum endoplasmique _____ les substances',
        answer: 'transporte',
        wrongAnswers: ['produit', 'stocke', 'détruit']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le rôle des mitochondries? Glisse la réponse:',
        answer: 'Produire l\'énergie',
        wordBank: ['Produire l\'énergie', 'Stockage des protéines', 'Transport des substances', 'Protection'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building organelle function)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les mitochondries produisent _____',
        answer: ['l\'énergie'],
        wordBank: ['l\'énergie', 'les protéines', 'les déchets', 'l\'eau'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 2: REPRODUCTION HUMAINE
  'ch2-s1': {
    questions: [
      { question: "La reproduction nécessite un gamète mâle et un gamète femelle", answer: "vrai" },
      { question: "Le spermatozoïde est le gamète mâle", answer: "vrai" },
      { question: "L'ovule est le gamète femelle", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quels sont les deux types de gamètes?',
        answer: 'Spermatozoïde (mâle) et ovule (femelle)',
        wrongAnswers: ['Cellule et tissu', 'Ovule et œuf', 'Spermatozoïde et cellule']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la fécondation?',
        answer: 'Union du spermatozoïde et de l\'ovule',
        wrongAnswers: ['Division d\'une cellule', 'Formation d\'un gamète', 'Développement d\'un embryon']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le gamète mâle?',
        answer: 'Le spermatozoïde',
        wrongAnswers: ['L\'ovule', 'Le zygote', 'L\'embryon']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La fécondation crée une nouvelle cellule',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La reproduction nécessite un gamète mâle et un gamète femelle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un seul gamète suffit pour la reproduction',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le spermatozoïde est le gamète mâle',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les deux types de gamètes sont le _____ (mâle) et l\'ovule (femelle)',
        answer: 'spermatozoïde',
        wrongAnswers: ['ovule', 'zygote', 'embryon']
      },
      {
        type: 'multiple_choice',
        question: 'La fécondation est l\'union du spermatozoïde et de l\'_____',
        answer: 'ovule',
        wrongAnswers: ['spermatozoïde', 'zygote', 'embryon']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ est le gamète femelle',
        answer: 'ovule',
        wrongAnswers: ['spermatozoïde', 'zygote', 'embryon']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le gamète mâle? Glisse la réponse:',
        answer: 'Le spermatozoïde',
        wordBank: ['Le spermatozoïde', 'L\'ovule', 'Le zygote', 'L\'embryon'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building gamete types)
      {
        type: 'drag_and_drop',
        question: 'Construis: La reproduction nécessite un gamète mâle et un gamète _____',
        answer: ['femelle'],
        wordBank: ['femelle', 'mâle', 'unique', 'double'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s2': {
    questions: [
      { question: "Les testicules produisent les spermatozoïdes", answer: "vrai" },
      { question: "Les ovaires produisent les ovules", answer: "vrai" },
      { question: "La puberté marque le début de la production de gamètes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Où sont produits les spermatozoïdes?',
        answer: 'Dans les testicules',
        wrongAnswers: ['Dans les ovaires', 'Dans l\'utérus', 'Dans le placenta']
      },
      {
        type: 'multiple_choice',
        question: 'Où sont produits les ovules?',
        answer: 'Dans les ovaires',
        wrongAnswers: ['Dans les testicules', 'Dans l\'utérus', 'Dans les tubes']
      },
      {
        type: 'multiple_choice',
        question: 'Quand commence la production de gamètes?',
        answer: 'À la puberté',
        wrongAnswers: ['À la naissance', 'À la fécondation', 'À l\'âge adulte']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les testicules produisent les spermatozoïdes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les ovaires produisent les spermatozoïdes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les ovaires produisent les ovules',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La puberté marque le début de la production de gamètes',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les _____ produisent les spermatozoïdes',
        answer: 'testicules',
        wrongAnswers: ['ovaires', 'utérus', 'placenta']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ produisent les ovules',
        answer: 'ovaires',
        wrongAnswers: ['testicules', 'utérus', 'placenta']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ marque le début de la production de gamètes',
        answer: 'puberté',
        wrongAnswers: ['naissance', 'fécondation', 'grossesse']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Où sont produits les ovules? Glisse la réponse:',
        answer: 'Dans les ovaires',
        wordBank: ['Dans les ovaires', 'Dans les testicules', 'Dans l\'utérus', 'Dans le placenta'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building gamete production)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les testicules produisent les _____',
        answer: ['spermatozoïdes'],
        wordBank: ['spermatozoïdes', 'ovules', 'embryons', 'zygotes'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s3': {
    questions: [
      { question: "Le cycle menstruel dure environ 28 jours", answer: "vrai" },
      { question: "L'ovulation libère un ovule", answer: "vrai" },
      { question: "Les règles marquent le début du cycle", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de temps dure le cycle menstruel?',
        answer: 'Environ 28 jours',
        wrongAnswers: ['Environ 14 jours', 'Environ 30 jours', 'Environ 21 jours']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'ovulation?',
        answer: 'Libération d\'un ovule par l\'ovaire',
        wrongAnswers: ['Formation d\'un spermatozoïde', 'Fécondation', 'Développement de l\'embryon']
      },
      {
        type: 'multiple_choice',
        question: 'Que marquent les règles?',
        answer: 'Le début du cycle menstruel',
        wrongAnswers: ['La fin du cycle', 'L\'ovulation', 'La fécondation']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le cycle menstruel dure environ 28 jours',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'ovulation libère un spermatozoïde',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'ovulation libère un ovule',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les règles marquent le début du cycle',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le cycle menstruel dure environ ? jours',
        answer: '28',
        wrongAnswers: ['14', '30', '21']
      },
      {
        type: 'multiple_choice',
        question: 'L\'ovulation _____ un ovule',
        answer: 'libère',
        wrongAnswers: ['forme', 'détruit', 'stocke']
      },
      {
        type: 'multiple_choice',
        question: 'Les règles marquent le _____ du cycle menstruel',
        answer: 'début',
        wrongAnswers: ['fin', 'milieu', 'pic']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce que l\'ovulation? Glisse la réponse:',
        answer: 'Libération d\'un ovule par l\'ovaire',
        wordBank: ['Libération d\'un ovule par l\'ovaire', 'Formation d\'un spermatozoïde', 'Fécondation', 'Développement de l\'embryon'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building ovulation)
      {
        type: 'drag_and_drop',
        question: 'Construis: L\'ovulation _____ un ovule',
        answer: ['libère'],
        wordBank: ['libère', 'forme', 'détruit', 'stocke'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s4': {
    questions: [
      { question: "La grossesse dure environ 9 mois", answer: "vrai" },
      { question: "Le fœtus se développe dans l'utérus", answer: "vrai" },
      { question: "Le placenta nourrit le fœtus", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de temps dure la grossesse?',
        answer: 'Environ 9 mois',
        wrongAnswers: ['Environ 6 mois', 'Environ 12 mois', 'Environ 7 mois']
      },
      {
        type: 'multiple_choice',
        question: 'Où se développe le fœtus?',
        answer: 'Dans l\'utérus',
        wrongAnswers: ['Dans les ovaires', 'Dans les testicules', 'Dans le placenta']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du placenta?',
        answer: 'Nourrir et oxygéner le fœtus',
        wrongAnswers: ['Produire les gamètes', 'Protéger l\'utérus', 'Développer les organes']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La grossesse dure environ 9 mois',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le fœtus se développe dans les ovaires',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le fœtus se développe dans l\'utérus',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le placenta nourrit le fœtus',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La grossesse dure environ ? mois',
        answer: '9',
        wrongAnswers: ['6', '12', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Le fœtus se développe dans l\'_____',
        answer: 'utérus',
        wrongAnswers: ['ovaires', 'testicules', 'placenta']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ nourrit et oxygène le fœtus',
        answer: 'placenta',
        wrongAnswers: ['utérus', 'ovaires', 'testicules']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Où se développe le fœtus? Glisse la réponse:',
        answer: 'Dans l\'utérus',
        wordBank: ['Dans l\'utérus', 'Dans les ovaires', 'Dans les testicules', 'Dans le placenta'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building pregnancy)
      {
        type: 'drag_and_drop',
        question: 'Construis: Le fœtus se développe dans l\'_____',
        answer: ['utérus'],
        wordBank: ['utérus', 'ovaire', 'testicule', 'placenta'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s5': {
    questions: [
      { question: "L'accouchement expulse le bébé", answer: "vrai" },
      { question: "Le nouveau-né respire dès la naissance", answer: "vrai" },
      { question: "L'allaitement nourrit le bébé", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'accouchement?',
        answer: 'Expulsion du bébé à la fin de la grossesse',
        wrongAnswers: ['Début de la grossesse', 'Formation du placenta', 'Développement du fœtus']
      },
      {
        type: 'multiple_choice',
        question: 'Quand le bébé commence-t-il à respirer?',
        answer: 'Dès la naissance',
        wrongAnswers: ['Pendant la grossesse', 'Après une semaine', 'Dans l\'utérus']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle de l\'allaitement?',
        answer: 'Nourrir le bébé avec le lait maternel',
        wrongAnswers: ['Protéger le bébé', 'Développer les organes', 'Oxygéner le bébé']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'accouchement expulse le bébé',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le nouveau-né respire dès la naissance',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le bébé respire dans l\'utérus',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'allaitement nourrit le bébé',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'accouchement _____ le bébé',
        answer: 'expulse',
        wrongAnswers: ['forme', 'nourrit', 'protège']
      },
      {
        type: 'multiple_choice',
        question: 'Le nouveau-né _____ dès la naissance',
        answer: 'respire',
        wrongAnswers: ['mange', 'marche', 'parle']
      },
      {
        type: 'multiple_choice',
        question: 'L\'allaitement nourrit le bébé avec le _____ maternel',
        answer: 'lait',
        wrongAnswers: ['sang', 'eau', 'sucres']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quand le bébé commence-t-il à respirer? Glisse la réponse:',
        answer: 'Dès la naissance',
        wordBank: ['Dès la naissance', 'Pendant la grossesse', 'Après une semaine', 'Dans l\'utérus'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building birth)
      {
        type: 'drag_and_drop',
        question: 'Construis: L\'accouchement _____ le bébé',
        answer: ['expulse'],
        wordBank: ['expulse', 'forme', 'nourrit', 'protège'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 3: SYSTÈME NERVEUX ET MOTRICITÉ
  'ch3-s1': {
    questions: [
      { question: "Le système nerveux contrôle les fonctions du corps", answer: "vrai" },
      { question: "Le cerveau est l'organe principal du système nerveux", answer: "vrai" },
      { question: "Les neurones sont les cellules du système nerveux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du système nerveux?',
        answer: 'Contrôler les fonctions du corps',
        wrongAnswers: ['Produire les hormones', 'Digérer les aliments', 'Pomper le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est l\'organe principal du système nerveux?',
        answer: 'Le cerveau',
        wrongAnswers: ['Le cœur', 'Le poumon', 'Le foie']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les cellules du système nerveux?',
        answer: 'Les neurones',
        wrongAnswers: ['Les globules rouges', 'Les cellules musculaires', 'Les cellules osseuses']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le système nerveux contrôle les fonctions du corps',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cerveau est l\'organe principal du système nerveux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les neurones sont les cellules du système digestif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les neurones sont les cellules du système nerveux',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le système nerveux _____ les fonctions du corps',
        answer: 'contrôle',
        wrongAnswers: ['produit', 'digère', 'pompe']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ est l\'organe principal du système nerveux',
        answer: 'cerveau',
        wrongAnswers: ['cœur', 'poumon', 'foie']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ sont les cellules du système nerveux',
        answer: 'neurones',
        wrongAnswers: ['globules rouges', 'cellules musculaires', 'cellules osseuses']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est l\'organe principal du système nerveux? Glisse la réponse:',
        answer: 'Le cerveau',
        wordBank: ['Le cerveau', 'Le cœur', 'Le poumon', 'Le foie'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building nervous system)
      {
        type: 'drag_and_drop',
        question: 'Construis: Le système nerveux _____ les fonctions du corps',
        answer: ['contrôle'],
        wordBank: ['contrôle', 'produit', 'digère', 'pompe'],
        mode: 'construct'
      }
    ]
  },

  'ch3-s2': {
    questions: [
      { question: "Le cerveau est divisé en plusieurs parties", answer: "vrai" },
      { question: "Le cervelet contrôle l'équilibre", answer: "vrai" },
      { question: "Le tronc cérébral contrôle les fonctions vitales", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du cervelet?',
        answer: 'Contrôler l\'équilibre et la coordination',
        wrongAnswers: ['Contrôler la respiration', 'Pomper le sang', 'Digérer les aliments']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du tronc cérébral?',
        answer: 'Contrôler les fonctions vitales (respiration, rythme cardiaque)',
        wrongAnswers: ['Contrôler l\'équilibre', 'Contrôler la mémoire', 'Contrôler la vue']
      },
      {
        type: 'multiple_choice',
        question: 'Par quoi le cerveau est-il protégé?',
        answer: 'Le crâne',
        wrongAnswers: ['Les muscles', 'La peau', 'Les os des jambes']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le cerveau est protégé par le crâne',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cerveau est divisé en plusieurs parties',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cervelet contrôle uniquement la respiration',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le tronc cérébral contrôle les fonctions vitales',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le cervelet contrôle l\'_____ et la coordination',
        answer: 'équilibre',
        wrongAnswers: ['respiration', 'vue', 'ouïe']
      },
      {
        type: 'multiple_choice',
        question: 'Le tronc cérébral contrôle les fonctions:',
        answer: 'vitales',
        wrongAnswers: ['volontaires', 'sensorielles', 'motrices']
      },
      {
        type: 'multiple_choice',
        question: 'Le cerveau est protégé par le:',
        answer: 'crâne',
        wrongAnswers: ['muscles', 'peau', 'os des jambes']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le rôle du cervelet? Glisse la réponse:',
        answer: 'Contrôler l\'équilibre et la coordination',
        wordBank: ['Contrôler l\'équilibre et la coordination', 'Contrôler la respiration', 'Pomper le sang', 'Digérer les aliments'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building brain parts)
      {
        type: 'drag_and_drop',
        question: 'Construis: Le cervelet contrôle l\'_____',
        answer: ['équilibre'],
        wordBank: ['équilibre', 'respiration', 'vue', 'ouïe'],
        mode: 'construct'
      }
    ]
  },

  'ch3-s3': {
    questions: [
      { question: "Les neurones transmettent les messages nerveux", answer: "vrai" },
      { question: "Les synapses sont les connexions entre neurones", answer: "vrai" },
      { question: "Les nerfs sont des faisceaux de neurones", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle des neurones?',
        answer: 'Transmettre les messages nerveux',
        wrongAnswers: ['Transporter l\'oxygène', 'Digérer les aliments', 'Pomper le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une synapse?',
        answer: 'Connexion entre deux neurones',
        wrongAnswers: ['Type de cellule', 'Partie du cerveau', 'Fonction du cœur']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un nerf?',
        answer: 'Faisceau de neurones',
        wrongAnswers: ['Type de muscle', 'Partie du cerveau', 'Organe du système digestif']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les neurones transmettent les messages nerveux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les synapses sont les connexions entre neurones',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les nerfs sont des types de muscles',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les nerfs sont des faisceaux de neurones',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les neurones transmettent les messages:',
        answer: 'nerveux',
        wrongAnswers: ['sanguins', 'hormonaux', 'musculaires']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ sont les connexions entre neurones',
        answer: 'synapses',
        wrongAnswers: ['axones', 'dendrites', 'noyaux']
      },
      {
        type: 'multiple_choice',
        question: 'Les nerfs sont des faisceaux de:',
        answer: 'neurones',
        wrongAnswers: ['muscles', 'os', 'organes']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'une synapse? Glisse la réponse:',
        answer: 'Connexion entre deux neurones',
        wordBank: ['Connexion entre deux neurones', 'Type de cellule', 'Partie du cerveau', 'Fonction du cœur'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building neuron communication)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les synapses sont les connexions entre _____',
        answer: ['neurones'],
        wordBank: ['neurones', 'muscles', 'os', 'organes'],
        mode: 'construct'
      }
    ]
  },

  'ch3-s4': {
    questions: [
      { question: "Les réflexes sont des réponses automatiques", answer: "vrai" },
      { question: "L'arc réflexe ne passe pas par le cerveau", answer: "vrai" },
      { question: "Le réflexe rotulien est un exemple de réflexe", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un réflexe?',
        answer: 'Réponse automatique et rapide à un stimulus',
        wrongAnswers: ['Réponse lente et réfléchie', 'Action volontaire', 'Pensée consciente']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'arc réflexe?',
        answer: 'Circuit nerveux qui ne passe pas par le cerveau',
        wrongAnswers: ['Circuit qui passe par le cerveau', 'Type de muscle', 'Organe du système digestif']
      },
      {
        type: 'multiple_choice',
        question: 'Cite un exemple de réflexe',
        answer: 'Réflexe rotulien, retrait de la main',
        wrongAnswers: ['Marcher volontairement', 'Parler consciemment', 'Penser activement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les réflexes sont des réponses automatiques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'arc réflexe passe toujours par le cerveau',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'arc réflexe ne passe pas par le cerveau',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le réflexe rotulien est un exemple de réflexe',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les réflexes sont des réponses:',
        answer: 'automatiques',
        wrongAnswers: ['volontaires', 'lentes', 'réfléchies']
      },
      {
        type: 'multiple_choice',
        question: 'L\'arc réflexe ne passe pas par le:',
        answer: 'cerveau',
        wrongAnswers: ['moelle épinière', 'nerfs', 'muscles']
      },
      {
        type: 'multiple_choice',
        question: 'Le réflexe _____ est un exemple de réflexe',
        answer: 'rotulien',
        wrongAnswers: ['volontaire', 'cérébral', 'musculaire']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'un réflexe? Glisse la réponse:',
        answer: 'Réponse automatique et rapide à un stimulus',
        wordBank: ['Réponse automatique et rapide à un stimulus', 'Réponse lente et réfléchie', 'Action volontaire', 'Pensée consciente'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building reflex)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les réflexes sont des réponses _____',
        answer: ['automatiques'],
        wordBank: ['automatiques', 'volontaires', 'lentes', 'réfléchies'],
        mode: 'construct'
      }
    ]
  },

  'ch3-s5': {
    questions: [
      { question: "Les muscles permettent le mouvement", answer: "vrai" },
      { question: "Les os forment le squelette", answer: "vrai" },
      { question: "Les articulations relient les os", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle des muscles?',
        answer: 'Permettre le mouvement',
        wrongAnswers: ['Produire les hormones', 'Filtrer le sang', 'Digérer les aliments']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du squelette?',
        answer: 'Soutenir le corps et protéger les organes',
        wrongAnswers: ['Produire l\'énergie', 'Transporter l\'oxygène', 'Digérer les aliments']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle des articulations?',
        answer: 'Relier les os et permettre le mouvement',
        wrongAnswers: ['Produire les hormones', 'Pomper le sang', 'Filtrer les déchets']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les muscles permettent le mouvement',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les os forment le squelette',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les articulations produisent les hormones',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les articulations relient les os',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les muscles permettent le:',
        answer: 'mouvement',
        wrongAnswers: ['sang', 'énergie', 'hormones']
      },
      {
        type: 'multiple_choice',
        question: 'Les os forment le:',
        answer: 'squelette',
        wrongAnswers: ['muscles', 'système', 'tissu']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ relient les os',
        answer: 'articulations',
        wrongAnswers: ['muscles', 'ligaments', 'tendons']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le rôle des muscles? Glisse la réponse:',
        answer: 'Permettre le mouvement',
        wordBank: ['Permettre le mouvement', 'Produire les hormones', 'Filtrer le sang', 'Digérer les aliments'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building movement system)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les muscles permettent le _____',
        answer: ['mouvement'],
        wordBank: ['mouvement', 'sang', 'énergie', 'hormones'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 4: SYSTÈME ENDOCRINIEN
  'ch4-s1': {
    questions: [
      { question: "Le système endocrinien produit des hormones", answer: "vrai" },
      { question: "Les hormones sont des messagers chimiques", answer: "vrai" },
      { question: "Les glandes endocrines sécrètent les hormones", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une hormone?',
        answer: 'Messager chimique produit par les glandes endocrines',
        wrongAnswers: ['Type de cellule', 'Organe du système digestif', 'Partie du cerveau']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une glande endocrine?',
        answer: 'Organe qui sécrète des hormones dans le sang',
        wrongAnswers: ['Type de muscle', 'Partie du squelette', 'Organe du système respiratoire']
      },
      {
        type: 'multiple_choice',
        question: 'Comment les hormones agissent-elles?',
        answer: 'Lentement mais durablement',
        wrongAnswers: ['Rapidement et brièvement', 'Uniquement sur les muscles', 'Seulement dans le cerveau']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les hormones agissent lentement mais durablement',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le système endocrinien produit des hormones',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les hormones sont des types de cellules',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les hormones sont des messagers chimiques',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le système endocrinien produit des:',
        answer: 'hormones',
        wrongAnswers: ['cellules', 'organes', 'muscles']
      },
      {
        type: 'multiple_choice',
        question: 'Les hormones sont des messagers:',
        answer: 'chimiques',
        wrongAnswers: ['physiques', 'mécaniques', 'électriques']
      },
      {
        type: 'multiple_choice',
        question: 'Les glandes endocrines _____ les hormones',
        answer: 'sécrètent',
        wrongAnswers: ['produisent', 'absorbent', 'détruisent']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'une hormone? Glisse la réponse:',
        answer: 'Messager chimique produit par les glandes endocrines',
        wordBank: ['Messager chimique produit par les glandes endocrines', 'Type de cellule', 'Organe du système digestif', 'Partie du cerveau'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building endocrine system)
      {
        type: 'drag_and_drop',
        question: 'Construis: Le système endocrinien produit des _____',
        answer: ['hormones'],
        wordBank: ['hormones', 'cellules', 'organes', 'muscles'],
        mode: 'construct'
      }
    ]
  },

  'ch4-s2': {
    questions: [
      { question: "L'hypophyse contrôle d'autres glandes", answer: "vrai" },
      { question: "La thyroïde régule le métabolisme", answer: "vrai" },
      { question: "Le pancréas produit l'insuline", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle de l\'hypophyse?',
        answer: 'Contrôler d\'autres glandes endocrines',
        wrongAnswers: ['Produire l\'insuline', 'Réguler le métabolisme', 'Filtrer le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle de la thyroïde?',
        answer: 'Réguler le métabolisme',
        wrongAnswers: ['Produire l\'insuline', 'Contrôler d\'autres glandes', 'Pomper le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle hormone produit le pancréas?',
        answer: 'L\'insuline',
        wrongAnswers: ['La testostérone', 'L\'adrénaline', 'Les œstrogènes']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'hypophyse contrôle d\'autres glandes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La thyroïde régule le métabolisme',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le pancréas produit uniquement des enzymes digestives',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le pancréas produit l\'insuline',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'hypophyse contrôle d\'autres:',
        answer: 'glandes',
        wrongAnswers: ['organes', 'cellules', 'systèmes']
      },
      {
        type: 'multiple_choice',
        question: 'La thyroïde régule le:',
        answer: 'métabolisme',
        wrongAnswers: ['sucre', 'stress', 'croissance']
      },
      {
        type: 'multiple_choice',
        question: 'Le pancréas produit l\'_____',
        answer: 'insuline',
        wrongAnswers: ['testostérone', 'adrénaline', 'œstrogènes']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le rôle de la thyroïde? Glisse la réponse:',
        answer: 'Réguler le métabolisme',
        wordBank: ['Réguler le métabolisme', 'Produire l\'insuline', 'Contrôler d\'autres glandes', 'Pomper le sang'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building endocrine glands)
      {
        type: 'drag_and_drop',
        question: 'Construis: Le pancréas produit l\'_____',
        answer: ['insuline'],
        wordBank: ['insuline', 'testostérone', 'adrénaline', 'œstrogènes'],
        mode: 'construct'
      }
    ]
  },

  'ch4-s3': {
    questions: [
      { question: "L'insuline régule le taux de sucre dans le sang", answer: "vrai" },
      { question: "Le diabète est lié à un problème d'insuline", answer: "vrai" },
      { question: "L'adrénaline prépare le corps au danger", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle de l\'insuline?',
        answer: 'Réguler le taux de sucre dans le sang',
        wrongAnswers: ['Réguler le métabolisme', 'Contrôler d\'autres glandes', 'Produire l\'énergie']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que le diabète?',
        answer: 'Maladie liée à un problème d\'insuline',
        wrongAnswers: ['Maladie liée au cœur', 'Maladie liée aux poumons', 'Maladie liée au cerveau']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle de l\'adrénaline?',
        answer: 'Préparer le corps au danger (réaction de stress)',
        wrongAnswers: ['Réguler le sucre', 'Réguler le métabolisme', 'Produire l\'énergie']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'insuline régule le taux de sucre dans le sang',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le diabète est lié à un problème d\'insuline',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'adrénaline régule uniquement le sucre',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'adrénaline prépare le corps au danger',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'insuline régule le taux de _____ dans le sang',
        answer: 'sucre',
        wrongAnswers: ['sang', 'énergie', 'oxygène']
      },
      {
        type: 'multiple_choice',
        question: 'Le diabète est lié à un problème d\'_____',
        answer: 'insuline',
        wrongAnswers: ['adrénaline', 'testostérone', 'thyroïde']
      },
      {
        type: 'multiple_choice',
        question: 'L\'adrénaline prépare le corps au:',
        answer: 'danger',
        wrongAnswers: ['sommeil', 'digestion', 'repos']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le rôle de l\'insuline? Glisse la réponse:',
        answer: 'Réguler le taux de sucre dans le sang',
        wordBank: ['Réguler le taux de sucre dans le sang', 'Réguler le métabolisme', 'Contrôler d\'autres glandes', 'Produire l\'énergie'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building insulin function)
      {
        type: 'drag_and_drop',
        question: 'Construis: L\'insuline régule le taux de _____ dans le sang',
        answer: ['sucre'],
        wordBank: ['sucre', 'sang', 'énergie', 'oxygène'],
        mode: 'construct'
      }
    ]
  },

  'ch4-s4': {
    questions: [
      { question: "Les hormones sexuelles contrôlent la puberté", answer: "vrai" },
      { question: "La testostérone est l'hormone mâle", answer: "vrai" },
      { question: "Les œstrogènes sont les hormones femelles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle des hormones sexuelles?',
        answer: 'Contrôler la puberté et le développement sexuel',
        wrongAnswers: ['Réguler le sucre', 'Produire l\'énergie', 'Filtrer le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'hormone mâle?',
        answer: 'La testostérone',
        wrongAnswers: ['L\'insuline', 'L\'adrénaline', 'Les œstrogènes']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les hormones femelles?',
        answer: 'Les œstrogènes',
        wrongAnswers: ['La testostérone', 'L\'insuline', 'L\'adrénaline']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les hormones sexuelles contrôlent la puberté',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La testostérone est l\'hormone femelle',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La testostérone est l\'hormone mâle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les œstrogènes sont les hormones femelles',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les hormones sexuelles contrôlent la:',
        answer: 'puberté',
        wrongAnswers: ['naissance', 'grossesse', 'vieillesse']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ est l\'hormone mâle',
        answer: 'testostérone',
        wrongAnswers: ['insuline', 'adrénaline', 'œstrogènes']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ sont les hormones femelles',
        answer: 'œstrogènes',
        wrongAnswers: ['testostérone', 'insuline', 'adrénaline']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'hormone mâle? Glisse la réponse:',
        answer: 'La testostérone',
        wordBank: ['La testostérone', 'L\'insuline', 'L\'adrénaline', 'Les œstrogènes'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building sex hormones)
      {
        type: 'drag_and_drop',
        question: 'Construis: La _____ est l\'hormone mâle',
        answer: ['testostérone'],
        wordBank: ['testostérone', 'insuline', 'adrénaline', 'œstrogènes'],
        mode: 'construct'
      }
    ]
  },

  'ch4-s5': {
    questions: [
      { question: "Le système endocrinien et nerveux travaillent ensemble", answer: "vrai" },
      { question: "Les hormones agissent dans tout le corps", answer: "vrai" },
      { question: "Un déséquilibre hormonal peut causer des maladies", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment les systèmes endocrinien et nerveux travaillent-ils?',
        answer: 'Ensemble pour contrôler les fonctions du corps',
        wrongAnswers: ['Séparément sans interaction', 'Uniquement sur les muscles', 'Seulement dans le cerveau']
      },
      {
        type: 'multiple_choice',
        question: 'Comment les hormones agissent-elles?',
        answer: 'Dans tout le corps via le sang',
        wrongAnswers: ['Uniquement dans le cerveau', 'Seulement dans les muscles', 'Dans les poumons uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'arrive-t-il en cas de déséquilibre hormonal?',
        answer: 'Peut causer des maladies',
        wrongAnswers: ['Améliore la santé', 'N\'a aucun effet', 'Rend plus fort']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le système endocrinien et nerveux travaillent ensemble',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les hormones agissent uniquement dans le cerveau',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les hormones agissent dans tout le corps',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un déséquilibre hormonal peut causer des maladies',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les systèmes endocrinien et nerveux travaillent:',
        answer: 'ensemble',
        wrongAnswers: ['séparément', 'alternativement', 'indépendamment']
      },
      {
        type: 'multiple_choice',
        question: 'Les hormones agissent dans tout le corps via le:',
        answer: 'sang',
        wrongAnswers: ['cerveau', 'muscles', 'poumons']
      },
      {
        type: 'multiple_choice',
        question: 'Un déséquilibre hormonal peut causer des:',
        answer: 'maladies',
        wrongAnswers: ['améliorations', 'guérisons', 'renforcements']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment les hormones agissent-elles? Glisse la réponse:',
        answer: 'Dans tout le corps via le sang',
        wordBank: ['Dans tout le corps via le sang', 'Uniquement dans le cerveau', 'Seulement dans les muscles', 'Dans les poumons uniquement'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building hormonal system)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les hormones agissent dans tout le corps via le _____',
        answer: ['sang'],
        wordBank: ['sang', 'cerveau', 'muscles', 'poumons'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 5: SYSTÈME IMMUNITAIRE
  'ch5-s1': {
    questions: [
      { question: "Le système immunitaire protège contre les maladies", answer: "vrai" },
      { question: "Les globules blancs combattent les infections", answer: "vrai" },
      { question: "Les anticorps neutralisent les agents pathogènes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du système immunitaire?',
        answer: 'Protéger contre les maladies et infections',
        wrongAnswers: ['Produire les hormones', 'Digérer les aliments', 'Pomper le sang']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle des globules blancs?',
        answer: 'Combattre les infections',
        wrongAnswers: ['Transporter l\'oxygène', 'Produire l\'énergie', 'Digérer les aliments']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle des anticorps?',
        answer: 'Neutraliser les agents pathogènes',
        wrongAnswers: ['Produire les globules rouges', 'Digérer les aliments', 'Pomper le sang']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le système immunitaire protège contre les maladies',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les globules blancs combattent les infections',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les anticorps produisent les globules rouges',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les anticorps neutralisent les agents pathogènes',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le système immunitaire protège contre les:',
        answer: 'maladies',
        wrongAnswers: ['hormones', 'aliments', 'sang']
      },
      {
        type: 'multiple_choice',
        question: 'Les globules _____ combattent les infections',
        answer: 'blancs',
        wrongAnswers: ['rouges', 'jaunes', 'verts']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ neutralisent les agents pathogènes',
        answer: 'anticorps',
        wrongAnswers: ['globules rouges', 'hormones', 'enzymes']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le rôle des globules blancs? Glisse la réponse:',
        answer: 'Combattre les infections',
        wordBank: ['Combattre les infections', 'Transporter l\'oxygène', 'Produire l\'énergie', 'Digérer les aliments'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building immune system)
      {
        type: 'drag_and_drop',
        question: 'Construis: Le système immunitaire protège contre les _____',
        answer: ['maladies'],
        wordBank: ['maladies', 'hormones', 'aliments', 'sang'],
        mode: 'construct'
      }
    ]
  },

  'ch5-s2': {
    questions: [
      { question: "La vaccination protège contre les maladies", answer: "vrai" },
      { question: "Les vaccins stimulent la production d'anticorps", answer: "vrai" },
      { question: "L'immunité peut être naturelle ou acquise", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment fonctionne la vaccination?',
        answer: 'Stimule la production d\'anticorps pour protéger',
        wrongAnswers: ['Tue directement les bactéries', 'Bloque tous les virus', 'Guérit instantanément']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les types d\'immunité?',
        answer: 'Naturelle et acquise',
        wrongAnswers: ['Temporaire et permanente uniquement', 'Active et passive uniquement', 'Seulement naturelle']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'immunité acquise?',
        answer: 'Immunité obtenue par vaccination ou maladie',
        wrongAnswers: ['Immunité présente dès la naissance', 'Immunité temporaire uniquement', 'Aucune protection']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La vaccination est une forme d\'immunité acquise',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La vaccination protège contre les maladies',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les vaccins tuent directement tous les virus',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'immunité peut être naturelle ou acquise',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La vaccination protège contre les:',
        answer: 'maladies',
        wrongAnswers: ['hormones', 'cellules', 'organes']
      },
      {
        type: 'multiple_choice',
        question: 'Les vaccins stimulent la production d\'_____',
        answer: 'anticorps',
        wrongAnswers: ['globules rouges', 'hormones', 'enzymes']
      },
      {
        type: 'multiple_choice',
        question: 'L\'immunité peut être _____ ou acquise',
        answer: 'naturelle',
        wrongAnswers: ['artificielle', 'temporaire', 'permanente']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Comment fonctionne la vaccination? Glisse la réponse:',
        answer: 'Stimule la production d\'anticorps pour protéger',
        wordBank: ['Stimule la production d\'anticorps pour protéger', 'Tue directement les bactéries', 'Bloque tous les virus', 'Guérit instantanément'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building vaccination)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les vaccins stimulent la production d\'_____',
        answer: ['anticorps'],
        wordBank: ['anticorps', 'globules rouges', 'hormones', 'enzymes'],
        mode: 'construct'
      }
    ]
  },

  'ch5-s3': {
    questions: [
      { question: "Les allergies sont des réactions immunitaires excessives", answer: "vrai" },
      { question: "Le SIDA affecte le système immunitaire", answer: "vrai" },
      { question: "L'hygiène aide à prévenir les infections", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une allergie?',
        answer: 'Réaction immunitaire excessive à une substance',
        wrongAnswers: ['Réaction normale du système immunitaire', 'Maladie du système digestif', 'Problème du système nerveux']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que le SIDA?',
        answer: 'Maladie qui affecte le système immunitaire',
        wrongAnswers: ['Maladie du système digestif', 'Maladie du système respiratoire', 'Maladie du système nerveux']
      },
      {
        type: 'multiple_choice',
        question: 'Comment prévenir les infections?',
        answer: 'Par l\'hygiène (lavage des mains, etc.)',
        wrongAnswers: ['En évitant le sommeil', 'En ne mangeant pas', 'En évitant l\'eau']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les allergies sont des réactions immunitaires excessives',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le SIDA affecte le système digestif',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le SIDA affecte le système immunitaire',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'hygiène aide à prévenir les infections',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les allergies sont des réactions immunitaires:',
        answer: 'excessives',
        wrongAnswers: ['normales', 'faibles', 'inexistantes']
      },
      {
        type: 'multiple_choice',
        question: 'Le SIDA affecte le système:',
        answer: 'immunitaire',
        wrongAnswers: ['digestif', 'respiratoire', 'nerveux']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ aide à prévenir les infections',
        answer: 'hygiène',
        wrongAnswers: ['stress', 'fatigue', 'malnutrition']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'une allergie? Glisse la réponse:',
        answer: 'Réaction immunitaire excessive à une substance',
        wordBank: ['Réaction immunitaire excessive à une substance', 'Réaction normale du système immunitaire', 'Maladie du système digestif', 'Problème du système nerveux'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building allergy)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les allergies sont des réactions immunitaires _____',
        answer: ['excessives'],
        wordBank: ['excessives', 'normales', 'faibles', 'inexistantes'],
        mode: 'construct'
      }
    ]
  },

  'ch5-s4': {
    questions: [
      { question: "Les antibiotiques combattent les bactéries", answer: "vrai" },
      { question: "Les antibiotiques ne sont pas efficaces contre les virus", answer: "vrai" },
      { question: "Il faut utiliser les antibiotiques correctement", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Contre quoi les antibiotiques sont-ils efficaces?',
        answer: 'Contre les bactéries',
        wrongAnswers: ['Contre les virus', 'Contre tous les agents pathogènes', 'Contre les champignons uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Les antibiotiques sont-ils efficaces contre les virus?',
        answer: 'Non, seulement contre les bactéries',
        wrongAnswers: ['Oui, contre tous les agents pathogènes', 'Oui, uniquement contre les virus', 'Oui, contre les champignons']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi faut-il utiliser les antibiotiques correctement?',
        answer: 'Pour éviter la résistance des bactéries',
        wrongAnswers: ['Pour les rendre plus forts', 'Pour économiser de l\'argent', 'Pour réduire les effets secondaires uniquement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les antibiotiques combattent les bactéries',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les antibiotiques sont efficaces contre les virus',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les antibiotiques ne sont pas efficaces contre les virus',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Il faut utiliser les antibiotiques correctement',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les antibiotiques combattent les:',
        answer: 'bactéries',
        wrongAnswers: ['virus', 'champignons', 'cellules']
      },
      {
        type: 'multiple_choice',
        question: 'Les antibiotiques ne sont pas efficaces contre les:',
        answer: 'virus',
        wrongAnswers: ['bactéries', 'champignons', 'parasites']
      },
      {
        type: 'multiple_choice',
        question: 'Il faut utiliser les antibiotiques correctement pour éviter la _____ des bactéries',
        answer: 'résistance',
        wrongAnswers: ['destruction', 'multiplication', 'disparition']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Contre quoi les antibiotiques sont-ils efficaces? Glisse la réponse:',
        answer: 'Contre les bactéries',
        wordBank: ['Contre les bactéries', 'Contre les virus', 'Contre tous les agents pathogènes', 'Contre les champignons uniquement'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building antibiotics)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les antibiotiques combattent les _____',
        answer: ['bactéries'],
        wordBank: ['bactéries', 'virus', 'champignons', 'cellules'],
        mode: 'construct'
      }
    ]
  },

  'ch5-s5': {
    questions: [
      { question: "Une alimentation équilibrée renforce l'immunité", answer: "vrai" },
      { question: "Le sommeil est important pour l'immunité", answer: "vrai" },
      { question: "Le stress peut affaiblir l'immunité", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment renforcer l\'immunité?',
        answer: 'Alimentation équilibrée, sommeil, exercice',
        wrongAnswers: ['Éviter le sommeil', 'Manger uniquement des sucres', 'Éviter l\'exercice']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le sommeil est-il important pour l\'immunité?',
        answer: 'Permet au système immunitaire de se renforcer',
        wrongAnswers: ['Empêche la production d\'anticorps', 'Affaiblit le système immunitaire', 'N\'a aucun effet']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est l\'effet du stress sur l\'immunité?',
        answer: 'Peut l\'affaiblir',
        wrongAnswers: ['Peut la renforcer', 'N\'a aucun effet', 'La double']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une alimentation équilibrée renforce l\'immunité',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le sommeil est important pour l\'immunité',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le stress renforce toujours l\'immunité',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le stress peut affaiblir l\'immunité',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Une alimentation équilibrée renforce l\'_____',
        answer: 'immunité',
        wrongAnswers: ['digestion', 'respiration', 'circulation']
      },
      {
        type: 'multiple_choice',
        question: 'Le sommeil est important pour l\'_____',
        answer: 'immunité',
        wrongAnswers: ['digestion', 'respiration', 'circulation']
      },
      {
        type: 'multiple_choice',
        question: 'Le stress peut _____ l\'immunité',
        answer: 'affaiblir',
        wrongAnswers: ['renforcer', 'doubler', 'guérir']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi le sommeil est-il important? Glisse la réponse:',
        answer: 'Permet au système immunitaire de se renforcer',
        wordBank: ['Permet au système immunitaire de se renforcer', 'Empêche la production d\'anticorps', 'Affaiblit le système immunitaire', 'N\'a aucun effet'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building immunity)
      {
        type: 'drag_and_drop',
        question: 'Construis: Le stress peut _____ l\'immunité',
        answer: ['affaiblir'],
        wordBank: ['affaiblir', 'renforcer', 'doubler', 'guérir'],
        mode: 'construct'
      }
    ]
  }
};

export default YEAR4_SCIENCE_SECTION_QUESTIONS;

