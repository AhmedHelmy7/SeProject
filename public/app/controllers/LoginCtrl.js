angular.module('LoginCtrl',['ngRoute']).controller('LoginController',function($scope,$http,$location) {

  var app=$scope;

  this.doLogin = function(loginData){
    app.errorMsg=false;

      $http.post('/users/login',this.loginData).then(function(data){
        if(data.data.success){
          $http.defaults.headers.common['Authorization'] = data.data.token;
           //Create success message
           app.successMsg = data.data.message;
           $http.get('/users/profile');
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
