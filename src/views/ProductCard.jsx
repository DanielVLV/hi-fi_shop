const React = require('react');

module.exports = function ProductCard({ product }) {
  return (
    <>
      {product ? (
        <>
          <img src={product?.imagesUrls} alt="images" />
          <div>{product?.productName}</div>
          <div>{product?.price}</div>
          <button type="submit">buy</button>
        </>
      ) : (null)}
    </>
  );
};
