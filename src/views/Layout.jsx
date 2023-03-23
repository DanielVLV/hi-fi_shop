const React = require('react');

function checkUsername(username) {
  const regex = /^[a-zA-Zа-яА-Я]+$/;
  if (regex.test(username)) {
    return true;
  } else {
    return false;
  }
}

module.exports = function Layout({ children, user }) {
  console.log(user);
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/nav_bar.css" />
        <script defer src="../../js/authorization.js" />
        <script defer src="../../js/profile.js" />
        <title />
      </head>
      <body>
        <header>
          <nav className="navbar">
            <a id="logo" className="navbar-item" href="/">
              home
            </a>
            <div className="navbar-menu">
              {user ? (
                <>
                  <a className="navbar-item" href="/work">
                    card
                  </a>
                  <a className="navbar-item">log out</a>
                  <a className="navbar-item" href="#link">
                    {user?.username}
                  </a>
                </>
              ) : (
                <>
                  <a className="navbar-item" href="/login">
                    {' '}
                    sign in
                  </a>
                  <a className="navbar-item" href="/registration">
                    sign up
                  </a>
                </>
              )}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
};
