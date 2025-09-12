import { Student } from '../interfaces/student.interface'
import { StudentModel } from '../models/student.model'

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

const getAllStudent = async () => {
  const result = await StudentModel.find()
  return result
}
const getSingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudent,getSingleStudent
}
