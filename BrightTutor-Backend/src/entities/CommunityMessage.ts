import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Student } from './Student'

@Entity('community_messages')
export class CommunityMessage {
  @PrimaryColumn()
  id: string

  @Column({ name: 'student_id' })
  studentId: string

  @Column({ name: 'classroom_year' })
  classroomYear: string

  @Column()
  message: string

  @Column({ name: 'message_type', default: 'TEXT' })
  messageType: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date

  @Column({ name: 'reply_to_message_id', nullable: true })
  replyToMessageId: string | null

  @ManyToOne(() => Student, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student
}
