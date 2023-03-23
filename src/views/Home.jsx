const React = require('react');

const Layout = require('./Layout');

const ProductCard = require('./ProductCard');

module.exports = function Home({ user, allProductCard }) {
  return (
    <Layout user={user}>
      <div style={{ marginTop: '150px', color: 'white' }}>
        {allProductCard ? (
          <>
            {allProductCard.map((product) => (<ProductCard product={product} />))}
          </>
        ) : (null)}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a href="/products/1">Product 1 page</a>
      {/* <a href="/">
        <div />
        <div className="allProducts">
          {allProducts
            ? (
              <>
                {allProducts.map((el) => (
                  <Product el={el} />
                ))}
              </>
            ) : (null)}
          <User />
        </div>
      </a> */}
    </Layout>
  );
};
