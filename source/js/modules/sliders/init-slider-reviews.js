import Swiper from '../../vendor/swiper';

const initReviewsSwiper = () => new Swiper('.reviews__swiper', {

  navigation: {
    nextEl: '.reviews-toggle-next',
    prevEl: '.reviews-toggle-prev',
  },

  breakpoints: {

    1200: {
      allowTouchMove: false,
      slidesPerView: 1.65,
      spaceBetween: 10,
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 1.1,
    },

    320: {
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

export {initReviewsSwiper};
