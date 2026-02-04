import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm'
import { School } from './School'

@Entity('school_admins')
export class SchoolAdmin {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'school_id' })
  schoolId: string

  @Column({ type: 'varchar' })
  email: string

  @Column({ type: 'varchar', name: 'password_hash' })
  passwordHash: string

  @Column({ type: 'varchar', name: 'full_name' })
  fullName: string

  @Column({ type: 'varchar', default: 'TEACHER' })
  role: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School
}
