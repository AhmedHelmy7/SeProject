angular.module('appRoutes',['ngRoute','myFavouritesctrl','subListctrl','homectrl'])
.config(function($routeProvider,$locationProvider)
{
    $routeProvider
    .when('/',{
        templateUrl:'app/views/pages/home.html',
        controller:'homectrl',
         controllerAs:'homectrl'
    })
     .when('/register', {
        templateUrl: 'app/views/pages/registerMain.html'
    })
    .when('/register1', {
        templateUrl: 'app/views/pages/register.html',
        controller: 'RegisterController',
        controllerAs: 'register1'
    })
    .when('/register2', {
        templateUrl: 'app/views/pages/register2.html',
        controller: 'RegisterCompController',
        controllerAs: 'register2'
    })
    // login page that will use the LoginController
    .when('/login', {
        templateUrl: 'app/views/pages/login.html',
        controller:"LoginController",
        controllerAs: 'login'
    })
     .when('/review',{
    templateUrl: 'app/views/pages/Reviews.html',
    controller:'reviewCtrl',
    controllerAs:"revCtrl"
    })
    .when('/superban', {
		templateUrl: 'app/views/pages/SuperAdminBan.html',
		controller: 'superbanCtrl',
		controllerAs: 'superban' //name of controller to be used in my app
	})

	.when('/superdeban', {
		templateUrl: 'app/views/pages/SuperAdminDeban.html',
		controller: 'superdebanCtrl',
		controllerAs: 'superdeban' //name of controller to be used in my app
	})
    .when('/viewCompanies', {
        templateUrl: 'app/views/pages/companies.html',
        controller: 'compctrl',
        controllerAs: 'compctrl'
    })
	.when('/promote', {
		templateUrl: 'app/views/pages/SuperAdminPromote.html',
		controller: 'promoteCtrl',
		controllerAs: 'promote' //name of controller to be used in my app
	})

	.when('/demote', {
		templateUrl: 'app/views/pages/SuperAdminDemote.html',
		controller: 'demoteCtrl',
		controllerAs: 'demote' //name of controller to be used in my app
	})

    .when('/about',
    {
         templateUrl:'app/views/pages/about.html'
    })
    .when('/myFavourites',
    {
         templateUrl:'app/views/pages/myFavourites.html',
         controller:'myFavouritesctrl',
         controllerAs:'myFavouritesctrl'
    })
     .when('/mySubscribers',
    {
         templateUrl:'app/views/pages/mySubscriptions.html',
         controller:'subListctrl',
         controllerAs:'subListctrl'
    })
    .otherwise({redirectTo:'/'});
    $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
});