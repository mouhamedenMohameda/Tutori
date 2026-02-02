/**
 * Load environment variables the same way as BrightTutor-AI-Platform:
 * .env.local first (takes precedence), then .env as fallback.
 * Must be imported before any code that reads process.env (e.g. in app.ts).
 */
import path from 'path'
import { config } from 'dotenv'

const envLocalPath = path.resolve(process.cwd(), '.env.local')
const envPath = path.resolve(process.cwd(), '.env')

config({ path: envLocalPath, override: true })
config({ path: envPath }) // fallback, does not override .env.local
