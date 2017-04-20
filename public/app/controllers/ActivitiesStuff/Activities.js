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
                // console.log(Activity);
                $scope.temp1 = Activity;

                // console.log('/users/view/' + Activity)
                $http.get('/users/view/' + Activity).then(function(response) {
                    //     console.log(response.data);
                    $scope.selectedActivity = response.data;

                })

                console.log($scope.selectedActivity)
            }
            //    {selected: contact.id === idSelectedActivity}

        function getActivities() {
            $http.get('/users/Activities').then(function(response) {
                //console.log(response);
                $scope.contactlist = response.data;
                $scope.contact = "";
            });
        }
        getActivities();


        //        $scope.remove = function(_id) {
        //           console.log(_id);
        //          $http.delete('/users/Activities/' + _id).then(function(data) {
        /*  console.log(response);
          $scope.contactlist = response.data;
          $scope.contact = "";*/
        // $scope.error = "error " + data;
        // $scope.refresh();
        //              $scope.contactlist = [];
        //             $http.get('/users/Activities').then(function(response) {
        //                console.log(response);
        //               $scope.contactlist = response.data;
        //              $scope.contact = "";
        //         });
        //    })
        // }
        /* $scope.redirect = function() {
             window.location = '/AddActivity.html';
         }*/
        $scope.deleteActivity = function(index, _id) {

            //             console.log('hola');
            // $scope.refresh();

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