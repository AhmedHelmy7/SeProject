angular.module('deletedActivityCtrl', [])
    .controller('deletedActivityCtrl', function($http, $scope) {
        $scope.contactlist = [];
        $scope.limit = 5;
        $scope.selectedRow = 0;
        $scope.selectedActivity = null;

        $scope.temp1 = null;
        $http.get('/users/trash').then(function(response) {
            $scope.contactlist = response.data;
            $scope.contact = "";
        });

        $scope.setClickedRow = function(Activity, index) {
            $scope.selectedRow = index;
            // console.log(Activity);
            $scope.temp1 = Activity;

            // console.log('/users/view/' + Activity)
            $http.get('/users/view/' + Activity).then(function(response) {
                //     console.log(response.data);
                $scope.selectedActivity = response.data;

            })

            console.log($scope.selectedActivity)
        }
        $scope.deleteActivity = function(_id, index) {

            //             console.log('hola');
            // $scope.refresh();
            $scope.contactlist.splice(index, 1);
            $http.put('/users/update/' + _id).then(function(data) {

            })
        }

    });