let User=require('../models/user');
let bcrypt =require('bcryptjs');

let userController={
    getUserById:function(id,callback){
        User.findById(id,callback);
    },
     getUserByUsername:function(username,callback){
         const query = {username:username};
        User.findOne(query,callback);
    },

    addUser:function(newUser,callback){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password, salt,(err,hash)=>{
                if(err) throw err;
                newUser.password = hash;
                newUser.save(callback);
            });
        });
    },
    comparePassword:function(candidatePassword,hash,callback){
        bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
            if(err)throw err;
            callback(null,isMatch);
        });

    },
    editProfile:function(req,res){
        var username=req.body.username;
        var password=req.body.password;
        var firstname=req.body.firstname;
        var creditCardNumber=req.body.creditCardNumber;
        var fav_list=req.body.fav_list;
        var sub_List=req.body.sub_List;

        User.findOne({username:req.session.username ,password:req.session.password},function(err){
        if(err){
            return res.status(500).send();
        }
        else{
            User.username =  req.body.username;
            User.password = req.body.password;
            User.firstname = req.body.firstname;
            User.creditCardNumber =req.body.creditCardNumber;
            User.fav_list=req.body.fav_list;
                User.sub_List=req.body.sub_List;
        User.save(function (err) {
                    if (err) {
                        res.status(500).send(err)
            }
                });
                }
        })

    },
    addToFavourites:function(req, res) {
 

        var name =req.body.name;
        var location =req.body.location;
        var price =req.body.price;
        var  date =req.body.date;
        User.findOne({username:req.session.username ,password:req.session.password},function(err){
        if(err){
            return res.status(500).send();
        }
        else{
            User.username = User.username;
            User.password = User.password;
            User.firstname = User.firstname;
            User.creditCardNumber = User.creditCardNumber;
            User.fav_list.push({name:name,location:location,price:price,date:date})
                User.sub_List=User.sub_List ;
        User.save(function (err) {
                    if (err) {
                        res.status(500).send(err)
            }
                });
                }
        })
},
    getSubList:function(req, res) {


        var name =req.body.name;

        User.findOne({username:req.session.username ,password:req.session.password},function(err){
        if(err){
            return res.status(500).send();
        }
        else{
            User.username = User.username;
            User.password = User.password;
            User.firstname = User.firstname;
            User.creditCardNumber = User.creditCardNumber;
            User.fav_list=User.fav_list ;
            User.sub_List.push({name})
            User.save(function (err) {
                    if (err) {
                        res.status(500).send(err)
            }
                });
                }
        })

        }
    
}
module.exports=userController;

