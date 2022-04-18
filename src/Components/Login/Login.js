import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: { error?.message }</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/signup');
    }

    return (
        <div className="container w-50 my-5">
            <h2 className="text-center fw-bold my-3">Please Login</h2>
            <Form onSubmit={ handleSubmit } className="border border-2 px-2 py-4 shadow rounded">
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={ 2 }>
                        Email
                    </Form.Label>
                    <Col sm={ 10 }>
                        <Form.Control ref={ emailRef } type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={ 2 }>
                        Password
                    </Form.Label>
                    <Col sm={ 10 }>
                        <Form.Control ref={ passwordRef } type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>
                <Form.Group as={ Row } className="mb-3">
                    <Col sm={ { span: 10, offset: 2 } }>
                        <Button type="submit" variant="secondary w-100 mx-auto d-block mb-2">Sign in</Button>
                    </Col>
                </Form.Group>
                { errorElement }
                <div className="row">
                    <div className="col-md-6 col-sm-12"></div>
                    <div className="col-md-6 col-sm-12">
                        <p className="me-0">New Here? <Link to="/signup" onClick={ navigateRegister } className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
                    </div>
                </div>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;