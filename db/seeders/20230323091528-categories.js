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
      isAvailable: true,
    },
    {
      productName: 'Sony XR-77A80K',
      imagesUrls: './img/products/2.jpg',
      propsSrc: '../txt/2Sony-XR-77A80K.txt',
      price: 280000,
      categoryId: 1,
      isAvailable: true,
    },
    {
      productName: '3Sony-XR-75X95K.txt',
      imagesUrls: './img/products/3.jpg',
      propsSrc: '../txt/3Sony-XR-75X95K.txt',
      price: 375000,
      categoryId: 1,
      isAvailable: false,
    },
    {
      productName: 'Sony XR-75X95K',
      imagesUrls: './img/products/4.jpg',
      propsSrc: '../txt/4Hisense-120L5F.txt',
      price: 323990,
      categoryId: 2,
      isAvailable: true,
    },
    {
      productName: 'Sony XR-85Z9J',
      imagesUrls: './img/products/5.jpg',
      propsSrc: '../txt/5Sony-XR-85Z9J.txt',
      price: 590000,
      categoryId: 1,
      isAvailable: true,
    },
    {
      productName: 'Optoma ZU606Te',
      imagesUrls: './img/products/6.jpg, ./img/products/6_2.jpg',
      propsSrc: '../txt/6Optoma-ZU606Te.txt',
      price: 480050,
      categoryId: 2,
      isAvailable: true,
    },
    {
      productName: 'Anthem MRX 740',
      imagesUrls: './img/products/7.jpg, ./img/products/7.jpg./img/products/7_2.jpg',
      propsSrc: '../txt/7Anthem-MRX-740.txt',
      price: 439000,
      categoryId: 3,
      isAvailable: true,
    },
    {
      productName: 'Accuphase A-48',
      imagesUrls: './img/products/8.jpg, ./img/products/8_2.jpg',
      propsSrc: '../txt/8Accuphase-A-48.txt',
      price: 924000,
      categoryId: 3,
      isAvailable: true,
    },
    {
      productName: 'Aesthetix Pandora USB DAC',
      imagesUrls: './img/products/9.jpg, ./img/products/9_2.jpg, ./img/products/9_3.jpg',
      propsSrc: '../txt/9Aesthetix-Pandora-USB-DAC.txt',
      price: 526000,
      categoryId: 4,
      isAvailable: true,
    },
    {
      productName: 'Accustic Arts Player ES - MK 2',
      imagesUrls: './img/products/10.jpg, ./img/products/10_2.jpg, ./img/products/10_3.jpg',
      propsSrc: '../txt/10Accustic-Arts-Player-ES-MK-2.txt',
      price: 277500,
      categoryId: 5,
      isAvailable: false,
    },
    {
      productName: 'Accustic Arts AMP I MK-2',
      imagesUrls: './img/products/11.png, ./img/products/11_2.png',
      propsSrc: '../txt/11Accustic-Arts-AMP-I-MK-2.txt',
      price: 331000,
      categoryId: 3,
      isAvailable: true,
    },
    {
      productName: 'Velodyne DD-18+ Ebony High Black',
      imagesUrls: './img/products/12.jpg',
      propsSrc: '../txt/12Velodyne-DD-18-Ebony-High-Black.txt',
      price: 715000,
      categoryId: 7,
      isAvailable: true,
    },
    {
      productName: 'Krix MX-10',
      imagesUrls: './img/products/13.jpg',
      propsSrc: '../txt/13Krix-MX-10.txt',
      price: 849990,
      categoryId: 3,
      isAvailable: true,
    },
    {
      productName: 'Zingali Zero Sub',
      imagesUrls: './img/products/14.png',
      propsSrc: '../txt/14Zingali-Zero-Sub.txt',
      price: 145620,
      categoryId: 7,
      isAvailable: true,
    },
    {
      productName: 'Audiovector QR 5 Black Piano',
      imagesUrls: './img/products/15.jpg, ./img/products/15_1.jpg',
      propsSrc: '../txt/15Audiovector-QR-5.txt',
      price: 229990,
      categoryId: 8,
      isAvailable: false,
    },
    {
      productName: 'Audiovector QR 5 White Silk',
      imagesUrls: './img/products/15_2.jpg, ./img/products/15_3.jpg',
      propsSrc: '../txt/15Audiovector-QR-5.txt',
      price: 249990,
      categoryId: 8,
      isAvailable: true,
    },
    {
      productName: 'Audiovector QR 5 Dark Valnut',
      imagesUrls: './img/products/15_4.jpg, ./img/products/15_5.jpg',
      propsSrc: '../txt/15Audiovector-QR-5.txt',
      price: 274990,
      categoryId: 8,
      isAvailable: true,
    },
    {
      productName: 'Epson EH-LS12000B',
      imagesUrls: './img/products/16.jpg, ./img/products/16_2.jpg, ./img/products/16_3.jpg',
      propsSrc: '../txt/16Epson-EH-LS12000B.txt',
      price: 740000,
      categoryId: 2,
      isAvailable: true,
    },
    {
      productName: 'McIntosh CDA2M',
      imagesUrls: './img/products/17.jpg',
      propsSrc: '../txt/17McIntosh-CDA2M.txt',
      price: 124000,
      categoryId: 6,
      isAvailable: true,
    },
    {
      productName: 'Chord Rumour X',
      imagesUrls: './img/products/18.png',
      propsSrc: '../txt/18Chord-Rumour-X.txt',
      price: 114520,
      categoryId: 6,
      isAvailable: true,
    },
    {
      productName: 'Krix Volcanix Slim',
      imagesUrls: './img/products/19.png',
      propsSrc: '../txt/19Krix-Volcanix-Slim.txt',
      price: 339990,
      categoryId: 7,
      isAvailable: false,
    },
    {
      productName: 'Zingali Zero Sei',
      imagesUrls: './img/products/20.jpg, ./img/products/20_2.jpg, ./img/products/20_3.jpg',
      propsSrc: '../txt/20Zingali-Zero-Sei.txt',
      price: 304500,
      categoryId: 8,
      isAvailable: true,
    },
    {
      productName: 'Chord Tonearm SLIM',
      imagesUrls: './img/products/21.jpg',
      propsSrc: '../txt/21Chord-Tonearm-SLIM.txt',
      price: 255690,
      categoryId: 6,
      isAvailable: true,
    },
    {
      productName: 'Sony XR-65A83K',
      imagesUrls: './img/products/22.jpg',
      propsSrc: '../txt/22Sony-XR-65A83K.txt',
      price: 180000,
      categoryId: 1,
      isAvailable: true,
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
    await queryInterface.bulkDelete('Products', null, {});
  },
};
