var config = require('./config'),
	express = config.express,
	app = express(),
	path = config.path,
	api = config.api,
	Bourne = require('bourne'),
	db = new Bourne('data.json');


app
	.use(express.static('./public'))
	.use('/api', api)
	.get('*', function(req, res) {
		res.sendFile(path.join(__dirname + '/public/main.html'));
	});

app.listen(config.port);

console.info('App running on', config.port);