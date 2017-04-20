angular.module('appRoutes', ['ngRoute']).config(function($routeProvider, $locationProvider) {

  $routeProvider
    // home page
    .when('/', {
        templateUrl: 'app/views/pages/home.html'
    })
    // register page that will use the RegisterController
    .when('/register', {
        templateUrl: 'app/views/pages/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
    })
    // login page that will use the LoginController
    .when('/login', {
        templateUrl: 'app/views/pages/login.html'
    })

    .otherwise({redirectTo : '/'});

$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});


});
