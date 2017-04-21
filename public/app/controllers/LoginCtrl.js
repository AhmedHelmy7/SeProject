angular.module('LoginCtrl',['ngRoute']).controller('LoginController',function($scope,$http,$location) {

  var app=$scope;

  this.doLogin = function(loginData){
    app.errorMsg=false;

      $http.post('/users/login',this.loginData).then(function(data){
        if(data.data.success){
           //Create success message
           app.successMsg = data.data.message;
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
