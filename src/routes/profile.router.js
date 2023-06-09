const bcrypt = require('bcrypt');
const router = require('express').Router();
const isAuth = require('../middleware/isAuth');
const renderTemplate = require('../renderTemplate');
const Profile = require('../views/Profile');
const ProfileEditingPage = require('../views/ProfileEditingPage');

const { Product } = require('../../db/models');
const { User } = require('../../db/models');
const { Order } = require('../../db/models');

router.get('/profile', isAuth, async (req, res) => {
  const userId = req.session?.user?.id;
  const user = await User.findOne({ where: { id: userId } });
  console.log('rout ===>', user);
  const favoriteProducts2 = await Product.findAll({
    include: {
      model: User,
      where: { id: userId },
    },
  });
  const favoriteProducts1 = favoriteProducts2.map((el) => el.get());
  const favoriteProducts = favoriteProducts1.map((el) => {
    el.images = el.imagesUrls.split(', ');
    return el;
  });

  const pastOrders = await Order.findAll({
    where: {
      userId: req.session.user.id,
    },
    attributes: [
      'id',
      'createdAt',
    ],
    include: [
      {
        model: Product,
        through: {
          attributes: ['quantity'],
        },
      },
    ],
    group: ['Order.id', 'Products.id', 'Products->ProductsOrders.productId', 'Products->ProductsOrders.orderId', 'Products->ProductsOrders.quantity'],
  });
  const orders = pastOrders.map((el) => el.get({ plain: true }));
  // console.log('orders--->', orders);
  renderTemplate(Profile, { favoriteProducts, user, orders }, res);
});

router.get('/editingprofile', isAuth, async (req, res) => {
  const userId = req.session?.user?.id;
  const userData = await User.findOne({
    where: {
      id: userId,
    },
  });
  renderTemplate(ProfileEditingPage, { userData }, res);
});

router.post('/api/editingprofile', isAuth, async (req, res) => {
  const userId = req.session?.user?.id;
  // console.log(req.body);
  let {
    username, email, phone, usersetup,
  } = req.body;
  try {
    const userCurrentData = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (username.lengh <= 3) username = userCurrentData.username;
    if (!email.indexOf('@')) email = userCurrentData.email;
    if (!req.body.password.length < 1) {
      const password = await bcrypt.hash(req.body.password, 10);
      await User.update({
        password,
      }, { where: { id: userId } });
    }
    const updateduser = await User.update({
      username, email, phone, usersetup,
    }, { where: { id: userId } });
    res.redirect('/profile');
  } catch (error) {
    console.log(error);
    res.status(401)
      .send({ error: 'Sorry, this email address has already been taken' });
  }
});

module.exports = router;
