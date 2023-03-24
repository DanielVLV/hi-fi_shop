const React = require('react');
const Layout = require('./Layout');

module.exports = function ProfileEditingPage({ userData }) {
  console.log('view', userData);
  return (
    <Layout user={userData}>
      <link rel="stylesheet" href="../../css/formReg.css" />
      <form className="form" name="editProfileForm">
        <h3>Edit your profile</h3>
        <input className="input" type="text" name="username" value={userData.username} placeholder="new username" id="username" />
        <input className="input" type="email" name="email" value={userData.email} placeholder="new email" id="email" />
        <input className="input" type="password" name="password" placeholder="new password" id="password" />
        <input className="input" type="tel" name="phone" value={userData.phone} placeholder="Phone number" id="phone_number" />
        <input className="input" type="text" name="usersetup" placeholder="tell us about your current electronics setup" value={userData.usersetup} id="user_setup" />
        <button className="registration_submit" type="submit">Submit</button>
      </form>
    </Layout>
  );
};
