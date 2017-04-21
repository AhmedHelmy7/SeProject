angular.module('RegisterCompCtrl',['ngRoute']).controller('RegisterCompController',function($scope,$http,$location) {

  var app=$scope;

  this.regComp = function(compData){
    app.errorMsg=false;

      $http.post('/users/registerComp',this.compData).then(function(data){
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
