import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getJWTSecret } from '@/lib/security/secrets'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'
import {
  generateCertificateBuffer,
  getCertificateFilename,
} from '@/services/certificateService'

const JWT_SECRET = () => getJWTSecret()

export async function generateHandler(req: Request, res: Response): Promise<void> {
  try {
    const authHeader = req.headers.authorization
    if (authHeader?.startsWith('Bearer ')) {
      try {
        const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET()) as {
          role?: string
          studentId?: string
        }
        if (decoded.role !== 'STUDENT' || !decoded.studentId) {
          res.status(403).json({ error: 'Unauthorized - Student access only' })
          return
        }
      } catch {
        // continue without auth
      }
    }
    const body = req.body || {}
    const required = [
      'studentName',
      'chapterNumber',
      'chapterName',
      'sectionTitle',
      'beltLevel',
      'subject',
      'year',
      'date',
    ]
    for (const field of required) {
      if (
        body[field] === undefined ||
        body[field] === null ||
        body[field] === ''
      ) {
        res.status(400).json({ error: `Missing required field: ${field}` })
        return
      }
    }
    const certificateBuffer = await generateCertificateBuffer({
      studentName: body.studentName,
      chapterNumber: Number(body.chapterNumber),
      chapterName: body.chapterName,
      sectionTitle: body.sectionTitle,
      beltLevel: body.beltLevel,
      subject: body.subject,
      year: Number(body.year),
      date: body.date,
    })
    const filename = getCertificateFilename(body.studentName, body.chapterNumber)
    res.set({
      'Content-Type': 'image/png',
      'Content-Disposition': `attachment; filename=${filename}`,
      'Cache-Control': 'no-cache',
    })
    res.send(certificateBuffer)
  } catch (error) {
    sendSanitizedError(res, error, 'certificate/generate')
  }
}

export async function testHandler(_req: Request, res: Response): Promise<void> {
  try {
    const certificateBuffer = await generateCertificateBuffer({
      studentName: 'Hannah Morales',
      chapterNumber: 1,
      chapterName: 'Nouakchott',
      sectionTitle: 'Les Nombres Entiers',
      beltLevel: 'Blanche',
      subject: 'Mathématiques',
      year: 1,
      date: '6 janvier 2026',
    })
    res.set({
      'Content-Type': 'image/png',
      'Content-Disposition': 'attachment; filename=test_certificate.png',
      'Cache-Control': 'no-cache',
    })
    res.send(certificateBuffer)
  } catch (error) {
    sendSanitizedError(res, error, 'certificate/test')
  }
}
