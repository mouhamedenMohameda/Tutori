import { Entity, PrimaryColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { StoredBacExercisePart } from './StoredBacExercisePart'

@Entity('stored_bac_exercises')
export class StoredBacExercise {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'varchar', name: 'chapter_id' })
  chapterId: string

  @Column({ type: 'varchar', name: 'exercise_id' })
  exerciseId: string

  @Column({ type: 'varchar' })
  title: string

  @Column({ type: 'text' })
  description: string

  @Column({ type: 'varchar' })
  subject: string

  @Column({ type: 'varchar', default: 'Moyen' })
  difficulty: string

  @Column({ type: 'text', array: true, default: [] })
  concepts: string[]

  @Column({ type: 'text', array: true, default: [] })
  objectives: string[]

  @Column({ name: 'part_sequence', type: 'text', array: true, default: [] })
  partSequence: string[]

  @Column({ type: 'text', name: 'enonce_complet', nullable: true })
  enonceComplet: string | null

  @Column({ name: 'generated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  generatedAt: Date

  @Column({ type: 'varchar', name: 'generated_by', nullable: true })
  generatedBy: string | null

  @Column({ type: 'int', default: 1 })
  version: number

  @Column({ type: 'boolean', name: 'is_active', default: true })
  isActive: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @OneToMany(() => StoredBacExercisePart, (p) => p.exercise)
  parts: StoredBacExercisePart[]
}
