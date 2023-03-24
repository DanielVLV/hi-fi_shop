const React = require('react');

module.exports = function SwiperHomePage() {
  return (
    <div className="swiperHomePage glass">
      <div className="columnLeft">
        <div className="swiper mainSwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slide-img-wrapper">
                <img src="/img/anthony-jacobson-xY-Z0-k3_w8-unsplash.jpg" alt="photo" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-img-wrapper">
                <img src="/img/chauhan-moniz-3A0bs74T8zc-unsplash.jpg" alt="photo" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-img-wrapper">
                <img src="/img/ming-BXKF-rHHbT4-unsplash.jpg" alt="photo" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-img-wrapper">
                <img src="/img/sandy-kawadkar-i-FJ4obOoyM-unsplash.jpg" alt="photo" />
              </div>
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
          <div className="swiper-pagination" />
        </div>

      </div>
      <div className="columnRight">
        <p className="textFromHomePage">
          Добро пожаловать в наш интернет-магазин элитной аудиотехники! Мы рады предложить Вам лучшие изделия от ведущих мировых производителей. Наша цель - сделать Вашу жизнь удобнее, комфортнее и престижнее. Ознакомьтесь с нашим ассортиментом и выбирайте лучшее для себя!
        </p>
      </div>
    </div>
  );
};
