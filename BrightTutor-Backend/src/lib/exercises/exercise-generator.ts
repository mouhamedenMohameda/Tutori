/**
 * Generate Duolingo-style exercises from Year 1 Math curriculum
 * All questions in French for Mauritanian students
 */

import { Exercise, MultipleChoiceVisualExercise, MultipleChoiceTextExercise, FillInBlankExercise, TrueFalseExercise } from '@/types/exercises'
import { YEAR1_MATH_CURRICULUM } from '@/lib/curriculum/math/year1_math'

export class ExerciseGenerator {
  /**
   * Generate exercises for a specific section
   * Returns exactly 15 exercises mixing all types, randomly shuffled
   */
  static generateExercisesForSection(sectionId: string): Exercise[] {
    const section = this.findSection(sectionId)
    if (!section) {
      console.error(`Section ${sectionId} not found`)
      return []
    }

    const exercises: Exercise[] = []

    // Generate exactly 15 exercises based on section content
    // 40% Multiple Choice (6 exercises)
    exercises.push(...this.generateMultipleChoice(section, 6))
    
    // 30% Fill in Blank (5 exercises)
    exercises.push(...this.generateFillInBlank(section, 5))
    
    // 20% True/False (3 exercises)
    exercises.push(...this.generateTrueFalse(section, 3))
    
    // 10% Problem Solving (1 exercise)
    exercises.push(...this.generateProblemSolving(section, 1))

    // Ensure we have exactly 15 exercises
    if (exercises.length < 15) {
      // If we don't have enough, duplicate some with variations
      const needed = 15 - exercises.length
      const additional = this.generateAdditionalExercises(section, needed)
      exercises.push(...additional)
    }

    // Shuffle and return exactly 15 exercises (random order each time)
    return this.shuffleArray(exercises).slice(0, 15)
  }

  /**
   * Find section in curriculum
   */
  private static findSection(sectionId: string) {
    for (const chapter of YEAR1_MATH_CURRICULUM.chapters) {
      const section = chapter.sections.find((s: any) => s.id === sectionId)
      if (section) return section
    }
    return null
  }

  /**
   * Generate multiple choice exercises (40% of total)
   */
  private static generateMultipleChoice(section: any, count: number): MultipleChoiceVisualExercise[] {
    const exercises: MultipleChoiceVisualExercise[] = []

    // ch1-s1: Les nombres entiers naturels
    if (section.id === 'ch1-s1') {
      // Exercise 1: Compare numbers
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Quel nombre est plus grand: 23 ou 32?',
        options: [
          { id: 'opt1', text: '23', icon: '2️⃣3️⃣' },
          { id: 'opt2', text: '32', icon: '3️⃣2️⃣' },
          { id: 'opt3', text: 'Ils sont égaux', icon: '⚖️' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '32 est plus grand que 23 car 3 dizaines > 2 dizaines.'
      })

      // Exercise 2: Read number
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Lis le nombre 47',
        options: [
          { id: 'opt1', text: 'Quarante-sept', icon: '4️⃣7️⃣' },
          { id: 'opt2', text: 'Quatre-vingt', icon: '8️⃣0️⃣' },
          { id: 'opt3', text: 'Soixante-dix', icon: '7️⃣0️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '47 se lit "quarante-sept" (quarante = 40, sept = 7).'
      })

      // Exercise 3: Write number
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Écris en chiffres: soixante-trois',
        options: [
          { id: 'opt1', text: '63', icon: '6️⃣3️⃣' },
          { id: 'opt2', text: '36', icon: '3️⃣6️⃣' },
          { id: 'opt3', text: '603', icon: '6️⃣0️⃣3️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Soixante-trois = 60 + 3 = 63.'
      })

      // Exercise 4: Compare numbers
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Quel nombre est plus petit: 15 ou 51?',
        options: [
          { id: 'opt1', text: '15', icon: '1️⃣5️⃣' },
          { id: 'opt2', text: '51', icon: '5️⃣1️⃣' },
          { id: 'opt3', text: 'Ils sont égaux', icon: '⚖️' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '15 est plus petit que 51 car 1 dizaine < 5 dizaines.'
      })

      // Exercise 5: Count
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Combien font 10 + 5?',
        options: [
          { id: 'opt1', text: '14', icon: '1️⃣4️⃣' },
          { id: 'opt2', text: '15', icon: '1️⃣5️⃣' },
          { id: 'opt3', text: '16', icon: '1️⃣6️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '10 + 5 = 15 (dix plus cinq égale quinze).'
      })

      // Exercise 6: Read number
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Lis le nombre 89',
        options: [
          { id: 'opt1', text: 'Quatre-vingt-neuf', icon: '8️⃣9️⃣' },
          { id: 'opt2', text: 'Soixante-dix-neuf', icon: '7️⃣9️⃣' },
          { id: 'opt3', text: 'Quatre-vingt', icon: '8️⃣0️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '89 se lit "quatre-vingt-neuf" (80 + 9).'
      })
    }

    // ch1-s2: Addition et soustraction
    if (section.id === 'ch1-s2') {
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Combien font 5 + 3?',
        options: [
          { id: 'opt1', text: '7', icon: '7️⃣' },
          { id: 'opt2', text: '8', icon: '8️⃣' },
          { id: 'opt3', text: '9', icon: '9️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '5 + 3 = 8 (cinq plus trois égale huit).'
      })

      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Combien font 12 - 4?',
        options: [
          { id: 'opt1', text: '6', icon: '6️⃣' },
          { id: 'opt2', text: '7', icon: '7️⃣' },
          { id: 'opt3', text: '8', icon: '8️⃣' }
        ],
        correctAnswer: 2,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '12 - 4 = 8 (douze moins quatre égale huit).'
      })

      // Exercise 3: Addition with visual
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Combien font 3 + 4?',
        options: [
          { id: 'opt1', text: '6', icon: '6️⃣' },
          { id: 'opt2', text: '7', icon: '7️⃣' },
          { id: 'opt3', text: '8', icon: '8️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3 + 4 = 7.'
      })

      // Exercise 4: Subtraction with visual
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Combien font 9 - 2?',
        options: [
          { id: 'opt1', text: '6', icon: '6️⃣' },
          { id: 'opt2', text: '7', icon: '7️⃣' },
          { id: 'opt3', text: '8', icon: '8️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '9 - 2 = 7.'
      })

      // Exercise 5: Mental calculation
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Calcule mentalement: 6 + 6 = ?',
        options: [
          { id: 'opt1', text: '11', icon: '1️⃣1️⃣' },
          { id: 'opt2', text: '12', icon: '1️⃣2️⃣' },
          { id: 'opt3', text: '13', icon: '1️⃣3️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '6 + 6 = 12. C\'est un double.'
      })

