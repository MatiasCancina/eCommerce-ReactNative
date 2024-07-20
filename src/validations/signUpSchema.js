import { object, string, ref } from 'yup'

export const signUpSchema = object().shape({
    email: string().required('Email is required').email('Not a valid email'),
    password: string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: string().oneOf([ref('password'), null], 'Password must match').required('Password must match')
})