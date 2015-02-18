var js = require('jsonfile');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	entry: function(req, res) {
		res.render('entry');
	},
	showSubmissions: function(req, res) {
		var submissions = js.readFile('models/submissions.js', function(err, data){
			res.render('submissions', {submissions: data});
		});
	},
	submit: function(req, res){
		indexController.addSubmission(req.body);
		res.redirect('/');
	},
	addSubmission: function(submission){
		var file = 'models/submissions.js';
		js.readFile(file, function(err, data){
			if (!err) {
				data.push(submission);
				js.writeFile(file, data);
			};
		});
	}

};

module.exports = indexController;