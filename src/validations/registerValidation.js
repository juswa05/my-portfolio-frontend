import * as Yup from 'yup';

export const userRegistrationValidation = Yup.object({
    username: Yup.string()
        .min(4, 'Username must be at least 4 characters')
        .required('Username is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    firstName: Yup.string()
        .required('First name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    contactNo: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(11, 'Contact number must be at least 11 digits')
        .required('Contact number is required')
});