      // Exercise 6: Addition with larger numbers
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 7 + 5 = ?',
        options: [
          { id: 'opt1', text: '11', icon: '1️⃣1️⃣' },
          { id: 'opt2', text: '12', icon: '1️⃣2️⃣' },
          { id: 'opt3', text: '13', icon: '1️⃣3️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '7 + 5 = 12.'
      })
    }

    // ch1-s3: Multiplication et division
    if (section.id === 'ch1-s3') {
      // Exercise 1: Simple multiplication
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 3 × 4 = ?',
        options: [
          { id: 'opt1', text: '10', icon: '1️⃣0️⃣' },
          { id: 'opt2', text: '12', icon: '1️⃣2️⃣' },
          { id: 'opt3', text: '14', icon: '1️⃣4️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3 × 4 = 12 (trois fois quatre égale douze).'
      })

      // Exercise 2: Simple division
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 15 ÷ 3 = ?',
        options: [
          { id: 'opt1', text: '4', icon: '4️⃣' },
          { id: 'opt2', text: '5', icon: '5️⃣' },
          { id: 'opt3', text: '6', icon: '6️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '15 ÷ 3 = 5 (quinze divisé par trois égale cinq).'
      })

      // Exercise 3: Table of 2
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Combien font 2 × 6?',
        options: [
          { id: 'opt1', text: '10', icon: '1️⃣0️⃣' },
          { id: 'opt2', text: '12', icon: '1️⃣2️⃣' },
          { id: 'opt3', text: '14', icon: '1️⃣4️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '2 × 6 = 12 (table de 2).'
      })

      // Exercise 4: Table of 5
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Combien font 5 × 4?',
        options: [
          { id: 'opt1', text: '18', icon: '1️⃣8️⃣' },
          { id: 'opt2', text: '20', icon: '2️⃣0️⃣' },
          { id: 'opt3', text: '22', icon: '2️⃣2️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '5 × 4 = 20 (table de 5).'
      })

      // Exercise 5: Table of 10
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Combien font 10 × 3?',
        options: [
          { id: 'opt1', text: '28', icon: '2️⃣8️⃣' },
          { id: 'opt2', text: '30', icon: '3️⃣0️⃣' },
          { id: 'opt3', text: '32', icon: '3️⃣2️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '10 × 3 = 30 (table de 10).'
      })

      // Exercise 6: Division
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Combien font 20 ÷ 5?',
        options: [
          { id: 'opt1', text: '3', icon: '3️⃣' },
          { id: 'opt2', text: '4', icon: '4️⃣' },
          { id: 'opt3', text: '5', icon: '5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '20 ÷ 5 = 4 (vingt divisé par cinq égale quatre).'
      })
    }

    // ch1-s4: Problèmes de calcul
    if (section.id === 'ch1-s4') {
      // Exercise 1: Addition problem
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Ahmed a 15 bonbons. Fatima en a 12. Combien en ont-ils en tout?',
        options: [
          { id: 'opt1', text: '25', icon: '2️⃣5️⃣' },
          { id: 'opt2', text: '27', icon: '2️⃣7️⃣' },
          { id: 'opt3', text: '30', icon: '3️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '15 + 12 = 27. Ils ont 27 bonbons en tout.'
      })

      // Exercise 2: Subtraction problem
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Il y avait 30 élèves. 8 sont partis. Combien reste-t-il?',
        options: [
          { id: 'opt1', text: '20', icon: '2️⃣0️⃣' },
          { id: 'opt2', text: '22', icon: '2️⃣2️⃣' },
          { id: 'opt3', text: '24', icon: '2️⃣4️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '30 - 8 = 22. Il reste 22 élèves.'
      })

      // Exercise 3: Multiplication problem
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Chaque élève a 3 crayons. S\'il y a 5 élèves, combien de crayons en tout?',
        options: [
          { id: 'opt1', text: '12', icon: '1️⃣2️⃣' },
          { id: 'opt2', text: '15', icon: '1️⃣5️⃣' },
          { id: 'opt3', text: '18', icon: '1️⃣8️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3 × 5 = 15. Il y a 15 crayons en tout.'
      })

      // Exercise 4: Division problem
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: '24 bonbons à partager entre 6 enfants. Combien chacun?',
        options: [
          { id: 'opt1', text: '3', icon: '3️⃣' },
          { id: 'opt2', text: '4', icon: '4️⃣' },
          { id: 'opt3', text: '5', icon: '5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '24 ÷ 6 = 4. Chaque enfant reçoit 4 bonbons.'
      })

      // Exercise 5: Mixed operation
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Mohamed a 20 ouguiyas. Il achète 3 bonbons à 2 ouguiyas chacun. Combien lui reste-t-il?',
        options: [
          { id: 'opt1', text: '12', icon: '1️⃣2️⃣' },
          { id: 'opt2', text: '14', icon: '1️⃣4️⃣' },
          { id: 'opt3', text: '16', icon: '1️⃣6️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3 × 2 = 6 ouguiyas dépensés. 20 - 6 = 14. Il lui reste 14 ouguiyas.'
      })

      // Exercise 6: Real-world problem
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Dans une classe de 25 élèves, 10 sont des filles. Combien y a-t-il de garçons?',
        options: [
          { id: 'opt1', text: '13', icon: '1️⃣3️⃣' },
          { id: 'opt2', text: '15', icon: '1️⃣5️⃣' },
          { id: 'opt3', text: '17', icon: '1️⃣7️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '25 - 10 = 15. Il y a 15 garçons.'
      })
    }

    // ch1-s5: (need to check what this section is about)
    if (section.id === 'ch1-s5') {
      // Exercise 1: Number operations review
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 5 + 3 × 2 = ?',
        options: [
          { id: 'opt1', text: '11', icon: '1️⃣1️⃣' },
          { id: 'opt2', text: '16', icon: '1️⃣6️⃣' },
          { id: 'opt3', text: '13', icon: '1️⃣3️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'D\'abord multiplication: 3 × 2 = 6. Puis addition: 5 + 6 = 11.'
      })

      // Exercise 2: Mixed calculation
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 20 - 4 × 3 = ?',
        options: [
          { id: 'opt1', text: '6', icon: '6️⃣' },
          { id: 'opt2', text: '8', icon: '8️⃣' },
          { id: 'opt3', text: '10', icon: '1️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'D\'abord multiplication: 4 × 3 = 12. Puis soustraction: 20 - 12 = 8.'
      })

      // Exercise 3: Division and addition
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 18 ÷ 3 + 4 = ?',
        options: [
          { id: 'opt1', text: '8', icon: '8️⃣' },
          { id: 'opt2', text: '10', icon: '1️⃣0️⃣' },
          { id: 'opt3', text: '12', icon: '1️⃣2️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'D\'abord division: 18 ÷ 3 = 6. Puis addition: 6 + 4 = 10.'
      })

      // Exercise 4: Complex problem
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Fatima a 30 ouguiyas. Elle achète 4 cahiers à 5 ouguiyas chacun. Combien lui reste-t-il?',
        options: [
          { id: 'opt1', text: '8', icon: '8️⃣' },
          { id: 'opt2', text: '10', icon: '1️⃣0️⃣' },
          { id: 'opt3', text: '12', icon: '1️⃣2️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '4 × 5 = 20 ouguiyas dépensés. 30 - 20 = 10. Il lui reste 10 ouguiyas.'
      })

      // Exercise 5: Multiple operations
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Ahmed a 3 groupes de 4 bonbons. Il en mange 5. Combien lui reste-t-il?',
        options: [
          { id: 'opt1', text: '5', icon: '5️⃣' },
          { id: 'opt2', text: '7', icon: '7️⃣' },
          { id: 'opt3', text: '9', icon: '9️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3 × 4 = 12 bonbons au total. 12 - 5 = 7. Il lui reste 7 bonbons.'
      })

      // Exercise 6: Final review
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 2 × 5 + 10 = ?',
        options: [
          { id: 'opt1', text: '18', icon: '1️⃣8️⃣' },
          { id: 'opt2', text: '20', icon: '2️⃣0️⃣' },
          { id: 'opt3', text: '22', icon: '2️⃣2️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'D\'abord multiplication: 2 × 5 = 10. Puis addition: 10 + 10 = 20.'
      })
    }

    // ========== CHAPTER 2: GÉOMÉTRIE DE BASE ==========
    
    // ch2-s1: Les figures géométriques simples
    if (section.id === 'ch2-s1') {
      // Exercise 1: Identify circle
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Quelle figure est un cercle?',
        options: [
          { id: 'opt1', text: 'Figure ronde', icon: '⭕' },
          { id: 'opt2', text: 'Figure carrée', icon: '⬜' },
          { id: 'opt3', text: 'Figure triangulaire', icon: '🔺' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Un cercle est une figure ronde où tous les points sont à égale distance du centre.'
      })

      // Exercise 2: Identify square
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Combien de côtés a un carré?',
        options: [
          { id: 'opt1', text: '3 côtés', icon: '3️⃣' },
          { id: 'opt2', text: '4 côtés', icon: '4️⃣' },
          { id: 'opt3', text: '5 côtés', icon: '5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Un carré a 4 côtés égaux et 4 angles droits.'
      })

      // Exercise 3: Identify rectangle
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Quelle figure a 4 côtés avec 2 longs et 2 courts?',
        options: [
          { id: 'opt1', text: 'Carré', icon: '⬜' },
          { id: 'opt2', text: 'Rectangle', icon: '▭' },
          { id: 'opt3', text: 'Triangle', icon: '🔺' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Un rectangle a 4 côtés: 2 longs et 2 courts, avec 4 angles droits.'
      })

      // Exercise 4: Identify triangle
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Combien de côtés a un triangle?',
        options: [
          { id: 'opt1', text: '2 côtés', icon: '2️⃣' },
          { id: 'opt2', text: '3 côtés', icon: '3️⃣' },
          { id: 'opt3', text: '4 côtés', icon: '4️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Un triangle a 3 côtés et 3 angles.'
      })

      // Exercise 5: Compare shapes
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Quelle figure n\'a pas de côtés?',
        options: [
          { id: 'opt1', text: 'Cercle', icon: '⭕' },
          { id: 'opt2', text: 'Carré', icon: '⬜' },
          { id: 'opt3', text: 'Triangle', icon: '🔺' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Un cercle n\'a pas de côtés, c\'est une forme ronde.'
      })

      // Exercise 6: Real-world example
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Quelle figure ressemble à une roue?',
        options: [
          { id: 'opt1', text: 'Cercle', icon: '⭕' },
          { id: 'opt2', text: 'Carré', icon: '⬜' },
          { id: 'opt3', text: 'Rectangle', icon: '▭' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Une roue est ronde, donc c\'est un cercle.'
      })
    }

    // ch2-s2: Mesure et longueur
    if (section.id === 'ch2-s2') {
      // Exercise 1: Unit of measurement
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Quelle unité utilise-t-on pour mesurer une longueur?',
        options: [
          { id: 'opt1', text: 'Centimètre (cm)', icon: '📏' },
          { id: 'opt2', text: 'Kilogramme (kg)', icon: '⚖️' },
          { id: 'opt3', text: 'Litre (L)', icon: '💧' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Le centimètre (cm) est l\'unité pour mesurer les longueurs.'
      })

      // Exercise 2: Compare lengths
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Quelle est la plus longue: 5 cm ou 8 cm?',
        options: [
          { id: 'opt1', text: '5 cm', icon: '5️⃣' },
          { id: 'opt2', text: '8 cm', icon: '8️⃣' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '8 cm est plus long que 5 cm car 8 > 5.'
      })

      // Exercise 3: Meter to centimeter
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Combien de centimètres dans 1 mètre?',
        options: [
          { id: 'opt1', text: '10 cm', icon: '1️⃣0️⃣' },
          { id: 'opt2', text: '100 cm', icon: '1️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '1000 cm', icon: '1️⃣0️⃣0️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1 mètre = 100 centimètres.'
      })

      // Exercise 4: Measure comparison
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Quelle mesure est la plus petite: 12 cm ou 1 m?',
        options: [
          { id: 'opt1', text: '12 cm', icon: '1️⃣2️⃣' },
          { id: 'opt2', text: '1 m', icon: '1️⃣' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '12 cm < 1 m (100 cm) car 12 < 100.'
      })

      // Exercise 5: Real-world measurement
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Quelle unité utilise-t-on pour mesurer la hauteur d\'un élève?',
        options: [
          { id: 'opt1', text: 'Centimètre (cm)', icon: '📏' },
          { id: 'opt2', text: 'Kilogramme (kg)', icon: '⚖️' },
          { id: 'opt3', text: 'Litre (L)', icon: '💧' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'On mesure la hauteur en centimètres (cm) ou mètres (m).'
      })

      // Exercise 6: Length addition
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Un bâton mesure 3 cm et un autre 5 cm. Quelle est la longueur totale?',
        options: [
          { id: 'opt1', text: '6 cm', icon: '6️⃣' },
          { id: 'opt2', text: '7 cm', icon: '7️⃣' },
          { id: 'opt3', text: '8 cm', icon: '8️⃣' }
        ],
        correctAnswer: 2,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3 cm + 5 cm = 8 cm. La longueur totale est 8 cm.'
      })
    }

    // ch2-s3: Périmètre et aire
    if (section.id === 'ch2-s3') {
      // Exercise 1: Perimeter definition
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Qu\'est-ce que le périmètre?',
        options: [
          { id: 'opt1', text: 'La longueur du contour', icon: '📐' },
          { id: 'opt2', text: 'La surface à l\'intérieur', icon: '🟦' },
          { id: 'opt3', text: 'La hauteur de la figure', icon: '📏' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Le périmètre est la longueur du contour d\'une figure.'
      })

      // Exercise 2: Square perimeter
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Calcule le périmètre d\'un carré de 4 cm de côté.',
        options: [
          { id: 'opt1', text: '12 cm', icon: '1️⃣2️⃣' },
          { id: 'opt2', text: '16 cm', icon: '1️⃣6️⃣' },
          { id: 'opt3', text: '20 cm', icon: '2️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Périmètre = 4 × côté = 4 × 4 = 16 cm.'
      })

      // Exercise 3: Rectangle perimeter
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Calcule le périmètre d\'un rectangle de 5 cm × 3 cm.',
        options: [
          { id: 'opt1', text: '14 cm', icon: '1️⃣4️⃣' },
          { id: 'opt2', text: '15 cm', icon: '1️⃣5️⃣' },
          { id: 'opt3', text: '16 cm', icon: '1️⃣6️⃣' }
        ],
        correctAnswer: 2,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Périmètre = 2 × (longueur + largeur) = 2 × (5 + 3) = 16 cm.'
      })

      // Exercise 4: Area definition
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Qu\'est-ce que l\'aire?',
        options: [
          { id: 'opt1', text: 'La longueur du contour', icon: '📐' },
          { id: 'opt2', text: 'La surface à l\'intérieur', icon: '🟦' },
          { id: 'opt3', text: 'La hauteur de la figure', icon: '📏' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'L\'aire est la surface à l\'intérieur d\'une figure.'
      })

      // Exercise 5: Square area
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Calcule l\'aire d\'un carré de 3 cm de côté.',
        options: [
          { id: 'opt1', text: '6 cm²', icon: '6️⃣' },
          { id: 'opt2', text: '9 cm²', icon: '9️⃣' },
          { id: 'opt3', text: '12 cm²', icon: '1️⃣2️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Aire = côté × côté = 3 × 3 = 9 cm².'
      })

      // Exercise 6: Rectangle area
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Calcule l\'aire d\'un rectangle de 6 cm × 2 cm.',
        options: [
          { id: 'opt1', text: '10 cm²', icon: '1️⃣0️⃣' },
          { id: 'opt2', text: '12 cm²', icon: '1️⃣2️⃣' },
          { id: 'opt3', text: '14 cm²', icon: '1️⃣4️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Aire = longueur × largeur = 6 × 2 = 12 cm².'
      })
    }

    // ch2-s4: Symétrie et motifs
    if (section.id === 'ch2-s4') {
      // Exercise 1: Symmetry definition
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Qu\'est-ce que la symétrie?',
        options: [
          { id: 'opt1', text: 'Figure identique de chaque côté d\'une ligne', icon: '🦋' },
          { id: 'opt2', text: 'Figure avec beaucoup de côtés', icon: '⬡' },
          { id: 'opt3', text: 'Figure très grande', icon: '📏' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'La symétrie est quand une figure est identique de chaque côté d\'une ligne (axe).'
      })

      // Exercise 2: Symmetrical shape
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Quelle figure est symétrique?',
        options: [
          { id: 'opt1', text: 'Papillon', icon: '🦋' },
          { id: 'opt2', text: 'Main', icon: '✋' },
          { id: 'opt3', text: 'Lettre F', icon: 'F' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Un papillon est symétrique: les deux ailes sont identiques.'
      })

      // Exercise 3: Pattern definition
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Qu\'est-ce qu\'un motif?',
        options: [
          { id: 'opt1', text: 'Un dessin qui se répète', icon: '🔄' },
          { id: 'opt2', text: 'Une figure très grande', icon: '📏' },
          { id: 'opt3', text: 'Un nombre', icon: '🔢' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Un motif est un dessin qui se répète, comme sur un tapis ou un tissu.'
      })

      // Exercise 4: Pattern example
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Où voit-on souvent des motifs?',
        options: [
          { id: 'opt1', text: 'Sur les tapis et tissus', icon: '🧵' },
          { id: 'opt2', text: 'Dans les nombres', icon: '🔢' },
          { id: 'opt3', text: 'Dans les calculs', icon: '➕' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Les motifs se trouvent sur les tapis, tissus, carrelages, etc.'
      })

      // Exercise 5: Axis of symmetry
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Qu\'est-ce qu\'un axe de symétrie?',
        options: [
          { id: 'opt1', text: 'La ligne qui divise une figure en deux parties identiques', icon: '📐' },
          { id: 'opt2', text: 'Le côté d\'une figure', icon: '⬜' },
          { id: 'opt3', text: 'La hauteur d\'une figure', icon: '📏' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'L\'axe de symétrie est la ligne qui divise une figure en deux parties identiques.'
      })

      // Exercise 6: Creating patterns
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Comment crée-t-on un motif?',
        options: [
          { id: 'opt1', text: 'En répétant un élément simple', icon: '🔄' },
          { id: 'opt2', text: 'En dessinant une seule fois', icon: '✏️' },
          { id: 'opt3', text: 'En mesurant', icon: '📏' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'On crée un motif en dessinant un élément simple et en le répétant.'
      })
    }

    // ch2-s5: Exercices d'application
    if (section.id === 'ch2-s5') {
      // Exercise 1: Complex perimeter
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Une chambre fait 4 m × 3 m. Quel est son périmètre?',
        options: [
          { id: 'opt1', text: '12 m', icon: '1️⃣2️⃣' },
          { id: 'opt2', text: '14 m', icon: '1️⃣4️⃣' },
          { id: 'opt3', text: '16 m', icon: '1️⃣6️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Périmètre = 2 × (4 + 3) = 2 × 7 = 14 m.'
      })

      // Exercise 2: Complex area
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Une chambre fait 4 m × 3 m. Quelle est son aire?',
        options: [
          { id: 'opt1', text: '10 m²', icon: '1️⃣0️⃣' },
          { id: 'opt2', text: '12 m²', icon: '1️⃣2️⃣' },
          { id: 'opt3', text: '14 m²', icon: '1️⃣4️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Aire = longueur × largeur = 4 × 3 = 12 m².'
      })

      // Exercise 3: Shape identification review
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Quelle figure a 4 côtés égaux?',
        options: [
          { id: 'opt1', text: 'Carré', icon: '⬜' },
          { id: 'opt2', text: 'Rectangle', icon: '▭' },
          { id: 'opt3', text: 'Triangle', icon: '🔺' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Un carré a 4 côtés égaux et 4 angles droits.'
      })

      // Exercise 4: Measurement review
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Quelle est la plus longue: 50 cm ou 1 m?',
        options: [
          { id: 'opt1', text: '50 cm', icon: '5️⃣0️⃣' },
          { id: 'opt2', text: '1 m', icon: '1️⃣' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1 m = 100 cm, donc 1 m > 50 cm.'
      })

      // Exercise 5: Perimeter calculation
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Calcule le périmètre d\'un carré de 5 cm de côté.',
        options: [
          { id: 'opt1', text: '15 cm', icon: '1️⃣5️⃣' },
          { id: 'opt2', text: '20 cm', icon: '2️⃣0️⃣' },
          { id: 'opt3', text: '25 cm', icon: '2️⃣5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Périmètre = 4 × côté = 4 × 5 = 20 cm.'
      })

      // Exercise 6: Area calculation
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Calcule l\'aire d\'un rectangle de 7 cm × 2 cm.',
        options: [
          { id: 'opt1', text: '12 cm²', icon: '1️⃣2️⃣' },
          { id: 'opt2', text: '14 cm²', icon: '1️⃣4️⃣' },
          { id: 'opt3', text: '16 cm²', icon: '1️⃣6️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Aire = longueur × largeur = 7 × 2 = 14 cm².'
      })
    }

    // ========== CHAPTER 3: MESURE ET GRANDEURS ==========
    
    // ch3-s1: Le temps et les heures
    if (section.id === 'ch3-s1') {
      // Exercise 1: Read time
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Quelle aiguille indique les heures sur une horloge?',
        options: [
          { id: 'opt1', text: 'Aiguille courte', icon: '🕐' },
          { id: 'opt2', text: 'Aiguille longue', icon: '🕑' },
          { id: 'opt3', text: 'Les deux', icon: '⏰' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'L\'aiguille courte indique les heures, l\'aiguille longue indique les minutes.'
      })

      // Exercise 2: Time units
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Combien de minutes dans 1 heure?',
        options: [
          { id: 'opt1', text: '30 minutes', icon: '3️⃣0️⃣' },
          { id: 'opt2', text: '60 minutes', icon: '6️⃣0️⃣' },
          { id: 'opt3', text: '100 minutes', icon: '1️⃣0️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1 heure = 60 minutes.'
      })

      // Exercise 3: Read time
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Comment lis-tu 14h30?',
        options: [
          { id: 'opt1', text: 'Quatorze heures trente', icon: '🕐' },
          { id: 'opt2', text: 'Deux heures trente', icon: '🕑' },
          { id: 'opt3', text: 'Quatre heures trente', icon: '🕒' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '14h30 se lit "quatorze heures trente" (2h30 de l\'après-midi).'
      })

      // Exercise 4: Time of day
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'À quelle période de la journée est 15h00?',
        options: [
          { id: 'opt1', text: 'Matin', icon: '🌅' },
          { id: 'opt2', text: 'Après-midi', icon: '☀️' },
          { id: 'opt3', text: 'Soir', icon: '🌙' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '15h00 (3h de l\'après-midi) est dans l\'après-midi (12h à 18h).'
      })

      // Exercise 5: Convert time
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Combien de minutes dans 2 heures?',
        options: [
          { id: 'opt1', text: '100 minutes', icon: '1️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '120 minutes', icon: '1️⃣2️⃣0️⃣' },
          { id: 'opt3', text: '200 minutes', icon: '2️⃣0️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '2 heures = 2 × 60 = 120 minutes.'
      })

      // Exercise 6: Time vocabulary
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Quelle période va de 6h à 12h?',
        options: [
          { id: 'opt1', text: 'Matin', icon: '🌅' },
          { id: 'opt2', text: 'Après-midi', icon: '☀️' },
          { id: 'opt3', text: 'Soir', icon: '🌙' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Le matin va de 6h à 12h.'
      })
    }

    // ch3-s2: La monnaie et les prix
    if (section.id === 'ch3-s2') {
      // Exercise 1: Currency
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Quelle est la monnaie de la Mauritanie?',
        options: [
          { id: 'opt1', text: 'Ouguiya (MRU)', icon: '💰' },
          { id: 'opt2', text: 'Franc', icon: '💵' },
          { id: 'opt3', text: 'Dollar', icon: '💲' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'La monnaie de la Mauritanie est l\'ouguiya (MRU).'
      })

      // Exercise 2: Calculate price
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Calcule le prix total: 20 MRU + 30 MRU + 15 MRU',
        options: [
          { id: 'opt1', text: '55 MRU', icon: '5️⃣5️⃣' },
          { id: 'opt2', text: '65 MRU', icon: '6️⃣5️⃣' },
          { id: 'opt3', text: '75 MRU', icon: '7️⃣5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '20 + 30 + 15 = 65 MRU.'
      })

      // Exercise 3: Change calculation
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Tu donnes 100 MRU pour un achat de 75 MRU. Combien on te rend?',
        options: [
          { id: 'opt1', text: '15 MRU', icon: '1️⃣5️⃣' },
          { id: 'opt2', text: '25 MRU', icon: '2️⃣5️⃣' },
          { id: 'opt3', text: '35 MRU', icon: '3️⃣5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '100 - 75 = 25 MRU de monnaie.'
      })

      // Exercise 4: Multiple items
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Un pain coûte 20 MRU. Combien coûtent 3 pains?',
        options: [
          { id: 'opt1', text: '50 MRU', icon: '5️⃣0️⃣' },
          { id: 'opt2', text: '60 MRU', icon: '6️⃣0️⃣' },
          { id: 'opt3', text: '70 MRU', icon: '7️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3 × 20 = 60 MRU.'
      })

      // Exercise 5: Bill value
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Quelle est la valeur d\'un billet de 100 ouguiyas?',
        options: [
          { id: 'opt1', text: '50 MRU', icon: '5️⃣0️⃣' },
          { id: 'opt2', text: '100 MRU', icon: '1️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '200 MRU', icon: '2️⃣0️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Un billet de 100 ouguiyas vaut 100 MRU.'
      })

      // Exercise 6: Total cost
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Fatima achète 2 cahiers à 25 MRU chacun et 1 stylo à 15 MRU. Combien paie-t-elle?',
        options: [
          { id: 'opt1', text: '55 MRU', icon: '5️⃣5️⃣' },
          { id: 'opt2', text: '65 MRU', icon: '6️⃣5️⃣' },
          { id: 'opt3', text: '75 MRU', icon: '7️⃣5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '2 × 25 + 15 = 50 + 15 = 65 MRU.'
      })
    }

    // ch3-s3: Masse et poids
    if (section.id === 'ch3-s3') {
      // Exercise 1: Mass unit
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Quelle est l\'unité pour mesurer la masse?',
        options: [
          { id: 'opt1', text: 'Kilogramme (kg)', icon: '⚖️' },
          { id: 'opt2', text: 'Litre (L)', icon: '💧' },
          { id: 'opt3', text: 'Mètre (m)', icon: '📏' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'On mesure la masse en kilogrammes (kg) ou grammes (g).'
      })

      // Exercise 2: Convert kg to g
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Combien de grammes dans 1 kilogramme?',
        options: [
          { id: 'opt1', text: '100 g', icon: '1️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '1000 g', icon: '1️⃣0️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '10 g', icon: '1️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1 kilogramme = 1000 grammes.'
      })

      // Exercise 3: Convert 2 kg
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Combien de grammes dans 2 kilogrammes?',
        options: [
          { id: 'opt1', text: '200 g', icon: '2️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '2000 g', icon: '2️⃣0️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '20 g', icon: '2️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '2 kg = 2 × 1000 = 2000 g.'
      })

      // Exercise 4: Compare masses
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Quelle est la plus lourde: 500 g ou 1 kg?',
        options: [
          { id: 'opt1', text: '500 g', icon: '5️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '1 kg', icon: '1️⃣' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1 kg = 1000 g, donc 1 kg > 500 g.'
      })

      // Exercise 5: Measure tool
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Quel outil utilise-t-on pour mesurer la masse?',
        options: [
          { id: 'opt1', text: 'Balance', icon: '⚖️' },
          { id: 'opt2', text: 'Règle', icon: '📏' },
          { id: 'opt3', text: 'Verre gradué', icon: '💧' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'On utilise une balance pour mesurer la masse.'
      })

      // Exercise 6: Convert 1.5 kg
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Combien de grammes dans 1,5 kilogrammes?',
        options: [
          { id: 'opt1', text: '150 g', icon: '1️⃣5️⃣0️⃣' },
          { id: 'opt2', text: '1500 g', icon: '1️⃣5️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '15 g', icon: '1️⃣5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1,5 kg = 1,5 × 1000 = 1500 g.'
      })
    }

    // ch3-s4: Volume et capacité
    if (section.id === 'ch3-s4') {
      // Exercise 1: Volume unit
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Quelle est l\'unité pour mesurer le volume d\'un liquide?',
        options: [
          { id: 'opt1', text: 'Litre (L)', icon: '💧' },
          { id: 'opt2', text: 'Kilogramme (kg)', icon: '⚖️' },
          { id: 'opt3', text: 'Mètre (m)', icon: '📏' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'On mesure le volume en litres (L) ou millilitres (ml).'
      })

      // Exercise 2: Convert L to ml
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Combien de millilitres dans 1 litre?',
        options: [
          { id: 'opt1', text: '100 ml', icon: '1️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '1000 ml', icon: '1️⃣0️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '10 ml', icon: '1️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1 litre = 1000 millilitres.'
      })

      // Exercise 3: Convert 2 L
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Combien de millilitres dans 2 litres?',
        options: [
          { id: 'opt1', text: '200 ml', icon: '2️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '2000 ml', icon: '2️⃣0️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '20 ml', icon: '2️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '2 L = 2 × 1000 = 2000 ml.'
      })

      // Exercise 4: Compare volumes
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Quelle est la plus grande: 500 ml ou 1 L?',
        options: [
          { id: 'opt1', text: '500 ml', icon: '5️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '1 L', icon: '1️⃣' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1 L = 1000 ml, donc 1 L > 500 ml.'
      })

      // Exercise 5: Measure tool
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Quel outil utilise-t-on pour mesurer un liquide?',
        options: [
          { id: 'opt1', text: 'Verre gradué', icon: '🥛' },
          { id: 'opt2', text: 'Balance', icon: '⚖️' },
          { id: 'opt3', text: 'Règle', icon: '📏' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'On utilise un verre gradué pour mesurer les liquides.'
      })

      // Exercise 6: Convert 1.5 L
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Combien de millilitres dans 1,5 litre?',
        options: [
          { id: 'opt1', text: '150 ml', icon: '1️⃣5️⃣0️⃣' },
          { id: 'opt2', text: '1500 ml', icon: '1️⃣5️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '15 ml', icon: '1️⃣5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1,5 L = 1,5 × 1000 = 1500 ml.'
      })
    }

    // ch3-s5: Exercices d'application
    if (section.id === 'ch3-s5') {
      // Exercise 1: Mixed conversion
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Convertis 2,5 kg en grammes.',
        options: [
          { id: 'opt1', text: '250 g', icon: '2️⃣5️⃣0️⃣' },
          { id: 'opt2', text: '2500 g', icon: '2️⃣5️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '25 g', icon: '2️⃣5️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '2,5 kg = 2,5 × 1000 = 2500 g.'
      })

      // Exercise 2: Price calculation
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Ahmed achète 3 kg de riz à 150 MRU/kg. Combien paie-t-il?',
        options: [
          { id: 'opt1', text: '400 MRU', icon: '4️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '450 MRU', icon: '4️⃣5️⃣0️⃣' },
          { id: 'opt3', text: '500 MRU', icon: '5️⃣0️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3 × 150 = 450 MRU.'
      })

      // Exercise 3: Time calculation
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Combien de minutes dans 1,5 heure?',
        options: [
          { id: 'opt1', text: '60 minutes', icon: '6️⃣0️⃣' },
          { id: 'opt2', text: '90 minutes', icon: '9️⃣0️⃣' },
          { id: 'opt3', text: '120 minutes', icon: '1️⃣2️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1,5 h = 1,5 × 60 = 90 minutes.'
      })

      // Exercise 4: Volume conversion
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Convertis 2500 ml en litres.',
        options: [
          { id: 'opt1', text: '2,5 L', icon: '2️⃣.5️⃣' },
          { id: 'opt2', text: '25 L', icon: '2️⃣5️⃣' },
          { id: 'opt3', text: '250 L', icon: '2️⃣5️⃣0️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '2500 ml = 2500 ÷ 1000 = 2,5 L.'
      })

      // Exercise 5: Complex price
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Fatima achète 2 L d\'huile à 200 MRU/L et 1 kg de sucre à 100 MRU/kg. Combien paie-t-elle?',
        options: [
          { id: 'opt1', text: '400 MRU', icon: '4️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '500 MRU', icon: '5️⃣0️⃣0️⃣' },
          { id: 'opt3', text: '600 MRU', icon: '6️⃣0️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '2 × 200 + 1 × 100 = 400 + 100 = 500 MRU.'
      })

      // Exercise 6: Change calculation
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Mohamed donne 500 MRU pour un achat de 375 MRU. Combien on lui rend?',
        options: [
          { id: 'opt1', text: '100 MRU', icon: '1️⃣0️⃣0️⃣' },
          { id: 'opt2', text: '125 MRU', icon: '1️⃣2️⃣5️⃣' },
          { id: 'opt3', text: '150 MRU', icon: '1️⃣5️⃣0️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '500 - 375 = 125 MRU de monnaie.'
      })
    }

    // ========== CHAPTER 4: LES FRACTIONS ==========
    
    // ch4-s1: Introduction aux fractions
    if (section.id === 'ch4-s1') {
      // Exercise 1: Fraction definition
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Qu\'est-ce qu\'une fraction?',
        options: [
          { id: 'opt1', text: 'Une partie d\'un tout divisé en parts égales', icon: '🍰' },
          { id: 'opt2', text: 'Un nombre entier', icon: '🔢' },
          { id: 'opt3', text: 'Une opération', icon: '➕' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Une fraction représente une partie d\'un tout divisé en parts égales.'
      })

      // Exercise 2: Read fraction
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Comment lis-tu la fraction 1/2?',
        options: [
          { id: 'opt1', text: 'Un demi', icon: '½' },
          { id: 'opt2', text: 'Un tiers', icon: '⅓' },
          { id: 'opt3', text: 'Un quart', icon: '¼' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/2 se lit "un demi" ou "une demi".'
      })

      // Exercise 3: Numerator
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Dans la fraction 3/4, quel est le numérateur?',
        options: [
          { id: 'opt1', text: '3', icon: '3️⃣' },
          { id: 'opt2', text: '4', icon: '4️⃣' },
          { id: 'opt3', text: '7', icon: '7️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Le numérateur est le nombre au-dessus de la barre. Dans 3/4, c\'est 3.'
      })

      // Exercise 4: Denominator
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Dans la fraction 2/5, quel est le dénominateur?',
        options: [
          { id: 'opt1', text: '2', icon: '2️⃣' },
          { id: 'opt2', text: '5', icon: '5️⃣' },
          { id: 'opt3', text: '7', icon: '7️⃣' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Le dénominateur est le nombre en-dessous de la barre. Dans 2/5, c\'est 5.'
      })

      // Exercise 5: Read fraction
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Comment lis-tu la fraction 1/4?',
        options: [
          { id: 'opt1', text: 'Un quart', icon: '¼' },
          { id: 'opt2', text: 'Un demi', icon: '½' },
          { id: 'opt3', text: 'Un tiers', icon: '⅓' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/4 se lit "un quart".'
      })

      // Exercise 6: Visual representation
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Si tu partages un gâteau en 4 parts égales et tu en prends 1, quelle fraction as-tu?',
        options: [
          { id: 'opt1', text: '1/4', icon: '¼' },
          { id: 'opt2', text: '1/2', icon: '½' },
          { id: 'opt3', text: '1/3', icon: '⅓' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1 part sur 4 = 1/4 (un quart).'
      })
    }

    // ch4-s2: Fractions équivalentes
    if (section.id === 'ch4-s2') {
      // Exercise 1: Equivalent definition
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Que signifie "fractions équivalentes"?',
        options: [
          { id: 'opt1', text: 'Fractions qui représentent la même quantité', icon: '⚖️' },
          { id: 'opt2', text: 'Fractions avec le même numérateur', icon: '🔢' },
          { id: 'opt3', text: 'Fractions avec le même dénominateur', icon: '🔢' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Des fractions équivalentes représentent la même quantité (ex: 1/2 = 2/4).'
      })

      // Exercise 2: Find equivalent
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Quelle fraction est équivalente à 1/2?',
        options: [
          { id: 'opt1', text: '2/4', icon: '2️⃣/4️⃣' },
          { id: 'opt2', text: '1/3', icon: '1️⃣/3️⃣' },
          { id: 'opt3', text: '2/3', icon: '2️⃣/3️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/2 = 2/4 car les deux représentent la moitié.'
      })

      // Exercise 3: Simplify fraction
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Simplifie la fraction 4/8.',
        options: [
          { id: 'opt1', text: '1/2', icon: '½' },
          { id: 'opt2', text: '2/4', icon: '2️⃣/4️⃣' },
          { id: 'opt3', text: '4/8', icon: '4️⃣/8️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '4/8 = 1/2 (on divise par 4: 4÷4=1, 8÷4=2).'
      })

      // Exercise 4: Equivalent to 1/3
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Quelle fraction est équivalente à 1/3?',
        options: [
          { id: 'opt1', text: '2/6', icon: '2️⃣/6️⃣' },
          { id: 'opt2', text: '2/4', icon: '2️⃣/4️⃣' },
          { id: 'opt3', text: '3/4', icon: '3️⃣/4️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/3 = 2/6 car on multiplie par 2: 1×2=2, 3×2=6.'
      })

      // Exercise 5: Simplify 6/12
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Simplifie la fraction 6/12.',
        options: [
          { id: 'opt1', text: '1/2', icon: '½' },
          { id: 'opt2', text: '2/4', icon: '2️⃣/4️⃣' },
          { id: 'opt3', text: '3/6', icon: '3️⃣/6️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '6/12 = 1/2 (on divise par 6: 6÷6=1, 12÷6=2).'
      })

      // Exercise 6: Verify equivalence
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Vérifie: 2/4 = 1/2. Est-ce vrai?',
        options: [
          { id: 'opt1', text: 'Oui, c\'est vrai', icon: '✅' },
          { id: 'opt2', text: 'Non, c\'est faux', icon: '❌' },
          { id: 'opt3', text: 'Je ne sais pas', icon: '❓' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Oui! 2/4 = 1/2 car les deux représentent la moitié.'
      })
    }

    // ch4-s3: Comparaison de fractions
    if (section.id === 'ch4-s3') {
      // Exercise 1: Compare same denominator
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Quelle fraction est plus grande: 2/5 ou 3/5?',
        options: [
          { id: 'opt1', text: '2/5', icon: '2️⃣/5️⃣' },
          { id: 'opt2', text: '3/5', icon: '3️⃣/5️⃣' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3/5 > 2/5 car avec le même dénominateur, on compare les numérateurs: 3 > 2.'
      })

      // Exercise 2: Compare same numerator
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Quelle fraction est plus grande: 1/3 ou 1/4?',
        options: [
          { id: 'opt1', text: '1/3', icon: '1️⃣/3️⃣' },
          { id: 'opt2', text: '1/4', icon: '1️⃣/4️⃣' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/3 > 1/4 car avec le même numérateur, plus le dénominateur est petit, plus la fraction est grande.'
      })

      // Exercise 3: Compare fractions
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Quelle fraction est plus petite: 1/2 ou 1/3?',
        options: [
          { id: 'opt1', text: '1/2', icon: '½' },
          { id: 'opt2', text: '1/3', icon: '⅓' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/3 < 1/2 car 1/2 est la moitié et 1/3 est moins que la moitié.'
      })

      // Exercise 4: Order fractions
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Range ces fractions du plus petit au plus grand: 1/4, 1/2, 1/3',
        options: [
          { id: 'opt1', text: '1/4, 1/3, 1/2', icon: '📊' },
          { id: 'opt2', text: '1/2, 1/3, 1/4', icon: '📊' },
          { id: 'opt3', text: '1/3, 1/4, 1/2', icon: '📊' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/4 < 1/3 < 1/2. Plus le dénominateur est grand, plus la fraction est petite.'
      })

      // Exercise 5: Compare 2/3 and 3/4
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Quelle fraction est plus grande: 2/3 ou 3/4?',
        options: [
          { id: 'opt1', text: '2/3', icon: '2️⃣/3️⃣' },
          { id: 'opt2', text: '3/4', icon: '3️⃣/4️⃣' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3/4 > 2/3 car 3/4 = 0,75 et 2/3 ≈ 0,67.'
      })

      // Exercise 6: Compare 1/2 and 2/4
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Compare 1/2 et 2/4. Quelle est la relation?',
        options: [
          { id: 'opt1', text: '1/2 = 2/4', icon: '⚖️' },
          { id: 'opt2', text: '1/2 > 2/4', icon: '⬆️' },
          { id: 'opt3', text: '1/2 < 2/4', icon: '⬇️' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/2 = 2/4 car ce sont des fractions équivalentes (même quantité).'
      })
    }

    // ch4-s4: Addition et soustraction de fractions
    if (section.id === 'ch4-s4') {
      // Exercise 1: Add same denominator
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 1/4 + 2/4 = ?',
        options: [
          { id: 'opt1', text: '3/4', icon: '¾' },
          { id: 'opt2', text: '3/8', icon: '3️⃣/8️⃣' },
          { id: 'opt3', text: '1/2', icon: '½' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/4 + 2/4 = 3/4. Avec le même dénominateur, on additionne les numérateurs.'
      })

      // Exercise 2: Add fractions
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 1/5 + 2/5 = ?',
        options: [
          { id: 'opt1', text: '3/5', icon: '3️⃣/5️⃣' },
          { id: 'opt2', text: '3/10', icon: '3️⃣/1️⃣0️⃣' },
          { id: 'opt3', text: '1/2', icon: '½' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/5 + 2/5 = 3/5. On additionne les numérateurs, le dénominateur reste 5.'
      })

      // Exercise 3: Subtract same denominator
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 3/4 - 1/4 = ?',
        options: [
          { id: 'opt1', text: '2/4', icon: '2️⃣/4️⃣' },
          { id: 'opt2', text: '1/2', icon: '½' },
          { id: 'opt3', text: '2/8', icon: '2️⃣/8️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3/4 - 1/4 = 2/4. Avec le même dénominateur, on soustrait les numérateurs.'
      })

      // Exercise 4: Simplify result
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Calcule et simplifie: 2/4 + 1/4 = ?',
        options: [
          { id: 'opt1', text: '3/4', icon: '¾' },
          { id: 'opt2', text: '1/2', icon: '½' },
          { id: 'opt3', text: '1/4', icon: '¼' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '2/4 + 1/4 = 3/4. On ne peut pas simplifier 3/4.'
      })

      // Exercise 5: Subtract fractions
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 4/5 - 2/5 = ?',
        options: [
          { id: 'opt1', text: '2/5', icon: '2️⃣/5️⃣' },
          { id: 'opt2', text: '2/10', icon: '2️⃣/1️⃣0️⃣' },
          { id: 'opt3', text: '1/2', icon: '½' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '4/5 - 2/5 = 2/5. On soustrait les numérateurs, le dénominateur reste 5.'
      })

      // Exercise 6: Add and simplify
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 1/6 + 2/6 = ?',
        options: [
          { id: 'opt1', text: '3/6', icon: '3️⃣/6️⃣' },
          { id: 'opt2', text: '1/2', icon: '½' },
          { id: 'opt3', text: '3/12', icon: '3️⃣/1️⃣2️⃣' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/6 + 2/6 = 3/6. On peut simplifier: 3/6 = 1/2.'
      })
    }

    // ch4-s5: Exercices d'application
    if (section.id === 'ch4-s5') {
      // Exercise 1: Mixed operations
      exercises.push({
        id: `ex-${section.id}-mc-1`,
        type: 'multiple_choice_visual',
        question: 'Calcule: 1/3 + 1/3 = ?',
        options: [
          { id: 'opt1', text: '2/3', icon: '⅔' },
          { id: 'opt2', text: '2/6', icon: '2️⃣/6️⃣' },
          { id: 'opt3', text: '1/2', icon: '½' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/3 + 1/3 = 2/3.'
      })

      // Exercise 2: Compare and add
      exercises.push({
        id: `ex-${section.id}-mc-2`,
        type: 'multiple_choice_visual',
        question: 'Fatima mange 1/4 d\'un gâteau et Ahmed en mange 1/4. Quelle fraction ont-ils mangée ensemble?',
        options: [
          { id: 'opt1', text: '1/2', icon: '½' },
          { id: 'opt2', text: '2/4', icon: '2️⃣/4️⃣' },
          { id: 'opt3', text: '1/4', icon: '¼' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/4 + 1/4 = 2/4 = 1/2. Ils ont mangé la moitié du gâteau.'
      })

      // Exercise 3: Subtract and simplify
      exercises.push({
        id: `ex-${section.id}-mc-3`,
        type: 'multiple_choice_visual',
        question: 'Calcule et simplifie: 5/6 - 2/6 = ?',
        options: [
          { id: 'opt1', text: '3/6', icon: '3️⃣/6️⃣' },
          { id: 'opt2', text: '1/2', icon: '½' },
          { id: 'opt3', text: '1/3', icon: '⅓' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '5/6 - 2/6 = 3/6. On peut simplifier: 3/6 = 1/2.'
      })

      // Exercise 4: Real-world problem
      exercises.push({
        id: `ex-${section.id}-mc-4`,
        type: 'multiple_choice_visual',
        question: 'Un pain est partagé en 8 parts. Mohamed en prend 3 parts. Quelle fraction a-t-il?',
        options: [
          { id: 'opt1', text: '3/8', icon: '3️⃣/8️⃣' },
          { id: 'opt2', text: '1/3', icon: '⅓' },
          { id: 'opt3', text: '1/4', icon: '¼' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3 parts sur 8 = 3/8.'
      })

      // Exercise 5: Compare fractions
      exercises.push({
        id: `ex-${section.id}-mc-5`,
        type: 'multiple_choice_visual',
        question: 'Quelle fraction est plus grande: 1/2 ou 3/4?',
        options: [
          { id: 'opt1', text: '1/2', icon: '½' },
          { id: 'opt2', text: '3/4', icon: '¾' },
          { id: 'opt3', text: 'Elles sont égales', icon: '⚖️' }
        ],
        correctAnswer: 1,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '3/4 > 1/2 car 3/4 = 0,75 et 1/2 = 0,5.'
      })

      // Exercise 6: Equivalent review
      exercises.push({
        id: `ex-${section.id}-mc-6`,
        type: 'multiple_choice_visual',
        question: 'Quelle fraction est équivalente à 1/2?',
        options: [
          { id: 'opt1', text: '2/4', icon: '2️⃣/4️⃣' },
          { id: 'opt2', text: '1/3', icon: '⅓' },
          { id: 'opt3', text: '2/3', icon: '⅔' }
        ],
        correctAnswer: 0,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: '1/2 = 2/4 car les deux représentent la moitié.'
      })
    }

    return exercises.slice(0, count)
  }

  /**
   * Generate fill-in-blank exercises (30% of total)
   */
  private static generateFillInBlank(section: any, count: number): FillInBlankExercise[] {
    const exercises: FillInBlankExercise[] = []

    // ch1-s1: Les nombres entiers naturels
    if (section.id === 'ch1-s1') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Écris en chiffres: vingt-cinq = ___',
        correctAnswer: '25',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Vingt = 20', 'Cinq = 5', 'Vingt-cinq = 25']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Écris en chiffres: quarante-deux = ___',
        correctAnswer: '42',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Quarante = 40', 'Deux = 2', 'Quarante-deux = 42']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Écris en chiffres: soixante-dix = ___',
        correctAnswer: '70',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Soixante = 60', 'Dix = 10', 'Soixante-dix = 70']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Quel nombre est plus grand: 18 ou ___? (Réponds avec un nombre plus grand que 18)',
        correctAnswer: '19',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Pense à un nombre plus grand que 18', '19, 20, 21...']
      })
    }

    // ch1-s2: Addition et soustraction
    if (section.id === 'ch1-s2') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: '15 + ___ = 20',
        correctAnswer: '5',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne les unités: 5 + ? = 0', 'Pense à 15 + 5 = 20']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: '12 - ___ = 8',
        correctAnswer: '4',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['12 - ? = 8', 'Pense à 12 - 4 = 8']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: '7 + ___ = 15',
        correctAnswer: '8',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['7 + ? = 15', 'Pense à 7 + 8 = 15']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: '20 - ___ = 12',
        correctAnswer: '8',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['20 - ? = 12', 'Pense à 20 - 8 = 12']
      })
    }

    // ch1-s3: Multiplication et division
    if (section.id === 'ch1-s3') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: '2 × ___ = 10',
        correctAnswer: '5',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2 × ? = 10', 'Pense à la table de 2', '2 × 5 = 10']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: '15 ÷ ___ = 3',
        correctAnswer: '5',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['15 ÷ ? = 3', 'Pense à 15 ÷ 5 = 3']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: '5 × ___ = 25',
        correctAnswer: '5',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['5 × ? = 25', 'Pense à la table de 5', '5 × 5 = 25']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: '20 ÷ ___ = 4',
        correctAnswer: '5',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['20 ÷ ? = 4', 'Pense à 20 ÷ 5 = 4']
      })
    }

    // ch1-s4: Problèmes de calcul
    if (section.id === 'ch1-s4') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Ahmed a 12 ans. Sa sœur a 8 ans. Combien d\'années ont-ils ensemble? Réponse: ___',
        correctAnswer: '20',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne les deux âges', '12 + 8 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Dans une classe, il y a 25 élèves. 10 sont des filles. Combien y a-t-il de garçons? Réponse: ___',
        correctAnswer: '15',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Soustrais le nombre de filles du total', '25 - 10 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Chaque élève a 4 crayons. S\'il y a 6 élèves, combien de crayons en tout? Réponse: ___',
        correctAnswer: '24',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Multiplie le nombre de crayons par le nombre d\'élèves', '4 × 6 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: '18 bonbons à partager entre 3 enfants. Combien chacun? Réponse: ___',
        correctAnswer: '6',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Divise le total par le nombre d\'enfants', '18 ÷ 3 = ?']
      })
    }

    // ch1-s5: Révision et consolidation
    if (section.id === 'ch1-s5') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Calcule: 3 × 4 + 5 = ___',
        correctAnswer: '17',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['D\'abord multiplication: 3 × 4 = 12', 'Puis addition: 12 + 5 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Calcule: 20 - 3 × 2 = ___',
        correctAnswer: '14',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['D\'abord multiplication: 3 × 2 = 6', 'Puis soustraction: 20 - 6 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Calcule: 15 ÷ 3 + 7 = ___',
        correctAnswer: '12',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['D\'abord division: 15 ÷ 3 = 5', 'Puis addition: 5 + 7 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Mohamed a 25 ouguiyas. Il achète 3 livres à 6 ouguiyas chacun. Combien lui reste-t-il? Réponse: ___',
        correctAnswer: '7',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Calcule la dépense: 3 × 6 = 18', 'Puis soustrais: 25 - 18 = ?']
      })
    }

    // ========== CHAPTER 2: GÉOMÉTRIE DE BASE ==========
    
    // ch2-s1: Les figures géométriques simples
    if (section.id === 'ch2-s1') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Un carré a ___ côtés.',
        correctAnswer: '4',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Un carré a 4 côtés égaux', 'Pense à un carreau de carrelage']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Un triangle a ___ côtés.',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Un triangle a 3 côtés', 'Pense à un toit de maison']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Un cercle a ___ côtés.',
        correctAnswer: '0',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Un cercle n\'a pas de côtés', 'C\'est une forme ronde']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Un rectangle a ___ angles droits.',
        correctAnswer: '4',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Un rectangle a 4 angles droits', 'Comme une porte ou un livre']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Quelle figure ressemble à une roue? Réponse: ___',
        correctAnswer: 'cercle',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Une roue est ronde', 'C\'est un cercle']
      })
    }

    // ch2-s2: Mesure et longueur
    if (section.id === 'ch2-s2') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: '1 mètre = ___ centimètres',
        correctAnswer: '100',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 m = 100 cm', 'Un mètre contient 100 centimètres']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: '5 cm + 3 cm = ___ cm',
        correctAnswer: '8',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne les deux longueurs', '5 + 3 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Quelle est la plus longue: 12 cm ou 1 m? Réponse: ___',
        correctAnswer: '1 m',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 m = 100 cm', '100 > 12, donc 1 m est plus long']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'On mesure une longueur en ___ (unité)',
        correctAnswer: 'cm',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Centimètre', 'Ou mètre (m)']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Un bâton de 10 cm et un autre de 5 cm. Longueur totale: ___ cm',
        correctAnswer: '15',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne: 10 + 5 = ?']
      })
    }

    // ch2-s3: Périmètre et aire
    if (section.id === 'ch2-s3') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Périmètre d\'un carré de 3 cm: ___ cm (formule: 4 × côté)',
        correctAnswer: '12',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Périmètre = 4 × 3', '4 × 3 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Aire d\'un carré de 4 cm: ___ cm² (formule: côté × côté)',
        correctAnswer: '16',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Aire = 4 × 4', '4 × 4 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Périmètre d\'un rectangle 5 cm × 2 cm: ___ cm',
        correctAnswer: '14',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Périmètre = 2 × (5 + 2)', '2 × 7 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Aire d\'un rectangle 6 cm × 3 cm: ___ cm²',
        correctAnswer: '18',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Aire = 6 × 3', '6 × 3 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Le périmètre est la longueur du ___ d\'une figure.',
        correctAnswer: 'contour',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Le tour de la figure', 'Le contour']
      })
    }

    // ch2-s4: Symétrie et motifs
    if (section.id === 'ch2-s4') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'La symétrie est quand une figure est identique de chaque côté d\'une ___.',
        correctAnswer: 'ligne',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['L\'axe de symétrie', 'Une ligne']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Un motif est un dessin qui se ___.',
        correctAnswer: 'répète',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Qui se répète', 'Comme sur un tapis']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Un papillon est ___. (symétrique ou non symétrique)',
        correctAnswer: 'symétrique',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Les deux ailes sont identiques', 'Symétrique']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'On voit souvent des motifs sur les ___ et les tissus.',
        correctAnswer: 'tapis',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Les tapis mauritaniens', 'Tapis']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'L\'axe de symétrie divise une figure en ___ parties identiques.',
        correctAnswer: 'deux',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Deux moitiés', 'Deux']
      })
    }

    // ch2-s5: Exercices d'application
    if (section.id === 'ch2-s5') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Une chambre 4 m × 3 m. Périmètre: ___ m',
        correctAnswer: '14',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Périmètre = 2 × (4 + 3)', '2 × 7 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Une chambre 4 m × 3 m. Aire: ___ m²',
        correctAnswer: '12',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Aire = 4 × 3', '4 × 3 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Un carré de 5 cm. Périmètre: ___ cm',
        correctAnswer: '20',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Périmètre = 4 × 5', '4 × 5 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Un rectangle 7 cm × 2 cm. Aire: ___ cm²',
        correctAnswer: '14',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Aire = 7 × 2', '7 × 2 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: '1 m = ___ cm',
        correctAnswer: '100',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 mètre = 100 centimètres']
      })
    }

    // ========== CHAPTER 3: MESURE ET GRANDEURS ==========
    
    // ch3-s1: Le temps et les heures
    if (section.id === 'ch3-s1') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: '1 heure = ___ minutes',
        correctAnswer: '60',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 h = 60 min', 'Une heure contient 60 minutes']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: '2 heures = ___ minutes',
        correctAnswer: '120',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2 h = 2 × 60', '2 × 60 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Comment lis-tu 8h15? Réponse: ___ heures ___',
        correctAnswer: 'huit quinze',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['8h15 = huit heures quinze', 'Huit heures quinze']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: '1 minute = ___ secondes',
        correctAnswer: '60',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 min = 60 s', 'Une minute contient 60 secondes']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'À quelle période de la journée est 10h00? Réponse: ___',
        correctAnswer: 'matin',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Le matin va de 6h à 12h', '10h00 est dans le matin']
      })
    }

    // ch3-s2: La monnaie et les prix
    if (section.id === 'ch3-s2') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'La monnaie de la Mauritanie est l\'___.',
        correctAnswer: 'ouguiya',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Ouguiya (MRU)', 'La monnaie mauritanienne']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Calcule: 25 MRU + 35 MRU = ___ MRU',
        correctAnswer: '60',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne: 25 + 35 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Tu donnes 50 MRU pour un achat de 30 MRU. On te rend ___ MRU.',
        correctAnswer: '20',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Soustrais: 50 - 30 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Un cahier coûte 30 MRU. 2 cahiers coûtent ___ MRU.',
        correctAnswer: '60',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Multiplie: 2 × 30 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Un billet de 200 ouguiyas vaut ___ MRU.',
        correctAnswer: '200',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['200 ouguiyas = 200 MRU']
      })
    }

    // ch3-s3: Masse et poids
    if (section.id === 'ch3-s3') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: '1 kilogramme = ___ grammes',
        correctAnswer: '1000',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 kg = 1000 g', 'Un kilogramme contient 1000 grammes']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: '2 kg = ___ g',
        correctAnswer: '2000',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2 kg = 2 × 1000', '2 × 1000 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'On mesure la masse avec une ___.',
        correctAnswer: 'balance',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Un outil pour peser', 'Balance']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: '1500 g = ___ kg',
        correctAnswer: '1.5',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1500 ÷ 1000 = ?', '1,5 kg']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Quelle est la plus lourde: 800 g ou 1 kg? Réponse: ___',
        correctAnswer: '1 kg',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 kg = 1000 g', '1000 > 800']
      })
    }

    // ch3-s4: Volume et capacité
    if (section.id === 'ch3-s4') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: '1 litre = ___ millilitres',
        correctAnswer: '1000',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 L = 1000 ml', 'Un litre contient 1000 millilitres']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: '3 L = ___ ml',
        correctAnswer: '3000',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['3 L = 3 × 1000', '3 × 1000 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'On mesure un liquide avec un ___ gradué.',
        correctAnswer: 'verre',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Un récipient avec des graduations', 'Verre gradué']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: '2500 ml = ___ L',
        correctAnswer: '2.5',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2500 ÷ 1000 = ?', '2,5 L']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Quelle est la plus grande: 750 ml ou 1 L? Réponse: ___',
        correctAnswer: '1 L',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 L = 1000 ml', '1000 > 750']
      })
    }

    // ch3-s5: Exercices d'application
    if (section.id === 'ch3-s5') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Convertis 3,5 kg en grammes: ___ g',
        correctAnswer: '3500',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['3,5 kg = 3,5 × 1000', '3,5 × 1000 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Ahmed achète 2 kg de riz à 150 MRU/kg. Il paie ___ MRU.',
        correctAnswer: '300',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2 × 150 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Combien de minutes dans 2,5 heures? Réponse: ___ minutes',
        correctAnswer: '150',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2,5 h = 2,5 × 60', '2,5 × 60 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Convertis 1800 ml en litres: ___ L',
        correctAnswer: '1.8',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1800 ÷ 1000 = ?', '1,8 L']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Fatima achète 1,5 L d\'huile à 200 MRU/L. Elle paie ___ MRU.',
        correctAnswer: '300',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1,5 × 200 = ?']
      })
    }

    // ========== CHAPTER 4: LES FRACTIONS ==========
    
    // ch4-s1: Introduction aux fractions
    if (section.id === 'ch4-s1') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Dans la fraction 3/5, le numérateur est ___.',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Le numérateur est au-dessus de la barre', 'Dans 3/5, c\'est 3']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Dans la fraction 2/7, le dénominateur est ___.',
        correctAnswer: '7',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Le dénominateur est en-dessous de la barre', 'Dans 2/7, c\'est 7']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Comment lis-tu 1/2? Réponse: un ___',
        correctAnswer: 'demi',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Un demi', '1/2 = un demi']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Comment lis-tu 1/4? Réponse: un ___',
        correctAnswer: 'quart',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Un quart', '1/4 = un quart']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Si tu partages un gâteau en 6 parts et tu en prends 2, tu as ___/6.',
        correctAnswer: '2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2 parts sur 6', '2/6']
      })
    }

    // ch4-s2: Fractions équivalentes
    if (section.id === 'ch4-s2') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Simplifie 4/8: ___/___',
        correctAnswer: '1/2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Divise par 4', '4÷4=1, 8÷4=2', '1/2']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Trouve une fraction équivalente à 1/3: ___/___',
        correctAnswer: '2/6',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Multiplie par 2', '1×2=2, 3×2=6', '2/6']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Simplifie 6/12: ___/___',
        correctAnswer: '1/2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Divise par 6', '6÷6=1, 12÷6=2', '1/2']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: '1/2 = ___/4',
        correctAnswer: '2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Multiplie par 2', '1×2=2', '2/4']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Simplifie 10/15: ___/___',
        correctAnswer: '2/3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Divise par 5', '10÷5=2, 15÷5=3', '2/3']
      })
    }

    // ch4-s3: Comparaison de fractions
    if (section.id === 'ch4-s3') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Quelle fraction est plus grande: 2/5 ou 3/5? Réponse: ___/5',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Avec le même dénominateur, compare les numérateurs', '3 > 2']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Quelle fraction est plus petite: 1/3 ou 1/4? Réponse: ___/___',
        correctAnswer: '1/4',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Avec le même numérateur, plus le dénominateur est grand, plus c\'est petit', '1/4 < 1/3']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Range du plus petit au plus grand: 1/4, 1/2, 1/3. Le plus petit est ___/___',
        correctAnswer: '1/4',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Plus le dénominateur est grand, plus c\'est petit', '1/4 est le plus petit']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Compare 1/2 et 2/4. Elles sont ___.',
        correctAnswer: 'égales',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1/2 = 2/4', 'Égales']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Quelle fraction est plus grande: 3/4 ou 2/3? Réponse: ___/___',
        correctAnswer: '3/4',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['3/4 = 0,75 et 2/3 ≈ 0,67', '3/4 > 2/3']
      })
    }

    // ch4-s4: Addition et soustraction de fractions
    if (section.id === 'ch4-s4') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Calcule: 1/4 + 2/4 = ___/4',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne les numérateurs', '1 + 2 = 3']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Calcule: 3/5 - 1/5 = ___/5',
        correctAnswer: '2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Soustrais les numérateurs', '3 - 1 = 2']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Calcule: 1/6 + 2/6 = ___/6',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne: 1 + 2 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Calcule: 4/7 - 2/7 = ___/7',
        correctAnswer: '2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Soustrais: 4 - 2 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Calcule et simplifie: 2/4 + 1/4 = ___/4 = ___/2',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2/4 + 1/4 = 3/4', '3/4 ne peut pas être simplifié en 1/2']
      })
    }

    // ch4-s5: Exercices d'application
    if (section.id === 'ch4-s5') {
      exercises.push({
        id: `ex-${section.id}-fill-1`,
        type: 'fill_in_blank',
        question: 'Calcule: 1/3 + 1/3 = ___/3',
        correctAnswer: '2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1 + 1 = 2', '2/3']
      })

      exercises.push({
        id: `ex-${section.id}-fill-2`,
        type: 'fill_in_blank',
        question: 'Calcule: 5/6 - 2/6 = ___/6',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['5 - 2 = 3', '3/6']
      })

      exercises.push({
        id: `ex-${section.id}-fill-3`,
        type: 'fill_in_blank',
        question: 'Un gâteau partagé en 8 parts. Mohamed en prend 3. Fraction: ___/8',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['3 parts sur 8', '3/8']
      })

      exercises.push({
        id: `ex-${section.id}-fill-4`,
        type: 'fill_in_blank',
        question: 'Simplifie 3/6: ___/___',
        correctAnswer: '1/2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Divise par 3', '3÷3=1, 6÷3=2', '1/2']
      })

      exercises.push({
        id: `ex-${section.id}-fill-5`,
        type: 'fill_in_blank',
        question: 'Calcule: 2/5 + 1/5 = ___/5',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2 + 1 = 3', '3/5']
      })
    }

    return exercises.slice(0, count)
  }

  /**
   * Generate true/false exercises (20% of total)
   */
  private static generateTrueFalse(section: any, count: number): TrueFalseExercise[] {
    const exercises: TrueFalseExercise[] = []

    // ch1-s1: Les nombres entiers naturels
    if (section.id === 'ch1-s1') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '32 est plus grand que 23',
        statement: '32 est plus grand que 23',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 32 a 3 dizaines et 23 a 2 dizaines, donc 32 > 23.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '15 est plus grand que 51',
        statement: '15 est plus grand que 51',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 51 a 5 dizaines et 15 a 1 dizaine, donc 51 > 15.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: 'Le nombre 47 se lit "quarante-sept"',
        statement: 'Le nombre 47 se lit "quarante-sept"',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 47 = 40 (quarante) + 7 (sept) = quarante-sept.'
      })
    }

    // ch1-s2: Addition et soustraction
    if (section.id === 'ch1-s2') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '5 + 3 = 8',
        statement: '5 + 3 = 8',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 5 + 3 = 8 (cinq plus trois égale huit).'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '12 - 4 = 9',
        statement: '12 - 4 = 9',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 12 - 4 = 8, pas 9.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '10 + 5 = 15',
        statement: '10 + 5 = 15',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 10 + 5 = 15 (dix plus cinq égale quinze).'
      })
    }

    // ch1-s3: Multiplication et division
    if (section.id === 'ch1-s3') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '3 × 4 = 12',
        statement: '3 × 4 = 12',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 3 × 4 = 12 (trois fois quatre égale douze).'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '15 ÷ 3 = 6',
        statement: '15 ÷ 3 = 6',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 15 ÷ 3 = 5, pas 6.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '5 × 5 = 25',
        statement: '5 × 5 = 25',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 5 × 5 = 25 (table de 5).'
      })
    }

    // ch1-s4: Problèmes de calcul
    if (section.id === 'ch1-s4') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: 'Si Ahmed a 10 bonbons et Fatima en a 8, ils ont 18 bonbons en tout.',
        statement: 'Si Ahmed a 10 bonbons et Fatima en a 8, ils ont 18 bonbons en tout.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 10 + 8 = 18 bonbons en tout.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'Si 4 élèves ont chacun 3 crayons, il y a 10 crayons en tout.',
        statement: 'Si 4 élèves ont chacun 3 crayons, il y a 10 crayons en tout.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 4 × 3 = 12 crayons, pas 10.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: 'Si on partage 20 bonbons entre 5 enfants, chacun reçoit 4 bonbons.',
        statement: 'Si on partage 20 bonbons entre 5 enfants, chacun reçoit 4 bonbons.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 20 ÷ 5 = 4. Chaque enfant reçoit 4 bonbons.'
      })
    }

    // ch1-s5: Révision et consolidation
    if (section.id === 'ch1-s5') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '5 + 3 × 2 = 11',
        statement: '5 + 3 × 2 = 11',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! D\'abord 3 × 2 = 6, puis 5 + 6 = 11.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '20 - 4 × 3 = 8',
        statement: '20 - 4 × 3 = 8',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! D\'abord 4 × 3 = 12, puis 20 - 12 = 8.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '18 ÷ 3 + 4 = 12',
        statement: '18 ÷ 3 + 4 = 12',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! D\'abord 18 ÷ 3 = 6, puis 6 + 4 = 10, pas 12.'
      })
    }

    // ========== CHAPTER 2: GÉOMÉTRIE DE BASE ==========
    
    // ch2-s1: Les figures géométriques simples
    if (section.id === 'ch2-s1') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: 'Un carré a 4 côtés égaux.',
        statement: 'Un carré a 4 côtés égaux.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Un carré a 4 côtés égaux et 4 angles droits.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'Un cercle a des côtés.',
        statement: 'Un cercle a des côtés.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! Un cercle n\'a pas de côtés, c\'est une forme ronde.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: 'Un triangle a 3 côtés.',
        statement: 'Un triangle a 3 côtés.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Un triangle a exactement 3 côtés et 3 angles.'
      })
    }

    // ch2-s2: Mesure et longueur
    if (section.id === 'ch2-s2') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '1 mètre = 100 centimètres.',
        statement: '1 mètre = 100 centimètres.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 1 m = 100 cm.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '8 cm est plus long que 5 cm.',
        statement: '8 cm est plus long que 5 cm.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 8 > 5, donc 8 cm est plus long.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: 'On mesure une longueur en kilogrammes.',
        statement: 'On mesure une longueur en kilogrammes.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! On mesure une longueur en centimètres (cm) ou mètres (m).'
      })
    }

    // ch2-s3: Périmètre et aire
    if (section.id === 'ch2-s3') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: 'Le périmètre est la longueur du contour.',
        statement: 'Le périmètre est la longueur du contour.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Le périmètre est la longueur du contour d\'une figure.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'L\'aire est la surface à l\'intérieur d\'une figure.',
        statement: 'L\'aire est la surface à l\'intérieur d\'une figure.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! L\'aire mesure la surface à l\'intérieur.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: 'Périmètre d\'un carré = 4 × côté.',
        statement: 'Périmètre d\'un carré = 4 × côté.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Pour un carré, on multiplie le côté par 4.'
      })
    }

    // ch2-s4: Symétrie et motifs
    if (section.id === 'ch2-s4') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: 'La symétrie est quand une figure est identique de chaque côté.',
        statement: 'La symétrie est quand une figure est identique de chaque côté.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! La symétrie signifie que les deux côtés sont identiques.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'Un motif est un dessin qui se répète.',
        statement: 'Un motif est un dessin qui se répète.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Un motif se répète, comme sur un tapis.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: 'Un papillon n\'est pas symétrique.',
        statement: 'Un papillon n\'est pas symétrique.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! Un papillon est symétrique: les deux ailes sont identiques.'
      })
    }

    // ch2-s5: Exercices d'application
    if (section.id === 'ch2-s5') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: 'Aire d\'un rectangle = longueur × largeur.',
        statement: 'Aire d\'un rectangle = longueur × largeur.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Pour calculer l\'aire d\'un rectangle, on multiplie longueur × largeur.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'Un carré a 3 côtés.',
        statement: 'Un carré a 3 côtés.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! Un carré a 4 côtés égaux.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '50 cm est plus long que 1 m.',
        statement: '50 cm est plus long que 1 m.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 1 m = 100 cm, donc 1 m > 50 cm.'
      })
    }

    // ========== CHAPTER 3: MESURE ET GRANDEURS ==========
    
    // ch3-s1: Le temps et les heures
    if (section.id === 'ch3-s1') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '1 heure = 60 minutes.',
        statement: '1 heure = 60 minutes.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 1 heure contient exactement 60 minutes.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'L\'aiguille longue indique les heures.',
        statement: 'L\'aiguille longue indique les heures.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! L\'aiguille courte indique les heures, l\'aiguille longue indique les minutes.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '15h00 est dans l\'après-midi.',
        statement: '15h00 est dans l\'après-midi.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! L\'après-midi va de 12h à 18h, donc 15h00 est dans l\'après-midi.'
      })
    }

    // ch3-s2: La monnaie et les prix
    if (section.id === 'ch3-s2') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: 'La monnaie de la Mauritanie est l\'ouguiya.',
        statement: 'La monnaie de la Mauritanie est l\'ouguiya.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! La monnaie mauritanienne est l\'ouguiya (MRU).'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'Si tu donnes 100 MRU pour un achat de 80 MRU, on te rend 10 MRU.',
        statement: 'Si tu donnes 100 MRU pour un achat de 80 MRU, on te rend 10 MRU.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 100 - 80 = 20 MRU. On te rend 20 MRU, pas 10.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '3 articles à 20 MRU chacun coûtent 60 MRU en tout.',
        statement: '3 articles à 20 MRU chacun coûtent 60 MRU en tout.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 3 × 20 = 60 MRU.'
      })
    }

    // ch3-s3: Masse et poids
    if (section.id === 'ch3-s3') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '1 kilogramme = 1000 grammes.',
        statement: '1 kilogramme = 1000 grammes.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 1 kg = 1000 g.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'On mesure la masse avec une règle.',
        statement: 'On mesure la masse avec une règle.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! On mesure la masse avec une balance, pas une règle.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '500 g est plus léger que 1 kg.',
        statement: '500 g est plus léger que 1 kg.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 1 kg = 1000 g, donc 500 g < 1 kg.'
      })
    }

    // ch3-s4: Volume et capacité
    if (section.id === 'ch3-s4') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '1 litre = 1000 millilitres.',
        statement: '1 litre = 1000 millilitres.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 1 L = 1000 ml.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'On mesure un liquide avec une balance.',
        statement: 'On mesure un liquide avec une balance.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! On mesure un liquide avec un verre gradué, pas une balance.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '750 ml est plus petit que 1 L.',
        statement: '750 ml est plus petit que 1 L.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 1 L = 1000 ml, donc 750 ml < 1 L.'
      })
    }

    // ch3-s5: Exercices d'application
    if (section.id === 'ch3-s5') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '2,5 kg = 2500 g.',
        statement: '2,5 kg = 2500 g.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 2,5 × 1000 = 2500 g.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '3 kg de riz à 150 MRU/kg coûtent 400 MRU.',
        statement: '3 kg de riz à 150 MRU/kg coûtent 400 MRU.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 3 × 150 = 450 MRU, pas 400.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '1,5 heure = 90 minutes.',
        statement: '1,5 heure = 90 minutes.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 1,5 × 60 = 90 minutes.'
      })
    }

    // ========== CHAPTER 4: LES FRACTIONS ==========
    
    // ch4-s1: Introduction aux fractions
    if (section.id === 'ch4-s1') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: 'Le numérateur est le nombre au-dessus de la barre.',
        statement: 'Le numérateur est le nombre au-dessus de la barre.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Dans 3/4, le numérateur est 3 (au-dessus).'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '1/2 se lit "un tiers".',
        statement: '1/2 se lit "un tiers".',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 1/2 se lit "un demi". 1/3 se lit "un tiers".'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: 'Dans 2/5, le dénominateur est 5.',
        statement: 'Dans 2/5, le dénominateur est 5.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Le dénominateur est le nombre en-dessous de la barre.'
      })
    }

    // ch4-s2: Fractions équivalentes
    if (section.id === 'ch4-s2') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '1/2 = 2/4.',
        statement: '1/2 = 2/4.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 1/2 et 2/4 sont équivalentes (même quantité).'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: 'Pour simplifier, on multiplie le numérateur et le dénominateur par le même nombre.',
        statement: 'Pour simplifier, on multiplie le numérateur et le dénominateur par le même nombre.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! Pour simplifier, on DIVISE par le même nombre. Pour trouver une équivalente, on multiplie.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '4/8 = 1/2.',
        statement: '4/8 = 1/2.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 4/8 simplifié donne 1/2 (diviser par 4).'
      })
    }

    // ch4-s3: Comparaison de fractions
    if (section.id === 'ch4-s3') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '1/3 est plus grand que 1/4.',
        statement: '1/3 est plus grand que 1/4.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Avec le même numérateur, plus le dénominateur est petit, plus la fraction est grande.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '2/5 est plus grand que 3/5.',
        statement: '2/5 est plus grand que 3/5.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! Avec le même dénominateur, 3/5 > 2/5 car 3 > 2.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '1/2 = 2/4.',
        statement: '1/2 = 2/4.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Ce sont des fractions équivalentes.'
      })
    }

    // ch4-s4: Addition et soustraction de fractions
    if (section.id === 'ch4-s4') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '1/4 + 2/4 = 3/4.',
        statement: '1/4 + 2/4 = 3/4.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! Avec le même dénominateur, on additionne les numérateurs: 1 + 2 = 3.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '3/5 - 1/5 = 2/10.',
        statement: '3/5 - 1/5 = 2/10.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 3/5 - 1/5 = 2/5. Le dénominateur reste 5, on ne change pas.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: 'Pour additionner des fractions, il faut le même dénominateur.',
        statement: 'Pour additionner des fractions, il faut le même dénominateur.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! On ne peut additionner que des fractions avec le même dénominateur.'
      })
    }

    // ch4-s5: Exercices d'application
    if (section.id === 'ch4-s5') {
      exercises.push({
        id: `ex-${section.id}-tf-1`,
        type: 'true_false',
        question: '1/3 + 1/3 = 2/3.',
        statement: '1/3 + 1/3 = 2/3.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 1 + 1 = 2, donc 2/3.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-2`,
        type: 'true_false',
        question: '5/6 - 2/6 = 3/12.',
        statement: '5/6 - 2/6 = 3/12.',
        correctAnswer: false,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Faux! 5/6 - 2/6 = 3/6. Le dénominateur reste 6.'
      })

      exercises.push({
        id: `ex-${section.id}-tf-3`,
        type: 'true_false',
        question: '3/4 est plus grand que 1/2.',
        statement: '3/4 est plus grand que 1/2.',
        correctAnswer: true,
        sectionId: section.id,
        difficulty: 'beginner',
        explanation: 'Vrai! 3/4 = 0,75 et 1/2 = 0,5, donc 3/4 > 1/2.'
      })
    }

    return exercises.slice(0, count)
  }

  /**
   * Generate problem solving exercises (10% of total)
   */
  private static generateProblemSolving(section: any, count: number): FillInBlankExercise[] {
    const exercises: FillInBlankExercise[] = []

    // ch1-s1: Les nombres entiers naturels
    if (section.id === 'ch1-s1') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Ahmed a 12 ans. Sa sœur a 8 ans. Combien d\'années ont-ils ensemble? Réponse: ___',
        correctAnswer: '20',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne les deux âges', '12 + 8 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-prob-2`,
        type: 'fill_in_blank',
        question: 'Dans une classe, il y a 25 élèves. 10 sont des filles. Combien y a-t-il de garçons? Réponse: ___',
        correctAnswer: '15',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Soustrais le nombre de filles du total', '25 - 10 = ?']
      })
    }

    // ch1-s2: Addition et soustraction
    if (section.id === 'ch1-s2') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Fatima a 5 cahiers. Sa maman lui donne 3 cahiers. Combien a-t-elle maintenant? Réponse: ___',
        correctAnswer: '8',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne les cahiers', '5 + 3 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-prob-2`,
        type: 'fill_in_blank',
        question: 'Mohamed a 15 ouguiyas. Il dépense 7 ouguiyas. Combien lui reste-t-il? Réponse: ___',
        correctAnswer: '8',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Soustrais la dépense du total', '15 - 7 = ?']
      })
    }

    // ch1-s3: Multiplication et division
    if (section.id === 'ch1-s3') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Chaque élève a 3 cahiers. S\'il y a 5 élèves, combien de cahiers en tout? Réponse: ___',
        correctAnswer: '15',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Multiplie le nombre de cahiers par le nombre d\'élèves', '3 × 5 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-prob-2`,
        type: 'fill_in_blank',
        question: '24 bonbons à partager entre 6 enfants. Combien chacun? Réponse: ___',
        correctAnswer: '4',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Divise le total par le nombre d\'enfants', '24 ÷ 6 = ?']
      })
    }

    // ch1-s4: Problèmes de calcul
    if (section.id === 'ch1-s4') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Ahmed a 18 ouguiyas. Il achète 2 livres à 5 ouguiyas chacun. Combien lui reste-t-il? Réponse: ___',
        correctAnswer: '8',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Calcule la dépense: 2 × 5 = 10', 'Puis soustrais: 18 - 10 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-prob-2`,
        type: 'fill_in_blank',
        question: 'Dans un bus, il y a 30 passagers. 12 descendent. Combien reste-t-il? Réponse: ___',
        correctAnswer: '18',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Soustrais le nombre de passagers qui descendent', '30 - 12 = ?']
      })
    }

    // ch1-s5: Révision et consolidation
    if (section.id === 'ch1-s5') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Fatima a 4 groupes de 3 bonbons. Elle en mange 5. Combien lui reste-t-il? Réponse: ___',
        correctAnswer: '7',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Calcule le total: 4 × 3 = 12', 'Puis soustrais: 12 - 5 = ?']
      })

      exercises.push({
        id: `ex-${section.id}-prob-2`,
        type: 'fill_in_blank',
        question: 'Mohamed a 20 ouguiyas. Il achète 2 cahiers à 4 ouguiyas chacun et 3 stylos à 2 ouguiyas chacun. Combien lui reste-t-il? Réponse: ___',
        correctAnswer: '6',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Calcule: 2 × 4 = 8 et 3 × 2 = 6', 'Total dépensé: 8 + 6 = 14', 'Reste: 20 - 14 = ?']
      })
    }

    // ========== CHAPTER 2: GÉOMÉTRIE DE BASE ==========
    
    // ch2-s1: Les figures géométriques simples
    if (section.id === 'ch2-s1') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Fatima dessine un carré et un triangle. Combien de côtés au total? Réponse: ___',
        correctAnswer: '7',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Carré: 4 côtés', 'Triangle: 3 côtés', 'Total: 4 + 3 = ?']
      })
    }

    // ch2-s2: Mesure et longueur
    if (section.id === 'ch2-s2') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Ahmed mesure 120 cm. Combien mesure-t-il en mètres? Réponse: ___ m',
        correctAnswer: '1.2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['120 cm = ? m', '1 m = 100 cm', '120 ÷ 100 = ?']
      })
    }

    // ch2-s3: Périmètre et aire
    if (section.id === 'ch2-s3') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Une chambre fait 5 m × 4 m. Calcule son périmètre et son aire. Périmètre: ___ m, Aire: ___ m²',
        correctAnswer: '18',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Périmètre = 2 × (5 + 4) = 18 m', 'Aire = 5 × 4 = 20 m²']
      })
    }

    // ch2-s4: Symétrie et motifs
    if (section.id === 'ch2-s4') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Pour créer un motif, on répète un élément. Si on répète un triangle 4 fois, combien de triangles au total? Réponse: ___',
        correctAnswer: '4',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['On répète 4 fois', 'Donc 4 triangles au total']
      })
    }

    // ch2-s5: Exercices d'application
    if (section.id === 'ch2-s5') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Un jardin rectangulaire fait 6 m × 4 m. On veut entourer avec une clôture. Quelle longueur de clôture faut-il? Réponse: ___ m',
        correctAnswer: '20',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Calcule le périmètre', 'Périmètre = 2 × (6 + 4) = 20 m']
      })
    }

    // ========== CHAPTER 3: MESURE ET GRANDEURS ==========
    
    // ch3-s1: Le temps et les heures
    if (section.id === 'ch3-s1') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Les cours commencent à 8h00 et durent 3 heures. À quelle heure finissent-ils? Réponse: ___h00',
        correctAnswer: '11',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['8h00 + 3 heures = ?', '8 + 3 = 11']
      })
    }

    // ch3-s2: La monnaie et les prix
    if (section.id === 'ch3-s2') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Mohamed achète 2 pains à 20 MRU chacun et 1 litre de lait à 30 MRU. Il donne 100 MRU. Combien on lui rend? Réponse: ___ MRU',
        correctAnswer: '30',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Calcule le total: 2 × 20 + 30 = 70 MRU', 'Monnaie: 100 - 70 = ?']
      })
    }

    // ch3-s3: Masse et poids
    if (section.id === 'ch3-s3') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Fatima achète 1,5 kg de riz et 500 g de sucre. Quelle est la masse totale en grammes? Réponse: ___ g',
        correctAnswer: '2000',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['1,5 kg = 1500 g', 'Total: 1500 + 500 = ?']
      })
    }

    // ch3-s4: Volume et capacité
    if (section.id === 'ch3-s4') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Ahmed a 2 L d\'eau. Il en boit 500 ml. Combien lui reste-t-il en millilitres? Réponse: ___ ml',
        correctAnswer: '1500',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2 L = 2000 ml', 'Reste: 2000 - 500 = ?']
      })
    }

    // ch3-s5: Exercices d'application
    if (section.id === 'ch3-s5') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Une famille achète 3 kg de riz à 150 MRU/kg, 2 L d\'huile à 200 MRU/L et 1 kg de sucre à 100 MRU/kg. Combien paie-t-elle? Réponse: ___ MRU',
        correctAnswer: '950',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Riz: 3 × 150 = 450', 'Huile: 2 × 200 = 400', 'Sucre: 1 × 100 = 100', 'Total: 450 + 400 + 100 = ?']
      })
    }

    // ========== CHAPTER 4: LES FRACTIONS ==========
    
    // ch4-s1: Introduction aux fractions
    if (section.id === 'ch4-s1') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Un pain traditionnel est partagé en 6 parts. Fatima en prend 2 parts. Quelle fraction a-t-elle? Réponse: ___/6',
        correctAnswer: '2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['2 parts sur 6', '2/6']
      })
    }

    // ch4-s2: Fractions équivalentes
    if (section.id === 'ch4-s2') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Simplifie la fraction 8/16. Réponse: ___/___',
        correctAnswer: '1/2',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Divise par 8', '8÷8=1, 16÷8=2', '1/2']
      })
    }

    // ch4-s3: Comparaison de fractions
    if (section.id === 'ch4-s3') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Range ces fractions du plus petit au plus grand: 1/5, 1/3, 1/2. La plus petite est ___/___',
        correctAnswer: '1/5',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Plus le dénominateur est grand, plus c\'est petit', '1/5 < 1/3 < 1/2']
      })
    }

    // ch4-s4: Addition et soustraction de fractions
    if (section.id === 'ch4-s4') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Fatima mange 1/4 d\'un gâteau et Ahmed en mange 2/4. Quelle fraction ont-ils mangée ensemble? Réponse: ___/4',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Additionne: 1/4 + 2/4 = ?', '1 + 2 = 3']
      })
    }

    // ch4-s5: Exercices d'application
    if (section.id === 'ch4-s5') {
      exercises.push({
        id: `ex-${section.id}-prob-1`,
        type: 'fill_in_blank',
        question: 'Un gâteau est partagé en 8 parts. Mohamed en prend 3 et Fatima en prend 2. Quelle fraction reste-t-il? Réponse: ___/8',
        correctAnswer: '3',
        sectionId: section.id,
        difficulty: 'beginner',
        hints: ['Total pris: 3 + 2 = 5 parts', 'Reste: 8 - 5 = 3 parts', '3/8']
      })
    }

    return exercises.slice(0, count)
  }


  /**
   * Generate additional exercises if we need more to reach 15
   */
  private static generateAdditionalExercises(section: any, count: number): Exercise[] {
    const additional: Exercise[] = []
    
    // Generate more multiple choice questions with variations
    for (let i = 0; i < count; i++) {
      const existingMC = this.generateMultipleChoice(section, 1)
      if (existingMC.length > 0) {
        // Create variation by changing the ID
        const variation = { ...existingMC[0] }
        variation.id = `${variation.id}-var-${i}`
        additional.push(variation)
      }
    }
    
    return additional
  }

  /**
   * Shuffle array (Fisher-Yates algorithm for true randomization)
   */
  private static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
}

