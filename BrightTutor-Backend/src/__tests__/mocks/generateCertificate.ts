export function registerFonts(): void {
  // No-op for tests to avoid loading fonts and console warnings
}

export type CertificateData = {
  studentName: string
  chapterNumber: number
  chapterName: string
  sectionTitle: string
  beltLevel: string
  subject: string
  year: number
  date: string
}

export async function generateCertificate(_data: CertificateData): Promise<Buffer> {
  return Buffer.alloc(0)
}
