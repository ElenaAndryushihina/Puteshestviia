import Swiper from '../../vendor/swiper';

const initTrainingSwiper = () => new Swiper('.training__swiper', {

  navigation: {
    nextEl: '.training-toggle-next',
    prevEl: '.training-toggle-prev',
  },

  breakpoints: {

    1200: {
      slidesPerView: 4,
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

export {initTrainingSwiper};
