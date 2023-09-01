const Swiper = global.Swiper;

const initTrainingSwiper = () => new Swiper('.training__swiper', {

  navigation: {
    nextEl: '.training-toggle-next',
    prevEl: '.training-toggle-prev',
  },

  breakpoints: {

    1200: {
      autoHeight: false,
      slidesPerView: 4,
      spaceBetween: 10,
    },

    768: {
      autoHeight: false,
      slidesPerView: 3,
      spaceBetween: 10,
    },

    320: {
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

export {initTrainingSwiper};
