let User=require('../models/user');


let userController={
    
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

        }
    
}
module.exports=userController;

