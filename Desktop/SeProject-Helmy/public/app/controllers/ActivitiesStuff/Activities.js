angular.module('ActivitiesCtrl', ['authServices'])
    .controller('ActivitiesCtrl', function(Auth, $scope, $http, $location, $timeout) {

        this.o = '';
        $scope.limit = 5;
        $scope.contactlist = [];

        $scope.selectedRow = 0;
        $scope.selectedActivity = null;

        $scope.temp1 = null;
        $scope.show = false;

        $scope.setClickedRow = function(Activity, index) {
            $scope.show = true;

            $scope.selectedRow = index;
            $scope.temp1 = Activity;
            $http.get('/activities/view/' + Activity).then(function(response) {
                $scope.selectedActivity = response.data;
            })
        }

        function getActivities() {
            Auth.getUser().then(function(data) {
                this.o = data.data._doc.username;
                $http.get('/activities/Activities/' + o).then(function(response) {
                    console.log(response);
                    $scope.contactlist = response.data;
                    $scope.contact = "";
                });
            });

        }
        getActivities();

        $scope.deleteActivity = function(index, _id) {
            $scope.contactlist.splice(index, 1);
            $http.put('/activities/Activities/' + _id).then(function(data) {
                console.log(data);
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