import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Student } from './Student'
import { Parent } from './Parent'

@Entity('student_parents')
export class StudentParent {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'student_id' })
  studentId: string

  @Column({ type: 'uuid', name: 'parent_id' })
  parentId: string

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student

  @ManyToOne(() => Parent, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parent_id' })
  parent: Parent
}
