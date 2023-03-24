const addToFavoritestBtn = document.getElementById('add-to-favourites-btn');

if (addToFavoritestBtn) {
  addToFavoritestBtn.addEventListener('click', async (event) => {
    const productId = addToFavoritestBtn.closest('div').getAttribute('id');
    const addedToFavorite = await fetch('/favoriteproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });
  });
}
