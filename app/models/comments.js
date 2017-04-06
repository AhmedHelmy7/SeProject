var mongoose = require('mongoose');
const config = require('../config/database');

//mongoose.connect(config.database);
//schema
var commentsSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    reviewNumber: {
        type: Number,
        required: true
    },
    commentar: {
        type: String,
        required: true
    }
});

var comments = module.exports = mongoose.model('comments', commentsSchema);

module.exports.getComments = function(id, callback) {
    //console.log(places.find(category));
    reviews.find({ _id: id }, callback);
}
module.exports.addComments = function(comment, callback) {
        comments.create(comment, callback);
    }
    //in app js will be
    /*app.get('/:name/activities/:id/reviews/comments', function(req, res) {
            var id = req.params._id;
            comments.getComments(id, function(err, categor) {
                if (err) throw err;
                res.json(categor);
            })
        });
        */

//for posting comments
/*app.post('/:name/activities/:id/reviews/comments', function(req, res) {
    var id = req.params._id;
    var comment = req.body;
    //   console.log(name)
    comments.addComments(comment, function(err, comment) {
        if (err) throw err;
        res.json(comment);
    })
});
*/