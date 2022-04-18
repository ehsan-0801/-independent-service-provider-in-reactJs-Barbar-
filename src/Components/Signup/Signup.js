import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        console.log('user', user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/login');
    }
    return (
        <div className="container w-50 my-5">
            <h2 className="text-center fw-bold my-3">Sign Up Here Please</h2>
            <Form onSubmit={ handleRegister } className="border border-2 px-2 py-4 shadow rounded">
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={ 3 }>
                        Name
                    </Form.Label>
                    <Col sm={ 9 }>
                        <Form.Control type="text" placeholder="Name" name="name" required />
                    </Col>
                </Form.Group>
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={ 3 }>
                        Email
                    </Form.Label>
                    <Col sm={ 9 }>
                        <Form.Control type="email" placeholder="Email" name="email" required />
                    </Col>
                </Form.Group>
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={ 3 }>
                        Password
                    </Form.Label>
                    <Col sm={ 9 }>
                        <Form.Control type="password" placeholder="Password" name="password" required />
                    </Col>
                </Form.Group>
                <Form.Group as={ Row } className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={ 3 }>
                        Confirm Password
                    </Form.Label>
                    <Col sm={ 9 }>
                        <Form.Control type="password" placeholder="Password" name="Cpassword" required />
                    </Col>
                </Form.Group>
                <input onClick={ () => setAgree(!agree) } type="checkbox" name="terms" id="terms" />
                <label className={ `ps-2 ${agree ? 'text-primary' : 'text-danger'}` } htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <Form.Group as={ Row } className="mb-3">
                    <input
                        className='w-50 mx-auto btn btn-secondary mt-2'
                        type="submit"
                        value="Register" />
                </Form.Group>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
            </Form>
        </div>
    );
};

export default Signup;