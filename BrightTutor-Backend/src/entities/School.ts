import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

// Relations use string refs to avoid circular imports; types for TS only
type SchoolAdmin = import('./SchoolAdmin').SchoolAdmin
type Teacher = import('./Teacher').Teacher
type Student = import('./Student').Student
type Class = import('./Class').Class
type Parent = import('./Parent').Parent
type Assignment = import('./Assignment').Assignment
type Subject = import('./Subject').Subject
type StudentAIContext = import('./StudentAIContext').StudentAIContext

@Entity('schools')
export class School {
  @PrimaryColumn('uuid')
  id: string

  @Column({ type: 'varchar', name: 'school_name' })
  schoolName: string

  @Column({ type: 'varchar', name: 'domain_name', nullable: true, unique: true })
  domainName: string | null

  @Column({ type: 'varchar', name: 'contact_email' })
  contactEmail: string

  @Column({ type: 'varchar', name: 'contact_phone', nullable: true })
  contactPhone: string | null

  @Column({ type: 'varchar', nullable: true })
  wilaya: string | null

  @Column({ type: 'text', nullable: true })
  address: string | null

  @Column({ type: 'varchar', name: 'application_status', default: 'PENDING' })
  applicationStatus: string

  @Column({ name: 'application_date', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  applicationDate: Date

  @Column({ name: 'approved_date', type: 'timestamp', nullable: true })
  approvedDate: Date | null

  @Column({ type: 'varchar', name: 'approved_by', nullable: true })
  approvedBy: string | null

  @Column({ type: 'text', name: 'rejection_reason', nullable: true })
  rejectionReason: string | null

  @Column({ type: 'varchar', name: 'subscription_plan', default: 'TRIAL' })
  subscriptionPlan: string

  @Column({ type: 'varchar', name: 'subscription_status', default: 'PENDING' })
  subscriptionStatus: string

  @Column({ name: 'subscription_start', type: 'timestamp', nullable: true })
  subscriptionStart: Date | null

  @Column({ name: 'subscription_end', type: 'timestamp', nullable: true })
  subscriptionEnd: Date | null

  @Column({ name: 'pricing_mru', type: 'int', nullable: true })
  pricingMRU: number | null

  @Column({ type: 'boolean', name: 'payment_confirmed', default: false })
  paymentConfirmed: boolean

  @Column({ type: 'uuid', name: 'admin_user_id' })
  adminUserId: string

  @Column({ type: 'varchar', name: 'admin_name' })
  adminName: string

  @Column({ type: 'varchar', name: 'admin_email', unique: true })
  adminEmail: string

  @Column({ type: 'varchar', name: 'admin_password' })
  adminPassword: string

  @Column({ type: 'int', name: 'max_students', default: 10 })
  maxStudents: number

  @Column({ type: 'int', name: 'max_teachers', default: 2 })
  maxTeachers: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @OneToMany('SchoolAdmin', 'school')
  admins: SchoolAdmin[]

  @OneToMany('Teacher', 'school')
  teachers: Teacher[]

  @OneToMany('Student', 'school')
  students: Student[]

  @OneToMany('Class', 'school')
  classes: Class[]

  @OneToMany('Parent', 'school')
  parents: Parent[]

  @OneToMany('Assignment', 'school')
  assignments: Assignment[]

  @OneToMany('Subject', 'school')
  subjects: Subject[]

  @OneToMany('StudentAIContext', 'school')
  studentAIContexts: StudentAIContext[]
}
