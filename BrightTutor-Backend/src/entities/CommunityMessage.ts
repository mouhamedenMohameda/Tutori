import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Student } from './Student'

@Entity('community_messages')
export class CommunityMessage {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'uuid', name: 'student_id' })
  studentId: string

  @Column({ type: 'varchar', name: 'classroom_year' })
  classroomYear: string

  @Column({ type: 'text' })
  message: string

  @Column({ type: 'varchar', name: 'message_type', default: 'TEXT' })
  messageType: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date

  @Column({ type: 'uuid', name: 'reply_to_message_id', nullable: true })
  replyToMessageId: string | null

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
