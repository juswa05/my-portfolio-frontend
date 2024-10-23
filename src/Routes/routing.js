import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import LandingPage from '../components/LandingPage'; // Import the landing page component

const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Set LandingPage as the default route */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
);

export default Routing;
