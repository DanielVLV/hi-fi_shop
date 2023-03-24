const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/reg', async (req, res) => {
  try {
    const sikret = await bcrypt.hash(req.body.password, 10);
    await User.create(
      {
        username: req.body.name,
        email: req.body.email,
        password: sikret,
        phone: req.body.phone,
      },
      {
        returning: true,
        plain: true,
      },
    );
    res.sendStatus(200);
  } catch (error) {
    res
      .status(401)
      .send({ error: 'Sorry, this email address has already been taken' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) res.sendStatus(401);
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (passwordIsValid) {
      req.session.user = user;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy((e) => {
      if (e) {
        return;
      }
      res.clearCookie('Cookie');
      res.json({ message: 'logout', loggedout: true });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
