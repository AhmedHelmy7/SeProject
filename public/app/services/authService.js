angular.module('authService',['ngRoute'])

.factory('Auth',function($http){
    var authFactory = {};

    //Auth.create(regData)
    authFactory.login = function(loginData){
      return $http.post('/users/login',loginData);
    }

    return authFactory;
});
