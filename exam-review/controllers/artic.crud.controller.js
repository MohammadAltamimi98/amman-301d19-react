'use strict';

const artPiece = require('../models/artic.mongoose.model');

// POST Controller for creating a new data item in our DB
const createFavoriteArtPiece = async (req, res) => {
    // destructure  the data from the request body
    const {
        title,
        thumbnail,
        artist_name,
        description
    } = req.body;

    const slug = title.toLowerCase().split(' ').join('-');
    // 'Hello World' => 'hello world' => ['hello', 'world'] => 'hello-world'


    // now that we got our data we would want to save it in the DB

    // before creating any new data check if the data title already exists in the DB
    artPiece.find({ slug: slug }, (error, data) => {

        if (data.length > 0) {
            res.send('data already exists');
        } else {
            // Creating a new instance of the model
            const newArtPiece = new artPiece({
                title: title,
                slug: slug,
                thumbnail: thumbnail,
                artist_name: artist_name,
                description: description

            });
            // saving the instance data to our DB
            newArtPiece.save();
            // sending back the response to the user with the newly created Data
            res.send('Item Added to your favorite list!');
        }
    });

};
// Get Controller for reading the stored data item in our DB
const getFavoriteArtPiece = async (req, res) => {
    artPiece.find({}, (error, data) => {
        res.send(data);
    });
};
// Delete Controller for deleting a data item from our DB
const deleteFavoriteArtPiece = async (req, res) => {
    const slug = req.params.slug;

    artPiece.remove({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error);
        } else {

            // use this one
            // res.send(data);
            // or send back the data after deleting the item
            artPiece.find({}, (error, data) => {
                res.send(data);
            });
        }
    });

};
// PUT Controller for updating our data item in our DB
const updateFavoriteArtPiece = async (req, res) => {
    // destructure  the data from the request body
    const { description } = req.body;
    const slug = req.params.slug;

    artPiece.find({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            data[0].description = description;
            data[0].save();
            artPiece.find({}, (error, data) => {
                res.send(data);
            });
        }
    });
};

module.exports = {
    createFavoriteArtPiece,
    getFavoriteArtPiece,
    deleteFavoriteArtPiece,
    updateFavoriteArtPiece
}