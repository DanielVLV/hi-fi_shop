/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [{
      productName: 'LG OLED88Z29LA',
      imagesUrls: './img/products/1.jpg',
      propsSrc: '../txt/1LGOLED88Z29LA.txt',
      price: 1700000,
      categoryId: 1,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
