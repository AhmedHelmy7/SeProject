angular.module('userControllers',[])

.controller('superbanCtrl',function($http){
	this.superbanUser = function(superbanData){
		console.log('username recieved');
		console.log(this.superbanData);

		$http.put('/users/superban', this.superbanData).then(function(data){
			console.log(data);
		});
	};


})

.controller('superdebanCtrl',function($http){
	this.superdebanUser = function(superdebanData){
		console.log('username recieved');
		console.log(this.superdebanData);

		$http.put('/users/superdeban', this.superdebanData).then(function(data){
			console.log(data);
		});
	};

})

.controller('promoteCtrl',function($http){
	this.promoteUser = function(promoteData){
		console.log('username recieved');
		console.log(this.promoteData);

		$http.put('/users/promote', this.promoteData).then(function(data){
			console.log(data);
		});
	};

})

.controller('demoteCtrl',function($http){
	this.demoteUser = function(demoteData){
		console.log('username recieved');
		console.log(this.demoteData);

		$http.put('/users/demote', this.demoteData).then(function(data){
			console.log(data);
		});
	};

});