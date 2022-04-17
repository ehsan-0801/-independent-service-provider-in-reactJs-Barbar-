import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../Images/barbarLogo.png';
const Header = () => {
    return (
        <div>
            <div className="text-center text-primary fs-2 fw-bold">Mr. X The Barbar</div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={ { width: '50px' } } src={ logo } alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
                        <Nav className="me-0">
                            <Nav.Link className="mx-4" href="#home">Home</Nav.Link>
                            <Nav.Link className="mx-4" href="#link">Link</Nav.Link>
                            <Nav.Link className="mx-4" href="#link">Link</Nav.Link>
                            <Nav.Link className="mx-4" href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;