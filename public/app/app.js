angular.module('sampleApp', ['ngRoute', 'appRoutes', 'RegisterCtrl', 'mainCtrl', 'RegisterCompCtrl', 'authServices', 'addActivityCtrl', 'ActivitiesCtrl', 'deletedActivityCtrl', 'editActivityCtrl'])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});