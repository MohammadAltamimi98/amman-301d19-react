import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ChildCat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfPets: 0
        }
    }

    increaseNumberOfPets = () => {
        this.setState(
            {
                numberOfPets: this.state.numberOfPets + 1
            }
        );
    }

    meowForTuna = () => {
        this.props.giveMeTuna();
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.increaseNumberOfPets} variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>I am the Child</Card.Title>
                        <Card.Text>
                            My name is {this.props.catName}
                        </Card.Text>
                        <Card.Text>
                            Number of tuna i consumed are {this.props.numberOfCannedTuna}
                        </Card.Text>
                        <Card.Text>
                            Click on my picture to pet me!
                        </Card.Text>
                        <Card.Text>👋 {this.state.numberOfPets}
                        </Card.Text>
                        <Button onClick={this.meowForTuna} variant="primary">give me tuna</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ChildCat;