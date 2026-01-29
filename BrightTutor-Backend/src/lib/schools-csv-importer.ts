/**
 * Import schools from CSV file to database
 * This script reads Nouakchott_private_schools__best-effort_.csv and creates schools in the database
 */

import { prisma } from '@/lib/prisma'
import fs from 'fs'
import path from 'path'
import bcrypt from 'bcryptjs'

interface CSVSchool {
  id: string
  name: string
  city: string
  verified: string
  source: string
}

/**
 * Parse CSV file and return array of school objects
 */
export function parseSchoolsCSV(): CSVSchool[] {
  // Try multiple possible paths for the CSV file
  const possiblePaths = [
    path.join(process.cwd(), 'Nouakchott_private_schools__best-effort_.csv'),
    path.join(process.cwd(), '..', 'Nouakchott_private_schools__best-effort_.csv'),
    path.join(__dirname, '..', '..', '..', 'Nouakchott_private_schools__best-effort_.csv'),
    path.join(__dirname, '..', '..', 'Nouakchott_private_schools__best-effort_.csv'),
  ]
  
  let csvPath: string | null = null
  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      csvPath = possiblePath
      console.log('✅ CSV file found at:', csvPath)
      break
    }
  }
  
  if (!csvPath) {
    console.error('❌ CSV file not found in any of these locations:')
    possiblePaths.forEach(p => console.error('   -', p))
    console.error('❌ Current working directory:', process.cwd())
    console.error('❌ __dirname:', __dirname)
    return []
  }

  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  const lines = csvContent.split('\n').filter(line => line.trim())
  
  // Skip header line
  const dataLines = lines.slice(1)
  
  const schools: CSVSchool[] = []
  
  for (const line of dataLines) {
    // Parse CSV line (handle commas in quoted fields)
    const values: string[] = []
    let currentValue = ''
    let inQuotes = false
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i]
      
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim())
        currentValue = ''
      } else {
        currentValue += char
      }
    }
    values.push(currentValue.trim()) // Add last value
    
    if (values.length >= 2 && values[1] && values[1].trim()) { // Ensure we have at least name
      const name = values[1].trim()
      
      // Skip duplicate entries (those marked as "duplicate normalized", "another listing", etc.)
      const isDuplicate = name.toLowerCase().includes('(duplicate') || 
                         name.toLowerCase().includes('duplicate normalized') ||
                         name.toLowerCase().includes('(another listing)')
      
      if (!isDuplicate) {
        schools.push({
          id: values[0] || '',
          name: name,
          city: values[2] || 'Nouakchott',
          verified: values[3] || 'no',
          source: values[4] || ''
        })
      }
    }
  }
  
  return schools
}

/**
 * Parse the French/Arabic schools text file and return array of school objects
 * File format: "French Name - Arabic Name" per line
 * This is used to enrich the schools list for registration (web + mobile).
 */
export function parseFrArSchoolsTxt(): CSVSchool[] {
  // Try multiple possible paths for the TXT file
  const possiblePaths = [
    // Primary location inside BrightTutor-AI-Platform repo (works in dev + production)
    path.join(process.cwd(), 'src', 'data', 'liste_ecoles_fr_ar_filtered.txt'),
    // Fallbacks for local dev / different cwd
    path.join(process.cwd(), 'liste_ecoles_fr_ar_filtered.txt'),
    path.join(process.cwd(), 'data', 'liste_ecoles_fr_ar_filtered.txt'),
    // Legacy fallback when file lives one level up alongside Tutori-MobileApp (old mono-repo)
    path.join(process.cwd(), '..', 'Tutori-MobileApp', 'liste_ecoles_fr_ar_filtered.txt'),
    path.join(__dirname, '..', '..', '..', 'liste_ecoles_fr_ar_filtered.txt'),
  ]

  let txtPath: string | null = null
  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      txtPath = possiblePath
      console.log('✅ FR/AR schools TXT file found at:', txtPath)
      break
    }
  }

  if (!txtPath) {
    console.warn('⚠️ FR/AR schools TXT file not found. Searched paths:')
    possiblePaths.forEach(p => console.warn('   -', p))
    return []
  }

  const txtContent = fs.readFileSync(txtPath, 'utf-8')
  const lines = txtContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)

  const schools: CSVSchool[] = []

  lines.forEach((line, index) => {
    // Expected format: "French Name - Arabic Name"
    const parts = line.split(' - ')
    const frenchName = (parts[0] || '').trim()
    const arabicName = (parts[1] || '').trim()

    if (!frenchName) return

    schools.push({
      id: `frar_${index + 1}`,
      name: frenchName,
      // Use Arabic name as "city"/second line so dropdown UI shows both languages,
      // just like existing entries show name + city.
      city: arabicName || '',
      verified: 'no',
      source: 'fr_ar_txt',
    })
  })

  return schools
}

