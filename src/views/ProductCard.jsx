const React = require('react');

module.exports = function ProductCard({ product }) {
  return (
    <>
      {product && (
        <div className="product_item">
          <a href="">
            <img src={product?.imagesUrls} alt="images" />
            <div className="prodectName">{product?.productName}</div>
            <div className="price">{product?.price}</div>
            <button type="submit">buy</button>
          </a>
        </div>
      )}
    </>
  );
};
