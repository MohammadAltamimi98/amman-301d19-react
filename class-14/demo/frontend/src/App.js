import React, { Component } from 'react'
import Cats from './Cats'; // responsible for displaying the cats data
import Form from './Form'; // display the form for sending the data to the backend
import AddCatForm from './AddCatForm';
import UpdateCatForm from './UpdateCatForm';

import axios from 'axios';


class App extends Component {

  //  TODO: get a list of cats from the backend
  //  TODO: Create a form that will allow you to add new Cats to an owner
  // TODO: Create a button that will be deleting cats for the current owner

  // TODO: create a button to  each cat that will be displaying an update form 
  // TODO: after displaying the form, the form should contain all the information about the chosen cat 
  // TODO: after making our changes to the cat, we want to send that request as an update request (put) to our backend


  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      name: '',
      catName: '',
      catBreed: '',
      index: 0,
      showCatsComponent: false,
      showUpdateForm: false,
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

  updateCatName = (e) => {
    this.setState({ catName: e.target.value });
    console.log(this.state.catName);
  }
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

  // TODO: add a function that will show the updateForm for the chosen cat
  showUpdateForm = (idx) => {

    // TODO: Filter the cats by by the index to choose the cat information that we want to pass down to the component 
    const newCatArr = this.state.cats.filter((value, index) => {
      return idx === index
    });

    console.log(newCatArr);
    this.setState({
      index: idx,
      catName: newCatArr[0].name,
      catBreed: newCatArr[0].breed,
      showUpdateForm: true,
    });
  }

  // TODO: add a function that will send a request to the backend containing the new information and update the chosen cat
  updateCat = async (e) => {
    e.preventDefault();
    const reqBody = {
      catName: this.state.catName,
      catBreed: this.state.catBreed,
      ownerName: this.state.name
    }
    const cat = await axios.put(`${this.state.server}/cat/${this.state.index}`, reqBody);

    this.setState({
      cats: cat.data
    });

  }

  render() {
    return (
      <>
        <div>
          <Cats
            cats={this.state.cats}
            deleteCat={this.deleteCat}
            showUpdateForm={this.showUpdateForm}
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
          <>
            {this.state.showUpdateForm &&
              <UpdateCatForm
                // cats={this.state.selectedCat}
                catName={this.state.catName}
                catBreed={this.state.catBreed}
                updateCat={this.updateCat}
                updateCatName={this.updateCatName}
                updateCatBreed={this.updateCatBreed}
              />
            }
          </>
        </div>
      </>
    )
  }
}

export default App
