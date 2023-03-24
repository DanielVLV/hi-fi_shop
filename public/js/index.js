document.addEventListener('click', async (evt) => {
  if (evt.target.classList.contains('add-to-cart-btn')) {
    evt.preventDefault();

    const buyBtn = evt.target;
    const { productId } = buyBtn.dataset;
    const { price } = buyBtn.dataset;
    const parent = buyBtn.closest('.cart-btn-wrapper');
    const quantityElem = parent.querySelector('.quantity-display');
    const quantity = Number(quantityElem.innerText);

    const response = await fetch('/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId, price, quantity,
      }),
    });

    // const responseJson = await response.json();
    // sumElem.innerText = ` ${responseJson.cartValue}`;
    // window.location.reload();
  }

  if (evt.target.classList.contains('btn-less')) {
    const parent = evt.target.closest('.cart-btn-wrapper');

    const quantityElem = parent.querySelector('.quantity-display');
    const quantity = Number(quantityElem.innerText);
    if (quantity > 1) {
      quantityElem.innerText = quantity - 1;
    }
  }

  if (evt.target.classList.contains('btn-more')) {
    const parent = evt.target.closest('.cart-btn-wrapper');

    const quantityElem = parent.querySelector('.quantity-display');
    const quantity = Number(quantityElem.innerText);
    quantityElem.innerText = quantity + 1;
  }

  if (evt.target.id === 'clear-cart-btn') {
    evt.preventDefault();
    const response = await fetch('/cart', {
      method: 'DELETE',
    });
    const responseJson = await response.json();

    if (!responseJson.isDeleteSuccessfull) {
      alert(responseJson.errorMessage);
      return;
    }

    window.location.href = '/cart';
  }

  if (evt.target.id === 'order-btn') {
    evt.preventDefault();

    const response = await fetch('/orders', {
      method: 'POST',
    });

    const responseJson = await response.json();

    if (!responseJson.isSuccessfull) {
      alert(responseJson.errorMessage);
      return;
    }
    window.location.href = '/cart';
  }
});
