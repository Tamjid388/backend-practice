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

// Checking error handeling middleware

app.get('/error',(req:Request,res:Response,next: NextFunction)=>{
try {
 throw new Error("This is a test error!");
} catch (error) {
  next(error)
}    

})



// Global error handeling

app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
  console.log(error);
    res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
})




export default app