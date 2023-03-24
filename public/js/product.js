const productMainContainer = document.querySelector('.product-main');

const addToFavoritestBtn = document.getElementById('add-to-favourites-btn');
const removeToFavoritesBtn = document.getElementById('added-to-favorite');

if (addToFavoritestBtn) {
  addToFavoritestBtn.addEventListener('click', async (event) => {
    const productId = addToFavoritestBtn.closest('div').getAttribute('id');
    const addedToFavorite = await fetch('/products/favoriteproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });
    const result = await addedToFavorite.json();
    if (result.msg !== 'error') {
      const addedToFavoriteBtn = document.createElement('button');
      addedToFavoriteBtn.setAttribute('type', 'button');
      addedToFavoriteBtn.setAttribute('id', 'added-to-favorite');
      addedToFavoriteBtn.textContent = 'В избранном';
      addToFavoritestBtn.closest('div').insertBefore(addedToFavoriteBtn, addToFavoritestBtn);
      addToFavoritestBtn.remove();
    }
  });
}

if (removeToFavoritesBtn) {
  removeToFavoritesBtn.addEventListener('click', async (event) => {
    const productId = removeToFavoritesBtn.closest('div').getAttribute('id');
    const removedFromFavorite = await fetch('/products/favoriteproduct', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });
    const result = await removedFromFavorite.json();
    if (result.msg !== 'error') {
      const addToFavoriteBtn = document.createElement('button');
      addToFavoriteBtn.setAttribute('type', 'button');
      addToFavoriteBtn.setAttribute('id', 'add-to-favourites-btn');
      addToFavoriteBtn.textContent = 'Добавить в избранное';
      removeToFavoritesBtn.closest('div').insertBefore(addToFavoriteBtn, removeToFavoritesBtn);
      removeToFavoritesBtn.remove();
    }
  });
}

// mutationobserver
const addToFavoriteObserver = new MutationObserver((mutation) => {
  const addToFavoritestBtn = document.getElementById('add-to-favourites-btn');
  const removeToFavoritesBtn = document.getElementById('added-to-favorite');
  console.log('observer start');
  if (addToFavoritestBtn) {
    addToFavoritestBtn.addEventListener('click', async (event) => {
      const productId = addToFavoritestBtn.closest('div').getAttribute('id');
      const addedToFavorite = await fetch('/products/favoriteproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });
      const result = await addedToFavorite.json();
      if (result.msg !== 'error') {
        const addedToFavoriteBtn = document.createElement('button');
        addedToFavoriteBtn.setAttribute('type', 'button');
        addedToFavoriteBtn.setAttribute('id', 'added-to-favorite');
        addedToFavoriteBtn.textContent = 'В избранном';
        addToFavoritestBtn.closest('div').insertBefore(addedToFavoriteBtn, addToFavoritestBtn);
        addToFavoritestBtn.remove();
      }
    });
  }

  if (removeToFavoritesBtn) {
    removeToFavoritesBtn.addEventListener('click', async (event) => {
      const productId = removeToFavoritesBtn.closest('div').getAttribute('id');
      const removedFromFavorite = await fetch('/products/favoriteproduct', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });
      const result = await removedFromFavorite.json();
      if (result.msg !== 'error') {
        const addToFavoriteBtn = document.createElement('button');
        addToFavoriteBtn.setAttribute('type', 'button');
        addToFavoriteBtn.setAttribute('id', 'add-to-favourites-btn');
        addToFavoriteBtn.textContent = 'Добавить в избранное';
        removeToFavoritesBtn.closest('div').insertBefore(addToFavoriteBtn, removeToFavoritesBtn);
        removeToFavoritesBtn.remove();
      }
    });
  }
});

if (productMainContainer) { addToFavoriteObserver.observe(productMainContainer, { characterData: true, childList: true }); }
