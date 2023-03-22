const router = require('express').Router();
const renderTemplate = require('../renderTemplate');

const Home = require('../views/Home');
const Registration = require('../views/Registration');
const Login = require('../views/Login');

router.get('/', (req, res) => {
  const { user } = req.session;
  renderTemplate(Home, { user }, res);
});

router.get('/login', (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get('/registration', (req, res) => {
  renderTemplate(Registration, {}, res);
});

router.get('/logout', (req, res) => {
  if (req.session.user) {
    req.session.destroy('Cookie');
    res.redirect('/');
  }
});

module.exports = router;
