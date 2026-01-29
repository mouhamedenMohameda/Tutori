/**
 * Year 4 Physics Curriculum - Mauritanie
 * Chapters 1-3: Matériaux, Réactions Chimiques, Préparation Solutions
 */

export const YEAR4_PHYSICS_CURRICULUM = {
  year: 4,
  subject: 'Physique',
  title: 'Manuel de Sciences Physiques 4e AS (Quatrième Année Secondaire) - Mauritanie',
  methodology: 'Approche inductive: Expérience → Observation → Conclusion → Application. Méthode Observer-Expliquer-Appliquer.',
  
  chapters: [
    {
      id: 'ch1',
      title: 'LES MATÉRIAUX',
      sections: [
        {
          id: 'ch1-s1',
          title: 'Classification des matériaux',
          description: 'Découvrir les trois grandes familles',
          concepts: ['Matériaux', 'Classification', 'Propriétés', 'Familles'],
          objectives: [
            'Définir un matériau',
            'Connaître les trois grandes familles',
            'Identifier les propriétés des matériaux',
            'Choisir le matériau adapté'
          ],
          content: {
            definition: 'Substances utilisées pour construction des objets, machines',
            proprietes: {
              physiques: 'Densité, point de fusion, conductivité',
              chimiques: 'Résistance corrosion, réactivité',
              mecaniques: 'Dureté, résistance, élasticité',
              electriques: 'Conducteur ou isolant',
              thermiques: 'Conduction chaleur',
              economiques: 'Prix, disponibilité',
              environnementales: 'Recyclabilité, impact écologique'
            },
            trois_familles: {
              metalliques: {
                definition: 'Métaux et alliages',
                exemples: 'Fer, cuivre, aluminium, or',
                caracteristiques: 'Éclat métallique, conducteurs, déformables'
              },
              organiques: {
                definition: 'Matériaux contenant du carbone',
                origines: {
                  naturelle: 'Bois, charbon, pétrole, laine, coton',
                  synthetique: 'Plastiques, caoutchouc, papier'
                },
                caracteristiques: 'Isolants, combustibles'
              },
              ceramiques: {
                definition: 'Non métalliques, non organiques, obtenus par forte température',
                exemples: 'Terre cuite, porcelaine, verre',
                caracteristiques: 'Durs, fragiles, résistants chaleur'
              }
            },
            demarche_hierarchisation: {
              principe: 'Tests pour classer matériaux selon propriétés',
              methode: 'Comparer avantages et inconvénients',
              objectif: 'Choisir matériau optimal pour usage donné'
            },
            mauritanianContext: [
              'Matériaux construction locale',
              'Métaux mines mauritaniennes',
              'Bois et matériaux naturels',
              'Céramique traditionnelle'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Classe: fer, plastique, terre cuite',
              answer: 'Métallique: fer. Organique: plastique. Céramique: terre cuite',
              difficulty: 'beginner'
            },
            {
              type: 'propriete',
              question: 'Quelle propriété caractérise les métaux?',
              answer: 'Conductivité électrique et thermique, éclat métallique',
              difficulty: 'beginner'
            },
            {
              type: 'choix',
              question: 'Pourquoi choisir aluminium pour avion?',
              answer: 'Léger (densité faible) + résistant',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch1-s2',
          title: 'Matériaux métalliques - Métaux',
          description: 'Étudier les métaux et leurs propriétés',
          concepts: ['Métaux', 'Propriétés', 'Fer', 'Aluminium', 'Cuivre'],
          objectives: [
            'Définir un métal',
            'Connaître les propriétés communes',
            'Identifier les métaux courants',
            'Distinguer les métaux par leurs caractéristiques'
          ],
          content: {
            definition: 'Corps simple caractérisé par éclat particulier, déformabilité, conductivité',
            proprietes_communes: {
              conductivite: 'Très bons conducteurs électricité et chaleur',
              etat: 'Solides à température ordinaire (sauf mercure)',
              deformabilite: {
                malleabilite: 'Peuvent être aplatis en feuilles',
                ductilite: 'Peuvent être étirés en fils'
              },
              eclat: 'Éclat métallique en réfléchissant lumière',
              reactions: 'Attaqués par certaines solutions',
              combustion: 'Ne brûlent pas facilement'
            },
            methodes_differenciation: {
              couleur: {
                or: 'Jaune',
                cuivre: 'Rouge orangé',
                fer: 'Gris',
                aluminium: 'Gris clair'
              },
              corrosion: {
                definition: 'Attaque métal par air humide',
                fer: 'Rouille (oxyde brun)',
                cuivre: 'Vert-de-gris (patine verte)',
                aluminium: 'Couche oxyde protectrice',
                or_argent: 'Non oxydables'
              },
              magnetisme: {
                magnetiques: 'Fer, nickel, cobalt et leurs alliages',
                non_magnetiques: 'Aluminium, cuivre, or, argent',
                test: 'Aimant attire ou non'
              },
              densite: {
                legers: 'Aluminium (2,7 g/cm³)',
                moyens: 'Fer (7,87 g/cm³), Cuivre (8,9 g/cm³)',
                lourds: 'Argent (10,49 g/cm³), Or (21,4 g/cm³)'
              }
            },
            metaux_courants: {
              aluminium: {
                symbole: 'Al',
                masse_volumique: '2,7 g/cm³',
                fusion: '660°C',
                proprietes: 'Léger, résiste corrosion, conducteur, malléable, recyclable 100%',
                utilisations: 'Ustensiles cuisine, carters moteur, emballages, avions'
              },
              fer: {
                symbole: 'Fe',
                masse_volumique: '7,87 g/cm³',
                fusion: '1539°C',
                proprietes: 'Blanc-gris, malléable, magnétique, se corrode (rouille)',
                utilisations: 'Charpentes, armatures béton, rails, ponts, outillage'
              },
              cuivre: {
                symbole: 'Cu',
                masse_volumique: '8,9 g/cm³',
                fusion: '1083°C',
                proprietes: 'Rouge-brun, excellent conducteur, malléable, résiste corrosion',
                utilisations: 'Câbles électriques, canalisations, électronique'
              }
            },
            metaux_precieux: {
              argent: {
                symbole: 'Ag',
                masse_volumique: '10,49 g/cm³',
                fusion: '961,93°C',
                proprietes: 'Blanc, rare, très malléable, meilleur conducteur',
                utilisations: 'Bijouterie, électronique, photographie'
              },
              or: {
                symbole: 'Au',
                masse_volumique: '21,4 g/cm³',
                fusion: '1064,18°C',
                proprietes: 'Jaune, très rare, très lourd, inoxydable, malléable',
                utilisations: 'Bijoux, placages, électronique, monnaies'
              }
            },
            mauritanianContext: [
              'Mines or Mauritanie (Tasiast)',
              'Fer Zouérate',
              'Cuivre Akjoujt',
              'Construction métallique locale'
            ]
          },
          exercises: [
            {
              type: 'propriete',
              question: 'Cite 3 propriétés communes aux métaux',
              answer: 'Conductivité, éclat métallique, déformabilité (malléabilité/ductilité)',
              difficulty: 'beginner'
            },
            {
              type: 'identification',
              question: 'Comment différencier fer et aluminium?',
              answer: 'Fer: magnétique, plus lourd (7,87 vs 2,7). Aluminium: non magnétique, léger',
              difficulty: 'intermediate'
            },
            {
              type: 'utilisation',
              question: 'Pourquoi cuivre pour fils électriques?',
              answer: 'Excellent conducteur électrique, malléable, résiste corrosion',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch1-s3',
          title: 'Alliages métalliques',
          description: 'Comprendre les alliages et leurs avantages',
          concepts: ['Alliage', 'Acier', 'Bronze', 'Laiton', 'Propriétés'],
          objectives: [
            'Définir un alliage',
            'Connaître les principaux alliages',
            'Comprendre l\'amélioration des propriétés',
            'Identifier les utilisations'
          ],
          content: {
            definition: 'Mélange de métaux pour améliorer caractéristiques',
            principe: 'Métaux rarement utilisés purs, mélangés pour optimiser propriétés',
            principaux_alliages: {
              acier: {
                composition: 'Fer + Carbone (0,03% à 2%)',
                proprietes: 'Plus dur que fer pur, résistant',
                types: {
                  acier_doux: 'Carbone < 0,3% (déformable)',
                  acier_dur: 'Carbone > 0,3% (outils)',
                  acier_inoxydable: 'Fer + Chrome (anti-corrosion)'
                },
                utilisations: 'Construction, outils, couverts inox'
              },
              fonte: {
                composition: 'Fer + Carbone (2% à 6%)',
                proprietes: 'Très dur mais fragile (cassant)',
                utilisations: 'Plaques, radiateurs, moteurs, canalisations'
              },
              laiton: {
                composition: 'Cuivre + Zinc',
                proprietes: 'Jaune doré, résiste corrosion, ductile',
                utilisations: 'Robinetterie, instruments musique, décoration'
              },
              bronze: {
                composition: 'Cuivre + Étain',
                proprietes: 'Brun-rouge, résiste usure et corrosion',
                utilisations: 'Statues, cloches, pièces mécaniques, médailles',
                historique: 'Âge du Bronze (antiquité)'
              },
              zamak: {
                composition: 'Aluminium + Zinc',
                proprietes: 'Léger, bon marché, moulable',
                utilisations: 'Poignées, jouets, pièces automobiles'
              }
            },
            avantages_alliages: {
              resistance_mecanique: 'Acier plus dur que fer',
              resistance_corrosion: 'Inox vs fer',
              proprietes_nouvelles: 'Combinaison caractéristiques',
              adaptation_usage: 'Optimisation pour application spécifique'
            },
            mauritanianContext: [
              'Acier construction Mauritanie',
              'Bronze artisanat traditionnel',
              'Alliages industrie locale',
              'Métallurgie mauritanienne'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un alliage?',
              answer: 'Mélange de métaux pour améliorer leurs caractéristiques',
              difficulty: 'beginner'
            },
            {
              type: 'composition',
              question: 'Quelle est la composition de l\'acier?',
              answer: 'Fer + Carbone (0,03% à 2%)',
              difficulty: 'beginner'
            },
            {
              type: 'difference',
              question: 'Différence entre acier et fonte?',
              answer: 'Acier: 0,03-2% C (résistant). Fonte: 2-6% C (dur mais fragile)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch1-s4',
          title: 'Matériaux organiques',
          description: 'Étudier les matériaux carbonés',
          concepts: ['Organiques', 'Carbone', 'Plastiques', 'Combustibles'],
          objectives: [
            'Définir matériau organique',
            'Distinguer naturels et synthétiques',
            'Connaître les types de plastiques',
            'Comprendre les propriétés'
          ],
          content: {
            definition: 'Matériaux contenant du carbone',
            origines: {
              naturelle: {
                exemples: 'Bois, végétaux, charbon, pétrole, laine, soie, cuir, coton',
                caracteristique: 'D\'origine vivante ou fossile'
              },
              synthetique: {
                exemples: 'Papier, carton, caoutchouc, plastiques',
                caracteristique: 'Fabriqués par transformation',
                note: 'Souvent dérivés du pétrole'
              }
            },
            proprietes_physiques: {
              electrique: 'Généralement isolants électriques',
              thermique: 'Mauvais conducteurs de chaleur',
              combustibilite: 'Généralement combustibles',
              legerte: 'Moins denses que métaux',
              variete: 'Très variées selon type'
            },
            plastiques: {
              PVC: {
                nom: 'Polychlorure de vinyle',
                utilisations: 'Gouttières, bouteilles eau minérale, tuyaux'
              },
              PP: {
                nom: 'Polypropylène',
                utilisations: 'Classeurs souples, pots yaourt, emballages'
              },
              PET: {
                nom: 'Polyéthylène téréphtalate',
                utilisations: 'Bouteilles boissons gazeuses',
                recyclage: 'Recyclable'
              },
              PA: {
                nom: 'Polyamide (Nylon)',
                utilisations: 'Tissus, vêtements, cordes'
              },
              PS: {
                nom: 'Polystyrène',
                utilisations: 'Isolant thermique, emballages'
              },
              PC: {
                nom: 'Polycarbonate',
                utilisations: 'Visières, CD/DVD, vitres résistantes'
              }
            },
            dangers_combustion: {
              fumees_toxiques: 'CO₂, CO (mortel), composés toxiques',
              produits_dangereux: 'Dioxines (plastiques chlorés)',
              pollution: 'Particules fines, gaz nocifs',
              precautions: 'Ventilation, ne pas brûler plastiques'
            },
            mauritanianContext: [
              'Plastiques quotidiens',
              'Pollution plastique (déchets)',
              'Bois local (acacia)',
              'Coton et textiles'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un matériau organique?',
              answer: 'Matériau contenant du carbone (naturel ou synthétique)',
              difficulty: 'beginner'
            },
            {
              type: 'propriete',
              question: 'Les plastiques sont conducteurs ou isolants?',
              answer: 'Isolants électriques',
              difficulty: 'beginner'
            },
            {
              type: 'danger',
              question: 'Quels dangers de brûler du plastique?',
              answer: 'Fumées toxiques (CO, dioxines), pollution, risques santé',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch1-s5',
          title: 'Matériaux céramiques',
          description: 'Découvrir les céramiques',
          concepts: ['Céramiques', 'Frittage', 'Terre cuite', 'Applications'],
          objectives: [
            'Définir matériau céramique',
            'Comprendre le procédé de frittage',
            'Connaître les propriétés',
            'Identifier les applications modernes'
          ],
          content: {
            definition: 'Matériaux non métalliques, non organiques, obtenus par fortes températures',
            transformation: 'Irréversible de matière première (argile)',
            procede_frittage: {
              etape1: 'Réduction en poudre du matériau',
              etape2: 'Moulage et compression',
              etape3: 'Chauffage sous température de fusion',
              etape4: 'Grains se soudent',
              etape5: 'Formation de pores (ouverts et fermés)',
              resultat: 'Matériau compact et résistant'
            },
            proprietes: {
              resistance_mecanique: {
                caracteristique: 'Excellente (parfois > métaux)',
                compression: 'Très résistants en compression',
                traction: 'Moins résistants en traction',
                fragilite: 'Cassants (pas de zone plastique)'
              },
              resistance_chimique: 'Résistent acides, bases, corrosion',
              resistance_thermique: {
                fusion: 'Température très élevée (>2000°C)',
                choc_thermique: 'Variable selon type',
                applications: 'Réfractaires'
              },
              electrique: 'Excellents isolants (sauf exceptions)',
              thermique: 'Isolants thermiques',
              biocompatibilite: 'Compatible avec tissus humains'
            },
            exemples: {
              terre_cuite: {
                obtention: 'Cuisson argile',
                propriete: 'Poreuse',
                utilisations: 'Poteries, briques, tuiles, carreaux'
              },
              nitrure_silicium: {
                formule: 'Si₃N₄',
                masse_volumique: '3,17 g/cm³',
                fusion: '1900°C',
                proprietes: 'Très dur, résiste usure/abrasion',
                utilisations: 'Outils de coupe, roulements, moteurs'
              },
              porcelaine: 'Céramique fine (vaisselle, isolateurs)',
              verre: 'Transparent, fragile (fenêtres, bouteilles)'
            },
            applications_modernes: {
              medical: 'Implants dentaires, prothèses osseuses, bridges',
              aeronautique: 'Turbines, chambres combustion',
              environnement: 'Capteurs gaz, catalyseurs, filtres eau',
              energie: 'Bougies allumage, tuiles photovoltaïques',
              transports: 'Freins, filtres particules Diesel'
            },
            mauritanianContext: [
              'Poterie traditionnelle Adrar',
              'Briques terre cuite',
              'Céramique construction',
              'Artisanat mauritanien'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un matériau céramique?',
              answer: 'Matériau non métallique, non organique, obtenu par forte température',
              difficulty: 'beginner'
            },
            {
              type: 'procede',
              question: 'Qu\'est-ce que le frittage?',
              answer: 'Chauffage poudre comprimée → grains se soudent sans fusion complète',
              difficulty: 'intermediate'
            },
            {
              type: 'propriete',
              question: 'Pourquoi céramiques fragiles?',
              answer: 'Pas de zone plastique → cassent sans se déformer',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch2',
      title: 'RÉACTIONS CHIMIQUES',
      sections: [
        {
          id: 'ch2-s1',
          title: 'Atomes, molécules et quantité de matière',
          description: 'Comprendre les constituants de la matière',
          concepts: ['Atome', 'Molécule', 'Masse molaire', 'Mole'],
          objectives: [
            'Définir atome et molécule',
            'Connaître les symboles chimiques',
            'Calculer la masse molaire',
            'Utiliser la formule n = m/M'
          ],
          content: {
            atome: {
              definition: 'Plus petit constituant séparable de la matière',
              element_chimique: 'Famille d\'atomes identiques',
              symbole: '1 ou 2 lettres (majuscule + minuscule)',
              exemples_masse_molaire: {
                hydrogene: 'H (1 g/mol)',
                carbone: 'C (12 g/mol)',
                oxygene: 'O (16 g/mol)',
                azote: 'N (14 g/mol)',
                sodium: 'Na (23 g/mol)',
                magnesium: 'Mg (24 g/mol)',
                fer: 'Fe (56 g/mol)'
              }
            },
            molecule: {
              definition: 'Groupe d\'atomes ≥2 liés entre eux',
              formule_chimique: 'Indique nature et nombre d\'atomes',
              molecules_simples: {
                dioxygene: 'O₂ (32 g/mol)',
                dihydrogene: 'H₂ (2 g/mol)',
                diazote: 'N₂ (28 g/mol)'
              },
              molecules_complexes: {
                eau: 'H₂O (18 g/mol) = 2×1 + 16',
                dioxyde_carbone: 'CO₂ (44 g/mol) = 12 + 2×16',
                butane: 'C₄H₁₀ (58 g/mol) = 4×12 + 10×1',
                oxyde_fer: 'Fe₃O₄ (232 g/mol) = 3×56 + 4×16',
                glucose: 'C₆H₁₂O₆ (180 g/mol) = 6×12 + 12×1 + 6×16'
              }
            },
            quantite_matiere: {
              definition: 'Nombre de moles d\'une substance',
              symbole: 'n',
              unite: 'mole (mol)',
              formule: 'n = m/M',
              avec: {
                n: 'Nombre de moles (mol)',
                m: 'Masse (g)',
                M: 'Masse molaire (g/mol)'
              },
              exemples_calculs: {
                ex1: {
                  donnees: 'm = 36 g eau, M = 18 g/mol',
                  calcul: 'n = 36/18 = 2 mol',
                  interpretation: '2 moles d\'eau'
                },
                ex2: {
                  donnees: 'm = 88 g CO₂, M = 44 g/mol',
                  calcul: 'n = 88/44 = 2 mol',
                  interpretation: '2 moles de CO₂'
                }
              }
            },
            mauritanianContext: [
              'Calculs chimie scolaire',
              'Laboratoire sciences',
              'Formules substances courantes',
              'Chimie quantitative'
            ]
          },
          exercises: [
            {
              type: 'masse_molaire',
              question: 'Calcule masse molaire de H₂O',
              answer: 'M = 2×1 + 16 = 18 g/mol',
              difficulty: 'intermediate'
            },
            {
              type: 'quantite',
              question: '44 g de CO₂. Combien de moles?',
              answer: 'n = 44/44 = 1 mol',
              difficulty: 'intermediate'
            },
            {
              type: 'masse',
              question: '3 moles de O₂. Quelle masse?',
              answer: 'm = n × M = 3 × 32 = 96 g',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch2-s2',
          title: 'Réaction chimique et équation bilan',
          description: 'Comprendre les transformations chimiques',
          concepts: ['Réaction', 'Réactifs', 'Produits', 'Équation', 'Conservation'],
          objectives: [
            'Définir une réaction chimique',
            'Distinguer réactifs et produits',
            'Écrire une équation bilan',
            'Appliquer la conservation'
          ],
          content: {
            reaction_chimique: {
              definition: 'Transformation avec modification des espèces chimiques',
              observation: 'Substances disparaissent, nouvelles apparaissent',
              exemple: 'Papier + dioxygène → cendre + fumée'
            },
            reactifs_produits: {
              reactifs: {
                definition: 'Espèces qui disparaissent',
                position: 'Avant la flèche',
                exemples: 'Carbone, dioxygène (dans combustion)'
              },
              produits: {
                definition: 'Espèces qui apparaissent',
                position: 'Après la flèche',
                exemples: 'Dioxyde de carbone, eau'
              }
            },
            equation_bilan: {
              definition: 'Représentation symbolique de la réaction',
              structure: 'Réactifs → Produits',
              equilibrage: 'Coefficients pour conserver atomes',
              exemple_simple: 'C + O₂ → CO₂'
            },
            lois_conservation: {
              nature_atomes: {
                principe: 'Atomes ne se créent ni se détruisent',
                consequence: 'Mêmes éléments avant et après'
              },
              nombre_atomes: {
                principe: 'Même nombre de chaque type d\'atomes',
                methode: 'Équilibrer l\'équation',
                verification: 'Compter atomes des deux côtés'
              },
              masse: {
                enonce: 'Loi de Lavoisier: "Rien ne se perd, rien ne se crée, tout se transforme"',
                formule: 'Masse_réactifs = Masse_produits',
                application: 'Calculs stœchiométriques'
              }
            },
            mauritanianContext: [
              'Transformations chimiques',
              'Combustion bois (charbon)',
              'Réactions quotidiennes',
              'Chimie appliquée'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Dans C + O₂ → CO₂, quels sont les réactifs?',
              answer: 'Carbone (C) et dioxygène (O₂)',
              difficulty: 'beginner'
            },
            {
              type: 'produit',
              question: 'Quel est le produit de cette réaction?',
              answer: 'Dioxyde de carbone (CO₂)',
              difficulty: 'beginner'
            },
            {
              type: 'loi',
              question: 'Que dit la loi de Lavoisier?',
              answer: 'Rien ne se perd, rien ne se crée, tout se transforme (masse conservée)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s3',
          title: 'Combustion du carbone et du butane',
          description: 'Étudier les combustions courantes',
          concepts: ['Combustion', 'Combustible', 'Comburant', 'Tests'],
          objectives: [
            'Réaliser la combustion du carbone',
            'Réaliser la combustion du butane',
            'Identifier produits formés',
            'Écrire équations équilibrées'
          ],
          content: {
            combustion_carbone: {
              materiel: 'Fusain (carbone), eau de chaux, bocal avec O₂',
              protocole: {
                etape1: 'Allumer le fusain',
                etape2: 'Introduire dans bocal avec dioxygène',
                etape3: 'Observer combustion vive',
                etape4: 'Tester avec eau de chaux'
              },
              observations: {
                combustion: 'Flamme vive, chaleur intense',
                test_chaux: 'Eau de chaux devient blanchâtre (trouble)',
                interpretation: 'CO₂ produit (réagit avec chaux)'
              },
              equation: {
                non_equilibree: 'C + O₂ → CO₂',
                equilibree: 'C + O₂ → CO₂',
                lecture: '1 mole C + 1 mole O₂ → 1 mole CO₂',
                masse: '12 g + 32 g → 44 g'
              },
              definition: {
                combustible: 'Carbone (ce qui brûle)',
                comburant: 'Dioxygène (permet combustion)',
                produit: 'Dioxyde de carbone'
              }
            },
            combustion_butane: {
              materiel: 'Bec Bunsen, butagaz, verre de montre, sulfate cuivre anhydre, eau de chaux',
              protocole: {
                etape1: 'Allumer bec Bunsen',
                etape2: 'Observer flamme bleue (complète)',
                etape3: 'Placer verre froid au-dessus',
                etape4: 'Tester avec sulfate cuivre et chaux'
              },
              observations: {
                flamme_bleue: 'Combustion complète (assez d\'O₂)',
                buee: 'Formation d\'eau (condensation)',
                sulfate_cuivre: 'Devient bleu (preuve eau)',
                eau_chaux: 'Trouble (preuve CO₂)'
              },
              equation: {
                formule: 'C₄H₁₀ + O₂ → CO₂ + H₂O',
                equilibree: 'C₄H₁₀ + 6,5 O₂ → 4 CO₂ + 5 H₂O',
                ou: '2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O',
                lecture: '1 mole butane + 6,5 moles O₂ → 4 moles CO₂ + 5 moles H₂O'
              },
              produits: 'Dioxyde de carbone (CO₂) + Eau (H₂O)'
            },
            combustion_incomplete: {
              cause: 'Manque de dioxygène',
              observations: {
                flamme_jaune: 'Couleur jaune orangée',
                depot_noir: 'Carbone (suie)',
                CO: 'Monoxyde de carbone (TOXIQUE)'
              },
              dangers: {
                monoxyde_carbone: 'Gaz mortel, inodore, invisible',
                symptomes: 'Maux de tête, nausées, mort',
                prevention: 'Ventilation, détecteur CO'
              }
            },
            mauritanianContext: [
              'Charbon de bois (cuisine)',
              'Gaz butane (ménages)',
              'Dangers CO (ventilation)',
              'Combustion traditionnelle'
            ]
          },
          exercises: [
            {
              type: 'equation',
              question: 'Écris équation combustion carbone',
              answer: 'C + O₂ → CO₂',
              difficulty: 'beginner'
            },
            {
              type: 'test',
              question: 'Comment tester présence de CO₂?',
              answer: 'Eau de chaux → devient trouble (blanchâtre)',
              difficulty: 'beginner'
            },
            {
              type: 'danger',
              question: 'Quel danger de combustion incomplète?',
              answer: 'Production CO (monoxyde carbone, gaz mortel)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch2-s4',
          title: 'Combustion du fer et autres réactions',
          description: 'Étudier la combustion des métaux',
          concepts: ['Combustion métaux', 'Oxydation', 'Équations', 'Calculs'],
          objectives: [
            'Réaliser combustion du fer',
            'Écrire équations équilibrées',
            'Calculer masses de produits',
            'Comprendre l\'oxydation'
          ],
          content: {
            combustion_fer: {
              experience: {
                dans_air: 'Fer incandescent mais ne brûle pas',
                dans_oxygene: 'Combustion vive avec étincelles',
                observation: 'Gerbes d\'étincelles spectaculaires'
              },
              produit: {
                nom: 'Oxyde de fer magnétique',
                formule: 'Fe₃O₄',
                masse_molaire: '232 g/mol (3×56 + 4×16)',
                propriete: 'Attiré par aimant'
              },
              equation: {
                formule: '3 Fe + 2 O₂ → Fe₃O₄',
                lecture: '3 moles fer + 2 moles O₂ → 1 mole Fe₃O₄',
                masses: '168 g + 64 g → 232 g',
                verification: '168 + 64 = 232 ✓'
              }
            },
            calculs_stoechiometriques: {
              principe: 'Proportions définies entre réactifs et produits',
              methode: {
                etape1: 'Écrire équation équilibrée',
                etape2: 'Calculer masses molaires',
                etape3: 'Utiliser proportions (règle de trois)',
                etape4: 'Calculer masse cherchée'
              },
              exemple_detaille: {
                question: 'Combien CO₂ si 24 g carbone brûle?',
                equation: 'C + O₂ → CO₂',
                masses_molaires: 'C: 12 g/mol, CO₂: 44 g/mol',
                proportion: '12 g C → 44 g CO₂',
                calcul: '24 g C → (24×44)/12 = 88 g CO₂',
                reponse: '88 g de CO₂ formé'
              }
            },
            dangers_tabac: {
              statistique: 'Une personne meurt toutes les 8 secondes',
              composition: '4000 composés chimiques dont 43 cancérigènes',
              substances_toxiques: [
                'Monoxyde de carbone (CO)',
                'Nicotine',
                'Arsenic',
                'Cadmium',
                'Polonium (radioactif)',
                'DDT',
                'Acide cyanhydrique'
              ],
              effets_arret: {
                '24h': 'Élimination résidus fumée',
                '9_mois': 'Réduction problèmes respiratoires',
                '10_ans': 'Risque cancer divisé par 2'
              }
            },
            mauritanianContext: [
              'Combustion métaux (soudure)',
              'Oxydation fer (rouille)',
              'Prévention tabac',
              'Chimie pratique'
            ]
          },
          exercises: [
            {
              type: 'equation',
              question: 'Équation combustion fer',
              answer: '3 Fe + 2 O₂ → Fe₃O₄',
              difficulty: 'intermediate'
            },
            {
              type: 'calcul',
              question: '12 g carbone brûlent. Masse CO₂?',
              answer: 'm = (12×44)/12 = 44 g CO₂',
              difficulty: 'intermediate'
            },
            {
              type: 'propriete',
              question: 'Comment reconnaître Fe₃O₄?',
              answer: 'Attiré par un aimant (magnétique)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch2-s5',
          title: 'Sécurité et prévention',
          description: 'Dangers des réactions et précautions',
          concepts: ['Sécurité', 'Combustion', 'Extinction', 'Prévention'],
          objectives: [
            'Connaître les dangers des combustions',
            'Identifier méthodes d\'extinction',
            'Appliquer règles de sécurité',
            'Prévenir les accidents'
          ],
          content: {
            triangle_feu: {
              elements: {
                combustible: 'Matière qui brûle',
                comburant: 'Oxygène (air)',
                energie_activation: 'Chaleur, étincelle'
              },
              principe: 'Feu nécessite les 3 éléments',
              extinction: 'Supprimer au moins un élément'
            },
            methodes_extinction: {
              supprimer_combustible: {
                methode: 'Éloigner matières inflammables',
                exemple: 'Fermer vanne gaz, retirer bois'
              },
              supprimer_comburant: {
                methode: 'Étouffer (couper arrivée air)',
                moyens: 'Couverture, sable, extincteur CO₂',
                principe: 'Pas d\'O₂ = pas de feu'
              },
              refroidir: {
                methode: 'Eau (si pas électrique)',
                effet: 'Température < seuil combustion',
                precaution: 'Jamais sur huile ou électricité'
              }
            },
            types_feux: {
              classe_A: 'Solides (bois, papier) → eau, poudre',
              classe_B: 'Liquides (essence, huile) → mousse, CO₂',
              classe_C: 'Gaz (butane) → fermer vanne, poudre',
              classe_D: 'Métaux (magnésium) → sable, poudre spéciale',
              classe_E: 'Électriques → CO₂, poudre (jamais eau)'
            },
            dangers_specifiques: {
              monoxyde_carbone: {
                origine: 'Combustion incomplète',
                danger: 'Gaz mortel, inodore',
                prevention: 'Ventilation, entretien appareils',
                symptomes: 'Maux tête, nausées, fatigue'
              },
              fumees_toxiques: {
                origine: 'Combustion plastiques',
                composition: 'Dioxines, HCl, composés toxiques',
                danger: 'Intoxication, asphyxie',
                protection: 'Ne pas brûler plastiques'
              },
              explosions: {
                cause: 'Accumulation gaz combustible',
                exemple: 'Fuite gaz + étincelle',
                prevention: 'Détecteur gaz, ventilation'
              }
            },
            regles_securite: {
              laboratoire: [
                'Blouse, lunettes, gants',
                'Ventilation',
                'Pas de nourriture',
                'Extincteur accessible'
              ],
              domestique: [
                'Entretien appareils combustion',
                'Détecteur fumée/CO',
                'Ventilation cuisine',
                'Ne jamais laisser feu sans surveillance'
              ]
            },
            mauritanianContext: [
              'Feux de cuisine (butane)',
              'Ventilation importantes',
              'Prévention incendies',
              'Sécurité domestique'
            ]
          },
          exercises: [
            {
              type: 'triangle',
              question: 'Cite les 3 éléments du triangle du feu',
              answer: 'Combustible, comburant (O₂), énergie d\'activation',
              difficulty: 'beginner'
            },
            {
              type: 'extinction',
              question: 'Comment éteindre feu d\'huile?',
              answer: 'Étouffer (couverture, couvercle) - JAMAIS eau',
              difficulty: 'intermediate'
            },
            {
              type: 'danger',
              question: 'Pourquoi CO est dangereux?',
              answer: 'Gaz mortel, inodore, invisible (combustion incomplète)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch3',
      title: 'PRÉPARATION D\'UNE SOLUTION',
      sections: [
        {
          id: 'ch3-s1',
          title: 'Solutions et concentration',
          description: 'Définir et préparer des solutions',
          concepts: ['Solution', 'Soluté', 'Solvant', 'Concentration'],
          objectives: [
            'Définir soluté, solvant, solution',
            'Calculer la concentration massique',
            'Calculer la concentration molaire',
            'Comprendre la saturation'
          ],
          content: {
            definitions: {
              solution: {
                definition: 'Mélange homogène d\'un ou plusieurs solutés dans un solvant',
                aspect: 'Uniforme, transparent ou coloré',
                exemple: 'Eau salée, sirop'
              },
              solute: {
                definition: 'Substance dissoute (en quantité moindre)',
                etats: 'Peut être solide, liquide ou gazeux',
                exemples: 'Sucre, sel, alcool, CO₂'
              },
              solvant: {
                definition: 'Liquide qui dissout (en quantité majeure)',
                universel: 'Eau (solvant le plus courant)',
                autres: 'Alcool, acétone, essence'
              },
              solution_aqueuse: {
                definition: 'Solution avec eau comme solvant',
                exemples: 'Eau salée, eau sucrée, thé'
              }
            },
            concentration_massique: {
              definition: 'Masse de soluté par volume de solution',
              symbole: 'C_m',
              formule: 'C_m = m/V',
              unites: {
                m: 'Masse soluté (g)',
                V: 'Volume solution (L)',
                Cm: 'Concentration (g/L)'
              },
              exemple: {
                donnees: 'm = 20 g sel, V = 0,5 L',
                calcul: 'C_m = 20/0,5 = 40 g/L',
                interpretation: '40 g sel par litre'
              }
            },
            concentration_molaire: {
              definition: 'Quantité de matière (moles) par volume',
              symbole: 'C',
              formule: 'C = n/V',
              unites: {
                n: 'Quantité matière (mol)',
                V: 'Volume solution (L)',
                C: 'Concentration (mol/L)'
              },
              relation: 'C = C_m/M',
              exemple: {
                donnees: 'n = 0,2 mol, V = 0,5 L',
                calcul: 'C = 0,2/0,5 = 0,4 mol/L',
                interpretation: '0,4 mole par litre'
              }
            },
            saturation: {
              definition: 'Solution ayant atteint solubilité maximale',
              observation: 'Soluté supplémentaire ne se dissout pas',
              depot: 'Solide au fond',
              exemple: 'Eau sucrée saturée (sucre au fond)'
            },
            mauritanianContext: [
              'Préparation thé sucré',
              'Solutions salines',
              'Chimie laboratoire',
              'Applications pratiques'
            ]
          },
          exercises: [
            {
              type: 'calcul_Cm',
              question: '15 g sucre dans 0,5 L eau. Calcule C_m',
              answer: 'C_m = 15/0,5 = 30 g/L',
              difficulty: 'intermediate'
            },
            {
              type: 'calcul_C',
              question: '0,3 mol dans 1,5 L. Calcule C',
              answer: 'C = 0,3/1,5 = 0,2 mol/L',
              difficulty: 'intermediate'
            },
            {
              type: 'saturation',
              question: 'Comment reconnaître solution saturée?',
              answer: 'Soluté ne se dissout plus, dépôt au fond',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s2',
          title: 'Préparation par dissolution',
          description: 'Préparer une solution à partir d\'un solide',
          concepts: ['Dissolution', 'Fiole jaugée', 'Pesée', 'Protocol'],
          objectives: [
            'Calculer la masse de soluté nécessaire',
            'Utiliser balance et fiole jaugée',
            'Suivre le protocole de préparation',
            'Obtenir concentration précise'
          ],
          content: {
            principe: 'Dissoudre masse précise de soluté dans volume précis de solvant',
            calcul_masse: {
              formule: 'm = C × V × M',
              avec: {
                m: 'Masse soluté (g)',
                C: 'Concentration molaire (mol/L)',
                V: 'Volume solution (L)',
                M: 'Masse molaire (g/mol)'
              },
              exemple: {
                objectif: 'Préparer 1 L de NaCl à 0,1 mol/L',
                M_NaCl: '58,5 g/mol',
                calcul: 'm = 0,1 × 1 × 58,5 = 5,85 g',
                reponse: 'Peser 5,85 g de NaCl'
              }
            },
            materiel: {
              balance_electronique: 'Pesée précise (0,01 g)',
              capsule: 'Ou verre de montre (pour peser)',
              spatule: 'Prélever le solide',
              entonnoir: 'Verser dans fiole',
              fiole_jaugee: 'Volume précis (trait de jauge)',
              pissette: 'Eau distillée pour compléter'
            },
            protocole_3_etapes: {
              etape1_pesee: {
                action: 'Peser précisément m = C × V × M',
                procedure: [
                  'Tarer capsule vide',
                  'Ajouter soluté avec spatule',
                  'Ajuster à masse exacte'
                ]
              },
              etape2_transfert: {
                action: 'Transférer dans fiole jaugée',
                procedure: [
                  'Verser via entonnoir',
                  'Rincer capsule avec eau distillée',
                  'Récupérer toutes traces'
                ]
              },
              etape3_completion: {
                action: 'Compléter au trait de jauge et homogénéiser',
                procedure: [
                  'Ajouter eau distillée progressivement',
                  'S\'arrêter au trait de jauge',
                  'Boucher et agiter (homogénéiser)'
                ]
              }
            },
            precision: {
              importance: 'Concentration exacte requise',
              sources_erreur: 'Pesée, transfert incomplet, trait de jauge',
              bonnes_pratiques: 'Rincer, vérifier trait, homogénéiser'
            },
            mauritanianContext: [
              'Préparation solutions laboratoire',
              'Chimie analytique',
              'Protocoles précis',
              'Travaux pratiques'
            ]
          },
          exercises: [
            {
              type: 'calcul_masse',
              question: 'Préparer 0,5 L de NaCl 0,2 mol/L. Masse NaCl? (M=58,5)',
              answer: 'm = 0,2 × 0,5 × 58,5 = 5,85 g',
              difficulty: 'intermediate'
            },
            {
              type: 'protocole',
              question: 'Cite les 3 étapes de préparation',
              answer: 'Pesée, Transfert dans fiole, Compléter au trait et homogénéiser',
              difficulty: 'beginner'
            },
            {
              type: 'materiel',
              question: 'Quel récipient pour volume précis?',
              answer: 'Fiole jaugée (trait de jauge)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s3',
          title: 'Préparation par dilution',
          description: 'Diluer une solution concentrée',
          concepts: ['Dilution', 'Conservation', 'Pipette', 'Calculs'],
          objectives: [
            'Comprendre le principe de dilution',
            'Appliquer C₁V₁ = C₂V₂',
            'Calculer le volume à prélever',
            'Réaliser une dilution'
          ],
          content: {
            principe: 'Préparer solution diluée à partir d\'une solution concentrée',
            conservation: {
              enonce: 'La quantité de matière de soluté se conserve',
              formule: 'n_initial = n_final',
              developpement: 'C₀ × V₀ = C_f × V_f',
              consequence: 'Même quantité soluté, plus de solvant'
            },
            relation_dilution: {
              formule: 'C₀ × V₀ = C_f × V_f',
              avec: {
                C0: 'Concentration initiale (mère)',
                V0: 'Volume à prélever',
                Cf: 'Concentration finale (fille)',
                Vf: 'Volume final désiré'
              },
              calcul_V0: 'V₀ = (C_f × V_f)/C₀'
            },
            materiel: {
              becher: 'Contient solution mère',
              pipette_jaugee: 'Prélève volume précis V₀',
              propipette: 'Sécurité (aspiration)',
              fiole_jaugee: 'Volume final V_f',
              pissette: 'Eau distillée pour compléter'
            },
            protocole: {
              etape1: {
                calcul: 'Calculer V₀ = (C_f × V_f)/C₀',
                exemple: 'C₀=1 mol/L, V_f=100 mL, C_f=0,1 mol/L',
                resultat: 'V₀ = (0,1×100)/1 = 10 mL'
              },
              etape2: {
                action: 'Prélever V₀ avec pipette jaugée',
                precaution: 'Bas ménisque sur trait'
              },
              etape3: {
                action: 'Verser dans fiole jaugée V_f'
              },
              etape4: {
                action: 'Compléter eau distillée au trait',
                precision: 'Exactement au niveau'
              },
              etape5: {
                action: 'Boucher et homogénéiser',
                resultat: 'Solution diluée C_f'
              }
            },
            facteur_dilution: {
              definition: 'F = C₀/C_f = V_f/V₀',
              interpretation: 'Combien de fois moins concentrée',
              exemple: 'C₀=1 mol/L → C_f=0,1 mol/L, F=10 (dilution 10 fois)'
            },
            mauritanianContext: [
              'Dilution solutions chimie',
              'Préparation réactifs',
              'Laboratoire scolaire',
              'Analyses chimiques'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'C₀=2 mol/L, C_f=0,5 mol/L, V_f=200 mL. Calcule V₀',
              answer: 'V₀ = (0,5×200)/2 = 50 mL',
              difficulty: 'intermediate'
            },
            {
              type: 'facteur',
              question: 'Dilution de 1 mol/L à 0,2 mol/L. Facteur?',
              answer: 'F = 1/0,2 = 5 (dilution 5 fois)',
              difficulty: 'intermediate'
            },
            {
              type: 'conservation',
              question: 'Que se conserve lors dilution?',
              answer: 'Quantité de matière (moles de soluté)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s4',
          title: 'Solutions acides, basiques et neutres',
          description: 'Classifier les solutions par pH',
          concepts: ['pH', 'Acide', 'Base', 'Neutre', 'Mesure'],
          objectives: [
            'Définir le pH',
            'Classifier selon pH',
            'Mesurer avec pH-mètre et papier pH',
            'Comprendre effet de dilution'
          ],
          content: {
            pH: {
              definition: 'Mesure acidité ou basicité d\'une solution',
              echelle: '0 à 14',
              neutre: 'pH = 7',
              interpretation: 'Plus petit = plus acide, plus grand = plus basique'
            },
            classification: {
              acide: {
                pH: '< 7',
                caracteristique: 'Goût acide, corrosif',
                exemples: 'Citron (pH 2), Vinaigre (pH 3), Pluie acide (pH 5)'
              },
              neutre: {
                pH: '= 7',
                caracteristique: 'Ni acide ni basique',
                exemple: 'Eau pure (pH 7)'
              },
              basique: {
                pH: '> 7',
                autre_nom: 'Alcaline',
                caracteristique: 'Savonneux, corrosif',
                exemples: 'Savon (pH 10), Javel (pH 12), Soude (pH 14)'
              }
            },
            methodes_mesure: {
              papier_pH: {
                principe: 'Papier indicateur change de couleur',
                utilisation: 'Tremper dans solution',
                lecture: 'Comparer couleur avec nuancier',
                precision: '± 1 unité pH',
                avantage: 'Rapide, bon marché'
              },
              pH_metre: {
                principe: 'Mesure électronique',
                utilisation: 'Plonger sonde dans solution',
                lecture: 'Affichage digital',
                precision: '± 0,01 unité pH',
                avantage: 'Très précis',
                precaution: 'Étalonner régulièrement'
              }
            },
            effet_dilution: {
              solution_acide: {
                evolution: 'pH augmente vers 7',
                explication: 'Devient moins acide',
                exemple: 'pH 2 → dilution → pH 3, 4, 5... → 7'
              },
              solution_basique: {
                evolution: 'pH diminue vers 7',
                explication: 'Devient moins basique',
                exemple: 'pH 12 → dilution → pH 11, 10, 9... → 7'
              },
              limite: 'pH tend vers 7 mais ne dépasse jamais'
            },
            mauritanianContext: [
              'pH eau potable (neutre)',
              'Citron local (acide)',
              'Savon (basique)',
              'Tests laboratoire'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Solution pH 5: acide, basique ou neutre?',
              answer: 'Acide (pH < 7)',
              difficulty: 'beginner'
            },
            {
              type: 'dilution',
              question: 'Solution acide pH 3 diluée. pH augmente ou diminue?',
              answer: 'Augmente (vers 7, devient moins acide)',
              difficulty: 'intermediate'
            },
            {
              type: 'mesure',
              question: 'Quel appareil pour pH précis?',
              answer: 'pH-mètre (précision ±0,01)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch3-s5',
          title: 'Sécurité avec solutions chimiques',
          description: 'Précautions et dangers',
          concepts: ['Sécurité', 'Pictogrammes', 'Précautions', 'Premiers secours'],
          objectives: [
            'Reconnaître pictogrammes de danger',
            'Appliquer règles de sécurité',
            'Utiliser équipements protection',
            'Réagir en cas d\'accident'
          ],
          content: {
            pictogrammes_danger: {
              corrosif: {
                symbole: 'Tube éprouvette attaquant main/métal',
                danger: 'Détruit tissus, corrode métaux',
                exemples: 'Acides concentrés, bases concentrées',
                precaution: 'Gants, lunettes, blouse'
              },
              toxique: {
                symbole: 'Tête de mort',
                danger: 'Empoisonnement, mort',
                exemples: 'Cyanure, mercure',
                precaution: 'Ne pas ingérer, inhaler, toucher'
              },
              inflammable: {
                symbole: 'Flamme',
                danger: 'Prend feu facilement',
                exemples: 'Alcool, essence, acétone',
                precaution: 'Loin sources chaleur/flammes'
              },
              nocif: {
                symbole: 'Croix',
                danger: 'Irritant, allergisant',
                exemples: 'Javel diluée, ammoniaque',
                precaution: 'Éviter contact peau/yeux'
              }
            },
            precautions_essentielles: {
              equipement_protection: {
                EPI: 'Équipement Protection Individuelle',
                obligatoires: [
                  'Blouse (protège vêtements)',
                  'Lunettes (protège yeux)',
                  'Gants (protège mains)'
                ],
                optionnels: 'Masque (vapeurs), tablier'
              },
              manipulation: {
                regles: [
                  'Ne jamais mélanger produits sans consigne',
                  'Toujours ajouter acide dans eau (jamais inverse)',
                  'Ventiler lieu de travail',
                  'Diluer avant utilisation si possible',
                  'Étiqueter toutes solutions',
                  'Refermer immédiatement flacons'
                ]
              },
              stockage: {
                separation: 'Acides ≠ bases',
                armoire: 'Fermée, ventilée',
                etiquettes: 'Claires et complètes'
              }
            },
            premiers_secours: {
              projection_yeux: {
                action: 'Rincer 15 min eau courante',
                urgence: 'Consulter médecin immédiatement'
              },
              contact_peau: {
                action: 'Rincer abondamment eau',
                savon: 'Si gras ou collant',
                duree: 'Minimum 10 minutes'
              },
              ingestion: {
                ne_pas: 'Ne PAS faire vomir',
                action: 'Boire eau, appeler urgences',
                information: 'Préciser produit ingéré'
              },
              inhalation: {
                action: 'Sortir à l\'air libre',
                position: 'Semi-assise',
                urgence: 'Appeler secours si difficultés'
              }
            },
            mauritanianContext: [
              'Sécurité laboratoire scolaire',
              'Manipulation produits chimiques',
              'Prévention accidents',
              'Sensibilisation sécurité'
            ]
          },
          exercises: [
            {
              type: 'pictogramme',
              question: 'Que signifie symbole tête de mort?',
              answer: 'Produit toxique (empoisonnement, mortel)',
              difficulty: 'beginner'
            },
            {
              type: 'precaution',
              question: 'Comment diluer un acide concentré?',
              answer: 'Toujours ajouter acide DANS l\'eau (jamais inverse)',
              difficulty: 'intermediate'
            },
            {
              type: 'accident',
              question: 'Que faire si projection acide dans yeux?',
              answer: 'Rincer 15 min eau courante, consulter médecin immédiatement',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch4',
      title: 'INFLUENCE DE LA RÉSISTANCE SUR UN CIRCUIT',
      sections: [
        {
          id: 'ch4-s1',
          title: 'La résistance électrique',
          description: 'Comprendre le rôle de la résistance',
          concepts: ['Résistance', 'Ohm', 'Opposition', 'Effet'],
          objectives: [
            'Définir la résistance',
            'Observer l\'effet sur l\'intensité',
            'Comprendre la non-polarisation',
            'Mesurer avec ohmmètre'
          ],
          content: {
            definition: 'Composant qui s\'oppose au passage du courant électrique',
            symbole_circuit: 'Rectangle',
            unite: {
              ohm: 'Ω (omega)',
              multiples: {
                kiloohm: '1 kΩ = 1000 Ω',
                megaohm: '1 MΩ = 1 000 000 Ω',
                gigaohm: '1 GΩ = 1 000 000 000 Ω'
              }
            },
            experience: {
              montage: 'Pile + lampe + ampèremètre (série)',
              mesures: {
                sans_resistance: {
                  observation: 'Lampe éclat normal',
                  intensite: 'I = 430 mA'
                },
                avec_R1_10ohm: {
                  observation: 'Lampe éclat faible',
                  intensite: 'I = 71,6 mA'
                },
                avec_R2_68ohm: {
                  observation: 'Lampe éclat très faible',
                  intensite: 'I = 55,2 mA'
                }
              },
              conclusion: 'Plus R est élevée, plus I est faible'
            },
            non_polarisation: {
              test: 'Inverser sens de R₁',
              resultat: 'Même intensité (71,6 mA)',
              conclusion: 'Résistance non polarisée (fonctionne dans les 2 sens)',
              difference: 'Contrairement à diode (polarisée)'
            },
            position_circuit: {
              test: 'Placer R₂ avant ou après lampe',
              resultat: 'Même intensité (55,2 mA)',
              conclusion: 'Position de R ne change pas I (loi unicité)'
            },
            mauritanianContext: [
              'Composants électroniques',
              'Circuits scolaires',
              'Limitation courant',
              'Électricité appliquée'
            ]
          },
          exercises: [
            {
              type: 'effet',
              question: 'Quel est l\'effet d\'une résistance?',
              answer: 'Diminue l\'intensité du courant (opposition)',
              difficulty: 'beginner'
            },
            {
              type: 'relation',
              question: 'Si R augmente, que devient I?',
              answer: 'I diminue (inversement proportionnel)',
              difficulty: 'intermediate'
            },
            {
              type: 'polarisation',
              question: 'Une résistance est-elle polarisée?',
              answer: 'Non, fonctionne dans les 2 sens',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s2',
          title: 'Loi d\'Ohm',
          description: 'Établir la relation U = R × I',
          concepts: ['Loi d\'Ohm', 'Caractéristique', 'Graphique', 'Calculs'],
          objectives: [
            'Tracer la caractéristique U = f(I)',
            'Établir la loi d\'Ohm',
            'Calculer U, R ou I',
            'Vérifier expérimentalement'
          ],
          content: {
            experience: {
              montage: 'Générateur réglable + voltmètre (parallèle R) + ampèremètre (série)',
              procedure: 'Varier tension générateur, mesurer U et I',
              tableau_mesures: {
                U_V: [0, 2.83, 4.27, 5.72, 7.17, 8.65],
                I_mA: [0, 62.1, 93.7, 125.4, 157.2, 189.7],
                rapport_U_I: ['-', 46.51, 46.51, 46.51, 46.51, 46.51]
              },
              observation: 'Rapport U/I constant = 46,5 Ω'
            },
            graphique: {
              axes: 'U (V) en ordonnée, I (A) en abscisse',
              courbe: 'Droite passant par origine',
              pente: 'Pente de la droite = R',
              interpretation: 'Proportionnalité entre U et I'
            },
            loi_ohm: {
              enonce: 'Tension aux bornes résistance proportionnelle à intensité',
              formule: 'U = R × I',
              unites: {
                U: 'Tension (V)',
                R: 'Résistance (Ω)',
                I: 'Intensité (A)'
              },
              variantes: {
                calculer_R: 'R = U/I',
                calculer_I: 'I = U/R'
              }
            },
            dipole_ohmique: {
              definition: 'Dipôle qui obéit à loi d\'Ohm',
              caracteristique: 'Droite passant par origine',
              exemples: 'Résistances, fils métalliques',
              non_ohmiques: 'Lampe, diode (courbe non linéaire)'
            },
            applications_calculs: {
              ex1: {
                donnees: 'U = 6 V, I = 0,128 A',
                calcul: 'R = U/I = 6/0,128 = 46,9 Ω',
                reponse: '46,9 Ω'
              },
              ex2: {
                donnees: 'U = 6 V, R = 220 Ω',
                calcul: 'I = U/R = 6/220 = 0,027 A = 27 mA',
                reponse: '27 mA'
              },
              ex3: {
                donnees: 'R = 47 kΩ = 47000 Ω, I = 0,15 mA = 0,00015 A',
                calcul: 'U = R×I = 47000×0,00015 = 7,05 V',
                reponse: '7,05 V'
              }
            },
            mauritanianContext: [
              'Calculs circuits électriques',
              'Dimensionnement résistances',
              'Physique appliquée',
              'Électronique'
            ]
          },
          exercises: [
            {
              type: 'formule',
              question: 'Énonce la loi d\'Ohm',
              answer: 'U = R × I',
              difficulty: 'beginner'
            },
            {
              type: 'calcul_R',
              question: 'U = 12 V, I = 0,2 A. Calcule R',
              answer: 'R = 12/0,2 = 60 Ω',
              difficulty: 'intermediate'
            },
            {
              type: 'calcul_I',
              question: 'U = 9 V, R = 180 Ω. Calcule I',
              answer: 'I = 9/180 = 0,05 A = 50 mA',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch5',
      title: 'DÉTERMINATION DE LA VALEUR D\'UNE RÉSISTANCE',
      sections: [
        {
          id: 'ch5-s1',
          title: 'Mesure avec ohmmètre',
          description: 'Utiliser l\'ohmmètre',
          concepts: ['Ohmmètre', 'Multimètre', 'Calibre', 'Mesure'],
          objectives: [
            'Utiliser un ohmmètre',
            'Choisir le bon calibre',
            'Lire la valeur correctement',
            'Convertir les unités'
          ],
          content: {
            ohmmetre: {
              definition: 'Appareil mesurant la résistance',
              symbole: 'Ω',
              multimetre: 'Mode Ω sur sélecteur',
              principe: 'Envoie petit courant, mesure tension'
            },
            procedure: {
              etape1: {
                action: 'Choisir plus grand calibre',
                raison: 'Éviter endommager appareil',
                exemples: 'Si calibres: 200Ω, 2kΩ, 20kΩ → commencer 20kΩ'
              },
              etape2: {
                action: 'Résistance hors circuit',
                raison: 'Autres composants fausseraient mesure',
                important: 'TOUJOURS débrancher'
              },
              etape3: {
                action: 'Relier bornes COM et Ω aux bornes de R',
                sens: 'N\'importe quel sens (non polarisée)'
              },
              etape4: {
                action: 'Ajuster calibre pour précision',
                regle: 'Calibre juste supérieur à valeur mesurée',
                exemple: 'Si 320 Ω → calibre 500 Ω (pas 200 Ω)'
              }
            },
            lecture: {
              affichage_direct: 'Valeur + unité selon calibre',
              exemples: {
                ex1: {
                  affichage: '320',
                  calibre: '500 Ω',
                  resultat: 'R = 320 Ω'
                },
                ex2: {
                  affichage: '0,654',
                  calibre: '2 kΩ',
                  calcul: '0,654 kΩ = 654 Ω',
                  resultat: 'R = 654 Ω'
                },
                ex3: {
                  affichage: '1,25',
                  calibre: '20 kΩ',
                  resultat: 'R = 1,25 kΩ = 1250 Ω'
                }
              }
            },
            conversions: {
              ohm_kiloohm: '1 kΩ = 1000 Ω',
              ohm_megaohm: '1 MΩ = 1000 kΩ = 1 000 000 Ω',
              exemples: [
                '3,2 kΩ = 3200 Ω',
                '0,47 MΩ = 470 kΩ = 470 000 Ω',
                '2200 Ω = 2,2 kΩ'
              ]
            },
            mauritanianContext: [
              'Mesures électroniques',
              'Diagnostic circuits',
              'Travaux pratiques',
              'Électrotechnique'
            ]
          },
          exercises: [
            {
              type: 'lecture',
              question: 'Affichage 0,82, calibre 2 kΩ. Quelle résistance?',
              answer: '0,82 kΩ = 820 Ω',
              difficulty: 'intermediate'
            },
            {
              type: 'conversion',
              question: 'Convertis 4,7 kΩ en Ω',
              answer: '4700 Ω (4,7 × 1000)',
              difficulty: 'beginner'
            },
            {
              type: 'procedure',
              question: 'Pourquoi débrancher résistance avant mesure?',
              answer: 'Autres composants fausseraient la mesure',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch5-s2',
          title: 'Code couleurs des résistances',
          description: 'Lire les bandes de couleur',
          concepts: ['Code couleurs', 'Anneaux', 'Tolérance', 'Lecture'],
          objectives: [
            'Comprendre le code couleurs',
            'Lire les 4 anneaux',
            'Calculer la valeur',
            'Déterminer la tolérance'
          ],
          content: {
            principe: 'Bandes colorées indiquent valeur de la résistance',
            structure_4_anneaux: {
              anneau1: 'Premier chiffre',
              anneau2: 'Deuxième chiffre',
              anneau3: 'Multiplicateur (nombre de zéros)',
              anneau4: 'Tolérance (précision)'
            },
            tableau_couleurs: {
              chiffres: {
                noir: '0',
                marron: '1',
                rouge: '2',
                orange: '3',
                jaune: '4',
                vert: '5',
                bleu: '6',
                violet: '7',
                gris: '8',
                blanc: '9'
              },
              multiplicateurs: {
                noir: '×1 (×10⁰)',
                marron: '×10 (×10¹)',
                rouge: '×100 (×10²)',
                orange: '×1000 (×10³)',
                jaune: '×10000 (×10⁴)',
                vert: '×100000 (×10⁵)',
                bleu: '×1000000 (×10⁶)',
                or: '×0,1 (÷10)',
                argent: '×0,01 (÷100)'
              },
              tolerance: {
                marron: '±1%',
                rouge: '±2%',
                or: '±5%',
                argent: '±10%',
                aucun: '±20%'
              }
            },
            methode_lecture: {
              etape1: 'Identifier anneau tolérance (souvent or/argent, plus espacé)',
              etape2: 'Lire depuis côté opposé',
              etape3: 'Chiffre1 + Chiffre2 + Multiplicateur',
              etape4: 'Calculer intervalle tolérance'
            },
            exemples_detailles: {
              ex1: {
                anneaux: 'Rouge - Bleu - Marron - Or',
                lecture: '2 6 ×10 ±5%',
                calcul: '26 × 10 = 260 Ω',
                tolerance: '±5% de 260 = ±13 Ω',
                intervalle: '[247 Ω - 273 Ω]',
                resultat: 'R = 260 Ω ±5%'
              },
              ex2: {
                anneaux: 'Marron - Noir - Orange - Or',
                lecture: '1 0 ×1000 ±5%',
                calcul: '10 × 1000 = 10 000 Ω = 10 kΩ',
                resultat: 'R = 10 kΩ ±5%'
              },
              ex3: {
                anneaux: 'Jaune - Violet - Rouge - Argent',
                lecture: '4 7 ×100 ±10%',
                calcul: '47 × 100 = 4700 Ω = 4,7 kΩ',
                resultat: 'R = 4,7 kΩ ±10%'
              }
            },
            mauritanianContext: [
              'Identification composants',
              'Électronique pratique',
              'Réparation circuits',
              'Travaux pratiques'
            ]
          },
          exercises: [
            {
              type: 'lecture',
              question: 'Anneaux: Orange-Orange-Marron-Or. Quelle résistance?',
              answer: '3 3 ×10 = 330 Ω ±5%',
              difficulty: 'intermediate'
            },
            {
              type: 'identification',
              question: 'Résistance 4700 Ω. Quelles couleurs (sans tolérance)?',
              answer: 'Jaune-Violet-Rouge (47×100)',
              difficulty: 'intermediate'
            },
            {
              type: 'tolerance',
              question: 'Anneau or signifie quelle tolérance?',
              answer: '±5%',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch6',
      title: 'ASSOCIATION DE RÉSISTANCES',
      sections: [
        {
          id: 'ch6-s1',
          title: 'Résistances en série',
          description: 'Calculer résistance équivalente en série',
          concepts: ['Série', 'Résistance équivalente', 'Addition', 'Calculs'],
          objectives: [
            'Définir résistances en série',
            'Appliquer R_eq = R₁ + R₂ + ...',
            'Calculer résistance équivalente',
            'Vérifier expérimentalement'
          ],
          content: {
            definition: 'Résistances branchées les unes à la suite des autres',
            caracteristique_serie: {
              intensite: 'Même I dans toutes résistances (loi unicité)',
              tension: 'U_totale = U₁ + U₂ + U₃ (loi additivité)'
            },
            resistance_equivalente: {
              definition: 'Résistance unique ayant même effet',
              formule: 'R_eq = R₁ + R₂ + R₃ + ... + R_n',
              principe: 'Addition simple',
              consequence: 'R_eq toujours > chaque R_i'
            },
            demonstration: {
              loi_ohm: 'U_totale = R_eq × I',
              additivite: 'U_totale = U₁ + U₂ + U₃',
              donc: 'R_eq × I = R₁×I + R₂×I + R₃×I',
              simplification: 'R_eq = R₁ + R₂ + R₃'
            },
            exemples_calculs: {
              ex1: {
                resistances: 'R₁ = 60 Ω, R₂ = 20 Ω, R₃ = 30 Ω',
                calcul: 'R_eq = 60 + 20 + 30 = 110 Ω',
                verification: 'Mesure ohmmètre ≈ 110 Ω'
              },
              ex2: {
                resistances: 'R₁ = 100 Ω, R₂ = 220 Ω',
                calcul: 'R_eq = 100 + 220 = 320 Ω',
                reponse: '320 Ω'
              },
              ex3: {
                resistances: '4 résistances de 10 Ω',
                calcul: 'R_eq = 10 + 10 + 10 + 10 = 40 Ω',
                ou: 'R_eq = 4 × 10 = 40 Ω',
                reponse: '40 Ω'
              }
            },
            applications: {
              limitation_courant: 'Augmenter résistance totale',
              diviseur_tension: 'Partager tension',
              ajustement: 'Obtenir valeur précise'
            },
            mauritanianContext: [
              'Montages électroniques',
              'Calculs circuits',
              'Travaux pratiques',
              'Électrotechnique'
            ]
          },
          exercises: [
            {
              type: 'calcul_simple',
              question: 'R₁ = 50 Ω, R₂ = 30 Ω en série. R_eq?',
              answer: 'R_eq = 50 + 30 = 80 Ω',
              difficulty: 'beginner'
            },
            {
              type: 'calcul_multiple',
              question: '5 résistances de 20 Ω en série. R_eq?',
              answer: 'R_eq = 5 × 20 = 100 Ω',
              difficulty: 'intermediate'
            },
            {
              type: 'comparaison',
              question: 'R_eq série est > ou < à chaque R_i?',
              answer: 'Toujours > (somme)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch6-s2',
          title: 'Résistances en parallèle',
          description: 'Calculer résistance équivalente en parallèle',
          concepts: ['Parallèle', 'Dérivation', 'Inverse', 'Calculs'],
          objectives: [
            'Définir résistances en parallèle',
            'Appliquer 1/R_eq = 1/R₁ + 1/R₂ + ...',
            'Calculer résistance équivalente',
            'Comparer avec série'
          ],
          content: {
            definition: 'Résistances ayant bornes communes (branchées côte à côte)',
            caracteristique_parallele: {
              tension: 'Même U aux bornes de toutes résistances',
              intensite: 'I_totale = I₁ + I₂ + I₃ (loi des nœuds)'
            },
            resistance_equivalente: {
              formule: '1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ... + 1/R_n',
              principe: 'Addition des inverses',
              consequence: 'R_eq toujours < plus petite R_i',
              particularite: 'Plus on ajoute résistances, plus R_eq diminue'
            },
            demonstration: {
              loi_ohm: 'I = U/R pour chaque résistance',
              loi_noeuds: 'I_totale = I₁ + I₂ + I₃',
              donc: 'U/R_eq = U/R₁ + U/R₂ + U/R₃',
              simplification: '1/R_eq = 1/R₁ + 1/R₂ + 1/R₃'
            },
            exemples_calculs: {
              ex1: {
                resistances: 'R₁ = 5 Ω, R₂ = 15 Ω',
                calcul: '1/R_eq = 1/5 + 1/15 = 3/15 + 1/15 = 4/15',
                donc: 'R_eq = 15/4 = 3,75 Ω',
                verification: '3,75 Ω < 5 Ω ✓'
              },
              ex2: {
                resistances: 'R₁ = 10 Ω, R₂ = 10 Ω (identiques)',
                calcul: '1/R_eq = 1/10 + 1/10 = 2/10',
                donc: 'R_eq = 10/2 = 5 Ω',
                regle: 'Si identiques: R_eq = R/n'
              },
              ex3: {
                resistances: '3 résistances de 30 Ω',
                calcul: 'R_eq = 30/3 = 10 Ω',
                reponse: '10 Ω'
              }
            },
            cas_particulier_2_resistances: {
              formule: 'R_eq = (R₁ × R₂)/(R₁ + R₂)',
              exemple: 'R₁=6Ω, R₂=3Ω → R_eq = (6×3)/(6+3) = 18/9 = 2Ω'
            },
            comparaison_serie_parallele: {
              serie: 'R_eq = somme (augmente)',
              parallele: 'R_eq = inverse somme (diminue)',
              utilisation: 'Série: augmenter R. Parallèle: diminuer R'
            },
            mauritanianContext: [
              'Circuits électroniques',
              'Installations électriques',
              'Calculs résistances',
              'Applications pratiques'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'R₁ = 12 Ω, R₂ = 6 Ω en parallèle. R_eq?',
              answer: '1/R_eq = 1/12 + 1/6 = 1/12 + 2/12 = 3/12, R_eq = 4 Ω',
              difficulty: 'intermediate'
            },
            {
              type: 'identiques',
              question: '4 résistances de 40 Ω en parallèle. R_eq?',
              answer: 'R_eq = 40/4 = 10 Ω',
              difficulty: 'intermediate'
            },
            {
              type: 'comparaison',
              question: 'R_eq parallèle est > ou < à chaque R_i?',
              answer: 'Toujours < (plus petit que la plus petite)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch7',
      title: 'PUISSANCE ET ÉNERGIE ÉLECTRIQUE',
      sections: [
        {
          id: 'ch7-s1',
          title: 'Puissance électrique',
          description: 'Comprendre et calculer la puissance',
          concepts: ['Puissance', 'Watt', 'P = U × I', 'Nominale'],
          objectives: [
            'Définir la puissance électrique',
            'Calculer avec P = U × I',
            'Comprendre puissance nominale',
            'Identifier puissances d\'appareils'
          ],
          content: {
            definition: 'Énergie échangée par unité de temps',
            formule: {
              relation: 'P = U × I',
              unites: {
                P: 'Puissance (W - watt)',
                U: 'Tension (V)',
                I: 'Intensité (A)'
              },
              variantes: {
                calculer_U: 'U = P/I',
                calculer_I: 'I = P/U'
              }
            },
            multiples: {
              kilowatt: '1 kW = 1000 W',
              megawatt: '1 MW = 1 000 000 W',
              conversions: [
                '2,5 kW = 2500 W',
                '500 W = 0,5 kW'
              ]
            },
            puissance_nominale: {
              definition: 'Puissance reçue sous tension nominale',
              indication: 'Marquée sur appareil (ex: 60 W)',
              importance: 'Fonctionnement optimal',
              exemples: 'Lampe 60 W sous 220 V'
            },
            puissances_appareils: {
              faibles: {
                lampe_basse_conso: '30 W',
                chargeur_telephone: '5-10 W',
                LED: '5-15 W'
              },
              moyennes: {
                TV_LCD: '150 W',
                ordinateur: '300 W',
                perceuse: '600 W',
                fer_repasser: '1000 W = 1 kW'
              },
              elevees: {
                machine_laver: '2000 W = 2 kW',
                climatiseur: '1100 W',
                four: '2500 W',
                cuisiniere: '6500 W = 6,5 kW'
              }
            },
            calculs_exemples: {
              ex1: {
                donnees: 'Lampe U = 220 V, I = 0,27 A',
                calcul: 'P = 220 × 0,27 = 59,4 W',
                approximation: 'Lampe 60 W',
                reponse: '≈ 60 W'
              },
              ex2: {
                donnees: 'Fer à repasser 1000 W, U = 220 V',
                calcul: 'I = P/U = 1000/220 = 4,55 A',
                reponse: 'Intensité ≈ 4,5 A'
              }
            },
            mauritanianContext: [
              'Appareils domestiques',
              'Consommation électrique',
              'Puissance secteur',
              'Électroménager'
            ]
          },
          exercises: [
            {
              type: 'calcul_P',
              question: 'U = 12 V, I = 2 A. Calcule P',
              answer: 'P = 12 × 2 = 24 W',
              difficulty: 'beginner'
            },
            {
              type: 'calcul_I',
              question: 'P = 2200 W, U = 220 V. Calcule I',
              answer: 'I = 2200/220 = 10 A',
              difficulty: 'intermediate'
            },
            {
              type: 'nominal',
              question: 'Que signifie "lampe 100 W"?',
              answer: 'Puissance nominale: consomme 100 W sous tension nominale',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch7-s2',
          title: 'Énergie électrique et facture',
          description: 'Calculer consommation et coût',
          concepts: ['Énergie', 'kWh', 'Joule', 'Facture', 'SOMELEC'],
          objectives: [
            'Calculer l\'énergie électrique',
            'Convertir J et kWh',
            'Lire une facture électrique',
            'Calculer le coût'
          ],
          content: {
            energie_electrique: {
              definition: 'Énergie consommée par appareil pendant durée t',
              formule: 'E = P × t',
              unites: {
                joule: {
                  condition: 'P en watts (W), t en secondes (s)',
                  unite: 'Joule (J)',
                  exemple: 'E = 100 W × 3600 s = 360 000 J'
                },
                kilowattheure: {
                  condition: 'P en kilowatts (kW), t en heures (h)',
                  unite: 'kilowattheure (kWh)',
                  exemple: 'E = 0,1 kW × 1 h = 0,1 kWh',
                  pratique: 'Unité facture électricité'
                }
              },
              conversion: '1 kWh = 3,6 × 10⁶ J = 3 600 000 J'
            },
            exemples_calculs: {
              aspirateur: {
                donnees: 'P = 1300 W, t = 8 min = 480 s',
                en_joules: 'E = 1300 × 480 = 624 000 J',
                en_kWh: 'E = 1,3 kW × (8/60) h = 0,17 kWh',
                reponse: '624 000 J ou 0,17 kWh'
              },
              lampe: {
                donnees: 'P = 60 W, t = 1h30 = 1,5 h',
                calcul: 'E = 0,06 kW × 1,5 h = 0,09 kWh',
                reponse: '0,09 kWh'
              }
            },
            facture_somelec: {
              tarif: '31 UM par kWh (Mauritanie)',
              lecture_compteur: 'Index fin - Index début = kWh consommés',
              calcul_cout: {
                formule: 'Coût = Énergie (kWh) × Prix (UM/kWh)',
                exemple: {
                  consommation: '0,17 + 0,09 = 0,26 kWh',
                  tarif: '100 UM/kWh (exemple)',
                  cout: '0,26 × 100 = 26 UM',
                  reponse: '26 UM'
                }
              }
            },
            economie_energie: {
              conseils: [
                'Éteindre lumières inutiles',
                'Lampes basse consommation (LED)',
                'Débrancher veilles',
                'Utiliser appareils efficaces'
              ],
              impact: 'Réduction facture + environnement'
            },
            mauritanianContext: [
              'Facture SOMELEC',
              'Tarifs UM (ouguiyas)',
              'Consommation domestique',
              'Économie énergie'
            ]
          },
          exercises: [
            {
              type: 'energie_J',
              question: 'P = 500 W, t = 600 s. Calcule E en J',
              answer: 'E = 500 × 600 = 300 000 J',
              difficulty: 'intermediate'
            },
            {
              type: 'energie_kWh',
              question: 'P = 2 kW, t = 3 h. Calcule E en kWh',
              answer: 'E = 2 × 3 = 6 kWh',
              difficulty: 'beginner'
            },
            {
              type: 'cout',
              question: '5 kWh consommés, tarif 30 UM/kWh. Coût?',
              answer: 'Coût = 5 × 30 = 150 UM',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch7-s3',
          title: 'Sécurité électrique domestique',
          description: 'Fusibles, disjoncteurs et sécurité',
          concepts: ['Fusibles', 'Disjoncteurs', 'Surcharge', 'Protection'],
          objectives: [
            'Comprendre le rôle des fusibles',
            'Calculer intensité maximale',
            'Dimensionner installation',
            'Appliquer règles de sécurité'
          ],
          content: {
            puissance_maximale: {
              formule: 'P_max = U × I_max',
              exemple_compteur: {
                donnees: 'Compteur 5 A, U = 220 V',
                calcul: 'P_max = 220 × 5 = 1100 W',
                interpretation: 'Ne pas dépasser 1100 W simultanément'
              }
            },
            fusibles: {
              role: 'Protection contre surintensité',
              fonctionnement: {
                normal: 'I < I_nominal → fusible intact',
                surcharge: 'I > I_nominal → fusible fond',
                resultat: 'Circuit ouvert (protection)'
              },
              calibres: '2 A, 5 A, 10 A, 16 A, 20 A',
              choix: 'I_fusible ≥ I_max_circuit',
              remplacement: 'Même calibre (jamais supérieur)'
            },
            disjoncteurs: {
              role: 'Protection réutilisable',
              fonctionnement: 'Se déclenche si I > I_max',
              avantage: 'Réarmable (pas à remplacer)',
              types: {
                divisionnaire: 'Protection circuit spécifique',
                differentiel: 'Détecte fuites (30 mA)',
                general: 'Protection installation complète'
              }
            },
            dimensionnement: {
              calcul_intensite: {
                formule: 'I = P_totale/U',
                exemple: {
                  appareils: '12 lampes 60 W',
                  P_totale: '12 × 60 = 720 W',
                  intensite: 'I = 720/220 = 3,27 A',
                  fusible: 'Choisir 5 A (juste supérieur)'
                }
              },
              exemple_complexe: {
                situation: '12 lampes 60 W + 15 lampes 75 W + 8 lampes 100 W',
                P1: '12 × 60 = 720 W → I₁ = 3,27 A',
                P2: '15 × 75 = 1125 W → I₂ = 5,11 A',
                P3: '8 × 100 = 800 W → I₃ = 3,64 A',
                total: 'I_totale = 3,27 + 5,11 + 3,64 = 12,02 A',
                fusible: 'Choisir 16 A'
              }
            },
            section_fils: {
              principe: 'Gros fils pour appareils puissants',
              raison: 'Éviter échauffement excessif',
              exemples: {
                lampe: 'Fil fin suffisant (faible I)',
                cuisiniere: 'Fil épais nécessaire (fort I)',
                lave_linge: 'Fil épais (2 kW → 9 A)'
              }
            },
            regles_securite: {
              installation: [
                'Fusibles/disjoncteurs adaptés',
                'Fils de section suffisante',
                'Mise à la terre obligatoire',
                'Pas de surcharge prises'
              ],
              utilisation: [
                'Ne pas dépasser P_max compteur',
                'Répartir appareils puissants',
                'Débrancher appareils non utilisés',
                'Vérifier état fils/prises'
              ]
            },
            mauritanianContext: [
              'Installation électrique domestique',
              'Compteur SOMELEC',
              'Protection surcharges',
              'Sécurité maison'
            ]
          },
          exercises: [
            {
              type: 'P_max',
              question: 'Compteur 10 A, U = 220 V. P_max?',
              answer: 'P_max = 220 × 10 = 2200 W = 2,2 kW',
              difficulty: 'intermediate'
            },
            {
              type: 'fusible',
              question: '8 lampes 75 W sur 220 V. Quel fusible?',
              answer: 'I = (8×75)/220 = 2,73 A → fusible 5 A',
              difficulty: 'intermediate'
            },
            {
              type: 'securite',
              question: 'Que fait un fusible en cas de surcharge?',
              answer: 'Fond (coupe le circuit) pour protéger installation',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch7-s2',
          title: 'Calculs de consommation',
          description: 'Calculer énergie et coût',
          concepts: ['Consommation', 'kWh', 'Coût', 'Économie'],
          objectives: [
            'Calculer énergie consommée',
            'Déterminer coût électricité',
            'Optimiser consommation',
            'Lire facture SOMELEC'
          ],
          content: {
            calcul_energie: {
              formule: 'E = P × t',
              unites_pratiques: 'P en kW, t en heures → E en kWh',
              conversion_temps: {
                minutes: 't(h) = t(min)/60',
                secondes: 't(h) = t(s)/3600',
                jours: 't(h) = t(jours) × 24'
              }
            },
            exemples_detailles: {
              guirlandes_noel: {
                donnees: '2 guirlandes × 160 lampes, 4 h/jour, 3 semaines',
                total_lampes: '320 lampes',
                duree_totale: '4 h/j × 21 j = 84 h',
                cout_journalier: '50 UM',
                energie_jour: 'E = 50/100 = 0,5 kWh/j',
                P_totale: 'P = 0,5/4 = 0,125 kW = 125 W',
                P_lampe: '125/320 ≈ 0,39 W par lampe',
                cout_total: '50 × 21 = 1050 UM'
              },
              menage_mensuel: {
                refrigerateur: '150 W × 24h × 30j = 108 kWh',
                TV: '150 W × 5h × 30j = 22,5 kWh',
                eclairage: '10 lampes × 60 W × 4h × 30j = 72 kWh',
                total: '108 + 22,5 + 72 = 202,5 kWh',
                cout: '202,5 × 31 UM = 6277,5 UM'
              }
            },
            lecture_facture: {
              elements: {
                index_precedent: 'Relevé mois dernier',
                index_actuel: 'Relevé ce mois',
                consommation: 'Actuel - Précédent (kWh)',
                tarif: 'Prix kWh (UM)',
                montant: 'Consommation × Tarif'
              },
              exemple: {
                index_precedent: '12450 kWh',
                index_actuel: '12650 kWh',
                consommation: '200 kWh',
                tarif: '31 UM/kWh',
                montant: '200 × 31 = 6200 UM'
              }
            },
            conseils_economie: {
              eclairage: 'LED au lieu incandescence (5× moins)',
              refrigerateur: 'Classe A++ (économe)',
              climatisation: 'Température raisonnable (25°C)',
              veilles: 'Débrancher (économise 10%)',
              heures_creuses: 'Utiliser si tarif différencié'
            },
            mauritanianContext: [
              'Facture SOMELEC mensuelle',
              'Tarif UM mauritanien',
              'Compteur électrique',
              'Économie domestique'
            ]
          },
          exercises: [
            {
              type: 'energie',
              question: '1,5 kW pendant 2 heures. Énergie?',
              answer: 'E = 1,5 × 2 = 3 kWh',
              difficulty: 'beginner'
            },
            {
              type: 'cout',
              question: '150 kWh, tarif 30 UM/kWh. Montant?',
              answer: '150 × 30 = 4500 UM',
              difficulty: 'intermediate'
            },
            {
              type: 'consommation',
              question: 'Index: 5000 → 5180 kWh. Consommation?',
              answer: '5180 - 5000 = 180 kWh',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch8',
      title: 'RÉFLEXION ET RÉFRACTION DE LA LUMIÈRE',
      sections: [
        {
          id: 'ch8-s1',
          title: 'Réflexion de la lumière',
          description: 'Comprendre la réflexion',
          concepts: ['Réflexion', 'Miroir', 'Lois de Descartes', 'Angles'],
          objectives: [
            'Définir la réflexion',
            'Distinguer réflexion diffuse et spéculaire',
            'Appliquer lois de Descartes',
            'Calculer angles'
          ],
          content: {
            definition: 'Retour de la lumière sur une surface',
            types_reflexion: {
              diffuse: {
                surface: 'Rugueuse, irrégulière',
                effet: 'Lumière renvoyée dans toutes directions',
                exemples: 'Mur, papier, tissu, sable',
                resultat: 'Pas d\'image nette'
              },
              speculaire: {
                surface: 'Polie, lisse',
                effet: 'Lumière renvoyée direction privilégiée',
                exemples: 'Miroir plan, eau calme, métal poli',
                resultat: 'Image nette formée'
              }
            },
            vocabulaire: {
              rayon_incident: 'Rayon SI arrivant sur miroir',
              point_incidence: 'Point I de contact',
              rayon_reflechi: 'Rayon IR repartant du miroir',
              normale: 'Droite NI perpendiculaire au miroir en I',
              angle_incidence: 'Angle i entre SI et normale',
              angle_reflexion: 'Angle r entre IR et normale'
            },
            lois_descartes_reflexion: {
              loi1: {
                enonce: 'Rayon incident, rayon réfléchi et normale sont coplanaires',
                explication: 'Les 3 dans même plan'
              },
              loi2: {
                enonce: 'Angle d\'incidence = Angle de réflexion',
                formule: 'i = r',
                verification: 'Expérience avec disque gradué + laser'
              }
            },
            experience_verification: {
              materiel: 'Disque gradué vertical, miroir, laser',
              protocole: 'Envoyer rayon incident, mesurer i et r',
              observation: 'i = r pour tous angles testés',
              conclusion: 'Loi vérifiée expérimentalement'
            },
            mauritanianContext: [
              'Réflexion soleil sur sable',
              'Miroirs traditionnels',
              'Eau calme (oasis)',
              'Optique géométrique'
            ]
          },
          exercises: [
            {
              type: 'loi',
              question: 'Angle incidence 30°. Angle réflexion?',
              answer: 'r = i = 30° (loi réflexion)',
              difficulty: 'beginner'
            },
            {
              type: 'type',
              question: 'Quel type réflexion sur miroir poli?',
              answer: 'Réflexion spéculaire (surface lisse)',
              difficulty: 'beginner'
            },
            {
              type: 'coplanarité',
              question: 'Où sont incident, réfléchi et normale?',
              answer: 'Dans le même plan (coplanaires)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch8-s2',
          title: 'Image par miroir plan',
          description: 'Construction d\'image par miroir',
          concepts: ['Image virtuelle', 'Symétrie', 'Construction', 'Champ'],
          objectives: [
            'Construire image par miroir plan',
            'Comprendre image virtuelle',
            'Utiliser symétrie',
            'Déterminer champ d\'observation'
          ],
          content: {
            experience_bougies: {
              materiel: '2 bougies (A allumée, A\' éteinte), vitre fine',
              observation: 'A\' semble allumée et symétrique à A',
              conclusion: 'Image virtuelle symétrique par rapport miroir'
            },
            image_virtuelle: {
              definition: 'Image non projetable sur écran',
              formation: 'Intersection prolongements rayons réfléchis',
              propriete: 'Symétrique de l\'objet par rapport miroir',
              exemple: 'Main droite → image main gauche'
            },
            construction: {
              methode: {
                etape1: 'Tracer rayon incident AI vers miroir',
                etape2: 'Appliquer i = r pour racer rayon réfléchi',
                etape3: 'Prolonger rayons réfléchis (pointillés)',
                etape4: 'Intersection prolongements = image A\''
              },
              verification: 'A\' symétrique de A par rapport miroir'
            },
            proprietes_image: {
              position: 'Même distance derrière miroir',
              taille: 'Même taille que objet',
              orientation: 'Renversée gauche-droite',
              nature: 'Virtuelle (non projetable)'
            },
            champ_observation: {
              definition: 'Zone où œil voit objet par réflexion',
              construction: {
                etape1: 'Tracer rayons extrêmes de A',
                etape2: 'Réfléchir vers position œil O',
                etape3: 'Zone entre rayons = champ'
              },
              application: 'Dimensionnement miroirs'
            },
            mauritanianContext: [
              'Miroirs quotidiens',
              'Ambulance (écriture miroir)',
              'Applications pratiques',
              'Optique géométrique'
            ]
          },
          exercises: [
            {
              type: 'propriete',
              question: 'Image par miroir plan est réelle ou virtuelle?',
              answer: 'Virtuelle (non projetable sur écran)',
              difficulty: 'beginner'
            },
            {
              type: 'position',
              question: 'Objet à 20 cm du miroir. Position image?',
              answer: '20 cm derrière miroir (symétrique)',
              difficulty: 'intermediate'
            },
            {
              type: 'exemple',
              question: 'Pourquoi "AMBULANCE" écrit à l\'envers?',
              answer: 'Pour être lu correctement dans rétroviseur (miroir)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch8-s3',
          title: 'Réfraction de la lumière',
          description: 'Comprendre la déviation lumière',
          concepts: ['Réfraction', 'Dioptre', 'Indice', 'Déviation'],
          objectives: [
            'Définir la réfraction',
            'Identifier le dioptre',
            'Appliquer lois de Descartes',
            'Calculer angles de réfraction'
          ],
          content: {
            phenomene: {
              observation: 'Crayon plongé dans eau semble "cassé"',
              explication: 'Lumière change de direction à surface eau',
              cause: 'Vitesse lumière différente dans chaque milieu'
            },
            vocabulaire: {
              dioptre: {
                definition: 'Surface séparant deux milieux transparents',
                exemples: 'Air-eau, air-verre, eau-verre',
                plan: 'Généralement plan'
              },
              rayon_incident: 'Rayon SI arrivant sur dioptre',
              rayon_refracte: 'Rayon IR traversant et dévié',
              normale: 'Perpendiculaire au dioptre en I',
              angles: {
                incidence: 'i₁ entre SI et normale (milieu 1)',
                refraction: 'i₂ entre IR et normale (milieu 2)'
              }
            },
            indice_refraction: {
              definition: 'Caractérise milieu transparent',
              symbole: 'n (sans unité)',
              valeurs: {
                vide: 'n = 1 (exactement)',
                air: 'n ≈ 1 (très proche)',
                eau: 'n = 1,33',
                verre: 'n = 1,5',
                diamant: 'n = 2,42'
              },
              relation_vitesse: 'n = c/v (c: vitesse vide, v: vitesse milieu)'
            },
            lois_descartes_refraction: {
              loi1: 'Rayon incident, rayon réfracté et normale coplanaires',
              loi2: {
                enonce: 'Relation entre angles et indices',
                formule: 'n₁ × sin i₁ = n₂ × sin i₂',
                snell_descartes: 'Loi de Snell-Descartes',
                application: 'Calculer angle réfraction'
              }
            },
            sens_deviation: {
              milieu_moins_refringent_vers_plus: {
                cas: 'Air (n=1) → Eau (n=1,33)',
                effet: 'Rayon se rapproche de la normale',
                relation: 'i₂ < i₁',
                exemple: 'Rayon plonge vers normale'
              },
              milieu_plus_refringent_vers_moins: {
                cas: 'Eau (n=1,33) → Air (n=1)',
                effet: 'Rayon s\'écarte de la normale',
                relation: 'i₂ > i₁',
                exemple: 'Rayon s\'éloigne de normale'
              }
            },
            calcul_exemple: {
              donnees: 'Air → Eau, i₁ = 60°',
              formule: '1 × sin 60° = 1,33 × sin i₂',
              calcul: 'sin i₂ = sin 60°/1,33 = 0,866/1,33 = 0,651',
              resultat: 'i₂ = 40,6°',
              verification: '40,6° < 60° ✓ (se rapproche)'
            },
            mauritanianContext: [
              'Bâton dans eau (illusion)',
              'Mirages désert',
              'Lunettes correctrices',
              'Optique pratique'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce que la réfraction?',
              answer: 'Changement de direction lumière en traversant surface (dioptre)',
              difficulty: 'beginner'
            },
            {
              type: 'sens',
              question: 'Air → Verre: rayon se rapproche ou s\'écarte?',
              answer: 'Se rapproche de la normale (n_verre > n_air)',
              difficulty: 'intermediate'
            },
            {
              type: 'formule',
              question: 'Écris la loi de Snell-Descartes',
              answer: 'n₁ × sin i₁ = n₂ × sin i₂',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch8-s4',
          title: 'Angle limite et réflexion totale',
          description: 'Phénomène de réflexion totale',
          concepts: ['Angle limite', 'Réflexion totale', 'Fibres optiques'],
          objectives: [
            'Définir angle limite',
            'Calculer angle limite',
            'Comprendre réflexion totale',
            'Connaître applications'
          ],
          content: {
            angle_limite: {
              condition: 'Milieu plus réfringent → moins réfringent (n₁ > n₂)',
              definition: 'Angle incidence au-delà duquel réfraction impossible',
              formule: 'sin i_lim = n₂/n₁',
              calcul: 'i_lim = arcsin(n₂/n₁)'
            },
            calcul_angle_limite: {
              eau_air: {
                donnees: 'n_eau = 1,33, n_air = 1',
                formule: 'sin i_lim = 1/1,33 = 0,752',
                calcul: 'i_lim = 48,75°',
                interpretation: 'Angle limite eau-air ≈ 49°'
              },
              verre_air: {
                donnees: 'n_verre = 1,5, n_air = 1',
                formule: 'sin i_lim = 1/1,5 = 0,667',
                calcul: 'i_lim = 41,8°',
                reponse: '≈ 42°'
              }
            },
            reflexion_totale: {
              condition: 'i₁ > i_lim (dans milieu plus réfringent)',
              phenomene: 'Lumière totalement réfléchie, pas de réfraction',
              observation: 'Rayon ne sort pas du milieu',
              consequence: 'Miroir parfait (100% réflexion)'
            },
            applications: {
              fibres_optiques: {
                principe: 'Réflexion totale dans fibre',
                structure: 'Cœur verre (n élevé) + gaine (n faible)',
                avantage: 'Lumière guidée sans perte',
                utilisations: 'Internet, téléphone, médecine'
              },
              prismes: {
                jumelles: 'Réflexion totale dans prismes',
                periscopes: 'Changement direction lumière',
                avantage: 'Pas de perte (contrairement miroirs)'
              },
              mirages: {
                cause: 'Réflexion totale dans air chaud',
                observation: 'Sol semble mouillé (désert)',
                explication: 'Air chaud moins dense → réflexion totale'
              }
            },
            mauritanianContext: [
              'Mirages désert mauritanien',
              'Fibres optiques télécommunications',
              'Phénomènes optiques Sahara',
              'Applications technologiques'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule angle limite eau (n=1,33) → air (n=1)',
              answer: 'sin i_lim = 1/1,33, i_lim = 48,75° ≈ 49°',
              difficulty: 'intermediate'
            },
            {
              type: 'condition',
              question: 'Quand y a-t-il réflexion totale?',
              answer: 'Quand i > i_lim dans milieu plus réfringent',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'Principe des fibres optiques?',
              answer: 'Réflexion totale guide lumière sans perte',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch8-s5',
          title: 'Décomposition de la lumière',
          description: 'Spectre et couleurs',
          concepts: ['Spectre', 'Prisme', 'Dispersion', 'Arc-en-ciel'],
          objectives: [
            'Comprendre la décomposition',
            'Identifier les couleurs du spectre',
            'Expliquer l\'arc-en-ciel',
            'Utiliser un prisme'
          ],
          content: {
            experience_prisme: {
              materiel: 'Prisme triangulaire, lumière blanche, écran',
              protocole: 'Faire passer lumière blanche à travers prisme',
              observation: 'Lumière séparée en couleurs (spectre)',
              ordre_couleurs: 'Violet, Indigo, Bleu, Vert, Jaune, Orangé, Rouge'
            },
            conclusion: {
              lumiere_blanche: 'Mélange de toutes les couleurs',
              spectre_visible: 'Ensemble des radiations visibles',
              dispersion: 'Séparation des couleurs par prisme',
              cause: 'Indice réfraction varie selon couleur'
            },
            couleurs_spectre: {
              violet: 'Plus déviée (n plus élevé)',
              rouge: 'Moins déviée (n plus faible)',
              ordre_deviation: 'Violet > Indigo > Bleu > Vert > Jaune > Orangé > Rouge'
            },
            arc_en_ciel: {
              formation: {
                etape1: 'Lumière Soleil entre dans goutte d\'eau',
                etape2: 'Réfraction en entrant (dispersion)',
                etape3: 'Réflexion à l\'arrière de goutte',
                etape4: 'Réfraction en sortant',
                resultat: 'Séparation couleurs visible'
              },
              conditions: 'Soleil + pluie + observateur bien placé',
              ordre: 'Rouge extérieur, violet intérieur',
              double: 'Arc secondaire inversé (2 réflexions)'
            },
            applications: {
              spectroscopie: 'Analyse composition lumière',
              identification: 'Éléments chimiques par spectre',
              astronomie: 'Composition étoiles',
              colorimetrie: 'Mesure couleurs'
            },
            mauritanianContext: [
              'Arc-en-ciel après pluies',
              'Lumière solaire intense',
              'Décomposition lumière',
              'Phénomènes naturels'
            ]
          },
          exercises: [
            {
              type: 'composition',
              question: 'La lumière blanche est-elle pure?',
              answer: 'Non, c\'est un mélange de toutes les couleurs',
              difficulty: 'beginner'
            },
            {
              type: 'ordre',
              question: 'Quelle couleur est la plus déviée?',
              answer: 'Violet (indice réfraction plus élevé)',
              difficulty: 'intermediate'
            },
            {
              type: 'arc_en_ciel',
              question: 'Comment se forme un arc-en-ciel?',
              answer: 'Réfraction + réflexion + réfraction dans gouttes d\'eau',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch9',
      title: 'LES LENTILLES MINCES',
      sections: [
        {
          id: 'ch9-s1',
          title: 'Types de lentilles',
          description: 'Distinguer convergentes et divergentes',
          concepts: ['Lentille convergente', 'Lentille divergente', 'Foyer', 'Vergence'],
          objectives: [
            'Distinguer par la forme',
            'Comprendre convergence/divergence',
            'Identifier foyers',
            'Calculer vergence'
          ],
          content: {
            lentille_mince: {
              definition: 'Épaisseur au centre << diamètre',
              milieu: 'Généralement verre ou plastique transparent',
              role: 'Dévier rayons lumineux'
            },
            types: {
              convergente: {
                forme: 'Bords minces, centre épais',
                symbole: '[ + ]',
                effet: 'Converge rayons parallèles vers foyer',
                experience: 'Rayons soleil → point lumineux',
                exemples: 'Loupe, lentilles correctrices hypermétropie'
              },
              divergente: {
                forme: 'Bords épais, centre mince',
                symbole: '[ - ]',
                effet: 'Diverge rayons parallèles',
                observation: 'Rayons s\'écartent',
                exemples: 'Correctrices myopie'
              }
            },
            elements_caracteristiques: {
              centre_optique: {
                symbole: 'O',
                definition: 'Point où rayons ne sont pas déviés',
                propriete: 'Rayon passant par O non dévié'
              },
              axe_optique: {
                definition: 'Droite passant par O, perpendiculaire lentille',
                reference: 'Axe de symétrie'
              },
              foyer_image: {
                symbole: 'F\'',
                definition: 'Point de convergence rayons // à axe',
                position: 'Après lentille convergente',
                distance: 'OF\' = f (distance focale)'
              },
              foyer_objet: {
                symbole: 'F',
                definition: 'Position objet donnant image à infini',
                symetrie: 'OF = OF\' = f',
                propriete: 'F et F\' symétriques par rapport O'
              },
              distance_focale: {
                symbole: 'f',
                definition: 'Distance OF\' = OF',
                unite: 'Mètre (m) ou cm',
                signe: 'f > 0 (convergente), f < 0 (divergente)'
              },
              vergence: {
                symbole: 'C',
                definition: 'Inverse distance focale',
                formule: 'C = 1/f',
                unite: 'Dioptrie (δ)',
                interpretation: 'Mesure pouvoir convergent',
                signe: 'C > 0 (convergente), C < 0 (divergente)',
                exemple: {
                  f: '0,25 m = 25 cm',
                  C: 'C = 1/0,25 = 4 δ',
                  interpretation: 'Lentille +4 dioptries'
                }
              }
            },
            mauritanianContext: [
              'Loupes scolaires',
              'Lunettes correctrices',
              'Concentration soleil (feu)',
              'Optique appliquée'
            ]
          },
          exercises: [
            {
              type: 'forme',
              question: 'Comment reconnaître lentille convergente?',
              answer: 'Centre épais, bords minces (symbole +)',
              difficulty: 'beginner'
            },
            {
              type: 'vergence',
              question: 'f = 20 cm = 0,2 m. Calcule vergence',
              answer: 'C = 1/0,2 = 5 δ (dioptries)',
              difficulty: 'intermediate'
            },
            {
              type: 'foyer',
              question: 'Quelle distance sépare F et F\'?',
              answer: '2f (F et F\' symétriques par rapport à O)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch9-s2',
          title: 'Construction d\'images',
          description: 'Former images avec lentille convergente',
          concepts: ['Image réelle', 'Image virtuelle', 'Construction', 'Rayons'],
          objectives: [
            'Tracer 3 rayons particuliers',
            'Construire l\'image',
            'Distinguer réelle et virtuelle',
            'Prévoir nature selon position'
          ],
          content: {
            rayons_particuliers: {
              rayon1: {
                incident: 'Parallèle à l\'axe optique',
                emergeant: 'Passe par F\'',
                utilite: 'Définit convergence'
              },
              rayon2: {
                incident: 'Passe par centre optique O',
                emergeant: 'Non dévié (traverse droit)',
                utilite: 'Direction conservée'
              },
              rayon3: {
                incident: 'Passe par foyer objet F',
                emergeant: 'Parallèle à l\'axe',
                utilite: 'Symétrie F-F\''
              }
            },
            methode_construction: {
              etape1: 'Tracer les 3 rayons depuis point objet',
              etape2: 'Intersection rayons émergents = image',
              etape3: 'Identifier nature (réelle ou virtuelle)',
              note: '2 rayons suffisent, 3ème = vérification'
            },
            nature_image_selon_position: {
              objet_tres_loin: {
                position: 'd >> 2f',
                image: 'Réelle, renversée, réduite',
                observable: 'Sur écran',
                application: 'Appareil photo'
              },
              objet_a_2f: {
                position: 'd = 2f',
                image: 'Réelle, renversée, même taille',
                observable: 'Sur écran',
                application: 'Photocopie 1:1'
              },
              objet_entre_f_et_2f: {
                position: 'f < d < 2f',
                image: 'Réelle, renversée, agrandie',
                observable: 'Sur écran',
                application: 'Projecteur'
              },
              objet_a_f: {
                position: 'd = f',
                image: 'À l\'infini',
                observable: 'Non',
                application: 'Phare (rayons parallèles)'
              },
              objet_avant_f: {
                position: 'd < f',
                image: 'Virtuelle, droite, agrandie',
                observable: 'À l\'œil (pas écran)',
                application: 'Loupe'
              }
            },
            image_reelle_vs_virtuelle: {
              reelle: {
                formation: 'Intersection réelle rayons',
                projection: 'Peut être projetée sur écran',
                orientation: 'Renversée',
                position: 'De l\'autre côté lentille'
              },
              virtuelle: {
                formation: 'Intersection prolongements',
                projection: 'NON projetable',
                orientation: 'Droite (même sens)',
                position: 'Même côté que objet'
              }
            },
            mauritanianContext: [
              'Loupe pour lire',
              'Appareil photo',
              'Projecteurs',
              'Optique pratique'
            ]
          },
          exercises: [
            {
              type: 'position',
              question: 'Objet très loin. Nature image?',
              answer: 'Réelle, renversée, réduite (sur écran)',
              difficulty: 'intermediate'
            },
            {
              type: 'loupe',
              question: 'Loupe: objet avant ou après f?',
              answer: 'Avant f (d < f) → image virtuelle agrandie',
              difficulty: 'intermediate'
            },
            {
              type: 'distinction',
              question: 'Différence image réelle et virtuelle?',
              answer: 'Réelle: projetable écran, renversée. Virtuelle: non projetable, droite',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch9-s3',
          title: 'L\'œil et la vision',
          description: 'Comprendre la vision',
          concepts: ['Œil', 'Rétine', 'Cristallin', 'Accommodation'],
          objectives: [
            'Décrire l\'œil comme système optique',
            'Comprendre l\'accommodation',
            'Connaître punctum proximum et remotum',
            'Identifier anomalies visuelles'
          ],
          content: {
            oeil_reduit: {
              modele: 'Lentille convergente + écran',
              composants: {
                cornee: 'Surface transparente (protection)',
                iris: 'Diaphragme (contrôle lumière)',
                cristallin: 'Lentille convergente déformable',
                retine: 'Écran sensible (capteurs)',
                nerf_optique: 'Transmet au cerveau'
              },
              correspondance: 'Cristallin = lentille, Rétine = écran'
            },
            accommodation: {
              definition: 'Modification courbure cristallin pour voir net',
              mecanisme: {
                objet_loin: 'Cristallin aplati (f grande)',
                objet_proche: 'Cristallin bombé (f petite)',
                muscles: 'Muscles ciliaires ajustent'
              },
              limites: {
                punctum_remotum: {
                  definition: 'Point le plus éloigné vu net',
                  oeil_normal: 'Infini',
                  symbole: 'PR'
                },
                punctum_proximum: {
                  definition: 'Point le plus proche vu net',
                  oeil_normal: '25 cm (adulte)',
                  enfant: '≈ 15 cm',
                  symbole: 'PP'
                }
              }
            },
            vision_normale: {
              emmetrope: 'Œil sans défaut',
              PP: '25 cm',
              PR: 'Infini',
              image: 'Toujours sur rétine'
            },
            mauritanianContext: [
              'Santé visuelle',
              'Examen vue',
              'Anatomie œil',
              'Physiologie vision'
            ]
          },
          exercises: [
            {
              type: 'accommodation',
              question: 'Qu\'est-ce que l\'accommodation?',
              answer: 'Modification courbure cristallin pour voir net (proche ou loin)',
              difficulty: 'intermediate'
            },
            {
              type: 'PP',
              question: 'Quelle est la distance PP d\'un œil normal?',
              answer: '25 cm (adulte)',
              difficulty: 'beginner'
            },
            {
              type: 'modele',
              question: 'Dans modèle œil réduit, qu\'est-ce que l\'écran?',
              answer: 'La rétine (reçoit l\'image)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch9-s4',
          title: 'Anomalies visuelles et corrections',
          description: 'Myopie, hypermétropie, presbytie',
          concepts: ['Myopie', 'Hypermétropie', 'Presbytie', 'Correction'],
          objectives: [
            'Identifier les 3 anomalies',
            'Comprendre les causes',
            'Connaître les corrections',
            'Choisir la lentille appropriée'
          ],
          content: {
            myopie: {
              definition: 'Image se forme AVANT la rétine',
              cause: {
                œil_trop_long: 'Distance cristallin-rétine excessive',
                ou: 'Cristallin trop convergent'
              },
              consequence: {
                loin: 'Voit flou (image avant rétine)',
                proche: 'Voit net (image sur rétine)'
              },
              PR: 'Limité (pas infini)',
              PP: 'Plus proche que 25 cm',
              correction: {
                type: 'Lentille divergente [ - ]',
                effet: 'Fait diverger rayons',
                resultat: 'Image reculée sur rétine',
                vergence: 'Négative (ex: -2 δ)'
              },
              remarque: 'Myope retire lunettes pour lire'
            },
            hypermetropie: {
              definition: 'Image se forme DERRIÈRE la rétine',
              cause: {
                œil_trop_court: 'Distance cristallin-rétine insuffisante',
                ou: 'Cristallin pas assez convergent'
              },
              consequence: {
                loin: 'Voit net (avec effort accommodation)',
                proche: 'Voit flou (image derrière rétine)'
              },
              PR: 'Infini (comme normal)',
              PP: 'Plus loin que 25 cm',
              correction: {
                type: 'Lentille convergente [ + ]',
                effet: 'Fait converger rayons',
                resultat: 'Image avancée sur rétine',
                vergence: 'Positive (ex: +2 δ)'
              },
              remarque: 'Difficulté lecture (proche)'
            },
            presbytie: {
              definition: 'Perte souplesse cristallin avec âge',
              age_debut: 'Vers 45-50 ans',
              cause: 'Cristallin rigide, accommodation réduite',
              consequence: {
                loin: 'Voit bien',
                proche: 'Voit flou (lecture difficile)',
                PP: 'S\'éloigne progressivement'
              },
              correction: {
                type: 'Lentille convergente [ + ] pour vision proche',
                solutions: {
                  lunettes_lecture: 'Uniquement pour lire',
                  verres_progressifs: 'Haut (loin) + bas (proche)',
                  bifocaux: 'Deux zones distinctes'
                },
                vergence: 'Positive (ex: +1,5 δ)'
              },
              note: 'Peut se combiner avec myopie/hypermétropie'
            },
            tableau_recapitulatif: {
              myopie: 'Image avant rétine → Divergente [ - ]',
              hypermetropie: 'Image derrière rétine → Convergente [ + ]',
              presbytie: 'Cristallin rigide → Convergente [ + ] (lecture)'
            },
            mauritanianContext: [
              'Lunettes correctrices',
              'Presbytie personnes âgées',
              'Santé visuelle',
              'Opticiens locaux'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Myope: image avant ou après rétine?',
              answer: 'Avant la rétine',
              difficulty: 'beginner'
            },
            {
              type: 'correction',
              question: 'Quelle lentille corrige la myopie?',
              answer: 'Lentille divergente [ - ] (vergence négative)',
              difficulty: 'intermediate'
            },
            {
              type: 'presbytie',
              question: 'Pourquoi presbytie avec âge?',
              answer: 'Perte souplesse cristallin (accommodation réduite)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    }
  ]
};

export default YEAR4_PHYSICS_CURRICULUM;



