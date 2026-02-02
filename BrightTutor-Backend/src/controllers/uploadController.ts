import { Request, Response } from 'express'
import { validateId } from '@/lib/security/validation'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

export function uploadImageHandler(req: Request, res: Response): void {
  try {
    const file = (req as Request & { file?: { filename: string } }).file
    const studentId = req.body?.studentId
    const teacherId = req.body?.teacherId
    const parentId = req.body?.parentId
    const hasStudent = studentId && validateId(studentId).valid
    const hasTeacher = teacherId && validateId(teacherId).valid
    const hasParent = parentId && validateId(parentId).valid
    if (!hasStudent && !hasTeacher && !hasParent) {
      res.status(400).json({
        error: 'Valid studentId, teacherId, or parentId required',
      })
      return
    }
    if (!file) {
      res.status(400).json({ error: 'Image file required' })
      return
    }
    const url = `/uploads/images/${file.filename}`
    res.json({ success: true, url, filename: file.filename })
  } catch (error) {
    sendSanitizedError(res, error, 'upload-image')
  }
}

export function uploadAudioHandler(req: Request, res: Response): void {
  try {
    const file = (req as Request & { file?: { filename: string } }).file
    if (!file) {
      res.status(400).json({ error: 'Audio file required' })
      return
    }
    const url = `/uploads/audio/${file.filename}`
    res.json({ success: true, url, filename: file.filename })
  } catch (error) {
    sendSanitizedError(res, error, 'upload-audio')
  }
}
