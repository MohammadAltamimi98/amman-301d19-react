import axios from 'axios';
import React, { Component } from 'react'
import ApiCrudData from './ApiCrudData';
import CrudUpdateFrom from './CrudUpdateFrom';

export class Favorites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: process.env.REACT_APP_SERVER_URL,
            apiCrudData: [],
            showCrudDataComponent: false,
            showAPIMessage: false,
            message: '',
            description: '',
            slugName: '',
            showUpdateForm: false
        };
    }

    componentDidMount = async () => {
        const request = await axios.get(`${this.state.url}/art/favorite`);
        this.setState({
            apiCrudData: request.data,
            showCrudDataComponent: true
        })
    }


    showUpdateForm = (desc, slug) => {
        this.setState({
            description: desc,
            slugName: slug,
            showUpdateForm: true
        })
    }


    deleteItem = async (slug) => {
        const request = await axios.delete(`${this.state.url}/art/favorite/${slug}`);

        // const newCrudData = this.state.apiCrudData.filter(obj => obj.slug !== slug);

        this.setState({
            apiCrudData: request.data
        });

    }

    updateDescriptionState = (e) => this.setState({ description: e.target.value })

    updateItem = async (e) => {
        e.preventDefault();

        const request = await axios.put(`${this.state.url}/art/favorite/${this.state.slugName}`, { description: this.state.description });

        this.setState({
            apiCrudData: request.data,
        });



    }

    render() {
        return (
            <>
                {this.state.showAPIMessage &&
                    <h3>
                        {this.state.message}
                    </h3>
                }
                {this.state.showUpdateForm &&
                    <CrudUpdateFrom
                        updateItem={this.updateItem}
                        updateDescriptionState={this.updateDescriptionState}
                        description={this.state.description}
                    />
                }
                {this.state.showCrudDataComponent &&
                    <ApiCrudData
                        apiCrudData={this.state.apiCrudData}
                        deleteItem={this.deleteItem}
                        showUpdateForm={this.showUpdateForm}
                    />
                }

            </>
        )
    }
}

export default Favorites
