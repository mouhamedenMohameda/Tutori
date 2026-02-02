import '@/lib/env-loader'
import express from 'express'
import cors from 'cors'
import { apiRouter } from '@/routes'

const app = express()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)

app.get('/', (_req, res) => {
  res.json({ name: 'BrightTutor API', version: '1.0.0', status: 'ok' })
})

export { app }
