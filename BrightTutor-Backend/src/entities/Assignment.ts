import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Teacher } from './Teacher'
import { School } from './School'
import { Class } from './Class'

@Entity('assignments')
export class Assignment {
  @PrimaryColumn()
  id: string

  @Column({ name: 'teacher_id' })
  teacherId: string

  @Column({ name: 'school_id' })
  schoolId: string

  @Column({ name: 'class_id' })
  classId: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  subject: string

  @Column({ name: 'due_date', type: 'timestamp' })
  dueDate: Date

  @Column({ name: 'due_time' })
  dueTime: string

  @Column()
  priority: string

  @Column({ default: 100 })
  points: number

  @Column({ default: 'published' })
  status: string

  @Column({ name: 'assigned_classes', default: '[]' })
  assignedClasses: string

  @Column({ name: 'file_name', nullable: true })
  fileName: string | null

  @Column({ name: 'file_size', type: 'int', nullable: true })
  fileSize: number | null

  @Column({ name: 'file_type', nullable: true })
  fileType: string | null

  @Column({ name: 'teaching_instructions', nullable: true })
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
