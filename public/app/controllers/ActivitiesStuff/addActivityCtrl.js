angular.module('addActivityCtrl', [])
    .controller('addActivityCtrl', function($http, $location, $timeout) {

        var app = this
        this.addActivity = function(regData) {
            app.errorMsg = false;
            /*    console.log('works?2')
                console.log(this.regData);*/
            $http.post('/users/addActivities', this.regData).then(function(data) {
                console.log(data.data.message);
                if (data.data.success) {
                    //once data is inserted
                    app.successMsg = data.data.message + "....Redirecting";
                    //redirecting
                    $timeout(function() {
                        $location.path('/');
                    }, 2000);
                } else {
                    app.errorMsg = data.data.message

                }

                //  console.log('Yees!')
            });
        }
    });
/*
angular.module("cuppaDatepicker", ["cuppaDatepickerDirective"])
    .controller("cuppaDatepickerController", function($scope) {
        $scope.myDate = new Date();
        $scope.myDate2 = "04-18-1990 12:15 AM";
    });*/