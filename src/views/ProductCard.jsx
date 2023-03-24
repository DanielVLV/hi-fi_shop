/* eslint-disable react/jsx-no-useless-fragment */
const React = require('react');

module.exports = function ProductCard({ product }) {
  return (
    <div className="product_item glass">
      <a href={`/products/${product.id}`}>
        <div className="img-container">
          <div className="img-wrapper">
            <img src={`${product.images?.[0]}`} alt="product-photo" />
          </div>
        </div>
        <p className="product-title">{product.productName}</p>
        <p className="product-price">{`${product.price} руб.`}</p>
        {product.isAvailable ? (
          <div className="cart-btn-wrapper">
            <div className="cart-controls">
              <button className="btn-less" type="button">-</button>
              <span className="quantity-display">1</span>
              <button className="btn-more" type="button">+</button>
            </div>
            <button className="add-to-cart-btn" id="add-to-cart-btn" type="button" data-product-id={`${product.id}`} data-price={`${product.price}`}>В корзину</button>
          </div>
        ) : (
          <p>Нет в наличии</p>
        )}
      </a>
    </div>
  );
};
