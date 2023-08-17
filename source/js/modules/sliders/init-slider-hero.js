import Swiper from '../../vendor/swiper';

const initHeroSwiper = () => new Swiper('.hero__swiper', {

  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },

  loop: true,

  // slidesPerView: 1,

  breakpoints: {

    1200: {
      allowTouchMove: false,
      // slidesPerView: 4,
      // spaceBetween: 35,
      // initialSlide: 0,
    },

    768: {
      allowTouchMove: true,
      // slidesPerView: 2,
      // spaceBetween: 30,
      // initialSlide: 2,
    },

    320: {
      allowTouchMove: true,
      // slidesPerView: 1,
      // initialSlide: 2,
    },
  },
});

export {initHeroSwiper};
