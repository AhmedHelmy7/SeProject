angular.module('compctrl',[])
.controller('compctrl',function($scope,$http)
{
    $scope.complist=[];
        
    function getComp()
    {
            console.log("Worked");
            $http.get('/users/viewCompanies').then(function(response)
            {
                console.log(response.data);
                $scope.complist=response.data;
                $scope.comp="";
            });
    }
getComp();
})