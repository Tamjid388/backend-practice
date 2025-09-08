// app.ts

import express, { type NextFunction, type Request,type Response } from 'express'
const app = express()

app.use(express.json())

const logger=(req:Request,res:Response,next:NextFunction)=>{
console.log(req.url,req.method);
next()
}

const router=express.Router()
const courserouter=express.Router()

app.use('/api/v1',courserouter)
app.use('/api/v1',router)

router.get('/users',(req:Request,res:Response)=>{
  const user=req.body
  console.log(user);
  res.json({
    success:true,
    massage:'Router working properly'
  })
})
courserouter.post('/course',(req:Request,res:Response)=>{
  const user=req.body
  console.log(user);
  res.json({
    success:true,
    massage:'course working properly'
  })
})





app.get('/',logger, (req, res) => {

  res.send('Backend Server Is working')
})

app.post('/test',(req:Request,res:Response)=>{
    console.log('test running');

    res.send("got data")
})



export default app