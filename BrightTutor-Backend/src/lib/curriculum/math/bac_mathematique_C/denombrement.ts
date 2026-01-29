import type { CurriculumSection } from '../../curriculum-loader';

export const BAC_C_DENOMBREMENT: CurriculumSection = {
          id: 'bac-2023-ex7'
          ,
          title: 'Exercice 7 - Dénombrement (3 points)'
          ,
          description: 'Combinatoire: arrangements, permutations, combinaisons, principe multiplicatif, principe additif, factorielle, nombre de parties d\'un ensemble.',
          concepts: [
            'Arrangements'
            ,
            'Permutations'
            ,
            'Combinaisons'
            ,
            'Principe multiplicatif'
            ,
            'Principe additif'
            ,
            'Factorielle'
            ,
            'Nombre de parties'
            ,
            'Coefficient binomial'
          ],
          objectives: [
            'Calculer le nombre d\'arrangements'
            ,
            'Calculer le nombre de permutations'
            ,
            'Calculer le nombre de combinaisons'
            ,
            'Utiliser le principe multiplicatif'
            ,
            'Utiliser le principe additif'
            ,
            'Calculer avec les factorielles'
            ,
            'Calculer des coefficients binomiaux'
          ],
          content: {
            enonce_complet: `Dans une classe de 30 élèves, on veut former:
1. Un bureau de 3 élèves (président, secrétaire, trésorier). Combien de bureaux peut-on former? (0.75pt)
2. Une délégation de 3 élèves sans rôles spécifiques. Combien de délégations peut-on former? (0.75pt)
3. Un comité de 5 élèves dont exactement 2 filles. Sachant qu'il y a 18 filles dans la classe, combien de comités peut-on former? (1.5pt)`,
            methodes_enseignement:
              `L'AI doit:
1. Faire distinguer arrangement et combinaison
2. Expliquer quand l'ordre compte ou non
3. Guider dans l'application des formules`
          },
          // ⚠️ NOTE IMPORTANTE: Les questions sont maintenant générées DYNAMIQUEMENT par l'AI
          // Le tableau "exercises" ci-dessous est conservé pour référence historique uniquement
          // Les questions réelles sont créées à partir des concepts/objectifs ci-dessus
          // L'AI génère des VARIANTES créatives à chaque fois, en conservant les mêmes concepts
          // Les parties restent DÉPENDANTES les unes des autres (chaque partie utilise les résultats des précédentes)
          exercises: [
            // -------------------------------------------------------------------------
            // PARTIE 1a - ARRANGEMENTS - DÉFINITION ET PRINCIPE (Sous-notion: Arrangements)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 1a) Définir ce qu'est un arrangement et identifier le type de problème**
Un bureau de 3 élèves avec rôles spécifiques (président, secrétaire, trésorier).
Classe de 30 élèves.
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 1a (0.25 point)**

**DÉFINITION D'UN ARRANGEMENT:**
Un arrangement de p éléments parmi n est une sélection ordonnée de p éléments distincts parmi n.

**CARACTÉRISTIQUES:**
- L'ordre compte (président ≠ secrétaire ≠ trésorier)
- Les éléments sont distincts (pas de répétition)
- On choisit p éléments parmi n

**ANALYSE DU PROBLÈME:**
Dans ce cas:
- n = 30 (nombre total d'élèves)
- p = 3 (nombre de postes)
- L'ordre compte car les rôles sont différents

**CONCLUSION:**
C'est un **arrangement** de 3 éléments parmi 30, noté A_30^3.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 1b - CALCUL D'UN ARRANGEMENT (Sous-notion: Calcul)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 1b) Calculer le nombre de bureaux possibles**
Utiliser la formule des arrangements ou le principe multiplicatif.
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 1b (0.5 point)**

**MÉTHODE 1: Formule des arrangements**
A_30^3 = 30!/(30-3)! = 30!/27! = 30 × 29 × 28

**CALCUL:**
A_30^3 = 30 × 29 × 28
= 30 × 812
= **24360**

**MÉTHODE 2: Principe multiplicatif**
- Choix du président: 30 possibilités
- Choix du secrétaire: 29 possibilités (déjà choisi 1)
- Choix du trésorier: 28 possibilités (déjà choisi 2)
Total: 30 × 29 × 28 = **24360**

**RÉPONSE FINALE:**
On peut former **24360** bureaux différents.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 2a - COMBINAISONS - DÉFINITION ET PRINCIPE (Sous-notion: Combinaisons)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 2a) Définir ce qu'est une combinaison et identifier le type de problème**
Une délégation de 3 élèves sans rôles spécifiques.
Classe de 30 élèves.
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 2a (0.25 point)**

**DÉFINITION D'UNE COMBINAISON:**
Une combinaison de p éléments parmi n est une sélection non ordonnée de p éléments distincts parmi n.

**CARACTÉRISTIQUES:**
- L'ordre ne compte pas (pas de rôles spécifiques)
- Les éléments sont distincts (pas de répétition)
- On choisit p éléments parmi n

**ANALYSE DU PROBLÈME:**
Dans ce cas:
- n = 30 (nombre total d'élèves)
- p = 3 (nombre d'élèves dans la délégation)
- L'ordre ne compte pas

**CONCLUSION:**
C'est une **combinaison** de 3 éléments parmi 30, notée C_30^3.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 2b - CALCUL D'UNE COMBINAISON (Sous-notion: Calcul)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 2b) Calculer le nombre de délégations possibles**
Utiliser la formule des combinaisons.
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 2b (0.25 point)**

**FORMULE DES COMBINAISONS:**
C_30^3 = 30!/(3! × (30-3)!) = 30!/(3! × 27!)

**CALCUL:**
C_30^3 = (30 × 29 × 28)/(3 × 2 × 1)
= (24360)/6
= **4060**

**EXPLICATION:**
On divise le nombre d'arrangements (24360) par le nombre de permutations des 3 élèves choisis (3! = 6), car l'ordre ne compte pas.

**RÉPONSE FINALE:**
On peut former **4060** délégations différentes.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 2c - COMPARAISON ARRANGEMENTS/COMBINAISONS (Sous-notion: Comparaison)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 2c) Comparer les résultats des parties 1b et 2b**
Pourquoi y a-t-il plus de bureaux que de délégations?
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 2c (0.25 point)**

**COMPARAISON:**
- Bureaux (arrangements): 24360
- Délégations (combinaisons): 4060

**OBSERVATION:** 24360 = 4060 × 6

**EXPLICATION:**
Pour chaque délégation de 3 élèves, on peut former 3! = 6 bureaux différents en attribuant les rôles de différentes manières.

**RELATION:**
A_30^3 = C_30^3 × 3!

**CONCLUSION:**
Il y a plus de bureaux que de délégations car l'ordre compte pour les bureaux (les rôles sont différents).
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3a - PROBLÈME AVEC CONTRAINTES - ANALYSE (Sous-notion: Analyse)
            // -------------------------------------------------------------------------
            {
              type: 'demonstration',
              question: `**Partie 3a) Analyser le problème du comité avec contraintes**
Un comité de 5 élèves dont exactement 2 filles.
Classe de 30 élèves dont 18 filles (donc 12 garçons).
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 3a (0.375 point)**

**ANALYSE DU PROBLÈME:**

**DONNÉES:**
- Total: 30 élèves
- Filles: 18
- Garçons: 12
- Comité: 5 élèves
- Contrainte: exactement 2 filles

**IMPLICATION:**
Si le comité contient exactement 2 filles, alors il contient:
5 - 2 = **3 garçons**

**STRUCTURE DU CHOIX:**
Le choix se fait en deux étapes:
1. Choisir 2 filles parmi 18 (combinaison)
2. Choisir 3 garçons parmi 12 (combinaison)

**PRINCIPE MULTIPLICATIF:**
Le nombre total de comités = (nombre de façons de choisir 2 filles) × (nombre de façons de choisir 3 garçons)
`
              ,
              difficulty: 'Moyen',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3b - CHOIX DES FILLES (Sous-notion: Combinaisons)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 3b) Calculer le nombre de façons de choisir 2 filles parmi 18**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 3b (0.375 point)**

**CALCUL:**
C_18^2 = 18!/(2! × (18-2)!) = 18!/(2! × 16!)

**CALCUL DIRECT:**
C_18^2 = (18 × 17)/(2 × 1)
= 306/2
= **153**

**RÉPONSE FINALE:**
Il y a **153** façons de choisir 2 filles parmi 18.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3c - CHOIX DES GARÇONS (Sous-notion: Combinaisons)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 3c) Calculer le nombre de façons de choisir 3 garçons parmi 12**
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 3c (0.375 point)**

