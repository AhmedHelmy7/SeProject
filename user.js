const mongoose = require('mongoose');


const Userschema = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}	
	banned: {
		type: boolean
	}
	admin: {
		type: boolean
	}
	super: {
		type: boolean
	}
});

app.post('/adminban.html',function(req, res) {
	

User.findOne({username:req.username},function(err){
  if(err){
     return res.status(500).send();
   }
   else{
   	if(User.admin == false){
     User.banned = true;
     // End Session
 User.save(function (err) {
            if (err) {
                res.status(500).send(err)
    }
        });
         }}
})
});

-----------------------------------------------------------------
app.post('/superban.html',function(req, res) {
	

User.findOne({username:req.username},function(err){
  if(err){
     return res.status(500).send();
   }
   else{
     User.banned = true;
     // End Session
 User.save(function (err) {
            if (err) {
                res.status(500).send(err)
    }
        });
         }
})
});

----------------------------------------------------------------------------------------
app.post('/promote.html',function(req, res) {
	

User.findOne({username:req.username},function(err){
  if(err){
     return res.status(500).send();
   }
   else{
     User.admin = true;
 User.save(function (err) {
            if (err) {
                res.status(500).send(err)
    }
        });
         }
})
});
--------------------------------------------------------------
app.post('/demote.html',function(req, res) {
	

User.findOne({username:req.username},function(err){
  if(err){
     return res.status(500).send();
   }
   else{
     User.admin = false;
 User.save(function (err) {
            if (err) {
                res.status(500).send(err)
    }
        });
         }
})
});
----------------------------
module.exports.deleteReview = function(id, callback) {
    //console.log(places.find(category));
    var name = { _id: id };
    var update = {
        flag: "1"
    };
    reviews.findOneAndUpdate(name, update, [], callback);
}


