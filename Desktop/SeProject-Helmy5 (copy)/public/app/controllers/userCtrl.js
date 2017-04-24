angular.module('userControllers',[])

.controller('Ctrl',function($http){
	this.regUser=function(regData){
		console.log("form submitt");
		console.log(this.regData);
		$http.put('/users/editProfile',this.regData).then(function(data){
			console.log(data);
		})
	};
});

//controller to add subscribers to user subscriber list
angular.module('userControllers2',[])
.controller('Ctrl2',function($http){
	this.sub=function(reg){
		console.log("form submitt");
		console.log(this.reg);
		$http.put('/users/getSubList',this.reg).then(function(data){
			console.log(data);
		})
	};
});

//controller to add activites to user favorite list
angular.module('userControllers1',[])
.controller('Ctrl1',function($http){
	this.fav=function(register){
		console.log("form submitt");
		console.log(this.register);
		$http.put('/users/addToFavourites',this.register).then(function(data){
			console.log(data);
		})
	};
});
