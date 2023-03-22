const React = require('react');

const Layout = require('./Layout');

// const User = require('./User');

module.exports = function Home({ user, allProducts }) {
  return (
    <Layout user={user}>
      <a href="/">
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
        </div>
      </a>
    </Layout>
  );
};
