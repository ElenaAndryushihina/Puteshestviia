const Swiper = global.Swiper;

const initToursSwiper = () => new Swiper('.tours__swiper', {

  navigation: {
    nextEl: '.tours-toggle-next',
    prevEl: '.tours-toggle-prev',
  },

  breakpoints: {

    1200: {
      allowTouchMove: false,
      slidesPerView: 3,
      spaceBetween: 30,
    },

    768: {
      allowTouchMove: true,
      slidesPerView: 2,
      spaceBetween: 18,
    },

    320: {
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

export {initToursSwiper};
