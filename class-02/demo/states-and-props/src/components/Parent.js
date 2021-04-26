import React from 'react';
import ChildCat from './ChildCat';
import mishMish from '../assets/mishmish.jpg';
// import boogie from '../assets/boogie.jpg';

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Mish Mish',
            imgUrl: mishMish
        }
    }

    render() {
        return (
            <div>
                <h2>I am the Parent</h2>
                <ChildCat one={'hello'} catName={this.state.name} imgUrl={this.state.imgUrl} />
            </div>
        )
    }
}

export default Parent;