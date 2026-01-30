/**
 * Routes restantes à porter depuis BrightTutor-AI-Platform/src/app/api/
 * Chaque handler retourne 501 avec originalPath pour faciliter le portage.
 */
import { Router, Request, Response } from 'express'

const router = Router()

function notImplemented(originalPath: string) {
  return (_req: Request, res: Response) => {
    res.status(501).json({
      error: 'Not implemented yet',
      originalPath: `BrightTutor-AI-Platform/src/app/api/${originalPath}/route.ts`,
    })
  }
}

export default router
