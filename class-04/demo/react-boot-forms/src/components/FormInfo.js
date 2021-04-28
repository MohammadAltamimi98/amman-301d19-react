import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class FormInfo extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>My Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.name}</p>
                        <p>{this.props.age}</p>
                        <p>{this.props.favoriteProgrammingLanguage}</p>
                        <p>Do i like cats: {this.props.likesCats ? 'yes' : 'no'}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                  </Button>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Save Changes
                  </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default FormInfo;