import 'reflect-metadata'
import { app } from '@/app'
import { getDataSource } from '@/config/data-source'

const PORT = process.env.PORT || 4000

getDataSource()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`BrightTutor API listening on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Failed to initialize database:', err)
    process.exit(1)
  })
