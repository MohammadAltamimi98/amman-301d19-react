'use strict';

// Include required packages for our server
const express = require('express');
const cors = require('cors');
// require mongoose 
const mongoose = require('mongoose');
require('dotenv').config();

// require the controllers we are going to work with!
// artic API Controller:
const articController = require('./controllers/artic.controller');
// CRUD controllers 
const crud = require('./controllers/artic.crud.controller');

// initialize the server packages 
const app = express();
// define the port
const PORT = process.env.PORT || 8081;
// connect to mongoose
mongoose.connect('mongodb://localhost:27017/art', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Define our middleware
// - enable cors
app.use(cors());
// - enable json data 
app.use(express.json());
// - use mongoose

// Server endpoints

// Proof of life endpoint
app.get('/', (req, res) => {
    res.send('server Working!');
});

// Get request for the art pieces from the API 
app.get('/art', articController.getArtData);

// CRUD endpoints

// Create a favorite art piece endpoint (CREAT/ POST)
app.post('/art/favorite', crud.createFavoriteArtPiece);
// getting the favorite pieces of art endpoint (READ/ GET)
app.get('/art/favorite', crud.getFavoriteArtPiece);
// deleting a favorite piece of art endpoint (DELETE / DELETE)
app.delete('/art/favorite/:slug', crud.deleteFavoriteArtPiece);
// updating a favorite piece of art endpoint (UPDATE / PUT)
app.put('/art/favorite/:slug', crud.updateFavoriteArtPiece);


// test the server if its working
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});