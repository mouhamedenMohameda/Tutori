import type { Prisma } from '@prisma/client'

export type School = Prisma.SchoolGetPayload<{}>
export type Student = Prisma.StudentGetPayload<{}>
export type Class = Prisma.ClassGetPayload<{}>
export type Teacher = Prisma.TeacherGetPayload<{}>
export type Parent = Prisma.ParentGetPayload<{}>

export enum AdminRole {
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  PLATFORM_ADMIN = 'PLATFORM_ADMIN',
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

/** JWT payload used by auth (backend: Express; no NextRequest) */
export interface JWTPayload {
  userId?: string
  schoolId?: string
  role?: string
  email?: string
  studentId?: string
  username?: string
  parentId?: string
  teacherId?: string
}
