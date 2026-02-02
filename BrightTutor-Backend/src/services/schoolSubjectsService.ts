import { AppDataSource } from '@/config/data-source'
import { Subject } from '@/entities'

export async function getSubjects(schoolId: string) {
  const repo = AppDataSource.getRepository(Subject)
  const subjects = await repo.find({
    where: { schoolId, isActive: true },
    order: { createdAt: 'ASC' },
    select: ['id', 'name', 'description', 'subjectType', 'language', 'createdAt', 'updatedAt'],
  })
  return {
    subjects: subjects.map((s) => ({
      id: s.id,
      name: s.name,
      description: s.description ?? '',
      subjectType: s.subjectType ?? '',
      language: s.language ?? 'French',
      createdAt: s.createdAt?.toISOString?.() ?? '',
    })),
  }
}
