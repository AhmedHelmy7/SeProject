angular.module('postReviewCtrl', ['authServices'])
    .controller('postReviewCtrl', function($routeParams, Auth, $scope, $http) {

        $scope.revUser = function(Data) {
            // console.log('hey');
            this.errorMsg = false; //initially set to false to make the error message box disappear once valid data has been entered.
            //  console.log(Data)
            var c = $routeParams.companyName;
            console.log(c);
            $http.post('/review/review/' + c, this.Data).then(function(dataa) {
                if (dataa.data.success) {
                    console.log(dataa.data.message);
                    this.successMsg = dataa.data.message;

                } else {
                    //create an error message
                    this.errorMsg = dataa.data.message;
                }
            });

        }

    });