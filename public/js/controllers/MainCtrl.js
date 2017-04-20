angular.module('MainCtrl', []).controller('MainController', function($scope,$http) {
        var sel=$scope;
    
        $http.post("activities/top").then(function(res){
            sel.activities=res.data;
            console.log(res.data)
            console.log(res)
        });
        
    

})
.controller('addratingcontroller',function($scope,$http){
    $scope.addRating=function(RatingData){
        console.log("enters front end function");
            $http.post("activities/createrating",$scope.RatingData).then(function(res){
                console.log(RatingData)
            })
        }
})