angular.module('regService',['ngRoute'])

.factory('User',function($http){
    userFactory = {};

    //User.create(regData)
    userFactory.create = function(regData){
      return $http.post('/userRoutes/register',regData);
    }

    return userFactory;
});
