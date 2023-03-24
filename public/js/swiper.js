const mySwiper = document.querySelector('.mySwiper');
const mainSwiper = document.querySelector('.mainSwiper');

if (mySwiper) {
  const swiper = new Swiper(mySwiper, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
  });
}

if (mainSwiper) {
  const swiper = new Swiper(mainSwiper, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
  });
}
