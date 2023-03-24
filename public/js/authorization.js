// Получаем элементы форм и кнопки выхода из системы
const registrationForm = document.querySelector('.registration-form');
const loginForm = document.querySelector('.login-form');
const logOutButton = document.querySelector('.log-out');
// Создание элемента с текстом ошибки
function createErrorMessage(text) {
  const errTxt = document.createElement('p');
  errTxt.innerText = text;
  errTxt.style.color = 'red';
  return errTxt;
}

// Удаление элемента с текстом ошибки через 4 секунды
function removeErrorMessage(element) {
  setTimeout(() => {
    element.remove();
  }, 4000);
}

// Обработчик отправки формы регистрации
registrationForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
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
      const errTxt = createErrorMessage('Извините, этот адрес электронной почты уже занят');
      registrationForm.appendChild(errTxt);
      removeErrorMessage(errTxt);
    }
  } catch (error) {
    console.log(error);
  }
});

// Обработчик отправки формы входа в систему
loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      window.location.href = '/';
    } else {
      const errTxt = createErrorMessage('Неправильный адрес электронной почты или пароль');
      loginForm.appendChild(errTxt);
      removeErrorMessage(errTxt);
    }
  } catch (error) {
    console.log(error);
  }
});

// Обработчик кнопки выхода из системы
logOutButton?.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/auth/logout', {
      method: 'GET',
    });
    const json = await response.json();
    if (json.loggedout) {
      window.location.href = '/';
    }
  } catch (error) {
    console.log(error);
  }
});
