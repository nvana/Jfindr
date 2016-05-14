// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var jobShema = mongoose.Schema({
	libelle : String,
	company : String,
	contractType : String,
	salary : String,
	level : String,
	city : String,
	author: String,
	date : String,
})

// Model
module.exports = restful.model('Jobs', jobShema);
