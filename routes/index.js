var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me' });
});

module.exports = router;
