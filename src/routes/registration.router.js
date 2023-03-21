const router = require('express').Router();
const bcrypt = require('bcrypt');

const Registration = require('../views/Registration');

const renderTemplate = require('../renderTemplate');

const { User } = require('../../db/models');

router.get('/registration', async (req, res) => {
  renderTemplate(Registration, null, res);
});

router.post('/registration', async (req, res) => {
  const {
    firstName, email, password,
  } = req.body;
  const checkEmail = await User.findOne({ where: { email } });
  if (!checkEmail) {
    const hash = await bcrypt.hash(password, 10);
    await User.create({
      firstName, email, password: hash,
    });
  }
  if (checkEmail) {
    const message = 'Пользователь уже зарегестрирован';
    res.json(message);
  }
});

module.exports = router;
