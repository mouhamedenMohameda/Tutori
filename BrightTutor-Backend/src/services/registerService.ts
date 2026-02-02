import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { AppDataSource } from '@/config/data-source'
import { School } from '@/entities'

export type RegisterSimpleInput = {
  schoolName: string
  adminName: string
  adminEmail: string
  password: string
  wilaya?: string
  address?: string
}

export type RegisterSimpleResult = {
  success: true
  message: string
  school: {
    id: string
    schoolName: string
    adminEmail: string
    status: string
  }
}

export async function registerSimple(data: RegisterSimpleInput): Promise<RegisterSimpleResult> {
  const hashedPassword = await bcrypt.hash(data.password, 12)
  const repo = AppDataSource.getRepository(School)
  const newSchool = await repo.save({
    id: uuidv4(),
    schoolName: data.schoolName,
    contactEmail: data.adminEmail,
    adminUserId: `admin_${Date.now()}`,
    adminName: data.adminName,
    adminEmail: data.adminEmail,
    adminPassword: hashedPassword,
    subscriptionPlan: 'BASIC_50',
    applicationStatus: 'PENDING',
    wilaya: data.wilaya ?? null,
    address: data.address ?? null,
  })
  return {
    success: true,
    message: 'School registration successful!',
    school: {
      id: newSchool.id,
      schoolName: newSchool.schoolName,
      adminEmail: newSchool.adminEmail,
      status: newSchool.applicationStatus,
    },
  }
}
