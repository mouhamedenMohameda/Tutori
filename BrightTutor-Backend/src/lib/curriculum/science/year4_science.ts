/**
 * Year 4 Science Curriculum - Mauritanie
 * Chapters 1-3: Organisation Cellulaire, Reproduction Humaine, Système Nerveux et Motricité
 */

export const YEAR4_SCIENCE_CURRICULUM = {
  year: 4,
  subject: 'Sciences',
  title: 'Manuel de Sciences Naturelles 4e AS (Quatrième Année Secondaire) - Mauritanie',
  methodology: 'Approche IPN: Je découvre → Je retiens → Je m\'exerce → J\'approfondis → J\'utilise. Méthode expérimentale et observationnelle.',
  
  chapters: [
    {
      id: 'ch1',
      title: 'ORGANISATION GÉNÉRALE DE LA CELLULE',
      sections: [
        {
          id: 'ch1-s1',
          title: 'Le microscope optique',
          description: 'Découvrir et utiliser le microscope',
          concepts: ['Microscope', 'Grossissement', 'Observation', 'Réglages'],
          objectives: [
            'Identifier les composantes d\'un microscope optique',
            'Comprendre le principe de grossissement',
            'Réaliser des réglages (macro et micrométrique)',
            'Calculer le grossissement total'
          ],
          content: {
            historique: {
              robert_hooke: 'Premier à utiliser le terme "cellule" en 1665',
              observation: 'Écorce avec microscope grossissant 30 fois',
              importance: 'Découverte de la structure cellulaire'
            },
            composants_mecaniques: {
              statif: 'Tube, revolver, potence, platine, pied',
              tube: 'Relie oculaire et objectifs',
              revolver: 'Porte les objectifs (rotation)',
              platine: 'Support pour la préparation',
              pied: 'Base stable du microscope'
            },
            systeme_optique: {
              source_lumineuse: 'Illumine la préparation',
              diaphragme: 'Contrôle l\'intensité lumineuse',
              condensateur: 'Concentre la lumière',
              objectifs: '4x, 10x, 40x (grossissements)',
              oculaire: 'Généralement x10'
            },
            fonctionnement: {
              grossissement_total: 'Grossissement oculaire × Grossissement objectif',
              exemples: {
                faible: 'x10 (oculaire) × x4 (objectif) = x40',
                moyen: 'x10 × x10 = x100',
                fort: 'x10 × x40 = x400'
              }
            },
            reglages: {
              vis_macrometrique: 'Réglage grossier (mise au point approximative)',
              vis_micrometrique: 'Réglage fin (netteté parfaite)',
              procedure: [
                'Commencer avec faible grossissement',
                'Centrer l\'objet',
                'Macrométrique d\'abord',
                'Micrométrique pour netteté'
              ]
            },
            mauritanianContext: [
              'Utilisation en laboratoires scolaires',
              'Analyses médicales locales',
              'Observation cellules buccales',
              'Recherche scientifique mauritanienne'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Calcule le grossissement: oculaire x10, objectif x40',
              answer: 'Grossissement total = 10 × 40 = x400',
              difficulty: 'beginner'
            },
            {
              type: 'identification',
              question: 'Quelle vis utiliser pour réglage fin?',
              answer: 'Vis micrométrique (réglage fin et précis)',
              difficulty: 'beginner'
            },
            {
              type: 'historique',
              question: 'Qui a découvert les cellules en 1665?',
              answer: 'Robert Hooke (observation d\'écorce)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'beginner',
          estimatedTime: 35
        },
        {
          id: 'ch1-s2',
          title: 'Observation de cellules animales',
          description: 'Observer et décrire les cellules animales',
          concepts: ['Cellule animale', 'Membrane', 'Cytoplasme', 'Noyau', 'Coloration'],
          objectives: [
            'Préparer une lame de cellules buccales',
            'Observer la structure cellulaire',
            'Identifier membrane, cytoplasme, noyau',
            'Utiliser les colorants (bleu de méthylène)'
          ],
          content: {
            preparation: {
              prelevement: 'Raclement interne de la joue avec ongle',
              montage: [
                'Dépôt sur lame propre',
                'Ajout goutte d\'eau',
                'Recouvrir de lamelle sans bulles'
              ],
              observations_progressives: 'x40, x100, x400'
            },
            coloration: {
              bleu_methylene: {
                action: 'Colore le cytoplasme et le noyau',
                resultat: 'Cytoplasme: bleu clair, Noyau: bleu intense',
                utilite: 'Rend les structures visibles'
              }
            },
            structure_cellule_animale: {
              membrane_plasmique: {
                localisation: 'Enveloppe externe',
                role: 'Limite et protège la cellule',
                propriete: 'Semi-perméable (sélective)'
              },
              cytoplasme: {
                description: 'Substance gélatineuse',
                contenu: 'Organites + eau + nutriments',
                couleur: 'Bleu clair après coloration'
              },
              noyau: {
                forme: 'Sphérique ou ovoïde',
                position: 'Central ou excentré',
                role: 'Contient l\'ADN (information génétique)',
                coloration: 'Bleu foncé (intensément coloré)'
              }
            },
            mauritanianContext: [
              'Pratique en TP scolaires',
              'Contrôles médicaux locaux',
              'Diagnostic maladies buccales',
              'Formation scientifique'
            ]
          },
          exercises: [
            {
              type: 'structure',
              question: 'Cite les 3 parties d\'une cellule animale',
              answer: 'Membrane plasmique, cytoplasme, noyau',
              difficulty: 'beginner'
            },
            {
              type: 'coloration',
              question: 'Pourquoi utiliser le bleu de méthylène?',
              answer: 'Pour rendre visibles les structures (colore cytoplasme et noyau)',
              difficulty: 'intermediate'
            },
            {
              type: 'observation',
              question: 'Quelle partie est la plus foncée après coloration?',
              answer: 'Le noyau (coloré intensément)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch1-s3',
          title: 'Observation de cellules végétales',
          description: 'Observer et comparer cellules végétales',
          concepts: ['Cellule végétale', 'Paroi', 'Vacuole', 'Chloroplastes', 'Colorations'],
          objectives: [
            'Préparer épiderme d\'oignon',
            'Identifier les structures végétales',
            'Comparer cellules animales et végétales',
            'Utiliser colorations spécifiques'
          ],
          content: {
            preparation: {
              materiel: 'Épiderme d\'oignon',
              protocole: [
                'Découper carré 5mm',
                'Déposer dans goutte d\'eau',
                'Recouvrir de lamelle',
                'Observer progressivement'
              ]
            },
            colorations_successives: {
              rouge_neutre: {
                cible: 'Système vacuolaire',
                resultat: 'Vacuoles rouges',
                information: 'Montre les grandes vacuoles'
              },
              lugol: {
                action: 'Coagulation et coloration',
                resultat: 'Noyaux jaunes',
                composition: 'Iode + iodure de potassium'
              },
              vert_methyle_pyronine: {
                ADN: 'Vert (dans le noyau)',
                ARN: 'Rose-rouge (cytoplasme)',
                distinction: 'Différencie acides nucléiques'
              }
            },
            structure_cellule_vegetale: {
              paroi_cellulosique: {
                position: 'Externe à la membrane',
                composition: 'Cellulose (rigide)',
                role: 'Protection et forme',
                absence: 'Jamais dans cellules animales'
              },
              membrane_plasmique: 'Sous la paroi',
              cytoplasme: 'Réduit (vacuole volumineuse)',
              grande_vacuole: {
                taille: 'Jusqu\'à 90% du volume',
                contenu: 'Eau + sels + pigments',
                role: 'Stockage et turgescence'
              },
              chloroplastes: {
                couleur: 'Verts',
                nombre: 'Nombreux',
                role: 'Photosynthèse',
                presence: 'Cellules vertes uniquement'
              },
              noyau: 'Souvent refoulé contre paroi'
            },
            comparaison: {
              communes: [
                'Membrane plasmique',
                'Cytoplasme',
                'Noyau'
              ],
              specifiques_vegetales: [
                'Paroi cellulosique',
                'Grande vacuole',
                'Chloroplastes (cellules vertes)'
              ],
              specifiques_animales: [
                'Pas de paroi rigide',
                'Vacuoles petites ou absentes',
                'Pas de chloroplastes'
              ]
            },
            mauritanianContext: [
              'Observation plantes locales',
              'Agriculture (cellules végétales)',
              'Alimentation (oignon local)',
              'Botanique mauritanienne'
            ]
          },
          exercises: [
            {
              type: 'distinction',
              question: 'Quelle structure distingue cellule végétale de animale?',
              answer: 'Paroi cellulosique, grande vacuole, chloroplastes',
              difficulty: 'beginner'
            },
            {
              type: 'role',
              question: 'Quel est le rôle des chloroplastes?',
              answer: 'Photosynthèse (production glucose avec lumière)',
              difficulty: 'intermediate'
            },
            {
              type: 'coloration',
              question: 'Quel colorant montre l\'ADN en vert?',
              answer: 'Vert de méthyle-pyronine (ADN vert, ARN rose)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch1-s4',
          title: 'Ultrastructure cellulaire',
          description: 'Découvrir les organites au microscope électronique',
          concepts: ['Organites', 'Mitochondrie', 'Chloroplaste', 'Réticulum', 'Golgi'],
          objectives: [
            'Connaître les organites cellulaires',
            'Comprendre le rôle de chaque organite',
            'Relier structure et fonction',
            'Distinguer cellules animales et végétales'
          ],
          content: {
            microscope_electronique: {
              difference: 'Grossissement jusqu\'à 100 000x',
              observation: 'Ultrastructure (détails internes)',
              limitation: 'Cellules mortes seulement'
            },
            membrane_plasmique: {
              modele: 'Mosaïque fluide (Singer et Nicholson, 1972)',
              structure: 'Double couche lipidique + protéines',
              proteines: {
                integrales: 'Traversent la membrane',
                peripheriques: 'À la surface'
              },
              fonctions: [
                'Barrière sélective',
                'Reconnaissance moléculaire',
                'Transport contrôlé'
              ]
            },
            paroi_vegetale: {
              lamelle_moyenne: 'Pectines (colle entre cellules)',
              paroi_primaire: 'Pecto-cellulosique, extensible',
              paroi_secondaire: 'Cellulose + lignine, rigide',
              plasmodesmes: 'Canaux de communication intercellulaire'
            },
            organites_majeurs: {
              mitochondrie: {
                forme: 'Allongée (bâtonnet)',
                structure: 'Double membrane, crêtes internes',
                role: 'Production ATP (énergie)',
                enzyme: 'ATP synthase',
                presence: 'Toutes cellules eucaryotes'
              },
              chloroplaste: {
                presence: 'Cellules végétales vertes uniquement',
                structure: 'Grana (thylakoïdes) + stroma',
                role: 'Photosynthèse',
                ADN: 'ADN circulaire propre'
              },
              appareil_golgi: {
                structure: 'Dictyosomes (saccules + vésicules)',
                role: 'Stockage, modification, sécrétion',
                produits: 'Protéines, lipides'
              },
              reticulum_endoplasmique: {
                rugueux: 'Avec ribosomes (synthèse protéines)',
                lisse: 'Sans ribosomes (synthèse lipides)',
                connexion: 'Relié à l\'enveloppe nucléaire'
              },
              vacuole: {
                membrane: 'Tonoplaste',
                contenu: 'Eau, sels, pigments, toxines',
                taille: 'Grande chez végétaux, petite/absente chez animaux'
              },
              centrosome: {
                structure: 'Deux centrioles orthogonaux',
                role: 'Division cellulaire',
                presence: 'Cellules animales (absent plantes supérieures)'
              }
            },
            mauritanianContext: [
              'Recherche cellulaire',
              'Compréhension maladies mitochondriales',
              'Applications médicales',
              'Biologie moderne'
            ]
          },
          exercises: [
            {
              type: 'role',
              question: 'Quel organite produit l\'énergie (ATP)?',
              answer: 'Mitochondrie (avec ATP synthase)',
              difficulty: 'beginner'
            },
            {
              type: 'distinction',
              question: 'Quel organite est propre aux cellules végétales?',
              answer: 'Chloroplaste (photosynthèse)',
              difficulty: 'beginner'
            },
            {
              type: 'structure',
              question: 'Quelle est la structure de la membrane plasmique?',
              answer: 'Mosaïque fluide: double couche lipidique + protéines intégrales/périphériques',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 45
        },
        {
          id: 'ch1-s5',
          title: 'Comparaison et synthèse cellulaire',
          description: 'Comparer et synthétiser les connaissances',
          concepts: ['Comparaison', 'Classification', 'Procaryotes', 'Eucaryotes'],
          objectives: [
            'Comparer cellules animales et végétales',
            'Distinguer procaryotes et eucaryotes',
            'Relier structure et fonction',
            'Synthétiser les connaissances'
          ],
          content: {
            tableau_comparatif: {
              structures_communes: {
                elements: [
                  'Membrane plasmique',
                  'Cytoplasme',
                  'Noyau',
                  'Ribosomes',
                  'Mitochondries',
                  'Réticulum endoplasmique',
                  'Appareil de Golgi'
                ]
              },
              specifiques_vegetales: {
                structures: [
                  'Paroi cellulosique',
                  'Chloroplastes',
                  'Grande vacuole centrale',
                  'Plasmodesmes'
                ],
                absence: 'Pas de centrosome'
              },
              specifiques_animales: {
                structures: [
                  'Centrosome (centrioles)',
                  'Lysosomes (plus nombreux)'
                ],
                absence: 'Pas de paroi, pas de chloroplastes'
              }
            },
            procaryotes_eucaryotes: {
              procaryotes: {
                definition: 'Sans noyau délimité',
                exemples: 'Bactéries',
                ADN: 'Circulaire, dans le cytoplasme',
                organites: 'Pas d\'organites membraneux'
              },
              eucaryotes: {
                definition: 'Avec noyau délimité par enveloppe',
                exemples: 'Cellules animales, végétales, champignons',
                ADN: 'Linéaire, dans le noyau',
                organites: 'Nombreux organites membraneux'
              }
            },
            relation_structure_fonction: {
              mitochondries: 'Nombreuses crêtes → grande surface → plus ATP',
              chloroplastes: 'Grana empilés → capture lumière efficace',
              vacuole: 'Grande taille → stockage + turgescence',
              reticulum: 'Réseau étendu → synthèse et transport',
              golgi: 'Saccules empilés → traitement séquentiel'
            },
            applications_pratiques: {
              medecine: 'Diagnostic maladies cellulaires',
              agriculture: 'Amélioration plantes (chloroplastes)',
              recherche: 'Thérapies cellulaires',
              biotechnologie: 'Production substances'
            },
            mauritanianContext: [
              'Observation cellules locales',
              'Applications médicales',
              'Recherche biologique',
              'Enseignement scientifique'
            ]
          },
          exercises: [
            {
              type: 'comparaison',
              question: 'Cite 2 différences entre cellules animales et végétales',
              answer: 'Végétales: paroi + chloroplastes + grande vacuole. Animales: centrosome',
              difficulty: 'intermediate'
            },
            {
              type: 'classification',
              question: 'Une bactérie est procaryote ou eucaryote?',
              answer: 'Procaryote (pas de noyau délimité)',
              difficulty: 'beginner'
            },
            {
              type: 'fonction',
              question: 'Pourquoi les mitochondries ont des crêtes?',
              answer: 'Augmenter surface pour production ATP plus efficace',
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
      title: 'REPRODUCTION CHEZ L\'HOMME',
      sections: [
        {
          id: 'ch2-s1',
          title: 'Appareil génital masculin',
          description: 'Connaître l\'anatomie masculine',
          concepts: ['Testicules', 'Spermatozoïdes', 'Voies génitales', 'Glandes annexes'],
          objectives: [
            'Décrire l\'appareil génital masculin',
            'Identifier les gonades et voies',
            'Comprendre la production de sperme',
            'Connaître le rôle des glandes'
          ],
          content: {
            gonades: {
              testicules: {
                description: 'Masses ovoïdes',
                taille: '4 cm × 2 cm',
                position: 'Scrotum (extra-abdominale)',
                temperature: '35°C (3° en-dessous corps)',
                role: 'Production spermatozoïdes + hormones (testostérone)'
              }
            },
            voies_genitales: {
              epididyme: {
                structure: 'Conduit sinueux',
                longueur: '6 mètres environ',
                role: 'Maturation des spermatozoïdes',
                duree: '10-15 jours'
              },
              canal_deferent: {
                longueur: '50-60 cm',
                trajet: 'Épididyme → urètre',
                role: 'Transport spermatozoïdes'
              },
              uretre: {
                nature: 'Canal uro-génital',
                double_role: 'Urine + sperme (pas simultané)',
                trajet: 'Vessie → extérieur'
              }
            },
            organe_copulateur: {
              penis: {
                structure: [
                  'Corps caverneux (2)',
                  'Corps spongieux (1)',
                  'Gland (extrémité sensible)'
                ],
                erection: 'Afflux sanguin dans tissus érectiles',
                role: 'Dépôt sperme dans vagin'
              }
            },
            glandes_annexes: {
              vesicules_seminales: {
                nombre: '2',
                secretion: 'Liquide riche en fructose (énergie)',
                volume: '60% du sperme'
              },
              prostate: {
                position: 'Sous la vessie',
                secretion: 'Liquide alcalin (protection)',
                volume: '30% du sperme'
              },
              glandes_cowper: {
                nombre: '2 petites glandes',
                role: 'Lubrification urètre',
                secretion: 'Avant éjaculation'
              }
            },
            sperme: {
              composition: 'Spermatozoïdes + liquide séminal',
              volume: '2-6 mL par éjaculation',
              pH: 'Alcalin (7,2-8,0)',
              concentration: '>60 millions spermatozoïdes/mL'
            },
            mauritanianContext: [
              'Éducation à la santé reproductive',
              'Consultations médicales',
              'Hygiène masculine',
              'Santé publique'
            ]
          },
          exercises: [
            {
              type: 'anatomie',
              question: 'Où sont produits les spermatozoïdes?',
              answer: 'Dans les testicules (gonades mâles)',
              difficulty: 'beginner'
            },
            {
              type: 'trajet',
              question: 'Quel est le trajet des spermatozoïdes?',
              answer: 'Testicules → Épididyme → Canal déférent → Urètre',
              difficulty: 'intermediate'
            },
            {
              type: 'glandes',
              question: 'Quelle glande produit le liquide alcalin?',
              answer: 'Prostate (protège spermatozoïdes de l\'acidité vaginale)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch2-s2',
          title: 'Spermatogenèse',
          description: 'Comprendre la formation des spermatozoïdes',
          concepts: ['Spermatogenèse', 'Méiose', 'Maturation', 'Spermatozoïde'],
          objectives: [
            'Décrire les 4 phases de la spermatogenèse',
            'Comprendre la réduction chromosomique',
            'Connaître la structure du spermatozoïde',
            'Calculer la durée totale'
          ],
          content: {
            definition: 'Production de spermatozoïdes dans les testicules',
            phases: {
              phase1_multiplication: {
                nom: 'Multiplication',
                processus: 'Cellules souches → spermatogonies',
                type: 'Divisions mitotiques successives',
                duree: '27 jours'
              },
              phase2_accroissement: {
                nom: 'Accroissement',
                processus: 'Spermatogonies → spermatocytes I',
                caracteristique: 'Légère croissance cellulaire',
                duree: '23 jours'
              },
              phase3_maturation: {
                nom: 'Maturation (méiose)',
                etape1: 'Spermatocyte I (2n) → 2 spermatocytes II (n)',
                etape2: 'Spermatocyte II (n) → 2 spermatides (n)',
                resultat: '4 spermatides haploïdes par spermatocyte I',
                duree: '1 jour'
              },
              phase4_differenciation: {
                nom: 'Différenciation (spermiogenèse)',
                processus: 'Spermatide → spermatozoïde',
                transformations: [
                  'Formation acrosome',
                  'Condensation noyau',
                  'Formation flagelle',
                  'Élimination cytoplasme'
                ],
                duree: '23 jours'
              }
            },
            duree_totale: '27 + 23 + 1 + 23 = 74 jours',
            structure_spermatozoide: {
              tete: {
                taille: '5 μm',
                contenu: 'Noyau avec 23 chromosomes (n)',
                acrosome: 'Vésicule avec enzymes (pénétration ovule)'
              },
              piece_intermediaire: {
                contenu: 'Cytoplasme riche en mitochondries',
                role: 'Production ATP pour mouvement'
              },
              flagelle: {
                longueur: '50 μm',
                role: 'Mobilité (propulsion)',
                vitesse: '2-3 mm/minute'
              }
            },
            production: {
              quantite: '500 millions par éjaculation',
              continuite: 'Production continue dès puberté',
              duree_vie: '48-72 heures dans appareil féminin'
            },
            mauritanianContext: [
              'Fertilité masculine',
              'Analyses médicales',
              'Santé reproductive',
              'Biologie cellulaire'
            ]
          },
          exercises: [
            {
              type: 'phases',
              question: 'Cite les 4 phases de la spermatogenèse',
              answer: 'Multiplication, Accroissement, Maturation (méiose), Différenciation',
              difficulty: 'beginner'
            },
            {
              type: 'duree',
              question: 'Quelle est la durée totale de la spermatogenèse?',
              answer: '74 jours (27+23+1+23)',
              difficulty: 'intermediate'
            },
            {
              type: 'structure',
              question: 'Quelle partie du spermatozoïde assure la mobilité?',
              answer: 'Le flagelle (long, permet propulsion)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch2-s3',
          title: 'Appareil génital féminin et ovogenèse',
          description: 'Connaître l\'anatomie féminine et production d\'ovules',
          concepts: ['Ovaires', 'Trompes', 'Utérus', 'Ovogenèse', 'Cycle'],
          objectives: [
            'Décrire l\'appareil génital féminin',
            'Comprendre l\'ovogenèse',
            'Connaître le cycle menstruel (28 jours)',
            'Comparer gamètes masculins et féminins'
          ],
          content: {
            gonades: {
              ovaires: {
                description: '2 masses ovoïdes',
                taille: '2-3 cm × 1,5 cm',
                position: 'Cavité abdominale (de chaque côté utérus)',
                role: 'Production ovules + hormones (œstrogènes, progestérone)'
              }
            },
            voies_genitales: {
              trompes_fallope: {
                nombre: '2',
                longueur: '10 cm chacune',
                pavillon: 'Extrémité dentelée près ovaire',
                cils_vibratiles: 'Propulsent l\'ovule vers utérus',
                lieu_fecondation: '1/3 supérieur de la trompe'
              },
              uterus: {
                nature: 'Muscle creux',
                taille: '7-8 cm × 4-5 cm',
                paroi: 'Endomètre (muqueuse)',
                col_uterin: 'Ouverture vers vagin',
                role: 'Nidation et développement fœtus'
              },
              vagin: {
                nature: 'Canal musculo-membraneux',
                longueur: '10 cm',
                role: 'Réception pénis, passage bébé',
                ouverture: 'Vulve'
              }
            },
            organes_externes: {
              vulve: 'Grandes lèvres, petites lèvres, clitoris',
              hymen: 'Membrane partiellement fermant vagin'
            },
            glandes: {
              uterines: 'Sécrétion muqueuse',
              cervicales: 'Glaire cervicale (col)',
              bartholin: '2 glandes lubrifiantes',
              mammaires: 'Production lait maternel'
            },
            ovogenese: {
              phase1_multiplication: 'Cellules souches → ovogonies (avant naissance)',
              phase2_accroissement: 'Ovogonies → ovocyte I (croissance importante)',
              phase3_maturation: {
                division1: 'Ovocyte I (2n) → ovocyte II (n) + 1er globule polaire',
                division2: 'Ovocyte II → ovule (n) + 2ème globule polaire',
                moment: 'Division 2 seulement si fécondation'
              }
            },
            ovule: {
              taille: '100 μm (0,1 mm)',
              forme: 'Sphérique',
              mobilite: 'Immobile (transporté par cils)',
              cytoplasme: 'Riche en réserves nutritives',
              production: '1 ovule par mois (cycle 28 jours)'
            },
            cycle_menstruel: {
              duree: '28 jours en moyenne',
              ovulation: 'Jour 14',
              periode_fecondite: 'Jours 12-16',
              regles: 'Élimination endomètre si pas fécondation'
            },
            mauritanianContext: [
              'Santé reproductive féminine',
              'Éducation sanitaire',
              'Suivi médical',
              'Planning familial'
            ]
          },
          exercises: [
            {
              type: 'anatomie',
              question: 'Où a lieu la fécondation?',
              answer: '1/3 supérieur de la trompe de Fallope',
              difficulty: 'beginner'
            },
            {
              type: 'comparaison',
              question: 'Quelle différence entre spermatozoïde et ovule?',
              answer: 'Spermatozoïde: petit, mobile, nombreux. Ovule: gros, immobile, 1/mois',
              difficulty: 'intermediate'
            },
            {
              type: 'cycle',
              question: 'Quand a lieu l\'ovulation dans un cycle de 28 jours?',
              answer: 'Jour 14 (milieu du cycle)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch2-s4',
          title: 'Puberté et fécondation',
          description: 'Comprendre la puberté et le processus de fécondation',
          concepts: ['Puberté', 'Caractères sexuels', 'Fécondation', 'Zygote'],
          objectives: [
            'Identifier les signes de la puberté',
            'Distinguer caractères sexuels primaires et secondaires',
            'Comprendre le processus de fécondation',
            'Connaître les conditions de fécondité'
          ],
          content: {
            puberte: {
              definition: 'Période de transformation permettant la reproduction',
              age_debut: {
                filles: '10-13 ans',
                garcons: '12-15 ans'
              },
              duree: {
                filles: 'Environ 6 ans (fin vers 16 ans)',
                garcons: 'Environ 6 ans (fin vers 18 ans)'
              }
            },
            signes_puberte: {
              filles: [
                'Développement des seins',
                'Apparition des règles (ménarche)',
                'Arrondissement des hanches',
                'Pilosité pubienne et axillaire',
                'Voix reste relativement aiguë'
              ],
              garcons: [
                'Développement testicules et pénis',
                'Premières éjaculations (pollutions nocturnes)',
                'Élargissement des épaules',
                'Pilosité pubienne, axillaire et faciale (barbe)',
                'Voix devient plus grave (mue)'
              ]
            },
            caracteres_sexuels: {
              primaires: {
                definition: 'Organes reproducteurs présents à la naissance',
                exemples: 'Testicules, ovaires, organes génitaux'
              },
              secondaires: {
                definition: 'Apparaissent à la puberté',
                exemples: 'Seins, pilosité, voix, morphologie'
              }
            },
            fecondation: {
              definition: 'Rencontre et fusion gamète mâle et gamète femelle',
              lieu: '1/3 supérieur de la trompe de Fallope',
              etapes: {
                migration: {
                  processus: 'Spermatozoïdes nagent vers ovule',
                  duree_vie: '2-3 jours dans voies féminines',
                  nombre: 'Des millions, un seul féconde'
                },
                attraction: {
                  processus: 'Rassemblement autour ovocyte II',
                  chimiotactisme: 'Attraction chimique'
                },
                penetration: {
                  processus: 'Un seul spermatozoïde pénètre',
                  monospermie: 'Blocage immédiat autres spermatozoïdes',
                  acrosome: 'Enzymes digèrent enveloppe ovule'
                },
                caryogamie: {
                  fusion_noyaux: 'Noyau mâle (n) + noyau femelle (n)',
                  zygote: 'Première cellule (2n = 46 chromosomes)',
                  debut_grossesse: 'Division cellulaire commence'
                }
              }
            },
            conditions_necessaires: {
              sperme_normal: [
                'Volume: 2-6 mL',
                'pH alcalin (7,2-8,0)',
                'Concentration: >60 millions/mL',
                'Mobilité: >50% mobiles'
              ],
              periode_fecondite: 'Ovulation ± 2 jours (jours 12-16)',
              rapport_sexuel: 'Durant période de fécondité'
            },
            mauritanianContext: [
              'Éducation à la puberté',
              'Santé reproductive',
              'Accompagnement adolescents',
              'Conseils familiaux'
            ]
          },
          exercises: [
            {
              type: 'puberte',
              question: 'Cite 3 signes de puberté chez la fille',
              answer: 'Développement seins, règles, hanches arrondies',
              difficulty: 'beginner'
            },
            {
              type: 'fecondation',
              question: 'Qu\'est-ce que la caryogamie?',
              answer: 'Fusion des noyaux mâle (n) et femelle (n) → zygote (2n)',
              difficulty: 'intermediate'
            },
            {
              type: 'caracteres',
              question: 'Différence entre caractères sexuels primaires et secondaires?',
              answer: 'Primaires: présents à naissance. Secondaires: apparaissent à puberté',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch2-s5',
          title: 'Hygiène et maladies sexuellement transmissibles',
          description: 'Prévenir les MST et pratiquer l\'hygiène',
          concepts: ['MST', 'Hygiène', 'Prévention', 'SIDA', 'Dépistage'],
          objectives: [
            'Connaître les principales MST',
            'Comprendre les modes de transmission',
            'Appliquer les règles d\'hygiène',
            'Connaître les mesures de prévention'
          ],
          content: {
            principales_mst: {
              chlamydiose: {
                agent: 'Bactérie Chlamydia trachomatis',
                incubation: '7-30 jours',
                symptomes: 'Brûlures, écoulements',
                traitement: 'Antibiotiques'
              },
              gonococcie: {
                agent: 'Gonocoque (bactérie)',
                incubation: '2-5 jours',
                symptomes: 'Écoulements purulents, brûlures',
                traitement: 'Antibiotiques'
              },
              syphilis: {
                agent: 'Tréponème (bactérie)',
                symptomes: 'Chancre initial, taches roses',
                evolution: 'Phases primaire, secondaire, tertiaire',
                traitement: 'Pénicilline'
              },
              hepatites_B_C: {
                agent: 'Virus',
                symptomes: 'Fatigue, jaunisse',
                prevention: 'Vaccination disponible (hépatite B)',
                gravite: 'Peuvent devenir chroniques'
              },
              sida: {
                agent: 'VIH (virus immunodéficience humaine)',
                attaque: 'Système immunitaire',
                evolution: 'Détérioration progressive immunité',
                traitement: 'Antirétroviraux (pas de guérison)',
                prevention: 'Cruciale'
              }
            },
            modes_transmission: {
              voie_sexuelle: {
                principal: 'Rapport sexuel non protégé',
                liquides: 'Sperme, sécrétions vaginales',
                risque: 'Toutes MST'
              },
              voie_sanguine: {
                situations: [
                  'Transfusion sang contaminé',
                  'Partage seringues',
                  'Matériel médical non stérilisé'
                ],
                maladies: 'VIH, hépatites B et C'
              },
              mere_foetus: {
                moments: [
                  'Grossesse (placenta)',
                  'Accouchement (contact sang)',
                  'Allaitement (lait maternel)'
                ],
                prevention: 'Traitement maternel, césarienne'
              }
            },
            prevention_mauritanienne: {
              abstinence: {
                principe: 'Pas de rapports sexuels hors mariage',
                conformite: 'Conforme aux valeurs islamiques',
                efficacite: '100% si respectée'
              },
              depistage_prenuptial: {
                obligatoire: 'Avant mariage',
                tests: 'VIH, hépatites, syphilis',
                objectif: 'Protection mutuelle des époux'
              },
              vaccination: {
                hepatite_B: 'Disponible et recommandée',
                HPV: 'Prévention cancer col utérus'
              },
              education_sexuelle: {
                importance: 'Information complète et adaptée',
                respect: 'Valeurs culturelles et religieuses'
              }
            },
            hygiene_reproductive: {
              quotidienne: [
                'Toilette intime régulière',
                'Changement sous-vêtements',
                'Utilisation savon doux',
                'Séchage soigneux'
              ],
              consultation: 'En cas de symptômes anormaux',
              examens: 'Contrôles médicaux réguliers'
            },
            mauritanianContext: [
              'Respect valeurs islamiques',
              'Dépistage prénuptial obligatoire',
              'Campagnes sensibilisation',
              'Santé publique'
            ]
          },
          exercises: [
            {
              type: 'mst',
              question: 'Cite 3 MST et leurs agents',
              answer: 'Syphilis (tréponème), Gonococcie (gonocoque), SIDA (VIH)',
              difficulty: 'beginner'
            },
            {
              type: 'transmission',
              question: 'Quels sont les 3 modes de transmission du VIH?',
              answer: 'Voie sexuelle, voie sanguine, mère-enfant',
              difficulty: 'intermediate'
            },
            {
              type: 'prevention',
              question: 'Quelle est la prévention conforme à l\'islam?',
              answer: 'Abstinence avant mariage + dépistage prénuptial',
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
      title: 'SYSTÈME NERVEUX ET MOTRICITÉ',
      sections: [
        {
          id: 'ch3-s1',
          title: 'Organisation du système nerveux',
          description: 'Connaître l\'anatomie du système nerveux',
          concepts: ['SNC', 'SNP', 'Encéphale', 'Moelle épinière', 'Nerfs'],
          objectives: [
            'Distinguer SNC et SNP',
            'Identifier les parties de l\'encéphale',
            'Comprendre la protection nerveuse',
            'Connaître les types de nerfs'
          ],
          content: {
            organisation_generale: {
              systeme_nerveux_central: {
                encephale: {
                  cerveau: 'Hémisphères, diencéphale',
                  cervelet: 'Coordination mouvements',
                  tronc_cerebral: 'Connexion cerveau-moelle'
                },
                moelle_epiniere: {
                  longueur: '45 cm',
                  position: 'Colonne vertébrale (canal rachidien)',
                  role: 'Transmission + réflexes'
                }
              },
              systeme_nerveux_peripherique: {
                nerfs_craniens: '12 paires (partent encéphale)',
                nerfs_rachidiens: '31 paires (partent moelle épinière)',
                types: {
                  sensitifs: 'Informations vers SNC',
                  moteurs: 'Ordres vers muscles',
                  mixtes: 'Sensitifs + moteurs'
                }
              }
            },
            protection: {
              meninges: {
                dure_mere: 'Externe, résistante',
                arachnoide: 'Moyenne, toile d\'araignée',
                pie_mere: 'Interne, vascularisée'
              },
              liquide_cephalo_rachidien: {
                abbr: 'LCR',
                role: 'Protection contre chocs',
                renouvellement: 'Constant'
              },
              os: 'Crâne (encéphale), vertèbres (moelle)'
            },
            structure_centres: {
              substance_grise: {
                composition: 'Corps cellulaires neurones',
                position_cerveau: 'Cortex (périphérie, 3mm)',
                position_moelle: 'Centre (forme papillon)'
              },
              substance_blanche: {
                composition: 'Fibres myélinisées',
                role: 'Connexions nerveuses',
                couleur: 'Blanche (gaine myéline)'
              },
              ventricules: '4 cavités remplies de LCR'
            },
            mauritanianContext: [
              'Traumatismes crâniens',
              'Méningite (problème santé publique)',
              'Protection système nerveux',
              'Neurologie locale'
            ]
          },
          exercises: [
            {
              type: 'organisation',
              question: 'Quelles sont les 2 parties du SNC?',
              answer: 'Encéphale et moelle épinière',
              difficulty: 'beginner'
            },
            {
              type: 'protection',
              question: 'Cite les 3 méninges',
              answer: 'Dure-mère, arachnoïde, pie-mère',
              difficulty: 'beginner'
            },
            {
              type: 'nerfs',
              question: 'Combien de paires de nerfs rachidiens?',
              answer: '31 paires (partent de la moelle épinière)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch3-s2',
          title: 'Le neurone et ses propriétés',
          description: 'Étudier la cellule nerveuse',
          concepts: ['Neurone', 'Dendrites', 'Axone', 'Synapse', 'Influx nerveux'],
          objectives: [
            'Décrire la structure du neurone',
            'Identifier les types de neurones',
            'Comprendre les propriétés nerveuses',
            'Connaître la transmission synaptique'
          ],
          content: {
            structure_neurone: {
              corps_cellulaire: {
                nom: 'Péricaryon ou soma',
                contenu: 'Noyau + organites synthèse',
                taille: '10-100 μm',
                role: 'Centre métabolique'
              },
              dendrites: {
                nombre: 'Multiples',
                forme: 'Courtes et ramifiées',
                role: 'Réception stimuli',
                direction: 'Vers corps cellulaire'
              },
              axone: {
                nombre: 'Un seul par neurone',
                longueur: 'Peut atteindre 1 mètre',
                role: 'Transmission message nerveux',
                direction: 'Depuis corps cellulaire',
                gaine_myeline: 'Isolation électrique (vitesse)'
              }
            },
            types_neurones: {
              unipolaire: '1 prolongement',
              bipolaire: '2 prolongements',
              multipolaire: 'Nombreux prolongements (plus courant)',
              pyramidal: 'Forme pyramide (cortex cérébral)'
            },
            proprietes: {
              excitabilite: {
                definition: 'Capacité répondre à un stimulus',
                experience: 'Courant électrique → contraction muscle',
                types_stimuli: 'Électrique, chimique, mécanique'
              },
              conductibilite: {
                definition: 'Transmission influx nerveux',
                sens: 'Dendrites → corps → axone',
                vitesse: '1-120 m/s (selon myélinisation)'
              },
              non_regeneration: {
                caracteristique: 'Neurones ne se divisent pas',
                consequence: 'Stock déterminé à naissance',
                protection: 'Éviter alcool, drogues, traumatismes'
              }
            },
            synapse: {
              definition: 'Zone de contact entre deux neurones',
              structure: {
                neurone_presynaptique: 'Libère neurotransmetteurs',
                fente_synaptique: 'Espace 20-40 nm',
                neurone_postsynaptique: 'Récepteurs'
              },
              transmission: {
                etape1: 'Influx nerveux arrive',
                etape2: 'Libération neurotransmetteurs',
                etape3: 'Diffusion dans fente',
                etape4: 'Fixation sur récepteurs',
                etape5: 'Nouveau influx généré'
              },
              sens: 'Unidirectionnel (une seule direction)'
            },
            mauritanianContext: [
              'Neurotoxicité (substances)',
              'Protection cellules nerveuses',
              'Maladies neurologiques',
              'Recherche neurologique'
            ]
          },
          exercises: [
            {
              type: 'structure',
              question: 'Cite les 3 parties d\'un neurone',
              answer: 'Corps cellulaire (soma), dendrites, axone',
              difficulty: 'beginner'
            },
            {
              type: 'propriete',
              question: 'Qu\'est-ce que l\'excitabilité?',
              answer: 'Capacité du neurone à répondre à un stimulus',
              difficulty: 'beginner'
            },
            {
              type: 'synapse',
              question: 'Comment se fait la transmission synaptique?',
              answer: 'Libération neurotransmetteurs dans fente → fixation récepteurs → nouvel influx',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s3',
          title: 'Arc réflexe et réflexes',
          description: 'Comprendre les réflexes innés',
          concepts: ['Réflexe', 'Arc réflexe', 'Centre nerveux', 'Automatisme'],
          objectives: [
            'Définir un réflexe',
            'Identifier les 5 éléments de l\'arc réflexe',
            'Réaliser des expériences sur grenouille',
            'Distinguer réflexe et acte volontaire'
          ],
          content: {
            definition_reflexe: {
              caracteristiques: [
                'Action motrice inconsciente',
                'Déclenchée par stimulus',
                'Rapide et automatique',
                'Involontaire'
              ],
              exemples: 'Retrait main (brûlure), clignement yeux, réflexe rotulien'
            },
            experiences_demonstratives: {
              experience1: {
                nom: 'Réflexe cutané',
                protocole: 'Toucher patte grenouille décérébrée',
                resultat: 'Retrait patte (flexion)',
                conclusion: 'Réflexe sans intervention cerveau'
              },
              experience2: {
                nom: 'Réflexe spinal',
                protocole: 'Stimulation électrique nerf',
                resultat: 'Contraction muscle',
                conclusion: 'Moelle épinière = centre réflexe'
              },
              experience3: {
                nom: 'Anesthésie éther',
                resultat: 'Suppression réflexe',
                conclusion: 'Centre nerveux nécessaire'
              },
              experience4: {
                nom: 'Section nerf sciatique',
                resultat: 'Pas de réflexe après section',
                conclusion: 'Nerf nécessaire'
              },
              experience5: {
                nom: 'Destruction moelle',
                resultat: 'Suppression réflexe',
                conclusion: 'Moelle = centre réflexe'
              }
            },
            arc_reflexe: {
              definition: 'Circuit nerveux d\'un réflexe',
              elements: {
                element1_recepteur: {
                  nom: 'Récepteur sensoriel',
                  role: 'Capte stimulus',
                  exemples: 'Terminaisons nerveuses peau'
                },
                element2_voie_sensitive: {
                  nom: 'Nerf sensitif (afférent)',
                  role: 'Transmet info vers centre',
                  direction: 'Périphérie → centre'
                },
                element3_centre_nerveux: {
                  nom: 'Centre nerveux (moelle)',
                  role: 'Traite info + génère réponse',
                  localisation: 'Moelle épinière'
                },
                element4_voie_motrice: {
                  nom: 'Nerf moteur (efférent)',
                  role: 'Transmet ordre vers effecteur',
                  direction: 'Centre → périphérie'
                },
                element5_effecteur: {
                  nom: 'Effecteur (muscle)',
                  role: 'Exécute réponse',
                  action: 'Contraction musculaire'
                }
              }
            },
            reflexe_rotulien: {
              stimulus: 'Percussion sous rotule (genou)',
              reponse: 'Extension jambe',
              centre: 'Moelle épinière lombaire',
              utilite_medicale: 'Test intégrité nerveuse'
            },
            mauritanianContext: [
              'Examens neurologiques',
              'Diagnostic médical',
              'Protection automatique corps',
              'Santé nerveuse'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce qu\'un réflexe?',
              answer: 'Action motrice inconsciente et rapide déclenchée par stimulus',
              difficulty: 'beginner'
            },
            {
              type: 'arc_reflexe',
              question: 'Cite les 5 éléments de l\'arc réflexe',
              answer: 'Récepteur, voie sensitive, centre nerveux, voie motrice, effecteur',
              difficulty: 'intermediate'
            },
            {
              type: 'experience',
              question: 'Que prouve la section du nerf?',
              answer: 'Le nerf est nécessaire pour le réflexe',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s4',
          title: 'Squelette et os',
          description: 'Étudier le système osseux',
          concepts: ['Squelette', 'Os', 'Cartilage', 'Moelle', 'Croissance'],
          objectives: [
            'Connaître les parties du squelette',
            'Classifier les types d\'os',
            'Comprendre la structure d\'un os long',
            'Expliquer la croissance osseuse'
          ],
          content: {
            squelette: {
              total: '206 os chez adulte',
              divisions: {
                tete: 'Crâne (boîte crânienne) + face',
                tronc: 'Colonne vertébrale (33 vertèbres) + cage thoracique',
                membres_superieurs: 'Ceinture scapulaire + bras + avant-bras + main',
                membres_inferieurs: 'Ceinture pelvienne + cuisse + jambe + pied'
              }
            },
            classification_os: {
              os_longs: {
                exemples: 'Humérus, fémur, tibia, péroné, radius, cubitus',
                forme: 'Allongés',
                structure: 'Diaphyse + 2 épiphyses'
              },
              os_courts: {
                exemples: 'Vertèbres, carpes, tarses',
                forme: 'Cubiques'
              },
              os_plats: {
                exemples: 'Omoplate, côtes, os iliaque',
                forme: 'Larges et minces'
              },
              os_irreguliers: {
                exemples: 'Bassin, certaines vertèbres',
                forme: 'Complexe'
              }
            },
            structure_os_long: {
              diaphyse: {
                description: 'Partie centrale allongée',
                composition: 'Os compact (dense)',
                cavite_medullaire: 'Contient moelle jaune'
              },
              epiphyses: {
                description: 'Deux extrémités renflées',
                composition: 'Os spongieux',
                contenu: 'Moelle rouge',
                recouvrement: 'Cartilage articulaire'
              },
              perioste: {
                nature: 'Membrane fibreuse vivante',
                position: 'Recouvre diaphyse',
                role: 'Croissance épaisseur + nutrition'
              },
              cartilage_conjugaison: {
                position: 'Entre diaphyse et épiphyse',
                role: 'Croissance longueur',
                disparition: 'Vers 20 ans (fin croissance)'
              }
            },
            croissance_osseuse: {
              en_longueur: {
                responsable: 'Cartilage de conjugaison',
                mecanisme: 'Production nouveau cartilage → ossification',
                duree: 'Jusqu\'à 18-20 ans'
              },
              en_epaisseur: {
                responsable: 'Périoste',
                mecanisme: 'Dépôt osseux externe',
                continuite: 'Toute la vie'
              }
            },
            composition_chimique: {
              osseine: '30% (matière organique, donne flexibilité)',
              sels_mineraux: '45% (carbonate calcium, donne dureté)',
              eau: '25%'
            },
            fonctions_os: [
              'Soutien du corps',
              'Protection organes',
              'Mouvement (avec muscles)',
              'Production cellules sanguines (moelle rouge)',
              'Réserve minéraux (calcium, phosphore)'
            ],
            mauritanianContext: [
              'Croissance enfants',
              'Rachitisme (carence vitamine D)',
              'Fractures et traumatismes',
              'Nutrition osseuse'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Le fémur est quel type d\'os?',
              answer: 'Os long (diaphyse + 2 épiphyses)',
              difficulty: 'beginner'
            },
            {
              type: 'croissance',
              question: 'Quelle structure assure la croissance en longueur?',
              answer: 'Cartilage de conjugaison',
              difficulty: 'intermediate'
            },
            {
              type: 'fonction',
              question: 'Où sont produits les globules rouges?',
              answer: 'Moelle rouge (dans os spongieux)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch3-s5',
          title: 'Muscles et articulations',
          description: 'Étudier le système musculaire et articulaire',
          concepts: ['Muscles', 'Contraction', 'Articulations', 'Mouvement'],
          objectives: [
            'Classifier les types de muscles',
            'Comprendre la contraction musculaire',
            'Identifier les types d\'articulations',
            'Connaître l\'hygiène et prévention'
          ],
          content: {
            types_muscles: {
              muscle_squelettique: {
                nom: 'Muscle strié squelettique',
                controle: 'Volontaire',
                localisation: 'Fixé sur squelette',
                fonction: 'Mouvement du corps',
                structure: 'Fibres striées'
              },
              muscle_cardiaque: {
                nom: 'Muscle strié cardiaque',
                controle: 'Involontaire',
                localisation: 'Myocarde (cœur)',
                fonction: 'Propulsion sang',
                particularite: 'Automatique et rythmique'
              },
              muscle_lisse: {
                nom: 'Muscle lisse',
                controle: 'Involontaire',
                localisation: 'Viscères, vaisseaux',
                fonction: 'Digestion, circulation',
                structure: 'Non strié'
              }
            },
            structure_muscle_squelettique: {
              fibre_musculaire: {
                nature: 'Cellule plurinucléée (syncytium)',
                longueur: '1-5 cm (jusqu\'à 30 cm)',
                diametre: '10-100 μm',
                striations: 'Alternance bandes claires/sombres'
              },
              membranes: {
                endomysium: 'Sépare chaque fibre',
                perimysium: 'Groupe fibres en faisceaux',
                epimysium: 'Enveloppe muscle entier'
              },
              tendons: {
                nature: 'Tissu conjonctif résistant',
                role: 'Fixation muscle sur os',
                exemples: 'Tendon d\'Achille'
              }
            },
            proprietes_muscle: {
              excitabilite: 'Réponse à stimulus',
              contractilite: 'Raccourcissement + épaississement',
              elasticite: 'Retour forme initiale (limitée)',
              tonicite: 'Tension permanente (tonus musculaire)'
            },
            contraction: {
              mecanisme: 'Glissement filaments actine/myosine',
              energie: 'ATP fourni par mitochondries',
              types: {
                secousse: 'Contraction brève unique',
                tetanos: 'Contraction soutenue (secousses fusionnées)'
              }
            },
            articulations: {
              synarthroses: {
                mobilite: 'Immobiles',
                exemples: 'Sutures crâne, dents-alvéoles',
                tissu: 'Tissu fibreux'
              },
              amphiarthroses: {
                mobilite: 'Semi-mobiles',
                exemples: 'Vertèbres, côtes-sternum',
                tissu: 'Cartilage'
              },
              diarthroses: {
                mobilite: 'Mobiles',
                structure: {
                  cartilage_articulaire: 'Réduit friction',
                  synovie: 'Liquide lubrifiant',
                  capsule: 'Enveloppe articulaire',
                  ligaments: 'Maintiennent articulation'
                },
                exemples: 'Genou, coude, épaule, hanche'
              }
            },
            accidents: {
              entorse: 'Distension/rupture ligaments',
              luxation: 'Déplacement têtes osseuses',
              fracture: 'Cassure os',
              rhumatisme: {
                arthrite: 'Inflammation articulaire',
                arthrose: 'Usure cartilage'
              }
            },
            hygiene: {
              activite_physique: 'Renforce muscles et os',
              posture: 'Éviter déformations colonne',
              alimentation: 'Calcium, vitamine D, protéines',
              repos: 'Sommeil réparateur',
              eviter: 'Surmenage, mauvaises postures'
            },
            mauritanianContext: [
              'Sport et santé',
              'Prévention déformations',
              'Traumatismes sportifs',
              'Nutrition musculaire'
            ]
          },
          exercises: [
            {
              type: 'types',
              question: 'Cite les 3 types de muscles',
              answer: 'Strié squelettique (volontaire), cardiaque (involontaire), lisse (involontaire)',
              difficulty: 'beginner'
            },
            {
              type: 'articulation',
              question: 'Quel type d\'articulation au genou?',
              answer: 'Diarthrose (mobile, avec synovie)',
              difficulty: 'intermediate'
            },
            {
              type: 'accident',
              question: 'Quelle différence entre entorse et luxation?',
              answer: 'Entorse: ligaments distendus. Luxation: os déplacés',
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
      title: 'ROCHES MAGMATIQUES ET MÉTAMORPHIQUES',
      sections: [
        {
          id: 'ch4-s1',
          title: 'Classification des roches',
          description: 'Découvrir les trois types de roches',
          concepts: ['Roches magmatiques', 'Roches sédimentaires', 'Roches métamorphiques', 'Cycle'],
          objectives: [
            'Différencier les trois types de roches',
            'Identifier les caractéristiques de chaque type',
            'Comprendre le cycle des roches',
            'Connaître les roches mauritaniennes'
          ],
          content: {
            types_roches: {
              roches_magmatiques: {
                definition: 'Roches issues du refroidissement du magma',
                origine: 'Fusion de roches en profondeur',
                types: {
                  plutoniques: 'Refroidissement lent en profondeur (gros cristaux)',
                  volcaniques: 'Refroidissement rapide en surface (cristaux fins)'
                }
              },
              roches_sedimentaires: {
                definition: 'Roches formées par dépôt et compaction de sédiments',
                processus: 'Érosion → Transport → Sédimentation → Diagenèse',
                exemples: 'Calcaire, grès, argile'
              },
              roches_metamorphiques: {
                definition: 'Transformation de roches sous pression et température',
                processus: 'Chaleur + Pression → Modification structure',
                exemples: 'Marbre (calcaire), ardoise (schiste), gneiss'
              }
            },
            cycle_roches: {
              definition: 'Transformations continues entre types de roches',
              etapes: {
                magmatisme: 'Magma → Roches magmatiques',
                erosion: 'Roches → Sédiments',
                sedimentation: 'Sédiments → Roches sédimentaires',
                metamorphisme: 'Roches → Roches métamorphiques (chaleur/pression)',
                fusion: 'Roches → Magma (recommence cycle)'
              }
            },
            roches_mauritaniennes: {
              dorsale_rgueibat: 'Granite, gneiss (roches anciennes)',
              mauritanides: 'Roches métamorphiques (chaîne montagneuse)',
              bassin_taoudeni: 'Roches sédimentaires (calcaire, grès)',
              utilisation: 'Construction, granulats, ornement'
            },
            mauritanianContext: [
              'Géologie mauritanienne',
              'Ressources minérales',
              'Construction locale',
              'Dorsale Rgueibat'
            ]
          },
          exercises: [
            {
              type: 'classification',
              question: 'Quel type de roche est le granite?',
              answer: 'Roche magmatique plutonique (refroidissement lent)',
              difficulty: 'beginner'
            },
            {
              type: 'processus',
              question: 'Comment se forme une roche métamorphique?',
              answer: 'Transformation d\'une roche par chaleur et pression',
              difficulty: 'intermediate'
            },
            {
              type: 'cycle',
              question: 'Que devient le magma après refroidissement?',
              answer: 'Roche magmatique (plutonique si lent, volcanique si rapide)',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch4-s2',
          title: 'Le granite - Roche plutonique',
          description: 'Étudier le granite en détail',
          concepts: ['Granite', 'Cristaux', 'Minéraux', 'Formation', 'Altération'],
          objectives: [
            'Identifier les minéraux du granite',
            'Comprendre la formation du granite',
            'Expliquer l\'altération du granite',
            'Connaître les gisements mauritaniens'
          ],
          content: {
            definition: 'Roche plutonique cristalline à gros grains visibles',
            composition: {
              quartz: {
                formule: 'SiO₂ (silice pure)',
                aspect: 'Cristaux vitreux, translucides',
                proportion: '20-30%',
                durete: 'Très dur (raye verre)'
              },
              feldspaths: {
                orthose: 'KAlSi₃O₈ (rose)',
                plagioclases: 'NaAlSi₃O₈ (blanc)',
                proportion: '50-60%',
                forme: 'Parallélépipédique'
              },
              micas: {
                biotite: 'Noir (paillettes sombres)',
                muscovite: 'Blanc/argenté (paillettes brillantes)',
                proportion: '10-15%',
                clivage: 'Se débite en feuillets'
              }
            },
            formation: {
              etape1: 'Formation magma granitique en profondeur',
              etape2: 'Remontée lente vers surface',
              etape3: {
                cristallisation_fractionnee: 'Minéraux cristallisent successivement',
                ordre: 'Feldspaths et micas d\'abord, quartz ensuite'
              },
              etape4: 'Formation pluton (massif granitique)',
              etape5: 'Soulèvement montagnes',
              etape6: 'Érosion → affleurement granite'
            },
            alteration: {
              processus: {
                etape1: 'Pénétration eau par diaclases (fissures)',
                etape2: {
                  hydrolyse_feldspaths: 'Feldspaths → Argiles (kaolinite)',
                  reaction: 'Eau transforme feldspaths'
                },
                etape3: 'Quartz résistant → libéré comme sable',
                etape4: 'Formation arène granitique (sable + argile)'
              },
              paysages: {
                chaos_granitique: 'Blocs arrondis empilés',
                taffoni: 'Cavités d\'altération',
                boules: 'Altération sphéroïdale'
              }
            },
            proprietes: {
              durete: 'Élevée (construction)',
              impermeabilite: 'Faible porosité',
              densite: '2,7 g/cm³',
              couleurs: 'Blanc, rose, gris'
            },
            gisements_mauritanie: {
              akjoujt: 'Gisement important',
              dorsale_rgueibat: 'Socle granitique ancien',
              utilisation: 'Construction, pavés, ornement'
            },
            mauritanianContext: [
              'Exploitation granite Akjoujt',
              'Construction Nouakchott',
              'Géologie Dorsale Rgueibat',
              'Ressources minières'
            ]
          },
          exercises: [
            {
              type: 'composition',
              question: 'Cite les 3 minéraux du granite',
              answer: 'Quartz, feldspaths, micas',
              difficulty: 'beginner'
            },
            {
              type: 'alteration',
              question: 'Que deviennent les feldspaths lors altération?',
              answer: 'Argiles (kaolinite) par hydrolyse',
              difficulty: 'intermediate'
            },
            {
              type: 'formation',
              question: 'Pourquoi le granite a de gros cristaux?',
              answer: 'Refroidissement lent en profondeur',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch4-s3',
          title: 'Le basalte - Roche volcanique',
          description: 'Étudier le basalte',
          concepts: ['Basalte', 'Volcanisme', 'Texture', 'Origine'],
          objectives: [
            'Décrire la structure du basalte',
            'Comprendre l\'origine du basalte',
            'Comparer basalte et granite',
            'Connaître les utilisations'
          ],
          content: {
            definition: 'Roche volcanique sombre à texture fine',
            structure: {
              texture: 'Microlithique (cristaux fins)',
              phenocristaux: 'Quelques gros cristaux visibles',
              microlites: 'Cristaux microscopiques',
              verre: 'Matrice vitreuse (refroidissement très rapide)'
            },
            composition: {
              plagioclases: '50% (feldspaths calciques)',
              pyroxenes: '25-40% (minéraux ferro-magnésiens)',
              olivine: '10-25% (vert)',
              magnetite: '2-3% (oxyde fer)'
            },
            origine: {
              source: 'Fusion partielle du manteau (péridotite)',
              remontee: 'Magma basaltique remonte',
              eruption: 'Éruption volcanique',
              refroidissement: 'Rapide en surface → texture fine',
              silice: 'Pauvre en silice (45-52% SiO₂)'
            },
            comparaison_granite_basalte: {
              similitudes: {
                nature: 'Roches magmatiques',
                origine: 'Refroidissement magma'
              },
              differences: {
                refroidissement: 'Granite: lent (profondeur). Basalte: rapide (surface)',
                texture: 'Granite: grenue (gros cristaux). Basalte: fine (petits cristaux)',
                couleur: 'Granite: clair. Basalte: sombre',
                silice: 'Granite: riche (>65%). Basalte: pauvre (45-52%)'
              }
            },
            utilisations: {
              construction: 'Pavés, bordures',
              granulats: 'Routes, béton',
              amendement: 'Sol agricole (riche minéraux)',
              laine_roche: 'Isolation thermique'
            },
            mauritanianContext: [
              'Volcanisme ancien mauritanien',
              'Basalte en construction',
              'Amendement sols pauvres',
              'Géologie régionale'
            ]
          },
          exercises: [
            {
              type: 'texture',
              question: 'Pourquoi le basalte a une texture fine?',
              answer: 'Refroidissement rapide en surface (pas le temps gros cristaux)',
              difficulty: 'intermediate'
            },
            {
              type: 'composition',
              question: 'Quel est le principal minéral du basalte?',
              answer: 'Plagioclases (50%)',
              difficulty: 'beginner'
            },
            {
              type: 'comparaison',
              question: 'Granite et basalte: même composition?',
              answer: 'Non. Même origine (magma) mais compositions différentes',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch4-s4',
          title: 'Roches métamorphiques',
          description: 'Comprendre le métamorphisme',
          concepts: ['Métamorphisme', 'Gneiss', 'Marbre', 'Ardoise', 'Transformation'],
          objectives: [
            'Définir le métamorphisme',
            'Distinguer les types de métamorphisme',
            'Identifier les roches métamorphiques',
            'Connaître les gisements mauritaniens'
          ],
          content: {
            definition: 'Transformation de roches par chaleur et/ou pression sans fusion',
            conditions: {
              temperature: '200-800°C (sans fusion)',
              pression: 'Élevée (enfouissement, tectonique)',
              fluides: 'Circulation eau, gaz (catalyseur)'
            },
            types_metamorphisme: {
              regional: {
                cause: 'Collision plaques, enfouissement profond',
                echelle: 'Grande échelle (chaînes montagneuses)',
                exemple: 'Mauritanides',
                roches: 'Gneiss, schistes, marbres'
              },
              contact: {
                cause: 'Chaleur magma proche',
                echelle: 'Locale (autour intrusion)',
                zone: 'Auréole métamorphique',
                roches: 'Cornéennes, marbres'
              }
            },
            roches_metamorphiques: {
              gneiss: {
                roche_origine: 'Granite ou schistes',
                structure: 'Feuilletée rubanée (lits clairs/sombres)',
                mineraux: 'Quartz, feldspaths, micas',
                origine: 'Métamorphisme régional intense'
              },
              marbre: {
                roche_origine: 'Calcaire',
                structure: 'Cristalline, massive',
                composition: 'Calcite recristallisée',
                utilisation: 'Sculpture, décoration'
              },
              ardoise: {
                roche_origine: 'Argile, schiste',
                structure: 'Feuilletée (plans de schistosité)',
                propriete: 'Se débite en plaques minces',
                utilisation: 'Toitures, tableaux'
              },
              quartzite: {
                roche_origine: 'Grès',
                composition: 'Quartz recristallisé',
                propriete: 'Très dur, compact',
                utilisation: 'Construction'
              }
            },
            mauritanides: {
              definition: 'Chaîne montagneuse mauritanienne (érodée)',
              age: '300-600 millions d\'années',
              roches: 'Gneiss, schistes, quartzites',
              metamorphisme: 'Régional intense (collision continentale)'
            },
            mauritanianContext: [
              'Mauritanides (chaîne métamorphique)',
              'Gneiss Dorsale Rgueibat',
              'Ressources minérales',
              'Histoire géologique'
            ]
          },
          exercises: [
            {
              type: 'definition',
              question: 'Qu\'est-ce que le métamorphisme?',
              answer: 'Transformation roche par chaleur et pression sans fusion',
              difficulty: 'beginner'
            },
            {
              type: 'transformation',
              question: 'Quelle roche devient marbre par métamorphisme?',
              answer: 'Le calcaire',
              difficulty: 'intermediate'
            },
            {
              type: 'mauritanie',
              question: 'Où trouve-t-on des roches métamorphiques en Mauritanie?',
              answer: 'Mauritanides (chaîne ancienne), Dorsale Rgueibat',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch4-s5',
          title: 'Applications et identification',
          description: 'Identifier et utiliser les roches',
          concepts: ['Identification', 'Critères', 'Utilisations', 'Ressources'],
          objectives: [
            'Identifier les roches par leurs caractéristiques',
            'Connaître les critères d\'identification',
            'Comprendre les utilisations',
            'Valoriser les ressources mauritaniennes'
          ],
          content: {
            criteres_identification: {
              texture: {
                grenue: 'Cristaux visibles (granite)',
                fine: 'Cristaux microscopiques (basalte)',
                vitreuse: 'Aspect verre (obsidienne)',
                feuilletee: 'Plans parallèles (gneiss, ardoise)'
              },
              couleur: {
                claire: 'Riche en silice (granite, quartzite)',
                sombre: 'Pauvre en silice (basalte, gabbro)',
                rubanee: 'Alternance (gneiss)'
              },
              durete: {
                test_ongle: 'Raye à l\'ongle (argile, talc)',
                test_verre: 'Raye le verre (quartz, granite)',
                test_acide: 'Effervescence HCl (calcaire, marbre)'
              },
              densite: 'Poids relatif (léger/lourd)'
            },
            tableau_identification: {
              granite: 'Grenue, claire, 3 minéraux visibles, dur',
              basalte: 'Fine, sombre, dense, magnétique',
              gneiss: 'Feuilletée rubanée, claire/sombre, dur',
              marbre: 'Cristalline, claire, effervescence HCl',
              ardoise: 'Feuilletée, grise/noire, plaques minces'
            },
            utilisations: {
              construction: {
                granite: 'Fondations, pavés, monuments',
                basalte: 'Granulats, bordures',
                marbre: 'Revêtement, décoration',
                ardoise: 'Toitures, tableaux'
              },
              industrie: {
                quartz: 'Verre, électronique',
                feldspaths: 'Céramique, porcelaine',
                micas: 'Isolation électrique',
                calcaire: 'Ciment, chaux'
              },
              agriculture: {
                basalte: 'Amendement (minéraux)',
                phosphates: 'Engrais'
              }
            },
            ressources_mauritanie: {
              granite_akjoujt: 'Construction nationale',
              gneiss_rgueibat: 'Granulats, ornement',
              phosphates_bofal: 'Engrais (projet)',
              fer_zouerate: 'Minerai (hématite dans quartzite)',
              cuivre_akjoujt: 'Mine historique'
            },
            economie: {
              emplois: 'Extraction, transformation',
              exportation: 'Minerai de fer (principale)',
              construction: 'Matériaux locaux',
              developpement: 'Ressources nationales'
            },
            mauritanianContext: [
              'Richesse minérale mauritanienne',
              'Mines Akjoujt, Zouérate',
              'Construction locale',
              'Économie minière'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Comment reconnaître le granite?',
              answer: 'Texture grenue, 3 minéraux visibles (quartz, feldspath, mica)',
              difficulty: 'beginner'
            },
            {
              type: 'test',
              question: 'Quel test pour identifier le marbre?',
              answer: 'HCl → effervescence (calcite)',
              difficulty: 'intermediate'
            },
            {
              type: 'ressources',
              question: 'Cite 2 ressources minérales mauritaniennes',
              answer: 'Fer (Zouérate), Granite (Akjoujt)',
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
      title: 'ÉCOLOGIE ET CYCLES BIOGÉOCHIMIQUES',
      sections: [
        {
          id: 'ch5-s1',
          title: 'Chaînes alimentaires et réseaux trophiques',
          description: 'Comprendre les relations alimentaires',
          concepts: ['Chaîne alimentaire', 'Producteurs', 'Consommateurs', 'Décomposeurs'],
          objectives: [
            'Définir une chaîne alimentaire',
            'Identifier les niveaux trophiques',
            'Construire des chaînes alimentaires',
            'Comprendre les réseaux trophiques'
          ],
          content: {
            definition: 'Suite d\'êtres vivants se nourrissant les uns des autres',
            niveaux_trophiques: {
              producteurs: {
                definition: 'Organismes produisant matière organique',
                processus: 'Photosynthèse (lumière → glucose)',
                exemples: 'Végétaux verts (herbes, arbres, algues)',
                equation: '6CO₂ + 6H₂O + lumière → C₆H₁₂O₆ + 6O₂',
                role: 'Base de toute chaîne alimentaire'
              },
              consommateurs_primaires: {
                definition: 'Herbivores mangeant végétaux',
                exemples: 'Sauterelle, vache, chameau, gazelle',
                regime: 'Phytophages'
              },
              consommateurs_secondaires: {
                definition: 'Carnivores mangeant herbivores',
                exemples: 'Lézard, serpent, renard',
                regime: 'Zoophages'
              },
              consommateurs_tertiaires: {
                definition: 'Super-prédateurs',
                exemples: 'Aigle, lion (en Mauritanie: chacal)',
                position: 'Sommet chaîne'
              },
              decomposeurs: {
                definition: 'Décomposent matière organique morte',
                exemples: 'Bactéries, champignons',
                role: 'Recyclage nutriments'
              }
            },
            exemple_chaine: {
              sahelienne: 'Herbe → Criquet → Lézard → Serpent → Aigle',
              nombre_maillons: '5 niveaux',
              energie: 'Diminue à chaque niveau'
            },
            reseau_trophique: {
              definition: 'Ensemble chaînes alimentaires interconnectées',
              complexite: 'Un organisme peut avoir plusieurs prédateurs/proies',
              stabilite: 'Plus complexe = plus stable'
            },
            pyramides_ecologiques: {
              pyramide_nombres: 'Nombre individus par niveau',
              pyramide_biomasse: 'Masse vivante par niveau',
              pyramide_energie: 'Énergie disponible par niveau',
              forme: 'Toujours décroissante (base large, sommet étroit)'
            },
            mauritanianContext: [
              'Écosystème sahélien',
              'Chaînes désertiques',
              'Faune mauritanienne',
              'Pastoralisme'
            ]
          },
          exercises: [
            {
              type: 'identification',
              question: 'Quel est le rôle des producteurs?',
              answer: 'Produire matière organique par photosynthèse',
              difficulty: 'beginner'
            },
            {
              type: 'chaine',
              question: 'Construis une chaîne: herbe, serpent, lézard, criquet',
              answer: 'Herbe → Criquet → Lézard → Serpent',
              difficulty: 'intermediate'
            },
            {
              type: 'niveau',
              question: 'Le chameau est quel type de consommateur?',
              answer: 'Consommateur primaire (herbivore)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 35
        },
        {
          id: 'ch5-s2',
          title: 'Productivité et rendement énergétique',
          description: 'Calculer la productivité des écosystèmes',
          concepts: ['Productivité', 'Biomasse', 'Rendement', 'Énergie'],
          objectives: [
            'Définir productivité primaire et secondaire',
            'Calculer les rendements énergétiques',
            'Comprendre les pertes d\'énergie',
            'Appliquer à l\'agriculture'
          ],
          content: {
            productivite_primaire: {
              PPB: {
                nom: 'Production Primaire Brute',
                definition: 'Totalité matière produite par photosynthèse',
                unite: 'g/m²/an ou kcal/m²/an'
              },
              PPN: {
                nom: 'Production Primaire Nette',
                definition: 'PPB - Respiration végétale',
                formule: 'PPN = PPB - R',
                disponibilite: 'Énergie disponible pour herbivores'
              }
            },
            productivite_secondaire: {
              definition: 'Production consommateurs',
              calcul: 'Biomasse produite par herbivores, carnivores',
              dependance: 'Dépend de PPN'
            },
            rendement_energetique: {
              principe: 'Énergie transférée entre niveaux',
              loi_10_pourcent: {
                regle: 'Seulement 10% énergie transférée au niveau suivant',
                pertes: '90% perdus (respiration, chaleur, excrétion)'
              },
              exemple_chiffre: {
                producteurs: '1000 kcal',
                herbivores: '100 kcal (10%)',
                carnivores1: '10 kcal (1%)',
                carnivores2: '1 kcal (0,1%)'
              }
            },
            causes_pertes: {
              respiration: '50% énergie (production ATP)',
              non_assimilation: '30% (excréments)',
              chaleur: '10% (thermorégulation)',
              transfere: 'Seulement 10% incorporé dans biomasse'
            },
            application_agriculture: {
              alimentation_vegetale: {
                rendement: '10% (direct)',
                exemple: '1000 kcal végétaux → 10 kcal humain',
                avantage: 'Plus efficace'
              },
              alimentation_carnee: {
                rendement: '1% (indirect)',
                exemple: '1000 kcal végétaux → 100 kcal bœuf → 10 kcal humain',
                cout: 'Nécessite 10× plus végétaux'
              },
              implication: 'Alimentation végétale nourrit plus de personnes'
            },
            mauritanianContext: [
              'Agriculture sahélienne',
              'Élevage (rendement faible)',
              'Sécurité alimentaire',
              'Gestion ressources'
            ]
          },
          exercises: [
            {
              type: 'calcul',
              question: 'Si 1000 kcal végétaux, combien pour herbivores?',
              answer: '100 kcal (10% de 1000)',
              difficulty: 'intermediate'
            },
            {
              type: 'rendement',
              question: 'Pourquoi alimentation végétale plus efficace?',
              answer: 'Rendement 10% (direct) vs 1% (via viande)',
              difficulty: 'intermediate'
            },
            {
              type: 'perte',
              question: 'Où vont les 90% d\'énergie perdus?',
              answer: 'Respiration (50%), excréments (30%), chaleur (10%)',
              difficulty: 'advanced'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch5-s3',
          title: 'Cycle du carbone',
          description: 'Comprendre le cycle biogéochimique du carbone',
          concepts: ['Carbone', 'CO₂', 'Photosynthèse', 'Respiration', 'Combustion'],
          objectives: [
            'Décrire le cycle du carbone',
            'Identifier les réservoirs de carbone',
            'Comprendre les flux de carbone',
            'Analyser l\'impact humain'
          ],
          content: {
            reservoirs_carbone: {
              atmosphere: 'CO₂ gazeux (750 Gt C)',
              biosphere: 'Matière vivante (végétaux, animaux)',
              sols: 'Matière organique, humus',
              oceans: 'CO₂ dissous, carbonates (38 000 Gt C)',
              roches: 'Calcaire, combustibles fossiles'
            },
            flux_carbone: {
              photosynthese: {
                processus: 'CO₂ + H₂O + lumière → glucose + O₂',
                equation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
                flux: '100 Gt C/an (terre)',
                role: 'Fixation CO₂ atmosphérique'
              },
              respiration: {
                processus: 'Glucose + O₂ → CO₂ + H₂O + énergie',
                equation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
                flux: '100 Gt C/an (organismes)',
                role: 'Libération CO₂'
              },
              decomposition: {
                agents: 'Bactéries, champignons',
                processus: 'Matière organique → CO₂',
                lieu: 'Sols'
              },
              combustion_fossiles: {
                processus: 'Pétrole, charbon, gaz → CO₂',
                flux: '5 Gt C/an (activités humaines)',
                impact: 'Augmentation CO₂ atmosphérique'
              },
              dissolution_oceanique: {
                processus: 'CO₂ atmosphère ⇌ CO₂ océan',
                puits: 'Océans absorbent 2 Gt C/an',
                equilibre: 'Régulation naturelle'
              }
            },
            equilibre_naturel: {
              avant_industrialisation: 'Photosynthèse ≈ Respiration',
              resultat: 'CO₂ atmosphérique stable'
            },
            desequilibre_actuel: {
              causes: [
                'Combustion fossiles (+5 Gt/an)',
                'Déforestation (moins photosynthèse)',
                'Agriculture intensive'
              ],
              consequence: 'Augmentation CO₂ (280 ppm → 420 ppm)',
              effet: 'Réchauffement climatique'
            },
            mauritanianContext: [
              'Déforestation (bois de cuisson)',
              'Émissions CO₂ faibles',
              'Désertification (moins végétation)',
              'Puits carbone océan Atlantique'
            ]
          },
          exercises: [
            {
              type: 'equation',
              question: 'Écris l\'équation de la photosynthèse',
              answer: '6CO₂ + 6H₂O + lumière → C₆H₁₂O₆ + 6O₂',
              difficulty: 'intermediate'
            },
            {
              type: 'flux',
              question: 'Quel processus fixe le CO₂ atmosphérique?',
              answer: 'La photosynthèse (par les végétaux)',
              difficulty: 'beginner'
            },
            {
              type: 'impact',
              question: 'Pourquoi déforestation augmente CO₂?',
              answer: 'Moins de photosynthèse donc moins de fixation CO₂',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch5-s4',
          title: 'Cycle de l\'azote',
          description: 'Comprendre le cycle de l\'azote',
          concepts: ['Azote', 'Fixation', 'Nitrification', 'Dénitrification', 'Symbiose'],
          objectives: [
            'Décrire le cycle de l\'azote',
            'Comprendre la fixation biologique',
            'Identifier les bactéries impliquées',
            'Connaître l\'importance pour agriculture'
          ],
          content: {
            importance_azote: {
              role: 'Élément essentiel protéines, ADN',
              atmosphere: '78% N₂ gazeux (non utilisable directement)',
              probleme: 'Plantes ne peuvent pas utiliser N₂ gazeux'
            },
            etapes_cycle: {
              fixation: {
                definition: 'N₂ atmosphérique → NH₃ (ammoniaque)',
                agents: {
                  rhizobium: {
                    type: 'Bactéries symbiotiques',
                    localisation: 'Nodosités racines légumineuses',
                    plantes: 'Arachide, niébé, acacia',
                    importance: 'Agriculture mauritanienne'
                  },
                  azotobacter: 'Bactéries libres du sol'
                },
                reaction: 'N₂ + H → NH₃ (processus enzymatique)'
              },
              nitrification: {
                definition: 'NH₄⁺ → NO₂⁻ → NO₃⁻',
                etape1: {
                  bacteries: 'Nitrosomonas',
                  reaction: 'NH₄⁺ → NO₂⁻ (nitrites)'
                },
                etape2: {
                  bacteries: 'Nitrobacter',
                  reaction: 'NO₂⁻ → NO₃⁻ (nitrates)'
                },
                resultat: 'Nitrates assimilables par plantes'
              },
              assimilation: {
                processus: 'Plantes absorbent NO₃⁻',
                synthese: 'NO₃⁻ → protéines végétales',
                chaine: 'Plantes → animaux (protéines)'
              },
              ammonification: {
                definition: 'Matière organique → NH₄⁺',
                agents: 'Bactéries décomposeurs',
                processus: 'Décomposition protéines → ammoniaque'
              },
              denitrification: {
                definition: 'NO₃⁻ → N₂ gazeux',
                agents: 'Bactéries anaérobies',
                condition: 'Sols gorgés d\'eau',
                role: 'Retour N₂ à atmosphère'
              }
            },
            applications_agricoles: {
              culture_legumineuses: {
                avantage: 'Fixation azote (engrais naturel)',
                exemples: 'Arachide, niébé, acacia',
                pratique: 'Rotation cultures'
              },
              engrais_azotes: {
                synthese: 'Industrielle (procédé Haber)',
                utilisation: 'Agriculture intensive',
                probleme: 'Pollution nitrates'
              }
            },
            mauritanianContext: [
              'Légumineuses sahéliennes (acacia)',
              'Agriculture arachide, niébé',
              'Fixation azote naturelle',
              'Rotation cultures traditionnelle'
            ]
          },
          exercises: [
            {
              type: 'fixation',
              question: 'Quelle bactérie fixe l\'azote dans les nodosités?',
              answer: 'Rhizobium (sur racines légumineuses)',
              difficulty: 'intermediate'
            },
            {
              type: 'nitrification',
              question: 'Quelle est la forme d\'azote assimilable par plantes?',
              answer: 'Nitrates (NO₃⁻)',
              difficulty: 'beginner'
            },
            {
              type: 'agriculture',
              question: 'Pourquoi cultiver arachide enrichit le sol?',
              answer: 'Rhizobium dans nodosités fixe azote atmosphérique',
              difficulty: 'intermediate'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        },
        {
          id: 'ch5-s5',
          title: 'Impact humain et gestion écosystèmes',
          description: 'Analyser l\'impact humain sur les cycles',
          concepts: ['Impact', 'Pollution', 'Gestion durable', 'Conservation'],
          objectives: [
            'Identifier les impacts humains',
            'Analyser les déséquilibres',
            'Proposer des solutions durables',
            'Appliquer au contexte mauritanien'
          ],
          content: {
            impacts_negatifs: {
              sur_cycle_carbone: {
                combustibles_fossiles: 'Augmentation CO₂ (+5 Gt/an)',
                deforestation: 'Moins de fixation (Mauritanie: bois cuisson)',
                consequence: 'Réchauffement climatique (+1,5°C Mauritanie)'
              },
              sur_cycle_azote: {
                engrais_excessifs: 'Pollution nitrates eaux',
                agriculture_intensive: 'Eutrophisation',
                elevage_intensif: 'Ammoniaque air'
              },
              sur_ecosystemes: {
                surpaturage: 'Dégradation sols sahéliens',
                desertification: '150 000 km² perdus (1974-2004)',
                braconnage: 'Disparition faune (oryx, addax)',
                pollution: 'Déchets plastiques, pesticides'
              }
            },
            solutions_durables: {
              agriculture: {
                rotation_cultures: 'Légumineuses fixent azote',
                compostage: 'Recyclage matière organique',
                agroforesterie: 'Arbres + cultures (acacias)',
                irrigation_raisonnee: 'Économie eau'
              },
              energie: {
                solaire: 'Potentiel important Mauritanie',
                eolien: 'Côte atlantique',
                reduction_bois: 'Foyers améliorés (moins consommation)'
              },
              conservation: {
                aires_protegees: 'Parcs nationaux (Banc d\'Arguin)',
                reforestation: 'Grande muraille verte',
                lutte_desertification: 'Fixation dunes, plantation',
                education: 'Sensibilisation écologique'
              }
            },
            projets_mauritaniens: {
              grande_muraille_verte: {
                objectif: 'Barrière verte contre désertification',
                especes: 'Acacias résistants',
                benefices: 'Fixation azote + carbone, emplois'
              },
              parc_banc_arguin: {
                importance: 'Patrimoine mondial UNESCO',
                biodiversite: 'Oiseaux migrateurs, mammifères marins',
                protection: 'Réserve stricte'
              },
              energie_solaire: {
                potentiel: 'Ensoleillement exceptionnel',
                projets: 'Centrales photovoltaïques',
                avenir: 'Transition énergétique'
              }
            },
            gestion_durable: {
              principe: 'Utiliser sans compromettre générations futures',
              exemples: 'Pêche durable, pastoralisme raisonné',
              objectifs_developpement: 'ODD (climat, biodiversité, faim zéro)'
            },
            mauritanianContext: [
              'Lutte désertification',
              'Grande muraille verte',
              'Conservation Banc d\'Arguin',
              'Développement durable sahélien'
            ]
          },
          exercises: [
            {
              type: 'impact',
              question: 'Cite 2 impacts négatifs humains sur environnement',
              answer: 'Déforestation (↓ CO₂ fixation), Surpâturage (désertification)',
              difficulty: 'intermediate'
            },
            {
              type: 'solution',
              question: 'Pourquoi rotation avec légumineuses est bénéfique?',
              answer: 'Fixation azote naturelle → enrichit sol sans engrais chimiques',
              difficulty: 'intermediate'
            },
            {
              type: 'mauritanie',
              question: 'Quel grand projet écologique mauritanien?',
              answer: 'Grande muraille verte (lutte désertification)',
              difficulty: 'beginner'
            }
          ],
          difficulty: 'intermediate',
          estimatedTime: 40
        }
      ]
    }
  ]
};

export default YEAR4_SCIENCE_CURRICULUM;

