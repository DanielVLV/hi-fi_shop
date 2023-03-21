const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div>
        <input type="email" placeholder="Email" style={{ color: 'black' }} />
        <input type="password" placeholder="Password" style={{ color: 'black' }} />
        <button type="submit" style={{ color: 'black' }}>Push Me</button>
      </div>
    </Layout>
  );
};
