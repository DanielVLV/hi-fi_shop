const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../renderTemplate');
const Login = require('../views/Login');

// const { User } = require('../../db/models');

router.get('/login', async (req, res) => {
  renderTemplate(Login, null, res);
});

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const checkUser = await User.findOne({ where: { email }, raw: true });
//   const id = checkUser?.id;
//   const userName = checkUser?.firstName;

//   if (checkUser) {
//     const checkPass = await bcrypt.compare(password, checkUser.password);
//     if (!checkPass) {
//       const message = 'Неверный пароль';
//       renderTemplate(Login, { message }, res);
//     }
//     if (checkPass) {
//       req.session.user = { id, userName, email };
//       res.redirect('/');
//     }
//     if (!checkUser) {
//       const message = 'Пользователь не найден';
//       renderTemplate(Login, { message }, res);
//     }
//   }
// });

module.exports = router;
