import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { StoredBacExercise } from './StoredBacExercise'

@Entity('stored_bac_exercise_parts')
export class StoredBacExercisePart {
  @PrimaryColumn()
  id: string

  @Column({ name: 'exercise_id' })
  exerciseId: string

  @Column({ name: 'part_id' })
  partId: string

  @Column()
  question: string

  @Column({ default: 'calcul' })
  type: string

  @Column({ default: 'Moyen' })
  difficulty: string

  @Column({ default: true })
  validated: boolean

  @Column({ name: 'order_index' })
  orderIndex: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => StoredBacExercise, (e) => e.parts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'exercise_id' })
  exercise: StoredBacExercise
}
