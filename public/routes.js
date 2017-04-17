angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider, $locationProvider){
$routeProvider

.when('/',{
  templateUrl: 'views/pages/home.html'
  })

  .when('/about',{
    templateUrl: 'views/pages/about.html'
  })

  .when('/search',{

    templateUrl : 'views/pages/search.html',
    controller: 'schCtrl',
    controllerAs: 'searching'
  })

  .when('/filter',{

    templateUrl : 'views/pages/filter.html',
    controller : 'ftrCtrl',
    controllerAs: 'filtering'

  })

.otherwise({redirectTo: '/'});

$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
  });
});
