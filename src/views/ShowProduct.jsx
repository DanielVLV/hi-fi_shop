const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');

module.exports = function Product(props) {
  const {
    product, favoriteProduct, similar, user,
  } = props;
  return (
    <Layout {...props}>
      <div className="container glass">
        <section className="product-info">
          <div className="product-img-container">
            {product.images?.length <= 1 ? (
              <div className="img-container">
                <div className="img-wrapper">
                  <img src={`/.${product.images?.[0]}`} alt="product-photo" />
                </div>
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
            {user ? (favoriteProduct?.id ? (<button type="button" id="added-to-favorite">В избранном</button>
            ) : (<button type="button" id="add-to-favourites-btn">Добавить в избранное</button>)
            ) : (<span />)}
            {product.isAvailable ? (
              <div className="cart-btn-wrapper">
                <div className="cart-controls">
                  {user ? (
                    <>
                      {' '}
                      <button className="btn-less" type="button">-</button>

                      <span className="quantity-display">1</span>

                      <button className="btn-more" type="button">+</button>
                      <button className="add-to-cart-btn" id="add-to-cart-btn" type="button" data-product-id={`${product.id}`} data-price={`${product.price}`}>В корзину</button>
                    </>
                  ) : (<span />)}
                </div>
              </div>
            ) : (
              <p>Нет в наличии</p>
            )}
          </div>
        </section>
        <section className="similar-products">
          {similar?.length && (
            <>
              <h2>Похожие товары</h2>
              <div className="similar-list">
                {similar?.map((el) => (
                  <div className="product_item glass">
                    <a href={`/products/${el.id}`}>
                      <div className="img-container">
                        <div className="img-wrapper">
                          <img src={`/.${el.images?.[0]}`} alt="product-photo" />
                        </div>
                      </div>
                      <p className="product-title">{el.productName}</p>
                      <p className="product-price">{`${el.price} руб.`}</p>
                      {el.isAvailable ? (
                        <div className="cart-btn-wrapper">
                          <div className="cart-controls">
                            <button className="btn-less" type="button">-</button>
                            <span className="quantity-display">1</span>
                            <button className="btn-more" type="button">+</button>
                          </div>
                          <button className="add-to-cart-btn" id="add-to-cart-btn" type="button" data-product-id={`${el.id}`} data-price={`${el.price}`}>В корзину</button>
                        </div>
                      ) : (
                        <p>Нет в наличии</p>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
        <section className="product-description">
          <h2>Описание товара:</h2>
          <p className="product-full-description">{product.description}</p>
          <h2>Характеристики товара:</h2>
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
