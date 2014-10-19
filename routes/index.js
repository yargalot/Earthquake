var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/dashboard', function(req, res) {
  res.render('dashboard.jade', { title: 'Express' });
});


/* GET home page. */
router.get('/search', function(req, res) {
  res.render('search.jade', { title: 'Express' });
});


module.exports = router;
