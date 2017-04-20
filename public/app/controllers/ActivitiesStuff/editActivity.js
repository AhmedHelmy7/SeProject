angular.module('editActivityCtrl', [])
    .controller('editActivityCtrl', function($scope) {
        $scope.nameTab = 'active';
        $scope.phase1 = true;

        $scope.getName = function(newName) {
            console.log('hola');
            $http.get('/users/view/' + $routeParams.id).then(function(response) {
                if (data.data.success) {
                    $scope.newName = data.data.user.Name
                }
            })
        }

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
        $scope.updateName = function(newName) {
            /* $http.put('/users/edit/:_id', this.regData).then(function(data) {

                    }
*/
        }
    });