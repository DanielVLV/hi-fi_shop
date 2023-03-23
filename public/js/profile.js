const { editProfileForm } = document.forms;
const accordion = document.querySelectorAll('.accordion');
const editSetupBtn = document.getElementById('edit_setup');

if (editProfileForm) {
  editProfileForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(editProfileForm));
    const newUserData = await fetch('/api/editingprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  });
}

if (accordion) {
  accordion.forEach((acc, index) => {
    accordion[index].addEventListener('click', () => {
      console.log('privet', index);
      accordion[index].classList.toggle('active');

      const panel = accordion[index].nextElementSibling;
      if (panel.style.display === 'table') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'table';
      }
    });
  });
}

if (editSetupBtn) {
  editSetupBtn.addEventListener('click', (event) => {
    console.log('privet');
    const userSetupContainer = editSetupBtn.closest('div');
    const userSetupValue = document.querySelector('.user_setup_p').textContent;
    const inputArea = document.createElement('input');
    const 
    inputArea.setAttribute('type', 'text');
    inputArea.setAttribute('value', userSetupValue);
    inputArea.setAttribute('class', 'usersetup_input_area');
    userSetupContainer.replaceChildren();
    userSetupContainer.appendChild(inputArea);
  });
}
