import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { AuthSchemas } from '@/lib/security/schemas'
import { containsSQLInjection } from '@/lib/security/injection-prevention'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()

function calculatePricing(plan: string) {
  const pricingPlans: Record<string, { plan: string; amountMRU: number; maxStudents: number; maxTeachers: number; features: string[] }> = {
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
  return pricingPlans[plan] || pricingPlans.BASIC_50
}

// POST /api/auth/register — school registration (application)
router.post('/register', async (req: Request, res: Response) => {
  try {
    const body = req.body || {}
    const parsed = AuthSchemas.register.safeParse(body)
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors
      const msg = Object.values(first)[0]?.[0] ?? parsed.error.message
      return res.status(400).json({ error: String(msg) })
    }
    const {
      schoolName,
      contactEmail,
      contactPhone,
      wilaya,
      address,
      adminName,
      adminEmail,
      password,
      subscriptionPlan,
    } = parsed.data

    if (containsSQLInjection(adminEmail) || containsSQLInjection(schoolName)) {
      return res.status(400).json({ error: 'Invalid input detected' })
    }

    const existingSchool = await prisma.school.findFirst({
      where: {
        OR: [
          { contactEmail: contactEmail || adminEmail },
          { schoolName },
        ],
      },
    })
    if (existingSchool) {
      return res.status(409).json({ error: 'A school with this name or email already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const pricing = calculatePricing(subscriptionPlan || 'BASIC_50')
    const safeWilaya = wilaya || 'ولاية نواكشوط الشمالية'
    const safeAddress = address || ''
    const safeContactPhone = contactPhone || ''

    const newSchool = await prisma.school.create({
      data: {
        schoolName,
        contactEmail: contactEmail || adminEmail,
        contactPhone: safeContactPhone,
        wilaya: safeWilaya,
        address: safeAddress,
        adminUserId: `admin_${Date.now()}`,
        adminName,
        adminEmail,
        adminPassword: hashedPassword,
        subscriptionPlan: subscriptionPlan || 'BASIC_50',
        pricingMRU: pricing.amountMRU,
        maxStudents: pricing.maxStudents,
        maxTeachers: pricing.maxTeachers,
        applicationStatus: 'PENDING',
      },
    })

    return res.json({
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
    })
  } catch (error) {
    sendSanitizedError(res, error, 'auth/register')
  }
})

router.get('/login', (_req: Request, res: Response) => {
  res.status(400).json({
    error: 'Please use the login page to select your account type',
    redirect: '/auth/login',
  })
})

router.post('/login', (_req: Request, res: Response) => {
  res.status(400).json({
    error: 'Please use the login page to select your account type',
    redirect: '/auth/login',
  })
})

export default router
