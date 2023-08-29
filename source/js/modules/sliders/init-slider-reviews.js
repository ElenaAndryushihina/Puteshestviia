const Swiper = global.Swiper;

const initReviewsSwiper = () => new Swiper('.reviews__swiper', {

  navigation: {
    nextEl: '.reviews-toggle-next',
    prevEl: '.reviews-toggle-prev',
  },

  breakpoints: {

    1200: {
      slidesPerView: 1.66,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 1.29,
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
