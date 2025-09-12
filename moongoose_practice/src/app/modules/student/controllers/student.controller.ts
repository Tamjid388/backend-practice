import { Request, Response } from 'express'
import { StudentServices } from '../services/student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student

    const result = await StudentServices.createStudentIntoDB(student)

    res.status(200).json({
      success: true,
      massage: 'Student added to database successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllstudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudent()

    res.status(200).json({
      success: true,
      massage: 'Students Retreive Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const result = await StudentServices.getSingleStudent(id)
    res.status(200).json({
      success: true,
      massage: 'Student Retreive Successfully',
      data: result,
    })
  } catch (error) {}
}

export const studentController = {
  createStudent,
  getAllstudents,
  getSingleStudent,
}
