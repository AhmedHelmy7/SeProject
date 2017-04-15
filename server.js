var express = require('express');
var router = require('./app/routes/userRoutes');
var bodyParser = require('body-parser');
 var methodOverride = require('method-override');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost/Sprint";
//var session = require('express-session');
mongoose.connect("mongodb://localhost/Sprint");
var app = express();
//load models
app.models=require('./app/models/index');


// configure app
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs');




app.engine('html',require('ejs').renderFile);

//app.use(session({ secret: "ronaldo", resave: false, saveUninitialized: true }));

mongoose.connect(DB_URI, function(err) {
    if (err) {
        console.log('not');
    } else {
        console.log('conn');
    }
});
app.use('/', router);



// start the server
app.listen(3000, function() {
    console.log("server is listening on port 3000");
})
