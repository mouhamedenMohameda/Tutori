import bcrypt from 'bcryptjs'
import { AppDataSource } from '@/config/data-source'
import { Teacher } from '@/entities'
import { generateToken } from '@/lib/auth'

export type TeacherLoginInput = {
  email: string
  password: string
  username?: string
}

export type TeacherLoginSuccess = {
  success: true
  message: string
  token: string
  teacher: {
    id: string
    name: string
    email: string
    subjects: unknown[]
    classes: string[]
    schoolId: string
    schoolName: string
  }
}

export type TeacherLoginError = {
  success: false
  status: 404 | 401 | 500
  error: string
}

export type TeacherLoginResult = TeacherLoginSuccess | TeacherLoginError

export async function teacherLogin(
  input: TeacherLoginInput
): Promise<TeacherLoginResult> {
  const repo = AppDataSource.getRepository(Teacher)
  const teacher = await repo.findOne({
    where: {
      email: input.email || input.username,
      school: { applicationStatus: 'ACTIVE' },
    },
    relations: ['school', 'teacherClasses', 'teacherClasses.class'],
  })

  if (!teacher) {
    return {
      success: false,
      status: 404,
      error: 'Teacher not found. Please contact your school administrator.',
    }
  }

  const isPasswordValid = await bcrypt.compare(input.password, teacher.password)
  if (!isPasswordValid) {
    return {
      success: false,
      status: 401,
      error: 'Invalid password. Please try again.',
    }
  }

  const assignedClasses = (teacher.teacherClasses ?? []).map((tc) => tc.class?.className ?? '')
  const subjects = JSON.parse(teacher.subjects || '[]') as unknown[]

  const token = generateToken({
    teacherId: teacher.id,
    email: teacher.email,
    schoolId: teacher.schoolId,
    role: 'TEACHER',
  })

  return {
    success: true,
    message: 'Login successful',
    token,
    teacher: {
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      subjects,
      classes: assignedClasses,
      schoolId: teacher.schoolId,
      schoolName: teacher.school?.schoolName ?? '',
    },
  }
}
