import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/barbarLogo.png';
import PageHeader from '../PageHeader/PageHeader';
const Header = () => {
    return (
        <>
            <PageHeader></PageHeader>
            <Navbar sticky="top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={ Link } to="/home">
                        <img style={ { width: '50px' } } src={ logo } alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
                        <Nav className="me-0 navlinks ">
                            <Nav.Link as={ Link } className="mx-4 text-light" to="/">HOME</Nav.Link>
                            <Nav.Link className="mx-4 text-light" href="home#services">SERVICES</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4 text-light" to="">ABOUT</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4 text-light" to="">CONTACT</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4 text-light" to="">BLOG</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4 text-light" to="">LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;