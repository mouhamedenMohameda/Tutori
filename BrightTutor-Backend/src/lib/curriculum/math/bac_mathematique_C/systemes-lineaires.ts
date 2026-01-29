import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_SYSTEMES_LINEAIRES: CurriculumSection = {
  id: 'bac-2023-systemes-lineaires',
  title: 'Systèmes linéaires',
  description: 'Systèmes linéaires complets: vocabulaire, définition, systèmes équivalents, opérations élémentaires, théorème d\'équivalence, résolution triangulaire, méthode de Gauss, diagnostic des solutions, méthodes courtes, applications type bac, checklists. 11 modules progressifs.',
  concepts: [
    'Système linéaire',
    'Équation linéaire',
    'Nombre d\'équations n',
    'Nombre d\'inconnues p',
    'Système carré (n = p)',
    'Coefficients diagonaux',
    'Système triangulaire supérieur',
    'Solution d\'un système',
    'p-uplet solution',
    'Systèmes équivalents',
    'Opérations élémentaires sur les lignes',
    'Échange de lignes',
    'Multiplication d\'une ligne',
    'Combinaison linéaire de lignes',
    'Pivot',
    'Méthode de Gauss',
    'Forme triangulaire',
    'Forme échelonnée',
    'Substitution',
    'Rang d\'un système',
    'Variables libres',
    'Solution unique',
    'Infinité de solutions',
    'Aucune solution',
    'Méthode de substitution',
    'Méthode de combinaison',
    'Polynôme de degré 3',
    'Coplanarité de vecteurs',
    'Problèmes paramétrés'
  ],
  objectives: [
    'Maîtriser le vocabulaire des systèmes linéaires (n équations, p inconnues, système carré, triangulaire)',
    'Comprendre la notion de systèmes équivalents',
    'Maîtriser les opérations élémentaires sur les lignes (codage obligatoire)',
    'Appliquer le théorème d\'équivalence par opérations élémentaires',
    'Résoudre un système triangulaire par substitution',
    'Appliquer la méthode de Gauss pour transformer en système triangulaire',
    'Diagnostiquer le nombre de solutions (unique / infini / aucune)',
    'Utiliser les méthodes courtes (substitution et combinaison)',
    'Résoudre des applications type bac (polynômes, coplanarité, paramètres)',
    'Appliquer les checklists "Méthodes type bac"'
  ],
  content: {
    enonce_complet: `**EXERCICE TYPE BAC - SYSTÈMES LINÉAIRES COMPLETS**

On considère plusieurs systèmes linéaires et problèmes d'application.

**PARTIE I - VOCABULAIRE ET DÉFINITIONS (Modules 0-2)**
1. Définir les termes: système linéaire, n équations, p inconnues, système carré, triangulaire, solution.
2. Comprendre la notion de systèmes équivalents et pourquoi on transforme un système.

**PARTIE II - OPÉRATIONS ÉLÉMENTAIRES (Modules 3-4)**
3. Maîtriser les opérations élémentaires sur les lignes (codage obligatoire).
4. Appliquer le théorème d'équivalence par opérations élémentaires.

**PARTIE III - RÉSOLUTION (Modules 5-6)**
5. Résoudre un système triangulaire par substitution.
6. Appliquer la méthode de Gauss pour transformer en système triangulaire.

**PARTIE IV - DIAGNOSTIC ET MÉTHODES COURTES (Modules 7-8)**
7. Diagnostiquer le nombre de solutions (unique / infini / aucune).
8. Utiliser les méthodes courtes (substitution et combinaison).

**PARTIE V - APPLICATIONS ET CHECKLISTS (Modules 9-10)**
9. Résoudre des applications type bac (polynômes, coplanarité, paramètres).
10. Appliquer les checklists "Méthodes type bac".`,
    methodes_enseignement:
      `L'AI doit:
1. Progresser module par module de manière séquentielle
2. Utiliser les résultats des parties précédentes
3. Vérifier la compréhension avant de passer au module suivant
4. Adapter la difficulté selon le niveau de l'étudiant
5. Insister sur les recettes et automatismes attendus au bac
6. Faire pratiquer le codage des opérations élémentaires`,
    modules: {
      module_0: {
        titre: 'Vocabulaire et objectifs',
        objectif: 'Fixer le langage avant de résoudre',
        contenu: {
          notions: [
            'Qu\'est-ce qu\'un système linéaire',
            'Pourquoi on le "réduit"',
            'Lien avec matrices (niveau bac: priorité à la méthode)'
          ],
          illustration: 'Exemples simples pour illustrer chaque notion'
        }
      },
      module_1: {
        titre: 'Définition d\'un système linéaire (S)',
        notion: 'Structure et vocabulaire d\'un système linéaire',
        contenu: {
          a_couvrir: [
            'n équations, p inconnues',
            'Système à n lignes et p colonnes',
            'Système carré (n = p)',
            'Coefficients diagonaux a₁₁, a₂₂, …',
            'Triangulaire supérieur: aᵢⱼ = 0 pour i > j'
          ],
          definition_solution: 'Définition d\'une solution: p-uplet (x₁, …, xₚ)',
          resoudre: 'Résoudre = déterminer S (ensemble des solutions)',
          illustration: 'Exemples de systèmes avec différentes structures'
        }
      },
      module_2: {
        titre: 'Systèmes équivalents',
        notion: 'Systèmes ayant le même ensemble de solutions',
        contenu: {
          definition: 'Définition: même ensemble de solutions',
          pourquoi_transformer: 'Pourquoi on transforme un système: simplifier sans changer S',
          exemples: [
            'Exemple simple d\'équivalence',
            'Exemple de non-équivalence'
          ],
          illustration: 'Comparaison de systèmes équivalents et non équivalents'
        }
      },
      module_3: {
        titre: 'Opérations élémentaires sur les lignes (codage obligatoire)',
        notion: 'Les trois opérations élémentaires qui conservent l\'ensemble des solutions',
        contenu: {
          notation: 'Notation: Lᵢ la i-ème ligne',
          operations: [
            'Lᵢ ↔ Lⱼ (échange de lignes)',
            'Lᵢ ← αLᵢ avec α ≠ 0 (multiplication d\'une ligne)',
            'Lᵢ ← Lᵢ + λLⱼ (combinaison linéaire de lignes)'
          ],
          explication: 'Explication: pourquoi elles conservent l\'ensemble des solutions',
          piege: [
            'Multiplier par 0 interdit',
            'Erreurs de signe',
            'Oublier d\'appliquer sur le second membre'
          ]
        }
      },
      module_4: {
        titre: 'Théorème d\'équivalence par opérations élémentaires',
        notion: 'Garantie que les opérations élémentaires préservent l\'équivalence',
        contenu: {
          enonce: 'Énoncé clair: appliquer une opération élémentaire donne un système équivalent',
          consequences: [
            'On peut viser une forme triangulaire',
            'On peut viser une forme échelonnée'
          ],
          contre_exemple: [
            'Opérations non autorisées',
            'Exemple: Lᵢ ← Lᵢ + λLᵢ ok, mais "supprimer une ligne" sans justification non'
          ],
          illustration: 'Démonstration de l\'équivalence'
        }
      },
      module_5: {
        titre: 'Résolution d\'un système triangulaire (substitution)',
        notion: 'Méthode de remontée depuis la dernière équation',
        contenu: {
          cas_triangulaire: 'Cas triangulaire supérieur: on remonte de la dernière équation vers la première',
          identifier: [
            'Équation impossible (0 = 1) ⇒ S = ∅',
            'Équation 0 = 0 ⇒ variable libre ⇒ solutions infinies'
          ],
          exemples: '2 exemples corrigés (dont un avec paramètre)',
          piege: 'Oublier de vérifier la cohérence des équations'
        }
      },
      module_6: {
        titre: 'Méthode de Gauss (le cœur)',
        notion: 'Transformation en système triangulaire supérieur équivalent',
        contenu: {
          idee: 'Transformer (S) en système triangulaire supérieur équivalent',
          etapes: [
            'Choisir un pivot non nul en colonne 1 (échange de lignes si besoin)',
            'Éliminer x₁ des lignes du dessous par Lᵢ ← Lᵢ + λL₁',
            'Recommencer sur la sous-matrice (colonne 2, etc.)',
            'Substitution finale'
          ],
          notions_cles: [
            'Notion de pivot',
            'Lignes nulles',
            'Variables libres'
          ],
          astuce: 'Éviter les fractions (pivot = 1 ou pivot "simple")',
          exemples: '2 exemples corrigés complets (dont un 4×4 comme dans la page)'
        }
      },
      module_7: {
        titre: 'Diagnostiquer le nombre de solutions (unique / infini / aucune)',
        notion: 'Analyse de la forme échelonnée pour déterminer le nombre de solutions',
        contenu: {
          a_partir_forme_echelonnee: [
            'Ligne (0 0 … 0 ∣ c) avec c ≠ 0 ⇒ impossible',
            'rang < nombre d\'inconnues ⇒ variables libres ⇒ infinité',
            'rang = nombre d\'inconnues ⇒ unique'
          ],
          piege: [
            'Confondre nombre d\'équations et nombre d\'inconnues',
            'Oublier que "carré" n\'implique pas "unique"'
          ],
          illustration: 'Exemples pour chaque cas'
        }
      },
      module_8: {
        titre: 'Méthodes courtes: substitution et combinaison',
        notion: 'Méthodes alternatives pour systèmes simples',
        contenu: {
          quand_utiliser: 'Quand les utiliser: systèmes petits, structure évidente',
          methode_combinaison: 'Méthode de combinaison: créer des éliminations "à la main"',
          exemples: [
            '2 exemples corrigés',
            'Type "poser S = x + y + z + t"',
            'Combinaisons ingénieuses'
          ],
          illustration: 'Comparaison avec la méthode de Gauss'
        }
      },
      module_9: {
        titre: 'Applications "type bac"',
        notion: 'Problèmes concrets utilisant les systèmes linéaires',
        contenu: {
          a_inclure_obligatoirement: [
            'Polynôme de degré 3 à partir de valeurs P(1), P(2), P(4)…: poser P(x) = ax³ + bx² + cx + d ⇒ système en a, b, c, d',
            'Coplanarité de vecteurs: w = xu + yv ⇒ système sur les coordonnées',
            'Problèmes paramétrés (solution selon m, ou existence selon k)'
          ],
          avec_corriges: 'Tous les exemples doivent être corrigés',
          illustration: 'Applications concrètes du programme'
        }
      },
      module_10: {
        titre: 'Feuille "Méthodes type bac" (checklists)',
        notion: 'Checklists pour éviter les erreurs et garantir la méthode',
        contenu: {
          checklist_gauss: 'Checklist Gauss propre (écriture des opérations)',
          checklist_diagnostic: 'Checklist "diagnostic des solutions"',
          checklist_parametrage: [
            'Choisir variables libres',
            'Exprimer les autres',
            'Écrire S'
          ],
          checklist_eviter_erreurs: [
            'Signe',
            'Second membre',
            'Pivot nul',
            'Simplifications'
          ],
          objectif: 'Fournir une méthode rapide et efficace pour résoudre un système'
        }
      }
    }
  },
  // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
  // Le tableau "exercises" est VIDE - l'IA génère les questions à partir du template ci-dessus
  // Template utilisé par l'IA:
  // - concepts: liste des 29 concepts de systèmes linéaires
  // - objectives: liste des 10 objectifs pédagogiques
  // - content.modules: 11 modules détaillés (module_0 à module_10) avec titre, notion, contenu
  // - content.enonce_complet: énoncé type Bac (référence pour l'IA)
  // - content.methodes_enseignement: instructions pour l'IA
  // L'IA génère des VARIANTES créatives à chaque ouverture, en conservant les mêmes concepts
  // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
  // Chaque partie (1-11) correspond à un module (module_0 à module_10)
  exercises: [],
  difficulty: 'Moyen',
  estimatedTime: 30
};
