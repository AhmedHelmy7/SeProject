let User=require('../models/user');
let bcrypt =require('bcryptjs');
let Review = require('../models/reviews');
let Rating = require('../models/Rating');
let Activity = require('../models/Activity');
let RegisteredUser = require('../models/user');
var temp;
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
       if(req.body.username == null || req.body.username=='')
            return res.json({success:false,msg:'Please, Enter Username !'}) 
        if(req.session.user.isSuperAdmin)
        {
         User.findOneAndUpdate({username:req.body.username},{isBanned:true},{},function(err){
        // End session
    if (err) {
                     return res.json({success:false,msg:'Error Occured, User not banned !'})
                } else {
                    return res.json({success:true,msg:'Banned successfully (Y)'})
            }
    });
        }
        else{
            return res.json({success:true,msg:'You are not a super admin !'})
        }
    },
    superdeban:function(req, res) {
    if(req.body.username == null || req.body.username=='')
            return res.json({success:false,msg:'Please, Enter Username !'}) 
    if(req.session.user.isSuperAdmin)
    {
 User.findOneAndUpdate({username:req.body.username},{isBanned:false},{},function(err){
        // End session
    if (err) {
                    throw err;
                } else {
                     return res.json({success:true,msg:'Unbanned successfully (Y)'})            }
    });
    }
    else{
                 return res.json({success:true,msg:'You are not a super admin !'})
    }
    },
    promote:function(req, res) {
     if(req.body.username == null || req.body.username=='')
            return res.json({success:false,msg:'Please, Enter Username !'}) 

    if(req.session.user.isSuperAdmin)
    {
         User.findOneAndUpdate({username:req.body.username},{isAdmin:true},{},function(err){
    if (err) {
                    throw err;
                } else {
                   return res.json({success:true,msg:'Promoted successfully (Y)'}) 
            }
    });
    }
    else{
              return res.json({success:true,msg:'You are not a super admin !'})

        }

    },
    demote:function(req, res) {
            if(req.body.username == null || req.body.username=='')
            return res.json({success:false,msg:'Please, Enter Username !'}) 

            if(req.session.user.isSuperAdmin)
            {
                User.findOneAndUpdate({username:req.body.username},{isAdmin:false},{},function(err){
            if (err) {
                            throw err;
                        } else {
                            return res.json({success:true,msg:'Demoted successfully (Y)'}) 
                    }
        });
            }
            else{
              return res.json({success:true,msg:'You are not a super admin !'})

            }

        

    },
   
adminBan:function(req, res) {
  if(req.body.username == null || req.body.username=='')
    return res.json({success:false,msg:'Please, Enter Username !'}) 
 else{
  User.findOneAndUpdate({username:req.body.username ,isSuperAdmin: false},{isBanned:true},{},function(err,isSuperAdmin){
    // End session
  if (err) {
                return res.json({success:false,msg:'Error Occured, User not banned !'})
            } 
  //if(!result){
  //               return res.json({success:false,msg:'User not found !'})
    //        }
 // else{
  if(!isSuperAdmin){
                return res.json({success:false,msg:'You can not ban an admin !'})
             }
    else {
                 return res.json({success:true,msg:'Banned successfully (Y)'})
           }
 //   }
});
}
  
},

adminDeban:function(req, res) {

    if(req.body.username == null || req.body.username=='')
     return res.json({success:false,msg:'Please, Enter Username !'})  

else {
  User.findOneAndUpdate({username:req.body.username ,isSuperAdmin: false},{isBanned:false},{},function(err,isSuperAdmin){
    // End session
  if (err){
        return res.json({success:false,msg:'Error Occured, Unbanning failed !'})
  }
   if(!isSuperAdmin){
                return res.json({success:false,msg:'You do not have this privilege'})
             }
  else {
         return res.json({success:true,msg:'Unbanned successfully'})
     }
});
}
},


deleteReview:function(req,res) {
  reviews.findOneAndRemove({id:req.body.id},{}, function(err){
    // End session
  if (err)
        return res.json({success:false,msg:'Error Occured, Deletion failed !'})
  else 
         return res.json({success:true,msg:'Review deleted successfully'})
});
},

     editProfile:function(req,res){
     
      User.findById(req.session.user._id,function(err,user){
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
        User.findById(req.session.user._id,function(err,user){
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
myFavourites:function(req, res)
{
    User.findById(req.session.user.id,function(err,user){
        if(err)
         throw err;
         else
         res.json(user.fav_list);
    })
},

    getSubList:function(req, res) {
        

        var name =req.params.companyName;

        User.findById(req.session.user.id,function(err,user){
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
    viewCompanies:function(req, res) {
    User.find({ 'isCompany': 'true'},function(err,companies){
        if(err)
         throw err;
         else
         res.json(companies);
    })
},
        mySubscribers:function(req, res) {
        User.findById(req.session.user.id,function(err,user){
        if(err)
         throw err;
         else
         res.json(user.sub_List);
    })
        },
    getProfile:function(req,res,next){
        temp=req.user;
        res.json({user:req.user});
    },


    //add rating function that creates a new rating in the ratings collection and adds its id in the array list of the corresponding activity and calculates the avgRating of that activity
    addRating: function(req, res) {
        let rating = new Rating({
            activityID:req.params._id,
            registeredUserID:req.session.user._id,
             rating:req.body.rating
        });    
        Rating.create(rating,function(err, acc) {
            if (err) {
                res.send(err.message);
                console.log(err);
            } else {
               Activity.findById(acc.activityID,(err,activity)=>{
                    activity.numberOfRatings+=1;
                    activity.ratings.push(rating._id);
                    activity.avgRating=(((activity.numberOfRatings-1)*activity.avgRating)+rating.rating)/activity.numberOfRatings;
                    Activity.findByIdAndUpdate(rating.activityID,activity,{},(err,res)=>{
                        if (err) {
                            throw err;
                        } else {
                            console.log('Updated');
                        }
                    });
                    
                });
                
                res.json(acc);
            }
        })
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
//    