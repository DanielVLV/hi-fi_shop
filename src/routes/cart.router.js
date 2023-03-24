/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const router = require('express').Router();
const { Sequelize } = require('sequelize');
const ShowCart = require('../views/ShowCart');
const {
  Product, Cart, ProductsCart,
} = require('../../db/models');

// async function getCartValue(userId) {
//   let cartValue = false;
//   if (userId) {
//     const cart = await Cart.findAll({
//       where: { userId },
//     });
//     if (cart.length) {
//       const cartId = cart[0].id;
//       const products = await Product.findAll({
//         attributes: [
//           'productName',
//           'price',
//           [Sequelize.fn('COUNT', Sequelize.col('Carts.id')), 'productCount'],
//         ],
//         include: [
//           {
//             model: Cart,
//             through: {
//               attributes: [],
//             },
//             where: {
//               id: cartId,
//             },
//             attributes: [],
//           },
//         ],
//         group: ['Product.productName', 'Product.id', 'Carts.id'],
//       });
//       const cartProducts = products.map((el) => el.get({ plain: true }));
//       cartValue = cartProducts.reduce((acc, el) => acc + (+el.price * el.productCount), 0).toFixed(2);
//     }
//   }
//   return cartValue;
// }

router.get('/', async (req, res, next) => {
  try {
    if (req.session?.user) {
      const cart = await Cart.findAll({
        where: { userId: req.session.user.id },
      });
      if (cart.length) {
        const cartId = cart[0].id;
        const products = await Product.findAll({
          attributes: [
            'productName',
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
          group: ['Product.productName', 'Product.id', 'Carts.id'],
        });
        const cartProducts = products.map((el) => el.get({ plain: true }));
        // const cartValue = await getCartValue(req.session?.user?.id);
        res.render(ShowCart, { cart: cartProducts });
      } else {
        res.render(ShowCart, {});
      }
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    // console.log(error);
    next(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.session.user.id;
    const cart = await Cart.findOrCreate({
      where: {
        userId,
      },
    });
    // console.log(cart);
    const cartId = cart[0].id;
    for (let i = 0; i < quantity; i++) {
      const cartProducts = await ProductsCart.create({ cartId, productId });
    }
    // const product = await Product.findOne({
    //   where: { id: productId },
    // });
    // product.productQuantity -= quantity;
    // product.save();
    // const cartValue = await getCartValue(req.session?.user?.id);
    res.json({ isSuccessfull: true });
  } catch (error) {
    console.log('add to cart error------>', error);
    const errorMessage = 'Unknown error';
    res.json({
      isSuccessfull: false,
      errorMessage,
    });
  }
});

router.delete('/', async (req, res) => {
  try {
    // const cart = await Cart.findAll({
    //   where: { userId: req.session.user.id },
    // });
    // const cartId = cart[0].id;
    // const products = await Product.findAll({
    //   attributes: [
    //     'id',
    //     'productName',
    //     'price',
    //     [Sequelize.fn('COUNT', Sequelize.col('Carts.id')), 'productCount'],
    //   ],
    //   include: [
    //     {
    //       model: Cart,
    //       through: {
    //         attributes: [],
    //       },
    //       where: {
    //         id: cartId,
    //       },
    //       attributes: [],
    //     },
    //   ],
    //   group: ['Product.productName', 'Product.id', 'Carts.id'],
    // });
    // const cartProducts = products.map((el) => el.get({ plain: true }));

    // for (const item of cartProducts) {
    //   const product = await Product.findOne({
    //     where: {
    //       id: item.id,
    //     },
    //   });
    //   product.productQuantity += Number(item.productCount);
    //   product.save();
    // }

    await Cart.destroy({ where: { userId: req.session.user.id } });
    res.json({ isDeleteSuccessfull: true });
  } catch (error) {
    res.json({
      isDeleteSuccessfull: false,
      errorMessage: 'Failed to clear cart',
    });
  }
});

module.exports = router;
