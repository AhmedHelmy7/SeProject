//console.log('BOBO');
angular.module('ActivitiesCtrl', [])
    .controller('ActivitiesCtrl', function($scope, $http, $location, $timeout) {


        $scope.limit = 5;
        $scope.contactlist = [];

        $scope.selectedRow = 0;
        $scope.selectedActivity = null;

        $scope.temp1 = null;

        $scope.setClickedRow = function(Activity, index) {
            $scope.selectedRow = index;
            $scope.temp1 = Activity;

            $http.get('/users/view/' + Activity).then(function(response) {
                $scope.selectedActivity = response.data;

            })
        }

        function getActivities() {
            $http.get('/users/Activities').then(function(response) {
                //console.log(response);
                $scope.contactlist = response.data;
                $scope.contact = "";
            });
        }
        getActivities();

        $scope.deleteActivity = function(index, _id) {
            $scope.contactlist.splice(index, 1);
            $http.put('/users/Activities/' + _id).then(function(data) {

            })
        }
        $scope.showMore = function(number) {
            showMoreError = false;
            if (number > 0) {
                this.limit = number;
            } else {
                this.showMoreError = "please enter a valid number"
            }
        }
        $scope.showAll = function() {
            this.limit = undefined;
            showMoreError = false;
        }
    });