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
            imgUrl: mishMish
        }
    }

    switchChild = () => {
        this.setState({
            name: 'Boogie',
            imgUrl: boogie
        });
    }

    render() {
        return (
            <div>
                <h2>I am the Parent</h2>
                <Button onClick={this.switchChild} variant="primary">Switch Cat</Button>
                <ChildCat one={'hello'} catName={this.state.name} imgUrl={this.state.imgUrl} />
            </div>
        )
    }
}

export default Parent;