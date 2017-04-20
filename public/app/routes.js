angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'app/views/pages/home.html'
    })

    .when('/AddActivity', {
        templateUrl: 'app/views/pages/Activity/AddActivity.html',
        controller: 'addActivityCtrl',
        controllerAs: 'addActivityCtrl'
    })

    .when('/Activities', {
        templateUrl: 'app/views/pages/Activity/Activities.html',
        controller: 'ActivitiesCtrl',
        controllerAs: 'ActivitiesCtrl'
    })

    .when('/edit/:id', {
        templateUrl: 'app/views/pages/Activity/EditingActivities.html',
        controller: 'editActivityCtrl',
        controllerAs: 'editActivityCtrl'
    })

    .when('/Trash', {
        templateUrl: 'app/views/pages/Activity/Trash.html',
        controller: 'deletedActivityCtrl',
        controllerAs: 'deletedActivityCtrl'
    })



    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});