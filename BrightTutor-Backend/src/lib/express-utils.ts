import type { Request, Response, RequestHandler } from 'express'
import { sendSanitizedError } from '@/lib/security/error-sanitizer'

export type AsyncRouteHandler = (
  req: Request,
  res: Response
) => Promise<void | Response>

export function asyncHandler(handler: AsyncRouteHandler, context?: string): RequestHandler {
  return (req: Request, res: Response) => {
    Promise.resolve(handler(req, res)).catch((err) => {
      sendSanitizedError(res, err, context)
    })
  }
}
