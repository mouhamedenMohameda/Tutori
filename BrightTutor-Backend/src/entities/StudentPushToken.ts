import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Student } from './Student'

@Entity('student_push_tokens')
export class StudentPushToken {
  @PrimaryColumn()
  id: string

  @Column({ name: 'student_id' })
  studentId: string

  @Column({ name: 'expo_push_token' })
  expoPushToken: string

  @Column({ default: 'unknown' })
  platform: string

  @Column({ name: 'device_id', default: 'default' })
  deviceId: string

  @Column({ name: 'is_active', default: true })
  isActive: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
