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
    await queryInterface.bulkInsert('Categories', [{
      categoryName: 'tv',
    },
    {
      categoryName: 'projector',
    },
    {
      categoryName: 'amplifier',
    },
    {
      categoryName: 'converter',
    },
    {
      categoryName: 'cd player',
    },
    {
      categoryName: 'cable',
    },
    {
      categoryName: 'subwoofer',
    },
    {
      categoryName: 'acoustics',
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
