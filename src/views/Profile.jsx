const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({favoriteProducts}) {
    return (
      <Layout>
        <div className='profile'>
            <div className='account_info'>
                <h1>Account information</h1>
            </div>
            <div className='favorite_products'> 
            <h2>Favorite products</h2>
                {favoriteProducts? (
                    favoriteProducts.map((product) => {
                        <div className='product_container'>
                            <a href="#" > <img src="#" alt="item_photo"/>
                            <p className='product_name'> название продукта </p>
                            </a>
                            <button id={product.id} type='button'> Добавить в корзину </button>
                        </div>
                    })
                ):(<h2>Favorite products list is empty </h2>)}
            </div>
        </div>
      </Layout>
    );
  };
  