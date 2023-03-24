const router = require('express').Router();
const renderTemplate = require('../renderTemplate');

const { Product } = require('../../db/models');
const Home = require('../views/Home');
const Registration = require('../views/Registration');
const Login = require('../views/Login');

router.get('/', async (req, res) => {
  try {
    const productsData = await Product.findAll();
    const productsData1 = productsData.map((el) => el.get());
    const products = productsData1.map((el) => {
      el.images = el.imagesUrls.split(', ');
      return el;
    });

    res.render(Home, { products });
  } catch (error) {
    console.log(error);
  }
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
