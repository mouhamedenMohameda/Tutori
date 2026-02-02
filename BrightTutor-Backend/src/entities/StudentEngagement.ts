import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm'
import { Student } from './Student'

@Entity('student_engagement')
export class StudentEngagement {
  @PrimaryColumn()
  id: string

  @Column({ name: 'student_id' })
  studentId: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date

  @Column({ name: 'chat_messages', default: 0 })
  chatMessages: number

  @Column({ name: 'time_spent', default: 0 })
  timeSpent: number

  @Column({ name: 'subjects_engaged', type: 'simple-array', nullable: true })
  subjectsEngaged: string[]

  @Column({ name: 'assignments_viewed', default: 0 })
  assignmentsViewed: number

  @Column({ name: 'quizzes_taken', default: 0 })
  quizzesTaken: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
