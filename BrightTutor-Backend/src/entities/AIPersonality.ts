import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Student } from './Student'

@Entity('ai_personalities')
export class AIPersonality {
  @PrimaryColumn()
  id: string

  @Column({ name: 'student_id', unique: true })
  studentId: string

  @Column({ name: 'communication_style', nullable: true })
  communicationStyle: string | null

  @Column({ name: 'motivation_triggers', default: '[]' })
  motivationTriggers: string

  @Column({ name: 'learning_progress', default: '{}' })
  learningProgress: string

  @Column({ name: 'key_topics', default: '[]' })
  keyTopics: string

  @Column({ name: 'struggling_areas', default: '[]' })
  strugglingAreas: string

  @Column({ name: 'achievements', default: '[]' })
  achievements: string

  @Column({ name: 'preferred_explanation_style', nullable: true })
  preferredExplanationStyle: string | null

  @Column({ name: 'response_to_encouragement', nullable: true })
  responseToEncouragement: string | null

  @Column({ name: 'attention_span', type: 'int', nullable: true })
  attentionSpan: number | null

  @Column({ name: 'conversation_state', nullable: true })
  conversationState: string | null

  @Column({ name: 'last_interaction', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastInteraction: Date

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @OneToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
