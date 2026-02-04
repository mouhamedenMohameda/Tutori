import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Class } from './Class'
import { Subject } from './Subject'

@Entity('class_subjects')
export class ClassSubject {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'class_id' })
  classId: string

  @Column({ type: 'uuid', name: 'subject_id' })
  subjectId: string

  @ManyToOne(() => Class, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'class_id' })
  class: Class

  @ManyToOne(() => Subject, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'subject_id' })
  subject: Subject
}
