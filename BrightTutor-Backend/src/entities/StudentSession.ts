import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Student } from './Student'

@Entity('student_sessions')
export class StudentSession {
  @PrimaryColumn()
  id: string

  @Column({ name: 'student_id' })
  studentId: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date

  @Column({ name: 'session_start', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  sessionStart: Date

  @Column({ name: 'session_end', type: 'timestamp', nullable: true })
  sessionEnd: Date | null

  @Column({ name: 'total_duration', default: 0 })
  totalDuration: number

  @Column({ name: 'chat_time', default: 0 })
  chatTime: number

  @Column({ name: 'map_time', default: 0 })
  mapTime: number

  @Column({ name: 'rankings_time', default: 0 })
  rankingsTime: number

  @Column({ name: 'community_time', default: 0 })
  communityTime: number

  @Column({ name: 'profile_time', default: 0 })
  profileTime: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
