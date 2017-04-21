angular.module('appRoutes', ['ngRoute']).config(function($routeProvider, $locationProvider) {

  $routeProvider
    // home page
    .when('/', {
        templateUrl: 'app/views/pages/home.html'
    })
    // register page that will use the RegisterController
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

    .otherwise({redirectTo : '/'});

$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});


});
