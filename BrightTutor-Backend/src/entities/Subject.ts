import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { School } from './School'
import { ClassSubject } from './ClassSubject'

@Entity('subjects')
export class Subject {
  @PrimaryColumn()
  id: string

  @Column({ name: 'school_id' })
  schoolId: string

  @Column()
  name: string

  @Column({ nullable: true })
  description: string | null

  @Column({ default: 'French' })
  language: string

  @Column({ default: '📖' })
  icon: string

  @Column({ name: 'is_active', default: true })
  isActive: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @Column({ name: 'subject_type', nullable: true })
  subjectType: string | null

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School

  @OneToMany(() => ClassSubject, (cs) => cs.subject)
  classSubjects: ClassSubject[]
}
