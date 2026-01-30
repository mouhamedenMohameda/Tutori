export interface Exercise {
  id: string
  type: string
  [key: string]: unknown
}
export interface MultipleChoiceVisualExercise extends Exercise {}
export interface MultipleChoiceTextExercise extends Exercise {}
export interface FillInBlankExercise extends Exercise {}
export interface TrueFalseExercise extends Exercise {}
