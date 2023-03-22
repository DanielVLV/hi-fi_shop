const React = require('react');
const Layout = require('./Layout');

module.exports = function ProfileEditingPage({userData}) {
  return (
    <Layout>
      <link rel="stylesheet" href="../../css/formReg.css" />
      <form className="registration-form">
        <h3>Edit your profile</h3>
        <input className="input" required type="text" name="user_name" placeholder="Name" id="username" />
        <input className="input" required type="email" name="email" placeholder="Email" id="email" />
        <input className="input" required type="password" name="password" placeholder="Password" id="password" />
        <input className="input" required type="tel" name="phone_number" placeholder="Phone number" id="phone_number" />
        <button className="registration_submit" type="submit">Submit</button>
      </form>
    </Layout>
  );
};