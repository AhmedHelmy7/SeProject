var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adsSchema = new Schema({
    Company_name: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Duration: {
        type: Date,
        default: Date.now
            //    required: true
    }
});
const ads = module.exports = mongoose.model('ads', adsSchema);
