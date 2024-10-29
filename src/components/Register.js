import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { userRegistrationValidation } from '../validations/registerValidation';
import { registerUser } from '../utils/api/userRegisterApi';
import Navigation from '../components/Navbar.js';

const Register = () => {
    useEffect(() => {
        document.title = 'Register';
    }, []);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            contactNo: '',
        },
        validationSchema: userRegistrationValidation,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const userData = await registerUser(values);
                console.log('User registered:', userData);
            } catch (error) {
                console.error('Error during registration:', error);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div>
            <Navigation />
            <div className="wrapper">
                <form onSubmit={formik.handleSubmit} id="registerForm">
                    <h2>Register</h2>
                    <div className="input-field-group">
                        <div className="input-field">
                            <input type="text" id="username" name="username" {...formik.getFieldProps('username')} aria-describedby="usernameError"/>
                            <label>Username</label>
                            {formik.touched.username && formik.errors.username ? (
                                <div id="usernameError" className="error">{formik.errors.username}</div>
                            ) : null}
                        </div>
                        <div className="input-field">
                            <input type="password" id="password" name="password" {...formik.getFieldProps('password')} aria-describedby="passwordError"/>
                            <label>Password</label>
                            {formik.touched.password && formik.errors.password ? (
                                <div id="passwordError" className="error">{formik.errors.password}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="input-field-group">
                        <div className="input-field">
                            <input type="text" id="firstName" name="firstName" {...formik.getFieldProps('firstName')} aria-describedby="firstNameError"/>
                            <label>First Name</label>
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div id="firstNameError" className="error">{formik.errors.firstName}</div>
                            ) : null}
                        </div>
                        <div className="input-field">
                            <input type="text" id="lastName" name="lastName" {...formik.getFieldProps('lastName')} aria-describedby="lastNameError"/>
                            <label>Last Name</label>
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div id="lastNameError" className="error">{formik.errors.lastName}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="input-field-group">
                        <div className="input-field">
                            <input type="email" id="email" name="email" {...formik.getFieldProps('email')} aria-describedby="emailError"/>
                            <label>Email</label>
                            {formik.touched.email && formik.errors.email ? (
                                <div id="emailError" className="error">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="input-field">
                            <input type="text" id="contactNo" name="contactNo" {...formik.getFieldProps('contactNo')} aria-describedby="contactNoError"/>
                            <label>Phone No.</label>
                            {formik.touched.contactNo && formik.errors.contactNo ? (
                                <div id="contactNoError" className="error">{formik.errors.contactNo}</div>
                            ) : null}
                        </div>
                    </div>
                    <button type="submit" disabled={formik.isSubmitting || !formik.isValid}>Register</button>
                    <div className="register">
                        <p>Already have an account? <Link to="/Login">Login Here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;