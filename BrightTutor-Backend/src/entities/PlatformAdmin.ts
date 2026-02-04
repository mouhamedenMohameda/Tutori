import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('platform_admins')
export class PlatformAdmin {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'varchar', unique: true })
  email: string

  @Column({ type: 'varchar' })
  password: string

  @Column({ type: 'varchar', name: 'full_name' })
  fullName: string

  @Column({ type: 'varchar', default: 'PLATFORM_ADMIN' })
  role: string

  @Column({ type: 'boolean', name: 'is_active', default: true })
  isActive: boolean

  @Column({ name: 'last_login', type: 'timestamp', nullable: true })
  lastLogin: Date | null

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
