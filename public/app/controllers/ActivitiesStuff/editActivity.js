angular.module('editActivityCtrl', [])
    .controller('editActivityCtrl', function($scope, $http, $routeParams) {
        $scope.nameTab = 'active';
        $scope.phase1 = true;
        $scope.selectedName = '';
        $scope.bb = '';

        $scope.namePhase = function() {
            $scope.nameTab = 'active';
            $scope.StartDatTab = 'default'
            $scope.EndDateTab = 'default'
            $scope.LocationTab = 'default'
            $scope.numberOfApplicatonsTab = 'default'
            $scope.descTab = 'default'

            $scope.phase1 = true;
            $scope.phase2 = false;
            $scope.phase3 = false;
            $scope.phase4 = false;
            $scope.phase5 = false;
            $scope.phase6 = false;

        }
        $scope.StartDatPhase = function() {
            $scope.nameTab = 'default';
            $scope.StartDatTab = 'active'
            $scope.EndDateTab = 'default'
            $scope.LocationTab = 'default'
            $scope.numberOfApplicatonsTab = 'default'
            $scope.descTab = 'default'

            $scope.phase1 = false;
            $scope.phase2 = true;
            $scope.phase3 = false;
            $scope.phase4 = false;
            $scope.phase5 = false;
            $scope.phase6 = false;
        }
        $scope.EndDatePhase = function() {
            $scope.nameTab = 'default';
            $scope.StartDatTab = 'default'
            $scope.EndDateTab = 'active'
            $scope.LocationTab = 'default'
            $scope.numberOfApplicatonsTab = 'default'
            $scope.descTab = 'default'

            $scope.phase1 = false;
            $scope.phase2 = false;
            $scope.phase3 = true;
            $scope.phase4 = false;
            $scope.phase5 = false;
            $scope.phase6 = false;
        }
        $scope.LocationPhase = function() {
            $scope.nameTab = 'default';
            $scope.StartDatTab = 'default'
            $scope.EndDateTab = 'default'
            $scope.LocationTab = 'active'
            $scope.numberOfApplicatonsTab = 'default'
            $scope.descTab = 'default'

            $scope.phase1 = false;
            $scope.phase2 = false;
            $scope.phase3 = false;
            $scope.phase4 = true;
            $scope.phase5 = false;
            $scope.phase6 = false;
        }
        $scope.numberOfApplicatonsPhase = function() {
            $scope.nameTab = 'default';
            $scope.StartDatTab = 'default'
            $scope.EndDateTab = 'default'
            $scope.LocationTab = 'default'
            $scope.numberOfApplicatonsTab = 'active'
            $scope.descTab = 'default'

            $scope.phase1 = false;
            $scope.phase2 = false;
            $scope.phase3 = false;
            $scope.phase4 = false;
            $scope.phase5 = true;
            $scope.phase6 = false;
        }
        $scope.descPhase = function() {
            $scope.nameTab = 'default';
            $scope.StartDatTab = 'default'
            $scope.EndDateTab = 'default'
            $scope.LocationTab = 'default'
            $scope.numberOfApplicatonsTab = 'default'
            $scope.descTab = 'active'

            $scope.phase1 = false;
            $scope.phase2 = false;
            $scope.phase3 = false;
            $scope.phase4 = false;
            $scope.phase5 = false;
            $scope.phase6 = true;
        };

        $http.get('/users/Activities').then(function(response) {
            //console.log(response);
            $scope.contactlist = response.data;
            $scope.contact = "";
        });

        okok = function() {
            var temp = $routeParams.id;
            // console.log('hola1');
            $http.get('/users/view/' + temp).then(function(response) {

                $scope.selectedName = response.data[0].Name;
                $scope.bb = response.data[0].Name;
                $scope.Name = $scope.bb;

                fill();
            })
        }
        okok();
        fill = function() {
            $scope.Name = $scope.bb;
            console.log($scope.Name)
        }

        $scope.updateName = function(Name) {
            console.log('hey');
            //console.log(this.regData);
            //console.log(this.regData);
            //     $scope.Name = this.bb;
            var id = $routeParams.id;
            //   $scope.newName = $scope.bb;

            //  this.Name = $scope.Name;
            //  console.log($scope.selectedName);
            console.log($scope.Name);
            if ($scope.Name == null) {
                $scope.Name = this.Name;
            }
            console.log(this.Name);
            console.log($scope.Name);
            $http.post('/users/edit/' + id, Name).then(function(data) {
                console.log(data);
            });
        }


    });