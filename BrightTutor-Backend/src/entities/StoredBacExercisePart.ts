import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { StoredBacExercise } from './StoredBacExercise'

@Entity('stored_bac_exercise_parts')
export class StoredBacExercisePart {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'exercise_id' })
  exerciseId: string

  @Column({ type: 'varchar', name: 'part_id' })
  partId: string

  @Column({ type: 'text' })
  question: string

  @Column({ type: 'varchar', default: 'calcul' })
  type: string

  @Column({ type: 'varchar', default: 'Moyen' })
  difficulty: string

  @Column({ type: 'boolean', default: true })
  validated: boolean

  @Column({ type: 'int', name: 'order_index' })
  orderIndex: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => StoredBacExercise, (e) => e.parts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'exercise_id' })
  exercise: StoredBacExercise
}
