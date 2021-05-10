const express = require('express');
const people = require('./assets/people.json');
const app = express();
const cors = require('cors');
const superagent = require('superagent');

const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
});

/*
 --------------------------------------
 1- create a search query for this endpoint
 (name, role) - (Checked)
 2- Check if there's any search query being passed down (checked)
 3 - if there's any search query (filter the info)
 4- if there's no search query then return the whole data as is (Checked)
 5- if the user search for name that doesn't exists, send back telling the name doesn't exist
 --------------------------------------
*/
app.get('/people', (req, res) => {
    console.log(req.query);
    // destructure
    // ES6 feature
    // to assign values from an obj
    // ES5 old way
    // const role = req.query.role;
    // const name = req.query.name;
    // ES6 New way
    const { role, name } = req.query;
    if (role || name) {
        // console.log(name);
        // console.log(role);

        if (name && role) {
            // filter out by name and role
            const arrOfFilteredPeople = people.people.filter(obj => {

                if (obj.role.toLocaleLowerCase() === role.toLocaleLowerCase() && obj.name.toLocaleLowerCase().split(' ')[0] === name.toLocaleLowerCase()) {
                    return true;
                };
            });
            const newObjectPeople = {};
            newObjectPeople['people'] = arrOfFilteredPeople;
            res.send(newObjectPeople);
        } else if (role) {
            // filer the people by role
            // using the array filter method
            // after we filter, we are going to send back the response 
            const arrOfFilteredPeople = people.people.filter(obj => obj.role.toLocaleLowerCase() === role.toLocaleLowerCase());
            const newObjectPeople = {};
            newObjectPeople['people'] = arrOfFilteredPeople;
            res.send(newObjectPeople);
        } else if (name) {
            // filter out by the name
            const arrOfFilteredPeople = people.people.filter(obj => obj.name.toLocaleLowerCase().split(' ')[0] === name.toLocaleLowerCase());
            const newObjectPeople = {};
            newObjectPeople['people'] = arrOfFilteredPeople;
            res.send(newObjectPeople);

        }

    } else {
        res.send(people);
    }
});


/*
-----------------------------
1- create an endpoint that will get me info from location Iq
   - we are going to send the request to locationIQ via superagent
2- filter the data
3- send to the user the filtered data

-----------------------------
*/
app.get('/location', (req, res) => {
    // url: https://us1.locationiq.com/v1/search.php
    // key
    // q
    // format
    // const url = `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&q=amman&format=json`;

    const url = 'https://us1.locationiq.com/v1/search.php';

    const params = {
        key: 'pk.d36871f015649f915282f374cff76628',
        q: 'amman',
        format: 'json'
    }

    superagent.get(url, params).then(data => {

        const city = new Location(data.body[0]);
        res.send(city);
    })

});


app.get('/yelp', (req, res) => {
    const url = 'https://api.yelp.com/v3/businesses/search';
    const params = {
        term: "restaurants",
        location: "NYC"
    };

    const token = 'yourYelpToken';

    superagent.get(url, params).set(`Authorization`, `Bearer ${token}`).then(data => {
        res.send(data.body)
    }).catch(error => res.send(error));

});

class Location {
    constructor(data) {
        this.name = data.display_name;
        this.lat = data.lat;
        this.lon = data.lon;
    }
}


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});