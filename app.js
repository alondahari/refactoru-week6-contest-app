var express = require('express')
var bodyParser = require('body-parser')
var indexController = require('./controllers/index.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/entry-form', indexController.entry);
app.get('/show-submissions', indexController.showSubmissions);
app.post('/formsubmit', indexController.submitVideo);
app.post('/submit-vote', indexController.submitVote);

var server = app.listen(6843, function() {
	console.log('Express server listening on port ' + server.address().port);
});
