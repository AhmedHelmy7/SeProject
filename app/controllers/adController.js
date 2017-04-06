var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('finalProject', ['companies','advertisements','activites']);

let adController={
  createAd:function(req,res) {
   var n =0;
    var newlink = req.body.newlink;
    var company = req.body.company;
    var duration = req.body.duration;
    var newAd = { link: newlink,
      duration : duration}

    db.advertisements.insert(newAd,function(err,result){
      if(err){
        res.render('errorPage' , { error: err});}
        console.log(err);
      });

    db.company.count({}, function(err, c) {

   db.company.find({}, function(err,doc)
    {
     for(var i=0;i<c;i++)
     {

       n= n+ docs[i].advertisements.length;
     }
   })

  if(n<5) //how many ads will we have?
  {

  db.company.findOne(
    {Company_name : company},
      function(err,doc){
        var curlist = doc.advertisements
        curlist.push(newlink)

        db.companies.findAndModify({
          query:{Company_name : company},
          update: {$set: {ads : curlist}},
          new: true
        }, function (err, doc, lastErrorObject) {

        db.advertisements.insert(newlink,function(err,result){

          res.render('profile' , {
            company:company // not sure what to pass for profile yet.
          });
        })
      })

      })

    } else {
      res.render('profile' , {
        company:doc,
        error: "we dont currently have an empty place for your ad :("
      });
    }

    });
  },
  getAllAds:function(req,res) {
    var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0

  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  }
  if(mm<10){
      mm='0'+mm;
  }
  var today = dd+'/'+mm+'/'+yyyy;

    db.advertisements.find( {},
      function(err,doc){
  if(doc.duration == today)
  {
    db.advertisements.dropIndex(
      {duration : today},
        function(err,doc){
  })

      }
  })

  }

}
module.exports = adController;
