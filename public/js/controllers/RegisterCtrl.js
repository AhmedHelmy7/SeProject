angular.module('RegisterCtrl',['ngRoute','regService']).controller('RegisterController',function($http,$location,User) {

  var app=this;

  this.regUser = function(regData){
    app.errorMsg=false;

      User.create(app.regData).then(function(data){
        if(data.data.success){
           //Create success message
           app.succeceMsg = data.data.message;
           //Redirect to home page
           $location.path('/');
         }
        else {
              //create an error message
              app.errorMsg = data.data.message;
        }
      })
  };

});
