const registrationForm = document.querySelector('.registration-form');
const loginForm = document.querySelector('.login-form');
const logOutButton = document.querySelector('.log-out');

registrationForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const response = await fetch('/auth/reg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    window.location.href = '/login';
  } else if (response.status === 401) {
    const errTxt = document.createElement('p');
    errTxt.innerText = 'Sorry, this email address has already been taken';
    registrationForm.appendChild(errTxt);
    setTimeout(() => {
      errTxt.remove();
    }, 4000);
  }
});

loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('=======');
  const response = await fetch(`/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: e.target.email.value,
      password: e.target.password.value,
    }),
  });

  if (response.status === 200) {
    window.location.href = '/';
  } else {
    const errTxt = document.createElement('p');
    errTxt.innerText = 'Invalid email or password';
    loginForm.appendChild(errTxt);
    setTimeout(() => {
      errTxt.remove();
    }, 4000);
  }
});

logOutButton?.addEventListener('click', async (e) => {
  e.preventDefault();

  const response = await fetch(`/auth/logout`, {
    method: 'GET',
  });
  const json = await response.json();
  if (json.loggedout) {
    window.location.href = '/';
  }
});
