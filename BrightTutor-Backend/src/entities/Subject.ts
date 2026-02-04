import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { School } from './School'
import { ClassSubject } from './ClassSubject'

@Entity('subjects')
export class Subject {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'school_id' })
  schoolId: string

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'text', nullable: true })
  description: string | null

  @Column({ type: 'varchar', default: 'French' })
  language: string

  @Column({ type: 'varchar', default: '📖' })
  icon: string

  @Column({ type: 'boolean', name: 'is_active', default: true })
  isActive: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @Column({ type: 'varchar', name: 'subject_type', nullable: true })
  subjectType: string | null

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School

  @OneToMany(() => ClassSubject, (cs) => cs.subject)
  classSubjects: ClassSubject[]
}
