const React = require('react');
const Layout = require('./Layout');

module.exports = function ProfileEditingPage({ userData }) {
  console.log('view', userData);
  return (
    <Layout>
      <link rel="stylesheet" href="../../css/formReg.css" />
      <form className="form" name="editProfileForm">
        <h3>Edit your profile</h3>
        <input className="input" required type="text" name="username" value={userData.username} placeholder="new username" id="username" />
        <input className="input" required type="email" name="email" placeholder="new email" id="email" />
        <input className="input" required type="password" name="password" placeholder="new password" id="password" />
        <input className="input" required type="tel" name="phone" value={userData.phone} placeholder="Phone number" id="phone_number" />
        <button className="registration_submit" type="submit">Submit</button>
      </form>
    </Layout>
  );
};
