import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Navigation from '../components/Navbar.js';
import '../styles/Login.css'
import axios from 'axios';

const Login = () => {
    useEffect(() => {
        document.title = 'Login'; // Set the document title
    }, []);

    return (
        <div>
            <Navigation />
            <div className="wrapper">
                <form action="#" id="loginForm">
                    <h2>Login</h2>
                    <div className="input-field">
                        <input type="text" id="username" name="username" required />
                        <label htmlFor="username">Enter your username</label>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" name="password" required />
                        <label htmlFor="password">Enter your password</label>
                    </div>
                    <div className="forget">
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" />
                            <p>Remember me</p>
                        </label>
                        <Link to="/forgot-password">Forgot password?</Link> {/* Use Link here */}
                    </div>
                    <button type="submit">Log In</button>
                    <div className="register">
                        <p>Don't have an account? <Link to="/register">Register Here</Link></p> {/* Use Link here */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
