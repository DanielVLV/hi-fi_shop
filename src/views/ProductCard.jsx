const React = require('react');

module.exports = function ProductCard({ product }) {
  const arrayImgUrl = product?.imagesUrls.split(', ');
  console.log(arrayImgUrl);
  return (
    <>
      {product && (
        <div className="product_item">
          <a href="">
            { arrayImgUrl?.length > 1 ? (arrayImgUrl.map((el, i) => (
              <img src={arrayImgUrl[i]} alt="images" />
            ))) : (<img src={arrayImgUrl[0]} alt="images" />) }
            {' '}
            <div className="prodectName">{product?.productName}</div>
            <div className="price">{product?.price}</div>
            <button type="submit">buy</button>
          </a>
        </div>
      )}
    </>
  );
};
