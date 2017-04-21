angular.module('appRoutes',['ngRoute'])
//the route to my front end,using route and location providers. using the reviewCtrl controller and giving it a nickname "revCtrl"
.config(function($routeProvider,$locationProvider) {

  $routeProvider.when('/review',{
    templateUrl: 'app/views/pages/Reviews.html',
    controller:'reviewCtrl',
    controllerAs:"revCtrl"
  });


//to prevent the need to use a # when typing the url
  $locationProvider.html5Mode({
  	  enabled: true,
  	  requireBase: false
  	});

});
