var config = {
	express: require('express'),
	path: require('path'),
	port: process.env.PORT || 8080,
	bodyParser: require('body-parser'),
	api: require('./api')
};

module.exports = config;