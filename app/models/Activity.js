var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    StartDate: {
        type: Date,
        default: Date.now
            //    required: true
    },
    EndDate: {
        type: Date
            //  required: true
    },
    desc: {
        type: String
    },
    numberOfApplicatons: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        default: "0"
    },
    avgRating: {
        type: Number
    },
    ratings: [{
        type: Schema.ObjectId,
        ref: 'rating' //could be like this or ratingSchema
    }]

});
const Activity = module.exports = mongoose.model('activities', ActivitySchema);