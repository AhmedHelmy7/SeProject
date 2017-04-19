angular.module('LoginCtrl',['ngRoute','authService']).controller('LoginController',function($http,$location,Auth) {

  var app=this;

  this.doLogin = function(loginData){
    app.errorMsg=false;

      Auth.login(app.loginData).then(function(data){
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
