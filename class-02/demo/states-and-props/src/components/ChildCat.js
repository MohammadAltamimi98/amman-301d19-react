import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

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
    render() {
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
                            Click on my picture to pet me!
                        </Card.Text>
                        <Card.Text>👋 {this.state.numberOfPets}
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* <h3>I am the Child</h3>
                <p>My name is {this.props.catName}</p>
                <p>👋
                    {this.state.numberOfPets}
                </p>
                <img onClick={this.increaseNumberOfPets} width={300} src={this.props.imgUrl} alt={this.props.catName} /> */}
            </div>
        )
    }
}

export default ChildCat;