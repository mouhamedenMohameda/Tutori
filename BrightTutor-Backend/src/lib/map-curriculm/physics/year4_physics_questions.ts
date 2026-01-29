/**
 * Year 4 Physics - Questions for Each Section
 * All questions are verifiable and appropriate for app format:
 * - Multiple Choice
 * - True/False (Right or Wrong)
 * - Fill-in-Blank (Typing)
 * - Completion
 *
 * NO drawings, NO file uploads, NO unverifiable questions
 */

export const YEAR4_PHYSICS_SECTION_QUESTIONS: {
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
  // CHAPTER 1: LES MATÉRIAUX
  'ch1-s1': {
    questions: [
      { question: "Il existe trois grandes familles de matériaux: métalliques, organiques, céramiques", answer: "vrai" },
      { question: "Les métaux sont conducteurs", answer: "vrai" },
      { question: "Les matériaux organiques contiennent du carbone", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien y a-t-il de grandes familles de matériaux?',
        answer: 'Trois: métalliques, organiques, céramiques',
        wrongAnswers: ['Deux: métalliques et organiques', 'Quatre: métalliques, organiques, céramiques, plastiques', 'Cinq: plusieurs types']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle propriété caractérise les métaux?',
        answer: 'Conductivité électrique et thermique',
        wrongAnswers: ['Isolation complète', 'Transparence', 'Fragilité']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi choisir l\'aluminium pour un avion?',
        answer: 'Léger et résistant',
        wrongAnswers: ['Très lourd et résistant', 'Léger mais fragile', 'Bon marché uniquement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Il existe trois grandes familles de matériaux: métalliques, organiques, céramiques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les métaux sont isolants',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les métaux sont conducteurs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les matériaux organiques contiennent du carbone',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les trois grandes familles de matériaux sont:',
        answer: 'métalliques, organiques, céramiques',
        wrongAnswers: ['métalliques, plastiques, verres', 'organiques, céramiques, composites', 'métalliques, organiques, polymères']
      },
      {
        type: 'multiple_choice',
        question: 'Les métaux sont _____ (électricité et chaleur)',
        answer: 'conducteurs',
        wrongAnswers: ['isolants', 'semi-conducteurs', 'résistants']
      },
      {
        type: 'multiple_choice',
        question: 'Les matériaux organiques contiennent du:',
        answer: 'carbone',
        wrongAnswers: ['fer', 'oxygène', 'hydrogène']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle propriété caractérise les métaux? Glisse la réponse:',
        answer: 'Conductivité électrique et thermique',
        wordBank: ['Conductivité électrique et thermique', 'Isolation complète', 'Transparence', 'Fragilité'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building material families)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les trois familles de matériaux sont: métalliques, _____, céramiques',
        answer: ['organiques'],
        wordBank: ['organiques', 'plastiques', 'verres', 'bois'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s2': {
    questions: [
      { question: "Le fer est un métal", answer: "vrai" },
      { question: "L'aluminium est léger", answer: "vrai" },
      { question: "Le cuivre est un bon conducteur", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quels sont des exemples de métaux?',
        answer: 'Fer, cuivre, aluminium, or, argent',
        wrongAnswers: ['Bois, plastique, verre', 'Cuivre, plastique, fer', 'Verre, céramique, fer']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les propriétés des métaux?',
        answer: 'Conducteurs, éclat métallique, déformables',
        wrongAnswers: ['Isolants, transparents, fragiles', 'Conducteurs, transparents, mous', 'Isolants, opaques, durs']
      },
      {
        type: 'multiple_choice',
        question: 'Quel métal est particulièrement léger?',
        answer: 'L\'aluminium',
        wrongAnswers: ['Le fer', 'Le cuivre', 'L\'or']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Tous les métaux sont magnétiques',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le fer est un métal',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'aluminium est lourd',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le cuivre est un bon conducteur',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le _____ est un métal',
        answer: 'fer',
        wrongAnswers: ['bois', 'verre', 'plastique']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ est léger',
        answer: 'aluminium',
        wrongAnswers: ['fer', 'cuivre', 'or']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ est un bon conducteur',
        answer: 'cuivre',
        wrongAnswers: ['bois', 'verre', 'plastique']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel métal est particulièrement léger? Glisse la réponse:',
        answer: 'L\'aluminium',
        wordBank: ['L\'aluminium', 'Le fer', 'Le cuivre', 'L\'or'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building metal properties)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les métaux ont un éclat _____',
        answer: ['métallique'],
        wordBank: ['métallique', 'terne', 'brillant', 'opaque'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s3': {
    questions: [
      { question: "Les matériaux organiques peuvent être naturels ou synthétiques", answer: "vrai" },
      { question: "Le bois est un matériau organique naturel", answer: "vrai" },
      { question: "Les plastiques sont des matériaux organiques synthétiques", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quels sont des exemples de matériaux organiques naturels?',
        answer: 'Bois, charbon, coton, laine',
        wrongAnswers: ['Plastiques, caoutchouc synthétique', 'Verre, céramique', 'Fer, cuivre']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont des exemples de matériaux organiques synthétiques?',
        answer: 'Plastiques, caoutchouc synthétique',
        wrongAnswers: ['Bois, charbon', 'Verre, céramique', 'Fer, aluminium']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les propriétés des matériaux organiques?',
        answer: 'Isolants, combustibles',
        wrongAnswers: ['Conducteurs, non combustibles', 'Transparents, durs', 'Magnétiques, opaques']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les matériaux organiques peuvent être naturels ou synthétiques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le bois est un matériau organique synthétique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le bois est un matériau organique naturel',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les plastiques sont des matériaux organiques synthétiques',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le _____ est un matériau organique naturel',
        answer: 'bois',
        wrongAnswers: ['verre', 'fer', 'céramique']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ sont des matériaux organiques synthétiques',
        answer: 'plastiques',
        wrongAnswers: ['métaux', 'céramiques', 'verres']
      },
      {
        type: 'multiple_choice',
        question: 'Les matériaux organiques sont _____ et combustibles',
        answer: 'isolants',
        wrongAnswers: ['conducteurs', 'transparents', 'durs']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est un matériau organique naturel? Glisse la réponse:',
        answer: 'Le bois',
        wordBank: ['Le bois', 'Le plastique', 'Le verre', 'Le fer'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building organic materials)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les _____ sont des matériaux organiques synthétiques',
        answer: ['plastiques'],
        wordBank: ['plastiques', 'bois', 'verres', 'métaux'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s4': {
    questions: [
      { question: "Les céramiques sont obtenues par forte température", answer: "vrai" },
      { question: "Le verre est une céramique", answer: "vrai" },
      { question: "Les céramiques sont dures mais fragiles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quels sont des exemples de céramiques?',
        answer: 'Terre cuite, porcelaine, verre',
        wrongAnswers: ['Fer, cuivre, aluminium', 'Bois, plastique', 'Charbon, coton']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les propriétés des céramiques?',
        answer: 'Dures, fragiles, résistantes à la chaleur',
        wrongAnswers: ['Souples, déformables, fragiles', 'Dures, souples, conductrices', 'Transparentes, conductrices, dures']
      },
      {
        type: 'multiple_choice',
        question: 'Comment sont obtenues les céramiques?',
        answer: 'Par cuisson à forte température',
        wrongAnswers: ['Par refroidissement rapide', 'Par simple mélange', 'Par fusion à basse température']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les céramiques sont obtenues par forte température',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le verre n\'est pas une céramique',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le verre est une céramique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les céramiques sont dures mais fragiles',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Les céramiques sont obtenues par cuisson à _____ température',
        answer: 'forte',
        wrongAnswers: ['basse', 'moyenne', 'variable']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ est une céramique',
        answer: 'verre',
        wrongAnswers: ['bois', 'fer', 'plastique']
      },
      {
        type: 'multiple_choice',
        question: 'Les céramiques sont dures mais:',
        answer: 'fragiles',
        wrongAnswers: ['flexibles', 'ductiles', 'molles']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est une propriété des céramiques? Glisse la réponse:',
        answer: 'Résistantes à la chaleur',
        wordBank: ['Résistantes à la chaleur', 'Conductrices', 'Souples', 'Transparentes'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building ceramics)
      {
        type: 'drag_and_drop',
        question: 'Construis: Les céramiques sont dures mais _____',
        answer: ['fragiles'],
        wordBank: ['fragiles', 'souples', 'conductrices', 'transparentes'],
        mode: 'construct'
      }
    ]
  },

  'ch1-s5': {
    questions: [
      { question: "Le choix d'un matériau dépend de ses propriétés", answer: "vrai" },
      { question: "Le coût est un critère de choix", answer: "vrai" },
      { question: "L'impact environnemental doit être considéré", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quels critères pour choisir un matériau?',
        answer: 'Propriétés, coût, disponibilité, impact environnemental',
        wrongAnswers: ['Seulement le coût', 'Seulement les propriétés', 'Seulement l\'impact environnemental']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi utiliser du verre pour fenêtres?',
        answer: 'Transparent, résistant, isolant',
        wrongAnswers: ['Opaque, résistant', 'Transparent, fragile', 'Bon marché uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le recyclage est-il important?',
        answer: 'Pour protéger l\'environnement',
        wrongAnswers: ['Pour économiser uniquement', 'Pour produire plus', 'Pour gagner de l\'argent uniquement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le recyclage est important pour l\'environnement',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le choix d\'un matériau dépend uniquement du coût',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le choix d\'un matériau dépend de ses propriétés',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'impact environnemental doit être considéré',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le choix d\'un matériau dépend de ses:',
        answer: 'propriétés',
        wrongAnswers: ['couleurs', 'formes', 'tailles']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ est un critère de choix',
        answer: 'coût',
        wrongAnswers: ['poids', 'volume', 'couleur']
      },
      {
        type: 'multiple_choice',
        question: 'L\'impact _____ doit être considéré',
        answer: 'environnemental',
        wrongAnswers: ['économique', 'social', 'culturel']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi utiliser du verre pour fenêtres? Glisse la réponse:',
        answer: 'Transparent, résistant, isolant',
        wordBank: ['Transparent, résistant, isolant', 'Opaque, résistant', 'Transparent, fragile', 'Bon marché uniquement'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building material selection)
      {
        type: 'drag_and_drop',
        question: 'Construis: Le choix d\'un matériau dépend de ses _____',
        answer: ['propriétés'],
        wordBank: ['propriétés', 'couleurs', 'tailles', 'formes'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 2: RÉACTIONS CHIMIQUES
  'ch2-s1': {
    questions: [
      { question: "Une réaction chimique transforme des substances", answer: "vrai" },
      { question: "Les réactifs sont les substances de départ", answer: "vrai" },
      { question: "Les produits sont les substances formées", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une réaction chimique?',
        answer: 'Transformation de substances (réactifs → produits)',
        wrongAnswers: ['Mélange simple de substances', 'Séparation de substances', 'Changement de température uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un réactif?',
        answer: 'Substance de départ dans une réaction',
        wrongAnswers: ['Substance formée dans une réaction', 'Produit de la réaction', 'Substance qui ne change pas']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un produit?',
        answer: 'Substance formée dans une réaction',
        wrongAnswers: ['Substance de départ', 'Réactif de la réaction', 'Substance qui ne change pas']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une réaction chimique transforme des substances',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les réactifs sont les substances formées',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les réactifs sont les substances de départ',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les produits sont les substances formées',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Une réaction chimique transforme des substances: ? → produits',
        answer: 'réactifs',
        wrongAnswers: ['produits', 'catalyseurs', 'solvants']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ sont les substances de départ',
        answer: 'réactifs',
        wrongAnswers: ['produits', 'catalyseurs', 'solvants']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ sont les substances formées',
        answer: 'produits',
        wrongAnswers: ['réactifs', 'catalyseurs', 'solvants']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'un réactif? Glisse la réponse:',
        answer: 'Substance de départ dans une réaction',
        wordBank: ['Substance de départ dans une réaction', 'Substance formée dans une réaction', 'Produit de la réaction', 'Substance qui ne change pas'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building chemical reaction)
      {
        type: 'drag_and_drop',
        question: 'Construis: Réaction chimique: _____ → produits',
        answer: ['réactifs'],
        wordBank: ['réactifs', 'produits', 'substances', 'éléments'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s2': {
    questions: [
      { question: "L'équation chimique représente une réaction", answer: "vrai" },
      { question: "La conservation de la masse s'applique aux réactions", answer: "vrai" },
      { question: "Il faut équilibrer une équation chimique", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une équation chimique?',
        answer: 'Représentation symbolique d\'une réaction',
        wrongAnswers: ['Description verbale d\'une réaction', 'Formule mathématique', 'Schéma graphique uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Que dit la loi de conservation de la masse?',
        answer: 'La masse totale reste constante',
        wrongAnswers: ['La masse augmente toujours', 'La masse diminue toujours', 'La masse change aléatoirement']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi équilibrer une équation?',
        answer: 'Pour respecter la conservation de la masse',
        wrongAnswers: ['Pour la rendre plus simple', 'Pour économiser de l\'encre', 'Pour la rendre plus jolie']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'équation chimique représente une réaction',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La masse totale change lors d\'une réaction',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La conservation de la masse s\'applique aux réactions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Il faut équilibrer une équation chimique',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'équation chimique _____ une réaction',
        answer: 'représente',
        wrongAnswers: ['détruit', 'crée', 'modifie']
      },
      {
        type: 'multiple_choice',
        question: 'La masse totale reste _____ lors d\'une réaction',
        answer: 'constante',
        wrongAnswers: ['variable', 'nulle', 'infinie']
      },
      {
        type: 'multiple_choice',
        question: 'Il faut _____ une équation chimique',
        answer: 'équilibrer',
        wrongAnswers: ['simplifier', 'multiplier', 'diviser']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Que dit la loi de conservation de la masse? Glisse la réponse:',
        answer: 'La masse totale reste constante',
        wordBank: ['La masse totale reste constante', 'La masse augmente toujours', 'La masse diminue toujours', 'La masse change aléatoirement'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building conservation law)
      {
        type: 'drag_and_drop',
        question: 'Construis: La masse totale reste _____',
        answer: ['constante'],
        wordBank: ['constante', 'variable', 'nulle', 'doublée'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s3': {
    questions: [
      { question: "La combustion est une réaction avec l'oxygène", answer: "vrai" },
      { question: "La combustion produit souvent du dioxyde de carbone", answer: "vrai" },
      { question: "La combustion libère de l'énergie", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une combustion?',
        answer: 'Réaction avec l\'oxygène qui libère de l\'énergie',
        wrongAnswers: ['Réaction sans oxygène', 'Réaction qui absorbe de l\'énergie', 'Mélange simple de substances']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les produits d\'une combustion complète?',
        answer: 'Dioxyde de carbone et eau',
        wrongAnswers: ['Oxygène uniquement', 'Carbone uniquement', 'Hydrogène uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Cite un exemple de combustion',
        answer: 'Bois qui brûle, gaz qui brûle',
        wrongAnswers: ['Eau qui gèle', 'Sel qui fond', 'Fer qui rouille']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La combustion est une réaction avec l\'oxygène',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La combustion absorbe toujours de l\'énergie',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La combustion libère de l\'énergie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La combustion produit souvent du dioxyde de carbone',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La combustion est une réaction avec l\'_____',
        answer: 'oxygène',
        wrongAnswers: ['hydrogène', 'azote', 'carbone']
      },
      {
        type: 'multiple_choice',
        question: 'La combustion produit souvent du dioxyde de:',
        answer: 'carbone',
        wrongAnswers: ['hydrogène', 'azote', 'soufre']
      },
      {
        type: 'multiple_choice',
        question: 'La combustion _____ de l\'énergie',
        answer: 'libère',
        wrongAnswers: ['absorbe', 'transforme', 'détruit']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'une combustion? Glisse la réponse:',
        answer: 'Réaction avec l\'oxygène qui libère de l\'énergie',
        wordBank: ['Réaction avec l\'oxygène qui libère de l\'énergie', 'Réaction sans oxygène', 'Réaction qui absorbe de l\'énergie', 'Mélange simple de substances'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building combustion)
      {
        type: 'drag_and_drop',
        question: 'Construis: La combustion est une réaction avec l\'_____',
        answer: ['oxygène'],
        wordBank: ['oxygène', 'carbone', 'hydrogène', 'azote'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s4': {
    questions: [
      { question: "L'oxydation est une réaction avec l'oxygène", answer: "vrai" },
      { question: "La rouille est une oxydation du fer", answer: "vrai" },
      { question: "L'oxydation peut être lente ou rapide", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une oxydation?',
        answer: 'Réaction avec l\'oxygène',
        wrongAnswers: ['Réaction sans oxygène', 'Réaction avec l\'hydrogène', 'Mélange simple']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la rouille?',
        answer: 'Oxydation du fer',
        wrongAnswers: ['Oxydation du cuivre', 'Combustion du bois', 'Dissolution du sel']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les types d\'oxydation?',
        answer: 'Lente (rouille) ou rapide (combustion)',
        wrongAnswers: ['Seulement rapide', 'Seulement lente', 'Toujours instantanée']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'oxydation est une réaction avec l\'oxygène',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La rouille est une oxydation du cuivre',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La rouille est une oxydation du fer',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'oxydation peut être lente ou rapide',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'oxydation est une réaction avec l\'_____',
        answer: 'oxygène',
        wrongAnswers: ['hydrogène', 'azote', 'carbone']
      },
      {
        type: 'multiple_choice',
        question: 'La rouille est une oxydation du:',
        answer: 'fer',
        wrongAnswers: ['cuivre', 'aluminium', 'or']
      },
      {
        type: 'multiple_choice',
        question: 'L\'oxydation peut être _____ ou rapide',
        answer: 'lente',
        wrongAnswers: ['instantanée', 'moyenne', 'continue']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce que la rouille? Glisse la réponse:',
        answer: 'Oxydation du fer',
        wordBank: ['Oxydation du fer', 'Oxydation du cuivre', 'Combustion du bois', 'Dissolution du sel'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building oxidation)
      {
        type: 'drag_and_drop',
        question: 'Construis: La rouille est une oxydation du _____',
        answer: ['fer'],
        wordBank: ['fer', 'cuivre', 'bois', 'plastique'],
        mode: 'construct'
      }
    ]
  },

  'ch2-s5': {
    questions: [
      { question: "La neutralisation est une réaction acide-base", answer: "vrai" },
      { question: "Un acide + une base donne un sel + de l'eau", answer: "vrai" },
      { question: "Le pH mesure l'acidité", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une neutralisation?',
        answer: 'Réaction entre un acide et une base',
        wrongAnswers: ['Réaction entre deux acides', 'Réaction entre deux bases', 'Réaction sans produits']
      },
      {
        type: 'multiple_choice',
        question: 'Quels sont les produits d\'une neutralisation?',
        answer: 'Sel et eau',
        wrongAnswers: ['Acide et base', 'Oxygène et carbone', 'Hydrogène uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que le pH?',
        answer: 'Mesure de l\'acidité (0-14)',
        wrongAnswers: ['Mesure de la température', 'Mesure de la masse', 'Mesure du volume']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La neutralisation est une réaction acide-base',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un acide + une base donne uniquement de l\'eau',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un acide + une base donne un sel + de l\'eau',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le pH mesure l\'acidité',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La neutralisation est une réaction _____-base',
        answer: 'acide',
        wrongAnswers: ['base', 'sel', 'eau']
      },
      {
        type: 'multiple_choice',
        question: 'Un acide + une base donne un _____ + de l\'eau',
        answer: 'sel',
        wrongAnswers: ['acide', 'base', 'gaz']
      },
      {
        type: 'multiple_choice',
        question: 'Le pH mesure l\'_____',
        answer: 'acidité',
        wrongAnswers: ['basicité', 'concentration', 'température']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quels sont les produits d\'une neutralisation? Glisse la réponse:',
        answer: 'Sel et eau',
        wordBank: ['Sel et eau', 'Acide et base', 'Oxygène et carbone', 'Hydrogène uniquement'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building neutralization)
      {
        type: 'drag_and_drop',
        question: 'Construis: Un acide + une base donne un _____ + de l\'eau',
        answer: ['sel'],
        wordBank: ['sel', 'acide', 'base', 'oxygène'],
        mode: 'construct'
      }
    ]
  },

  // CHAPTER 3: PRÉPARATION DE SOLUTIONS
  'ch3-s1': {
    questions: [
      { question: "Une solution est un mélange homogène", answer: "vrai" },
      { question: "Le soluté est la substance dissoute", answer: "vrai" },
      { question: "Le solvant est le liquide qui dissout", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une solution?',
        answer: 'Mélange homogène de soluté et solvant',
        wrongAnswers: ['Mélange hétérogène', 'Substance pure', 'Mélange de deux solides']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un soluté?',
        answer: 'Substance dissoute dans le solvant',
        wrongAnswers: ['Liquide qui dissout', 'Mélange complet', 'Substance insoluble']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un solvant?',
        answer: 'Liquide qui dissout le soluté',
        wrongAnswers: ['Substance dissoute', 'Mélange hétérogène', 'Produit de la dissolution']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une solution est un mélange homogène',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le soluté est le liquide qui dissout',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le soluté est la substance dissoute',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le solvant est le liquide qui dissout',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Une solution est un mélange _____ de soluté et solvant',
        answer: 'homogène',
        wrongAnswers: ['hétérogène', 'complexe', 'simple']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ est la substance dissoute',
        answer: 'soluté',
        wrongAnswers: ['solvant', 'solution', 'mélange']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ est le liquide qui dissout',
        answer: 'solvant',
        wrongAnswers: ['soluté', 'solution', 'mélange']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'un soluté? Glisse la réponse:',
        answer: 'Substance dissoute dans le solvant',
        wordBank: ['Substance dissoute dans le solvant', 'Liquide qui dissout', 'Mélange complet', 'Substance insoluble'],
        mode: 'select'
      },
      // Drag and Drop - Construction (building solution concept)
      {
        type: 'drag_and_drop',
        question: 'Construis: Une solution = _____ + solvant',
        answer: ['soluté'],
        wordBank: ['soluté', 'solvant', 'mélange', 'substance'],
        mode: 'construct'
      }
    ]
  },

  'ch3-s2': {
    questions: [
      { question: "La concentration mesure la quantité de soluté", answer: "vrai" },
      { question: "La concentration massique s'exprime en g/L", answer: "vrai" },
      { question: "C = m/V où m est la masse et V le volume", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la concentration?',
        answer: 'Quantité de soluté par unité de volume',
        wrongAnswers: ['Quantité de solvant par unité de volume', 'Masse totale de la solution', 'Volume total de la solution']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'unité de concentration massique?',
        answer: 'g/L (grammes par litre)',
        wrongAnswers: ['L/g (litres par gramme)', 'g/mL', 'mol/kg']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule de la concentration massique?',
        answer: 'C = m/V',
        wrongAnswers: ['C = V/m', 'C = m × V', 'C = m/V²']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la concentration: 25g de soluté dans 5L de solution',
        answer: '5 g/L',
        wrongAnswers: ['20 g/L', '30 g/L', '125 g/L']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La concentration mesure la quantité de soluté',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La concentration massique s\'exprime en L/g',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La concentration massique s\'exprime en g/L',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'C = m/V où m est la masse et V le volume',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La concentration mesure la quantité de _____ par unité de volume',
        answer: 'soluté',
        wrongAnswers: ['solvant', 'solution', 'eau']
      },
      {
        type: 'multiple_choice',
        question: 'La concentration massique s\'exprime en:',
        answer: 'g/L',
        wrongAnswers: ['mol/L', 'kg/m³', 'g/mL']
      },
      {
        type: 'multiple_choice',
        question: 'C = m/V où m est la _____ et V le volume',
        answer: 'masse',
        wrongAnswers: ['volume', 'concentration', 'quantité']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la formule de la concentration massique? Glisse la réponse:',
        answer: 'C = m/V',
        wordBank: ['C = m/V', 'C = V/m', 'C = m × V', 'C = m/V²'],
        mode: 'select'
      }
    ]
  },

  'ch3-s3': {
    questions: [
      { question: "La dilution diminue la concentration", answer: "vrai" },
      { question: "C₁V₁ = C₂V₂ pour une dilution", answer: "vrai" },
      { question: "L'eau est ajoutée lors de la dilution", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une dilution?',
        answer: 'Diminution de la concentration en ajoutant du solvant',
        wrongAnswers: ['Augmentation de la concentration', 'Évaporation du solvant', 'Ajout de plus de soluté']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle formule utilise-t-on pour une dilution?',
        answer: 'C₁V₁ = C₂V₂',
        wrongAnswers: ['C₁/V₁ = C₂/V₂', 'C₁ + V₁ = C₂ + V₂', 'C₁ × V₂ = C₂ × V₁']
      },
      {
        type: 'multiple_choice',
        question: 'Pour diluer une solution, on ajoute:',
        answer: 'Du solvant (eau)',
        wrongAnswers: ['Du soluté', 'Plus de solution', 'Un autre solvant coloré']
      },
      {
        type: 'multiple_choice',
        question: 'Dilution: C₁=20g/L, V₁=50mL, C₂=5g/L. Calcule V₂',
        answer: '200 mL',
        wrongAnswers: ['100 mL', '250 mL', '500 mL']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La dilution diminue la concentration',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'C₁V₁ = C₂V₂ pour une dilution',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La dilution augmente toujours la concentration',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'eau est ajoutée lors de la dilution',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La dilution _____ la concentration',
        answer: 'diminue',
        wrongAnswers: ['augmente', 'maintient', 'double']
      },
      {
        type: 'multiple_choice',
        question: 'Pour une dilution: C₁V₁ = ?',
        answer: 'C₂V₂',
        wrongAnswers: ['C₁V₂', 'C₂V₁', 'C₁C₂']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ est ajoutée lors de la dilution',
        answer: 'eau',
        wrongAnswers: ['soluté', 'acide', 'base']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle formule utilise-t-on pour une dilution? Glisse la réponse:',
        answer: 'C₁V₁ = C₂V₂',
        wordBank: ['C₁V₁ = C₂V₂', 'C₁/V₁ = C₂/V₂', 'C₁ + V₁ = C₂ + V₂', 'C₁ × V₂ = C₂ × V₁'],
        mode: 'select'
      }
    ]
  },

  'ch3-s4': {
    questions: [
      { question: "La molarité s'exprime en mol/L", answer: "vrai" },
      { question: "Une mole contient 6,02×10²³ entités", answer: "vrai" },
      { question: "n = m/M où M est la masse molaire", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'unité de la molarité?',
        answer: 'mol/L (moles par litre)',
        wrongAnswers: ['L/mol', 'g/mol', 'mol/g']
      },
      {
        type: 'multiple_choice',
        question: 'Combien d\'entités contient une mole?',
        answer: '6,02 × 10²³',
        wrongAnswers: ['6,02 × 10²²', '6,02 × 10²⁴', '10²³']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule pour calculer le nombre de moles?',
        answer: 'n = m/M',
        wrongAnswers: ['n = m × M', 'n = M/m', 'n = m/M²']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule le nombre de moles: m = 36g, M = 18g/mol',
        answer: '2 mol',
        wrongAnswers: ['1 mol', '3 mol', '0,5 mol']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La molarité s\'exprime en mol/L',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Une mole contient 10²³ entités',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Une mole contient 6,02×10²³ entités',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'n = m/M où M est la masse molaire',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La molarité s\'exprime en:',
        answer: 'mol/L',
        wrongAnswers: ['g/L', 'kg/m³', 'mol/mL']
      },
      {
        type: 'multiple_choice',
        question: 'Une mole contient combien d\'entités?',
        answer: '6,02×10²³',
        wrongAnswers: ['6,02×10²²', '6,02×10²⁴', '10²³']
      },
      {
        type: 'multiple_choice',
        question: 'n = m/M où M est la masse:',
        answer: 'molaire',
        wrongAnswers: ['atomique', 'volumique', 'massique']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien d\'entités contient une mole? Glisse la réponse:',
        answer: '6,02 × 10²³',
        wordBank: ['6,02 × 10²³', '6,02 × 10²²', '6,02 × 10²⁴', '10²³'],
        mode: 'select'
      }
    ]
  },

  'ch3-s5': {
    questions: [
      { question: "Le pH mesure l'acidité d'une solution", answer: "vrai" },
      { question: "pH < 7: acide, pH = 7: neutre, pH > 7: basique", answer: "vrai" },
      { question: "Le papier pH change de couleur selon le pH", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que le pH?',
        answer: 'Mesure de l\'acidité d\'une solution (échelle 0-14)',
        wrongAnswers: ['Mesure de la température', 'Mesure de la concentration', 'Mesure du volume']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la valeur du pH pour une solution neutre?',
        answer: 'pH = 7',
        wrongAnswers: ['pH = 0', 'pH = 14', 'pH = 10']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'indique un pH < 7?',
        answer: 'Solution acide',
        wrongAnswers: ['Solution basique', 'Solution neutre', 'Solution pure']
      },
      {
        type: 'multiple_choice',
        question: 'Comment peut-on mesurer le pH?',
        answer: 'Papier pH ou pH-mètre',
        wrongAnswers: ['Balance', 'Règle graduée', 'Thermomètre']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le pH mesure l\'acidité d\'une solution',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'pH < 7: basique, pH = 7: neutre, pH > 7: acide',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'pH < 7: acide, pH = 7: neutre, pH > 7: basique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le papier pH change de couleur selon le pH',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le pH mesure l\'_____ d\'une solution',
        answer: 'acidité',
        wrongAnswers: ['basicité', 'concentration', 'température']
      },
      {
        type: 'multiple_choice',
        question: 'pH = 7 signifie que la solution est:',
        answer: 'neutre',
        wrongAnswers: ['acide', 'basique', 'concentrée']
      },
      {
        type: 'multiple_choice',
        question: 'pH < 7 signifie que la solution est:',
        answer: 'acide',
        wrongAnswers: ['basique', 'neutre', 'diluée']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la valeur du pH pour une solution neutre? Glisse la réponse:',
        answer: 'pH = 7',
        wordBank: ['pH = 7', 'pH = 0', 'pH = 14', 'pH = 10'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 4: ÉLECTRICITÉ
  'ch4-s1': {
    questions: [
      { question: "La puissance électrique s'exprime en watts (W)", answer: "vrai" },
      { question: "P = U × I", answer: "vrai" },
      { question: "1 kW = 1000 W", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'unité de la puissance électrique?',
        answer: 'Watt (W)',
        wrongAnswers: ['Volt (V)', 'Ampère (A)', 'Ohm (Ω)']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule de la puissance électrique?',
        answer: 'P = U × I',
        wrongAnswers: ['P = U/I', 'P = U + I', 'P = U²/I']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de watts dans 1 kilowatt?',
        answer: '1000 W',
        wrongAnswers: ['100 W', '10 000 W', '500 W']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la puissance: U = 24V, I = 3A',
        answer: '72 W',
        wrongAnswers: ['27 W', '8 W', '21 W']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La puissance électrique s\'exprime en watts (W)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'P = U/I',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'P = U × I',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 kW = 1000 W',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La puissance électrique s\'exprime en _____ (W)',
        answer: 'watts',
        wrongAnswers: ['joules', 'volts', 'ampères']
      },
      {
        type: 'multiple_choice',
        question: 'P = ? × I',
        answer: 'U',
        wrongAnswers: ['R', 'E', 't']
      },
      {
        type: 'multiple_choice',
        question: '1 kW = ? W',
        answer: '1000',
        wrongAnswers: ['100', '10000', '10']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la formule de la puissance électrique? Glisse la réponse:',
        answer: 'P = U × I',
        wordBank: ['P = U × I', 'P = U/I', 'P = U + I', 'P = U²/I'],
        mode: 'select'
      }
    ]
  },

  'ch4-s2': {
    questions: [
      { question: "L'énergie électrique E = P × t", answer: "vrai" },
      { question: "L'énergie s'exprime en joules (J) ou kWh", answer: "vrai" },
      { question: "1 kWh = 3 600 000 J", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule de l\'énergie électrique?',
        answer: 'E = P × t',
        wrongAnswers: ['E = P/t', 'E = P + t', 'E = P² × t']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les unités de l\'énergie électrique?',
        answer: 'Joule (J) ou kilowattheure (kWh)',
        wrongAnswers: ['Watt (W) uniquement', 'Volt (V) uniquement', 'Ampère (A) uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de joules dans 1 kilowattheure?',
        answer: '3 600 000 J',
        wrongAnswers: ['360 000 J', '36 000 J', '360 J']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'énergie: P = 100W, t = 2h',
        answer: '200 Wh ou 0,2 kWh',
        wrongAnswers: ['50 Wh', '300 Wh', '100 Wh']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'énergie électrique E = P × t',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'énergie s\'exprime uniquement en joules',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'énergie s\'exprime en joules (J) ou kWh',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 kWh = 3 600 000 J',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'énergie électrique E = P × ?',
        answer: 't',
        wrongAnswers: ['U', 'I', 'R']
      },
      {
        type: 'multiple_choice',
        question: 'L\'énergie s\'exprime en joules (J) ou:',
        answer: 'kWh',
        wrongAnswers: ['W', 'V', 'A']
      },
      {
        type: 'multiple_choice',
        question: '1 kWh = ? J',
        answer: '3 600 000',
        wrongAnswers: ['3600', '360000', '36000']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de joules dans 1 kilowattheure? Glisse la réponse:',
        answer: '3 600 000 J',
        wordBank: ['3 600 000 J', '360 000 J', '36 000 J', '360 J'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 5: MÉCANIQUE
  'ch5-s1': {
    questions: [
      { question: "La vitesse v = d/t", answer: "vrai" },
      { question: "La vitesse s'exprime en m/s ou km/h", answer: "vrai" },
      { question: "1 m/s = 3,6 km/h", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule de la vitesse?',
        answer: 'v = d/t',
        wrongAnswers: ['v = d × t', 'v = t/d', 'v = d²/t']
      },
      {
        type: 'multiple_choice',
        question: 'Quelles sont les unités de la vitesse?',
        answer: 'm/s ou km/h',
        wrongAnswers: ['m/s² uniquement', 'km/s uniquement', 'm/h uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de km/h dans 1 m/s?',
        answer: '3,6 km/h',
        wrongAnswers: ['36 km/h', '0,36 km/h', '360 km/h']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la vitesse: distance = 120m, temps = 10s',
        answer: '12 m/s',
        wrongAnswers: ['10 m/s', '1,2 m/s', '120 m/s']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La vitesse v = d/t',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La vitesse s\'exprime uniquement en m/s',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La vitesse s\'exprime en m/s ou km/h',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 m/s = 3,6 km/h',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La vitesse v = ?/t',
        answer: 'd',
        wrongAnswers: ['t', 'a', 'v']
      },
      {
        type: 'multiple_choice',
        question: 'La vitesse s\'exprime en m/s ou:',
        answer: 'km/h',
        wrongAnswers: ['m/h', 'km/s', 'cm/s']
      },
      {
        type: 'multiple_choice',
        question: '1 m/s = ? km/h',
        answer: '3,6',
        wrongAnswers: ['36', '0.36', '360']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de km/h dans 1 m/s? Glisse la réponse:',
        answer: '3,6 km/h',
        wordBank: ['3,6 km/h', '36 km/h', '0,36 km/h', '360 km/h'],
        mode: 'select'
      }
    ]
  },

  'ch5-s2': {
    questions: [
      { question: "L'accélération mesure la variation de vitesse", answer: "vrai" },
      { question: "a = Δv/Δt", answer: "vrai" },
      { question: "L'accélération s'exprime en m/s²", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'accélération?',
        answer: 'Variation de vitesse par unité de temps',
        wrongAnswers: ['Vitesse constante', 'Distance parcourue', 'Temps écoulé']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule de l\'accélération?',
        answer: 'a = Δv/Δt',
        wrongAnswers: ['a = v × t', 'a = v/t', 'a = Δv × Δt']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'unité de l\'accélération?',
        answer: 'm/s² (mètres par seconde au carré)',
        wrongAnswers: ['m/s', 'm²/s', 's/m']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'accélération: vitesse passe de 10 m/s à 30 m/s en 5s',
        answer: '4 m/s²',
        wrongAnswers: ['2 m/s²', '6 m/s²', '20 m/s²']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'accélération mesure la variation de vitesse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'a = v × t',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'a = Δv/Δt',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'accélération s\'exprime en m/s²',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'accélération mesure la _____ de vitesse',
        answer: 'variation',
        wrongAnswers: ['valeur', 'direction', 'sens']
      },
      {
        type: 'multiple_choice',
        question: 'a = ?/Δt',
        answer: 'Δv',
        wrongAnswers: ['v', 'd', 't']
      },
      {
        type: 'multiple_choice',
        question: 'L\'accélération s\'exprime en:',
        answer: 'm/s²',
        wrongAnswers: ['m/s', 'm²/s', 'm/s³']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la formule de l\'accélération? Glisse la réponse:',
        answer: 'a = Δv/Δt',
        wordBank: ['a = Δv/Δt', 'a = v × t', 'a = v/t', 'a = Δv × Δt'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 6: ONDES ET SON
  'ch6-s1': {
    questions: [
      { question: "Une onde transporte de l'énergie sans transporter de matière", answer: "vrai" },
      { question: "La fréquence s'exprime en hertz (Hz)", answer: "vrai" },
      { question: "La longueur d'onde est la distance entre deux crêtes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une onde?',
        answer: 'Phénomène qui transporte de l\'énergie sans transporter de matière',
        wrongAnswers: ['Transport de matière uniquement', 'Absence d\'énergie', 'Phénomène immobile']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'unité de la fréquence?',
        answer: 'Hertz (Hz)',
        wrongAnswers: ['Watt (W)', 'Joule (J)', 'Mètre (m)']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la longueur d\'onde?',
        answer: 'Distance entre deux crêtes successives',
        wrongAnswers: ['Distance entre deux creux', 'Hauteur de la crête', 'Vitesse de l\'onde']
      },
      {
        type: 'multiple_choice',
        question: 'Cite un exemple d\'onde',
        answer: 'Ondes sonores, ondes lumineuses, ondes radio',
        wrongAnswers: ['Courant électrique', 'Champ magnétique statique', 'Objet en mouvement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une onde transporte de l\'énergie sans transporter de matière',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La fréquence s\'exprime en watts',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La fréquence s\'exprime en hertz (Hz)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La longueur d\'onde est la distance entre deux crêtes',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Une onde transporte de l\'_____ sans transporter de matière',
        answer: 'énergie',
        wrongAnswers: ['matière', 'chaleur', 'lumière']
      },
      {
        type: 'multiple_choice',
        question: 'La fréquence s\'exprime en _____ (Hz)',
        answer: 'hertz',
        wrongAnswers: ['watts', 'joules', 'mètres']
      },
      {
        type: 'multiple_choice',
        question: 'La longueur d\'onde est la distance entre deux:',
        answer: 'crêtes',
        wrongAnswers: ['nœuds', 'troughs', 'amplitudes']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'unité de la fréquence? Glisse la réponse:',
        answer: 'Hertz (Hz)',
        wordBank: ['Hertz (Hz)', 'Watt (W)', 'Joule (J)', 'Mètre (m)'],
        mode: 'select'
      }
    ]
  },

  'ch6-s2': {
    questions: [
      { question: "Le son est une onde mécanique", answer: "vrai" },
      { question: "La vitesse du son dans l'air est environ 340 m/s", answer: "vrai" },
      { question: "L'intensité sonore s'exprime en décibels (dB)", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que le son?',
        answer: 'Onde mécanique qui nécessite un milieu matériel pour se propager',
        wrongAnswers: ['Onde électromagnétique', 'Phénomène immobile', 'Transport de matière uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la vitesse du son dans l\'air à température ambiante?',
        answer: 'Environ 340 m/s',
        wrongAnswers: ['340 km/s', '34 m/s', '3400 m/s']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'unité de l\'intensité sonore?',
        answer: 'Décibel (dB)',
        wrongAnswers: ['Hertz (Hz)', 'Watt (W)', 'Joule (J)']
      },
      {
        type: 'multiple_choice',
        question: 'Le son peut-il se propager dans le vide?',
        answer: 'Non, il nécessite un milieu matériel',
        wrongAnswers: ['Oui, à la même vitesse', 'Oui, mais plus lentement', 'Oui, mais plus rapidement']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le son est une onde mécanique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La vitesse du son dans l\'air est environ 34 m/s',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La vitesse du son dans l\'air est environ 340 m/s',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'intensité sonore s\'exprime en décibels (dB)',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Le son est une onde:',
        answer: 'mécanique',
        wrongAnswers: ['électromagnétique', 'lumineuse', 'thermique']
      },
      {
        type: 'multiple_choice',
        question: 'La vitesse du son dans l\'air est environ ? m/s',
        answer: '340',
        wrongAnswers: ['300', '400', '300000']
      },
      {
        type: 'multiple_choice',
        question: 'L\'intensité sonore s\'exprime en _____ (dB)',
        answer: 'décibels',
        wrongAnswers: ['hertz', 'watts', 'joules']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la vitesse du son dans l\'air? Glisse la réponse:',
        answer: 'Environ 340 m/s',
        wordBank: ['Environ 340 m/s', '340 km/s', '34 m/s', '3400 m/s'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 7: ÉNERGIE ÉLECTRIQUE
  'ch7-s1': {
    questions: [
      { question: "La puissance nominale est indiquée sur l'appareil", answer: "vrai" },
      { question: "Un appareil de 100W consomme 100W sous sa tension nominale", answer: "vrai" },
      { question: "La surtension peut endommager un appareil", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la puissance nominale?',
        answer: 'Puissance indiquée par le fabricant sur l\'appareil',
        wrongAnswers: ['Puissance maximale possible', 'Puissance minimale', 'Puissance moyenne']
      },
      {
        type: 'multiple_choice',
        question: 'Un appareil marqué 100W consomme combien sous sa tension nominale?',
        answer: '100W',
        wrongAnswers: ['Plus que 100W', 'Moins que 100W', 'Cela dépend du temps']
      },
      {
        type: 'multiple_choice',
        question: 'Que fait un fusible en cas de surcharge électrique?',
        answer: 'Fond (s\'ouvre) pour protéger l\'installation',
        wrongAnswers: ['Augmente le courant', 'Réduit la tension', 'Ne fait rien']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'arrive-t-il si un appareil reçoit une surtension?',
        answer: 'Il peut être endommagé',
        wrongAnswers: ['Il consomme moins', 'Rien ne se passe', 'Il devient plus efficace']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La puissance nominale est indiquée sur l\'appareil',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un appareil de 100W consomme toujours plus que 100W',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un appareil de 100W consomme 100W sous sa tension nominale',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La surtension peut endommager un appareil',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La puissance _____ est indiquée sur l\'appareil',
        answer: 'nominale',
        wrongAnswers: ['maximale', 'minimale', 'réelle']
      },
      {
        type: 'multiple_choice',
        question: 'Un appareil de 100W consomme ? sous sa tension nominale',
        answer: '100W',
        wrongAnswers: ['50W', '200W', '10W']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ peut endommager un appareil',
        answer: 'surtension',
        wrongAnswers: ['sous-tension', 'résistance', 'puissance']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Que fait un fusible en cas de surcharge? Glisse la réponse:',
        answer: 'Fond pour protéger l\'installation',
        wordBank: ['Fond pour protéger l\'installation', 'Augmente le courant', 'Réduit la tension', 'Ne fait rien'],
        mode: 'select'
      }
    ]
  },

  'ch7-s2-energie': {
    questions: [
      { question: "E = P × t pour calculer l'énergie", answer: "vrai" },
      { question: "1 kWh = 1000 Wh", answer: "vrai" },
      { question: "Le coût = E × prix du kWh", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle formule utilise-t-on pour calculer l\'énergie électrique?',
        answer: 'E = P × t',
        wrongAnswers: ['E = P/t', 'E = P + t', 'E = P² × t']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de watt-heures dans 1 kilowatt-heure?',
        answer: '1000 Wh',
        wrongAnswers: ['100 Wh', '10 000 Wh', '500 Wh']
      },
      {
        type: 'multiple_choice',
        question: 'Comment calcule-t-on le coût de consommation électrique?',
        answer: 'Coût = Énergie (kWh) × prix du kWh',
        wrongAnswers: ['Coût = Puissance × temps', 'Coût = Tension × courant', 'Coût = Énergie / prix']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 3500 Wh en kWh',
        answer: '3,5 kWh',
        wrongAnswers: ['0,35 kWh', '35 kWh', '350 kWh']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'E = P × t pour calculer l\'énergie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 kWh = 100 Wh',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '1 kWh = 1000 Wh',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le coût = E × prix du kWh',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'E = P × ? pour calculer l\'énergie',
        answer: 't',
        wrongAnswers: ['U', 'I', 'R']
      },
      {
        type: 'multiple_choice',
        question: '1 kWh = ? Wh',
        answer: '1000',
        wrongAnswers: ['100', '10000', '10']
      },
      {
        type: 'multiple_choice',
        question: 'Le coût = E × prix du ?',
        answer: 'kWh',
        wrongAnswers: ['W', 'J', 'V']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de watt-heures dans 1 kilowatt-heure? Glisse la réponse:',
        answer: '1000 Wh',
        wordBank: ['1000 Wh', '100 Wh', '10 000 Wh', '500 Wh'],
        mode: 'select'
      }
    ]
  },

  'ch7-s2-consommation': {
    questions: [
      { question: "La consommation dépend de la puissance et du temps", answer: "vrai" },
      { question: "E(kWh) = P(kW) × t(h)", answer: "vrai" },
      { question: "On peut économiser en réduisant la consommation", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'De quoi dépend la consommation électrique?',
        answer: 'Puissance de l\'appareil et temps d\'utilisation',
        wrongAnswers: ['Uniquement de la puissance', 'Uniquement du temps', 'Uniquement de la tension']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle formule utilise-t-on pour calculer l\'énergie en kWh?',
        answer: 'E(kWh) = P(kW) × t(h)',
        wrongAnswers: ['E(kWh) = P(W) × t(s)', 'E(kWh) = P(kW) / t(h)', 'E(kWh) = P(kW) + t(h)']
      },
      {
        type: 'multiple_choice',
        question: 'Comment peut-on économiser l\'énergie électrique?',
        answer: 'Réduire la puissance utilisée ou le temps d\'utilisation',
        wrongAnswers: ['Augmenter la tension', 'Utiliser plus longtemps', 'Augmenter la puissance']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'énergie: P = 2kW, t = 3h',
        answer: '6 kWh',
        wrongAnswers: ['5 kWh', '1,5 kWh', '9 kWh']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La consommation dépend de la puissance et du temps',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'E(kWh) = P(kW) / t(h)',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'E(kWh) = P(kW) × t(h)',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut économiser en réduisant la consommation',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La consommation dépend de la _____ et du temps',
        answer: 'puissance',
        wrongAnswers: ['tension', 'courant', 'résistance']
      },
      {
        type: 'multiple_choice',
        question: 'E(kWh) = P(kW) × ?(h)',
        answer: 't',
        wrongAnswers: ['U', 'I', 'R']
      },
      {
        type: 'multiple_choice',
        question: 'On peut économiser en _____ la consommation',
        answer: 'réduisant',
        wrongAnswers: ['augmentant', 'maintenant', 'doublant']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle formule pour calculer l\'énergie en kWh? Glisse la réponse:',
        answer: 'E(kWh) = P(kW) × t(h)',
        wordBank: ['E(kWh) = P(kW) × t(h)', 'E(kWh) = P(W) × t(s)', 'E(kWh) = P(kW) / t(h)', 'E(kWh) = P(kW) + t(h)'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 8: OPTIQUE
  'ch8-s1': {
    questions: [
      { question: "La lumière se propage en ligne droite", answer: "vrai" },
      { question: "La vitesse de la lumière est 300 000 km/s", answer: "vrai" },
      { question: "La réflexion change la direction de la lumière", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment se propage la lumière?',
        answer: 'En ligne droite',
        wrongAnswers: ['En forme de vague circulaire', 'En zigzag', 'De manière aléatoire']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la vitesse de la lumière dans le vide?',
        answer: '300 000 km/s',
        wrongAnswers: ['30 000 km/s', '3 000 000 km/s', '300 km/s']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la réflexion de la lumière?',
        answer: 'Changement de direction lorsque la lumière rencontre une surface',
        wrongAnswers: ['Absorption de la lumière', 'Transmission sans changement', 'Création de lumière']
      },
      {
        type: 'multiple_choice',
        question: 'Cite un exemple de réflexion',
        answer: 'Miroir, surface de l\'eau calme, vitre',
        wrongAnswers: ['Panneau solaire', 'Lampe électrique', 'Feu']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La lumière se propage en ligne droite',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La vitesse de la lumière est 30 000 km/s',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La vitesse de la lumière est 300 000 km/s',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La réflexion change la direction de la lumière',
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
        question: 'La vitesse de la lumière est ? km/s dans le vide',
        answer: '300 000',
        wrongAnswers: ['3000', '30000', '3000000']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ change la direction de la lumière',
        answer: 'réflexion',
        wrongAnswers: ['réfraction', 'diffraction', 'dispersion']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la vitesse de la lumière dans le vide? Glisse la réponse:',
        answer: '300 000 km/s',
        wordBank: ['300 000 km/s', '30 000 km/s', '3 000 000 km/s', '300 km/s'],
        mode: 'select'
      }
    ]
  },

  'ch8-s2': {
    questions: [
      { question: "La réfraction change la direction à l'interface", answer: "vrai" },
      { question: "L'angle d'incidence et l'angle de réfraction sont liés", answer: "vrai" },
      { question: "L'indice de réfraction caractérise un milieu", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la réfraction de la lumière?',
        answer: 'Changement de direction à l\'interface entre deux milieux transparents',
        wrongAnswers: ['Absorption de la lumière', 'Réflexion totale', 'Création de lumière']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle loi régit la réfraction de la lumière?',
        answer: 'Loi de Snell-Descartes',
        wrongAnswers: ['Loi d\'Ohm', 'Loi de Newton', 'Loi de Joule']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'indice de réfraction?',
        answer: 'Caractéristique d\'un milieu qui indique sa capacité à dévier la lumière',
        wrongAnswers: ['Vitesse de la lumière', 'Intensité lumineuse', 'Couleur du milieu']
      },
      {
        type: 'multiple_choice',
        question: 'Cite un exemple de réfraction',
        answer: 'Crayon dans l\'eau qui semble cassé, prisme, verres de lunettes',
        wrongAnswers: ['Miroir', 'Feu de signalisation', 'Lampe torche']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La réfraction change la direction à l\'interface',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'angle d\'incidence et l\'angle de réfraction ne sont pas liés',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'angle d\'incidence et l\'angle de réfraction sont liés',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'indice de réfraction caractérise un milieu',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La _____ change la direction à l\'interface',
        answer: 'réfraction',
        wrongAnswers: ['réflexion', 'diffraction', 'dispersion']
      },
      {
        type: 'multiple_choice',
        question: 'L\'angle d\'incidence et l\'angle de _____ sont liés',
        answer: 'réfraction',
        wrongAnswers: ['réflexion', 'diffraction', 'incidence']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ de réfraction caractérise un milieu',
        answer: 'indice',
        wrongAnswers: ['angle', 'vitesse', 'fréquence']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle loi régit la réfraction? Glisse la réponse:',
        answer: 'Loi de Snell-Descartes',
        wordBank: ['Loi de Snell-Descartes', 'Loi d\'Ohm', 'Loi de Newton', 'Loi de Joule'],
        mode: 'select'
      }
    ]
  },

  'ch8-s3': {
    questions: [
      { question: "Une lentille convergente fait converger les rayons", answer: "vrai" },
      { question: "Le foyer est le point de convergence", answer: "vrai" },
      { question: "La distance focale est la distance foyer-lentille", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une lentille convergente?',
        answer: 'Lentille qui fait converger (rassembler) les rayons lumineux en un point',
        wrongAnswers: ['Lentille qui fait diverger les rayons', 'Lentille qui absorbe la lumière', 'Lentille qui bloque la lumière']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que le foyer d\'une lentille convergente?',
        answer: 'Point où convergent les rayons lumineux parallèles',
        wrongAnswers: ['Point où divergent les rayons', 'Centre de la lentille', 'Bord de la lentille']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la distance focale?',
        answer: 'Distance entre le foyer et le centre de la lentille',
        wrongAnswers: ['Distance entre deux lentilles', 'Largeur de la lentille', 'Épaisseur de la lentille']
      },
      {
        type: 'multiple_choice',
        question: 'Cite un exemple d\'utilisation de lentille convergente',
        answer: 'Loupe, appareil photo, microscope',
        wrongAnswers: ['Miroir', 'Prisme', 'Filtre coloré']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Une lentille convergente fait converger les rayons',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le foyer est le point de divergence',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le foyer est le point de convergence',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La distance focale est la distance foyer-lentille',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Une lentille _____ fait converger les rayons',
        answer: 'convergente',
        wrongAnswers: ['divergente', 'plane', 'concave']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ est le point de convergence',
        answer: 'foyer',
        wrongAnswers: ['centre', 'sommet', 'pôle']
      },
      {
        type: 'multiple_choice',
        question: 'La distance _____ est la distance foyer-lentille',
        answer: 'focale',
        wrongAnswers: ['principale', 'secondaire', 'optique']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce que le foyer? Glisse la réponse:',
        answer: 'Point de convergence des rayons parallèles',
        wordBank: ['Point de convergence des rayons parallèles', 'Point où divergent les rayons', 'Centre de la lentille', 'Bord de la lentille'],
        mode: 'select'
      }
    ]
  },

  'ch8-s4': {
    questions: [
      { question: "L'œil fonctionne comme un appareil photo", answer: "vrai" },
      { question: "Le cristallin est la lentille de l'œil", answer: "vrai" },
      { question: "La rétine reçoit l'image", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment fonctionne l\'œil humain?',
        answer: 'Comme un appareil photo avec une lentille (cristallin) et un écran (rétine)',
        wrongAnswers: ['Comme un projecteur', 'Comme un miroir', 'Comme une loupe simple']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle du cristallin dans l\'œil?',
        answer: 'Faire converger les rayons lumineux sur la rétine',
        wrongAnswers: ['Absorber la lumière', 'Bloquer les rayons UV', 'Produire des images']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le rôle de la rétine?',
        answer: 'Recevoir l\'image formée et la transmettre au cerveau',
        wrongAnswers: ['Faire converger les rayons', 'Protéger l\'œil', 'Changer la couleur de l\'œil']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle partie de l\'œil fonctionne comme la lentille d\'un appareil photo?',
        answer: 'Le cristallin',
        wrongAnswers: ['La rétine', 'L\'iris', 'La pupille']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'L\'œil fonctionne comme un appareil photo',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le cristallin est l\'écran de l\'œil',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le cristallin est la lentille de l\'œil',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La rétine reçoit l\'image',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'L\'œil fonctionne comme un _____ photo',
        answer: 'appareil',
        wrongAnswers: ['miroir', 'lentille', 'prisme']
      },
      {
        type: 'multiple_choice',
        question: 'Le _____ est la lentille de l\'œil',
        answer: 'cristallin',
        wrongAnswers: ['iris', 'pupille', 'rétine']
      },
      {
        type: 'multiple_choice',
        question: 'La _____ reçoit l\'image',
        answer: 'rétine',
        wrongAnswers: ['cornée', 'iris', 'cristallin']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le rôle du cristallin? Glisse la réponse:',
        answer: 'Faire converger les rayons sur la rétine',
        wordBank: ['Faire converger les rayons sur la rétine', 'Absorber la lumière', 'Bloquer les rayons UV', 'Produire des images'],
        mode: 'select'
      }
    ]
  },

  'ch8-s5': {
    questions: [
      { question: "La myopie est un défaut de vision", answer: "vrai" },
      { question: "L'hypermétropie est un défaut de vision", answer: "vrai" },
      { question: "Les lunettes corrigent les défauts de vision", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la myopie?',
        answer: 'Défaut de vision où on voit flou de loin mais net de près',
        wrongAnswers: ['Vision parfaite', 'Vision floue de près mais nette de loin', 'Cécité totale']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que l\'hypermétropie?',
        answer: 'Défaut de vision où on voit flou de près mais net de loin',
        wrongAnswers: ['Vision parfaite', 'Vision floue de loin mais nette de près', 'Cécité totale']
      },
      {
        type: 'multiple_choice',
        question: 'Comment corriger la myopie?',
        answer: 'Avec des lunettes équipées de lentilles divergentes',
        wrongAnswers: ['Avec des lunettes équipées de lentilles convergentes', 'Avec des lunettes sans correction', 'Avec des verres colorés']
      },
      {
        type: 'multiple_choice',
        question: 'Comment corriger l\'hypermétropie?',
        answer: 'Avec des lunettes équipées de lentilles convergentes',
        wrongAnswers: ['Avec des lunettes équipées de lentilles divergentes', 'Avec des lunettes sans correction', 'Avec des verres colorés']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La myopie est un défaut de vision',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'hypermétropie permet de voir parfaitement de près',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'hypermétropie est un défaut de vision',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les lunettes corrigent les défauts de vision',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La _____ est un défaut de vision',
        answer: 'myopie',
        wrongAnswers: ['hypermétropie', 'astigmatisme', 'presbytie']
      },
      {
        type: 'multiple_choice',
        question: 'L\'_____ est un défaut de vision',
        answer: 'hypermétropie',
        wrongAnswers: ['myopie', 'astigmatisme', 'presbytie']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ corrigent les défauts de vision',
        answer: 'lunettes',
        wrongAnswers: ['miroirs', 'lentilles', 'prismes']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce que la myopie? Glisse la réponse:',
        answer: 'Défaut: vision floue de loin',
        wordBank: ['Défaut: vision floue de loin', 'Vision parfaite', 'Défaut: vision floue de près', 'Cécité totale'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 9: THERMODYNAMIQUE
  'ch9-s1': {
    questions: [
      { question: "La température mesure l'agitation moléculaire", answer: "vrai" },
      { question: "La chaleur est un transfert d'énergie", answer: "vrai" },
      { question: "La température s'exprime en degrés Celsius", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la température?',
        answer: 'Mesure de l\'agitation des molécules dans une substance',
        wrongAnswers: ['Mesure du volume', 'Mesure de la masse', 'Mesure de la pression']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la chaleur?',
        answer: 'Transfert d\'énergie thermique d\'un corps chaud vers un corps froid',
        wrongAnswers: ['Forme d\'énergie immobile', 'Température élevée', 'Substance matérielle']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'unité de température couramment utilisée?',
        answer: 'Degré Celsius (°C)',
        wrongAnswers: ['Joule (J)', 'Watt (W)', 'Newton (N)']
      },
      {
        type: 'multiple_choice',
        question: 'Quand la température augmente, qu\'arrive-t-il aux molécules?',
        answer: 'Elles s\'agitent davantage',
        wrongAnswers: ['Elles s\'arrêtent', 'Elles ralentissent', 'Elles disparaissent']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La température mesure l\'agitation moléculaire',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La chaleur est une substance matérielle',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La chaleur est un transfert d\'énergie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La température s\'exprime en degrés Celsius',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La température mesure l\'_____ moléculaire',
        answer: 'agitation',
        wrongAnswers: ['vitesse', 'masse', 'volume']
      },
      {
        type: 'multiple_choice',
        question: 'La chaleur est un _____ d\'énergie',
        answer: 'transfert',
        wrongAnswers: ['création', 'destruction', 'transformation']
      },
      {
        type: 'multiple_choice',
        question: 'La température s\'exprime en degrés:',
        answer: 'Celsius',
        wrongAnswers: ['Fahrenheit', 'Kelvin', 'Rankine']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce que la chaleur? Glisse la réponse:',
        answer: 'Transfert d\'énergie thermique',
        wordBank: ['Transfert d\'énergie thermique', 'Forme d\'énergie immobile', 'Température élevée', 'Substance matérielle'],
        mode: 'select'
      }
    ]
  },

  'ch9-s2': {
    questions: [
      { question: "La dilatation augmente le volume avec la température", answer: "vrai" },
      { question: "Les métaux se dilatent plus que les liquides", answer: "vrai" },
      { question: "La dilatation peut causer des problèmes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la dilatation thermique?',
        answer: 'Augmentation de volume (ou de longueur) avec l\'augmentation de la température',
        wrongAnswers: ['Diminution de volume avec la température', 'Aucun changement de volume', 'Changement de couleur']
      },
      {
        type: 'multiple_choice',
        question: 'Quels matériaux se dilatent généralement le plus?',
        answer: 'Les métaux',
        wrongAnswers: ['Les liquides', 'Les gaz', 'Les solides non métalliques']
      },
      {
        type: 'multiple_choice',
        question: 'Quels problèmes peut causer la dilatation thermique?',
        answer: 'Déformation, fissures, casse de structures',
        wrongAnswers: ['Aucun problème', 'Amélioration de la résistance', 'Changement de couleur uniquement']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi laisse-t-on des espaces entre les rails de train?',
        answer: 'Pour compenser la dilatation thermique des rails',
        wrongAnswers: ['Pour économiser le métal', 'Pour le design', 'Pour faciliter le nettoyage']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La dilatation augmente le volume avec la température',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Les liquides se dilatent plus que les métaux',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les métaux se dilatent plus que les liquides',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La dilatation peut causer des problèmes',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'La dilatation _____ le volume avec la température',
        answer: 'augmente',
        wrongAnswers: ['diminue', 'maintient', 'double']
      },
      {
        type: 'multiple_choice',
        question: 'Les _____ se dilatent plus que les liquides',
        answer: 'métaux',
        wrongAnswers: ['liquides', 'gaz', 'solides']
      },
      {
        type: 'multiple_choice',
        question: 'La dilatation peut causer des:',
        answer: 'problèmes',
        wrongAnswers: ['avantages', 'solutions', 'améliorations']
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quels matériaux se dilatent généralement le plus? Glisse la réponse:',
        answer: 'Les métaux',
        wordBank: ['Les métaux', 'Les liquides', 'Les gaz', 'Les solides non métalliques'],
        mode: 'select'
      }
    ]
  },

  'ch9-s3': {
    questions: [
      { question: "Les changements d'état absorbent ou libèrent de l'énergie", answer: "vrai" },
      { question: "La fusion absorbe de l'énergie", answer: "vrai" },
      { question: "La solidification libère de l'énergie", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Que se passe-t-il lors d\'un changement d\'état (solide ↔ liquide ↔ gaz)?',
        answer: 'Absorption ou libération d\'énergie',
        wrongAnswers: ['Aucun échange d\'énergie', 'Seulement absorption', 'Seulement libération']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la fusion?',
        answer: 'Passage de l\'état solide à l\'état liquide, qui absorbe de l\'énergie',
        wrongAnswers: ['Passage du liquide au solide', 'Passage du liquide au gaz', 'Aucun changement d\'état']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la solidification?',
        answer: 'Passage de l\'état liquide à l\'état solide, qui libère de l\'énergie',
        wrongAnswers: ['Passage du solide au liquide', 'Passage du liquide au gaz', 'Aucun changement d\'état']
      },
      {
        type: 'multiple_choice',
        question: 'Quand la glace fond, que se passe-t-il?',
        answer: 'Elle absorbe de l\'énergie (chaleur) de l\'environnement',
        wrongAnswers: ['Elle libère de l\'énergie', 'Aucun échange d\'énergie', 'Elle change de couleur']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les changements d\'état absorbent ou libèrent de l\'énergie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La fusion libère de l\'énergie',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La fusion absorbe de l\'énergie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La solidification libère de l\'énergie',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'fill_in_blank',
        question: 'Les changements d\'état _____ ou libèrent de l\'énergie',
        answer: 'absorbent'
      },
      {
        type: 'fill_in_blank',
        question: 'La fusion _____ de l\'énergie',
        answer: 'absorbe'
      },
      {
        type: 'fill_in_blank',
        question: 'La solidification _____ de l\'énergie',
        answer: 'libère'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'La fusion absorbe ou libère de l\'énergie? Glisse la réponse:',
        answer: 'Absorbe',
        wordBank: ['Absorbe', 'Libère', 'Aucun échange', 'Les deux'],
        mode: 'select'
      }
    ]
  },

  'ch9-s4': {
    questions: [
      { question: "Les machines thermiques transforment la chaleur en travail", answer: "vrai" },
      { question: "Le rendement mesure l'efficacité", answer: "vrai" },
      { question: "Le rendement est toujours inférieur à 100%", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - Middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'une machine thermique?',
        answer: 'Machine qui transforme la chaleur en travail mécanique',
        wrongAnswers: ['Machine qui transforme le travail en chaleur uniquement', 'Machine qui ne consomme pas d\'énergie', 'Machine qui transforme la lumière en chaleur']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que le rendement d\'une machine?',
        answer: 'Mesure de l\'efficacité: rapport entre le travail utile et l\'énergie fournie',
        wrongAnswers: ['Mesure de la température', 'Mesure de la vitesse', 'Mesure de la puissance maximale']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi le rendement d\'une machine est-il toujours inférieur à 100%?',
        answer: 'Perte d\'énergie due aux frottements, à la chaleur perdue, etc.',
        wrongAnswers: ['Parce que c\'est la loi', 'Parce que les machines sont mal conçues', 'Parce qu\'il faut plus d\'énergie']
      },
      {
        type: 'multiple_choice',
        question: 'Cite un exemple de machine thermique',
        answer: 'Moteur de voiture, machine à vapeur, réfrigérateur',
        wrongAnswers: ['Panneau solaire', 'Batterie électrique', 'Aimant']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les machines thermiques transforment la chaleur en travail',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le rendement peut dépasser 100%',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le rendement mesure l\'efficacité',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le rendement est toujours inférieur à 100%',
        answer: 'vrai'
      },
      // Fill in the Blank - Middle school difficulty
      {
        type: 'fill_in_blank',
        question: 'Les machines thermiques transforment la _____ en travail',
        answer: 'chaleur'
      },
      {
        type: 'fill_in_blank',
        question: 'Le _____ mesure l\'efficacité',
        answer: 'rendement'
      },
      {
        type: 'fill_in_blank',
        question: 'Le rendement est toujours _____ à 100%',
        answer: 'inférieur'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Pourquoi le rendement est-il < 100%? Glisse la réponse:',
        answer: 'Perte d\'énergie (frottements, chaleur perdue)',
        wordBank: ['Perte d\'énergie (frottements, chaleur perdue)', 'Parce que c\'est la loi', 'Parce que les machines sont mal conçues', 'Parce qu\'il faut plus d\'énergie'],
        mode: 'select'
      }
    ]
  }
};

export default YEAR4_PHYSICS_SECTION_QUESTIONS;

