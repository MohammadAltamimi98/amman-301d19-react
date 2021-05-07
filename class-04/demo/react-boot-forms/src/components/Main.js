import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormInfo from './FormInfo';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            favoriteProgrammingLanguage: '',
            likesCats: false,
            show: false

        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({ show: true });
    };

    updateName = (event) => {
        this.setState({ name: event.target.value });
        console.log(this.state.name);
    }

    updateAge = event => this.setState({ age: event.target.value });
    updateProgrammingLanguage = event => this.setState({ favoriteProgrammingLanguage: event.target.value });
    updateLikeCats = event => this.setState({ likesCats: event.target.value });


    handleClose = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <>
                <h2>Hello form Main</h2>

                <Form onSubmit={this.submitForm} >
                    <Form.Group controlId="formPersonData">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.updateName} name="name" type="text" placeholder="Enter your name" />
                        <Form.Label>Age</Form.Label>
                        <Form.Control onChange={this.updateAge} name="age" type="text" placeholder="Enter your age" />

                    </Form.Group>

                    <Form.Group controlId="selectForm">
                        <Form.Label>What is your favorite programming language</Form.Label>
                        <Form.Control onChange={this.updateProgrammingLanguage} name="programmingLanguage" as="select">
                            <option>Choose One</option>
                            <option>Javascript</option>
                            <option>Python</option>
                            <option>C++</option>
                            <option>Java</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check onChange={this.updateLikeCats} name="likesCats" type="checkbox" label="Do you like cats" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <FormInfo
                    name={this.state.name}
                    age={this.state.age}
                    favoriteProgrammingLanguage={this.state.favoriteProgrammingLanguage}
                    likesCats={this.state.likesCats}
                    show={this.state.show}
                    handleClose={this.handleClose}
                />
            </>
        )
    }
}

export default Main;
