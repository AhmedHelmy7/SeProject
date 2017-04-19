angular.module('MainCtrl', []).controller('MainController', function($scope,$http) {
        var sel=$scope;
    
        $http.post("activities/top").then(function(res){
            sel.activities=res.data;
            console.log(res.data)
            console.log(res)
        });
    

});