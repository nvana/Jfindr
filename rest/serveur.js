// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



// MongoBD
mongoose.connect('mongodb://localhost')

var app = express();

/* Allow localhost for dev */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Starting server
app.listen(3000);
console.log('running port 3000');