/**
 * Import schools from CSV to database
 * Creates schools with default admin credentials if they don't exist
 */
export async function importSchoolsFromCSV(): Promise<{ created: number; skipped: number; errors: number }> {
  const schools = parseSchoolsCSV()
  let created = 0
  let skipped = 0
  let errors = 0

  console.log(`📚 Found ${schools.length} schools in CSV`)

  for (const csvSchool of schools) {
    try {
      // Check if school already exists by name
      const existingSchool = await prisma.school.findFirst({
        where: {
          schoolName: {
            equals: csvSchool.name,
            mode: 'insensitive'
          }
        }
      })

      if (existingSchool) {
        console.log(`⏭️  School already exists: ${csvSchool.name}`)
        skipped++
        continue
      }

      // Generate default admin credentials
      const adminEmail = `admin.${csvSchool.name.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9.]/g, '')}@tutori.io`
      const defaultPassword = 'TempPassword123!' // Will need to be changed by admin
      const hashedPassword = await bcrypt.hash(defaultPassword, 10)

      // Create school
      const newSchool = await prisma.school.create({
        data: {
          schoolName: csvSchool.name,
          contactEmail: adminEmail,
          contactPhone: null,
          wilaya: 'ولاية نواكشوط الشمالية',
          address: csvSchool.city || 'Nouakchott',
          adminUserId: `admin_${Date.now()}_${csvSchool.id}`,
          adminName: `${csvSchool.name} Admin`,
          adminEmail: adminEmail,
          adminPassword: hashedPassword,
          subscriptionPlan: 'BASIC_50',
          subscriptionStatus: 'ACTIVE', // Auto-approve CSV schools
          applicationStatus: 'ACTIVE',
          maxStudents: 50,
          maxTeachers: 5,
          approvedDate: new Date(),
          approvedBy: 'system' // System import
        }
      })

      console.log(`✅ Created school: ${csvSchool.name} (${newSchool.id})`)
      created++
    } catch (error) {
      console.error(`❌ Error creating school ${csvSchool.name}:`, error)
      errors++
    }
  }

  return { created, skipped, errors }
}

/**
 * Import schools from FR/AR TXT list to database
 * Creates schools with default admin credentials if they don't exist
 * Used so TXT-based dropdown schools can exist as real School records.
 */
export async function importSchoolsFromFrArTxt(): Promise<{ created: number; skipped: number; errors: number }> {
  const schools = parseFrArSchoolsTxt()
  let created = 0
  let skipped = 0
  let errors = 0

  console.log(`📚 Found ${schools.length} schools in FR/AR TXT file`)

  for (const txtSchool of schools) {
    try {
      // Check if school already exists by name (case insensitive)
      const existingSchool = await prisma.school.findFirst({
        where: {
          schoolName: {
            equals: txtSchool.name,
            mode: 'insensitive'
          }
        }
      })

      if (existingSchool) {
        console.log(`⏭️  TXT school already exists: ${txtSchool.name}`)
        skipped++
        continue
      }

      // Generate default admin credentials
      const adminEmail = `admin.${txtSchool.name.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9.]/g, '')}@tutori.io`
      const defaultPassword = 'TempPassword123!' // Will need to be changed by admin
      const hashedPassword = await bcrypt.hash(defaultPassword, 10)

      // Create school (mark source as TXT import via approvedBy)
      const newSchool = await prisma.school.create({
        data: {
          schoolName: txtSchool.name,
          contactEmail: adminEmail,
          contactPhone: null,
          wilaya: 'ولاية نواكشوط الشمالية',
          address: txtSchool.city || 'Nouakchott',
          adminUserId: `admin_${Date.now()}_${txtSchool.id}`,
          adminName: `${txtSchool.name} Admin`,
          adminEmail: adminEmail,
          adminPassword: hashedPassword,
          subscriptionPlan: 'BASIC_50',
          subscriptionStatus: 'ACTIVE',
          applicationStatus: 'ACTIVE',
          maxStudents: 50,
          maxTeachers: 5,
          approvedDate: new Date(),
          approvedBy: 'system_txt_import'
        }
      })

      console.log(`✅ Created TXT school: ${txtSchool.name} (${newSchool.id})`)
      created++
    } catch (error) {
      console.error(`❌ Error creating TXT school ${txtSchool.name}:`, error)
      errors++
    }
  }

  return { created, skipped, errors }
}

