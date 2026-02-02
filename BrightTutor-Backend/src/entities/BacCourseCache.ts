import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('bac_course_cache')
export class BacCourseCache {
  @PrimaryColumn()
  id: string

  @Column({ name: 'exercise_id' })
  exerciseId: string

  @Column({ name: 'course_content' })
  courseContent: string

  @Column({ name: 'average_rating', type: 'float', default: 0 })
  averageRating: number

  @Column({ name: 'total_ratings', default: 0 })
  totalRatings: number

  @Column({ default: '[]' })
  ratings: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
