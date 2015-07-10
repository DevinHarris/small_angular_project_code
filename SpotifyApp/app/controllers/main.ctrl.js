var app = angular.module('SpotfiyApp');

app.controller('MainCtrl', ['$http', function($http){
	var vm = this;
	$http.get('./models/test.json').success(function(data){
		vm.name = data;
	});

}]);