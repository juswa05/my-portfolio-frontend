import React, { useEffect } from 'react';
import Navigation from '../components/Navbar.js';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact'; // Set the document title
    }, []);
    return (
        <div>
            <Navigation />
        </div>
    );
};

export default Contact;