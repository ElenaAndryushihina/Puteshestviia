import Swiper from '../../vendor/swiper';

const initReviewsSwiper = () => new Swiper('.reviews__swiper', {

  navigation: {
    nextEl: '.reviews-toggle-next',
    prevEl: '.reviews-toggle-prev',
  },

  breakpoints: {

    1200: {
      slidesPerView: 1.5,
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

export {initReviewsSwiper};
