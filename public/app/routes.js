var app = angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'app/views/pages/home.html'
	})

	.when('/about', {
		templateUrl: 'app/views/pages/about.html'
	})

	.when('/superban', {
		templateUrl: 'app/views/pages/SuperAdminPrivilges/SuperAdminBan.html',
		controller: 'superbanCtrl',
		controllerAs: 'superban' //name of controller to be used in my app
	})

	.when('/superdeban', {
		templateUrl: 'app/views/pages/SuperAdminPrivilges/SuperAdminDeban.html',
		controller: 'superdebanCtrl',
		controllerAs: 'superdeban' //name of controller to be used in my app
	})

	.when('/promote', {
		templateUrl: 'app/views/pages/SuperAdminPrivilges/SuperAdminPromote.html',
		controller: 'promoteCtrl',
		controllerAs: 'promote' //name of controller to be used in my app
	})

	.when('/demote', {
		templateUrl: 'app/views/pages/SuperAdminPrivilges/SuperAdminDemote.html',
		controller: 'demoteCtrl',
		controllerAs: 'demote' //name of controller to be used in my app
	})

	.otherwise({ redirectTo: '/'} );

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});