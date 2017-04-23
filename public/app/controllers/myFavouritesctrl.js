angular.module('myFavouritesctrl',[])
.controller('myFavouritesctrl',function($scope,$http)
{
    $scope.favlist=[];
        
    function favourite()
    {
            console.log("Worked");
            $http.get('/users/myFavourites').then(function(response)
            {
                console.log(response.data);
                $scope.favlist=response.data;
                $scope.fav="";
            });
    }
favourite();
})