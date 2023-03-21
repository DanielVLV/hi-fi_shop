const React = require('react');

const Navbar = require('./Navbar');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="" />
        <meta charSet="UTF-8" />
        <script defer src="" />
        <title />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <div>
          {children}
        </div>
        <footer />
      </body>
    </html>
  );
};
