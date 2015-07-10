angular.module('notesApp',[])
	.controller('MainCtrl', [function(){
		var self = this;
		self.notes = [
			{id: 1, label: 'Roman Reigns', done: false},
			{id: 2, label: 'Dean Ambrouse', done: false},
			{id: 3, label: 'Seth Rollins', done: false},
			{id: 4, label: 'Dolph Ziggler', done: true},
			{id: 5, label: 'Daniel Bryan', done: false}
		];

		self.winners = ['John Cena', 'Triple H', 'Roman Reigns'];
	}]);