import bcrypt from 'bcryptjs'
import { AppDataSource } from '@/config/data-source'
import { Student } from '@/entities'
import { getJWTSecret } from '@/lib/security/secrets'
import { generateToken } from '@/lib/auth'

export type StudentLoginInput = {
  username: string
  email: string
  password: string
}

export type StudentLoginSuccess = {
  success: true
  message: string
  token: string
  student: {
    id: string
    username: string | null
    studentName: string
    studentId: string
    grade: string | null
    className: string | null
    classroomYear: string | null
    schoolId: string
    schoolName: string
    subjects: { id: string; name: string }[]
  }
}

export type StudentLoginError = {
  success: false
  status: 403 | 404 | 401 | 503
  error: string
  code?: string
}

export type StudentLoginResult = StudentLoginSuccess | StudentLoginError

export async function studentLogin(
  input: StudentLoginInput
): Promise<StudentLoginResult> {
  const repo = AppDataSource.getRepository(Student)
  const student = await repo.findOne({
    where: [
      { username: input.username || input.email, isActive: true },
      { studentId: input.username || input.email, isActive: true },
    ],
    relations: ['school', 'class', 'class.classSubjects', 'class.classSubjects.subject'],
  })

  if (!student) {
    const inactiveStudent = await repo.findOne({
      where: [
        { username: input.username || input.email, isActive: false },
        { studentId: input.username || input.email, isActive: false },
      ],
      relations: ['school'],
    })
    if (inactiveStudent) {
      if (!inactiveStudent.isActive) {
        return {
          success: false,
          status: 403,
          error:
            'Your student account is inactive. Please contact your school administrator or platform support.',
        }
      }
      if (inactiveStudent.school?.applicationStatus !== 'ACTIVE') {
        return {
          success: false,
          status: 403,
          error:
            'Your school account is not active. Please contact your school administrator.',
        }
      }
    }
    return {
      success: false,
      status: 404,
      error:
        'Student account not found. Please check your username and password, or contact your school administrator.',
    }
  }

  const isPasswordValid = await bcrypt.compare(
    input.password,
    student.password || ''
  )
  if (!isPasswordValid) {
    return {
      success: false,
      status: 401,
      error: 'Invalid password. Please try again.',
    }
  }

  await repo.update(student.id, { lastLogin: new Date() }).catch(() => {})

  const jwtSecret = getJWTSecret()
  if (!jwtSecret || jwtSecret.length === 0) {
    return {
      success: false,
      status: 503,
      error: 'Authentication service configuration error. Please contact support.',
      code: 'JWT_CONFIG_ERROR',
    }
  }

  let token: string
  try {
    token = generateToken({
      studentId: student.id,
      username: student.username ?? undefined,
      schoolId: student.schoolId,
      role: 'STUDENT',
    })
  } catch {
    return {
      success: false,
      status: 503,
      error: 'Authentication service is currently unavailable. Please contact support.',
      code: 'JWT_CONFIG_ERROR',
    }
  }

  const classData = student.class as { className?: string; classroomYear?: string; classSubjects?: { subject: { id: string; name: string } }[] } | null
  return {
    success: true,
    message: 'Login successful',
    token,
    student: {
      id: student.id,
      username: student.username,
      studentName: student.studentName,
      studentId: student.studentId,
      grade: student.grade,
      className: classData?.className ?? null,
      classroomYear: classData?.classroomYear ?? null,
      schoolId: student.schoolId,
      schoolName: student.school?.schoolName ?? '',
      subjects: classData?.classSubjects?.map((cs) => cs.subject) ?? [],
    },
  }
}
