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
            templateUrl: 'app/views/pages/login.html'
        })
        //User logout
        .when('/logout', {
            templateUrl: 'app/views/pages/logout.html'
        })

    //Company add Activities
    .when('/AddActivity', {
        templateUrl: 'app/views/pages/Activity/AddActivity.html',
        controller: 'addActivityCtrl',
        controllerAs: 'addActivityCtrl'
    })

    //Company Gets Activities
    .when('/Activities/:companyName', {
            templateUrl: 'app/views/pages/Activity/Activities.html',
            controller: 'ActivitiesCtrl',
            controllerAs: 'ActivitiesCtrl'
        })
        //Company Gets deleted Activities
        .when('/Trash', {
            templateUrl: 'app/views/pages/Activity/Trash.html',
            controller: 'deletedActivityCtrl',
            controllerAs: 'deletedActivityCtrl'
        })
        //editActivity
        .when('/edit/:id', {
            templateUrl: 'app/views/pages/Activity/temp.html',
            controller: 'editActivityCtrl',
            controllerAs: 'editActivityCtrl'
        })

    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });


});