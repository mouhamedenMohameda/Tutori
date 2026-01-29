import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_TRANSFORMATIONS: CurriculumSection = {
  id: 'bac-2023-ex2',
  title: 'Exercice 2 - Transformations géométriques (4 points)',
  description: 'Transformations du plan complètes: vocabulaire, isométries (4 formes), symétrie glissante, déplacements, antidéplacements, forme complexe, isométrie vectorielle, rotations vectorielles, similitudes directes, forme complexe, similitudes à centre, méthodes de reconnaissance. 13 modules progressifs.',
  concepts: [
    'Transformation du plan',
    'Image d\'un point',
    'Point invariant',
    'Ensemble invariant',
    'Réciproque',
    'Composée',
    'Réduction',
    'Isométrie (conservation des distances)',
    'Déplacement (conservation des angles orientés)',
    'Antidéplacement (inversion des angles orientés)',
    'Translation',
    'Rotation',
    'Réflexion (symétrie axiale)',
    'Symétrie glissante',
    'Forme complexe d\'un déplacement',
    'Isométrie vectorielle associée',
    'Rotation vectorielle',
    'Similitude directe',
    'Rapport de similitude',
    'Angle de similitude',
    'Forme complexe d\'une similitude',
    'Similitude à centre',
    'Méthodes de reconnaissance'
  ],
  objectives: [
    'Maîtriser le vocabulaire des transformations (invariant, réciproque, composée)',
    'Identifier et caractériser une isométrie',
    'Distinguer les 4 formes d\'isométries (translation, rotation, réflexion, symétrie glissante)',
    'Caractériser une symétrie glissante (axe et vecteur)',
    'Identifier et caractériser un déplacement (translation ou rotation)',
    'Identifier et caractériser un antidéplacement (réflexion ou symétrie glissante)',
    'Utiliser la forme complexe d\'un déplacement',
    'Déterminer l\'isométrie vectorielle associée',
    'Appliquer les rotations vectorielles aux figures type bac',
    'Reconnaître et caractériser une similitude directe',
    'Utiliser la forme complexe d\'une similitude',
    'Caractériser une similitude à centre',
    'Appliquer les méthodes de reconnaissance en exercices'
  ],
  content: {
    enonce_complet: `**EXERCICE TYPE BAC - TRANSFORMATIONS GÉOMÉTRIQUES COMPLÈTES**

On considère un triangle ABC et plusieurs transformations du plan.

**PARTIE I - VOCABULAIRE ET ISOMÉTRIES (Modules 0-3)**
1. Définir les termes: transformation, point invariant, ensemble invariant, réciproque, composée.
2. Caractériser une isométrie et ses propriétés.
3. Identifier les 4 formes d'isométries possibles.
4. Caractériser une symétrie glissante (axe et vecteur).

**PARTIE II - DÉPLACEMENTS ET ANTIDÉPLACEMENTS (Modules 4-5)**
5. Identifier et caractériser un déplacement (translation ou rotation).
6. Identifier et caractériser un antidéplacement (réflexion ou symétrie glissante).

**PARTIE III - FORME COMPLEXE ET ISOMÉTRIE VECTORIELLE (Modules 6-8)**
7. Utiliser la forme complexe d'un déplacement.
8. Déterminer l'isométrie vectorielle associée.
9. Appliquer les rotations vectorielles aux figures type bac.

**PARTIE IV - SIMILITUDES (Modules 9-12)**
10. Reconnaître et caractériser une similitude directe.
11. Utiliser la forme complexe d'une similitude.
12. Caractériser une similitude à centre.
13. Appliquer les méthodes de reconnaissance en exercices.`,
    methodes_enseignement:
      `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté selon le niveau de l'étudiant
5. Fournir des méthodes de reconnaissance rapides (checklist en 30 secondes)`,
    modules: {
      module_0: {
        titre: 'Vocabulaire minimal',
        objectif: 'Fixer le langage avant d\'étudier les transformations',
        contenu: {
          notions: [
            'Transformation du plan',
            'Image d\'un point',
            'Point invariant',
            'Ensemble invariant',
            'Réciproque',
            'Composée',
            'Réduction'
          ],
          importance: 'Pourquoi "invariant" est une information forte, et quand ça force une forme',
          illustration: 'Exemples simples: translation, rotation, réflexion'
        }
      },
      module_1: {
        titre: 'Isométrie dans le plan',
        notion: 'Transformation qui conserve les distances',
        contenu: {
          definition: 'Définition: transformation qui conserve les distances',
          proprietes_cles: [
            'id est une isométrie',
            'Inverse d\'une isométrie = isométrie',
            'Composée de deux isométries = isométrie',
            'Conservation de l\'aire, du produit scalaire, des cercles (même rayon)'
          ],
          faits_structurants_points_invariants: [
            'Si A est invariant et M\' = f(M), alors A appartient à la médiatrice de [MM\']',
            'Si A et B invariants distincts, alors toute la droite (AB) est invariante',
            '3 points invariants non alignés ⇒ f = id'
          ],
          piege: 'Confondre "droite invariante" et "tous les points invariants"'
        }
      },
      module_2: {
        titre: 'Les 4 formes d\'isométries',
        notion: 'Classification complète des isométries',
        contenu: {
          resultat: 'Toute isométrie est exactement l\'une des suivantes: translation, rotation, réflexion (symétrie axiale), symétrie glissante',
          tests_rapides: [
            'Existence d\'un point invariant ? Si non, penser translation ou symétrie glissante',
            'Orientation conservée ? Si oui, déplacement. Si non, antidéplacement'
          ],
          piege: 'Oublier la symétrie glissante dans la classification'
        }
      },
      module_3: {
        titre: 'Symétrie glissante',
        notion: 'Composée d\'une réflexion et d\'une translation',
        contenu: {
          caracteristiques: 'Un vecteur non nul u⃗ et un axe Δ dirigé par u⃗',
          forme_reduite: 'f = S_Δ ∘ t_u⃗ = t_u⃗ ∘ S_Δ',
          proprietes_utiles: [
            'C\'est une isométrie',
            'Elle n\'a aucun point invariant',
            'Si f(M) = M\', alors le milieu de [MM\'] appartient à Δ',
            'Inverse: même axe Δ, vecteur -u⃗',
            'Composition: si f est symétrie glissante de vecteur u⃗, alors f∘f = t_2u⃗'
          ],
          piege: 'Oublier que u⃗ ≠ 0, confondre axe de réflexion et direction de translation'
        }
      },
      module_4: {
        titre: 'Déplacements',
        notion: 'Isométrie qui conserve les angles orientés',
        contenu: {
          definition: 'Définition: isométrie qui conserve les angles orientés',
          resultat: 'Tout déplacement est soit une translation, soit une rotation',
          outil_identification: [
            'Si A ↦ A\', B ↦ B\' par un déplacement f, alors:',
            'AB = A\'B\'',
            '(AB; A\'B\') = α, angle du déplacement, avec α = 0 si translation',
            'Unicité: si A ≠ B et on impose A ↦ A\', B ↦ B\' avec AB = A\'B\', il existe un déplacement unique'
          ],
          forme_complexe: 'Forme complexe (annoncée ici, détaillée au module 6)'
        }
      },
      module_5: {
        titre: 'Antidéplacements',
        notion: 'Isométrie qui transforme les angles orientés en leurs opposés',
        contenu: {
          definition: 'Définition: isométrie qui transforme les angles orientés en leurs opposés',
          resultat: 'Tout antidéplacement est soit une réflexion, soit une symétrie glissante',
          regles_composition: [
            'anti ∘ anti = déplacement',
            'déplacement ∘ anti = anti'
          ],
          unicite: 'Même logique que pour les déplacements, mais l\'orientation bascule',
          piege: 'Croire que "ça conserve les longueurs" suffit pour conclure, non, il faut l\'orientation'
        }
      },
      module_6: {
        titre: 'Forme complexe d\'un déplacement',
        notion: 'Écriture dans le plan complexe',
        contenu: {
          forme: 'z\' = e^(iα) z + b, α ∈ ℝ, b ∈ ℂ',
          cas_particuliers: [
            'α = 0: translation',
            'α ≠ 0: rotation (centre obtenu via le point fixe)'
          ],
          methode: 'Réécrire z\' - ω = e^(iα)(z - ω) si possible, pour extraire centre ω'
        }
      },
      module_7: {
        titre: 'Isométrie vectorielle associée',
        notion: 'Application linéaire associée à une isométrie',
        contenu: {
          definition: 'On fixe A ↦ A\'. Pour M ↦ M\', on définit φ(AM⃗) = A\'M\'⃗',
          proprietes: [
            'Linéarité: φ(u+v) = φ(u) + φ(v), φ(λu) = λφ(u)',
            'Produit scalaire conservé: φ(u) · φ(v) = u · v',
            'Déterminant: si f est un déplacement, det(φ(u), φ(v)) = det(u, v)',
            'sinon, det(φ(u), φ(v)) = -det(u, v)'
          ],
          cas_importants: [
            'Translation ⇒ φ = id (identité vectorielle)',
            'Réflexion d\'axe Δ: si u dirige Δ, φ(u) = u; si u ⊥ Δ, φ(u) = -u',
            'Rotation: φ est la rotation vectorielle d\'angle α'
          ]
        }
      },
      module_8: {
        titre: 'Rotations vectorielles, figures "type bac"',
        notion: 'Application aux triangles remarquables',
        contenu: {
          applications: [
            'φ rotation d\'angle π/2: application sur triangle isocèle rectangle direct',
            'φ rotation d\'angle π/3: application sur triangle équilatéral direct'
          ],
          piege: 'Sens direct, signe de l\'angle, confusion entre angle géométrique et angle orienté'
        }
      },
      module_9: {
        titre: 'Similitude directe',
        notion: 'Transformation qui multiplie les distances et conserve les angles orientés',
        contenu: {
          definition: 'Transformation qui multiplie les distances par k > 0 et conserve les angles orientés',
          parametres: 'k: rapport, α: angle',
          proprietes: [
            'Inverse: rapport 1/k, angle -α',
            'Composition: rapport kk\', angle α + α\'',
            'Image d\'un cercle de rayon R: cercle de rayon kR',
            'Aire multipliée par k²'
          ],
          table_reconnaissance: [
            'k = 1: déplacement',
            'k = 1, α = 0: translation',
            'k = 1, α ≠ 0: rotation',
            'k = 1, α = π: symétrie centrale',
            'k ≠ 1, α = 0: homothétie de rapport k',
            'k ≠ 1, α = π: homothétie de rapport -k'
          ],
          invariants: 'Parallélisme, orthogonalité, barycentre, milieu, alignement, angles, contact'
        }
      },
      module_10: {
        titre: 'Forme complexe d\'une similitude',
        notion: 'Écriture dans le plan complexe',
        contenu: {
          forme: 'z\' = az + b, a ∈ ℂ*, b ∈ ℂ',
          parametres: [
            'Rapport k = |a|',
            'Angle α = arg(a)'
          ],
          cas_particuliers: [
            'Si a = 1: translation de vecteur d\'affixe b',
            'Si a ≠ 1: centre unique ω = b/(1-a) et z\' - ω = a(z - ω) = ke^(iα)(z - ω)'
          ],
          piege: 'Oublier que a ≠ 0, mal lire arg(a), se tromper sur le centre'
        }
      },
      module_11: {
        titre: 'Similitudes à centre',
        notion: 'Similitude avec un centre fixe',
        contenu: {
          notation: 'S_Ω;k;α',
          definition: 'ΩM\'/ΩM = k et (ΩM; ΩM\') = α',
          forme_reduite: 'S_Ω;k;α = R_Ω;α ∘ H_Ω;k = H_Ω;k ∘ R_Ω;α',
          propriete: 'Même centre ⇒ les similitudes commutent et les paramètres se composent simplement',
          cas_important: 'Cas "centre A envoyant B sur C": rapport AC/AB, angle (AB; AC)'
        }
      },
      module_12: {
        titre: 'Méthodes de reconnaissance en exercices',
        notion: 'Checklist exploitable en 30 secondes',
        contenu: {
          checklist: [
            'Est-ce une isométrie ou une similitude ? tester conservation des longueurs',
            'Orientation conservée ou inversée ? angle orienté',
            'Points invariants ? combien, alignés ou non',
            'Droite invariante ? cercle image ?',
            'Si écriture complexe: identifier a et b, puis centre, rapport, angle',
            'Si figure: raisonner par milieux, médiatrices, parallélisme, triangles isométriques'
          ],
          objectif: 'Fournir une méthode rapide et efficace pour identifier une transformation'
        }
      }
    }
  },
  // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
  // Le tableau "exercises" est VIDE - l'IA génère les questions à partir du template ci-dessus
  // Template utilisé par l'IA:
  // - concepts: liste des 23 concepts de transformations
  // - objectives: liste des 13 objectifs pédagogiques
  // - content.modules: 13 modules détaillés (module_0 à module_12) avec titre, notion, contenu
  // - content.enonce_complet: énoncé type Bac (référence pour l'IA)
  // - content.methodes_enseignement: instructions pour l'IA
  // L'IA génère des VARIANTES créatives à chaque ouverture, en conservant les mêmes concepts
  // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
  // Chaque partie (1-13) correspond à un module (module_0 à module_12)
  exercises: [],
  difficulty: 'Difficile',
  estimatedTime: 30
};
