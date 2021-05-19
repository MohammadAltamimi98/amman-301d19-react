'use strict';

// loading/require the packages 
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const indexController = require('./controller/index.controller');
const kittyController = require('./controller/kitty.controller');

require('dotenv').config();

// initialize / setup our server

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/cats',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// to seed the DB collection kitten
// ownerModel.seedOwnerCollection();

app.get('/', indexController.homePage);

// new route for the frontend to get the cats by their owner name
app.get('/cat', kittyController.getCatsByOwner);

// new route for creating the new cat data
app.post('/cat', kittyController.createCats);

// new route for deleting the cat by its index
app.delete('/cat/:index', kittyController.deleteCatsForOwner);

// new route for updating cats by its index
app.put('/cat/:index', kittyController.updateCatForOwner)



app.listen(port, () => {
    console.log(`Server started on ${port}`);
});