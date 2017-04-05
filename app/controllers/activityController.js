let Activity = require('../models/Activity');

let activityController={
    getTopRatedActivities:function(req,res){
        
        
        Activity.find(function(err,activities){
            if(err){
                res.send(err.message);
                console.log(err);
            }else{
                console.log(rating)
                 res.send(activities);
                res.redirect('/');  //b3d may3ml rating hayrg3 le fen
            }
        });
    }
}

module.exports=activityController;