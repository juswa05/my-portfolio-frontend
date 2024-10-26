import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import LandingPage from '../components/LandingPage';
import Login from '../components/Login';
import Register from '../components/Register';

const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Set LandingPage as the default route */}
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
        </Routes>
    </Router>
);

export default Routing;
