angular.module('notesApp', [])
	.controller('MainCtrl', [function(){
		var self = this;

		self.notes = [
			{id: 1, label: 'Roman Reigns', done: false},
			{id: 2, label: 'Dean Ambrose', done: false},
			{id: 3, label: 'Dolph Ziggler', done: true},
			{id: 4, label: 'Daniel Bryan', done: false}
		];
	}]);