import Swiper from '../../vendor/swiper';

const initToursSwiper = () => new Swiper('.tours__swiper', {

  navigation: {
    nextEl: '.tours-toggle-next',
    prevEl: '.tours-toggle-prev',
  },

  breakpoints: {

    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      // initialSlide: 0,
    },

    768: {
      // slidesPerView: 2,
      // spaceBetween: 30,
      // initialSlide: 2,
    },

    320: {
      // slidesPerView: 1,
      // initialSlide: 2,
    },
  },
});

export {initToursSwiper};
