function isAuth(req, res, next) {
  const user = req.session?.user?.username;
  if (user) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = isAuth;
