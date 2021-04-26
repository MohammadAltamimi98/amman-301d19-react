import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ChildCat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfPats: 0
        }
    }

    increaseNumberOfPats = () => {
        this.setState(
            {
                numberOfPats: this.state.numberOfPats + 1
            }
        );
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>I am the Child</Card.Title>
                        <Card.Text>
                            My name is {this.props.catName}
                        </Card.Text>
                        <Card.Text>
                            👋
                    {this.state.numberOfPats}
                        </Card.Text>
                        <Button onClick={this.increaseNumberOfPats} variant="primary">Increase pats</Button>
                    </Card.Body>
                </Card>
                {/* <h3>I am the Child</h3>
                <p>My name is {this.props.catName}</p>
                <p>👋
                    {this.state.numberOfPats}
                </p>
                <img onClick={this.increaseNumberOfPats} width={300} src={this.props.imgUrl} alt={this.props.catName} /> */}
            </div>
        )
    }
}

export default ChildCat;