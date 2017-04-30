var express = require('express');
var router = require('./routes/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/finalProject";
var session = require('express-session');
var app = express();

// configure app
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: "ronaldo", resave: false, saveUninitialized: true }));

mongoose.connect(DB_URI, function(err) {
    if (err) {
        console.log('not');
    } else {
        console.log('conn');
    }
});
app.use('/', router);

// start the server
app.listen(8091, function() {
    console.log("server is listening on port 8091");
})