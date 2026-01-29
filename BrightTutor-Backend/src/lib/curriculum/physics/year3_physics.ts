/**
 * Year 3 Physics Curriculum - Mauritanie
 * Chapters 1-3: États de la Matière, Mélanges, Circuits Électriques
 */

export const YEAR3_PHYSICS_CURRICULUM = {
  year: 3,
  subject: 'Physique',
  title: 'Manuel de Physique-Chimie 3e AS (Troisième Année Secondaire) - Mauritanie',
  methodology: 'Approche expérimentale: Observation → Expérience → Conclusion. Connexions avec réalité mauritanienne.',
  
  chapters: [
    {
      id: 'ch1',
      title: 'LES DIFFÉRENTS ÉTATS DE LA MATIÈRE',
      sections: [
        {
          id: 'ch1-s1',
          title: 'Les trois états de la matière',
          description: 'Identifier et distinguer solides, liquides et gaz',
          concepts: ['État solide', 'État liquide', 'État gazeux', 'Propriétés'],
          objectives: [
            'Identifier les trois états physiques',
            'Distinguer solides compacts et divisés',
            'Comprendre les propriétés de chaque état',
            'Reconnaître les états dans l\'environnement'
          ],
          content: {
            definition: 'La matière constitue tout ce qui nous entoure',
            classification: {
              solides: {
                definition: 'Forme et volume définis',
                compacts: {
                  caracteristiques: 'Objets massifs avec forme définie',
                  exemples_mauritaniens: 'Table de thé, verre de thé, pain, dattes, glace',
                  proprietes: [
                    'Forme propre',
                    'Volume propre',
                    'Saisissable entièrement'
                  ]
                },
                divises: {
                  definition: 'Ensemble de petits solides',
                  exemples: 'Sable, farine, sucre en poudre',
                  proprietes: [
                    'Pas de forme propre',
                    'Prend forme du récipient',
                    'Saisissable partiellement'
                  ]
                }
              },
              liquides: {
                proprietes: {
                  surface_libre: 'Toujours plane et horizontale',
                  forme: 'Pas de forme propre, prend celle du récipient',
                  volume: 'Volume propre conservé',
                  incompressibilite: 'Ne peut être compressé',
                  inexpansibilite: 'Ne peut être étendu'
                },
                exemples: 'Eau, huile, lait, vinaigre',
                experience: {
                  protocole: 'Transvasage eau entre récipients',
                  observation: 'Volume constant, forme variable',
                  conclusion: 'Liquide a volume propre mais pas forme propre'
                }
              },
              gaz: {
                proprietes: {
                  forme: 'Pas de forme propre',
                  volume: 'Occupe tout l\'espace disponible',
                  compressibilite: 'Peut être compressé',
                  expansibilite: 'Peut être étendu'
                },
                exemples: 'Air, vapeur d\'eau, gaz butane, dioxygène, dioxyde de carbone',
                experience_seringue: {
                  compression: 'Volume diminue quand on pousse piston',
                  expansion: 'Volume augmente quand on tire piston',
                  conclusion: 'Gaz compressibles et expansibles'
                }
              }
            },
            mauritanianContext: [
              'Sable du désert (solide divisé)',
              'Thé mauritanien (liquide)',
              'Air chaud du Sahara (gaz)',
              'Glace fondante (changement état)'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Classe: bois, eau, air, sable',
              answer: 'Solides: bois (compact), sable (divisé). Liquide: eau. Gaz: air',
              difficulty: 'beginner'
            },
            {
              type: 'proprietes',
              question: 'Pourquoi le sable n\'a pas de forme propre?',
              answer: 'Solide divisé: prend la forme du récipient',
              difficulty: 'intermediate'
            },
            {
              type: 'experience',
              question: 'Peut-on comprimer un liquide?',
              answer: 'Non, les liquides sont incompressibles',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch1-s2',
          title: 'Changements d\'état',
          description: 'Comprendre les transformations entre états',
          concepts: ['Vaporisation', 'Condensation', 'Solidification', 'Fusion', 'Sublimation'],
          objectives: [
            'Identifier les changements d\'état',
            'Comprendre vaporisation et condensation',
            'Connaître solidification et fusion',
            'Reconnaître la sublimation'
          ],
          content: {
            vaporisation: {
              definition: 'Passage de l\'état liquide à gazeux',
              temperature: '100°C pour l\'eau',
              experience: {
                protocole: 'Chauffer eau jusqu\'à ébullition',
                observation: 'Formation de vapeur d\'eau',
                conclusion: 'Eau liquide → vapeur = vaporisation'
              },
              types: {
                ebullition: 'Vaporisation rapide à 100°C',
                evaporation: 'Vaporisation lente à température ambiante'
              }
            },
            condensation: {
              definition: 'Passage de l\'état gazeux à liquide',
              autre_nom: 'Liquéfaction',
              experience: {
                protocole: 'Vapeur d\'eau sur assiette froide',
                observation: 'Formation de gouttelettes',
                conclusion: 'Vapeur → eau liquide = condensation'
              }
            },
            solidification: {
              definition: 'Passage liquide → solide',
              temperature: '0°C pour l\'eau',
              observation: 'Température reste constante pendant transformation',
              exemple: 'Eau → glace'
            },
            fusion: {
              definition: 'Passage solide → liquide',
              temperature: '0°C pour la glace',
              processus: 'Chauffage progressif',
              observation: 'Glace → eau',
              contraire: 'Inverse de solidification'
            },
            sublimation: {
              definition: 'Passage direct solide → gazeux (sans passer par liquide)',
              exemple_mauritanien: 'Neige qui disparaît au soleil sans fondre',
              exemple_pratique: 'Formation de givre dans réfrigérateur',
              remarque: 'Rare dans conditions normales'
            },
            diagramme_changements: {
              schema: 'Solide ⇄ Liquide ⇄ Gaz',
              noms: {
                solide_liquide: 'Fusion (→) / Solidification (←)',
                liquide_gaz: 'Vaporisation (→) / Condensation (←)',
                solide_gaz: 'Sublimation (→) / Condensation solide (←)'
              }
            },
            mauritanianContext: [
              'Évaporation eau sous soleil désert',
              'Condensation sur bouteilles froides',
              'Glace fondante dans boissons',
              'Vapeur thé mauritanien'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Eau qui bout: quel changement d\'état?',
              answer: 'Vaporisation (ébullition à 100°C)',
              difficulty: 'beginner'
            },
            {
              type: 'inverse',
              question: 'Quel est l\'inverse de la fusion?',
              answer: 'Solidification',
              difficulty: 'beginner'
            },
            {
              type: 'observation',
              question: 'Buée sur vitre froide: quel phénomène?',
              answer: 'Condensation (vapeur d\'eau → eau liquide)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch1-s3',
          title: 'Conservation de la masse',
          description: 'Comprendre la conservation lors des changements d\'état',
          concepts: ['Masse', 'Conservation', 'Volume', 'Variation'],
          objectives: [
            'Comprendre la conservation de la masse',
            'Mesurer masse avant et après changement',
            'Expliquer la variation du volume',
            'Appliquer le principe de conservation'
          ],
          content: {
            conservation_masse: {
              principe: 'La masse se conserve lors des changements d\'état',
              experience: {
                materiel: 'Glaçon + balance',
                protocole: [
                  'Peser glaçon (ex: 10,0 g)',
                  'Laisser fondre',
                  'Peser eau obtenue'
                ],
                resultat: 'Masse avant = masse après = 10,0 g',
                conclusion: 'Masse constante malgré changement état'
              },
              formule: 'm_avant = m_après',
              importance: 'Principe fondamental de la physique'
            },
            variation_volume: {
              observation: {
                eau_glace: 'Bouteille d\'eau se déforme au congélateur',
                explication: 'Volume de la glace > volume de l\'eau',
                pourcentage: 'Augmentation environ 10%'
              },
              consequence: 'Volume peut varier, mais pas la masse',
              exemple_chiffre: {
                eau: '100 mL',
                glace: '110 mL (environ)',
                masse: 'Constante (100 g)'
              }
            },
            difference_masse_volume: {
              masse: {
                definition: 'Quantité de matière',
                conservation: 'Se conserve toujours',
                unite: 'kg, g'
              },
              volume: {
                definition: 'Espace occupé',
                variation: 'Peut changer selon état',
                unite: 'm³, L, cm³'
              }
            },
            mauritanianContext: [
              'Glace dans boissons (masse = quantité)',
              'Eau évaporée (masse conservée dans vapeur)',
              'Congélation aliments',
              'Mesures au marché (masse)'
            ]
          },
          exercises: [
            {
              type: 'conservation',
              question: '25g de glace fondent. Masse d\'eau obtenue?',
              answer: '25g (conservation de la masse)',
              difficulty: 'beginner'
            },
            {
              type: 'volume',
              question: '100 mL d\'eau gelent. Volume de glace?',
              answer: 'Environ 110 mL (augmentation 10%)',
              difficulty: 'intermediate'
            },
            {
              type: 'principe',
              question: 'Que se conserve lors changement d\'état?',
              answer: 'La masse (le volume peut varier)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 30
        },
        {
          id: 'ch1-s4',
          title: 'Mesure de masse et volume',
          description: 'Mesurer les grandeurs physiques',
          concepts: ['Masse', 'Volume', 'Unités', 'Conversions', 'Instruments'],
          objectives: [
            'Mesurer la masse avec une balance',
            'Mesurer le volume de liquides',
            'Connaître les unités et conversions',
            'Utiliser les instruments correctement'
          ],
          content: {
            masse: {
              definition: 'Quantité de matière d\'un corps',
              unite_legale: 'Kilogramme (kg)',
              sous_multiples: {
                gramme: '1 kg = 1000 g',
                milligramme: '1 g = 1000 mg'
              },
              multiples: {
                tonne: '1 tonne = 1000 kg'
              },
              instrument: {
                nom: 'Balance',
                types: 'Électronique, à fléau, Roberval',
                precision: 'Dépend du modèle'
              }
            },
            volume: {
              definition: 'Espace occupé par un corps',
              unite_legale: 'Mètre cube (m³)',
              unites_pratiques: {
                litre: '1 L = 1 dm³',
                millilitre: '1 mL = 1 cm³',
                relation: '1 m³ = 1000 L'
              },
              instruments: {
                eprouvette: 'Mesure précise liquides',
                becher: 'Mesure approximative',
                pipette: 'Volume précis petit',
                burette: 'Dosage précis'
              }
            },
            conversions: {
              masse: {
                exemples: [
                  '307 g = 0,307 kg',
                  '1,3 g = 1300 mg',
                  '2,5 tonnes = 2500 kg'
                ]
              },
              volume: {
                exemples: [
                  '1 cm³ = 1 mL',
                  '1 L = 1000 mL = 1000 cm³',
                  '1 m³ = 1000 L'
                ]
              }
            },
            mesure_pratique: {
              masse_litre_eau: {
                experience: 'Peser éprouvette vide puis avec 1L eau',
                resultat: '1 L d\'eau = 1 kg (à température ambiante)',
                relation: 'm_eau (kg) = V_eau (L)'
              }
            },
            mauritanianContext: [
              'Pesée au marché (kg)',
              'Mesure eau potable (L)',
              'Commerce (tonnes)',
              'Laboratoire scolaire'
            ]
          },
          exercises: [
            {
              type: 'conversion_masse',
              question: 'Convertis: 2500 g en kg',
              answer: '2,5 kg (2500 ÷ 1000)',
              difficulty: 'beginner'
            },
            {
              type: 'conversion_volume',
              question: 'Combien de mL dans 2,5 L?',
              answer: '2500 mL (2,5 × 1000)',
              difficulty: 'beginner'
            },
            {
              type: 'eau',
              question: 'Quelle est la masse de 3 L d\'eau?',
              answer: '3 kg (1 L eau = 1 kg)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch1-s5',
          title: 'Température et thermomètre',
          description: 'Mesurer la température',
          concepts: ['Température', 'Thermomètre', 'Degré Celsius', 'Mesure'],
          objectives: [
            'Définir la température',
            'Utiliser un thermomètre',
            'Connaître les températures remarquables',
            'Mesurer correctement'
          ],
          content: {
            temperature: {
              definition: 'Grandeur qui caractérise l\'état thermique d\'un corps',
              unite: 'Degré Celsius (°C)',
              instrument: 'Thermomètre',
              importance: 'Détermine les changements d\'état'
            },
            thermometre: {
              types: {
                liquide: 'Alcool ou mercure (ancien)',
                electronique: 'Digital (moderne)',
                medical: 'Mesure température corps (37°C)',
                laboratoire: 'Précision -10°C à +110°C'
              },
              utilisation: [
                'Plonger dans liquide à mesurer',
                'Attendre stabilisation',
                'Lire au niveau du liquide',
                'Ne pas toucher réservoir'
              ]
            },
            temperatures_remarquables: {
              fusion_glace: '0°C',
              ebullition_eau: '100°C (pression normale)',
              corps_humain: '37°C',
              climat_mauritanien: {
                jour_ete: '35-45°C',
                nuit_hiver: '10-15°C',
                record: 'Jusqu\'à 50°C dans désert'
              }
            },
            changements_etat: {
              eau: {
                solidification: '0°C (eau → glace)',
                fusion: '0°C (glace → eau)',
                vaporisation: '100°C (eau → vapeur)',
                condensation: '< 100°C (vapeur → eau)'
              },
              plateaux_temperature: 'Température constante pendant changement d\'état'
            },
            mauritanianContext: [
              'Chaleur du désert mauritanien',
              'Thé chaud (80-90°C)',
              'Climat sahélien',
              'Température corporelle'
            ]
          },
          exercises: [
            {
              type: 'lecture',
              question: 'À quelle température l\'eau bout?',
              answer: '100°C (ébullition)',
              difficulty: 'beginner'
            },
            {
              type: 'application',
              question: 'Température de fusion de la glace?',
              answer: '0°C',
              difficulty: 'beginner'
            },
            {
              type: 'pratique',
              question: 'Comment mesurer température d\'un liquide?',
              answer: 'Plonger thermomètre, attendre stabilisation, lire niveau',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch2',
      title: 'MÉLANGES ET CORPS PURS',
      sections: [
        {
          id: 'ch2-s1',
          title: 'Mélanges homogènes et hétérogènes',
          description: 'Distinguer les types de mélanges',
          concepts: ['Mélange', 'Homogène', 'Hétérogène', 'Corps pur'],
          objectives: [
            'Définir un mélange',
            'Distinguer homogène et hétérogène',
            'Identifier les mélanges quotidiens',
            'Classifier les exemples'
          ],
          content: {
            melange: {
              definition: 'Association de deux ou plusieurs substances qui n\'interagissent pas chimiquement',
              caracteristique: 'Substances conservent leurs propriétés',
              exemples_visuels: 'Eau + huile, eau + terre, boissons gazeuses'
            },
            melange_homogene: {
              definition: 'On ne distingue pas les différents constituants à l\'œil nu',
              aspect: 'Uniforme',
              exemples_mauritaniens: 'Thé, sirop, café, lait, eau salée',
              propriete: 'Même composition en tout point',
              synonyme: 'Solution (si liquide)'
            },
            melange_heterogene: {
              definition: 'On peut distinguer au moins deux constituants à l\'œil nu',
              aspect: 'Non uniforme',
              exemples: 'Eau + huile, eau boueuse, sable + eau',
              observation: 'Parties visiblement différentes',
              phases: 'Peut avoir 2 ou plusieurs phases distinctes'
            },
            corps_pur: {
              definition: 'Substance constituée d\'une seule espèce chimique',
              simple: 'Un seul type d\'atome (ex: fer Fe, oxygène O₂)',
              compose: 'Plusieurs atomes liés (ex: eau H₂O, sel NaCl)',
              difference: 'Pas un mélange'
            },
            mauritanianContext: [
              'Thé mauritanien (homogène)',
              'Eau du fleuve (hétérogène si boueuse)',
              'Lait frais (homogène)',
              'Sable + eau (hétérogène)'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Classe: eau salée, eau + sable, sirop',
              answer: 'Homogènes: eau salée, sirop. Hétérogène: eau + sable',
              difficulty: 'beginner'
            },
            {
              type: 'identification',
              question: 'L\'eau boueuse est quel type de mélange?',
              answer: 'Hétérogène (on voit les particules)',
              difficulty: 'beginner'
            },
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un mélange homogène?',
              answer: 'Mélange où on ne distingue pas les constituants à l\'œil nu',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch2-s2',
          title: 'Séparation des mélanges hétérogènes',
          description: 'Techniques de décantation et filtration',
          concepts: ['Décantation', 'Filtration', 'Résidu', 'Filtrat'],
          objectives: [
            'Comprendre la décantation',
            'Réaliser une filtration',
            'Choisir la technique appropriée',
            'Identifier résidu et filtrat'
          ],
          content: {
            decantation: {
              principe: 'Séparation par densité (les plus lourds se déposent)',
              definition: 'Procédé qui consiste à laisser reposer un mélange pour séparer ses constituants',
              procedure: {
                etape1: 'Verser mélange dans tube à essai',
                etape2: 'Laisser reposer (plusieurs minutes)',
                etape3: 'Observer formation dépôt au fond',
                etape4: 'Verser délicatement partie claire'
              },
              observation: {
                depot: 'Solide au fond',
                liquide_clair: 'Au-dessus du dépôt'
              },
              conclusion: 'Permet de séparer liquide et solide non mélangés',
              exemple: 'Eau boueuse → eau + terre'
            },
            filtration: {
              principe: 'Séparation par taille des particules à travers milieu poreux',
              materiel: {
                filtre: 'Papier filtre (poreux)',
                entonnoir: 'Support du filtre',
                becher: 'Récipient pour filtrat',
                support: 'Tige, pince'
              },
              procedure: {
                etape1: 'Plier filtre et placer dans entonnoir',
                etape2: 'Positionner entonnoir sur bécher',
                etape3: 'Verser mélange doucement',
                etape4: 'Récupérer filtrat'
              },
              resultats: {
                filtrat: 'Liquide qui passe (homogène)',
                residu: 'Particules retenues sur filtre'
              },
              conclusion: 'Transforme mélange hétérogène en homogène'
            },
            choix_technique: {
              decantation: 'Si solide se dépose facilement',
              filtration: 'Si particules très fines ou ne se déposent pas',
              combinaison: 'Décantation puis filtration (plus efficace)'
            },
            mauritanianContext: [
              'Purification eau du puits',
              'Traitement eau boueuse',
              'Séparation sable/eau',
              'Laboratoire scolaire'
            ]
          },
          exercises: [
            {
              type: 'principe',
              question: 'Sur quoi repose la décantation?',
              answer: 'Différence de densité (lourd se dépose)',
              difficulty: 'intermediate'
            },
            {
              type: 'identification',
              question: 'Qu\'est-ce que le filtrat?',
              answer: 'Liquide qui traverse le filtre',
              difficulty: 'beginner'
            },
            {
              type: 'choix',
              question: 'Comment séparer eau + sable?',
              answer: 'Décantation (rapide) ou filtration (plus complète)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s3',
          title: 'Distillation des mélanges homogènes',
          description: 'Séparer par vaporisation et condensation',
          concepts: ['Distillation', 'Vaporisation', 'Condensation', 'Distillat'],
          objectives: [
            'Comprendre le principe de distillation',
            'Identifier le matériel',
            'Suivre le processus étape par étape',
            'Obtenir de l\'eau pure'
          ],
          content: {
            principe: 'Séparation par différence de température de vaporisation',
            application: 'Séparer liquides d\'un mélange homogène',
            montage_distillation: {
              ballon: 'Contient le mélange à chauffer',
              chauffe_ballon: 'Source de chaleur',
              thermometre: 'Mesure température vapeurs',
              refrigerant: {
                role: 'Refroidit vapeurs pour condensation',
                circulation_eau: 'Eau froide entre bas, sort haut',
                temperature: 'Maintient froid'
              },
              erlenmeyer: 'Récupère le distillat'
            },
            procedure_complete: {
              etape1: {
                action: 'Verser mélange dans ballon (ex: eau salée)',
                precaution: 'Ne pas remplir complètement'
              },
              etape2: {
                action: 'Assembler montage',
                verification: 'Toutes connexions étanches'
              },
              etape3: {
                action: 'Chauffer progressivement',
                observation: 'Eau se vaporise à 100°C'
              },
              etape4: {
                action: 'Vapeur monte dans réfrigérant',
                processus: 'Refroidissement par eau froide'
              },
              etape5: {
                action: 'Condensation dans réfrigérant',
                resultat: 'Eau pure liquide'
              },
              etape6: {
                action: 'Récupération distillat',
                produit: 'Eau pure (sans sel)'
              }
            },
            observations: {
              ballon: 'Sel reste au fond (résidu)',
              distillat: 'Eau pure obtenue',
              temperature: '100°C pendant vaporisation eau'
            },
            avantages: {
              purification: 'Obtenir liquide pur',
              separation: 'Séparer liquides différentes températures',
              recuperation: 'Réutiliser solvant'
            },
            mauritanianContext: [
              'Purification eau de mer',
              'Obtention eau distillée',
              'Laboratoire chimie',
              'Industrie (parfums, alcools)'
            ]
          },
          exercises: [
            {
              type: 'principe',
              question: 'Sur quoi repose la distillation?',
              answer: 'Différence température de vaporisation',
              difficulty: 'intermediate'
            },
            {
              type: 'materiel',
              question: 'Quel appareil refroidit les vapeurs?',
              answer: 'Le réfrigérant (avec circulation d\'eau froide)',
              difficulty: 'beginner'
            },
            {
              type: 'application',
              question: 'Comment obtenir eau pure de l\'eau salée?',
              answer: 'Distillation: vaporiser eau, condenser, sel reste dans ballon',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch2-s4',
          title: 'L\'air - Mélange gazeux',
          description: 'Composition et propriétés de l\'air',
          concepts: ['Air', 'Diazote', 'Dioxygène', 'Composition', 'Pression'],
          objectives: [
            'Connaître la composition de l\'air',
            'Comprendre le rôle de chaque gaz',
            'Mesurer la masse de l\'air',
            'Comprendre la pression atmosphérique'
          ],
          content: {
            composition_air: {
              diazote: {
                formule: 'N₂',
                proportion: '78%',
                role: 'Gaz inerte (ne brûle pas)',
                propriete: 'Dilue le dioxygène'
              },
              dioxygene: {
                formule: 'O₂',
                proportion: '21%',
                role: 'Nécessaire à la respiration et combustion',
                propriete: 'Entretient la vie'
              },
              autres_gaz: {
                proportion: '1%',
                exemples: 'Argon, néon, gaz rares, vapeur d\'eau, CO₂',
                variation: 'Vapeur d\'eau variable selon climat'
              }
            },
            proprietes_air: {
              masse_volumique: {
                valeur: '1 L d\'air = 1,3 g',
                conditions: '0°C et 1013 hPa (conditions normales)',
                remarque: 'Air plus léger que eau (1 L eau = 1000 g)'
              },
              compressibilite: 'Air est compressible (c\'est un gaz)',
              expansibilite: 'Air est expansible'
            },
            pression_atmospherique: {
              definition: 'Pression exercée par colonne d\'air',
              valeur_normale: '1013 hPa = 1 bar',
              unite_legale: 'Pascal (Pa)',
              instrument: 'Baromètre',
              variation: {
                altitude: 'Diminue avec altitude',
                meteo: 'Haute pression = beau temps, Basse = mauvais temps'
              }
            },
            contexte_mauritanien: {
              anticyclone: 'Zones haute pression = beau temps fréquent',
              harmattan: 'Vent sec du désert',
              climat: 'Air sec (faible humidité)',
              respiration: 'Oxygène nécessaire (21%)'
            },
            mauritanianContext: [
              'Climat désertique (air sec)',
              'Vent harmattan',
              'Haute pression saharienne',
              'Respiration en altitude'
            ]
          },
          exercises: [
            {
              type: 'composition',
              question: 'Quels sont les 2 principaux gaz de l\'air?',
              answer: 'Diazote N₂ (78%) et Dioxygène O₂ (21%)',
              difficulty: 'beginner'
            },
            {
              type: 'masse',
              question: 'Quelle est la masse de 5 L d\'air?',
              answer: '6,5 g (5 × 1,3 g)',
              difficulty: 'intermediate'
            },
            {
              type: 'role',
              question: 'Quel gaz est nécessaire à la respiration?',
              answer: 'Le dioxygène O₂ (21% de l\'air)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s5',
          title: 'Atomes et molécules',
          description: 'Constituants fondamentaux de la matière',
          concepts: ['Atome', 'Molécule', 'Corps pur simple', 'Corps pur composé'],
          objectives: [
            'Définir l\'atome',
            'Comprendre la molécule',
            'Distinguer corps purs simples et composés',
            'Utiliser les formules chimiques'
          ],
          content: {
            atome: {
              definition: 'Constituant fondamental de la matière',
              symbole: 'Représenté par 1 ou 2 lettres',
              exemples: {
                hydrogene: 'H',
                oxygene: 'O',
                carbone: 'C',
                azote: 'N',
                chlore: 'Cl',
                sodium: 'Na',
                fer: 'Fe'
              },
              remarque: 'Tous identiques pour même élément'
            },
            molecule: {
              definition: 'Édifice formé par association de plusieurs atomes',
              formule_chimique: 'Indique nature et nombre d\'atomes liés',
              exemples_simples: {
                dihydrogene: 'H₂ (2 atomes H)',
                dioxygene: 'O₂ (2 atomes O)',
                diazote: 'N₂ (2 atomes N)',
                dichlore: 'Cl₂ (2 atomes Cl)'
              },
              exemples_composes: {
                eau: 'H₂O (2H + 1O)',
                dioxyde_carbone: 'CO₂ (1C + 2O)',
                butane: 'C₄H₁₀ (4C + 10H)',
                sel: 'NaCl (1Na + 1Cl)'
              }
            },
            corps_purs: {
              simple: {
                definition: 'Constitué d\'atomes d\'une seule sorte',
                exemples: [
                  'Fer: Fe (atomes fer)',
                  'Dioxygène: O₂ (molécules 2 atomes O)',
                  'Diazote: N₂'
                ]
              },
              compose: {
                definition: 'Constitué de plusieurs sortes d\'atomes',
                exemples: [
                  'Eau: H₂O (H et O)',
                  'Sel: NaCl (Na et Cl)',
                  'Sucre: C₁₂H₂₂O₁₁ (C, H et O)'
                ]
              }
            },
            lecture_formules: {
              H2O: '1 molécule eau = 2 atomes H + 1 atome O',
              CO2: '1 molécule CO₂ = 1 atome C + 2 atomes O',
              C4H10: '1 molécule butane = 4 atomes C + 10 atomes H'
            },
            mauritanianContext: [
              'Eau H₂O (essentielle désert)',
              'Sel NaCl (sebkhas mauritaniennes)',
              'Oxygène O₂ (respiration)',
              'Azote N₂ (engrais agriculture)'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un atome?',
              answer: 'Constituant fondamental de la matière',
              difficulty: 'beginner'
            },
            {
              type: 'formule',
              question: 'Combien d\'atomes dans H₂O?',
              answer: '3 atomes (2 hydrogène + 1 oxygène)',
              difficulty: 'intermediate'
            },
            {
              type: 'classification',
              question: 'O₂ est corps pur simple ou composé?',
              answer: 'Simple (un seul type d\'atome: oxygène)',
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
      title: 'LES CIRCUITS ÉLECTRIQUES',
      sections: [
        {
          id: 'ch3-s1',
          title: 'Circuit électrique simple',
          description: 'Constituer un circuit de base',
          concepts: ['Circuit', 'Générateur', 'Récepteur', 'Fils', 'Dipôle'],
          objectives: [
            'Définir un circuit électrique',
            'Identifier les composants',
            'Réaliser un circuit simple',
            'Comprendre le rôle de chaque élément'
          ],
          content: {
            circuit_electrique: {
              definition: 'Ensemble composé au moins d\'un générateur, un récepteur et des fils de connexion',
              condition_fonctionnement: 'Circuit fermé pour circulation courant'
            },
            composants_essentiels: {
              generateur: {
                role: 'Fournit le courant électrique',
                exemples: 'Pile, batterie, générateur',
                caracteristique: '2 bornes (+ et -)',
                note: 'Source d\'énergie électrique'
              },
              recepteur: {
                role: 'Utilise le courant électrique',
                exemples: 'Lampe, moteur, résistance, diode',
                effet: 'Transforme énergie électrique (lumière, mouvement, chaleur)'
              },
              fils_connexion: {
                role: 'Transportent le courant',
                materiau: 'Cuivre (conducteur)',
                isolation: 'Plastique autour'
              },
              interrupteur: {
                role: 'Ouvrir ou fermer le circuit',
                ouvert: 'Coupe le courant',
                ferme: 'Laisse passer le courant'
              }
            },
            dipole: {
              definition: 'Tout élément électrique avec deux bornes',
              exemples: 'Pile, lampe, moteur, interrupteur, résistance'
            },
            circuit_ferme_ouvert: {
              ferme: {
                caracteristique: 'Courant circule',
                observation: 'Lampe brille',
                condition: 'Tous éléments connectés, interrupteur fermé'
              },
              ouvert: {
                caracteristique: 'Aucun courant',
                observation: 'Lampe éteinte',
                causes: 'Interrupteur ouvert, fil débranché, dipôle grillé'
              }
            },
            mauritanianContext: [
              'Lampe torche',
              'Circuit domestique',
              'Batterie voiture',
              'Éclairage solaire'
            ]
          },
          exercises: [
            {
              type: 'composants',
              question: 'Cite les 3 éléments essentiels d\'un circuit',
              answer: 'Générateur, récepteur, fils de connexion',
              difficulty: 'beginner'
            },
            {
              type: 'role',
              question: 'Quel est le rôle du générateur?',
              answer: 'Fournir le courant électrique',
              difficulty: 'beginner'
            },
            {
              type: 'fonctionnement',
              question: 'Pourquoi la lampe ne brille pas?',
              answer: 'Circuit ouvert (interrupteur ouvert ou fil débranché)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        },
        {
          id: 'ch3-s2',
          title: 'Schématisation et symboles',
          description: 'Représenter un circuit électrique',
          concepts: ['Schéma', 'Symboles normalisés', 'Représentation'],
          objectives: [
            'Connaître les symboles normalisés',
            'Dessiner un schéma de circuit',
            'Passer du montage au schéma',
            'Respecter les règles de schématisation'
          ],
          content: {
            symboles_normalises: {
              pile_generateur: {
                symbole: 'Deux traits parallèles (long + court)',
                trait_long: 'Borne positive (+)',
                trait_court: 'Borne négative (-)'
              },
              lampe: 'Cercle avec croix ou filament',
              interrupteur: {
                ouvert: 'Trait interrompu',
                ferme: 'Trait continu'
              },
              fils_connexion: 'Traits droits',
              moteur: 'Cercle avec M',
              resistance: 'Rectangle',
              diode: 'Triangle avec barre'
            },
            regles_schematisation: {
              regle1: 'Tracer d\'abord un rectangle',
              regle2: 'Placer symboles au milieu des côtés',
              regle3: 'Ordre symboles = ordre branchement',
              regle4: 'Traits horizontaux et verticaux',
              regle5: 'Symboles bien orientés',
              regle6: 'Schéma propre et clair'
            },
            conducteurs_isolants: {
              conducteurs: {
                definition: 'Matériaux laissant passer courant',
                exemples: 'Métaux (cuivre, aluminium, fer, or, argent, acier)',
                propriete: 'Électrons libres'
              },
              isolants: {
                definition: 'Matériaux ne laissant pas passer courant',
                exemples: 'Plastique, bois, verre, caoutchouc',
                role: 'Protection, sécurité'
              },
              principe: 'Circuit doit être constitué uniquement de conducteurs'
            },
            mauritanianContext: [
              'Schémas électriques simples',
              'Installation domestique',
              'Cours de physique',
              'Câblage sécurisé'
            ]
          },
          exercises: [
            {
              type: 'symbole',
              question: 'Dessine le symbole d\'une pile',
              answer: 'Deux traits parallèles (long + court)',
              difficulty: 'beginner'
            },
            {
              type: 'conducteur',
              question: 'Le cuivre est conducteur ou isolant?',
              answer: 'Conducteur (métal)',
              difficulty: 'beginner'
            },
            {
              type: 'schema',
              question: 'Comment schématiser un circuit pile-lampe?',
              answer: 'Rectangle avec pile et lampe sur côtés, reliés par fils',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch3-s3',
          title: 'Circuit en série',
          description: 'Comprendre le montage en série',
          concepts: ['Série', 'Boucle unique', 'Ordre', 'Fonctionnement'],
          objectives: [
            'Définir un circuit en série',
            'Identifier les caractéristiques',
            'Comprendre les conséquences',
            'Réaliser un montage en série'
          ],
          content: {
            definition: 'Circuit où tous les dipôles sont les uns à la suite des autres',
            caracteristiques: {
              boucle_unique: {
                description: 'Un seul chemin pour le courant',
                consequence: 'Courant passe par tous dipôles'
              },
              ordre_dipoles: {
                observation: 'Dipôles enchaînés',
                propriete: 'Pas de branchement parallèle'
              },
              dependance: {
                regle: 'Si un dipôle grille, tous s\'arrêtent',
                explication: 'Circuit devient ouvert',
                exemple: 'Une lampe grille → toutes s\'éteignent'
              }
            },
            eclat_lampes: {
              observation: 'L\'éclat diminue avec nombre de dipôles',
              explication: {
                une_lampe: 'Éclat maximal',
                deux_lampes: 'Éclat réduit (même courant partagé)',
                trois_lampes: 'Éclat encore plus faible'
              },
              raison: 'Tension générateur partagée entre dipôles'
            },
            avantages: {
              simplicite: 'Montage facile',
              economie_fil: 'Moins de fils nécessaires'
            },
            inconvenients: {
              fiabilite: 'Panne d\'un élément → tout s\'arrête',
              eclat: 'Diminue avec nombre d\'éléments',
              rigidite: 'Difficile modifier'
            },
            applications: {
              guirlandes_anciennes: 'Lumières de Noël (anciennes)',
              circuits_simples: 'Montages scolaires',
              limitation: 'Peu utilisé dans maisons'
            },
            mauritanianContext: [
              'Montages scolaires simples',
              'Guirlandes décoratives',
              'Circuits expérimentaux',
              'Lampes torches (piles en série)'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un circuit en série?',
              answer: 'Circuit où dipôles sont les uns à la suite des autres (boucle unique)',
              difficulty: 'beginner'
            },
            {
              type: 'consequence',
              question: 'Que se passe-t-il si une lampe grille en série?',
              answer: 'Toutes les lampes s\'éteignent (circuit ouvert)',
              difficulty: 'intermediate'
            },
            {
              type: 'eclat',
              question: 'Comment varie l\'éclat avec nombre de lampes?',
              answer: 'Diminue (tension partagée entre lampes)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch3-s4',
          title: 'Circuit en dérivation',
          description: 'Comprendre le montage en parallèle',
          concepts: ['Dérivation', 'Parallèle', 'Nœuds', 'Branches'],
          objectives: [
            'Définir un circuit en dérivation',
            'Identifier nœuds et branches',
            'Comprendre les avantages',
            'Réaliser un montage en dérivation'
          ],
          content: {
            definition: 'Circuit avec plusieurs boucles (branches parallèles)',
            structure: {
              branche_principale: {
                description: 'Contient le générateur',
                role: 'Distribue courant aux branches'
              },
              branches_derivees: {
                description: 'Branchements parallèles',
                nombre: 'Au moins 2',
                independance: 'Fonctionnent séparément'
              }
            },
            noeuds_branches: {
              noeud: {
                definition: 'Intersection de trois fils ou plus',
                role: 'Point de distribution courant',
                minimum: '2 nœuds dans circuit dérivation'
              },
              branche: {
                definition: 'Partie entre deux nœuds avec au moins un dipôle',
                types: 'Principale et dérivées'
              }
            },
            caracteristiques: {
              independance_dipoles: {
                regle: 'Si un dipôle grille, les autres continuent',
                explication: 'Chaque branche = chemin séparé',
                avantage: 'Fiabilité supérieure'
              },
              eclat_constant: {
                observation: 'L\'éclat ne varie pas avec nombre dipôles',
                explication: 'Chaque branche reçoit même tension',
                resultat: 'Toutes lampes brillent pareil'
              },
              tension: {
                propriete: 'Même tension aux bornes de chaque branche',
                egalite: 'U_générateur = U_lampe1 = U_lampe2'
              }
            },
            avantages: {
              fiabilite: 'Panne locale n\'affecte pas tout',
              eclat: 'Constant quel que soit nombre',
              flexibilite: 'Facile ajouter/retirer dipôles',
              pratique: 'Interrupteurs indépendants'
            },
            inconvenients: {
              complexite: 'Montage plus compliqué',
              fils: 'Plus de fils nécessaires',
              cout: 'Plus cher en matériel'
            },
            applications: {
              installation_domestique: 'Toutes maisons câblées ainsi',
              eclairage: 'Lampes indépendantes',
              prises: 'Chaque prise = branche',
              avantage: 'On/off sélectif'
            },
            mauritanianContext: [
              'Installations électriques maisons',
              'Éclairage public',
              'Prises électriques indépendantes',
              'Montage professionnel'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un nœud?',
              answer: 'Intersection de trois fils ou plus',
              difficulty: 'beginner'
            },
            {
              type: 'avantage',
              question: 'Avantage du circuit en dérivation?',
              answer: 'Si un dipôle grille, les autres continuent de fonctionner',
              difficulty: 'intermediate'
            },
            {
              type: 'eclat',
              question: 'Comment varie l\'éclat en dérivation?',
              answer: 'Reste constant (chaque lampe reçoit même tension)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s5',
          title: 'Sécurité électrique',
          description: 'Comprendre les dangers et précautions',
          concepts: ['Sécurité', 'Court-circuit', 'Dangers', 'Précautions'],
          objectives: [
            'Identifier les dangers électriques',
            'Comprendre le court-circuit',
            'Appliquer les règles de sécurité',
            'Prévenir les accidents'
          ],
          content: {
            court_circuit: {
              definition: 'Dipôle dont les deux bornes sont reliées par conducteur',
              consequence: {
                dipole: 'Ne fonctionne plus (court-circuité)',
                circuit: 'Courant très intense',
                risque: 'Autres composants peuvent griller',
                danger: 'Échauffement, incendie'
              },
              exemple: 'Fil reliant directement 2 bornes d\'une lampe',
              prevention: 'Bien isoler fils, vérifier branchements'
            },
            dangers_electricite: {
              electrocution: {
                cause: 'Contact avec partie sous tension',
                effet: 'Courant traverse corps',
                gravite: 'Peut être mortel',
                seuil: 'Dangereux dès 30 mA'
              },
              incendie: {
                cause: 'Échauffement excessif (surcharge, court-circuit)',
                risque: 'Feu dans fils, équipements',
                prevention: 'Fusibles, disjoncteurs'
              },
              brulures: {
                cause: 'Effet thermique du courant',
                exemple: 'Fils surchauffés',
                gravite: 'Brûlures graves possibles'
              }
            },
            regles_securite: {
              installation: [
                'Ne jamais toucher fils dénudés',
                'Vérifier isolation des câbles',
                'Ne pas surcharger prises',
                'Utiliser matériel conforme'
              ],
              utilisation: [
                'Mains sèches pour manipuler',
                'Débrancher avant intervention',
                'Ne pas tirer sur le fil',
                'Respecter puissances nominales'
              ],
              protection: {
                fusibles: 'Fondent si courant excessif',
                disjoncteurs: 'Coupent automatiquement',
                terre: 'Évacue courant de fuite',
                differentiel: 'Détecte fuites (30 mA)'
              }
            },
            effet_thermique: {
              principe: 'Production de chaleur par passage courant',
              loi_joule: 'Énergie = R × I² × t',
              applications_utiles: {
                chauffage: 'Fer à repasser, radiateurs',
                cuisson: 'Grille-pain, cuisinière',
                eclairage: 'Lampes à incandescence'
              },
              dangers: 'Échauffement excessif → incendie'
            },
            mauritanianContext: [
              'Sécurité installations domestiques',
              'Prévention accidents',
              'Utilisation correcte appareils',
              'Sensibilisation scolaire'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un court-circuit?',
              answer: 'Dipôle dont les deux bornes sont reliées directement par un conducteur',
              difficulty: 'intermediate'
            },
            {
              type: 'danger',
              question: 'Quel est le principal danger de l\'électricité?',
              answer: 'Électrocution (courant traverse corps), incendie (échauffement)',
              difficulty: 'beginner'
            },
            {
              type: 'prevention',
              question: 'Comment éviter les accidents électriques?',
              answer: 'Mains sèches, pas toucher fils dénudés, débrancher avant intervention',
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
      title: 'L\'INTENSITÉ DU COURANT ÉLECTRIQUE',
      sections: [
        {
          id: 'ch4-s1',
          title: 'Mesure de l\'intensité - Ampèremètre',
          description: 'Mesurer le courant électrique',
          concepts: ['Intensité', 'Ampère', 'Ampèremètre', 'Mesure'],
          objectives: [
            'Définir l\'intensité du courant',
            'Utiliser un ampèremètre',
            'Connaître l\'unité et conversions',
            'Brancher correctement en série'
          ],
          content: {
            intensite: {
              definition: 'Quantité d\'électricité traversant un appareil par seconde',
              symbole: 'I',
              unite: {
                principale: 'Ampère (A)',
                sous_multiple: 'Milliampère (mA)',
                conversion: '1 A = 1000 mA'
              },
              signification: 'Débit d\'électrons dans le circuit'
            },
            sens_conventionnel: {
              definition: 'Du pôle + vers pôle - à l\'extérieur du générateur',
              representation: 'Flèche rouge sur schémas',
              remarque: 'Sens conventionnel ≠ sens réel électrons'
            },
            amperemetre: {
              role: 'Appareil de mesure de l\'intensité',
              symbole_schema: 'A dans cercle',
              branchement: {
                type: 'En série',
                raison: 'Courant doit traverser l\'appareil',
                procedure: 'Ouvrir circuit, insérer ampèremètre'
              },
              bornes: {
                COM: 'Borne commune (noire)',
                A: 'Borne ampères (rouge)',
                mA: 'Borne milliampères (pour faibles courants)'
              },
              calibres: {
                definition: 'Valeur maximale mesurable',
                exemples: '10 A, 2 A, 200 mA, 20 mA',
                regle: 'Commencer par plus grand calibre'
              }
            },
            multimetre: {
              definition: 'Appareil multifonction',
              modes: 'Voltmètre, ampèremètre, ohmmètre',
              selection: 'Tourner sélecteur sur position A',
              utilite: 'Un seul appareil pour plusieurs mesures'
            },
            conversions: {
              exemples: [
                '1,42 A = 1420 mA',
                '2400 mA = 2,4 A',
                '0,53 A = 530 mA',
                '72 mA = 0,072 A'
              ]
            },
            mauritanianContext: [
              'Mesure courant circuits',
              'Laboratoire physique',
              'Diagnostic électrique',
              'Formations techniques'
            ]
          },
          exercises: [
            {
              type: 'unite',
              question: 'Quelle est l\'unité de l\'intensité?',
              answer: 'Ampère (A)',
              difficulty: 'beginner'
            },
            {
              type: 'conversion',
              question: 'Convertis 3,5 A en mA',
              answer: '3500 mA (3,5 × 1000)',
              difficulty: 'beginner'
            },
            {
              type: 'branchement',
              question: 'Comment brancher un ampèremètre?',
              answer: 'En série (ouvrir circuit, insérer l\'ampèremètre)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s2',
          title: 'Loi d\'unicité et loi des nœuds',
          description: 'Lois fondamentales de l\'intensité',
          concepts: ['Unicité', 'Loi des nœuds', 'Conservation', 'Calculs'],
          objectives: [
            'Appliquer la loi d\'unicité',
            'Comprendre la loi des nœuds',
            'Calculer les intensités',
            'Vérifier expérimentalement'
          ],
          content: {
            loi_unicite: {
              enonce: 'Dans un circuit en série, l\'intensité est la même partout',
              formule: 'I₁ = I₂ = I₃ = ... = constante',
              independance: 'Ne dépend pas de l\'ordre des dipôles',
              experience: {
                montage: 'Pile + lampe + moteur en série',
                mesures: 'Mesurer I avant lampe, entre lampe-moteur, après moteur',
                resultat: 'Toutes intensités identiques',
                conclusion: 'Intensité constante en série'
              },
              analogie: 'Comme l\'eau dans un tuyau unique'
            },
            loi_noeuds: {
              enonce: 'L\'intensité dans branche principale = somme intensités branches dérivées',
              formule: 'I_principale = I₁ + I₂ + I₃ + ...',
              principe: 'Conservation du courant électrique',
              experience: {
                montage: 'Générateur + 2 lampes en parallèle',
                mesures: {
                  I_principale: '120 mA',
                  I_lampe1: '60 mA',
                  I_lampe2: '60 mA'
                },
                verification: '60 + 60 = 120 mA ✓',
                conclusion: 'Somme = total'
              },
              analogie: 'Comme rivière qui se divise puis se rejoint'
            },
            applications_calculs: {
              exemple1: {
                donnees: 'I_principale = 0,30 A, I_branche2 = 0,17 A',
                question: 'I_branche1 = ?',
                calcul: 'I₁ = 0,30 - 0,17 = 0,13 A',
                reponse: '0,13 A = 130 mA'
              },
              exemple2: {
                donnees: '3 lampes identiques en parallèle, I_totale = 180 mA',
                question: 'I par lampe = ?',
                calcul: 'I_lampe = 180 ÷ 3 = 60 mA',
                reponse: '60 mA chacune'
              }
            },
            mauritanianContext: [
              'Calculs circuits domestiques',
              'Vérification installations',
              'Problèmes physique scolaire',
              'Dimensionnement électrique'
            ]
          },
          exercises: [
            {
              type: 'serie',
              question: 'Circuit série: I₁ = 250 mA. Quelle est I₂?',
              answer: '250 mA (unicité: même intensité partout)',
              difficulty: 'beginner'
            },
            {
              type: 'noeuds',
              question: 'I_principale = 300 mA, I₁ = 180 mA. Calcule I₂',
              answer: 'I₂ = 300 - 180 = 120 mA',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: '4 lampes identiques en parallèle, I_totale = 400 mA. I par lampe?',
              answer: '100 mA chacune (400 ÷ 4)',
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
      title: 'LA TENSION ÉLECTRIQUE',
      sections: [
        {
          id: 'ch4-s1',
          title: 'Mesure de la tension - Voltmètre',
          description: 'Mesurer la tension électrique',
          concepts: ['Tension', 'Volt', 'Voltmètre', 'Différence de potentiel'],
          objectives: [
            'Définir la tension électrique',
            'Utiliser un voltmètre',
            'Connaître l\'unité et conversions',
            'Brancher correctement en dérivation'
          ],
          content: {
            tension: {
              definition: 'Différence de potentiel électrique entre deux points',
              symbole: 'U',
              unite: {
                principale: 'Volt (V)',
                sous_multiple: 'Millivolt (mV): 1 V = 1000 mV',
                multiple: 'Kilovolt (kV): 1 kV = 1000 V'
              },
              analogie: 'Comme la pression de l\'eau dans une conduite'
            },
            voltmetre: {
              role: 'Appareil de mesure de la tension',
              symbole_schema: 'V dans cercle',
              branchement: {
                type: 'En dérivation (parallèle)',
                raison: 'Mesure différence potentiel entre 2 points',
                procedure: 'Connecter en parallèle sur dipôle'
              },
              bornes: {
                COM: 'Borne commune (noire, -)',
                V: 'Borne volt (rouge, +)'
              },
              calibres: {
                exemples: '1000 V, 200 V, 20 V, 2 V',
                regle: 'Commencer par plus grand'
              }
            },
            dipole_isole: {
              generateur_isole: {
                observation: 'Tension existe aux bornes',
                exemple: 'Pile 4,5 V mesurée hors circuit',
                conclusion: 'Générateur a tension propre'
              },
              recepteur_isole: {
                observation: 'Pas de tension aux bornes',
                exemple: 'Lampe débranchée: 0 V',
                conclusion: 'Récepteur nécessite générateur'
              }
            },
            tensions_courantes: {
              piles: {
                petite: '1,5 V (AA, AAA)',
                moyenne: '4,5 V (plate)',
                grande: '9 V (rectangulaire)'
              },
              secteur: '230 V (Mauritanie)',
              telephone: '5 V (chargeur USB)',
              voiture: '12 V (batterie)'
            },
            mauritanianContext: [
              'Piles lampes torches',
              'Tension secteur 230 V',
              'Batteries véhicules 12 V',
              'Chargeurs téléphones 5 V'
            ]
          },
          exercises: [
            {
              type: 'unite',
              question: 'Quelle est l\'unité de la tension?',
              answer: 'Volt (V)',
              difficulty: 'beginner'
            },
            {
              type: 'conversion',
              question: 'Convertis 2,3 V en mV',
              answer: '2300 mV (2,3 × 1000)',
              difficulty: 'beginner'
            },
            {
              type: 'branchement',
              question: 'Comment brancher un voltmètre?',
              answer: 'En dérivation (parallèle) sur le dipôle à mesurer',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s2',
          title: 'Loi d\'additivité des tensions',
          description: 'Calculer les tensions en série',
          concepts: ['Additivité', 'Tensions', 'Série', 'Calculs'],
          objectives: [
            'Énoncer la loi d\'additivité',
            'Calculer tensions en série',
            'Vérifier expérimentalement',
            'Résoudre des problèmes'
          ],
          content: {
            loi_additivite: {
              enonce: 'Dans un circuit en série, tension du générateur = somme tensions des autres dipôles',
              formule: 'U_générateur = U₁ + U₂ + U₃ + ...',
              condition: 'Valable uniquement en série',
              principe: 'Conservation de l\'énergie'
            },
            experience_verification: {
              montage: 'Pile + lampe + moteur en série',
              mesures: {
                U_pile: '4,5 V',
                U_lampe: '1,8 V',
                U_fil: '0 V (négligeable)',
                U_moteur: '2,7 V'
              },
              verification: '1,8 + 0 + 2,7 = 4,5 V ✓',
              conclusion: 'Loi vérifiée expérimentalement'
            },
            tension_fil: {
              observation: 'Tension aux bornes d\'un fil ≈ 0 V',
              explication: 'Résistance fil très faible',
              approximation: 'Négligeable dans calculs'
            },
            applications_calculs: {
              probleme_type1: {
                donnees: 'U_pile = 6 V, U_lampe1 = 2,5 V, U_lampe2 = ?',
                calcul: 'U₂ = 6 - 2,5 = 3,5 V',
                reponse: '3,5 V'
              },
              probleme_type2: {
                donnees: '3 lampes identiques, U_pile = 9 V',
                calcul: 'U_lampe = 9 ÷ 3 = 3 V',
                reponse: '3 V chacune'
              }
            },
            tension_nominale: {
              definition: 'Tension de fonctionnement normal du dipôle',
              indication: 'Marquée sur le dipôle (ex: lampe 6 V)',
              surtension: 'U > U_nominale → dipôle grille',
              sous_tension: 'U < U_nominale → fonctionnement faible'
            },
            mauritanianContext: [
              'Circuits scolaires',
              'Calculs électriques',
              'Diagnostic pannes',
              'Physique appliquée'
            ]
          },
          exercises: [
            {
              type: 'loi',
              question: 'Pile 9 V, lampe 4 V. Tension moteur?',
              answer: 'U_moteur = 9 - 4 = 5 V',
              difficulty: 'intermediate'
            },
            {
              type: 'nominal',
              question: 'Lampe 6 V branchée sur pile 9 V. Que se passe-t-il?',
              answer: 'Surtension: lampe grille',
              difficulty: 'intermediate'
            },
            {
              type: 'calcul',
              question: '2 lampes en série, U_pile = 12 V, U₁ = 7 V. U₂ = ?',
              answer: 'U₂ = 12 - 7 = 5 V',
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
      title: 'NOTION DE FORCE',
      sections: [
        {
          id: 'ch5-s1',
          title: 'Définition et caractéristiques',
          description: 'Comprendre la force comme action mécanique',
          concepts: ['Force', 'Action mécanique', 'Caractéristiques', 'Vecteur'],
          objectives: [
            'Définir une force',
            'Identifier les caractéristiques',
            'Distinguer types de forces',
            'Représenter graphiquement'
          ],
          content: {
            definition: 'Action capable de déformer un objet ou de le mettre en mouvement',
            effets_force: {
              deformation: {
                exemples: 'Comprimer ressort, écraser ballon, plier règle',
                observation: 'Changement de forme',
                reversibilite: 'Peut être permanent ou temporaire'
              },
              mouvement: {
                demarrage: 'Objet immobile → en mouvement',
                arret: 'Objet en mouvement → immobile',
                changement_direction: 'Modification trajectoire',
                exemple: 'Pousser charrette, freiner vélo'
              }
            },
            caracteristiques_force: {
              point_application: {
                definition: 'Endroit où s\'exerce la force',
                exemple: 'Main sur ballon',
                representation: 'Origine de la flèche'
              },
              direction: {
                definition: 'Droite selon laquelle agit la force',
                exemple: 'Verticale pour pesanteur',
                representation: 'Droite portant la flèche'
              },
              sens: {
                definition: 'Orientation sur la direction',
                exemple: 'Vers le haut ou vers le bas',
                representation: 'Pointe de la flèche'
              },
              intensite: {
                definition: 'Grandeur de la force',
                unite: 'Newton (N)',
                mesure: 'Dynamomètre',
                representation: 'Longueur de la flèche'
              }
            },
            vecteur_force: {
              definition: 'Représentation graphique d\'une force',
              notation: 'F⃗ (flèche au-dessus)',
              echelle: {
                principe: 'Correspondance longueur-intensité',
                exemples: '1 cm = 10 N, 1 cm = 5 N',
                dessin: 'Flèche proportionnelle à intensité'
              }
            },
            mauritanianContext: [
              'Pousser charrette au marché',
              'Tirer seau du puits',
              'Vent sur tentes',
              'Poids des objets'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'une force?',
              answer: 'Action capable de déformer ou mettre en mouvement',
              difficulty: 'beginner'
            },
            {
              type: 'caracteristiques',
              question: 'Cite les 4 caractéristiques d\'une force',
              answer: 'Point d\'application, direction, sens, intensité',
              difficulty: 'intermediate'
            },
            {
              type: 'unite',
              question: 'Quelle est l\'unité de la force?',
              answer: 'Newton (N)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch5-s2',
          title: 'Types de forces',
          description: 'Forces de contact et à distance',
          concepts: ['Contact', 'Distance', 'Pesanteur', 'Magnétisme'],
          objectives: [
            'Distinguer forces de contact et à distance',
            'Identifier exemples de chaque type',
            'Comprendre la pesanteur',
            'Reconnaître forces dans environnement'
          ],
          content: {
            forces_contact: {
              definition: 'Forces nécessitant contact physique',
              exemples: {
                pied_ballon: 'Frappe de ballon',
                main_mur: 'Pousser un mur',
                roue_sol: 'Frottement pneu-route',
                corde_objet: 'Traction par corde'
              },
              condition: 'Toucher obligatoire'
            },
            forces_distance: {
              definition: 'Forces agissant sans contact',
              types: {
                pesanteur: {
                  definition: 'Attraction terrestre',
                  direction: 'Verticale',
                  sens: 'Vers le centre Terre (bas)',
                  intensite: 'Poids P = m × g',
                  g: '10 N/kg (Terre)',
                  exemple: 'Chute des objets'
                },
                force_electrostatique: {
                  definition: 'Attraction/répulsion charges électriques',
                  exemples: 'Peigne électrisé attire cheveux',
                  principe: 'Charges opposées s\'attirent'
                },
                force_magnetique: {
                  definition: 'Attraction/répulsion aimants',
                  exemples: 'Aimant attire fer',
                  principe: 'Pôles opposés s\'attirent'
                }
              }
            },
            poids: {
              definition: 'Force de pesanteur s\'exerçant sur un objet',
              formule: 'P = m × g',
              unite: 'Newton (N)',
              difference_masse: {
                masse: 'Quantité matière (kg), constante',
                poids: 'Force (N), varie selon gravité',
                relation: 'P (N) = m (kg) × 10'
              },
              calculs: {
                ex1: 'm = 5 kg → P = 5 × 10 = 50 N',
                ex2: 'm = 2,5 kg → P = 2,5 × 10 = 25 N',
                ex3: 'P = 80 N → m = 80 ÷ 10 = 8 kg'
              }
            },
            mauritanianContext: [
              'Poids marchandises marché',
              'Force vent sur tentes',
              'Pesanteur constante',
              'Applications quotidiennes'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'La pesanteur: force de contact ou à distance?',
              answer: 'Force à distance (pas de contact nécessaire)',
              difficulty: 'beginner'
            },
            {
              type: 'calcul_poids',
              question: 'Masse 7 kg. Calcule le poids',
              answer: 'P = 7 × 10 = 70 N',
              difficulty: 'intermediate'
            },
            {
              type: 'distinction',
              question: 'Différence entre masse et poids?',
              answer: 'Masse: quantité matière (kg). Poids: force pesanteur (N)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    },
    {
      id: 'ch6',
      title: 'SOURCES ET RÉCEPTEURS DE LUMIÈRE',
      sections: [
        {
          id: 'ch6-s1',
          title: 'Sources primaires et secondaires',
          description: 'Distinguer les sources de lumière',
          concepts: ['Source primaire', 'Source secondaire', 'Récepteur', 'Lumière'],
          objectives: [
            'Définir source primaire',
            'Définir source secondaire',
            'Identifier les récepteurs',
            'Classifier les objets lumineux'
          ],
          content: {
            sources_primaires: {
              definition: 'Objets produisant leur propre lumière',
              naturelles: {
                exemples: [
                  'Soleil (étoile)',
                  'Étoiles',
                  'Éclairs',
                  'Feu, flamme'
                ],
                caracteristique: 'Émission propre'
              },
              artificielles: {
                exemples: [
                  'Lampes LED',
                  'Lampes incandescence',
                  'Écrans téléphone',
                  'Lasers',
                  'Néons'
                ],
                creation: 'Fabriquées par l\'homme'
              }
            },
            sources_secondaires: {
              definition: 'Objets qui réfléchissent la lumière reçue',
              principe: 'Ne produisent pas lumière, la renvoient',
              exemples_astronomiques: {
                lune: {
                  description: 'Réfléchit lumière solaire',
                  reflexion: '7% lumière reçue',
                  apparence: 'Visible grâce au Soleil'
                },
                planetes: 'Vénus, Mars, Jupiter (réfléchissent Soleil)',
                venus: 'Étoile du Berger (très brillante)'
              },
              exemples_quotidiens: {
                objets: 'Murs, vêtements, livres, tables',
                principe: 'Tous objets visibles non lumineux',
                condition: 'Nécessitent source primaire pour être vus'
              }
            },
            recepteurs_lumiere: {
              definition: 'Organes ou appareils recevant la lumière',
              exemples: {
                oeil: {
                  type: 'Récepteur naturel',
                  role: 'Vision',
                  sensibilite: 'Détecte lumière visible'
                },
                cellule_photovoltaique: {
                  type: 'Récepteur artificiel',
                  role: 'Transforme lumière en électricité',
                  application: 'Panneaux solaires'
                },
                pellicule_photo: {
                  type: 'Récepteur chimique',
                  role: 'Enregistre image',
                  application: 'Photographie'
                },
                capteur_numerique: 'Caméras, smartphones'
              }
            },
            mauritanianContext: [
              'Soleil (source primaire intense)',
              'Lune visible dans désert clair',
              'Panneaux solaires mauritaniens',
              'Observation étoiles (ciel pur)'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Le Soleil: source primaire ou secondaire?',
              answer: 'Primaire (produit sa propre lumière)',
              difficulty: 'beginner'
            },
            {
              type: 'classification2',
              question: 'La Lune: source primaire ou secondaire?',
              answer: 'Secondaire (réfléchit lumière du Soleil)',
              difficulty: 'beginner'
            },
            {
              type: 'recepteur',
              question: 'Cite 2 récepteurs de lumière',
              answer: 'Œil (naturel), cellule photovoltaïque (artificiel)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 30
        }
      ]
    },
    {
      id: 'ch7',
      title: 'PROPAGATION DE LA LUMIÈRE',
      sections: [
        {
          id: 'ch7-s1',
          title: 'Propagation rectiligne',
          description: 'La lumière se propage en ligne droite',
          concepts: ['Rayon lumineux', 'Propagation rectiligne', 'Faisceau', 'Vitesse'],
          objectives: [
            'Comprendre la propagation rectiligne',
            'Définir le rayon lumineux',
            'Identifier les types de faisceaux',
            'Connaître la vitesse de la lumière'
          ],
          content: {
            propagation_rectiligne: {
              principe: 'Dans milieu homogène et transparent, lumière se propage en ligne droite',
              experience: {
                protocole: 'Laser + fumée ou poussière',
                observation: 'Trajet rectiligne visible',
                conclusion: 'Propagation en ligne droite'
              }
            },
            rayon_lumineux: {
              definition: 'Représentation de la lumière par une droite fléchée',
              convention: 'Flèche indique sens de propagation',
              utilite: 'Modélisation trajectoire lumière',
              trace: 'Droite avec flèche'
            },
            faisceaux_lumineux: {
              faisceau_divergent: {
                description: 'Rayons s\'écartent',
                source: 'Source ponctuelle (ampoule)',
                forme: 'Éventail qui s\'élargit'
              },
              faisceau_convergent: {
                description: 'Rayons se rapprochent',
                source: 'Lentille convergente, miroir',
                forme: 'Se concentre en un point'
              },
              faisceau_cylindrique: {
                description: 'Rayons parallèles',
                source: 'Source lointaine (Soleil), laser',
                forme: 'Cylindre de même largeur'
              }
            },
            vitesse_lumiere: {
              vide: '300 000 km/s (3 × 10⁸ m/s)',
              air: 'Pratiquement identique (≈ 300 000 km/s)',
              eau: 'Environ 225 000 km/s (ralentit)',
              verre: 'Environ 200 000 km/s',
              remarque: 'Vitesse maximale dans univers'
            },
            mauritanianContext: [
              'Lumière solaire désert',
              'Phares véhicules (faisceaux)',
              'Lasers (enseignement)',
              'Ombres nettes sous soleil'
            ]
          },
          exercises: [
            {
              type: 'principe',
              question: 'Comment se propage la lumière?',
              answer: 'En ligne droite (propagation rectiligne)',
              difficulty: 'beginner'
            },
            {
              type: 'vitesse',
              question: 'Quelle est la vitesse de la lumière?',
              answer: '300 000 km/s dans le vide',
              difficulty: 'beginner'
            },
            {
              type: 'faisceau',
              question: 'Quel type de faisceau produit le Soleil?',
              answer: 'Cylindrique (rayons parallèles car source très lointaine)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch7-s2',
          title: 'Ombre et pénombre',
          description: 'Comprendre la formation des ombres',
          concepts: ['Ombre', 'Pénombre', 'Source ponctuelle', 'Source étendue'],
          objectives: [
            'Expliquer la formation de l\'ombre',
            'Distinguer ombre et pénombre',
            'Relier à la propagation rectiligne',
            'Prévoir taille et forme des ombres'
          ],
          content: {
            ombre: {
              definition: 'Zone non éclairée derrière un obstacle opaque',
              cause: 'Propagation rectiligne (lumière ne contourne pas)',
              source_ponctuelle: {
                ombre: 'Nette et uniforme',
                penombre: 'Absente',
                exemple: 'Laser, source petite et lointaine'
              }
            },
            penombre: {
              definition: 'Zone partiellement éclairée',
              cause: 'Source étendue (plusieurs points émettent)',
              observation: 'Zone floue entre ombre et lumière'
            },
            source_etendue: {
              caracteristique: 'Grande taille ou proche',
              effet: 'Crée ombre + pénombre',
              zones: {
                ombre: 'Centre (totalement sombre)',
                penombre: 'Autour ombre (partiellement éclairée)',
                eclairee: 'Au-delà pénombre'
              },
              exemple: 'Soleil (bien qu\'étendu, très loin → quasi ponctuel)'
            },
            taille_ombre: {
              facteurs: [
                'Distance objet-source',
                'Distance objet-écran',
                'Taille de l\'objet'
              ],
              regle: 'Plus objet près source, plus ombre grande'
            },
            mauritanianContext: [
              'Ombres sous soleil désert',
              'Ombre bâton (mesure temps)',
              'Protection ombre arbres',
              'Phénomènes quotidiens'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce que l\'ombre?',
              answer: 'Zone non éclairée derrière obstacle opaque',
              difficulty: 'beginner'
            },
            {
              type: 'cause',
              question: 'Pourquoi l\'ombre se forme?',
              answer: 'Propagation rectiligne: lumière ne contourne pas obstacle',
              difficulty: 'intermediate'
            },
            {
              type: 'penombre',
              question: 'Quelle source crée de la pénombre?',
              answer: 'Source étendue (grande ou proche)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch7-s3',
          title: 'Chambre noire et applications',
          description: 'Principe et fonctionnement chambre noire',
          concepts: ['Chambre noire', 'Sténopé', 'Image', 'Inversion'],
          objectives: [
            'Comprendre le principe de la chambre noire',
            'Expliquer la formation de l\'image',
            'Construire une chambre noire',
            'Relier à la photographie'
          ],
          content: {
            chambre_noire: {
              definition: 'Boîte fermée avec petit trou (sténopé) et écran',
              principe: 'Propagation rectiligne à travers trou',
              historique: 'Ancêtre de l\'appareil photo'
            },
            structure: {
              boite: 'Noire à l\'intérieur (évite réflexions)',
              trou_stenope: {
                taille: 'Très petit (quelques mm)',
                role: 'Laisse passer rayons',
                effet_taille: 'Plus petit = plus net, moins lumineux'
              },
              ecran: {
                position: 'Face opposée au trou',
                materiau: 'Papier calque ou blanc',
                role: 'Reçoit l\'image'
              }
            },
            formation_image: {
              processus: {
                etape1: 'Rayons de l\'objet traversent sténopé',
                etape2: 'Rayons du haut → bas écran',
                etape3: 'Rayons du bas → haut écran',
                etape4: 'Image inversée se forme'
              },
              caracteristiques_image: {
                renversee: 'Haut/bas inversé',
                reduite: 'Plus petite que objet',
                nette: 'Si trou assez petit',
                proportionnelle: 'Forme conservée'
              }
            },
            relation_tailles: {
              formule: 'h_image / h_objet = d_image / d_objet',
              explication: 'Proportionnalité des triangles',
              application: 'Calculer taille image'
            },
            applications: {
              photographie: 'Principe appareil photo',
              astronomie: 'Observation Soleil sans danger',
              pedagogie: 'Démonstration propagation rectiligne'
            },
            mauritanianContext: [
              'Construction chambre noire (TP)',
              'Observation éclipse solaire',
              'Principe photographie',
              'Expériences scolaires'
            ]
          },
          exercises: [
            {
              type: 'principe',
              question: 'Pourquoi image inversée dans chambre noire?',
              answer: 'Propagation rectiligne: rayons haut → bas et vice versa',
              difficulty: 'intermediate'
            },
            {
              type: 'caracteristiques',
              question: 'Décris l\'image dans chambre noire',
              answer: 'Renversée, réduite, nette (si trou petit)',
              difficulty: 'intermediate'
            },
            {
              type: 'application',
              question: 'Quel appareil fonctionne comme chambre noire?',
              answer: 'Appareil photo (même principe)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch7-s4',
          title: 'Éclipses solaires et lunaires',
          description: 'Comprendre les éclipses',
          concepts: ['Éclipse solaire', 'Éclipse lunaire', 'Alignement', 'Ombres'],
          objectives: [
            'Expliquer l\'éclipse solaire',
            'Expliquer l\'éclipse lunaire',
            'Distinguer les deux types',
            'Comprendre zones ombre/pénombre'
          ],
          content: {
            eclipse_solaire: {
              definition: 'Lune cache le Soleil vu depuis Terre',
              alignement: 'Soleil - Lune - Terre',
              condition: 'Nouvelle Lune',
              zones: {
                ombre: {
                  nom: 'Zone d\'ombre (cône)',
                  observation: 'Éclipse totale',
                  taille: 'Petite zone (200-300 km diamètre)',
                  duree: 'Maximum 7-8 minutes'
                },
                penombre: {
                  observation: 'Éclipse partielle',
                  zone: 'Plus large autour ombre',
                  visibilite: 'Soleil partiellement caché'
                }
              },
              danger: 'Ne JAMAIS regarder directement (lésions rétine)'
            },
            eclipse_lunaire: {
              definition: 'Terre cache Soleil vu depuis Lune',
              alignement: 'Soleil - Terre - Lune',
              condition: 'Pleine Lune',
              observation: {
                totale: 'Lune dans ombre Terre (rouge cuivre)',
                partielle: 'Lune partiellement dans ombre',
                duree: 'Jusqu\'à 100 minutes (plus long que solaire)'
              },
              couleur_rouge: 'Atmosphère terrestre filtre lumière',
              securite: 'Sans danger pour les yeux'
            },
            difference: {
              solaire: 'Lune cache Soleil, dangereuse, courte',
              lunaire: 'Terre cache Soleil pour Lune, sans danger, longue'
            },
            frequence: {
              eclipses_solaires: '2-5 par an (mais rares en un lieu)',
              eclipses_lunaires: '2-4 par an',
              visibilite: 'Lunaire visible moitié Terre, solaire zone étroite'
            },
            mauritanianContext: [
              'Observation éclipses désert',
              'Ciel clair mauritanien',
              'Phénomènes astronomiques',
              'Éducation scientifique'
            ]
          },
          exercises: [
            {
              type: 'alignement',
              question: 'Alignement pour éclipse solaire?',
              answer: 'Soleil - Lune - Terre',
              difficulty: 'beginner'
            },
            {
              type: 'distinction',
              question: 'Différence entre éclipse solaire et lunaire?',
              answer: 'Solaire: Lune cache Soleil. Lunaire: Terre cache Soleil pour Lune',
              difficulty: 'intermediate'
            },
            {
              type: 'securite',
              question: 'Pourquoi ne pas regarder éclipse solaire?',
              answer: 'Lésions graves de la rétine (dangereux pour yeux)',
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

export default YEAR3_PHYSICS_CURRICULUM;

