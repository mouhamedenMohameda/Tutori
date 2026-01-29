export interface Year2ScienceSection {
  id: string;
  title: string;
  description: string;
  concepts: string[];
  objectives: string[];
  content: {
    [key: string]: any;
    mauritanianContext: string[];
  };
  questions: string[];
  exercises: {
    type: string;
    question: string;
    answer: string;
  }[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number;
}

export interface Year2ScienceChapter {
  id: string;
  title: string;
  sections: Year2ScienceSection[];
}

export interface Year2ScienceCurriculum {
  year: number;
  subject: string;
  title: string;
  description: string;
  methodology: string;
  chapters: Year2ScienceChapter[];
}

const YEAR2_SCIENCE_CURRICULUM: Year2ScienceCurriculum = {
  year: 2,
  subject: 'science',
  title: 'Sciences - Année 2',
  description: 'Programme de sciences pour la deuxième année du collège mauritanien',
  methodology: 'Approche progressive: Observation → Expérimentation → Conclusion. Intégration contexte mauritanien.',
  chapters: [
    {
      id: 'ch1',
      title: 'LA MATIÈRE ET SES PROPRIÉTÉS',
      sections: [
        {
          id: 'ch1-s1',
          title: 'Introduction à la matière',
          description: 'Comprendre ce qu\'est la matière et ses états fondamentaux',
          concepts: ['Matière', 'État', 'Solide', 'Liquide', 'Gazeux'],
          objectives: [
            'Définir la matière',
            'Identifier les trois états de la matière',
            'Donner des exemples de chaque état'
          ],
          content: {
            definition: {
              matiere: 'La matière est tout ce qui occupe un espace et a une masse',
              caracteristiques: 'Volume, masse, forme',
              exemples: 'L\'eau, l\'air, les roches, les plantes'
            },
            etats: {
              solide: 'État où la matière a une forme et un volume fixes',
              liquide: 'État où la matière a un volume fixe mais pas de forme fixe',
              gazeux: 'État où la matière n\'a ni forme ni volume fixes'
            },
            exemples: {
              solides: 'Glace, roche, bois, métal',
              liquides: 'Eau, huile, lait, jus',
              gaz: 'Air, vapeur d\'eau, gaz de cuisson'
            },
            proprietes: {
              forme: 'Comment la matière occupe l\'espace',
              volume: 'L\'espace occupé par la matière',
              masse: 'La quantité de matière'
            },
            mauritanianContext: [
              'Eau du fleuve Sénégal (liquide)',
              'Sable du désert (solide)',
              'Vent du Sahara (gazeux)',
              'Roches du plateau de l\'Adrar',
              'Eau des puits traditionnels'
            ]
          },
          questions: [
            "Qu'est-ce que la matière?",
            "Quels sont les trois états de la matière?",
            "Donne un exemple de matière solide en Mauritanie",
            "Comment reconnais-tu un liquide?",
            "Donne un exemple de gaz dans la nature"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces éléments: eau, roche, air, sable, vapeur',
              answer: 'Solides: roche, sable. Liquides: eau. Gaz: air, vapeur'
            },
            {
              type: 'exemples',
              question: 'Donne 3 exemples de solides que tu vois autour de toi',
              answer: 'Exemples: table, chaise, livre, etc.'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch1-s2',
          title: 'Propriétés physiques de la matière',
          description: 'Apprendre les propriétés qui permettent de décrire la matière',
          concepts: ['Propriété', 'Couleur', 'Texture', 'Dureté', 'Transparence'],
          objectives: [
            'Identifier les propriétés physiques de la matière',
            'Utiliser les sens pour observer les propriétés',
            'Classer les matériaux selon leurs propriétés'
          ],
          content: {
            proprietes: {
              couleur: 'La couleur que nous voyons',
              texture: 'Comment la surface se sent au toucher',
              durete: 'La résistance à la déformation',
              transparence: 'La capacité à laisser passer la lumière'
            },
            observation: {
              vue: 'Observer la couleur, la forme, la transparence',
              toucher: 'Sentir la texture, la température',
              ouie: 'Écouter les sons produits',
              odorat: 'Sentir les odeurs'
            },
            classification: {
              par_couleur: 'Rouge, bleu, vert, jaune, etc.',
              par_texture: 'Lisse, rugueux, doux, dur',
              par_transparence: 'Transparent, translucide, opaque'
            },
            exemples: {
              transparent: 'Verre, eau pure',
              opaque: 'Bois, métal, roche',
              dur: 'Pierre, métal',
              mou: 'Tissu, caoutchouc'
            },
            mauritanianContext: [
              'Couleur du sable du désert (jaune/orange)',
              'Texture rugueuse des roches de l\'Adrar',
              'Transparence de l\'eau des puits',
              'Dureté des pierres utilisées dans la construction',
              'Couleur des tissus traditionnels mauritaniens'
            ]
          },
          questions: [
            "Quelles sont les propriétés physiques de la matière?",
            "Comment observes-tu les propriétés d'un objet?",
            "Donne un exemple de matériau transparent",
            "Comment classes-tu les matériaux?",
            "Donne un exemple de propriété en Mauritanie"
          ],
          exercises: [
            {
              type: 'observation',
              question: 'Observe un objet et décris ses propriétés: couleur, texture, dureté',
              answer: 'Décrire selon l\'objet observé'
            },
            {
              type: 'classification',
              question: 'Classe ces matériaux par transparence: verre, bois, eau, métal',
              answer: 'Transparent: verre, eau. Opaque: bois, métal'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch1-s3',
          title: 'Changements d\'état de la matière',
          description: 'Comprendre comment la matière peut changer d\'état',
          concepts: ['Changement', 'Fusion', 'Solidification', 'Vaporisation', 'Condensation'],
          objectives: [
            'Identifier les changements d\'état',
            'Comprendre les conditions de changement',
            'Donner des exemples de changements d\'état'
          ],
          content: {
            changements: {
              fusion: 'Passage de solide à liquide (glace → eau)',
              solidification: 'Passage de liquide à solide (eau → glace)',
              vaporisation: 'Passage de liquide à gazeux (eau → vapeur)',
              condensation: 'Passage de gazeux à liquide (vapeur → eau)'
            },
            conditions: {
              temperature: 'La température influence les changements',
              chaleur: 'Ajouter de la chaleur facilite la fusion et vaporisation',
              froid: 'Enlever de la chaleur facilite la solidification et condensation'
            },
            exemples: {
              fusion: 'Glace qui fond au soleil',
              solidification: 'Eau qui gèle dans le congélateur',
              vaporisation: 'Eau qui bout dans une casserole',
              condensation: 'Brouillard sur les vitres'
            },
            cycle: {
              eau: 'Évaporation → condensation → précipitation',
              importance: 'Cycle essentiel pour la vie sur Terre'
            },
            mauritanianContext: [
              'Fusion de la glace dans les réfrigérateurs',
              'Vaporisation de l\'eau des puits au soleil',
              'Condensation de la rosée matinale',
              'Solidification de l\'eau dans les zones froides',
              'Évaporation de l\'eau du fleuve Sénégal'
            ]
          },
          questions: [
            "Quels sont les changements d'état de la matière?",
            "Que se passe-t-il quand on chauffe de la glace?",
            "Donne un exemple de vaporisation",
            "Comment se forme la rosée?",
            "Donne un exemple de changement d'état en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie le changement d\'état: eau qui bout, glace qui fond',
              answer: 'Eau qui bout: vaporisation. Glace qui fond: fusion'
            },
            {
              type: 'exemples',
              question: 'Donne un exemple de condensation dans la nature',
              answer: 'Formation de brouillard, rosée sur les feuilles'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch1-s4',
          title: 'Mélanges et solutions',
          description: 'Comprendre les mélanges et les solutions dans la matière',
          concepts: ['Mélange', 'Solution', 'Soluble', 'Insoluble', 'Filtration'],
          objectives: [
            'Distinguer mélange et solution',
            'Identifier les substances solubles et insolubles',
            'Utiliser des techniques de séparation'
          ],
          content: {
            melanges: {
              definition: 'Combinaison de deux ou plusieurs substances',
              types: 'Homogène (uniforme) et hétérogène (non uniforme)',
              exemples: 'Eau + sel, eau + sable'
            },
            solutions: {
              definition: 'Mélange homogène où une substance se dissout',
              solute: 'La substance qui se dissout (sel)',
              solvant: 'La substance qui dissout (eau)',
              exemples: 'Eau salée, eau sucrée'
            },
            solubilite: {
              soluble: 'Substance qui se dissout dans l\'eau',
              insoluble: 'Substance qui ne se dissout pas dans l\'eau',
              facteurs: 'Température, agitation, taille des particules'
            },
            separation: {
              filtration: 'Séparer les solides des liquides',
              decantation: 'Laisser reposer pour séparer',
              evaporation: 'Évaporer le solvant'
            },
            mauritanianContext: [
              'Eau salée des marais salants',
              'Mélange de sable et d\'eau',
              'Solution de sucre dans le thé',
              'Filtration de l\'eau des puits',
              'Séparation du sable et de l\'eau'
            ]
          },
          questions: [
            "Qu'est-ce qu'un mélange?",
            "Quelle est la différence entre mélange et solution?",
            "Donne un exemple de substance soluble",
            "Comment sépares-tu le sable de l'eau?",
            "Donne un exemple de mélange en Mauritanie"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces mélanges: eau + sel, eau + sable, eau + sucre',
              answer: 'Solutions: eau + sel, eau + sucre. Mélange hétérogène: eau + sable'
            },
            {
              type: 'separation',
              question: 'Comment sépares-tu le sel de l\'eau salée?',
              answer: 'Par évaporation: chauffer l\'eau pour qu\'elle s\'évapore, le sel reste'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch1-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur la matière',
          concepts: ['Application', 'Révision', 'Matière', 'Propriétés', 'Changements'],
          objectives: [
            'Réviser toutes les notions sur la matière',
            'Résoudre des problèmes pratiques',
            'Utiliser les connaissances dans la vie quotidienne'
          ],
          content: {
            revision: {
              matiere: 'Définition et états de la matière',
              proprietes: 'Propriétés physiques et observation',
              changements: 'Changements d\'état et conditions',
              melanges: 'Mélanges, solutions et séparation'
            },
            problemes: {
              identification: 'Identifier les états et propriétés',
              classification: 'Classer les matériaux',
              separation: 'Proposer des méthodes de séparation',
              explication: 'Expliquer des phénomènes observés'
            },
            exemples: {
              complexe: 'Problème combinant plusieurs notions',
              pratique: 'Application dans la vie quotidienne',
              experimental: 'Expérience à réaliser'
            },
            mauritanianContext: [
              'Problèmes liés à l\'eau en Mauritanie',
              'Utilisation des matériaux locaux',
              'Techniques traditionnelles de séparation',
              'Observation des phénomènes naturels'
            ]
          },
          questions: [
            "Révise toutes les notions sur la matière",
            "Résous ce problème complexe",
            "Propose une méthode de séparation",
            "Explique ce phénomène observé",
            "Donne un exemple d'application en Mauritanie"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Tu as un mélange de sable, sel et eau. Comment sépares-tu les trois composants?',
              answer: '1) Filtration pour séparer le sable, 2) Évaporation pour séparer le sel de l\'eau'
            },
            {
              type: 'explication',
              question: 'Pourquoi la glace fond-elle plus vite au soleil qu\'à l\'ombre?',
              answer: 'Le soleil apporte de la chaleur qui accélère la fusion de la glace'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch2',
      title: 'L\'ÉNERGIE ET SES SOURCES',
      sections: [
        {
          id: 'ch2-s1',
          title: 'Introduction à l\'énergie',
          description: 'Comprendre ce qu\'est l\'énergie et ses différentes formes',
          concepts: ['Énergie', 'Forme', 'Mouvement', 'Chaleur', 'Lumière'],
          objectives: [
            'Définir l\'énergie',
            'Identifier les différentes formes d\'énergie',
            'Donner des exemples de chaque forme'
          ],
          content: {
            definition: {
              energie: 'L\'énergie est la capacité à produire un travail ou un changement',
              caracteristiques: 'Ne se crée pas, ne se détruit pas, se transforme',
              importance: 'Essentielle pour tous les processus de la vie'
            },
            formes: {
              mecanique: 'Énergie du mouvement (voiture, vent)',
              thermique: 'Énergie de la chaleur (soleil, feu)',
              lumineuse: 'Énergie de la lumière (soleil, ampoule)',
              electrique: 'Énergie de l\'électricité (batterie, générateur)'
            },
            exemples: {
              mecanique: 'Vent qui fait tourner un moulin',
              thermique: 'Soleil qui chauffe l\'eau',
              lumineuse: 'Lumière du soleil pour voir',
              electrique: 'Électricité pour faire fonctionner un appareil'
            },
            transformation: {
              principe: 'L\'énergie peut se transformer d\'une forme à l\'autre',
              exemples: 'Soleil → chaleur → mouvement (vent)',
              conservation: 'L\'énergie totale reste constante'
            },
            mauritanianContext: [
              'Énergie solaire abondante en Mauritanie',
              'Vent du Sahara pour l\'énergie éolienne',
              'Chaleur du désert',
              'Énergie électrique des villes',
              'Énergie musculaire pour les travaux manuels'
            ]
          },
          questions: [
            "Qu'est-ce que l'énergie?",
            "Quelles sont les différentes formes d'énergie?",
            "Donne un exemple d'énergie mécanique",
            "Comment l'énergie se transforme-t-elle?",
            "Donne un exemple d'énergie en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie la forme d\'énergie: vent, soleil, batterie, feu',
              answer: 'Vent: mécanique. Soleil: thermique et lumineuse. Batterie: électrique. Feu: thermique'
            },
            {
              type: 'exemples',
              question: 'Donne 3 exemples d\'énergie que tu utilises chaque jour',
              answer: 'Exemples: électricité, nourriture, lumière du soleil'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch2-s2',
          title: 'Sources d\'énergie renouvelables',
          description: 'Apprendre les sources d\'énergie qui se renouvellent naturellement',
          concepts: ['Renouvelable', 'Soleil', 'Vent', 'Eau', 'Durabilité'],
          objectives: [
            'Identifier les sources d\'énergie renouvelables',
            'Comprendre leurs avantages',
            'Donner des exemples d\'utilisation'
          ],
          content: {
            definition: {
              renouvelable: 'Source d\'énergie qui se renouvelle naturellement',
              avantages: 'Inépuisable, propre, respectueuse de l\'environnement',
              importance: 'Alternative aux énergies fossiles'
            },
            sources: {
              solaire: 'Énergie du soleil (panneaux solaires)',
              eolienne: 'Énergie du vent (éoliennes)',
              hydraulique: 'Énergie de l\'eau (barrages)',
              biomasse: 'Énergie des matières organiques'
            },
            exemples: {
              solaire: 'Panneaux solaires sur les toits',
              eolienne: 'Éoliennes dans les champs',
              hydraulique: 'Barrage hydroélectrique',
              biomasse: 'Bois de chauffage, déchets organiques'
            },
            avantages: {
              inepuisable: 'Ne s\'épuise jamais',
              propre: 'Ne pollue pas l\'air',
              local: 'Disponible partout',
              economique: 'Coût réduit à long terme'
            },
            mauritanianContext: [
              'Panneaux solaires dans les villages',
              'Potentiel éolien du désert',
              'Énergie solaire pour l\'éclairage',
              'Chauffe-eau solaires',
              'Pompes à eau solaires'
            ]
          },
          questions: [
            "Qu'est-ce qu'une source d'énergie renouvelable?",
            "Quelles sont les principales sources renouvelables?",
            "Quels sont les avantages des énergies renouvelables?",
            "Donne un exemple d'utilisation en Mauritanie",
            "Pourquoi les énergies renouvelables sont-elles importantes?"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces sources: soleil, charbon, vent, pétrole, eau',
              answer: 'Renouvelables: soleil, vent, eau. Non renouvelables: charbon, pétrole'
            },
            {
              type: 'avantages',
              question: 'Liste 3 avantages des énergies renouvelables',
              answer: 'Inépuisables, propres, respectueuses de l\'environnement'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch2-s3',
          title: 'Sources d\'énergie non renouvelables',
          description: 'Comprendre les sources d\'énergie qui s\'épuisent',
          concepts: ['Non renouvelable', 'Fossile', 'Charbon', 'Pétrole', 'Gaz'],
          objectives: [
            'Identifier les sources d\'énergie non renouvelables',
            'Comprendre leurs inconvénients',
            'Apprendre l\'importance de les économiser'
          ],
          content: {
            definition: {
              non_renouvelable: 'Source d\'énergie qui s\'épuise et ne se renouvelle pas',
              formation: 'Formées il y a des millions d\'années',
              limitation: 'Quantité limitée sur Terre'
            },
            sources: {
              charbon: 'Roche noire formée de végétaux fossilisés',
              petrole: 'Liquide noir formé de plancton fossilisé',
              gaz: 'Gaz formé de matières organiques fossilisées',
              nucleaire: 'Énergie de l\'uranium (minéral rare)'
            },
            exemples: {
              charbon: 'Centrales électriques, chauffage',
              petrole: 'Essence, plastique, chauffage',
              gaz: 'Cuisine, chauffage, électricité',
              nucleaire: 'Centrales nucléaires'
            },
            inconvenients: {
              epuisement: 'S\'épuisent avec le temps',
              pollution: 'Polluent l\'air et l\'environnement',
              cout: 'Prix qui augmente avec la rareté',
              dependance: 'Créent une dépendance énergétique'
            },
            mauritanianContext: [
              'Importation de pétrole en Mauritanie',
              'Coût élevé de l\'essence',
              'Dépendance énergétique',
              'Pollution des véhicules',
              'Nécessité d\'économiser l\'énergie'
            ]
          },
          questions: [
            "Qu'est-ce qu'une source d'énergie non renouvelable?",
            "Quelles sont les principales sources non renouvelables?",
            "Quels sont les inconvénients de ces énergies?",
            "Pourquoi faut-il les économiser?",
            "Donne un exemple d'impact en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie les sources non renouvelables: charbon, soleil, pétrole, vent',
              answer: 'Non renouvelables: charbon, pétrole. Renouvelables: soleil, vent'
            },
            {
              type: 'economie',
              question: 'Comment peux-tu économiser l\'énergie à la maison?',
              answer: 'Éteindre les lumières, fermer les robinets, utiliser les transports en commun'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch2-s4',
          title: 'Économie et efficacité énergétique',
          description: 'Apprendre à économiser l\'énergie et améliorer l\'efficacité',
          concepts: ['Économie', 'Efficacité', 'Consommation', 'Économies', 'Développement durable'],
          objectives: [
            'Comprendre l\'importance d\'économiser l\'énergie',
            'Apprendre des techniques d\'économie',
            'Développer des habitudes durables'
          ],
          content: {
            importance: {
              economie: 'Réduire les coûts et la dépendance',
              environnement: 'Protéger l\'environnement',
              durabilite: 'Assurer l\'avenir des générations futures'
            },
            techniques: {
              eclairage: 'Utiliser des ampoules économiques, éteindre les lumières',
              chauffage: 'Isoler les maisons, régler la température',
              transport: 'Marcher, vélo, transports en commun',
              appareils: 'Éteindre les appareils, choisir des modèles économes'
            },
            efficacite: {
              definition: 'Obtenir le même résultat avec moins d\'énergie',
              exemples: 'Ampoules LED, appareils classe A',
              benefices: 'Économies d\'argent et d\'énergie'
            },
            habitudes: {
              quotidiennes: 'Éteindre les lumières, fermer les robinets',
              long_terme: 'Choisir des équipements économes',
              collectives: 'Participer aux efforts de la communauté'
            },
            mauritanianContext: [
              'Économies d\'électricité dans les foyers',
              'Utilisation de l\'énergie solaire',
              'Économies d\'eau dans les puits',
              'Transport à pied ou à vélo',
              'Éclairage naturel pendant la journée'
            ]
          },
          questions: [
            "Pourquoi est-il important d'économiser l'énergie?",
            "Quelles techniques d'économie peux-tu utiliser?",
            "Qu'est-ce que l'efficacité énergétique?",
            "Comment développes-tu de bonnes habitudes?",
            "Donne un exemple d'économie en Mauritanie"
          ],
          exercises: [
            {
              type: 'techniques',
              question: 'Liste 5 façons d\'économiser l\'énergie à la maison',
              answer: 'Éteindre les lumières, fermer les robinets, utiliser l\'énergie solaire, etc.'
            },
            {
              type: 'habitudes',
              question: 'Quelles habitudes peux-tu adopter pour économiser l\'énergie?',
              answer: 'Éteindre les appareils, marcher au lieu de prendre la voiture, etc.'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch2-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur l\'énergie',
          concepts: ['Application', 'Révision', 'Énergie', 'Sources', 'Économie'],
          objectives: [
            'Réviser toutes les notions sur l\'énergie',
            'Résoudre des problèmes d\'économie d\'énergie',
            'Proposer des solutions durables'
          ],
          content: {
            revision: {
              energie: 'Définition et formes de l\'énergie',
              sources: 'Renouvelables et non renouvelables',
              economie: 'Techniques et habitudes d\'économie',
              efficacite: 'Améliorer l\'efficacité énergétique'
            },
            problemes: {
              identification: 'Identifier les types d\'énergie',
              comparaison: 'Comparer les sources d\'énergie',
              economie: 'Calculer les économies possibles',
              solutions: 'Proposer des solutions durables'
            },
            exemples: {
              complexe: 'Problème combinant plusieurs notions',
              pratique: 'Application dans la vie quotidienne',
              communautaire: 'Solutions pour la communauté'
            },
            mauritanianContext: [
              'Solutions énergétiques pour la Mauritanie',
              'Projets d\'énergie renouvelable',
              'Économies d\'énergie dans les villages',
              'Développement durable local'
            ]
          },
          questions: [
            "Révise toutes les notions sur l'énergie",
            "Résous ce problème d'économie d'énergie",
            "Propose une solution durable",
            "Calcule les économies possibles",
            "Donne un exemple d'application en Mauritanie"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Une famille dépense 1000 MRU par mois en électricité. En économisant 20%, combien économise-t-elle?',
              answer: '20% de 1000 = 200 MRU d\'économies par mois'
            },
            {
              type: 'solution',
              question: 'Propose 3 solutions pour réduire la consommation d\'énergie dans un village',
              answer: 'Panneaux solaires, éoliennes, économies d\'eau et d\'électricité'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch3',
      title: 'LA LUMIÈRE ET L\'OMBRE',
      sections: [
        {
          id: 'ch3-s1',
          title: 'Nature de la lumière',
          description: 'Comprendre ce qu\'est la lumière et ses propriétés',
          concepts: ['Lumière', 'Source', 'Propagation', 'Vitesse', 'Nature'],
          objectives: [
            'Définir la lumière',
            'Identifier les sources de lumière',
            'Comprendre comment la lumière se propage'
          ],
          content: {
            definition: {
              lumiere: 'La lumière est une forme d\'énergie qui nous permet de voir',
              nature: 'Onde électromagnétique qui se déplace très rapidement',
              importance: 'Essentielle pour la vision et la vie sur Terre'
            },
            sources: {
              naturelles: 'Soleil, étoiles, lucioles, feu',
              artificielles: 'Ampoules, bougies, lampes de poche',
              primaires: 'Produisent leur propre lumière',
              secondaires: 'Réfléchissent la lumière reçue'
            },
            propagation: {
              rectiligne: 'La lumière se déplace en ligne droite',
              vitesse: 'Très rapide: 300 000 km/s',
              direction: 'Dans toutes les directions depuis la source'
            },
            proprietes: {
              vitesse: 'Plus rapide que le son',
              direction: 'Se propage en ligne droite',
              energie: 'Peut chauffer et éclairer'
            },
            mauritanianContext: [
              'Lumière intense du soleil mauritanien',
              'Éclairage des maisons traditionnelles',
              'Lumière des lampes à pétrole',
              'Éclairage public dans les villes',
              'Lumière des étoiles dans le désert'
            ]
          },
          questions: [
            "Qu'est-ce que la lumière?",
            "Quelles sont les sources de lumière?",
            "Comment la lumière se propage-t-elle?",
            "Donne un exemple de source naturelle",
            "Donne un exemple de source artificielle en Mauritanie"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces sources: soleil, ampoule, lune, bougie',
              answer: 'Primaires: soleil, ampoule, bougie. Secondaire: lune'
            },
            {
              type: 'exemples',
              question: 'Donne 3 exemples de sources de lumière que tu utilises',
              answer: 'Exemples: ampoule, bougie, lampe de poche'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch3-s2',
          title: 'Formation des ombres',
          description: 'Comprendre comment se forment les ombres',
          concepts: ['Ombre', 'Obstacle', 'Source', 'Formation', 'Taille'],
          objectives: [
            'Comprendre la formation des ombres',
            'Identifier les facteurs qui influencent les ombres',
            'Prédire la forme et la taille des ombres'
          ],
          content: {
            formation: {
              principe: 'L\'ombre se forme quand un objet bloque la lumière',
              conditions: 'Source de lumière + objet opaque + surface',
              processus: 'La lumière ne peut pas passer à travers l\'objet'
            },
            facteurs: {
              source: 'Taille et distance de la source de lumière',
              objet: 'Taille et forme de l\'objet',
              distance: 'Distance entre l\'objet et la surface',
              angle: 'Angle d\'éclairage'
            },
            caracteristiques: {
              forme: 'L\'ombre a la forme de l\'objet',
              taille: 'Varie selon la distance et l\'angle',
              nette: 'Bordure nette avec une source ponctuelle',
              floue: 'Bordure floue avec une source étendue'
            },
            exemples: {
              ombre_personne: 'Ombre d\'une personne au soleil',
              ombre_arbre: 'Ombre d\'un arbre sur le sol',
              ombre_batiment: 'Ombre d\'un bâtiment'
            },
            mauritanianContext: [
              'Ombres des palmiers dans les oasis',
              'Ombres des maisons traditionnelles',
              'Ombres des dunes de sable',
              'Ombres des animaux dans le désert',
              'Ombres des minarets des mosquées'
            ]
          },
          questions: [
            "Comment se forme une ombre?",
            "Quels facteurs influencent la taille de l'ombre?",
            "Pourquoi l'ombre a-t-elle la forme de l'objet?",
            "Donne un exemple d'ombre en Mauritanie",
            "Comment peux-tu changer la taille de ton ombre?"
          ],
          exercises: [
            {
              type: 'formation',
              question: 'Explique pourquoi tu vois ton ombre au soleil',
              answer: 'Ton corps bloque la lumière du soleil, créant une zone sombre derrière toi'
            },
            {
              type: 'facteurs',
              question: 'Comment peux-tu faire une ombre plus grande?',
              answer: 'Se rapprocher de la source de lumière ou s\'éloigner de la surface'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch3-s3',
          title: 'Réflexion de la lumière',
          description: 'Apprendre comment la lumière se réfléchit',
          concepts: ['Réflexion', 'Miroir', 'Surface', 'Angle', 'Image'],
          objectives: [
            'Comprendre le phénomène de réflexion',
            'Identifier les surfaces qui réfléchissent',
            'Observer la formation d\'images'
          ],
          content: {
            definition: {
              reflexion: 'La lumière rebondit sur une surface',
              loi: 'Angle d\'incidence = angle de réflexion',
              types: 'Réflexion spéculaire (miroir) et diffuse (papier)'
            },
            surfaces: {
              speculaires: 'Miroirs, eau calme, métal poli',
              diffuses: 'Papier, mur, sable',
              caracteristiques: 'Surface lisse = réflexion nette, surface rugueuse = réflexion diffuse'
            },
            images: {
              formation: 'L\'image se forme par réflexion',
              caracteristiques: 'Symétrique, même taille, à la même distance',
              types: 'Virtuelle (dans le miroir) et réelle (sur un écran)'
            },
            exemples: {
              miroir: 'Image de soi dans un miroir',
              eau: 'Reflet dans l\'eau calme',
              vitre: 'Reflet dans une vitre'
            },
            mauritanianContext: [
              'Reflets dans l\'eau des puits',
              'Miroirs dans les maisons',
              'Reflets sur les dunes de sable',
              'Images dans les vitres des bâtiments',
              'Reflets dans les bassins d\'eau'
            ]
          },
          questions: [
            "Qu'est-ce que la réflexion de la lumière?",
            "Quelles surfaces réfléchissent bien la lumière?",
            "Comment se forme une image dans un miroir?",
            "Donne un exemple de réflexion en Mauritanie",
            "Pourquoi voit-on notre image dans un miroir?"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Classe ces surfaces: miroir, papier, eau calme, sable',
              answer: 'Spéculaires: miroir, eau calme. Diffuses: papier, sable'
            },
            {
              type: 'explication',
              question: 'Pourquoi voit-on notre reflet dans l\'eau calme mais pas dans l\'eau agitée?',
              answer: 'L\'eau calme a une surface lisse qui réfléchit bien, l\'eau agitée a une surface rugueuse'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch3-s4',
          title: 'Couleurs et spectre lumineux',
          description: 'Comprendre les couleurs et le spectre de la lumière',
          concepts: ['Couleur', 'Spectre', 'Arc-en-ciel', 'Prisme', 'Dispersion'],
          objectives: [
            'Comprendre la formation des couleurs',
            'Identifier les couleurs du spectre',
            'Expliquer la formation de l\'arc-en-ciel'
          ],
          content: {
            formation: {
              couleurs: 'Les couleurs sont des composantes de la lumière blanche',
              dispersion: 'La lumière blanche peut être décomposée en couleurs',
              prisme: 'Un prisme décompose la lumière en couleurs'
            },
            spectre: {
              couleurs: 'Rouge, orange, jaune, vert, bleu, indigo, violet',
              ordre: 'Du rouge (longueur d\'onde longue) au violet (courte)',
              mnemotechnique: 'ROJVBIV (Rouge, Orange, Jaune, Vert, Bleu, Indigo, Violet)'
            },
            arc_en_ciel: {
              formation: 'Créé par la dispersion de la lumière du soleil dans les gouttes d\'eau',
              conditions: 'Soleil + pluie + observation sous le bon angle',
              couleurs: 'Même ordre que le spectre'
            },
            exemples: {
              prisme: 'Prisme de verre qui décompose la lumière',
              arc_en_ciel: 'Arc-en-ciel après la pluie',
              bulle_savon: 'Couleurs irisées dans les bulles de savon'
            },
            mauritanianContext: [
              'Arc-en-ciel après les pluies rares',
              'Couleurs du coucher de soleil sur le désert',
              'Reflets colorés dans l\'eau des oasis',
              'Couleurs des tissus traditionnels',
              'Spectre dans les gouttes de rosée'
            ]
          },
          questions: [
            "Comment se forment les couleurs?",
            "Quelles sont les couleurs du spectre?",
            "Comment se forme un arc-en-ciel?",
            "Donne un exemple d'arc-en-ciel en Mauritanie",
            "Pourquoi voit-on des couleurs dans les bulles de savon?"
          ],
          exercises: [
            {
              type: 'spectre',
              question: 'Cite les couleurs du spectre dans l\'ordre',
              answer: 'Rouge, orange, jaune, vert, bleu, indigo, violet'
            },
            {
              type: 'explication',
              question: 'Explique pourquoi on voit un arc-en-ciel après la pluie',
              answer: 'Les gouttes d\'eau dispersent la lumière du soleil en couleurs'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch3-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur la lumière et l\'ombre',
          concepts: ['Application', 'Révision', 'Lumière', 'Ombre', 'Couleurs'],
          objectives: [
            'Réviser toutes les notions sur la lumière',
            'Résoudre des problèmes pratiques',
            'Expliquer des phénomènes observés'
          ],
          content: {
            revision: {
              lumiere: 'Nature et sources de la lumière',
              ombres: 'Formation et caractéristiques des ombres',
              reflexion: 'Réflexion et formation d\'images',
              couleurs: 'Spectre et formation des couleurs'
            },
            problemes: {
              observation: 'Expliquer des phénomènes observés',
              prediction: 'Prédire la formation d\'ombres',
              explication: 'Expliquer la formation d\'images',
              couleurs: 'Expliquer la formation des couleurs'
            },
            exemples: {
              complexe: 'Problème combinant plusieurs notions',
              pratique: 'Application dans la vie quotidienne',
              experimental: 'Expérience à réaliser'
            },
            mauritanianContext: [
              'Phénomènes lumineux en Mauritanie',
              'Utilisation de la lumière naturelle',
              'Ombres et reflets dans le désert',
              'Couleurs du paysage mauritanien'
            ]
          },
          questions: [
            "Révise toutes les notions sur la lumière",
            "Explique ce phénomène observé",
            "Prédit la formation de cette ombre",
            "Résous ce problème pratique",
            "Donne un exemple d'application en Mauritanie"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Pourquoi les ombres sont-elles plus longues le matin et le soir qu\'à midi?',
              answer: 'Le soleil est plus bas sur l\'horizon, créant des ombres plus longues'
            },
            {
              type: 'explication',
              question: 'Explique pourquoi tu vois ton reflet dans l\'eau calme d\'un puits',
              answer: 'L\'eau calme agit comme un miroir et réfléchit la lumière'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch4',
      title: 'LE SON ET L\'AUDITION',
      sections: [
        {
          id: 'ch4-s1',
          title: 'Nature du son',
          description: 'Comprendre ce qu\'est le son et comment il se propage',
          concepts: ['Son', 'Vibration', 'Propagation', 'Onde', 'Fréquence'],
          objectives: [
            'Définir le son',
            'Comprendre que le son est une vibration',
            'Identifier les sources de son'
          ],
          content: {
            definition: {
              son: 'Le son est une vibration qui se propage dans l\'air',
              vibration: 'Mouvement rapide d\'avant en arrière',
              onde: 'Le son se propage sous forme d\'onde'
            },
            sources: {
              naturelles: 'Tonnerre, vent, animaux, voix humaine',
              artificielles: 'Instruments de musique, cloches, sirènes',
              vibration: 'Toute source de son vibre'
            },
            propagation: {
              milieu: 'Le son a besoin d\'un milieu pour se propager',
              air: 'Se propage dans l\'air, l\'eau, les solides',
              vitesse: '340 m/s dans l\'air (plus rapide que le vent)',
              direction: 'Dans toutes les directions depuis la source'
            },
            caracteristiques: {
              amplitude: 'Volume du son (fort/faible)',
              frequence: 'Hauteur du son (aigu/grave)',
              timbre: 'Caractéristique unique de chaque son'
            },
            mauritanianContext: [
              'Son du vent dans le désert',
              'Voix des muezzins des mosquées',
              'Sons des instruments traditionnels',
              'Bruit des véhicules dans les villes',
              'Sons des animaux du désert'
            ]
          },
          questions: [
            "Qu'est-ce que le son?",
            "Comment le son se propage-t-il?",
            "Donne un exemple de source de son",
            "Pourquoi n'entend-on pas le son dans l'espace?",
            "Donne un exemple de son en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie les sources de son: cloche, étoile, tambour, lumière',
              answer: 'Sources de son: cloche, tambour. Pas de son: étoile, lumière'
            },
            {
              type: 'explication',
              question: 'Pourquoi entend-on le tonnerre après avoir vu l\'éclair?',
              answer: 'La lumière va plus vite que le son, donc on voit l\'éclair avant d\'entendre le tonnerre'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch4-s2',
          title: 'Propriétés du son',
          description: 'Apprendre les différentes propriétés du son',
          concepts: ['Volume', 'Hauteur', 'Timbre', 'Amplitude', 'Fréquence'],
          objectives: [
            'Identifier les propriétés du son',
            'Comprendre la différence entre volume et hauteur',
            'Reconnaître le timbre des sons'
          ],
          content: {
            volume: {
              definition: 'Intensité du son (fort ou faible)',
              amplitude: 'L\'amplitude de la vibration détermine le volume',
              exemples: 'Chuchotement (faible), cri (fort)',
              mesure: 'Mesuré en décibels (dB)'
            },
            hauteur: {
              definition: 'Fréquence du son (aigu ou grave)',
              frequence: 'Nombre de vibrations par seconde',
              exemples: 'Voix d\'enfant (aigu), voix d\'homme (grave)',
              unite: 'Mesurée en hertz (Hz)'
            },
            timbre: {
              definition: 'Caractéristique unique qui permet de reconnaître un son',
              exemples: 'Même note jouée par différents instruments',
              reconnaissance: 'Permet d\'identifier la source du son'
            },
            exemples: {
              volume: 'Piano joué doucement ou fort',
              hauteur: 'Do grave et do aigu',
              timbre: 'Guitare vs piano jouant la même note'
            },
            mauritanianContext: [
              'Volume de l\'appel à la prière',
              'Hauteur des voix des chanteurs traditionnels',
              'Timbre des instruments mauritaniens',
              'Volume des véhicules dans les rues',
              'Hauteur des voix des enfants'
            ]
          },
          questions: [
            "Quelles sont les propriétés du son?",
            "Quelle est la différence entre volume et hauteur?",
            "Donne un exemple de son aigu et grave",
            "Qu'est-ce que le timbre d'un son?",
            "Donne un exemple de timbre en Mauritanie"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces sons: cri d\'enfant, voix grave d\'homme, chuchotement',
              answer: 'Volume: cri (fort), chuchotement (faible). Hauteur: cri d\'enfant (aigu), voix d\'homme (grave)'
            },
            {
              type: 'exemples',
              question: 'Donne un exemple de son avec un volume fort et un volume faible',
              answer: 'Fort: cri, sirène. Faible: chuchotement, respiration'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch4-s3',
          title: 'Propagation du son',
          description: 'Comprendre comment le son se propage dans différents milieux',
          concepts: ['Milieu', 'Propagation', 'Vitesse', 'Obstacle', 'Réflexion'],
          objectives: [
            'Comprendre que le son a besoin d\'un milieu',
            'Comparer la vitesse du son dans différents milieux',
            'Identifier les obstacles à la propagation'
          ],
          content: {
            milieux: {
              air: 'Milieu le plus courant, vitesse: 340 m/s',
              eau: 'Plus rapide que dans l\'air: 1500 m/s',
              solides: 'Plus rapide encore: 5000 m/s dans l\'acier',
              vide: 'Le son ne se propage pas dans le vide'
            },
            vitesse: {
              comparaison: 'Solides > Liquides > Gaz',
              facteurs: 'Température, densité du milieu',
              exemples: 'Son plus rapide dans l\'eau que dans l\'air'
            },
            obstacles: {
              absorption: 'Certains matériaux absorbent le son',
              reflexion: 'Le son peut rebondir sur les surfaces',
              echo: 'Retour du son après réflexion',
              atténuation: 'Le son s\'affaiblit avec la distance'
            },
            exemples: {
              echo: 'Cri dans une grotte ou une montagne',
              absorption: 'Tissus qui réduisent le bruit',
              propagation: 'Son qui traverse les murs'
            },
            mauritanianContext: [
              'Écho dans les dunes de sable',
              'Son qui traverse les murs des maisons',
              'Propagation du son dans l\'air chaud',
              'Écho des appels dans le désert',
              'Son des tambours qui porte loin'
            ]
          },
          questions: [
            "Dans quels milieux le son se propage-t-il?",
            "Pourquoi le son va-t-il plus vite dans l'eau que dans l'air?",
            "Qu'est-ce qu'un écho?",
            "Donne un exemple d'écho en Mauritanie",
            "Pourquoi n'entend-on pas le son dans l'espace?"
          ],
          exercises: [
            {
              type: 'milieux',
              question: 'Classe ces milieux par vitesse de propagation du son: air, eau, acier',
              answer: 'Du plus rapide au plus lent: acier, eau, air'
            },
            {
              type: 'explication',
              question: 'Pourquoi entend-on mieux le son dans l\'eau que dans l\'air?',
              answer: 'Le son se propage plus vite et plus loin dans l\'eau'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch4-s4',
          title: 'L\'oreille et l\'audition',
          description: 'Comprendre comment l\'oreille perçoit les sons',
          concepts: ['Oreille', 'Audition', 'Oreille externe', 'Oreille moyenne', 'Oreille interne'],
          objectives: [
            'Identifier les parties de l\'oreille',
            'Comprendre le processus d\'audition',
            'Apprendre à protéger l\'ouïe'
          ],
          content: {
            parties: {
              externe: 'Pavillon et conduit auditif (collecte le son)',
              moyenne: 'Tympan et osselets (transmet les vibrations)',
              interne: 'Cochlée et nerf auditif (transforme en signal nerveux)'
            },
            processus: {
              etape1: 'Le pavillon collecte le son',
              etape2: 'Le tympan vibre avec le son',
              etape3: 'Les osselets transmettent les vibrations',
              etape4: 'La cochlée transforme en signal nerveux',
              etape5: 'Le cerveau interprète le son'
            },
            protection: {
              volume: 'Éviter les sons trop forts',
              duree: 'Limiter l\'exposition aux bruits',
              distance: 'S\'éloigner des sources bruyantes',
              protection: 'Utiliser des bouchons d\'oreilles'
            },
            exemples: {
              sons_forts: 'Sirènes, marteau-piqueur, musique forte',
              protection: 'Bouchons d\'oreilles, casques anti-bruit',
              soins: 'Nettoyer délicatement les oreilles'
            },
            mauritanianContext: [
              'Protection contre le bruit des véhicules',
              'Soins des oreilles dans le désert',
              'Protection lors des travaux de construction',
              'Écoute de la musique traditionnelle',
              'Appels à la prière à volume modéré'
            ]
          },
          questions: [
            "Quelles sont les parties de l'oreille?",
            "Comment l'oreille perçoit-elle les sons?",
            "Comment peux-tu protéger ton ouïe?",
            "Donne un exemple de son dangereux",
            "Pourquoi faut-il protéger ses oreilles?"
          ],
          exercises: [
            {
              type: 'processus',
              question: 'Explique le processus d\'audition en 5 étapes',
              answer: '1) Collection, 2) Vibration du tympan, 3) Transmission, 4) Transformation, 5) Interprétation'
            },
            {
              type: 'protection',
              question: 'Liste 3 façons de protéger ton ouïe',
              answer: 'Éviter les sons forts, utiliser des protections, limiter l\'exposition'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch4-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur le son et l\'audition',
          concepts: ['Application', 'Révision', 'Son', 'Audition', 'Protection'],
          objectives: [
            'Réviser toutes les notions sur le son',
            'Résoudre des problèmes pratiques',
            'Appliquer les connaissances de protection'
          ],
          content: {
            revision: {
              nature: 'Le son est une vibration qui se propage',
              proprietes: 'Volume, hauteur, timbre',
              propagation: 'Dans différents milieux, avec obstacles',
              audition: 'Processus de perception par l\'oreille'
            },
            problemes: {
              identification: 'Identifier les sources et propriétés du son',
              propagation: 'Expliquer la propagation dans différents milieux',
              protection: 'Proposer des solutions de protection',
              explication: 'Expliquer des phénomènes sonores'
            },
            exemples: {
              complexe: 'Problème combinant plusieurs notions',
              pratique: 'Application dans la vie quotidienne',
              protection: 'Solutions de protection auditive'
            },
            mauritanianContext: [
              'Problèmes sonores en Mauritanie',
              'Solutions de protection adaptées',
              'Utilisation du son dans la culture',
              'Protection contre les bruits urbains'
            ]
          },
          questions: [
            "Révise toutes les notions sur le son",
            "Résous ce problème de propagation",
            "Propose une solution de protection",
            "Explique ce phénomène sonore",
            "Donne un exemple d'application en Mauritanie"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Pourquoi entend-on le tonnerre après l\'éclair, et pourquoi l\'écho est-il plus fort dans les montagnes?',
              answer: 'Le son va plus lentement que la lumière. L\'écho est plus fort dans les montagnes car les surfaces dures réfléchissent mieux le son'
            },
            {
              type: 'protection',
              question: 'Une personne travaille près d\'une machine bruyante. Que peux-tu lui conseiller?',
              answer: 'Utiliser des bouchons d\'oreilles, s\'éloigner de la machine, limiter le temps d\'exposition'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch5',
      title: 'LES MACHINES SIMPLES',
      sections: [
        {
          id: 'ch5-s1',
          title: 'Introduction aux machines simples',
          description: 'Comprendre ce que sont les machines simples et leur utilité',
          concepts: ['Machine', 'Simple', 'Force', 'Travail', 'Avantage'],
          objectives: [
            'Définir une machine simple',
            'Identifier les types de machines simples',
            'Comprendre leur utilité'
          ],
          content: {
            definition: {
              machine: 'Outil qui aide à faire un travail plus facilement',
              simple: 'Machine avec peu de pièces mobiles',
              but: 'Réduire l\'effort nécessaire pour accomplir une tâche'
            },
            types: {
              levier: 'Barre rigide qui pivote sur un point d\'appui',
              poulie: 'Roue avec une corde pour soulever des charges',
              plan_incline: 'Surface inclinée pour monter des objets',
              vis: 'Plan incliné enroulé autour d\'un cylindre'
            },
            avantages: {
              force: 'Réduire la force nécessaire',
              direction: 'Changer la direction de la force',
              distance: 'Augmenter la distance de déplacement',
              precision: 'Améliorer la précision du mouvement'
            },
            exemples: {
              levier: 'Balançoire, pied de biche, ciseaux',
              poulie: 'Puits, grue, ascenseur',
              plan_incline: 'Rampe, escalier, toboggan',
              vis: 'Vis de fixation, tire-bouchon'
            },
            mauritanianContext: [
              'Puits traditionnel avec poulie',
              'Levier pour soulever des pierres',
              'Plan incliné pour monter les charges',
              'Vis pour assembler les meubles',
              'Machines simples dans l\'artisanat'
            ]
          },
          questions: [
            "Qu'est-ce qu'une machine simple?",
            "Quels sont les types de machines simples?",
            "Quels sont les avantages des machines simples?",
            "Donne un exemple de levier",
            "Donne un exemple de machine simple en Mauritanie"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces objets: ciseaux, escalier, poulie, vis',
              answer: 'Levier: ciseaux. Plan incliné: escalier. Poulie: poulie. Vis: vis'
            },
            {
              type: 'exemples',
              question: 'Donne 3 exemples de machines simples que tu utilises',
              answer: 'Exemples: ciseaux, tire-bouchon, balançoire'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch5-s2',
          title: 'Le levier',
          description: 'Apprendre le fonctionnement et les types de leviers',
          concepts: ['Levier', 'Point d\'appui', 'Force', 'Résistance', 'Bras'],
          objectives: [
            'Comprendre le fonctionnement du levier',
            'Identifier les parties du levier',
            'Reconnaître les différents types de leviers'
          ],
          content: {
            parties: {
              point_appui: 'Point fixe autour duquel le levier pivote',
              force: 'Force appliquée pour faire fonctionner le levier',
              resistance: 'Charge ou objet à déplacer',
              bras: 'Distance entre le point d\'appui et la force/résistance'
            },
            types: {
              premiere_classe: 'Point d\'appui entre la force et la résistance (balançoire)',
              deuxieme_classe: 'Résistance entre le point d\'appui et la force (brouette)',
              troisieme_classe: 'Force entre le point d\'appui et la résistance (pince)'
            },
            avantage: {
              mecanique: 'Rapport entre la force appliquée et la résistance',
              calcul: 'Avantage = Bras de force ÷ Bras de résistance',
              exemples: 'Bras de force plus long = moins d\'effort'
            },
            exemples: {
              premiere: 'Balançoire, pied de biche, ciseaux',
              deuxieme: 'Brouette, casse-noix, ouvre-bouteille',
              troisieme: 'Pince, pince à épiler, bras humain'
            },
            mauritanianContext: [
              'Levier pour soulever les pierres de construction',
              'Balançoire dans les cours d\'école',
              'Pied de biche pour les travaux',
              'Ciseaux pour couper les tissus',
              'Brouette pour transporter les matériaux'
            ]
          },
          questions: [
            "Quelles sont les parties d'un levier?",
            "Quels sont les trois types de leviers?",
            "Comment calcule-t-on l'avantage mécanique?",
            "Donne un exemple de levier de première classe",
            "Donne un exemple de levier en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Identifie le type de levier: balançoire, brouette, pince',
              answer: 'Balançoire: 1ère classe. Brouette: 2ème classe. Pince: 3ème classe'
            },
            {
              type: 'calcul',
              question: 'Un levier a un bras de force de 2 m et un bras de résistance de 0.5 m. Quel est son avantage?',
              answer: 'Avantage = 2 ÷ 0.5 = 4 (on peut soulever 4 fois plus lourd)'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch5-s3',
          title: 'La poulie',
          description: 'Comprendre le fonctionnement et les types de poulies',
          concepts: ['Poulie', 'Roue', 'Corde', 'Charge', 'Direction'],
          objectives: [
            'Comprendre le fonctionnement de la poulie',
            'Identifier les types de poulies',
            'Calculer l\'avantage mécanique'
          ],
          content: {
            definition: {
              poulie: 'Roue avec une gorge pour une corde',
              fonction: 'Changer la direction de la force',
              avantage: 'Permet de tirer vers le bas pour soulever'
            },
            types: {
              fixe: 'Poulie attachée à un support fixe',
              mobile: 'Poulie qui se déplace avec la charge',
              composee: 'Combinaison de poulies fixes et mobiles'
            },
            avantages: {
              direction: 'Changer la direction de la force',
              force: 'Réduire la force nécessaire (poulie mobile)',
              distance: 'Augmenter la distance de traction'
            },
            exemples: {
              fixe: 'Poulie de puits, grue simple',
              mobile: 'Système de levage, ascenseur',
              composee: 'Grue complexe, système de levage lourd'
            },
            calculs: {
              fixe: 'Avantage = 1 (ne réduit pas la force)',
              mobile: 'Avantage = 2 (réduit la force de moitié)',
              composee: 'Avantage = nombre de poulies mobiles'
            },
            mauritanianContext: [
              'Poulie de puits traditionnel',
              'Système de levage dans les chantiers',
              'Poulie pour monter les charges',
              'Grue simple pour la construction',
              'Poulie dans les ateliers d\'artisanat'
            ]
          },
          questions: [
            "Qu'est-ce qu'une poulie?",
            "Quels sont les types de poulies?",
            "Quel est l'avantage d'une poulie mobile?",
            "Comment calcule-t-on l'avantage d'une poulie?",
            "Donne un exemple de poulie en Mauritanie"
          ],
          exercises: [
            {
              type: 'types',
              question: 'Classe ces poulies: poulie de puits, système de levage, grue complexe',
              answer: 'Fixe: poulie de puits. Mobile: système de levage. Composée: grue complexe'
            },
            {
              type: 'calcul',
              question: 'Un système a 2 poulies mobiles. Quel est son avantage mécanique?',
              answer: 'Avantage = 2 × 2 = 4 (on peut soulever 4 fois plus lourd)'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch5-s4',
          title: 'Le plan incliné et la vis',
          description: 'Comprendre le plan incliné et la vis comme machines simples',
          concepts: ['Plan incliné', 'Vis', 'Inclinaison', 'Hélice', 'Filetage'],
          objectives: [
            'Comprendre le fonctionnement du plan incliné',
            'Identifier la vis comme plan incliné enroulé',
            'Calculer l\'avantage mécanique'
          ],
          content: {
            plan_incline: {
              definition: 'Surface inclinée pour monter des charges',
              avantage: 'Réduit la force nécessaire mais augmente la distance',
              calcul: 'Avantage = Longueur ÷ Hauteur',
              exemples: 'Rampe, escalier, toboggan'
            },
            vis: {
              definition: 'Plan incliné enroulé autour d\'un cylindre',
              parties: 'Tête, tige, filetage, pointe',
              avantage: 'Très grand avantage mécanique',
              exemples: 'Vis de fixation, tire-bouchon, pressoir'
            },
            avantages: {
              force: 'Réduit considérablement la force nécessaire',
              precision: 'Permet un mouvement très précis',
              maintien: 'Maintient fermement les pièces assemblées',
              multiplication: 'Multiplie la force appliquée'
            },
            exemples: {
              plan_incline: 'Rampe pour fauteuil roulant, escalier',
              vis: 'Vis de meuble, tire-bouchon, pressoir à vis',
              applications: 'Construction, mécanique, cuisine'
            },
            mauritanianContext: [
              'Rampes d\'accès aux bâtiments',
              'Escaliers des maisons traditionnelles',
              'Vis pour assembler les meubles',
              'Tire-bouchon pour les bouteilles',
              'Pressoir traditionnel à vis'
            ]
          },
          questions: [
            "Qu'est-ce qu'un plan incliné?",
            "Comment fonctionne une vis?",
            "Quel est l'avantage du plan incliné?",
            "Donne un exemple de vis",
            "Donne un exemple de plan incliné en Mauritanie"
          ],
          exercises: [
            {
              type: 'calcul',
              question: 'Une rampe fait 6 m de long et 2 m de haut. Quel est son avantage?',
              answer: 'Avantage = 6 ÷ 2 = 3 (on peut soulever 3 fois plus lourd)'
            },
            {
              type: 'exemples',
              question: 'Donne 3 exemples d\'utilisation de la vis',
              answer: 'Vis de fixation, tire-bouchon, pressoir, etc.'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch5-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer toutes les connaissances sur les machines simples',
          concepts: ['Application', 'Révision', 'Machines', 'Calculs', 'Utilisation'],
          objectives: [
            'Réviser toutes les notions sur les machines simples',
            'Résoudre des problèmes pratiques',
            'Choisir la bonne machine pour une tâche'
          ],
          content: {
            revision: {
              types: 'Levier, poulie, plan incliné, vis',
              avantages: 'Réduction de force, changement de direction',
              calculs: 'Formules d\'avantage mécanique',
              choix: 'Sélectionner la machine appropriée'
            },
            problemes: {
              identification: 'Identifier le type de machine',
              calcul: 'Calculer l\'avantage mécanique',
              choix: 'Choisir la meilleure machine',
              explication: 'Expliquer le fonctionnement'
            },
            exemples: {
              complexe: 'Problème combinant plusieurs machines',
              pratique: 'Application dans la vie quotidienne',
              construction: 'Utilisation dans la construction'
            },
            mauritanianContext: [
              'Machines simples dans la construction',
              'Outils traditionnels mauritaniens',
              'Solutions pratiques pour les travaux',
              'Amélioration de l\'efficacité du travail'
            ]
          },
          questions: [
            "Révise toutes les notions sur les machines simples",
            "Résous ce problème de calcul d'avantage",
            "Choisis la meilleure machine pour cette tâche",
            "Explique le fonctionnement de cette machine",
            "Donne un exemple d'application en Mauritanie"
          ],
          exercises: [
            {
              type: 'probleme',
              question: 'Tu dois soulever une charge de 100 kg à 2 m de haut. Tu as le choix entre une rampe de 8 m et un système de 2 poulies mobiles. Quelle solution nécessite le moins de force?',
              answer: 'Rampe: avantage = 8÷2 = 4. Poulies: avantage = 2×2 = 4. Les deux solutions nécessitent la même force'
            },
            {
              type: 'choix',
              question: 'Pour couper une feuille de papier, quelle machine simple utilises-tu?',
              answer: 'Les ciseaux (levier de 1ère classe)'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        }
      ]
    }
  ]
};

export { YEAR2_SCIENCE_CURRICULUM };
export default YEAR2_SCIENCE_CURRICULUM;
