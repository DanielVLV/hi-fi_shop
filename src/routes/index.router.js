const router = require('express').Router();
const renderTemplate = require('../renderTemplate');
const Home = require('../views/Home');

router.get('/', async (req, res) => {
  renderTemplate(Home, null, res);
});

module.exports = router;
