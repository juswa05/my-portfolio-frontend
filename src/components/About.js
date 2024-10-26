import React, { useEffect } from 'react';
import Navigation from '../components/Navbar.js';

const About = () => {
    useEffect(() => {
        document.title = 'About'; // Set the document title
    }, []);
    return (
        <div>
            <Navigation />
        </div>
    );
};

export default About;