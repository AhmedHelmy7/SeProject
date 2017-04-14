let Activity = require('../models/Activity');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var User = require('../models/user');

"use strict"
let activitiesController = {
    searchActivity: function(req, res) {
        //    console.log('ff');
        var companyName = req.params.name;
        Activity.find({ companyName: companyName, flag: "0" }, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });


        //console.log(places.find(category));       
        //activities.find({ companyName: companyName, flag: "0" }, callback);
    },
    searchDeleted: function(req, res) {
        var companyName = req.params.name;
        Activity.find({ companyName: companyName, flag: "1" }, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });
    },
    addActivities: function(req, res) {
        console.log("enters addActivities")
        var Activ = new Activity({
            companyName:req.body.companyName,
            Name:req.body.Name,
            numberOfApplicatons:req.body.numberOfApplicatons
        });

        //Activ.companyName = req.body.CompanyName


        Activ.Name = req.body.Name;

        Activ.StartDate = req.body.StartDate

        Activ.EndDate = req.body.EndDate
        Activ.avgRating=req.body.avgRating;
       Activ.desc = req.body.desc
       Activ.numberOfApplicatons = req.body.numberOfApplicatons;

        Activity.create(Activ, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });
        //okok(Activ.companyName);
        // sayeb
    },
    deleteActivity: function(req, res) {
        var id = req.params._id;
        var name = { _id: id };
        var update = {
            flag: "1"
        };
        Activity.findOneAndUpdate(name, update, [], function(err, res) {
            if (err) {
                throw err;
            } else {
                console.log('Deleted');
            }
        });
    },
    // (id, activity, options, callback) 
    updateActivity: (req, res) => {
        var id = req.params._id;
        var query = { _id: id };
        var update = {
            Name: req.body.Name,
            StartDate: req.body.StartDate,
            EndDate: req.body.EndDate,
            desc: req.body.desc,
            numberOfApplicatons: req.body.numberOfApplicatons
                //        image_url: book.image_url,
                //        buy_url: book.buy_url
        }
        Activity.findOneAndUpdate(query, update, {}, function(err, res) {
            if (err) {
                throw err;
            } else {
                console.log('Updated');
            }
        });
    },
    //view activity
    viewActivity: function(req, res) {
        var id = req.params._id;
        Activity.find({ _id: id }, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });
        //console.log(places.find(category));       
        //activities.find({ companyName: companyName, flag: "0" }, callback);
    },
    //A function that finds the top rated activities and storts them by avgRating
    getTopRatedActivities: function(req, res) {

        console.log("calls getTopRatedActivities")
        Activity.find(function(err, activities) {
            if (err) {
                res.send(err.message);
                console.log(err);
            } else {
                console.log(activities)
                res.json(activities);
               // res.redirect('/'); //b3d may3ml rating hayrg3 le fen
            }
        }).sort({ avgRating: -1 });
    }

}


function getEmail(name, callback) {
    console.log('hey from getEmail');
    //    console.log(User.find({ name: name }).json)
    User.find({ name: name }, function(err, objs) {
        if (err) throw err;
        var returnable_name;
        returnable_name = objs[0].email;
        console.log(returnable_name);
        //   console.log(returnable_name); // this prints "Renato", as it should
        callback(returnable_name);

    });
}

module.exports = activitiesController;
var email;
var password;
var subs;
var okok = function(name) {
    console.log(name);
    getEmail(name, function(data) {
            email = data;
        })
        //  console.log(email)
        //passwordEMAIL.
}

/* getPassword(name, function(data) {
            password = data;
            getSubs(name, function(data) {
                subs = data;
                console.log(email);
                console.log(password);
                console.log(subs);
                let HelperOptions = {
                    from: email,
                    to: subs,
                    subject: 'A notification from ' + name,
                    text: 'Hello , we have a new activity please check our page to get more details about it , Thanks'
                };
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    secure: false,
                    port: 25,
                    auth: {
                        user: email,
                        pass: password
                    }
                });
                transporter.sendMail(HelperOptions, (error, info) => {
                    if (error) throw error;
                    console.log('LastButNotLeast')
                })
            });
        });
    });
}*/