**CALCUL:**
C_12^3 = 12!/(3! × (12-3)!) = 12!/(3! × 9!)

**CALCUL DIRECT:**
C_12^3 = (12 × 11 × 10)/(3 × 2 × 1)
= 1320/6
= **220**

**RÉPONSE FINALE:**
Il y a **220** façons de choisir 3 garçons parmi 12.
`
              ,
              difficulty: 'Facile',
            },
            // -------------------------------------------------------------------------
            // PARTIE 3d - CALCUL FINAL DU NOMBRE DE COMITÉS (Sous-notion: Principe multiplicatif)
            // -------------------------------------------------------------------------
            {
              type: 'calcul',
              question: `**Partie 3d) Calculer le nombre total de comités possibles**
Utiliser le principe multiplicatif avec les résultats des parties 3b et 3c.
`
              ,
              answer: `**SOLUTION COMPLÈTE - Partie 3d (0.375 point)**

**PRINCIPE MULTIPLICATIF:**
Le nombre total de comités = (nombre de façons de choisir 2 filles) × (nombre de façons de choisir 3 garçons)

**CALCUL:**
D'après les parties 3b et 3c:
- Nombre de façons de choisir 2 filles: 153
- Nombre de façons de choisir 3 garçons: 220

Total = 153 × 220
= 153 × (200 + 20)
= 153 × 200 + 153 × 20
= 30600 + 3060
= **33660**

**VÉRIFICATION:**
153 × 220 = **33660**

**RÉPONSE FINALE:**
On peut former **33660** comités de 5 élèves contenant exactement 2 filles.
`
              ,
              difficulty: 'Moyen',
            }
          ],
          difficulty: 'Moyen',
          estimatedTime: 20
        }
