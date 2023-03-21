const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <nav>
      {user ? (
        <>
          <li>{`Hello ${user}`}</li>
          <li><a href="/">home</a></li>
          <li><a href="/logout">Logout</a></li>
        </>
      )
        : (
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/registration">Registration</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        )}

    </nav>
  );
};
