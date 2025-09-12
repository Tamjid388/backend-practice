// app.ts
import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/routes/student.route'

const app = express()

// middlewares
app.use(express.json())

app.use(cors())

app.use('/api/v1/',StudentRoutes)



app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
