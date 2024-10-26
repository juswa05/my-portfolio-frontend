import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../components/Navbar.js';

const Register = () => {
    useEffect(() => {
        document.title = 'Register';
    }, []);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
        try {
            // Send a POST request to the Spring API with form data
            const response = await axios.post('http://localhost:8080/api/users/register', formData);
            console.log('User registered:', response.data);  // Log successful registration
        } catch (error) {
            console.error('Registration error:', error);  // Log any errors
        }
    };

    return (
        <div>
            <Navigation />
            <div className="wrapper">
                <form onSubmit={handleSubmit} id="registerForm">
                    <h2>Register</h2>
                    <div className="input-field-group">
                        <div className="input-field">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Username</label>
                        </div>
                        <div className="input-field">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Password</label>
                        </div>
                    </div>
                    <div className="input-field-group">
                        <div className="input-field">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                            <label>First Name</label>
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Last Name</label>
                        </div>
                    </div>
                    <div className="input-field-group">
                        <div className="input-field">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                type="number"
                                id="contactNo"
                                name="contactNo"
                                value={formData.contactNo}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Phone No.</label>
                        </div>
                    </div>
                    <button type="submit">Register</button>
                    <div className="register">
                        <p>Already have an account? <Link to="/Login">Login Here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;