import { Request, Response } from 'express'
import { StudentServices } from '../services/student.service'
import Joi from 'joi'
import * as z from "zod";
import createJoiStudentSchema from '../Validation/student.joiValidation'
import { studentZodSchema } from '../Validation/student.Zod.validation';
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student


//value is the validated data given by joi
    // const { error, value } = createJoiStudentSchema.validate(student)
    // if (error) {
    //   res.status(400).json({
    //     success: false,
    //     massage: 'Validation failed',
    //     error: error.details,
    //   })
    // }

    // const result = await StudentServices.createStudentIntoDB(value)

// ..............
// ZOD VALIDATION
const zodParseData=studentZodSchema.parse(student)



    const result = await StudentServices.createStudentIntoDB(zodParseData)

    res.status(200).json({
      success: true,
      massage: 'Student added to database successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: 'Error facing inserting student data',
      error: error,
    })
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
    res.status(500).json({
      success: false,
      massage: 'Student Retreive Failed',
      error: error,
    })
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
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: 'Student Retreive Failed',
      error: error,
    })
  }
}

export const studentController = {
  createStudent,
  getAllstudents,
  getSingleStudent,
}
