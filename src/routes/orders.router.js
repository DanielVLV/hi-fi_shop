/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const router = require('express').Router();
const { Sequelize } = require('sequelize');
const ShowOrders = require('../views/ShowOrders');
const {
  Product, Cart, ProductsOrder, Order,
} = require('../../db/models');

router.get('/', async (req, res, next) => {
  try {
    if (req.session?.user) {
      const products = await Order.findAll({
        where: {
          userId: req.session.user.id,
        },
        attributes: [
          'id',
          'createdAt',
        ],
        include: [
          {
            model: Product,
            through: {
              attributes: ['quantity'],
            },
          },
        ],
        group: ['Order.id', 'Products.id', 'Products->ProductsOrders.productId', 'Products->ProductsOrders.orderId', 'Products->ProductsOrders.quantity'],
      });
      const orders = products.map((el) => el.get({ plain: true }));
      // console.log('orders--->', orders);
      res.render(ShowOrders, { orders });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    console.log('get orders error--->', error);
    next(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const userId = req.session.user.id;
    const cart = await Cart.findOne({
      where: {
        userId,
      },
    });
    const cartId = cart.id;

    const products = await Product.findAll({
      attributes: [
        'id',
        'price',
        [Sequelize.fn('COUNT', Sequelize.col('Carts.id')), 'productCount'],
      ],
      include: [
        {
          model: Cart,
          through: {
            attributes: [],
          },
          where: {
            id: cartId,
          },
          attributes: [],
        },
      ],
      group: ['Product.id', 'Carts.id'],
    });
    const cartProducts = products.map((el) => el.get({ plain: true }));
    // console.log('cartProducts---->', cartProducts);
    const newOrder = await Order.create({
      userId,
    });
    // console.log('newOrder--->', newOrder.id);
    const newOrderId = newOrder.id;
    for (let i = 0; i < cartProducts.length; i++) {
      const newOrderProduct = await ProductsOrder.create({
        orderId: newOrderId,
        productId: cartProducts[i].id,
        productPrice: cartProducts[i].price,
        quantity: cartProducts[i].productCount,
      });
    }
    await Cart.destroy({ where: { userId } });

    res.json({ isSuccessfull: true });
  } catch (error) {
    // console.log('make order error------>', error);
    const errorMessage = 'Unknown error';
    res.json({
      isSuccessfull: false,
      errorMessage,
    });
  }
});

module.exports = router;
