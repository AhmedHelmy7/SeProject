angular.module('userControllers',[])

.controller('banCtrl',function($http){
	
	var app= this;

	this.banUser = function(banData){
		app.errorMsg = false;   //to make the error flash message disappear after another message
		$http.put('/users/adminban', this.banData).then(function(data){
			console.log(data.data.success);
			console.log(data.data.msg);
			
			if(data.data.success){
				
				app.successMsg=data.data.msg;
			}else{
				app.errorMsg=data.data.msg;
			}
		});
	};

		this.UnbanUser = function(banData){
		
		
		$http.put('/users/admindeban', this.banData).then(function(data){
			console.log(data.data.success);
			console.log(data.data.msg);
			if(data.data.success){
				app.successMsg=data.data.msg;
			}else{
				app.errorMsg=data.data.msg;
			}
		});
	};

});


