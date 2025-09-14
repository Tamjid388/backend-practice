import { string } from 'joi'
import { Schema, model, connect, Model } from 'mongoose'

export type TUsername={
    firstname: string
    middlename?: string
    lastname: string
}

export type TParents= {
    father: {
      name: string
      occupation: string
      contact: string
    }
    mother: {
      name: string
      occupation: string
      contact: string
    }
  }
export type TStudent = {
  id:string
  name: TUsername
  gender: 'male' | 'female'
  email: string
  dob: string
  contactnumber: string
  emergency: string
  bloodgroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
 
  parents: TParents
}


