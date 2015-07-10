angular.module('notesApp',[])
	.controller('MainCtrl', [function(){
		var self = this;

		self.notes = {
			roman: {
				id: 1,
				label: 'First Note',
				done: false
			},

			Dean: {
				id: 1,
				label: 'Finished Third Note',
				done: true
			},

			dolph: {
				id: 2,
				label: 'Second Note',
				done: false
			}
		};
	}]);