const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div>
        <input id="firstName" type="text" placeholder="firstName" name="firstName" style={{ color: 'black' }} />
        <input id="email" type="email" placeholder="Email" name="email" style={{ color: 'black' }} />
        <input id="password" type="password" placeholder="Password" name="pasword" style={{ color: 'black' }} />
        <button id="registration" type="submit" style={{ color: 'black' }}>Push Me</button>
      </div>
    </Layout>
  );
};
