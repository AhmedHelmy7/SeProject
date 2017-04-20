angular.module('RegisterCtrl',['ngRoute','regService']).controller('RegisterController',function($scope,$http,$location) {

  var app=$scope;

  this.regUser = function(regData){
    app.errorMsg=false;

      $http.post('/users/register',this.regData).then(function(data){
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
