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

    }

    adminban: function(req, res) {
User.findOne({username:req.username},function(err){
  if(err){
     return res.status(500).send();
   }
   else{
    if(User.isAdmin == false){
     User.isBanned = true;
     // End Session
 User.save(function (err) {
            if (err) {
                res.status(500).send(err)
    }
        });
         }}
})
});

deleteReview:function(id, callback) {
    var name = { _id: id };
    var update = {
        flag: "1"
    };
    reviews.findOneAndUpdate(name, update, [], callback);
}
}
module.exports=userController;

