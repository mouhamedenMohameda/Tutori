import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Student } from './Student'
import { Assignment } from './Assignment'
import { Teacher } from './Teacher'

@Entity('ai_conversations')
export class AIConversation {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'student_id' })
  studentId: string

  @Column({ type: 'varchar', name: 'message_type' })
  messageType: string

  @Column({ type: 'text', name: 'student_message' })
  studentMessage: string

  @Column({ type: 'text', name: 'ai_response' })
  aiResponse: string

  @Column({ type: 'varchar', name: 'conversation_topic', nullable: true })
  conversationTopic: string | null

  @Column({ type: 'varchar', name: 'subject_area', nullable: true })
  subjectArea: string | null

  @Column({ name: 'difficulty_level', type: 'int', nullable: true })
  difficultyLevel: number | null

  @Column({ type: 'text', name: 'extracted_topics', nullable: true })
  extractedTopics: string | null

  @Column({ type: 'varchar', name: 'student_sentiment', nullable: true })
  studentSentiment: string | null

  @Column({ name: 'helpfulness_rating', type: 'int', nullable: true })
  helpfulnessRating: number | null

  @Column({ type: 'uuid', name: 'assignment_id', nullable: true })
  assignmentId: string | null

  @Column({ type: 'uuid', name: 'teacher_id', nullable: true })
  teacherId: string | null

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student

  @ManyToOne(() => Assignment, { nullable: true })
  @JoinColumn({ name: 'assignment_id' })
  assignment: Assignment | null

  @ManyToOne(() => Teacher, { nullable: true })
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher | null
}
