var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect(config.database);
//schema
var commentsSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    reviewNumber: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    }
});

const comments = module.exports = mongoose.model('comments', commentsSchema);