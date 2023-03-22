const React = require('react');

module.exports = function ProductCard({ el }) {
  return (
    <>
      {el ? (
        <>
          <img src={el?.imagesUrls} alt="images" />
          <div>{el?.productName}</div>
          <div>{el?.price}</div>
          <button type="submit">buy</button>
        </>
      ) : (null)}
    </>
  );
};
