angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
    }]);