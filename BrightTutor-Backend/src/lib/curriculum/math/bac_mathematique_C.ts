/**
*
* BAC MATHÉMATIQUE CURRICULUM - MAURITANIE
* Extraction COMPLÈTE du Bac  avec TOUTES les solutions détaillées
*
* Structure: Chapitres organisés en fichiers séparés dans bac_mathematique_C/
* Emplacement: src/lib/curriculum/bac_mathematique_C/
*
* Contenu:
* - 13 exercices complets du Bac 
* - Toutes les parties (a, b, c...) avec énoncés et solutions
* - Concepts, prérequis, difficultés pour chaque partie
*/
import type { Curriculum } from '../curriculum-loader';
import { BAC_C_GEOMETRIE_ESPACE } from './bac_mathematique_C/geometrie-espace';
import { BAC_C_TRANSFORMATIONS } from './bac_mathematique_C/transformations';
import { BAC_C_NOMBRES_COMPLEXES } from './bac_mathematique_C/nombres-complexes';
import { BAC_C_ETUDE_FONCTION } from './bac_mathematique_C/etude-fonction';
import { BAC_C_EXPONENTIELLE_SUITES } from './bac_mathematique_C/exponentielle-suites';
import { BAC_C_SUITES } from './bac_mathematique_C/suites';
import { BAC_C_SUITES_AVANCEES } from './bac_mathematique_C/suites-avancees';
import { BAC_C_DENOMBREMENT } from './bac_mathematique_C/denombrement';
import { BAC_C_PROBABILITES } from './bac_mathematique_C/probabilites';
import { BAC_C_LIMITES_DERIVEES_PRIMITIVES } from './bac_mathematique_C/limites-derivees-primitives';
import { BAC_C_ARITHMETIQUE } from './bac_mathematique_C/arithmetique';
import { BAC_C_MATRICES } from './bac_mathematique_C/matrices';
import { BAC_C_CONIQUES } from './bac_mathematique_C/coniques';
import { BAC_C_EQUATIONS_DIFFERENTIELLES } from './bac_mathematique_C/equations-differentielles';
import { BAC_C_SYSTEMES_LINEAIRES } from './bac_mathematique_C/systemes-lineaires';
import { BAC_C_LOGARITHMES } from './bac_mathematique_C/logarithmes';
import { BAC_C_CALCUL_INTEGRAL } from './bac_mathematique_C/calcul-integral';

export const BAC_MATHEMATIQUE_CURRICULUM: Curriculum = {
  year: 5, // Année spéciale pour le Bac (après Year 4)
  subject: 'Mathématiques'
  ,
  title: 'Préparation Baccalauréat Mathématiques C & TMGM - Mauritanie'
  ,
  methodology: 'Apprentissage systématique des exercices types du Baccalauréat. L\'AI enseigne chaque partie séquentiellement, vérifie la compréhension avant d\'avancer, et adapte les explications selon le niveau de l\'étudiant.',
  description: 'Programme complet de préparation au Baccalauréat Mauritanien avec tous les exercices depuis 2023. Chaque année contient 5 exercices (Géométrie spatiale, Transformations, Nombres complexes, Fonctions, Suites). Les exercices sont décomposés en parties pour un apprentissage progressif.',
  chapters: [
    {
      id: 'bac-2023'
      ,
      title: 'Baccalauréat - Session Normale - Séries C & TMGM'
      ,
      sections: [
        // NIVEAU 1 — FONDATIONS INDISPENSABLES
        BAC_C_ARITHMETIQUE, // Chapitre I — Arithmétique
        BAC_C_SYSTEMES_LINEAIRES, // Chapitre II — Systèmes linéaires
        BAC_C_LIMITES_DERIVEES_PRIMITIVES, // Chapitre V — Limites & continuité (inclut aussi dérivation & primitives)
        
        // NIVEAU 2 — ANALYSE CLASSIQUE (le cœur)
        BAC_C_ETUDE_FONCTION, // Chapitre VII — Étude de fonctions
        BAC_C_LOGARITHMES, // Chapitre VIII — Fonctions ln et exp
        BAC_C_SUITES, // Chapitre IX — Suites numériques (partie 1)
        BAC_C_SUITES_AVANCEES, // Chapitre IX — Suites numériques (partie 2)
        BAC_C_CALCUL_INTEGRAL, // Chapitre X — Calcul intégral
        BAC_C_EQUATIONS_DIFFERENTIELLES, // Chapitre XI — Équations différentielles
        
        // NIVEAU 3 — ALGÈBRE "OUTIL"
        BAC_C_NOMBRES_COMPLEXES, // Chapitres III/IV — Nombres complexes
        
        // NIVEAU 4 — GÉOMÉTRIE
        BAC_C_GEOMETRIE_ESPACE, // Calcul vectoriel / Géométrie dans l'espace
        BAC_C_TRANSFORMATIONS, // Chapitres XIV/XV — Transformations
        BAC_C_CONIQUES, // Chapitre XVII — Coniques
        
        // NIVEAU 5 — ORGANISATION DE DONNÉES
        BAC_C_DENOMBREMENT, // Dénombrement (prérequis pour probabilités)
        BAC_C_PROBABILITES, // Chapitre XVIII — Probabilités
        
        // CHAPITRES SUPPLÉMENTAIRES (non dans la liste mais présents)
        BAC_C_EXPONENTIELLE_SUITES, // Exponentielles & suites (complément)
        BAC_C_MATRICES, // Matrices (complément aux systèmes linéaires)
      ]
    }
  ]
};
