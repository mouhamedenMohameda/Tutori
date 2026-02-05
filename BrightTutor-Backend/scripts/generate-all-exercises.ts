/**
 * Script pour générer des exercices de haute qualité pour tous les chapitres du BAC C
 * Ce script lit le curriculum, génère des exercices structurés et les sauvegarde dans la base de données
 * 
 * Usage: npx ts-node scripts/generate-all-exercises.ts
 */

import 'dotenv/config'
import { v4 as uuidv4 } from 'uuid'
import { getDataSource } from '../src/config/data-source'
import { StoredBacExercise } from '../src/entities/StoredBacExercise'
import { StoredBacExercisePart } from '../src/entities/StoredBacExercisePart'

// Définition des chapitres du curriculum BAC C avec leurs exercices
const CHAPTERS = [
  {
    id: 'bac-2023-ex11',
    chapterId: 'bac-2023-ex11',
    title: 'Exercice 11 - Arithmétique (3 points)',
    description: 'Équations diophantiennes, PGCD, congruences, petit théorème de Fermat',
    concepts: ['Équation diophantienne', 'Solution particulière', 'Ensemble des solutions', 'Congruence modulo', 'Petit théorème de Fermat', 'PGCD', 'Théorème de Gauss'],
    objectives: ['Justifier qu\'un couple est solution', 'Déterminer l\'ensemble des solutions', 'Utiliser les propriétés de congruence', 'Appliquer le petit théorème de Fermat'],
    exercises: [
      // Exercice Variante 1 - Niveau Moyen
      {
        title: 'Arithmétique - Variante 1 (Équation 35x - 7y = 28)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Vérifier que le couple (1, 1) est solution de l\'équation (E): 35x - 7y = 28.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** En utilisant la solution particulière trouvée, déterminer l\'ensemble des solutions entières de (E). Utiliser le théorème de Gauss.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Montrer que si (x, y) est solution de (E), alors x est congru à 1 modulo 7.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit p un nombre premier différent de 5 et 7. En utilisant le petit théorème de Fermat, montrer que p^6 ≡ 1 [35].', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** En déduire que 35 divise p^12 - 1 pour tout nombre premier p ≠ 5 et p ≠ 7.', type: 'demonstration', difficulty: 'Difficile' },
        ]
      },
      // Exercice Variante 2 - Niveau Difficile
      {
        title: 'Arithmétique - Variante 2 (Équation 91x - 13y = 156)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Calculer PGCD(91, 13) et en déduire si l\'équation 91x - 13y = 156 admet des solutions entières.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Trouver une solution particulière de l\'équation (E): 91x - 13y = 156.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Déterminer l\'ensemble des solutions entières de (E).', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Montrer que pour tout entier n ≥ 1, on a: 7^n ≡ (-6)^n [13].', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Sachant que 7 est d\'ordre 12 modulo 13, déterminer le plus petit entier n ≥ 1 tel que 7^n ≡ 1 [13].', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Montrer que l\'équation 91x^12 - 13y^12 = 156 n\'admet pas de solution entière non triviale.', type: 'demonstration', difficulty: 'Très difficile' },
        ]
      },
      // Exercice Variante 3 - Niveau Très Difficile
      {
        title: 'Arithmétique - Variante 3 (Équation 143x + 11y = 2024)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Décomposer 143 en produit de facteurs premiers et calculer PGCD(143, 11).', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Justifier que l\'équation (E): 143x + 11y = 2024 admet des solutions entières et en trouver une.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Déterminer l\'ensemble S des couples (x, y) ∈ ℤ² solutions de (E).', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-1d', question: '**Partie 1d)** Trouver les solutions (x, y) de (E) vérifiant 0 ≤ x ≤ 20.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Montrer que pour tout entier a premier avec 11, on a a^10 ≡ 1 [11] (Petit théorème de Fermat).', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Montrer que pour tout entier a premier avec 13, on a a^12 ≡ 1 [13].', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** En utilisant les parties précédentes, montrer que l\'équation 143x^60 + 11y^60 = 2024 n\'a pas de solution dans ℤ² avec PGCD(x, 143) = PGCD(y, 11) = 1.', type: 'demonstration', difficulty: 'Très difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-systemes-lineaires',
    chapterId: 'bac-2023-systemes-lineaires',
    title: 'Systèmes linéaires',
    description: 'Résolution par méthode de Gauss, pivot, systèmes équivalents, diagnostic des solutions',
    concepts: ['Système linéaire', 'Pivot de Gauss', 'Opérations élémentaires', 'Forme échelonnée', 'Variables libres', 'Solution unique', 'Infinité de solutions'],
    objectives: ['Maîtriser les opérations élémentaires', 'Appliquer la méthode de Gauss', 'Diagnostiquer le nombre de solutions', 'Résoudre des systèmes paramétrés'],
    exercises: [
      // Exercice Variante 1
      {
        title: 'Systèmes linéaires - Variante 1 (Système 3x3)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Résoudre le système (S): { x + 2y - z = 3 ; 2x - y + 3z = 7 ; 3x + y + 2z = 10 } en utilisant la méthode de Gauss. Coder chaque opération élémentaire.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Vérifier la solution trouvée en la substituant dans chaque équation du système initial.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit le système paramétré (S_m): { x + my + z = 1 ; mx + y + mz = m ; x + y + mz = 1 }. Déterminer les valeurs de m pour lesquelles (S_m) admet une solution unique.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Pour m = 1, résoudre le système (S_1) et interpréter géométriquement.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Pour les valeurs de m donnant une infinité de solutions, exprimer l\'ensemble des solutions en fonction d\'un paramètre réel t.', type: 'demonstration', difficulty: 'Très difficile' },
        ]
      },
      // Exercice Variante 2
      {
        title: 'Systèmes linéaires - Variante 2 (Application géométrique)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit P(x) = ax³ + bx² + cx + d un polynôme tel que P(0) = 1, P(1) = 4, P(-1) = 2, P(2) = 17. Écrire le système linéaire vérifié par a, b, c, d.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Résoudre ce système par la méthode de Gauss pour déterminer les coefficients a, b, c, d.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Vérifier le résultat en calculant P(0), P(1), P(-1) et P(2) avec les valeurs trouvées.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-2a', question: '**Partie 2a)** Les vecteurs u⃗(1, 2, -1), v⃗(2, -1, 3) et w⃗(1, 5, -4) sont-ils coplanaires? Écrire le système associé.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Résoudre le système pour conclure sur la coplanarité.', type: 'demonstration', difficulty: 'Difficile' },
        ]
      },
      // Exercice Variante 3
      {
        title: 'Systèmes linéaires - Variante 3 (Discussion paramétrique complète)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit le système (S_a): { ax + y + z = 1 ; x + ay + z = a ; x + y + az = a² }. Pour a = 2, résoudre le système.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer le déterminant du système en fonction de a. Factoriser l\'expression obtenue.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Pour quelles valeurs de a le système admet-il une solution unique? Exprimer cette solution en fonction de a.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-1d', question: '**Partie 1d)** Pour a = 1, discuter le système: existe-t-il des solutions? Si oui, les déterminer.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-1e', question: '**Partie 1e)** Pour a = -2, discuter le système: existe-t-il des solutions? Si oui, les déterminer.', type: 'demonstration', difficulty: 'Très difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-limites-derivees-primitives',
    chapterId: 'bac-2023-limites-derivees-primitives',
    title: 'Limites, Dérivées et Primitives',
    description: 'Calcul de limites, dérivées de fonctions composées, primitives usuelles et par parties',
    concepts: ['Limite en un point', 'Limite à l\'infini', 'Forme indéterminée', 'Dérivée', 'Dérivée composée', 'Primitive', 'Intégration par parties'],
    objectives: ['Lever les formes indéterminées', 'Calculer des dérivées composées', 'Trouver des primitives', 'Utiliser l\'intégration par parties'],
    exercises: [
      {
        title: 'Limites et Dérivées - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Calculer lim(x→+∞) (√(x² + 3x) - x). Indication: factoriser par √x².', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer lim(x→0) (sin(3x) - 3sin(x))/x³. Utiliser les développements limités.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-1c', question: '**Partie 1c)** Calculer lim(x→+∞) x²·e^(-x). Justifier par les croissances comparées.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit f(x) = ln(√(1 + x²)). Calculer f\'(x) et simplifier.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Soit g(x) = e^(sin²(x)). Calculer g\'(x).', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-3a', question: '**Partie 3a)** Trouver une primitive de f(x) = x·e^(2x) par intégration par parties.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-3b', question: '**Partie 3b)** Trouver une primitive de g(x) = ln(x)/x² pour x > 0.', type: 'calcul', difficulty: 'Très difficile' },
        ]
      },
      {
        title: 'Limites et Dérivées - Variante 2',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Calculer lim(x→1) (x^n - 1)/(x - 1) pour n entier naturel ≥ 1. Reconnaître la dérivée.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer lim(x→0⁺) x·ln(x). Utiliser le changement de variable t = 1/x.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-1c', question: '**Partie 1c)** Calculer lim(x→+∞) (1 + 1/x)^x. Reconnaître la limite définissant e.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit h(x) = arctan(e^x). Calculer h\'(x) et déterminer le domaine.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Soit k(x) = x^x pour x > 0. Écrire k(x) sous forme exponentielle puis calculer k\'(x).', type: 'calcul', difficulty: 'Très difficile' },
          { partId: 'part-3a', question: '**Partie 3a)** Calculer ∫x²·cos(x)dx par intégrations par parties successives.', type: 'calcul', difficulty: 'Très difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-etude-fonction',
    chapterId: 'bac-2023-etude-fonction',
    title: 'Étude de fonctions',
    description: 'Étude complète: domaine, parité, limites, dérivée, variations, asymptotes, courbe',
    concepts: ['Domaine de définition', 'Parité', 'Périodicité', 'Limites aux bornes', 'Asymptotes', 'Dérivée', 'Tableau de variations', 'Points remarquables', 'Concavité'],
    objectives: ['Déterminer le domaine de définition', 'Étudier les limites aux bornes', 'Trouver les asymptotes', 'Dresser le tableau de variations', 'Tracer la courbe'],
    exercises: [
      {
        title: 'Étude de fonction - Variante 1 (Fonction rationnelle)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit f(x) = (x² - 1)/(x² + 1). Déterminer le domaine de définition de f.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Étudier la parité de f.', type: 'demonstration', difficulty: 'Facile' },
          { partId: 'part-1c', question: '**Partie 1c)** Calculer les limites de f en +∞ et -∞. En déduire l\'existence d\'une asymptote horizontale.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Calculer f\'(x) et étudier son signe.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Dresser le tableau de variations de f. Préciser les extremums.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-3a', question: '**Partie 3a)** Étudier la position de la courbe par rapport à l\'asymptote horizontale.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-3b', question: '**Partie 3b)** Tracer la courbe représentative de f dans un repère orthonormé.', type: 'graphique', difficulty: 'Moyen' },
        ]
      },
      {
        title: 'Étude de fonction - Variante 2 (Fonction avec exponentielle)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit g(x) = x·e^(-x). Déterminer le domaine de définition et calculer les limites aux bornes.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Montrer que la droite y = 0 est asymptote à la courbe en +∞. Étudier la position relative.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2a', question: '**Partie 2a)** Calculer g\'(x) et résoudre g\'(x) = 0.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Dresser le tableau de variations complet de g.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-2c', question: '**Partie 2c)** Calculer g\'\'(x) et étudier la concavité de la courbe. Trouver le point d\'inflexion.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-3a', question: '**Partie 3a)** Déterminer l\'équation de la tangente à la courbe au point d\'abscisse 0.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-3b', question: '**Partie 3b)** Tracer la courbe représentative de g avec ses éléments caractéristiques.', type: 'graphique', difficulty: 'Moyen' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-logarithmes',
    chapterId: 'bac-2023-logarithmes',
    title: 'Logarithmes et Exponentielles',
    description: 'Propriétés de ln et exp, calculs de limites, dérivées et primitives avec ln/exp',
    concepts: ['Logarithme népérien', 'Fonction exponentielle', 'Propriétés algébriques', 'Limites usuelles', 'Croissances comparées', 'Équations avec ln/exp'],
    objectives: ['Maîtriser les propriétés de ln et exp', 'Calculer des limites avec ln/exp', 'Résoudre des équations', 'Étudier des fonctions avec ln/exp'],
    exercises: [
      {
        title: 'Logarithmes et Exponentielles - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Résoudre dans ℝ l\'équation ln(x + 1) + ln(x - 1) = ln(8). Attention au domaine!', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Résoudre dans ℝ l\'inéquation ln(2x - 1) ≤ 1.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Résoudre e^(2x) - 5e^x + 6 = 0. Poser X = e^x.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Calculer lim(x→0⁺) x²·ln(x). Justifier par les croissances comparées.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Calculer lim(x→+∞) (ln(x))²/x.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-3a', question: '**Partie 3a)** Soit f(x) = (ln(x))²/x pour x > 0. Étudier les variations de f.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-3b', question: '**Partie 3b)** Dresser le tableau de variations de f et tracer son allure.', type: 'demonstration', difficulty: 'Difficile' },
        ]
      },
      {
        title: 'Logarithmes et Exponentielles - Variante 2',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Simplifier A = ln(e²) + ln(1/e³) - 2ln(√e).', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Montrer que pour tout x > 0: ln(x) ≤ x - 1. Étudier la fonction h(x) = x - 1 - ln(x).', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2a', question: '**Partie 2a)** Calculer lim(x→+∞) e^x/(x³ + 1). Justifier.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Calculer lim(x→-∞) x²·e^x. Utiliser le changement X = -x.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-3a', question: '**Partie 3a)** Soit g(x) = e^x - x - 1. Montrer que g(x) ≥ 0 pour tout x ∈ ℝ.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-3b', question: '**Partie 3b)** En déduire que pour tout x ∈ ℝ: e^x ≥ 1 + x.', type: 'demonstration', difficulty: 'Moyen' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-suites',
    chapterId: 'bac-2023-suites',
    title: 'Suites numériques',
    description: 'Suites arithmétiques, géométriques, récurrentes, convergence et limites',
    concepts: ['Suite arithmétique', 'Suite géométrique', 'Suite récurrente', 'Monotonie', 'Convergence', 'Limite', 'Somme partielle', 'Suite majorée/minorée'],
    objectives: ['Étudier la monotonie d\'une suite', 'Calculer les termes d\'une suite récurrente', 'Démontrer la convergence', 'Calculer des sommes'],
    exercises: [
      {
        title: 'Suites numériques - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit (uₙ) définie par u₀ = 2 et uₙ₊₁ = (3uₙ + 1)/(uₙ + 3). Calculer u₁, u₂ et u₃.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Montrer par récurrence que pour tout n ∈ ℕ: 0 < uₙ < 1 pour n ≥ 1.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-1c', question: '**Partie 1c)** Étudier le signe de uₙ₊₁ - uₙ et en déduire la monotonie de (uₙ) à partir du rang 1.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit vₙ = (uₙ - 1)/(uₙ + 1). Montrer que (vₙ) est une suite géométrique.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Exprimer vₙ puis uₙ en fonction de n.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2c', question: '**Partie 2c)** Calculer lim(n→+∞) uₙ.', type: 'calcul', difficulty: 'Moyen' },
        ]
      },
      {
        title: 'Suites numériques - Variante 2',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit (uₙ) définie par u₀ = 1 et uₙ₊₁ = √(1 + uₙ). Montrer que pour tout n: 0 < uₙ < 2.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Montrer que (uₙ) est croissante.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** En déduire que (uₙ) converge et calculer sa limite ℓ.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit vₙ = uₙ - ℓ. Montrer que |vₙ₊₁| ≤ (1/2)|vₙ|.', type: 'demonstration', difficulty: 'Très difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** En déduire que |uₙ - ℓ| ≤ (1/2)ⁿ|u₀ - ℓ|.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Déterminer le plus petit entier n tel que |uₙ - ℓ| < 10⁻⁶.', type: 'calcul', difficulty: 'Difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-calcul-integral',
    chapterId: 'bac-2023-calcul-integral',
    title: 'Calcul intégral',
    description: 'Intégrales définies, primitives, intégration par parties et par changement de variable, applications',
    concepts: ['Intégrale définie', 'Primitive', 'Intégration par parties', 'Changement de variable', 'Aire sous une courbe', 'Valeur moyenne'],
    objectives: ['Calculer des intégrales', 'Appliquer l\'intégration par parties', 'Effectuer des changements de variable', 'Calculer des aires'],
    exercises: [
      {
        title: 'Calcul intégral - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Calculer I = ∫₀¹ x·e^x dx par intégration par parties.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer J = ∫₀¹ x²·e^x dx en effectuant deux intégrations par parties.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-1c', question: '**Partie 1c)** Pour n ∈ ℕ, on pose Iₙ = ∫₀¹ xⁿ·e^x dx. Établir une relation de récurrence entre Iₙ₊₁ et Iₙ.', type: 'demonstration', difficulty: 'Très difficile' },
          { partId: 'part-2a', question: '**Partie 2a)** Calculer K = ∫₁ᵉ ln(x) dx.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Calculer L = ∫₁ᵉ (ln(x))² dx par intégration par parties.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-3a', question: '**Partie 3a)** Calculer l\'aire délimitée par la courbe de f(x) = e^(-x), l\'axe des abscisses et les droites x = 0 et x = 1.', type: 'calcul', difficulty: 'Moyen' },
        ]
      },
      {
        title: 'Calcul intégral - Variante 2 (Changement de variable)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Calculer ∫₀^(π/2) sin³(x)·cos(x) dx en posant u = sin(x).', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer ∫₁² 1/(x·(1 + ln(x))) dx en posant u = 1 + ln(x).', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-1c', question: '**Partie 1c)** Calculer ∫₀¹ x/√(1 + x²) dx en posant u = 1 + x².', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit Iₙ = ∫₀^(π/2) sinⁿ(x) dx. Établir la formule de récurrence: Iₙ = ((n-1)/n)·Iₙ₋₂ pour n ≥ 2.', type: 'demonstration', difficulty: 'Très difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Calculer I₄ = ∫₀^(π/2) sin⁴(x) dx en utilisant la formule de récurrence.', type: 'calcul', difficulty: 'Difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-equations-differentielles',
    chapterId: 'bac-2023-equations-differentielles',
    title: 'Équations différentielles',
    description: 'Équations différentielles du premier et second ordre, problèmes de Cauchy',
    concepts: ['Équation différentielle', 'Solution générale', 'Solution particulière', 'Condition initiale', 'Équation homogène', 'Second membre'],
    objectives: ['Résoudre des équations du premier ordre', 'Résoudre des équations du second ordre', 'Trouver la solution vérifiant une condition initiale'],
    exercises: [
      {
        title: 'Équations différentielles - Variante 1 (Premier ordre)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Résoudre l\'équation différentielle (E): y\' + 2y = 0.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Résoudre l\'équation (E₁): y\' + 2y = 4. Trouver d\'abord une solution particulière constante.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Déterminer la solution de (E₁) vérifiant y(0) = 3.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Résoudre (E₂): y\' + 2y = e^(-x). Chercher une solution particulière de la forme y_p = ae^(-x).', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Résoudre (E₃): y\' - y = x + 1. Chercher une solution particulière de la forme y_p = ax + b.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Déterminer la solution de (E₃) vérifiant y(0) = 0.', type: 'calcul', difficulty: 'Moyen' },
        ]
      },
      {
        title: 'Équations différentielles - Variante 2 (Second ordre)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Résoudre l\'équation caractéristique de (E): y\'\' - 5y\' + 6y = 0.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Écrire la solution générale de (E).', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Déterminer la solution vérifiant y(0) = 1 et y\'(0) = 4.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Résoudre (E₁): y\'\' + 4y = 0 (racines complexes).', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Résoudre (E₂): y\'\' - 4y\' + 4y = 0 (racine double).', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2c', question: '**Partie 2c)** Résoudre (E₃): y\'\' + y = sin(x). Chercher une solution particulière de la forme y_p = x(a·cos(x) + b·sin(x)).', type: 'calcul', difficulty: 'Très difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-nombres-complexes',
    chapterId: 'bac-2023-nombres-complexes',
    title: 'Nombres complexes',
    description: 'Forme algébrique, trigonométrique, exponentielle, racines n-ièmes, géométrie',
    concepts: ['Nombre complexe', 'Partie réelle', 'Partie imaginaire', 'Module', 'Argument', 'Forme exponentielle', 'Conjugué', 'Racine n-ième'],
    objectives: ['Passer d\'une forme à l\'autre', 'Calculer module et argument', 'Résoudre des équations dans ℂ', 'Appliquer aux transformations géométriques'],
    exercises: [
      {
        title: 'Nombres complexes - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Mettre sous forme algébrique z = (2 + 3i)/(1 - i).', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer le module et l\'argument de z₁ = 1 + i√3.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Écrire z₁ sous forme exponentielle.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Résoudre dans ℂ: z² + 2z + 5 = 0.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Déterminer les racines cubiques de -8. Les représenter dans le plan complexe.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Résoudre z⁴ = 1 + i. Donner les solutions sous forme exponentielle.', type: 'calcul', difficulty: 'Très difficile' },
        ]
      },
      {
        title: 'Nombres complexes - Variante 2 (Géométrie)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Dans le plan complexe, on considère A(1), B(i) et C(-1). Montrer que ABC est un triangle isocèle.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Soit M(z). Caractériser géométriquement l\'ensemble des points M tels que |z - 1| = |z + 1|.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit f: z ↦ z\' = (z - i)/(z + i) pour z ≠ -i. Montrer que |z\'| = 1 si et seulement si z est réel.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Déterminer l\'ensemble des points M(z) tels que z\' soit un réel.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Soit g: z ↦ (1+i)z + 2. Déterminer la nature et les éléments caractéristiques de la transformation associée.', type: 'demonstration', difficulty: 'Très difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-geometrie-espace',
    chapterId: 'bac-2023-geometrie-espace',
    title: 'Géométrie dans l\'espace',
    description: 'Vecteurs, droites, plans, distances, produit scalaire et vectoriel',
    concepts: ['Vecteur de l\'espace', 'Droite', 'Plan', 'Équation paramétrique', 'Équation cartésienne', 'Produit scalaire', 'Produit vectoriel', 'Distance'],
    objectives: ['Déterminer équations de droites et plans', 'Étudier les positions relatives', 'Calculer distances et angles', 'Utiliser le produit vectoriel'],
    exercises: [
      {
        title: 'Géométrie dans l\'espace - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit A(1, 2, -1), B(3, 1, 2) et C(0, 4, 1). Calculer les coordonnées du vecteur AB⃗ et AC⃗.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer le produit vectoriel AB⃗ ∧ AC⃗.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** En déduire une équation cartésienne du plan (ABC).', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit D(2, 3, 0). Montrer que D n\'appartient pas au plan (ABC).', type: 'demonstration', difficulty: 'Facile' },
          { partId: 'part-2b', question: '**Partie 2b)** Calculer la distance de D au plan (ABC).', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Déterminer le projeté orthogonal H de D sur le plan (ABC).', type: 'calcul', difficulty: 'Très difficile' },
        ]
      },
      {
        title: 'Géométrie dans l\'espace - Variante 2 (Droites et plans)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit la droite (d) passant par A(1, 0, 2) et de vecteur directeur u⃗(2, 1, -1). Écrire la représentation paramétrique de (d).', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Soit le plan (P): 2x - y + 3z - 1 = 0. Montrer que (d) et (P) sont sécants et trouver leur point d\'intersection.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Calculer l\'angle entre (d) et (P).', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit (d\') passant par B(0, 1, 1) et de vecteur directeur v⃗(1, 2, 1). Les droites (d) et (d\') sont-elles coplanaires?', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Si elles ne sont pas coplanaires, calculer leur distance.', type: 'calcul', difficulty: 'Très difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-probabilites',
    chapterId: 'bac-2023-probabilites',
    title: 'Probabilités',
    description: 'Probabilités conditionnelles, indépendance, loi binomiale, espérance et variance',
    concepts: ['Probabilité', 'Probabilité conditionnelle', 'Indépendance', 'Variable aléatoire', 'Loi binomiale', 'Espérance', 'Variance', 'Arbre de probabilités'],
    objectives: ['Calculer des probabilités conditionnelles', 'Utiliser la formule des probabilités totales', 'Reconnaître une loi binomiale', 'Calculer espérance et variance'],
    exercises: [
      {
        title: 'Probabilités - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Une urne contient 3 boules blanches et 2 boules noires. On tire successivement 2 boules sans remise. Calculer P(B₂ | B₁) où Bᵢ = "la boule i est blanche".', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer P(B₁ ∩ B₂) et P(B₂).', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Les événements B₁ et B₂ sont-ils indépendants? Justifier.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** On effectue 5 tirages avec remise. Soit X le nombre de boules blanches obtenues. Quelle est la loi de X?', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Calculer P(X = 3) et P(X ≥ 2).', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Calculer E(X) et V(X).', type: 'calcul', difficulty: 'Moyen' },
        ]
      },
      {
        title: 'Probabilités - Variante 2 (Formule de Bayes)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Une usine a 3 machines M₁, M₂, M₃ produisant respectivement 50%, 30% et 20% de la production. Les taux de pièces défectueuses sont 2%, 3% et 5%. Calculer P(D) = probabilité qu\'une pièce soit défectueuse.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Une pièce est défectueuse. Calculer la probabilité qu\'elle provienne de M₁.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-1c', question: '**Partie 1c)** De quelle machine provient le plus probablement une pièce défectueuse?', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** On prélève 10 pièces au hasard. Soit Y le nombre de pièces défectueuses. Justifier que Y suit approximativement une loi binomiale et préciser ses paramètres.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Calculer P(Y = 0) et P(Y ≤ 1).', type: 'calcul', difficulty: 'Difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-denombrement',
    chapterId: 'bac-2023-denombrement',
    title: 'Dénombrement',
    description: 'Permutations, arrangements, combinaisons, formule du binôme',
    concepts: ['Principe multiplicatif', 'Permutation', 'Arrangement', 'Combinaison', 'Coefficient binomial', 'Formule du binôme', 'Triangle de Pascal'],
    objectives: ['Reconnaître le type de dénombrement', 'Calculer permutations et arrangements', 'Calculer des combinaisons', 'Appliquer le binôme de Newton'],
    exercises: [
      {
        title: 'Dénombrement - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** De combien de façons peut-on ranger 5 livres différents sur une étagère?', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Combien de mots de 3 lettres (avec répétition possible) peut-on former avec l\'alphabet (26 lettres)?', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1c', question: '**Partie 1c)** Combien de codes à 4 chiffres peut-on former si tous les chiffres doivent être distincts?', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** On tire 3 cartes parmi 52. Combien y a-t-il de tirages possibles?', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Combien de ces tirages contiennent exactement 2 as?', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Développer (1 + x)⁵ en utilisant la formule du binôme de Newton.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2d', question: '**Partie 2d)** En déduire la valeur de C(5,0) + C(5,1) + C(5,2) + C(5,3) + C(5,4) + C(5,5).', type: 'calcul', difficulty: 'Moyen' },
        ]
      },
      {
        title: 'Dénombrement - Variante 2',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Combien d\'anagrammes peut-on former avec le mot MATHEMATIQUES?', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-1b', question: '**Partie 1b)** Un comité de 5 personnes doit être formé parmi 8 hommes et 6 femmes. Combien de comités peut-on former?', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Combien de ces comités contiennent exactement 3 hommes et 2 femmes?', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2a', question: '**Partie 2a)** Montrer que C(n,k) = C(n,n-k) pour tous n ≥ k ≥ 0.', type: 'demonstration', difficulty: 'Moyen' },
          { partId: 'part-2b', question: '**Partie 2b)** Montrer la relation de Pascal: C(n+1,k) = C(n,k-1) + C(n,k).', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Calculer la somme S = Σ(k=0 à n) k·C(n,k) en utilisant la dérivée de (1+x)ⁿ.', type: 'calcul', difficulty: 'Très difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-transformations',
    chapterId: 'bac-2023-transformations',
    title: 'Transformations du plan',
    description: 'Translations, rotations, homothéties, similitudes, compositions',
    concepts: ['Translation', 'Rotation', 'Homothétie', 'Similitude', 'Point fixe', 'Écriture complexe', 'Composition'],
    objectives: ['Caractériser une transformation', 'Trouver les éléments caractéristiques', 'Composer des transformations', 'Utiliser l\'écriture complexe'],
    exercises: [
      {
        title: 'Transformations - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit T la translation de vecteur u⃗(2, -3). Écrire l\'expression complexe z\' = f(z) de T.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Soit R la rotation de centre O et d\'angle π/3. Écrire l\'expression complexe de R.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Déterminer la transformation S = R ∘ T. Quelle est sa nature?', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit f définie par f(z) = (1+i)z - 2. Déterminer la nature de f et ses éléments caractéristiques.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Trouver le point fixe de f.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2c', question: '**Partie 2c)** Écrire f comme composée d\'une rotation et d\'une homothétie de même centre.', type: 'demonstration', difficulty: 'Très difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-coniques',
    chapterId: 'bac-2023-coniques',
    title: 'Coniques',
    description: 'Ellipse, hyperbole, parabole: équations, éléments caractéristiques, tangentes',
    concepts: ['Conique', 'Ellipse', 'Hyperbole', 'Parabole', 'Foyer', 'Directrice', 'Excentricité', 'Équation réduite', 'Tangente'],
    objectives: ['Reconnaître une conique', 'Déterminer les éléments caractéristiques', 'Trouver l\'équation réduite', 'Calculer l\'équation de la tangente'],
    exercises: [
      {
        title: 'Coniques - Variante 1 (Ellipse)',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soit l\'ellipse (E): x²/9 + y²/4 = 1. Déterminer les demi-axes a et b, les foyers F et F\'.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer l\'excentricité e et les directrices de (E).', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Soit M(x₀, y₀) un point de (E). Montrer que MF + MF\' = 2a.', type: 'demonstration', difficulty: 'Difficile' },
          { partId: 'part-2a', question: '**Partie 2a)** Écrire l\'équation de la tangente à (E) au point M₀(3/√2, √2).', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** On considère l\'hyperbole (H): x²/4 - y²/5 = 1. Déterminer ses asymptotes.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2c', question: '**Partie 2c)** Déterminer l\'équation de la parabole de foyer F(0, 2) et de directrice y = -2.', type: 'calcul', difficulty: 'Difficile' },
        ]
      },
    ]
  },
  {
    id: 'bac-2023-matrices',
    chapterId: 'bac-2023-matrices',
    title: 'Matrices',
    description: 'Opérations sur les matrices, déterminant, inverse, systèmes linéaires',
    concepts: ['Matrice', 'Addition', 'Multiplication', 'Déterminant', 'Matrice inverse', 'Matrice carrée', 'Système linéaire matriciel'],
    objectives: ['Effectuer des opérations matricielles', 'Calculer un déterminant', 'Inverser une matrice', 'Résoudre un système par les matrices'],
    exercises: [
      {
        title: 'Matrices - Variante 1',
        parts: [
          { partId: 'part-1a', question: '**Partie 1a)** Soient A = [[1, 2], [3, 4]] et B = [[5, 6], [7, 8]]. Calculer A + B et A × B.', type: 'calcul', difficulty: 'Facile' },
          { partId: 'part-1b', question: '**Partie 1b)** Calculer det(A). La matrice A est-elle inversible?', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-1c', question: '**Partie 1c)** Calculer A⁻¹ et vérifier que A × A⁻¹ = I₂.', type: 'calcul', difficulty: 'Moyen' },
          { partId: 'part-2a', question: '**Partie 2a)** Soit M = [[1, 1, 1], [0, 1, 1], [0, 0, 1]]. Calculer M², M³ et conjecturer Mⁿ.', type: 'calcul', difficulty: 'Difficile' },
          { partId: 'part-2b', question: '**Partie 2b)** Démontrer par récurrence l\'expression de Mⁿ.', type: 'demonstration', difficulty: 'Très difficile' },
          { partId: 'part-2c', question: '**Partie 2c)** Résoudre le système { x + y + z = 6 ; y + z = 4 ; z = 2 } par calcul matriciel.', type: 'calcul', difficulty: 'Moyen' },
        ]
      },
    ]
  },
];

