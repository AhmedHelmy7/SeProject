var mongoose = require('mongoose');
const config = require('../config/database');
var places = require('../modules/places');
var fs = require('fs');

var path = require('path');

var nodemailer = require('nodemailer');

//schema
var activitessSchema = mongoose.Schema({
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
        type: String,
        required: true
    },
    numberOfApplicatons: {
        type: Number,
        required: true
    },
    //as a flag
    flag: {
        type: String,
        default: "0"
    }

});
var activities = module.exports = mongoose.model('activities', activitessSchema);
//getAllActivitiesByTheFlag
module.exports.getActivatedActivities = function(companyName, callback) {
        //console.log(places.find(category));
        activities.find({ companyName: companyName, flag: "0" }, callback);
    }
    //AddActivity
module.exports.addActivities = function(activity, callback) {
        activities.create(activity, callback);
        okok(activity.companyName);
    }
    //getAllActivitiesEvenDeleted
module.exports.getAllActivities = function(companyName, callback) {
        //console.log(places.find(category));
        activities.find({ companyName: companyName }, callback);
    }
    //DeleteActivity
    //we have to first view the activity to delete it  
module.exports.deleteActivity = function(id, callback) {
    //console.log(places.find(category));
    var name = { _id: id };
    var update = {
        flag: "1"
    };
    activities.findOneAndUpdate(name, update, [], callback);
}

//Update 
module.exports.updateActivity = (id, activity, options, callback) => {
    var query = { _id: id };
    var update = {
        Name: activity.Name,
        StartDate: activity.StartDate,
        EndDate: activity.EndDate,
        desc: activity.desc,
        numberOfApplicatons: activity.numberOfApplicatons
            //        image_url: book.image_url,
            //        buy_url: book.buy_url
    }
    activities.findOneAndUpdate(query, update, options, callback);
}

function getEmail(name, callback) {
    places.find({ name: name }, function(err, objs) {
        var returnable_name;
        returnable_name = objs[0].email;
        //     console.log(returnable_name); // this prints "Renato", as it should
        callback(returnable_name);

    });
}

function getPassword(name, callback) {
    places.find({ name: name }, function(err, objs) {
        var returnable_name;
        returnable_name = objs[0].password;
        //    console.log(returnable_name); // this prints "Renato", as it should
        callback(returnable_name);

    });
}

function getSubs(name, callback) {
    places.find({ name: name }, function(err, objs) {
        var returnable_name;
        returnable_name = objs[0].subs;
        //  console.log(returnable_name); // this prints "Renato", as it should
        callback(returnable_name);

    });
}
var email;
var password;
var subs;
var okok = function(name) {

    getEmail(name, function(data) {
        email = data.toString();
        console.log(email);
    });
    getPassword(name, function(data) {
        password = data;
        // console.log(password);
    });
    getSubs(name, function(data) {
        subs = data;
        console.log(subs);
    });
}

okok('DavidShokry');
var postmark = require("postmark");
var client = new postmark.Client("<server key>");

/*
var nn = "DavidShokry"

let HelperOptions = {
    from: '"DavidOnsy123"<DavidOnsy123@gmail.com',
    to: "DavidOnsy123@gmail.com",
    subject: 'Done2',
    text: 'DOne 456'
};


let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: email + "",
        pass: "MicoolerBasha123"
    }
});
transporter.sendMail(HelperOptions, (error, info) => {
    if (error) throw error;
    console.log('Done Bro5')
})*/