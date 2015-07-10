angular.module('notesApp',[])
	.controller('MainCtrl', [function(){
		var self = this;

		self.notes = [
			{label: 'WWE Champion: ', done: false, assignee: 'Roman Reigns'},
			{label: 'Money In The Bank: ', done: true, assignee: 'Seth Rollins'},
			{label: 'IC Champ: ', done: false, assignee: 'Dean Ambrose'},
			{label: 'Best In The World: ', done: true, assignee: 'CM Punk'},
			{label: 'Awesome', done: true, assignee: null}

		];

		self.getNoteClass = function(status) {
			return {
				done: status,
				pending: !status
			};
		};

	}]);