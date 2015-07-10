angular.module('notesApp', [])
	.controller('MainCtrl', [function(){
		var self = this;
		self.message = "Hello";
		this.changeMessage = function(){
			self.message = "Goodbye";
		};
	}]);
