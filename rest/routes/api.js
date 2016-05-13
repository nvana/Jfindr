// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Job = require('../models/job.js');

// Routes
Job.methods(['get','put','post','delete']);
Job.register(router,'/jobs');

// Return 
module.exports = router;