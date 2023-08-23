const Swiper = global.Swiper;

const initReviewsSwiper = () => new Swiper('.reviews__swiper', {

  navigation: {
    nextEl: '.reviews-toggle-next',
    prevEl: '.reviews-toggle-prev',
  },

  breakpoints: {

    1200: {
      allowTouchMove: false,
      slidesPerView: 1.65,
      spaceBetween: 25,
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 1.26,
      spaceBetween: 10,
    },

    320: {
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

export {initReviewsSwiper};
