import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Assignment } from './Assignment'
import { Student } from './Student'

@Entity('assignment_progress')
export class AssignmentProgress {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'assignment_id' })
  assignmentId: string

  @Column({ type: 'uuid', name: 'student_id' })
  studentId: string

  @Column({ type: 'varchar', default: 'not_started' })
  status: string

  @Column({ type: 'int', name: 'time_spent', default: 0 })
  timeSpent: number

  @Column({ type: 'int', name: 'questions_asked', default: 0 })
  questionsAsked: number

  @Column({ name: 'last_worked_on', type: 'timestamp', nullable: true })
  lastWorkedOn: Date | null

  @Column({ type: 'int', name: 'completion_percent', default: 0 })
  completionPercent: number

  @Column({ type: 'text', name: 'struggling_topics', default: '[]' })
  strugglingTopics: string

  @Column({ type: 'text', name: 'mastered_topics', default: '[]' })
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
