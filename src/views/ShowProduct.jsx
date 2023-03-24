const React = require('react');
const Layout = require('./Layout');

module.exports = function Product(props) {
  const { product, favorites } = props;
  console.log('=====!=!=!=====');
  return (
    <Layout {...props}>
      <div className="container glass">
        <section className="product-info">
          <div className="product-img-container">
            {product.images?.length <= 1 ? (
              <div className="img-wrapper">
                <img src={`/.${product.images?.[0]}`} alt="product-photo" />
              </div>
            ) : (
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {product.images?.map((img) => (
                    <div className="swiper-slide">
                      <div className="slide-img-wrapper">
                        <img src={`/.${img}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
                <div className="swiper-pagination" />
              </div>
            )}
          </div>
          <div className="product-main">
            <h1 className="product-title">{product.productName}</h1>
            <p className="product-price">{`${product.price} руб.`}</p>
            <div className="select">
              <button className="button button-select" type="button" id="add-to-favourites-btn">В избранное</button>
              <div className="cart-btn-wrapper">
                <div className="cart-controls">
                  <button className="btn-less" type="button" disabled="true">-</button>
                  <span className="quantity-display">1</span>
                  <button className="btn-more" type="button">+</button>
                </div>
                <button className="button button-select" id="add-to-cart-btn" type="button">В корзину</button>
              </div>
            </div>
          </div>
        </section>
        <section className="similar-products" />
        <section className="product-description">
          <p className="product-full-description">{product.description}</p>
          <table>
            {product.properties?.map((el) => (
              <tr>
                <td>{el[0]}</td>
                <td>{el[1]}</td>
              </tr>
            ))}
          </table>
        </section>
      </div>
      <script defer src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" />
      <script defer src="../js/swiper.js" />

    </Layout>
  );
};
