import { Schema, model, connect } from 'mongoose'

export type Username={
    firstname: string
    middlename: string
    lastname: string
}

export type Parents= {
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
export type Student = {
  id:string
  name: Username
  gender: 'male' | 'female'
  email: string
  dob: string
  contactnumber: string
  emergency: string
  bloodgroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentadderess: string
  permanentaddress: string
  parents: Parents
}

