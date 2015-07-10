// Defining a module, with no dependencies

angular.module('notesApp', []);

/* angular.module('notesApp', [])
	.controller('MainCtrl', [function(){
		// Controller-specific code goes here
		var awesome = "This is awesome.";
		var isIt = "It is isn't it?!?";

		console.log(awesome);
		console.log(isIt);
	}]);
*/

// Defining a module, with dependencies.

/* angular.module('notesApp', 
	['notesApp.ui', 'thirdCompany.fuisoncharts']);
*/

// Loading an existing module.

//angule.module('notesApp');