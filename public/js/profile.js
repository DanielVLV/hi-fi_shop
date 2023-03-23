const { editProfileForm } = document.forms;

if (editProfileForm) {
  editProfileForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('privet');
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
