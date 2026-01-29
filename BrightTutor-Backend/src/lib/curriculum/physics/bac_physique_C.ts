/**
 * BAC PHYSIQUE CURRICULUM - MAURITANIE
 * Structure: Chapitres organisés en fichiers séparés dans bac_physique_C/
 * Emplacement: src/lib/curriculum/bac_physique_C/
 */
import type { Curriculum } from '../curriculum-loader';
import { BAC_C_DYNAMIQUE } from './bac_physique_C/dynamique';

export const BAC_PHYSIQUE_CURRICULUM: Curriculum = {
  year: 5, // Année spéciale pour le Bac (après Year 4)
  subject: 'Physique',
  title: 'Préparation Baccalauréat Physique - Mauritanie',
  methodology: 'Apprentissage systématique des exercices types du Baccalauréat. L\'AI enseigne chaque partie séquentiellement, vérifie la compréhension avant d\'avancer, et adapte les explications selon le niveau de l\'étudiant.',
  description: 'Programme complet de préparation au Baccalauréat Mauritanien en Physique. Les exercices sont décomposés en parties pour un apprentissage progressif.',
  chapters: [
    {
      id: 'bac-physique-2023',
      title: 'Baccalauréat Physique - Session Normale',
      sections: [
        BAC_C_DYNAMIQUE, // Chapitre - Dynamique
        // Autres chapitres à ajouter progressivement
      ]
    }
  ]
};
