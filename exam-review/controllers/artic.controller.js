'use strict';
const superagent = require('superagent');
const ArticModel = require('../models/artic.model');
// This controller is only responsible for getting data from the API  
// Link: https://api.artic.edu/api/v1/artworks


// get info from api endpoint controller
const getArtData = async (req, res) => {
    const url = `https://api.artic.edu/api/v1/artworks?limit=10`;
    superagent.get(url).then(data => {
        // loop through the data response and model the data accordingly
        const responseData = data.body.data.map(art => {
            // model our data
            return new ArticModel(art);
        });

        res.send(responseData);
    }).catch(error => {
        console.log('==================');
        console.log('An Error Occurred!');
        console.log(error);
        console.log('==================');
    });
};

module.exports = {
    getArtData
};