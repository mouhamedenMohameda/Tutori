import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Class } from './Class'
import { SchoolAdmin } from './SchoolAdmin'

@Entity('curriculum_monthly')
export class CurriculumMonthly {
  @PrimaryColumn()
  id: string

  @Column({ name: 'class_id' })
  classId: string

  @Column({ type: 'int' })
  month: number

  @Column({ type: 'int' })
  year: number

  @Column({ default: '[]' })
  subjects: string

  @Column({ name: 'learning_objectives' })
  learningObjectives: string

  @Column({ name: 'uploaded_by' })
  uploadedBy: string

  @Column({ name: 'uploaded_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadedAt: Date

  @ManyToOne(() => Class, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'class_id' })
  class: Class

  @ManyToOne(() => SchoolAdmin)
  @JoinColumn({ name: 'uploaded_by', referencedColumnName: 'id' })
  uploader: SchoolAdmin
}
