const router = require('express').Router();
const renderTemplate = require('../renderTemplate');
const ShowProduct = require('../views/ShowProduct');
const { Product } = require('../../db/models');
const { ProductToUser } = require('../../db/models');
const fs = require('fs').promises;

router.get('/:id', async (req, res) => {
  const productId = req.params.id;

  const productData = await Product.findOne({
    where: {
      id: productId,
    },
  });
  const product = productData.get();
  const imagesArr = product.imagesUrls.split(', ');
  // console.log(imagesArr);
  product.images = imagesArr;
  // console.log(product);
  const props = await fs.readFile(`${__dirname}/${product.propsSrc}`, 'utf8');
  const propsArr = props.split('\n');
  product.description = propsArr.at(-1);
  // console.log('description---->', description);
  product.properties = propsArr.slice(0, -1).map((el) => el.split(':\t'));
  // console.log('props2---->', properties);
  console.log(product);

  renderTemplate(ShowProduct, { product }, res);
});

router.post('/favoriteproduct', async (req, res) => {
  const user = req.session?.user;
  const userId = user?.id;
  const {productId} = req.body;
  try {
    const addedItem = await ProductToUser.create(({userId, productId}));
    
  } catch (error) {
    
  }
});

module.exports = router;
