import React, { Component } from 'react'
import axios from 'axios';
import ApiData from './ApiData';

export class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            url: process.env.REACT_APP_SERVER_URL,
            apiData: [],
            showDataComponent: false,
            showAPIMessage: false,
            message: ''
        };
    }

    favoriteItem = async (dataObj) => {
        // console.log(dataObj);

        const postRequest = await axios.post(
            `${this.state.url}/art/favorite`,  // this is our server endpoint for creating the data
            dataObj // this is our post request body // we dont have to create the key and values pairs
        );

        this.setState({
            message: postRequest.data,
            showAPIMessage: true
        });



    }

    componentDidMount = async () => {
        const request = await axios.get(`${this.state.url}/art`);
        this.setState({
            apiData: request.data,
            showDataComponent: true
        })
    }

    render() {
        return (
            <>
                {this.state.showAPIMessage &&
                    <h3>
                        {this.state.message}
                    </h3>
                }
                {this.state.showDataComponent &&
                    <ApiData
                        apiData={this.state.apiData}
                        favoriteItem={this.favoriteItem}
                    />
                }

            </>
        )
    }
}

export default Main
