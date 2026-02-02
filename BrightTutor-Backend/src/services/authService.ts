import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { AppDataSource } from '@/config/data-source'
import { School } from '@/entities'

export type PricingPlan = {
  plan: string
  amountMRU: number
  maxStudents: number
  maxTeachers: number
  features: string[]
}

const PRICING_PLANS: Record<string, PricingPlan> = {
  BASIC_50: {
    plan: 'Basic Plan',
    amountMRU: 12500,
    maxStudents: 50,
    maxTeachers: 5,
    features: ['Up to 50 students', '5 teachers', 'Basic AI tutoring', 'Standard support'],
  },
  STANDARD_100: {
    plan: 'Standard Plan',
    amountMRU: 25000,
    maxStudents: 100,
    maxTeachers: 10,
    features: ['Up to 100 students', '10 teachers', 'Advanced AI tutoring', 'Priority support'],
  },
  PREMIUM_500: {
    plan: 'Premium Plan',
    amountMRU: 100000,
    maxStudents: 500,
    maxTeachers: 50,
    features: ['Up to 500 students', '50 teachers', 'Full AI features', '24/7 support'],
  },
}

export function getPricing(plan: string): PricingPlan {
  return PRICING_PLANS[plan] ?? PRICING_PLANS.BASIC_50
}

export type RegisterSchoolInput = {
  schoolName: string
  contactEmail?: string
  contactPhone?: string
  wilaya?: string
  address?: string
  adminName: string
  adminEmail: string
  password: string
  subscriptionPlan?: string
}

export type RegisterSchoolSuccess = {
  success: true
  message: string
  school: {
    id: string
    schoolName: string
    adminEmail: string
    subscriptionPlan: string
    status: string
  }
  pricing: PricingPlan
  nextSteps: string[]
}

export type RegisterSchoolConflict = {
  success: false
  conflict: true
  error: string
}

export type RegisterSchoolResult = RegisterSchoolSuccess | RegisterSchoolConflict

export async function registerSchool(data: RegisterSchoolInput): Promise<RegisterSchoolResult> {
  const contactEmail = data.contactEmail ?? data.adminEmail
  const repo = AppDataSource.getRepository(School)
  const existingSchool = await repo.findOne({
    where: [{ contactEmail }, { schoolName: data.schoolName }],
  })
  if (existingSchool) {
    return {
      success: false,
      conflict: true,
      error: 'A school with this name or email already exists',
    }
  }

  const hashedPassword = await bcrypt.hash(data.password, 12)
  const plan = data.subscriptionPlan ?? 'BASIC_50'
  const pricing = getPricing(plan)
  const safeWilaya = data.wilaya ?? 'ولاية نواكشوط الشمالية'
  const safeAddress = data.address ?? ''
  const safeContactPhone = data.contactPhone ?? ''

  const newSchool = await repo.save({
    id: uuidv4(),
    schoolName: data.schoolName,
    contactEmail,
    contactPhone: safeContactPhone,
    wilaya: safeWilaya,
    address: safeAddress,
    adminUserId: `admin_${Date.now()}`,
    adminName: data.adminName,
    adminEmail: data.adminEmail,
    adminPassword: hashedPassword,
    subscriptionPlan: plan,
    pricingMRU: pricing.amountMRU,
    maxStudents: pricing.maxStudents,
    maxTeachers: pricing.maxTeachers,
    applicationStatus: 'PENDING',
  })

  return {
    success: true,
    message: 'School application submitted successfully!',
    school: {
      id: newSchool.id,
      schoolName: newSchool.schoolName,
      adminEmail: newSchool.adminEmail,
      subscriptionPlan: newSchool.subscriptionPlan,
      status: newSchool.applicationStatus,
    },
    pricing,
    nextSteps: [
      'Your application has been submitted for review',
      'You will receive an email confirmation shortly',
      'Our team will review your application within 24-48 hours',
      'Upon approval, you will receive login credentials and payment instructions',
    ],
  }
}
