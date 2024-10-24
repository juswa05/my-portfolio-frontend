import React, { useEffect } from 'react';
import LandingStyle from '../styles/LandingStyle.css'
import portlogo from '../assets/portlogo.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const LandingPage = () => {
        useEffect(() => {
            document.title = 'Landing Page'; // Set the document title
        }, []);
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <img alt="Logo" src={portlogo} width="100" height="85" className="d-inline-block align-top"/>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className="me-4" as={Link} to="/Home">Home</Nav.Link>
                        <Nav.Link className="me-4" as={Link} to="/About">About</Nav.Link>
                        <Nav.Link className="me-4" as={Link} to="/Contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
};

export default LandingPage;