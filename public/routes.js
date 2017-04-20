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
  .when('/searchComp',{

    templateUrl : 'views/pages/searchComp.html',
    controller : 'schCompCtrl',
    controllerAs: 'searchingComp'

  })

  .when('/searchRate',{

    templateUrl : 'views/pages/searchRate.html',
    controller : 'schRateCtrl',
    controllerAs: 'searchingRate'

  })

.otherwise({redirectTo: '/'});

$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
  });
});
