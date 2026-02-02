import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Teacher } from './Teacher'
import { Class } from './Class'

@Entity('teacher_classes')
export class TeacherClass {
  @PrimaryColumn()
  id: string

  @Column({ name: 'teacher_id' })
  teacherId: string

  @Column({ name: 'class_id' })
  classId: string

  @Column({ nullable: true })
  subject: string | null

  @ManyToOne(() => Teacher, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher

  @ManyToOne(() => Class, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'class_id' })
  class: Class
}
