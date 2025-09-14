import { TStudent } from '../interfaces/student.interface'
import { Student } from '../models/student.model'

const createStudentIntoDB = async (student: TStudent) => {
  // const result = await StudentModel.create(student)
  // return result

  //Using Instance Method
  const studentInstance = new Student(student)
  const result = await studentInstance.save()
  
  return result
}

const getAllStudent = async () => {
  const result = await Student.find()
  return result
}
const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudent,
  getSingleStudent,
}
