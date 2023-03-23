const React = require('react');

const Layout = require('./Layout');

const ProductCard = require('./ProductCard');

module.exports = function Home({ user, allProductCard }) {
  return (
    <Layout user={user}>
      <main className="main">
      <div style={{ marginTop: '150px', color: 'white' }}>
        {allProductCard ? (
          <>
            {allProductCard.map((product) => (<ProductCard product={product} />))}
          </>
        ) : (null)}
      </div>
      </main>
    </Layout>
  );
};
