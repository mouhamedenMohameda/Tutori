import { AppDataSource } from '@/config/data-source'
import { Assignment } from '@/entities'

export async function getAssignments(schoolId: string) {
  const repo = AppDataSource.getRepository(Assignment)
  const assignments = await repo.find({
    where: { schoolId },
    relations: ['teacher', 'class'],
    order: { createdAt: 'DESC' },
  })
  const formatted = assignments.map((a) => ({
    id: a.id,
    title: a.title,
    description: a.description,
    subject: a.subject,
    dueDate: a.dueDate?.toISOString?.(),
    dueTime: a.dueTime,
    priority: a.priority,
    points: a.points,
    status: a.status,
    assignedClasses:
      typeof a.assignedClasses === 'string'
        ? JSON.parse(a.assignedClasses || '[]')
        : (a.assignedClasses || []),
    teacherName: a.teacher?.name,
    className: a.class?.className,
    fileName: a.fileName || '',
    fileSize: a.fileSize || 0,
    fileType: a.fileType || '',
    teachingInstructions: a.teachingInstructions || '',
    createdAt: a.createdAt?.toISOString?.(),
    updatedAt: a.updatedAt?.toISOString?.(),
  }))
  return { assignments: formatted }
}
