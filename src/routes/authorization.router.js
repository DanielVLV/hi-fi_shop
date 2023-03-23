const router = require('express').Router();
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');
const session = require('express-session');
const FeleStore = require('session-file-store')(session);

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
});

router.get('/logout', (req, res) => {
  req.session.destroy((e) => {
    if (e) {
      return;
    }
    res.clearCookie('Cookie');
    res.json({ message: 'logout', loggedout: true });
  });
});

module.exports = router;
