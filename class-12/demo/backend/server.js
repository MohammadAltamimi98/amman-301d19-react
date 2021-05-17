'use strict';

// loading/require the packages 
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// initialize / setup our server

const app = express();
const port = process.env.PORT || 8081;
app.use(cors());

// step (one) connect your express to your mongo db
mongoose.connect(
    'mongodb://localhost:27017/cats',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
// now our express app is connected to our mongo DB

// step (two) create a collection

// to create collection in our DB 
// we will be using schemas 
// schemas (determines how the shape of our data will look like) blueprint or a template for our Collection 
// schemas are basically our data models

const kittySchema = new mongoose.Schema({
    name: String,
    breed: String
});

const ownerSchema = new mongoose.Schema({
    name: String,
    cats: [kittySchema]
})

// Step (three) to start using schemas, you will need to build you models from your schemas 
// building the model from our schema 
const myCatModel = mongoose.model('Kitten', kittySchema);
const myOwnerModel = mongoose.model('owners', ownerSchema);
console.log(myCatModel);

// Step (four) populate your DB
// the moment we are populating or seeding our database
function seedKittenCollection() {
    const mishmish = new myCatModel({
        name: 'Mishmish',
        breed: 'Orange Tabby'
    });
    const boogie = new myCatModel({
        name: 'Boogie',
        breed: 'Calico'
    });
    console.log(mishmish);
    console.log(boogie);

    mishmish.save();
    boogie.save();
}


// get all of the data from the collection 
// myCatModel.find(function (err, kittens) {
//     if (err) return console.error(err);
//     // return kittens;
//     console.log(kittens);
// });

// filter item by a fields name
// myCatModel.find({ name: /^Mishmish/ }, function (err, kittens) {
//     if (err) return console.error(err);
//     // return kittens;
//     console.log(kittens)
//     console.log(kittens[0])
//     console.log(kittens[0].name)
// });



function seedOwnerCollection() {

    const tamim = new myOwnerModel({
        name: 'tamim',
        cats: [
            {
                name: 'Simsim',
                breed: 'Orange Tabby'
            },
            {
                name: 'nimnim',
                breed: 'Calico'
            }
        ]
    });

    tamim.save();
}

// to seed the DB collection kitten
// seedKittenCollection();
// seedOwnerCollection();

app.get('/', homePage);

// new route for the frontend to get the cats by their owner name
app.get('/cat', getCatsByOwner);

function homePage(req, res) {
    res.send(' All is good!');
}

function getCatsByOwner(req, res) {
    const { name } = req.query;
    console.log(name);
    myOwnerModel.find({ name: name }, function (err, ownerData) {
        if (err) res.send('didnt work');
        console.log(ownerData[0].cats)
        res.send(ownerData[0].cats);
    });
}

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});