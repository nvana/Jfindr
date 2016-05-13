// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var jobShema = mongoose.Schema({
	name : String,
	date : String
})

// Model
module.exports = restful.model('Jobs', jobShema);
