/**
 * Year 1 Science Curriculum - Mauritanie
 * Complete curriculum content from the official textbook
 */

export const YEAR1_SCIENCE_CURRICULUM = {
  year: 1,
  subject: 'Sciences',
  title: 'Manuel de Sciences 1e AS (Première Année Secondaire) - Mauritanie',
  methodology: 'Approche expérimentale adaptée aux élèves de première année, privilégiant l\'observation et la découverte.',
  
  chapters: [
    {
      id: 'ch1',
      title: 'LES ÊTRES VIVANTS ET LEUR MILIEU',
      sections: [
        {
          id: 'ch1-s1',
          title: 'Qu\'est-ce qu\'un être vivant?',
          description: 'Identifier les critères qui distinguent les êtres vivants du monde minéral',
          concepts: ['Être vivant', 'Critères du vivant', 'Mouvement', 'Alimentation', 'Respiration', 'Reproduction'],
          objectives: [
            'Identifier les 4 critères du vivant',
            'Distinguer vivant et non-vivant',
            'Appliquer les critères à des exemples'
          ],
          content: {
            criteria: {
              movement: {
                definition: 'Capacité à se déplacer ou à bouger',
                examples: ['Animaux qui marchent', 'Plantes qui poussent', 'Mimosa qui se ferme'],
                note: 'Certaines plantes bougent (mimosa), mais c\'est un tropisme'
              },
              nutrition: {
                definition: 'Besoin de se nourrir pour vivre',
                examples: ['Animaux qui mangent', 'Plantes qui absorbent l\'eau', 'Fabrication de nourriture'],
                importance: 'Critère essentiel'
              },
              respiration: {
                definition: 'Échange de gaz avec l\'environnement',
                examples: ['Respiration pulmonaire', 'Respiration cutanée', 'Respiration par les feuilles'],
                note: 'Avec quelques exceptions'
              },
              reproduction: {
                definition: 'Capacité à se reproduire et donner naissance',
                examples: ['Animaux qui ont des petits', 'Plantes qui produisent des graines', 'Multiplication cellulaire'],
                importance: 'Critère fondamental'
              }
            },
            comparison: {
              living: ['Hirondelle', 'Homme', 'Acacia', 'Chacal doré'],
              nonLiving: ['Ordinateur', 'Voiture', 'Pierre', 'Sable']
            },
            mauritanianContext: [
              'La gazelle dorcas dans le désert',
              'L\'acacia raddiana qui résiste à la sécheresse',
              'Le chacal doré qui chasse la nuit',
              'Les poissons du fleuve Sénégal'
            ]
          },
          questions: [
            "Quels sont les 4 critères du vivant?",
            "Un caillou respire-t-il? Vrai ou faux?",
            "Une plante se reproduit-elle? Vrai ou faux?",
            "Un ordinateur se nourrit-il? Vrai ou faux?",
            "Donne un exemple d'être vivant qu'on trouve en Mauritanie"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces éléments: hirondelle, ordinateur, homme, voiture, acacia',
              answer: 'Vivants: hirondelle, homme, acacia | Non-vivants: ordinateur, voiture'
            },
            {
              type: 'criteria',
              question: 'Pourquoi dit-on qu\'un caillou n\'est pas vivant?',
              answer: 'Parce qu\'il ne respire pas, ne se nourrit pas et ne se reproduit pas'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 25
        },
        {
          id: 'ch1-s2',
          title: 'Cellule végétale vs cellule animale',
          description: 'Observer et comparer les cellules végétales et animales au microscope',
          concepts: ['Cellule', 'Membrane', 'Cytoplasme', 'Noyau', 'Paroi', 'Chloroplastes', 'Vacuole'],
          objectives: [
            'Observer des cellules au microscope',
            'Identifier les différences entre cellules végétales et animales',
            'Comprendre les fonctions des organites'
          ],
          content: {
            animalCell: {
              structure: {
                membrane: 'Membrane fine qui entoure la cellule',
                cytoplasm: 'Cytoplasme granuleux avec organites',
                nucleus: 'Noyau central contenant l\'ADN'
              },
              characteristics: [
                'Membrane fine et flexible',
                'Cytoplasme granuleux',
                'Noyau central',
                'Pas de paroi rigide'
              ]
            },
            plantCell: {
              structure: {
                wall: 'Paroi épaisse en cellulose',
                chloroplasts: 'Chloroplastes verts pour la photosynthèse',
                vacuole: 'Vacuole géante remplie d\'eau'
              },
              characteristics: [
                'Paroi épaisse en cellulose',
                'Chloroplastes verts',
                'Vacuole géante',
                'Forme rectangulaire'
              ]
            },
            microscope: {
              magnification: 'Grossissement ×400',
              staining: 'Coloration au bleu de méthylène',
              observation: 'Observer les détails des organites'
            },
            mauritanianContext: [
              'Cellules des feuilles d\'acacia',
              'Cellules des poils absorbants des racines',
              'Cellules des algues du fleuve Sénégal',
              'Cellules des tissus animaux locaux'
            ]
          },
          questions: [
            "Quelle est la différence entre une cellule animale et végétale?",
            "Que contiennent les chloroplastes?",
            "Pourquoi les cellules végétales ont-elles une paroi épaisse?",
            "Comment observe-t-on les cellules?",
            "Peux-tu dessiner une cellule végétale?"
          ],
          exercises: [
            {
              type: 'comparison',
              question: 'Compare la membrane d\'une cellule animale et la paroi d\'une cellule végétale',
              answer: 'Membrane animale: fine et flexible | Paroi végétale: épaisse et rigide'
            },
            {
              type: 'observation',
              question: 'Que vois-tu dans une cellule végétale au microscope?',
              answer: 'Paroi épaisse, chloroplastes verts, vacuole géante, noyau'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch1-s3',
          title: 'Clé de détermination des êtres vivants',
          description: 'Utiliser une clé de détermination pour classer les êtres vivants',
          concepts: ['Classification', 'Clé de détermination', 'Végétal', 'Animal', 'Champignon', 'Caractères'],
          objectives: [
            'Utiliser une clé de détermination',
            'Classer les êtres vivants',
            'Identifier les caractères distinctifs'
          ],
          content: {
            key: {
              step1: {
                question: 'A-t-il des racines?',
                yes: 'Végétal → va à 2',
                no: 'Animal → va à 3'
              },
              step2: {
                question: 'Est-il vert et photosynthétique?',
                yes: 'Plante verte → Classe Magnoliopsida',
                no: 'Champignon'
              },
              step3: {
                question: 'A-t-il des plumes?',
                yes: 'Oiseau',
                no: 'Mammifère / Reptile (suivre branche)'
              }
            },
            examples: {
              plant: 'Acacia raddiana - a des racines, est vert, fait de la photosynthèse',
              animal: 'Gazelle dorcas - pas de racines, a des plumes (non), c\'est un mammifère',
              fungus: 'Champignon du désert - pas de racines, pas vert, c\'est un champignon'
            },
            mauritanianContext: [
              'L\'acacia raddiana (plante du désert)',
              'La gazelle dorcas (mammifère)',
              'Le chacal doré (mammifère)',
              'Les oiseaux migrateurs du PNBA'
            ]
          },
          questions: [
            "Comment utilise-t-on une clé de détermination?",
            "Un acacia a-t-il des racines?",
            "Une gazelle a-t-elle des plumes?",
            "Peux-tu classer un chacal?",
            "Donne un exemple d'utilisation de la clé en Mauritanie"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Utilise la clé pour classer: acacia, gazelle, champignon',
              answer: 'Acacia: végétal | Gazelle: mammifère | Champignon: champignon'
            },
            {
              type: 'key',
              question: 'Que demandes-tu en premier dans la clé?',
              answer: 'A-t-il des racines?'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch1-s4',
          title: 'Réalisation d\'un herbier sahélien',
          description: 'Collecter, sécher et classer des plantes du Sahel mauritanien',
          concepts: ['Herbier', 'Collecte', 'Séchage', 'Classification', 'Étiquetage', 'Conservation'],
          objectives: [
            'Collecter des plantes correctement',
            'Réaliser un herbier',
            'Étiqueter les échantillons'
          ],
          content: {
            equipment: {
              press: '10 journaux + 2 planches + sangles',
              bags: 'Sacs plastique étiquetés',
              notebook: 'Carnet de terrain quadrillé 24×32 cm',
              labels: 'Étiquettes avec informations'
            },
            process: {
              collection: {
                step1: 'Choisir une plante complète (racines, tige, feuilles, fleurs)',
                step2: 'La déterrer délicatement',
                step3: 'La placer dans un sac plastique étiqueté',
                step4: 'Noter le lieu et la date'
              },
              drying: {
                step1: 'Placer la plante entre des journaux',
                step2: 'Serrer avec les planches et sangles',
                step3: 'Laisser sécher 7 jours',
                step4: 'Changer le papier jour 2 et 5'
              },
              labeling: {
                template: 'Nom vernaculaire: __________ | Nom scientifique: __________ | Famille: __________ | Lieu: __________ | Date: __________ | Élève: __________'
              }
            },
            mauritanianSpecies: [
              'Acacia raddiana (gommier)',
              'Panicum turgidum (herbe du désert)',
              'Calotropis procera (pomme de Sodome)',
              'Ziziphus spina-christi (jujubier)'
            ],
            mauritanianContext: [
              'Collecte dans la cour de l\'école',
              'Plantes de la brousse autour de Nouakchott',
              'Végétation du wadi',
              'Espèces du marché traditionnel'
            ]
          },
          questions: [
            "Quel matériel faut-il pour faire un herbier?",
            "Comment collecte-t-on une plante?",
            "Combien de temps faut-il pour sécher?",
            "Que faut-il noter sur l\'étiquette?",
            "Donne un exemple de plante à collecter en Mauritanie"
          ],
          exercises: [
            {
              type: 'process',
              question: 'Décris les étapes de séchage d\'une plante',
              answer: 'Placer entre journaux, serrer avec planches, laisser 7 jours, changer papier'
            },
            {
              type: 'labeling',
              question: 'Que faut-il écrire sur l\'étiquette?',
              answer: 'Nom vernaculaire, nom scientifique, famille, lieu, date, élève'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch1-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur les êtres vivants',
          concepts: ['Application', 'Vrai/Faux', 'Classification', 'Justification', 'Exemples'],
          objectives: [
            'Appliquer les critères du vivant',
            'Justifier ses réponses',
            'Utiliser des exemples concrets'
          ],
          content: {
            exercises: [
              {
                type: 'trueFalse',
                statements: [
                  'Un caillou respire → Faux',
                  'Une plante se reproduit → Vrai',
                  'Un ordinateur se nourrit → Faux',
                  'Un animal bouge → Vrai',
                  'Le sable se reproduit → Faux'
                ]
              },
              {
                type: 'classification',
                items: ['Gazelle', 'Ordinateur', 'Acacia', 'Voiture', 'Chacal'],
                categories: ['Vivants', 'Non-vivants']
              },
              {
                type: 'justification',
                question: 'Pourquoi un caillou n\'est-il pas vivant?',
                answer: 'Il ne respire pas, ne se nourrit pas, ne se reproduit pas'
              }
            ],
            mauritanianContext: [
              'Exemples d\'animaux du désert',
              'Plantes de la brousse',
              'Objets du quotidien',
              'Éléments naturels locaux'
            ]
          },
          questions: [
            "Un caillou respire-t-il? Vrai ou faux?",
            "Une plante se reproduit-elle? Vrai ou faux?",
            "Classe ces éléments: gazelle, ordinateur, acacia",
            "Justifie pourquoi un caillou n\'est pas vivant",
            "Donne un exemple d\'être vivant du désert"
          ],
          exercises: [
            {
              type: 'trueFalse',
              question: 'Un ordinateur se nourrit-il? Vrai ou faux?',
              answer: 'Faux - un ordinateur ne se nourrit pas'
            },
            {
              type: 'classification',
              question: 'Classe: gazelle, ordinateur, acacia',
              answer: 'Vivants: gazelle, acacia | Non-vivant: ordinateur'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch2',
      title: 'FONCTION DE LOCOMOTION CHEZ LES ANIMAUX',
      sections: [
        {
          id: 'ch2-s1',
          title: 'Expérience: Muscle de grenouille',
          description: 'Observer la contraction musculaire et comprendre le mécanisme',
          concepts: ['Muscle', 'Contraction', 'Stimulus', 'Électricité', 'Mesure', 'Calcul'],
          objectives: [
            'Observer la contraction musculaire',
            'Mesurer les variations de longueur',
            'Comprendre le rôle de l\'électricité'
          ],
          content: {
            protocol: {
              step1: 'Préparer jarretière de grenouille fraîche',
              step2: 'Fixer extrémité supérieure à pince métallique',
              step3: 'Attacher fil à l\'extrémité mobile',
              step4: 'Mesurer longueur au repos (L₀)',
              step5: 'Appliquer stimulus électrique 5V',
              step6: 'Mesurer longueur en contraction (L₁)'
            },
            calculation: {
              formula: 'Raccourcissement = (L₀ - L₁)/L₀ × 100%',
              example: 'Si L₀ = 5cm et L₁ = 4cm, raccourcissement = (5-4)/5 × 100 = 20%'
            },
            observations: [
              'Le muscle se raccourcit sous l\'effet du courant',
              'La contraction est visible et mesurable',
              'Le muscle revient à sa longueur initiale',
              'L\'intensité du stimulus influence la contraction'
            ],
            mauritanianContext: [
              'Muscles des animaux du désert',
              'Contraction des pattes de sauterelles',
              'Mouvement des poissons du fleuve',
              'Locomotion des reptiles locaux'
            ]
          },
          questions: [
            "Que se passe-t-il quand on applique un courant au muscle?",
            "Comment calcule-t-on le raccourcissement?",
            "Pourquoi le muscle se contracte-t-il?",
            "Que mesure-t-on dans cette expérience?",
            "Donne un exemple de contraction musculaire en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule le raccourcissement si L₀ = 6cm et L₁ = 4,5cm',
              answer: 'Raccourcissement = (6-4,5)/6 × 100 = 25%'
            },
            {
              type: 'observation',
              question: 'Que observes-tu quand le muscle se contracte?',
              answer: 'Le muscle se raccourcit et devient plus épais'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s2',
          title: 'Adaptations des pattes pour la locomotion',
          description: 'Comparer les différents types de pattes et leurs adaptations',
          concepts: ['Plantigrade', 'Digitigrade', 'Unguligrade', 'Adaptation', 'Vitesse', 'Surface d\'appui'],
          objectives: [
            'Identifier les types de pattes',
            'Comprendre les adaptations',
            'Relier forme et fonction'
          ],
          content: {
            types: {
              plantigrade: {
                definition: 'Marche sur toute la plante du pied',
                examples: ['Homme', 'Ours', 'Rat'],
                characteristics: ['5 doigts', 'Surface d\'appui totale', 'Vitesse modérée'],
                speed: '10 km/h maximum'
              },
              digitigrade: {
                definition: 'Marche sur les doigts seulement',
                examples: ['Chien', 'Chat', 'Lion'],
                characteristics: ['4 doigts', 'Surface d\'appui réduite', 'Vitesse élevée'],
                speed: '50 km/h maximum'
              },
              unguligrade: {
                definition: 'Marche sur un seul doigt (sabot)',
                examples: ['Cheval', 'Antilope', 'Gazelle'],
                characteristics: ['1 doigt', 'Sabot unique', 'Vitesse très élevée'],
                speed: '70 km/h maximum'
              }
            },
            comparison: {
              table: [
                { animal: 'Homme', type: 'Plantigrade', digits: '5', surface: 'Totale plante', speed: '10 km/h' },
                { animal: 'Chien', type: 'Digitigrade', digits: '4', surface: 'Doigts seulement', speed: '50 km/h' },
                { animal: 'Cheval', type: 'Unguligrade', digits: '1', surface: 'Sabot unique', speed: '70 km/h' }
              ]
            },
            mauritanianContext: [
              'La gazelle dorcas (unguligrade)',
              'Le chacal doré (digitigrade)',
              'L\'homme mauritanien (plantigrade)',
              'Les animaux domestiques locaux'
            ]
          },
          questions: [
            "Quels sont les trois types de pattes?",
            "Quelle est la différence entre plantigrade et digitigrade?",
            "Pourquoi les gazelles courent-elles si vite?",
            "Comment reconnaître un animal unguligrade?",
            "Donne un exemple de chaque type en Mauritanie"
          ],
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces animaux: homme, chien, cheval, gazelle',
              answer: 'Plantigrade: homme | Digitigrade: chien | Unguligrade: cheval, gazelle'
            },
            {
              type: 'adaptation',
              question: 'Pourquoi les gazelles ont-elles des sabots?',
              answer: 'Pour courir très vite dans le désert'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch2-s3',
          title: 'Le vol chez les oiseaux',
          description: 'Comprendre l\'anatomie et le mécanisme du vol',
          concepts: ['Vol', 'Aile', 'Plume', 'Os', 'Muscle', 'Aérodynamique'],
          objectives: [
            'Identifier les structures de l\'aile',
            'Comprendre le mécanisme du vol',
            'Relier anatomie et fonction'
          ],
          content: {
            wingStructure: {
              feathers: {
                primary: 'Plumes primaires (10) - propulsion',
                secondary: 'Plumes secondaires (20) - portance',
                tertiary: 'Plumes tertiaires (14) - stabilisation'
              },
              bones: {
                humerus: 'Os du bras - articulation principale',
                radius: 'Os de l\'avant-bras - support',
                ulna: 'Os de l\'avant-bras - attache des plumes',
                carpus: 'Os du poignet - articulation',
                metacarpus: 'Os de la main - support des plumes'
              },
              muscles: {
                pectoral: 'Muscle pectoral - descente de l\'aile',
                supracoracoide: 'Muscle supracoracoïde - montée de l\'aile'
              }
            },
            flightMechanism: {
              downstroke: 'Descente de l\'aile - propulsion vers l\'avant',
              upstroke: 'Montée de l\'aile - préparation du cycle',
              lift: 'Portance créée par la forme de l\'aile',
              thrust: 'Poussée créée par le mouvement'
            },
            mauritanianContext: [
              'Oiseaux migrateurs du PNBA',
              'Flamants roses du Banc d\'Arguin',
              'Pélicans du delta du Sénégal',
              'Oiseaux de proie du désert'
            ]
          },
          questions: [
            "Quelles sont les parties principales de l\'aile?",
            "Comment l\'oiseau vole-t-il?",
            "Quel muscle fait descendre l\'aile?",
            "Pourquoi les plumes sont-elles importantes?",
            "Donne un exemple d\'oiseau qu\'on voit en Mauritanie"
          ],
          exercises: [
            {
              type: 'anatomy',
              question: 'Nomme les os principaux de l\'aile',
              answer: 'Humérus, radius, ulna, carpe, métacarpe'
            },
            {
              type: 'mechanism',
              question: 'Comment l\'oiseau crée-t-il la portance?',
              answer: 'Par la forme de l\'aile et le mouvement des plumes'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch2-s4',
          title: 'La nage chez les poissons',
          description: 'Observer et comprendre la locomotion aquatique',
          concepts: ['Nage', 'Nageoire', 'Propulsion', 'Stabilisation', 'Hydrodynamique'],
          objectives: [
            'Identifier les nageoires',
            'Comprendre leur rôle',
            'Observer la nage'
          ],
          content: {
            species: {
              name: 'Tilapia guineensis',
              habitat: 'Eaux douces du fleuve Sénégal',
              characteristics: 'Poisson omnivore, résistant à la salinité'
            },
            fins: {
              caudal: {
                shape: 'Échancrée',
                surface: '25% de la surface du corps',
                function: 'Propulsion principale'
              },
              paired: {
                pectoral: 'Stabilisation et direction',
                pelvic: 'Équilibre et freinage'
              },
              unpaired: {
                dorsal: 'Stabilisation latérale',
                anal: 'Stabilisation verticale'
              }
            },
            swimming: {
              rhythm: '2 battements par seconde en nage lente',
              mechanism: 'Ondulation du corps et de la queue',
              efficiency: 'Forme hydrodynamique du corps'
            },
            mauritanianContext: [
              'Poissons du fleuve Sénégal',
              'Espèces du delta du Diawling',
              'Poissons du PNBA',
              'Pêche traditionnelle des Imraguen'
            ]
          },
          questions: [
            "Quelle est la nageoire principale pour la nage?",
            "Comment le poisson se propulse-t-il?",
            "Quel est le rythme de nage?",
            "Pourquoi le poisson a-t-il cette forme?",
            "Donne un exemple de poisson qu\'on trouve en Mauritanie"
          ],
          exercises: [
            {
              type: 'anatomy',
              question: 'Quelle nageoire fait 25% de la surface du corps?',
              answer: 'La nageoire caudale'
            },
            {
              type: 'function',
              question: 'À quoi servent les nageoires paires?',
              answer: 'À la stabilisation et à la direction'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch2-s5',
          title: 'Le rampement chez les serpents et lombrics',
          description: 'Comprendre les modes de déplacement par reptation',
          concepts: ['Rampement', 'Reptation', 'Ondulation', 'Écailles', 'Segments', 'Crochets'],
          objectives: [
            'Observer le rampement',
            'Identifier les structures adaptées',
            'Comprendre les mécanismes'
          ],
          content: {
            snake: {
              scales: {
                ventral: '150-200 écailles rectangulaires à arêtes',
                function: 'Accrochage au sol et propulsion'
              },
              movement: {
                type: 'Ondulation latérale',
                mechanism: 'Poussée contre les aspérités du sol',
                example: 'Serpent des sables du désert'
              }
            },
            earthworm: {
              segments: '100-150 anneaux',
              hooks: '8 paires de crochets par segment ventral',
              movement: {
                type: 'Contraction et extension',
                mechanism: 'Alternance de raccourcissement et allongement'
              }
            },
            comparison: {
              snake: 'Ondulation latérale avec écailles',
              earthworm: 'Contraction-extension avec crochets',
              common: 'Déplacement par reptation'
            },
            mauritanianContext: [
              'Serpents des sables du désert',
              'Lombrics des oasis',
              'Reptiles du Sahel',
              'Vers de terre des jardins'
            ]
          },
          questions: [
            "Comment le serpent rampe-t-il?",
            "Combien d\'écailles ventrales a un serpent?",
            "Comment le lombric se déplace-t-il?",
            "Quelle est la différence entre les deux?",
            "Donne un exemple de serpent qu\'on trouve en Mauritanie"
          ],
          exercises: [
            {
              type: 'anatomy',
              question: 'Combien de segments a un lombric?',
              answer: '100-150 anneaux'
            },
            {
              type: 'movement',
              question: 'Comment le serpent des sables se déplace-t-il?',
              answer: 'Par ondulation latérale avec ses écailles ventrales'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        }
      ]
    },
    {
      id: 'ch3',
      title: 'LA NUTRITION DES PLANTES',
      sections: [
        {
          id: 'ch3-s1',
          title: 'Expérience de la photosynthèse',
          description: 'Démontrer la production d\'amidon par les plantes vertes',
          concepts: ['Photosynthèse', 'Amidon', 'Lumière', 'Chlorophylle', 'Test à l\'iode'],
          objectives: [
            'Démontrer la photosynthèse',
            'Utiliser le test à l\'iode',
            'Comprendre le rôle de la lumière'
          ],
          content: {
            material: {
              plants: '2 plants de blé identiques (10 cm)',
              box: 'Boîte noire opaque',
              reagents: 'Eau iodée (Lugol), Alcool 95° pour décoloration'
            },
            protocol: {
              day0: 'Plant A en lumière, Plant B en obscurité',
              day6: 'Observation coloration (A vert, B jaune)',
              day7: 'Test amidon (feuille + Lugol → noir)'
            },
            observations: {
              plantA: 'Reste vert, test amidon positif (noir)',
              plantB: 'Devient jaune, test amidon négatif (pas de noir)',
              conclusion: 'La lumière est nécessaire pour la photosynthèse'
            },
            mauritanianContext: [
              'Plants de blé des champs',
              'Cultures de riz pluvial',
              'Jardins potagers des oasis',
              'Plantes sauvages du Sahel'
            ]
          },
          questions: [
            "Que se passe-t-il avec le plant à la lumière?",
            "Pourquoi le plant à l\'obscurité devient-il jaune?",
            "Comment teste-t-on la présence d\'amidon?",
            "Que prouve cette expérience?",
            "Donne un exemple de plante qu\'on peut utiliser en Mauritanie"
          ],
          exercises: [
            {
              type: 'observation',
              question: 'Que vois-tu après 6 jours?',
              answer: 'Plant A reste vert, plant B devient jaune'
            },
            {
              type: 'test',
              question: 'Comment testes-tu la présence d\'amidon?',
              answer: 'Avec de l\'eau iodée - si c\'est noir, il y a de l\'amidon'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch3-s2',
          title: 'La transpiration des plantes',
          description: 'Mesurer la perte d\'eau par les feuilles',
          concepts: ['Transpiration', 'Perte d\'eau', 'Stomates', 'Évaporation', 'Mesure'],
          objectives: [
            'Mesurer la transpiration',
            'Comprendre le rôle des stomates',
            'Comparer les conditions'
          ],
          content: {
            material: {
              plants: '2 plants Pelargonium',
              bags: 'Sacs plastique transparents',
              balance: 'Balance 0,1 g'
            },
            protocol: {
              plantA: 'Feuilles intactes',
              plantB: 'Feuilles sectionnées',
              measurement: 'Masse initiale (m₀) et après 24h (m₁)',
              calculation: 'Perte eau = m₀ - m₁ (en g/h)'
            },
            results: {
              plantA: 'Perte d\'eau importante par les stomates',
              plantB: 'Perte d\'eau réduite (pas de stomates)',
              conclusion: 'Les stomates permettent la transpiration'
            },
            mauritanianContext: [
              'Plantes des jardins de Nouakchott',
              'Arbres des oasis',
              'Cultures irriguées',
              'Plantes sauvages du désert'
            ]
          },
          questions: [
            "Qu\'est-ce que la transpiration?",
            "Comment mesure-t-on la perte d\'eau?",
            "Pourquoi le plant avec feuilles perd-il plus d\'eau?",
            "Où se trouvent les stomates?",
            "Donne un exemple de plante qu\'on peut utiliser en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule la perte d\'eau si m₀ = 50g et m₁ = 48g',
              answer: 'Perte = 50 - 48 = 2g en 24h'
            },
            {
              type: 'explanation',
              question: 'Pourquoi les stomates sont-ils importants?',
              answer: 'Ils permettent la transpiration et les échanges gazeux'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch3-s3',
          title: 'Organes et fonctions de la plante',
          description: 'Étudier la structure et le rôle de chaque organe',
          concepts: ['Racine', 'Tige', 'Feuille', 'Absorption', 'Transport', 'Photosynthèse'],
          objectives: [
            'Identifier les organes',
            'Comprendre leurs fonctions',
            'Observer les structures'
          ],
          content: {
            root: {
              function: 'Absorption de l\'eau et des sels minéraux',
              structure: 'Poils absorbants observés au ×400',
              experiment: 'Coloration rouge Congo',
              observation: 'Poils absorbants colorés en rouge'
            },
            stem: {
              function: 'Transport de la sève',
              structure: 'Vaisseaux xylème et phloème',
              experiment: 'Section colorée au carmin',
              observation: 'Vaisseaux conducteurs visibles'
            },
            leaf: {
              function: 'Photosynthèse et respiration',
              structure: 'Stomates sur la face inférieure',
              experiment: 'Test à la gélatine chloral',
              observation: 'Stomates en forme de haricot'
            },
            mauritanianContext: [
              'Racines de l\'acacia raddiana',
              'Tiges des plantes de mil',
              'Feuilles des arbres fruitiers',
              'Plantes des jardins potagers'
            ]
          },
          questions: [
            "Quelle est la fonction de la racine?",
            "Comment observe-t-on les poils absorbants?",
            "Que transporte la tige?",
            "Où se trouvent les stomates?",
            "Donne un exemple de chaque organe en Mauritanie"
          ],
          exercises: [
            {
              type: 'function',
              question: 'Quelle est la fonction des feuilles?',
              answer: 'Photosynthèse et respiration'
            },
            {
              type: 'observation',
              question: 'Que vois-tu au microscope dans une racine?',
              answer: 'Les poils absorbants colorés en rouge'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch3-s4',
          title: 'Culture du riz en Mauritanie',
          description: 'Appliquer les connaissances à la culture locale',
          concepts: ['Culture', 'Riz', 'Cycle', 'Irrigation', 'Rendement', 'Techniques'],
          objectives: [
            'Comprendre la culture du riz',
            'Appliquer les connaissances',
            'Relier théorie et pratique'
          ],
          content: {
            variety: {
              name: 'Oryza glaberrima (riz pluvial)',
              characteristics: 'Variété locale adaptée au climat',
              resistance: 'Résistant à la sécheresse'
            },
            cycle: {
              duration: '120 jours',
              sowing: 'Juin-juillet (saison des pluies)',
              harvest: 'Octobre-novembre',
              water: '800 mm/an (irrigation par marigot)'
            },
            techniques: {
              preparation: 'Préparation du sol en avril-mai',
              irrigation: 'Irrigation par marigot (canal traditionnel)',
              maintenance: 'Désherbage et surveillance',
              harvest: 'Récolte manuelle en octobre'
            },
            mauritanianContext: [
              'Riziculture du delta du Sénégal',
              'Techniques traditionnelles',
              'Irrigation par marigot',
              'Rendements locaux'
            ]
          },
          questions: [
            "Quelle variété de riz cultive-t-on en Mauritanie?",
            "Quand sème-t-on le riz?",
            "Comment irrigue-t-on les rizières?",
            "Combien de temps dure le cycle?",
            "Donne un exemple de technique utilisée en Mauritanie"
          ],
          exercises: [
            {
              type: 'cycle',
              question: 'Décris le cycle de culture du riz',
              answer: 'Semis juin-juillet, croissance 120 jours, récolte octobre-novembre'
            },
            {
              type: 'technique',
              question: 'Comment irrigue-t-on les rizières?',
              answer: 'Par marigot (canal traditionnel)'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 25
        },
        {
          id: 'ch3-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur la nutrition des plantes',
          concepts: ['Application', 'Photosynthèse', 'Transpiration', 'Organes', 'Culture'],
          objectives: [
            'Appliquer les connaissances',
            'Résoudre des problèmes',
            'Utiliser des exemples concrets'
          ],
          content: {
            exercises: [
              {
                type: 'photosynthesis',
                question: 'Pourquoi une plante devient-elle jaune à l\'obscurité?',
                answer: 'Parce qu\'elle ne peut plus faire de photosynthèse'
              },
              {
                type: 'transpiration',
                question: 'Comment une plante perd-elle de l\'eau?',
                answer: 'Par les stomates des feuilles (transpiration)'
              },
              {
                type: 'organs',
                question: 'Quel organe absorbe l\'eau?',
                answer: 'La racine avec ses poils absorbants'
              }
            ],
            mauritanianContext: [
              'Problèmes de culture locale',
              'Techniques agricoles',
              'Plantes du Sahel',
              'Irrigation traditionnelle'
            ]
          },
          questions: [
            "Pourquoi une plante devient-elle jaune à l\'obscurité?",
            "Comment une plante perd-elle de l\'eau?",
            "Quel organe absorbe l\'eau?",
            "Comment cultive-t-on le riz?",
            "Donne un exemple d\'application en Mauritanie"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Que se passe-t-il si on coupe les feuilles d\'une plante?',
              answer: 'Elle ne peut plus faire de photosynthèse et meurt'
            },
            {
              type: 'application',
              question: 'Comment améliorer la culture du riz?',
              answer: 'Bien irriguer, désherber, surveiller les maladies'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch4',
      title: 'LA NUTRITION CHEZ LES ANIMAUX',
      sections: [
        {
          id: 'ch4-s1',
          title: 'Dissection de la souris - Procédure pas-à-pas',
          description: 'Observer l\'anatomie interne d\'un mammifère',
          concepts: ['Dissection', 'Anatomie', 'Tube digestif', 'Organes', 'Sexe', 'Mesure'],
          objectives: [
            'Identifier le sexe de l\'animal',
            'Observer le tube digestif',
            'Mesurer les organes'
          ],
          content: {
            identification: {
              female: {
                characteristics: '5 paires de mamelles ventrales',
                location: 'Ventre de l\'animal',
                function: 'Allaitement des petits'
              },
              male: {
                characteristics: 'Testicules externes',
                location: 'Périnée',
                function: 'Production de spermatozoïdes'
              }
            },
            dissection: {
              step1: 'Identifier le sexe de l\'animal',
              step2: 'Ouvrir la cavité abdominale',
              step3: 'Observer le tube digestif',
              step4: 'Mesurer la longueur de l\'intestin'
            },
            measurements: {
              intestine: '≈ 4× longueur du corps',
              example: 'Souris de 10cm → intestin de 40cm',
              reason: 'Adaptation au régime alimentaire'
            },
            mauritanianContext: [
              'Souris domestiques de Nouakchott',
              'Petits mammifères du Sahel',
              'Rongeurs des jardins',
              'Animaux de laboratoire locaux'
            ]
          },
          questions: [
            "Comment identifie-t-on le sexe d'une souris?",
            "Quelle est la longueur de l'intestin?",
            "Pourquoi l'intestin est-il si long?",
            "Que trouve-t-on dans le tube digestif?",
            "Donne un exemple d'animal qu'on peut disséquer en Mauritanie"
          ],
          exercises: [
            {
              type: 'identification',
              question: 'Comment reconnais-tu une souris femelle?',
              answer: 'Par les 5 paires de mamelles ventrales'
            },
            {
              type: 'measurement',
              question: 'Calcule la longueur de l\'intestin d\'une souris de 8cm',
              answer: '8 × 4 = 32cm'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch4-s2',
          title: 'Dentition comparée - Planches à compléter',
          description: 'Comparer les dents selon le régime alimentaire',
          concepts: ['Dentition', 'Régime', 'Herbivore', 'Carnivore', 'Omnivore', 'Adaptation'],
          objectives: [
            'Identifier les types de dents',
            'Relier dentition et régime',
            'Comprendre les adaptations'
          ],
          content: {
            herbivore: {
              example: 'Vache',
              incisors: '0/4 (pas d\'incisives supérieures)',
              canines: '0/0 (pas de canines)',
              molars: '6/6 (plates pour broyer)',
              intestine: '40 m (très long)',
              adaptation: 'Broyage des végétaux'
            },
            carnivore: {
              example: 'Lion',
              incisors: '3/3 (petites)',
              canines: '1/1 (longues et pointues)',
              molars: '4/4 (en forme de ciseaux)',
              intestine: '7 m (court)',
              adaptation: 'Déchiquetage de la viande'
            },
            omnivore: {
              example: 'Homme',
              incisors: '2/2 (coupantes)',
              canines: '1/1 (petites)',
              molars: '2/2 + 3/3 (mixtes)',
              intestine: '9 m (moyen)',
              adaptation: 'Alimentation variée'
            },
            mauritanianContext: [
              'Vaches des troupeaux nomades',
              'Chiens errants de Nouakchott',
              'Hommes mauritaniens',
              'Animaux domestiques locaux'
            ]
          },
          questions: [
            "Quelles dents a une vache?",
            "Pourquoi les lions ont-ils de longues canines?",
            "Comment reconnaître un herbivore?",
            "Quelle est la différence entre les régimes?",
            "Donne un exemple de chaque type en Mauritanie"
          ],
          exercises: [
            {
              type: 'comparison',
              question: 'Compare les dents d\'une vache et d\'un lion',
              answer: 'Vache: molaires plates | Lion: canines longues, molaires en ciseaux'
            },
            {
              type: 'adaptation',
              question: 'Pourquoi les herbivores ont-ils un long intestin?',
              answer: 'Pour digérer les végétaux difficiles à assimiler'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch4-s3',
          title: 'Rumination - Cycle complet (4 temps)',
          description: 'Comprendre le processus de digestion des ruminants',
          concepts: ['Rumination', 'Estomac', 'Rumen', 'Réticulum', 'Omasum', 'Abomasum'],
          objectives: [
            'Identifier les 4 compartiments',
            'Comprendre le cycle de rumination',
            'Relier structure et fonction'
          ],
          content: {
            compartments: {
              rumen: {
                function: 'Fermentation microbienne',
                content: 'Bactéries et protozoaires',
                process: 'Décomposition de la cellulose'
              },
              reticulum: {
                function: 'Tri et formation des boulettes',
                content: 'Aliments partiellement digérés',
                process: 'Régurgitation vers la bouche'
              },
              omasum: {
                function: 'Absorption de l\'eau',
                content: 'Liquide et particules fines',
                process: 'Filtrage et concentration'
              },
              abomasum: {
                function: 'Digestion enzymatique',
                content: 'Enzymes digestives',
                process: 'Digestion finale'
              }
            },
            cycle: {
              step1: 'Ingestion → Rumen (fermentation)',
              step2: 'Rumination → Régurgitation et mastication',
              step3: 'Réticulum → Tri des aliments',
              step4: 'Omasum → Absorption eau',
              step5: 'Abomasum → Digestion finale'
            },
            mauritanianContext: [
              'Vaches des troupeaux nomades',
              'Chameaux du désert',
              'Moutons et chèvres',
              'Élevage traditionnel'
            ]
          },
          questions: [
            "Quels sont les 4 compartiments de l'estomac?",
            "Que se passe-t-il dans le rumen?",
            "Pourquoi les ruminants ruminent-ils?",
            "Quel est le rôle du réticulum?",
            "Donne un exemple de ruminant en Mauritanie"
          ],
          exercises: [
            {
              type: 'cycle',
              question: 'Décris les étapes de la rumination',
              answer: 'Ingestion → Rumen → Rumination → Réticulum → Omasum → Abomasum'
            },
            {
              type: 'function',
              question: 'Que font les bactéries dans le rumen?',
              answer: 'Elles décomposent la cellulose des végétaux'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s4',
          title: 'Élevage familial de poules - Manuel complet',
          description: 'Appliquer les connaissances à l\'élevage local',
          concepts: ['Élevage', 'Poulailler', 'Alimentation', 'Maladies', 'Coûts', 'Rentabilité'],
          objectives: [
            'Comprendre l\'élevage de poules',
            'Calculer les coûts',
            'Prévenir les maladies'
          ],
          content: {
            construction: {
              dimensions: '3 m × 2 m × 2 m',
              perches: '30 cm par poule',
              nests: '1 nid pour 4 poules (bois + paille)',
              materials: 'Bois, grillage, tôle'
            },
            feeding: {
              morning: '50 g maïs + 10 g tourteau',
              evening: '20 g mil + herbes fraîches',
              water: 'Eau propre à volonté',
              supplements: 'Coquilles d\'œufs broyées'
            },
            diseases: {
              pox: {
                prevention: 'Vaccin à 6 semaines',
                symptoms: 'Boutons sur la crête',
                treatment: 'Isolation et désinfection'
              },
              coccidiosis: {
                prevention: 'Amprol 25% dans l\'eau',
                symptoms: 'Diarrhée sanglante',
                treatment: 'Antibiotiques et vitamines'
              }
            },
            costs: {
              hen: '1000 UM (poule pondeuse)',
              monthly_food: '250 UM × 30 = 7500 UM',
              daily_eggs: '12 × 20 UM = 240 UM/jour',
              profit: '240 × 30 - 7500 = -300 UM/mois (déficit)'
            },
            mauritanianContext: [
              'Élevage familial à Nouakchott',
              'Poulaillers des quartiers',
              'Marchés aux volailles',
              'Techniques traditionnelles'
            ]
          },
          questions: [
            "Quelles sont les dimensions d'un poulailler?",
            "Comment nourrit-on les poules?",
            "Quelles maladies peuvent les atteindre?",
            "Comment calcule-t-on les coûts?",
            "Donne un exemple d'élevage en Mauritanie"
          ],
          exercises: [
            {
              type: 'construction',
              question: 'Combien de poules peut-on élever dans un poulailler 3×2×2?',
              answer: 'Environ 20 poules (30 cm par poule)'
            },
            {
              type: 'calculation',
              question: 'Calcule le profit mensuel avec 12 œufs/jour à 20 UM',
              answer: '12 × 20 × 30 = 7200 UM - 7500 UM = -300 UM (déficit)'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch4-s5',
          title: 'Exercices d\'application',
          description: 'Appliquer les connaissances sur la nutrition animale',
          concepts: ['Application', 'Digestion', 'Régime', 'Élevage', 'Calculs'],
          objectives: [
            'Appliquer les connaissances',
            'Résoudre des problèmes pratiques',
            'Utiliser des exemples concrets'
          ],
          content: {
            exercises: [
              {
                type: 'digestion',
                question: 'Pourquoi les herbivores ont-ils un long intestin?',
                answer: 'Pour digérer les végétaux difficiles à assimiler'
              },
              {
                type: 'dentition',
                question: 'Comment reconnaître un carnivore?',
                answer: 'Par ses longues canines et ses molaires en ciseaux'
              },
              {
                type: 'rumination',
                question: 'Que se passe-t-il dans le rumen?',
                answer: 'Fermentation microbienne de la cellulose'
              }
            ],
            mauritanianContext: [
              'Problèmes d\'élevage local',
              'Techniques traditionnelles',
              'Animaux domestiques',
              'Calculs de rentabilité'
            ]
          },
          questions: [
            "Pourquoi les herbivores ont-ils un long intestin?",
            "Comment reconnaître un carnivore?",
            "Que se passe-t-il dans le rumen?",
            "Comment calcule-t-on la rentabilité?",
            "Donne un exemple d'application en Mauritanie"
          ],
          exercises: [
            {
              type: 'problem',
              question: 'Que se passe-t-il si une vache ne rumine pas?',
              answer: 'Elle ne peut pas digérer correctement et tombe malade'
            },
            {
              type: 'application',
              question: 'Comment améliorer l\'élevage de poules?',
              answer: 'Bien nourrir, vacciner, nettoyer, surveiller les maladies'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch5',
      title: 'L\'ÉCOSYSTÈME',
      sections: [
        {
          id: 'ch5-s1',
          title: 'Carte des zones humides - Localisation précise',
          description: 'Identifier et localiser les écosystèmes mauritaniens',
          concepts: ['Écosystème', 'Zone humide', 'Biodiversité', 'Conservation', 'Coordonnées'],
          objectives: [
            'Localiser les zones humides',
            'Identifier les espèces emblématiques',
            'Comprendre l\'importance écologique'
          ],
          content: {
            pnba: {
              name: 'Parc National du Banc d\'Arguin',
              coordinates: '20°50′N 16°30′W',
              area: '12 000 km²',
              species: [
                'Flamant rose (Phoenicopterus roseus)',
                'Pélican blanc (Pelecanus onocrotalus)',
                'Dauphin à bosse (Sousa teuszii)',
                'Gazelle dorcas (Gazella dorcas)'
              ],
              importance: 'Site Ramsar, réserve de biosphère UNESCO'
            },
            diawling: {
              name: 'Parc National de Diawling',
              coordinates: '16°30′N 16°10′W',
              objectives: 'Restauration du delta du Sénégal',
              species: [
                'Oiseaux migrateurs',
                'Poissons d\'eau douce',
                'Mangroves',
                'Crocodiles du Nil'
              ],
              importance: 'Zone humide d\'importance internationale'
            },
            mauritanianContext: [
              'Côtes atlantiques',
              'Delta du Sénégal',
              'Oasis du désert',
              'Zones humides saisonnières'
            ]
          },
          questions: [
            "Où se trouve le PNBA?",
            "Quelles espèces trouve-t-on au PNBA?",
            "Quel est l'objectif du parc de Diawling?",
            "Pourquoi ces zones sont-elles importantes?",
            "Donne un exemple de zone humide en Mauritanie"
          ],
          exercises: [
            {
              type: 'localization',
              question: 'Quelles sont les coordonnées du PNBA?',
              answer: '20°50′N 16°30′W'
            },
            {
              type: 'species',
              question: 'Nomme 3 espèces du PNBA',
              answer: 'Flamant rose, pélican blanc, dauphin à bosse'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch5-s2',
          title: 'Facteurs climatiques - Données brutes',
          description: 'Analyser les données climatiques mauritaniennes',
          concepts: ['Climat', 'Précipitations', 'Température', 'Sécheresse', 'Variabilité'],
          objectives: [
            'Analyser les données climatiques',
            'Comprendre la variabilité',
            'Relier climat et écosystèmes'
          ],
          content: {
            stations: {
              nema: {
                location: 'Sud-est du pays',
                average: '249 mm/an',
                years: '1992-2000',
                variability: 'Très variable (136-445 mm)',
                ecosystem: 'Sahel, savane arborée'
              },
              atar: {
                location: 'Nord du pays',
                average: '65 mm/an',
                years: '1992-2000',
                variability: 'Faible (24-146 mm)',
                ecosystem: 'Désert, erg'
              }
            },
            analysis: {
              nema: 'Climat sahélien, pluies irrégulières',
              atar: 'Climat désertique, très sec',
              conclusion: 'Gradient climatique nord-sud'
            },
            mauritanianContext: [
              'Sécheresses des années 70-80',
              'Variabilité des pluies',
              'Impact sur l\'agriculture',
              'Adaptation des populations'
            ]
          },
          questions: [
            "Quelle est la pluviométrie moyenne à Néma?",
            "Pourquoi Atar est-il plus sec que Néma?",
            "Comment varie la pluviométrie?",
            "Quel impact sur les écosystèmes?",
            "Donne un exemple de variabilité en Mauritanie"
          ],
          exercises: [
            {
              type: 'calculation',
              question: 'Calcule la moyenne des pluies à Néma',
              answer: '(136+179+445+304+200+165+172+415+227)/9 = 249 mm'
            },
            {
              type: 'analysis',
              question: 'Pourquoi la pluviométrie varie-t-elle?',
              answer: 'À cause des changements climatiques et de la mousson'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch5-s3',
          title: 'Expérience sol - Protocole complet',
          description: 'Comparer la perméabilité des sols',
          concepts: ['Sol', 'Perméabilité', 'Sable', 'Argile', 'Eau', 'Expérience'],
          objectives: [
            'Comparer la perméabilité',
            'Comprendre les propriétés du sol',
            'Relier structure et fonction'
          ],
          content: {
            objective: 'Comparer perméabilité sable vs argile',
            material: {
              bottles: '2 bouteilles plastiques 1,5 L',
              sand: 'Sable de dune',
              clay: 'Argile de wadi',
              timer: 'Chronomètre'
            },
            protocol: {
              step1: 'Percer 5 trous Ø 3 mm dans le fond de la bouteille A',
              step2: 'Verser 200 ml d\'eau',
              step3: 'Mesurer le temps d\'écoulement',
              step4: 'Répéter avec l\'argile'
            },
            results: {
              sand: '32 secondes (permeable)',
              clay: '90 secondes (peu permeable)',
              conclusion: 'Le sable laisse passer l\'eau plus facilement'
            },
            mauritanianContext: [
              'Sables des dunes du désert',
              'Argiles des wadis',
              'Sols des jardins',
              'Problèmes d\'irrigation'
            ]
          },
          questions: [
            "Quel sol laisse passer l'eau plus facilement?",
            "Pourquoi l'argile est-elle moins perméable?",
            "Comment mesure-t-on la perméabilité?",
            "Quel impact sur l'agriculture?",
            "Donne un exemple de sol en Mauritanie"
          ],
          exercises: [
            {
              type: 'experiment',
              question: 'Décris le protocole de l\'expérience',
              answer: 'Percer trous, verser eau, mesurer temps d\'écoulement'
            },
            {
              type: 'explanation',
              question: 'Pourquoi le sable est-il plus perméable?',
              answer: 'Parce qu\'il a des espaces plus grands entre les particules'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch5-s4',
          title: 'Chaîne alimentaire sahélienne - Schéma annoté',
          description: 'Comprendre les relations trophiques dans l\'écosystème',
          concepts: ['Chaîne alimentaire', 'Producteur', 'Consommateur', 'Décomposeur', 'Énergie'],
          objectives: [
            'Identifier les niveaux trophiques',
            'Comprendre le flux d\'énergie',
            'Relier les espèces'
          ],
          content: {
            chain: {
              producer: 'Herbes (Panicum turgidum)',
              primary_consumer: 'Gazelle dorcas (Gazella dorcas)',
              secondary_consumer: 'Chacal doré (Canis aureus)',
              decomposer: 'Bactéries et champignons'
            },
            relationships: {
              grass_to_gazelle: 'Consommation (herbivorie)',
              gazelle_to_jackal: 'Prédation (carnivorie)',
              all_to_bacteria: 'Décomposition (recyclage)'
            },
            energy: {
              flow: 'Soleil → Herbes → Gazelle → Chacal → Bactéries',
              loss: '90% d\'énergie perdue à chaque niveau',
              efficiency: '10% d\'efficacité énergétique'
            },
            mauritanianContext: [
              'Écosystème du Sahel',
              'Espèces emblématiques',
              'Relations naturelles',
              'Équilibre écologique'
            ]
          },
          questions: [
            "Qui mange qui dans la chaîne alimentaire?",
            "D'où vient l'énergie?",
            "Que deviennent les déchets?",
            "Pourquoi y a-t-il moins de prédateurs?",
            "Donne un exemple de chaîne en Mauritanie"
          ],
          exercises: [
            {
              type: 'chain',
              question: 'Décris la chaîne alimentaire sahélienne',
              answer: 'Herbes → Gazelle → Chacal → Bactéries'
            },
            {
              type: 'energy',
              question: 'Pourquoi y a-t-il moins de prédateurs?',
              answer: 'Parce que 90% d\'énergie est perdue à chaque niveau'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch5-s5',
          title: 'Projet de classe - Création mini-réserve',
          description: 'Appliquer les connaissances à un projet concret',
          concepts: ['Projet', 'Réserve', 'Biodiversité', 'Conservation', 'Suivi'],
          objectives: [
            'Créer une mini-réserve',
            'Suivre la biodiversité',
            'Communiquer les résultats'
          ],
          content: {
            steps: {
              step1: {
                title: 'Diagnostic',
                description: 'Inventaire des espèces (élèves en groupes de 4)',
                duration: '1 semaine',
                tools: 'Carnet de terrain, loupe, appareil photo'
              },
              step2: {
                title: 'Aménagement',
                description: '2 m² clôturés grillage 1 m',
                elements: [
                  'Bassin d\'eau 30 cm profond',
                  'Plantes locales transplantées',
                  'Abris pour les animaux',
                  'Zone d\'observation'
                ]
              },
              step3: {
                title: 'Suivi',
                description: 'Relevé mensuel de biodiversité',
                data: [
                  'Nombre d\'espèces',
                  'Comportements observés',
                  'Changements saisonniers',
                  'Problèmes rencontrés'
                ]
              },
              step4: {
                title: 'Communication',
                description: 'Affiche A3 + présentation orale',
                content: [
                  'Photos avant/après',
                  'Graphiques d\'évolution',
                  'Conclusions',
                  'Recommandations'
                ]
              }
            },
            mauritanianContext: [
              'Cour de l\'école',
              'Espèces locales',
              'Techniques traditionnelles',
              'Participation communautaire'
            ]
          },
          questions: [
            "Quelles sont les étapes du projet?",
            "Comment aménage-t-on la réserve?",
            "Que faut-il observer?",
            "Comment communiquer les résultats?",
            "Donne un exemple de projet en Mauritanie"
          ],
          exercises: [
            {
              type: 'planning',
              question: 'Planifie les étapes de création d\'une mini-réserve',
              answer: 'Diagnostic → Aménagement → Suivi → Communication'
            },
            {
              type: 'observation',
              question: 'Que faut-il noter dans le carnet de terrain?',
              answer: 'Espèces, comportements, changements, problèmes'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 45
        }
      ]
    }
  ]
};

export default YEAR1_SCIENCE_CURRICULUM;
