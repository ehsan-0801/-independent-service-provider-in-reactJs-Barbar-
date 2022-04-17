import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <h2 className="p-5 text-center text-light" id="contact" style={ { background: '#006d77' } }>Contact me</h2>
            <div className="w-100 container">
                <Form>
                    <Form.Label>What are your Queries?</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option disabled></option>
                        <option value="1">Do You bring photos of different style?</option>
                        <option value="2">Can you come to my office?</option>
                        <option value="3">Can I negotiate the price?</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Details</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={ { height: '100px' } }
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Contact;