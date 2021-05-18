import React, { Component } from 'react'
import Cats from './Cats'; // responsible for displaying the cats data
import Form from './Form'; // display the form for sending the data to the backend
import AddCatForm from './AddCatForm';

import axios from 'axios';


class App extends Component {

  //  TODO: get a list of cats from the backend
  //  TODO: Create a form that will allow you to add new Cats to an owner
  // TODO: Create a button that will be deleting cats for the current owner
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      name: '',
      catName: '',
      catBreed: '',
      showCatsComponent: false,
      server: process.env.REACT_APP_SERVER_URL
    }
  }

  getCats = async (event) => {

    event.preventDefault();

    try {

      const paramsObj = {
        name: this.state.name
      }
      const cats = await axios.get(`${this.state.server}/cat`, { params: paramsObj });



      this.setState({
        cats: cats.data,
        showCatsComponent: true
      });

    } catch (error) {
      console.log(error);
    }
  }

  updateName = (event) => {

    this.setState({
      name: event.target.value
    })
  }

  updateCatName = (e) => this.setState({ catName: e.target.value });
  updateCatBreed = (e) => this.setState({ catBreed: e.target.value });

  addCat = async (e) => {
    e.preventDefault();

    // TODO: send the request to the backend 
    const bodyData = {
      catName: this.state.catName,
      catBreed: this.state.catBreed,
      ownerName: this.state.name
    }
    const newCats = await axios.post(`${this.state.server}/cat`, bodyData);

    // TODO: get the new data and update it in the state
    this.setState({
      cats: newCats.data
    })
  }

  // TODO: add a function that will delete the cat by its index number

  deleteCat = async (index) => {
    // console.log(index);
    const newArrayOfCats = this.state.cats.filter((cat, idx) => {
      return idx !== index;
    });

    console.log(newArrayOfCats);
    this.setState({
      cats: newArrayOfCats
    });

    const query = {
      name: this.state.name
    }

    await axios.delete(`${this.state.server}/cat/${index}`, { params: query })

  }

  render() {
    return (
      <>
        <div>
          <Cats
            cats={this.state.cats}
            deleteCat={this.deleteCat}
            showCatsComponent={this.state.showCatsComponent}
          />
          <Form
            updateName={this.updateName}
            getCats={this.getCats}
          />
          <AddCatForm
            addCat={this.addCat}
            updateCatName={this.updateCatName}
            updateCatBreed={this.updateCatBreed}
          />
        </div>
      </>
    )
  }
}

export default App
