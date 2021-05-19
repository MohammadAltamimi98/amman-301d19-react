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
// a new middleware (checkpoint) where it will decode any request bodies
app.use(express.json());

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
    name: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
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

// new route for creating the new cat data
app.post('/cat', createCats);

// new route for deleting the cat by its index
app.delete('/cat/:index', deleteCatsForOwner);

// new route for updating cats by its index
app.put('/cat/:index', updateCatForOwner)

function createCats(req, res) {
    console.log(req.body);
    const { catName, catBreed, ownerName } = req.body;
    // TODO: we need to find the owners name
    myOwnerModel.find({ name: ownerName }, (error, ownerData) => {
        // TODO: add the new cats to the selected owner collection
        // console.log('================= before');
        // console.log(ownerData[0].cats);
        // console.log('========================');
        ownerData[0].cats.push({
            name: catName,
            breed: catBreed
        })
        // console.log('================= after');
        // console.log(ownerData[0].cats);
        ownerData[0].save();
        // TODO: send back the data over to the front
        res.send(ownerData[0].cats);
    });
}

function homePage(req, res) {
    res.send(' All is good!');
}

function getCatsByOwner(req, res) {
    const { name } = req.query;
    console.log(name);
    myOwnerModel.find({ name: name }, function (err, ownerData) {

        try {
            // console.log(ownerData[0].cats);
            res.send(ownerData[0].cats);
        } catch (error) {
            console.log(error)
        }

    });
}

function deleteCatsForOwner(req, res) {
    // TODO: get the index 
    const index = Number(req.params.index);
    console.log(req.params);
    // TODO: get the owner name
    const { name } = req.query;
    // TODO: find the owner
    myOwnerModel.find({ name: name }, (err, ownerData) => {
        // TODO: filter the cats for the owner and remove the one that matches the index

        const newCatsArr = ownerData[0].cats.filter((cat, idx) => {
            return idx !== index
        });
        ownerData[0].cats = newCatsArr;
        ownerData[0].save();

        // TODO: respond back to the user with a message that the cat has been deleted
        res.send(' Cat deleted!')
    });
}


function updateCatForOwner(req, res) {
    // TODO: get the index
    const index = Number(req.params.index);
    // TODO: get the data from the body
    const { catName, catBreed, ownerName } = req.body;
    // TODO: find the owner
    myOwnerModel.find({ name: ownerName }, (err, ownerData) => {
        console.log(ownerData);
        // TODO: replace the old cat with the new cat object
        // Using object notation assignment 
        // ownerData[0].cats[index].name = catName;
        // ownerData[0].cats[index].breed = catBreed;

        // USING SPLICE
        ownerData[0].cats.splice(index, 1, {
            name: catName,
            breed: catBreed
        });
        ownerData[0].save();
        res.send(ownerData[0].cats)
    });
}

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});