import React from 'react';
import ChildCat from './ChildCat';
import mishMish from '../assets/mishmish.jpg';
import boogie from '../assets/boogie.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Mish Mish',
            imgUrl: mishMish,
            numberOfCannedTuna: 15,
            mishMishCannedTuna: 0
        }
    }

    switchChild = () => {
        this.setState({
            name: 'Boogie',
            imgUrl: boogie
        });
    }

    giveTuna = () => {
        this.setState({
            numberOfCannedTuna: this.state.numberOfCannedTuna - 1,
            mishMishCannedTuna: this.state.mishMishCannedTuna + 1
        });
    }

    render() {
        return (
            <div>
                <h2>I am the Parent</h2>
                <p>
                    Number of canned tuna in our cabinet {this.state.numberOfCannedTuna}
                </p>
                <Button onClick={this.switchChild} variant="primary">Switch Cat</Button>
                <ChildCat
                    catName={this.state.name}
                    imgUrl={this.state.imgUrl}
                    numberOfCannedTuna={this.state.mishMishCannedTuna}
                    giveMeTuna={this.giveTuna}
                />

            </div>
        )
    }
}

export default Parent;