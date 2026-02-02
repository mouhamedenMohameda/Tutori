import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm'
import { School } from './School'

@Entity('school_admins')
export class SchoolAdmin {
  @PrimaryColumn()
  id: string

  @Column({ name: 'school_id' })
  schoolId: string

  @Column()
  email: string

  @Column({ name: 'password_hash' })
  passwordHash: string

  @Column({ name: 'full_name' })
  fullName: string

  @Column({ default: 'TEACHER' })
  role: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School
}
