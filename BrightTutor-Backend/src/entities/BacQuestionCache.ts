import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('bac_question_cache')
export class BacQuestionCache {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'varchar', name: 'exercise_id' })
  exerciseId: string

  @Column({ type: 'varchar', name: 'part_id' })
  partId: string

  @Column({ type: 'text' })
  question: string

  @Column({ type: 'boolean', default: true })
  validated: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
