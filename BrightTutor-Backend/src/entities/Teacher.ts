import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { School } from './School'
import { TeacherClass } from './TeacherClass'

@Entity('teachers')
export class Teacher {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'varchar', name: 'teacher_name' })
  name: string

  @Column({ type: 'varchar', name: 'teacher_email' })
  email: string

  @Column({ type: 'varchar', name: 'teacher_password' })
  password: string

  @Column({ type: 'uuid', name: 'school_id' })
  schoolId: string

  @Column({ type: 'text', default: '[]' })
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
