var myFirstDeferred = $q.defer();

async(myFirstDeferred.resolved, myFirstDeferred.reject);

var myFirstPromise = myFirstDeferred.promise;

myFirstPromise
	.then(function(data) {
		console.log('My first promise succeeded', data);
	}, function(error){
		console.log('My First Promise failed', error);
	});