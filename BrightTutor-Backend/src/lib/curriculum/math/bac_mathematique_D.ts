/**
 * BAC MATHÉMATIQUE D (LITTÉRAIRE) CURRICULUM - MAURITANIE
 * Programme simplifié pour le Bac D avec moins d'exercices
 * 
 * Structure: Chapitres organisés en fichiers séparés dans bac_mathematique_D/
 * Emplacement: src/lib/curriculum/bac_mathematique_D/
 * 
 * Contenu: 9 exercices adaptés au profil littéraire
 */
import type { Curriculum } from '../curriculum-loader';
import { BAC_D_FONCTIONS } from './bac_mathematique_D/fonctions';
import { BAC_D_PROBABILITES } from './bac_mathematique_D/probabilites';
import { BAC_D_STATISTIQUES } from './bac_mathematique_D/statistiques';
import { BAC_D_SUITES } from './bac_mathematique_D/suites';
import { BAC_D_SUITES_AVANCEES } from './bac_mathematique_D/suites-avancees';
import { BAC_D_LIMITES_DERIVEES_PRIMITIVES } from './bac_mathematique_D/limites-derivees-primitives';
import { BAC_D_NOMBRES_COMPLEXES } from './bac_mathematique_D/nombres-complexes';
import { BAC_D_EXPONENTIELLES } from './bac_mathematique_D/exponentielles';
import { BAC_D_LOGARITHMES } from './bac_mathematique_D/logarithmes';
import { BAC_D_CALCUL_INTEGRAL } from './bac_mathematique_D/calcul-integral';

export const BAC_MATHEMATIQUE_D_CURRICULUM: Curriculum = {
  year: 5, // Année spéciale pour le Bac (après Year 4)
  subject: 'Mathématiques',
  title: 'Préparation Baccalauréat Mathématiques D - Mauritanie',
  methodology: 'Apprentissage systématique des exercices types du Baccalauréat D (Littéraire). L\'AI enseigne chaque partie séquentiellement, vérifie la compréhension avant d\'avancer, et adapte les explications selon le niveau de l\'étudiant.',
  description: 'Programme de préparation au Baccalauréat D (Littéraire) avec des exercices adaptés. Concepts fondamentaux en mathématiques pour les étudiants en série littéraire.',
  chapters: [
    {
      id: 'bac-d-2023',
      title: 'Baccalauréat 2023 - Session Normale - Série D',
      sections: [
        // NIVEAU 1 — FONDATIONS INDISPENSABLES
        // (Arithmétique et Systèmes linéaires non présents pour Bac D)
        BAC_D_LIMITES_DERIVEES_PRIMITIVES, // Chapitre V — Limites & continuité (inclut aussi dérivation & primitives)
        
        // NIVEAU 2 — ANALYSE CLASSIQUE (le cœur)
        BAC_D_FONCTIONS, // Chapitre VII — Étude de fonctions
        BAC_D_LOGARITHMES, // Chapitre VIII — Fonctions ln et exp
        BAC_D_SUITES, // Chapitre IX — Suites numériques (partie 1)
        BAC_D_SUITES_AVANCEES, // Chapitre IX — Suites numériques (partie 2)
        BAC_D_CALCUL_INTEGRAL, // Chapitre X — Calcul intégral
        
        // NIVEAU 3 — ALGÈBRE "OUTIL"
        BAC_D_NOMBRES_COMPLEXES, // Chapitres III/IV — Nombres complexes
        
        // NIVEAU 4 — GÉOMÉTRIE
        // (Géométrie, Transformations, Coniques non présents pour Bac D)
        
        // NIVEAU 5 — ORGANISATION DE DONNÉES
        BAC_D_PROBABILITES, // Chapitre XVIII — Probabilités
        
        // CHAPITRES SUPPLÉMENTAIRES (non dans la liste mais présents)
        BAC_D_STATISTIQUES, // Statistiques (complément aux probabilités)
        BAC_D_EXPONENTIELLES, // Exponentielles (complément à ln et exp)
      ]
    }
  ]
};
