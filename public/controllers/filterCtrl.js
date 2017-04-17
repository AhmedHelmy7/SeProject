angular.module('filterControllers',[])


.controller('ftrCtrl',function($http){

  var app= this;

this.filterAct = function(filterData) {
  console.log('filter submitted');
    console.log(this.filterData)
      console.log(this.searchData);
      $http.post('/main/filter',this.filterData).then(function(data){
    console.log(data.data.company);
    app.comp = data.data.company;


        })
  };
});
