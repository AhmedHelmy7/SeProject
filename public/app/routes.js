angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider,$locationProvider) {

  $routeProvider.when('/review',{
    templateUrl: 'app/views/pages/Reviews.html',
    controller:'reviewCtrl',
    controllerAs:"revCtrl"
  });



  $locationProvider.html5Mode({
  	  enabled: true,
  	  requireBase: false
  	});

});
