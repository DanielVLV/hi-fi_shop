const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowCart(props) {
  const {
    cart,
  } = props;
  return (
    <Layout {...props}>

      <div className="container">
        <h1>Cart</h1>
        {cart ? (
          <>
            <table>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
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
                <td colSpan={3}>Total:</td>
                <td>
                  {cart.reduce((acc, el) => acc + (+el.price * el.productCount), 0)
                    .toFixed(2)}

                </td>
              </tr>
            </table>
            <button className="btn btn-order" id="order-btn">Confirm order</button>
            <button className="btn btn-clear-cart" id="clear-cart-btn">Clear cart</button>

          </>
        ) : (
          <p>Nothing here yet</p>
        )}

      </div>
    </Layout>
  );
};
