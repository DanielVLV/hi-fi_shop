const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Category, Order, Cart, User,
    }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.belongsToMany(Order, { through: 'ProductsOrders', foreignKey: 'productId' });
      this.belongsToMany(Cart, { through: 'ProductsCarts', foreignKey: 'productId' });
      this.belongsToMany(User, { through: 'ProductToUsers', foreignKey: 'productId' });
    }
  }
  Product.init({
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagesUrls: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    propsSrc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
