angular.module('authService',['ngRoute'])

.factory('Auth',function($http){
    var authFactory = {};

    //Auth.create(regData)
    authFactory.login = function(loginData){
      return $http.post('/userRoutes/login',loginData);
    }

    return authFactory;
});
