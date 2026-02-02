import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Assignment } from './Assignment'
import { Student } from './Student'

@Entity('assignment_progress')
export class AssignmentProgress {
  @PrimaryColumn()
  id: string

  @Column({ name: 'assignment_id' })
  assignmentId: string

  @Column({ name: 'student_id' })
  studentId: string

  @Column({ default: 'not_started' })
  status: string

  @Column({ name: 'time_spent', default: 0 })
  timeSpent: number

  @Column({ name: 'questions_asked', default: 0 })
  questionsAsked: number

  @Column({ name: 'last_worked_on', type: 'timestamp', nullable: true })
  lastWorkedOn: Date | null

  @Column({ name: 'completion_percent', default: 0 })
  completionPercent: number

  @Column({ name: 'struggling_topics', default: '[]' })
  strugglingTopics: string

  @Column({ name: 'mastered_topics', default: '[]' })
  masteredTopics: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => Assignment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'assignment_id' })
  assignment: Assignment

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
