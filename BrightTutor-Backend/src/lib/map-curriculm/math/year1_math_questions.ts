/**
 * Year 1 Math - Improved Questions for Each Section
 * All questions are verifiable and appropriate for app format:
 * - Multiple Choice
 * - True/False (Right or Wrong)
 * - Fill-in-Blank (Typing)
 * - Completion
 * 
 * NO drawings, NO file uploads, NO unverifiable questions
 */

export const YEAR1_MATH_SECTION_QUESTIONS: {
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
      hint?: string; // Optional: educational hint explaining the concept
    }>;
  };
} = {
  // CHAPTER 1: LES NOMBRES ENTIERS
  // Section 1: Lire et écrire les nombres entiers (Reading and writing whole numbers)
  'ch1-s1': {
    questions: [
      // True/False - Mixed answers (not all true!)
      { question: "Dans le nombre 87,432, le chiffre 8 représente 8 dizaines de mille", answer: "vrai" },
      { question: "Le nombre 125,000 se lit 'cent vingt-cinq mille'", answer: "vrai" },
      { question: "Dans 45,678, le chiffre 6 est en position des centaines", answer: "faux" },
      { question: "Un nombre avec plus de chiffres est toujours plus grand qu'un nombre avec moins de chiffres", answer: "vrai" },
      { question: "Le nombre 92,345 se lit 'quatre-vingt-douze mille trois cent quarante-cinq'", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Comment écrit-on "trois mille deux cent quarante-cinq" en chiffres?',
        answer: '3,245',
        wrongAnswers: ['3,254', '3,425', '32,45']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le chiffre des dizaines de mille dans 87,432?',
        answer: '8',
        wrongAnswers: ['7', '4', '3']
      },
      {
        type: 'multiple_choice',
        question: 'Comment lit-on le nombre 125,000?',
        answer: 'cent vingt-cinq mille',
        wrongAnswers: ['douze mille cinq cents', 'cent vingt-cinq milles', 'mille deux cent cinquante']
      },
      {
        type: 'multiple_choice',
        question: 'Dans le nombre 456,789, quel chiffre représente les dizaines de mille?',
        answer: '5',
        wrongAnswers: ['4', '6', '7']
      },
      // True/False - Mixed
      {
        type: 'true_false',
        question: 'Dans le nombre 92,345, le chiffre 3 représente 3 centaines',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '125,000 se lit "cent vingt-cinq mille"',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le nombre 45,678 est plus grand que 45,768',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Complétez: Dans 456,789, le chiffre 5 représente combien de dizaines de mille?',
        answer: '5',
        wrongAnswers: ['4', '6', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Écris en chiffres: quatre-vingt-sept mille quatre cent trente-deux',
        answer: '87432',
        wrongAnswers: ['87423', '87433', '88432']
      },
      {
        type: 'multiple_choice',
        question: 'Complétez: Le nombre 125,000 a combien de chiffres?',
        answer: '6',
        wrongAnswers: ['5', '7', '8']
      },
      // Drag and Drop - Ordering (like Duolingo word bank)
      // EXACT number of options matching drop zones (no extras)
      {
        type: 'drag_and_drop',
        question: 'Rangez du plus petit au plus grand en glissant les nombres:',
        answer: ['12,200', '12,345', '12,354'], // Correct order: smallest to largest
        wordBank: ['12,200', '12,345', '12,354'], // Exactly 3 numbers for 3 drop zones - MUST MATCH answer length
        mode: 'order'
      },
      // Drag and Drop - Selection
      {
        type: 'drag_and_drop',
        question: 'Choisis le plus grand nombre en le glissant:',
        answer: '45,768',
        wordBank: ['45,678', '45,768', '45,600', '45,700'],
        mode: 'select'
      },
      // Drag and Drop - Selection (another comparison)
      {
        type: 'drag_and_drop',
        question: 'Écris un nombre plus grand que 18 en le glissant:',
        answer: '19',
        wordBank: ['17', '18', '19', '20', '21', '22'],
        mode: 'select'
      }
    ]
  },

  'ch1-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "L'addition est commutative: 125 + 378 = 378 + 125", answer: "vrai" },
      { question: "Pour calculer 450 - 280, on peut d'abord soustraire 250 puis 30", answer: "faux" },
      { question: "Le résultat de 1,250 + 850 est supérieur à 2,000", answer: "vrai" },
      { question: "Dans une soustraction, si on augmente le nombre à soustraire, le résultat diminue", answer: "vrai" },
      { question: "258 + 147 = 400", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Ahmed a économisé 1,250 MRU. Il reçoit 850 MRU supplémentaires. Combien a-t-il maintenant?',
        answer: '2,100 MRU',
        wrongAnswers: ['2,000 MRU', '2,050 MRU', '1,950 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le résultat de 456 + 389?',
        answer: '845',
        wrongAnswers: ['835', '855', '745']
      },
      {
        type: 'multiple_choice',
        question: 'Une librairie vend 324 livres le matin et 287 livres l\'après-midi. Combien de livres ont été vendus en tout?',
        answer: '611 livres',
        wrongAnswers: ['601 livres', '621 livres', '591 livres']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le résultat de 1,200 - 456?',
        answer: '744',
        wrongAnswers: ['734', '754', '644']
      },
      {
        type: 'multiple_choice',
        question: 'Fatima a 750 MRU. Elle achète un livre à 289 MRU. Combien lui reste-t-il?',
        answer: '461 MRU',
        wrongAnswers: ['451 MRU', '471 MRU', '561 MRU']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '478 + 325 = 803',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le résultat de 1,500 - 680 est égal à 820',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '125 + 250 + 175 = 550',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si on soustrait 456 de 800, on obtient 354',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 567 + 289 = ?',
        answer: '856',
        wrongAnswers: ['846', '866', '756']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le nombre manquant: 1,250 - ? = 678',
        answer: '572',
        wrongAnswers: ['562', '582', '472']
      },
      {
        type: 'multiple_choice',
        question: 'Complète: 425 + 375 = ?',
        answer: '800',
        wrongAnswers: ['790', '810', '700']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez les résultats de ces calculs du plus petit au plus grand: (234 + 55), (567 - 122), (456 + 222)',
        answer: ['289', '445', '678'], // 234+55=289, 567-122=445, 456+222=678
        wordBank: ['289', '445', '678'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Choisis le résultat correct de 789 + 456 en le glissant:',
        answer: '1,245',
        wordBank: ['1,235', '1,245', '1,255', '1,145'],
        mode: 'select'
      },
      // Drag and Drop - Selection (word problem)
      {
        type: 'drag_and_drop',
        question: 'Un magasin avait 1,500 articles. Il en vend 678. Glisse le nombre d\'articles restants:',
        answer: '822',
        wordBank: ['812', '822', '832', '922'],
        mode: 'select'
      },
      // Drag and Drop - Selection (find missing number)
      {
        type: 'drag_and_drop',
        question: 'Trouve le nombre manquant: 456 + _____ = 789. Glisse le bon nombre:',
        answer: '333',
        wordBank: ['323', '333', '343', '353'],
        mode: 'select'
      }
    ]
  },

  'ch1-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La multiplication est commutative: 25 × 18 = 18 × 25", answer: "vrai" },
      { question: "125 × 4 = 500", answer: "vrai" },
      { question: "Pour diviser 450 par 25, on peut multiplier par 4 puis diviser par 100", answer: "faux" },
      { question: "Dans une division, si on multiplie le dividende et le diviseur par le même nombre, le quotient reste le même", answer: "vrai" },
      { question: "Le résultat de 156 ÷ 12 est égal à 14", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Un livre coûte 125 MRU. Combien coûtent 8 livres?',
        answer: '1,000 MRU',
        wrongAnswers: ['900 MRU', '1,100 MRU', '950 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le résultat de 45 × 23?',
        answer: '1,035',
        wrongAnswers: ['1,025', '1,045', '935']
      },
      {
        type: 'multiple_choice',
        question: 'Une classe de 28 élèves veut organiser des groupes de 7. Combien de groupes peut-on former?',
        answer: '4 groupes',
        wrongAnswers: ['3 groupes', '5 groupes', '6 groupes']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le résultat de 312 ÷ 12?',
        answer: '26',
        wrongAnswers: ['25', '27', '24']
      },
      {
        type: 'multiple_choice',
        question: 'Un sac contient 450 bonbons à partager équitablement entre 18 enfants. Combien de bonbons chaque enfant recevra-t-il?',
        answer: '25 bonbons',
        wrongAnswers: ['24 bonbons', '26 bonbons', '23 bonbons']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '48 × 25 = 1,200',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le résultat de 756 ÷ 18 est égal à 42',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '125 × 8 = 1,000',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si on divise 450 par 25, on obtient 20',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 56 × 18 = ?',
        answer: '1008',
        wrongAnswers: ['998', '1018', '908']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le nombre manquant: 432 ÷ ? = 18',
        answer: '24',
        wrongAnswers: ['23', '25', '22']
      },
      {
        type: 'multiple_choice',
        question: 'Complète: 125 × 8 = ?',
        answer: '1000',
        wrongAnswers: ['900', '1100', '800']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez les résultats de ces calculs du plus petit au plus grand: (24 × 15), (18 × 28), (25 × 22)',
        answer: ['360', '504', '550'], // 24×15=360, 18×28=504, 25×22=550
        wordBank: ['360', '504', '550'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Choisis le résultat correct de 156 × 25 en le glissant:',
        answer: '3,900',
        wordBank: ['3,800', '3,900', '4,000', '3,700'],
        mode: 'select'
      },
      // Drag and Drop - Selection (word problem)
      {
        type: 'drag_and_drop',
        question: 'Un magasin vend 35 boîtes par jour. Glisse le nombre de boîtes vendues en 12 jours:',
        answer: '420',
        wordBank: ['410', '420', '430', '400'],
        mode: 'select'
      },
      // Drag and Drop - Selection (division)
      {
        type: 'drag_and_drop',
        question: 'Trouve le nombre manquant: 756 ÷ _____ = 36. Glisse le bon nombre:',
        answer: '21',
        wordBank: ['20', '21', '22', '23'],
        mode: 'select'
      }
    ]
  },

  'ch1-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Pour résoudre un problème à plusieurs étapes, il faut identifier les opérations nécessaires", answer: "vrai" },
      { question: "Le mot 'reste' indique toujours une soustraction", answer: "vrai" },
      { question: "Si un problème demande 'combien en tout', on doit toujours multiplier", answer: "faux" },
      { question: "Vérifier sa réponse en refaisant le calcul est une bonne pratique", answer: "vrai" },
      { question: "Un problème peut toujours être résolu en une seule étape", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (word problems)
      {
        type: 'multiple_choice',
        question: 'Ahmed a économisé 1,250 MRU. Il achète un livre à 389 MRU et un cahier à 125 MRU. Combien lui reste-t-il?',
        answer: '736 MRU',
        wrongAnswers: ['746 MRU', '726 MRU', '756 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Une école organise une sortie. Il y a 156 élèves. Chaque bus peut transporter 45 élèves. Combien de bus sont nécessaires?',
        answer: '4 bus',
        wrongAnswers: ['3 bus', '5 bus', '6 bus']
      },
      {
        type: 'multiple_choice',
        question: 'Un magasin vend 35 articles le matin et 28 articles l\'après-midi. Si chaque article coûte 125 MRU, quel est le montant total des ventes?',
        answer: '7,875 MRU',
        wrongAnswers: ['7,775 MRU', '7,975 MRU', '8,075 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Fatima achète 8 cahiers à 125 MRU chacun et 5 stylos à 45 MRU chacun. Quel est le montant total de ses achats?',
        answer: '1,225 MRU',
        wrongAnswers: ['1,125 MRU', '1,325 MRU', '1,425 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Dans une bibliothèque, il y a 450 livres. 125 sont empruntés. Le bibliothécaire ajoute 68 nouveaux livres. Combien de livres sont maintenant dans la bibliothèque?',
        answer: '393 livres',
        wrongAnswers: ['383 livres', '403 livres', '413 livres']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Si Ahmed a 750 MRU et achète un article à 289 MRU, il lui reste 461 MRU',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour résoudre: "Un magasin vend 24 articles par jour pendant 15 jours", on calcule 24 × 15',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans un problème qui demande "combien reste-t-il", on doit toujours multiplier',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Si 450 bonbons sont partagés équitablement entre 18 enfants, chaque enfant reçoit 25 bonbons',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (word problems)
      {
        type: 'multiple_choice',
        question: 'Une librairie a 750 livres. Elle vend 289 livres le premier jour et 156 livres le deuxième jour. Combien de livres reste-t-il?',
        answer: '305 livres',
        wrongAnswers: ['295 livres', '315 livres', '285 livres']
      },
      {
        type: 'multiple_choice',
        question: 'Un élève économise 25 MRU par semaine pendant 18 semaines. Combien économise-t-il au total?',
        answer: '450 MRU',
        wrongAnswers: ['440 MRU', '460 MRU', '400 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Un restaurant sert 48 repas par jour. Combien de repas sert-il en 12 jours?',
        answer: '576 repas',
        wrongAnswers: ['566 repas', '586 repas', '476 repas']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces montants du plus petit au plus grand: (125 × 8), (150 × 6), (175 × 5)',
        answer: ['875', '900', '1000'], // 175×5=875, 150×6=900, 125×8=1000
        wordBank: ['875', '900', '1000'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Ahmed achète 12 livres à 125 MRU chacun. Glisse le montant total qu\'il paie:',
        answer: '1,500 MRU',
        wordBank: ['1,400 MRU', '1,500 MRU', '1,600 MRU', '1,450 MRU'],
        mode: 'select'
      },
      // Drag and Drop - Selection (multi-step problem)
      {
        type: 'drag_and_drop',
        question: 'Une école achète 35 tableaux à 250 MRU chacun. Après remise, le montant total est 8,225 MRU. Glisse le montant de la remise:',
        answer: '525 MRU',
        wordBank: ['515 MRU', '525 MRU', '535 MRU', '545 MRU'],
        mode: 'select'
      },
      // Drag and Drop - Selection (division problem)
      {
        type: 'drag_and_drop',
        question: '450 élèves sont répartis équitablement en 18 groupes. Glisse le nombre d\'élèves par groupe:',
        answer: '25',
        wordBank: ['24', '25', '26', '27'],
        mode: 'select'
      }
    ]
  },

  'ch1-s5': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Pour vérifier une soustraction, on peut faire une addition", answer: "vrai" },
      { question: "Dans un problème à plusieurs étapes, l'ordre des opérations n'a pas d'importance", answer: "faux" },
      { question: "On peut utiliser le calcul mental pour vérifier rapidement un résultat", answer: "vrai" },
      { question: "Tous les problèmes nécessitent exactement deux opérations", answer: "faux" },
      { question: "La pratique régulière améliore la vitesse de calcul", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (review - mixed operations)
      {
        type: 'multiple_choice',
        question: 'Un magasin a 450 articles. Il vend 125 articles le matin et 168 articles l\'après-midi. Combien d\'articles reste-t-il?',
        answer: '157 articles',
        wrongAnswers: ['147 articles', '167 articles', '177 articles']
      },
      {
        type: 'multiple_choice',
        question: 'Fatima achète 8 cahiers à 125 MRU chacun. Elle paie avec 1,200 MRU. Combien lui reste-t-il?',
        answer: '200 MRU',
        wrongAnswers: ['100 MRU', '300 MRU', '250 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Dans une école, 156 élèves sont répartis en groupes de 12. Combien de groupes sont formés?',
        answer: '13 groupes',
        wrongAnswers: ['12 groupes', '14 groupes', '15 groupes']
      },
      {
        type: 'multiple_choice',
        question: 'Ahmed économise 125 MRU par mois pendant 18 mois, puis dépense 450 MRU. Combien lui reste-t-il?',
        answer: '1,800 MRU',
        wrongAnswers: ['1,700 MRU', '1,900 MRU', '2,000 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Un livre de 456 pages est lu en 12 jours. Combien de pages sont lues en moyenne par jour?',
        answer: '38 pages',
        wrongAnswers: ['37 pages', '39 pages', '40 pages']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le résultat de (125 + 75) × 4 est égal à 800',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si on multiplie 450 par 0,25, on obtient 112,5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour vérifier que 756 ÷ 18 = 42, on peut calculer 42 × 18',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans un problème: "450 articles moins 125 articles", le résultat est toujours positif',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank (review - mixed operations)
      {
        type: 'multiple_choice',
        question: 'Calcule: (125 + 75) × 8 = ?',
        answer: '1600',
        wrongAnswers: ['1500', '1700', '1400']
      },
      {
        type: 'multiple_choice',
        question: 'Un magasin a 750 articles. Il vend 289 articles puis ajoute 156 nouveaux articles. Combien d\'articles a-t-il maintenant?',
        answer: '617 articles',
        wrongAnswers: ['607 articles', '627 articles', '597 articles']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie en calculant: 756 = 18 × ?',
        answer: '42',
        wrongAnswers: ['41', '43', '40']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (450 - 125), (156 × 5), (125 + 456)',
        answer: ['325', '581', '780'], // 450-125=325, 125+456=581, 156×5=780
        wordBank: ['325', '581', '780'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un élève économise 125 MRU par mois pendant 12 mois, puis dépense 450 MRU. Glisse le montant restant:',
        answer: '1,050 MRU',
        wordBank: ['1,000 MRU', '1,050 MRU', '1,100 MRU', '1,150 MRU'],
        mode: 'select'
      },
      // Drag and Drop - Selection (multi-step problem)
      {
        type: 'drag_and_drop',
        question: 'Une librairie vend 48 livres le matin et 36 livres l\'après-midi. Si chaque livre coûte 125 MRU, glisse le montant total:',
        answer: '10,500 MRU',
        wordBank: ['10,400 MRU', '10,500 MRU', '10,600 MRU', '10,700 MRU'],
        mode: 'select'
      },
      // Drag and Drop - Selection (verification problem)
      {
        type: 'drag_and_drop',
        question: 'Pour vérifier que 756 ÷ 18 = 42, on multiplie 42 × 18. Glisse le résultat:',
        answer: '756',
        wordBank: ['746', '756', '766', '736'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 2: GÉOMÉTRIE DE BASE
  'ch2-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un cercle est une figure où tous les points sont à égale distance du centre", answer: "vrai" },
      { question: "Un carré est toujours un rectangle", answer: "vrai" },
      { question: "Un rectangle a toujours 4 côtés égaux", answer: "faux" },
      { question: "Un triangle équilatéral a ses 3 côtés de longueurs différentes", answer: "faux" },
      { question: "Un cercle a un nombre infini de côtés", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle figure géométrique a 4 côtés égaux, 4 angles droits et 2 diagonales de même longueur?',
        answer: 'Carré',
        wrongAnswers: ['Rectangle', 'Losange', 'Trapèze']
      },
      {
        type: 'multiple_choice',
        question: 'Un rectangle mesure 12 cm de longueur et 8 cm de largeur. Combien de côtés ont la même longueur?',
        answer: '2 paires de côtés égaux',
        wrongAnswers: ['Tous les côtés égaux', '3 côtés égaux', 'Aucun côté égal']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle caractéristique est commune à un carré et un rectangle?',
        answer: '4 angles droits',
        wrongAnswers: ['4 côtés égaux', 'Forme ronde', '3 côtés']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle avec 3 côtés de 5 cm chacun est un triangle:',
        answer: 'Équilatéral',
        wrongAnswers: ['Rectangle', 'Isocèle', 'Scalène']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un cercle, la distance du centre à n\'importe quel point du cercle s\'appelle:',
        answer: 'Le rayon',
        wrongAnswers: ['Le diamètre', 'Le périmètre', 'La circonférence']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un carré est un cas particulier de rectangle',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un rectangle peut avoir 4 côtés égaux',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un triangle isocèle a toujours ses 3 côtés de longueurs différentes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Tous les rectangles sont des carrés',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un carré de 6 cm de côté a un périmètre de combien de cm?',
        answer: '24 cm',
        wrongAnswers: ['20 cm', '28 cm', '30 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un rectangle, les côtés opposés sont toujours:',
        answer: 'égaux',
        wrongAnswers: ['différents', 'parallèles', 'perpendiculaires']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle avec 2 côtés de même longueur est un triangle:',
        answer: 'isocèle',
        wrongAnswers: ['équilatéral', 'rectangle', 'scalène']
      },
      // Drag and Drop - Ordering (sides count from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces figures du plus petit nombre de côtés au plus grand: (Carré, Triangle, Hexagone)',
        answer: ['3', '4', '6'], // Triangle=3, Carré=4, Hexagone=6
        wordBank: ['3', '4', '6'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un rectangle a une longueur de 15 cm et une largeur de 9 cm. Glisse le nombre de côtés qui mesurent 15 cm:',
        answer: '2',
        wordBank: ['1', '2', '3', '4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (classification)
      {
        type: 'drag_and_drop',
        question: 'Un triangle avec des côtés de 5 cm, 5 cm et 7 cm est un triangle:',
        answer: 'Isocèle',
        wordBank: ['Équilatéral', 'Isocèle', 'Rectangle', 'Scalène'],
        mode: 'select'
      },
      // Drag and Drop - Selection (properties)
      {
        type: 'drag_and_drop',
        question: 'Dans un carré, le nombre d\'axes de symétrie est:',
        answer: '4',
        wordBank: ['2', '3', '4', '5'],
        mode: 'select'
      }
    ]
  },

  'ch2-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "1 mètre = 100 centimètres", answer: "vrai" },
      { question: "250 cm est égal à 2,5 mètres", answer: "vrai" },
      { question: "Pour mesurer une longueur, on peut utiliser n'importe quelle unité", answer: "faux" },
      { question: "3,5 mètres = 350 centimètres", answer: "vrai" },
      { question: "Un kilomètre vaut exactement 1 000 mètres", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Ahmed mesure une table de 125 cm. Quelle est sa longueur en mètres?',
        answer: '1,25 m',
        wrongAnswers: ['12,5 m', '0,125 m', '125 m']
      },
      {
        type: 'multiple_choice',
        question: 'Une corde mesure 4,5 mètres. Quelle est sa longueur en centimètres?',
        answer: '450 cm',
        wrongAnswers: ['45 cm', '4 500 cm', '4,5 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la plus longue: 2,5 m, 250 cm ou 2 000 mm?',
        answer: 'Elles sont toutes égales',
        wrongAnswers: ['2,5 m', '250 cm', '2 000 mm']
      },
      {
        type: 'multiple_choice',
        question: 'Un terrain mesure 25 mètres de longueur. Combien mesure-t-il en centimètres?',
        answer: '2 500 cm',
        wrongAnswers: ['250 cm', '25 000 cm', '250 000 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Pour mesurer la longueur d\'une salle de classe, quelle unité est la plus appropriée?',
        answer: 'Mètres',
        wrongAnswers: ['Millimètres', 'Centimètres', 'Kilomètres']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '125 cm est égal à 1,25 m',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '3,8 mètres est égal à 380 centimètres',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour mesurer la longueur d\'un crayon, on utilise les kilomètres',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '2,5 m + 125 cm = 3,75 m',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Convertis: 450 cm = ? m',
        answer: '4,5 m',
        wrongAnswers: ['45 m', '0,45 m', '450 m']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis: 3,25 m = ? cm',
        answer: '325 cm',
        wrongAnswers: ['32,5 cm', '3250 cm', '3025 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Une table mesure 125 cm. Quelle est sa longueur en mètres?',
        answer: '1,25 m',
        wrongAnswers: ['12,5 m', '0,125 m', '125 m']
      },
      // Drag and Drop - Ordering (lengths from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces longueurs du plus petit au plus grand: (1,5 m), (180 cm), (2,3 m)',
        answer: ['150', '180', '230'], // 1,5m=150cm, 180cm=180cm, 2,3m=230cm
        wordBank: ['150', '180', '230'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Convertis 3,5 mètres en centimètres. Glisse le résultat:',
        answer: '350',
        wordBank: ['35', '350', '3 500', '35 000'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: '125 cm est égal à combien de mètres? Glisse le résultat:',
        answer: '1,25',
        wordBank: ['12,5', '1,25', '0,125', '125'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la plus longue: 2,5 m ou 280 cm? Glisse la réponse:',
        answer: '280 cm',
        wordBank: ['2,5 m', '280 cm', 'Elles sont égales', 'On ne peut pas comparer'],
        mode: 'select'
      }
    ]
  },

  'ch2-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le périmètre d'un carré se calcule en multipliant un côté par 4", answer: "vrai" },
      { question: "L'aire d'un rectangle est toujours égale à longueur × largeur", answer: "vrai" },
      { question: "Pour un carré, l'aire est toujours égale au périmètre", answer: "faux" },
      { question: "Le périmètre d'un rectangle se calcule avec: 2 × (longueur + largeur)", answer: "vrai" },
      { question: "Un carré de 5 cm a la même aire qu'un rectangle de 10 cm × 2,5 cm", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel est le périmètre d\'un carré de 12 cm de côté?',
        answer: '48 cm',
        wrongAnswers: ['24 cm', '36 cm', '144 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'aire d\'un rectangle de 15 cm de longueur et 8 cm de largeur?',
        answer: '120 cm²',
        wrongAnswers: ['46 cm²', '115 cm²', '125 cm²']
      },
      {
        type: 'multiple_choice',
        question: 'Un carré a une aire de 144 cm². Quelle est la longueur d\'un côté?',
        answer: '12 cm',
        wrongAnswers: ['10 cm', '14 cm', '24 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Un rectangle a un périmètre de 32 cm. Si sa longueur est 10 cm, quelle est sa largeur?',
        answer: '6 cm',
        wrongAnswers: ['5 cm', '7 cm', '8 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Un terrain rectangulaire mesure 25 m de longueur et 18 m de largeur. Quelle est son aire?',
        answer: '450 m²',
        wrongAnswers: ['430 m²', '460 m²', '470 m²']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le périmètre d\'un carré de 8 cm est 32 cm',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'aire d\'un rectangle de 12 cm × 9 cm est 108 cm²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un carré de 6 cm a un périmètre de 24 cm et une aire de 36 cm²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si on double la longueur et la largeur d\'un rectangle, son aire double aussi',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule le périmètre d\'un rectangle de 18 cm de longueur et 12 cm de largeur:',
        answer: '60 cm',
        wrongAnswers: ['50 cm', '70 cm', '58 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'aire d\'un carré de 14 cm de côté?',
        answer: '196 cm²',
        wrongAnswers: ['186 cm²', '206 cm²', '176 cm²']
      },
      {
        type: 'multiple_choice',
        question: 'Un rectangle a une longueur de 20 cm et une aire de 180 cm². Quelle est sa largeur?',
        answer: '9 cm',
        wrongAnswers: ['8 cm', '10 cm', '11 cm']
      },
      // Drag and Drop - Ordering (perimeters from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces périmètres du plus petit au plus grand: (Carré de 7 cm), (Rectangle 10 cm × 6 cm), (Carré de 9 cm)',
        answer: ['28', '32', '36'], // Carré 7cm: 4×7=28, Rectangle: 2×(10+6)=32, Carré 9cm: 4×9=36
        wordBank: ['28', '32', '36'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'aire d\'un carré de 15 cm de côté? Glisse le résultat:',
        answer: '225',
        wordBank: ['215', '225', '235', '250'],
        mode: 'select'
      },
      // Drag and Drop - Selection (perimeter problem)
      {
        type: 'drag_and_drop',
        question: 'Un rectangle a une longueur de 16 cm et une largeur de 9 cm. Glisse son périmètre:',
        answer: '50',
        wordBank: ['48', '50', '52', '54'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reverse problem)
      {
        type: 'drag_and_drop',
        question: 'Un carré a une aire de 169 cm². Glisse la longueur d\'un côté:',
        answer: '13',
        wordBank: ['11', '13', '15', '17'],
        mode: 'select'
      }
    ]
  },

  'ch2-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un axe de symétrie divise une figure en deux parties identiques et superposables", answer: "vrai" },
      { question: "Toutes les figures géométriques ont au moins un axe de symétrie", answer: "faux" },
      { question: "Un motif géométrique est une forme qui se répète régulièrement", answer: "vrai" },
      { question: "Un carré a exactement 2 axes de symétrie", answer: "faux" },
      { question: "La symétrie axiale préserve les distances et les angles", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien d\'axes de symétrie a un carré?',
        answer: '4 axes',
        wrongAnswers: ['2 axes', '3 axes', 'Aucun axe']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle figure géométrique a exactement 3 axes de symétrie?',
        answer: 'Triangle équilatéral',
        wrongAnswers: ['Carré', 'Rectangle', 'Cercle']
      },
      {
        type: 'multiple_choice',
        question: 'Un rectangle qui n\'est pas un carré a combien d\'axes de symétrie?',
        answer: '2 axes',
        wrongAnswers: ['4 axes', '1 axe', 'Aucun axe']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un motif géométrique?',
        answer: 'Une forme qui se répète régulièrement',
        wrongAnswers: ['Une figure avec un seul axe de symétrie', 'Un cercle parfait', 'Une figure irrégulière']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle figure a un nombre infini d\'axes de symétrie?',
        answer: 'Un cercle',
        wrongAnswers: ['Un carré', 'Un rectangle', 'Un triangle équilatéral']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un triangle isocèle a exactement 1 axe de symétrie',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un rectangle a toujours 4 axes de symétrie',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Dans un motif, chaque élément répété doit être identique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un triangle scalène a au moins un axe de symétrie',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un carré a combien d\'axes de symétrie?',
        answer: '4',
        wrongAnswers: ['2', '3', '5']
      },
      {
        type: 'multiple_choice',
        question: 'La ligne qui divise une figure en deux parties symétriques s\'appelle un axe de:',
        answer: 'symétrie',
        wrongAnswers: ['rotation', 'réflexion', 'translation']
      },
      {
        type: 'multiple_choice',
        question: 'Un triangle équilatéral a combien d\'axes de symétrie?',
        answer: '3',
        wrongAnswers: ['1', '2', '4']
      },
      // Drag and Drop - Ordering (number of symmetry axes from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces figures du plus petit au plus grand nombre d\'axes de symétrie: (Triangle scalène), (Rectangle), (Carré)',
        answer: ['0', '2', '4'], // Triangle scalène=0, Rectangle=2, Carré=4
        wordBank: ['0', '2', '4'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un triangle isocèle a combien d\'axes de symétrie? Glisse la réponse:',
        answer: '1',
        wordBank: ['0', '1', '2', '3'],
        mode: 'select'
      },
      // Drag and Drop - Selection (classification)
      {
        type: 'drag_and_drop',
        question: 'Un rectangle de 12 cm × 8 cm a combien d\'axes de symétrie? Glisse la réponse:',
        answer: '2',
        wordBank: ['1', '2', '4', 'Aucun'],
        mode: 'select'
      },
      // Drag and Drop - Selection (properties)
      {
        type: 'drag_and_drop',
        question: 'Quelle figure géométrique a le plus grand nombre d\'axes de symétrie?',
        answer: 'Cercle',
        wordBank: ['Carré', 'Rectangle', 'Triangle équilatéral', 'Cercle'],
        mode: 'select'
      }
    ]
  },

  'ch2-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "Le périmètre d'un rectangle est toujours supérieur à son aire", answer: "faux" },
      { question: "Un carré est toujours un rectangle", answer: "vrai" },
      { question: "L'aire d'un carré peut être calculée en multipliant deux côtés adjacents", answer: "vrai" },
      { question: "Tous les triangles ont au moins un axe de symétrie", answer: "faux" },
      { question: "Le périmètre et l'aire d'un carré de 5 cm sont égaux", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed geometry problems)
      {
        type: 'multiple_choice',
        question: 'Un jardin rectangulaire mesure 18 m de longueur et 12 m de largeur. Quel est son périmètre?',
        answer: '60 m',
        wrongAnswers: ['36 m', '54 m', '216 m']
      },
      {
        type: 'multiple_choice',
        question: 'Un carré a un périmètre de 48 cm. Quelle est son aire?',
        answer: '144 cm²',
        wrongAnswers: ['96 cm²', '192 cm²', '240 cm²']
      },
      {
        type: 'multiple_choice',
        question: 'Un rectangle a une aire de 180 cm² et une longueur de 15 cm. Quelle est sa largeur?',
        answer: '12 cm',
        wrongAnswers: ['10 cm', '13 cm', '14 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle figure a exactement 3 axes de symétrie?',
        answer: 'Triangle équilatéral',
        wrongAnswers: ['Carré', 'Rectangle', 'Triangle isocèle']
      },
      {
        type: 'multiple_choice',
        question: 'Un carré et un rectangle ont tous les deux:',
        answer: '4 angles droits',
        wrongAnswers: ['4 côtés égaux', '3 axes de symétrie', 'La même aire']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un rectangle de 16 cm × 9 cm a un périmètre de 50 cm',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si on double la longueur et la largeur d\'un rectangle, son aire double aussi',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un carré de 10 cm a une aire de 100 cm²',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les rectangles ont 4 axes de symétrie',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Un terrain carré a un périmètre de 80 m. Quelle est son aire?',
        answer: '400 m²',
        wrongAnswers: ['300 m²', '500 m²', '350 m²']
      },
      {
        type: 'multiple_choice',
        question: 'Un rectangle a une longueur de 20 cm et un périmètre de 56 cm. Quelle est sa largeur?',
        answer: '8 cm',
        wrongAnswers: ['7 cm', '9 cm', '10 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Un carré a une aire de 169 cm². Quelle est la longueur d\'un côté?',
        answer: '13 cm',
        wrongAnswers: ['12 cm', '14 cm', '11 cm']
      },
      // Drag and Drop - Ordering (areas from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces aires du plus petit au plus grand: (Rectangle 10 cm × 6 cm), (Carré 8 cm), (Carré 9 cm)',
        answer: ['60', '64', '81'], // Rectangle: 10×6=60, Carré 8cm: 8×8=64, Carré 9cm: 9×9=81
        wordBank: ['60', '64', '81'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un carré a un périmètre de 52 cm. Glisse son aire en cm²:',
        answer: '169',
        wordBank: ['144', '169', '196', '225'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reverse problem)
      {
        type: 'drag_and_drop',
        question: 'Un rectangle a une aire de 192 cm² et une longueur de 16 cm. Glisse sa largeur:',
        answer: '12',
        wordBank: ['10', '12', '14', '16'],
        mode: 'select'
      },
      // Drag and Drop - Selection (perimeter problem)
      {
        type: 'drag_and_drop',
        question: 'Un carré a une aire de 144 cm². Glisse son périmètre:',
        answer: '48',
        wordBank: ['36', '48', '52', '56'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 3: MESURE ET GRANDEURS
  'ch3-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "1 heure = 60 minutes = 3 600 secondes", answer: "vrai" },
      { question: "2,5 heures est égal à 150 minutes", answer: "vrai" },
      { question: "L'aiguille longue d'une horloge indique toujours les heures", answer: "faux" },
      { question: "45 minutes représente les trois quarts d'une heure", answer: "vrai" },
      { question: "1 jour = 24 heures = 1 440 minutes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de minutes représentent 3,5 heures?',
        answer: '210 minutes',
        wrongAnswers: ['180 minutes', '200 minutes', '240 minutes']
      },
      {
        type: 'multiple_choice',
        question: 'Un cours dure 1 heure et 45 minutes. Quelle est sa durée en minutes?',
        answer: '105 minutes',
        wrongAnswers: ['95 minutes', '115 minutes', '125 minutes']
      },
      {
        type: 'multiple_choice',
        question: 'Ahmed part à 8h15 et arrive à 10h45. Combien de temps a-t-il pris?',
        answer: '2 heures et 30 minutes',
        wrongAnswers: ['2 heures et 15 minutes', '2 heures et 45 minutes', '3 heures']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de secondes représentent 1 heure et 30 minutes?',
        answer: '5 400 secondes',
        wrongAnswers: ['4 800 secondes', '5 200 secondes', '6 000 secondes']
      },
      {
        type: 'multiple_choice',
        question: 'Un film dure 2 heures et 15 minutes. Combien de minutes cela fait-il?',
        answer: '135 minutes',
        wrongAnswers: ['125 minutes', '145 minutes', '155 minutes']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '3 heures et 20 minutes = 200 minutes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '90 minutes est égal à 1,5 heures',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans 2 heures et 30 minutes, il y a 150 minutes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 jour = 1 200 minutes',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Convertis: 4 heures et 25 minutes = ? minutes',
        answer: '265 minutes',
        wrongAnswers: ['255 minutes', '275 minutes', '245 minutes']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis: 180 minutes = ? heures',
        answer: '3 heures',
        wrongAnswers: ['2 heures', '4 heures', '2,5 heures']
      },
      {
        type: 'multiple_choice',
        question: 'Un trajet dure 2 heures et 45 minutes. Quelle est sa durée en minutes?',
        answer: '165 minutes',
        wrongAnswers: ['155 minutes', '175 minutes', '145 minutes']
      },
      // Drag and Drop - Ordering (durations from shortest to longest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces durées du plus court au plus long: (1 h 20 min), (90 min), (2 h 5 min)',
        answer: ['80', '90', '125'], // 1h20min=80min, 90min=90min, 2h5min=125min
        wordBank: ['80', '90', '125'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Combien de minutes représentent 2,5 heures? Glisse la réponse:',
        answer: '150',
        wordBank: ['120', '150', '180', '200'],
        mode: 'select'
      },
      // Drag and Drop - Selection (time calculation)
      {
        type: 'drag_and_drop',
        question: 'Un cours commence à 8h30 et dure 1h45. À quelle heure se termine-t-il? Glisse l\'heure:',
        answer: '10h15',
        wordBank: ['9h15', '10h15', '10h30', '11h15'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: 'Convertis 2 heures et 20 minutes en minutes. Glisse le résultat:',
        answer: '140',
        wordBank: ['120', '140', '160', '180'],
        mode: 'select'
      }
    ]
  },

  'ch3-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La monnaie mauritanienne s'appelle l'ouguiya (MRU)", answer: "vrai" },
      { question: "Si on achète 3 articles à 125 MRU chacun, le prix total est 375 MRU", answer: "vrai" },
      { question: "La monnaie rendue est toujours égale au prix à payer", answer: "faux" },
      { question: "On peut calculer le prix total en additionnant tous les prix individuels", answer: "vrai" },
      { question: "Si on donne 500 MRU pour un achat de 350 MRU, on reçoit 200 MRU de monnaie", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Ahmed achète un livre à 250 MRU, un cahier à 125 MRU et un stylo à 45 MRU. Quel est le prix total?',
        answer: '420 MRU',
        wrongAnswers: ['410 MRU', '430 MRU', '440 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Fatima achète 5 cahiers à 125 MRU chacun. Combien paie-t-elle?',
        answer: '625 MRU',
        wrongAnswers: ['600 MRU', '650 MRU', '675 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Un élève donne 500 MRU pour des fournitures coûtant 385 MRU. Combien de monnaie reçoit-il?',
        answer: '115 MRU',
        wrongAnswers: ['105 MRU', '125 MRU', '135 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Un magasin vend des livres à 450 MRU chacun. Si on achète 3 livres, combien coûte le total?',
        answer: '1 350 MRU',
        wrongAnswers: ['1 200 MRU', '1 400 MRU', '1 450 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'abréviation de la monnaie mauritanienne?',
        answer: 'MRU',
        wrongAnswers: ['MUR', 'MR', 'MRO']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Si on achète 4 articles à 150 MRU chacun, le prix total est 600 MRU',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Donner 1 000 MRU pour un achat de 750 MRU donne 300 MRU de monnaie',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le prix total de 3 × 125 MRU est 375 MRU',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La monnaie rendue est calculée en soustrayant le prix du montant donné',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule le prix total: 450 MRU + 280 MRU + 165 MRU = ?',
        answer: '895 MRU',
        wrongAnswers: ['885 MRU', '905 MRU', '8950 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Si on donne 1 000 MRU pour un achat de 725 MRU, combien de monnaie est rendue?',
        answer: '275 MRU',
        wrongAnswers: ['265 MRU', '285 MRU', '375 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Un livre coûte 350 MRU. Quel est le prix total pour 4 livres?',
        answer: '1 400 MRU',
        wrongAnswers: ['1 300 MRU', '1 500 MRU', '1 200 MRU']
      },
      // Drag and Drop - Ordering (prices from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces prix du plus petit au plus grand: (450 MRU), (385 MRU), (520 MRU)',
        answer: ['385', '450', '520'], // 385 < 450 < 520
        wordBank: ['385', '450', '520'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un élève achète 6 cahiers à 125 MRU chacun. Glisse le prix total:',
        answer: '750',
        wordBank: ['700', '750', '800', '850'],
        mode: 'select'
      },
      // Drag and Drop - Selection (change calculation)
      {
        type: 'drag_and_drop',
        question: 'On donne 1 500 MRU pour des achats de 1 125 MRU. Glisse la monnaie rendue:',
        answer: '375',
        wordBank: ['325', '375', '425', '475'],
        mode: 'select'
      },
      // Drag and Drop - Selection (total calculation)
      {
        type: 'drag_and_drop',
        question: 'Le prix total de 3 articles à 425 MRU chacun est:',
        answer: '1 275',
        wordBank: ['1 200', '1 275', '1 350', '1 425'],
        mode: 'select'
      }
    ]
  },

  'ch3-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "1 kilogramme = 1000 grammes", answer: "vrai" },
      { question: "2,5 kilogrammes est égal à 2500 grammes", answer: "vrai" },
      { question: "La masse et le poids sont toujours identiques", answer: "faux" },
      { question: "On utilise une balance pour mesurer la masse d'un objet", answer: "vrai" },
      { question: "Un objet de 3500 grammes pèse 3,5 kilogrammes", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de grammes représentent 3,5 kilogrammes?',
        answer: '3 500 g',
        wrongAnswers: ['350 g', '35 000 g', '305 g']
      },
      {
        type: 'multiple_choice',
        question: 'Un sac de riz pèse 4,2 kg. Quelle est sa masse en grammes?',
        answer: '4 200 g',
        wrongAnswers: ['420 g', '42 000 g', '4 020 g']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de kilogrammes représentent 2 500 grammes?',
        answer: '2,5 kg',
        wrongAnswers: ['25 kg', '0,25 kg', '250 kg']
      },
      {
        type: 'multiple_choice',
        question: 'Quel instrument utilise-t-on pour mesurer la masse d\'un objet?',
        answer: 'Une balance',
        wrongAnswers: ['Une règle', 'Un thermomètre', 'Un verre gradué']
      },
      {
        type: 'multiple_choice',
        question: 'Un élève pèse 45,5 kg. Quelle est sa masse en grammes?',
        answer: '45 500 g',
        wrongAnswers: ['4 550 g', '455 000 g', '45,5 g']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '2,8 kilogrammes = 2 800 grammes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 500 grammes = 1,5 kilogrammes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La masse se mesure toujours en kilogrammes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un objet de 500 grammes pèse 0,5 kilogramme',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Convertis: 4,5 kg = ? g',
        answer: '4 500 g',
        wrongAnswers: ['450 g', '45 000 g', '4 050 g']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis: 3 200 g = ? kg',
        answer: '3,2 kg',
        wrongAnswers: ['32 kg', '0,32 kg', '320 kg']
      },
      {
        type: 'multiple_choice',
        question: 'Un sac pèse 2,8 kg. Quelle est sa masse en grammes?',
        answer: '2 800 g',
        wrongAnswers: ['280 g', '28 000 g', '2 080 g']
      },
      // Drag and Drop - Ordering (masses from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces masses du plus petit au plus grand: (2,5 kg), (2 800 g), (3,2 kg)',
        answer: ['2500', '2800', '3200'], // 2,5kg=2500g, 2800g=2800g, 3,2kg=3200g
        wordBank: ['2500', '2800', '3200'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Convertis 3,5 kilogrammes en grammes. Glisse le résultat:',
        answer: '3 500',
        wordBank: ['350', '3 500', '35 000', '305'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: '2 800 grammes est égal à combien de kilogrammes? Glisse le résultat:',
        answer: '2,8',
        wordBank: ['2,8', '28', '0,28', '280'],
        mode: 'select'
      },
      // Drag and Drop - Selection (mass problem)
      {
        type: 'drag_and_drop',
        question: 'Un sac de riz pèse 4,2 kg. Glisse sa masse en grammes:',
        answer: '4 200',
        wordBank: ['420', '4 200', '42 000', '4 020'],
        mode: 'select'
      }
    ]
  },

  'ch3-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "1 litre = 1000 millilitres", answer: "vrai" },
      { question: "3,5 litres est égal à 3500 millilitres", answer: "vrai" },
      { question: "Le volume et la capacité sont toujours identiques", answer: "faux" },
      { question: "On utilise un verre gradué pour mesurer le volume d'un liquide", answer: "vrai" },
      { question: "Un récipient de 2,5 L peut contenir 2500 ml de liquide", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Combien de millilitres représentent 4,5 litres?',
        answer: '4 500 ml',
        wrongAnswers: ['450 ml', '45 000 ml', '4 050 ml']
      },
      {
        type: 'multiple_choice',
        question: 'Une bouteille contient 2,8 L d\'eau. Quelle est sa capacité en millilitres?',
        answer: '2 800 ml',
        wrongAnswers: ['280 ml', '28 000 ml', '2 080 ml']
      },
      {
        type: 'multiple_choice',
        question: 'Combien de litres représentent 3 500 millilitres?',
        answer: '3,5 L',
        wrongAnswers: ['35 L', '0,35 L', '350 L']
      },
      {
        type: 'multiple_choice',
        question: 'Quel instrument utilise-t-on pour mesurer le volume d\'un liquide?',
        answer: 'Un verre gradué',
        wrongAnswers: ['Une balance', 'Une règle', 'Un thermomètre']
      },
      {
        type: 'multiple_choice',
        question: 'Un récipient a une capacité de 1,5 L. Combien de millilitres peut-il contenir?',
        answer: '1 500 ml',
        wrongAnswers: ['150 ml', '15 000 ml', '1 050 ml']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '2,5 litres = 2 500 millilitres',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1 800 millilitres = 1,8 litres',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La capacité se mesure toujours en litres',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un récipient de 500 ml a une capacité de 0,5 litre',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Convertis: 3,5 L = ? ml',
        answer: '3 500 ml',
        wrongAnswers: ['350 ml', '35 000 ml', '3 050 ml']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis: 2 400 ml = ? L',
        answer: '2,4 L',
        wrongAnswers: ['24 L', '0,24 L', '240 L']
      },
      {
        type: 'multiple_choice',
        question: 'Une bouteille contient 4,2 L. Quelle est sa capacité en millilitres?',
        answer: '4 200 ml',
        wrongAnswers: ['420 ml', '42 000 ml', '4 020 ml']
      },
      // Drag and Drop - Ordering (volumes from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces volumes du plus petit au plus grand: (2,5 L), (2 800 ml), (3,2 L)',
        answer: ['2500', '2800', '3200'], // 2,5L=2500ml, 2800ml=2800ml, 3,2L=3200ml
        wordBank: ['2500', '2800', '3200'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Convertis 3,5 litres en millilitres. Glisse le résultat:',
        answer: '3 500',
        wordBank: ['350', '3 500', '35 000', '305'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: '2 400 millilitres est égal à combien de litres? Glisse le résultat:',
        answer: '2,4',
        wordBank: ['2,4', '24', '0,24', '240'],
        mode: 'select'
      },
      // Drag and Drop - Selection (capacity problem)
      {
        type: 'drag_and_drop',
        question: 'Un récipient peut contenir 4,8 L de liquide. Glisse sa capacité en millilitres:',
        answer: '4 800',
        wordBank: ['480', '4 800', '48 000', '4 080'],
        mode: 'select'
      }
    ]
  },

  'ch3-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut convertir entre différentes unités de mesure en utilisant les relations", answer: "vrai" },
      { question: "1 kilogramme = 1 litre pour tous les matériaux", answer: "faux" },
      { question: "Les mesures sont essentielles dans la vie quotidienne", answer: "vrai" },
      { question: "Toutes les unités de mesure sont toujours convertibles", answer: "faux" },
      { question: "2,5 heures + 1 heure 45 minutes = 4,25 heures", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed measurement problems)
      {
        type: 'multiple_choice',
        question: 'Un élève achète 3 kg de riz à 125 MRU/kg et 2,5 L d\'huile à 180 MRU/L. Quel est le montant total?',
        answer: '825 MRU',
        wrongAnswers: ['800 MRU', '850 MRU', '875 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis 2 heures et 30 minutes en minutes:',
        answer: '150 minutes',
        wrongAnswers: ['120 minutes', '180 minutes', '130 minutes']
      },
      {
        type: 'multiple_choice',
        question: 'Un sac pèse 4,5 kg. Combien pèse-t-il en grammes?',
        answer: '4 500 g',
        wrongAnswers: ['450 g', '45 000 g', '4 050 g']
      },
      {
        type: 'multiple_choice',
        question: 'Une bouteille contient 3,2 L. Combien de millilitres représente-t-elle?',
        answer: '3 200 ml',
        wrongAnswers: ['320 ml', '32 000 ml', '3 020 ml']
      },
      {
        type: 'multiple_choice',
        question: 'Ahmed achète 5 articles à 125 MRU chacun et paie avec 800 MRU. Combien de monnaie reçoit-il?',
        answer: '175 MRU',
        wrongAnswers: ['165 MRU', '185 MRU', '195 MRU']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '3,5 kg + 2 500 g = 6 kg',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '2,5 L + 1 800 ml = 4,3 L',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les unités de mesure utilisent le même facteur de conversion',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '1 jour = 24 heures = 1 440 minutes',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Convertis: 4,5 kg + 2 200 g = ? g',
        answer: '6 700 g',
        wrongAnswers: ['6 600 g', '6 800 g', '4 700 g']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis: 3 L + 1 500 ml = ? L',
        answer: '4,5 L',
        wrongAnswers: ['4 L', '5 L', '3,5 L']
      },
      {
        type: 'multiple_choice',
        question: 'Un trajet dure 2 h 30 min. Quelle est sa durée en minutes?',
        answer: '150 minutes',
        wrongAnswers: ['120 minutes', '180 minutes', '130 minutes']
      },
      // Drag and Drop - Ordering (quantities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces quantités du plus petit au plus grand: (2,5 kg), (2 600 g), (3,1 kg)',
        answer: ['2500', '2600', '3100'], // 2,5kg=2500g, 2600g=2600g, 3,1kg=3100g
        wordBank: ['2500', '2600', '3100'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un élève achète 4 kg de sucre à 125 MRU/kg et 3 L de lait à 150 MRU/L. Glisse le montant total:',
        answer: '950',
        wordBank: ['900', '950', '1 000', '1 050'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion problem)
      {
        type: 'drag_and_drop',
        question: 'Convertis 3 heures et 45 minutes en minutes. Glisse le résultat:',
        answer: '225',
        wordBank: ['215', '225', '235', '245'],
        mode: 'select'
      },
      // Drag and Drop - Selection (mixed problem)
      {
        type: 'drag_and_drop',
        question: 'Un sac de 4 kg coûte 500 MRU. Glisse le prix par kilogramme:',
        answer: '125',
        wordBank: ['120', '125', '130', '135'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 4: FRACTIONS SIMPLES
  'ch4-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Le numérateur d'une fraction est le nombre au-dessus de la barre", answer: "vrai" },
      { question: "Le dénominateur indique en combien de parts égales on divise le tout", answer: "vrai" },
      { question: "Dans la fraction 5/8, le dénominateur est 5", answer: "faux" },
      { question: "La fraction 3/4 signifie qu'on prend 3 parts sur 4 parts égales", answer: "vrai" },
      { question: "Le numérateur peut être plus grand que le dénominateur", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans la fraction 7/12, quel est le numérateur?',
        answer: '7',
        wrongAnswers: ['12', '19', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Dans la fraction 9/15, quel est le dénominateur?',
        answer: '15',
        wrongAnswers: ['9', '24', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Comment lit-on la fraction 3/5?',
        answer: 'Trois cinquièmes',
        wrongAnswers: ['Trois sur cinq', 'Trois quarts', 'Cinq tiers']
      },
      {
        type: 'multiple_choice',
        question: 'Une fraction représente:',
        answer: 'Une partie d\'un tout divisé en parts égales',
        wrongAnswers: ['Un nombre entier', 'Une multiplication', 'Une addition']
      },
      {
        type: 'multiple_choice',
        question: 'Dans 11/16, combien de parts prend-on?',
        answer: '11',
        wrongAnswers: ['16', '27', '5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans la fraction 5/8, le numérateur est 5 et le dénominateur est 8',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le numérateur est toujours plus petit que le dénominateur',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La fraction 4/9 signifie qu\'on divise en 9 parts égales et on en prend 4',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans 7/10, le dénominateur est 7',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Dans la fraction 13/20, quel est le numérateur?',
        answer: '13',
        wrongAnswers: ['20', '33', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Dans la fraction 9/14, quel est le dénominateur?',
        answer: '14',
        wrongAnswers: ['9', '23', '5']
      },
      {
        type: 'multiple_choice',
        question: 'Une fraction représente une _____ d\'un tout divisé en parts égales',
        answer: 'partie',
        wrongAnswers: ['totalité', 'moitié', 'quantité']
      },
      // Drag and Drop - Ordering (numerators from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces fractions du plus petit au plus grand numérateur: (3/7), (5/7), (8/7)',
        answer: ['3', '5', '8'], // 3/7, 5/7, 8/7 (même dénominateur, on compare les numérateurs)
        wordBank: ['3', '5', '8'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Dans la fraction 17/25, quel est le numérateur? Glisse la réponse:',
        answer: '17',
        wordBank: ['17', '25', '42', '8'],
        mode: 'select'
      },
      // Drag and Drop - Selection (denominator)
      {
        type: 'drag_and_drop',
        question: 'Dans la fraction 11/18, quel est le dénominateur? Glisse la réponse:',
        answer: '18',
        wordBank: ['11', '18', '29', '7'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reading fractions)
      {
        type: 'drag_and_drop',
        question: 'Comment lit-on la fraction 7/12?',
        answer: 'Sept douzièmes',
        wordBank: ['Sept sur douze', 'Sept douzièmes', 'Douze septièmes', 'Sept quarts'],
        mode: 'select'
      }
    ]
  },

  'ch4-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Des fractions équivalentes représentent exactement la même quantité", answer: "vrai" },
      { question: "On peut obtenir une fraction équivalente en multipliant numérateur et dénominateur par le même nombre", answer: "vrai" },
      { question: "2/5 = 4/10", answer: "vrai" },
      { question: "Toutes les fractions peuvent être simplifiées", answer: "faux" },
      { question: "Pour simplifier 8/12, on divise par 4 pour obtenir 2/3", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle fraction est équivalente à 3/5?',
        answer: '6/10',
        wrongAnswers: ['6/8', '4/6', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie la fraction 12/18:',
        answer: '2/3',
        wrongAnswers: ['1/2', '3/4', '4/6']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle fraction est équivalente à 2/7?',
        answer: '4/14',
        wrongAnswers: ['3/10', '4/12', '2/9']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie la fraction 15/25:',
        answer: '3/5',
        wrongAnswers: ['5/8', '2/5', '4/7']
      },
      {
        type: 'multiple_choice',
        question: 'Pour obtenir une fraction équivalente à 5/8, on peut multiplier par:',
        answer: '2/2',
        wrongAnswers: ['1/2', '2/3', '3/4']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '4/6 = 2/3',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1/3 = 3/9',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour simplifier une fraction, on doit diviser le numérateur et le dénominateur par des nombres différents',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '7/14 simplifié donne 1/2',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Simplifie: 16/24 = ?',
        answer: '2/3',
        wrongAnswers: ['1/2', '3/4', '4/6']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve une fraction équivalente à 3/4 en multipliant par 3:',
        answer: '9/12',
        wrongAnswers: ['6/8', '12/16', '15/20']
      },
      {
        type: 'multiple_choice',
        question: 'Pour simplifier 18/27, on divise numérateur et dénominateur par:',
        answer: '9',
        wrongAnswers: ['3', '6', '18']
      },
      // Drag and Drop - Ordering (simplified fractions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces fractions simplifiées du plus petit au plus grand: (2/5), (1/2), (3/5)',
        answer: ['2/5', '1/2', '3/5'], // 2/5=0,4, 1/2=0,5, 3/5=0,6
        wordBank: ['2/5', '1/2', '3/5'], // Exactly 3 fractions for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle fraction est équivalente à 5/9? Glisse la réponse:',
        answer: '10/18',
        wordBank: ['6/12', '10/18', '8/15', '7/11'],
        mode: 'select'
      },
      // Drag and Drop - Selection (simplification)
      {
        type: 'drag_and_drop',
        question: 'Simplifie 20/30. Glisse la fraction simplifiée:',
        answer: '2/3',
        wordBank: ['1/2', '2/3', '3/4', '4/5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (finding equivalent)
      {
        type: 'drag_and_drop',
        question: 'Trouve une fraction équivalente à 4/7 en multipliant par 2:',
        answer: '8/14',
        wordBank: ['6/10', '8/14', '10/16', '12/18'],
        mode: 'select'
      }
    ]
  },

  'ch4-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Avec le même dénominateur, la fraction avec le plus grand numérateur est la plus grande", answer: "vrai" },
      { question: "Avec le même numérateur, la fraction avec le plus grand dénominateur est la plus grande", answer: "faux" },
      { question: "3/7 > 2/7 car 3 > 2", answer: "vrai" },
      { question: "1/5 > 1/4 car 5 > 4", answer: "faux" },
      { question: "Pour comparer 2/5 et 3/8, on peut les mettre au même dénominateur", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quelle fraction est la plus grande: 4/9 ou 5/9?',
        answer: '5/9',
        wrongAnswers: ['4/9', 'Elles sont égales', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle fraction est la plus grande: 3/8 ou 3/7?',
        answer: '3/7',
        wrongAnswers: ['3/8', 'Elles sont égales', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle fraction est la plus petite: 2/5, 3/5 ou 4/5?',
        answer: '2/5',
        wrongAnswers: ['3/5', '4/5', 'Elles sont toutes égales']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle fraction est la plus grande: 1/3 ou 1/4?',
        answer: '1/3',
        wrongAnswers: ['1/4', 'Elles sont égales', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Compare 5/12 et 7/12. Quelle est la plus grande?',
        answer: '7/12',
        wrongAnswers: ['5/12', 'Elles sont égales', 'On ne peut pas comparer']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '4/7 < 5/7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1/6 > 1/5',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Avec le même dénominateur, on compare les numérateurs pour déterminer la plus grande fraction',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '2/9 > 3/9',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Compare: 3/8 _____ 5/8 (choisissez < ou >)',
        answer: '<',
        wrongAnswers: ['>', '=', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Compare: 2/5 _____ 2/7 (choisissez < ou >)',
        answer: '>',
        wrongAnswers: ['<', '=', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Avec le même dénominateur, on compare les _____ pour trouver la plus grande fraction',
        answer: 'numérateurs',
        wrongAnswers: ['dénominateurs', 'fractions', 'nombres']
      },
      // Drag and Drop - Ordering (fractions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces fractions du plus petit au plus grand: (2/7), (4/7), (6/7)',
        answer: ['2/7', '4/7', '6/7'], // Même dénominateur, on compare les numérateurs
        wordBank: ['2/7', '4/7', '6/7'], // Exactly 3 fractions for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quelle fraction est la plus grande: 5/9 ou 7/9? Glisse la réponse:',
        answer: '7/9',
        wordBank: ['5/9', '7/9', 'Elles sont égales', 'On ne peut pas comparer'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison)
      {
        type: 'drag_and_drop',
        question: 'Quelle fraction est la plus grande: 1/4 ou 1/5? Glisse la réponse:',
        answer: '1/4',
        wordBank: ['1/4', '1/5', 'Elles sont égales', 'On ne peut pas comparer'],
        mode: 'select'
      },
      // Drag and Drop - Selection (symbol)
      {
        type: 'drag_and_drop',
        question: 'Compare: 3/11 _____ 5/11. Glisse le symbole correct:',
        answer: '<',
        wordBank: ['<', '>', '=', 'On ne peut pas comparer'],
        mode: 'select'
      }
    ]
  },

  'ch4-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Pour additionner des fractions avec le même dénominateur, on additionne les numérateurs et on garde le dénominateur", answer: "vrai" },
      { question: "5/8 + 2/8 = 7/8", answer: "vrai" },
      { question: "Pour soustraire des fractions, on peut avoir un résultat négatif", answer: "faux" },
      { question: "7/12 - 3/12 = 4/12 = 1/3", answer: "vrai" },
      { question: "On peut additionner des fractions avec des dénominateurs différents sans les transformer", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: 3/7 + 2/7 = ?',
        answer: '5/7',
        wrongAnswers: ['5/14', '6/7', '1/7']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 8/11 - 3/11 = ?',
        answer: '5/11',
        wrongAnswers: ['5/22', '11/11', '4/11']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule et simplifie: 6/9 + 2/9 = ?',
        answer: '8/9',
        wrongAnswers: ['4/9', '1', '2/3']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule et simplifie: 10/12 - 4/12 = ?',
        answer: '1/2',
        wrongAnswers: ['6/12', '14/12', '4/12']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le résultat de 5/8 + 2/8 simplifié?',
        answer: '7/8',
        wrongAnswers: ['7/16', '1', '3/4']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '4/9 + 3/9 = 7/9',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '7/10 - 3/10 = 4/10 = 2/5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour additionner des fractions avec le même dénominateur, on additionne aussi les dénominateurs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: '9/14 - 4/14 = 5/14',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 5/12 + 4/12 = ?',
        answer: '9/12',
        wrongAnswers: ['9/24', '1', '8/12']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule et simplifie: 8/10 - 3/10 = ?',
        answer: '1/2',
        wrongAnswers: ['5/10', '5/20', '3/10']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 7/15 + 5/15 = ?',
        answer: '12/15',
        wrongAnswers: ['12/30', '1', '11/15']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (2/7 + 1/7), (3/7 + 1/7), (4/7 + 2/7)',
        answer: ['3/7', '4/7', '6/7'], // 2/7+1/7=3/7, 3/7+1/7=4/7, 4/7+2/7=6/7
        wordBank: ['3/7', '4/7', '6/7'], // Exactly 3 fractions for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 5/9 + 3/9. Glisse le résultat:',
        answer: '8/9',
        wordBank: ['8/18', '8/9', '2/3', '1'],
        mode: 'select'
      },
      // Drag and Drop - Selection (subtraction)
      {
        type: 'drag_and_drop',
        question: 'Calcule et simplifie: 10/12 - 4/12. Glisse le résultat simplifié:',
        answer: '1/2',
        wordBank: ['6/12', '1/2', '4/12', '3/4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (addition problem)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 7/11 + 3/11. Glisse le résultat:',
        answer: '10/11',
        wordBank: ['10/22', '10/11', '1', '4/11'],
        mode: 'select'
      }
    ]
  },

  'ch4-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut résoudre des problèmes de partage avec des fractions", answer: "vrai" },
      { question: "1/2 + 1/2 = 2/4", answer: "faux" },
      { question: "Les fractions équivalentes peuvent être utilisées pour simplifier les calculs", answer: "vrai" },
      { question: "Toutes les fractions peuvent être additionnées directement", answer: "faux" },
      { question: "Pour comparer 2/5 et 3/7, il faut mettre au même dénominateur", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed fraction problems)
      {
        type: 'multiple_choice',
        question: 'Ahmed mange 3/8 d\'un gâteau et Fatima mange 2/8. Quelle fraction du gâteau ont-ils mangé en tout?',
        answer: '5/8',
        wrongAnswers: ['5/16', '6/8', '1']
      },
      {
        type: 'multiple_choice',
        question: 'Une pizza est divisée en 12 parts. Ahmed mange 5 parts et Fatima mange 3 parts. Quelle fraction reste-t-il?',
        answer: '4/12 ou 1/3',
        wrongAnswers: ['8/12', '7/12', '5/12']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle fraction est la plus grande: 3/8 ou 5/12?',
        answer: '5/12',
        wrongAnswers: ['3/8', 'Elles sont égales', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule et simplifie: 8/10 + 1/10 = ?',
        answer: '9/10',
        wrongAnswers: ['9/20', '1', '4/5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule et simplifie: 12/15 - 3/15 = ?',
        answer: '3/5',
        wrongAnswers: ['9/15', '1/3', '4/5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '5/7 - 2/7 = 3/7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1/3 + 1/3 + 1/3 = 1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Avec le même dénominateur, on peut directement additionner les numérateurs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '6/9 simplifié donne 3/4',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Calcule: 7/12 + 3/12 = ?',
        answer: '10/12',
        wrongAnswers: ['10/24', '1', '9/12']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule et simplifie: 9/12 - 3/12 = ?',
        answer: '1/2',
        wrongAnswers: ['6/12', '6/24', '3/12']
      },
      {
        type: 'multiple_choice',
        question: 'Une tarte est divisée en 8 parts. On mange 5 parts. Quelle fraction de la tarte reste-t-il?',
        answer: '3/8',
        wrongAnswers: ['5/8', '3/5', '8/3']
      },
      // Drag and Drop - Ordering (fractions from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces fractions du plus petit au plus grand: (2/7), (4/7), (5/7)',
        answer: ['2/7', '4/7', '5/7'], // Même dénominateur, on compare les numérateurs: 2 < 4 < 5
        wordBank: ['2/7', '4/7', '5/7'], // Exactly 3 fractions for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Ahmed mange 4/9 d\'un gâteau et Fatima mange 2/9. Glisse la fraction mangée en tout:',
        answer: '6/9',
        wordBank: ['6/18', '6/9', '2/3', '8/9'],
        mode: 'select'
      },
      // Drag and Drop - Selection (subtraction problem)
      {
        type: 'drag_and_drop',
        question: 'Une pizza de 10 parts, on mange 7 parts. Glisse la fraction restante:',
        answer: '3/10',
        wordBank: ['3/10', '7/10', '3/7', '7/3'],
        mode: 'select'
      },
      // Drag and Drop - Selection (simplification)
      {
        type: 'drag_and_drop',
        question: 'Calcule et simplifie: 6/8 + 1/8. Glisse le résultat simplifié:',
        answer: '7/8',
        wordBank: ['7/16', '7/8', '3/4', '1'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 5: DÉCIMAUX ET POURCENTAGES
  'ch5-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Dans un nombre décimal, la partie entière est toujours avant la virgule", answer: "vrai" },
      { question: "Le premier chiffre après la virgule représente toujours les dixièmes", answer: "vrai" },
      { question: "3,45 et 3,450 représentent des nombres différents", answer: "faux" },
      { question: "Dans 25,678, le chiffre 6 représente 6 dixièmes", answer: "faux" },
      { question: "Tous les nombres entiers peuvent être écrits comme des décimaux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Dans le nombre 34,567, quel chiffre représente les dixièmes?',
        answer: '5',
        wrongAnswers: ['3', '6', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Dans le nombre 128,394, quelle est la partie entière?',
        answer: '128',
        wrongAnswers: ['394', '128,394', '39']
      },
      {
        type: 'multiple_choice',
        question: 'Comment lit-on le nombre 45,38?',
        answer: 'Quarante-cinq virgule trente-huit',
        wrongAnswers: ['Quarante-cinq point trente-huit', 'Quatre cent cinquante-trois virgule huit', 'Quarante virgule cinquante-trois']
      },
      {
        type: 'multiple_choice',
        question: 'Dans 67,452, quel chiffre représente les centièmes?',
        answer: '5',
        wrongAnswers: ['4', '2', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la partie décimale de 89,756?',
        answer: '756',
        wrongAnswers: ['89', '89,756', '75']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans 12,345, le chiffre 3 représente 3 dixièmes',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '5,70 est égal à 5,7',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un nombre décimal doit toujours avoir au moins un chiffre après la virgule',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Dans 45,832, le chiffre 8 représente 8 centièmes',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Dans 125,487, quel est le chiffre des dixièmes?',
        answer: '4',
        wrongAnswers: ['5', '8', '7']
      },
      {
        type: 'multiple_choice',
        question: 'Dans 78,956, quelle est la partie entière?',
        answer: '78',
        wrongAnswers: ['956', '78,956', '9']
      },
      {
        type: 'multiple_choice',
        question: 'Le deuxième chiffre après la virgule représente les:',
        answer: 'centièmes',
        wrongAnswers: ['dixièmes', 'millièmes', 'unités']
      },
      // Drag and Drop - Ordering (parts from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres décimaux du plus petit au plus grand: (12,4), (12,45), (12,5)',
        answer: ['12,4', '12,45', '12,5'], // 12,4 < 12,45 < 12,5
        wordBank: ['12,4', '12,45', '12,5'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Dans 45,678, quel chiffre représente les dixièmes? Glisse la réponse:',
        answer: '6',
        wordBank: ['4', '5', '6', '7'],
        mode: 'select'
      },
      // Drag and Drop - Selection (reading)
      {
        type: 'drag_and_drop',
        question: 'Comment lit-on 38,92?',
        answer: 'Trente-huit virgule quatre-vingt-douze',
        wordBank: ['Trente-huit point quatre-vingt-douze', 'Trente-huit virgule quatre-vingt-douze', 'Trois cent quatre-vingt-neuf virgule deux', 'Trente virgule huit cents'],
        mode: 'select'
      },
      // Drag and Drop - Selection (decimal place)
      {
        type: 'drag_and_drop',
        question: 'Dans 127,456, quel chiffre représente les millièmes?',
        answer: '6',
        wordBank: ['4', '5', '6', '7'],
        mode: 'select'
      }
    ]
  },

  'ch5-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Pour comparer des décimaux, on compare d'abord la partie entière", answer: "vrai" },
      { question: "4,25 < 3,98 car on compare toujours les décimales en premier", answer: "faux" },
      { question: "Si les parties entières sont égales, on compare les dixièmes", answer: "vrai" },
      { question: "12,47 > 12,35 car 4 > 3 dans les dixièmes", answer: "vrai" },
      { question: "0,8 est égal à 0,80", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel nombre est le plus grand: 15,47 ou 15,52?',
        answer: '15,52',
        wrongAnswers: ['15,47', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Quel nombre est le plus petit: 8,125 ou 8,25?',
        answer: '8,125',
        wrongAnswers: ['8,25', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Compare 12,8 et 12,08. Lequel est le plus grand?',
        answer: '12,8',
        wrongAnswers: ['12,08', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Quel nombre est le plus grand: 25,456 ou 25,465?',
        answer: '25,465',
        wrongAnswers: ['25,456', 'Ils sont égaux', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Rangez du plus petit au plus grand: 3,25; 3,205; 3,3',
        answer: '3,205 < 3,25 < 3,3',
        wrongAnswers: ['3,25 < 3,205 < 3,3', '3,3 < 3,25 < 3,205', 'Ils sont tous égaux']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '15,7 > 15,68',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '0,5 = 0,50',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '12,45 < 12,5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour comparer 3,45 et 3,5, on compare les centièmes en premier',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Compare: 18,75 _____ 18,7 (choisissez < ou >)',
        answer: '>',
        wrongAnswers: ['<', '=', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Compare: 25,3 _____ 25,32 (choisissez < ou >)',
        answer: '<',
        wrongAnswers: ['>', '=', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Pour comparer des décimaux, on compare d\'abord la partie:',
        answer: 'entière',
        wrongAnswers: ['décimale', 'totale', 'fractionnaire']
      },
      // Drag and Drop - Ordering (decimals from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres décimaux du plus petit au plus grand: (12,5), (12,05), (12,55)',
        answer: ['12,05', '12,5', '12,55'], // 12,05 < 12,5 < 12,55
        wordBank: ['12,05', '12,5', '12,55'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel nombre est le plus grand: 45,8 ou 45,78? Glisse la réponse:',
        answer: '45,8',
        wordBank: ['45,8', '45,78', 'Ils sont égaux', 'On ne peut pas comparer'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison)
      {
        type: 'drag_and_drop',
        question: 'Compare: 125,456 _____ 125,465. Glisse le symbole correct:',
        answer: '<',
        wordBank: ['<', '>', '=', 'On ne peut pas comparer'],
        mode: 'select'
      },
      // Drag and Drop - Selection (ordering)
      {
        type: 'drag_and_drop',
        question: 'Lequel est le plus petit: 8,125, 8,25 ou 8,05?',
        answer: '8,05',
        wordBank: ['8,125', '8,25', '8,05', 'Ils sont tous égaux'],
        mode: 'select'
      }
    ]
  },

  'ch5-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Pour additionner des décimaux, on aligne les virgules verticalement", answer: "vrai" },
      { question: "12,45 + 8,37 = 20,82", answer: "vrai" },
      { question: "Pour soustraire des décimaux, on aligne aussi les virgules", answer: "vrai" },
      { question: "25,68 - 12,34 = 13,34", answer: "vrai" },
      { question: "On peut ajouter des zéros après la virgule si nécessaire pour faciliter le calcul", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: 15,47 + 8,35 = ?',
        answer: '23,82',
        wrongAnswers: ['23,72', '24,82', '22,82']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 45,8 - 12,65 = ?',
        answer: '33,15',
        wrongAnswers: ['33,25', '32,15', '34,15']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 125,75 + 87,25 = ?',
        answer: '213,00',
        wrongAnswers: ['212,00', '214,00', '212,90']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 456,8 - 234,65 = ?',
        answer: '222,15',
        wrongAnswers: ['221,15', '223,15', '222,25']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 38,7 + 45,25 = ?',
        answer: '83,95',
        wrongAnswers: ['83,85', '84,95', '82,95']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '25,4 + 18,7 = 44,1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '67,85 - 23,42 = 44,43',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour additionner 3,5 et 2,45, on peut écrire 3,50 + 2,45',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '125,8 - 87,65 = 38,15',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 45,67 + 23,48 = ?',
        answer: '69,15',
        wrongAnswers: ['69,05', '69,25', '68,15']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 78,5 - 34,25 = ?',
        answer: '44,25',
        wrongAnswers: ['44,15', '44,35', '43,25']
      },
      {
        type: 'multiple_choice',
        question: 'Pour additionner des décimaux, on _____ les virgules',
        answer: 'aligne',
        wrongAnswers: ['ignore', 'multiplie', 'soustrait']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (12,5 + 8,3), (15,2 + 5,8), (18,4 + 3,6)',
        answer: ['20,8', '21', '22'], // 12,5+8,3=20,8, 15,2+5,8=21, 18,4+3,6=22
        wordBank: ['20,8', '21', '22'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 38,75 + 45,25. Glisse le résultat:',
        answer: '84',
        wordBank: ['83', '84', '85', '83,5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (subtraction)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 125,8 - 87,65. Glisse le résultat:',
        answer: '38,15',
        wordBank: ['37,15', '38,15', '39,15', '38,25'],
        mode: 'select'
      },
      // Drag and Drop - Selection (addition problem)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 256,47 + 128,53. Glisse le résultat:',
        answer: '385',
        wordBank: ['384', '385', '386', '384,5'],
        mode: 'select'
      }
    ]
  },

  'ch5-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un pourcentage est une fraction sur 100", answer: "vrai" },
      { question: "25% = 25/100 = 1/4", answer: "vrai" },
      { question: "Pour calculer 15% d'un nombre, on multiplie par 15 et divise par 100", answer: "vrai" },
      { question: "30% est toujours égal à 30/100 = 3/10", answer: "vrai" },
      { question: "Tous les pourcentages sont toujours inférieurs à 1", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule: 25% de 160 = ?',
        answer: '40',
        wrongAnswers: ['30', '50', '35']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 15% de 200 = ?',
        answer: '30',
        wrongAnswers: ['25', '35', '40']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis la fraction 3/5 en pourcentage:',
        answer: '60%',
        wrongAnswers: ['50%', '70%', '65%']
      },
      {
        type: 'multiple_choice',
        question: 'Quel pourcentage représente la fraction 1/4?',
        answer: '25%',
        wrongAnswers: ['20%', '30%', '40%']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 35% de 120 = ?',
        answer: '42',
        wrongAnswers: ['38', '45', '40']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '40% = 2/5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '75% de 80 = 60',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour calculer 20% de 150, on fait 150 × 20 ÷ 100',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1/3 = 33%',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 30% de 250 = ?',
        answer: '75',
        wrongAnswers: ['70', '80', '65']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis: 3/4 = ?%',
        answer: '75%',
        wrongAnswers: ['70%', '80%', '65%']
      },
      {
        type: 'multiple_choice',
        question: 'Un pourcentage est une fraction sur:',
        answer: '100',
        wrongAnswers: ['10', '1000', '50']
      },
      // Drag and Drop - Ordering (percentages from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces pourcentages du plus petit au plus grand: (20%), (45%), (35%)',
        answer: ['20', '35', '45'], // 20% < 35% < 45%
        wordBank: ['20', '35', '45'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 40% de 150. Glisse le résultat:',
        answer: '60',
        wordBank: ['55', '60', '65', '70'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: 'Convertis la fraction 2/5 en pourcentage. Glisse la réponse:',
        answer: '40%',
        wordBank: ['30%', '40%', '50%', '60%'],
        mode: 'select'
      },
      // Drag and Drop - Selection (percentage calculation)
      {
        type: 'drag_and_drop',
        question: 'Quel est le résultat de 25% de 280?',
        answer: '70',
        wordBank: ['65', '70', '75', '80'],
        mode: 'select'
      }
    ]
  },

  'ch5-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut calculer des remises avec les pourcentages", answer: "vrai" },
      { question: "Pour calculer un prix après remise, on soustrait la remise du prix initial", answer: "vrai" },
      { question: "Tous les nombres décimaux peuvent être convertis en pourcentages", answer: "faux" },
      { question: "25% de remise signifie qu'on paie 75% du prix initial", answer: "vrai" },
      { question: "Les décimaux et pourcentages sont essentiels dans les calculs commerciaux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Un article coûte 250 MRU. Il y a 20% de remise. Quel est le prix final?',
        answer: '200 MRU',
        wrongAnswers: ['220 MRU', '230 MRU', '180 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Ahmed achète un livre à 180 MRU avec 15% de remise. Combien paie-t-il?',
        answer: '153 MRU',
        wrongAnswers: ['150 MRU', '165 MRU', '157 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 45,75 + 23,48 = ?',
        answer: '69,23',
        wrongAnswers: ['69,13', '68,23', '70,23']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 35% de 280 = ?',
        answer: '98',
        wrongAnswers: ['95', '100', '105']
      },
      {
        type: 'multiple_choice',
        question: 'Un magasin offre 25% de remise sur un article de 400 MRU. Quel est le nouveau prix?',
        answer: '300 MRU',
        wrongAnswers: ['350 MRU', '325 MRU', '275 MRU']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '30% de 150 = 45',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '125,75 - 87,45 = 38,30',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Avec 15% de remise sur 200 MRU, on économise 30 MRU',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour calculer un pourcentage, on multiplie toujours par 100',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Un article de 320 MRU a 25% de remise. Quel est le prix final?',
        answer: '240 MRU',
        wrongAnswers: ['230 MRU', '250 MRU', '220 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 156,8 - 87,65 = ?',
        answer: '69,15',
        wrongAnswers: ['69,05', '69,25', '68,15']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 40% de 250 = ?',
        answer: '100',
        wrongAnswers: ['90', '110', '95']
      },
      // Drag and Drop - Ordering (prices after discount from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces prix après remise du plus petit au plus grand: (200 MRU - 15%), (250 MRU - 20%), (300 MRU - 10%)',
        answer: ['170', '200', '270'], // 200×0.85=170, 250×0.8=200, 300×0.9=270
        wordBank: ['170', '200', '270'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un article de 450 MRU avec 20% de remise coûte combien? Glisse le prix final:',
        answer: '360',
        wordBank: ['350', '360', '370', '380'],
        mode: 'select'
      },
      // Drag and Drop - Selection (discount calculation)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la remise en MRU pour un article de 500 MRU avec 25% de réduction?',
        answer: '125',
        wordBank: ['100', '125', '150', '175'],
        mode: 'select'
      },
      // Drag and Drop - Selection (mixed calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 245,75 + 156,25. Glisse le résultat:',
        answer: '402',
        wordBank: ['400', '402', '404', '401'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 6: PROBLÈMES ET LOGIQUE
  'ch6-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Pour résoudre un problème, il faut d'abord le lire attentivement", answer: "vrai" },
      { question: "Tous les problèmes nécessitent exactement une opération", answer: "faux" },
      { question: "Les mots-clés comme 'total' ou 'en tout' indiquent souvent une addition", answer: "vrai" },
      { question: "Il faut toujours vérifier sa réponse en refaisant le calcul", answer: "vrai" },
      { question: "Le mot 'reste' indique toujours une soustraction", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Ahmed a économisé 1 250 MRU. Il achète un livre à 389 MRU et un cahier à 125 MRU. Combien lui reste-t-il?',
        answer: '736 MRU',
        wrongAnswers: ['746 MRU', '726 MRU', '756 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Une classe de 28 élèves veut former des groupes de 7. Combien de groupes peut-on former?',
        answer: '4 groupes',
        wrongAnswers: ['3 groupes', '5 groupes', '6 groupes']
      },
      {
        type: 'multiple_choice',
        question: 'Quel mot-clé indique une multiplication?',
        answer: 'fois',
        wrongAnswers: ['reste', 'total', 'en tout']
      },
      {
        type: 'multiple_choice',
        question: 'Fatima achète 5 cahiers à 125 MRU chacun. Quel est le prix total?',
        answer: '625 MRU',
        wrongAnswers: ['600 MRU', '650 MRU', '675 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Un magasin vend 48 articles le matin et 36 articles l\'après-midi. Combien d\'articles ont été vendus au total?',
        answer: '84 articles',
        wrongAnswers: ['82 articles', '86 articles', '88 articles']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Le mot "reste" indique une soustraction',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes peuvent être résolus en une seule étape',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Le mot "total" ou "en tout" indique souvent une addition',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Vérifier sa réponse en refaisant le calcul est une bonne pratique',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Ahmed achète 8 livres à 125 MRU chacun. Quel est le prix total?',
        answer: '1 000 MRU',
        wrongAnswers: ['900 MRU', '1 100 MRU', '800 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Une librairie a 450 livres. Elle vend 289 livres. Combien de livres reste-t-il?',
        answer: '161 livres',
        wrongAnswers: ['151 livres', '171 livres', '141 livres']
      },
      {
        type: 'multiple_choice',
        question: 'Il faut toujours _____ sa réponse après avoir résolu un problème',
        answer: 'vérifier',
        wrongAnswers: ['oublier', 'ignorer', 'changer']
      },
      // Drag and Drop - Ordering (quantities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces quantités du plus petit au plus grand: (150 - 85), (200 - 125), (250 - 160)',
        answer: ['65', '75', '90'], // 150-85=65, 200-125=75, 250-160=90
        wordBank: ['65', '75', '90'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un élève achète 6 cahiers à 125 MRU chacun. Glisse le prix total:',
        answer: '750',
        wordBank: ['700', '750', '800', '850'],
        mode: 'select'
      },
      // Drag and Drop - Selection (word problem)
      {
        type: 'drag_and_drop',
        question: 'Une école a 156 élèves répartis en groupes de 12. Glisse le nombre de groupes:',
        answer: '13',
        wordBank: ['12', '13', '14', '15'],
        mode: 'select'
      },
      // Drag and Drop - Selection (subtraction problem)
      {
        type: 'drag_and_drop',
        question: 'Fatima a 800 MRU. Elle achète des fournitures à 485 MRU. Glisse l\'argent restant:',
        answer: '315',
        wordBank: ['305', '315', '325', '335'],
        mode: 'select'
      }
    ]
  },

  'ch6-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un problème à plusieurs étapes nécessite de résoudre chaque étape dans l'ordre", answer: "vrai" },
      { question: "Pour vérifier une addition, on peut utiliser la soustraction inverse", answer: "vrai" },
      { question: "Tous les problèmes à plusieurs étapes nécessitent exactement 2 opérations", answer: "faux" },
      { question: "Il faut toujours résoudre les opérations entre parenthèses en premier", answer: "vrai" },
      { question: "La planification n'est pas nécessaire pour résoudre des problèmes simples", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Ahmed achète 3 livres à 125 MRU chacun et 5 stylos à 45 MRU chacun. Quel est le prix total?',
        answer: '600 MRU',
        wrongAnswers: ['550 MRU', '650 MRU', '575 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (125 + 75) × 4 = ?',
        answer: '800',
        wrongAnswers: ['600', '700', '900']
      },
      {
        type: 'multiple_choice',
        question: 'Fatima a 500 MRU. Elle achète 2 cahiers à 125 MRU chacun et 3 stylos à 45 MRU chacun. Combien lui reste-t-il?',
        answer: '115 MRU',
        wrongAnswers: ['105 MRU', '125 MRU', '135 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 156 ÷ 12 + 25 = ?',
        answer: '38',
        wrongAnswers: ['28', '48', '58']
      },
      {
        type: 'multiple_choice',
        question: 'Pour vérifier que 45 + 38 = 83, on calcule:',
        answer: '83 - 38 = 45',
        wrongAnswers: ['83 + 38', '83 × 38', '83 ÷ 38']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Pour vérifier une soustraction, on peut utiliser l\'addition inverse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans (25 + 15) × 2, on calcule d\'abord 25 + 15 = 40, puis 40 × 2 = 80',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes peuvent être résolus en une seule étape',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour vérifier que 125 - 87 = 38, on calcule 38 + 87 = 125',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: (125 + 75) × 3 = ?',
        answer: '600',
        wrongAnswers: ['500', '700', '550']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: Si 156 ÷ 12 = 13, alors 13 × 12 = ?',
        answer: '156',
        wrongAnswers: ['144', '168', '150']
      },
      {
        type: 'multiple_choice',
        question: 'Ahmed achète 4 livres à 125 MRU et 2 cahiers à 150 MRU. Quel est le total?',
        answer: '800 MRU',
        wrongAnswers: ['750 MRU', '850 MRU', '700 MRU']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (125 + 75), (150 + 80), (200 + 60)',
        answer: ['200', '230', '260'], // 125+75=200, 150+80=230, 200+60=260
        wordBank: ['200', '230', '260'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (125 + 75) × 4. Glisse le résultat:',
        answer: '800',
        wordBank: ['600', '800', '1000', '700'],
        mode: 'select'
      },
      // Drag and Drop - Selection (multi-step problem)
      {
        type: 'drag_and_drop',
        question: 'Fatima achète 3 livres à 125 MRU chacun et 4 stylos à 45 MRU chacun. Glisse le prix total:',
        answer: '555',
        wordBank: ['545', '555', '565', '575'],
        mode: 'select'
      },
      // Drag and Drop - Selection (verification)
      {
        type: 'drag_and_drop',
        question: 'Pour vérifier que 156 ÷ 12 = 13, on calcule:',
        answer: '13 × 12 = 156',
        wordBank: ['13 + 12', '13 × 12 = 156', '156 - 12', '13 ÷ 12'],
        mode: 'select'
      }
    ]
  },

  'ch6-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un pattern est une régularité mathématique qui se répète", answer: "vrai" },
      { question: "On peut identifier des patterns dans les séquences numériques", answer: "vrai" },
      { question: "Toutes les séquences de nombres ont un pattern simple", answer: "faux" },
      { question: "La déduction logique permet de tirer des conclusions à partir de prémisses", answer: "vrai" },
      { question: "Si A > B et B > C, alors A > C est un exemple de déduction", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Trouve le nombre suivant dans cette séquence: 25, 30, 35, 40, ___',
        answer: '45',
        wrongAnswers: ['40', '50', '35']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le pattern dans la séquence: 12, 24, 36, 48?',
        answer: '+12',
        wrongAnswers: ['+10', '+14', '×2']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le nombre suivant: 125, 150, 175, 200, ___',
        answer: '225',
        wrongAnswers: ['200', '250', '215']
      },
      {
        type: 'multiple_choice',
        question: 'Si 45 > 35 et 35 > 25, alors 45 ___ 25. Quel symbole manque?',
        answer: '>',
        wrongAnswers: ['<', '=', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le pattern dans: 125, 250, 375, 500?',
        answer: '+125',
        wrongAnswers: ['+100', '+150', '×2']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Dans la séquence 8, 16, 24, 32, le pattern est +8',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Si 18 > 12 et 12 > 6, alors 18 < 6',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Toutes les séquences numériques ont un pattern évident',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Dans 50, 75, 100, 125, le pattern est +25',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Trouve le nombre suivant: 125, 150, 175, 200, ?',
        answer: '225',
        wrongAnswers: ['200', '250', '215']
      },
      {
        type: 'multiple_choice',
        question: 'Si 25 > 15 et 15 > 5, alors 25 _____ 5 (choisissez > ou <)',
        answer: '>',
        wrongAnswers: ['<', '=', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le pattern dans 125, 250, 375, 500?',
        answer: '+125',
        wrongAnswers: ['+100', '+150', '×2']
      },
      // Drag and Drop - Ordering (sequence terms from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces termes de la séquence du plus petit au plus grand: (125), (150), (175)',
        answer: ['125', '150', '175'], // 125 < 150 < 175
        wordBank: ['125', '150', '175'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Trouve le nombre suivant dans: 125, 150, 175, 200, ___. Glisse la réponse:',
        answer: '225',
        wordBank: ['200', '225', '250', '215'],
        mode: 'select'
      },
      // Drag and Drop - Selection (pattern identification)
      {
        type: 'drag_and_drop',
        question: 'Quel est le pattern dans: 125, 250, 375, 500? Glisse la réponse:',
        answer: '+125',
        wordBank: ['+100', '+125', '+150', '×2'],
        mode: 'select'
      },
      // Drag and Drop - Selection (deduction)
      {
        type: 'drag_and_drop',
        question: 'Si 45 > 35 et 35 > 25, alors 45 _____ 25. Glisse le symbole correct:',
        answer: '>',
        wordBank: ['>', '<', '=', 'On ne peut pas comparer'],
        mode: 'select'
      }
    ]
  },

  'ch6-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "On peut utiliser l'élimination pour résoudre des problèmes à choix multiples", answer: "vrai" },
      { question: "La déduction logique permet de trouver des solutions sans tester toutes les possibilités", answer: "vrai" },
      { question: "Tous les problèmes peuvent être résolus par élimination", answer: "faux" },
      { question: "Si 125 > 100 et 100 > 75, alors 125 > 75 est un exemple de déduction logique", answer: "vrai" },
      { question: "Il est toujours nécessaire de vérifier ses conclusions logiques", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Parmi ces nombres, lequel est divisible par 3? 125, 135, 145, 155',
        answer: '135',
        wrongAnswers: ['125', '145', '155']
      },
      {
        type: 'multiple_choice',
        question: 'Si 250 > 200 et 200 > 150, alors 250 ___ 150. Quel symbole manque?',
        answer: '>',
        wrongAnswers: ['<', '=', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Parmi ces nombres, lequel est un multiple de 5? 126, 127, 128, 125',
        answer: '125',
        wrongAnswers: ['126', '127', '128']
      },
      {
        type: 'multiple_choice',
        question: 'Si 156 ÷ 12 = 13, alors 13 × 12 = ?',
        answer: '156',
        wrongAnswers: ['144', '168', '150']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le plus petit nombre divisible par 25 parmi 125, 150, 175, 200?',
        answer: '125',
        wrongAnswers: ['150', '175', '200']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Si 45 > 35 et 35 > 25, alors 45 > 25',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Parmi 125, 150, 175, 200, tous sont divisibles par 5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Pour vérifier que 125 - 87 = 38, on calcule 38 + 87 = 125',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes nécessitent une déduction logique',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Si 156 ÷ 12 = 13, alors 13 × ? = 156',
        answer: '12',
        wrongAnswers: ['11', '13', '14']
      },
      {
        type: 'multiple_choice',
        question: 'Si 125 + 75 = 200, alors 200 - 75 = ?',
        answer: '125',
        wrongAnswers: ['115', '135', '100']
      },
      {
        type: 'multiple_choice',
        question: 'Vérifie: Si 156 ÷ 12 = 13, alors 13 × 12 = ?',
        answer: '156',
        wrongAnswers: ['144', '168', '150']
      },
      // Drag and Drop - Ordering (numbers from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres du plus petit au plus grand: (125), (150), (175)',
        answer: ['125', '150', '175'], // 125 < 150 < 175
        wordBank: ['125', '150', '175'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Parmi ces nombres, lequel est divisible par 3? 125, 135, 145, 155. Glisse la réponse:',
        answer: '135',
        wordBank: ['125', '135', '145', '155'],
        mode: 'select'
      },
      // Drag and Drop - Selection (deduction)
      {
        type: 'drag_and_drop',
        question: 'Si 250 > 200 et 200 > 150, alors 250 _____ 150. Glisse le symbole:',
        answer: '>',
        wordBank: ['>', '<', '=', 'On ne peut pas comparer'],
        mode: 'select'
      },
      // Drag and Drop - Selection (verification)
      {
        type: 'drag_and_drop',
        question: 'Pour vérifier que 156 ÷ 12 = 13, on calcule:',
        answer: '13 × 12 = 156',
        wordBank: ['13 + 12', '13 × 12 = 156', '156 - 12', '13 ÷ 12'],
        mode: 'select'
      }
    ]
  },

  'ch6-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut combiner plusieurs techniques de résolution pour résoudre un problème complexe", answer: "vrai" },
      { question: "Tous les problèmes complexes nécessitent exactement 3 étapes", answer: "faux" },
      { question: "La planification est essentielle pour résoudre des problèmes à plusieurs étapes", answer: "vrai" },
      { question: "La vérification permet de s'assurer que la solution est correcte", answer: "vrai" },
      { question: "Un problème peut combiner addition, soustraction, multiplication et division", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed complex problems)
      {
        type: 'multiple_choice',
        question: 'Ahmed achète 3 livres à 125 MRU chacun et 4 cahiers à 150 MRU chacun. Il paie avec 1 000 MRU. Combien lui reste-t-il?',
        answer: '175 MRU',
        wrongAnswers: ['165 MRU', '185 MRU', '200 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le nombre suivant dans cette séquence: 125, 150, 175, 200, ___',
        answer: '225',
        wrongAnswers: ['200', '250', '215']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: (125 + 75) × 3 - 150 = ?',
        answer: '450',
        wrongAnswers: ['400', '500', '550']
      },
      {
        type: 'multiple_choice',
        question: 'Une école a 156 élèves répartis en 12 groupes. Si chaque groupe a le même nombre d\'élèves, combien d\'élèves par groupe?',
        answer: '13',
        wrongAnswers: ['12', '14', '15']
      },
      {
        type: 'multiple_choice',
        question: 'Fatima achète 5 articles à 125 MRU chacun avec 20% de remise. Quel est le prix total après remise?',
        answer: '500 MRU',
        wrongAnswers: ['600 MRU', '550 MRU', '450 MRU']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Pour résoudre (125 + 75) × 2, on calcule d\'abord 125 + 75 = 200, puis 200 × 2 = 400',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Dans la séquence 125, 150, 175, 200, le pattern est +25',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes complexes nécessitent au moins 4 opérations',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Vérifier sa réponse est une étape importante dans la résolution de problèmes',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Calcule: (125 + 75) × 3 = ?',
        answer: '600',
        wrongAnswers: ['500', '700', '550']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le nombre suivant: 125, 150, 175, 200, ?',
        answer: '225',
        wrongAnswers: ['200', '250', '215']
      },
      {
        type: 'multiple_choice',
        question: 'Ahmed achète 4 livres à 125 MRU et 3 cahiers à 150 MRU. Quel est le total?',
        answer: '950 MRU',
        wrongAnswers: ['900 MRU', '1 000 MRU', '925 MRU']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (125 + 75), (150 + 80), (200 + 60)',
        answer: ['200', '230', '260'], // 125+75=200, 150+80=230, 200+60=260
        wordBank: ['200', '230', '260'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: (125 + 75) × 4. Glisse le résultat:',
        answer: '800',
        wordBank: ['600', '800', '1000', '700'],
        mode: 'select'
      },
      // Drag and Drop - Selection (complex problem)
      {
        type: 'drag_and_drop',
        question: 'Ahmed achète 3 livres à 125 MRU et 4 cahiers à 150 MRU. Glisse le prix total:',
        answer: '975',
        wordBank: ['950', '975', '1000', '925'],
        mode: 'select'
      },
      // Drag and Drop - Selection (pattern)
      {
        type: 'drag_and_drop',
        question: 'Trouve le nombre suivant dans: 125, 150, 175, 200, ___. Glisse la réponse:',
        answer: '225',
        wordBank: ['200', '225', '250', '215'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 7: STATISTIQUES ET GRAPHIQUES
  'ch7-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Les statistiques sont des informations numériques organisées", answer: "vrai" },
      { question: "Les données quantitatives sont toujours numériques", answer: "vrai" },
      { question: "Toutes les données peuvent être mesurées en nombres", answer: "faux" },
      { question: "On peut collecter des données par observation, enquête ou mesure", answer: "vrai" },
      { question: "Les statistiques permettent d'analyser et de comprendre des situations", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 125, 150, 175, 200',
        answer: '162,5',
        wrongAnswers: ['150', '175', '200']
      },
      {
        type: 'multiple_choice',
        question: 'L\'âge des élèves en années est une donnée:',
        answer: 'Quantitative',
        wrongAnswers: ['Qualitative', 'Descriptive', 'Textuelle']
      },
      {
        type: 'multiple_choice',
        question: 'Dans une classe, 12 élèves préfèrent les mathématiques et 8 préfèrent les sciences. Combien d\'élèves en tout?',
        answer: '20',
        wrongAnswers: ['18', '22', '24']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 45, 50, 55, 60',
        answer: '52,5',
        wrongAnswers: ['50', '55', '52']
      },
      {
        type: 'multiple_choice',
        question: 'La couleur des yeux (bleu, marron, vert) est une donnée:',
        answer: 'Qualitative',
        wrongAnswers: ['Quantitative', 'Numérique', 'Mesurable']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les données quantitatives sont toujours numériques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La moyenne de 10, 15, 20, 25 est 17,5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les données peuvent être représentées par des nombres',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut calculer la moyenne de données qualitatives',
        answer: 'faux'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 125, 150, 175, 200',
        answer: '162,5',
        wrongAnswers: ['150', '175', '200']
      },
      {
        type: 'multiple_choice',
        question: 'L\'âge des élèves est une donnée:',
        answer: 'quantitative',
        wrongAnswers: ['qualitative', 'descriptive', 'textuelle']
      },
      {
        type: 'multiple_choice',
        question: 'On peut collecter des données par:',
        answer: 'observation',
        wrongAnswers: ['invention', 'supposition', 'estimation']
      },
      // Drag and Drop - Ordering (values from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: (125), (150), (175)',
        answer: ['125', '150', '175'], // 125 < 150 < 175
        wordBank: ['125', '150', '175'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la moyenne de: 125, 150, 175, 200. Glisse le résultat:',
        answer: '162,5',
        wordBank: ['150', '162,5', '175', '200'],
        mode: 'select'
      },
      // Drag and Drop - Selection (data type)
      {
        type: 'drag_and_drop',
        question: 'Le poids des élèves en kilogrammes est une donnée:',
        answer: 'Quantitative',
        wordBank: ['Quantitative', 'Qualitative', 'Descriptive', 'Textuelle'],
        mode: 'select'
      },
      // Drag and Drop - Selection (calculation)
      {
        type: 'drag_and_drop',
        question: 'Dans une classe, 15 élèves aiment les mathématiques et 10 aiment les sciences. Glisse le total:',
        answer: '25',
        wordBank: ['23', '25', '27', '30'],
        mode: 'select'
      }
    ]
  },

  'ch7-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un tableau organise les données en lignes et colonnes", answer: "vrai" },
      { question: "On peut toujours trier les données numériques par ordre croissant ou décroissant", answer: "vrai" },
      { question: "Tous les tableaux doivent avoir exactement 3 lignes", answer: "faux" },
      { question: "Un tableau doit avoir un titre pour être clair et lisible", answer: "vrai" },
      { question: "L'organisation des données dans un tableau facilite leur analyse", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Trie par ordre croissant: 125, 150, 100, 175, 200',
        answer: '100, 125, 150, 175, 200',
        wrongAnswers: ['125, 150, 100, 175, 200', '200, 175, 150, 125, 100', '150, 125, 175, 100, 200']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un tableau avec 4 lignes et 5 colonnes, combien de cases au total?',
        answer: '20',
        wrongAnswers: ['18', '22', '24']
      },
      {
        type: 'multiple_choice',
        question: 'Trie par ordre décroissant: 125, 150, 175, 200, 100',
        answer: '200, 175, 150, 125, 100',
        wrongAnswers: ['100, 125, 150, 175, 200', '125, 150, 175, 200, 100', '175, 200, 125, 150, 100']
      },
      {
        type: 'multiple_choice',
        question: 'Un tableau avec 3 lignes de données et 2 colonnes contient combien de valeurs?',
        answer: '6',
        wrongAnswers: ['5', '7', '8']
      },
      {
        type: 'multiple_choice',
        question: 'Quel élément est essentiel pour qu\'un tableau soit clair et lisible?',
        answer: 'Un titre',
        wrongAnswers: ['Au moins 5 lignes', 'Exactement 2 colonnes', 'Des couleurs']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut trier les données numériques par ordre croissant',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un tableau doit toujours avoir exactement le même nombre de lignes et de colonnes',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'L\'organisation des données dans un tableau facilite leur lecture et leur analyse',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les tableaux doivent avoir un titre',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Dans un tableau, l\'_____ facilite la lecture des données',
        answer: 'organisation',
        wrongAnswers: ['désordre', 'confusion', 'mélange']
      },
      {
        type: 'multiple_choice',
        question: 'Trie par ordre croissant: 175, 125, 200, 150',
        answer: '125, 150, 175, 200',
        wrongAnswers: ['200, 175, 150, 125', '125, 175, 150, 200', '150, 125, 175, 200']
      },
      {
        type: 'multiple_choice',
        question: 'Un tableau doit avoir un _____ pour être clair',
        answer: 'titre',
        wrongAnswers: ['sous-titre', 'légende', 'note']
      },
      // Drag and Drop - Ordering (numbers from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces nombres du plus petit au plus grand: (125), (150), (175)',
        answer: ['125', '150', '175'], // 125 < 150 < 175
        wordBank: ['125', '150', '175'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Dans un tableau avec 4 lignes et 5 colonnes, glisse le nombre total de cases:',
        answer: '20',
        wordBank: ['18', '20', '22', '24'],
        mode: 'select'
      },
      // Drag and Drop - Selection (sorting)
      {
        type: 'drag_and_drop',
        question: 'Trie par ordre croissant: 200, 125, 175, 150. Glisse le résultat:',
        answer: '125, 150, 175, 200',
        wordBank: ['125, 150, 175, 200', '200, 175, 150, 125', '150, 125, 175, 200', '125, 175, 150, 200'],
        mode: 'select'
      },
      // Drag and Drop - Selection (table structure)
      {
        type: 'drag_and_drop',
        question: 'Quel élément est essentiel pour qu\'un tableau soit clair? Glisse la réponse:',
        answer: 'Un titre',
        wordBank: ['Un titre', 'Au moins 5 lignes', 'Exactement 2 colonnes', 'Des couleurs'],
        mode: 'select'
      }
    ]
  },

  'ch7-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Un graphique en barres utilise des barres de différentes hauteurs pour représenter les données", answer: "vrai" },
      { question: "La hauteur de chaque barre correspond toujours à la valeur qu'elle représente", answer: "vrai" },
      { question: "Tous les graphiques doivent utiliser des barres verticales", answer: "faux" },
      { question: "Un graphique doit avoir un titre et des axes clairement identifiés", answer: "vrai" },
      { question: "Les graphiques permettent de comparer visuellement les données plus facilement que les tableaux", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Quel type de graphique utilise des barres de différentes hauteurs?',
        answer: 'Graphique en barres',
        wrongAnswers: ['Graphique circulaire', 'Graphique linéaire', 'Tableau']
      },
      {
        type: 'multiple_choice',
        question: 'Sur un graphique en barres, la hauteur de la barre indique:',
        answer: 'La valeur des données',
        wrongAnswers: ['Le nombre de lignes', 'La couleur', 'Le titre']
      },
      {
        type: 'multiple_choice',
        question: 'Sur un graphique, si la barre A représente 125 et la barre B représente 175, quelle barre est plus haute?',
        answer: 'Barre B',
        wrongAnswers: ['Barre A', 'Elles sont égales', 'On ne peut pas savoir']
      },
      {
        type: 'multiple_choice',
        question: 'Quels éléments sont essentiels pour qu\'un graphique soit lisible?',
        answer: 'Un titre et des axes',
        wrongAnswers: ['Au moins 10 barres', 'Des couleurs vives', 'Un fond décoré']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un graphique, si une barre mesure 5 cm et représente 125, combien mesure une barre représentant 250?',
        answer: '10 cm',
        wrongAnswers: ['5 cm', '7,5 cm', '15 cm']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'On peut comparer visuellement les données sur un graphique en barres',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les graphiques doivent avoir exactement 5 barres',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'La hauteur d\'une barre correspond à la valeur qu\'elle représente',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un graphique doit toujours avoir un titre',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un graphique en barres utilise des _____ de différentes hauteurs',
        answer: 'barres',
        wrongAnswers: ['lignes', 'cercles', 'points']
      },
      {
        type: 'multiple_choice',
        question: 'La hauteur de la barre indique la:',
        answer: 'valeur',
        wrongAnswers: ['couleur', 'largeur', 'position']
      },
      {
        type: 'multiple_choice',
        question: 'Un graphique doit avoir un _____ pour être clair',
        answer: 'titre',
        wrongAnswers: ['sous-titre', 'légende', 'note']
      },
      // Drag and Drop - Ordering (values from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: (125), (150), (175)',
        answer: ['125', '150', '175'], // 125 < 150 < 175
        wordBank: ['125', '150', '175'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel type de graphique utilise des barres de différentes hauteurs? Glisse la réponse:',
        answer: 'Graphique en barres',
        wordBank: ['Graphique en barres', 'Graphique circulaire', 'Graphique linéaire', 'Tableau'],
        mode: 'select'
      },
      // Drag and Drop - Selection (graph reading)
      {
        type: 'drag_and_drop',
        question: 'Sur un graphique, si la barre A représente 125 et la barre B représente 175, quelle barre est plus haute? Glisse la réponse:',
        answer: 'Barre B',
        wordBank: ['Barre A', 'Barre B', 'Elles sont égales', 'On ne peut pas savoir'],
        mode: 'select'
      },
      // Drag and Drop - Selection (graph elements)
      {
        type: 'drag_and_drop',
        question: 'Quels éléments sont essentiels pour qu\'un graphique soit lisible? Glisse la réponse:',
        answer: 'Un titre et des axes',
        wordBank: ['Un titre et des axes', 'Au moins 10 barres', 'Des couleurs vives', 'Un fond décoré'],
        mode: 'select'
      }
    ]
  },

  'ch7-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La moyenne se calcule en divisant la somme des valeurs par le nombre de valeurs", answer: "vrai" },
      { question: "Le maximum est toujours la valeur la plus grande dans un ensemble de données", answer: "vrai" },
      { question: "Le minimum peut être égal au maximum si toutes les valeurs sont identiques", answer: "vrai" },
      { question: "L'étendue se calcule toujours en soustrayant le minimum du maximum", answer: "vrai" },
      { question: "Ces calculs statistiques ne sont pas utiles pour analyser les données", answer: "faux" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 125, 150, 175, 200',
        answer: '162,5',
        wrongAnswers: ['150', '175', '200']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le maximum de: 125, 150, 175, 200, 100',
        answer: '200',
        wrongAnswers: ['125', '175', '150']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le minimum de: 125, 150, 175, 200, 100',
        answer: '100',
        wrongAnswers: ['125', '150', '175']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule l\'étendue pour ces valeurs: maximum = 200, minimum = 125',
        answer: '75',
        wrongAnswers: ['100', '50', '325']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la formule pour calculer la moyenne?',
        answer: 'somme ÷ nombre de valeurs',
        wrongAnswers: ['maximum - minimum', 'maximum + minimum', 'nombre de valeurs ÷ somme']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La moyenne de 125, 150, 175, 200 est 162,5',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'L\'étendue se calcule en soustrayant le minimum du maximum',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Le maximum est toujours plus grand que le minimum',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Pour calculer la moyenne, on divise la somme par le nombre de valeurs',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 125, 150, 175, 200',
        answer: '162,5',
        wrongAnswers: ['150', '175', '200']
      },
      {
        type: 'multiple_choice',
        question: 'L\'étendue = maximum - ?',
        answer: 'minimum',
        wrongAnswers: ['moyenne', 'maximum', 'total']
      },
      {
        type: 'multiple_choice',
        question: 'Trouve le maximum de: 125, 150, 175, 200',
        answer: '200',
        wrongAnswers: ['125', '150', '175']
      },
      // Drag and Drop - Ordering (values from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: (125), (150), (175)',
        answer: ['125', '150', '175'], // 125 < 150 < 175
        wordBank: ['125', '150', '175'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la moyenne de: 125, 150, 175, 200. Glisse le résultat:',
        answer: '162,5',
        wordBank: ['150', '162,5', '175', '200'],
        mode: 'select'
      },
      // Drag and Drop - Selection (maximum)
      {
        type: 'drag_and_drop',
        question: 'Trouve le maximum de: 125, 150, 175, 200. Glisse la réponse:',
        answer: '200',
        wordBank: ['125', '150', '175', '200'],
        mode: 'select'
      },
      // Drag and Drop - Selection (range)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'étendue: max=200, min=125. Glisse le résultat:',
        answer: '75',
        wordBank: ['50', '75', '100', '325'],
        mode: 'select'
      }
    ]
  },

  'ch7-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut analyser des données complètes en utilisant des tableaux et des graphiques", answer: "vrai" },
      { question: "Comparer des groupes de données permet de trouver des différences et des similitudes", answer: "vrai" },
      { question: "Tous les problèmes statistiques nécessitent exactement les mêmes calculs", answer: "faux" },
      { question: "Les calculs statistiques (moyenne, maximum, minimum, étendue) donnent des informations importantes", answer: "vrai" },
      { question: "La pratique régulière améliore la capacité à analyser des données", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed analysis)
      {
        type: 'multiple_choice',
        question: 'Analyse ces notes: 125, 150, 175, 200, 100. Quelle est la moyenne?',
        answer: '150',
        wrongAnswers: ['140', '160', '175']
      },
      {
        type: 'multiple_choice',
        question: 'Compare deux groupes: Groupe A a une moyenne de 150, Groupe B a une moyenne de 175. Quel groupe a la moyenne la plus élevée?',
        answer: 'Groupe B',
        wrongAnswers: ['Groupe A', 'Ils sont égaux', 'On ne peut pas savoir']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un ensemble de données: maximum = 200, minimum = 125. Quelle est l\'étendue?',
        answer: '75',
        wrongAnswers: ['50', '100', '325']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 100, 125, 150, 175, 200',
        answer: '150',
        wrongAnswers: ['140', '160', '175']
      },
      {
        type: 'multiple_choice',
        question: 'Quel outil est le plus utile pour comparer visuellement des données?',
        answer: 'Un graphique en barres',
        wrongAnswers: ['Un tableau seul', 'Un texte', 'Une liste']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les graphiques aident à visualiser et comparer les données',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les problèmes statistiques nécessitent exactement les mêmes calculs',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Comparer des groupes de données permet de trouver des différences',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La pratique améliore la capacité à analyser des données',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Analyse: notes 125, 150, 175, 200. Quelle est la moyenne?',
        answer: '162,5',
        wrongAnswers: ['150', '175', '200']
      },
      {
        type: 'multiple_choice',
        question: 'Compare: Groupe A moyenne 150, Groupe B moyenne 175. De combien de points la moyenne du Groupe B est-elle supérieure?',
        answer: '25 points',
        wrongAnswers: ['15 points', '35 points', '20 points']
      },
      {
        type: 'multiple_choice',
        question: 'La pratique améliore l\'_____ des données',
        answer: 'analyse',
        wrongAnswers: ['confusion', 'ignorance', 'oubli']
      },
      // Drag and Drop - Ordering (values from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces valeurs du plus petit au plus grand: (125), (150), (175)',
        answer: ['125', '150', '175'], // 125 < 150 < 175
        wordBank: ['125', '150', '175'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Analyse ces notes: 125, 150, 175, 200, 100. Glisse la moyenne:',
        answer: '150',
        wordBank: ['140', '150', '160', '175'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison)
      {
        type: 'drag_and_drop',
        question: 'Compare: Groupe A moyenne 150, Groupe B moyenne 175. Quel groupe a la moyenne la plus élevée? Glisse la réponse:',
        answer: 'Groupe B',
        wordBank: ['Groupe A', 'Groupe B', 'Ils sont égaux', 'On ne peut pas savoir'],
        mode: 'select'
      },
      // Drag and Drop - Selection (range calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule l\'étendue: max=200, min=125. Glisse le résultat:',
        answer: '75',
        wordBank: ['50', '75', '100', '325'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 8: PROBABILITÉS SIMPLES
  'ch8-s1': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "La probabilité mesure la chance qu'un événement se produise", answer: "vrai" },
      { question: "Un événement certain a toujours une probabilité de 1", answer: "vrai" },
      { question: "Tous les événements ont une probabilité supérieure à 0", answer: "faux" },
      { question: "Un événement possible a une probabilité comprise entre 0 et 1", answer: "vrai" },
      { question: "Un événement impossible a une probabilité de 0", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la probabilité?',
        answer: 'La chance qu\'un événement se produise',
        wrongAnswers: ['Le nombre d\'événements', 'La somme des événements', 'Le produit des événements']
      },
      {
        type: 'multiple_choice',
        question: 'Un événement certain a une probabilité de:',
        answer: '1',
        wrongAnswers: ['0', '0,5', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Un événement impossible a une probabilité de:',
        answer: '0',
        wrongAnswers: ['1', '0,5', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Un événement possible a une probabilité:',
        answer: 'Entre 0 et 1',
        wrongAnswers: ['Égale à 0', 'Égale à 1', 'Supérieure à 1']
      },
      {
        type: 'multiple_choice',
        question: 'Si un événement a une probabilité de 0,5, qu\'est-ce que cela signifie?',
        answer: 'Il a 50% de chance de se produire',
        wrongAnswers: ['Il est certain', 'Il est impossible', 'Il a 100% de chance']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un événement certain a une probabilité de 1',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Un événement impossible a une probabilité de 0',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les événements ont une probabilité supérieure à 0',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Un événement possible a une probabilité comprise entre 0 et 1',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un événement certain a une probabilité de:',
        answer: '1',
        wrongAnswers: ['0', '0,5', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Un événement impossible a une probabilité de:',
        answer: '0',
        wrongAnswers: ['1', '0,5', '2']
      },
      {
        type: 'multiple_choice',
        question: 'Un événement possible a une probabilité entre ? et 1',
        answer: '0',
        wrongAnswers: ['0,5', '1', '2']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: (0), (0,5), (1)',
        answer: ['0', '0,5', '1'], // 0 < 0,5 < 1
        wordBank: ['0', '0,5', '1'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Un événement certain a une probabilité de: Glisse la réponse:',
        answer: '1',
        wordBank: ['0', '0,5', '1', '2'],
        mode: 'select'
      },
      // Drag and Drop - Selection (event type)
      {
        type: 'drag_and_drop',
        question: 'Un événement impossible a une probabilité de: Glisse la réponse:',
        answer: '0',
        wordBank: ['0', '0,5', '1', '2'],
        mode: 'select'
      },
      // Drag and Drop - Selection (probability range)
      {
        type: 'drag_and_drop',
        question: 'Un événement possible a une probabilité: Glisse la réponse:',
        answer: 'Entre 0 et 1',
        wordBank: ['Égale à 0', 'Égale à 1', 'Entre 0 et 1', 'Supérieure à 1'],
        mode: 'select'
      }
    ]
  },

  'ch8-s2': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Probabilité = cas favorables ÷ cas total", answer: "vrai" },
      { question: "La probabilité de tirer un 6 avec un dé est 1/6", answer: "vrai" },
      { question: "La probabilité de tirer pile avec une pièce est toujours 1/2", answer: "vrai" },
      { question: "Il faut toujours simplifier la fraction de probabilité", answer: "faux" },
      { question: "Pour calculer la probabilité, on compte les cas favorables et le total", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Calcule la probabilité de tirer un 3 avec un dé standard:',
        answer: '1/6',
        wrongAnswers: ['1/3', '1/2', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'La probabilité de tirer pile avec une pièce est:',
        answer: '1/2',
        wrongAnswers: ['1/1', '1/3', '2/1']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un sac avec 4 boules rouges et 6 boules bleues, quelle est la probabilité de tirer une boule rouge?',
        answer: '4/10',
        wrongAnswers: ['4/6', '6/10', '10/4']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la probabilité de tirer un nombre pair avec un dé standard?',
        answer: '1/2',
        wrongAnswers: ['1/3', '2/3', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un sac avec 3 boules vertes et 7 boules jaunes, quelle est la probabilité de tirer une boule verte?',
        answer: '3/10',
        wrongAnswers: ['3/7', '7/10', '10/3']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La probabilité de tirer un nombre pair avec un dé est 3/6 = 1/2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Probabilité = cas favorables ÷ cas total',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La probabilité de tirer un 7 avec un dé standard est 1/6',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Dans un sac avec 5 boules bleues et 5 boules rouges, la probabilité de tirer une bleue est 1/2',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule la probabilité de tirer un 3 avec un dé standard:',
        answer: '1/6',
        wrongAnswers: ['1/3', '1/2', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'Probabilité = cas favorables ÷ ?',
        answer: 'cas total',
        wrongAnswers: ['cas favorables', 'cas défavorables', 'probabilité']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un sac avec 4 rouges et 6 bleues, quelle est la probabilité de tirer une rouge?',
        answer: '4/10',
        wrongAnswers: ['4/6', '6/10', '10/4']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: (1/6), (1/3), (1/2)',
        answer: ['1/6', '1/3', '1/2'], // 1/6 < 1/3 < 1/2
        wordBank: ['1/6', '1/3', '1/2'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la probabilité de tirer un 3 avec un dé standard. Glisse la réponse:',
        answer: '1/6',
        wordBank: ['1/3', '1/6', '1/2', '3/6'],
        mode: 'select'
      },
      // Drag and Drop - Selection (coin probability)
      {
        type: 'drag_and_drop',
        question: 'La probabilité de tirer pile avec une pièce est: Glisse la réponse:',
        answer: '1/2',
        wordBank: ['1/1', '1/2', '1/3', '2/1'],
        mode: 'select'
      },
      // Drag and Drop - Selection (bag probability)
      {
        type: 'drag_and_drop',
        question: 'Dans un sac avec 4 rouges et 6 bleues, probabilité de tirer une rouge? Glisse la réponse:',
        answer: '4/10',
        wordBank: ['4/6', '4/10', '6/10', '10/4'],
        mode: 'select'
      }
    ]
  },

  'ch8-s3': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Toute probabilité peut s'exprimer comme une fraction", answer: "vrai" },
      { question: "1/2 = 50% de chance", answer: "vrai" },
      { question: "1/4 = 25% de chance", answer: "vrai" },
      { question: "Toutes les fractions de probabilité doivent être simplifiées", answer: "faux" },
      { question: "On peut convertir entre fractions et pourcentages", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Simplifie la probabilité 4/8:',
        answer: '1/2',
        wrongAnswers: ['2/4', '4/8', '8/4']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis la probabilité 1/4 en pourcentage:',
        answer: '25%',
        wrongAnswers: ['20%', '30%', '40%']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle probabilité est plus grande: 1/3 ou 1/4?',
        answer: '1/3',
        wrongAnswers: ['1/4', 'Elles sont égales', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis la probabilité 1/2 en pourcentage:',
        answer: '50%',
        wrongAnswers: ['40%', '60%', '25%']
      },
      {
        type: 'multiple_choice',
        question: 'Simplifie la probabilité 3/6:',
        answer: '1/2',
        wrongAnswers: ['3/6', '1/3', '2/3']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: '1/2 = 50%',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '1/4 = 25%',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les fractions de probabilité doivent être simplifiées',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut convertir entre fractions et pourcentages',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Simplifie: 4/8 = ?',
        answer: '1/2',
        wrongAnswers: ['2/4', '4/8', '8/4']
      },
      {
        type: 'multiple_choice',
        question: 'Convertis: 1/4 = ?%',
        answer: '25%',
        wrongAnswers: ['20%', '30%', '40%']
      },
      {
        type: 'multiple_choice',
        question: 'On peut convertir entre fractions et:',
        answer: 'pourcentages',
        wrongAnswers: ['décimaux', 'entiers', 'nombres']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: (1/4), (1/3), (1/2)',
        answer: ['1/4', '1/3', '1/2'], // 1/4 < 1/3 < 1/2
        wordBank: ['1/4', '1/3', '1/2'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Simplifie la probabilité 4/8. Glisse la réponse:',
        answer: '1/2',
        wordBank: ['2/4', '1/2', '4/8', '8/4'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: 'Convertis la probabilité 1/4 en pourcentage. Glisse la réponse:',
        answer: '25%',
        wordBank: ['20%', '25%', '30%', '40%'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison)
      {
        type: 'drag_and_drop',
        question: 'Quelle probabilité est plus grande: 1/3 ou 1/4? Glisse la réponse:',
        answer: '1/3',
        wordBank: ['1/3', '1/4', 'Elles sont égales', 'On ne peut pas comparer'],
        mode: 'select'
      }
    ]
  },

  'ch8-s4': {
    questions: [
      // True/False - Mixed answers for middle school level
      { question: "Une expérience consiste à répéter un événement plusieurs fois", answer: "vrai" },
      { question: "La fréquence = nombre d'occurrences ÷ nombre total d'essais", answer: "vrai" },
      { question: "On note toujours les résultats dans un tableau", answer: "faux" },
      { question: "On compare les résultats expérimentaux avec la probabilité théorique", answer: "vrai" },
      { question: "Répéter une expérience plusieurs fois donne des résultats plus fiables", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty
      {
        type: 'multiple_choice',
        question: 'Si tu obtiens pile 6 fois sur 10 lancers, quelle est la fréquence?',
        answer: '6/10',
        wrongAnswers: ['6/6', '10/6', '4/10']
      },
      {
        type: 'multiple_choice',
        question: 'Si tu lances une pièce 20 fois et obtiens 12 piles, quelle est la fréquence?',
        answer: '12/20',
        wrongAnswers: ['12/12', '20/12', '8/20']
      },
      {
        type: 'multiple_choice',
        question: 'Fréquence = nombre d\'occurrences ÷ ?',
        answer: 'nombre total d\'essais',
        wrongAnswers: ['nombre de réussites', 'nombre d\'échecs', 'probabilité théorique']
      },
      {
        type: 'multiple_choice',
        question: 'Si tu lances un dé 30 fois et obtiens 5 fois le nombre 3, quelle est la fréquence?',
        answer: '5/30',
        wrongAnswers: ['5/6', '30/5', '25/30']
      },
      {
        type: 'multiple_choice',
        question: 'Pourquoi répète-t-on une expérience plusieurs fois?',
        answer: 'Pour obtenir des résultats plus fiables',
        wrongAnswers: ['Pour gagner du temps', 'Pour simplifier les calculs', 'Pour éviter les erreurs']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La fréquence = nombre d\'occurrences ÷ nombre total d\'essais',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On compare toujours les résultats expérimentaux avec la probabilité théorique',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les expériences doivent être répétées exactement 10 fois',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Répéter une expérience plusieurs fois donne des résultats plus fiables',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Si tu obtiens pile 6 fois sur 10, quelle est la fréquence?',
        answer: '6/10',
        wrongAnswers: ['6/6', '10/6', '4/10']
      },
      {
        type: 'multiple_choice',
        question: 'Fréquence = nombre d\'occurrences ÷ ?',
        answer: 'nombre total d\'essais',
        wrongAnswers: ['nombre de réussites', 'nombre d\'échecs', 'probabilité théorique']
      },
      {
        type: 'multiple_choice',
        question: 'On note les résultats dans un:',
        answer: 'tableau',
        wrongAnswers: ['graphique', 'texte', 'liste']
      },
      // Drag and Drop - Ordering (frequencies from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces fréquences du plus petit au plus grand: (3/10), (5/10), (7/10)',
        answer: ['3/10', '5/10', '7/10'], // 3/10 < 5/10 < 7/10
        wordBank: ['3/10', '5/10', '7/10'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Si tu obtiens pile 6 fois sur 10 lancers, quelle est la fréquence? Glisse la réponse:',
        answer: '6/10',
        wordBank: ['6/6', '6/10', '10/6', '4/10'],
        mode: 'select'
      },
      // Drag and Drop - Selection (frequency calculation)
      {
        type: 'drag_and_drop',
        question: 'Si tu lances une pièce 20 fois et obtiens 12 piles, quelle est la fréquence? Glisse la réponse:',
        answer: '12/20',
        wordBank: ['12/12', '12/20', '20/12', '8/20'],
        mode: 'select'
      },
      // Drag and Drop - Selection (formula)
      {
        type: 'drag_and_drop',
        question: 'Fréquence = nombre d\'occurrences ÷ ? Glisse la réponse:',
        answer: 'nombre total d\'essais',
        wordBank: ['nombre de réussites', 'nombre total d\'essais', 'nombre d\'échecs', 'probabilité théorique'],
        mode: 'select'
      }
    ]
  },

  'ch8-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review)
      { question: "On peut calculer des probabilités complexes en comptant les cas favorables et le total", answer: "vrai" },
      { question: "On peut comparer des probabilités en comparant les fractions", answer: "vrai" },
      { question: "Toutes les probabilités complexes nécessitent des calculs difficiles", answer: "faux" },
      { question: "Les expériences pratiques aident à comprendre la probabilité théorique", answer: "vrai" },
      { question: "Les probabilités sont utiles dans la vie quotidienne", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Dans un sac avec 3 boules rouges, 2 boules bleues et 5 boules vertes, quelle est la probabilité de tirer une verte?',
        answer: '5/10',
        wrongAnswers: ['3/10', '2/10', '10/5']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle probabilité est plus grande: 1/2 ou 1/3?',
        answer: '1/2',
        wrongAnswers: ['1/3', 'Elles sont égales', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la probabilité de tirer un nombre pair avec un dé standard:',
        answer: '1/2',
        wrongAnswers: ['1/3', '2/3', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'Dans un sac avec 4 boules rouges, 3 boules bleues et 3 boules vertes, quelle est la probabilité de tirer une rouge?',
        answer: '4/10',
        wrongAnswers: ['3/10', '4/6', '10/4']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la probabilité de tirer un 5 avec un dé standard:',
        answer: '1/6',
        wrongAnswers: ['1/5', '5/6', '6/5']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La probabilité de tirer un nombre pair avec un dé est 3/6 = 1/2',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'On peut comparer des probabilités en comparant les fractions',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les probabilités complexes nécessitent des calculs difficiles',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les probabilités sont utiles dans la vie quotidienne',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Dans un sac avec 3 rouges, 2 bleues et 5 vertes, quelle est la probabilité de tirer une verte?',
        answer: '5/10',
        wrongAnswers: ['3/10', '2/10', '10/5']
      },
      {
        type: 'multiple_choice',
        question: 'Compare: 1/2 _____ 1/3 (choisissez > ou <)',
        answer: '>',
        wrongAnswers: ['<', '=', 'On ne peut pas comparer']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: Probabilité de tirer un 5 avec un dé = ?',
        answer: '1/6',
        wrongAnswers: ['1/5', '5/6', '6/5']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: (1/6), (1/3), (1/2)',
        answer: ['1/6', '1/3', '1/2'], // 1/6 < 1/3 < 1/2
        wordBank: ['1/6', '1/3', '1/2'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Dans un sac avec 3 rouges, 2 bleues et 5 vertes, probabilité de tirer une verte? Glisse la réponse:',
        answer: '5/10',
        wordBank: ['3/10', '2/10', '5/10', '10/5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (comparison)
      {
        type: 'drag_and_drop',
        question: 'Quelle probabilité est plus grande: 1/2 ou 1/3? Glisse la réponse:',
        answer: '1/2',
        wordBank: ['1/2', '1/3', 'Elles sont égales', 'On ne peut pas comparer'],
        mode: 'select'
      },
      // Drag and Drop - Selection (calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule la probabilité de tirer un nombre pair avec un dé standard. Glisse la réponse:',
        answer: '1/2',
        wordBank: ['1/3', '1/2', '2/3', '3/6'],
        mode: 'select'
      }
    ]
  },

  // CHAPTER 9: RÉVISION GÉNÉRALE
  'ch9-s1': {
    questions: [
      // True/False - Mixed answers for middle school level (review: numbers)
      { question: "On peut réviser toutes les opérations sur les nombres entiers (addition, soustraction, multiplication, division)", answer: "vrai" },
      { question: "Les fractions représentent toujours des parties égales d'un tout", answer: "faux" },
      { question: "Les décimaux ont une virgule pour séparer la partie entière de la partie décimale", answer: "vrai" },
      { question: "Les pourcentages sont des fractions sur 100", answer: "vrai" },
      { question: "La révision régulière consolide les connaissances acquises", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed operations)
      {
        type: 'multiple_choice',
        question: 'Calcule: 125 + 378 = ?',
        answer: '503',
        wrongAnswers: ['493', '513', '483']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 2/5 + 1/5 = ?',
        answer: '3/5',
        wrongAnswers: ['3/10', '2/5', '1/5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 3,25 + 2,15 = ?',
        answer: '5,40',
        wrongAnswers: ['5,30', '5,50', '5,35']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce qu\'un pourcentage?',
        answer: 'Une fraction sur 100',
        wrongAnswers: ['Un nombre décimal', 'Un nombre entier', 'Une fraction sur 10']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 450 - 280 = ?',
        answer: '170',
        wrongAnswers: ['160', '180', '190']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les fractions représentent des parties d\'un tout',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les décimaux ont exactement 2 chiffres après la virgule',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les pourcentages sont des fractions sur 100',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La révision consolide les connaissances',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Calcule: 125 + 378 = ?',
        answer: '503',
        wrongAnswers: ['493', '513', '483']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 2/5 + 1/5 = ?',
        answer: '3/5',
        wrongAnswers: ['3/10', '2/5', '1/5']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 3,25 + 2,15 = ?',
        answer: '5,40',
        wrongAnswers: ['5,30', '5,50', '5,35']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (125 + 75), (150 + 80), (200 + 60)',
        answer: ['200', '230', '260'], // 125+75=200, 150+80=230, 200+60=260
        wordBank: ['200', '230', '260'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 125 + 378. Glisse le résultat:',
        answer: '503',
        wordBank: ['493', '503', '513', '483'],
        mode: 'select'
      },
      // Drag and Drop - Selection (fraction calculation)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 2/5 + 1/5. Glisse le résultat:',
        answer: '3/5',
        wordBank: ['3/10', '3/5', '2/5', '1/5'],
        mode: 'select'
      },
      // Drag and Drop - Selection (percentage definition)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce qu\'un pourcentage? Glisse la réponse:',
        answer: 'Une fraction sur 100',
        wordBank: ['Un nombre décimal', 'Une fraction sur 100', 'Un nombre entier', 'Une fraction sur 10'],
        mode: 'select'
      }
    ]
  },

  'ch9-s2': {
    questions: [
      // True/False - Mixed answers for middle school level (review: geometry)
      { question: "On peut réviser toutes les figures géométriques (carré, rectangle, triangle, cercle)", answer: "vrai" },
      { question: "On peut calculer le périmètre et l'aire des figures géométriques", answer: "vrai" },
      { question: "Toutes les figures géométriques ont exactement 4 côtés", answer: "faux" },
      { question: "Il faut connaître les formules pour calculer le périmètre et l'aire", answer: "vrai" },
      { question: "La géométrie est utile dans la vie quotidienne", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (geometry)
      {
        type: 'multiple_choice',
        question: 'Un carré a combien de côtés égaux?',
        answer: '4',
        wrongAnswers: ['3', '5', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le périmètre d\'un rectangle de 6 cm × 4 cm?',
        answer: '20 cm',
        wrongAnswers: ['18 cm', '22 cm', '24 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'aire d\'un rectangle de 6 cm × 4 cm?',
        answer: '24 cm²',
        wrongAnswers: ['20 cm²', '22 cm²', '28 cm²']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle figure géométrique a 4 angles droits?',
        answer: 'Carré',
        wrongAnswers: ['Triangle', 'Cercle', 'Losange']
      },
      {
        type: 'multiple_choice',
        question: 'Quel est le périmètre d\'un carré de côté 5 cm?',
        answer: '20 cm',
        wrongAnswers: ['15 cm', '25 cm', '10 cm']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Un triangle a 3 côtés',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les figures géométriques ont exactement 4 côtés',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'On peut calculer le périmètre et l\'aire des figures géométriques',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La géométrie est utile dans la vie quotidienne',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Un carré a combien de côtés égaux?',
        answer: '4',
        wrongAnswers: ['3', '5', '6']
      },
      {
        type: 'multiple_choice',
        question: 'Périmètre d\'un rectangle 6 cm × 4 cm = ?',
        answer: '20 cm',
        wrongAnswers: ['18 cm', '22 cm', '24 cm']
      },
      {
        type: 'multiple_choice',
        question: 'Aire d\'un rectangle 6 cm × 4 cm = ?',
        answer: '24 cm²',
        wrongAnswers: ['20 cm²', '22 cm²', '28 cm²']
      },
      // Drag and Drop - Ordering (areas from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces aires du plus petit au plus grand: (rectangle 4×3), (rectangle 5×4), (rectangle 6×4)',
        answer: ['12', '20', '24'], // 4×3=12, 5×4=20, 6×4=24
        wordBank: ['12', '20', '24'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Quel est le périmètre d\'un rectangle de 6 cm × 4 cm? Glisse la réponse:',
        answer: '20 cm',
        wordBank: ['18 cm', '20 cm', '22 cm', '24 cm'],
        mode: 'select'
      },
      // Drag and Drop - Selection (area calculation)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'aire d\'un rectangle de 6 cm × 4 cm? Glisse la réponse:',
        answer: '24 cm²',
        wordBank: ['20 cm²', '24 cm²', '22 cm²', '28 cm²'],
        mode: 'select'
      },
      // Drag and Drop - Selection (figure identification)
      {
        type: 'drag_and_drop',
        question: 'Quelle figure géométrique a 4 angles droits? Glisse la réponse:',
        answer: 'Carré',
        wordBank: ['Triangle', 'Carré', 'Cercle', 'Losange'],
        mode: 'select'
      }
    ]
  },

  'ch9-s3': {
    questions: [
      // True/False - Mixed answers for middle school level (review: measurements)
      { question: "On peut réviser toutes les unités de mesure (longueur, masse, volume, temps)", answer: "vrai" },
      { question: "Il faut connaître les conversions entre différentes unités de mesure", answer: "vrai" },
      { question: "Toutes les unités de mesure utilisent le même système de conversion", answer: "faux" },
      { question: "Il faut toujours faire attention aux unités dans les calculs", answer: "vrai" },
      { question: "La pratique régulière améliore la compréhension des conversions", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (conversions)
      {
        type: 'multiple_choice',
        question: '2h30 = combien de minutes?',
        answer: '150 minutes',
        wrongAnswers: ['120 minutes', '180 minutes', '140 minutes']
      },
      {
        type: 'multiple_choice',
        question: '3 articles à 125 MRU chacun coûtent combien?',
        answer: '375 MRU',
        wrongAnswers: ['350 MRU', '400 MRU', '325 MRU']
      },
      {
        type: 'multiple_choice',
        question: '2 kg = combien de grammes?',
        answer: '2000 g',
        wrongAnswers: ['200 g', '20 g', '20000 g']
      },
      {
        type: 'multiple_choice',
        question: '3 L = combien de millilitres?',
        answer: '3000 ml',
        wrongAnswers: ['300 ml', '30 ml', '30000 ml']
      },
      {
        type: 'multiple_choice',
        question: '125 cm = combien de mètres?',
        answer: '1,25 m',
        wrongAnswers: ['12,5 m', '0,125 m', '1250 m']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Il faut connaître les conversions entre unités',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les unités de mesure utilisent le même système de conversion',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Il faut toujours faire attention aux unités dans les calculs',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: '2 kg = 2000 g',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: '2h30 = combien de minutes?',
        answer: '150 minutes',
        wrongAnswers: ['120 minutes', '180 minutes', '140 minutes']
      },
      {
        type: 'multiple_choice',
        question: '3 articles à 125 MRU chacun = ?',
        answer: '375 MRU',
        wrongAnswers: ['350 MRU', '400 MRU', '325 MRU']
      },
      {
        type: 'multiple_choice',
        question: '2 kg = combien de grammes?',
        answer: '2 000 g',
        wrongAnswers: ['200 g', '20 g', '20 000 g']
      },
      // Drag and Drop - Ordering (amounts from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces masses du plus petit au plus grand: (1,5 kg), (2000 g), (1,8 kg)',
        answer: ['1500', '1800', '2000'], // 1,5 kg = 1500 g, 1,8 kg = 1800 g, 2000 g
        wordBank: ['1500', '1800', '2000'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: '2h30 = combien de minutes? Glisse la réponse:',
        answer: '150',
        wordBank: ['120', '150', '180', '140'],
        mode: 'select'
      },
      // Drag and Drop - Selection (money calculation)
      {
        type: 'drag_and_drop',
        question: '3 articles à 125 MRU chacun coûtent combien? Glisse la réponse:',
        answer: '375',
        wordBank: ['350', '375', '400', '325'],
        mode: 'select'
      },
      // Drag and Drop - Selection (conversion)
      {
        type: 'drag_and_drop',
        question: '2 kg = combien de grammes? Glisse la réponse:',
        answer: '2000',
        wordBank: ['200', '2000', '20', '20000'],
        mode: 'select'
      }
    ]
  },

  'ch9-s4': {
    questions: [
      // True/False - Mixed answers for middle school level (review: statistics & probability)
      { question: "On peut réviser les statistiques et probabilités ensemble", answer: "vrai" },
      { question: "Les graphiques aident à visualiser les données plus facilement que les tableaux", answer: "vrai" },
      { question: "Tous les calculs statistiques nécessitent exactement les mêmes formules", answer: "faux" },
      { question: "Les probabilités mesurent la chance qu'un événement se produise", answer: "vrai" },
      { question: "La pratique régulière améliore l'analyse des données", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed review)
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 125, 150, 175, 200, 100',
        answer: '150',
        wrongAnswers: ['140', '160', '175']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est la probabilité de tirer un nombre pair avec un dé standard?',
        answer: '1/2',
        wrongAnswers: ['1/3', '2/3', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'Qu\'est-ce que la probabilité mesure?',
        answer: 'La chance qu\'un événement se produise',
        wrongAnswers: ['Le nombre d\'événements', 'La fréquence', 'Le total']
      },
      {
        type: 'multiple_choice',
        question: 'Quel outil est le plus utile pour visualiser des données?',
        answer: 'Un graphique en barres',
        wrongAnswers: ['Un tableau seul', 'Un texte', 'Une liste']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule la moyenne de: 12, 15, 18, 14, 16',
        answer: '15',
        wrongAnswers: ['14', '16', '17']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'Les graphiques aident à visualiser les données',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Tous les calculs statistiques nécessitent exactement les mêmes formules',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Les probabilités mesurent la chance qu\'un événement se produise',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La pratique améliore l\'analyse des données',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank
      {
        type: 'multiple_choice',
        question: 'Moyenne de 125, 150, 175, 200, 100 = ?',
        answer: '150',
        wrongAnswers: ['140', '160', '175']
      },
      {
        type: 'multiple_choice',
        question: 'Probabilité de tirer un nombre pair avec un dé = ?',
        answer: '1/2',
        wrongAnswers: ['1/3', '2/3', '3/6']
      },
      {
        type: 'multiple_choice',
        question: 'La pratique améliore l\'_____ des données',
        answer: 'analyse',
        wrongAnswers: ['confusion', 'ignorance', 'oubli']
      },
      // Drag and Drop - Ordering (probabilities from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces probabilités du plus petit au plus grand: (1/6), (1/3), (1/2)',
        answer: ['1/6', '1/3', '1/2'], // 1/6 < 1/3 < 1/2
        wordBank: ['1/6', '1/3', '1/2'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule la moyenne de: 125, 150, 175, 200, 100. Glisse le résultat:',
        answer: '150',
        wordBank: ['140', '150', '160', '175'],
        mode: 'select'
      },
      // Drag and Drop - Selection (probability)
      {
        type: 'drag_and_drop',
        question: 'Quelle est la probabilité de tirer un nombre pair avec un dé standard? Glisse la réponse:',
        answer: '1/2',
        wordBank: ['1/3', '1/2', '2/3', '3/6'],
        mode: 'select'
      },
      // Drag and Drop - Selection (definition)
      {
        type: 'drag_and_drop',
        question: 'Qu\'est-ce que la probabilité mesure? Glisse la réponse:',
        answer: 'La chance qu\'un événement se produise',
        wordBank: ['Le nombre d\'événements', 'La chance qu\'un événement se produise', 'La fréquence', 'Le total'],
        mode: 'select'
      }
    ]
  },

  'ch9-s5': {
    questions: [
      // True/False - Mixed answers for middle school level (review: comprehensive evaluation)
      { question: "L'évaluation teste toutes les connaissances acquises pendant l'année", answer: "vrai" },
      { question: "Il faut être méthodique lors d'une évaluation", answer: "vrai" },
      { question: "Toutes les évaluations nécessitent exactement la même approche", answer: "faux" },
      { question: "La vérification est essentielle pour s'assurer de la justesse des réponses", answer: "vrai" },
      { question: "La préparation et la gestion du temps sont importantes pour réussir une évaluation", answer: "vrai" }
    ],
    exercises: [
      // Multiple Choice - 4 options, middle school difficulty (mixed complex problems)
      {
        type: 'multiple_choice',
        question: 'Une famille achète 2 kg de riz à 150 MRU/kg, 1,5 L d\'huile à 200 MRU/L, et 3 pains à 25 MRU chacun. Quel est le total?',
        answer: '675 MRU',
        wrongAnswers: ['650 MRU', '700 MRU', '625 MRU']
      },
      {
        type: 'multiple_choice',
        question: 'Quelle est l\'aire d\'une pièce de 4 m × 3,5 m?',
        answer: '14 m²',
        wrongAnswers: ['12 m²', '16 m²', '15 m²']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 125 × 3 = ?',
        answer: '375',
        wrongAnswers: ['325', '425', '350']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 156 ÷ 12 = ?',
        answer: '13',
        wrongAnswers: ['12', '14', '15']
      },
      {
        type: 'multiple_choice',
        question: 'Ahmed achète 3 livres à 125 MRU chacun et 4 cahiers à 150 MRU chacun. Quel est le prix total?',
        answer: '975 MRU',
        wrongAnswers: ['950 MRU', '1000 MRU', '925 MRU']
      },
      // True/False - Mixed answers
      {
        type: 'true_false',
        question: 'La vérification est essentielle lors d\'une évaluation',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'Toutes les évaluations nécessitent exactement la même approche',
        answer: 'faux'
      },
      {
        type: 'true_false',
        question: 'Il faut être méthodique lors d\'une évaluation',
        answer: 'vrai'
      },
      {
        type: 'true_false',
        question: 'La préparation et la gestion du temps sont importantes',
        answer: 'vrai'
      },
      // Multiple Choice - Converted from fill_in_blank (mixed problems)
      {
        type: 'multiple_choice',
        question: 'Calcule: 125 × 3 = ?',
        answer: '375',
        wrongAnswers: ['325', '425', '350']
      },
      {
        type: 'multiple_choice',
        question: 'Aire d\'une pièce 4 m × 3,5 m = ?',
        answer: '14 m²',
        wrongAnswers: ['12 m²', '16 m²', '15 m²']
      },
      {
        type: 'multiple_choice',
        question: 'Calcule: 156 ÷ 12 = ?',
        answer: '13',
        wrongAnswers: ['12', '14', '15']
      },
      // Drag and Drop - Ordering (results from smallest to largest)
      {
        type: 'drag_and_drop',
        question: 'Rangez ces résultats du plus petit au plus grand: (125 × 3), (150 × 3), (175 × 3)',
        answer: ['375', '450', '525'], // 125×3=375, 150×3=450, 175×3=525
        wordBank: ['375', '450', '525'], // Exactly 3 numbers for 3 drop zones
        mode: 'order'
      },
      // Drag and Drop - Selection (choosing correct answer)
      {
        type: 'drag_and_drop',
        question: 'Calcule: 125 × 3. Glisse le résultat:',
        answer: '375',
        wordBank: ['325', '375', '425', '350'],
        mode: 'select'
      },
      // Drag and Drop - Selection (complex problem)
      {
        type: 'drag_and_drop',
        question: 'Une famille achète 2 kg de riz à 150 MRU/kg, 1,5 L d\'huile à 200 MRU/L, et 3 pains à 25 MRU chacun. Glisse le total:',
        answer: '675',
        wordBank: ['650', '675', '700', '625'],
        mode: 'select'
      },
      // Drag and Drop - Selection (area calculation)
      {
        type: 'drag_and_drop',
        question: 'Quelle est l\'aire d\'une pièce de 4 m × 3,5 m? Glisse la réponse:',
        answer: '14',
        wordBank: ['12', '14', '16', '15'],
        mode: 'select'
      }
    ]
  }
};

export default YEAR1_MATH_SECTION_QUESTIONS;


