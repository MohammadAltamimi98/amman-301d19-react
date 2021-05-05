const express = require('express');
const cors = require('cors');
const weatherHandler = require('./components/weather');
require('dotenv').config();

const app = express()

const PORT = process.env.PORT || 3030;

app.use(cors());
// routes or endpoints

app.get('/', function (req, res) {
    res.send('Hello World')
});

// console.log(weatherHandler.name);

app.get('/weather', weatherHandler);


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});