import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class PeopleForm extends Component {
    render() {
        return (
            <div>
                <h1>Filter People form</h1>
                <>
                    <Form onSubmit={this.props.getPeople}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onChange={this.props.updateSearchName} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Control onChange={this.props.updateSearchRole} name="role" as="select">
                            <option>student</option>
                            <option>TA</option>
                        </Form.Control>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </>
            </div>
        )
    }
}

export default PeopleForm
