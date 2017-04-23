angular.module('myApp',['appRoutes','myFavouritesctrl','mainCtrl','authServices', 'addActivityCtrl', 'ActivitiesCtrl', 'deletedActivityCtrl', 'editActivityCtrl','subListctrl','homectrl','RegisterCtrl','RegisterCompCtrl','compctrl','userControllersEmad','userControllersOmar'])
.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});