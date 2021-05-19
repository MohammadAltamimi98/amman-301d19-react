'use strict';
const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    breed: String
});

function seedKittenCollection() {
    const mishmish = new myCatModel({
        name: 'Mishmish',
        breed: 'Orange Tabby'
    });
    const boogie = new myCatModel({
        name: 'Boogie',
        breed: 'Calico'
    });
    // console.log(mishmish);
    // console.log(boogie);

    mishmish.save();
    boogie.save();
}


const cat = mongoose.model('Kitten', kittySchema);

module.exports = {
    cat,
    kittySchema,
    seedKittenCollection
};