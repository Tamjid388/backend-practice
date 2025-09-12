import { Schema,model } from 'mongoose'
import { Parents, Student, Username } from '../interfaces/student.interface'

// UserNameSchema
const userNameSchema = new Schema<Username>({
  firstname: { type: String, required: true },
  middlename: { type: String },
  lastname: { type: String, required: true },
})
// GuardianSchema
const guardianSchema = new Schema<Parents>({
  father: {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contact: { type: String, required: true },
  },
  mother: {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contact: { type: String, required: true },
  },
})
// StudentSchema
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,

  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  contactnumber: {
    type: String,
  },
  emergency: {
    type: String,
  },
  bloodgroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  parents: guardianSchema,
})

export const StudentModel=model<Student>("Student",studentSchema);
