const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');
// const ProductCard = require('./ProductCard');

module.exports = function Profile({ favoriteProducts, user, orders }) {
  return (
    <Layout user={user}>
      <div className="profile container">
        <div className='edit_profile'>
          <a href='/editingprofile'>Редактировать профиль</a>
        </div>
        <div className="account_info">
          <h2 className="account_information">Информация об учетной записи</h2>
        </div>
        <div className="past_orders">
          <button className="accordion"><b>Ваши прошлые заказы</b></button>
          <div className="panel">
            <div className="panel_content panel_orders">
              {/* {orders?.length ? (
                orders?.map((order, index) => order.Products.map((prod) => (
                  <table>
                    <tr>
                      <th>№</th>
                      <th>Date</th>
                      <th>Products</th>
                      <th>Quantity</th>
                      <th>Total price</th>
                    </tr>
                    <tr>
                      <th>{index + 1}</th>
                      <th>{JSON.stringify(prod.updatedAt)}</th>
                      <th>{prod.productName}</th>
                      <th>{prod.ProductsOrders.quantity}</th>
                      <th>{prod.price}</th>
                    </tr>
                  </table>

                )))
              ) : (<span>Empty</span>)} */}
            </div>
          </div>
        </div>
        <div className="favorite_products">
          <button className="accordion"><b>Понравившиеся товары</b></button>
          <div className="panel">
            <div className="panel_content">
              {favoriteProducts?.length ? (
                favoriteProducts.map((product) => (<ProductCard product={product} />
                ))
              ) : (

                <p>Список понравившихся товаров пуст</p>

              )}
            </div>
          </div>
        </div>
        <div className="user_setup">
          <button className="accordion"><b>Мои устройства</b></button>
          <div className="panel">
            <div className="panel_content usersetup">
              {user?.usersetup ? (
                <div>
                  <p className="user_setup_p">{user?.usersetup}</p>
                  {/* <button type="button" id="edit_setup"> edit</button> */}
                </div>
              ) : (
                <div>
                  <p className="user_setup_p">Пусто...</p>
                  {/* <button type="button" id="edit_setup"> edit</button> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
