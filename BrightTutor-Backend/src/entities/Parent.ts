import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { School } from './School'
import { StudentParent } from './StudentParent'

@Entity('parents')
export class Parent {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'varchar', name: 'parent_name' })
  name: string

  @Column({ type: 'varchar', name: 'parent_username', unique: true })
  username: string

  @Column({ type: 'varchar', name: 'parent_password' })
  password: string

  @Column({ type: 'varchar', name: 'parent_email' })
  email: string

  @Column({ type: 'varchar', name: 'parent_phone', nullable: true })
  phone: string | null

  @Column({ type: 'uuid', name: 'school_id' })
  schoolId: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School

  @OneToMany(() => StudentParent, (sp) => sp.parent)
  studentParents: StudentParent[]
}
