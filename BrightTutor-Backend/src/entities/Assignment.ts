import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Teacher } from './Teacher'
import { School } from './School'
import { Class } from './Class'

@Entity('assignments')
export class Assignment {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'teacher_id' })
  teacherId: string

  @Column({ type: 'uuid', name: 'school_id' })
  schoolId: string

  @Column({ type: 'uuid', name: 'class_id' })
  classId: string

  @Column({ type: 'varchar' })
  title: string

  @Column({ type: 'text' })
  description: string

  @Column({ type: 'varchar' })
  subject: string

  @Column({ name: 'due_date', type: 'timestamp' })
  dueDate: Date

  @Column({ type: 'varchar', name: 'due_time' })
  dueTime: string

  @Column({ type: 'varchar' })
  priority: string

  @Column({ type: 'int', default: 100 })
  points: number

  @Column({ type: 'varchar', default: 'published' })
  status: string

  @Column({ type: 'text', name: 'assigned_classes', default: '[]' })
  assignedClasses: string

  @Column({ type: 'varchar', name: 'file_name', nullable: true })
  fileName: string | null

  @Column({ name: 'file_size', type: 'int', nullable: true })
  fileSize: number | null

  @Column({ type: 'varchar', name: 'file_type', nullable: true })
  fileType: string | null

  @Column({ type: 'text', name: 'teaching_instructions', nullable: true })
  teachingInstructions: string | null

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => Teacher, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School

  @ManyToOne(() => Class, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'class_id' })
  class: Class
}
