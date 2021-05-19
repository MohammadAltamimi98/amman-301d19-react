'use strict';
const mongoose = require('mongoose');
const kittyModel = require('./kitty.model');

const ownerSchema = new mongoose.Schema({
    name: String,
    cats: [kittyModel.kittySchema]
});

const owner = mongoose.model('owners', ownerSchema);

function seedOwnerCollection() {

    const tamim = new ownerModel({
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

module.exports = {
    owner,
    seedOwnerCollection
};