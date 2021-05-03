const express = require('express')
const cors = require('cors');
const data = require('./assets/data.json');
const app = express()

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/about', function (req, res) {
    res.send('my name is mishmish')
});

app.get('/poki', function (req, res) {
    res.send(data);
});

app.listen(3001)