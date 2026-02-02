import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Student } from './Student'

@Entity('monthly_reports')
export class MonthlyReport {
  @PrimaryColumn()
  id: string

  @Column({ name: 'student_id' })
  studentId: string

  @Column({ type: 'int' })
  month: number

  @Column({ type: 'int' })
  year: number

  @Column({ default: '[]' })
  strengths: string

  @Column({ default: '[]' })
  struggles: string

  @Column({ name: 'topics_covered', default: '[]' })
  topicsCovered: string

  @Column({ name: 'questions_asked' })
  questionsAsked: number

  @Column({ name: 'engagement_score' })
  engagementScore: number

  @Column({ name: 'ai_generated_summary' })
  aiGeneratedSummary: string

  @Column({ name: 'generated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  generatedAt: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
