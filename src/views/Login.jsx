const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <form className="login-form glass">
        <h3>Вход</h3>
        <input required className="input glass" name="email" type="text" placeholder="E-mail" id="username" />
        <input required className="input glass" name="password" type="password" placeholder="Password" id="password" />
        <button className="form_submit button" type="submit">Войти</button>
      </form>
    </Layout>
  );
};
