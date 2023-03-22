const router = require('express').Router();
const renderTemplate = require('../renderTemplate');
const Home = require('../views/Home');
const { Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const allProductCard = await Product.findAll({ raw: true });
    renderTemplate(Home, { allProductCard }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
