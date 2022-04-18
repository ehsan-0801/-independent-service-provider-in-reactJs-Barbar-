import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container w-50 my-5">
            <h2 className="text-center fw-bold my-3">Please Login</h2>
            <Form className="border border-2 px-2 py-4 shadow rounded">
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={ 2 }>
                        Email
                    </Form.Label>
                    <Col sm={ 10 }>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={ 2 }>
                        Password
                    </Form.Label>
                    <Col sm={ 10 }>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={ { span: 10, offset: 2 } }>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>
                <Form.Group as={ Row } className="mb-3">
                    <Col sm={ { span: 10, offset: 2 } }>
                        <Button type="submit" variant="secondary w-100 mx-auto d-block mb-2">Sign in</Button>
                    </Col>
                </Form.Group>
                <p>New Here? <Link to="/signup" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
            </Form>
        </div>
    );
};

export default Login;