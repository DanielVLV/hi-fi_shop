const React = require('react');

// function checkUsername(username) {
//   const regex = /^[a-zA-Zа-яА-Я]+$/;
//   if (regex.test(username)) {
//     return true;
//   }
//   return false;
// }

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/nav_footer.css" />
        <link rel="stylesheet" href="/css/product-page.css" />
        <link rel="stylesheet" href="/css/form.css" />
        <link rel="stylesheet" href="/css/index.css" />
        <link rel="stylesheet" href="/css/profile_accordion.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" />
        <script defer src="../js/swiper.js" />
        <script defer src="../../js/index.js" />
        <script defer src="../../js/authorization.js" />
        <script defer src="../../js/profile.js" />

        <script defer src="../../js/product.js" />
        <title />
      </head>
      <body>
        <header className="header">
          <div className="container">
            <nav className="navbar">
              <a id="logo" className="navbar-item" href="/">
                Главная
              </a>
              <div className="navbar-menu">
                <a className="navbar-item" id="cart-btn" href="/cart">Корзина</a>
                {user ? (
                  <>
                    {/* <a className="navbar-item" href="/orders">Orders</a> */}
                    <a className="navbar-item log-out" href="#link">Выйти</a>
                    <a className="navbar-item" id="user_name" href="/profile">
                      {user?.username}
                    </a>
                  </>
                ) : (
                  <>
                    <a className="navbar-item" href="/login">
                      {' '}
                      Войти
                    </a>
                    <a className="navbar-item" href="/registration">
                      Зарегистрироваться
                    </a>
                  </>
                )}
              </div>
            </nav>
          </div>
        </header>
        <main className="main">{children}</main>
        <footer className="footer onlyFooter">
          © 2023 "Я у мамы программист". Все права защищены.
        </footer>
      </body>
    </html>
  );
};
