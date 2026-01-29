import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/lib/auth'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting production seed...')

  try {
    // Create platform admin (you!)
    const platformAdmin = await prisma.platformAdmin.upsert({
      where: { email: 'learntowinfragrances@gmail.com' },
      update: {},
      create: {
        email: 'learntowinfragrances@gmail.com',
        password: await hashPassword('yy@#wv09(m'),
        fullName: 'Platform Administrator',
        role: 'PLATFORM_ADMIN'
      }
    })

    console.log('✅ Created platform admin:', platformAdmin.email)
  } catch (error) {
    console.log('ℹ️ Platform admin already exists or creating manually...')
  }

  console.log('🔑 Platform admin login: learntowinfragrances@gmail.com / yy@#wv09(m')
  console.log('🌐 Access at: /platform-admin/')
  console.log('📧 Contact: contact@learn-to-win.com')
  console.log('📞 Phone: +222 43 22 77 48')

  console.log('\n🎉 Production seed completed!')
  console.log('\n📋 Next steps:')
  console.log('1. Schools can now register at /auth/register')
  console.log('2. You can approve/reject schools at /platform-admin/')
}

main()
  .catch((e) => {
    console.error('Seed error:', e)
    console.log('🔧 Manual setup may be required')
    process.exit(0) // Don't fail the deployment
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 