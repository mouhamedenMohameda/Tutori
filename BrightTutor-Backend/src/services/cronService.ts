import { In, LessThan } from 'typeorm'
import { AppDataSource } from '@/config/data-source'
import { StudentPushToken, Student } from '@/entities'
import { sendDailyReminderNotification } from '@/lib/push-notifications'
import { sendInactiveReminderNotification } from '@/lib/push-notifications'

export async function runDailyNotifications() {
  const tokenRepo = AppDataSource.getRepository(StudentPushToken)
  const studentRepo = AppDataSource.getRepository(Student)
  const activeTokens = await tokenRepo.find({
    where: { isActive: true },
    select: ['studentId'],
  })
  const studentIdsWithTokens = [...new Set(activeTokens.map((t) => t.studentId))]
  if (studentIdsWithTokens.length === 0) {
    return {
      message: 'No students with active push tokens',
      sent: 0,
      errors: 0,
      stats: { totalStudentsWithTokens: 0, inactiveStudents: 0, activeStudentsSkipped: 0, totalSent: 0, totalErrors: 0, successRate: '0%' },
      results: [] as Array<{ studentId: string; success: boolean; error?: string }>,
    }
  }
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const now = new Date()
  const allStudentsWithTokens = await studentRepo.find({
    where: { isActive: true, id: In(studentIdsWithTokens) },
    relations: ['pushTokens', 'quizSessions', 'conversations'],
  })
  const inactiveStudents = allStudentsWithTokens.filter((s) => {
    const hasQuiz = (s.quizSessions?.length || 0) > 0
    const hasChat = (s.conversations?.length || 0) > 0
    return !hasQuiz && !hasChat
  })
  if (inactiveStudents.length === 0) {
    return {
      message: 'All students with push tokens were active today - no notifications needed',
      sent: 0,
      errors: 0,
      stats: {
        totalStudentsWithTokens: allStudentsWithTokens.length,
        inactiveStudents: 0,
        activeStudentsSkipped: allStudentsWithTokens.length,
        totalSent: 0,
        totalErrors: 0,
        successRate: '0%',
      },
      results: [] as Array<{ studentId: string; success: boolean; error?: string }>,
    }
  }
  let totalSent = 0
  let totalErrors = 0
  const results: Array<{ studentId: string; success: boolean; error?: string }> = []
  for (const student of inactiveStudents) {
    try {
      const result = await sendDailyReminderNotification(student.id, student.studentName)
      totalSent += result.sent
      totalErrors += result.errors
      results.push({
        studentId: student.id,
        success: result.success,
        error: result.errors > 0 ? 'Some devices failed' : undefined,
      })
      await new Promise((r) => setTimeout(r, 100))
    } catch (err: unknown) {
      totalErrors++
      results.push({
        studentId: student.id,
        success: false,
        error: err instanceof Error ? err.message : undefined,
      })
    }
  }
  const total = totalSent + totalErrors
  return {
    message: 'Daily notifications sent (only to inactive students)',
    sent: totalSent,
    errors: totalErrors,
    stats: {
      totalStudentsWithTokens: allStudentsWithTokens.length,
      inactiveStudents: inactiveStudents.length,
      activeStudentsSkipped: allStudentsWithTokens.length - inactiveStudents.length,
      totalSent,
      totalErrors,
      successRate: total > 0 ? ((totalSent / total) * 100).toFixed(2) + '%' : '0%',
    },
    results: results.slice(0, 10),
  }
}

export async function runInactiveReminders() {
  const tokenRepo = AppDataSource.getRepository(StudentPushToken)
  const studentRepo = AppDataSource.getRepository(Student)
  const activeTokens = await tokenRepo.find({
    where: { isActive: true },
    select: ['studentId'],
  })
  const studentIdsWithTokens = [...new Set(activeTokens.map((t) => t.studentId))]
  if (studentIdsWithTokens.length === 0) {
    return {
      message: 'No students with active push tokens',
      sent: 0,
      errors: 0,
      stats: { totalStudentsWithTokens: 0, totalSent: 0, totalErrors: 0, successRate: '0%' },
      results: [] as Array<{ studentId: string; studentName: string; success: boolean; error?: string }>,
    }
  }
  const tenHoursAgo = new Date(Date.now() - 10 * 60 * 60 * 1000)
  const inactiveStudents = await studentRepo.find({
    where: [
      { isActive: true, id: In(studentIdsWithTokens), lastLogin: LessThan(tenHoursAgo) },
      { isActive: true, id: In(studentIdsWithTokens), lastLogin: null as unknown as Date },
    ],
    relations: ['pushTokens'],
  })
  const studentsToNotify = inactiveStudents.filter((s) => (s.pushTokens?.length || 0) > 0)
  if (studentsToNotify.length === 0) {
    return {
      message: 'No students to notify',
      sent: 0,
      errors: 0,
      stats: { totalStudentsWithTokens: 0, totalSent: 0, totalErrors: 0, successRate: '0%' },
      results: [] as Array<{ studentId: string; studentName: string; success: boolean; error?: string }>,
    }
  }
  let totalSent = 0
  let totalErrors = 0
  const results: Array<{ studentId: string; studentName: string; success: boolean; error?: string }> = []
  for (const student of studentsToNotify) {
    try {
      const result = await sendInactiveReminderNotification(student.id, student.studentName)
      totalSent += result.sent
      totalErrors += result.errors
      results.push({
        studentId: student.id,
        studentName: student.studentName,
        success: result.success,
        error: result.errors > 0 ? 'Some devices failed' : undefined,
      })
      await new Promise((r) => setTimeout(r, 100))
    } catch (err: unknown) {
      totalErrors++
      results.push({
        studentId: student.id,
        studentName: student.studentName,
        success: false,
        error: err instanceof Error ? err.message : undefined,
      })
    }
  }
  const total = totalSent + totalErrors
  return {
    message: '10-hour inactive reminders sent',
    sent: totalSent,
    errors: totalErrors,
    stats: {
      totalStudentsWithTokens: studentsToNotify.length,
      totalSent,
      totalErrors,
      successRate: total > 0 ? ((totalSent / total) * 100).toFixed(2) + '%' : '0%',
    },
    results: results.slice(0, 20),
  }
}
