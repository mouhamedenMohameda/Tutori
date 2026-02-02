import { Entity, PrimaryColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { StoredBacExercisePart } from './StoredBacExercisePart'

@Entity('stored_bac_exercises')
export class StoredBacExercise {
  @PrimaryColumn()
  id: string

  @Column({ name: 'chapter_id' })
  chapterId: string

  @Column({ name: 'exercise_id' })
  exerciseId: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  subject: string

  @Column({ default: 'Moyen' })
  difficulty: string

  @Column({ type: 'simple-array', default: '' })
  concepts: string[]

  @Column({ type: 'simple-array', default: '' })
  objectives: string[]

  @Column({ name: 'part_sequence', type: 'simple-array', default: '' })
  partSequence: string[]

  @Column({ name: 'enonce_complet', nullable: true })
  enonceComplet: string | null

  @Column({ name: 'generated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  generatedAt: Date

  @Column({ name: 'generated_by', nullable: true })
  generatedBy: string | null

  @Column({ default: 1 })
  version: number

  @Column({ name: 'is_active', default: true })
  isActive: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @OneToMany(() => StoredBacExercisePart, (p) => p.exercise)
  parts: StoredBacExercisePart[]
}
