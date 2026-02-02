import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Student } from './Student'

@Entity('quiz_sessions')
export class QuizSession {
  @PrimaryColumn()
  id: string

  @Column({ name: 'student_id' })
  studentId: string

  @Column()
  subject: string

  @Column()
  questions: string

  @Column({ nullable: true })
  answers: string | null

  @Column({ nullable: true })
  results: string | null

  @Column({ type: 'int', nullable: true })
  score: number | null

  @Column({ name: 'total_questions', type: 'int', nullable: true })
  totalQuestions: number | null

  @Column({ type: 'float', nullable: true })
  percentage: number | null

  @Column({ name: 'time_spent', type: 'int', nullable: true })
  timeSpent: number | null

  @Column({ name: 'start_time', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  startTime: Date

  @Column({ name: 'end_time', type: 'timestamp', nullable: true })
  endTime: Date | null

  @Column({ default: 'active' })
  status: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
