angular.module('myApp',['appRoutes','mainCtrl','myFavouritesctrl','authServices', 'addActivityCtrl', 'ActivitiesCtrl', 'deletedActivityCtrl', 'editActivityCtrl','subListctrl','homectrl','RegisterCtrl','RegisterCompCtrl','compctrl','userControllersEmad','userControllersOmar'])
.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});