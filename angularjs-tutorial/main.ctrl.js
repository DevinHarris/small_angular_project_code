angular.module('app')
	.controller('MainCtrl', [function(){
		var vm = this;
		vm.title = "WWE Superstars";

		vm.searchInput = '';

		vm.superstars = [
			{
				name: 'Roman Reigns',
				note: '2015 Royal Rumble Winner',
				favorite: true
			},

			{
				name: 'Dean Ambrose',
				note: 'Leader of The Shield',
				favorite: true
			},

			{
				name: 'Dolph Ziggler',
				note: 'World Champion',
				favorite: true
			},

			{
				name: 'Paige',
				note: 'Divas Champion',
				favorite: true
			},

			{
				name: 'Finn Balor',
				note: 'Awesome',
				favorite: true
			},

			{
				name: 'Daniel Bryan',
				note: 'Cool guy',
				favorite: false
			},
			
			{
				name: 'Seth Rollins',
				note: 'The Future',
				favorite: true
			}
		];

		vm.orders = [
			{
				id: 1,
				title: 'Name Ascending',
				key: 'name',
				reverse: false
			},

			{
				id: 2,
				title: 'Name Descending',
				key: 'name',
				reverse: true
			},

			{
				id: 3, 
				title: 'Notes Ascending',
				key: 'note',
				reverse: false
			},

			{
				id: 4,
				title: 'Notes Ascending',
				key: 'note',
				reverse: true
			}
		];

		vm.order = vm.orders[0];

		vm.new = {};

		vm.addSuperstar = function() {
			vm.superstars.push(vm.new);
			vm.new = {};
		};

		vm.removeSuperstar = function() {
			vm.superstars.pop(vm.new[-1]);
		};
	}]);