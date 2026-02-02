import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { School } from './School'
import { TeacherClass } from './TeacherClass'

@Entity('teachers')
export class Teacher {
  @PrimaryColumn()
  id: string

  @Column({ name: 'teacher_name' })
  name: string

  @Column({ name: 'teacher_email' })
  email: string

  @Column({ name: 'teacher_password' })
  password: string

  @Column({ name: 'school_id' })
  schoolId: string

  @Column({ default: '[]' })
  subjects: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School

  @OneToMany(() => TeacherClass, (tc) => tc.teacher)
  teacherClasses: TeacherClass[]
}
