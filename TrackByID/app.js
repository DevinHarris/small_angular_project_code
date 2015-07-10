angular.module('notesApp', [])
	.controller('MainCtrl', [function(){
		var self = this;

		var notes = [
			{
				id: 1,
				label: 'Roman Reigns',
				done: false,
				someRandom: 3124
			},

			{
				id: 2, 
				label: 'Dean Ambrose',
				done: false
			},

			{
				id: 3,
				label: 'Seth Rollins',
				done: true
			}
		];

		self.notes1 = angular.copy(notes);
		self.notes2 = angular.copy(notes);

		self.changeNotes = function(){
			
			notes = [
				{
					id: 1,
					label: 'Changed Note',
					done: false,
					someRandom: 4242
				},

				{
					id: 2,
					label: 'Second Note',
					done: false
				},

				{
					id: 3,
					label: 'Third Note',
					done: true
				}
			];

			self.notes1 = angular.copy(notes);
			self.notes2 = angular.copy(notes);
		};
	}]);