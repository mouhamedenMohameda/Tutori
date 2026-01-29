/**
 * Year 1 Mathematics Curriculum - Mauritanie
 * Complete curriculum content from the official textbook
 */

export const YEAR1_MATH_CURRICULUM = {
  year: 1,
  subject: 'Mathématiques',
  title: 'Manuel de Mathématiques 1e AS (Première Année Secondaire) - Mauritanie',
  methodology: 'Approche progressive adaptée aux élèves de première année, privilégiant la manipulation concrète et l\'apprentissage par étapes.',
  
  chapters: [
    {
      id: 'ch1',
      title: 'LES NOMBRES ENTIERS',
      sections: [
        {
          id: 'ch1-s1',
          title: 'Les nombres entiers naturels',
          description: 'Comprendre et utiliser les nombres entiers naturels jusqu\'aux milliards',
          concepts: ['Nombres entiers', 'Lecture', 'Écriture', 'Décomposition positionnelle', 'Comparaison', 'Ordre'],
          objectives: [
            'Lire et écrire les grands nombres (jusqu\'aux milliards)',
            'Décomposer un nombre selon sa position',
            'Comparer et ranger les nombres entiers',
            'Utiliser les symboles <, >, ≤, ≥'
          ],
          content: {
            definition: {
              entiers: 'Les nombres entiers naturels appartiennent à l\'ensemble ℕ = {0, 1, 2, 3, 4, 5, ...}',
              utilisation: 'Ils servent à compter, mesurer des quantités, repérer des positions',
              vocabulaire: 'Unité, dizaine, centaine, millier, million, milliard'
            },
            lecture: {
              grands_nombres: 'Exemple: 8753192406 se lit "huit milliards sept cent cinquante-trois millions cent quatre-vingt-douze mille quatre cent six"',
              regle_grammaticale: 'Mille est invariable. Vingt et cent prennent "s" lorsqu\'ils sont multipliés et qu\'ils terminent l\'écriture',
              decomposition: 'Pour 5821: chiffre des unités=1, dizaines=2, centaines=8, milliers=5'
            },
            comparaison: {
              methode_4_regles: '1) Comparer le nombre de chiffres, 2) Si égal, comparer le chiffre des unités de mille, 3) Puis centaine, dizaine, unité, 4) Utiliser <, >, ≤, ≥',
              exemple: '2896 < 11131 car 2896 a 4 chiffres et 11131 a 5 chiffres'
            },
            mauritanianContext: [
              'Ahmed sur la route de Nouakchott à Boutilimit note les bornes: Tenoueich(15), Teverit(25), Agba(33), Oued Naga(50), Idini(56), Aoudech(87), Meimoune(90), Naim(115), Tivikine(136), Boutilimit(154)',
              'Distances entre villes mauritaniennes',
              'Population des régions',
              'Prix des produits en ouguiyas'
            ]
          },
          questions: [
            "Qu'est-ce qu'un nombre entier naturel?",
            "Lis le nombre 510831",
            "Dans 873292, quel est le chiffre des unités?",
            "Compare 2896 et 11131. Lequel est plus grand?",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'lecture',
              question: 'Ahmed sur la route de Nouakchott à Boutilimit note les bornes kilométriques: Tenoueich(15), Teverit(25), Agba(33), Oued Naga(50), Idini(56), Aoudech(87), Meimoune(90), Naim(115), Tivikine(136), Boutilimit(154). Lis ces nombres et classe-les par ordre croissant.',
              answer: '15 < 25 < 33 < 50 < 56 < 87 < 90 < 115 < 136 < 154'
            },
            {
              type: 'decomposition',
              question: 'Pour les nombres 510831, 873292, 76280174, complète: 2 est le chiffre des unités du nombre ___, 3 est le chiffre des dizaines du nombre ___, 8 est le chiffre des centaines du nombre ___.',
              answer: '2 est le chiffre des unités de 873292, 3 est le chiffre des dizaines de 510831, 8 est le chiffre des centaines de 510831'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch1-s2',
          title: 'Addition et soustraction',
          description: 'Effectuer des additions et soustractions avec retenues sur les nombres entiers',
          concepts: ['Addition', 'Soustraction', 'Retenue', 'Somme', 'Différence', 'Méthode posée'],
          objectives: [
            'Effectuer des additions avec retenues',
            'Effectuer des soustractions avec retenues',
            'Utiliser la méthode posée correctement',
            'Vérifier ses calculs'
          ],
          content: {
            addition: {
              definition: 'Additionner c\'est calculer la somme de plusieurs nombres',
              symbole: '+ (plus)',
              methode_posee: 'Aligner les nombres par la droite, additionner colonne par colonne de droite à gauche, reporter les retenues',
              exemple: '1748 + 974 = 2722 (avec retenues: 8+4=12, écrire 2 reporter 1, etc.)'
            },
            soustraction: {
              definition: 'Soustraire c\'est calculer la différence entre deux nombres',
              symbole: '- (moins)',
              methode_posee: 'Aligner les nombres, soustraire colonne par colonne, emprunter si nécessaire',
              exemple: '384 - 156 = 228 (avec emprunt)'
            },
            verification: {
              addition: 'Vérifier: somme - un terme = autre terme',
              soustraction: 'Vérifier: différence + soustrait = diminuende'
            },
            mauritanianContext: [
              'Classement de compétition: Khadija(485s), Fatma(390s), Aissata(469s), Mariem(420s). Classe-les par ordre croissant.',
              'Calculer le prix total au marché de Nouakchott',
              'Calculer les distances entre villes',
              'Gérer les comptes commerciaux'
            ]
          },
          questions: [
            "Comment effectues-tu une addition avec retenues?",
            "Calcule: 1748 + 974",
            "Calcule: 384 - 156",
            "Vérifie tes calculs",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'addition',
              question: 'Calcule: 1748 + 974, 384 + 156, 7299 + 481',
              answer: '1748 + 974 = 2722, 384 + 156 = 540, 7299 + 481 = 7780'
            },
            {
              type: 'soustraction',
              question: 'Calcule: 384 - 156, 1748 - 974, 7299 - 481',
              answer: '384 - 156 = 228, 1748 - 974 = 774, 7299 - 481 = 6818'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch1-s3',
          title: 'Multiplication et division',
          description: 'Effectuer des multiplications et divisions complexes avec vérification',
          concepts: ['Multiplication', 'Division', 'Produit', 'Quotient', 'Reste', 'Propriétés', 'Vérification'],
          objectives: [
            'Effectuer des multiplications à plusieurs chiffres',
            'Effectuer des divisions avec reste',
            'Comprendre les propriétés (commutativité, distributivité)',
            'Vérifier les résultats'
          ],
          content: {
            multiplication: {
              definition: 'Multiplier c\'est calculer le produit de deux nombres',
              symbole: '× (fois)',
              methode_posee: 'Multiplier chaque chiffre du multiplicateur par le multiplicande, décaler les résultats',
              exemple: '384 × 73 = 28032 (384×3=1152, 384×70=26880, total=28032)',
              proprietes: 'Commutativité: a×b = b×a (384×73 = 73×384)'
            },
            division: {
              definition: 'Diviser c\'est trouver combien de fois un nombre est contenu dans un autre',
              symbole: '÷ (divisé par)',
              methode: 'Division posée avec reste',
              exemple: '68 ÷ 5 = 13 reste 3. Vérification: 5×13 + 3 = 68',
              terminologie: 'Dividende ÷ diviseur = quotient reste reste'
            },
            distributivite: {
              definition: 'a×(b+c) = a×b + a×c',
              exemple: '(9×13)+(9×27) = 117+243 = 360, et 9×(13+27) = 9×40 = 360'
            },
            verification: {
              multiplication: 'Vérifier: produit ÷ un facteur = autre facteur',
              division: 'Vérifier: diviseur × quotient + reste = dividende'
            },
            mauritanianContext: [
              'Ahmed a 27 mangues, il veut les partager équitablement entre ses trois enfants. Combien chacun?',
              'Calculer le prix de plusieurs objets identiques au marché',
              'Calculs commerciaux avec grands nombres',
              'Partage équitable de ressources'
            ]
          },
          questions: [
            "Calcule: 384 × 73",
            "Vérifie la commutativité: 384 × 73 = 73 × 384",
            "Calcule: 68 ÷ 5 avec reste",
            "Vérifie ta division",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'multiplication',
              question: 'Calcule: 384 × 73, 7299 × 481. Vérifie la commutativité.',
              answer: '384 × 73 = 28032, 7299 × 481 = 3510819. Vérification: 73 × 384 = 28032 ✓'
            },
            {
              type: 'division',
              question: 'Calcule: 68 ÷ 5, 127 ÷ 8. Donne le quotient et le reste. Vérifie.',
              answer: '68 ÷ 5 = 13 reste 3 (vérif: 5×13+3=68), 127 ÷ 8 = 15 reste 7 (vérif: 8×15+7=127)'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch1-s4',
          title: 'Problèmes de calcul',
          description: 'Résoudre des problèmes complexes avec plusieurs opérations',
          concepts: ['Problème', 'Résolution', 'Étapes multiples', 'Calcul', 'Vérification', 'Mots-clés'],
          objectives: [
            'Comprendre un problème complexe',
            'Identifier les opérations nécessaires',
            'Résoudre étape par étape',
            'Vérifier chaque étape'
          ],
          content: {
            etapes: {
              lecture: 'Lire attentivement le problème plusieurs fois',
              comprehension: 'Identifier ce qu\'on cherche et ce qu\'on sait',
              planification: 'Planifier les opérations nécessaires',
              resolution: 'Effectuer les calculs étape par étape',
              verification: 'Vérifier que la réponse est logique et cohérente'
            },
            mots_cles: {
              addition: 'total, somme, en tout, plus, ajouter, augmenter',
              soustraction: 'reste, différence, moins, enlever, retirer, diminuer',
              multiplication: 'fois, double, triple, plusieurs, chaque, groupes',
              division: 'partager, diviser, par, entre, distribuer, quotient'
            },
            problemes_multiples: {
              etape1: 'Identifier toutes les opérations nécessaires',
              etape2: 'Déterminer l\'ordre d\'exécution',
              etape3: 'Résoudre étape par étape',
              etape4: 'Vérifier chaque résultat'
            },
            exemples: {
              simple: 'Ahmed a 127 ouguiyas, il achète un livre à 58 ouguiyas. Combien lui reste-t-il?',
              complexe: 'Ahmed achète 2 livres à 275 MRU chacun et 3 stylos à 45 MRU chacun. Il paie avec 1000 MRU. Combien lui rend-on?',
              multi_etapes: 'Une classe de 30 élèves part en excursion. Chaque élève paie 150 MRU. Le transport coûte 2000 MRU. Combien reste-t-il pour le repas?'
            },
            mauritanianContext: [
              'Problèmes commerciaux au marché de Nouakchott',
              'Calculs de budget familial',
              'Situations de transport entre villes',
              'Commerce local avec calculs complexes'
            ]
          },
          questions: [
            "Quelles sont les étapes pour résoudre un problème complexe?",
            "Résous ce problème à étapes multiples",
            "Vérifie chaque étape de ta solution",
            "Donne un exemple de problème en Mauritanie",
            "Comment identifies-tu les opérations nécessaires?"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Ahmed achète 2 livres à 275 MRU chacun et 3 stylos à 45 MRU chacun. Il paie avec 1000 MRU. Combien lui rend-on?',
              answer: 'Étape 1: 2 × 275 = 550 MRU (livres), Étape 2: 3 × 45 = 135 MRU (stylos), Étape 3: 550 + 135 = 685 MRU (total), Étape 4: 1000 - 685 = 315 MRU (monnaie)'
            },
            {
              type: 'probleme_multi_etapes',
              question: 'Une classe de 30 élèves part en excursion. Chaque élève paie 150 MRU. Le transport coûte 2000 MRU. Combien reste-t-il pour le repas?',
              answer: 'Étape 1: 30 × 150 = 4500 MRU (total payé), Étape 2: 4500 - 2000 = 2500 MRU (reste pour le repas)'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 30
        },
        {
          id: 'ch1-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur les nombres entiers avec problèmes complexes',
          concepts: ['Application', 'Révision', 'Calcul complexe', 'Vérification', 'Problèmes multi-étapes'],
          objectives: [
            'Réviser toutes les opérations avec grands nombres',
            'Résoudre des problèmes complexes variés',
            'Vérifier systématiquement tous les calculs',
            'Appliquer dans des contextes réels mauritaniens'
          ],
          content: {
            revision: {
              operations: 'Addition, soustraction, multiplication, division avec retenues et emprunts',
              techniques: 'Méthode posée, vérification systématique, estimation',
              problemes: 'Problèmes de la vie quotidienne avec plusieurs étapes'
            },
            methodes: {
              calcul_ecrit: 'Toujours utiliser la méthode posée pour les calculs complexes',
              verification: 'Vérifier chaque opération: addition→soustraction inverse, multiplication→division inverse, division→multiplication + reste',
              estimation: 'Estimer l\'ordre de grandeur avant de calculer'
            },
            exemples: {
              addition: '1748 + 974 = 2722',
              multiplication: '384 × 73 = 28032',
              division: '68 ÷ 5 = 13 reste 3',
              probleme: 'Une famille mauritanienne achète 2 kg de riz à 275 MRU/kg, 1,5 L d\'huile à 180 MRU/L, et 3 pains à 25 MRU chacun. Ils paient avec 1000 MRU. Combien leur rend-on?'
            },
            mauritanianContext: [
              'Calculs commerciaux au marché de Nouakchott',
              'Problèmes de budget familial',
              'Calculs de transport entre villes',
              'Économie locale avec grands nombres'
            ]
          },
          questions: [
            "Révise toutes les opérations avec grands nombres",
            "Résous ce problème complexe à plusieurs étapes",
            "Vérifie systématiquement tous tes calculs",
            "Donne un exemple d'application en Mauritanie",
            "Quelle méthode utilises-tu pour vérifier une division?"
          ],
          exercises: [
            {
              type: 'revision',
              question: 'Calcule: 1748 + 974, 384 - 156, 384 × 73, 68 ÷ 5 (avec reste). Vérifie chaque résultat.',
              answer: '1748 + 974 = 2722 (vérif: 2722-974=1748), 384 - 156 = 228 (vérif: 228+156=384), 384 × 73 = 28032 (vérif: 28032÷73=384), 68 ÷ 5 = 13 reste 3 (vérif: 5×13+3=68)'
            },
            {
              type: 'probleme',
              question: 'Une famille mauritanienne achète 2 kg de riz à 275 MRU/kg, 1,5 L d\'huile à 180 MRU/L, et 3 pains à 25 MRU chacun. Ils paient avec 1000 MRU. Combien leur rend-on?',
              answer: 'Riz: 2 × 275 = 550 MRU, Huile: 1,5 × 180 = 270 MRU, Pain: 3 × 25 = 75 MRU, Total: 550 + 270 + 75 = 895 MRU, Monnaie: 1000 - 895 = 105 MRU'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch2',
      title: 'GÉOMÉTRIE DE BASE',
      sections: [
        {
          id: 'ch2-s1',
          title: 'Les figures géométriques simples',
          description: 'Reconnaître et dessiner les figures géométriques de base',
          concepts: ['Cercle', 'Carré', 'Rectangle', 'Triangle', 'Dessin'],
          objectives: [
            'Reconnaître les figures géométriques',
            'Dessiner des figures simples',
            'Nommer les figures correctement'
          ],
          content: {
            cercle: {
              definition: 'Figure ronde où tous les points sont à égale distance du centre',
              caracteristiques: 'Pas de côtés, forme ronde',
              exemples: 'Roue, pièce de monnaie, soleil'
            },
            carre: {
              definition: 'Figure avec 4 côtés égaux et 4 angles droits',
              caracteristiques: '4 côtés égaux, 4 angles droits',
              exemples: 'Fenêtre carrée, carreau de carrelage'
            },
            rectangle: {
              definition: 'Figure avec 4 côtés, 2 longs et 2 courts, 4 angles droits',
              caracteristiques: '4 côtés opposés égaux, 4 angles droits',
              exemples: 'Porte, livre, tableau'
            },
            triangle: {
              definition: 'Figure avec 3 côtés et 3 angles',
              caracteristiques: '3 côtés, 3 angles',
              exemples: 'Toit de maison, panneau de signalisation'
            },
            mauritanianContext: [
              'Formes des bâtiments traditionnels',
              'Motifs décoratifs mauritaniens',
              'Objets du quotidien',
              'Artisanat local'
            ]
          },
          questions: [
            "Qu'est-ce qu'un cercle?",
            "Dessine un carré",
            "Nomme cette figure géométrique",
            "Donne un exemple de rectangle en Mauritanie",
            "Combien de côtés a un triangle?"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie ces figures: cercle, carré, rectangle, triangle',
              answer: 'Cercle: rond, Carré: 4 côtés égaux, Rectangle: 4 côtés opposés égaux, Triangle: 3 côtés'
            },
            {
              type: 'dessin',
              question: 'Dessine un carré et un rectangle',
              answer: 'Carré: 4 côtés égaux, Rectangle: 2 côtés longs et 2 courts'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch2-s2',
          title: 'Mesure et longueur',
          description: 'Mesurer et comparer des longueurs avec précision',
          concepts: ['Longueur', 'Mesure', 'Centimètre', 'Mètre', 'Kilomètre', 'Conversion', 'Comparaison'],
          objectives: [
            'Mesurer des longueurs avec précision',
            'Convertir entre unités (cm, m, km)',
            'Comparer des longueurs de différentes unités'
          ],
          content: {
            unite: {
              centimètre: 'cm - unité pour mesurer de petites longueurs',
              mètre: 'm - unité pour mesurer de moyennes longueurs',
              kilometre: 'km - unité pour mesurer de grandes distances',
              relations: '1 mètre = 100 centimètres, 1 kilomètre = 1000 mètres'
            },
            mesure: {
              règle: 'Utiliser une règle graduée avec précision',
              technique: 'Placer le zéro au début, lire la graduation à la fin, estimer les millimètres',
              précision: 'Lire la mesure la plus proche (au millimètre près)'
            },
            conversion: {
              cm_vers_m: 'Diviser par 100 (ex: 250 cm = 2,5 m)',
              m_vers_km: 'Diviser par 1000 (ex: 5000 m = 5 km)',
              km_vers_m: 'Multiplier par 1000 (ex: 2,5 km = 2500 m)'
            },
            comparaison: {
              methode: 'Convertir toutes les mesures dans la même unité avant de comparer',
              exemple: 'Comparer 250 cm et 3 m: 250 cm = 2,5 m, donc 250 cm < 3 m'
            },
            mauritanianContext: [
              'Distances entre villes: Nouakchott-Boutilimit (154 km), Nouakchott-Atar (450 km)',
              'Longueur de la classe (8-10 m)',
              'Hauteur des bâtiments à Nouakchott',
              'Distances routières en Mauritanie'
            ]
          },
          questions: [
            "Convertis 250 cm en mètres",
            "Quelle distance est plus grande: 2,5 km ou 2500 m?",
            "Combien de mètres dans 3,5 km?",
            "Donne un exemple de mesure en Mauritanie",
            "Comment compares-tu des longueurs de différentes unités?"
          ],
          exercises: [
            {
              type: 'conversion',
              question: 'Convertis: 250 cm en m, 3,5 km en m, 4500 m en km',
              answer: '250 cm = 2,5 m, 3,5 km = 3500 m, 4500 m = 4,5 km'
            },
            {
              type: 'comparaison',
              question: 'Compare: 250 cm et 3 m, 2,5 km et 2500 m',
              answer: '250 cm = 2,5 m < 3 m, 2,5 km = 2500 m (égaux)'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch2-s3',
          title: 'Périmètre et aire',
          description: 'Calculer le périmètre et l\'aire avec applications réelles',
          concepts: ['Périmètre', 'Aire', 'Carré', 'Rectangle', 'Formules', 'Calcul', 'Unités'],
          objectives: [
            'Calculer le périmètre d\'un carré et d\'un rectangle',
            'Calculer l\'aire d\'un carré et d\'un rectangle',
            'Appliquer les formules dans des problèmes réels',
            'Utiliser les bonnes unités (cm, m, m²)'
          ],
          content: {
            perimetre: {
              definition: 'Le périmètre est la longueur du contour d\'une figure',
              carre: 'Périmètre = 4 × côté',
              rectangle: 'Périmètre = 2 × (longueur + largeur)',
              unite: 'Le périmètre s\'exprime en cm, m, km (unités de longueur)'
            },
            aire: {
              definition: 'L\'aire est la surface à l\'intérieur d\'une figure',
              carre: 'Aire = côté × côté',
              rectangle: 'Aire = longueur × largeur',
              unite: 'L\'aire s\'exprime en cm², m², km² (unités de surface)'
            },
            exemples: {
              carre_6cm: 'Carré de 6 cm: P = 4 × 6 = 24 cm, A = 6 × 6 = 36 cm²',
              rectangle_8x5: 'Rectangle 8 cm × 5 cm: P = 2 × (8 + 5) = 26 cm, A = 8 × 5 = 40 cm²',
              piece_4x3m: 'Pièce 4 m × 3 m: P = 2 × (4 + 3) = 14 m, A = 4 × 3 = 12 m²'
            },
            mauritanianContext: [
              'Calculer l\'aire d\'une chambre à Nouakchott (ex: 4 m × 3,5 m)',
              'Mesurer le périmètre d\'un jardin rectangulaire',
              'Calculer la surface d\'un tapis traditionnel',
              'Problèmes de construction de bâtiments'
            ]
          },
          questions: [
            "Quelle est la formule du périmètre d'un rectangle?",
            "Calcule le périmètre et l'aire d'un rectangle 8 m × 5 m",
            "Quelle est la différence entre périmètre et aire?",
            "Donne un exemple d'utilisation en Mauritanie",
            "Dans quelles unités s'exprime l'aire?"
          ],
          exercises: [
            {
              type: 'perimetre_aire',
              question: 'Calcule le périmètre et l\'aire d\'un rectangle 6,6 cm × 3,9 cm',
              answer: 'Périmètre = 2 × (6,6 + 3,9) = 21 cm, Aire = 6,6 × 3,9 = 25,74 cm²'
            },
            {
              type: 'probleme',
              question: 'Une chambre rectangulaire fait 4 m × 3,5 m. Calcule son périmètre et son aire.',
              answer: 'Périmètre = 2 × (4 + 3,5) = 15 m, Aire = 4 × 3,5 = 14 m²'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch2-s4',
          title: 'Symétrie et motifs',
          description: 'Construire des figures symétriques et créer des motifs complexes',
          concepts: ['Symétrie', 'Axe de symétrie', 'Motif', 'Répétition', 'Construction', 'Artisanat'],
          objectives: [
            'Construire des figures symétriques avec instruments',
            'Créer des motifs complexes répétitifs',
            'Utiliser la symétrie dans des applications artistiques',
            'Comprendre les motifs décoratifs traditionnels'
          ],
          content: {
            symetrie: {
              definition: 'La symétrie est quand une figure est identique de chaque côté d\'une ligne (axe de symétrie)',
              axe: 'La ligne qui divise la figure en deux parties identiques',
              construction: 'Méthode: 1) Tracer l\'axe, 2) Dessiner une moitié, 3) Reporter l\'autre moitié par symétrie',
              exemples: 'Visage, papillon, feuille, bâtiments traditionnels'
            },
            motif: {
              definition: 'Un motif est un dessin qui se répète régulièrement',
              creation: '1) Dessiner un élément de base, 2) Le répéter à intervalles réguliers, 3) Créer une frise ou un pavage',
              types: 'Frises linéaires, pavages, motifs circulaires',
              exemples: 'Frises architecturales, carrelage, tissus traditionnels, tapis mauritaniens'
            },
            techniques: {
              pliage: 'Plier une feuille le long de l\'axe et dessiner sur le pli',
              calque: 'Dessiner une moitié, utiliser un calque pour reporter l\'autre',
              compas: 'Utiliser le compas pour créer des symétries circulaires',
              repetition: 'Répéter un élément de base à intervalles réguliers'
            },
            mauritanianContext: [
              'Motifs décoratifs traditionnels mauritaniens',
              'Frises architecturales des mosquées',
              'Tissus et tapis avec motifs géométriques',
              'Artisanat mauritanien (bijoux, poterie)'
            ]
          },
          questions: [
            "Qu'est-ce qu'un axe de symétrie?",
            "Construis une figure symétrique avec instruments",
            "Crée un motif complexe pour un tapis mauritanien",
            "Donne un exemple de symétrie dans l'artisanat mauritanien",
            "Comment crées-tu un motif répétitif?"
          ],
          exercises: [
            {
              type: 'symetrie',
              question: 'Construis le milieu d\'un segment [AB] de 10 cm en utilisant la médiatrice. Vérifie que AM = MB = 5 cm.',
              answer: '1) Tracer [AB] de 10 cm, 2) Ouvrir compas à plus de 5 cm, 3) Tracer arcs de centres A et B, 4) Joindre intersections → médiatrice coupe [AB] en M, 5) Vérifier: AM = MB = 5 cm'
            },
            {
              type: 'motif',
              question: 'Crée un motif pour un tapis mauritanien en utilisant des formes géométriques et la symétrie',
              answer: 'Utiliser des triangles, carrés, losanges avec symétrie axiale et répétition pour créer un motif traditionnel'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 25
        },
        {
          id: 'ch2-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances en géométrie',
          concepts: ['Application', 'Révision', 'Géométrie', 'Calcul', 'Dessin'],
          objectives: [
            'Réviser toutes les notions géométriques',
            'Résoudre des problèmes de géométrie',
            'Créer des figures complexes'
          ],
          content: {
            revision: {
              figures: 'Cercle, carré, rectangle, triangle',
              mesures: 'Longueur, périmètre, aire',
              symetrie: 'Axe de symétrie, motifs'
            },
            problemes: {
              calcul: 'Calculer périmètres et aires',
              construction: 'Construire des figures',
              creation: 'Créer des motifs'
            },
            exemples: {
              complexe: 'Calculer l\'aire d\'une pièce rectangulaire',
              motif: 'Créer un motif pour un tapis',
              symetrie: 'Dessiner une figure symétrique'
            },
            mauritanianContext: [
              'Problèmes de construction',
              'Création artistique',
              'Calculs pratiques',
              'Artisanat traditionnel'
            ]
          },
          questions: [
            "Révise toutes les figures géométriques",
            "Résous ce problème de géométrie",
            "Crée un motif complexe",
            "Donne un exemple d'application en Mauritanie",
            "Quelles sont tes techniques préférées?"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Une chambre fait 4 m × 3 m. Calcule son périmètre et son aire',
              answer: 'Périmètre = 2 × (4 + 3) = 14 m, Aire = 4 × 3 = 12 m²'
            },
            {
              type: 'creation',
              question: 'Crée un motif pour un tapis mauritanien',
              answer: 'Utiliser des formes géométriques et la symétrie'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch3',
      title: 'MESURE ET GRANDEURS',
      sections: [
        {
          id: 'ch3-s1',
          title: 'Le temps et les heures',
          description: 'Apprendre à lire l\'heure et comprendre le temps',
          concepts: ['Heure', 'Minute', 'Seconde', 'Horloge', 'Temps'],
          objectives: [
            'Lire l\'heure sur une horloge',
            'Comprendre les unités de temps',
            'Utiliser le vocabulaire du temps'
          ],
          content: {
            unite_temps: {
              seconde: 's - unité de base du temps',
              minute: 'min - 1 minute = 60 secondes',
              heure: 'h - 1 heure = 60 minutes = 3600 secondes'
            },
            lecture_heure: {
              aiguille_heures: 'Aiguille courte qui indique les heures',
              aiguille_minutes: 'Aiguille longue qui indique les minutes',
              exemple: '3h30 = trois heures trente'
            },
            vocabulaire: {
              matin: 'De 6h à 12h',
              après_midi: 'De 12h à 18h',
              soir: 'De 18h à 24h',
              nuit: 'De 0h à 6h'
            },
            mauritanianContext: [
              'Heures de cours à l\'école',
              'Heures de prière',
              'Horaires des transports',
              'Rythme de vie quotidien'
            ]
          },
          questions: [
            "Quelle aiguille indique les heures?",
            "Lis l'heure sur cette horloge",
            "Qu'est-ce qu'une minute?",
            "À quelle heure commencent les cours?",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'lecture',
              question: 'Lis ces heures: 8h00, 14h30, 20h15',
              answer: 'Huit heures, quatorze heures trente, vingt heures quinze'
            },
            {
              type: 'conversion',
              question: 'Combien de minutes dans 2 heures?',
              answer: '2 heures = 2 × 60 = 120 minutes'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch3-s2',
          title: 'La monnaie et les prix',
          description: 'Comprendre la monnaie mauritanienne et les prix',
          concepts: ['Ouguiya', 'Prix', 'Achat', 'Vente', 'Calcul'],
          objectives: [
            'Reconnaître la monnaie mauritanienne',
            'Calculer des prix simples',
            'Comprendre les transactions'
          ],
          content: {
            monnaie: {
              ouguiya: 'Unité monétaire de la Mauritanie (MRU)',
              pieces: 'Pièces de 1, 5, 10, 20 ouguiyas',
              billets: 'Billets de 50, 100, 200, 500, 1000 ouguiyas'
            },
            calcul_prix: {
              addition: 'Prix total = prix 1 + prix 2 + prix 3...',
              soustraction: 'Monnaie = argent donné - prix à payer',
              exemple: 'Pain 20 MRU + Lait 30 MRU = 50 MRU'
            },
            transactions: {
              achat: 'Donner de l\'argent pour obtenir un produit',
              vente: 'Recevoir de l\'argent en échange d\'un produit',
              monnaie: 'Argent rendu si on donne plus que le prix'
            },
            mauritanianContext: [
              'Prix des produits au marché de Nouakchott',
              'Coût des transports en commun',
              'Prix des fournitures scolaires',
              'Économie locale'
            ]
          },
          questions: [
            "Quelle est la monnaie de la Mauritanie?",
            "Calcule le prix total: 15 MRU + 25 MRU",
            "Si tu donnes 100 MRU pour un achat de 75 MRU, combien on te rend?",
            "Donne un exemple d'achat en Mauritanie",
            "Qu'est-ce qu'une transaction?"
          ],
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule: 20 + 30 + 15 MRU',
              answer: '20 + 30 + 15 = 65 MRU'
            },
            {
              type: 'monnaie',
              question: 'Tu donnes 200 MRU pour un achat de 150 MRU. Combien on te rend?',
              answer: '200 - 150 = 50 MRU'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch3-s3',
          title: 'Masse et poids',
          description: 'Comprendre les notions de masse et de poids',
          concepts: ['Masse', 'Poids', 'Kilogramme', 'Gramme', 'Balance'],
          objectives: [
            'Comprendre la différence entre masse et poids',
            'Utiliser les unités de masse',
            'Mesurer avec une balance'
          ],
          content: {
            definition: {
              masse: 'La masse est la quantité de matière dans un objet',
              poids: 'Le poids est la force exercée par la gravité sur la masse',
              relation: 'Poids = masse × gravité (sur Terre)'
            },
            unite: {
              gramme: 'g - unité pour les petites masses',
              kilogramme: 'kg - unité pour les grandes masses',
              relation: '1 kilogramme = 1000 grammes'
            },
            mesure: {
              balance: 'Utiliser une balance pour mesurer',
              technique: 'Placer l\'objet sur un plateau, équilibrer avec des poids',
              lecture: 'Lire la masse sur l\'échelle'
            },
            mauritanianContext: [
              'Poids des aliments au marché',
              'Masse des élèves',
              'Poids des sacs d\'école',
              'Commerce de produits'
            ]
          },
          questions: [
            "Quelle est la différence entre masse et poids?",
            "Quelle est l'unité de masse?",
            "Comment mesures-tu la masse d'un objet?",
            "Combien de grammes dans 1 kg?",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'conversion',
              question: 'Convertis: 2 kg en grammes, 1500 g en kg',
              answer: '2 kg = 2000 g, 1500 g = 1,5 kg'
            },
            {
              type: 'mesure',
              question: 'Mesure la masse de ces objets avec une balance',
              answer: 'Utiliser une balance et noter les résultats'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch3-s4',
          title: 'Volume et capacité',
          description: 'Comprendre les notions de volume et de capacité',
          concepts: ['Volume', 'Capacité', 'Litre', 'Millilitre', 'Mesure'],
          objectives: [
            'Comprendre la différence entre volume et capacité',
            'Utiliser les unités de volume',
            'Mesurer des liquides'
          ],
          content: {
            definition: {
              volume: 'Le volume est l\'espace occupé par un objet',
              capacite: 'La capacité est la quantité de liquide qu\'un récipient peut contenir',
              relation: 'Pour les liquides, volume = capacité'
            },
            unite: {
              millilitre: 'ml - unité pour les petites quantités',
              litre: 'L - unité pour les grandes quantités',
              relation: '1 litre = 1000 millilitres'
            },
            mesure: {
              verre_gradué: 'Utiliser un verre gradué pour mesurer',
              technique: 'Verser le liquide et lire la graduation',
              precision: 'Lire la mesure la plus proche'
            },
            mauritanianContext: [
              'Quantité d\'eau dans un seau',
              'Volume de lait acheté',
              'Capacité d\'une bouteille',
              'Mesure de produits liquides'
            ]
          },
          questions: [
            "Quelle est la différence entre volume et capacité?",
            "Quelle est l'unité de volume?",
            "Comment mesures-tu un liquide?",
            "Combien de ml dans 1 L?",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'conversion',
              question: 'Convertis: 3 L en ml, 2500 ml en L',
              answer: '3 L = 3000 ml, 2500 ml = 2,5 L'
            },
            {
              type: 'mesure',
              question: 'Mesure le volume de ces liquides',
              answer: 'Utiliser un verre gradué et noter les résultats'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch3-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur les mesures',
          concepts: ['Application', 'Révision', 'Mesures', 'Calcul', 'Problèmes'],
          objectives: [
            'Réviser toutes les unités de mesure',
            'Résoudre des problèmes de mesures',
            'Utiliser les mesures dans la vie quotidienne'
          ],
          content: {
            revision: {
              temps: 'Heures, minutes, secondes',
              monnaie: 'Ouguiyas, calculs de prix',
              masse: 'Grammes, kilogrammes',
              volume: 'Millilitres, litres'
            },
            problemes: {
              conversion: 'Convertir entre unités',
              calcul: 'Calculer avec les mesures',
              pratique: 'Problèmes de la vie quotidienne'
            },
            exemples: {
              complexe: 'Calculer le coût total d\'achats',
              conversion: 'Convertir 2,5 kg en grammes',
              temps: 'Calculer la durée d\'une activité'
            },
            mauritanianContext: [
              'Problèmes de commerce',
              'Calculs de la vie quotidienne',
              'Mesures à l\'école',
              'Économie familiale'
            ]
          },
          questions: [
            "Révise toutes les unités de mesure",
            "Résous ce problème de mesures",
            "Convertis ces unités",
            "Donne un exemple d'application en Mauritanie",
            "Quelles mesures utilises-tu le plus?"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Un élève achète 2 kg de riz à 150 MRU/kg et 1,5 L d\'huile à 200 MRU/L. Combien paie-t-il?',
              answer: '2 × 150 + 1,5 × 200 = 300 + 300 = 600 MRU'
            },
            {
              type: 'conversion',
              question: 'Convertis: 3,5 kg en g, 2500 ml en L',
              answer: '3,5 kg = 3500 g, 2500 ml = 2,5 L'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch4',
      title: 'FRACTIONS SIMPLES',
      sections: [
        {
          id: 'ch4-s1',
          title: 'Introduction aux fractions',
          description: 'Comprendre ce que sont les fractions et comment les lire',
          concepts: ['Fraction', 'Numérateur', 'Dénominateur', 'Partie', 'Tout'],
          objectives: [
            'Comprendre la notion de fraction',
            'Lire et écrire des fractions simples',
            'Identifier le numérateur et le dénominateur'
          ],
          content: {
            definition: {
              fraction: 'Une fraction représente une partie d\'un tout divisé en parts égales',
              numerateur: 'Le nombre au-dessus de la barre (combien de parts on prend)',
              denominateur: 'Le nombre en-dessous de la barre (en combien de parts on divise)',
              exemple: '1/2 = une demi (1 part sur 2)'
            },
            lecture: {
              demi: '1/2 = un demi, une demi',
              tiers: '1/3 = un tiers',
              quart: '1/4 = un quart',
              cinquieme: '1/5 = un cinquième'
            },
            representation: {
              visuelle: 'Dessiner un cercle ou rectangle divisé en parts',
              concrete: 'Partager une pomme, un gâteau',
              numerique: 'Écrire avec des chiffres'
            },
            mauritanianContext: [
              'Partager un pain traditionnel',
              'Diviser une orange entre amis',
              'Fractions dans la cuisine',
              'Partage équitable'
            ]
          },
          questions: [
            "Qu'est-ce qu'une fraction?",
            "Lis la fraction 3/4",
            "Quel est le numérateur de 2/5?",
            "Donne un exemple de fraction en Mauritanie",
            "Comment représentes-tu 1/2 visuellement?"
          ],
          exercises: [
            {
              type: 'lecture',
              question: 'Lis ces fractions: 1/2, 2/3, 3/4, 1/5',
              answer: 'Un demi, deux tiers, trois quarts, un cinquième'
            },
            {
              type: 'identification',
              question: 'Dans 4/7, quel est le numérateur et le dénominateur?',
              answer: 'Numérateur: 4, Dénominateur: 7'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch4-s2',
          title: 'Fractions équivalentes',
          description: 'Comprendre que certaines fractions représentent la même quantité',
          concepts: ['Équivalent', 'Même valeur', 'Simplification', 'Multiplication', 'Division'],
          objectives: [
            'Reconnaître des fractions équivalentes',
            'Simplifier des fractions',
            'Trouver des fractions équivalentes'
          ],
          content: {
            definition: {
              equivalentes: 'Des fractions équivalentes représentent la même quantité',
              exemple: '1/2 = 2/4 = 3/6 (toutes représentent la moitié)',
              verification: 'On peut vérifier en multipliant en croix'
            },
            simplification: {
              methode: 'Diviser le numérateur et le dénominateur par le même nombre',
              exemple: '4/8 = 2/4 = 1/2 (diviser par 2, puis par 2)',
              regle: 'Toujours diviser par le plus grand nombre possible'
            },
            multiplication: {
              methode: 'Multiplier le numérateur et le dénominateur par le même nombre',
              exemple: '1/2 = 2/4 = 4/8 (multiplier par 2, puis par 2)',
              regle: 'Le nombre doit être le même pour les deux'
            },
            mauritanianContext: [
              'Partager équitablement des ressources',
              'Calculs de proportions',
              'Recettes de cuisine',
              'Mesures de construction'
            ]
          },
          questions: [
            "Que signifie 'fractions équivalentes'?",
            "Simplifie la fraction 6/12",
            "Trouve une fraction équivalente à 1/3",
            "Vérifie que 2/4 = 1/2",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'simplification',
              question: 'Simplifie: 4/8, 6/9, 10/15',
              answer: '4/8 = 1/2, 6/9 = 2/3, 10/15 = 2/3'
            },
            {
              type: 'equivalence',
              question: 'Trouve une fraction équivalente à 1/4',
              answer: '2/8, 3/12, 4/16, etc.'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s3',
          title: 'Comparaison de fractions',
          description: 'Apprendre à comparer des fractions et déterminer laquelle est plus grande',
          concepts: ['Comparaison', 'Plus grand', 'Plus petit', 'Égal', 'Dénominateur'],
          objectives: [
            'Comparer des fractions avec le même dénominateur',
            'Comparer des fractions avec le même numérateur',
            'Utiliser les symboles <, >, ='
          ],
          content: {
            meme_denominateur: {
              regle: 'Quand les dénominateurs sont identiques, comparer les numérateurs',
              exemple: '3/5 > 2/5 car 3 > 2',
              methode: 'Le plus grand numérateur = la plus grande fraction'
            },
            meme_numerateur: {
              regle: 'Quand les numérateurs sont identiques, comparer les dénominateurs',
              exemple: '1/3 > 1/4 car 3 < 4',
              methode: 'Le plus petit dénominateur = la plus grande fraction'
            },
            symboles: {
              plus_grand: '> (plus grand que)',
              plus_petit: '< (plus petit que)',
              egal: '= (égal à)'
            },
            exemples: {
              cas1: '2/7 < 5/7 (même dénominateur)',
              cas2: '1/2 > 1/3 (même numérateur)',
              cas3: '3/4 = 6/8 (fractions équivalentes)'
            },
            mauritanianContext: [
              'Comparer des parts de gâteau',
              'Évaluer des proportions',
              'Calculs de pourcentages',
              'Mesures de quantités'
            ]
          },
          questions: [
            "Quelle fraction est plus grande: 3/5 ou 4/5?",
            "Compare 1/2 et 1/3",
            "Utilise les symboles <, >, = pour comparer",
            "Explique ta méthode de comparaison",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'comparaison',
              question: 'Compare: 2/3 et 4/5, 1/4 et 1/6',
              answer: '2/3 < 4/5, 1/4 > 1/6'
            },
            {
              type: 'symboles',
              question: 'Écris avec les symboles: 3/7 ? 5/7, 1/2 ? 1/3',
              answer: '3/7 < 5/7, 1/2 > 1/3'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch4-s4',
          title: 'Addition et soustraction de fractions',
          description: 'Apprendre à additionner et soustraire des fractions simples',
          concepts: ['Addition', 'Soustraction', 'Dénominateur commun', 'Calcul', 'Réduction'],
          objectives: [
            'Additionner des fractions avec le même dénominateur',
            'Soustraire des fractions avec le même dénominateur',
            'Simplifier le résultat'
          ],
          content: {
            meme_denominateur: {
              addition: 'Additionner les numérateurs, garder le dénominateur',
              exemple_addition: '1/4 + 2/4 = 3/4',
              soustraction: 'Soustraire les numérateurs, garder le dénominateur',
              exemple_soustraction: '3/4 - 1/4 = 2/4 = 1/2'
            },
            regles: {
              addition: 'a/c + b/c = (a + b)/c',
              soustraction: 'a/c - b/c = (a - b)/c',
              simplification: 'Toujours simplifier le résultat si possible'
            },
            etapes: {
              etape1: 'Vérifier que les dénominateurs sont identiques',
              etape2: 'Effectuer l\'opération sur les numérateurs',
              etape3: 'Garder le dénominateur',
              etape4: 'Simplifier le résultat'
            },
            exemples: {
              addition: '2/5 + 1/5 = 3/5',
              soustraction: '4/6 - 2/6 = 2/6 = 1/3',
              simplification_result: '6/8 = 3/4'
            },
            mauritanianContext: [
              'Calculer des quantités de nourriture',
              'Mesurer des ingrédients',
              'Partager des ressources',
              'Calculs commerciaux'
            ]
          },
          questions: [
            "Calcule: 2/7 + 3/7",
            "Calcule: 5/8 - 2/8",
            "Simplifie le résultat de 4/6 + 2/6",
            "Explique la règle d'addition de fractions",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'addition',
              question: 'Calcule: 1/3 + 1/3, 2/5 + 2/5',
              answer: '1/3 + 1/3 = 2/3, 2/5 + 2/5 = 4/5'
            },
            {
              type: 'soustraction',
              question: 'Calcule: 4/7 - 1/7, 5/6 - 2/6',
              answer: '4/7 - 1/7 = 3/7, 5/6 - 2/6 = 3/6 = 1/2'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch4-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur les fractions',
          concepts: ['Application', 'Révision', 'Fractions', 'Calcul', 'Problèmes'],
          objectives: [
            'Réviser toutes les notions sur les fractions',
            'Résoudre des problèmes avec des fractions',
            'Utiliser les fractions dans la vie quotidienne'
          ],
          content: {
            revision: {
              definition: 'Fraction = partie d\'un tout divisé en parts égales',
              operations: 'Addition, soustraction, comparaison',
              simplification: 'Diviser par le même nombre',
              equivalence: 'Fractions qui représentent la même quantité'
            },
            problemes: {
              partage: 'Partager équitablement des objets',
              calcul: 'Calculer des quantités',
              comparaison: 'Comparer des proportions'
            },
            exemples: {
              partage: 'Partager 3 pommes entre 4 enfants',
              calcul: 'Calculer 2/3 + 1/3',
              comparaison: 'Comparer 1/2 et 2/3'
            },
            mauritanianContext: [
              'Partage de nourriture traditionnelle',
              'Calculs de recettes',
              'Mesures de construction',
              'Économie domestique'
            ]
          },
          questions: [
            "Révise toutes les notions sur les fractions",
            "Résous ce problème de partage",
            "Compare ces fractions",
            "Donne un exemple d'utilisation en Mauritanie",
            "Quelles sont tes techniques préférées?"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Ahmed a mangé 2/5 d\'un gâteau et Fatima 1/5. Quelle fraction du gâteau ont-ils mangée?',
              answer: '2/5 + 1/5 = 3/5 du gâteau'
            },
            {
              type: 'comparaison',
              question: 'Compare 3/4 et 2/3. Quelle est la plus grande?',
              answer: '3/4 > 2/3 (car 3/4 = 9/12 et 2/3 = 8/12)'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch5',
      title: 'DÉCIMAUX ET POURCENTAGES',
      sections: [
        {
          id: 'ch5-s1',
          title: 'Introduction aux décimaux',
          description: 'Comprendre ce que sont les nombres décimaux et comment les lire',
          concepts: ['Décimal', 'Virgule', 'Partie entière', 'Partie décimale', 'Lecture'],
          objectives: [
            'Comprendre la notion de nombre décimal',
            'Lire et écrire des nombres décimaux',
            'Identifier la partie entière et la partie décimale'
          ],
          content: {
            definition: {
              decimal: 'Un nombre décimal est un nombre qui a une virgule',
              partie_entiere: 'La partie avant la virgule (unités, dizaines, centaines...)',
              partie_decimale: 'La partie après la virgule (dixièmes, centièmes...)',
              exemple: '3,25 = 3 unités et 25 centièmes'
            },
            lecture: {
              virgule: 'La virgule sépare la partie entière de la partie décimale',
              dixiemes: 'Le premier chiffre après la virgule = dixièmes',
              centiemes: 'Le deuxième chiffre après la virgule = centièmes',
              exemple: '2,47 = deux virgule quarante-sept'
            },
            position: {
              unite: 'Avant la virgule',
              dixieme: 'Premier chiffre après la virgule',
              centieme: 'Deuxième chiffre après la virgule',
              millieme: 'Troisième chiffre après la virgule'
            },
            mauritanianContext: [
              'Prix des produits (ex: 125,50 MRU)',
              'Mesures de longueur (ex: 1,75 m)',
              'Poids des aliments (ex: 2,5 kg)',
              'Temperatures (ex: 25,3°C)'
            ]
          },
          questions: [
            "Qu'est-ce qu'un nombre décimal?",
            "Lis le nombre 4,68",
            "Dans 12,34, quelle est la partie entière?",
            "Donne un exemple d'utilisation en Mauritanie",
            "Comment lis-tu 0,5?"
          ],
          exercises: [
            {
              type: 'lecture',
              question: 'Lis ces nombres: 3,25, 0,8, 12,07',
              answer: 'Trois virgule vingt-cinq, zéro virgule huit, douze virgule zéro sept'
            },
            {
              type: 'identification',
              question: 'Dans 15,42, identifie la partie entière et la partie décimale',
              answer: 'Partie entière: 15, Partie décimale: 42'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch5-s2',
          title: 'Comparaison de décimaux',
          description: 'Apprendre à comparer des nombres décimaux',
          concepts: ['Comparaison', 'Plus grand', 'Plus petit', 'Égal', 'Position'],
          objectives: [
            'Comparer des nombres décimaux',
            'Utiliser les symboles <, >, =',
            'Ranger des décimaux par ordre croissant'
          ],
          content: {
            methode: {
              etape1: 'Comparer d\'abord la partie entière',
              etape2: 'Si égales, comparer les dixièmes',
              etape3: 'Si égaux, comparer les centièmes',
              etape4: 'Continuer jusqu\'à trouver une différence'
            },
            exemples: {
              cas1: '3,25 < 4,10 (car 3 < 4)',
              cas2: '2,47 > 2,35 (car 4 > 3 dans les dixièmes)',
              cas3: '1,234 < 1,235 (car 4 < 5 dans les millièmes)'
            },
            symboles: {
              plus_grand: '> (plus grand que)',
              plus_petit: '< (plus petit que)',
              egal: '= (égal à)'
            },
            ordre: {
              croissant: 'Du plus petit au plus grand',
              decroissant: 'Du plus grand au plus petit',
              exemple: '0,5 < 1,2 < 2,8 < 3,1'
            },
            mauritanianContext: [
              'Comparer des prix au marché',
              'Ranger des mesures',
              'Évaluer des quantités',
              'Classer des données'
            ]
          },
          questions: [
            "Quelle méthode utilises-tu pour comparer des décimaux?",
            "Compare 2,35 et 2,4",
            "Range par ordre croissant: 1,8; 1,08; 1,80",
            "Utilise les symboles <, >, =",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'comparaison',
              question: 'Compare: 3,25 et 3,52, 0,8 et 0,80',
              answer: '3,25 < 3,52, 0,8 = 0,80'
            },
            {
              type: 'ordre',
              question: 'Range par ordre croissant: 2,1; 1,9; 2,01; 1,99',
              answer: '1,9 < 1,99 < 2,01 < 2,1'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch5-s3',
          title: 'Addition et soustraction de décimaux',
          description: 'Apprendre à additionner et soustraire des nombres décimaux',
          concepts: ['Addition', 'Soustraction', 'Alignement', 'Virgule', 'Calcul'],
          objectives: [
            'Additionner des nombres décimaux',
            'Soustraire des nombres décimaux',
            'Alignement correct des virgules'
          ],
          content: {
            addition: {
              etape1: 'Alignement des virgules',
              etape2: 'Additionner colonne par colonne',
              etape3: 'Placer la virgule dans le résultat',
              exemple: '2,35 + 1,47 = 3,82'
            },
            soustraction: {
              etape1: 'Alignement des virgules',
              etape2: 'Soustraire colonne par colonne',
              etape3: 'Placer la virgule dans le résultat',
              exemple: '5,68 - 2,34 = 3,34'
            },
            technique: {
              alignement: 'Toujours aligner les virgules verticalement',
              zeros: 'Ajouter des zéros si nécessaire',
              verification: 'Vérifier le calcul'
            },
            exemples: {
              addition: '12,5 + 3,25 = 15,75',
              soustraction: '8,9 - 2,7 = 6,2',
              zeros: '3,2 + 1,45 = 3,20 + 1,45 = 4,65'
            },
            mauritanianContext: [
              'Calculer des prix totaux',
              'Calculer des différences de prix',
              'Mesures de longueur',
              'Calculs commerciaux'
            ]
          },
          questions: [
            "Comment alignes-tu les virgules?",
            "Calcule: 4,25 + 2,18",
            "Calcule: 7,5 - 3,2",
            "Pourquoi ajouter des zéros?",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'addition',
              question: 'Calcule: 3,45 + 2,15, 1,8 + 0,9',
              answer: '3,45 + 2,15 = 5,60, 1,8 + 0,9 = 2,7'
            },
            {
              type: 'soustraction',
              question: 'Calcule: 6,75 - 2,25, 4,5 - 1,8',
              answer: '6,75 - 2,25 = 4,50, 4,5 - 1,8 = 2,7'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch5-s4',
          title: 'Introduction aux pourcentages',
          description: 'Comprendre ce que sont les pourcentages et comment les calculer',
          concepts: ['Pourcentage', '%', 'Centième', 'Fraction', 'Calcul'],
          objectives: [
            'Comprendre la notion de pourcentage',
            'Calculer des pourcentages simples',
            'Convertir entre pourcentages et fractions'
          ],
          content: {
            definition: {
              pourcentage: 'Un pourcentage est une fraction sur 100',
              symbole: '% (pour cent)',
              exemple: '25% = 25/100 = 1/4',
              lecture: '25% = vingt-cinq pour cent'
            },
            conversion: {
              pourcentage_fraction: 'Diviser par 100',
              exemple_pourcentage: '50% = 50/100 = 1/2',
              fraction_pourcentage: 'Multiplier par 100',
              exemple_fraction: '3/4 = 0,75 = 75%'
            },
            calculs: {
              pourcentage_nombre: 'Pourcentage × nombre ÷ 100',
              exemple_pourcentage: '20% de 50 = 20 × 50 ÷ 100 = 10',
              nombre_pourcentage: 'Nombre ÷ total × 100',
              exemple_nombre: '15 sur 30 = 15 ÷ 30 × 100 = 50%'
            },
            exemples: {
              simple: '10% de 200 = 20',
              fraction: '1/4 = 25%',
              calcul_pourcentage: '30% de 80 = 24'
            },
            mauritanianContext: [
              'Remises dans les magasins',
              'Taux de réussite scolaire',
              'Pourcentages de population',
              'Calculs de taxes'
            ]
          },
          questions: [
            "Qu'est-ce qu'un pourcentage?",
            "Calcule 25% de 80",
            "Convertis 3/5 en pourcentage",
            "Lis 75% en français",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule: 20% de 150, 30% de 200',
              answer: '20% de 150 = 30, 30% de 200 = 60'
            },
            {
              type: 'conversion',
              question: 'Convertis: 1/2 en %, 60% en fraction',
              answer: '1/2 = 50%, 60% = 3/5'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch5-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur les décimaux et pourcentages',
          concepts: ['Application', 'Révision', 'Décimaux', 'Pourcentages', 'Problèmes'],
          objectives: [
            'Réviser toutes les notions sur les décimaux et pourcentages',
            'Résoudre des problèmes complexes',
            'Utiliser ces notions dans la vie quotidienne'
          ],
          content: {
            revision: {
              decimaux: 'Lecture, comparaison, addition, soustraction',
              pourcentages: 'Calcul, conversion, application',
              problemes: 'Problèmes de la vie quotidienne'
            },
            problemes: {
              prix: 'Calculer des prix avec remises',
              mesures: 'Calculer des longueurs, poids, volumes',
              statistiques: 'Calculer des pourcentages de réussite'
            },
            exemples: {
              complexe: 'Calculer 15% de remise sur 250 MRU',
              mesure: 'Calculer 2,5 m + 1,8 m',
              statistique: 'Calculer le pourcentage de réussite'
            },
            mauritanianContext: [
              'Calculs commerciaux',
              'Mesures de construction',
              'Statistiques scolaires',
              'Économie locale'
            ]
          },
          questions: [
            "Révise toutes les notions sur les décimaux et pourcentages",
            "Résous ce problème complexe",
            "Calcule des pourcentages de remise",
            "Donne un exemple d'utilisation en Mauritanie",
            "Quelles sont tes techniques préférées?"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Un commerçant offre 20% de remise sur un article de 150 MRU. Quel est le prix final?',
              answer: 'Remise: 20% de 150 = 30 MRU, Prix final: 150 - 30 = 120 MRU'
            },
            {
              type: 'calcul',
              question: 'Calcule: 3,75 + 2,25, 40% de 80',
              answer: '3,75 + 2,25 = 6,00, 40% de 80 = 32'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch6',
      title: 'PROBLÈMES ET LOGIQUE',
      sections: [
        {
          id: 'ch6-s1',
          title: 'Résolution de problèmes',
          description: 'Apprendre à résoudre des problèmes mathématiques étape par étape',
          concepts: ['Problème', 'Étapes', 'Compréhension', 'Résolution', 'Vérification'],
          objectives: [
            'Comprendre un problème mathématique',
            'Identifier les informations importantes',
            'Choisir la bonne méthode de résolution'
          ],
          content: {
            etapes: {
              lecture: 'Lire attentivement le problème',
              comprehension: 'Identifier ce qu\'on cherche et ce qu\'on sait',
              planification: 'Choisir la méthode de résolution',
              resolution: 'Effectuer les calculs',
              verification: 'Vérifier que la réponse est logique'
            },
            types: {
              addition: 'Problèmes d\'ajout, de total',
              soustraction: 'Problèmes de différence, de reste',
              multiplication: 'Problèmes de répétition, de groupes',
              division: 'Problèmes de partage, de distribution'
            },
            mots_cles: {
              addition: 'total, somme, en tout, plus, ajouter',
              soustraction: 'reste, différence, moins, enlever, retirer',
              multiplication: 'fois, double, triple, plusieurs, groupes',
              division: 'partager, diviser, par, entre, distribuer'
            },
            mauritanianContext: [
              'Problèmes de la vie quotidienne',
              'Calculs commerciaux',
              'Mesures et constructions',
              'Gestion familiale'
            ]
          },
          questions: [
            "Quelles sont les étapes pour résoudre un problème?",
            "Identifie les mots-clés dans ce problème",
            "Quelle opération utilises-tu?",
            "Vérifie ta réponse",
            "Donne un exemple de problème en Mauritanie"
          ],
          exercises: [
            {
              type: 'etapes',
              question: 'Résous ce problème en suivant les étapes: Ahmed a 25 ouguiyas, il achète un stylo à 8 ouguiyas. Combien lui reste-t-il?',
              answer: 'Étapes: 1) Lire, 2) Chercher: reste, 3) Opération: soustraction, 4) Calcul: 25 - 8 = 17, 5) Vérifier: 17 + 8 = 25 ✓'
            },
            {
              type: 'mots_cles',
              question: 'Identifie les mots-clés: "Fatima achète 3 cahiers à 15 MRU chacun. Quel est le total?"',
              answer: 'Mots-clés: "3 cahiers", "15 MRU chacun", "total" → Multiplication'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch6-s2',
          title: 'Problèmes à étapes multiples',
          description: 'Résoudre des problèmes qui nécessitent plusieurs opérations',
          concepts: ['Étapes multiples', 'Opérations combinées', 'Planification', 'Ordre', 'Vérification'],
          objectives: [
            'Identifier les étapes d\'un problème complexe',
            'Planifier l\'ordre des opérations',
            'Vérifier chaque étape'
          ],
          content: {
            identification: {
              etape1: 'Identifier toutes les opérations nécessaires',
              etape2: 'Déterminer l\'ordre d\'exécution',
              etape3: 'Résoudre étape par étape',
              etape4: 'Vérifier chaque résultat'
            },
            exemples: {
              cas1: 'Calculer le prix total puis la monnaie',
              cas2: 'Calculer des quantités puis des prix',
              cas3: 'Calculer des distances puis des temps'
            },
            methodes: {
              planification: 'Écrire le plan avant de calculer',
              verification: 'Vérifier chaque étape',
              presentation: 'Présenter clairement la solution'
            },
            mauritanianContext: [
              'Calculs de budget familial',
              'Problèmes de construction',
              'Calculs commerciaux complexes',
              'Planification de voyages'
            ]
          },
          questions: [
            "Comment identifies-tu les étapes d'un problème complexe?",
            "Résous ce problème à étapes multiples",
            "Vérifie chaque étape de ta solution",
            "Planifie l'ordre des opérations",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'etapes_multiples',
              question: 'Ahmed achète 2 livres à 25 MRU chacun et 3 stylos à 8 MRU chacun. Il paie avec 100 MRU. Combien lui rend-on?',
              answer: 'Étape 1: 2 × 25 = 50 MRU (livres), Étape 2: 3 × 8 = 24 MRU (stylos), Étape 3: 50 + 24 = 74 MRU (total), Étape 4: 100 - 74 = 26 MRU (monnaie)'
            },
            {
              type: 'planification',
              question: 'Planifie la résolution: "Une classe de 30 élèves part en excursion. Chaque élève paie 15 MRU. Le transport coûte 200 MRU. Combien reste-t-il pour le repas?"',
              answer: 'Plan: 1) Calculer le total payé par les élèves, 2) Soustraire le coût du transport, 3) Calculer le reste pour le repas'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch6-s3',
          title: 'Logique et raisonnement',
          description: 'Développer la logique mathématique et le raisonnement',
          concepts: ['Logique', 'Raisonnement', 'Déduction', 'Induction', 'Patterns'],
          objectives: [
            'Développer le raisonnement logique',
            'Identifier des patterns et des régularités',
            'Faire des déductions simples'
          ],
          content: {
            patterns: {
              definition: 'Un pattern est une régularité qui se répète',
              identification: 'Observer, comparer, généraliser',
              exemples: '2, 4, 6, 8... (nombres pairs)'
            },
            deduction: {
              definition: 'Tirer une conclusion à partir de faits connus',
              methode: 'Si A alors B, si B alors C, donc si A alors C',
              exemple: 'Tous les oiseaux ont des plumes. Un moineau est un oiseau. Donc un moineau a des plumes.'
            },
            induction: {
              definition: 'Généraliser à partir d\'observations',
              methode: 'Observer plusieurs cas, en déduire une règle',
              exemple: '2+2=4, 3+3=6, 4+4=8... donc n+n=2n'
            },
            exemples: {
              numerique: '1, 3, 5, 7... (nombres impairs)',
              geometrique: 'Carré, rectangle, carré, rectangle...',
              logique: 'Si il pleut, alors la rue est mouillée'
            },
            mauritanianContext: [
              'Patterns dans l\'artisanat traditionnel',
              'Régularités dans la nature',
              'Logique dans les jeux traditionnels',
              'Raisonnement dans la vie quotidienne'
            ]
          },
          questions: [
            "Qu'est-ce qu'un pattern?",
            "Identifie le pattern: 2, 4, 8, 16...",
            "Fais une déduction logique",
            "Généralise à partir d'observations",
            "Donne un exemple de logique en Mauritanie"
          ],
          exercises: [
            {
              type: 'pattern',
              question: 'Trouve le pattern et continue: 5, 10, 15, 20...',
              answer: 'Pattern: +5, Suite: 25, 30, 35...'
            },
            {
              type: 'deduction',
              question: 'Si tous les élèves portent un uniforme et que Fatima est une élève, que peux-tu déduire?',
              answer: 'Fatima porte un uniforme'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 30
        },
        {
          id: 'ch6-s4',
          title: 'Problèmes de logique',
          description: 'Résoudre des problèmes qui nécessitent un raisonnement logique',
          concepts: ['Problème logique', 'Déduction', 'Élimination', 'Hypothèse', 'Vérification'],
          objectives: [
            'Résoudre des problèmes de logique simples',
            'Utiliser l\'élimination et la déduction',
            'Vérifier ses conclusions'
          ],
          content: {
            types: {
              elimination: 'Éliminer les possibilités impossibles',
              deduction: 'Déduire à partir des informations',
              hypothese: 'Faire des hypothèses et les vérifier'
            },
            methodes: {
              etape1: 'Lire attentivement le problème',
              etape2: 'Identifier les informations importantes',
              etape3: 'Faire des déductions logiques',
              etape4: 'Vérifier la solution'
            },
            exemples: {
              age: 'Ahmed est plus âgé que Fatima. Fatima est plus âgée que Mariem. Qui est le plus âgé?',
              couleur: 'La voiture rouge est plus rapide que la bleue. La bleue est plus rapide que la verte. Quelle est la plus rapide?',
              nombre: 'Un nombre est plus grand que 5 et plus petit que 10. Il est pair. Quel est ce nombre?'
            },
            mauritanianContext: [
              'Problèmes de famille et d\'âge',
              'Logique dans les jeux traditionnels',
              'Raisonnement dans le commerce',
              'Déductions dans la vie quotidienne'
            ]
          },
          questions: [
            "Comment résous-tu un problème de logique?",
            "Utilise l'élimination pour résoudre ce problème",
            "Fais une déduction logique",
            "Vérifie ta conclusion",
            "Donne un exemple de problème logique en Mauritanie"
          ],
          exercises: [
            {
              type: 'elimination',
              question: 'Parmi ces nombres: 3, 7, 9, 12, lequel est divisible par 3?',
              answer: 'Éliminer 3 (trop petit), 7 (pas divisible), 9 (divisible par 3), 12 (divisible par 3). Réponse: 9 et 12'
            },
            {
              type: 'deduction',
              question: 'Si A > B et B > C, que peux-tu dire de A et C?',
              answer: 'A > C (transitivité)'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch6-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur la résolution de problèmes et la logique',
          concepts: ['Application', 'Révision', 'Problèmes', 'Logique', 'Raisonnement'],
          objectives: [
            'Réviser toutes les techniques de résolution',
            'Résoudre des problèmes variés',
            'Développer le raisonnement logique'
          ],
          content: {
            revision: {
              problemes: 'Étapes de résolution, types de problèmes',
              logique: 'Patterns, déduction, induction',
              verification: 'Vérification des solutions'
            },
            techniques: {
              planification: 'Planifier avant de résoudre',
              methodes: 'Utiliser différentes méthodes',
              verification: 'Toujours vérifier la solution'
            },
            exemples: {
              complexe: 'Problème à étapes multiples avec logique',
              pattern: 'Identifier et continuer des patterns',
              deduction: 'Faire des déductions logiques'
            },
            mauritanianContext: [
              'Problèmes de la vie quotidienne',
              'Logique dans l\'artisanat',
              'Raisonnement commercial',
              'Déductions familiales'
            ]
          },
          questions: [
            "Révise toutes les techniques de résolution",
            "Résous ce problème complexe",
            "Développe ton raisonnement logique",
            "Donne un exemple d'application en Mauritanie",
            "Quelles sont tes stratégies préférées?"
          ],
          exercises: [
            {
              type: 'probleme_complexe',
              question: 'Une famille de 4 personnes part en voyage. Chaque personne paie 50 MRU pour le transport. Ils dépensent 120 MRU pour le repas. Combien leur reste-t-il si ils avaient 300 MRU au départ?',
              answer: 'Transport: 4 × 50 = 200 MRU, Dépenses totales: 200 + 120 = 320 MRU, Reste: 300 - 320 = -20 MRU (ils n\'ont pas assez)'
            },
            {
              type: 'logique',
              question: 'Trouve le pattern et continue: 1, 4, 9, 16...',
              answer: 'Pattern: carrés des nombres naturels (1², 2², 3², 4²...), Suite: 25, 36, 49...'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch7',
      title: 'STATISTIQUES ET GRAPHIQUES',
      sections: [
        {
          id: 'ch7-s1',
          title: 'Introduction aux statistiques',
          description: 'Comprendre ce que sont les statistiques et comment les utiliser',
          concepts: ['Statistique', 'Données', 'Information', 'Collection', 'Analyse'],
          objectives: [
            'Comprendre la notion de statistique',
            'Collecter des données simples',
            'Organiser des informations'
          ],
          content: {
            definition: {
              statistique: 'Les statistiques sont des informations numériques sur un sujet',
              donnees: 'Les données sont les informations collectées',
              exemple: 'Âge des élèves, notes d\'un examen, température'
            },
            types: {
              quantitatives: 'Données numériques (âge, taille, poids)',
              qualitatives: 'Données descriptives (couleur, goût, préférence)',
              exemples: 'Nombre d\'élèves par classe, couleurs préférées'
            },
            collection: {
              observation: 'Regarder et noter ce qui se passe',
              comptage: 'Compter les occurrences',
              mesure: 'Mesurer des quantités',
              enquete: 'Poser des questions'
            },
            mauritanianContext: [
              'Nombre d\'élèves par classe',
              'Temperatures quotidiennes à Nouakchott',
              'Prix des produits au marché',
              'Préférences alimentaires'
            ]
          },
          questions: [
            "Qu'est-ce qu'une statistique?",
            "Donne un exemple de données quantitatives",
            "Comment collectes-tu des données?",
            "Donne un exemple de statistique en Mauritanie",
            "Quelle est la différence entre données quantitatives et qualitatives?"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie le type de données: âge des élèves, couleur des yeux, température',
              answer: 'Âge: quantitative, Couleur: qualitative, Température: quantitative'
            },
            {
              type: 'collection',
              question: 'Comment collecterais-tu des données sur les sports préférés?',
              answer: 'Faire une enquête en posant la question à chaque élève'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch7-s2',
          title: 'Organisation des données',
          description: 'Apprendre à organiser et présenter les données collectées',
          concepts: ['Organisation', 'Tableau', 'Liste', 'Tri', 'Classement'],
          objectives: [
            'Organiser des données dans un tableau',
            'Trier des données par ordre',
            'Présenter clairement les informations'
          ],
          content: {
            tableau: {
              definition: 'Un tableau organise les données en lignes et colonnes',
              structure: 'Titre, en-têtes, données',
              exemple: 'Tableau des notes d\'examen'
            },
            tri: {
              croissant: 'Du plus petit au plus grand',
              decroissant: 'Du plus grand au plus petit',
              alphabetique: 'Par ordre alphabétique'
            },
            presentation: {
              claire: 'Écrire lisiblement',
              complete: 'Inclure toutes les données',
              organisee: 'Utiliser des colonnes alignées'
            },
            exemples: {
              notes: 'Notes: 12, 15, 8, 14, 16 → Tri: 8, 12, 14, 15, 16',
              ages: 'Âges: 12, 14, 13, 15, 12 → Tri: 12, 12, 13, 14, 15'
            },
            mauritanianContext: [
              'Organiser les notes de classe',
              'Classer les températures par mois',
              'Trier les prix des produits',
              'Organiser les résultats d\'élection'
            ]
          },
          questions: [
            "Comment organises-tu des données dans un tableau?",
            "Trie ces nombres par ordre croissant: 15, 8, 22, 12",
            "Quelle est la structure d'un bon tableau?",
            "Donne un exemple d'organisation en Mauritanie",
            "Pourquoi est-il important de trier les données?"
          ],
          exercises: [
            {
              type: 'tri',
              question: 'Trie par ordre croissant: 25, 18, 32, 15, 28',
              answer: '15, 18, 25, 28, 32'
            },
            {
              type: 'tableau',
              question: 'Crée un tableau pour organiser ces données: Ahmed-15 ans, Fatima-14 ans, Mariem-16 ans',
              answer: 'Tableau avec colonnes: Nom, Âge'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch7-s3',
          title: 'Graphiques simples',
          description: 'Apprendre à créer et lire des graphiques simples',
          concepts: ['Graphique', 'Barres', 'Ligne', 'Lecture', 'Interprétation'],
          objectives: [
            'Créer des graphiques en barres simples',
            'Lire et interpréter des graphiques',
            'Comparer des données visuellement'
          ],
          content: {
            types: {
              barres: 'Graphique avec des barres de différentes hauteurs',
              ligne: 'Graphique avec une ligne qui monte et descend',
              circulaire: 'Graphique en forme de cercle divisé en parts'
            },
            creation: {
              axes: 'Axe horizontal (X) et vertical (Y)',
              echelle: 'Choisir une échelle appropriée',
              barres: 'Dessiner des barres de la bonne hauteur',
              titre: 'Ajouter un titre explicatif'
            },
            lecture: {
              hauteur: 'La hauteur de la barre indique la valeur',
              comparaison: 'Comparer les hauteurs des barres',
              tendance: 'Voir si les valeurs augmentent ou diminuent'
            },
            exemples: {
              notes: 'Graphique des notes par matière',
              temperature: 'Graphique de la température par mois',
              population: 'Graphique de la population par ville'
            },
            mauritanianContext: [
              'Graphique des notes de classe',
              'Évolution des prix au marché',
              'Températures à Nouakchott',
              'Population des régions'
            ]
          },
          questions: [
            "Quels sont les types de graphiques?",
            "Comment crées-tu un graphique en barres?",
            "Que représente la hauteur d'une barre?",
            "Donne un exemple de graphique en Mauritanie",
            "Comment compares-tu des données sur un graphique?"
          ],
          exercises: [
            {
              type: 'creation',
              question: 'Crée un graphique en barres pour: Math-15, Français-12, Sciences-18',
              answer: 'Dessiner 3 barres de hauteurs 15, 12, 18'
            },
            {
              type: 'lecture',
              question: 'Sur ce graphique, quelle matière a la note la plus élevée?',
              answer: 'Lire la barre la plus haute'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch7-s4',
          title: 'Calculs statistiques simples',
          description: 'Apprendre à calculer des statistiques de base',
          concepts: ['Moyenne', 'Maximum', 'Minimum', 'Étendue', 'Calcul'],
          objectives: [
            'Calculer la moyenne simple',
            'Trouver le maximum et le minimum',
            'Calculer l\'étendue'
          ],
          content: {
            moyenne: {
              definition: 'La moyenne est la somme divisée par le nombre de valeurs',
              calcul: 'Moyenne = (valeur1 + valeur2 + ...) ÷ nombre de valeurs',
              exemple: 'Notes: 12, 15, 18 → Moyenne = (12 + 15 + 18) ÷ 3 = 15'
            },
            maximum: {
              definition: 'La valeur la plus grande',
              methode: 'Comparer toutes les valeurs',
              exemple: 'Dans 8, 15, 12, 20 → Maximum = 20'
            },
            minimum: {
              definition: 'La valeur la plus petite',
              methode: 'Comparer toutes les valeurs',
              exemple: 'Dans 8, 15, 12, 20 → Minimum = 8'
            },
            etendue: {
              definition: 'L\'étendue est la différence entre le maximum et le minimum',
              calcul: 'Étendue = Maximum - Minimum',
              exemple: 'Maximum: 20, Minimum: 8 → Étendue = 20 - 8 = 12'
            },
            mauritanianContext: [
              'Moyenne des notes de classe',
              'Température maximale et minimale',
              'Prix le plus cher et le moins cher',
              'Étendue des âges des élèves'
            ]
          },
          questions: [
            "Comment calcules-tu la moyenne?",
            "Calcule la moyenne de: 10, 15, 20",
            "Trouve le maximum et le minimum de: 8, 12, 15, 9",
            "Calcule l'étendue de ces données",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'moyenne',
              question: 'Calcule la moyenne: 12, 16, 14, 18',
              answer: 'Moyenne = (12 + 16 + 14 + 18) ÷ 4 = 60 ÷ 4 = 15'
            },
            {
              type: 'etendue',
              question: 'Calcule l\'étendue: 5, 12, 8, 15, 10',
              answer: 'Maximum: 15, Minimum: 5, Étendue: 15 - 5 = 10'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch7-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur les statistiques',
          concepts: ['Application', 'Révision', 'Statistiques', 'Graphiques', 'Calculs'],
          objectives: [
            'Réviser toutes les notions statistiques',
            'Résoudre des problèmes de statistiques',
            'Créer des graphiques complexes'
          ],
          content: {
            revision: {
              collection: 'Collecter et organiser des données',
              graphiques: 'Créer et lire des graphiques',
              calculs: 'Moyenne, maximum, minimum, étendue'
            },
            problemes: {
              analyse: 'Analyser des données réelles',
              comparaison: 'Comparer des groupes de données',
              prediction: 'Faire des prédictions simples'
            },
            exemples: {
              complexe: 'Analyser les notes de toute la classe',
              comparaison: 'Comparer les performances de deux classes',
              graphique: 'Créer un graphique avec plusieurs séries'
            },
            mauritanianContext: [
              'Analyse des résultats scolaires',
              'Étude des prix du marché',
              'Statistiques climatiques',
              'Données démographiques'
            ]
          },
          questions: [
            "Révise toutes les notions statistiques",
            "Analyse ces données complètes",
            "Crée un graphique complexe",
            "Donne un exemple d'application en Mauritanie",
            "Quelles sont tes techniques préférées?"
          ],
          exercises: [
            {
              type: 'analyse',
              question: 'Analyse les notes de 5 élèves: 12, 15, 18, 14, 16. Calcule moyenne, max, min, étendue',
              answer: 'Moyenne: 15, Max: 18, Min: 12, Étendue: 6'
            },
            {
              type: 'graphique',
              question: 'Crée un graphique comparant les notes de Math et Français',
              answer: 'Graphique en barres avec deux séries de données'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch8',
      title: 'PROBABILITÉS SIMPLES',
      sections: [
        {
          id: 'ch8-s1',
          title: 'Introduction aux probabilités',
          description: 'Comprendre ce que sont les probabilités et les chances',
          concepts: ['Probabilité', 'Chance', 'Possible', 'Impossible', 'Certain'],
          objectives: [
            'Comprendre la notion de probabilité',
            'Identifier les événements possibles, impossibles et certains',
            'Utiliser le vocabulaire des probabilités'
          ],
          content: {
            definition: {
              probabilite: 'La probabilité mesure la chance qu\'un événement se produise',
              chance: 'Plus la chance est grande, plus la probabilité est élevée',
              exemple: 'Chance de tirer un 6 avec un dé'
            },
            types: {
              certain: 'Événement qui va toujours se produire (probabilité = 1)',
              impossible: 'Événement qui ne peut jamais se produire (probabilité = 0)',
              possible: 'Événement qui peut se produire ou non (probabilité entre 0 et 1)'
            },
            vocabulaire: {
              probable: 'Qui a de bonnes chances de se produire',
              improbable: 'Qui a peu de chances de se produire',
              egal: 'Qui a les mêmes chances de se produire'
            },
            exemples: {
              certain: 'Le soleil se lèvera demain',
              impossible: 'Lancer un 7 avec un dé normal',
              possible: 'Tirer pile ou face avec une pièce'
            },
            mauritanianContext: [
              'Chance de pluie à Nouakchott',
              'Probabilité de réussir un examen',
              'Chances de gagner à un jeu traditionnel',
              'Possibilité d\'avoir des invités'
            ]
          },
          questions: [
            "Qu'est-ce qu'une probabilité?",
            "Donne un exemple d'événement certain",
            "Donne un exemple d'événement impossible",
            "Donne un exemple d'événement possible",
            "Donne un exemple de probabilité en Mauritanie"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces événements: certain, impossible, possible',
              answer: 'Le soleil brille (possible), 2+2=4 (certain), Lancer 7 avec un dé (impossible)'
            },
            {
              type: 'exemples',
              question: 'Donne un exemple d\'événement probable et improbable',
              answer: 'Probable: Il va pleuvoir en saison des pluies, Improbable: Il va neiger à Nouakchott'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch8-s2',
          title: 'Probabilités avec des objets',
          description: 'Calculer des probabilités avec des objets concrets',
          concepts: ['Objet', 'Tirage', 'Favorables', 'Total', 'Calcul'],
          objectives: [
            'Calculer des probabilités simples',
            'Utiliser la formule: probabilité = cas favorables ÷ cas total',
            'Appliquer avec des objets concrets'
          ],
          content: {
            formule: {
              definition: 'Probabilité = Nombre de cas favorables ÷ Nombre de cas total',
              exemple: 'Tirer un 6 avec un dé: 1 cas favorable ÷ 6 cas total = 1/6',
              simplification: 'Toujours simplifier la fraction si possible'
            },
            exemples: {
              de: 'Tirer un 6: 1/6, Tirer un nombre pair: 3/6 = 1/2',
              piece: 'Tirer pile: 1/2, Tirer face: 1/2',
              boules: 'Tirer une boule rouge dans un sac avec 3 rouges et 2 bleues: 3/5'
            },
            calculs: {
              etape1: 'Compter les cas favorables',
              etape2: 'Compter les cas total',
              etape3: 'Diviser: favorables ÷ total',
              etape4: 'Simplifier la fraction'
            },
            mauritanianContext: [
              'Chance de tirer une certaine couleur',
              'Probabilité de choisir un certain fruit',
              'Chances dans les jeux traditionnels',
              'Probabilité de sélection'
            ]
          },
          questions: [
            "Quelle est la formule de probabilité?",
            "Calcule la probabilité de tirer un 3 avec un dé",
            "Calcule la probabilité de tirer pile avec une pièce",
            "Explique les étapes de calcul",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule la probabilité de tirer un nombre pair avec un dé',
              answer: 'Cas favorables: 2, 4, 6 (3 cas), Total: 6, Probabilité: 3/6 = 1/2'
            },
            {
              type: 'boules',
              question: 'Dans un sac avec 4 boules rouges et 6 boules bleues, calcule la probabilité de tirer une boule rouge',
              answer: 'Cas favorables: 4, Total: 10, Probabilité: 4/10 = 2/5'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch8-s3',
          title: 'Probabilités et fractions',
          description: 'Comprendre la relation entre probabilités et fractions',
          concepts: ['Fraction', 'Probabilité', 'Équivalent', 'Simplification', 'Conversion'],
          objectives: [
            'Exprimer les probabilités en fractions',
            'Simplifier les fractions de probabilité',
            'Convertir entre fractions et probabilités'
          ],
          content: {
            relation: {
              probabilite_fraction: 'Toute probabilité peut s\'exprimer comme une fraction',
              exemple: 'Probabilité 1/2 = 50% de chance',
              simplification: 'Simplifier les fractions pour faciliter la compréhension'
            },
            exemples: {
              simple: '1/2 = 50% de chance',
              tiers: '1/3 ≈ 33% de chance',
              quart: '1/4 = 25% de chance',
              cinquieme: '1/5 = 20% de chance'
            },
            comparaison: {
              plus_grande: 'Plus la fraction est grande, plus la probabilité est élevée',
              plus_petite: 'Plus la fraction est petite, plus la probabilité est faible',
              egales: 'Fractions égales = probabilités égales'
            },
            conversion: {
              fraction_pourcentage: 'Multiplier par 100',
              pourcentage_fraction: 'Diviser par 100',
              exemple: '1/4 = 0,25 = 25%'
            },
            mauritanianContext: [
              'Chances de réussite en pourcentage',
              'Probabilités de pluie',
              'Chances de gagner des jeux',
              'Probabilités de réussite scolaire'
            ]
          },
          questions: [
            "Comment exprimes-tu une probabilité en fraction?",
            "Simplifie la probabilité 6/12",
            "Compare les probabilités 1/3 et 1/4",
            "Convertis 1/5 en pourcentage",
            "Donne un exemple d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'simplification',
              question: 'Simplifie ces probabilités: 4/8, 6/9, 10/15',
              answer: '4/8 = 1/2, 6/9 = 2/3, 10/15 = 2/3'
            },
            {
              type: 'conversion',
              question: 'Convertis en pourcentage: 1/4, 3/5, 1/10',
              answer: '1/4 = 25%, 3/5 = 60%, 1/10 = 10%'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 30
        },
        {
          id: 'ch8-s4',
          title: 'Expériences et résultats',
          description: 'Conduire des expériences simples et analyser les résultats',
          concepts: ['Expérience', 'Résultat', 'Fréquence', 'Observation', 'Analyse'],
          objectives: [
            'Conduire des expériences de probabilité',
            'Observer et noter les résultats',
            'Comparer les résultats avec les probabilités théoriques'
          ],
          content: {
            experience: {
              definition: 'Une expérience consiste à répéter un événement plusieurs fois',
              methode: 'Noter chaque résultat, compter les occurrences',
              exemple: 'Lancer une pièce 20 fois et noter pile/face'
            },
            frequence: {
              definition: 'La fréquence est le nombre de fois qu\'un résultat se produit',
              calcul: 'Fréquence = Nombre d\'occurrences ÷ Nombre total d\'essais',
              exemple: 'Pile 12 fois sur 20 lancers = 12/20 = 3/5'
            },
            observation: {
              methode: 'Répéter l\'expérience plusieurs fois',
              notation: 'Noter chaque résultat dans un tableau',
              analyse: 'Comparer avec la probabilité théorique'
            },
            exemples: {
              piece: 'Lancer une pièce 50 fois',
              de: 'Lancer un dé 30 fois',
              boules: 'Tirer des boules 20 fois'
            },
            mauritanianContext: [
              'Expériences avec des jeux traditionnels',
              'Tests de probabilité avec des objets locaux',
              'Observations météorologiques',
              'Expériences de sélection'
            ]
          },
          questions: [
            "Comment conduis-tu une expérience de probabilité?",
            "Qu'est-ce que la fréquence?",
            "Compare tes résultats avec la probabilité théorique",
            "Pourquoi répéter l'expérience plusieurs fois?",
            "Donne un exemple d'expérience en Mauritanie"
          ],
          exercises: [
            {
              type: 'experience',
              question: 'Lance une pièce 10 fois et note les résultats. Calcule la fréquence de pile',
              answer: 'Noter les résultats et calculer: nombre de pile ÷ 10'
            },
            {
              type: 'analyse',
              question: 'Si tu obtiens pile 6 fois sur 10, quelle est la fréquence?',
              answer: 'Fréquence = 6/10 = 3/5 = 60%'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch8-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur les probabilités',
          concepts: ['Application', 'Révision', 'Probabilités', 'Calculs', 'Expériences'],
          objectives: [
            'Réviser toutes les notions de probabilité',
            'Résoudre des problèmes de probabilité',
            'Conduire des expériences complexes'
          ],
          content: {
            revision: {
              definition: 'Probabilité = chance qu\'un événement se produise',
              calculs: 'Formule, fractions, pourcentages',
              experiences: 'Conduire et analyser des expériences'
            },
            problemes: {
              calcul: 'Calculer des probabilités complexes',
              comparaison: 'Comparer des probabilités',
              experience: 'Conduire des expériences et analyser'
            },
            exemples: {
              complexe: 'Probabilités avec plusieurs objets',
              comparaison: 'Comparer les chances de différents événements',
              experience: 'Expérience avec analyse statistique'
            },
            mauritanianContext: [
              'Probabilités dans les jeux traditionnels',
              'Chances de réussite scolaire',
              'Probabilités météorologiques',
              'Chances de réussite commerciale'
            ]
          },
          questions: [
            "Révise toutes les notions de probabilité",
            "Résous ce problème complexe",
            "Conduis une expérience et analyse les résultats",
            "Donne un exemple d'application en Mauritanie",
            "Quelles sont tes techniques préférées?"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Dans un sac avec 3 boules rouges, 2 bleues et 5 vertes, calcule la probabilité de tirer une boule verte',
              answer: 'Cas favorables: 5, Total: 10, Probabilité: 5/10 = 1/2'
            },
            {
              type: 'experience',
              question: 'Conduis une expérience: lance un dé 20 fois et analyse les résultats',
              answer: 'Noter les résultats, calculer les fréquences, comparer avec 1/6'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch9',
      title: 'RÉVISION GÉNÉRALE',
      sections: [
        {
          id: 'ch9-s1',
          title: 'Révision des nombres',
          description: 'Réviser toutes les notions sur les nombres entiers, fractions et décimaux',
          concepts: ['Révision', 'Nombres entiers', 'Fractions', 'Décimaux', 'Opérations'],
          objectives: [
            'Réviser les opérations sur les nombres entiers',
            'Réviser les fractions et décimaux',
            'Consolider les connaissances numériques'
          ],
          content: {
            nombres_entiers: {
              operations: 'Addition, soustraction, multiplication, division',
              problemes: 'Résolution de problèmes avec les entiers',
              techniques: 'Calcul mental et calcul écrit'
            },
            fractions: {
              definition: 'Partie d\'un tout divisé en parts égales',
              operations: 'Addition, soustraction, comparaison',
              simplification: 'Fractions équivalentes'
            },
            decimaux: {
              lecture: 'Lecture et écriture des décimaux',
              operations: 'Addition et soustraction',
              comparaison: 'Comparaison et ordre'
            },
            pourcentages: {
              calcul: 'Calcul de pourcentages',
              conversion: 'Conversion fraction-pourcentage',
              application: 'Problèmes de pourcentages'
            },
            mauritanianContext: [
              'Calculs commerciaux avec ouguiyas',
              'Fractions dans la cuisine traditionnelle',
              'Décimaux pour les prix et mesures',
              'Pourcentages de réussite scolaire'
            ]
          },
          questions: [
            "Révise toutes les opérations sur les nombres entiers",
            "Explique les fractions et leurs opérations",
            "Révise les décimaux et pourcentages",
            "Résous des problèmes combinant tous ces concepts",
            "Donne des exemples d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'entiers',
              question: 'Calcule: 25 + 37, 84 - 29, 6 × 8, 72 ÷ 9',
              answer: '25 + 37 = 62, 84 - 29 = 55, 6 × 8 = 48, 72 ÷ 9 = 8'
            },
            {
              type: 'fractions',
              question: 'Calcule: 2/5 + 1/5, 3/4 - 1/4, Compare 1/2 et 2/3',
              answer: '2/5 + 1/5 = 3/5, 3/4 - 1/4 = 2/4 = 1/2, 1/2 < 2/3'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch9-s2',
          title: 'Révision de géométrie',
          description: 'Réviser toutes les notions géométriques apprises',
          concepts: ['Révision', 'Figures', 'Mesures', 'Périmètre', 'Aire'],
          objectives: [
            'Réviser les figures géométriques',
            'Réviser les calculs de périmètre et d\'aire',
            'Consolider les connaissances géométriques'
          ],
          content: {
            figures: {
              cercles: 'Définition, caractéristiques, exemples',
              carres: 'Propriétés, calculs, applications',
              rectangles: 'Propriétés, calculs, applications',
              triangles: 'Types, propriétés, calculs'
            },
            mesures: {
              longueur: 'Centimètres, mètres, conversion',
              perimetre: 'Formules pour carré et rectangle',
              aire: 'Formules pour carré et rectangle'
            },
            symetrie: {
              definition: 'Axe de symétrie, figures symétriques',
              motifs: 'Création de motifs répétitifs',
              techniques: 'Méthodes de construction'
            },
            applications: {
              construction: 'Problèmes de construction',
              decoration: 'Motifs et ornements',
              calculs: 'Calculs pratiques'
            },
            mauritanianContext: [
              'Formes des bâtiments traditionnels',
              'Motifs décoratifs mauritaniens',
              'Calculs de construction',
              'Artisanat et géométrie'
            ]
          },
          questions: [
            "Révise toutes les figures géométriques",
            "Révise les calculs de périmètre et d'aire",
            "Explique la symétrie et les motifs",
            "Résous des problèmes géométriques complexes",
            "Donne des exemples d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'figures',
              question: 'Décris les propriétés d\'un carré et d\'un rectangle',
              answer: 'Carré: 4 côtés égaux, 4 angles droits. Rectangle: 4 côtés opposés égaux, 4 angles droits'
            },
            {
              type: 'calculs',
              question: 'Calcule le périmètre et l\'aire d\'un rectangle 6 cm × 4 cm',
              answer: 'Périmètre: 2 × (6 + 4) = 20 cm, Aire: 6 × 4 = 24 cm²'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch9-s3',
          title: 'Révision des mesures',
          description: 'Réviser toutes les notions de mesure et de grandeurs',
          concepts: ['Révision', 'Temps', 'Monnaie', 'Masse', 'Volume'],
          objectives: [
            'Réviser les unités de temps',
            'Réviser la monnaie mauritanienne',
            'Réviser les mesures de masse et de volume'
          ],
          content: {
            temps: {
              unites: 'Heures, minutes, secondes',
              lecture: 'Lecture de l\'heure',
              conversion: 'Conversion entre unités'
            },
            monnaie: {
              ouguiya: 'Unité monétaire mauritanienne',
              calculs: 'Calculs de prix et de monnaie',
              transactions: 'Achats et ventes'
            },
            masse: {
              unites: 'Grammes, kilogrammes',
              conversion: 'Conversion entre unités',
              mesure: 'Utilisation de la balance'
            },
            volume: {
              unites: 'Millilitres, litres',
              conversion: 'Conversion entre unités',
              mesure: 'Utilisation d\'instruments'
            },
            mauritanianContext: [
              'Heures de cours et de prière',
              'Prix des produits au marché',
              'Poids des aliments',
              'Quantités de liquides'
            ]
          },
          questions: [
            "Révise toutes les unités de mesure",
            "Révise les calculs de prix en ouguiyas",
            "Révise les conversions d'unités",
            "Résous des problèmes de mesures complexes",
            "Donne des exemples d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'temps',
              question: 'Convertis: 2h30 en minutes, 150 min en heures',
              answer: '2h30 = 150 min, 150 min = 2h30'
            },
            {
              type: 'monnaie',
              question: 'Ahmed achète 3 articles à 25 MRU chacun. Il paie avec 100 MRU. Combien lui rend-on?',
              answer: 'Coût: 3 × 25 = 75 MRU, Monnaie: 100 - 75 = 25 MRU'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch9-s4',
          title: 'Révision des statistiques et probabilités',
          description: 'Réviser les notions de statistiques et de probabilités',
          concepts: ['Révision', 'Statistiques', 'Graphiques', 'Probabilités', 'Calculs'],
          objectives: [
            'Réviser les statistiques de base',
            'Réviser les probabilités simples',
            'Consolider les connaissances en analyse de données'
          ],
          content: {
            statistiques: {
              collection: 'Collecte et organisation des données',
              graphiques: 'Création et lecture de graphiques',
              calculs: 'Moyenne, maximum, minimum, étendue'
            },
            probabilites: {
              definition: 'Probabilité et chances',
              calculs: 'Formule et calculs de probabilité',
              experiences: 'Conduite d\'expériences'
            },
            applications: {
              analyse: 'Analyse de données réelles',
              comparaison: 'Comparaison de groupes',
              prediction: 'Prédictions simples'
            },
            mauritanianContext: [
              'Statistiques scolaires',
              'Probabilités météorologiques',
              'Analyse des prix du marché',
              'Chances de réussite'
            ]
          },
          questions: [
            "Révise les statistiques et leurs calculs",
            "Révise les probabilités et leurs applications",
            "Explique comment analyser des données",
            "Résous des problèmes de statistiques et probabilités",
            "Donne des exemples d'utilisation en Mauritanie"
          ],
          exercises: [
            {
              type: 'statistiques',
              question: 'Calcule la moyenne, le max, le min et l\'étendue de: 12, 15, 18, 14, 16',
              answer: 'Moyenne: 15, Max: 18, Min: 12, Étendue: 6'
            },
            {
              type: 'probabilites',
              question: 'Calcule la probabilité de tirer un nombre pair avec un dé',
              answer: 'Cas favorables: 2, 4, 6 (3 cas), Total: 6, Probabilité: 3/6 = 1/2'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 35
        },
        {
          id: 'ch9-s5',
          title: 'Évaluation finale',
          description: 'Évaluation complète de toutes les connaissances acquises',
          concepts: ['Évaluation', 'Révision', 'Application', 'Synthèse', 'Validation'],
          objectives: [
            'Évaluer toutes les connaissances acquises',
            'Résoudre des problèmes complexes',
            'Valider la maîtrise des compétences'
          ],
          content: {
            evaluation: {
              complete: 'Test de toutes les notions apprises',
              problemes: 'Problèmes complexes combinant plusieurs concepts',
              application: 'Application dans des situations réelles'
            },
            competences: {
              numeriques: 'Maîtrise des nombres et opérations',
              geometriques: 'Connaissance des figures et mesures',
              logiques: 'Raisonnement et résolution de problèmes',
              pratiques: 'Application dans la vie quotidienne'
            },
            preparation: {
              revision: 'Révision complète avant l\'évaluation',
              methodes: 'Techniques de résolution de problèmes',
              verification: 'Vérification des réponses'
            },
            mauritanianContext: [
              'Problèmes de la vie quotidienne mauritanienne',
              'Calculs commerciaux et économiques',
              'Mesures et constructions locales',
              'Statistiques et probabilités régionales'
            ]
          },
          questions: [
            "Révise toutes les notions avant l'évaluation",
            "Résous ces problèmes complexes",
            "Applique tes connaissances dans des situations réelles",
            "Vérifie toutes tes réponses",
            "Montre ta maîtrise des compétences"
          ],
          exercises: [
            {
              type: 'probleme_complexe',
              question: 'Une famille mauritanienne achète 2 kg de riz à 150 MRU/kg, 1,5 L d\'huile à 200 MRU/L, et 3 pains à 25 MRU chacun. Ils paient avec 1000 MRU. Combien leur rend-on?',
              answer: 'Riz: 2 × 150 = 300 MRU, Huile: 1,5 × 200 = 300 MRU, Pain: 3 × 25 = 75 MRU, Total: 675 MRU, Monnaie: 1000 - 675 = 325 MRU'
            },
            {
              type: 'evaluation',
              question: 'Calcule l\'aire d\'une pièce rectangulaire de 4 m × 3,5 m, puis calcule 25% de cette aire',
              answer: 'Aire: 4 × 3,5 = 14 m², 25% de 14 = 3,5 m²'
            }
          ],
          difficulty: 'advanced',
          estimatedTime: 40
        }
      ]
    }
  ]
};

export default YEAR1_MATH_CURRICULUM;
