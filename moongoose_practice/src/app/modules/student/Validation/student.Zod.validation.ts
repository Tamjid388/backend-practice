import { z } from 'zod'

// Username Zod schema
export const userNameZodSchema = z.object({
  firstname: z.string().trim().min(1, { message: 'First name is required' }),
  middlename: z.string().trim().optional(),
  lastname: z
    .string()
    .trim()
    .min(1, { message: 'Last name is required' })
    .regex(/^[a-zA-Z0-9]+$/, { message: 'Lastname must be alphanumeric' }),
})

// Parents Zod schema
export const guardianZodSchema = z.object({
  father: z.object({
    name: z.string().trim().min(1, { message: 'Father name is required' }),
    occupation: z.string().min(1, { message: 'Father occupation is required' }),
    contact: z.string().min(1, { message: 'Father contact is required' }),
  }),
  mother: z.object({
    name: z.string().trim().min(1, { message: 'Mother name is required' }),
    occupation: z.string().min(1, { message: 'Mother occupation is required' }),
    contact: z.string().min(1, { message: 'Mother contact is required' }),
  }),
})

// Student Zod schema
export const studentZodSchema = z.object({
  id: z.string(),
  name: userNameZodSchema,
  gender: z.enum(['male', 'female']),
  email: z.string().email({ message: 'Invalid email address' }),
  dob: z.string().min(1, { message: 'Date of birth is required' }),
  contactnumber: z.string(),
  emergency: z.string(),
  bloodgroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),

  parents: guardianZodSchema,
})
