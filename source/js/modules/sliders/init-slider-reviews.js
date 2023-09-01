const Swiper = global.Swiper;

const initReviewsSwiper = () => new Swiper('.reviews__swiper', {

  navigation: {
    nextEl: '.reviews-toggle-next',
    prevEl: '.reviews-toggle-prev',
  },

  breakpoints: {

    1200: {
      autoHeight: false,
      slidesPerView: 1.63,
      spaceBetween: 27,
    },

    768: {
      autoHeight: false,
      slidesPerView: 1.26,
      spaceBetween: 30,
    },

    320: {
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

export {initReviewsSwiper};
