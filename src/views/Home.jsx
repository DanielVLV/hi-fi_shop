const React = require('react');

const Layout = require('./Layout');

const User = require('./User');

module.exports = function Home({ user, allProducts }) {
  return (
    <Layout user={user}>
      <div>
      </div>
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
    </Layout>
  );
};