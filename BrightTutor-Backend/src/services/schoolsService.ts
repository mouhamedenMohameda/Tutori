import { parseSchoolsCSV, parseFrArSchoolsTxt } from '@/lib/schools-csv-importer'

export type SchoolListItem = {
  id: string
  name: string
  city: string
  address?: string
}

export function getSchoolsList(search?: string): {
  schools: SchoolListItem[]
  message?: string
} {
  const csvSchools = parseSchoolsCSV()
  const frArSchools = parseFrArSchoolsTxt()
  if (csvSchools.length === 0 && frArSchools.length === 0) {
    return {
      schools: [],
      message: 'No schools found in CSV or FR/AR TXT files',
    }
  }
  const uniqueSchools = new Map<string, { id: string; name: string; city: string }>()
  const allSources = [...csvSchools, ...frArSchools]
  for (const school of allSources) {
    if (!school.name?.trim()) continue
    const normalizedName = school.name.trim().toLowerCase().replace(/\s+/g, ' ')
    if (!uniqueSchools.has(normalizedName)) {
      uniqueSchools.set(normalizedName, {
        id: school.id || `school_${uniqueSchools.size + 1}`,
        name: school.name.trim(),
        city: school.city || 'Nouakchott',
      })
    }
  }
  let schools = Array.from(uniqueSchools.values())
  if (search) {
    const searchLower = search.toLowerCase()
    schools = schools.filter(
      (s) =>
        s.name.toLowerCase().includes(searchLower) ||
        s.city.toLowerCase().includes(searchLower)
    )
  }
  schools.sort((a, b) => a.name.localeCompare(b.name))
  return {
    schools: schools.map((s) => ({
      id: s.id,
      name: s.name,
      city: s.city,
      address: s.city || '',
    })),
  }
}

export async function importSchoolsFromCSV(): Promise<{
  created: number
  skipped: number
  errors: number
}> {
  const { importSchoolsFromCSV: doImport } = await import('@/lib/schools-csv-importer')
  const result = await doImport()
  return {
    created: result.created,
    skipped: result.skipped,
    errors: result.errors,
  }
}
