/**
 * Upload routes: POST /upload-image, POST /upload-audio
 */
import { Router, Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { validateId } from '@/lib/security/validation'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

const router = Router()

const uploadDirImage = path.join(process.cwd(), 'public', 'uploads', 'images')
const uploadDirAudio = path.join(process.cwd(), 'public', 'uploads', 'audio')

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}
ensureDir(uploadDirImage)
ensureDir(uploadDirAudio)

const storageImage = multer.diskStorage({
  destination: (_req, _file, cb) => { ensureDir(uploadDirImage); cb(null, uploadDirImage) },
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${(file.originalname || 'image').replace(/[^a-zA-Z0-9.-]/g, '_')}`),
})
const storageAudio = multer.diskStorage({
  destination: (_req, _file, cb) => { ensureDir(uploadDirAudio); cb(null, uploadDirAudio) },
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${(file.originalname || 'audio').replace(/[^a-zA-Z0-9.-]/g, '_')}`),
})

const uploadImage = multer({ storage: storageImage, limits: { fileSize: 10 * 1024 * 1024 } })
const uploadAudio = multer({ storage: storageAudio, limits: { fileSize: 25 * 1024 * 1024 } })

// POST /upload-image — formData: image, and one of studentId, teacherId, parentId
router.post('/upload-image', uploadImage.single('image'), (req: Request, res: Response) => {
  try {
    const file = (req as any).file
    const studentId = req.body?.studentId
    const teacherId = req.body?.teacherId
    const parentId = req.body?.parentId
    const hasStudent = studentId && validateId(studentId).valid
    const hasTeacher = teacherId && validateId(teacherId).valid
    const hasParent = parentId && validateId(parentId).valid
    if (!hasStudent && !hasTeacher && !hasParent) {
      return res.status(400).json({ error: 'Valid studentId, teacherId, or parentId required' })
    }
    if (!file) return res.status(400).json({ error: 'Image file required' })
    const url = `/uploads/images/${file.filename}`
    res.json({ success: true, url, filename: file.filename })
  } catch (error) {
    sendSanitizedError(res, error, 'upload-image')
  }
})

// POST /upload-audio — formData: audio
router.post('/upload-audio', uploadAudio.single('audio'), (req: Request, res: Response) => {
  try {
    const file = (req as any).file
    if (!file) return res.status(400).json({ error: 'Audio file required' })
    const url = `/uploads/audio/${file.filename}`
    res.json({ success: true, url, filename: file.filename })
  } catch (error) {
    sendSanitizedError(res, error, 'upload-audio')
  }
})

export default router
