import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class MyForm extends Component {

    update = (e) => {
        this.props.updateName(e);
    }

    render() {
        return (
            <div>
                <h1>Our First Form</h1>
                <>
                    <Form onSubmit={this.props.submitForm}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onChange={this.update} type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </>
            </div>
        )
    }
}

export default MyForm
