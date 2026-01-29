/**
 * Year 3 Science Curriculum - Mauritanie
 * Chapters 1-3: Digestion, Circulation, Excrétion
 */

export const YEAR3_SCIENCE_CURRICULUM = {
  year: 3,
  subject: 'Sciences',
  title: 'Manuel de Sciences Naturelles 3e AS (Troisième Année Secondaire) - Mauritanie',
  methodology: 'Approche IPN: Je découvre → Je retiens → J\'utilise. Intégration contexte sahélien mauritanien.',
  
  chapters: [
    {
      id: 'ch1',
      title: 'ALIMENTS ET DIGESTION',
      sections: [
        {
          id: 'ch1-s1',
          title: 'Types d\'aliments et nutriments',
          description: 'Identifier les différents types d\'aliments',
          concepts: ['Aliments', 'Nutriments', 'Protides', 'Lipides', 'Glucides', 'Minéraux'],
          objectives: [
            'Distinguer aliments simples et composés',
            'Identifier les nutriments (protides, lipides, glucides)',
            'Connaître les aliments mauritaniens',
            'Classer les aliments par catégorie'
          ],
          content: {
            definitions: {
              aliment_simple: 'Substance contenant UN SEUL nutriment (ex: sel de Taoudeni = NaCl pur)',
              aliment_compose: 'Mélange de nutriments (ex: couscous = glucides + protides + lipides)',
              nutriment: 'Substance directement utilisable par le corps'
            },
            types_nutriments: {
              protides: {
                role: 'Construction et réparation des tissus',
                sources: 'Viande, poisson, lait, œufs',
                exemple_local: 'Thon de Nouadhibou (25g/100g)'
              },
              lipides: {
                role: 'Énergie et protection',
                sources: 'Huile, beurre, viande grasse',
                exemple_local: 'Huile d\'arachide locale'
              },
              glucides: {
                role: 'Énergie rapide',
                sources: 'Pain, riz, pâtes, fruits',
                exemple_local: 'Dattes deglet de Tidjikja (75g/100g)'
              },
              mineraux: {
                role: 'Régulation et structure',
                sources: 'Sel, eau, légumes',
                exemple_local: 'Sel de Taoudeni'
              }
            },
            aliments_mauritaniens: {
              lait_frais: {
                origine: 'Nomades zébus',
                composition: 'Protides: 3,5g, Lipides: 3,5g, Glucides: 5g',
                usage: 'Base thé salé'
              },
              dattes: {
                origine: 'Oases Tidjikja',
                composition: 'Protides: 2g, Lipides: 0,2g, Glucides: 75g',
                usage: 'Caravane méhari'
              },
              thon: {
                origine: 'Nouadhibou',
                composition: 'Protides: 25g, Lipides: 20g',
                usage: 'Ramadan'
              }
            },
            mauritanianContext: [
              'Alimentation nomade',
              'Produits locaux (lait chamelle, dattes)',
              'Pêche atlantique',
              'Commerce des oases'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Classe ces aliments: sel, lait, pain',
              answer: 'Sel: simple (minéral), Lait: composé, Pain: composé',
              difficulty: 'beginner'
            },
            {
              type: 'nutriments',
              question: 'Quel nutriment est principal dans les dattes?',
              answer: 'Glucides (75g/100g)',
              difficulty: 'beginner'
            },
            {
              type: 'application',
              question: 'Pourquoi le thon est important pour les protides?',
              answer: 'Riche en protides (25g/100g) pour construction tissus',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch1-s2',
          title: 'Appareil digestif et anatomie',
          description: 'Connaître les organes de la digestion',
          concepts: ['Tube digestif', 'Bouche', 'Estomac', 'Intestins', 'Glandes'],
          objectives: [
            'Identifier les organes digestifs',
            'Connaître le trajet des aliments',
            'Comprendre le rôle de chaque organe',
            'Mémoriser l\'anatomie'
          ],
          content: {
            organes_principaux: {
              bouche: {
                role: 'Mastication et début digestion',
                dents: {
                  incisives: '2/2 (coupe pain dur)',
                  canines: '1/1 (déchire viande séchée)',
                  molaires: '3/3 (broyage mil)'
                },
                salive: 'Contient enzymes pour débuter digestion'
              },
              oesophage: {
                role: 'Transport vers estomac',
                longueur: '25-30 cm',
                mouvement: 'Péristaltisme'
              },
              estomac: {
                role: 'Brassage et digestion chimique',
                capacite: '2L chez adulte',
                duree: '2-4 heures',
                note: 'Capacité réduite en cas de malnutrition chronique'
              },
              intestin_grele: {
                role: 'Digestion finale et absorption',
                longueur: '6-7 mètres',
                villosites: 'Surface 200-300 m² (réduite si malnutrition)'
              },
              gros_intestin: {
                role: 'Absorption d\'eau',
                longueur: '1,5 mètre',
                duree: '24-72 heures'
              }
            },
            glandes_annexes: {
              foie: 'Production bile (digestion lipides)',
              pancreas: 'Production enzymes digestives',
              glandes_salivaires: 'Production salive'
            },
            mauritanianContext: [
              'Adaptation au régime local',
              'Digestion lait chamelle',
              'Transit et déshydratation',
              'Nutrition sahélienne'
            ]
          },
          exercises: [
            {
              type: 'trajet',
              question: 'Quel est le trajet des aliments?',
              answer: 'Bouche → Œsophage → Estomac → Intestin grêle → Gros intestin',
              difficulty: 'beginner'
            },
            {
              type: 'role',
              question: 'Quel organe absorbe les nutriments?',
              answer: 'Intestin grêle (grâce aux villosités)',
              difficulty: 'beginner'
            },
            {
              type: 'duree',
              question: 'Combien de temps les aliments restent dans l\'estomac?',
              answer: '2-4 heures (plus long si régime riche en mil)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch1-s3',
          title: 'Digestion mécanique et chimique',
          description: 'Comprendre les deux types de digestion',
          concepts: ['Digestion mécanique', 'Digestion chimique', 'Enzymes', 'Transformation'],
          objectives: [
            'Distinguer digestion mécanique et chimique',
            'Comprendre le rôle des enzymes',
            'Suivre la transformation des aliments',
            'Réaliser des expériences'
          ],
          content: {
            digestion_mecanique: {
              definition: 'Fragmentation physique des aliments',
              actions: {
                mastication: {
                  organe: 'Dents',
                  duree: '30 secondes/bouchée',
                  note: 'Pain rassis nécessite mastication plus longue'
                },
                brassage: {
                  organe: 'Estomac',
                  duree: '2-4 heures',
                  effet: 'Mélange avec sucs gastriques'
                },
                peristaltisme: {
                  organe: 'Intestins',
                  duree: '24-72 heures',
                  effet: 'Propulsion du bol alimentaire'
                }
              }
            },
            digestion_chimique: {
              definition: 'Transformation chimique par enzymes',
              enzymes: {
                amylase_salivaire: {
                  action: 'Amidon → Maltose → Glucose',
                  lieu: 'Bouche',
                  experience: 'Pain en bouche 15 min → goût sucré'
                },
                pepsine: {
                  action: 'Protéines → Peptides',
                  lieu: 'Estomac',
                  milieu: 'Acide (pH 2)'
                },
                lipase: {
                  action: 'Lipides → Acides gras + Glycérol',
                  lieu: 'Intestin grêle',
                  aide: 'Bile du foie'
                }
              }
            },
            experience_pain: {
              protocole: [
                'Garder pain en bouche sans avaler',
                't = 0: goût neutre',
                't = 5 min: légère douceur (amidon → maltose)',
                't = 15 min: goût sucré net (maltose → glucose)'
              ],
              conclusion: 'Salive contient enzyme qui transforme amidon'
            },
            mauritanianContext: [
              'Digestion du pain mauritanien',
              'Transformation du lait caillé',
              'Digestion viande séchée',
              'Adaptation au régime local'
            ]
          },
          exercises: [
            {
              type: 'distinction',
              question: 'Mastication: digestion mécanique ou chimique?',
              answer: 'Mécanique (fragmentation physique)',
              difficulty: 'beginner'
            },
            {
              type: 'enzyme',
              question: 'Quelle enzyme digère l\'amidon dans la bouche?',
              answer: 'Amylase salivaire',
              difficulty: 'intermediate'
            },
            {
              type: 'transformation',
              question: 'Pourquoi le pain devient sucré en bouche?',
              answer: 'Amylase salivaire transforme amidon en sucres (maltose puis glucose)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch1-s4',
          title: 'Absorption intestinale',
          description: 'Comprendre comment les nutriments passent dans le sang',
          concepts: ['Absorption', 'Villosités', 'Veine porte', 'Transport'],
          objectives: [
            'Comprendre l\'absorption intestinale',
            'Connaître le rôle des villosités',
            'Suivre le trajet des nutriments',
            'Comprendre l\'importance de la surface'
          ],
          content: {
            villosites: {
              definition: 'Replis de la paroi intestinale augmentant la surface',
              surface: '200-300 m² chez adulte bien nourri',
              effet_malnutrition: 'Surface réduite si malnutrition',
              structure: 'Capillaires sanguins + vaisseaux lymphatiques'
            },
            absorption: {
              glucose_acides_amines: {
                destination: 'Veine porte → Foie',
                transport: 'Dans le sang',
                utilisation: 'Énergie ou stockage'
              },
              lipides: {
                destination: 'Voie lymphatique → Circulation générale',
                transport: 'Dans la lymphe',
                forme: 'Acides gras + glycérol'
              },
              mineraux_eau: {
                destination: 'Sang directement',
                lieu: 'Intestin grêle et gros intestin'
              }
            },
            importance_surface: {
              calcul: 'Grande surface = absorption efficace',
              consequence: 'Malnutrition → villosités atrophiées → absorption réduite'
            },
            mauritanianContext: [
              'Malnutrition et absorption',
              'Importance alimentation variée',
              'Santé intestinale',
              'Nutrition sahélienne'
            ]
          },
          exercises: [
            {
              type: 'role',
              question: 'Quel est le rôle des villosités?',
              answer: 'Augmenter la surface d\'absorption intestinale',
              difficulty: 'beginner'
            },
            {
              type: 'trajet',
              question: 'Où vont les glucides après absorption?',
              answer: 'Veine porte → Foie → Circulation sanguine',
              difficulty: 'intermediate'
            },
            {
              type: 'surface',
              question: 'Pourquoi une grande surface intestinale est importante?',
              answer: 'Permet une meilleure absorption des nutriments',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch1-s5',
          title: 'Maladies digestives et hygiène',
          description: 'Connaître les maladies et la prévention',
          concepts: ['Intoxication', 'Carie', 'Dysenterie', 'Hygiène', 'Prévention'],
          objectives: [
            'Identifier les maladies digestives courantes',
            'Connaître les causes',
            'Comprendre la prévention',
            'Appliquer les règles d\'hygiène'
          ],
          content: {
            intoxication_alimentaire: {
              cas_reel: 'Été 2023 Nouadhibou: 50 cas après poisson mal conservé',
              bacteries: {
                salmonella: 'Incubation 48h, fièvre + diarrhée',
                e_coli: 'Incubation 24h, crampes abdominales'
              },
              traitement: 'ORS maison (eau + sel + sucre) + zinc',
              prevention: 'Conservation au froid, cuisson complète'
            },
            carie_dentaire: {
              prevalence: '80% écoliers urbains vs 40% ruraux',
              facteur: 'Thé très sucré (5-7 morceaux/tasse)',
              prevention: [
                'Brossage 2 fois/jour',
                'Limiter sucres',
                'Visite dentiste annuelle'
              ]
            },
            dysenterie: {
              symptomes: 'Selles sanglantes + mucus (10-20/jour)',
              transmission: 'Eau d\'oued + légumes crus',
              prevention: [
                'Ébullition eau 10 minutes',
                'Épluchage fruits',
                'Lavage mains au savon'
              ],
              cycle: 'Eau contaminée → ingestion → infection intestinale'
            },
            hygiene_alimentaire: {
              regles: [
                'Laver les mains avant manger',
                'Cuire bien les aliments',
                'Conserver au frais',
                'Boire eau bouillie'
              ]
            },
            mauritanianContext: [
              'Maladies hydriques fréquentes',
              'Problèmes d\'eau potable',
              'Habitudes alimentaires',
              'Santé publique'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Quels sont les symptômes de la dysenterie?',
              answer: 'Selles sanglantes avec mucus, très fréquentes (10-20/jour)',
              difficulty: 'beginner'
            },
            {
              type: 'prevention',
              question: 'Comment prévenir l\'intoxication alimentaire?',
              answer: 'Conservation au froid, cuisson complète, hygiène des mains',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'Pourquoi plus de caries en ville qu\'en zone rurale?',
              answer: 'Consommation excessive de thé sucré en ville',
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
      title: 'SANG ET CIRCULATION',
      sections: [
        {
          id: 'ch2-s1',
          title: 'Composition du sang',
          description: 'Étudier les composants du sang',
          concepts: ['Sang', 'Plasma', 'Hématies', 'Leucocytes', 'Plaquettes'],
          objectives: [
            'Connaître les composants du sang',
            'Identifier les cellules sanguines',
            'Comprendre le rôle de chaque élément',
            'Observer au microscope'
          ],
          content: {
            composition_globale: {
              plasma: '55% du volume (liquide)',
              elements_figures: '45% (cellules)',
              volume_total: '5-6 litres chez adulte'
            },
            plasma: {
              composition: '90% eau + 10% substances dissoutes',
              substances: {
                albumine: {
                  role: 'Transport',
                  source_locale: 'Lait caillé (faible)'
                },
                glucose: {
                  role: 'Énergie',
                  source: 'Dattes (rapide)'
                },
                fibrinogene: {
                  role: 'Coagulation',
                  note: 'Carence en fer fréquente'
                }
              }
            },
            cellules: {
              hematies: {
                nom: 'Globules rouges',
                nombre: '5-6 millions/mm³ chez homme sahélien',
                taille: '7 μm diamètre',
                role: 'Transport oxygène (hémoglobine)',
                adaptation: 'Nombre augmenté pour compenser anémie'
              },
              leucocytes: {
                nom: 'Globules blancs',
                nombre: '7000/mm³ (augmenté si parasitoses)',
                role: 'Défense contre infections',
                types: 'Lymphocytes, phagocytes'
              },
              plaquettes: {
                nombre: '150 000-400 000/mm³',
                role: 'Coagulation du sang',
                duree_vie: '8-10 jours'
              }
            },
            mauritanianContext: [
              'Anémie fréquente (fer)',
              'Parasitoses intestinales',
              'Adaptation sahélienne',
              'Santé sanguine'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Quelles cellules transportent l\'oxygène?',
              answer: 'Les hématies (globules rouges) grâce à l\'hémoglobine',
              difficulty: 'beginner'
            },
            {
              type: 'nombre',
              question: 'Combien d\'hématies par mm³?',
              answer: '5-6 millions/mm³',
              difficulty: 'beginner'
            },
            {
              type: 'role',
              question: 'Quel est le rôle des leucocytes?',
              answer: 'Défense contre les infections et parasites',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch2-s2',
          title: 'Le cœur et son fonctionnement',
          description: 'Comprendre l\'anatomie et le rôle du cœur',
          concepts: ['Cœur', 'Oreillettes', 'Ventricules', 'Valves', 'Battements'],
          objectives: [
            'Connaître l\'anatomie du cœur',
            'Comprendre le cycle cardiaque',
            'Identifier les valves',
            'Mesurer le pouls'
          ],
          content: {
            anatomie: {
              cavites: {
                oreillette_droite: 'Reçoit sang veineux (pauvre en O₂)',
                ventricule_droit: 'Envoie sang vers poumons',
                oreillette_gauche: 'Reçoit sang oxygéné des poumons',
                ventricule_gauche: 'Envoie sang dans tout le corps'
              },
              valves: {
                tricuspide: 'Entre oreillette droite et ventricule droit',
                mitrale: 'Entre oreillette gauche et ventricule gauche',
                role: 'Empêcher le reflux du sang'
              }
            },
            cycle_cardiaque: {
              systole: 'Contraction (expulsion sang)',
              diastole: 'Relâchement (remplissage)',
              frequence: '60-80 battements/minute au repos'
            },
            dissection_coeur_mouton: {
              activite: 'Dissection pratique',
              observations: [
                'Identifier oreillettes et ventricules',
                'Observer épaisseur parois',
                'Tester valves avec injection d\'eau'
              ],
              conclusion: 'Sens unique de circulation'
            },
            mauritanianContext: [
              'Dissection au marché local',
              'Fréquence cardiaque et chaleur',
              'Adaptation effort physique',
              'Santé cardiovasculaire'
            ]
          },
          exercises: [
            {
              type: 'anatomie',
              question: 'Combien de cavités a le cœur?',
              answer: '4 cavités: 2 oreillettes + 2 ventricules',
              difficulty: 'beginner'
            },
            {
              type: 'role',
              question: 'Quel ventricule envoie le sang dans tout le corps?',
              answer: 'Ventricule gauche',
              difficulty: 'beginner'
            },
            {
              type: 'valves',
              question: 'Quel est le rôle des valves cardiaques?',
              answer: 'Empêcher le reflux du sang (circulation à sens unique)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s3',
          title: 'Double circulation sanguine',
          description: 'Comprendre les deux circuits',
          concepts: ['Petite circulation', 'Grande circulation', 'Poumons', 'Corps'],
          objectives: [
            'Distinguer les deux circulations',
            'Suivre le trajet du sang',
            'Comprendre les échanges gazeux',
            'Connaître les temps de circulation'
          ],
          content: {
            petite_circulation: {
              nom: 'Circulation pulmonaire',
              trajet: 'Ventricule droit → Artère pulmonaire → Poumons → Veines pulmonaires → Oreillette gauche',
              role: 'Oxygénation du sang',
              duree: '5-6 secondes',
              sang: 'Veineux (pauvre O₂) → Artériel (riche O₂)'
            },
            grande_circulation: {
              nom: 'Circulation systémique',
              trajet: 'Ventricule gauche → Aorte → Corps entier → Veines caves → Oreillette droite',
              role: 'Apporter O₂ et nutriments aux organes',
              duree: '20-25 secondes',
              sang: 'Artériel → Veineux'
            },
            schema_complet: {
              depart: 'Ventricule gauche',
              circuit1: 'Corps → retour cœur droit',
              circuit2: 'Poumons → retour cœur gauche',
              cycle_complet: 'Environ 30 secondes'
            },
            echanges: {
              dans_poumons: 'CO₂ éliminé, O₂ capté',
              dans_organes: 'O₂ libéré, CO₂ récupéré',
              principe: 'Diffusion selon gradient de concentration'
            },
            mauritanianContext: [
              'Adaptation altitude (plateau Adrar)',
              'Effort physique en chaleur',
              'Oxygénation en climat sec',
              'Santé respiratoire'
            ]
          },
          exercises: [
            {
              type: 'trajet',
              question: 'Décris le trajet de la petite circulation',
              answer: 'Cœur droit → Poumons → Cœur gauche',
              difficulty: 'beginner'
            },
            {
              type: 'role',
              question: 'Quel est le rôle de la petite circulation?',
              answer: 'Oxygéner le sang dans les poumons',
              difficulty: 'beginner'
            },
            {
              type: 'duree',
              question: 'Combien de temps pour un cycle complet?',
              answer: 'Environ 30 secondes (5-6s poumons + 20-25s corps)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch2-s4',
          title: 'Groupes sanguins',
          description: 'Comprendre les groupes sanguins',
          concepts: ['Groupes ABO', 'Rhésus', 'Compatibilité', 'Transfusion'],
          objectives: [
            'Connaître les groupes sanguins',
            'Comprendre le système ABO',
            'Comprendre le facteur Rhésus',
            'Connaître les compatibilités'
          ],
          content: {
            systeme_ABO: {
              groupe_A: 'Antigène A, anticorps anti-B',
              groupe_B: 'Antigène B, anticorps anti-A',
              groupe_AB: 'Antigènes A et B, pas d\'anticorps',
              groupe_O: 'Pas d\'antigène, anticorps anti-A et anti-B'
            },
            facteur_rhesus: {
              Rh_positif: 'Présence antigène D (85% population)',
              Rh_negatif: 'Absence antigène D (15%)'
            },
            repartition_mauritanie: {
              O_plus: '60% (dominant en population nomade)',
              A_plus: '25%',
              B_plus: '5% (rare → problèmes transfusion)',
              AB_plus: '5%',
              negatifs: '5% total'
            },
            compatibilite: {
              donneur_universel: 'O- (peut donner à tous)',
              receveur_universel: 'AB+ (peut recevoir de tous)',
              regle: 'Pas d\'antigène du donneur contre anticorps du receveur'
            },
            mauritanianContext: [
              'Banque de sang nationale',
              'Rareté B+ en zones nomades',
              'Campagnes de don',
              'Transfusion d\'urgence'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Quel groupe est donneur universel?',
              answer: 'O- (pas d\'antigènes)',
              difficulty: 'beginner'
            },
            {
              type: 'compatibilite',
              question: 'Groupe A+ peut recevoir de qui?',
              answer: 'A+, A-, O+, O-',
              difficulty: 'intermediate'
            },
            {
              type: 'probleme',
              question: 'Pourquoi groupe B+ rare pose problème?',
              answer: 'Difficulté trouver donneurs compatibles en urgence',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s5',
          title: 'Santé cardiovasculaire',
          description: 'Prévenir les maladies du cœur',
          concepts: ['Facteurs de risque', 'Hypertension', 'Prévention', 'Mode de vie'],
          objectives: [
            'Identifier les facteurs de risque',
            'Comprendre l\'hypertension',
            'Connaître les mesures préventives',
            'Adopter un mode de vie sain'
          ],
          content: {
            facteurs_risque_mauritanie: {
              tabagisme: {
                prevalence: '30% hommes (5% femmes)',
                effet: 'Rétrécissement artères, risque infarctus'
              },
              alimentation: {
                exces_sel: 'Thé salé + viande séchée',
                consequence: 'HTA précoce (35 ans vs 50 ans Europe)',
                recommandation: 'Limiter sel, augmenter fruits'
              },
              sedentarite: {
                probleme: 'Travail bureau + chaleur décourage sport',
                solution: 'Marche tôt matin ou tard soir'
              }
            },
            hypertension: {
              definition: 'Pression artérielle > 140/90 mmHg',
              symptomes: 'Souvent silencieux (tueur silencieux)',
              complications: 'AVC, infarctus, insuffisance rénale',
              prevention: [
                'Réduire sel',
                'Activité physique régulière',
                'Éviter tabac',
                'Contrôler poids'
              ]
            },
            mode_vie_sain: {
              alimentation: 'Équilibrée, riche légumes, peu sel',
              activite: '30 min marche/jour',
              hydratation: '1,5-2 L eau/jour',
              tabac: 'Arrêt complet'
            },
            mauritanianContext: [
              'HTA précoce en Mauritanie',
              'Excès de sel traditionnel',
              'Tabagisme masculin',
              'Prévention santé publique'
            ]
          },
          exercises: [
            {
              type: 'facteurs',
              question: 'Cite 3 facteurs de risque cardiovasculaire',
              answer: 'Tabagisme, excès de sel, sédentarité',
              difficulty: 'beginner'
            },
            {
              type: 'prevention',
              question: 'Comment prévenir l\'hypertension?',
              answer: 'Réduire sel, activité physique, éviter tabac, alimentation équilibrée',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'Pourquoi HTA plus précoce en Mauritanie?',
              answer: 'Excès de sel (thé salé + viande séchée) dans alimentation traditionnelle',
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
      title: 'URINE ET EXCRÉTION',
      sections: [
        {
          id: 'ch3-s1',
          title: 'Appareil urinaire et anatomie',
          description: 'Connaître les organes de l\'excrétion',
          concepts: ['Reins', 'Uretères', 'Vessie', 'Urètre', 'Filtration'],
          objectives: [
            'Identifier les organes urinaires',
            'Connaître l\'anatomie des reins',
            'Comprendre le trajet de l\'urine',
            'Observer par dissection'
          ],
          content: {
            organes: {
              reins: {
                nombre: '2 (droit et gauche)',
                position: 'Région lombaire, part et d\'autre colonne',
                taille: '12 cm × 6 cm × 3 cm',
                poids: '150g (adulte bien nourri) → 100g (malnutrition)',
                role: 'Filtration du sang, production urine'
              },
              ureteres: {
                nombre: '2',
                role: 'Conduire urine des reins à vessie',
                longueur: '25-30 cm'
              },
              vessie: {
                role: 'Stockage urine',
                capacite: '300-500 mL',
                signal: 'Envie à partir de 150-200 mL'
              },
              uretre: {
                role: 'Évacuation urine vers extérieur',
                longueur: '20 cm (homme), 4 cm (femme)'
              }
            },
            anatomie_rein: {
              cortex: 'Partie externe (filtration)',
              medullaire: 'Partie interne (concentration)',
              bassinet: 'Collecte urine vers uretère',
              vascularisation: 'Artère rénale Ø 5mm (pression importante)'
            },
            dissection_souris: {
              protocole: [
                'Fixation souris sur dos',
                'Incision peau abdominale',
                'Identifier reins (forme haricot)',
                'Observer uretères vers vessie'
              ]
            },
            mauritanianContext: [
              'Adaptation déshydratation',
              'Fonction rénale en climat sec',
              'Maladies urinaires',
              'Anatomie pratique'
            ]
          },
          exercises: [
            {
              type: 'anatomie',
              question: 'Combien de reins possède l\'être humain?',
              answer: '2 reins (droit et gauche)',
              difficulty: 'beginner'
            },
            {
              type: 'trajet',
              question: 'Quel est le trajet de l\'urine?',
              answer: 'Reins → Uretères → Vessie → Urètre → Extérieur',
              difficulty: 'beginner'
            },
            {
              type: 'role',
              question: 'Quel est le rôle principal des reins?',
              answer: 'Filtrer le sang et produire l\'urine pour éliminer déchets',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch3-s2',
          title: 'Formation et composition de l\'urine',
          description: 'Comprendre comment l\'urine se forme',
          concepts: ['Filtration', 'Réabsorption', 'Néphron', 'Composition urine'],
          objectives: [
            'Comprendre la filtration rénale',
            'Connaître la composition de l\'urine',
            'Comprendre la réabsorption',
            'Calculer le débit de filtration'
          ],
          content: {
            filtration_renale: {
              processus: 'Sang → filtration → urine primitive',
              debit: '900 L sang filtré/jour',
              adaptation: 'Débit réduit en cas de déshydratation',
              quantite_urine: '1,5 L urine/jour (concentration variable)'
            },
            composition_urine: {
              eau: '95%',
              uree: '2% (déchet protéines)',
              acide_urique: '0,05%',
              sels_mineraux: 'NaCl, K, Phosphates',
              normale: 'PAS de glucose, PAS de protéines'
            },
            reabsorption: {
              principe: 'Récupération substances utiles',
              eau: '99% eau filtrée réabsorbée',
              glucose: '100% réabsorbé (si concentration normale)',
              sels: 'Réabsorption partielle selon besoins'
            },
            nephron: {
              unite: 'Unité fonctionnelle du rein (1 million par rein)',
              parties: 'Glomérule (filtration) + Tubule (réabsorption)'
            },
            mauritanianContext: [
              'Déshydratation sahélienne',
              'Adaptation climat sec',
              'Concentration urine',
              'Besoins hydriques'
            ]
          },
          exercises: [
            {
              type: 'composition',
              question: 'Quel est le principal déchet dans l\'urine?',
              answer: 'L\'urée (2%, provient de la dégradation des protéines)',
              difficulty: 'beginner'
            },
            {
              type: 'filtration',
              question: 'Combien de litres de sang sont filtrés par jour?',
              answer: 'Environ 900 litres/jour',
              difficulty: 'intermediate'
            },
            {
              type: 'anormal',
              question: 'Pourquoi le glucose dans l\'urine est anormal?',
              answer: 'Normalement 100% réabsorbé. Présence = diabète',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch3-s3',
          title: 'Tests urinaires et analyses',
          description: 'Réaliser des tests chimiques',
          concepts: ['Tests chimiques', 'Glucose', 'Albumine', 'Pathologies'],
          objectives: [
            'Réaliser des tests urinaires',
            'Interpréter les résultats',
            'Identifier les anomalies',
            'Comprendre les pathologies'
          ],
          content: {
            tests_chimiques: {
              test_chlorures: {
                reactif: 'Nitrate d\'argent (AgNO₃)',
                resultat_positif: 'Précipité blanc',
                interpretation: 'Présence de sel (normal)',
                exemple: 'Sel de Taoudeni détectable'
              },
              test_glucose: {
                reactif: 'Liqueur de Fehling chauffée',
                resultat_positif: 'Précipité rouge brique',
                interpretation: 'Glucose présent (ANORMAL)',
                pathologie: 'Diabète (sucré ou gestationnel fréquent)'
              },
              test_albumine: {
                reactif: 'Acide acétique',
                resultat_positif: 'Trouble persistant',
                interpretation: 'Protéines présentes (ANORMAL)',
                pathologie: 'Néphrite (souvent bilharzienne)'
              }
            },
            interpretation: {
              urine_normale: 'Jaune clair, transparente, pas glucose/albumine',
              urine_pathologique: {
                foncee: 'Déshydratation',
                rouge: 'Sang (hématurie - bilharziose)',
                trouble: 'Infection',
                sucree: 'Diabète'
              }
            },
            mauritanianContext: [
              'Diabète gestationnel fréquent',
              'Bilharziose urinaire endémique',
              'Tests au dispensaire',
              'Diagnostic maladies locales'
            ]
          },
          exercises: [
            {
              type: 'test',
              question: 'Quel test détecte le glucose?',
              answer: 'Liqueur de Fehling → précipité rouge brique si positif',
              difficulty: 'beginner'
            },
            {
              type: 'interpretation',
              question: 'Que signifie albumine dans l\'urine?',
              answer: 'Anomalie rénale (néphrite, souvent bilharzienne)',
              difficulty: 'intermediate'
            },
            {
              type: 'diagnostic',
              question: 'Urine rouge foncé. Cause probable?',
              answer: 'Hématurie (sang), souvent due à bilharziose urinaire',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s4',
          title: 'Bilharziose urinaire',
          description: 'Comprendre cette maladie endémique',
          concepts: ['Bilharziose', 'Parasite', 'Cycle', 'Prévention', 'Symptômes'],
          objectives: [
            'Connaître le cycle du parasite',
            'Identifier les symptômes',
            'Comprendre la transmission',
            'Appliquer la prévention'
          ],
          content: {
            cycle_parasite: {
              etape1: 'Œufs dans eau douce → Miracidium',
              etape2: 'Miracidium → Escargot Bulinus',
              etape3: 'Cercaires libérées dans eau',
              etape4: 'Pénétration peau lors baignade oued',
              etape5: 'Migration vers vessie',
              etape6: 'Ponte œufs → élimination urine'
            },
            symptomes: {
              phase_aigue: 'Hématurie 3-6 mois post-exposition',
              signe_principal: 'Urine rouge (sang)',
              evolution: 'Douleurs miction, fatigue',
              complication: 'Fibrose vessie, insuffisance rénale'
            },
            transmission: {
              lieu: 'Oueds, mares, points d\'eau stagnante',
              activite_risque: 'Baignade, lessive, irrigation',
              saison: 'Fin saison pluies (prolifération escargots)'
            },
            prevention: {
              mesures: [
                'Éviter baignade en eau douce stagnante',
                'Porter bottes lors travaux agricoles',
                'Traiter eau de boisson',
                'Éliminer escargots hôtes'
              ],
              traitement: 'Praziquantel (médicament efficace)'
            },
            mauritanianContext: [
              'Endémique région fleuve Sénégal',
              'Problème santé publique majeur',
              'Zones riziculture (Boghé, Kaedi)',
              'Campagnes dépistage scolaires'
            ]
          },
          exercises: [
            {
              type: 'cycle',
              question: 'Comment le parasite entre dans le corps?',
              answer: 'Cercaires pénètrent la peau lors contact avec eau contaminée',
              difficulty: 'intermediate'
            },
            {
              type: 'symptome',
              question: 'Quel est le principal symptôme de la bilharziose?',
              answer: 'Hématurie (sang dans l\'urine, urine rouge)',
              difficulty: 'beginner'
            },
            {
              type: 'prevention',
              question: 'Comment éviter la bilharziose?',
              answer: 'Éviter baignade eau stagnante, porter bottes, traiter eau',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s5',
          title: 'Hygiène urinaire et santé rénale',
          description: 'Maintenir des reins en bonne santé',
          concepts: ['Hygiène', 'Hydratation', 'Alimentation', 'Prévention'],
          objectives: [
            'Comprendre l\'importance de l\'hydratation',
            'Connaître les bonnes pratiques',
            'Prévenir les maladies rénales',
            'Utiliser remèdes traditionnels sains'
          ],
          content: {
            hydratation: {
              besoin: '1,5 L/jour minimum (2L en climat chaud)',
              adaptation: 'Eau bouillie + citron pour goût',
              effet: 'Dilution urine, prévention calculs',
              deshydratation: 'Urine foncée, concentration accrue'
            },
            alimentation: {
              recommandations: [
                'Limiter viande grillée (excès urée)',
                'Réduire sel',
                'Augmenter fruits et légumes',
                'Protéines modérées'
              ],
              note: 'Excès protéines → surcharge rénale'
            },
            plantes_traditionnelles: {
              moringa: {
                usage: 'Infusion (diurétique traditionnel)',
                propriete: 'Augmente volume urine',
                preparation: 'Feuilles séchées en infusion'
              },
              precaution: 'Consulter médecin, pas d\'automédication'
            },
            signes_alerte: {
              douleur: 'Douleurs lombaires persistantes',
              urine_anormale: 'Couleur, odeur, présence sang',
              frequence: 'Mictions trop fréquentes ou rares',
              action: 'Consultation médicale rapide'
            },
            mauritanianContext: [
              'Déshydratation fréquente',
              'Médecine traditionnelle (moringa)',
              'Accès eau potable limité',
              'Prévention maladies rénales'
            ]
          },
          exercises: [
            {
              type: 'hydratation',
              question: 'Combien d\'eau boire par jour en climat chaud?',
              answer: '2 litres minimum (1,5L normal + supplément chaleur)',
              difficulty: 'beginner'
            },
            {
              type: 'prevention',
              question: 'Pourquoi limiter la viande grillée?',
              answer: 'Excès d\'urée qui surcharge les reins',
              difficulty: 'intermediate'
            },
            {
              type: 'signe',
              question: 'Cite un signe d\'alerte pour les reins',
              answer: 'Urine rouge (sang), douleurs lombaires, urine foncée persistante',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        }
      ]
    },
    {
      id: 'ch4',
      title: 'GÉOLOGIE - ROCHES SÉDIMENTAIRES',
      sections: [
        {
          id: 'ch4-s1',
          title: 'Introduction à la géologie',
          description: 'Découvrir la science de la Terre',
          concepts: ['Géologie', 'Roches', 'Minéraux', 'Fossiles'],
          objectives: [
            'Définir la géologie',
            'Connaître les types de roches',
            'Identifier les roches mauritaniennes',
            'Comprendre l\'importance des fossiles'
          ],
          content: {
            definition: {
              geologie: 'Science qui étudie la Terre, son histoire, ses processus',
              roche: 'Matériau solide formé d\'assemblage de minéraux',
              fossile: 'Reste d\'organisme ancien préservé dans la roche'
            },
            types_roches: {
              magmatique: {
                formation: 'Refroidissement de lave',
                exemple_mauritanien: 'Granite d\'Akjoujt',
                utilisation: 'Construction'
              },
              sedimentaire: {
                formation: 'Dépôt et compaction de sédiments',
                exemple_mauritanien: 'Calcaire de Boutilimit',
                utilisation: 'Chaux, ciment'
              },
              metamorphique: {
                formation: 'Transformation sous pression/température',
                exemple_mauritanien: 'Gneiss de Tasiast',
                utilisation: 'Ornement'
              }
            },
            exemple_local: {
              gres_zouerate: 'Grès ferrugineux rouge contenant fossiles de poissons',
              interpretation: 'Preuve d\'une mer ancienne en Mauritanie'
            },
            mauritanianContext: [
              'Roches du Sahara mauritanien',
              'Gisements miniers (Akjoujt, Zouérate)',
              'Fossiles marins (ancienne mer)',
              'Géologie locale'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un fossile?',
              answer: 'Reste d\'organisme ancien préservé dans une roche',
              difficulty: 'beginner'
            },
            {
              type: 'classification',
              question: 'Le granite d\'Akjoujt est quel type de roche?',
              answer: 'Roche magmatique (formée par refroidissement)',
              difficulty: 'beginner'
            },
            {
              type: 'interpretation',
              question: 'Que prouvent les fossiles de poissons à Zouérate?',
              answer: 'Existence d\'une mer ancienne en Mauritanie',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch4-s2',
          title: 'Formation des roches sédimentaires',
          description: 'Comprendre le processus de sédimentation',
          concepts: ['Érosion', 'Transport', 'Sédimentation', 'Diagenèse'],
          objectives: [
            'Comprendre l\'érosion',
            'Suivre le transport des sédiments',
            'Comprendre la sédimentation',
            'Connaître la diagenèse'
          ],
          content: {
            processus_complet: {
              etape1_erosion: {
                definition: 'Fragmentation des roches par eau, vent, température',
                exemple: 'Vent harmattan transporte sable 200 km',
                agents: 'Vent, eau, gel, racines'
              },
              etape2_transport: {
                definition: 'Déplacement des fragments',
                exemple: 'Oued transporte graviers vers Atlantique',
                moyens: 'Eau (rivières), vent, glaciers'
              },
              etape3_sedimentation: {
                definition: 'Dépôt des sédiments',
                exemple: 'Formation delta fleuve Sénégal (10m/100 ans)',
                ordre: 'Graviers (lourds) puis sables puis argiles (légers)'
              },
              etape4_diagenese: {
                definition: 'Transformation sédiment en roche',
                processus: 'Compaction + cimentation',
                exemple: 'Sable → Grès en 1 million d\'années',
                facteurs: 'Pression, temps, minéraux dissous'
              }
            },
            experience_sable: {
              materiel: 'Sable de dunes + eau + éprouvette',
              protocole: 'Agiter puis laisser reposer',
              observation: 'Stratification en couches horizontales',
              conclusion: 'Sédimentation naturelle crée des strates'
            },
            mauritanianContext: [
              'Dunes du Sahara mauritanien',
              'Delta du fleuve Sénégal',
              'Érosion par harmattan',
              'Formation géologique locale'
            ]
          },
          exercises: [
            {
              type: 'ordre',
              question: 'Ordonne: Diagenèse, Érosion, Transport, Sédimentation',
              answer: 'Érosion → Transport → Sédimentation → Diagenèse',
              difficulty: 'beginner'
            },
            {
              type: 'agent',
              question: 'Quel vent transporte le sable en Mauritanie?',
              answer: 'L\'harmattan (peut transporter sable sur 200 km)',
              difficulty: 'beginner'
            },
            {
              type: 'transformation',
              question: 'Comment le sable devient-il grès?',
              answer: 'Par diagenèse: compaction + cimentation sur ~1 million d\'années',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s3',
          title: 'Roches siliceuses - Sable et grès',
          description: 'Étudier le sable et sa transformation',
          concepts: ['Sable', 'Grès', 'Quartz', 'Stratification', 'Dureté'],
          objectives: [
            'Identifier le sable et le grès',
            'Connaître les propriétés du quartz',
            'Distinguer types de sable',
            'Comprendre la formation du grès'
          ],
          content: {
            sable: {
              composition: 'Principalement quartz (SiO₂)',
              taille: 'Grains 0,1 - 2 mm',
              durete: 'Dureté 7 (échelle Mohs) - raye le verre',
              test: 'Grains de quartz rayent verre'
            },
            types_sahariens: {
              sable_eolien: {
                caracteristiques: 'Grains ronds et mats',
                origine: 'Transport par vent',
                proportion: '90% du Sahara mauritanien'
              },
              sable_fluviatile: {
                caracteristiques: 'Grains anguleux et luisants',
                origine: 'Transport par eau (oueds)',
                localisation: 'Lits de rivières'
              },
              sable_ferrugineux: {
                caracteristiques: 'Rouge (oxyde de fer)',
                effet: 'Coloration rouge des dunes',
                localisation: 'Zones riches en fer'
              }
            },
            gres: {
              formation: 'Sable cimenté (compaction + minéraux)',
              exemple: 'Grès rouge de Zouérate',
              utilisation: 'Construction, pavage'
            },
            mauritanianContext: [
              'Dunes du Sahara',
              'Sable des oueds',
              'Grès de Zouérate',
              'Couleur rouge du désert'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Quelle est la composition principale du sable?',
              answer: 'Quartz (SiO₂)',
              difficulty: 'beginner'
            },
            {
              type: 'distinction',
              question: 'Comment distinguer sable éolien et fluviatile?',
              answer: 'Éolien: grains ronds mats. Fluviatile: grains anguleux luisants',
              difficulty: 'intermediate'
            },
            {
              type: 'transformation',
              question: 'Comment se forme le grès?',
              answer: 'Sable compacté et cimenté par minéraux dissous',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s4',
          title: 'Argile et calcaire',
          description: 'Étudier deux roches sédimentaires importantes',
          concepts: ['Argile', 'Calcaire', 'Plasticité', 'Effervescence', 'Fossiles'],
          objectives: [
            'Identifier l\'argile et ses propriétés',
            'Identifier le calcaire',
            'Réaliser des tests',
            'Connaître les utilisations'
          ],
          content: {
            argile: {
              caracteristiques: {
                tactile: 'Rayable à l\'ongle (tendre)',
                plasticite: 'Forme figurines avec eau',
                couleurs: 'Blanc (kaolin), rouge (fer oxydé)'
              },
              test: {
                protocole: 'Argile + eau → pâte plastique',
                cuisson: 'Chauffage 800°C → durcissement',
                resultat: 'Terre cuite (fissures normales)'
              },
              types_mauritaniens: {
                kaolin_blanc: 'Adrar (poteries fines)',
                argile_rouge: 'Fer oxydé → briques cuites'
              },
              utilisation: 'Poterie traditionnelle (femmes), briques'
            },
            calcaire: {
              composition: 'CaCO₃ (carbonate de calcium)',
              test_caracteristique: {
                reactif: 'Acide chlorhydrique (HCl)',
                resultat: 'Effervescence (bulles CO₂)',
                reaction: 'CaCO₃ + HCl → CO₂ + H₂O + CaCl₂'
              },
              fossiles: 'Coquilles strombes (mer crétacée) visibles',
              utilisation: {
                chaux: 'CaCO₃ → CaO (900°C) pour enduits',
                whitewash: 'Poudre pour blanchir maisons',
                ciment: 'Mélangé avec argile'
              }
            },
            mauritanianContext: [
              'Poterie traditionnelle Adrar',
              'Calcaire de Boutilimit',
              'Maisons blanchies à la chaux',
              'Artisanat féminin'
            ]
          },
          exercises: [
            {
              type: 'test',
              question: 'Comment tester si une roche est du calcaire?',
              answer: 'Ajouter HCl → effervescence (bulles CO₂) si calcaire',
              difficulty: 'beginner'
            },
            {
              type: 'propriete',
              question: 'Quelle propriété caractérise l\'argile?',
              answer: 'Plasticité (forme pâte avec eau)',
              difficulty: 'beginner'
            },
            {
              type: 'utilisation',
              question: 'Comment obtenir la chaux vive?',
              answer: 'Chauffer calcaire à 900°C: CaCO₃ → CaO + CO₂',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch4-s5',
          title: 'Sel et pétrole - Roches particulières',
          description: 'Étudier le sel gemme et le pétrole',
          concepts: ['Sel', 'Halite', 'Pétrole', 'Combustible fossile', 'Formation'],
          objectives: [
            'Connaître les propriétés du sel',
            'Comprendre la formation du pétrole',
            'Identifier les gisements mauritaniens',
            'Connaître les utilisations'
          ],
          content: {
            sel_gemme: {
              formule: 'NaCl (chlorure de sodium)',
              proprietes: {
                solubilite: '350 g/L dans eau à 20°C',
                cristallisation: 'Cubes parfaits (halite)',
                fusion: '800°C'
              },
              gisements_mauritaniens: {
                sebkha_nterert: 'Trarza - extraction artisanale',
                sebkha_idjil: 'Tiris - sel gemme blanc',
                taoudeni: 'Sel traditionnel (commerce transsaharien)'
              },
              utilisations: {
                alimentaire: 'Conservation poisson (mullet séché)',
                routes: 'Déneigement adapté Nouakchott',
                commerce: 'Caravanes historiques'
              }
            },
            petrole: {
              formation: {
                etape1: 'Plancton marin mort (crétacé)',
                etape2: 'Enfouissement 3-4 km profondeur',
                etape3: 'Température 100-150°C',
                etape4: 'Transformation en hydrocarbures',
                duree: 'Plusieurs millions d\'années'
              },
              piege_petrolier: {
                structure: 'Calcaire réservoir + argile couverture',
                forme: 'Anticlinal (pli convexe)',
                migration: 'Pétrole remonte par légèreté'
              },
              gisement_chinguetti: {
                reserves: '120 millions de barils',
                production: '2006-2017',
                impact: 'Emplois pêcheurs → raffineurs',
                localisation: 'Offshore atlantique'
              },
              produits_derives: {
                carburants: 'Gasoil pirogues, essence 4×4 désert',
                plastiques: 'Sacs d\'eau Nouakchott',
                bitume: 'Routes Nouakchott-Nouadhibou'
              }
            },
            mauritanianContext: [
              'Sel de Taoudeni (commerce)',
              'Pétrole offshore Chinguetti',
              'Sebkhas (lacs salés)',
              'Économie pétrolière'
            ]
          },
          exercises: [
            {
              type: 'propriete',
              question: 'Quelle est la formule chimique du sel?',
              answer: 'NaCl (chlorure de sodium)',
              difficulty: 'beginner'
            },
            {
              type: 'formation',
              question: 'Comment se forme le pétrole?',
              answer: 'Plancton marin enfoui → température élevée → transformation en millions d\'années',
              difficulty: 'intermediate'
            },
            {
              type: 'local',
              question: 'Cite un gisement mauritanien',
              answer: 'Chinguetti (pétrole offshore) ou Sebkha N\'Terert (sel)',
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
      title: 'PROBLÈMES ENVIRONNEMENTAUX',
      sections: [
        {
          id: 'ch5-s1',
          title: 'Changements climatiques',
          description: 'Comprendre le réchauffement et ses impacts',
          concepts: ['Climat', 'Réchauffement', 'Effet de serre', 'Désertification'],
          objectives: [
            'Comprendre le changement climatique',
            'Connaître les données mauritaniennes',
            'Identifier les impacts locaux',
            'Comprendre l\'effet de serre'
          ],
          content: {
            donnees_mauritanie: {
              temperature: '+1,5°C depuis 1970',
              precipitations: 'De 400 mm (1970) à 150 mm (2023) au sud-est',
              desertification: 'Avancée désert 150 000 km² (1974-2004)',
              impact: 'Perte terres agricoles, migration populations'
            },
            effet_serre: {
              principe: 'Gaz retiennent chaleur comme serre',
              gaz: {
                CO2: {
                  source: 'Combustion bois/charbon (80% foyers ruraux)',
                  augmentation: 'Déforestation'
                },
                methane: {
                  source: 'Riz irrigué Boghé + digestion ruminants',
                  effet: '25× plus puissant que CO₂'
                }
              },
              mecanisme: 'Rayons soleil piégés → température augmente'
            },
            impacts_locaux: {
              secheresse: {
                region: 'Hodh Ech Chargui',
                exemple: 'Puits asséchés 2022',
                consequence: 'Mortalité bétail, famine'
              },
              inondations: {
                region: 'Nouakchott',
                exemple: 'Quartiers Keur Massar sous eau 2023',
                cause: 'Pluies intenses concentrées'
              },
              salinisation: {
                region: 'Fleuve Sénégal',
                probleme: 'Intrusion eau salée 40 km amont',
                consequence: 'Riziculture compromise'
              }
            },
            mauritanianContext: [
              'Sécheresse récurrente',
              'Désertification du Sahel',
              'Inondations urbaines',
              'Crise climatique locale'
            ]
          },
          exercises: [
            {
              type: 'donnees',
              question: 'De combien a augmenté la température depuis 1970?',
              answer: '+1,5°C',
              difficulty: 'beginner'
            },
            {
              type: 'gaz',
              question: 'Cite deux gaz à effet de serre',
              answer: 'CO₂ (combustion) et méthane (ruminants, riz)',
              difficulty: 'beginner'
            },
            {
              type: 'impact',
              question: 'Quel impact du climat sur le fleuve Sénégal?',
              answer: 'Salinisation: intrusion eau salée 40 km amont',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch5-s2',
          title: 'Pollution de l\'air et de l\'eau',
          description: 'Comprendre les pollutions',
          concepts: ['Pollution atmosphérique', 'Pollution hydrique', 'Contaminants', 'Sources'],
          objectives: [
            'Identifier les sources de pollution',
            'Connaître les polluants',
            'Comprendre les impacts',
            'Proposer des solutions'
          ],
          content: {
            pollution_air: {
              sources_urbaines: {
                vehicules: {
                  probleme: '80% véhicules > 10 ans',
                  emission: 'Échappement noir (particules)',
                  solution: 'Contrôle technique, véhicules récents'
                },
                industrie: {
                  source: 'Cimenterie de Nouakchott',
                  polluant: 'SO₂ (dioxyde de soufre)',
                  impact: 'Pluies acides'
                },
                domestique: {
                  source: 'Bois + charbon de cuisson',
                  polluant: 'Particules PM2.5',
                  sante: 'Maladies respiratoires'
                }
              },
              mesures: {
                vehicules_electriques: 'Projet solaire Bokhol',
                filtres: 'Filtres à charbon foyers (expérimental Kiffa)',
                energie_propre: 'Solaire, éolien'
              }
            },
            pollution_eau: {
              contaminants: {
                nitrates: {
                  source: 'Agriculture maraîchère (tomates)',
                  danger: 'Toxiques pour nourrissons',
                  norme: '< 50 mg/L'
                },
                pesticides: {
                  source: 'DDT historique',
                  persistance: '20 ans dans sol',
                  effet: 'Accumulation chaîne alimentaire'
                },
                hydrocarbures: {
                  cas: 'Déversement 2021 Nouadhibou (1000L)',
                  impact: 'Pollution baie, mortalité poissons',
                  duree: 'Plusieurs années'
                }
              }
            },
            mauritanianContext: [
              'Vieux véhicules polluants',
              'Pollution baie Nouadhibou',
              'Pesticides agriculture',
              'Qualité air Nouakchott'
            ]
          },
          exercises: [
            {
              type: 'sources',
              question: 'Cite 3 sources de pollution de l\'air',
              answer: 'Véhicules vieux, industrie (cimenterie), bois de cuisson',
              difficulty: 'beginner'
            },
            {
              type: 'eau',
              question: 'D\'où viennent les nitrates dans l\'eau?',
              answer: 'Agriculture maraîchère (engrais pour tomates)',
              difficulty: 'intermediate'
            },
            {
              type: 'solution',
              question: 'Quelle solution pour réduire pollution véhicules?',
              answer: 'Véhicules électriques (projet solaire) ou contrôle technique',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch5-s3',
          title: 'Catastrophes naturelles et gestion',
          description: 'Comprendre et prévenir les catastrophes',
          concepts: ['Sécheresse', 'Inondations', 'Feux de brousse', 'Criquets', 'Prévention'],
          objectives: [
            'Identifier les catastrophes sahéliennes',
            'Connaître les données historiques',
            'Comprendre les causes',
            'Appliquer des solutions'
          ],
          content: {
            secheresse: {
              frequence: '1 année sur 3',
              chronologie: {
                '1970-1980': 'Perte 150 000 km² terres agricoles',
                '2005': 'Crise alimentaire → 40% population assistée',
                '2022': 'Sécheresse exceptionnelle → 750 000 personnes affectées'
              },
              consequences: 'Famine, mortalité bétail, exode rural',
              adaptation: 'Cultures résistantes, irrigation'
            },
            inondations: {
              cas_2023: {
                pluie: '200 mm/24h (équivalent annuel!)',
                degats: '3000 maisons détruites',
                routes: 'Nationale 3 coupée',
                reponse: 'Digues provisoires (sacs de sable)'
              },
              cause: 'Pluies intenses + ruissellement + urbanisation'
            },
            feux_brousse: {
              surface_annuelle: '50 000 hectares/an',
              donnees_2020: {
                hodh_gharbi: '330 205 ha brûlés',
                assaba: '18 230 ha',
                cause: 'Cigarettes + vent harmattan, brûlis agricole'
              },
              prevention: [
                'Pare-feux (tranchées 2m large)',
                'Sensibilisation mosquées + écoles',
                'Surveillance saison sèche'
              ]
            },
            invasion_criquets: {
              cycle_2020_2023: {
                origine: 'Reproduction oued Sénégal (humidité)',
                essaim: '40 millions criquets',
                deplacement: '200 km/jour',
                impact: 'Destruction 100% cultures mil Hodh'
              },
              lutte: 'Pulvérisation insecticides, surveillance'
            },
            mauritanianContext: [
              'Sécheresses historiques',
              'Inondations Nouakchott',
              'Feux Hodh El Gharbi',
              'Criquets pèlerins'
            ]
          },
          exercises: [
            {
              type: 'frequence',
              question: 'Quelle est la fréquence des sécheresses?',
              answer: '1 année sur 3',
              difficulty: 'beginner'
            },
            {
              type: 'cas',
              question: 'Combien de pluie lors inondations 2023 Nouakchott?',
              answer: '200 mm en 24h (équivalent d\'une année)',
              difficulty: 'intermediate'
            },
            {
              type: 'prevention',
              question: 'Comment prévenir les feux de brousse?',
              answer: 'Pare-feux (tranchées), sensibilisation, surveillance saison sèche',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch5-s4',
          title: 'Gestion des déchets',
          description: 'Gérer les déchets de manière responsable',
          concepts: ['Déchets', 'Tri', 'Recyclage', 'Compostage', 'Pollution sol'],
          objectives: [
            'Connaître les types de déchets',
            'Comprendre l\'importance du tri',
            'Pratiquer le compostage',
            'Réduire les déchets'
          ],
          content: {
            statistiques_2023: {
              production: '0,7 kg/personne/jour à Nouakchott',
              tri: 'Seulement 5% des ménages',
              recyclage: 'Plastiques → granulés exportés Chine',
              decharge: 'Décharge sauvage = problème sanitaire'
            },
            types_dechets: {
              organiques: 'Restes alimentaires, végétaux',
              plastiques: 'Sacs, bouteilles (pollution majeure)',
              metaux: 'Canettes, ferraille',
              verre: 'Bouteilles (recyclable)'
            },
            solutions_communautaires: {
              compostage: {
                materiel: 'Fumier chameau + déchets verts',
                processus: 'Décomposition 3-6 mois',
                produit: 'Engrais pour maraîchers',
                exemple: 'École agricole Boghé'
              },
              recyclage: {
                plastiques: 'Collecte → granulés',
                metaux: 'Ferraille réutilisée',
                verre: 'Consigne bouteilles'
              },
              reduction: {
                principe: 'Réduire à la source',
                actions: 'Sacs réutilisables, refuser plastiques',
                campagne: 'Affiche "Plastik dafa sax saalit" (wolof)'
              }
            },
            pollution_sol: {
              probleme: 'Métaux lourds zone industrielle Nouadhibou',
              effet: 'Contamination légumes urbains',
              solution: 'Phyto-remédiation (plantes Spartina)'
            },
            mauritanianContext: [
              'Déchets Nouakchott',
              'Pollution plastique',
              'Compostage communautaire',
              'Projets écoles'
            ]
          },
          exercises: [
            {
              type: 'statistique',
              question: 'Combien de déchets produit un Nouakchottois/jour?',
              answer: '0,7 kg/personne/jour',
              difficulty: 'beginner'
            },
            {
              type: 'compostage',
              question: 'Avec quoi faire du compost en Mauritanie?',
              answer: 'Fumier de chameau + déchets verts → engrais',
              difficulty: 'intermediate'
            },
            {
              type: 'reduction',
              question: 'Comment réduire les déchets plastiques?',
              answer: 'Sacs réutilisables, refuser plastiques, campagnes sensibilisation',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch5-s5',
          title: 'Solutions environnementales',
          description: 'Agir pour l\'environnement',
          concepts: ['Solutions', 'Actions concrètes', 'Projets', 'Engagement'],
          objectives: [
            'Proposer des solutions',
            'Mettre en œuvre des projets',
            'S\'engager pour l\'environnement',
            'Mobiliser la communauté'
          ],
          content: {
            projets_eleves: {
              affiches: {
                theme: 'Anti-plastique',
                slogan: 'Plastik dafa sax saalit (wolof: le plastique pollue)',
                diffusion: 'École, mosquée, marché'
              },
              compostage_ecole: {
                materiel: 'Composteur école agricole Boghé',
                utilisation: 'Fumier pour jardin scolaire',
                pedagogie: 'Apprentissage pratique'
              },
              plantation: {
                projet: 'Mangrove Nouakchott lagune',
                nombre: '1000 plants en 2023',
                role: 'Protection côte, nurserie poissons',
                partenaires: 'ONG + écoles'
              }
            },
            actions_individuelles: {
              quotidien: [
                'Réduire consommation eau',
                'Éteindre lumières',
                'Tri des déchets',
                'Transport partagé'
              ],
              ecole: [
                'Jardin scolaire',
                'Club environnement',
                'Nettoyage quartier',
                'Sensibilisation pairs'
              ]
            },
            actions_communautaires: {
              pare_feux: 'Tranchées protection villages',
              reforestation: 'Acacias résistants sécheresse',
              eau: 'Protection sources, puits communautaires',
              sensibilisation: 'Sermons mosquées, cours écoles'
            },
            mauritanianContext: [
              'Projets écoles mauritaniennes',
              'Mangroves Nouakchott',
              'Compostage Boghé',
              'Engagement jeunesse'
            ]
          },
          exercises: [
            {
              type: 'projet',
              question: 'Cite un projet environnemental d\'élèves',
              answer: 'Plantation mangrove (1000 plants Nouakchott 2023) ou compostage école',
              difficulty: 'beginner'
            },
            {
              type: 'action',
              question: 'Que peux-tu faire quotidiennement?',
              answer: 'Réduire eau, éteindre lumières, trier déchets, transport partagé',
              difficulty: 'beginner'
            },
            {
              type: 'mangrove',
              question: 'Pourquoi planter des mangroves?',
              answer: 'Protection côte, nurserie pour poissons, lutte érosion',
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

export default YEAR3_SCIENCE_CURRICULUM;

