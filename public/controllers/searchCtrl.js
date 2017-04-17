angular.module('searchControllers',[])


.controller('schCtrl',function($http){

var app= this;

this.searchAct = function(searchData) {

  console.log('search submitted');
        console.log(this.searchData);
  $http.post('/main/search',this.searchData).then(function(data){

      console.log(data.data.activities);

      app.act = data.data.activities;

    })
  };


});
