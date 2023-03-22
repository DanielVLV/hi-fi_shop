const React = require('react');

const Layout = require('./Layout');

// const User = require('./User');

module.exports = function Home({ user, allProducts }) {
  return (
    <Layout user={user}>
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
