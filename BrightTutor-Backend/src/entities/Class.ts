import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from 'typeorm'
import { School } from './School'
import { ClassSubject } from './ClassSubject'
import { TeacherClass } from './TeacherClass'

@Entity('classes')
export class Class {
  @PrimaryColumn()
  id: string

  @Column({ name: 'school_id' })
  schoolId: string

  @Column({ name: 'grade_level' })
  gradeLevel: string

  @Column({ name: 'class_name' })
  className: string

  @Column({ name: 'class_description', nullable: true })
  description: string | null

  @Column({ name: 'teacher_id', nullable: true })
  teacherId: string | null

  @Column({ name: 'academic_year' })
  academicYear: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @Column({ name: 'classroom_year', nullable: true })
  classroomYear: string | null

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School

  @OneToMany(() => ClassSubject, (cs) => cs.class)
  classSubjects: ClassSubject[]

  @OneToMany(() => TeacherClass, (tc) => tc.class)
  teacherClasses: TeacherClass[]

  @OneToMany('Student', 'class')
  students: { id: string }[]
}
