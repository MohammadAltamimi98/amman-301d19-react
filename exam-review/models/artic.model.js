'use strict';

// this model is responsible for modeling the data returned from the API

class ArticModel {

    constructor(data) {
        this.title = data.title;
        this.thumbnail = data.thumbnail.lqip;
        this.artist_name = data.artist_title;
        this.description = data.credit_line;

    }
}

module.exports = ArticModel;