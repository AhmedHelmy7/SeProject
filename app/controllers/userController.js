let User = require('../models/user');
let bcrypt = require('bcryptjs');
let Activity = require('../models/Activity');


var temp;
var temp2;
let userController = {
    getUserById: function(id, callback) {
        User.findById(id, callback);

    },

    getUserByUsername: function(username, callback) {
        const query = { username: username };
        User.findOne(query, callback);
    },

    addUser: function(newUser, callback) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save(callback);
            });
        });
    },
    comparePassword: function(candidatePassword, hash, callback) {
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if (err) throw err;
            callback(null, isMatch);
        });

    },

    superban: function(req, res) {
        if (temp.isSuperAdmin) {
            User.findOneAndUpdate({ username: req.body.username }, { isBanned: true }, {}, function(err, res) {
                // End session
                if (err) {
                    throw err;
                } else {
                    console.log('Banned');
                }
            });
        } else {
            console.log('you are not an admin');
        }
    },
    superdeban: function(req, res) {
        if (temp.isSuperAdmin) {
            User.findOneAndUpdate({ username: req.body.username }, { isBanned: false }, {}, function(err, res) {
                // End session
                if (err) {
                    throw err;
                } else {
                    console.log('Debanned');
                }
            });
        } else {
            console.log('you are not an admin');
        }
    },
    promote: function(req, res) {
        if (temp.isSuperAdmin) {
            User.findOneAndUpdate({ username: req.body.username }, { isAdmin: true }, {}, function(err, res) {
                if (err) {
                    throw err;
                } else {
                    console.log('Promoted');
                }
            });
        } else {
            console.log('you are not an admin');

        }

    },
    demote: function(req, res) {
        if (temp.isSuperAdmin) {
            User.findOneAndUpdate({ username: req.body.username }, { isAdmin: false }, {}, function(err, res) {
                if (err) {
                    throw err;
                } else {
                    console.log('Demoted');
                }
            });
        } else {
            console.log('you are not an admin');
        }



    },
    adminBan: function(req, res) {
        if (temp.isAdmin) {
            User.findOneAndUpdate({ username: req.body.username }, { isBanned: true }, {}, function(err, res) {
                // End session
                if (err) {
                    throw err;
                } else {
                    console.log('Banned');
                }
            });
        } else {
            console.log("You are not an admin");
        }

    },

    adminDeban: function(req, res) {
        if (temp.isAdmin) {
            User.findOneAndUpdate({ username: req.body.username }, { isBanned: false }, {}, function(err, res) {
                // End session
                if (err)
                    throw err;
                else
                    console.log('Debanned');
            });
        } else {
            console.log("You are not an admin");
        }
    },


    deleteReview: function(req, res) {
        if (temp.isAdmin) {
            reviews.findOneAndRemove({ id: req.body.id }, {}, function(err, res) {
                // End session
                if (err)
                    throw err;
                else
                    console.log('Debanned');
            });
        } else {
            console.log("You are not an admin");
        }
    },
    editProfile: function(req, res) {

        User.findById(req.params.id, function(err, user) {
            if (user == null) {
                console.log('yes');
            } else {

                user.email = req.body.email;
                user.name = req.body.name;
                user.password = req.body.password;
                user.creditCardNumber = req.body.creditCardNumber;


                user.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Bear updated!' });
                });
            }
        })

    },
    addToFavourites: function(req, res) {


        var name = req.body.name;
        var location = req.body.location;
        var price = req.body.price;
        var date = req.body.date;
        User.findById(req.params.id, function(err, user) {
            if (user == null) {
                console.log('yes');
            } else {

                user.fav_list.push({ name: name, location: location, price: price, date: date })

                user.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Bear updated!' });
                });
            }
        })
    },
    getSubList: function(req, res) {


        var name = req.body.name;

        User.findById(req.params.id, function(err, user) {
            if (user == null) {
                console.log('yes');
            } else {

                us
                er.sub_List.push({ name })
                user.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Bear updated!' });
                });
            }
        })

    },


    addActivities: function(req, res) {
        var Activ = new Activity;
        console.log(temp.username);

        Activ.companyName = temp.username;

        Activ.Name = req.body.Name;

        Activ.StartDate = req.body.StartDate

        Activ.EndDate = req.body.EndDate
        Activ.location = req.body.location
        Activ.desc = req.body.desc
        Activ.numberOfApplicatons = req.body.numberOfApplicatons;

        if (Activ.Name == null || Activ.Name == '' || Activ.location == '' || Activ.location == null ||
            Activ.desc == null || Activ.desc == '' || Activ.numberOfApplicatons == null || Activ.numberOfApplicatons == '') {
            res.json({ success: false, message: "Ensure fields Dude" })
        } else {
            Activity.create(Activ, function(err, acc) {
                if (err) {
                    if (err.errors.Name) {
                        res.json({ success: false, message: 'Name ' + err.errors.Name.message })
                    } else {
                        if (err.errors.desc) {
                            res.json({ success: false, message: err.errors.desc.message })
                        } else {
                            if (err.errors.numberOfApplicatons) {
                                res.json({ success: false, message: err.errors.numberOfApplicatons.message })
                            }
                        }
                    }
                } else {
                    res.json({ success: true, message: "Activity Created" })
                }
            });
            //okok(Activ.companyName);
            // sayeb
        }
    },
    searchActivity: function(req, res) {
        var companyName = temp.username;
        Activity.find({ companyName: companyName, flag: "0" }, { flag: 0, numberOfRatings: 0, ratings: 0, companyName: 0, StartDate: 0 }, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });



        //console.log(places.find(category));       
        //activities.find({ companyName: companyName, flag: "0" }, callback);
    },
    /*deleteActivity: function(req, res) {
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
    }*/
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
    searchDeleted: function(req, res) {
        var companyName = temp.username;
        Activity.find({ companyName: companyName, flag: "1" }, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });
    },
    updateActivity: (req, res) => {
        console.log('hola');
        var id = req.params.id;

        var query = { _id: id };
        console.log(req.body);
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
    updateName: (req, res) => {
        console.log('holahere');
        var id = req.params._id;
        var query = { _id: id };
        console.log(req.body);
        var update = {
            Name: req.body.Name,
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
    activateActivity: (req, res) => {
        var id = req.params._id;
        var query = { _id: id };
        var update = {
            flag: "0"
        }
        Activity.findOneAndUpdate(query, update, {}, function(err, res) {
            if (err) {
                throw err;
            } else {
                console.log('UpdatedBruh');
            }
        });
    },

    viewActivity: function(req, res) {
        var id = req.params._id;
        Activity.find({ _id: id }, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });
    },


    getProfile: function(req, res, next) {
        temp = req.user;
        res.json({ user: req.user });
    }

}
module.exports = userController;

//updateActivity: (req, res) => {
//        var id = req.params.username;
//        var query = { username: username };
//        var update = {
//            isAdmin = false,
//        }
//        Activity.findOneAndUpdate(query, update, {}, function(err, res) {
//            if (err) {
//                throw err;
//            } else {
//                console.log('Updated');
//            }
//        });
//    }