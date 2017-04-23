angular.module('RegisterCtrl',['ngRoute']).controller('RegisterController',function($scope,$http,$location) {

  var app=$scope;

  this.regUser = function(regData){
    console.log('Testing button');
    app.errorMsg=false;

      $http.post('/users/register',this.regData).then(function(data){
        if(data.data.success){
              console.log('Testing button2');
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