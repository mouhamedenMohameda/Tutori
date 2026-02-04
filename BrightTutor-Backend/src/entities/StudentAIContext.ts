import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Student } from './Student'
import { School } from './School'
import { Assignment } from './Assignment'

@Entity('student_ai_contexts')
export class StudentAIContext {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'student_id' })
  studentId: string

  @Column({ type: 'varchar' })
  subject: string

  @Column({ type: 'uuid', name: 'school_id' })
  schoolId: string

  @Column({ type: 'uuid', name: 'assignment_id', nullable: true })
  assignmentId: string | null

  @Column({ type: 'varchar', name: 'file_name', nullable: true })
  fileName: string | null

  @Column({ type: 'varchar', name: 'file_type', nullable: true })
  fileType: string | null

  @Column({ type: 'text', name: 'teaching_instructions', nullable: true })
  teachingInstructions: string | null

  @Column({ type: 'text', name: 'personalized_notes', nullable: true })
  personalizedNotes: string | null

  @Column({ type: 'varchar', name: 'learning_style', nullable: true })
  learningStyle: string | null

  @Column({ name: 'difficulty_level', type: 'int', nullable: true })
  difficultyLevel: number | null

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School

  @ManyToOne(() => Assignment, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'assignment_id' })
  assignment: Assignment | null
}
