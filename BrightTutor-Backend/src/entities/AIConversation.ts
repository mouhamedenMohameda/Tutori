import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Student } from './Student'
import { Assignment } from './Assignment'
import { Teacher } from './Teacher'

@Entity('ai_conversations')
export class AIConversation {
  @PrimaryColumn()
  id: string

  @Column({ name: 'student_id' })
  studentId: string

  @Column({ name: 'message_type' })
  messageType: string

  @Column({ name: 'student_message' })
  studentMessage: string

  @Column({ name: 'ai_response' })
  aiResponse: string

  @Column({ name: 'conversation_topic', nullable: true })
  conversationTopic: string | null

  @Column({ name: 'subject_area', nullable: true })
  subjectArea: string | null

  @Column({ name: 'difficulty_level', type: 'int', nullable: true })
  difficultyLevel: number | null

  @Column({ name: 'extracted_topics', nullable: true })
  extractedTopics: string | null

  @Column({ name: 'student_sentiment', nullable: true })
  studentSentiment: string | null

  @Column({ name: 'helpfulness_rating', type: 'int', nullable: true })
  helpfulnessRating: number | null

  @Column({ name: 'assignment_id', nullable: true })
  assignmentId: string | null

  @Column({ name: 'teacher_id', nullable: true })
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
