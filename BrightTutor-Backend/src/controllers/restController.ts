import { Request, Response } from 'express'

/**
 * Stub for routes not yet ported from BrightTutor-AI-Platform.
 * Each handler returns 501 with originalPath for easier porting.
 */
export function notImplemented(originalPath: string) {
  return (_req: Request, res: Response): void => {
    res.status(501).json({
      error: 'Not implemented yet',
      originalPath: `BrightTutor-AI-Platform/src/app/api/${originalPath}/route.ts`,
    })
  }
}
