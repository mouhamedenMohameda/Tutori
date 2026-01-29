/**
 * Certificate Generator
 * Creates downloadable certificates for streak milestones
 */

export interface CertificateData {
  studentName: string
  milestone: {
    days: number
    level: string
    belt: string
    name: string
  }
  date: Date
}

const STREAK_MILESTONES = [
  { days: 7, level: 'Bon', belt: 'Ceinture Blanche', name: 'Champion 7 Jours' },
  { days: 14, level: 'Excellent', belt: 'Ceinture Jaune', name: 'Maître 14 Jours' },
  { days: 30, level: 'Incroyable', belt: 'Ceinture Orange', name: 'Expert 30 Jours' },
  { days: 50, level: 'Invincible', belt: 'Ceinture Verte', name: 'Légende 50 Jours' }
]

export function getBeltColor(belt: string): string {
  if (belt.includes('Blanche')) return '#FFFFFF'
  if (belt.includes('Jaune')) return '#FCD34D'
  if (belt.includes('Orange')) return '#F97316'
  if (belt.includes('Verte')) return '#22C55E'
  return '#9CA3AF'
}

export function getBeltEmoji(belt: string): string {
  if (belt.includes('Blanche')) return '⚪'
  if (belt.includes('Jaune')) return '🟡'
  if (belt.includes('Orange')) return '🟠'
  if (belt.includes('Verte')) return '🟢'
  return '⚪'
}

/**
 * Generate certificate as image (canvas-based)
 * Works on both mobile and desktop
 */
export async function generateCertificateImage(data: CertificateData): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      // Create canvas
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Could not get canvas context'))
        return
      }

      // Set canvas size (optimized for mobile and desktop)
      const width = 1200
      const height = 800
      canvas.width = width
      canvas.height = height

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, '#1E3A8A') // Dark blue
      gradient.addColorStop(1, '#3B82F6') // Light blue
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Border
      ctx.strokeStyle = '#FCD34D' // Gold
      ctx.lineWidth = 10
      ctx.strokeRect(10, 10, width - 20, height - 20)

      // Inner border
      ctx.strokeStyle = '#FFFFFF'
      ctx.lineWidth = 3
      ctx.strokeRect(30, 30, width - 60, height - 60)

      // Title
      ctx.fillStyle = '#FCD34D'
      ctx.font = 'bold 48px Arial, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('CERTIFICAT DE RÉUSSITE', width / 2, 120)

      // Subtitle
      ctx.fillStyle = '#FFFFFF'
      ctx.font = '32px Arial, sans-serif'
      ctx.fillText('Apprenant Dédié Certifié', width / 2, 170)

      // Student name
      ctx.fillStyle = '#FCD34D'
      ctx.font = 'bold 56px Arial, sans-serif'
      ctx.fillText(data.studentName.toUpperCase(), width / 2, 280)

      // Achievement subtitle
      ctx.fillStyle = '#FFFFFF'
      ctx.font = '36px Arial, sans-serif'
      ctx.fillText(
        `${data.studentName} - ${data.milestone.name}`,
        width / 2,
        340
      )

      // Belt badge circle
      const beltColor = getBeltColor(data.milestone.belt)
      const centerX = width / 2
      const centerY = 450
      const radius = 80

      // Outer circle (belt color)
      ctx.fillStyle = beltColor
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
      ctx.fill()

      // Inner circle (white)
      ctx.fillStyle = '#FFFFFF'
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius - 15, 0, 2 * Math.PI)
      ctx.fill()

      // Belt emoji/text
      ctx.fillStyle = '#000000'
      ctx.font = 'bold 48px Arial, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(getBeltEmoji(data.milestone.belt), centerX, centerY + 15)

      // Belt name
      ctx.fillStyle = '#FFFFFF'
      ctx.font = 'bold 28px Arial, sans-serif'
      ctx.fillText(data.milestone.belt, width / 2, 580)

      // Date
      const dateStr = data.date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      ctx.fillStyle = '#E5E7EB'
      ctx.font = '24px Arial, sans-serif'
      ctx.fillText(`Obtenu le ${dateStr}`, width / 2, 650)

      // Footer
      ctx.fillStyle = '#FCD34D'
      ctx.font = 'bold 20px Arial, sans-serif'
      ctx.fillText('Tutori - Plateforme d\'Apprentissage', width / 2, 750)

      // Convert to blob
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob)
          } else {
            reject(new Error('Failed to create blob'))
          }
        },
        'image/png',
        1.0
      )
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * Download certificate as image
 */
export async function downloadCertificate(data: CertificateData): Promise<void> {
  try {
    const blob = await generateCertificateImage(data)
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `certificat-${data.studentName}-${data.milestone.days}jours.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Failed to download certificate:', error)
    throw error
  }
}

/**
 * Share certificate (mobile native share or download on desktop)
 */
export async function shareCertificate(data: CertificateData): Promise<void> {
  try {
    const blob = await generateCertificateImage(data)
    const file = new File([blob], `certificat-${data.milestone.days}jours.png`, {
      type: 'image/png'
    })

    // Check if Web Share API is available (mobile)
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: `Mon certificat ${data.milestone.belt}!`,
        text: `J'ai obtenu ma ${data.milestone.belt} avec ${data.milestone.days} jours de suite sur Tutori! 🎉`,
        files: [file]
      })
    } else {
      // Fallback to download on desktop
      await downloadCertificate(data)
    }
  } catch (error) {
    // If share fails, fallback to download
    if (error instanceof Error && error.name !== 'AbortError') {
      await downloadCertificate(data)
    }
  }
}


