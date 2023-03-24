const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowCart(props) {
  const {
    cart,
  } = props;
  return (
    <Layout {...props}>

      <div className="container">
        <h1>Корзина</h1>
        {cart ? (
          <>
            <table>
              <tr>
                <th>Товары</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Итого</th>
              </tr>
              {cart.map((el) => (
                <tr>
                  <td>{el.productName}</td>
                  <td>{el.price}</td>
                  <td>{el.productCount}</td>
                  <td>{(+el.price * el.productCount).toFixed(2)}</td>
                </tr>
              ))}
              <tr className="total">
                <td colSpan={3}>Итого:</td>
                <td>
                  {cart.reduce((acc, el) => acc + (+el.price * el.productCount), 0)
                    .toFixed(2)}

                </td>
              </tr>
            </table>
            <button className="btn btn-order" id="order-btn">Оформить заказ</button>
            <button className="btn btn-clear-cart" id="clear-cart-btn">Очистить корзину</button>

          </>
        ) : (
          <p>Тут пока пусто..</p>
        )}

      </div>
    </Layout>
  );
};
