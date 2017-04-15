angular.module('userControllers',[])

.controller('banCtrl',function($http){
	this.banUser = function(banData){
		console.log('username recieved');
		console.log(this.banData);

		$http.put('/users/adminban', this.banData).then(function(data){
			console.log(data);
		});
	};

		this.UnbanUser = function(banData){
		console.log('username recieved');
		console.log(this.banData);

		$http.put('/users/admindeban', this.banData).then(function(data){
			console.log(data);
		});
	};

});


