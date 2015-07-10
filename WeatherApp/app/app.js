var app = angular.module('WeatherApp', []);

// Creating a controller, passing our 'weatherService' factory as a dependecy.

app.controller('MainCtrl', ['weatherService', '$http', function(weatherService, $http) {
	var vm = this;
	// Creating a function to get the weather 
	function fetchWeather(zip) {
		// Getting our factory and using it's getWeather object/function/promise
		weatherService.getWeather(zip).then(function(data){
			vm.place = data;

			//vm.change = 'img/' + vm.place.item.condition.code + '.jpg';

			var img = 'img/' + vm.place.item.condition.code + '.jpg';

			/*var req = {
				method: "GET",
				url: img,
				headers: {
					"Content-Type": "image/jpeg",
				}
			};

			$http(req).success(function(){
					document.body.style.backgroundImage = 'url(img)';
				}).error(function(err){
					console.log(error);
				}); */

			/* vm.chngBg = function() {
				var img = 'img/' + vm.place.item.condition.code + '.jpg';
				document.body.style.backgroundImage = 'url(img)';
			}; */

		});

	}

	// Calling the function with a zip 
	fetchWeather('90013');

	// Creating a function the find the weather from our index.html

	vm.findWeather = function(zip) {
		vm.place = '';
		fetchWeather(zip);
	};


}]);

// defined a factory help function? 

app.factory('weatherService', ['$http', '$q', function($http, $q) {

	var vm = this;

	function getWeather(zip) {

		// Creating a defer()

		var deferred = $q.defer();

		// storing the URL in a varible
		var weatherURL = 'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=';
			
		// making a HTTP get() request to the YAHOO! Weather API
		$http.get(weatherURL)
			.success(function(data){
				// Using defer's method resolve to get the json 
				deferred.resolve(data.query.results.channel);
			}).error(function(err){
				// Incase of an error, we'll eject the call
				deferred.reject(err);
				console.log(err);
			});

		// Return a promise from the defer	
		return deferred.promise;
	}

	// Returning an object
	return {
		getWeather: getWeather
	};
}]);