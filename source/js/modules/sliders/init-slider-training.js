import Swiper from '../../vendor/swiper';

const initTrainingSwiper = () => new Swiper('.training__swiper', {

  navigation: {
    nextEl: '.training-toggle-next',
    prevEl: '.training-toggle-prev',
  },

  breakpoints: {

    1200: {
      allowTouchMove: false,
      slidesPerView: 4,
      spaceBetween: 10,
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 3,
    },

    320: {
      allowTouchMove: true,
      slidesPerView: 1,
    },
  },
});

export {initTrainingSwiper};
