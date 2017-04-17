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

    superban:function(req, res) {
    User.findOneAndUpdate({username:req.body.username},{isBanned:true},{},function(err, res){
        // End session
    if (err) {
                    throw err;
                } else {
                    console.log('Banned');
            }
    });
    },
    superdeban:function(req, res) {
    User.findOneAndUpdate({username:req.body.username},{isBanned:false},{},function(err, res){
        // End session
    if (err) {
                    throw err;
                } else {
                    console.log('Debanned');
            }
    });
    },
    promote:function(req, res) {
    User.findOneAndUpdate({username:req.body.username},{isAdmin:true},{},function(err, res){
    if (err) {
                    throw err;
                } else {
                    console.log('Promoted');
            }
    });
    },
    demote:function(req, res) {
        

        User.findOneAndUpdate({username:req.body.username},{isAdmin:false},{},function(err, res){
            if (err) {
                            throw err;
                        } else {
                            console.log('Demoted');
                    }
        });

    },
     editProfile:function(req,res){
     
      User.findById(req.params.id,function(err,user){
        if(user==null){
            console.log('yes');
          }
             else{
         
        user.email=req.body.email;
   user.name=req.body.name;
           user.password = req.body.password;
          user.creditCardNumber =req.body.creditCardNumber;
   
           
   user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });
                }
        })

    },
    addToFavourites:function(req, res) {
 

        var name =req.body.name;
        var location =req.body.location;
        var price =req.body.price;
        var  date =req.body.date;
        User.findById(req.params.id,function(err,user){
        if(user==null){
            console.log('yes');
          }
        else{
         
            user.fav_list.push({name:name,location:location,price:price,date:date})
               
        user.save(function (err) {
                   if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
                });
                }
        })
},
    getSubList:function(req, res) {
        

        var name =req.body.name;

        User.findById(req.params.id,function(err,user){
       if(user==null){
            console.log('yes');
          }
        else{
          
            user.sub_List.push({name})
            user.save(function (err) {
                         if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
                });
                }
        })

    },
    getProfile:function(req,res,next){
        
        res.json({user:req.user});
    }



}
module.exports=userController;

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