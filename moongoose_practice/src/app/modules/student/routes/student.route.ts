import express from "express"
import { studentController } from "../controllers/student.controller";


const router=express.Router();


router.post('/createStudent',studentController.createStudent)

router.get('/getAllstudents',studentController.getAllstudents)
router.get('/getAllstudents/:id',studentController.getSingleStudent)




 
export const StudentRoutes=router