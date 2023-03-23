const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');
// const ProductCard = require('./ProductCard');

module.exports = function Profile({ favoriteProducts }) {
    console.log('во вью', favoriteProducts);
  return (
    <Layout>
      <div className="profile">
        <div className="account_info">
          <h1>Account information</h1>
        </div>
        <div className="favorite_products">
          <h2>Favorite products</h2>
          {favoriteProducts?.length ? (
            favoriteProducts.map((product) => ( <ProductCard product={product}/>
            ))
          ) : (<h2>Favorite products list is empty </h2>)}
        </div>
      </div>
    </Layout>
  );
};
