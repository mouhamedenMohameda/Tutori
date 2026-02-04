import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm'
import { Student } from './Student'

@Entity('bac_part_completions')
export class BacPartCompletion {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'student_id' })
  studentId: string

  @Column({ type: 'varchar', name: 'exercise_id' })
  exerciseId: string

  @Column({ type: 'varchar', name: 'part_id' })
  partId: string

  @Column({ type: 'int', default: 0 })
  attempts: number

  @Column({ type: 'boolean', default: false })
  completed: boolean

  @Column({ type: 'float', default: 0 })
  score: number

  @Column({ type: 'int', name: 'time_spent', default: 0 })
  timeSpent: number

  @Column({ name: 'completed_at', type: 'timestamp', nullable: true })
  completedAt: Date | null

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
