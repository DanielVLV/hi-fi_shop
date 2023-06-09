const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form className="registration-form glass">
        <h3 className="form_h3">Регистрация</h3>
        <input className="input" required type="text" name="name" placeholder="Name" id="username" />
        <input className="input" required type="email" name="email" placeholder="Email" id="email" />
        <input className="input" required type="password" name="password" placeholder="Password" id="password" />
        <input className="input" required type="tel" name="phone" placeholder="Phone number" id="phone_number" />
        <button className="form_submit button" type="submit">Зарегистрироваться</button>
      </form>
    </Layout>
  );
};