async function generateAndSaveExercises() {
  console.log('🚀 Démarrage de la génération des exercices pour tous les chapitres du BAC C...\n');
  
  const ds = await getDataSource();
  const exerciseRepo = ds.getRepository(StoredBacExercise);
  const partRepo = ds.getRepository(StoredBacExercisePart);
  
  let totalExercises = 0;
  let totalParts = 0;
  
  for (const chapter of CHAPTERS) {
    console.log(`\n📚 Chapitre: ${chapter.title}`);
    console.log(`   ID: ${chapter.id}`);
    console.log(`   ${chapter.exercises.length} variante(s) à générer`);
    
    for (let i = 0; i < chapter.exercises.length; i++) {
      const exerciseData = chapter.exercises[i];
      const exerciseId = `${chapter.id}-var${i + 1}-${Date.now()}`;
      const now = new Date();
      
      // Créer l'exercice principal
      const exercise = exerciseRepo.create({
        id: uuidv4(),
        chapterId: chapter.chapterId,
        exerciseId,
        title: exerciseData.title,
        description: chapter.description,
        subject: 'Mathématiques',
        difficulty: 'Moyen',
        concepts: chapter.concepts,
        objectives: chapter.objectives,
        partSequence: exerciseData.parts.map(p => p.partId),
        enonceComplet: exerciseData.parts.map(p => p.question).join('\n\n'),
        generatedBy: 'generate-all-exercises-script',
        isActive: true,
        generatedAt: now,
        createdAt: now,
        updatedAt: now,
      });
      
      await exerciseRepo.save(exercise);
      totalExercises++;
      
      // Créer les parties
      for (let j = 0; j < exerciseData.parts.length; j++) {
        const partData = exerciseData.parts[j];
        const part = partRepo.create({
          id: uuidv4(),
          exerciseId: exercise.id,
          partId: partData.partId,
          question: partData.question,
          type: partData.type,
          difficulty: partData.difficulty,
          validated: true,
          orderIndex: j,
          createdAt: now,
          updatedAt: now,
        });
        await partRepo.save(part);
        totalParts++;
      }
      
      console.log(`   ✅ Variante ${i + 1}: "${exerciseData.title}" - ${exerciseData.parts.length} parties`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ DE LA GÉNÉRATION');
  console.log('='.repeat(60));
  console.log(`✅ Chapitres traités: ${CHAPTERS.length}`);
  console.log(`✅ Exercices créés: ${totalExercises}`);
  console.log(`✅ Parties créées: ${totalParts}`);
  console.log('='.repeat(60));
  
  await ds.destroy();
}

// Exécuter le script
generateAndSaveExercises()
  .then(() => {
    console.log('\n🎉 Génération terminée avec succès!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Erreur lors de la génération:', error);
    process.exit(1);
  });
