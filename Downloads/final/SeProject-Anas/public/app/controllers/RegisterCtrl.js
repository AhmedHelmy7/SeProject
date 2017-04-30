angular.module('RegisterCtrl', ['ngRoute']).controller('RegisterController', function($scope, $http, $location) {

    var app = $scope;

    this.regUser = function(regData) {
        //console.log('Testing button');
        this.errorMsg = false;

        $http.post('/users/register', this.regData).then(function(data) {
            if (data.data.success) {
                console.log(data.data.success);
                console.log('Testing button2');
                //Create success message
                this.successMsg = data.data.message;
                //Redirect to home page
                $location.path('/login');
            } else {
                console.log(data.data.message);
                //create an error message
                this.errorMsg = data.data.message;
                console.log(this.errorMsg);
                //    console.log(data.data.success);
            }
        })
    };

});