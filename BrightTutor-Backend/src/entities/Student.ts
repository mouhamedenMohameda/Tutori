import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from 'typeorm'
import { School } from './School'
import { Class } from './Class'

@Entity('students')
export class Student {
  @PrimaryColumn()
  id: string

  @Column({ name: 'school_id' })
  schoolId: string

  @Column({ name: 'class_id', nullable: true })
  classId: string | null

  @Column({ name: 'student_name' })
  studentName: string

  @Column({ name: 'student_id' })
  studentId: string

  @Column({ nullable: true })
  username: string | null

  @Column({ nullable: true })
  password: string | null

  @Column({ type: 'int', nullable: true })
  age: number | null

  @Column({ name: 'date_of_birth', type: 'timestamp', nullable: true })
  dateOfBirth: Date | null

  @Column({ nullable: true })
  gender: string | null

  @Column({ nullable: true })
  grade: string | null

  @Column({ name: 'learning_style', nullable: true })
  learningStyle: string | null

  @Column({ default: '[]' })
  interests: string

  @Column({ name: 'ai_personality_profile', nullable: true })
  aiPersonalityProfile: string | null

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @Column({ name: 'is_active', default: true })
  isActive: boolean

  @Column({ name: 'is_self_registered', default: false })
  isSelfRegistered: boolean

  @Column({ name: 'last_viewed_community_at', type: 'timestamp', nullable: true })
  lastViewedCommunityAt: Date | null

  @Column({ name: 'language_preference', default: 'fr', nullable: true })
  languagePreference: string | null

  @Column({ name: 'last_login', type: 'timestamp', nullable: true })
  lastLogin: Date | null

  @Column({ name: 'total_tokens_used', default: 0 })
  totalTokensUsed: number

  @Column({ name: 'parent_name', nullable: true })
  parentName: string | null

  @Column({ name: 'parent_phone', nullable: true })
  parentPhone: string | null

  @Column({ name: 'parent_email', nullable: true })
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
