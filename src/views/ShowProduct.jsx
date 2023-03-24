const React = require('react');
const Layout = require('./Layout');

module.exports = function Product(props) {
  const { product, favorites } = props;
  return (
    <Layout {...props}>
      <div className="container">
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
          <div className="product-main" id={product.id}>
            <h1 className="product-title">{product.productName}</h1>
            <p className="product-price">{`${product.price} руб.`}</p>
            <button type="button" id="add-to-favourites-btn">Добавить в избранное</button>
            <div className="cart-btn-wrapper">
              <div className="cart-controls">
                <button className="btn-less" type="button">-</button>
                <span className="quantity-display">1</span>
                <button className="btn-more" type="button">+</button>
              </div>
              <button className="add-to-cart-btn" id="add-to-cart-btn" type="button" data-product-id={`${product.id}`} data-price={`${product.price}`}>В корзину</button>
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
    </Layout>
  );
};
