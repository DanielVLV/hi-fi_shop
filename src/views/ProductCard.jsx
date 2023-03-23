/* eslint-disable react/jsx-no-useless-fragment */
const React = require('react');

module.exports = function ProductCard({ product }) {
  const arrayImgUrl = product?.imagesUrls.split(', ');
  return (
    <>
      {product && (
        <div className="product_item glass">
          <a href="">
            { arrayImgUrl?.length > 1 ? (arrayImgUrl.map((el, i) => (
              <img src={arrayImgUrl[i]} alt="images" />
            ))) : (<img src={arrayImgUrl[0]} alt="images" />) }
            {' '}
            <div className="prodectName">{product?.productName}</div>
            <div className="price">{product?.price}</div>
            <button className="button" type="submit">buy</button>
          </a>
        </div>
      )}
    </>
  );
};
