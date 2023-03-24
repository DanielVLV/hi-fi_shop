const React = require('react');

const Layout = require('./Layout');

const ProductCard = require('./ProductCard');
const SwiperHomePage = require('./SwiperHomePage');

module.exports = function Home(props) {
  const { user, products, categories } = props;
  return (
    <Layout {...props}>
      <div className="container">
        <section className="main-slider-section">
          <SwiperHomePage />
        </section>
        <section className="products-section">
          <div className="filters">
            <h4>Фильтры</h4>
          </div>
          <div className="products-list">
            {products.length ? (
              products.map((el) => (
                <ProductCard product={el} />
              ))
            ) : (
              <p>Пусто...</p>
            )}
          </div>
        </section>

      </div>
    </Layout>
  );
};
