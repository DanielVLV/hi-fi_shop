const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowOrders(props) {
  const {
    orders
  } = props;
  return (
    <Layout {...props}>

      <div className="container">
        <h1>My orders</h1>
        {orders?.length
          ? orders.map(((el) => (
            <>
              <h4>
                {`Order №${el.id}, placed on ${el.createdAt.toLocaleDateString('en', {

                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}`}

              </h4>
              <table>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
                {el.Products.map((elem) => (
                  <tr>
                    <td>{elem.productName}</td>
                    <td>{elem.price}</td>
                    <td>{elem.ProductsOrders.quantity}</td>
                    <td>{(+elem.price * elem.ProductsOrders.quantity).toFixed(2)}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td colSpan={3}>Total:</td>
                  <td>
                    {el.Products.reduce((acc, item) => acc + (+item.price * item.ProductsOrders.quantity), 0)
                      .toFixed(2)}

                  </td>
                </tr>
              </table>

            </>
          )))
          : (
            <p>Nothing here yet</p>
          )}

      </div>
    </Layout>
  );
};
