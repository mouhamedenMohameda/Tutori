import { generateCertificate } from '@/lib/generateCertificate'

export type CertificateInput = {
  studentName: string
  chapterNumber: number
  chapterName: string
  sectionTitle: string
  beltLevel: string
  subject: string
  year: number
  date: string
}

export async function generateCertificateBuffer(
  input: CertificateInput
): Promise<Buffer> {
  return generateCertificate(input)
}

export function getCertificateFilename(studentName: string, chapterNumber: number): string {
  return `Certificat_${String(studentName).replace(/\s+/g, '_')}_Chapitre${chapterNumber}.png`
}
