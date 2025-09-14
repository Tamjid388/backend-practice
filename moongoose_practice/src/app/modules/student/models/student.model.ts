import { Schema, model } from 'mongoose'
import { TParents, TStudent, TUsername } from '../interfaces/student.interface'
import validator from 'validator'
// UserNameSchema
const userNameSchema = new Schema<TUsername>({
  firstname: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    validate: {
      //Custom Validator Function
      validator: function (value) {
        const nameStr = value.charAt(0).toUpperCase() + value.slice(1)
        return nameStr == value
      },
      message: `{VALUE} is not in capitalize format`,
    },
  },

  middlename: { type: String, trim: true,required:false },
  lastname:
   {
     type: String,
      required: true,
      validate:{
        validator:(value:string)=>{
        return validator.isAlphanumeric(value)
        
        }, 
         message: (props: any) => `${props.value} is not a valid lastname!`
        
      }
    
    },
})
// GuardianSchema
const guardianSchema = new Schema<TParents>({
  father: {
    name: { type: String, required: true, trim: true },
    occupation: { type: String, required: true },
    contact: { type: String, required: true },
  },
  mother: {
    name: { type: String, required: true, trim: true },
    occupation: { type: String, required: true },
    contact: { type: String, required: true },
  },
})
// StudentSchema
const studentSchema = new Schema<TStudent>({
  id: { type: String ,required:true},
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


//Pre Save Middleware 

studentSchema.pre('save',function(){
  console.log(this,"Pree hook middleware");
})
//Post Save Middleware 
studentSchema.post('save',function(){
  console.log(this,"post hook middleware");
})


export const Student = model<TStudent>('Student', studentSchema)
