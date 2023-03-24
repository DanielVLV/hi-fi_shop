const router = require('express').Router();
const isAuth = require('../middleware/isAuth');
const renderTemplate = require('../renderTemplate');
const ShowProduct = require('../views/ShowProduct');
const { Product } = require('../../db/models');
const { ProductToUser } = require('../../db/models');

const fs = require('fs').promises;

router.get('/:id', async (req, res) => {
  const user = req.session?.user;

  const productId = req.params.id;

  const productData = await Product.findOne({
    where: {
      id: productId,
    },
  });
  const product = productData.get();
  const imagesArr = product.imagesUrls.split(', ');
  product.images = imagesArr;
  const props = await fs.readFile(`${__dirname}/${product.propsSrc}`, 'utf8');
  const propsArr = props.split('\n');
  product.description = propsArr.at(-1);
  product.properties = propsArr.slice(0, -1).map((el) => el.split(':\t'));

  let favoriteProduct;
  if (user) {
    favoriteProduct = await ProductToUser.findOne({
      where: {
        userId: req.session?.user?.id,
        productId,
      },
    });
  } else {
    favoriteProduct = {};
  }
  // console.log('props2---->', properties);
  // console.log(product);
  const { categoryId } = product;
  const similarData = await Product.findAll({
    where: {
      categoryId,
    },
  });
  console.log(similarData);
  const similarData1 = similarData.map((el) => el.get());
  const similar = similarData1.map((el) => {
    el.images = el.imagesUrls.split(', ');
    return el;
  });

  renderTemplate(ShowProduct, { product, similar, favoriteProduct, user }, res);
});

router.post('/favoriteproduct', isAuth, async (req, res) => {
  const user = req.session?.user;
  const userId = user?.id;
  const { productId } = req.body;
  try {
    const addedItem = await ProductToUser.create(({ userId, productId }));
    res.json(addedItem);
  } catch (error) {
    console.log(error);
    res.json({ msg: 'error' });
  }
});

router.delete('/favoriteproduct', isAuth, async (req, res) => {
  const user = req.session?.user;
  const userId = user?.id;
  const { productId } = req.body;
  try {
    const deletedItem = await ProductToUser.destroy({
      where: {
        userId, productId,
      },
    });
    res.json({ msg: 'ok' });
  } catch (error) {
    console.log(error);
    res.json({ msg: 'error' });
  }
});

module.exports = router;
