import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from 'typeorm'
import { School } from './School'
import { Class } from './Class'

@Entity('students')
export class Student {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'school_id' })
  schoolId: string

  @Column({ type: 'uuid', name: 'class_id', nullable: true })
  classId: string | null

  @Column({ type: 'varchar', name: 'student_name' })
  studentName: string

  @Column({ type: 'varchar', name: 'student_id' })
  studentId: string

  @Column({ type: 'varchar', nullable: true })
  username: string | null

  @Column({ type: 'varchar', nullable: true })
  password: string | null

  @Column({ type: 'int', nullable: true })
  age: number | null

  @Column({ name: 'date_of_birth', type: 'timestamp', nullable: true })
  dateOfBirth: Date | null

  @Column({ type: 'varchar', nullable: true })
  gender: string | null

  @Column({ type: 'varchar', nullable: true })
  grade: string | null

  @Column({ type: 'varchar', name: 'learning_style', nullable: true })
  learningStyle: string | null

  @Column({ type: 'text', default: '[]' })
  interests: string

  @Column({ type: 'text', name: 'ai_personality_profile', nullable: true })
  aiPersonalityProfile: string | null

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @Column({ type: 'boolean', name: 'is_active', default: true })
  isActive: boolean

  @Column({ type: 'boolean', name: 'is_self_registered', default: false })
  isSelfRegistered: boolean

  @Column({ name: 'last_viewed_community_at', type: 'timestamp', nullable: true })
  lastViewedCommunityAt: Date | null

  @Column({ type: 'varchar', name: 'language_preference', default: 'fr', nullable: true })
  languagePreference: string | null

  @Column({ name: 'last_login', type: 'timestamp', nullable: true })
  lastLogin: Date | null

  @Column({ type: 'int', name: 'total_tokens_used', default: 0 })
  totalTokensUsed: number

  @Column({ type: 'varchar', name: 'parent_name', nullable: true })
  parentName: string | null

  @Column({ type: 'varchar', name: 'parent_phone', nullable: true })
  parentPhone: string | null

  @Column({ type: 'varchar', name: 'parent_email', nullable: true })
  parentEmail: string | null

  @ManyToOne(() => School, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'school_id' })
  school: School

  @ManyToOne(() => Class, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'class_id' })
  class: Class | null

  @OneToMany('StudentPushToken', 'student')
  pushTokens: { isActive: boolean; studentId: string }[]
}
