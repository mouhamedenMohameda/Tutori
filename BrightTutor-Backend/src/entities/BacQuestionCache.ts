import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('bac_question_cache')
export class BacQuestionCache {
  @PrimaryColumn()
  id: string

  @Column({ name: 'exercise_id' })
  exerciseId: string

  @Column({ name: 'part_id' })
  partId: string

  @Column()
  question: string

  @Column({ default: true })
  validated: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
