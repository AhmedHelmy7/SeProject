var app = angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'app/views/pages/home.html'
	})

	.when('/about', {
		templateUrl: 'app/views/pages/about.html'
	})

	.when('/editProfile', {
		templateUrl: 'app/views/pages/admin/edit.html',
		controller: 'Ctrl',
		controllerAs: 'user' //name of controller to be used in my app
	})

		.when('/addToFavourites', {
		templateUrl: 'app/views/pages/admin/fav.html',
		controller: 'Ctrl1',
		controllerAs: 'user1' //name of controller to be used in my app
	})

			.when('/getSubList', {
		templateUrl: 'app/views/pages/admin/sub.html',
		controller: 'Ctrl2',
		controllerAs: 'user2' //name of controller to be used in my app
	})


	.otherwise({ redirectTo: '/'} );

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});