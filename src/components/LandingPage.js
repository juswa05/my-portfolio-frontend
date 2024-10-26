import React, { useEffect } from 'react';
import Navigation from '../components/Navbar.js';

const LandingPage = () => {
        useEffect(() => {
            document.title = 'Home'; // Set the document title
        }, []);
        return (
            <div>
                <Navigation />
            </div>
        );
};

export default LandingPage;