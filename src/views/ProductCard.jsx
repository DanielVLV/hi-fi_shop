const React = require('react');

module.exports = function ProductCard({ el }) {
  return (
    <>
      {el && (
        <div className="product_item">
          <a href="">
            <img src={el?.imagesUrls} alt="images" />
            <div className="prodectName">{el?.productName}</div>
            <div className="price">{el?.price}</div>
            <button type="submit">buy</button>
          </a>
        </div>
      )}
    </>
  );
};
