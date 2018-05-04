var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login',
  passport.authenticate('local',
    { session: true,
      successRedirect: '/',
      failureRedirect: '/login' }
  )
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/loggedin', function(req, res) {
  var dane = {
    user: req.user,
    passport: req.session.passport,
    log_info: res.locals.logInfo
  };
  res.render('loggedin', dane);
});

module.exports = router;
