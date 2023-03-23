const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  console.log('Login.jsx')
  return (
    <Layout>
      <form className="login-form">
        <h3>Log In</h3>
        <input required className="input" name="email" type="text" placeholder="E-mail" id="username" />
        <input required className="input" name="password" type="password" placeholder="Password" id="password" />
        <button className="form_submit button" type="submit">Submit</button>
      </form>
    </Layout>
  );
};
