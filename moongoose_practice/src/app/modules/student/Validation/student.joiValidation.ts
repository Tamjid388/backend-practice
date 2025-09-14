  // Creating a schema for joi
   import Joi from "joi"




 const createJoiStudentSchema = Joi.object({
      id: Joi.string().optional(),

      name: Joi.object({
        firstname: Joi.string().trim().required(),
        middlename: Joi.string().trim().optional(),
        lastname: Joi.string()
          .trim()
          .alphanum()
          .required()
           .messages({
    "string.alphanum": '"lastname" must be alphanumeric',
    "any.required": '"lastname" is required',
  }),
      }).required(),

      gender: Joi.string().valid('male', 'female').required(),

      email: Joi.string().email().required(),

      dob: Joi.string().required(),

      contactnumber: Joi.string().optional(),

      emergency: Joi.string().optional(),

      bloodgroup: Joi.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
        .optional(),

      parents: Joi.object({
        father: Joi.object({
          name: Joi.string().trim().required(),
          occupation: Joi.string().required(),
          contact: Joi.string().required(),
        }).required(),
        mother: Joi.object({
          name: Joi.string().trim().required(),
          occupation: Joi.string().required(),
          contact: Joi.string().required(),
        }).required(),
      }).required(),
    })


    export default createJoiStudentSchema