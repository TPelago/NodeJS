var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('hello', { title: 'Hello World' });

});

router.get('/:name', function(req, res, next) {
	var name = req.params.name;
	var img_link;

	console.log(name[0]);
	console.log(name[0].toLowerCase());
	old = name[0];

	switch (name[0]) {
	    case name[0].toLowerCase():
		img_link = '/images/caniche.jpg';
		break;
	    case name[0].toUpperCase():
		img_link = '/images/bergerallemand.jpg';
		break ;
	}
	console.log(img_link);
	res.render('hello_name', { name: name, img_link: img_link});
    });

module.exports = router;
