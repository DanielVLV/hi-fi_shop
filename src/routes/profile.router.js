const bcrypt = require('bcrypt');
const router = require('express').Router();
const renderTemplate = require('../renderTemplate');
const Profile = require('../views/Profile');
const ProfileEditingPage = require('../views/ProfileEditingPage');

const { ProductToUser } = require('../../db/models');
const { Product } = require('../../db/models');
const { User } = require('../../db/models');

router.get('/profile', async (req, res) => {
  const userId = req.session?.user?.id;
  const favoriteProducts = await Product.findAll({
    include: {
      model: User,
      where: { id: userId },
    },
  });
  renderTemplate(Profile, { favoriteProducts }, res);
});

router.get('/editingprofile', async (req, res) => {
  const userId = req.session?.user?.id;
  const userData = await User.findOne({
    where: {
      id: userId,
    },
  });
  renderTemplate(ProfileEditingPage, { userData }, res);
});

router.post('/api/editingprofile', async (req, res) => {
  const userId = req.session?.user?.id;
  console.log(req.body);
  const { username, email, phone } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);
  try {
    const updateduser = await User.update({
      username, email, phone, password,
    }, { where: { id: userId } });
    res.sendStatus(200);
  } catch (error) {
    res.status(401)
      .send({ error: 'Sorry, this email address has already been taken' });
  }
});

module.exports = router;
