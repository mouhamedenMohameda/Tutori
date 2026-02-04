import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Student } from './Student'

@Entity('monthly_reports')
export class MonthlyReport {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'student_id' })
  studentId: string

  @Column({ type: 'int' })
  month: number

  @Column({ type: 'int' })
  year: number

  @Column({ type: 'text', default: '[]' })
  strengths: string

  @Column({ type: 'text', default: '[]' })
  struggles: string

  @Column({ type: 'text', name: 'topics_covered', default: '[]' })
  topicsCovered: string

  @Column({ type: 'int', name: 'questions_asked' })
  questionsAsked: number

  @Column({ type: 'int', name: 'engagement_score' })
  engagementScore: number

  @Column({ type: 'text', name: 'ai_generated_summary' })
  aiGeneratedSummary: string

  @Column({ name: 'generated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  generatedAt: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
