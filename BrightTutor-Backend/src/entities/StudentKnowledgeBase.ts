import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Student } from './Student'

@Entity('student_knowledge_base')
export class StudentKnowledgeBase {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'student_id', unique: true })
  studentId: string

  @Column({ type: 'text', default: '' })
  article: string

  @Column({ name: 'recent_topics', type: 'simple-array', default: '' })
  recentTopics: string[]

  @Column({ name: 'struggling_areas', type: 'simple-array', default: '' })
  strugglingAreas: string[]

  @Column({ name: 'effective_methods', type: 'simple-array', default: '' })
  effectiveMethods: string[]

  @Column({ type: 'text', name: 'lesson_plans_digest', default: '' })
  lessonPlansDigest: string

  @Column({ type: 'text', name: 'quiz_history_summary', default: '' })
  quizHistorySummary: string

  @Column({ type: 'int', default: 1 })
  version: number

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @OneToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
