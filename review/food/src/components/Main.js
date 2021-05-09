import React, { Component } from 'react'
import Form from './Form';
import PrintFood from './PrintFood';
import axios from 'axios';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: this.props.cityName,
            name: 'Mohammad Fadi',
            data: [],
            shown: false
        }
    }

    submitForm = async (e) => {
        e.preventDefault();
        const req = await axios.get(`https://api.edamam.com/search?app_id=52a27b50&app_key=c179be5fcdf849e0705ae3117a633690&q=chicken`);
        console.log(req.data.hits);
        console.log('console logged');
        this.setState({
            data: req.data.hits,
            shown: true
        });
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        });
        console.log(this.state.name);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>
                    Hello from {this.props.cityName}
                </p>
                <p>
                    Hello From  {this.state.name}
                </p>
                <Form
                    updateName={this.updateName}
                    submitForm={this.submitForm}
                />
                {this.state.shown &&

                    <PrintFood
                        recipes={this.state.data}
                    />

                }
            </div>
        )
    }
}

export default Main
