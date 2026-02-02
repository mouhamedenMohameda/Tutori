import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('platform_admins')
export class PlatformAdmin {
  @PrimaryColumn()
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ name: 'full_name' })
  fullName: string

  @Column({ default: 'PLATFORM_ADMIN' })
  role: string

  @Column({ name: 'is_active', default: true })
  isActive: boolean

  @Column({ name: 'last_login', type: 'timestamp', nullable: true })
  lastLogin: Date | null

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
