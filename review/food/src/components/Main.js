import React, { Component } from 'react'
import Form from './Form';
import PrintFood from './PrintFood';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import People from './People';
import PeopleForm from './PeopleForm';
export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: this.props.cityName,
            name: 'Mohammad Fadi',
            data: [],
            peopleData: [],
            shown: false,
            showPeople: false,
            searchName: '',
            searchRole: '',
            locationData: {},
            showLocation: false
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

    getPeople = async (e) => {
        e.preventDefault();
        const myParams = {
            params: {
                name: this.state.searchName,
                role: this.state.searchRole
            }
        };
        const req = await axios.get('http://localhost:8080/people', myParams);
        console.log(req.data);
        this.setState({
            peopleData: req.data.people,
            showPeople: true,
            searchName: '',
            searchRole: ''
        });
    }

    updateSearchName = (e) => {
        this.setState({
            searchName: e.target.value
        })
    }

    updateSearchRole = (e) => {
        this.setState({
            searchRole: e.target.value
        })
    }

    getLocation = async () => {
        const req = await axios.get('http://localhost:8080/location');
        console.log(req.data);
        this.setState({
            locationData: req.data,
            showLocation: true
        });
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

                <Button onClick={this.getPeople}>Get people Info!</Button>
                <Button onClick={this.getLocation}>Get Location Info!</Button>

                <PeopleForm
                    updateSearchName={this.updateSearchName}
                    updateSearchRole={this.updateSearchRole}
                    getPeople={this.getPeople}
                />
                {this.state.shown &&

                    <PrintFood
                        recipes={this.state.data}
                    />

                }

                {this.state.showPeople &&

                    <People
                        people={this.state.peopleData}
                    />

                }

                {this.state.showLocation &&

                    <div>
                        <p>{this.state.locationData.name}</p>
                        <p>{this.state.locationData.lat}</p>
                        <p>{this.state.locationData.lon}</p>
                    </div>

                }
            </div>
        )
    }
}

export default Main
