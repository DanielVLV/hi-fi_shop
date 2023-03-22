const React = require('react');

const Navbar = require('./Navbar');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/nav_bar.css" />
        {/* <script defer src="" /> */}
        <title />
      </head>
      <body>
        <header>
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
                    <a className="navbar-item log-out" href="/logout">
                      log out
                    </a>
                  </>
                ) : (
                  <>
                    <a className="navbar-item" href="/login">
                      sign in
                    </a>
                    <a className="navbar-item" href="/login">
                      sign in
                    </a>
                    <a className="navbar-item" href="/registration">
                      sign up
                    </a>
                  </>
                )}
              </div>
              <a className="navbar-item" href="#link">
                user
              </a>
            </nav>
          </header>
        </header>
        <div>{children}</div>
        <footer>footer</footer> 
      </body>
    </html>
  );
};
