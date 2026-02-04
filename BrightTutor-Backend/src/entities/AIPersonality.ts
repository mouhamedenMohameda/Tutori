import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Student } from './Student'

@Entity('ai_personalities')
export class AIPersonality {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'student_id', unique: true })
  studentId: string

  @Column({ type: 'varchar', name: 'communication_style', nullable: true })
  communicationStyle: string | null

  @Column({ type: 'text', name: 'motivation_triggers', default: '[]' })
  motivationTriggers: string

  @Column({ type: 'text', name: 'learning_progress', default: '{}' })
  learningProgress: string

  @Column({ type: 'text', name: 'key_topics', default: '[]' })
  keyTopics: string

  @Column({ type: 'text', name: 'struggling_areas', default: '[]' })
  strugglingAreas: string

  @Column({ type: 'text', name: 'achievements', default: '[]' })
  achievements: string

  @Column({ type: 'varchar', name: 'preferred_explanation_style', nullable: true })
  preferredExplanationStyle: string | null

  @Column({ type: 'varchar', name: 'response_to_encouragement', nullable: true })
  responseToEncouragement: string | null

  @Column({ name: 'attention_span', type: 'int', nullable: true })
  attentionSpan: number | null

  @Column({ type: 'varchar', name: 'conversation_state', nullable: true })
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
