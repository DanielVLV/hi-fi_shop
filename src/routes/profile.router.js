const router = require('express').Router();
const renderTemplate = require('../renderTemplate');
const Profile = require('../views/Profile');

const { ProductToUser } = require('../../db/models');
const { Product } = require('../../db/models');
const { User } = require('../../db/models');

router.get('/profile', async (req, res) => {
  const userId = 1; // test
  const favoriteProducts = await Product.findAll({
    include: {
      model: User,
      where: { id: userId },
    },
  });
  console.log(favoriteProducts);
  renderTemplate(Profile, {favoriteProducts}, res);
});

module.exports = router;
