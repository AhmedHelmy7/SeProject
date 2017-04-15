var app = angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'app/views/pages/home.html'
	})

	.when('/about', {
		templateUrl: 'app/views/pages/about.html'
	})

	.when('/adminban', {
		templateUrl: 'app/views/pages/admin/ban.html',
		controller: 'banCtrl',
		controllerAs: 'ban' //name of controller to be used in my app
	})

	.otherwise({ redirectTo: '/'} );

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});