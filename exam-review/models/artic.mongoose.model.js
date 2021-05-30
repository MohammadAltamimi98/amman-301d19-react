'use strict';

const mongoose = require('mongoose');


// Create a schema for our model
const artPieceSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    thumbnail: String,
    artist_name: String,
    description: String
});
// model our schema
const artPieceModel = mongoose.model('art_pieces', artPieceSchema)
// export the model to be used
module.exports = artPieceModel;