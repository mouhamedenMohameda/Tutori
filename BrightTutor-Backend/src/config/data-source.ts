import '@/lib/env-loader'
import { DataSource } from 'typeorm'
import {
  School,
  SchoolAdmin,
  PlatformAdmin,
  Subject,
  Class,
  ClassSubject,
  Teacher,
  TeacherClass,
  Parent,
  StudentParent,
  Student,
  Assignment,
  AssignmentProgress,
  CurriculumMonthly,
  AIPersonality,
  AIConversation,
  MonthlyReport,
  StudentAIContext,
  StudentEngagement,
  StudentSession,
  QuizSession,
  StudentKnowledgeBase,
  StudentPushToken,
  CommunityMessage,
  BacExercise,
  BacPartCompletion,
  BacCourseCache,
  BacQuestionCache,
  StoredBacExercise,
  StoredBacExercisePart,
} from '@/entities'

/**
 * TypeORM DataSource — single place for DB configuration.
 * Uses DATABASE_URL (same as .env.local / .env). synchronize: false (schema from Prisma/migrations).
 */
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    School,
    SchoolAdmin,
    PlatformAdmin,
    Subject,
    Class,
    ClassSubject,
    Teacher,
    TeacherClass,
    Parent,
    StudentParent,
    Student,
    Assignment,
    AssignmentProgress,
    CurriculumMonthly,
    AIPersonality,
    AIConversation,
    MonthlyReport,
    StudentAIContext,
    StudentEngagement,
    StudentSession,
    QuizSession,
    StudentKnowledgeBase,
    StudentPushToken,
    CommunityMessage,
    BacExercise,
    BacPartCompletion,
    BacCourseCache,
    BacQuestionCache,
    StoredBacExercise,
    StoredBacExercisePart,
  ],
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
  extra: process.env.NODE_ENV === 'production'
    ? {
        max: parseInt(process.env.DB_CONNECTION_LIMIT || '15', 10),
        connectionTimeoutMillis: 10000,
        idleTimeoutMillis: 20000,
      }
    : undefined,
})

export async function getDataSource(): Promise<DataSource> {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize()
  }
  return AppDataSource
}

export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    const ds = await getDataSource()
    await ds.query('SELECT 1')
    return true
  } catch {
    return false
  }
}
