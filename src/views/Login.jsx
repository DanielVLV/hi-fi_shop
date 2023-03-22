const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  console.log('Login.jsx')
  return (
    <Layout>
      <link rel="stylesheet" href="../../css/formAuth.css" />
      <form className="login-form">
        <h3>Log In</h3>
        <input required className="input" name="email" type="text" placeholder="e-mail" id="username" />
        <input required className="input" name="password" type="password" placeholder="password" id="password" />
        <button className="login_submit" type="submit">Submit</button>
      </form>
    </Layout>
  );
};
