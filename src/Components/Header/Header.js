import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/barbarLogo.png';
const Header = () => {
    return (
        <>
            <div className="text-center text-primary fs-2 fw-bold">Mr. X The Barbar</div>
            <Navbar sticky="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={ Link } to="/home">
                        <img style={ { width: '50px' } } src={ logo } alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
                        <Nav className="me-0 navlinks">
                            <Nav.Link as={ Link } className="mx-4" to="/">HOME</Nav.Link>
                            <Nav.Link className="mx-4" href="home#services">SERVICES</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4" to="">ABOUT</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4" to="">CONTACT</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4" to="">BLOG</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4" to="">LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;