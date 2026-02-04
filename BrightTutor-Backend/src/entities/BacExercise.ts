import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Student } from './Student'

@Entity('bac_exercises')
export class BacExercise {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'student_id' })
  studentId: string

  @Column({ type: 'varchar', name: 'exercise_id' })
  exerciseId: string

  @Column({ type: 'varchar', name: 'current_part_id' })
  currentPartId: string

  @Column({ name: 'completed_parts', type: 'simple-array', default: '' })
  completedParts: string[]

  @Column({ type: 'int', name: 'total_score', default: 0 })
  totalScore: number

  @Column({ name: 'started_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  startedAt: Date

  @UpdateDateColumn({ name: 'last_accessed_at' })
  lastAccessedAt: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
