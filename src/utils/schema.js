import * as yup from 'yup'

export const contactusSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  message: yup.string().required('Password is required'),
})
