import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Images/barbarLogo.png';
import PageHeader from '../PageHeader/PageHeader';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
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
                            <Nav.Link as={ Link } className="mx-4 text-light" to="/home">HOME</Nav.Link>
                            <Nav.Link className="mx-4 text-light" href="home#services">SERVICES</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4 text-light" to="/about">ABOUT</Nav.Link>
                            <Nav.Link className="mx-4 text-light" href="home#contact">CONTACT</Nav.Link>
                            <Nav.Link as={ Link } className="mx-4 text-light" to="/blog">BLOG</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-light text-decoration-none' onClick={ handleSignOut }>SIGN OUT</button>
                                    :
                                    <Nav.Link as={ Link } className='btn btn-link text-light' to="login">
                                        LOGIN
                                    </Nav.Link> }
                            <Nav.Link as={ Link } className="mx-4 text-light" to="signup">SIGNUP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;