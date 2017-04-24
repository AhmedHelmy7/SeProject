angular.module('myApp',['appRoutes','mainCtrl','userControllers','userControllers2','userControllers1','userControllersIbrahim','myFavouritesctrl','authServices', 'addActivityCtrl', 'ActivitiesCtrl', 'deletedActivityCtrl', 'editActivityCtrl','subListctrl','homectrl','RegisterCtrl','RegisterCompCtrl','compctrl','userControllersEmad','userControllersOmar'])
.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});