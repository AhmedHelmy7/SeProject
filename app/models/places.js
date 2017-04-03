var mongoose = require('mongoose');
const config = require('../config/database');

//
//schema
var placesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
            //unique:true
            //we have to make it
    },
    password: {
        type: String,
        required: true
    },
    subs: {
        type: [String],
        //i make it as  a default
        default: "davidonsy123@gmail.com"
    }
});

var places = module.exports = mongoose.model('places', placesSchema);

//GetCategory

module.exports.getPlaces = function(callback) {
    places.find(callback);
}

module.exports.getPlacesByCategory = function(category, callback) {
    //console.log(places.find(category));
    places.find({ category: category }, callback);
}
module.exports.getPlacesByName = function(name, callback) {
    //console.log(places.find(category));
    places.find({ name: name }, callback);
}